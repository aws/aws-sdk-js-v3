/**
 * <p>Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.</p>
 */
export interface _PendingModifiedValues {
  /**
   * <p>The pending or in-progress change of the master user password for the cluster.</p>
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
   * <p>The pending or in-progress change of the automated snapshot retention period.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The pending or in-progress change of the new identifier for the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The pending or in-progress change of the ability to connect to the cluster from the public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in the Amazon Redshift Cluster Management Guide.</p> <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p> <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name of the maintenance track that the cluster will change to during the next maintenance window.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The encryption type for a cluster. Possible values are: KMS and None. For the China region the possible values are None, and Legacy. </p>
   */
  EncryptionType?: string;
}

export type _UnmarshalledPendingModifiedValues = _PendingModifiedValues;
