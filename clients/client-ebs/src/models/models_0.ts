// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type { ChecksumAggregationMethod, ChecksumAlgorithm, SSEType, Status } from "./enums";

/**
 * A block of data in an Amazon Elastic Block Store snapshot.
 *
 * @public
 */
export interface Block {
  /**
   * The block index.
   *
   * @public
   */
  BlockIndex?: number | undefined;

  /**
   * The block token for the block index.
   *
   * @public
   */
  BlockToken?: string | undefined;
}

/**
 * A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage.
 *
 * @public
 */
export interface ChangedBlock {
  /**
   * The block index.
   *
   * @public
   */
  BlockIndex?: number | undefined;

  /**
   * The block token for the block index of the `FirstSnapshotId` specified in the `ListChangedBlocks` operation. This value is absent if the first snapshot does not have the changed block that is on the second snapshot.
   *
   * @public
   */
  FirstBlockToken?: string | undefined;

  /**
   * The block token for the block index of the `SecondSnapshotId` specified in the `ListChangedBlocks` operation.
   *
   * @public
   */
  SecondBlockToken?: string | undefined;
}

/**
 * @public
 */
export interface CompleteSnapshotRequest {
  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * The number of blocks that were written to the snapshot.
   *
   * @public
   */
  ChangedBlocksCount: number | undefined;

  /**
   * An aggregated Base-64 SHA256 checksum based on the checksums of each written block.
   *
   * To generate the aggregated checksum using the linear aggregation method, arrange the checksums for each written block in ascending order of their block index, concatenate them to form a single string, and then generate the checksum on the entire string using the SHA256 algorithm.
   *
   * @public
   */
  Checksum?: string | undefined;

  /**
   * The algorithm used to generate the checksum. Currently, the only supported algorithm is `SHA256`.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * The aggregation method used to generate the checksum. Currently, the only supported aggregation method is `LINEAR`.
   *
   * @public
   */
  ChecksumAggregationMethod?: ChecksumAggregationMethod | undefined;
}

/**
 * @public
 */
export interface CompleteSnapshotResponse {
  /**
   * The status of the snapshot.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface GetSnapshotBlockRequest {
  /**
   * The ID of the snapshot containing the block from which to get data.
   *
   * > **Important:** If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see [Using encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * The block index of the block in which to read the data. A block index is a logical index in units of `512` KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/`524288`). The logical offset of the data must be `512` KiB aligned.
   *
   * @public
   */
  BlockIndex: number | undefined;

  /**
   * The block token of the block from which to get data. You can obtain the `BlockToken` by running the `ListChangedBlocks` or `ListSnapshotBlocks` operations.
   *
   * @public
   */
  BlockToken: string | undefined;
}

/**
 * @public
 */
export interface GetSnapshotBlockResponse {
  /**
   * The size of the data in the block.
   *
   * @public
   */
  DataLength?: number | undefined;

  /**
   * The data content of the block.
   *
   * @public
   */
  BlockData?: StreamingBlobTypes | undefined;

  /**
   * The checksum generated for the block, which is Base64 encoded.
   *
   * @public
   */
  Checksum?: string | undefined;

  /**
   * The algorithm used to generate the checksum for the block, such as SHA256.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface ListChangedBlocksRequest {
  /**
   * The ID of the first snapshot to use for the comparison.
   *
   * > **Important:** The `FirstSnapshotID` parameter must be specified with a `SecondSnapshotId` parameter; otherwise, an error occurs.
   *
   * @public
   */
  FirstSnapshotId?: string | undefined;

  /**
   * The ID of the second snapshot to use for the comparison.
   *
   * > **Important:** The `SecondSnapshotId` parameter must be specified with a `FirstSnapshotID` parameter; otherwise, an error occurs.
   *
   * @public
   */
  SecondSnapshotId: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * If you specify **NextToken**, then **StartingBlockIndex** is ignored.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of blocks to be returned by the request.
   *
   * Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than **MaxResults** or an empty array of blocks.
   *
   * To retrieve the next set of blocks from the snapshot, make another request with the returned **NextToken** value. The value of **NextToken** is `null` when there are no more blocks to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The block index from which the comparison should start.
   *
   * The list in the response will start from this block index or the next valid block index in the snapshots.
   *
   * If you specify **NextToken**, then **StartingBlockIndex** is ignored.
   *
   * @public
   */
  StartingBlockIndex?: number | undefined;
}

/**
 * @public
 */
export interface ListChangedBlocksResponse {
  /**
   * An array of objects containing information about the changed blocks.
   *
   * @public
   */
  ChangedBlocks?: ChangedBlock[] | undefined;

  /**
   * The time when the `BlockToken` expires.
   *
   * @public
   */
  ExpiryTime?: Date | undefined;

  /**
   * The size of the volume in GB.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The size of the blocks in the snapshot, in bytes.
   *
   * @public
   */
  BlockSize?: number | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSnapshotBlocksRequest {
  /**
   * The ID of the snapshot from which to get block indexes and block tokens.
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * The token to request the next page of results.
   *
   * If you specify **NextToken**, then **StartingBlockIndex** is ignored.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of blocks to be returned by the request.
   *
   * Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than **MaxResults** or an empty array of blocks.
   *
   * To retrieve the next set of blocks from the snapshot, make another request with the returned **NextToken** value. The value of **NextToken** is `null` when there are no more blocks to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot.
   *
   * If you specify **NextToken**, then **StartingBlockIndex** is ignored.
   *
   * @public
   */
  StartingBlockIndex?: number | undefined;
}

/**
 * @public
 */
export interface ListSnapshotBlocksResponse {
  /**
   * An array of objects containing information about the blocks.
   *
   * @public
   */
  Blocks?: Block[] | undefined;

  /**
   * The time when the `BlockToken` expires.
   *
   * @public
   */
  ExpiryTime?: Date | undefined;

  /**
   * The size of the volume in GB.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The size of the blocks in the snapshot, in bytes.
   *
   * @public
   */
  BlockSize?: number | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutSnapshotBlockRequest {
  /**
   * The ID of the snapshot.
   *
   * > **Important:** If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see [Using encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html) in the *Amazon Elastic Compute Cloud User Guide*..
   *
   * @public
   */
  SnapshotId: string | undefined;

  /**
   * The block index of the block in which to write the data. A block index is a logical index in units of `512` KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/`524288`). The logical offset of the data must be `512` KiB aligned.
   *
   * @public
   */
  BlockIndex: number | undefined;

  /**
   * The data to write to the block.
   *
   * The block data is not signed as part of the Signature Version 4 signing process. As a result, you must generate and provide a Base64-encoded SHA256 checksum for the block data using the **x-amz-Checksum** header. Also, you must specify the checksum algorithm using the **x-amz-Checksum-Algorithm** header. The checksum that you provide is part of the Signature Version 4 signing process. It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity of the data. If the checksums do not correspond, the request fails. For more information, see [Using checksums with the EBS direct APIs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  BlockData: StreamingBlobTypes | undefined;

  /**
   * The size of the data to write to the block, in bytes. Currently, the only supported size is `524288` bytes.
   *
   * Valid values: `524288`
   *
   * @public
   */
  DataLength: number | undefined;

  /**
   * The progress of the write process, as a percentage.
   *
   * @public
   */
  Progress?: number | undefined;

  /**
   * A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.
   *
   * @public
   */
  Checksum: string | undefined;

  /**
   * The algorithm used to generate the checksum. Currently, the only supported algorithm is `SHA256`.
   *
   * @public
   */
  ChecksumAlgorithm: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutSnapshotBlockResponse {
  /**
   * The SHA256 checksum generated for the block data by Amazon EBS.
   *
   * @public
   */
  Checksum?: string | undefined;

  /**
   * The algorithm used by Amazon EBS to generate the checksum.
   *
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * Describes a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface StartSnapshotRequest {
  /**
   * The size of the volume, in GiB. The maximum size is `65536` GiB (64 TiB).
   *
   * @public
   */
  VolumeSize: number | undefined;

  /**
   * The ID of the parent snapshot. If there is no parent snapshot, or if you are creating the first snapshot for an on-premises volume, omit this parameter.
   *
   * You can't specify **ParentSnapshotId** and **Encrypted** in the same request. If you specify both parameters, the request fails with `ValidationException`.
   *
   * The encryption status of the snapshot depends on the values that you specify for **Encrypted**, **KmsKeyArn**, and **ParentSnapshotId**, and whether your Amazon Web Services account is enabled for [encryption by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default). For more information, see [Using encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * > **Important:** If you specify an encrypted parent snapshot, you must have permission to use the KMS key that was used to encrypt the parent snapshot. For more information, see [Permissions to use Key Management Service keys](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  ParentSnapshotId?: string | undefined;

  /**
   * The tags to apply to the snapshot.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A description for the snapshot.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.
   *
   * If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
   *
   * For more information, see [Idempotency for StartSnapshot API](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates whether to encrypt the snapshot.
   *
   * You can't specify **Encrypted** and **ParentSnapshotId** in the same request. If you specify both parameters, the request fails with `ValidationException`.
   *
   * The encryption status of the snapshot depends on the values that you specify for **Encrypted**, **KmsKeyArn**, and **ParentSnapshotId**, and whether your Amazon Web Services account is enabled for [encryption by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default). For more information, see [Using encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * > **Important:** To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see [Permissions to use Key Management Service keys](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot.
   *
   * The encryption status of the snapshot depends on the values that you specify for **Encrypted**, **KmsKeyArn**, and **ParentSnapshotId**, and whether your Amazon Web Services account is enabled for [encryption by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default). For more information, see [Using encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * > **Important:** To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see [Permissions to use Key Management Service keys](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The amount of time (in minutes) after which the snapshot is automatically cancelled if:
   *
   * - No blocks are written to the snapshot.
   * - The snapshot is not completed after writing the last block of data.
   *
   * If no value is specified, the timeout defaults to `60` minutes.
   *
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * @public
 */
export interface StartSnapshotResponse {
  /**
   * The description of the snapshot.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the snapshot owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The status of the snapshot.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The timestamp when the snapshot was created.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The size of the blocks in the snapshot, in bytes.
   *
   * @public
   */
  BlockSize?: number | undefined;

  /**
   * The tags applied to the snapshot. You can specify up to 50 tags per snapshot. For more information, see [Tagging your Amazon EC2 resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ID of the parent snapshot.
   *
   * @public
   */
  ParentSnapshotId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the snapshot.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  SseType?: SSEType | undefined;
}
