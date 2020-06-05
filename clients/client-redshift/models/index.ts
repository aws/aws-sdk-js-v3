import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptReservedNodeExchangeInputMessage {
  __type?: "AcceptReservedNodeExchangeInputMessage";
  /**
   * <p>A string representing the node identifier of the DC1 Reserved Node to be
   *             exchanged.</p>
   */
  ReservedNodeId: string | undefined;

  /**
   * <p>The unique identifier of the DC2 Reserved Node offering to be used for the exchange.
   *             You can obtain the value for the parameter by calling <a>GetReservedNodeExchangeOfferings</a>
   *          </p>
   */
  TargetReservedNodeOfferingId: string | undefined;
}

export namespace AcceptReservedNodeExchangeInputMessage {
  export const filterSensitiveLog = (
    obj: AcceptReservedNodeExchangeInputMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptReservedNodeExchangeInputMessage =>
    __isa(o, "AcceptReservedNodeExchangeInputMessage");
}

export interface AcceptReservedNodeExchangeOutputMessage {
  __type?: "AcceptReservedNodeExchangeOutputMessage";
  /**
   * <p></p>
   */
  ExchangedReservedNode?: ReservedNode;
}

export namespace AcceptReservedNodeExchangeOutputMessage {
  export const filterSensitiveLog = (
    obj: AcceptReservedNodeExchangeOutputMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptReservedNodeExchangeOutputMessage =>
    __isa(o, "AcceptReservedNodeExchangeOutputMessage");
}

/**
 * <p>The owner of the specified snapshot has not authorized your account to access the
 *             snapshot.</p>
 */
export interface AccessToSnapshotDeniedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessToSnapshotDeniedFault";
  $fault: "client";
  message?: string;
}

export namespace AccessToSnapshotDeniedFault {
  export const filterSensitiveLog = (
    obj: AccessToSnapshotDeniedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessToSnapshotDeniedFault =>
    __isa(o, "AccessToSnapshotDeniedFault");
}

/**
 * <p>A name value pair that describes an aspect of an account. </p>
 */
export interface AccountAttribute {
  __type?: "AccountAttribute";
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
  export const filterSensitiveLog = (obj: AccountAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountAttribute =>
    __isa(o, "AccountAttribute");
}

export interface AccountAttributeList {
  __type?: "AccountAttributeList";
  /**
   * <p>A list of attributes assigned to an account.</p>
   */
  AccountAttributes?: AccountAttribute[];
}

export namespace AccountAttributeList {
  export const filterSensitiveLog = (obj: AccountAttributeList): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountAttributeList =>
    __isa(o, "AccountAttributeList");
}

/**
 * <p>Describes an AWS customer account authorized to restore a snapshot.</p>
 */
export interface AccountWithRestoreAccess {
  __type?: "AccountWithRestoreAccess";
  /**
   * <p>The identifier of an AWS support account authorized to restore a snapshot. For AWS
   *             support, the identifier is <code>amazon-redshift-support</code>. </p>
   */
  AccountAlias?: string;

  /**
   * <p>The identifier of an AWS customer account authorized to restore a
   *             snapshot.</p>
   */
  AccountId?: string;
}

export namespace AccountWithRestoreAccess {
  export const filterSensitiveLog = (obj: AccountWithRestoreAccess): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountWithRestoreAccess =>
    __isa(o, "AccountWithRestoreAccess");
}

export enum ActionType {
  RECOMMEND_NODE_CONFIG = "recommend-node-config",
  RESTORE_CLUSTER = "restore-cluster"
}

/**
 * <p>Describes an attribute value.</p>
 */
export interface AttributeValueTarget {
  __type?: "AttributeValueTarget";
  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

export namespace AttributeValueTarget {
  export const filterSensitiveLog = (obj: AttributeValueTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttributeValueTarget =>
    __isa(o, "AttributeValueTarget");
}

/**
 * <p>The specified CIDR block or EC2 security group is already authorized for the
 *             specified cluster security group.</p>
 */
export interface AuthorizationAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: AuthorizationAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationAlreadyExistsFault =>
    __isa(o, "AuthorizationAlreadyExistsFault");
}

/**
 * <p>The specified CIDR IP range or EC2 security group is not authorized for the
 *             specified cluster security group.</p>
 */
export interface AuthorizationNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationNotFoundFault {
  export const filterSensitiveLog = (obj: AuthorizationNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationNotFoundFault =>
    __isa(o, "AuthorizationNotFoundFault");
}

/**
 * <p>The authorization quota for the cluster security group has been reached.</p>
 */
export interface AuthorizationQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: AuthorizationQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationQuotaExceededFault =>
    __isa(o, "AuthorizationQuotaExceededFault");
}

/**
 * <p></p>
 */
export interface AuthorizeClusterSecurityGroupIngressMessage {
  __type?: "AuthorizeClusterSecurityGroupIngressMessage";
  /**
   * <p>The IP range to be added the Amazon Redshift security group.</p>
   */
  CIDRIP?: string;

  /**
   * <p>The name of the security group to which the ingress rule is added.</p>
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>The EC2 security group to be added the Amazon Redshift security group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The AWS account number of the owner of the security group specified by the
   *                 <i>EC2SecurityGroupName</i> parameter. The AWS Access Key ID is not an
   *             acceptable value. </p>
   *         <p>Example: <code>111122223333</code>
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace AuthorizeClusterSecurityGroupIngressMessage {
  export const filterSensitiveLog = (
    obj: AuthorizeClusterSecurityGroupIngressMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AuthorizeClusterSecurityGroupIngressMessage =>
    __isa(o, "AuthorizeClusterSecurityGroupIngressMessage");
}

export interface AuthorizeClusterSecurityGroupIngressResult {
  __type?: "AuthorizeClusterSecurityGroupIngressResult";
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: ClusterSecurityGroup;
}

export namespace AuthorizeClusterSecurityGroupIngressResult {
  export const filterSensitiveLog = (
    obj: AuthorizeClusterSecurityGroupIngressResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AuthorizeClusterSecurityGroupIngressResult =>
    __isa(o, "AuthorizeClusterSecurityGroupIngressResult");
}

/**
 * <p></p>
 */
export interface AuthorizeSnapshotAccessMessage {
  __type?: "AuthorizeSnapshotAccessMessage";
  /**
   * <p>The identifier of the AWS customer account authorized to restore the specified
   *             snapshot.</p>
   *         <p>To share a snapshot with AWS support, specify amazon-redshift-support.</p>
   */
  AccountWithRestoreAccess: string | undefined;

  /**
   * <p>The identifier of the cluster the snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The identifier of the snapshot the account is authorized to restore.</p>
   */
  SnapshotIdentifier: string | undefined;
}

export namespace AuthorizeSnapshotAccessMessage {
  export const filterSensitiveLog = (
    obj: AuthorizeSnapshotAccessMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizeSnapshotAccessMessage =>
    __isa(o, "AuthorizeSnapshotAccessMessage");
}

export interface AuthorizeSnapshotAccessResult {
  __type?: "AuthorizeSnapshotAccessResult";
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace AuthorizeSnapshotAccessResult {
  export const filterSensitiveLog = (
    obj: AuthorizeSnapshotAccessResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizeSnapshotAccessResult =>
    __isa(o, "AuthorizeSnapshotAccessResult");
}

/**
 * <p>Describes an availability zone.</p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
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
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZone =>
    __isa(o, "AvailabilityZone");
}

export interface BatchDeleteClusterSnapshotsRequest {
  __type?: "BatchDeleteClusterSnapshotsRequest";
  /**
   * <p>A list of identifiers for the snapshots that you want to delete.</p>
   */
  Identifiers: DeleteClusterSnapshotMessage[] | undefined;
}

export namespace BatchDeleteClusterSnapshotsRequest {
  export const filterSensitiveLog = (
    obj: BatchDeleteClusterSnapshotsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteClusterSnapshotsRequest =>
    __isa(o, "BatchDeleteClusterSnapshotsRequest");
}

export interface BatchDeleteClusterSnapshotsResult {
  __type?: "BatchDeleteClusterSnapshotsResult";
  /**
   * <p>A list of any errors returned.</p>
   */
  Errors?: SnapshotErrorMessage[];

  /**
   * <p>A list of the snapshot identifiers that were deleted. </p>
   */
  Resources?: string[];
}

export namespace BatchDeleteClusterSnapshotsResult {
  export const filterSensitiveLog = (
    obj: BatchDeleteClusterSnapshotsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteClusterSnapshotsResult =>
    __isa(o, "BatchDeleteClusterSnapshotsResult");
}

/**
 * <p>The maximum number for a batch delete of snapshots has been reached. The limit is
 *             100. </p>
 */
export interface BatchDeleteRequestSizeExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "BatchDeleteRequestSizeExceededFault";
  $fault: "client";
  message?: string;
}

export namespace BatchDeleteRequestSizeExceededFault {
  export const filterSensitiveLog = (
    obj: BatchDeleteRequestSizeExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteRequestSizeExceededFault =>
    __isa(o, "BatchDeleteRequestSizeExceededFault");
}

/**
 * <p>The maximum number for snapshot identifiers has been reached. The limit is 100.
 *         </p>
 */
export interface BatchModifyClusterSnapshotsLimitExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "BatchModifyClusterSnapshotsLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace BatchModifyClusterSnapshotsLimitExceededFault {
  export const filterSensitiveLog = (
    obj: BatchModifyClusterSnapshotsLimitExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is BatchModifyClusterSnapshotsLimitExceededFault =>
    __isa(o, "BatchModifyClusterSnapshotsLimitExceededFault");
}

export interface BatchModifyClusterSnapshotsMessage {
  __type?: "BatchModifyClusterSnapshotsMessage";
  /**
   * <p>A boolean value indicating whether to override an exception if the retention period
   *             has passed. </p>
   */
  Force?: boolean;

  /**
   * <p>The number of days that a manual snapshot is retained. If you specify the value -1,
   *             the manual snapshot is retained indefinitely.</p>
   *         <p>The number must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>If you decrease the manual snapshot retention period from its current value, existing
   *             manual snapshots that fall outside of the new retention period will return an error. If
   *             you want to suppress the errors and delete the snapshots, use the force option. </p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A list of snapshot identifiers you want to modify.</p>
   */
  SnapshotIdentifierList: string[] | undefined;
}

export namespace BatchModifyClusterSnapshotsMessage {
  export const filterSensitiveLog = (
    obj: BatchModifyClusterSnapshotsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchModifyClusterSnapshotsMessage =>
    __isa(o, "BatchModifyClusterSnapshotsMessage");
}

export interface BatchModifyClusterSnapshotsOutputMessage {
  __type?: "BatchModifyClusterSnapshotsOutputMessage";
  /**
   * <p>A list of any errors returned.</p>
   */
  Errors?: SnapshotErrorMessage[];

  /**
   * <p>A list of the snapshots that were modified.</p>
   */
  Resources?: string[];
}

export namespace BatchModifyClusterSnapshotsOutputMessage {
  export const filterSensitiveLog = (
    obj: BatchModifyClusterSnapshotsOutputMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchModifyClusterSnapshotsOutputMessage =>
    __isa(o, "BatchModifyClusterSnapshotsOutputMessage");
}

/**
 * <p>Could not find the specified S3 bucket.</p>
 */
export interface BucketNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "BucketNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace BucketNotFoundFault {
  export const filterSensitiveLog = (obj: BucketNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is BucketNotFoundFault =>
    __isa(o, "BucketNotFoundFault");
}

export interface CancelResizeMessage {
  __type?: "CancelResizeMessage";
  /**
   * <p>The unique identifier for the cluster that you want to cancel a resize operation
   *             for.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace CancelResizeMessage {
  export const filterSensitiveLog = (obj: CancelResizeMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelResizeMessage =>
    __isa(o, "CancelResizeMessage");
}

/**
 * <p>Describes a cluster.</p>
 */
export interface Cluster {
  __type?: "Cluster";
  /**
   * <p>A boolean value that, if <code>true</code>, indicates that major version upgrades
   *             will be applied automatically to the cluster during the maintenance window. </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   */
  AvailabilityZone?: string;

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
   * <p>The date and time that the cluster was created.</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: ClusterNode[];

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster. Each
   *             parameter group in the list is returned with its status.</p>
   */
  ClusterParameterGroups?: ClusterParameterGroupStatus[];

  /**
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

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
   * <p>A value that returns the destination region and retention period that are
   *             configured for cross-region snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;

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
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *             valid only when the cluster is in a VPC.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the initial database that was created when the cluster was created.
   *             This same name is returned for the life of the cluster. If an initial database was not
   *             specified, a database named <code>dev</code>dev was created by default. </p>
   */
  DBName?: string;

  /**
   * <p></p>
   */
  DataTransferProgress?: DataTransferProgress;

  /**
   * <p>Describes a group of <code>DeferredMaintenanceWindow</code> objects.</p>
   */
  DeferredMaintenanceWindows?: DeferredMaintenanceWindow[];

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: ElasticIpStatus;

  /**
   * <p>The number of nodes that you can resize the cluster to with the elastic resize method.
   *         </p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that data in the cluster is
   *             encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: Endpoint;

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
   * <p>A value that reports whether the Amazon Redshift cluster has finished applying any
   *             hardware security module (HSM) settings changes specified in a modify cluster
   *             command.</p>
   *         <p>Values: active, applying</p>
   */
  HsmStatus?: HsmStatus;

  /**
   * <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other AWS services.</p>
   */
  IamRoles?: ClusterIamRole[];

  /**
   * <p>The AWS Key Management Service (AWS KMS) key ID of the encryption key used to
   *             encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the
   *             snapshot is retained indefinitely. This setting doesn't change the retention period
   *             of existing snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The master user name for the cluster. This name is used to connect to the database
   *             that is specified in the <b>DBName</b> parameter. </p>
   */
  MasterUsername?: string;

  /**
   * <p>The status of a modify operation, if any, initiated for the cluster.</p>
   */
  ModifyStatus?: string;

  /**
   * <p>The date and time in UTC when system maintenance can begin.</p>
   */
  NextMaintenanceWindowStartTime?: Date;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>Cluster operations that are waiting to be started.</p>
   */
  PendingActions?: string[];

  /**
   * <p>A value that, if present, indicates that changes to the cluster are pending.
   *             Specific pending changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *             maintenance can occur.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that the cluster can be
   *             accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

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
   * <p>A value that describes the status of a cluster restore action. This parameter
   *             returns null if the cluster was not created by restoring a snapshot.</p>
   */
  RestoreStatus?: RestoreStatus;

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   */
  SnapshotScheduleState?: ScheduleState | string;

  /**
   * <p>The list of tags for the cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The identifier of the VPC the cluster is in, if the cluster is in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of Amazon Virtual Private Cloud (Amazon VPC) security groups that are
   *             associated with the cluster. This parameter is returned only if the cluster is in a
   *             VPC.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
}

export namespace Cluster {
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj
  });
  export const isa = (o: any): o is Cluster => __isa(o, "Cluster");
}

/**
 * <p>The account already has a cluster with the given identifier.</p>
 */
export interface ClusterAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterAlreadyExistsFault {
  export const filterSensitiveLog = (obj: ClusterAlreadyExistsFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterAlreadyExistsFault =>
    __isa(o, "ClusterAlreadyExistsFault");
}

/**
 * <p></p>
 */
export interface ClusterAssociatedToSchedule {
  __type?: "ClusterAssociatedToSchedule";
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
  export const filterSensitiveLog = (
    obj: ClusterAssociatedToSchedule
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterAssociatedToSchedule =>
    __isa(o, "ClusterAssociatedToSchedule");
}

/**
 * <p>Temporary credentials with authorization to log on to an Amazon Redshift database.
 *         </p>
 */
export interface ClusterCredentials {
  __type?: "ClusterCredentials";
  /**
   * <p>A temporary password that authorizes the user name returned by <code>DbUser</code>
   *             to log on to the database <code>DbName</code>. </p>
   */
  DbPassword?: string;

  /**
   * <p>A database user name that is authorized to log on to the database
   *                 <code>DbName</code> using the password <code>DbPassword</code>. If the specified
   *             DbUser exists in the database, the new user name has the same database privileges as the
   *             the user named in DbUser. By default, the user is added to PUBLIC. If the
   *                 <code>DbGroups</code> parameter is specifed, <code>DbUser</code> is added to the
   *             listed groups for any sessions created using these credentials.</p>
   */
  DbUser?: string;

  /**
   * <p>The date and time the password in <code>DbPassword</code> expires.</p>
   */
  Expiration?: Date;
}

export namespace ClusterCredentials {
  export const filterSensitiveLog = (obj: ClusterCredentials): any => ({
    ...obj,
    ...(obj.DbPassword && { DbPassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ClusterCredentials =>
    __isa(o, "ClusterCredentials");
}

/**
 * <p>Describes a <code>ClusterDbRevision</code>.</p>
 */
export interface ClusterDbRevision {
  __type?: "ClusterDbRevision";
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
  export const filterSensitiveLog = (obj: ClusterDbRevision): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterDbRevision =>
    __isa(o, "ClusterDbRevision");
}

export interface ClusterDbRevisionsMessage {
  __type?: "ClusterDbRevisionsMessage";
  /**
   * <p>A list of revisions.</p>
   */
  ClusterDbRevisions?: ClusterDbRevision[];

  /**
   * <p>A string representing the starting point for the next set of revisions. If a value is
   *             returned in a response, you can retrieve the next set of revisions by providing the
   *             value in the <code>marker</code> parameter and retrying the command. If the
   *                 <code>marker</code> field is empty, all revisions have already been returned.</p>
   */
  Marker?: string;
}

export namespace ClusterDbRevisionsMessage {
  export const filterSensitiveLog = (obj: ClusterDbRevisionsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterDbRevisionsMessage =>
    __isa(o, "ClusterDbRevisionsMessage");
}

/**
 * <p>An AWS Identity and Access Management (IAM) role that can be used by the associated
 *             Amazon Redshift cluster to access other AWS services.</p>
 */
export interface ClusterIamRole {
  __type?: "ClusterIamRole";
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

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role, for example,
   *                 <code>arn:aws:iam::123456789012:role/RedshiftCopyUnload</code>. </p>
   */
  IamRoleArn?: string;
}

export namespace ClusterIamRole {
  export const filterSensitiveLog = (obj: ClusterIamRole): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterIamRole =>
    __isa(o, "ClusterIamRole");
}

/**
 * <p>The identifier of a node in a cluster.</p>
 */
export interface ClusterNode {
  __type?: "ClusterNode";
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
  export const filterSensitiveLog = (obj: ClusterNode): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterNode => __isa(o, "ClusterNode");
}

/**
 * <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 */
export interface ClusterNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterNotFoundFault {
  export const filterSensitiveLog = (obj: ClusterNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterNotFoundFault =>
    __isa(o, "ClusterNotFoundFault");
}

/**
 * <p>Cluster is already on the latest database revision.</p>
 */
export interface ClusterOnLatestRevisionFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterOnLatestRevisionFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterOnLatestRevisionFault {
  export const filterSensitiveLog = (
    obj: ClusterOnLatestRevisionFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterOnLatestRevisionFault =>
    __isa(o, "ClusterOnLatestRevisionFault");
}

/**
 * <p>Describes a parameter group.</p>
 */
export interface ClusterParameterGroup {
  __type?: "ClusterParameterGroup";
  /**
   * <p>The description of the parameter group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the cluster parameter group family that this cluster parameter group is
   *             compatible with.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The list of tags for the cluster parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace ClusterParameterGroup {
  export const filterSensitiveLog = (obj: ClusterParameterGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterGroup =>
    __isa(o, "ClusterParameterGroup");
}

/**
 * <p>A cluster parameter group with the same name already exists.</p>
 */
export interface ClusterParameterGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterParameterGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ClusterParameterGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterGroupAlreadyExistsFault =>
    __isa(o, "ClusterParameterGroupAlreadyExistsFault");
}

/**
 * <p>Contains the output from the <a>DescribeClusterParameters</a> action.
 *         </p>
 */
export interface ClusterParameterGroupDetails {
  __type?: "ClusterParameterGroupDetails";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>Parameter</a> instances. Each instance lists the parameters
   *             of one cluster parameter group. </p>
   */
  Parameters?: Parameter[];
}

export namespace ClusterParameterGroupDetails {
  export const filterSensitiveLog = (
    obj: ClusterParameterGroupDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterGroupDetails =>
    __isa(o, "ClusterParameterGroupDetails");
}

/**
 * <p></p>
 */
export interface ClusterParameterGroupNameMessage {
  __type?: "ClusterParameterGroupNameMessage";
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of the parameter group. For example, if you made a change to a parameter
   *             group name-value pair, then the change could be pending a reboot of an associated
   *             cluster.</p>
   */
  ParameterGroupStatus?: string;
}

export namespace ClusterParameterGroupNameMessage {
  export const filterSensitiveLog = (
    obj: ClusterParameterGroupNameMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterGroupNameMessage =>
    __isa(o, "ClusterParameterGroupNameMessage");
}

/**
 * <p>The parameter group name does not refer to an existing parameter group.</p>
 */
export interface ClusterParameterGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterParameterGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: ClusterParameterGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterGroupNotFoundFault =>
    __isa(o, "ClusterParameterGroupNotFoundFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             parameter groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterParameterGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterParameterGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ClusterParameterGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterGroupQuotaExceededFault =>
    __isa(o, "ClusterParameterGroupQuotaExceededFault");
}

/**
 * <p>Contains the output from the <a>DescribeClusterParameterGroups</a>
 *             action. </p>
 */
export interface ClusterParameterGroupsMessage {
  __type?: "ClusterParameterGroupsMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>ClusterParameterGroup</a> instances. Each instance
   *             describes one cluster parameter group. </p>
   */
  ParameterGroups?: ClusterParameterGroup[];
}

export namespace ClusterParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: ClusterParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterGroupsMessage =>
    __isa(o, "ClusterParameterGroupsMessage");
}

/**
 * <p>Describes the status of a parameter group.</p>
 */
export interface ClusterParameterGroupStatus {
  __type?: "ClusterParameterGroupStatus";
  /**
   * <p>The list of parameter statuses.</p>
   *         <p>
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  ClusterParameterStatusList?: ClusterParameterStatus[];

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;
}

export namespace ClusterParameterGroupStatus {
  export const filterSensitiveLog = (
    obj: ClusterParameterGroupStatus
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterGroupStatus =>
    __isa(o, "ClusterParameterGroupStatus");
}

/**
 * <p>Describes the status of a parameter group.</p>
 */
export interface ClusterParameterStatus {
  __type?: "ClusterParameterStatus";
  /**
   * <p>The error that prevented the parameter from being applied to the
   *             database.</p>
   */
  ParameterApplyErrorDescription?: string;

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
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;
}

export namespace ClusterParameterStatus {
  export const filterSensitiveLog = (obj: ClusterParameterStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterParameterStatus =>
    __isa(o, "ClusterParameterStatus");
}

/**
 * <p>The request would exceed the allowed number of cluster instances for this account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterQuotaExceededFault {
  export const filterSensitiveLog = (obj: ClusterQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterQuotaExceededFault =>
    __isa(o, "ClusterQuotaExceededFault");
}

/**
 * <p>Describes a security group.</p>
 */
export interface ClusterSecurityGroup {
  __type?: "ClusterSecurityGroup";
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
  export const filterSensitiveLog = (obj: ClusterSecurityGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSecurityGroup =>
    __isa(o, "ClusterSecurityGroup");
}

/**
 * <p>A cluster security group with the same name already exists.</p>
 */
export interface ClusterSecurityGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSecurityGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSecurityGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ClusterSecurityGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSecurityGroupAlreadyExistsFault =>
    __isa(o, "ClusterSecurityGroupAlreadyExistsFault");
}

/**
 * <p>Describes a cluster security group.</p>
 */
export interface ClusterSecurityGroupMembership {
  __type?: "ClusterSecurityGroupMembership";
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
  export const filterSensitiveLog = (
    obj: ClusterSecurityGroupMembership
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSecurityGroupMembership =>
    __isa(o, "ClusterSecurityGroupMembership");
}

/**
 * <p></p>
 */
export interface ClusterSecurityGroupMessage {
  __type?: "ClusterSecurityGroupMessage";
  /**
   * <p>A list of <a>ClusterSecurityGroup</a> instances. </p>
   */
  ClusterSecurityGroups?: ClusterSecurityGroup[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace ClusterSecurityGroupMessage {
  export const filterSensitiveLog = (
    obj: ClusterSecurityGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSecurityGroupMessage =>
    __isa(o, "ClusterSecurityGroupMessage");
}

/**
 * <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 */
export interface ClusterSecurityGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSecurityGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSecurityGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: ClusterSecurityGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSecurityGroupNotFoundFault =>
    __isa(o, "ClusterSecurityGroupNotFoundFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             security groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterSecurityGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSecurityGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSecurityGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ClusterSecurityGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSecurityGroupQuotaExceededFault =>
    __isa(o, "ClusterSecurityGroupQuotaExceededFault");
}

/**
 * <p>Contains the output from the <a>DescribeClusters</a> action. </p>
 */
export interface ClustersMessage {
  __type?: "ClustersMessage";
  /**
   * <p>A list of <code>Cluster</code> objects, where each object describes one cluster.
   *         </p>
   */
  Clusters?: Cluster[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace ClustersMessage {
  export const filterSensitiveLog = (obj: ClustersMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClustersMessage =>
    __isa(o, "ClustersMessage");
}

/**
 * <p>The value specified as a snapshot identifier is already used by an existing
 *             snapshot.</p>
 */
export interface ClusterSnapshotAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSnapshotAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ClusterSnapshotAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSnapshotAlreadyExistsFault =>
    __isa(o, "ClusterSnapshotAlreadyExistsFault");
}

/**
 * <p>Returns the destination region and retention period that are configured for
 *             cross-region snapshot copy.</p>
 */
export interface ClusterSnapshotCopyStatus {
  __type?: "ClusterSnapshotCopyStatus";
  /**
   * <p>The destination region that snapshots are automatically copied to when cross-region
   *             snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region
   *             after they are copied from a source region. If the value is -1, the manual snapshot is
   *             retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region
   *             after they are copied from a source region.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

export namespace ClusterSnapshotCopyStatus {
  export const filterSensitiveLog = (obj: ClusterSnapshotCopyStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSnapshotCopyStatus =>
    __isa(o, "ClusterSnapshotCopyStatus");
}

/**
 * <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 */
export interface ClusterSnapshotNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSnapshotNotFoundFault {
  export const filterSensitiveLog = (
    obj: ClusterSnapshotNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSnapshotNotFoundFault =>
    __isa(o, "ClusterSnapshotNotFoundFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             snapshots.</p>
 */
export interface ClusterSnapshotQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSnapshotQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ClusterSnapshotQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSnapshotQuotaExceededFault =>
    __isa(o, "ClusterSnapshotQuotaExceededFault");
}

/**
 * <p>Describes a subnet group.</p>
 */
export interface ClusterSubnetGroup {
  __type?: "ClusterSubnetGroup";
  /**
   * <p>The name of the cluster subnet group.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The description of the cluster subnet group.</p>
   */
  Description?: string;

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

  /**
   * <p>The VPC ID of the cluster subnet group.</p>
   */
  VpcId?: string;
}

export namespace ClusterSubnetGroup {
  export const filterSensitiveLog = (obj: ClusterSubnetGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSubnetGroup =>
    __isa(o, "ClusterSubnetGroup");
}

/**
 * <p>A <i>ClusterSubnetGroupName</i> is already used by an existing
 *             cluster subnet group. </p>
 */
export interface ClusterSubnetGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSubnetGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ClusterSubnetGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSubnetGroupAlreadyExistsFault =>
    __isa(o, "ClusterSubnetGroupAlreadyExistsFault");
}

/**
 * <p>Contains the output from the <a>DescribeClusterSubnetGroups</a> action.
 *         </p>
 */
export interface ClusterSubnetGroupMessage {
  __type?: "ClusterSubnetGroupMessage";
  /**
   * <p>A list of <a>ClusterSubnetGroup</a> instances. </p>
   */
  ClusterSubnetGroups?: ClusterSubnetGroup[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace ClusterSubnetGroupMessage {
  export const filterSensitiveLog = (obj: ClusterSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSubnetGroupMessage =>
    __isa(o, "ClusterSubnetGroupMessage");
}

/**
 * <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 */
export interface ClusterSubnetGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSubnetGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: ClusterSubnetGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSubnetGroupNotFoundFault =>
    __isa(o, "ClusterSubnetGroupNotFoundFault");
}

/**
 * <p>The request would result in user exceeding the allowed number of cluster subnet
 *             groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterSubnetGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSubnetGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ClusterSubnetGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSubnetGroupQuotaExceededFault =>
    __isa(o, "ClusterSubnetGroupQuotaExceededFault");
}

/**
 * <p>The request would result in user exceeding the allowed number of subnets in a
 *             cluster subnet groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterSubnetQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterSubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSubnetQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ClusterSubnetQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterSubnetQuotaExceededFault =>
    __isa(o, "ClusterSubnetQuotaExceededFault");
}

/**
 * <p>Describes a cluster version, including the parameter group family and description
 *             of the version.</p>
 */
export interface ClusterVersion {
  __type?: "ClusterVersion";
  /**
   * <p>The name of the cluster parameter group family for the cluster.</p>
   */
  ClusterParameterGroupFamily?: string;

  /**
   * <p>The version number used by the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The description of the cluster version.</p>
   */
  Description?: string;
}

export namespace ClusterVersion {
  export const filterSensitiveLog = (obj: ClusterVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterVersion =>
    __isa(o, "ClusterVersion");
}

/**
 * <p>Contains the output from the <a>DescribeClusterVersions</a> action.
 *         </p>
 */
export interface ClusterVersionsMessage {
  __type?: "ClusterVersionsMessage";
  /**
   * <p>A list of <code>Version</code> elements. </p>
   */
  ClusterVersions?: ClusterVersion[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace ClusterVersionsMessage {
  export const filterSensitiveLog = (obj: ClusterVersionsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterVersionsMessage =>
    __isa(o, "ClusterVersionsMessage");
}

/**
 * <p></p>
 */
export interface CopyClusterSnapshotMessage {
  __type?: "CopyClusterSnapshotMessage";
  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>The default value is -1.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The identifier of the cluster the source snapshot was created from. This parameter
   *             is required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the identifier for a valid cluster.</p>
   *             </li>
   *          </ul>
   */
  SourceSnapshotClusterIdentifier?: string;

  /**
   * <p>The identifier for the source snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the identifier for a valid automated snapshot whose state is
   *                         <code>available</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier given to the new manual snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must be unique for the AWS account that is making the request.</p>
   *             </li>
   *          </ul>
   */
  TargetSnapshotIdentifier: string | undefined;
}

export namespace CopyClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: CopyClusterSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyClusterSnapshotMessage =>
    __isa(o, "CopyClusterSnapshotMessage");
}

export interface CopyClusterSnapshotResult {
  __type?: "CopyClusterSnapshotResult";
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace CopyClusterSnapshotResult {
  export const filterSensitiveLog = (obj: CopyClusterSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyClusterSnapshotResult =>
    __isa(o, "CopyClusterSnapshotResult");
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 */
export interface CopyToRegionDisabledFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CopyToRegionDisabledFault";
  $fault: "client";
  message?: string;
}

export namespace CopyToRegionDisabledFault {
  export const filterSensitiveLog = (obj: CopyToRegionDisabledFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyToRegionDisabledFault =>
    __isa(o, "CopyToRegionDisabledFault");
}

/**
 * <p></p>
 */
export interface CreateClusterMessage {
  __type?: "CreateClusterMessage";
  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>If <code>true</code>, major version upgrades can be applied during the maintenance
   *             window to the Amazon Redshift engine that is running on the cluster.</p>
   *         <p>When a new major version of the Amazon Redshift engine is released, you can request that
   *             the service automatically apply upgrades during the maintenance window to the Amazon Redshift
   *             engine that is running on your cluster.</p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *         <p>Default: <code>1</code>
   *         </p>
   *         <p>Constraints: Must be a value from 0 to 35.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the
   *             cluster. For example, if you have several EC2 instances running in a specific
   *             Availability Zone, then you might want the cluster to be provisioned in the same zone in
   *             order to decrease network latency.</p>
   *         <p>Default: A random, system-chosen Availability Zone in the region that is specified
   *             by the endpoint.</p>
   *         <p>Example: <code>us-east-2d</code>
   *         </p>
   *         <p>Constraint: The specified Availability Zone must be in the same region as the
   *             current endpoint.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A unique identifier for the cluster. You use this identifier to refer to the
   *             cluster for any subsequent cluster operations such as deleting or modifying. The
   *             identifier also appears in the Amazon Redshift console.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Alphabetic characters must be lowercase.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all clusters within an AWS account.</p>
   *             </li>
   *          </ul>
   *
   *             <p>Example: <code>myexamplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the parameter group to be associated with this cluster.</p>
   *         <p>Default: The default Amazon Redshift cluster parameter group. For information about the
   *             default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon
   *                 Redshift Parameter Groups</a>
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ClusterParameterGroupName?: string;

  /**
   * <p>A list of security groups to be associated with this cluster.</p>
   *         <p>Default: The default cluster security group for Amazon Redshift.</p>
   */
  ClusterSecurityGroups?: string[];

  /**
   * <p>The name of a cluster subnet group to be associated with this cluster.</p>
   *         <p>If this parameter is not provided the resulting cluster will be deployed outside
   *             virtual private cloud (VPC).</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The type of the cluster. When cluster type is specified as</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>single-node</code>, the <b>NumberOfNodes</b>
   *                     parameter is not required.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>multi-node</code>, the <b>NumberOfNodes</b>
   *                     parameter is required.</p>
   *             </li>
   *          </ul>
   *         <p>Valid Values: <code>multi-node</code> | <code>single-node</code>
   *         </p>
   *         <p>Default: <code>multi-node</code>
   *         </p>
   */
  ClusterType?: string;

  /**
   * <p>The version of the Amazon Redshift engine software that you want to deploy on the
   *             cluster.</p>
   *         <p>The version selected runs on all the nodes in the cluster.</p>
   *         <p>Constraints: Only version 1.0 is currently available.</p>
   *         <p>Example: <code>1.0</code>
   *         </p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the first database to be created when the cluster is created.</p>
   *         <p>To create additional databases after the cluster is created, connect to the cluster
   *             with a SQL client and use SQL commands to create a database. For more information, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html">Create
   *                 a Database</a> in the Amazon Redshift Database Developer Guide. </p>
   *         <p>Default: <code>dev</code>
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain 1 to 64 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a word that is reserved by the service. A list of reserved words
   *                     can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the
   *                     Amazon Redshift Database Developer Guide. </p>
   *             </li>
   *          </ul>
   */
  DBName?: string;

  /**
   * <p>The Elastic IP (EIP) address for the cluster.</p>
   *         <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
   *             through an Internet gateway. For more information about provisioning clusters in
   *             EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported
   *                 Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
   */
  ElasticIp?: string;

  /**
   * <p>If <code>true</code>, the data in the cluster is encrypted at rest. </p>
   *         <p>Default: false</p>
   */
  Encrypted?: boolean;

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
   * <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other AWS services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. You can supply up to 10 IAM roles in a single
   *             request.</p>
   *         <p>A cluster can have up to 10 IAM roles associated with it at any time.</p>
   */
  IamRoles?: string[];

  /**
   * <p>The AWS Key Management Service (KMS) key ID of the encryption key that you want to
   *             use to encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>An optional parameter for the name of the maintenance track for the cluster. If you
   *             don't provide a maintenance track name, the cluster is assigned to the
   *                 <code>current</code> track.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the
   *             snapshot is retained indefinitely. This setting doesn't change the retention period
   *             of existing snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The password associated with the master user account for the cluster that is being
   *             created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be between 8 and 64 characters in length.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain at least one uppercase letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain one number.</p>
   *             </li>
   *             <li>
   *                 <p>Can be any printable ASCII character (ASCII code 33 to 126) except '
   *                     (single quote), " (double quote), \, /, @, or space.</p>
   *             </li>
   *          </ul>
   */
  MasterUserPassword: string | undefined;

  /**
   * <p>The user name associated with the master user account for the cluster that is being
   *             created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 - 128 alphanumeric characters. The user name can't be
   *                         <code>PUBLIC</code>.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved
   *                         Words</a> in the Amazon Redshift Database Developer Guide. </p>
   *             </li>
   *          </ul>
   */
  MasterUsername: string | undefined;

  /**
   * <p>The node type to be provisioned for the cluster. For information about node types,
   *             go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with
   *                 Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *         <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> |
   *                 <code>dc1.large</code> | <code>dc1.8xlarge</code> |
   *                 <code>dc2.large</code> | <code>dc2.8xlarge</code> |
   *                 <code>ra3.16xlarge</code>
   *          </p>
   */
  NodeType: string | undefined;

  /**
   * <p>The number of compute nodes in the cluster. This parameter is required when the
   *                 <b>ClusterType</b> parameter is specified as
   *                 <code>multi-node</code>. </p>
   *         <p>For information about determining how many nodes you need, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with
   *                 Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *         <p>If you don't specify this parameter, you get a single-node cluster. When requesting
   *             a multi-node cluster, you must specify the number of nodes that you want in the
   *             cluster.</p>
   *         <p>Default: <code>1</code>
   *         </p>
   *         <p>Constraints: Value must be at least 1 and no more than 100.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The port number on which the cluster accepts incoming connections.</p>
   *         <p>The cluster is accessible only via the JDBC and ODBC connection strings. Part of
   *             the connection string requires the port on which the cluster will listen for incoming
   *             connections.</p>
   *         <p>Default: <code>5439</code>
   *         </p>
   *         <p>Valid Values: <code>1150-65535</code>
   *         </p>
   */
  Port?: number;

  /**
   * <p>The weekly time range (in UTC) during which automated cluster maintenance can
   *             occur.</p>
   *         <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p> Default: A 30-minute window selected at random from an 8-hour block of time per
   *             region, occurring on a random day of the week. For more information about the time
   *             blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide.</p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A unique identifier for the snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the
   *             cluster.</p>
   *         <p>Default: The default VPC security group is associated with the cluster.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace CreateClusterMessage {
  export const filterSensitiveLog = (obj: CreateClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterMessage =>
    __isa(o, "CreateClusterMessage");
}

/**
 * <p></p>
 */
export interface CreateClusterParameterGroupMessage {
  __type?: "CreateClusterParameterGroupMessage";
  /**
   * <p>A description of the parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>The Amazon Redshift engine version to which the cluster parameter group applies. The
   *             cluster engine version determines the set of parameters.</p>
   *         <p>To get a list of valid parameter group family names, you can call <a>DescribeClusterParameterGroups</a>. By default, Amazon Redshift returns a list of
   *             all the parameter groups that are owned by your AWS account, including the default
   *             parameter groups for each Amazon Redshift engine version. The parameter group family names
   *             associated with the default parameter groups provide you the valid values. For example,
   *             a valid family name is "redshift-1.0". </p>
   */
  ParameterGroupFamily: string | undefined;

  /**
   * <p>The name of the cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must be unique withing your AWS account.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This value is stored as a lower-case string.</p>
   *         </note>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterParameterGroupMessage =>
    __isa(o, "CreateClusterParameterGroupMessage");
}

export interface CreateClusterParameterGroupResult {
  __type?: "CreateClusterParameterGroupResult";
  /**
   * <p>Describes a parameter group.</p>
   */
  ClusterParameterGroup?: ClusterParameterGroup;
}

export namespace CreateClusterParameterGroupResult {
  export const filterSensitiveLog = (
    obj: CreateClusterParameterGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterParameterGroupResult =>
    __isa(o, "CreateClusterParameterGroupResult");
}

export interface CreateClusterResult {
  __type?: "CreateClusterResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace CreateClusterResult {
  export const filterSensitiveLog = (obj: CreateClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterResult =>
    __isa(o, "CreateClusterResult");
}

/**
 * <p></p>
 */
export interface CreateClusterSecurityGroupMessage {
  __type?: "CreateClusterSecurityGroupMessage";
  /**
   * <p>The name for the security group. Amazon Redshift stores the value as a lowercase
   *             string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must not be "Default".</p>
   *             </li>
   *             <li>
   *                 <p>Must be unique for all security groups that are created by your AWS
   *                     account.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>examplesecuritygroup</code>
   *         </p>
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>A description for the security group.</p>
   */
  Description: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateClusterSecurityGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateClusterSecurityGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterSecurityGroupMessage =>
    __isa(o, "CreateClusterSecurityGroupMessage");
}

export interface CreateClusterSecurityGroupResult {
  __type?: "CreateClusterSecurityGroupResult";
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: ClusterSecurityGroup;
}

export namespace CreateClusterSecurityGroupResult {
  export const filterSensitiveLog = (
    obj: CreateClusterSecurityGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterSecurityGroupResult =>
    __isa(o, "CreateClusterSecurityGroupResult");
}

/**
 * <p></p>
 */
export interface CreateClusterSnapshotMessage {
  __type?: "CreateClusterSnapshotMessage";
  /**
   * <p>The cluster identifier for which you want a snapshot.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *
   *         <p>The default value is -1.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A unique identifier for the snapshot that you are requesting. This identifier must
   *             be unique for all snapshots within the AWS account.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-snapshot-id</code>
   *         </p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: CreateClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterSnapshotMessage =>
    __isa(o, "CreateClusterSnapshotMessage");
}

export interface CreateClusterSnapshotResult {
  __type?: "CreateClusterSnapshotResult";
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace CreateClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: CreateClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterSnapshotResult =>
    __isa(o, "CreateClusterSnapshotResult");
}

/**
 * <p></p>
 */
export interface CreateClusterSubnetGroupMessage {
  __type?: "CreateClusterSubnetGroupMessage";
  /**
   * <p>The name for the subnet group. Amazon Redshift stores the value as a lowercase
   *             string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must not be "Default".</p>
   *             </li>
   *             <li>
   *                 <p>Must be unique for all subnet groups that are created by your AWS
   *                     account.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>examplesubnetgroup</code>
   *         </p>
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * <p>A description for the subnet group.</p>
   */
  Description: string | undefined;

  /**
   * <p>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
   *             request.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateClusterSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateClusterSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterSubnetGroupMessage =>
    __isa(o, "CreateClusterSubnetGroupMessage");
}

export interface CreateClusterSubnetGroupResult {
  __type?: "CreateClusterSubnetGroupResult";
  /**
   * <p>Describes a subnet group.</p>
   */
  ClusterSubnetGroup?: ClusterSubnetGroup;
}

export namespace CreateClusterSubnetGroupResult {
  export const filterSensitiveLog = (
    obj: CreateClusterSubnetGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClusterSubnetGroupResult =>
    __isa(o, "CreateClusterSubnetGroupResult");
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionMessage {
  __type?: "CreateEventSubscriptionMessage";
  /**
   * <p>A boolean value; set to <code>true</code> to activate the subscription, and set to
   *                 <code>false</code> to create the subscription but not activate it. </p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies the Amazon Redshift event categories to be published by the event notification
   *             subscription.</p>
   *         <p>Values: configuration, management, monitoring, security</p>
   */
  EventCategories?: string[];

  /**
   * <p>Specifies the Amazon Redshift event severity to be published by the event notification
   *             subscription.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event
   *             notifications. The ARN is created by Amazon SNS when you create a topic and subscribe to
   *             it.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects
   *             must be of the same type as was specified in the source type parameter. The event
   *             subscription will return only events generated by the specified objects. If not
   *             specified, then events are returned for all objects within the source type
   *             specified.</p>
   *         <p>Example: my-cluster-1, my-cluster-2</p>
   *         <p>Example: my-snapshot-20131010</p>
   */
  SourceIds?: string[];

  /**
   * <p>The type of source that will be generating the events. For example, if you want to
   *             be notified of events generated by a cluster, you would set this parameter to cluster.
   *             If this value is not specified, events are returned for all Amazon Redshift objects in your
   *             AWS account. You must specify a source type in order to specify source IDs.</p>
   *         <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
   */
  SourceType?: string;

  /**
   * <p>The name of the event subscription to be created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateEventSubscriptionMessage {
  export const filterSensitiveLog = (
    obj: CreateEventSubscriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEventSubscriptionMessage =>
    __isa(o, "CreateEventSubscriptionMessage");
}

export interface CreateEventSubscriptionResult {
  __type?: "CreateEventSubscriptionResult";
  /**
   * <p>Describes event subscriptions.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace CreateEventSubscriptionResult {
  export const filterSensitiveLog = (
    obj: CreateEventSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEventSubscriptionResult =>
    __isa(o, "CreateEventSubscriptionResult");
}

/**
 * <p></p>
 */
export interface CreateHsmClientCertificateMessage {
  __type?: "CreateHsmClientCertificateMessage";
  /**
   * <p>The identifier to be assigned to the new HSM client certificate that the cluster
   *             will use to connect to the HSM to use the database encryption keys.</p>
   */
  HsmClientCertificateIdentifier: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateHsmClientCertificateMessage {
  export const filterSensitiveLog = (
    obj: CreateHsmClientCertificateMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHsmClientCertificateMessage =>
    __isa(o, "CreateHsmClientCertificateMessage");
}

export interface CreateHsmClientCertificateResult {
  __type?: "CreateHsmClientCertificateResult";
  /**
   * <p>Returns information about an HSM client certificate. The certificate is stored in a
   *             secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data
   *             files.</p>
   */
  HsmClientCertificate?: HsmClientCertificate;
}

export namespace CreateHsmClientCertificateResult {
  export const filterSensitiveLog = (
    obj: CreateHsmClientCertificateResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHsmClientCertificateResult =>
    __isa(o, "CreateHsmClientCertificateResult");
}

/**
 * <p></p>
 */
export interface CreateHsmConfigurationMessage {
  __type?: "CreateHsmConfigurationMessage";
  /**
   * <p>A text description of the HSM configuration to be created.</p>
   */
  Description: string | undefined;

  /**
   * <p>The identifier to be assigned to the new Amazon Redshift HSM configuration.</p>
   */
  HsmConfigurationIdentifier: string | undefined;

  /**
   * <p>The IP address that the Amazon Redshift cluster must use to access the HSM.</p>
   */
  HsmIpAddress: string | undefined;

  /**
   * <p>The name of the partition in the HSM where the Amazon Redshift clusters will store their
   *             database encryption keys.</p>
   */
  HsmPartitionName: string | undefined;

  /**
   * <p>The password required to access the HSM partition.</p>
   */
  HsmPartitionPassword: string | undefined;

  /**
   * <p>The HSMs public certificate file. When using Cloud HSM, the file name is
   *             server.pem.</p>
   */
  HsmServerPublicCertificate: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateHsmConfigurationMessage {
  export const filterSensitiveLog = (
    obj: CreateHsmConfigurationMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHsmConfigurationMessage =>
    __isa(o, "CreateHsmConfigurationMessage");
}

export interface CreateHsmConfigurationResult {
  __type?: "CreateHsmConfigurationResult";
  /**
   * <p>Returns information about an HSM configuration, which is an object that describes
   *             to Amazon Redshift clusters the information they require to connect to an HSM where they can
   *             store database encryption keys.</p>
   */
  HsmConfiguration?: HsmConfiguration;
}

export namespace CreateHsmConfigurationResult {
  export const filterSensitiveLog = (
    obj: CreateHsmConfigurationResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHsmConfigurationResult =>
    __isa(o, "CreateHsmConfigurationResult");
}

export interface CreateScheduledActionMessage {
  __type?: "CreateScheduledActionMessage";
  /**
   * <p>If true, the schedule is enabled. If false, the scheduled action does not trigger.
   *             For more information about <code>state</code> of the scheduled action, see <a>ScheduledAction</a>. </p>
   */
  Enable?: boolean;

  /**
   * <p>The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  EndTime?: Date;

  /**
   * <p>The IAM role to assume to run the target action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  IamRole: string | undefined;

  /**
   * <p>The schedule in <code>at( )</code> or <code>cron( )</code> format.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  Schedule: string | undefined;

  /**
   * <p>The description of the scheduled action.
   *             </p>
   */
  ScheduledActionDescription?: string;

  /**
   * <p>The name of the scheduled action. The name must be unique within an account.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The start time in UTC of the scheduled action.
   *             Before this time, the scheduled action does not trigger.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>A JSON format string of the Amazon Redshift API operation with input parameters.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  TargetAction: ScheduledActionType | undefined;
}

export namespace CreateScheduledActionMessage {
  export const filterSensitiveLog = (
    obj: CreateScheduledActionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateScheduledActionMessage =>
    __isa(o, "CreateScheduledActionMessage");
}

/**
 * <p>The result of the <code>CreateSnapshotCopyGrant</code> action.</p>
 */
export interface CreateSnapshotCopyGrantMessage {
  __type?: "CreateSnapshotCopyGrantMessage";
  /**
   * <p>The unique identifier of the customer master key (CMK) to which to grant Amazon Redshift
   *             permission. If no key is specified, the default key is used.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the snapshot copy grant. This name must be unique in the region for the
   *             AWS account.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Alphabetic characters must be lowercase.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all clusters within an AWS account.</p>
   *             </li>
   *          </ul>
   */
  SnapshotCopyGrantName: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSnapshotCopyGrantMessage {
  export const filterSensitiveLog = (
    obj: CreateSnapshotCopyGrantMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotCopyGrantMessage =>
    __isa(o, "CreateSnapshotCopyGrantMessage");
}

export interface CreateSnapshotCopyGrantResult {
  __type?: "CreateSnapshotCopyGrantResult";
  /**
   * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied
   *             snapshots with the specified customer master key (CMK) from AWS KMS in the destination
   *             region.</p>
   *         <p>
   * For more information about managing snapshot copy grants, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.
   * </p>
   */
  SnapshotCopyGrant?: SnapshotCopyGrant;
}

export namespace CreateSnapshotCopyGrantResult {
  export const filterSensitiveLog = (
    obj: CreateSnapshotCopyGrantResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotCopyGrantResult =>
    __isa(o, "CreateSnapshotCopyGrantResult");
}

export interface CreateSnapshotScheduleMessage {
  __type?: "CreateSnapshotScheduleMessage";
  /**
   * <p></p>
   */
  DryRun?: boolean;

  /**
   * <p></p>
   */
  NextInvocations?: number;

  /**
   * <p>The definition of the snapshot schedule. The definition is made up of schedule
   *             expressions, for example "cron(30 12 *)" or "rate(12 hours)". </p>
   */
  ScheduleDefinitions?: string[];

  /**
   * <p>The description of the snapshot schedule.</p>
   */
  ScheduleDescription?: string;

  /**
   * <p>A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed
   *             for the identifier.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>An optional set of tags you can use to search for the schedule.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSnapshotScheduleMessage {
  export const filterSensitiveLog = (
    obj: CreateSnapshotScheduleMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotScheduleMessage =>
    __isa(o, "CreateSnapshotScheduleMessage");
}

/**
 * <p>Contains the output from the <code>CreateTags</code> action. </p>
 */
export interface CreateTagsMessage {
  __type?: "CreateTagsMessage";
  /**
   * <p>The Amazon Resource Name (ARN) to which you want to add the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   */
  ResourceName: string | undefined;

  /**
   * <p>One or more name/value pairs to add as tags to the specified resource. Each tag
   *             name is passed in with the parameter <code>Key</code> and the corresponding value is
   *             passed in with the parameter <code>Value</code>. The <code>Key</code> and
   *                 <code>Value</code> parameters are separated by a comma (,). Separate multiple tags
   *             with a space. For example, <code>--tags "Key"="owner","Value"="admin"
   *                 "Key"="environment","Value"="test" "Key"="version","Value"="1.0"</code>. </p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsMessage {
  export const filterSensitiveLog = (obj: CreateTagsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTagsMessage =>
    __isa(o, "CreateTagsMessage");
}

export interface CustomerStorageMessage {
  __type?: "CustomerStorageMessage";
  /**
   * <p>The total amount of storage currently used for snapshots.</p>
   */
  TotalBackupSizeInMegaBytes?: number;

  /**
   * <p>The total amount of storage currently provisioned.</p>
   */
  TotalProvisionedStorageInMegaBytes?: number;
}

export namespace CustomerStorageMessage {
  export const filterSensitiveLog = (obj: CustomerStorageMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomerStorageMessage =>
    __isa(o, "CustomerStorageMessage");
}

/**
 * <p>Describes the status of a cluster while it is in the process of resizing with an
 *             incremental resize.</p>
 */
export interface DataTransferProgress {
  __type?: "DataTransferProgress";
  /**
   * <p>Describes the data transfer rate in MB's per second.</p>
   */
  CurrentRateInMegaBytesPerSecond?: number;

  /**
   * <p>Describes the total amount of data that has been transfered in MB's.</p>
   */
  DataTransferredInMegaBytes?: number;

  /**
   * <p>Describes the number of seconds that have elapsed during the data transfer.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>Describes the estimated number of seconds remaining to complete the transfer.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>Describes the status of the cluster. While the transfer is in progress the status is
   *                 <code>transferringdata</code>.</p>
   */
  Status?: string;

  /**
   * <p>Describes the total amount of data to be transfered in megabytes.</p>
   */
  TotalDataInMegaBytes?: number;
}

export namespace DataTransferProgress {
  export const filterSensitiveLog = (obj: DataTransferProgress): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataTransferProgress =>
    __isa(o, "DataTransferProgress");
}

/**
 * <p>Describes the default cluster parameters for a parameter group family.</p>
 */
export interface DefaultClusterParameters {
  __type?: "DefaultClusterParameters";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>The name of the cluster parameter group family to which the engine default
   *             parameters apply.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>The list of cluster default parameters.</p>
   */
  Parameters?: Parameter[];
}

export namespace DefaultClusterParameters {
  export const filterSensitiveLog = (obj: DefaultClusterParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefaultClusterParameters =>
    __isa(o, "DefaultClusterParameters");
}

/**
 * <p>Describes a deferred maintenance window</p>
 */
export interface DeferredMaintenanceWindow {
  __type?: "DeferredMaintenanceWindow";
  /**
   * <p> A timestamp for the end of the time period when we defer maintenance.</p>
   */
  DeferMaintenanceEndTime?: Date;

  /**
   * <p>A unique identifier for the maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p> A timestamp for the beginning of the time period when we defer maintenance.</p>
   */
  DeferMaintenanceStartTime?: Date;
}

export namespace DeferredMaintenanceWindow {
  export const filterSensitiveLog = (obj: DeferredMaintenanceWindow): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeferredMaintenanceWindow =>
    __isa(o, "DeferredMaintenanceWindow");
}

/**
 * <p></p>
 */
export interface DeleteClusterMessage {
  __type?: "DeleteClusterMessage";
  /**
   * <p>The identifier of the cluster to be deleted.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain lowercase characters.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the final snapshot that is to be created immediately before
   *             deleting the cluster. If this parameter is provided,
   *                 <i>SkipFinalClusterSnapshot</i> must be <code>false</code>. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  FinalClusterSnapshotIdentifier?: string;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>The default value is -1.</p>
   */
  FinalClusterSnapshotRetentionPeriod?: number;

  /**
   * <p>Determines whether a final snapshot of the cluster is created before Amazon Redshift
   *             deletes the cluster. If <code>true</code>, a final cluster snapshot is not created. If
   *                 <code>false</code>, a final cluster snapshot is created before the cluster is
   *             deleted. </p>
   *         <note>
   *             <p>The <i>FinalClusterSnapshotIdentifier</i> parameter must be
   *                 specified if <i>SkipFinalClusterSnapshot</i> is
   *                 <code>false</code>.</p>
   *         </note>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  SkipFinalClusterSnapshot?: boolean;
}

export namespace DeleteClusterMessage {
  export const filterSensitiveLog = (obj: DeleteClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClusterMessage =>
    __isa(o, "DeleteClusterMessage");
}

/**
 * <p></p>
 */
export interface DeleteClusterParameterGroupMessage {
  __type?: "DeleteClusterParameterGroupMessage";
  /**
   * <p>The name of the parameter group to be deleted.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the name of an existing cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot delete a default cluster parameter group.</p>
   *             </li>
   *          </ul>
   */
  ParameterGroupName: string | undefined;
}

export namespace DeleteClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClusterParameterGroupMessage =>
    __isa(o, "DeleteClusterParameterGroupMessage");
}

export interface DeleteClusterResult {
  __type?: "DeleteClusterResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace DeleteClusterResult {
  export const filterSensitiveLog = (obj: DeleteClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClusterResult =>
    __isa(o, "DeleteClusterResult");
}

/**
 * <p></p>
 */
export interface DeleteClusterSecurityGroupMessage {
  __type?: "DeleteClusterSecurityGroupMessage";
  /**
   * <p>The name of the cluster security group to be deleted.</p>
   */
  ClusterSecurityGroupName: string | undefined;
}

export namespace DeleteClusterSecurityGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteClusterSecurityGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClusterSecurityGroupMessage =>
    __isa(o, "DeleteClusterSecurityGroupMessage");
}

/**
 * <p></p>
 */
export interface DeleteClusterSnapshotMessage {
  __type?: "DeleteClusterSnapshotMessage";
  /**
   * <p>The unique identifier of the cluster the snapshot was created from. This parameter
   *             is required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   *         <p>Constraints: Must be the name of valid cluster.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The unique identifier of the manual snapshot to be deleted.</p>
   *         <p>Constraints: Must be the name of an existing snapshot that is in the
   *                 <code>available</code>, <code>failed</code>, or <code>cancelled</code>
   *             state.</p>
   */
  SnapshotIdentifier: string | undefined;
}

export namespace DeleteClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: DeleteClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClusterSnapshotMessage =>
    __isa(o, "DeleteClusterSnapshotMessage");
}

export interface DeleteClusterSnapshotResult {
  __type?: "DeleteClusterSnapshotResult";
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace DeleteClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: DeleteClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClusterSnapshotResult =>
    __isa(o, "DeleteClusterSnapshotResult");
}

/**
 * <p></p>
 */
export interface DeleteClusterSubnetGroupMessage {
  __type?: "DeleteClusterSubnetGroupMessage";
  /**
   * <p>The name of the cluster subnet group name to be deleted.</p>
   */
  ClusterSubnetGroupName: string | undefined;
}

export namespace DeleteClusterSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteClusterSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClusterSubnetGroupMessage =>
    __isa(o, "DeleteClusterSubnetGroupMessage");
}

/**
 * <p></p>
 */
export interface DeleteEventSubscriptionMessage {
  __type?: "DeleteEventSubscriptionMessage";
  /**
   * <p>The name of the Amazon Redshift event notification subscription to be deleted.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace DeleteEventSubscriptionMessage {
  export const filterSensitiveLog = (
    obj: DeleteEventSubscriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEventSubscriptionMessage =>
    __isa(o, "DeleteEventSubscriptionMessage");
}

/**
 * <p></p>
 */
export interface DeleteHsmClientCertificateMessage {
  __type?: "DeleteHsmClientCertificateMessage";
  /**
   * <p>The identifier of the HSM client certificate to be deleted.</p>
   */
  HsmClientCertificateIdentifier: string | undefined;
}

export namespace DeleteHsmClientCertificateMessage {
  export const filterSensitiveLog = (
    obj: DeleteHsmClientCertificateMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteHsmClientCertificateMessage =>
    __isa(o, "DeleteHsmClientCertificateMessage");
}

/**
 * <p></p>
 */
export interface DeleteHsmConfigurationMessage {
  __type?: "DeleteHsmConfigurationMessage";
  /**
   * <p>The identifier of the Amazon Redshift HSM configuration to be deleted.</p>
   */
  HsmConfigurationIdentifier: string | undefined;
}

export namespace DeleteHsmConfigurationMessage {
  export const filterSensitiveLog = (
    obj: DeleteHsmConfigurationMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteHsmConfigurationMessage =>
    __isa(o, "DeleteHsmConfigurationMessage");
}

export interface DeleteScheduledActionMessage {
  __type?: "DeleteScheduledActionMessage";
  /**
   * <p>The name of the scheduled action to delete. </p>
   */
  ScheduledActionName: string | undefined;
}

export namespace DeleteScheduledActionMessage {
  export const filterSensitiveLog = (
    obj: DeleteScheduledActionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteScheduledActionMessage =>
    __isa(o, "DeleteScheduledActionMessage");
}

/**
 * <p>The result of the <code>DeleteSnapshotCopyGrant</code> action.</p>
 */
export interface DeleteSnapshotCopyGrantMessage {
  __type?: "DeleteSnapshotCopyGrantMessage";
  /**
   * <p>The name of the snapshot copy grant to delete.</p>
   */
  SnapshotCopyGrantName: string | undefined;
}

export namespace DeleteSnapshotCopyGrantMessage {
  export const filterSensitiveLog = (
    obj: DeleteSnapshotCopyGrantMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSnapshotCopyGrantMessage =>
    __isa(o, "DeleteSnapshotCopyGrantMessage");
}

export interface DeleteSnapshotScheduleMessage {
  __type?: "DeleteSnapshotScheduleMessage";
  /**
   * <p>A unique identifier of the snapshot schedule to delete.</p>
   */
  ScheduleIdentifier: string | undefined;
}

export namespace DeleteSnapshotScheduleMessage {
  export const filterSensitiveLog = (
    obj: DeleteSnapshotScheduleMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSnapshotScheduleMessage =>
    __isa(o, "DeleteSnapshotScheduleMessage");
}

/**
 * <p>Contains the output from the <code>DeleteTags</code> action. </p>
 */
export interface DeleteTagsMessage {
  __type?: "DeleteTagsMessage";
  /**
   * <p>The Amazon Resource Name (ARN) from which you want to remove the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key that you want to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsMessage {
  export const filterSensitiveLog = (obj: DeleteTagsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsMessage =>
    __isa(o, "DeleteTagsMessage");
}

/**
 * <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 */
export interface DependentServiceRequestThrottlingFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DependentServiceRequestThrottlingFault";
  $fault: "client";
  message?: string;
}

export namespace DependentServiceRequestThrottlingFault {
  export const filterSensitiveLog = (
    obj: DependentServiceRequestThrottlingFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DependentServiceRequestThrottlingFault =>
    __isa(o, "DependentServiceRequestThrottlingFault");
}

/**
 * <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 */
export interface DependentServiceUnavailableFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DependentServiceUnavailableFault";
  $fault: "client";
  message?: string;
}

export namespace DependentServiceUnavailableFault {
  export const filterSensitiveLog = (
    obj: DependentServiceUnavailableFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DependentServiceUnavailableFault =>
    __isa(o, "DependentServiceUnavailableFault");
}

export interface DescribeAccountAttributesMessage {
  __type?: "DescribeAccountAttributesMessage";
  /**
   * <p>A list of attribute names.</p>
   */
  AttributeNames?: string[];
}

export namespace DescribeAccountAttributesMessage {
  export const filterSensitiveLog = (
    obj: DescribeAccountAttributesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountAttributesMessage =>
    __isa(o, "DescribeAccountAttributesMessage");
}

export interface DescribeClusterDbRevisionsMessage {
  __type?: "DescribeClusterDbRevisionsMessage";
  /**
   * <p>A unique identifier for a cluster whose <code>ClusterDbRevisions</code> you are
   *             requesting. This parameter is case sensitive. All clusters defined for an account are
   *             returned by default.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>DescribeClusterDbRevisions</code> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value
   *             in the <code>marker</code> field of the response. You can retrieve the next set of
   *             response records by providing the returned <code>marker</code> value in the
   *                 <code>marker</code> parameter and retrying the request. </p>
   *         <p>Constraints: You can specify either the <code>ClusterIdentifier</code> parameter, or
   *             the <code>marker</code> parameter, but not both.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified MaxRecords value, a value is returned
   *             in the <code>marker</code> field of the response. You can retrieve the next set of
   *             response records by providing the returned <code>marker</code> value in the
   *                 <code>marker</code> parameter and retrying the request. </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeClusterDbRevisionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeClusterDbRevisionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterDbRevisionsMessage =>
    __isa(o, "DescribeClusterDbRevisionsMessage");
}

/**
 * <p></p>
 */
export interface DescribeClusterParameterGroupsMessage {
  __type?: "DescribeClusterParameterGroupsMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterParameterGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of a specific parameter group for which to return details. By default,
   *             details about all parameter groups and the default parameter group are
   *             returned.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster parameter
   *             groups that are associated with the specified key or keys. For example, suppose that you
   *             have parameter groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the parameter groups that have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching cluster parameter
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have parameter groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the parameter groups that have either or both of these tag
   *             values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClusterParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeClusterParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterParameterGroupsMessage =>
    __isa(o, "DescribeClusterParameterGroupsMessage");
}

/**
 * <p></p>
 */
export interface DescribeClusterParametersMessage {
  __type?: "DescribeClusterParametersMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterParameters</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of a cluster parameter group for which to return details.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return. Specify <code>user</code> to show parameters that
   *             are different form the default. Similarly, specify <code>engine-default</code> to show
   *             parameters that are the same as the default parameter group. </p>
   *         <p>Default: All parameter types returned.</p>
   *         <p>Valid Values: <code>user</code> | <code>engine-default</code>
   *         </p>
   */
  Source?: string;
}

export namespace DescribeClusterParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeClusterParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterParametersMessage =>
    __isa(o, "DescribeClusterParametersMessage");
}

/**
 * <p></p>
 */
export interface DescribeClusterSecurityGroupsMessage {
  __type?: "DescribeClusterSecurityGroupsMessage";
  /**
   * <p>The name of a cluster security group for which you are requesting details. You can
   *             specify either the <b>Marker</b> parameter or a <b>ClusterSecurityGroupName</b> parameter, but not both. </p>
   *         <p> Example: <code>securitygroup1</code>
   *         </p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSecurityGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>ClusterSecurityGroupName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster security groups
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             security groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the security groups that have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching cluster security
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have security groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the security groups that have either or both of these tag values
   *             associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClusterSecurityGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeClusterSecurityGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterSecurityGroupsMessage =>
    __isa(o, "DescribeClusterSecurityGroupsMessage");
}

/**
 * <p></p>
 */
export interface DescribeClustersMessage {
  __type?: "DescribeClustersMessage";
  /**
   * <p>The unique identifier of a cluster whose properties you are requesting. This
   *             parameter is case sensitive.</p>
   *         <p>The default is that all clusters defined for an account are returned.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusters</a> request exceed the
   *             value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>ClusterIdentifier</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A tag key or keys for which you want to return all matching clusters that are
   *             associated with the specified key or keys. For example, suppose that you have clusters
   *             that are tagged with keys called <code>owner</code> and <code>environment</code>. If you
   *             specify both of these tag keys in the request, Amazon Redshift returns a response with the
   *             clusters that have either or both of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching clusters that are
   *             associated with the specified tag value or values. For example, suppose that you have
   *             clusters that are tagged with values called <code>admin</code> and <code>test</code>. If
   *             you specify both of these tag values in the request, Amazon Redshift returns a response with
   *             the clusters that have either or both of these tag values associated with
   *             them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClustersMessage {
  export const filterSensitiveLog = (obj: DescribeClustersMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClustersMessage =>
    __isa(o, "DescribeClustersMessage");
}

/**
 * <p></p>
 */
export interface DescribeClusterSnapshotsMessage {
  __type?: "DescribeClusterSnapshotsMessage";
  /**
   * <p>A value that indicates whether to return snapshots only for an existing cluster.
   *             You can perform table-level restore only by using a snapshot of an existing cluster,
   *             that is, a cluster that has not been deleted. Values for this parameter work as follows: </p>
   *         <ul>
   *             <li>
   *                 <p>If <code>ClusterExists</code> is set to <code>true</code>,
   *                         <code>ClusterIdentifier</code> is required.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> isn't specified, all snapshots
   *                     associated with deleted clusters (orphaned snapshots) are returned. </p>
   *             </li>
   *             <li>
   *                 <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> is specified for a deleted cluster, snapshots
   *                     associated with that cluster are returned.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> is specified for an existing cluster, no
   *                     snapshots are returned. </p>
   *             </li>
   *          </ul>
   */
  ClusterExists?: boolean;

  /**
   * <p>The identifier of the cluster which generated the requested snapshots.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A time value that requests only snapshots created at or before the specified time.
   *             The time value is specified in ISO 8601 format. For more information about ISO 8601, go
   *             to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia
   *                 page.</a>
   *         </p>
   *         <p>Example: <code>2012-07-16T18:00:00Z</code>
   *         </p>
   */
  EndTime?: Date;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSnapshots</a> request exceed
   *             the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The AWS customer account used to create or copy the snapshot. Use this field to
   *             filter the results to snapshots owned by a particular account. To describe snapshots you
   *             own, either specify your AWS customer account, or do not specify the
   *             parameter.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The snapshot identifier of the snapshot about which to return
   *             information.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The type of snapshots for which you are requesting information. By default,
   *             snapshots of all types are returned.</p>
   *         <p>Valid Values: <code>automated</code> | <code>manual</code>
   *         </p>
   */
  SnapshotType?: string;

  /**
   * <p></p>
   */
  SortingEntities?: SnapshotSortingEntity[];

  /**
   * <p>A value that requests only snapshots created at or after the specified time. The
   *             time value is specified in ISO 8601 format. For more information about ISO 8601, go to
   *             the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *         </p>
   *         <p>Example: <code>2012-07-16T18:00:00Z</code>
   *         </p>
   */
  StartTime?: Date;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster snapshots that
   *             are associated with the specified key or keys. For example, suppose that you have
   *             snapshots that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the snapshots that have either or both of these tag
   *             keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching cluster snapshots
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have snapshots that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the snapshots that have either or both of these tag values
   *             associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClusterSnapshotsMessage {
  export const filterSensitiveLog = (
    obj: DescribeClusterSnapshotsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterSnapshotsMessage =>
    __isa(o, "DescribeClusterSnapshotsMessage");
}

/**
 * <p></p>
 */
export interface DescribeClusterSubnetGroupsMessage {
  __type?: "DescribeClusterSubnetGroupsMessage";
  /**
   * <p>The name of the cluster subnet group for which information is requested.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSubnetGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster subnet groups
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             subnet groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the subnet groups that have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching cluster subnet
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have subnet groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the subnet groups that have either or both of these tag values
   *             associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClusterSubnetGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeClusterSubnetGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterSubnetGroupsMessage =>
    __isa(o, "DescribeClusterSubnetGroupsMessage");
}

export interface DescribeClusterTracksMessage {
  __type?: "DescribeClusterTracksMessage";
  /**
   * <p>The name of the maintenance track. </p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeClusterTracks</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>An integer value for the maximum number of maintenance tracks to return.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeClusterTracksMessage {
  export const filterSensitiveLog = (
    obj: DescribeClusterTracksMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterTracksMessage =>
    __isa(o, "DescribeClusterTracksMessage");
}

/**
 * <p></p>
 */
export interface DescribeClusterVersionsMessage {
  __type?: "DescribeClusterVersionsMessage";
  /**
   * <p>The name of a specific cluster parameter group family to return details
   *             for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  ClusterParameterGroupFamily?: string;

  /**
   * <p>The specific cluster version to return.</p>
   *         <p>Example: <code>1.0</code>
   *         </p>
   */
  ClusterVersion?: string;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterVersions</a> request exceed
   *             the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeClusterVersionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeClusterVersionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClusterVersionsMessage =>
    __isa(o, "DescribeClusterVersionsMessage");
}

/**
 * <p></p>
 */
export interface DescribeDefaultClusterParametersMessage {
  __type?: "DescribeDefaultClusterParametersMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDefaultClusterParameters</a>
   *             request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in
   *             the <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of the cluster parameter group family.</p>
   */
  ParameterGroupFamily: string | undefined;
}

export namespace DescribeDefaultClusterParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeDefaultClusterParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDefaultClusterParametersMessage =>
    __isa(o, "DescribeDefaultClusterParametersMessage");
}

export interface DescribeDefaultClusterParametersResult {
  __type?: "DescribeDefaultClusterParametersResult";
  /**
   * <p>Describes the default cluster parameters for a parameter group family.</p>
   */
  DefaultClusterParameters?: DefaultClusterParameters;
}

export namespace DescribeDefaultClusterParametersResult {
  export const filterSensitiveLog = (
    obj: DescribeDefaultClusterParametersResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDefaultClusterParametersResult =>
    __isa(o, "DescribeDefaultClusterParametersResult");
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesMessage {
  __type?: "DescribeEventCategoriesMessage";
  /**
   * <p>The source type, such as cluster or parameter group, to which the described event
   *             categories apply.</p>
   *         <p>Valid values: cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, and scheduled-action.</p>
   */
  SourceType?: string;
}

export namespace DescribeEventCategoriesMessage {
  export const filterSensitiveLog = (
    obj: DescribeEventCategoriesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventCategoriesMessage =>
    __isa(o, "DescribeEventCategoriesMessage");
}

/**
 * <p></p>
 */
export interface DescribeEventsMessage {
  __type?: "DescribeEventsMessage";
  /**
   * <p>The number of minutes prior to the time of the request for which to retrieve
   *             events. For example, if the request is sent at 18:00 and you specify a duration of 60,
   *             then only events which have occurred after 17:00 will be returned.</p>
   *         <p>Default: <code>60</code>
   *         </p>
   */
  Duration?: number;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *         </p>
   *         <p>Example: <code>2009-07-08T18:00Z</code>
   *         </p>
   */
  EndTime?: Date;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeEvents</a> request exceed the value
   *             specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code>
   *             field of the response. You can retrieve the next set of response records by providing
   *             the returned marker value in the <code>Marker</code> parameter and retrying the request.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the event source for which events will be returned. If this
   *             parameter is not specified, then all sources are included in the response.</p>
   *         <p>Constraints:</p>
   *         <p>If <i>SourceIdentifier</i> is supplied,
   *                 <i>SourceType</i> must also be provided.</p>
   *         <ul>
   *             <li>
   *                 <p>Specify a cluster identifier when <i>SourceType</i> is
   *                         <code>cluster</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Specify a cluster security group name when <i>SourceType</i>
   *                     is <code>cluster-security-group</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Specify a cluster parameter group name when <i>SourceType</i>
   *                     is <code>cluster-parameter-group</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Specify a cluster snapshot identifier when <i>SourceType</i>
   *                     is <code>cluster-snapshot</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   *         <p>Constraints:</p>
   *         <p>If <i>SourceType</i> is supplied,
   *                 <i>SourceIdentifier</i> must also be provided.</p>
   *         <ul>
   *             <li>
   *                 <p>Specify <code>cluster</code> when <i>SourceIdentifier</i> is
   *                     a cluster identifier.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>cluster-security-group</code> when
   *                         <i>SourceIdentifier</i> is a cluster security group
   *                     name.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>cluster-parameter-group</code> when
   *                         <i>SourceIdentifier</i> is a cluster parameter group
   *                     name.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>cluster-snapshot</code> when
   *                         <i>SourceIdentifier</i> is a cluster snapshot
   *                     identifier.</p>
   *             </li>
   *          </ul>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *         </p>
   *         <p>Example: <code>2009-07-08T18:00Z</code>
   *         </p>
   */
  StartTime?: Date;
}

export namespace DescribeEventsMessage {
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventsMessage =>
    __isa(o, "DescribeEventsMessage");
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsMessage {
  __type?: "DescribeEventSubscriptionsMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a DescribeEventSubscriptions request exceed the value
   *             specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code>
   *             field of the response. You can retrieve the next set of response records by providing
   *             the returned marker value in the <code>Marker</code> parameter and retrying the request.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of the Amazon Redshift event notification subscription to be
   *             described.</p>
   */
  SubscriptionName?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching event notification
   *             subscriptions that are associated with the specified key or keys. For example, suppose
   *             that you have subscriptions that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the subscriptions that have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching event notification
   *             subscriptions that are associated with the specified tag value or values. For example,
   *             suppose that you have subscriptions that are tagged with values called
   *                 <code>admin</code> and <code>test</code>. If you specify both of these tag values in
   *             the request, Amazon Redshift returns a response with the subscriptions that have either or
   *             both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeEventSubscriptionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeEventSubscriptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventSubscriptionsMessage =>
    __isa(o, "DescribeEventSubscriptionsMessage");
}

/**
 * <p></p>
 */
export interface DescribeHsmClientCertificatesMessage {
  __type?: "DescribeHsmClientCertificatesMessage";
  /**
   * <p>The identifier of a specific HSM client certificate for which you want information.
   *             If no identifier is specified, information is returned for all HSM client certificates
   *             owned by your AWS customer account.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmClientCertificates</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM client certificates
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             HSM client certificates that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM client certificates that have either or both
   *             of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching HSM client
   *             certificates that are associated with the specified tag value or values. For example,
   *             suppose that you have HSM client certificates that are tagged with values called
   *                 <code>admin</code> and <code>test</code>. If you specify both of these tag values in
   *             the request, Amazon Redshift returns a response with the HSM client certificates that have
   *             either or both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeHsmClientCertificatesMessage {
  export const filterSensitiveLog = (
    obj: DescribeHsmClientCertificatesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHsmClientCertificatesMessage =>
    __isa(o, "DescribeHsmClientCertificatesMessage");
}

/**
 * <p></p>
 */
export interface DescribeHsmConfigurationsMessage {
  __type?: "DescribeHsmConfigurationsMessage";
  /**
   * <p>The identifier of a specific Amazon Redshift HSM configuration to be described. If no
   *             identifier is specified, information is returned for all HSM configurations owned by
   *             your AWS customer account.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmConfigurations</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM configurations that
   *             are associated with the specified key or keys. For example, suppose that you have HSM
   *             configurations that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM configurations that have either or both of
   *             these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching HSM configurations
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have HSM configurations that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the HSM configurations that have either or both of these tag
   *             values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeHsmConfigurationsMessage {
  export const filterSensitiveLog = (
    obj: DescribeHsmConfigurationsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHsmConfigurationsMessage =>
    __isa(o, "DescribeHsmConfigurationsMessage");
}

/**
 * <p></p>
 */
export interface DescribeLoggingStatusMessage {
  __type?: "DescribeLoggingStatusMessage";
  /**
   * <p>The identifier of the cluster from which to get the logging status.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace DescribeLoggingStatusMessage {
  export const filterSensitiveLog = (
    obj: DescribeLoggingStatusMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoggingStatusMessage =>
    __isa(o, "DescribeLoggingStatusMessage");
}

export interface DescribeNodeConfigurationOptionsMessage {
  __type?: "DescribeNodeConfigurationOptionsMessage";
  /**
   * <p>The action type to evaluate for possible node configurations.
   *             Specify "restore-cluster" to get configuration combinations based on an existing snapshot.
   *             Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot.
   *         </p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * <p>The identifier of the cluster to evaluate for possible node configurations.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A set of name, operator, and value items to filter the results.</p>
   */
  Filters?: NodeConfigurationOptionsFilter[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeNodeConfigurationOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>500</code>
   *         </p>
   *         <p>Constraints: minimum 100, maximum 500.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The AWS customer account used to create or copy the snapshot.
   *             Required if you are restoring a snapshot you do not own,
   *             optional if you own the snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The identifier of the snapshot to evaluate for possible node configurations.</p>
   */
  SnapshotIdentifier?: string;
}

export namespace DescribeNodeConfigurationOptionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeNodeConfigurationOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeNodeConfigurationOptionsMessage =>
    __isa(o, "DescribeNodeConfigurationOptionsMessage");
}

/**
 * <p></p>
 */
export interface DescribeOrderableClusterOptionsMessage {
  __type?: "DescribeOrderableClusterOptionsMessage";
  /**
   * <p>The version filter value. Specify this parameter to show only the available
   *             offerings matching the specified version.</p>
   *         <p>Default: All versions.</p>
   *         <p>Constraints: Must be one of the version returned from <a>DescribeClusterVersions</a>.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeOrderableClusterOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The node type filter value. Specify this parameter to show only the available
   *             offerings matching the specified node type.</p>
   */
  NodeType?: string;
}

export namespace DescribeOrderableClusterOptionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeOrderableClusterOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOrderableClusterOptionsMessage =>
    __isa(o, "DescribeOrderableClusterOptionsMessage");
}

/**
 * <p></p>
 */
export interface DescribeReservedNodeOfferingsMessage {
  __type?: "DescribeReservedNodeOfferingsMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeReservedNodeOfferings</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The unique identifier for the offering.</p>
   */
  ReservedNodeOfferingId?: string;
}

export namespace DescribeReservedNodeOfferingsMessage {
  export const filterSensitiveLog = (
    obj: DescribeReservedNodeOfferingsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReservedNodeOfferingsMessage =>
    __isa(o, "DescribeReservedNodeOfferingsMessage");
}

/**
 * <p></p>
 */
export interface DescribeReservedNodesMessage {
  __type?: "DescribeReservedNodesMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeReservedNodes</a> request exceed
   *             the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>Identifier for the node reservation.</p>
   */
  ReservedNodeId?: string;
}

export namespace DescribeReservedNodesMessage {
  export const filterSensitiveLog = (
    obj: DescribeReservedNodesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReservedNodesMessage =>
    __isa(o, "DescribeReservedNodesMessage");
}

/**
 * <p></p>
 */
export interface DescribeResizeMessage {
  __type?: "DescribeResizeMessage";
  /**
   * <p>The unique identifier of a cluster whose resize progress you are requesting. This
   *             parameter is case-sensitive.</p>
   *         <p>By default, resize operations for all clusters defined for an AWS account are
   *             returned.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace DescribeResizeMessage {
  export const filterSensitiveLog = (obj: DescribeResizeMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeResizeMessage =>
    __isa(o, "DescribeResizeMessage");
}

export interface DescribeScheduledActionsMessage {
  __type?: "DescribeScheduledActionsMessage";
  /**
   * <p>If true, retrieve only active scheduled actions.
   *            If false, retrieve only disabled scheduled actions. </p>
   */
  Active?: boolean;

  /**
   * <p>The end time in UTC of the scheduled action to retrieve.
   *             Only active scheduled actions that have invocations before this time are retrieved.</p>
   */
  EndTime?: Date;

  /**
   * <p>List of scheduled action filters. </p>
   */
  Filters?: ScheduledActionFilter[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *             <p>Default: <code>100</code>
   *             </p>
   *             <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of the scheduled action to retrieve. </p>
   */
  ScheduledActionName?: string;

  /**
   * <p>The start time in UTC of the scheduled actions to retrieve.
   *             Only active scheduled actions that have invocations after this time are retrieved.</p>
   */
  StartTime?: Date;

  /**
   * <p>The type of the scheduled actions to retrieve. </p>
   */
  TargetActionType?: ScheduledActionTypeValues | string;
}

export namespace DescribeScheduledActionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeScheduledActionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeScheduledActionsMessage =>
    __isa(o, "DescribeScheduledActionsMessage");
}

/**
 * <p>The result of the <code>DescribeSnapshotCopyGrants</code> action.</p>
 */
export interface DescribeSnapshotCopyGrantsMessage {
  __type?: "DescribeSnapshotCopyGrantsMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeSnapshotCopyGrantsMessage {
  export const filterSensitiveLog = (
    obj: DescribeSnapshotCopyGrantsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotCopyGrantsMessage =>
    __isa(o, "DescribeSnapshotCopyGrantsMessage");
}

export interface DescribeSnapshotSchedulesMessage {
  __type?: "DescribeSnapshotSchedulesMessage";
  /**
   * <p>The unique identifier for the cluster whose snapshot schedules you want to
   *             view.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code>
   *             value.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A unique identifier for a snapshot schedule.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>The key value for a snapshot schedule tag.</p>
   */
  TagKeys?: string[];

  /**
   * <p>The value corresponding to the key of the snapshot schedule tag.</p>
   */
  TagValues?: string[];
}

export namespace DescribeSnapshotSchedulesMessage {
  export const filterSensitiveLog = (
    obj: DescribeSnapshotSchedulesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotSchedulesMessage =>
    __isa(o, "DescribeSnapshotSchedulesMessage");
}

export interface DescribeSnapshotSchedulesOutputMessage {
  __type?: "DescribeSnapshotSchedulesOutputMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of SnapshotSchedules.</p>
   */
  SnapshotSchedules?: SnapshotSchedule[];
}

export namespace DescribeSnapshotSchedulesOutputMessage {
  export const filterSensitiveLog = (
    obj: DescribeSnapshotSchedulesOutputMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotSchedulesOutputMessage =>
    __isa(o, "DescribeSnapshotSchedulesOutputMessage");
}

/**
 * <p></p>
 */
export interface DescribeTableRestoreStatusMessage {
  __type?: "DescribeTableRestoreStatusMessage";
  /**
   * <p>The Amazon Redshift cluster that the table is being restored to.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>An optional pagination token provided by a previous
   *                 <code>DescribeTableRestoreStatus</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *                 <code>MaxRecords</code> parameter.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the table restore request to return status for. If you don't
   *             specify a <code>TableRestoreRequestId</code> value, then
   *                 <code>DescribeTableRestoreStatus</code> returns the status of all in-progress table
   *             restore requests.</p>
   */
  TableRestoreRequestId?: string;
}

export namespace DescribeTableRestoreStatusMessage {
  export const filterSensitiveLog = (
    obj: DescribeTableRestoreStatusMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTableRestoreStatusMessage =>
    __isa(o, "DescribeTableRestoreStatusMessage");
}

/**
 * <p></p>
 */
export interface DescribeTagsMessage {
  __type?: "DescribeTagsMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code> value.
   *         </p>
   */
  MaxRecords?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource with which you want to view tags. Valid resource types are: </p>
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
   *             <li>
   *                 <p>Snapshot copy grant</p>
   *             </li>
   *          </ul>
   *         <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Specifying Policy Elements: Actions, Effects, Resources, and Principals</a> in
   *             the Amazon Redshift Cluster Management Guide. </p>
   */
  ResourceType?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeTagsMessage {
  export const filterSensitiveLog = (obj: DescribeTagsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsMessage =>
    __isa(o, "DescribeTagsMessage");
}

/**
 * <p></p>
 */
export interface DisableLoggingMessage {
  __type?: "DisableLoggingMessage";
  /**
   * <p>The identifier of the cluster on which logging is to be stopped.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace DisableLoggingMessage {
  export const filterSensitiveLog = (obj: DisableLoggingMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableLoggingMessage =>
    __isa(o, "DisableLoggingMessage");
}

/**
 * <p></p>
 */
export interface DisableSnapshotCopyMessage {
  __type?: "DisableSnapshotCopyMessage";
  /**
   * <p>The unique identifier of the source cluster that you want to disable copying of
   *             snapshots to a destination region.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace DisableSnapshotCopyMessage {
  export const filterSensitiveLog = (obj: DisableSnapshotCopyMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableSnapshotCopyMessage =>
    __isa(o, "DisableSnapshotCopyMessage");
}

export interface DisableSnapshotCopyResult {
  __type?: "DisableSnapshotCopyResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace DisableSnapshotCopyResult {
  export const filterSensitiveLog = (obj: DisableSnapshotCopyResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableSnapshotCopyResult =>
    __isa(o, "DisableSnapshotCopyResult");
}

/**
 * <p>Describes an Amazon EC2 security group.</p>
 */
export interface EC2SecurityGroup {
  __type?: "EC2SecurityGroup";
  /**
   * <p>The name of the EC2 Security Group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The AWS ID of the owner of the EC2 security group specified in the
   *                 <code>EC2SecurityGroupName</code> field. </p>
   */
  EC2SecurityGroupOwnerId?: string;

  /**
   * <p>The status of the EC2 security group.</p>
   */
  Status?: string;

  /**
   * <p>The list of tags for the EC2 security group.</p>
   */
  Tags?: Tag[];
}

export namespace EC2SecurityGroup {
  export const filterSensitiveLog = (obj: EC2SecurityGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is EC2SecurityGroup =>
    __isa(o, "EC2SecurityGroup");
}

/**
 * <p>Describes the status of the elastic IP (EIP) address.</p>
 */
export interface ElasticIpStatus {
  __type?: "ElasticIpStatus";
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
  export const filterSensitiveLog = (obj: ElasticIpStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticIpStatus =>
    __isa(o, "ElasticIpStatus");
}

/**
 * <p></p>
 */
export interface EnableLoggingMessage {
  __type?: "EnableLoggingMessage";
  /**
   * <p>The name of an existing S3 bucket where the log files are to be stored.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the same region as the cluster</p>
   *             </li>
   *             <li>
   *                 <p>The cluster must have read bucket and put object permissions</p>
   *             </li>
   *          </ul>
   */
  BucketName: string | undefined;

  /**
   * <p>The identifier of the cluster on which logging is to be started.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The prefix applied to the log file names.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot exceed 512 characters</p>
   *             </li>
   *             <li>
   *                 <p>Cannot contain spaces( ), double quotes ("), single quotes ('), a backslash
   *                     (\), or control characters. The hexadecimal codes for invalid characters are: </p>
   *                 <ul>
   *                   <li>
   *                         <p>x00 to x20</p>
   *                     </li>
   *                   <li>
   *                         <p>x22</p>
   *                     </li>
   *                   <li>
   *                         <p>x27</p>
   *                     </li>
   *                   <li>
   *                         <p>x5c</p>
   *                     </li>
   *                   <li>
   *                         <p>x7f or larger</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  S3KeyPrefix?: string;
}

export namespace EnableLoggingMessage {
  export const filterSensitiveLog = (obj: EnableLoggingMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableLoggingMessage =>
    __isa(o, "EnableLoggingMessage");
}

/**
 * <p></p>
 */
export interface EnableSnapshotCopyMessage {
  __type?: "EnableSnapshotCopyMessage";
  /**
   * <p>The unique identifier of the source cluster to copy snapshots from.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that does not already
   *             have cross-region snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The destination AWS Region that you want to copy snapshots to.</p>
   *         <p>Constraints: Must be the name of a valid AWS Region. For more information, see
   *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.
   *         </p>
   */
  DestinationRegion: string | undefined;

  /**
   * <p>The number of days to retain newly copied snapshots in the destination AWS Region
   *             after they are copied from the source AWS Region. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The number of days to retain automated snapshots in the destination region after
   *             they are copied from the source region.</p>
   *         <p>Default: 7.</p>
   *         <p>Constraints: Must be at least 1 and no more than 35.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted
   *             cluster are copied to the destination region.</p>
   */
  SnapshotCopyGrantName?: string;
}

export namespace EnableSnapshotCopyMessage {
  export const filterSensitiveLog = (obj: EnableSnapshotCopyMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableSnapshotCopyMessage =>
    __isa(o, "EnableSnapshotCopyMessage");
}

export interface EnableSnapshotCopyResult {
  __type?: "EnableSnapshotCopyResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace EnableSnapshotCopyResult {
  export const filterSensitiveLog = (obj: EnableSnapshotCopyResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableSnapshotCopyResult =>
    __isa(o, "EnableSnapshotCopyResult");
}

/**
 * <p>Describes a connection endpoint.</p>
 */
export interface Endpoint {
  __type?: "Endpoint";
  /**
   * <p>The DNS address of the Cluster.</p>
   */
  Address?: string;

  /**
   * <p>The port that the database engine is listening on.</p>
   */
  Port?: number;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is Endpoint => __isa(o, "Endpoint");
}

/**
 * <p>Describes an event.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>The date and time of the event.</p>
   */
  Date?: Date;

  /**
   * <p>A list of the event categories.</p>
   *         <p>Values: Configuration, Management, Monitoring, Security</p>
   */
  EventCategories?: string[];

  /**
   * <p>The identifier of the event.</p>
   */
  EventId?: string;

  /**
   * <p>The text of this event.</p>
   */
  Message?: string;

  /**
   * <p>The severity of the event.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>The identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The source type for this event.</p>
   */
  SourceType?: SourceType | string;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj
  });
  export const isa = (o: any): o is Event => __isa(o, "Event");
}

/**
 * <p>Describes event categories.</p>
 */
export interface EventCategoriesMap {
  __type?: "EventCategoriesMap";
  /**
   * <p>The events in the event category.</p>
   */
  Events?: EventInfoMap[];

  /**
   * <p>The source type, such as cluster or cluster-snapshot, that the returned categories
   *             belong to.</p>
   */
  SourceType?: string;
}

export namespace EventCategoriesMap {
  export const filterSensitiveLog = (obj: EventCategoriesMap): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventCategoriesMap =>
    __isa(o, "EventCategoriesMap");
}

/**
 * <p></p>
 */
export interface EventCategoriesMessage {
  __type?: "EventCategoriesMessage";
  /**
   * <p>A list of event categories descriptions.</p>
   */
  EventCategoriesMapList?: EventCategoriesMap[];
}

export namespace EventCategoriesMessage {
  export const filterSensitiveLog = (obj: EventCategoriesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventCategoriesMessage =>
    __isa(o, "EventCategoriesMessage");
}

/**
 * <p>Describes event information.</p>
 */
export interface EventInfoMap {
  __type?: "EventInfoMap";
  /**
   * <p>The category of an Amazon Redshift event.</p>
   */
  EventCategories?: string[];

  /**
   * <p>The description of an Amazon Redshift event.</p>
   */
  EventDescription?: string;

  /**
   * <p>The identifier of an Amazon Redshift event.</p>
   */
  EventId?: string;

  /**
   * <p>The severity of the event.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;
}

export namespace EventInfoMap {
  export const filterSensitiveLog = (obj: EventInfoMap): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventInfoMap => __isa(o, "EventInfoMap");
}

/**
 * <p></p>
 */
export interface EventsMessage {
  __type?: "EventsMessage";
  /**
   * <p>A list of <code>Event</code> instances. </p>
   */
  Events?: Event[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace EventsMessage {
  export const filterSensitiveLog = (obj: EventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventsMessage => __isa(o, "EventsMessage");
}

/**
 * <p>Describes event subscriptions.</p>
 */
export interface EventSubscription {
  __type?: "EventSubscription";
  /**
   * <p>The name of the Amazon Redshift event notification subscription.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The AWS customer account associated with the Amazon Redshift event notification
   *             subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>A boolean value indicating whether the subscription is enabled; <code>true</code>
   *             indicates that the subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The list of Amazon Redshift event categories specified in the event notification
   *             subscription.</p>
   *         <p>Values: Configuration, Management, Monitoring, Security</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>The event severity specified in the Amazon Redshift event notification
   *             subscription.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic used by the event
   *             notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A list of the sources that publish events to the Amazon Redshift event notification
   *             subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>The source type of the events returned by the Amazon Redshift event notification, such as
   *             cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, or scheduled-action. </p>
   */
  SourceType?: string;

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
   * <p>The list of tags for the event subscription.</p>
   */
  Tags?: Tag[];
}

export namespace EventSubscription {
  export const filterSensitiveLog = (obj: EventSubscription): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventSubscription =>
    __isa(o, "EventSubscription");
}

/**
 * <p>The request would exceed the allowed number of event subscriptions for this
 *             account.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface EventSubscriptionQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "EventSubscriptionQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace EventSubscriptionQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: EventSubscriptionQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventSubscriptionQuotaExceededFault =>
    __isa(o, "EventSubscriptionQuotaExceededFault");
}

/**
 * <p></p>
 */
export interface EventSubscriptionsMessage {
  __type?: "EventSubscriptionsMessage";
  /**
   * <p>A list of event subscriptions.</p>
   */
  EventSubscriptionsList?: EventSubscription[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace EventSubscriptionsMessage {
  export const filterSensitiveLog = (obj: EventSubscriptionsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventSubscriptionsMessage =>
    __isa(o, "EventSubscriptionsMessage");
}

/**
 * <p>The request parameters to get cluster credentials.</p>
 */
export interface GetClusterCredentialsMessage {
  __type?: "GetClusterCredentialsMessage";
  /**
   * <p>Create a database user with the name specified for the user named in
   *                 <code>DbUser</code> if one does not exist.</p>
   */
  AutoCreate?: boolean;

  /**
   * <p>The unique identifier of the cluster that contains the database for which your are
   *             requesting credentials. This parameter is case sensitive.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A list of the names of existing database groups that the user named in
   *                 <code>DbUser</code> will join for the current session, in addition to any group
   *             memberships for an existing user. If not specified, a new user is added only to
   *             PUBLIC.</p>
   *         <p>Database group name constraints</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbGroups?: string[];

  /**
   * <p>The name of a database that <code>DbUser</code> is authorized to log on to. If
   *                 <code>DbName</code> is not specified, <code>DbUser</code> can log on to any existing
   *             database.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbName?: string;

  /**
   * <p>The name of a database user. If a user name matching <code>DbUser</code> exists in
   *             the database, the temporary user credentials have the same permissions as the existing
   *             user. If <code>DbUser</code> doesn't exist in the database and <code>Autocreate</code>
   *             is <code>True</code>, a new user is created using the value for <code>DbUser</code> with
   *             PUBLIC permissions. If a database user matching the value for <code>DbUser</code>
   *             doesn't exist and <code>Autocreate</code> is <code>False</code>, then the command
   *             succeeds but the connection attempt will fail because the user doesn't exist in the
   *             database.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">CREATE USER</a> in the Amazon
   *             Redshift Database Developer Guide. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be
   *                         <code>PUBLIC</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbUser: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *         <p>Constraint: minimum 900, maximum 3600.</p>
   *         <p>Default: 900</p>
   */
  DurationSeconds?: number;
}

export namespace GetClusterCredentialsMessage {
  export const filterSensitiveLog = (
    obj: GetClusterCredentialsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetClusterCredentialsMessage =>
    __isa(o, "GetClusterCredentialsMessage");
}

/**
 * <p></p>
 */
export interface GetReservedNodeExchangeOfferingsInputMessage {
  __type?: "GetReservedNodeExchangeOfferingsInputMessage";
  /**
   * <p>A value that indicates the starting point for the next set of
   *             ReservedNodeOfferings.</p>
   */
  Marker?: string;

  /**
   * <p>An integer setting the maximum number of ReservedNodeOfferings to
   *             retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A string representing the node identifier for the DC1 Reserved Node to be
   *             exchanged.</p>
   */
  ReservedNodeId: string | undefined;
}

export namespace GetReservedNodeExchangeOfferingsInputMessage {
  export const filterSensitiveLog = (
    obj: GetReservedNodeExchangeOfferingsInputMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetReservedNodeExchangeOfferingsInputMessage =>
    __isa(o, "GetReservedNodeExchangeOfferingsInputMessage");
}

export interface GetReservedNodeExchangeOfferingsOutputMessage {
  __type?: "GetReservedNodeExchangeOfferingsOutputMessage";
  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>GetReservedNodeExchangeOfferings</code>
   *             request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the
   *             marker field of the response. You can retrieve the next set of response records by
   *             providing the returned marker value in the marker parameter and retrying the request.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>Returns an array of <a>ReservedNodeOffering</a> objects.</p>
   */
  ReservedNodeOfferings?: ReservedNodeOffering[];
}

export namespace GetReservedNodeExchangeOfferingsOutputMessage {
  export const filterSensitiveLog = (
    obj: GetReservedNodeExchangeOfferingsOutputMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetReservedNodeExchangeOfferingsOutputMessage =>
    __isa(o, "GetReservedNodeExchangeOfferingsOutputMessage");
}

/**
 * <p>Returns information about an HSM client certificate. The certificate is stored in a
 *             secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data
 *             files.</p>
 */
export interface HsmClientCertificate {
  __type?: "HsmClientCertificate";
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
  export const filterSensitiveLog = (obj: HsmClientCertificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmClientCertificate =>
    __isa(o, "HsmClientCertificate");
}

/**
 * <p>There is already an existing Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 */
export interface HsmClientCertificateAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "HsmClientCertificateAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace HsmClientCertificateAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: HsmClientCertificateAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmClientCertificateAlreadyExistsFault =>
    __isa(o, "HsmClientCertificateAlreadyExistsFault");
}

/**
 * <p></p>
 */
export interface HsmClientCertificateMessage {
  __type?: "HsmClientCertificateMessage";
  /**
   * <p>A list of the identifiers for one or more HSM client certificates used by Amazon Redshift
   *             clusters to store and retrieve database encryption keys in an HSM.</p>
   */
  HsmClientCertificates?: HsmClientCertificate[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace HsmClientCertificateMessage {
  export const filterSensitiveLog = (
    obj: HsmClientCertificateMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmClientCertificateMessage =>
    __isa(o, "HsmClientCertificateMessage");
}

/**
 * <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 */
export interface HsmClientCertificateNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "HsmClientCertificateNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace HsmClientCertificateNotFoundFault {
  export const filterSensitiveLog = (
    obj: HsmClientCertificateNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmClientCertificateNotFoundFault =>
    __isa(o, "HsmClientCertificateNotFoundFault");
}

/**
 * <p>The quota for HSM client certificates has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface HsmClientCertificateQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "HsmClientCertificateQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace HsmClientCertificateQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: HsmClientCertificateQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmClientCertificateQuotaExceededFault =>
    __isa(o, "HsmClientCertificateQuotaExceededFault");
}

/**
 * <p>Returns information about an HSM configuration, which is an object that describes
 *             to Amazon Redshift clusters the information they require to connect to an HSM where they can
 *             store database encryption keys.</p>
 */
export interface HsmConfiguration {
  __type?: "HsmConfiguration";
  /**
   * <p>A text description of the HSM configuration.</p>
   */
  Description?: string;

  /**
   * <p>The name of the Amazon Redshift HSM configuration.</p>
   */
  HsmConfigurationIdentifier?: string;

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
  export const filterSensitiveLog = (obj: HsmConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmConfiguration =>
    __isa(o, "HsmConfiguration");
}

/**
 * <p>There is already an existing Amazon Redshift HSM configuration with the specified
 *             identifier.</p>
 */
export interface HsmConfigurationAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "HsmConfigurationAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace HsmConfigurationAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: HsmConfigurationAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmConfigurationAlreadyExistsFault =>
    __isa(o, "HsmConfigurationAlreadyExistsFault");
}

/**
 * <p></p>
 */
export interface HsmConfigurationMessage {
  __type?: "HsmConfigurationMessage";
  /**
   * <p>A list of <code>HsmConfiguration</code> objects.</p>
   */
  HsmConfigurations?: HsmConfiguration[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace HsmConfigurationMessage {
  export const filterSensitiveLog = (obj: HsmConfigurationMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmConfigurationMessage =>
    __isa(o, "HsmConfigurationMessage");
}

/**
 * <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 */
export interface HsmConfigurationNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "HsmConfigurationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace HsmConfigurationNotFoundFault {
  export const filterSensitiveLog = (
    obj: HsmConfigurationNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmConfigurationNotFoundFault =>
    __isa(o, "HsmConfigurationNotFoundFault");
}

/**
 * <p>The quota for HSM configurations has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface HsmConfigurationQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "HsmConfigurationQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace HsmConfigurationQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: HsmConfigurationQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmConfigurationQuotaExceededFault =>
    __isa(o, "HsmConfigurationQuotaExceededFault");
}

/**
 * <p>Describes the status of changes to HSM settings.</p>
 */
export interface HsmStatus {
  __type?: "HsmStatus";
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
  export const filterSensitiveLog = (obj: HsmStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is HsmStatus => __isa(o, "HsmStatus");
}

/**
 * <p>The specified options are incompatible.</p>
 */
export interface IncompatibleOrderableOptions
  extends __SmithyException,
    $MetadataBearer {
  name: "IncompatibleOrderableOptions";
  $fault: "client";
  message?: string;
}

export namespace IncompatibleOrderableOptions {
  export const filterSensitiveLog = (
    obj: IncompatibleOrderableOptions
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IncompatibleOrderableOptions =>
    __isa(o, "IncompatibleOrderableOptions");
}

/**
 * <p>You have exceeded the allowed number of table restore requests. Wait for your
 *             current table restore requests to complete before making a new request.</p>
 */
export interface InProgressTableRestoreQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InProgressTableRestoreQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace InProgressTableRestoreQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: InProgressTableRestoreQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InProgressTableRestoreQuotaExceededFault =>
    __isa(o, "InProgressTableRestoreQuotaExceededFault");
}

/**
 * <p>The number of nodes specified exceeds the allotted capacity of the
 *             cluster.</p>
 */
export interface InsufficientClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientClusterCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientClusterCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientClusterCapacityFault =>
    __isa(o, "InsufficientClusterCapacityFault");
}

/**
 * <p>The cluster does not have read bucket or put object permissions on the S3 bucket
 *             specified when enabling logging.</p>
 */
export interface InsufficientS3BucketPolicyFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientS3BucketPolicyFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientS3BucketPolicyFault {
  export const filterSensitiveLog = (
    obj: InsufficientS3BucketPolicyFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientS3BucketPolicyFault =>
    __isa(o, "InsufficientS3BucketPolicyFault");
}

/**
 * <p>The cluster parameter group action can not be completed because another task is in
 *             progress that involves the parameter group. Wait a few moments and try the operation
 *             again.</p>
 */
export interface InvalidClusterParameterGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClusterParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterParameterGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidClusterParameterGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClusterParameterGroupStateFault =>
    __isa(o, "InvalidClusterParameterGroupStateFault");
}

/**
 * <p>The state of the cluster security group is not <code>available</code>. </p>
 */
export interface InvalidClusterSecurityGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClusterSecurityGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSecurityGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidClusterSecurityGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClusterSecurityGroupStateFault =>
    __isa(o, "InvalidClusterSecurityGroupStateFault");
}

/**
 * <p>The cluster snapshot schedule state is not valid.</p>
 */
export interface InvalidClusterSnapshotScheduleStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClusterSnapshotScheduleStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSnapshotScheduleStateFault {
  export const filterSensitiveLog = (
    obj: InvalidClusterSnapshotScheduleStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClusterSnapshotScheduleStateFault =>
    __isa(o, "InvalidClusterSnapshotScheduleStateFault");
}

/**
 * <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 */
export interface InvalidClusterSnapshotStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClusterSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSnapshotStateFault {
  export const filterSensitiveLog = (
    obj: InvalidClusterSnapshotStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClusterSnapshotStateFault =>
    __isa(o, "InvalidClusterSnapshotStateFault");
}

/**
 * <p>The specified cluster is not in the <code>available</code> state. </p>
 */
export interface InvalidClusterStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterStateFault {
  export const filterSensitiveLog = (obj: InvalidClusterStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClusterStateFault =>
    __isa(o, "InvalidClusterStateFault");
}

/**
 * <p>The cluster subnet group cannot be deleted because it is in use.</p>
 */
export interface InvalidClusterSubnetGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClusterSubnetGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSubnetGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidClusterSubnetGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClusterSubnetGroupStateFault =>
    __isa(o, "InvalidClusterSubnetGroupStateFault");
}

/**
 * <p>The state of the subnet is invalid.</p>
 */
export interface InvalidClusterSubnetStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClusterSubnetStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSubnetStateFault {
  export const filterSensitiveLog = (
    obj: InvalidClusterSubnetStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClusterSubnetStateFault =>
    __isa(o, "InvalidClusterSubnetStateFault");
}

/**
 * <p>The provided cluster track name is not valid.</p>
 */
export interface InvalidClusterTrackFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClusterTrackFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterTrackFault {
  export const filterSensitiveLog = (obj: InvalidClusterTrackFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidClusterTrackFault =>
    __isa(o, "InvalidClusterTrackFault");
}

/**
 * <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
 */
export interface InvalidElasticIpFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidElasticIpFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidElasticIpFault {
  export const filterSensitiveLog = (obj: InvalidElasticIpFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidElasticIpFault =>
    __isa(o, "InvalidElasticIpFault");
}

/**
 * <p>The specified HSM client certificate is not in the <code>available</code> state, or
 *             it is still in use by one or more Amazon Redshift clusters.</p>
 */
export interface InvalidHsmClientCertificateStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidHsmClientCertificateStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidHsmClientCertificateStateFault {
  export const filterSensitiveLog = (
    obj: InvalidHsmClientCertificateStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidHsmClientCertificateStateFault =>
    __isa(o, "InvalidHsmClientCertificateStateFault");
}

/**
 * <p>The specified HSM configuration is not in the <code>available</code> state, or it
 *             is still in use by one or more Amazon Redshift clusters.</p>
 */
export interface InvalidHsmConfigurationStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidHsmConfigurationStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidHsmConfigurationStateFault {
  export const filterSensitiveLog = (
    obj: InvalidHsmConfigurationStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidHsmConfigurationStateFault =>
    __isa(o, "InvalidHsmConfigurationStateFault");
}

/**
 * <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 */
export interface InvalidReservedNodeStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidReservedNodeStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidReservedNodeStateFault {
  export const filterSensitiveLog = (
    obj: InvalidReservedNodeStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidReservedNodeStateFault =>
    __isa(o, "InvalidReservedNodeStateFault");
}

/**
 * <p>The restore is invalid.</p>
 */
export interface InvalidRestoreFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRestoreFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreFault {
  export const filterSensitiveLog = (obj: InvalidRestoreFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRestoreFault =>
    __isa(o, "InvalidRestoreFault");
}

/**
 * <p>The retention period specified is either in the past or is not a valid value.</p>
 *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 */
export interface InvalidRetentionPeriodFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRetentionPeriodFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRetentionPeriodFault {
  export const filterSensitiveLog = (
    obj: InvalidRetentionPeriodFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRetentionPeriodFault =>
    __isa(o, "InvalidRetentionPeriodFault");
}

/**
 * <p>The S3 bucket name is invalid. For more information about naming rules, go to
 *                 <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
 *                 Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3)
 *             Developer Guide.</p>
 */
export interface InvalidS3BucketNameFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidS3BucketNameFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3BucketNameFault {
  export const filterSensitiveLog = (obj: InvalidS3BucketNameFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidS3BucketNameFault =>
    __isa(o, "InvalidS3BucketNameFault");
}

/**
 * <p>The string specified for the logging S3 key prefix does not comply with the
 *             documented constraints.</p>
 */
export interface InvalidS3KeyPrefixFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidS3KeyPrefixFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3KeyPrefixFault {
  export const filterSensitiveLog = (obj: InvalidS3KeyPrefixFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidS3KeyPrefixFault =>
    __isa(o, "InvalidS3KeyPrefixFault");
}

/**
 * <p>The scheduled action is not valid. </p>
 */
export interface InvalidScheduledActionFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidScheduledActionFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidScheduledActionFault {
  export const filterSensitiveLog = (
    obj: InvalidScheduledActionFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidScheduledActionFault =>
    __isa(o, "InvalidScheduledActionFault");
}

/**
 * <p>The schedule you submitted isn't valid.</p>
 */
export interface InvalidScheduleFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidScheduleFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidScheduleFault {
  export const filterSensitiveLog = (obj: InvalidScheduleFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidScheduleFault =>
    __isa(o, "InvalidScheduleFault");
}

/**
 * <p>The snapshot copy grant can't be deleted because it is used by one or more
 *             clusters.</p>
 */
export interface InvalidSnapshotCopyGrantStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSnapshotCopyGrantStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidSnapshotCopyGrantStateFault {
  export const filterSensitiveLog = (
    obj: InvalidSnapshotCopyGrantStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSnapshotCopyGrantStateFault =>
    __isa(o, "InvalidSnapshotCopyGrantStateFault");
}

/**
 * <p>The requested subnet is not valid, or not all of the subnets are in the same
 *             VPC.</p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubnet {
  export const filterSensitiveLog = (obj: InvalidSubnet): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSubnet => __isa(o, "InvalidSubnet");
}

/**
 * <p>The subscription request is invalid because it is a duplicate request. This
 *             subscription request is already in progress.</p>
 */
export interface InvalidSubscriptionStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSubscriptionStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubscriptionStateFault {
  export const filterSensitiveLog = (
    obj: InvalidSubscriptionStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSubscriptionStateFault =>
    __isa(o, "InvalidSubscriptionStateFault");
}

/**
 * <p>The value specified for the <code>sourceDatabaseName</code>,
 *                 <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a
 *             combination of these, doesn't exist in the snapshot.</p>
 */
export interface InvalidTableRestoreArgumentFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTableRestoreArgumentFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidTableRestoreArgumentFault {
  export const filterSensitiveLog = (
    obj: InvalidTableRestoreArgumentFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTableRestoreArgumentFault =>
    __isa(o, "InvalidTableRestoreArgumentFault");
}

/**
 * <p>The tag is invalid.</p>
 */
export interface InvalidTagFault extends __SmithyException, $MetadataBearer {
  name: "InvalidTagFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidTagFault {
  export const filterSensitiveLog = (obj: InvalidTagFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTagFault =>
    __isa(o, "InvalidTagFault");
}

/**
 * <p>The cluster subnet group does not cover all Availability Zones.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  export const filterSensitiveLog = (
    obj: InvalidVPCNetworkStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidVPCNetworkStateFault =>
    __isa(o, "InvalidVPCNetworkStateFault");
}

/**
 * <p>Describes an IP range used in a security group.</p>
 */
export interface IPRange {
  __type?: "IPRange";
  /**
   * <p>The IP range in Classless Inter-Domain Routing (CIDR) notation.</p>
   */
  CIDRIP?: string;

  /**
   * <p>The status of the IP range, for example, "authorized".</p>
   */
  Status?: string;

  /**
   * <p>The list of tags for the IP range.</p>
   */
  Tags?: Tag[];
}

export namespace IPRange {
  export const filterSensitiveLog = (obj: IPRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPRange => __isa(o, "IPRange");
}

/**
 * <p>The encryption key has exceeded its grant limit in AWS KMS.</p>
 */
export interface LimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "LimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededFault {
  export const filterSensitiveLog = (obj: LimitExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededFault =>
    __isa(o, "LimitExceededFault");
}

/**
 * <p>Describes the status of logging for a cluster.</p>
 */
export interface LoggingStatus {
  __type?: "LoggingStatus";
  /**
   * <p>The name of the S3 bucket where the log files are stored.</p>
   */
  BucketName?: string;

  /**
   * <p>The message indicating that logs failed to be delivered.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The last time when logs failed to be delivered.</p>
   */
  LastFailureTime?: Date;

  /**
   * <p>The last time that logs were delivered.</p>
   */
  LastSuccessfulDeliveryTime?: Date;

  /**
   * <p>
   *             <code>true</code> if logging is on, <code>false</code> if logging is off.</p>
   */
  LoggingEnabled?: boolean;

  /**
   * <p>The prefix applied to the log file names.</p>
   */
  S3KeyPrefix?: string;
}

export namespace LoggingStatus {
  export const filterSensitiveLog = (obj: LoggingStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoggingStatus => __isa(o, "LoggingStatus");
}

/**
 * <p>Defines a maintenance track that determines which Amazon Redshift version to apply
 *             during a maintenance window. If the value for <code>MaintenanceTrack</code> is
 *                 <code>current</code>, the cluster is updated to the most recently certified
 *             maintenance release. If the value is <code>trailing</code>, the cluster is updated to
 *             the previously certified maintenance release. </p>
 */
export interface MaintenanceTrack {
  __type?: "MaintenanceTrack";
  /**
   * <p>The version number for the cluster release.</p>
   */
  DatabaseVersion?: string;

  /**
   * <p>The name of the maintenance track. Possible values are <code>current</code> and
   *                 <code>trailing</code>.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>An array of <a>UpdateTarget</a> objects to update with the maintenance
   *             track. </p>
   */
  UpdateTargets?: UpdateTarget[];
}

export namespace MaintenanceTrack {
  export const filterSensitiveLog = (obj: MaintenanceTrack): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaintenanceTrack =>
    __isa(o, "MaintenanceTrack");
}

export enum Mode {
  HIGH_PERFORMANCE = "high-performance",
  STANDARD = "standard"
}

export interface ModifyClusterDbRevisionMessage {
  __type?: "ModifyClusterDbRevisionMessage";
  /**
   * <p>The unique identifier of a cluster whose database revision you want to modify. </p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the database revision. You can retrieve this value from the
   *             response to the <a>DescribeClusterDbRevisions</a> request.</p>
   */
  RevisionTarget: string | undefined;
}

export namespace ModifyClusterDbRevisionMessage {
  export const filterSensitiveLog = (
    obj: ModifyClusterDbRevisionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterDbRevisionMessage =>
    __isa(o, "ModifyClusterDbRevisionMessage");
}

export interface ModifyClusterDbRevisionResult {
  __type?: "ModifyClusterDbRevisionResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterDbRevisionResult {
  export const filterSensitiveLog = (
    obj: ModifyClusterDbRevisionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterDbRevisionResult =>
    __isa(o, "ModifyClusterDbRevisionResult");
}

/**
 * <p></p>
 */
export interface ModifyClusterIamRolesMessage {
  __type?: "ModifyClusterIamRolesMessage";
  /**
   * <p>Zero or more IAM roles to associate with the cluster. The roles must be in their
   *             Amazon Resource Name (ARN) format. You can associate up to 10 IAM roles with a single
   *             cluster in a single request.</p>
   */
  AddIamRoles?: string[];

  /**
   * <p>The unique identifier of the cluster for which you want to associate or
   *             disassociate IAM roles.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>Zero or more IAM roles in ARN format to disassociate from the cluster. You can
   *             disassociate up to 10 IAM roles from a single cluster in a single request.</p>
   */
  RemoveIamRoles?: string[];
}

export namespace ModifyClusterIamRolesMessage {
  export const filterSensitiveLog = (
    obj: ModifyClusterIamRolesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterIamRolesMessage =>
    __isa(o, "ModifyClusterIamRolesMessage");
}

export interface ModifyClusterIamRolesResult {
  __type?: "ModifyClusterIamRolesResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterIamRolesResult {
  export const filterSensitiveLog = (
    obj: ModifyClusterIamRolesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterIamRolesResult =>
    __isa(o, "ModifyClusterIamRolesResult");
}

export interface ModifyClusterMaintenanceMessage {
  __type?: "ModifyClusterMaintenanceMessage";
  /**
   * <p>A unique identifier for the cluster.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A boolean indicating whether to enable the deferred maintenance window. </p>
   */
  DeferMaintenance?: boolean;

  /**
   * <p>An integer indicating the duration of the maintenance window in days. If you specify a
   *             duration, you can't specify an end time. The duration must be 45 days or less.</p>
   */
  DeferMaintenanceDuration?: number;

  /**
   * <p>A timestamp indicating end time for the deferred maintenance window. If you specify an
   *             end time, you can't specify a duration.</p>
   */
  DeferMaintenanceEndTime?: Date;

  /**
   * <p>A unique identifier for the deferred maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p>A timestamp indicating the start time for the deferred maintenance window.</p>
   */
  DeferMaintenanceStartTime?: Date;
}

export namespace ModifyClusterMaintenanceMessage {
  export const filterSensitiveLog = (
    obj: ModifyClusterMaintenanceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterMaintenanceMessage =>
    __isa(o, "ModifyClusterMaintenanceMessage");
}

export interface ModifyClusterMaintenanceResult {
  __type?: "ModifyClusterMaintenanceResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterMaintenanceResult {
  export const filterSensitiveLog = (
    obj: ModifyClusterMaintenanceResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterMaintenanceResult =>
    __isa(o, "ModifyClusterMaintenanceResult");
}

/**
 * <p></p>
 */
export interface ModifyClusterMessage {
  __type?: "ModifyClusterMessage";
  /**
   * <p>If <code>true</code>, major version upgrades will be applied automatically to the
   *             cluster during the maintenance window. </p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *         <p>If you decrease the automated snapshot retention period from its current value,
   *             existing automated snapshots that fall outside of the new retention period will be
   *             immediately deleted.</p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints: Must be a value from 0 to 35.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The unique identifier of the cluster to be modified.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the cluster parameter group to apply to this cluster. This change is
   *             applied only after the cluster is rebooted. To reboot a cluster use <a>RebootCluster</a>. </p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints: The cluster parameter group must be in the same parameter group family
   *             that matches the cluster version.</p>
   */
  ClusterParameterGroupName?: string;

  /**
   * <p>A list of cluster security groups to be authorized on this cluster. This change is
   *             asynchronously applied as soon as possible.</p>
   *         <p>Security groups currently associated with the cluster, and not in the list of
   *             groups to apply, will be revoked from the cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  ClusterSecurityGroups?: string[];

  /**
   * <p>The new cluster type.</p>
   *         <p>When you submit your cluster resize request, your existing cluster goes into a
   *             read-only mode. After Amazon Redshift provisions a new cluster based on your resize
   *             requirements, there will be outage for a period while the old cluster is deleted and
   *             your connection is switched to the new cluster. You can use <a>DescribeResize</a> to track the progress of the resize request. </p>
   *         <p>Valid Values: <code> multi-node | single-node </code>
   *         </p>
   */
  ClusterType?: string;

  /**
   * <p>The new version number of the Amazon Redshift engine to upgrade to.</p>
   *         <p>For major version upgrades, if a non-default cluster parameter group is currently
   *             in use, a new cluster parameter group in the cluster parameter group family for the new
   *             version must be specified. The new cluster parameter group can be the default for that
   *             cluster parameter group family.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *         <p>Example: <code>1.0</code>
   *         </p>
   */
  ClusterVersion?: string;

  /**
   * <p>The Elastic IP (EIP) address for the cluster.</p>
   *         <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
   *             through an Internet gateway. For more information about provisioning clusters in
   *             EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported
   *                 Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
   */
  ElasticIp?: string;

  /**
   * <p>Indicates whether the cluster is encrypted. If the value is encrypted (true) and you
   *             provide a value for the <code>KmsKeyId</code> parameter, we encrypt the cluster
   *             with the provided <code>KmsKeyId</code>. If you don't provide a <code>KmsKeyId</code>,
   *             we encrypt with the default key. In the China region we use legacy encryption
   *             if you specify that the cluster is encrypted.</p>
   *             <p>If the value is not encrypted (false), then the cluster is decrypted. </p>
   */
  Encrypted?: boolean;

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
   * <p>The AWS Key Management Service (KMS) key ID of the encryption key that you want to use
   *             to encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name for the maintenance track that you want to assign for the cluster. This name
   *             change is asynchronous. The new track name stays in the
   *                 <code>PendingModifiedValues</code> for the cluster until the next maintenance
   *             window. When the maintenance track changes, the cluster is switched to the latest
   *             cluster release available for the maintenance track. At this point, the maintenance
   *             track name is applied.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The default for number of days that a newly created manual snapshot is retained. If
   *             the value is -1, the manual snapshot is retained indefinitely. This value doesn't
   *             retroactively change the retention periods of existing manual snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>The default value is -1.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The new password for the cluster master user. This change is asynchronously applied
   *             as soon as possible. Between the time of the request and the completion of the request,
   *             the <code>MasterUserPassword</code> element exists in the
   *                 <code>PendingModifiedValues</code> element of the operation response. </p>
   *         <note>
   *             <p>Operations never return the password, so this operation provides a way to
   *                 regain access to the master user account for a cluster if the password is
   *                 lost.</p>
   *         </note>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be between 8 and 64 characters in length.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain at least one uppercase letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain one number.</p>
   *             </li>
   *             <li>
   *                 <p>Can be any printable ASCII character (ASCII code 33 to 126) except '
   *                     (single quote), " (double quote), \, /, @, or space.</p>
   *             </li>
   *          </ul>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new identifier for the cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Alphabetic characters must be lowercase.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all clusters within an AWS account.</p>
   *             </li>
   *          </ul>
   *
   *             <p>Example: <code>examplecluster</code>
   *         </p>
   */
  NewClusterIdentifier?: string;

  /**
   * <p>The new node type of the cluster. If you specify a new node type, you must also
   *             specify the number of nodes parameter.</p>
   *         <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   *         <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> |
   *             <code>dc1.large</code> | <code>dc1.8xlarge</code> |
   *             <code>dc2.large</code> | <code>dc2.8xlarge</code> |
   *             <code>ra3.16xlarge</code>
   *          </p>
   */
  NodeType?: string;

  /**
   * <p>The new number of nodes of the cluster. If you specify a new number of nodes, you
   *             must also specify the node type parameter.</p>
   *         <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   *         <p>Valid Values: Integer greater than <code>0</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, if
   *             necessary. If system maintenance is necessary during the window, it may result in an
   *             outage.</p>
   *         <p>This maintenance window change is made immediately. If the new maintenance window
   *             indicates the current time, there must be at least 120 minutes between the current time
   *             and end of the window in order to ensure that pending changes are applied.</p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Format: ddd:hh24:mi-ddd:hh24:mi, for example
   *             <code>wed:07:30-wed:08:00</code>.</p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Must be at least 30 minutes.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. Only
   *             clusters in VPCs can be set to be publicly available.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A list of virtual private cloud (VPC) security groups to be associated with the
   *             cluster. This change is asynchronously applied as soon as possible.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace ModifyClusterMessage {
  export const filterSensitiveLog = (obj: ModifyClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterMessage =>
    __isa(o, "ModifyClusterMessage");
}

/**
 * <p></p>
 */
export interface ModifyClusterParameterGroupMessage {
  __type?: "ModifyClusterParameterGroupMessage";
  /**
   * <p>The name of the parameter group to be modified.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of parameters to be modified. A maximum of 20 parameters can be modified
   *             in a single request.</p>
   *         <p>For each parameter to be modified, you must supply at least the parameter name and
   *             parameter value; other name-value pairs of the parameter are optional.</p>
   *         <p>For the workload management (WLM) configuration, you must supply all the name-value
   *             pairs in the wlm_json_configuration parameter.</p>
   */
  Parameters: Parameter[] | undefined;
}

export namespace ModifyClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ModifyClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterParameterGroupMessage =>
    __isa(o, "ModifyClusterParameterGroupMessage");
}

export interface ModifyClusterResult {
  __type?: "ModifyClusterResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterResult {
  export const filterSensitiveLog = (obj: ModifyClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterResult =>
    __isa(o, "ModifyClusterResult");
}

export interface ModifyClusterSnapshotMessage {
  __type?: "ModifyClusterSnapshotMessage";
  /**
   * <p>A Boolean option to override an exception if the retention period has already
   *             passed.</p>
   */
  Force?: boolean;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely.</p>
   *         <p>If the manual snapshot falls outside of the new retention period, you can specify the
   *             force option to immediately delete the snapshot.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The identifier of the snapshot whose setting you want to modify.</p>
   */
  SnapshotIdentifier: string | undefined;
}

export namespace ModifyClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: ModifyClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterSnapshotMessage =>
    __isa(o, "ModifyClusterSnapshotMessage");
}

export interface ModifyClusterSnapshotResult {
  __type?: "ModifyClusterSnapshotResult";
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace ModifyClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: ModifyClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterSnapshotResult =>
    __isa(o, "ModifyClusterSnapshotResult");
}

export interface ModifyClusterSnapshotScheduleMessage {
  __type?: "ModifyClusterSnapshotScheduleMessage";
  /**
   * <p>A unique identifier for the cluster whose snapshot schedule you want to modify.
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A boolean to indicate whether to remove the assoiciation between the cluster and the
   *             schedule.</p>
   */
  DisassociateSchedule?: boolean;

  /**
   * <p>A unique alphanumeric identifier for the schedule that you want to associate with the
   *             cluster.</p>
   */
  ScheduleIdentifier?: string;
}

export namespace ModifyClusterSnapshotScheduleMessage {
  export const filterSensitiveLog = (
    obj: ModifyClusterSnapshotScheduleMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterSnapshotScheduleMessage =>
    __isa(o, "ModifyClusterSnapshotScheduleMessage");
}

/**
 * <p></p>
 */
export interface ModifyClusterSubnetGroupMessage {
  __type?: "ModifyClusterSubnetGroupMessage";
  /**
   * <p>The name of the subnet group to be modified.</p>
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * <p>A text description of the subnet group to be modified.</p>
   */
  Description?: string;

  /**
   * <p>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
   *             request.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace ModifyClusterSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: ModifyClusterSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterSubnetGroupMessage =>
    __isa(o, "ModifyClusterSubnetGroupMessage");
}

export interface ModifyClusterSubnetGroupResult {
  __type?: "ModifyClusterSubnetGroupResult";
  /**
   * <p>Describes a subnet group.</p>
   */
  ClusterSubnetGroup?: ClusterSubnetGroup;
}

export namespace ModifyClusterSubnetGroupResult {
  export const filterSensitiveLog = (
    obj: ModifyClusterSubnetGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClusterSubnetGroupResult =>
    __isa(o, "ModifyClusterSubnetGroupResult");
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  __type?: "ModifyEventSubscriptionMessage";
  /**
   * <p>A Boolean value indicating if the subscription is enabled. <code>true</code>
   *             indicates the subscription is enabled </p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies the Amazon Redshift event categories to be published by the event notification
   *             subscription.</p>
   *         <p>Values: configuration, management, monitoring, security</p>
   */
  EventCategories?: string[];

  /**
   * <p>Specifies the Amazon Redshift event severity to be published by the event notification
   *             subscription.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to be used by the event
   *             notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects
   *             must be of the same type as was specified in the source type parameter. The event
   *             subscription will return only events generated by the specified objects. If not
   *             specified, then events are returned for all objects within the source type
   *             specified.</p>
   *         <p>Example: my-cluster-1, my-cluster-2</p>
   *         <p>Example: my-snapshot-20131010</p>
   */
  SourceIds?: string[];

  /**
   * <p>The type of source that will be generating the events. For example, if you want to
   *             be notified of events generated by a cluster, you would set this parameter to cluster.
   *             If this value is not specified, events are returned for all Amazon Redshift objects in your
   *             AWS account. You must specify a source type in order to specify source IDs.</p>
   *         <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
   */
  SourceType?: string;

  /**
   * <p>The name of the modified Amazon Redshift event notification subscription.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace ModifyEventSubscriptionMessage {
  export const filterSensitiveLog = (
    obj: ModifyEventSubscriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyEventSubscriptionMessage =>
    __isa(o, "ModifyEventSubscriptionMessage");
}

export interface ModifyEventSubscriptionResult {
  __type?: "ModifyEventSubscriptionResult";
  /**
   * <p>Describes event subscriptions.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResult {
  export const filterSensitiveLog = (
    obj: ModifyEventSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyEventSubscriptionResult =>
    __isa(o, "ModifyEventSubscriptionResult");
}

export interface ModifyScheduledActionMessage {
  __type?: "ModifyScheduledActionMessage";
  /**
   * <p>A modified enable flag of the scheduled action. If true, the scheduled action is active. If false, the scheduled action is disabled. </p>
   */
  Enable?: boolean;

  /**
   * <p>A modified end time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  EndTime?: Date;

  /**
   * <p>A different IAM role to assume to run the target action.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  IamRole?: string;

  /**
   * <p>A modified schedule in either <code>at( )</code> or <code>cron( )</code> format.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  Schedule?: string;

  /**
   * <p>A modified description of the scheduled action. </p>
   */
  ScheduledActionDescription?: string;

  /**
   * <p>The name of the scheduled action to modify. </p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>A modified start time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  StartTime?: Date;

  /**
   * <p>A modified JSON format of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  TargetAction?: ScheduledActionType;
}

export namespace ModifyScheduledActionMessage {
  export const filterSensitiveLog = (
    obj: ModifyScheduledActionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyScheduledActionMessage =>
    __isa(o, "ModifyScheduledActionMessage");
}

/**
 * <p></p>
 */
export interface ModifySnapshotCopyRetentionPeriodMessage {
  __type?: "ModifySnapshotCopyRetentionPeriodMessage";
  /**
   * <p>The unique identifier of the cluster for which you want to change the retention
   *             period for either automated or manual snapshots that are copied to a destination AWS
   *             Region.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>Indicates whether to apply the snapshot retention period to newly copied manual
   *             snapshots instead of automated snapshots.</p>
   */
  Manual?: boolean;

  /**
   * <p>The number of days to retain automated snapshots in the destination AWS Region
   *             after they are copied from the source AWS Region.</p>
   *         <p>By default, this only changes the retention period of copied automated snapshots. </p>
   *         <p>If you decrease the retention period for automated snapshots that are copied to a
   *             destination AWS Region, Amazon Redshift deletes any existing automated snapshots that were
   *             copied to the destination AWS Region and that fall outside of the new retention
   *             period.</p>
   *         <p>Constraints: Must be at least 1 and no more than 35 for automated snapshots. </p>
   *         <p>If you specify the <code>manual</code> option, only newly copied manual snapshots will
   *             have the new retention period. </p>
   *         <p>If you specify the value of -1 newly copied manual snapshots are retained
   *             indefinitely.</p>
   *         <p>Constraints: The number of days must be either -1 or an integer between 1 and 3,653
   *             for manual snapshots.</p>
   */
  RetentionPeriod: number | undefined;
}

export namespace ModifySnapshotCopyRetentionPeriodMessage {
  export const filterSensitiveLog = (
    obj: ModifySnapshotCopyRetentionPeriodMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifySnapshotCopyRetentionPeriodMessage =>
    __isa(o, "ModifySnapshotCopyRetentionPeriodMessage");
}

export interface ModifySnapshotCopyRetentionPeriodResult {
  __type?: "ModifySnapshotCopyRetentionPeriodResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifySnapshotCopyRetentionPeriodResult {
  export const filterSensitiveLog = (
    obj: ModifySnapshotCopyRetentionPeriodResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifySnapshotCopyRetentionPeriodResult =>
    __isa(o, "ModifySnapshotCopyRetentionPeriodResult");
}

export interface ModifySnapshotScheduleMessage {
  __type?: "ModifySnapshotScheduleMessage";
  /**
   * <p>An updated list of schedule definitions. A schedule definition is made up of schedule
   *             expressions, for example, "cron(30 12 *)" or "rate(12 hours)".</p>
   */
  ScheduleDefinitions: string[] | undefined;

  /**
   * <p>A unique alphanumeric identifier of the schedule to modify.</p>
   */
  ScheduleIdentifier: string | undefined;
}

export namespace ModifySnapshotScheduleMessage {
  export const filterSensitiveLog = (
    obj: ModifySnapshotScheduleMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifySnapshotScheduleMessage =>
    __isa(o, "ModifySnapshotScheduleMessage");
}

/**
 * <p>A list of node configurations.</p>
 */
export interface NodeConfigurationOption {
  __type?: "NodeConfigurationOption";
  /**
   * <p>The estimated disk utilizaton percentage.</p>
   */
  EstimatedDiskUtilizationPercent?: number;

  /**
   * <p>The category of the node configuration recommendation.</p>
   */
  Mode?: Mode | string;

  /**
   * <p>The node type, such as, "ds2.8xlarge".</p>
   */
  NodeType?: string;

  /**
   * <p>The number of nodes.</p>
   */
  NumberOfNodes?: number;
}

export namespace NodeConfigurationOption {
  export const filterSensitiveLog = (obj: NodeConfigurationOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeConfigurationOption =>
    __isa(o, "NodeConfigurationOption");
}

/**
 * <p>A set of elements to filter the returned node configurations.</p>
 */
export interface NodeConfigurationOptionsFilter {
  __type?: "NodeConfigurationOptionsFilter";
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
  export const filterSensitiveLog = (
    obj: NodeConfigurationOptionsFilter
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeConfigurationOptionsFilter =>
    __isa(o, "NodeConfigurationOptionsFilter");
}

export enum NodeConfigurationOptionsFilterName {
  ESTIMATED_DISK_UTILIZATION_PERCENT = "EstimatedDiskUtilizationPercent",
  MODE = "Mode",
  NODE_TYPE = "NodeType",
  NUM_NODES = "NumberOfNodes"
}

export interface NodeConfigurationOptionsMessage {
  __type?: "NodeConfigurationOptionsMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of valid node configurations.</p>
   */
  NodeConfigurationOptionList?: NodeConfigurationOption[];
}

export namespace NodeConfigurationOptionsMessage {
  export const filterSensitiveLog = (
    obj: NodeConfigurationOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeConfigurationOptionsMessage =>
    __isa(o, "NodeConfigurationOptionsMessage");
}

/**
 * <p>The operation would exceed the number of nodes allowed for a cluster.</p>
 */
export interface NumberOfNodesPerClusterLimitExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "NumberOfNodesPerClusterLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NumberOfNodesPerClusterLimitExceededFault {
  export const filterSensitiveLog = (
    obj: NumberOfNodesPerClusterLimitExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NumberOfNodesPerClusterLimitExceededFault =>
    __isa(o, "NumberOfNodesPerClusterLimitExceededFault");
}

/**
 * <p>The operation would exceed the number of nodes allotted to the account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface NumberOfNodesQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "NumberOfNodesQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NumberOfNodesQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: NumberOfNodesQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NumberOfNodesQuotaExceededFault =>
    __isa(o, "NumberOfNodesQuotaExceededFault");
}

export enum OperatorType {
  BETWEEN = "between",
  EQ = "eq",
  GE = "ge",
  GT = "gt",
  IN = "in",
  LE = "le",
  LT = "lt"
}

/**
 * <p>Describes an orderable cluster option.</p>
 */
export interface OrderableClusterOption {
  __type?: "OrderableClusterOption";
  /**
   * <p>A list of availability zones for the orderable cluster.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The cluster type, for example <code>multi-node</code>. </p>
   */
  ClusterType?: string;

  /**
   * <p>The version of the orderable cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The node type for the orderable cluster.</p>
   */
  NodeType?: string;
}

export namespace OrderableClusterOption {
  export const filterSensitiveLog = (obj: OrderableClusterOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrderableClusterOption =>
    __isa(o, "OrderableClusterOption");
}

/**
 * <p>Contains the output from the <a>DescribeOrderableClusterOptions</a>
 *             action. </p>
 */
export interface OrderableClusterOptionsMessage {
  __type?: "OrderableClusterOptionsMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>An <code>OrderableClusterOption</code> structure containing information about
   *             orderable options for the cluster.</p>
   */
  OrderableClusterOptions?: OrderableClusterOption[];
}

export namespace OrderableClusterOptionsMessage {
  export const filterSensitiveLog = (
    obj: OrderableClusterOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrderableClusterOptionsMessage =>
    __isa(o, "OrderableClusterOptionsMessage");
}

/**
 * <p>Describes a parameter in a cluster parameter group.</p>
 */
export interface Parameter {
  __type?: "Parameter";
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
   * <p>The data type of the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>If <code>true</code>, the parameter can be modified. Some parameters have security
   *             or operational implications that prevent them from being changed. </p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>The source of the parameter value, such as "engine-default" or "user".</p>
   */
  Source?: string;
}

export namespace Parameter {
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Parameter => __isa(o, "Parameter");
}

export type ParameterApplyType = "dynamic" | "static";

/**
 * <p>Describes cluster attributes that are in a pending state. A change to one or more
 *             the attributes was requested and is in progress or will be applied.</p>
 */
export interface PendingModifiedValues {
  __type?: "PendingModifiedValues";
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
   * <p>The pending or in-progress change of the cluster type.</p>
   */
  ClusterType?: string;

  /**
   * <p>The pending or in-progress change of the service version.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The encryption type for a cluster. Possible values are: KMS and None. For the China
   *             region the possible values are None, and Legacy. </p>
   */
  EncryptionType?: string;

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
   * <p>The pending or in-progress change of the master user password for the
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
   * <p>The pending or in-progress change of the ability to connect to the cluster from the
   *             public network.</p>
   */
  PubliclyAccessible?: boolean;
}

export namespace PendingModifiedValues {
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingModifiedValues =>
    __isa(o, "PendingModifiedValues");
}

/**
 * <p></p>
 */
export interface PurchaseReservedNodeOfferingMessage {
  __type?: "PurchaseReservedNodeOfferingMessage";
  /**
   * <p>The number of reserved nodes that you want to purchase.</p>
   *         <p>Default: <code>1</code>
   *         </p>
   */
  NodeCount?: number;

  /**
   * <p>The unique identifier of the reserved node offering you want to purchase.</p>
   */
  ReservedNodeOfferingId: string | undefined;
}

export namespace PurchaseReservedNodeOfferingMessage {
  export const filterSensitiveLog = (
    obj: PurchaseReservedNodeOfferingMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PurchaseReservedNodeOfferingMessage =>
    __isa(o, "PurchaseReservedNodeOfferingMessage");
}

export interface PurchaseReservedNodeOfferingResult {
  __type?: "PurchaseReservedNodeOfferingResult";
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   */
  ReservedNode?: ReservedNode;
}

export namespace PurchaseReservedNodeOfferingResult {
  export const filterSensitiveLog = (
    obj: PurchaseReservedNodeOfferingResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PurchaseReservedNodeOfferingResult =>
    __isa(o, "PurchaseReservedNodeOfferingResult");
}

/**
 * <p></p>
 */
export interface RebootClusterMessage {
  __type?: "RebootClusterMessage";
  /**
   * <p>The cluster identifier.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace RebootClusterMessage {
  export const filterSensitiveLog = (obj: RebootClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootClusterMessage =>
    __isa(o, "RebootClusterMessage");
}

export interface RebootClusterResult {
  __type?: "RebootClusterResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RebootClusterResult {
  export const filterSensitiveLog = (obj: RebootClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootClusterResult =>
    __isa(o, "RebootClusterResult");
}

/**
 * <p>Describes a recurring charge.</p>
 */
export interface RecurringCharge {
  __type?: "RecurringCharge";
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
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecurringCharge =>
    __isa(o, "RecurringCharge");
}

/**
 * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
 *             offerings. </p>
 */
export interface ReservedNode {
  __type?: "ReservedNode";
  /**
   * <p>The currency code for the reserved cluster.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The duration of the node reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed cost Amazon Redshift charges you for this reserved node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The number of reserved compute nodes.</p>
   */
  NodeCount?: number;

  /**
   * <p>The node type of the reserved node.</p>
   */
  NodeType?: string;

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
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier for the reserved node offering.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p></p>
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | string;

  /**
   * <p>The time the reservation started. You purchase a reserved node offering for a
   *             duration. This is the start time of that duration.</p>
   */
  StartTime?: Date;

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
   * <p>The hourly rate Amazon Redshift charges you for this reserved node.</p>
   */
  UsagePrice?: number;
}

export namespace ReservedNode {
  export const filterSensitiveLog = (obj: ReservedNode): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNode => __isa(o, "ReservedNode");
}

/**
 * <p>User already has a reservation with the given identifier.</p>
 */
export interface ReservedNodeAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedNodeAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ReservedNodeAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNodeAlreadyExistsFault =>
    __isa(o, "ReservedNodeAlreadyExistsFault");
}

/**
 * <p>Indicates that the reserved node has already been exchanged.</p>
 */
export interface ReservedNodeAlreadyMigratedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedNodeAlreadyMigratedFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeAlreadyMigratedFault {
  export const filterSensitiveLog = (
    obj: ReservedNodeAlreadyMigratedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNodeAlreadyMigratedFault =>
    __isa(o, "ReservedNodeAlreadyMigratedFault");
}

/**
 * <p>The specified reserved compute node not found.</p>
 */
export interface ReservedNodeNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedNodeNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeNotFoundFault {
  export const filterSensitiveLog = (obj: ReservedNodeNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNodeNotFoundFault =>
    __isa(o, "ReservedNodeNotFoundFault");
}

/**
 * <p>Describes a reserved node offering.</p>
 */
export interface ReservedNodeOffering {
  __type?: "ReservedNodeOffering";
  /**
   * <p>The currency code for the compute nodes offering.</p>
   */
  CurrencyCode?: string;

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
   * <p>The node type offered by the reserved node offering.</p>
   */
  NodeType?: string;

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
   * <p>The offering identifier.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p></p>
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | string;

  /**
   * <p>The rate you are charged for each hour the cluster that is using the offering is
   *             running.</p>
   */
  UsagePrice?: number;
}

export namespace ReservedNodeOffering {
  export const filterSensitiveLog = (obj: ReservedNodeOffering): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNodeOffering =>
    __isa(o, "ReservedNodeOffering");
}

/**
 * <p>Specified offering does not exist.</p>
 */
export interface ReservedNodeOfferingNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedNodeOfferingNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeOfferingNotFoundFault {
  export const filterSensitiveLog = (
    obj: ReservedNodeOfferingNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNodeOfferingNotFoundFault =>
    __isa(o, "ReservedNodeOfferingNotFoundFault");
}

/**
 * <p></p>
 */
export interface ReservedNodeOfferingsMessage {
  __type?: "ReservedNodeOfferingsMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>ReservedNodeOffering</code> objects.</p>
   */
  ReservedNodeOfferings?: ReservedNodeOffering[];
}

export namespace ReservedNodeOfferingsMessage {
  export const filterSensitiveLog = (
    obj: ReservedNodeOfferingsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNodeOfferingsMessage =>
    __isa(o, "ReservedNodeOfferingsMessage");
}

export type ReservedNodeOfferingType = "Regular" | "Upgradable";

/**
 * <p>Request would exceed the user's compute node quota.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ReservedNodeQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedNodeQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ReservedNodeQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNodeQuotaExceededFault =>
    __isa(o, "ReservedNodeQuotaExceededFault");
}

/**
 * <p></p>
 */
export interface ReservedNodesMessage {
  __type?: "ReservedNodesMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>The list of <code>ReservedNode</code> objects.</p>
   */
  ReservedNodes?: ReservedNode[];
}

export namespace ReservedNodesMessage {
  export const filterSensitiveLog = (obj: ReservedNodesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedNodesMessage =>
    __isa(o, "ReservedNodesMessage");
}

/**
 * <p></p>
 */
export interface ResetClusterParameterGroupMessage {
  __type?: "ResetClusterParameterGroupMessage";
  /**
   * <p>The name of the cluster parameter group to be reset.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of names of parameters to be reset. If
   *                 <i>ResetAllParameters</i> option is not used, then at least one
   *             parameter name must be supplied. </p>
   *         <p>Constraints: A maximum of 20 parameters can be reset in a single request.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>If <code>true</code>, all parameters in the specified parameter group will be reset
   *             to their default values. </p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  ResetAllParameters?: boolean;
}

export namespace ResetClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ResetClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetClusterParameterGroupMessage =>
    __isa(o, "ResetClusterParameterGroupMessage");
}

export interface ResizeClusterMessage {
  __type?: "ResizeClusterMessage";
  /**
   * <p>A boolean value indicating whether the resize operation is using the classic resize
   *             process. If you don't provide this parameter or set the value to
   *             <code>false</code>, the resize type is elastic. </p>
   */
  Classic?: boolean;

  /**
   * <p>The unique identifier for the cluster to resize.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster type for the specified cluster.</p>
   */
  ClusterType?: string;

  /**
   * <p>The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.</p>
   */
  NodeType?: string;

  /**
   * <p>The new number of nodes for the cluster.</p>
   */
  NumberOfNodes: number | undefined;
}

export namespace ResizeClusterMessage {
  export const filterSensitiveLog = (obj: ResizeClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResizeClusterMessage =>
    __isa(o, "ResizeClusterMessage");
}

export interface ResizeClusterResult {
  __type?: "ResizeClusterResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ResizeClusterResult {
  export const filterSensitiveLog = (obj: ResizeClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResizeClusterResult =>
    __isa(o, "ResizeClusterResult");
}

/**
 * <p>Describes a resize operation.</p>
 */
export interface ResizeInfo {
  __type?: "ResizeInfo";
  /**
   * <p>A boolean value indicating if the resize operation can be cancelled.</p>
   */
  AllowCancelResize?: boolean;

  /**
   * <p>Returns the value <code>ClassicResize</code>.</p>
   */
  ResizeType?: string;
}

export namespace ResizeInfo {
  export const filterSensitiveLog = (obj: ResizeInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResizeInfo => __isa(o, "ResizeInfo");
}

/**
 * <p>A resize operation for the specified cluster is not found.</p>
 */
export interface ResizeNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ResizeNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ResizeNotFoundFault {
  export const filterSensitiveLog = (obj: ResizeNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResizeNotFoundFault =>
    __isa(o, "ResizeNotFoundFault");
}

/**
 * <p>Describes the result of a cluster resize operation.</p>
 */
export interface ResizeProgressMessage {
  __type?: "ResizeProgressMessage";
  /**
   * <p>The average rate of the resize operation over the last few minutes, measured in
   *             megabytes per second. After the resize operation completes, this value shows the average
   *             rate of the entire resize operation.</p>
   */
  AvgResizeRateInMegaBytesPerSecond?: number;

  /**
   * <p>The percent of data transferred from source cluster to target cluster.</p>
   */
  DataTransferProgressPercent?: number;

  /**
   * <p>The amount of seconds that have elapsed since the resize operation began. After the
   *             resize operation completes, this value shows the total actual time, in seconds, for the
   *             resize operation.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimated time remaining, in seconds, until the resize operation is complete.
   *             This value is calculated based on the average resize rate and the estimated amount of
   *             data remaining to be processed. Once the resize operation is complete, this value will
   *             be 0.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>The names of tables that have been completely imported .</p>
   *         <p>Valid Values: List of table names.</p>
   */
  ImportTablesCompleted?: string[];

  /**
   * <p>The names of tables that are being currently imported.</p>
   *         <p>Valid Values: List of table names.</p>
   */
  ImportTablesInProgress?: string[];

  /**
   * <p>The names of tables that have not been yet imported.</p>
   *         <p>Valid Values: List of table names</p>
   */
  ImportTablesNotStarted?: string[];

  /**
   * <p>An optional string to provide additional details about the resize action.</p>
   */
  Message?: string;

  /**
   * <p>While the resize operation is in progress, this value shows the current amount of
   *             data, in megabytes, that has been processed so far. When the resize operation is
   *             complete, this value shows the total amount of data, in megabytes, on the cluster, which
   *             may be more or less than TotalResizeDataInMegaBytes (the estimated total amount of data
   *             before resize).</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>An enum with possible values of <code>ClassicResize</code> and
   *                 <code>ElasticResize</code>. These values describe the type of resize operation being
   *             performed. </p>
   */
  ResizeType?: string;

  /**
   * <p>The status of the resize operation.</p>
   *         <p>Valid Values: <code>NONE</code> | <code>IN_PROGRESS</code> | <code>FAILED</code> |
   *                 <code>SUCCEEDED</code> | <code>CANCELLING</code>
   *         </p>
   */
  Status?: string;

  /**
   * <p>The cluster type after the resize operation is complete.</p>
   *         <p>Valid Values: <code>multi-node</code> | <code>single-node</code>
   *         </p>
   */
  TargetClusterType?: string;

  /**
   * <p>The type of encryption for the cluster after the resize is complete.</p>
   *         <p>Possible values are <code>KMS</code> and <code>None</code>. In the China region
   *             possible values are: <code>Legacy</code> and <code>None</code>.</p>
   */
  TargetEncryptionType?: string;

  /**
   * <p>The node type that the cluster will have after the resize operation is
   *             complete.</p>
   */
  TargetNodeType?: string;

  /**
   * <p>The number of nodes that the cluster will have after the resize operation is
   *             complete.</p>
   */
  TargetNumberOfNodes?: number;

  /**
   * <p>The estimated total amount of data, in megabytes, on the cluster before the resize
   *             operation began.</p>
   */
  TotalResizeDataInMegaBytes?: number;
}

export namespace ResizeProgressMessage {
  export const filterSensitiveLog = (obj: ResizeProgressMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResizeProgressMessage =>
    __isa(o, "ResizeProgressMessage");
}

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundFault {
  export const filterSensitiveLog = (obj: ResourceNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundFault =>
    __isa(o, "ResourceNotFoundFault");
}

/**
 * <p></p>
 */
export interface RestoreFromClusterSnapshotMessage {
  __type?: "RestoreFromClusterSnapshotMessage";
  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>If <code>true</code>, major version upgrades can be applied during the maintenance
   *             window to the Amazon Redshift engine that is running on the cluster. </p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *         <p>Default: The value selected for the cluster from which the snapshot was
   *             taken.</p>
   *         <p>Constraints: Must be a value from 0 to 35.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The Amazon EC2 Availability Zone in which to restore the cluster.</p>
   *         <p>Default: A random, system-chosen Availability Zone.</p>
   *         <p>Example: <code>us-east-2a</code>
   *         </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The identifier of the cluster that will be created from restoring the
   *             snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Alphabetic characters must be lowercase.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all clusters within an AWS account.</p>
   *             </li>
   *          </ul>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the parameter group to be associated with this cluster.</p>
   *         <p>Default: The default Amazon Redshift cluster parameter group. For information about the
   *             default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon
   *                 Redshift Parameter Groups</a>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ClusterParameterGroupName?: string;

  /**
   * <p>A list of security groups to be associated with this cluster.</p>
   *         <p>Default: The default cluster security group for Amazon Redshift.</p>
   *         <p>Cluster security groups only apply to clusters outside of VPCs.</p>
   */
  ClusterSecurityGroups?: string[];

  /**
   * <p>The name of the subnet group where you want to cluster restored.</p>
   *         <p>A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must
   *             provide subnet group name where you want the cluster restored.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The elastic IP (EIP) address for the cluster.</p>
   */
  ElasticIp?: string;

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
   * <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other AWS services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. You can supply up to 10 IAM roles in a single
   *             request.</p>
   *         <p>A cluster can have up to 10 IAM roles associated at any time.</p>
   */
  IamRoles?: string[];

  /**
   * <p>The AWS Key Management Service (KMS) key ID of the encryption key that you want to
   *             use to encrypt data in the cluster that you restore from a shared snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the maintenance track for the restored cluster. When you take a snapshot,
   *             the snapshot inherits the <code>MaintenanceTrack</code> value from the cluster. The
   *             snapshot might be on a different track than the cluster that was the source for the
   *             snapshot. For example, suppose that you take a snapshot of a cluster that is on the
   *             current track and then change the cluster to be on the trailing track. In this case, the
   *             snapshot and the source cluster are on different tracks.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the
   *             snapshot is retained indefinitely. This setting doesn't change the retention period
   *             of existing snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The node type that the restored cluster will be provisioned with.</p>
   *         <p>Default: The node type of the cluster from which the snapshot was taken. You can
   *             modify this if you are using any DS node type. In that case, you can choose to restore
   *             into another DS node type of the same size. For example, you can restore ds1.8xlarge
   *             into ds2.8xlarge, or ds1.xlarge into ds2.xlarge. If you have a DC instance type, you
   *             must restore into that same instance type and size. In other words, you can only restore
   *             a dc1.large instance type into another dc1.large instance type or dc2.large instance
   *             type. You can't restore dc1.8xlarge to dc2.8xlarge. First restore to a dc1.8xlareg
   *             cluster, then resize to a dc2.8large cluster. For more information about node types, see
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes">
   *                 About Clusters and Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   */
  NodeType?: string;

  /**
   * <p>The number of nodes specified when provisioning the restored cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The AWS customer account used to create or copy the snapshot. Required if you are
   *             restoring a snapshot you do not own, optional if you own the snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The port number on which the cluster accepts connections.</p>
   *         <p>Default: The same port as the original cluster.</p>
   *         <p>Constraints: Must be between <code>1115</code> and <code>65535</code>.</p>
   */
  Port?: number;

  /**
   * <p>The weekly time range (in UTC) during which automated cluster maintenance can
   *             occur.</p>
   *         <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p> Default: The value selected for the cluster from which the snapshot was taken. For
   *             more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide. </p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The name of the cluster the source snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The name of the snapshot from which to create the new cluster. This parameter isn't
   *             case sensitive.</p>
   *         <p>Example: <code>my-snapshot-id</code>
   *         </p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the
   *             cluster.</p>
   *         <p>Default: The default VPC security group is associated with the cluster.</p>
   *         <p>VPC security groups only apply to clusters in VPCs.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace RestoreFromClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: RestoreFromClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreFromClusterSnapshotMessage =>
    __isa(o, "RestoreFromClusterSnapshotMessage");
}

export interface RestoreFromClusterSnapshotResult {
  __type?: "RestoreFromClusterSnapshotResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RestoreFromClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: RestoreFromClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreFromClusterSnapshotResult =>
    __isa(o, "RestoreFromClusterSnapshotResult");
}

/**
 * <p>Describes the status of a cluster restore action. Returns null if the cluster was
 *             not created by restoring a snapshot.</p>
 */
export interface RestoreStatus {
  __type?: "RestoreStatus";
  /**
   * <p>The number of megabytes per second being transferred from the backup storage.
   *             Returns the average rate for a completed backup.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

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

  /**
   * <p>The number of megabytes that have been transferred from snapshot storage.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The size of the set of snapshot data used to restore the cluster.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * <p>The status of the restore action. Returns starting, restoring, completed, or
   *             failed.</p>
   */
  Status?: string;
}

export namespace RestoreStatus {
  export const filterSensitiveLog = (obj: RestoreStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreStatus => __isa(o, "RestoreStatus");
}

/**
 * <p></p>
 */
export interface RestoreTableFromClusterSnapshotMessage {
  __type?: "RestoreTableFromClusterSnapshotMessage";
  /**
   * <p>The identifier of the Amazon Redshift cluster to restore the table to.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the table to create as a result of the current request.</p>
   */
  NewTableName: string | undefined;

  /**
   * <p>The identifier of the snapshot to restore the table from. This snapshot must have
   *             been created from the Amazon Redshift cluster specified by the
   *                 <code>ClusterIdentifier</code> parameter.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the source database that contains the table to restore from.</p>
   */
  SourceDatabaseName: string | undefined;

  /**
   * <p>The name of the source schema that contains the table to restore from. If you do
   *             not specify a <code>SourceSchemaName</code> value, the default is
   *             <code>public</code>.</p>
   */
  SourceSchemaName?: string;

  /**
   * <p>The name of the source table to restore from.</p>
   */
  SourceTableName: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   */
  TargetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   */
  TargetSchemaName?: string;
}

export namespace RestoreTableFromClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: RestoreTableFromClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreTableFromClusterSnapshotMessage =>
    __isa(o, "RestoreTableFromClusterSnapshotMessage");
}

export interface RestoreTableFromClusterSnapshotResult {
  __type?: "RestoreTableFromClusterSnapshotResult";
  /**
   * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
   *             operation.</p>
   */
  TableRestoreStatus?: TableRestoreStatus;
}

export namespace RestoreTableFromClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: RestoreTableFromClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreTableFromClusterSnapshotResult =>
    __isa(o, "RestoreTableFromClusterSnapshotResult");
}

/**
 * <p>Describes a <code>RevisionTarget</code>.</p>
 */
export interface RevisionTarget {
  __type?: "RevisionTarget";
  /**
   * <p>A unique string that identifies the version to update the cluster to. You can use this
   *             value in <a>ModifyClusterDbRevision</a>.</p>
   */
  DatabaseRevision?: string;

  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date;

  /**
   * <p>A string that describes the changes and features that will be applied to the cluster
   *             when it is updated to the corresponding <a>ClusterDbRevision</a>.</p>
   */
  Description?: string;
}

export namespace RevisionTarget {
  export const filterSensitiveLog = (obj: RevisionTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevisionTarget =>
    __isa(o, "RevisionTarget");
}

/**
 * <p></p>
 */
export interface RevokeClusterSecurityGroupIngressMessage {
  __type?: "RevokeClusterSecurityGroupIngressMessage";
  /**
   * <p>The IP range for which to revoke access. This range must be a valid Classless
   *             Inter-Domain Routing (CIDR) block of IP addresses. If <code>CIDRIP</code> is specified,
   *                 <code>EC2SecurityGroupName</code> and <code>EC2SecurityGroupOwnerId</code> cannot be
   *             provided. </p>
   */
  CIDRIP?: string;

  /**
   * <p>The name of the security Group from which to revoke the ingress rule.</p>
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>The name of the EC2 Security Group whose access is to be revoked. If
   *                 <code>EC2SecurityGroupName</code> is specified, <code>EC2SecurityGroupOwnerId</code>
   *             must also be provided and <code>CIDRIP</code> cannot be provided. </p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The AWS account number of the owner of the security group specified in the
   *                 <code>EC2SecurityGroupName</code> parameter. The AWS access key ID is not an
   *             acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified,
   *                 <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code>
   *             cannot be provided. </p>
   *         <p>Example: <code>111122223333</code>
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace RevokeClusterSecurityGroupIngressMessage {
  export const filterSensitiveLog = (
    obj: RevokeClusterSecurityGroupIngressMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeClusterSecurityGroupIngressMessage =>
    __isa(o, "RevokeClusterSecurityGroupIngressMessage");
}

export interface RevokeClusterSecurityGroupIngressResult {
  __type?: "RevokeClusterSecurityGroupIngressResult";
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: ClusterSecurityGroup;
}

export namespace RevokeClusterSecurityGroupIngressResult {
  export const filterSensitiveLog = (
    obj: RevokeClusterSecurityGroupIngressResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeClusterSecurityGroupIngressResult =>
    __isa(o, "RevokeClusterSecurityGroupIngressResult");
}

/**
 * <p></p>
 */
export interface RevokeSnapshotAccessMessage {
  __type?: "RevokeSnapshotAccessMessage";
  /**
   * <p>The identifier of the AWS customer account that can no longer restore the specified
   *             snapshot.</p>
   */
  AccountWithRestoreAccess: string | undefined;

  /**
   * <p>The identifier of the cluster the snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The identifier of the snapshot that the account can no longer access.</p>
   */
  SnapshotIdentifier: string | undefined;
}

export namespace RevokeSnapshotAccessMessage {
  export const filterSensitiveLog = (
    obj: RevokeSnapshotAccessMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeSnapshotAccessMessage =>
    __isa(o, "RevokeSnapshotAccessMessage");
}

export interface RevokeSnapshotAccessResult {
  __type?: "RevokeSnapshotAccessResult";
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace RevokeSnapshotAccessResult {
  export const filterSensitiveLog = (obj: RevokeSnapshotAccessResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeSnapshotAccessResult =>
    __isa(o, "RevokeSnapshotAccessResult");
}

/**
 * <p></p>
 */
export interface RotateEncryptionKeyMessage {
  __type?: "RotateEncryptionKeyMessage";
  /**
   * <p>The unique identifier of the cluster that you want to rotate the encryption keys
   *             for.</p>
   *         <p>Constraints: Must be the name of valid cluster that has encryption
   *             enabled.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace RotateEncryptionKeyMessage {
  export const filterSensitiveLog = (obj: RotateEncryptionKeyMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotateEncryptionKeyMessage =>
    __isa(o, "RotateEncryptionKeyMessage");
}

export interface RotateEncryptionKeyResult {
  __type?: "RotateEncryptionKeyResult";
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RotateEncryptionKeyResult {
  export const filterSensitiveLog = (obj: RotateEncryptionKeyResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RotateEncryptionKeyResult =>
    __isa(o, "RotateEncryptionKeyResult");
}

/**
 * <p>Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule.
 *             For information about which API operations can be scheduled, see  <a>ScheduledActionType</a>. </p>
 */
export interface ScheduledAction {
  __type?: "ScheduledAction";
  /**
   * <p>The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger. </p>
   */
  EndTime?: Date;

  /**
   * <p>The IAM role to assume to run the scheduled action.
   *             This IAM role must have permission to run the Amazon Redshift API operation in the scheduled action.
   *             This IAM role must allow the Amazon Redshift scheduler (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf.
   *
   * For more information about the IAM role to use with the Amazon Redshift scheduler, see
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using Identity-Based Policies for Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.
   * </p>
   */
  IamRole?: string;

  /**
   * <p>List of times when the scheduled action will run. </p>
   */
  NextInvocations?: Date[];

  /**
   * <p>The schedule for a one-time (at format) or recurring (cron format) scheduled action.
   *             Schedule invocations must be separated by at least one hour.</p>
   *         <p>Format of at expressions is "<code>at(yyyy-mm-ddThh:mm:ss)</code>". For example, "<code>at(2016-03-04T17:27:00)</code>".</p>
   *         <p>Format of cron expressions is "<code>cron(Minutes Hours Day-of-month Month Day-of-week Year)</code>".
   *             For example, "<code>cron(0, 10, *, *, MON, *)</code>". For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a>
   *             in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   */
  Schedule?: string;

  /**
   * <p>The description of the scheduled action. </p>
   */
  ScheduledActionDescription?: string;

  /**
   * <p>The name of the scheduled action. </p>
   */
  ScheduledActionName?: string;

  /**
   * <p>The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger. </p>
   */
  StartTime?: Date;

  /**
   * <p>The state of the scheduled action. For example, <code>DISABLED</code>. </p>
   */
  State?: ScheduledActionState | string;

  /**
   * <p>A JSON format string of the Amazon Redshift API operation with input parameters. </p>
   *         <p>"<code>{\"ResizeCluster\":{\"NodeType\":\"ds2.8xlarge\",\"ClusterIdentifier\":\"my-test-cluster\",\"NumberOfNodes\":3}}</code>". </p>
   */
  TargetAction?: ScheduledActionType;
}

export namespace ScheduledAction {
  export const filterSensitiveLog = (obj: ScheduledAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledAction =>
    __isa(o, "ScheduledAction");
}

/**
 * <p>The scheduled action already exists. </p>
 */
export interface ScheduledActionAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ScheduledActionAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduledActionAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ScheduledActionAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledActionAlreadyExistsFault =>
    __isa(o, "ScheduledActionAlreadyExistsFault");
}

/**
 * <p>A set of elements to filter the returned scheduled actions. </p>
 */
export interface ScheduledActionFilter {
  __type?: "ScheduledActionFilter";
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
  export const filterSensitiveLog = (obj: ScheduledActionFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledActionFilter =>
    __isa(o, "ScheduledActionFilter");
}

export enum ScheduledActionFilterName {
  CLUSTER_IDENTIFIER = "cluster-identifier",
  IAM_ROLE = "iam-role"
}

/**
 * <p>The scheduled action cannot be found. </p>
 */
export interface ScheduledActionNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ScheduledActionNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduledActionNotFoundFault {
  export const filterSensitiveLog = (
    obj: ScheduledActionNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledActionNotFoundFault =>
    __isa(o, "ScheduledActionNotFoundFault");
}

/**
 * <p>The quota for scheduled actions exceeded. </p>
 */
export interface ScheduledActionQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ScheduledActionQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduledActionQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ScheduledActionQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledActionQuotaExceededFault =>
    __isa(o, "ScheduledActionQuotaExceededFault");
}

export interface ScheduledActionsMessage {
  __type?: "ScheduledActionsMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>List of retrieved scheduled actions. </p>
   */
  ScheduledActions?: ScheduledAction[];
}

export namespace ScheduledActionsMessage {
  export const filterSensitiveLog = (obj: ScheduledActionsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledActionsMessage =>
    __isa(o, "ScheduledActionsMessage");
}

export enum ScheduledActionState {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED"
}

/**
 * <p>The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. </p>
 */
export interface ScheduledActionType {
  __type?: "ScheduledActionType";
  /**
   * <p>An action that runs a <code>ResizeCluster</code> API operation. </p>
   */
  ResizeCluster?: ResizeClusterMessage;
}

export namespace ScheduledActionType {
  export const filterSensitiveLog = (obj: ScheduledActionType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledActionType =>
    __isa(o, "ScheduledActionType");
}

/**
 * <p>The action type specified for a scheduled action is not supported. </p>
 */
export interface ScheduledActionTypeUnsupportedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ScheduledActionTypeUnsupportedFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduledActionTypeUnsupportedFault {
  export const filterSensitiveLog = (
    obj: ScheduledActionTypeUnsupportedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledActionTypeUnsupportedFault =>
    __isa(o, "ScheduledActionTypeUnsupportedFault");
}

export enum ScheduledActionTypeValues {
  RESIZE_CLUSTER = "ResizeCluster"
}

/**
 * <p>The definition you submitted is not supported.</p>
 */
export interface ScheduleDefinitionTypeUnsupportedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ScheduleDefinitionTypeUnsupportedFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduleDefinitionTypeUnsupportedFault {
  export const filterSensitiveLog = (
    obj: ScheduleDefinitionTypeUnsupportedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduleDefinitionTypeUnsupportedFault =>
    __isa(o, "ScheduleDefinitionTypeUnsupportedFault");
}

export type ScheduleState = "ACTIVE" | "FAILED" | "MODIFYING";

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  __type?: "Snapshot";
  /**
   * <p>A list of the AWS customer accounts authorized to restore the snapshot. Returns
   *                 <code>null</code> if no accounts are authorized. Visible only to the snapshot owner.
   *         </p>
   */
  AccountsWithRestoreAccess?: AccountWithRestoreAccess[];

  /**
   * <p>The size of the incremental backup.</p>
   */
  ActualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * <p>The Availability Zone in which the cluster was created.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of megabytes that have been transferred to the snapshot
   *             backup.</p>
   */
  BackupProgressInMegaBytes?: number;

  /**
   * <p>The time (UTC) when the cluster was originally created.</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The identifier of the cluster for which the snapshot was taken.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The number of megabytes per second being transferred to the snapshot backup.
   *             Returns <code>0</code> for a completed backup. </p>
   */
  CurrentBackupRateInMegaBytesPerSecond?: number;

  /**
   * <p>The name of the database that was created when the cluster was created.</p>
   */
  DBName?: string;

  /**
   * <p>The amount of time an in-progress snapshot backup has been running, or the amount
   *             of time it took a completed backup to finish.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>If <code>true</code>, the data in the snapshot is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>A boolean that indicates whether the snapshot data is encrypted using the HSM keys
   *             of the source cluster. <code>true</code> indicates that the data is encrypted using HSM
   *             keys.</p>
   */
  EncryptedWithHSM?: boolean;

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
   * <p>The estimate of the time remaining before the snapshot backup will complete.
   *             Returns <code>0</code> for a completed backup. </p>
   */
  EstimatedSecondsToCompletion?: number;

  /**
   * <p>The AWS Key Management Service (KMS) key ID of the encryption key that was used to
   *             encrypt data in the cluster from which the snapshot was taken.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the maintenance track for the snapshot.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The number of days until a manual snapshot will pass its retention period.</p>
   */
  ManualSnapshotRemainingDays?: number;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The master user name for the cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The node type of the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>The number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>For manual snapshots, the AWS customer account used to create or copy the snapshot.
   *             For automatic snapshots, the owner of the cluster. The owner can perform all snapshot
   *             actions, such as sharing a manual snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The port that the cluster is listening on.</p>
   */
  Port?: number;

  /**
   * <p>The list of node types that this cluster snapshot is able to restore
   *             into.</p>
   */
  RestorableNodeTypes?: string[];

  /**
   * <p>The time (in UTC format) when Amazon Redshift began the snapshot. A snapshot contains a
   *             copy of the cluster data as of this exact time.</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>The snapshot identifier that is provided in the request.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>A timestamp representing the start of the retention period for the snapshot.</p>
   */
  SnapshotRetentionStartTime?: Date;

  /**
   * <p>The snapshot type. Snapshots created using <a>CreateClusterSnapshot</a>
   *             and <a>CopyClusterSnapshot</a> are of type "manual". </p>
   */
  SnapshotType?: string;

  /**
   * <p>The source region from which the snapshot was copied.</p>
   */
  SourceRegion?: string;

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
   * <p>The list of tags for the cluster snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The size of the complete set of backup data that would be used to restore the
   *             cluster.</p>
   */
  TotalBackupSizeInMegaBytes?: number;

  /**
   * <p>The VPC identifier of the cluster if the snapshot is from a cluster in a VPC.
   *             Otherwise, this field is not in the output.</p>
   */
  VpcId?: string;
}

export namespace Snapshot {
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is Snapshot => __isa(o, "Snapshot");
}

export enum SnapshotAttributeToSortBy {
  CREATE_TIME = "CREATE_TIME",
  SOURCE_TYPE = "SOURCE_TYPE",
  TOTAL_SIZE = "TOTAL_SIZE"
}

/**
 * <p>The cluster already has cross-region snapshot copy disabled.</p>
 */
export interface SnapshotCopyAlreadyDisabledFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotCopyAlreadyDisabledFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyAlreadyDisabledFault {
  export const filterSensitiveLog = (
    obj: SnapshotCopyAlreadyDisabledFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotCopyAlreadyDisabledFault =>
    __isa(o, "SnapshotCopyAlreadyDisabledFault");
}

/**
 * <p>The cluster already has cross-region snapshot copy enabled.</p>
 */
export interface SnapshotCopyAlreadyEnabledFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotCopyAlreadyEnabledFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyAlreadyEnabledFault {
  export const filterSensitiveLog = (
    obj: SnapshotCopyAlreadyEnabledFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotCopyAlreadyEnabledFault =>
    __isa(o, "SnapshotCopyAlreadyEnabledFault");
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 */
export interface SnapshotCopyDisabledFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotCopyDisabledFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyDisabledFault {
  export const filterSensitiveLog = (obj: SnapshotCopyDisabledFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotCopyDisabledFault =>
    __isa(o, "SnapshotCopyDisabledFault");
}

/**
 * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied
 *             snapshots with the specified customer master key (CMK) from AWS KMS in the destination
 *             region.</p>
 *         <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface SnapshotCopyGrant {
  __type?: "SnapshotCopyGrant";
  /**
   * <p>The unique identifier of the customer master key (CMK) in AWS KMS to which
   *             Amazon Redshift is granted permission.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace SnapshotCopyGrant {
  export const filterSensitiveLog = (obj: SnapshotCopyGrant): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotCopyGrant =>
    __isa(o, "SnapshotCopyGrant");
}

/**
 * <p>The snapshot copy grant can't be created because a grant with the same name already
 *             exists.</p>
 */
export interface SnapshotCopyGrantAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotCopyGrantAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyGrantAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: SnapshotCopyGrantAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotCopyGrantAlreadyExistsFault =>
    __isa(o, "SnapshotCopyGrantAlreadyExistsFault");
}

/**
 * <p></p>
 */
export interface SnapshotCopyGrantMessage {
  __type?: "SnapshotCopyGrantMessage";
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, AWS returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>The list of <code>SnapshotCopyGrant</code> objects.</p>
   */
  SnapshotCopyGrants?: SnapshotCopyGrant[];
}

export namespace SnapshotCopyGrantMessage {
  export const filterSensitiveLog = (obj: SnapshotCopyGrantMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotCopyGrantMessage =>
    __isa(o, "SnapshotCopyGrantMessage");
}

/**
 * <p>The specified snapshot copy grant can't be found. Make sure that the name is typed
 *             correctly and that the grant exists in the destination region.</p>
 */
export interface SnapshotCopyGrantNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotCopyGrantNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyGrantNotFoundFault {
  export const filterSensitiveLog = (
    obj: SnapshotCopyGrantNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotCopyGrantNotFoundFault =>
    __isa(o, "SnapshotCopyGrantNotFoundFault");
}

/**
 * <p>The AWS account has exceeded the maximum number of snapshot copy grants in this
 *             region.</p>
 */
export interface SnapshotCopyGrantQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotCopyGrantQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyGrantQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: SnapshotCopyGrantQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotCopyGrantQuotaExceededFault =>
    __isa(o, "SnapshotCopyGrantQuotaExceededFault");
}

/**
 * <p>Describes the errors returned by a snapshot.</p>
 */
export interface SnapshotErrorMessage {
  __type?: "SnapshotErrorMessage";
  /**
   * <p>The failure code for the error.</p>
   */
  FailureCode?: string;

  /**
   * <p>The text message describing the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>A unique identifier for the cluster.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>A unique identifier for the snapshot returning the error.</p>
   */
  SnapshotIdentifier?: string;
}

export namespace SnapshotErrorMessage {
  export const filterSensitiveLog = (obj: SnapshotErrorMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotErrorMessage =>
    __isa(o, "SnapshotErrorMessage");
}

/**
 * <p>Contains the output from the <a>DescribeClusterSnapshots</a> action.
 *         </p>
 */
export interface SnapshotMessage {
  __type?: "SnapshotMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>Snapshot</a> instances. </p>
   */
  Snapshots?: Snapshot[];
}

export namespace SnapshotMessage {
  export const filterSensitiveLog = (obj: SnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotMessage =>
    __isa(o, "SnapshotMessage");
}

/**
 * <p>Describes a snapshot schedule. You can set a regular interval for creating
 *             snapshots of a cluster. You can also schedule snapshots for specific dates. </p>
 */
export interface SnapshotSchedule {
  __type?: "SnapshotSchedule";
  /**
   * <p>The number of clusters associated with the schedule.</p>
   */
  AssociatedClusterCount?: number;

  /**
   * <p>A list of clusters associated with the schedule. A maximum of 100 clusters is returned.</p>
   */
  AssociatedClusters?: ClusterAssociatedToSchedule[];

  /**
   * <p></p>
   */
  NextInvocations?: Date[];

  /**
   * <p>A list of ScheduleDefinitions.</p>
   */
  ScheduleDefinitions?: string[];

  /**
   * <p>The description of the schedule.</p>
   */
  ScheduleDescription?: string;

  /**
   * <p>A unique identifier for the schedule.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>An optional set of tags describing the schedule.</p>
   */
  Tags?: Tag[];
}

export namespace SnapshotSchedule {
  export const filterSensitiveLog = (obj: SnapshotSchedule): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotSchedule =>
    __isa(o, "SnapshotSchedule");
}

/**
 * <p>The specified snapshot schedule already exists. </p>
 */
export interface SnapshotScheduleAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotScheduleAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: SnapshotScheduleAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotScheduleAlreadyExistsFault =>
    __isa(o, "SnapshotScheduleAlreadyExistsFault");
}

/**
 * <p>We could not find the specified snapshot schedule. </p>
 */
export interface SnapshotScheduleNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotScheduleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleNotFoundFault {
  export const filterSensitiveLog = (
    obj: SnapshotScheduleNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotScheduleNotFoundFault =>
    __isa(o, "SnapshotScheduleNotFoundFault");
}

/**
 * <p>You have exceeded the quota of snapshot schedules. </p>
 */
export interface SnapshotScheduleQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotScheduleQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: SnapshotScheduleQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotScheduleQuotaExceededFault =>
    __isa(o, "SnapshotScheduleQuotaExceededFault");
}

/**
 * <p>The specified snapshot schedule is already being updated.</p>
 */
export interface SnapshotScheduleUpdateInProgressFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotScheduleUpdateInProgressFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleUpdateInProgressFault {
  export const filterSensitiveLog = (
    obj: SnapshotScheduleUpdateInProgressFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotScheduleUpdateInProgressFault =>
    __isa(o, "SnapshotScheduleUpdateInProgressFault");
}

/**
 * <p>Describes a sorting entity</p>
 */
export interface SnapshotSortingEntity {
  __type?: "SnapshotSortingEntity";
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
  export const filterSensitiveLog = (obj: SnapshotSortingEntity): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotSortingEntity =>
    __isa(o, "SnapshotSortingEntity");
}

/**
 * <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS
 *             topic.</p>
 */
export interface SNSInvalidTopicFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSInvalidTopicFault";
  $fault: "client";
  message?: string;
}

export namespace SNSInvalidTopicFault {
  export const filterSensitiveLog = (obj: SNSInvalidTopicFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SNSInvalidTopicFault =>
    __isa(o, "SNSInvalidTopicFault");
}

/**
 * <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
 */
export interface SNSNoAuthorizationFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSNoAuthorizationFault";
  $fault: "client";
  message?: string;
}

export namespace SNSNoAuthorizationFault {
  export const filterSensitiveLog = (obj: SNSNoAuthorizationFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SNSNoAuthorizationFault =>
    __isa(o, "SNSNoAuthorizationFault");
}

/**
 * <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not
 *             exist.</p>
 */
export interface SNSTopicArnNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSTopicArnNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SNSTopicArnNotFoundFault {
  export const filterSensitiveLog = (obj: SNSTopicArnNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SNSTopicArnNotFoundFault =>
    __isa(o, "SNSTopicArnNotFoundFault");
}

export enum SortByOrder {
  ASCENDING = "ASC",
  DESCENDING = "DESC"
}

/**
 * <p>The specified Amazon Redshift event source could not be found.</p>
 */
export interface SourceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SourceNotFoundFault {
  export const filterSensitiveLog = (obj: SourceNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceNotFoundFault =>
    __isa(o, "SourceNotFoundFault");
}

export type SourceType =
  | "cluster"
  | "cluster-parameter-group"
  | "cluster-security-group"
  | "cluster-snapshot"
  | "scheduled-action";

/**
 * <p>Describes a subnet.</p>
 */
export interface Subnet {
  __type?: "Subnet";
  /**
   * <p></p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>The identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>The status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export namespace Subnet {
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj
  });
  export const isa = (o: any): o is Subnet => __isa(o, "Subnet");
}

/**
 * <p>A specified subnet is already in use by another cluster.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetAlreadyInUse {
  export const filterSensitiveLog = (obj: SubnetAlreadyInUse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubnetAlreadyInUse =>
    __isa(o, "SubnetAlreadyInUse");
}

/**
 * <p>There is already an existing event notification subscription with the specified
 *             name.</p>
 */
export interface SubscriptionAlreadyExistFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionAlreadyExistFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionAlreadyExistFault {
  export const filterSensitiveLog = (
    obj: SubscriptionAlreadyExistFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscriptionAlreadyExistFault =>
    __isa(o, "SubscriptionAlreadyExistFault");
}

/**
 * <p>The value specified for the event category was not one of the allowed values, or it
 *             specified a category that does not apply to the specified source type. The allowed
 *             values are Configuration, Management, Monitoring, and Security.</p>
 */
export interface SubscriptionCategoryNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionCategoryNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionCategoryNotFoundFault {
  export const filterSensitiveLog = (
    obj: SubscriptionCategoryNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscriptionCategoryNotFoundFault =>
    __isa(o, "SubscriptionCategoryNotFoundFault");
}

/**
 * <p>An Amazon Redshift event with the specified event ID does not exist.</p>
 */
export interface SubscriptionEventIdNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionEventIdNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionEventIdNotFoundFault {
  export const filterSensitiveLog = (
    obj: SubscriptionEventIdNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscriptionEventIdNotFoundFault =>
    __isa(o, "SubscriptionEventIdNotFoundFault");
}

/**
 * <p>An Amazon Redshift event notification subscription with the specified name does not
 *             exist.</p>
 */
export interface SubscriptionNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionNotFoundFault {
  export const filterSensitiveLog = (obj: SubscriptionNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscriptionNotFoundFault =>
    __isa(o, "SubscriptionNotFoundFault");
}

/**
 * <p>The value specified for the event severity was not one of the allowed values, or it
 *             specified a severity that does not apply to the specified source type. The allowed
 *             values are ERROR and INFO.</p>
 */
export interface SubscriptionSeverityNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionSeverityNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionSeverityNotFoundFault {
  export const filterSensitiveLog = (
    obj: SubscriptionSeverityNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscriptionSeverityNotFoundFault =>
    __isa(o, "SubscriptionSeverityNotFoundFault");
}

/**
 * <p>Describes the operations that are allowed on a maintenance track.</p>
 */
export interface SupportedOperation {
  __type?: "SupportedOperation";
  /**
   * <p>A list of the supported operations.</p>
   */
  OperationName?: string;
}

export namespace SupportedOperation {
  export const filterSensitiveLog = (obj: SupportedOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is SupportedOperation =>
    __isa(o, "SupportedOperation");
}

/**
 * <p>A list of supported platforms for orderable clusters.</p>
 */
export interface SupportedPlatform {
  __type?: "SupportedPlatform";
  /**
   * <p></p>
   */
  Name?: string;
}

export namespace SupportedPlatform {
  export const filterSensitiveLog = (obj: SupportedPlatform): any => ({
    ...obj
  });
  export const isa = (o: any): o is SupportedPlatform =>
    __isa(o, "SupportedPlatform");
}

/**
 * <p>The number of tables in the cluster exceeds the limit for the requested new cluster
 *             node type. </p>
 */
export interface TableLimitExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "TableLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace TableLimitExceededFault {
  export const filterSensitiveLog = (obj: TableLimitExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableLimitExceededFault =>
    __isa(o, "TableLimitExceededFault");
}

/**
 * <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
 */
export interface TableRestoreNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "TableRestoreNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace TableRestoreNotFoundFault {
  export const filterSensitiveLog = (obj: TableRestoreNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableRestoreNotFoundFault =>
    __isa(o, "TableRestoreNotFoundFault");
}

/**
 * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
 *             operation.</p>
 */
export interface TableRestoreStatus {
  __type?: "TableRestoreStatus";
  /**
   * <p>The identifier of the Amazon Redshift cluster that the table is being restored
   *             to.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A description of the status of the table restore request. Status values include
   *                 <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   */
  Message?: string;

  /**
   * <p>The name of the table to create as a result of the table restore request.</p>
   */
  NewTableName?: string;

  /**
   * <p>The amount of data restored to the new table so far, in megabytes (MB).</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The time that the table restore request was made, in Universal Coordinated Time
   *             (UTC).</p>
   */
  RequestTime?: Date;

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
   * <p>A value that describes the current state of the table restore request.</p>
   *         <p>Valid Values: <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>
   *         </p>
   */
  Status?: TableRestoreStatusType | string;

  /**
   * <p>The unique identifier for the table restore request.</p>
   */
  TableRestoreRequestId?: string;

  /**
   * <p>The name of the database to restore the table to.</p>
   */
  TargetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   */
  TargetSchemaName?: string;

  /**
   * <p>The total amount of data to restore to the new table, in megabytes (MB).</p>
   */
  TotalDataInMegaBytes?: number;
}

export namespace TableRestoreStatus {
  export const filterSensitiveLog = (obj: TableRestoreStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableRestoreStatus =>
    __isa(o, "TableRestoreStatus");
}

/**
 * <p></p>
 */
export interface TableRestoreStatusMessage {
  __type?: "TableRestoreStatusMessage";
  /**
   * <p>A pagination token that can be used in a subsequent <a>DescribeTableRestoreStatus</a> request.</p>
   */
  Marker?: string;

  /**
   * <p>A list of status details for one or more table restore requests.</p>
   */
  TableRestoreStatusDetails?: TableRestoreStatus[];
}

export namespace TableRestoreStatusMessage {
  export const filterSensitiveLog = (obj: TableRestoreStatusMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableRestoreStatusMessage =>
    __isa(o, "TableRestoreStatusMessage");
}

export type TableRestoreStatusType =
  | "CANCELED"
  | "FAILED"
  | "IN_PROGRESS"
  | "PENDING"
  | "SUCCEEDED";

/**
 * <p>A tag consisting of a name/value pair for a resource.</p>
 */
export interface Tag {
  __type?: "Tag";
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
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>A tag and its associated resource.</p>
 */
export interface TaggedResource {
  __type?: "TaggedResource";
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

  /**
   * <p>The tag for the resource.</p>
   */
  Tag?: Tag;
}

export namespace TaggedResource {
  export const filterSensitiveLog = (obj: TaggedResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaggedResource =>
    __isa(o, "TaggedResource");
}

/**
 * <p></p>
 */
export interface TaggedResourceListMessage {
  __type?: "TaggedResourceListMessage";
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of tags with their associated resources.</p>
   */
  TaggedResources?: TaggedResource[];
}

export namespace TaggedResourceListMessage {
  export const filterSensitiveLog = (obj: TaggedResourceListMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaggedResourceListMessage =>
    __isa(o, "TaggedResourceListMessage");
}

/**
 * <p>You have exceeded the number of tags allowed.</p>
 */
export interface TagLimitExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "TagLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace TagLimitExceededFault {
  export const filterSensitiveLog = (obj: TagLimitExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagLimitExceededFault =>
    __isa(o, "TagLimitExceededFault");
}

export interface TrackListMessage {
  __type?: "TrackListMessage";
  /**
   * <p>A list of maintenance tracks output by the <code>DescribeClusterTracks</code>
   *             operation. </p>
   */
  MaintenanceTracks?: MaintenanceTrack[];

  /**
   * <p>The starting point to return a set of response tracklist records. You can retrieve the
   *             next set of response records by providing the returned marker value in the
   *                 <code>Marker</code> parameter and retrying the request.</p>
   */
  Marker?: string;
}

export namespace TrackListMessage {
  export const filterSensitiveLog = (obj: TrackListMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrackListMessage =>
    __isa(o, "TrackListMessage");
}

/**
 * <p>Your account is not authorized to perform the requested operation.</p>
 */
export interface UnauthorizedOperation
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedOperation";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedOperation {
  export const filterSensitiveLog = (obj: UnauthorizedOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnauthorizedOperation =>
    __isa(o, "UnauthorizedOperation");
}

/**
 * <p>The specified region is incorrect or does not exist.</p>
 */
export interface UnknownSnapshotCopyRegionFault
  extends __SmithyException,
    $MetadataBearer {
  name: "UnknownSnapshotCopyRegionFault";
  $fault: "client";
  message?: string;
}

export namespace UnknownSnapshotCopyRegionFault {
  export const filterSensitiveLog = (
    obj: UnknownSnapshotCopyRegionFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnknownSnapshotCopyRegionFault =>
    __isa(o, "UnknownSnapshotCopyRegionFault");
}

/**
 * <p>The requested operation isn't supported.</p>
 */
export interface UnsupportedOperationFault
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOperationFault";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOperationFault {
  export const filterSensitiveLog = (obj: UnsupportedOperationFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedOperationFault =>
    __isa(o, "UnsupportedOperationFault");
}

/**
 * <p>A request option was specified that is not supported.</p>
 */
export interface UnsupportedOptionFault
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOptionFault";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOptionFault {
  export const filterSensitiveLog = (obj: UnsupportedOptionFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedOptionFault =>
    __isa(o, "UnsupportedOptionFault");
}

/**
 * <p>A maintenance track that you can switch the current track to.</p>
 */
export interface UpdateTarget {
  __type?: "UpdateTarget";
  /**
   * <p>The cluster version for the new maintenance track.</p>
   */
  DatabaseVersion?: string;

  /**
   * <p>The name of the new maintenance track.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>A list of operations supported by the maintenance track.</p>
   */
  SupportedOperations?: SupportedOperation[];
}

export namespace UpdateTarget {
  export const filterSensitiveLog = (obj: UpdateTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTarget => __isa(o, "UpdateTarget");
}

/**
 * <p>Describes the members of a VPC security group.</p>
 */
export interface VpcSecurityGroupMembership {
  __type?: "VpcSecurityGroupMembership";
  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;
}

export namespace VpcSecurityGroupMembership {
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcSecurityGroupMembership =>
    __isa(o, "VpcSecurityGroupMembership");
}
