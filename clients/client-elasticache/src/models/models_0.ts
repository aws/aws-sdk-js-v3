// smithy-typescript generated code
import type {
  AuthenticationType,
  AuthTokenUpdateStatus,
  AuthTokenUpdateStrategyType,
  AutomaticFailoverStatus,
  AZMode,
  ChangeType,
  ClusterMode,
  ConnectionType,
  DataStorageUnit,
  DataTieringStatus,
  DestinationType,
  Durability,
  EffectiveDurability,
  InputAuthenticationType,
  IpDiscovery,
  LogDeliveryConfigurationStatus,
  LogFormat,
  LogType,
  MultiAZStatus,
  NetworkType,
  NodeUpdateInitiatedBy,
  NodeUpdateStatus,
  OutpostMode,
  PendingAutomaticFailoverStatus,
  ServiceUpdateSeverity,
  ServiceUpdateStatus,
  ServiceUpdateType,
  SlaMet,
  SourceType,
  StorageEncryptionType,
  TlsMode,
  TransitEncryptionMode,
  UpdateActionStatus,
} from "./enums";

/**
 * A tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your ElastiCache resources. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. A tag with a null Value is permitted.
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
 * Represents the input of an AddTagsToResource operation.
 *
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * The Amazon Resource Name (ARN) of the resource to which the tags are to be added, for example `arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster` or `arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot`. ElastiCache resources are *cluster* and *snapshot*.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs) and Amazon Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * Represents the output from the `AddTagsToResource`, `ListTagsForResource`, and `RemoveTagsFromResource` operations.
 *
 * @public
 */
export interface TagListMessage {
  /**
   * A list of tags as key-value pairs.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * Represents the allowed node types you can use to modify your cluster or replication group.
 *
 * @public
 */
export interface AllowedNodeTypeModificationsMessage {
  /**
   * A string list, each element of which specifies a cache node type which you can use to scale your cluster or replication group.
   *
   * When scaling up a Valkey or Redis OSS cluster or replication group using `ModifyCacheCluster` or `ModifyReplicationGroup`, use a value from this list for the `CacheNodeType` parameter.
   *
   * @public
   */
  ScaleUpModifications?: string[] | undefined;

  /**
   * A string list, each element of which specifies a cache node type which you can use to scale your cluster or replication group. When scaling down a Valkey or Redis OSS cluster or replication group using ModifyCacheCluster or ModifyReplicationGroup, use a value from this list for the CacheNodeType parameter.
   *
   * @public
   */
  ScaleDownModifications?: string[] | undefined;
}

/**
 * Represents the input of an AuthorizeCacheSecurityGroupIngress operation.
 *
 * @public
 */
export interface AuthorizeCacheSecurityGroupIngressMessage {
  /**
   * The cache security group that allows network ingress.
   *
   * @public
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * The Amazon EC2 security group to be authorized for ingress to the cache security group.
   *
   * @public
   */
  EC2SecurityGroupName: string | undefined;

  /**
   * The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.
   *
   * @public
   */
  EC2SecurityGroupOwnerId: string | undefined;
}

/**
 * Provides ownership and status information for an Amazon EC2 security group.
 *
 * @public
 */
export interface EC2SecurityGroup {
  /**
   * The status of the Amazon EC2 security group.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The name of the Amazon EC2 security group.
   *
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * The Amazon account ID of the Amazon EC2 security group owner.
   *
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * Represents the output of one of the following operations:
 *
 * - `AuthorizeCacheSecurityGroupIngress`
 * - `CreateCacheSecurityGroup`
 * - `RevokeCacheSecurityGroupIngress`
 *
 * @public
 */
export interface CacheSecurityGroup {
  /**
   * The Amazon account ID of the cache security group owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The name of the cache security group.
   *
   * @public
   */
  CacheSecurityGroupName?: string | undefined;

  /**
   * The description of the cache security group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of Amazon EC2 security groups that are associated with this cache security group.
   *
   * @public
   */
  EC2SecurityGroups?: EC2SecurityGroup[] | undefined;

  /**
   * The ARN of the cache security group,
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeCacheSecurityGroupIngressResult {
  /**
   * Represents the output of one of the following operations:
   *
   * - `AuthorizeCacheSecurityGroupIngress`
   * - `CreateCacheSecurityGroup`
   * - `RevokeCacheSecurityGroupIngress`
   *
   * @public
   */
  CacheSecurityGroup?: CacheSecurityGroup | undefined;
}

/**
 * @public
 */
export interface BatchApplyUpdateActionMessage {
  /**
   * The replication group IDs
   *
   * @public
   */
  ReplicationGroupIds?: string[] | undefined;

  /**
   * The cache cluster IDs
   *
   * @public
   */
  CacheClusterIds?: string[] | undefined;

  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateName: string | undefined;
}

/**
 * Update action that has been processed for the corresponding apply/stop request
 *
 * @public
 */
export interface ProcessedUpdateAction {
  /**
   * The ID of the replication group
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The ID of the cache cluster
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * The status of the update action on the Valkey or Redis OSS cluster
   *
   * @public
   */
  UpdateActionStatus?: UpdateActionStatus | undefined;
}

/**
 * Update action that has failed to be processed for the corresponding apply/stop request
 *
 * @public
 */
export interface UnprocessedUpdateAction {
  /**
   * The replication group ID
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The ID of the cache cluster
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * The error type for requests that are not processed
   *
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * The error message that describes the reason the request was not processed
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionResultsMessage {
  /**
   * Update actions that have been processed successfully
   *
   * @public
   */
  ProcessedUpdateActions?: ProcessedUpdateAction[] | undefined;

  /**
   * Update actions that haven't been processed successfully
   *
   * @public
   */
  UnprocessedUpdateActions?: UnprocessedUpdateAction[] | undefined;
}

/**
 * @public
 */
export interface BatchStopUpdateActionMessage {
  /**
   * The replication group IDs
   *
   * @public
   */
  ReplicationGroupIds?: string[] | undefined;

  /**
   * The cache cluster IDs
   *
   * @public
   */
  CacheClusterIds?: string[] | undefined;

  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateName: string | undefined;
}

/**
 * @public
 */
export interface CompleteMigrationMessage {
  /**
   * The ID of the replication group to which data is being migrated.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The name of the serverless cache to which data is being migrated.
   *
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * Represents the information required for client programs to connect to a cache node. This value is read-only.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The DNS hostname of the cache node.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The port number that the cache engine is listening on.
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * The name of the Global datastore and role of this replication group in the Global datastore.
 *
 * @public
 */
export interface GlobalReplicationGroupInfo {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId?: string | undefined;

  /**
   * The role of the replication group in a Global datastore. Can be primary or secondary.
   *
   * @public
   */
  GlobalReplicationGroupMemberRole?: string | undefined;
}

/**
 * The configuration details of the CloudWatch Logs destination.
 *
 * @public
 */
export interface CloudWatchLogsDestinationDetails {
  /**
   * The name of the CloudWatch Logs log group.
   *
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * The configuration details of the Kinesis Data Firehose destination.
 *
 * @public
 */
export interface KinesisFirehoseDestinationDetails {
  /**
   * The name of the Kinesis Data Firehose delivery stream.
   *
   * @public
   */
  DeliveryStream?: string | undefined;
}

/**
 * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
 *
 * @public
 */
export interface DestinationDetails {
  /**
   * The configuration details of the CloudWatch Logs destination.
   *
   * @public
   */
  CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails | undefined;

  /**
   * The configuration details of the Kinesis Data Firehose destination.
   *
   * @public
   */
  KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails | undefined;
}

/**
 * Returns the destination, format and type of the logs.
 *
 * @public
 */
export interface LogDeliveryConfiguration {
  /**
   * Refers to [slow-log](https://redis.io/commands/slowlog) or engine-log.
   *
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * Returns the destination type, either `cloudwatch-logs` or `kinesis-firehose`.
   *
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
   *
   * @public
   */
  DestinationDetails?: DestinationDetails | undefined;

  /**
   * Returns the log format, either JSON or TEXT.
   *
   * @public
   */
  LogFormat?: LogFormat | undefined;

  /**
   * Returns the log delivery configuration status. Values are one of `enabling` | `disabling` | `modifying` | `active` | `error`
   *
   * @public
   */
  Status?: LogDeliveryConfigurationStatus | undefined;

  /**
   * Returns an error message for the log delivery configuration.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Represents a single node within a node group (shard).
 *
 * @public
 */
export interface NodeGroupMember {
  /**
   * The ID of the cluster to which the node belongs.
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * The ID of the node within its cluster. A node ID is a numeric identifier (0001, 0002, etc.).
   *
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * The information required for client programs to connect to a node for read operations. The read endpoint is only applicable on Valkey or Redis OSS (cluster mode disabled) clusters.
   *
   * @public
   */
  ReadEndpoint?: Endpoint | undefined;

  /**
   * The name of the Availability Zone in which the node is located.
   *
   * @public
   */
  PreferredAvailabilityZone?: string | undefined;

  /**
   * The outpost ARN of the node group member.
   *
   * @public
   */
  PreferredOutpostArn?: string | undefined;

  /**
   * The role that is currently assigned to the node - `primary` or `replica`. This member is only applicable for Valkey or Redis OSS (cluster mode disabled) replication groups.
   *
   * @public
   */
  CurrentRole?: string | undefined;
}

/**
 * Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
 *
 * @public
 */
export interface NodeGroup {
  /**
   * The identifier for the node group (shard). A Valkey or Redis OSS (cluster mode disabled) replication group contains only 1 node group; therefore, the node group ID is 0001. A Valkey or Redis OSS (cluster mode enabled) replication group contains 1 to 90 node groups numbered 0001 to 0090. Optionally, the user can provide the id for a node group.
   *
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * The current state of this replication group - `creating`, `available`, `modifying`, `deleting`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The endpoint of the primary node in this node group (shard).
   *
   * @public
   */
  PrimaryEndpoint?: Endpoint | undefined;

  /**
   * The endpoint of the replica nodes in this node group (shard). This value is read-only.
   *
   * @public
   */
  ReaderEndpoint?: Endpoint | undefined;

  /**
   * The keyspace for this node group (shard).
   *
   * @public
   */
  Slots?: string | undefined;

  /**
   * A list containing information about individual nodes within the node group (shard).
   *
   * @public
   */
  NodeGroupMembers?: NodeGroupMember[] | undefined;
}

/**
 * The log delivery configurations being modified
 *
 * @public
 */
export interface PendingLogDeliveryConfiguration {
  /**
   * Refers to [slow-log](https://redis.io/commands/slowlog) or engine-log..
   *
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * Returns the destination type, either CloudWatch Logs or Kinesis Data Firehose.
   *
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
   *
   * @public
   */
  DestinationDetails?: DestinationDetails | undefined;

  /**
   * Returns the log format, either JSON or TEXT
   *
   * @public
   */
  LogFormat?: LogFormat | undefined;
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
 * The status of an online resharding operation.
 *
 * @public
 */
export interface ReshardingStatus {
  /**
   * Represents the progress of an online resharding operation.
   *
   * @public
   */
  SlotMigration?: SlotMigration | undefined;
}

/**
 * The status of the user group update.
 *
 * @public
 */
export interface UserGroupsUpdateStatus {
  /**
   * The ID of the user group to add.
   *
   * @public
   */
  UserGroupIdsToAdd?: string[] | undefined;

  /**
   * The ID of the user group to remove.
   *
   * @public
   */
  UserGroupIdsToRemove?: string[] | undefined;
}

/**
 * The settings to be applied to the Valkey or Redis OSS replication group, either immediately or during the next maintenance window.
 *
 * @public
 */
export interface ReplicationGroupPendingModifiedValues {
  /**
   * The primary cluster ID that is applied immediately (if `--apply-immediately` was specified), or during the next maintenance window.
   *
   * @public
   */
  PrimaryClusterId?: string | undefined;

  /**
   * Indicates the status of automatic failover for this Valkey or Redis OSS replication group.
   *
   * @public
   */
  AutomaticFailoverStatus?: PendingAutomaticFailoverStatus | undefined;

  /**
   * The status of an online resharding operation.
   *
   * @public
   */
  Resharding?: ReshardingStatus | undefined;

  /**
   * The auth token status
   *
   * @public
   */
  AuthTokenStatus?: AuthTokenUpdateStatus | undefined;

  /**
   * The user group being modified.
   *
   * @public
   */
  UserGroups?: UserGroupsUpdateStatus | undefined;

  /**
   * The log delivery configurations being modified
   *
   * @public
   */
  LogDeliveryConfigurations?: PendingLogDeliveryConfiguration[] | undefined;

  /**
   * A flag that enables in-transit encryption when set to true.
   *
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
   *
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.
   *
   * @public
   */
  ClusterMode?: ClusterMode | undefined;
}

/**
 * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
 *
 * @public
 */
export interface ReplicationGroup {
  /**
   * The identifier for the replication group.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The user supplied description of the replication group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the Global datastore and role of this replication group in the Global datastore.
   *
   * @public
   */
  GlobalReplicationGroupInfo?: GlobalReplicationGroupInfo | undefined;

  /**
   * The current state of this replication group - `creating`, `available`, `modifying`, `deleting`, `create-failed`, `snapshotting`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A group of settings to be applied to the replication group, either immediately or during the next maintenance window.
   *
   * @public
   */
  PendingModifiedValues?: ReplicationGroupPendingModifiedValues | undefined;

  /**
   * The names of all the cache clusters that are part of this replication group.
   *
   * @public
   */
  MemberClusters?: string[] | undefined;

  /**
   * A list of node groups in this replication group. For Valkey or Redis OSS (cluster mode disabled) replication groups, this is a single-element list. For Valkey or Redis OSS (cluster mode enabled) replication groups, the list contains an entry for each node group (shard).
   *
   * @public
   */
  NodeGroups?: NodeGroup[] | undefined;

  /**
   * The cluster ID that is used as the daily snapshot source for the replication group.
   *
   * @public
   */
  SnapshottingClusterId?: string | undefined;

  /**
   * Indicates the status of automatic failover for this Valkey or Redis OSS replication group.
   *
   * @public
   */
  AutomaticFailover?: AutomaticFailoverStatus | undefined;

  /**
   * A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see [Minimizing Downtime: Multi-AZ](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html)
   *
   * @public
   */
  MultiAZ?: MultiAZStatus | undefined;

  /**
   * The configuration endpoint for this replication group. Use the configuration endpoint to connect to this replication group.
   *
   * @public
   */
  ConfigurationEndpoint?: Endpoint | undefined;

  /**
   * The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set `SnapshotRetentionLimit` to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * > **Important:** If the value of `SnapshotRetentionLimit` is set to zero (0), backups are turned off.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
   *
   * Example: `05:00-09:00`
   *
   * If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
   *
   * > **Note:** This parameter is only valid if the `Engine` parameter is `redis`.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * A flag indicating whether or not this replication group is cluster enabled; i.e., whether its data can be partitioned across multiple shards (API/CLI: node groups).
   *
   * Valid values: `true` | `false`
   *
   * @public
   */
  ClusterEnabled?: boolean | undefined;

  /**
   * The name of the compute and memory capacity node type for each node in the replication group.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * A flag that enables using an `AuthToken` (password) when issuing Valkey or Redis OSS commands.
   *
   * Default: `false`
   *
   * @public
   */
  AuthTokenEnabled?: boolean | undefined;

  /**
   * The date the auth token was last modified
   *
   * @public
   */
  AuthTokenLastModifiedDate?: Date | undefined;

  /**
   * A flag that enables in-transit encryption when set to `true`.
   *
   * **Required:** Only available when creating a replication group in an Amazon VPC using Redis OSS version `3.2.6`, `4.x` or later.
   *
   * Default: `false`
   *
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * A flag that enables encryption at-rest on the cluster when set to `true`. In some cases, encryption at-rest may be enabled even when this value is false. Use `StorageEncryptionType` to view the effective encryption state of a cluster.
   *
   * You cannot modify the value of `AtRestEncryptionEnabled` after the cluster is created.
   *
   * Default: `true` when using Valkey, `false` when using Redis OSS
   *
   * @public
   */
  AtRestEncryptionEnabled?: boolean | undefined;

  /**
   * The outpost ARNs of the replication group's member clusters.
   *
   * @public
   */
  MemberClustersOutpostArns?: string[] | undefined;

  /**
   * The ID of the KMS key used to encrypt the disk in the cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Indicates the type of encryption for data stored at rest in the replication group. The value is `none` if at-rest encryption is not enabled, `sse-elasticache` if an ElastiCache service-managed key is used, or `sse-kms` if a customer-managed KMS key is used.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * The ARN (Amazon Resource Name) of the replication group.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The ID of the user group associated to the replication group.
   *
   * @public
   */
  UserGroupIds?: string[] | undefined;

  /**
   * Returns the destination, format and type of the logs.
   *
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfiguration[] | undefined;

  /**
   * The date and time when the cluster was created.
   *
   * @public
   */
  ReplicationGroupCreateTime?: Date | undefined;

  /**
   * Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/data-tiering.html).
   *
   * @public
   */
  DataTiering?: DataTieringStatus | undefined;

  /**
   * If you are running Valkey 7.2 and above, or Redis OSS engine version 6.0 and above, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Must be either `ipv4` | `ipv6` | `dual_stack`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * The network type you choose when modifying a cluster, either `ipv4` | `ipv6`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
   *
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.
   *
   * @public
   */
  ClusterMode?: ClusterMode | undefined;

  /**
   * The engine used in a replication group. The options are valkey, memcached or redis.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The durability setting of the replication group. For more information, see [Durability](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/durability.html).
   *
   * @public
   */
  Durability?: Durability | undefined;

  /**
   * The effective durability of the replication group. When `Durability` is set to `default`, the service resolves the actual durability based on the engine version, cluster mode, and other parameters. This field reflects the resolved value. For more information, see [Configuring Durability](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Durability.Configuring.html).
   *
   * @public
   */
  EffectiveDurability?: EffectiveDurability | undefined;
}

/**
 * The data storage limit.
 *
 * @public
 */
export interface DataStorage {
  /**
   * The upper limit for data storage the cache is set to use.
   *
   * @public
   */
  Maximum?: number | undefined;

  /**
   * The lower limit for data storage the cache is set to use.
   *
   * @public
   */
  Minimum?: number | undefined;

  /**
   * The unit that the storage is measured in, in GB.
   *
   * @public
   */
  Unit: DataStorageUnit | undefined;
}

/**
 * The configuration for the number of ElastiCache Processing Units (ECPU) the cache can consume per second.
 *
 * @public
 */
export interface ECPUPerSecond {
  /**
   * The configuration for the maximum number of ECPUs the cache can consume per second.
   *
   * @public
   */
  Maximum?: number | undefined;

  /**
   * The configuration for the minimum number of ECPUs the cache should be able consume per second.
   *
   * @public
   */
  Minimum?: number | undefined;
}

/**
 * The usage limits for storage and ElastiCache Processing Units for the cache.
 *
 * @public
 */
export interface CacheUsageLimits {
  /**
   * The maximum data storage limit in the cache, expressed in Gigabytes.
   *
   * @public
   */
  DataStorage?: DataStorage | undefined;

  /**
   * The configuration for the number of ElastiCache Processing Units (ECPU) the cache can consume per second.
   *
   * @public
   */
  ECPUPerSecond?: ECPUPerSecond | undefined;
}

/**
 * Provides a summary of the current migration status for a serverless cache.
 *
 * @public
 */
export interface MigrationSummary {
  /**
   * The current status of the migration.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The migration endpoint, which is the standard endpoint of the serverless cache. Point your application at this endpoint during the migration. Until cutover, ElastiCache routes requests on this endpoint to your source.
   *
   * @public
   */
  MigrationEndpoint?: Endpoint | undefined;

  /**
   * The cutover configuration for the migration.
   *
   * @public
   */
  CutoverMode?: string | undefined;
}

/**
 * The resource representing a serverless cache.
 *
 * @public
 */
export interface ServerlessCache {
  /**
   * The unique identifier of the serverless cache.
   *
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * A description of the serverless cache.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * When the serverless cache was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The current status of the serverless cache. The allowed values are CREATING, AVAILABLE, DELETING, CREATE-FAILED and MODIFYING.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The engine the serverless cache is compatible with.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version number of the engine the serverless cache is compatible with.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * The name and version number of the engine the serverless cache is compatible with.
   *
   * @public
   */
  FullEngineVersion?: string | undefined;

  /**
   * The cache usage limit for the serverless cache.
   *
   * @public
   */
  CacheUsageLimits?: CacheUsageLimits | undefined;

  /**
   * The ID of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt data at rest in the serverless cache.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Indicates the type of encryption for data stored at rest in the serverless cache. Serverless caches are always encrypted at rest. The value is `sse-elasticache` if an ElastiCache service-managed key is used, or `sse-kms` if a customer-managed KMS key is used.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * The IDs of the EC2 security groups associated with the serverless cache.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Represents the information required for client programs to connect to a cache node. This value is read-only.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * Represents the information required for client programs to connect to a cache node. This value is read-only.
   *
   * @public
   */
  ReaderEndpoint?: Endpoint | undefined;

  /**
   * The Amazon Resource Name (ARN) of the serverless cache.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The identifier of the user group associated with the serverless cache. Available for Valkey and Redis OSS only. Default is NULL.
   *
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * If no subnet IDs are given and your VPC is in us-west-1, then ElastiCache will select 2 default subnets across AZs in your VPC. For all other Regions, if no subnet IDs are given then ElastiCache will select 3 default subnets across AZs in your default VPC.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The number of days for which ElastiCache retains automatic snapshots before deleting them. Available for Valkey, Redis OSS and Serverless Memcached only. The maximum value allowed is 35 days.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time that a cache snapshot will be created. Default is NULL, i.e. snapshots will not be created at a specific time on a daily basis. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  DailySnapshotTime?: string | undefined;

  /**
   * The type of IP address protocol used by the serverless cache. Must be either `ipv4` | `ipv6` | `dual_stack`. `ipv6` is only supported with IPv6-only subnets. If not specified, defaults to `ipv4`, unless all provided subnets are IPv6-only, in which case it defaults to `ipv6`.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * The connection type for the serverless cache. Must be either `vpc` | `public`. If not specified, defaults to `vpc`.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Provides a summary of the migration status for the serverless cache.
   *
   * @public
   */
  Migration?: MigrationSummary | undefined;
}

/**
 * @public
 */
export interface CompleteMigrationResponse {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;

  /**
   * Provides the details of the serverless cache for which the migration completed.
   *
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * @public
 */
export interface CopyServerlessCacheSnapshotRequest {
  /**
   * The identifier of the existing serverless cache’s snapshot to be copied. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  SourceServerlessCacheSnapshotName: string | undefined;

  /**
   * The identifier for the snapshot to be created. Available for Valkey, Redis OSS and Serverless Memcached only. This value is stored as a lowercase string.
   *
   * @public
   */
  TargetServerlessCacheSnapshotName: string | undefined;

  /**
   * The identifier of the KMS key used to encrypt the target snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of tags to be added to the target snapshot resource. A tag is a key-value pair. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The configuration settings for a specific serverless cache.
 *
 * @public
 */
export interface ServerlessCacheConfiguration {
  /**
   * The identifier of a serverless cache.
   *
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * The engine that the serverless cache is configured with.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The engine version number that the serverless cache is configured with.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;
}

/**
 * The resource representing a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.
 *
 * @public
 */
export interface ServerlessCacheSnapshot {
  /**
   * The identifier of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheSnapshotName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The ID of the Amazon Web Services Key Management Service (KMS) key of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The type of snapshot of serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * The current status of the serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The date and time that the source serverless cache's metadata and cache data set was obtained for the snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The time that the serverless cache snapshot will expire. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ExpiryTime?: Date | undefined;

  /**
   * The total size of a serverless cache snapshot, in bytes. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  BytesUsedForCache?: string | undefined;

  /**
   * The configuration of the serverless cache, at the time the snapshot was taken. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheConfiguration?: ServerlessCacheConfiguration | undefined;
}

/**
 * @public
 */
export interface CopyServerlessCacheSnapshotResponse {
  /**
   * The response for the attempt to copy the serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot | undefined;
}

/**
 * Represents the input of a `CopySnapshotMessage` operation.
 *
 * @public
 */
export interface CopySnapshotMessage {
  /**
   * The name of an existing snapshot from which to make a copy.
   *
   * @public
   */
  SourceSnapshotName: string | undefined;

  /**
   * A name for the snapshot copy. ElastiCache does not permit overwriting a snapshot, therefore this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting. This value is stored as a lowercase string.
   *
   * @public
   */
  TargetSnapshotName: string | undefined;

  /**
   * The Amazon S3 bucket to which the snapshot is exported. This parameter is used only when exporting a snapshot for external access.
   *
   * When using this parameter to export a snapshot, be sure Amazon ElastiCache has the needed permissions to this S3 bucket. For more information, see [Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html#backups-exporting-grant-access) in the *Amazon ElastiCache User Guide*.
   *
   * For more information, see [Exporting a Snapshot](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html) in the *Amazon ElastiCache User Guide*.
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
 * Node group (shard) configuration options. Each node group (shard) configuration has the following: `Slots`, `PrimaryAvailabilityZone`, `ReplicaAvailabilityZones`, `ReplicaCount`.
 *
 * @public
 */
export interface NodeGroupConfiguration {
  /**
   * Either the ElastiCache supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
   *
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format `startkey-endkey`.
   *
   * Example: `"0-3999"`
   *
   * @public
   */
  Slots?: string | undefined;

  /**
   * The number of read replica nodes in this node group (shard).
   *
   * @public
   */
  ReplicaCount?: number | undefined;

  /**
   * The Availability Zone where the primary node of this node group (shard) is launched.
   *
   * @public
   */
  PrimaryAvailabilityZone?: string | undefined;

  /**
   * A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of `ReplicaCount` or `ReplicasPerNodeGroup` if not specified.
   *
   * @public
   */
  ReplicaAvailabilityZones?: string[] | undefined;

  /**
   * The outpost ARN of the primary node.
   *
   * @public
   */
  PrimaryOutpostArn?: string | undefined;

  /**
   * The outpost ARN of the node replicas.
   *
   * @public
   */
  ReplicaOutpostArns?: string[] | undefined;
}

/**
 * Represents an individual cache node in a snapshot of a cluster.
 *
 * @public
 */
export interface NodeSnapshot {
  /**
   * A unique identifier for the source cluster.
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * A unique identifier for the source node group (shard).
   *
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * The cache node identifier for the node in the source cluster.
   *
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * The configuration for the source node group (shard).
   *
   * @public
   */
  NodeGroupConfiguration?: NodeGroupConfiguration | undefined;

  /**
   * The size of the cache on the source cache node.
   *
   * @public
   */
  CacheSize?: string | undefined;

  /**
   * The date and time when the cache node was created in the source cluster.
   *
   * @public
   */
  CacheNodeCreateTime?: Date | undefined;

  /**
   * The date and time when the source node's metadata and cache data set was obtained for the snapshot.
   *
   * @public
   */
  SnapshotCreateTime?: Date | undefined;
}

/**
 * Represents a copy of an entire Valkey or Redis OSS cluster as of the time when the snapshot was taken.
 *
 * @public
 */
export interface Snapshot {
  /**
   * The name of a snapshot. For an automatic snapshot, the name is system-generated. For a manual snapshot, this is the user-provided name.
   *
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * The unique identifier of the source replication group.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * A description of the source replication group.
   *
   * @public
   */
  ReplicationGroupDescription?: string | undefined;

  /**
   * The user-supplied identifier of the source cluster.
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * The status of the snapshot. Valid values: `creating` | `available` | `restoring` | `copying` | `deleting`.
   *
   * @public
   */
  SnapshotStatus?: string | undefined;

  /**
   * Indicates whether the snapshot is from an automatic backup (`automated`) or was created manually (`manual`).
   *
   * @public
   */
  SnapshotSource?: string | undefined;

  /**
   * The name of the compute and memory capacity node type for the source cluster.
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   *
   * - General purpose:
   *
   *   - Current generation:
   *
   *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
   *
   *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
   *
   *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
   *
   *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
   *
   *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
   *
   *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **T1 node types:** `cache.t1.micro`
   *
   *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
   *
   *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
   * - Compute optimized:
   *
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **C1 node types:** `cache.c1.xlarge`
   * - Memory optimized:
   *
   *   - Current generation:
   *
   *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
   *
   *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
   *
   *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
   *
   *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
   *
   * **Additional node type info**
   *
   * - All current generation instance types are created in Amazon VPC by default.
   * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
   * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
   * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The name of the cache engine (`memcached` or `redis`) used by the source cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version of the cache engine version that is used by the source cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The number of cache nodes in the source cluster.
   *
   * For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.
   *
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * The name of the Availability Zone in which the source cluster is located.
   *
   * @public
   */
  PreferredAvailabilityZone?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the preferred outpost.
   *
   * @public
   */
  PreferredOutpostArn?: string | undefined;

  /**
   * The date and time when the source cluster was created.
   *
   * @public
   */
  CacheClusterCreateTime?: Date | undefined;

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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the topic used by the source cluster for publishing notifications.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The port number used by each cache nodes in the source cluster.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The cache parameter group that is associated with the source cluster.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * The name of the cache subnet group associated with the source cluster.
   *
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the source cluster.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   *  If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions. 
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * For an automatic snapshot, the number of days for which ElastiCache retains the snapshot before deleting it.
   *
   * For manual snapshots, this field reflects the `SnapshotRetentionLimit` for the source cluster when the snapshot was created. This field is otherwise ignored: Manual snapshots do not expire, and can only be deleted using the `DeleteSnapshot` operation.
   *
   * **Important** If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time range during which ElastiCache takes daily snapshots of the source cluster.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * The number of node groups (shards) in this snapshot. When restoring from a snapshot, the number of node groups (shards) in the snapshot and in the restored replication group must be the same.
   *
   * @public
   */
  NumNodeGroups?: number | undefined;

  /**
   * Indicates the status of automatic failover for the source Valkey or Redis OSS replication group.
   *
   * @public
   */
  AutomaticFailover?: AutomaticFailoverStatus | undefined;

  /**
   * A list of the cache nodes in the source cluster.
   *
   * @public
   */
  NodeSnapshots?: NodeSnapshot[] | undefined;

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
   * Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/data-tiering.html).
   *
   * @public
   */
  DataTiering?: DataTieringStatus | undefined;

  /**
   * The durability setting of the cluster when the snapshot was taken. When restoring from this snapshot, the cluster uses this durability setting unless overridden in the restore request. For more information, see [Durability](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/durability.html).
   *
   * @public
   */
  Durability?: Durability | undefined;
}

/**
 * @public
 */
export interface CopySnapshotResult {
  /**
   * Represents a copy of an entire Valkey or Redis OSS cluster as of the time when the snapshot was taken.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * Specifies the destination, format and type of the logs.
 *
 * @public
 */
export interface LogDeliveryConfigurationRequest {
  /**
   * Refers to [slow-log](https://redis.io/commands/slowlog) or engine-log..
   *
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * Specify either `cloudwatch-logs` or `kinesis-firehose` as the destination type.
   *
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
   *
   * @public
   */
  DestinationDetails?: DestinationDetails | undefined;

  /**
   * Specifies either JSON or TEXT
   *
   * @public
   */
  LogFormat?: LogFormat | undefined;

  /**
   * Specify if log delivery is enabled. Default `true`.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Represents the input of a CreateCacheCluster operation.
 *
 * @public
 */
export interface CreateCacheClusterMessage {
  /**
   * The node group (shard) identifier. This parameter is stored as a lowercase string.
   *
   * **Constraints:**
   *
   * - A name must contain from 1 to 50 alphanumeric characters or hyphens.
   * - The first character must be a letter.
   * - A name cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  CacheClusterId: string | undefined;

  /**
   * The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.
   *
   * If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones.
   *
   * > **Note:** This parameter is only valid if the `Engine` parameter is `redis`.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.
   *
   * This parameter is only supported for Memcached clusters.
   *
   * If the `AZMode` and `PreferredAvailabilityZones` are not specified, ElastiCache assumes `single-az` mode.
   *
   * @public
   */
  AZMode?: AZMode | undefined;

  /**
   * The EC2 Availability Zone in which the cluster is created.
   *
   * All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use `PreferredAvailabilityZones`.
   *
   * Default: System chosen Availability Zone.
   *
   * @public
   */
  PreferredAvailabilityZone?: string | undefined;

  /**
   * A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.
   *
   * This option is only supported on Memcached.
   *
   * > **Note:**
   * >
   * > If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group.
   * >
   * > The number of Availability Zones listed must equal the value of `NumCacheNodes`.
   *
   * If you want all the nodes in the same Availability Zone, use `PreferredAvailabilityZone` instead, or repeat the Availability Zone multiple times in the list.
   *
   * Default: System chosen Availability Zones.
   *
   * @public
   */
  PreferredAvailabilityZones?: string[] | undefined;

  /**
   * The initial number of cache nodes that the cluster has.
   *
   * For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.
   *
   * If you need more than 40 nodes for your Memcached cluster, please fill out the ElastiCache Limit Increase Request form at [http://aws.amazon.com/contact-us/elasticache-node-limit-request/](http://aws.amazon.com/contact-us/elasticache-node-limit-request/).
   *
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * The compute and memory capacity of the nodes in the node group (shard).
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   *
   * - General purpose:
   *
   *   - Current generation:
   *
   *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
   *
   *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
   *
   *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
   *
   *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
   *
   *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
   *
   *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **T1 node types:** `cache.t1.micro`
   *
   *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
   *
   *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
   * - Compute optimized:
   *
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **C1 node types:** `cache.c1.xlarge`
   * - Memory optimized:
   *
   *   - Current generation:
   *
   *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
   *
   *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
   *
   *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
   *
   *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
   *
   * **Additional node type info**
   *
   * - All current generation instance types are created in Amazon VPC by default.
   * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
   * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
   * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The name of the cache engine to be used for this cluster.
   *
   * Valid values for this parameter are: `memcached` | `redis`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version number of the cache engine to be used for this cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.
   *
   * **Important:** You can upgrade to a newer engine version (see [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SelectEngine.html#VersionManagement)), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has `cluster-enabled='yes'` when creating a cluster.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * The name of the subnet group to be used for the cluster.
   *
   * Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
   *
   * > **Important:** If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see [Subnets and Subnet Groups](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SubnetGroups.html).
   *
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * A list of security group names to associate with this cluster.
   *
   * Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).
   *
   * @public
   */
  CacheSecurityGroupNames?: string[] | undefined;

  /**
   * One or more VPC security groups associated with the cluster.
   *
   * Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of tags to be added to this resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Valkey or Redis OSS RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas.
   *
   * > **Note:** This parameter is only valid if the `Engine` parameter is `redis`.
   *
   * Example of an Amazon S3 ARN: `arn:aws:s3:::my_bucket/snapshot1.rdb`
   *
   * @public
   */
  SnapshotArns?: string[] | undefined;

  /**
   * The name of a Valkey or Redis OSS snapshot from which to restore data into the new node group (shard). The snapshot status changes to `restoring` while the new node group (shard) is being created.
   *
   * > **Note:** This parameter is only valid if the `Engine` parameter is `redis`.
   *
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The port number on which each of the cache nodes accepts connections.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
   *
   * > **Note:** The Amazon SNS topic owner must be the same as the cluster owner.
   *
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   *  If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions. 
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set `SnapshotRetentionLimit` to 5, a snapshot taken today is retained for 5 days before being deleted.
   *
   * > **Note:** This parameter is only valid if the `Engine` parameter is `redis`.
   *
   * Default: 0 (i.e., automatic backups are disabled for this cache cluster).
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
   *
   * Example: `05:00-09:00`
   *
   * If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
   *
   * > **Note:** This parameter is only valid if the `Engine` parameter is `redis`.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * **Reserved parameter.** The password used to access a password protected server.
   *
   * Password constraints:
   *
   * - Must be only printable ASCII characters.
   * - Must be at least 16 characters and no more than 128 characters in length.
   * - The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token.
   *
   * For more information, see [AUTH password](http://redis.io/commands/AUTH) at http://redis.io/commands/AUTH.
   *
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * Specifies whether the nodes in the cluster are created in a single outpost or across multiple outposts.
   *
   * @public
   */
  OutpostMode?: OutpostMode | undefined;

  /**
   * The outpost ARN in which the cache cluster is created.
   *
   * @public
   */
  PreferredOutpostArn?: string | undefined;

  /**
   * The outpost ARNs in which the cache cluster is created.
   *
   * @public
   */
  PreferredOutpostArns?: string[] | undefined;

  /**
   * Specifies the destination, format and type of the logs.
   *
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[] | undefined;

  /**
   * A flag that enables in-transit encryption when set to true.
   *
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * Must be either `ipv4` | `ipv6` | `dual_stack`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * The network type you choose when modifying a cluster, either `ipv4` | `ipv6`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * Represents an individual cache node within a cluster. Each cache node runs its own instance of the cluster's protocol-compliant caching software - either Memcached, Valkey or Redis OSS.
 *
 * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
 *
 * - General purpose:
 *
 *   - Current generation:
 *
 *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
 *
 *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
 *
 *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
 *
 *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
 *
 *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
 *
 *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
 *
 *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
 *
 *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
 *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
 *
 *     **T1 node types:** `cache.t1.micro`
 *
 *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
 *
 *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
 * - Compute optimized:
 *
 *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
 *
 *     **C1 node types:** `cache.c1.xlarge`
 * - Memory optimized:
 *
 *   - Current generation:
 *
 *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
 *
 *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
 *
 *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
 *
 *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
 *
 *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
 *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
 *
 *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
 *
 *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
 *
 * **Additional node type info**
 *
 * - All current generation instance types are created in Amazon VPC by default.
 * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
 * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
 * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
 *
 * @public
 */
export interface CacheNode {
  /**
   * The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The combination of cluster ID and node ID uniquely identifies every cache node used in a customer's Amazon account.
   *
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * The current state of this cache node, one of the following values: `available`, `creating`, `rebooting`, or `deleting`.
   *
   * @public
   */
  CacheNodeStatus?: string | undefined;

  /**
   * The date and time when the cache node was created.
   *
   * @public
   */
  CacheNodeCreateTime?: Date | undefined;

  /**
   * The hostname for connecting to this cache node.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * The status of the parameter group applied to this cache node.
   *
   * @public
   */
  ParameterGroupStatus?: string | undefined;

  /**
   * The ID of the primary node to which this read replica node is synchronized. If this field is empty, this node is not associated with a primary cluster.
   *
   * @public
   */
  SourceCacheNodeId?: string | undefined;

  /**
   * The Availability Zone where this node was created and now resides.
   *
   * @public
   */
  CustomerAvailabilityZone?: string | undefined;

  /**
   * The customer outpost ARN of the cache node.
   *
   * @public
   */
  CustomerOutpostArn?: string | undefined;
}

/**
 * Status of the cache parameter group.
 *
 * @public
 */
export interface CacheParameterGroupStatus {
  /**
   * The name of the cache parameter group.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * The status of parameter updates.
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * A list of the cache node IDs which need to be rebooted for parameter changes to be applied. A node ID is a numeric identifier (0001, 0002, etc.).
   *
   * @public
   */
  CacheNodeIdsToReboot?: string[] | undefined;
}

/**
 * Represents a cluster's status within a particular cache security group.
 *
 * @public
 */
export interface CacheSecurityGroupMembership {
  /**
   * The name of the cache security group.
   *
   * @public
   */
  CacheSecurityGroupName?: string | undefined;

  /**
   * The membership status in the cache security group. The status changes when a cache security group is modified, or when the cache security groups assigned to a cluster are modified.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).
 *
 * @public
 */
export interface NotificationConfiguration {
  /**
   * The Amazon Resource Name (ARN) that identifies the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The current state of the topic.
   *
   * @public
   */
  TopicStatus?: string | undefined;
}

/**
 * Configuration settings for horizontal or vertical scaling operations on Memcached clusters.
 *
 * @public
 */
export interface ScaleConfig {
  /**
   * The percentage by which to scale the Memcached cluster, either horizontally by adding nodes or vertically by increasing resources.
   *
   * @public
   */
  ScalePercentage?: number | undefined;

  /**
   * The time interval in seconds between scaling operations when performing gradual scaling for a Memcached cluster.
   *
   * @public
   */
  ScaleIntervalMinutes?: number | undefined;
}

/**
 * A group of settings that are applied to the cluster in the future, or that are currently being applied.
 *
 * @public
 */
export interface PendingModifiedValues {
  /**
   * The new number of cache nodes for the cluster.
   *
   * For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.
   *
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * A list of cache node IDs that are being removed (or will be removed) from the cluster. A node ID is a 4-digit numeric identifier (0001, 0002, etc.).
   *
   * @public
   */
  CacheNodeIdsToRemove?: string[] | undefined;

  /**
   * The new cache engine version that the cluster runs.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The cache node type that this cluster or replication group is scaled to.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The auth token status
   *
   * @public
   */
  AuthTokenStatus?: AuthTokenUpdateStatus | undefined;

  /**
   * The log delivery configurations being modified
   *
   * @public
   */
  LogDeliveryConfigurations?: PendingLogDeliveryConfiguration[] | undefined;

  /**
   * A flag that enables in-transit encryption when set to true.
   *
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
   *
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * The scaling configuration changes that are pending for the Memcached cluster.
   *
   * @public
   */
  ScaleConfig?: ScaleConfig | undefined;
}

/**
 * Represents a single cache security group and its status.
 *
 * @public
 */
export interface SecurityGroupMembership {
  /**
   * The identifier of the cache security group.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * The status of the cache security group membership. The status changes whenever a cache security group is modified, or when the cache security groups assigned to a cluster are modified.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Contains all of the attributes of a specific cluster.
 *
 * @public
 */
export interface CacheCluster {
  /**
   * The user-supplied identifier of the cluster. This identifier is a unique key that identifies a cluster.
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * Represents a Memcached cluster endpoint which can be used by an application to connect to any node in the cluster. The configuration endpoint will always have `.cfg` in it.
   *
   * Example: `mem-3.9dvc4r.cfg.usw2.cache.amazonaws.com:11211`
   *
   * @public
   */
  ConfigurationEndpoint?: Endpoint | undefined;

  /**
   * The URL of the web page where you can download the latest ElastiCache client library.
   *
   * @public
   */
  ClientDownloadLandingPage?: string | undefined;

  /**
   * The name of the compute and memory capacity node type for the cluster.
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   *
   * - General purpose:
   *
   *   - Current generation:
   *
   *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
   *
   *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
   *
   *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
   *
   *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
   *
   *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
   *
   *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **T1 node types:** `cache.t1.micro`
   *
   *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
   *
   *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
   * - Compute optimized:
   *
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **C1 node types:** `cache.c1.xlarge`
   * - Memory optimized:
   *
   *   - Current generation:
   *
   *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
   *
   *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
   *
   *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
   *
   *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
   *
   * **Additional node type info**
   *
   * - All current generation instance types are created in Amazon VPC by default.
   * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
   * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
   * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The name of the cache engine (`memcached` or `redis`) to be used for this cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version of the cache engine that is used in this cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The current state of this cluster, one of the following values: `available`, `creating`, `deleted`, `deleting`, `incompatible-network`, `modifying`, `rebooting cluster nodes`, `restore-failed`, or `snapshotting`.
   *
   * @public
   */
  CacheClusterStatus?: string | undefined;

  /**
   * The number of cache nodes in the cluster.
   *
   * For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.
   *
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * The name of the Availability Zone in which the cluster is located or "Multiple" if the cache nodes are located in different Availability Zones.
   *
   * @public
   */
  PreferredAvailabilityZone?: string | undefined;

  /**
   * The outpost ARN in which the cache cluster is created.
   *
   * @public
   */
  PreferredOutpostArn?: string | undefined;

  /**
   * The date and time when the cluster was created.
   *
   * @public
   */
  CacheClusterCreateTime?: Date | undefined;

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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * A group of settings that are applied to the cluster in the future, or that are currently being applied.
   *
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).
   *
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * A list of cache security group elements, composed of name and status sub-elements.
   *
   * @public
   */
  CacheSecurityGroups?: CacheSecurityGroupMembership[] | undefined;

  /**
   * Status of the cache parameter group.
   *
   * @public
   */
  CacheParameterGroup?: CacheParameterGroupStatus | undefined;

  /**
   * The name of the cache subnet group associated with the cluster.
   *
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * A list of cache nodes that are members of the cluster.
   *
   * @public
   */
  CacheNodes?: CacheNode[] | undefined;

  /**
   *  If you are running Valkey or Redis OSS engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions. 
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * A list of VPC Security Groups associated with the cluster.
   *
   * @public
   */
  SecurityGroups?: SecurityGroupMembership[] | undefined;

  /**
   * The replication group to which this cluster belongs. If this field is empty, the cluster is not associated with any replication group.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set `SnapshotRetentionLimit` to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * > **Important:** If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster.
   *
   * Example: `05:00-09:00`
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * A flag that enables using an `AuthToken` (password) when issuing Valkey or Redis OSS commands.
   *
   * Default: `false`
   *
   * @public
   */
  AuthTokenEnabled?: boolean | undefined;

  /**
   * The date the auth token was last modified
   *
   * @public
   */
  AuthTokenLastModifiedDate?: Date | undefined;

  /**
   * A flag that enables in-transit encryption when set to `true`.
   *
   * **Required:** Only available when creating a replication group in an Amazon VPC using Redis OSS version `3.2.6`, `4.x` or later.
   *
   * Default: `false`
   *
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * A flag that enables encryption at-rest when set to `true`.
   *
   * You cannot modify the value of `AtRestEncryptionEnabled` after the cluster is created. To enable at-rest encryption on a cluster you must set `AtRestEncryptionEnabled` to `true` when you create a cluster.
   *
   * **Required:** Only available when creating a replication group in an Amazon VPC using Redis OSS version `3.2.6`, `4.x` or later.
   *
   * Default: `false`
   *
   * @public
   */
  AtRestEncryptionEnabled?: boolean | undefined;

  /**
   * The ARN (Amazon Resource Name) of the cache cluster.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * A boolean value indicating whether log delivery is enabled for the replication group.
   *
   * @public
   */
  ReplicationGroupLogDeliveryEnabled?: boolean | undefined;

  /**
   * Returns the destination, format and type of the logs.
   *
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfiguration[] | undefined;

  /**
   * Must be either `ipv4` | `ipv6` | `dual_stack`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * The network type associated with the cluster, either `ipv4` | `ipv6`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
   *
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;
}

/**
 * @public
 */
export interface CreateCacheClusterResult {
  /**
   * Contains all of the attributes of a specific cluster.
   *
   * @public
   */
  CacheCluster?: CacheCluster | undefined;
}

/**
 * Represents the input of a `CreateCacheParameterGroup` operation.
 *
 * @public
 */
export interface CreateCacheParameterGroupMessage {
  /**
   * A user-specified name for the cache parameter group. This value is stored as a lowercase string.
   *
   * @public
   */
  CacheParameterGroupName: string | undefined;

  /**
   * The name of the cache parameter group family that the cache parameter group can be used with.
   *
   * Valid values are: `valkey8` | `valkey7` | `memcached1.4` | `memcached1.5` | `memcached1.6` | `redis2.6` | `redis2.8` | `redis3.2` | `redis4.0` | `redis5.0` | `redis6.x` | `redis7`
   *
   * @public
   */
  CacheParameterGroupFamily: string | undefined;

  /**
   * A user-specified description for the cache parameter group.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Represents the output of a `CreateCacheParameterGroup` operation.
 *
 * @public
 */
export interface CacheParameterGroup {
  /**
   * The name of the cache parameter group.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * The name of the cache parameter group family that this cache parameter group is compatible with.
   *
   * Valid values are: `memcached1.4` | `memcached1.5` | `memcached1.6` | `redis2.6` | `redis2.8` | `redis3.2` | `redis4.0` | `redis5.0` | `redis6.x` | `redis7`
   *
   * @public
   */
  CacheParameterGroupFamily?: string | undefined;

  /**
   * The description for this cache parameter group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates whether the parameter group is associated with a Global datastore
   *
   * @public
   */
  IsGlobal?: boolean | undefined;

  /**
   * The ARN (Amazon Resource Name) of the cache parameter group.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateCacheParameterGroupResult {
  /**
   * Represents the output of a `CreateCacheParameterGroup` operation.
   *
   * @public
   */
  CacheParameterGroup?: CacheParameterGroup | undefined;
}

/**
 * Represents the input of a `CreateCacheSecurityGroup` operation.
 *
 * @public
 */
export interface CreateCacheSecurityGroupMessage {
  /**
   * A name for the cache security group. This value is stored as a lowercase string.
   *
   * Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default".
   *
   * Example: `mysecuritygroup`
   *
   * @public
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * A description for the cache security group.
   *
   * @public
   */
  Description: string | undefined;

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
export interface CreateCacheSecurityGroupResult {
  /**
   * Represents the output of one of the following operations:
   *
   * - `AuthorizeCacheSecurityGroupIngress`
   * - `CreateCacheSecurityGroup`
   * - `RevokeCacheSecurityGroupIngress`
   *
   * @public
   */
  CacheSecurityGroup?: CacheSecurityGroup | undefined;
}

/**
 * Represents the input of a `CreateCacheSubnetGroup` operation.
 *
 * @public
 */
export interface CreateCacheSubnetGroupMessage {
  /**
   * A name for the cache subnet group. This value is stored as a lowercase string.
   *
   * Constraints: Must contain no more than 255 alphanumeric characters or hyphens.
   *
   * Example: `mysubnetgroup`
   *
   * @public
   */
  CacheSubnetGroupName: string | undefined;

  /**
   * A description for the cache subnet group.
   *
   * @public
   */
  CacheSubnetGroupDescription: string | undefined;

  /**
   * A list of VPC subnet IDs for the cache subnet group.
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
 * Describes an Availability Zone in which the cluster is launched.
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
 * The ID of the outpost subnet.
 *
 * @public
 */
export interface SubnetOutpost {
  /**
   * The outpost ARN of the subnet.
   *
   * @public
   */
  SubnetOutpostArn?: string | undefined;
}

/**
 * Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
 *
 * @public
 */
export interface Subnet {
  /**
   * The unique identifier for the subnet.
   *
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * The Availability Zone associated with the subnet.
   *
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * The outpost ARN of the subnet.
   *
   * @public
   */
  SubnetOutpost?: SubnetOutpost | undefined;

  /**
   * Either `ipv4` | `ipv6` | `dual_stack`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * Represents the output of one of the following operations:
 *
 * - `CreateCacheSubnetGroup`
 * - `ModifyCacheSubnetGroup`
 *
 * @public
 */
export interface CacheSubnetGroup {
  /**
   * The name of the cache subnet group.
   *
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * The description of the cache subnet group.
   *
   * @public
   */
  CacheSubnetGroupDescription?: string | undefined;

  /**
   * The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of subnets associated with the cache subnet group.
   *
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * The ARN (Amazon Resource Name) of the cache subnet group.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * Either `ipv4` | `ipv6` | `dual_stack`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * @public
 */
export interface CreateCacheSubnetGroupResult {
  /**
   * Represents the output of one of the following operations:
   *
   * - `CreateCacheSubnetGroup`
   * - `ModifyCacheSubnetGroup`
   *
   * @public
   */
  CacheSubnetGroup?: CacheSubnetGroup | undefined;
}

/**
 * @public
 */
export interface CreateGlobalReplicationGroupMessage {
  /**
   * The suffix name of a Global datastore. Amazon ElastiCache automatically applies a prefix to the Global datastore ID when it is created. Each Amazon Region has its own prefix. For instance, a Global datastore ID created in the US-West-1 region will begin with "dsdfu" along with the suffix name you provide. The suffix, combined with the auto-generated prefix, guarantees uniqueness of the Global datastore name across multiple regions.
   *
   * For a full list of Amazon Regions and their respective Global datastore iD prefixes, see [Using the Amazon CLI with Global datastores](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Redis-Global-Datastores-CLI.html).
   *
   * @public
   */
  GlobalReplicationGroupIdSuffix: string | undefined;

  /**
   * Provides details of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupDescription?: string | undefined;

  /**
   * The name of the primary cluster that accepts writes and will replicate updates to the secondary cluster. This value is stored as a lowercase string.
   *
   * @public
   */
  PrimaryReplicationGroupId: string | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Indicates the slot configuration and global identifier for a slice group.
 *
 * @public
 */
export interface GlobalNodeGroup {
  /**
   * The name of the global node group
   *
   * @public
   */
  GlobalNodeGroupId?: string | undefined;

  /**
   * The keyspace for this node group
   *
   * @public
   */
  Slots?: string | undefined;
}

/**
 * A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group.
 *
 * @public
 */
export interface GlobalReplicationGroupMember {
  /**
   * The replication group id of the Global datastore member.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The Amazon region of the Global datastore member.
   *
   * @public
   */
  ReplicationGroupRegion?: string | undefined;

  /**
   * Indicates the role of the replication group, primary or secondary.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * Indicates whether automatic failover is enabled for the replication group.
   *
   * @public
   */
  AutomaticFailover?: AutomaticFailoverStatus | undefined;

  /**
   * The status of the membership of the replication group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
 *
 * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
 *
 * @public
 */
export interface GlobalReplicationGroup {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId?: string | undefined;

  /**
   * The optional description of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupDescription?: string | undefined;

  /**
   * The status of the Global datastore
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The cache node type of the Global datastore
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The ElastiCache engine. For Valkey or Redis OSS only.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The ElastiCache engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The replication groups that comprise the Global datastore.
   *
   * @public
   */
  Members?: GlobalReplicationGroupMember[] | undefined;

  /**
   * A flag that indicates whether the Global datastore is cluster enabled.
   *
   * @public
   */
  ClusterEnabled?: boolean | undefined;

  /**
   * Indicates the slot configuration and global identifier for each slice group.
   *
   * @public
   */
  GlobalNodeGroups?: GlobalNodeGroup[] | undefined;

  /**
   * A flag that enables using an `AuthToken` (password) when issuing Valkey or Redis OSS commands.
   *
   * Default: `false`
   *
   * @public
   */
  AuthTokenEnabled?: boolean | undefined;

  /**
   * A flag that enables in-transit encryption when set to true.
   *
   * **Required:** Only available when creating a replication group in an Amazon VPC using Redis OSS version `3.2.6`, `4.x` or later.
   *
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * A flag that enables encryption at rest when set to `true`.
   *
   * You cannot modify the value of `AtRestEncryptionEnabled` after the replication group is created. To enable encryption at rest on a replication group you must set `AtRestEncryptionEnabled` to `true` when you create the replication group.
   *
   * **Required:** Only available when creating a replication group in an Amazon VPC using Redis OSS version `3.2.6`, `4.x` or later.
   *
   * @public
   */
  AtRestEncryptionEnabled?: boolean | undefined;

  /**
   * The ARN (Amazon Resource Name) of the global replication group.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlobalReplicationGroupResult {
  /**
   * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
   *
   * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
   *
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * Represents the input of a `CreateReplicationGroup` operation.
 *
 * @public
 */
export interface CreateReplicationGroupMessage {
  /**
   * The replication group identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - A name must contain from 1 to 40 alphanumeric characters or hyphens.
   * - The first character must be a letter.
   * - A name cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * A user-created description for the replication group.
   *
   * @public
   */
  ReplicationGroupDescription: string | undefined;

  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId?: string | undefined;

  /**
   * The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of `available`.
   *
   * This parameter is not required if `NumCacheClusters`, `NumNodeGroups`, or `ReplicasPerNodeGroup` is specified.
   *
   * @public
   */
  PrimaryClusterId?: string | undefined;

  /**
   * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.
   *
   * `AutomaticFailoverEnabled` must be enabled for Valkey or Redis OSS (cluster mode enabled) replication groups.
   *
   * Default: false
   *
   * @public
   */
  AutomaticFailoverEnabled?: boolean | undefined;

  /**
   * A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see [Minimizing Downtime: Multi-AZ](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html).
   *
   * @public
   */
  MultiAZEnabled?: boolean | undefined;

  /**
   * The number of clusters this replication group initially has.
   *
   * This parameter is not used if there is more than one node group (shard). You should use `ReplicasPerNodeGroup` instead.
   *
   * If `AutomaticFailoverEnabled` is `true`, the value of this parameter must be at least 2. If `AutomaticFailoverEnabled` is `false` you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6.
   *
   * The maximum permitted value for `NumCacheClusters` is 6 (1 primary plus 5 replicas).
   *
   * @public
   */
  NumCacheClusters?: number | undefined;

  /**
   * A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list.
   *
   * This parameter is not used if there is more than one node group (shard). You should use `NodeGroupConfiguration` instead.
   *
   * > **Note:**
   * >
   * > If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.
   * >
   * > The number of Availability Zones listed must equal the value of `NumCacheClusters`.
   *
   * Default: system chosen Availability Zones.
   *
   * @public
   */
  PreferredCacheClusterAZs?: string[] | undefined;

  /**
   * An optional parameter that specifies the number of node groups (shards) for this Valkey or Redis OSS (cluster mode enabled) replication group. For Valkey or Redis OSS (cluster mode disabled) either omit this parameter or set it to 1.
   *
   * Default: 1
   *
   * @public
   */
  NumNodeGroups?: number | undefined;

  /**
   * An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
   *
   * @public
   */
  ReplicasPerNodeGroup?: number | undefined;

  /**
   * A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: `PrimaryAvailabilityZone`, `ReplicaAvailabilityZones`, `ReplicaCount`, and `Slots`.
   *
   * If you're creating a Valkey or Redis OSS (cluster mode disabled) or a Valkey or Redis OSS (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Valkey or Redis OSS (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.
   *
   * @public
   */
  NodeGroupConfiguration?: NodeGroupConfiguration[] | undefined;

  /**
   * The compute and memory capacity of the nodes in the node group (shard).
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   *
   * - General purpose:
   *
   *   - Current generation:
   *
   *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
   *
   *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
   *
   *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
   *
   *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
   *
   *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
   *
   *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **T1 node types:** `cache.t1.micro`
   *
   *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
   *
   *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
   * - Compute optimized:
   *
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **C1 node types:** `cache.c1.xlarge`
   * - Memory optimized:
   *
   *   - Current generation:
   *
   *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
   *
   *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
   *
   *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
   *
   *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
   *
   * **Additional node type info**
   *
   * - All current generation instance types are created in Amazon VPC by default.
   * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
   * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
   * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The name of the cache engine to be used for the clusters in this replication group. The value must be set to `valkey` or `redis`.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the `DescribeCacheEngineVersions` operation.
   *
   * **Important:** You can upgrade to a newer engine version (see [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SelectEngine.html#VersionManagement)) in the *ElastiCache User Guide*, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.
   *
   * If you are running Valkey or Redis OSS version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name.
   *
   * - To create a Valkey or Redis OSS (cluster mode disabled) replication group, use `CacheParameterGroupName=default.redis3.2`.
   * - To create a Valkey or Redis OSS (cluster mode enabled) replication group, use `CacheParameterGroupName=default.redis3.2.cluster.on`.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * The name of the cache subnet group to be used for the replication group.
   *
   * > **Important:** If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see [Subnets and Subnet Groups](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SubnetGroups.html).
   *
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * A list of cache security group names to associate with this replication group.
   *
   * @public
   */
  CacheSecurityGroupNames?: string[] | undefined;

  /**
   * One or more Amazon VPC security groups associated with this replication group.
   *
   * Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=`myKey`, Value=`myKeyValue`. You can include multiple tags as shown following: Key=`myKey`, Value=`myKeyValue` Key=`mySecondKey`, Value=`mySecondKeyValue`. Tags on replication groups will be replicated to all nodes.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of Amazon Resource Names (ARN) that uniquely identify the Valkey or Redis OSS RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter *NumNodeGroups* or the number of node groups configured by *NodeGroupConfiguration* regardless of the number of ARNs specified here.
   *
   * Example of an Amazon S3 ARN: `arn:aws:s3:::my_bucket/snapshot1.rdb`
   *
   * @public
   */
  SnapshotArns?: string[] | undefined;

  /**
   * The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to `restoring` while the new replication group is being created.
   *
   * @public
   */
  SnapshotName?: string | undefined;

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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The port number on which each member of the replication group accepts connections.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
   *
   * > **Note:** The Amazon SNS topic owner must be the same as the cluster owner.
   *
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   *  If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions. 
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set `SnapshotRetentionLimit` to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * Default: 0 (i.e., automatic backups are disabled for this cluster).
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
   *
   * Example: `05:00-09:00`
   *
   * If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * **Reserved parameter.** The password used to access a password protected server.
   *
   * `AuthToken` can be specified only on replication groups where `TransitEncryptionEnabled` is `true`.
   *
   * > **Important:** For HIPAA compliance, you must specify `TransitEncryptionEnabled` as `true`, an `AuthToken`, and a `CacheSubnetGroup`.
   *
   * Password constraints:
   *
   * - Must be only printable ASCII characters.
   * - Must be at least 16 characters and no more than 128 characters in length.
   * - The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token.
   *
   * For more information, see [AUTH password](http://redis.io/commands/AUTH) at http://redis.io/commands/AUTH.
   *
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * A flag that enables in-transit encryption when set to `true`.
   *
   * This parameter is valid only if the `Engine` parameter is `redis`, the `EngineVersion` parameter is `3.2.6`, `4.x` or later, and the cluster is being created in an Amazon VPC.
   *
   * If you enable in-transit encryption, you must also specify a value for `CacheSubnetGroup`.
   *
   * **Required:** Only available when creating a replication group in an Amazon VPC using Redis OSS version `3.2.6`, `4.x` or later.
   *
   * Default: `false`
   *
   * > **Important:** For HIPAA compliance, you must specify `TransitEncryptionEnabled` as `true`, an `AuthToken`, and a `CacheSubnetGroup`.
   *
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * A flag that enables encryption at-rest on the replication group when set to `true`. In some cases, encryption at-rest may be enabled even when this value is false. Use `StorageEncryptionType` to view the effective encryption state of a cluster.
   *
   * You cannot modify the value of `AtRestEncryptionEnabled` after the replication group is created.
   *
   * Default: `true` when using Valkey, `false` when using Redis OSS
   *
   * @public
   */
  AtRestEncryptionEnabled?: boolean | undefined;

  /**
   * The ID of the KMS key used to encrypt the disk in the cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The user group to associate with the replication group.
   *
   * @public
   */
  UserGroupIds?: string[] | undefined;

  /**
   * Specifies the destination, format and type of the logs.
   *
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[] | undefined;

  /**
   * Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/data-tiering.html).
   *
   * @public
   */
  DataTieringEnabled?: boolean | undefined;

  /**
   * Must be either `ipv4` | `ipv6` | `dual_stack`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * The network type you choose when creating a replication group, either `ipv4` | `ipv6`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
   *
   * When setting `TransitEncryptionEnabled` to `true`, you can set your `TransitEncryptionMode` to `preferred` in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Valkey or Redis OSS clients to use encrypted connections you can modify the value to `required` to allow encrypted connections only.
   *
   * Setting `TransitEncryptionMode` to `required` is a two-step process that requires you to first set the `TransitEncryptionMode` to `preferred`, after that you can set `TransitEncryptionMode` to `required`.
   *
   * This process will not trigger the replacement of the replication group.
   *
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.
   *
   * @public
   */
  ClusterMode?: ClusterMode | undefined;

  /**
   * The name of the snapshot used to create a replication group. Available for Valkey, Redis OSS only.
   *
   * @public
   */
  ServerlessCacheSnapshotName?: string | undefined;

  /**
   * Specifies the durability setting for the replication group. When set to `default`, the service determines the effective durability based on the engine version, cluster mode, and other parameters. The resolved setting is reflected in the `EffectiveDurability` property of the replication group. For more information, see [Durability](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/durability.html).
   *
   * @public
   */
  Durability?: Durability | undefined;
}

/**
 * @public
 */
export interface CreateReplicationGroupResult {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * @public
 */
export interface CreateServerlessCacheRequest {
  /**
   * User-provided identifier for the serverless cache. This parameter is stored as a lowercase string.
   *
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * User-provided description for the serverless cache. The default is NULL, i.e. if no description is provided then an empty string will be returned. The maximum length is 255 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the cache engine to be used for creating the serverless cache.
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The version of the cache engine that will be used to create the serverless cache.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * Sets the cache usage limits for storage and ElastiCache Processing Units for the cache.
   *
   * @public
   */
  CacheUsageLimits?: CacheUsageLimits | undefined;

  /**
   * ARN of the customer managed key for encrypting the data at rest. If no KMS key is provided, a default service key is used.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of the one or more VPC security groups to be associated with the serverless cache. The security group will authorize traffic access for the VPC end-point (private-link). If no other information is given this will be the VPC’s Default Security Group that is associated with the cluster VPC end-point.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The ARN(s) of the snapshot that the new serverless cache will be created from. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  SnapshotArnsToRestore?: string[] | undefined;

  /**
   * The list of tags (key, value) pairs to be added to the serverless cache resource. Default is NULL.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The identifier of the UserGroup to be associated with the serverless cache. Available for Valkey and Redis OSS only. Default is NULL.
   *
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * A list of the identifiers of the subnets where the VPC endpoint for the serverless cache will be deployed. All the subnetIds must belong to the same VPC.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The number of days for which ElastiCache retains automatic snapshots before deleting them. Available for Valkey, Redis OSS and Serverless Memcached only. The maximum value allowed is 35 days.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time that snapshots will be created from the new serverless cache. By default this number is populated with 0, i.e. no snapshots will be created on an automatic daily basis. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  DailySnapshotTime?: string | undefined;

  /**
   * The IP protocol version used by the serverless cache. Must be either `ipv4` | `ipv6` | `dual_stack`. `ipv6` is only supported with IPv6-only subnets. If not specified, defaults to `ipv4`, unless all provided subnets are IPv6-only, in which case it defaults to `ipv6`.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * The connection type for the serverless cache. Must be either `vpc` | `public`. Use `vpc` to access the cache through a VPC endpoint, or `public` to access the cache over the internet. If not specified, defaults to `vpc`. This value cannot be changed after the serverless cache is created. Setting this to `public` requires Valkey 9 or above.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;
}

/**
 * @public
 */
export interface CreateServerlessCacheResponse {
  /**
   * The response for the attempt to create the serverless cache.
   *
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * @public
 */
export interface CreateServerlessCacheSnapshotRequest {
  /**
   * The name for the snapshot being created. Must be unique for the customer account. Available for Valkey, Redis OSS and Serverless Memcached only. Must be between 1 and 255 characters. This value is stored as a lowercase string.
   *
   * @public
   */
  ServerlessCacheSnapshotName: string | undefined;

  /**
   * The name of an existing serverless cache. The snapshot is created from this cache. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * The ID of the KMS key used to encrypt the snapshot. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of tags to be added to the snapshot resource. A tag is a key-value pair. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateServerlessCacheSnapshotResponse {
  /**
   * The state of a serverless cache snapshot at a specific point in time, to the millisecond. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot | undefined;
}

/**
 * Represents the input of a `CreateSnapshot` operation.
 *
 * @public
 */
export interface CreateSnapshotMessage {
  /**
   * The identifier of an existing replication group. The snapshot is created from this replication group.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The identifier of an existing cluster. The snapshot is created from this cluster.
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * A name for the snapshot being created. This value is stored as a lowercase string.
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
export interface CreateSnapshotResult {
  /**
   * Represents a copy of an entire Valkey or Redis OSS cluster as of the time when the snapshot was taken.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * Specifies the authentication mode to use.
 *
 * @public
 */
export interface AuthenticationMode {
  /**
   * Specifies the authentication type. Possible options are IAM authentication, password and no password.
   *
   * @public
   */
  Type?: InputAuthenticationType | undefined;

  /**
   * Specifies the passwords to use for authentication if `Type` is set to `password`.
   *
   * @public
   */
  Passwords?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateUserMessage {
  /**
   * The ID of the user. This value is stored as a lowercase string.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The username of the user.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The options are valkey or redis.
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * Passwords used for this user. You can create up to two passwords for each user.
   *
   * @public
   */
  Passwords?: string[] | undefined;

  /**
   * Access permissions string used for this user.
   *
   * @public
   */
  AccessString: string | undefined;

  /**
   * Indicates a password is not required for this user.
   *
   * @public
   */
  NoPasswordRequired?: boolean | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies how to authenticate the user.
   *
   * @public
   */
  AuthenticationMode?: AuthenticationMode | undefined;
}

/**
 * Indicates whether the user requires a password to authenticate.
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
 * @public
 */
export interface User {
  /**
   * The ID of the user.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The username of the user.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Indicates the user status. Can be "active", "modifying" or "deleting".
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The options are valkey or redis.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The minimum engine version required, which is Redis OSS 6.0
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * Access permissions string used for this user.
   *
   * @public
   */
  AccessString?: string | undefined;

  /**
   * Returns a list of the user group IDs the user belongs to.
   *
   * @public
   */
  UserGroupIds?: string[] | undefined;

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
export interface CreateUserGroupMessage {
  /**
   * The ID of the user group. This value is stored as a lowercase string.
   *
   * @public
   */
  UserGroupId: string | undefined;

  /**
   * Sets the engine listed in a user group. The options are valkey or redis.
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The list of user IDs that belong to the user group.
   *
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted. Available for Valkey and Redis OSS only.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Returns the updates being applied to the user group.
 *
 * @public
 */
export interface UserGroupPendingChanges {
  /**
   * The list of user IDs to remove.
   *
   * @public
   */
  UserIdsToRemove?: string[] | undefined;

  /**
   * The list of user IDs to add.
   *
   * @public
   */
  UserIdsToAdd?: string[] | undefined;
}

/**
 * @public
 */
export interface UserGroup {
  /**
   * The ID of the user group.
   *
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * Indicates user group status. Can be "creating", "active", "modifying", "deleting".
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The options are valkey or redis.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The list of user IDs that belong to the user group.
   *
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * The minimum engine version required, which is Redis OSS 6.0
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * A list of updates being applied to the user group.
   *
   * @public
   */
  PendingChanges?: UserGroupPendingChanges | undefined;

  /**
   * A list of replication groups that the user group can access.
   *
   * @public
   */
  ReplicationGroups?: string[] | undefined;

  /**
   * Indicates which serverless caches the specified user group is associated with. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCaches?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user group.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface DecreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * The number of node groups (shards) that results from the modification of the shard configuration
   *
   * @public
   */
  NodeGroupCount: number | undefined;

  /**
   * If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster. ElastiCache will attempt to remove all node groups listed by GlobalNodeGroupsToRemove from the cluster.
   *
   * @public
   */
  GlobalNodeGroupsToRemove?: string[] | undefined;

  /**
   * If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRetain is a list of NodeGroupIds to retain from the cluster. ElastiCache will attempt to retain all node groups listed by GlobalNodeGroupsToRetain from the cluster.
   *
   * @public
   */
  GlobalNodeGroupsToRetain?: string[] | undefined;

  /**
   * Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is true.
   *
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface DecreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
   *
   * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
   *
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * Node group (shard) configuration options when adding or removing replicas. Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones.
 *
 * @public
 */
export interface ConfigureShard {
  /**
   * The 4-digit id for the node group you are configuring. For Valkey or Redis OSS (cluster mode disabled) replication groups, the node group id is always 0001. To find a Valkey or Redis OSS (cluster mode enabled)'s node group's (shard's) id, see [Finding a Shard's Id](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/shard-find-id.html).
   *
   * @public
   */
  NodeGroupId: string | undefined;

  /**
   * The number of replicas you want in this node group at the end of this operation. The maximum value for `NewReplicaCount` is 5. The minimum value depends upon the type of Valkey or Redis OSS replication group you are working with.
   *
   * The minimum number of replicas in a shard or replication group is:
   *
   * - Valkey or Redis OSS (cluster mode disabled)
   *
   *   - If Multi-AZ: 1
   *   - If Multi-AZ: 0
   * - Valkey or Redis OSS (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)
   *
   * @public
   */
  NewReplicaCount: number | undefined;

  /**
   * A list of `PreferredAvailabilityZone` strings that specify which availability zones the replication group's nodes are to be in. The nummber of `PreferredAvailabilityZone` values must equal the value of `NewReplicaCount` plus 1 to account for the primary node. If this member of `ReplicaConfiguration` is omitted, ElastiCache selects the availability zone for each of the replicas.
   *
   * @public
   */
  PreferredAvailabilityZones?: string[] | undefined;

  /**
   * The outpost ARNs in which the cache cluster is created.
   *
   * @public
   */
  PreferredOutpostArns?: string[] | undefined;
}

/**
 * @public
 */
export interface DecreaseReplicaCountMessage {
  /**
   * The id of the replication group from which you want to remove replica nodes.
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * The number of read replica nodes you want at the completion of this operation. For Valkey or Redis OSS (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Valkey or Redis OSS (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.
   *
   * The minimum number of replicas in a shard or replication group is:
   *
   * - Valkey or Redis OSS (cluster mode disabled)
   *
   *   - If Multi-AZ is enabled: 1
   *   - If Multi-AZ is not enabled: 0
   * - Valkey or Redis OSS (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)
   *
   * @public
   */
  NewReplicaCount?: number | undefined;

  /**
   * A list of `ConfigureShard` objects that can be used to configure each shard in a Valkey or Redis OSS replication group. The `ConfigureShard` has three members: `NewReplicaCount`, `NodeGroupId`, and `PreferredAvailabilityZones`.
   *
   * @public
   */
  ReplicaConfiguration?: ConfigureShard[] | undefined;

  /**
   * A list of the node ids to remove from the replication group or node group (shard).
   *
   * @public
   */
  ReplicasToRemove?: string[] | undefined;

  /**
   * If `True`, the number of replica nodes is decreased immediately. `ApplyImmediately=False` is not currently supported.
   *
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface DecreaseReplicaCountResult {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * Represents the input of a `DeleteCacheCluster` operation.
 *
 * @public
 */
export interface DeleteCacheClusterMessage {
  /**
   * The cluster identifier for the cluster to be deleted. This parameter is not case sensitive.
   *
   * @public
   */
  CacheClusterId: string | undefined;

  /**
   * The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cluster immediately afterward.
   *
   * @public
   */
  FinalSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCacheClusterResult {
  /**
   * Contains all of the attributes of a specific cluster.
   *
   * @public
   */
  CacheCluster?: CacheCluster | undefined;
}

/**
 * Represents the input of a `DeleteCacheParameterGroup` operation.
 *
 * @public
 */
export interface DeleteCacheParameterGroupMessage {
  /**
   * The name of the cache parameter group to delete.
   *
   * > **Note:** The specified cache security group must not be associated with any clusters.
   *
   * @public
   */
  CacheParameterGroupName: string | undefined;
}

/**
 * Represents the input of a `DeleteCacheSecurityGroup` operation.
 *
 * @public
 */
export interface DeleteCacheSecurityGroupMessage {
  /**
   * The name of the cache security group to delete.
   *
   * > **Note:** You cannot delete the default security group.
   *
   * @public
   */
  CacheSecurityGroupName: string | undefined;
}

/**
 * Represents the input of a `DeleteCacheSubnetGroup` operation.
 *
 * @public
 */
export interface DeleteCacheSubnetGroupMessage {
  /**
   * The name of the cache subnet group to delete.
   *
   * Constraints: Must contain no more than 255 alphanumeric characters or hyphens.
   *
   * @public
   */
  CacheSubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalReplicationGroupMessage {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * The primary replication group is retained as a standalone replication group.
   *
   * @public
   */
  RetainPrimaryReplicationGroup: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalReplicationGroupResult {
  /**
   * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
   *
   * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
   *
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * Represents the input of a `DeleteReplicationGroup` operation.
 *
 * @public
 */
export interface DeleteReplicationGroupMessage {
  /**
   * The identifier for the cluster to be deleted. This parameter is not case sensitive.
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * If set to `true`, all of the read replicas are deleted, but the primary node is retained.
   *
   * @public
   */
  RetainPrimaryCluster?: boolean | undefined;

  /**
   * The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster, rather than one of the replicas; this is to ensure that it captures the freshest data. After the final snapshot is taken, the replication group is immediately deleted.
   *
   * @public
   */
  FinalSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationGroupResult {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * @public
 */
export interface DeleteServerlessCacheRequest {
  /**
   * The identifier of the serverless cache to be deleted.
   *
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * Name of the final snapshot to be taken before the serverless cache is deleted. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL, i.e. a final snapshot is not taken.
   *
   * @public
   */
  FinalSnapshotName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteServerlessCacheResponse {
  /**
   * Provides the details of the specified serverless cache that is about to be deleted.
   *
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * @public
 */
export interface DeleteServerlessCacheSnapshotRequest {
  /**
   * Idenfitier of the snapshot to be deleted. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServerlessCacheSnapshotResponse {
  /**
   * The snapshot to be deleted. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot | undefined;
}

/**
 * Represents the input of a `DeleteSnapshot` operation.
 *
 * @public
 */
export interface DeleteSnapshotMessage {
  /**
   * The name of the snapshot to be deleted.
   *
   * @public
   */
  SnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResult {
  /**
   * Represents a copy of an entire Valkey or Redis OSS cluster as of the time when the snapshot was taken.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface DeleteUserMessage {
  /**
   * The ID of the user.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserGroupMessage {
  /**
   * The ID of the user group.
   *
   * @public
   */
  UserGroupId: string | undefined;
}

/**
 * Represents the output of a `DescribeCacheClusters` operation.
 *
 * @public
 */
export interface CacheClusterMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of clusters. Each item in the list contains detailed information about one cluster.
   *
   * @public
   */
  CacheClusters?: CacheCluster[] | undefined;
}

/**
 * Represents the input of a `DescribeCacheClusters` operation.
 *
 * @public
 */
export interface DescribeCacheClustersMessage {
  /**
   * The user-supplied cluster identifier. If this parameter is specified, only information about that specific cluster is returned. This parameter isn't case sensitive.
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An optional flag that can be included in the `DescribeCacheCluster` request to retrieve information about the individual cache nodes.
   *
   * @public
   */
  ShowCacheNodeInfo?: boolean | undefined;

  /**
   * An optional flag that can be included in the `DescribeCacheCluster` request to show only nodes (API/CLI: clusters) that are not members of a replication group. In practice, this means Memcached and single node Valkey or Redis OSS clusters.
   *
   * @public
   */
  ShowCacheClustersNotInReplicationGroups?: boolean | undefined;
}

/**
 * Provides all of the details about a particular cache engine version.
 *
 * @public
 */
export interface CacheEngineVersion {
  /**
   * The name of the cache engine.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version number of the cache engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of the cache parameter group family associated with this cache engine.
   *
   * Valid values are: `memcached1.4` | `memcached1.5` | `memcached1.6` | `redis2.6` | `redis2.8` | `redis3.2` | `redis4.0` | `redis5.0` | `redis6.x` | `redis7`
   *
   * @public
   */
  CacheParameterGroupFamily?: string | undefined;

  /**
   * The description of the cache engine.
   *
   * @public
   */
  CacheEngineDescription?: string | undefined;

  /**
   * The description of the cache engine version.
   *
   * @public
   */
  CacheEngineVersionDescription?: string | undefined;
}

/**
 * Represents the output of a DescribeCacheEngineVersions operation.
 *
 * @public
 */
export interface CacheEngineVersionMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of cache engine version details. Each element in the list contains detailed information about one cache engine version.
   *
   * @public
   */
  CacheEngineVersions?: CacheEngineVersion[] | undefined;
}

/**
 * Represents the input of a `DescribeCacheEngineVersions` operation.
 *
 * @public
 */
export interface DescribeCacheEngineVersionsMessage {
  /**
   * The cache engine to return. Valid values: `memcached` | `redis`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The cache engine version to return.
   *
   * Example: `1.4.14`
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of a specific cache parameter group family to return details for.
   *
   * Valid values are: `memcached1.4` | `memcached1.5` | `memcached1.6` | `redis2.6` | `redis2.8` | `redis3.2` | `redis4.0` | `redis5.0` | `redis6.x` | `redis6.2` | `redis7` | `valkey7`
   *
   * Constraints:
   *
   * - Must be 1 to 255 alphanumeric characters
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * @public
   */
  CacheParameterGroupFamily?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * If `true`, specifies that only the default version of the specified engine or engine and major version combination is to be returned.
   *
   * @public
   */
  DefaultOnly?: boolean | undefined;
}

/**
 * Represents the output of a `DescribeCacheParameterGroups` operation.
 *
 * @public
 */
export interface CacheParameterGroupsMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of cache parameter groups. Each element in the list contains detailed information about one cache parameter group.
   *
   * @public
   */
  CacheParameterGroups?: CacheParameterGroup[] | undefined;
}

/**
 * Represents the input of a `DescribeCacheParameterGroups` operation.
 *
 * @public
 */
export interface DescribeCacheParameterGroupsMessage {
  /**
   * The name of a specific cache parameter group to return details for.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A value that applies only to a certain cache node type.
 *
 * @public
 */
export interface CacheNodeTypeSpecificValue {
  /**
   * The cache node type for which this value applies.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The value for the cache node type.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A parameter that has a different value for each cache node type it is applied to. For example, in a Valkey or Redis OSS cluster, a `cache.m1.large` cache node type would have a larger `maxmemory` value than a `cache.m1.small` type.
 *
 * @public
 */
export interface CacheNodeTypeSpecificParameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * A description of the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The source of the parameter value.
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
   * Indicates whether (`true`) or not (`false`) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.
   *
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * The earliest cache engine version to which the parameter can apply.
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * A list of cache node types and their corresponding values for this parameter.
   *
   * @public
   */
  CacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValue[] | undefined;

  /**
   * Indicates whether a change to the parameter is applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window's reboot. For more information, see [Rebooting a Cluster](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.Rebooting.html).
   *
   * @public
   */
  ChangeType?: ChangeType | undefined;
}

/**
 * Describes an individual setting that controls some aspect of ElastiCache behavior.
 *
 * @public
 */
export interface Parameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * A description of the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The source of the parameter.
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
   * Indicates whether (`true`) or not (`false`) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.
   *
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * The earliest cache engine version to which the parameter can apply.
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * Indicates whether a change to the parameter is applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window's reboot. For more information, see [Rebooting a Cluster](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.Rebooting.html).
   *
   * @public
   */
  ChangeType?: ChangeType | undefined;
}

/**
 * Represents the output of a `DescribeCacheParameters` operation.
 *
 * @public
 */
export interface CacheParameterGroupDetails {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of Parameter instances.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.
   *
   * @public
   */
  CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[] | undefined;
}

/**
 * Represents the input of a `DescribeCacheParameters` operation.
 *
 * @public
 */
export interface DescribeCacheParametersMessage {
  /**
   * The name of a specific cache parameter group to return details for.
   *
   * @public
   */
  CacheParameterGroupName: string | undefined;

  /**
   * The parameter types to return.
   *
   * Valid values: `user` | `system` | `engine-default`
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the output of a `DescribeCacheSecurityGroups` operation.
 *
 * @public
 */
export interface CacheSecurityGroupMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of cache security groups. Each element in the list contains detailed information about one group.
   *
   * @public
   */
  CacheSecurityGroups?: CacheSecurityGroup[] | undefined;
}

/**
 * Represents the input of a `DescribeCacheSecurityGroups` operation.
 *
 * @public
 */
export interface DescribeCacheSecurityGroupsMessage {
  /**
   * The name of the cache security group to return details for.
   *
   * @public
   */
  CacheSecurityGroupName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the output of a `DescribeCacheSubnetGroups` operation.
 *
 * @public
 */
export interface CacheSubnetGroupMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of cache subnet groups. Each element in the list contains detailed information about one group.
   *
   * @public
   */
  CacheSubnetGroups?: CacheSubnetGroup[] | undefined;
}

/**
 * Represents the input of a `DescribeCacheSubnetGroups` operation.
 *
 * @public
 */
export interface DescribeCacheSubnetGroupsMessage {
  /**
   * The name of the cache subnet group to return details for.
   *
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the input of a `DescribeEngineDefaultParameters` operation.
 *
 * @public
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * The name of the cache parameter group family.
   *
   * Valid values are: `memcached1.4` | `memcached1.5` | `memcached1.6` | `redis2.6` | `redis2.8` | `redis3.2` | `redis4.0` | `redis5.0` | `redis6.x` | `redis6.2` | `redis7`
   *
   * @public
   */
  CacheParameterGroupFamily: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the output of a `DescribeEngineDefaultParameters` operation.
 *
 * @public
 */
export interface EngineDefaults {
  /**
   * Specifies the name of the cache parameter group family to which the engine default parameters apply.
   *
   * Valid values are: `memcached1.4` | `memcached1.5` | `memcached1.6` | `redis2.6` | `redis2.8` | `redis3.2` | `redis4.0` | `redis5.0` | `redis6.0` | `redis6.x` | `redis7`
   *
   * @public
   */
  CacheParameterGroupFamily?: string | undefined;

  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Contains a list of engine default parameters.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.
   *
   * @public
   */
  CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultParametersResult {
  /**
   * Represents the output of a `DescribeEngineDefaultParameters` operation.
   *
   * @public
   */
  EngineDefaults?: EngineDefaults | undefined;
}

/**
 * Represents the input of a `DescribeEvents` operation.
 *
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * The identifier of the event source for which events are returned. If not specified, all sources are included in the response.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * The event source to retrieve events for. If no value is specified, all events are returned.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *
   * **Example:** 2017-03-30T07:03:49.555Z
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *
   * **Example:** 2017-03-30T07:03:49.555Z
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.
 *
 * @public
 */
export interface Event {
  /**
   * The identifier for the source of the event. For example, if the event occurred at the cluster level, the identifier would be the name of the cluster.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

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
 * Represents the output of a `DescribeEvents` operation.
 *
 * @public
 */
export interface EventsMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

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
export interface DescribeGlobalReplicationGroupsMessage {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Returns the list of members that comprise the Global datastore.
   *
   * @public
   */
  ShowMemberInfo?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalReplicationGroupsResult {
  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. >
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Indicates the slot configuration and global identifier for each slice group.
   *
   * @public
   */
  GlobalReplicationGroups?: GlobalReplicationGroup[] | undefined;
}

/**
 * Represents the input of a `DescribeReplicationGroups` operation.
 *
 * @public
 */
export interface DescribeReplicationGroupsMessage {
  /**
   * The identifier for the replication group to be described. This parameter is not case sensitive.
   *
   * If you do not specify this parameter, information about all replication groups is returned.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the output of a `DescribeReplicationGroups` operation.
 *
 * @public
 */
export interface ReplicationGroupMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of replication groups. Each item in the list contains detailed information about one replication group.
   *
   * @public
   */
  ReplicationGroups?: ReplicationGroup[] | undefined;
}

/**
 * Represents the input of a `DescribeReservedCacheNodes` operation.
 *
 * @public
 */
export interface DescribeReservedCacheNodesMessage {
  /**
   * The reserved cache node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.
   *
   * @public
   */
  ReservedCacheNodeId?: string | undefined;

  /**
   * The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.
   *
   * @public
   */
  ReservedCacheNodesOfferingId?: string | undefined;

  /**
   * The cache node type filter value. Use this parameter to show only those reservations matching the specified cache node type.
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   *
   * - General purpose:
   *
   *   - Current generation:
   *
   *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
   *
   *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
   *
   *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
   *
   *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
   *
   *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
   *
   *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **T1 node types:** `cache.t1.micro`
   *
   *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
   *
   *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
   * - Compute optimized:
   *
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **C1 node types:** `cache.c1.xlarge`
   * - Memory optimized:
   *
   *   - Current generation:
   *
   *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
   *
   *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
   *
   *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
   *
   *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
   *
   * **Additional node type info**
   *
   * - All current generation instance types are created in Amazon VPC by default.
   * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
   * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
   * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.
   *
   * Valid Values: `1 | 3 | 31536000 | 94608000`
   *
   * @public
   */
  Duration?: string | undefined;

  /**
   * The product description filter value. Use this parameter to show only those reservations matching the specified product description.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *
   * Valid values: `"Light Utilization"|"Medium Utilization"|"Heavy Utilization"|"All Upfront"|"Partial Upfront"| "No Upfront"`
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.
 *
 * @public
 */
export interface RecurringCharge {
  /**
   * The monetary amount of the recurring charge.
   *
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * The frequency of the recurring charge.
   *
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * Represents the output of a `PurchaseReservedCacheNodesOffering` operation.
 *
 * @public
 */
export interface ReservedCacheNode {
  /**
   * The unique identifier for the reservation.
   *
   * @public
   */
  ReservedCacheNodeId?: string | undefined;

  /**
   * The offering identifier.
   *
   * @public
   */
  ReservedCacheNodesOfferingId?: string | undefined;

  /**
   * The cache node type for the reserved cache nodes.
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   *
   * - General purpose:
   *
   *   - Current generation:
   *
   *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
   *
   *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
   *
   *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
   *
   *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
   *
   *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
   *
   *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **T1 node types:** `cache.t1.micro`
   *
   *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
   *
   *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
   * - Compute optimized:
   *
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **C1 node types:** `cache.c1.xlarge`
   * - Memory optimized:
   *
   *   - Current generation:
   *
   *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
   *
   *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
   *
   *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
   *
   *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
   *
   * **Additional node type info**
   *
   * - All current generation instance types are created in Amazon VPC by default.
   * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
   * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
   * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

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
   * The fixed price charged for this reserved cache node.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The hourly price charged for this reserved cache node.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The number of cache nodes that have been reserved.
   *
   * @public
   */
  CacheNodeCount?: number | undefined;

  /**
   * The description of the reserved cache node.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The offering type of this reserved cache node.
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The state of the reserved cache node.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The recurring price charged to run this reserved cache node.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the reserved cache node.
   *
   * Example: `arn:aws:elasticache:us-east-1:123456789012:reserved-instance:ri-2017-03-27-08-33-25-582`
   *
   * @public
   */
  ReservationARN?: string | undefined;
}

/**
 * Represents the output of a `DescribeReservedCacheNodes` operation.
 *
 * @public
 */
export interface ReservedCacheNodeMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of reserved cache nodes. Each element in the list contains detailed information about one node.
   *
   * @public
   */
  ReservedCacheNodes?: ReservedCacheNode[] | undefined;
}

/**
 * Represents the input of a `DescribeReservedCacheNodesOfferings` operation.
 *
 * @public
 */
export interface DescribeReservedCacheNodesOfferingsMessage {
  /**
   * The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.
   *
   * Example: `438012d3-4052-4cc7-b2e3-8d3372e0e706`
   *
   * @public
   */
  ReservedCacheNodesOfferingId?: string | undefined;

  /**
   * The cache node type filter value. Use this parameter to show only the available offerings matching the specified cache node type.
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   *
   * - General purpose:
   *
   *   - Current generation:
   *
   *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
   *
   *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
   *
   *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
   *
   *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
   *
   *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
   *
   *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **T1 node types:** `cache.t1.micro`
   *
   *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
   *
   *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
   * - Compute optimized:
   *
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **C1 node types:** `cache.c1.xlarge`
   * - Memory optimized:
   *
   *   - Current generation:
   *
   *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
   *
   *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
   *
   *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
   *
   *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
   *
   * **Additional node type info**
   *
   * - All current generation instance types are created in Amazon VPC by default.
   * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
   * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
   * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.
   *
   * Valid Values: `1 | 3 | 31536000 | 94608000`
   *
   * @public
   */
  Duration?: string | undefined;

  /**
   * The product description filter value. Use this parameter to show only the available offerings matching the specified product description.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *
   * Valid Values: `"Light Utilization"|"Medium Utilization"|"Heavy Utilization" |"All Upfront"|"Partial Upfront"| "No Upfront"`
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: minimum 20; maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes all of the attributes of a reserved cache node offering.
 *
 * @public
 */
export interface ReservedCacheNodesOffering {
  /**
   * A unique identifier for the reserved cache node offering.
   *
   * @public
   */
  ReservedCacheNodesOfferingId?: string | undefined;

  /**
   * The cache node type for the reserved cache node.
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   *
   * - General purpose:
   *
   *   - Current generation:
   *
   *     **M7g node types**: `cache.m7g.large`, `cache.m7g.xlarge`, `cache.m7g.2xlarge`, `cache.m7g.4xlarge`, `cache.m7g.8xlarge`, `cache.m7g.12xlarge`, `cache.m7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **M6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.m6g.large`, `cache.m6g.xlarge`, `cache.m6g.2xlarge`, `cache.m6g.4xlarge`, `cache.m6g.8xlarge`, `cache.m6g.12xlarge`, `cache.m6g.16xlarge`
   *
   *     **M5 node types:** `cache.m5.large`, `cache.m5.xlarge`, `cache.m5.2xlarge`, `cache.m5.4xlarge`, `cache.m5.12xlarge`, `cache.m5.24xlarge`
   *
   *     **M4 node types:** `cache.m4.large`, `cache.m4.xlarge`, `cache.m4.2xlarge`, `cache.m4.4xlarge`, `cache.m4.10xlarge`
   *
   *     **T4g node types** (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): `cache.t4g.micro`, `cache.t4g.small`, `cache.t4g.medium`
   *
   *     **T3 node types:** `cache.t3.micro`, `cache.t3.small`, `cache.t3.medium`
   *
   *     **T2 node types:** `cache.t2.micro`, `cache.t2.small`, `cache.t2.medium`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **T1 node types:** `cache.t1.micro`
   *
   *     **M1 node types:** `cache.m1.small`, `cache.m1.medium`, `cache.m1.large`, `cache.m1.xlarge`
   *
   *     **M3 node types:** `cache.m3.medium`, `cache.m3.large`, `cache.m3.xlarge`, `cache.m3.2xlarge`
   * - Compute optimized:
   *
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **C1 node types:** `cache.c1.xlarge`
   * - Memory optimized:
   *
   *   - Current generation:
   *
   *     **R7g node types**: `cache.r7g.large`, `cache.r7g.xlarge`, `cache.r7g.2xlarge`, `cache.r7g.4xlarge`, `cache.r7g.8xlarge`, `cache.r7g.12xlarge`, `cache.r7g.16xlarge`
   *
   *     > **Note:** For region availability, see [Supported Node Types](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
   *
   *     **R6g node types** (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): `cache.r6g.large`, `cache.r6g.xlarge`, `cache.r6g.2xlarge`, `cache.r6g.4xlarge`, `cache.r6g.8xlarge`, `cache.r6g.12xlarge`, `cache.r6g.16xlarge`
   *
   *     **R5 node types:** `cache.r5.large`, `cache.r5.xlarge`, `cache.r5.2xlarge`, `cache.r5.4xlarge`, `cache.r5.12xlarge`, `cache.r5.24xlarge`
   *
   *     **R4 node types:** `cache.r4.large`, `cache.r4.xlarge`, `cache.r4.2xlarge`, `cache.r4.4xlarge`, `cache.r4.8xlarge`, `cache.r4.16xlarge`
   *   - Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)
   *
   *     **M2 node types:** `cache.m2.xlarge`, `cache.m2.2xlarge`, `cache.m2.4xlarge`
   *
   *     **R3 node types:** `cache.r3.large`, `cache.r3.xlarge`, `cache.r3.2xlarge`, `cache.r3.4xlarge`, `cache.r3.8xlarge`
   *
   * **Additional node type info**
   *
   * - All current generation instance types are created in Amazon VPC by default.
   * - Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
   * - Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
   * - The configuration variables `appendonly` and `appendfsync` are not supported on Valkey, or on Redis OSS version 2.8.22 and later.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * The duration of the offering. in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The fixed price charged for this offering.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The hourly price charged for this offering.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The cache engine used by the offering.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The offering type.
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The recurring price charged to run this reserved cache node.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * Represents the output of a `DescribeReservedCacheNodesOfferings` operation.
 *
 * @public
 */
export interface ReservedCacheNodesOfferingMessage {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of reserved cache node offerings. Each element in the list contains detailed information about one offering.
   *
   * @public
   */
  ReservedCacheNodesOfferings?: ReservedCacheNodesOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeServerlessCachesRequest {
  /**
   * The identifier for the serverless cache. If this parameter is specified, only information about that specific serverless cache is returned. Default: NULL
   *
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * The maximum number of records in the response. If more records exist than the specified max-records value, the next token is included in the response so that remaining results can be retrieved. The default is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional marker returned from a prior request to support pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServerlessCachesResponse {
  /**
   * An optional marker returned from a prior request to support pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The serverless caches associated with a given description request.
   *
   * @public
   */
  ServerlessCaches?: ServerlessCache[] | undefined;
}

/**
 * @public
 */
export interface DescribeServerlessCacheSnapshotsRequest {
  /**
   * The identifier of serverless cache. If this parameter is specified, only snapshots associated with that specific serverless cache are described. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * The identifier of the serverless cache’s snapshot. If this parameter is specified, only this snapshot is described. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheSnapshotName?: string | undefined;

  /**
   * The type of snapshot that is being described. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * An optional marker returned from a prior request to support pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by max-results. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified max-results value, a market is included in the response so that remaining results can be retrieved. Available for Valkey, Redis OSS and Serverless Memcached only.The default is 50. The Validation Constraints are a maximum of 50.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeServerlessCacheSnapshotsResponse {
  /**
   * An optional marker returned from a prior request to support pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by max-results. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The serverless caches snapshots associated with a given description request. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheSnapshots?: ServerlessCacheSnapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceUpdatesMessage {
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
  ServiceUpdateStatus?: ServiceUpdateStatus[] | undefined;

  /**
   * The maximum number of records to include in the response
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * An update that you can apply to your Valkey or Redis OSS clusters.
 *
 * @public
 */
export interface ServiceUpdate {
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
  ServiceUpdateReleaseDate?: Date | undefined;

  /**
   * The date after which the service update is no longer available
   *
   * @public
   */
  ServiceUpdateEndDate?: Date | undefined;

  /**
   * The severity of the service update
   *
   * @public
   */
  ServiceUpdateSeverity?: ServiceUpdateSeverity | undefined;

  /**
   * The recommendend date to apply the service update in order to ensure compliance. For information on compliance, see [Self-Service Security Updates for Compliance](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/elasticache-compliance.html#elasticache-compliance-self-service).
   *
   * @public
   */
  ServiceUpdateRecommendedApplyByDate?: Date | undefined;

  /**
   * The status of the service update
   *
   * @public
   */
  ServiceUpdateStatus?: ServiceUpdateStatus | undefined;

  /**
   * Provides details of the service update
   *
   * @public
   */
  ServiceUpdateDescription?: string | undefined;

  /**
   * Reflects the nature of the service update
   *
   * @public
   */
  ServiceUpdateType?: ServiceUpdateType | undefined;

  /**
   * The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The Elasticache engine version to which the update applies. Either Valkey, Redis OSS or Memcached engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Indicates whether the service update will be automatically applied once the recommended apply-by date has expired.
   *
   * @public
   */
  AutoUpdateAfterRecommendedApplyByDate?: boolean | undefined;

  /**
   * The estimated length of time the service update will take
   *
   * @public
   */
  EstimatedUpdateTime?: string | undefined;
}

/**
 * @public
 */
export interface ServiceUpdatesMessage {
  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of service updates
   *
   * @public
   */
  ServiceUpdates?: ServiceUpdate[] | undefined;
}

/**
 * Represents the output of a `DescribeSnapshots` operation.
 *
 * @public
 */
export interface DescribeSnapshotsListMessage {
  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of snapshots. Each item in the list contains detailed information about one snapshot.
   *
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * Represents the input of a `DescribeSnapshotsMessage` operation.
 *
 * @public
 */
export interface DescribeSnapshotsMessage {
  /**
   * A user-supplied replication group identifier. If this parameter is specified, only snapshots associated with that specific replication group are described.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * A user-supplied name of the snapshot. If this parameter is specified, only this snapshot are described.
   *
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * If set to `system`, the output shows snapshots that were automatically created by ElastiCache. If set to `user` the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.
   *
   * @public
   */
  SnapshotSource?: string | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 50
   *
   * Constraints: minimum 20; maximum 50.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.
   *
   * @public
   */
  ShowNodeGroupConfig?: boolean | undefined;
}

/**
 * Filters update actions from the service updates that are in available status during the time range.
 *
 * @public
 */
export interface TimeRangeFilter {
  /**
   * The start time of the time range filter
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the time range filter
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeUpdateActionsMessage {
  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * The replication group IDs
   *
   * @public
   */
  ReplicationGroupIds?: string[] | undefined;

  /**
   * The cache cluster IDs
   *
   * @public
   */
  CacheClusterIds?: string[] | undefined;

  /**
   * The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The status of the service update
   *
   * @public
   */
  ServiceUpdateStatus?: ServiceUpdateStatus[] | undefined;

  /**
   * The range of time specified to search for service updates that are in available status
   *
   * @public
   */
  ServiceUpdateTimeRange?: TimeRangeFilter | undefined;

  /**
   * The status of the update action.
   *
   * @public
   */
  UpdateActionStatus?: UpdateActionStatus[] | undefined;

  /**
   * Dictates whether to include node level update status in the response
   *
   * @public
   */
  ShowNodeLevelUpdateStatus?: boolean | undefined;

  /**
   * The maximum number of records to include in the response
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The status of the service update on the cache node
 *
 * @public
 */
export interface CacheNodeUpdateStatus {
  /**
   * The node ID of the cache cluster
   *
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * The update status of the node
   *
   * @public
   */
  NodeUpdateStatus?: NodeUpdateStatus | undefined;

  /**
   * The deletion date of the node
   *
   * @public
   */
  NodeDeletionDate?: Date | undefined;

  /**
   * The start date of the update for a node
   *
   * @public
   */
  NodeUpdateStartDate?: Date | undefined;

  /**
   * The end date of the update for a node
   *
   * @public
   */
  NodeUpdateEndDate?: Date | undefined;

  /**
   * Reflects whether the update was initiated by the customer or automatically applied
   *
   * @public
   */
  NodeUpdateInitiatedBy?: NodeUpdateInitiatedBy | undefined;

  /**
   * The date when the update is triggered
   *
   * @public
   */
  NodeUpdateInitiatedDate?: Date | undefined;

  /**
   * The date when the NodeUpdateStatus was last modified>
   *
   * @public
   */
  NodeUpdateStatusModifiedDate?: Date | undefined;
}

/**
 * The status of the service update on the node group member
 *
 * @public
 */
export interface NodeGroupMemberUpdateStatus {
  /**
   * The cache cluster ID
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * The node ID of the cache cluster
   *
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * The update status of the node
   *
   * @public
   */
  NodeUpdateStatus?: NodeUpdateStatus | undefined;

  /**
   * The deletion date of the node
   *
   * @public
   */
  NodeDeletionDate?: Date | undefined;

  /**
   * The start date of the update for a node
   *
   * @public
   */
  NodeUpdateStartDate?: Date | undefined;

  /**
   * The end date of the update for a node
   *
   * @public
   */
  NodeUpdateEndDate?: Date | undefined;

  /**
   * Reflects whether the update was initiated by the customer or automatically applied
   *
   * @public
   */
  NodeUpdateInitiatedBy?: NodeUpdateInitiatedBy | undefined;

  /**
   * The date when the update is triggered
   *
   * @public
   */
  NodeUpdateInitiatedDate?: Date | undefined;

  /**
   * The date when the NodeUpdateStatus was last modified
   *
   * @public
   */
  NodeUpdateStatusModifiedDate?: Date | undefined;
}

/**
 * The status of the service update on the node group
 *
 * @public
 */
export interface NodeGroupUpdateStatus {
  /**
   * The ID of the node group
   *
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * The status of the service update on the node group member
   *
   * @public
   */
  NodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatus[] | undefined;
}

/**
 * The status of the service update for a specific replication group
 *
 * @public
 */
export interface UpdateAction {
  /**
   * The ID of the replication group
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The ID of the cache cluster
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * The unique ID of the service update
   *
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * The date the update is first available
   *
   * @public
   */
  ServiceUpdateReleaseDate?: Date | undefined;

  /**
   * The severity of the service update
   *
   * @public
   */
  ServiceUpdateSeverity?: ServiceUpdateSeverity | undefined;

  /**
   * The status of the service update
   *
   * @public
   */
  ServiceUpdateStatus?: ServiceUpdateStatus | undefined;

  /**
   * The recommended date to apply the service update to ensure compliance. For information on compliance, see [Self-Service Security Updates for Compliance](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/elasticache-compliance.html#elasticache-compliance-self-service).
   *
   * @public
   */
  ServiceUpdateRecommendedApplyByDate?: Date | undefined;

  /**
   * Reflects the nature of the service update
   *
   * @public
   */
  ServiceUpdateType?: ServiceUpdateType | undefined;

  /**
   * The date that the service update is available to a replication group
   *
   * @public
   */
  UpdateActionAvailableDate?: Date | undefined;

  /**
   * The status of the update action
   *
   * @public
   */
  UpdateActionStatus?: UpdateActionStatus | undefined;

  /**
   * The progress of the service update on the replication group
   *
   * @public
   */
  NodesUpdated?: string | undefined;

  /**
   * The date when the UpdateActionStatus was last modified
   *
   * @public
   */
  UpdateActionStatusModifiedDate?: Date | undefined;

  /**
   * If yes, all nodes in the replication group have been updated by the recommended apply-by date. If no, at least one node in the replication group have not been updated by the recommended apply-by date. If N/A, the replication group was created after the recommended apply-by date.
   *
   * @public
   */
  SlaMet?: SlaMet | undefined;

  /**
   * The status of the service update on the node group
   *
   * @public
   */
  NodeGroupUpdateStatus?: NodeGroupUpdateStatus[] | undefined;

  /**
   * The status of the service update on the cache node
   *
   * @public
   */
  CacheNodeUpdateStatus?: CacheNodeUpdateStatus[] | undefined;

  /**
   * The estimated length of time for the update to complete
   *
   * @public
   */
  EstimatedUpdateTime?: string | undefined;

  /**
   * The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.
   *
   * @public
   */
  Engine?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionsMessage {
  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Returns a list of update actions
   *
   * @public
   */
  UpdateActions?: UpdateAction[] | undefined;
}

/**
 * @public
 */
export interface DescribeUserGroupsMessage {
  /**
   * The ID of the user group.
   *
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. >
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserGroupsResult {
  /**
   * Returns a list of user groups.
   *
   * @public
   */
  UserGroups?: UserGroup[] | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.>
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Used to streamline results of a search based on the property being filtered.
 *
 * @public
 */
export interface Filter {
  /**
   * The property being filtered. For example, UserId.
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
export interface DescribeUsersMessage {
  /**
   * The engine.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The ID of the user.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * Filter to determine the list of User IDs to return.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. >
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersResult {
  /**
   * A list of users.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. >
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGlobalReplicationGroupMessage {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * The name of the secondary cluster you wish to remove from the Global datastore
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * The Amazon region of secondary cluster you wish to remove from the Global datastore
   *
   * @public
   */
  ReplicationGroupRegion: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGlobalReplicationGroupResult {
  /**
   * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
   *
   * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
   *
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * @public
 */
export interface ExportServerlessCacheSnapshotRequest {
  /**
   * The identifier of the serverless cache snapshot to be exported to S3. Available for Valkey and Redis OSS only.
   *
   * @public
   */
  ServerlessCacheSnapshotName: string | undefined;

  /**
   * Name of the Amazon S3 bucket to export the snapshot to. The Amazon S3 bucket must also be in same region as the snapshot. Available for Valkey and Redis OSS only.
   *
   * @public
   */
  S3BucketName: string | undefined;
}

/**
 * @public
 */
export interface ExportServerlessCacheSnapshotResponse {
  /**
   * The state of a serverless cache at a specific point in time, to the millisecond. Available for Valkey, Redis OSS and Serverless Memcached only.
   *
   * @public
   */
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalReplicationGroupMessage {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * The Amazon region of the primary cluster of the Global datastore
   *
   * @public
   */
  PrimaryRegion: string | undefined;

  /**
   * The name of the primary replication group
   *
   * @public
   */
  PrimaryReplicationGroupId: string | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalReplicationGroupResult {
  /**
   * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
   *
   * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
   *
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * A list of `PreferredAvailabilityZones` objects that specifies the configuration of a node group in the resharded cluster.
 *
 * @public
 */
export interface ReshardingConfiguration {
  /**
   * Either the ElastiCache supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
   *
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * A list of preferred availability zones for the nodes in this cluster.
   *
   * @public
   */
  PreferredAvailabilityZones?: string[] | undefined;
}

/**
 * A list of the replication groups
 *
 * @public
 */
export interface RegionalConfiguration {
  /**
   * The name of the secondary cluster
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * The Amazon region where the cluster is stored
   *
   * @public
   */
  ReplicationGroupRegion: string | undefined;

  /**
   * A list of `PreferredAvailabilityZones` objects that specifies the configuration of a node group in the resharded cluster.
   *
   * @public
   */
  ReshardingConfiguration: ReshardingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * Total number of node groups you want
   *
   * @public
   */
  NodeGroupCount: number | undefined;

  /**
   * Describes the replication group IDs, the Amazon regions where they are stored and the shard configuration for each that comprise the Global datastore
   *
   * @public
   */
  RegionalConfigurations?: RegionalConfiguration[] | undefined;

  /**
   * Indicates that the process begins immediately. At present, the only permitted value for this parameter is true.
   *
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
   *
   * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
   *
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * @public
 */
export interface IncreaseReplicaCountMessage {
  /**
   * The id of the replication group to which you want to add replica nodes.
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * The number of read replica nodes you want at the completion of this operation. For Valkey or Redis OSS (cluster mode disabled) replication groups, this is the number of replica nodes in the replication group. For Valkey or Redis OSS (cluster mode enabled) replication groups, this is the number of replica nodes in each of the replication group's node groups.
   *
   * @public
   */
  NewReplicaCount?: number | undefined;

  /**
   * A list of `ConfigureShard` objects that can be used to configure each shard in a Valkey or Redis OSS (cluster mode enabled) replication group. The `ConfigureShard` has three members: `NewReplicaCount`, `NodeGroupId`, and `PreferredAvailabilityZones`.
   *
   * @public
   */
  ReplicaConfiguration?: ConfigureShard[] | undefined;

  /**
   * If `True`, the number of replica nodes is increased immediately. `ApplyImmediately=False` is not currently supported.
   *
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface IncreaseReplicaCountResult {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * The input parameters for the `ListAllowedNodeTypeModifications` operation.
 *
 * @public
 */
export interface ListAllowedNodeTypeModificationsMessage {
  /**
   * The name of the cluster you want to scale up to a larger node instanced type. ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to.
   *
   * > **Important:** You must provide a value for either the `CacheClusterId` or the `ReplicationGroupId`.
   *
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * The name of the replication group want to scale up to a larger node type. ElastiCache uses the replication group id to identify the current node type being used by this replication group, and from that to create a list of node types you can scale up to.
   *
   * > **Important:** You must provide a value for either the `CacheClusterId` or the `ReplicationGroupId`.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;
}

/**
 * The input parameters for the `ListTagsForResource` operation.
 *
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want the list of tags, for example `arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster` or `arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot`.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * Represents the input of a `ModifyCacheCluster` operation.
 *
 * @public
 */
export interface ModifyCacheClusterMessage {
  /**
   * The cluster identifier. This value is stored as a lowercase string.
   *
   * @public
   */
  CacheClusterId: string | undefined;

  /**
   * The number of cache nodes that the cluster should have. If the value for `NumCacheNodes` is greater than the sum of the number of current cache nodes and the number of cache nodes pending creation (which may be zero), more nodes are added. If the value is less than the number of existing cache nodes, nodes are removed. If the value is equal to the number of current cache nodes, any pending add or remove requests are canceled.
   *
   * If you are removing cache nodes, you must use the `CacheNodeIdsToRemove` parameter to provide the IDs of the specific cache nodes to remove.
   *
   * For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this value must be between 1 and 40.
   *
   * > **Note:**
   * >
   * > Adding or removing Memcached cache nodes can be applied immediately or as a pending operation (see `ApplyImmediately`).
   * >
   * > A pending operation to modify the number of cache nodes in a cluster during its maintenance window, whether by adding or removing nodes in accordance with the scale out architecture, is not queued. The customer's latest request to add or remove nodes to the cluster overrides any previous pending operations to modify the number of cache nodes in the cluster. For example, a request to remove 2 nodes would override a previous pending operation to remove 3 nodes. Similarly, a request to add 2 nodes would override a previous pending operation to remove 3 nodes and vice versa. As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement, a request to add nodes does not automatically override a previous pending operation to add nodes. The customer can modify the previous pending operation to add more nodes or explicitly cancel the pending request and retry the new request. To cancel pending operations to modify the number of cache nodes in a cluster, use the `ModifyCacheCluster` request and set `NumCacheNodes` equal to the number of cache nodes currently in the cluster.
   *
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002, etc.). This parameter is only valid when `NumCacheNodes` is less than the existing number of cache nodes. The number of cache node IDs supplied in this parameter must match the difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is greater, and the value of `NumCacheNodes` in the request.
   *
   * For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this `ModifyCacheCluster` call is 5, you must list 2 (7 - 5) cache node IDs to remove.
   *
   * @public
   */
  CacheNodeIdsToRemove?: string[] | undefined;

  /**
   * Specifies whether the new nodes in this Memcached cluster are all created in a single Availability Zone or created across multiple Availability Zones.
   *
   * Valid values: `single-az` | `cross-az`.
   *
   * This option is only supported for Memcached clusters.
   *
   * > **Note:**
   * >
   * > You cannot specify `single-az` if the Memcached cluster already has cache nodes in different Availability Zones. If `cross-az` is specified, existing Memcached nodes remain in their current Availability Zone.
   * >
   * > Only newly created nodes are located in different Availability Zones.
   *
   * @public
   */
  AZMode?: AZMode | undefined;

  /**
   * > **Note:** This option is only supported on Memcached clusters.
   *
   * The list of Availability Zones where the new Memcached cache nodes are created.
   *
   * This parameter is only valid when `NumCacheNodes` in the request is greater than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero). The number of Availability Zones supplied in this list must match the cache nodes being added in this request.
   *
   * Scenarios:
   *
   * - **Scenario 1:** You have 3 active nodes and wish to add 2 nodes. Specify `NumCacheNodes=5` (3 + 2) and optionally specify two Availability Zones for the two new nodes.
   * - **Scenario 2:** You have 3 active nodes and 2 nodes pending creation (from the scenario 1 call) and want to add 1 more node. Specify `NumCacheNodes=6` ((3 + 2) + 1) and optionally specify an Availability Zone for the new node.
   * - **Scenario 3:** You want to cancel all pending operations. Specify `NumCacheNodes=3` to cancel all pending operations.
   *
   * The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation, add 0 nodes by setting `NumCacheNodes` to the number of current nodes.
   *
   * If `cross-az` is specified, existing Memcached nodes remain in their current Availability Zone. Only newly created nodes can be located in different Availability Zones. For guidance on how to move existing Memcached nodes to different Availability Zones, see the **Availability Zone Considerations** section of [Cache Node Considerations for Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html).
   *
   * **Impact of new add/remove requests upon pending requests**
   *
   * - Scenario-1
   *
   *   - Pending Action: Delete
   *   - New Request: Delete
   *   - Result: The new delete, pending or immediate, replaces the pending delete.
   * - Scenario-2
   *
   *   - Pending Action: Delete
   *   - New Request: Create
   *   - Result: The new create, pending or immediate, replaces the pending delete.
   * - Scenario-3
   *
   *   - Pending Action: Create
   *   - New Request: Delete
   *   - Result: The new delete, pending or immediate, replaces the pending create.
   * - Scenario-4
   *
   *   - Pending Action: Create
   *   - New Request: Create
   *   - Result: The new create is added to the pending create.
   *
   *     > **Important:** **Important:** If the new create request is **Apply Immediately - Yes**, all creates are performed immediately. If the new create request is **Apply Immediately - No**, all creates are pending.
   *
   * @public
   */
  NewAvailabilityZones?: string[] | undefined;

  /**
   * A list of cache security group names to authorize on this cluster. This change is asynchronously applied as soon as possible.
   *
   * You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC).
   *
   * Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".
   *
   * @public
   */
  CacheSecurityGroupNames?: string[] | undefined;

  /**
   * Specifies the VPC Security Groups associated with the cluster.
   *
   * This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).
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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.
   *
   * > **Note:** The Amazon SNS topic owner must be same as the cluster owner.
   *
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * The name of the cache parameter group to apply to this cluster. This change is asynchronously applied as soon as possible for parameters when the `ApplyImmediately` parameter is specified as `true` for this request.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * The status of the Amazon SNS notification topic. Notifications are sent only if the status is `active`.
   *
   * Valid values: `active` | `inactive`
   *
   * @public
   */
  NotificationTopicStatus?: string | undefined;

  /**
   * If `true`, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the `PreferredMaintenanceWindow` setting for the cluster.
   *
   * If `false`, changes to the cluster are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.
   *
   * > **Important:** If you perform a `ModifyCacheCluster` before a pending modification is applied, the pending modification is replaced by the newer modification. However, a pending node-count increase on Memcached clusters cannot be superseded by a request to add fewer nodes. To change a pending node addition, first cancel it by setting `NumCacheNodes` equal to the current number of nodes in the cluster, then submit the new request. See the `NumCacheNodes` parameter for details on node scaling behavior.
   *
   * Valid values: `true` | `false`
   *
   * Default: `false`
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * The engine type used by the cache cluster. The options are valkey, memcached or redis.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The upgraded version of the cache engine to be run on the cache nodes.
   *
   * **Important:** You can upgrade to a newer engine version (see [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SelectEngine.html#VersionManagement)), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   *  If you are running Valkey 7.2 or Redis OSS engine version 6.0 or later, set this parameter to yes to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions. 
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set `SnapshotRetentionLimit` to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * > **Note:** If the value of `SnapshotRetentionLimit` is set to zero (0), backups are turned off.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * A valid cache node type that you want to scale this cluster up to.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * Reserved parameter. The password used to access a password protected server. This parameter must be specified with the `auth-token-update` parameter. Password constraints:
   *
   * - Must be only printable ASCII characters
   * - Must be at least 16 characters and no more than 128 characters in length
   * - Cannot contain any of the following characters: '/', '"', or '@', '%'
   *
   * For more information, see AUTH password at [AUTH](http://redis.io/commands/AUTH).
   *
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * Specifies the strategy to use to update the AUTH token. This parameter must be specified with the `auth-token` parameter. Possible values:
   *
   * - ROTATE - default, if no update strategy is provided
   * - SET - allowed only after ROTATE
   * - DELETE - allowed only when transitioning to RBAC
   *
   * For more information, see [Authenticating Users with AUTH](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/auth.html)
   *
   * @public
   */
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | undefined;

  /**
   * Specifies the destination, format and type of the logs.
   *
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[] | undefined;

  /**
   * The network type you choose when modifying a cluster, either `ipv4` | `ipv6`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * Configures horizontal or vertical scaling for Memcached clusters, specifying the scaling percentage and interval.
   *
   * @public
   */
  ScaleConfig?: ScaleConfig | undefined;
}

/**
 * @public
 */
export interface ModifyCacheClusterResult {
  /**
   * Contains all of the attributes of a specific cluster.
   *
   * @public
   */
  CacheCluster?: CacheCluster | undefined;
}

/**
 * Represents the output of one of the following operations:
 *
 * - `ModifyCacheParameterGroup`
 * - `ResetCacheParameterGroup`
 *
 * @public
 */
export interface CacheParameterGroupNameMessage {
  /**
   * The name of the cache parameter group.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;
}

/**
 * Describes a name-value pair that is used to update the value of a parameter.
 *
 * @public
 */
export interface ParameterNameValue {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  ParameterValue?: string | undefined;
}

/**
 * Represents the input of a `ModifyCacheParameterGroup` operation.
 *
 * @public
 */
export interface ModifyCacheParameterGroupMessage {
  /**
   * The name of the cache parameter group to modify.
   *
   * @public
   */
  CacheParameterGroupName: string | undefined;

  /**
   * An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.
   *
   * @public
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * Represents the input of a `ModifyCacheSubnetGroup` operation.
 *
 * @public
 */
export interface ModifyCacheSubnetGroupMessage {
  /**
   * The name for the cache subnet group. This value is stored as a lowercase string.
   *
   * Constraints: Must contain no more than 255 alphanumeric characters or hyphens.
   *
   * Example: `mysubnetgroup`
   *
   * @public
   */
  CacheSubnetGroupName: string | undefined;

  /**
   * A description of the cache subnet group.
   *
   * @public
   */
  CacheSubnetGroupDescription?: string | undefined;

  /**
   * The EC2 subnet IDs for the cache subnet group.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyCacheSubnetGroupResult {
  /**
   * Represents the output of one of the following operations:
   *
   * - `CreateCacheSubnetGroup`
   * - `ModifyCacheSubnetGroup`
   *
   * @public
   */
  CacheSubnetGroup?: CacheSubnetGroup | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalReplicationGroupMessage {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * This parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible. Modifications to Global Replication Groups cannot be requested to be applied in PreferredMaintenceWindow.
   *
   * @public
   */
  ApplyImmediately: boolean | undefined;

  /**
   * A valid cache node type that you want to scale this Global datastore to.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * Modifies the engine listed in a global replication group message. The options are valkey, memcached or redis.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The upgraded version of the cache engine to be run on the clusters in the Global datastore.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * A description of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupDescription?: string | undefined;

  /**
   * Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.
   *
   * @public
   */
  AutomaticFailoverEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalReplicationGroupResult {
  /**
   * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
   *
   * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
   *
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * Represents the input of a `ModifyReplicationGroups` operation.
 *
 * @public
 */
export interface ModifyReplicationGroupMessage {
  /**
   * The identifier of the replication group to modify.
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * A description for the replication group. Maximum length is 255 characters.
   *
   * @public
   */
  ReplicationGroupDescription?: string | undefined;

  /**
   * For replication groups with a single primary, if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role. The nodes of all other clusters in the replication group are read replicas.
   *
   * @public
   */
  PrimaryClusterId?: string | undefined;

  /**
   * The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Valkey or Redis OSS (cluster mode enabled) replication groups.
   *
   * @public
   */
  SnapshottingClusterId?: string | undefined;

  /**
   * Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.
   *
   * Valid values: `true` | `false`
   *
   * @public
   */
  AutomaticFailoverEnabled?: boolean | undefined;

  /**
   * A flag to indicate MultiAZ is enabled.
   *
   * @public
   */
  MultiAZEnabled?: boolean | undefined;

  /**
   * Deprecated. This parameter is not used.
   *
   * @deprecated deprecated.
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible.
   *
   * This parameter can be used only with replication group containing clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC).
   *
   * Constraints: Must contain no more than 255 alphanumeric characters. Must not be `Default`.
   *
   * @public
   */
  CacheSecurityGroupNames?: string[] | undefined;

  /**
   * Specifies the VPC Security Groups associated with the clusters in the replication group.
   *
   * This parameter can be used only with replication group containing clusters running in an Amazon Virtual Private Cloud (Amazon VPC).
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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.
   *
   * > **Note:** The Amazon SNS topic owner must be same as the replication group owner.
   *
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * The name of the cache parameter group to apply to all of the clusters in this replication group. This change is asynchronously applied as soon as possible for parameters when the `ApplyImmediately` parameter is specified as `true` for this request.
   *
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * The status of the Amazon SNS notification topic for the replication group. Notifications are sent only if the status is `active`.
   *
   * Valid values: `active` | `inactive`
   *
   * @public
   */
  NotificationTopicStatus?: string | undefined;

  /**
   * If `true`, this parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible, regardless of the `PreferredMaintenanceWindow` setting for the replication group.
   *
   * If `false`, changes to the nodes in the replication group are applied on the next maintenance reboot, or the next failure reboot, whichever occurs first.
   *
   * Valid values: `true` | `false`
   *
   * Default: `false`
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * Modifies the engine listed in a replication group message. The options are valkey, memcached or redis.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The upgraded version of the cache engine to be run on the clusters in the replication group.
   *
   * **Important:** You can upgrade to a newer engine version (see [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SelectEngine.html#VersionManagement)), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing replication group and create it anew with the earlier engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   *  If you are running Valkey or Redis OSS engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions. 
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The number of days for which ElastiCache retains automatic node group (shard) snapshots before deleting them. For example, if you set `SnapshotRetentionLimit` to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * **Important** If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of the node group (shard) specified by `SnapshottingClusterId`.
   *
   * Example: `05:00-09:00`
   *
   * If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
   *
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * A valid cache node type that you want to scale this replication group to.
   *
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * Reserved parameter. The password used to access a password protected server. This parameter must be specified with the `auth-token-update-strategy` parameter. Password constraints:
   *
   * - Must be only printable ASCII characters
   * - Must be at least 16 characters and no more than 128 characters in length
   * - Cannot contain any of the following characters: '/', '"', or '@', '%'
   *
   * For more information, see AUTH password at [AUTH](http://redis.io/commands/AUTH).
   *
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * Specifies the strategy to use to update the AUTH token. This parameter must be specified with the `auth-token` parameter. Possible values:
   *
   * - ROTATE - default, if no update strategy is provided
   * - SET - allowed only after ROTATE
   * - DELETE - allowed only when transitioning to RBAC
   *
   * For more information, see [Authenticating Users with AUTH](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/auth.html)
   *
   * @public
   */
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | undefined;

  /**
   * The ID of the user group you are associating with the replication group.
   *
   * @public
   */
  UserGroupIdsToAdd?: string[] | undefined;

  /**
   * The ID of the user group to disassociate from the replication group, meaning the users in the group no longer can access the replication group.
   *
   * @public
   */
  UserGroupIdsToRemove?: string[] | undefined;

  /**
   * Removes the user group associated with this replication group.
   *
   * @public
   */
  RemoveUserGroups?: boolean | undefined;

  /**
   * Specifies the destination, format and type of the logs.
   *
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[] | undefined;

  /**
   * The network type you choose when modifying a cluster, either `ipv4` | `ipv6`. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * A flag that enables in-transit encryption when set to true. If you are enabling in-transit encryption for an existing cluster, you must also set `TransitEncryptionMode` to `preferred`.
   *
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
   *
   * You must set `TransitEncryptionEnabled` to `true`, for your existing cluster, and set `TransitEncryptionMode` to `preferred` in the same request to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Valkey or Redis OSS clients to use encrypted connections you can set the value to `required` to allow encrypted connections only.
   *
   * Setting `TransitEncryptionMode` to `required` is a two-step process that requires you to first set the `TransitEncryptionMode` to `preferred`, after that you can set `TransitEncryptionMode` to `required`.
   *
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled.
   *
   * @public
   */
  ClusterMode?: ClusterMode | undefined;

  /**
   * Specifies the durability setting for the replication group. Use this parameter to change the durability mode of an existing replication group, for example from `sync` to `async` or vice versa. For more information, see [Durability](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/durability.html).
   *
   * @public
   */
  Durability?: Durability | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationGroupResult {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * Represents the input for a `ModifyReplicationGroupShardConfiguration` operation.
 *
 * @public
 */
export interface ModifyReplicationGroupShardConfigurationMessage {
  /**
   * The name of the Valkey or Redis OSS (cluster mode enabled) cluster (replication group) on which the shards are to be configured.
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * The number of node groups (shards) that results from the modification of the shard configuration.
   *
   * @public
   */
  NodeGroupCount: number | undefined;

  /**
   * Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is `true`.
   *
   * Value: true
   *
   * @public
   */
  ApplyImmediately: boolean | undefined;

  /**
   * Specifies the preferred availability zones for each node group in the cluster. If the value of `NodeGroupCount` is greater than the current number of node groups (shards), you can use this parameter to specify the preferred availability zones of the cluster's shards. If you omit this parameter ElastiCache selects availability zones for you.
   *
   * You can specify this parameter only if the value of `NodeGroupCount` is greater than the current number of node groups (shards).
   *
   * @public
   */
  ReshardingConfiguration?: ReshardingConfiguration[] | undefined;

  /**
   * If the value of `NodeGroupCount` is less than the current number of node groups (shards), then either `NodeGroupsToRemove` or `NodeGroupsToRetain` is required. `NodeGroupsToRemove` is a list of `NodeGroupId`s to remove from the cluster.
   *
   * ElastiCache will attempt to remove all node groups listed by `NodeGroupsToRemove` from the cluster.
   *
   * @public
   */
  NodeGroupsToRemove?: string[] | undefined;

  /**
   * If the value of `NodeGroupCount` is less than the current number of node groups (shards), then either `NodeGroupsToRemove` or `NodeGroupsToRetain` is required. `NodeGroupsToRetain` is a list of `NodeGroupId`s to retain in the cluster.
   *
   * ElastiCache will attempt to remove all node groups except those listed by `NodeGroupsToRetain` from the cluster.
   *
   * @public
   */
  NodeGroupsToRetain?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationGroupShardConfigurationResult {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * @public
 */
export interface ModifyServerlessCacheRequest {
  /**
   * User-provided identifier for the serverless cache to be modified.
   *
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * User provided description for the serverless cache. Default = NULL, i.e. the existing description is not removed/modified. The description has a maximum length of 255 characters.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Modify the cache usage limit for the serverless cache.
   *
   * @public
   */
  CacheUsageLimits?: CacheUsageLimits | undefined;

  /**
   * The identifier of the UserGroup to be removed from association with the Valkey and Redis OSS serverless cache. Available for Valkey and Redis OSS only. Default is NULL.
   *
   * @public
   */
  RemoveUserGroup?: boolean | undefined;

  /**
   * The identifier of the UserGroup to be associated with the serverless cache. Available for Valkey and Redis OSS only. Default is NULL - the existing UserGroup is not removed.
   *
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * The new list of VPC security groups to be associated with the serverless cache. Populating this list means the current VPC security groups will be removed. This security group is used to authorize traffic access for the VPC end-point (private-link). Default = NULL - the existing list of VPC security groups is not removed.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The number of days for which Elasticache retains automatic snapshots before deleting them. Available for Valkey, Redis OSS and Serverless Memcached only. Default = NULL, i.e. the existing snapshot-retention-limit will not be removed or modified. The maximum value allowed is 35 days.
   *
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * The daily time during which Elasticache begins taking a daily snapshot of the serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only. The default is NULL, i.e. the existing snapshot time configured for the cluster is not removed.
   *
   * @public
   */
  DailySnapshotTime?: string | undefined;

  /**
   * Modifies the engine listed in a serverless cache request. The options are valkey, memcached or redis.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Modifies the engine vesion listed in a serverless cache request.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;
}

/**
 * @public
 */
export interface ModifyServerlessCacheResponse {
  /**
   * The response for the attempt to modify the serverless cache.
   *
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * @public
 */
export interface ModifyUserMessage {
  /**
   * The ID of the user.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * Access permissions string used for this user.
   *
   * @public
   */
  AccessString?: string | undefined;

  /**
   * Adds additional user permissions to the access string.
   *
   * @public
   */
  AppendAccessString?: string | undefined;

  /**
   * The passwords belonging to the user. You are allowed up to two.
   *
   * @public
   */
  Passwords?: string[] | undefined;

  /**
   * Indicates no password is required for the user.
   *
   * @public
   */
  NoPasswordRequired?: boolean | undefined;

  /**
   * Specifies how to authenticate the user.
   *
   * @public
   */
  AuthenticationMode?: AuthenticationMode | undefined;

  /**
   * Modifies the engine listed for a user. The options are valkey or redis.
   *
   * @public
   */
  Engine?: string | undefined;
}

/**
 * @public
 */
export interface ModifyUserGroupMessage {
  /**
   * The ID of the user group.
   *
   * @public
   */
  UserGroupId: string | undefined;

  /**
   * The list of user IDs to add to the user group.
   *
   * @public
   */
  UserIdsToAdd?: string[] | undefined;

  /**
   * The list of user IDs to remove from the user group.
   *
   * @public
   */
  UserIdsToRemove?: string[] | undefined;

  /**
   * Modifies the engine listed in a user group. The options are valkey or redis.
   *
   * @public
   */
  Engine?: string | undefined;
}

/**
 * The endpoint from which data should be migrated.
 *
 * @public
 */
export interface CustomerNodeEndpoint {
  /**
   * The address of the node endpoint
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The port of the node endpoint
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * Configuration for authenticating with the source using Secrets Manager during migration.
 *
 * @public
 */
export interface SecretManagerAuthConfig {
  /**
   * The ARN of the secret in AWS Secrets Manager that contains the credentials for authenticating with the source.
   *
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * The authentication configuration for connecting to the source during migration.
 *
 * @public
 */
export interface SourceAuthenticationConfiguration {
  /**
   * The Secrets Manager configuration used for authenticating with the source during migration.
   *
   * @public
   */
  SecretManagerConfig?: SecretManagerAuthConfig | undefined;
}

/**
 * The TLS configuration for connecting to the source during migration.
 *
 * @public
 */
export interface SourceTlsConfiguration {
  /**
   * The TLS mode to use when connecting to the source. Valid values are `none` and `verify-ca`.
   *
   * @public
   */
  SourceTlsMode?: TlsMode | undefined;

  /**
   * The TLS certificate used to verify the identity of the source during migration.
   *
   * @public
   */
  SourceTlsCertificate?: string | undefined;
}

/**
 * @public
 */
export interface PrepareMigrationRequest {
  /**
   * The name of the serverless cache to prepare for migration.
   *
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * The list of endpoints from which to migrate data. For serverless cache migrations, the list should have only one element.
   *
   * @public
   */
  CustomerNodeEndpointList: CustomerNodeEndpoint[] | undefined;

  /**
   * The authentication configuration for connecting to the source during migration.
   *
   * @public
   */
  SourceAuthenticationConfiguration?: SourceAuthenticationConfiguration | undefined;

  /**
   * The TLS configuration for connecting to the source during migration.
   *
   * @public
   */
  SourceTlsConfiguration?: SourceTlsConfiguration | undefined;
}

/**
 * @public
 */
export interface PrepareMigrationResponse {
  /**
   * Provides the details of the serverless cache prepared for migration.
   *
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * Represents the input of a `PurchaseReservedCacheNodesOffering` operation.
 *
 * @public
 */
export interface PurchaseReservedCacheNodesOfferingMessage {
  /**
   * The ID of the reserved cache node offering to purchase.
   *
   * Example: `438012d3-4052-4cc7-b2e3-8d3372e0e706`
   *
   * @public
   */
  ReservedCacheNodesOfferingId: string | undefined;

  /**
   * A customer-specified identifier to track this reservation.
   *
   * > **Note:** The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation. If this parameter is not specified, ElastiCache automatically generates an identifier for the reservation.
   *
   * Example: myreservationID
   *
   * @public
   */
  ReservedCacheNodeId?: string | undefined;

  /**
   * The number of cache node instances to reserve.
   *
   * Default: `1`
   *
   * @public
   */
  CacheNodeCount?: number | undefined;

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
export interface PurchaseReservedCacheNodesOfferingResult {
  /**
   * Represents the output of a `PurchaseReservedCacheNodesOffering` operation.
   *
   * @public
   */
  ReservedCacheNode?: ReservedCacheNode | undefined;
}

/**
 * @public
 */
export interface RebalanceSlotsInGlobalReplicationGroupMessage {
  /**
   * The name of the Global datastore
   *
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * If `True`, redistribution is applied immediately.
   *
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface RebalanceSlotsInGlobalReplicationGroupResult {
  /**
   * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
   *
   * - The **GlobalReplicationGroupIdSuffix** represents the name of the Global datastore, which is what you use to associate a secondary cluster.
   *
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * Represents the input of a `RebootCacheCluster` operation.
 *
 * @public
 */
export interface RebootCacheClusterMessage {
  /**
   * The cluster identifier. This parameter is stored as a lowercase string.
   *
   * @public
   */
  CacheClusterId: string | undefined;

  /**
   * A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.
   *
   * @public
   */
  CacheNodeIdsToReboot: string[] | undefined;
}

/**
 * @public
 */
export interface RebootCacheClusterResult {
  /**
   * Contains all of the attributes of a specific cluster.
   *
   * @public
   */
  CacheCluster?: CacheCluster | undefined;
}

/**
 * Represents the input of a `RemoveTagsFromResource` operation.
 *
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * The Amazon Resource Name (ARN) of the resource from which you want the tags removed, for example `arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster` or `arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot`.
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs) and Amazon Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * A list of `TagKeys` identifying the tags you want removed from the named resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Represents the input of a `ResetCacheParameterGroup` operation.
 *
 * @public
 */
export interface ResetCacheParameterGroupMessage {
  /**
   * The name of the cache parameter group to reset.
   *
   * @public
   */
  CacheParameterGroupName: string | undefined;

  /**
   * If `true`, all parameters in the cache parameter group are reset to their default values. If `false`, only the parameters listed by `ParameterNameValues` are reset to their default values.
   *
   * Valid values: `true` | `false`
   *
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * An array of parameter names to reset to their default values. If `ResetAllParameters` is `true`, do not use `ParameterNameValues`. If `ResetAllParameters` is `false`, you must specify the name of at least one parameter to reset.
   *
   * @public
   */
  ParameterNameValues?: ParameterNameValue[] | undefined;
}

/**
 * Represents the input of a `RevokeCacheSecurityGroupIngress` operation.
 *
 * @public
 */
export interface RevokeCacheSecurityGroupIngressMessage {
  /**
   * The name of the cache security group to revoke ingress from.
   *
   * @public
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * The name of the Amazon EC2 security group to revoke access from.
   *
   * @public
   */
  EC2SecurityGroupName: string | undefined;

  /**
   * The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.
   *
   * @public
   */
  EC2SecurityGroupOwnerId: string | undefined;
}

/**
 * @public
 */
export interface RevokeCacheSecurityGroupIngressResult {
  /**
   * Represents the output of one of the following operations:
   *
   * - `AuthorizeCacheSecurityGroupIngress`
   * - `CreateCacheSecurityGroup`
   * - `RevokeCacheSecurityGroupIngress`
   *
   * @public
   */
  CacheSecurityGroup?: CacheSecurityGroup | undefined;
}

/**
 * @public
 */
export interface StartMigrationMessage {
  /**
   * The name of the serverless cache to which data is being migrated.
   *
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * The ID of the replication group to which data should be migrated.
   *
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * The list of endpoints from which to migrate data. For Valkey or Redis OSS (cluster mode disabled), the list should have only one element. For serverless cache migrations, ElastiCache uses the endpoint that you provided in `PrepareMigration`.
   *
   * @public
   */
  CustomerNodeEndpointList?: CustomerNodeEndpoint[] | undefined;

  /**
   * Specifies whether ElastiCache automatically attempts to complete the migration after data sync is established.
   *
   * @public
   */
  AutoCutover?: boolean | undefined;

  /**
   * Specifies whether ElastiCache deletes existing data in the serverless cache before migration begins. After `StopMigration`, `StartMigration` requires this option to restart the data sync.
   *
   * @public
   */
  ClearTargetCacheData?: boolean | undefined;
}

/**
 * @public
 */
export interface StartMigrationResponse {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;

  /**
   * Provides the details of the serverless cache to which ElastiCache is migrating data.
   *
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * @public
 */
export interface StopMigrationRequest {
  /**
   * The name of the serverless cache for which to stop the data sync.
   *
   * @public
   */
  ServerlessCacheName: string | undefined;
}

/**
 * @public
 */
export interface StopMigrationResponse {
  /**
   * Provides the details of the serverless cache for which the data sync stopped.
   *
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * @public
 */
export interface TestFailoverMessage {
  /**
   * The name of the replication group (console: cluster) whose automatic failover is being tested by this operation.
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 15 node groups in any rolling 24-hour period.
   *
   * @public
   */
  NodeGroupId: string | undefined;
}

/**
 * @public
 */
export interface TestFailoverResult {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * @public
 */
export interface TestMigrationMessage {
  /**
   * The ID of the replication group to which data is to be migrated.
   *
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * List of endpoints from which data should be migrated. List should have only one element.
   *
   * @public
   */
  CustomerNodeEndpointList: CustomerNodeEndpoint[] | undefined;
}

/**
 * @public
 */
export interface TestMigrationResponse {
  /**
   * Contains all of the attributes of a specific Valkey or Redis OSS replication group.
   *
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}
