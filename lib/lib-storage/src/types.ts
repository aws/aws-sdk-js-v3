import {
  CompleteMultipartUploadCommandInput,
  CreateMultipartUploadCommandInput,
  PutObjectCommandInput,
  S3Client,
  Tag,
  UploadPartCommandInput,
} from "@aws-sdk/client-s3";
import type { AbortController, AbortSignal } from "@smithy/types";

export interface Progress {
  loaded?: number;
  total?: number;
  part?: number;
  Key?: string;
  Bucket?: string;
}

// string | Uint8Array | Buffer | Readable | ReadableStream | Blob.
export type BodyDataTypes = PutObjectCommandInput["Body"];

export type IAbortController = AbortController | globalThis.AbortController;
export type IAbortSignal = AbortSignal | globalThis.AbortSignal;

/**
 * @deprecated redundant, use {@link S3Client} directly.
 */
export type ServiceClients = S3Client;

export interface Configuration {
  /**
   * The size of the concurrent queue manager to upload parts in parallel. Set to 1 for synchronous uploading of parts. Note that the uploader will buffer at most queueSize * partSize bytes into memory at any given time.
   * default: 4
   */
  queueSize: number;

  /**
   * Default: 5 mb
   * The size in bytes for each individual part to be uploaded. Adjust the part size to ensure the number of parts does not exceed maxTotalParts. See 5mb is the minimum allowed part size.
   */
  partSize: number;

  /**
   * Default: false
   * Whether to abort the multipart upload if an error occurs. Set to true if you want to handle failures manually. If set to false (default)
   * the upload will drop parts that have failed.
   */
  leavePartsOnError: boolean;

  /**
   * The tags to apply to the object.
   */
  tags: Tag[];

  /**
   * Optional abort controller for controlling this upload's abort signal externally.
   *
   * @deprecated use `abortSignal` instead.
   */
  abortController?: IAbortController;

  /**
   * Optional abort signal for controlling this upload's abort signal externally.
   */
  abortSignal?: globalThis.AbortSignal;
}

export interface Options extends Partial<Configuration> {
  /**
   * This is the data that is uploaded.
   */
  params: PutObjectCommandInput &
    Partial<CreateMultipartUploadCommandInput & UploadPartCommandInput & CompleteMultipartUploadCommandInput>;

  /**
   * A service client.
   * This the target where we upload data.
   */
  client: S3Client;
}
