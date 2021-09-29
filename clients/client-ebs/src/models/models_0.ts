import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";
import { Readable } from "stream";

export enum AccessDeniedExceptionReason {
  DEPENDENCY_ACCESS_DENIED = "DEPENDENCY_ACCESS_DENIED",
  UNAUTHORIZED_ACCOUNT = "UNAUTHORIZED_ACCOUNT",
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason: AccessDeniedExceptionReason | string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>A block of data in an Amazon Elastic Block Store snapshot.</p>
 */
export interface Block {
  /**
   * <p>The block index.</p>
   */
  BlockIndex?: number;

  /**
   * <p>The block token for the block index.</p>
   */
  BlockToken?: string;
}

export namespace Block {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Block): any => ({
    ...obj,
  });
}

/**
 * <p>A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of
 *             the same volume/snapshot lineage.</p>
 */
export interface ChangedBlock {
  /**
   * <p>The block index.</p>
   */
  BlockIndex?: number;

  /**
   * <p>The block token for the block index of the <code>FirstSnapshotId</code> specified in
   *             the <code>ListChangedBlocks</code> operation. This value is absent if the first snapshot
   *             does not have the changed block that is on the second snapshot.</p>
   */
  FirstBlockToken?: string;

  /**
   * <p>The block token for the block index of the <code>SecondSnapshotId</code> specified in
   *             the <code>ListChangedBlocks</code> operation.</p>
   */
  SecondBlockToken?: string;
}

export namespace ChangedBlock {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangedBlock): any => ({
    ...obj,
  });
}

export enum ChecksumAggregationMethod {
  CHECKSUM_AGGREGATION_LINEAR = "LINEAR",
}

export enum ChecksumAlgorithm {
  CHECKSUM_ALGORITHM_SHA256 = "SHA256",
}

export interface CompleteSnapshotRequest {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The number of blocks that were written to the snapshot.</p>
   */
  ChangedBlocksCount: number | undefined;

  /**
   * <p>An aggregated Base-64 SHA256 checksum based on the checksums of each written
   *             block.</p>
   *         <p>To generate the aggregated checksum using the linear aggregation method, arrange the
   *             checksums for each written block in ascending order of their block index, concatenate
   *             them to form a single string, and then generate the checksum on the entire string using
   *             the SHA256 algorithm.</p>
   */
  Checksum?: string;

  /**
   * <p>The algorithm used to generate the checksum. Currently, the only supported algorithm
   *             is <code>SHA256</code>.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * <p>The aggregation method used to generate the checksum. Currently, the only supported
   *             aggregation method is <code>LINEAR</code>.</p>
   */
  ChecksumAggregationMethod?: ChecksumAggregationMethod | string;
}

export namespace CompleteSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompleteSnapshotRequest): any => ({
    ...obj,
  });
}

export enum Status {
  COMPLETED = "completed",
  ERROR = "error",
  PENDING = "pending",
}

export interface CompleteSnapshotResponse {
  /**
   * <p>The status of the snapshot.</p>
   */
  Status?: Status | string;
}

export namespace CompleteSnapshotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompleteSnapshotResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An internal error has occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

export enum RequestThrottledExceptionReason {
  ACCOUNT_THROTTLED = "ACCOUNT_THROTTLED",
  DEPENDENCY_REQUEST_THROTTLED = "DEPENDENCY_REQUEST_THROTTLED",
}

/**
 * <p>The number of API requests has exceed the maximum allowed API request throttling
 *             limit.</p>
 */
export interface RequestThrottledException extends __SmithyException, $MetadataBearer {
  name: "RequestThrottledException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: RequestThrottledExceptionReason | string;
}

export namespace RequestThrottledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestThrottledException): any => ({
    ...obj,
  });
}

export enum ResourceNotFoundExceptionReason {
  DEPENDENCY_RESOURCE_NOT_FOUND = "DEPENDENCY_RESOURCE_NOT_FOUND",
  SNAPSHOT_NOT_FOUND = "SNAPSHOT_NOT_FOUND",
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ResourceNotFoundExceptionReason | string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export enum ServiceQuotaExceededExceptionReason {
  DEPENDENCY_SERVICE_QUOTA_EXCEEDED = "DEPENDENCY_SERVICE_QUOTA_EXCEEDED",
}

/**
 * <p>Your current service quotas do not allow you to perform this action.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ServiceQuotaExceededExceptionReason | string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  INVALID_BLOCK = "INVALID_BLOCK",
  INVALID_BLOCK_TOKEN = "INVALID_BLOCK_TOKEN",
  INVALID_CONTENT_ENCODING = "INVALID_CONTENT_ENCODING",
  INVALID_CUSTOMER_KEY = "INVALID_CUSTOMER_KEY",
  INVALID_DEPENDENCY_REQUEST = "INVALID_DEPENDENCY_REQUEST",
  INVALID_PAGE_TOKEN = "INVALID_PAGE_TOKEN",
  INVALID_PARAMETER_VALUE = "INVALID_PARAMETER_VALUE",
  INVALID_SNAPSHOT_ID = "INVALID_SNAPSHOT_ID",
  INVALID_TAG = "INVALID_TAG",
  INVALID_VOLUME_SIZE = "INVALID_VOLUME_SIZE",
  UNRELATED_SNAPSHOTS = "UNRELATED_SNAPSHOTS",
}

/**
 * <p>The input fails to satisfy the constraints of the EBS direct APIs.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the validation exception.</p>
   */
  Reason?: ValidationExceptionReason | string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit for concurrent API requests. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapi-performance">Optimizing performance of the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud
 *                 User Guide</i>.</p>
 */
export interface ConcurrentLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request uses the same client token as a previous, but non-identical
 *             request.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "server";
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface GetSnapshotBlockRequest {
  /**
   * <p>The ID of the snapshot containing the block from which to get data.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The block index of the block from which to get data.</p>
   *
   *
   *         <p>Obtain the <code>BlockIndex</code> by running the <code>ListChangedBlocks</code> or
   *                 <code>ListSnapshotBlocks</code> operations.</p>
   */
  BlockIndex: number | undefined;

  /**
   * <p>The block token of the block from which to get data.</p>
   *
   *
   *         <p>Obtain the <code>BlockToken</code> by running the <code>ListChangedBlocks</code> or
   *                 <code>ListSnapshotBlocks</code> operations.</p>
   */
  BlockToken: string | undefined;
}

export namespace GetSnapshotBlockRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSnapshotBlockRequest): any => ({
    ...obj,
  });
}

export interface GetSnapshotBlockResponse {
  /**
   * <p>The size of the data in the block.</p>
   */
  DataLength?: number;

  /**
   * <p>The data content of the block.</p>
   */
  BlockData?: Readable | ReadableStream | Blob;

  /**
   * <p>The checksum generated for the block, which is Base64 encoded.</p>
   */
  Checksum?: string;

  /**
   * <p>The algorithm used to generate the checksum for the block, such as SHA256.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}

export namespace GetSnapshotBlockResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSnapshotBlockResponse): any => ({
    ...obj,
    ...(obj.BlockData && { BlockData: SENSITIVE_STRING }),
  });
}

export interface ListChangedBlocksRequest {
  /**
   * <p>The ID of the first snapshot to use for the comparison.</p>
   *         <important>
   *             <p>The <code>FirstSnapshotID</code> parameter must be specified with a
   *                     <code>SecondSnapshotId</code> parameter; otherwise, an error occurs.</p>
   *         </important>
   */
  FirstSnapshotId?: string;

  /**
   * <p>The ID of the second snapshot to use for the comparison.</p>
   *         <important>
   *             <p>The <code>SecondSnapshotId</code> parameter must be specified with a
   *                     <code>FirstSnapshotID</code> parameter; otherwise, an error occurs.</p>
   *         </important>
   */
  SecondSnapshotId: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The block index from which the comparison should start.</p>
   *         <p>The list in the response will start from this block index or the next valid block
   *             index in the snapshots.</p>
   */
  StartingBlockIndex?: number;
}

export namespace ListChangedBlocksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChangedBlocksRequest): any => ({
    ...obj,
  });
}

export interface ListChangedBlocksResponse {
  /**
   * <p>An array of objects containing information about the changed blocks.</p>
   */
  ChangedBlocks?: ChangedBlock[];

  /**
   * <p>The time when the <code>BlockToken</code> expires.</p>
   */
  ExpiryTime?: Date;

  /**
   * <p>The size of the volume in GB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The size of the blocks in the snapshot, in bytes.</p>
   */
  BlockSize?: number;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListChangedBlocksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChangedBlocksResponse): any => ({
    ...obj,
    ...(obj.ChangedBlocks && { ChangedBlocks: SENSITIVE_STRING }),
  });
}

export interface ListSnapshotBlocksRequest {
  /**
   * <p>The ID of the snapshot from which to get block indexes and block tokens.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The block index from which the list should start. The list in the response will start
   *             from this block index or the next valid block index in the snapshot.</p>
   */
  StartingBlockIndex?: number;
}

export namespace ListSnapshotBlocksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSnapshotBlocksRequest): any => ({
    ...obj,
  });
}

export interface ListSnapshotBlocksResponse {
  /**
   * <p>An array of objects containing information about the blocks.</p>
   */
  Blocks?: Block[];

  /**
   * <p>The time when the <code>BlockToken</code> expires.</p>
   */
  ExpiryTime?: Date;

  /**
   * <p>The size of the volume in GB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The size of the blocks in the snapshot, in bytes.</p>
   */
  BlockSize?: number;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there
   *             are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListSnapshotBlocksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSnapshotBlocksResponse): any => ({
    ...obj,
    ...(obj.Blocks && { Blocks: SENSITIVE_STRING }),
  });
}

export interface PutSnapshotBlockRequest {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The block index of the block in which to write the data. A block index is a logical
   *     	index in units of <code>512</code> KiB blocks. To identify the block index, divide
   *         	the logical offset of the data in the logical volume by the block size (logical offset of
   *         	data/<code>524288</code>). The logical offset of the data must be <code>512</code>
   *         	KiB aligned.</p>
   */
  BlockIndex: number | undefined;

  /**
   * <p>The data to write to the block.</p>
   *         <p>The block data is not signed as part of the Signature Version 4 signing process. As a
   *             result, you must generate and provide a Base64-encoded SHA256 checksum for the block
   *             data using the <b>x-amz-Checksum</b> header. Also, you
   *         	must specify the checksum algorithm using the <b>x-amz-Checksum-Algorithm</b>
   *         	header. The checksum that you provide is part of the Signature Version 4 signing process.
   *         	It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity
   *         	of the data. If the checksums do not correspond, the request fails. For more information,
   *         	see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums">
   *                 Using checksums with the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   */
  BlockData: Readable | ReadableStream | Blob | undefined;

  /**
   * <p>The size of the data to write to the block, in bytes. Currently, the only supported
   *             size is <code>524288</code> bytes.</p>
   *         <p>Valid values: <code>524288</code>
   *          </p>
   */
  DataLength: number | undefined;

  /**
   * <p>The progress of the write process, as a percentage.</p>
   */
  Progress?: number;

  /**
   * <p>A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are
   *             supported.</p>
   */
  Checksum: string | undefined;

  /**
   * <p>The algorithm used to generate the checksum. Currently, the only supported algorithm
   *             is <code>SHA256</code>.</p>
   */
  ChecksumAlgorithm: ChecksumAlgorithm | string | undefined;
}

export namespace PutSnapshotBlockRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSnapshotBlockRequest): any => ({
    ...obj,
    ...(obj.BlockData && { BlockData: SENSITIVE_STRING }),
  });
}

export interface PutSnapshotBlockResponse {
  /**
   * <p>The SHA256 checksum generated for the block data by Amazon EBS.</p>
   */
  Checksum?: string;

  /**
   * <p>The algorithm used by Amazon EBS to generate the checksum.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}

export namespace PutSnapshotBlockResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSnapshotBlockResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface StartSnapshotRequest {
  /**
   * <p>The size of the volume, in GiB. The maximum size is <code>65536</code> GiB (64
   *             TiB).</p>
   */
  VolumeSize: number | undefined;

  /**
   * <p>The ID of the parent snapshot. If there is no parent snapshot, or if you are creating
   *             the first snapshot for an on-premises volume, omit this parameter.</p>
   *         <p>If your account is enabled for encryption by default, you cannot use an unencrypted
   *             snapshot as a parent snapshot. You must first create an encrypted copy of the parent
   *             snapshot using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopySnapshot.html">CopySnapshot</a>.</p>
   */
  ParentSnapshotId?: string;

  /**
   * <p>The tags to apply to the snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. Idempotency ensures that an API request completes only once. With an idempotent
   *             request, if the original request completes successfully. The subsequent retries with the same
   *             client token return the result from the original successful request and they have no additional
   *             effect.</p>
   *         <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html">
   *     		Idempotency for StartSnapshot API</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether to encrypt the snapshot. To create an encrypted snapshot, specify
   *                 <code>true</code>. To create an unencrypted snapshot, omit this parameter.</p>
   *         <p>If you specify a value for <b>ParentSnapshotId</b>, omit
   *             this parameter.</p>
   *         <p>If you specify <code>true</code>, the snapshot is encrypted using the KMS key specified
   *             using the <b>KmsKeyArn</b> parameter. If no value is specified
   *             for <b>KmsKeyArn</b>, the default KMS key for your account is
   *             used. If no default KMS key has been specified for your account, the Amazon Web Services managed KMS key is used.
   *             To set a default KMS key for your account, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyEbsDefaultKmsKeyId.html">
   *         		ModifyEbsDefaultKmsKeyId</a>.</p>
   *         <p>If your account is enabled for encryption by default, you cannot set this parameter to
   *                 <code>false</code>. In this case, you can omit this parameter.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-encryption">
   *                 Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS)
   *         	key to be used to encrypt the snapshot. If you do not specify a
   *             KMS key, the default Amazon Web Services managed KMS key is used.</p>
   *         <p>If you specify a <b>ParentSnapshotId</b>, omit this
   *             parameter; the snapshot will be encrypted using the same KMS key that was used to encrypt
   *             the parent snapshot.</p>
   *         <p>If <b>Encrypted</b> is set to <code>true</code>,
   *             you must specify a KMS key ARN. </p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The amount of time (in minutes) after which the snapshot is automatically cancelled
   *             if:</p>
   *         <ul>
   *             <li>
   *                 <p>No blocks are written to the snapshot.</p>
   *             </li>
   *             <li>
   *                 <p>The snapshot is not completed after writing the last block of data.</p>
   *             </li>
   *          </ul>
   *         <p>If no value is specified, the timeout defaults to <code>60</code> minutes.</p>
   */
  Timeout?: number;
}

export namespace StartSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSnapshotRequest): any => ({
    ...obj,
    ...(obj.KmsKeyArn && { KmsKeyArn: SENSITIVE_STRING }),
  });
}

export interface StartSnapshotResponse {
  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Amazon Web Services account ID of the snapshot owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The status of the snapshot.</p>
   */
  Status?: Status | string;

  /**
   * <p>The timestamp when the snapshot was created.</p>
   */
  StartTime?: Date;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The size of the blocks in the snapshot, in bytes.</p>
   */
  BlockSize?: number;

  /**
   * <p>The tags applied to the snapshot. You can specify up to 50 tags per snapshot. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html"> Tagging your Amazon EC2
   *                 resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the parent snapshot.</p>
   */
  ParentSnapshotId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the snapshot.</p>
   */
  KmsKeyArn?: string;
}

export namespace StartSnapshotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSnapshotResponse): any => ({
    ...obj,
    ...(obj.KmsKeyArn && { KmsKeyArn: SENSITIVE_STRING }),
  });
}
