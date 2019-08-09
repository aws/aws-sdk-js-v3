import {
  _ReplicationGroupPendingModifiedValues,
  _UnmarshalledReplicationGroupPendingModifiedValues
} from "./_ReplicationGroupPendingModifiedValues";
import { _NodeGroup, _UnmarshalledNodeGroup } from "./_NodeGroup";
import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";

/**
 * <p>Contains all of the attributes of a specific Redis replication group.</p>
 */
export interface _ReplicationGroup {
  /**
   * <p>The identifier for the replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The user supplied description of the replication group.</p>
   */
  Description?: string;

  /**
   * <p>The current state of this replication group - <code>creating</code>, <code>available</code>, <code>modifying</code>, <code>deleting</code>, <code>create-failed</code>, <code>snapshotting</code>.</p>
   */
  Status?: string;

  /**
   * <p>A group of settings to be applied to the replication group, either immediately or during the next maintenance window.</p>
   */
  PendingModifiedValues?: _ReplicationGroupPendingModifiedValues;

  /**
   * <p>The names of all the cache clusters that are part of this replication group.</p>
   */
  MemberClusters?: Array<string> | Iterable<string>;

  /**
   * <p>A list of node groups in this replication group. For Redis (cluster mode disabled) replication groups, this is a single-element list. For Redis (cluster mode enabled) replication groups, the list contains an entry for each node group (shard).</p>
   */
  NodeGroups?: Array<_NodeGroup> | Iterable<_NodeGroup>;

  /**
   * <p>The cluster ID that is used as the daily snapshot source for the replication group.</p>
   */
  SnapshottingClusterId?: string;

  /**
   * <p>Indicates the status of Multi-AZ with automatic failover for this Redis replication group.</p> <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p> <ul> <li> <p>Redis versions earlier than 2.8.6.</p> </li> <li> <p>Redis (cluster mode disabled): T1 node types.</p> </li> <li> <p>Redis (cluster mode enabled): T1 node types.</p> </li> </ul>
   */
  AutomaticFailover?:
    | "enabled"
    | "disabled"
    | "enabling"
    | "disabling"
    | string;

  /**
   * <p>The configuration endpoint for this replication group. Use the configuration endpoint to connect to this replication group.</p>
   */
  ConfigurationEndpoint?: _Endpoint;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <important> <p> If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p> </important>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p> <p>Example: <code>05:00-09:00</code> </p> <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.</p> <note> <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p> </note>
   */
  SnapshotWindow?: string;

  /**
   * <p>A flag indicating whether or not this replication group is cluster enabled; i.e., whether its data can be partitioned across multiple shards (API/CLI: node groups).</p> <p>Valid values: <code>true</code> | <code>false</code> </p>
   */
  ClusterEnabled?: boolean;

  /**
   * <p>The name of the compute and memory capacity node type for each node in the replication group.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password) when issuing Redis commands.</p> <p>Default: <code>false</code> </p>
   */
  AuthTokenEnabled?: boolean;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p> <p>You cannot modify the value of <code>TransitEncryptionEnabled</code> after the cluster is created. To enable in-transit encryption on a cluster you must set <code>TransitEncryptionEnabled</code> to <code>true</code> when you create a cluster.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A flag that enables encryption at-rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the cluster is created. To enable encryption at-rest on a cluster you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create a cluster.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>
   */
  AtRestEncryptionEnabled?: boolean;
}

export interface _UnmarshalledReplicationGroup extends _ReplicationGroup {
  /**
   * <p>A group of settings to be applied to the replication group, either immediately or during the next maintenance window.</p>
   */
  PendingModifiedValues?: _UnmarshalledReplicationGroupPendingModifiedValues;

  /**
   * <p>The names of all the cache clusters that are part of this replication group.</p>
   */
  MemberClusters?: Array<string>;

  /**
   * <p>A list of node groups in this replication group. For Redis (cluster mode disabled) replication groups, this is a single-element list. For Redis (cluster mode enabled) replication groups, the list contains an entry for each node group (shard).</p>
   */
  NodeGroups?: Array<_UnmarshalledNodeGroup>;

  /**
   * <p>The configuration endpoint for this replication group. Use the configuration endpoint to connect to this replication group.</p>
   */
  ConfigurationEndpoint?: _UnmarshalledEndpoint;
}
