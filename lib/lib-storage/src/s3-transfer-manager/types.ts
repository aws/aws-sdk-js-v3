import type {
  _Object as S3Object,
  ChecksumAlgorithm,
  CompleteMultipartUploadCommandOutput,
  CreateMultipartUploadCommandInput,
  GetObjectCommandInput,
  GetObjectCommandOutput,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { HttpHandlerOptions } from "@smithy/types";

import { AddEventListenerOptions, EventListener, RemoveEventListenerOptions } from "./event-listener-types";

/**
 * Constructor parameters for the S3 Transfer Manager configuration.
 *
 * @public
 */
export interface S3TransferManagerConfig {
  /**
   * The low level S3 client that will be used to send requests to S3.
   */
  s3ClientInstance?: S3Client;
  /**
   * The target part size to use in a multipart transfer. Does not apply to downloads if multipartDownloadType is PART.
   */
  targetPartSizeBytes?: number;
  /**
   * The size threshold, in bytes, for when to use multipart upload.
   */
  multipartUploadThresholdBytes?: number;
  /**
   * Option for whether to use checksum validation for download.
   */
  checksumValidationEnabled?: boolean;
  /**
   * Checksum algorithm to use for upload.
   */
  checksumAlgorithm?: ChecksumAlgorithm;
  /**
   * How the SDK should perform multipart download, either RANGE or PART.
   */
  multipartDownloadType?: "RANGE" | "PART";
  /**
   * Collection of callbacks for monitoring transfer lifecycle events. Allows tracking statuses of all transfers from the client.
   */
  eventListeners?: TransferEventListeners;
}

/**
 * Uses intersection because requests includes all the required parameters from
 * both PutObjectCommandInput and CreateMultipartUploadCommandInput to support both single object
 * and multipart upload requests.
 *
 * @public
 */
export type UploadRequest = PutObjectCommandInput & CreateMultipartUploadCommandInput;

/**
 * Uses union because the responses can vary from single object upload response to multipart upload
 * response depending on the request.
 *
 * @public
 */
export type UploadResponse = PutObjectCommandOutput | CompleteMultipartUploadCommandOutput;

/**
 * Features the same properties as SDK JS S3 Command GetObjectCommandInput.
 * Created to standardize naming convention for TM APIs.
 *
 * @public
 */
export type DownloadRequest = GetObjectCommandInput;

/**
 * Features the same properties as SDK JS S3 Command GetObjectCommandOutput.
 * Created to standardize naming convention for TM APIs.
 *
 * @public
 */
export type DownloadResponse = GetObjectCommandOutput;

/**
 * Options for transfer operations that combine HTTP handler options with transfer event listeners.
 *
 * @property eventListeners - Collection of callbacks for monitoring transfer lifecycle events
 *
 * @public
 */
export type TransferOptions = HttpHandlerOptions & { eventListeners?: TransferEventListeners };

/**
 * Client for efficient transfer of objects to and from Amazon S3.
 * Provides methods to optimize uploading and downloading individual objects
 * as well as entire directories, with support for multipart operations,
 * concurrency control, and request cancellation.
 * Implements an event-based progress tracking system with methods to register,
 * dispatch, and remove listeners for transfer lifecycle events.
 *
 * @public
 */
export interface IS3TransferManager {
  /**
   * Lets users upload single objects from a given directory to a given bucket.
   * Supports multipart upload, single object upload, and transfer progress listeners.
   *
   * @param request - All properties of a single or multipart upload request.
   * @param transferOptions - Allows users to specify cancel functions for the request and a collection of callbacks for monitoring transfer lifecycle events. Allows tracking statuses per request.
   *
   * @returns The response from the S3 API for the upload request.
   */
  upload(request: UploadRequest, transferOptions?: TransferOptions): Promise<UploadResponse>;

  /**
   * Lets users download single objects from a given bucket to a given directory.
   * Supports multipart download, single object download, and transfer progress listeners.
   *
   * @param request - All properties of a single or multipart upload request.
   * @param transferOptions - Allows users to specify cancel functions for the request and a collection of callbacks for monitoring transfer lifecycle events. Allows tracking statuses per request.
   *
   * @returns the response from the S3 API for the download request.
   */
  download(request: DownloadRequest, transferOptions?: TransferOptions): Promise<DownloadResponse>;

  /**
   * Represents an API to upload all files under the given directory to the provided S3 bucket.
   *
   * @param options.bucket - The name of the bucket to upload objects to.
   * @param options.source - The source directory to upload.
   * @param options.followSymbolicLinks - Whether to follow symbolic links when traversing the file tree.
   * @param options.recursive - Whether to upload directories recursively.
   * @param options.s3Prefix - The S3 key prefix to use for each object. If not provided, files will be uploaded to the root of the bucket todo().
   * @param options.filter - A callback to allow users to filter out unwanted S3 object. It is invoked for each S3 object. An example implementation is a predicate that takes an S3Object and returns a boolean indicating whether this S3Object should be uploaded.
   * @param options.s3Delimiter - Default "/". The S3 delimiter. A delimiter causes a list operation to roll up all the keys that share a common prefix into a single summary list result.
   * @param options.putObjectRequestCallback - A callback mechanism to allow customers to update individual putObjectRequest that the S3 Transfer Manager generates.
   * @param options.failurePolicy - The failure policy to handle failed requests.
   * @param options.transferOptions - Allows supplying an AbortSignal and/or transfer event listeners.
   *
   * @returns the number of objects that have been uploaded and the number of objects that have failed
   */
  uploadAll(options: {
    bucket: string;
    source: string;
    followSymbolicLinks?: boolean;
    recursive?: boolean;
    s3Prefix?: string;
    filter?: (filepath: string) => boolean;
    s3Delimiter?: string;
    putObjectRequestCallback?: (putObjectRequest: PutObjectCommandInput) => Promise<void>;
    failurePolicy?: (error?: unknown) => Promise<void>;
    transferOptions?: TransferOptions;
  }): Promise<{
    objectsUploaded: number;
    objectsFailed: number;
  }>;

  /**
   * Represents an API to download all objects under a bucket to the provided local directory.
   *
   * @param options.bucket - The name of the bucket.
   * @param options.destination - The destination directory.
   * @param options.s3Prefix - Specify the S3 prefix that limits the response to keys that begin with the specified prefix.
   * @param options.s3Delimiter - Specify the S3 delimiter.
   * @param options.recursive - Whether to upload directories recursively.
   * @param options.filter - A callback to allow users to filter out unwanted S3 object. It is invoked for each S3 object. An example implementation is a predicate that takes an S3Object and returns a boolean indicating whether this S3Object should be downloaded.
   * @param options.getObjectRequestCallback - A callback mechanism to allow customers to update individual getObjectRequest that the S3 Transfer Manager generates.
   * @param options.failurePolicy - The failure policy to handle failed requests.
   * @param options.transferOptions - Allows supplying an AbortSignal and/or transfer event listeners.
   *
   * @returns The number of objects that have been uploaded and the number of objects that have failed
   */
  downloadAll(options: {
    bucket: string;
    destination: string;
    s3Prefix?: string;
    s3Delimiter?: string;
    recursive?: boolean;
    filter?: (object?: S3Object) => boolean;
    getObjectRequestCallback?: (getObjectRequest: GetObjectCommandInput) => Promise<void>;
    failurePolicy?: (error?: unknown) => Promise<void>;
    transferOptions?: TransferOptions;
  }): Promise<{
    objectsDownloaded: number;
    objectsFailed: number;
  }>;

  /**
   * Registers a callback function to be executed when a specific transfer event occurs.
   * Supports monitoring the full lifecycle of transfers.
   *
   * @param type - The type of event to listen for.
   * @param callback - Function to execute when the specified event occurs.
   * @param options - Optional configuration for event listener behavior.
   *
   * @public
   */
  addEventListener(
    type: "transferInitiated",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  addEventListener(
    type: "bytesTransferred",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  addEventListener(
    type: "transferComplete",
    callback: EventListener<TransferCompleteEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  addEventListener(
    type: "transferFailed",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  addEventListener(type: string, callback: EventListener, options?: AddEventListenerOptions | boolean): void;

  /**
   * Dispatches an event to the registered event listeners.
   * Triggers callbacks registered via addEventListener with matching event types.
   *
   * @param event - The event object to dispatch.
   * @returns whether the event ran to completion
   *
   * @public
   */
  dispatchEvent(event: Event & TransferEvent): boolean;
  dispatchEvent(event: Event & TransferCompleteEvent): boolean;
  dispatchEvent(event: Event): boolean;

  /**
   * Removes a previously registered event listener from the specified event type.
   * Stops the callback from being invoked when the event occurs.
   *
   * @param type - The type of event to stop listening for.
   * @param callback - The function that was previously registered.
   * @param options - Optional configuration for the event listener.
   *
   * @public
   */
  removeEventListener(
    type: "transferInitiated",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  removeEventListener(
    type: "bytesTransferred",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  removeEventListener(
    type: "transferComplete",
    callback: EventListener<TransferCompleteEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  removeEventListener(
    type: "transferFailed",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  removeEventListener(type: string, callback: EventListener, options?: RemoveEventListenerOptions | boolean): void;
}

/**
 * Provides a snapshot of the progress during a single object transfer.
 *
 * @public
 */
export interface SingleObjectProgressSnapshot {
  transferredBytes: number;
  totalBytes?: number;
  response?: UploadResponse | DownloadResponse;
}

/**
 * Provides a snapshot of the progress during a directory transfer.
 *
 * @public
 */
export interface DirectoryProgressSnapshot {
  transferredBytes: number;
  totalBytes?: number;
  transferredFiles: number;
  totalFiles?: number;
}

/**
 * Progress snapshot for either single object transfers or directory transfers.
 *
 * @public
 */
export type TransferProgressSnapshot = SingleObjectProgressSnapshot | DirectoryProgressSnapshot;

/**
 * Event interface for transfer progress events.
 * Used for tracking ongoing transfers with the original request and progress snapshot.
 *
 * @public
 */
export interface TransferEvent extends Event {
  request: UploadRequest | DownloadRequest;
  snapshot: TransferProgressSnapshot;
}

/**
 * Event interface for transfer completion.
 * Extends TransferEvent with response data that is received after a completed transfer.
 *
 * @public
 */
export interface TransferCompleteEvent extends TransferEvent {
  response: UploadResponse | DownloadResponse;
}

/**
 * Collection of event handlers to monitor transfer lifecycle events.
 * Allows a way to register callbacks for each stage of the transfer process.
 *
 * @public
 */
export interface TransferEventListeners {
  transferInitiated?: EventListener<TransferEvent>[];
  bytesTransferred?: EventListener<TransferEvent>[];
  transferComplete?: EventListener<TransferCompleteEvent>[];
  transferFailed?: EventListener<TransferEvent>[];
}

/**
 * Event listener type.
 *
 * @public
 */
export interface JoinStreamIterationEvents {
  onBytes?: (byteLength: number, index: number) => void;
  onCompletion?: (byteLength: number, index: number) => void;
  onFailure?: (error: unknown, index: number) => void;
}
