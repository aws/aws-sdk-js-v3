// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { StreamingBlobTypes } from "@smithy/types";

import { EBSServiceException as __BaseException } from "./EBSServiceException";

/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  DEPENDENCY_ACCESS_DENIED: "DEPENDENCY_ACCESS_DENIED",
  UNAUTHORIZED_ACCOUNT: "UNAUTHORIZED_ACCOUNT",
} as const;

/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  Reason: AccessDeniedExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * <p>A block of data in an Amazon Elastic Block Store snapshot.</p>
 * @public
 */
export interface Block {
  /**
   * <p>The block index.</p>
   * @public
   */
  BlockIndex?: number | undefined;

  /**
   * <p>The block token for the block index.</p>
   * @public
   */
  BlockToken?: string | undefined;
}

/**
 * <p>A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of
 *             the same volume/snapshot lineage.</p>
 * @public
 */
export interface ChangedBlock {
  /**
   * <p>The block index.</p>
   * @public
   */
  BlockIndex?: number | undefined;

  /**
   * <p>The block token for the block index of the <code>FirstSnapshotId</code> specified in
   *             the <code>ListChangedBlocks</code> operation. This value is absent if the first snapshot
   *             does not have the changed block that is on the second snapshot.</p>
   * @public
   */
  FirstBlockToken?: string | undefined;

  /**
   * <p>The block token for the block index of the <code>SecondSnapshotId</code> specified in
   *             the <code>ListChangedBlocks</code> operation.</p>
   * @public
   */
  SecondBlockToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChecksumAggregationMethod = {
  CHECKSUM_AGGREGATION_LINEAR: "LINEAR",
} as const;

/**
 * @public
 */
export type ChecksumAggregationMethod = (typeof ChecksumAggregationMethod)[keyof typeof ChecksumAggregationMethod];

/**
 * @public
 * @enum
 */
export const ChecksumAlgorithm = {
  CHECKSUM_ALGORITHM_SHA256: "SHA256",
} as const;

/**
 * @public
 */
export type ChecksumAlgorithm = (typeof ChecksumAlgorithm)[keyof typeof ChecksumAlgorithm];

/**
 * @public
 */
export interface CompleteSnapshotRequest {
  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The number of blocks that were written to the snapshot.</p>
   * @public
   */
  ChangedBlocksCount: number | undefined;

  /**
   * <p>An aggregated Base-64 SHA256 checksum based on the checksums of each written
   *             block.</p>
   *          <p>To generate the aggregated checksum using the linear aggregation method, arrange the
   *             checksums for each written block in ascending order of their block index, concatenate
   *             them to form a single string, and then generate the checksum on the entire string using
   *             the SHA256 algorithm.</p>
   * @public
   */
  Checksum?: string | undefined;

  /**
   * <p>The algorithm used to generate the checksum. Currently, the only supported algorithm
   *             is <code>SHA256</code>.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The aggregation method used to generate the checksum. Currently, the only supported
   *             aggregation method is <code>LINEAR</code>.</p>
   * @public
   */
  ChecksumAggregationMethod?: ChecksumAggregationMethod | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  COMPLETED: "completed",
  ERROR: "error",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface CompleteSnapshotResponse {
  /**
   * <p>The status of the snapshot.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * <p>An internal error has occurred. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a>.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const RequestThrottledExceptionReason = {
  ACCOUNT_THROTTLED: "ACCOUNT_THROTTLED",
  DEPENDENCY_REQUEST_THROTTLED: "DEPENDENCY_REQUEST_THROTTLED",
  RESOURCE_LEVEL_THROTTLE: "RESOURCE_LEVEL_THROTTLE",
} as const;

/**
 * @public
 */
export type RequestThrottledExceptionReason =
  (typeof RequestThrottledExceptionReason)[keyof typeof RequestThrottledExceptionReason];

/**
 * <p>The number of API requests has exceeded the maximum allowed API request
 *             throttling limit for the snapshot. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a>.</p>
 * @public
 */
export class RequestThrottledException extends __BaseException {
  readonly name: "RequestThrottledException" = "RequestThrottledException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  Reason?: RequestThrottledExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestThrottledException, __BaseException>) {
    super({
      name: "RequestThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestThrottledException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 * @enum
 */
export const ResourceNotFoundExceptionReason = {
  DEPENDENCY_RESOURCE_NOT_FOUND: "DEPENDENCY_RESOURCE_NOT_FOUND",
  GRANT_NOT_FOUND: "GRANT_NOT_FOUND",
  IMAGE_NOT_FOUND: "IMAGE_NOT_FOUND",
  SNAPSHOT_NOT_FOUND: "SNAPSHOT_NOT_FOUND",
} as const;

/**
 * @public
 */
export type ResourceNotFoundExceptionReason =
  (typeof ResourceNotFoundExceptionReason)[keyof typeof ResourceNotFoundExceptionReason];

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  Reason?: ResourceNotFoundExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 * @enum
 */
export const ServiceQuotaExceededExceptionReason = {
  DEPENDENCY_SERVICE_QUOTA_EXCEEDED: "DEPENDENCY_SERVICE_QUOTA_EXCEEDED",
} as const;

/**
 * @public
 */
export type ServiceQuotaExceededExceptionReason =
  (typeof ServiceQuotaExceededExceptionReason)[keyof typeof ServiceQuotaExceededExceptionReason];

/**
 * <p>Your current service quotas do not allow you to perform this action.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  Reason?: ServiceQuotaExceededExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CONFLICTING_BLOCK_UPDATE: "CONFLICTING_BLOCK_UPDATE",
  INVALID_BLOCK: "INVALID_BLOCK",
  INVALID_BLOCK_TOKEN: "INVALID_BLOCK_TOKEN",
  INVALID_CONTENT_ENCODING: "INVALID_CONTENT_ENCODING",
  INVALID_CUSTOMER_KEY: "INVALID_CUSTOMER_KEY",
  INVALID_DEPENDENCY_REQUEST: "INVALID_DEPENDENCY_REQUEST",
  INVALID_GRANT_TOKEN: "INVALID_GRANT_TOKEN",
  INVALID_IMAGE_ID: "INVALID_IMAGE_ID",
  INVALID_PAGE_TOKEN: "INVALID_PAGE_TOKEN",
  INVALID_PARAMETER_VALUE: "INVALID_PARAMETER_VALUE",
  INVALID_SNAPSHOT_ID: "INVALID_SNAPSHOT_ID",
  INVALID_TAG: "INVALID_TAG",
  INVALID_VOLUME_SIZE: "INVALID_VOLUME_SIZE",
  UNRELATED_SNAPSHOTS: "UNRELATED_SNAPSHOTS",
  WRITE_REQUEST_TIMEOUT: "WRITE_REQUEST_TIMEOUT",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints of the EBS direct APIs.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the validation exception.</p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>You have reached the limit for concurrent API requests. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapi-performance">Optimizing performance of the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud
 *                 User Guide</i>.</p>
 * @public
 */
export class ConcurrentLimitExceededException extends __BaseException {
  readonly name: "ConcurrentLimitExceededException" = "ConcurrentLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentLimitExceededException, __BaseException>) {
    super({
      name: "ConcurrentLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request uses the same client token as a previous, but non-identical
 *             request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetSnapshotBlockRequest {
  /**
   * <p>The ID of the snapshot containing the block from which to get data.</p>
   *          <important>
   *             <p>If the specified snapshot is encrypted, you must have permission to use the
   *                 KMS key that was used to encrypt the snapshot. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html">
   *                     Using encryption</a> in the <i>Amazon Elastic Compute Cloud User
   *                         Guide</i>.</p>
   *          </important>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The block index of the block in which to read the data. A block index is a logical
   *             index in units of <code>512</code> KiB blocks. To identify the block index, divide
   *             the logical offset of the data in the logical volume by the block size (logical offset
   *             of data/<code>524288</code>). The logical offset of the data must be <code>512</code>
   *             KiB aligned.</p>
   * @public
   */
  BlockIndex: number | undefined;

  /**
   * <p>The block token of the block from which to get data. You can obtain the <code>BlockToken</code>
   *             by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.</p>
   * @public
   */
  BlockToken: string | undefined;
}

/**
 * @public
 */
export interface GetSnapshotBlockResponse {
  /**
   * <p>The size of the data in the block.</p>
   * @public
   */
  DataLength?: number | undefined;

  /**
   * <p>The data content of the block.</p>
   * @public
   */
  BlockData?: StreamingBlobTypes | undefined;

  /**
   * <p>The checksum generated for the block, which is Base64 encoded.</p>
   * @public
   */
  Checksum?: string | undefined;

  /**
   * <p>The algorithm used to generate the checksum for the block, such as SHA256.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface ListChangedBlocksRequest {
  /**
   * <p>The ID of the first snapshot to use for the comparison.</p>
   *          <important>
   *             <p>The <code>FirstSnapshotID</code> parameter must be specified with a
   *                     <code>SecondSnapshotId</code> parameter; otherwise, an error occurs.</p>
   *          </important>
   * @public
   */
  FirstSnapshotId?: string | undefined;

  /**
   * <p>The ID of the second snapshot to use for the comparison.</p>
   *          <important>
   *             <p>The <code>SecondSnapshotId</code> parameter must be specified with a
   *                     <code>FirstSnapshotID</code> parameter; otherwise, an error occurs.</p>
   *          </important>
   * @public
   */
  SecondSnapshotId: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   *          <p>If you specify <b>NextToken</b>, then
   *             <b>StartingBlockIndex</b> is ignored.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of blocks to be returned by the request.</p>
   *          <p>Even if additional blocks can be retrieved from the snapshot, the request can
   *             return less blocks than <b>MaxResults</b> or an empty
   *             array of blocks.</p>
   *          <p>To retrieve the next set of blocks from the snapshot, make another request with
   *             the returned <b>NextToken</b> value. The value of
   *             <b>NextToken</b> is <code>null</code> when there are no
   *             more blocks to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The block index from which the comparison should start.</p>
   *          <p>The list in the response will start from this block index or the next valid block
   *             index in the snapshots.</p>
   *          <p>If you specify <b>NextToken</b>, then
   *             <b>StartingBlockIndex</b> is ignored.</p>
   * @public
   */
  StartingBlockIndex?: number | undefined;
}

/**
 * @public
 */
export interface ListChangedBlocksResponse {
  /**
   * <p>An array of objects containing information about the changed blocks.</p>
   * @public
   */
  ChangedBlocks?: ChangedBlock[] | undefined;

  /**
   * <p>The time when the <code>BlockToken</code> expires.</p>
   * @public
   */
  ExpiryTime?: Date | undefined;

  /**
   * <p>The size of the volume in GB.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The size of the blocks in the snapshot, in bytes.</p>
   * @public
   */
  BlockSize?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSnapshotBlocksRequest {
  /**
   * <p>The ID of the snapshot from which to get block indexes and block tokens.</p>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   *          <p>If you specify <b>NextToken</b>, then
   *             <b>StartingBlockIndex</b> is ignored.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of blocks to be returned by the request.</p>
   *          <p>Even if additional blocks can be retrieved from the snapshot, the request can
   *             return less blocks than <b>MaxResults</b> or an empty
   *             array of blocks.</p>
   *          <p>To retrieve the next set of blocks from the snapshot, make another request with
   *             the returned <b>NextToken</b> value. The value of
   *             <b>NextToken</b> is <code>null</code> when there are no
   *             more blocks to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The block index from which the list should start. The list in the response will start
   *             from this block index or the next valid block index in the snapshot.</p>
   *          <p>If you specify <b>NextToken</b>, then
   *             <b>StartingBlockIndex</b> is ignored.</p>
   * @public
   */
  StartingBlockIndex?: number | undefined;
}

/**
 * @public
 */
export interface ListSnapshotBlocksResponse {
  /**
   * <p>An array of objects containing information about the blocks.</p>
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * <p>The time when the <code>BlockToken</code> expires.</p>
   * @public
   */
  ExpiryTime?: Date | undefined;

  /**
   * <p>The size of the volume in GB.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The size of the blocks in the snapshot, in bytes.</p>
   * @public
   */
  BlockSize?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutSnapshotBlockRequest {
  /**
   * <p>The ID of the snapshot.</p>
   *          <important>
   *             <p>If the specified snapshot is encrypted, you must have permission to use
   *                 the KMS key that was used to encrypt the snapshot. For more information,
   *                 see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html">
   *                     Using encryption</a> in the <i>Amazon Elastic Compute Cloud User
   *                         Guide</i>..</p>
   *          </important>
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * <p>The block index of the block in which to write the data. A block index is a logical
   *     	index in units of <code>512</code> KiB blocks. To identify the block index, divide
   *         	the logical offset of the data in the logical volume by the block size (logical offset of
   *         	data/<code>524288</code>). The logical offset of the data must be <code>512</code>
   *         	KiB aligned.</p>
   * @public
   */
  BlockIndex: number | undefined;

  /**
   * <p>The data to write to the block.</p>
   *          <p>The block data is not signed as part of the Signature Version 4 signing process. As a
   *             result, you must generate and provide a Base64-encoded SHA256 checksum for the block
   *             data using the <b>x-amz-Checksum</b> header. Also, you
   *         	must specify the checksum algorithm using the <b>x-amz-Checksum-Algorithm</b>
   *         	header. The checksum that you provide is part of the Signature Version 4 signing process.
   *         	It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity
   *         	of the data. If the checksums do not correspond, the request fails. For more information,
   *         	see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums">
   *                 Using checksums with the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   * @public
   */
  BlockData: StreamingBlobTypes | undefined;

  /**
   * <p>The size of the data to write to the block, in bytes. Currently, the only supported
   *             size is <code>524288</code> bytes.</p>
   *          <p>Valid values: <code>524288</code>
   *          </p>
   * @public
   */
  DataLength: number | undefined;

  /**
   * <p>The progress of the write process, as a percentage.</p>
   * @public
   */
  Progress?: number | undefined;

  /**
   * <p>A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are
   *             supported.</p>
   * @public
   */
  Checksum: string | undefined;

  /**
   * <p>The algorithm used to generate the checksum. Currently, the only supported algorithm
   *             is <code>SHA256</code>.</p>
   * @public
   */
  ChecksumAlgorithm: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutSnapshotBlockResponse {
  /**
   * <p>The SHA256 checksum generated for the block data by Amazon EBS.</p>
   * @public
   */
  Checksum?: string | undefined;

  /**
   * <p>The algorithm used by Amazon EBS to generate the checksum.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * <p>Describes a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface StartSnapshotRequest {
  /**
   * <p>The size of the volume, in GiB. The maximum size is <code>65536</code> GiB (64
   *             TiB).</p>
   * @public
   */
  VolumeSize: number | undefined;

  /**
   * <p>The ID of the parent snapshot. If there is no parent snapshot, or if you are creating
   *             the first snapshot for an on-premises volume, omit this parameter.</p>
   *          <p>You can't specify <b>ParentSnapshotId</b> and
   *             <b>Encrypted</b> in the same request. If you specify both
   *             parameters, the request fails with <code>ValidationException</code>.</p>
   *          <p>The encryption status of the snapshot depends on the values that you specify for
   *             <b>Encrypted</b>, <b>KmsKeyArn</b>,
   *             and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account
   *             is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">
   *                 encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html">
   *                     Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <important>
   *             <p>If you specify an encrypted parent snapshot, you must have permission to use the
   *                 KMS key that was used to encrypt the parent snapshot. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions">
   *                     Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User
   *                         Guide</i>.</p>
   *          </important>
   * @public
   */
  ParentSnapshotId?: string | undefined;

  /**
   * <p>The tags to apply to the snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A description for the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. Idempotency ensures that an API request completes only once. With an idempotent
   *             request, if the original request completes successfully. The subsequent retries with the same
   *             client token return the result from the original successful request and they have no additional
   *             effect.</p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html">
   *     		Idempotency for StartSnapshot API</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates whether to encrypt the snapshot.</p>
   *          <p>You can't specify <b>Encrypted</b> and <b>
   *             ParentSnapshotId</b> in the same request. If you specify both parameters, the
   *             request fails with <code>ValidationException</code>.</p>
   *          <p>The encryption status of the snapshot depends on the values that you specify for
   *             <b>Encrypted</b>, <b>KmsKeyArn</b>,
   *             and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account
   *             is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">
   *                 encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html">
   *             Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <important>
   *             <p>To create an encrypted snapshot, you must have permission to use the KMS key. For
   *                 more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions">
   *                     Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User
   *                         Guide</i>.</p>
   *          </important>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot.</p>
   *          <p>The encryption status of the snapshot depends on the values that you specify for
   *             <b>Encrypted</b>, <b>KmsKeyArn</b>,
   *             and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account
   *             is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">
   *                 encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html">
   *                     Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <important>
   *             <p>To create an encrypted snapshot, you must have permission to use the KMS key. For
   *                 more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions">
   *                     Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User
   *                         Guide</i>.</p>
   *          </important>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The amount of time (in minutes) after which the snapshot is automatically cancelled
   *             if:</p>
   *          <ul>
   *             <li>
   *                <p>No blocks are written to the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>The snapshot is not completed after writing the last block of data.</p>
   *             </li>
   *          </ul>
   *          <p>If no value is specified, the timeout defaults to <code>60</code> minutes.</p>
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SSEType = {
  NONE: "none",
  SSE_EBS: "sse-ebs",
  SSE_KMS: "sse-kms",
} as const;

/**
 * @public
 */
export type SSEType = (typeof SSEType)[keyof typeof SSEType];

/**
 * @public
 */
export interface StartSnapshotResponse {
  /**
   * <p>The description of the snapshot.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the snapshot.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the snapshot owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The status of the snapshot.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>The timestamp when the snapshot was created.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>The size of the blocks in the snapshot, in bytes.</p>
   * @public
   */
  BlockSize?: number | undefined;

  /**
   * <p>The tags applied to the snapshot. You can specify up to 50 tags per snapshot. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html"> Tagging your Amazon EC2
   *                 resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The ID of the parent snapshot.</p>
   * @public
   */
  ParentSnapshotId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the snapshot.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  SseType?: SSEType | undefined;
}

/**
 * @internal
 */
export const ChangedBlockFilterSensitiveLog = (obj: ChangedBlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSnapshotBlockResponseFilterSensitiveLog = (obj: GetSnapshotBlockResponse): any => ({
  ...obj,
  ...(obj.BlockData && { BlockData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChangedBlocksResponseFilterSensitiveLog = (obj: ListChangedBlocksResponse): any => ({
  ...obj,
  ...(obj.ChangedBlocks && { ChangedBlocks: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListSnapshotBlocksResponseFilterSensitiveLog = (obj: ListSnapshotBlocksResponse): any => ({
  ...obj,
  ...(obj.Blocks && { Blocks: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutSnapshotBlockRequestFilterSensitiveLog = (obj: PutSnapshotBlockRequest): any => ({
  ...obj,
  ...(obj.BlockData && { BlockData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartSnapshotRequestFilterSensitiveLog = (obj: StartSnapshotRequest): any => ({
  ...obj,
  ...(obj.KmsKeyArn && { KmsKeyArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartSnapshotResponseFilterSensitiveLog = (obj: StartSnapshotResponse): any => ({
  ...obj,
  ...(obj.KmsKeyArn && { KmsKeyArn: SENSITIVE_STRING }),
});
