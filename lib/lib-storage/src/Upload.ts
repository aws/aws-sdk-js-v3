import {
  CompletedPart,
  CompleteMultipartUploadCommand,
  CreateMultipartUploadCommand,
  CreateMultipartUploadCommandOutput,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  PutObjectTaggingCommand,
  ServiceOutputTypes,
  Tag,
  UploadPartCommand,
} from "@aws-sdk/client-s3";
import { EventEmitter } from "events";
import { BodyDataTypes, Options, Progress, ServiceClients } from "./types";
import { getChunk } from "./chunker";
import { byteLength } from "./bytelength";
import { AbortController, AbortSignal } from "@aws-sdk/abort-controller";

export interface RawDataPart {
  partNumber: number;
  data: BodyDataTypes;
  lastPart?: boolean;
}

const MIN_PART_SIZE = 1024 * 1024 * 5;

export class Upload extends EventEmitter {
  /**
   * S3 multipart upload does not allow more than 10000 parts.
   */
  private MAX_PARTS = 10000;

  // Defaults.
  private queueSize = 4;
  private partSize = MIN_PART_SIZE;
  private leavePartsOnError = false;
  private tags: Tag[] = [];

  private client: ServiceClients;
  private params: PutObjectCommandInput;

  // used for reporting progress.
  private totalBytes?: number;
  private bytesUploadedSoFar: number;

  // used in the upload.
  private abortController: AbortController;
  private concurrentUploaders: Promise<void>[] = [];
  private createMultiPartPromise?: Promise<CreateMultipartUploadCommandOutput>;

  private uploadedParts: CompletedPart[] = [];
  private uploadId?: string;
  uploadEvent?: string;

  private isMultiPart: boolean = true;
  private putResponse?: PutObjectCommandOutput;

  constructor(options: Options) {
    super();

    // set defaults from options.
    this.queueSize = options.queueSize || this.queueSize;
    this.partSize = options.partSize || this.partSize;
    this.leavePartsOnError = options.leavePartsOnError || this.leavePartsOnError;
    this.tags = options.tags || this.tags;

    this.client = options.client;
    this.params = options.params;

    this.__validateInput();

    // set progress defaults
    this.totalBytes = byteLength(this.params.Body);
    this.bytesUploadedSoFar = 0;
    this.abortController = new AbortController();
  }

  async abort(): Promise<void> {
    /**
     * Abort stops all new uploads and immediately exists the top level promise on this.done()
     * Concurrent threads in flight clean up eventually.
     */
    this.abortController.abort();
  }

  async done(): Promise<ServiceOutputTypes> {
    return await Promise.race([this.__doMultipartUpload(), this.__abortTimeout(this.abortController.signal)]);
  }

  on(event: "httpUploadProgress", listener: (progress: Progress) => void): any {
    this.uploadEvent = event;
    super.on(event, listener);
  }

  async __uploadUsingPut(dataPart: RawDataPart) {
    this.isMultiPart = false;
    const params = { ...this.params, Body: dataPart.data };
    const putResult = await this.client.send(new PutObjectCommand(params));
    this.putResponse = putResult;
    const totalSize = byteLength(dataPart.data);
    this.__notifyProgress({
      loaded: totalSize,
      total: totalSize,
      part: 1,
      Key: this.params.Key,
      Bucket: this.params.Bucket,
    });
  }

  async __createMultipartUpload() {
    if (!this.createMultiPartPromise) {
      const createCommandParams = { ...this.params, Body: undefined };
      this.createMultiPartPromise = this.client.send(new CreateMultipartUploadCommand(createCommandParams));
    }
    const createMultipartUploadResult = await this.createMultiPartPromise;
    this.uploadId = createMultipartUploadResult.UploadId;
  }

  async __doConcurrentUpload(dataFeeder: AsyncGenerator<RawDataPart, void, undefined>): Promise<void> {
    for await (const dataPart of dataFeeder) {
      if (this.uploadedParts.length > this.MAX_PARTS) {
        throw new Error(
          `Exceeded ${this.MAX_PARTS} as part of the upload to ${this.params.Key} and ${this.params.Bucket}.`
        );
      }

      try {
        if (this.abortController.signal.aborted) {
          return;
        }

        // Use put instead of multi-part for one chunk uploads.
        if (dataPart.partNumber === 1 && dataPart.lastPart) {
          return await this.__uploadUsingPut(dataPart);
        }

        if (!this.uploadId) {
          await this.__createMultipartUpload();
          if (this.abortController.signal.aborted) {
            return;
          }
        }

        const partResult = await this.client.send(
          new UploadPartCommand({
            ...this.params,
            UploadId: this.uploadId,
            Body: dataPart.data,
            PartNumber: dataPart.partNumber,
          })
        );

        if (this.abortController.signal.aborted) {
          return;
        }

        this.uploadedParts.push({
          PartNumber: dataPart.partNumber,
          ETag: partResult.ETag,
        });

        this.bytesUploadedSoFar += byteLength(dataPart.data);
        this.__notifyProgress({
          loaded: this.bytesUploadedSoFar,
          total: this.totalBytes,
          part: dataPart.partNumber,
          Key: this.params.Key,
          Bucket: this.params.Bucket,
        });
      } catch (e) {
        // Failed to create multi-part or put
        if (!this.uploadId) {
          throw e;
        }
        // on leavePartsOnError throw an error so users can deal with it themselves,
        // otherwise swallow the error.
        if (this.leavePartsOnError) {
          throw e;
        }
      }
    }
  }

  async __doMultipartUpload(): Promise<ServiceOutputTypes> {
    // Set up data input chunks.
    const dataFeeder = getChunk(this.params.Body, this.partSize);

    // Create and start concurrent uploads.
    for (let index = 0; index < this.queueSize; index++) {
      const currentUpload = this.__doConcurrentUpload(dataFeeder);
      this.concurrentUploaders.push(currentUpload);
    }

    // Create and start concurrent uploads.
    await Promise.all(this.concurrentUploaders);
    if (this.abortController.signal.aborted) {
      throw Object.assign(new Error("Upload aborted."), { name: "AbortError" });
    }

    let result;
    if (this.isMultiPart) {
      this.uploadedParts.sort((a, b) => a.PartNumber! - b.PartNumber!);

      const uploadCompleteParams = {
        ...this.params,
        Body: undefined,
        UploadId: this.uploadId,
        MultipartUpload: {
          Parts: this.uploadedParts,
        },
      };
      result = await this.client.send(new CompleteMultipartUploadCommand(uploadCompleteParams));
    } else {
      result = this.putResponse!;
    }

    // Add tags to the object after it's completed the upload.
    if (this.tags.length) {
      await this.client.send(
        new PutObjectTaggingCommand({
          ...this.params,
          Tagging: {
            TagSet: this.tags,
          },
        })
      );
    }

    return result;
  }

  __notifyProgress(progress: Progress) {
    if (this.uploadEvent) {
      this.emit(this.uploadEvent, progress);
    }
  }

  async __abortTimeout(abortSignal: AbortSignal): Promise<ServiceOutputTypes> {
    return new Promise((resolve, reject) => {
      abortSignal.onabort = () => {
        const abortError = new Error("Upload aborted.");
        abortError.name = "AbortError";
        reject(abortError);
      };
    });
  }

  __validateInput() {
    if (!this.params) {
      throw new Error(`InputError: Upload requires params to be passed to upload.`);
    }

    if (!this.client) {
      throw new Error(`InputError: Upload requires a AWS client to do uploads with.`);
    }

    if (this.partSize < MIN_PART_SIZE) {
      throw new Error(
        `EntityTooSmall: Your proposed upload partsize [${this.partSize}] is smaller than the minimum allowed size [${MIN_PART_SIZE}] (5MB)`
      );
    }

    if (this.queueSize < 1) {
      throw new Error(`Queue size: Must have at least one uploading queue.`);
    }
  }
}
