// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { Readable } from "stream";

import { BackupStorageServiceException as __BaseException } from "./BackupStorageServiceException";

export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

export enum SummaryChecksumAlgorithm {
  SUMMARY = "SUMMARY",
}

/**
 * Object
 */
export interface BackupObject {
  /**
   * Object name
   */
  Name: string | undefined;

  /**
   * Number of chunks in object
   */
  ChunksCount?: number;

  /**
   * Metadata string associated with the Object
   */
  MetadataString?: string;

  /**
   * Object checksum
   */
  ObjectChecksum: string | undefined;

  /**
   * Checksum algorithm
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | string | undefined;

  /**
   * Object token
   */
  ObjectToken: string | undefined;
}

export enum DataChecksumAlgorithm {
  SHA256 = "SHA256",
}

/**
 * Chunk
 */
export interface Chunk {
  /**
   * Chunk index
   */
  Index: number | undefined;

  /**
   * Chunk length
   */
  Length: number | undefined;

  /**
   * Chunk checksum
   */
  Checksum: string | undefined;

  /**
   * Checksum algorithm
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | string | undefined;

  /**
   * Chunk token
   */
  ChunkToken: string | undefined;
}

export interface DeleteObjectInput {
  /**
   * Backup job Id for the in-progress backup.
   */
  BackupJobId: string | undefined;

  /**
   * The name of the Object.
   */
  ObjectName: string | undefined;
}

/**
 * Non-retryable exception, indicates client error (wrong argument passed to API).
 *     See exception message for details.
 */
export class IllegalArgumentException extends __BaseException {
  readonly name: "IllegalArgumentException" = "IllegalArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalArgumentException, __BaseException>) {
    super({
      name: "IllegalArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Non-retryable exception. Attempted to make an operation on non-existing or expired resource.
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Retryable exception. In general indicates internal failure that can be fixed by retry.
 */
export class RetryableException extends __BaseException {
  readonly name: "RetryableException" = "RetryableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RetryableException, __BaseException>) {
    super({
      name: "RetryableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, RetryableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Deprecated. To be removed from the model.
 */
export class ServiceInternalException extends __BaseException {
  readonly name: "ServiceInternalException" = "ServiceInternalException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceInternalException, __BaseException>) {
    super({
      name: "ServiceInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceInternalException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Retryable exception, indicates internal server error.
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Increased rate over throttling limits. Can be retried with exponential backoff.
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

export interface GetChunkInput {
  /**
   * Storage job id
   */
  StorageJobId: string | undefined;

  /**
   * Chunk token
   */
  ChunkToken: string | undefined;
}

export interface GetChunkOutput {
  /**
   * Chunk data
   */
  Data: Readable | ReadableStream | Blob | undefined;

  /**
   * Data length
   */
  Length: number | undefined;

  /**
   * Data checksum
   */
  Checksum: string | undefined;

  /**
   * Checksum algorithm
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | string | undefined;
}

/**
 * Non-retryable exception. Indicates the KMS key usage is incorrect. See exception message for details.
 */
export class KMSInvalidKeyUsageException extends __BaseException {
  readonly name: "KMSInvalidKeyUsageException" = "KMSInvalidKeyUsageException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidKeyUsageException, __BaseException>) {
    super({
      name: "KMSInvalidKeyUsageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidKeyUsageException.prototype);
    this.Message = opts.Message;
  }
}

export interface GetObjectMetadataInput {
  /**
   * Backup job id for the in-progress backup.
   */
  StorageJobId: string | undefined;

  /**
   * Object token.
   */
  ObjectToken: string | undefined;
}

export interface GetObjectMetadataOutput {
  /**
   * Metadata string.
   */
  MetadataString?: string;

  /**
   * Metadata blob.
   */
  MetadataBlob?: Readable | ReadableStream | Blob;

  /**
   * The size of MetadataBlob.
   */
  MetadataBlobLength?: number;

  /**
   * MetadataBlob checksum.
   */
  MetadataBlobChecksum?: string;

  /**
   * Checksum algorithm.
   */
  MetadataBlobChecksumAlgorithm?: DataChecksumAlgorithm | string;
}

export interface ListChunksInput {
  /**
   * Storage job id
   */
  StorageJobId: string | undefined;

  /**
   * Object token
   */
  ObjectToken: string | undefined;

  /**
   * Maximum number of chunks
   */
  MaxResults?: number;

  /**
   * Pagination token
   */
  NextToken?: string;
}

export interface ListChunksOutput {
  /**
   * List of chunks
   */
  ChunkList: Chunk[] | undefined;

  /**
   * Pagination token
   */
  NextToken?: string;
}

export interface ListObjectsInput {
  /**
   * Storage job id
   */
  StorageJobId: string | undefined;

  /**
   * Optional, specifies the starting Object name to list from. Ignored if NextToken is not NULL
   */
  StartingObjectName?: string;

  /**
   * Optional, specifies the starting Object prefix to list from. Ignored if NextToken is not NULL
   */
  StartingObjectPrefix?: string;

  /**
   * Maximum objects count
   */
  MaxResults?: number;

  /**
   * Pagination token
   */
  NextToken?: string;

  /**
   * (Optional) Created before filter
   */
  CreatedBefore?: Date;

  /**
   * (Optional) Created after filter
   */
  CreatedAfter?: Date;
}

export interface ListObjectsOutput {
  /**
   * Object list
   */
  ObjectList: BackupObject[] | undefined;

  /**
   * Pagination token
   */
  NextToken?: string;
}

export interface NotifyObjectCompleteInput {
  /**
   * Backup job Id for the in-progress backup
   */
  BackupJobId: string | undefined;

  /**
   * Upload Id for the in-progress upload
   */
  UploadId: string | undefined;

  /**
   * Object checksum
   */
  ObjectChecksum: string | undefined;

  /**
   * Checksum algorithm
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | string | undefined;

  /**
   * Optional metadata associated with an Object. Maximum string length is 256 bytes.
   */
  MetadataString?: string;

  /**
   * Optional metadata associated with an Object. Maximum length is 4MB.
   */
  MetadataBlob?: Readable | ReadableStream | Blob;

  /**
   * The size of MetadataBlob.
   */
  MetadataBlobLength?: number;

  /**
   * Checksum of MetadataBlob.
   */
  MetadataBlobChecksum?: string;

  /**
   * Checksum algorithm.
   */
  MetadataBlobChecksumAlgorithm?: DataChecksumAlgorithm | string;
}

export interface NotifyObjectCompleteOutput {
  /**
   * Object checksum
   */
  ObjectChecksum: string | undefined;

  /**
   * Checksum algorithm
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | string | undefined;
}

/**
 * Retryalble exception. Indicated issues while reading an input stream due to the networking issues or connection drop on the client side.
 */
export class NotReadableInputStreamException extends __BaseException {
  readonly name: "NotReadableInputStreamException" = "NotReadableInputStreamException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotReadableInputStreamException, __BaseException>) {
    super({
      name: "NotReadableInputStreamException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotReadableInputStreamException.prototype);
    this.Message = opts.Message;
  }
}

export interface PutChunkInput {
  /**
   * Backup job Id for the in-progress backup.
   */
  BackupJobId: string | undefined;

  /**
   * Upload Id for the in-progress upload.
   */
  UploadId: string | undefined;

  /**
   * Describes this chunk's position relative to the other chunks
   */
  ChunkIndex: number | undefined;

  /**
   * Data to be uploaded
   */
  Data: Readable | ReadableStream | Blob | undefined;

  /**
   * Data length
   */
  Length: number | undefined;

  /**
   * Data checksum
   */
  Checksum: string | undefined;

  /**
   * Checksum algorithm
   */
  ChecksumAlgorithm: DataChecksumAlgorithm | string | undefined;
}

export interface PutChunkOutput {
  /**
   * Chunk checksum
   */
  ChunkChecksum: string | undefined;

  /**
   * Checksum algorithm
   */
  ChunkChecksumAlgorithm: DataChecksumAlgorithm | string | undefined;
}

export interface PutObjectInput {
  /**
   * Backup job Id for the in-progress backup.
   */
  BackupJobId: string | undefined;

  /**
   * The name of the Object to be uploaded.
   */
  ObjectName: string | undefined;

  /**
   * Store user defined metadata like backup checksum, disk ids, restore metadata etc.
   */
  MetadataString?: string;

  /**
   * Inline chunk data to be uploaded.
   */
  InlineChunk?: Readable | ReadableStream | Blob;

  /**
   * Length of the inline chunk data.
   */
  InlineChunkLength?: number;

  /**
   * Inline chunk checksum
   */
  InlineChunkChecksum?: string;

  /**
   * Inline chunk checksum algorithm
   */
  InlineChunkChecksumAlgorithm?: string;

  /**
   * object checksum
   */
  ObjectChecksum?: string;

  /**
   * object checksum algorithm
   */
  ObjectChecksumAlgorithm?: SummaryChecksumAlgorithm | string;

  /**
   * Throw an exception if Object name is already exist.
   */
  ThrowOnDuplicate?: boolean;
}

export interface PutObjectOutput {
  /**
   * Inline chunk checksum
   */
  InlineChunkChecksum: string | undefined;

  /**
   * Inline chunk checksum algorithm
   */
  InlineChunkChecksumAlgorithm: DataChecksumAlgorithm | string | undefined;

  /**
   * object checksum
   */
  ObjectChecksum: string | undefined;

  /**
   * object checksum algorithm
   */
  ObjectChecksumAlgorithm: SummaryChecksumAlgorithm | string | undefined;
}

/**
 * Non-retryable exception. Attempted to create already existing object or chunk.
 *     This message contains a checksum of already presented data.
 */
export class DataAlreadyExistsException extends __BaseException {
  readonly name: "DataAlreadyExistsException" = "DataAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * Data checksum used
   */
  Checksum?: string;

  /**
   * Checksum algorithm used
   */
  ChecksumAlgorithm?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataAlreadyExistsException, __BaseException>) {
    super({
      name: "DataAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.Checksum = opts.Checksum;
    this.ChecksumAlgorithm = opts.ChecksumAlgorithm;
  }
}

export interface StartObjectInput {
  /**
   * Backup job Id for the in-progress backup
   */
  BackupJobId: string | undefined;

  /**
   * Name for the object.
   */
  ObjectName: string | undefined;

  /**
   * Throw an exception if Object name is already exist.
   */
  ThrowOnDuplicate?: boolean;
}

export interface StartObjectOutput {
  /**
   * Upload Id for a given upload.
   */
  UploadId: string | undefined;
}

/**
 * @internal
 */
export const BackupObjectFilterSensitiveLog = (obj: BackupObject): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChunkFilterSensitiveLog = (obj: Chunk): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteObjectInputFilterSensitiveLog = (obj: DeleteObjectInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChunkInputFilterSensitiveLog = (obj: GetChunkInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChunkOutputFilterSensitiveLog = (obj: GetChunkOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetObjectMetadataInputFilterSensitiveLog = (obj: GetObjectMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetObjectMetadataOutputFilterSensitiveLog = (obj: GetObjectMetadataOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListChunksInputFilterSensitiveLog = (obj: ListChunksInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListChunksOutputFilterSensitiveLog = (obj: ListChunksOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectsInputFilterSensitiveLog = (obj: ListObjectsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectsOutputFilterSensitiveLog = (obj: ListObjectsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyObjectCompleteInputFilterSensitiveLog = (obj: NotifyObjectCompleteInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyObjectCompleteOutputFilterSensitiveLog = (obj: NotifyObjectCompleteOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutChunkInputFilterSensitiveLog = (obj: PutChunkInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutChunkOutputFilterSensitiveLog = (obj: PutChunkOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutObjectInputFilterSensitiveLog = (obj: PutObjectInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutObjectOutputFilterSensitiveLog = (obj: PutObjectOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartObjectInputFilterSensitiveLog = (obj: StartObjectInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartObjectOutputFilterSensitiveLog = (obj: StartObjectOutput): any => ({
  ...obj,
});
