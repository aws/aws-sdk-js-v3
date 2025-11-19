// smithy-typescript generated code
import {
  AuthenticationType,
  AZStatus,
  DataTieringStatus,
  InputAuthenticationType,
  IpDiscovery,
  NetworkType,
  ServiceUpdateStatus,
  ServiceUpdateType,
  SourceType,
  UpdateStrategy,
} from "./enums";

/**
 * <p>Returns the updates being applied to the ACL.</p>
 * @public
 */
export interface ACLPendingChanges {
  /**
   * <p>A list of user names being removed from the ACL</p>
   * @public
   */
  UserNamesToRemove?: string[] | undefined;

  /**
   * <p>A list of users being added to the ACL</p>
   * @public
   */
  UserNamesToAdd?: string[] | undefined;
}

/**
 * <p>An Access Control List. You can authenticate users with Access Contol Lists.
 *
 *          ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.</p>
 * @public
 */
export interface ACL {
  /**
   * <p>The name of the Access Control List</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Indicates ACL status. Can be "creating", "active", "modifying", "deleting".</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The list of user names that belong to the ACL.</p>
   * @public
   */
  UserNames?: string[] | undefined;

  /**
   * <p>The minimum engine version supported for the ACL</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * <p>A list of updates being applied to the ACL.</p>
   * @public
   */
  PendingChanges?: ACLPendingChanges | undefined;

  /**
   * <p>A list of clusters associated with the ACL.</p>
   * @public
   */
  Clusters?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACL</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * <p>The status of the ACL update</p>
 * @public
 */
export interface ACLsUpdateStatus {
  /**
   * <p>A list of ACLs pending to be applied.</p>
   * @public
   */
  ACLToApply?: string | undefined;
}

/**
 * <p>A request to apply a service update</p>
 * @public
 */
export interface ServiceUpdateRequest {
  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateNameToApply?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateClusterRequest {
  /**
   * <p>The cluster names to apply the updates.</p>
   * @public
   */
  ClusterNames: string[] | undefined;

  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdate?: ServiceUpdateRequest | undefined;
}

/**
 * <p>Represents the information required for client programs to connect to the cluster and its nodes.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The DNS hostname of the node.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The port number that the engine is listening on.</p>
   * @public
   */
  Port?: number | undefined;
}

/**
 * <p>Represents the progress of an online resharding operation.</p>
 * @public
 */
export interface SlotMigration {
  /**
   * <p>The percentage of the slot migration that is complete.</p>
   * @public
   */
  ProgressPercentage?: number | undefined;
}

/**
 * <p>The status of the online resharding</p>
 * @public
 */
export interface ReshardingStatus {
  /**
   * <p>The status of the online resharding slot migration</p>
   * @public
   */
  SlotMigration?: SlotMigration | undefined;
}

/**
 * <p>Update action that has yet to be processed for the corresponding apply/stop request</p>
 * @public
 */
export interface PendingModifiedServiceUpdate {
  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The status of the service update</p>
   * @public
   */
  Status?: ServiceUpdateStatus | undefined;
}

/**
 * <p>A list of updates being applied to the cluster</p>
 * @public
 */
export interface ClusterPendingUpdates {
  /**
   * <p>The status of an online resharding operation.</p>
   * @public
   */
  Resharding?: ReshardingStatus | undefined;

  /**
   * <p>A list of ACLs associated with the cluster that are being updated</p>
   * @public
   */
  ACLs?: ACLsUpdateStatus | undefined;

  /**
   * <p>A list of service updates being applied to the cluster</p>
   * @public
   */
  ServiceUpdates?: PendingModifiedServiceUpdate[] | undefined;
}

/**
 * <p>Represents a single security group and its status.</p>
 * @public
 */
export interface SecurityGroupMembership {
  /**
   * <p>The identifier of the security group.</p>
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * <p>The status of the security group membership. The status changes whenever a security group is modified, or when the security groups assigned to a cluster are modified.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software.</p>
 * @public
 */
export interface Node {
  /**
   * <p>The  node identifier. A node name is a numeric identifier (0001, 0002, etc.). The combination of cluster name, shard name and node name uniquely identifies every node used in a customer's Amazon account.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the service update on the node</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The Availability Zone in which the node resides</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The date and time when the node was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The hostname for connecting to this node.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;
}

/**
 * <p>Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.</p>
 * @public
 */
export interface Shard {
  /**
   * <p>The name of the shard</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current state of this replication group - creating, available, modifying, deleting.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The keyspace for this shard.</p>
   * @public
   */
  Slots?: string | undefined;

  /**
   * <p>A list containing information about individual nodes within the shard</p>
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * <p>The number of nodes in the shard</p>
   * @public
   */
  NumberOfNodes?: number | undefined;
}

/**
 * <p>Contains all of the attributes of a specific cluster.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The user-supplied name of the cluster. This identifier is a unique key that identifies a cluster.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the cluster</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the cluster. For example, Available, Updating, Creating.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A group of settings that are currently being applied.</p>
   * @public
   */
  PendingUpdates?: ClusterPendingUpdates | undefined;

  /**
   * <p>The name of the multi-Region cluster that this cluster belongs to.</p>
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * <p>The number of shards in the cluster</p>
   * @public
   */
  NumberOfShards?: number | undefined;

  /**
   * <p>A list of shards that are members of the cluster.</p>
   * @public
   */
  Shards?: Shard[] | undefined;

  /**
   * <p>Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).</p>
   * @public
   */
  AvailabilityMode?: AZStatus | undefined;

  /**
   * <p>The cluster's configuration endpoint</p>
   * @public
   */
  ClusterEndpoint?: Endpoint | undefined;

  /**
   * <p>The cluster's node type</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The name of the engine used by the cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The Redis OSS engine version used by the cluster</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The Redis OSS engine patch version used by the cluster</p>
   * @public
   */
  EnginePatchVersion?: string | undefined;

  /**
   * <p>The name of the parameter group used by the cluster</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The status of the parameter group used by the cluster, for example 'active' or 'applying'.</p>
   * @public
   */
  ParameterGroupStatus?: string | undefined;

  /**
   * <p>A list of security groups used by the cluster</p>
   * @public
   */
  SecurityGroups?: SecurityGroupMembership[] | undefined;

  /**
   * <p>The name of the subnet group used by the cluster</p>
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * <p>A flag to indicate if In-transit encryption is enabled</p>
   * @public
   */
  TLSEnabled?: boolean | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the cluster</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS notification topic</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The SNS topic must be in Active status to receive notifications</p>
   * @public
   */
  SnsTopicStatus?: string | undefined;

  /**
   * <p>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. </p>
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.
   *
   *          Example: 05:00-09:00
   *
   *          If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>The name of the Access Control List associated with this cluster.</p>
   * @public
   */
  ACLName?: string | undefined;

  /**
   * <p>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTiering?: DataTieringStatus | undefined;

  /**
   * <p>The IP address type for the cluster. Returns 'ipv4' for IPv4 only, 'ipv6' for IPv6 only, or 'dual-stack' if the cluster supports both IPv4 and IPv6 addressing.</p>
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * <p>The mechanism that the cluster uses to discover IP addresses. Returns 'ipv4' when DNS endpoints resolve to IPv4 addresses, or 'ipv6' when DNS endpoints resolve to IPv6 addresses.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * <p>A cluster whose updates have failed</p>
 * @public
 */
export interface UnprocessedCluster {
  /**
   * <p>The name of the cluster</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The error type associated with the update failure</p>
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * <p>The error message associated with the update failure</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateClusterResponse {
  /**
   * <p>The list of clusters that have been updated.</p>
   * @public
   */
  ProcessedClusters?: Cluster[] | undefined;

  /**
   * <p>The list of clusters where updates have not been applied.</p>
   * @public
   */
  UnprocessedClusters?: UnprocessedCluster[] | undefined;
}

/**
 * <p>A tag that can be added to an MemoryDB resource. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your MemoryDB resources.
 *          When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. A tag with a null Value is permitted. For more information, see
 *          <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging-resources.html">Tagging your MemoryDB resources</a>
 *          </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for the tag. May not be null.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The tag's value. May be null.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CopySnapshotRequest {
  /**
   * <p>The name of an existing snapshot from which to make a copy.</p>
   * @public
   */
  SourceSnapshotName: string | undefined;

  /**
   * <p>A name for the snapshot copy. MemoryDB does not permit overwriting a snapshot, therefore this name must be unique within its context - MemoryDB or an Amazon S3 bucket if exporting.</p>
   * @public
   */
  TargetSnapshotName: string | undefined;

  /**
   * <p>The Amazon S3 bucket to which the snapshot is exported. This parameter is used only when exporting a snapshot for external access.
   *
   *        When using this parameter to export a snapshot, be sure MemoryDB has the needed permissions to this S3 bucket. For more information, see
   *
   *        <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/snapshots-exporting.html">Step 2: Grant MemoryDB Access to Your Amazon S3 Bucket</a>.
   *
   *      </p>
   * @public
   */
  TargetBucket?: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the target snapshot.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.</p>
 * @public
 */
export interface ShardConfiguration {
  /**
   * <p>A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format startkey-endkey.</p>
   * @public
   */
  Slots?: string | undefined;

  /**
   * <p>The number of read replica nodes in this shard.</p>
   * @public
   */
  ReplicaCount?: number | undefined;
}

/**
 * <p>Provides details of a shard in a snapshot</p>
 * @public
 */
export interface ShardDetail {
  /**
   * <p>The name of the shard</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The configuration details of the shard</p>
   * @public
   */
  Configuration?: ShardConfiguration | undefined;

  /**
   * <p>The size of the shard's snapshot</p>
   * @public
   */
  Size?: string | undefined;

  /**
   * <p>The date and time that the shard's snapshot was created</p>
   * @public
   */
  SnapshotCreationTime?: Date | undefined;
}

/**
 * <p>A list of cluster configuration options. </p>
 * @public
 */
export interface ClusterConfiguration {
  /**
   * <p>The name of the cluster</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the cluster configuration</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The node type used for the cluster</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The name of the engine used by the cluster configuration.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The Redis OSS engine version used by the cluster</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The specified maintenance window for the cluster</p>
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS notification topic for the cluster</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The port used by the cluster</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of parameter group used by the cluster</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The name of the subnet group used by the cluster</p>
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * <p>The ID of the VPC the cluster belongs to</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The snapshot retention limit set by the cluster</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The snapshot window set by the cluster</p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>The number of shards in the cluster</p>
   * @public
   */
  NumShards?: number | undefined;

  /**
   * <p>The list of shards in the cluster</p>
   * @public
   */
  Shards?: ShardDetail[] | undefined;

  /**
   * <p>The name of the multi-Region parameter group associated with the cluster configuration.</p>
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * <p>The name for the multi-Region cluster associated with the cluster configuration.</p>
   * @public
   */
  MultiRegionClusterName?: string | undefined;
}

/**
 * <p>Represents a copy of an entire cluster as of the time when the snapshot was taken.</p>
 * @public
 */
export interface Snapshot {
  /**
   * <p>The name of the snapshot</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the snapshot.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The configuration of the cluster from which the snapshot was taken</p>
   * @public
   */
  ClusterConfiguration?: ClusterConfiguration | undefined;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTiering?: DataTieringStatus | undefined;
}

/**
 * @public
 */
export interface CopySnapshotResponse {
  /**
   * <p>Represents a copy of an entire cluster as of the time when the snapshot was taken.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateACLRequest {
  /**
   * <p>The name of the Access Control List.</p>
   * @public
   */
  ACLName: string | undefined;

  /**
   * <p>The list of users that belong to the Access Control List.</p>
   * @public
   */
  UserNames?: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateACLResponse {
  /**
   * <p>The newly-created Access Control List.</p>
   * @public
   */
  ACL?: ACL | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>The name of the cluster. This value must be unique as it also serves as the cluster identifier.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The compute and memory capacity of the nodes in the cluster.</p>
   * @public
   */
  NodeType: string | undefined;

  /**
   * <p>The name of the multi-Region cluster to be created.</p>
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * <p>The name of the parameter group associated with the cluster.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>An optional description of the cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The number of shards the cluster will contain. The default value is 1. </p>
   * @public
   */
  NumShards?: number | undefined;

  /**
   * <p>The number of replicas to apply to each shard. The default value is 1. The maximum is 5. </p>
   * @public
   */
  NumReplicasPerShard?: number | undefined;

  /**
   * <p>The name of the subnet group to be used for the cluster.</p>
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * <p>A list of security group names to associate with this cluster.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance
   *          on the cluster is performed. It is specified as a range in
   *          the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *          maintenance window is a 60 minute period.</p>
   *          <p>Valid values for <code>ddd</code> are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sun</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mon</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tue</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>wed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>thu</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sat</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>sun:23:00-mon:01:30</code>
   *          </p>
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * <p>The port number on which each of the nodes accepts connections.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>A flag to enable in-transit encryption on the cluster.</p>
   * @public
   */
  TLSEnabled?: boolean | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.</p>
   * @public
   */
  SnapshotArns?: string[] | undefined;

  /**
   * <p>The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.</p>
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * <p>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.</p>
   *          <p>    Example: 05:00-09:00</p>
   *          <p>    If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>The name of the Access Control List to associate with the cluster.</p>
   * @public
   */
  ACLName: string | undefined;

  /**
   * <p>The name of the engine to be used for the cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version number of the Redis OSS engine to be used for the cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTiering?: boolean | undefined;

  /**
   * <p>Specifies the IP address type for the cluster. Valid values are 'ipv4', 'ipv6', or 'dual_stack'. When set to 'ipv4', the cluster will only be accessible via IPv4 addresses. When set to 'ipv6', the cluster will only be accessible via IPv6 addresses. When set to 'dual_stack', the cluster will be accessible via both IPv4 and IPv6 addresses. If not specified, the default is 'ipv4'.</p>
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * <p>The mechanism for discovering IP addresses for the cluster discovery protocol. Valid values are 'ipv4' or 'ipv6'. When set to 'ipv4', cluster discovery functions such as cluster slots, cluster shards, and cluster nodes return IPv4 addresses for cluster nodes. When set to 'ipv6', the cluster discovery functions return IPv6 addresses for cluster nodes. The value must be compatible with the NetworkType parameter. If not specified, the default is 'ipv4'.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>The newly-created cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionClusterRequest {
  /**
   * <p>A suffix to be added to the Multi-Region cluster name. Amazon MemoryDB automatically applies a prefix to the Multi-Region cluster Name when it is created. Each Amazon Region has its own prefix. For instance, a Multi-Region cluster Name created in the US-West-1 region will begin with "virxk", along with the suffix name you provide. The suffix guarantees uniqueness of the Multi-Region cluster name across multiple regions.</p>
   * @public
   */
  MultiRegionClusterNameSuffix: string | undefined;

  /**
   * <p>A description for the multi-Region cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the engine to be used for the multi-Region cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the engine to be used for the multi-Region cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The node type to be used for the multi-Region cluster.</p>
   * @public
   */
  NodeType: string | undefined;

  /**
   * <p>The name of the multi-Region parameter group to be associated with the cluster.</p>
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * <p>The number of shards for the multi-Region cluster.</p>
   * @public
   */
  NumShards?: number | undefined;

  /**
   * <p>Whether to enable TLS encryption for the multi-Region cluster.</p>
   * @public
   */
  TLSEnabled?: boolean | undefined;

  /**
   * <p>A list of tags to be applied to the multi-Region cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Represents a Regional cluster</p>
 * @public
 */
export interface RegionalCluster {
  /**
   * <p>The name of the Regional cluster</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The Region the current Regional cluster is assigned to.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The status of the Regional cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) the Regional cluster</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * <p>Represents a multi-Region cluster.</p>
 * @public
 */
export interface MultiRegionCluster {
  /**
   * <p>The name of the multi-Region cluster.</p>
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * <p>The description of the multi-Region cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the multi-Region cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The node type used by the multi-Region cluster.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The name of the engine used by the multi-Region cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the engine used by the multi-Region cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The number of shards in the multi-Region cluster.</p>
   * @public
   */
  NumberOfShards?: number | undefined;

  /**
   * <p>The clusters in this multi-Region cluster.</p>
   * @public
   */
  Clusters?: RegionalCluster[] | undefined;

  /**
   * <p>The name of the multi-Region parameter group associated with the cluster.</p>
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * <p>Indiciates if the multi-Region cluster is TLS enabled.</p>
   * @public
   */
  TLSEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the multi-Region cluster.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionClusterResponse {
  /**
   * <p>Details about the newly created multi-Region cluster.</p>
   * @public
   */
  MultiRegionCluster?: MultiRegionCluster | undefined;
}

/**
 * @public
 */
export interface CreateParameterGroupRequest {
  /**
   * <p>The name of the parameter group.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The name of the parameter group family that the parameter group can be used with.</p>
   * @public
   */
  Family: string | undefined;

  /**
   * <p>An optional description of the parameter group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.</p>
 * @public
 */
export interface ParameterGroup {
  /**
   * <p>The name of the parameter group</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the parameter group family that this  parameter group is compatible with.</p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p>A description of the parameter group</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter group</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateParameterGroupResponse {
  /**
   * <p>The newly-created parameter group.</p>
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * <p>The snapshot is created from this cluster.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>A name for the snapshot being created.</p>
   * @public
   */
  SnapshotName: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * <p>The newly-created snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateSubnetGroupRequest {
  /**
   * <p>The name of the subnet group.</p>
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>A description for the subnet group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of VPC subnet IDs for the subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.</p>
 * @public
 */
export interface Subnet {
  /**
   * <p>The unique identifier for the subnet.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The Availability Zone where the subnet resides</p>
   * @public
   */
  AvailabilityZone?: AvailabilityZone | undefined;

  /**
   * <p>The network types supported by this subnet. Returns an array of strings that can include 'ipv4', 'ipv6', or both, indicating whether the subnet supports IPv4 only, IPv6 only, or dual-stack deployments.</p>
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * <p>Represents the output of one of the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>CreateSubnetGroup</p>
 *             </li>
 *             <li>
 *                <p>UpdateSubnetGroup</p>
 *             </li>
 *          </ul>
 *          <p>A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.</p>
 * @public
 */
export interface SubnetGroup {
  /**
   * <p>The name of the subnet group</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the subnet group</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>A list of subnets associated with the subnet group.</p>
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the subnet group.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The network types supported by this subnet group. Returns an array of strings that can include 'ipv4', 'ipv6', or both, indicating the IP address types that can be used for clusters deployed in this subnet group.</p>
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * @public
 */
export interface CreateSubnetGroupResponse {
  /**
   * <p>The newly-created subnet group.</p>
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}

/**
 * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.</p>
 * @public
 */
export interface AuthenticationMode {
  /**
   * <p>Indicates whether the user requires a password to authenticate. All newly-created users require a password.</p>
   * @public
   */
  Type?: InputAuthenticationType | undefined;

  /**
   * <p>The password(s) used for authentication</p>
   * @public
   */
  Passwords?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The name of the user. This value must be unique as it also serves as the user identifier.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate.</p>
   * @public
   */
  AuthenticationMode: AuthenticationMode | undefined;

  /**
   * <p>Access permissions string used for this user.</p>
   * @public
   */
  AccessString: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.</p>
 * @public
 */
export interface Authentication {
  /**
   * <p>Indicates whether the user requires a password to authenticate.</p>
   * @public
   */
  Type?: AuthenticationType | undefined;

  /**
   * <p>The number of passwords belonging to the user. The maximum is two.</p>
   * @public
   */
  PasswordCount?: number | undefined;
}

/**
 * <p>You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.</p>
 * @public
 */
export interface User {
  /**
   * <p>The name of the user</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Indicates the user status. Can be "active", "modifying" or "deleting".</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Access permissions string used for this user.</p>
   * @public
   */
  AccessString?: string | undefined;

  /**
   * <p>The names of the Access Control Lists to which the user belongs</p>
   * @public
   */
  ACLNames?: string[] | undefined;

  /**
   * <p>The minimum engine version supported for the user</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * <p>Denotes whether the user requires a password to authenticate.</p>
   * @public
   */
  Authentication?: Authentication | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.
   *
   *       </p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The newly-created user.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DeleteACLRequest {
  /**
   * <p>The name of the Access Control List to delete.</p>
   * @public
   */
  ACLName: string | undefined;
}

/**
 * @public
 */
export interface DeleteACLResponse {
  /**
   * <p>The Access Control List object that has been deleted.</p>
   * @public
   */
  ACL?: ACL | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The name of the cluster to be deleted</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The name of the multi-Region cluster to be deleted.</p>
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * <p>The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.</p>
   * @public
   */
  FinalSnapshotName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>The cluster object that has been deleted.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteMultiRegionClusterRequest {
  /**
   * <p>The name of the multi-Region cluster to be deleted.</p>
   * @public
   */
  MultiRegionClusterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMultiRegionClusterResponse {
  /**
   * <p>Details about the deleted multi-Region cluster.</p>
   * @public
   */
  MultiRegionCluster?: MultiRegionCluster | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupRequest {
  /**
   * <p>The name of the parameter group to delete.</p>
   * @public
   */
  ParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupResponse {
  /**
   * <p>The parameter group that has been deleted.</p>
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * <p>The name of the snapshot to delete.</p>
   * @public
   */
  SnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResponse {
  /**
   * <p>The snapshot object that has been deleted.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupRequest {
  /**
   * <p>The name of the subnet group to delete.</p>
   * @public
   */
  SubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupResponse {
  /**
   * <p>The subnet group object that has been deleted.</p>
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The name of the user to delete</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {
  /**
   * <p>The user object that has been deleted.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DescribeACLsRequest {
  /**
   * <p>The name of the ACL.</p>
   * @public
   */
  ACLName?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeACLsResponse {
  /**
   * <p>The list of ACLs.</p>
   * @public
   */
  ACLs?: ACL[] | undefined;

  /**
   * <p>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional flag that can be included in the request to retrieve information about the individual shard(s).</p>
   * @public
   */
  ShowShardDetails?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of clusters</p>
   * @public
   */
  Clusters?: Cluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineVersionsRequest {
  /**
   * <p>The name of the engine for which to list available versions.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The Redis OSS engine version</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of a specific parameter group family to return details for.</p>
   * @public
   */
  ParameterGroupFamily?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If true, specifies that only the default version of the specified engine or engine and major version combination is to be returned.</p>
   * @public
   */
  DefaultOnly?: boolean | undefined;
}

/**
 * <p>Provides details of the Redis OSS engine version</p>
 * @public
 */
export interface EngineVersionInfo {
  /**
   * <p>The name of the engine for which version information is provided.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The engine version</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The patched engine version</p>
   * @public
   */
  EnginePatchVersion?: string | undefined;

  /**
   * <p>Specifies the name of the parameter group family to which the engine default parameters apply.</p>
   * @public
   */
  ParameterGroupFamily?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEngineVersionsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of engine version details. Each element in the list contains detailed information about one engine version.</p>
   * @public
   */
  EngineVersions?: EngineVersionInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsRequest {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified, all sources are included in the response.</p>
   * @public
   */
  SourceName?: string | undefined;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *
   *          Example: 2017-03-30T07:03:49.555Z</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *
   *          Example: 2017-03-30T07:03:49.555Z</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The number of minutes worth of events to retrieve.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a
 *          node.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The name for the source of the event. For example, if the event occurred at the cluster level, the identifier would be the name of the cluster.</p>
   * @public
   */
  SourceName?: string | undefined;

  /**
   * <p>Specifies the origin of this event - a cluster, a parameter group, a security group, etc.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The text of the event.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The date and time when the event occurred.</p>
   * @public
   */
  Date?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of events. Each element in the list contains detailed information about one event.</p>
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionClustersRequest {
  /**
   * <p>The name of a specific multi-Region cluster to describe.</p>
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Details about the multi-Region cluster.</p>
   * @public
   */
  ShowClusterDetails?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionClustersResponse {
  /**
   * <p>A token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of multi-Region clusters.</p>
   * @public
   */
  MultiRegionClusters?: MultiRegionCluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionParameterGroupsRequest {
  /**
   * <p>The request for information on a specific multi-region parameter group.</p>
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the output of a CreateMultiRegionParameterGroup operation. A multi-region parameter group represents a collection of parameters that can be applied to clusters across multiple regions.</p>
 * @public
 */
export interface MultiRegionParameterGroup {
  /**
   * <p>The name of the multi-region parameter group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the parameter group family that this multi-region parameter group is compatible with.</p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p>A description of the multi-region parameter group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the multi-region parameter group.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionParameterGroupsResponse {
  /**
   * <p>An optional token to include in the response. If this token is provided, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of multi-region parameter groups. Each element in the list contains detailed information about one parameter group.</p>
   * @public
   */
  MultiRegionParameterGroups?: MultiRegionParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionParametersRequest {
  /**
   * <p>The name of the multi-region parameter group to return details for.</p>
   * @public
   */
  MultiRegionParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return. Valid values: user | system | engine-default</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes an individual setting that controls some aspect of MemoryDB behavior across multiple regions.</p>
 * @public
 */
export interface MultiRegionParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>A description of the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates the source of the parameter value. Valid values: user | system | engine-default</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The valid data type for the parameter.</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>The valid range of values for the parameter.</p>
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionParametersResponse {
  /**
   * <p>An optional token to include in the response. If this token is provided, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of parameters specific to a particular multi-region parameter group. Each element in the list contains detailed information about one parameter.</p>
   * @public
   */
  MultiRegionParameters?: MultiRegionParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeParameterGroupsRequest {
  /**
   * <p>The name of a specific  parameter group to return details for.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParameterGroupsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of parameter groups. Each element in the list contains detailed information about one parameter group.</p>
   * @public
   */
  ParameterGroups?: ParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * <p>he name of a specific  parameter group to return details for.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes an individual setting that controls some aspect of MemoryDB behavior.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the parameter</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>A description of the parameter</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The parameter's data type</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>The valid range of values for the parameter.</p>
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParametersResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of parameters specific to a particular parameter group. Each element in the list contains detailed information about one parameter.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesRequest {
  /**
   * <p>The reserved node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.</p>
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * <p>The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.</p>
   * @public
   */
  ReservedNodesOfferingId?: string | undefined;

  /**
   * <p>The node type filter value. Use this parameter to show only those reservations matching the specified  node type. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.</p>
   * @public
   */
  Duration?: string | undefined;

  /**
   * <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *          Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The recurring charge to run this reserved node.</p>
 * @public
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge to run this reserved node.</p>
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * <p>The frequency of the recurring price charged to run this reserved node.</p>
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * <p>Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.</p>
 * @public
 */
export interface ReservedNode {
  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * <p>The ID of the reserved node offering to purchase.</p>
   * @public
   */
  ReservedNodesOfferingId?: string | undefined;

  /**
   * <p>The node type for the reserved nodes.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The time the reservation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The duration of the reservation in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The fixed price charged for this reserved node.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The number of nodes that have been reserved.</p>
   * @public
   */
  NodeCount?: number | undefined;

  /**
   * <p>The offering type of this reserved node.</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The state of the reserved node.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The recurring price charged to run this reserved node.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the reserved node.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesResponse {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns information about reserved nodes for this account, or about a specified reserved node.</p>
   * @public
   */
  ReservedNodes?: ReservedNode[] | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesOfferingsRequest {
  /**
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   * @public
   */
  ReservedNodesOfferingId?: string | undefined;

  /**
   * <p>The node type for the reserved nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.</p>
   * @public
   */
  Duration?: string | undefined;

  /**
   * <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *          Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The offering type of this node.</p>
 * @public
 */
export interface ReservedNodesOffering {
  /**
   * <p>The offering identifier.</p>
   * @public
   */
  ReservedNodesOfferingId?: string | undefined;

  /**
   * <p>The node type for the reserved nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The duration of the reservation in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The fixed price charged for this reserved node.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The offering type of this reserved node.</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The recurring price charged to run this reserved node.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesOfferingsResponse {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Lists available reserved node offerings.</p>
   * @public
   */
  ReservedNodesOfferings?: ReservedNodesOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceUpdatesRequest {
  /**
   * <p>The unique ID of the service update to describe.</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The list of cluster names to identify service updates to apply.</p>
   * @public
   */
  ClusterNames?: string[] | undefined;

  /**
   * <p>The status(es) of the service updates to filter on.</p>
   * @public
   */
  Status?: ServiceUpdateStatus[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An update that you can apply to your MemoryDB clusters.</p>
 * @public
 */
export interface ServiceUpdate {
  /**
   * <p>The name of the cluster to which the service update applies</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The date when the service update is initially available</p>
   * @public
   */
  ReleaseDate?: Date | undefined;

  /**
   * <p>Provides details of the service update</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the service update</p>
   * @public
   */
  Status?: ServiceUpdateStatus | undefined;

  /**
   * <p>Reflects the nature of the service update</p>
   * @public
   */
  Type?: ServiceUpdateType | undefined;

  /**
   * <p>The name of the engine for which a service update is available.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>A list of nodes updated by the service update</p>
   * @public
   */
  NodesUpdated?: string | undefined;

  /**
   * <p>The date at which the service update will be automatically applied</p>
   * @public
   */
  AutoUpdateStartDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeServiceUpdatesResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of service updates</p>
   * @public
   */
  ServiceUpdates?: ServiceUpdate[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * <p>A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>A user-supplied name of the snapshot. If this parameter is specified, only this named snapshot is described.</p>
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * <p>If set to system, the output shows snapshots that were automatically created by MemoryDB. If set to user the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A Boolean value which if true, the shard configuration is included in the snapshot description.</p>
   * @public
   */
  ShowDetail?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of snapshots. Each item in the list contains detailed information about one snapshot.</p>
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsRequest {
  /**
   * <p>The name of the subnet group to return details for.</p>
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of subnet groups. Each element in the list contains detailed information about one group.</p>
   * @public
   */
  SubnetGroups?: SubnetGroup[] | undefined;
}

/**
 * <p>Used to streamline results of a search based on the property being filtered.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The property being filtered. For example, UserName.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The property values to filter on. For example, "user-123".</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeUsersRequest {
  /**
   * <p>The name of the user.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Filter to determine the list of users to return.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersResponse {
  /**
   * <p>A list of users.</p>
   * @public
   */
  Users?: User[] | undefined;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface FailoverShardRequest {
  /**
   * <p>The cluster being failed over.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The name of the shard.</p>
   * @public
   */
  ShardName: string | undefined;
}

/**
 * @public
 */
export interface FailoverShardResponse {
  /**
   * <p>The cluster being failed over.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ListAllowedMultiRegionClusterUpdatesRequest {
  /**
   * <p>The name of the multi-Region cluster.</p>
   * @public
   */
  MultiRegionClusterName: string | undefined;
}

/**
 * @public
 */
export interface ListAllowedMultiRegionClusterUpdatesResponse {
  /**
   * <p>The node types that the cluster can be scaled up to.</p>
   * @public
   */
  ScaleUpNodeTypes?: string[] | undefined;

  /**
   * <p>The node types that the cluster can be scaled down to.</p>
   * @public
   */
  ScaleDownNodeTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAllowedNodeTypeUpdatesRequest {
  /**
   * <p>The name of the cluster you want to scale. MemoryDB uses the cluster name to identify the current node type being used by this cluster, and from that to create a list of node types
   *          you can scale up to.</p>
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface ListAllowedNodeTypeUpdatesResponse {
  /**
   * <p>A list node types which you can use to scale up your cluster.</p>
   * @public
   */
  ScaleUpNodeTypes?: string[] | undefined;

  /**
   * <p>A list node types which you can use to scale down your cluster.</p>
   * @public
   */
  ScaleDownNodeTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>A list of tags as key-value pairs.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedNodesOfferingRequest {
  /**
   * <p>The ID of the reserved node offering to purchase.</p>
   * @public
   */
  ReservedNodesOfferingId: string | undefined;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * <p>The number of node instances to reserve.</p>
   * @public
   */
  NodeCount?: number | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedNodesOfferingResponse {
  /**
   * <p>Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.</p>
   * @public
   */
  ReservedNode?: ReservedNode | undefined;
}

/**
 * @public
 */
export interface ResetParameterGroupRequest {
  /**
   * <p>The name of the parameter group to reset.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>If true, all parameters in the parameter group are reset to their default values. If false, only the parameters listed by ParameterNames are reset to their default values.</p>
   * @public
   */
  AllParameters?: boolean | undefined;

  /**
   * <p>An array of parameter names to reset to their default values. If AllParameters is true, do not use ParameterNames. If AllParameters is false, you must specify the name of at least one parameter to reset.</p>
   * @public
   */
  ParameterNames?: string[] | undefined;
}

/**
 * @public
 */
export interface ResetParameterGroupResponse {
  /**
   * <p>The parameter group being reset.</p>
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
  /**
   * <p>A list of tags as key-value pairs.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be removed.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of keys of the tags that are to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * <p>The list of tags removed.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateACLRequest {
  /**
   * <p>The name of the Access Control List.</p>
   * @public
   */
  ACLName: string | undefined;

  /**
   * <p>The list of users to add to the Access Control List.</p>
   * @public
   */
  UserNamesToAdd?: string[] | undefined;

  /**
   * <p>The list of users to remove from the Access Control List.</p>
   * @public
   */
  UserNamesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateACLResponse {
  /**
   * <p>The updated Access Control List.</p>
   * @public
   */
  ACL?: ACL | undefined;
}

/**
 * <p>A request to configure the number of replicas in a shard</p>
 * @public
 */
export interface ReplicaConfigurationRequest {
  /**
   * <p>The number of replicas to scale up or down to</p>
   * @public
   */
  ReplicaCount?: number | undefined;
}

/**
 * <p>A request to configure the sharding properties of a cluster</p>
 * @public
 */
export interface ShardConfigurationRequest {
  /**
   * <p>The number of shards in the cluster</p>
   * @public
   */
  ShardCount?: number | undefined;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * <p>The name of the cluster to update.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The description of the cluster to update.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The SecurityGroupIds to update.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance
   *          on the cluster is performed. It is specified as a range in
   *          the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *          maintenance window is a 60 minute period.</p>
   *          <p>Valid values for <code>ddd</code> are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sun</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mon</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tue</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>wed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>thu</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sat</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>sun:23:00-mon:01:30</code>
   *          </p>
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * <p>The SNS topic ARN to update.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The status of the Amazon SNS notification topic. Notifications are sent only if the status is active.</p>
   * @public
   */
  SnsTopicStatus?: string | undefined;

  /**
   * <p>The name of the parameter group to update.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.</p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>The number of days for which MemoryDB retains automatic cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>A valid node type that you want to scale this cluster up or down to.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The name of the engine to be used for the cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The upgraded version of the engine to be run on the nodes. You can upgrade to a newer engine version, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The number of replicas that will reside in each shard.</p>
   * @public
   */
  ReplicaConfiguration?: ReplicaConfigurationRequest | undefined;

  /**
   * <p>The number of shards in the cluster.</p>
   * @public
   */
  ShardConfiguration?: ShardConfigurationRequest | undefined;

  /**
   * <p>The Access Control List that is associated with the cluster.</p>
   * @public
   */
  ACLName?: string | undefined;

  /**
   * <p>The mechanism for discovering IP addresses for the cluster discovery protocol. Valid values are 'ipv4' or 'ipv6'. When set to 'ipv4', cluster discovery functions such as cluster slots, cluster shards, and cluster nodes will return IPv4 addresses for cluster nodes. When set to 'ipv6', the cluster discovery functions return IPv6 addresses for cluster nodes. The value must be compatible with the NetworkType parameter. If not specified, the default is 'ipv4'.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * <p>The updated cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface UpdateMultiRegionClusterRequest {
  /**
   * <p>The name of the multi-Region cluster to be updated.</p>
   * @public
   */
  MultiRegionClusterName: string | undefined;

  /**
   * <p>The new node type to be used for the multi-Region cluster.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>A new description for the multi-Region cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The new engine version to be used for the multi-Region cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>A request to configure the sharding properties of a cluster</p>
   * @public
   */
  ShardConfiguration?: ShardConfigurationRequest | undefined;

  /**
   * <p>The new multi-Region parameter group to be associated with the cluster.</p>
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * <p>The strategy to use for the update operation. Supported values are "coordinated" or "uncoordinated".</p>
   * @public
   */
  UpdateStrategy?: UpdateStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateMultiRegionClusterResponse {
  /**
   * <p>The status of updating the multi-Region cluster.</p>
   * @public
   */
  MultiRegionCluster?: MultiRegionCluster | undefined;
}

/**
 * <p>Describes a name-value pair that is used to update the value of a parameter.</p>
 * @public
 */
export interface ParameterNameValue {
  /**
   * <p>The name of the parameter</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The value of the parameter</p>
   * @public
   */
  ParameterValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupRequest {
  /**
   * <p>The name of the parameter group to update.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be updated per request.</p>
   * @public
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupResponse {
  /**
   * <p>The updated parameter group</p>
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetGroupRequest {
  /**
   * <p>The name of the subnet group</p>
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>A description of the subnet group</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The EC2 subnet IDs for the subnet group.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetGroupResponse {
  /**
   * <p>The updated subnet group</p>
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The name of the user</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate.</p>
   * @public
   */
  AuthenticationMode?: AuthenticationMode | undefined;

  /**
   * <p>Access permissions string used for this user.</p>
   * @public
   */
  AccessString?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The updated user</p>
   * @public
   */
  User?: User | undefined;
}
