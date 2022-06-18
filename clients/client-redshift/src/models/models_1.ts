// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { PauseClusterMessage, ResizeClusterMessage, ResumeClusterMessage } from "./models_0";
import { RedshiftServiceException as __BaseException } from "./RedshiftServiceException";

/**
 * <p>Describes a recurring charge.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The amount charged per the period of time specified by the recurring charge
   *             frequency.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency at which the recurring charge amount is applied.</p>
   */
  RecurringChargeFrequency?: string;
}

export namespace RecurringCharge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

export type ReservedNodeOfferingType = "Regular" | "Upgradable";

/**
 * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
 *             offerings. </p>
 */
export interface ReservedNode {
  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier for the reserved node offering.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p>The node type of the reserved node.</p>
   */
  NodeType?: string;

  /**
   * <p>The time the reservation started. You purchase a reserved node offering for a
   *             duration. This is the start time of that duration.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration of the node reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed cost Amazon Redshift charges you for this reserved node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly rate Amazon Redshift charges you for this reserved node.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved cluster.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The number of reserved compute nodes.</p>
   */
  NodeCount?: number;

  /**
   * <p>The state of the reserved compute node.</p>
   *         <p>Possible Values:</p>
   *         <ul>
   *             <li>
   *                 <p>pending-payment-This reserved node has recently been purchased, and the
   *                     sale has been approved, but payment has not yet been confirmed.</p>
   *             </li>
   *             <li>
   *                 <p>active-This reserved node is owned by the caller and is available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                 <p>payment-failed-Payment failed for the purchase attempt.</p>
   *             </li>
   *             <li>
   *                 <p>retired-The reserved node is no longer available. </p>
   *             </li>
   *             <li>
   *                 <p>exchanging-The owner is exchanging the reserved node for another reserved
   *                     node.</p>
   *             </li>
   *          </ul>
   */
  State?: string;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node
   *             offering.</p>
   */
  OfferingType?: string;

  /**
   * <p>The recurring charges for the reserved node.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p></p>
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | string;
}

export namespace ReservedNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNode): any => ({
    ...obj,
  });
}

/**
 * <p>The owner of the specified snapshot has not authorized your account to access the
 *             snapshot.</p>
 */
export class AccessToSnapshotDeniedFault extends __BaseException {
  readonly name: "AccessToSnapshotDeniedFault" = "AccessToSnapshotDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessToSnapshotDeniedFault, __BaseException>) {
    super({
      name: "AccessToSnapshotDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessToSnapshotDeniedFault.prototype);
  }
}

/**
 * <p>Describes an attribute value.</p>
 */
export interface AttributeValueTarget {
  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

export namespace AttributeValueTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeValueTarget): any => ({
    ...obj,
  });
}

/**
 * <p>A name value pair that describes an aspect of an account. </p>
 */
export interface AccountAttribute {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>A list of attribute values.</p>
   */
  AttributeValues?: AttributeValueTarget[];
}

export namespace AccountAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Web Services account authorized to restore a snapshot.</p>
 */
export interface AccountWithRestoreAccess {
  /**
   * <p>The identifier of an Amazon Web Services account authorized to restore a
   *             snapshot.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier of an Amazon Web Services support account authorized to restore a
   *             snapshot. For Amazon Web Services Support, the identifier is <code>amazon-redshift-support</code>. </p>
   */
  AccountAlias?: string;
}

export namespace AccountWithRestoreAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountWithRestoreAccess): any => ({
    ...obj,
  });
}

export enum ActionType {
  RECOMMEND_NODE_CONFIG = "recommend-node-config",
  RESIZE_CLUSTER = "resize-cluster",
  RESTORE_CLUSTER = "restore-cluster",
}

export enum AquaConfigurationStatus {
  AUTO = "auto",
  DISABLED = "disabled",
  ENABLED = "enabled",
}

export enum AquaStatus {
  APPLYING = "applying",
  DISABLED = "disabled",
  ENABLED = "enabled",
}

/**
 * <p>The AQUA (Advanced Query Accelerator) configuration of the cluster.</p>
 */
export interface AquaConfiguration {
  /**
   * <p>The value indicates the status of AQUA on the cluster. Possible values include the following.</p>
   *         <ul>
   *             <li>
   *                <p>enabled - AQUA is enabled.</p>
   *             </li>
   *             <li>
   *                <p>disabled - AQUA is not enabled. </p>
   *             </li>
   *             <li>
   *                <p>applying - AQUA status is being applied. </p>
   *             </li>
   *          </ul>
   */
  AquaStatus?: AquaStatus | string;

  /**
   * <p>The value represents how the cluster is configured to use AQUA. Possible values include the following.</p>
   *         <ul>
   *             <li>
   *                <p>enabled - Use AQUA if it is available for the current Amazon Web Services Region and Amazon Redshift node type.</p>
   *             </li>
   *             <li>
   *                <p>disabled - Don't use AQUA. </p>
   *             </li>
   *             <li>
   *                <p>auto - Amazon Redshift determines whether to use AQUA.</p>
   *             </li>
   *          </ul>
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | string;
}

export namespace AquaConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AquaConfiguration): any => ({
    ...obj,
  });
}

export enum DataShareStatus {
  ACTIVE = "ACTIVE",
  AUTHORIZED = "AUTHORIZED",
  AVAILABLE = "AVAILABLE",
  DEAUTHORIZED = "DEAUTHORIZED",
  PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION",
  REJECTED = "REJECTED",
}

/**
 * <p>The association of a datashare from a producer account with a data consumer.
 * </p>
 */
export interface DataShareAssociation {
  /**
   * <p>The name of the consumer accounts that have an association with a producer
   *             datashare.</p>
   */
  ConsumerIdentifier?: string;

  /**
   * <p>The status of the datashare that is associated.</p>
   */
  Status?: DataShareStatus | string;

  /**
   * <p>The Amazon Web Services Region of the consumer accounts that have an association with a producer datashare.</p>
   */
  ConsumerRegion?: string;

  /**
   * <p>The creation date of the datashare that is associated.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The status change data of the datashare that is associated.</p>
   */
  StatusChangeDate?: Date;
}

export namespace DataShareAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataShareAssociation): any => ({
    ...obj,
  });
}

export type ScheduleState = "ACTIVE" | "FAILED" | "MODIFYING";

/**
 * <p></p>
 */
export interface ClusterAssociatedToSchedule {
  /**
   * <p></p>
   */
  ClusterIdentifier?: string;

  /**
   * <p></p>
   */
  ScheduleAssociationState?: ScheduleState | string;
}

export namespace ClusterAssociatedToSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterAssociatedToSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an authentication profile.</p>
 */
export interface AuthenticationProfile {
  /**
   * <p>The name of the authentication profile.</p>
   */
  AuthenticationProfileName?: string;

  /**
   * <p>The content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   */
  AuthenticationProfileContent?: string;
}

export namespace AuthenticationProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationProfile): any => ({
    ...obj,
  });
}

/**
 * <p>The specified CIDR IP range or EC2 security group is not authorized for the
 *             specified cluster security group.</p>
 */
export class AuthorizationNotFoundFault extends __BaseException {
  readonly name: "AuthorizationNotFoundFault" = "AuthorizationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationNotFoundFault, __BaseException>) {
    super({
      name: "AuthorizationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationNotFoundFault.prototype);
  }
}

export enum AuthorizationStatus {
  AUTHORIZED = "Authorized",
  REVOKING = "Revoking",
}

/**
 * <p>A tag consisting of a name/value pair for a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key, or name, for the resource tag.</p>
   */
  Key?: string;

  /**
   * <p>The value for the resource tag.</p>
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

/**
 * <p>Describes an Amazon EC2 security group.</p>
 */
export interface EC2SecurityGroup {
  /**
   * <p>The status of the EC2 security group.</p>
   */
  Status?: string;

  /**
   * <p>The name of the EC2 Security Group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the EC2 security group specified in the
   *                 <code>EC2SecurityGroupName</code> field. </p>
   */
  EC2SecurityGroupOwnerId?: string;

  /**
   * <p>The list of tags for the EC2 security group.</p>
   */
  Tags?: Tag[];
}

export namespace EC2SecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2SecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IP range used in a security group.</p>
 */
export interface IPRange {
  /**
   * <p>The status of the IP range, for example, "authorized".</p>
   */
  Status?: string;

  /**
   * <p>The IP range in Classless Inter-Domain Routing (CIDR) notation.</p>
   */
  CIDRIP?: string;

  /**
   * <p>The list of tags for the IP range.</p>
   */
  Tags?: Tag[];
}

export namespace IPRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IPRange): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group.</p>
 */
export interface ClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group to which the operation was
   *             applied.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>A description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>A list of EC2 security groups that are permitted to access clusters associated with
   *             this cluster security group.</p>
   */
  EC2SecurityGroups?: EC2SecurityGroup[];

  /**
   * <p>A list of IP ranges (CIDR blocks) that are permitted to access clusters associated
   *             with this cluster security group.</p>
   */
  IPRanges?: IPRange[];

  /**
   * <p>The list of tags for the cluster security group.</p>
   */
  Tags?: Tag[];
}

export namespace ClusterSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * <p>The snapshot identifier that is provided in the request.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The identifier of the cluster for which the snapshot was taken.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The time (in UTC format) when Amazon Redshift began the snapshot. A snapshot contains a
   *             copy of the cluster data as of this exact time.</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>The snapshot status. The value of the status depends on the API operation used: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <a>CreateClusterSnapshot</a> and <a>CopyClusterSnapshot</a> returns status as "creating". </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <a>DescribeClusterSnapshots</a> returns status as "creating",
   *                     "available", "final snapshot", or "failed".</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <a>DeleteClusterSnapshot</a> returns status as "deleted".</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The port that the cluster is listening on.</p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone in which the cluster was created.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The time (UTC) when the cluster was originally created.</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The admin user name for the cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The cluster version of the cluster used to create the snapshot. For example, 1.0.15503. </p>
   */
  EngineFullVersion?: string;

  /**
   * <p>The snapshot type. Snapshots created using <a>CreateClusterSnapshot</a>
   *             and <a>CopyClusterSnapshot</a> are of type "manual". </p>
   */
  SnapshotType?: string;

  /**
   * <p>The node type of the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>The number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The name of the database that was created when the cluster was created.</p>
   */
  DBName?: string;

  /**
   * <p>The VPC identifier of the cluster if the snapshot is from a cluster in a VPC.
   *             Otherwise, this field is not in the output.</p>
   */
  VpcId?: string;

  /**
   * <p>If <code>true</code>, the data in the snapshot is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that was used to
   *             encrypt data in the cluster from which the snapshot was taken.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A boolean that indicates whether the snapshot data is encrypted using the HSM keys
   *             of the source cluster. <code>true</code> indicates that the data is encrypted using HSM
   *             keys.</p>
   */
  EncryptedWithHSM?: boolean;

  /**
   * <p>A list of the Amazon Web Services accounts authorized to restore the snapshot. Returns
   *                 <code>null</code> if no accounts are authorized. Visible only to the snapshot owner.
   *         </p>
   */
  AccountsWithRestoreAccess?: AccountWithRestoreAccess[];

  /**
   * <p>For manual snapshots, the Amazon Web Services account used to create or copy the snapshot.
   *             For automatic snapshots, the owner of the cluster. The owner can perform all snapshot
   *             actions, such as sharing a manual snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The size of the complete set of backup data that would be used to restore the
   *             cluster.</p>
   */
  TotalBackupSizeInMegaBytes?: number;

  /**
   * <p>The size of the incremental backup.</p>
   */
  ActualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * <p>The number of megabytes that have been transferred to the snapshot
   *             backup.</p>
   */
  BackupProgressInMegaBytes?: number;

  /**
   * <p>The number of megabytes per second being transferred to the snapshot backup.
   *             Returns <code>0</code> for a completed backup. </p>
   */
  CurrentBackupRateInMegaBytesPerSecond?: number;

  /**
   * <p>The estimate of the time remaining before the snapshot backup will complete.
   *             Returns <code>0</code> for a completed backup. </p>
   */
  EstimatedSecondsToCompletion?: number;

  /**
   * <p>The amount of time an in-progress snapshot backup has been running, or the amount
   *             of time it took a completed backup to finish.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The source region from which the snapshot was copied.</p>
   */
  SourceRegion?: string;

  /**
   * <p>The list of tags for the cluster snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The list of node types that this cluster snapshot is able to restore
   *             into.</p>
   */
  RestorableNodeTypes?: string[];

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *         <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *         <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name of the maintenance track for the snapshot.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The number of days until a manual snapshot will pass its retention period.</p>
   */
  ManualSnapshotRemainingDays?: number;

  /**
   * <p>A timestamp representing the start of the retention period for the snapshot.</p>
   */
  SnapshotRetentionStartTime?: Date;
}

export namespace Snapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

/**
 * <p>A list of supported platforms for orderable clusters.</p>
 */
export interface SupportedPlatform {
  /**
   * <p></p>
   */
  Name?: string;
}

export namespace SupportedPlatform {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SupportedPlatform): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an availability zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the availability zone.</p>
   */
  Name?: string;

  /**
   * <p></p>
   */
  SupportedPlatforms?: SupportedPlatform[];
}

export namespace AvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the errors returned by a snapshot.</p>
 */
export interface SnapshotErrorMessage {
  /**
   * <p>A unique identifier for the snapshot returning the error.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>A unique identifier for the cluster.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The failure code for the error.</p>
   */
  FailureCode?: string;

  /**
   * <p>The text message describing the error.</p>
   */
  FailureReason?: string;
}

export namespace SnapshotErrorMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotErrorMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Could not find the specified S3 bucket.</p>
 */
export class BucketNotFoundFault extends __BaseException {
  readonly name: "BucketNotFoundFault" = "BucketNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketNotFoundFault, __BaseException>) {
    super({
      name: "BucketNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketNotFoundFault.prototype);
  }
}

/**
 * <p>The identifier of a node in a cluster.</p>
 */
export interface ClusterNode {
  /**
   * <p>Whether the node is a leader node or a compute node.</p>
   */
  NodeRole?: string;

  /**
   * <p>The private IP address of a node within a cluster.</p>
   */
  PrivateIPAddress?: string;

  /**
   * <p>The public IP address of a node within a cluster.</p>
   */
  PublicIPAddress?: string;
}

export namespace ClusterNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterNode): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a parameter group.</p>
 */
export interface ClusterParameterStatus {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The status of the parameter that indicates whether the parameter is in sync with
   *             the database, waiting for a cluster reboot, or encountered an error when being
   *             applied.</p>
   *         <p>The following are possible statuses and descriptions.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>in-sync</code>: The parameter value is in sync with the
   *                     database.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>pending-reboot</code>: The parameter value will be applied after the
   *                     cluster reboots.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>applying</code>: The parameter value is being applied to the
   *                     database.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>invalid-parameter</code>: Cannot apply the parameter value because it has
   *                     an invalid value or syntax.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>apply-deferred</code>: The parameter contains static property changes. The
   *                     changes are deferred until the cluster reboots.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>apply-error</code>: Cannot connect to the cluster. The parameter change
   *                     will be applied after the cluster reboots.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>unknown-error</code>: Cannot apply the parameter change right now. The
   *                     change will be applied after the cluster reboots.</p>
   *             </li>
   *          </ul>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The error that prevented the parameter from being applied to the
   *             database.</p>
   */
  ParameterApplyErrorDescription?: string;
}

export namespace ClusterParameterStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a parameter group.</p>
 */
export interface ClusterParameterGroupStatus {
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The list of parameter statuses.</p>
   *         <p>
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  ClusterParameterStatusList?: ClusterParameterStatus[];
}

export namespace ClusterParameterGroupStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroupStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a cluster security group.</p>
 */
export interface ClusterSecurityGroupMembership {
  /**
   * <p>The name of the cluster security group.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>The status of the cluster security group.</p>
   */
  Status?: string;
}

export namespace ClusterSecurityGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSecurityGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the destination region and retention period that are configured for
 *             cross-region snapshot copy.</p>
 */
export interface ClusterSnapshotCopyStatus {
  /**
   * <p>The destination region that snapshots are automatically copied to when cross-region
   *             snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region
   *             after they are copied from a source region.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region
   *             after they are copied from a source region. If the value is -1, the manual snapshot is
   *             retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

export namespace ClusterSnapshotCopyStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSnapshotCopyStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a cluster while it is in the process of resizing with an
 *             incremental resize.</p>
 */
export interface DataTransferProgress {
  /**
   * <p>Describes the status of the cluster. While the transfer is in progress the status is
   *                 <code>transferringdata</code>.</p>
   */
  Status?: string;

  /**
   * <p>Describes the data transfer rate in MB's per second.</p>
   */
  CurrentRateInMegaBytesPerSecond?: number;

  /**
   * <p>Describes the total amount of data to be transfered in megabytes.</p>
   */
  TotalDataInMegaBytes?: number;

  /**
   * <p>Describes the total amount of data that has been transfered in MB's.</p>
   */
  DataTransferredInMegaBytes?: number;

  /**
   * <p>Describes the estimated number of seconds remaining to complete the transfer.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>Describes the number of seconds that have elapsed during the data transfer.</p>
   */
  ElapsedTimeInSeconds?: number;
}

export namespace DataTransferProgress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataTransferProgress): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a deferred maintenance window</p>
 */
export interface DeferredMaintenanceWindow {
  /**
   * <p>A unique identifier for the maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p> A timestamp for the beginning of the time period when we defer maintenance.</p>
   */
  DeferMaintenanceStartTime?: Date;

  /**
   * <p> A timestamp for the end of the time period when we defer maintenance.</p>
   */
  DeferMaintenanceEndTime?: Date;
}

export namespace DeferredMaintenanceWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeferredMaintenanceWindow): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of the elastic IP (EIP) address.</p>
 */
export interface ElasticIpStatus {
  /**
   * <p>The elastic IP (EIP) address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   */
  Status?: string;
}

export namespace ElasticIpStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticIpStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface. </p>
 */
export interface NetworkInterface {
  /**
   * <p>The network interface identifier. </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The subnet identifier. </p>
   */
  SubnetId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet. </p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The Availability Zone. </p>
   */
  AvailabilityZone?: string;
}

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.</p>
 */
export interface VpcEndpoint {
  /**
   * <p>The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The VPC identifier that the endpoint is associated. </p>
   */
  VpcId?: string;

  /**
   * <p>One or more network interfaces of the endpoint. Also known as an interface endpoint. </p>
   */
  NetworkInterfaces?: NetworkInterface[];
}

export namespace VpcEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a connection endpoint.</p>
 */
export interface Endpoint {
  /**
   * <p>The DNS address of the Cluster.</p>
   */
  Address?: string;

  /**
   * <p>The port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Describes a connection endpoint.</p>
   */
  VpcEndpoints?: VpcEndpoint[];
}

export namespace Endpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of changes to HSM settings.</p>
 */
export interface HsmStatus {
  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to
   *             retrieve the data encryption keys stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the
   *             Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>Reports whether the Amazon Redshift cluster has finished applying any HSM settings
   *             changes specified in a modify cluster command.</p>
   *         <p>Values: active, applying</p>
   */
  Status?: string;
}

export namespace HsmStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An Identity and Access Management (IAM) role that can be used by the associated
 *             Amazon Redshift cluster to access other Amazon Web Services services.</p>
 */
export interface ClusterIamRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role, for example,
   *                 <code>arn:aws:iam::123456789012:role/RedshiftCopyUnload</code>. </p>
   */
  IamRoleArn?: string;

  /**
   * <p>A value that describes the status of the IAM role's association with an Amazon
   *             Redshift cluster.</p>
   *         <p>The following are possible statuses and descriptions.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>in-sync</code>: The role is available for use by the cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>adding</code>: The role is in the process of being associated with the
   *                     cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>removing</code>: The role is in the process of being disassociated with
   *                     the cluster.</p>
   *             </li>
   *          </ul>
   */
  ApplyStatus?: string;
}

export namespace ClusterIamRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterIamRole): any => ({
    ...obj,
  });
}

/**
 * <p>Describes cluster attributes that are in a pending state. A change to one or more
 *             the attributes was requested and is in progress or will be applied.</p>
 */
export interface PendingModifiedValues {
  /**
   * <p>The pending or in-progress change of the admin user password for the
   *             cluster.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The pending or in-progress change of the cluster's node type.</p>
   */
  NodeType?: string;

  /**
   * <p>The pending or in-progress change of the number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The pending or in-progress change of the cluster type.</p>
   */
  ClusterType?: string;

  /**
   * <p>The pending or in-progress change of the service version.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The pending or in-progress change of the automated snapshot retention
   *             period.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The pending or in-progress change of the new identifier for the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The pending or in-progress change of the ability to connect to the cluster from the
   *             public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *         <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *         <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name of the maintenance track that the cluster will change to during the next
   *             maintenance window.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The encryption type for a cluster. Possible values are: KMS and None. </p>
   */
  EncryptionType?: string;
}

export namespace PendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj,
  });
}

export enum ReservedNodeExchangeStatusType {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  REQUESTED = "REQUESTED",
  RETRYING = "RETRYING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Reserved-node status details, such as the source reserved-node
 *             identifier, the target reserved-node identifier, the node type, the node count, and
 *             other details.</p>
 */
export interface ReservedNodeExchangeStatus {
  /**
   * <p>The identifier of the reserved-node exchange request.</p>
   */
  ReservedNodeExchangeRequestId?: string;

  /**
   * <p>The status of the reserved-node exchange request. Statuses include in-progress and requested.</p>
   */
  Status?: ReservedNodeExchangeStatusType | string;

  /**
   * <p>A date and time that indicate when the reserved-node exchange was requested.</p>
   */
  RequestTime?: Date;

  /**
   * <p>The identifier of the source reserved node.</p>
   */
  SourceReservedNodeId?: string;

  /**
   * <p>The source reserved-node type, for example ds2.xlarge.</p>
   */
  SourceReservedNodeType?: string;

  /**
   * <p>The source reserved-node count in the cluster.</p>
   */
  SourceReservedNodeCount?: number;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   */
  TargetReservedNodeOfferingId?: string;

  /**
   * <p>The node type of the target reserved node, for example ra3.4xlarge.</p>
   */
  TargetReservedNodeType?: string;

  /**
   * <p>The count of target reserved nodes in the cluster.</p>
   */
  TargetReservedNodeCount?: number;
}

export namespace ReservedNodeExchangeStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodeExchangeStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resize operation.</p>
 */
export interface ResizeInfo {
  /**
   * <p>Returns the value <code>ClassicResize</code>.</p>
   */
  ResizeType?: string;

  /**
   * <p>A boolean value indicating if the resize operation can be cancelled.</p>
   */
  AllowCancelResize?: boolean;
}

export namespace ResizeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResizeInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a cluster restore action. Returns null if the cluster was
 *             not created by restoring a snapshot.</p>
 */
export interface RestoreStatus {
  /**
   * <p>The status of the restore action. Returns starting, restoring, completed, or
   *             failed.</p>
   */
  Status?: string;

  /**
   * <p>The number of megabytes per second being transferred from the backup storage.
   *             Returns the average rate for a completed backup.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * <p>The size of the set of snapshot data used to restore the cluster.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * <p>The number of megabytes that have been transferred from snapshot storage.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time
   *             it took a completed restore to finish.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimate of the time remaining before the restore will complete. Returns 0 for
   *             a completed restore.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  EstimatedTimeToCompletionInSeconds?: number;
}

export namespace RestoreStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the members of a VPC security group.</p>
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export namespace VpcSecurityGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a cluster.</p>
 */
export interface Cluster {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p> The current state of the cluster. Possible values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>available</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>available, prep-for-resize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>available, resize-cleanup</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>cancelling-resize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>creating</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>deleting</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>final-snapshot</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>hardware-failure</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>incompatible-hsm</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>incompatible-network</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>incompatible-parameters</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>incompatible-restore</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>modifying</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>paused</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>rebooting</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>renaming</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>resizing</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>rotating-keys</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>storage-full</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>updating-hsm</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  ClusterStatus?: string;

  /**
   * <p>The availability status of the cluster for queries. Possible values are the following:</p>
   *         <ul>
   *             <li>
   *                <p>Available - The cluster is available for queries. </p>
   *             </li>
   *             <li>
   *                <p>Unavailable - The cluster is not available for queries.</p>
   *             </li>
   *             <li>
   *                <p>Maintenance - The cluster is intermittently available for queries due to maintenance activities.</p>
   *             </li>
   *             <li>
   *                <p>Modifying - The cluster is intermittently available for queries due to changes that modify the cluster.</p>
   *             </li>
   *             <li>
   *                <p>Failed - The cluster failed and is not available for queries.</p>
   *             </li>
   *          </ul>
   */
  ClusterAvailabilityStatus?: string;

  /**
   * <p>The status of a modify operation, if any, initiated for the cluster.</p>
   */
  ModifyStatus?: string;

  /**
   * <p>The admin user name for the cluster. This name is used to connect to the database
   *             that is specified in the <b>DBName</b> parameter. </p>
   */
  MasterUsername?: string;

  /**
   * <p>The name of the initial database that was created when the cluster was created.
   *             This same name is returned for the life of the cluster. If an initial database was not
   *             specified, a database named <code>dev</code>dev was created by default. </p>
   */
  DBName?: string;

  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>The date and time that the cluster was created.</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the
   *             snapshot is retained indefinitely. This setting doesn't change the retention period
   *             of existing snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A list of cluster security group that are associated with the cluster. Each
   *             security group is represented by an element that contains
   *                 <code>ClusterSecurityGroup.Name</code> and <code>ClusterSecurityGroup.Status</code>
   *             subelements. </p>
   *         <p>Cluster security groups are used when the cluster is not created in an Amazon
   *             Virtual Private Cloud (VPC). Clusters that are created in a VPC use VPC security groups,
   *             which are listed by the <b>VpcSecurityGroups</b> parameter.
   *         </p>
   */
  ClusterSecurityGroups?: ClusterSecurityGroupMembership[];

  /**
   * <p>A list of Amazon Virtual Private Cloud (Amazon VPC) security groups that are
   *             associated with the cluster. This parameter is returned only if the cluster is in a
   *             VPC.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster. Each
   *             parameter group in the list is returned with its status.</p>
   */
  ClusterParameterGroups?: ClusterParameterGroupStatus[];

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *             valid only when the cluster is in a VPC.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The identifier of the VPC the cluster is in, if the cluster is in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *             maintenance can occur.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that, if present, indicates that changes to the cluster are pending.
   *             Specific pending changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that major version upgrades
   *             will be applied automatically to the cluster during the maintenance window. </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that the cluster can be
   *             accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that data in the cluster is
   *             encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>A value that describes the status of a cluster restore action. This parameter
   *             returns null if the cluster was not created by restoring a snapshot.</p>
   */
  RestoreStatus?: RestoreStatus;

  /**
   * <p></p>
   */
  DataTransferProgress?: DataTransferProgress;

  /**
   * <p>A value that reports whether the Amazon Redshift cluster has finished applying any
   *             hardware security module (HSM) settings changes specified in a modify cluster
   *             command.</p>
   *         <p>Values: active, applying</p>
   */
  HsmStatus?: HsmStatus;

  /**
   * <p>A value that returns the destination region and retention period that are
   *             configured for cross-region snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;

  /**
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: ClusterNode[];

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: ElasticIpStatus;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

  /**
   * <p>The list of tags for the cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key used to
   *             encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *         <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *         <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>A list of Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other Amazon Web Services services.</p>
   */
  IamRoles?: ClusterIamRole[];

  /**
   * <p>Cluster operations that are waiting to be started.</p>
   */
  PendingActions?: string[];

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The number of nodes that you can resize the cluster to with the elastic resize method.
   *         </p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * <p>Describes a group of <code>DeferredMaintenanceWindow</code> objects.</p>
   */
  DeferredMaintenanceWindows?: DeferredMaintenanceWindow[];

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   */
  SnapshotScheduleState?: ScheduleState | string;

  /**
   * <p>The date and time when the next snapshot is expected to be taken for clusters with a valid snapshot schedule and backups enabled. </p>
   */
  ExpectedNextSnapshotScheduleTime?: Date;

  /**
   * <p> The status of next expected snapshot for clusters having a valid snapshot schedule and backups enabled.  Possible values are the following:</p>
   *         <ul>
   *             <li>
   *                <p>OnTrack - The next snapshot is expected to be taken on time. </p>
   *             </li>
   *             <li>
   *                <p>Pending - The next snapshot is pending to be taken. </p>
   *             </li>
   *          </ul>
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * <p>The date and time in UTC when system maintenance can begin.</p>
   */
  NextMaintenanceWindowStartTime?: Date;

  /**
   * <p>Returns the following:</p>
   *         <ul>
   *             <li>
   *                 <p>AllowCancelResize: a boolean value indicating if the resize operation can be
   *                     cancelled.</p>
   *             </li>
   *             <li>
   *                 <p>ResizeType: Returns ClassicResize</p>
   *             </li>
   *          </ul>
   */
  ResizeInfo?: ResizeInfo;

  /**
   * <p>Describes the status of the Availability Zone relocation operation.</p>
   */
  AvailabilityZoneRelocationStatus?: string;

  /**
   * <p>The namespace Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterNamespaceArn?: string;

  /**
   * <p>The total storage capacity of the cluster in megabytes. </p>
   */
  TotalStorageCapacityInMegaBytes?: number;

  /**
   * <p>The AQUA (Advanced Query Accelerator) configuration of the cluster.</p>
   */
  AquaConfiguration?: AquaConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role set as default for the cluster.</p>
   */
  DefaultIamRoleArn?: string;

  /**
   * <p>The status of the reserved-node exchange request. Statuses include in-progress and requested.</p>
   */
  ReservedNodeExchangeStatus?: ReservedNodeExchangeStatus;
}

export namespace Cluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a <code>RevisionTarget</code>.</p>
 */
export interface RevisionTarget {
  /**
   * <p>A unique string that identifies the version to update the cluster to. You can use this
   *             value in <a>ModifyClusterDbRevision</a>.</p>
   */
  DatabaseRevision?: string;

  /**
   * <p>A string that describes the changes and features that will be applied to the cluster
   *             when it is updated to the corresponding <a>ClusterDbRevision</a>.</p>
   */
  Description?: string;

  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date;
}

export namespace RevisionTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevisionTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a <code>ClusterDbRevision</code>.</p>
 */
export interface ClusterDbRevision {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A string representing the current cluster version.</p>
   */
  CurrentDatabaseRevision?: string;

  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date;

  /**
   * <p>A list of <code>RevisionTarget</code> objects, where each object describes the
   *             database revision that a cluster can be updated to.</p>
   */
  RevisionTargets?: RevisionTarget[];
}

export namespace ClusterDbRevision {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterDbRevision): any => ({
    ...obj,
  });
}

/**
 * <p>Cluster is already on the latest database revision.</p>
 */
export class ClusterOnLatestRevisionFault extends __BaseException {
  readonly name: "ClusterOnLatestRevisionFault" = "ClusterOnLatestRevisionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterOnLatestRevisionFault, __BaseException>) {
    super({
      name: "ClusterOnLatestRevisionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterOnLatestRevisionFault.prototype);
  }
}

/**
 * <p>Describes a parameter group.</p>
 */
export interface ClusterParameterGroup {
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The name of the cluster parameter group family that this cluster parameter group is
   *             compatible with.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>The description of the parameter group.</p>
   */
  Description?: string;

  /**
   * <p>The list of tags for the cluster parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace ClusterParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroup): any => ({
    ...obj,
  });
}

export type ParameterApplyType = "dynamic" | "static";

/**
 * <p>Describes a parameter in a cluster parameter group.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter. If <code>ParameterName</code> is <code>wlm_json_configuration</code>,
   *             then the maximum size of <code>ParameterValue</code> is 8000 characters.</p>
   */
  ParameterValue?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The source of the parameter value, such as "engine-default" or "user".</p>
   */
  Source?: string;

  /**
   * <p>The data type of the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Specifies how to apply the WLM configuration parameter. Some properties can be
   *             applied dynamically, while other properties require that any associated clusters be
   *             rebooted for the configuration changes to be applied.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  ApplyType?: ParameterApplyType | string;

  /**
   * <p>If <code>true</code>, the parameter can be modified. Some parameters have security
   *             or operational implications that prevent them from being changed. </p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subnet.</p>
 */
export interface Subnet {
  /**
   * <p>The identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p></p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>The status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export namespace Subnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subnet group.</p>
 */
export interface ClusterSubnetGroup {
  /**
   * <p>The name of the cluster subnet group.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The description of the cluster subnet group.</p>
   */
  Description?: string;

  /**
   * <p>The VPC ID of the cluster subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>The status of the cluster subnet group. Possible values are <code>Complete</code>,
   *                 <code>Incomplete</code> and <code>Invalid</code>. </p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>A list of the VPC <a>Subnet</a> elements. </p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The list of tags for the cluster subnet group.</p>
   */
  Tags?: Tag[];
}

export namespace ClusterSubnetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSubnetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a cluster version, including the parameter group family and description
 *             of the version.</p>
 */
export interface ClusterVersion {
  /**
   * <p>The version number used by the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the cluster parameter group family for the cluster.</p>
   */
  ClusterParameterGroupFamily?: string;

  /**
   * <p>The description of the cluster version.</p>
   */
  Description?: string;
}

export namespace ClusterVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 */
export class CopyToRegionDisabledFault extends __BaseException {
  readonly name: "CopyToRegionDisabledFault" = "CopyToRegionDisabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CopyToRegionDisabledFault, __BaseException>) {
    super({
      name: "CopyToRegionDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CopyToRegionDisabledFault.prototype);
  }
}

/**
 * <p>Describes event subscriptions.</p>
 */
export interface EventSubscription {
  /**
   * <p>The Amazon Web Services account associated with the Amazon Redshift event notification
   *             subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>The name of the Amazon Redshift event notification subscription.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic used by the event
   *             notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The status of the Amazon Redshift event notification subscription.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can be one of the following: active | no-permission |
   *                     topic-not-exist</p>
   *             </li>
   *             <li>
   *                 <p>The status "no-permission" indicates that Amazon Redshift no longer has
   *                     permission to post to the Amazon SNS topic. The status "topic-not-exist"
   *                     indicates that the topic was deleted after the subscription was
   *                     created.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The date and time the Amazon Redshift event notification subscription was
   *             created.</p>
   */
  SubscriptionCreationTime?: Date;

  /**
   * <p>The source type of the events returned by the Amazon Redshift event notification, such as
   *             cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, or scheduled-action. </p>
   */
  SourceType?: string;

  /**
   * <p>A list of the sources that publish events to the Amazon Redshift event notification
   *             subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>The list of Amazon Redshift event categories specified in the event notification
   *             subscription.</p>
   *         <p>Values: Configuration, Management, Monitoring, Security, Pending</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>The event severity specified in the Amazon Redshift event notification
   *             subscription.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>A boolean value indicating whether the subscription is enabled; <code>true</code>
   *             indicates that the subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The list of tags for the event subscription.</p>
   */
  Tags?: Tag[];
}

export namespace EventSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an HSM client certificate. The certificate is stored in a
 *             secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data
 *             files.</p>
 */
export interface HsmClientCertificate {
  /**
   * <p>The identifier of the HSM client certificate.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>The public key that the Amazon Redshift cluster will use to connect to the HSM. You must
   *             register the public key in the HSM.</p>
   */
  HsmClientCertificatePublicKey?: string;

  /**
   * <p>The list of tags for the HSM client certificate.</p>
   */
  Tags?: Tag[];
}

export namespace HsmClientCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmClientCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an HSM configuration, which is an object that describes
 *             to Amazon Redshift clusters the information they require to connect to an HSM where they can
 *             store database encryption keys.</p>
 */
export interface HsmConfiguration {
  /**
   * <p>The name of the Amazon Redshift HSM configuration.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>A text description of the HSM configuration.</p>
   */
  Description?: string;

  /**
   * <p>The IP address that the Amazon Redshift cluster must use to access the HSM.</p>
   */
  HsmIpAddress?: string;

  /**
   * <p>The name of the partition in the HSM where the Amazon Redshift clusters will store their
   *             database encryption keys.</p>
   */
  HsmPartitionName?: string;

  /**
   * <p>The list of tags for the HSM configuration.</p>
   */
  Tags?: Tag[];
}

export namespace HsmConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. </p>
 */
export interface ScheduledActionType {
  /**
   * <p>An action that runs a <code>ResizeCluster</code> API operation. </p>
   */
  ResizeCluster?: ResizeClusterMessage;

  /**
   * <p>An action that runs a <code>PauseCluster</code> API operation. </p>
   */
  PauseCluster?: PauseClusterMessage;

  /**
   * <p>An action that runs a <code>ResumeCluster</code> API operation. </p>
   */
  ResumeCluster?: ResumeClusterMessage;
}

export namespace ScheduledActionType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledActionType): any => ({
    ...obj,
  });
}

export enum ScheduledActionState {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
}

/**
 * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied
 *             snapshots with the specified encrypted symmetric key from Amazon Web Services KMS in the destination
 *             region.</p>
 *         <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface SnapshotCopyGrant {
  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>The unique identifier of the encrypted symmetric key in Amazon Web Services KMS to which
   *             Amazon Redshift is granted permission.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace SnapshotCopyGrant {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotCopyGrant): any => ({
    ...obj,
  });
}

export enum UsageLimitBreachAction {
  DISABLE = "disable",
  EMIT_METRIC = "emit-metric",
  LOG = "log",
}

export enum UsageLimitFeatureType {
  CONCURRENCY_SCALING = "concurrency-scaling",
  CROSS_REGION_DATASHARING = "cross-region-datasharing",
  SPECTRUM = "spectrum",
}

export enum UsageLimitLimitType {
  DATA_SCANNED = "data-scanned",
  TIME = "time",
}

export enum UsageLimitPeriod {
  DAILY = "daily",
  MONTHLY = "monthly",
  WEEKLY = "weekly",
}

export enum DataShareStatusForConsumer {
  ACTIVE = "ACTIVE",
  AVAILABLE = "AVAILABLE",
}

export enum DataShareStatusForProducer {
  ACTIVE = "ACTIVE",
  AUTHORIZED = "AUTHORIZED",
  DEAUTHORIZED = "DEAUTHORIZED",
  PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION",
  REJECTED = "REJECTED",
}

/**
 * <p>Describes the default cluster parameters for a parameter group family.</p>
 */
export interface DefaultClusterParameters {
  /**
   * <p>The name of the cluster parameter group family to which the engine default
   *             parameters apply.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>The list of cluster default parameters.</p>
   */
  Parameters?: Parameter[];
}

export namespace DefaultClusterParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultClusterParameters): any => ({
    ...obj,
  });
}

/**
 * <p>The subscription request is invalid because it is a duplicate request. This
 *             subscription request is already in progress.</p>
 */
export class InvalidSubscriptionStateFault extends __BaseException {
  readonly name: "InvalidSubscriptionStateFault" = "InvalidSubscriptionStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubscriptionStateFault, __BaseException>) {
    super({
      name: "InvalidSubscriptionStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubscriptionStateFault.prototype);
  }
}

/**
 * <p>An Amazon Redshift event notification subscription with the specified name does not
 *             exist.</p>
 */
export class SubscriptionNotFoundFault extends __BaseException {
  readonly name: "SubscriptionNotFoundFault" = "SubscriptionNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionNotFoundFault.prototype);
  }
}

/**
 * <p>The specified HSM client certificate is not in the <code>available</code> state, or
 *             it is still in use by one or more Amazon Redshift clusters.</p>
 */
export class InvalidHsmClientCertificateStateFault extends __BaseException {
  readonly name: "InvalidHsmClientCertificateStateFault" = "InvalidHsmClientCertificateStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHsmClientCertificateStateFault, __BaseException>) {
    super({
      name: "InvalidHsmClientCertificateStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHsmClientCertificateStateFault.prototype);
  }
}

/**
 * <p>The specified HSM configuration is not in the <code>available</code> state, or it
 *             is still in use by one or more Amazon Redshift clusters.</p>
 */
export class InvalidHsmConfigurationStateFault extends __BaseException {
  readonly name: "InvalidHsmConfigurationStateFault" = "InvalidHsmConfigurationStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHsmConfigurationStateFault, __BaseException>) {
    super({
      name: "InvalidHsmConfigurationStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHsmConfigurationStateFault.prototype);
  }
}

/**
 * <p>The scheduled action cannot be found. </p>
 */
export class ScheduledActionNotFoundFault extends __BaseException {
  readonly name: "ScheduledActionNotFoundFault" = "ScheduledActionNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionNotFoundFault, __BaseException>) {
    super({
      name: "ScheduledActionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionNotFoundFault.prototype);
  }
}

/**
 * <p>The snapshot copy grant can't be deleted because it is used by one or more
 *             clusters.</p>
 */
export class InvalidSnapshotCopyGrantStateFault extends __BaseException {
  readonly name: "InvalidSnapshotCopyGrantStateFault" = "InvalidSnapshotCopyGrantStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnapshotCopyGrantStateFault, __BaseException>) {
    super({
      name: "InvalidSnapshotCopyGrantStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnapshotCopyGrantStateFault.prototype);
  }
}

/**
 * <p>The specified snapshot copy grant can't be found. Make sure that the name is typed
 *             correctly and that the grant exists in the destination region.</p>
 */
export class SnapshotCopyGrantNotFoundFault extends __BaseException {
  readonly name: "SnapshotCopyGrantNotFoundFault" = "SnapshotCopyGrantNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyGrantNotFoundFault, __BaseException>) {
    super({
      name: "SnapshotCopyGrantNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyGrantNotFoundFault.prototype);
  }
}

/**
 * <p>The cluster snapshot schedule state is not valid.</p>
 */
export class InvalidClusterSnapshotScheduleStateFault extends __BaseException {
  readonly name: "InvalidClusterSnapshotScheduleStateFault" = "InvalidClusterSnapshotScheduleStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSnapshotScheduleStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSnapshotScheduleStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSnapshotScheduleStateFault.prototype);
  }
}

/**
 * <p>The usage limit identifier can't be found.</p>
 */
export class UsageLimitNotFoundFault extends __BaseException {
  readonly name: "UsageLimitNotFoundFault" = "UsageLimitNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UsageLimitNotFoundFault, __BaseException>) {
    super({
      name: "UsageLimitNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UsageLimitNotFoundFault.prototype);
  }
}

export enum SnapshotAttributeToSortBy {
  CREATE_TIME = "CREATE_TIME",
  SOURCE_TYPE = "SOURCE_TYPE",
  TOTAL_SIZE = "TOTAL_SIZE",
}

export enum SortByOrder {
  ASCENDING = "ASC",
  DESCENDING = "DESC",
}

/**
 * <p>Describes a sorting entity</p>
 */
export interface SnapshotSortingEntity {
  /**
   * <p>The category for sorting the snapshots.</p>
   */
  Attribute: SnapshotAttributeToSortBy | string | undefined;

  /**
   * <p>The order for listing the attributes.</p>
   */
  SortOrder?: SortByOrder | string;
}

export namespace SnapshotSortingEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotSortingEntity): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the operations that are allowed on a maintenance track.</p>
 */
export interface SupportedOperation {
  /**
   * <p>A list of the supported operations.</p>
   */
  OperationName?: string;
}

export namespace SupportedOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SupportedOperation): any => ({
    ...obj,
  });
}

/**
 * <p>A maintenance track that you can switch the current track to.</p>
 */
export interface UpdateTarget {
  /**
   * <p>The name of the new maintenance track.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The cluster version for the new maintenance track.</p>
   */
  DatabaseVersion?: string;

  /**
   * <p>A list of operations supported by the maintenance track.</p>
   */
  SupportedOperations?: SupportedOperation[];
}

export namespace UpdateTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a maintenance track that determines which Amazon Redshift version to apply
 *             during a maintenance window. If the value for <code>MaintenanceTrack</code> is
 *                 <code>current</code>, the cluster is updated to the most recently certified
 *             maintenance release. If the value is <code>trailing</code>, the cluster is updated to
 *             the previously certified maintenance release. </p>
 */
export interface MaintenanceTrack {
  /**
   * <p>The name of the maintenance track. Possible values are <code>current</code> and
   *                 <code>trailing</code>.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The version number for the cluster release.</p>
   */
  DatabaseVersion?: string;

  /**
   * <p>An array of <a>UpdateTarget</a> objects to update with the maintenance
   *             track. </p>
   */
  UpdateTargets?: UpdateTarget[];
}

export namespace MaintenanceTrack {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceTrack): any => ({
    ...obj,
  });
}

/**
 * <p>Describes event information.</p>
 */
export interface EventInfoMap {
  /**
   * <p>The identifier of an Amazon Redshift event.</p>
   */
  EventId?: string;

  /**
   * <p>The category of an Amazon Redshift event.</p>
   */
  EventCategories?: string[];

  /**
   * <p>The description of an Amazon Redshift event.</p>
   */
  EventDescription?: string;

  /**
   * <p>The severity of the event.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;
}

export namespace EventInfoMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventInfoMap): any => ({
    ...obj,
  });
}

/**
 * <p>Describes event categories.</p>
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type, such as cluster or cluster-snapshot, that the returned categories
   *             belong to.</p>
   */
  SourceType?: string;

  /**
   * <p>The events in the event category.</p>
   */
  Events?: EventInfoMap[];
}

export namespace EventCategoriesMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventCategoriesMap): any => ({
    ...obj,
  });
}

export type SourceType =
  | "cluster"
  | "cluster-parameter-group"
  | "cluster-security-group"
  | "cluster-snapshot"
  | "scheduled-action";

/**
 * <p>Describes an event.</p>
 */
export interface Event {
  /**
   * <p>The identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The source type for this event.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The text of this event.</p>
   */
  Message?: string;

  /**
   * <p>A list of the event categories.</p>
   *         <p>Values: Configuration, Management, Monitoring, Security, Pending</p>
   */
  EventCategories?: string[];

  /**
   * <p>The severity of the event.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>The date and time of the event.</p>
   */
  Date?: Date;

  /**
   * <p>The identifier of the event.</p>
   */
  EventId?: string;
}

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

export enum LogDestinationType {
  CLOUDWATCH = "cloudwatch",
  S3 = "s3",
}

export enum NodeConfigurationOptionsFilterName {
  ESTIMATED_DISK_UTILIZATION_PERCENT = "EstimatedDiskUtilizationPercent",
  MODE = "Mode",
  NODE_TYPE = "NodeType",
  NUM_NODES = "NumberOfNodes",
}

export enum OperatorType {
  BETWEEN = "between",
  EQ = "eq",
  GE = "ge",
  GT = "gt",
  IN = "in",
  LE = "le",
  LT = "lt",
}

/**
 * <p>A set of elements to filter the returned node configurations.</p>
 */
export interface NodeConfigurationOptionsFilter {
  /**
   * <p>The name of the element to filter.</p>
   */
  Name?: NodeConfigurationOptionsFilterName | string;

  /**
   * <p>The filter operator.
   *             If filter Name is NodeType only the 'in' operator is supported.
   *             Provide one value to evaluate for 'eq', 'lt', 'le', 'gt', and 'ge'.
   *             Provide two values to evaluate for 'between'.
   *             Provide a list of values for 'in'.</p>
   */
  Operator?: OperatorType | string;

  /**
   * <p>List of values. Compare Name using Operator to Values.
   *             If filter Name is NumberOfNodes, then values can range from 0 to 200.
   *             If filter Name is EstimatedDiskUtilizationPercent, then values can range from 0 to 100.
   *             For example, filter NumberOfNodes (name) GT (operator) 3 (values).</p>
   */
  Values?: string[];
}

export namespace NodeConfigurationOptionsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeConfigurationOptionsFilter): any => ({
    ...obj,
  });
}

export enum Mode {
  HIGH_PERFORMANCE = "high-performance",
  STANDARD = "standard",
}

/**
 * <p>A list of node configurations.</p>
 */
export interface NodeConfigurationOption {
  /**
   * <p>The node type, such as, "ds2.8xlarge".</p>
   */
  NodeType?: string;

  /**
   * <p>The number of nodes.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The estimated disk utilizaton percentage.</p>
   */
  EstimatedDiskUtilizationPercent?: number;

  /**
   * <p>The category of the node configuration recommendation.</p>
   */
  Mode?: Mode | string;
}

export namespace NodeConfigurationOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeConfigurationOption): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an orderable cluster option.</p>
 */
export interface OrderableClusterOption {
  /**
   * <p>The version of the orderable cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The cluster type, for example <code>multi-node</code>. </p>
   */
  ClusterType?: string;

  /**
   * <p>The node type for the orderable cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>A list of availability zones for the orderable cluster.</p>
   */
  AvailabilityZones?: AvailabilityZone[];
}

export namespace OrderableClusterOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderableClusterOption): any => ({
    ...obj,
  });
}

export enum PartnerIntegrationStatus {
  Active = "Active",
  ConnectionFailure = "ConnectionFailure",
  Inactive = "Inactive",
  RuntimeFailure = "RuntimeFailure",
}

/**
 * <p>Describes a partner integration.</p>
 */
export interface PartnerIntegrationInfo {
  /**
   * <p>The name of the database that receives data from a partner.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the partner.</p>
   */
  PartnerName?: string;

  /**
   * <p>The partner integration status.</p>
   */
  Status?: PartnerIntegrationStatus | string;

  /**
   * <p>The status message provided by the partner.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date (UTC) that the partner integration was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The date (UTC) that the partner integration status was last updated by the partner.</p>
   */
  UpdatedAt?: Date;
}

export namespace PartnerIntegrationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartnerIntegrationInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The reserved-node exchange status wasn't found.</p>
 */
export class ReservedNodeExchangeNotFoundFault extends __BaseException {
  readonly name: "ReservedNodeExchangeNotFoundFault" = "ReservedNodeExchangeNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeExchangeNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodeExchangeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeExchangeNotFoundFault.prototype);
  }
}

/**
 * <p>Describes a reserved node offering.</p>
 */
export interface ReservedNodeOffering {
  /**
   * <p>The offering identifier.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p>The node type offered by the reserved node offering.</p>
   */
  NodeType?: string;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the node.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved node
   *             offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The rate you are charged for each hour the cluster that is using the offering is
   *             running.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the compute nodes offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node
   *             offering.</p>
   */
  OfferingType?: string;

  /**
   * <p>The charge to your account regardless of whether you are creating any clusters
   *             using the node offering. Recurring charges are only in effect for heavy-utilization
   *             reserved nodes.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p></p>
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | string;
}

export namespace ReservedNodeOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodeOffering): any => ({
    ...obj,
  });
}

export enum ScheduledActionFilterName {
  CLUSTER_IDENTIFIER = "cluster-identifier",
  IAM_ROLE = "iam-role",
}

/**
 * <p>A set of elements to filter the returned scheduled actions. </p>
 */
export interface ScheduledActionFilter {
  /**
   * <p>The type of element to filter. </p>
   */
  Name: ScheduledActionFilterName | string | undefined;

  /**
   * <p>List of values. Compare if the value (of type defined by <code>Name</code>) equals an item in the list of scheduled actions. </p>
   */
  Values: string[] | undefined;
}

export namespace ScheduledActionFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledActionFilter): any => ({
    ...obj,
  });
}

export enum ScheduledActionTypeValues {
  PAUSE_CLUSTER = "PauseCluster",
  RESIZE_CLUSTER = "ResizeCluster",
  RESUME_CLUSTER = "ResumeCluster",
}

/**
 * <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
 */
export class TableRestoreNotFoundFault extends __BaseException {
  readonly name: "TableRestoreNotFoundFault" = "TableRestoreNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableRestoreNotFoundFault, __BaseException>) {
    super({
      name: "TableRestoreNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableRestoreNotFoundFault.prototype);
  }
}

export type TableRestoreStatusType = "CANCELED" | "FAILED" | "IN_PROGRESS" | "PENDING" | "SUCCEEDED";

/**
 * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
 *             operation.</p>
 */
export interface TableRestoreStatus {
  /**
   * <p>The unique identifier for the table restore request.</p>
   */
  TableRestoreRequestId?: string;

  /**
   * <p>A value that describes the current state of the table restore request.</p>
   *         <p>Valid Values: <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>
   *         </p>
   */
  Status?: TableRestoreStatusType | string;

  /**
   * <p>A description of the status of the table restore request. Status values include
   *                 <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   */
  Message?: string;

  /**
   * <p>The time that the table restore request was made, in Universal Coordinated Time
   *             (UTC).</p>
   */
  RequestTime?: Date;

  /**
   * <p>The amount of data restored to the new table so far, in megabytes (MB).</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The total amount of data to restore to the new table, in megabytes (MB).</p>
   */
  TotalDataInMegaBytes?: number;

  /**
   * <p>The identifier of the Amazon Redshift cluster that the table is being restored
   *             to.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The identifier of the snapshot that the table is being restored from.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The name of the source database that contains the table being restored.</p>
   */
  SourceDatabaseName?: string;

  /**
   * <p>The name of the source schema that contains the table being restored.</p>
   */
  SourceSchemaName?: string;

  /**
   * <p>The name of the source table being restored.</p>
   */
  SourceTableName?: string;

  /**
   * <p>The name of the database to restore the table to.</p>
   */
  TargetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   */
  TargetSchemaName?: string;

  /**
   * <p>The name of the table to create as a result of the table restore request.</p>
   */
  NewTableName?: string;
}

export namespace TableRestoreStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableRestoreStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A tag and its associated resource.</p>
 */
export interface TaggedResource {
  /**
   * <p>The tag for the resource.</p>
   */
  Tag?: Tag;

  /**
   * <p>The Amazon Resource Name (ARN) with which the tag is associated, for example:
   *                 <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource with which the tag is associated. Valid resource types are: </p>
   *         <ul>
   *             <li>
   *                 <p>Cluster</p>
   *             </li>
   *             <li>
   *                 <p>CIDR/IP</p>
   *             </li>
   *             <li>
   *                 <p>EC2 security group</p>
   *             </li>
   *             <li>
   *                 <p>Snapshot</p>
   *             </li>
   *             <li>
   *                 <p>Cluster security group</p>
   *             </li>
   *             <li>
   *                 <p>Subnet group</p>
   *             </li>
   *             <li>
   *                 <p>HSM connection</p>
   *             </li>
   *             <li>
   *                 <p>HSM certificate</p>
   *             </li>
   *             <li>
   *                 <p>Parameter group</p>
   *             </li>
   *          </ul>
   *         <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Constructing an Amazon Redshift Amazon Resource Name (ARN)</a> in the
   *             Amazon Redshift Cluster Management Guide. </p>
   */
  ResourceType?: string;
}

export namespace TaggedResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaggedResource): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster already has cross-region snapshot copy disabled.</p>
 */
export class SnapshotCopyAlreadyDisabledFault extends __BaseException {
  readonly name: "SnapshotCopyAlreadyDisabledFault" = "SnapshotCopyAlreadyDisabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyAlreadyDisabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyAlreadyDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyAlreadyDisabledFault.prototype);
  }
}

/**
 * <p>The cluster does not have read bucket or put object permissions on the S3 bucket
 *             specified when enabling logging.</p>
 */
export class InsufficientS3BucketPolicyFault extends __BaseException {
  readonly name: "InsufficientS3BucketPolicyFault" = "InsufficientS3BucketPolicyFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientS3BucketPolicyFault, __BaseException>) {
    super({
      name: "InsufficientS3BucketPolicyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientS3BucketPolicyFault.prototype);
  }
}

/**
 * <p>The S3 bucket name is invalid. For more information about naming rules, go to
 *                 <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
 *                 Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3)
 *             Developer Guide.</p>
 */
export class InvalidS3BucketNameFault extends __BaseException {
  readonly name: "InvalidS3BucketNameFault" = "InvalidS3BucketNameFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3BucketNameFault, __BaseException>) {
    super({
      name: "InvalidS3BucketNameFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3BucketNameFault.prototype);
  }
}

/**
 * <p>The string specified for the logging S3 key prefix does not comply with the
 *             documented constraints.</p>
 */
export class InvalidS3KeyPrefixFault extends __BaseException {
  readonly name: "InvalidS3KeyPrefixFault" = "InvalidS3KeyPrefixFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KeyPrefixFault, __BaseException>) {
    super({
      name: "InvalidS3KeyPrefixFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KeyPrefixFault.prototype);
  }
}

/**
 * <p>The specified options are incompatible.</p>
 */
export class IncompatibleOrderableOptions extends __BaseException {
  readonly name: "IncompatibleOrderableOptions" = "IncompatibleOrderableOptions";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleOrderableOptions, __BaseException>) {
    super({
      name: "IncompatibleOrderableOptions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleOrderableOptions.prototype);
  }
}

/**
 * <p>The cluster already has cross-region snapshot copy enabled.</p>
 */
export class SnapshotCopyAlreadyEnabledFault extends __BaseException {
  readonly name: "SnapshotCopyAlreadyEnabledFault" = "SnapshotCopyAlreadyEnabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyAlreadyEnabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyAlreadyEnabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyAlreadyEnabledFault.prototype);
  }
}

/**
 * <p>The specified region is incorrect or does not exist.</p>
 */
export class UnknownSnapshotCopyRegionFault extends __BaseException {
  readonly name: "UnknownSnapshotCopyRegionFault" = "UnknownSnapshotCopyRegionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownSnapshotCopyRegionFault, __BaseException>) {
    super({
      name: "UnknownSnapshotCopyRegionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownSnapshotCopyRegionFault.prototype);
  }
}

/**
 * <p>The authorization for this endpoint can't be found.</p>
 */
export class EndpointAuthorizationNotFoundFault extends __BaseException {
  readonly name: "EndpointAuthorizationNotFoundFault" = "EndpointAuthorizationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAuthorizationNotFoundFault, __BaseException>) {
    super({
      name: "EndpointAuthorizationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAuthorizationNotFoundFault.prototype);
  }
}

export enum ReservedNodeExchangeActionType {
  RESIZE_CLUSTER = "resize-cluster",
  RESTORE_CLUSTER = "restore-cluster",
}

/**
 * <p>Details for a reserved-node exchange. Examples include the node type for a
 *             reserved node, the price for a node, the node's state, and other details.</p>
 */
export interface ReservedNodeConfigurationOption {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   */
  SourceReservedNode?: ReservedNode;

  /**
   * <p>The target reserved-node count.</p>
   */
  TargetReservedNodeCount?: number;

  /**
   * <p>Describes a reserved node offering.</p>
   */
  TargetReservedNodeOffering?: ReservedNodeOffering;
}

export namespace ReservedNodeConfigurationOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodeConfigurationOption): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the allowed number of table restore requests. Wait for your
 *             current table restore requests to complete before making a new request.</p>
 */
export class InProgressTableRestoreQuotaExceededFault extends __BaseException {
  readonly name: "InProgressTableRestoreQuotaExceededFault" = "InProgressTableRestoreQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InProgressTableRestoreQuotaExceededFault, __BaseException>) {
    super({
      name: "InProgressTableRestoreQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InProgressTableRestoreQuotaExceededFault.prototype);
  }
}

/**
 * <p>The restore is invalid.</p>
 */
export class InvalidRestoreFault extends __BaseException {
  readonly name: "InvalidRestoreFault" = "InvalidRestoreFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRestoreFault, __BaseException>) {
    super({
      name: "InvalidRestoreFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRestoreFault.prototype);
  }
}

/**
 * <p>The value specified for the <code>sourceDatabaseName</code>,
 *                 <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a
 *             combination of these, doesn't exist in the snapshot.</p>
 */
export class InvalidTableRestoreArgumentFault extends __BaseException {
  readonly name: "InvalidTableRestoreArgumentFault" = "InvalidTableRestoreArgumentFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTableRestoreArgumentFault, __BaseException>) {
    super({
      name: "InvalidTableRestoreArgumentFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTableRestoreArgumentFault.prototype);
  }
}

/**
 * <p>The number of tables in the cluster exceeds the limit for the requested new cluster
 *             node type. </p>
 */
export class TableLimitExceededFault extends __BaseException {
  readonly name: "TableLimitExceededFault" = "TableLimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableLimitExceededFault, __BaseException>) {
    super({
      name: "TableLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableLimitExceededFault.prototype);
  }
}

/**
 * <p>A request option was specified that is not supported.</p>
 */
export class UnsupportedOptionFault extends __BaseException {
  readonly name: "UnsupportedOptionFault" = "UnsupportedOptionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOptionFault, __BaseException>) {
    super({
      name: "UnsupportedOptionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOptionFault.prototype);
  }
}

/**
 * <p>A specified subnet is already in use by another cluster.</p>
 */
export class SubnetAlreadyInUse extends __BaseException {
  readonly name: "SubnetAlreadyInUse" = "SubnetAlreadyInUse";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetAlreadyInUse, __BaseException>) {
    super({
      name: "SubnetAlreadyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetAlreadyInUse.prototype);
  }
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 */
export class SnapshotCopyDisabledFault extends __BaseException {
  readonly name: "SnapshotCopyDisabledFault" = "SnapshotCopyDisabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyDisabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyDisabledFault.prototype);
  }
}

/**
 * <p>The specified snapshot schedule is already being updated.</p>
 */
export class SnapshotScheduleUpdateInProgressFault extends __BaseException {
  readonly name: "SnapshotScheduleUpdateInProgressFault" = "SnapshotScheduleUpdateInProgressFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleUpdateInProgressFault, __BaseException>) {
    super({
      name: "SnapshotScheduleUpdateInProgressFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleUpdateInProgressFault.prototype);
  }
}

/**
 * <p>Request would exceed the user's compute node quota.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export class ReservedNodeQuotaExceededFault extends __BaseException {
  readonly name: "ReservedNodeQuotaExceededFault" = "ReservedNodeQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeQuotaExceededFault, __BaseException>) {
    super({
      name: "ReservedNodeQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeQuotaExceededFault.prototype);
  }
}
