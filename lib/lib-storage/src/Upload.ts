import {
  AbortMultipartUploadCommandOutput,
  CompletedPart,
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadCommandOutput,
  CreateMultipartUploadCommand,
  CreateMultipartUploadCommandOutput,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectTaggingCommand,
  S3Client,
  Tag,
  UploadPartCommand,
} from "@aws-sdk/client-s3";
import { AbortController, AbortSignal } from "@smithy/abort-controller";
import {
  EndpointParameterInstructionsSupplier,
  getEndpointFromInstructions,
  toEndpointV1,
} from "@smithy/middleware-endpoint";
import { HttpRequest } from "@smithy/protocol-http";
import { extendedEncodeURIComponent } from "@smithy/smithy-client";
import { Endpoint } from "@smithy/types";
import { EventEmitter } from "events";

import { byteLength } from "./bytelength";
import { getChunk } from "./chunker";
import { BodyDataTypes, Options, Progress } from "./types";

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

  private client: S3Client;
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

  private isMultiPart = true;
  private singleUploadResult?: CompleteMultipartUploadCommandOutput;

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
    this.abortController = options.abortController ?? new AbortController();
  }

  async abort(): Promise<void> {
    /**
     * Abort stops all new uploads and immediately exists the top level promise on this.done()
     * Concurrent threads in flight clean up eventually.
     */
    this.abortController.abort();
  }

  public async done(): Promise<CompleteMultipartUploadCommandOutput | AbortMultipartUploadCommandOutput> {
    return await Promise.race([this.__doMultipartUpload(), this.__abortTimeout(this.abortController.signal)]);
  }

  public on(event: "httpUploadProgress", listener: (progress: Progress) => void): this {
    this.uploadEvent = event;
    return super.on(event, listener);
  }

  private async __uploadUsingPut(dataPart: RawDataPart): Promise<void> {
    this.isMultiPart = false;
    const params = { ...this.params, Body: dataPart.data };

    const clientConfig = this.client.config;
    const requestHandler = clientConfig.requestHandler;
    const eventEmitter: EventEmitter | null = requestHandler instanceof EventEmitter ? requestHandler : null;
    const uploadEventListener = (event: ProgressEvent) => {
      this.bytesUploadedSoFar = event.loaded;
      this.totalBytes = event.total;
      this.__notifyProgress({
        loaded: this.bytesUploadedSoFar,
        total: this.totalBytes,
        part: dataPart.partNumber,
        Key: this.params.Key,
        Bucket: this.params.Bucket,
      });
    };

    if (eventEmitter !== null) {
      // The requestHandler is the xhr-http-handler.
      eventEmitter.on("xhr.upload.progress", uploadEventListener);
    }

    const resolved = await Promise.all([this.client.send(new PutObjectCommand(params)), clientConfig?.endpoint?.()]);
    const putResult = resolved[0];
    let endpoint: Endpoint | undefined = resolved[1];

    if (!endpoint) {
      endpoint = toEndpointV1(
        await getEndpointFromInstructions(params, PutObjectCommand as EndpointParameterInstructionsSupplier, {
          ...clientConfig,
        })
      );
    }

    if (!endpoint) {
      throw new Error('Could not resolve endpoint from S3 "client.config.endpoint()" nor EndpointsV2.');
    }

    if (eventEmitter !== null) {
      eventEmitter.off("xhr.upload.progress", uploadEventListener);
    }

    const locationKey = this.params
      .Key!.split("/")
      .map((segment) => extendedEncodeURIComponent(segment))
      .join("/");
    const locationBucket = extendedEncodeURIComponent(this.params.Bucket!);

    const Location: string = (() => {
      const endpointHostnameIncludesBucket = endpoint.hostname.startsWith(`${locationBucket}.`);
      const forcePathStyle = this.client.config.forcePathStyle;
      if (forcePathStyle) {
        return `${endpoint.protocol}//${endpoint.hostname}/${locationBucket}/${locationKey}`;
      }
      if (endpointHostnameIncludesBucket) {
        return `${endpoint.protocol}//${endpoint.hostname}/${locationKey}`;
      }
      return `${endpoint.protocol}//${locationBucket}.${endpoint.hostname}/${locationKey}`;
    })();

    this.singleUploadResult = {
      ...putResult,
      Bucket: this.params.Bucket,
      Key: this.params.Key,
      Location,
    };
    const totalSize = byteLength(dataPart.data);

    this.__notifyProgress({
      loaded: totalSize,
      total: totalSize,
      part: 1,
      Key: this.params.Key,
      Bucket: this.params.Bucket,
    });
  }

  private async __createMultipartUpload(): Promise<CreateMultipartUploadCommandOutput> {
    if (!this.createMultiPartPromise) {
      const createCommandParams = { ...this.params, Body: undefined };
      this.createMultiPartPromise = this.client.send(new CreateMultipartUploadCommand(createCommandParams));
    }
    return this.createMultiPartPromise;
  }

  private async __doConcurrentUpload(dataFeeder: AsyncGenerator<RawDataPart, void, undefined>): Promise<void> {
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
          const { UploadId } = await this.__createMultipartUpload();
          this.uploadId = UploadId;
          if (this.abortController.signal.aborted) {
            return;
          }
        }

        const partSize: number = byteLength(dataPart.data) || 0;

        const requestHandler = this.client.config.requestHandler;
        const eventEmitter: EventEmitter | null = requestHandler instanceof EventEmitter ? requestHandler : null;

        let lastSeenBytes = 0;
        const uploadEventListener = (event: ProgressEvent, request: HttpRequest) => {
          const requestPartSize = Number(request.query["partNumber"]) || -1;

          if (requestPartSize !== dataPart.partNumber) {
            // ignored, because the emitted event is not for this part.
            return;
          }

          if (event.total && partSize) {
            this.bytesUploadedSoFar += event.loaded - lastSeenBytes;
            lastSeenBytes = event.loaded;
          }

          this.__notifyProgress({
            loaded: this.bytesUploadedSoFar,
            total: this.totalBytes,
            part: dataPart.partNumber,
            Key: this.params.Key,
            Bucket: this.params.Bucket,
          });
        };

        if (eventEmitter !== null) {
          // The requestHandler is the xhr-http-handler.
          eventEmitter.on("xhr.upload.progress", uploadEventListener);
        }

        const partResult = await this.client.send(
          new UploadPartCommand({
            ...this.params,
            UploadId: this.uploadId,
            Body: dataPart.data,
            PartNumber: dataPart.partNumber,
          })
        );

        if (eventEmitter !== null) {
          eventEmitter.off("xhr.upload.progress", uploadEventListener);
        }

        if (this.abortController.signal.aborted) {
          return;
        }

        if (!partResult.ETag) {
          throw new Error(
            `Part ${dataPart.partNumber} is missing ETag in UploadPart response. Missing Bucket CORS configuration for ETag header?`
          );
        }

        this.uploadedParts.push({
          PartNumber: dataPart.partNumber,
          ETag: partResult.ETag,
          ...(partResult.ChecksumCRC32 && { ChecksumCRC32: partResult.ChecksumCRC32 }),
          ...(partResult.ChecksumCRC32C && { ChecksumCRC32C: partResult.ChecksumCRC32C }),
          ...(partResult.ChecksumSHA1 && { ChecksumSHA1: partResult.ChecksumSHA1 }),
          ...(partResult.ChecksumSHA256 && { ChecksumSHA256: partResult.ChecksumSHA256 }),
        });

        if (eventEmitter === null) {
          this.bytesUploadedSoFar += partSize;
        }

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

  private async __doMultipartUpload(): Promise<CompleteMultipartUploadCommandOutput> {
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
      result = this.singleUploadResult!;
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

  private __notifyProgress(progress: Progress): void {
    if (this.uploadEvent) {
      this.emit(this.uploadEvent, progress);
    }
  }

  private async __abortTimeout(abortSignal: AbortSignal): Promise<AbortMultipartUploadCommandOutput> {
    return new Promise((resolve, reject) => {
      abortSignal.onabort = () => {
        const abortError = new Error("Upload aborted.");
        abortError.name = "AbortError";
        reject(abortError);
      };
    });
  }

  private __validateInput(): void {
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
