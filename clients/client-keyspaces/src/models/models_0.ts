// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KeyspacesServiceException as __BaseException } from "./KeyspacesServiceException";

/**
 * <p>You don't have sufficient access permissions to perform this action. </p>
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
 * <p>The auto scaling policy that scales a table based on the ratio of consumed to provisioned capacity.</p>
 * @public
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * <p>Specifies if <code>scale-in</code> is enabled.</p>
   *          <p>When auto scaling automatically decreases capacity for a table,
   *          the table <i>scales in</i>. When scaling policies are set, they can't
   *          scale in the table lower than its minimum capacity.</p>
   * @public
   */
  disableScaleIn?: boolean | undefined;

  /**
   * <p>Specifies a <code>scale-in</code> cool down period.</p>
   *          <p>A cooldown period in seconds between scaling activities that lets the table stabilize before another scaling activity starts. </p>
   * @public
   */
  scaleInCooldown?: number | undefined;

  /**
   * <p>Specifies a scale out cool down period.</p>
   *          <p>A cooldown period in seconds between scaling activities that lets the table stabilize before another scaling activity starts. </p>
   * @public
   */
  scaleOutCooldown?: number | undefined;

  /**
   * <p>Specifies the target value for the target tracking auto scaling policy.</p>
   *          <p>Amazon Keyspaces auto scaling scales up capacity automatically when traffic exceeds this target utilization
   *          rate, and then back down when it falls below the target. This ensures that the ratio of
   *          consumed capacity to provisioned capacity stays at or near this value. You
   *          define <code>targetValue</code> as a percentage. A <code>double</code> between 20 and 90.</p>
   * @public
   */
  targetValue: number | undefined;
}

/**
 * <p>Amazon Keyspaces supports the <code>target tracking</code> auto scaling policy. With this policy, Amazon Keyspaces auto scaling
 *          ensures that the table's ratio of consumed to provisioned capacity stays at or near the target value that you specify. You
 *          define the target value as a percentage between 20 and 90.</p>
 * @public
 */
export interface AutoScalingPolicy {
  /**
   * <p>Auto scaling scales up capacity automatically when traffic exceeds this target utilization rate, and then back down
   *          when it falls below the target. A <code>double</code> between 20 and 90.</p>
   * @public
   */
  targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | undefined;
}

/**
 * <p>The optional auto scaling settings for a table with provisioned throughput capacity.</p>
 *          <p>To turn on auto scaling for a table in <code>throughputMode:PROVISIONED</code>,
 *          you must specify the following parameters. </p>
 *          <p>Configure the minimum and maximum capacity units. The auto scaling policy ensures that
 *          capacity never goes below the minimum or above the maximum range.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>minimumUnits</code>: The minimum level of throughput the table should always be ready to support. The value must be between 1
 *             and the max throughput per second quota for your account (40,000 by default).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>maximumUnits</code>: The maximum level of throughput the table should always be ready to
 *                support. The value must be between 1 and the max throughput per second quota for your
 *                account (40,000 by default).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>scalingPolicy</code>: Amazon Keyspaces supports the <code>target tracking</code> scaling policy.
 *            The auto scaling target is the provisioned capacity of the table.
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>targetTrackingScalingPolicyConfiguration</code>: To define the target tracking policy, you must define the target value.
 *                </p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>targetValue</code>: The target utilization rate of the table. Amazon Keyspaces auto scaling ensures that the ratio of
 *                         consumed capacity to provisioned capacity stays at or near this value. You
 *                         define <code>targetValue</code> as a percentage. A <code>double</code> between 20 and 90. (Required)</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>disableScaleIn</code>: A <code>boolean</code> that specifies if <code>scale-in</code> is
 *                            disabled or enabled for the table. This parameter is disabled by default.
 *                            To turn on <code>scale-in</code>, set the <code>boolean</code> value to
 *                               <code>FALSE</code>. This means that capacity for a table can be
 *                            automatically scaled down on your behalf. (Optional) </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>scaleInCooldown</code>: A cooldown period in seconds between scaling activities that lets the table stabilize
 *                         before another scale in activity starts. If no value is provided, the default is 0. (Optional) </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>scaleOutCooldown</code>: A cooldown period in seconds between scaling activities that lets the table stabilize
 *                         before another scale out activity starts. If no value is provided, the default is 0. (Optional) </p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html">Managing throughput capacity automatically with Amazon Keyspaces auto scaling</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 * @public
 */
export interface AutoScalingSettings {
  /**
   * <p>This optional parameter enables auto scaling for the table if set to <code>false</code>.</p>
   * @public
   */
  autoScalingDisabled?: boolean | undefined;

  /**
   * <p>The minimum level of throughput the table should always be ready to support. The value must be between 1
   *          and the max throughput per second quota for your account (40,000 by default).</p>
   * @public
   */
  minimumUnits?: number | undefined;

  /**
   * <p>Manage costs by specifying the maximum amount of throughput to provision. The value must be between 1
   *          and the max throughput per second quota for your account (40,000 by default).</p>
   * @public
   */
  maximumUnits?: number | undefined;

  /**
   * <p>Amazon Keyspaces supports the <code>target tracking</code> auto scaling policy. With this policy, Amazon Keyspaces auto scaling
   *       ensures that the table's ratio of consumed to provisioned capacity stays at or near the target value that you specify. You
   *       define the target value as a percentage between 20 and 90.</p>
   * @public
   */
  scalingPolicy?: AutoScalingPolicy | undefined;
}

/**
 * <p>The optional auto scaling capacity settings for a table in provisioned capacity mode.</p>
 * @public
 */
export interface AutoScalingSpecification {
  /**
   * <p>The auto scaling settings for the table's write capacity.</p>
   * @public
   */
  writeCapacityAutoScaling?: AutoScalingSettings | undefined;

  /**
   * <p>The auto scaling settings for the table's read capacity.</p>
   * @public
   */
  readCapacityAutoScaling?: AutoScalingSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const ThroughputMode = {
  PAY_PER_REQUEST: "PAY_PER_REQUEST",
  PROVISIONED: "PROVISIONED",
} as const;

/**
 * @public
 */
export type ThroughputMode = (typeof ThroughputMode)[keyof typeof ThroughputMode];

/**
 * <p>Amazon Keyspaces has two read/write capacity modes for processing reads and writes on your tables: </p>
 *          <ul>
 *             <li>
 *                <p>On-demand (default)</p>
 *             </li>
 *             <li>
 *                <p>Provisioned</p>
 *             </li>
 *          </ul>
 *          <p>The read/write capacity mode that you choose controls how you are charged for read and
 *          write throughput and how table throughput capacity is managed.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 * @public
 */
export interface CapacitySpecification {
  /**
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  throughputMode: ThroughputMode | undefined;

  /**
   * <p>The throughput capacity specified for <code>read</code> operations defined in <code>read capacity units</code>
   *             <code>(RCUs)</code>.</p>
   * @public
   */
  readCapacityUnits?: number | undefined;

  /**
   * <p>The throughput capacity specified for <code>write</code> operations defined in <code>write capacity units</code>
   *             <code>(WCUs)</code>.</p>
   * @public
   */
  writeCapacityUnits?: number | undefined;
}

/**
 * <p>The read/write throughput capacity mode for a table. The options are:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>throughputMode:PROVISIONED</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 * @public
 */
export interface CapacitySpecificationSummary {
  /**
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  throughputMode: ThroughputMode | undefined;

  /**
   * <p>The throughput capacity specified for <code>read</code> operations defined in <code>read capacity units</code>
   *             <code>(RCUs)</code>.</p>
   * @public
   */
  readCapacityUnits?: number | undefined;

  /**
   * <p>The throughput capacity specified for <code>write</code> operations defined in <code>write capacity units</code>
   *             <code>(WCUs)</code>.</p>
   * @public
   */
  writeCapacityUnits?: number | undefined;

  /**
   * <p>The timestamp of the last operation that changed the provisioned throughput capacity of a table.</p>
   * @public
   */
  lastUpdateToPayPerRequestTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ClientSideTimestampsStatus = {
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ClientSideTimestampsStatus = (typeof ClientSideTimestampsStatus)[keyof typeof ClientSideTimestampsStatus];

/**
 * <p>The client-side timestamp setting of the table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps-how-it-works.html">How it works: Amazon Keyspaces client-side timestamps</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 * @public
 */
export interface ClientSideTimestamps {
  /**
   * <p>Shows how to enable client-side timestamps settings for the specified table.</p>
   * @public
   */
  status: ClientSideTimestampsStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * <p>The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition.</p>
 * @public
 */
export interface ClusteringKey {
  /**
   * <p>The name(s) of the clustering column(s).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Sets the ascendant (<code>ASC</code>) or descendant (<code>DESC</code>) order modifier.</p>
   * @public
   */
  orderBy: SortOrder | undefined;
}

/**
 * <p>The names and data types of regular columns.</p>
 * @public
 */
export interface ColumnDefinition {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the column. For a list of available data types, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * <p>An optional comment that describes the table.</p>
 * @public
 */
export interface Comment {
  /**
   * <p>An optional description of the table.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to
 *          perform an action and the same or a different action is already
 *          in progress, or if you try to create a resource that already exists. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const Rs = {
  MULTI_REGION: "MULTI_REGION",
  SINGLE_REGION: "SINGLE_REGION",
} as const;

/**
 * @public
 */
export type Rs = (typeof Rs)[keyof typeof Rs];

/**
 * <p>
 *             The replication specification of the keyspace includes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>regionList</code> - up to six Amazon Web Services Regions where the keyspace is replicated in.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>replicationStrategy</code> - the required value is <code>SINGLE_REGION</code> or
 *                <code>MULTI_REGION</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ReplicationSpecification {
  /**
   * <p>
   *          The <code>replicationStrategy</code> of a keyspace, the required value is <code>SINGLE_REGION</code> or
   *             <code>MULTI_REGION</code>.
   *       </p>
   * @public
   */
  replicationStrategy: Rs | undefined;

  /**
   * <p>
   *          The <code>regionList</code> can contain up to six Amazon Web Services Regions where the keyspace is replicated in.
   *       </p>
   * @public
   */
  regionList?: string[] | undefined;
}

/**
 * <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Amazon Keyspaces resource.</p>
 *          <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign.
 *          Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the
 *          prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag. Tag keys are case sensitive. Each Amazon Keyspaces resource can only have up to one tag with the same key. If you try to add an
   *          existing tag (same key), the existing tag value will be updated to the new value.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag. Tag values are case-sensitive and can be null.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyspaceRequest {
  /**
   * <p>The name of the keyspace to be created.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>A list of key-value pair tags to be attached to the keyspace.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>
   *          The replication specification of the keyspace includes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>replicationStrategy</code> - the required value is <code>SINGLE_REGION</code> or
   *             <code>MULTI_REGION</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>regionList</code> - if the <code>replicationStrategy</code> is <code>MULTI_REGION</code>, the
   *             <code>regionList</code> requires the current Region and at least one additional Amazon Web Services Region where
   *             the keyspace is going to be replicated in. The maximum number of supported replication Regions including the current
   *             Region is six.</p>
   *             </li>
   *          </ul>
   * @public
   */
  replicationSpecification?: ReplicationSpecification | undefined;
}

/**
 * @public
 */
export interface CreateKeyspaceResponse {
  /**
   * <p>The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * <p>The operation exceeded the service quota for this resource.  For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The operation failed due to an invalid or malformed request.</p>
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
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * <p>Amazon Keyspaces encrypts and decrypts the table data at rest transparently and integrates with Key Management Service for storing and managing the encryption key.
 *          You can choose one of the following KMS keys (KMS keys):</p>
 *          <ul>
 *             <li>
 *                <p>Amazon Web Services owned key - This is the default encryption type. The key is owned by Amazon Keyspaces (no additional charge). </p>
 *             </li>
 *             <li>
 *                <p>Customer managed key - This key is stored in your account and is created, owned, and managed by you. You have full control over the customer
 *             managed key (KMS charges apply).</p>
 *             </li>
 *          </ul>
 *          <p>For more information about encryption at rest in Amazon Keyspaces, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *          <p>For more information about KMS, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">KMS management service concepts</a> in the <i>Key Management Service Developer Guide</i>.</p>
 * @public
 */
export interface EncryptionSpecification {
  /**
   * <p>The encryption option specified for the table. You can choose one of the following KMS keys (KMS keys):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *             This option
   *             requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  type: EncryptionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key, for example <code>kms_key_identifier:ARN</code>.</p>
   * @public
   */
  kmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PointInTimeRecoveryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PointInTimeRecoveryStatus = (typeof PointInTimeRecoveryStatus)[keyof typeof PointInTimeRecoveryStatus];

/**
 * <p>Point-in-time recovery (PITR) helps protect your Amazon Keyspaces tables from accidental write or delete operations by providing you continuous backups of your table data.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 * @public
 */
export interface PointInTimeRecovery {
  /**
   * <p>The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status=ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status=DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  status: PointInTimeRecoveryStatus | undefined;
}

/**
 * <p>The Amazon Web Services Region specific settings of a multi-Region table.</p>
 *          <p>For a multi-Region table, you can configure the table's read capacity differently per Amazon Web Services Region. You can do this by configuring the following parameters.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>region</code>: The Region where these settings are applied. (Required)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>readCapacityUnits</code>: The provisioned read capacity units. (Optional)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>readCapacityAutoScaling</code>: The read capacity auto scaling settings for the table. (Optional)</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ReplicaSpecification {
  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>The provisioned read capacity units for the multi-Region table in the specified Amazon Web Services Region.</p>
   * @public
   */
  readCapacityUnits?: number | undefined;

  /**
   * <p>The read capacity auto scaling settings for the multi-Region
   *          table in the specified Amazon Web Services Region.</p>
   * @public
   */
  readCapacityAutoScaling?: AutoScalingSettings | undefined;
}

/**
 * <p>The partition key portion of the primary key is required
 *          and determines how Amazon Keyspaces stores the data.
 *          The partition key can be a single column, or it can be a compound value composed of two or more columns.</p>
 * @public
 */
export interface PartitionKey {
  /**
   * <p>The name(s) of the partition key column(s).</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The static columns of the table. Static columns store values that are shared by all rows in the same partition.</p>
 * @public
 */
export interface StaticColumn {
  /**
   * <p>The name of the static column.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Describes the schema of the table.</p>
 * @public
 */
export interface SchemaDefinition {
  /**
   * <p>The regular columns of the table.</p>
   * @public
   */
  allColumns: ColumnDefinition[] | undefined;

  /**
   * <p>The columns that are part of the partition key of the table .</p>
   * @public
   */
  partitionKeys: PartitionKey[] | undefined;

  /**
   * <p>The columns that are part of the clustering key of the table.</p>
   * @public
   */
  clusteringKeys?: ClusteringKey[] | undefined;

  /**
   * <p>The columns that have been defined as <code>STATIC</code>. Static columns store values that are shared by all rows in the same partition.</p>
   * @public
   */
  staticColumns?: StaticColumn[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TimeToLiveStatus = {
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type TimeToLiveStatus = (typeof TimeToLiveStatus)[keyof typeof TimeToLiveStatus];

/**
 * <p>Enable custom Time to Live (TTL) settings for rows and columns without setting a TTL default for the specified table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_enabling">Enabling TTL on tables</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 * @public
 */
export interface TimeToLive {
  /**
   * <p>Shows how to enable custom Time to Live (TTL) settings for the specified table.</p>
   * @public
   */
  status: TimeToLiveStatus | undefined;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * <p>The name of the keyspace that the table is going to be created in.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>The <code>schemaDefinition</code> consists of the
   *          following parameters.</p>
   *          <p>For each column to be created:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code>  -  The name
   *             of the column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>  -  An Amazon Keyspaces
   *             data type. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *                   Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>The primary key of the table consists of the
   *                      following columns:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>partitionKeys</code> - The partition key can be a single column, or it can be a
   *             compound value composed of two or more columns. The partition
   *             key portion of the primary key is required and determines how
   *             Amazon Keyspaces stores your data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of each partition key column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>clusteringKeys</code> - The optional clustering column portion of your primary key
   *             determines how the data is clustered and sorted within each
   *             partition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code> - The name of the clustering column. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>orderBy</code> - Sets the
   *             ascendant (<code>ASC</code>) or descendant (<code>DESC</code>) order modifier.</p>
   *                <p>To define a column as static use <code>staticColumns</code>  -
   *                Static columns store values that are shared by all rows in the same partition:</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code>  -  The name
   *             of the column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>  -  An Amazon Keyspaces
   *             data type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  schemaDefinition: SchemaDefinition | undefined;

  /**
   * <p>This parameter allows to enter a description of the table.</p>
   * @public
   */
  comment?: Comment | undefined;

  /**
   * <p>Specifies the read/write throughput capacity mode for the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is
   *          <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  capacitySpecification?: CapacitySpecification | undefined;

  /**
   * <p>Specifies how the encryption key for encryption at rest is managed for the table.
   *          You can choose one of the following KMS key (KMS key):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *             This option
   *             requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  encryptionSpecification?: EncryptionSpecification | undefined;

  /**
   * <p>Specifies if <code>pointInTimeRecovery</code> is enabled or disabled for the
   *             table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status=ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status=DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If it's not specified, the
   *                default is <code>status=DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  pointInTimeRecovery?: PointInTimeRecovery | undefined;

  /**
   * <p>Enables Time to Live custom settings for the
   *             table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status:enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status:disabled</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>status:disabled</code>. After
   *             <code>ttl</code> is enabled, you can't disable it
   *             for the table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html">Expiring data by using Amazon Keyspaces Time to Live (TTL)</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  ttl?: TimeToLive | undefined;

  /**
   * <p>The default Time to Live setting in seconds for the
   *          table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl">Setting the default TTL value for a table</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  defaultTimeToLive?: number | undefined;

  /**
   * <p>A list of key-value pair tags to be
   *          attached to the resource. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>
   *          Enables client-side timestamps for the table. By default, the setting is disabled. You can enable
   *             client-side timestamps with the following option:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status: "enabled"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Once client-side timestamps are enabled for a table, this setting cannot be disabled.</p>
   * @public
   */
  clientSideTimestamps?: ClientSideTimestamps | undefined;

  /**
   * <p>The optional auto scaling settings for a table in provisioned capacity mode. Specifies if the service can manage throughput capacity
   *          automatically on your behalf.</p>
   *          <p>Auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing
   *          your table's read and write capacity automatically in response to application traffic. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html">Managing throughput capacity automatically with Amazon Keyspaces auto scaling</a> in the <i>Amazon Keyspaces Developer
   *                Guide</i>.</p>
   *          <p>By default, auto scaling is disabled for a table. </p>
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;

  /**
   * <p>The optional Amazon Web Services Region specific settings of a multi-Region table.
   *          These settings overwrite the general settings of the table for the specified Region. </p>
   *          <p>For a multi-Region table in provisioned capacity mode, you can configure the table's read capacity differently for each Region's replica. The write capacity, however,
   *          remains synchronized between all replicas to ensure that there's enough capacity to replicate writes across all Regions. To define the read capacity for a table
   *          replica in a specific Region, you can do so by configuring the following parameters.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>region</code>: The Region where these settings are applied. (Required)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>readCapacityUnits</code>: The provisioned read capacity units. (Optional)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>readCapacityAutoScaling</code>: The read capacity auto scaling settings for the table. (Optional) </p>
   *             </li>
   *          </ul>
   * @public
   */
  replicaSpecifications?: ReplicaSpecification[] | undefined;
}

/**
 * @public
 */
export interface CreateTableResponse {
  /**
   * <p>The unique identifier of the table in the format of an Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly,
 *          or its status might not be <code>ACTIVE</code>.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The unique identifier in the format of Amazon Resource Name (ARN) for the resource could't be found.</p>
   * @public
   */
  resourceArn?: string | undefined;

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
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * <p>
 *          A field definition consists out of a name and a type.
 *       </p>
 * @public
 */
export interface FieldDefinition {
  /**
   * <p>
   *          The identifier.
   *       </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *          Any supported Cassandra data type, including collections and other user-defined types that are
   *          contained in the same keyspace.
   *       </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cassandra-apis.html#cassandra-data-type">Cassandra data type support</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * @public
 */
export interface CreateTypeRequest {
  /**
   * <p>
   *          The name of the keyspace.
   *       </p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>
   *          The name of the user-defined type.
   *       </p>
   *          <p>UDT names must contain 48 characters or less, must begin with an alphabetic character, and
   *          can only contain alpha-numeric characters and underscores. Amazon Keyspaces converts upper case characters automatically
   *          into lower case characters. </p>
   *          <p>Alternatively, you can declare a UDT name in double quotes. When declaring a UDT name inside double quotes,
   *          Amazon Keyspaces preserves upper casing and allows special characters.</p>
   *          <p>You can also use double quotes as part of the
   *          name when you create the UDT, but you must escape each double quote character with an additional
   *          double quote character.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>
   *          The field definitions, consisting of names and types, that define this type.
   *       </p>
   * @public
   */
  fieldDefinitions: FieldDefinition[] | undefined;
}

/**
 * @public
 */
export interface CreateTypeResponse {
  /**
   * <p>
   *          The unique identifier of the keyspace that contains the new type in the format of an Amazon Resource Name (ARN).
   *       </p>
   * @public
   */
  keyspaceArn: string | undefined;

  /**
   * <p>
   *          The formatted name of the user-defined type that was created. Note that Amazon Keyspaces requires the formatted name of the type for
   *          other operations, for example <code>GetType</code>.
   *       </p>
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteKeyspaceRequest {
  /**
   * <p>The name of the keyspace to be deleted.</p>
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
   * <p>The name of the keyspace of the to be deleted table.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table to be deleted.</p>
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
   * <p>
   *          The name of the keyspace of the to be deleted type.
   *       </p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>
   *          The name of the type to be deleted.
   *       </p>
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTypeResponse {
  /**
   * <p>
   *          The unique identifier of the keyspace from which the type was deleted in the format of an Amazon Resource Name (ARN).
   *       </p>
   * @public
   */
  keyspaceArn: string | undefined;

  /**
   * <p>
   *          The name of the type that was deleted.
   *       </p>
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 */
export interface GetKeyspaceRequest {
  /**
   * <p>The name of the keyspace.</p>
   * @public
   */
  keyspaceName: string | undefined;
}

/**
 * @public
 */
export interface GetKeyspaceResponse {
  /**
   * <p>The name of the keyspace.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>Returns the ARN of the keyspace.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *          Returns the replication strategy of the keyspace. The options are <code>SINGLE_REGION</code> or <code>MULTI_REGION</code>.
   *       </p>
   * @public
   */
  replicationStrategy: Rs | undefined;

  /**
   * <p>
   *          If the <code>replicationStrategy</code> of the keyspace is <code>MULTI_REGION</code>, a list of replication Regions is returned.
   *       </p>
   * @public
   */
  replicationRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * <p>The name of the keyspace that the table is stored in.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName: string | undefined;
}

/**
 * <p>The point-in-time recovery status of the specified table.</p>
 * @public
 */
export interface PointInTimeRecoverySummary {
  /**
   * <p>Shows if point-in-time recovery is enabled or disabled for the specified table.</p>
   * @public
   */
  status: PointInTimeRecoveryStatus | undefined;

  /**
   * <p>Specifies the earliest possible restore point of the table in ISO 8601 format.</p>
   * @public
   */
  earliestRestorableTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const TableStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
  RESTORING: "RESTORING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus];

/**
 * <p>The Region-specific settings of a multi-Region table in the specified Amazon Web Services Region.</p>
 *          <p>If the multi-Region table is using provisioned capacity and has optional auto scaling policies configured, note that
 *       the Region specific summary returns both read and write capacity settings. But only Region specific read capacity settings can be configured for a
 *       multi-Region table. In a multi-Region table, your write capacity units will be synced across all Amazon Web Services Regions to ensure that there is enough
 *       capacity to replicate write events across Regions.</p>
 * @public
 */
export interface ReplicaSpecificationSummary {
  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The status of the multi-Region table in the specified Amazon Web Services Region.</p>
   * @public
   */
  status?: TableStatus | undefined;

  /**
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  capacitySpecification?: CapacitySpecificationSummary | undefined;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * <p>The name of the keyspace that the specified table is stored in.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the specified table.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified table.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The creation timestamp of the specified table.</p>
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * <p>The current status of the specified table.</p>
   * @public
   */
  status?: TableStatus | undefined;

  /**
   * <p>The schema definition of the specified table.</p>
   * @public
   */
  schemaDefinition?: SchemaDefinition | undefined;

  /**
   * <p>The read/write throughput capacity mode for a table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  capacitySpecification?: CapacitySpecificationSummary | undefined;

  /**
   * <p>The encryption settings of the specified table.</p>
   * @public
   */
  encryptionSpecification?: EncryptionSpecification | undefined;

  /**
   * <p>The point-in-time recovery status of the specified table.</p>
   * @public
   */
  pointInTimeRecovery?: PointInTimeRecoverySummary | undefined;

  /**
   * <p>The custom Time to Live settings of the specified table.</p>
   * @public
   */
  ttl?: TimeToLive | undefined;

  /**
   * <p>The default Time to Live settings in seconds of the specified table.</p>
   * @public
   */
  defaultTimeToLive?: number | undefined;

  /**
   * <p>The the description of the specified table.</p>
   * @public
   */
  comment?: Comment | undefined;

  /**
   * <p>
   *          The client-side timestamps setting of the table.</p>
   * @public
   */
  clientSideTimestamps?: ClientSideTimestamps | undefined;

  /**
   * <p>Returns the Amazon Web Services Region specific settings of all Regions a multi-Region table is replicated in.</p>
   * @public
   */
  replicaSpecifications?: ReplicaSpecificationSummary[] | undefined;
}

/**
 * @public
 */
export interface GetTableAutoScalingSettingsRequest {
  /**
   * <p>The name of the keyspace.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName: string | undefined;
}

/**
 * <p>The auto scaling settings of a multi-Region table in the specified Amazon Web Services Region.</p>
 * @public
 */
export interface ReplicaAutoScalingSpecification {
  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The auto scaling settings for a multi-Region table in the specified Amazon Web Services Region.</p>
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;
}

/**
 * @public
 */
export interface GetTableAutoScalingSettingsResponse {
  /**
   * <p>The name of the keyspace.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the table.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The auto scaling settings of the table.</p>
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;

  /**
   * <p>The Amazon Web Services Region specific settings of a multi-Region table. Returns the settings for all Regions the table is replicated in.</p>
   * @public
   */
  replicaSpecifications?: ReplicaAutoScalingSpecification[] | undefined;
}

/**
 * @public
 */
export interface GetTypeRequest {
  /**
   * <p>
   *          The name of the keyspace that contains this type.
   *       </p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The formatted name of the type. For example, if the name of the type was created
   *          without double quotes, Amazon Keyspaces saved the name in lower-case characters. If the name was
   *          created in double quotes, you must use double quotes to specify the type name. </p>
   * @public
   */
  typeName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TypeStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  RESTORING: "RESTORING",
} as const;

/**
 * @public
 */
export type TypeStatus = (typeof TypeStatus)[keyof typeof TypeStatus];

/**
 * @public
 */
export interface GetTypeResponse {
  /**
   * <p>
   *          The name of the keyspace that contains this type.
   *       </p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>
   *          The name of the type.
   *       </p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>
   *          The names and types that define this type.
   *       </p>
   * @public
   */
  fieldDefinitions?: FieldDefinition[] | undefined;

  /**
   * <p>
   *          The timestamp that shows when this type was last modified.
   *       </p>
   * @public
   */
  lastModifiedTimestamp?: Date | undefined;

  /**
   * <p>
   *          The status of this type.
   *       </p>
   * @public
   */
  status?: TypeStatus | undefined;

  /**
   * <p>
   *          The tables that use this type.
   *       </p>
   * @public
   */
  directReferringTables?: string[] | undefined;

  /**
   * <p>
   *          The types that use this type.
   *       </p>
   * @public
   */
  directParentTypes?: string[] | undefined;

  /**
   * <p>
   *          The level of nesting implemented for this type.
   *       </p>
   * @public
   */
  maxNestingDepth?: number | undefined;

  /**
   * <p>
   *          The unique identifier of the keyspace that contains this type in the format of an Amazon Resource Name (ARN).
   *       </p>
   * @public
   */
  keyspaceArn: string | undefined;
}

/**
 * @public
 */
export interface ListKeyspacesRequest {
  /**
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The total number of keyspaces to return in the output. If the total number of keyspaces available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents the properties of a keyspace.</p>
 * @public
 */
export interface KeyspaceSummary {
  /**
   * <p>The name of the keyspace.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The unique identifier of the keyspace in the format of an Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *       This property specifies if a keyspace is a single Region keyspace or a multi-Region keyspace.  The available
   *       values are <code>SINGLE_REGION</code> or <code>MULTI_REGION</code>.
   *    </p>
   * @public
   */
  replicationStrategy: Rs | undefined;

  /**
   * <p>
   *          If the <code>replicationStrategy</code> of the keyspace is <code>MULTI_REGION</code>, a list of replication Regions is returned.
   *       </p>
   * @public
   */
  replicationRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListKeyspacesResponse {
  /**
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of keyspaces.</p>
   * @public
   */
  keyspaces: KeyspaceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The total number of tables to return in the output. If the total number of tables available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The name of the keyspace.</p>
   * @public
   */
  keyspaceName: string | undefined;
}

/**
 * <p>Returns the name of the specified table, the keyspace it is stored in, and the unique identifier in the format of an Amazon Resource Name (ARN).</p>
 * @public
 */
export interface TableSummary {
  /**
   * <p>The name of the keyspace that the table is stored in.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>The unique identifier of the table in the format of an Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of tables.</p>
   * @public
   */
  tables?: TableSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Keyspaces resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The pagination token. To resume pagination, provide the <code>NextToken</code> value as argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The total number of tags to return in the output. If the total number of tags available
   *          is more than the value specified, a <code>NextToken</code> is provided in the output. To resume pagination,
   *          provide the <code>NextToken</code> value as an argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A token to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTypesRequest {
  /**
   * <p>
   *          The pagination token. To resume pagination, provide the <code>NextToken</code> value as an argument of a subsequent API invocation.
   *       </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *          The total number of types to return in the output. If the total number of types available is more than the value specified,
   *          a <code>NextToken</code> is provided in the output. To resume pagination, provide the <code>NextToken</code> value as an
   *          argument of a subsequent API invocation.
   *       </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *          The name of the keyspace that contains the listed types.
   *       </p>
   * @public
   */
  keyspaceName: string | undefined;
}

/**
 * @public
 */
export interface ListTypesResponse {
  /**
   * <p>
   *          The pagination token. To resume pagination, provide the <code>NextToken</code> value as an argument of a subsequent API invocation.
   *       </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *          The list of types contained in the specified keyspace.
   *       </p>
   * @public
   */
  types: string[] | undefined;
}

/**
 * @public
 */
export interface RestoreTableRequest {
  /**
   * <p>The keyspace name of the source table.</p>
   * @public
   */
  sourceKeyspaceName: string | undefined;

  /**
   * <p>The name of the source table.</p>
   * @public
   */
  sourceTableName: string | undefined;

  /**
   * <p>The name of the target keyspace.</p>
   * @public
   */
  targetKeyspaceName: string | undefined;

  /**
   * <p>The name of the target table.</p>
   * @public
   */
  targetTableName: string | undefined;

  /**
   * <p>The restore timestamp in ISO 8601 format.</p>
   * @public
   */
  restoreTimestamp?: Date | undefined;

  /**
   * <p>Specifies the read/write throughput capacity mode for the target table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  capacitySpecificationOverride?: CapacitySpecification | undefined;

  /**
   * <p>Specifies the encryption settings for the target table. You can choose one of the following KMS key (KMS key):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *             This option
   *             requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>type:AWS_OWNED_KMS_KEY</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  encryptionSpecificationOverride?: EncryptionSpecification | undefined;

  /**
   * <p>Specifies the <code>pointInTimeRecovery</code> settings for the target
   *             table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status=ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status=DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If it's not specified, the default is <code>status=DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *                Guide</i>.</p>
   * @public
   */
  pointInTimeRecoveryOverride?: PointInTimeRecovery | undefined;

  /**
   * <p>A list of key-value pair tags to be
   *          attached to the restored table. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  tagsOverride?: Tag[] | undefined;

  /**
   * <p>The optional auto scaling settings for the restored table in provisioned capacity mode.
   *          Specifies if the service can manage throughput capacity of a provisioned table
   *          automatically on your behalf.
   *          Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing
   *          your table's read and write capacity automatically in response to application traffic.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html">Managing throughput capacity automatically with Amazon Keyspaces auto scaling</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;

  /**
   * <p>The optional Region specific settings of a multi-Regional table.</p>
   * @public
   */
  replicaSpecifications?: ReplicaSpecification[] | undefined;
}

/**
 * @public
 */
export interface RestoreTableResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the restored table.</p>
   * @public
   */
  restoredTableARN: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Keyspaces resource to which to add tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon Keyspaces resource.</p>
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
   * <p>The Amazon Keyspaces resource that the tags will be removed from. This value is an Amazon Resource Name (ARN).</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of existing tags to be removed from the Amazon Keyspaces resource.</p>
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
export interface UpdateTableRequest {
  /**
   * <p>The name of the keyspace the specified table is stored in.</p>
   * @public
   */
  keyspaceName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>For each column to be added to the specified table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code>  -  The name
   *             of the column.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>  -  An Amazon Keyspaces
   *             data type. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types">Data types</a> in the <i>Amazon Keyspaces Developer
   *                   Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  addColumns?: ColumnDefinition[] | undefined;

  /**
   * <p>Modifies the read/write throughput capacity mode for the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PAY_PER_REQUEST</code> and </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>throughputMode:PROVISIONED</code> - Provisioned capacity mode requires
   *             <code>readCapacityUnits</code> and <code>writeCapacityUnits</code> as input.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>throughput_mode:PAY_PER_REQUEST</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  capacitySpecification?: CapacitySpecification | undefined;

  /**
   * <p>Modifies the encryption settings of the table. You can choose one of the following KMS key (KMS key):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>type:AWS_OWNED_KMS_KEY</code> - This key is owned by Amazon Keyspaces. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type:CUSTOMER_MANAGED_KMS_KEY</code> - This key is stored in your account and is created, owned, and managed by you.
   *             This option
   *             requires the <code>kms_key_identifier</code> of the KMS key in Amazon Resource Name (ARN) format as input. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>AWS_OWNED_KMS_KEY</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html">Encryption at rest</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  encryptionSpecification?: EncryptionSpecification | undefined;

  /**
   * <p>Modifies the <code>pointInTimeRecovery</code> settings of the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status=ENABLED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status=DISABLED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If it's not specified, the default is <code>status=DISABLED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  pointInTimeRecovery?: PointInTimeRecovery | undefined;

  /**
   * <p>Modifies Time to Live custom settings for the table. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status:enabled</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status:disabled</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>status:disabled</code>. After
   *          <code>ttl</code> is enabled, you can't disable it
   *          for the table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html">Expiring data by using Amazon Keyspaces Time to Live (TTL)</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  ttl?: TimeToLive | undefined;

  /**
   * <p>The default Time to Live setting in seconds for the table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl">Setting the default TTL value for a table</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  defaultTimeToLive?: number | undefined;

  /**
   * <p>Enables client-side timestamps for the table. By default, the setting is disabled. You can enable
   *             client-side timestamps with the following option:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>status: "enabled"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Once client-side timestamps are enabled for a table, this setting cannot be disabled.</p>
   * @public
   */
  clientSideTimestamps?: ClientSideTimestamps | undefined;

  /**
   * <p>The optional auto scaling settings to update for a table in provisioned capacity mode.
   *          Specifies if the service can manage throughput capacity of a provisioned table
   *          automatically on your behalf.
   *          Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing
   *          your table's read and write capacity automatically in response to application traffic.</p>
   *          <p>If auto scaling is already enabled for the table, you can use <code>UpdateTable</code> to update the minimum and maximum values or the
   *       auto scaling policy settings independently.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html">Managing throughput capacity automatically with Amazon Keyspaces auto scaling</a> in the <i>Amazon Keyspaces Developer
   *             Guide</i>.</p>
   * @public
   */
  autoScalingSpecification?: AutoScalingSpecification | undefined;

  /**
   * <p>The Region specific settings of a multi-Regional table.</p>
   * @public
   */
  replicaSpecifications?: ReplicaSpecification[] | undefined;
}

/**
 * @public
 */
export interface UpdateTableResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the modified table.</p>
   * @public
   */
  resourceArn: string | undefined;
}
