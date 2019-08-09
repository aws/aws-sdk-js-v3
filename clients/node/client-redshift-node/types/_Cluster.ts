import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";
import {
  _ClusterSecurityGroupMembership,
  _UnmarshalledClusterSecurityGroupMembership
} from "./_ClusterSecurityGroupMembership";
import {
  _VpcSecurityGroupMembership,
  _UnmarshalledVpcSecurityGroupMembership
} from "./_VpcSecurityGroupMembership";
import {
  _ClusterParameterGroupStatus,
  _UnmarshalledClusterParameterGroupStatus
} from "./_ClusterParameterGroupStatus";
import {
  _PendingModifiedValues,
  _UnmarshalledPendingModifiedValues
} from "./_PendingModifiedValues";
import { _RestoreStatus, _UnmarshalledRestoreStatus } from "./_RestoreStatus";
import {
  _DataTransferProgress,
  _UnmarshalledDataTransferProgress
} from "./_DataTransferProgress";
import { _HsmStatus, _UnmarshalledHsmStatus } from "./_HsmStatus";
import {
  _ClusterSnapshotCopyStatus,
  _UnmarshalledClusterSnapshotCopyStatus
} from "./_ClusterSnapshotCopyStatus";
import { _ClusterNode, _UnmarshalledClusterNode } from "./_ClusterNode";
import {
  _ElasticIpStatus,
  _UnmarshalledElasticIpStatus
} from "./_ElasticIpStatus";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _ClusterIamRole,
  _UnmarshalledClusterIamRole
} from "./_ClusterIamRole";
import {
  _DeferredMaintenanceWindow,
  _UnmarshalledDeferredMaintenanceWindow
} from "./_DeferredMaintenanceWindow";
import { _ResizeInfo, _UnmarshalledResizeInfo } from "./_ResizeInfo";

/**
 * <p>Describes a cluster.</p>
 */
export interface _Cluster {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p> The current state of the cluster. Possible values are the following:</p> <ul> <li> <p> <code>available</code> </p> </li> <li> <p> <code>available, prep-for-resize</code> </p> </li> <li> <p> <code>available, resize-cleanup</code> </p> </li> <li> <p> <code>cancelling-resize</code> </p> </li> <li> <p> <code>creating</code> </p> </li> <li> <p> <code>deleting</code> </p> </li> <li> <p> <code>final-snapshot</code> </p> </li> <li> <p> <code>hardware-failure</code> </p> </li> <li> <p> <code>incompatible-hsm</code> </p> </li> <li> <p> <code>incompatible-network</code> </p> </li> <li> <p> <code>incompatible-parameters</code> </p> </li> <li> <p> <code>incompatible-restore</code> </p> </li> <li> <p> <code>modifying</code> </p> </li> <li> <p> <code>rebooting</code> </p> </li> <li> <p> <code>renaming</code> </p> </li> <li> <p> <code>resizing</code> </p> </li> <li> <p> <code>rotating-keys</code> </p> </li> <li> <p> <code>storage-full</code> </p> </li> <li> <p> <code>updating-hsm</code> </p> </li> </ul>
   */
  ClusterStatus?: string;

  /**
   * <p>The availability status of the cluster for queries. Possible values are the following:</p> <ul> <li> <p>Available - The cluster is available for queries. </p> </li> <li> <p>Unavailable - The cluster is not available for queries.</p> </li> <li> <p>Maintenance - The cluster is intermittently available for queries due to maintenance activities.</p> </li> <li> <p>Modifying - The cluster is intermittently available for queries due to changes that modify the cluster.</p> </li> <li> <p>Failed - The cluster failed and is not available for queries.</p> </li> </ul>
   */
  ClusterAvailabilityStatus?: string;

  /**
   * <p>The status of a modify operation, if any, initiated for the cluster.</p>
   */
  ModifyStatus?: string;

  /**
   * <p>The master user name for the cluster. This name is used to connect to the database that is specified in the <b>DBName</b> parameter. </p>
   */
  MasterUsername?: string;

  /**
   * <p>The name of the initial database that was created when the cluster was created. This same name is returned for the life of the cluster. If an initial database was not specified, a database named <code>dev</code>dev was created by default. </p>
   */
  DBName?: string;

  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: _Endpoint;

  /**
   * <p>The date and time that the cluster was created.</p>
   */
  ClusterCreateTime?: Date | string | number;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A list of cluster security group that are associated with the cluster. Each security group is represented by an element that contains <code>ClusterSecurityGroup.Name</code> and <code>ClusterSecurityGroup.Status</code> subelements. </p> <p>Cluster security groups are used when the cluster is not created in an Amazon Virtual Private Cloud (VPC). Clusters that are created in a VPC use VPC security groups, which are listed by the <b>VpcSecurityGroups</b> parameter. </p>
   */
  ClusterSecurityGroups?:
    | Array<_ClusterSecurityGroupMembership>
    | Iterable<_ClusterSecurityGroupMembership>;

  /**
   * <p>A list of Amazon Virtual Private Cloud (Amazon VPC) security groups that are associated with the cluster. This parameter is returned only if the cluster is in a VPC.</p>
   */
  VpcSecurityGroups?:
    | Array<_VpcSecurityGroupMembership>
    | Iterable<_VpcSecurityGroupMembership>;

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster. Each parameter group in the list is returned with its status.</p>
   */
  ClusterParameterGroups?:
    | Array<_ClusterParameterGroupStatus>
    | Iterable<_ClusterParameterGroupStatus>;

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is valid only when the cluster is in a VPC.</p>
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
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system maintenance can occur.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that, if present, indicates that changes to the cluster are pending. Specific pending changes are identified by subelements.</p>
   */
  PendingModifiedValues?: _PendingModifiedValues;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that major version upgrades will be applied automatically to the cluster during the maintenance window. </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that the cluster can be accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that data in the cluster is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>A value that describes the status of a cluster restore action. This parameter returns null if the cluster was not created by restoring a snapshot.</p>
   */
  RestoreStatus?: _RestoreStatus;

  /**
   * <p/>
   */
  DataTransferProgress?: _DataTransferProgress;

  /**
   * <p>A value that reports whether the Amazon Redshift cluster has finished applying any hardware security module (HSM) settings changes specified in a modify cluster command.</p> <p>Values: active, applying</p>
   */
  HsmStatus?: _HsmStatus;

  /**
   * <p>A value that returns the destination region and retention period that are configured for cross-region snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: _ClusterSnapshotCopyStatus;

  /**
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: Array<_ClusterNode> | Iterable<_ClusterNode>;

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: _ElasticIpStatus;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

  /**
   * <p>The list of tags for the cluster.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key ID of the encryption key used to encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.</p>
   */
  IamRoles?: Array<_ClusterIamRole> | Iterable<_ClusterIamRole>;

  /**
   * <p>Cluster operations that are waiting to be started.</p>
   */
  PendingActions?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The number of nodes that you can resize the cluster to with the elastic resize method. </p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * <p>Describes a group of <code>DeferredMaintenanceWindow</code> objects.</p>
   */
  DeferredMaintenanceWindows?:
    | Array<_DeferredMaintenanceWindow>
    | Iterable<_DeferredMaintenanceWindow>;

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   */
  SnapshotScheduleState?: "MODIFYING" | "ACTIVE" | "FAILED" | string;

  /**
   * <p>Returns the following:</p> <ul> <li> <p>AllowCancelResize: a boolean value indicating if the resize operation can be cancelled.</p> </li> <li> <p>ResizeType: Returns ClassicResize</p> </li> </ul>
   */
  ResizeInfo?: _ResizeInfo;
}

export interface _UnmarshalledCluster extends _Cluster {
  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: _UnmarshalledEndpoint;

  /**
   * <p>The date and time that the cluster was created.</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>A list of cluster security group that are associated with the cluster. Each security group is represented by an element that contains <code>ClusterSecurityGroup.Name</code> and <code>ClusterSecurityGroup.Status</code> subelements. </p> <p>Cluster security groups are used when the cluster is not created in an Amazon Virtual Private Cloud (VPC). Clusters that are created in a VPC use VPC security groups, which are listed by the <b>VpcSecurityGroups</b> parameter. </p>
   */
  ClusterSecurityGroups?: Array<_UnmarshalledClusterSecurityGroupMembership>;

  /**
   * <p>A list of Amazon Virtual Private Cloud (Amazon VPC) security groups that are associated with the cluster. This parameter is returned only if the cluster is in a VPC.</p>
   */
  VpcSecurityGroups?: Array<_UnmarshalledVpcSecurityGroupMembership>;

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster. Each parameter group in the list is returned with its status.</p>
   */
  ClusterParameterGroups?: Array<_UnmarshalledClusterParameterGroupStatus>;

  /**
   * <p>A value that, if present, indicates that changes to the cluster are pending. Specific pending changes are identified by subelements.</p>
   */
  PendingModifiedValues?: _UnmarshalledPendingModifiedValues;

  /**
   * <p>A value that describes the status of a cluster restore action. This parameter returns null if the cluster was not created by restoring a snapshot.</p>
   */
  RestoreStatus?: _UnmarshalledRestoreStatus;

  /**
   * <p/>
   */
  DataTransferProgress?: _UnmarshalledDataTransferProgress;

  /**
   * <p>A value that reports whether the Amazon Redshift cluster has finished applying any hardware security module (HSM) settings changes specified in a modify cluster command.</p> <p>Values: active, applying</p>
   */
  HsmStatus?: _UnmarshalledHsmStatus;

  /**
   * <p>A value that returns the destination region and retention period that are configured for cross-region snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: _UnmarshalledClusterSnapshotCopyStatus;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: Array<_UnmarshalledClusterNode>;

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: _UnmarshalledElasticIpStatus;

  /**
   * <p>The list of tags for the cluster.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.</p>
   */
  IamRoles?: Array<_UnmarshalledClusterIamRole>;

  /**
   * <p>Cluster operations that are waiting to be started.</p>
   */
  PendingActions?: Array<string>;

  /**
   * <p>Describes a group of <code>DeferredMaintenanceWindow</code> objects.</p>
   */
  DeferredMaintenanceWindows?: Array<_UnmarshalledDeferredMaintenanceWindow>;

  /**
   * <p>Returns the following:</p> <ul> <li> <p>AllowCancelResize: a boolean value indicating if the resize operation can be cancelled.</p> </li> <li> <p>ResizeType: Returns ClassicResize</p> </li> </ul>
   */
  ResizeInfo?: _UnmarshalledResizeInfo;
}
