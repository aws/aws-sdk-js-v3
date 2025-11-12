// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KinesisServiceException as __BaseException } from "./KinesisServiceException";

/**
 * <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Represents the input for <code>AddTagsToStream</code>.</p>
 * @public
 */
export interface AddTagsToStreamInput {
  /**
   * <p>The name of the stream.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>A set of up to 50 key-value pairs to use to create the tags. A tag consists of a required key and an optional value. You can add up to 50 tags per resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
  }
}

/**
 * <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The range of possible hash key values for the shard, which is a set of ordered
 *             contiguous positive integers.</p>
 * @public
 */
export interface HashKeyRange {
  /**
   * <p>The starting hash key of the hash key range.</p>
   * @public
   */
  StartingHashKey: string | undefined;

  /**
   * <p>The ending hash key of the hash key range.</p>
   * @public
   */
  EndingHashKey: string | undefined;
}

/**
 * <p>Output parameter of the GetRecords API. The existing child shard of the current
 *             shard.</p>
 * @public
 */
export interface ChildShard {
  /**
   * <p>The shard ID of the existing child shard of the current shard.</p>
   * @public
   */
  ShardId: string | undefined;

  /**
   * <p>The current shard that is the parent of the existing child shard.</p>
   * @public
   */
  ParentShards: string[] | undefined;

  /**
   * <p>The range of possible hash key values for the shard, which is a set of ordered
   *             contiguous positive integers.</p>
   * @public
   */
  HashKeyRange: HashKeyRange | undefined;
}

/**
 * @public
 * @enum
 */
export const ConsumerStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ConsumerStatus = (typeof ConsumerStatus)[keyof typeof ConsumerStatus];

/**
 * <p>An object that represents the details of the consumer you registered. This type of
 *             object is returned by <a>RegisterStreamConsumer</a>.</p>
 * @public
 */
export interface Consumer {
  /**
   * <p>The name of the consumer is something you choose when you register the
   *             consumer.</p>
   * @public
   */
  ConsumerName: string | undefined;

  /**
   * <p>When you register a consumer, Kinesis Data Streams generates an ARN for it. You need
   *             this ARN to be able to call <a>SubscribeToShard</a>.</p>
   *          <p>If you delete a consumer and then create a new one with the same name, it won't have
   *             the same ARN. That's because consumer ARNs contain the creation timestamp. This is
   *             important to keep in mind if you have IAM policies that reference consumer ARNs.</p>
   * @public
   */
  ConsumerARN: string | undefined;

  /**
   * <p>A consumer can't read data while in the <code>CREATING</code> or <code>DELETING</code>
   *             states.</p>
   * @public
   */
  ConsumerStatus: ConsumerStatus | undefined;

  /**
   * <p></p>
   * @public
   */
  ConsumerCreationTimestamp: Date | undefined;
}

/**
 * <p>An object that represents the details of a registered consumer. This type of object is
 *             returned by <a>DescribeStreamConsumer</a>.</p>
 * @public
 */
export interface ConsumerDescription {
  /**
   * <p>The name of the consumer is something you choose when you register the
   *             consumer.</p>
   * @public
   */
  ConsumerName: string | undefined;

  /**
   * <p>When you register a consumer, Kinesis Data Streams generates an ARN for it. You need
   *             this ARN to be able to call <a>SubscribeToShard</a>.</p>
   *          <p>If you delete a consumer and then create a new one with the same name, it won't have
   *             the same ARN. That's because consumer ARNs contain the creation timestamp. This is
   *             important to keep in mind if you have IAM policies that reference consumer ARNs.</p>
   * @public
   */
  ConsumerARN: string | undefined;

  /**
   * <p>A consumer can't read data while in the <code>CREATING</code> or <code>DELETING</code>
   *             states.</p>
   * @public
   */
  ConsumerStatus: ConsumerStatus | undefined;

  /**
   * <p></p>
   * @public
   */
  ConsumerCreationTimestamp: Date | undefined;

  /**
   * <p>The ARN of the stream with which you registered the consumer.</p>
   * @public
   */
  StreamARN: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamMode = {
  ON_DEMAND: "ON_DEMAND",
  PROVISIONED: "PROVISIONED",
} as const;

/**
 * @public
 */
export type StreamMode = (typeof StreamMode)[keyof typeof StreamMode];

/**
 * <p> Specifies the capacity mode to which you want to set your data stream. Currently, in
 *             Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. </p>
 * @public
 */
export interface StreamModeDetails {
  /**
   * <p> Specifies the capacity mode to which you want to set your data stream. Currently, in
   *             Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. </p>
   * @public
   */
  StreamMode: StreamMode | undefined;
}

/**
 * <p>Represents the input for <code>CreateStream</code>.</p>
 * @public
 */
export interface CreateStreamInput {
  /**
   * <p>A name to identify the stream. The stream name is scoped to the Amazon Web Services
   *             account used by the application that creates the stream. It is also scoped by Amazon Web Services Region. That is, two streams in two different Amazon Web Services accounts
   *             can have the same name. Two streams in the same Amazon Web Services account but in two
   *             different Regions can also have the same name.</p>
   * @public
   */
  StreamName: string | undefined;

  /**
   * <p>The number of shards that the stream will use. The throughput of the stream is a
   *             function of the number of shards; more shards are required for greater provisioned
   *             throughput.</p>
   * @public
   */
  ShardCount?: number | undefined;

  /**
   * <p> Indicates the capacity mode of the data stream. Currently, in Kinesis Data Streams,
   *             you can choose between an <b>on-demand</b> capacity mode and a
   *                 <b>provisioned</b> capacity mode for your data
   *             streams.</p>
   * @public
   */
  StreamModeDetails?: StreamModeDetails | undefined;

  /**
   * <p>A set of up to 50 key-value pairs to use to create the tags. A tag consists of a required key and an optional value.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The target warm throughput in MB/s that the stream should be scaled to handle. This represents the throughput capacity that will be immediately available for write operations.</p>
   * @public
   */
  WarmThroughputMiBps?: number | undefined;

  /**
   * <p>The maximum record size of a single record in kibibyte (KiB) that you can write to, and read from a stream.</p>
   * @public
   */
  MaxRecordSizeInKiB?: number | undefined;
}

/**
 * <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Represents the input for <a>DecreaseStreamRetentionPeriod</a>.</p>
 * @public
 */
export interface DecreaseStreamRetentionPeriodInput {
  /**
   * <p>The name of the stream to modify.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The new retention period of the stream, in hours. Must be less than the current
   *             retention period.</p>
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the data stream or consumer.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>Represents the input for <a>DeleteStream</a>.</p>
 * @public
 */
export interface DeleteStreamInput {
  /**
   * <p>The name of the stream to delete.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>If this parameter is unset (<code>null</code>) or if you set it to <code>false</code>,
   *             and the stream has registered consumers, the call to <code>DeleteStream</code> fails
   *             with a <code>ResourceInUseException</code>. </p>
   * @public
   */
  EnforceConsumerDeletion?: boolean | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterStreamConsumerInput {
  /**
   * <p>The ARN of the Kinesis data stream that the consumer is registered with. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Resource Names (ARNs) and Amazon Web Services Service
   *             Namespaces</a>.</p>
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * <p>The name that you gave to the consumer.</p>
   * @public
   */
  ConsumerName?: string | undefined;

  /**
   * <p>The ARN returned by Kinesis Data Streams when you registered the consumer. If you
   *             don't know the ARN of the consumer that you want to deregister, you can use the
   *             ListStreamConsumers operation to get a list of the descriptions of all the consumers
   *             that are currently registered with a given data stream. The description of a consumer
   *             contains its ARN.</p>
   * @public
   */
  ConsumerARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsInput {}

/**
 * @public
 * @enum
 */
export const MinimumThroughputBillingCommitmentOutputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_UNTIL_EARLIEST_ALLOWED_END: "ENABLED_UNTIL_EARLIEST_ALLOWED_END",
} as const;

/**
 * @public
 */
export type MinimumThroughputBillingCommitmentOutputStatus =
  (typeof MinimumThroughputBillingCommitmentOutputStatus)[keyof typeof MinimumThroughputBillingCommitmentOutputStatus];

/**
 * <p>Represents the current status of minimum throughput billing commitment for an account.</p>
 * @public
 */
export interface MinimumThroughputBillingCommitmentOutput {
  /**
   * <p>The current status of the minimum throughput billing commitment.</p>
   * @public
   */
  Status: MinimumThroughputBillingCommitmentOutputStatus | undefined;

  /**
   * <p>The timestamp when the commitment was started.</p>
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * <p>The timestamp when the commitment was ended.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>The earliest timestamp when the commitment can be ended.</p>
   * @public
   */
  EarliestAllowedEndAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsOutput {
  /**
   * <p>The current configuration of the minimum throughput billing commitment for your Amazon Web Services account.</p>
   * @public
   */
  MinimumThroughputBillingCommitment?: MinimumThroughputBillingCommitmentOutput | undefined;
}

/**
 * @public
 */
export interface DescribeLimitsInput {}

/**
 * @public
 */
export interface DescribeLimitsOutput {
  /**
   * <p>The maximum number of shards.</p>
   * @public
   */
  ShardLimit: number | undefined;

  /**
   * <p>The number of open shards.</p>
   * @public
   */
  OpenShardCount: number | undefined;

  /**
   * <p> Indicates the number of data streams with the on-demand capacity mode.</p>
   * @public
   */
  OnDemandStreamCount: number | undefined;

  /**
   * <p> The maximum number of data streams with the on-demand capacity mode. </p>
   * @public
   */
  OnDemandStreamCountLimit: number | undefined;
}

/**
 * <p>Represents the input for <code>DescribeStream</code>.</p>
 * @public
 */
export interface DescribeStreamInput {
  /**
   * <p>The name of the stream to describe.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The maximum number of shards to return in a single call. The default value is 100. If
   *             you specify a value greater than 100, at most 100 results are returned.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The shard ID of the shard to start with.</p>
   *          <p>Specify this parameter to indicate that you want to describe the stream starting with
   *             the shard whose ID immediately follows <code>ExclusiveStartShardId</code>.</p>
   *          <p>If you don't specify this parameter, the default behavior for
   *                 <code>DescribeStream</code> is to describe the stream starting with the first shard
   *             in the stream.</p>
   * @public
   */
  ExclusiveStartShardId?: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const MetricsName = {
  ALL: "ALL",
  INCOMING_BYTES: "IncomingBytes",
  INCOMING_RECORDS: "IncomingRecords",
  ITERATOR_AGE_MILLISECONDS: "IteratorAgeMilliseconds",
  OUTGOING_BYTES: "OutgoingBytes",
  OUTGOING_RECORDS: "OutgoingRecords",
  READ_PROVISIONED_THROUGHPUT_EXCEEDED: "ReadProvisionedThroughputExceeded",
  WRITE_PROVISIONED_THROUGHPUT_EXCEEDED: "WriteProvisionedThroughputExceeded",
} as const;

/**
 * @public
 */
export type MetricsName = (typeof MetricsName)[keyof typeof MetricsName];

/**
 * <p>Represents enhanced metrics types.</p>
 * @public
 */
export interface EnhancedMetrics {
  /**
   * <p>List of shard-level metrics.</p>
   *          <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" enhances
   *             every metric.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IncomingBytes</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IncomingRecords</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OutgoingBytes</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OutgoingRecords</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WriteProvisionedThroughputExceeded</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadProvisionedThroughputExceeded</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IteratorAgeMilliseconds</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon
   *                 Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon
   *                 Kinesis Data Streams Developer Guide</i>.</p>
   * @public
   */
  ShardLevelMetrics?: MetricsName[] | undefined;
}

/**
 * <p>The range of possible sequence numbers for the shard.</p>
 * @public
 */
export interface SequenceNumberRange {
  /**
   * <p>The starting sequence number for the range.</p>
   * @public
   */
  StartingSequenceNumber: string | undefined;

  /**
   * <p>The ending sequence number for the range. Shards that are in the OPEN state have an
   *             ending sequence number of <code>null</code>.</p>
   * @public
   */
  EndingSequenceNumber?: string | undefined;
}

/**
 * <p>A uniquely identified group of data records in a Kinesis data stream.</p>
 * @public
 */
export interface Shard {
  /**
   * <p>The unique identifier of the shard within the stream.</p>
   * @public
   */
  ShardId: string | undefined;

  /**
   * <p>The shard ID of the shard's parent.</p>
   * @public
   */
  ParentShardId?: string | undefined;

  /**
   * <p>The shard ID of the shard adjacent to the shard's parent.</p>
   * @public
   */
  AdjacentParentShardId?: string | undefined;

  /**
   * <p>The range of possible hash key values for the shard, which is a set of ordered
   *             contiguous positive integers.</p>
   * @public
   */
  HashKeyRange: HashKeyRange | undefined;

  /**
   * <p>The range of possible sequence numbers for the shard.</p>
   * @public
   */
  SequenceNumberRange: SequenceNumberRange | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus];

/**
 * <p>Represents the output for <a>DescribeStream</a>.</p>
 * @public
 */
export interface StreamDescription {
  /**
   * <p>The name of the stream being described.</p>
   * @public
   */
  StreamName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the stream being described.</p>
   * @public
   */
  StreamARN: string | undefined;

  /**
   * <p>The current status of the stream being described. The stream status is one of the
   *             following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The stream is being created. Kinesis Data Streams
   *                     immediately returns and sets <code>StreamStatus</code> to
   *                     <code>CREATING</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The stream is being deleted. The specified stream is in
   *                     the <code>DELETING</code> state until Kinesis Data Streams completes the
   *                     deletion.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The stream exists and is ready for read and write
   *                     operations or deletion. You should perform read and write operations only on an
   *                         <code>ACTIVE</code> stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - Shards in the stream are being merged or split. Read and
   *                     write operations continue to work while the stream is in the
   *                         <code>UPDATING</code> state.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StreamStatus: StreamStatus | undefined;

  /**
   * <p> Specifies the capacity mode to which you want to set your data stream. Currently, in
   *             Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. </p>
   * @public
   */
  StreamModeDetails?: StreamModeDetails | undefined;

  /**
   * <p>The shards that comprise the stream.</p>
   * @public
   */
  Shards: Shard[] | undefined;

  /**
   * <p>If set to <code>true</code>, more shards in the stream are available to
   *             describe.</p>
   * @public
   */
  HasMoreShards: boolean | undefined;

  /**
   * <p>The current retention period, in hours. Minimum value of 24. Maximum value of
   *             168.</p>
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * <p>The approximate time that the stream was created.</p>
   * @public
   */
  StreamCreationTimestamp: Date | undefined;

  /**
   * <p>Represents the current enhanced monitoring settings of the stream.</p>
   * @public
   */
  EnhancedMonitoring: EnhancedMetrics[] | undefined;

  /**
   * <p>The server-side encryption type used on the stream. This parameter can be one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Do not encrypt the records in the stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KMS</code>: Use server-side encryption on the records in the stream
   *                     using a customer-managed Amazon Web Services KMS key.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption.
   *             This value can be a globally unique identifier, a fully specified ARN to either an alias
   *             or a key, or an alias name prefixed by "alias/".You can also use a master key owned by
   *             Kinesis Data Streams by specifying the alias <code>aws/kinesis</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Key ARN example:
   *                         <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN example:
   *                         <code>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Globally unique key ID example:
   *                         <code>12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name example: <code>alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Master key owned by Kinesis Data Streams:
   *                     <code>alias/aws/kinesis</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * <p>Represents the output for <code>DescribeStream</code>.</p>
 * @public
 */
export interface DescribeStreamOutput {
  /**
   * <p>The current status of the stream, the stream Amazon Resource Name (ARN), an array of
   *             shard objects that comprise the stream, and whether there are more shards
   *             available.</p>
   * @public
   */
  StreamDescription: StreamDescription | undefined;
}

/**
 * @public
 */
export interface DescribeStreamConsumerInput {
  /**
   * <p>The ARN of the Kinesis data stream that the consumer is registered with. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Resource Names (ARNs) and Amazon Web Services Service
   *             Namespaces</a>.</p>
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * <p>The name that you gave to the consumer.</p>
   * @public
   */
  ConsumerName?: string | undefined;

  /**
   * <p>The ARN returned by Kinesis Data Streams when you registered the consumer.</p>
   * @public
   */
  ConsumerARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStreamConsumerOutput {
  /**
   * <p>An object that represents the details of the consumer.</p>
   * @public
   */
  ConsumerDescription: ConsumerDescription | undefined;
}

/**
 * @public
 */
export interface DescribeStreamSummaryInput {
  /**
   * <p>The name of the stream to describe.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the warm throughput configuration on the stream. This is only present for On-Demand Kinesis Data Streams in accounts that have <code>MinimumThroughputBillingCommitment</code> enabled.</p>
 * @public
 */
export interface WarmThroughputObject {
  /**
   * <p>The target warm throughput value on the stream. This indicates that the stream is currently scaling towards this target value.</p>
   * @public
   */
  TargetMiBps?: number | undefined;

  /**
   * <p>The current warm throughput value on the stream. This is the write throughput in MiBps that the stream is currently scaled to handle.</p>
   * @public
   */
  CurrentMiBps?: number | undefined;
}

/**
 * <p>Represents the output for <a>DescribeStreamSummary</a>
 *          </p>
 * @public
 */
export interface StreamDescriptionSummary {
  /**
   * <p>The name of the stream being described.</p>
   * @public
   */
  StreamName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the stream being described.</p>
   * @public
   */
  StreamARN: string | undefined;

  /**
   * <p>The current status of the stream being described. The stream status is one of the
   *             following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The stream is being created. Kinesis Data Streams
   *                     immediately returns and sets <code>StreamStatus</code> to
   *                     <code>CREATING</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The stream is being deleted. The specified stream is in
   *                     the <code>DELETING</code> state until Kinesis Data Streams completes the
   *                     deletion.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The stream exists and is ready for read and write
   *                     operations or deletion. You should perform read and write operations only on an
   *                         <code>ACTIVE</code> stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - Shards in the stream are being merged or split. Read and
   *                     write operations continue to work while the stream is in the
   *                         <code>UPDATING</code> state.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StreamStatus: StreamStatus | undefined;

  /**
   * <p> Specifies the capacity mode to which you want to set your data stream. Currently, in
   *             Kinesis Data Streams, you can choose between an <b>on-demand</b> ycapacity mode and a <b>provisioned</b> capacity mode for your data streams. </p>
   * @public
   */
  StreamModeDetails?: StreamModeDetails | undefined;

  /**
   * <p>The current retention period, in hours.</p>
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * <p>The approximate time that the stream was created.</p>
   * @public
   */
  StreamCreationTimestamp: Date | undefined;

  /**
   * <p>Represents the current enhanced monitoring settings of the stream.</p>
   * @public
   */
  EnhancedMonitoring: EnhancedMetrics[] | undefined;

  /**
   * <p>The encryption type used. This value is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KMS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * <p>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption.
   *             This value can be a globally unique identifier, a fully specified ARN to either an alias
   *             or a key, or an alias name prefixed by "alias/".You can also use a master key owned by
   *             Kinesis Data Streams by specifying the alias <code>aws/kinesis</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Key ARN example:
   *                         <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN example: <code>
   *                         arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Globally unique key ID example:
   *                         <code>12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name example: <code>alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Master key owned by Kinesis Data Streams:
   *                     <code>alias/aws/kinesis</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The number of open shards in the stream.</p>
   * @public
   */
  OpenShardCount: number | undefined;

  /**
   * <p>The number of enhanced fan-out consumers registered with the stream.</p>
   * @public
   */
  ConsumerCount?: number | undefined;

  /**
   * <p>The warm throughput in MB/s for the stream. This represents the throughput capacity that will be immediately available for write operations.</p>
   * @public
   */
  WarmThroughput?: WarmThroughputObject | undefined;

  /**
   * <p>The maximum record size of a single record in kibibyte (KiB) that you can write to, and read from a stream.</p>
   * @public
   */
  MaxRecordSizeInKiB?: number | undefined;
}

/**
 * @public
 */
export interface DescribeStreamSummaryOutput {
  /**
   * <p>A <a>StreamDescriptionSummary</a> containing information about the
   *             stream.</p>
   * @public
   */
  StreamDescriptionSummary: StreamDescriptionSummary | undefined;
}

/**
 * <p>Represents the input for <a>DisableEnhancedMonitoring</a>.</p>
 * @public
 */
export interface DisableEnhancedMonitoringInput {
  /**
   * <p>The name of the Kinesis data stream for which to disable enhanced monitoring.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>List of shard-level metrics to disable.</p>
   *          <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" disables
   *             every metric.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IncomingBytes</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IncomingRecords</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OutgoingBytes</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OutgoingRecords</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WriteProvisionedThroughputExceeded</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadProvisionedThroughputExceeded</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IteratorAgeMilliseconds</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon
   *                 Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon
   *                 Kinesis Data Streams Developer Guide</i>.</p>
   * @public
   */
  ShardLevelMetrics: MetricsName[] | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.</p>
 * @public
 */
export interface EnhancedMonitoringOutput {
  /**
   * <p>The name of the Kinesis data stream.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>Represents the current state of the metrics that are in the enhanced state before the
   *             operation.</p>
   * @public
   */
  CurrentShardLevelMetrics?: MetricsName[] | undefined;

  /**
   * <p>Represents the list of all the metrics that would be in the enhanced state after the
   *             operation.</p>
   * @public
   */
  DesiredShardLevelMetrics?: MetricsName[] | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the input for <a>EnableEnhancedMonitoring</a>.</p>
 * @public
 */
export interface EnableEnhancedMonitoringInput {
  /**
   * <p>The name of the stream for which to enable enhanced monitoring.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>List of shard-level metrics to enable.</p>
   *          <p>The following are the valid shard-level metrics. The value "<code>ALL</code>" enables
   *             every metric.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IncomingBytes</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IncomingRecords</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OutgoingBytes</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OutgoingRecords</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WriteProvisionedThroughputExceeded</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReadProvisionedThroughputExceeded</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IteratorAgeMilliseconds</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html">Monitoring the Amazon
   *                 Kinesis Data Streams Service with Amazon CloudWatch</a> in the <i>Amazon
   *                 Kinesis Data Streams Developer Guide</i>.</p>
   * @public
   */
  ShardLevelMetrics: MetricsName[] | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>The provided iterator exceeds the maximum age allowed.</p>
 * @public
 */
export class ExpiredIteratorException extends __BaseException {
  readonly name: "ExpiredIteratorException" = "ExpiredIteratorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredIteratorException, __BaseException>) {
    super({
      name: "ExpiredIteratorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredIteratorException.prototype);
  }
}

/**
 * <p>The pagination token passed to the operation is expired.</p>
 * @public
 */
export class ExpiredNextTokenException extends __BaseException {
  readonly name: "ExpiredNextTokenException" = "ExpiredNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredNextTokenException, __BaseException>) {
    super({
      name: "ExpiredNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredNextTokenException.prototype);
  }
}

/**
 * <p>Represents the input for <a>GetRecords</a>.</p>
 * @public
 */
export interface GetRecordsInput {
  /**
   * <p>The position in the shard from which you want to start sequentially reading data
   *             records. A shard iterator specifies this position using the sequence number of a data
   *             record in the shard.</p>
   * @public
   */
  ShardIterator: string | undefined;

  /**
   * <p>The maximum number of records to return. Specify a value of up to 10,000. If you
   *             specify a value that is greater than 10,000, <a>GetRecords</a> throws
   *                 <code>InvalidArgumentException</code>. The default value is 10,000.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>The unit of data of the Kinesis data stream, which is composed of a sequence number, a
 *             partition key, and a data blob.</p>
 * @public
 */
export interface _Record {
  /**
   * <p>The unique identifier of the record within its shard.</p>
   * @public
   */
  SequenceNumber: string | undefined;

  /**
   * <p>The approximate time that the record was inserted into the stream.</p>
   * @public
   */
  ApproximateArrivalTimestamp?: Date | undefined;

  /**
   * <p>The data blob. The data in the blob is both opaque and immutable to Kinesis Data
   *             Streams, which does not inspect, interpret, or change the data in the blob in any way.
   *             When the data blob (the payload before base64-encoding) is added to the partition key
   *             size, the total size must not exceed the maximum record size (1 MiB).</p>
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * <p>Identifies which shard in the stream the data record is assigned to.</p>
   * @public
   */
  PartitionKey: string | undefined;

  /**
   * <p>The encryption type used on the record. This parameter can be one of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Do not encrypt the records in the stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KMS</code>: Use server-side encryption on the records in the stream
   *                     using a customer-managed Amazon Web Services KMS key.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;
}

/**
 * <p>Represents the output for <a>GetRecords</a>.</p>
 * @public
 */
export interface GetRecordsOutput {
  /**
   * <p>The data records retrieved from the shard.</p>
   * @public
   */
  Records: _Record[] | undefined;

  /**
   * <p>The next position in the shard from which to start sequentially reading data records.
   *             If set to <code>null</code>, the shard has been closed and the requested iterator does
   *             not return any more data. </p>
   * @public
   */
  NextShardIterator?: string | undefined;

  /**
   * <p>The number of milliseconds the <a>GetRecords</a> response is from the tip
   *             of the stream, indicating how far behind current time the consumer is. A value of zero
   *             indicates that record processing is caught up, and there are no new records to process
   *             at this moment.</p>
   * @public
   */
  MillisBehindLatest?: number | undefined;

  /**
   * <p>The list of the current shard's child shards, returned in the <code>GetRecords</code>
   *             API's response only when the end of the current shard is reached.</p>
   * @public
   */
  ChildShards?: ChildShard[] | undefined;
}

/**
 * <p>The processing of the request failed because of an unknown error, exception, or
 *             failure.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 * @public
 */
export class KMSAccessDeniedException extends __BaseException {
  readonly name: "KMSAccessDeniedException" = "KMSAccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSAccessDeniedException, __BaseException>) {
    super({
      name: "KMSAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified customer master key (CMK) isn't
 *             enabled.</p>
 * @public
 */
export class KMSDisabledException extends __BaseException {
  readonly name: "KMSDisabledException" = "KMSDisabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSDisabledException, __BaseException>) {
    super({
      name: "KMSDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSDisabledException.prototype);
  }
}

/**
 * <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *                 Customer Master Key</a> in the <i>Amazon Web Services Key Management
 *                 Service Developer Guide</i>.</p>
 * @public
 */
export class KMSInvalidStateException extends __BaseException {
  readonly name: "KMSInvalidStateException" = "KMSInvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidStateException, __BaseException>) {
    super({
      name: "KMSInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 * @public
 */
export class KMSNotFoundException extends __BaseException {
  readonly name: "KMSNotFoundException" = "KMSNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSNotFoundException, __BaseException>) {
    super({
      name: "KMSNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSNotFoundException.prototype);
  }
}

/**
 * <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 * @public
 */
export class KMSOptInRequired extends __BaseException {
  readonly name: "KMSOptInRequired" = "KMSOptInRequired";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSOptInRequired, __BaseException>) {
    super({
      name: "KMSOptInRequired",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSOptInRequired.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Amazon Web Services Key Management Service Developer
 *             Guide</i>.</p>
 * @public
 */
export class KMSThrottlingException extends __BaseException {
  readonly name: "KMSThrottlingException" = "KMSThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSThrottlingException, __BaseException>) {
    super({
      name: "KMSThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSThrottlingException.prototype);
  }
}

/**
 * <p>The request rate for the stream is too high, or the requested data is too large for
 *             the available throughput. Reduce the frequency or size of your requests. For more
 *             information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the
 *                 <i>Amazon Kinesis Data Streams Developer Guide</i>, and <a href="https://docs.aws.amazon.com/general/latest/gr/api-retries.html">Error Retries and
 *                 Exponential Backoff in Amazon Web Services</a> in the <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  readonly name: "ProvisionedThroughputExceededException" = "ProvisionedThroughputExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProvisionedThroughputExceededException, __BaseException>) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
  }
}

/**
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the data stream or consumer.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * <p>Details of the resource policy. This is formatted as a JSON string.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ShardIteratorType = {
  AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER",
  AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER",
  AT_TIMESTAMP: "AT_TIMESTAMP",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type ShardIteratorType = (typeof ShardIteratorType)[keyof typeof ShardIteratorType];

/**
 * <p>Represents the input for <code>GetShardIterator</code>.</p>
 * @public
 */
export interface GetShardIteratorInput {
  /**
   * <p>The name of the Amazon Kinesis data stream.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The shard ID of the Kinesis Data Streams shard to get the iterator for.</p>
   * @public
   */
  ShardId: string | undefined;

  /**
   * <p>Determines how the shard iterator is used to start reading data records from the
   *             shard.</p>
   *          <p>The following are the valid Amazon Kinesis shard iterator types:</p>
   *          <ul>
   *             <li>
   *                <p>AT_SEQUENCE_NUMBER - Start reading from the position denoted by a specific
   *                     sequence number, provided in the value
   *                     <code>StartingSequenceNumber</code>.</p>
   *             </li>
   *             <li>
   *                <p>AFTER_SEQUENCE_NUMBER - Start reading right after the position denoted by a
   *                     specific sequence number, provided in the value
   *                         <code>StartingSequenceNumber</code>.</p>
   *             </li>
   *             <li>
   *                <p>AT_TIMESTAMP - Start reading from the position denoted by a specific time
   *                     stamp, provided in the value <code>Timestamp</code>.</p>
   *             </li>
   *             <li>
   *                <p>TRIM_HORIZON - Start reading at the last untrimmed record in the shard in the
   *                     system, which is the oldest data record in the shard.</p>
   *             </li>
   *             <li>
   *                <p>LATEST - Start reading just after the most recent record in the shard, so that
   *                     you always read the most recent data in the shard.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ShardIteratorType: ShardIteratorType | undefined;

  /**
   * <p>The sequence number of the data record in the shard from which to start reading. Used
   *             with shard iterator type AT_SEQUENCE_NUMBER and AFTER_SEQUENCE_NUMBER.</p>
   * @public
   */
  StartingSequenceNumber?: string | undefined;

  /**
   * <p>The time stamp of the data record from which to start reading. Used with shard
   *             iterator type AT_TIMESTAMP. A time stamp is the Unix epoch date with precision in
   *             milliseconds. For example, <code>2016-04-04T19:58:46.480-00:00</code> or
   *                 <code>1459799926.480</code>. If a record with this exact time stamp does not exist,
   *             the iterator returned is for the next (later) record. If the time stamp is older than
   *             the current trim horizon, the iterator returned is for the oldest untrimmed data record
   *             (TRIM_HORIZON).</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the output for <code>GetShardIterator</code>.</p>
 * @public
 */
export interface GetShardIteratorOutput {
  /**
   * <p>The position in the shard from which to start reading data records sequentially. A
   *             shard iterator specifies this position using the sequence number of a data record in a
   *             shard.</p>
   * @public
   */
  ShardIterator?: string | undefined;
}

/**
 * <p>Represents the input for <a>IncreaseStreamRetentionPeriod</a>.</p>
 * @public
 */
export interface IncreaseStreamRetentionPeriodInput {
  /**
   * <p>The name of the stream to modify.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The new retention period of the stream, in hours. Must be more than the current
   *             retention period.</p>
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ShardFilterType = {
  AFTER_SHARD_ID: "AFTER_SHARD_ID",
  AT_LATEST: "AT_LATEST",
  AT_TIMESTAMP: "AT_TIMESTAMP",
  AT_TRIM_HORIZON: "AT_TRIM_HORIZON",
  FROM_TIMESTAMP: "FROM_TIMESTAMP",
  FROM_TRIM_HORIZON: "FROM_TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type ShardFilterType = (typeof ShardFilterType)[keyof typeof ShardFilterType];

/**
 * <p>The request parameter used to filter out the response of the <code>ListShards</code>
 *             API.</p>
 * @public
 */
export interface ShardFilter {
  /**
   * <p>The shard type specified in the <code>ShardFilter</code> parameter. This is a required
   *             property of the <code>ShardFilter</code> parameter.</p>
   *          <p>You can specify the following valid values: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AFTER_SHARD_ID</code> - the response includes all the shards, starting
   *                     with the shard whose ID immediately follows the <code>ShardId</code> that you
   *                     provided. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AT_TRIM_HORIZON</code> - the response includes all the shards that were
   *                     open at <code>TRIM_HORIZON</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FROM_TRIM_HORIZON</code> - (default), the response includes all the
   *                     shards within the retention period of the data stream (trim to tip).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AT_LATEST</code> - the response includes only the currently open shards
   *                     of the data stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AT_TIMESTAMP</code> - the response includes all shards whose start
   *                     timestamp is less than or equal to the given timestamp and end timestamp is
   *                     greater than or equal to the given timestamp or still open. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FROM_TIMESTAMP</code> - the response incldues all closed shards whose
   *                     end timestamp is greater than or equal to the given timestamp and also all open
   *                     shards. Corrected to <code>TRIM_HORIZON</code> of the data stream if
   *                         <code>FROM_TIMESTAMP</code> is less than the <code>TRIM_HORIZON</code>
   *                     value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: ShardFilterType | undefined;

  /**
   * <p>The exclusive start <code>shardID</code> speified in the <code>ShardFilter</code>
   *             parameter. This property can only be used if the <code>AFTER_SHARD_ID</code> shard type
   *             is specified.</p>
   * @public
   */
  ShardId?: string | undefined;

  /**
   * <p>The timestamps specified in the <code>ShardFilter</code> parameter. A timestamp is a
   *             Unix epoch date with precision in milliseconds. For example,
   *             2016-04-04T19:58:46.480-00:00 or 1459799926.480. This property can only be used if
   *                 <code>FROM_TIMESTAMP</code> or <code>AT_TIMESTAMP</code> shard types are
   *             specified.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListShardsInput {
  /**
   * <p>The name of the data stream whose shards you want to list. </p>
   *          <p>You cannot specify this parameter if you specify the <code>NextToken</code>
   *             parameter.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>When the number of shards in the data stream is greater than the default value for the
   *                 <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *                 <code>MaxResults</code> that is less than the number of shards in the data stream,
   *             the response includes a pagination token named <code>NextToken</code>. You can specify
   *             this <code>NextToken</code> value in a subsequent call to <code>ListShards</code> to
   *             list the next set of shards.</p>
   *          <p>Don't specify <code>StreamName</code> or <code>StreamCreationTimestamp</code> if you
   *             specify <code>NextToken</code> because the latter unambiguously identifies the
   *             stream.</p>
   *          <p>You can optionally specify a value for the <code>MaxResults</code> parameter when you
   *             specify <code>NextToken</code>. If you specify a <code>MaxResults</code> value that is
   *             less than the number of shards that the operation returns if you don't specify
   *                 <code>MaxResults</code>, the response will contain a new <code>NextToken</code>
   *             value. You can use the new <code>NextToken</code> value in a subsequent call to the
   *                 <code>ListShards</code> operation.</p>
   *          <important>
   *             <p>Tokens expire after 300 seconds. When you obtain a value for
   *                     <code>NextToken</code> in the response to a call to <code>ListShards</code>, you
   *                 have 300 seconds to use that value. If you specify an expired token in a call to
   *                     <code>ListShards</code>, you get <code>ExpiredNextTokenException</code>.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specify this parameter to indicate that you want to list the shards starting with the
   *             shard whose ID immediately follows <code>ExclusiveStartShardId</code>.</p>
   *          <p>If you don't specify this parameter, the default behavior is for
   *                 <code>ListShards</code> to list the shards starting with the first one in the
   *             stream.</p>
   *          <p>You cannot specify this parameter if you specify <code>NextToken</code>.</p>
   * @public
   */
  ExclusiveStartShardId?: string | undefined;

  /**
   * <p>The maximum number of shards to return in a single call to <code>ListShards</code>.
   *             The maximum number of shards to return in a single call. The default value is 1000. If
   *             you specify a value greater than 1000, at most 1000 results are returned. </p>
   *          <p>When the number of shards to be listed is greater than the value of
   *                 <code>MaxResults</code>, the response contains a <code>NextToken</code> value that
   *             you can use in a subsequent call to <code>ListShards</code> to list the next set of
   *             shards.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify this input parameter to distinguish data streams that have the same name. For
   *             example, if you create a data stream and then delete it, and you later create another
   *             data stream with the same name, you can use this input parameter to specify which of the
   *             two streams you want to list the shards for.</p>
   *          <p>You cannot specify this parameter if you specify the <code>NextToken</code>
   *             parameter.</p>
   * @public
   */
  StreamCreationTimestamp?: Date | undefined;

  /**
   * <p>Enables you to filter out the response of the <code>ListShards</code> API. You can
   *             only specify one filter at a time. </p>
   *          <p>If you use the <code>ShardFilter</code> parameter when invoking the ListShards API,
   *             the <code>Type</code> is the required property and must be specified. If you specify the
   *                 <code>AT_TRIM_HORIZON</code>, <code>FROM_TRIM_HORIZON</code>, or
   *                 <code>AT_LATEST</code> types, you do not need to specify either the
   *                 <code>ShardId</code> or the <code>Timestamp</code> optional properties. </p>
   *          <p>If you specify the <code>AFTER_SHARD_ID</code> type, you must also provide the value
   *             for the optional <code>ShardId</code> property. The <code>ShardId</code> property is
   *             identical in fuctionality to the <code>ExclusiveStartShardId</code> parameter of the
   *                 <code>ListShards</code> API. When <code>ShardId</code> property is specified, the
   *             response includes the shards starting with the shard whose ID immediately follows the
   *                 <code>ShardId</code> that you provided. </p>
   *          <p>If you specify the <code>AT_TIMESTAMP</code> or <code>FROM_TIMESTAMP_ID</code> type,
   *             you must also provide the value for the optional <code>Timestamp</code> property. If you
   *             specify the AT_TIMESTAMP type, then all shards that were open at the provided timestamp
   *             are returned. If you specify the FROM_TIMESTAMP type, then all shards starting from the
   *             provided timestamp to TIP are returned. </p>
   * @public
   */
  ShardFilter?: ShardFilter | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface ListShardsOutput {
  /**
   * <p>An array of JSON objects. Each object represents one shard and specifies the IDs of
   *             the shard, the shard's parent, and the shard that's adjacent to the shard's parent. Each
   *             object also contains the starting and ending hash keys and the starting and ending
   *             sequence numbers for the shard.</p>
   * @public
   */
  Shards?: Shard[] | undefined;

  /**
   * <p>When the number of shards in the data stream is greater than the default value for the
   *                 <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *                 <code>MaxResults</code> that is less than the number of shards in the data stream,
   *             the response includes a pagination token named <code>NextToken</code>. You can specify
   *             this <code>NextToken</code> value in a subsequent call to <code>ListShards</code> to
   *             list the next set of shards. For more information about the use of this pagination token
   *             when calling the <code>ListShards</code> operation, see <a>ListShardsInput$NextToken</a>.</p>
   *          <important>
   *             <p>Tokens expire after 300 seconds. When you obtain a value for
   *                     <code>NextToken</code> in the response to a call to <code>ListShards</code>, you
   *                 have 300 seconds to use that value. If you specify an expired token in a call to
   *                     <code>ListShards</code>, you get <code>ExpiredNextTokenException</code>.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamConsumersInput {
  /**
   * <p>The ARN of the Kinesis data stream for which you want to list the registered
   *             consumers. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Resource Names (ARNs) and Amazon Web Services Service
   *             Namespaces</a>.</p>
   * @public
   */
  StreamARN: string | undefined;

  /**
   * <p>When the number of consumers that are registered with the data stream is greater than
   *             the default value for the <code>MaxResults</code> parameter, or if you explicitly
   *             specify a value for <code>MaxResults</code> that is less than the number of consumers
   *             that are registered with the data stream, the response includes a pagination token named
   *                 <code>NextToken</code>. You can specify this <code>NextToken</code> value in a
   *             subsequent call to <code>ListStreamConsumers</code> to list the next set of registered
   *             consumers.</p>
   *          <p>Don't specify <code>StreamName</code> or <code>StreamCreationTimestamp</code> if you
   *             specify <code>NextToken</code> because the latter unambiguously identifies the
   *             stream.</p>
   *          <p>You can optionally specify a value for the <code>MaxResults</code> parameter when you
   *             specify <code>NextToken</code>. If you specify a <code>MaxResults</code> value that is
   *             less than the number of consumers that the operation returns if you don't specify
   *                 <code>MaxResults</code>, the response will contain a new <code>NextToken</code>
   *             value. You can use the new <code>NextToken</code> value in a subsequent call to the
   *                 <code>ListStreamConsumers</code> operation to list the next set of consumers.</p>
   *          <important>
   *             <p>Tokens expire after 300 seconds. When you obtain a value for
   *                     <code>NextToken</code> in the response to a call to
   *                     <code>ListStreamConsumers</code>, you have 300 seconds to use that value. If you
   *                 specify an expired token in a call to <code>ListStreamConsumers</code>, you get
   *                     <code>ExpiredNextTokenException</code>.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of consumers that you want a single call of
   *                 <code>ListStreamConsumers</code> to return. The default value is 100. If you specify
   *             a value greater than 100, at most 100 results are returned. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specify this input parameter to distinguish data streams that have the same name. For
   *             example, if you create a data stream and then delete it, and you later create another
   *             data stream with the same name, you can use this input parameter to specify which of the
   *             two streams you want to list the consumers for. </p>
   *          <p>You can't specify this parameter if you specify the NextToken parameter. </p>
   * @public
   */
  StreamCreationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListStreamConsumersOutput {
  /**
   * <p>An array of JSON objects. Each object represents one registered consumer.</p>
   * @public
   */
  Consumers?: Consumer[] | undefined;

  /**
   * <p>When the number of consumers that are registered with the data stream is greater than
   *             the default value for the <code>MaxResults</code> parameter, or if you explicitly
   *             specify a value for <code>MaxResults</code> that is less than the number of registered
   *             consumers, the response includes a pagination token named <code>NextToken</code>. You
   *             can specify this <code>NextToken</code> value in a subsequent call to
   *                 <code>ListStreamConsumers</code> to list the next set of registered consumers. For
   *             more information about the use of this pagination token when calling the
   *                 <code>ListStreamConsumers</code> operation, see <a>ListStreamConsumersInput$NextToken</a>.</p>
   *          <important>
   *             <p>Tokens expire after 300 seconds. When you obtain a value for
   *                     <code>NextToken</code> in the response to a call to
   *                     <code>ListStreamConsumers</code>, you have 300 seconds to use that value. If you
   *                 specify an expired token in a call to <code>ListStreamConsumers</code>, you get
   *                     <code>ExpiredNextTokenException</code>.</p>
   *          </important>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the input for <code>ListStreams</code>.</p>
 * @public
 */
export interface ListStreamsInput {
  /**
   * <p>The maximum number of streams to list. The default value is 100. If you specify a
   *             value greater than 100, at most 100 results are returned.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The name of the stream to start the list with.</p>
   * @public
   */
  ExclusiveStartStreamName?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The summary of a stream.</p>
 * @public
 */
export interface StreamSummary {
  /**
   * <p>The name of a stream.</p>
   * @public
   */
  StreamName: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN: string | undefined;

  /**
   * <p>The status of the stream.</p>
   * @public
   */
  StreamStatus: StreamStatus | undefined;

  /**
   * <p> Specifies the capacity mode to which you want to set your data stream. Currently, in
   *             Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. </p>
   * @public
   */
  StreamModeDetails?: StreamModeDetails | undefined;

  /**
   * <p>The timestamp at which the stream was created.</p>
   * @public
   */
  StreamCreationTimestamp?: Date | undefined;
}

/**
 * <p>Represents the output for <code>ListStreams</code>.</p>
 * @public
 */
export interface ListStreamsOutput {
  /**
   * <p>The names of the streams that are associated with the Amazon Web Services account
   *             making the <code>ListStreams</code> request.</p>
   * @public
   */
  StreamNames: string[] | undefined;

  /**
   * <p>If set to <code>true</code>, there are more streams available to list.</p>
   * @public
   */
  HasMoreStreams: boolean | undefined;

  /**
   * <p></p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  StreamSummaries?: StreamSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis resource for which to list tags.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>Metadata assigned to the stream or consumer, consisting of a key-value pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A unique identifier for the tag. Maximum length: 128 characters. Valid characters:
   *             Unicode letters, digits, white space, _ . / = + - % @</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>An optional string, typically used to describe or define the tag. Maximum length: 256
   *             characters. Valid characters: Unicode letters, digits, white space, _ . / = + - %
   *             @</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>An array of tags associated with the specified Kinesis resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Represents the input for <code>ListTagsForStream</code>.</p>
 * @public
 */
export interface ListTagsForStreamInput {
  /**
   * <p>The name of the stream.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The key to use as the starting point for the list of tags. If this parameter is set,
   *                 <code>ListTagsForStream</code> gets all tags that occur after
   *                 <code>ExclusiveStartTagKey</code>. </p>
   * @public
   */
  ExclusiveStartTagKey?: string | undefined;

  /**
   * <p>The number of tags to return. If this number is less than the total number of tags
   *             associated with the stream, <code>HasMoreTags</code> is set to <code>true</code>. To
   *             list additional tags, set <code>ExclusiveStartTagKey</code> to the last key in the
   *             response.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the output for <code>ListTagsForStream</code>.</p>
 * @public
 */
export interface ListTagsForStreamOutput {
  /**
   * <p>A list of tags associated with <code>StreamName</code>, starting with the first tag
   *             after <code>ExclusiveStartTagKey</code> and up to the specified <code>Limit</code>.
   *         </p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>If set to <code>true</code>, more tags are available. To request additional tags, set
   *                 <code>ExclusiveStartTagKey</code> to the key of the last tag returned.</p>
   * @public
   */
  HasMoreTags: boolean | undefined;
}

/**
 * <p>Represents the input for <code>MergeShards</code>.</p>
 * @public
 */
export interface MergeShardsInput {
  /**
   * <p>The name of the stream for the merge.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The shard ID of the shard to combine with the adjacent shard for the merge.</p>
   * @public
   */
  ShardToMerge: string | undefined;

  /**
   * <p>The shard ID of the adjacent shard for the merge.</p>
   * @public
   */
  AdjacentShardToMerge: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the input for <code>PutRecord</code>.</p>
 * @public
 */
export interface PutRecordInput {
  /**
   * <p>The name of the stream to put the data record into.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The data blob to put into the record, which is base64-encoded when the blob is
   *             serialized. When the data blob (the payload before base64-encoding) is added to the
   *             partition key size, the total size must not exceed the maximum record size (1
   *             MiB).</p>
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * <p>Determines which shard in the stream the data record is assigned to. Partition keys
   *             are Unicode strings with a maximum length limit of 256 characters for each key. Amazon
   *             Kinesis Data Streams uses the partition key as input to a hash function that maps the
   *             partition key and associated data to a specific shard. Specifically, an MD5 hash
   *             function is used to map partition keys to 128-bit integer values and to map associated
   *             data records to shards. As a result of this hashing mechanism, all data records with the
   *             same partition key map to the same shard within the stream.</p>
   * @public
   */
  PartitionKey: string | undefined;

  /**
   * <p>The hash value used to explicitly determine the shard the data record is assigned to
   *             by overriding the partition key hash.</p>
   * @public
   */
  ExplicitHashKey?: string | undefined;

  /**
   * <p>Guarantees strictly increasing sequence numbers, for puts from the same client and to
   *             the same partition key. Usage: set the <code>SequenceNumberForOrdering</code> of record
   *                 <i>n</i> to the sequence number of record <i>n-1</i> (as
   *             returned in the result when putting record <i>n-1</i>). If this parameter
   *             is not set, records are coarsely ordered based on arrival time.</p>
   * @public
   */
  SequenceNumberForOrdering?: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the output for <code>PutRecord</code>.</p>
 * @public
 */
export interface PutRecordOutput {
  /**
   * <p>The shard ID of the shard where the data record was placed.</p>
   * @public
   */
  ShardId: string | undefined;

  /**
   * <p>The sequence number identifier that was assigned to the put data record. The sequence
   *             number for the record is unique across all records in the stream. A sequence number is
   *             the identifier associated with every record put into the stream.</p>
   * @public
   */
  SequenceNumber: string | undefined;

  /**
   * <p>The encryption type to use on the record. This parameter can be one of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Do not encrypt the records in the stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KMS</code>: Use server-side encryption on the records in the stream
   *                     using a customer-managed Amazon Web Services KMS key.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;
}

/**
 * <p>Represents the output for <code>PutRecords</code>.</p>
 * @public
 */
export interface PutRecordsRequestEntry {
  /**
   * <p>The data blob to put into the record, which is base64-encoded when the blob is
   *             serialized. When the data blob (the payload before base64-encoding) is added to the
   *             partition key size, the total size must not exceed the maximum record size (1
   *             MiB).</p>
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * <p>The hash value used to determine explicitly the shard that the data record is assigned
   *             to by overriding the partition key hash.</p>
   * @public
   */
  ExplicitHashKey?: string | undefined;

  /**
   * <p>Determines which shard in the stream the data record is assigned to. Partition keys
   *             are Unicode strings with a maximum length limit of 256 characters for each key. Amazon
   *             Kinesis Data Streams uses the partition key as input to a hash function that maps the
   *             partition key and associated data to a specific shard. Specifically, an MD5 hash
   *             function is used to map partition keys to 128-bit integer values and to map associated
   *             data records to shards. As a result of this hashing mechanism, all data records with the
   *             same partition key map to the same shard within the stream.</p>
   * @public
   */
  PartitionKey: string | undefined;
}

/**
 * <p>A <code>PutRecords</code> request.</p>
 * @public
 */
export interface PutRecordsInput {
  /**
   * <p>The records associated with the request.</p>
   * @public
   */
  Records: PutRecordsRequestEntry[] | undefined;

  /**
   * <p>The stream name associated with the request.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the result of an individual record from a <code>PutRecords</code> request.
 *             A record that is successfully added to a stream includes <code>SequenceNumber</code> and
 *                 <code>ShardId</code> in the result. A record that fails to be added to the stream
 *             includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.</p>
 * @public
 */
export interface PutRecordsResultEntry {
  /**
   * <p>The sequence number for an individual record result.</p>
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * <p>The shard ID for an individual record result.</p>
   * @public
   */
  ShardId?: string | undefined;

  /**
   * <p>The error code for an individual record result. <code>ErrorCodes</code> can be either
   *                 <code>ProvisionedThroughputExceededException</code> or
   *             <code>InternalFailure</code>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message for an individual record result. An <code>ErrorCode</code> value of
   *                 <code>ProvisionedThroughputExceededException</code> has an error message that
   *             includes the account ID, stream name, and shard ID. An <code>ErrorCode</code> value of
   *                 <code>InternalFailure</code> has the error message <code>"Internal Service
   *                 Failure"</code>.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>
 *             <code>PutRecords</code> results.</p>
 * @public
 */
export interface PutRecordsOutput {
  /**
   * <p>The number of unsuccessfully processed records in a <code>PutRecords</code>
   *             request.</p>
   * @public
   */
  FailedRecordCount?: number | undefined;

  /**
   * <p>An array of successfully and unsuccessfully processed record results. A record that is
   *             successfully added to a stream includes <code>SequenceNumber</code> and
   *                 <code>ShardId</code> in the result. A record that fails to be added to a stream
   *             includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.</p>
   * @public
   */
  Records: PutRecordsResultEntry[] | undefined;

  /**
   * <p>The encryption type used on the records. This parameter can be one of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Do not encrypt the records.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KMS</code>: Use server-side encryption on the records using a
   *                     customer-managed Amazon Web Services KMS key.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionType?: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the data stream or consumer.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>Details of the resource policy. It must include the identity of the principal and the actions allowed on this resource. This is formatted as a JSON string.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface RegisterStreamConsumerInput {
  /**
   * <p>The ARN of the Kinesis data stream that you want to register the consumer with. For
   *             more info, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon Resource Names (ARNs) and Amazon Web Services Service
   *             Namespaces</a>.</p>
   * @public
   */
  StreamARN: string | undefined;

  /**
   * <p>For a given Kinesis data stream, each consumer must have a unique name. However,
   *             consumer names don't have to be unique across data streams.</p>
   * @public
   */
  ConsumerName: string | undefined;

  /**
   * <p>A set of up to 50 key-value pairs. A tag consists of a required key and an optional value.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterStreamConsumerOutput {
  /**
   * <p>An object that represents the details of the consumer you registered. When you
   *             register a consumer, it gets an ARN that is generated by Kinesis Data Streams.</p>
   * @public
   */
  Consumer: Consumer | undefined;
}

/**
 * <p>Represents the input for <code>RemoveTagsFromStream</code>.</p>
 * @public
 */
export interface RemoveTagsFromStreamInput {
  /**
   * <p>The name of the stream.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>A list of tag keys. Each corresponding tag is removed from the stream.</p>
   * @public
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>Represents the input for <code>SplitShard</code>.</p>
 * @public
 */
export interface SplitShardInput {
  /**
   * <p>The name of the stream for the shard split.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The shard ID of the shard to split.</p>
   * @public
   */
  ShardToSplit: string | undefined;

  /**
   * <p>A hash key value for the starting hash key of one of the child shards created by the
   *             split. The hash key range for a given shard constitutes a set of ordered contiguous
   *             positive integers. The value for <code>NewStartingHashKey</code> must be in the range of
   *             hash keys being mapped into the shard. The <code>NewStartingHashKey</code> hash key
   *             value and all higher hash key values in hash key range are distributed to one of the
   *             child shards. All the lower hash key values in the range are distributed to the other
   *             child shard.</p>
   * @public
   */
  NewStartingHashKey: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface StartStreamEncryptionInput {
  /**
   * <p>The name of the stream for which to start encrypting records.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The encryption type to use. The only valid value is <code>KMS</code>.</p>
   * @public
   */
  EncryptionType: EncryptionType | undefined;

  /**
   * <p>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption.
   *             This value can be a globally unique identifier, a fully specified Amazon Resource Name
   *             (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also
   *             use a master key owned by Kinesis Data Streams by specifying the alias
   *                 <code>aws/kinesis</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Key ARN example:
   *                         <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN example:
   *                         <code>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Globally unique key ID example:
   *                         <code>12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name example: <code>alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Master key owned by Kinesis Data Streams:
   *                     <code>alias/aws/kinesis</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyId: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface StopStreamEncryptionInput {
  /**
   * <p>The name of the stream on which to stop encrypting records.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The encryption type. The only valid value is <code>KMS</code>.</p>
   * @public
   */
  EncryptionType: EncryptionType | undefined;

  /**
   * <p>The GUID for the customer-managed Amazon Web Services KMS key to use for encryption.
   *             This value can be a globally unique identifier, a fully specified Amazon Resource Name
   *             (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also
   *             use a master key owned by Kinesis Data Streams by specifying the alias
   *                 <code>aws/kinesis</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Key ARN example:
   *                         <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN example:
   *                         <code>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Globally unique key ID example:
   *                         <code>12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name example: <code>alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Master key owned by Kinesis Data Streams:
   *                     <code>alias/aws/kinesis</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  KeyId: string | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * <p>The starting position in the data stream from which to start streaming.</p>
 * @public
 */
export interface StartingPosition {
  /**
   * <p>You can set the starting position to one of the following values:</p>
   *          <p>
   *             <code>AT_SEQUENCE_NUMBER</code>: Start streaming from the position denoted by the
   *             sequence number specified in the <code>SequenceNumber</code> field.</p>
   *          <p>
   *             <code>AFTER_SEQUENCE_NUMBER</code>: Start streaming right after the position denoted
   *             by the sequence number specified in the <code>SequenceNumber</code> field.</p>
   *          <p>
   *             <code>AT_TIMESTAMP</code>: Start streaming from the position denoted by the time stamp
   *             specified in the <code>Timestamp</code> field.</p>
   *          <p>
   *             <code>TRIM_HORIZON</code>: Start streaming at the last untrimmed record in the shard,
   *             which is the oldest data record in the shard.</p>
   *          <p>
   *             <code>LATEST</code>: Start streaming just after the most recent record in the shard,
   *             so that you always read the most recent data in the shard.</p>
   * @public
   */
  Type: ShardIteratorType | undefined;

  /**
   * <p>The sequence number of the data record in the shard from which to start streaming. To
   *             specify a sequence number, set <code>StartingPosition</code> to
   *                 <code>AT_SEQUENCE_NUMBER</code> or <code>AFTER_SEQUENCE_NUMBER</code>.</p>
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * <p>The time stamp of the data record from which to start reading. To specify a time
   *             stamp, set <code>StartingPosition</code> to <code>Type AT_TIMESTAMP</code>. A time stamp
   *             is the Unix epoch date with precision in milliseconds. For example,
   *                 <code>2016-04-04T19:58:46.480-00:00</code> or <code>1459799926.480</code>. If a
   *             record with this exact time stamp does not exist, records will be streamed from the next
   *             (later) record. If the time stamp is older than the current trim horizon, records will
   *             be streamed from the oldest untrimmed data record (<code>TRIM_HORIZON</code>).</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface SubscribeToShardInput {
  /**
   * <p>For this parameter, use the value you obtained when you called <a>RegisterStreamConsumer</a>.</p>
   * @public
   */
  ConsumerARN: string | undefined;

  /**
   * <p>The ID of the shard you want to subscribe to. To see a list of all the shards for a
   *             given stream, use <a>ListShards</a>.</p>
   * @public
   */
  ShardId: string | undefined;

  /**
   * <p>The starting position in the data stream from which to start streaming.</p>
   * @public
   */
  StartingPosition: StartingPosition | undefined;
}

/**
 * <p>After you call <a>SubscribeToShard</a>, Kinesis Data Streams sends events
 *             of this type over an HTTP/2 connection to your consumer.</p>
 * @public
 */
export interface SubscribeToShardEvent {
  /**
   * <p></p>
   * @public
   */
  Records: _Record[] | undefined;

  /**
   * <p>Use this as <code>SequenceNumber</code> in the next call to <a>SubscribeToShard</a>, with <code>StartingPosition</code> set to
   *                 <code>AT_SEQUENCE_NUMBER</code> or <code>AFTER_SEQUENCE_NUMBER</code>. Use
   *                 <code>ContinuationSequenceNumber</code> for checkpointing because it captures your
   *             shard progress even when no data is written to the shard.</p>
   * @public
   */
  ContinuationSequenceNumber: string | undefined;

  /**
   * <p>The number of milliseconds the read records are from the tip of the stream, indicating
   *             how far behind current time the consumer is. A value of zero indicates that record
   *             processing is caught up, and there are no new records to process at this moment.</p>
   * @public
   */
  MillisBehindLatest: number | undefined;

  /**
   * <p>The list of the child shards of the current shard, returned only at the end of the
   *             current shard.</p>
   * @public
   */
  ChildShards?: ChildShard[] | undefined;
}

/**
 * <p>This is a tagged union for all of the types of events an enhanced fan-out consumer can
 *             receive over HTTP/2 after a call to <a>SubscribeToShard</a>.</p>
 * @public
 */
export type SubscribeToShardEventStream =
  | SubscribeToShardEventStream.InternalFailureExceptionMember
  | SubscribeToShardEventStream.KMSAccessDeniedExceptionMember
  | SubscribeToShardEventStream.KMSDisabledExceptionMember
  | SubscribeToShardEventStream.KMSInvalidStateExceptionMember
  | SubscribeToShardEventStream.KMSNotFoundExceptionMember
  | SubscribeToShardEventStream.KMSOptInRequiredMember
  | SubscribeToShardEventStream.KMSThrottlingExceptionMember
  | SubscribeToShardEventStream.ResourceInUseExceptionMember
  | SubscribeToShardEventStream.ResourceNotFoundExceptionMember
  | SubscribeToShardEventStream.SubscribeToShardEventMember
  | SubscribeToShardEventStream.$UnknownMember;

/**
 * @public
 */
export namespace SubscribeToShardEventStream {
  /**
   * <p>After you call <a>SubscribeToShard</a>, Kinesis Data Streams sends events
   *             of this type to your consumer. For an example of how to handle these events, see <a href="/streams/latest/dev/building-enhanced-consumers-api.html">Enhanced Fan-Out
   *                 Using the Kinesis Data Streams API</a>.</p>
   * @public
   */
  export interface SubscribeToShardEventMember {
    SubscribeToShardEvent: SubscribeToShardEvent;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The requested resource could not be found. The stream might not be specified
   *             correctly.</p>
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException: ResourceNotFoundException;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The resource is not available for this operation. For successful operation, the
   *             resource must be in the <code>ACTIVE</code> state.</p>
   * @public
   */
  export interface ResourceInUseExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException: ResourceInUseException;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request was rejected because the specified customer master key (CMK) isn't
   *             enabled.</p>
   * @public
   */
  export interface KMSDisabledExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException: KMSDisabledException;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request was rejected because the state of the specified resource isn't valid for
   *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
   *                 Customer Master Key</a> in the <i>Amazon Web Services Key Management
   *                 Service Developer Guide</i>.</p>
   * @public
   */
  export interface KMSInvalidStateExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException: KMSInvalidStateException;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The ciphertext references a key that doesn't exist or that you don't have access
   *             to.</p>
   * @public
   */
  export interface KMSAccessDeniedExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException: KMSAccessDeniedException;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request was rejected because the specified entity or resource can't be
   *             found.</p>
   * @public
   */
  export interface KMSNotFoundExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException: KMSNotFoundException;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
   * @public
   */
  export interface KMSOptInRequiredMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired: KMSOptInRequired;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request was denied due to request throttling. For more information about
   *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
   *             the <i>Amazon Web Services Key Management Service Developer
   *             Guide</i>.</p>
   * @public
   */
  export interface KMSThrottlingExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException: KMSThrottlingException;
    InternalFailureException?: never;
    $unknown?: never;
  }

  /**
   * <p>The processing of the request failed because of an unknown error, exception, or
   *             failure.</p>
   * @public
   */
  export interface InternalFailureExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException: InternalFailureException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SubscribeToShardEvent: (value: SubscribeToShardEvent) => T;
    ResourceNotFoundException: (value: ResourceNotFoundException) => T;
    ResourceInUseException: (value: ResourceInUseException) => T;
    KMSDisabledException: (value: KMSDisabledException) => T;
    KMSInvalidStateException: (value: KMSInvalidStateException) => T;
    KMSAccessDeniedException: (value: KMSAccessDeniedException) => T;
    KMSNotFoundException: (value: KMSNotFoundException) => T;
    KMSOptInRequired: (value: KMSOptInRequired) => T;
    KMSThrottlingException: (value: KMSThrottlingException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SubscribeToShardOutput {
  /**
   * <p>The event stream that your consumer can use to read records from the shard.</p>
   * @public
   */
  EventStream: AsyncIterable<SubscribeToShardEventStream> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>An array of tags to be added to the Kinesis resource. A tag consists of a required key and an optional value. You can add up to 50 tags per resource.</p>
   *          <p>Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis resource to which to add tags.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>A list of tag key-value pairs. Existing tags of the resource whose keys are members of this list will be removed from the Kinesis resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis resource from which to remove tags.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MinimumThroughputBillingCommitmentInputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MinimumThroughputBillingCommitmentInputStatus =
  (typeof MinimumThroughputBillingCommitmentInputStatus)[keyof typeof MinimumThroughputBillingCommitmentInputStatus];

/**
 * <p>Represents the request parameters for configuring minimum throughput billing commitment.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Minimum throughput billing commitments provide cost savings on on-demand data streams in exchange for committing to a minimum level of throughput usage.</p>
 *                </li>
 *                <li>
 *                   <p>Commitments have a minimum duration of 24 hours that must be honored before they can be disabled.</p>
 *                </li>
 *                <li>
 *                   <p>If you attempt to disable a commitment before the minimum commitment period ends, the commitment will be scheduled for automatic disable at the earliest allowed end time.</p>
 *                </li>
 *                <li>
 *                   <p>You can cancel a pending disable by enabling the commitment again before the earliest allowed end time.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @public
 */
export interface MinimumThroughputBillingCommitmentInput {
  /**
   * <p>The desired status of the minimum throughput billing commitment.</p>
   * @public
   */
  Status: MinimumThroughputBillingCommitmentInputStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsInput {
  /**
   * <p>Specifies the minimum throughput billing commitment configuration for your account.</p>
   * @public
   */
  MinimumThroughputBillingCommitment: MinimumThroughputBillingCommitmentInput | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsOutput {
  /**
   * <p>The updated configuration of the minimum throughput billing commitment for your account.</p>
   * @public
   */
  MinimumThroughputBillingCommitment?: MinimumThroughputBillingCommitmentOutput | undefined;
}

/**
 * @public
 */
export interface UpdateMaxRecordSizeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the stream for the <code>MaxRecordSize</code> update.</p>
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * <p>The maximum record size of a single record in KiB that you can write to, and read from a stream. Specify a value between 1024 and 10240 KiB (1 to 10 MiB). If you specify a value that is out of this range, <code>UpdateMaxRecordSize</code> sends back an <code>ValidationException</code> message.</p>
   * @public
   */
  MaxRecordSizeInKiB: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ScalingType = {
  UNIFORM_SCALING: "UNIFORM_SCALING",
} as const;

/**
 * @public
 */
export type ScalingType = (typeof ScalingType)[keyof typeof ScalingType];

/**
 * @public
 */
export interface UpdateShardCountInput {
  /**
   * <p>The name of the stream.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The new number of shards. This value has the following default limits. By default, you
   *             cannot do the following: </p>
   *          <ul>
   *             <li>
   *                <p>Set this value to more than double your current shard count for a
   *                     stream.</p>
   *             </li>
   *             <li>
   *                <p>Set this value below half your current shard count for a stream.</p>
   *             </li>
   *             <li>
   *                <p>Set this value to more than 10000 shards in a stream (the default limit for
   *                     shard count per stream is 10000 per account per region), unless you request a
   *                     limit increase.</p>
   *             </li>
   *             <li>
   *                <p>Scale a stream with more than 10000 shards down unless you set this value to
   *                     less than 10000 shards.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetShardCount: number | undefined;

  /**
   * <p>The scaling type. Uniform scaling creates shards of equal size.</p>
   * @public
   */
  ScalingType: ScalingType | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateShardCountOutput {
  /**
   * <p>The name of the stream.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The current number of shards.</p>
   * @public
   */
  CurrentShardCount?: number | undefined;

  /**
   * <p>The updated number of shards.</p>
   * @public
   */
  TargetShardCount?: number | undefined;

  /**
   * <p>The ARN of the stream.</p>
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamModeInput {
  /**
   * <p> Specifies the ARN of the data stream whose capacity mode you want to update. </p>
   * @public
   */
  StreamARN: string | undefined;

  /**
   * <p> Specifies the capacity mode to which you want to set your data stream. Currently, in
   *             Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. </p>
   * @public
   */
  StreamModeDetails: StreamModeDetails | undefined;

  /**
   * <p>The target warm throughput in MB/s that the stream should be scaled to handle. This represents the throughput capacity that will be immediately available for write operations. This field is only valid when the stream mode is being updated to on-demand.</p>
   * @public
   */
  WarmThroughputMiBps?: number | undefined;
}

/**
 * @public
 */
export interface UpdateStreamWarmThroughputInput {
  /**
   * <p>The ARN of the stream to be updated.</p>
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * <p>The name of the stream to be updated.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>The target warm throughput in MB/s that the stream should be scaled to handle. This represents the throughput capacity that will be immediately available for write operations.</p>
   * @public
   */
  WarmThroughputMiBps: number | undefined;
}

/**
 * @public
 */
export interface UpdateStreamWarmThroughputOutput {
  /**
   * <p>The ARN of the stream that was updated.</p>
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * <p>The name of the stream that was updated.</p>
   * @public
   */
  StreamName?: string | undefined;

  /**
   * <p>Specifies the updated warm throughput configuration for your data stream.</p>
   * @public
   */
  WarmThroughput?: WarmThroughputObject | undefined;
}
