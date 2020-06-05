import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains details of a table archival operation.</p>
 */
export interface ArchivalSummary {
  __type?: "ArchivalSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the backup the table was archived
   *          to, when applicable in the archival reason. If you wish to restore this
   *          backup to the same table name, you will need to delete the original
   *          table.</p>
   */
  ArchivalBackupArn?: string;

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
}

export namespace ArchivalSummary {
  export const filterSensitiveLog = (obj: ArchivalSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ArchivalSummary =>
    __isa(o, "ArchivalSummary");
}

export type AttributeAction = "ADD" | "DELETE" | "PUT";

/**
 * <p>Represents an attribute for describing the key schema for the table and indexes.</p>
 */
export interface AttributeDefinition {
  __type?: "AttributeDefinition";
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
  export const filterSensitiveLog = (obj: AttributeDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttributeDefinition =>
    __isa(o, "AttributeDefinition");
}

/**
 * <p>AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>.</p>
 */
export interface AttributeValue {
  __type?: "AttributeValue";
  /**
   * <p>Binary attributes are sequences of unsigned bytes.</p>
   */
  B?: Uint8Array;

  /**
   * <p>A set of binary attributes.</p>
   */
  BS?: Uint8Array[];

  /**
   * <p>Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision
   *        and can be between 10^-128 to 10^+126.</p>
   */
  N?: string;

  /**
   * <p>A set of numbers.</p>
   */
  NS?: string[];

  /**
   * <p>Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024
   *        bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).</p>
   */
  S?: string;

  /**
   * <p>A set of strings.</p>
   */
  SS?: string[];
}

export namespace AttributeValue {
  export const filterSensitiveLog = (obj: AttributeValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttributeValue =>
    __isa(o, "AttributeValue");
}

/**
 * <p>Specifies the attribute to update and how to perform the update. Possible values: <code>PUT</code> (default),
 *        <code>ADD</code> or <code>DELETE</code>.</p>
 */
export interface AttributeValueUpdate {
  __type?: "AttributeValueUpdate";
  Action?: AttributeAction | string;
  /**
   * <p>AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>.</p>
   */
  Value?: AttributeValue;
}

export namespace AttributeValueUpdate {
  export const filterSensitiveLog = (obj: AttributeValueUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttributeValueUpdate =>
    __isa(o, "AttributeValueUpdate");
}

/**
 * <p>Represents the properties of the scaling policy.</p>
 */
export interface AutoScalingPolicyDescription {
  __type?: "AutoScalingPolicyDescription";
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
  export const filterSensitiveLog = (
    obj: AutoScalingPolicyDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingPolicyDescription =>
    __isa(o, "AutoScalingPolicyDescription");
}

/**
 * <p>Represents the auto scaling policy to be modified.</p>
 */
export interface AutoScalingPolicyUpdate {
  __type?: "AutoScalingPolicyUpdate";
  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>Represents a target tracking scaling policy configuration.</p>
   */
  TargetTrackingScalingPolicyConfiguration:
    | AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
    | undefined;
}

export namespace AutoScalingPolicyUpdate {
  export const filterSensitiveLog = (obj: AutoScalingPolicyUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingPolicyUpdate =>
    __isa(o, "AutoScalingPolicyUpdate");
}

/**
 * <p>Represents the auto scaling settings for a global table or global secondary
 *          index.</p>
 */
export interface AutoScalingSettingsDescription {
  __type?: "AutoScalingSettingsDescription";
  /**
   * <p>Disabled auto scaling for this global table or global secondary index.</p>
   */
  AutoScalingDisabled?: boolean;

  /**
   * <p>Role ARN used for configuring the auto scaling policy.</p>
   */
  AutoScalingRoleArn?: string;

  /**
   * <p>The maximum capacity units that a global table or global secondary index should be scaled up to.</p>
   */
  MaximumUnits?: number;

  /**
   * <p>The minimum capacity units that a global table or global secondary index should be scaled down to.</p>
   */
  MinimumUnits?: number;

  /**
   * <p>Information about the scaling policies.</p>
   */
  ScalingPolicies?: AutoScalingPolicyDescription[];
}

export namespace AutoScalingSettingsDescription {
  export const filterSensitiveLog = (
    obj: AutoScalingSettingsDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingSettingsDescription =>
    __isa(o, "AutoScalingSettingsDescription");
}

/**
 * <p>Represents the auto scaling settings to be modified for a global table or global
 *          secondary index.</p>
 */
export interface AutoScalingSettingsUpdate {
  __type?: "AutoScalingSettingsUpdate";
  /**
   * <p>Disabled auto scaling for this global table or global secondary index.</p>
   */
  AutoScalingDisabled?: boolean;

  /**
   * <p>Role ARN used for configuring auto scaling policy.</p>
   */
  AutoScalingRoleArn?: string;

  /**
   * <p>The maximum capacity units that a global table or global secondary index should be scaled up to.</p>
   */
  MaximumUnits?: number;

  /**
   * <p>The minimum capacity units that a global table or global secondary index should be scaled down to.</p>
   */
  MinimumUnits?: number;

  /**
   * <p>The scaling policy to apply for scaling target global table or global secondary index capacity units.</p>
   */
  ScalingPolicyUpdate?: AutoScalingPolicyUpdate;
}

export namespace AutoScalingSettingsUpdate {
  export const filterSensitiveLog = (obj: AutoScalingSettingsUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingSettingsUpdate =>
    __isa(o, "AutoScalingSettingsUpdate");
}

/**
 * <p>Represents the properties of a target tracking scaling policy.</p>
 */
export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
  __type?: "AutoScalingTargetTrackingScalingPolicyConfigurationDescription";
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
  export const filterSensitiveLog = (
    obj: AutoScalingTargetTrackingScalingPolicyConfigurationDescription
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AutoScalingTargetTrackingScalingPolicyConfigurationDescription =>
    __isa(o, "AutoScalingTargetTrackingScalingPolicyConfigurationDescription");
}

/**
 * <p>Represents the settings of a target tracking scaling policy that will be modified.</p>
 */
export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
  __type?: "AutoScalingTargetTrackingScalingPolicyConfigurationUpdate";
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
  export const filterSensitiveLog = (
    obj: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AutoScalingTargetTrackingScalingPolicyConfigurationUpdate =>
    __isa(o, "AutoScalingTargetTrackingScalingPolicyConfigurationUpdate");
}

/**
 * <p>Contains the description of the backup created for the table.</p>
 */
export interface BackupDescription {
  __type?: "BackupDescription";
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
  export const filterSensitiveLog = (obj: BackupDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupDescription =>
    __isa(o, "BackupDescription");
}

/**
 * <p>Contains the details of the backup created for the table.</p>
 */
export interface BackupDetails {
  __type?: "BackupDetails";
  /**
   * <p>ARN associated with the backup.</p>
   */
  BackupArn: string | undefined;

  /**
   * <p>Time at which the backup was created. This is the request time of the backup. </p>
   */
  BackupCreationDateTime: Date | undefined;

  /**
   * <p>Time at which the automatic on-demand backup created by DynamoDB will expire. This <code>SYSTEM</code>
   *       on-demand backup expires automatically 35 days after its creation.</p>
   */
  BackupExpiryDateTime?: Date;

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
}

export namespace BackupDetails {
  export const filterSensitiveLog = (obj: BackupDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupDetails => __isa(o, "BackupDetails");
}

/**
 * <p>There is another ongoing conflicting backup control plane operation on the table. The backup is either being created, deleted or restored to a table.</p>
 */
export interface BackupInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "BackupInUseException";
  $fault: "client";
  message?: string;
}

export namespace BackupInUseException {
  export const filterSensitiveLog = (obj: BackupInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupInUseException =>
    __isa(o, "BackupInUseException");
}

/**
 * <p>Backup not found for the given BackupARN. </p>
 */
export interface BackupNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "BackupNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace BackupNotFoundException {
  export const filterSensitiveLog = (obj: BackupNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupNotFoundException =>
    __isa(o, "BackupNotFoundException");
}

export type BackupStatus = "AVAILABLE" | "CREATING" | "DELETED";

/**
 * <p>Contains details for the backup.</p>
 */
export interface BackupSummary {
  __type?: "BackupSummary";
  /**
   * <p>ARN associated with the backup.</p>
   */
  BackupArn?: string;

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
   * <p>Name of the specified backup.</p>
   */
  BackupName?: string;

  /**
   * <p>Size of the backup in bytes.</p>
   */
  BackupSizeBytes?: number;

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
   * <p>ARN associated with the table.</p>
   */
  TableArn?: string;

  /**
   * <p>Unique identifier for the table.</p>
   */
  TableId?: string;

  /**
   * <p>Name of the table.</p>
   */
  TableName?: string;
}

export namespace BackupSummary {
  export const filterSensitiveLog = (obj: BackupSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupSummary => __isa(o, "BackupSummary");
}

export enum BackupType {
  AWS_BACKUP = "AWS_BACKUP",
  SYSTEM = "SYSTEM",
  USER = "USER"
}

export enum BackupTypeFilter {
  ALL = "ALL",
  AWS_BACKUP = "AWS_BACKUP",
  SYSTEM = "SYSTEM",
  USER = "USER"
}

export interface BatchGetItemInput {
  __type?: "BatchGetItemInput";
  /**
   * <p>A map of the table name and corresponding items to get by primary key. While requesting items, each table name
   *        can be invoked only once per operation.</p>
   */
  RequestItems: { [key: string]: KeysAndAttributes } | undefined;
}

export namespace BatchGetItemInput {
  export const filterSensitiveLog = (obj: BatchGetItemInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetItemInput =>
    __isa(o, "BatchGetItemInput");
}

/**
 * <p>Represents the output of a <code>BatchGetItem</code> operation.</p>
 */
export interface BatchGetItemOutput {
  __type?: "BatchGetItemOutput";
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

  /**
   * <p>A map of table name to a list of items. Each object in <code>Responses</code> consists of a table
   *       name, along with a map of attribute data consisting of the data type and attribute value.</p>
   */
  Responses?: { [key: string]: BatchResponse };

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
}

export namespace BatchGetItemOutput {
  export const filterSensitiveLog = (obj: BatchGetItemOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetItemOutput =>
    __isa(o, "BatchGetItemOutput");
}

/**
 * <p>The item attributes from a response in a specific table, along with the read resources consumed on the table
 *        during the request.</p>
 */
export interface BatchResponse {
  __type?: "BatchResponse";
  /**
   * <p>The number of Capacity Units of the provisioned throughput of the table consumed during the operation.
   *        <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume
   *        <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code>
   *        operations consume <code>WriteCapacityUnits</code>.</p>
   */
  ConsumedCapacityUnits?: number;

  Items?: { [key: string]: AttributeValue }[];
}

export namespace BatchResponse {
  export const filterSensitiveLog = (obj: BatchResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchResponse => __isa(o, "BatchResponse");
}

export interface BatchWriteItemInput {
  __type?: "BatchWriteItemInput";
  /**
   * <p>A map of table name to list-of-write-requests. Used as input to the <code>BatchWriteItem</code> API call</p>
   */
  RequestItems: { [key: string]: WriteRequest[] } | undefined;
}

export namespace BatchWriteItemInput {
  export const filterSensitiveLog = (obj: BatchWriteItemInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchWriteItemInput =>
    __isa(o, "BatchWriteItemInput");
}

/**
 * <p>Represents the output of a <code>BatchWriteItem</code> operation.</p>
 */
export interface BatchWriteItemOutput {
  __type?: "BatchWriteItemOutput";
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
}

export namespace BatchWriteItemOutput {
  export const filterSensitiveLog = (obj: BatchWriteItemOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchWriteItemOutput =>
    __isa(o, "BatchWriteItemOutput");
}

export type BillingMode = "PAY_PER_REQUEST" | "PROVISIONED";

/**
 * <p>Contains the details for the read/write capacity mode.</p>
 */
export interface BillingModeSummary {
  __type?: "BillingModeSummary";
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
  export const filterSensitiveLog = (obj: BillingModeSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is BillingModeSummary =>
    __isa(o, "BillingModeSummary");
}

/**
 * <p>An ordered list of errors for each item in the request which caused the transaction
 *      to get cancelled. The values of the list are ordered according to the ordering of the
 *      <code>TransactWriteItems</code> request parameter. If no error
 *      occurred for the associated item an error with a Null code and Null message will be present.
 *      </p>
 */
export interface CancellationReason {
  __type?: "CancellationReason";
  /**
   * <p>Status code for the result of the cancelled transaction.</p>
   */
  Code?: string;

  /**
   * <p>Item in the request which caused the transaction to get cancelled.</p>
   */
  Item?: { [key: string]: AttributeValue };

  /**
   * <p>Cancellation reason message description.</p>
   */
  Message?: string;
}

export namespace CancellationReason {
  export const filterSensitiveLog = (obj: CancellationReason): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancellationReason =>
    __isa(o, "CancellationReason");
}

/**
 * <p>Represents the amount of provisioned throughput capacity consumed on a table or an index.</p>
 */
export interface Capacity {
  __type?: "Capacity";
  /**
   * <p>The total number of capacity units consumed on a table or an index.</p>
   */
  CapacityUnits?: number;

  /**
   * <p>The total number of read capacity units consumed on a table or an index.</p>
   */
  ReadCapacityUnits?: number;

  /**
   * <p>The total number of write capacity units consumed on a table or an index.</p>
   */
  WriteCapacityUnits?: number;
}

export namespace Capacity {
  export const filterSensitiveLog = (obj: Capacity): any => ({
    ...obj
  });
  export const isa = (o: any): o is Capacity => __isa(o, "Capacity");
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
  __type?: "Condition";
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
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj
  });
  export const isa = (o: any): o is Condition => __isa(o, "Condition");
}

/**
 * <p>This exception is thrown when an expected value does not match what was found in the system.</p>
 */
export interface ConditionalCheckFailedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConditionalCheckFailedException";
  $fault: "client";
  message?: string;
}

export namespace ConditionalCheckFailedException {
  export const filterSensitiveLog = (
    obj: ConditionalCheckFailedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConditionalCheckFailedException =>
    __isa(o, "ConditionalCheckFailedException");
}

export type ConditionalOperator = "AND" | "OR";

/**
 * <p>Represents a request to perform a check that an item exists or to check the condition of
 *          specific attributes of the item.</p>
 */
export interface ConditionCheck {
  __type?: "ConditionCheck";
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
   * <p>The primary key of the item to be checked. Each element consists of an
   *       attribute name and a value for that attribute.</p>
   */
  Key: Key | undefined;

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to
   *         get the item attributes if the <code>ConditionCheck</code> condition fails.
   *         For <code>ReturnValuesOnConditionCheckFailure</code>, the valid
   *         values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?:
    | ReturnValuesOnConditionCheckFailure
    | string;

  /**
   * <p>Name of the table for the check item request.</p>
   */
  TableName: string | undefined;
}

export namespace ConditionCheck {
  export const filterSensitiveLog = (obj: ConditionCheck): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConditionCheck =>
    __isa(o, "ConditionCheck");
}

/**
 * <p>The capacity units consumed by an operation. The data returned includes the total
 *       provisioned throughput consumed, along with statistics for the table and any indexes involved
 *       in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it.
 *       For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned
 *         Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface ConsumedCapacity {
  __type?: "ConsumedCapacity";
  /**
   * <p>The total number of capacity units consumed by the operation.</p>
   */
  CapacityUnits?: number;

  /**
   * <p>The amount of throughput consumed on each global index affected by the operation.</p>
   */
  GlobalSecondaryIndexes?: { [key: string]: Capacity };

  /**
   * <p>The amount of throughput consumed on each local index affected by the operation.</p>
   */
  LocalSecondaryIndexes?: { [key: string]: Capacity };

  /**
   * <p>The total number of read capacity units consumed by the operation.</p>
   */
  ReadCapacityUnits?: number;

  /**
   * <p>The amount of throughput consumed on the table affected by the operation.</p>
   */
  Table?: Capacity;

  /**
   * <p>The name of the table that was affected by the operation.</p>
   */
  TableName?: string;

  /**
   * <p>The total number of write capacity units consumed by the operation.</p>
   */
  WriteCapacityUnits?: number;
}

export namespace ConsumedCapacity {
  export const filterSensitiveLog = (obj: ConsumedCapacity): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConsumedCapacity =>
    __isa(o, "ConsumedCapacity");
}

/**
 * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
 */
export interface ContinuousBackupsDescription {
  __type?: "ContinuousBackupsDescription";
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
  export const filterSensitiveLog = (
    obj: ContinuousBackupsDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContinuousBackupsDescription =>
    __isa(o, "ContinuousBackupsDescription");
}

export type ContinuousBackupsStatus = "DISABLED" | "ENABLED";

/**
 * <p>Backups have not yet been enabled for this table.</p>
 */
export interface ContinuousBackupsUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ContinuousBackupsUnavailableException";
  $fault: "client";
  message?: string;
}

export namespace ContinuousBackupsUnavailableException {
  export const filterSensitiveLog = (
    obj: ContinuousBackupsUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContinuousBackupsUnavailableException =>
    __isa(o, "ContinuousBackupsUnavailableException");
}

export type ContributorInsightsAction = "DISABLE" | "ENABLE";

export type ContributorInsightsStatus =
  | "DISABLED"
  | "DISABLING"
  | "ENABLED"
  | "ENABLING"
  | "FAILED";

/**
 * <p>Represents a Contributor Insights summary entry..</p>
 */
export interface ContributorInsightsSummary {
  __type?: "ContributorInsightsSummary";
  /**
   * <p>Describes the current status for contributor insights for the given table and index, if applicable.</p>
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | string;

  /**
   * <p>Name of the index associated with the summary, if any.</p>
   */
  IndexName?: string;

  /**
   * <p>Name of the table associated with the summary.</p>
   */
  TableName?: string;
}

export namespace ContributorInsightsSummary {
  export const filterSensitiveLog = (obj: ContributorInsightsSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContributorInsightsSummary =>
    __isa(o, "ContributorInsightsSummary");
}

export interface CreateBackupInput {
  __type?: "CreateBackupInput";
  /**
   * <p>Specified name for the backup.</p>
   */
  BackupName: string | undefined;

  /**
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;
}

export namespace CreateBackupInput {
  export const filterSensitiveLog = (obj: CreateBackupInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBackupInput =>
    __isa(o, "CreateBackupInput");
}

export interface CreateBackupOutput {
  __type?: "CreateBackupOutput";
  /**
   * <p>Contains the details of the backup created for the table.</p>
   */
  BackupDetails?: BackupDetails;
}

export namespace CreateBackupOutput {
  export const filterSensitiveLog = (obj: CreateBackupOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBackupOutput =>
    __isa(o, "CreateBackupOutput");
}

/**
 * <p>Represents a new global secondary index to be added to an existing table.</p>
 */
export interface CreateGlobalSecondaryIndexAction {
  __type?: "CreateGlobalSecondaryIndexAction";
  /**
   * <p>The name of the global secondary index to be created.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The key schema for the global secondary index.</p>
   */
  KeySchema: KeySchema | undefined;

  /**
   * <p>Represents attributes that are copied (projected) from the table into an index. These
   *          are in addition to the primary key attributes and index key attributes, which are
   *          automatically projected.</p>
   */
  Projection: Projection | undefined;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p>
   *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;
}

export namespace CreateGlobalSecondaryIndexAction {
  export const filterSensitiveLog = (
    obj: CreateGlobalSecondaryIndexAction
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGlobalSecondaryIndexAction =>
    __isa(o, "CreateGlobalSecondaryIndexAction");
}

export interface CreateGlobalTableInput {
  __type?: "CreateGlobalTableInput";
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
  export const filterSensitiveLog = (obj: CreateGlobalTableInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGlobalTableInput =>
    __isa(o, "CreateGlobalTableInput");
}

export interface CreateGlobalTableOutput {
  __type?: "CreateGlobalTableOutput";
  /**
   * <p>Contains the details of the global table.</p>
   */
  GlobalTableDescription?: GlobalTableDescription;
}

export namespace CreateGlobalTableOutput {
  export const filterSensitiveLog = (obj: CreateGlobalTableOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGlobalTableOutput =>
    __isa(o, "CreateGlobalTableOutput");
}

/**
 * <p>Represents a replica to be added.</p>
 */
export interface CreateReplicaAction {
  __type?: "CreateReplicaAction";
  /**
   * <p>The Region of the replica to be added.</p>
   */
  RegionName: string | undefined;
}

export namespace CreateReplicaAction {
  export const filterSensitiveLog = (obj: CreateReplicaAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicaAction =>
    __isa(o, "CreateReplicaAction");
}

/**
 * <p>Represents a replica to be created.</p>
 */
export interface CreateReplicationGroupMemberAction {
  __type?: "CreateReplicationGroupMemberAction";
  /**
   * <p>Replica-specific global secondary index settings.</p>
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];

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
   * <p>The Region where the new replica will be created.</p>
   */
  RegionName: string | undefined;
}

export namespace CreateReplicationGroupMemberAction {
  export const filterSensitiveLog = (
    obj: CreateReplicationGroupMemberAction
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationGroupMemberAction =>
    __isa(o, "CreateReplicationGroupMemberAction");
}

/**
 * <p>Represents the input of a <code>CreateTable</code> operation.</p>
 */
export interface CreateTableInput {
  __type?: "CreateTableInput";
  /**
   * <p>An array of attributes that describe the key schema for the table and indexes.</p>
   */
  AttributeDefinitions: AttributeDefinition[] | undefined;

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
  KeySchema: KeySchema | undefined;

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
   * <p>Represents the provisioned throughput settings for a specified table or index. The settings
   *             can be modified using the <code>UpdateTable</code> operation.</p>
   * 		       <p>
   * 			If you set BillingMode as <code>PROVISIONED</code>, you must specify this property. If you set BillingMode as
   * 			<code>PAY_PER_REQUEST</code>, you cannot specify this property.
   * 		</p>
   *         <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer
   *             Guide</i>.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * <p>Represents the settings used to enable server-side encryption.</p>
   */
  SSESpecification?: SSESpecification;

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
   * <p>The name of the table to create.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of key-value pairs to label the table. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateTableInput {
  export const filterSensitiveLog = (obj: CreateTableInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTableInput =>
    __isa(o, "CreateTableInput");
}

/**
 * <p>Represents the output of a <code>CreateTable</code> operation.</p>
 */
export interface CreateTableOutput {
  __type?: "CreateTableOutput";
  /**
   * <p>Represents the properties of the table.</p>
   */
  TableDescription?: TableDescription;
}

export namespace CreateTableOutput {
  export const filterSensitiveLog = (obj: CreateTableOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTableOutput =>
    __isa(o, "CreateTableOutput");
}

/**
 * <p>Represents a request to perform a <code>DeleteItem</code> operation.</p>
 */
export interface Delete {
  __type?: "Delete";
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
   * <p>The primary key of the item to be deleted. Each element consists of an
   *       attribute name and a value for that attribute.</p>
   */
  Key: Key | undefined;

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to
   *         get the item attributes if the <code>Delete</code> condition fails.
   *         For <code>ReturnValuesOnConditionCheckFailure</code>, the valid
   *         values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?:
    | ReturnValuesOnConditionCheckFailure
    | string;

  /**
   * <p>Name of the table in which the item to be deleted resides.</p>
   */
  TableName: string | undefined;
}

export namespace Delete {
  export const filterSensitiveLog = (obj: Delete): any => ({
    ...obj
  });
  export const isa = (o: any): o is Delete => __isa(o, "Delete");
}

export interface DeleteBackupInput {
  __type?: "DeleteBackupInput";
  /**
   * <p>The ARN associated with the backup.</p>
   */
  BackupArn: string | undefined;
}

export namespace DeleteBackupInput {
  export const filterSensitiveLog = (obj: DeleteBackupInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBackupInput =>
    __isa(o, "DeleteBackupInput");
}

export interface DeleteBackupOutput {
  __type?: "DeleteBackupOutput";
  /**
   * <p>Contains the description of the backup created for the table.</p>
   */
  BackupDescription?: BackupDescription;
}

export namespace DeleteBackupOutput {
  export const filterSensitiveLog = (obj: DeleteBackupOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBackupOutput =>
    __isa(o, "DeleteBackupOutput");
}

/**
 * <p>Represents a global secondary index to be deleted from an existing table.</p>
 */
export interface DeleteGlobalSecondaryIndexAction {
  __type?: "DeleteGlobalSecondaryIndexAction";
  /**
   * <p>The name of the global secondary index to be deleted.</p>
   */
  IndexName: string | undefined;
}

export namespace DeleteGlobalSecondaryIndexAction {
  export const filterSensitiveLog = (
    obj: DeleteGlobalSecondaryIndexAction
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGlobalSecondaryIndexAction =>
    __isa(o, "DeleteGlobalSecondaryIndexAction");
}

export interface DeleteItemInput {
  __type?: "DeleteItemInput";
  Expected?: { [key: string]: ExpectedAttributeValue };
  /**
   * <p>The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash)
   *        primary key or a two attribute (hash-and-range) primary key.</p>
   */
  Key: Key | undefined;

  ReturnValues?: ReturnValue | string;
  /**
   * <p>The name of the table in which you want to delete an item. Allowed characters are <code>a-z</code>, <code>A-Z</code>,
   *        <code>0-9</code>, <code>_</code> (underscore), <code>-</code> (hyphen) and <code>.</code> (period).</p>
   */
  TableName: string | undefined;
}

export namespace DeleteItemInput {
  export const filterSensitiveLog = (obj: DeleteItemInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteItemInput =>
    __isa(o, "DeleteItemInput");
}

/**
 * <p>Represents the output of a <code>DeleteItem</code> operation.</p>
 */
export interface DeleteItemOutput {
  __type?: "DeleteItemOutput";
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
  export const filterSensitiveLog = (obj: DeleteItemOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteItemOutput =>
    __isa(o, "DeleteItemOutput");
}

/**
 * <p>Represents a replica to be removed.</p>
 */
export interface DeleteReplicaAction {
  __type?: "DeleteReplicaAction";
  /**
   * <p>The Region of the replica to be removed.</p>
   */
  RegionName: string | undefined;
}

export namespace DeleteReplicaAction {
  export const filterSensitiveLog = (obj: DeleteReplicaAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicaAction =>
    __isa(o, "DeleteReplicaAction");
}

/**
 * <p>Represents a replica to be deleted.</p>
 */
export interface DeleteReplicationGroupMemberAction {
  __type?: "DeleteReplicationGroupMemberAction";
  /**
   * <p>The Region where the replica exists.</p>
   */
  RegionName: string | undefined;
}

export namespace DeleteReplicationGroupMemberAction {
  export const filterSensitiveLog = (
    obj: DeleteReplicationGroupMemberAction
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationGroupMemberAction =>
    __isa(o, "DeleteReplicationGroupMemberAction");
}

/**
 * <p>A container for a Delete BatchWrite request</p>
 */
export interface DeleteRequest {
  __type?: "DeleteRequest";
  /**
   * <p>The item's key to be delete</p>
   */
  Key: Key | undefined;
}

export namespace DeleteRequest {
  export const filterSensitiveLog = (obj: DeleteRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRequest => __isa(o, "DeleteRequest");
}

/**
 * <p>Represents the input of a <code>DeleteTable</code> operation.</p>
 */
export interface DeleteTableInput {
  __type?: "DeleteTableInput";
  /**
   * <p>The name of the table to delete.</p>
   */
  TableName: string | undefined;
}

export namespace DeleteTableInput {
  export const filterSensitiveLog = (obj: DeleteTableInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTableInput =>
    __isa(o, "DeleteTableInput");
}

/**
 * <p>Represents the output of a <code>DeleteTable</code> operation.</p>
 */
export interface DeleteTableOutput {
  __type?: "DeleteTableOutput";
  /**
   * <p>Represents the properties of a table.</p>
   */
  TableDescription?: TableDescription;
}

export namespace DeleteTableOutput {
  export const filterSensitiveLog = (obj: DeleteTableOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTableOutput =>
    __isa(o, "DeleteTableOutput");
}

export interface DescribeBackupInput {
  __type?: "DescribeBackupInput";
  /**
   * <p>The Amazon Resource Name (ARN) associated with the backup.</p>
   */
  BackupArn: string | undefined;
}

export namespace DescribeBackupInput {
  export const filterSensitiveLog = (obj: DescribeBackupInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBackupInput =>
    __isa(o, "DescribeBackupInput");
}

export interface DescribeBackupOutput {
  __type?: "DescribeBackupOutput";
  /**
   * <p>Contains the description of the backup created for the table.</p>
   */
  BackupDescription?: BackupDescription;
}

export namespace DescribeBackupOutput {
  export const filterSensitiveLog = (obj: DescribeBackupOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBackupOutput =>
    __isa(o, "DescribeBackupOutput");
}

export interface DescribeContinuousBackupsInput {
  __type?: "DescribeContinuousBackupsInput";
  /**
   * <p>Name of the table for which the customer wants to check the continuous backups and point in time recovery settings.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeContinuousBackupsInput {
  export const filterSensitiveLog = (
    obj: DescribeContinuousBackupsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeContinuousBackupsInput =>
    __isa(o, "DescribeContinuousBackupsInput");
}

export interface DescribeContinuousBackupsOutput {
  __type?: "DescribeContinuousBackupsOutput";
  /**
   * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
   */
  ContinuousBackupsDescription?: ContinuousBackupsDescription;
}

export namespace DescribeContinuousBackupsOutput {
  export const filterSensitiveLog = (
    obj: DescribeContinuousBackupsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeContinuousBackupsOutput =>
    __isa(o, "DescribeContinuousBackupsOutput");
}

export interface DescribeContributorInsightsInput {
  __type?: "DescribeContributorInsightsInput";
  /**
   * <p>The name of the global secondary index to describe, if applicable.</p>
   */
  IndexName?: string;

  /**
   * <p>The name of the table to describe.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeContributorInsightsInput {
  export const filterSensitiveLog = (
    obj: DescribeContributorInsightsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeContributorInsightsInput =>
    __isa(o, "DescribeContributorInsightsInput");
}

export interface DescribeContributorInsightsOutput {
  __type?: "DescribeContributorInsightsOutput";
  /**
   * <p>List of names of the associated Alpine rules.</p>
   */
  ContributorInsightsRuleList?: string[];

  /**
   * <p>Current Status contributor insights.</p>
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | string;

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

  /**
   * <p>The name of the global secondary index being described.</p>
   */
  IndexName?: string;

  /**
   * <p>Timestamp of the last time the status was changed.</p>
   */
  LastUpdateDateTime?: Date;

  /**
   * <p>The name of the table being described.</p>
   */
  TableName?: string;
}

export namespace DescribeContributorInsightsOutput {
  export const filterSensitiveLog = (
    obj: DescribeContributorInsightsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeContributorInsightsOutput =>
    __isa(o, "DescribeContributorInsightsOutput");
}

export interface DescribeEndpointsRequest {
  __type?: "DescribeEndpointsRequest";
}

export namespace DescribeEndpointsRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointsRequest =>
    __isa(o, "DescribeEndpointsRequest");
}

export interface DescribeEndpointsResponse {
  __type?: "DescribeEndpointsResponse";
  /**
   * <p>List of endpoints.</p>
   */
  Endpoints: Endpoint[] | undefined;
}

export namespace DescribeEndpointsResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointsResponse =>
    __isa(o, "DescribeEndpointsResponse");
}

export interface DescribeGlobalTableInput {
  __type?: "DescribeGlobalTableInput";
  /**
   * <p>The name of the global table.</p>
   */
  GlobalTableName: string | undefined;
}

export namespace DescribeGlobalTableInput {
  export const filterSensitiveLog = (obj: DescribeGlobalTableInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeGlobalTableInput =>
    __isa(o, "DescribeGlobalTableInput");
}

export interface DescribeGlobalTableOutput {
  __type?: "DescribeGlobalTableOutput";
  /**
   * <p>Contains the details of the global table.</p>
   */
  GlobalTableDescription?: GlobalTableDescription;
}

export namespace DescribeGlobalTableOutput {
  export const filterSensitiveLog = (obj: DescribeGlobalTableOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeGlobalTableOutput =>
    __isa(o, "DescribeGlobalTableOutput");
}

export interface DescribeGlobalTableSettingsInput {
  __type?: "DescribeGlobalTableSettingsInput";
  /**
   * <p>The name of the global table to describe.</p>
   */
  GlobalTableName: string | undefined;
}

export namespace DescribeGlobalTableSettingsInput {
  export const filterSensitiveLog = (
    obj: DescribeGlobalTableSettingsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeGlobalTableSettingsInput =>
    __isa(o, "DescribeGlobalTableSettingsInput");
}

export interface DescribeGlobalTableSettingsOutput {
  __type?: "DescribeGlobalTableSettingsOutput";
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
  export const filterSensitiveLog = (
    obj: DescribeGlobalTableSettingsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeGlobalTableSettingsOutput =>
    __isa(o, "DescribeGlobalTableSettingsOutput");
}

/**
 * <p>Represents the input of a <code>DescribeLimits</code> operation. Has no content.</p>
 */
export interface DescribeLimitsInput {
  __type?: "DescribeLimitsInput";
}

export namespace DescribeLimitsInput {
  export const filterSensitiveLog = (obj: DescribeLimitsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLimitsInput =>
    __isa(o, "DescribeLimitsInput");
}

/**
 * <p>Represents the output of a <code>DescribeLimits</code> operation.</p>
 */
export interface DescribeLimitsOutput {
  __type?: "DescribeLimitsOutput";
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
  export const filterSensitiveLog = (obj: DescribeLimitsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLimitsOutput =>
    __isa(o, "DescribeLimitsOutput");
}

export interface DescribeTableInput {
  __type?: "DescribeTableInput";
  /**
   * <p>The name of the table you want to describe. Allowed characters are <code>a-z</code>, <code>A-Z</code>,
   *        <code>0-9</code>, <code>_</code> (underscore), <code>-</code> (hyphen) and <code>.</code> (period).</p>
   */
  TableName: string | undefined;
}

export namespace DescribeTableInput {
  export const filterSensitiveLog = (obj: DescribeTableInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTableInput =>
    __isa(o, "DescribeTableInput");
}

/**
 * <p>Represents the output of a <code>DescribeTable</code> operation.</p>
 */
export interface DescribeTableOutput {
  __type?: "DescribeTableOutput";
  /**
   * <p>The properties of the table.</p>
   */
  Table?: TableDescription;
}

export namespace DescribeTableOutput {
  export const filterSensitiveLog = (obj: DescribeTableOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTableOutput =>
    __isa(o, "DescribeTableOutput");
}

export interface DescribeTableReplicaAutoScalingInput {
  __type?: "DescribeTableReplicaAutoScalingInput";
  /**
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeTableReplicaAutoScalingInput {
  export const filterSensitiveLog = (
    obj: DescribeTableReplicaAutoScalingInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTableReplicaAutoScalingInput =>
    __isa(o, "DescribeTableReplicaAutoScalingInput");
}

export interface DescribeTableReplicaAutoScalingOutput {
  __type?: "DescribeTableReplicaAutoScalingOutput";
  /**
   * <p>Represents the auto scaling properties of the table.</p>
   */
  TableAutoScalingDescription?: TableAutoScalingDescription;
}

export namespace DescribeTableReplicaAutoScalingOutput {
  export const filterSensitiveLog = (
    obj: DescribeTableReplicaAutoScalingOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTableReplicaAutoScalingOutput =>
    __isa(o, "DescribeTableReplicaAutoScalingOutput");
}

export interface DescribeTimeToLiveInput {
  __type?: "DescribeTimeToLiveInput";
  /**
   * <p>The name of the table to be described.</p>
   */
  TableName: string | undefined;
}

export namespace DescribeTimeToLiveInput {
  export const filterSensitiveLog = (obj: DescribeTimeToLiveInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTimeToLiveInput =>
    __isa(o, "DescribeTimeToLiveInput");
}

export interface DescribeTimeToLiveOutput {
  __type?: "DescribeTimeToLiveOutput";
  /**
   * <p></p>
   */
  TimeToLiveDescription?: TimeToLiveDescription;
}

export namespace DescribeTimeToLiveOutput {
  export const filterSensitiveLog = (obj: DescribeTimeToLiveOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTimeToLiveOutput =>
    __isa(o, "DescribeTimeToLiveOutput");
}

/**
 * <p>An endpoint information details.</p>
 */
export interface Endpoint {
  __type?: "Endpoint";
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
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is Endpoint => __isa(o, "Endpoint");
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
  __type?: "ExpectedAttributeValue";
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
   * <p>Represents the data for the expected attribute.</p>
   *          <p>Each attribute value is described as a name-value pair.  The name is the data type, and the value is the data itself.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the
   *          <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  Value?: AttributeValue;
}

export namespace ExpectedAttributeValue {
  export const filterSensitiveLog = (obj: ExpectedAttributeValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExpectedAttributeValue =>
    __isa(o, "ExpectedAttributeValue");
}

/**
 * <p>Represents a failure a contributor insights operation.</p>
 */
export interface FailureException {
  __type?: "FailureException";
  /**
   * <p>Description of the failure.</p>
   */
  ExceptionDescription?: string;

  /**
   * <p>Exception name.</p>
   */
  ExceptionName?: string;
}

export namespace FailureException {
  export const filterSensitiveLog = (obj: FailureException): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailureException =>
    __isa(o, "FailureException");
}

/**
 * <p>Specifies an item and related attribute values to retrieve in a
 *         <code>TransactGetItem</code> object.</p>
 */
export interface Get {
  __type?: "Get";
  /**
   * <p>One or more substitution tokens for attribute names in the
   *         ProjectionExpression parameter.</p>
   */
  ExpressionAttributeNames?: { [key: string]: string };

  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects that
   *         specifies the primary key of the item to retrieve.</p>
   */
  Key: Key | undefined;

  /**
   * <p>A string that identifies one or more attributes of the specified item
   *         to retrieve from the table.  The attributes in the expression must be
   *         separated by commas. If no attribute names are specified, then all
   *         attributes of the specified item are returned. If any of the requested
   *         attributes are not found, they do not appear in the result.</p>
   */
  ProjectionExpression?: string;

  /**
   * <p>The name of the table from which to retrieve the specified item.</p>
   */
  TableName: string | undefined;
}

export namespace Get {
  export const filterSensitiveLog = (obj: Get): any => ({
    ...obj
  });
  export const isa = (o: any): o is Get => __isa(o, "Get");
}

/**
 * <p>Represents the input of a <code>GetItem</code> operation.</p>
 */
export interface GetItemInput {
  __type?: "GetItemInput";
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
   * <p>A map of attribute names to <code>AttributeValue</code> objects, representing the primary key of
   *       the item to retrieve.</p>
   *          <p>For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.</p>
   */
  Key: Key | undefined;

  /**
   * <p>A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas.</p>
   *          <p>If no attribute names are specified, then all attributes are returned. If any of the
   *             requested attributes are not found, they do not appear in the result.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Specifying Item Attributes</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ProjectionExpression?: string;

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
   * <p>The name of the table containing the requested item.</p>
   */
  TableName: string | undefined;
}

export namespace GetItemInput {
  export const filterSensitiveLog = (obj: GetItemInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetItemInput => __isa(o, "GetItemInput");
}

/**
 * <p>Represents the output of a <code>GetItem</code> operation.</p>
 */
export interface GetItemOutput {
  __type?: "GetItemOutput";
  /**
   * <p>The capacity units consumed by the <code>GetItem</code> operation. The data returned
   *             includes the total provisioned throughput consumed, along with statistics for the table
   *             and any indexes involved in the operation. <code>ConsumedCapacity</code> is only
   *             returned if the <code>ReturnConsumedCapacity</code> parameter was specified. For more
   *             information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Read/Write Capacity Mode</a> in the <i>Amazon DynamoDB Developer
   *                 Guide</i>.</p>
   */
  ConsumedCapacity?: ConsumedCapacity;

  /**
   * <p>A map of attribute names to <code>AttributeValue</code> objects, as specified
   *             by <code>ProjectionExpression</code>.</p>
   */
  Item?: { [key: string]: AttributeValue };
}

export namespace GetItemOutput {
  export const filterSensitiveLog = (obj: GetItemOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetItemOutput => __isa(o, "GetItemOutput");
}

/**
 * <p>Represents the properties of a global secondary index.</p>
 */
export interface GlobalSecondaryIndex {
  __type?: "GlobalSecondaryIndex";
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
  KeySchema: KeySchema | undefined;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global
   *          secondary index. These are in addition to the primary key attributes and index key
   *          attributes, which are automatically projected. </p>
   */
  Projection: Projection | undefined;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p>
   *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;
}

export namespace GlobalSecondaryIndex {
  export const filterSensitiveLog = (obj: GlobalSecondaryIndex): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalSecondaryIndex =>
    __isa(o, "GlobalSecondaryIndex");
}

/**
 * <p>Represents the auto scaling settings of a global secondary index for a global table
 *          that will be modified.</p>
 */
export interface GlobalSecondaryIndexAutoScalingUpdate {
  __type?: "GlobalSecondaryIndexAutoScalingUpdate";
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
  export const filterSensitiveLog = (
    obj: GlobalSecondaryIndexAutoScalingUpdate
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalSecondaryIndexAutoScalingUpdate =>
    __isa(o, "GlobalSecondaryIndexAutoScalingUpdate");
}

/**
 * <p>Represents the properties of a global secondary index.</p>
 */
export interface GlobalSecondaryIndexDescription {
  __type?: "GlobalSecondaryIndexDescription";
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
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the index.</p>
   */
  IndexArn?: string;

  /**
   * <p>The name of the global secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  IndexSizeBytes?: number;

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
   * <p>The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  ItemCount?: number;

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
  KeySchema?: KeySchema;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global
   *          secondary index. These are in addition to the primary key attributes and index key
   *          attributes, which are automatically projected. </p>
   */
  Projection?: Projection;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p>
   *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughputDescription;
}

export namespace GlobalSecondaryIndexDescription {
  export const filterSensitiveLog = (
    obj: GlobalSecondaryIndexDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalSecondaryIndexDescription =>
    __isa(o, "GlobalSecondaryIndexDescription");
}

/**
 * <p>Represents the properties of a global secondary index for the table
 *      when the backup was created.</p>
 */
export interface GlobalSecondaryIndexInfo {
  __type?: "GlobalSecondaryIndexInfo";
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
  KeySchema?: KeySchema;

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
  export const filterSensitiveLog = (obj: GlobalSecondaryIndexInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalSecondaryIndexInfo =>
    __isa(o, "GlobalSecondaryIndexInfo");
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
  __type?: "GlobalSecondaryIndexUpdate";
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

  /**
   * <p>The name of an existing global secondary index, along with new provisioned throughput settings to be applied to that index.</p>
   */
  Update?: UpdateGlobalSecondaryIndexAction;
}

export namespace GlobalSecondaryIndexUpdate {
  export const filterSensitiveLog = (obj: GlobalSecondaryIndexUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalSecondaryIndexUpdate =>
    __isa(o, "GlobalSecondaryIndexUpdate");
}

/**
 * <p>Represents the properties of a global table.</p>
 */
export interface GlobalTable {
  __type?: "GlobalTable";
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
  export const filterSensitiveLog = (obj: GlobalTable): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalTable => __isa(o, "GlobalTable");
}

/**
 * <p>The specified global table already exists.</p>
 */
export interface GlobalTableAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "GlobalTableAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace GlobalTableAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: GlobalTableAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalTableAlreadyExistsException =>
    __isa(o, "GlobalTableAlreadyExistsException");
}

/**
 * <p>Contains details about the global table.</p>
 */
export interface GlobalTableDescription {
  __type?: "GlobalTableDescription";
  /**
   * <p>The creation time of the global table.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The unique identifier of the global table.</p>
   */
  GlobalTableArn?: string;

  /**
   * <p>The global table name.</p>
   */
  GlobalTableName?: string;

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
   * <p>The Regions where the global table has replicas.</p>
   */
  ReplicationGroup?: ReplicaDescription[];
}

export namespace GlobalTableDescription {
  export const filterSensitiveLog = (obj: GlobalTableDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalTableDescription =>
    __isa(o, "GlobalTableDescription");
}

/**
 * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
 */
export interface GlobalTableGlobalSecondaryIndexSettingsUpdate {
  __type?: "GlobalTableGlobalSecondaryIndexSettingsUpdate";
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>Auto scaling settings for managing a global secondary index's write capacity
   *          units.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException.</code>
   *          </p>
   */
  ProvisionedWriteCapacityUnits?: number;
}

export namespace GlobalTableGlobalSecondaryIndexSettingsUpdate {
  export const filterSensitiveLog = (
    obj: GlobalTableGlobalSecondaryIndexSettingsUpdate
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GlobalTableGlobalSecondaryIndexSettingsUpdate =>
    __isa(o, "GlobalTableGlobalSecondaryIndexSettingsUpdate");
}

/**
 * <p>The specified global table does not exist.</p>
 */
export interface GlobalTableNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "GlobalTableNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace GlobalTableNotFoundException {
  export const filterSensitiveLog = (
    obj: GlobalTableNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalTableNotFoundException =>
    __isa(o, "GlobalTableNotFoundException");
}

export type GlobalTableStatus = "ACTIVE" | "CREATING" | "DELETING" | "UPDATING";

/**
 * <p>DynamoDB rejected the request because you retried a request with a different payload but
 *       with an idempotent token that was already used.</p>
 */
export interface IdempotentParameterMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  Message?: string;
}

export namespace IdempotentParameterMismatchException {
  export const filterSensitiveLog = (
    obj: IdempotentParameterMismatchException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IdempotentParameterMismatchException =>
    __isa(o, "IdempotentParameterMismatchException");
}

/**
 * <p>The operation tried to access a nonexistent index.</p>
 */
export interface IndexNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "IndexNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace IndexNotFoundException {
  export const filterSensitiveLog = (obj: IndexNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is IndexNotFoundException =>
    __isa(o, "IndexNotFoundException");
}

export type IndexStatus = "ACTIVE" | "CREATING" | "DELETING" | "UPDATING";

/**
 * <p>An error occurred on the server side.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  /**
   * <p>The server encountered an internal error trying to fulfill the request.</p>
   */
  message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerError =>
    __isa(o, "InternalServerError");
}

export interface InvalidEndpointException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEndpointException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidEndpointException {
  export const filterSensitiveLog = (obj: InvalidEndpointException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidEndpointException =>
    __isa(o, "InvalidEndpointException");
}

/**
 * <p>An invalid restore time was specified. RestoreDateTime must be between EarliestRestorableDateTime and LatestRestorableDateTime.</p>
 */
export interface InvalidRestoreTimeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRestoreTimeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreTimeException {
  export const filterSensitiveLog = (
    obj: InvalidRestoreTimeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRestoreTimeException =>
    __isa(o, "InvalidRestoreTimeException");
}

/**
 * <p>Information about item collections, if any, that were affected by the operation.
 *         <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the
 *       table does not have any local secondary indexes, this information is not returned in the response.</p>
 */
export interface ItemCollectionMetrics {
  __type?: "ItemCollectionMetrics";
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
  export const filterSensitiveLog = (obj: ItemCollectionMetrics): any => ({
    ...obj
  });
  export const isa = (o: any): o is ItemCollectionMetrics =>
    __isa(o, "ItemCollectionMetrics");
}

/**
 * <p>An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes.</p>
 */
export interface ItemCollectionSizeLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ItemCollectionSizeLimitExceededException";
  $fault: "client";
  /**
   * <p>The total size of an item collection has exceeded the maximum limit of 10 gigabytes.</p>
   */
  message?: string;
}

export namespace ItemCollectionSizeLimitExceededException {
  export const filterSensitiveLog = (
    obj: ItemCollectionSizeLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ItemCollectionSizeLimitExceededException =>
    __isa(o, "ItemCollectionSizeLimitExceededException");
}

/**
 * <p>Details for the requested item.</p>
 */
export interface ItemResponse {
  __type?: "ItemResponse";
  /**
   * <p>Map of attribute data consisting of the data type and attribute value.</p>
   */
  Item?: { [key: string]: AttributeValue };
}

export namespace ItemResponse {
  export const filterSensitiveLog = (obj: ItemResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ItemResponse => __isa(o, "ItemResponse");
}

/**
 * <p>The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash)
 *        primary key or a two attribute (hash-and-range) primary key.</p>
 */
export interface Key {
  __type?: "Key";
  /**
   * <p>A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys
   *        have one index value. The value can be <code>String</code>, <code>Number</code>, <code>StringSet</code>,
   *        <code>NumberSet</code>.</p>
   */
  HashKeyElement: AttributeValue | undefined;

  /**
   * <p>A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string
   *        or a number, and is only used for hash-and-range primary keys. The value can be <code>String</code>,
   *        <code>Number</code>, <code>StringSet</code>, <code>NumberSet</code>.</p>
   */
  RangeKeyElement?: AttributeValue;
}

export namespace Key {
  export const filterSensitiveLog = (obj: Key): any => ({
    ...obj
  });
  export const isa = (o: any): o is Key => __isa(o, "Key");
}

/**
 * <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p>
 *          <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a
 *       simple primary key, you only need to provide the partition key. For a composite
 *       primary key, you must provide <i>both</i> the partition key and the sort key.</p>
 */
export interface KeysAndAttributes {
  __type?: "KeysAndAttributes";
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

  /**
   * <p>The primary key attribute values that define the items and the attributes associated with the items.</p>
   */
  Keys: Key[] | undefined;

  /**
   * <p>A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars,
   *          sets, or elements of a JSON document. The attributes in the <code>ProjectionExpression</code> must be separated by
   *          commas.</p>
   *          <p>If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html">Accessing Item Attributes</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProjectionExpression?: string;
}

export namespace KeysAndAttributes {
  export const filterSensitiveLog = (obj: KeysAndAttributes): any => ({
    ...obj
  });
  export const isa = (o: any): o is KeysAndAttributes =>
    __isa(o, "KeysAndAttributes");
}

/**
 * <p>The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute
 *        (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>.
 *        A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a
 *        <code>RangeKeyElement</code>.</p>
 */
export interface KeySchema {
  __type?: "KeySchema";
  /**
   * <p>A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys
   *        have one index value. The value can be <code>String</code>, <code>Number</code>, <code>StringSet</code>,
   *        <code>NumberSet</code>.</p>
   */
  HashKeyElement: KeySchemaElement | undefined;

  /**
   * <p>A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string
   *        or a number, and is only used for hash-and-range primary keys. The value can be <code>String</code>,
   *        <code>Number</code>, <code>StringSet</code>, <code>NumberSet</code>.</p>
   */
  RangeKeyElement?: KeySchemaElement;
}

export namespace KeySchema {
  export const filterSensitiveLog = (obj: KeySchema): any => ({
    ...obj
  });
  export const isa = (o: any): o is KeySchema => __isa(o, "KeySchema");
}

/**
 * <p><code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table.</p>
 */
export interface KeySchemaElement {
  __type?: "KeySchemaElement";
  /**
   * <p>The <code>AttributeName</code> of the <code>KeySchemaElement</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The <code>AttributeType</code> of the <code>KeySchemaElement</code> which can be a <code>String</code> or a
   *        <code>Number</code>.</p>
   */
  AttributeType: ScalarAttributeType | string | undefined;
}

export namespace KeySchemaElement {
  export const filterSensitiveLog = (obj: KeySchemaElement): any => ({
    ...obj
  });
  export const isa = (o: any): o is KeySchemaElement =>
    __isa(o, "KeySchemaElement");
}

/**
 * <p>This exception is thrown when the subscriber exceeded the limits on the number of objects or operations.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListBackupsInput {
  __type?: "ListBackupsInput";
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

  /**
   * <p>
   *             <code>LastEvaluatedBackupArn</code> is the Amazon Resource Name (ARN) of the backup last
   *             evaluated when the current page of results was returned, inclusive of the current page
   *             of results. This value may be specified as the <code>ExclusiveStartBackupArn</code> of a
   *             new <code>ListBackups</code> operation in order to fetch the next page of results. </p>
   */
  ExclusiveStartBackupArn?: string;

  /**
   * <p>Maximum number of backups to return at once.</p>
   */
  Limit?: number;

  /**
   * <p>The backups from the table specified by <code>TableName</code> are listed. </p>
   */
  TableName?: string;

  /**
   * <p>Only backups created after this time are listed. <code>TimeRangeLowerBound</code> is inclusive.</p>
   */
  TimeRangeLowerBound?: Date;

  /**
   * <p>Only backups created before this time are listed. <code>TimeRangeUpperBound</code> is exclusive. </p>
   */
  TimeRangeUpperBound?: Date;
}

export namespace ListBackupsInput {
  export const filterSensitiveLog = (obj: ListBackupsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupsInput =>
    __isa(o, "ListBackupsInput");
}

export interface ListBackupsOutput {
  __type?: "ListBackupsOutput";
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
  export const filterSensitiveLog = (obj: ListBackupsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBackupsOutput =>
    __isa(o, "ListBackupsOutput");
}

export interface ListContributorInsightsInput {
  __type?: "ListContributorInsightsInput";
  /**
   * <p>Maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to for the desired page, if there is one.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;
}

export namespace ListContributorInsightsInput {
  export const filterSensitiveLog = (
    obj: ListContributorInsightsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListContributorInsightsInput =>
    __isa(o, "ListContributorInsightsInput");
}

export interface ListContributorInsightsOutput {
  __type?: "ListContributorInsightsOutput";
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
  export const filterSensitiveLog = (
    obj: ListContributorInsightsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListContributorInsightsOutput =>
    __isa(o, "ListContributorInsightsOutput");
}

export interface ListGlobalTablesInput {
  __type?: "ListGlobalTablesInput";
  /**
   * <p>The first global table name that this operation will evaluate.</p>
   */
  ExclusiveStartGlobalTableName?: string;

  /**
   * <p>The maximum number of table names to return.</p>
   */
  Limit?: number;

  /**
   * <p>Lists the global tables in a specific Region.</p>
   */
  RegionName?: string;
}

export namespace ListGlobalTablesInput {
  export const filterSensitiveLog = (obj: ListGlobalTablesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGlobalTablesInput =>
    __isa(o, "ListGlobalTablesInput");
}

export interface ListGlobalTablesOutput {
  __type?: "ListGlobalTablesOutput";
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
  export const filterSensitiveLog = (obj: ListGlobalTablesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGlobalTablesOutput =>
    __isa(o, "ListGlobalTablesOutput");
}

/**
 * <p>Represents the input of a <code>ListTables</code> operation.</p>
 */
export interface ListTablesInput {
  __type?: "ListTablesInput";
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
  export const filterSensitiveLog = (obj: ListTablesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTablesInput =>
    __isa(o, "ListTablesInput");
}

/**
 * <p>Represents the output of a <code>ListTables</code> operation.</p>
 */
export interface ListTablesOutput {
  __type?: "ListTablesOutput";
  /**
   * <p>The name of the last table in the current page of results. Use this value as the
   *         <code>ExclusiveStartTableName</code> in a new request to obtain the next page of results, until
   *       all the table names are returned.</p>
   *          <p>If you do not receive a <code>LastEvaluatedTableName</code> value in the response, this means that
   *       there are no more table names to be retrieved.</p>
   */
  LastEvaluatedTableName?: string;

  /**
   * <p>The names of the tables associated with the current account at the current endpoint. The maximum size of this array is 100.</p>
   *          <p>If <code>LastEvaluatedTableName</code> also appears in the output, you can use this value as the
   *         <code>ExclusiveStartTableName</code> parameter in a subsequent <code>ListTables</code> request and
   *       obtain the next page of results.</p>
   */
  TableNames?: string[];
}

export namespace ListTablesOutput {
  export const filterSensitiveLog = (obj: ListTablesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTablesOutput =>
    __isa(o, "ListTablesOutput");
}

export interface ListTagsOfResourceInput {
  __type?: "ListTagsOfResourceInput";
  /**
   * <p>An optional string that, if supplied, must be copied from the output of a previous
   *       call to ListTagOfResource. When provided in this manner, this API fetches the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon DynamoDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsOfResourceInput {
  export const filterSensitiveLog = (obj: ListTagsOfResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsOfResourceInput =>
    __isa(o, "ListTagsOfResourceInput");
}

export interface ListTagsOfResourceOutput {
  __type?: "ListTagsOfResourceOutput";
  /**
   * <p>If this value is returned, there are additional results to be displayed. To retrieve them,
   *       call ListTagsOfResource again, with NextToken set to this value.</p>
   */
  NextToken?: string;

  /**
   * <p>The tags currently associated with the Amazon DynamoDB resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsOfResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsOfResourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsOfResourceOutput =>
    __isa(o, "ListTagsOfResourceOutput");
}

/**
 * <p>Represents the properties of a local secondary index.</p>
 */
export interface LocalSecondaryIndex {
  __type?: "LocalSecondaryIndex";
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
  KeySchema: KeySchema | undefined;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the local
   *          secondary index. These are in addition to the primary key attributes and index key
   *          attributes, which are automatically projected. </p>
   */
  Projection: Projection | undefined;
}

export namespace LocalSecondaryIndex {
  export const filterSensitiveLog = (obj: LocalSecondaryIndex): any => ({
    ...obj
  });
  export const isa = (o: any): o is LocalSecondaryIndex =>
    __isa(o, "LocalSecondaryIndex");
}

/**
 * <p>Represents the properties of a local secondary index.</p>
 */
export interface LocalSecondaryIndexDescription {
  __type?: "LocalSecondaryIndexDescription";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the index.</p>
   */
  IndexArn?: string;

  /**
   * <p>Represents the name of the local secondary index.</p>
   */
  IndexName?: string;

  /**
   * <p>The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  IndexSizeBytes?: number;

  /**
   * <p>The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  ItemCount?: number;

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
  KeySchema?: KeySchema;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global
   *          secondary index. These are in addition to the primary key attributes and index key
   *          attributes, which are automatically projected. </p>
   */
  Projection?: Projection;
}

export namespace LocalSecondaryIndexDescription {
  export const filterSensitiveLog = (
    obj: LocalSecondaryIndexDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LocalSecondaryIndexDescription =>
    __isa(o, "LocalSecondaryIndexDescription");
}

/**
 * <p>Represents the properties of a local secondary index for the table
 *      when the backup was created.</p>
 */
export interface LocalSecondaryIndexInfo {
  __type?: "LocalSecondaryIndexInfo";
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
  KeySchema?: KeySchema;

  /**
   * <p>Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. </p>
   */
  Projection?: Projection;
}

export namespace LocalSecondaryIndexInfo {
  export const filterSensitiveLog = (obj: LocalSecondaryIndexInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is LocalSecondaryIndexInfo =>
    __isa(o, "LocalSecondaryIndexInfo");
}

/**
 * <p>The description of the point in time settings applied to the table.</p>
 */
export interface PointInTimeRecoveryDescription {
  __type?: "PointInTimeRecoveryDescription";
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
}

export namespace PointInTimeRecoveryDescription {
  export const filterSensitiveLog = (
    obj: PointInTimeRecoveryDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PointInTimeRecoveryDescription =>
    __isa(o, "PointInTimeRecoveryDescription");
}

/**
 * <p>Represents the settings used to enable point in time recovery.</p>
 */
export interface PointInTimeRecoverySpecification {
  __type?: "PointInTimeRecoverySpecification";
  /**
   * <p>Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.</p>
   */
  PointInTimeRecoveryEnabled: boolean | undefined;
}

export namespace PointInTimeRecoverySpecification {
  export const filterSensitiveLog = (
    obj: PointInTimeRecoverySpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PointInTimeRecoverySpecification =>
    __isa(o, "PointInTimeRecoverySpecification");
}

export type PointInTimeRecoveryStatus = "DISABLED" | "ENABLED";

/**
 * <p>Point in time recovery has not yet been enabled for this source table.</p>
 */
export interface PointInTimeRecoveryUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "PointInTimeRecoveryUnavailableException";
  $fault: "client";
  message?: string;
}

export namespace PointInTimeRecoveryUnavailableException {
  export const filterSensitiveLog = (
    obj: PointInTimeRecoveryUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PointInTimeRecoveryUnavailableException =>
    __isa(o, "PointInTimeRecoveryUnavailableException");
}

/**
 * <p>Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.</p>
 */
export interface Projection {
  __type?: "Projection";
  /**
   * <p>Represents the non-key attribute names which will be projected into the index.</p>
   *          <p>For local secondary indexes, the total count of <code>NonKeyAttributes</code> summed across all of the local secondary indexes,
   *       must not exceed 20. If you project the same attribute into two
   *       different indexes, this counts as two distinct attributes when determining the total.</p>
   */
  NonKeyAttributes?: string[];

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
   *                   <code>INCLUDE</code> - Only the specified table attributes are projected into the
   *                index. The list of projected attributes is in <code>NonKeyAttributes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code> - All of the table attributes are projected into the index.</p>
   *             </li>
   *          </ul>
   */
  ProjectionType?: ProjectionType | string;
}

export namespace Projection {
  export const filterSensitiveLog = (obj: Projection): any => ({
    ...obj
  });
  export const isa = (o: any): o is Projection => __isa(o, "Projection");
}

export type ProjectionType = "ALL" | "INCLUDE" | "KEYS_ONLY";

/**
 * <p>Represents the provisioned throughput settings for a specified table or index. The settings
 *       can be modified using the <code>UpdateTable</code> operation.</p>
 *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface ProvisionedThroughput {
  __type?: "ProvisionedThroughput";
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
  export const filterSensitiveLog = (obj: ProvisionedThroughput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProvisionedThroughput =>
    __isa(o, "ProvisionedThroughput");
}

export interface ProvisionedThroughputDescription {
  __type?: "ProvisionedThroughputDescription";
  LastDecreaseDateTime?: Date;
  LastIncreaseDateTime?: Date;
  NumberOfDecreasesToday?: number;
  ReadCapacityUnits?: number;
  WriteCapacityUnits?: number;
}

export namespace ProvisionedThroughputDescription {
  export const filterSensitiveLog = (
    obj: ProvisionedThroughputDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProvisionedThroughputDescription =>
    __isa(o, "ProvisionedThroughputDescription");
}

/**
 * <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that
 *       receive this exception. Your request is eventually successful, unless your retry queue is too
 *       large to finish. Reduce the frequency of requests and use exponential backoff. For more
 *       information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential
 *         Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface ProvisionedThroughputExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ProvisionedThroughputExceededException";
  $fault: "client";
  /**
   * <p>You exceeded your maximum allowed provisioned throughput.</p>
   */
  message?: string;
}

export namespace ProvisionedThroughputExceededException {
  export const filterSensitiveLog = (
    obj: ProvisionedThroughputExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProvisionedThroughputExceededException =>
    __isa(o, "ProvisionedThroughputExceededException");
}

/**
 * <p>Replica-specific provisioned throughput settings. If not specified, uses the
 *          source table's provisioned throughput settings.</p>
 */
export interface ProvisionedThroughputOverride {
  __type?: "ProvisionedThroughputOverride";
  /**
   * <p>Replica-specific read capacity units. If not specified, uses the source table's
   *          read capacity settings.</p>
   */
  ReadCapacityUnits?: number;
}

export namespace ProvisionedThroughputOverride {
  export const filterSensitiveLog = (
    obj: ProvisionedThroughputOverride
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProvisionedThroughputOverride =>
    __isa(o, "ProvisionedThroughputOverride");
}

/**
 * <p>Represents a request to perform a <code>PutItem</code> operation.</p>
 */
export interface Put {
  __type?: "Put";
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
   * <p>A map of attribute name to attribute values, representing the primary key
   *         of the item to be written by <code>PutItem</code>. All of the table's primary key
   *         attributes must be specified, and their data types must match those of the table's
   *         key schema. If any attributes are present in the item that are part of an index
   *         key schema for the table, their types must match the index key schema. </p>
   */
  Item: { [key: string]: AttributeValue } | undefined;

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to
   *         get the item attributes if the <code>Put</code> condition fails.
   *         For <code>ReturnValuesOnConditionCheckFailure</code>, the valid
   *         values are: NONE and ALL_OLD.</p>
   */
  ReturnValuesOnConditionCheckFailure?:
    | ReturnValuesOnConditionCheckFailure
    | string;

  /**
   * <p>Name of the table in which to write the item.</p>
   */
  TableName: string | undefined;
}

export namespace Put {
  export const filterSensitiveLog = (obj: Put): any => ({
    ...obj
  });
  export const isa = (o: any): o is Put => __isa(o, "Put");
}

/**
 * <p>Represents the input of a <code>PutItem</code> operation.</p>
 */
export interface PutItemInput {
  __type?: "PutItemInput";
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
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConditionalOperator?: ConditionalOperator | string;

  /**
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.  For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html">Expected</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  Expected?: { [key: string]: ExpectedAttributeValue };

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

  /**
   * <p>A map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item.</p>
   *          <p>You must provide all of the attributes for the primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide both values for both the partition key and the sort key.</p>
   *          <p>If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.</p>
   *          <p>For more information about primary keys, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey">Primary Key</a> in the <i>Amazon DynamoDB Developer
   *             Guide</i>.</p>
   *          <p>Each element in the <code>Item</code> map is an <code>AttributeValue</code> object.</p>
   */
  Item: { [key: string]: AttributeValue } | undefined;

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
   * <p>The name of the table to contain the item.</p>
   */
  TableName: string | undefined;
}

export namespace PutItemInput {
  export const filterSensitiveLog = (obj: PutItemInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutItemInput => __isa(o, "PutItemInput");
}

/**
 * <p>Represents the output of a <code>PutItem</code> operation.</p>
 */
export interface PutItemOutput {
  __type?: "PutItemOutput";
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
  export const filterSensitiveLog = (obj: PutItemOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutItemOutput => __isa(o, "PutItemOutput");
}

/**
 * <p>A container for a Put BatchWrite request</p>
 */
export interface PutRequest {
  __type?: "PutRequest";
  /**
   * <p>The item to put</p>
   */
  Item: { [key: string]: AttributeValue } | undefined;
}

export namespace PutRequest {
  export const filterSensitiveLog = (obj: PutRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRequest => __isa(o, "PutRequest");
}

export interface QueryInput {
  __type?: "QueryInput";
  /**
   * <p>List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned.
   *        If some attributes are not found, they will not appear in the result.</p>
   */
  AttributesToGet?: string[];

  ConsistentRead?: boolean;
  /**
   * <p>If set to <code>true</code>, Amazon DynamoDB returns a total number of items that match the query parameters,
   *        instead of a list of the matching items and their attributes. Do not set <code>Count</code> to <code>true</code> while providing
   *        a list of <code>AttributesToGet</code>, otherwise Amazon DynamoDB returns a validation error.</p>
   */
  Count?: boolean;

  /**
   * <p>Primary key of the item from which to continue an earlier query. An earlier query might provide this value as the
   *        <code>LastEvaluatedKey</code> if that query operation was interrupted before completing the query; either because
   *        of the result set size or the <code>Limit</code> parameter. The <code>LastEvaluatedKey</code> can be passed back
   *        in a new query request to continue the operation from that point.</p>
   */
  ExclusiveStartKey?: Key;

  /**
   * <p>Attribute value of the hash component of the composite primary key.</p>
   */
  HashKeyValue: AttributeValue | undefined;

  /**
   * <p>The maximum number of items to return. If Amazon DynamoDB hits this limit while querying the table, it stops the
   *        query and returns the matching values up to the limit, and a <code>LastEvaluatedKey</code> to apply in a
   *        subsequent operation to continue the query. Also, if the result set size exceeds 1MB before Amazon DynamoDB hits
   *        this limit, it stops the query and returns the matching values, and a <code>LastEvaluatedKey</code> to apply in a
   *        subsequent operation to continue the query.</p>
   */
  Limit?: number;

  /**
   * <p>A container for the attribute values and comparison operators to use for the query.</p>
   */
  RangeKeyCondition?: Condition;

  /**
   * <p>Specifies forward or backward traversal of the index. Amazon DynamoDB returns results reflecting the requested
   *        order, determined by the range key. The default value is <code>true</code> (forward).</p>
   */
  ScanIndexForward?: boolean;

  /**
   * <p>The name of the table in which you want to query. Allowed characters are <code>a-z</code>, <code>A-Z</code>,
   *        <code>0-9</code>, <code>_</code> (underscore), <code>-</code> (hyphen) and <code>.</code> (period).</p>
   */
  TableName: string | undefined;
}

export namespace QueryInput {
  export const filterSensitiveLog = (obj: QueryInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueryInput => __isa(o, "QueryInput");
}

export interface QueryOutput {
  __type?: "QueryOutput";
  /**
   * <p>The number of Capacity Units of the provisioned throughput of the table consumed during the operation.
   *        <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume
   *        <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code>
   *        operations consume <code>WriteCapacityUnits</code>.</p>
   */
  ConsumedCapacityUnits?: number;

  /**
   * <p>Number of items in the response.</p>
   */
  Count?: number;

  Items?: { [key: string]: AttributeValue }[];
  /**
   * <p>Primary key of the item where the query operation stopped, inclusive of the previous result set. Use this value
   *        to start a new operation excluding this value in the new request. The <code>LastEvaluatedKey</code> is null when
   *        the entire query result set is complete (i.e. the operation processed the "last page").</p>
   */
  LastEvaluatedKey?: Key;
}

export namespace QueryOutput {
  export const filterSensitiveLog = (obj: QueryOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueryOutput => __isa(o, "QueryOutput");
}

/**
 * <p>Represents the properties of a replica.</p>
 */
export interface Replica {
  __type?: "Replica";
  /**
   * <p>The Region where the replica needs to be created.</p>
   */
  RegionName?: string;
}

export namespace Replica {
  export const filterSensitiveLog = (obj: Replica): any => ({
    ...obj
  });
  export const isa = (o: any): o is Replica => __isa(o, "Replica");
}

/**
 * <p>The specified replica is already part of the global table.</p>
 */
export interface ReplicaAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplicaAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ReplicaAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ReplicaAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaAlreadyExistsException =>
    __isa(o, "ReplicaAlreadyExistsException");
}

/**
 * <p>Represents the auto scaling settings of the replica.</p>
 */
export interface ReplicaAutoScalingDescription {
  __type?: "ReplicaAutoScalingDescription";
  /**
   * <p>Replica-specific global secondary index auto scaling settings.</p>
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[];

  /**
   * <p>The Region where the replica exists.</p>
   */
  RegionName?: string;

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
  export const filterSensitiveLog = (
    obj: ReplicaAutoScalingDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaAutoScalingDescription =>
    __isa(o, "ReplicaAutoScalingDescription");
}

/**
 * <p>Represents the auto scaling settings of a replica that will be modified.</p>
 */
export interface ReplicaAutoScalingUpdate {
  __type?: "ReplicaAutoScalingUpdate";
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
  export const filterSensitiveLog = (obj: ReplicaAutoScalingUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaAutoScalingUpdate =>
    __isa(o, "ReplicaAutoScalingUpdate");
}

/**
 * <p>Contains the details of the replica.</p>
 */
export interface ReplicaDescription {
  __type?: "ReplicaDescription";
  /**
   * <p>Replica-specific global secondary index settings.</p>
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[];

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
}

export namespace ReplicaDescription {
  export const filterSensitiveLog = (obj: ReplicaDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaDescription =>
    __isa(o, "ReplicaDescription");
}

/**
 * <p>Represents the properties of a replica global secondary index.</p>
 */
export interface ReplicaGlobalSecondaryIndex {
  __type?: "ReplicaGlobalSecondaryIndex";
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
  export const filterSensitiveLog = (
    obj: ReplicaGlobalSecondaryIndex
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaGlobalSecondaryIndex =>
    __isa(o, "ReplicaGlobalSecondaryIndex");
}

/**
 * <p>Represents the auto scaling configuration for a replica global secondary index.</p>
 */
export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
  __type?: "ReplicaGlobalSecondaryIndexAutoScalingDescription";
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
  export const filterSensitiveLog = (
    obj: ReplicaGlobalSecondaryIndexAutoScalingDescription
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ReplicaGlobalSecondaryIndexAutoScalingDescription =>
    __isa(o, "ReplicaGlobalSecondaryIndexAutoScalingDescription");
}

/**
 * <p>Represents the auto scaling settings of a global secondary index for a replica
 *          that will be modified.</p>
 */
export interface ReplicaGlobalSecondaryIndexAutoScalingUpdate {
  __type?: "ReplicaGlobalSecondaryIndexAutoScalingUpdate";
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
  export const filterSensitiveLog = (
    obj: ReplicaGlobalSecondaryIndexAutoScalingUpdate
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ReplicaGlobalSecondaryIndexAutoScalingUpdate =>
    __isa(o, "ReplicaGlobalSecondaryIndexAutoScalingUpdate");
}

/**
 * <p>Represents the properties of a replica global secondary index.</p>
 */
export interface ReplicaGlobalSecondaryIndexDescription {
  __type?: "ReplicaGlobalSecondaryIndexDescription";
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
  export const filterSensitiveLog = (
    obj: ReplicaGlobalSecondaryIndexDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaGlobalSecondaryIndexDescription =>
    __isa(o, "ReplicaGlobalSecondaryIndexDescription");
}

/**
 * <p>Represents the properties of a global secondary index.</p>
 */
export interface ReplicaGlobalSecondaryIndexSettingsDescription {
  __type?: "ReplicaGlobalSecondaryIndexSettingsDescription";
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
   * <p>Auto scaling settings for a global secondary index replica's read capacity units.</p>
   */
  ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedReadCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for a global secondary index replica's write capacity
   *          units.</p>
   */
  ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedWriteCapacityUnits?: number;
}

export namespace ReplicaGlobalSecondaryIndexSettingsDescription {
  export const filterSensitiveLog = (
    obj: ReplicaGlobalSecondaryIndexSettingsDescription
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ReplicaGlobalSecondaryIndexSettingsDescription =>
    __isa(o, "ReplicaGlobalSecondaryIndexSettingsDescription");
}

/**
 * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
 */
export interface ReplicaGlobalSecondaryIndexSettingsUpdate {
  __type?: "ReplicaGlobalSecondaryIndexSettingsUpdate";
  /**
   * <p>The name of the global secondary index. The name must be unique among all other indexes on this table.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>Auto scaling settings for managing a global secondary index replica's read capacity
   *          units.</p>
   */
  ProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  ProvisionedReadCapacityUnits?: number;
}

export namespace ReplicaGlobalSecondaryIndexSettingsUpdate {
  export const filterSensitiveLog = (
    obj: ReplicaGlobalSecondaryIndexSettingsUpdate
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaGlobalSecondaryIndexSettingsUpdate =>
    __isa(o, "ReplicaGlobalSecondaryIndexSettingsUpdate");
}

/**
 * <p>The specified replica is no longer part of the global table.</p>
 */
export interface ReplicaNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplicaNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ReplicaNotFoundException {
  export const filterSensitiveLog = (obj: ReplicaNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaNotFoundException =>
    __isa(o, "ReplicaNotFoundException");
}

/**
 * <p>Represents the properties of a replica.</p>
 */
export interface ReplicaSettingsDescription {
  __type?: "ReplicaSettingsDescription";
  /**
   * <p>The Region name of the replica.</p>
   */
  RegionName: string | undefined;

  /**
   * <p>The read/write capacity mode of the replica.</p>
   */
  ReplicaBillingModeSummary?: BillingModeSummary;

  /**
   * <p>Replica global secondary index settings for the global table.</p>
   */
  ReplicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[];

  /**
   * <p>Auto scaling settings for a global table replica's read capacity units.</p>
   */
  ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.
   *         For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write
   *         Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.
   *      </p>
   */
  ReplicaProvisionedReadCapacityUnits?: number;

  /**
   * <p>Auto scaling settings for a global table replica's write capacity units.</p>
   */
  ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>.
   *         For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write
   *         Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ReplicaProvisionedWriteCapacityUnits?: number;

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
}

export namespace ReplicaSettingsDescription {
  export const filterSensitiveLog = (obj: ReplicaSettingsDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaSettingsDescription =>
    __isa(o, "ReplicaSettingsDescription");
}

/**
 * <p>Represents the settings for a global table in a Region that will be modified.</p>
 */
export interface ReplicaSettingsUpdate {
  __type?: "ReplicaSettingsUpdate";
  /**
   * <p>The Region of the replica to be added.</p>
   */
  RegionName: string | undefined;

  /**
   * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
   */
  ReplicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdate[];

  /**
   * <p>Auto scaling settings for managing a global table replica's read capacity units.</p>
   */
  ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>.
   *         For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput">Specifying Read and Write
   *         Requirements</a> in the <i>Amazon DynamoDB Developer Guide</i>.
   *      </p>
   */
  ReplicaProvisionedReadCapacityUnits?: number;
}

export namespace ReplicaSettingsUpdate {
  export const filterSensitiveLog = (obj: ReplicaSettingsUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaSettingsUpdate =>
    __isa(o, "ReplicaSettingsUpdate");
}

export type ReplicaStatus =
  | "ACTIVE"
  | "CREATING"
  | "CREATION_FAILED"
  | "DELETING"
  | "UPDATING";

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
  __type?: "ReplicationGroupUpdate";
  /**
   * <p>The parameters required for creating a replica for the table.</p>
   */
  Create?: CreateReplicationGroupMemberAction;

  /**
   * <p>The parameters required for deleting a replica for the table.</p>
   */
  Delete?: DeleteReplicationGroupMemberAction;

  /**
   * <p>The parameters required for updating a replica for the table.</p>
   */
  Update?: UpdateReplicationGroupMemberAction;
}

export namespace ReplicationGroupUpdate {
  export const filterSensitiveLog = (obj: ReplicationGroupUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationGroupUpdate =>
    __isa(o, "ReplicationGroupUpdate");
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
  __type?: "ReplicaUpdate";
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
  export const filterSensitiveLog = (obj: ReplicaUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicaUpdate => __isa(o, "ReplicaUpdate");
}

/**
 * <p>This exception is thrown when throughput exceeds the current throughput limit for the subscriber's account.</p>
 */
export interface RequestLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "RequestLimitExceeded";
  $fault: "client";
  message?: string;
}

export namespace RequestLimitExceeded {
  export const filterSensitiveLog = (obj: RequestLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestLimitExceeded =>
    __isa(o, "RequestLimitExceeded");
}

/**
 * <p>This exception is thrown when the resource which is being attempted to be changed is in use.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
}

/**
 * <p>This exception is thrown when the resource which is being attempted to be changed is in use.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Contains details for the restore.</p>
 */
export interface RestoreSummary {
  __type?: "RestoreSummary";
  /**
   * <p>Point in time or source backup time.</p>
   */
  RestoreDateTime: Date | undefined;

  /**
   * <p>Indicates if a restore is in progress or not.</p>
   */
  RestoreInProgress: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the backup from which the table was restored.</p>
   */
  SourceBackupArn?: string;

  /**
   * <p>The ARN of the source table of the backup that is being restored.</p>
   */
  SourceTableArn?: string;
}

export namespace RestoreSummary {
  export const filterSensitiveLog = (obj: RestoreSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreSummary =>
    __isa(o, "RestoreSummary");
}

export interface RestoreTableFromBackupInput {
  __type?: "RestoreTableFromBackupInput";
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
   * <p>The name of the new table to which the backup must be restored.</p>
   */
  TargetTableName: string | undefined;
}

export namespace RestoreTableFromBackupInput {
  export const filterSensitiveLog = (
    obj: RestoreTableFromBackupInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreTableFromBackupInput =>
    __isa(o, "RestoreTableFromBackupInput");
}

export interface RestoreTableFromBackupOutput {
  __type?: "RestoreTableFromBackupOutput";
  /**
   * <p>The description of the table created from an existing backup.</p>
   */
  TableDescription?: TableDescription;
}

export namespace RestoreTableFromBackupOutput {
  export const filterSensitiveLog = (
    obj: RestoreTableFromBackupOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreTableFromBackupOutput =>
    __isa(o, "RestoreTableFromBackupOutput");
}

export interface RestoreTableToPointInTimeInput {
  __type?: "RestoreTableToPointInTimeInput";
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
   * <p>Time in the past to restore the table to.</p>
   */
  RestoreDateTime?: Date;

  /**
   * <p>Name of the source table that is being restored.</p>
   */
  SourceTableName: string | undefined;

  /**
   * <p>The name of the new table to which it must be restored to.</p>
   */
  TargetTableName: string | undefined;

  /**
   * <p>Restore the table to the latest possible time. <code>LatestRestorableDateTime</code>
   *         is typically 5 minutes before the current time. </p>
   */
  UseLatestRestorableTime?: boolean;
}

export namespace RestoreTableToPointInTimeInput {
  export const filterSensitiveLog = (
    obj: RestoreTableToPointInTimeInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreTableToPointInTimeInput =>
    __isa(o, "RestoreTableToPointInTimeInput");
}

export interface RestoreTableToPointInTimeOutput {
  __type?: "RestoreTableToPointInTimeOutput";
  /**
   * <p>Represents the properties of a table.</p>
   */
  TableDescription?: TableDescription;
}

export namespace RestoreTableToPointInTimeOutput {
  export const filterSensitiveLog = (
    obj: RestoreTableToPointInTimeOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreTableToPointInTimeOutput =>
    __isa(o, "RestoreTableToPointInTimeOutput");
}

export type ReturnConsumedCapacity = "INDEXES" | "NONE" | "TOTAL";

export type ReturnItemCollectionMetrics = "NONE" | "SIZE";

export type ReturnValue =
  | "ALL_NEW"
  | "ALL_OLD"
  | "NONE"
  | "UPDATED_NEW"
  | "UPDATED_OLD";

export type ReturnValuesOnConditionCheckFailure = "ALL_OLD" | "NONE";

export type ScalarAttributeType = "B" | "N" | "S";

export interface ScanInput {
  __type?: "ScanInput";
  /**
   * <p>List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned.
   *        If some attributes are not found, they will not appear in the result.</p>
   */
  AttributesToGet?: string[];

  /**
   * <p>If set to <code>true</code>, Amazon DynamoDB returns a total number of items for the <code>Scan</code> operation, even if the
   *        operation has no matching items for the assigned filter. Do not set <code>Count</code> to <code>true</code> while providing a
   *        list of <code>AttributesToGet</code>, otherwise Amazon DynamoDB returns a validation error.</p>
   */
  Count?: boolean;

  /**
   * <p>Primary key of the item from which to continue an earlier scan. An earlier scan might provide this value if that
   *        scan operation was interrupted before scanning the entire table; either because of the result set size or the
   *        <code>Limit</code> parameter. The <code>LastEvaluatedKey</code> can be passed back in a new scan request to
   *        continue the operation from that point.</p>
   */
  ExclusiveStartKey?: Key;

  /**
   * <p>The maximum number of items to return. If Amazon DynamoDB hits this limit while scanning the table, it stops the
   *        scan and returns the matching values up to the limit, and a <code>LastEvaluatedKey</code> to apply in a subsequent
   *        operation to continue the scan. Also, if the scanned data set size exceeds 1 MB before Amazon DynamoDB hits this
   *        limit, it stops the scan and returns the matching values up to the limit, and a <code>LastEvaluatedKey</code> to
   *        apply in a subsequent operation to continue the scan.</p>
   */
  Limit?: number;

  /**
   * <p>Evaluates the scan results and returns only the desired values.</p>
   */
  ScanFilter?: { [key: string]: Condition };

  /**
   * <p>The name of the table in which you want to scan. Allowed characters are <code>a-z</code>, <code>A-Z</code>,
   *        <code>0-9</code>, <code>_</code> (underscore), <code>-</code> (hyphen) and <code>.</code> (period).</p>
   */
  TableName: string | undefined;
}

export namespace ScanInput {
  export const filterSensitiveLog = (obj: ScanInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScanInput => __isa(o, "ScanInput");
}

/**
 * <p>Represents the output of a <code>Scan</code> operation.</p>
 */
export interface ScanOutput {
  __type?: "ScanOutput";
  /**
   * <p>The capacity units consumed by the <code>Scan</code> operation. The data returned includes the total
   *             provisioned throughput consumed, along with statistics for the table and any indexes involved
   *             in the operation. <code>ConsumedCapacity</code> is only returned if the <code>ReturnConsumedCapacity</code> parameter was specified.
   *             For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned
   *                 Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConsumedCapacity?: ConsumedCapacity;

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
   * <p>An array of item attributes that match the scan criteria. Each element in this array consists of an attribute name and the value for that attribute.</p>
   */
  Items?: { [key: string]: AttributeValue }[];

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
  LastEvaluatedKey?: Key;

  /**
   * <p>The number of items evaluated, before any <code>ScanFilter</code> is applied. A high
   *         <code>ScannedCount</code> value with few, or no, <code>Count</code> results indicates an inefficient
   *         <code>Scan</code> operation. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count">Count and ScannedCount</a> in the
   *         <i>Amazon DynamoDB Developer Guide</i>.</p>
   *          <p>If you did not use a filter in the request, then <code>ScannedCount</code> is the same as
   *         <code>Count</code>.</p>
   */
  ScannedCount?: number;
}

export namespace ScanOutput {
  export const filterSensitiveLog = (obj: ScanOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScanOutput => __isa(o, "ScanOutput");
}

/**
 * <p>Contains the details of the table when the backup was created. </p>
 */
export interface SourceTableDetails {
  __type?: "SourceTableDetails";
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
   * <p>Number of items in the table. Note that this is an approximate value. </p>
   */
  ItemCount?: number;

  /**
   * <p>Schema of the table. </p>
   */
  KeySchema: KeySchema | undefined;

  /**
   * <p>Read IOPs and Write IOPS on the table when the backup was created.</p>
   */
  ProvisionedThroughput: ProvisionedThroughput | undefined;

  /**
   * <p>ARN of the table for which backup was created. </p>
   */
  TableArn?: string;

  /**
   * <p>Time when the source table was created. </p>
   */
  TableCreationDateTime: Date | undefined;

  /**
   * <p>Unique identifier for the table for which the backup was created. </p>
   */
  TableId: string | undefined;

  /**
   * <p>The name of the table for which the backup was created. </p>
   */
  TableName: string | undefined;

  /**
   * <p>Size of the table in bytes. Note that this is an approximate value.</p>
   */
  TableSizeBytes?: number;
}

export namespace SourceTableDetails {
  export const filterSensitiveLog = (obj: SourceTableDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceTableDetails =>
    __isa(o, "SourceTableDetails");
}

/**
 * <p>Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. </p>
 */
export interface SourceTableFeatureDetails {
  __type?: "SourceTableFeatureDetails";
  /**
   * <p>Represents the GSI properties for the table when the backup was created. It includes the
   *          IndexName, KeySchema, Projection, and ProvisionedThroughput for the GSIs on the table at
   *          the time of backup. </p>
   */
  GlobalSecondaryIndexes?: GlobalSecondaryIndexInfo[];

  /**
   * <p>Represents the LSI properties for the table when the backup was created. It includes the IndexName, KeySchema and Projection for the LSIs on the table at the time of backup. </p>
   */
  LocalSecondaryIndexes?: LocalSecondaryIndexInfo[];

  /**
   * <p>The description of the server-side encryption status on the table when the backup was created.</p>
   */
  SSEDescription?: SSEDescription;

  /**
   * <p>Stream settings on the table when the backup was created.</p>
   */
  StreamDescription?: StreamSpecification;

  /**
   * <p>Time to Live settings on the table when the backup was created.</p>
   */
  TimeToLiveDescription?: TimeToLiveDescription;
}

export namespace SourceTableFeatureDetails {
  export const filterSensitiveLog = (obj: SourceTableFeatureDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceTableFeatureDetails =>
    __isa(o, "SourceTableFeatureDetails");
}

/**
 * <p>The description of the server-side encryption status on the specified table.</p>
 */
export interface SSEDescription {
  __type?: "SSEDescription";
  /**
   * <p>Indicates the time, in UNIX epoch date format, when DynamoDB detected that the table's
   *          AWS KMS key was inaccessible. This attribute will automatically be cleared when DynamoDB
   *          detects that the table's AWS KMS key is accessible again. DynamoDB will initiate the table
   *          archival process when table's AWS KMS key remains inaccessible for more than seven days
   *          from this date.</p>
   */
  InaccessibleEncryptionDateTime?: Date;

  /**
   * <p>The AWS KMS customer master key (CMK) ARN used for the AWS KMS encryption.</p>
   */
  KMSMasterKeyArn?: string;

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
}

export namespace SSEDescription {
  export const filterSensitiveLog = (obj: SSEDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is SSEDescription =>
    __isa(o, "SSEDescription");
}

/**
 * <p>Represents the settings used to enable server-side encryption.</p>
 */
export interface SSESpecification {
  __type?: "SSESpecification";
  /**
   * <p>Indicates whether server-side encryption is done using an AWS managed CMK or an AWS owned CMK. If enabled (true),
   *       server-side encryption type is set to <code>KMS</code> and an AWS managed CMK is used (AWS KMS charges apply). If disabled (false) or not specified, server-side
   * encryption is set to AWS owned CMK.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To
   *          specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note
   *          that you should only provide this parameter if the key is different from the default
   *          DynamoDB customer master key alias/aws/dynamodb.</p>
   */
  KMSMasterKeyId?: string;

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
}

export namespace SSESpecification {
  export const filterSensitiveLog = (obj: SSESpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is SSESpecification =>
    __isa(o, "SSESpecification");
}

export type SSEStatus =
  | "DISABLED"
  | "DISABLING"
  | "ENABLED"
  | "ENABLING"
  | "UPDATING";

export type SSEType = "AES256" | "KMS";

/**
 * <p>Represents the DynamoDB Streams configuration for a table in DynamoDB.</p>
 */
export interface StreamSpecification {
  __type?: "StreamSpecification";
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
  export const filterSensitiveLog = (obj: StreamSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is StreamSpecification =>
    __isa(o, "StreamSpecification");
}

export type StreamViewType =
  | "KEYS_ONLY"
  | "NEW_AND_OLD_IMAGES"
  | "NEW_IMAGE"
  | "OLD_IMAGE";

/**
 * <p>A target table with the specified name already exists. </p>
 */
export interface TableAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TableAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace TableAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: TableAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableAlreadyExistsException =>
    __isa(o, "TableAlreadyExistsException");
}

/**
 * <p>Represents the auto scaling configuration for a global table.</p>
 */
export interface TableAutoScalingDescription {
  __type?: "TableAutoScalingDescription";
  /**
   * <p>Represents replicas of the global table.</p>
   */
  Replicas?: ReplicaAutoScalingDescription[];

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
}

export namespace TableAutoScalingDescription {
  export const filterSensitiveLog = (
    obj: TableAutoScalingDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableAutoScalingDescription =>
    __isa(o, "TableAutoScalingDescription");
}

/**
 * <p>Represents the properties of a table.</p>
 */
export interface TableDescription {
  __type?: "TableDescription";
  /**
   * <p>Contains information about the table archive.</p>
   */
  ArchivalSummary?: ArchivalSummary;

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
   * <p>Contains the details for the read/write capacity mode.</p>
   */
  BillingModeSummary?: BillingModeSummary;

  /**
   * <p>The date and time when the table was created, in <a href="http://www.epochconverter.com/">UNIX epoch time</a> format.</p>
   */
  CreationDateTime?: Date;

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
   * <p>Represents the version of <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html">global tables</a> in use, if the table is replicated across AWS Regions.</p>
   */
  GlobalTableVersion?: string;

  /**
   * <p>The number of items in the specified table. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  ItemCount?: number;

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
  KeySchema?: KeySchema;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the latest stream for this table.</p>
   */
  LatestStreamArn?: string;

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
   * <p>The provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughputDescription;

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
   * <p>The current DynamoDB Streams configuration for the table.</p>
   */
  StreamSpecification?: StreamSpecification;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the table.</p>
   */
  TableArn?: string;

  /**
   * <p>Unique identifier for the table for which the backup was created. </p>
   */
  TableId?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.</p>
   */
  TableSizeBytes?: number;

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
}

export namespace TableDescription {
  export const filterSensitiveLog = (obj: TableDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableDescription =>
    __isa(o, "TableDescription");
}

/**
 * <p>A target table with the specified name is either being created or deleted. </p>
 */
export interface TableInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "TableInUseException";
  $fault: "client";
  message?: string;
}

export namespace TableInUseException {
  export const filterSensitiveLog = (obj: TableInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableInUseException =>
    __isa(o, "TableInUseException");
}

/**
 * <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
 */
export interface TableNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "TableNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace TableNotFoundException {
  export const filterSensitiveLog = (obj: TableNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableNotFoundException =>
    __isa(o, "TableNotFoundException");
}

export type TableStatus = "ACTIVE" | "CREATING" | "DELETING" | "UPDATING";

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
  __type?: "Tag";
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
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceInput {
  __type?: "TagResourceInput";
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
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceInput =>
    __isa(o, "TagResourceInput");
}

/**
 * <p>The description of the Time to Live (TTL) status on the specified table. </p>
 */
export interface TimeToLiveDescription {
  __type?: "TimeToLiveDescription";
  /**
   * <p> The name of the TTL attribute for items in the table.</p>
   */
  AttributeName?: string;

  /**
   * <p> The TTL status for the table.</p>
   */
  TimeToLiveStatus?: TimeToLiveStatus | string;
}

export namespace TimeToLiveDescription {
  export const filterSensitiveLog = (obj: TimeToLiveDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimeToLiveDescription =>
    __isa(o, "TimeToLiveDescription");
}

/**
 * <p>Represents the settings used to enable or disable Time to Live (TTL) for the specified
 *             table.</p>
 */
export interface TimeToLiveSpecification {
  __type?: "TimeToLiveSpecification";
  /**
   * <p>The name of the TTL attribute used to store the expiration time for items in the
   *             table.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>Indicates whether TTL is to be enabled (true) or disabled (false) on the table.</p>
   */
  Enabled: boolean | undefined;
}

export namespace TimeToLiveSpecification {
  export const filterSensitiveLog = (obj: TimeToLiveSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimeToLiveSpecification =>
    __isa(o, "TimeToLiveSpecification");
}

export type TimeToLiveStatus =
  | "DISABLED"
  | "DISABLING"
  | "ENABLED"
  | "ENABLING";

/**
 * <p>Specifies an item to be retrieved as part of the transaction.</p>
 */
export interface TransactGetItem {
  __type?: "TransactGetItem";
  /**
   * <p>Contains the primary key that identifies the item to get, together
   *         with the name of the table that contains the item, and optionally
   *         the specific attributes of the item to retrieve.</p>
   */
  Get: Get | undefined;
}

export namespace TransactGetItem {
  export const filterSensitiveLog = (obj: TransactGetItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactGetItem =>
    __isa(o, "TransactGetItem");
}

export interface TransactGetItemsInput {
  __type?: "TransactGetItemsInput";
  /**
   * <p>A value of <code>TOTAL</code> causes consumed capacity information
   *          to be returned, and a value of <code>NONE</code> prevents that information
   *          from being returned. No other value is valid.</p>
   */
  ReturnConsumedCapacity?: ReturnConsumedCapacity | string;

  /**
   * <p>An ordered array of up to 25 <code>TransactGetItem</code> objects,
   *          each of which contains a <code>Get</code> structure.</p>
   */
  TransactItems: TransactGetItem[] | undefined;
}

export namespace TransactGetItemsInput {
  export const filterSensitiveLog = (obj: TransactGetItemsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactGetItemsInput =>
    __isa(o, "TransactGetItemsInput");
}

export interface TransactGetItemsOutput {
  __type?: "TransactGetItemsOutput";
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
  export const filterSensitiveLog = (obj: TransactGetItemsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactGetItemsOutput =>
    __isa(o, "TransactGetItemsOutput");
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
export interface TransactionCanceledException
  extends __SmithyException,
    $MetadataBearer {
  name: "TransactionCanceledException";
  $fault: "client";
  /**
   * <p>A list of cancellation reasons.</p>
   */
  CancellationReasons?: CancellationReason[];

  Message?: string;
}

export namespace TransactionCanceledException {
  export const filterSensitiveLog = (
    obj: TransactionCanceledException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactionCanceledException =>
    __isa(o, "TransactionCanceledException");
}

/**
 * <p>Operation was rejected because there is an ongoing transaction for the item.</p>
 */
export interface TransactionConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "TransactionConflictException";
  $fault: "client";
  message?: string;
}

export namespace TransactionConflictException {
  export const filterSensitiveLog = (
    obj: TransactionConflictException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactionConflictException =>
    __isa(o, "TransactionConflictException");
}

/**
 * <p>The transaction with the given request token is already in progress.</p>
 */
export interface TransactionInProgressException
  extends __SmithyException,
    $MetadataBearer {
  name: "TransactionInProgressException";
  $fault: "client";
  Message?: string;
}

export namespace TransactionInProgressException {
  export const filterSensitiveLog = (
    obj: TransactionInProgressException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactionInProgressException =>
    __isa(o, "TransactionInProgressException");
}

/**
 * <p>A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically.</p>
 */
export interface TransactWriteItem {
  __type?: "TransactWriteItem";
  /**
   * <p>A request to perform a check item operation.</p>
   */
  ConditionCheck?: ConditionCheck;

  /**
   * <p>A request to perform a <code>DeleteItem</code> operation.</p>
   */
  Delete?: Delete;

  /**
   * <p>A request to perform a <code>PutItem</code> operation.</p>
   */
  Put?: Put;

  /**
   * <p>A request to perform an <code>UpdateItem</code> operation.</p>
   */
  Update?: Update;
}

export namespace TransactWriteItem {
  export const filterSensitiveLog = (obj: TransactWriteItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactWriteItem =>
    __isa(o, "TransactWriteItem");
}

export interface TransactWriteItemsInput {
  __type?: "TransactWriteItemsInput";
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
   * <p>An ordered array of up to 25 <code>TransactWriteItem</code> objects, each of which
   *             contains a <code>ConditionCheck</code>, <code>Put</code>, <code>Update</code>, or
   *                 <code>Delete</code> object. These can operate on items in different tables, but the
   *             tables must reside in the same AWS account and Region, and no two of them can operate on
   *             the same item. </p>
   */
  TransactItems: TransactWriteItem[] | undefined;
}

export namespace TransactWriteItemsInput {
  export const filterSensitiveLog = (obj: TransactWriteItemsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactWriteItemsInput =>
    __isa(o, "TransactWriteItemsInput");
}

export interface TransactWriteItemsOutput {
  __type?: "TransactWriteItemsOutput";
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
  export const filterSensitiveLog = (obj: TransactWriteItemsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransactWriteItemsOutput =>
    __isa(o, "TransactWriteItemsOutput");
}

export interface UntagResourceInput {
  __type?: "UntagResourceInput";
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
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceInput =>
    __isa(o, "UntagResourceInput");
}

/**
 * <p>Represents a request to perform an <code>UpdateItem</code> operation.</p>
 */
export interface Update {
  __type?: "Update";
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
   * <p>The primary key of the item to be updated. Each element consists of
   *       an attribute name and a value for that attribute.</p>
   */
  Key: Key | undefined;

  /**
   * <p>Use <code>ReturnValuesOnConditionCheckFailure</code> to
   *         get the item attributes if the <code>Update</code> condition fails.
   *         For <code>ReturnValuesOnConditionCheckFailure</code>, the valid
   *         values are: NONE, ALL_OLD, UPDATED_OLD, ALL_NEW, UPDATED_NEW.</p>
   */
  ReturnValuesOnConditionCheckFailure?:
    | ReturnValuesOnConditionCheckFailure
    | string;

  /**
   * <p>Name of the table for the <code>UpdateItem</code> request.</p>
   */
  TableName: string | undefined;

  /**
   * <p>An expression that defines one or more attributes to be updated,
   *       the action to be performed on them, and new value(s) for them.</p>
   */
  UpdateExpression: string | undefined;
}

export namespace Update {
  export const filterSensitiveLog = (obj: Update): any => ({
    ...obj
  });
  export const isa = (o: any): o is Update => __isa(o, "Update");
}

export interface UpdateContinuousBackupsInput {
  __type?: "UpdateContinuousBackupsInput";
  /**
   * <p>Represents the settings used to enable point in time recovery.</p>
   */
  PointInTimeRecoverySpecification:
    | PointInTimeRecoverySpecification
    | undefined;

  /**
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;
}

export namespace UpdateContinuousBackupsInput {
  export const filterSensitiveLog = (
    obj: UpdateContinuousBackupsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateContinuousBackupsInput =>
    __isa(o, "UpdateContinuousBackupsInput");
}

export interface UpdateContinuousBackupsOutput {
  __type?: "UpdateContinuousBackupsOutput";
  /**
   * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
   */
  ContinuousBackupsDescription?: ContinuousBackupsDescription;
}

export namespace UpdateContinuousBackupsOutput {
  export const filterSensitiveLog = (
    obj: UpdateContinuousBackupsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateContinuousBackupsOutput =>
    __isa(o, "UpdateContinuousBackupsOutput");
}

export interface UpdateContributorInsightsInput {
  __type?: "UpdateContributorInsightsInput";
  /**
   * <p>Represents the contributor insights action.</p>
   */
  ContributorInsightsAction: ContributorInsightsAction | string | undefined;

  /**
   * <p>The global secondary index name, if applicable.</p>
   */
  IndexName?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;
}

export namespace UpdateContributorInsightsInput {
  export const filterSensitiveLog = (
    obj: UpdateContributorInsightsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateContributorInsightsInput =>
    __isa(o, "UpdateContributorInsightsInput");
}

export interface UpdateContributorInsightsOutput {
  __type?: "UpdateContributorInsightsOutput";
  /**
   * <p>The status of contributor insights</p>
   */
  ContributorInsightsStatus?: ContributorInsightsStatus | string;

  /**
   * <p>The name of the global secondary index, if applicable.</p>
   */
  IndexName?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;
}

export namespace UpdateContributorInsightsOutput {
  export const filterSensitiveLog = (
    obj: UpdateContributorInsightsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateContributorInsightsOutput =>
    __isa(o, "UpdateContributorInsightsOutput");
}

/**
 * <p>Represents the new provisioned throughput settings to be applied to a global secondary index.</p>
 */
export interface UpdateGlobalSecondaryIndexAction {
  __type?: "UpdateGlobalSecondaryIndexAction";
  /**
   * <p>The name of the global secondary index to be updated.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>Represents the provisioned throughput settings for the specified global secondary index.</p>
   *          <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ProvisionedThroughput: ProvisionedThroughput | undefined;
}

export namespace UpdateGlobalSecondaryIndexAction {
  export const filterSensitiveLog = (
    obj: UpdateGlobalSecondaryIndexAction
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGlobalSecondaryIndexAction =>
    __isa(o, "UpdateGlobalSecondaryIndexAction");
}

export interface UpdateGlobalTableInput {
  __type?: "UpdateGlobalTableInput";
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
  export const filterSensitiveLog = (obj: UpdateGlobalTableInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGlobalTableInput =>
    __isa(o, "UpdateGlobalTableInput");
}

export interface UpdateGlobalTableOutput {
  __type?: "UpdateGlobalTableOutput";
  /**
   * <p>Contains the details of the global table.</p>
   */
  GlobalTableDescription?: GlobalTableDescription;
}

export namespace UpdateGlobalTableOutput {
  export const filterSensitiveLog = (obj: UpdateGlobalTableOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGlobalTableOutput =>
    __isa(o, "UpdateGlobalTableOutput");
}

export interface UpdateGlobalTableSettingsInput {
  __type?: "UpdateGlobalTableSettingsInput";
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
   * <p>Represents the settings of a global secondary index for a global table that will be modified.</p>
   */
  GlobalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdate[];

  /**
   * <p>The name of the global table</p>
   */
  GlobalTableName: string | undefined;

  /**
   * <p>Auto scaling settings for managing provisioned write capacity for the global
   *             table.</p>
   */
  GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException.</code>
   *          </p>
   */
  GlobalTableProvisionedWriteCapacityUnits?: number;

  /**
   * <p>Represents the settings for a global table in a Region that will be modified.</p>
   */
  ReplicaSettingsUpdate?: ReplicaSettingsUpdate[];
}

export namespace UpdateGlobalTableSettingsInput {
  export const filterSensitiveLog = (
    obj: UpdateGlobalTableSettingsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGlobalTableSettingsInput =>
    __isa(o, "UpdateGlobalTableSettingsInput");
}

export interface UpdateGlobalTableSettingsOutput {
  __type?: "UpdateGlobalTableSettingsOutput";
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
  export const filterSensitiveLog = (
    obj: UpdateGlobalTableSettingsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGlobalTableSettingsOutput =>
    __isa(o, "UpdateGlobalTableSettingsOutput");
}

/**
 * <p>Represents the input of an <code>UpdateItem</code> operation.</p>
 */
export interface UpdateItemInput {
  __type?: "UpdateItemInput";
  /**
   * <p>This is a legacy parameter.  Use <code>UpdateExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributeUpdates.html">AttributeUpdates</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  AttributeUpdates?: { [key: string]: AttributeValueUpdate };

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
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html">ConditionalOperator</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  ConditionalOperator?: ConditionalOperator | string;

  /**
   * <p>This is a legacy parameter.  Use <code>ConditionExpression</code> instead.   For more information, see
   *           <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html">Expected</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  Expected?: { [key: string]: ExpectedAttributeValue };

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

  /**
   * <p>The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.</p>
   *          <p>For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.</p>
   */
  Key: Key | undefined;

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
   * <p>The name of the table containing the item to update.</p>
   */
  TableName: string | undefined;

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
}

export namespace UpdateItemInput {
  export const filterSensitiveLog = (obj: UpdateItemInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateItemInput =>
    __isa(o, "UpdateItemInput");
}

/**
 * <p>Represents the output of an <code>UpdateItem</code> operation.</p>
 */
export interface UpdateItemOutput {
  __type?: "UpdateItemOutput";
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
  export const filterSensitiveLog = (obj: UpdateItemOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateItemOutput =>
    __isa(o, "UpdateItemOutput");
}

/**
 * <p>Represents a replica to be modified.</p>
 */
export interface UpdateReplicationGroupMemberAction {
  __type?: "UpdateReplicationGroupMemberAction";
  /**
   * <p>Replica-specific global secondary index settings.</p>
   */
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];

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
   * <p>The Region where the replica exists.</p>
   */
  RegionName: string | undefined;
}

export namespace UpdateReplicationGroupMemberAction {
  export const filterSensitiveLog = (
    obj: UpdateReplicationGroupMemberAction
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateReplicationGroupMemberAction =>
    __isa(o, "UpdateReplicationGroupMemberAction");
}

/**
 * <p>Represents the input of an <code>UpdateTable</code> operation.</p>
 */
export interface UpdateTableInput {
  __type?: "UpdateTableInput";
  /**
   * <p>An array of attributes that describe the key schema for the table and indexes. If you are adding a new global secondary index to the table, <code>AttributeDefinitions</code> must include the key element(s) of the new index.</p>
   */
  AttributeDefinitions?: AttributeDefinition[];

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
   * <p>The new provisioned throughput settings for the specified table or index.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * <p>A list of replica update actions (create, delete, or update) for the table.</p>
   *          <note>
   *             <p>This property only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
   *          </note>
   */
  ReplicaUpdates?: ReplicationGroupUpdate[];

  /**
   * <p>The new server-side encryption settings for the specified table.</p>
   */
  SSESpecification?: SSESpecification;

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
   * <p>The name of the table to be updated.</p>
   */
  TableName: string | undefined;
}

export namespace UpdateTableInput {
  export const filterSensitiveLog = (obj: UpdateTableInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTableInput =>
    __isa(o, "UpdateTableInput");
}

/**
 * <p>Represents the output of an <code>UpdateTable</code> operation.</p>
 */
export interface UpdateTableOutput {
  __type?: "UpdateTableOutput";
  /**
   * <p>Represents the properties of the table.</p>
   */
  TableDescription?: TableDescription;
}

export namespace UpdateTableOutput {
  export const filterSensitiveLog = (obj: UpdateTableOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTableOutput =>
    __isa(o, "UpdateTableOutput");
}

export interface UpdateTableReplicaAutoScalingInput {
  __type?: "UpdateTableReplicaAutoScalingInput";
  /**
   * <p>Represents the auto scaling settings of the global secondary indexes of the replica
   *           to be updated.</p>
   */
  GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdate[];

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

  /**
   * <p>The name of the global table to be updated.</p>
   */
  TableName: string | undefined;
}

export namespace UpdateTableReplicaAutoScalingInput {
  export const filterSensitiveLog = (
    obj: UpdateTableReplicaAutoScalingInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTableReplicaAutoScalingInput =>
    __isa(o, "UpdateTableReplicaAutoScalingInput");
}

export interface UpdateTableReplicaAutoScalingOutput {
  __type?: "UpdateTableReplicaAutoScalingOutput";
  /**
   * <p>Returns information about the auto scaling settings of a table with replicas.</p>
   */
  TableAutoScalingDescription?: TableAutoScalingDescription;
}

export namespace UpdateTableReplicaAutoScalingOutput {
  export const filterSensitiveLog = (
    obj: UpdateTableReplicaAutoScalingOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTableReplicaAutoScalingOutput =>
    __isa(o, "UpdateTableReplicaAutoScalingOutput");
}

/**
 * <p>Represents the input of an <code>UpdateTimeToLive</code> operation.</p>
 */
export interface UpdateTimeToLiveInput {
  __type?: "UpdateTimeToLiveInput";
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
  export const filterSensitiveLog = (obj: UpdateTimeToLiveInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTimeToLiveInput =>
    __isa(o, "UpdateTimeToLiveInput");
}

export interface UpdateTimeToLiveOutput {
  __type?: "UpdateTimeToLiveOutput";
  /**
   * <p>Represents the output of an <code>UpdateTimeToLive</code> operation.</p>
   */
  TimeToLiveSpecification?: TimeToLiveSpecification;
}

export namespace UpdateTimeToLiveOutput {
  export const filterSensitiveLog = (obj: UpdateTimeToLiveOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTimeToLiveOutput =>
    __isa(o, "UpdateTimeToLiveOutput");
}

/**
 * <p>This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code.</p>
 */
export interface WriteRequest {
  __type?: "WriteRequest";
  /**
   * <p>A container for a Delete BatchWrite request</p>
   */
  DeleteRequest?: DeleteRequest;

  /**
   * <p>A container for a Put BatchWrite request</p>
   */
  PutRequest?: PutRequest;
}

export namespace WriteRequest {
  export const filterSensitiveLog = (obj: WriteRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is WriteRequest => __isa(o, "WriteRequest");
}
