import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Represents the input of an AddTagsToResource operation.</p>
 */
export interface AddTagsToResourceMessage {
  __type?: "AddTagsToResourceMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added,
   *             for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code>
   *             or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.
   *             ElastiCache resources are <i>cluster</i> and <i>snapshot</i>.</p>
   *         <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>A list of cost allocation tags to be added to this resource. A tag is a key-value pair.
   *           A tag key must be accompanied by a tag value.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceMessage {
  export const filterSensitiveLog = (obj: AddTagsToResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceMessage =>
    __isa(o, "AddTagsToResourceMessage");
}

/**
 * <p>Represents the allowed node types you can use to modify your cluster or replication group.</p>
 */
export interface AllowedNodeTypeModificationsMessage {
  __type?: "AllowedNodeTypeModificationsMessage";
  /**
   * <p>A string list, each element of which specifies a cache node type which you can use
   *             to scale your cluster or replication group.</p>
   *         <p>When scaling down on a Redis cluster or replication group using <code>ModifyCacheCluster</code> or
   *             <code>ModifyReplicationGroup</code>,
   *             use a value from this list for the <code>CacheNodeType</code> parameter.</p>
   */
  ScaleDownModifications?: string[];

  /**
   * <p>A string list, each element of which specifies a cache node type which you can use
   *             to scale your cluster or replication group.</p>
   *         <p>When scaling up a Redis cluster or replication group using <code>ModifyCacheCluster</code> or
   *             <code>ModifyReplicationGroup</code>,
   *             use a value from this list for the <code>CacheNodeType</code> parameter.</p>
   */
  ScaleUpModifications?: string[];
}

export namespace AllowedNodeTypeModificationsMessage {
  export const filterSensitiveLog = (
    obj: AllowedNodeTypeModificationsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AllowedNodeTypeModificationsMessage =>
    __isa(o, "AllowedNodeTypeModificationsMessage");
}

/**
 * <p>The customer has exceeded the allowed rate of API calls.</p>
 */
export interface APICallRateForCustomerExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "APICallRateForCustomerExceededFault";
  $fault: "client";
  message?: string;
}

export namespace APICallRateForCustomerExceededFault {
  export const filterSensitiveLog = (
    obj: APICallRateForCustomerExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is APICallRateForCustomerExceededFault =>
    __isa(o, "APICallRateForCustomerExceededFault");
}

/**
 * <p>The specified Amazon EC2 security group is already authorized for the specified cache security group.</p>
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
 * <p>The specified Amazon EC2 security group is not authorized for the specified cache security group.</p>
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
 * <p>Represents the input of an AuthorizeCacheSecurityGroupIngress operation.</p>
 */
export interface AuthorizeCacheSecurityGroupIngressMessage {
  __type?: "AuthorizeCacheSecurityGroupIngressMessage";
  /**
   * <p>The cache security group that allows network ingress.</p>
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>The Amazon EC2 security group to be authorized for ingress to the cache security group.</p>
   */
  EC2SecurityGroupName: string | undefined;

  /**
   * <p>The AWS account number of the Amazon EC2 security group owner.
   *             Note that this is not the same thing as an AWS access key ID -
   *             you must provide a valid AWS account number for this parameter.</p>
   */
  EC2SecurityGroupOwnerId: string | undefined;
}

export namespace AuthorizeCacheSecurityGroupIngressMessage {
  export const filterSensitiveLog = (
    obj: AuthorizeCacheSecurityGroupIngressMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizeCacheSecurityGroupIngressMessage =>
    __isa(o, "AuthorizeCacheSecurityGroupIngressMessage");
}

export interface AuthorizeCacheSecurityGroupIngressResult {
  __type?: "AuthorizeCacheSecurityGroupIngressResult";
  /**
   * <p>Represents the output of one of the following operations:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>AuthorizeCacheSecurityGroupIngress</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateCacheSecurityGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RevokeCacheSecurityGroupIngress</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CacheSecurityGroup?: CacheSecurityGroup;
}

export namespace AuthorizeCacheSecurityGroupIngressResult {
  export const filterSensitiveLog = (
    obj: AuthorizeCacheSecurityGroupIngressResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizeCacheSecurityGroupIngressResult =>
    __isa(o, "AuthorizeCacheSecurityGroupIngressResult");
}

export type AuthTokenUpdateStatus = "ROTATING" | "SETTING";

export type AuthTokenUpdateStrategyType = "ROTATE" | "SET";

export enum AutomaticFailoverStatus {
  DISABLED = "disabled",
  DISABLING = "disabling",
  ENABLED = "enabled",
  ENABLING = "enabling"
}

/**
 * <p>Describes an Availability Zone in which the cluster is launched.</p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZone =>
    __isa(o, "AvailabilityZone");
}

export enum AZMode {
  CROSS_AZ = "cross-az",
  SINGLE_AZ = "single-az"
}

export interface BatchApplyUpdateActionMessage {
  __type?: "BatchApplyUpdateActionMessage";
  /**
   * <p>The cache cluster IDs</p>
   */
  CacheClusterIds?: string[];

  /**
   * <p>The replication group IDs</p>
   */
  ReplicationGroupIds?: string[];

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName: string | undefined;
}

export namespace BatchApplyUpdateActionMessage {
  export const filterSensitiveLog = (
    obj: BatchApplyUpdateActionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchApplyUpdateActionMessage =>
    __isa(o, "BatchApplyUpdateActionMessage");
}

export interface BatchStopUpdateActionMessage {
  __type?: "BatchStopUpdateActionMessage";
  /**
   * <p>The cache cluster IDs</p>
   */
  CacheClusterIds?: string[];

  /**
   * <p>The replication group IDs</p>
   */
  ReplicationGroupIds?: string[];

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName: string | undefined;
}

export namespace BatchStopUpdateActionMessage {
  export const filterSensitiveLog = (
    obj: BatchStopUpdateActionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchStopUpdateActionMessage =>
    __isa(o, "BatchStopUpdateActionMessage");
}

/**
 * <p>Contains all of the attributes of a specific cluster.</p>
 */
export interface CacheCluster {
  __type?: "CacheCluster";
  /**
   * <p>A flag that enables encryption at-rest when set to <code>true</code>.</p>
   *         <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code>
   *             after the cluster is created. To enable at-rest encryption on a cluster
   *             you must set <code>AtRestEncryptionEnabled</code> to <code>true</code>
   *             when you create a cluster.</p>
   *         <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  AtRestEncryptionEnabled?: boolean;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password)
   *             when issuing Redis commands.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  AuthTokenEnabled?: boolean;

  /**
   * <p>The date the auth token was last modified</p>
   */
  AuthTokenLastModifiedDate?: Date;

  /**
   * <p>This parameter is currently disabled.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The date and time when the cluster was created.</p>
   */
  CacheClusterCreateTime?: Date;

  /**
   * <p>The user-supplied identifier of the cluster.
   *             This identifier is a unique key that identifies a cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The current state of this cluster, one of the following values:
   *                                                      <code>available</code>,
   *                                                      <code>creating</code>,
   *                                                      <code>deleted</code>,
   *                                                      <code>deleting</code>,
   *                                                      <code>incompatible-network</code>,
   *                                                      <code>modifying</code>,
   *                                                      <code>rebooting cluster nodes</code>,
   *                                                      <code>restore-failed</code>, or
   *                                                      <code>snapshotting</code>.</p>
   */
  CacheClusterStatus?: string;

  /**
   * <p>The name of the compute and memory capacity node type for the cluster.</p>
   *
   *         <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   * 		       <ul>
   *             <li>
   *                <p>General purpose:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   *     							          <p>
   *                         <b>M5 node types:</b>
   *     						              <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *
   *
   *     						           </p>
   *
   *
   * 						               <p>
   *                         <b>M4 node types:</b>
   *     						              <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *
   *
   *     				             <p>
   *                         <b>T2 node types:</b>
   * 					                   <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *
   *
   *
   *
   *     						        </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 						               <p>
   *                         <b>T1 node types:</b>
   * 					                   <code>cache.t1.micro</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M1 node types:</b>
   * 						                  <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M3 node types:</b>
   *     						              <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *
   * 						            </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *
   * 				           <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 			                  <p>
   *                         <b>C1 node types:</b>
   * 			                     <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   * 					                <p>
   *                         <b>R5 node types:</b>
   *     					               <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *
   *     					            <p>
   *                         <b>R4 node types:</b>
   *     					               <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *     					         </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   *                         <p>
   *                         <b>M2 node types:</b>
   *     					               <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *
   *     						           <p>
   *                         <b>R3 node types:</b>
   *     					               <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *
   *     						        </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Additional node type info</b>
   *          </p>
   * 		       <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by default.</p>
   *             </li>
   *             <li>
   *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis configuration variables <code>appendonly</code> and
   * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
   *             </li>
   *          </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>A list of cache nodes that are members of the cluster.</p>
   */
  CacheNodes?: CacheNode[];

  /**
   * <p>Status of the cache parameter group.</p>
   */
  CacheParameterGroup?: CacheParameterGroupStatus;

  /**
   * <p>A list of cache security group elements, composed of name and status sub-elements.</p>
   */
  CacheSecurityGroups?: CacheSecurityGroupMembership[];

  /**
   * <p>The name of the cache subnet group associated with the cluster.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>The URL of the web page where you can download the latest ElastiCache client library.</p>
   */
  ClientDownloadLandingPage?: string;

  /**
   * <p>Represents a Memcached cluster endpoint which, if Automatic Discovery is enabled on
   *             the cluster, can be used by an application to connect to any node in the cluster.
   *             The configuration endpoint will always have <code>.cfg</code> in it.</p>
   *         <p>Example: <code>mem-3.9dvc4r<u>.cfg</u>.usw2.cache.amazonaws.com:11211</code>
   *          </p>
   */
  ConfigurationEndpoint?: Endpoint;

  /**
   * <p>The name of the cache engine (<code>memcached</code> or
   *             <code>redis</code>) to be used for this cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the cache engine that is used in this cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Describes a notification topic and its status.
   *             Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS). </p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>The number of cache nodes in the cluster.</p>
   *         <p>For clusters running Redis, this value must be 1. For clusters running Memcached,
   *             this value must be between 1 and 20.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>A group of settings that are applied to the cluster in the future,
   *             or that are currently being applied.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>The name of the Availability Zone in which the cluster is located or "Multiple"
   *             if the cache nodes are located in different Availability Zones.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>Specifies the weekly time range during which maintenance
   *    on the cluster is performed. It is specified as a range in
   *    the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *    maintenance window is a 60 minute period.</p>
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The replication group to which this cluster belongs.
   *             If this field is empty, the cluster is not associated with any replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>A list of VPC Security Groups associated with the cluster.</p>
   */
  SecurityGroups?: SecurityGroupMembership[];

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5,  a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *         <important>
   *             <p>
   *           If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>
   *          </important>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a
   *             daily snapshot of your cluster.</p>
   *         <p>Example: <code>05:00-09:00</code>
   *          </p>
   */
  SnapshotWindow?: string;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *         <p>You cannot modify the value of <code>TransitEncryptionEnabled</code>
   *             after the cluster is created. To enable in-transit encryption on a cluster
   *             you must set <code>TransitEncryptionEnabled</code> to <code>true</code>
   *             when you create a cluster.</p>
   *         <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  TransitEncryptionEnabled?: boolean;
}

export namespace CacheCluster {
  export const filterSensitiveLog = (obj: CacheCluster): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheCluster => __isa(o, "CacheCluster");
}

/**
 * <p>You already have a cluster with the given identifier.</p>
 */
export interface CacheClusterAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace CacheClusterAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: CacheClusterAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheClusterAlreadyExistsFault =>
    __isa(o, "CacheClusterAlreadyExistsFault");
}

/**
 * <p>Represents the output of a <code>DescribeCacheClusters</code> operation.</p>
 */
export interface CacheClusterMessage {
  __type?: "CacheClusterMessage";
  /**
   * <p>A list of clusters. Each item in the list contains detailed information about one cluster.</p>
   */
  CacheClusters?: CacheCluster[];

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;
}

export namespace CacheClusterMessage {
  export const filterSensitiveLog = (obj: CacheClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheClusterMessage =>
    __isa(o, "CacheClusterMessage");
}

/**
 * <p>The requested cluster ID does not refer to an existing cluster.</p>
 */
export interface CacheClusterNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CacheClusterNotFoundFault {
  export const filterSensitiveLog = (obj: CacheClusterNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheClusterNotFoundFault =>
    __isa(o, "CacheClusterNotFoundFault");
}

/**
 * <p>Provides all of the details about a particular cache engine version.</p>
 */
export interface CacheEngineVersion {
  __type?: "CacheEngineVersion";
  /**
   * <p>The description of the cache engine.</p>
   */
  CacheEngineDescription?: string;

  /**
   * <p>The description of the cache engine version.</p>
   */
  CacheEngineVersionDescription?: string;

  /**
   * <p>The name of the cache parameter group family associated with this cache engine.</p>
   *         <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *     </p>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>The name of the cache engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the cache engine.</p>
   */
  EngineVersion?: string;
}

export namespace CacheEngineVersion {
  export const filterSensitiveLog = (obj: CacheEngineVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheEngineVersion =>
    __isa(o, "CacheEngineVersion");
}

/**
 * <p>Represents the output of a <a>DescribeCacheEngineVersions</a> operation.</p>
 */
export interface CacheEngineVersionMessage {
  __type?: "CacheEngineVersionMessage";
  /**
   * <p>A list of cache engine version details.
   *             Each element in the list contains detailed information about one cache engine version.</p>
   */
  CacheEngineVersions?: CacheEngineVersion[];

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;
}

export namespace CacheEngineVersionMessage {
  export const filterSensitiveLog = (obj: CacheEngineVersionMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheEngineVersionMessage =>
    __isa(o, "CacheEngineVersionMessage");
}

/**
 * <p>Represents an individual cache node within a cluster. Each cache node runs its own
 *             instance of the cluster's protocol-compliant caching software - either Memcached or
 *             Redis.</p>
 *
 *         <p>The following node types are supported by ElastiCache.
 * 				Generally speaking, the current generation types provide more memory and computational power
 * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
 * 		       <ul>
 *             <li>
 *                <p>General purpose:</p>
 * 				           <ul>
 *                   <li>
 *                      <p>Current generation: </p>
 *
 *     							          <p>
 *                         <b>M5 node types:</b>
 *     						              <code>cache.m5.large</code>,
 *     						<code>cache.m5.xlarge</code>,
 *     						<code>cache.m5.2xlarge</code>,
 *     						<code>cache.m5.4xlarge</code>,
 *     						<code>cache.m5.12xlarge</code>,
 *     						<code>cache.m5.24xlarge</code>
 *
 *
 *     						           </p>
 *
 *
 * 						               <p>
 *                         <b>M4 node types:</b>
 *     						              <code>cache.m4.large</code>,
 *     						<code>cache.m4.xlarge</code>,
 *     						<code>cache.m4.2xlarge</code>,
 *     						<code>cache.m4.4xlarge</code>,
 *     						<code>cache.m4.10xlarge</code>
 *                      </p>
 *
 *
 *     				             <p>
 *                         <b>T2 node types:</b>
 * 					                   <code>cache.t2.micro</code>,
 *     						<code>cache.t2.small</code>,
 *     						<code>cache.t2.medium</code>
 *                      </p>
 *
 *
 *
 *
 *     						        </li>
 *                   <li>
 *                      <p>Previous generation: (not recommended)</p>
 * 						               <p>
 *                         <b>T1 node types:</b>
 * 					                   <code>cache.t1.micro</code>
 *                      </p>
 *
 * 						               <p>
 *                         <b>M1 node types:</b>
 * 						                  <code>cache.m1.small</code>,
 * 						   <code>cache.m1.medium</code>,
 * 						   <code>cache.m1.large</code>,
 * 						   <code>cache.m1.xlarge</code>
 *                      </p>
 *
 * 						               <p>
 *                         <b>M3 node types:</b>
 *     						              <code>cache.m3.medium</code>,
 *     						<code>cache.m3.large</code>,
 *     						<code>cache.m3.xlarge</code>,
 *     						<code>cache.m3.2xlarge</code>
 *                      </p>
 *
 * 						            </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Compute optimized:</p>
 *
 * 				           <ul>
 *                   <li>
 *                      <p>Previous generation: (not recommended)</p>
 * 			                  <p>
 *                         <b>C1 node types:</b>
 * 			                     <code>cache.c1.xlarge</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Memory optimized:</p>
 * 				           <ul>
 *                   <li>
 *                      <p>Current generation: </p>
 *
 * 					                <p>
 *                         <b>R5 node types:</b>
 *     					               <code>cache.r5.large</code>,
 *     					   <code>cache.r5.xlarge</code>,
 *     					   <code>cache.r5.2xlarge</code>,
 *     					   <code>cache.r5.4xlarge</code>,
 *     					   <code>cache.r5.12xlarge</code>,
 *     					   <code>cache.r5.24xlarge</code>
 *                      </p>
 *
 *     					            <p>
 *                         <b>R4 node types:</b>
 *     					               <code>cache.r4.large</code>,
 *     					   <code>cache.r4.xlarge</code>,
 *     					   <code>cache.r4.2xlarge</code>,
 *     					   <code>cache.r4.4xlarge</code>,
 *     					   <code>cache.r4.8xlarge</code>,
 *     					   <code>cache.r4.16xlarge</code>
 *                      </p>
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *     					         </li>
 *                   <li>
 *                      <p>Previous generation: (not recommended)</p>
 *                         <p>
 *                         <b>M2 node types:</b>
 *     					               <code>cache.m2.xlarge</code>,
 *     						<code>cache.m2.2xlarge</code>,
 *     						<code>cache.m2.4xlarge</code>
 *                      </p>
 *
 *     						           <p>
 *                         <b>R3 node types:</b>
 *     					               <code>cache.r3.large</code>,
 *     						<code>cache.r3.xlarge</code>,
 *     						<code>cache.r3.2xlarge</code>,
 *     						<code>cache.r3.4xlarge</code>,
 *     						<code>cache.r3.8xlarge</code>
 *                      </p>
 *
 *     						        </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 * 		       <p>
 *             <b>Additional node type info</b>
 *          </p>
 * 		       <ul>
 *             <li>
 *                <p>All current generation instance types are created in Amazon VPC by default.</p>
 *             </li>
 *             <li>
 *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
 *             </li>
 *             <li>
 *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
 *             </li>
 *             <li>
 *                <p>Redis configuration variables <code>appendonly</code> and
 * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
 *             </li>
 *          </ul>
 */
export interface CacheNode {
  __type?: "CacheNode";
  /**
   * <p>The date and time when the cache node was created.</p>
   */
  CacheNodeCreateTime?: Date;

  /**
   * <p>The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The combination of cluster ID and node ID uniquely identifies every cache node used in a customer's AWS account.</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The current state of this cache node.</p>
   */
  CacheNodeStatus?: string;

  /**
   * <p>The Availability Zone where this node was created and now resides.</p>
   */
  CustomerAvailabilityZone?: string;

  /**
   * <p>The hostname for connecting to this cache node.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>The status of the parameter group applied to this cache node.</p>
   */
  ParameterGroupStatus?: string;

  /**
   * <p>The ID of the primary node to which this read replica node is synchronized.
   *             If this field is empty, this node is not associated with a primary cluster.</p>
   */
  SourceCacheNodeId?: string;
}

export namespace CacheNode {
  export const filterSensitiveLog = (obj: CacheNode): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheNode => __isa(o, "CacheNode");
}

/**
 * <p>A parameter that has a different value for each cache node type it is applied to. For
 *             example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a
 *             larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.</p>
 */
export interface CacheNodeTypeSpecificParameter {
  __type?: "CacheNodeTypeSpecificParameter";
  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>A list of cache node types and their corresponding values for this parameter.</p>
   */
  CacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValue[];

  /**
   * <p>Indicates whether a change to the parameter is applied immediately
   *             or requires a reboot for the change to be applied.
   *             You can force a reboot or wait until the next maintenance window's reboot.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a>.</p>
   */
  ChangeType?: ChangeType | string;

  /**
   * <p>The valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be
   *             modified. Some parameters have security or operational implications that prevent them
   *             from being changed.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest cache engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The source of the parameter value.</p>
   */
  Source?: string;
}

export namespace CacheNodeTypeSpecificParameter {
  export const filterSensitiveLog = (
    obj: CacheNodeTypeSpecificParameter
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheNodeTypeSpecificParameter =>
    __isa(o, "CacheNodeTypeSpecificParameter");
}

/**
 * <p>A value that applies only to a certain cache node type.</p>
 */
export interface CacheNodeTypeSpecificValue {
  __type?: "CacheNodeTypeSpecificValue";
  /**
   * <p>The cache node type for which this value applies.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The value for the cache node type.</p>
   */
  Value?: string;
}

export namespace CacheNodeTypeSpecificValue {
  export const filterSensitiveLog = (obj: CacheNodeTypeSpecificValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheNodeTypeSpecificValue =>
    __isa(o, "CacheNodeTypeSpecificValue");
}

/**
 * <p>The status of the service update on the cache node</p>
 */
export interface CacheNodeUpdateStatus {
  __type?: "CacheNodeUpdateStatus";
  /**
   * <p>The node ID of the cache cluster</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The deletion date of the node</p>
   */
  NodeDeletionDate?: Date;

  /**
   * <p>The end date of the update for a node</p>
   */
  NodeUpdateEndDate?: Date;

  /**
   * <p>Reflects whether the update was initiated by the customer or automatically applied</p>
   */
  NodeUpdateInitiatedBy?: NodeUpdateInitiatedBy | string;

  /**
   * <p>The date when the update is triggered</p>
   */
  NodeUpdateInitiatedDate?: Date;

  /**
   * <p>The start date of the update for a node</p>
   */
  NodeUpdateStartDate?: Date;

  /**
   * <p>The update status of the node</p>
   */
  NodeUpdateStatus?: NodeUpdateStatus | string;

  /**
   * <p>The date when the NodeUpdateStatus was last modified></p>
   */
  NodeUpdateStatusModifiedDate?: Date;
}

export namespace CacheNodeUpdateStatus {
  export const filterSensitiveLog = (obj: CacheNodeUpdateStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheNodeUpdateStatus =>
    __isa(o, "CacheNodeUpdateStatus");
}

/**
 * <p>Represents the output of a <code>CreateCacheParameterGroup</code> operation.</p>
 */
export interface CacheParameterGroup {
  __type?: "CacheParameterGroup";
  /**
   * <p>The name of the cache parameter group family that this cache parameter group is compatible with.</p>
   *         <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *     </p>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The description for this cache parameter group.</p>
   */
  Description?: string;
}

export namespace CacheParameterGroup {
  export const filterSensitiveLog = (obj: CacheParameterGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheParameterGroup =>
    __isa(o, "CacheParameterGroup");
}

/**
 * <p>A cache parameter group with the requested name already exists.</p>
 */
export interface CacheParameterGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace CacheParameterGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: CacheParameterGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheParameterGroupAlreadyExistsFault =>
    __isa(o, "CacheParameterGroupAlreadyExistsFault");
}

/**
 * <p>Represents the output of a <code>DescribeCacheParameters</code> operation.</p>
 */
export interface CacheParameterGroupDetails {
  __type?: "CacheParameterGroupDetails";
  /**
   * <p>A list of parameters specific to a particular cache node type.
   *             Each element in the list contains detailed information about one parameter.</p>
   */
  CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>Parameter</a> instances.</p>
   */
  Parameters?: Parameter[];
}

export namespace CacheParameterGroupDetails {
  export const filterSensitiveLog = (obj: CacheParameterGroupDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheParameterGroupDetails =>
    __isa(o, "CacheParameterGroupDetails");
}

/**
 * <p>Represents the output of one of the following operations:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <code>ModifyCacheParameterGroup</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ResetCacheParameterGroup</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface CacheParameterGroupNameMessage {
  __type?: "CacheParameterGroupNameMessage";
  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;
}

export namespace CacheParameterGroupNameMessage {
  export const filterSensitiveLog = (
    obj: CacheParameterGroupNameMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheParameterGroupNameMessage =>
    __isa(o, "CacheParameterGroupNameMessage");
}

/**
 * <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
 */
export interface CacheParameterGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CacheParameterGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: CacheParameterGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheParameterGroupNotFoundFault =>
    __isa(o, "CacheParameterGroupNotFoundFault");
}

/**
 * <p>The request cannot be processed because it would exceed the maximum number of cache security groups.</p>
 */
export interface CacheParameterGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace CacheParameterGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: CacheParameterGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheParameterGroupQuotaExceededFault =>
    __isa(o, "CacheParameterGroupQuotaExceededFault");
}

/**
 * <p>Represents the output of a <code>DescribeCacheParameterGroups</code> operation.</p>
 */
export interface CacheParameterGroupsMessage {
  __type?: "CacheParameterGroupsMessage";
  /**
   * <p>A list of cache parameter groups. Each element in the list contains detailed information
   *             about one cache parameter group.</p>
   */
  CacheParameterGroups?: CacheParameterGroup[];

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;
}

export namespace CacheParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: CacheParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheParameterGroupsMessage =>
    __isa(o, "CacheParameterGroupsMessage");
}

/**
 * <p>Status of the cache parameter group.</p>
 */
export interface CacheParameterGroupStatus {
  __type?: "CacheParameterGroupStatus";
  /**
   * <p>A list of the cache node IDs which need to be rebooted for parameter changes to be applied.
   *             A node ID is a numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeIdsToReboot?: string[];

  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

export namespace CacheParameterGroupStatus {
  export const filterSensitiveLog = (obj: CacheParameterGroupStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheParameterGroupStatus =>
    __isa(o, "CacheParameterGroupStatus");
}

/**
 * <p>Represents the output of one of the following operations:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <code>AuthorizeCacheSecurityGroupIngress</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateCacheSecurityGroup</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RevokeCacheSecurityGroupIngress</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface CacheSecurityGroup {
  __type?: "CacheSecurityGroup";
  /**
   * <p>The name of the cache security group.</p>
   */
  CacheSecurityGroupName?: string;

  /**
   * <p>The description of the cache security group.</p>
   */
  Description?: string;

  /**
   * <p>A list of Amazon EC2 security groups that are associated with this cache security group.</p>
   */
  EC2SecurityGroups?: EC2SecurityGroup[];

  /**
   * <p>The AWS account ID of the cache security group owner.</p>
   */
  OwnerId?: string;
}

export namespace CacheSecurityGroup {
  export const filterSensitiveLog = (obj: CacheSecurityGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSecurityGroup =>
    __isa(o, "CacheSecurityGroup");
}

/**
 * <p>A cache security group with the specified name already exists.</p>
 */
export interface CacheSecurityGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheSecurityGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace CacheSecurityGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: CacheSecurityGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSecurityGroupAlreadyExistsFault =>
    __isa(o, "CacheSecurityGroupAlreadyExistsFault");
}

/**
 * <p>Represents a cluster's status within a particular cache security group.</p>
 */
export interface CacheSecurityGroupMembership {
  __type?: "CacheSecurityGroupMembership";
  /**
   * <p>The name of the cache security group.</p>
   */
  CacheSecurityGroupName?: string;

  /**
   * <p>The membership status in the cache security group. The status changes when a cache security group is modified, or when the cache security groups assigned to a cluster are modified.</p>
   */
  Status?: string;
}

export namespace CacheSecurityGroupMembership {
  export const filterSensitiveLog = (
    obj: CacheSecurityGroupMembership
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSecurityGroupMembership =>
    __isa(o, "CacheSecurityGroupMembership");
}

/**
 * <p>Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.</p>
 */
export interface CacheSecurityGroupMessage {
  __type?: "CacheSecurityGroupMessage";
  /**
   * <p>A list of cache security groups. Each element in the list contains detailed information about one group.</p>
   */
  CacheSecurityGroups?: CacheSecurityGroup[];

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;
}

export namespace CacheSecurityGroupMessage {
  export const filterSensitiveLog = (obj: CacheSecurityGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSecurityGroupMessage =>
    __isa(o, "CacheSecurityGroupMessage");
}

/**
 * <p>The requested cache security group name does not refer to an existing cache security group.</p>
 */
export interface CacheSecurityGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheSecurityGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CacheSecurityGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: CacheSecurityGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSecurityGroupNotFoundFault =>
    __isa(o, "CacheSecurityGroupNotFoundFault");
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache security groups.</p>
 */
export interface CacheSecurityGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheSecurityGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace CacheSecurityGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: CacheSecurityGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSecurityGroupQuotaExceededFault =>
    __isa(o, "CacheSecurityGroupQuotaExceededFault");
}

/**
 * <p>Represents the output of one of the following operations:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <code>CreateCacheSubnetGroup</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyCacheSubnetGroup</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface CacheSubnetGroup {
  __type?: "CacheSubnetGroup";
  /**
   * <p>The description of the cache subnet group.</p>
   */
  CacheSubnetGroupDescription?: string;

  /**
   * <p>The name of the cache subnet group.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>A list of subnets associated with the cache subnet group.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.</p>
   */
  VpcId?: string;
}

export namespace CacheSubnetGroup {
  export const filterSensitiveLog = (obj: CacheSubnetGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSubnetGroup =>
    __isa(o, "CacheSubnetGroup");
}

/**
 * <p>The requested cache subnet group name is already in use by an existing cache subnet group.</p>
 */
export interface CacheSubnetGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheSubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace CacheSubnetGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: CacheSubnetGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSubnetGroupAlreadyExistsFault =>
    __isa(o, "CacheSubnetGroupAlreadyExistsFault");
}

/**
 * <p>The requested cache subnet group is currently in use.</p>
 */
export interface CacheSubnetGroupInUse
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheSubnetGroupInUse";
  $fault: "client";
  message?: string;
}

export namespace CacheSubnetGroupInUse {
  export const filterSensitiveLog = (obj: CacheSubnetGroupInUse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSubnetGroupInUse =>
    __isa(o, "CacheSubnetGroupInUse");
}

/**
 * <p>Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.</p>
 */
export interface CacheSubnetGroupMessage {
  __type?: "CacheSubnetGroupMessage";
  /**
   * <p>A list of cache subnet groups. Each element in the list contains detailed information about one group.</p>
   */
  CacheSubnetGroups?: CacheSubnetGroup[];

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;
}

export namespace CacheSubnetGroupMessage {
  export const filterSensitiveLog = (obj: CacheSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSubnetGroupMessage =>
    __isa(o, "CacheSubnetGroupMessage");
}

/**
 * <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
 */
export interface CacheSubnetGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheSubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CacheSubnetGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: CacheSubnetGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSubnetGroupNotFoundFault =>
    __isa(o, "CacheSubnetGroupNotFoundFault");
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache subnet groups.</p>
 */
export interface CacheSubnetGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheSubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace CacheSubnetGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: CacheSubnetGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSubnetGroupQuotaExceededFault =>
    __isa(o, "CacheSubnetGroupQuotaExceededFault");
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of subnets in a cache subnet group.</p>
 */
export interface CacheSubnetQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CacheSubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace CacheSubnetQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: CacheSubnetQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CacheSubnetQuotaExceededFault =>
    __isa(o, "CacheSubnetQuotaExceededFault");
}

export type ChangeType = "immediate" | "requires-reboot";

/**
 * <p>The request cannot be processed because it would exceed the allowed number of clusters per customer.</p>
 */
export interface ClusterQuotaForCustomerExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ClusterQuotaForCustomerExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterQuotaForCustomerExceededFault {
  export const filterSensitiveLog = (
    obj: ClusterQuotaForCustomerExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClusterQuotaForCustomerExceededFault =>
    __isa(o, "ClusterQuotaForCustomerExceededFault");
}

export interface CompleteMigrationMessage {
  __type?: "CompleteMigrationMessage";
  /**
   * <p>Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.</p>
   */
  Force?: boolean;

  /**
   * <p>The ID of the replication group to which data is being migrated.</p>
   */
  ReplicationGroupId: string | undefined;
}

export namespace CompleteMigrationMessage {
  export const filterSensitiveLog = (obj: CompleteMigrationMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompleteMigrationMessage =>
    __isa(o, "CompleteMigrationMessage");
}

export interface CompleteMigrationResponse {
  __type?: "CompleteMigrationResponse";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace CompleteMigrationResponse {
  export const filterSensitiveLog = (obj: CompleteMigrationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompleteMigrationResponse =>
    __isa(o, "CompleteMigrationResponse");
}

/**
 * <p>Node group (shard) configuration options when adding or removing replicas.
 *             Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones. </p>
 */
export interface ConfigureShard {
  __type?: "ConfigureShard";
  /**
   * <p>The number of replicas you want  in this node group at the end of this operation.
   *             The maximum value for <code>NewReplicaCount</code> is 5.
   *             The minimum value depends upon the type of Redis replication group you are working with.</p>
   *         <p>The minimum number of replicas in a shard or replication group is:</p>
   *         <ul>
   *             <li>
   *                 <p>Redis (cluster mode disabled)</p>
   *                 <ul>
   *                   <li>
   *                         <p>If Multi-AZ with Automatic Failover is enabled: 1</p>
   *                   </li>
   *                   <li>
   *                         <p>If Multi-AZ with Automatic Failover is not enable: 0</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p>
   *             </li>
   *          </ul>
   */
  NewReplicaCount: number | undefined;

  /**
   * <p>The 4-digit id for the node group you are configuring. For Redis (cluster mode disabled)
   *             replication groups, the node group id is always 0001. To find a Redis (cluster mode enabled)'s
   *             node group's (shard's) id, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/shard-find-id.html">Finding a Shard's Id</a>.</p>
   */
  NodeGroupId: string | undefined;

  /**
   * <p>A list of <code>PreferredAvailabilityZone</code> strings that specify which availability zones the
   *             replication group's nodes are to be in. The nummber of <code>PreferredAvailabilityZone</code> values must
   *             equal the value of <code>NewReplicaCount</code> plus 1 to account for the primary node. If this member of
   *             <code>ReplicaConfiguration</code> is omitted, ElastiCache for Redis selects the availability zone for
   *             each of the replicas.</p>
   */
  PreferredAvailabilityZones?: string[];
}

export namespace ConfigureShard {
  export const filterSensitiveLog = (obj: ConfigureShard): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigureShard =>
    __isa(o, "ConfigureShard");
}

/**
 * <p>Represents the input of a <code>CopySnapshotMessage</code> operation.</p>
 */
export interface CopySnapshotMessage {
  __type?: "CopySnapshotMessage";
  /**
   * <p>The ID of the KMS key used to encrypt the target snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of an existing snapshot from which to make a copy.</p>
   */
  SourceSnapshotName: string | undefined;

  /**
   * <p>The Amazon S3 bucket to which the snapshot is exported.
   *             This parameter is used only when exporting a snapshot for external access.</p>
   *         <p>When using this parameter to export a snapshot,
   *             be sure Amazon ElastiCache has the needed permissions to this S3 bucket.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the <i>Amazon ElastiCache User Guide</i>.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Snapshots.Exporting.html">Exporting a Snapshot</a> in the <i>Amazon ElastiCache User Guide</i>.</p>
   */
  TargetBucket?: string;

  /**
   * <p>A name for the snapshot copy.
   *             ElastiCache does not permit overwriting a snapshot, therefore
   *             this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting.</p>
   */
  TargetSnapshotName: string | undefined;
}

export namespace CopySnapshotMessage {
  export const filterSensitiveLog = (obj: CopySnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopySnapshotMessage =>
    __isa(o, "CopySnapshotMessage");
}

export interface CopySnapshotResult {
  __type?: "CopySnapshotResult";
  /**
   * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

export namespace CopySnapshotResult {
  export const filterSensitiveLog = (obj: CopySnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopySnapshotResult =>
    __isa(o, "CopySnapshotResult");
}

/**
 * <p>Represents the input of a CreateCacheCluster operation.</p>
 */
export interface CreateCacheClusterMessage {
  __type?: "CreateCacheClusterMessage";
  /**
   * <p>Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or
   *             created across multiple Availability Zones in the cluster's region.</p>
   *         <p>This parameter is only supported for Memcached clusters.</p>
   *         <p>If the <code>AZMode</code> and <code>PreferredAvailabilityZones</code> are not specified,
   *             ElastiCache assumes <code>single-az</code> mode.</p>
   */
  AZMode?: AZMode | string;

  /**
   * <p>
   *             <b>Reserved parameter.</b>
   *             The password used to access a password protected server.</p>
   *         <p>Password constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be only printable ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 16 characters and no more than 128
   *                 characters in length.</p>
   *             </li>
   *             <li>
   *                <p>The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>
   */
  AuthToken?: string;

  /**
   * <p>This parameter is currently disabled.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The node group (shard) identifier. This parameter is stored as a lowercase string.</p>
   *          <p>
   *             <b>Constraints:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>A name must contain from 1 to 50 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  CacheClusterId: string | undefined;

  /**
   * <p>The compute and memory capacity of the nodes in the node group (shard).</p>
   *         <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   * 		       <ul>
   *             <li>
   *                <p>General purpose:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   *     							          <p>
   *                         <b>M5 node types:</b>
   *     						              <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *
   *
   *     						           </p>
   *
   *
   * 						               <p>
   *                         <b>M4 node types:</b>
   *     						              <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *
   *
   *     				             <p>
   *                         <b>T2 node types:</b>
   * 					                   <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *
   *
   *
   *
   *     						        </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 						               <p>
   *                         <b>T1 node types:</b>
   * 					                   <code>cache.t1.micro</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M1 node types:</b>
   * 						                  <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M3 node types:</b>
   *     						              <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *
   * 						            </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *
   * 				           <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 			                  <p>
   *                         <b>C1 node types:</b>
   * 			                     <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   * 					                <p>
   *                         <b>R5 node types:</b>
   *     					               <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *
   *     					            <p>
   *                         <b>R4 node types:</b>
   *     					               <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *     					         </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   *                         <p>
   *                         <b>M2 node types:</b>
   *     					               <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *
   *     						           <p>
   *                         <b>R3 node types:</b>
   *     					               <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *
   *     						        </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Additional node type info</b>
   *          </p>
   * 		       <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by default.</p>
   *             </li>
   *             <li>
   *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis configuration variables <code>appendonly</code> and
   * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
   *             </li>
   *          </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The name of the parameter group to associate with this cluster.
   *             If this argument is omitted, the default parameter group for the specified engine is used.
   *             You cannot use any parameter group which has <code>cluster-enabled='yes'</code> when creating a cluster.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>A list of security group names to associate with this cluster.</p>
   *         <p>Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  CacheSecurityGroupNames?: string[];

  /**
   * <p>The name of the subnet group to be used for the cluster.</p>
   *         <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   *         <important>
   *             <p>If you're going to launch your cluster in an Amazon VPC,
   *                 you need to create a subnet group before you start creating a cluster.
   *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p>
   *          </important>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>The name of the cache engine to be used for this cluster.</p>
   *         <p>Valid values for this parameter are: <code>memcached</code> | <code>redis</code>
   *          </p>
   */
  Engine?: string;

  /**
   * <p>The version number of the cache engine to be used for this cluster.
   *             To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.</p>
   *
   *         <p>
   *             <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version.
   *             If you want to use an earlier engine version,
   *             you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>
   */
  EngineVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic
   *           to which notifications are sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be the same as the cluster owner.</p>
   *          </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p>The initial number of cache nodes that the cluster has.</p>
   *         <p>For clusters running Redis, this value must be 1.
   *     For clusters running Memcached, this value must be between 1 and 20.</p>
   *         <p>If you need more than 20 nodes for your Memcached cluster,
   *             please fill out the ElastiCache Limit Increase Request form at <a href="http://aws.amazon.com/contact-us/elasticache-node-limit-request/">http://aws.amazon.com/contact-us/elasticache-node-limit-request/</a>.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>The port number on which each of the cache nodes  accepts connections.</p>
   */
  Port?: number;

  /**
   * <p>The EC2 Availability Zone in which the cluster is created.</p>
   *         <p>All nodes belonging to this Memcached cluster are placed in the preferred Availability Zone.
   *             If you want to create your nodes across multiple Availability Zones, use <code>PreferredAvailabilityZones</code>.</p>
   *         <p>Default: System chosen Availability Zone.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.</p>
   *         <p>This option is only supported on Memcached.</p>
   *         <note>
   *             <p>If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group.</p>
   *             <p>The number of Availability Zones listed must equal the value of <code>NumCacheNodes</code>.</p>
   *         </note>
   *         <p>If you want all the nodes in the same Availability Zone, use <code>PreferredAvailabilityZone</code> instead, or
   *             repeat the Availability Zone multiple times in the list.</p>
   *         <p>Default: System chosen Availability Zones.</p>
   */
  PreferredAvailabilityZones?: string[];

  /**
   * <p>Specifies the weekly time range during which maintenance
   *             on the cluster is performed. It is specified as a range in
   *             the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *             maintenance window is a 60 minute period.
   *             Valid values for <code>ddd</code> are:</p>
   *
   *          <p>Specifies the weekly time range during which maintenance
   *    on the cluster is performed. It is specified as a range in
   *    the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *    maintenance window is a 60 minute period.</p>
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.</p>
   *         <p>If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones.</p>
   *         <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   */
  ReplicationGroupId?: string;

  /**
   * <p>One or more VPC security groups associated with the cluster.</p>
   *         <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies
   *             a Redis RDB snapshot file stored in Amazon S3.
   *             The snapshot file is used to populate the node group (shard).
   *             The Amazon S3 object name in the ARN cannot contain any commas.</p>
   *         <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   *         <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code>
   *          </p>
   */
  SnapshotArns?: string[];

  /**
   * <p>The name of a Redis snapshot from which to restore data into the new node group (shard).
   *             The snapshot status changes to <code>restoring</code> while the new node group (shard) is being created.</p>
   *         <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   */
  SnapshotName?: string;

  /**
   * <p>The number of days for which ElastiCache retains automatic snapshots before deleting them.
   *           For example, if you set <code>SnapshotRetentionLimit</code> to 5,
   *           a snapshot taken today is retained for 5 days before being deleted.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   *          <p>Default: 0 (i.e., automatic backups are disabled for this cache cluster).</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   *          <p>If you do not specify this parameter, ElastiCache  automatically chooses an appropriate time range.</p>
   *         <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   */
  SnapshotWindow?: string;

  /**
   * <p>A list of cost allocation tags to be added to this resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateCacheClusterMessage {
  export const filterSensitiveLog = (obj: CreateCacheClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCacheClusterMessage =>
    __isa(o, "CreateCacheClusterMessage");
}

export interface CreateCacheClusterResult {
  __type?: "CreateCacheClusterResult";
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: CacheCluster;
}

export namespace CreateCacheClusterResult {
  export const filterSensitiveLog = (obj: CreateCacheClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCacheClusterResult =>
    __isa(o, "CreateCacheClusterResult");
}

/**
 * <p>Represents the input of a <code>CreateCacheParameterGroup</code> operation.</p>
 */
export interface CreateCacheParameterGroupMessage {
  __type?: "CreateCacheParameterGroupMessage";
  /**
   * <p>The name of the cache parameter group family that the cache parameter group can be used with.</p>
   *         <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *     </p>
   */
  CacheParameterGroupFamily: string | undefined;

  /**
   * <p>A user-specified name for the cache parameter group.</p>
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>A user-specified description for the cache parameter group.</p>
   */
  Description: string | undefined;
}

export namespace CreateCacheParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateCacheParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCacheParameterGroupMessage =>
    __isa(o, "CreateCacheParameterGroupMessage");
}

export interface CreateCacheParameterGroupResult {
  __type?: "CreateCacheParameterGroupResult";
  /**
   * <p>Represents the output of a <code>CreateCacheParameterGroup</code> operation.</p>
   */
  CacheParameterGroup?: CacheParameterGroup;
}

export namespace CreateCacheParameterGroupResult {
  export const filterSensitiveLog = (
    obj: CreateCacheParameterGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCacheParameterGroupResult =>
    __isa(o, "CreateCacheParameterGroupResult");
}

/**
 * <p>Represents the input of a <code>CreateCacheSecurityGroup</code> operation.</p>
 */
export interface CreateCacheSecurityGroupMessage {
  __type?: "CreateCacheSecurityGroupMessage";
  /**
   * <p>A name for the cache security group. This value is stored as a lowercase string.</p>
   *         <p>Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default".</p>
   *         <p>Example: <code>mysecuritygroup</code>
   *          </p>
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>A description for the cache security group.</p>
   */
  Description: string | undefined;
}

export namespace CreateCacheSecurityGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateCacheSecurityGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCacheSecurityGroupMessage =>
    __isa(o, "CreateCacheSecurityGroupMessage");
}

export interface CreateCacheSecurityGroupResult {
  __type?: "CreateCacheSecurityGroupResult";
  /**
   * <p>Represents the output of one of the following operations:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>AuthorizeCacheSecurityGroupIngress</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateCacheSecurityGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RevokeCacheSecurityGroupIngress</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CacheSecurityGroup?: CacheSecurityGroup;
}

export namespace CreateCacheSecurityGroupResult {
  export const filterSensitiveLog = (
    obj: CreateCacheSecurityGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCacheSecurityGroupResult =>
    __isa(o, "CreateCacheSecurityGroupResult");
}

/**
 * <p>Represents the input of a <code>CreateCacheSubnetGroup</code> operation.</p>
 */
export interface CreateCacheSubnetGroupMessage {
  __type?: "CreateCacheSubnetGroupMessage";
  /**
   * <p>A description for the cache subnet group.</p>
   */
  CacheSubnetGroupDescription: string | undefined;

  /**
   * <p>A name for the cache subnet group. This value is stored as a lowercase string.</p>
   *         <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *         <p>Example: <code>mysubnetgroup</code>
   *          </p>
   */
  CacheSubnetGroupName: string | undefined;

  /**
   * <p>A list of VPC subnet IDs for the cache subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace CreateCacheSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateCacheSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCacheSubnetGroupMessage =>
    __isa(o, "CreateCacheSubnetGroupMessage");
}

export interface CreateCacheSubnetGroupResult {
  __type?: "CreateCacheSubnetGroupResult";
  /**
   * <p>Represents the output of one of the following operations:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CreateCacheSubnetGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ModifyCacheSubnetGroup</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CacheSubnetGroup?: CacheSubnetGroup;
}

export namespace CreateCacheSubnetGroupResult {
  export const filterSensitiveLog = (
    obj: CreateCacheSubnetGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCacheSubnetGroupResult =>
    __isa(o, "CreateCacheSubnetGroupResult");
}

/**
 * <p>Represents the input of a <code>CreateReplicationGroup</code> operation.</p>
 */
export interface CreateReplicationGroupMessage {
  __type?: "CreateReplicationGroupMessage";
  /**
   * <p>A flag that enables encryption at rest when set to <code>true</code>.</p>
   *         <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the replication
   *             group is created.
   *             To enable encryption at rest on a replication group you must set <code>AtRestEncryptionEnabled</code> to
   *             <code>true</code> when you create the replication group. </p>
   *         <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  AtRestEncryptionEnabled?: boolean;

  /**
   * <p>
   *             <b>Reserved parameter.</b>
   *             The password used to access a password protected server.</p>
   *         <p>
   *             <code>AuthToken</code> can be specified only on replication groups where <code>TransitEncryptionEnabled</code> is
   *             <code>true</code>.</p>
   *         <important>
   *             <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>,
   *             an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p>
   *          </important>
   *         <p>Password constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be only printable ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 16 characters and no more than 128
   *                 characters in length.</p>
   *             </li>
   *             <li>
   *                <p>The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>
   */
  AuthToken?: string;

  /**
   * <p>This parameter is currently disabled.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.</p>
   *         <p>If <code>true</code>, Multi-AZ is enabled for this replication group.
   *             If <code>false</code>, Multi-AZ is disabled for this replication group.</p>
   *         <p>
   *             <code>AutomaticFailoverEnabled</code> must be enabled for Redis (cluster mode enabled) replication groups.</p>
   *         <p>Default: false</p>
   *         <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p>
   *          <ul>
   *             <li>
   *                <p>Redis versions earlier than 2.8.6.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode disabled): T1 node types.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode enabled): T1 node types.</p>
   *             </li>
   *          </ul>
   */
  AutomaticFailoverEnabled?: boolean;

  /**
   * <p>The compute and memory capacity of the nodes in the node group (shard).</p>
   *         <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   * 		       <ul>
   *             <li>
   *                <p>General purpose:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   *     							          <p>
   *                         <b>M5 node types:</b>
   *     						              <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *
   *
   *     						           </p>
   *
   *
   * 						               <p>
   *                         <b>M4 node types:</b>
   *     						              <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *
   *
   *     				             <p>
   *                         <b>T2 node types:</b>
   * 					                   <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *
   *
   *
   *
   *     						        </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 						               <p>
   *                         <b>T1 node types:</b>
   * 					                   <code>cache.t1.micro</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M1 node types:</b>
   * 						                  <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M3 node types:</b>
   *     						              <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *
   * 						            </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *
   * 				           <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 			                  <p>
   *                         <b>C1 node types:</b>
   * 			                     <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   * 					                <p>
   *                         <b>R5 node types:</b>
   *     					               <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *
   *     					            <p>
   *                         <b>R4 node types:</b>
   *     					               <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *     					         </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   *                         <p>
   *                         <b>M2 node types:</b>
   *     					               <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *
   *     						           <p>
   *                         <b>R3 node types:</b>
   *     					               <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *
   *     						        </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Additional node type info</b>
   *          </p>
   * 		       <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by default.</p>
   *             </li>
   *             <li>
   *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis configuration variables <code>appendonly</code> and
   * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
   *             </li>
   *          </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The name of the parameter group to associate with this replication group.
   *             If this argument is omitted, the default cache parameter group for the specified engine is
   *             used.</p>
   *         <note>
   *             <p>If you are restoring to an engine version that is different than the original, you must specify the default version of that version. For example, <code>CacheParameterGroupName=default.redis4.0</code>.</p>
   *          </note>
   *         <p>If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group,
   *             we recommend that you specify the parameter group by name. </p>
   *         <ul>
   *             <li>
   *                <p>To create a Redis (cluster mode disabled) replication group, use <code>CacheParameterGroupName=default.redis3.2</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a Redis (cluster mode enabled) replication group, use <code>CacheParameterGroupName=default.redis3.2.cluster.on</code>.</p>
   *             </li>
   *          </ul>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>A list of cache security group names to associate with this replication group.</p>
   */
  CacheSecurityGroupNames?: string[];

  /**
   * <p>The name of the cache subnet group to be used for the replication group.</p>
   *         <important>
   *             <p>If you're going to launch your cluster in an Amazon VPC,
   *                 you need to create a subnet group before you start creating a cluster.
   *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p>
   *          </important>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>The name of the cache engine to be used for the clusters in this replication group.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the cache engine to be used for the clusters in this replication group.
   *             To view the supported cache engine versions, use the <code>DescribeCacheEngineVersions</code> operation.</p>
   *
   *         <p>
   *             <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>) in the <i>ElastiCache User Guide</i>,
   *             but you cannot downgrade to an earlier engine version.
   *             If you want to use an earlier engine version,
   *             you must delete the existing cluster or replication group and
   *             create it anew with the earlier engine version. </p>
   */
  EngineVersion?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the disk on the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of node group (shard) configuration options.
   *             Each node group (shard) configuration has the following members:
   *             <code>PrimaryAvailabilityZone</code>,
   *             <code>ReplicaAvailabilityZones</code>,
   *             <code>ReplicaCount</code>, and
   *             <code>Slots</code>.</p>
   *         <p>If you're creating a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group, you can use this parameter to
   *             individually configure each node group (shard), or you can omit this parameter. However, when seeding a
   *             Redis (cluster mode enabled) cluster from a S3 rdb file, you must configure each node group (shard) using this parameter
   *             because you must specify the slots for each node group.</p>
   */
  NodeGroupConfiguration?: NodeGroupConfiguration[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)
   *             topic to which notifications are sent.</p>
   *         <note>
   *             <p>The Amazon SNS topic owner must be the same as the cluster owner.</p>
   *          </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p>The number of clusters this replication group initially has.</p>
   *         <p>This parameter is not used if there is more than one node group (shard).
   *             You should use <code>ReplicasPerNodeGroup</code> instead.</p>
   *         <p>If <code>AutomaticFailoverEnabled</code> is <code>true</code>, the value of this parameter must be at least 2.
   *             If <code>AutomaticFailoverEnabled</code> is <code>false</code> you can omit this parameter (it will default to 1), or you
   *             can explicitly set it to a value between 2 and 6.</p>
   *         <p>The maximum permitted value for <code>NumCacheClusters</code> is 6 (1 primary plus 5 replicas).</p>
   */
  NumCacheClusters?: number;

  /**
   * <p>An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group.
   *             For Redis (cluster mode disabled) either omit this parameter or set it to 1.</p>
   *         <p>Default: 1</p>
   */
  NumNodeGroups?: number;

  /**
   * <p>The port number on which each member of the replication group accepts connections.</p>
   */
  Port?: number;

  /**
   * <p>A list of EC2 Availability Zones in which the replication group's clusters are created.
   *             The order of the Availability Zones in the list is the order in which clusters are allocated.
   *             The primary cluster is created in the first AZ in the list.</p>
   *         <p>This parameter is not used if there is more than one node group (shard).
   *             You should use <code>NodeGroupConfiguration</code> instead.</p>
   *         <note>
   *             <p>If you are creating your replication group in an Amazon VPC (recommended),
   *             you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.</p>
   *             <p>The number of Availability Zones listed must equal the value of <code>NumCacheClusters</code>.</p>
   *          </note>
   *         <p>Default: system chosen Availability Zones.</p>
   */
  PreferredCacheClusterAZs?: string[];

  /**
   * <p>Specifies the weekly time range during which maintenance
   *             on the cluster is performed. It is specified as a range in
   *             the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *             maintenance window is a 60 minute period.
   *             Valid values for <code>ddd</code> are:</p>
   *
   *          <p>Specifies the weekly time range during which maintenance
   *    on the cluster is performed. It is specified as a range in
   *    the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *    maintenance window is a 60 minute period.</p>
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The identifier of the cluster that serves as the primary for this replication
   *             group. This cluster must already exist and have a status of <code>available</code>.</p>
   *         <p>This parameter is not required if <code>NumCacheClusters</code>,
   *             <code>NumNodeGroups</code>, or
   *             <code>ReplicasPerNodeGroup</code> is specified.</p>
   */
  PrimaryClusterId?: string;

  /**
   * <p>An optional parameter that specifies the number of replica nodes in each node group (shard).
   *             Valid values are 0 to 5.</p>
   */
  ReplicasPerNodeGroup?: number;

  /**
   * <p>A user-created description for the replication group.</p>
   */
  ReplicationGroupDescription: string | undefined;

  /**
   * <p>The replication group identifier. This parameter is stored as a lowercase string.</p>
   *
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>A name must contain from 1 to 40 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>One or more Amazon VPC security groups associated with this replication group.</p>
   *         <p>Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of Amazon Resource Names (ARN) that uniquely identify
   *           the Redis RDB snapshot files stored in Amazon S3.
   *           The snapshot files are used to populate the new replication group.
   *           The Amazon S3 object name in the ARN cannot contain any commas.
   *           The new replication group will have the number of node groups (console: shards)
   *           specified by the parameter <i>NumNodeGroups</i> or the number of
   *           node groups configured by <i>NodeGroupConfiguration</i> regardless
   *           of the number of ARNs specified here.</p>
   *          <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code>
   *          </p>
   */
  SnapshotArns?: string[];

  /**
   * <p>The name of a snapshot from which to restore data into the new replication group.
   *             The snapshot status changes to <code>restoring</code> while the new replication group is being created.</p>
   */
  SnapshotName?: string;

  /**
   * <p>The number of days for which ElastiCache retains automatic snapshots before deleting them.
   *             For example, if you set <code>SnapshotRetentionLimit</code> to 5,
   *             a snapshot that was taken today is retained for 5 days before being deleted.</p>
   *          <p>Default: 0 (i.e., automatic backups are disabled for this cluster).</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   *          <p>If you do not specify this parameter, ElastiCache  automatically chooses an appropriate time range.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>A list of cost allocation tags to be added to this resource.
   *           Tags are comma-separated key,value pairs (e.g. Key=<code>myKey</code>, Value=<code>myKeyValue</code>. You can include multiple tags as shown following:
   *           Key=<code>myKey</code>, Value=<code>myKeyValue</code> Key=<code>mySecondKey</code>, Value=<code>mySecondKeyValue</code>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *         <p>You cannot modify the value of <code>TransitEncryptionEnabled</code>
   *             after the cluster is created. To enable in-transit encryption on a cluster
   *             you must set <code>TransitEncryptionEnabled</code> to <code>true</code>
   *             when you create a cluster.</p>
   *         <p>This parameter is valid only if the <code>Engine</code> parameter is <code>redis</code>,
   *             the <code>EngineVersion</code> parameter is <code>3.2.6</code>, <code>4.x</code> or later,
   *             and the cluster is being created in an Amazon VPC.</p>
   *         <p>If you enable in-transit encryption, you must also specify a value for
   *             <code>CacheSubnetGroup</code>.</p>
   *         <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   *         <important>
   *             <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>,
   *             an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p>
   *          </important>
   */
  TransitEncryptionEnabled?: boolean;
}

export namespace CreateReplicationGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateReplicationGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationGroupMessage =>
    __isa(o, "CreateReplicationGroupMessage");
}

export interface CreateReplicationGroupResult {
  __type?: "CreateReplicationGroupResult";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace CreateReplicationGroupResult {
  export const filterSensitiveLog = (
    obj: CreateReplicationGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationGroupResult =>
    __isa(o, "CreateReplicationGroupResult");
}

/**
 * <p>Represents the input of a <code>CreateSnapshot</code> operation.</p>
 */
export interface CreateSnapshotMessage {
  __type?: "CreateSnapshotMessage";
  /**
   * <p>The identifier of an existing cluster. The snapshot is created from this cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The identifier of an existing replication group. The snapshot is created from this replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>A name for the snapshot being created.</p>
   */
  SnapshotName: string | undefined;
}

export namespace CreateSnapshotMessage {
  export const filterSensitiveLog = (obj: CreateSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotMessage =>
    __isa(o, "CreateSnapshotMessage");
}

export interface CreateSnapshotResult {
  __type?: "CreateSnapshotResult";
  /**
   * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

export namespace CreateSnapshotResult {
  export const filterSensitiveLog = (obj: CreateSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSnapshotResult =>
    __isa(o, "CreateSnapshotResult");
}

/**
 * <p>The endpoint from which data should be migrated.</p>
 */
export interface CustomerNodeEndpoint {
  __type?: "CustomerNodeEndpoint";
  /**
   * <p>The address of the node endpoint</p>
   */
  Address?: string;

  /**
   * <p>The port of the node endpoint</p>
   */
  Port?: number;
}

export namespace CustomerNodeEndpoint {
  export const filterSensitiveLog = (obj: CustomerNodeEndpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomerNodeEndpoint =>
    __isa(o, "CustomerNodeEndpoint");
}

export interface DecreaseReplicaCountMessage {
  __type?: "DecreaseReplicaCountMessage";
  /**
   * <p>If <code>True</code>, the number of replica nodes is decreased immediately.
   *
   *             <code>ApplyImmediately=False</code> is not currently supported.</p>
   */
  ApplyImmediately: boolean | undefined;

  /**
   * <p>The number of read replica nodes you want at the completion of this operation.
   *             For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the
   *             replication group. For Redis (cluster mode enabled) replication groups, this is the number of
   *             replica nodes in each of the replication group's node groups.</p>
   *         <p>The minimum number of replicas in a shard or replication group is:</p>
   *         <ul>
   *             <li>
   *                 <p>Redis (cluster mode disabled)</p>
   *                 <ul>
   *                   <li>
   *                         <p>If Multi-AZ with Automatic Failover is enabled: 1</p>
   *                   </li>
   *                   <li>
   *                         <p>If Multi-AZ with Automatic Failover is not enabled: 0</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p>
   *             </li>
   *          </ul>
   */
  NewReplicaCount?: number;

  /**
   * <p>A list of <code>ConfigureShard</code> objects that can be used to configure each shard
   *             in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members:
   *             <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.</p>
   */
  ReplicaConfiguration?: ConfigureShard[];

  /**
   * <p>A list of the node ids to remove from the replication group or node group (shard).</p>
   */
  ReplicasToRemove?: string[];

  /**
   * <p>The id of the replication group from which you want to remove replica nodes.</p>
   */
  ReplicationGroupId: string | undefined;
}

export namespace DecreaseReplicaCountMessage {
  export const filterSensitiveLog = (
    obj: DecreaseReplicaCountMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DecreaseReplicaCountMessage =>
    __isa(o, "DecreaseReplicaCountMessage");
}

export interface DecreaseReplicaCountResult {
  __type?: "DecreaseReplicaCountResult";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace DecreaseReplicaCountResult {
  export const filterSensitiveLog = (obj: DecreaseReplicaCountResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DecreaseReplicaCountResult =>
    __isa(o, "DecreaseReplicaCountResult");
}

/**
 * <p>Represents the input of a <code>DeleteCacheCluster</code> operation.</p>
 */
export interface DeleteCacheClusterMessage {
  __type?: "DeleteCacheClusterMessage";
  /**
   * <p>The cluster identifier for the cluster to be deleted. This parameter is not case sensitive.</p>
   */
  CacheClusterId: string | undefined;

  /**
   * <p>The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot.
   *             ElastiCache creates the snapshot, and then deletes the cluster immediately afterward.</p>
   */
  FinalSnapshotIdentifier?: string;
}

export namespace DeleteCacheClusterMessage {
  export const filterSensitiveLog = (obj: DeleteCacheClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCacheClusterMessage =>
    __isa(o, "DeleteCacheClusterMessage");
}

export interface DeleteCacheClusterResult {
  __type?: "DeleteCacheClusterResult";
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: CacheCluster;
}

export namespace DeleteCacheClusterResult {
  export const filterSensitiveLog = (obj: DeleteCacheClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCacheClusterResult =>
    __isa(o, "DeleteCacheClusterResult");
}

/**
 * <p>Represents the input of a <code>DeleteCacheParameterGroup</code> operation.</p>
 */
export interface DeleteCacheParameterGroupMessage {
  __type?: "DeleteCacheParameterGroupMessage";
  /**
   * <p>The name of the cache parameter group to delete.</p>
   *         <note>
   *             <p>The specified cache security group must not be associated with any clusters.</p>
   *          </note>
   */
  CacheParameterGroupName: string | undefined;
}

export namespace DeleteCacheParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteCacheParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCacheParameterGroupMessage =>
    __isa(o, "DeleteCacheParameterGroupMessage");
}

/**
 * <p>Represents the input of a <code>DeleteCacheSecurityGroup</code> operation.</p>
 */
export interface DeleteCacheSecurityGroupMessage {
  __type?: "DeleteCacheSecurityGroupMessage";
  /**
   * <p>The name of the cache security group to delete.</p>
   *         <note>
   *             <p>You cannot delete the default security group.</p>
   *          </note>
   */
  CacheSecurityGroupName: string | undefined;
}

export namespace DeleteCacheSecurityGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteCacheSecurityGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCacheSecurityGroupMessage =>
    __isa(o, "DeleteCacheSecurityGroupMessage");
}

/**
 * <p>Represents the input of a <code>DeleteCacheSubnetGroup</code> operation.</p>
 */
export interface DeleteCacheSubnetGroupMessage {
  __type?: "DeleteCacheSubnetGroupMessage";
  /**
   * <p>The name of the cache subnet group to delete.</p>
   *         <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   */
  CacheSubnetGroupName: string | undefined;
}

export namespace DeleteCacheSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteCacheSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCacheSubnetGroupMessage =>
    __isa(o, "DeleteCacheSubnetGroupMessage");
}

/**
 * <p>Represents the input of a <code>DeleteReplicationGroup</code> operation.</p>
 */
export interface DeleteReplicationGroupMessage {
  __type?: "DeleteReplicationGroupMessage";
  /**
   * <p>The name of a final node group (shard) snapshot.
   *             ElastiCache creates the snapshot from the primary node in the cluster,
   *             rather than one of the replicas; this is to ensure that it captures the freshest data.
   *             After the final snapshot is taken, the replication group is immediately deleted.</p>
   */
  FinalSnapshotIdentifier?: string;

  /**
   * <p>The identifier for the cluster to be deleted. This parameter is not case sensitive.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>If set to <code>true</code>, all of the read replicas are deleted,
   *             but the primary node is retained.</p>
   */
  RetainPrimaryCluster?: boolean;
}

export namespace DeleteReplicationGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteReplicationGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationGroupMessage =>
    __isa(o, "DeleteReplicationGroupMessage");
}

export interface DeleteReplicationGroupResult {
  __type?: "DeleteReplicationGroupResult";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace DeleteReplicationGroupResult {
  export const filterSensitiveLog = (
    obj: DeleteReplicationGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationGroupResult =>
    __isa(o, "DeleteReplicationGroupResult");
}

/**
 * <p>Represents the input of a <code>DeleteSnapshot</code> operation.</p>
 */
export interface DeleteSnapshotMessage {
  __type?: "DeleteSnapshotMessage";
  /**
   * <p>The name of the snapshot to be deleted.</p>
   */
  SnapshotName: string | undefined;
}

export namespace DeleteSnapshotMessage {
  export const filterSensitiveLog = (obj: DeleteSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSnapshotMessage =>
    __isa(o, "DeleteSnapshotMessage");
}

export interface DeleteSnapshotResult {
  __type?: "DeleteSnapshotResult";
  /**
   * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

export namespace DeleteSnapshotResult {
  export const filterSensitiveLog = (obj: DeleteSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSnapshotResult =>
    __isa(o, "DeleteSnapshotResult");
}

/**
 * <p>Represents the input of a <code>DescribeCacheClusters</code> operation.</p>
 */
export interface DescribeCacheClustersMessage {
  __type?: "DescribeCacheClustersMessage";
  /**
   * <p>The user-supplied cluster identifier. If this parameter is specified, only information
   *             about that specific cluster is returned. This parameter isn't case sensitive.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional flag that can be included in the <code>DescribeCacheCluster</code> request
   *             to show only nodes (API/CLI: clusters) that are not members of a replication group.
   *             In practice, this mean Memcached and single node Redis clusters.</p>
   */
  ShowCacheClustersNotInReplicationGroups?: boolean;

  /**
   * <p>An optional flag that can be included in the <code>DescribeCacheCluster</code> request
   *             to retrieve information about the individual cache nodes.</p>
   */
  ShowCacheNodeInfo?: boolean;
}

export namespace DescribeCacheClustersMessage {
  export const filterSensitiveLog = (
    obj: DescribeCacheClustersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCacheClustersMessage =>
    __isa(o, "DescribeCacheClustersMessage");
}

/**
 * <p>Represents the input of a <code>DescribeCacheEngineVersions</code> operation.</p>
 */
export interface DescribeCacheEngineVersionsMessage {
  __type?: "DescribeCacheEngineVersionsMessage";
  /**
   * <p>The name of a specific cache parameter group family to return details for.</p>
   *         <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *     </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>If <code>true</code>, specifies that only the default version of the specified engine or engine
   *             and major version combination is to be returned.</p>
   */
  DefaultOnly?: boolean;

  /**
   * <p>The cache engine to return. Valid values: <code>memcached</code> | <code>redis</code>
   *          </p>
   */
  Engine?: string;

  /**
   * <p>The cache engine version to return.</p>
   *         <p>Example: <code>1.4.14</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeCacheEngineVersionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeCacheEngineVersionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCacheEngineVersionsMessage =>
    __isa(o, "DescribeCacheEngineVersionsMessage");
}

/**
 * <p>Represents the input of a <code>DescribeCacheParameterGroups</code> operation.</p>
 */
export interface DescribeCacheParameterGroupsMessage {
  __type?: "DescribeCacheParameterGroupsMessage";
  /**
   * <p>The name of a specific cache parameter group to return details for.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeCacheParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeCacheParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCacheParameterGroupsMessage =>
    __isa(o, "DescribeCacheParameterGroupsMessage");
}

/**
 * <p>Represents the input of a <code>DescribeCacheParameters</code> operation.</p>
 */
export interface DescribeCacheParametersMessage {
  __type?: "DescribeCacheParametersMessage";
  /**
   * <p>The name of a specific cache parameter group to return details for.</p>
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The parameter types to return.</p>
   *         <p>Valid values: <code>user</code> | <code>system</code> | <code>engine-default</code>
   *          </p>
   */
  Source?: string;
}

export namespace DescribeCacheParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeCacheParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCacheParametersMessage =>
    __isa(o, "DescribeCacheParametersMessage");
}

/**
 * <p>Represents the input of a <code>DescribeCacheSecurityGroups</code> operation.</p>
 */
export interface DescribeCacheSecurityGroupsMessage {
  __type?: "DescribeCacheSecurityGroupsMessage";
  /**
   * <p>The name of the cache security group to return details for.</p>
   */
  CacheSecurityGroupName?: string;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeCacheSecurityGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeCacheSecurityGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCacheSecurityGroupsMessage =>
    __isa(o, "DescribeCacheSecurityGroupsMessage");
}

/**
 * <p>Represents the input of a <code>DescribeCacheSubnetGroups</code> operation.</p>
 */
export interface DescribeCacheSubnetGroupsMessage {
  __type?: "DescribeCacheSubnetGroupsMessage";
  /**
   * <p>The name of the cache subnet group to return details for.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeCacheSubnetGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeCacheSubnetGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCacheSubnetGroupsMessage =>
    __isa(o, "DescribeCacheSubnetGroupsMessage");
}

/**
 * <p>Represents the input of a <code>DescribeEngineDefaultParameters</code> operation.</p>
 */
export interface DescribeEngineDefaultParametersMessage {
  __type?: "DescribeEngineDefaultParametersMessage";
  /**
   * <p>The name of the cache parameter group family.</p>
   *         <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *     </p>
   */
  CacheParameterGroupFamily: string | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeEngineDefaultParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeEngineDefaultParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEngineDefaultParametersMessage =>
    __isa(o, "DescribeEngineDefaultParametersMessage");
}

export interface DescribeEngineDefaultParametersResult {
  __type?: "DescribeEngineDefaultParametersResult";
  /**
   * <p>Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.</p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultParametersResult {
  export const filterSensitiveLog = (
    obj: DescribeEngineDefaultParametersResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEngineDefaultParametersResult =>
    __isa(o, "DescribeEngineDefaultParametersResult");
}

/**
 * <p>Represents the input of a <code>DescribeEvents</code> operation.</p>
 */
export interface DescribeEventsMessage {
  __type?: "DescribeEventsMessage";
  /**
   * <p>The number of minutes worth of events to retrieve.</p>
   */
  Duration?: number;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p>
   *         <p>
   *             <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
   */
  EndTime?: Date;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the event source for which events are returned.
   *             If not specified, all sources are included in the response.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for.
   *             If no value is specified, all events are returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.</p>
   *         <p>
   *             <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
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
 * <p>Represents the input of a <code>DescribeReplicationGroups</code> operation.</p>
 */
export interface DescribeReplicationGroupsMessage {
  __type?: "DescribeReplicationGroupsMessage";
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier for the replication group to be described. This parameter is not case sensitive.</p>
   *         <p>If you do not specify this parameter, information about all replication groups is returned.</p>
   */
  ReplicationGroupId?: string;
}

export namespace DescribeReplicationGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeReplicationGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReplicationGroupsMessage =>
    __isa(o, "DescribeReplicationGroupsMessage");
}

/**
 * <p>Represents the input of a <code>DescribeReservedCacheNodes</code> operation.</p>
 */
export interface DescribeReservedCacheNodesMessage {
  __type?: "DescribeReservedCacheNodesMessage";
  /**
   * <p>The cache node type filter value.
   *             Use this parameter to show only those reservations matching the specified cache node type.</p>
   *
   *         <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   * 		       <ul>
   *             <li>
   *                <p>General purpose:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   *     							          <p>
   *                         <b>M5 node types:</b>
   *     						              <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *
   *
   *     						           </p>
   *
   *
   * 						               <p>
   *                         <b>M4 node types:</b>
   *     						              <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *
   *
   *     				             <p>
   *                         <b>T2 node types:</b>
   * 					                   <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *
   *
   *
   *
   *     						        </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 						               <p>
   *                         <b>T1 node types:</b>
   * 					                   <code>cache.t1.micro</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M1 node types:</b>
   * 						                  <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M3 node types:</b>
   *     						              <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *
   * 						            </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *
   * 				           <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 			                  <p>
   *                         <b>C1 node types:</b>
   * 			                     <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   * 					                <p>
   *                         <b>R5 node types:</b>
   *     					               <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *
   *     					            <p>
   *                         <b>R4 node types:</b>
   *     					               <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *     					         </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   *                         <p>
   *                         <b>M2 node types:</b>
   *     					               <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *
   *     						           <p>
   *                         <b>R3 node types:</b>
   *     					               <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *
   *     						        </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Additional node type info</b>
   *          </p>
   * 		       <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by default.</p>
   *             </li>
   *             <li>
   *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis configuration variables <code>appendonly</code> and
   * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
   *             </li>
   *          </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The duration filter value, specified in years or seconds.
   *             Use this parameter to show only reservations for this duration.</p>
   *         <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The offering type filter value.
   *             Use this parameter to show only the available offerings matching the specified offering type.</p>
   *         <p>Valid values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization"</code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>The product description filter value. Use this parameter to show only those reservations matching the specified product description.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The reserved cache node identifier filter value.
   *             Use this parameter to show only the reservation that matches the specified reservation ID.</p>
   */
  ReservedCacheNodeId?: string;

  /**
   * <p>The offering identifier filter value.
   *             Use this parameter to show only purchased reservations matching the specified offering identifier.</p>
   */
  ReservedCacheNodesOfferingId?: string;
}

export namespace DescribeReservedCacheNodesMessage {
  export const filterSensitiveLog = (
    obj: DescribeReservedCacheNodesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReservedCacheNodesMessage =>
    __isa(o, "DescribeReservedCacheNodesMessage");
}

/**
 * <p>Represents the input of a <code>DescribeReservedCacheNodesOfferings</code> operation.</p>
 */
export interface DescribeReservedCacheNodesOfferingsMessage {
  __type?: "DescribeReservedCacheNodesOfferingsMessage";
  /**
   * <p>The cache node type filter value.
   *             Use this parameter to show only the available offerings matching the specified cache node type.</p>
   *
   *         <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   * 		       <ul>
   *             <li>
   *                <p>General purpose:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   *     							          <p>
   *                         <b>M5 node types:</b>
   *     						              <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *
   *
   *     						           </p>
   *
   *
   * 						               <p>
   *                         <b>M4 node types:</b>
   *     						              <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *
   *
   *     				             <p>
   *                         <b>T2 node types:</b>
   * 					                   <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *
   *
   *
   *
   *     						        </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 						               <p>
   *                         <b>T1 node types:</b>
   * 					                   <code>cache.t1.micro</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M1 node types:</b>
   * 						                  <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M3 node types:</b>
   *     						              <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *
   * 						            </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *
   * 				           <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 			                  <p>
   *                         <b>C1 node types:</b>
   * 			                     <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   * 					                <p>
   *                         <b>R5 node types:</b>
   *     					               <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *
   *     					            <p>
   *                         <b>R4 node types:</b>
   *     					               <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *     					         </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   *                         <p>
   *                         <b>M2 node types:</b>
   *     					               <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *
   *     						           <p>
   *                         <b>R3 node types:</b>
   *     					               <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *
   *     						        </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Additional node type info</b>
   *          </p>
   * 		       <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by default.</p>
   *             </li>
   *             <li>
   *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis configuration variables <code>appendonly</code> and
   * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
   *             </li>
   *          </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>Duration filter value, specified in years or seconds.
   *             Use this parameter to show only reservations for a given duration.</p>
   *         <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The offering type filter value.
   *             Use this parameter to show only the available offerings matching the specified offering type.</p>
   *         <p>Valid Values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization"</code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>The product description filter value.
   *             Use this parameter to show only the available offerings matching the specified product description.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering identifier filter value.
   *             Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   *         <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   */
  ReservedCacheNodesOfferingId?: string;
}

export namespace DescribeReservedCacheNodesOfferingsMessage {
  export const filterSensitiveLog = (
    obj: DescribeReservedCacheNodesOfferingsMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReservedCacheNodesOfferingsMessage =>
    __isa(o, "DescribeReservedCacheNodesOfferingsMessage");
}

export interface DescribeServiceUpdatesMessage {
  __type?: "DescribeServiceUpdatesMessage";
  /**
   * <p>An optional marker returned from a prior request.
   *            Use this marker for pagination of results from this operation. If this
   *            parameter is specified, the response includes only records beyond the marker, up to the
   *            value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response</p>
   */
  MaxRecords?: number;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: (ServiceUpdateStatus | string)[];
}

export namespace DescribeServiceUpdatesMessage {
  export const filterSensitiveLog = (
    obj: DescribeServiceUpdatesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeServiceUpdatesMessage =>
    __isa(o, "DescribeServiceUpdatesMessage");
}

/**
 * <p>Represents the output of a <code>DescribeSnapshots</code> operation.</p>
 */
export interface DescribeSnapshotsListMessage {
  __type?: "DescribeSnapshotsListMessage";
  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of snapshots. Each item in the list contains detailed information about one snapshot.</p>
   */
  Snapshots?: Snapshot[];
}

export namespace DescribeSnapshotsListMessage {
  export const filterSensitiveLog = (
    obj: DescribeSnapshotsListMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotsListMessage =>
    __isa(o, "DescribeSnapshotsListMessage");
}

/**
 * <p>Represents the input of a <code>DescribeSnapshotsMessage</code> operation.</p>
 */
export interface DescribeSnapshotsMessage {
  __type?: "DescribeSnapshotsMessage";
  /**
   * <p>A user-supplied cluster identifier.
   *             If this parameter is specified, only snapshots associated with that specific cluster are described.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *         <p>Default: 50</p>
   *         <p>Constraints: minimum 20; maximum 50.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A user-supplied replication group identifier.
   *             If this parameter is specified, only snapshots associated with that specific replication group are described.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.</p>
   */
  ShowNodeGroupConfig?: boolean;

  /**
   * <p>A user-supplied name of the snapshot.
   *             If this parameter is specified, only this snapshot are described.</p>
   */
  SnapshotName?: string;

  /**
   * <p>If set to <code>system</code>, the output shows snapshots that were automatically created by ElastiCache.
   *             If set to <code>user</code> the output shows snapshots that were manually created.
   *             If omitted, the output shows both automatically and manually created snapshots.</p>
   */
  SnapshotSource?: string;
}

export namespace DescribeSnapshotsMessage {
  export const filterSensitiveLog = (obj: DescribeSnapshotsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSnapshotsMessage =>
    __isa(o, "DescribeSnapshotsMessage");
}

export interface DescribeUpdateActionsMessage {
  __type?: "DescribeUpdateActionsMessage";
  /**
   * <p>The cache cluster IDs</p>
   */
  CacheClusterIds?: string[];

  /**
   * <p>The Elasticache engine to which the update applies. Either Redis or Memcached </p>
   */
  Engine?: string;

  /**
   * <p>An optional marker returned from a prior request.
   *            Use this marker for pagination of results from this operation. If this
   *            parameter is specified, the response includes only records beyond the marker, up to the
   *            value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response</p>
   */
  MaxRecords?: number;

  /**
   * <p>The replication group IDs</p>
   */
  ReplicationGroupIds?: string[];

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: (ServiceUpdateStatus | string)[];

  /**
   * <p>The range of time specified to search for service updates that are in available status</p>
   */
  ServiceUpdateTimeRange?: TimeRangeFilter;

  /**
   * <p>Dictates whether to include node level update status in the response </p>
   */
  ShowNodeLevelUpdateStatus?: boolean;

  /**
   * <p>The status of the update action.</p>
   */
  UpdateActionStatus?: (UpdateActionStatus | string)[];
}

export namespace DescribeUpdateActionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeUpdateActionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUpdateActionsMessage =>
    __isa(o, "DescribeUpdateActionsMessage");
}

/**
 * <p>Provides ownership and status information for an Amazon EC2 security group.</p>
 */
export interface EC2SecurityGroup {
  __type?: "EC2SecurityGroup";
  /**
   * <p>The name of the Amazon EC2 security group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The AWS account ID of the Amazon EC2 security group owner.</p>
   */
  EC2SecurityGroupOwnerId?: string;

  /**
   * <p>The status of the Amazon EC2 security group.</p>
   */
  Status?: string;
}

export namespace EC2SecurityGroup {
  export const filterSensitiveLog = (obj: EC2SecurityGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is EC2SecurityGroup =>
    __isa(o, "EC2SecurityGroup");
}

/**
 * <p>Represents the information required for client programs to connect to a cache node.</p>
 */
export interface Endpoint {
  __type?: "Endpoint";
  /**
   * <p>The DNS hostname of the cache node.</p>
   */
  Address?: string;

  /**
   * <p>The port number that the cache engine is listening on.</p>
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
 * <p>Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.</p>
 */
export interface EngineDefaults {
  __type?: "EngineDefaults";
  /**
   * <p>A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.</p>
   */
  CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];

  /**
   * <p>Specifies the name of the cache parameter group family to which the engine default parameters apply.</p>
   *         <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *     </p>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Parameter[];
}

export namespace EngineDefaults {
  export const filterSensitiveLog = (obj: EngineDefaults): any => ({
    ...obj
  });
  export const isa = (o: any): o is EngineDefaults =>
    __isa(o, "EngineDefaults");
}

/**
 * <p>Represents a single occurrence of something interesting within the system.
 *             Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>The date and time when the event occurred.</p>
   */
  Date?: Date;

  /**
   * <p>The text of the event.</p>
   */
  Message?: string;

  /**
   * <p>The identifier for the source of the event.
   *             For example, if the event occurred at the cluster level,
   *             the identifier would be the name of the cluster.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>Specifies the origin of this event - a cluster, a parameter group, a security group, etc.</p>
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
 * <p>Represents the output of a <code>DescribeEvents</code> operation.</p>
 */
export interface EventsMessage {
  __type?: "EventsMessage";
  /**
   * <p>A list of events. Each element in the list contains detailed information about one event.</p>
   */
  Events?: Event[];

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;
}

export namespace EventsMessage {
  export const filterSensitiveLog = (obj: EventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventsMessage => __isa(o, "EventsMessage");
}

export interface IncreaseReplicaCountMessage {
  __type?: "IncreaseReplicaCountMessage";
  /**
   * <p>If <code>True</code>, the number of replica nodes is increased immediately.
   *
   *             <code>ApplyImmediately=False</code> is not currently supported.</p>
   */
  ApplyImmediately: boolean | undefined;

  /**
   * <p>The number of read replica nodes you want at the completion of this operation.
   *             For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the
   *             replication group. For Redis (cluster mode enabled) replication groups, this is the number of
   *             replica nodes in each of the replication group's node groups.</p>
   */
  NewReplicaCount?: number;

  /**
   * <p>A list of <code>ConfigureShard</code> objects that can be used to configure each shard
   *             in a Redis (cluster mode enabled) replication group. The <code>ConfigureShard</code> has three members:
   *             <code>NewReplicaCount</code>, <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.</p>
   */
  ReplicaConfiguration?: ConfigureShard[];

  /**
   * <p>The id of the replication group to which you want to add replica nodes.</p>
   */
  ReplicationGroupId: string | undefined;
}

export namespace IncreaseReplicaCountMessage {
  export const filterSensitiveLog = (
    obj: IncreaseReplicaCountMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IncreaseReplicaCountMessage =>
    __isa(o, "IncreaseReplicaCountMessage");
}

export interface IncreaseReplicaCountResult {
  __type?: "IncreaseReplicaCountResult";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace IncreaseReplicaCountResult {
  export const filterSensitiveLog = (obj: IncreaseReplicaCountResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is IncreaseReplicaCountResult =>
    __isa(o, "IncreaseReplicaCountResult");
}

/**
 * <p>The requested cache node type is not available in the specified Availability Zone.
 *             For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 */
export interface InsufficientCacheClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientCacheClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientCacheClusterCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientCacheClusterCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientCacheClusterCapacityFault =>
    __isa(o, "InsufficientCacheClusterCapacityFault");
}

/**
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 */
export interface InvalidARNFault extends __SmithyException, $MetadataBearer {
  name: "InvalidARNFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidARNFault {
  export const filterSensitiveLog = (obj: InvalidARNFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidARNFault =>
    __isa(o, "InvalidARNFault");
}

/**
 * <p>The requested cluster is not in the <code>available</code> state.</p>
 */
export interface InvalidCacheClusterStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCacheClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidCacheClusterStateFault {
  export const filterSensitiveLog = (
    obj: InvalidCacheClusterStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCacheClusterStateFault =>
    __isa(o, "InvalidCacheClusterStateFault");
}

/**
 * <p>The current state of the cache parameter group does not allow the requested operation to occur.</p>
 */
export interface InvalidCacheParameterGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCacheParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidCacheParameterGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidCacheParameterGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCacheParameterGroupStateFault =>
    __isa(o, "InvalidCacheParameterGroupStateFault");
}

/**
 * <p>The current state of the cache security group does not allow deletion.</p>
 */
export interface InvalidCacheSecurityGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCacheSecurityGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidCacheSecurityGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidCacheSecurityGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCacheSecurityGroupStateFault =>
    __isa(o, "InvalidCacheSecurityGroupStateFault");
}

/**
 * <p>The KMS key supplied is not valid.</p>
 */
export interface InvalidKMSKeyFault extends __SmithyException, $MetadataBearer {
  name: "InvalidKMSKeyFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidKMSKeyFault {
  export const filterSensitiveLog = (obj: InvalidKMSKeyFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidKMSKeyFault =>
    __isa(o, "InvalidKMSKeyFault");
}

/**
 * <p>Two or more incompatible parameters were specified.</p>
 */
export interface InvalidParameterCombinationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  /**
   * <p>Two or more parameters that must not be used together were used together.</p>
   */
  message?: string;
}

export namespace InvalidParameterCombinationException {
  export const filterSensitiveLog = (
    obj: InvalidParameterCombinationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterCombinationException =>
    __isa(o, "InvalidParameterCombinationException");
}

/**
 * <p>The value for a parameter is invalid.</p>
 */
export interface InvalidParameterValueException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p>A parameter value is invalid.</p>
   */
  message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (
    obj: InvalidParameterValueException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterValueException =>
    __isa(o, "InvalidParameterValueException");
}

/**
 * <p>The requested replication group is not in the <code>available</code> state.</p>
 */
export interface InvalidReplicationGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidReplicationGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidReplicationGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidReplicationGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidReplicationGroupStateFault =>
    __isa(o, "InvalidReplicationGroupStateFault");
}

/**
 * <p>The current state of the snapshot does not allow the requested operation to occur.</p>
 */
export interface InvalidSnapshotStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidSnapshotStateFault {
  export const filterSensitiveLog = (obj: InvalidSnapshotStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSnapshotStateFault =>
    __isa(o, "InvalidSnapshotStateFault");
}

/**
 * <p>An invalid subnet identifier was specified.</p>
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
 * <p>The VPC network is in an invalid state.</p>
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
 * <p>The input parameters for the <code>ListAllowedNodeTypeModifications</code> operation.</p>
 */
export interface ListAllowedNodeTypeModificationsMessage {
  __type?: "ListAllowedNodeTypeModificationsMessage";
  /**
   * <p>The name of the cluster you want to scale up to a larger node instanced type.
   *             ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to.</p>
   *
   *         <important>
   *             <p>You must provide a value for either the <code>CacheClusterId</code> or the
   *             <code>ReplicationGroupId</code>.</p>
   *          </important>
   */
  CacheClusterId?: string;

  /**
   * <p>The name of the replication group want to scale up to a larger node type.
   *         ElastiCache uses the replication group id to identify the current node type being used by
   *         this replication group, and from that to create a list of node types you can scale up to.</p>
   *
   *         <important>
   *             <p>You must provide a value for either the <code>CacheClusterId</code> or the
   *             <code>ReplicationGroupId</code>.</p>
   *          </important>
   */
  ReplicationGroupId?: string;
}

export namespace ListAllowedNodeTypeModificationsMessage {
  export const filterSensitiveLog = (
    obj: ListAllowedNodeTypeModificationsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAllowedNodeTypeModificationsMessage =>
    __isa(o, "ListAllowedNodeTypeModificationsMessage");
}

/**
 * <p>The input parameters for the <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceMessage {
  __type?: "ListTagsForResourceMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags,
   *             for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code>
   *             or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p>
   *         <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  ResourceName: string | undefined;
}

export namespace ListTagsForResourceMessage {
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceMessage =>
    __isa(o, "ListTagsForResourceMessage");
}

/**
 * <p>Represents the input of a <code>ModifyCacheCluster</code> operation.</p>
 */
export interface ModifyCacheClusterMessage {
  __type?: "ModifyCacheClusterMessage";
  /**
   * <p>Specifies whether the new nodes in this Memcached cluster are all created in a
   *             single Availability Zone or created across multiple Availability Zones.</p>
   *         <p>Valid values: <code>single-az</code> | <code>cross-az</code>.</p>
   *         <p>This option is only supported for Memcached clusters.</p>
   *         <note>
   *             <p>You cannot specify <code>single-az</code> if the Memcached cluster already has cache nodes in different Availability Zones.
   *             If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone.</p>
   *             <p>Only newly created nodes are located in different Availability Zones.
   *                 </p>
   *         </note>
   */
  AZMode?: AZMode | string;

  /**
   * <p>If <code>true</code>, this parameter causes the modifications in this request and any
   *             pending modifications to be applied, asynchronously and as soon as possible, regardless
   *             of the <code>PreferredMaintenanceWindow</code> setting for the cluster.</p>
   *         <p>If <code>false</code>, changes to the cluster are applied on the next
   *             maintenance reboot, or the next failure reboot, whichever occurs first.</p>
   *         <important>
   *             <p>If you perform a <code>ModifyCacheCluster</code> before a pending modification is applied,
   *             the pending modification is replaced by the newer modification.</p>
   *          </important>
   *         <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update</code> parameter.
   *             Password constraints:</p>
   *             <ul>
   *             <li>
   *                <p>Must be only printable ASCII characters</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 16 characters and no more than 128 characters in length</p>
   *             </li>
   *             <li>
   *                <p>Cannot contain any of the following characters: '/', '"', or '@', '%'</p>
   *             </li>
   *          </ul>
   *          <p>
   *
   *             For more information, see AUTH password at <a href="http://redis.io/commands/AUTH">AUTH</a>.</p>
   */
  AuthToken?: string;

  /**
   * <p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter.
   *             Possible values:</p>
   *             <ul>
   *             <li>
   *                <p>Rotate</p>
   *             </li>
   *             <li>
   *                <p>Set</p>
   *             </li>
   *          </ul>
   *         <p>
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a>
   *          </p>
   */
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | string;

  /**
   * <p>This parameter is currently disabled.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The cluster identifier. This value is stored as a lowercase string.</p>
   */
  CacheClusterId: string | undefined;

  /**
   * <p>A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002,
   *             etc.). This parameter is only valid when <code>NumCacheNodes</code> is less than the existing number
   *             of cache nodes. The number of cache node IDs supplied in this parameter must match the
   *             difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is
   *             greater, and the value of <code>NumCacheNodes</code> in the request.</p>
   *         <p>For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this
   *         <code>ModifyCacheCluster</code> call is 5, you must list 2 (7 - 5) cache node IDs to remove.</p>
   */
  CacheNodeIdsToRemove?: string[];

  /**
   * <p>A valid cache node type that you want to scale this cluster up to.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The name of the cache parameter group to apply to this cluster. This change is
   *             asynchronously applied as soon as possible for parameters when the
   *             <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>A list of cache security group names to authorize on this cluster.
   *             This change is asynchronously applied as soon as possible.</p>
   *         <p>You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>
   *         <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".</p>
   */
  CacheSecurityGroupNames?: string[];

  /**
   * <p>The upgraded version of the cache engine to be run on the cache nodes.</p>
   *
   *         <p>
   *             <b>Important:</b> You can upgrade to a newer engine version
   *             (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version.
   *             If you want to use an earlier engine version,
   *             you must delete the existing cluster and create it anew with the earlier engine version. </p>
   */
  EngineVersion?: string;

  /**
   * <p>The list of Availability Zones where the new Memcached cache nodes are created.</p>
   *         <p>This parameter is only valid when <code>NumCacheNodes</code> in the request is greater
   *             than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero).
   *             The number of Availability Zones supplied in this list must match the cache nodes being added in this request.</p>
   *         <p>This option is only supported on Memcached clusters.</p>
   *         <p>Scenarios:</p>
   *             <ul>
   *             <li>
   *                    <p>
   *                   <b>Scenario 1:</b> You have 3 active nodes and wish to add 2 nodes.
   *                         Specify <code>NumCacheNodes=5</code> (3 + 2) and optionally specify two Availability Zones
   *                         for the two new nodes.</p>
   *                 </li>
   *             <li>
   *                    <p>
   *                   <b>Scenario 2:</b> You have 3 active nodes and 2 nodes pending creation
   *                         (from the scenario 1 call) and want to add 1 more node.
   *                         Specify <code>NumCacheNodes=6</code> ((3 + 2) + 1) and
   *                         optionally specify an Availability Zone for the new node.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <b>Scenario 3:</b> You want to cancel all pending operations.
   *                         Specify <code>NumCacheNodes=3</code> to cancel all pending operations.</p>
   *                 </li>
   *          </ul>
   *
   *         <p>The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation,
   *             add 0 nodes by setting <code>NumCacheNodes</code> to the number of current nodes.</p>
   *         <p>If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone.
   *             Only newly created nodes can be located in different Availability Zones.
   *             For guidance on how to move existing Memcached nodes to different Availability Zones, see the
   *             <b>Availability Zone Considerations</b> section of <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html">Cache Node Considerations for Memcached</a>.</p>
   *
   *          <p>
   *             <b>Impact of new add/remove requests upon pending requests</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Scenario-1</p>
   *                <ul>
   *                   <li>
   *                      <p>Pending Action: Delete</p>
   *                   </li>
   *                   <li>
   *                      <p>New Request: Delete</p>
   *                   </li>
   *                   <li>
   *                      <p>Result: The new delete, pending or immediate, replaces the pending delete.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Scenario-2</p>
   *                <ul>
   *                   <li>
   *                      <p>Pending Action: Delete</p>
   *                   </li>
   *                   <li>
   *                      <p>New Request: Create</p>
   *                   </li>
   *                   <li>
   *                      <p>Result: The new create, pending or immediate, replaces the pending delete.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Scenario-3</p>
   *                <ul>
   *                   <li>
   *                      <p>Pending Action: Create</p>
   *                   </li>
   *                   <li>
   *                      <p>New Request: Delete</p>
   *                   </li>
   *                   <li>
   *                      <p>Result: The new delete, pending or immediate, replaces the pending create.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Scenario-4</p>
   *                <ul>
   *                   <li>
   *                      <p>Pending Action: Create</p>
   *                   </li>
   *                   <li>
   *                      <p>New Request: Create</p>
   *                   </li>
   *                   <li>
   *                      <p>Result: The new create is added to the pending create.</p>
   *                      <important>
   *                         <p>
   *                            <b>Important:</b>
   *                       If the new create request is <b>Apply Immediately - Yes</b>,
   *                       all creates are performed immediately.
   *                       If the new create request is <b>Apply Immediately - No</b>,
   *                       all creates are pending.</p>
   *                      </important>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  NewAvailabilityZones?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p>
   *         <note>
   *             <p>The Amazon SNS topic owner must be same as the cluster owner.</p>
   *          </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p>The status of the Amazon SNS notification topic. Notifications are sent only if the
   *             status is <code>active</code>.</p>
   *         <p>Valid values: <code>active</code> | <code>inactive</code>
   *          </p>
   */
  NotificationTopicStatus?: string;

  /**
   * <p>The number of cache nodes that the cluster should have.
   *             If the value for <code>NumCacheNodes</code> is greater than the sum of the number of current cache nodes and
   *             the number of cache nodes pending creation (which may be zero), more nodes are added.
   *             If the value is less than the number of existing cache nodes,  nodes are removed.
   *             If the value is equal to the number of current cache nodes,
   *              any pending add or remove requests are canceled.</p>
   *         <p>If you are removing cache nodes, you must
   *             use the <code>CacheNodeIdsToRemove</code> parameter to provide the IDs of the specific cache nodes to remove.</p>
   *         <p>For clusters running Redis, this value must be 1.
   *     For clusters running Memcached, this value must be between 1 and 20.</p>
   *
   *         <note>
   *             <p>Adding or removing Memcached cache nodes can be applied immediately or as a pending operation (see <code>ApplyImmediately</code>).</p>
   *             <p>A pending operation to modify the number of cache nodes in a cluster during its maintenance window,
   *             whether by adding or removing nodes in accordance with the scale out architecture, is not queued.
   *             The customer's latest request to add or remove nodes to the cluster overrides any previous pending operations to modify the
   *             number of cache nodes in the cluster.
   *             For example, a request to remove 2 nodes would override a previous pending operation to remove 3 nodes.
   *             Similarly, a request to add 2 nodes would override a previous pending operation to remove 3 nodes and vice versa.
   *             As Memcached cache nodes may now be provisioned in different Availability Zones with flexible cache node placement,
   *             a request to add nodes does not automatically override a previous pending operation to add nodes.
   *             The customer can modify the previous pending operation to add more nodes or explicitly cancel the pending request and
   *             retry the new request.
   *             To cancel pending operations to modify the number of cache nodes in a cluster,
   *             use the <code>ModifyCacheCluster</code> request and
   *             set <code>NumCacheNodes</code> equal to the number of cache nodes currently in the cluster.</p>
   *          </note>
   */
  NumCacheNodes?: number;

  /**
   * <p>Specifies the weekly time range during which maintenance
   *    on the cluster is performed. It is specified as a range in
   *    the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *    maintenance window is a 60 minute period.</p>
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Specifies the VPC Security Groups associated with the cluster.</p>
   *         <p>This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5,  a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *         <note>
   *             <p>If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p>
   *          </note>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache  begins taking a daily snapshot of
   *             your cluster. </p>
   */
  SnapshotWindow?: string;
}

export namespace ModifyCacheClusterMessage {
  export const filterSensitiveLog = (obj: ModifyCacheClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyCacheClusterMessage =>
    __isa(o, "ModifyCacheClusterMessage");
}

export interface ModifyCacheClusterResult {
  __type?: "ModifyCacheClusterResult";
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: CacheCluster;
}

export namespace ModifyCacheClusterResult {
  export const filterSensitiveLog = (obj: ModifyCacheClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyCacheClusterResult =>
    __isa(o, "ModifyCacheClusterResult");
}

/**
 * <p>Represents the input of a <code>ModifyCacheParameterGroup</code> operation.</p>
 */
export interface ModifyCacheParameterGroupMessage {
  __type?: "ModifyCacheParameterGroupMessage";
  /**
   * <p>The name of the cache parameter group to modify.</p>
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.</p>
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

export namespace ModifyCacheParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ModifyCacheParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyCacheParameterGroupMessage =>
    __isa(o, "ModifyCacheParameterGroupMessage");
}

/**
 * <p>Represents the input of a <code>ModifyCacheSubnetGroup</code> operation.</p>
 */
export interface ModifyCacheSubnetGroupMessage {
  __type?: "ModifyCacheSubnetGroupMessage";
  /**
   * <p>A description of the cache subnet group.</p>
   */
  CacheSubnetGroupDescription?: string;

  /**
   * <p>The name for the cache subnet group. This value is stored as a lowercase string.</p>
   *         <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *         <p>Example: <code>mysubnetgroup</code>
   *          </p>
   */
  CacheSubnetGroupName: string | undefined;

  /**
   * <p>The EC2 subnet IDs for the cache subnet group.</p>
   */
  SubnetIds?: string[];
}

export namespace ModifyCacheSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: ModifyCacheSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyCacheSubnetGroupMessage =>
    __isa(o, "ModifyCacheSubnetGroupMessage");
}

export interface ModifyCacheSubnetGroupResult {
  __type?: "ModifyCacheSubnetGroupResult";
  /**
   * <p>Represents the output of one of the following operations:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CreateCacheSubnetGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ModifyCacheSubnetGroup</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CacheSubnetGroup?: CacheSubnetGroup;
}

export namespace ModifyCacheSubnetGroupResult {
  export const filterSensitiveLog = (
    obj: ModifyCacheSubnetGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyCacheSubnetGroupResult =>
    __isa(o, "ModifyCacheSubnetGroupResult");
}

/**
 * <p>Represents the input of a <code>ModifyReplicationGroups</code> operation.</p>
 */
export interface ModifyReplicationGroupMessage {
  __type?: "ModifyReplicationGroupMessage";
  /**
   * <p>If <code>true</code>, this parameter causes the modifications in this request and any
   *             pending modifications to be applied, asynchronously and as soon as possible, regardless
   *             of the <code>PreferredMaintenanceWindow</code> setting for the replication group.</p>
   *         <p>If <code>false</code>, changes to the nodes in the replication group are applied on
   *             the next maintenance reboot, or the next failure reboot, whichever occurs first.</p>
   *         <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update-strategy </code>
   *             parameter.
   *             Password constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be only printable ASCII characters</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 16 characters and no more than 128 characters in length</p>
   *             </li>
   *             <li>
   *                <p>Cannot contain any of the following characters: '/', '"', or '@', '%'</p>
   *             </li>
   *          </ul>
   *         <p>
   *
   *             For more information, see AUTH password at <a href="http://redis.io/commands/AUTH">AUTH</a>.</p>
   */
  AuthToken?: string;

  /**
   * <p>Specifies the strategy to use to update the AUTH token. This parameter must be specified with the <code>auth-token</code> parameter.
   *                 Possible values:</p>
   *             <ul>
   *             <li>
   *                <p>Rotate</p>
   *             </li>
   *             <li>
   *                <p>Set</p>
   *             </li>
   *          </ul>
   *             <p>
   *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a>
   *          </p>
   */
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | string;

  /**
   * <p>This parameter is currently disabled.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.</p>
   *         <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *         <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p>
   *          <ul>
   *             <li>
   *                <p>Redis versions earlier than 2.8.6.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode disabled): T1 node types.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode enabled): T1 node types.</p>
   *             </li>
   *          </ul>
   */
  AutomaticFailoverEnabled?: boolean;

  /**
   * <p>A valid cache node type that you want to scale this replication group to.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The name of the cache parameter group to apply to all of the clusters in this replication group.
   *             This change is asynchronously applied as soon as possible for parameters when the
   *             <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible.</p>
   *         <p>This parameter can be used only with replication group containing clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>
   *         <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be <code>Default</code>.</p>
   */
  CacheSecurityGroupNames?: string[];

  /**
   * <p>The upgraded version of the cache engine to be run on the clusters in the replication group.</p>
   *
   *         <p>
   *             <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version.
   *             If you want to use an earlier engine version,
   *             you must delete the existing replication group and create it anew with the earlier engine version. </p>
   */
  EngineVersion?: string;

  /**
   * <p>Deprecated. This parameter is not used.</p>
   */
  NodeGroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p>
   *         <note>
   *             <p>The Amazon SNS topic owner must be same as the replication group owner. </p>
   *          </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p>The status of the Amazon SNS notification topic for the replication group.
   *             Notifications are sent only if the status is <code>active</code>.</p>
   *         <p>Valid values: <code>active</code> | <code>inactive</code>
   *          </p>
   */
  NotificationTopicStatus?: string;

  /**
   * <p>Specifies the weekly time range during which maintenance
   *    on the cluster is performed. It is specified as a range in
   *    the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *    maintenance window is a 60 minute period.</p>
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>For replication groups with a single primary,
   *             if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role.
   *             The nodes of all other clusters in the replication group are read replicas.</p>
   */
  PrimaryClusterId?: string;

  /**
   * <p>A description for the replication group. Maximum length is 255 characters.</p>
   */
  ReplicationGroupDescription?: string;

  /**
   * <p>The identifier of the replication group to modify.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>Specifies the VPC Security Groups associated with the clusters in the replication group.</p>
   *         <p>This parameter can be used only with replication group containing clusters running in
   *             an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The number of days for which ElastiCache retains automatic node group (shard) snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *         <p>
   *             <b>Important</b> If the value of SnapshotRetentionLimit is set to zero (0),
   *             backups are turned off.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache  begins taking a daily snapshot of
   *             the node group (shard) specified by <code>SnapshottingClusterId</code>.</p>
   *         <p>Example: <code>05:00-09:00</code>
   *          </p>
   *         <p>If you do not specify this parameter, ElastiCache  automatically chooses an appropriate time range.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>The cluster ID that is used as the daily snapshot source for the replication group.
   *             This parameter cannot be set for Redis (cluster mode enabled) replication groups.</p>
   */
  SnapshottingClusterId?: string;
}

export namespace ModifyReplicationGroupMessage {
  export const filterSensitiveLog = (
    obj: ModifyReplicationGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReplicationGroupMessage =>
    __isa(o, "ModifyReplicationGroupMessage");
}

export interface ModifyReplicationGroupResult {
  __type?: "ModifyReplicationGroupResult";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace ModifyReplicationGroupResult {
  export const filterSensitiveLog = (
    obj: ModifyReplicationGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReplicationGroupResult =>
    __isa(o, "ModifyReplicationGroupResult");
}

/**
 * <p>Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation.</p>
 */
export interface ModifyReplicationGroupShardConfigurationMessage {
  __type?: "ModifyReplicationGroupShardConfigurationMessage";
  /**
   * <p>Indicates that the shard reconfiguration process begins immediately.
   *             At present, the only permitted value for this parameter is <code>true</code>.</p>
   *         <p>Value: true</p>
   */
  ApplyImmediately: boolean | undefined;

  /**
   * <p>The number of node groups (shards) that results from the modification of the
   *             shard configuration.</p>
   */
  NodeGroupCount: number | undefined;

  /**
   * <p>If the value of <code>NodeGroupCount</code> is less than the
   *             current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or
   *             <code>NodeGroupsToRetain</code> is required.
   *             <code>NodeGroupsToRemove</code> is a list of <code>NodeGroupId</code>s to remove
   *             from the cluster.</p>
   *         <p>ElastiCache for Redis will attempt to remove all node groups listed by <code>NodeGroupsToRemove</code>
   *             from the cluster.</p>
   */
  NodeGroupsToRemove?: string[];

  /**
   * <p>If the value of <code>NodeGroupCount</code> is less than the
   *             current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or
   *             <code>NodeGroupsToRetain</code> is required.
   *             <code>NodeGroupsToRetain</code> is a list of <code>NodeGroupId</code>s to retain
   *             in the cluster.</p>
   *         <p>ElastiCache for Redis will attempt to remove all node groups except those listed by <code>NodeGroupsToRetain</code>
   *             from the cluster.</p>
   */
  NodeGroupsToRetain?: string[];

  /**
   * <p>The name of the Redis (cluster mode enabled) cluster (replication group)
   *             on which the shards are to be configured.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>Specifies the preferred availability zones for each node group in the cluster.
   *             If the value of <code>NodeGroupCount</code> is greater than the current number
   *             of node groups (shards), you can use this parameter to specify the preferred
   *             availability zones of the cluster's shards.
   *             If you omit this parameter ElastiCache selects availability zones for you.</p>
   *         <p>You can specify this parameter only if the value of <code>NodeGroupCount</code>
   *             is greater than the current number of node groups (shards).</p>
   */
  ReshardingConfiguration?: ReshardingConfiguration[];
}

export namespace ModifyReplicationGroupShardConfigurationMessage {
  export const filterSensitiveLog = (
    obj: ModifyReplicationGroupShardConfigurationMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ModifyReplicationGroupShardConfigurationMessage =>
    __isa(o, "ModifyReplicationGroupShardConfigurationMessage");
}

export interface ModifyReplicationGroupShardConfigurationResult {
  __type?: "ModifyReplicationGroupShardConfigurationResult";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace ModifyReplicationGroupShardConfigurationResult {
  export const filterSensitiveLog = (
    obj: ModifyReplicationGroupShardConfigurationResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ModifyReplicationGroupShardConfigurationResult =>
    __isa(o, "ModifyReplicationGroupShardConfigurationResult");
}

/**
 * <p>Represents a collection of cache nodes in a replication group.
 *             One node in the node group is the read/write primary node.
 *             All the other nodes are read-only Replica nodes.</p>
 */
export interface NodeGroup {
  __type?: "NodeGroup";
  /**
   * <p>The identifier for the node group (shard). A Redis (cluster mode disabled) replication group contains only 1 node group; therefore, the node group ID is 0001.
   *             A Redis (cluster mode enabled) replication group contains 1 to 90 node groups numbered 0001 to 0090. Optionally, the user can provide the id for
   *             a node group. </p>
   */
  NodeGroupId?: string;

  /**
   * <p>A list containing information about individual nodes within the node group (shard).</p>
   */
  NodeGroupMembers?: NodeGroupMember[];

  /**
   * <p>The endpoint of the primary node in this node group (shard).</p>
   */
  PrimaryEndpoint?: Endpoint;

  /**
   * <p>The endpoint of the replica nodes in this node group (shard).</p>
   */
  ReaderEndpoint?: Endpoint;

  /**
   * <p>The keyspace for this node group (shard).</p>
   */
  Slots?: string;

  /**
   * <p>The current state of this replication group - <code>creating</code>,
   *             <code>available</code>, etc.</p>
   */
  Status?: string;
}

export namespace NodeGroup {
  export const filterSensitiveLog = (obj: NodeGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeGroup => __isa(o, "NodeGroup");
}

/**
 * <p>Node group (shard) configuration options.
 *             Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.</p>
 */
export interface NodeGroupConfiguration {
  __type?: "NodeGroupConfiguration";
  /**
   * <p>Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these
   *             configuration values apply to.</p>
   */
  NodeGroupId?: string;

  /**
   * <p>The Availability Zone where the primary node of this node group (shard) is launched.</p>
   */
  PrimaryAvailabilityZone?: string;

  /**
   * <p>A list of Availability Zones to be used for the read replicas.
   *             The number of Availability Zones in this list must match the value of <code>ReplicaCount</code>
   *             or <code>ReplicasPerNodeGroup</code> if not specified.</p>
   */
  ReplicaAvailabilityZones?: string[];

  /**
   * <p>The number of read replica nodes in this node group (shard).</p>
   */
  ReplicaCount?: number;

  /**
   * <p>A string that specifies the keyspace for a particular node group.
   *             Keyspaces range from 0 to 16,383.
   *             The string is in the format <code>startkey-endkey</code>.</p>
   *         <p>Example: <code>"0-3999"</code>
   *          </p>
   */
  Slots?: string;
}

export namespace NodeGroupConfiguration {
  export const filterSensitiveLog = (obj: NodeGroupConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeGroupConfiguration =>
    __isa(o, "NodeGroupConfiguration");
}

/**
 * <p>Represents a single node within a node group (shard).</p>
 */
export interface NodeGroupMember {
  __type?: "NodeGroupMember";
  /**
   * <p>The ID of the cluster to which the node belongs.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The ID of the node within its cluster. A node ID is a numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The role that is currently assigned to the node - <code>primary</code> or
   *             <code>replica</code>. This member is only applicable for Redis (cluster mode disabled)
   *             replication groups.</p>
   */
  CurrentRole?: string;

  /**
   * <p>The name of the Availability Zone in which the node is located.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>The information required for client programs to connect to a node for read operations.
   *             The read endpoint is only applicable on Redis (cluster mode disabled) clusters.</p>
   */
  ReadEndpoint?: Endpoint;
}

export namespace NodeGroupMember {
  export const filterSensitiveLog = (obj: NodeGroupMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeGroupMember =>
    __isa(o, "NodeGroupMember");
}

/**
 * <p>The status of the service update on the node group member  </p>
 */
export interface NodeGroupMemberUpdateStatus {
  __type?: "NodeGroupMemberUpdateStatus";
  /**
   * <p>The cache cluster ID</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The node ID of the cache cluster</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The deletion date of the node</p>
   */
  NodeDeletionDate?: Date;

  /**
   * <p>The end date of the update for a node</p>
   */
  NodeUpdateEndDate?: Date;

  /**
   * <p>Reflects whether the update was initiated by the customer or automatically applied</p>
   */
  NodeUpdateInitiatedBy?: NodeUpdateInitiatedBy | string;

  /**
   * <p>The date when the update is triggered</p>
   */
  NodeUpdateInitiatedDate?: Date;

  /**
   * <p>The start date of the update for a node</p>
   */
  NodeUpdateStartDate?: Date;

  /**
   * <p>The update status of the node</p>
   */
  NodeUpdateStatus?: NodeUpdateStatus | string;

  /**
   * <p>The date when the NodeUpdateStatus was last modified</p>
   */
  NodeUpdateStatusModifiedDate?: Date;
}

export namespace NodeGroupMemberUpdateStatus {
  export const filterSensitiveLog = (
    obj: NodeGroupMemberUpdateStatus
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeGroupMemberUpdateStatus =>
    __isa(o, "NodeGroupMemberUpdateStatus");
}

/**
 * <p>The node group specified by the <code>NodeGroupId</code> parameter could not be found.
 *             Please verify that the node group exists and that you spelled the <code>NodeGroupId</code> value correctly.</p>
 */
export interface NodeGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "NodeGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace NodeGroupNotFoundFault {
  export const filterSensitiveLog = (obj: NodeGroupNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeGroupNotFoundFault =>
    __isa(o, "NodeGroupNotFoundFault");
}

/**
 * <p>The request cannot be processed because it would exceed the maximum allowed number
 *             of node groups (shards) in a single replication group. The default maximum is 90</p>
 */
export interface NodeGroupsPerReplicationGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "NodeGroupsPerReplicationGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NodeGroupsPerReplicationGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: NodeGroupsPerReplicationGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is NodeGroupsPerReplicationGroupQuotaExceededFault =>
    __isa(o, "NodeGroupsPerReplicationGroupQuotaExceededFault");
}

/**
 * <p>The status of the service update on the node group </p>
 */
export interface NodeGroupUpdateStatus {
  __type?: "NodeGroupUpdateStatus";
  /**
   * <p>The ID of the node group</p>
   */
  NodeGroupId?: string;

  /**
   * <p>The status of the service update on the node group member</p>
   */
  NodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatus[];
}

export namespace NodeGroupUpdateStatus {
  export const filterSensitiveLog = (obj: NodeGroupUpdateStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeGroupUpdateStatus =>
    __isa(o, "NodeGroupUpdateStatus");
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
 */
export interface NodeQuotaForClusterExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "NodeQuotaForClusterExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NodeQuotaForClusterExceededFault {
  export const filterSensitiveLog = (
    obj: NodeQuotaForClusterExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeQuotaForClusterExceededFault =>
    __isa(o, "NodeQuotaForClusterExceededFault");
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
 */
export interface NodeQuotaForCustomerExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "NodeQuotaForCustomerExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NodeQuotaForCustomerExceededFault {
  export const filterSensitiveLog = (
    obj: NodeQuotaForCustomerExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeQuotaForCustomerExceededFault =>
    __isa(o, "NodeQuotaForCustomerExceededFault");
}

/**
 * <p>Represents an individual cache node in a snapshot of a cluster.</p>
 */
export interface NodeSnapshot {
  __type?: "NodeSnapshot";
  /**
   * <p>A unique identifier for the source cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The date and time when the cache node was created in the source cluster.</p>
   */
  CacheNodeCreateTime?: Date;

  /**
   * <p>The cache node identifier for the node in the source cluster.</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The size of the cache on the source cache node.</p>
   */
  CacheSize?: string;

  /**
   * <p>The configuration for the source node group (shard).</p>
   */
  NodeGroupConfiguration?: NodeGroupConfiguration;

  /**
   * <p>A unique identifier for the source node group (shard).</p>
   */
  NodeGroupId?: string;

  /**
   * <p>The date and time when the source node's metadata and cache data set was obtained for the snapshot.</p>
   */
  SnapshotCreateTime?: Date;
}

export namespace NodeSnapshot {
  export const filterSensitiveLog = (obj: NodeSnapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is NodeSnapshot => __isa(o, "NodeSnapshot");
}

export enum NodeUpdateInitiatedBy {
  CUSTOMER = "customer",
  SYSTEM = "system"
}

export enum NodeUpdateStatus {
  COMPLETE = "complete",
  IN_PROGRESS = "in-progress",
  NOT_APPLIED = "not-applied",
  STOPPED = "stopped",
  STOPPING = "stopping",
  WAITING_TO_START = "waiting-to-start"
}

/**
 * <p>The operation was not performed because no changes were required.</p>
 */
export interface NoOperationFault extends __SmithyException, $MetadataBearer {
  name: "NoOperationFault";
  $fault: "client";
  message?: string;
}

export namespace NoOperationFault {
  export const filterSensitiveLog = (obj: NoOperationFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoOperationFault =>
    __isa(o, "NoOperationFault");
}

/**
 * <p>Describes a notification topic and its status.
 *             Notification topics are used for publishing ElastiCache events to subscribers
 *             using Amazon Simple Notification Service (SNS).</p>
 */
export interface NotificationConfiguration {
  __type?: "NotificationConfiguration";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   */
  TopicArn?: string;

  /**
   * <p>The current state of the topic.</p>
   */
  TopicStatus?: string;
}

export namespace NotificationConfiguration {
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotificationConfiguration =>
    __isa(o, "NotificationConfiguration");
}

/**
 * <p>Describes an individual setting that controls some aspect of ElastiCache behavior.</p>
 */
export interface Parameter {
  __type?: "Parameter";
  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Indicates whether a change to the parameter is applied immediately
   *             or requires a reboot for the change to be applied.
   *             You can force a reboot or wait until the next maintenance window's reboot.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a>.</p>
   */
  ChangeType?: ChangeType | string;

  /**
   * <p>The valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified.
   *             Some parameters have security or operational implications that prevent them from being changed.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest cache engine version to which the parameter can apply.</p>
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
   * <p>The source of the parameter.</p>
   */
  Source?: string;
}

export namespace Parameter {
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Parameter => __isa(o, "Parameter");
}

/**
 * <p>Describes a name-value pair that is used to update the value of a parameter.</p>
 */
export interface ParameterNameValue {
  __type?: "ParameterNameValue";
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  ParameterValue?: string;
}

export namespace ParameterNameValue {
  export const filterSensitiveLog = (obj: ParameterNameValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterNameValue =>
    __isa(o, "ParameterNameValue");
}

export enum PendingAutomaticFailoverStatus {
  DISABLED = "disabled",
  ENABLED = "enabled"
}

/**
 * <p>A group of settings that are applied to the cluster in the future,
 *             or that are currently being applied.</p>
 */
export interface PendingModifiedValues {
  __type?: "PendingModifiedValues";
  /**
   * <p>The auth token status</p>
   */
  AuthTokenStatus?: AuthTokenUpdateStatus | string;

  /**
   * <p>A list of cache node IDs that are being removed (or will be removed) from the cluster.
   *             A node ID is a 4-digit numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeIdsToRemove?: string[];

  /**
   * <p>The cache node type that this cluster or replication group is scaled to.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The new cache engine version that the cluster  runs.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The new number of cache nodes for the cluster.</p>
   *         <p>For clusters running Redis, this value must be 1.
   *             For clusters running Memcached, this value must be between 1 and 20.</p>
   */
  NumCacheNodes?: number;
}

export namespace PendingModifiedValues {
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingModifiedValues =>
    __isa(o, "PendingModifiedValues");
}

/**
 * <p>Update action that has been processed for the corresponding apply/stop request</p>
 */
export interface ProcessedUpdateAction {
  __type?: "ProcessedUpdateAction";
  /**
   * <p>The ID of the cache cluster</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The ID of the replication group</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the update action on the Redis cluster</p>
   */
  UpdateActionStatus?: UpdateActionStatus | string;
}

export namespace ProcessedUpdateAction {
  export const filterSensitiveLog = (obj: ProcessedUpdateAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessedUpdateAction =>
    __isa(o, "ProcessedUpdateAction");
}

/**
 * <p>Represents the input of a <code>PurchaseReservedCacheNodesOffering</code> operation.</p>
 */
export interface PurchaseReservedCacheNodesOfferingMessage {
  __type?: "PurchaseReservedCacheNodesOfferingMessage";
  /**
   * <p>The number of cache node instances to reserve.</p>
   *         <p>Default: <code>1</code>
   *          </p>
   */
  CacheNodeCount?: number;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   *         <note>
   *             <p>The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation.
   *                 If this parameter is not specified,
   *                 ElastiCache automatically generates an identifier for the reservation.</p>
   *          </note>
   *         <p>Example: myreservationID</p>
   */
  ReservedCacheNodeId?: string;

  /**
   * <p>The ID of the reserved cache node offering to purchase.</p>
   *         <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   */
  ReservedCacheNodesOfferingId: string | undefined;
}

export namespace PurchaseReservedCacheNodesOfferingMessage {
  export const filterSensitiveLog = (
    obj: PurchaseReservedCacheNodesOfferingMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PurchaseReservedCacheNodesOfferingMessage =>
    __isa(o, "PurchaseReservedCacheNodesOfferingMessage");
}

export interface PurchaseReservedCacheNodesOfferingResult {
  __type?: "PurchaseReservedCacheNodesOfferingResult";
  /**
   * <p>Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.</p>
   */
  ReservedCacheNode?: ReservedCacheNode;
}

export namespace PurchaseReservedCacheNodesOfferingResult {
  export const filterSensitiveLog = (
    obj: PurchaseReservedCacheNodesOfferingResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PurchaseReservedCacheNodesOfferingResult =>
    __isa(o, "PurchaseReservedCacheNodesOfferingResult");
}

/**
 * <p>Represents the input of a <code>RebootCacheCluster</code> operation.</p>
 */
export interface RebootCacheClusterMessage {
  __type?: "RebootCacheClusterMessage";
  /**
   * <p>The cluster identifier. This parameter is stored as a lowercase string.</p>
   */
  CacheClusterId: string | undefined;

  /**
   * <p>A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.</p>
   */
  CacheNodeIdsToReboot: string[] | undefined;
}

export namespace RebootCacheClusterMessage {
  export const filterSensitiveLog = (obj: RebootCacheClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootCacheClusterMessage =>
    __isa(o, "RebootCacheClusterMessage");
}

export interface RebootCacheClusterResult {
  __type?: "RebootCacheClusterResult";
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: CacheCluster;
}

export namespace RebootCacheClusterResult {
  export const filterSensitiveLog = (obj: RebootCacheClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootCacheClusterResult =>
    __isa(o, "RebootCacheClusterResult");
}

/**
 * <p>Contains the specific price and frequency of a recurring charges for a reserved cache node,
 *             or for a reserved cache node offering.</p>
 */
export interface RecurringCharge {
  __type?: "RecurringCharge";
  /**
   * <p>The monetary amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
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
 * <p>Represents the input of a <code>RemoveTagsFromResource</code> operation.</p>
 */
export interface RemoveTagsFromResourceMessage {
  __type?: "RemoveTagsFromResourceMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want the tags removed,
   *             for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code>
   *             or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p>
   *         <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>A list of <code>TagKeys</code> identifying the tags you want removed from the named resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceMessage {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceMessage =>
    __isa(o, "RemoveTagsFromResourceMessage");
}

/**
 * <p>Contains all of the attributes of a specific Redis replication group.</p>
 */
export interface ReplicationGroup {
  __type?: "ReplicationGroup";
  /**
   * <p>A flag that enables encryption at-rest when set to <code>true</code>.</p>
   *         <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code>
   *             after the cluster is created. To enable encryption at-rest on a cluster
   *             you must set <code>AtRestEncryptionEnabled</code> to <code>true</code>
   *             when you create a cluster.</p>
   *         <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  AtRestEncryptionEnabled?: boolean;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password)
   *             when issuing Redis commands.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  AuthTokenEnabled?: boolean;

  /**
   * <p>The date the auth token was last modified</p>
   */
  AuthTokenLastModifiedDate?: Date;

  /**
   * <p>Indicates the status of Multi-AZ with automatic failover for this Redis replication group.</p>
   *         <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p>
   *          <ul>
   *             <li>
   *                <p>Redis versions earlier than 2.8.6.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode disabled): T1 node types.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode enabled): T1 node types.</p>
   *             </li>
   *          </ul>
   */
  AutomaticFailover?: AutomaticFailoverStatus | string;

  /**
   * <p>The name of the compute and memory capacity node type for each node in the replication group.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>A flag indicating whether or not this replication group is cluster enabled;
   *             i.e., whether its data can be partitioned across multiple shards (API/CLI: node groups).</p>
   *         <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ClusterEnabled?: boolean;

  /**
   * <p>The configuration endpoint for this replication group.
   *             Use the configuration endpoint to connect to this replication group.</p>
   */
  ConfigurationEndpoint?: Endpoint;

  /**
   * <p>The user supplied description of the replication group.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the disk in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The names of all the cache clusters that are part of this replication group.</p>
   */
  MemberClusters?: string[];

  /**
   * <p>A list of node groups in this replication group.
   *             For Redis (cluster mode disabled) replication groups, this is a single-element list.
   *             For Redis (cluster mode enabled) replication groups, the list contains an entry for each
   *             node group (shard).</p>
   */
  NodeGroups?: NodeGroup[];

  /**
   * <p>A group of settings to be applied to the replication group,
   *             either immediately or during the next maintenance window.</p>
   */
  PendingModifiedValues?: ReplicationGroupPendingModifiedValues;

  /**
   * <p>The identifier for the replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *         <important>
   *             <p>
   *             If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p>
   *          </important>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache  begins taking a daily snapshot of your node group (shard).</p>
   *         <p>Example: <code>05:00-09:00</code>
   *         </p>
   *         <p>If you do not specify this parameter, ElastiCache  automatically chooses an appropriate time range.</p>
   *         <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   */
  SnapshotWindow?: string;

  /**
   * <p>The cluster ID that is used as the daily snapshot source for the replication group.</p>
   */
  SnapshottingClusterId?: string;

  /**
   * <p>The current state of this replication group -
   *             <code>creating</code>,
   *             <code>available</code>,
   *             <code>modifying</code>,
   *             <code>deleting</code>,
   *             <code>create-failed</code>,
   *             <code>snapshotting</code>.</p>
   */
  Status?: string;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *         <p>You cannot modify the value of <code>TransitEncryptionEnabled</code>
   *             after the cluster is created. To enable in-transit encryption on a cluster
   *             you must set <code>TransitEncryptionEnabled</code> to <code>true</code>
   *             when you create a cluster.</p>
   *         <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *         <p>Default: <code>false</code>
   *          </p>
   */
  TransitEncryptionEnabled?: boolean;
}

export namespace ReplicationGroup {
  export const filterSensitiveLog = (obj: ReplicationGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationGroup =>
    __isa(o, "ReplicationGroup");
}

/**
 * <p>The specified replication group already exists.</p>
 */
export interface ReplicationGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplicationGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ReplicationGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ReplicationGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationGroupAlreadyExistsFault =>
    __isa(o, "ReplicationGroupAlreadyExistsFault");
}

/**
 * <p>The targeted replication group is not available. </p>
 */
export interface ReplicationGroupAlreadyUnderMigrationFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplicationGroupAlreadyUnderMigrationFault";
  $fault: "client";
  message?: string;
}

export namespace ReplicationGroupAlreadyUnderMigrationFault {
  export const filterSensitiveLog = (
    obj: ReplicationGroupAlreadyUnderMigrationFault
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ReplicationGroupAlreadyUnderMigrationFault =>
    __isa(o, "ReplicationGroupAlreadyUnderMigrationFault");
}

/**
 * <p>Represents the output of a <code>DescribeReplicationGroups</code> operation.</p>
 */
export interface ReplicationGroupMessage {
  __type?: "ReplicationGroupMessage";
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of replication groups. Each item in the list contains detailed information about one replication group.</p>
   */
  ReplicationGroups?: ReplicationGroup[];
}

export namespace ReplicationGroupMessage {
  export const filterSensitiveLog = (obj: ReplicationGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationGroupMessage =>
    __isa(o, "ReplicationGroupMessage");
}

/**
 * <p>The specified replication group does not exist.</p>
 */
export interface ReplicationGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplicationGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReplicationGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: ReplicationGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationGroupNotFoundFault =>
    __isa(o, "ReplicationGroupNotFoundFault");
}

/**
 * <p>The designated replication group is not available for data migration.</p>
 */
export interface ReplicationGroupNotUnderMigrationFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplicationGroupNotUnderMigrationFault";
  $fault: "client";
  message?: string;
}

export namespace ReplicationGroupNotUnderMigrationFault {
  export const filterSensitiveLog = (
    obj: ReplicationGroupNotUnderMigrationFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationGroupNotUnderMigrationFault =>
    __isa(o, "ReplicationGroupNotUnderMigrationFault");
}

/**
 * <p>The settings to be applied to the Redis replication group,
 *             either immediately or during the next maintenance window.</p>
 */
export interface ReplicationGroupPendingModifiedValues {
  __type?: "ReplicationGroupPendingModifiedValues";
  /**
   * <p>The auth token status</p>
   */
  AuthTokenStatus?: AuthTokenUpdateStatus | string;

  /**
   * <p>Indicates the status of Multi-AZ with automatic failover for this Redis replication group.</p>
   *         <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p>
   *          <ul>
   *             <li>
   *                <p>Redis versions earlier than 2.8.6.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode disabled): T1 node types.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode enabled): T1 node types.</p>
   *             </li>
   *          </ul>
   */
  AutomaticFailoverStatus?: PendingAutomaticFailoverStatus | string;

  /**
   * <p>The primary cluster ID that is applied immediately (if <code>--apply-immediately</code>
   *             was specified), or during the next maintenance window.</p>
   */
  PrimaryClusterId?: string;

  /**
   * <p>The status of an online resharding operation.</p>
   */
  Resharding?: ReshardingStatus;
}

export namespace ReplicationGroupPendingModifiedValues {
  export const filterSensitiveLog = (
    obj: ReplicationGroupPendingModifiedValues
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationGroupPendingModifiedValues =>
    __isa(o, "ReplicationGroupPendingModifiedValues");
}

/**
 * <p>Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.</p>
 */
export interface ReservedCacheNode {
  __type?: "ReservedCacheNode";
  /**
   * <p>The number of cache nodes that have been reserved.</p>
   */
  CacheNodeCount?: number;

  /**
   * <p>The cache node type for the reserved cache nodes.</p>
   *
   *         <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   * 		       <ul>
   *             <li>
   *                <p>General purpose:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   *     							          <p>
   *                         <b>M5 node types:</b>
   *     						              <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *
   *
   *     						           </p>
   *
   *
   * 						               <p>
   *                         <b>M4 node types:</b>
   *     						              <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *
   *
   *     				             <p>
   *                         <b>T2 node types:</b>
   * 					                   <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *
   *
   *
   *
   *     						        </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 						               <p>
   *                         <b>T1 node types:</b>
   * 					                   <code>cache.t1.micro</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M1 node types:</b>
   * 						                  <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M3 node types:</b>
   *     						              <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *
   * 						            </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *
   * 				           <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 			                  <p>
   *                         <b>C1 node types:</b>
   * 			                     <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   * 					                <p>
   *                         <b>R5 node types:</b>
   *     					               <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *
   *     					            <p>
   *                         <b>R4 node types:</b>
   *     					               <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *     					         </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   *                         <p>
   *                         <b>M2 node types:</b>
   *     					               <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *
   *     						           <p>
   *                         <b>R3 node types:</b>
   *     					               <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *
   *     						        </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Additional node type info</b>
   *          </p>
   * 		       <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by default.</p>
   *             </li>
   *             <li>
   *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis configuration variables <code>appendonly</code> and
   * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
   *             </li>
   *          </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved cache node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The offering type of this reserved cache node.</p>
   */
  OfferingType?: string;

  /**
   * <p>The description of the reserved cache node.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The recurring price charged to run this reserved cache node.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The Amazon Resource Name (ARN) of the reserved cache node.</p>
   *         <p>Example: <code>arn:aws:elasticache:us-east-1:123456789012:reserved-instance:ri-2017-03-27-08-33-25-582</code>
   *          </p>
   */
  ReservationARN?: string;

  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedCacheNodeId?: string;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedCacheNodesOfferingId?: string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The state of the reserved cache node.</p>
   */
  State?: string;

  /**
   * <p>The hourly price charged for this reserved cache node.</p>
   */
  UsagePrice?: number;
}

export namespace ReservedCacheNode {
  export const filterSensitiveLog = (obj: ReservedCacheNode): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedCacheNode =>
    __isa(o, "ReservedCacheNode");
}

/**
 * <p>You already have a reservation with the given identifier.</p>
 */
export interface ReservedCacheNodeAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedCacheNodeAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedCacheNodeAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ReservedCacheNodeAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedCacheNodeAlreadyExistsFault =>
    __isa(o, "ReservedCacheNodeAlreadyExistsFault");
}

/**
 * <p>Represents the output of a <code>DescribeReservedCacheNodes</code> operation.</p>
 */
export interface ReservedCacheNodeMessage {
  __type?: "ReservedCacheNodeMessage";
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved cache nodes. Each element in the list contains detailed information about one node.</p>
   */
  ReservedCacheNodes?: ReservedCacheNode[];
}

export namespace ReservedCacheNodeMessage {
  export const filterSensitiveLog = (obj: ReservedCacheNodeMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedCacheNodeMessage =>
    __isa(o, "ReservedCacheNodeMessage");
}

/**
 * <p>The requested reserved cache node was not found.</p>
 */
export interface ReservedCacheNodeNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedCacheNodeNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedCacheNodeNotFoundFault {
  export const filterSensitiveLog = (
    obj: ReservedCacheNodeNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedCacheNodeNotFoundFault =>
    __isa(o, "ReservedCacheNodeNotFoundFault");
}

/**
 * <p>The request cannot be processed because it would exceed the user's cache node quota.</p>
 */
export interface ReservedCacheNodeQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedCacheNodeQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedCacheNodeQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ReservedCacheNodeQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedCacheNodeQuotaExceededFault =>
    __isa(o, "ReservedCacheNodeQuotaExceededFault");
}

/**
 * <p>Describes all of the attributes of a reserved cache node offering.</p>
 */
export interface ReservedCacheNodesOffering {
  __type?: "ReservedCacheNodesOffering";
  /**
   * <p>The cache node type for the reserved cache node.</p>
   *         <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   * 		       <ul>
   *             <li>
   *                <p>General purpose:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   *     							          <p>
   *                         <b>M5 node types:</b>
   *     						              <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *
   *
   *     						           </p>
   *
   *
   * 						               <p>
   *                         <b>M4 node types:</b>
   *     						              <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *
   *
   *     				             <p>
   *                         <b>T2 node types:</b>
   * 					                   <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *
   *
   *
   *
   *     						        </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 						               <p>
   *                         <b>T1 node types:</b>
   * 					                   <code>cache.t1.micro</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M1 node types:</b>
   * 						                  <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M3 node types:</b>
   *     						              <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *
   * 						            </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *
   * 				           <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 			                  <p>
   *                         <b>C1 node types:</b>
   * 			                     <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   * 					                <p>
   *                         <b>R5 node types:</b>
   *     					               <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *
   *     					            <p>
   *                         <b>R4 node types:</b>
   *     					               <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *     					         </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   *                         <p>
   *                         <b>M2 node types:</b>
   *     					               <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *
   *     						           <p>
   *                         <b>R3 node types:</b>
   *     					               <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *
   *     						        </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Additional node type info</b>
   *          </p>
   * 		       <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by default.</p>
   *             </li>
   *             <li>
   *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis configuration variables <code>appendonly</code> and
   * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
   *             </li>
   *          </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The duration of the offering. in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The offering type.</p>
   */
  OfferingType?: string;

  /**
   * <p>The cache engine used by the offering.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The recurring price charged to run this reserved cache node.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>A unique identifier for the reserved cache node offering.</p>
   */
  ReservedCacheNodesOfferingId?: string;

  /**
   * <p>The hourly price charged for this offering.</p>
   */
  UsagePrice?: number;
}

export namespace ReservedCacheNodesOffering {
  export const filterSensitiveLog = (obj: ReservedCacheNodesOffering): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedCacheNodesOffering =>
    __isa(o, "ReservedCacheNodesOffering");
}

/**
 * <p>Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.</p>
 */
export interface ReservedCacheNodesOfferingMessage {
  __type?: "ReservedCacheNodesOfferingMessage";
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved cache node offerings. Each element in the list contains detailed information about one offering.</p>
   */
  ReservedCacheNodesOfferings?: ReservedCacheNodesOffering[];
}

export namespace ReservedCacheNodesOfferingMessage {
  export const filterSensitiveLog = (
    obj: ReservedCacheNodesOfferingMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedCacheNodesOfferingMessage =>
    __isa(o, "ReservedCacheNodesOfferingMessage");
}

/**
 * <p>The requested cache node offering does not exist.</p>
 */
export interface ReservedCacheNodesOfferingNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedCacheNodesOfferingNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedCacheNodesOfferingNotFoundFault {
  export const filterSensitiveLog = (
    obj: ReservedCacheNodesOfferingNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedCacheNodesOfferingNotFoundFault =>
    __isa(o, "ReservedCacheNodesOfferingNotFoundFault");
}

/**
 * <p>Represents the input of a <code>ResetCacheParameterGroup</code> operation.</p>
 */
export interface ResetCacheParameterGroupMessage {
  __type?: "ResetCacheParameterGroupMessage";
  /**
   * <p>The name of the cache parameter group to reset.</p>
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names to reset to their default values.
   *             If <code>ResetAllParameters</code> is <code>true</code>,
   *             do not use <code>ParameterNameValues</code>.
   *             If <code>ResetAllParameters</code> is <code>false</code>,
   *             you must specify the name of at least one parameter to reset.</p>
   */
  ParameterNameValues?: ParameterNameValue[];

  /**
   * <p>If <code>true</code>,
   *             all parameters in the cache parameter group are reset to their default values.
   *             If <code>false</code>, only the parameters listed by <code>ParameterNameValues</code>
   *             are reset to their default values.</p>
   *         <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ResetAllParameters?: boolean;
}

export namespace ResetCacheParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ResetCacheParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetCacheParameterGroupMessage =>
    __isa(o, "ResetCacheParameterGroupMessage");
}

/**
 * <p>A list of <code>PreferredAvailabilityZones</code> objects that specifies
 *             the configuration of a node group in the resharded cluster.</p>
 */
export interface ReshardingConfiguration {
  __type?: "ReshardingConfiguration";
  /**
   * <p>Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these
   *             configuration values apply to.</p>
   */
  NodeGroupId?: string;

  /**
   * <p>A list of preferred availability zones for the nodes in this cluster.</p>
   */
  PreferredAvailabilityZones?: string[];
}

export namespace ReshardingConfiguration {
  export const filterSensitiveLog = (obj: ReshardingConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReshardingConfiguration =>
    __isa(o, "ReshardingConfiguration");
}

/**
 * <p>The status of an online resharding operation.</p>
 */
export interface ReshardingStatus {
  __type?: "ReshardingStatus";
  /**
   * <p>Represents the progress of an online resharding operation.</p>
   */
  SlotMigration?: SlotMigration;
}

export namespace ReshardingStatus {
  export const filterSensitiveLog = (obj: ReshardingStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReshardingStatus =>
    __isa(o, "ReshardingStatus");
}

/**
 * <p>Represents the input of a <code>RevokeCacheSecurityGroupIngress</code> operation.</p>
 */
export interface RevokeCacheSecurityGroupIngressMessage {
  __type?: "RevokeCacheSecurityGroupIngressMessage";
  /**
   * <p>The name of the cache security group to revoke ingress from.</p>
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>The name of the Amazon EC2 security group to revoke access from.</p>
   */
  EC2SecurityGroupName: string | undefined;

  /**
   * <p>The AWS account number of the Amazon EC2 security group owner.
   *             Note that this is not the same thing as an AWS access key ID - you must provide
   *             a valid AWS account number for this parameter.</p>
   */
  EC2SecurityGroupOwnerId: string | undefined;
}

export namespace RevokeCacheSecurityGroupIngressMessage {
  export const filterSensitiveLog = (
    obj: RevokeCacheSecurityGroupIngressMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeCacheSecurityGroupIngressMessage =>
    __isa(o, "RevokeCacheSecurityGroupIngressMessage");
}

export interface RevokeCacheSecurityGroupIngressResult {
  __type?: "RevokeCacheSecurityGroupIngressResult";
  /**
   * <p>Represents the output of one of the following operations:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>AuthorizeCacheSecurityGroupIngress</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateCacheSecurityGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RevokeCacheSecurityGroupIngress</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  CacheSecurityGroup?: CacheSecurityGroup;
}

export namespace RevokeCacheSecurityGroupIngressResult {
  export const filterSensitiveLog = (
    obj: RevokeCacheSecurityGroupIngressResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeCacheSecurityGroupIngressResult =>
    __isa(o, "RevokeCacheSecurityGroupIngressResult");
}

/**
 * <p>Represents a single cache security group and its status.</p>
 */
export interface SecurityGroupMembership {
  __type?: "SecurityGroupMembership";
  /**
   * <p>The identifier of the cache security group.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The status of the cache security group membership.
   *             The status changes whenever a cache security group is modified,
   *             or when the cache security groups assigned to a cluster are modified.</p>
   */
  Status?: string;
}

export namespace SecurityGroupMembership {
  export const filterSensitiveLog = (obj: SecurityGroupMembership): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecurityGroupMembership =>
    __isa(o, "SecurityGroupMembership");
}

/**
 * <p>The specified service linked role (SLR) was not found.</p>
 */
export interface ServiceLinkedRoleNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceLinkedRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ServiceLinkedRoleNotFoundFault {
  export const filterSensitiveLog = (
    obj: ServiceLinkedRoleNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceLinkedRoleNotFoundFault =>
    __isa(o, "ServiceLinkedRoleNotFoundFault");
}

/**
 * <p>An update that you can apply to your Redis clusters.</p>
 */
export interface ServiceUpdate {
  __type?: "ServiceUpdate";
  /**
   * <p>Indicates whether the service update will be automatically applied once the recommended apply-by date has expired. </p>
   */
  AutoUpdateAfterRecommendedApplyByDate?: boolean;

  /**
   * <p>The Elasticache engine to which the update applies. Either Redis or Memcached</p>
   */
  Engine?: string;

  /**
   * <p>The Elasticache engine version to which the update applies. Either Redis or Memcached engine version</p>
   */
  EngineVersion?: string;

  /**
   * <p>The estimated length of time the service update will take</p>
   */
  EstimatedUpdateTime?: string;

  /**
   * <p>Provides details of the service update</p>
   */
  ServiceUpdateDescription?: string;

  /**
   * <p>The date after which the service update is no longer available</p>
   */
  ServiceUpdateEndDate?: Date;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The recommendend date to apply the service update in order to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   */
  ServiceUpdateRecommendedApplyByDate?: Date;

  /**
   * <p>The date when the service update is initially available</p>
   */
  ServiceUpdateReleaseDate?: Date;

  /**
   * <p>The severity of the service update</p>
   */
  ServiceUpdateSeverity?: ServiceUpdateSeverity | string;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: ServiceUpdateStatus | string;

  /**
   * <p>Reflects the nature of the service update</p>
   */
  ServiceUpdateType?: ServiceUpdateType | string;
}

export namespace ServiceUpdate {
  export const filterSensitiveLog = (obj: ServiceUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUpdate => __isa(o, "ServiceUpdate");
}

/**
 * <p>The service update doesn't exist</p>
 */
export interface ServiceUpdateNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUpdateNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ServiceUpdateNotFoundFault {
  export const filterSensitiveLog = (obj: ServiceUpdateNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUpdateNotFoundFault =>
    __isa(o, "ServiceUpdateNotFoundFault");
}

export enum ServiceUpdateSeverity {
  CRITICAL = "critical",
  IMPORTANT = "important",
  LOW = "low",
  MEDIUM = "medium"
}

export interface ServiceUpdatesMessage {
  __type?: "ServiceUpdatesMessage";
  /**
   * <p>An optional marker returned from a prior request.
   *            Use this marker for pagination of results from this operation. If this
   *            parameter is specified, the response includes only records beyond the marker, up to the
   *            value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of service updates</p>
   */
  ServiceUpdates?: ServiceUpdate[];
}

export namespace ServiceUpdatesMessage {
  export const filterSensitiveLog = (obj: ServiceUpdatesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUpdatesMessage =>
    __isa(o, "ServiceUpdatesMessage");
}

export enum ServiceUpdateStatus {
  AVAILABLE = "available",
  CANCELLED = "cancelled",
  EXPIRED = "expired"
}

export enum ServiceUpdateType {
  SECURITY_UPDATE = "security-update"
}

export enum SlaMet {
  NA = "n/a",
  NO = "no",
  YES = "yes"
}

/**
 * <p>Represents the progress of an online resharding operation.</p>
 */
export interface SlotMigration {
  __type?: "SlotMigration";
  /**
   * <p>The percentage of the slot migration that is complete.</p>
   */
  ProgressPercentage?: number;
}

export namespace SlotMigration {
  export const filterSensitiveLog = (obj: SlotMigration): any => ({
    ...obj
  });
  export const isa = (o: any): o is SlotMigration => __isa(o, "SlotMigration");
}

/**
 * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
 */
export interface Snapshot {
  __type?: "Snapshot";
  /**
   * <p>This parameter is currently disabled.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Indicates the status of Multi-AZ with automatic failover for the source Redis replication group.</p>
   *         <p>Amazon ElastiCache for Redis does not support Multi-AZ with automatic failover on:</p>
   *          <ul>
   *             <li>
   *                <p>Redis versions earlier than 2.8.6.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode disabled): T1 node types.</p>
   *             </li>
   *             <li>
   *                <p>Redis (cluster mode enabled): T1 node types.</p>
   *             </li>
   *          </ul>
   */
  AutomaticFailover?: AutomaticFailoverStatus | string;

  /**
   * <p>The date and time when the source cluster was created.</p>
   */
  CacheClusterCreateTime?: Date;

  /**
   * <p>The user-supplied identifier of the source cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The name of the compute and memory capacity node type for the source cluster.</p>
   *
   *         <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   * 		       <ul>
   *             <li>
   *                <p>General purpose:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   *     							          <p>
   *                         <b>M5 node types:</b>
   *     						              <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *
   *
   *     						           </p>
   *
   *
   * 						               <p>
   *                         <b>M4 node types:</b>
   *     						              <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *
   *
   *     				             <p>
   *                         <b>T2 node types:</b>
   * 					                   <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *
   *
   *
   *
   *     						        </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 						               <p>
   *                         <b>T1 node types:</b>
   * 					                   <code>cache.t1.micro</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M1 node types:</b>
   * 						                  <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *
   * 						               <p>
   *                         <b>M3 node types:</b>
   *     						              <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *
   * 						            </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *
   * 				           <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   * 			                  <p>
   *                         <b>C1 node types:</b>
   * 			                     <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *
   * 					                <p>
   *                         <b>R5 node types:</b>
   *     					               <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *
   *     					            <p>
   *                         <b>R4 node types:</b>
   *     					               <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *     					         </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended)</p>
   *                         <p>
   *                         <b>M2 node types:</b>
   *     					               <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *
   *     						           <p>
   *                         <b>R3 node types:</b>
   *     					               <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *
   *     						        </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   * 		       <p>
   *             <b>Additional node type info</b>
   *          </p>
   * 		       <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by default.</p>
   *             </li>
   *             <li>
   *                <p>Redis append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis Multi-AZ with automatic failover is not supported on T1 instances.</p>
   *             </li>
   *             <li>
   *                <p>Redis configuration variables <code>appendonly</code> and
   * 				<code>appendfsync</code> are not supported on Redis version 2.8.22 and later.</p>
   *             </li>
   *          </ul>
   */
  CacheNodeType?: string;

  /**
   * <p>The cache parameter group that is associated with the source cluster.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The name of the cache subnet group associated with the source cluster.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>The name of the cache engine (<code>memcached</code> or
   *             <code>redis</code>) used by the source cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the cache engine version that is used by the source cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of the cache nodes in the source cluster.</p>
   */
  NodeSnapshots?: NodeSnapshot[];

  /**
   * <p>The number of cache nodes in the source cluster.</p>
   *         <p>For clusters running Redis, this value must be 1.
   *             For clusters running Memcached, this value must be between 1 and 20.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>The number of node groups (shards) in this snapshot.
   *             When restoring from a snapshot, the number of node groups (shards) in the snapshot and in the restored
   *             replication group must be the same.</p>
   */
  NumNodeGroups?: number;

  /**
   * <p>The port number used by each cache nodes in the source cluster.</p>
   */
  Port?: number;

  /**
   * <p>The name of the Availability Zone in which the source cluster is located.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>Specifies the weekly time range during which maintenance
   *    on the cluster is performed. It is specified as a range in
   *    the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *    maintenance window is a 60 minute period.</p>
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A description of the source replication group.</p>
   */
  ReplicationGroupDescription?: string;

  /**
   * <p>The unique identifier of the source replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The name of a snapshot.
   *             For an automatic snapshot, the name is system-generated.
   *             For a manual snapshot, this is the user-provided name.</p>
   */
  SnapshotName?: string;

  /**
   * <p>For an automatic snapshot, the number of days for which ElastiCache retains the snapshot before deleting it.</p>
   *         <p>For manual snapshots, this field reflects the <code>SnapshotRetentionLimit</code> for the
   *             source cluster when the snapshot was created. This field is otherwise ignored:
   *             Manual snapshots do not expire, and can only be deleted using the <code>DeleteSnapshot</code>
   *             operation. </p>
   *         <p>
   *             <b>Important</b>
   *           If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>Indicates whether the snapshot is from an automatic backup (<code>automated</code>)
   *             or was created manually (<code>manual</code>).</p>
   */
  SnapshotSource?: string;

  /**
   * <p>The status of the snapshot. Valid values: <code>creating</code> | <code>available</code>
   *             | <code>restoring</code> | <code>copying</code> | <code>deleting</code>.</p>
   */
  SnapshotStatus?: string;

  /**
   * <p>The daily time range during which ElastiCache takes daily snapshots of the source cluster.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the topic used by the source cluster for publishing notifications.</p>
   */
  TopicArn?: string;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the source cluster.</p>
   */
  VpcId?: string;
}

export namespace Snapshot {
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is Snapshot => __isa(o, "Snapshot");
}

/**
 * <p>You already have a snapshot with the given name.</p>
 */
export interface SnapshotAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotAlreadyExistsFault {
  export const filterSensitiveLog = (obj: SnapshotAlreadyExistsFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotAlreadyExistsFault =>
    __isa(o, "SnapshotAlreadyExistsFault");
}

/**
 * <p>You attempted one of the following operations:</p>
 *         <ul>
 *             <li>
 *                <p>Creating a snapshot of a Redis cluster running on a <code>cache.t1.micro</code> cache
 *                     node.</p>
 *             </li>
 *             <li>
 *                <p>Creating a snapshot of a cluster that is running Memcached rather than Redis.</p>
 *             </li>
 *          </ul>
 *         <p>Neither of these are supported by ElastiCache.</p>
 */
export interface SnapshotFeatureNotSupportedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotFeatureNotSupportedFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotFeatureNotSupportedFault {
  export const filterSensitiveLog = (
    obj: SnapshotFeatureNotSupportedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotFeatureNotSupportedFault =>
    __isa(o, "SnapshotFeatureNotSupportedFault");
}

/**
 * <p>The requested snapshot name does not refer to an existing snapshot.</p>
 */
export interface SnapshotNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotNotFoundFault {
  export const filterSensitiveLog = (obj: SnapshotNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotNotFoundFault =>
    __isa(o, "SnapshotNotFoundFault");
}

/**
 * <p>The request cannot be processed because it would exceed the maximum number of snapshots.</p>
 */
export interface SnapshotQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotQuotaExceededFault {
  export const filterSensitiveLog = (obj: SnapshotQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotQuotaExceededFault =>
    __isa(o, "SnapshotQuotaExceededFault");
}

export type SourceType =
  | "cache-cluster"
  | "cache-parameter-group"
  | "cache-security-group"
  | "cache-subnet-group"
  | "replication-group";

export interface StartMigrationMessage {
  __type?: "StartMigrationMessage";
  /**
   * <p>List of endpoints from which data should be migrated. For Redis (cluster mode disabled), list should have only one element.</p>
   */
  CustomerNodeEndpointList: CustomerNodeEndpoint[] | undefined;

  /**
   * <p>The ID of the replication group to which data should be migrated.</p>
   */
  ReplicationGroupId: string | undefined;
}

export namespace StartMigrationMessage {
  export const filterSensitiveLog = (obj: StartMigrationMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartMigrationMessage =>
    __isa(o, "StartMigrationMessage");
}

export interface StartMigrationResponse {
  __type?: "StartMigrationResponse";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace StartMigrationResponse {
  export const filterSensitiveLog = (obj: StartMigrationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartMigrationResponse =>
    __isa(o, "StartMigrationResponse");
}

/**
 * <p>Represents the subnet associated with a cluster.
 *             This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.</p>
 */
export interface Subnet {
  __type?: "Subnet";
  /**
   * <p>The Availability Zone associated with the subnet.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>The unique identifier for the subnet.</p>
   */
  SubnetIdentifier?: string;
}

export namespace Subnet {
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj
  });
  export const isa = (o: any): o is Subnet => __isa(o, "Subnet");
}

/**
 * <p>The requested subnet is being used by another cache subnet group.</p>
 */
export interface SubnetInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetInUse {
  export const filterSensitiveLog = (obj: SubnetInUse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubnetInUse => __isa(o, "SubnetInUse");
}

/**
 * <p>A cost allocation Tag that can be added to an ElastiCache cluster or replication group.
 *             Tags are composed of a Key/Value pair. A tag with a null Value is permitted.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key for the tag. May not be null.</p>
   */
  Key?: string;

  /**
   * <p>The tag's value. May be null.</p>
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
 * <p>Represents the output from the <code>AddTagsToResource</code>,
 *             <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.</p>
 */
export interface TagListMessage {
  __type?: "TagListMessage";
  /**
   * <p>A list of cost allocation tags as key-value pairs.</p>
   */
  TagList?: Tag[];
}

export namespace TagListMessage {
  export const filterSensitiveLog = (obj: TagListMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagListMessage =>
    __isa(o, "TagListMessage");
}

/**
 * <p>The requested tag was not found on this resource.</p>
 */
export interface TagNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "TagNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace TagNotFoundFault {
  export const filterSensitiveLog = (obj: TagNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagNotFoundFault =>
    __isa(o, "TagNotFoundFault");
}

/**
 * <p>The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.</p>
 */
export interface TagQuotaPerResourceExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "TagQuotaPerResourceExceeded";
  $fault: "client";
  message?: string;
}

export namespace TagQuotaPerResourceExceeded {
  export const filterSensitiveLog = (
    obj: TagQuotaPerResourceExceeded
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagQuotaPerResourceExceeded =>
    __isa(o, "TagQuotaPerResourceExceeded");
}

export interface TestFailoverMessage {
  __type?: "TestFailoverMessage";
  /**
   * <p>The name of the node group (called shard in the console) in this replication group on
   *             which automatic failover is to be tested.
   *             You may test automatic failover on up to 5 node groups in any rolling 24-hour period.</p>
   */
  NodeGroupId: string | undefined;

  /**
   * <p>The name of the replication group (console: cluster) whose automatic failover is being
   *             tested by this operation.</p>
   */
  ReplicationGroupId: string | undefined;
}

export namespace TestFailoverMessage {
  export const filterSensitiveLog = (obj: TestFailoverMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestFailoverMessage =>
    __isa(o, "TestFailoverMessage");
}

/**
 * <p>The <code>TestFailover</code> action is not available.</p>
 */
export interface TestFailoverNotAvailableFault
  extends __SmithyException,
    $MetadataBearer {
  name: "TestFailoverNotAvailableFault";
  $fault: "client";
  message?: string;
}

export namespace TestFailoverNotAvailableFault {
  export const filterSensitiveLog = (
    obj: TestFailoverNotAvailableFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestFailoverNotAvailableFault =>
    __isa(o, "TestFailoverNotAvailableFault");
}

export interface TestFailoverResult {
  __type?: "TestFailoverResult";
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export namespace TestFailoverResult {
  export const filterSensitiveLog = (obj: TestFailoverResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestFailoverResult =>
    __isa(o, "TestFailoverResult");
}

/**
 * <p>Filters update actions from the service updates that are in available status during the time range.</p>
 */
export interface TimeRangeFilter {
  __type?: "TimeRangeFilter";
  /**
   * <p>The end time of the time range filter</p>
   */
  EndTime?: Date;

  /**
   * <p>The start time of the time range filter</p>
   */
  StartTime?: Date;
}

export namespace TimeRangeFilter {
  export const filterSensitiveLog = (obj: TimeRangeFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimeRangeFilter =>
    __isa(o, "TimeRangeFilter");
}

/**
 * <p>Update action that has failed to be processed for the corresponding apply/stop request</p>
 */
export interface UnprocessedUpdateAction {
  __type?: "UnprocessedUpdateAction";
  /**
   * <p>The ID of the cache cluster</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The error message that describes the reason the request was not processed</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error type for requests that are not processed</p>
   */
  ErrorType?: string;

  /**
   * <p>The replication group ID</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;
}

export namespace UnprocessedUpdateAction {
  export const filterSensitiveLog = (obj: UnprocessedUpdateAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnprocessedUpdateAction =>
    __isa(o, "UnprocessedUpdateAction");
}

/**
 * <p>The status of the service update for a specific replication group</p>
 */
export interface UpdateAction {
  __type?: "UpdateAction";
  /**
   * <p>The ID of the cache cluster</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The status of the service update on the cache node</p>
   */
  CacheNodeUpdateStatus?: CacheNodeUpdateStatus[];

  /**
   * <p>The Elasticache engine to which the update applies. Either Redis or Memcached</p>
   */
  Engine?: string;

  /**
   * <p>The estimated length of time for the update to complete</p>
   */
  EstimatedUpdateTime?: string;

  /**
   * <p>The status of the service update on the node group</p>
   */
  NodeGroupUpdateStatus?: NodeGroupUpdateStatus[];

  /**
   * <p>The progress of the service update on the replication group</p>
   */
  NodesUpdated?: string;

  /**
   * <p>The ID of the replication group</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The recommended date to apply the service update to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   */
  ServiceUpdateRecommendedApplyByDate?: Date;

  /**
   * <p>The date the update is first available</p>
   */
  ServiceUpdateReleaseDate?: Date;

  /**
   * <p>The severity of the service update</p>
   */
  ServiceUpdateSeverity?: ServiceUpdateSeverity | string;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: ServiceUpdateStatus | string;

  /**
   * <p>Reflects the nature of the service update  </p>
   */
  ServiceUpdateType?: ServiceUpdateType | string;

  /**
   * <p>If yes, all nodes in the replication group have been updated by the recommended apply-by date. If no, at least one node in the replication group have not been updated by the recommended apply-by date. If N/A, the replication group was created after the
   *       recommended apply-by date.</p>
   */
  SlaMet?: SlaMet | string;

  /**
   * <p>The date that the service update is available to a replication group</p>
   */
  UpdateActionAvailableDate?: Date;

  /**
   * <p>The status of the update action</p>
   */
  UpdateActionStatus?: UpdateActionStatus | string;

  /**
   * <p>The date when the UpdateActionStatus was last modified</p>
   */
  UpdateActionStatusModifiedDate?: Date;
}

export namespace UpdateAction {
  export const filterSensitiveLog = (obj: UpdateAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAction => __isa(o, "UpdateAction");
}

export interface UpdateActionResultsMessage {
  __type?: "UpdateActionResultsMessage";
  /**
   * <p>Update actions that have been processed successfully</p>
   */
  ProcessedUpdateActions?: ProcessedUpdateAction[];

  /**
   * <p>Update actions that haven't been processed successfully</p>
   */
  UnprocessedUpdateActions?: UnprocessedUpdateAction[];
}

export namespace UpdateActionResultsMessage {
  export const filterSensitiveLog = (obj: UpdateActionResultsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateActionResultsMessage =>
    __isa(o, "UpdateActionResultsMessage");
}

export interface UpdateActionsMessage {
  __type?: "UpdateActionsMessage";
  /**
   * <p>An optional marker returned from a prior request.
   *            Use this marker for pagination of results from this operation. If this
   *            parameter is specified, the response includes only records beyond the marker, up to the
   *            value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Returns a list of update actions</p>
   */
  UpdateActions?: UpdateAction[];
}

export namespace UpdateActionsMessage {
  export const filterSensitiveLog = (obj: UpdateActionsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateActionsMessage =>
    __isa(o, "UpdateActionsMessage");
}

export enum UpdateActionStatus {
  COMPLETE = "complete",
  IN_PROGRESS = "in-progress",
  NOT_APPLIED = "not-applied",
  STOPPED = "stopped",
  STOPPING = "stopping",
  WAITING_TO_START = "waiting-to-start"
}
