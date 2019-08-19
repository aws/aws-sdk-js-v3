import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";
import {
  _PendingModifiedValues,
  _UnmarshalledPendingModifiedValues
} from "./_PendingModifiedValues";
import {
  _NotificationConfiguration,
  _UnmarshalledNotificationConfiguration
} from "./_NotificationConfiguration";
import {
  _CacheSecurityGroupMembership,
  _UnmarshalledCacheSecurityGroupMembership
} from "./_CacheSecurityGroupMembership";
import {
  _CacheParameterGroupStatus,
  _UnmarshalledCacheParameterGroupStatus
} from "./_CacheParameterGroupStatus";
import { _CacheNode, _UnmarshalledCacheNode } from "./_CacheNode";
import {
  _SecurityGroupMembership,
  _UnmarshalledSecurityGroupMembership
} from "./_SecurityGroupMembership";

/**
 * <p>Contains all of the attributes of a specific cluster.</p>
 */
export interface _CacheCluster {
  /**
   * <p>The user-supplied identifier of the cluster. This identifier is a unique key that identifies a cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>Represents a Memcached cluster endpoint which, if Automatic Discovery is enabled on the cluster, can be used by an application to connect to any node in the cluster. The configuration endpoint will always have <code>.cfg</code> in it.</p> <p>Example: <code>mem-3.9dvc4r<u>.cfg</u>.usw2.cache.amazonaws.com:11211</code> </p>
   */
  ConfigurationEndpoint?: _Endpoint;

  /**
   * <p>The URL of the web page where you can download the latest ElastiCache client library.</p>
   */
  ClientDownloadLandingPage?: string;

  /**
   * <p>The name of the compute and memory capacity node type for the cluster.</p> <p>The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.</p> <ul> <li> <p>General purpose:</p> <ul> <li> <p>Current generation: </p> <p> <b>M5 node types:</b> <code>cache.m5.large</code>, <code>cache.m5.xlarge</code>, <code>cache.m5.2xlarge</code>, <code>cache.m5.4xlarge</code>, <code>cache.m5.12xlarge</code>, <code>cache.m5.24xlarge</code> </p> <p> <b>M4 node types:</b> <code>cache.m4.large</code>, <code>cache.m4.xlarge</code>, <code>cache.m4.2xlarge</code>, <code>cache.m4.4xlarge</code>, <code>cache.m4.10xlarge</code> </p> <p> <b>T2 node types:</b> <code>cache.t2.micro</code>, <code>cache.t2.small</code>, <code>cache.t2.medium</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>T1 node types:</b> <code>cache.t1.micro</code> </p> <p> <b>M1 node types:</b> <code>cache.m1.small</code>, <code>cache.m1.medium</code>, <code>cache.m1.large</code>, <code>cache.m1.xlarge</code> </p> <p> <b>M3 node types:</b> <code>cache.m3.medium</code>, <code>cache.m3.large</code>, <code>cache.m3.xlarge</code>, <code>cache.m3.2xlarge</code> </p> </li> </ul> </li> <li> <p>Compute optimized:</p> <ul> <li> <p>Previous generation: (not recommended)</p> <p> <b>C1 node types:</b> <code>cache.c1.xlarge</code> </p> </li> </ul> </li> <li> <p>Memory optimized:</p> <ul> <li> <p>Current generation: </p> <p> <b>R5 node types:</b> <code>cache.r5.large</code>, <code>cache.r5.xlarge</code>, <code>cache.r5.2xlarge</code>, <code>cache.r5.4xlarge</code>, <code>cache.r5.12xlarge</code>, <code>cache.r5.24xlarge</code> </p> <p> <b>R4 node types:</b> <code>cache.r4.large</code>, <code>cache.r4.xlarge</code>, <code>cache.r4.2xlarge</code>, <code>cache.r4.4xlarge</code>, <code>cache.r4.8xlarge</code>, <code>cache.r4.16xlarge</code> </p> </li> <li> <p>Previous generation: (not recommended)</p> <p> <b>M2 node types:</b> <code>cache.m2.xlarge</code>, <code>cache.m2.2xlarge</code>, <code>cache.m2.4xlarge</code> </p> <p> <b>R3 node types:</b> <code>cache.r3.large</code>, <code>cache.r3.xlarge</code>, <code>cache.r3.2xlarge</code>, <code>cache.r3.4xlarge</code>, <code>cache.r3.8xlarge</code> </p> </li> </ul> </li> </ul> <p> <b>Additional node type info</b> </p> <ul> <li> <p>All current generation instance types are created in Amazon VPC by default.</p> </li> <li> <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p> </li> <li> <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p> </li> <li> <p>Redis configuration variables <code>appendonly</code> and <code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p> </li> </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The name of the cache engine (<code>memcached</code> or <code>redis</code>) to be used for this cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the cache engine that is used in this cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The current state of this cluster, one of the following values: <code>available</code>, <code>creating</code>, <code>deleted</code>, <code>deleting</code>, <code>incompatible-network</code>, <code>modifying</code>, <code>rebooting cluster nodes</code>, <code>restore-failed</code>, or <code>snapshotting</code>.</p>
   */
  CacheClusterStatus?: string;

  /**
   * <p>The number of cache nodes in the cluster.</p> <p>For clusters running Redis, this value must be 1. For clusters running Memcached, this value must be between 1 and 20.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>The name of the Availability Zone in which the cluster is located or "Multiple" if the cache nodes are located in different Availability Zones.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>The date and time when the cluster was created.</p>
   */
  CacheClusterCreateTime?: Date | string | number;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p> <p>Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:23:00-mon:01:30</code> </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A group of settings that are applied to the cluster in the future, or that are currently being applied.</p>
   */
  PendingModifiedValues?: _PendingModifiedValues;

  /**
   * <p>Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS). </p>
   */
  NotificationConfiguration?: _NotificationConfiguration;

  /**
   * <p>A list of cache security group elements, composed of name and status sub-elements.</p>
   */
  CacheSecurityGroups?:
    | Array<_CacheSecurityGroupMembership>
    | Iterable<_CacheSecurityGroupMembership>;

  /**
   * <p>Status of the cache parameter group.</p>
   */
  CacheParameterGroup?: _CacheParameterGroupStatus;

  /**
   * <p>The name of the cache subnet group associated with the cluster.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>A list of cache nodes that are members of the cluster.</p>
   */
  CacheNodes?: Array<_CacheNode> | Iterable<_CacheNode>;

  /**
   * <p>This parameter is currently disabled.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>A list of VPC Security Groups associated with the cluster.</p>
   */
  SecurityGroups?:
    | Array<_SecurityGroupMembership>
    | Iterable<_SecurityGroupMembership>;

  /**
   * <p>The replication group to which this cluster belongs. If this field is empty, the cluster is not associated with any replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p> <important> <p> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p> </important>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your cluster.</p> <p>Example: <code>05:00-09:00</code> </p>
   */
  SnapshotWindow?: string;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password) when issuing Redis commands.</p> <p>Default: <code>false</code> </p>
   */
  AuthTokenEnabled?: boolean;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p> <p>You cannot modify the value of <code>TransitEncryptionEnabled</code> after the cluster is created. To enable in-transit encryption on a cluster you must set <code>TransitEncryptionEnabled</code> to <code>true</code> when you create a cluster.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A flag that enables encryption at-rest when set to <code>true</code>.</p> <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the cluster is created. To enable at-rest encryption on a cluster you must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create a cluster.</p> <p> <b>Required:</b> Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p> <p>Default: <code>false</code> </p>
   */
  AtRestEncryptionEnabled?: boolean;
}

export interface _UnmarshalledCacheCluster extends _CacheCluster {
  /**
   * <p>Represents a Memcached cluster endpoint which, if Automatic Discovery is enabled on the cluster, can be used by an application to connect to any node in the cluster. The configuration endpoint will always have <code>.cfg</code> in it.</p> <p>Example: <code>mem-3.9dvc4r<u>.cfg</u>.usw2.cache.amazonaws.com:11211</code> </p>
   */
  ConfigurationEndpoint?: _UnmarshalledEndpoint;

  /**
   * <p>The date and time when the cluster was created.</p>
   */
  CacheClusterCreateTime?: Date;

  /**
   * <p>A group of settings that are applied to the cluster in the future, or that are currently being applied.</p>
   */
  PendingModifiedValues?: _UnmarshalledPendingModifiedValues;

  /**
   * <p>Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS). </p>
   */
  NotificationConfiguration?: _UnmarshalledNotificationConfiguration;

  /**
   * <p>A list of cache security group elements, composed of name and status sub-elements.</p>
   */
  CacheSecurityGroups?: Array<_UnmarshalledCacheSecurityGroupMembership>;

  /**
   * <p>Status of the cache parameter group.</p>
   */
  CacheParameterGroup?: _UnmarshalledCacheParameterGroupStatus;

  /**
   * <p>A list of cache nodes that are members of the cluster.</p>
   */
  CacheNodes?: Array<_UnmarshalledCacheNode>;

  /**
   * <p>A list of VPC Security Groups associated with the cluster.</p>
   */
  SecurityGroups?: Array<_UnmarshalledSecurityGroupMembership>;
}
