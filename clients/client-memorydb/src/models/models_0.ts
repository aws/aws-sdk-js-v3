// smithy-typescript generated code
import type {
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
 * Returns the updates being applied to the ACL.
 *
 * @public
 */
export interface ACLPendingChanges {
  /**
   * A list of user names being removed from the ACL
   *
   * @public
   */
  UserNamesToRemove?: string[] | undefined;

  /**
   * A list of users being added to the ACL
   *
   * @public
   */
  UserNamesToAdd?: string[] | undefined;
}

/**
 * An Access Control List. You can authenticate users with Access Contol Lists. ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.
 *
 * @public
 */
export interface ACL {
  /**
   * The name of the Access Control List
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Indicates ACL status. Can be "creating", "active", "modifying", "deleting".
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The list of user names that belong to the ACL.
   *
   * @public
   */
  UserNames?: string[] | undefined;

  /**
   * The minimum engine version supported for the ACL
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * A list of updates being applied to the ACL.
   *
   * @public
   */
  PendingChanges?: ACLPendingChanges | undefined;

  /**
   * A list of clusters associated with the ACL.
   *
   * @public
   */
  Clusters?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACL
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * The status of the ACL update
 *
 * @public
 */
export interface ACLsUpdateStatus {
  /**
   * A list of ACLs pending to be applied.
   *
   * @public
   */
  ACLToApply?: string | undefined;
}

/**
 * A request to apply a service update
 *
 * @public
 */
export interface ServiceUpdateRequest {
  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateNameToApply?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateClusterRequest {
  /**
   * The cluster names to apply the updates.
   *
   * @public
   */
  ClusterNames: string[] | undefined;

  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdate?: ServiceUpdateRequest | undefined;
}

/**
 * Represents the information required for client programs to connect to the cluster and its nodes.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The DNS hostname of the node.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The port number that the engine is listening on.
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * Represents the progress of an online resharding operation.
 *
 * @public
 */
export interface SlotMigration {
  /**
   * The percentage of the slot migration that is complete.
   *
   * @public
   */
  ProgressPercentage?: number | undefined;
}

/**
 * The status of the online resharding
 *
 * @public
 */
export interface ReshardingStatus {
  /**
   * The status of the online resharding slot migration
   *
   * @public
   */
  SlotMigration?: SlotMigration | undefined;
}

/**
 * Update action that has yet to be processed for the corresponding apply/stop request
 *
 * @public
 */
export interface PendingModifiedServiceUpdate {
  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * The status of the service update
   *
   * @public
   */
  Status?: ServiceUpdateStatus | undefined;
}

/**
 * A list of updates being applied to the cluster
 *
 * @public
 */
export interface ClusterPendingUpdates {
  /**
   * The status of an online resharding operation.
   *
   * @public
   */
  Resharding?: ReshardingStatus | undefined;

  /**
   * A list of ACLs associated with the cluster that are being updated
   *
   * @public
   */
  ACLs?: ACLsUpdateStatus | undefined;

  /**
   * A list of service updates being applied to the cluster
   *
   * @public
   */
  ServiceUpdates?: PendingModifiedServiceUpdate[] | undefined;
}

/**
 * Represents a single security group and its status.
 *
 * @public
 */
export interface SecurityGroupMembership {
  /**
   * The identifier of the security group.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * The status of the security group membership. The status changes whenever a security group is modified, or when the security groups assigned to a cluster are modified.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software.
 *
 * @public
 */
export interface Node {
  /**
   * The node identifier. A node name is a numeric identifier (0001, 0002, etc.). The combination of cluster name, shard name and node name uniquely identifies every node used in a customer's Amazon account.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the service update on the node
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The Availability Zone in which the node resides
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The date and time when the node was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The hostname for connecting to this node.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;
}

/**
 * Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
 *
 * @public
 */
export interface Shard {
  /**
   * The name of the shard
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current state of this replication group - creating, available, modifying, deleting.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The keyspace for this shard.
   *
   * @public
   */
  Slots?: string | undefined;

  /**
   * A list containing information about individual nodes within the shard
   *
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * The number of nodes in the shard
   *
   * @public
   */
  NumberOfNodes?: number | undefined;
}

/**
 * Contains all of the attributes of a specific cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The user-supplied name of the cluster. This identifier is a unique key that identifies a cluster.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the cluster
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the cluster. For example, Available, Updating, Creating.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A group of settings that are currently being applied.
   *
   * @public
   */
  PendingUpdates?: ClusterPendingUpdates | undefined;

  /**
   * The name of the multi-Region cluster that this cluster belongs to.
   *
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * The number of shards in the cluster
   *
   * @public
   */
  NumberOfShards?: number | undefined;

  /**
   * A list of shards that are members of the cluster.
   *
   * @public
   */
  Shards?: Shard[] | undefined;

  /**
   * Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).
   *
   * @public
   */
  AvailabilityMode?: AZStatus | undefined;

  /**
   * The cluster's configuration endpoint
   *
   * @public
   */
  ClusterEndpoint?: Endpoint | undefined;

  /**
   * The cluster's node type
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The name of the engine used by the cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The Redis OSS engine version used by the cluster
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The Redis OSS engine patch version used by the cluster
   *
   * @public
   */
  EnginePatchVersion?: string | undefined;

  /**
   * The name of the parameter group used by the cluster
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The status of the parameter group used by the cluster, for example 'active' or 'applying'.
   *
   * @public
   */
  ParameterGroupStatus?: string | undefined;

  /**
   * A list of security groups used by the cluster
   *
   * @public
   */
  SecurityGroups?: SecurityGroupMembership[] | undefined;

  /**
   * The name of the subnet group used by the cluster
   *
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * A flag to indicate if In-transit encryption is enabled
   *
   * @public
   */
  TLSEnabled?: boolean | undefined;

  /**
   * The ID of the KMS key used to encrypt the cluster
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS notification topic
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The SNS topic must be in Active status to receive notifications
   *
   * @public
   */
  SnsTopicStatus?: string | undefined;

  /**
   * The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
   *
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard. Example: 05:00-09:00 If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * The name of the Access Control List associated with this cluster.
   *
   * @public
   */
  ACLName?: string | undefined;

  /**
   * When set to true, the cluster will automatically receive minor engine version upgrades after launch.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Enables data tiering. Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html).
   *
   * @public
   */
  DataTiering?: DataTieringStatus | undefined;

  /**
   * The IP address type for the cluster. Returns 'ipv4' for IPv4 only, 'ipv6' for IPv6 only, or 'dual-stack' if the cluster supports both IPv4 and IPv6 addressing.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * The mechanism that the cluster uses to discover IP addresses. Returns 'ipv4' when DNS endpoints resolve to IPv4 addresses, or 'ipv6' when DNS endpoints resolve to IPv6 addresses.
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * A cluster whose updates have failed
 *
 * @public
 */
export interface UnprocessedCluster {
  /**
   * The name of the cluster
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The error type associated with the update failure
   *
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * The error message associated with the update failure
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateClusterResponse {
  /**
   * The list of clusters that have been updated.
   *
   * @public
   */
  ProcessedClusters?: Cluster[] | undefined;

  /**
   * The list of clusters where updates have not been applied.
   *
   * @public
   */
  UnprocessedClusters?: UnprocessedCluster[] | undefined;
}

/**
 * A tag that can be added to an MemoryDB resource. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. A tag with a null Value is permitted. For more information, see [Tagging your MemoryDB resources](https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging-resources.html)
 *
 * @public
 */
export interface Tag {
  /**
   * The key for the tag. May not be null.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag's value. May be null.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CopySnapshotRequest {
  /**
   * The name of an existing snapshot from which to make a copy.
   *
   * @public
   */
  SourceSnapshotName: string | undefined;

  /**
   * A name for the snapshot copy. MemoryDB does not permit overwriting a snapshot, therefore this name must be unique within its context - MemoryDB or an Amazon S3 bucket if exporting.
   *
   * @public
   */
  TargetSnapshotName: string | undefined;

  /**
   * The Amazon S3 bucket to which the snapshot is exported. This parameter is used only when exporting a snapshot for external access. When using this parameter to export a snapshot, be sure MemoryDB has the needed permissions to this S3 bucket. For more information, see [Step 2: Grant MemoryDB Access to Your Amazon S3 Bucket](https://docs.aws.amazon.com/MemoryDB/latest/devguide/snapshots-exporting.html).
   *
   * @public
   */
  TargetBucket?: string | undefined;

  /**
   * The ID of the KMS key used to encrypt the target snapshot.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.
 *
 * @public
 */
export interface ShardConfiguration {
  /**
   * A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format startkey-endkey.
   *
   * @public
   */
  Slots?: string | undefined;

  /**
   * The number of read replica nodes in this shard.
   *
   * @public
   */
  ReplicaCount?: number | undefined;
}

/**
 * Provides details of a shard in a snapshot
 *
 * @public
 */
export interface ShardDetail {
  /**
   * The name of the shard
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The configuration details of the shard
   *
   * @public
   */
  Configuration?: ShardConfiguration | undefined;

  /**
   * The size of the shard's snapshot
   *
   * @public
   */
  Size?: string | undefined;

  /**
   * The date and time that the shard's snapshot was created
   *
   * @public
   */
  SnapshotCreationTime?: Date | undefined;
}

/**
 * A list of cluster configuration options.
 *
 * @public
 */
export interface ClusterConfiguration {
  /**
   * The name of the cluster
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the cluster configuration
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The node type used for the cluster
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The name of the engine used by the cluster configuration.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The Redis OSS engine version used by the cluster
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The specified maintenance window for the cluster
   *
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS notification topic for the cluster
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The port used by the cluster
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of parameter group used by the cluster
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The name of the subnet group used by the cluster
   *
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * The ID of the VPC the cluster belongs to
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The snapshot retention limit set by the cluster
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The snapshot window set by the cluster
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * The number of shards in the cluster
   *
   * @public
   */
  NumShards?: number | undefined;

  /**
   * The list of shards in the cluster
   *
   * @public
   */
  Shards?: ShardDetail[] | undefined;

  /**
   * The name of the multi-Region parameter group associated with the cluster configuration.
   *
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * The name for the multi-Region cluster associated with the cluster configuration.
   *
   * @public
   */
  MultiRegionClusterName?: string | undefined;
}

/**
 * Represents a copy of an entire cluster as of the time when the snapshot was taken.
 *
 * @public
 */
export interface Snapshot {
  /**
   * The name of the snapshot
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The ID of the KMS key used to encrypt the snapshot.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the snapshot.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The configuration of the cluster from which the snapshot was taken
   *
   * @public
   */
  ClusterConfiguration?: ClusterConfiguration | undefined;

  /**
   * Enables data tiering. Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html).
   *
   * @public
   */
  DataTiering?: DataTieringStatus | undefined;
}

/**
 * @public
 */
export interface CopySnapshotResponse {
  /**
   * Represents a copy of an entire cluster as of the time when the snapshot was taken.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateACLRequest {
  /**
   * The name of the Access Control List.
   *
   * @public
   */
  ACLName: string | undefined;

  /**
   * The list of users that belong to the Access Control List.
   *
   * @public
   */
  UserNames?: string[] | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateACLResponse {
  /**
   * The newly-created Access Control List.
   *
   * @public
   */
  ACL?: ACL | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * The name of the cluster. This value must be unique as it also serves as the cluster identifier.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The compute and memory capacity of the nodes in the cluster.
   *
   * @public
   */
  NodeType: string | undefined;

  /**
   * The name of the multi-Region cluster to be created.
   *
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * The name of the parameter group associated with the cluster.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * An optional description of the cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of shards the cluster will contain. The default value is 1.
   *
   * @public
   */
  NumShards?: number | undefined;

  /**
   * The number of replicas to apply to each shard. The default value is 1. The maximum is 5.
   *
   * @public
   */
  NumReplicasPerShard?: number | undefined;

  /**
   * The name of the subnet group to be used for the cluster.
   *
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * A list of security group names to associate with this cluster.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
   *
   * Valid values for `ddd` are:
   *
   * - `sun`
   * - `mon`
   * - `tue`
   * - `wed`
   * - `thu`
   * - `fri`
   * - `sat`
   *
   * Example: `sun:23:00-mon:01:30`
   *
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * The port number on which each of the nodes accepts connections.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * A flag to enable in-transit encryption on the cluster.
   *
   * @public
   */
  TLSEnabled?: boolean | undefined;

  /**
   * The ID of the KMS key used to encrypt the cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.
   *
   * @public
   */
  SnapshotArns?: string[] | undefined;

  /**
   * The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.
   *
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.
   *
   * Example: 05:00-09:00
   *
   * If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * The name of the Access Control List to associate with the cluster.
   *
   * @public
   */
  ACLName: string | undefined;

  /**
   * The name of the engine to be used for the cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version number of the Redis OSS engine to be used for the cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * When set to true, the cluster will automatically receive minor engine version upgrades after launch.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Enables data tiering. Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html).
   *
   * @public
   */
  DataTiering?: boolean | undefined;

  /**
   * Specifies the IP address type for the cluster. Valid values are 'ipv4', 'ipv6', or 'dual_stack'. When set to 'ipv4', the cluster will only be accessible via IPv4 addresses. When set to 'ipv6', the cluster will only be accessible via IPv6 addresses. When set to 'dual_stack', the cluster will be accessible via both IPv4 and IPv6 addresses. If not specified, the default is 'ipv4'.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * The mechanism for discovering IP addresses for the cluster discovery protocol. Valid values are 'ipv4' or 'ipv6'. When set to 'ipv4', cluster discovery functions such as cluster slots, cluster shards, and cluster nodes return IPv4 addresses for cluster nodes. When set to 'ipv6', the cluster discovery functions return IPv6 addresses for cluster nodes. The value must be compatible with the NetworkType parameter. If not specified, the default is 'ipv4'.
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * The newly-created cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionClusterRequest {
  /**
   * A suffix to be added to the Multi-Region cluster name. Amazon MemoryDB automatically applies a prefix to the Multi-Region cluster Name when it is created. Each Amazon Region has its own prefix. For instance, a Multi-Region cluster Name created in the US-West-1 region will begin with "virxk", along with the suffix name you provide. The suffix guarantees uniqueness of the Multi-Region cluster name across multiple regions.
   *
   * @public
   */
  MultiRegionClusterNameSuffix: string | undefined;

  /**
   * A description for the multi-Region cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the engine to be used for the multi-Region cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version of the engine to be used for the multi-Region cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The node type to be used for the multi-Region cluster.
   *
   * @public
   */
  NodeType: string | undefined;

  /**
   * The name of the multi-Region parameter group to be associated with the cluster.
   *
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * The number of shards for the multi-Region cluster.
   *
   * @public
   */
  NumShards?: number | undefined;

  /**
   * Whether to enable TLS encryption for the multi-Region cluster.
   *
   * @public
   */
  TLSEnabled?: boolean | undefined;

  /**
   * A list of tags to be applied to the multi-Region cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Represents a Regional cluster
 *
 * @public
 */
export interface RegionalCluster {
  /**
   * The name of the Regional cluster
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The Region the current Regional cluster is assigned to.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The status of the Regional cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) the Regional cluster
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * Represents a multi-Region cluster.
 *
 * @public
 */
export interface MultiRegionCluster {
  /**
   * The name of the multi-Region cluster.
   *
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * The description of the multi-Region cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the multi-Region cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The node type used by the multi-Region cluster.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The name of the engine used by the multi-Region cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version of the engine used by the multi-Region cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The number of shards in the multi-Region cluster.
   *
   * @public
   */
  NumberOfShards?: number | undefined;

  /**
   * The clusters in this multi-Region cluster.
   *
   * @public
   */
  Clusters?: RegionalCluster[] | undefined;

  /**
   * The name of the multi-Region parameter group associated with the cluster.
   *
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * Indiciates if the multi-Region cluster is TLS enabled.
   *
   * @public
   */
  TLSEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the multi-Region cluster.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionClusterResponse {
  /**
   * Details about the newly created multi-Region cluster.
   *
   * @public
   */
  MultiRegionCluster?: MultiRegionCluster | undefined;
}

/**
 * @public
 */
export interface CreateParameterGroupRequest {
  /**
   * The name of the parameter group.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * The name of the parameter group family that the parameter group can be used with.
   *
   * @public
   */
  Family: string | undefined;

  /**
   * An optional description of the parameter group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.
 *
 * @public
 */
export interface ParameterGroup {
  /**
   * The name of the parameter group
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the parameter group family that this parameter group is compatible with.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * A description of the parameter group
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parameter group
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateParameterGroupResponse {
  /**
   * The newly-created parameter group.
   *
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * The snapshot is created from this cluster.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A name for the snapshot being created.
   *
   * @public
   */
  SnapshotName: string | undefined;

  /**
   * The ID of the KMS key used to encrypt the snapshot.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * The newly-created snapshot.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateSubnetGroupRequest {
  /**
   * The name of the subnet group.
   *
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * A description for the subnet group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of VPC subnet IDs for the subnet group.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * The name of the Availability Zone.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.
 *
 * @public
 */
export interface Subnet {
  /**
   * The unique identifier for the subnet.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The Availability Zone where the subnet resides
   *
   * @public
   */
  AvailabilityZone?: AvailabilityZone | undefined;

  /**
   * The network types supported by this subnet. Returns an array of strings that can include 'ipv4', 'ipv6', or both, indicating whether the subnet supports IPv4 only, IPv6 only, or dual-stack deployments.
   *
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * Represents the output of one of the following operations:
 *
 * - CreateSubnetGroup
 * - UpdateSubnetGroup
 *
 * A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.
 *
 * @public
 */
export interface SubnetGroup {
  /**
   * The name of the subnet group
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the subnet group
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of subnets associated with the subnet group.
   *
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * The ARN (Amazon Resource Name) of the subnet group.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The network types supported by this subnet group. Returns an array of strings that can include 'ipv4', 'ipv6', or both, indicating the IP address types that can be used for clusters deployed in this subnet group.
   *
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * @public
 */
export interface CreateSubnetGroupResponse {
  /**
   * The newly-created subnet group.
   *
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}

/**
 * Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
 *
 * @public
 */
export interface AuthenticationMode {
  /**
   * Indicates whether the user requires a password to authenticate. All newly-created users require a password.
   *
   * @public
   */
  Type?: InputAuthenticationType | undefined;

  /**
   * The password(s) used for authentication
   *
   * @public
   */
  Passwords?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The name of the user. This value must be unique as it also serves as the user identifier.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * Denotes the user's authentication properties, such as whether it requires a password to authenticate.
   *
   * @public
   */
  AuthenticationMode: AuthenticationMode | undefined;

  /**
   * Access permissions string used for this user.
   *
   * @public
   */
  AccessString: string | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
 *
 * @public
 */
export interface Authentication {
  /**
   * Indicates whether the user requires a password to authenticate.
   *
   * @public
   */
  Type?: AuthenticationType | undefined;

  /**
   * The number of passwords belonging to the user. The maximum is two.
   *
   * @public
   */
  PasswordCount?: number | undefined;
}

/**
 * You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.
 *
 * @public
 */
export interface User {
  /**
   * The name of the user
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Indicates the user status. Can be "active", "modifying" or "deleting".
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Access permissions string used for this user.
   *
   * @public
   */
  AccessString?: string | undefined;

  /**
   * The names of the Access Control Lists to which the user belongs
   *
   * @public
   */
  ACLNames?: string[] | undefined;

  /**
   * The minimum engine version supported for the user
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * Denotes whether the user requires a password to authenticate.
   *
   * @public
   */
  Authentication?: Authentication | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * The newly-created user.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DeleteACLRequest {
  /**
   * The name of the Access Control List to delete.
   *
   * @public
   */
  ACLName: string | undefined;
}

/**
 * @public
 */
export interface DeleteACLResponse {
  /**
   * The Access Control List object that has been deleted.
   *
   * @public
   */
  ACL?: ACL | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The name of the cluster to be deleted
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The name of the multi-Region cluster to be deleted.
   *
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.
   *
   * @public
   */
  FinalSnapshotName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * The cluster object that has been deleted.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteMultiRegionClusterRequest {
  /**
   * The name of the multi-Region cluster to be deleted.
   *
   * @public
   */
  MultiRegionClusterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMultiRegionClusterResponse {
  /**
   * Details about the deleted multi-Region cluster.
   *
   * @public
   */
  MultiRegionCluster?: MultiRegionCluster | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupRequest {
  /**
   * The name of the parameter group to delete.
   *
   * @public
   */
  ParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupResponse {
  /**
   * The parameter group that has been deleted.
   *
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * The name of the snapshot to delete.
   *
   * @public
   */
  SnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResponse {
  /**
   * The snapshot object that has been deleted.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupRequest {
  /**
   * The name of the subnet group to delete.
   *
   * @public
   */
  SubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupResponse {
  /**
   * The subnet group object that has been deleted.
   *
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * The name of the user to delete
   *
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {
  /**
   * The user object that has been deleted.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DescribeACLsRequest {
  /**
   * The name of the ACL.
   *
   * @public
   */
  ACLName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeACLsResponse {
  /**
   * The list of ACLs.
   *
   * @public
   */
  ACLs?: ACL[] | undefined;

  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * The name of the cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional flag that can be included in the request to retrieve information about the individual shard(s).
   *
   * @public
   */
  ShowShardDetails?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of clusters
   *
   * @public
   */
  Clusters?: Cluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineVersionsRequest {
  /**
   * The name of the engine for which to list available versions.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The Redis OSS engine version
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of a specific parameter group family to return details for.
   *
   * @public
   */
  ParameterGroupFamily?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If true, specifies that only the default version of the specified engine or engine and major version combination is to be returned.
   *
   * @public
   */
  DefaultOnly?: boolean | undefined;
}

/**
 * Provides details of the Redis OSS engine version
 *
 * @public
 */
export interface EngineVersionInfo {
  /**
   * The name of the engine for which version information is provided.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The engine version
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The patched engine version
   *
   * @public
   */
  EnginePatchVersion?: string | undefined;

  /**
   * Specifies the name of the parameter group family to which the engine default parameters apply.
   *
   * @public
   */
  ParameterGroupFamily?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEngineVersionsResponse {
  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of engine version details. Each element in the list contains detailed information about one engine version.
   *
   * @public
   */
  EngineVersions?: EngineVersionInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsRequest {
  /**
   * The identifier of the event source for which events are returned. If not specified, all sources are included in the response.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * The event source to retrieve events for. If no value is specified, all events are returned.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The beginning of the time interval to retrieve events for, specified in ISO 8601 format. Example: 2017-03-30T07:03:49.555Z
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time interval for which to retrieve events, specified in ISO 8601 format. Example: 2017-03-30T07:03:49.555Z
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The number of minutes worth of events to retrieve.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a node.
 *
 * @public
 */
export interface Event {
  /**
   * The name for the source of the event. For example, if the event occurred at the cluster level, the identifier would be the name of the cluster.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * Specifies the origin of this event - a cluster, a parameter group, a security group, etc.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The text of the event.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The date and time when the event occurred.
   *
   * @public
   */
  Date?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of events. Each element in the list contains detailed information about one event.
   *
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionClustersRequest {
  /**
   * The name of a specific multi-Region cluster to describe.
   *
   * @public
   */
  MultiRegionClusterName?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to specify where to start paginating.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Details about the multi-Region cluster.
   *
   * @public
   */
  ShowClusterDetails?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionClustersResponse {
  /**
   * A token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of multi-Region clusters.
   *
   * @public
   */
  MultiRegionClusters?: MultiRegionCluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionParameterGroupsRequest {
  /**
   * The request for information on a specific multi-region parameter group.
   *
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a CreateMultiRegionParameterGroup operation. A multi-region parameter group represents a collection of parameters that can be applied to clusters across multiple regions.
 *
 * @public
 */
export interface MultiRegionParameterGroup {
  /**
   * The name of the multi-region parameter group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the parameter group family that this multi-region parameter group is compatible with.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * A description of the multi-region parameter group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the multi-region parameter group.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionParameterGroupsResponse {
  /**
   * An optional token to include in the response. If this token is provided, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of multi-region parameter groups. Each element in the list contains detailed information about one parameter group.
   *
   * @public
   */
  MultiRegionParameterGroups?: MultiRegionParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionParametersRequest {
  /**
   * The name of the multi-region parameter group to return details for.
   *
   * @public
   */
  MultiRegionParameterGroupName: string | undefined;

  /**
   * The parameter types to return. Valid values: user | system | engine-default
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes an individual setting that controls some aspect of MemoryDB behavior across multiple regions.
 *
 * @public
 */
export interface MultiRegionParameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * A description of the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates the source of the parameter value. Valid values: user | system | engine-default
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The valid data type for the parameter.
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * The valid range of values for the parameter.
   *
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * The earliest engine version to which the parameter can apply.
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionParametersResponse {
  /**
   * An optional token to include in the response. If this token is provided, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of parameters specific to a particular multi-region parameter group. Each element in the list contains detailed information about one parameter.
   *
   * @public
   */
  MultiRegionParameters?: MultiRegionParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeParameterGroupsRequest {
  /**
   * The name of a specific parameter group to return details for.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParameterGroupsResponse {
  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of parameter groups. Each element in the list contains detailed information about one parameter group.
   *
   * @public
   */
  ParameterGroups?: ParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * he name of a specific parameter group to return details for.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes an individual setting that controls some aspect of MemoryDB behavior.
 *
 * @public
 */
export interface Parameter {
  /**
   * The name of the parameter
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the parameter
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * A description of the parameter
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The parameter's data type
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * The valid range of values for the parameter.
   *
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * The earliest engine version to which the parameter can apply.
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParametersResponse {
  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of parameters specific to a particular parameter group. Each element in the list contains detailed information about one parameter.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesRequest {
  /**
   * The reserved node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.
   *
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.
   *
   * @public
   */
  ReservedNodesOfferingId?: string | undefined;

  /**
   * The node type filter value. Use this parameter to show only those reservations matching the specified node type. For more information, see [Supported node types](https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported).
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.
   *
   * @public
   */
  Duration?: string | undefined;

  /**
   * The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type. Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The recurring charge to run this reserved node.
 *
 * @public
 */
export interface RecurringCharge {
  /**
   * The amount of the recurring charge to run this reserved node.
   *
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * The frequency of the recurring price charged to run this reserved node.
   *
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * Represents the output of a `PurchaseReservedNodesOffering` operation.
 *
 * @public
 */
export interface ReservedNode {
  /**
   * A customer-specified identifier to track this reservation.
   *
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * The ID of the reserved node offering to purchase.
   *
   * @public
   */
  ReservedNodesOfferingId?: string | undefined;

  /**
   * The node type for the reserved nodes.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The time the reservation started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The duration of the reservation in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The fixed price charged for this reserved node.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The number of nodes that have been reserved.
   *
   * @public
   */
  NodeCount?: number | undefined;

  /**
   * The offering type of this reserved node.
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The state of the reserved node.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The recurring price charged to run this reserved node.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the reserved node.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesResponse {
  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns information about reserved nodes for this account, or about a specified reserved node.
   *
   * @public
   */
  ReservedNodes?: ReservedNode[] | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesOfferingsRequest {
  /**
   * The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.
   *
   * @public
   */
  ReservedNodesOfferingId?: string | undefined;

  /**
   * The node type for the reserved nodes. For more information, see [Supported node types](https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported).
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.
   *
   * @public
   */
  Duration?: string | undefined;

  /**
   * The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type. Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The offering type of this node.
 *
 * @public
 */
export interface ReservedNodesOffering {
  /**
   * The offering identifier.
   *
   * @public
   */
  ReservedNodesOfferingId?: string | undefined;

  /**
   * The node type for the reserved nodes. For more information, see [Supported node types](https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported).
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The duration of the reservation in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The fixed price charged for this reserved node.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The offering type of this reserved node.
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The recurring price charged to run this reserved node.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesOfferingsResponse {
  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Lists available reserved node offerings.
   *
   * @public
   */
  ReservedNodesOfferings?: ReservedNodesOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceUpdatesRequest {
  /**
   * The unique ID of the service update to describe.
   *
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * The list of cluster names to identify service updates to apply.
   *
   * @public
   */
  ClusterNames?: string[] | undefined;

  /**
   * The status(es) of the service updates to filter on.
   *
   * @public
   */
  Status?: ServiceUpdateStatus[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An update that you can apply to your MemoryDB clusters.
 *
 * @public
 */
export interface ServiceUpdate {
  /**
   * The name of the cluster to which the service update applies
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * The date when the service update is initially available
   *
   * @public
   */
  ReleaseDate?: Date | undefined;

  /**
   * Provides details of the service update
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the service update
   *
   * @public
   */
  Status?: ServiceUpdateStatus | undefined;

  /**
   * Reflects the nature of the service update
   *
   * @public
   */
  Type?: ServiceUpdateType | undefined;

  /**
   * The name of the engine for which a service update is available.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * A list of nodes updated by the service update
   *
   * @public
   */
  NodesUpdated?: string | undefined;

  /**
   * The date at which the service update will be automatically applied
   *
   * @public
   */
  AutoUpdateStartDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeServiceUpdatesResponse {
  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of service updates
   *
   * @public
   */
  ServiceUpdates?: ServiceUpdate[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * A user-supplied name of the snapshot. If this parameter is specified, only this named snapshot is described.
   *
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * If set to system, the output shows snapshots that were automatically created by MemoryDB. If set to user the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A Boolean value which if true, the shard configuration is included in the snapshot description.
   *
   * @public
   */
  ShowDetail?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotsResponse {
  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of snapshots. Each item in the list contains detailed information about one snapshot.
   *
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsRequest {
  /**
   * The name of the subnet group to return details for.
   *
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsResponse {
  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of subnet groups. Each element in the list contains detailed information about one group.
   *
   * @public
   */
  SubnetGroups?: SubnetGroup[] | undefined;
}

/**
 * Used to streamline results of a search based on the property being filtered.
 *
 * @public
 */
export interface Filter {
  /**
   * The property being filtered. For example, UserName.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The property values to filter on. For example, "user-123".
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeUsersRequest {
  /**
   * The name of the user.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Filter to determine the list of users to return.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersResponse {
  /**
   * A list of users.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface FailoverShardRequest {
  /**
   * The cluster being failed over.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The name of the shard.
   *
   * @public
   */
  ShardName: string | undefined;
}

/**
 * @public
 */
export interface FailoverShardResponse {
  /**
   * The cluster being failed over.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ListAllowedMultiRegionClusterUpdatesRequest {
  /**
   * The name of the multi-Region cluster.
   *
   * @public
   */
  MultiRegionClusterName: string | undefined;
}

/**
 * @public
 */
export interface ListAllowedMultiRegionClusterUpdatesResponse {
  /**
   * The node types that the cluster can be scaled up to.
   *
   * @public
   */
  ScaleUpNodeTypes?: string[] | undefined;

  /**
   * The node types that the cluster can be scaled down to.
   *
   * @public
   */
  ScaleDownNodeTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAllowedNodeTypeUpdatesRequest {
  /**
   * The name of the cluster you want to scale. MemoryDB uses the cluster name to identify the current node type being used by this cluster, and from that to create a list of node types you can scale up to.
   *
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface ListAllowedNodeTypeUpdatesResponse {
  /**
   * A list node types which you can use to scale up your cluster.
   *
   * @public
   */
  ScaleUpNodeTypes?: string[] | undefined;

  /**
   * A list node types which you can use to scale down your cluster.
   *
   * @public
   */
  ScaleDownNodeTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want the list of tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * A list of tags as key-value pairs.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedNodesOfferingRequest {
  /**
   * The ID of the reserved node offering to purchase.
   *
   * @public
   */
  ReservedNodesOfferingId: string | undefined;

  /**
   * A customer-specified identifier to track this reservation.
   *
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * The number of node instances to reserve.
   *
   * @public
   */
  NodeCount?: number | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedNodesOfferingResponse {
  /**
   * Represents the output of a `PurchaseReservedNodesOffering` operation.
   *
   * @public
   */
  ReservedNode?: ReservedNode | undefined;
}

/**
 * @public
 */
export interface ResetParameterGroupRequest {
  /**
   * The name of the parameter group to reset.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * If true, all parameters in the parameter group are reset to their default values. If false, only the parameters listed by ParameterNames are reset to their default values.
   *
   * @public
   */
  AllParameters?: boolean | undefined;

  /**
   * An array of parameter names to reset to their default values. If AllParameters is true, do not use ParameterNames. If AllParameters is false, you must specify the name of at least one parameter to reset.
   *
   * @public
   */
  ParameterNames?: string[] | undefined;
}

/**
 * @public
 */
export interface ResetParameterGroupResponse {
  /**
   * The parameter group being reset.
   *
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which the tags are to be added.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
  /**
   * A list of tags as key-value pairs.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which the tags are to be removed.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of keys of the tags that are to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * The list of tags removed.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateACLRequest {
  /**
   * The name of the Access Control List.
   *
   * @public
   */
  ACLName: string | undefined;

  /**
   * The list of users to add to the Access Control List.
   *
   * @public
   */
  UserNamesToAdd?: string[] | undefined;

  /**
   * The list of users to remove from the Access Control List.
   *
   * @public
   */
  UserNamesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateACLResponse {
  /**
   * The updated Access Control List.
   *
   * @public
   */
  ACL?: ACL | undefined;
}

/**
 * A request to configure the number of replicas in a shard
 *
 * @public
 */
export interface ReplicaConfigurationRequest {
  /**
   * The number of replicas to scale up or down to
   *
   * @public
   */
  ReplicaCount?: number | undefined;
}

/**
 * A request to configure the sharding properties of a cluster
 *
 * @public
 */
export interface ShardConfigurationRequest {
  /**
   * The number of shards in the cluster
   *
   * @public
   */
  ShardCount?: number | undefined;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * The name of the cluster to update.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The description of the cluster to update.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The SecurityGroupIds to update.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
   *
   * Valid values for `ddd` are:
   *
   * - `sun`
   * - `mon`
   * - `tue`
   * - `wed`
   * - `thu`
   * - `fri`
   * - `sat`
   *
   * Example: `sun:23:00-mon:01:30`
   *
   * @public
   */
  MaintenanceWindow?: string | undefined;

  /**
   * The SNS topic ARN to update.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The status of the Amazon SNS notification topic. Notifications are sent only if the status is active.
   *
   * @public
   */
  SnsTopicStatus?: string | undefined;

  /**
   * The name of the parameter group to update.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * The number of days for which MemoryDB retains automatic cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * A valid node type that you want to scale this cluster up or down to.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The name of the engine to be used for the cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The upgraded version of the engine to be run on the nodes. You can upgrade to a newer engine version, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The number of replicas that will reside in each shard.
   *
   * @public
   */
  ReplicaConfiguration?: ReplicaConfigurationRequest | undefined;

  /**
   * The number of shards in the cluster.
   *
   * @public
   */
  ShardConfiguration?: ShardConfigurationRequest | undefined;

  /**
   * The Access Control List that is associated with the cluster.
   *
   * @public
   */
  ACLName?: string | undefined;

  /**
   * The mechanism for discovering IP addresses for the cluster discovery protocol. Valid values are 'ipv4' or 'ipv6'. When set to 'ipv4', cluster discovery functions such as cluster slots, cluster shards, and cluster nodes will return IPv4 addresses for cluster nodes. When set to 'ipv6', the cluster discovery functions return IPv6 addresses for cluster nodes. The value must be compatible with the NetworkType parameter. If not specified, the default is 'ipv4'.
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * The updated cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface UpdateMultiRegionClusterRequest {
  /**
   * The name of the multi-Region cluster to be updated.
   *
   * @public
   */
  MultiRegionClusterName: string | undefined;

  /**
   * The new node type to be used for the multi-Region cluster.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * A new description for the multi-Region cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new engine version to be used for the multi-Region cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * A request to configure the sharding properties of a cluster
   *
   * @public
   */
  ShardConfiguration?: ShardConfigurationRequest | undefined;

  /**
   * The new multi-Region parameter group to be associated with the cluster.
   *
   * @public
   */
  MultiRegionParameterGroupName?: string | undefined;

  /**
   * The strategy to use for the update operation. Supported values are "coordinated" or "uncoordinated".
   *
   * @public
   */
  UpdateStrategy?: UpdateStrategy | undefined;
}

/**
 * @public
 */
export interface UpdateMultiRegionClusterResponse {
  /**
   * The status of updating the multi-Region cluster.
   *
   * @public
   */
  MultiRegionCluster?: MultiRegionCluster | undefined;
}

/**
 * Describes a name-value pair that is used to update the value of a parameter.
 *
 * @public
 */
export interface ParameterNameValue {
  /**
   * The name of the parameter
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The value of the parameter
   *
   * @public
   */
  ParameterValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupRequest {
  /**
   * The name of the parameter group to update.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be updated per request.
   *
   * @public
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupResponse {
  /**
   * The updated parameter group
   *
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetGroupRequest {
  /**
   * The name of the subnet group
   *
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * A description of the subnet group
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The EC2 subnet IDs for the subnet group.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetGroupResponse {
  /**
   * The updated subnet group
   *
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * The name of the user
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * Denotes the user's authentication properties, such as whether it requires a password to authenticate.
   *
   * @public
   */
  AuthenticationMode?: AuthenticationMode | undefined;

  /**
   * Access permissions string used for this user.
   *
   * @public
   */
  AccessString?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * The updated user
   *
   * @public
   */
  User?: User | undefined;
}
