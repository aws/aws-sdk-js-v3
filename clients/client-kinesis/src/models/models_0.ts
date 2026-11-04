// smithy-typescript generated code
import type {
  ChannelDestinationType,
  ChannelEncryptionType,
  ChannelStatus,
  ConsumerStatus,
  EncryptionType,
  MetricsName,
  MinimumThroughputBillingCommitmentInputStatus,
  MinimumThroughputBillingCommitmentOutputStatus,
  PartitionTransform,
  RecordDistributionStrategy,
  RecordFormatType,
  S3CompressionType,
  S3StorageClass,
  S3TablesCompressionType,
  ScalingType,
  ShardFilterType,
  ShardIteratorType,
  StreamMode,
  StreamStatus,
} from "./enums";
import type {
  InternalFailureException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
  ResourceInUseException,
  ResourceNotFoundException,
} from "./errors";

/**
 * Represents the input for `AddTagsToStream`.
 *
 * @public
 */
export interface AddTagsToStreamInput {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * A set of up to 50 key-value pairs to use to create the tags. A tag consists of a required key and an optional value. You can add up to 50 tags per resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Specifies the Amazon Web Services KMS key that Amazon Kinesis Data Streams uses to encrypt data delivered to the channel's destination.
 *
 * @public
 */
export interface ChannelEncryptionConfiguration {
  /**
   * The encryption type. The only valid value is `KMS`.
   *
   * @public
   */
  EncryptionType: ChannelEncryptionType | undefined;

  /**
   * The identifier of the customer managed Amazon Web Services KMS key. You cannot use the Amazon Kinesis Data Streams service key (`aws/kinesis`).
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * The Amazon CloudWatch Logs settings for channel logging.
 *
 * @public
 */
export interface CloudWatchLogs {
  /**
   * Specifies whether logging to Amazon CloudWatch Logs is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log group. Defaults to `/aws/kinesis/\{channelName\}/\{channelId\}`.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log stream. Defaults to `DestinationDelivery`.
   *
   * @public
   */
  LogStreamName?: string | undefined;
}

/**
 * The Amazon CloudWatch Logs configuration for a channel.
 *
 * @public
 */
export interface ChannelLoggingConfiguration {
  /**
   * The Amazon CloudWatch Logs settings for the channel.
   *
   * @public
   */
  CloudWatchLogs: CloudWatchLogs | undefined;
}

/**
 * The Amazon S3 dead-letter queue configuration for records that cannot be delivered.
 *
 * @public
 */
export interface DeadLetterQueueS3Configuration {
  /**
   * The Amazon Resource Name (ARN) of the dead-letter queue Amazon S3 bucket.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The Amazon Web Services account ID of the expected owner of the dead-letter queue bucket.
   *
   * @public
   */
  ExpectedBucketOwner: string | undefined;

  /**
   * The Amazon S3 key prefix for error records.
   *
   * @public
   */
  ErrorOutputPrefix?: string | undefined;
}

/**
 * The Amazon S3 storage settings for a general purpose Amazon S3 destination.
 *
 * @public
 */
export interface S3StorageConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the destination Amazon S3 bucket.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The Amazon Web Services account ID of the expected owner of the destination bucket. This value helps prevent delivery to an unintended bucket if ownership changes.
   *
   * @public
   */
  ExpectedBucketOwner: string | undefined;

  /**
   * The template used to construct the Amazon S3 object key for delivered objects. If not specified, a default template is used.
   *
   * @public
   */
  OutputKeyTemplate?: string | undefined;

  /**
   * The Amazon S3 storage class for delivered objects. Valid values:
   *
   * - `STANDARD` - The default storage class, for frequently accessed data.
   * - `INTELLIGENT_TIERING` - Automatically moves objects to the most cost-effective access tier based on usage patterns.
   * - `GLACIER_IR` - Low-cost storage for rarely accessed data that requires millisecond retrieval.
   *
   * @public
   */
  StorageClass?: S3StorageClass | undefined;

  /**
   * The compression applied to delivered objects. Valid values:
   *
   * - `NONE` - No compression.
   * - `GZIP` - gzip compression.
   * - `ZSTD` - Zstandard compression.
   *
   * @public
   */
  CompressionType: S3CompressionType | undefined;
}

/**
 * The configuration for delivery to a general purpose Amazon S3 bucket. Returned in ChannelDescription.
 *
 * @public
 */
export interface S3DestinationDescription {
  /**
   * The maximum age, in seconds, of undelivered data.
   *
   * @public
   */
  DataFreshnessInSeconds: number | undefined;

  /**
   * The dead-letter queue configuration for records that cannot be delivered.
   *
   * @public
   */
  DeadLetterQueueS3Configuration: DeadLetterQueueS3Configuration | undefined;

  /**
   * The Amazon S3 storage configuration for the channel.
   *
   * @public
   */
  StorageConfiguration: S3StorageConfiguration | undefined;
}

/**
 * Specifies a single partition field.
 *
 * @public
 */
export interface PartitionField {
  /**
   * The partition transform to apply. The only valid value is `TIME_HOUR`.
   *
   * @public
   */
  Transform: PartitionTransform | undefined;

  /**
   * The name of the source column used for partitioning. This column must be of the `timestamptz` type.
   *
   * @public
   */
  SourceName: string | undefined;
}

/**
 * Specifies how the destination table is partitioned.
 *
 * @public
 */
export interface PartitionSpec {
  /**
   * The list of partition fields.
   *
   * @public
   */
  PartitionFields: PartitionField[] | undefined;
}

/**
 * Specifies a destination streaming table on Apache Iceberg.
 *
 * @public
 */
export interface S3TablesConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 table bucket.
   *
   * @public
   */
  TableBucketARN: string | undefined;

  /**
   * The namespace (database) of the destination table.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The name of the destination table. Amazon Kinesis Data Streams creates this table in the specified table bucket.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The compression applied to Parquet data files. Valid values:
   *
   * - `NONE` - No compression.
   * - `ZSTD` - Zstandard compression.
   * - `SNAPPY` - Snappy compression.
   *
   * @public
   */
  CompressionType: S3TablesCompressionType | undefined;

  /**
   * The partitioning specification for the destination table.
   *
   * @public
   */
  PartitionSpec?: PartitionSpec | undefined;
}

/**
 * The configuration for delivery to streaming tables on Apache Iceberg. Returned in ChannelDescription.
 *
 * @public
 */
export interface S3TablesDestinationDescription {
  /**
   * The maximum age, in seconds, of undelivered data.
   *
   * @public
   */
  DataFreshnessInSeconds: number | undefined;

  /**
   * The dead-letter queue configuration for records that cannot be delivered.
   *
   * @public
   */
  DeadLetterQueueS3Configuration: DeadLetterQueueS3Configuration | undefined;

  /**
   * The list of streaming table configurations.
   *
   * @public
   */
  S3TablesConfigurationList: S3TablesConfiguration[] | undefined;
}

/**
 * Specifies the format of records read from the source stream.
 *
 * @public
 */
export interface RecordConfiguration {
  /**
   * The format of records on the source stream. Valid values:
   *
   * - `GSR_JSON` - Supported only for streaming table (Amazon S3 Tables) destinations.
   * - `JSON` - Supported for both general purpose Amazon S3 and streaming table destinations.
   * - `STRING` - Supported only for general purpose Amazon S3 destinations.
   * - `BYTE_ARRAY` - Supported only for general purpose Amazon S3 destinations.
   *
   * @public
   */
  RecordFormatType: RecordFormatType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Glue Schema Registry schema used to validate records. Required when the channel destination is a streaming table.
   *
   * @public
   */
  GSRSchemaARN?: string | undefined;
}

/**
 * Describes the source stream of a channel.
 *
 * @public
 */
export interface ChannelStreamDescription {
  /**
   * The Amazon Resource Name (ARN) of the source Kinesis data stream.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * The time at which the source stream was created.
   *
   * @public
   */
  StreamCreationTimestamp: Date | undefined;

  /**
   * The record format configuration for the source stream.
   *
   * @public
   */
  RecordConfiguration: RecordConfiguration | undefined;
}

/**
 * Describes the configuration and current status of a channel.
 *
 * @public
 */
export interface ChannelDescription {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the channel.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * The unique identifier of the channel.
   *
   * @public
   */
  ChannelId: string | undefined;

  /**
   * The current status of the channel. Valid values:
   *
   * - `CREATING` - The channel is being created.
   * - `ACTIVE` - The channel is ready to deliver records.
   * - `UPDATING` - The channel configuration is being updated.
   * - `DELETING` - The channel is being deleted.
   * - `FAILED` - See `ChannelStatusReason` for the failure cause.
   *
   * @public
   */
  ChannelStatus: ChannelStatus | undefined;

  /**
   * A message describing the reason for a `FAILED` status.
   *
   * @public
   */
  ChannelStatusReason?: string | undefined;

  /**
   * The time at which the channel was created.
   *
   * @public
   */
  ChannelCreationTimestamp: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Data Streams assumes to write records to the destination.
   *
   * @public
   */
  ServiceExecutionRoleARN: string | undefined;

  /**
   * The source stream configuration for the channel.
   *
   * @public
   */
  StreamConfigurationList: ChannelStreamDescription[] | undefined;

  /**
   * The configuration for delivery to a general purpose Amazon S3 bucket. Present only when the channel destination is a general purpose Amazon S3 bucket.
   *
   * @public
   */
  S3DestinationConfiguration?: S3DestinationDescription | undefined;

  /**
   * The configuration for delivery to streaming tables on Apache Iceberg in Amazon S3 Tables. Present only when the channel destination is a streaming table.
   *
   * @public
   */
  S3TablesDestinationConfiguration?: S3TablesDestinationDescription | undefined;

  /**
   * The Amazon Web Services KMS key configuration that Amazon Kinesis Data Streams uses to encrypt data delivered to the channel's destination.
   *
   * @public
   */
  EncryptionConfiguration?: ChannelEncryptionConfiguration | undefined;

  /**
   * The Amazon CloudWatch Logs configuration for the channel.
   *
   * @public
   */
  LoggingConfiguration: ChannelLoggingConfiguration | undefined;
}

/**
 * The updated Amazon CloudWatch Logs settings for a channel.
 *
 * @public
 */
export interface CloudWatchLogsUpdateInput {
  /**
   * Specifies whether logging to Amazon CloudWatch Logs is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log group.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The name of the Amazon CloudWatch Logs log stream.
   *
   * @public
   */
  LogStreamName?: string | undefined;
}

/**
 * The updated Amazon CloudWatch Logs configuration for a channel. Used in UpdateChannel.
 *
 * @public
 */
export interface ChannelLoggingUpdateInput {
  /**
   * The updated Amazon CloudWatch Logs settings, including whether logging is enabled and the target log group and log stream.
   *
   * @public
   */
  CloudWatchLogs: CloudWatchLogsUpdateInput | undefined;
}

/**
 * Specifies the source stream and record configuration when creating a channel.
 *
 * @public
 */
export interface ChannelStreamConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the source Kinesis data stream.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * The record format configuration for the source stream.
   *
   * @public
   */
  RecordConfiguration: RecordConfiguration | undefined;
}

/**
 * Identifies a source stream associated with a channel.
 *
 * @public
 */
export interface ChannelStreamIdentifier {
  /**
   * The Amazon Resource Name (ARN) of the source Kinesis data stream.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * The time at which the source stream was created.
   *
   * @public
   */
  StreamCreationTimestamp: Date | undefined;
}

/**
 * A summary of a channel, returned by ListChannels.
 *
 * @public
 */
export interface ChannelSummary {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the channel.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * The unique identifier of the channel.
   *
   * @public
   */
  ChannelId: string | undefined;

  /**
   * The current status of the channel. Valid values:
   *
   * - `CREATING` - The channel is being created.
   * - `ACTIVE` - The channel is ready to deliver records.
   * - `UPDATING` - The channel configuration is being updated.
   * - `DELETING` - The channel is being deleted.
   * - `FAILED` - See `ChannelStatusReason` for the failure cause.
   *
   * @public
   */
  ChannelStatus: ChannelStatus | undefined;

  /**
   * A message describing the reason for a `FAILED` status.
   *
   * @public
   */
  ChannelStatusReason?: string | undefined;

  /**
   * The time at which the channel was created.
   *
   * @public
   */
  ChannelCreationTimestamp: Date | undefined;

  /**
   * The destination type of the channel. Valid values:
   *
   * - `S3` - Delivery to a general purpose Amazon S3 bucket.
   * - `S3_TABLES` - Delivery to streaming tables on Apache Iceberg.
   *
   * @public
   */
  ChannelDestinationType: ChannelDestinationType | undefined;

  /**
   * The source streams associated with the channel.
   *
   * @public
   */
  Streams: ChannelStreamIdentifier[] | undefined;
}

/**
 * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
 *
 * @public
 */
export interface HashKeyRange {
  /**
   * The starting hash key of the hash key range.
   *
   * @public
   */
  StartingHashKey: string | undefined;

  /**
   * The ending hash key of the hash key range.
   *
   * @public
   */
  EndingHashKey: string | undefined;
}

/**
 * Output parameter of the GetRecords API. The existing child shard of the current shard.
 *
 * @public
 */
export interface ChildShard {
  /**
   * The shard ID of the existing child shard of the current shard.
   *
   * @public
   */
  ShardId: string | undefined;

  /**
   * The current shard that is the parent of the existing child shard.
   *
   * @public
   */
  ParentShards: string[] | undefined;

  /**
   * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
   *
   * @public
   */
  HashKeyRange: HashKeyRange | undefined;
}

/**
 * An object that represents the details of the consumer you registered. This type of object is returned by RegisterStreamConsumer.
 *
 * @public
 */
export interface Consumer {
  /**
   * The name of the consumer is something you choose when you register the consumer.
   *
   * @public
   */
  ConsumerName: string | undefined;

  /**
   * When you register a consumer, Kinesis Data Streams generates an ARN for it. You need this ARN to be able to call SubscribeToShard.
   *
   * If you delete a consumer and then create a new one with the same name, it won't have the same ARN. That's because consumer ARNs contain the creation timestamp. This is important to keep in mind if you have IAM policies that reference consumer ARNs.
   *
   * @public
   */
  ConsumerARN: string | undefined;

  /**
   * A consumer can't read data while in the `CREATING` or `DELETING` states.
   *
   * @public
   */
  ConsumerStatus: ConsumerStatus | undefined;

  /**
   * @public
   */
  ConsumerCreationTimestamp: Date | undefined;
}

/**
 * An object that represents the details of a registered consumer. This type of object is returned by DescribeStreamConsumer.
 *
 * @public
 */
export interface ConsumerDescription {
  /**
   * The name of the consumer is something you choose when you register the consumer.
   *
   * @public
   */
  ConsumerName: string | undefined;

  /**
   * When you register a consumer, Kinesis Data Streams generates an ARN for it. You need this ARN to be able to call SubscribeToShard.
   *
   * If you delete a consumer and then create a new one with the same name, it won't have the same ARN. That's because consumer ARNs contain the creation timestamp. This is important to keep in mind if you have IAM policies that reference consumer ARNs.
   *
   * @public
   */
  ConsumerARN: string | undefined;

  /**
   * A consumer can't read data while in the `CREATING` or `DELETING` states.
   *
   * @public
   */
  ConsumerStatus: ConsumerStatus | undefined;

  /**
   * @public
   */
  ConsumerCreationTimestamp: Date | undefined;

  /**
   * The ARN of the stream with which you registered the consumer.
   *
   * @public
   */
  StreamARN: string | undefined;
}

/**
 * The configuration for delivery to a general purpose Amazon S3 bucket. Used in CreateChannel.
 *
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * The maximum age, in seconds, of undelivered data before the channel delivers it to the destination. The default value is 300 seconds.
   *
   * @public
   */
  DataFreshnessInSeconds?: number | undefined;

  /**
   * The dead-letter queue configuration for records that cannot be delivered. Optional for general purpose Amazon S3 destinations. If not specified, it defaults to the destination bucket with an error prefix.
   *
   * @public
   */
  DeadLetterQueueS3Configuration?: DeadLetterQueueS3Configuration | undefined;

  /**
   * The Amazon S3 storage configuration for the channel.
   *
   * @public
   */
  StorageConfiguration: S3StorageConfiguration | undefined;
}

/**
 * The configuration for delivery to streaming tables on Apache Iceberg. Used in CreateChannel.
 *
 * @public
 */
export interface S3TablesDestinationConfiguration {
  /**
   * The maximum age, in seconds, of undelivered data before the channel delivers it to the destination. The default value is 300 seconds.
   *
   * @public
   */
  DataFreshnessInSeconds?: number | undefined;

  /**
   * The dead-letter queue configuration for records that cannot be delivered. Required for streaming table destinations.
   *
   * @public
   */
  DeadLetterQueueS3Configuration: DeadLetterQueueS3Configuration | undefined;

  /**
   * The list of streaming table configurations. Currently, one table is supported per channel.
   *
   * @public
   */
  S3TablesConfigurationList: S3TablesConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateChannelInput {
  /**
   * The name of the channel. The name is unique within your Amazon Web Services account and Amazon Web Services Region.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Data Streams assumes to write records to the destination.
   *
   * @public
   */
  ServiceExecutionRoleARN: string | undefined;

  /**
   * The source stream configuration for the channel. Currently, one stream is supported per channel.
   *
   * @public
   */
  StreamConfigurationList: ChannelStreamConfiguration[] | undefined;

  /**
   * The configuration for delivery to a general purpose Amazon S3 bucket. Specify this parameter when `S3TablesDestinationConfiguration` is not specified.
   *
   * @public
   */
  S3DestinationConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * The configuration for delivery to streaming tables on Apache Iceberg in Amazon S3 Tables. Specify this parameter when `S3DestinationConfiguration` is not specified.
   *
   * @public
   */
  S3TablesDestinationConfiguration?: S3TablesDestinationConfiguration | undefined;

  /**
   * The server-side encryption configuration that uses an Amazon Web Services KMS key to encrypt data delivered to the destination.
   *
   * @public
   */
  EncryptionConfiguration?: ChannelEncryptionConfiguration | undefined;

  /**
   * A set of key-value pairs to assign to the channel. A tag consists of a required key and an optional value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon CloudWatch Logs configuration for the channel.
   *
   * @public
   */
  LoggingConfiguration?: ChannelLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateChannelOutput {
  /**
   * The configuration and current status of the channel, including its ARN, destination configuration, and lifecycle state. Immediately after creation, the state is `CREATING`.
   *
   * @public
   */
  ChannelDescription: ChannelDescription | undefined;
}

/**
 * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
 *
 * @public
 */
export interface StreamModeDetails {
  /**
   * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
   *
   * @public
   */
  StreamMode: StreamMode | undefined;
}

/**
 * Represents the input for `CreateStream`.
 *
 * @public
 */
export interface CreateStreamInput {
  /**
   * A name to identify the stream. The stream name is scoped to the Amazon Web Services account used by the application that creates the stream. It is also scoped by Amazon Web Services Region. That is, two streams in two different Amazon Web Services accounts can have the same name. Two streams in the same Amazon Web Services account but in two different Regions can also have the same name.
   *
   * @public
   */
  StreamName: string | undefined;

  /**
   * The number of shards that the stream will use. The throughput of the stream is a function of the number of shards; more shards are required for greater provisioned throughput.
   *
   * @public
   */
  ShardCount?: number | undefined;

  /**
   * Indicates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
   *
   * @public
   */
  StreamModeDetails?: StreamModeDetails | undefined;

  /**
   * A set of up to 50 key-value pairs to use to create the tags. A tag consists of a required key and an optional value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The target warm throughput in MB/s that the stream should be scaled to handle. This represents the throughput capacity that will be immediately available for write operations.
   *
   * @public
   */
  WarmThroughputMiBps?: number | undefined;

  /**
   * The maximum record size of a single record in kibibyte (KiB) that you can write to, and read from a stream.
   *
   * @public
   */
  MaxRecordSizeInKiB?: number | undefined;

  /**
   * The record distribution strategy for the stream, which determines how Amazon Kinesis Data Streams distributes records across shards. Specify one of the following values:
   *
   * - `AUTO` – Amazon Kinesis Data Streams distributes records evenly across shards and ignores any partition key and `ExplicitHashKey` that producers supply. Use this value for stateless workloads that do not require partition-key ordering.
   * - `USER_PARTITION_KEY` – Producers must supply a partition key, which Amazon Kinesis Data Streams uses to determine shard placement. This is the default.
   *
   * The record distribution strategy is only supported for streams that use the on-demand capacity mode. If you do not specify this parameter, the stream uses `USER_PARTITION_KEY`.
   *
   * @public
   */
  RecordDistributionStrategy?: RecordDistributionStrategy | undefined;
}

/**
 * Represents the input for DecreaseStreamRetentionPeriod.
 *
 * @public
 */
export interface DecreaseStreamRetentionPeriodInput {
  /**
   * The name of the stream to modify.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The new retention period of the stream, in hours. Must be less than the current retention period.
   *
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelInput {
  /**
   * The Amazon Resource Name (ARN) of the channel to delete.
   *
   * @public
   */
  ChannelARN: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the data stream or consumer.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents the input for DeleteStream.
 *
 * @public
 */
export interface DeleteStreamInput {
  /**
   * The name of the stream to delete.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * If this parameter is unset (`null`) or if you set it to `false`, and the stream has registered consumers, the call to `DeleteStream` fails with a `ResourceInUseException`.
   *
   * @public
   */
  EnforceConsumerDeletion?: boolean | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterStreamConsumerInput {
  /**
   * The ARN of the Kinesis data stream that the consumer is registered with. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams).
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The name that you gave to the consumer.
   *
   * @public
   */
  ConsumerName?: string | undefined;

  /**
   * The ARN returned by Kinesis Data Streams when you registered the consumer. If you don't know the ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its ARN.
   *
   * @public
   */
  ConsumerARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsInput {}

/**
 * Represents the current status of minimum throughput billing commitment for an account.
 *
 * @public
 */
export interface MinimumThroughputBillingCommitmentOutput {
  /**
   * The current status of the minimum throughput billing commitment.
   *
   * @public
   */
  Status: MinimumThroughputBillingCommitmentOutputStatus | undefined;

  /**
   * The timestamp when the commitment was started.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The timestamp when the commitment was ended.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The earliest timestamp when the commitment can be ended.
   *
   * @public
   */
  EarliestAllowedEndAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsOutput {
  /**
   * The current configuration of the minimum throughput billing commitment for your Amazon Web Services account.
   *
   * @public
   */
  MinimumThroughputBillingCommitment?: MinimumThroughputBillingCommitmentOutput | undefined;
}

/**
 * @public
 */
export interface DescribeChannelInput {
  /**
   * The Amazon Resource Name (ARN) of the channel to describe.
   *
   * @public
   */
  ChannelARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelOutput {
  /**
   * The configuration and current status of the channel, including its ARN, source stream, destination configuration, and lifecycle state.
   *
   * @public
   */
  ChannelDescription: ChannelDescription | undefined;
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
   * The maximum number of shards.
   *
   * @public
   */
  ShardLimit: number | undefined;

  /**
   * The number of open shards.
   *
   * @public
   */
  OpenShardCount: number | undefined;

  /**
   * Indicates the number of data streams with the on-demand capacity mode.
   *
   * @public
   */
  OnDemandStreamCount: number | undefined;

  /**
   * The maximum number of data streams with the on-demand capacity mode.
   *
   * @public
   */
  OnDemandStreamCountLimit: number | undefined;

  /**
   * The number of channels in the account.
   *
   * @public
   */
  ChannelCount?: number | undefined;

  /**
   * The maximum number of channels allowed in the account.
   *
   * @public
   */
  ChannelCountLimit?: number | undefined;
}

/**
 * Represents the input for `DescribeStream`.
 *
 * @public
 */
export interface DescribeStreamInput {
  /**
   * The name of the stream to describe.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The maximum number of shards to return in a single call. The default value is 100. If you specify a value greater than 100, at most 100 results are returned.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The shard ID of the shard to start with.
   *
   * Specify this parameter to indicate that you want to describe the stream starting with the shard whose ID immediately follows `ExclusiveStartShardId`.
   *
   * If you don't specify this parameter, the default behavior for `DescribeStream` is to describe the stream starting with the first shard in the stream.
   *
   * @public
   */
  ExclusiveStartShardId?: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents enhanced metrics types.
 *
 * @public
 */
export interface EnhancedMetrics {
  /**
   * List of shard-level metrics.
   *
   * The following are the valid shard-level metrics. The value "`ALL`" enhances every metric.
   *
   * - `IncomingBytes`
   * - `IncomingRecords`
   * - `OutgoingBytes`
   * - `OutgoingRecords`
   * - `WriteProvisionedThroughputExceeded`
   * - `ReadProvisionedThroughputExceeded`
   * - `IteratorAgeMilliseconds`
   * - `ALL`
   *
   * For more information, see [Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch](https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html) in the *Amazon Kinesis Data Streams Developer Guide*.
   *
   * @public
   */
  ShardLevelMetrics?: MetricsName[] | undefined;
}

/**
 * The range of possible sequence numbers for the shard.
 *
 * @public
 */
export interface SequenceNumberRange {
  /**
   * The starting sequence number for the range.
   *
   * @public
   */
  StartingSequenceNumber: string | undefined;

  /**
   * The ending sequence number for the range. Shards that are in the OPEN state have an ending sequence number of `null`.
   *
   * @public
   */
  EndingSequenceNumber?: string | undefined;
}

/**
 * A uniquely identified group of data records in a Kinesis data stream.
 *
 * @public
 */
export interface Shard {
  /**
   * The unique identifier of the shard within the stream.
   *
   * @public
   */
  ShardId: string | undefined;

  /**
   * The shard ID of the shard's parent.
   *
   * @public
   */
  ParentShardId?: string | undefined;

  /**
   * The shard ID of the shard adjacent to the shard's parent.
   *
   * @public
   */
  AdjacentParentShardId?: string | undefined;

  /**
   * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
   *
   * @public
   */
  HashKeyRange: HashKeyRange | undefined;

  /**
   * The range of possible sequence numbers for the shard.
   *
   * @public
   */
  SequenceNumberRange: SequenceNumberRange | undefined;
}

/**
 * Represents the output for DescribeStream.
 *
 * @public
 */
export interface StreamDescription {
  /**
   * The name of the stream being described.
   *
   * @public
   */
  StreamName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the stream being described.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * The current status of the stream being described. The stream status is one of the following states:
   *
   * - `CREATING` - The stream is being created. Kinesis Data Streams immediately returns and sets `StreamStatus` to `CREATING`.
   * - `DELETING` - The stream is being deleted. The specified stream is in the `DELETING` state until Kinesis Data Streams completes the deletion.
   * - `ACTIVE` - The stream exists and is ready for read and write operations or deletion. You should perform read and write operations only on an `ACTIVE` stream.
   * - `UPDATING` - Shards in the stream are being merged or split. Read and write operations continue to work while the stream is in the `UPDATING` state.
   *
   * @public
   */
  StreamStatus: StreamStatus | undefined;

  /**
   * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
   *
   * @public
   */
  StreamModeDetails?: StreamModeDetails | undefined;

  /**
   * The shards that comprise the stream.
   *
   * @public
   */
  Shards: Shard[] | undefined;

  /**
   * If set to `true`, more shards in the stream are available to describe.
   *
   * @public
   */
  HasMoreShards: boolean | undefined;

  /**
   * The current retention period, in hours. Minimum value of 24. Maximum value of 168.
   *
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * The approximate time that the stream was created.
   *
   * @public
   */
  StreamCreationTimestamp: Date | undefined;

  /**
   * Represents the current enhanced monitoring settings of the stream.
   *
   * @public
   */
  EnhancedMonitoring: EnhancedMetrics[] | undefined;

  /**
   * The server-side encryption type used on the stream. This parameter can be one of the following values:
   *
   * - `NONE`: Do not encrypt the records in the stream.
   * - `KMS`: Use server-side encryption on the records in the stream using a customer-managed Amazon Web Services KMS key.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias `aws/kinesis`.
   *
   * - Key ARN example: `arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012`
   * - Alias ARN example: `arn:aws:kms:us-east-1:123456789012:alias/MyAliasName`
   * - Globally unique key ID example: `12345678-1234-1234-1234-123456789012`
   * - Alias name example: `alias/MyAliasName`
   * - Master key owned by Kinesis Data Streams: `alias/aws/kinesis`
   *
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * Represents the output for `DescribeStream`.
 *
 * @public
 */
export interface DescribeStreamOutput {
  /**
   * The current status of the stream, the stream Amazon Resource Name (ARN), an array of shard objects that comprise the stream, and whether there are more shards available.
   *
   * @public
   */
  StreamDescription: StreamDescription | undefined;
}

/**
 * @public
 */
export interface DescribeStreamConsumerInput {
  /**
   * The ARN of the Kinesis data stream that the consumer is registered with. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams).
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The name that you gave to the consumer.
   *
   * @public
   */
  ConsumerName?: string | undefined;

  /**
   * The ARN returned by Kinesis Data Streams when you registered the consumer.
   *
   * @public
   */
  ConsumerARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStreamConsumerOutput {
  /**
   * An object that represents the details of the consumer.
   *
   * @public
   */
  ConsumerDescription: ConsumerDescription | undefined;
}

/**
 * @public
 */
export interface DescribeStreamSummaryInput {
  /**
   * The name of the stream to describe.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents the warm throughput configuration on the stream. This is only present for On-Demand Kinesis Data Streams in accounts that have `MinimumThroughputBillingCommitment` enabled.
 *
 * @public
 */
export interface WarmThroughputObject {
  /**
   * The target warm throughput value on the stream. This indicates that the stream is currently scaling towards this target value.
   *
   * @public
   */
  TargetMiBps?: number | undefined;

  /**
   * The current warm throughput value on the stream. This is the write throughput in MiBps that the stream is currently scaled to handle.
   *
   * @public
   */
  CurrentMiBps?: number | undefined;
}

/**
 * Represents the output for DescribeStreamSummary
 *
 * @public
 */
export interface StreamDescriptionSummary {
  /**
   * The name of the stream being described.
   *
   * @public
   */
  StreamName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the stream being described.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The current status of the stream being described. The stream status is one of the following states:
   *
   * - `CREATING` - The stream is being created. Kinesis Data Streams immediately returns and sets `StreamStatus` to `CREATING`.
   * - `DELETING` - The stream is being deleted. The specified stream is in the `DELETING` state until Kinesis Data Streams completes the deletion.
   * - `ACTIVE` - The stream exists and is ready for read and write operations or deletion. You should perform read and write operations only on an `ACTIVE` stream.
   * - `UPDATING` - Shards in the stream are being merged or split. Read and write operations continue to work while the stream is in the `UPDATING` state.
   *
   * @public
   */
  StreamStatus: StreamStatus | undefined;

  /**
   * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** ycapacity mode and a **provisioned** capacity mode for your data streams.
   *
   * @public
   */
  StreamModeDetails?: StreamModeDetails | undefined;

  /**
   * The current retention period, in hours.
   *
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * The approximate time that the stream was created.
   *
   * @public
   */
  StreamCreationTimestamp: Date | undefined;

  /**
   * Represents the current enhanced monitoring settings of the stream.
   *
   * @public
   */
  EnhancedMonitoring: EnhancedMetrics[] | undefined;

  /**
   * The encryption type used. This value is one of the following:
   *
   * - `KMS`
   * - `NONE`
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;

  /**
   * The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias `aws/kinesis`.
   *
   * - Key ARN example: `arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012`
   * - Alias ARN example: `arn:aws:kms:us-east-1:123456789012:alias/MyAliasName`
   * - Globally unique key ID example: `12345678-1234-1234-1234-123456789012`
   * - Alias name example: `alias/MyAliasName`
   * - Master key owned by Kinesis Data Streams: `alias/aws/kinesis`
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The number of open shards in the stream.
   *
   * @public
   */
  OpenShardCount: number | undefined;

  /**
   * The number of enhanced fan-out consumers registered with the stream.
   *
   * @public
   */
  ConsumerCount?: number | undefined;

  /**
   * The warm throughput in MB/s for the stream. This represents the throughput capacity that will be immediately available for write operations.
   *
   * @public
   */
  WarmThroughput?: WarmThroughputObject | undefined;

  /**
   * The maximum record size of a single record in kibibyte (KiB) that you can write to, and read from a stream.
   *
   * @public
   */
  MaxRecordSizeInKiB?: number | undefined;

  /**
   * The number of channels associated with the stream.
   *
   * @public
   */
  ChannelCount?: number | undefined;

  /**
   * The record distribution strategy that the stream currently uses. A value of `AUTO` indicates that Amazon Kinesis Data Streams distributes records across shards using service-managed algorithms. A value of `USER_PARTITION_KEY` indicates that shard placement is determined by the partition key that producers supply. This field is only present for streams that use the on-demand capacity mode.
   *
   * @public
   */
  RecordDistributionStrategy?: RecordDistributionStrategy | undefined;
}

/**
 * @public
 */
export interface DescribeStreamSummaryOutput {
  /**
   * A StreamDescriptionSummary containing information about the stream.
   *
   * @public
   */
  StreamDescriptionSummary: StreamDescriptionSummary | undefined;
}

/**
 * Represents the input for DisableEnhancedMonitoring.
 *
 * @public
 */
export interface DisableEnhancedMonitoringInput {
  /**
   * The name of the Kinesis data stream for which to disable enhanced monitoring.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * List of shard-level metrics to disable.
   *
   * The following are the valid shard-level metrics. The value "`ALL`" disables every metric.
   *
   * - `IncomingBytes`
   * - `IncomingRecords`
   * - `OutgoingBytes`
   * - `OutgoingRecords`
   * - `WriteProvisionedThroughputExceeded`
   * - `ReadProvisionedThroughputExceeded`
   * - `IteratorAgeMilliseconds`
   * - `ALL`
   *
   * For more information, see [Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch](https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html) in the *Amazon Kinesis Data Streams Developer Guide*.
   *
   * @public
   */
  ShardLevelMetrics: MetricsName[] | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents the output for EnableEnhancedMonitoring and DisableEnhancedMonitoring.
 *
 * @public
 */
export interface EnhancedMonitoringOutput {
  /**
   * The name of the Kinesis data stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * Represents the current state of the metrics that are in the enhanced state before the operation.
   *
   * @public
   */
  CurrentShardLevelMetrics?: MetricsName[] | undefined;

  /**
   * Represents the list of all the metrics that would be in the enhanced state after the operation.
   *
   * @public
   */
  DesiredShardLevelMetrics?: MetricsName[] | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * Represents the input for EnableEnhancedMonitoring.
 *
 * @public
 */
export interface EnableEnhancedMonitoringInput {
  /**
   * The name of the stream for which to enable enhanced monitoring.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * List of shard-level metrics to enable.
   *
   * The following are the valid shard-level metrics. The value "`ALL`" enables every metric.
   *
   * - `IncomingBytes`
   * - `IncomingRecords`
   * - `OutgoingBytes`
   * - `OutgoingRecords`
   * - `WriteProvisionedThroughputExceeded`
   * - `ReadProvisionedThroughputExceeded`
   * - `IteratorAgeMilliseconds`
   * - `ALL`
   *
   * For more information, see [Monitoring the Amazon Kinesis Data Streams Service with Amazon CloudWatch](https://docs.aws.amazon.com/kinesis/latest/dev/monitoring-with-cloudwatch.html) in the *Amazon Kinesis Data Streams Developer Guide*.
   *
   * @public
   */
  ShardLevelMetrics: MetricsName[] | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents the input for GetRecords.
 *
 * @public
 */
export interface GetRecordsInput {
  /**
   * The position in the shard from which you want to start sequentially reading data records. A shard iterator specifies this position using the sequence number of a data record in the shard.
   *
   * @public
   */
  ShardIterator: string | undefined;

  /**
   * The maximum number of records to return. Specify a value of up to 10,000. If you specify a value that is greater than 10,000, GetRecords throws `InvalidArgumentException`. The default value is 10,000.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
 *
 * @public
 */
export interface _Record {
  /**
   * The unique identifier of the record within its shard.
   *
   * @public
   */
  SequenceNumber: string | undefined;

  /**
   * The approximate time that the record was inserted into the stream.
   *
   * @public
   */
  ApproximateArrivalTimestamp?: Date | undefined;

  /**
   * The data blob. The data in the blob is both opaque and immutable to Kinesis Data Streams, which does not inspect, interpret, or change the data in the blob in any way. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (10 MiB).
   *
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * Identifies which shard in the stream the data record is assigned to.
   *
   * For a stream that uses the `AUTO` record distribution strategy, this value is not returned if the producer did not provide a partition key when writing the record. If the producer provided a partition key, the original value is returned even though it was not used to determine shard placement.
   *
   * @public
   */
  PartitionKey?: string | undefined;

  /**
   * The encryption type used on the record. This parameter can be one of the following values:
   *
   * - `NONE`: Do not encrypt the records in the stream.
   * - `KMS`: Use server-side encryption on the records in the stream using a customer-managed Amazon Web Services KMS key.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;
}

/**
 * Represents the output for GetRecords.
 *
 * @public
 */
export interface GetRecordsOutput {
  /**
   * The data records retrieved from the shard.
   *
   * @public
   */
  Records: _Record[] | undefined;

  /**
   * The next position in the shard from which to start sequentially reading data records. If set to `null`, the shard has been closed and the requested iterator does not return any more data.
   *
   * @public
   */
  NextShardIterator?: string | undefined;

  /**
   * The number of milliseconds the GetRecords response is from the tip of the stream, indicating how far behind current time the consumer is. A value of zero indicates that record processing is caught up, and there are no new records to process at this moment.
   *
   * @public
   */
  MillisBehindLatest?: number | undefined;

  /**
   * The list of the current shard's child shards, returned in the `GetRecords` API's response only when the end of the current shard is reached.
   *
   * @public
   */
  ChildShards?: ChildShard[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the data stream or consumer.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * Details of the resource policy. This is formatted as a JSON string.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * Represents the input for `GetShardIterator`.
 *
 * @public
 */
export interface GetShardIteratorInput {
  /**
   * The name of the Amazon Kinesis data stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The shard ID of the Kinesis Data Streams shard to get the iterator for.
   *
   * @public
   */
  ShardId: string | undefined;

  /**
   * Determines how the shard iterator is used to start reading data records from the shard.
   *
   * The following are the valid Amazon Kinesis shard iterator types:
   *
   * - AT_SEQUENCE_NUMBER - Start reading from the position denoted by a specific sequence number, provided in the value `StartingSequenceNumber`.
   * - AFTER_SEQUENCE_NUMBER - Start reading right after the position denoted by a specific sequence number, provided in the value `StartingSequenceNumber`.
   * - AT_TIMESTAMP - Start reading from the position denoted by a specific time stamp, provided in the value `Timestamp`.
   * - TRIM_HORIZON - Start reading at the last untrimmed record in the shard in the system, which is the oldest data record in the shard.
   * - LATEST - Start reading just after the most recent record in the shard, so that you always read the most recent data in the shard.
   *
   * @public
   */
  ShardIteratorType: ShardIteratorType | undefined;

  /**
   * The sequence number of the data record in the shard from which to start reading. Used with shard iterator type AT_SEQUENCE_NUMBER and AFTER_SEQUENCE_NUMBER.
   *
   * @public
   */
  StartingSequenceNumber?: string | undefined;

  /**
   * The time stamp of the data record from which to start reading. Used with shard iterator type AT_TIMESTAMP. A time stamp is the Unix epoch date with precision in milliseconds. For example, `2016-04-04T19:58:46.480-00:00` or `1459799926.480`. If a record with this exact time stamp does not exist, the iterator returned is for the next (later) record. If the time stamp is older than the current trim horizon, the iterator returned is for the oldest untrimmed data record (TRIM_HORIZON).
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Represents the output for `GetShardIterator`.
 *
 * @public
 */
export interface GetShardIteratorOutput {
  /**
   * The position in the shard from which to start reading data records sequentially. A shard iterator specifies this position using the sequence number of a data record in a shard.
   *
   * @public
   */
  ShardIterator?: string | undefined;
}

/**
 * Represents the input for IncreaseStreamRetentionPeriod.
 *
 * @public
 */
export interface IncreaseStreamRetentionPeriodInput {
  /**
   * The name of the stream to modify.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The new retention period of the stream, in hours. Must be more than the current retention period.
   *
   * @public
   */
  RetentionPeriodHours: number | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Filters ListChannels results by source stream.
 *
 * @public
 */
export interface StreamFilter {
  /**
   * The Amazon Resource Name (ARN) of the source stream to filter by.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * The creation timestamp of the source stream.
   *
   * @public
   */
  StreamCreationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListChannelsInput {
  /**
   * Filters the results to channels associated with the specified streams.
   *
   * @public
   */
  StreamFilter?: StreamFilter[] | undefined;

  /**
   * The maximum number of channels to return in a single call. The default value is 100. If you specify a value greater than 100, at most 100 results are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token returned by a previous call. Specify this token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsOutput {
  /**
   * A list of channel summaries.
   *
   * @public
   */
  ChannelSummaries: ChannelSummary[] | undefined;

  /**
   * The pagination token to use in a subsequent call to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request parameter used to filter out the response of the `ListShards` API.
 *
 * @public
 */
export interface ShardFilter {
  /**
   * The shard type specified in the `ShardFilter` parameter. This is a required property of the `ShardFilter` parameter.
   *
   * You can specify the following valid values:
   *
   * - `AFTER_SHARD_ID` - the response includes all the shards, starting with the shard whose ID immediately follows the `ShardId` that you provided.
   * - `AT_TRIM_HORIZON` - the response includes all the shards that were open at `TRIM_HORIZON`.
   * - `FROM_TRIM_HORIZON` - (default), the response includes all the shards within the retention period of the data stream (trim to tip).
   * - `AT_LATEST` - the response includes only the currently open shards of the data stream.
   * - `AT_TIMESTAMP` - the response includes all shards whose start timestamp is less than or equal to the given timestamp and end timestamp is greater than or equal to the given timestamp or still open.
   * - `FROM_TIMESTAMP` - the response incldues all closed shards whose end timestamp is greater than or equal to the given timestamp and also all open shards. Corrected to `TRIM_HORIZON` of the data stream if `FROM_TIMESTAMP` is less than the `TRIM_HORIZON` value.
   *
   * @public
   */
  Type: ShardFilterType | undefined;

  /**
   * The exclusive start `shardID` speified in the `ShardFilter` parameter. This property can only be used if the `AFTER_SHARD_ID` shard type is specified.
   *
   * @public
   */
  ShardId?: string | undefined;

  /**
   * The timestamps specified in the `ShardFilter` parameter. A timestamp is a Unix epoch date with precision in milliseconds. For example, 2016-04-04T19:58:46.480-00:00 or 1459799926.480. This property can only be used if `FROM_TIMESTAMP` or `AT_TIMESTAMP` shard types are specified.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListShardsInput {
  /**
   * The name of the data stream whose shards you want to list.
   *
   * You cannot specify this parameter if you specify the `NextToken` parameter.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * When the number of shards in the data stream is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of shards in the data stream, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListShards` to list the next set of shards.
   *
   * Don't specify `StreamName` or `StreamCreationTimestamp` if you specify `NextToken` because the latter unambiguously identifies the stream.
   *
   * You can optionally specify a value for the `MaxResults` parameter when you specify `NextToken`. If you specify a `MaxResults` value that is less than the number of shards that the operation returns if you don't specify `MaxResults`, the response will contain a new `NextToken` value. You can use the new `NextToken` value in a subsequent call to the `ListShards` operation.
   *
   * > **Important:** Tokens expire after 300 seconds. When you obtain a value for `NextToken` in the response to a call to `ListShards`, you have 300 seconds to use that value. If you specify an expired token in a call to `ListShards`, you get `ExpiredNextTokenException`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specify this parameter to indicate that you want to list the shards starting with the shard whose ID immediately follows `ExclusiveStartShardId`.
   *
   * If you don't specify this parameter, the default behavior is for `ListShards` to list the shards starting with the first one in the stream.
   *
   * You cannot specify this parameter if you specify `NextToken`.
   *
   * @public
   */
  ExclusiveStartShardId?: string | undefined;

  /**
   * The maximum number of shards to return in a single call to `ListShards`. The maximum number of shards to return in a single call. The default value is 1000. If you specify a value greater than 1000, at most 1000 results are returned.
   *
   * When the number of shards to be listed is greater than the value of `MaxResults`, the response contains a `NextToken` value that you can use in a subsequent call to `ListShards` to list the next set of shards.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specify this input parameter to distinguish data streams that have the same name. For example, if you create a data stream and then delete it, and you later create another data stream with the same name, you can use this input parameter to specify which of the two streams you want to list the shards for.
   *
   * You cannot specify this parameter if you specify the `NextToken` parameter.
   *
   * @public
   */
  StreamCreationTimestamp?: Date | undefined;

  /**
   * Enables you to filter out the response of the `ListShards` API. You can only specify one filter at a time.
   *
   * If you use the `ShardFilter` parameter when invoking the ListShards API, the `Type` is the required property and must be specified. If you specify the `AT_TRIM_HORIZON`, `FROM_TRIM_HORIZON`, or `AT_LATEST` types, you do not need to specify either the `ShardId` or the `Timestamp` optional properties.
   *
   * If you specify the `AFTER_SHARD_ID` type, you must also provide the value for the optional `ShardId` property. The `ShardId` property is identical in fuctionality to the `ExclusiveStartShardId` parameter of the `ListShards` API. When `ShardId` property is specified, the response includes the shards starting with the shard whose ID immediately follows the `ShardId` that you provided.
   *
   * If you specify the `AT_TIMESTAMP` or `FROM_TIMESTAMP_ID` type, you must also provide the value for the optional `Timestamp` property. If you specify the AT_TIMESTAMP type, then all shards that were open at the provided timestamp are returned. If you specify the FROM_TIMESTAMP type, then all shards starting from the provided timestamp to TIP are returned.
   *
   * @public
   */
  ShardFilter?: ShardFilter | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface ListShardsOutput {
  /**
   * An array of JSON objects. Each object represents one shard and specifies the IDs of the shard, the shard's parent, and the shard that's adjacent to the shard's parent. Each object also contains the starting and ending hash keys and the starting and ending sequence numbers for the shard.
   *
   * @public
   */
  Shards?: Shard[] | undefined;

  /**
   * When the number of shards in the data stream is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of shards in the data stream, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListShards` to list the next set of shards. For more information about the use of this pagination token when calling the `ListShards` operation, see ListShardsInput$NextToken.
   *
   * > **Important:** Tokens expire after 300 seconds. When you obtain a value for `NextToken` in the response to a call to `ListShards`, you have 300 seconds to use that value. If you specify an expired token in a call to `ListShards`, you get `ExpiredNextTokenException`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamConsumersInput {
  /**
   * The ARN of the Kinesis data stream for which you want to list the registered consumers. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams).
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * When the number of consumers that are registered with the data stream is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of consumers that are registered with the data stream, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListStreamConsumers` to list the next set of registered consumers.
   *
   * Don't specify `StreamName` or `StreamCreationTimestamp` if you specify `NextToken` because the latter unambiguously identifies the stream.
   *
   * You can optionally specify a value for the `MaxResults` parameter when you specify `NextToken`. If you specify a `MaxResults` value that is less than the number of consumers that the operation returns if you don't specify `MaxResults`, the response will contain a new `NextToken` value. You can use the new `NextToken` value in a subsequent call to the `ListStreamConsumers` operation to list the next set of consumers.
   *
   * > **Important:** Tokens expire after 300 seconds. When you obtain a value for `NextToken` in the response to a call to `ListStreamConsumers`, you have 300 seconds to use that value. If you specify an expired token in a call to `ListStreamConsumers`, you get `ExpiredNextTokenException`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of consumers that you want a single call of `ListStreamConsumers` to return. The default value is 100. If you specify a value greater than 100, at most 100 results are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specify this input parameter to distinguish data streams that have the same name. For example, if you create a data stream and then delete it, and you later create another data stream with the same name, you can use this input parameter to specify which of the two streams you want to list the consumers for.
   *
   * You can't specify this parameter if you specify the NextToken parameter.
   *
   * @public
   */
  StreamCreationTimestamp?: Date | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamConsumersOutput {
  /**
   * An array of JSON objects. Each object represents one registered consumer.
   *
   * @public
   */
  Consumers?: Consumer[] | undefined;

  /**
   * When the number of consumers that are registered with the data stream is greater than the default value for the `MaxResults` parameter, or if you explicitly specify a value for `MaxResults` that is less than the number of registered consumers, the response includes a pagination token named `NextToken`. You can specify this `NextToken` value in a subsequent call to `ListStreamConsumers` to list the next set of registered consumers. For more information about the use of this pagination token when calling the `ListStreamConsumers` operation, see ListStreamConsumersInput$NextToken.
   *
   * > **Important:** Tokens expire after 300 seconds. When you obtain a value for `NextToken` in the response to a call to `ListStreamConsumers`, you have 300 seconds to use that value. If you specify an expired token in a call to `ListStreamConsumers`, you get `ExpiredNextTokenException`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the input for `ListStreams`.
 *
 * @public
 */
export interface ListStreamsInput {
  /**
   * The maximum number of streams to list. The default value is 100. If you specify a value greater than 100, at most 100 results are returned.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The name of the stream to start the list with.
   *
   * @public
   */
  ExclusiveStartStreamName?: string | undefined;

  /**
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The summary of a stream.
 *
 * @public
 */
export interface StreamSummary {
  /**
   * The name of a stream.
   *
   * @public
   */
  StreamName: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * The status of the stream.
   *
   * @public
   */
  StreamStatus: StreamStatus | undefined;

  /**
   * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
   *
   * @public
   */
  StreamModeDetails?: StreamModeDetails | undefined;

  /**
   * The timestamp at which the stream was created.
   *
   * @public
   */
  StreamCreationTimestamp?: Date | undefined;
}

/**
 * Represents the output for `ListStreams`.
 *
 * @public
 */
export interface ListStreamsOutput {
  /**
   * The names of the streams that are associated with the Amazon Web Services account making the `ListStreams` request.
   *
   * @public
   */
  StreamNames: string[] | undefined;

  /**
   * If set to `true`, there are more streams available to list.
   *
   * @public
   */
  HasMoreStreams: boolean | undefined;

  /**
   * @public
   */
  NextToken?: string | undefined;

  /**
   * @public
   */
  StreamSummaries?: StreamSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the Kinesis resource for which to list tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Metadata assigned to the stream or consumer, consisting of a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * A unique identifier for the tag. Maximum length: 128 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @
   *
   * @public
   */
  Key: string | undefined;

  /**
   * An optional string, typically used to describe or define the tag. Maximum length: 256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * An array of tags associated with the specified Kinesis resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Represents the input for `ListTagsForStream`.
 *
 * @public
 */
export interface ListTagsForStreamInput {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The key to use as the starting point for the list of tags. If this parameter is set, `ListTagsForStream` gets all tags that occur after `ExclusiveStartTagKey`.
   *
   * @public
   */
  ExclusiveStartTagKey?: string | undefined;

  /**
   * The number of tags to return. If this number is less than the total number of tags associated with the stream, `HasMoreTags` is set to `true`. To list additional tags, set `ExclusiveStartTagKey` to the last key in the response.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents the output for `ListTagsForStream`.
 *
 * @public
 */
export interface ListTagsForStreamOutput {
  /**
   * A list of tags associated with `StreamName`, starting with the first tag after `ExclusiveStartTagKey` and up to the specified `Limit`.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * If set to `true`, more tags are available. To request additional tags, set `ExclusiveStartTagKey` to the key of the last tag returned.
   *
   * @public
   */
  HasMoreTags: boolean | undefined;
}

/**
 * Represents the input for `MergeShards`.
 *
 * @public
 */
export interface MergeShardsInput {
  /**
   * The name of the stream for the merge.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The shard ID of the shard to combine with the adjacent shard for the merge.
   *
   * @public
   */
  ShardToMerge: string | undefined;

  /**
   * The shard ID of the adjacent shard for the merge.
   *
   * @public
   */
  AdjacentShardToMerge: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents the input for `PutRecord`.
 *
 * @public
 */
export interface PutRecordInput {
  /**
   * The name of the stream to put the data record into.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The data blob to put into the record, which is base64-encoded when the blob is serialized. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (10 MiB).
   *
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
   *
   * If the stream uses the `USER_PARTITION_KEY` record distribution strategy (the default), a partition key is required. If the stream uses the `AUTO` record distribution strategy, the partition key is optional and any value you provide is ignored, along with any `ExplicitHashKey` you provide. In that case, Amazon Kinesis Data Streams distributes the record across shards using service-managed algorithms. For more information, see `UpdateStreamRecordDistributionStrategy`.
   *
   * @public
   */
  PartitionKey?: string | undefined;

  /**
   * The hash value used to explicitly determine the shard the data record is assigned to by overriding the partition key hash.
   *
   * @public
   */
  ExplicitHashKey?: string | undefined;

  /**
   * Guarantees strictly increasing sequence numbers, for puts from the same client and to the same partition key. Usage: set the `SequenceNumberForOrdering` of record *n* to the sequence number of record *n-1* (as returned in the result when putting record *n-1*). If this parameter is not set, records are coarsely ordered based on arrival time.
   *
   * @public
   */
  SequenceNumberForOrdering?: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Represents the output for `PutRecord`.
 *
 * @public
 */
export interface PutRecordOutput {
  /**
   * The shard ID of the shard where the data record was placed.
   *
   * @public
   */
  ShardId: string | undefined;

  /**
   * The sequence number identifier that was assigned to the put data record. The sequence number for the record is unique across all records in the stream. A sequence number is the identifier associated with every record put into the stream.
   *
   * @public
   */
  SequenceNumber: string | undefined;

  /**
   * The encryption type to use on the record. This parameter can be one of the following values:
   *
   * - `NONE`: Do not encrypt the records in the stream.
   * - `KMS`: Use server-side encryption on the records in the stream using a customer-managed Amazon Web Services KMS key.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;
}

/**
 * Represents the output for `PutRecords`.
 *
 * @public
 */
export interface PutRecordsRequestEntry {
  /**
   * The data blob to put into the record, which is base64-encoded when the blob is serialized. When the data blob (the payload before base64-encoding) is added to the partition key size, the total size must not exceed the maximum record size (10 MiB).
   *
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * The hash value used to determine explicitly the shard that the data record is assigned to by overriding the partition key hash.
   *
   * @public
   */
  ExplicitHashKey?: string | undefined;

  /**
   * Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
   *
   * If the stream uses the `USER_PARTITION_KEY` record distribution strategy (the default), a partition key is required for each record. If the stream uses the `AUTO` record distribution strategy, the partition key is optional and any value you provide is ignored, along with any `ExplicitHashKey` you provide. In that case, Amazon Kinesis Data Streams distributes records across shards using service-managed algorithms. For more information, see `UpdateStreamRecordDistributionStrategy`.
   *
   * @public
   */
  PartitionKey?: string | undefined;
}

/**
 * A `PutRecords` request.
 *
 * @public
 */
export interface PutRecordsInput {
  /**
   * The records associated with the request.
   *
   * @public
   */
  Records: PutRecordsRequestEntry[] | undefined;

  /**
   * The stream name associated with the request.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Represents the result of an individual record from a `PutRecords` request. A record that is successfully added to a stream includes `SequenceNumber` and `ShardId` in the result. A record that fails to be added to the stream includes `ErrorCode` and `ErrorMessage` in the result.
 *
 * @public
 */
export interface PutRecordsResultEntry {
  /**
   * The sequence number for an individual record result.
   *
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * The shard ID for an individual record result.
   *
   * @public
   */
  ShardId?: string | undefined;

  /**
   * The error code for an individual record result. `ErrorCodes` can be either `ProvisionedThroughputExceededException` or `InternalFailure`.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message for an individual record result. An `ErrorCode` value of `ProvisionedThroughputExceededException` has an error message that includes the account ID, stream name, and shard ID. An `ErrorCode` value of `InternalFailure` has the error message `"Internal Service Failure"`.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * `PutRecords` results.
 *
 * @public
 */
export interface PutRecordsOutput {
  /**
   * The number of unsuccessfully processed records in a `PutRecords` request.
   *
   * @public
   */
  FailedRecordCount?: number | undefined;

  /**
   * An array of successfully and unsuccessfully processed record results. A record that is successfully added to a stream includes `SequenceNumber` and `ShardId` in the result. A record that fails to be added to a stream includes `ErrorCode` and `ErrorMessage` in the result.
   *
   * @public
   */
  Records: PutRecordsResultEntry[] | undefined;

  /**
   * The encryption type used on the records. This parameter can be one of the following values:
   *
   * - `NONE`: Do not encrypt the records.
   * - `KMS`: Use server-side encryption on the records using a customer-managed Amazon Web Services KMS key.
   *
   * @public
   */
  EncryptionType?: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the data stream or consumer.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * Details of the resource policy. It must include the identity of the principal and the actions allowed on this resource. This is formatted as a JSON string.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface RegisterStreamConsumerInput {
  /**
   * The ARN of the Kinesis data stream that you want to register the consumer with. For more info, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams).
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * For a given Kinesis data stream, each consumer must have a unique name. However, consumer names don't have to be unique across data streams.
   *
   * @public
   */
  ConsumerName: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * A set of up to 50 key-value pairs. A tag consists of a required key and an optional value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterStreamConsumerOutput {
  /**
   * An object that represents the details of the consumer you registered. When you register a consumer, it gets an ARN that is generated by Kinesis Data Streams.
   *
   * @public
   */
  Consumer: Consumer | undefined;
}

/**
 * Represents the input for `RemoveTagsFromStream`.
 *
 * @public
 */
export interface RemoveTagsFromStreamInput {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * A list of tag keys. Each corresponding tag is removed from the stream.
   *
   * @public
   */
  TagKeys: string[] | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents the input for `SplitShard`.
 *
 * @public
 */
export interface SplitShardInput {
  /**
   * The name of the stream for the shard split.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The shard ID of the shard to split.
   *
   * @public
   */
  ShardToSplit: string | undefined;

  /**
   * A hash key value for the starting hash key of one of the child shards created by the split. The hash key range for a given shard constitutes a set of ordered contiguous positive integers. The value for `NewStartingHashKey` must be in the range of hash keys being mapped into the shard. The `NewStartingHashKey` hash key value and all higher hash key values in hash key range are distributed to one of the child shards. All the lower hash key values in the range are distributed to the other child shard.
   *
   * @public
   */
  NewStartingHashKey: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface StartStreamEncryptionInput {
  /**
   * The name of the stream for which to start encrypting records.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The encryption type to use. The only valid value is `KMS`.
   *
   * @public
   */
  EncryptionType: EncryptionType | undefined;

  /**
   * The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias `aws/kinesis`.
   *
   * - Key ARN example: `arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012`
   * - Alias ARN example: `arn:aws:kms:us-east-1:123456789012:alias/MyAliasName`
   * - Globally unique key ID example: `12345678-1234-1234-1234-123456789012`
   * - Alias name example: `alias/MyAliasName`
   * - Master key owned by Kinesis Data Streams: `alias/aws/kinesis`
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface StopStreamEncryptionInput {
  /**
   * The name of the stream on which to stop encrypting records.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The encryption type. The only valid value is `KMS`.
   *
   * @public
   */
  EncryptionType: EncryptionType | undefined;

  /**
   * The GUID for the customer-managed Amazon Web Services KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias `aws/kinesis`.
   *
   * - Key ARN example: `arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012`
   * - Alias ARN example: `arn:aws:kms:us-east-1:123456789012:alias/MyAliasName`
   * - Globally unique key ID example: `12345678-1234-1234-1234-123456789012`
   * - Alias name example: `alias/MyAliasName`
   * - Master key owned by Kinesis Data Streams: `alias/aws/kinesis`
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * The starting position in the data stream from which to start streaming.
 *
 * @public
 */
export interface StartingPosition {
  /**
   * You can set the starting position to one of the following values:
   *
   * `AT_SEQUENCE_NUMBER`: Start streaming from the position denoted by the sequence number specified in the `SequenceNumber` field.
   *
   * `AFTER_SEQUENCE_NUMBER`: Start streaming right after the position denoted by the sequence number specified in the `SequenceNumber` field.
   *
   * `AT_TIMESTAMP`: Start streaming from the position denoted by the time stamp specified in the `Timestamp` field.
   *
   * `TRIM_HORIZON`: Start streaming at the last untrimmed record in the shard, which is the oldest data record in the shard.
   *
   * `LATEST`: Start streaming just after the most recent record in the shard, so that you always read the most recent data in the shard.
   *
   * @public
   */
  Type: ShardIteratorType | undefined;

  /**
   * The sequence number of the data record in the shard from which to start streaming. To specify a sequence number, set `StartingPosition` to `AT_SEQUENCE_NUMBER` or `AFTER_SEQUENCE_NUMBER`.
   *
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * The time stamp of the data record from which to start reading. To specify a time stamp, set `StartingPosition` to `Type AT_TIMESTAMP`. A time stamp is the Unix epoch date with precision in milliseconds. For example, `2016-04-04T19:58:46.480-00:00` or `1459799926.480`. If a record with this exact time stamp does not exist, records will be streamed from the next (later) record. If the time stamp is older than the current trim horizon, records will be streamed from the oldest untrimmed data record (`TRIM_HORIZON`).
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface SubscribeToShardInput {
  /**
   * For this parameter, use the value you obtained when you called RegisterStreamConsumer.
   *
   * @public
   */
  ConsumerARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The ID of the shard you want to subscribe to. To see a list of all the shards for a given stream, use ListShards.
   *
   * @public
   */
  ShardId: string | undefined;

  /**
   * The starting position in the data stream from which to start streaming.
   *
   * @public
   */
  StartingPosition: StartingPosition | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * After you call SubscribeToShard, Kinesis Data Streams sends events of this type over an HTTP/2 connection to your consumer.
 *
 * @public
 */
export interface SubscribeToShardEvent {
  /**
   * @public
   */
  Records: _Record[] | undefined;

  /**
   * Use this as `SequenceNumber` in the next call to SubscribeToShard, with `StartingPosition` set to `AT_SEQUENCE_NUMBER` or `AFTER_SEQUENCE_NUMBER`. Use `ContinuationSequenceNumber` for checkpointing because it captures your shard progress even when no data is written to the shard.
   *
   * @public
   */
  ContinuationSequenceNumber: string | undefined;

  /**
   * The number of milliseconds the read records are from the tip of the stream, indicating how far behind current time the consumer is. A value of zero indicates that record processing is caught up, and there are no new records to process at this moment.
   *
   * @public
   */
  MillisBehindLatest: number | undefined;

  /**
   * The list of the child shards of the current shard, returned only at the end of the current shard.
   *
   * @public
   */
  ChildShards?: ChildShard[] | undefined;
}

/**
 * This is a tagged union for all of the types of events an enhanced fan-out consumer can receive over HTTP/2 after a call to SubscribeToShard.
 *
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
   * After you call SubscribeToShard, Kinesis Data Streams sends events of this type to your consumer. For an example of how to handle these events, see [Enhanced Fan-Out Using the Kinesis Data Streams API](/streams/latest/dev/building-enhanced-consumers-api.html).
   *
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
   * The requested resource could not be found. The stream might not be specified correctly.
   *
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
   * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
   *
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
   * The request was rejected because the specified customer master key (CMK) isn't enabled.
   *
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
   * The request was rejected because the state of the specified resource isn't valid for this request. For more information, see [How Key State Affects Use of a Customer Master Key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
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
   * The ciphertext references a key that doesn't exist or that you don't have access to.
   *
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
   * The request was rejected because the specified entity or resource can't be found.
   *
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
   * The Amazon Web Services access key ID needs a subscription for the service.
   *
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
   * The request was denied due to request throttling. For more information about throttling, see [Limits](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
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
   * The processing of the request failed because of an unknown error, exception, or failure.
   *
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
   * The event stream that your consumer can use to read records from the shard.
   *
   * @public
   */
  EventStream: AsyncIterable<SubscribeToShardEventStream> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * An array of tags to be added to the Kinesis resource. A tag consists of a required key and an optional value. You can add up to 50 tags per resource.
   *
   * Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis resource to which to add tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * A list of tag key-value pairs. Existing tags of the resource whose keys are members of this list will be removed from the Kinesis resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis resource from which to remove tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * Represents the request parameters for configuring minimum throughput billing commitment.
 *
 * > **Note:**
 * >
 * > - Minimum throughput billing commitments provide cost savings on on-demand data streams in exchange for committing to a minimum level of throughput usage.
 * > - Commitments have a minimum duration of 24 hours that must be honored before they can be disabled.
 * > - If you attempt to disable a commitment before the minimum commitment period ends, the commitment will be scheduled for automatic disable at the earliest allowed end time.
 * > - You can cancel a pending disable by enabling the commitment again before the earliest allowed end time.
 *
 * @public
 */
export interface MinimumThroughputBillingCommitmentInput {
  /**
   * The desired status of the minimum throughput billing commitment.
   *
   * @public
   */
  Status: MinimumThroughputBillingCommitmentInputStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsInput {
  /**
   * Specifies the minimum throughput billing commitment configuration for your account.
   *
   * @public
   */
  MinimumThroughputBillingCommitment: MinimumThroughputBillingCommitmentInput | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsOutput {
  /**
   * The updated configuration of the minimum throughput billing commitment for your account.
   *
   * @public
   */
  MinimumThroughputBillingCommitment?: MinimumThroughputBillingCommitmentOutput | undefined;
}

/**
 * The updated configuration for a general purpose Amazon S3 destination. Used in UpdateChannel. Only `DataFreshnessInSeconds` can be updated.
 *
 * @public
 */
export interface S3DestinationUpdateInput {
  /**
   * The maximum age, in seconds, of undelivered data before the channel delivers it to the destination.
   *
   * @public
   */
  DataFreshnessInSeconds: number | undefined;
}

/**
 * The updated configuration for a streaming table destination. Used in UpdateChannel. Only `DataFreshnessInSeconds` can be updated.
 *
 * @public
 */
export interface S3TablesDestinationUpdateInput {
  /**
   * The maximum age, in seconds, of undelivered data before the channel delivers it to the destination.
   *
   * @public
   */
  DataFreshnessInSeconds: number | undefined;
}

/**
 * @public
 */
export interface UpdateChannelInput {
  /**
   * The Amazon Resource Name (ARN) of the channel to update.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * The updated configuration for a general purpose Amazon S3 destination. Specify this parameter when the channel delivers to a general purpose Amazon S3 bucket. Only `DataFreshnessInSeconds` can be updated.
   *
   * @public
   */
  S3DestinationConfiguration?: S3DestinationUpdateInput | undefined;

  /**
   * The updated configuration for a streaming table destination. Specify this parameter when the channel delivers to streaming tables on Apache Iceberg in Amazon S3 Tables. Only `DataFreshnessInSeconds` can be updated.
   *
   * @public
   */
  S3TablesDestinationConfiguration?: S3TablesDestinationUpdateInput | undefined;

  /**
   * The updated Amazon CloudWatch Logs configuration for the channel.
   *
   * @public
   */
  LoggingConfiguration?: ChannelLoggingUpdateInput | undefined;
}

/**
 * @public
 */
export interface UpdateChannelOutput {
  /**
   * The configuration and current status of the channel after the update, including its ARN, destination configuration, and lifecycle state. Immediately after the request, the state is `UPDATING`.
   *
   * @public
   */
  ChannelDescription: ChannelDescription | undefined;
}

/**
 * @public
 */
export interface UpdateMaxRecordSizeInput {
  /**
   * The Amazon Resource Name (ARN) of the stream for the `MaxRecordSize` update.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The maximum record size of a single record in KiB that you can write to, and read from a stream. Specify a value between 1024 and 10240 KiB (1 to 10 MiB). If you specify a value that is out of this range, `UpdateMaxRecordSize` sends back an `ValidationException` message.
   *
   * @public
   */
  MaxRecordSizeInKiB: number | undefined;
}

/**
 * @public
 */
export interface UpdateShardCountInput {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The new number of shards. This value has the following default limits. By default, you cannot do the following:
   *
   * - Set this value to more than double your current shard count for a stream.
   * - Set this value below half your current shard count for a stream.
   * - Set this value to more than 10000 shards in a stream (the default limit for shard count per stream is 10000 per account per region), unless you request a limit increase.
   * - Scale a stream with more than 10000 shards down unless you set this value to less than 10000 shards.
   *
   * @public
   */
  TargetShardCount: number | undefined;

  /**
   * The scaling type. Uniform scaling creates shards of equal size.
   *
   * @public
   */
  ScalingType: ScalingType | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateShardCountOutput {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The current number of shards.
   *
   * @public
   */
  CurrentShardCount?: number | undefined;

  /**
   * The updated number of shards.
   *
   * @public
   */
  TargetShardCount?: number | undefined;

  /**
   * The ARN of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamModeInput {
  /**
   * Specifies the ARN of the data stream whose capacity mode you want to update.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
   *
   * @public
   */
  StreamModeDetails: StreamModeDetails | undefined;

  /**
   * The target warm throughput in MB/s that the stream should be scaled to handle. This represents the throughput capacity that will be immediately available for write operations. This field is only valid when the stream mode is being updated to on-demand.
   *
   * @public
   */
  WarmThroughputMiBps?: number | undefined;
}

/**
 * @public
 */
export interface UpdateStreamRecordDistributionStrategyInput {
  /**
   * The Amazon Resource Name (ARN) of the stream to update.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The record distribution strategy to apply to the stream. Specify one of the following values:
   *
   * - `AUTO` – Amazon Kinesis Data Streams distributes records evenly across shards and ignores any partition key and `ExplicitHashKey` that producers supply.
   * - `USER_PARTITION_KEY` – Producers must supply a partition key, which Amazon Kinesis Data Streams uses to determine shard placement. This is the default.
   *
   * @public
   */
  RecordDistributionStrategy: RecordDistributionStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateStreamWarmThroughputInput {
  /**
   * The ARN of the stream to be updated.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The name of the stream to be updated.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * Not Implemented. Reserved for future use.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The target warm throughput in MB/s that the stream should be scaled to handle. This represents the throughput capacity that will be immediately available for write operations.
   *
   * @public
   */
  WarmThroughputMiBps: number | undefined;
}

/**
 * @public
 */
export interface UpdateStreamWarmThroughputOutput {
  /**
   * The ARN of the stream that was updated.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The name of the stream that was updated.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * Specifies the updated warm throughput configuration for your data stream.
   *
   * @public
   */
  WarmThroughput?: WarmThroughputObject | undefined;
}
