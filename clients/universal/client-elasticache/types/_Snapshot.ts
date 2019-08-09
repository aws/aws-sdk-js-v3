import { _NodeSnapshot, _UnmarshalledNodeSnapshot } from "./_NodeSnapshot";

/**
 * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
 */
export interface _Snapshot {
  /**
   * <p>The name of a snapshot. For an automatic snapshot, the name is system-generated. For a manual snapshot, this is the user-provided name.</p>
   */
  SnapshotName?: string;

  /**
   * <p>The unique identifier of the source replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>A description of the source replication group.</p>
   */
  ReplicationGroupDescription?: string;

  /**
   * <p>The user-supplied identifier of the source cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The status of the snapshot. Valid values: <code>creating</code> | <code>available</code> | <code>restoring</code> | <code>copying</code> | <code>deleting</code>.</p>
   */
  SnapshotStatus?: string;

  /**
   * <p>Indicates whether the snapshot is from an automatic backup (<code>automated</code>) or was created manually (<code>manual</code>).</p>
   */
  SnapshotSource?: string;

  /**
   * <p>The name of the compute and memory capacity node type for the source cluster.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The name of the cache engine (<code>memcached</code> or <code>redis</code>) used by the source cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the cache engine version that is used by the source cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The number of cache nodes in the source cluster.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>The name of the Availability Zone in which the source cluster is located.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>The date and time when the source cluster was created.</p>
   */
  CacheClusterCreateTime?: Date | string | number;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the topic used by the source cluster for publishing notifications.</p>
   */
  TopicArn?: string;

  /**
   * <p>The port number used by each cache nodes in the source cluster.</p>
   */
  Port?: number;

  /**
   * <p>The cache parameter group that is associated with the source cluster.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The name of the cache subnet group associated with the source cluster.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the source cluster.</p>
   */
  VpcId?: string;

  /**
   * <p>This parameter is currently disabled.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>For an automatic snapshot, the number of days for which ElastiCache retains the snapshot before deleting it.</p> <p>For manual snapshots, this field reflects the <code>SnapshotRetentionLimit</code> for the source cluster when the snapshot was created. This field is otherwise ignored: Manual snapshots do not expire, and can only be deleted using the <code>DeleteSnapshot</code> operation. </p> <p> <b>Important</b> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range during which ElastiCache takes daily snapshots of the source cluster.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>The number of node groups (shards) in this snapshot. When restoring from a snapshot, the number of node groups (shards) in the snapshot and in the restored replication group must be the same.</p>
   */
  NumNodeGroups?: number;

  /**
   * <p>Indicates the status of Multi-AZ with automatic failover for the source Redis replication group.</p> <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p> <ul> <li> <p>Redis versions earlier than 2.8.6.</p> </li> <li> <p>Redis (cluster mode disabled): T1 node types.</p> </li> <li> <p>Redis (cluster mode enabled): T1 node types.</p> </li> </ul>
   */
  AutomaticFailover?:
    | "enabled"
    | "disabled"
    | "enabling"
    | "disabling"
    | string;

  /**
   * <p>A list of the cache nodes in the source cluster.</p>
   */
  NodeSnapshots?: Array<_NodeSnapshot> | Iterable<_NodeSnapshot>;
}

export interface _UnmarshalledSnapshot extends _Snapshot {
  /**
   * <p>The date and time when the source cluster was created.</p>
   */
  CacheClusterCreateTime?: Date;

  /**
   * <p>A list of the cache nodes in the source cluster.</p>
   */
  NodeSnapshots?: Array<_UnmarshalledNodeSnapshot>;
}
