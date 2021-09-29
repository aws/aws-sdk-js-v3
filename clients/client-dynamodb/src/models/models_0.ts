import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Contains details of a table archival operation.</p>
 */
export interface ArchivalSummary {
  /**
   * <p>The date and time when table archival was initiated by DynamoDB,
   *          in UNIX epoch time format.</p>
   */
  ArchivalDateTime?: Date;

  /**
   * <p>The reason DynamoDB archived the table. Currently, the only
   *          possible value is:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS</code> - The
   *          table was archived due to the table's AWS KMS key being inaccessible
   *          for more than seven days. An On-Demand backup was created at the archival
   *          time.</p>
   *             </li>
   *          </ul>
   */
  ArchivalReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the backup the table was archived
   *          to, when applicable in the archival reason. If you wish to restore this
   *          backup to the same table name, you will need to delete the original
   *          table.</p>
   */
  ArchivalBackupArn?: string;
}

export namespace ArchivalSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArchivalSummary): any => ({
    ...obj,
  });
}

export type AttributeAction = "ADD" | "DELETE" | "PUT";

export type ScalarAttributeType = "B" | "N" | "S";

/**
 * <p>Represents an attribute for describing the key schema for the table and indexes.</p>
 */
export interface AttributeDefinition {
  /**
   * <p>A name for the attribute.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The data type for the attribute, where:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>S</code> - the attribute is of type String</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>N</code> - the attribute is of type Number</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>B</code> - the attribute is of type Binary</p>
   *             </li>
   *          </ul>
   */
  AttributeType: ScalarAttributeType | string | undefined;
}

export namespace AttributeDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a target tracking scaling policy.</p>
 */
export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
  /**
   * <p>Indicates whether scale in by the target tracking policy is disabled. If the value is true,
   *       scale in is disabled and the target tracking policy won't remove capacity from the scalable resource.
   *       Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource.
   *       The default value is false.</p>
   */
  DisableScaleIn?: boolean;

  /**
   * <p>The amount of time, in seconds, after a scale in activity completes before another scale
   *          in activity can start. The cooldown period is used to block subsequent scale in requests
   *          until it has expired. You should scale in conservatively to protect your application's
   *          availability. However, if another alarm triggers a scale out policy during the cooldown
   *          period after a scale-in, application auto scaling scales out your scalable target
   *          immediately. </p>
   */
  ScaleInCooldown?: number;

  /**
   * <p>The amount of time, in seconds, after a scale out activity completes before another scale out
   *       activity can start. While the cooldown period is in effect, the capacity that has been added
   *       by the previous scale out event that initiated the cooldown is calculated as part of the
   *       desired capacity for the next scale out. You should continuously (but not excessively)
   *       scale out.</p>
   */
  ScaleOutCooldown?: number;

  /**
   * <p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).</p>
   */
  TargetValue: number | undefined;
}

export namespace AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingTargetTrackingScalingPolicyConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of the scaling policy.</p>
 */
export interface AutoScalingPolicyDescription {
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>Represents a target tracking scaling policy configuration.</p>
   */
  TargetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
}

export namespace AutoScalingPolicyDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingPolicyDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings of a target tracking scaling policy that will be modified.</p>
 */
export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
  /**
   * <p>Indicates whether scale in by the target tracking policy is disabled. If the value is true,
   *       scale in is disabled and the target tracking policy won't remove capacity from the scalable resource.
   *       Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource.
   *       The default value is false.</p>
   */
  DisableScaleIn?: boolean;

  /**
   * <p>The amount of time, in seconds, after a scale in activity completes before another scale
   *          in activity can start. The cooldown period is used to block subsequent scale in requests
   *          until it has expired. You should scale in conservatively to protect your application's
   *          availability. However, if another alarm triggers a scale out policy during the cooldown
   *          period after a scale-in, application auto scaling scales out your scalable target
   *          immediately. </p>
   */
  ScaleInCooldown?: number;

  /**
   * <p>The amount of time, in seconds, after a scale out activity completes before another scale out
   *       activity can start. While the cooldown period is in effect, the capacity that has been added
   *       by the previous scale out event that initiated the cooldown is calculated as part of the
   *       desired capacity for the next scale out. You should continuously (but not excessively)
   *       scale out.</p>
   */
  ScaleOutCooldown?: number;

  /**
   * <p>The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).</p>
   */
  TargetValue: number | undefined;
}

export namespace AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling policy to be modified.</p>
 */
export interface AutoScalingPolicyUpdate {
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>Represents a target tracking scaling policy configuration.</p>
   */
  TargetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate | undefined;
}

export namespace AutoScalingPolicyUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingPolicyUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling settings for a global table or global secondary
 *          index.</p>
 */
export interface AutoScalingSettingsDescription {
  /**
   * <p>The minimum capacity units that a global table or global secondary index should be scaled down to.</p>
   */
  MinimumUnits?: number;

  /**
   * <p>The maximum capacity units that a global table or global secondary index should be scaled up to.</p>
   */
  MaximumUnits?: number;

  /**
   * <p>Disabled auto scaling for this global table or global secondary index.</p>
   */
  AutoScalingDisabled?: boolean;

  /**
   * <p>Role ARN used for configuring the auto scaling policy.</p>
   */
  AutoScalingRoleArn?: string;

  /**
   * <p>Information about the scaling policies.</p>
   */
  ScalingPolicies?: AutoScalingPolicyDescription[];
}

export namespace AutoScalingSettingsDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingSettingsDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling settings to be modified for a global table or global
 *          secondary index.</p>
 */
export interface AutoScalingSettingsUpdate {
  /**
   * <p>The minimum capacity units that a global table or global secondary index should be scaled down to.</p>
   */
  MinimumUnits?: number;

  /**
   * <p>The maximum capacity units that a global table or global secondary index should be scaled up to.</p>
   */
  MaximumUnits?: number;

  /**
   * <p>Disabled auto scaling for this global table or global secondary index.</p>
   */
  AutoScalingDisabled?: boolean;

  /**
   * <p>Role ARN used for configuring auto scaling policy.</p>
   */
  AutoScalingRoleArn?: string;

  /**
   * <p>The scaling policy to apply for scaling target global table or global secondary index capacity units.</p>
   */
  ScalingPolicyUpdate?: AutoScalingPolicyUpdate;
}

export namespace AutoScalingSettingsUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingSettingsUpdate): any => ({
    ...obj,
  });
}

export type BackupStatus = "AVAILABLE" | "CREATING" | "DELETED";

export enum BackupType {
  AWS_BACKUP = "AWS_BACKUP",
  SYSTEM = "SYSTEM",
  USER = "USER",
}

/**
 * <p>Contains the details of the backup created for the table.</p>
 */
export interface BackupDetails {
  /**
   * <p>ARN associated with the backup.</p>
   */
  BackupArn: string | undefined;

  /**
   * <p>Name of the requested backup.</p>
   */
  BackupName: string | undefined;

  /**
   * <p>Size of the backup in bytes.</p>
   */
  BackupSizeBytes?: number;

  /**
   * <p>Backup can be in one of the following states: CREATING, ACTIVE, DELETED. </p>
   */
  BackupStatus: BackupStatus | string | undefined;

  /**
   * <p>BackupType:</p>
   *           <ul>
   *             <li>
   *                 <p>
   *                   <code>USER</code> - You create and manage these using the on-demand backup feature.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SYSTEM</code> - If you delete a table with point-in-time recovery enabled, a <code>SYSTEM</code> backup is automatically
   *                 created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted
   * 		table to the state it was in just before the point of deletion.
   * 		</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AWS_BACKUP</code> - On-demand backup created by you from AWS Backup service.</p>
   *             </li>
   *          </ul>
   */
  BackupType: BackupType | string | undefined;

  /**
   * <p>Time at which the backup was created. This is the request time of the backup. </p>
   */
  BackupCreationDateTime: Date | undefined;

  /**
   * <p>Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code>
   *       on-demand backup expires automatically 35 days after its creation.</p>
   */
  BackupExpiryDateTime?: Date;
}

export namespace BackupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupDetails): any => ({
    ...obj,
  });
}

export type BillingMode = "PAY_PER_REQUEST" | "PROVISIONED";

export type KeyType = "HASH" | "RANGE";

/**
 * <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes
 *       that make up the primary key of a table, or the key attributes of an index.</p>
 *          <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a
 *       simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite
 *        primary key would require one <code>KeySchemaElement</code> for the partition key, and another
 *         <code>KeySchemaElement</code> for the sort key.</p>
 *          <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary.  The attribute cannot be nested within a List or a Map.</p>
 */
export interface KeySchemaElement {
  /**
   * <p>The name of a key attribute.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The role that this key attribute will assume:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code> - sort key</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
   *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
   *         evenly distribute data items across partitions, based on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *          </note>
   */
  KeyType: KeyType | string | undefined;
}

export namespace KeySchemaElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeySchemaElement): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the provisioned throughput settings for a specified table or index. The settings
 *       can be modified using the <code>UpdateTable</code> operation.</p>
 *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface ProvisionedThroughput {
  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a
   *         <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write
   *         Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *         <p>If read/write capacity mode is <code>PAY_PER_REQUEST</code> the value is set to 0.</p>
   */
  ReadCapacityUnits: number | undefined;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a
   *         <code>ThrottlingException</code>. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write
   *         Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *         <p>If read/write capacity mode is <code>PAY_PER_REQUEST</code> the value is set to 0.</p>
   */
  WriteCapacityUnits: number | undefined;
}

export namespace ProvisionedThroughput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedThroughput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the table when the backup was created. </p>
 */
export interface SourceTableDetails {
  /**
   * <p>The name of the table for which the backup was created. </p>
   */
  TableName: string | undefined;

  /**
   * <p>Unique identifier for the table for which the backup was created. </p>
   */
  TableId: string | undefined;

  /**
   * <p>ARN of the table for which backup was created. </p>
   */
  TableArn?: string;

  /**
   * <p>Size of the table in bytes. Note that this is an approximate value.</p>
   */
  TableSizeBytes?: number;

  /**
   * <p>Schema of the table. </p>
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * <p>Time when the source table was created. </p>
   */
  TableCreationDateTime: Date | undefined;

  /**
   * <p>Read IOPs and Write IOPS on the table when the backup was created.</p>
   */
  ProvisionedThroughput: ProvisionedThroughput | undefined;

  /**
   * <p>Number of items in the table. Note that this is an approximate value. </p>
   */
  ItemCount?: number;

  /**
   * <p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONED</code> - Sets the read/write capacity mode to <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for predictable workloads.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAY_PER_REQUEST</code> - Sets the read/write capacity mode to <code>PAY_PER_REQUEST</code>. We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads.
   *             </p>
   *             </li>
   *          </ul>
   */
  BillingMode?: BillingMode | string;
}

export namespace SourceTableDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceTableDetails): any => ({
    ...obj,
  });
}

export type ProjectionType = "ALL" | "INCLUDE" | "KEYS_ONLY";

/**
 * <p>Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.</p>
 */
export interface Projection {
  /**
   * <p>The set of attributes that are projected into the index:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the
   *           index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCLUDE</code> - In addition to the attributes described in <code>KEYS_ONLY</code>, the secondary index will include other non-key attributes that you specify.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code> - All of the table attributes are projected into the index.</p>
   *             </li>
   *          </ul>
   */
  ProjectionType?: ProjectionType | string;

  /**
   * <p>Represents the non-key attribute names which will be projected into the index.</p>
   *          <p>For local secondary indexes, the total count of <code>NonKeyAttributes</code> summed across all of the local secondary indexes,
   *       must not exceed 20. If you project the same attribute into two
   *       different indexes, this counts as two distinct attributes when determining the total.</p>
   */
  NonKeyAttributes?: string[];
}

export namespace Projection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Projection): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a global secondary index for the table
 *      when the backup was created.</p>
 */
export interface GlobalSecondaryIndexInfo {
  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code> - sort key</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
   *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
   *         evenly distribute data items across partitions, based on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *          </note>
   */
  KeySchema?: KeySchemaElement[];

  /**
   * <p>Represents attributes that are copied (projected) from the table into
   *       the global secondary index. These are in addition to the primary
   *       key attributes and index key attributes, which are automatically
   *       projected. </p>
   */
  Projection?: Projection;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index. </p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;
}

export namespace GlobalSecondaryIndexInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalSecondaryIndexInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a local secondary index for the table
 *      when the backup was created.</p>
 */
export interface LocalSecondaryIndexInfo {
  /**
   * <p>Represents the name of the local secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The complete key schema for a local secondary index, which consists of one or more pairs of attribute names and key types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code> - sort key</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
   *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
   *         evenly distribute data items across partitions, based on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *          </note>
   */
  KeySchema?: KeySchemaElement[];

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. </p>
   */
  Projection?: Projection;
}

export namespace LocalSecondaryIndexInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalSecondaryIndexInfo): any => ({
    ...obj,
  });
}

export type SSEType = "AES256" | "KMS";

export type SSEStatus = "DISABLED" | "DISABLING" | "ENABLED" | "ENABLING" | "UPDATING";

/**
 * <p>The description of the server-side encryption status on the specified table.</p>
 */
export interface SSEDescription {
  /**
   * <p>Represents the current state of server-side encryption. The only supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Server-side encryption is enabled.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>UPDATING</code> - Server-side encryption is being updated.</p>
   *             </li>
   *          </ul>
   */
  Status?: SSEStatus | string;

  /**
   * <p>Server-side encryption type. The only supported value is:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>KMS</code> - Server-side encryption that uses AWS Key Management Service. The
   *                key is stored in your account and is managed by AWS KMS (AWS KMS charges
   *                apply).</p>
   *             </li>
   *          </ul>
   */
  SSEType?: SSEType | string;

  /**
   * <p>The AWS KMS customer master key (CMK) ARN used for the AWS KMS encryption.</p>
   */
  KMSMasterKeyArn?: string;

  /**
   * <p>Indicates the time, in UNIX epoch date format, when DynamoDB detected that the table's
   *          AWS KMS key was inaccessible. This attribute will automatically be cleared when DynamoDB
   *          detects that the table's AWS KMS key is accessible again. DynamoDB will initiate the table
   *          archival process when table's AWS KMS key remains inaccessible for more than seven days
   *          from this date.</p>
   */
  InaccessibleEncryptionDateTime?: Date;
}

export namespace SSEDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SSEDescription): any => ({
    ...obj,
  });
}

export type StreamViewType = "KEYS_ONLY" | "NEW_AND_OLD_IMAGES" | "NEW_IMAGE" | "OLD_IMAGE";

/**
 * <p>Represents the DynamoDB Streams configuration for a table in DynamoDB.</p>
 */
export interface StreamSpecification {
  /**
   * <p>Indicates whether DynamoDB Streams is enabled (true) or disabled (false) on the table.</p>
   */
  StreamEnabled: boolean | undefined;

  /**
   * <p>
   *               When an item in the table is modified, <code>StreamViewType</code>
   *               determines what information is written to the stream for this table. Valid values for
   *             <code>StreamViewType</code> are:</p>
   *             <ul>
   *             <li>
   *                   <p>
   *                      <code>KEYS_ONLY</code> - Only the key attributes of the modified item are written to the stream.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                      <code>NEW_IMAGE</code> - The entire item, as it appears after it was modified, is written
   *               to the stream.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                      <code>OLD_IMAGE</code> - The entire item, as it appeared before it was modified, is
   *               written to the stream.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                      <code>NEW_AND_OLD_IMAGES</code> - Both the new and the old item images of the item are
   *               written to the stream.</p>
   *                </li>
   *          </ul>
   */
  StreamViewType?: StreamViewType | string;
}

export namespace StreamSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamSpecification): any => ({
    ...obj,
  });
}

export type TimeToLiveStatus = "DISABLED" | "DISABLING" | "ENABLED" | "ENABLING";

/**
 * <p>The description of the Time to Live (TTL) status on the specified table. </p>
 */
export interface TimeToLiveDescription {
  /**
   * <p> The TTL status for the table.</p>
   */
  TimeToLiveStatus?: TimeToLiveStatus | string;

  /**
   * <p> The name of the TTL attribute for items in the table.</p>
   */
  AttributeName?: string;
}

export namespace TimeToLiveDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeToLiveDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. </p>
 */
export interface SourceTableFeatureDetails {
  /**
   * <p>Represents the LSI properties for the table when the backup was created. It includes the IndexName, KeySchema and Projection for the LSIs on the table at the time of backup. </p>
   */
  LocalSecondaryIndexes?: LocalSecondaryIndexInfo[];

  /**
   * <p>Represents the GSI properties for the table when the backup was created. It includes the
   *          IndexName, KeySchema, Projection, and ProvisionedThroughput for the GSIs on the table at
   *          the time of backup. </p>
   */
  GlobalSecondaryIndexes?: GlobalSecondaryIndexInfo[];

  /**
   * <p>Stream settings on the table when the backup was created.</p>
   */
  StreamDescription?: StreamSpecification;

  /**
   * <p>Time to Live settings on the table when the backup was created.</p>
   */
  TimeToLiveDescription?: TimeToLiveDescription;

  /**
   * <p>The description of the server-side encryption status on the table when the backup was created.</p>
   */
  SSEDescription?: SSEDescription;
}

export namespace SourceTableFeatureDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceTableFeatureDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the description of the backup created for the table.</p>
 */
export interface BackupDescription {
  /**
   * <p>Contains the details of the backup created for the table. </p>
   */
  BackupDetails?: BackupDetails;

  /**
   * <p>Contains the details of the table when the backup was created. </p>
   */
  SourceTableDetails?: SourceTableDetails;

  /**
   * <p>Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.</p>
   */
  SourceTableFeatureDetails?: SourceTableFeatureDetails;
}

export namespace BackupDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupDescription): any => ({
    ...obj,
  });
}

/**
 * <p>There is another ongoing conflicting backup control plane operation on the table. The backup is either being created, deleted or restored to a table.</p>
 */
export interface BackupInUseException extends __SmithyException, $MetadataBearer {
  name: "BackupInUseException";
  $fault: "client";
  message?: string;
}

export namespace BackupInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>Backup not found for the given BackupARN. </p>
 */
export interface BackupNotFoundException extends __SmithyException, $MetadataBearer {
  name: "BackupNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace BackupNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details for the backup.</p>
 */
export interface BackupSummary {
  /**
   * <p>Name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>Unique identifier for the table.</p>
   */
  TableId?: string;

  /**
   * <p>ARN associated with the table.</p>
   */
  TableArn?: string;

  /**
   * <p>ARN associated with the backup.</p>
   */
  BackupArn?: string;

  /**
   * <p>Name of the specified backup.</p>
   */
  BackupName?: string;

  /**
   * <p>Time at which the backup was created.</p>
   */
  BackupCreationDateTime?: Date;

  /**
   * <p>Time at which the automatic on-demand backup created by DynamoDB will expire. This
   *             <code>SYSTEM</code> on-demand backup expires automatically 35 days after its
   *          creation.</p>
   */
  BackupExpiryDateTime?: Date;

  /**
   * <p>Backup can be in one of the following states: CREATING, ACTIVE, DELETED.</p>
   */
  BackupStatus?: BackupStatus | string;

  /**
   * <p>BackupType:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>USER</code> - You create and manage these using the on-demand backup feature.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SYSTEM</code> - If you delete a table with point-in-time recovery enabled, a <code>SYSTEM</code> backup is automatically
   *                 created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted
   * 		table to the state it was in just before the point of deletion.
   * 		</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AWS_BACKUP</code> - On-demand backup created by you from AWS Backup service.</p>
   *             </li>
   *          </ul>
   */
  BackupType?: BackupType | string;

  /**
   * <p>Size of the backup in bytes.</p>
   */
  BackupSizeBytes?: number;
}

export namespace BackupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupSummary): any => ({
    ...obj,
  });
}

export enum BackupTypeFilter {
  ALL = "ALL",
  AWS_BACKUP = "AWS_BACKUP",
  SYSTEM = "SYSTEM",
  USER = "USER",
}

export enum BatchStatementErrorCodeEnum {
  AccessDenied = "AccessDenied",
  ConditionalCheckFailed = "ConditionalCheckFailed",
  DuplicateItem = "DuplicateItem",
  InternalServerError = "InternalServerError",
  ItemCollectionSizeLimitExceeded = "ItemCollectionSizeLimitExceeded",
  ProvisionedThroughputExceeded = "ProvisionedThroughputExceeded",
  RequestLimitExceeded = "RequestLimitExceeded",
  ResourceNotFound = "ResourceNotFound",
  ThrottlingError = "ThrottlingError",
  TransactionConflict = "TransactionConflict",
  ValidationError = "ValidationError",
}

/**
 * <p>
 * An error associated with a statement in a PartiQL batch that was run.
 * </p>
 */
export interface BatchStatementError {
  /**
   * <p>
   * The error code associated with the failed PartiQL batch statement.
   * </p>
   */
  Code?: BatchStatementErrorCodeEnum | string;

  /**
   * <p>
   * The error message associated with the PartiQL batch resposne.
   * </p>
   */
  Message?: string;
}

export namespace BatchStatementError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStatementError): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred on the server side.</p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  /**
   * <p>The server encountered an internal error trying to fulfill the request.</p>
   */
  message?: string;
}

export namespace InternalServerError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>Throughput exceeds the current throughput quota for your account. Please contact AWS Support at <a href="https://aws.amazon.com/support">AWS Support</a> to request a quota increase.</p>
 */
export interface RequestLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "RequestLimitExceeded";
  $fault: "client";
  message?: string;
}

export namespace RequestLimitExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestLimitExceeded): any => ({
    ...obj,
  });
}

export type ReturnConsumedCapacity = "INDEXES" | "NONE" | "TOTAL";

/**
 * <p>Represents the amount of provisioned throughput capacity consumed on a table or an index.</p>
 */
export interface Capacity {
  /**
   * <p>The total number of read capacity units consumed on a table or an index.</p>
   */
  ReadCapacityUnits?: number;

  /**
   * <p>The total number of write capacity units consumed on a table or an index.</p>
   */
  WriteCapacityUnits?: number;

  /**
   * <p>The total number of capacity units consumed on a table or an index.</p>
   */
  CapacityUnits?: number;
}

export namespace Capacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Capacity): any => ({
    ...obj,
  });
}

/**
 * <p>The capacity units consumed by an operation. The data returned includes the total
 *       provisioned throughput consumed, along with statistics for the table and any indexes involved
 *       in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it.
 *       For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned
 *         Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface ConsumedCapacity {
  /**
   * <p>The name of the table that was affected by the operation.</p>
   */
  TableName?: string;

  /**
   * <p>The total number of capacity units consumed by the operation.</p>
   */
  CapacityUnits?: number;

  /**
   * <p>The total number of read capacity units consumed by the operation.</p>
   */
  ReadCapacityUnits?: number;

  /**
   * <p>The total number of write capacity units consumed by the operation.</p>
   */
  WriteCapacityUnits?: number;

  /**
   * <p>The amount of throughput consumed on the table affected by the operation.</p>
   */
  Table?: Capacity;

  /**
   * <p>The amount of throughput consumed on each local index affected by the operation.</p>
   */
  LocalSecondaryIndexes?: { [key: string]: Capacity };

  /**
   * <p>The amount of throughput consumed on each global index affected by the operation.</p>
   */
  GlobalSecondaryIndexes?: { [key: string]: Capacity };
}

export namespace ConsumedCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConsumedCapacity): any => ({
    ...obj,
  });
}

export interface InvalidEndpointException extends __SmithyException, $MetadataBearer {
  name: "InvalidEndpointException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidEndpointException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidEndpointException): any => ({
    ...obj,
  });
}

/**
 * <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that
 *       receive this exception. Your request is eventually successful, unless your retry queue is too
 *       large to finish. Reduce the frequency of requests and use exponential backoff. For more
 *       information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential
 *         Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface ProvisionedThroughputExceededException extends __SmithyException, $MetadataBearer {
  name: "ProvisionedThroughputExceededException";
  $fault: "client";
  /**
   * <p>You exceeded your maximum allowed provisioned throughput.</p>
   */
  message?: string;
}

export namespace ProvisionedThroughputExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedThroughputExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation tried to access a nonexistent table or index. The resource might not be specified
 *       correctly, or its status might not be <code>ACTIVE</code>.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The resource which is being requested does not exist.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export type ReturnItemCollectionMetrics = "NONE" | "SIZE";

/**
 * <p>An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.</p>
 */
export interface ItemCollectionSizeLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ItemCollectionSizeLimitExceededException";
  $fault: "client";
  /**
   * <p>The total size of an item collection has exceeded the maximum limit of 10 gigabytes.</p>
   */
  message?: string;
}

export namespace ItemCollectionSizeLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ItemCollectionSizeLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details for the read/write capacity mode.</p>
 */
export interface BillingModeSummary {
  /**
   * <p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONED</code> - Sets the read/write capacity mode to <code>PROVISIONED</code>. We recommend using <code>PROVISIONED</code> for predictable workloads.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAY_PER_REQUEST</code> - Sets the read/write capacity mode to <code>PAY_PER_REQUEST</code>. We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads.
   *             </p>
   *             </li>
   *          </ul>
   */
  BillingMode?: BillingMode | string;

  /**
   * <p>Represents the time when <code>PAY_PER_REQUEST</code> was last set as the read/write capacity mode.</p>
   */
  LastUpdateToPayPerRequestDateTime?: Date;
}

export namespace BillingModeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BillingModeSummary): any => ({
    ...obj,
  });
}

export type ComparisonOperator =
  | "BEGINS_WITH"
  | "BETWEEN"
  | "CONTAINS"
  | "EQ"
  | "GE"
  | "GT"
  | "IN"
  | "LE"
  | "LT"
  | "NE"
  | "NOT_CONTAINS"
  | "NOT_NULL"
  | "NULL";

/**
 * <p>A condition specified in the operation could not be evaluated.</p>
 */
export interface ConditionalCheckFailedException extends __SmithyException, $MetadataBearer {
  name: "ConditionalCheckFailedException";
  $fault: "client";
  /**
   * <p>The conditional request failed.</p>
   */
  message?: string;
}

export namespace ConditionalCheckFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConditionalCheckFailedException): any => ({
    ...obj,
  });
}

export type ConditionalOperator = "AND" | "OR";

export type ReturnValuesOnConditionCheckFailure = "ALL_OLD" | "NONE";

export type ContinuousBackupsStatus = "DISABLED" | "ENABLED";

export type PointInTimeRecoveryStatus = "DISABLED" | "ENABLED";

/**
 * <p>The description of the point in time settings applied to the table.</p>
 */
export interface PointInTimeRecoveryDescription {
  /**
   * <p>The current state of point in time recovery:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLING</code> - Point in time recovery is being enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Point in time recovery is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - Point in time recovery is disabled.</p>
   *             </li>
   *          </ul>
   */
  PointInTimeRecoveryStatus?: PointInTimeRecoveryStatus | string;

  /**
   * <p>Specifies the earliest point in time you can restore your table to. You can restore your
   *          table to any point in time during the last 35 days. </p>
   */
  EarliestRestorableDateTime?: Date;

  /**
   * <p>
   *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time.
   *      </p>
   */
  LatestRestorableDateTime?: Date;
}

export namespace PointInTimeRecoveryDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PointInTimeRecoveryDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
 */
export interface ContinuousBackupsDescription {
  /**
   * <p>
   *             <code>ContinuousBackupsStatus</code> can be one of the following states: ENABLED,
   *          DISABLED</p>
   */
  ContinuousBackupsStatus: ContinuousBackupsStatus | string | undefined;

  /**
   * <p>The description of the point in time recovery settings applied to the table.</p>
   */
  PointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
}

export namespace ContinuousBackupsDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinuousBackupsDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Backups have not yet been enabled for this table.</p>
 */
export interface ContinuousBackupsUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ContinuousBackupsUnavailableException";
  $fault: "client";
  message?: string;
}

export namespace ContinuousBackupsUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinuousBackupsUnavailableException): any => ({
    ...obj,
  });
}

export type ContributorInsightsAction = "DISABLE" | "ENABLE";

export type ContributorInsightsStatus = "DISABLED" | "DISABLING" | "ENABLED" | "ENABLING" | "FAILED";

/**
 * <p>Represents a Contributor Insights summary entry.</p>
 */
export interface ContributorInsightsSummary {
  /**
   * <p>Name of the table associated with the summary.</p>
   */
  TableName?: string;

  /**
   * <p>Name of the index associated with the summary, if any.</p>
   */
  IndexName?: string;

  /**
   * <p>Describes the current status for contributor insights for the given table and index, if applicable.</p>
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | string;
}

export namespace ContributorInsightsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContributorInsightsSummary): any => ({
    ...obj,
  });
}

export interface CreateBackupInput {
  /**
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Specified name for the backup.</p>
   */
  BackupName: string | undefined;
}

export namespace CreateBackupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupInput): any => ({
    ...obj,
  });
}

export interface CreateBackupOutput {
  /**
   * <p>Contains the details of the backup created for the table.</p>
   */
  BackupDetails?: BackupDetails;
}

export namespace CreateBackupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *         <p>Up to 50 simultaneous table operations are allowed per account. These operations
 *             include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *           <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *           <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to
 *         25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily
 *         reduce the number of concurrent operations.</p>
 *         <p>There is a soft account quota of 256 tables.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Too many operations for a given subscriber.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A target table with the specified name is either being created or deleted. </p>
 */
export interface TableInUseException extends __SmithyException, $MetadataBearer {
  name: "TableInUseException";
  $fault: "client";
  message?: string;
}

export namespace TableInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
 */
export interface TableNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TableNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace TableNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a new global secondary index to be added to an existing table.</p>
 */
export interface CreateGlobalSecondaryIndexAction {
  /**
   * <p>The name of the global secondary index to be created.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The key schema for the global secondary index.</p>
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * <p>Represents attributes that are copied (projected) from the table into an index. These
   *          are in addition to the primary key attributes and index key attributes, which are
   *          automatically projected.</p>
   */
  Projection: Projection | undefined;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p>
   *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;
}

export namespace CreateGlobalSecondaryIndexAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalSecondaryIndexAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a replica.</p>
 */
export interface Replica {
  /**
   * <p>The Region where the replica needs to be created.</p>
   */
  RegionName?: string;
}

export namespace Replica {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Replica): any => ({
    ...obj,
  });
}

export interface CreateGlobalTableInput {
  /**
   * <p>The global table name.</p>
   */
  GlobalTableName: string | undefined;

  /**
   * <p>The Regions where the global table needs to be created.</p>
   */
  ReplicationGroup: Replica[] | undefined;
}

export namespace CreateGlobalTableInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalTableInput): any => ({
    ...obj,
  });
}

export type GlobalTableStatus = "ACTIVE" | "CREATING" | "DELETING" | "UPDATING";

/**
 * <p>Replica-specific provisioned throughput settings. If not specified, uses the
 *          source table's provisioned throughput settings.</p>
 */
export interface ProvisionedThroughputOverride {
  /**
   * <p>Replica-specific read capacity units. If not specified, uses the source table's
   *          read capacity settings.</p>
   */
  ReadCapacityUnits?: number;
}

export namespace ProvisionedThroughputOverride {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedThroughputOverride): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a replica global secondary index.</p>
 */
export interface ReplicaGlobalSecondaryIndexDescription {
  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>If not described, uses the source table GSI's read capacity settings.</p>
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
}

export namespace ReplicaGlobalSecondaryIndexDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaGlobalSecondaryIndexDescription): any => ({
    ...obj,
  });
}

export type ReplicaStatus =
  | "ACTIVE"
  | "CREATING"
  | "CREATION_FAILED"
  | "DELETING"
  | "INACCESSIBLE_ENCRYPTION_CREDENTIALS"
  | "REGION_DISABLED"
  | "UPDATING";

/**
 * <p>Contains the details of the replica.</p>
 */
export interface ReplicaDescription {
  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The current state of the replica:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The replica is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The replica is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The replica is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The replica is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION_DISABLED</code> - The replica is inaccessible because the AWS Region has been disabled.</p>
   *                <note>
   *                   <p>If the AWS Region remains inaccessible for more than 20 hours, DynamoDB will remove this replica from the replication group. The replica will not be deleted and replication will stop from and to this region.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS </code> - The AWS KMS key used to encrypt the table is inaccessible.</p>
   *                <note>
   *                   <p>If the AWS KMS key remains inaccessible for more than 20 hours, DynamoDB will remove this replica from the replication group. The replica will not be deleted and replication will stop from and to this region.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  ReplicaStatus?: ReplicaStatus | string;

  /**
   * <p>Detailed information about the replica status.</p>
   */
  ReplicaStatusDescription?: string;

  /**
   * <p>Specifies the progress of a Create, Update, or Delete action on the replica
   *          as a percentage.</p>
   */
  ReplicaStatusPercentProgress?: string;

  /**
   * <p>The AWS KMS customer master key (CMK) of the replica that will be used for AWS KMS
   *          encryption.</p>
   */
  KMSMasterKeyId?: string;

  /**
   * <p>Replica-specific provisioned throughput. If not described, uses the source table's
   *          provisioned throughput settings.</p>
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;

  /**
   * <p>Replica-specific global secondary index settings.</p>
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[];

  /**
   * <p>The time at which the replica was first detected as inaccessible. To determine cause of inaccessibility check the <code>ReplicaStatus</code> property.</p>
   */
  ReplicaInaccessibleDateTime?: Date;
}

export namespace ReplicaDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about the global table.</p>
 */
export interface GlobalTableDescription {
  /**
   * <p>The Regions where the global table has replicas.</p>
   */
  ReplicationGroup?: ReplicaDescription[];

  /**
   * <p>The unique identifier of the global table.</p>
   */
  GlobalTableArn?: string;

  /**
   * <p>The creation time of the global table.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The current state of the global table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The global table is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The global table is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The global table is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The global table is ready for use.</p>
   *             </li>
   *          </ul>
   */
  GlobalTableStatus?: GlobalTableStatus | string;

  /**
   * <p>The global table name.</p>
   */
  GlobalTableName?: string;
}

export namespace GlobalTableDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalTableDescription): any => ({
    ...obj,
  });
}

export interface CreateGlobalTableOutput {
  /**
   * <p>Contains the details of the global table.</p>
   */
  GlobalTableDescription?: GlobalTableDescription;
}

export namespace CreateGlobalTableOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalTableOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified global table already exists.</p>
 */
export interface GlobalTableAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "GlobalTableAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace GlobalTableAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalTableAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a replica to be added.</p>
 */
export interface CreateReplicaAction {
  /**
   * <p>The Region of the replica to be added.</p>
   */
  RegionName: string | undefined;
}

export namespace CreateReplicaAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplicaAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a replica global secondary index.</p>
 */
export interface ReplicaGlobalSecondaryIndex {
  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>Replica table GSI-specific provisioned throughput. If not specified, uses the
   *          source table GSI's read capacity settings.</p>
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
}

export namespace ReplicaGlobalSecondaryIndex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaGlobalSecondaryIndex): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a replica to be created.</p>
 */
export interface CreateReplicationGroupMemberAction {
  /**
   * <p>The Region where the new replica will be created.</p>
   */
  RegionName: string | undefined;

  /**
   * <p>The AWS KMS customer master key (CMK) that should be used for AWS KMS encryption
   *          in the new replica. To specify a CMK, use its key ID, Amazon Resource Name (ARN),
   *          alias name, or alias ARN. Note that you should only provide this parameter if the
   *          key is different from the default DynamoDB KMS master key alias/aws/dynamodb.</p>
   */
  KMSMasterKeyId?: string;

  /**
   * <p>Replica-specific provisioned throughput. If not specified, uses the source table's
   *          provisioned throughput settings.</p>
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;

  /**
   * <p>Replica-specific global secondary index settings.</p>
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];
}

export namespace CreateReplicationGroupMemberAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplicationGroupMemberAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a global secondary index.</p>
 */
export interface GlobalSecondaryIndex {
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code> - sort key</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
   *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
   *         evenly distribute data items across partitions, based on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *          </note>
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global
   *          secondary index. These are in addition to the primary key attributes and index key
   *          attributes, which are automatically projected. </p>
   */
  Projection: Projection | undefined;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p>
   *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;
}

export namespace GlobalSecondaryIndex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalSecondaryIndex): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a local secondary index.</p>
 */
export interface LocalSecondaryIndex {
  /**
   * <p>The name of the local secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code> - sort key</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
   *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
   *         evenly distribute data items across partitions, based on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *          </note>
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the local
   *          secondary index. These are in addition to the primary key attributes and index key
   *          attributes, which are automatically projected. </p>
   */
  Projection: Projection | undefined;
}

export namespace LocalSecondaryIndex {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalSecondaryIndex): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings used to enable server-side encryption.</p>
 */
export interface SSESpecification {
  /**
   * <p>Indicates whether server-side encryption is done using an AWS managed CMK or an AWS owned CMK. If enabled (true),
   *       server-side encryption type is set to <code>KMS</code> and an AWS managed CMK is used (AWS KMS charges apply). If disabled (false) or not specified, server-side
   * encryption is set to AWS owned CMK.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Server-side encryption type. The only supported value is:</p>
   *          <ul>
   *             <li>
   *               <p>
   *                   <code>KMS</code> - Server-side encryption that uses AWS Key Management Service. The
   *                key is stored in your account and is managed by AWS KMS (AWS KMS charges
   *                apply).</p>
   *             </li>
   *          </ul>
   */
  SSEType?: SSEType | string;

  /**
   * <p>The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To
   *          specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note
   *          that you should only provide this parameter if the key is different from the default
   *          DynamoDB customer master key alias/aws/dynamodb.</p>
   */
  KMSMasterKeyId?: string;
}

export namespace SSESpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SSESpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table.
 *       </p>
 *          <p> AWS-assigned tag names and values are automatically assigned the <code>aws:</code>
 *             prefix, which the user cannot assign. AWS-assigned tag names do not count towards the
 *             tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost
 *             Allocation Report. You cannot backdate the application of a tag. </p>
 *          <p>For an overview on tagging DynamoDB resources, see
 *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>
 *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to
   *             one tag with the same key. If you try to add an existing tag (same key), the existing
   *             tag value will be updated to the new value. </p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag. Tag values are case-sensitive and can be null.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>CreateTable</code> operation.</p>
 */
export interface CreateTableInput {
  /**
   * <p>An array of attributes that describe the key schema for the table and indexes.</p>
   */
  AttributeDefinitions: AttributeDefinition[] | undefined;

  /**
   * <p>The name of the table to create.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Specifies the attributes that make up the primary key for a table or an index. The attributes
   *       in <code>KeySchema</code> must also be defined in the <code>AttributeDefinitions</code> array. For more
   *       information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html">Data Model</a> in the
   *         <i>Amazon DynamoDB Developer Guide</i>.</p>
   *          <p>Each <code>KeySchemaElement</code> in the array is composed of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AttributeName</code> - The name of this key attribute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KeyType</code> - The role that the key attribute will assume:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>HASH</code> - partition key</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RANGE</code> - sort key</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash
   *                 attribute</i>. The term "hash attribute" derives from the DynamoDB usage of
   *                 an internal hash function to evenly distribute data items across partitions, based
   *                 on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *          </note>
   *
   *          <p>For a simple primary key (partition key), you must provide
   *       exactly one element with a <code>KeyType</code> of <code>HASH</code>.</p>
   *          <p>For a composite primary key (partition key and sort key), you must provide exactly two
   *       elements, in this order: The first element must have a <code>KeyType</code> of <code>HASH</code>,
   *       and the second element must have a <code>KeyType</code> of <code>RANGE</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#WorkingWithTables.primary.key">Working with Tables</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  KeySchema: KeySchemaElement[] | undefined;

  /**
   * <p>One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained.</p>
   *          <p>Each local secondary index in the array includes the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IndexName</code> - The name of the local secondary index. Must be unique only for this table.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KeySchema</code> - Specifies the key schema for the local secondary index. The key schema must begin with
   *           the same partition key as the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Projection</code> - Specifies
   *           attributes that are copied (projected) from the table into the index. These are in
   *           addition to the primary key attributes and index key
   *           attributes, which are automatically projected. Each
   *           attribute specification is composed of:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ProjectionType</code> - One
   *               of the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the
   *                   index.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                                     <code>INCLUDE</code> - Only the specified table attributes are
   *                                     projected into the index. The list of projected attributes is in
   *                                         <code>NonKeyAttributes</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ALL</code> - All of the table attributes are projected into the
   *                   index.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                         <p>
   *                             <code>NonKeyAttributes</code> - A list of one or more non-key
   *                             attribute names that are projected into the secondary index. The total
   *                             count of attributes provided in <code>NonKeyAttributes</code>,
   *                             summed across all of the secondary indexes, must not exceed 100. If you
   *                             project the same attribute into two different indexes, this counts as
   *                             two distinct attributes when determining the total.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  LocalSecondaryIndexes?: LocalSecondaryIndex[];

  /**
   * <p>One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IndexName</code> - The name of the global secondary index. Must be unique only for this table.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KeySchema</code> - Specifies the key schema for the global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Projection</code> - Specifies
   *           attributes that are copied (projected) from the table into the index. These are in
   *           addition to the primary key attributes and index key
   *           attributes, which are automatically projected. Each
   *           attribute specification is composed of:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ProjectionType</code> - One
   *               of the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the
   *                   index.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                                     <code>INCLUDE</code> - Only the specified table attributes are
   *                                     projected into the index. The list of projected attributes is in
   *                                         <code>NonKeyAttributes</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ALL</code> - All of the table attributes are projected into the
   *                   index.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are
   *               projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProvisionedThroughput</code> - The provisioned throughput settings for the global secondary index,
   *           consisting of read and write capacity units.</p>
   *             </li>
   *          </ul>
   */
  GlobalSecondaryIndexes?: GlobalSecondaryIndex[];

  /**
   * <p>Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONED</code> - We recommend using <code>PROVISIONED</code> for predictable workloads. <code>PROVISIONED</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual">Provisioned Mode</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAY_PER_REQUEST</code> - We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. <code>PAY_PER_REQUEST</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand">On-Demand Mode</a>.
   *             </p>
   *             </li>
   *          </ul>
   */
  BillingMode?: BillingMode | string;

  /**
   * <p>Represents the provisioned throughput settings for a specified table or index. The
   *             settings can be modified using the <code>UpdateTable</code> operation.</p>
   * 		       <p> If you set BillingMode as <code>PROVISIONED</code>, you must specify this property. If you
   *             set BillingMode as <code>PAY_PER_REQUEST</code>, you cannot specify this
   *             property.</p>
   *         <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service,
   *                 Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * <p>The settings for DynamoDB Streams on the table. These settings consist of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>StreamEnabled</code> - Indicates whether DynamoDB Streams is to be enabled
   *                     (true) or disabled (false).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StreamViewType</code> - When an item in the table is modified, <code>StreamViewType</code>
   *           determines what information is written to the table's stream. Valid values for
   *             <code>StreamViewType</code> are:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>KEYS_ONLY</code> - Only the key attributes of the modified item are written to the
   *               stream.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NEW_IMAGE</code> - The entire item, as it appears after it was modified, is written
   *             to the stream.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>OLD_IMAGE</code> - The entire item, as it appeared before it was modified, is
   *             written to the stream.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NEW_AND_OLD_IMAGES</code> - Both the new and the old item images of the item are
   *             written to the stream.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  StreamSpecification?: StreamSpecification;

  /**
   * <p>Represents the settings used to enable server-side encryption.</p>
   */
  SSESpecification?: SSESpecification;

  /**
   * <p>A list of key-value pairs to label the table. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateTableInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTableInput): any => ({
    ...obj,
  });
}

export type IndexStatus = "ACTIVE" | "CREATING" | "DELETING" | "UPDATING";

/**
 * <p>Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.</p>
 */
export interface ProvisionedThroughputDescription {
  /**
   * <p>The date and time of the last provisioned throughput increase for this table.</p>
   */
  LastIncreaseDateTime?: Date;

  /**
   * <p>The date and time of the last provisioned throughput decrease for this table.</p>
   */
  LastDecreaseDateTime?: Date;

  /**
   * <p>The number of provisioned throughput decreases for this table during this UTC calendar day.
   *          For current maximums on provisioned throughput decreases, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  NumberOfDecreasesToday?: number;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a
   *         <code>ThrottlingException</code>. Eventually consistent reads require less effort than strongly
   *       consistent reads, so a setting of 50 <code>ReadCapacityUnits</code> per second provides 100
   *       eventually consistent <code>ReadCapacityUnits</code> per second.</p>
   */
  ReadCapacityUnits?: number;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a
   *         <code>ThrottlingException</code>.</p>
   */
  WriteCapacityUnits?: number;
}

export namespace ProvisionedThroughputDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedThroughputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a global secondary index.</p>
 */
export interface GlobalSecondaryIndexDescription {
  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code> - sort key</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
   *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
   *         evenly distribute data items across partitions, based on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *          </note>
   */
  KeySchema?: KeySchemaElement[];

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global
   *          secondary index. These are in addition to the primary key attributes and index key
   *          attributes, which are automatically projected. </p>
   */
  Projection?: Projection;

  /**
   * <p>The current state of the global secondary index:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The index is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The index is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The index is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The index is ready for use.</p>
   *             </li>
   *          </ul>
   */
  IndexStatus?: IndexStatus | string;

  /**
   * <p>Indicates whether the index is currently backfilling. <i>Backfilling</i> is the process of reading items from
   *       the table and determining whether they can be added to the index. (Not all items will qualify:  For example, a partition key
   *       cannot have any duplicate values.) If an item can be added to the index, DynamoDB will do so. After all items have been processed,
   *       the backfilling operation is complete and <code>Backfilling</code> is false.</p>
   *          <p>You can delete an index that is being created during the <code>Backfilling</code> phase
   *          when <code>IndexStatus</code> is set to CREATING and <code>Backfilling</code> is true. You
   *          can't delete the index that is being created when <code>IndexStatus</code> is set to
   *          CREATING and <code>Backfilling</code> is false. </p>
   *          <note>
   *             <p>For indexes that were created during a <code>CreateTable</code> operation, the <code>Backfilling</code> attribute does not appear in the <code>DescribeTable</code> output.</p>
   *          </note>
   */
  Backfilling?: boolean;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p>
   *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughputDescription;

  /**
   * <p>The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  IndexSizeBytes?: number;

  /**
   * <p>The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  ItemCount?: number;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the index.</p>
   */
  IndexArn?: string;
}

export namespace GlobalSecondaryIndexDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalSecondaryIndexDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a local secondary index.</p>
 */
export interface LocalSecondaryIndexDescription {
  /**
   * <p>Represents the name of the local secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HASH</code> - partition key</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RANGE</code> - sort key</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
   *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
   *         evenly distribute data items across partitions, based on their partition key values.</p>
   *             <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *          </note>
   */
  KeySchema?: KeySchemaElement[];

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global
   *          secondary index. These are in addition to the primary key attributes and index key
   *          attributes, which are automatically projected. </p>
   */
  Projection?: Projection;

  /**
   * <p>The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  IndexSizeBytes?: number;

  /**
   * <p>The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  ItemCount?: number;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the index.</p>
   */
  IndexArn?: string;
}

export namespace LocalSecondaryIndexDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalSecondaryIndexDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details for the restore.</p>
 */
export interface RestoreSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the backup from which the table was restored.</p>
   */
  SourceBackupArn?: string;

  /**
   * <p>The ARN of the source table of the backup that is being restored.</p>
   */
  SourceTableArn?: string;

  /**
   * <p>Point in time or source backup time.</p>
   */
  RestoreDateTime: Date | undefined;

  /**
   * <p>Indicates if a restore is in progress or not.</p>
   */
  RestoreInProgress: boolean | undefined;
}

export namespace RestoreSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreSummary): any => ({
    ...obj,
  });
}

export type TableStatus =
  | "ACTIVE"
  | "ARCHIVED"
  | "ARCHIVING"
  | "CREATING"
  | "DELETING"
  | "INACCESSIBLE_ENCRYPTION_CREDENTIALS"
  | "UPDATING";

/**
 * <p>Represents the properties of a table.</p>
 */
export interface TableDescription {
  /**
   * <p>An array of <code>AttributeDefinition</code> objects. Each of these objects describes one attribute
   *       in the table and index key schema.</p>
   *          <p>Each <code>AttributeDefinition</code> object in this array is composed of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AttributeName</code> - The name of the attribute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AttributeType</code> - The data type for the attribute.</p>
   *             </li>
   *          </ul>
   */
  AttributeDefinitions?: AttributeDefinition[];

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The primary key structure for the table. Each <code>KeySchemaElement</code> consists of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AttributeName</code> - The name of the attribute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KeyType</code> - The role of the attribute:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>HASH</code> -  partition key</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RANGE</code> - sort key</p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>The partition key of an item is also known as its <i>hash attribute</i>.  The
   *         term "hash attribute" derives from DynamoDB's usage of an internal hash function to
   *         evenly distribute data items across partitions, based on their partition key values.</p>
   *                   <p>The sort key of an item is also known as its <i>range attribute</i>.
   *         The term "range attribute" derives from the way DynamoDB stores items with the same
   *         partition key physically close together, in sorted order by the sort key value.</p>
   *                </note>
   *
   *             </li>
   *          </ul>
   *          <p>For more information about primary keys, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html#DataModelPrimaryKey">Primary Key</a> in the
   *       <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  KeySchema?: KeySchemaElement[];

  /**
   * <p>The current state of the table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The table is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The table is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The table is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The table is ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACCESSIBLE_ENCRYPTION_CREDENTIALS</code> - The AWS KMS
   *                key used to encrypt the table in inaccessible. Table operations
   *                may fail due to failure to use the AWS KMS key. DynamoDB will
   *                initiate the table archival process when a table's AWS KMS key
   *                remains inaccessible for more than seven days.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVING</code> - The table is being archived. Operations
   *                are not allowed until archival is complete.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code> - The table has been archived. See the
   *                ArchivalReason for more information.
   *             </p>
   *             </li>
   *          </ul>
   */
  TableStatus?: TableStatus | string;

  /**
   * <p>The date and time when the table was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughputDescription;

  /**
   * <p>The total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  TableSizeBytes?: number;

  /**
   * <p>The number of items in the specified table. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  ItemCount?: number;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the table.</p>
   */
  TableArn?: string;

  /**
   * <p>Unique identifier for the table for which the backup was created. </p>
   */
  TableId?: string;

  /**
   * <p>Contains the details for the read/write capacity mode.</p>
   */
  BillingModeSummary?: BillingModeSummary;

  /**
   * <p>Represents one or more local secondary indexes on the table. Each index is scoped to a given partition key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB. Each element is composed of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IndexName</code> - The name of the local secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KeySchema</code> - Specifies the complete index key schema. The attribute names in the
   *           key schema must be between 1 and 255 characters (inclusive). The key schema must begin
   *           with the same partition key as the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Projection</code> - Specifies
   *           attributes that are copied (projected) from the table into the index. These are in
   *           addition to the primary key attributes and index key
   *           attributes, which are automatically projected. Each
   *           attribute specification is composed of:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ProjectionType</code> - One
   *               of the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the
   *                   index.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>INCLUDE</code> - Only the specified table attributes are projected
   *                            into the index. The list of projected attributes is in
   *                               <code>NonKeyAttributes</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ALL</code> - All of the table attributes are projected into the
   *                   index.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are
   *               projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IndexSizeBytes</code> - Represents the total size of the index, in bytes. DynamoDB updates
   *           this value approximately every six hours. Recent changes might not be reflected in this
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ItemCount</code> - Represents the number of items in the index. DynamoDB updates this value
   *           approximately every six hours. Recent changes might not be reflected in this value.</p>
   *             </li>
   *          </ul>
   *          <p>If the table is in the <code>DELETING</code> state, no information about indexes will be
   *       returned.</p>
   */
  LocalSecondaryIndexes?: LocalSecondaryIndexDescription[];

  /**
   * <p>The global secondary indexes, if any, on the table. Each index is scoped to a given partition key value. Each element is composed of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Backfilling</code> - If true, then the index is currently in the backfilling
   *                phase. Backfilling occurs only when a new global secondary index is added to the
   *                table. It is the process by which DynamoDB populates the new index with data from the
   *                table. (This attribute does not appear for indexes that were created during a
   *                   <code>CreateTable</code> operation.) </p>
   *                <p> You can delete an index that is being created during the <code>Backfilling</code>
   *                phase when <code>IndexStatus</code> is set to CREATING and <code>Backfilling</code>
   *                is true. You can't delete the index that is being created when
   *                   <code>IndexStatus</code> is set to CREATING and <code>Backfilling</code> is false.
   *                (This attribute does not appear for indexes that were created during a
   *                   <code>CreateTable</code> operation.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IndexName</code> - The name of the global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IndexSizeBytes</code> - The total size of the global secondary index, in bytes. DynamoDB updates this value approximately every six
   *       hours. Recent changes might not be reflected in this value.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IndexStatus</code> - The current status of the global secondary index:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>CREATING</code> - The index is being created.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>UPDATING</code> - The index is being updated.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DELETING</code> - The index is being deleted.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ACTIVE</code> - The index is ready for use.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ItemCount</code> - The number of items in the global secondary index. DynamoDB updates this value approximately every six
   *       hours. Recent changes might not be reflected in this value.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KeySchema</code> - Specifies the complete index key schema. The attribute names in the
   *           key schema must be between 1 and 255 characters (inclusive). The key schema must begin
   *           with the same partition key as the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Projection</code> - Specifies
   *           attributes that are copied (projected) from the table into the index. These are in
   *           addition to the primary key attributes and index key
   *           attributes, which are automatically projected. Each
   *           attribute specification is composed of:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ProjectionType</code> - One
   *               of the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>KEYS_ONLY</code> - Only the index and primary keys are projected into the
   *                   index.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>INCLUDE</code> - In addition to the attributes described in <code>KEYS_ONLY</code>, the secondary index will include other non-key attributes that you specify.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ALL</code> - All of the table attributes are projected into the
   *                   index.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NonKeyAttributes</code> - A list of one or more non-key attribute names that are
   *               projected into the secondary index. The total count of attributes provided in <code>NonKeyAttributes</code>, summed across all of the secondary indexes, must not exceed 20. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProvisionedThroughput</code> - The provisioned throughput settings for the global secondary index,
   *           consisting of read and write capacity units, along with data about increases and
   *           decreases. </p>
   *             </li>
   *          </ul>
   *          <p>If the table is in the <code>DELETING</code> state, no information about indexes will be
   *       returned.</p>
   */
  GlobalSecondaryIndexes?: GlobalSecondaryIndexDescription[];

  /**
   * <p>The current DynamoDB Streams configuration for the table.</p>
   */
  StreamSpecification?: StreamSpecification;

  /**
   * <p>A timestamp, in ISO 8601 format, for this stream.</p>
   *
   *          <p>Note that <code>LatestStreamLabel</code> is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:</p>
   *          <ul>
   *             <li>
   *                <p>AWS customer ID</p>
   *             </li>
   *             <li>
   *                <p>Table name</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StreamLabel</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LatestStreamLabel?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the latest stream for this table.</p>
   */
  LatestStreamArn?: string;

  /**
   * <p>Represents the version of <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html">global tables</a> in use, if the table is replicated across AWS Regions.</p>
   */
  GlobalTableVersion?: string;

  /**
   * <p>Represents replicas of the table.</p>
   */
  Replicas?: ReplicaDescription[];

  /**
   * <p>Contains details for the restore.</p>
   */
  RestoreSummary?: RestoreSummary;

  /**
   * <p>The description of the server-side encryption status on the specified table.</p>
   */
  SSEDescription?: SSEDescription;

  /**
   * <p>Contains information about the table archive.</p>
   */
  ArchivalSummary?: ArchivalSummary;
}

export namespace TableDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>CreateTable</code> operation.</p>
 */
export interface CreateTableOutput {
  /**
   * <p>Represents the properties of the table.</p>
   */
  TableDescription?: TableDescription;
}

export namespace CreateTableOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTableOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The operation conflicts with the resource's availability. For example, you attempted to
 *       recreate an existing table, or tried to delete a table currently in the <code>CREATING</code>
 *       state.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>The resource which is being attempted to be changed is in use.</p>
   */
  message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteBackupInput {
  /**
   * <p>The ARN associated with the backup.</p>
   */
  BackupArn: string | undefined;
}

export namespace DeleteBackupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupInput): any => ({
    ...obj,
  });
}

export interface DeleteBackupOutput {
  /**
   * <p>Contains the description of the backup created for the table.</p>
   */
  BackupDescription?: BackupDescription;
}

export namespace DeleteBackupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a global secondary index to be deleted from an existing table.</p>
 */
export interface DeleteGlobalSecondaryIndexAction {
  /**
   * <p>The name of the global secondary index to be deleted.</p>
   */
  IndexName: string | undefined;
}

export namespace DeleteGlobalSecondaryIndexAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGlobalSecondaryIndexAction): any => ({
    ...obj,
  });
}

export type ReturnValue = "ALL_NEW" | "ALL_OLD" | "NONE" | "UPDATED_NEW" | "UPDATED_OLD";

/**
 * <p>Operation was rejected because there is an ongoing transaction for the item.</p>
 */
export interface TransactionConflictException extends __SmithyException, $MetadataBearer {
  name: "TransactionConflictException";
  $fault: "client";
  message?: string;
}

export namespace TransactionConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactionConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a replica to be removed.</p>
 */
export interface DeleteReplicaAction {
  /**
   * <p>The Region of the replica to be removed.</p>
   */
  RegionName: string | undefined;
}

export namespace DeleteReplicaAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReplicaAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a replica to be deleted.</p>
 */
export interface DeleteReplicationGroupMemberAction {
  /**
   * <p>The Region where the replica exists.</p>
   */
  RegionName: string | undefined;
}

export namespace DeleteReplicationGroupMemberAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReplicationGroupMemberAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>DeleteTable</code> operation.</p>
 */
export interface DeleteTableInput {
  /**
   * <p>The name of the table to delete.</p>
   */
  TableName: string | undefined;
}

export namespace DeleteTableInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>DeleteTable</code> operation.</p>
 */
export interface DeleteTableOutput {
  /**
   * <p>Represents the properties of a table.</p>
   */
  TableDescription?: TableDescription;
}

export namespace DeleteTableOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableOutput): any => ({
    ...obj,
  });
}

export interface DescribeBackupInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the backup.</p>
   */
  BackupArn: string | undefined;
}

export namespace DescribeBackupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBackupInput): any => ({
    ...obj,
  });
}

export interface DescribeBackupOutput {
  /**
   * <p>Contains the description of the backup created for the table.</p>
   */
  BackupDescription?: BackupDescription;
}

export namespace DescribeBackupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBackupOutput): any => ({
    ...obj,
  });
}

export interface DescribeContinuousBackupsInput {
  /**
   * <p>Name of the table for which the customer wants to check the continuous backups and point in time recovery settings.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeContinuousBackupsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContinuousBackupsInput): any => ({
    ...obj,
  });
}

export interface DescribeContinuousBackupsOutput {
  /**
   * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
   */
  ContinuousBackupsDescription?: ContinuousBackupsDescription;
}

export namespace DescribeContinuousBackupsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContinuousBackupsOutput): any => ({
    ...obj,
  });
}

export interface DescribeContributorInsightsInput {
  /**
   * <p>The name of the table to describe.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the global secondary index to describe, if applicable.</p>
   */
  IndexName?: string;
}

export namespace DescribeContributorInsightsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContributorInsightsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a failure a contributor insights operation.</p>
 */
export interface FailureException {
  /**
   * <p>Exception name.</p>
   */
  ExceptionName?: string;

  /**
   * <p>Description of the failure.</p>
   */
  ExceptionDescription?: string;
}

export namespace FailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailureException): any => ({
    ...obj,
  });
}

export interface DescribeContributorInsightsOutput {
  /**
   * <p>The name of the table being described.</p>
   */
  TableName?: string;

  /**
   * <p>The name of the global secondary index being described.</p>
   */
  IndexName?: string;

  /**
   * <p>List of names of the associated Alpine rules.</p>
   */
  ContributorInsightsRuleList?: string[];

  /**
   * <p>Current Status contributor insights.</p>
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | string;

  /**
   * <p>Timestamp of the last time the status was changed.</p>
   */
  LastUpdateDateTime?: Date;

  /**
   * <p>Returns information about the last failure that encountered.</p>
   *          <p>The most common exceptions for a FAILED status are:</p>
   *          <ul>
   *             <li>
   *                <p>LimitExceededException - 	Per-account Amazon CloudWatch Contributor Insights rule limit reached. Please disable Contributor Insights for
   *          other tables/indexes OR disable Contributor Insights rules before retrying.</p>
   *             </li>
   *             <li>
   *                <p>AccessDeniedException - Amazon CloudWatch Contributor Insights rules cannot be modified due to insufficient permissions.</p>
   *             </li>
   *             <li>
   *                <p>AccessDeniedException - Failed to create service-linked role for Contributor Insights due to insufficient permissions.</p>
   *             </li>
   *             <li>
   *                <p>InternalServerError - Failed to create Amazon CloudWatch Contributor Insights rules. Please retry request.</p>
   *             </li>
   *          </ul>
   */
  FailureException?: FailureException;
}

export namespace DescribeContributorInsightsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContributorInsightsOutput): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsRequest {}

export namespace DescribeEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An endpoint information details.</p>
 */
export interface Endpoint {
  /**
   * <p>IP address of the endpoint.</p>
   */
  Address: string | undefined;

  /**
   * <p>Endpoint cache time to live (TTL) value.</p>
   */
  CachePeriodInMinutes: number | undefined;
}

export namespace Endpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

export interface DescribeEndpointsResponse {
  /**
   * <p>List of endpoints.</p>
   */
  Endpoints: Endpoint[] | undefined;
}

export namespace DescribeEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
    ...obj,
  });
}

export interface DescribeExportInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the export.</p>
   */
  ExportArn: string | undefined;
}

export namespace DescribeExportInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportInput): any => ({
    ...obj,
  });
}

export enum ExportFormat {
  DYNAMODB_JSON = "DYNAMODB_JSON",
  ION = "ION",
}

export enum ExportStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

export type S3SseAlgorithm = "AES256" | "KMS";

/**
 * <p>Represents the properties of the exported table.</p>
 */
export interface ExportDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the table export.</p>
   */
  ExportArn?: string;

  /**
   * <p>Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED.</p>
   */
  ExportStatus?: ExportStatus | string;

  /**
   * <p>The time at which the export task began.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time at which the export task completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The name of the manifest file for the export task.</p>
   */
  ExportManifest?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the table that was exported.</p>
   */
  TableArn?: string;

  /**
   * <p>Unique ID of the table that was exported.</p>
   */
  TableId?: string;

  /**
   * <p>Point in time from which table data was exported.</p>
   */
  ExportTime?: Date;

  /**
   * <p>The client token that was provided for the export task. A client token makes calls to
   *                 <code>ExportTableToPointInTimeInput</code> idempotent, meaning that multiple
   *             identical calls have the same effect as one single call.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the Amazon S3 bucket containing the export.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The ID of the AWS account that owns the bucket containing the export.</p>
   */
  S3BucketOwner?: string;

  /**
   * <p>The Amazon S3 bucket prefix used as the file name and path of the exported
   *             snapshot.</p>
   */
  S3Prefix?: string;

  /**
   * <p>Type of encryption used on the bucket where export data is stored. Valid values
   *             for <code>S3SseAlgorithm</code> are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AES256</code> - server-side encryption with Amazon S3 managed keys</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KMS</code> - server-side encryption with AWS KMS managed keys</p>
   *             </li>
   *          </ul>
   */
  S3SseAlgorithm?: S3SseAlgorithm | string;

  /**
   * <p>The ID of the AWS KMS managed key used to encrypt the S3 bucket where export data is
   *             stored (if applicable).</p>
   */
  S3SseKmsKeyId?: string;

  /**
   * <p>Status code for the result of the failed export.</p>
   */
  FailureCode?: string;

  /**
   * <p>Export failure reason description.</p>
   */
  FailureMessage?: string;

  /**
   * <p>The format of the exported data. Valid values for <code>ExportFormat</code> are
   *             <code>DYNAMODB_JSON</code> or <code>ION</code>.</p>
   */
  ExportFormat?: ExportFormat | string;

  /**
   * <p>The billable size of the table export.</p>
   */
  BilledSizeBytes?: number;

  /**
   * <p>The number of items exported.</p>
   */
  ItemCount?: number;
}

export namespace ExportDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportDescription): any => ({
    ...obj,
  });
}

export interface DescribeExportOutput {
  /**
   * <p>Represents the properties of the export.</p>
   */
  ExportDescription?: ExportDescription;
}

export namespace DescribeExportOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified export was not found.</p>
 */
export interface ExportNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ExportNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ExportNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportNotFoundException): any => ({
    ...obj,
  });
}

export interface DescribeGlobalTableInput {
  /**
   * <p>The name of the global table.</p>
   */
  GlobalTableName: string | undefined;
}

export namespace DescribeGlobalTableInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalTableInput): any => ({
    ...obj,
  });
}

export interface DescribeGlobalTableOutput {
  /**
   * <p>Contains the details of the global table.</p>
   */
  GlobalTableDescription?: GlobalTableDescription;
}

export namespace DescribeGlobalTableOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalTableOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified global table does not exist.</p>
 */
export interface GlobalTableNotFoundException extends __SmithyException, $MetadataBearer {
  name: "GlobalTableNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace GlobalTableNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalTableNotFoundException): any => ({
    ...obj,
  });
}

export interface DescribeGlobalTableSettingsInput {
  /**
   * <p>The name of the global table to describe.</p>
   */
  GlobalTableName: string | undefined;
}

export namespace DescribeGlobalTableSettingsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalTableSettingsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a global secondary index.</p>
 */
export interface ReplicaGlobalSecondaryIndexSettingsDescription {
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>
   *                The current status of the global secondary index:</p>
   *             <ul>
   *             <li>
   *                   <p>
   *                      <code>CREATING</code> - The global secondary index is being created.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                      <code>UPDATING</code> - The global secondary index is being updated.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                      <code>DELETING</code> - The global secondary index is being deleted.</p>
   *                </li>
   *             <li>
   *                   <p>
   *                      <code>ACTIVE</code> - The global secondary index is ready for use.</p>
   *                </li>
   *          </ul>
   */
  IndexStatus?: IndexStatus | string;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedReadCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for a global secondary index replica's read capacity units.</p>
   */
  ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedWriteCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for a global secondary index replica's write capacity
   *          units.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
}

export namespace ReplicaGlobalSecondaryIndexSettingsDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaGlobalSecondaryIndexSettingsDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a replica.</p>
 */
export interface ReplicaSettingsDescription {
  /**
   * <p>The Region name of the replica.</p>
   */
  RegionName: string | undefined;

  /**
   * <p>The current state of the Region:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The Region is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The Region is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The Region is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The Region is ready for use.</p>
   *             </li>
   *          </ul>
   */
  ReplicaStatus?: ReplicaStatus | string;

  /**
   * <p>The read/write capacity mode of the replica.</p>
   */
  ReplicaBillingModeSummary?: BillingModeSummary;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.
   *         For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write
   *         Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.
   *      </p>
   */
  ReplicaProvisionedReadCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for a global table replica's read capacity units.</p>
   */
  ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>.
   *         For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write
   *         Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ReplicaProvisionedWriteCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for a global table replica's write capacity units.</p>
   */
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>Replica global secondary index settings for the global table.</p>
   */
  ReplicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[];
}

export namespace ReplicaSettingsDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaSettingsDescription): any => ({
    ...obj,
  });
}

export interface DescribeGlobalTableSettingsOutput {
  /**
   * <p>The name of the global table.</p>
   */
  GlobalTableName?: string;

  /**
   * <p>The Region-specific settings for the global table.</p>
   */
  ReplicaSettings?: ReplicaSettingsDescription[];
}

export namespace DescribeGlobalTableSettingsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalTableSettingsOutput): any => ({
    ...obj,
  });
}

export interface DescribeKinesisStreamingDestinationInput {
  /**
   * <p>The name of the table being described.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeKinesisStreamingDestinationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeKinesisStreamingDestinationInput): any => ({
    ...obj,
  });
}

export type DestinationStatus = "ACTIVE" | "DISABLED" | "DISABLING" | "ENABLE_FAILED" | "ENABLING";

/**
 * <p>Describes a Kinesis data stream destination.</p>
 */
export interface KinesisDataStreamDestination {
  /**
   * <p>The ARN for a specific Kinesis data stream.</p>
   */
  StreamArn?: string;

  /**
   * <p>The current status of replication.</p>
   */
  DestinationStatus?: DestinationStatus | string;

  /**
   * <p>The human-readable string that corresponds to the replica status.</p>
   */
  DestinationStatusDescription?: string;
}

export namespace KinesisDataStreamDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisDataStreamDestination): any => ({
    ...obj,
  });
}

export interface DescribeKinesisStreamingDestinationOutput {
  /**
   * <p>The name of the table being described.</p>
   */
  TableName?: string;

  /**
   * <p>The list of replica structures for the table being described.</p>
   */
  KinesisDataStreamDestinations?: KinesisDataStreamDestination[];
}

export namespace DescribeKinesisStreamingDestinationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeKinesisStreamingDestinationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>DescribeLimits</code> operation. Has no content.</p>
 */
export interface DescribeLimitsInput {}

export namespace DescribeLimitsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLimitsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>DescribeLimits</code> operation.</p>
 */
export interface DescribeLimitsOutput {
  /**
   * <p>The maximum total read capacity units that your account allows you to provision across
   *             all of your tables in this Region.</p>
   */
  AccountMaxReadCapacityUnits?: number;

  /**
   * <p>The maximum total write capacity units that your account allows you to provision across
   *             all of your tables in this Region.</p>
   */
  AccountMaxWriteCapacityUnits?: number;

  /**
   * <p>The maximum read capacity units that your account allows you to provision for a new
   *             table that you are creating in this Region, including the read capacity units
   *             provisioned for its global secondary indexes (GSIs).</p>
   */
  TableMaxReadCapacityUnits?: number;

  /**
   * <p>The maximum write capacity units that your account allows you to provision for a new
   *             table that you are creating in this Region, including the write capacity units
   *             provisioned for its global secondary indexes (GSIs).</p>
   */
  TableMaxWriteCapacityUnits?: number;
}

export namespace DescribeLimitsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLimitsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>DescribeTable</code> operation.</p>
 */
export interface DescribeTableInput {
  /**
   * <p>The name of the table to describe.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeTableInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTableInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>DescribeTable</code> operation.</p>
 */
export interface DescribeTableOutput {
  /**
   * <p>The properties of the table.</p>
   */
  Table?: TableDescription;
}

export namespace DescribeTableOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTableOutput): any => ({
    ...obj,
  });
}

export interface DescribeTableReplicaAutoScalingInput {
  /**
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeTableReplicaAutoScalingInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTableReplicaAutoScalingInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling configuration for a replica global secondary index.</p>
 */
export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The current state of the replica global secondary index:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The index is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The index is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The index is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The index is ready for use.</p>
   *             </li>
   *          </ul>
   */
  IndexStatus?: IndexStatus | string;

  /**
   * <p>Represents the auto scaling settings for a global table or global secondary
   *          index.</p>
   */
  ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>Represents the auto scaling settings for a global table or global secondary
   *          index.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
}

export namespace ReplicaGlobalSecondaryIndexAutoScalingDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaGlobalSecondaryIndexAutoScalingDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling settings of the replica.</p>
 */
export interface ReplicaAutoScalingDescription {
  /**
   * <p>The Region where the replica exists.</p>
   */
  RegionName?: string;

  /**
   * <p>Replica-specific global secondary index auto scaling settings.</p>
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[];

  /**
   * <p>Represents the auto scaling settings for a global table or global secondary
   *          index.</p>
   */
  ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>Represents the auto scaling settings for a global table or global secondary
   *          index.</p>
   */
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>The current state of the replica:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The replica is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The replica is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The replica is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The replica is ready for use.</p>
   *             </li>
   *          </ul>
   */
  ReplicaStatus?: ReplicaStatus | string;
}

export namespace ReplicaAutoScalingDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaAutoScalingDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling configuration for a global table.</p>
 */
export interface TableAutoScalingDescription {
  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The current state of the table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The table is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The table is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The table is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The table is ready for use.</p>
   *             </li>
   *          </ul>
   */
  TableStatus?: TableStatus | string;

  /**
   * <p>Represents replicas of the global table.</p>
   */
  Replicas?: ReplicaAutoScalingDescription[];
}

export namespace TableAutoScalingDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableAutoScalingDescription): any => ({
    ...obj,
  });
}

export interface DescribeTableReplicaAutoScalingOutput {
  /**
   * <p>Represents the auto scaling properties of the table.</p>
   */
  TableAutoScalingDescription?: TableAutoScalingDescription;
}

export namespace DescribeTableReplicaAutoScalingOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTableReplicaAutoScalingOutput): any => ({
    ...obj,
  });
}

export interface DescribeTimeToLiveInput {
  /**
   * <p>The name of the table to be described.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeTimeToLiveInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTimeToLiveInput): any => ({
    ...obj,
  });
}

export interface DescribeTimeToLiveOutput {
  /**
   * <p></p>
   */
  TimeToLiveDescription?: TimeToLiveDescription;
}

export namespace DescribeTimeToLiveOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTimeToLiveOutput): any => ({
    ...obj,
  });
}

export interface KinesisStreamingDestinationInput {
  /**
   * <p>The name of the DynamoDB table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The ARN for a Kinesis data stream.</p>
   */
  StreamArn: string | undefined;
}

export namespace KinesisStreamingDestinationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamingDestinationInput): any => ({
    ...obj,
  });
}

export interface KinesisStreamingDestinationOutput {
  /**
   * <p>The name of the table being modified.</p>
   */
  TableName?: string;

  /**
   * <p>The ARN for the specific Kinesis data stream.</p>
   */
  StreamArn?: string;

  /**
   * <p>The current status of the replication.</p>
   */
  DestinationStatus?: DestinationStatus | string;
}

export namespace KinesisStreamingDestinationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamingDestinationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>
 * There was an attempt to insert an item with the same primary key as an item that already exists in the DynamoDB table.
 * </p>
 */
export interface DuplicateItemException extends __SmithyException, $MetadataBearer {
  name: "DuplicateItemException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateItemException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DuplicateItemException): any => ({
    ...obj,
  });
}

/**
 * <p>DynamoDB rejected the request because you retried a request with a different payload but
 *       with an idempotent token that was already used.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  Message?: string;
}

export namespace IdempotentParameterMismatchException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>The transaction with the given request token is already in progress.</p>
 */
export interface TransactionInProgressException extends __SmithyException, $MetadataBearer {
  name: "TransactionInProgressException";
  $fault: "client";
  Message?: string;
}

export namespace TransactionInProgressException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactionInProgressException): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict when writing to the specified S3 bucket.</p>
 */
export interface ExportConflictException extends __SmithyException, $MetadataBearer {
  name: "ExportConflictException";
  $fault: "client";
  message?: string;
}

export namespace ExportConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportConflictException): any => ({
    ...obj,
  });
}

export interface ExportTableToPointInTimeInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the table to export.</p>
   */
  TableArn: string | undefined;

  /**
   * <p>Time in the past from which to export table data. The table export will be a snapshot
   *             of the table's state at this point in time.</p>
   */
  ExportTime?: Date;

  /**
   * <p>Providing a <code>ClientToken</code> makes the call to
   *                 <code>ExportTableToPointInTimeInput</code> idempotent, meaning that multiple
   *             identical calls have the same effect as one single call.</p>
   *         <p>A client token is valid for 8 hours after the first request that uses it is
   *             completed. After 8 hours, any request with the same client token is treated as a new
   *             request. Do not resubmit the same request with the same client token for more than 8
   *             hours, or the result might not be idempotent.</p>
   *         <p>If you submit a request with the same client token but a change in other parameters
   *             within the 8-hour idempotency window, DynamoDB returns an
   *             <code>IdempotentParameterMismatch</code> exception.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the Amazon S3 bucket to export the snapshot to.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The ID of the AWS account that owns the bucket the export will be stored in.</p>
   */
  S3BucketOwner?: string;

  /**
   * <p>The Amazon S3 bucket prefix to use as the file name and path of the exported
   *             snapshot.</p>
   */
  S3Prefix?: string;

  /**
   * <p>Type of encryption used on the bucket where export data will be stored. Valid values
   *             for <code>S3SseAlgorithm</code> are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AES256</code> - server-side encryption with Amazon S3 managed keys</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KMS</code> - server-side encryption with AWS KMS managed keys</p>
   *             </li>
   *          </ul>
   */
  S3SseAlgorithm?: S3SseAlgorithm | string;

  /**
   * <p>The ID of the AWS KMS managed key used to encrypt the S3 bucket where export data will
   *             be stored (if applicable).</p>
   */
  S3SseKmsKeyId?: string;

  /**
   * <p>The format for the exported data. Valid values for <code>ExportFormat</code> are
   *                 <code>DYNAMODB_JSON</code> or <code>ION</code>.</p>
   */
  ExportFormat?: ExportFormat | string;
}

export namespace ExportTableToPointInTimeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTableToPointInTimeInput): any => ({
    ...obj,
  });
}

export interface ExportTableToPointInTimeOutput {
  /**
   * <p>Contains a description of the table export.</p>
   */
  ExportDescription?: ExportDescription;
}

export namespace ExportTableToPointInTimeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTableToPointInTimeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified <code>ExportTime</code> is outside of the point in time recovery
 *             window.</p>
 */
export interface InvalidExportTimeException extends __SmithyException, $MetadataBearer {
  name: "InvalidExportTimeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidExportTimeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidExportTimeException): any => ({
    ...obj,
  });
}

/**
 * <p>Point in time recovery has not yet been enabled for this source table.</p>
 */
export interface PointInTimeRecoveryUnavailableException extends __SmithyException, $MetadataBearer {
  name: "PointInTimeRecoveryUnavailableException";
  $fault: "client";
  message?: string;
}

export namespace PointInTimeRecoveryUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PointInTimeRecoveryUnavailableException): any => ({
    ...obj,
  });
}

export interface ListBackupsInput {
  /**
   * <p>The backups from the table specified by <code>TableName</code> are listed. </p>
   */
  TableName?: string;

  /**
   * <p>Maximum number of backups to return at once.</p>
   */
  Limit?: number;

  /**
   * <p>Only backups created after this time are listed. <code>TimeRangeLowerBound</code> is inclusive.</p>
   */
  TimeRangeLowerBound?: Date;

  /**
   * <p>Only backups created before this time are listed. <code>TimeRangeUpperBound</code> is exclusive. </p>
   */
  TimeRangeUpperBound?: Date;

  /**
   * <p>
   *             <code>LastEvaluatedBackupArn</code> is the Amazon Resource Name (ARN) of the backup last
   *             evaluated when the current page of results was returned, inclusive of the current page
   *             of results. This value may be specified as the <code>ExclusiveStartBackupArn</code> of a
   *             new <code>ListBackups</code> operation in order to fetch the next page of results. </p>
   */
  ExclusiveStartBackupArn?: string;

  /**
   * <p>The backups from the table specified by <code>BackupType</code> are listed.</p>
   *          <p>Where <code>BackupType</code> can be:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>USER</code> - On-demand backup created by you.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SYSTEM</code> - On-demand backup automatically created by
   *                     DynamoDB.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ALL</code> - All types of on-demand backups (USER and SYSTEM).</p>
   *             </li>
   *          </ul>
   */
  BackupType?: BackupTypeFilter | string;
}

export namespace ListBackupsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupsInput): any => ({
    ...obj,
  });
}

export interface ListBackupsOutput {
  /**
   * <p>List of <code>BackupSummary</code> objects.</p>
   */
  BackupSummaries?: BackupSummary[];

  /**
   * <p>
   *         The ARN of the backup last evaluated when the current page of results was returned,
   *         inclusive of the current page of results. This value may be specified as the
   *         <code>ExclusiveStartBackupArn</code> of a new <code>ListBackups</code> operation in order to fetch the next page of results.
   *      </p>
   *          <p>
   *         If <code>LastEvaluatedBackupArn</code> is empty, then the last page of results has been processed and there are no
   *         more results to be retrieved.
   *      </p>
   *          <p> If <code>LastEvaluatedBackupArn</code> is not empty, this may or may not indicate that
   *             there is more data to be returned. All results are guaranteed to have been returned if
   *             and only if no value for <code>LastEvaluatedBackupArn</code> is returned. </p>
   */
  LastEvaluatedBackupArn?: string;
}

export namespace ListBackupsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBackupsOutput): any => ({
    ...obj,
  });
}

export interface ListContributorInsightsInput {
  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>A token to for the desired page, if there is one.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

export namespace ListContributorInsightsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContributorInsightsInput): any => ({
    ...obj,
  });
}

export interface ListContributorInsightsOutput {
  /**
   * <p>A list of ContributorInsightsSummary.</p>
   */
  ContributorInsightsSummaries?: ContributorInsightsSummary[];

  /**
   * <p>A token to go to the next page if there is one.</p>
   */
  NextToken?: string;
}

export namespace ListContributorInsightsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContributorInsightsOutput): any => ({
    ...obj,
  });
}

export interface ListExportsInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the exported table.</p>
   */
  TableArn?: string;

  /**
   * <p>Maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional string that, if supplied, must be copied from the output of a previous
   *             call to <code>ListExports</code>. When provided in this manner, the API fetches the next
   *             page of results.</p>
   */
  NextToken?: string;
}

export namespace ListExportsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExportsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about an export task.</p>
 */
export interface ExportSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the export.</p>
   */
  ExportArn?: string;

  /**
   * <p>Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED.</p>
   */
  ExportStatus?: ExportStatus | string;
}

export namespace ExportSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSummary): any => ({
    ...obj,
  });
}

export interface ListExportsOutput {
  /**
   * <p>A list of <code>ExportSummary</code> objects.</p>
   */
  ExportSummaries?: ExportSummary[];

  /**
   * <p>If this value is returned, there are additional results to be displayed. To retrieve
   *             them, call <code>ListExports</code> again, with <code>NextToken</code> set to this
   *             value.</p>
   */
  NextToken?: string;
}

export namespace ListExportsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExportsOutput): any => ({
    ...obj,
  });
}

export interface ListGlobalTablesInput {
  /**
   * <p>The first global table name that this operation will evaluate.</p>
   */
  ExclusiveStartGlobalTableName?: string;

  /**
   * <p>The maximum number of table names to return, if the parameter is not specified DynamoDB defaults to 100.</p>
   *          <p>If the number of global tables DynamoDB finds reaches this limit, it stops the operation and returns the table names collected up to that point,
   *          with a table name in the <code>LastEvaluatedGlobalTableName</code> to apply in a subsequent operation to the <code>ExclusiveStartGlobalTableName</code> parameter.</p>
   */
  Limit?: number;

  /**
   * <p>Lists the global tables in a specific Region.</p>
   */
  RegionName?: string;
}

export namespace ListGlobalTablesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGlobalTablesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the properties of a global table.</p>
 */
export interface GlobalTable {
  /**
   * <p>The global table name.</p>
   */
  GlobalTableName?: string;

  /**
   * <p>The Regions where the global table has replicas.</p>
   */
  ReplicationGroup?: Replica[];
}

export namespace GlobalTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalTable): any => ({
    ...obj,
  });
}

export interface ListGlobalTablesOutput {
  /**
   * <p>List of global table names.</p>
   */
  GlobalTables?: GlobalTable[];

  /**
   * <p>Last evaluated global table name.</p>
   */
  LastEvaluatedGlobalTableName?: string;
}

export namespace ListGlobalTablesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGlobalTablesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a <code>ListTables</code> operation.</p>
 */
export interface ListTablesInput {
  /**
   * <p>The first table name that this operation will evaluate. Use the value that was returned for
   *         <code>LastEvaluatedTableName</code> in a previous operation, so that you can obtain the next page
   *       of results.</p>
   */
  ExclusiveStartTableName?: string;

  /**
   * <p>A maximum number of table names to return. If this parameter is not specified, the limit is 100.</p>
   */
  Limit?: number;
}

export namespace ListTablesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTablesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>ListTables</code> operation.</p>
 */
export interface ListTablesOutput {
  /**
   * <p>The names of the tables associated with the current account at the current endpoint. The maximum size of this array is 100.</p>
   *          <p>If <code>LastEvaluatedTableName</code> also appears in the output, you can use this value as the
   *         <code>ExclusiveStartTableName</code> parameter in a subsequent <code>ListTables</code> request and
   *       obtain the next page of results.</p>
   */
  TableNames?: string[];

  /**
   * <p>The name of the last table in the current page of results. Use this value as the
   *         <code>ExclusiveStartTableName</code> in a new request to obtain the next page of results, until
   *       all the table names are returned.</p>
   *          <p>If you do not receive a <code>LastEvaluatedTableName</code> value in the response, this means that
   *       there are no more table names to be retrieved.</p>
   */
  LastEvaluatedTableName?: string;
}

export namespace ListTablesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTablesOutput): any => ({
    ...obj,
  });
}

export interface ListTagsOfResourceInput {
  /**
   * <p>The Amazon DynamoDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An optional string that, if supplied, must be copied from the output of a previous
   *       call to ListTagOfResource. When provided in this manner, this API fetches the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListTagsOfResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsOfResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsOfResourceOutput {
  /**
   * <p>The tags currently associated with the Amazon DynamoDB resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>If this value is returned, there are additional results to be displayed. To retrieve them,
   *       call ListTagsOfResource again, with NextToken set to this value.</p>
   */
  NextToken?: string;
}

export namespace ListTagsOfResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsOfResourceOutput): any => ({
    ...obj,
  });
}

export type Select = "ALL_ATTRIBUTES" | "ALL_PROJECTED_ATTRIBUTES" | "COUNT" | "SPECIFIC_ATTRIBUTES";

export interface RestoreTableFromBackupInput {
  /**
   * <p>The name of the new table to which the backup must be restored.</p>
   */
  TargetTableName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the backup.</p>
   */
  BackupArn: string | undefined;

  /**
   * <p>The billing mode of the restored table.</p>
   */
  BillingModeOverride?: BillingMode | string;

  /**
   * <p>List of global secondary indexes for the restored table. The indexes
   *         provided should match existing secondary indexes. You can choose to exclude
   *         some or all of the indexes at the time of restore.</p>
   */
  GlobalSecondaryIndexOverride?: GlobalSecondaryIndex[];

  /**
   * <p>List of local secondary indexes for the restored table. The indexes
   *         provided should match existing secondary indexes. You can choose to exclude
   *         some or all of the indexes at the time of restore.</p>
   */
  LocalSecondaryIndexOverride?: LocalSecondaryIndex[];

  /**
   * <p>Provisioned throughput settings for the restored table.</p>
   */
  ProvisionedThroughputOverride?: ProvisionedThroughput;

  /**
   * <p>The new server-side encryption settings for the restored table.</p>
   */
  SSESpecificationOverride?: SSESpecification;
}

export namespace RestoreTableFromBackupInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreTableFromBackupInput): any => ({
    ...obj,
  });
}

export interface RestoreTableFromBackupOutput {
  /**
   * <p>The description of the table created from an existing backup.</p>
   */
  TableDescription?: TableDescription;
}

export namespace RestoreTableFromBackupOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreTableFromBackupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A target table with the specified name already exists. </p>
 */
export interface TableAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "TableAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace TableAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>An invalid restore time was specified. RestoreDateTime must be between EarliestRestorableDateTime and LatestRestorableDateTime.</p>
 */
export interface InvalidRestoreTimeException extends __SmithyException, $MetadataBearer {
  name: "InvalidRestoreTimeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreTimeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRestoreTimeException): any => ({
    ...obj,
  });
}

export interface RestoreTableToPointInTimeInput {
  /**
   * <p>The DynamoDB table that will be restored. This value is an Amazon
   *             Resource Name (ARN).</p>
   */
  SourceTableArn?: string;

  /**
   * <p>Name of the source table that is being restored.</p>
   */
  SourceTableName?: string;

  /**
   * <p>The name of the new table to which it must be restored to.</p>
   */
  TargetTableName: string | undefined;

  /**
   * <p>Restore the table to the latest possible time. <code>LatestRestorableDateTime</code>
   *         is typically 5 minutes before the current time. </p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>Time in the past to restore the table to.</p>
   */
  RestoreDateTime?: Date;

  /**
   * <p>The billing mode of the restored table.</p>
   */
  BillingModeOverride?: BillingMode | string;

  /**
   * <p>List of global secondary indexes for the restored table. The indexes
   *         provided should match existing secondary indexes. You can choose to exclude
   *         some or all of the indexes at the time of restore.</p>
   */
  GlobalSecondaryIndexOverride?: GlobalSecondaryIndex[];

  /**
   * <p>List of local secondary indexes for the restored table. The indexes
   *         provided should match existing secondary indexes. You can choose to exclude
   *         some or all of the indexes at the time of restore.</p>
   */
  LocalSecondaryIndexOverride?: LocalSecondaryIndex[];

  /**
   * <p>Provisioned throughput settings for the restored table.</p>
   */
  ProvisionedThroughputOverride?: ProvisionedThroughput;

  /**
   * <p>The new server-side encryption settings for the restored table.</p>
   */
  SSESpecificationOverride?: SSESpecification;
}

export namespace RestoreTableToPointInTimeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreTableToPointInTimeInput): any => ({
    ...obj,
  });
}

export interface RestoreTableToPointInTimeOutput {
  /**
   * <p>Represents the properties of a table.</p>
   */
  TableDescription?: TableDescription;
}

export namespace RestoreTableToPointInTimeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreTableToPointInTimeOutput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>Identifies the Amazon DynamoDB resource to which tags should be added. This value is an Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon DynamoDB resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The DynamoDB resource that the tags will be removed from. This value is an Amazon
   *             Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag keys. Existing tags of the resource whose keys are members of this list
   *             will be removed from the DynamoDB resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings used to enable point in time recovery.</p>
 */
export interface PointInTimeRecoverySpecification {
  /**
   * <p>Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.</p>
   */
  PointInTimeRecoveryEnabled: boolean | undefined;
}

export namespace PointInTimeRecoverySpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PointInTimeRecoverySpecification): any => ({
    ...obj,
  });
}

export interface UpdateContinuousBackupsInput {
  /**
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Represents the settings used to enable point in time recovery.</p>
   */
  PointInTimeRecoverySpecification: PointInTimeRecoverySpecification | undefined;
}

export namespace UpdateContinuousBackupsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContinuousBackupsInput): any => ({
    ...obj,
  });
}

export interface UpdateContinuousBackupsOutput {
  /**
   * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
   */
  ContinuousBackupsDescription?: ContinuousBackupsDescription;
}

export namespace UpdateContinuousBackupsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContinuousBackupsOutput): any => ({
    ...obj,
  });
}

export interface UpdateContributorInsightsInput {
  /**
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The global secondary index name, if applicable.</p>
   */
  IndexName?: string;

  /**
   * <p>Represents the contributor insights action.</p>
   */
  ContributorInsightsAction: ContributorInsightsAction | string | undefined;
}

export namespace UpdateContributorInsightsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContributorInsightsInput): any => ({
    ...obj,
  });
}

export interface UpdateContributorInsightsOutput {
  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The name of the global secondary index, if applicable.</p>
   */
  IndexName?: string;

  /**
   * <p>The status of contributor insights</p>
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | string;
}

export namespace UpdateContributorInsightsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContributorInsightsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified replica is already part of the global table.</p>
 */
export interface ReplicaAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ReplicaAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ReplicaAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified replica is no longer part of the global table.</p>
 */
export interface ReplicaNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ReplicaNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ReplicaNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>A new replica to be added to an existing global table.</p>
 *             </li>
 *             <li>
 *                <p>New parameters for an existing replica.</p>
 *             </li>
 *             <li>
 *                <p>An existing replica to be removed from an existing global table.</p>
 *             </li>
 *          </ul>
 */
export interface ReplicaUpdate {
  /**
   * <p>The parameters required for creating a replica on an existing global table.</p>
   */
  Create?: CreateReplicaAction;

  /**
   * <p>The name of the existing replica to be removed.</p>
   */
  Delete?: DeleteReplicaAction;
}

export namespace ReplicaUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaUpdate): any => ({
    ...obj,
  });
}

export interface UpdateGlobalTableInput {
  /**
   * <p>The global table name.</p>
   */
  GlobalTableName: string | undefined;

  /**
   * <p>A list of Regions that should be added or removed from the global table.</p>
   */
  ReplicaUpdates: ReplicaUpdate[] | undefined;
}

export namespace UpdateGlobalTableInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalTableInput): any => ({
    ...obj,
  });
}

export interface UpdateGlobalTableOutput {
  /**
   * <p>Contains the details of the global table.</p>
   */
  GlobalTableDescription?: GlobalTableDescription;
}

export namespace UpdateGlobalTableOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalTableOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The operation tried to access a nonexistent index.</p>
 */
export interface IndexNotFoundException extends __SmithyException, $MetadataBearer {
  name: "IndexNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace IndexNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IndexNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
 */
export interface GlobalTableGlobalSecondaryIndexSettingsUpdate {
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException.</code>
   *          </p>
   */
  ProvisionedWriteCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for managing a global secondary index's write capacity
   *          units.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
}

export namespace GlobalTableGlobalSecondaryIndexSettingsUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalTableGlobalSecondaryIndexSettingsUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
 */
export interface ReplicaGlobalSecondaryIndexSettingsUpdate {
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedReadCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for managing a global secondary index replica's read capacity
   *          units.</p>
   */
  ProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
}

export namespace ReplicaGlobalSecondaryIndexSettingsUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaGlobalSecondaryIndexSettingsUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings for a global table in a Region that will be modified.</p>
 */
export interface ReplicaSettingsUpdate {
  /**
   * <p>The Region of the replica to be added.</p>
   */
  RegionName: string | undefined;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.
   *         For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write
   *         Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.
   *      </p>
   */
  ReplicaProvisionedReadCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for managing a global table replica's read capacity units.</p>
   */
  ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  /**
   * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
   */
  ReplicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdate[];
}

export namespace ReplicaSettingsUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaSettingsUpdate): any => ({
    ...obj,
  });
}

export interface UpdateGlobalTableSettingsInput {
  /**
   * <p>The name of the global table</p>
   */
  GlobalTableName: string | undefined;

  /**
   * <p>The billing mode of the global table. If <code>GlobalTableBillingMode</code> is not specified, the global table defaults to <code>PROVISIONED</code> capacity billing mode.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONED</code> - We recommend using <code>PROVISIONED</code> for predictable workloads. <code>PROVISIONED</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual">Provisioned Mode</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAY_PER_REQUEST</code> - We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. <code>PAY_PER_REQUEST</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand">On-Demand Mode</a>.
   *             </p>
   *             </li>
   *          </ul>
   */
  GlobalTableBillingMode?: BillingMode | string;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException.</code>
   *          </p>
   */
  GlobalTableProvisionedWriteCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for managing provisioned write capacity for the global
   *             table.</p>
   */
  GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  /**
   * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
   */
  GlobalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdate[];

  /**
   * <p>Represents the settings for a global table in a Region that will be modified.</p>
   */
  ReplicaSettingsUpdate?: ReplicaSettingsUpdate[];
}

export namespace UpdateGlobalTableSettingsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalTableSettingsInput): any => ({
    ...obj,
  });
}

export interface UpdateGlobalTableSettingsOutput {
  /**
   * <p>The name of the global table.</p>
   */
  GlobalTableName?: string;

  /**
   * <p>The Region-specific settings for the global table.</p>
   */
  ReplicaSettings?: ReplicaSettingsDescription[];
}

export namespace UpdateGlobalTableSettingsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalTableSettingsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the new provisioned throughput settings to be applied to a global secondary index.</p>
 */
export interface UpdateGlobalSecondaryIndexAction {
  /**
   * <p>The name of the global secondary index to be updated.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p>
   *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput: ProvisionedThroughput | undefined;
}

export namespace UpdateGlobalSecondaryIndexAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalSecondaryIndexAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>A new global secondary index to be added to an existing table.</p>
 *             </li>
 *             <li>
 *                <p>New provisioned throughput parameters for an existing global secondary index.</p>
 *             </li>
 *             <li>
 *                <p>An existing global secondary index to be removed from an existing table.</p>
 *             </li>
 *          </ul>
 */
export interface GlobalSecondaryIndexUpdate {
  /**
   * <p>The name of an existing global secondary index, along with new provisioned throughput settings to be applied to that index.</p>
   */
  Update?: UpdateGlobalSecondaryIndexAction;

  /**
   * <p>The parameters required for creating a global secondary index on an existing table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IndexName </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KeySchema </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AttributeDefinitions </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Projection </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProvisionedThroughput </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Create?: CreateGlobalSecondaryIndexAction;

  /**
   * <p>The name of an existing global secondary index to be removed.</p>
   */
  Delete?: DeleteGlobalSecondaryIndexAction;
}

export namespace GlobalSecondaryIndexUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalSecondaryIndexUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a replica to be modified.</p>
 */
export interface UpdateReplicationGroupMemberAction {
  /**
   * <p>The Region where the replica exists.</p>
   */
  RegionName: string | undefined;

  /**
   * <p>The AWS KMS customer master key (CMK) of the replica that should be used for AWS KMS encryption.
   *          To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias
   *          ARN. Note that you should only provide this parameter if the key is different from
   *          the default DynamoDB KMS master key alias/aws/dynamodb.</p>
   */
  KMSMasterKeyId?: string;

  /**
   * <p>Replica-specific provisioned throughput. If not specified, uses the source table's
   *          provisioned throughput settings.</p>
   */
  ProvisionedThroughputOverride?: ProvisionedThroughputOverride;

  /**
   * <p>Replica-specific global secondary index settings.</p>
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];
}

export namespace UpdateReplicationGroupMemberAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReplicationGroupMemberAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>A new replica to be added to an existing regional table or global table. This
 *                request invokes the <code>CreateTableReplica</code> action in the destination
 *                Region.</p>
 *             </li>
 *             <li>
 *                <p>New parameters for an existing replica. This request invokes the
 *                <code>UpdateTable</code> action in the destination Region.</p>
 *             </li>
 *             <li>
 *                <p>An existing replica to be deleted. The request invokes the
 *                <code>DeleteTableReplica</code> action in the destination Region, deleting the
 *                replica and all if its items in the destination Region.</p>
 *             </li>
 *          </ul>
 */
export interface ReplicationGroupUpdate {
  /**
   * <p>The parameters required for creating a replica for the table.</p>
   */
  Create?: CreateReplicationGroupMemberAction;

  /**
   * <p>The parameters required for updating a replica for the table.</p>
   */
  Update?: UpdateReplicationGroupMemberAction;

  /**
   * <p>The parameters required for deleting a replica for the table.</p>
   */
  Delete?: DeleteReplicationGroupMemberAction;
}

export namespace ReplicationGroupUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicationGroupUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of an <code>UpdateTable</code> operation.</p>
 */
export interface UpdateTableInput {
  /**
   * <p>An array of attributes that describe the key schema for the table and indexes. If you are adding a new global secondary index to the table, <code>AttributeDefinitions</code> must include the key element(s) of the new index.</p>
   */
  AttributeDefinitions?: AttributeDefinition[];

  /**
   * <p>The name of the table to be updated.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Controls how you are charged for read and write throughput and how you manage capacity.
   *       When switching from pay-per-request to provisioned capacity, initial provisioned capacity values must be set. The initial
   *       provisioned capacity values are estimated based on the consumed read and write capacity of your table and global secondary indexes
   *       over the past 30 minutes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONED</code> - We recommend using <code>PROVISIONED</code> for predictable workloads. <code>PROVISIONED</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual">Provisioned Mode</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAY_PER_REQUEST</code> - We recommend using <code>PAY_PER_REQUEST</code> for unpredictable workloads. <code>PAY_PER_REQUEST</code> sets the billing mode to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand">On-Demand Mode</a>.
   *             </p>
   *             </li>
   *          </ul>
   */
  BillingMode?: BillingMode | string;

  /**
   * <p>The new provisioned throughput settings for the specified table or index.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * <p>An array of one or more global secondary indexes for the table. For each index in the array, you can request one action:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Create</code> - add a new global secondary index to the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Update</code> - modify the provisioned throughput settings of an existing global secondary index.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Delete</code> - remove a global secondary index from the table.</p>
   *             </li>
   *          </ul>
   *          <p>You can create or delete only one global secondary index per <code>UpdateTable</code> operation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.OnlineOps.html">Managing Global Secondary
   *         Indexes</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
   */
  GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdate[];

  /**
   * <p>Represents the DynamoDB Streams configuration for the table.</p>
   *          <note>
   *             <p>You receive a <code>ResourceInUseException</code> if you try to enable a stream on a
   *                 table that already has a stream, or if you try to disable a stream on a table that
   *                 doesn't have a stream.</p>
   *          </note>
   */
  StreamSpecification?: StreamSpecification;

  /**
   * <p>The new server-side encryption settings for the specified table.</p>
   */
  SSESpecification?: SSESpecification;

  /**
   * <p>A list of replica update actions (create, delete, or update) for the table.</p>
   *          <note>
   *             <p>This property only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
   *          </note>
   */
  ReplicaUpdates?: ReplicationGroupUpdate[];
}

export namespace UpdateTableInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of an <code>UpdateTable</code> operation.</p>
 */
export interface UpdateTableOutput {
  /**
   * <p>Represents the properties of the table.</p>
   */
  TableDescription?: TableDescription;
}

export namespace UpdateTableOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling settings of a global secondary index for a global table
 *          that will be modified.</p>
 */
export interface GlobalSecondaryIndexAutoScalingUpdate {
  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>Represents the auto scaling settings to be modified for a global table or global
   *          secondary index.</p>
   */
  ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}

export namespace GlobalSecondaryIndexAutoScalingUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalSecondaryIndexAutoScalingUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling settings of a global secondary index for a replica
 *          that will be modified.</p>
 */
export interface ReplicaGlobalSecondaryIndexAutoScalingUpdate {
  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>Represents the auto scaling settings to be modified for a global table or global
   *          secondary index.</p>
   */
  ProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}

export namespace ReplicaGlobalSecondaryIndexAutoScalingUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaGlobalSecondaryIndexAutoScalingUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the auto scaling settings of a replica that will be modified.</p>
 */
export interface ReplicaAutoScalingUpdate {
  /**
   * <p>The Region where the replica exists.</p>
   */
  RegionName: string | undefined;

  /**
   * <p>Represents the auto scaling settings of global secondary indexes that will
   *          be modified.</p>
   */
  ReplicaGlobalSecondaryIndexUpdates?: ReplicaGlobalSecondaryIndexAutoScalingUpdate[];

  /**
   * <p>Represents the auto scaling settings to be modified for a global table or global
   *          secondary index.</p>
   */
  ReplicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}

export namespace ReplicaAutoScalingUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaAutoScalingUpdate): any => ({
    ...obj,
  });
}

export interface UpdateTableReplicaAutoScalingInput {
  /**
   * <p>Represents the auto scaling settings of the global secondary indexes of the replica
   *           to be updated.</p>
   */
  GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdate[];

  /**
   * <p>The name of the global table to be updated.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Represents the auto scaling settings to be modified for a global table or global
   *          secondary index.</p>
   */
  ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;

  /**
   * <p>Represents the auto scaling settings of replicas of the table that will be
   *            modified.</p>
   */
  ReplicaUpdates?: ReplicaAutoScalingUpdate[];
}

export namespace UpdateTableReplicaAutoScalingInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableReplicaAutoScalingInput): any => ({
    ...obj,
  });
}

export interface UpdateTableReplicaAutoScalingOutput {
  /**
   * <p>Returns information about the auto scaling settings of a table with replicas.</p>
   */
  TableAutoScalingDescription?: TableAutoScalingDescription;
}

export namespace UpdateTableReplicaAutoScalingOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableReplicaAutoScalingOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings used to enable or disable Time to Live (TTL) for the specified
 *             table.</p>
 */
export interface TimeToLiveSpecification {
  /**
   * <p>Indicates whether TTL is to be enabled (true) or disabled (false) on the table.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The name of the TTL attribute used to store the expiration time for items in the
   *             table.</p>
   */
  AttributeName: string | undefined;
}

export namespace TimeToLiveSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeToLiveSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of an <code>UpdateTimeToLive</code> operation.</p>
 */
export interface UpdateTimeToLiveInput {
  /**
   * <p>The name of the table to be configured.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Represents the settings used to enable or disable Time to Live for the specified table.</p>
   */
  TimeToLiveSpecification: TimeToLiveSpecification | undefined;
}

export namespace UpdateTimeToLiveInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTimeToLiveInput): any => ({
    ...obj,
  });
}

export interface UpdateTimeToLiveOutput {
  /**
   * <p>Represents the output of an <code>UpdateTimeToLive</code> operation.</p>
   */
  TimeToLiveSpecification?: TimeToLiveSpecification;
}

export namespace UpdateTimeToLiveOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTimeToLiveOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the data for an attribute.</p>
 *          <p>Each attribute value is described as a name-value pair.  The name is the data type, and the value is the data itself.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the
 *                              <i>Amazon DynamoDB Developer Guide</i>.</p>
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

export namespace AttributeValue {
  /**
   * <p>An attribute of type  String. For example:</p>
   *          <p>
   *             <code>"S": "Hello"</code>
   *          </p>
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
   * <p>An attribute of type Number.  For example:</p>
   *          <p>
   *             <code>"N": "123.45"</code>
   *          </p>
   *          <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
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
   * <p>An attribute of type Binary.  For example:</p>
   *          <p>
   *             <code>"B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"</code>
   *          </p>
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
   * <p>An attribute of type String Set.  For example:</p>
   *          <p>
   *             <code>"SS": ["Giraffe", "Hippo" ,"Zebra"]</code>
   *          </p>
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
   * <p>An attribute of type Number Set.  For example:</p>
   *          <p>
   *             <code>"NS": ["42.2", "-19", "7.5", "3.14"]</code>
   *          </p>
   *          <p>Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.</p>
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
   * <p>An attribute of type Binary Set.  For example:</p>
   *          <p>
   *             <code>"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]</code>
   *          </p>
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
   * <p>An attribute of type Map.  For example:</p>
   *          <p>
   *             <code>"M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}}</code>
   *          </p>
   */
  export interface MMember {
    S?: never;
    N?: never;
    B?: never;
    SS?: never;
    NS?: never;
    BS?: never;
    M: { [key: string]: AttributeValue };
    L?: never;
    NULL?: never;
    BOOL?: never;
    $unknown?: never;
  }

  /**
   * <p>An attribute of type List.  For example:</p>
   *          <p>
   *             <code>"L": [ {"S": "Cookies"} , {"S": "Coffee"}, {"N", "3.14159"}]</code>
   *          </p>
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
   * <p>An attribute of type Null.  For example:</p>
   *          <p>
   *             <code>"NULL": true</code>
   *          </p>
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
   * <p>An attribute of type Boolean.  For example:</p>
   *          <p>
   *             <code>"BOOL": true</code>
   *          </p>
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

  export interface Visitor<T> {
    S: (value: string) => T;
    N: (value: string) => T;
    B: (value: Uint8Array) => T;
    SS: (value: string[]) => T;
    NS: (value: string[]) => T;
    BS: (value: Uint8Array[]) => T;
    M: (value: { [key: string]: AttributeValue }) => T;
    L: (value: AttributeValue[]) => T;
    NULL: (value: boolean) => T;
    BOOL: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AttributeValue, visitor: Visitor<T>): T => {
    if (value.S !== undefined) return visitor.S(value.S);
    if (value.N !== undefined) return visitor.N(value.N);
    if (value.B !== undefined) return visitor.B(value.B);
    if (value.SS !== undefined) return visitor.SS(value.SS);
    if (value.NS !== undefined) return visitor.NS(value.NS);
    if (value.BS !== undefined) return visitor.BS(value.BS);
    if (value.M !== undefined) return visitor.M(value.M);
    if (value.L !== undefined) return visitor.L(value.L);
    if (value.NULL !== undefined) return visitor.NULL(value.NULL);
    if (value.BOOL !== undefined) return visitor.BOOL(value.BOOL);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeValue): any => {
    if (obj.S !== undefined) return { S: obj.S };
    if (obj.N !== undefined) return { N: obj.N };
    if (obj.B !== undefined) return { B: obj.B };
    if (obj.SS !== undefined) return { SS: obj.SS };
    if (obj.NS !== undefined) return { NS: obj.NS };
    if (obj.BS !== undefined) return { BS: obj.BS };
    if (obj.M !== undefined)
      return {
        M: Object.entries(obj.M).reduce(
          (acc: any, [key, value]: [string, AttributeValue]) => ({
            ...acc,
            [key]: AttributeValue.filterSensitiveLog(value),
          }),
          {}
        ),
      };
    if (obj.L !== undefined) return { L: obj.L.map((item) => AttributeValue.filterSensitiveLog(item)) };
    if (obj.NULL !== undefined) return { NULL: obj.NULL };
    if (obj.BOOL !== undefined) return { BOOL: obj.BOOL };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to
 *       perform on each, and the new value for each.</p>
 *          <note>
 *             <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will
 *         need to delete the item, and then use <code>PutItem</code> to create a new item with new
 *         attributes.</p>
 *          </note>
 *          <p>Attribute values cannot be null; string and binary type attributes must have lengths greater
 *       than zero; and set type attributes must not be empty. Requests with empty values will be
 *       rejected with a <code>ValidationException</code> exception.</p>
 */
export interface AttributeValueUpdate {
  /**
   * <p>Represents the data for an attribute.</p>
   *          <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.
   *       </p>
   */
  Value?: AttributeValue;

  /**
   * <p>Specifies how to perform the update. Valid values are <code>PUT</code> (default), <code>DELETE</code>,
   *       and <code>ADD</code>. The behavior depends on whether the specified primary key already exists
   *       in the table.</p>
   *
   *          <p>
   *             <b>If an item with the specified <i>Key</i> is found in the table:</b>
   *          </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PUT</code> - Adds the specified attribute to the item. If the attribute already
   *           exists, it is replaced by the new value. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - If no value is specified, the attribute and its value are removed
   *           from the item. The data type of the specified value must match the existing value's data
   *           type.</p>
   *                <p>If a <i>set</i> of values is specified, then those values are subtracted from the old
   *           set. For example, if the attribute value was the set <code>[a,b,c]</code> and the
   *             <code>DELETE</code> action specified <code>[a,c]</code>, then the final attribute value would
   *           be <code>[b]</code>. Specifying an empty set is an error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADD</code> - If the attribute does not already exist, then the attribute and its
   *           values are added to the item. If the attribute does exist, then the behavior of
   *             <code>ADD</code> depends on the data type of the attribute:</p>
   *                <ul>
   *                   <li>
   *                      <p>If the existing attribute is a number, and if <code>Value</code> is also a number, then the
   *                 <code>Value</code> is mathematically added to the existing attribute. If <code>Value</code> is a
   *               negative number, then it is subtracted from the existing attribute.</p>
   *                      <note>
   *                         <p> If you use <code>ADD</code> to increment or decrement a number value for an item
   *                 that doesn't exist before the update, DynamoDB uses 0 as the initial value.</p>
   *                         <p>In addition, if you use <code>ADD</code> to update an existing item, and intend to
   *                 increment or decrement an attribute value which does not yet exist, DynamoDB uses
   *                   <code>0</code> as the initial value. For example, suppose that the item you want
   *                 to update does not yet have an attribute named <i>itemcount</i>, but you decide to
   *                   <code>ADD</code> the number <code>3</code> to this attribute anyway, even though
   *                 it currently does not exist. DynamoDB will create the <i>itemcount</i> attribute, set
   *                 its initial value to <code>0</code>, and finally add <code>3</code> to it. The
   *                 result will be a new <i>itemcount</i> attribute in the item, with a value of
   *                   <code>3</code>.</p>
   *                      </note>
   *                   </li>
   *                   <li>
   *                      <p>If the existing data type is a set, and if the <code>Value</code> is also a set, then the
   *                 <code>Value</code> is added to the existing set. (This is a <i>set</i> operation, not
   *               mathematical addition.) For example, if the attribute value was the set
   *                 <code>[1,2]</code>, and the <code>ADD</code> action specified <code>[3]</code>, then
   *               the final attribute value would be <code>[1,2,3]</code>. An error occurs if an Add
   *               action is specified for a set attribute and the attribute type specified does not
   *               match the existing set type. </p>
   *                      <p>Both sets must have the same primitive data type. For example, if the existing data
   *               type is a set of strings, the <code>Value</code> must also be a set of strings. The same
   *               holds true for number sets and binary sets.</p>
   *                   </li>
   *                </ul>
   *                <p>This action is only valid for an existing attribute whose data type is number or is a
   *           set. Do not use <code>ADD</code> for any other data types.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>If no item with the specified <i>Key</i> is found:</b>
   *          </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PUT</code> - DynamoDB creates a new item with the specified primary key, and then adds
   *           the attribute. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - Nothing happens; there is no attribute to delete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADD</code> - DynamoDB creates an item with the supplied primary key and number (or set
   *           of numbers) for the attribute value. The only data types allowed are number and number
   *           set; no other data types can be specified.</p>
   *             </li>
   *          </ul>
   */
  Action?: AttributeAction | string;
}

export namespace AttributeValueUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeValueUpdate): any => ({
    ...obj,
    ...(obj.Value && { Value: AttributeValue.filterSensitiveLog(obj.Value) }),
  });
}

/**
 * <p>
 * A PartiQL batch statement request.
 * </p>
 */
export interface BatchStatementRequest {
  /**
   * <p>
   * A valid PartiQL statement.
   * </p>
   */
  Statement: string | undefined;

  /**
   * <p>
   * The parameters associated with a PartiQL statement in the batch request.
   * </p>
   */
  Parameters?: AttributeValue[];

  /**
   * <p>
   * The read consistency of the PartiQL batch request.
   * </p>
   */
  ConsistentRead?: boolean;
}

export namespace BatchStatementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStatementRequest): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>
 * A PartiQL batch statement response..
 * </p>
 */
export interface BatchStatementResponse {
  /**
   * <p>
   * The error associated with a failed PartiQL batch statement.
   * </p>
   */
  Error?: BatchStatementError;

  /**
   * <p>
   * The table name associated with a failed PartiQL batch statement.
   * </p>
   */
  TableName?: string;

  /**
   * <p>
   * A DynamoDB item associated with a BatchStatementResponse
   * </p>
   */
  Item?: { [key: string]: AttributeValue };
}

export namespace BatchStatementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStatementResponse): any => ({
    ...obj,
    ...(obj.Item && {
      Item: Object.entries(obj.Item).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>An ordered list of errors for each item in the request which caused the transaction
 *      to get cancelled. The values of the list are ordered according to the ordering of the
 *      <code>TransactWriteItems</code> request parameter. If no error
 *      occurred for the associated item an error with a Null code and Null message will be present.
 *      </p>
 */
export interface CancellationReason {
  /**
   * <p>Item in the request which caused the transaction to get cancelled.</p>
   */
  Item?: { [key: string]: AttributeValue };

  /**
   * <p>Status code for the result of the cancelled transaction.</p>
   */
  Code?: string;

  /**
   * <p>Cancellation reason message description.</p>
   */
  Message?: string;
}

export namespace CancellationReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancellationReason): any => ({
    ...obj,
    ...(obj.Item && {
      Item: Object.entries(obj.Item).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p>
 *          <ul>
 *             <li>
 *                <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the
 *             <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>,
 *           only the following comparison operators are supported:</p>
 *                <p>
 *                   <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code>
 *                </p>
 *                <p>
 *                   <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results
 *           and returns only the desired values.</p>
 *             </li>
 *             <li>
 *                <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which
 *           evaluates the scan results and returns only the desired values.</p>
 *             </li>
 *          </ul>
 */
export interface Condition {
  /**
   * <p>One or more values to evaluate against the supplied attribute. The number of values in the
   *       list depends on the <code>ComparisonOperator</code> being used.</p>
   *          <p>For type Number, value comparisons are numeric.</p>
   *          <p>String value comparisons for greater than, equals, or less than are based on ASCII character
   *       code values. For example, <code>a</code> is greater than <code>A</code>, and <code>a</code>
   *       is greater than <code>B</code>. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters</a>.</p>
   *          <p>For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values.</p>
   */
  AttributeValueList?: AttributeValue[];

  /**
   * <p>A comparator for evaluating attributes. For example, equals, greater than, less than, etc.</p>
   *          <p>The following comparison operators are available:</p>
   *          <p>
   *             <code>EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN</code>
   *          </p>
   *          <p>The following are descriptions of each comparison operator.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EQ</code> : Equal. <code>EQ</code> is supported for all data types, including lists and maps.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, Binary, String Set, Number Set, or Binary Set. If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not equal <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NE</code> : Not equal. <code>NE</code> is supported for all data types, including lists and maps.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String,
   *           Number, Binary, String Set, Number Set, or Binary Set. If an item contains an <code>AttributeValue</code> of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not equal <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LE</code> : Less than or equal. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code> : Less than. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String,
   *           Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GE</code> : Greater than or equal. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GT</code> : Greater than. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_NULL</code> : The attribute exists. <code>NOT_NULL</code> is supported for all data types, including lists and maps.</p>
   *                <note>
   *                   <p>This operator tests for the existence of an attribute, not its data type.  If the data type of attribute "<code>a</code>" is null, and you evaluate it using <code>NOT_NULL</code>, the result is a Boolean <code>true</code>. This result is because the attribute "<code>a</code>" exists; its data type is not relevant to the <code>NOT_NULL</code> comparison operator.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULL</code> : The attribute does not exist. <code>NULL</code> is supported for all data types, including lists and maps.</p>
   *                <note>
   *                   <p>This operator tests for the nonexistence of an attribute, not its data type.  If the data type of attribute "<code>a</code>" is null, and you evaluate it using <code>NULL</code>, the result is a Boolean <code>false</code>. This is because the attribute "<code>a</code>" exists; its data type is not relevant to the <code>NULL</code> comparison operator.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTAINS</code> : Checks for a subsequence, or value in a set.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then
   *           the operator checks for a substring match. If the target attribute of the comparison is
   *           of type Binary, then the operator looks for a subsequence of the target that matches the input.
   *           If the target attribute of the comparison is a set ("<code>SS</code>", "<code>NS</code>", or "<code>BS</code>"), then the
   *           operator evaluates to true if it finds an exact match with any member of the set.</p>
   *                <p>CONTAINS is supported for lists: When evaluating "<code>a CONTAINS b</code>", "<code>a</code>" can be a list; however, "<code>b</code>" cannot be a set, a map, or a list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CONTAINS</code> : Checks for absence of a subsequence, or absence of a value in
   *           a set.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If the target attribute of the comparison is a String, then
   *           the operator checks for the absence of a substring match. If the target attribute of the
   *           comparison is Binary, then the operator checks for the absence of a subsequence of the
   *           target that matches the input. If the target attribute of the comparison is a set ("<code>SS</code>",
   *           "<code>NS</code>", or "<code>BS</code>"), then the operator evaluates to true if it <i>does not</i> find an exact match with any member of the set.</p>
   *                <p>NOT_CONTAINS is supported for lists: When evaluating "<code>a NOT CONTAINS b</code>", "<code>a</code>" can be a list; however, "<code>b</code>" cannot be a set, a map, or a list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BEGINS_WITH</code> : Checks for a prefix. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String or
   *           Binary (not a Number or a set type). The target attribute of the comparison must be of type String or
   *           Binary (not a Number or a set type).</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN</code> : Checks for matching elements in a list.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain one or more <code>AttributeValue</code>
   *                elements of type String, Number, or Binary. These attributes are compared against an
   *                existing attribute of an item. If any elements of the input are equal to the item
   *                attribute, the expression evaluates to true.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BETWEEN</code> : Greater than or equal to the first value, and less than or equal
   *           to the second value. </p>
   *                <p>
   *                   <code>AttributeValueList</code> must contain two <code>AttributeValue</code> elements of the same
   *           type, either String, Number, or Binary (not a set type). A target attribute matches if the
   *           target value is greater than, or equal to, the first element and less than, or equal to,
   *           the second element. If an item contains an <code>AttributeValue</code> element of a different type than
   *           the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not compare to <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For usage examples of <code>AttributeValueList</code> and <code>ComparisonOperator</code>, see
   *     <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html">Legacy Conditional Parameters</a>
   *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;
}

export namespace Condition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
    ...(obj.AttributeValueList && {
      AttributeValueList: obj.AttributeValueList.map((item) => AttributeValue.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>Represents a request to perform a <code>DeleteItem</code> operation on an item.</p>
 */
export interface DeleteRequest {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key of the item to delete. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema.</p>
   */
  Key: { [key: string]: AttributeValue } | undefined;
}

export namespace DeleteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRequest): any => ({
    ...obj,
    ...(obj.Key && {
      Key: Object.entries(obj.Key).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface ExecuteStatementInput {
  /**
   * <p>
   * The PartiQL statement representing the operation to run.
   * </p>
   */
  Statement: string | undefined;

  /**
   * <p>
   * The parameters for the PartiQL statement, if any.
   * </p>
   */
  Parameters?: AttributeValue[];

  /**
   * <p>
   * The consistency of a read operation. If set to <code>true</code>, then a strongly consistent read is used; otherwise, an eventually consistent read is used.
   * </p>
   */
  ConsistentRead?: boolean;

  /**
   * <p>
   * Set this value to get remaining results, if <code>NextToken</code> was returned in the statement response.
   * </p>
   */
  NextToken?: string;
}

export namespace ExecuteStatementInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteStatementInput): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Specifies an item and related attribute values to retrieve in a
 *         <code>TransactGetItem</code> object.</p>
 */
export interface Get {
  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects that
   *         specifies the primary key of the item to retrieve.</p>
   */
  Key: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>The name of the table from which to retrieve the specified item.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A string that identifies one or more attributes of the specified item
   *         to retrieve from the table.  The attributes in the expression must be
   *         separated by commas. If no attribute names are specified, then all
   *         attributes of the specified item are returned. If any of the requested
   *         attributes are not found, they do not appear in the result.</p>
   */
  ProjectionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in the
   *         ProjectionExpression parameter.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };
}

export namespace Get {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Get): any => ({
    ...obj,
    ...(obj.Key && {
      Key: Object.entries(obj.Key).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the input of a <code>GetItem</code> operation.</p>
 */
export interface GetItemInput {
  /**
   * <p>The name of the table containing the requested item.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects, representing the primary key of
   *       the item to retrieve.</p>
   *          <p>For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.</p>
   */
  Key: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>This is a legacy parameter.  Use <code>ProjectionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html">AttributesToGet</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  AttributesToGet?: string[];

  /**
   * <p>Determines the read consistency model:  If set to <code>true</code>, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.</p>
   */
  ConsistentRead?: boolean;

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.</p>
   *          <p>If no attribute names are specified, then all attributes are returned. If any of the
   *             requested attributes are not found, they do not appear in the result.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ProjectionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p>
   *             </li>
   *             <li>
   *                <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p>
   *             </li>
   *             <li>
   *                <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p>
   *             </li>
   *          </ul>
   *          <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Percentile</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>{"#P":"Percentile"}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You could then use this substitution in an expression, as in this example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#P = :val</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p>
   *          </note>
   *          <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };
}

export namespace GetItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetItemInput): any => ({
    ...obj,
    ...(obj.Key && {
      Key: Object.entries(obj.Key).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the output of a <code>GetItem</code> operation.</p>
 */
export interface GetItemOutput {
  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects, as specified
   *             by <code>ProjectionExpression</code>.</p>
   */
  Item?: { [key: string]: AttributeValue };

  /**
   * <p>The capacity units consumed by the <code>GetItem</code> operation. The data returned
   *             includes the total provisioned throughput consumed, along with statistics for the table
   *             and any indexes involved in the operation. <code>ConsumedCapacity</code> is only
   *             returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more
   *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Read/Write Capacity Mode</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ConsumedCapacity?: ConsumedCapacity;
}

export namespace GetItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetItemOutput): any => ({
    ...obj,
    ...(obj.Item && {
      Item: Object.entries(obj.Item).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Information about item collections, if any, that were affected by the operation.
 *         <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the
 *       table does not have any local secondary indexes, this information is not returned in the response.</p>
 */
export interface ItemCollectionMetrics {
  /**
   * <p>The partition key value of the item collection. This value is the same as the partition key value of the item.</p>
   */
  ItemCollectionKey?: { [key: string]: AttributeValue };

  /**
   * <p>An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p>
   *          <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p>
   */
  SizeEstimateRangeGB?: number[];
}

export namespace ItemCollectionMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ItemCollectionMetrics): any => ({
    ...obj,
    ...(obj.ItemCollectionKey && {
      ItemCollectionKey: Object.entries(obj.ItemCollectionKey).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Details for the requested item.</p>
 */
export interface ItemResponse {
  /**
   * <p>Map of attribute data consisting of the data type and attribute value.</p>
   */
  Item?: { [key: string]: AttributeValue };
}

export namespace ItemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ItemResponse): any => ({
    ...obj,
    ...(obj.Item && {
      Item: Object.entries(obj.Item).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>
 * Represents a PartiQL statment that uses parameters.
 * </p>
 */
export interface ParameterizedStatement {
  /**
   * <p>
   * A PartiQL statment that uses parameters.
   * </p>
   */
  Statement: string | undefined;

  /**
   * <p>
   * The parameter values.
   * </p>
   */
  Parameters?: AttributeValue[];
}

export namespace ParameterizedStatement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterizedStatement): any => ({
    ...obj,
    ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Represents a request to perform a <code>PutItem</code> operation on an item.</p>
 */
export interface PutRequest {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key of an item to
   *          be processed by <code>PutItem</code>. All of the table's primary key attributes must be
   *          specified, and their data types must match those of the table's key schema. If any
   *          attributes are present in the item that are part of an index key schema for the table,
   *          their types must match the index key schema.</p>
   */
  Item: { [key: string]: AttributeValue } | undefined;
}

export namespace PutRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRequest): any => ({
    ...obj,
    ...(obj.Item && {
      Item: Object.entries(obj.Item).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface ExecuteStatementOutput {
  /**
   * <p>
   * If a read operation was used, this property will contain the result of the reade operation; a map of attribute names and their values. For the write operations this value will be empty.
   * </p>
   */
  Items?: { [key: string]: AttributeValue }[];

  /**
   * <p>
   * If the response of a read request exceeds the response payload limit DynamoDB will set this value in the response. If set, you can use that this value in the subsequent request to get the remaining results.
   * </p>
   */
  NextToken?: string;
}

export namespace ExecuteStatementOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteStatementOutput): any => ({
    ...obj,
    ...(obj.Items && {
      Items: obj.Items.map((item) =>
        Object.entries(item).reduce(
          (acc: any, [key, value]: [string, AttributeValue]) => ({
            ...acc,
            [key]: AttributeValue.filterSensitiveLog(value),
          }),
          {}
        )
      ),
    }),
  });
}

/**
 * <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p>
 *          <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a
 *       simple primary key, you only need to provide the partition key. For a composite
 *       primary key, you must provide <i>both</i> the partition key and the sort key.</p>
 */
export interface KeysAndAttributes {
  /**
   * <p>The primary key attribute values that define the items and the attributes associated with the items.</p>
   */
  Keys: { [key: string]: AttributeValue }[] | undefined;

  /**
   * <p>This is a legacy parameter.  Use <code>ProjectionExpression</code> instead.  For more information, see
   *          <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html">Legacy Conditional Parameters</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  AttributesToGet?: string[];

  /**
   * <p>The consistency of a read operation. If set to <code>true</code>, then a strongly consistent
   *       read is used; otherwise, an eventually consistent read is used.</p>
   */
  ConsistentRead?: boolean;

  /**
   * <p>A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars,
   *          sets, or elements of a JSON document. The attributes in the <code>ProjectionExpression</code> must be separated by
   *          commas.</p>
   *          <p>If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProjectionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p>
   *             </li>
   *             <li>
   *                <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p>
   *             </li>
   *             <li>
   *                <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p>
   *             </li>
   *          </ul>
   *          <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Percentile</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>{"#P":"Percentile"}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You could then use this substitution in an expression, as in this example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#P = :val</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p>
   *          </note>
   *          <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };
}

export namespace KeysAndAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeysAndAttributes): any => ({
    ...obj,
    ...(obj.Keys && {
      Keys: obj.Keys.map((item) =>
        Object.entries(item).reduce(
          (acc: any, [key, value]: [string, AttributeValue]) => ({
            ...acc,
            [key]: AttributeValue.filterSensitiveLog(value),
          }),
          {}
        )
      ),
    }),
  });
}

/**
 * <p>Specifies an item to be retrieved as part of the transaction.</p>
 */
export interface TransactGetItem {
  /**
   * <p>Contains the primary key that identifies the item to get, together
   *         with the name of the table that contains the item, and optionally
   *         the specific attributes of the item to retrieve.</p>
   */
  Get: Get | undefined;
}

export namespace TransactGetItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactGetItem): any => ({
    ...obj,
    ...(obj.Get && { Get: Get.filterSensitiveLog(obj.Get) }),
  });
}

export interface BatchExecuteStatementInput {
  /**
   * <p>
   * The list of PartiQL statements representing the batch to run.
   * </p>
   */
  Statements: BatchStatementRequest[] | undefined;
}

export namespace BatchExecuteStatementInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchExecuteStatementInput): any => ({
    ...obj,
    ...(obj.Statements && { Statements: obj.Statements.map((item) => BatchStatementRequest.filterSensitiveLog(item)) }),
  });
}

export interface BatchExecuteStatementOutput {
  /**
   * <p>
   * The response to each PartiQL statement in the batch.
   * </p>
   */
  Responses?: BatchStatementResponse[];
}

export namespace BatchExecuteStatementOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchExecuteStatementOutput): any => ({
    ...obj,
    ...(obj.Responses && { Responses: obj.Responses.map((item) => BatchStatementResponse.filterSensitiveLog(item)) }),
  });
}

export interface ExecuteTransactionInput {
  /**
   * <p>
   * The list of PartiQL statements representing the transaction to run.
   * </p>
   */
  TransactStatements: ParameterizedStatement[] | undefined;

  /**
   * <p>
   * Set this value to get remaining results, if <code>NextToken</code> was returned in the statement response.
   * </p>
   */
  ClientRequestToken?: string;
}

export namespace ExecuteTransactionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteTransactionInput): any => ({
    ...obj,
    ...(obj.TransactStatements && {
      TransactStatements: obj.TransactStatements.map((item) => ParameterizedStatement.filterSensitiveLog(item)),
    }),
  });
}

export interface ExecuteTransactionOutput {
  /**
   * <p>
   * The response to a PartiQL transaction.
   * </p>
   */
  Responses?: ItemResponse[];
}

export namespace ExecuteTransactionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteTransactionOutput): any => ({
    ...obj,
    ...(obj.Responses && { Responses: obj.Responses.map((item) => ItemResponse.filterSensitiveLog(item)) }),
  });
}

export interface TransactGetItemsOutput {
  /**
   * <p>If the <i>ReturnConsumedCapacity</i> value was <code>TOTAL</code>,
   *          this is an array of <code>ConsumedCapacity</code> objects, one for each table
   *          addressed by <code>TransactGetItem</code> objects in the <i>TransactItems</i>
   *          parameter. These <code>ConsumedCapacity</code> objects report the read-capacity
   *          units consumed by the <code>TransactGetItems</code> call in that table.</p>
   */
  ConsumedCapacity?: ConsumedCapacity[];

  /**
   * <p>An ordered array of up to 25 <code>ItemResponse</code> objects, each of which corresponds
   *          to the <code>TransactGetItem</code> object in the same position in the
   *          <i>TransactItems</i> array. Each <code>ItemResponse</code> object
   *          contains a Map of the name-value pairs that are the projected attributes of
   *          the requested item.</p>
   *          <p>If a requested item could not be retrieved, the corresponding <code>ItemResponse</code>
   *        object is Null, or if the requested item has no projected attributes, the corresponding
   *        <code>ItemResponse</code> object is an empty Map. </p>
   */
  Responses?: ItemResponse[];
}

export namespace TransactGetItemsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactGetItemsOutput): any => ({
    ...obj,
    ...(obj.Responses && { Responses: obj.Responses.map((item) => ItemResponse.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The entire transaction request was canceled.</p>
 *          <p>DynamoDB cancels a <code>TransactWriteItems</code> request under the following circumstances:</p>
 *          <ul>
 *             <li>
 *                <p>A condition in one of the condition expressions is not met.</p>
 *             </li>
 *             <li>
 *                <p>A table in the <code>TransactWriteItems</code> request is in a different account or region.</p>
 *             </li>
 *             <li>
 *                <p>More than one action in the <code>TransactWriteItems</code> operation targets the same item.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction to be completed.</p>
 *             </li>
 *             <li>
 *                <p>An item size becomes too large (larger than 400 KB), or a local secondary index (LSI)
 *         becomes too large, or a similar validation error occurs because of changes made by the transaction.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *          </ul>
 *
 *          <p>DynamoDB cancels a <code>TransactGetItems</code> request under the following circumstances:</p>
 *          <ul>
 *             <li>
 *                <p>There is an ongoing <code>TransactGetItems</code> operation that conflicts with a concurrent
 *         <code>PutItem</code>, <code>UpdateItem</code>, <code>DeleteItem</code> or <code>TransactWriteItems</code> request.
 *         In this case the <code>TransactGetItems</code> operation fails with a <code>TransactionCanceledException</code>.</p>
 *             </li>
 *             <li>
 *                <p>A table in the <code>TransactGetItems</code> request is in a different account or region.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction to be completed.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>If using Java, DynamoDB lists the cancellation reasons on the <code>CancellationReasons</code> property.  This property is not set for other languages.
 *     Transaction cancellation reasons are ordered in the order of requested items, if an item has no error it will have <code>NONE</code> code and <code>Null</code> message.</p>
 *          </note>
 *          <p>Cancellation reason codes and possible error messages:</p>
 *          <ul>
 *             <li>
 *                <p>No Errors:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>NONE</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: <code>null</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Conditional Check Failed:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ConditionalCheckFailed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: The conditional request failed. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Item Collection Size Limit Exceeded:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ItemCollectionSizeLimitExceeded</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: Collection size exceeded.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Transaction Conflict:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>TransactionConflict</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: Transaction is ongoing for the item.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Provisioned Throughput Exceeded:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ProvisionedThroughputExceeded</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages: </p>
 *                     <ul>
 *                         <li>
 *                            <p>The level of configured provisioned throughput for the table was exceeded. Consider increasing your provisioning level with the
 *                             UpdateTable API.</p>
 *                            <note>
 *                               <p>This Message is received when provisioned throughput is exceeded is on a provisioned DynamoDB table.</p>
 *                            </note>
 *                         </li>
 *                         <li>
 *                            <p>The level of configured provisioned throughput for one or more global secondary indexes of the table was exceeded.
 *                     Consider increasing your provisioning level for the under-provisioned global secondary indexes with the UpdateTable API.</p>
 *                            <note>
 *                               <p>This message is returned when provisioned throughput is exceeded is on a provisioned GSI.</p>
 *                            </note>
 *                         </li>
 *                      </ul>
 *
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Throttling Error:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ThrottlingError</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages: </p>
 *                     <ul>
 *                         <li>
 *                            <p>Throughput exceeds the current capacity of your table or index.
 *                             DynamoDB is automatically scaling your table or index so please try
 *                             again shortly. If exceptions persist, check if you have a hot key:
 *                             https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html.</p>
 *                            <note>
 *                               <p>This message is returned when writes get throttled on an On-Demand table as DynamoDB is automatically scaling the table.</p>
 *                            </note>
 *                         </li>
 *                         <li>
 *                            <p>Throughput exceeds the current capacity for one or more global secondary indexes. DynamoDB is automatically scaling your index so
 *                               please try again shortly.</p>
 *                            <note>
 *                               <p>This message is returned when when writes get throttled on an On-Demand GSI as DynamoDB is automatically scaling the GSI.</p>
 *                            </note>
 *                         </li>
 *                      </ul>
 *
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Validation Error:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ValidationError</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages: </p>
 *                     <ul>
 *                         <li>
 *                            <p>One or more parameter values were invalid.</p>
 *                         </li>
 *                         <li>
 *                            <p>The update expression attempted to update the secondary index key beyond allowed size limits.</p>
 *                         </li>
 *                         <li>
 *                            <p>The update expression attempted to update the secondary index key to unsupported type.</p>
 *                         </li>
 *                         <li>
 *                            <p>An operand in the update expression has an incorrect data type.</p>
 *                         </li>
 *                         <li>
 *                            <p>Item size to update has exceeded the maximum allowed size.</p>
 *                         </li>
 *                         <li>
 *                            <p>Number overflow. Attempting to store a number with magnitude larger than supported range.</p>
 *                         </li>
 *                         <li>
 *                            <p>Type mismatch for attribute to update.</p>
 *                         </li>
 *                         <li>
 *                            <p>Nesting Levels have exceeded supported limits.</p>
 *                         </li>
 *                         <li>
 *                            <p>The document path provided in the update expression is invalid for update.</p>
 *                         </li>
 *                         <li>
 *                            <p>The provided expression refers to an attribute that does not exist in the item.</p>
 *                         </li>
 *                      </ul>
 *
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export interface TransactionCanceledException extends __SmithyException, $MetadataBearer {
  name: "TransactionCanceledException";
  $fault: "client";
  Message?: string;
  /**
   * <p>A list of cancellation reasons.</p>
   */
  CancellationReasons?: CancellationReason[];
}

export namespace TransactionCanceledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactionCanceledException): any => ({
    ...obj,
    ...(obj.CancellationReasons && {
      CancellationReasons: obj.CancellationReasons.map((item) => CancellationReason.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>Represents the input of a <code>BatchGetItem</code> operation.</p>
 */
export interface BatchGetItemInput {
  /**
   * <p>A map of one or more table names and, for each table, a map that describes one or more items to retrieve from that table. Each table name can be used only once per <code>BatchGetItem</code> request.</p>
   *          <p>Each element in the map of items to retrieve consists of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConsistentRead</code> - If <code>true</code>, a strongly consistent read is used; if
   *           <code>false</code> (the default), an eventually consistent read is used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ExpressionAttributeNames</code> - One or more substitution tokens for attribute names in the <code>ProjectionExpression</code> parameter. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p>
   *                   </li>
   *                   <li>
   *                      <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p>
   *                   </li>
   *                   <li>
   *                      <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p>
   *                   </li>
   *                </ul>
   *                <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Percentile</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>{"#P":"Percentile"}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>You could then use this substitution in an expression, as in this example:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>#P = :val</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p>
   *                </note>
   *                <p>For more information about expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB
   *                         Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Keys</code> - An array of primary key attribute values that define specific items in the
   *           table. For each primary key, you must provide <i>all</i> of the key attributes. For
   *           example, with a simple primary key, you only need to provide the partition key value. For a
   *           composite key, you must provide <i>both</i> the partition key value and the sort key value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ProjectionExpression</code> - A string that identifies one or more
   *                     attributes to retrieve from the table. These attributes can include scalars,
   *                     sets, or elements of a JSON document. The attributes in the expression must be
   *                     separated by commas.</p>
   *                 <p>If no attribute names are specified, then all attributes are returned. If any
   *                     of the requested attributes are not found, they do not appear in the
   *                     result.</p>
   *                <p>For more information, see
   *                     <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AttributesToGet</code> - This is a legacy parameter.  Use <code>ProjectionExpression</code> instead.  For more information, see
   *                     <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html">AttributesToGet</a> in the <i>Amazon DynamoDB Developer Guide</i>.
   *
   *             </p>
   *
   *             </li>
   *          </ul>
   */
  RequestItems: { [key: string]: KeysAndAttributes } | undefined;

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;
}

export namespace BatchGetItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetItemInput): any => ({
    ...obj,
    ...(obj.RequestItems && {
      RequestItems: Object.entries(obj.RequestItems).reduce(
        (acc: any, [key, value]: [string, KeysAndAttributes]) => ({
          ...acc,
          [key]: KeysAndAttributes.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents a condition to be compared with an attribute value. This condition can be
 *          used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code>
 *          operations; if the comparison evaluates to true, the operation succeeds; if not, the
 *          operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different
 *          ways:</p>
 *          <ul>
 *             <li>
 *                <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an
 *           attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the
 *           comparison. If the comparison evaluates to true, then the conditional operation
 *           succeeds.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the
 *           values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional
 *           operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that
 *           you <i>do not</i> expect to find the attribute value in the table. In this case, the
 *           conditional operation succeeds only if the comparison evaluates to false.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and
 *         <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will
 *       return a <code>ValidationException</code> exception.</p>
 */
export interface ExpectedAttributeValue {
  /**
   * <p>Represents the data for the expected attribute.</p>
   *          <p>Each attribute value is described as a name-value pair.  The name is the data type, and the value is the data itself.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the
   *          <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  Value?: AttributeValue;

  /**
   * <p>Causes DynamoDB to evaluate the value before attempting a conditional operation:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>Exists</code> is <code>true</code>, DynamoDB will check to see if that attribute value
   *           already exists in the table. If it is found, then the operation succeeds. If it is not
   *           found, the operation fails with a <code>ConditionCheckFailedException</code>.</p>
   *             </li>
   *             <li>
   *                <p>If <code>Exists</code> is <code>false</code>, DynamoDB assumes that the attribute value does
   *             not exist in the table. If in fact the value does not exist, then the assumption
   *           is valid and the operation succeeds. If the value is found, despite the assumption that it
   *           does not exist, the operation fails with a <code>ConditionCheckFailedException</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The default setting for <code>Exists</code> is <code>true</code>. If you supply a <code>Value</code> all
   *       by itself, DynamoDB assumes the attribute exists: You don't have to set <code>Exists</code> to
   *         <code>true</code>, because it is implied.</p>
   *          <p>DynamoDB returns a <code>ValidationException</code> if:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Exists</code> is <code>true</code> but there is no <code>Value</code> to check. (You expect a
   *           value to exist, but don't specify what that value is.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Exists</code> is <code>false</code> but you also provide a <code>Value</code>. (You cannot
   *           expect an attribute to have a value, while also expecting it not to exist.)</p>
   *             </li>
   *          </ul>
   */
  Exists?: boolean;

  /**
   * <p>A comparator for evaluating attributes in the <code>AttributeValueList</code>. For example, equals,
   *       greater than, less than, etc.</p>
   *          <p>The following comparison operators are available:</p>
   *          <p>
   *             <code>EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN</code>
   *          </p>
   *          <p>The following are descriptions of each comparison operator.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EQ</code> : Equal. <code>EQ</code> is supported for all data types, including lists and maps.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, Binary, String Set, Number Set, or Binary Set. If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not equal <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NE</code> : Not equal. <code>NE</code> is supported for all data types, including lists and maps.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String,
   *           Number, Binary, String Set, Number Set, or Binary Set. If an item contains an <code>AttributeValue</code> of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not equal <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LE</code> : Less than or equal. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code> : Less than. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String,
   *           Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GE</code> : Greater than or equal. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GT</code> : Greater than. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If an item contains an <code>AttributeValue</code> element of a different
   *           type than the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not equal <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>.</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_NULL</code> : The attribute exists. <code>NOT_NULL</code> is supported for all data types, including lists and maps.</p>
   *                <note>
   *                   <p>This operator tests for the existence of an attribute, not its data type.  If the data type of attribute "<code>a</code>" is null, and you evaluate it using <code>NOT_NULL</code>, the result is a Boolean <code>true</code>. This result is because the attribute "<code>a</code>" exists; its data type is not relevant to the <code>NOT_NULL</code> comparison operator.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NULL</code> : The attribute does not exist. <code>NULL</code> is supported for all data types, including lists and maps.</p>
   *                <note>
   *                   <p>This operator tests for the nonexistence of an attribute, not its data type.  If the data type of attribute "<code>a</code>" is null, and you evaluate it using <code>NULL</code>, the result is a Boolean <code>false</code>. This is because the attribute "<code>a</code>" exists; its data type is not relevant to the <code>NULL</code> comparison operator.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTAINS</code> : Checks for a subsequence, or value in a set.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then
   *           the operator checks for a substring match. If the target attribute of the comparison is
   *           of type Binary, then the operator looks for a subsequence of the target that matches the input.
   *           If the target attribute of the comparison is a set ("<code>SS</code>", "<code>NS</code>", or "<code>BS</code>"), then the
   *           operator evaluates to true if it finds an exact match with any member of the set.</p>
   *                <p>CONTAINS is supported for lists: When evaluating "<code>a CONTAINS b</code>", "<code>a</code>" can be a list; however, "<code>b</code>" cannot be a set, a map, or a list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CONTAINS</code> : Checks for absence of a subsequence, or absence of a value in
   *           a set.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> element of type String,
   *           Number, or Binary (not a set type). If the target attribute of the comparison is a String, then
   *           the operator checks for the absence of a substring match. If the target attribute of the
   *           comparison is Binary, then the operator checks for the absence of a subsequence of the
   *           target that matches the input. If the target attribute of the comparison is a set ("<code>SS</code>",
   *           "<code>NS</code>", or "<code>BS</code>"), then the operator evaluates to true if it <i>does not</i> find an exact match with any member of the set.</p>
   *                <p>NOT_CONTAINS is supported for lists: When evaluating "<code>a NOT CONTAINS b</code>", "<code>a</code>" can be a list; however, "<code>b</code>" cannot be a set, a map, or a list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BEGINS_WITH</code> : Checks for a prefix. </p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain only one <code>AttributeValue</code> of type String or
   *           Binary (not a Number or a set type). The target attribute of the comparison must be of type String or
   *           Binary (not a Number or a set type).</p>
   *                <p></p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN</code> : Checks for matching elements in a list.</p>
   *                <p>
   *                   <code>AttributeValueList</code> can contain one or more <code>AttributeValue</code>
   *                elements of type String, Number, or Binary. These attributes are compared against an
   *                existing attribute of an item. If any elements of the input are equal to the item
   *                attribute, the expression evaluates to true.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BETWEEN</code> : Greater than or equal to the first value, and less than or equal
   *           to the second value. </p>
   *                <p>
   *                   <code>AttributeValueList</code> must contain two <code>AttributeValue</code> elements of the same
   *           type, either String, Number, or Binary (not a set type). A target attribute matches if the
   *           target value is greater than, or equal to, the first element and less than, or equal to,
   *           the second element. If an item contains an <code>AttributeValue</code> element of a different type than
   *           the one provided in the request, the value does not match. For example,
   *             <code>{"S":"6"}</code> does not compare to <code>{"N":"6"}</code>. Also,
   *             <code>{"N":"6"}</code> does not compare to <code>{"NS":["6", "2", "1"]}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ComparisonOperator?: ComparisonOperator | string;

  /**
   * <p>One or more values to evaluate against the supplied attribute. The number of values in the
   *       list depends on the <code>ComparisonOperator</code> being used.</p>
   *          <p>For type Number, value comparisons are numeric.</p>
   *          <p>String value comparisons for greater than, equals, or less than are based on ASCII character
   *       code values. For example, <code>a</code> is greater than <code>A</code>, and <code>a</code>
   *       is greater than <code>B</code>. For a list of code values, see <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters">http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters</a>.</p>
   *          <p>For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values.</p>
   *          <p>For information on specifying data types in JSON, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataFormat.html">JSON Data Format</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  AttributeValueList?: AttributeValue[];
}

export namespace ExpectedAttributeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpectedAttributeValue): any => ({
    ...obj,
    ...(obj.Value && { Value: AttributeValue.filterSensitiveLog(obj.Value) }),
    ...(obj.AttributeValueList && {
      AttributeValueList: obj.AttributeValueList.map((item) => AttributeValue.filterSensitiveLog(item)),
    }),
  });
}

export interface TransactGetItemsInput {
  /**
   * <p>An ordered array of up to 25 <code>TransactGetItem</code> objects,
   *          each of which contains a <code>Get</code> structure.</p>
   */
  TransactItems: TransactGetItem[] | undefined;

  /**
   * <p>A value of <code>TOTAL</code> causes consumed capacity information
   *          to be returned, and a value of <code>NONE</code> prevents that information
   *          from being returned. No other value is valid.</p>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;
}

export namespace TransactGetItemsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactGetItemsInput): any => ({
    ...obj,
    ...(obj.TransactItems && {
      TransactItems: obj.TransactItems.map((item) => TransactGetItem.filterSensitiveLog(item)),
    }),
  });
}

export interface TransactWriteItemsOutput {
  /**
   * <p>The capacity units consumed by the entire <code>TransactWriteItems</code>
   *       operation. The values of the list are ordered according to
   *       the ordering of the <code>TransactItems</code> request parameter.
   *      </p>
   */
  ConsumedCapacity?: ConsumedCapacity[];

  /**
   * <p>A list of tables that were processed by <code>TransactWriteItems</code> and, for each
   *             table, information about any item collections that were affected by individual
   *                 <code>UpdateItem</code>, <code>PutItem</code>, or <code>DeleteItem</code>
   *             operations. </p>
   */
  ItemCollectionMetrics?: { [key: string]: ItemCollectionMetrics[] };
}

export namespace TransactWriteItemsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactWriteItemsOutput): any => ({
    ...obj,
    ...(obj.ItemCollectionMetrics && {
      ItemCollectionMetrics: Object.entries(obj.ItemCollectionMetrics).reduce(
        (acc: any, [key, value]: [string, ItemCollectionMetrics[]]) => ({
          ...acc,
          [key]: value.map((item) => ItemCollectionMetrics.filterSensitiveLog(item)),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents a request to perform a check that an item exists or to check the condition of
 *          specific attributes of the item.</p>
 */
export interface ConditionCheck {
  /**
   * <p>The primary key of the item to be checked. Each element consists of an
   *       attribute name and a value for that attribute.</p>
   */
  Key: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>Name of the table for the check item request.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A condition that must be satisfied in order for a conditional update to succeed.</p>
   */
  ConditionExpression: string | undefined;

  /**
   * <p>One or more substitution tokens for attribute names in an expression.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to
   *         get the item attributes if the <code>ConditionCheck</code> condition fails.
   *         For <code>ReturnValuesOnConditionCheckFailure</code>, the valid
   *         values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | string;
}

export namespace ConditionCheck {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConditionCheck): any => ({
    ...obj,
    ...(obj.Key && {
      Key: Object.entries(obj.Key).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents a request to perform a <code>DeleteItem</code> operation.</p>
 */
export interface Delete {
  /**
   * <p>The primary key of the item to be deleted. Each element consists of an
   *       attribute name and a value for that attribute.</p>
   */
  Key: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>Name of the table in which the item to be deleted resides.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A condition that must be satisfied in order for a conditional delete to succeed.</p>
   */
  ConditionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to
   *         get the item attributes if the <code>Delete</code> condition fails.
   *         For <code>ReturnValuesOnConditionCheckFailure</code>, the valid
   *         values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | string;
}

export namespace Delete {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Delete): any => ({
    ...obj,
    ...(obj.Key && {
      Key: Object.entries(obj.Key).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents a request to perform a <code>PutItem</code> operation.</p>
 */
export interface Put {
  /**
   * <p>A map of attribute name to attribute values, representing the primary key
   *         of the item to be written by <code>PutItem</code>. All of the table's primary key
   *         attributes must be specified, and their data types must match those of the table's
   *         key schema. If any attributes are present in the item that are part of an index
   *         key schema for the table, their types must match the index key schema. </p>
   */
  Item: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>Name of the table in which to write the item.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A condition that must be satisfied in order for a conditional update to succeed.</p>
   */
  ConditionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to
   *         get the item attributes if the <code>Put</code> condition fails.
   *         For <code>ReturnValuesOnConditionCheckFailure</code>, the valid
   *         values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | string;
}

export namespace Put {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Put): any => ({
    ...obj,
    ...(obj.Item && {
      Item: Object.entries(obj.Item).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents a request to perform an <code>UpdateItem</code> operation.</p>
 */
export interface Update {
  /**
   * <p>The primary key of the item to be updated. Each element consists of
   *       an attribute name and a value for that attribute.</p>
   */
  Key: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>An expression that defines one or more attributes to be updated,
   *       the action to be performed on them, and new value(s) for them.</p>
   */
  UpdateExpression: string | undefined;

  /**
   * <p>Name of the table for the <code>UpdateItem</code> request.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A condition that must be satisfied in order for a conditional update to
   *         succeed.</p>
   */
  ConditionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to
   *         get the item attributes if the <code>Update</code> condition fails.
   *         For <code>ReturnValuesOnConditionCheckFailure</code>, the valid
   *         values are: NONE, ALL_OLD, UPDATED_OLD, ALL_NEW, UPDATED_NEW.</p>
   */
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure | string;
}

export namespace Update {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Update): any => ({
    ...obj,
    ...(obj.Key && {
      Key: Object.entries(obj.Key).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the output of a <code>DeleteItem</code> operation.</p>
 */
export interface DeleteItemOutput {
  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects, representing the item as it
   *       appeared before the <code>DeleteItem</code> operation. This map appears in the response only if
   *         <code>ReturnValues</code> was specified as <code>ALL_OLD</code> in the request.</p>
   */
  Attributes?: { [key: string]: AttributeValue };

  /**
   * <p>The capacity units consumed by the <code>DeleteItem</code> operation. The data
   *             returned includes the total provisioned throughput consumed, along with statistics for
   *             the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is
   *             only returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For
   *             more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Mode</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ConsumedCapacity?: ConsumedCapacity;

  /**
   * <p>Information about item collections, if any, that were affected by the
   *                 <code>DeleteItem</code> operation.
   *                 <code>ItemCollectionMetrics</code> is only returned if the
   *                 <code>ReturnItemCollectionMetrics</code> parameter was specified. If the
   *             table does not have any local secondary indexes, this information is not returned in the
   *             response.</p>
   *          <p>Each <code>ItemCollectionMetrics</code>
   *         element consists of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ItemCollectionKey</code> - The partition key value of the item
   *           collection. This is the same as the partition key value of the item itself.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeEstimateRangeGB</code> - An estimate of item collection size,
   *           in gigabytes. This value is a two-element array
   *           containing a lower bound and an upper bound for the
   *           estimate. The estimate includes the size of all the
   *           items in the table, plus the size of all attributes
   *           projected into all of the local secondary indexes on that
   *           table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p>
   *                <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p>
   *             </li>
   *          </ul>
   */
  ItemCollectionMetrics?: ItemCollectionMetrics;
}

export namespace DeleteItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteItemOutput): any => ({
    ...obj,
    ...(obj.Attributes && {
      Attributes: Object.entries(obj.Attributes).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ItemCollectionMetrics && {
      ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics),
    }),
  });
}

/**
 * <p>Represents the output of a <code>PutItem</code> operation.</p>
 */
export interface PutItemOutput {
  /**
   * <p>The attribute values as they appeared before the <code>PutItem</code> operation, but only if
   *         <code>ReturnValues</code> is specified as <code>ALL_OLD</code> in the request. Each element
   *       consists of an attribute name and an attribute value.</p>
   */
  Attributes?: { [key: string]: AttributeValue };

  /**
   * <p>The capacity units consumed by the <code>PutItem</code> operation. The data returned
   *             includes the total provisioned throughput consumed, along with statistics for the table
   *             and any indexes involved in the operation. <code>ConsumedCapacity</code> is only
   *             returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more
   *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Read/Write Capacity Mode</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ConsumedCapacity?: ConsumedCapacity;

  /**
   * <p>Information about item collections, if any, that were affected by the
   *                 <code>PutItem</code> operation. <code>ItemCollectionMetrics</code>
   *             is only returned if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the table does not have any local
   *             secondary indexes, this information is not returned in the response.</p>
   *          <p>Each <code>ItemCollectionMetrics</code>
   *         element consists of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ItemCollectionKey</code> - The partition key value of the item
   *           collection. This is the same as the partition key value of the item itself.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeEstimateRangeGB</code> - An estimate of item collection size,
   *           in gigabytes. This value is a two-element array
   *           containing a lower bound and an upper bound for the
   *           estimate. The estimate includes the size of all the
   *           items in the table, plus the size of all attributes
   *           projected into all of the local secondary indexes on that
   *           table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p>
   *                <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p>
   *             </li>
   *          </ul>
   */
  ItemCollectionMetrics?: ItemCollectionMetrics;
}

export namespace PutItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutItemOutput): any => ({
    ...obj,
    ...(obj.Attributes && {
      Attributes: Object.entries(obj.Attributes).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ItemCollectionMetrics && {
      ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics),
    }),
  });
}

/**
 * <p>Represents the output of a <code>Query</code> operation.</p>
 */
export interface QueryOutput {
  /**
   * <p>An array of item attributes that match the query criteria. Each element in this array consists of an attribute name and the value for that attribute.</p>
   */
  Items?: { [key: string]: AttributeValue }[];

  /**
   * <p>The number of items in the response.</p>
   *          <p>If you used a <code>QueryFilter</code> in the request, then <code>Count</code> is the number of items
   *       returned after the filter was applied, and <code>ScannedCount</code> is the number of
   *       matching items before the filter was applied.</p>
   *          <p>If you did not use a filter in the request, then <code>Count</code> and <code>ScannedCount</code> are the
   *       same.</p>
   */
  Count?: number;

  /**
   * <p>The number of items evaluated, before any <code>QueryFilter</code> is applied. A high
   *         <code>ScannedCount</code> value with few, or no, <code>Count</code> results indicates an inefficient
   *         <code>Query</code> operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count">Count and ScannedCount</a> in the
   *       <i>Amazon DynamoDB Developer Guide</i>.</p>
   *          <p>If you did not use a filter in the request, then <code>ScannedCount</code> is the same as
   *         <code>Count</code>.</p>
   */
  ScannedCount?: number;

  /**
   * <p>The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request.</p>
   *          <p>If <code>LastEvaluatedKey</code> is empty, then the "last page" of results has been processed and there is no more data to be retrieved.</p>
   *          <p>If <code>LastEvaluatedKey</code> is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when <code>LastEvaluatedKey</code> is empty.</p>
   */
  LastEvaluatedKey?: { [key: string]: AttributeValue };

  /**
   * <p>The capacity units consumed by the <code>Query</code> operation. The data returned
   *             includes the total provisioned throughput consumed, along with statistics for the table
   *             and any indexes involved in the operation. <code>ConsumedCapacity</code> is only
   *             returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more
   *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ConsumedCapacity?: ConsumedCapacity;
}

export namespace QueryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryOutput): any => ({
    ...obj,
    ...(obj.Items && {
      Items: obj.Items.map((item) =>
        Object.entries(item).reduce(
          (acc: any, [key, value]: [string, AttributeValue]) => ({
            ...acc,
            [key]: AttributeValue.filterSensitiveLog(value),
          }),
          {}
        )
      ),
    }),
    ...(obj.LastEvaluatedKey && {
      LastEvaluatedKey: Object.entries(obj.LastEvaluatedKey).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the output of a <code>Scan</code> operation.</p>
 */
export interface ScanOutput {
  /**
   * <p>An array of item attributes that match the scan criteria. Each element in this array consists of an attribute name and the value for that attribute.</p>
   */
  Items?: { [key: string]: AttributeValue }[];

  /**
   * <p>The number of items in the response.</p>
   *          <p>If you set <code>ScanFilter</code> in the request, then <code>Count</code> is the number of items
   *       returned after the filter was applied, and <code>ScannedCount</code> is the number of matching items
   *       before the filter was applied.</p>
   *          <p>If you did not use a filter in the request, then <code>Count</code> is the same as
   *         <code>ScannedCount</code>.</p>
   */
  Count?: number;

  /**
   * <p>The number of items evaluated, before any <code>ScanFilter</code> is applied. A high
   *         <code>ScannedCount</code> value with few, or no, <code>Count</code> results indicates an inefficient
   *         <code>Scan</code> operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count">Count and ScannedCount</a> in the
   *         <i>Amazon DynamoDB Developer Guide</i>.</p>
   *          <p>If you did not use a filter in the request, then <code>ScannedCount</code> is the same as
   *         <code>Count</code>.</p>
   */
  ScannedCount?: number;

  /**
   * <p>The primary key of the item where the operation stopped, inclusive of the previous
   *             result set. Use this value to start a new operation, excluding this value in the new
   *             request.</p>
   *         <p>If <code>LastEvaluatedKey</code> is empty, then the "last page" of results
   *             has been processed and there is no more data to be retrieved.</p>
   *         <p>If <code>LastEvaluatedKey</code> is not empty, it does not necessarily mean
   *             that there is more data in the result set. The only way to know when you have reached
   *             the end of the result set is when <code>LastEvaluatedKey</code> is
   *             empty.</p>
   */
  LastEvaluatedKey?: { [key: string]: AttributeValue };

  /**
   * <p>The capacity units consumed by the <code>Scan</code> operation. The data returned includes the total
   *             provisioned throughput consumed, along with statistics for the table and any indexes involved
   *             in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified.
   *             For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned
   *                 Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConsumedCapacity?: ConsumedCapacity;
}

export namespace ScanOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScanOutput): any => ({
    ...obj,
    ...(obj.Items && {
      Items: obj.Items.map((item) =>
        Object.entries(item).reduce(
          (acc: any, [key, value]: [string, AttributeValue]) => ({
            ...acc,
            [key]: AttributeValue.filterSensitiveLog(value),
          }),
          {}
        )
      ),
    }),
    ...(obj.LastEvaluatedKey && {
      LastEvaluatedKey: Object.entries(obj.LastEvaluatedKey).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the output of an <code>UpdateItem</code> operation.</p>
 */
export interface UpdateItemOutput {
  /**
   * <p>A map of attribute values as they appear before or after the <code>UpdateItem</code>
   *             operation, as determined by the <code>ReturnValues</code> parameter.</p>
   *         <p>The <code>Attributes</code> map is only present if <code>ReturnValues</code> was
   *             specified as something other than <code>NONE</code> in the request. Each element
   *             represents one attribute.</p>
   */
  Attributes?: { [key: string]: AttributeValue };

  /**
   * <p>The capacity units consumed by the <code>UpdateItem</code> operation. The data returned includes the total
   *             provisioned throughput consumed, along with statistics for the table and any indexes involved
   *             in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified.
   *             For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned
   *                 Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConsumedCapacity?: ConsumedCapacity;

  /**
   * <p>Information about item collections, if any, that were affected by the
   *             <code>UpdateItem</code> operation.
   *             <code>ItemCollectionMetrics</code> is only returned if the <code>ReturnItemCollectionMetrics</code> parameter was specified. If the table
   *             does not have any local secondary indexes, this information is not
   *             returned in the response.</p>
   *         <p>Each <code>ItemCollectionMetrics</code>
   *             element consists of:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>ItemCollectionKey</code> - The partition key value of the item
   *                     collection. This is the same as the partition key value of the item itself.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SizeEstimateRangeGB</code> - An estimate of item collection size,
   *                     in gigabytes. This value is a two-element array
   *                     containing a lower bound and an upper bound for the
   *                     estimate. The estimate includes the size of all the
   *                     items in the table, plus the size of all attributes
   *                     projected into all of the local secondary indexes on that
   *                     table. Use this estimate to measure whether a local secondary index is approaching its size limit.</p>
   *                 <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p>
   *             </li>
   *          </ul>
   */
  ItemCollectionMetrics?: ItemCollectionMetrics;
}

export namespace UpdateItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateItemOutput): any => ({
    ...obj,
    ...(obj.Attributes && {
      Attributes: Object.entries(obj.Attributes).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ItemCollectionMetrics && {
      ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics),
    }),
  });
}

/**
 * <p>Represents an operation to perform - either <code>DeleteItem</code> or
 *             <code>PutItem</code>. You can only request one of these operations, not both, in a
 *          single <code>WriteRequest</code>. If you do need to perform both of these operations, you
 *          need to provide two separate <code>WriteRequest</code> objects.</p>
 */
export interface WriteRequest {
  /**
   * <p>A request to perform a <code>PutItem</code> operation.</p>
   */
  PutRequest?: PutRequest;

  /**
   * <p>A request to perform a <code>DeleteItem</code> operation.</p>
   */
  DeleteRequest?: DeleteRequest;
}

export namespace WriteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteRequest): any => ({
    ...obj,
    ...(obj.PutRequest && { PutRequest: PutRequest.filterSensitiveLog(obj.PutRequest) }),
    ...(obj.DeleteRequest && { DeleteRequest: DeleteRequest.filterSensitiveLog(obj.DeleteRequest) }),
  });
}

/**
 * <p>Represents the output of a <code>BatchGetItem</code> operation.</p>
 */
export interface BatchGetItemOutput {
  /**
   * <p>A map of table name to a list of items. Each object in <code>Responses</code> consists of a table
   *       name, along with a map of attribute data consisting of the data type and attribute value.</p>
   */
  Responses?: { [key: string]: { [key: string]: AttributeValue }[] };

  /**
   * <p>A map of tables and their respective keys that were not processed with the current response.
   *       The <code>UnprocessedKeys</code> value is in the same form as <code>RequestItems</code>, so the value can
   *       be provided directly to a subsequent <code>BatchGetItem</code> operation. For more information, see
   *         <code>RequestItems</code> in the Request Parameters section.</p>
   *          <p>Each element consists of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Keys</code> - An array of primary key attribute values that define specific items in the
   *           table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>ProjectionExpression</code> - One or more attributes to be
   *                     retrieved from the table or index. By default, all attributes are returned. If a
   *                     requested attribute is not found, it does not appear in the result.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConsistentRead</code> - The consistency of a read operation. If set to <code>true</code>,
   *           then a strongly consistent read is used; otherwise, an eventually consistent read is
   *           used.</p>
   *             </li>
   *          </ul>
   *          <p>If there are no unprocessed keys remaining, the response contains an empty
   *         <code>UnprocessedKeys</code> map.</p>
   */
  UnprocessedKeys?: { [key: string]: KeysAndAttributes };

  /**
   * <p>The read capacity units consumed by the entire <code>BatchGetItem</code> operation.</p>
   *          <p>Each element consists of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TableName</code> - The table that consumed the provisioned throughput.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CapacityUnits</code> - The total number of capacity units consumed.</p>
   *             </li>
   *          </ul>
   */
  ConsumedCapacity?: ConsumedCapacity[];
}

export namespace BatchGetItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetItemOutput): any => ({
    ...obj,
    ...(obj.Responses && {
      Responses: Object.entries(obj.Responses).reduce(
        (acc: any, [key, value]: [string, { [key: string]: AttributeValue }[]]) => ({
          ...acc,
          [key]: value.map((item) =>
            Object.entries(item).reduce(
              (acc: any, [key, value]: [string, AttributeValue]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
              }),
              {}
            )
          ),
        }),
        {}
      ),
    }),
    ...(obj.UnprocessedKeys && {
      UnprocessedKeys: Object.entries(obj.UnprocessedKeys).reduce(
        (acc: any, [key, value]: [string, KeysAndAttributes]) => ({
          ...acc,
          [key]: KeysAndAttributes.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the input of a <code>Scan</code> operation.</p>
 */
export interface ScanInput {
  /**
   * <p>The name of the table containing the requested items; or, if you provide
   *             <code>IndexName</code>, the name of the table to which that index belongs.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of a secondary index to scan. This index can be any local secondary index or global secondary index.  Note that if you use the <code>IndexName</code> parameter, you must also provide <code>TableName</code>.</p>
   */
  IndexName?: string;

  /**
   * <p>This is a legacy parameter.  Use <code>ProjectionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html">AttributesToGet</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  AttributesToGet?: string[];

  /**
   * <p>The maximum number of items to evaluate (not necessarily the number of matching items).
   *             If DynamoDB processes the number of items up to the limit while processing the results,
   *             it stops the operation and returns the matching values up to that point, and a key in
   *                 <code>LastEvaluatedKey</code> to apply in a subsequent operation, so that you can
   *             pick up where you left off. Also, if the processed dataset size exceeds 1 MB before
   *             DynamoDB reaches this limit, it stops the operation and returns the matching values up
   *             to the limit, and a key in <code>LastEvaluatedKey</code> to apply in a subsequent
   *             operation to continue the operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html">Working with Queries</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  Limit?: number;

  /**
   * <p>The attributes to be returned in the
   *             result. You can retrieve all item attributes, specific item attributes, the count of
   *             matching items, or in the case of an index, some or all of the attributes projected into
   *             the index.</p>
   *          <ul>
   *             <li>
   *               <p>
   *                     <code>ALL_ATTRIBUTES</code> - Returns all of the item attributes from the
   *                     specified table or index. If you query a local secondary index, then for each
   *                     matching item in the index, DynamoDB fetches the entire item from the parent
   *                     table. If the index is configured to project all item attributes, then all of
   *                     the data can be obtained from the local secondary index, and no fetching is
   *                     required.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>ALL_PROJECTED_ATTRIBUTES</code> - Allowed only when querying an index.
   *                   Retrieves all attributes that have been projected into the index. If the
   *                   index is configured to project all attributes, this return value is
   *                   equivalent to specifying <code>ALL_ATTRIBUTES</code>.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>COUNT</code> - Returns the number of matching items, rather than the
   *                   matching items themselves.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>SPECIFIC_ATTRIBUTES</code> - Returns only the attributes listed in
   *                   <code>AttributesToGet</code>. This return value is equivalent to
   *                   specifying <code>AttributesToGet</code> without specifying any value
   *                   for <code>Select</code>.</p>
   *               <p>If you query or scan a local secondary index and request only attributes that
   *                     are projected into that index, the operation reads only the index and not the
   *                     table. If any of the requested attributes are not projected into the local
   *                     secondary index, DynamoDB fetches each of these attributes from the parent
   *                     table. This extra fetching incurs additional throughput cost and latency.</p>
   *               <p>If you query or scan a global secondary index, you can only request
   *                   attributes that are projected into the index. Global secondary index queries
   *                   cannot fetch attributes from the parent table.</p>
   *             </li>
   *          </ul>
   *          <p>If neither <code>Select</code> nor <code>AttributesToGet</code>
   *           are specified, DynamoDB defaults to <code>ALL_ATTRIBUTES</code> when accessing a
   *           table, and <code>ALL_PROJECTED_ATTRIBUTES</code> when accessing an index. You cannot
   *           use both <code>Select</code> and <code>AttributesToGet</code>
   *           together in a single request, unless the value for <code>Select</code> is
   *           <code>SPECIFIC_ATTRIBUTES</code>. (This usage is equivalent to specifying
   *           <code>AttributesToGet</code> without any value for
   *           <code>Select</code>.)</p>
   *          <note>
   *             <p>If you use the <code>ProjectionExpression</code> parameter, then
   *               the value for <code>Select</code> can only be
   *               <code>SPECIFIC_ATTRIBUTES</code>. Any other value for
   *               <code>Select</code> will return an error.</p>
   *          </note>
   */
  Select?: Select | string;

  /**
   * <p>This is a legacy parameter.  Use <code>FilterExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ScanFilter.html">ScanFilter</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ScanFilter?: { [key: string]: Condition };

  /**
   * <p>This is a legacy parameter.  Use <code>FilterExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConditionalOperator?: ConditionalOperator | string;

  /**
   * <p>The primary key of the first item that this operation will evaluate. Use the value that was returned for <code>LastEvaluatedKey</code> in the previous operation.</p>
   *          <p>The data type for <code>ExclusiveStartKey</code> must be String, Number or Binary. No set data types are allowed.</p>
   *          <p>In a parallel scan, a
   *         <code>Scan</code> request that includes <code>ExclusiveStartKey</code> must specify the same segment
   *       whose previous <code>Scan</code> returned the corresponding value of <code>LastEvaluatedKey</code>.</p>
   */
  ExclusiveStartKey?: { [key: string]: AttributeValue };

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>For a parallel <code>Scan</code> request, <code>TotalSegments</code> represents the total number of
   *       segments into which the <code>Scan</code> operation will be divided. The value of
   *         <code>TotalSegments</code> corresponds to the number of application workers that will perform the
   *       parallel scan. For example, if you want to use four application threads to scan a table or an index,
   *       specify a <code>TotalSegments</code> value of 4.</p>
   *          <p>The value for <code>TotalSegments</code> must be greater than or equal to 1, and less than or equal
   *       to 1000000. If you specify a <code>TotalSegments</code> value of 1, the <code>Scan</code> operation will
   *       be sequential rather than parallel.</p>
   *          <p>If you specify <code>TotalSegments</code>, you must also specify <code>Segment</code>.</p>
   */
  TotalSegments?: number;

  /**
   * <p>For a parallel <code>Scan</code> request, <code>Segment</code> identifies an individual segment to be
   *       scanned by an application worker.</p>
   *          <p>Segment IDs are zero-based, so the first segment is always 0. For example, if you want to
   *       use four application threads to scan a table or an index, then the first thread specifies a <code>Segment</code> value
   *       of 0, the second thread specifies 1, and so on.</p>
   *          <p>The value of <code>LastEvaluatedKey</code> returned from a parallel <code>Scan</code> request must be
   *       used as <code>ExclusiveStartKey</code> with the same segment ID in a subsequent <code>Scan</code>
   *       operation.</p>
   *          <p>The value for <code>Segment</code> must be greater than or equal to 0, and less than the value
   *       provided for <code>TotalSegments</code>.</p>
   *          <p>If you provide <code>Segment</code>, you must also provide <code>TotalSegments</code>.</p>
   */
  Segment?: number;

  /**
   * <p>A string that identifies one or more attributes to retrieve from the specified table or index. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.</p>
   *          <p>If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ProjectionExpression?: string;

  /**
   * <p>A string that contains conditions that DynamoDB applies after the <code>Scan</code> operation, but
   *        before the data is returned to you. Items that do not satisfy the <code>FilterExpression</code>
   *        criteria are not returned.</p>
   *          <note>
   *             <p>A <code>FilterExpression</code> is applied after the items have already been read; the process of
   *          filtering does not consume any additional read capacity units.</p>
   *          </note>
   *          <p>For more information, see
   *        <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#FilteringResults">Filter Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  FilterExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p>
   *             </li>
   *             <li>
   *                <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p>
   *             </li>
   *             <li>
   *                <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p>
   *             </li>
   *          </ul>
   *          <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Percentile</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>{"#P":"Percentile"}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You could then use this substitution in an expression, as in this example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#P = :val</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p>
   *          </note>
   *          <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   *          <p>Use the <b>:</b> (colon) character in an expression to
   *             dereference an attribute value. For example, suppose that you wanted to check whether
   *             the value of the <code>ProductStatus</code> attribute was one of the following: </p>
   *          <p>
   *             <code>Available | Backordered | Discontinued</code>
   *          </p>
   *          <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p>
   *          <p>
   *             <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code>
   *          </p>
   *          <p>You could then use these values in an expression, such as this:</p>
   *          <p>
   *             <code>ProductStatus IN (:avail, :back, :disc)</code>
   *          </p>
   *         <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };

  /**
   * <p>A Boolean value that determines the read consistency model during the scan:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>ConsistentRead</code> is <code>false</code>, then the data returned from
   *                         <code>Scan</code> might not contain the results from other recently
   *                     completed write operations (<code>PutItem</code>, <code>UpdateItem</code>, or
   *                         <code>DeleteItem</code>).</p>
   *             </li>
   *             <li>
   *                <p>If <code>ConsistentRead</code> is <code>true</code>, then all of the write operations that completed before the <code>Scan</code> began are guaranteed to be contained in the <code>Scan</code> response.</p>
   *             </li>
   *          </ul>
   *          <p>The default setting for <code>ConsistentRead</code> is <code>false</code>.</p>
   *          <p>The <code>ConsistentRead</code> parameter is not supported on global secondary indexes. If you scan a global secondary index with <code>ConsistentRead</code> set to true, you will receive a <code>ValidationException</code>.</p>
   */
  ConsistentRead?: boolean;
}

export namespace ScanInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScanInput): any => ({
    ...obj,
    ...(obj.ScanFilter && {
      ScanFilter: Object.entries(obj.ScanFilter).reduce(
        (acc: any, [key, value]: [string, Condition]) => ({
          ...acc,
          [key]: Condition.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExclusiveStartKey && {
      ExclusiveStartKey: Object.entries(obj.ExclusiveStartKey).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the input of a <code>BatchWriteItem</code> operation.</p>
 */
export interface BatchWriteItemInput {
  /**
   * <p>A map of one or more table names and, for each table, a list of operations to be performed
   *         (<code>DeleteRequest</code> or <code>PutRequest</code>). Each element in the map consists of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DeleteRequest</code> - Perform a <code>DeleteItem</code> operation on the specified item. The
   *           item to be deleted is identified by a <code>Key</code> subelement:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Key</code> - A map of primary key attribute values that uniquely identify the item.
   *                      Each entry in this map consists of an attribute name and an attribute value. For each
   *                      primary key, you must provide <i>all</i> of the key attributes. For example, with a
   *                      simple primary key, you only need to provide a value for the partition key. For a
   *                      composite primary key, you must provide values for <i>both</i> the partition key and the sort key.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PutRequest</code> - Perform a <code>PutItem</code> operation on the specified item. The item to
   *           be put is identified by an <code>Item</code> subelement:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                             <code>Item</code> - A map of attributes and their values. Each entry in
   *                             this map consists of an attribute name and an attribute value. Attribute
   *                             values must not be null; string and binary type attributes must have
   *                             lengths greater than zero; and set type attributes must not be empty.
   *                             Requests that contain empty values are rejected with a
   *                                 <code>ValidationException</code> exception.</p>
   *                      <p>If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  RequestItems: { [key: string]: WriteRequest[] } | undefined;

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>Determines whether item collection metrics are returned.  If set to <code>SIZE</code>, the response includes statistics about item collections, if any, that were modified during
   *       the operation are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned.</p>
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | string;
}

export namespace BatchWriteItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchWriteItemInput): any => ({
    ...obj,
    ...(obj.RequestItems && {
      RequestItems: Object.entries(obj.RequestItems).reduce(
        (acc: any, [key, value]: [string, WriteRequest[]]) => ({
          ...acc,
          [key]: value.map((item) => WriteRequest.filterSensitiveLog(item)),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the input of a <code>DeleteItem</code> operation.</p>
 */
export interface DeleteItemInput {
  /**
   * <p>The name of the table from which to delete the item.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects, representing the primary key of
   *       the item to delete.</p>
   *          <p>For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.</p>
   */
  Key: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html">Expected</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  Expected?: { [key: string]: ExpectedAttributeValue };

  /**
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConditionalOperator?: ConditionalOperator | string;

  /**
   * <p>Use <code>ReturnValues</code> if you want to get the item attributes as they appeared before they
   *       were deleted. For <code>DeleteItem</code>, the valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - If <code>ReturnValues</code> is not specified, or if its value is
   *             <code>NONE</code>, then nothing is returned. (This setting is the default for
   *             <code>ReturnValues</code>.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_OLD</code> - The content of the old item is returned.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>ReturnValues</code> parameter is used by several DynamoDB operations; however,
   *         <code>DeleteItem</code> does not recognize any values other than <code>NONE</code> or
   *         <code>ALL_OLD</code>.</p>
   *          </note>
   */
  ReturnValues?: ReturnValue | string;

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>Determines whether item collection metrics are returned.  If set to <code>SIZE</code>, the response includes statistics about item collections, if any, that were modified during
   *       the operation are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned.</p>
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | string;

  /**
   * <p>A condition that must be satisfied in order for a conditional <code>DeleteItem</code> to
   *       succeed.</p>
   *          <p>An expression can contain any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Functions: <code>attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size</code>
   *                </p>
   *                <p>These function names are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Comparison operators: <code>= | <> |
   *             < | > | <= | >= |
   *             BETWEEN | IN </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p> Logical operators: <code>AND | OR | NOT</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about condition expressions, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ConditionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p>
   *             </li>
   *             <li>
   *                <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p>
   *             </li>
   *             <li>
   *                <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p>
   *             </li>
   *          </ul>
   *          <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Percentile</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>{"#P":"Percentile"}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You could then use this substitution in an expression, as in this example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#P = :val</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p>
   *          </note>
   *          <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   *          <p>Use the <b>:</b> (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the <i>ProductStatus</i> attribute was one of the following: </p>
   *          <p>
   *             <code>Available | Backordered | Discontinued</code>
   *          </p>
   *          <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p>
   *          <p>
   *             <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code>
   *          </p>
   *          <p>You could then use these values in an expression, such as this:</p>
   *          <p>
   *             <code>ProductStatus IN (:avail, :back, :disc)</code>
   *          </p>
   *         <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };
}

export namespace DeleteItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteItemInput): any => ({
    ...obj,
    ...(obj.Key && {
      Key: Object.entries(obj.Key).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.Expected && {
      Expected: Object.entries(obj.Expected).reduce(
        (acc: any, [key, value]: [string, ExpectedAttributeValue]) => ({
          ...acc,
          [key]: ExpectedAttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the input of a <code>PutItem</code> operation.</p>
 */
export interface PutItemInput {
  /**
   * <p>The name of the table to contain the item.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item.</p>
   *          <p>You must provide all of the attributes for the primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide both values for both the partition key and the sort key.</p>
   *          <p>If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.</p>
   *          <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index.</p>
   *
   *          <p>For more information about primary keys, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey">Primary Key</a> in the <i>Amazon DynamoDB Developer
   *             Guide</i>.</p>
   *          <p>Each element in the <code>Item</code> map is an <code>AttributeValue</code> object.</p>
   */
  Item: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html">Expected</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  Expected?: { [key: string]: ExpectedAttributeValue };

  /**
   * <p>Use <code>ReturnValues</code> if you want to get the item attributes as they appeared before they
   *       were updated with the <code>PutItem</code> request. For <code>PutItem</code>, the valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - If <code>ReturnValues</code> is not specified, or if its value is
   *             <code>NONE</code>, then nothing is returned. (This setting is the default for
   *             <code>ReturnValues</code>.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_OLD</code> - If <code>PutItem</code> overwrote an attribute name-value pair, then the
   *           content of the old item is returned.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>ReturnValues</code> parameter is used by several DynamoDB operations; however,
   *           <code>PutItem</code> does not recognize any values other than <code>NONE</code> or
   *           <code>ALL_OLD</code>.</p>
   *          </note>
   */
  ReturnValues?: ReturnValue | string;

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>Determines whether item collection metrics are returned.  If set to <code>SIZE</code>, the response includes statistics about item collections, if any, that were modified during
   *       the operation are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned.</p>
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | string;

  /**
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConditionalOperator?: ConditionalOperator | string;

  /**
   * <p>A condition that must be satisfied in order for a conditional <code>PutItem</code> operation to
   *       succeed.</p>
   *          <p>An expression can contain any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Functions: <code>attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size</code>
   *                </p>
   *                <p>These function names are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Comparison operators: <code>= | <> |
   *             < | > | <= | >= |
   *             BETWEEN | IN </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p> Logical operators: <code>AND | OR | NOT</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information on condition expressions, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ConditionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p>
   *             </li>
   *             <li>
   *                <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p>
   *             </li>
   *             <li>
   *                <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p>
   *             </li>
   *          </ul>
   *          <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Percentile</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>{"#P":"Percentile"}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You could then use this substitution in an expression, as in this example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#P = :val</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p>
   *          </note>
   *          <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   *          <p>Use the <b>:</b> (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the <i>ProductStatus</i> attribute was one of the following: </p>
   *          <p>
   *             <code>Available | Backordered | Discontinued</code>
   *          </p>
   *          <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p>
   *          <p>
   *             <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code>
   *          </p>
   *          <p>You could then use these values in an expression, such as this:</p>
   *          <p>
   *             <code>ProductStatus IN (:avail, :back, :disc)</code>
   *          </p>
   *         <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };
}

export namespace PutItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutItemInput): any => ({
    ...obj,
    ...(obj.Item && {
      Item: Object.entries(obj.Item).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.Expected && {
      Expected: Object.entries(obj.Expected).reduce(
        (acc: any, [key, value]: [string, ExpectedAttributeValue]) => ({
          ...acc,
          [key]: ExpectedAttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the input of a <code>Query</code> operation.</p>
 */
export interface QueryInput {
  /**
   * <p>The name of the table containing the requested items.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of an index to query. This index can be any local secondary index or global secondary index on the table. Note that
   *        if you use the <code>IndexName</code> parameter, you must also provide <code>TableName.</code>
   *          </p>
   */
  IndexName?: string;

  /**
   * <p>The attributes to be returned in the
   *           result. You can retrieve all item attributes, specific item attributes, the count of
   *           matching items, or in the case of an index, some or all of the attributes projected into
   *           the index.</p>
   *          <ul>
   *             <li>
   *               <p>
   *                     <code>ALL_ATTRIBUTES</code> - Returns all of the item attributes from the
   *                     specified table or index. If you query a local secondary index, then for each
   *                     matching item in the index, DynamoDB fetches the entire item from the parent
   *                     table. If the index is configured to project all item attributes, then all of
   *                     the data can be obtained from the local secondary index, and no fetching is
   *                     required.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>ALL_PROJECTED_ATTRIBUTES</code> - Allowed only when querying an index.
   *                   Retrieves all attributes that have been projected into the index. If the
   *                   index is configured to project all attributes, this return value is
   *                   equivalent to specifying <code>ALL_ATTRIBUTES</code>.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>COUNT</code> - Returns the number of matching items, rather than the
   *                   matching items themselves.</p>
   *             </li>
   *             <li>
   *               <p>
   *                   <code>SPECIFIC_ATTRIBUTES</code> - Returns only the attributes listed in
   *                   <code>AttributesToGet</code>. This return value is equivalent to
   *                   specifying <code>AttributesToGet</code> without specifying any value
   *                   for <code>Select</code>.</p>
   *               <p>If you query or scan a local secondary index and request only attributes that
   *                     are projected into that index, the operation will read only the index and not
   *                     the table. If any of the requested attributes are not projected into the local
   *                     secondary index, DynamoDB fetches each of these attributes from the parent
   *                     table. This extra fetching incurs additional throughput cost and latency.</p>
   *               <p>If you query or scan a global secondary index, you can only request
   *                   attributes that are projected into the index. Global secondary index queries
   *                   cannot fetch attributes from the parent table.</p>
   *             </li>
   *          </ul>
   *          <p>If neither <code>Select</code> nor <code>AttributesToGet</code>
   *           are specified, DynamoDB defaults to <code>ALL_ATTRIBUTES</code> when accessing a
   *           table, and <code>ALL_PROJECTED_ATTRIBUTES</code> when accessing an index. You cannot
   *           use both <code>Select</code> and <code>AttributesToGet</code>
   *           together in a single request, unless the value for <code>Select</code> is
   *           <code>SPECIFIC_ATTRIBUTES</code>. (This usage is equivalent to specifying
   *           <code>AttributesToGet</code> without any value for
   *           <code>Select</code>.)</p>
   *          <note>
   *             <p>If you use the <code>ProjectionExpression</code> parameter, then
   *               the value for <code>Select</code> can only be
   *               <code>SPECIFIC_ATTRIBUTES</code>. Any other value for
   *               <code>Select</code> will return an error.</p>
   *          </note>
   */
  Select?: Select | string;

  /**
   * <p>This is a legacy parameter.  Use <code>ProjectionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html">AttributesToGet</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  AttributesToGet?: string[];

  /**
   * <p>The maximum number of items to evaluate (not necessarily the number of matching items).
   *             If DynamoDB processes the number of items up to the limit while processing the results,
   *             it stops the operation and returns the matching values up to that point, and a key in
   *                 <code>LastEvaluatedKey</code> to apply in a subsequent operation, so that you can
   *             pick up where you left off. Also, if the processed dataset size exceeds 1 MB before
   *             DynamoDB reaches this limit, it stops the operation and returns the matching values up
   *             to the limit, and a key in <code>LastEvaluatedKey</code> to apply in a subsequent
   *             operation to continue the operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html">Query and Scan</a> in the <i>Amazon DynamoDB Developer
   *             Guide</i>.</p>
   */
  Limit?: number;

  /**
   * <p>Determines the read consistency model:  If set to <code>true</code>, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.</p>
   *          <p>Strongly consistent reads
   *       are not supported on global secondary indexes. If you query a global secondary index with <code>ConsistentRead</code> set to
   *     <code>true</code>, you will receive a <code>ValidationException</code>.</p>
   */
  ConsistentRead?: boolean;

  /**
   * <p>This is a legacy parameter.  Use <code>KeyConditionExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.KeyConditions.html">KeyConditions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  KeyConditions?: { [key: string]: Condition };

  /**
   * <p>This is a legacy parameter.  Use <code>FilterExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.QueryFilter.html">QueryFilter</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  QueryFilter?: { [key: string]: Condition };

  /**
   * <p>This is a legacy parameter.  Use <code>FilterExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConditionalOperator?: ConditionalOperator | string;

  /**
   * <p>Specifies the order for index traversal: If <code>true</code> (default), the traversal is performed in ascending order; if <code>false</code>, the traversal is performed in descending order. </p>
   *          <p>Items with the same partition key value are stored in sorted order by sort key. If the sort key data type is Number, the results are stored in numeric order. For type String, the results are stored in order of UTF-8 bytes. For type Binary, DynamoDB treats each byte of the binary data as unsigned.</p>
   *          <p>If <code>ScanIndexForward</code> is <code>true</code>, DynamoDB returns the results in the order in which they are stored (by sort key value). This is the default behavior. If <code>ScanIndexForward</code> is <code>false</code>, DynamoDB reads the results in reverse order by sort key value, and then returns the results to the client.</p>
   */
  ScanIndexForward?: boolean;

  /**
   * <p>The primary key of the first item that this operation will evaluate. Use the value that was returned for <code>LastEvaluatedKey</code> in the previous operation.</p>
   *          <p>The data type for <code>ExclusiveStartKey</code> must be String, Number, or Binary. No
   *             set data types are allowed.</p>
   */
  ExclusiveStartKey?: { [key: string]: AttributeValue };

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.</p>
   *          <p>If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.</p>
   *          <p>For more information, see
   *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProjectionExpression?: string;

  /**
   * <p>A string that contains conditions that DynamoDB applies after the <code>Query</code> operation, but
   *        before the data is returned to you. Items that do not satisfy the <code>FilterExpression</code>
   *        criteria are not returned.</p>
   *          <p>A <code>FilterExpression</code> does not allow key attributes.  You cannot define a filter expression based on a partition key or a sort key.</p>
   *          <note>
   *             <p>A <code>FilterExpression</code> is applied after the items have already been read; the process of
   *          filtering does not consume any additional read capacity units.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#FilteringResults">Filter
   *          Expressions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The condition that specifies the key values for items to be retrieved by the
   *                 <code>Query</code> action.</p>
   *
   *          <p>The condition must perform an equality test on a single partition key value.</p>
   *         <p>The condition can optionally perform one of several comparison tests on a single
   *             sort key value. This allows <code>Query</code> to retrieve one item with a given
   *             partition key value and sort key value, or several items that have the same partition
   *             key value but different sort key values.</p>
   *
   *          <p>The partition key equality test is required, and must be specified in the following format:</p>
   *
   *          <p>
   *             <code>partitionKeyName</code>
   *             <i>=</i>
   *             <code>:partitionkeyval</code>
   *          </p>
   *
   *          <p>If you also want to provide a condition for the sort key, it must be combined using <code>AND</code> with the condition
   *       for the sort key. Following is an example, using the <b>=</b> comparison operator for the sort key:</p>
   *
   *         <p>
   *             <code>partitionKeyName</code>
   *             <code>=</code>
   *             <code>:partitionkeyval</code>
   *             <code>AND</code>
   *             <code>sortKeyName</code>
   *             <code>=</code>
   *             <code>:sortkeyval</code>
   *         </p>
   *          <p>Valid comparisons for the sort key condition are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sortKeyName</code>
   *                   <code>=</code>
   *                   <code>:sortkeyval</code> - true if the sort key value is equal to <code>:sortkeyval</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sortKeyName</code>
   *                   <code><</code>
   *                   <code>:sortkeyval</code> - true if the sort key value is less than <code>:sortkeyval</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sortKeyName</code>
   *                   <code><=</code>
   *                   <code>:sortkeyval</code> - true if the sort key value is less than or equal to
   *           <code>:sortkeyval</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sortKeyName</code>
   *                   <code>></code>
   *                   <code>:sortkeyval</code> - true if the sort key value is greater than <code>:sortkeyval</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sortKeyName</code>
   *                   <code>>= </code>
   *                   <code>:sortkeyval</code> - true if the sort key value is greater than
   *           or equal to <code>:sortkeyval</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sortKeyName</code>
   *                   <code>BETWEEN</code>
   *                   <code>:sortkeyval1</code>
   *                   <code>AND</code>
   *                   <code>:sortkeyval2</code> - true if the sort key value is greater than or equal to
   *           <code>:sortkeyval1</code>, and less than or equal to <code>:sortkeyval2</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>begins_with (</code>
   *                   <code>sortKeyName</code>, <code>:sortkeyval</code>
   *                   <code>)</code> -
   *           true if the sort key value begins with a particular operand. (You cannot use this function with a sort key that is of type Number.)  Note that the function name
   *             <code>begins_with</code> is case-sensitive.</p>
   *
   *             </li>
   *          </ul>
   *
   *          <p>Use the <code>ExpressionAttributeValues</code> parameter to replace tokens such as
   *         <code>:partitionval</code> and <code>:sortval</code> with actual values at runtime.</p>
   *
   *          <p>You can optionally use the <code>ExpressionAttributeNames</code> parameter to replace the names of
   *       the partition key and sort key with placeholder tokens. This option might be necessary if an attribute
   *       name conflicts with a DynamoDB reserved word. For example, the following
   *         <code>KeyConditionExpression</code> parameter causes an error because <i>Size</i> is a reserved
   *       word:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Size = :myval</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To work around this, define a placeholder (such a <code>#S</code>) to represent the attribute
   *       name <i>Size</i>. <code>KeyConditionExpression</code> then is as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#S = :myval</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For a list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved
   *         Words</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *
   *          <p>For more information on <code>ExpressionAttributeNames</code> and <code>ExpressionAttributeValues</code>,
   *       see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ExpressionPlaceholders.html">Using Placeholders for Attribute
   *         Names and Values</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  KeyConditionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p>
   *             </li>
   *             <li>
   *                <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p>
   *             </li>
   *             <li>
   *                <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p>
   *             </li>
   *          </ul>
   *          <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Percentile</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer Guide</i>). To work around this, you could specify the following for
   *             <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>{"#P":"Percentile"}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You could then use this substitution in an expression, as in this example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#P = :val</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p>
   *          </note>
   *          <p>For more information on expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   *          <p>Use the <b>:</b> (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the
   *             <i>ProductStatus</i> attribute was one of the following: </p>
   *          <p>
   *             <code>Available | Backordered | Discontinued</code>
   *          </p>
   *          <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p>
   *          <p>
   *             <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code>
   *          </p>
   *          <p>You could then use these values in an expression, such as this:</p>
   *          <p>
   *             <code>ProductStatus IN (:avail, :back, :disc)</code>
   *          </p>
   *         <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Specifying Conditions</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };
}

export namespace QueryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryInput): any => ({
    ...obj,
    ...(obj.KeyConditions && {
      KeyConditions: Object.entries(obj.KeyConditions).reduce(
        (acc: any, [key, value]: [string, Condition]) => ({
          ...acc,
          [key]: Condition.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.QueryFilter && {
      QueryFilter: Object.entries(obj.QueryFilter).reduce(
        (acc: any, [key, value]: [string, Condition]) => ({
          ...acc,
          [key]: Condition.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExclusiveStartKey && {
      ExclusiveStartKey: Object.entries(obj.ExclusiveStartKey).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the output of a <code>BatchWriteItem</code> operation.</p>
 */
export interface BatchWriteItemOutput {
  /**
   * <p>A map of tables and requests against those tables that were not processed. The
   *         <code>UnprocessedItems</code> value is in the same form as <code>RequestItems</code>, so you can provide
   *       this value directly to a subsequent <code>BatchGetItem</code> operation. For more information, see
   *         <code>RequestItems</code> in the Request Parameters section.</p>
   *          <p>Each <code>UnprocessedItems</code> entry consists of a table name and, for that table, a list of
   *       operations to perform (<code>DeleteRequest</code> or <code>PutRequest</code>).</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DeleteRequest</code> - Perform a <code>DeleteItem</code> operation on the specified item. The
   *           item to be deleted is identified by a <code>Key</code> subelement:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Key</code> - A map of primary key attribute values that uniquely identify the item.
   *               Each entry in this map consists of an attribute name and an attribute value.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PutRequest</code> - Perform a <code>PutItem</code> operation on the specified item. The item to
   *           be put is identified by an <code>Item</code> subelement:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Item</code> - A map of attributes and their values. Each entry in this map consists
   *               of an attribute name and an attribute value. Attribute values must not be null; string
   *               and binary type attributes must have lengths greater than zero; and set type
   *               attributes must not be empty. Requests that contain empty values will be rejected with
   *               a <code>ValidationException</code> exception.</p>
   *                      <p>If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If there are no unprocessed items remaining, the response contains an empty
   *         <code>UnprocessedItems</code> map.</p>
   */
  UnprocessedItems?: { [key: string]: WriteRequest[] };

  /**
   * <p>A list of tables that were processed by <code>BatchWriteItem</code> and, for each table,
   *       information about any item collections that were affected by individual <code>DeleteItem</code> or
   *         <code>PutItem</code> operations.</p>
   *          <p>Each entry consists of the following subelements:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ItemCollectionKey</code> - The partition key value of the item collection. This is the same as
   *           the partition key value of the item.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeEstimateRangeGB</code> - An estimate of item collection size, expressed in GB. This is
   *           a two-element array containing a lower bound and an upper bound for the estimate. The
   *           estimate includes the size of all the items in the table, plus the size of all attributes
   *           projected into all of the local secondary indexes on the table. Use this estimate to measure whether a
   *           local secondary index is approaching its size limit.</p>
   *                <p>The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.</p>
   *             </li>
   *          </ul>
   */
  ItemCollectionMetrics?: { [key: string]: ItemCollectionMetrics[] };

  /**
   * <p>The capacity units consumed by the entire <code>BatchWriteItem</code> operation.</p>
   *          <p>Each element consists of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TableName</code> - The table that consumed the provisioned throughput.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CapacityUnits</code> - The total number of capacity units consumed.</p>
   *             </li>
   *          </ul>
   */
  ConsumedCapacity?: ConsumedCapacity[];
}

export namespace BatchWriteItemOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchWriteItemOutput): any => ({
    ...obj,
    ...(obj.UnprocessedItems && {
      UnprocessedItems: Object.entries(obj.UnprocessedItems).reduce(
        (acc: any, [key, value]: [string, WriteRequest[]]) => ({
          ...acc,
          [key]: value.map((item) => WriteRequest.filterSensitiveLog(item)),
        }),
        {}
      ),
    }),
    ...(obj.ItemCollectionMetrics && {
      ItemCollectionMetrics: Object.entries(obj.ItemCollectionMetrics).reduce(
        (acc: any, [key, value]: [string, ItemCollectionMetrics[]]) => ({
          ...acc,
          [key]: value.map((item) => ItemCollectionMetrics.filterSensitiveLog(item)),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>Represents the input of an <code>UpdateItem</code> operation.</p>
 */
export interface UpdateItemInput {
  /**
   * <p>The name of the table containing the item to update.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.</p>
   *          <p>For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.</p>
   */
  Key: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>This is a legacy parameter.  Use <code>UpdateExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributeUpdates.html">AttributeUpdates</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  AttributeUpdates?: { [key: string]: AttributeValueUpdate };

  /**
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html">Expected</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  Expected?: { [key: string]: ExpectedAttributeValue };

  /**
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConditionalOperator?: ConditionalOperator | string;

  /**
   * <p>Use <code>ReturnValues</code> if you want to get the item attributes as they appear
   *             before or after they are updated. For <code>UpdateItem</code>, the valid values
   *             are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - If <code>ReturnValues</code> is not specified, or if its value is
   *           <code>NONE</code>, then nothing is returned. (This setting is the default for
   *           <code>ReturnValues</code>.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_OLD</code> - Returns all of the attributes of the item, as they appeared before the UpdateItem operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATED_OLD</code> - Returns only the updated attributes, as they appeared before the UpdateItem operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_NEW</code> - Returns all of the attributes of the item, as they appear after the UpdateItem operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATED_NEW</code> - Returns only the updated attributes, as they appear after the UpdateItem operation.</p>
   *             </li>
   *          </ul>
   *          <p>There is no additional cost associated with requesting a return value aside from the
   *             small network and processing overhead of receiving a larger response. No read capacity
   *             units are consumed.</p>
   *          <p>The values returned are strongly consistent.</p>
   */
  ReturnValues?: ReturnValue | string;

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>Determines whether item collection metrics are returned.  If set to <code>SIZE</code>, the response includes statistics about item collections, if any, that were modified during
   *       the operation are returned in the response. If set to <code>NONE</code> (the default), no statistics are returned.</p>
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | string;

  /**
   * <p>An expression that defines one or more attributes to be updated, the action to be
   *             performed on them, and new values for them.</p>
   *          <p>The following action values are available for <code>UpdateExpression</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>SET</code> - Adds one or more attributes and values to an item. If any of
   *                     these attributes already exist, they are replaced by the new values. You can
   *                     also use <code>SET</code> to add or subtract from an attribute that is of type
   *                     Number. For example: <code>SET myNum = myNum + :val</code>
   *                 </p>
   *                <p>
   *                   <code>SET</code> supports the following functions:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>if_not_exists (path, operand)</code> - if the item does not contain an attribute at the specified path, then <code>if_not_exists</code> evaluates to operand; otherwise, it evaluates to path. You can use this function to avoid overwriting an attribute that may already be present in the item.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>list_append (operand, operand)</code> - evaluates to a list with a new element added to it. You can append the new element to the start or the end of the list by reversing the order of the operands.</p>
   *                   </li>
   *                </ul>
   *                <p>These function names are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code> - Removes one or more attributes from an item.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADD</code> - Adds the specified value to the item, if the attribute does not already exist. If the attribute does exist, then the behavior of
   *             <code>ADD</code> depends on the data type of the attribute:</p>
   *                <ul>
   *                   <li>
   *                      <p>If the existing attribute is a number, and if <code>Value</code> is also a number, then
   *                 <code>Value</code> is mathematically added to the existing attribute. If <code>Value</code> is a
   *               negative number, then it is subtracted from the existing attribute.</p>
   *                      <note>
   *                         <p>If you use <code>ADD</code> to increment or decrement a number value for an item
   *                 that doesn't exist before the update, DynamoDB uses <code>0</code> as the initial
   *                 value.</p>
   *                         <p>Similarly, if you use <code>ADD</code> for an existing item to increment
   *                                 or decrement an attribute value that doesn't exist before the
   *                                 update, DynamoDB uses <code>0</code> as the initial value. For
   *                                 example, suppose that the item you want to update doesn't have an
   *                                 attribute named <code>itemcount</code>, but you decide to
   *                                     <code>ADD</code> the number <code>3</code> to this attribute
   *                                 anyway. DynamoDB will create the <code>itemcount</code> attribute,
   *                                 set its initial value to <code>0</code>, and finally add
   *                                     <code>3</code> to it. The result will be a new
   *                                     <code>itemcount</code> attribute in the item, with a value of
   *                                     <code>3</code>.</p>
   *                      </note>
   *                   </li>
   *                   <li>
   *                      <p>If the existing data type is a set and if <code>Value</code> is also a set, then
   *                 <code>Value</code> is added to the existing set. For example, if the attribute value is the set
   *                 <code>[1,2]</code>, and the <code>ADD</code> action specified <code>[3]</code>, then
   *               the final attribute value is <code>[1,2,3]</code>. An error occurs if an <code>ADD</code>
   *               action is specified for a set attribute and the attribute type specified does not
   *               match the existing set type. </p>
   *                      <p>Both sets must have the same primitive data type. For example, if the existing data
   *               type is a set of strings, the <code>Value</code> must also be a set of strings.</p>
   *                   </li>
   *                </ul>
   *                <important>
   *                   <p>The <code>ADD</code> action only supports Number and set data types. In addition,
   *               <code>ADD</code> can only be used on top-level attributes, not nested attributes.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - Deletes an element from a set.</p>
   *                <p>If a set of values is specified, then those values are subtracted from the old
   *           set. For example, if the attribute value was the set <code>[a,b,c]</code> and the
   *           <code>DELETE</code> action specifies <code>[a,c]</code>, then the final attribute value
   *           is <code>[b]</code>. Specifying an empty set is an error.</p>
   *                <important>
   *                   <p>The <code>DELETE</code> action only supports set data types. In addition,
   *           <code>DELETE</code> can only be used on top-level attributes, not nested attributes.</p>
   *                </important>
   *
   *             </li>
   *          </ul>
   *          <p>You can have many actions in a single expression, such as the following: <code>SET a=:value1,
   *          b=:value2 DELETE :value3, :value4, :value5</code>
   *          </p>
   *          <p>For more information on update expressions, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Modifying.html">Modifying Items and Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  UpdateExpression?: string;

  /**
   * <p>A condition that must be satisfied in order for a conditional update to succeed.</p>
   *          <p>An expression can contain any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Functions: <code>attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size</code>
   *                </p>
   *                <p>These function names are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Comparison operators: <code>= | <> |
   *             < | > | <= | >= |
   *             BETWEEN | IN </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p> Logical operators: <code>AND | OR | NOT</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about condition expressions, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Specifying Conditions</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ConditionExpression?: string;

  /**
   * <p>One or more substitution tokens for attribute names in an expression. The following are some use cases for using <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>To access an attribute whose name conflicts with a DynamoDB reserved word.</p>
   *             </li>
   *             <li>
   *                <p>To create a placeholder for repeating occurrences of an attribute name in an expression.</p>
   *             </li>
   *             <li>
   *                <p>To prevent special characters in an attribute name from being misinterpreted in an expression.</p>
   *             </li>
   *          </ul>
   *          <p>Use the <b>#</b> character in an expression to dereference an attribute name. For example, consider the following attribute name:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Percentile</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The name of this attribute conflicts with a reserved word, so it cannot be used directly
   *             in an expression. (For the complete list of reserved words, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html">Reserved Words</a> in the <i>Amazon DynamoDB Developer
   *             Guide</i>.) To work around this, you could specify the following for
   *                 <code>ExpressionAttributeNames</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>{"#P":"Percentile"}</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You could then use this substitution in an expression, as in this example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#P = :val</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Tokens that begin with the <b>:</b> character are <i>expression attribute values</i>, which are placeholders for the actual value at runtime.</p>
   *          </note>
   *          <p>For more information about expression attribute names, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>One or more values that can be substituted in an expression.</p>
   *          <p>Use the <b>:</b> (colon) character in an expression to
   *             dereference an attribute value. For example, suppose that you wanted to check whether
   *             the value of the <code>ProductStatus</code> attribute was one of the following: </p>
   *          <p>
   *             <code>Available | Backordered | Discontinued</code>
   *          </p>
   *          <p>You would first need to specify <code>ExpressionAttributeValues</code> as follows:</p>
   *          <p>
   *             <code>{ ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }</code>
   *          </p>
   *          <p>You could then use these values in an expression, such as this:</p>
   *          <p>
   *             <code>ProductStatus IN (:avail, :back, :disc)</code>
   *          </p>
   *         <p>For more information on expression attribute values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html">Condition Expressions</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ExpressionAttributeValues?: { [key: string]: AttributeValue };
}

export namespace UpdateItemInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateItemInput): any => ({
    ...obj,
    ...(obj.Key && {
      Key: Object.entries(obj.Key).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.AttributeUpdates && {
      AttributeUpdates: Object.entries(obj.AttributeUpdates).reduce(
        (acc: any, [key, value]: [string, AttributeValueUpdate]) => ({
          ...acc,
          [key]: AttributeValueUpdate.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.Expected && {
      Expected: Object.entries(obj.Expected).reduce(
        (acc: any, [key, value]: [string, ExpectedAttributeValue]) => ({
          ...acc,
          [key]: ExpectedAttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
    ...(obj.ExpressionAttributeValues && {
      ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce(
        (acc: any, [key, value]: [string, AttributeValue]) => ({
          ...acc,
          [key]: AttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

/**
 * <p>A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.</p>
 */
export interface TransactWriteItem {
  /**
   * <p>A request to perform a check item operation.</p>
   */
  ConditionCheck?: ConditionCheck;

  /**
   * <p>A request to perform a <code>PutItem</code> operation.</p>
   */
  Put?: Put;

  /**
   * <p>A request to perform a <code>DeleteItem</code> operation.</p>
   */
  Delete?: Delete;

  /**
   * <p>A request to perform an <code>UpdateItem</code> operation.</p>
   */
  Update?: Update;
}

export namespace TransactWriteItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactWriteItem): any => ({
    ...obj,
    ...(obj.ConditionCheck && { ConditionCheck: ConditionCheck.filterSensitiveLog(obj.ConditionCheck) }),
    ...(obj.Put && { Put: Put.filterSensitiveLog(obj.Put) }),
    ...(obj.Delete && { Delete: Delete.filterSensitiveLog(obj.Delete) }),
    ...(obj.Update && { Update: Update.filterSensitiveLog(obj.Update) }),
  });
}

export interface TransactWriteItemsInput {
  /**
   * <p>An ordered array of up to 25 <code>TransactWriteItem</code> objects, each of which
   *             contains a <code>ConditionCheck</code>, <code>Put</code>, <code>Update</code>, or
   *                 <code>Delete</code> object. These can operate on items in different tables, but the
   *             tables must reside in the same AWS account and Region, and no two of them can operate on
   *             the same item. </p>
   */
  TransactItems: TransactWriteItem[] | undefined;

  /**
   * <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p>
   *                <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all.  In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p>
   *             </li>
   *          </ul>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>Determines whether item collection metrics are returned. If set to
   *       <code>SIZE</code>, the response includes statistics about item collections (if any), that
   *       were modified during the operation and are returned in the response.
   *       If set to <code>NONE</code> (the default), no statistics are returned.
   *       </p>
   */
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics | string;

  /**
   * <p>Providing a <code>ClientRequestToken</code> makes the call to <code>TransactWriteItems</code>
   *         idempotent, meaning that multiple identical calls have the same effect as one single call.</p>
   *          <p>Although multiple identical calls using the same client request token produce the same
   *             result on the server (no side effects), the responses to the calls might not be the
   *             same. If the <code>ReturnConsumedCapacity></code> parameter is set, then the initial
   *                 <code>TransactWriteItems</code> call returns the amount of write capacity units
   *             consumed in making the changes. Subsequent <code>TransactWriteItems</code> calls with
   *             the same client token return the number of read capacity units consumed in reading the
   *             item.</p>
   *          <p>A client request token is valid for 10 minutes after the first request that uses it is
   *             completed. After 10 minutes, any request with the same client token is treated as a new
   *             request. Do not resubmit the same request with the same client token for more than 10
   *             minutes, or the result might not be idempotent.</p>
   *          <p>If you submit a request with the same client token but a change in other parameters
   *             within the 10-minute idempotency window, DynamoDB returns an
   *                 <code>IdempotentParameterMismatch</code> exception.</p>
   */
  ClientRequestToken?: string;
}

export namespace TransactWriteItemsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactWriteItemsInput): any => ({
    ...obj,
    ...(obj.TransactItems && {
      TransactItems: obj.TransactItems.map((item) => TransactWriteItem.filterSensitiveLog(item)),
    }),
  });
}
