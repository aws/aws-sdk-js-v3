// smithy-typescript generated code
import type {
  CdcPropagateTags,
  CdcStatus,
  ClientSideTimestampsStatus,
  EncryptionType,
  KeyspaceStatus,
  PointInTimeRecoveryStatus,
  Rs,
  SortOrder,
  TableStatus,
  ThroughputMode,
  TimeToLiveStatus,
  TypeStatus,
  ViewType,
  WarmThroughputStatus,
} from "./enums";

/**
 * The auto scaling policy that scales a table based on the ratio of consumed to provisioned capacity.
 *
 * @public
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * Specifies if `scale-in` is enabled.
   *
   * When auto scaling automatically decreases capacity for a table, the table *scales in*. When scaling policies are set, they can't scale in the table lower than its minimum capacity.
   *
   * @public
   */
  disableScaleIn?: boolean | undefined;

  /**
   * Specifies a `scale-in` cool down period.
   *
   * A cooldown period in seconds between scaling activities that lets the table stabilize before another scaling activity starts.
   *
   * @public
   */
  scaleInCooldown?: number | undefined;

  /**
   * Specifies a scale out cool down period.
   *
   * A cooldown period in seconds between scaling activities that lets the table stabilize before another scaling activity starts.
   *
   * @public
   */
  scaleOutCooldown?: number | undefined;

  /**
   * Specifies the target value for the target tracking auto scaling policy.
   *
   * Amazon Keyspaces auto scaling scales up capacity automatically when traffic exceeds this target utilization rate, and then back down when it falls below the target. This ensures that the ratio of consumed capacity to provisioned capacity stays at or near this value. You define `targetValue` as a percentage. A `double` between 20 and 90.
   *
   * @public
   */
  targetValue: number | undefined;
}

/**
 * Amazon Keyspaces supports the `target tracking` auto scaling policy. With this policy, Amazon Keyspaces auto scaling ensures that the table's ratio of consumed to provisioned capacity stays at or near the target value that you specify. You define the target value as a percentage between 20 and 90.
 *
 * @public
 */
export interface AutoScalingPolicy {
  /**
   * Auto scaling scales up capacity automatically when traffic exceeds this target utilization rate, and then back down when it falls below the target. A `double` between 20 and 90.
   *
   * @public
   */
  targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | undefined;
}

/**
 * The optional auto scaling settings for a table with provisioned throughput capacity.
 *
 * To turn on auto scaling for a table in `throughputMode:PROVISIONED`, you must specify the following parameters.
 *
 * Configure the minimum and maximum capacity units. The auto scaling policy ensures that capacity never goes below the minimum or above the maximum range.
 *
 * - `minimumUnits`: The minimum level of throughput the table should always be ready to support. The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
 * - `maximumUnits`: The maximum level of throughput the table should always be ready to support. The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
 * - `scalingPolicy`: Amazon Keyspaces supports the `target tracking` scaling policy. The auto scaling target is the provisioned capacity of the table.
 *
 *   - `targetTrackingScalingPolicyConfiguration`: To define the target tracking policy, you must define the target value.
 *
 *     - `targetValue`: The target utilization rate of the table. Amazon Keyspaces auto scaling ensures that the ratio of consumed capacity to provisioned capacity stays at or near this value. You define `targetValue` as a percentage. A `double` between 20 and 90. (Required)
 *     - `disableScaleIn`: A `boolean` that specifies if `scale-in` is disabled or enabled for the table. This parameter is disabled by default. To turn on `scale-in`, set the `boolean` value to `FALSE`. This means that capacity for a table can be automatically scaled down on your behalf. (Optional)
 *     - `scaleInCooldown`: A cooldown period in seconds between scaling activities that lets the table stabilize before another scale in activity starts. If no value is provided, the default is 0. (Optional)
 *     - `scaleOutCooldown`: A cooldown period in seconds between scaling activities that lets the table stabilize before another scale out activity starts. If no value is provided, the default is 0. (Optional)
 *
 * For more information, see [Managing throughput capacity automatically with Amazon Keyspaces auto scaling](https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface AutoScalingSettings {
  /**
   * This optional parameter enables auto scaling for the table if set to `false`.
   *
   * @public
   */
  autoScalingDisabled?: boolean | undefined;

  /**
   * The minimum level of throughput the table should always be ready to support. The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
   *
   * @public
   */
  minimumUnits?: number | undefined;

  /**
   * Manage costs by specifying the maximum amount of throughput to provision. The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
   *
   * @public
   */
  maximumUnits?: number | undefined;

  /**
   * Amazon Keyspaces supports the `target tracking` auto scaling policy. With this policy, Amazon Keyspaces auto scaling ensures that the table's ratio of consumed to provisioned capacity stays at or near the target value that you specify. You define the target value as a percentage between 20 and 90.
   *
   * @public
   */
  scalingPolicy?: AutoScalingPolicy | undefined;
}

/**
 * The optional auto scaling capacity settings for a table in provisioned capacity mode.
 *
 * @public
 */
export interface AutoScalingSpecification {
  /**
   * The auto scaling settings for the table's write capacity.
   *
   * @public
   */
  writeCapacityAutoScaling?: AutoScalingSettings | undefined;

  /**
   * The auto scaling settings for the table's read capacity.
   *
   * @public
   */
  readCapacityAutoScaling?: AutoScalingSettings | undefined;
}

/**
 * Amazon Keyspaces has two read/write capacity modes for processing reads and writes on your tables:
 *
 * - On-demand (default)
 * - Provisioned
 *
 * The read/write capacity mode that you choose controls how you are charged for read and write throughput and how table throughput capacity is managed.
 *
 * For more information, see [Read/write capacity modes](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface CapacitySpecification {
  /**
   * The read/write throughput capacity mode for a table. The options are:
   *
   * - `throughputMode:PAY_PER_REQUEST` and
   * - `throughputMode:PROVISIONED` - Provisioned capacity mode requires `readCapacityUnits` and `writeCapacityUnits` as input.
   *
   * The default is `throughput_mode:PAY_PER_REQUEST`.
   *
   * For more information, see [Read/write capacity modes](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  throughputMode: ThroughputMode | undefined;

  /**
   * The throughput capacity specified for `read` operations defined in `read capacity units` `(RCUs)`.
   *
   * @public
   */
  readCapacityUnits?: number | undefined;

  /**
   * The throughput capacity specified for `write` operations defined in `write capacity units` `(WCUs)`.
   *
   * @public
   */
  writeCapacityUnits?: number | undefined;
}

/**
 * The read/write throughput capacity mode for a table. The options are:
 *
 * - `throughputMode:PAY_PER_REQUEST` and
 * - `throughputMode:PROVISIONED`.
 *
 * For more information, see [Read/write capacity modes](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface CapacitySpecificationSummary {
  /**
   * The read/write throughput capacity mode for a table. The options are:
   *
   * - `throughputMode:PAY_PER_REQUEST` and
   * - `throughputMode:PROVISIONED` - Provisioned capacity mode requires `readCapacityUnits` and `writeCapacityUnits` as input.
   *
   * The default is `throughput_mode:PAY_PER_REQUEST`.
   *
   * For more information, see [Read/write capacity modes](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  throughputMode: ThroughputMode | undefined;

  /**
   * The throughput capacity specified for `read` operations defined in `read capacity units` `(RCUs)`.
   *
   * @public
   */
  readCapacityUnits?: number | undefined;

  /**
   * The throughput capacity specified for `write` operations defined in `write capacity units` `(WCUs)`.
   *
   * @public
   */
  writeCapacityUnits?: number | undefined;

  /**
   * The timestamp of the last operation that changed the provisioned throughput capacity of a table.
   *
   * @public
   */
  lastUpdateToPayPerRequestTimestamp?: Date | undefined;
}

/**
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Amazon Keyspaces resource.
 *
 * Amazon Web Services-assigned tag names and values are automatically assigned the `aws:` prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix `user:` in the Cost Allocation Report. You cannot backdate the application of a tag.
 *
 * For more information, see [Adding tags and labels to Amazon Keyspaces resources](https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag. Tag keys are case sensitive. Each Amazon Keyspaces resource can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the tag. Tag values are case-sensitive and can be null.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The settings for the CDC stream of a table. For more information about CDC streams, see [Working with change data capture (CDC) streams in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/cdc.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface CdcSpecification {
  /**
   * The status of the CDC stream. You can enable or disable a stream for a table.
   *
   * @public
   */
  status: CdcStatus | undefined;

  /**
   * The view type specifies the changes Amazon Keyspaces records for each changed row in the stream. After you create the stream, you can't make changes to this selection.
   *
   * The options are:
   *
   * - `NEW_AND_OLD_IMAGES` - both versions of the row, before and after the change. This is the default.
   * - `NEW_IMAGE` - the version of the row after the change.
   * - `OLD_IMAGE` - the version of the row before the change.
   * - `KEYS_ONLY` - the partition and clustering keys of the row that was changed.
   *
   * @public
   */
  viewType?: ViewType | undefined;

  /**
   * The tags (key-value pairs) that you want to apply to the stream.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Specifies that the stream inherits the tags from the table.
   *
   * @public
   */
  propagateTags?: CdcPropagateTags | undefined;
}

/**
 * The settings of the CDC stream of the table. For more information about CDC streams, see [Working with change data capture (CDC) streams in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/cdc.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface CdcSpecificationSummary {
  /**
   * The status of the CDC stream. Specifies if the table has a CDC stream.
   *
   * @public
   */
  status: CdcStatus | undefined;

  /**
   * The view type specifies the changes Amazon Keyspaces records for each changed row in the stream. This setting can't be changed, after the stream has been created.
   *
   * The options are:
   *
   * - `NEW_AND_OLD_IMAGES` - both versions of the row, before and after the change. This is the default.
   * - `NEW_IMAGE` - the version of the row after the change.
   * - `OLD_IMAGE` - the version of the row before the change.
   * - `KEYS_ONLY` - the partition and clustering keys of the row that was changed.
   *
   * @public
   */
  viewType?: ViewType | undefined;
}

/**
 * The client-side timestamp setting of the table.
 *
 * For more information, see [How it works: Amazon Keyspaces client-side timestamps](https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps-how-it-works.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface ClientSideTimestamps {
  /**
   * Shows how to enable client-side timestamps settings for the specified table.
   *
   * @public
   */
  status: ClientSideTimestampsStatus | undefined;
}

/**
 * The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition.
 *
 * @public
 */
export interface ClusteringKey {
  /**
   * The name(s) of the clustering column(s).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Sets the ascendant (`ASC`) or descendant (`DESC`) order modifier.
   *
   * @public
   */
  orderBy: SortOrder | undefined;
}

/**
 * The names and data types of regular columns.
 *
 * @public
 */
export interface ColumnDefinition {
  /**
   * The name of the column.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the column. For a list of available data types, see [Data types](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  type: string | undefined;
}

/**
 * An optional comment that describes the table.
 *
 * @public
 */
export interface Comment {
  /**
   * An optional description of the table.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The replication specification of the keyspace includes:
 *
 * - `regionList` - the Amazon Web Services Regions where the keyspace is replicated in.
 * - `replicationStrategy` - the required value is `SINGLE_REGION` or `MULTI_REGION`.
 *
 * @public
 */
export interface ReplicationSpecification {
  /**
   * The `replicationStrategy` of a keyspace, the required value is `SINGLE_REGION` or `MULTI_REGION`.
   *
   * @public
   */
  replicationStrategy: Rs | undefined;

  /**
   * The `regionList` contains the Amazon Web Services Regions where the keyspace is replicated in.
   *
   * @public
   */
  regionList?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateKeyspaceRequest {
  /**
   * The name of the keyspace to be created.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * A list of key-value pair tags to be attached to the keyspace.
   *
   * For more information, see [Adding tags and labels to Amazon Keyspaces resources](https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The replication specification of the keyspace includes:
   *
   * - `replicationStrategy` - the required value is `SINGLE_REGION` or `MULTI_REGION`.
   * - `regionList` - if the `replicationStrategy` is `MULTI_REGION`, the `regionList` requires the current Region and at least one additional Amazon Web Services Region where the keyspace is going to be replicated in.
   *
   * @public
   */
  replicationSpecification?: ReplicationSpecification | undefined;
}

/**
 * @public
 */
export interface CreateKeyspaceResponse {
  /**
   * The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Amazon Keyspaces encrypts and decrypts the table data at rest transparently and integrates with Key Management Service for storing and managing the encryption key. You can choose one of the following KMS keys (KMS keys):
 *
 * - Amazon Web Services owned key - This is the default encryption type. The key is owned by Amazon Keyspaces (no additional charge).
 * - Customer managed key - This key is stored in your account and is created, owned, and managed by you. You have full control over the customer managed key (KMS charges apply).
 *
 * For more information about encryption at rest in Amazon Keyspaces, see [Encryption at rest](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * For more information about KMS, see [KMS management service concepts](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the *Key Management Service Developer Guide*.
 *
 * @public
 */
export interface EncryptionSpecification {
  /**
   * The encryption option specified for the table. You can choose one of the following KMS keys (KMS keys):
   *
   * - `type:AWS_OWNED_KMS_KEY` - This key is owned by Amazon Keyspaces.
   * - `type:CUSTOMER_MANAGED_KMS_KEY` - This key is stored in your account and is created, owned, and managed by you. This option requires the `kms_key_identifier` of the KMS key in Amazon Resource Name (ARN) format as input.
   *
   * The default is `type:AWS_OWNED_KMS_KEY`.
   *
   * For more information, see [Encryption at rest](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  type: EncryptionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key, for example `kms_key_identifier:ARN`.
   *
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * Point-in-time recovery (PITR) helps protect your Amazon Keyspaces tables from accidental write or delete operations by providing you continuous backups of your table data.
 *
 * For more information, see [Point-in-time recovery](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface PointInTimeRecovery {
  /**
   * The options are:
   *
   * - `status=ENABLED`
   * - `status=DISABLED`
   *
   * @public
   */
  status: PointInTimeRecoveryStatus | undefined;
}

/**
 * The Amazon Web Services Region specific settings of a multi-Region table.
 *
 * For a multi-Region table, you can configure the table's read capacity differently per Amazon Web Services Region. You can do this by configuring the following parameters.
 *
 * - `region`: The Region where these settings are applied. (Required)
 * - `readCapacityUnits`: The provisioned read capacity units. (Optional)
 * - `readCapacityAutoScaling`: The read capacity auto scaling settings for the table. (Optional)
 *
 * @public
 */
export interface ReplicaSpecification {
  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The provisioned read capacity units for the multi-Region table in the specified Amazon Web Services Region.
   *
   * @public
   */
  readCapacityUnits?: number | undefined;

  /**
   * The read capacity auto scaling settings for the multi-Region table in the specified Amazon Web Services Region.
   *
   * @public
   */
  readCapacityAutoScaling?: AutoScalingSettings | undefined;
}

/**
 * The partition key portion of the primary key is required and determines how Amazon Keyspaces stores the data. The partition key can be a single column, or it can be a compound value composed of two or more columns.
 *
 * @public
 */
export interface PartitionKey {
  /**
   * The name(s) of the partition key column(s).
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The static columns of the table. Static columns store values that are shared by all rows in the same partition.
 *
 * @public
 */
export interface StaticColumn {
  /**
   * The name of the static column.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Describes the schema of the table.
 *
 * @public
 */
export interface SchemaDefinition {
  /**
   * The regular columns of the table.
   *
   * @public
   */
  allColumns: ColumnDefinition[] | undefined;

  /**
   * The columns that are part of the partition key of the table .
   *
   * @public
   */
  partitionKeys: PartitionKey[] | undefined;

  /**
   * The columns that are part of the clustering key of the table.
   *
   * @public
   */
  clusteringKeys?: ClusteringKey[] | undefined;

  /**
   * The columns that have been defined as `STATIC`. Static columns store values that are shared by all rows in the same partition.
   *
   * @public
   */
  staticColumns?: StaticColumn[] | undefined;
}

/**
 * Enable custom Time to Live (TTL) settings for rows and columns without setting a TTL default for the specified table.
 *
 * For more information, see [Enabling TTL on tables](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_enabling) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface TimeToLive {
  /**
   * Shows how to enable custom Time to Live (TTL) settings for the specified table.
   *
   * @public
   */
  status: TimeToLiveStatus | undefined;
}

/**
 * Specifies the warm throughput settings for a table. Pre-warming a table by specifying warm throughput pre-provisions read and write capacity units to help avoid capacity exceeded exceptions and reduce latency when your table starts receiving traffic.
 *
 * For more information about pre-warming in Amazon Keyspaces, see [Pre-warm a table in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/warm-throughput.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @public
 */
export interface WarmThroughputSpecification {
  /**
   * The number of read capacity units per second to pre-warm the table for read capacity throughput. The minimum value is 1.
   *
   * @public
   */
  readUnitsPerSecond?: number | undefined;

  /**
   * The number of write capacity units per second to pre-warm the table for write capacity throughput. The minimum value is 1.
   *
   * @public
   */
  writeUnitsPerSecond?: number | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * The name of the keyspace that the table is going to be created in.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The `schemaDefinition` consists of the following parameters.
   *
   * For each column to be created:
   *
   * - `name` - The name of the column.
   * - `type` - An Amazon Keyspaces data type. For more information, see [Data types](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types) in the *Amazon Keyspaces Developer Guide*.
   *
   * The primary key of the table consists of the following columns:
   *
   * - `partitionKeys` - The partition key can be a single column, or it can be a compound value composed of two or more columns. The partition key portion of the primary key is required and determines how Amazon Keyspaces stores your data.
   * - `name` - The name of each partition key column.
   * - `clusteringKeys` - The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition.
   * - `name` - The name of the clustering column.
   * - `orderBy` - Sets the ascendant (`ASC`) or descendant (`DESC`) order modifier.
   *
   *   To define a column as static use `staticColumns` - Static columns store values that are shared by all rows in the same partition:
   * - `name` - The name of the column.
   * - `type` - An Amazon Keyspaces data type.
   *
   * @public
   */
  schemaDefinition: SchemaDefinition | undefined;

  /**
   * This parameter allows to enter a description of the table.
   *
   * @public
   */
  comment?: Comment | undefined;

  /**
   * Specifies the read/write throughput capacity mode for the table. The options are:
   *
   * - `throughputMode:PAY_PER_REQUEST` and
   * - `throughputMode:PROVISIONED` - Provisioned capacity mode requires `readCapacityUnits` and `writeCapacityUnits` as input.
   *
   * The default is `throughput_mode:PAY_PER_REQUEST`.
   *
   * For more information, see [Read/write capacity modes](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  capacitySpecification?: CapacitySpecification | undefined;

  /**
   * Specifies how the encryption key for encryption at rest is managed for the table. You can choose one of the following KMS key (KMS key):
   *
   * - `type:AWS_OWNED_KMS_KEY` - This key is owned by Amazon Keyspaces.
   * - `type:CUSTOMER_MANAGED_KMS_KEY` - This key is stored in your account and is created, owned, and managed by you. This option requires the `kms_key_identifier` of the KMS key in Amazon Resource Name (ARN) format as input.
   *
   * The default is `type:AWS_OWNED_KMS_KEY`.
   *
   * For more information, see [Encryption at rest](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  encryptionSpecification?: EncryptionSpecification | undefined;

  /**
   * Specifies if `pointInTimeRecovery` is enabled or disabled for the table. The options are:
   *
   * - `status=ENABLED`
   * - `status=DISABLED`
   *
   * If it's not specified, the default is `status=DISABLED`.
   *
   * For more information, see [Point-in-time recovery](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  pointInTimeRecovery?: PointInTimeRecovery | undefined;

  /**
   * Enables Time to Live custom settings for the table. The options are:
   *
   * - `status:enabled`
   * - `status:disabled`
   *
   * The default is `status:disabled`. After `ttl` is enabled, you can't disable it for the table.
   *
   * For more information, see [Expiring data by using Amazon Keyspaces Time to Live (TTL)](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  ttl?: TimeToLive | undefined;

  /**
   * The default Time to Live setting in seconds for the table.
   *
   * For more information, see [Setting the default TTL value for a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  defaultTimeToLive?: number | undefined;

  /**
   * A list of key-value pair tags to be attached to the resource.
   *
   * For more information, see [Adding tags and labels to Amazon Keyspaces resources](https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Enables client-side timestamps for the table. By default, the setting is disabled. You can enable client-side timestamps with the following option:
   *
   * - `status: "enabled"`
   *
   * Once client-side timestamps are enabled for a table, this setting cannot be disabled.
   *
   * @public
   */
  clientSideTimestamps?: ClientSideTimestamps | undefined;

  /**
   * The optional auto scaling settings for a table in provisioned capacity mode. Specifies if the service can manage throughput capacity automatically on your behalf.
   *
   * Auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see [Managing throughput capacity automatically with Amazon Keyspaces auto scaling](https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * By default, auto scaling is disabled for a table.
   *
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;

  /**
   * The optional Amazon Web Services Region specific settings of a multi-Region table. These settings overwrite the general settings of the table for the specified Region.
   *
   * For a multi-Region table in provisioned capacity mode, you can configure the table's read capacity differently for each Region's replica. The write capacity, however, remains synchronized between all replicas to ensure that there's enough capacity to replicate writes across all Regions. To define the read capacity for a table replica in a specific Region, you can do so by configuring the following parameters.
   *
   * - `region`: The Region where these settings are applied. (Required)
   * - `readCapacityUnits`: The provisioned read capacity units. (Optional)
   * - `readCapacityAutoScaling`: The read capacity auto scaling settings for the table. (Optional)
   *
   * @public
   */
  replicaSpecifications?: ReplicaSpecification[] | undefined;

  /**
   * The CDC stream settings of the table.
   *
   * @public
   */
  cdcSpecification?: CdcSpecification | undefined;

  /**
   * Specifies the warm throughput settings for the table. Pre-warming a table helps you avoid capacity exceeded exceptions by pre-provisioning read and write capacity units to reduce cold start latency when your table receives traffic.
   *
   * For more information about pre-warming in Amazon Keyspaces, see [Pre-warm a table in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/warm-throughput.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  warmThroughputSpecification?: WarmThroughputSpecification | undefined;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * The unique identifier of the table in the format of an Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * A field definition consists out of a name and a type.
 *
 * @public
 */
export interface FieldDefinition {
  /**
   * The identifier.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Any supported Cassandra data type, including collections and other user-defined types that are contained in the same keyspace.
   *
   * For more information, see [Cassandra data type support](https://docs.aws.amazon.com/keyspaces/latest/devguide/cassandra-apis.html#cassandra-data-type) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  type: string | undefined;
}

/**
 * @public
 */
export interface CreateTypeRequest {
  /**
   * The name of the keyspace.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the user-defined type.
   *
   * UDT names must contain 48 characters or less, must begin with an alphabetic character, and can only contain alpha-numeric characters and underscores. Amazon Keyspaces converts upper case characters automatically into lower case characters.
   *
   * Alternatively, you can declare a UDT name in double quotes. When declaring a UDT name inside double quotes, Amazon Keyspaces preserves upper casing and allows special characters.
   *
   * You can also use double quotes as part of the name when you create the UDT, but you must escape each double quote character with an additional double quote character.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The field definitions, consisting of names and types, that define this type.
   *
   * @public
   */
  fieldDefinitions: FieldDefinition[] | undefined;
}

/**
 * @public
 */
export interface CreateTypeResponse {
  /**
   * The unique identifier of the keyspace that contains the new type in the format of an Amazon Resource Name (ARN).
   *
   * @public
   */
  keyspaceArn: string | undefined;

  /**
   * The formatted name of the user-defined type that was created. Note that Amazon Keyspaces requires the formatted name of the type for other operations, for example `GetType`.
   *
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyspaceRequest {
  /**
   * The name of the keyspace to be deleted.
   *
   * @public
   */
  keyspaceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyspaceResponse {}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * The name of the keyspace of the to be deleted table.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table to be deleted.
   *
   * @public
   */
  tableName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableResponse {}

/**
 * @public
 */
export interface DeleteTypeRequest {
  /**
   * The name of the keyspace of the to be deleted type.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the type to be deleted.
   *
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTypeResponse {
  /**
   * The unique identifier of the keyspace from which the type was deleted in the format of an Amazon Resource Name (ARN).
   *
   * @public
   */
  keyspaceArn: string | undefined;

  /**
   * The name of the type that was deleted.
   *
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 */
export interface GetKeyspaceRequest {
  /**
   * The name of the keyspace.
   *
   * @public
   */
  keyspaceName: string | undefined;
}

/**
 * This shows the summary status of the keyspace after a new Amazon Web Services Region was added.
 *
 * @public
 */
export interface ReplicationGroupStatus {
  /**
   * The name of the Region that was added to the keyspace.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The status of the keyspace.
   *
   * @public
   */
  keyspaceStatus: KeyspaceStatus | undefined;

  /**
   * This shows the replication progress of tables in the keyspace. The value is expressed as a percentage of the newly replicated tables with status `Active` compared to the total number of tables in the keyspace.
   *
   * @public
   */
  tablesReplicationProgress?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyspaceResponse {
  /**
   * The name of the keyspace.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * Returns the ARN of the keyspace.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Returns the replication strategy of the keyspace. The options are `SINGLE_REGION` or `MULTI_REGION`.
   *
   * @public
   */
  replicationStrategy: Rs | undefined;

  /**
   * If the `replicationStrategy` of the keyspace is `MULTI_REGION`, a list of replication Regions is returned.
   *
   * @public
   */
  replicationRegions?: string[] | undefined;

  /**
   * A list of all Regions the keyspace is replicated in after the update keyspace operation and their status.
   *
   * @public
   */
  replicationGroupStatuses?: ReplicationGroupStatus[] | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * The name of the keyspace that the table is stored in.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName: string | undefined;
}

/**
 * The point-in-time recovery status of the specified table.
 *
 * @public
 */
export interface PointInTimeRecoverySummary {
  /**
   * Shows if point-in-time recovery is enabled or disabled for the specified table.
   *
   * @public
   */
  status: PointInTimeRecoveryStatus | undefined;

  /**
   * Specifies the earliest possible restore point of the table in ISO 8601 format.
   *
   * @public
   */
  earliestRestorableTimestamp?: Date | undefined;
}

/**
 * Contains the current warm throughput settings for a table, including the configured capacity units and the current status of the warm throughput configuration.
 *
 * @public
 */
export interface WarmThroughputSpecificationSummary {
  /**
   * The number of read capacity units per second currently configured for warm throughput.
   *
   * @public
   */
  readUnitsPerSecond: number | undefined;

  /**
   * The number of write capacity units per second currently configured for warm throughput.
   *
   * @public
   */
  writeUnitsPerSecond: number | undefined;

  /**
   * The current status of the warm throughput configuration. Valid values are `AVAILABLE` when the configuration is active, and `UPDATING` when changes are being applied.
   *
   * @public
   */
  status: WarmThroughputStatus | undefined;
}

/**
 * The Region-specific settings of a multi-Region table in the specified Amazon Web Services Region.
 *
 * If the multi-Region table is using provisioned capacity and has optional auto scaling policies configured, note that the Region specific summary returns both read and write capacity settings. But only Region specific read capacity settings can be configured for a multi-Region table. In a multi-Region table, your write capacity units will be synced across all Amazon Web Services Regions to ensure that there is enough capacity to replicate write events across Regions.
 *
 * @public
 */
export interface ReplicaSpecificationSummary {
  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The status of the multi-Region table in the specified Amazon Web Services Region.
   *
   * @public
   */
  status?: TableStatus | undefined;

  /**
   * The read/write throughput capacity mode for a table. The options are:
   *
   * - `throughputMode:PAY_PER_REQUEST` and
   * - `throughputMode:PROVISIONED`.
   *
   * For more information, see [Read/write capacity modes](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  capacitySpecification?: CapacitySpecificationSummary | undefined;

  /**
   * The warm throughput settings for this replica, including the current status and configured read and write capacity units.
   *
   * @public
   */
  warmThroughputSpecification?: WarmThroughputSpecificationSummary | undefined;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * The name of the keyspace that the specified table is stored in.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the specified table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the specified table.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The creation timestamp of the specified table.
   *
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * The current status of the specified table.
   *
   * @public
   */
  status?: TableStatus | undefined;

  /**
   * The schema definition of the specified table.
   *
   * @public
   */
  schemaDefinition?: SchemaDefinition | undefined;

  /**
   * The read/write throughput capacity mode for a table. The options are:
   *
   * - `throughputMode:PAY_PER_REQUEST`
   * - `throughputMode:PROVISIONED`
   *
   * @public
   */
  capacitySpecification?: CapacitySpecificationSummary | undefined;

  /**
   * The encryption settings of the specified table.
   *
   * @public
   */
  encryptionSpecification?: EncryptionSpecification | undefined;

  /**
   * The point-in-time recovery status of the specified table.
   *
   * @public
   */
  pointInTimeRecovery?: PointInTimeRecoverySummary | undefined;

  /**
   * The custom Time to Live settings of the specified table.
   *
   * @public
   */
  ttl?: TimeToLive | undefined;

  /**
   * The default Time to Live settings in seconds of the specified table.
   *
   * @public
   */
  defaultTimeToLive?: number | undefined;

  /**
   * The the description of the specified table.
   *
   * @public
   */
  comment?: Comment | undefined;

  /**
   * The client-side timestamps setting of the table.
   *
   * @public
   */
  clientSideTimestamps?: ClientSideTimestamps | undefined;

  /**
   * Returns the Amazon Web Services Region specific settings of all Regions a multi-Region table is replicated in.
   *
   * @public
   */
  replicaSpecifications?: ReplicaSpecificationSummary[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  latestStreamArn?: string | undefined;

  /**
   * The CDC stream settings of the table.
   *
   * @public
   */
  cdcSpecification?: CdcSpecificationSummary | undefined;

  /**
   * The warm throughput settings for the table, including the current status and configured read and write capacity units.
   *
   * @public
   */
  warmThroughputSpecification?: WarmThroughputSpecificationSummary | undefined;
}

/**
 * @public
 */
export interface GetTableAutoScalingSettingsRequest {
  /**
   * The name of the keyspace.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName: string | undefined;
}

/**
 * The auto scaling settings of a multi-Region table in the specified Amazon Web Services Region.
 *
 * @public
 */
export interface ReplicaAutoScalingSpecification {
  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The auto scaling settings for a multi-Region table in the specified Amazon Web Services Region.
   *
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;
}

/**
 * @public
 */
export interface GetTableAutoScalingSettingsResponse {
  /**
   * The name of the keyspace.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The auto scaling settings of the table.
   *
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;

  /**
   * The Amazon Web Services Region specific settings of a multi-Region table. Returns the settings for all Regions the table is replicated in.
   *
   * @public
   */
  replicaSpecifications?: ReplicaAutoScalingSpecification[] | undefined;
}

/**
 * @public
 */
export interface GetTypeRequest {
  /**
   * The name of the keyspace that contains this type.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The formatted name of the type. For example, if the name of the type was created without double quotes, Amazon Keyspaces saved the name in lower-case characters. If the name was created in double quotes, you must use double quotes to specify the type name.
   *
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 */
export interface GetTypeResponse {
  /**
   * The name of the keyspace that contains this type.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the type.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The names and types that define this type.
   *
   * @public
   */
  fieldDefinitions?: FieldDefinition[] | undefined;

  /**
   * The timestamp that shows when this type was last modified.
   *
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * The status of this type.
   *
   * @public
   */
  status?: TypeStatus | undefined;

  /**
   * The tables that use this type.
   *
   * @public
   */
  directReferringTables?: string[] | undefined;

  /**
   * The types that use this type.
   *
   * @public
   */
  directParentTypes?: string[] | undefined;

  /**
   * The level of nesting implemented for this type.
   *
   * @public
   */
  maxNestingDepth?: number | undefined;

  /**
   * The unique identifier of the keyspace that contains this type in the format of an Amazon Resource Name (ARN).
   *
   * @public
   */
  keyspaceArn: string | undefined;
}

/**
 * @public
 */
export interface ListKeyspacesRequest {
  /**
   * The pagination token. To resume pagination, provide the `NextToken` value as argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of keyspaces to return in the output. If the total number of keyspaces available is more than the value specified, a `NextToken` is provided in the output. To resume pagination, provide the `NextToken` value as an argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents the properties of a keyspace.
 *
 * @public
 */
export interface KeyspaceSummary {
  /**
   * The name of the keyspace.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * This property specifies if a keyspace is a single Region keyspace or a multi-Region keyspace. The available values are `SINGLE_REGION` or `MULTI_REGION`.
   *
   * @public
   */
  replicationStrategy: Rs | undefined;

  /**
   * If the `replicationStrategy` of the keyspace is `MULTI_REGION`, a list of replication Regions is returned.
   *
   * @public
   */
  replicationRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListKeyspacesResponse {
  /**
   * A token to specify where to start paginating. This is the `NextToken` from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of keyspaces.
   *
   * @public
   */
  keyspaces: KeyspaceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * The pagination token. To resume pagination, provide the `NextToken` value as an argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of tables to return in the output. If the total number of tables available is more than the value specified, a `NextToken` is provided in the output. To resume pagination, provide the `NextToken` value as an argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the keyspace.
   *
   * @public
   */
  keyspaceName: string | undefined;
}

/**
 * Returns the name of the specified table, the keyspace it is stored in, and the unique identifier in the format of an Amazon Resource Name (ARN).
 *
 * @public
 */
export interface TableSummary {
  /**
   * The name of the keyspace that the table is stored in.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * The unique identifier of the table in the format of an Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * A token to specify where to start paginating. This is the `NextToken` from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of tables.
   *
   * @public
   */
  tables?: TableSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Keyspaces resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The pagination token. To resume pagination, provide the `NextToken` value as argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of tags to return in the output. If the total number of tags available is more than the value specified, a `NextToken` is provided in the output. To resume pagination, provide the `NextToken` value as an argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A token to specify where to start paginating. This is the `NextToken` from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTypesRequest {
  /**
   * The pagination token. To resume pagination, provide the `NextToken` value as an argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The total number of types to return in the output. If the total number of types available is more than the value specified, a `NextToken` is provided in the output. To resume pagination, provide the `NextToken` value as an argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the keyspace that contains the listed types.
   *
   * @public
   */
  keyspaceName: string | undefined;
}

/**
 * @public
 */
export interface ListTypesResponse {
  /**
   * The pagination token. To resume pagination, provide the `NextToken` value as an argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of types contained in the specified keyspace.
   *
   * @public
   */
  types: string[] | undefined;
}

/**
 * @public
 */
export interface RestoreTableRequest {
  /**
   * The keyspace name of the source table.
   *
   * @public
   */
  sourceKeyspaceName: string | undefined;

  /**
   * The name of the source table.
   *
   * @public
   */
  sourceTableName: string | undefined;

  /**
   * The name of the target keyspace.
   *
   * @public
   */
  targetKeyspaceName: string | undefined;

  /**
   * The name of the target table.
   *
   * @public
   */
  targetTableName: string | undefined;

  /**
   * The restore timestamp in ISO 8601 format.
   *
   * @public
   */
  restoreTimestamp?: Date | undefined;

  /**
   * Specifies the read/write throughput capacity mode for the target table. The options are:
   *
   * - `throughputMode:PAY_PER_REQUEST`
   * - `throughputMode:PROVISIONED` - Provisioned capacity mode requires `readCapacityUnits` and `writeCapacityUnits` as input.
   *
   * The default is `throughput_mode:PAY_PER_REQUEST`.
   *
   * For more information, see [Read/write capacity modes](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  capacitySpecificationOverride?: CapacitySpecification | undefined;

  /**
   * Specifies the encryption settings for the target table. You can choose one of the following KMS key (KMS key):
   *
   * - `type:AWS_OWNED_KMS_KEY` - This key is owned by Amazon Keyspaces.
   * - `type:CUSTOMER_MANAGED_KMS_KEY` - This key is stored in your account and is created, owned, and managed by you. This option requires the `kms_key_identifier` of the KMS key in Amazon Resource Name (ARN) format as input.
   *
   * The default is `type:AWS_OWNED_KMS_KEY`.
   *
   * For more information, see [Encryption at rest](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  encryptionSpecificationOverride?: EncryptionSpecification | undefined;

  /**
   * Specifies the `pointInTimeRecovery` settings for the target table. The options are:
   *
   * - `status=ENABLED`
   * - `status=DISABLED`
   *
   * If it's not specified, the default is `status=DISABLED`.
   *
   * For more information, see [Point-in-time recovery](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  pointInTimeRecoveryOverride?: PointInTimeRecovery | undefined;

  /**
   * A list of key-value pair tags to be attached to the restored table.
   *
   * For more information, see [Adding tags and labels to Amazon Keyspaces resources](https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  tagsOverride?: Tag[] | undefined;

  /**
   * The optional auto scaling settings for the restored table in provisioned capacity mode. Specifies if the service can manage throughput capacity of a provisioned table automatically on your behalf. Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic.
   *
   * For more information, see [Managing throughput capacity automatically with Amazon Keyspaces auto scaling](https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;

  /**
   * The optional Region specific settings of a multi-Regional table.
   *
   * @public
   */
  replicaSpecifications?: ReplicaSpecification[] | undefined;
}

/**
 * @public
 */
export interface RestoreTableResponse {
  /**
   * The Amazon Resource Name (ARN) of the restored table.
   *
   * @public
   */
  restoredTableARN: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Keyspaces resource to which to add tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to be assigned to the Amazon Keyspaces resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Keyspaces resource that the tags will be removed from. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of existing tags to be removed from the Amazon Keyspaces resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateKeyspaceRequest {
  /**
   * The name of the keyspace.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The replication specification of the keyspace includes:
   *
   * - `regionList` - the Amazon Web Services Regions where the keyspace is replicated in.
   * - `replicationStrategy` - the required value is `SINGLE_REGION` or `MULTI_REGION`.
   *
   * @public
   */
  replicationSpecification: ReplicationSpecification | undefined;

  /**
   * The client-side timestamp setting of the table.
   *
   * For more information, see [How it works: Amazon Keyspaces client-side timestamps](https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps-how-it-works.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  clientSideTimestamps?: ClientSideTimestamps | undefined;
}

/**
 * @public
 */
export interface UpdateKeyspaceResponse {
  /**
   * The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateTableRequest {
  /**
   * The name of the keyspace the specified table is stored in.
   *
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  tableName: string | undefined;

  /**
   * For each column to be added to the specified table:
   *
   * - `name` - The name of the column.
   * - `type` - An Amazon Keyspaces data type. For more information, see [Data types](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  addColumns?: ColumnDefinition[] | undefined;

  /**
   * Modifies the read/write throughput capacity mode for the table. The options are:
   *
   * - `throughputMode:PAY_PER_REQUEST` and
   * - `throughputMode:PROVISIONED` - Provisioned capacity mode requires `readCapacityUnits` and `writeCapacityUnits` as input.
   *
   * The default is `throughput_mode:PAY_PER_REQUEST`.
   *
   * For more information, see [Read/write capacity modes](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  capacitySpecification?: CapacitySpecification | undefined;

  /**
   * Modifies the encryption settings of the table. You can choose one of the following KMS key (KMS key):
   *
   * - `type:AWS_OWNED_KMS_KEY` - This key is owned by Amazon Keyspaces.
   * - `type:CUSTOMER_MANAGED_KMS_KEY` - This key is stored in your account and is created, owned, and managed by you. This option requires the `kms_key_identifier` of the KMS key in Amazon Resource Name (ARN) format as input.
   *
   * The default is `AWS_OWNED_KMS_KEY`.
   *
   * For more information, see [Encryption at rest](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  encryptionSpecification?: EncryptionSpecification | undefined;

  /**
   * Modifies the `pointInTimeRecovery` settings of the table. The options are:
   *
   * - `status=ENABLED`
   * - `status=DISABLED`
   *
   * If it's not specified, the default is `status=DISABLED`.
   *
   * For more information, see [Point-in-time recovery](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  pointInTimeRecovery?: PointInTimeRecovery | undefined;

  /**
   * Modifies Time to Live custom settings for the table. The options are:
   *
   * - `status:enabled`
   * - `status:disabled`
   *
   * The default is `status:disabled`. After `ttl` is enabled, you can't disable it for the table.
   *
   * For more information, see [Expiring data by using Amazon Keyspaces Time to Live (TTL)](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  ttl?: TimeToLive | undefined;

  /**
   * The default Time to Live setting in seconds for the table.
   *
   * For more information, see [Setting the default TTL value for a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  defaultTimeToLive?: number | undefined;

  /**
   * Enables client-side timestamps for the table. By default, the setting is disabled. You can enable client-side timestamps with the following option:
   *
   * - `status: "enabled"`
   *
   * Once client-side timestamps are enabled for a table, this setting cannot be disabled.
   *
   * @public
   */
  clientSideTimestamps?: ClientSideTimestamps | undefined;

  /**
   * The optional auto scaling settings to update for a table in provisioned capacity mode. Specifies if the service can manage throughput capacity of a provisioned table automatically on your behalf. Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic.
   *
   * If auto scaling is already enabled for the table, you can use `UpdateTable` to update the minimum and maximum values or the auto scaling policy settings independently.
   *
   * For more information, see [Managing throughput capacity automatically with Amazon Keyspaces auto scaling](https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html) in the *Amazon Keyspaces Developer Guide*.
   *
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;

  /**
   * The Region specific settings of a multi-Regional table.
   *
   * @public
   */
  replicaSpecifications?: ReplicaSpecification[] | undefined;

  /**
   * The CDC stream settings of the table.
   *
   * @public
   */
  cdcSpecification?: CdcSpecification | undefined;

  /**
   * Modifies the warm throughput settings for the table. You can update the read and write capacity units to adjust the pre-provisioned throughput.
   *
   * @public
   */
  warmThroughputSpecification?: WarmThroughputSpecification | undefined;
}

/**
 * @public
 */
export interface UpdateTableResponse {
  /**
   * The Amazon Resource Name (ARN) of the modified table.
   *
   * @public
   */
  resourceArn: string | undefined;
}
