// smithy-typescript generated code
import type {
  ApproximateCreationDateTimePrecision,
  AttributeAction,
  BackupStatus,
  BackupType,
  BackupTypeFilter,
  BatchStatementErrorCodeEnum,
  BillingMode,
  ComparisonOperator,
  ConditionalOperator,
  ContinuousBackupsStatus,
  ContributorInsightsAction,
  ContributorInsightsMode,
  ContributorInsightsStatus,
  DestinationStatus,
  DisassociationMode,
  ExportFormat,
  ExportStatus,
  ExportType,
  ExportViewType,
  GlobalTableSettingsReplicationMode,
  GlobalTableStatus,
  ImportStatus,
  IndexStatus,
  InputCompressionType,
  InputFormat,
  KeyType,
  MultiRegionConsistency,
  PointInTimeRecoveryStatus,
  ProjectionType,
  ReplicaStatus,
  ReturnConsumedCapacity,
  ReturnItemCollectionMetrics,
  ReturnValue,
  ReturnValuesOnConditionCheckFailure,
  S3SseAlgorithm,
  ScalarAttributeType,
  SearchSchemaElementType,
  Select,
  SSEStatus,
  SSEType,
  StreamViewType,
  TableClass,
  TableStatus,
  TimeToLiveStatus,
  VectorDistanceFunction,
  WitnessStatus,
} from "./enums";

/**
 * Contains details of a table archival operation.
 *
 * @public
 */
export interface ArchivalSummary {
  /**
   * The date and time when table archival was initiated by DynamoDB, in UNIX epoch time format.
   *
   * @public
   */
  ArchivalDateTime?: Date | undefined;

  /**
   * The reason DynamoDB archived the table. Currently, the only possible value is:
   *
   * - `INACCESSIBLE_ENCRYPTION_CREDENTIALS` - The table was archived due to the table's KMS key being inaccessible for more than seven days. An On-Demand backup was created at the archival time.
   *
   * @public
   */
  ArchivalReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup the table was archived to, when applicable in the archival reason. If you wish to restore this backup to the same table name, you will need to delete the original table.
   *
   * @public
   */
  ArchivalBackupArn?: string | undefined;
}

/**
 * Represents an attribute for describing the schema for the table and indexes.
 *
 * @public
 */
export interface AttributeDefinition {
  /**
   * A name for the attribute.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The data type for the attribute, where:
   *
   * - `S` - the attribute is of type String
   * - `N` - the attribute is of type Number
   * - `B` - the attribute is of type Binary
   *
   * @public
   */
  AttributeType: ScalarAttributeType | undefined;
}

/**
 * Represents the properties of a target tracking scaling policy.
 *
 * @public
 */
export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
  /**
   * Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.
   *
   * @public
   */
  DisableScaleIn?: boolean | undefined;

  /**
   * The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. The cooldown period is used to block subsequent scale in requests until it has expired. You should scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, application auto scaling scales out your scalable target immediately.
   *
   * @public
   */
  ScaleInCooldown?: number | undefined;

  /**
   * The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. You should continuously (but not excessively) scale out.
   *
   * @public
   */
  ScaleOutCooldown?: number | undefined;

  /**
   * The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
   *
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * Represents the properties of the scaling policy.
 *
 * @public
 */
export interface AutoScalingPolicyDescription {
  /**
   * The name of the scaling policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * Represents a target tracking scaling policy configuration.
   *
   * @public
   */
  TargetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription | undefined;
}

/**
 * Represents the settings of a target tracking scaling policy that will be modified.
 *
 * @public
 */
export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
  /**
   * Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.
   *
   * @public
   */
  DisableScaleIn?: boolean | undefined;

  /**
   * The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. The cooldown period is used to block subsequent scale in requests until it has expired. You should scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, application auto scaling scales out your scalable target immediately.
   *
   * @public
   */
  ScaleInCooldown?: number | undefined;

  /**
   * The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. You should continuously (but not excessively) scale out.
   *
   * @public
   */
  ScaleOutCooldown?: number | undefined;

  /**
   * The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
   *
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * Represents the auto scaling policy to be modified.
 *
 * @public
 */
export interface AutoScalingPolicyUpdate {
  /**
   * The name of the scaling policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * Represents a target tracking scaling policy configuration.
   *
   * @public
   */
  TargetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate | undefined;
}

/**
 * Represents the auto scaling settings for a global table or global secondary index.
 *
 * @public
 */
export interface AutoScalingSettingsDescription {
  /**
   * The minimum capacity units that a global table or global secondary index should be scaled down to.
   *
   * @public
   */
  MinimumUnits?: number | undefined;

  /**
   * The maximum capacity units that a global table or global secondary index should be scaled up to.
   *
   * @public
   */
  MaximumUnits?: number | undefined;

  /**
   * Disabled auto scaling for this global table or global secondary index.
   *
   * @public
   */
  AutoScalingDisabled?: boolean | undefined;

  /**
   * Role ARN used for configuring the auto scaling policy.
   *
   * @public
   */
  AutoScalingRoleArn?: string | undefined;

  /**
   * Information about the scaling policies.
   *
   * @public
   */
  ScalingPolicies?: AutoScalingPolicyDescription[] | undefined;
}

/**
 * Represents the auto scaling settings to be modified for a global table or global secondary index.
 *
 * @public
 */
export interface AutoScalingSettingsUpdate {
  /**
   * The minimum capacity units that a global table or global secondary index should be scaled down to.
   *
   * @public
   */
  MinimumUnits?: number | undefined;

  /**
   * The maximum capacity units that a global table or global secondary index should be scaled up to.
   *
   * @public
   */
  MaximumUnits?: number | undefined;

  /**
   * Disabled auto scaling for this global table or global secondary index.
   *
   * @public
   */
  AutoScalingDisabled?: boolean | undefined;

  /**
   * Role ARN used for configuring auto scaling policy.
   *
   * @public
   */
  AutoScalingRoleArn?: string | undefined;

  /**
   * The scaling policy to apply for scaling target global table or global secondary index capacity units.
   *
   * @public
   */
  ScalingPolicyUpdate?: AutoScalingPolicyUpdate | undefined;
}

/**
 * Contains the details of the backup created for the table.
 *
 * @public
 */
export interface BackupDetails {
  /**
   * ARN associated with the backup.
   *
   * @public
   */
  BackupArn: string | undefined;

  /**
   * Name of the requested backup.
   *
   * @public
   */
  BackupName: string | undefined;

  /**
   * Size of the backup in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  BackupSizeBytes?: number | undefined;

  /**
   * Backup can be in one of the following states: CREATING, ACTIVE, DELETED.
   *
   * @public
   */
  BackupStatus: BackupStatus | undefined;

  /**
   * BackupType:
   *
   * - `USER` - You create and manage these using the on-demand backup feature.
   * - `SYSTEM` - If you delete a table with point-in-time recovery enabled, a `SYSTEM` backup is automatically created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted table to the state it was in just before the point of deletion.
   * - `AWS_BACKUP` - On-demand backup created by you from Backup service.
   *
   * @public
   */
  BackupType: BackupType | undefined;

  /**
   * Time at which the backup was created. This is the request time of the backup.
   *
   * @public
   */
  BackupCreationDateTime: Date | undefined;

  /**
   * Time at which the automatic on-demand backup created by DynamoDB will expire. This `SYSTEM` on-demand backup expires automatically 35 days after its creation.
   *
   * @public
   */
  BackupExpiryDateTime?: Date | undefined;
}

/**
 * Represents *a single element* of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
 *
 * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
 *
 * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
 *
 * @public
 */
export interface KeySchemaElement {
  /**
   * The name of a key attribute.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The role that this key attribute will assume:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * @public
   */
  KeyType: KeyType | undefined;
}

/**
 * Sets the maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
 *
 * @public
 */
export interface OnDemandThroughput {
  /**
   * Maximum number of read request units for the specified table.
   *
   * To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.
   *
   * @public
   */
  MaxReadRequestUnits?: number | undefined;

  /**
   * Maximum number of write request units for the specified table.
   *
   * To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.
   *
   * @public
   */
  MaxWriteRequestUnits?: number | undefined;
}

/**
 * Represents the provisioned throughput settings for the specified global secondary index. You must use `ProvisionedThroughput` or `OnDemandThroughput` based on your table’s capacity mode.
 *
 * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
 *
 * @public
 */
export interface ProvisionedThroughput {
  /**
   * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
   *
   * @public
   */
  ReadCapacityUnits: number | undefined;

  /**
   * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
   *
   * @public
   */
  WriteCapacityUnits: number | undefined;
}

/**
 * Contains the details of the table when the backup was created.
 *
 * @public
 */
export interface SourceTableDetails {
  /**
   * The name of the table for which the backup was created.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Unique identifier for the table for which the backup was created.
   *
   * @public
   */
  TableId: string | undefined;

  /**
   * ARN of the table for which backup was created.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * Size of the table in bytes. Note that this is an approximate value.
   *
   * @public
   */
  TableSizeBytes?: number | undefined;

  /**
   * Schema of the table.
   *
   * @public
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * Time when the source table was created.
   *
   * @public
   */
  TableCreationDateTime: Date | undefined;

  /**
   * Read IOPs and Write IOPS on the table when the backup was created.
   *
   * @public
   */
  ProvisionedThroughput: ProvisionedThroughput | undefined;

  /**
   * Sets the maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * Number of items in the table. Note that this is an approximate value.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.
   *
   * - `PROVISIONED` - Sets the read/write capacity mode to `PROVISIONED`. We recommend using `PROVISIONED` for predictable workloads.
   * - `PAY_PER_REQUEST` - Sets the read/write capacity mode to `PAY_PER_REQUEST`. We recommend using `PAY_PER_REQUEST` for unpredictable workloads.
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;
}

/**
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
 *
 * @public
 */
export interface Projection {
  /**
   * The set of attributes that are projected into the index:
   *
   * - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
   * - `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
   * - `ALL` - All of the table attributes are projected into the index.
   *
   * When using the DynamoDB console, `ALL` is selected by default.
   *
   * @public
   */
  ProjectionType?: ProjectionType | undefined;

  /**
   * Represents the non-key attribute names which will be projected into the index.
   *
   * For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.
   *
   * @public
   */
  NonKeyAttributes?: string[] | undefined;
}

/**
 * Represents the properties of a global secondary index for the table when the backup was created.
 *
 * @public
 */
export interface GlobalSecondaryIndexInfo {
  /**
   * The name of the global secondary index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * @public
   */
  KeySchema?: KeySchemaElement[] | undefined;

  /**
   * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * @public
   */
  Projection?: Projection | undefined;

  /**
   * Represents the provisioned throughput settings for the specified global secondary index.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * Sets the maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;
}

/**
 * Represents the properties of a local secondary index for the table when the backup was created.
 *
 * @public
 */
export interface LocalSecondaryIndexInfo {
  /**
   * Represents the name of the local secondary index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The complete key schema for a local secondary index, which consists of one or more pairs of attribute names and key types:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * @public
   */
  KeySchema?: KeySchemaElement[] | undefined;

  /**
   * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * @public
   */
  Projection?: Projection | undefined;
}

/**
 * The description of the server-side encryption status on the specified table.
 *
 * @public
 */
export interface SSEDescription {
  /**
   * Represents the current state of server-side encryption. The only supported values are:
   *
   * - `ENABLED` - Server-side encryption is enabled.
   * - `UPDATING` - Server-side encryption is being updated.
   *
   * @public
   */
  Status?: SSEStatus | undefined;

  /**
   * Server-side encryption type. The only supported value is:
   *
   * - `KMS` - Server-side encryption that uses Key Management Service. The key is stored in your account and is managed by KMS (KMS charges apply).
   *
   * @public
   */
  SSEType?: SSEType | undefined;

  /**
   * The KMS key ARN used for the KMS encryption.
   *
   * @public
   */
  KMSMasterKeyArn?: string | undefined;

  /**
   * Indicates the time, in UNIX epoch date format, when DynamoDB detected that the table's KMS key was inaccessible. This attribute will automatically be cleared when DynamoDB detects that the table's KMS key is accessible again. DynamoDB will initiate the table archival process when table's KMS key remains inaccessible for more than seven days from this date.
   *
   * @public
   */
  InaccessibleEncryptionDateTime?: Date | undefined;
}

/**
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
 *
 * @public
 */
export interface StreamSpecification {
  /**
   * Indicates whether DynamoDB Streams is enabled (true) or disabled (false) on the table.
   *
   * @public
   */
  StreamEnabled: boolean | undefined;

  /**
   * When an item in the table is modified, `StreamViewType` determines what information is written to the stream for this table. Valid values for `StreamViewType` are:
   *
   * - `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
   * - `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
   * - `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
   * - `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.
   *
   * @public
   */
  StreamViewType?: StreamViewType | undefined;
}

/**
 * The description of the Time to Live (TTL) status on the specified table.
 *
 * @public
 */
export interface TimeToLiveDescription {
  /**
   * The TTL status for the table.
   *
   * @public
   */
  TimeToLiveStatus?: TimeToLiveStatus | undefined;

  /**
   * The name of the TTL attribute for items in the table.
   *
   * @public
   */
  AttributeName?: string | undefined;
}

/**
 * An element in the search schema of a vector index.
 *
 * @public
 */
export interface SearchSchemaElement {
  /**
   * The name of the attribute.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The role of the attribute in the search schema. Valid values:
   *
   * - `HASH` - A partition key that partitions the vector index for independent scaling. When specified, you must provide this attribute's value in the `SearchConditionExpression`.
   * - `INLINE_FILTER` - An attribute projected into the vector index for filtering at the storage layer during search. Inline filters are optional in the `SearchConditionExpression`.
   *
   * @public
   */
  SearchSchemaElementType: SearchSchemaElementType | undefined;
}

/**
 * The definition of a vector attribute for a vector index.
 *
 * @public
 */
export interface VectorAttributeDefinition {
  /**
   * The name of the vector attribute.
   *
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * Contains the configuration of a vector index as it existed at the time a backup was created.
 *
 * @public
 */
export interface VectorIndexInfo {
  /**
   * The name of the vector index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The vector attribute configuration for the index.
   *
   * @public
   */
  VectorAttribute?: VectorAttributeDefinition | undefined;

  /**
   * The search schema that defines partition key and inline filter attributes for the vector index.
   *
   * @public
   */
  SearchSchema?: SearchSchemaElement[] | undefined;

  /**
   * Specifies attributes that are copied (projected) from the table into the vector index.
   *
   * @public
   */
  Projection?: Projection | undefined;

  /**
   * The number of dimensions in each vector.
   *
   * @public
   */
  Dimensions?: number | undefined;

  /**
   * The distance function used to calculate similarity between vectors.
   *
   * @public
   */
  DistanceFunction?: VectorDistanceFunction | undefined;
}

/**
 * Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.
 *
 * @public
 */
export interface SourceTableFeatureDetails {
  /**
   * Represents the LSI properties for the table when the backup was created. It includes the IndexName, KeySchema and Projection for the LSIs on the table at the time of backup.
   *
   * @public
   */
  LocalSecondaryIndexes?: LocalSecondaryIndexInfo[] | undefined;

  /**
   * Represents the GSI properties for the table when the backup was created. It includes the IndexName, KeySchema, Projection, and ProvisionedThroughput for the GSIs on the table at the time of backup.
   *
   * @public
   */
  GlobalSecondaryIndexes?: GlobalSecondaryIndexInfo[] | undefined;

  /**
   * Stream settings on the table when the backup was created.
   *
   * @public
   */
  StreamDescription?: StreamSpecification | undefined;

  /**
   * Time to Live settings on the table when the backup was created.
   *
   * @public
   */
  TimeToLiveDescription?: TimeToLiveDescription | undefined;

  /**
   * The description of the server-side encryption status on the table when the backup was created.
   *
   * @public
   */
  SSEDescription?: SSEDescription | undefined;

  /**
   * The vector index properties for the table at the time the backup was created, including the index name, vector attribute, dimensions, distance function, search schema, and projection.
   *
   * @public
   */
  VectorIndexes?: VectorIndexInfo[] | undefined;
}

/**
 * Contains the description of the backup created for the table.
 *
 * @public
 */
export interface BackupDescription {
  /**
   * Contains the details of the backup created for the table.
   *
   * @public
   */
  BackupDetails?: BackupDetails | undefined;

  /**
   * Contains the details of the table when the backup was created.
   *
   * @public
   */
  SourceTableDetails?: SourceTableDetails | undefined;

  /**
   * Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.
   *
   * @public
   */
  SourceTableFeatureDetails?: SourceTableFeatureDetails | undefined;
}

/**
 * Contains details for the backup.
 *
 * @public
 */
export interface BackupSummary {
  /**
   * Name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * Unique identifier for the table.
   *
   * @public
   */
  TableId?: string | undefined;

  /**
   * ARN associated with the table.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * ARN associated with the backup.
   *
   * @public
   */
  BackupArn?: string | undefined;

  /**
   * Name of the specified backup.
   *
   * @public
   */
  BackupName?: string | undefined;

  /**
   * Time at which the backup was created.
   *
   * @public
   */
  BackupCreationDateTime?: Date | undefined;

  /**
   * Time at which the automatic on-demand backup created by DynamoDB will expire. This `SYSTEM` on-demand backup expires automatically 35 days after its creation.
   *
   * @public
   */
  BackupExpiryDateTime?: Date | undefined;

  /**
   * Backup can be in one of the following states: CREATING, ACTIVE, DELETED.
   *
   * @public
   */
  BackupStatus?: BackupStatus | undefined;

  /**
   * BackupType:
   *
   * - `USER` - You create and manage these using the on-demand backup feature.
   * - `SYSTEM` - If you delete a table with point-in-time recovery enabled, a `SYSTEM` backup is automatically created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted table to the state it was in just before the point of deletion.
   * - `AWS_BACKUP` - On-demand backup created by you from Backup service.
   *
   * @public
   */
  BackupType?: BackupType | undefined;

  /**
   * Size of the backup in bytes.
   *
   * @public
   */
  BackupSizeBytes?: number | undefined;
}

/**
 * Represents the amount of provisioned throughput capacity consumed on a table or an index.
 *
 * @public
 */
export interface Capacity {
  /**
   * The total number of read capacity units consumed on a table or an index.
   *
   * @public
   */
  ReadCapacityUnits?: number | undefined;

  /**
   * The total number of write capacity units consumed on a table or an index.
   *
   * @public
   */
  WriteCapacityUnits?: number | undefined;

  /**
   * The total number of capacity units consumed on a table or an index.
   *
   * @public
   */
  CapacityUnits?: number | undefined;
}

/**
 * The consumed capacity for vector index operations, including vector search request bytes and vector write request bytes.
 *
 * @public
 */
export interface VectorCapacity {
  /**
   * The number of vector search request bytes consumed by a `SearchVectors` operation.
   *
   * @public
   */
  VectorSearchRequestBytes?: number | undefined;

  /**
   * The number of vector write request bytes consumed when writing to a vector index. Reported for write operations that modify attributes indexed by a vector index.
   *
   * @public
   */
  VectorWriteRequestBytes?: number | undefined;
}

/**
 * The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. `ConsumedCapacity` is only returned if the request asked for it. For more information, see [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html) in the *Amazon DynamoDB Developer Guide*.
 *
 * @public
 */
export interface ConsumedCapacity {
  /**
   * The name of the table that was affected by the operation. If you had specified the Amazon Resource Name (ARN) of a table in the input, you'll see the table ARN in the response.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The total number of capacity units consumed by the operation.
   *
   * @public
   */
  CapacityUnits?: number | undefined;

  /**
   * The total number of read capacity units consumed by the operation.
   *
   * @public
   */
  ReadCapacityUnits?: number | undefined;

  /**
   * The total number of write capacity units consumed by the operation.
   *
   * @public
   */
  WriteCapacityUnits?: number | undefined;

  /**
   * The amount of throughput consumed on the table affected by the operation.
   *
   * @public
   */
  Table?: Capacity | undefined;

  /**
   * The amount of throughput consumed on each local index affected by the operation.
   *
   * @public
   */
  LocalSecondaryIndexes?: Record<string, Capacity> | undefined;

  /**
   * The amount of throughput consumed on each global index affected by the operation.
   *
   * @public
   */
  GlobalSecondaryIndexes?: Record<string, Capacity> | undefined;

  /**
   * The amount of throughput consumed on each vector index affected by the operation. Each entry contains `VectorWriteRequestBytes` (for write operations) or `VectorSearchRequestBytes` (for search operations).
   *
   * @public
   */
  VectorIndexes?: Record<string, VectorCapacity> | undefined;
}

/**
 * Represents the specific reason why a DynamoDB request was throttled and the ARN of the impacted resource. This helps identify exactly what resource is being throttled, what type of operation caused it, and why the throttling occurred.
 *
 * @public
 */
export interface ThrottlingReason {
  /**
   * The reason for throttling. The throttling reason follows a specific format: `ResourceType+OperationType+LimitType`:
   *
   * - Resource Type (What is being throttled): Table or Index
   * - Operation Type (What kind of operation): Read or Write
   * - Limit Type (Why the throttling occurred):
   *
   *   - `ProvisionedThroughputExceeded`: The request rate is exceeding the [provisioned throughput capacity](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html) (read or write capacity units) configured for a table or a global secondary index (GSI) in provisioned capacity mode.
   *   - `AccountLimitExceeded`: The request rate has caused a table or global secondary index (GSI) in on-demand mode to exceed the [per-table account-level service quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ServiceQuotas.html#default-limits-throughput) for read/write throughput in the current Amazon Web Services Region.
   *   - `KeyRangeThroughputExceeded`: The request rate directed at a specific partition key value has exceeded the [internal partition-level throughput limits](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html), indicating uneven access patterns across the table's or GSI's key space.
   *   - `MaxOnDemandThroughputExceeded`: The request rate has exceeded the [configured maximum throughput limits](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode-max-throughput.html) set for a table or index in on-demand capacity mode.
   *
   * Examples of complete throttling reasons:
   *
   * - TableReadProvisionedThroughputExceeded
   * - IndexWriteAccountLimitExceeded
   *
   * This helps identify exactly what resource is being throttled, what type of operation caused it, and why the throttling occurred.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DynamoDB table or index that experienced the throttling event.
   *
   * @public
   */
  resource?: string | undefined;
}

/**
 * Contains the details for the read/write capacity mode. This page talks about `PROVISIONED` and `PAY_PER_REQUEST` billing modes. For more information about these modes, see [Read/write capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html).
 *
 * > **Note:** You may need to switch to on-demand mode at least once in order to return a `BillingModeSummary` response.
 *
 * @public
 */
export interface BillingModeSummary {
  /**
   * Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.
   *
   * - `PROVISIONED` - Sets the read/write capacity mode to `PROVISIONED`. We recommend using `PROVISIONED` for predictable workloads.
   * - `PAY_PER_REQUEST` - Sets the read/write capacity mode to `PAY_PER_REQUEST`. We recommend using `PAY_PER_REQUEST` for unpredictable workloads.
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * Represents the time when `PAY_PER_REQUEST` was last set as the read/write capacity mode.
   *
   * @public
   */
  LastUpdateToPayPerRequestDateTime?: Date | undefined;
}

/**
 * The description of the point in time settings applied to the table.
 *
 * @public
 */
export interface PointInTimeRecoveryDescription {
  /**
   * The current state of point in time recovery:
   *
   * - `ENABLED` - Point in time recovery is enabled.
   * - `DISABLED` - Point in time recovery is disabled.
   *
   * @public
   */
  PointInTimeRecoveryStatus?: PointInTimeRecoveryStatus | undefined;

  /**
   * The number of preceding days for which continuous backups are taken and maintained. Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional.
   *
   * @public
   */
  RecoveryPeriodInDays?: number | undefined;

  /**
   * Specifies the earliest point in time you can restore your table to. You can restore your table to any point in time during the last 35 days.
   *
   * @public
   */
  EarliestRestorableDateTime?: Date | undefined;

  /**
   * `LatestRestorableDateTime` is typically 5 minutes before the current time.
   *
   * @public
   */
  LatestRestorableDateTime?: Date | undefined;
}

/**
 * Represents the continuous backups and point in time recovery settings on the table.
 *
 * @public
 */
export interface ContinuousBackupsDescription {
  /**
   * `ContinuousBackupsStatus` can be one of the following states: ENABLED, DISABLED
   *
   * @public
   */
  ContinuousBackupsStatus: ContinuousBackupsStatus | undefined;

  /**
   * The description of the point in time recovery settings applied to the table.
   *
   * @public
   */
  PointInTimeRecoveryDescription?: PointInTimeRecoveryDescription | undefined;
}

/**
 * Represents a Contributor Insights summary entry.
 *
 * @public
 */
export interface ContributorInsightsSummary {
  /**
   * Name of the table associated with the summary.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * Name of the index associated with the summary, if any.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * Describes the current status for contributor insights for the given table and index, if applicable.
   *
   * @public
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | undefined;

  /**
   * Indicates the current mode of CloudWatch Contributor Insights, specifying whether it tracks all access and throttled events or throttled events only for the DynamoDB table or index.
   *
   * @public
   */
  ContributorInsightsMode?: ContributorInsightsMode | undefined;
}

/**
 * @public
 */
export interface CreateBackupInput {
  /**
   * The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Specified name for the backup.
   *
   * @public
   */
  BackupName: string | undefined;
}

/**
 * @public
 */
export interface CreateBackupOutput {
  /**
   * Contains the details of the backup created for the table.
   *
   * @public
   */
  BackupDetails?: BackupDetails | undefined;
}

/**
 * Provides visibility into the number of read and write operations your table or secondary index can instantaneously support. The settings can be modified using the `UpdateTable` operation to meet the throughput requirements of an upcoming peak event.
 *
 * @public
 */
export interface WarmThroughput {
  /**
   * Represents the number of read operations your base table can instantaneously support.
   *
   * @public
   */
  ReadUnitsPerSecond?: number | undefined;

  /**
   * Represents the number of write operations your base table can instantaneously support.
   *
   * @public
   */
  WriteUnitsPerSecond?: number | undefined;
}

/**
 * Represents a new global secondary index to be added to an existing table.
 *
 * @public
 */
export interface CreateGlobalSecondaryIndexAction {
  /**
   * The name of the global secondary index to be created.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The key schema for the global secondary index. Global secondary index supports up to 4 partition and up to 4 sort keys.
   *
   * @public
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * @public
   */
  Projection: Projection | undefined;

  /**
   * Represents the provisioned throughput settings for the specified global secondary index.
   *
   * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * The maximum number of read and write units for the global secondary index being created. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both. You must use either `OnDemand Throughput` or `ProvisionedThroughput` based on your table's capacity mode.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * Represents the warm throughput value (in read units per second and write units per second) when creating a secondary index.
   *
   * @public
   */
  WarmThroughput?: WarmThroughput | undefined;
}

/**
 * Represents the properties of a replica.
 *
 * @public
 */
export interface Replica {
  /**
   * The Region where the replica needs to be created.
   *
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlobalTableInput {
  /**
   * The global table name.
   *
   * @public
   */
  GlobalTableName: string | undefined;

  /**
   * The Regions where the global table needs to be created.
   *
   * @public
   */
  ReplicationGroup: Replica[] | undefined;
}

/**
 * Overrides the on-demand throughput settings for this replica table. If you don't specify a value for this parameter, it uses the source table's on-demand throughput settings.
 *
 * @public
 */
export interface OnDemandThroughputOverride {
  /**
   * Maximum number of read request units for the specified replica table.
   *
   * @public
   */
  MaxReadRequestUnits?: number | undefined;
}

/**
 * Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.
 *
 * @public
 */
export interface ProvisionedThroughputOverride {
  /**
   * Replica-specific read capacity units. If not specified, uses the source table's read capacity settings.
   *
   * @public
   */
  ReadCapacityUnits?: number | undefined;
}

/**
 * The description of the warm throughput value on a global secondary index.
 *
 * @public
 */
export interface GlobalSecondaryIndexWarmThroughputDescription {
  /**
   * Represents warm throughput read units per second value for a global secondary index.
   *
   * @public
   */
  ReadUnitsPerSecond?: number | undefined;

  /**
   * Represents warm throughput write units per second value for a global secondary index.
   *
   * @public
   */
  WriteUnitsPerSecond?: number | undefined;

  /**
   * Represents the warm throughput status being created or updated on a global secondary index. The status can only be `UPDATING` or `ACTIVE`.
   *
   * @public
   */
  Status?: IndexStatus | undefined;
}

/**
 * Represents the properties of a replica global secondary index.
 *
 * @public
 */
export interface ReplicaGlobalSecondaryIndexDescription {
  /**
   * The name of the global secondary index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * If not described, uses the source table GSI's read capacity settings.
   *
   * @public
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride | undefined;

  /**
   * Overrides the maximum on-demand throughput for the specified global secondary index in the specified replica table.
   *
   * @public
   */
  OnDemandThroughputOverride?: OnDemandThroughputOverride | undefined;

  /**
   * Represents the warm throughput of the global secondary index for this replica.
   *
   * @public
   */
  WarmThroughput?: GlobalSecondaryIndexWarmThroughputDescription | undefined;
}

/**
 * Contains details of the table class.
 *
 * @public
 */
export interface TableClassSummary {
  /**
   * The table class of the specified table. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
   *
   * @public
   */
  TableClass?: TableClass | undefined;

  /**
   * The date and time at which the table class was last updated.
   *
   * @public
   */
  LastUpdateDateTime?: Date | undefined;
}

/**
 * Represents the warm throughput value (in read units per second and write units per second) of the table. Warm throughput is applicable for DynamoDB Standard-IA tables and specifies the minimum provisioned capacity maintained for immediate data access.
 *
 * @public
 */
export interface TableWarmThroughputDescription {
  /**
   * Represents the base table's warm throughput value in read units per second.
   *
   * @public
   */
  ReadUnitsPerSecond?: number | undefined;

  /**
   * Represents the base table's warm throughput value in write units per second.
   *
   * @public
   */
  WriteUnitsPerSecond?: number | undefined;

  /**
   * Represents warm throughput value of the base table.
   *
   * @public
   */
  Status?: TableStatus | undefined;
}

/**
 * Contains the details of the replica.
 *
 * @public
 */
export interface ReplicaDescription {
  /**
   * The name of the Region.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The current state of the replica:
   *
   * - `CREATING` - The replica is being created.
   * - `UPDATING` - The replica is being updated.
   * - `DELETING` - The replica is being deleted.
   * - `ACTIVE` - The replica is ready for use.
   * - `REGION_DISABLED` - The replica is inaccessible because the Amazon Web Services Region has been disabled.
   *
   *   > **Note:** If the Amazon Web Services Region remains inaccessible for more than 20 hours, DynamoDB will remove this replica from the replication group. The replica will not be deleted and replication will stop from and to this region.
   * - `INACCESSIBLE_ENCRYPTION_CREDENTIALS` - The KMS key used to encrypt the table is inaccessible.
   *
   *   > **Note:** If the KMS key remains inaccessible for more than 20 hours, DynamoDB will remove this replica from the replication group. The replica will not be deleted and replication will stop from and to this region.
   *
   * @public
   */
  ReplicaStatus?: ReplicaStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the global table replica.
   *
   * @public
   */
  ReplicaArn?: string | undefined;

  /**
   * Detailed information about the replica status.
   *
   * @public
   */
  ReplicaStatusDescription?: string | undefined;

  /**
   * Specifies the progress of a Create, Update, or Delete action on the replica as a percentage.
   *
   * @public
   */
  ReplicaStatusPercentProgress?: string | undefined;

  /**
   * The KMS key of the replica that will be used for KMS encryption.
   *
   * @public
   */
  KMSMasterKeyId?: string | undefined;

  /**
   * Replica-specific provisioned throughput. If not described, uses the source table's provisioned throughput settings.
   *
   * @public
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride | undefined;

  /**
   * Overrides the maximum on-demand throughput settings for the specified replica table.
   *
   * @public
   */
  OnDemandThroughputOverride?: OnDemandThroughputOverride | undefined;

  /**
   * Represents the warm throughput value for this replica.
   *
   * @public
   */
  WarmThroughput?: TableWarmThroughputDescription | undefined;

  /**
   * Replica-specific global secondary index settings.
   *
   * @public
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[] | undefined;

  /**
   * The time at which the replica was first detected as inaccessible. To determine cause of inaccessibility check the `ReplicaStatus` property.
   *
   * @public
   */
  ReplicaInaccessibleDateTime?: Date | undefined;

  /**
   * Contains details of the table class.
   *
   * @public
   */
  ReplicaTableClassSummary?: TableClassSummary | undefined;

  /**
   * Indicates one of the settings synchronization modes for the global table replica:
   *
   * - `ENABLED`: Indicates that the settings synchronization mode for the global table replica is enabled.
   * - `DISABLED`: Indicates that the settings synchronization mode for the global table replica is disabled.
   * - `ENABLED_WITH_OVERRIDES`: This mode is set by default for a same account global table. Indicates that certain global table settings can be overridden.
   *
   * @public
   */
  GlobalTableSettingsReplicationMode?: GlobalTableSettingsReplicationMode | undefined;
}

/**
 * Contains details about the global table.
 *
 * @public
 */
export interface GlobalTableDescription {
  /**
   * The Regions where the global table has replicas.
   *
   * @public
   */
  ReplicationGroup?: ReplicaDescription[] | undefined;

  /**
   * The unique identifier of the global table.
   *
   * @public
   */
  GlobalTableArn?: string | undefined;

  /**
   * The creation time of the global table.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * The current state of the global table:
   *
   * - `CREATING` - The global table is being created.
   * - `UPDATING` - The global table is being updated.
   * - `DELETING` - The global table is being deleted.
   * - `ACTIVE` - The global table is ready for use.
   *
   * @public
   */
  GlobalTableStatus?: GlobalTableStatus | undefined;

  /**
   * The global table name.
   *
   * @public
   */
  GlobalTableName?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlobalTableOutput {
  /**
   * Contains the details of the global table.
   *
   * @public
   */
  GlobalTableDescription?: GlobalTableDescription | undefined;
}

/**
 * Specifies the action to add a new witness Region to a MRSC global table. A MRSC global table can be configured with either three replicas, or with two replicas and one witness.
 *
 * @public
 */
export interface CreateGlobalTableWitnessGroupMemberAction {
  /**
   * The Amazon Web Services Region name to be added as a witness Region for the MRSC global table. The witness must be in a different Region than the replicas and within the same Region set:
   *
   * - US Region set: US East (N. Virginia), US East (Ohio), US West (Oregon)
   * - EU Region set: Europe (Ireland), Europe (London), Europe (Paris), Europe (Frankfurt)
   * - AP Region set: Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Osaka)
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * Represents a replica to be added.
 *
 * @public
 */
export interface CreateReplicaAction {
  /**
   * The Region of the replica to be added.
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * Represents the properties of a replica global secondary index.
 *
 * @public
 */
export interface ReplicaGlobalSecondaryIndex {
  /**
   * The name of the global secondary index.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * Replica table GSI-specific provisioned throughput. If not specified, uses the source table GSI's read capacity settings.
   *
   * @public
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride | undefined;

  /**
   * Overrides the maximum on-demand throughput settings for the specified global secondary index in the specified replica table.
   *
   * @public
   */
  OnDemandThroughputOverride?: OnDemandThroughputOverride | undefined;
}

/**
 * Represents a replica to be created.
 *
 * @public
 */
export interface CreateReplicationGroupMemberAction {
  /**
   * The Region where the new replica will be created.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The KMS key that should be used for KMS encryption in the new replica. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB KMS key `alias/aws/dynamodb`.
   *
   * @public
   */
  KMSMasterKeyId?: string | undefined;

  /**
   * Replica-specific provisioned throughput. If not specified, uses the source table's provisioned throughput settings.
   *
   * @public
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride | undefined;

  /**
   * The maximum on-demand throughput settings for the specified replica table being created. You can only modify `MaxReadRequestUnits`, because you can't modify `MaxWriteRequestUnits` for individual replica tables.
   *
   * @public
   */
  OnDemandThroughputOverride?: OnDemandThroughputOverride | undefined;

  /**
   * Replica-specific global secondary index settings.
   *
   * @public
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[] | undefined;

  /**
   * Replica-specific table class. If not specified, uses the source table's table class.
   *
   * @public
   */
  TableClassOverride?: TableClass | undefined;
}

/**
 * Represents the properties of a global secondary index.
 *
 * @public
 */
export interface GlobalSecondaryIndex {
  /**
   * The name of the global secondary index. The name must be unique among all other indexes on this table.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * @public
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * @public
   */
  Projection: Projection | undefined;

  /**
   * Represents the provisioned throughput settings for the specified global secondary index. You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.
   *
   * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * The maximum number of read and write units for the specified global secondary index. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both. You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. If you use this parameter, you must specify `ReadUnitsPerSecond`, `WriteUnitsPerSecond`, or both.
   *
   * @public
   */
  WarmThroughput?: WarmThroughput | undefined;
}

/**
 * Represents the properties of a local secondary index.
 *
 * @public
 */
export interface LocalSecondaryIndex {
  /**
   * The name of the local secondary index. The name must be unique among all other indexes on this table.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * @public
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * @public
   */
  Projection: Projection | undefined;
}

/**
 * Represents the settings used to enable server-side encryption.
 *
 * @public
 */
export interface SSESpecification {
  /**
   * Indicates whether server-side encryption is done using an Amazon Web Services managed key or an Amazon Web Services owned key. If enabled (true), server-side encryption type is set to `KMS` and an Amazon Web Services managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to Amazon Web Services owned key.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Server-side encryption type. The only supported value is:
   *
   * - `KMS` - Server-side encryption that uses Key Management Service. The key is stored in your account and is managed by KMS (KMS charges apply).
   *
   * @public
   */
  SSEType?: SSEType | undefined;

  /**
   * The KMS key that should be used for the KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.
   *
   * @public
   */
  KMSMasterKeyId?: string | undefined;
}

/**
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table.
 *
 * Amazon Web Services-assigned tag names and values are automatically assigned the `aws:` prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix `user:` in the Cost Allocation Report. You cannot backdate the application of a tag.
 *
 * For an overview on tagging DynamoDB resources, see [Tagging for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html) in the *Amazon DynamoDB Developer Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag. Tag values are case-sensitive and can be null.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Contains the configuration settings for a vector index, including the index name, vector attribute, dimensions, distance function, search schema, and projection.
 *
 * @public
 */
export interface VectorIndex {
  /**
   * The name of the vector index.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The vector attribute configuration for the index.
   *
   * @public
   */
  VectorAttribute: VectorAttributeDefinition | undefined;

  /**
   * The search schema that defines partition key and inline filter attributes for the vector index.
   *
   * @public
   */
  SearchSchema?: SearchSchemaElement[] | undefined;

  /**
   * Specifies attributes that are copied (projected) from the table into the vector index.
   *
   * @public
   */
  Projection: Projection | undefined;

  /**
   * The number of dimensions in each vector.
   *
   * @public
   */
  Dimensions: number | undefined;

  /**
   * The distance function used to calculate similarity between vectors. Valid values: `COSINE`, `EUCLIDEAN`, `DOT_PRODUCT`.
   *
   * @public
   */
  DistanceFunction: VectorDistanceFunction | undefined;
}

/**
 * Represents the input of a `CreateTable` operation.
 *
 * @public
 */
export interface CreateTableInput {
  /**
   * An array of attributes that describe the key schema for the table and indexes.
   *
   * @public
   */
  AttributeDefinitions?: AttributeDefinition[] | undefined;

  /**
   * The name of the table to create. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Specifies the attributes that make up the primary key for a table or an index. The attributes in `KeySchema` must also be defined in the `AttributeDefinitions` array. For more information, see [Data Model](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * Each `KeySchemaElement` in the array is composed of:
   *
   * - `AttributeName` - The name of this key attribute.
   * - `KeyType` - The role that the key attribute will assume:
   *
   *   - `HASH` - partition key
   *   - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from the DynamoDB usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * For a simple primary key (partition key), you must provide exactly one element with a `KeyType` of `HASH`.
   *
   * For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a `KeyType` of `HASH`, and the second element must have a `KeyType` of `RANGE`.
   *
   * For more information, see [Working with Tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#WorkingWithTables.primary.key) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  KeySchema?: KeySchemaElement[] | undefined;

  /**
   * One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained.
   *
   * Each local secondary index in the array includes the following:
   *
   * - `IndexName` - The name of the local secondary index. Must be unique only for this table.
   * - `KeySchema` - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table.
   * - `Projection` - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:
   *
   *   - `ProjectionType` - One of the following:
   *
   *     - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
   *     - `INCLUDE` - Only the specified table attributes are projected into the index. The list of projected attributes is in `NonKeyAttributes`.
   *     - `ALL` - All of the table attributes are projected into the index.
   *   - `NonKeyAttributes` - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in `NonKeyAttributes`, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.
   *
   * @public
   */
  LocalSecondaryIndexes?: LocalSecondaryIndex[] | undefined;

  /**
   * One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following:
   *
   * - `IndexName` - The name of the global secondary index. Must be unique only for this table.
   * - `KeySchema` - Specifies the key schema for the global secondary index. Each global secondary index supports up to 4 partition keys and up to 4 sort keys.
   * - `Projection` - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:
   *
   *   - `ProjectionType` - One of the following:
   *
   *     - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
   *     - `INCLUDE` - Only the specified table attributes are projected into the index. The list of projected attributes is in `NonKeyAttributes`.
   *     - `ALL` - All of the table attributes are projected into the index.
   *   - `NonKeyAttributes` - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in `NonKeyAttributes`, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.
   * - `ProvisionedThroughput` - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units.
   *
   * @public
   */
  GlobalSecondaryIndexes?: GlobalSecondaryIndex[] | undefined;

  /**
   * Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.
   *
   * - `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for most DynamoDB workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).
   * - `PROVISIONED` - We recommend using `PROVISIONED` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the `UpdateTable` operation.
   *
   * If you set BillingMode as `PROVISIONED`, you must specify this property. If you set BillingMode as `PAY_PER_REQUEST`, you cannot specify this property.
   *
   * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * The settings for DynamoDB Streams on the table. These settings consist of:
   *
   * - `StreamEnabled` - Indicates whether DynamoDB Streams is to be enabled (true) or disabled (false).
   * - `StreamViewType` - When an item in the table is modified, `StreamViewType` determines what information is written to the table's stream. Valid values for `StreamViewType` are:
   *
   *   - `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
   *   - `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
   *   - `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
   *   - `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.
   *
   * @public
   */
  StreamSpecification?: StreamSpecification | undefined;

  /**
   * Represents the settings used to enable server-side encryption.
   *
   * @public
   */
  SSESpecification?: SSESpecification | undefined;

  /**
   * A list of key-value pairs to label the table. For more information, see [Tagging for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The table class of the new table. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
   *
   * @public
   */
  TableClass?: TableClass | undefined;

  /**
   * Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * Represents the warm throughput (in read units per second and write units per second) for creating a table.
   *
   * @public
   */
  WarmThroughput?: WarmThroughput | undefined;

  /**
   * An Amazon Web Services resource-based policy document in JSON format that will be attached to the table.
   *
   * When you attach a resource-based policy while creating a table, the policy application is *strongly consistent*.
   *
   * The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
   *
   * > **Note:** You need to specify the `CreateTable` and `PutResourcePolicy` IAM actions for authorizing a user to create a table with a resource-based policy.
   *
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * Sets the maximum number of read and write units for the specified table in on-demand capacity mode. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source table used for the creation of a multi-account global table.
   *
   * @public
   */
  GlobalTableSourceArn?: string | undefined;

  /**
   * Controls the settings synchronization mode for the global table. For multi-account global tables, this parameter is required and the only supported value is ENABLED. For same-account global tables, this parameter is set to ENABLED_WITH_OVERRIDES.
   *
   * @public
   */
  GlobalTableSettingsReplicationMode?: GlobalTableSettingsReplicationMode | undefined;

  /**
   * One or more vector indexes to be created on the table. Each vector index enables similarity search on a vector attribute. Each element in the list consists of:
   *
   * - `IndexName` - The name of the vector index. Must be unique within the table.
   * - `VectorAttribute` - The attribute that contains vector embeddings. If multiple vector indexes reference the same attribute, they must all use the same number of dimensions.
   * - `Dimensions` - The number of dimensions in each vector.
   * - `DistanceFunction` - The distance function used to calculate similarity. Valid values: `COSINE`, `EUCLIDEAN`, `DOT_PRODUCT`.
   * - `Projection` - Specifies attributes that are copied (projected) from the table into the vector index. The total number of projected non-key attributes is shared across the vector attribute (counts as 1) and `INLINE_FILTER` search schema elements (each counts as 1). `HASH` search schema elements do not count toward this limit.
   * - `SearchSchema` - (Optional) Defines the partition key (`HASH`) and inline filter (`INLINE_FILTER`) attributes for the vector index.
   *
   * @public
   */
  VectorIndexes?: VectorIndex[] | undefined;
}

/**
 * Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
 *
 * @public
 */
export interface ProvisionedThroughputDescription {
  /**
   * The date and time of the last provisioned throughput increase for this table.
   *
   * @public
   */
  LastIncreaseDateTime?: Date | undefined;

  /**
   * The date and time of the last provisioned throughput decrease for this table.
   *
   * @public
   */
  LastDecreaseDateTime?: Date | undefined;

  /**
   * The number of provisioned throughput decreases for this table during this UTC calendar day. For current maximums on provisioned throughput decreases, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  NumberOfDecreasesToday?: number | undefined;

  /**
   * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`. Eventually consistent reads require less effort than strongly consistent reads, so a setting of 50 `ReadCapacityUnits` per second provides 100 eventually consistent `ReadCapacityUnits` per second.
   *
   * For a table or global secondary index that uses on-demand capacity mode (`PAY_PER_REQUEST`), this value is `0`, because on-demand mode does not use provisioned throughput.
   *
   * @public
   */
  ReadCapacityUnits?: number | undefined;

  /**
   * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException`.
   *
   * For a table or global secondary index that uses on-demand capacity mode (`PAY_PER_REQUEST`), this value is `0`, because on-demand mode does not use provisioned throughput.
   *
   * @public
   */
  WriteCapacityUnits?: number | undefined;
}

/**
 * Represents the properties of a global secondary index.
 *
 * @public
 */
export interface GlobalSecondaryIndexDescription {
  /**
   * The name of the global secondary index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * @public
   */
  KeySchema?: KeySchemaElement[] | undefined;

  /**
   * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * @public
   */
  Projection?: Projection | undefined;

  /**
   * The current state of the global secondary index:
   *
   * - `CREATING` - The index is being created.
   * - `UPDATING` - The index is being updated.
   * - `DELETING` - The index is being deleted.
   * - `ACTIVE` - The index is ready for use.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * Indicates whether the index is currently backfilling. *Backfilling* is the process of reading items from the table and determining whether they can be added to the index. (Not all items will qualify: For example, a partition key cannot have any duplicate values.) If an item can be added to the index, DynamoDB will do so. After all items have been processed, the backfilling operation is complete and `Backfilling` is false.
   *
   * You can delete an index that is being created during the `Backfilling` phase when `IndexStatus` is set to CREATING and `Backfilling` is true. You can't delete the index that is being created when `IndexStatus` is set to CREATING and `Backfilling` is false.
   *
   * > **Note:** For indexes that were created during a `CreateTable` operation, the `Backfilling` attribute does not appear in the `DescribeTable` output.
   *
   * @public
   */
  Backfilling?: boolean | undefined;

  /**
   * Represents the provisioned throughput settings for the specified global secondary index.
   *
   * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughputDescription | undefined;

  /**
   * The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  IndexSizeBytes?: number | undefined;

  /**
   * The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the index.
   *
   * @public
   */
  IndexArn?: string | undefined;

  /**
   * The maximum number of read and write units for the specified global secondary index. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index.
   *
   * @public
   */
  WarmThroughput?: GlobalSecondaryIndexWarmThroughputDescription | undefined;
}

/**
 * Represents the properties of a witness Region in a MRSC global table.
 *
 * @public
 */
export interface GlobalTableWitnessDescription {
  /**
   * The name of the Amazon Web Services Region that serves as a witness for the MRSC global table.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The current status of the witness Region in the MRSC global table.
   *
   * @public
   */
  WitnessStatus?: WitnessStatus | undefined;
}

/**
 * Represents the properties of a local secondary index.
 *
 * @public
 */
export interface LocalSecondaryIndexDescription {
  /**
   * Represents the name of the local secondary index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
   *
   * - `HASH` - partition key
   * - `RANGE` - sort key
   *
   * > **Note:**
   * >
   * > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   * >
   * > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * @public
   */
  KeySchema?: KeySchemaElement[] | undefined;

  /**
   * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * @public
   */
  Projection?: Projection | undefined;

  /**
   * The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  IndexSizeBytes?: number | undefined;

  /**
   * The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the index.
   *
   * @public
   */
  IndexArn?: string | undefined;
}

/**
 * Contains details for the restore.
 *
 * @public
 */
export interface RestoreSummary {
  /**
   * The Amazon Resource Name (ARN) of the backup from which the table was restored.
   *
   * @public
   */
  SourceBackupArn?: string | undefined;

  /**
   * The ARN of the source table of the backup that is being restored.
   *
   * @public
   */
  SourceTableArn?: string | undefined;

  /**
   * Point in time or source backup time.
   *
   * @public
   */
  RestoreDateTime: Date | undefined;

  /**
   * Indicates if a restore is in progress or not.
   *
   * @public
   */
  RestoreInProgress: boolean | undefined;
}

/**
 * Contains the current state and configuration of a vector index, including its status, size, item count, and the settings specified when the index was created.
 *
 * @public
 */
export interface VectorIndexDescription {
  /**
   * The name of the vector index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The search schema that defines partition key and inline filter attributes for the vector index.
   *
   * @public
   */
  SearchSchema?: SearchSchemaElement[] | undefined;

  /**
   * Specifies attributes that are copied (projected) from the table into the vector index.
   *
   * @public
   */
  Projection?: Projection | undefined;

  /**
   * The vector attribute configuration for the index.
   *
   * @public
   */
  VectorAttribute?: VectorAttributeDefinition | undefined;

  /**
   * The number of dimensions in each vector.
   *
   * @public
   */
  Dimensions?: number | undefined;

  /**
   * The distance function used to calculate similarity between vectors.
   *
   * @public
   */
  DistanceFunction?: VectorDistanceFunction | undefined;

  /**
   * The current state of the vector index:
   *
   * - `CREATING` - The index is being created.
   * - `ACTIVE` - The index is ready for use.
   * - `DELETING` - The index is being deleted.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * Specifies whether the index is currently backfilling. During backfill, `SearchVectors` operations might return incomplete results.
   *
   * @public
   */
  Backfilling?: boolean | undefined;

  /**
   * The total size of the vector index, in bytes. Amazon DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  IndexSizeBytes?: number | undefined;

  /**
   * The number of items indexed in the vector index. Amazon DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the vector index.
   *
   * @public
   */
  IndexArn?: string | undefined;
}

/**
 * Represents the properties of a table.
 *
 * @public
 */
export interface TableDescription {
  /**
   * An array of `AttributeDefinition` objects. Each of these objects describes one attribute in the table and index key schema.
   *
   * Each `AttributeDefinition` object in this array is composed of:
   *
   * - `AttributeName` - The name of the attribute.
   * - `AttributeType` - The data type for the attribute.
   *
   * @public
   */
  AttributeDefinitions?: AttributeDefinition[] | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The primary key structure for the table. Each `KeySchemaElement` consists of:
   *
   * - `AttributeName` - The name of the attribute.
   * - `KeyType` - The role of the attribute:
   *
   *   - `HASH` - partition key
   *   - `RANGE` - sort key
   *
   *   > **Note:**
   *   >
   *   > The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
   *   >
   *   > The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
   *
   * For more information about primary keys, see [Primary Key](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html#DataModelPrimaryKey) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  KeySchema?: KeySchemaElement[] | undefined;

  /**
   * The current state of the table:
   *
   * - `CREATING` - The table is being created.
   * - `UPDATING` - The table/index configuration is being updated. The table/index remains available for data operations when `UPDATING`.
   * - `DELETING` - The table is being deleted.
   * - `ACTIVE` - The table is ready for use.
   * - `INACCESSIBLE_ENCRYPTION_CREDENTIALS` - The KMS key used to encrypt the table in inaccessible. Table operations may fail due to failure to use the KMS key. DynamoDB will initiate the table archival process when a table's KMS key remains inaccessible for more than seven days.
   * - `ARCHIVING` - The table is being archived. Operations are not allowed until archival is complete.
   * - `ARCHIVED` - The table has been archived. See the ArchivalReason for more information.
   *
   * @public
   */
  TableStatus?: TableStatus | undefined;

  /**
   * The date and time when the table was created, in [UNIX epoch time](http://www.epochconverter.com/) format.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * The provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughputDescription | undefined;

  /**
   * The total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  TableSizeBytes?: number | undefined;

  /**
   * The number of items in the specified table. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the table.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * A unique identifier for the table, in UUID format, generated by DynamoDB when the table is created.
   *
   * @public
   */
  TableId?: string | undefined;

  /**
   * Contains the details for the read/write capacity mode.
   *
   * @public
   */
  BillingModeSummary?: BillingModeSummary | undefined;

  /**
   * Represents one or more local secondary indexes on the table. Each index is scoped to a given partition key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB. Each element is composed of:
   *
   * - `IndexName` - The name of the local secondary index.
   * - `KeySchema` - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table.
   * - `Projection` - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:
   *
   *   - `ProjectionType` - One of the following:
   *
   *     - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
   *     - `INCLUDE` - Only the specified table attributes are projected into the index. The list of projected attributes is in `NonKeyAttributes`.
   *     - `ALL` - All of the table attributes are projected into the index.
   *   - `NonKeyAttributes` - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in `NonKeyAttributes`, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.
   * - `IndexSizeBytes` - Represents the total size of the index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   * - `ItemCount` - Represents the number of items in the index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * If the table is in the `DELETING` state, no information about indexes will be returned.
   *
   * @public
   */
  LocalSecondaryIndexes?: LocalSecondaryIndexDescription[] | undefined;

  /**
   * The global secondary indexes, if any, on the table. Each index is scoped to a given partition key value. Each element is composed of:
   *
   * - `Backfilling` - If true, then the index is currently in the backfilling phase. Backfilling occurs only when a new global secondary index is added to the table. It is the process by which DynamoDB populates the new index with data from the table. (This attribute does not appear for indexes that were created during a `CreateTable` operation.)
   *
   *   You can delete an index that is being created during the `Backfilling` phase when `IndexStatus` is set to CREATING and `Backfilling` is true. You can't delete the index that is being created when `IndexStatus` is set to CREATING and `Backfilling` is false. (This attribute does not appear for indexes that were created during a `CreateTable` operation.)
   * - `IndexName` - The name of the global secondary index.
   * - `IndexSizeBytes` - The total size of the global secondary index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   * - `IndexStatus` - The current status of the global secondary index:
   *
   *   - `CREATING` - The index is being created.
   *   - `UPDATING` - The index is being updated.
   *   - `DELETING` - The index is being deleted.
   *   - `ACTIVE` - The index is ready for use.
   * - `ItemCount` - The number of items in the global secondary index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   * - `KeySchema` - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table.
   * - `Projection` - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:
   *
   *   - `ProjectionType` - One of the following:
   *
   *     - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
   *     - `INCLUDE` - In addition to the attributes described in `KEYS_ONLY`, the secondary index will include other non-key attributes that you specify.
   *     - `ALL` - All of the table attributes are projected into the index.
   *   - `NonKeyAttributes` - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in `NonKeyAttributes`, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.
   * - `ProvisionedThroughput` - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units, along with data about increases and decreases.
   *
   * If the table is in the `DELETING` state, no information about indexes will be returned.
   *
   * @public
   */
  GlobalSecondaryIndexes?: GlobalSecondaryIndexDescription[] | undefined;

  /**
   * The current DynamoDB Streams configuration for the table.
   *
   * @public
   */
  StreamSpecification?: StreamSpecification | undefined;

  /**
   * A timestamp, in ISO 8601 format, for this stream.
   *
   * Note that `LatestStreamLabel` is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:
   *
   * - Amazon Web Services customer ID
   * - Table name
   * - `StreamLabel`
   *
   * @public
   */
  LatestStreamLabel?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the latest stream for this table.
   *
   * @public
   */
  LatestStreamArn?: string | undefined;

  /**
   * Represents the version of [global tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html) in use, if the table is replicated across Amazon Web Services Regions.
   *
   * @public
   */
  GlobalTableVersion?: string | undefined;

  /**
   * Represents replicas of the table.
   *
   * After a successful disassociation, this list is absent or empty. To confirm disassociation, also verify that `TableStatus` is `ACTIVE`.
   *
   * @public
   */
  Replicas?: ReplicaDescription[] | undefined;

  /**
   * The witness Region and its current status in the MRSC global table. Only one witness Region can be configured per MRSC global table.
   *
   * @public
   */
  GlobalTableWitnesses?: GlobalTableWitnessDescription[] | undefined;

  /**
   * Indicates one of the settings synchronization modes for the global table:
   *
   * - `ENABLED`: Indicates that the settings synchronization mode for the global table is enabled.
   * - `DISABLED`: Indicates that the settings synchronization mode for the global table is disabled.
   * - `ENABLED_WITH_OVERRIDES`: This mode is set by default for a same account global table. Indicates that certain global table settings can be overridden.
   *
   * @public
   */
  GlobalTableSettingsReplicationMode?: GlobalTableSettingsReplicationMode | undefined;

  /**
   * Contains details for the restore.
   *
   * @public
   */
  RestoreSummary?: RestoreSummary | undefined;

  /**
   * The description of the server-side encryption status on the specified table.
   *
   * @public
   */
  SSEDescription?: SSEDescription | undefined;

  /**
   * Contains information about the table archive.
   *
   * @public
   */
  ArchivalSummary?: ArchivalSummary | undefined;

  /**
   * Contains details of the table class.
   *
   * @public
   */
  TableClassSummary?: TableClassSummary | undefined;

  /**
   * Indicates whether deletion protection is enabled (true) or disabled (false) on the table.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * Specifies whether disassociation protection is enabled (`true`) or disabled (`false`) for the local global table replica. Protection is enabled by default.
   *
   * @public
   */
  DisassociationProtectionEnabled?: boolean | undefined;

  /**
   * The maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * Describes the warm throughput value of the base table.
   *
   * @public
   */
  WarmThroughput?: TableWarmThroughputDescription | undefined;

  /**
   * Indicates one of the following consistency modes for a global table:
   *
   * - `EVENTUAL`: Indicates that the global table is configured for multi-Region eventual consistency (MREC).
   * - `STRONG`: Indicates that the global table is configured for multi-Region strong consistency (MRSC).
   *
   * If you don't specify this field, the global table consistency mode defaults to `EVENTUAL`. For more information about global tables consistency modes, see [Consistency modes](https://docs.aws.amazon.com/V2globaltables_HowItWorks.html#V2globaltables_HowItWorks.consistency-modes) in DynamoDB developer guide.
   *
   * @public
   */
  MultiRegionConsistency?: MultiRegionConsistency | undefined;

  /**
   * The vector indexes, if any, on the table. Each element is composed of:
   *
   * - `IndexName` - The name of the vector index.
   * - `IndexStatus` - The current status of the vector index: `CREATING`, `ACTIVE`, or `DELETING`.
   * - `Backfilling` - Specifies whether the index is currently backfilling. During backfill, `SearchVectors` operations might return incomplete results.
   * - `VectorAttribute` - The attribute that contains vector embeddings.
   * - `Dimensions` - The number of dimensions in each vector.
   * - `DistanceFunction` - The distance function used to calculate similarity (`COSINE`, `EUCLIDEAN`, or `DOT_PRODUCT`).
   * - `SearchSchema` - The partition key and inline filter attributes for the vector index.
   * - `Projection` - Specifies attributes that are copied (projected) from the table into the vector index.
   * - `IndexArn` - The Amazon Resource Name (ARN) that uniquely identifies the index.
   * - `IndexSizeBytes` - The total size of the vector index, in bytes. Amazon DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   * - `ItemCount` - The number of items indexed in the vector index. Amazon DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
   *
   * @public
   */
  VectorIndexes?: VectorIndexDescription[] | undefined;
}

/**
 * Represents the output of a `CreateTable` operation.
 *
 * @public
 */
export interface CreateTableOutput {
  /**
   * Represents the properties of the table.
   *
   * @public
   */
  TableDescription?: TableDescription | undefined;
}

/**
 * A new vector index to be added to a table.
 *
 * @public
 */
export interface CreateVectorIndexAction {
  /**
   * The name of the vector index. Must be unique within the table.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The attribute that contains vector embeddings. If multiple vector indexes reference the same attribute, they must all use the same number of dimensions.
   *
   * @public
   */
  VectorAttribute: VectorAttributeDefinition | undefined;

  /**
   * The partition key and inline filter attribute definitions for the vector index.
   *
   * @public
   */
  SearchSchema?: SearchSchemaElement[] | undefined;

  /**
   * Specifies attributes that are copied (projected) from the table into the vector index.
   *
   * @public
   */
  Projection: Projection | undefined;

  /**
   * The number of dimensions in each vector.
   *
   * @public
   */
  Dimensions: number | undefined;

  /**
   * The distance function used to calculate similarity. Valid values: `COSINE`, `EUCLIDEAN`, `DOT_PRODUCT`.
   *
   * @public
   */
  DistanceFunction: VectorDistanceFunction | undefined;
}

/**
 * Processing options for the CSV file being imported.
 *
 * @public
 */
export interface CsvOptions {
  /**
   * The delimiter used for separating items in the CSV file being imported.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.
   *
   * @public
   */
  HeaderList?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteBackupInput {
  /**
   * The ARN associated with the backup.
   *
   * @public
   */
  BackupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBackupOutput {
  /**
   * Contains the description of the backup created for the table.
   *
   * @public
   */
  BackupDescription?: BackupDescription | undefined;
}

/**
 * Represents a global secondary index to be deleted from an existing table.
 *
 * @public
 */
export interface DeleteGlobalSecondaryIndexAction {
  /**
   * The name of the global secondary index to be deleted.
   *
   * @public
   */
  IndexName: string | undefined;
}

/**
 * Specifies the action to remove a witness Region from a MRSC global table. You cannot delete a single witness from a MRSC global table - you must delete both a replica and the witness together. The deletion of both a witness and replica converts the remaining replica to a single-Region DynamoDB table.
 *
 * @public
 */
export interface DeleteGlobalTableWitnessGroupMemberAction {
  /**
   * The witness Region name to be removed from the MRSC global table.
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * Represents a replica to be removed.
 *
 * @public
 */
export interface DeleteReplicaAction {
  /**
   * The Region of the replica to be removed.
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * Represents a replica to be deleted.
 *
 * @public
 */
export interface DeleteReplicationGroupMemberAction {
  /**
   * The Region where the replica exists.
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the DynamoDB resource from which the policy will be removed. The resources you can specify include tables and streams. If you remove the policy of a table, it will also remove the permissions for the table's indexes defined in that policy document. This is because index permissions are defined in the table's policy.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A string value that you can use to conditionally delete your policy. When you provide an expected revision ID, if the revision ID of the existing policy on the resource doesn't match or if there's no policy attached to the resource, the request will fail and return a `PolicyNotFoundException`.
   *
   * @public
   */
  ExpectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyOutput {
  /**
   * A unique string that represents the revision ID of the policy. If you're comparing revision IDs, make sure to always use string comparison logic.
   *
   * This value will be empty if you make a request against a resource without a policy.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * Represents the input of a `DeleteTable` operation.
 *
 * @public
 */
export interface DeleteTableInput {
  /**
   * The name of the table to delete. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * Represents the output of a `DeleteTable` operation.
 *
 * @public
 */
export interface DeleteTableOutput {
  /**
   * Represents the properties of a table.
   *
   * @public
   */
  TableDescription?: TableDescription | undefined;
}

/**
 * A vector index to be removed from a table.
 *
 * @public
 */
export interface DeleteVectorIndexAction {
  /**
   * The name of the vector index to delete.
   *
   * @public
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupInput {
  /**
   * The Amazon Resource Name (ARN) associated with the backup.
   *
   * @public
   */
  BackupArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeBackupOutput {
  /**
   * Contains the description of the backup created for the table.
   *
   * @public
   */
  BackupDescription?: BackupDescription | undefined;
}

/**
 * @public
 */
export interface DescribeContinuousBackupsInput {
  /**
   * Name of the table for which the customer wants to check the continuous backups and point in time recovery settings.
   *
   * You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeContinuousBackupsOutput {
  /**
   * Represents the continuous backups and point in time recovery settings on the table.
   *
   * @public
   */
  ContinuousBackupsDescription?: ContinuousBackupsDescription | undefined;
}

/**
 * @public
 */
export interface DescribeContributorInsightsInput {
  /**
   * The name of the table to describe. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of the global secondary index to describe, if applicable.
   *
   * @public
   */
  IndexName?: string | undefined;
}

/**
 * Represents a failure a contributor insights operation.
 *
 * @public
 */
export interface FailureException {
  /**
   * Exception name.
   *
   * @public
   */
  ExceptionName?: string | undefined;

  /**
   * Description of the failure.
   *
   * @public
   */
  ExceptionDescription?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContributorInsightsOutput {
  /**
   * The name of the table being described.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The name of the global secondary index being described.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * List of names of the associated contributor insights rules.
   *
   * @public
   */
  ContributorInsightsRuleList?: string[] | undefined;

  /**
   * Current status of contributor insights.
   *
   * @public
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | undefined;

  /**
   * Timestamp of the last time the status was changed.
   *
   * @public
   */
  LastUpdateDateTime?: Date | undefined;

  /**
   * Returns information about the last failure that was encountered.
   *
   * The most common exceptions for a FAILED status are:
   *
   * - LimitExceededException - Per-account Amazon CloudWatch Contributor Insights rule limit reached. Please disable Contributor Insights for other tables/indexes OR disable Contributor Insights rules before retrying.
   * - AccessDeniedException - Amazon CloudWatch Contributor Insights rules cannot be modified due to insufficient permissions.
   * - AccessDeniedException - Failed to create service-linked role for Contributor Insights due to insufficient permissions.
   * - InternalServerError - Failed to create Amazon CloudWatch Contributor Insights rules. Please retry request.
   *
   * @public
   */
  FailureException?: FailureException | undefined;

  /**
   * The mode of CloudWatch Contributor Insights for DynamoDB that determines which events are emitted. Can be set to track all access and throttled events or throttled events only.
   *
   * @public
   */
  ContributorInsightsMode?: ContributorInsightsMode | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsRequest {}

/**
 * An endpoint information details.
 *
 * @public
 */
export interface Endpoint {
  /**
   * IP address of the endpoint.
   *
   * @public
   */
  Address: string | undefined;

  /**
   * Endpoint cache time to live (TTL) value.
   *
   * @public
   */
  CachePeriodInMinutes: number | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointsResponse {
  /**
   * List of endpoints.
   *
   * @public
   */
  Endpoints: Endpoint[] | undefined;
}

/**
 * @public
 */
export interface DescribeExportInput {
  /**
   * The Amazon Resource Name (ARN) associated with the export.
   *
   * @public
   */
  ExportArn: string | undefined;
}

/**
 * Optional object containing the parameters specific to an incremental export.
 *
 * @public
 */
export interface IncrementalExportSpecification {
  /**
   * Time in the past which provides the inclusive start range for the export table's data, counted in seconds from the start of the Unix epoch. The incremental export will reflect the table's state including and after this point in time.
   *
   * @public
   */
  ExportFromTime?: Date | undefined;

  /**
   * Time in the past which provides the exclusive end range for the export table's data, counted in seconds from the start of the Unix epoch. The incremental export will reflect the table's state just prior to this point in time. If this is not provided, the latest time with data available will be used.
   *
   * @public
   */
  ExportToTime?: Date | undefined;

  /**
   * The view type that was chosen for the export. Valid values are `NEW_AND_OLD_IMAGES` and `NEW_IMAGES`. The default value is `NEW_AND_OLD_IMAGES`.
   *
   * `NEW_AND_OLD_IMAGES` exports both the new and old images of each changed item, while `NEW_IMAGES` exports only the new (latest) image. The view type you choose determines the structure of each item in the output for `insert`, `update`, and `delete` operations. For details and examples of how each view type shapes the export output, see [DynamoDB table export output format](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.Output.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExportViewType?: ExportViewType | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalTableInput {
  /**
   * The name of the global table.
   *
   * @public
   */
  GlobalTableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalTableOutput {
  /**
   * Contains the details of the global table.
   *
   * @public
   */
  GlobalTableDescription?: GlobalTableDescription | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalTableSettingsInput {
  /**
   * The name of the global table to describe.
   *
   * @public
   */
  GlobalTableName: string | undefined;
}

/**
 * Represents the properties of a global secondary index.
 *
 * @public
 */
export interface ReplicaGlobalSecondaryIndexSettingsDescription {
  /**
   * The name of the global secondary index. The name must be unique among all other indexes on this table.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The current status of the global secondary index:
   *
   * - `CREATING` - The global secondary index is being created.
   * - `UPDATING` - The global secondary index is being updated.
   * - `DELETING` - The global secondary index is being deleted.
   * - `ACTIVE` - The global secondary index is ready for use.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`.
   *
   * @public
   */
  ProvisionedReadCapacityUnits?: number | undefined;

  /**
   * Auto scaling settings for a global secondary index replica's read capacity units.
   *
   * @public
   */
  ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;

  /**
   * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException`.
   *
   * @public
   */
  ProvisionedWriteCapacityUnits?: number | undefined;

  /**
   * Auto scaling settings for a global secondary index replica's write capacity units.
   *
   * @public
   */
  ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
}

/**
 * Represents the properties of a replica.
 *
 * @public
 */
export interface ReplicaSettingsDescription {
  /**
   * The Region name of the replica.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The current state of the Region:
   *
   * - `CREATING` - The Region is being created.
   * - `UPDATING` - The Region is being updated.
   * - `DELETING` - The Region is being deleted.
   * - `ACTIVE` - The Region is ready for use.
   *
   * @public
   */
  ReplicaStatus?: ReplicaStatus | undefined;

  /**
   * The read/write capacity mode of the replica.
   *
   * @public
   */
  ReplicaBillingModeSummary?: BillingModeSummary | undefined;

  /**
   * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ReplicaProvisionedReadCapacityUnits?: number | undefined;

  /**
   * Auto scaling settings for a global table replica's read capacity units.
   *
   * @public
   */
  ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;

  /**
   * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ReplicaProvisionedWriteCapacityUnits?: number | undefined;

  /**
   * Auto scaling settings for a global table replica's write capacity units.
   *
   * @public
   */
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;

  /**
   * Replica global secondary index settings for the global table.
   *
   * @public
   */
  ReplicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[] | undefined;

  /**
   * Contains details of the table class.
   *
   * @public
   */
  ReplicaTableClassSummary?: TableClassSummary | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalTableSettingsOutput {
  /**
   * The name of the global table.
   *
   * @public
   */
  GlobalTableName?: string | undefined;

  /**
   * The Region-specific settings for the global table.
   *
   * @public
   */
  ReplicaSettings?: ReplicaSettingsDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeImportInput {
  /**
   * The Amazon Resource Name (ARN) associated with the table you're importing to.
   *
   * @public
   */
  ImportArn: string | undefined;
}

/**
 * The format options for the data that was imported into the target table. There is one value, CsvOption.
 *
 * @public
 */
export interface InputFormatOptions {
  /**
   * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
   *
   * @public
   */
  Csv?: CsvOptions | undefined;
}

/**
 * The S3 bucket that is being imported from.
 *
 * @public
 */
export interface S3BucketSource {
  /**
   * The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional.
   *
   * @public
   */
  S3BucketOwner?: string | undefined;

  /**
   * The S3 bucket that is being imported from.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The key prefix shared by all S3 Objects that are being imported.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;
}

/**
 * The parameters for the table created as part of the import operation.
 *
 * @public
 */
export interface TableCreationParameters {
  /**
   * The name of the table created as part of the import operation.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The attributes of the table created as part of the import operation.
   *
   * @public
   */
  AttributeDefinitions: AttributeDefinition[] | undefined;

  /**
   * The primary key and option sort key of the table created as part of the import operation.
   *
   * @public
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * The billing mode for provisioning the table created as part of the import operation.
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * Represents the provisioned throughput settings for the specified global secondary index. You must use `ProvisionedThroughput` or `OnDemandThroughput` based on your table’s capacity mode.
   *
   * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * Sets the maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * Represents the settings used to enable server-side encryption.
   *
   * @public
   */
  SSESpecification?: SSESpecification | undefined;

  /**
   * The Global Secondary Indexes (GSI) of the table to be created as part of the import operation.
   *
   * @public
   */
  GlobalSecondaryIndexes?: GlobalSecondaryIndex[] | undefined;

  /**
   * The vector indexes of the table to be created as part of the import operation.
   *
   * @public
   */
  VectorIndexes?: VectorIndex[] | undefined;
}

/**
 * Represents the properties of the table being imported into.
 *
 * @public
 */
export interface ImportTableDescription {
  /**
   * The Amazon Resource Number (ARN) corresponding to the import request.
   *
   * @public
   */
  ImportArn?: string | undefined;

  /**
   * The status of the import.
   *
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * The Amazon Resource Number (ARN) of the table being imported into.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * The table id corresponding to the table created by import table process.
   *
   * @public
   */
  TableId?: string | undefined;

  /**
   * The client token that was provided for the import task. Reusing the client token on retry makes a call to `ImportTable` idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Values for the S3 bucket the source file is imported from. Includes bucket name (required), key prefix (optional) and bucket account owner ID (optional).
   *
   * @public
   */
  S3BucketSource?: S3BucketSource | undefined;

  /**
   * The number of errors occurred on importing the source file into the target table.
   *
   * @public
   */
  ErrorCount?: number | undefined;

  /**
   * The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with the target table.
   *
   * @public
   */
  CloudWatchLogGroupArn?: string | undefined;

  /**
   * The format of the source data going into the target table.
   *
   * @public
   */
  InputFormat?: InputFormat | undefined;

  /**
   * The format options for the data that was imported into the target table. There is one value, CsvOption.
   *
   * @public
   */
  InputFormatOptions?: InputFormatOptions | undefined;

  /**
   * The compression options for the data that has been imported into the target table. The values are NONE, GZIP, or ZSTD.
   *
   * @public
   */
  InputCompressionType?: InputCompressionType | undefined;

  /**
   * The parameters for the new table that is being imported into.
   *
   * @public
   */
  TableCreationParameters?: TableCreationParameters | undefined;

  /**
   * The time when this import task started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time at which the creation of the table associated with this import task completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The total size of data processed from the source file, in Bytes.
   *
   * @public
   */
  ProcessedSizeBytes?: number | undefined;

  /**
   * The total number of items processed from the source file.
   *
   * @public
   */
  ProcessedItemCount?: number | undefined;

  /**
   * The number of items successfully imported into the new table.
   *
   * @public
   */
  ImportedItemCount?: number | undefined;

  /**
   * The error code corresponding to the failure that the import job ran into during execution.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * The error message corresponding to the failure that the import job ran into during execution.
   *
   * @public
   */
  FailureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImportOutput {
  /**
   * Represents the properties of the table created for the import, and parameters of the import. The import parameters include import status, how many items were processed, and how many errors were encountered.
   *
   * @public
   */
  ImportTableDescription: ImportTableDescription | undefined;
}

/**
 * @public
 */
export interface DescribeKinesisStreamingDestinationInput {
  /**
   * The name of the table being described. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * Describes a Kinesis data stream destination.
 *
 * @public
 */
export interface KinesisDataStreamDestination {
  /**
   * The ARN for a specific Kinesis data stream.
   *
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * The current status of replication.
   *
   * @public
   */
  DestinationStatus?: DestinationStatus | undefined;

  /**
   * The human-readable string that corresponds to the replica status.
   *
   * @public
   */
  DestinationStatusDescription?: string | undefined;

  /**
   * The precision of the Kinesis data stream timestamp. The values are either `MILLISECOND` or `MICROSECOND`.
   *
   * @public
   */
  ApproximateCreationDateTimePrecision?: ApproximateCreationDateTimePrecision | undefined;
}

/**
 * @public
 */
export interface DescribeKinesisStreamingDestinationOutput {
  /**
   * The name of the table being described.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The list of replica structures for the table being described.
   *
   * @public
   */
  KinesisDataStreamDestinations?: KinesisDataStreamDestination[] | undefined;
}

/**
 * Represents the input of a `DescribeLimits` operation. Has no content.
 *
 * @public
 */
export interface DescribeLimitsInput {}

/**
 * Represents the output of a `DescribeLimits` operation.
 *
 * @public
 */
export interface DescribeLimitsOutput {
  /**
   * The maximum total read capacity units that your account allows you to provision across all of your tables in this Region.
   *
   * @public
   */
  AccountMaxReadCapacityUnits?: number | undefined;

  /**
   * The maximum total write capacity units that your account allows you to provision across all of your tables in this Region.
   *
   * @public
   */
  AccountMaxWriteCapacityUnits?: number | undefined;

  /**
   * The maximum read capacity units that your account allows you to provision for a new table that you are creating in this Region, including the read capacity units provisioned for its global secondary indexes (GSIs).
   *
   * @public
   */
  TableMaxReadCapacityUnits?: number | undefined;

  /**
   * The maximum write capacity units that your account allows you to provision for a new table that you are creating in this Region, including the write capacity units provisioned for its global secondary indexes (GSIs).
   *
   * @public
   */
  TableMaxWriteCapacityUnits?: number | undefined;
}

/**
 * Represents the input of a `DescribeTable` operation.
 *
 * @public
 */
export interface DescribeTableInput {
  /**
   * The name of the table to describe. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * Represents the output of a `DescribeTable` operation.
 *
 * @public
 */
export interface DescribeTableOutput {
  /**
   * The properties of the table.
   *
   * @public
   */
  Table?: TableDescription | undefined;
}

/**
 * @public
 */
export interface DescribeTableReplicaAutoScalingInput {
  /**
   * The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * Represents the auto scaling configuration for a replica global secondary index.
 *
 * @public
 */
export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
  /**
   * The name of the global secondary index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The current state of the replica global secondary index:
   *
   * - `CREATING` - The index is being created.
   * - `UPDATING` - The table/index configuration is being updated. The table/index remains available for data operations when `UPDATING`
   * - `DELETING` - The index is being deleted.
   * - `ACTIVE` - The index is ready for use.
   *
   * @public
   */
  IndexStatus?: IndexStatus | undefined;

  /**
   * Represents the auto scaling settings for a global table or global secondary index.
   *
   * @public
   */
  ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;

  /**
   * Represents the auto scaling settings for a global table or global secondary index.
   *
   * @public
   */
  ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;
}

/**
 * Represents the auto scaling settings of the replica.
 *
 * @public
 */
export interface ReplicaAutoScalingDescription {
  /**
   * The Region where the replica exists.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * Replica-specific global secondary index auto scaling settings.
   *
   * @public
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[] | undefined;

  /**
   * Represents the auto scaling settings for a global table or global secondary index.
   *
   * @public
   */
  ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;

  /**
   * Represents the auto scaling settings for a global table or global secondary index.
   *
   * @public
   */
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription | undefined;

  /**
   * The current state of the replica:
   *
   * - `CREATING` - The replica is being created.
   * - `UPDATING` - The replica is being updated.
   * - `DELETING` - The replica is being deleted.
   * - `ACTIVE` - The replica is ready for use.
   *
   * @public
   */
  ReplicaStatus?: ReplicaStatus | undefined;
}

/**
 * Represents the auto scaling configuration for a global table.
 *
 * @public
 */
export interface TableAutoScalingDescription {
  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The current state of the table:
   *
   * - `CREATING` - The table is being created.
   * - `UPDATING` - The table is being updated.
   * - `DELETING` - The table is being deleted.
   * - `ACTIVE` - The table is ready for use.
   *
   * @public
   */
  TableStatus?: TableStatus | undefined;

  /**
   * Represents replicas of the global table.
   *
   * @public
   */
  Replicas?: ReplicaAutoScalingDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTableReplicaAutoScalingOutput {
  /**
   * Represents the auto scaling properties of the table.
   *
   * @public
   */
  TableAutoScalingDescription?: TableAutoScalingDescription | undefined;
}

/**
 * @public
 */
export interface DescribeTimeToLiveInput {
  /**
   * The name of the table to be described. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTimeToLiveOutput {
  /**
   * @public
   */
  TimeToLiveDescription?: TimeToLiveDescription | undefined;
}

/**
 * Enables setting the configuration for Kinesis Streaming.
 *
 * @public
 */
export interface EnableKinesisStreamingConfiguration {
  /**
   * Toggle for the precision of Kinesis data stream timestamp. The values are either `MILLISECOND` or `MICROSECOND`.
   *
   * @public
   */
  ApproximateCreationDateTimePrecision?: ApproximateCreationDateTimePrecision | undefined;
}

/**
 * @public
 */
export interface KinesisStreamingDestinationInput {
  /**
   * The name of the DynamoDB table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The ARN for a Kinesis data stream.
   *
   * @public
   */
  StreamArn: string | undefined;

  /**
   * The source for the Kinesis streaming information that is being enabled.
   *
   * @public
   */
  EnableKinesisStreamingConfiguration?: EnableKinesisStreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface KinesisStreamingDestinationOutput {
  /**
   * The name of the table being modified.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The ARN for the specific Kinesis data stream.
   *
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * The current status of the replication.
   *
   * @public
   */
  DestinationStatus?: DestinationStatus | undefined;

  /**
   * The destination for the Kinesis streaming information that is being enabled.
   *
   * @public
   */
  EnableKinesisStreamingConfiguration?: EnableKinesisStreamingConfiguration | undefined;
}

/**
 * The parameters for disassociating the local replica from a global table using Version 2019.11.21 with multi-Region eventual consistency (MREC).
 *
 * After disassociation completes, the replica remains a standalone regional table that keeps its data, indexes, and table settings.
 *
 * For request requirements, see [UpdateTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html). For prerequisites, the protection update, and completion checks, see [Disassociating a global table replica](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables-disassociate.html) in the *Amazon DynamoDB Developer Guide*.
 *
 * @public
 */
export interface DisassociateReplicationGroupMemberAction {
  /**
   * The Region of the replica to disassociate. Set this value to the Region where you send the `UpdateTable` request. You must use credentials for the account that owns the replica.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The mode for handling pending replication before disassociation completes. You must specify `WAIT_FOR_REPLICATION`. For more information, see [Disassociating a global table replica](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables-disassociate.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  DisassociationMode: DisassociationMode | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the DynamoDB resource to which the policy is attached. The resources you can specify include tables and streams.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * The resource-based policy document attached to the resource, which can be a table or stream, in JSON format.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * A unique string that represents the revision ID of the policy. If you're comparing revision IDs, make sure to always use string comparison logic.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ImportTableInput {
  /**
   * Providing a `ClientToken` makes the call to `ImportTableInput` idempotent, meaning that multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours, or the result might not be idempotent.
   *
   * If you submit a request with the same client token but a change in other parameters within the 8-hour idempotency window, DynamoDB returns an `IdempotentParameterMismatch` exception.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The S3 bucket that provides the source for the import.
   *
   * @public
   */
  S3BucketSource: S3BucketSource | undefined;

  /**
   * The format of the source data. Valid values for `ImportFormat` are `CSV`, `DYNAMODB_JSON` or `ION`.
   *
   * @public
   */
  InputFormat: InputFormat | undefined;

  /**
   * Additional properties that specify how the input is formatted,
   *
   * @public
   */
  InputFormatOptions?: InputFormatOptions | undefined;

  /**
   * Type of compression to be used on the input coming from the imported table.
   *
   * @public
   */
  InputCompressionType?: InputCompressionType | undefined;

  /**
   * Parameters for the table to import the data into.
   *
   * @public
   */
  TableCreationParameters: TableCreationParameters | undefined;
}

/**
 * @public
 */
export interface ImportTableOutput {
  /**
   * Represents the properties of the table created for the import, and parameters of the import. The import parameters include import status, how many items were processed, and how many errors were encountered.
   *
   * @public
   */
  ImportTableDescription: ImportTableDescription | undefined;
}

/**
 * @public
 */
export interface ListBackupsInput {
  /**
   * Lists the backups from the table specified in `TableName`. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * Maximum number of backups to return at once.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Only backups created after this time are listed. `TimeRangeLowerBound` is inclusive.
   *
   * @public
   */
  TimeRangeLowerBound?: Date | undefined;

  /**
   * Only backups created before this time are listed. `TimeRangeUpperBound` is exclusive.
   *
   * @public
   */
  TimeRangeUpperBound?: Date | undefined;

  /**
   * `LastEvaluatedBackupArn` is the Amazon Resource Name (ARN) of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the `ExclusiveStartBackupArn` of a new `ListBackups` operation in order to fetch the next page of results.
   *
   * @public
   */
  ExclusiveStartBackupArn?: string | undefined;

  /**
   * The backups from the table specified by `BackupType` are listed.
   *
   * Where `BackupType` can be:
   *
   * - `USER` - On-demand backup created by you. (The default setting if no other backup types are specified.)
   * - `SYSTEM` - On-demand backup automatically created by DynamoDB.
   * - `ALL` - All types of on-demand backups (USER and SYSTEM).
   *
   * @public
   */
  BackupType?: BackupTypeFilter | undefined;
}

/**
 * @public
 */
export interface ListBackupsOutput {
  /**
   * List of `BackupSummary` objects.
   *
   * @public
   */
  BackupSummaries?: BackupSummary[] | undefined;

  /**
   * The ARN of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the `ExclusiveStartBackupArn` of a new `ListBackups` operation in order to fetch the next page of results.
   *
   * If `LastEvaluatedBackupArn` is empty, then the last page of results has been processed and there are no more results to be retrieved.
   *
   * If `LastEvaluatedBackupArn` is not empty, this may or may not indicate that there is more data to be returned. All results are guaranteed to have been returned if and only if no value for `LastEvaluatedBackupArn` is returned.
   *
   * @public
   */
  LastEvaluatedBackupArn?: string | undefined;
}

/**
 * @public
 */
export interface ListContributorInsightsInput {
  /**
   * The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * A token to for the desired page, if there is one.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListContributorInsightsOutput {
  /**
   * A list of ContributorInsightsSummary.
   *
   * @public
   */
  ContributorInsightsSummaries?: ContributorInsightsSummary[] | undefined;

  /**
   * A token to go to the next page if there is one.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsInput {
  /**
   * The Amazon Resource Name (ARN) associated with the exported table.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * Maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional string that, if supplied, must be copied from the output of a previous call to `ListExports`. When provided in this manner, the API fetches the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about an export task.
 *
 * @public
 */
export interface ExportSummary {
  /**
   * The Amazon Resource Name (ARN) of the export.
   *
   * @public
   */
  ExportArn?: string | undefined;

  /**
   * Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED.
   *
   * @public
   */
  ExportStatus?: ExportStatus | undefined;

  /**
   * The type of export that was performed. Valid values are `FULL_EXPORT` or `INCREMENTAL_EXPORT`.
   *
   * @public
   */
  ExportType?: ExportType | undefined;
}

/**
 * @public
 */
export interface ListExportsOutput {
  /**
   * A list of `ExportSummary` objects.
   *
   * @public
   */
  ExportSummaries?: ExportSummary[] | undefined;

  /**
   * If this value is returned, there are additional results to be displayed. To retrieve them, call `ListExports` again, with `NextToken` set to this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGlobalTablesInput {
  /**
   * The first global table name that this operation will evaluate.
   *
   * @public
   */
  ExclusiveStartGlobalTableName?: string | undefined;

  /**
   * The maximum number of table names to return, if the parameter is not specified DynamoDB defaults to 100.
   *
   * If the number of global tables DynamoDB finds reaches this limit, it stops the operation and returns the table names collected up to that point, with a table name in the `LastEvaluatedGlobalTableName` to apply in a subsequent operation to the `ExclusiveStartGlobalTableName` parameter.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Lists the global tables in a specific Region.
   *
   * @public
   */
  RegionName?: string | undefined;
}

/**
 * Represents the properties of a global table.
 *
 * @public
 */
export interface GlobalTable {
  /**
   * The global table name.
   *
   * @public
   */
  GlobalTableName?: string | undefined;

  /**
   * The Regions where the global table has replicas.
   *
   * @public
   */
  ReplicationGroup?: Replica[] | undefined;
}

/**
 * @public
 */
export interface ListGlobalTablesOutput {
  /**
   * List of global table names.
   *
   * @public
   */
  GlobalTables?: GlobalTable[] | undefined;

  /**
   * Last evaluated global table name.
   *
   * @public
   */
  LastEvaluatedGlobalTableName?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsInput {
  /**
   * The Amazon Resource Name (ARN) associated with the table that was imported to.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * The number of `ImportSummary`objects returned in a single page.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * An optional string that, if supplied, must be copied from the output of a previous call to `ListImports`. When provided in this manner, the API fetches the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about the source file for the import.
 *
 * @public
 */
export interface ImportSummary {
  /**
   * The Amazon Resource Number (ARN) corresponding to the import request.
   *
   * @public
   */
  ImportArn?: string | undefined;

  /**
   * The status of the import operation.
   *
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * The Amazon Resource Number (ARN) of the table being imported into.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * The path and S3 bucket of the source file that is being imported. This includes the S3Bucket (required), S3KeyPrefix (optional) and S3BucketOwner (optional if the bucket is owned by the requester).
   *
   * @public
   */
  S3BucketSource?: S3BucketSource | undefined;

  /**
   * The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with this import task.
   *
   * @public
   */
  CloudWatchLogGroupArn?: string | undefined;

  /**
   * The format of the source data. Valid values are `CSV`, `DYNAMODB_JSON` or `ION`.
   *
   * @public
   */
  InputFormat?: InputFormat | undefined;

  /**
   * The time at which this import task began.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time at which this import task ended.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListImportsOutput {
  /**
   * A list of `ImportSummary` objects.
   *
   * @public
   */
  ImportSummaryList?: ImportSummary[] | undefined;

  /**
   * If this value is returned, there are additional results to be displayed. To retrieve them, call `ListImports` again, with `NextToken` set to this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the input of a `ListTables` operation.
 *
 * @public
 */
export interface ListTablesInput {
  /**
   * The first table name that this operation will evaluate. Use the value that was returned for `LastEvaluatedTableName` in a previous operation, so that you can obtain the next page of results.
   *
   * @public
   */
  ExclusiveStartTableName?: string | undefined;

  /**
   * A maximum number of table names to return. If this parameter is not specified, the limit is 100.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Represents the output of a `ListTables` operation.
 *
 * @public
 */
export interface ListTablesOutput {
  /**
   * The names of the tables associated with the current account at the current endpoint. The maximum size of this array is 100.
   *
   * If `LastEvaluatedTableName` also appears in the output, you can use this value as the `ExclusiveStartTableName` parameter in a subsequent `ListTables` request and obtain the next page of results.
   *
   * @public
   */
  TableNames?: string[] | undefined;

  /**
   * The name of the last table in the current page of results. Use this value as the `ExclusiveStartTableName` in a new request to obtain the next page of results, until all the table names are returned.
   *
   * If you do not receive a `LastEvaluatedTableName` value in the response, this means that there are no more table names to be retrieved.
   *
   * @public
   */
  LastEvaluatedTableName?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsOfResourceInput {
  /**
   * The Amazon DynamoDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An optional string that, if supplied, must be copied from the output of a previous call to ListTagOfResource. When provided in this manner, this API fetches the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsOfResourceOutput {
  /**
   * The tags currently associated with the Amazon DynamoDB resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If this value is returned, there are additional results to be displayed. To retrieve them, call ListTagsOfResource again, with NextToken set to this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the DynamoDB resource to which the policy will be attached. The resources you can specify include tables and streams.
   *
   * You can control index permissions using the base table's policy. To specify the same permission level for your table and its indexes, you can provide both the table and index Amazon Resource Name (ARN)s in the `Resource` field of a given `Statement` in your policy document. Alternatively, to specify different permissions for your table, indexes, or both, you can define multiple `Statement` fields in your policy document.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An Amazon Web Services resource-based policy document in JSON format.
   *
   * - The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit.
   * - Within a resource-based policy, if the action for a DynamoDB service-linked role (SLR) to replicate data for a global table is denied, adding or deleting a replica will fail with an error.
   *
   * For a full list of all considerations that apply while attaching a resource-based policy, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * A string value that you can use to conditionally update your policy. You can provide the revision ID of your existing policy to make mutating requests against that policy.
   *
   * > **Note:** When you provide an expected revision ID, if the revision ID of the existing policy on the resource doesn't match or if there's no policy attached to the resource, your request will be rejected with a `PolicyNotFoundException`.
   *
   * To conditionally attach a policy when no policy exists for the resource, specify `NO_POLICY` for the revision ID.
   *
   * @public
   */
  ExpectedRevisionId?: string | undefined;

  /**
   * Set this parameter to `true` to confirm that you want to remove your permissions to change the policy of this resource in the future.
   *
   * @public
   */
  ConfirmRemoveSelfResourceAccess?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * A unique string that represents the revision ID of the policy. If you're comparing revision IDs, make sure to always use string comparison logic.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface RestoreTableFromBackupInput {
  /**
   * The name of the new table to which the backup must be restored.
   *
   * @public
   */
  TargetTableName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the backup.
   *
   * @public
   */
  BackupArn: string | undefined;

  /**
   * The billing mode of the restored table.
   *
   * @public
   */
  BillingModeOverride?: BillingMode | undefined;

  /**
   * List of global secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.
   *
   * @public
   */
  GlobalSecondaryIndexOverride?: GlobalSecondaryIndex[] | undefined;

  /**
   * List of local secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.
   *
   * @public
   */
  LocalSecondaryIndexOverride?: LocalSecondaryIndex[] | undefined;

  /**
   * Provisioned throughput settings for the restored table.
   *
   * @public
   */
  ProvisionedThroughputOverride?: ProvisionedThroughput | undefined;

  /**
   * Sets the maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughputOverride?: OnDemandThroughput | undefined;

  /**
   * The new server-side encryption settings for the restored table.
   *
   * @public
   */
  SSESpecificationOverride?: SSESpecification | undefined;

  /**
   * The vector indexes for the restored table. If not specified, all vector indexes from the backup are restored. The indexes provided must match existing vector indexes from the backup. You can choose to exclude some or all of the vector indexes at the time of restore.
   *
   * @public
   */
  VectorIndexOverride?: VectorIndex[] | undefined;
}

/**
 * @public
 */
export interface RestoreTableFromBackupOutput {
  /**
   * The description of the table created from an existing backup.
   *
   * @public
   */
  TableDescription?: TableDescription | undefined;
}

/**
 * @public
 */
export interface RestoreTableToPointInTimeInput {
  /**
   * The DynamoDB table that will be restored. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  SourceTableArn?: string | undefined;

  /**
   * Name of the source table that is being restored.
   *
   * @public
   */
  SourceTableName?: string | undefined;

  /**
   * The name of the new table to which it must be restored to.
   *
   * @public
   */
  TargetTableName: string | undefined;

  /**
   * Restore the table to the latest possible time. `LatestRestorableDateTime` is typically 5 minutes before the current time.
   *
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * Time in the past to restore the table to.
   *
   * @public
   */
  RestoreDateTime?: Date | undefined;

  /**
   * The billing mode of the restored table.
   *
   * @public
   */
  BillingModeOverride?: BillingMode | undefined;

  /**
   * List of global secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.
   *
   * The `WarmThroughput` setting is not supported on global secondary indexes when you use `RestoreTableToPointInTime`. Although `WarmThroughput` appears in the shared index definition, including it in a `GlobalSecondaryIndexOverride` entry causes the request to fail with a validation error.
   *
   * @public
   */
  GlobalSecondaryIndexOverride?: GlobalSecondaryIndex[] | undefined;

  /**
   * List of local secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.
   *
   * @public
   */
  LocalSecondaryIndexOverride?: LocalSecondaryIndex[] | undefined;

  /**
   * Provisioned throughput settings for the restored table.
   *
   * @public
   */
  ProvisionedThroughputOverride?: ProvisionedThroughput | undefined;

  /**
   * Sets the maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughputOverride?: OnDemandThroughput | undefined;

  /**
   * The new server-side encryption settings for the restored table.
   *
   * @public
   */
  SSESpecificationOverride?: SSESpecification | undefined;

  /**
   * The vector indexes for the restored table. If not specified, all vector indexes from the source table are restored. The indexes provided must match existing vector indexes from the source table. You can choose to exclude some or all of the vector indexes at the time of restore.
   *
   * @public
   */
  VectorIndexOverride?: VectorIndex[] | undefined;
}

/**
 * @public
 */
export interface RestoreTableToPointInTimeOutput {
  /**
   * Represents the properties of a table.
   *
   * @public
   */
  TableDescription?: TableDescription | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * Identifies the Amazon DynamoDB resource to which tags should be added. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to be assigned to the Amazon DynamoDB resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The DynamoDB resource that the tags will be removed from. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag keys. Existing tags of the resource whose keys are members of this list will be removed from the DynamoDB resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Represents the settings used to enable point in time recovery.
 *
 * @public
 */
export interface PointInTimeRecoverySpecification {
  /**
   * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
   *
   * @public
   */
  PointInTimeRecoveryEnabled: boolean | undefined;

  /**
   * The number of preceding days for which continuous backups are taken and maintained. Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.
   *
   * @public
   */
  RecoveryPeriodInDays?: number | undefined;
}

/**
 * @public
 */
export interface UpdateContinuousBackupsInput {
  /**
   * The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Represents the settings used to enable point in time recovery.
   *
   * @public
   */
  PointInTimeRecoverySpecification: PointInTimeRecoverySpecification | undefined;
}

/**
 * @public
 */
export interface UpdateContinuousBackupsOutput {
  /**
   * Represents the continuous backups and point in time recovery settings on the table.
   *
   * @public
   */
  ContinuousBackupsDescription?: ContinuousBackupsDescription | undefined;
}

/**
 * @public
 */
export interface UpdateContributorInsightsInput {
  /**
   * The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The global secondary index name, if applicable.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * Represents the contributor insights action.
   *
   * @public
   */
  ContributorInsightsAction: ContributorInsightsAction | undefined;

  /**
   * Specifies whether to track all access and throttled events or throttled events only for the DynamoDB table or index.
   *
   * @public
   */
  ContributorInsightsMode?: ContributorInsightsMode | undefined;
}

/**
 * @public
 */
export interface UpdateContributorInsightsOutput {
  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The name of the global secondary index, if applicable.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The status of contributor insights
   *
   * @public
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | undefined;

  /**
   * The updated mode of CloudWatch Contributor Insights that determines whether to monitor all access and throttled events or to track throttled events exclusively.
   *
   * @public
   */
  ContributorInsightsMode?: ContributorInsightsMode | undefined;
}

/**
 * Represents one of the following:
 *
 * - A new replica to be added to an existing global table.
 * - New parameters for an existing replica.
 * - An existing replica to be removed from an existing global table.
 *
 * @public
 */
export interface ReplicaUpdate {
  /**
   * The parameters required for creating a replica on an existing global table.
   *
   * @public
   */
  Create?: CreateReplicaAction | undefined;

  /**
   * The name of the existing replica to be removed.
   *
   * @public
   */
  Delete?: DeleteReplicaAction | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalTableInput {
  /**
   * The global table name.
   *
   * @public
   */
  GlobalTableName: string | undefined;

  /**
   * A list of Regions that should be added or removed from the global table.
   *
   * @public
   */
  ReplicaUpdates: ReplicaUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalTableOutput {
  /**
   * Contains the details of the global table.
   *
   * @public
   */
  GlobalTableDescription?: GlobalTableDescription | undefined;
}

/**
 * Represents the settings of a global secondary index for a global table that will be modified.
 *
 * @public
 */
export interface GlobalTableGlobalSecondaryIndexSettingsUpdate {
  /**
   * The name of the global secondary index. The name must be unique among all other indexes on this table.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException.`
   *
   * @public
   */
  ProvisionedWriteCapacityUnits?: number | undefined;

  /**
   * Auto scaling settings for managing a global secondary index's write capacity units.
   *
   * @public
   */
  ProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate | undefined;
}

/**
 * Represents the settings of a global secondary index for a global table that will be modified.
 *
 * @public
 */
export interface ReplicaGlobalSecondaryIndexSettingsUpdate {
  /**
   * The name of the global secondary index. The name must be unique among all other indexes on this table.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`.
   *
   * @public
   */
  ProvisionedReadCapacityUnits?: number | undefined;

  /**
   * Auto scaling settings for managing a global secondary index replica's read capacity units.
   *
   * @public
   */
  ProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate | undefined;
}

/**
 * Represents the settings for a global table in a Region that will be modified.
 *
 * @public
 */
export interface ReplicaSettingsUpdate {
  /**
   * The Region of the replica to be added.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ReplicaProvisionedReadCapacityUnits?: number | undefined;

  /**
   * Auto scaling settings for managing a global table replica's read capacity units.
   *
   * @public
   */
  ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate | undefined;

  /**
   * Represents the settings of a global secondary index for a global table that will be modified.
   *
   * @public
   */
  ReplicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdate[] | undefined;

  /**
   * Replica-specific table class. If not specified, uses the source table's table class.
   *
   * @public
   */
  ReplicaTableClass?: TableClass | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalTableSettingsInput {
  /**
   * The name of the global table
   *
   * @public
   */
  GlobalTableName: string | undefined;

  /**
   * The billing mode of the global table. If `GlobalTableBillingMode` is not specified, the global table defaults to `PROVISIONED` capacity billing mode.
   *
   * - `PROVISIONED` - We recommend using `PROVISIONED` for predictable workloads. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).
   * - `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for unpredictable workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).
   *
   * @public
   */
  GlobalTableBillingMode?: BillingMode | undefined;

  /**
   * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException.`
   *
   * @public
   */
  GlobalTableProvisionedWriteCapacityUnits?: number | undefined;

  /**
   * Auto scaling settings for managing provisioned write capacity for the global table.
   *
   * @public
   */
  GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate | undefined;

  /**
   * Represents the settings of a global secondary index for a global table that will be modified.
   *
   * @public
   */
  GlobalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdate[] | undefined;

  /**
   * Represents the settings for a global table in a Region that will be modified.
   *
   * @public
   */
  ReplicaSettingsUpdate?: ReplicaSettingsUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalTableSettingsOutput {
  /**
   * The name of the global table.
   *
   * @public
   */
  GlobalTableName?: string | undefined;

  /**
   * The Region-specific settings for the global table.
   *
   * @public
   */
  ReplicaSettings?: ReplicaSettingsDescription[] | undefined;
}

/**
 * Enables updating the configuration for Kinesis Streaming.
 *
 * @public
 */
export interface UpdateKinesisStreamingConfiguration {
  /**
   * Enables updating the precision of Kinesis data stream timestamp.
   *
   * @public
   */
  ApproximateCreationDateTimePrecision?: ApproximateCreationDateTimePrecision | undefined;
}

/**
 * @public
 */
export interface UpdateKinesisStreamingDestinationInput {
  /**
   * The table name for the Kinesis streaming destination input. You can also provide the ARN of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Kinesis stream input.
   *
   * @public
   */
  StreamArn: string | undefined;

  /**
   * The command to update the Kinesis stream configuration.
   *
   * @public
   */
  UpdateKinesisStreamingConfiguration?: UpdateKinesisStreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKinesisStreamingDestinationOutput {
  /**
   * The table name for the Kinesis streaming destination output.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The ARN for the Kinesis stream input.
   *
   * @public
   */
  StreamArn?: string | undefined;

  /**
   * The status of the attempt to update the Kinesis streaming destination output.
   *
   * @public
   */
  DestinationStatus?: DestinationStatus | undefined;

  /**
   * The command to update the Kinesis streaming destination configuration.
   *
   * @public
   */
  UpdateKinesisStreamingConfiguration?: UpdateKinesisStreamingConfiguration | undefined;
}

/**
 * Represents the new provisioned throughput settings to be applied to a global secondary index.
 *
 * @public
 */
export interface UpdateGlobalSecondaryIndexAction {
  /**
   * The name of the global secondary index to be updated.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * Represents the provisioned throughput settings for the specified global secondary index.
   *
   * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * Updates the maximum number of read and write units for the specified global secondary index. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * Represents the warm throughput value of the new provisioned throughput settings to be applied to a global secondary index.
   *
   * @public
   */
  WarmThroughput?: WarmThroughput | undefined;
}

/**
 * Represents one of the following:
 *
 * - A new global secondary index to be added to an existing table.
 * - New provisioned throughput parameters for an existing global secondary index.
 * - An existing global secondary index to be removed from an existing table.
 *
 * @public
 */
export interface GlobalSecondaryIndexUpdate {
  /**
   * The name of an existing global secondary index, along with new provisioned throughput settings to be applied to that index.
   *
   * @public
   */
  Update?: UpdateGlobalSecondaryIndexAction | undefined;

  /**
   * The parameters required for creating a global secondary index on an existing table:
   *
   * - `IndexName`
   * - `KeySchema`
   * - `AttributeDefinitions`
   * - `Projection`
   * - `ProvisionedThroughput`
   *
   * @public
   */
  Create?: CreateGlobalSecondaryIndexAction | undefined;

  /**
   * The name of an existing global secondary index to be removed.
   *
   * @public
   */
  Delete?: DeleteGlobalSecondaryIndexAction | undefined;
}

/**
 * Represents one of the following:
 *
 * - A new witness to be added to a new global table.
 * - An existing witness to be removed from an existing global table.
 *
 * You can configure one witness per MRSC global table.
 *
 * @public
 */
export interface GlobalTableWitnessGroupUpdate {
  /**
   * Specifies a witness Region to be added to a new MRSC global table. The witness must be added when creating the MRSC global table.
   *
   * @public
   */
  Create?: CreateGlobalTableWitnessGroupMemberAction | undefined;

  /**
   * Specifies a witness Region to be removed from an existing global table. Must be done in conjunction with removing a replica. The deletion of both a witness and replica converts the remaining replica to a single-Region DynamoDB table.
   *
   * @public
   */
  Delete?: DeleteGlobalTableWitnessGroupMemberAction | undefined;
}

/**
 * Represents a replica to be modified.
 *
 * @public
 */
export interface UpdateReplicationGroupMemberAction {
  /**
   * The Region where the replica exists.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The KMS key of the replica that should be used for KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB KMS key `alias/aws/dynamodb`.
   *
   * @public
   */
  KMSMasterKeyId?: string | undefined;

  /**
   * Replica-specific provisioned throughput. If not specified, uses the source table's provisioned throughput settings.
   *
   * @public
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride | undefined;

  /**
   * Overrides the maximum on-demand throughput for the replica table.
   *
   * @public
   */
  OnDemandThroughputOverride?: OnDemandThroughputOverride | undefined;

  /**
   * Replica-specific global secondary index settings.
   *
   * @public
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[] | undefined;

  /**
   * Replica-specific table class. If not specified, uses the source table's table class.
   *
   * @public
   */
  TableClassOverride?: TableClass | undefined;
}

/**
 * Represents one of the following:
 *
 * - A new replica to be added to an existing regional table or global table. This request invokes the `CreateTableReplica` action in the destination Region.
 * - New parameters for an existing replica. This request invokes the `UpdateTable` action in the destination Region.
 * - An existing replica to be deleted. The request invokes the `DeleteTableReplica` action in the destination Region, deleting the replica and all if its items in the destination Region.
 * - The local replica to be disassociated from a global table and retained as a standalone regional table.
 *
 * Each `ReplicationGroupUpdate` contains exactly one action. A `Disassociate` action must be the only replica update in the request; including other updates causes the request to fail.
 *
 * > **Note:** When you manually remove a table or global table replica, you do not automatically remove any associated scalable targets, scaling policies, or CloudWatch alarms.
 *
 * @public
 */
export interface ReplicationGroupUpdate {
  /**
   * The parameters required for creating a replica for the table.
   *
   * @public
   */
  Create?: CreateReplicationGroupMemberAction | undefined;

  /**
   * The parameters required for updating a replica for the table.
   *
   * @public
   */
  Update?: UpdateReplicationGroupMemberAction | undefined;

  /**
   * The parameters required for deleting a replica for the table.
   *
   * @public
   */
  Delete?: DeleteReplicationGroupMemberAction | undefined;

  /**
   * The parameters for disassociating the local replica from the global table and retaining it as a standalone regional table.
   *
   * @public
   */
  Disassociate?: DisassociateReplicationGroupMemberAction | undefined;
}

/**
 * A vector index to be added to or removed from a table.
 *
 * @public
 */
export interface VectorIndexUpdate {
  /**
   * The configuration for creating a new vector index on the table.
   *
   * @public
   */
  Create?: CreateVectorIndexAction | undefined;

  /**
   * The configuration for deleting an existing vector index from the table.
   *
   * @public
   */
  Delete?: DeleteVectorIndexAction | undefined;
}

/**
 * Represents the input of an `UpdateTable` operation.
 *
 * @public
 */
export interface UpdateTableInput {
  /**
   * An array of attributes that describe the key schema for the table and indexes. If you are adding a new global secondary index to the table, `AttributeDefinitions` must include the key element(s) of the new index.
   *
   * @public
   */
  AttributeDefinitions?: AttributeDefinition[] | undefined;

  /**
   * The name of the table to be updated. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Controls how you are charged for read and write throughput and how you manage capacity. When switching from pay-per-request to provisioned capacity, initial provisioned capacity values must be set. The initial provisioned capacity values are estimated based on the consumed read and write capacity of your table and global secondary indexes over the past 30 minutes.
   *
   * - `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for most DynamoDB workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html).
   * - `PROVISIONED` - We recommend using `PROVISIONED` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).
   *
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * The new provisioned throughput settings for the specified table or index.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * An array of one or more global secondary indexes for the table. For each index in the array, you can request one action:
   *
   * - `Create` - add a new global secondary index to the table.
   * - `Update` - modify the provisioned throughput settings of an existing global secondary index.
   * - `Delete` - remove a global secondary index from the table.
   *
   * You can create or delete only one global secondary index per `UpdateTable` operation.
   *
   * For more information, see [Managing Global Secondary Indexes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.OnlineOps.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdate[] | undefined;

  /**
   * Represents the DynamoDB Streams configuration for the table.
   *
   * > **Note:** You receive a `ValidationException` if you try to enable a stream on a table that already has a stream, or if you try to disable a stream on a table that doesn't have a stream.
   *
   * @public
   */
  StreamSpecification?: StreamSpecification | undefined;

  /**
   * The new server-side encryption settings for the specified table.
   *
   * @public
   */
  SSESpecification?: SSESpecification | undefined;

  /**
   * A list of replica update actions (create, delete, update, or disassociate) for the table.
   *
   * @public
   */
  ReplicaUpdates?: ReplicationGroupUpdate[] | undefined;

  /**
   * The table class of the table to be updated. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
   *
   * @public
   */
  TableClass?: TableClass | undefined;

  /**
   * Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table.
   *
   * @public
   */
  DeletionProtectionEnabled?: boolean | undefined;

  /**
   * Specifies the consistency mode for a new global table. This parameter is only valid when you create a global table by specifying one or more [Create](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ReplicationGroupUpdate.html#DDB-Type-ReplicationGroupUpdate-Create) actions in the [ReplicaUpdates](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html#DDB-UpdateTable-request-ReplicaUpdates) action list.
   *
   * You can specify one of the following consistency modes:
   *
   * - `EVENTUAL`: Configures a new global table for multi-Region eventual consistency (MREC). This is the default consistency mode for global tables.
   * - `STRONG`: Configures a new global table for multi-Region strong consistency (MRSC).
   *
   * If you don't specify this field, the global table consistency mode defaults to `EVENTUAL`. For more information about global tables consistency modes, see [Consistency modes](https://docs.aws.amazon.com/V2globaltables_HowItWorks.html#V2globaltables_HowItWorks.consistency-modes) in DynamoDB developer guide.
   *
   * @public
   */
  MultiRegionConsistency?: MultiRegionConsistency | undefined;

  /**
   * A list of witness updates for a MRSC global table. A witness provides a cost-effective alternative to a full replica in a MRSC global table by maintaining replicated change data written to global table replicas. You cannot perform read or write operations on a witness. For each witness, you can request one action:
   *
   * - `Create` - add a new witness to the global table.
   * - `Delete` - remove a witness from the global table.
   *
   * You can create or delete only one witness per `UpdateTable` operation.
   *
   * For more information, see [Multi-Region strong consistency (MRSC)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html#V2globaltables_HowItWorks.consistency-modes) in the Amazon DynamoDB Developer Guide
   *
   * @public
   */
  GlobalTableWitnessUpdates?: GlobalTableWitnessGroupUpdate[] | undefined;

  /**
   * Updates the maximum number of read and write units for the specified table in on-demand capacity mode. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
   *
   * @public
   */
  OnDemandThroughput?: OnDemandThroughput | undefined;

  /**
   * Represents the warm throughput (in read units per second and write units per second) for updating a table.
   *
   * @public
   */
  WarmThroughput?: WarmThroughput | undefined;

  /**
   * Controls the settings replication mode for a global table replica. This attribute can be defined using UpdateTable operation only on a regional table with values:
   *
   * - `ENABLED`: Defines settings replication on a regional table to be used as a source table for creating Multi-Account Global Table.
   * - `DISABLED`: Remove settings replication on a regional table. Settings replication needs to be defined to ENABLED again in order to create a Multi-Account Global Table using this table.
   *
   * @public
   */
  GlobalTableSettingsReplicationMode?: GlobalTableSettingsReplicationMode | undefined;

  /**
   * Specifies whether disassociation protection is enabled (`true`) or disabled (`false`) for the local replica of a multi-Region eventual consistency (MREC) global table using Version 2019.11.21.
   *
   * Disassociation protection is enabled by default. If you omit this parameter, the existing setting is unchanged. This setting is independent of `DeletionProtectionEnabled`.
   *
   * You can't combine this change with any other change in the same `UpdateTable` request.
   *
   * @public
   */
  DisassociationProtectionEnabled?: boolean | undefined;

  /**
   * A list of vector indexes to be added to or removed from the table. You can add or remove one vector index for each `UpdateTable` operation.
   *
   * To add a vector index, specify `IndexName`, `VectorAttribute`, `Dimensions`, `DistanceFunction`, and `Projection`. To remove a vector index, specify only the `IndexName`.
   *
   * @public
   */
  VectorIndexUpdates?: VectorIndexUpdate[] | undefined;
}

/**
 * Represents the output of an `UpdateTable` operation.
 *
 * @public
 */
export interface UpdateTableOutput {
  /**
   * Represents the properties of the table.
   *
   * @public
   */
  TableDescription?: TableDescription | undefined;
}

/**
 * Represents the auto scaling settings of a global secondary index for a global table that will be modified.
 *
 * @public
 */
export interface GlobalSecondaryIndexAutoScalingUpdate {
  /**
   * The name of the global secondary index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * Represents the auto scaling settings to be modified for a global table or global secondary index.
   *
   * @public
   */
  ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate | undefined;
}

/**
 * Represents the auto scaling settings of a global secondary index for a replica that will be modified.
 *
 * @public
 */
export interface ReplicaGlobalSecondaryIndexAutoScalingUpdate {
  /**
   * The name of the global secondary index.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * Represents the auto scaling settings to be modified for a global table or global secondary index.
   *
   * @public
   */
  ProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate | undefined;
}

/**
 * Represents the auto scaling settings of a replica that will be modified.
 *
 * @public
 */
export interface ReplicaAutoScalingUpdate {
  /**
   * The Region where the replica exists.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * Represents the auto scaling settings of global secondary indexes that will be modified.
   *
   * @public
   */
  ReplicaGlobalSecondaryIndexUpdates?: ReplicaGlobalSecondaryIndexAutoScalingUpdate[] | undefined;

  /**
   * Represents the auto scaling settings to be modified for a global table or global secondary index.
   *
   * @public
   */
  ReplicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateTableReplicaAutoScalingInput {
  /**
   * Represents the auto scaling settings of the global secondary indexes of the replica to be updated.
   *
   * @public
   */
  GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdate[] | undefined;

  /**
   * The name of the global table to be updated. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Represents the auto scaling settings to be modified for a global table or global secondary index.
   *
   * @public
   */
  ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate | undefined;

  /**
   * Represents the auto scaling settings of replicas of the table that will be modified.
   *
   * @public
   */
  ReplicaUpdates?: ReplicaAutoScalingUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateTableReplicaAutoScalingOutput {
  /**
   * Returns information about the auto scaling settings of a table with replicas.
   *
   * @public
   */
  TableAutoScalingDescription?: TableAutoScalingDescription | undefined;
}

/**
 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
 *
 * @public
 */
export interface TimeToLiveSpecification {
  /**
   * Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The name of the TTL attribute used to store the expiration time for items in the table.
   *
   * @public
   */
  AttributeName: string | undefined;
}

/**
 * Represents the input of an `UpdateTimeToLive` operation.
 *
 * @public
 */
export interface UpdateTimeToLiveInput {
  /**
   * The name of the table to be configured. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Represents the settings used to enable or disable Time to Live for the specified table.
   *
   * @public
   */
  TimeToLiveSpecification: TimeToLiveSpecification | undefined;
}

/**
 * @public
 */
export interface UpdateTimeToLiveOutput {
  /**
   * Represents the output of an `UpdateTimeToLive` operation.
   *
   * @public
   */
  TimeToLiveSpecification?: TimeToLiveSpecification | undefined;
}

/**
 * Represents the data for an attribute.
 *
 * Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.
 *
 * For more information, see [Data Types](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes) in the *Amazon DynamoDB Developer Guide*.
 *
 * @public
 */
export type AttributeValue =
  | AttributeValue.BMember
  | AttributeValue.BOOLMember
  | AttributeValue.BSMember
  | AttributeValue.LMember
  | AttributeValue.MMember
  | AttributeValue.NMember
  | AttributeValue.NSMember
  | AttributeValue.NULLMember
  | AttributeValue.SMember
  | AttributeValue.SSMember
  | AttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace AttributeValue {
  /**
   * An attribute of type String. For example:
   *
   * `"S": "Hello"`
   *
   * @public
   */
  export interface SMember {
    S: string;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Number. For example:
   *
   * `"N": "123.45"`
   *
   * Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.
   *
   * @public
   */
  export interface NMember {
    S?: never;
    N: string;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Binary. For example:
   *
   * `"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"`
   *
   * @public
   */
  export interface BMember {
    S?: never;
    N?: never;
    B: Uint8Array;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type String Set. For example:
   *
   * `"SS": ["Giraffe", "Hippo" ,"Zebra"]`
   *
   * @public
   */
  export interface SSMember {
    S?: never;
    N?: never;
    B?: never;
    SS: string[];
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Number Set. For example:
   *
   * `"NS": ["42.2", "-19", "7.5", "3.14"]`
   *
   * Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.
   *
   * @public
   */
  export interface NSMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS: string[];
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Binary Set. For example:
   *
   * `"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]`
   *
   * @public
   */
  export interface BSMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS: Uint8Array[];
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Map. For example:
   *
   * `"M": \{"Name": \{"S": "Joe"\}, "Age": \{"N": "35"\}\}`
   *
   * @public
   */
  export interface MMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M: Record<string, AttributeValue>;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type List. For example:
   *
   * `"L": [ \{"S": "Cookies"\} , \{"S": "Coffee"\}, \{"N": "3.14159"\}]`
   *
   * @public
   */
  export interface LMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L: AttributeValue[];
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Null. For example:
   *
   * `"NULL": true`
   *
   * @public
   */
  export interface NULLMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL: boolean;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * An attribute of type Boolean. For example:
   *
   * `"BOOL": true`
   *
   * @public
   */
  export interface BOOLMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M?: never;
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S: (value: string) => T;
    N: (value: string) => T;
    B: (value: Uint8Array) => T;
    SS: (value: string[]) => T;
    NS: (value: string[]) => T;
    BS: (value: Uint8Array[]) => T;
    M: (value: Record<string, AttributeValue>) => T;
    L: (value: AttributeValue[]) => T;
    NULL: (value: boolean) => T;
    BOOL: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * For the `UpdateItem` operation, represents the attributes to be modified, the action to perform on each, and the new value for each.
 *
 * > **Note:** You cannot use `UpdateItem` to update any primary key attributes. Instead, you will need to delete the item, and then use `PutItem` to create a new item with new attributes.
 *
 * Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a `ValidationException` exception.
 *
 * @public
 */
export interface AttributeValueUpdate {
  /**
   * Represents the data for an attribute.
   *
   * Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.
   *
   * For more information, see [Data Types](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  Value?: AttributeValue | undefined;

  /**
   * Specifies how to perform the update. Valid values are `PUT` (default), `DELETE`, and `ADD`. The behavior depends on whether the specified primary key already exists in the table.
   *
   * **If an item with the specified *Key* is found in the table:**
   *
   * - `PUT` - Adds the specified attribute to the item. If the attribute already exists, it is replaced by the new value.
   * - `DELETE` - If no value is specified, the attribute and its value are removed from the item. The data type of the specified value must match the existing value's data type.
   *
   *   If a *set* of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set `[a,b,c]` and the `DELETE` action specified `[a,c]`, then the final attribute value would be `[b]`. Specifying an empty set is an error.
   * - `ADD` - If the attribute does not already exist, then the attribute and its values are added to the item. If the attribute does exist, then the behavior of `ADD` depends on the data type of the attribute:
   *
   *   - If the existing attribute is a number, and if `Value` is also a number, then the `Value` is mathematically added to the existing attribute. If `Value` is a negative number, then it is subtracted from the existing attribute.
   *
   *     > **Note:**
   *     >
   *     > If you use `ADD` to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses 0 as the initial value.
   *     >
   *     > In addition, if you use `ADD` to update an existing item, and intend to increment or decrement an attribute value which does not yet exist, DynamoDB uses `0` as the initial value. For example, suppose that the item you want to update does not yet have an attribute named *itemcount*, but you decide to `ADD` the number `3` to this attribute anyway, even though it currently does not exist. DynamoDB will create the *itemcount* attribute, set its initial value to `0`, and finally add `3` to it. The result will be a new *itemcount* attribute in the item, with a value of `3`.
   *   - If the existing data type is a set, and if the `Value` is also a set, then the `Value` is added to the existing set. (This is a *set* operation, not mathematical addition.) For example, if the attribute value was the set `[1,2]`, and the `ADD` action specified `[3]`, then the final attribute value would be `[1,2,3]`. An error occurs if an Add action is specified for a set attribute and the attribute type specified does not match the existing set type.
   *
   *     Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the `Value` must also be a set of strings. The same holds true for number sets and binary sets.
   *
   *   This action is only valid for an existing attribute whose data type is number or is a set. Do not use `ADD` for any other data types.
   *
   * **If no item with the specified *Key* is found:**
   *
   * - `PUT` - DynamoDB creates a new item with the specified primary key, and then adds the attribute.
   * - `DELETE` - Nothing happens; there is no attribute to delete.
   * - `ADD` - DynamoDB creates a new item with the supplied primary key and number (or set) for the attribute value. The only data types allowed are number, number set, string set or binary set.
   *
   * @public
   */
  Action?: AttributeAction | undefined;
}

/**
 * An error associated with a statement in a PartiQL batch that was run.
 *
 * @public
 */
export interface BatchStatementError {
  /**
   * The error code associated with the failed PartiQL batch statement.
   *
   * @public
   */
  Code?: BatchStatementErrorCodeEnum | undefined;

  /**
   * The error message associated with the PartiQL batch response.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The item which caused the condition check to fail. This will be set if ReturnValuesOnConditionCheckFailure is specified as `ALL_OLD`.
   *
   * @public
   */
  Item?: Record<string, AttributeValue> | undefined;
}

/**
 * A PartiQL batch statement request.
 *
 * @public
 */
export interface BatchStatementRequest {
  /**
   * A valid PartiQL statement.
   *
   * @public
   */
  Statement: string | undefined;

  /**
   * The parameters associated with a PartiQL statement in the batch request.
   *
   * @public
   */
  Parameters?: AttributeValue[] | undefined;

  /**
   * The read consistency of the PartiQL batch request.
   *
   * @public
   */
  ConsistentRead?: boolean | undefined;

  /**
   * An optional parameter that returns the item attributes for a PartiQL batch request operation that failed a condition check.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * An ordered list of errors for each item in the request which caused the transaction to get cancelled. The values of the list are ordered according to the ordering of the `TransactWriteItems` request parameter. If no error occurred for the associated item an error with a Null code and Null message will be present.
 *
 * @public
 */
export interface CancellationReason {
  /**
   * Item in the request which caused the transaction to get cancelled.
   *
   * @public
   */
  Item?: Record<string, AttributeValue> | undefined;

  /**
   * Status code for the result of the cancelled transaction.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * Cancellation reason message description.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Represents the selection criteria for a `Query` or `Scan` operation:
 *
 * - For a `Query` operation, `Condition` is used for specifying the `KeyConditions` to use when querying a table or an index. For `KeyConditions`, only the following comparison operators are supported:
 *
 *   `EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN`
 *
 *   `Condition` is also used in a `QueryFilter`, which evaluates the query results and returns only the desired values.
 * - For a `Scan` operation, `Condition` is used in a `ScanFilter`, which evaluates the scan results and returns only the desired values.
 *
 * @public
 */
export interface Condition {
  /**
   * One or more values to evaluate against the supplied attribute. The number of values in the list depends on the `ComparisonOperator` being used.
   *
   * For type Number, value comparisons are numeric.
   *
   * String value comparisons for greater than, equals, or less than are based on ASCII character code values. For example, `a` is greater than `A`, and `a` is greater than `B`. For a list of code values, see [http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters](http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters).
   *
   * For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values.
   *
   * @public
   */
  AttributeValueList?: AttributeValue[] | undefined;

  /**
   * A comparator for evaluating attributes. For example, equals, greater than, less than, etc.
   *
   * The following comparison operators are available:
   *
   * `EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN`
   *
   * The following are descriptions of each comparison operator.
   *
   * - `EQ` : Equal. `EQ` is supported for all data types, including lists and maps.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not equal `\{"NS":["6", "2", "1"]\}`.
   * - `NE` : Not equal. `NE` is supported for all data types, including lists and maps.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an `AttributeValue` of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not equal `\{"NS":["6", "2", "1"]\}`.
   * - `LE` : Less than or equal.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`.
   * - `LT` : Less than.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` of type String, Number, or Binary (not a set type). If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`.
   * - `GE` : Greater than or equal.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`.
   * - `GT` : Greater than.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`.
   * - `NOT_NULL` : The attribute exists. `NOT_NULL` is supported for all data types, including lists and maps.
   *
   *   > **Note:** This operator tests for the existence of an attribute, not its data type. If the data type of attribute "`a`" is null, and you evaluate it using `NOT_NULL`, the result is a Boolean `true`. This result is because the attribute "`a`" exists; its data type is not relevant to the `NOT_NULL` comparison operator.
   * - `NULL` : The attribute does not exist. `NULL` is supported for all data types, including lists and maps.
   *
   *   > **Note:** This operator tests for the nonexistence of an attribute, not its data type. If the data type of attribute "`a`" is null, and you evaluate it using `NULL`, the result is a Boolean `false`. This is because the attribute "`a`" exists; its data type is not relevant to the `NULL` comparison operator.
   * - `CONTAINS` : Checks for a subsequence, or value in a set.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then the operator checks for a substring match. If the target attribute of the comparison is of type Binary, then the operator looks for a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("`SS`", "`NS`", or "`BS`"), then the operator evaluates to true if it finds an exact match with any member of the set.
   *
   *   CONTAINS is supported for lists: When evaluating "`a CONTAINS b`", "`a`" can be a list; however, "`b`" cannot be a set, a map, or a list.
   * - `NOT_CONTAINS` : Checks for absence of a subsequence, or absence of a value in a set.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is a String, then the operator checks for the absence of a substring match. If the target attribute of the comparison is Binary, then the operator checks for the absence of a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("`SS`", "`NS`", or "`BS`"), then the operator evaluates to true if it *does not* find an exact match with any member of the set.
   *
   *   NOT_CONTAINS is supported for lists: When evaluating "`a NOT CONTAINS b`", "`a`" can be a list; however, "`b`" cannot be a set, a map, or a list.
   * - `BEGINS_WITH` : Checks for a prefix.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` of type String or Binary (not a Number or a set type). The target attribute of the comparison must be of type String or Binary (not a Number or a set type).
   * - `IN` : Checks for matching elements in a list.
   *
   *   `AttributeValueList` can contain one or more `AttributeValue` elements of type String, Number, or Binary. These attributes are compared against an existing attribute of an item. If any elements of the input are equal to the item attribute, the expression evaluates to true.
   * - `BETWEEN` : Greater than or equal to the first value, and less than or equal to the second value.
   *
   *   `AttributeValueList` must contain two `AttributeValue` elements of the same type, either String, Number, or Binary (not a set type). A target attribute matches if the target value is greater than, or equal to, the first element and less than, or equal to, the second element. If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not compare to `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`
   *
   * For usage examples of `AttributeValueList` and `ComparisonOperator`, see [Legacy Conditional Parameters](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;
}

/**
 * Represents a request to perform a `DeleteItem` operation on an item.
 *
 * @public
 */
export interface DeleteRequest {
  /**
   * A map of attribute name to attribute values, representing the primary key of the item to delete. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema.
   *
   * @public
   */
  Key: Record<string, AttributeValue> | undefined;
}

/**
 * @public
 */
export interface ExecuteStatementInput {
  /**
   * The PartiQL statement representing the operation to run.
   *
   * @public
   */
  Statement: string | undefined;

  /**
   * The parameters for the PartiQL statement, if any.
   *
   * @public
   */
  Parameters?: AttributeValue[] | undefined;

  /**
   * The consistency of a read operation. If set to `true`, then a strongly consistent read is used; otherwise, an eventually consistent read is used.
   *
   * @public
   */
  ConsistentRead?: boolean | undefined;

  /**
   * Set this value to get remaining results, if `NextToken` was returned in the statement response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, along with a key in `LastEvaluatedKey` to apply in a subsequent operation so you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in `LastEvaluatedKey` to apply in a subsequent operation to continue the operation.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * An optional parameter that returns the item attributes for an `ExecuteStatement` operation that failed a condition check.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * Contains the filter criteria used to limit which items are included in an export. If you don't include this parameter, all items and attributes are exported.
 *
 * @public
 */
export interface FilterSpecification {
  /**
   * A condition that filters which items are included in the export. This parameter uses the same syntax as `FilterExpression` in `Query` and `Scan`. If you don't provide `KeyConditionExpression`, this expression can also reference key attributes. If you don't specify this parameter, all items are included in the export.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * The attributes you want to retrieve for items included in the export. Separate attribute names in the expression with commas. If you don't specify this parameter, all attributes are returned.
   *
   * @public
   */
  ProjectionExpression?: string | undefined;

  /**
   * A condition expression that filters items by key values. The expression must test equality on a single partition key value and can optionally compare a sort key value. This parameter uses the same syntax as `KeyConditionExpression` in `Query`. When you provide this parameter, `FilterExpression` can only reference non-key attributes. If you don't specify this parameter, all items are eligible for export.
   *
   * @public
   */
  KeyConditionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. For more information, see [Expression Attribute Names](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeNames.html) in the Amazon DynamoDB Developer Guide.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression. For more information, see [Expression Attribute Values](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeValues.html) in the Amazon DynamoDB Developer Guide.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;
}

/**
 * Specifies an item and related attribute values to retrieve in a `TransactGetItem` object.
 *
 * @public
 */
export interface Get {
  /**
   * A map of attribute names to `AttributeValue` objects that specifies the primary key of the item to retrieve.
   *
   * @public
   */
  Key: Record<string, AttributeValue> | undefined;

  /**
   * The name of the table from which to retrieve the specified item. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A string that identifies one or more attributes of the specified item to retrieve from the table. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes of the specified item are returned. If any of the requested attributes are not found, they do not appear in the result.
   *
   * @public
   */
  ProjectionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in the ProjectionExpression parameter.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;
}

/**
 * Represents the input of a `GetItem` operation.
 *
 * @public
 */
export interface GetItemInput {
  /**
   * The name of the table containing the requested item. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A map of attribute names to `AttributeValue` objects, representing the primary key of the item to retrieve.
   *
   * For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
   *
   * @public
   */
  Key: Record<string, AttributeValue> | undefined;

  /**
   * This is a legacy parameter. Use `ProjectionExpression` instead. For more information, see [AttributesToGet](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  AttributesToGet?: string[] | undefined;

  /**
   * Determines the read consistency model: If set to `true`, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.
   *
   * @public
   */
  ConsistentRead?: boolean | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.
   *
   * If no attribute names are specified, then all attributes are returned. If any of the requested attributes are not found, they do not appear in the result.
   *
   * For more information, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProjectionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. The following are some use cases for using `ExpressionAttributeNames`:
   *
   * - To access an attribute whose name conflicts with a DynamoDB reserved word.
   * - To create a placeholder for repeating occurrences of an attribute name in an expression.
   * - To prevent special characters in an attribute name from being misinterpreted in an expression.
   *
   * Use the **#** character in an expression to dereference an attribute name. For example, consider the following attribute name:
   *
   * - `Percentile`
   *
   * The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*). To work around this, you could specify the following for `ExpressionAttributeNames`:
   *
   * - `\{"#P":"Percentile"\}`
   *
   * You could then use this substitution in an expression, as in this example:
   *
   * - `#P = :val`
   *
   * > **Note:** Tokens that begin with the **:** character are *expression attribute values*, which are placeholders for the actual value at runtime.
   *
   * For more information on expression attribute names, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;
}

/**
 * Represents the output of a `GetItem` operation.
 *
 * @public
 */
export interface GetItemOutput {
  /**
   * A map of attribute names to `AttributeValue` objects, as specified by `ProjectionExpression`.
   *
   * @public
   */
  Item?: Record<string, AttributeValue> | undefined;

  /**
   * The capacity units consumed by the `GetItem` operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. `ConsumedCapacity` is only returned if the `ReturnConsumedCapacity` parameter was specified. For more information, see [Capacity unit consumption for read operations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#read-operation-consumption) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity | undefined;
}

/**
 * Information about item collections, if any, that were affected by the operation. `ItemCollectionMetrics` is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.
 *
 * @public
 */
export interface ItemCollectionMetrics {
  /**
   * The partition key value of the item collection. This value is the same as the partition key value of the item.
   *
   * @public
   */
  ItemCollectionKey?: Record<string, AttributeValue> | undefined;

  /**
   * An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.
   *
   * The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.
   *
   * @public
   */
  SizeEstimateRangeGB?: number[] | undefined;
}

/**
 * Details for the requested item.
 *
 * @public
 */
export interface ItemResponse {
  /**
   * Map of attribute data consisting of the data type and attribute value.
   *
   * @public
   */
  Item?: Record<string, AttributeValue> | undefined;
}

/**
 * Represents a PartiQL statement that uses parameters.
 *
 * @public
 */
export interface ParameterizedStatement {
  /**
   * A PartiQL statement that uses parameters.
   *
   * @public
   */
  Statement: string | undefined;

  /**
   * The parameter values.
   *
   * @public
   */
  Parameters?: AttributeValue[] | undefined;

  /**
   * An optional parameter that returns the item attributes for a PartiQL `ParameterizedStatement` operation that failed a condition check.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * Represents a request to perform a `PutItem` operation on an item.
 *
 * @public
 */
export interface PutRequest {
  /**
   * A map of attribute name to attribute values, representing the primary key of an item to be processed by `PutItem`. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item that are part of an index key schema for the table, their types must match the index key schema.
   *
   * @public
   */
  Item: Record<string, AttributeValue> | undefined;
}

/**
 * A single result from a `SearchVectors` operation.
 *
 * @public
 */
export interface SearchResultItem {
  /**
   * A map of attribute names to `AttributeValue` objects, representing the projected attributes of the item returned by the vector search.
   *
   * @public
   */
  Item?: Record<string, AttributeValue> | undefined;

  /**
   * The similarity score for this item relative to the search vector. The interpretation depends on the distance function configured for the vector index.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * Represents the properties of the exported table.
 *
 * @public
 */
export interface ExportDescription {
  /**
   * The Amazon Resource Name (ARN) of the table export.
   *
   * @public
   */
  ExportArn?: string | undefined;

  /**
   * Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED.
   *
   * @public
   */
  ExportStatus?: ExportStatus | undefined;

  /**
   * The time at which the export task began.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time at which the export task completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The name of the manifest file for the export task.
   *
   * @public
   */
  ExportManifest?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the table that was exported.
   *
   * @public
   */
  TableArn?: string | undefined;

  /**
   * Unique ID of the table that was exported.
   *
   * @public
   */
  TableId?: string | undefined;

  /**
   * Point in time from which table data was exported.
   *
   * @public
   */
  ExportTime?: Date | undefined;

  /**
   * The client token that was provided for the export task. A client token makes calls to `ExportTableToPointInTimeInput` idempotent, meaning that multiple identical calls have the same effect as one single call.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the Amazon S3 bucket containing the export.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the bucket containing the export.
   *
   * @public
   */
  S3BucketOwner?: string | undefined;

  /**
   * The Amazon S3 bucket prefix used as the file name and path of the exported snapshot.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * Type of encryption used on the bucket where export data is stored. Valid values for `S3SseAlgorithm` are:
   *
   * - `AES256` - server-side encryption with Amazon S3 managed keys
   * - `KMS` - server-side encryption with KMS managed keys
   *
   * @public
   */
  S3SseAlgorithm?: S3SseAlgorithm | undefined;

  /**
   * The ID of the KMS managed key used to encrypt the S3 bucket where export data is stored (if applicable).
   *
   * @public
   */
  S3SseKmsKeyId?: string | undefined;

  /**
   * Status code for the result of the failed export.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * Export failure reason description.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The format of the exported data. Valid values for `ExportFormat` are `DYNAMODB_JSON` or `ION`.
   *
   * @public
   */
  ExportFormat?: ExportFormat | undefined;

  /**
   * The billable size of the table export.
   *
   * @public
   */
  BilledSizeBytes?: number | undefined;

  /**
   * The number of items exported.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * The type of export that was performed. Valid values are `FULL_EXPORT` or `INCREMENTAL_EXPORT`.
   *
   * @public
   */
  ExportType?: ExportType | undefined;

  /**
   * Optional object containing the parameters specific to an incremental export.
   *
   * @public
   */
  IncrementalExportSpecification?: IncrementalExportSpecification | undefined;

  /**
   * The filter criteria applied to the export. When present, only items that match the specified key conditions and filter expressions are included in the export output.
   *
   * @public
   */
  FilterSpecification?: FilterSpecification | undefined;
}

/**
 * @public
 */
export interface ExportTableToPointInTimeInput {
  /**
   * The Amazon Resource Name (ARN) associated with the table to export.
   *
   * @public
   */
  TableArn: string | undefined;

  /**
   * Time in the past from which to export table data, counted in seconds from the start of the Unix epoch. The table export will be a snapshot of the table's state at this point in time.
   *
   * @public
   */
  ExportTime?: Date | undefined;

  /**
   * Providing a `ClientToken` makes the call to `ExportTableToPointInTimeInput` idempotent, meaning that multiple identical calls have the same effect as one single call.
   *
   * A client token is valid for 8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours, or the result might not be idempotent.
   *
   * If you submit a request with the same client token but a change in other parameters within the 8-hour idempotency window, DynamoDB returns an `ExportConflictException`.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the Amazon S3 bucket to export the snapshot to.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the bucket the export will be stored in.
   *
   * > **Note:** S3BucketOwner is a required parameter when exporting to a S3 bucket in another account.
   *
   * @public
   */
  S3BucketOwner?: string | undefined;

  /**
   * The Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * Type of encryption used on the bucket where export data will be stored. Valid values for `S3SseAlgorithm` are:
   *
   * - `AES256` - server-side encryption with Amazon S3 managed keys
   * - `KMS` - server-side encryption with KMS managed keys
   *
   * @public
   */
  S3SseAlgorithm?: S3SseAlgorithm | undefined;

  /**
   * The ID of the KMS managed key used to encrypt the S3 bucket where export data will be stored (if applicable).
   *
   * @public
   */
  S3SseKmsKeyId?: string | undefined;

  /**
   * The format for the exported data. Valid values for `ExportFormat` are `DYNAMODB_JSON` or `ION`.
   *
   * @public
   */
  ExportFormat?: ExportFormat | undefined;

  /**
   * Choice of whether to execute as a full export or incremental export. Valid values are FULL_EXPORT or INCREMENTAL_EXPORT. The default value is FULL_EXPORT. If INCREMENTAL_EXPORT is provided, the IncrementalExportSpecification must also be used.
   *
   * @public
   */
  ExportType?: ExportType | undefined;

  /**
   * Optional object containing the parameters specific to an incremental export.
   *
   * @public
   */
  IncrementalExportSpecification?: IncrementalExportSpecification | undefined;

  /**
   * The criteria used to filter which items are included in the point-in-time export. When you specify this parameter, only items that match the key conditions and filter expressions are exported.
   *
   * @public
   */
  FilterSpecification?: FilterSpecification | undefined;
}

/**
 * Represents a set of primary keys and, for each key, the attributes to retrieve from the table.
 *
 * For each primary key, you must provide *all* of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide *both* the partition key and the sort key.
 *
 * @public
 */
export interface KeysAndAttributes {
  /**
   * The primary key attribute values that define the items and the attributes associated with the items.
   *
   * @public
   */
  Keys: Record<string, AttributeValue>[] | undefined;

  /**
   * This is a legacy parameter. Use `ProjectionExpression` instead. For more information, see [Legacy Conditional Parameters](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  AttributesToGet?: string[] | undefined;

  /**
   * The consistency of a read operation. If set to `true`, then a strongly consistent read is used; otherwise, an eventually consistent read is used.
   *
   * @public
   */
  ConsistentRead?: boolean | undefined;

  /**
   * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the `ProjectionExpression` must be separated by commas.
   *
   * If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.
   *
   * For more information, see [Accessing Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProjectionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. The following are some use cases for using `ExpressionAttributeNames`:
   *
   * - To access an attribute whose name conflicts with a DynamoDB reserved word.
   * - To create a placeholder for repeating occurrences of an attribute name in an expression.
   * - To prevent special characters in an attribute name from being misinterpreted in an expression.
   *
   * Use the **#** character in an expression to dereference an attribute name. For example, consider the following attribute name:
   *
   * - `Percentile`
   *
   * The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*). To work around this, you could specify the following for `ExpressionAttributeNames`:
   *
   * - `\{"#P":"Percentile"\}`
   *
   * You could then use this substitution in an expression, as in this example:
   *
   * - `#P = :val`
   *
   * > **Note:** Tokens that begin with the **:** character are *expression attribute values*, which are placeholders for the actual value at runtime.
   *
   * For more information on expression attribute names, see [Accessing Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;
}

/**
 * Specifies an item to be retrieved as part of the transaction.
 *
 * @public
 */
export interface TransactGetItem {
  /**
   * Contains the primary key that identifies the item to get, together with the name of the table that contains the item, and optionally the specific attributes of the item to retrieve.
   *
   * @public
   */
  Get: Get | undefined;
}

/**
 * @public
 */
export interface BatchExecuteStatementInput {
  /**
   * The list of PartiQL statements representing the batch to run.
   *
   * @public
   */
  Statements: BatchStatementRequest[] | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;
}

/**
 * @public
 */
export interface DescribeExportOutput {
  /**
   * Represents the properties of the export.
   *
   * @public
   */
  ExportDescription?: ExportDescription | undefined;
}

/**
 * @public
 */
export interface ExecuteTransactionInput {
  /**
   * The list of PartiQL statements representing the transaction to run.
   *
   * @public
   */
  TransactStatements: ParameterizedStatement[] | undefined;

  /**
   * Set this value to get remaining results, if `NextToken` was returned in the statement response.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response. For more information, see [TransactGetItems](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html) and [TransactWriteItems](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html).
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;
}

/**
 * @public
 */
export interface ExecuteTransactionOutput {
  /**
   * The response to a PartiQL transaction.
   *
   * @public
   */
  Responses?: ItemResponse[] | undefined;

  /**
   * The capacity units consumed by the entire operation. The values of the list are ordered according to the ordering of the statements.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity[] | undefined;
}

/**
 * @public
 */
export interface ExportTableToPointInTimeOutput {
  /**
   * Contains a description of the table export.
   *
   * @public
   */
  ExportDescription?: ExportDescription | undefined;
}

/**
 * @public
 */
export interface SearchVectorsOutput {
  /**
   * The capacity units consumed by the `SearchVectors` operation. Contains `VectorSearchRequestBytes`, which represents the vector search capacity consumed.
   *
   * @public
   */
  ConsumedCapacity?: VectorCapacity | undefined;

  /**
   * A list of items returned by the vector similarity search, sorted by similarity with the most similar item first. Each item contains the projected attributes and a similarity score.
   *
   * @public
   */
  SearchResults?: SearchResultItem[] | undefined;
}

/**
 * @public
 */
export interface TransactGetItemsOutput {
  /**
   * If the *ReturnConsumedCapacity* value was `TOTAL`, this is an array of `ConsumedCapacity` objects, one for each table addressed by `TransactGetItem` objects in the *TransactItems* parameter. These `ConsumedCapacity` objects report the read-capacity units consumed by the `TransactGetItems` call in that table.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity[] | undefined;

  /**
   * An ordered array of up to 100 `ItemResponse` objects, each of which corresponds to the `TransactGetItem` object in the same position in the *TransactItems* array. Each `ItemResponse` object contains a Map of the name-value pairs that are the projected attributes of the requested item.
   *
   * If a requested item could not be retrieved, the corresponding `ItemResponse` object is Null, or if the requested item has no projected attributes, the corresponding `ItemResponse` object is an empty Map.
   *
   * @public
   */
  Responses?: ItemResponse[] | undefined;
}

/**
 * Represents the input of a `BatchGetItem` operation.
 *
 * @public
 */
export interface BatchGetItemInput {
  /**
   * A map of one or more table names or table ARNs and, for each table, a map that describes one or more items to retrieve from that table. Each table name or ARN can be used only once per `BatchGetItem` request.
   *
   * Each element in the map of items to retrieve consists of the following:
   *
   * - `ConsistentRead` - If `true`, a strongly consistent read is used; if `false` (the default), an eventually consistent read is used.
   * - `ExpressionAttributeNames` - One or more substitution tokens for attribute names in the `ProjectionExpression` parameter. The following are some use cases for using `ExpressionAttributeNames`:
   *
   *   - To access an attribute whose name conflicts with a DynamoDB reserved word.
   *   - To create a placeholder for repeating occurrences of an attribute name in an expression.
   *   - To prevent special characters in an attribute name from being misinterpreted in an expression.
   *
   *   Use the **#** character in an expression to dereference an attribute name. For example, consider the following attribute name:
   *
   *   - `Percentile`
   *
   *   The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*). To work around this, you could specify the following for `ExpressionAttributeNames`:
   *
   *   - `\{"#P":"Percentile"\}`
   *
   *   You could then use this substitution in an expression, as in this example:
   *
   *   - `#P = :val`
   *
   *   > **Note:** Tokens that begin with the **:** character are *expression attribute values*, which are placeholders for the actual value at runtime.
   *
   *   For more information about expression attribute names, see [Accessing Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   * - `Keys` - An array of primary key attribute values that define specific items in the table. For each primary key, you must provide *all* of the key attributes. For example, with a simple primary key, you only need to provide the partition key value. For a composite key, you must provide *both* the partition key value and the sort key value.
   * - `ProjectionExpression` - A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.
   *
   *   If no attribute names are specified, then all attributes are returned. If any of the requested attributes are not found, they do not appear in the result.
   *
   *   For more information, see [Accessing Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   * - `AttributesToGet` - This is a legacy parameter. Use `ProjectionExpression` instead. For more information, see [AttributesToGet](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  RequestItems: Record<string, KeysAndAttributes> | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;
}

/**
 * Represents a condition to be compared with an attribute value. This condition can be used with `DeleteItem`, `PutItem`, or `UpdateItem` operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use `ExpectedAttributeValue` in one of two different ways:
 *
 * - Use `AttributeValueList` to specify one or more values to compare against an attribute. Use `ComparisonOperator` to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.
 * - Use `Value` to specify a value that DynamoDB will compare against an attribute. If the values match, then `ExpectedAttributeValue` evaluates to true and the conditional operation succeeds. Optionally, you can also set `Exists` to false, indicating that you *do not* expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.
 *
 * `Value` and `Exists` are incompatible with `AttributeValueList` and `ComparisonOperator`. Note that if you use both sets of parameters at once, DynamoDB will return a `ValidationException` exception.
 *
 * @public
 */
export interface ExpectedAttributeValue {
  /**
   * Represents the data for the expected attribute.
   *
   * Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.
   *
   * For more information, see [Data Types](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  Value?: AttributeValue | undefined;

  /**
   * Causes DynamoDB to evaluate the value before attempting a conditional operation:
   *
   * - If `Exists` is `true`, DynamoDB will check to see if that attribute value already exists in the table. If it is found, then the operation succeeds. If it is not found, the operation fails with a `ConditionCheckFailedException`.
   * - If `Exists` is `false`, DynamoDB assumes that the attribute value does not exist in the table. If in fact the value does not exist, then the assumption is valid and the operation succeeds. If the value is found, despite the assumption that it does not exist, the operation fails with a `ConditionCheckFailedException`.
   *
   * The default setting for `Exists` is `true`. If you supply a `Value` all by itself, DynamoDB assumes the attribute exists: You don't have to set `Exists` to `true`, because it is implied.
   *
   * DynamoDB returns a `ValidationException` if:
   *
   * - `Exists` is `true` but there is no `Value` to check. (You expect a value to exist, but don't specify what that value is.)
   * - `Exists` is `false` but you also provide a `Value`. (You cannot expect an attribute to have a value, while also expecting it not to exist.)
   *
   * @public
   */
  Exists?: boolean | undefined;

  /**
   * A comparator for evaluating attributes in the `AttributeValueList`. For example, equals, greater than, less than, etc.
   *
   * The following comparison operators are available:
   *
   * `EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN`
   *
   * The following are descriptions of each comparison operator.
   *
   * - `EQ` : Equal. `EQ` is supported for all data types, including lists and maps.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not equal `\{"NS":["6", "2", "1"]\}`.
   * - `NE` : Not equal. `NE` is supported for all data types, including lists and maps.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an `AttributeValue` of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not equal `\{"NS":["6", "2", "1"]\}`.
   * - `LE` : Less than or equal.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`.
   * - `LT` : Less than.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` of type String, Number, or Binary (not a set type). If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`.
   * - `GE` : Greater than or equal.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`.
   * - `GT` : Greater than.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not equal `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`.
   * - `NOT_NULL` : The attribute exists. `NOT_NULL` is supported for all data types, including lists and maps.
   *
   *   > **Note:** This operator tests for the existence of an attribute, not its data type. If the data type of attribute "`a`" is null, and you evaluate it using `NOT_NULL`, the result is a Boolean `true`. This result is because the attribute "`a`" exists; its data type is not relevant to the `NOT_NULL` comparison operator.
   * - `NULL` : The attribute does not exist. `NULL` is supported for all data types, including lists and maps.
   *
   *   > **Note:** This operator tests for the nonexistence of an attribute, not its data type. If the data type of attribute "`a`" is null, and you evaluate it using `NULL`, the result is a Boolean `false`. This is because the attribute "`a`" exists; its data type is not relevant to the `NULL` comparison operator.
   * - `CONTAINS` : Checks for a subsequence, or value in a set.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then the operator checks for a substring match. If the target attribute of the comparison is of type Binary, then the operator looks for a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("`SS`", "`NS`", or "`BS`"), then the operator evaluates to true if it finds an exact match with any member of the set.
   *
   *   CONTAINS is supported for lists: When evaluating "`a CONTAINS b`", "`a`" can be a list; however, "`b`" cannot be a set, a map, or a list.
   * - `NOT_CONTAINS` : Checks for absence of a subsequence, or absence of a value in a set.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is a String, then the operator checks for the absence of a substring match. If the target attribute of the comparison is Binary, then the operator checks for the absence of a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("`SS`", "`NS`", or "`BS`"), then the operator evaluates to true if it *does not* find an exact match with any member of the set.
   *
   *   NOT_CONTAINS is supported for lists: When evaluating "`a NOT CONTAINS b`", "`a`" can be a list; however, "`b`" cannot be a set, a map, or a list.
   * - `BEGINS_WITH` : Checks for a prefix.
   *
   *   `AttributeValueList` can contain only one `AttributeValue` of type String or Binary (not a Number or a set type). The target attribute of the comparison must be of type String or Binary (not a Number or a set type).
   * - `IN` : Checks for matching elements in a list.
   *
   *   `AttributeValueList` can contain one or more `AttributeValue` elements of type String, Number, or Binary. These attributes are compared against an existing attribute of an item. If any elements of the input are equal to the item attribute, the expression evaluates to true.
   * - `BETWEEN` : Greater than or equal to the first value, and less than or equal to the second value.
   *
   *   `AttributeValueList` must contain two `AttributeValue` elements of the same type, either String, Number, or Binary (not a set type). A target attribute matches if the target value is greater than, or equal to, the first element and less than, or equal to, the second element. If an item contains an `AttributeValue` element of a different type than the one provided in the request, the value does not match. For example, `\{"S":"6"\}` does not compare to `\{"N":"6"\}`. Also, `\{"N":"6"\}` does not compare to `\{"NS":["6", "2", "1"]\}`
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;

  /**
   * One or more values to evaluate against the supplied attribute. The number of values in the list depends on the `ComparisonOperator` being used.
   *
   * For type Number, value comparisons are numeric.
   *
   * String value comparisons for greater than, equals, or less than are based on ASCII character code values. For example, `a` is greater than `A`, and `a` is greater than `B`. For a list of code values, see [http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters](http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters).
   *
   * For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values.
   *
   * For information on specifying data types in JSON, see [JSON Data Format](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataFormat.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  AttributeValueList?: AttributeValue[] | undefined;
}

/**
 * @public
 */
export interface TransactGetItemsInput {
  /**
   * An ordered array of up to 100 `TransactGetItem` objects, each of which contains a `Get` structure.
   *
   * @public
   */
  TransactItems: TransactGetItem[] | undefined;

  /**
   * A value of `TOTAL` causes consumed capacity information to be returned, and a value of `NONE` prevents that information from being returned. No other value is valid.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;
}

/**
 * @public
 */
export interface TransactWriteItemsOutput {
  /**
   * The capacity units consumed by the entire `TransactWriteItems` operation. The values of the list are ordered according to the ordering of the `TransactItems` request parameter.
   *
   * If the table has vector indexes, each element also includes a `VectorIndexes` field with `VectorWriteRequestBytes` consumed for each affected vector index.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity[] | undefined;

  /**
   * A list of tables that were processed by `TransactWriteItems` and, for each table, information about any item collections that were affected by individual `UpdateItem`, `PutItem`, or `DeleteItem` operations.
   *
   * @public
   */
  ItemCollectionMetrics?: Record<string, ItemCollectionMetrics[]> | undefined;
}

/**
 * Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item.
 *
 * @public
 */
export interface ConditionCheck {
  /**
   * The primary key of the item to be checked. Each element consists of an attribute name and a value for that attribute.
   *
   * @public
   */
  Key: Record<string, AttributeValue> | undefined;

  /**
   * Name of the table for the check item request. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A condition that must be satisfied in order for a conditional update to succeed. For more information, see [Condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionExpression: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. For more information, see [Expression attribute names](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeNames.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression. For more information, see [Condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * Use `ReturnValuesOnConditionCheckFailure` to get the item attributes if the `ConditionCheck` condition fails. For `ReturnValuesOnConditionCheckFailure`, the valid values are: NONE and ALL_OLD.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * Represents a request to perform a `DeleteItem` operation.
 *
 * @public
 */
export interface Delete {
  /**
   * The primary key of the item to be deleted. Each element consists of an attribute name and a value for that attribute.
   *
   * @public
   */
  Key: Record<string, AttributeValue> | undefined;

  /**
   * Name of the table in which the item to be deleted resides. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A condition that must be satisfied in order for a conditional delete to succeed.
   *
   * @public
   */
  ConditionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * Use `ReturnValuesOnConditionCheckFailure` to get the item attributes if the `Delete` condition fails. For `ReturnValuesOnConditionCheckFailure`, the valid values are: NONE and ALL_OLD.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * Represents a request to perform a `PutItem` operation.
 *
 * @public
 */
export interface Put {
  /**
   * A map of attribute name to attribute values, representing the primary key of the item to be written by `PutItem`. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item that are part of an index key schema for the table, their types must match the index key schema.
   *
   * @public
   */
  Item: Record<string, AttributeValue> | undefined;

  /**
   * Name of the table in which to write the item. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A condition that must be satisfied in order for a conditional update to succeed.
   *
   * @public
   */
  ConditionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * Use `ReturnValuesOnConditionCheckFailure` to get the item attributes if the `Put` condition fails. For `ReturnValuesOnConditionCheckFailure`, the valid values are: NONE and ALL_OLD.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * @public
 */
export interface SearchVectorsInput {
  /**
   * The name or Amazon Resource Name (ARN) of the table containing the vector index.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of the vector index to search. The index must be in the `ACTIVE` state.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. Use the `#` character in an expression to dereference an attribute name.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression. Use the `:` character in an expression to dereference an attribute value.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * A string that identifies one or more attributes to retrieve from the index. Separate attribute names with commas. If not specified, the operation returns all attributes projected into the vector index.
   *
   * Only attributes projected into the vector index can be retrieved.
   *
   * @public
   */
  ProjectionExpression?: string | undefined;

  /**
   * The search vector to compare against the indexed vectors. Each element is a 32-bit IEEE-754 floating point number, provided in DynamoDB list format.
   *
   * The number of dimensions must match the number of dimensions configured for the vector index.
   *
   * @public
   */
  SearchVector: AttributeValue[] | undefined;

  /**
   * A condition expression used to filter the vector search results. The expression can reference attributes defined in the vector index search schema, including `HASH` and `INLINE_FILTER` key elements.
   *
   * Only the equality operator (`=`) is supported for `HASH` attributes. Comparison and range operators are supported for `INLINE_FILTER` attributes. Only top-level attributes from the search schema can be referenced.
   *
   * @public
   */
  SearchConditionExpression?: string | undefined;

  /**
   * The number of most similar results to return.
   *
   * @public
   */
  TopK: number | undefined;
}

/**
 * Represents a request to perform an `UpdateItem` operation.
 *
 * @public
 */
export interface Update {
  /**
   * The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.
   *
   * @public
   */
  Key: Record<string, AttributeValue> | undefined;

  /**
   * An expression that defines one or more attributes to be updated, the action to be performed on them, and new value(s) for them.
   *
   * @public
   */
  UpdateExpression: string | undefined;

  /**
   * Name of the table for the `UpdateItem` request. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A condition that must be satisfied in order for a conditional update to succeed.
   *
   * @public
   */
  ConditionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * Use `ReturnValuesOnConditionCheckFailure` to get the item attributes if the `Update` condition fails. For `ReturnValuesOnConditionCheckFailure`, the valid values are: NONE and ALL_OLD.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * A PartiQL batch statement response..
 *
 * @public
 */
export interface BatchStatementResponse {
  /**
   * The error associated with a failed PartiQL batch statement.
   *
   * @public
   */
  Error?: BatchStatementError | undefined;

  /**
   * The table name associated with a failed PartiQL batch statement.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * A DynamoDB item associated with a BatchStatementResponse
   *
   * @public
   */
  Item?: Record<string, AttributeValue> | undefined;
}

/**
 * Represents the output of a `DeleteItem` operation.
 *
 * @public
 */
export interface DeleteItemOutput {
  /**
   * A map of attribute names to `AttributeValue` objects, representing the item as it appeared before the `DeleteItem` operation. This map appears in the response only if `ReturnValues` was specified as `ALL_OLD` in the request.
   *
   * @public
   */
  Attributes?: Record<string, AttributeValue> | undefined;

  /**
   * The capacity units consumed by the `DeleteItem` operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. `ConsumedCapacity` is only returned if the `ReturnConsumedCapacity` parameter was specified. For more information, see [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * If the table has vector indexes, the response includes a `VectorIndexes` field with `VectorWriteRequestBytes` consumed for each affected vector index.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity | undefined;

  /**
   * Information about item collections, if any, that were affected by the `DeleteItem` operation. `ItemCollectionMetrics` is only returned if the `ReturnItemCollectionMetrics` parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response.
   *
   * Each `ItemCollectionMetrics` element consists of:
   *
   * - `ItemCollectionKey` - The partition key value of the item collection. This is the same as the partition key value of the item itself.
   * - `SizeEstimateRangeGB` - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.
   *
   *   The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.
   *
   * @public
   */
  ItemCollectionMetrics?: ItemCollectionMetrics | undefined;
}

/**
 * @public
 */
export interface ExecuteStatementOutput {
  /**
   * If a read operation was used, this property will contain the result of the read operation; a map of attribute names and their values. For the write operations this value will be empty.
   *
   * @public
   */
  Items?: Record<string, AttributeValue>[] | undefined;

  /**
   * If the response of a read request exceeds the response payload limit DynamoDB will set this value in the response. If set, you can use that this value in the subsequent request to get the remaining results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. `ConsumedCapacity` is only returned if the request asked for it. For more information, see [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity | undefined;

  /**
   * The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If `LastEvaluatedKey` is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If `LastEvaluatedKey` is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when `LastEvaluatedKey` is empty.
   *
   * @public
   */
  LastEvaluatedKey?: Record<string, AttributeValue> | undefined;
}

/**
 * Represents the output of a `PutItem` operation.
 *
 * @public
 */
export interface PutItemOutput {
  /**
   * The attribute values as they appeared before the `PutItem` operation, but only if `ReturnValues` is specified as `ALL_OLD` in the request. Each element consists of an attribute name and an attribute value.
   *
   * @public
   */
  Attributes?: Record<string, AttributeValue> | undefined;

  /**
   * The capacity units consumed by the `PutItem` operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. `ConsumedCapacity` is only returned if the `ReturnConsumedCapacity` parameter was specified. For more information, see [Capacity unity consumption for write operations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#write-operation-consumption) in the *Amazon DynamoDB Developer Guide*.
   *
   * If the table has vector indexes, the response includes a `VectorIndexes` field with `VectorWriteRequestBytes` consumed for each affected vector index.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity | undefined;

  /**
   * Information about item collections, if any, that were affected by the `PutItem` operation. `ItemCollectionMetrics` is only returned if the `ReturnItemCollectionMetrics` parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response.
   *
   * Each `ItemCollectionMetrics` element consists of:
   *
   * - `ItemCollectionKey` - The partition key value of the item collection. This is the same as the partition key value of the item itself.
   * - `SizeEstimateRangeGB` - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.
   *
   *   The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.
   *
   * @public
   */
  ItemCollectionMetrics?: ItemCollectionMetrics | undefined;
}

/**
 * Represents the output of a `Query` operation.
 *
 * @public
 */
export interface QueryOutput {
  /**
   * An array of item attributes that match the query criteria. Each element in this array consists of an attribute name and the value for that attribute.
   *
   * @public
   */
  Items?: Record<string, AttributeValue>[] | undefined;

  /**
   * The number of items in the response.
   *
   * If you used a `QueryFilter` in the request, then `Count` is the number of items returned after the filter was applied, and `ScannedCount` is the number of matching items before the filter was applied.
   *
   * If you did not use a filter in the request, then `Count` and `ScannedCount` are the same.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The number of items evaluated, before any `QueryFilter` is applied. A high `ScannedCount` value with few, or no, `Count` results indicates an inefficient `Query` operation. For more information, see [Count and ScannedCount](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Count) in the *Amazon DynamoDB Developer Guide*.
   *
   * If you did not use a filter in the request, then `ScannedCount` is the same as `Count`.
   *
   * @public
   */
  ScannedCount?: number | undefined;

  /**
   * The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.
   *
   * If `LastEvaluatedKey` is empty, then the "last page" of results has been processed and there is no more data to be retrieved.
   *
   * If `LastEvaluatedKey` is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when `LastEvaluatedKey` is empty.
   *
   * @public
   */
  LastEvaluatedKey?: Record<string, AttributeValue> | undefined;

  /**
   * The capacity units consumed by the `Query` operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. `ConsumedCapacity` is only returned if the `ReturnConsumedCapacity` parameter was specified. For more information, see [Capacity unit consumption for read operations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#read-operation-consumption) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity | undefined;
}

/**
 * Represents the output of a `Scan` operation.
 *
 * @public
 */
export interface ScanOutput {
  /**
   * An array of item attributes that match the scan criteria. Each element in this array consists of an attribute name and the value for that attribute.
   *
   * @public
   */
  Items?: Record<string, AttributeValue>[] | undefined;

  /**
   * The number of items in the response.
   *
   * If you set `ScanFilter` in the request, then `Count` is the number of items returned after the filter was applied, and `ScannedCount` is the number of matching items before the filter was applied.
   *
   * If you did not use a filter in the request, then `Count` is the same as `ScannedCount`.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The number of items evaluated, before any `ScanFilter` is applied. A high `ScannedCount` value with few, or no, `Count` results indicates an inefficient `Scan` operation. For more information, see [Count and ScannedCount](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count) in the *Amazon DynamoDB Developer Guide*.
   *
   * If you did not use a filter in the request, then `ScannedCount` is the same as `Count`.
   *
   * @public
   */
  ScannedCount?: number | undefined;

  /**
   * The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.
   *
   * If `LastEvaluatedKey` is empty, then the "last page" of results has been processed and there is no more data to be retrieved.
   *
   * If `LastEvaluatedKey` is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when `LastEvaluatedKey` is empty.
   *
   * @public
   */
  LastEvaluatedKey?: Record<string, AttributeValue> | undefined;

  /**
   * The capacity units consumed by the `Scan` operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. `ConsumedCapacity` is only returned if the `ReturnConsumedCapacity` parameter was specified. For more information, see [Capacity unit consumption for read operations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#read-operation-consumption) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity | undefined;
}

/**
 * Represents the output of an `UpdateItem` operation.
 *
 * @public
 */
export interface UpdateItemOutput {
  /**
   * A map of attribute values as they appear before or after the `UpdateItem` operation, as determined by the `ReturnValues` parameter.
   *
   * The `Attributes` map is only present if the update was successful and `ReturnValues` was specified as something other than `NONE` in the request. Each element represents one attribute.
   *
   * @public
   */
  Attributes?: Record<string, AttributeValue> | undefined;

  /**
   * The capacity units consumed by the `UpdateItem` operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. `ConsumedCapacity` is only returned if the `ReturnConsumedCapacity` parameter was specified. For more information, see [Capacity unity consumption for write operations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/read-write-operations.html#write-operation-consumption) in the *Amazon DynamoDB Developer Guide*.
   *
   * If the table has vector indexes, the response includes a `VectorIndexes` field with `VectorWriteRequestBytes` consumed for each affected vector index.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity | undefined;

  /**
   * Information about item collections, if any, that were affected by the `UpdateItem` operation. `ItemCollectionMetrics` is only returned if the `ReturnItemCollectionMetrics` parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response.
   *
   * Each `ItemCollectionMetrics` element consists of:
   *
   * - `ItemCollectionKey` - The partition key value of the item collection. This is the same as the partition key value of the item itself.
   * - `SizeEstimateRangeGB` - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.
   *
   *   The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.
   *
   * @public
   */
  ItemCollectionMetrics?: ItemCollectionMetrics | undefined;
}

/**
 * Represents an operation to perform - either `DeleteItem` or `PutItem`. You can only request one of these operations, not both, in a single `WriteRequest`. If you do need to perform both of these operations, you need to provide two separate `WriteRequest` objects.
 *
 * @public
 */
export interface WriteRequest {
  /**
   * A request to perform a `PutItem` operation.
   *
   * @public
   */
  PutRequest?: PutRequest | undefined;

  /**
   * A request to perform a `DeleteItem` operation.
   *
   * @public
   */
  DeleteRequest?: DeleteRequest | undefined;
}

/**
 * @public
 */
export interface BatchExecuteStatementOutput {
  /**
   * The response to each PartiQL statement in the batch. The values of the list are ordered according to the ordering of the request statements.
   *
   * @public
   */
  Responses?: BatchStatementResponse[] | undefined;

  /**
   * The capacity units consumed by the entire operation. The values of the list are ordered according to the ordering of the statements.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity[] | undefined;
}

/**
 * Represents the output of a `BatchGetItem` operation.
 *
 * @public
 */
export interface BatchGetItemOutput {
  /**
   * A map of table name or table ARN to a list of items. Each object in `Responses` consists of a table name or ARN, along with a map of attribute data consisting of the data type and attribute value.
   *
   * @public
   */
  Responses?: Record<string, Record<string, AttributeValue>[]> | undefined;

  /**
   * A map of tables and their respective keys that were not processed with the current response. The `UnprocessedKeys` value is in the same form as `RequestItems`, so the value can be provided directly to a subsequent `BatchGetItem` operation. For more information, see `RequestItems` in the Request Parameters section.
   *
   * Each element consists of:
   *
   * - `Keys` - An array of primary key attribute values that define specific items in the table.
   * - `ProjectionExpression` - One or more attributes to be retrieved from the table or index. By default, all attributes are returned. If a requested attribute is not found, it does not appear in the result.
   * - `ConsistentRead` - The consistency of a read operation. If set to `true`, then a strongly consistent read is used; otherwise, an eventually consistent read is used.
   *
   * If there are no unprocessed keys remaining, the response contains an empty `UnprocessedKeys` map.
   *
   * @public
   */
  UnprocessedKeys?: Record<string, KeysAndAttributes> | undefined;

  /**
   * The read capacity units consumed by the entire `BatchGetItem` operation.
   *
   * Each element consists of:
   *
   * - `TableName` - The table that consumed the provisioned throughput.
   * - `CapacityUnits` - The total number of capacity units consumed.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity[] | undefined;
}

/**
 * Represents the input of a `Scan` operation.
 *
 * @public
 */
export interface ScanInput {
  /**
   * The name of the table containing the requested items or if you provide `IndexName`, the name of the table to which that index belongs.
   *
   * You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of a secondary index to scan. This index can be any local secondary index or global secondary index. Note that if you use the `IndexName` parameter, you must also provide `TableName`.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * This is a legacy parameter. Use `ProjectionExpression` instead. For more information, see [AttributesToGet](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  AttributesToGet?: string[] | undefined;

  /**
   * The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in `LastEvaluatedKey` to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in `LastEvaluatedKey` to apply in a subsequent operation to continue the operation. For more information, see [Working with Queries](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.
   *
   * - `ALL_ATTRIBUTES` - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index, DynamoDB fetches the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.
   * - `ALL_PROJECTED_ATTRIBUTES` - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying `ALL_ATTRIBUTES`.
   * - `COUNT` - Returns the number of matching items, rather than the matching items themselves. Note that this uses the same quantity of read capacity units as getting the items, and is subject to the same item size calculations.
   * - `SPECIFIC_ATTRIBUTES` - Returns only the attributes listed in `ProjectionExpression`. This return value is equivalent to specifying `ProjectionExpression` without specifying any value for `Select`.
   *
   *   If you query or scan a local secondary index and request only attributes that are projected into that index, the operation reads only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB fetches each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency.
   *
   *   If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.
   *
   * If neither `Select` nor `ProjectionExpression` are specified, DynamoDB defaults to `ALL_ATTRIBUTES` when accessing a table, and `ALL_PROJECTED_ATTRIBUTES` when accessing an index. You cannot use both `Select` and `ProjectionExpression` together in a single request, unless the value for `Select` is `SPECIFIC_ATTRIBUTES`. (This usage is equivalent to specifying `ProjectionExpression` without any value for `Select`.)
   *
   * > **Note:** If you use the `ProjectionExpression` parameter, then the value for `Select` can only be `SPECIFIC_ATTRIBUTES`. Any other value for `Select` will return an error.
   *
   * @public
   */
  Select?: Select | undefined;

  /**
   * This is a legacy parameter. Use `FilterExpression` instead. For more information, see [ScanFilter](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ScanFilter.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ScanFilter?: Record<string, Condition> | undefined;

  /**
   * This is a legacy parameter. Use `FilterExpression` instead. For more information, see [ConditionalOperator](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionalOperator?: ConditionalOperator | undefined;

  /**
   * The primary key of the first item that this operation will evaluate. Use the value that was returned for `LastEvaluatedKey` in the previous operation.
   *
   * The data type for `ExclusiveStartKey` must be String, Number or Binary. No set data types are allowed.
   *
   * In a parallel scan, a `Scan` request that includes `ExclusiveStartKey` must specify the same segment whose previous `Scan` returned the corresponding value of `LastEvaluatedKey`.
   *
   * @public
   */
  ExclusiveStartKey?: Record<string, AttributeValue> | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * For a parallel `Scan` request, `TotalSegments` represents the total number of segments into which the `Scan` operation will be divided. The value of `TotalSegments` corresponds to the number of application workers that will perform the parallel scan. For example, if you want to use four application threads to scan a table or an index, specify a `TotalSegments` value of 4.
   *
   * The value for `TotalSegments` must be greater than or equal to 1, and less than or equal to 1000000. If you specify a `TotalSegments` value of 1, the `Scan` operation will be sequential rather than parallel.
   *
   * If you specify `TotalSegments`, you must also specify `Segment`.
   *
   * @public
   */
  TotalSegments?: number | undefined;

  /**
   * For a parallel `Scan` request, `Segment` identifies an individual segment to be scanned by an application worker.
   *
   * Segment IDs are zero-based, so the first segment is always 0. For example, if you want to use four application threads to scan a table or an index, then the first thread specifies a `Segment` value of 0, the second thread specifies 1, and so on.
   *
   * The value of `LastEvaluatedKey` returned from a parallel `Scan` request must be used as `ExclusiveStartKey` with the same segment ID in a subsequent `Scan` operation.
   *
   * The value for `Segment` must be greater than or equal to 0, and less than the value provided for `TotalSegments`.
   *
   * If you provide `Segment`, you must also provide `TotalSegments`.
   *
   * @public
   */
  Segment?: number | undefined;

  /**
   * A string that identifies one or more attributes to retrieve from the specified table or index. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.
   *
   * If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.
   *
   * For more information, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProjectionExpression?: string | undefined;

  /**
   * A string that contains conditions that DynamoDB applies after the `Scan` operation, but before the data is returned to you. Items that do not satisfy the `FilterExpression` criteria are not returned.
   *
   * > **Note:** A `FilterExpression` is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.
   *
   * For more information, see [Filter Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.FilterExpression) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. The following are some use cases for using `ExpressionAttributeNames`:
   *
   * - To access an attribute whose name conflicts with a DynamoDB reserved word.
   * - To create a placeholder for repeating occurrences of an attribute name in an expression.
   * - To prevent special characters in an attribute name from being misinterpreted in an expression.
   *
   * Use the **#** character in an expression to dereference an attribute name. For example, consider the following attribute name:
   *
   * - `Percentile`
   *
   * The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*). To work around this, you could specify the following for `ExpressionAttributeNames`:
   *
   * - `\{"#P":"Percentile"\}`
   *
   * You could then use this substitution in an expression, as in this example:
   *
   * - `#P = :val`
   *
   * > **Note:** Tokens that begin with the **:** character are *expression attribute values*, which are placeholders for the actual value at runtime.
   *
   * For more information on expression attribute names, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression.
   *
   * Use the **:** (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the `ProductStatus` attribute was one of the following:
   *
   * `Available | Backordered | Discontinued`
   *
   * You would first need to specify `ExpressionAttributeValues` as follows:
   *
   * `\{ ":avail":\{"S":"Available"\}, ":back":\{"S":"Backordered"\}, ":disc":\{"S":"Discontinued"\} \}`
   *
   * You could then use these values in an expression, such as this:
   *
   * `ProductStatus IN (:avail, :back, :disc)`
   *
   * For more information on expression attribute values, see [Condition Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * A Boolean value that determines the read consistency model during the scan:
   *
   * - If `ConsistentRead` is `false`, then the data returned from `Scan` might not contain the results from other recently completed write operations (`PutItem`, `UpdateItem`, or `DeleteItem`).
   * - If `ConsistentRead` is `true`, then all of the write operations that completed before the `Scan` began are guaranteed to be contained in the `Scan` response.
   *
   * The default setting for `ConsistentRead` is `false`.
   *
   * The `ConsistentRead` parameter is not supported on global secondary indexes. If you scan a global secondary index with `ConsistentRead` set to true, you will receive a `ValidationException`.
   *
   * @public
   */
  ConsistentRead?: boolean | undefined;
}

/**
 * Represents the input of a `BatchWriteItem` operation.
 *
 * @public
 */
export interface BatchWriteItemInput {
  /**
   * A map of one or more table names or table ARNs and, for each table, a list of operations to be performed (`DeleteRequest` or `PutRequest`). Each element in the map consists of the following:
   *
   * - `DeleteRequest` - Perform a `DeleteItem` operation on the specified item. The item to be deleted is identified by a `Key` subelement:
   *
   *   - `Key` - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value. For each primary key, you must provide *all* of the key attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for *both* the partition key and the sort key.
   * - `PutRequest` - Perform a `PutItem` operation on the specified item. The item to be put is identified by an `Item` subelement:
   *
   *   - `Item` - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values are rejected with a `ValidationException` exception.
   *
   *     If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.
   *
   * @public
   */
  RequestItems: Record<string, WriteRequest[]> | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * Determines whether item collection metrics are returned. If set to `SIZE`, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to `NONE` (the default), no statistics are returned.
   *
   * @public
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | undefined;
}

/**
 * Represents the input of a `DeleteItem` operation.
 *
 * @public
 */
export interface DeleteItemInput {
  /**
   * The name of the table from which to delete the item. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A map of attribute names to `AttributeValue` objects, representing the primary key of the item to delete.
   *
   * For the primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
   *
   * @public
   */
  Key: Record<string, AttributeValue> | undefined;

  /**
   * This is a legacy parameter. Use `ConditionExpression` instead. For more information, see [Expected](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  Expected?: Record<string, ExpectedAttributeValue> | undefined;

  /**
   * This is a legacy parameter. Use `ConditionExpression` instead. For more information, see [ConditionalOperator](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionalOperator?: ConditionalOperator | undefined;

  /**
   * Use `ReturnValues` if you want to get the item attributes as they appeared before they were deleted. For `DeleteItem`, the valid values are:
   *
   * - `NONE` - If `ReturnValues` is not specified, or if its value is `NONE`, then nothing is returned. (This setting is the default for `ReturnValues`.)
   * - `ALL_OLD` - The content of the old item is returned.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * > **Note:** The `ReturnValues` parameter is used by several DynamoDB operations; however, `DeleteItem` does not recognize any values other than `NONE` or `ALL_OLD`.
   *
   * @public
   */
  ReturnValues?: ReturnValue | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * Determines whether item collection metrics are returned. If set to `SIZE`, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to `NONE` (the default), no statistics are returned.
   *
   * @public
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | undefined;

  /**
   * A condition that must be satisfied in order for a conditional `DeleteItem` to succeed.
   *
   * An expression can contain any of the following:
   *
   * - Functions: `attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size`
   *
   *   These function names are case-sensitive.
   * - Comparison operators: `= | <> | < | > | <= | >= | BETWEEN | IN`
   * - Logical operators: `AND | OR | NOT`
   *
   * For more information about condition expressions, see [Condition Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. The following are some use cases for using `ExpressionAttributeNames`:
   *
   * - To access an attribute whose name conflicts with a DynamoDB reserved word.
   * - To create a placeholder for repeating occurrences of an attribute name in an expression.
   * - To prevent special characters in an attribute name from being misinterpreted in an expression.
   *
   * Use the **#** character in an expression to dereference an attribute name. For example, consider the following attribute name:
   *
   * - `Percentile`
   *
   * The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*). To work around this, you could specify the following for `ExpressionAttributeNames`:
   *
   * - `\{"#P":"Percentile"\}`
   *
   * You could then use this substitution in an expression, as in this example:
   *
   * - `#P = :val`
   *
   * > **Note:** Tokens that begin with the **:** character are *expression attribute values*, which are placeholders for the actual value at runtime.
   *
   * For more information on expression attribute names, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression.
   *
   * Use the **:** (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the *ProductStatus* attribute was one of the following:
   *
   * `Available | Backordered | Discontinued`
   *
   * You would first need to specify `ExpressionAttributeValues` as follows:
   *
   * `\{ ":avail":\{"S":"Available"\}, ":back":\{"S":"Backordered"\}, ":disc":\{"S":"Discontinued"\} \}`
   *
   * You could then use these values in an expression, such as this:
   *
   * `ProductStatus IN (:avail, :back, :disc)`
   *
   * For more information on expression attribute values, see [Condition Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * An optional parameter that returns the item attributes for a `DeleteItem` operation that failed a condition check.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * Represents the input of a `PutItem` operation.
 *
 * @public
 */
export interface PutItemInput {
  /**
   * The name of the table to contain the item. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item.
   *
   * You must provide all of the attributes for the primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide both values for both the partition key and the sort key.
   *
   * If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.
   *
   * If the table has vector indexes, the following validations apply to write operations. A violation of any of these constraints results in a `ValidationException`:
   *
   * - The vector attribute must be a list of numbers with dimensions matching the index configuration.
   * - Vector values must fit in 32-bit IEEE-754 floating point format (f32).
   * - Partition key and inline filter attributes defined in the search schema must have data types matching the index schema definition.
   *
   * Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index.
   *
   * For more information about primary keys, see [Primary Key](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey) in the *Amazon DynamoDB Developer Guide*.
   *
   * Each element in the `Item` map is an `AttributeValue` object.
   *
   * @public
   */
  Item: Record<string, AttributeValue> | undefined;

  /**
   * This is a legacy parameter. Use `ConditionExpression` instead. For more information, see [Expected](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  Expected?: Record<string, ExpectedAttributeValue> | undefined;

  /**
   * Use `ReturnValues` if you want to get the item attributes as they appeared before they were updated with the `PutItem` request. For `PutItem`, the valid values are:
   *
   * - `NONE` - If `ReturnValues` is not specified, or if its value is `NONE`, then nothing is returned. (This setting is the default for `ReturnValues`.)
   * - `ALL_OLD` - If `PutItem` overwrote an attribute name-value pair, then the content of the old item is returned.
   *
   * The values returned are strongly consistent.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * > **Note:** The `ReturnValues` parameter is used by several DynamoDB operations; however, `PutItem` does not recognize any values other than `NONE` or `ALL_OLD`.
   *
   * @public
   */
  ReturnValues?: ReturnValue | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * Determines whether item collection metrics are returned. If set to `SIZE`, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to `NONE` (the default), no statistics are returned.
   *
   * @public
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | undefined;

  /**
   * This is a legacy parameter. Use `ConditionExpression` instead. For more information, see [ConditionalOperator](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionalOperator?: ConditionalOperator | undefined;

  /**
   * A condition that must be satisfied in order for a conditional `PutItem` operation to succeed.
   *
   * An expression can contain any of the following:
   *
   * - Functions: `attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size`
   *
   *   These function names are case-sensitive.
   * - Comparison operators: `= | <> | < | > | <= | >= | BETWEEN | IN`
   * - Logical operators: `AND | OR | NOT`
   *
   * For more information on condition expressions, see [Condition Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. The following are some use cases for using `ExpressionAttributeNames`:
   *
   * - To access an attribute whose name conflicts with a DynamoDB reserved word.
   * - To create a placeholder for repeating occurrences of an attribute name in an expression.
   * - To prevent special characters in an attribute name from being misinterpreted in an expression.
   *
   * Use the **#** character in an expression to dereference an attribute name. For example, consider the following attribute name:
   *
   * - `Percentile`
   *
   * The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*). To work around this, you could specify the following for `ExpressionAttributeNames`:
   *
   * - `\{"#P":"Percentile"\}`
   *
   * You could then use this substitution in an expression, as in this example:
   *
   * - `#P = :val`
   *
   * > **Note:** Tokens that begin with the **:** character are *expression attribute values*, which are placeholders for the actual value at runtime.
   *
   * For more information on expression attribute names, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression.
   *
   * Use the **:** (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the *ProductStatus* attribute was one of the following:
   *
   * `Available | Backordered | Discontinued`
   *
   * You would first need to specify `ExpressionAttributeValues` as follows:
   *
   * `\{ ":avail":\{"S":"Available"\}, ":back":\{"S":"Backordered"\}, ":disc":\{"S":"Discontinued"\} \}`
   *
   * You could then use these values in an expression, such as this:
   *
   * `ProductStatus IN (:avail, :back, :disc)`
   *
   * For more information on expression attribute values, see [Condition Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * An optional parameter that returns the item attributes for a `PutItem` operation that failed a condition check.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * Represents the input of a `Query` operation.
 *
 * @public
 */
export interface QueryInput {
  /**
   * The name of the table containing the requested items. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of an index to query. This index can be any local secondary index or global secondary index on the table. Note that if you use the `IndexName` parameter, you must also provide `TableName.`
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.
   *
   * - `ALL_ATTRIBUTES` - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index, DynamoDB fetches the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.
   * - `ALL_PROJECTED_ATTRIBUTES` - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying `ALL_ATTRIBUTES`.
   * - `COUNT` - Returns the number of matching items, rather than the matching items themselves. Note that this uses the same quantity of read capacity units as getting the items, and is subject to the same item size calculations.
   * - `SPECIFIC_ATTRIBUTES` - Returns only the attributes listed in `ProjectionExpression`. This return value is equivalent to specifying `ProjectionExpression` without specifying any value for `Select`.
   *
   *   If you query or scan a local secondary index and request only attributes that are projected into that index, the operation will read only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB fetches each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency.
   *
   *   If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.
   *
   * If neither `Select` nor `ProjectionExpression` are specified, DynamoDB defaults to `ALL_ATTRIBUTES` when accessing a table, and `ALL_PROJECTED_ATTRIBUTES` when accessing an index. You cannot use both `Select` and `ProjectionExpression` together in a single request, unless the value for `Select` is `SPECIFIC_ATTRIBUTES`. (This usage is equivalent to specifying `ProjectionExpression` without any value for `Select`.)
   *
   * > **Note:** If you use the `ProjectionExpression` parameter, then the value for `Select` can only be `SPECIFIC_ATTRIBUTES`. Any other value for `Select` will return an error.
   *
   * @public
   */
  Select?: Select | undefined;

  /**
   * This is a legacy parameter. Use `ProjectionExpression` instead. For more information, see [AttributesToGet](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  AttributesToGet?: string[] | undefined;

  /**
   * The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in `LastEvaluatedKey` to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in `LastEvaluatedKey` to apply in a subsequent operation to continue the operation. For more information, see [Query and Scan](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Determines the read consistency model: If set to `true`, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.
   *
   * Strongly consistent reads are not supported on global secondary indexes. If you query a global secondary index with `ConsistentRead` set to `true`, you will receive a `ValidationException`.
   *
   * @public
   */
  ConsistentRead?: boolean | undefined;

  /**
   * This is a legacy parameter. Use `KeyConditionExpression` instead. For more information, see [KeyConditions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.KeyConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  KeyConditions?: Record<string, Condition> | undefined;

  /**
   * This is a legacy parameter. Use `FilterExpression` instead. For more information, see [QueryFilter](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.QueryFilter.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  QueryFilter?: Record<string, Condition> | undefined;

  /**
   * This is a legacy parameter. Use `FilterExpression` instead. For more information, see [ConditionalOperator](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionalOperator?: ConditionalOperator | undefined;

  /**
   * Specifies the order for index traversal: If `true` (default), the traversal is performed in ascending order; if `false`, the traversal is performed in descending order.
   *
   * Items with the same partition key value are stored in sorted order by sort key. If the sort key data type is Number, the results are stored in numeric order. For type String, the results are stored in order of UTF-8 bytes. For type Binary, DynamoDB treats each byte of the binary data as unsigned.
   *
   * If `ScanIndexForward` is `true`, DynamoDB returns the results in the order in which they are stored (by sort key value). This is the default behavior. If `ScanIndexForward` is `false`, DynamoDB reads the results in reverse order by sort key value, and then returns the results to the client.
   *
   * @public
   */
  ScanIndexForward?: boolean | undefined;

  /**
   * The primary key of the first item that this operation will evaluate. Use the value that was returned for `LastEvaluatedKey` in the previous operation.
   *
   * The data type for `ExclusiveStartKey` must be String, Number, or Binary. No set data types are allowed.
   *
   * @public
   */
  ExclusiveStartKey?: Record<string, AttributeValue> | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.
   *
   * If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.
   *
   * For more information, see [Accessing Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ProjectionExpression?: string | undefined;

  /**
   * A string that contains conditions that DynamoDB applies after the `Query` operation, but before the data is returned to you. Items that do not satisfy the `FilterExpression` criteria are not returned.
   *
   * A `FilterExpression` does not allow key attributes. You cannot define a filter expression based on a partition key or a sort key.
   *
   * > **Note:** A `FilterExpression` is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.
   *
   * For more information, see [Filter Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.FilterExpression.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * The condition that specifies the key values for items to be retrieved by the `Query` action.
   *
   * The condition must perform an equality test on a single partition key value.
   *
   * The condition can optionally perform one of several comparison tests on a single sort key value. This allows `Query` to retrieve one item with a given partition key value and sort key value, or several items that have the same partition key value but different sort key values.
   *
   * The partition key equality test is required, and must be specified in the following format:
   *
   * `partitionKeyName` *=* `:partitionkeyval`
   *
   * If you also want to provide a condition for the sort key, it must be combined using `AND` with the condition for the sort key. Following is an example, using the **=** comparison operator for the sort key:
   *
   * `partitionKeyName` `=` `:partitionkeyval` `AND` `sortKeyName` `=` `:sortkeyval`
   *
   * Valid comparisons for the sort key condition are as follows:
   *
   * - `sortKeyName` `=` `:sortkeyval` - true if the sort key value is equal to `:sortkeyval`.
   * - `sortKeyName` `<` `:sortkeyval` - true if the sort key value is less than `:sortkeyval`.
   * - `sortKeyName` `<=` `:sortkeyval` - true if the sort key value is less than or equal to `:sortkeyval`.
   * - `sortKeyName` `>` `:sortkeyval` - true if the sort key value is greater than `:sortkeyval`.
   * - `sortKeyName` `>=` `:sortkeyval` - true if the sort key value is greater than or equal to `:sortkeyval`.
   * - `sortKeyName` `BETWEEN` `:sortkeyval1` `AND` `:sortkeyval2` - true if the sort key value is greater than or equal to `:sortkeyval1`, and less than or equal to `:sortkeyval2`.
   * - `begins_with (` `sortKeyName`, `:sortkeyval` `)` - true if the sort key value begins with a particular operand. (You cannot use this function with a sort key that is of type Number.) Note that the function name `begins_with` is case-sensitive.
   *
   * Use the `ExpressionAttributeValues` parameter to replace tokens such as `:partitionval` and `:sortval` with actual values at runtime.
   *
   * You can optionally use the `ExpressionAttributeNames` parameter to replace the names of the partition key and sort key with placeholder tokens. This option might be necessary if an attribute name conflicts with a DynamoDB reserved word. For example, the following `KeyConditionExpression` parameter causes an error because *Size* is a reserved word:
   *
   * - `Size = :myval`
   *
   * To work around this, define a placeholder (such a `#S`) to represent the attribute name *Size*. `KeyConditionExpression` then is as follows:
   *
   * - `#S = :myval`
   *
   * For a list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * For more information on `ExpressionAttributeNames` and `ExpressionAttributeValues`, see [Using Placeholders for Attribute Names and Values](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ExpressionPlaceholders.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  KeyConditionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. The following are some use cases for using `ExpressionAttributeNames`:
   *
   * - To access an attribute whose name conflicts with a DynamoDB reserved word.
   * - To create a placeholder for repeating occurrences of an attribute name in an expression.
   * - To prevent special characters in an attribute name from being misinterpreted in an expression.
   *
   * Use the **#** character in an expression to dereference an attribute name. For example, consider the following attribute name:
   *
   * - `Percentile`
   *
   * The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*). To work around this, you could specify the following for `ExpressionAttributeNames`:
   *
   * - `\{"#P":"Percentile"\}`
   *
   * You could then use this substitution in an expression, as in this example:
   *
   * - `#P = :val`
   *
   * > **Note:** Tokens that begin with the **:** character are *expression attribute values*, which are placeholders for the actual value at runtime.
   *
   * For more information on expression attribute names, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression.
   *
   * Use the **:** (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the *ProductStatus* attribute was one of the following:
   *
   * `Available | Backordered | Discontinued`
   *
   * You would first need to specify `ExpressionAttributeValues` as follows:
   *
   * `\{ ":avail":\{"S":"Available"\}, ":back":\{"S":"Backordered"\}, ":disc":\{"S":"Discontinued"\} \}`
   *
   * You could then use these values in an expression, such as this:
   *
   * `ProductStatus IN (:avail, :back, :disc)`
   *
   * For more information on expression attribute values, see [Specifying Conditions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;
}

/**
 * Represents the output of a `BatchWriteItem` operation.
 *
 * @public
 */
export interface BatchWriteItemOutput {
  /**
   * A map of tables and requests against those tables that were not processed. The `UnprocessedItems` value is in the same form as `RequestItems`, so you can provide this value directly to a subsequent `BatchWriteItem` operation. For more information, see `RequestItems` in the Request Parameters section.
   *
   * Each `UnprocessedItems` entry consists of a table name or table ARN and, for that table, a list of operations to perform (`DeleteRequest` or `PutRequest`).
   *
   * - `DeleteRequest` - Perform a `DeleteItem` operation on the specified item. The item to be deleted is identified by a `Key` subelement:
   *
   *   - `Key` - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value.
   * - `PutRequest` - Perform a `PutItem` operation on the specified item. The item to be put is identified by an `Item` subelement:
   *
   *   - `Item` - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values will be rejected with a `ValidationException` exception.
   *
   *     If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.
   *
   * If there are no unprocessed items remaining, the response contains an empty `UnprocessedItems` map.
   *
   * @public
   */
  UnprocessedItems?: Record<string, WriteRequest[]> | undefined;

  /**
   * A list of tables that were processed by `BatchWriteItem` and, for each table, information about any item collections that were affected by individual `DeleteItem` or `PutItem` operations.
   *
   * Each entry consists of the following subelements:
   *
   * - `ItemCollectionKey` - The partition key value of the item collection. This is the same as the partition key value of the item.
   * - `SizeEstimateRangeGB` - An estimate of item collection size, expressed in GB. This is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on the table. Use this estimate to measure whether a local secondary index is approaching its size limit.
   *
   *   The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.
   *
   * @public
   */
  ItemCollectionMetrics?: Record<string, ItemCollectionMetrics[]> | undefined;

  /**
   * The capacity units consumed by the entire `BatchWriteItem` operation.
   *
   * Each element consists of:
   *
   * - `TableName` - The table that consumed the provisioned throughput.
   * - `CapacityUnits` - The total number of capacity units consumed.
   *
   * If the table has vector indexes, each element also includes a `VectorIndexes` field with `VectorWriteRequestBytes` consumed for each affected vector index.
   *
   * @public
   */
  ConsumedCapacity?: ConsumedCapacity[] | undefined;
}

/**
 * Represents the input of an `UpdateItem` operation.
 *
 * @public
 */
export interface UpdateItemInput {
  /**
   * The name of the table containing the item to update. You can also provide the Amazon Resource Name (ARN) of the table in this parameter.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.
   *
   * For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
   *
   * @public
   */
  Key: Record<string, AttributeValue> | undefined;

  /**
   * This is a legacy parameter. Use `UpdateExpression` instead. For more information, see [AttributeUpdates](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributeUpdates.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  AttributeUpdates?: Record<string, AttributeValueUpdate> | undefined;

  /**
   * This is a legacy parameter. Use `ConditionExpression` instead. For more information, see [Expected](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  Expected?: Record<string, ExpectedAttributeValue> | undefined;

  /**
   * This is a legacy parameter. Use `ConditionExpression` instead. For more information, see [ConditionalOperator](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionalOperator?: ConditionalOperator | undefined;

  /**
   * Use `ReturnValues` if you want to get the item attributes as they appear before or after they are successfully updated. For `UpdateItem`, the valid values are:
   *
   * - `NONE` - If `ReturnValues` is not specified, or if its value is `NONE`, then nothing is returned. (This setting is the default for `ReturnValues`.)
   * - `ALL_OLD` - Returns all of the attributes of the item, as they appeared before the UpdateItem operation.
   * - `UPDATED_OLD` - Returns only the updated attributes, as they appeared before the UpdateItem operation.
   * - `ALL_NEW` - Returns all of the attributes of the item, as they appear after the UpdateItem operation.
   * - `UPDATED_NEW` - Returns only the updated attributes, as they appear after the UpdateItem operation.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * The values returned are strongly consistent.
   *
   * @public
   */
  ReturnValues?: ReturnValue | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * Determines whether item collection metrics are returned. If set to `SIZE`, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to `NONE` (the default), no statistics are returned.
   *
   * @public
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | undefined;

  /**
   * An expression that defines one or more attributes to be updated, the action to be performed on them, and new values for them.
   *
   * The following action values are available for `UpdateExpression`.
   *
   * - `SET` - Adds one or more attributes and values to an item. If any of these attributes already exist, they are replaced by the new values. You can also use `SET` to add or subtract from an attribute that is of type Number. For example: `SET myNum = myNum + :val`
   *
   *   `SET` supports the following functions:
   *
   *   - `if_not_exists (path, operand)` - if the item does not contain an attribute at the specified path, then `if_not_exists` evaluates to operand; otherwise, it evaluates to path. You can use this function to avoid overwriting an attribute that may already be present in the item.
   *   - `list_append (operand, operand)` - evaluates to a list with a new element added to it. You can append the new element to the start or the end of the list by reversing the order of the operands.
   *
   *   These function names are case-sensitive.
   * - `REMOVE` - Removes one or more attributes from an item.
   * - `ADD` - Adds the specified value to the item, if the attribute does not already exist. If the attribute does exist, then the behavior of `ADD` depends on the data type of the attribute:
   *
   *   - If the existing attribute is a number, and if `Value` is also a number, then `Value` is mathematically added to the existing attribute. If `Value` is a negative number, then it is subtracted from the existing attribute.
   *
   *     > **Note:**
   *     >
   *     > If you use `ADD` to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses `0` as the initial value.
   *     >
   *     > Similarly, if you use `ADD` for an existing item to increment or decrement an attribute value that doesn't exist before the update, DynamoDB uses `0` as the initial value. For example, suppose that the item you want to update doesn't have an attribute named `itemcount`, but you decide to `ADD` the number `3` to this attribute anyway. DynamoDB will create the `itemcount` attribute, set its initial value to `0`, and finally add `3` to it. The result will be a new `itemcount` attribute in the item, with a value of `3`.
   *   - If the existing data type is a set and if `Value` is also a set, then `Value` is added to the existing set. For example, if the attribute value is the set `[1,2]`, and the `ADD` action specified `[3]`, then the final attribute value is `[1,2,3]`. An error occurs if an `ADD` action is specified for a set attribute and the attribute type specified does not match the existing set type.
   *
   *     Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the `Value` must also be a set of strings.
   *
   *   > **Important:** The `ADD` action only supports Number and set data types.
   * - `DELETE` - Deletes an element from a set.
   *
   *   If a set of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set `[a,b,c]` and the `DELETE` action specifies `[a,c]`, then the final attribute value is `[b]`. Specifying an empty set is an error.
   *
   *   > **Important:** The `DELETE` action only supports set data types.
   *
   * You can have many actions in a single expression, such as the following: `SET a=:value1, b=:value2 DELETE :value3, :value4, :value5`
   *
   * For more information on update expressions, see [Modifying Items and Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Modifying.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  UpdateExpression?: string | undefined;

  /**
   * A condition that must be satisfied in order for a conditional update to succeed.
   *
   * An expression can contain any of the following:
   *
   * - Functions: `attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size`
   *
   *   These function names are case-sensitive.
   * - Comparison operators: `= | <> | < | > | <= | >= | BETWEEN | IN`
   * - Logical operators: `AND | OR | NOT`
   *
   * For more information about condition expressions, see [Specifying Conditions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ConditionExpression?: string | undefined;

  /**
   * One or more substitution tokens for attribute names in an expression. The following are some use cases for using `ExpressionAttributeNames`:
   *
   * - To access an attribute whose name conflicts with a DynamoDB reserved word.
   * - To create a placeholder for repeating occurrences of an attribute name in an expression.
   * - To prevent special characters in an attribute name from being misinterpreted in an expression.
   *
   * Use the **#** character in an expression to dereference an attribute name. For example, consider the following attribute name:
   *
   * - `Percentile`
   *
   * The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see [Reserved Words](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html) in the *Amazon DynamoDB Developer Guide*.) To work around this, you could specify the following for `ExpressionAttributeNames`:
   *
   * - `\{"#P":"Percentile"\}`
   *
   * You could then use this substitution in an expression, as in this example:
   *
   * - `#P = :val`
   *
   * > **Note:** Tokens that begin with the **:** character are *expression attribute values*, which are placeholders for the actual value at runtime.
   *
   * For more information about expression attribute names, see [Specifying Item Attributes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeNames?: Record<string, string> | undefined;

  /**
   * One or more values that can be substituted in an expression.
   *
   * Use the **:** (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the `ProductStatus` attribute was one of the following:
   *
   * `Available | Backordered | Discontinued`
   *
   * You would first need to specify `ExpressionAttributeValues` as follows:
   *
   * `\{ ":avail":\{"S":"Available"\}, ":back":\{"S":"Backordered"\}, ":disc":\{"S":"Discontinued"\} \}`
   *
   * You could then use these values in an expression, such as this:
   *
   * `ProductStatus IN (:avail, :back, :disc)`
   *
   * For more information on expression attribute values, see [Condition Expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html) in the *Amazon DynamoDB Developer Guide*.
   *
   * @public
   */
  ExpressionAttributeValues?: Record<string, AttributeValue> | undefined;

  /**
   * An optional parameter that returns the item attributes for an `UpdateItem` operation that failed a condition check.
   *
   * There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.
   *
   * @public
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | undefined;
}

/**
 * A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.
 *
 * @public
 */
export interface TransactWriteItem {
  /**
   * A request to perform a check item operation.
   *
   * @public
   */
  ConditionCheck?: ConditionCheck | undefined;

  /**
   * A request to perform a `PutItem` operation.
   *
   * @public
   */
  Put?: Put | undefined;

  /**
   * A request to perform a `DeleteItem` operation.
   *
   * @public
   */
  Delete?: Delete | undefined;

  /**
   * A request to perform an `UpdateItem` operation.
   *
   * @public
   */
  Update?: Update | undefined;
}

/**
 * @public
 */
export interface TransactWriteItemsInput {
  /**
   * An ordered array of up to 100 `TransactWriteItem` objects, each of which contains a `ConditionCheck`, `Put`, `Update`, or `Delete` object. These can operate on items in different tables, but the tables must reside in the same Amazon Web Services account and Region, and no two of them can operate on the same item.
   *
   * @public
   */
  TransactItems: TransactWriteItem[] | undefined;

  /**
   * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:
   *
   * - `INDEXES` - The response includes the aggregate `ConsumedCapacity` for the operation, together with `ConsumedCapacity` for each table and secondary index that was accessed.
   *
   *   Note that some operations, such as `GetItem` and `BatchGetItem`, do not access any indexes at all. In these cases, specifying `INDEXES` will only return `ConsumedCapacity` information for table(s).
   * - `TOTAL` - The response includes only the aggregate `ConsumedCapacity` for the operation.
   * - `NONE` - No `ConsumedCapacity` details are included in the response.
   *
   * @public
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | undefined;

  /**
   * Determines whether item collection metrics are returned. If set to `SIZE`, the response includes statistics about item collections (if any), that were modified during the operation and are returned in the response. If set to `NONE` (the default), no statistics are returned.
   *
   * @public
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | undefined;

  /**
   * Providing a `ClientRequestToken` makes the call to `TransactWriteItems` idempotent, meaning that multiple identical calls have the same effect as one single call.
   *
   * Although multiple identical calls using the same client request token produce the same result on the server (no side effects), the responses to the calls might not be the same. If the `ReturnConsumedCapacity` parameter is set, then the initial `TransactWriteItems` call returns the amount of write capacity units consumed in making the changes. Subsequent `TransactWriteItems` calls with the same client token return the number of read capacity units consumed in reading the item.
   *
   * A client request token is valid for 10 minutes after the first request that uses it is completed. After 10 minutes, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 10 minutes, or the result might not be idempotent.
   *
   * If you submit a request with the same client token but a change in other parameters within the 10-minute idempotency window, DynamoDB returns an `IdempotentParameterMismatch` exception.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}
