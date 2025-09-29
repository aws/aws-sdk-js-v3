import {
  AbortMultipartUploadCommand,
  ChecksumAlgorithm,
  CompletedPart,
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
  CreateMultipartUploadCommand,
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectTaggingCommand,
  S3Client,
  Tag,
  UploadPartCommand,
  UploadPartCommandInput,
} from "@aws-sdk/client-s3";
import { AbortController } from "@smithy/abort-controller";
import {
  EndpointParameterInstructionsSupplier,
  getEndpointFromInstructions,
  toEndpointV1,
} from "@smithy/middleware-endpoint";
import { HttpRequest } from "@smithy/protocol-http";
import { extendedEncodeURIComponent } from "@smithy/smithy-client";
import type { AbortController as IAbortController, AbortSignal as IAbortSignal, Endpoint } from "@smithy/types";
import { EventEmitter } from "events";

import { byteLength } from "./byteLength";
import { BYTE_LENGTH_SOURCE, byteLengthSource } from "./byteLengthSource";
import { getChunk } from "./chunker";
import { BodyDataTypes, Options, Progress } from "./types";

export interface RawDataPart {
  partNumber: number;
  data: BodyDataTypes;
  lastPart?: boolean;
}

export class Upload extends EventEmitter {
  /**
   * @internal
   * modified in testing only.
   */
  private static MIN_PART_SIZE = 1024 * 1024 * 5;
  /**
   * S3 multipart upload does not allow more than 10,000 parts.
   */
  private MAX_PARTS = 10_000;

  // Defaults.
  private readonly queueSize: number = 4;
  private readonly partSize: number;
  private readonly leavePartsOnError: boolean = false;
  private readonly tags: Tag[] = [];

  private readonly client: S3Client;
  private readonly params: PutObjectCommandInput &
    Partial<CreateMultipartUploadCommandInput & UploadPartCommandInput & CompleteMultipartUploadCommandInput>;

  // used for reporting progress.
  private totalBytes?: number;
  private readonly totalBytesSource?: BYTE_LENGTH_SOURCE;
  private bytesUploadedSoFar: number;

  // used in the upload.
  private abortController: IAbortController;
  private concurrentUploaders: Promise<void>[] = [];
  private createMultiPartPromise?: Promise<CreateMultipartUploadCommandOutput>;
  private abortMultipartUploadCommand: AbortMultipartUploadCommand | null = null;

  private uploadedParts: CompletedPart[] = [];
  private uploadEnqueuedPartsCount = 0;
  private expectedPartsCount?: number;
  /**
   * Last UploadId if the upload was done with MultipartUpload and not PutObject.
   */
  public uploadId?: string;
  public uploadEvent?: string;

  private isMultiPart = true;
  private singleUploadResult?: CompleteMultipartUploadCommandOutput;
  private sent = false;

  constructor(options: Options) {
    super();

    // set defaults from options.
    this.queueSize = options.queueSize || this.queueSize;
    this.leavePartsOnError = options.leavePartsOnError || this.leavePartsOnError;
    this.tags = options.tags || this.tags;

    this.client = options.client;
    this.params = options.params;

    if (!this.params) {
      throw new Error(`InputError: Upload requires params to be passed to upload.`);
    }

    // set progress defaults
    this.totalBytes = this.params.ContentLength ?? byteLength(this.params.Body);
    this.totalBytesSource = byteLengthSource(this.params.Body, this.params.ContentLength);
    this.bytesUploadedSoFar = 0;
    this.abortController = options.abortController ?? new AbortController();

    this.partSize =
      options.partSize || Math.max(Upload.MIN_PART_SIZE, Math.floor((this.totalBytes || 0) / this.MAX_PARTS));

    if (this.totalBytes !== undefined) {
      this.expectedPartsCount = Math.ceil(this.totalBytes / this.partSize);
    }

    this.__validateInput();
  }

  async abort(): Promise<void> {
    /**
     * Abort stops all new uploads and immediately exists the top level promise on this.done()
     * Concurrent threads in flight clean up eventually.
     */
    this.abortController.abort();
  }

  public async done(): Promise<CompleteMultipartUploadCommandOutput> {
    if (this.sent) {
      throw new Error(
        "@aws-sdk/lib-storage: this instance of Upload has already executed .done(). Create a new instance."
      );
    }
    this.sent = true;
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
      const optionalPort = endpoint.port ? `:${endpoint.port}` : ``;
      if (forcePathStyle) {
        return `${endpoint.protocol}//${endpoint.hostname}${optionalPort}/${locationBucket}/${locationKey}`;
      }
      if (endpointHostnameIncludesBucket) {
        return `${endpoint.protocol}//${endpoint.hostname}${optionalPort}/${locationKey}`;
      }
      return `${endpoint.protocol}//${locationBucket}.${endpoint.hostname}${optionalPort}/${locationKey}`;
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
    const requestChecksumCalculation = await this.client.config.requestChecksumCalculation();
    if (!this.createMultiPartPromise) {
      const createCommandParams = { ...this.params, Body: undefined };
      if (requestChecksumCalculation === "WHEN_SUPPORTED") {
        createCommandParams.ChecksumAlgorithm = this.params.ChecksumAlgorithm || ChecksumAlgorithm.CRC32;
      }
      this.createMultiPartPromise = this.client
        .send(new CreateMultipartUploadCommand(createCommandParams))
        .then((createMpuResponse) => {
          // We use the parameter Bucket/Key rather than the information from
          // createMultipartUpload response in case the Bucket is an access point arn.
          this.abortMultipartUploadCommand = new AbortMultipartUploadCommand({
            Bucket: this.params.Bucket,
            Key: this.params.Key,
            UploadId: createMpuResponse.UploadId,
          });
          return createMpuResponse;
        });
    }
    return this.createMultiPartPromise;
  }

  private async __doConcurrentUpload(dataFeeder: AsyncGenerator<RawDataPart, void, undefined>): Promise<void> {
    for await (const dataPart of dataFeeder) {
      if (this.uploadEnqueuedPartsCount > this.MAX_PARTS) {
        throw new Error(
          `Exceeded ${this.MAX_PARTS} parts in multipart upload to Bucket: ${this.params.Bucket} Key: ${this.params.Key}.`
        );
      }

      if (this.abortController.signal.aborted) {
        return;
      }

      // Use put instead of multipart for one chunk uploads.
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

      this.uploadEnqueuedPartsCount += 1;

      this.__validateUploadPart(dataPart);

      const partResult = await this.client.send(
        new UploadPartCommand({
          ...this.params,
          // dataPart.data is chunked into a non-streaming buffer
          // so the ContentLength from the input should not be used for MPU.
          ContentLength: undefined,
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
    }
  }

  private async __doMultipartUpload(): Promise<CompleteMultipartUploadCommandOutput> {
    const dataFeeder = getChunk(this.params.Body, this.partSize);
    const concurrentUploaderFailures: Error[] = [];

    for (let index = 0; index < this.queueSize; index++) {
      const currentUpload = this.__doConcurrentUpload(dataFeeder).catch((err) => {
        concurrentUploaderFailures.push(err);
      });
      this.concurrentUploaders.push(currentUpload);
    }

    await Promise.all(this.concurrentUploaders);
    if (concurrentUploaderFailures.length >= 1) {
      await this.markUploadAsAborted();
      /**
       * Previously, each promise in concurrentUploaders could potentially throw
       * and immediately return control to user code. However, we want to wait for
       * all uploaders to finish before calling AbortMultipartUpload to avoid
       * stranding uploaded parts.
       *
       * We throw only the first error to be consistent with prior behavior,
       * but may consider combining the errors into a report in the future.
       */
      throw concurrentUploaderFailures[0];
    }

    if (this.abortController.signal.aborted) {
      await this.markUploadAsAborted();
      throw Object.assign(new Error("Upload aborted."), { name: "AbortError" });
    }

    let result;
    if (this.isMultiPart) {
      const { expectedPartsCount, uploadedParts, totalBytes, totalBytesSource } = this;
      if (totalBytes !== undefined && expectedPartsCount !== undefined && uploadedParts.length !== expectedPartsCount) {
        throw new Error(`Expected ${expectedPartsCount} part(s) but uploaded ${uploadedParts.length} part(s).
The expected part count is based on the byte-count of the input.params.Body,
which was read from ${totalBytesSource} and is ${totalBytes}.
If this is not correct, provide an override value by setting a number
to input.params.ContentLength in bytes.
`);
      }

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
      if (typeof result?.Location === "string" && result.Location.includes("%2F")) {
        result.Location = result.Location.replace(/%2F/g, "/");
      }
    } else {
      result = this.singleUploadResult!;
    }

    this.abortMultipartUploadCommand = null;

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

  /**
   * Abort the last multipart upload in progress
   * if we know the upload id, the user did not specify to leave the parts, and
   * we have a prepared AbortMultipartUpload command.
   */
  private async markUploadAsAborted(): Promise<void> {
    if (this.uploadId && !this.leavePartsOnError && null !== this.abortMultipartUploadCommand) {
      await this.client.send(this.abortMultipartUploadCommand);
      this.abortMultipartUploadCommand = null;
    }
  }

  private __notifyProgress(progress: Progress): void {
    if (this.uploadEvent) {
      this.emit(this.uploadEvent, progress);
    }
  }

  private async __abortTimeout(abortSignal: IAbortSignal): Promise<never> {
    return new Promise((resolve, reject) => {
      abortSignal.onabort = () => {
        const abortError = new Error("Upload aborted.");
        abortError.name = "AbortError";
        reject(abortError);
      };
    });
  }

  private __validateUploadPart(dataPart: RawDataPart): void {
    const actualPartSize = byteLength(dataPart.data);

    if (actualPartSize === undefined) {
      throw new Error(
        `A dataPart was generated without a measurable data chunk size for part number ${dataPart.partNumber}`
      );
    }

    // Skip validation for single-part uploads (PUT operations)
    if (dataPart.partNumber === 1 && dataPart.lastPart) {
      return;
    }

    // Validate part size (last part may be smaller)
    if (!dataPart.lastPart && actualPartSize !== this.partSize) {
      throw new Error(
        `The byte size for part number ${dataPart.partNumber}, size ${actualPartSize} does not match expected size ${this.partSize}`
      );
    }
  }

  private __validateInput(): void {
    if (!this.client) {
      throw new Error(`InputError: Upload requires a AWS client to do uploads with.`);
    }

    if (this.partSize < Upload.MIN_PART_SIZE) {
      throw new Error(
        `EntityTooSmall: Your proposed upload part size [${this.partSize}] is smaller than the minimum allowed size [${Upload.MIN_PART_SIZE}] (5MB)`
      );
    }

    if (this.queueSize < 1) {
      throw new Error(`Queue size: Must have at least one uploading queue.`);
    }
  }
}
