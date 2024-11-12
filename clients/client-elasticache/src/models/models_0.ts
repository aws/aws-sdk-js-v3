// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElastiCacheServiceException as __BaseException } from "./ElastiCacheServiceException";

/**
 * <p>A tag that can be added to an ElastiCache cluster or replication group. Tags are
 *             composed of a Key/Value pair. You can use tags to categorize and track all your
 *             ElastiCache resources, with the exception of global replication group. When you add or
 *             remove tags on replication groups, those actions will be replicated to all nodes in the
 *             replication group. A tag with a null Value is permitted.</p>
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
 * <p>Represents the input of an AddTagsToResource operation.</p>
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added, for
   *             example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or
   *                 <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.
   *             ElastiCache resources are <i>cluster</i> and
   *             <i>snapshot</i>.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)
   *                 and Amazon Service Namespaces</a>.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>The requested cluster ID does not refer to an existing cluster.</p>
 * @public
 */
export class CacheClusterNotFoundFault extends __BaseException {
  readonly name: "CacheClusterNotFoundFault" = "CacheClusterNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheClusterNotFoundFault, __BaseException>) {
    super({
      name: "CacheClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheClusterNotFoundFault.prototype);
  }
}

/**
 * <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
 * @public
 */
export class CacheParameterGroupNotFoundFault extends __BaseException {
  readonly name: "CacheParameterGroupNotFoundFault" = "CacheParameterGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "CacheParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheParameterGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 * @public
 */
export class CacheSecurityGroupNotFoundFault extends __BaseException {
  readonly name: "CacheSecurityGroupNotFoundFault" = "CacheSecurityGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSecurityGroupNotFoundFault, __BaseException>) {
    super({
      name: "CacheSecurityGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSecurityGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested cache subnet group name does not refer to an existing cache subnet
 *             group.</p>
 * @public
 */
export class CacheSubnetGroupNotFoundFault extends __BaseException {
  readonly name: "CacheSubnetGroupNotFoundFault" = "CacheSubnetGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "CacheSubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 *             resource.</p>
 * @public
 */
export class InvalidARNFault extends __BaseException {
  readonly name: "InvalidARNFault" = "InvalidARNFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidARNFault, __BaseException>) {
    super({
      name: "InvalidARNFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidARNFault.prototype);
  }
}

/**
 * <p>The requested replication group is not in the <code>available</code> state.</p>
 * @public
 */
export class InvalidReplicationGroupStateFault extends __BaseException {
  readonly name: "InvalidReplicationGroupStateFault" = "InvalidReplicationGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReplicationGroupStateFault, __BaseException>) {
    super({
      name: "InvalidReplicationGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReplicationGroupStateFault.prototype);
  }
}

/**
 * <p>The state of the serverless cache snapshot was not received. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export class InvalidServerlessCacheSnapshotStateFault extends __BaseException {
  readonly name: "InvalidServerlessCacheSnapshotStateFault" = "InvalidServerlessCacheSnapshotStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidServerlessCacheSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidServerlessCacheSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidServerlessCacheSnapshotStateFault.prototype);
  }
}

/**
 * <p>The account for these credentials is not currently active.</p>
 * @public
 */
export class InvalidServerlessCacheStateFault extends __BaseException {
  readonly name: "InvalidServerlessCacheStateFault" = "InvalidServerlessCacheStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidServerlessCacheStateFault, __BaseException>) {
    super({
      name: "InvalidServerlessCacheStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidServerlessCacheStateFault.prototype);
  }
}

/**
 * <p>The specified replication group does not exist.</p>
 * @public
 */
export class ReplicationGroupNotFoundFault extends __BaseException {
  readonly name: "ReplicationGroupNotFoundFault" = "ReplicationGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupNotFoundFault, __BaseException>) {
    super({
      name: "ReplicationGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested reserved cache node was not found.</p>
 * @public
 */
export class ReservedCacheNodeNotFoundFault extends __BaseException {
  readonly name: "ReservedCacheNodeNotFoundFault" = "ReservedCacheNodeNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedCacheNodeNotFoundFault, __BaseException>) {
    super({
      name: "ReservedCacheNodeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedCacheNodeNotFoundFault.prototype);
  }
}

/**
 * <p>The serverless cache was not found or does not exist.</p>
 * @public
 */
export class ServerlessCacheNotFoundFault extends __BaseException {
  readonly name: "ServerlessCacheNotFoundFault" = "ServerlessCacheNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheNotFoundFault, __BaseException>) {
    super({
      name: "ServerlessCacheNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheNotFoundFault.prototype);
  }
}

/**
 * <p>This serverless cache snapshot could not be found or does not exist. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export class ServerlessCacheSnapshotNotFoundFault extends __BaseException {
  readonly name: "ServerlessCacheSnapshotNotFoundFault" = "ServerlessCacheSnapshotNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheSnapshotNotFoundFault, __BaseException>) {
    super({
      name: "ServerlessCacheSnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheSnapshotNotFoundFault.prototype);
  }
}

/**
 * <p>The requested snapshot name does not refer to an existing snapshot.</p>
 * @public
 */
export class SnapshotNotFoundFault extends __BaseException {
  readonly name: "SnapshotNotFoundFault" = "SnapshotNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotNotFoundFault, __BaseException>) {
    super({
      name: "SnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotNotFoundFault.prototype);
  }
}

/**
 * <p>Represents the output from the <code>AddTagsToResource</code>,
 *                 <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code>
 *             operations.</p>
 * @public
 */
export interface TagListMessage {
  /**
   * <p>A list of tags as key-value pairs.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 * @public
 */
export class TagQuotaPerResourceExceeded extends __BaseException {
  readonly name: "TagQuotaPerResourceExceeded" = "TagQuotaPerResourceExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagQuotaPerResourceExceeded, __BaseException>) {
    super({
      name: "TagQuotaPerResourceExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagQuotaPerResourceExceeded.prototype);
  }
}

/**
 * <p>The user group was not found or does not exist</p>
 * @public
 */
export class UserGroupNotFoundFault extends __BaseException {
  readonly name: "UserGroupNotFoundFault" = "UserGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserGroupNotFoundFault, __BaseException>) {
    super({
      name: "UserGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The user does not exist or could not be found.</p>
 * @public
 */
export class UserNotFoundFault extends __BaseException {
  readonly name: "UserNotFoundFault" = "UserNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotFoundFault, __BaseException>) {
    super({
      name: "UserNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotFoundFault.prototype);
  }
}

/**
 * <p>Represents the allowed node types you can use to modify your cluster or replication
 *             group.</p>
 * @public
 */
export interface AllowedNodeTypeModificationsMessage {
  /**
   * <p>A string list, each element of which specifies a cache node type which you can use to
   *             scale your cluster or replication group.</p>
   *          <p>When scaling up a Valkey or Redis OSS cluster or replication group using
   *                 <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code>, use a value
   *             from this list for the <code>CacheNodeType</code> parameter.</p>
   * @public
   */
  ScaleUpModifications?: string[] | undefined;

  /**
   * <p>A string list, each element of which specifies a cache node type which you can use to
   *             scale your cluster or replication group. When scaling down a Valkey or Redis OSS cluster or
   *             replication group using ModifyCacheCluster or ModifyReplicationGroup, use a value from
   *             this list for the CacheNodeType parameter. </p>
   * @public
   */
  ScaleDownModifications?: string[] | undefined;
}

/**
 * <p>The specified Amazon EC2 security group is already authorized for the specified cache
 *             security group.</p>
 * @public
 */
export class AuthorizationAlreadyExistsFault extends __BaseException {
  readonly name: "AuthorizationAlreadyExistsFault" = "AuthorizationAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationAlreadyExistsFault, __BaseException>) {
    super({
      name: "AuthorizationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationAlreadyExistsFault.prototype);
  }
}

/**
 * <p>Represents the input of an AuthorizeCacheSecurityGroupIngress operation.</p>
 * @public
 */
export interface AuthorizeCacheSecurityGroupIngressMessage {
  /**
   * <p>The cache security group that allows network ingress.</p>
   * @public
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>The Amazon EC2 security group to be authorized for ingress to the cache security
   *             group.</p>
   * @public
   */
  EC2SecurityGroupName: string | undefined;

  /**
   * <p>The Amazon account number of the Amazon EC2 security group owner. Note that this is
   *             not the same thing as an Amazon access key ID - you must provide a valid Amazon account
   *             number for this parameter.</p>
   * @public
   */
  EC2SecurityGroupOwnerId: string | undefined;
}

/**
 * <p>Provides ownership and status information for an Amazon EC2 security group.</p>
 * @public
 */
export interface EC2SecurityGroup {
  /**
   * <p>The status of the Amazon EC2 security group.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The name of the Amazon EC2 security group.</p>
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * <p>The Amazon account ID of the Amazon EC2 security group owner.</p>
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * <p>Represents the output of one of the following operations:</p>
 *          <ul>
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
 * @public
 */
export interface CacheSecurityGroup {
  /**
   * <p>The Amazon account ID of the cache security group owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The name of the cache security group.</p>
   * @public
   */
  CacheSecurityGroupName?: string | undefined;

  /**
   * <p>The description of the cache security group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of Amazon EC2 security groups that are associated with this cache security
   *             group.</p>
   * @public
   */
  EC2SecurityGroups?: EC2SecurityGroup[] | undefined;

  /**
   * <p>The ARN of the cache security group,</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeCacheSecurityGroupIngressResult {
  /**
   * <p>Represents the output of one of the following operations:</p>
   *          <ul>
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
   * @public
   */
  CacheSecurityGroup?: CacheSecurityGroup | undefined;
}

/**
 * <p>The current state of the cache security group does not allow deletion.</p>
 * @public
 */
export class InvalidCacheSecurityGroupStateFault extends __BaseException {
  readonly name: "InvalidCacheSecurityGroupStateFault" = "InvalidCacheSecurityGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCacheSecurityGroupStateFault, __BaseException>) {
    super({
      name: "InvalidCacheSecurityGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCacheSecurityGroupStateFault.prototype);
  }
}

/**
 * <p>Two or more incompatible parameters were specified.</p>
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name: "InvalidParameterCombinationException" = "InvalidParameterCombinationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
  }
}

/**
 * <p>The value for a parameter is invalid.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * @public
 */
export interface BatchApplyUpdateActionMessage {
  /**
   * <p>The replication group IDs</p>
   * @public
   */
  ReplicationGroupIds?: string[] | undefined;

  /**
   * <p>The cache cluster IDs</p>
   * @public
   */
  CacheClusterIds?: string[] | undefined;

  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName: string | undefined;
}

/**
 * <p>The service update doesn't exist</p>
 * @public
 */
export class ServiceUpdateNotFoundFault extends __BaseException {
  readonly name: "ServiceUpdateNotFoundFault" = "ServiceUpdateNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUpdateNotFoundFault, __BaseException>) {
    super({
      name: "ServiceUpdateNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUpdateNotFoundFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const UpdateActionStatus = {
  COMPLETE: "complete",
  IN_PROGRESS: "in-progress",
  NOT_APPLICABLE: "not-applicable",
  NOT_APPLIED: "not-applied",
  SCHEDULED: "scheduled",
  SCHEDULING: "scheduling",
  STOPPED: "stopped",
  STOPPING: "stopping",
  WAITING_TO_START: "waiting-to-start",
} as const;

/**
 * @public
 */
export type UpdateActionStatus = (typeof UpdateActionStatus)[keyof typeof UpdateActionStatus];

/**
 * <p>Update action that has been processed for the corresponding apply/stop request</p>
 * @public
 */
export interface ProcessedUpdateAction {
  /**
   * <p>The ID of the replication group</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>The ID of the cache cluster</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The status of the update action on the Valkey or Redis OSS cluster</p>
   * @public
   */
  UpdateActionStatus?: UpdateActionStatus | undefined;
}

/**
 * <p>Update action that has failed to be processed for the corresponding apply/stop
 *             request</p>
 * @public
 */
export interface UnprocessedUpdateAction {
  /**
   * <p>The replication group ID</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>The ID of the cache cluster</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The error type for requests that are not processed</p>
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * <p>The error message that describes the reason the request was not processed</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionResultsMessage {
  /**
   * <p>Update actions that have been processed successfully</p>
   * @public
   */
  ProcessedUpdateActions?: ProcessedUpdateAction[] | undefined;

  /**
   * <p>Update actions that haven't been processed successfully</p>
   * @public
   */
  UnprocessedUpdateActions?: UnprocessedUpdateAction[] | undefined;
}

/**
 * @public
 */
export interface BatchStopUpdateActionMessage {
  /**
   * <p>The replication group IDs</p>
   * @public
   */
  ReplicationGroupIds?: string[] | undefined;

  /**
   * <p>The cache cluster IDs</p>
   * @public
   */
  CacheClusterIds?: string[] | undefined;

  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName: string | undefined;
}

/**
 * @public
 */
export interface CompleteMigrationMessage {
  /**
   * <p>The ID of the replication group to which data is being migrated.</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>Forces the migration to stop without ensuring that data is in sync. It is recommended
   *             to use this option only to abort the migration and not recommended when application
   *             wants to continue migration to ElastiCache.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const AutomaticFailoverStatus = {
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
} as const;

/**
 * @public
 */
export type AutomaticFailoverStatus = (typeof AutomaticFailoverStatus)[keyof typeof AutomaticFailoverStatus];

/**
 * @public
 * @enum
 */
export const ClusterMode = {
  COMPATIBLE: "compatible",
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type ClusterMode = (typeof ClusterMode)[keyof typeof ClusterMode];

/**
 * <p>Represents the information required for client programs to connect to a cache
 *             node. This value is read-only.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The DNS hostname of the cache node.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The port number that the cache engine is listening on.</p>
   * @public
   */
  Port?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DataTieringStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type DataTieringStatus = (typeof DataTieringStatus)[keyof typeof DataTieringStatus];

/**
 * <p>The name of the Global datastore and role of this replication group in the Global
 *             datastore.</p>
 * @public
 */
export interface GlobalReplicationGroupInfo {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId?: string | undefined;

  /**
   * <p>The role of the replication group in a Global datastore. Can be primary or
   *             secondary.</p>
   * @public
   */
  GlobalReplicationGroupMemberRole?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpDiscovery = {
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;

/**
 * @public
 */
export type IpDiscovery = (typeof IpDiscovery)[keyof typeof IpDiscovery];

/**
 * <p>The configuration details of the CloudWatch Logs destination.</p>
 * @public
 */
export interface CloudWatchLogsDestinationDetails {
  /**
   * <p>The name of the CloudWatch Logs log group.</p>
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * <p>The configuration details of the Kinesis Data Firehose destination.</p>
 * @public
 */
export interface KinesisFirehoseDestinationDetails {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream.</p>
   * @public
   */
  DeliveryStream?: string | undefined;
}

/**
 * <p>Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose
 *             destination.</p>
 * @public
 */
export interface DestinationDetails {
  /**
   * <p>The configuration details of the CloudWatch Logs destination.</p>
   * @public
   */
  CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails | undefined;

  /**
   * <p>The configuration details of the Kinesis Data Firehose destination.</p>
   * @public
   */
  KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const DestinationType = {
  CloudWatchLogs: "cloudwatch-logs",
  KinesisFirehose: "kinesis-firehose",
} as const;

/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * @enum
 */
export const LogFormat = {
  JSON: "json",
  TEXT: "text",
} as const;

/**
 * @public
 */
export type LogFormat = (typeof LogFormat)[keyof typeof LogFormat];

/**
 * @public
 * @enum
 */
export const LogType = {
  ENGINE_LOG: "engine-log",
  SLOW_LOG: "slow-log",
} as const;

/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const LogDeliveryConfigurationStatus = {
  ACTIVE: "active",
  DISABLING: "disabling",
  ENABLING: "enabling",
  ERROR: "error",
  MODIFYING: "modifying",
} as const;

/**
 * @public
 */
export type LogDeliveryConfigurationStatus =
  (typeof LogDeliveryConfigurationStatus)[keyof typeof LogDeliveryConfigurationStatus];

/**
 * <p>Returns the destination, format and type of the logs. </p>
 * @public
 */
export interface LogDeliveryConfiguration {
  /**
   * <p>Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or
   *             engine-log.</p>
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * <p>Returns the destination type, either <code>cloudwatch-logs</code> or
   *                 <code>kinesis-firehose</code>.</p>
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * <p>Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose
   *             destination.</p>
   * @public
   */
  DestinationDetails?: DestinationDetails | undefined;

  /**
   * <p>Returns the log format, either JSON or TEXT.</p>
   * @public
   */
  LogFormat?: LogFormat | undefined;

  /**
   * <p>Returns the log delivery configuration status. Values are one of <code>enabling</code>
   *             | <code>disabling</code> | <code>modifying</code> | <code>active</code> |
   *                 <code>error</code>
   *          </p>
   * @public
   */
  Status?: LogDeliveryConfigurationStatus | undefined;

  /**
   * <p>Returns an error message for the log delivery configuration.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MultiAZStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type MultiAZStatus = (typeof MultiAZStatus)[keyof typeof MultiAZStatus];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL_STACK: "dual_stack",
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;

/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * <p>Represents a single node within a node group (shard).</p>
 * @public
 */
export interface NodeGroupMember {
  /**
   * <p>The ID of the cluster to which the node belongs.</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>The ID of the node within its cluster. A node ID is a numeric identifier (0001, 0002,
   *             etc.).</p>
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * <p>The information required for client programs to connect to a node for read operations.
   *             The read endpoint is only applicable on Valkey or Redis OSS (cluster mode disabled) clusters.</p>
   * @public
   */
  ReadEndpoint?: Endpoint | undefined;

  /**
   * <p>The name of the Availability Zone in which the node is located.</p>
   * @public
   */
  PreferredAvailabilityZone?: string | undefined;

  /**
   * <p>The outpost ARN of the node group member.</p>
   * @public
   */
  PreferredOutpostArn?: string | undefined;

  /**
   * <p>The role that is currently assigned to the node - <code>primary</code> or
   *                 <code>replica</code>. This member is only applicable for Valkey or Redis OSS (cluster mode
   *             disabled) replication groups.</p>
   * @public
   */
  CurrentRole?: string | undefined;
}

/**
 * <p>Represents a collection of cache nodes in a replication group. One node in the node
 *             group is the read/write primary node. All the other nodes are read-only Replica
 *             nodes.</p>
 * @public
 */
export interface NodeGroup {
  /**
   * <p>The identifier for the node group (shard). A Valkey or Redis OSS (cluster mode disabled) replication
   *             group contains only 1 node group; therefore, the node group ID is 0001. A Valkey or Redis OSS (cluster mode enabled) replication group contains 1 to 90 node groups numbered 0001 to 0090.
   *             Optionally, the user can provide the id for a node group. </p>
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * <p>The current state of this replication group - <code>creating</code>,
   *                 <code>available</code>, <code>modifying</code>, <code>deleting</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The endpoint of the primary node in this node group (shard).</p>
   * @public
   */
  PrimaryEndpoint?: Endpoint | undefined;

  /**
   * <p>The endpoint of the replica nodes in this node group (shard). This value is read-only.</p>
   * @public
   */
  ReaderEndpoint?: Endpoint | undefined;

  /**
   * <p>The keyspace for this node group (shard).</p>
   * @public
   */
  Slots?: string | undefined;

  /**
   * <p>A list containing information about individual nodes within the node group
   *             (shard).</p>
   * @public
   */
  NodeGroupMembers?: NodeGroupMember[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthTokenUpdateStatus = {
  ROTATING: "ROTATING",
  SETTING: "SETTING",
} as const;

/**
 * @public
 */
export type AuthTokenUpdateStatus = (typeof AuthTokenUpdateStatus)[keyof typeof AuthTokenUpdateStatus];

/**
 * @public
 * @enum
 */
export const PendingAutomaticFailoverStatus = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type PendingAutomaticFailoverStatus =
  (typeof PendingAutomaticFailoverStatus)[keyof typeof PendingAutomaticFailoverStatus];

/**
 * <p>The log delivery configurations being modified </p>
 * @public
 */
export interface PendingLogDeliveryConfiguration {
  /**
   * <p>Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or
   *             engine-log..</p>
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * <p>Returns the destination type, either CloudWatch Logs or Kinesis Data Firehose.</p>
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * <p>Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose
   *             destination.</p>
   * @public
   */
  DestinationDetails?: DestinationDetails | undefined;

  /**
   * <p>Returns the log format, either JSON or TEXT</p>
   * @public
   */
  LogFormat?: LogFormat | undefined;
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
 * <p>The status of an online resharding operation.</p>
 * @public
 */
export interface ReshardingStatus {
  /**
   * <p>Represents the progress of an online resharding operation.</p>
   * @public
   */
  SlotMigration?: SlotMigration | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitEncryptionMode = {
  PREFERRED: "preferred",
  REQUIRED: "required",
} as const;

/**
 * @public
 */
export type TransitEncryptionMode = (typeof TransitEncryptionMode)[keyof typeof TransitEncryptionMode];

/**
 * <p>The status of the user group update.</p>
 * @public
 */
export interface UserGroupsUpdateStatus {
  /**
   * <p>The ID of the user group to add.</p>
   * @public
   */
  UserGroupIdsToAdd?: string[] | undefined;

  /**
   * <p>The ID of the user group to remove.</p>
   * @public
   */
  UserGroupIdsToRemove?: string[] | undefined;
}

/**
 * <p>The settings to be applied to the Valkey or Redis OSS replication group, either immediately or
 *             during the next maintenance window.</p>
 * @public
 */
export interface ReplicationGroupPendingModifiedValues {
  /**
   * <p>The primary cluster ID that is applied immediately (if
   *                 <code>--apply-immediately</code> was specified), or during the next maintenance
   *             window.</p>
   * @public
   */
  PrimaryClusterId?: string | undefined;

  /**
   * <p>Indicates the status of automatic failover for this Valkey or Redis OSS replication group.</p>
   * @public
   */
  AutomaticFailoverStatus?: PendingAutomaticFailoverStatus | undefined;

  /**
   * <p>The status of an online resharding operation.</p>
   * @public
   */
  Resharding?: ReshardingStatus | undefined;

  /**
   * <p>The auth token status</p>
   * @public
   */
  AuthTokenStatus?: AuthTokenUpdateStatus | undefined;

  /**
   * <p>The user group being modified.</p>
   * @public
   */
  UserGroups?: UserGroupsUpdateStatus | undefined;

  /**
   * <p>The log delivery configurations being modified </p>
   * @public
   */
  LogDeliveryConfigurations?: PendingLogDeliveryConfiguration[] | undefined;

  /**
   * <p>A flag that enables in-transit encryption when set to true.</p>
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with
   *             no downtime.</p>
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * <p>Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first
   *             set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect
   *             using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS
   *             clients to use cluster mode enabled, you can then complete cluster mode configuration
   *             and set the cluster mode to Enabled.</p>
   * @public
   */
  ClusterMode?: ClusterMode | undefined;
}

/**
 * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
 * @public
 */
export interface ReplicationGroup {
  /**
   * <p>The identifier for the replication group.</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>The user supplied description of the replication group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the Global datastore and role of this replication group in the Global
   *             datastore.</p>
   * @public
   */
  GlobalReplicationGroupInfo?: GlobalReplicationGroupInfo | undefined;

  /**
   * <p>The current state of this replication group - <code>creating</code>,
   *                 <code>available</code>, <code>modifying</code>, <code>deleting</code>,
   *                 <code>create-failed</code>, <code>snapshotting</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A group of settings to be applied to the replication group, either immediately or
   *             during the next maintenance window.</p>
   * @public
   */
  PendingModifiedValues?: ReplicationGroupPendingModifiedValues | undefined;

  /**
   * <p>The names of all the cache clusters that are part of this replication group.</p>
   * @public
   */
  MemberClusters?: string[] | undefined;

  /**
   * <p>A list of node groups in this replication group. For Valkey or Redis OSS (cluster mode disabled)
   *             replication groups, this is a single-element list. For Valkey or Redis OSS (cluster mode enabled)
   *             replication groups, the list contains an entry for each node group (shard).</p>
   * @public
   */
  NodeGroups?: NodeGroup[] | undefined;

  /**
   * <p>The cluster ID that is used as the daily snapshot source for the replication
   *             group.</p>
   * @public
   */
  SnapshottingClusterId?: string | undefined;

  /**
   * <p>Indicates the status of automatic failover for this Valkey or Redis OSS replication group.</p>
   * @public
   */
  AutomaticFailover?: AutomaticFailoverStatus | undefined;

  /**
   * <p>A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more
   *             information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html">Minimizing Downtime: Multi-AZ</a>
   *          </p>
   * @public
   */
  MultiAZ?: MultiAZStatus | undefined;

  /**
   * <p>The configuration endpoint for this replication group. Use the configuration endpoint
   *             to connect to this replication group.</p>
   * @public
   */
  ConfigurationEndpoint?: Endpoint | undefined;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *          <important>
   *             <p> If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups
   *                 are turned off.</p>
   *          </important>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot
   *             of your node group (shard).</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   *          <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate
   *             time range.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is
   *                     <code>redis</code>.</p>
   *          </note>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>A flag indicating whether or not this replication group is cluster enabled; i.e.,
   *             whether its data can be partitioned across multiple shards (API/CLI: node
   *             groups).</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ClusterEnabled?: boolean | undefined;

  /**
   * <p>The name of the compute and memory capacity node type for each node in the replication
   *             group.</p>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password) when issuing Valkey or Redis OSS
   *             commands.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AuthTokenEnabled?: boolean | undefined;

  /**
   * <p>The date the auth token was last modified</p>
   * @public
   */
  AuthTokenLastModifiedDate?: Date | undefined;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *          <p>
   *             <b>Required:</b> Only available when creating a replication
   *             group in an Amazon VPC using Redis OSS version <code>3.2.6</code>, <code>4.x</code> or
   *             later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>A flag that enables encryption at-rest when set to <code>true</code>.</p>
   *          <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the cluster
   *             is created. To enable encryption at-rest on a cluster you must set
   *                 <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create a
   *             cluster.</p>
   *          <p>
   *             <b>Required:</b> Only available when creating a replication
   *             group in an Amazon VPC using Redis OSS version <code>3.2.6</code>, <code>4.x</code> or
   *             later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AtRestEncryptionEnabled?: boolean | undefined;

  /**
   * <p>The outpost ARNs of the replication group's member clusters.</p>
   * @public
   */
  MemberClustersOutpostArns?: string[] | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the disk in the cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the replication group.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The ID of the user group associated to the replication group.</p>
   * @public
   */
  UserGroupIds?: string[] | undefined;

  /**
   * <p>Returns the destination, format and type of the logs. </p>
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfiguration[] | undefined;

  /**
   * <p>The date and time when the cluster was created.</p>
   * @public
   */
  ReplicationGroupCreateTime?: Date | undefined;

  /**
   * <p>Enables data tiering. Data tiering is only supported for replication groups using the
   *             r6gd node type. This parameter must be set to true when using r6gd nodes. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTiering?: DataTieringStatus | undefined;

  /**
   * <p>If you are running Valkey 7.2 and above, or Redis OSS engine version 6.0 and above, set this parameter to yes if you
   *             want to opt-in to the next auto minor version upgrade campaign. This parameter is
   *             disabled for previous versions. </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6
   *             is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * <p>The network type you choose when modifying a cluster, either <code>ipv4</code> |
   *             <code>ipv6</code>. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with
   *             no downtime.</p>
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * <p>Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first
   *             set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect
   *             using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS
   *             clients to use cluster mode enabled, you can then complete cluster mode configuration
   *             and set the cluster mode to Enabled.</p>
   * @public
   */
  ClusterMode?: ClusterMode | undefined;

  /**
   * <p>The engine used in a replication group. The options are redis, memcached or valkey.</p>
   * @public
   */
  Engine?: string | undefined;
}

/**
 * @public
 */
export interface CompleteMigrationResponse {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * <p>The designated replication group is not available for data migration.</p>
 * @public
 */
export class ReplicationGroupNotUnderMigrationFault extends __BaseException {
  readonly name: "ReplicationGroupNotUnderMigrationFault" = "ReplicationGroupNotUnderMigrationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupNotUnderMigrationFault, __BaseException>) {
    super({
      name: "ReplicationGroupNotUnderMigrationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupNotUnderMigrationFault.prototype);
  }
}

/**
 * @public
 */
export interface CopyServerlessCacheSnapshotRequest {
  /**
   * <p>The identifier of the existing serverless cache’s snapshot to be copied. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  SourceServerlessCacheSnapshotName: string | undefined;

  /**
   * <p>The identifier for the snapshot to be created. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  TargetServerlessCacheSnapshotName: string | undefined;

  /**
   * <p>The identifier of the KMS key used to encrypt the target snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of tags to be added to the target snapshot resource. A tag is a key-value pair. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The configuration settings for a specific serverless cache.</p>
 * @public
 */
export interface ServerlessCacheConfiguration {
  /**
   * <p>The identifier of a serverless cache.</p>
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * <p>The engine that the serverless cache is configured with.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The engine version number that the serverless cache is configured with.</p>
   * @public
   */
  MajorEngineVersion?: string | undefined;
}

/**
 * <p>The resource representing a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export interface ServerlessCacheSnapshot {
  /**
   * <p>The identifier of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheSnapshotName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Key Management Service (KMS) key of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The type of snapshot of serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>The current status of the serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The date and time that the source serverless cache's metadata and cache data set was obtained for
   *            the snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The time that the serverless cache snapshot will expire. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ExpiryTime?: Date | undefined;

  /**
   * <p>The total size of a serverless cache snapshot, in bytes. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  BytesUsedForCache?: string | undefined;

  /**
   * <p>The configuration of the serverless cache, at the time the snapshot was taken. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheConfiguration?: ServerlessCacheConfiguration | undefined;
}

/**
 * @public
 */
export interface CopyServerlessCacheSnapshotResponse {
  /**
   * <p>The response for the attempt to copy the serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot | undefined;
}

/**
 * <p>A serverless cache snapshot with this name already exists. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export class ServerlessCacheSnapshotAlreadyExistsFault extends __BaseException {
  readonly name: "ServerlessCacheSnapshotAlreadyExistsFault" = "ServerlessCacheSnapshotAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheSnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "ServerlessCacheSnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheSnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of serverless cache snapshots exceeds the customer snapshot quota. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export class ServerlessCacheSnapshotQuotaExceededFault extends __BaseException {
  readonly name: "ServerlessCacheSnapshotQuotaExceededFault" = "ServerlessCacheSnapshotQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheSnapshotQuotaExceededFault, __BaseException>) {
    super({
      name: "ServerlessCacheSnapshotQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheSnapshotQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified service linked role (SLR) was not found.</p>
 * @public
 */
export class ServiceLinkedRoleNotFoundFault extends __BaseException {
  readonly name: "ServiceLinkedRoleNotFoundFault" = "ServiceLinkedRoleNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLinkedRoleNotFoundFault, __BaseException>) {
    super({
      name: "ServiceLinkedRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLinkedRoleNotFoundFault.prototype);
  }
}

/**
 * <p>Represents the input of a <code>CopySnapshotMessage</code> operation.</p>
 * @public
 */
export interface CopySnapshotMessage {
  /**
   * <p>The name of an existing snapshot from which to make a copy.</p>
   * @public
   */
  SourceSnapshotName: string | undefined;

  /**
   * <p>A name for the snapshot copy. ElastiCache does not permit overwriting a snapshot,
   *             therefore this name must be unique within its context - ElastiCache or an Amazon S3
   *             bucket if exporting.</p>
   * @public
   */
  TargetSnapshotName: string | undefined;

  /**
   * <p>The Amazon S3 bucket to which the snapshot is exported. This parameter is used only
   *             when exporting a snapshot for external access.</p>
   *          <p>When using this parameter to export a snapshot, be sure Amazon ElastiCache has the
   *             needed permissions to this S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the
   *                 <i>Amazon ElastiCache User Guide</i>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting a
   *                 Snapshot</a> in the <i>Amazon ElastiCache User Guide</i>.</p>
   * @public
   */
  TargetBucket?: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the target snapshot.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Node group (shard) configuration options. Each node group (shard) configuration has
 *             the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>,
 *                 <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.</p>
 * @public
 */
export interface NodeGroupConfiguration {
  /**
   * <p>Either the ElastiCache supplied 4-digit id or a user supplied id for the
   *             node group these configuration values apply to.</p>
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * <p>A string that specifies the keyspace for a particular node group. Keyspaces range from
   *             0 to 16,383. The string is in the format <code>startkey-endkey</code>.</p>
   *          <p>Example: <code>"0-3999"</code>
   *          </p>
   * @public
   */
  Slots?: string | undefined;

  /**
   * <p>The number of read replica nodes in this node group (shard).</p>
   * @public
   */
  ReplicaCount?: number | undefined;

  /**
   * <p>The Availability Zone where the primary node of this node group (shard) is
   *             launched.</p>
   * @public
   */
  PrimaryAvailabilityZone?: string | undefined;

  /**
   * <p>A list of Availability Zones to be used for the read replicas. The number of
   *             Availability Zones in this list must match the value of <code>ReplicaCount</code> or
   *                 <code>ReplicasPerNodeGroup</code> if not specified.</p>
   * @public
   */
  ReplicaAvailabilityZones?: string[] | undefined;

  /**
   * <p>The outpost ARN of the primary node.</p>
   * @public
   */
  PrimaryOutpostArn?: string | undefined;

  /**
   * <p>The outpost ARN of the node replicas.</p>
   * @public
   */
  ReplicaOutpostArns?: string[] | undefined;
}

/**
 * <p>Represents an individual cache node in a snapshot of a cluster.</p>
 * @public
 */
export interface NodeSnapshot {
  /**
   * <p>A unique identifier for the source cluster.</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>A unique identifier for the source node group (shard).</p>
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * <p>The cache node identifier for the node in the source cluster.</p>
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * <p>The configuration for the source node group (shard).</p>
   * @public
   */
  NodeGroupConfiguration?: NodeGroupConfiguration | undefined;

  /**
   * <p>The size of the cache on the source cache node.</p>
   * @public
   */
  CacheSize?: string | undefined;

  /**
   * <p>The date and time when the cache node was created in the source cluster.</p>
   * @public
   */
  CacheNodeCreateTime?: Date | undefined;

  /**
   * <p>The date and time when the source node's metadata and cache data set was obtained for
   *             the snapshot.</p>
   * @public
   */
  SnapshotCreateTime?: Date | undefined;
}

/**
 * <p>Represents a copy of an entire Valkey or Redis OSS cluster as of the time when the snapshot was
 *             taken.</p>
 * @public
 */
export interface Snapshot {
  /**
   * <p>The name of a snapshot. For an automatic snapshot, the name is system-generated. For a
   *             manual snapshot, this is the user-provided name.</p>
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * <p>The unique identifier of the source replication group.</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>A description of the source replication group.</p>
   * @public
   */
  ReplicationGroupDescription?: string | undefined;

  /**
   * <p>The user-supplied identifier of the source cluster.</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>The status of the snapshot. Valid values: <code>creating</code> |
   *                 <code>available</code> | <code>restoring</code> | <code>copying</code> |
   *                 <code>deleting</code>.</p>
   * @public
   */
  SnapshotStatus?: string | undefined;

  /**
   * <p>Indicates whether the snapshot is from an automatic backup (<code>automated</code>) or
   *             was created manually (<code>manual</code>).</p>
   * @public
   */
  SnapshotSource?: string | undefined;

  /**
   * <p>The name of the compute and memory capacity node type for the source cluster.</p>
   *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
   *             generation types provide more memory and computational power at lower cost when compared
   *             to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M7g node types</b>:
   *     					<code>cache.m7g.large</code>,
   *     					<code>cache.m7g.xlarge</code>,
   *     					<code>cache.m7g.2xlarge</code>,
   *     					<code>cache.m7g.4xlarge</code>,
   *     					<code>cache.m7g.8xlarge</code>,
   *     					<code>cache.m7g.12xlarge</code>,
   *     					<code>cache.m7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M5 node types:</b>
   *                         <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M4 node types:</b>
   *                         <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
   * 					        <code>cache.t4g.micro</code>,
   * 					        <code>cache.t4g.small</code>,
   * 					        <code>cache.t4g.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T3 node types:</b>
   *                         <code>cache.t3.micro</code>,
   *     						<code>cache.t3.small</code>,
   *     						<code>cache.t3.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T2 node types:</b>
   *                         <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>T1 node types:</b>
   *                         <code>cache.t1.micro</code>
   *                      </p>
   *                      <p>
   *                         <b>M1 node types:</b>
   *                         <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M3 node types:</b>
   *                         <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>C1 node types:</b>
   *                         <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>R7g node types</b>:
   * 							<code>cache.r7g.large</code>,
   * 							<code>cache.r7g.xlarge</code>,
   * 							<code>cache.r7g.2xlarge</code>,
   * 							<code>cache.r7g.4xlarge</code>,
   * 							<code>cache.r7g.8xlarge</code>,
   * 							<code>cache.r7g.12xlarge</code>,
   * 							<code>cache.r7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   * 							<code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R5 node types:</b>
   *                         <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R4 node types:</b>
   *                         <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>M2 node types:</b>
   *                         <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R3 node types:</b>
   *                         <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Additional node type info</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>The configuration variables <code>appendonly</code> and
   *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
   *                     later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The name of the cache engine (<code>memcached</code> or <code>redis</code>) used by
   *             the source cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the cache engine version that is used by the source cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The number of cache nodes in the source cluster.</p>
   *          <p>For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this
   *             value must be between 1 and 40.</p>
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * <p>The name of the Availability Zone in which the source cluster is located.</p>
   * @public
   */
  PreferredAvailabilityZone?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the preferred outpost.</p>
   * @public
   */
  PreferredOutpostArn?: string | undefined;

  /**
   * <p>The date and time when the source cluster was created.</p>
   * @public
   */
  CacheClusterCreateTime?: Date | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed.
   *             It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The
   *             minimum maintenance window is a 60 minute period.</p>
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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the topic used by the source cluster for publishing
   *             notifications.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The port number used by each cache nodes in the source cluster.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The cache parameter group that is associated with the source cluster.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>The name of the cache subnet group associated with the source cluster.</p>
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the
   *             source cluster.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p> If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes if
   *             you want to opt-in to the next auto minor version upgrade campaign. This parameter is
   *             disabled for previous versions.  </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>For an automatic snapshot, the number of days for which ElastiCache retains the
   *             snapshot before deleting it.</p>
   *          <p>For manual snapshots, this field reflects the <code>SnapshotRetentionLimit</code> for
   *             the source cluster when the snapshot was created. This field is otherwise ignored:
   *             Manual snapshots do not expire, and can only be deleted using the
   *                 <code>DeleteSnapshot</code> operation. </p>
   *          <p>
   *             <b>Important</b> If the value of SnapshotRetentionLimit is set
   *             to zero (0), backups are turned off.</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time range during which ElastiCache takes daily snapshots of the source
   *             cluster.</p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>The number of node groups (shards) in this snapshot. When restoring from a snapshot,
   *             the number of node groups (shards) in the snapshot and in the restored replication group
   *             must be the same.</p>
   * @public
   */
  NumNodeGroups?: number | undefined;

  /**
   * <p>Indicates the status of automatic failover for the source Valkey or Redis OSS replication
   *             group.</p>
   * @public
   */
  AutomaticFailover?: AutomaticFailoverStatus | undefined;

  /**
   * <p>A list of the cache nodes in the source cluster.</p>
   * @public
   */
  NodeSnapshots?: NodeSnapshot[] | undefined;

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
   * <p>Enables data tiering. Data tiering is only supported for replication groups using the
   *             r6gd node type. This parameter must be set to true when using r6gd nodes. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTiering?: DataTieringStatus | undefined;
}

/**
 * @public
 */
export interface CopySnapshotResult {
  /**
   * <p>Represents a copy of an entire Valkey or Redis OSS cluster as of the time when the snapshot was
   *             taken.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * <p>The current state of the snapshot does not allow the requested operation to
 *             occur.</p>
 * @public
 */
export class InvalidSnapshotStateFault extends __BaseException {
  readonly name: "InvalidSnapshotStateFault" = "InvalidSnapshotStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnapshotStateFault.prototype);
  }
}

/**
 * <p>You already have a snapshot with the given name.</p>
 * @public
 */
export class SnapshotAlreadyExistsFault extends __BaseException {
  readonly name: "SnapshotAlreadyExistsFault" = "SnapshotAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "SnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the maximum number of
 *             snapshots.</p>
 * @public
 */
export class SnapshotQuotaExceededFault extends __BaseException {
  readonly name: "SnapshotQuotaExceededFault" = "SnapshotQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotQuotaExceededFault, __BaseException>) {
    super({
      name: "SnapshotQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotQuotaExceededFault.prototype);
  }
}

/**
 * <p>You already have a cluster with the given identifier.</p>
 * @public
 */
export class CacheClusterAlreadyExistsFault extends __BaseException {
  readonly name: "CacheClusterAlreadyExistsFault" = "CacheClusterAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "CacheClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheClusterAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of clusters
 *             per customer.</p>
 * @public
 */
export class ClusterQuotaForCustomerExceededFault extends __BaseException {
  readonly name: "ClusterQuotaForCustomerExceededFault" = "ClusterQuotaForCustomerExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterQuotaForCustomerExceededFault, __BaseException>) {
    super({
      name: "ClusterQuotaForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterQuotaForCustomerExceededFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AZMode = {
  CROSS_AZ: "cross-az",
  SINGLE_AZ: "single-az",
} as const;

/**
 * @public
 */
export type AZMode = (typeof AZMode)[keyof typeof AZMode];

/**
 * <p>Specifies the destination, format and type of the logs. </p>
 * @public
 */
export interface LogDeliveryConfigurationRequest {
  /**
   * <p>Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or
   *             engine-log..</p>
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * <p>Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the
   *             destination type.</p>
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * <p>Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose
   *             destination.</p>
   * @public
   */
  DestinationDetails?: DestinationDetails | undefined;

  /**
   * <p>Specifies either JSON or TEXT</p>
   * @public
   */
  LogFormat?: LogFormat | undefined;

  /**
   * <p>Specify if log delivery is enabled. Default <code>true</code>.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const OutpostMode = {
  CROSS_OUTPOST: "cross-outpost",
  SINGLE_OUTPOST: "single-outpost",
} as const;

/**
 * @public
 */
export type OutpostMode = (typeof OutpostMode)[keyof typeof OutpostMode];

/**
 * <p>Represents the input of a CreateCacheCluster operation.</p>
 * @public
 */
export interface CreateCacheClusterMessage {
  /**
   * <p>The node group (shard) identifier. This parameter is stored as a lowercase
   *             string.</p>
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
   * @public
   */
  CacheClusterId: string | undefined;

  /**
   * <p>The ID of the replication group to which this cluster should belong. If this parameter
   *             is specified, the cluster is added to the specified replication group as a read replica;
   *             otherwise, the cluster is a standalone primary that is not part of any replication
   *             group.</p>
   *          <p>If the specified replication group is Multi-AZ enabled and the Availability Zone is
   *             not specified, the cluster is created in Availability Zones that provide the best spread
   *             of read replicas across Availability Zones.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is
   *                     <code>redis</code>.</p>
   *          </note>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>Specifies whether the nodes in this Memcached cluster are created in a single
   *             Availability Zone or created across multiple Availability Zones in the cluster's
   *             region.</p>
   *          <p>This parameter is only supported for Memcached clusters.</p>
   *          <p>If the <code>AZMode</code> and <code>PreferredAvailabilityZones</code> are not
   *             specified, ElastiCache assumes <code>single-az</code> mode.</p>
   * @public
   */
  AZMode?: AZMode | undefined;

  /**
   * <p>The EC2 Availability Zone in which the cluster is created.</p>
   *          <p>All nodes belonging to this cluster are placed in the preferred Availability Zone. If
   *             you want to create your nodes across multiple Availability Zones, use
   *                 <code>PreferredAvailabilityZones</code>.</p>
   *          <p>Default: System chosen Availability Zone.</p>
   * @public
   */
  PreferredAvailabilityZone?: string | undefined;

  /**
   * <p>A list of the Availability Zones in which cache nodes are created. The order of the
   *             zones in the list is not important.</p>
   *          <p>This option is only supported on Memcached.</p>
   *          <note>
   *             <p>If you are creating your cluster in an Amazon VPC (recommended) you can only
   *                 locate nodes in Availability Zones that are associated with the subnets in the
   *                 selected subnet group.</p>
   *             <p>The number of Availability Zones listed must equal the value of
   *                     <code>NumCacheNodes</code>.</p>
   *          </note>
   *          <p>If you want all the nodes in the same Availability Zone, use
   *                 <code>PreferredAvailabilityZone</code> instead, or repeat the Availability Zone
   *             multiple times in the list.</p>
   *          <p>Default: System chosen Availability Zones.</p>
   * @public
   */
  PreferredAvailabilityZones?: string[] | undefined;

  /**
   * <p>The initial number of cache nodes that the cluster has.</p>
   *          <p>For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this
   *             value must be between 1 and 40.</p>
   *          <p>If you need more than 40 nodes for your Memcached cluster, please fill out the
   *             ElastiCache Limit Increase Request form at <a href="http://aws.amazon.com/contact-us/elasticache-node-limit-request/">http://aws.amazon.com/contact-us/elasticache-node-limit-request/</a>.</p>
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * <p>The compute and memory capacity of the nodes in the node group (shard).</p>
   *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
   *             generation types provide more memory and computational power at lower cost when compared
   *             to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M7g node types</b>:
   *     					<code>cache.m7g.large</code>,
   *     					<code>cache.m7g.xlarge</code>,
   *     					<code>cache.m7g.2xlarge</code>,
   *     					<code>cache.m7g.4xlarge</code>,
   *     					<code>cache.m7g.8xlarge</code>,
   *     					<code>cache.m7g.12xlarge</code>,
   *     					<code>cache.m7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M5 node types:</b>
   *                         <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M4 node types:</b>
   *                         <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
   * 					        <code>cache.t4g.micro</code>,
   * 					        <code>cache.t4g.small</code>,
   * 					        <code>cache.t4g.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T3 node types:</b>
   *                         <code>cache.t3.micro</code>,
   *     						<code>cache.t3.small</code>,
   *     						<code>cache.t3.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T2 node types:</b>
   *                         <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>T1 node types:</b>
   *                         <code>cache.t1.micro</code>
   *                      </p>
   *                      <p>
   *                         <b>M1 node types:</b>
   *                         <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M3 node types:</b>
   *                         <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>C1 node types:</b>
   *                         <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>R7g node types</b>:
   * 							<code>cache.r7g.large</code>,
   * 							<code>cache.r7g.xlarge</code>,
   * 							<code>cache.r7g.2xlarge</code>,
   * 							<code>cache.r7g.4xlarge</code>,
   * 							<code>cache.r7g.8xlarge</code>,
   * 							<code>cache.r7g.12xlarge</code>,
   * 							<code>cache.r7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   * 							<code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R5 node types:</b>
   *                         <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R4 node types:</b>
   *                         <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>M2 node types:</b>
   *                         <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R3 node types:</b>
   *                         <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Additional node type info</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>The configuration variables <code>appendonly</code> and
   *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
   *                     later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The name of the cache engine to be used for this cluster.</p>
   *          <p>Valid values for this parameter are: <code>memcached</code> |
   *             <code>redis</code>
   *          </p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version number of the cache engine to be used for this cluster. To view the
   *             supported cache engine versions, use the DescribeCacheEngineVersions operation.</p>
   *          <p>
   *             <b>Important:</b> You can upgrade to a newer engine version
   *             (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting
   *                 a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine
   *             version. If you want to use an earlier engine version, you must delete the existing
   *             cluster or replication group and create it anew with the earlier engine version. </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of the parameter group to associate with this cluster. If this argument is
   *             omitted, the default parameter group for the specified engine is used. You cannot use
   *             any parameter group which has <code>cluster-enabled='yes'</code> when creating a
   *             cluster.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>The name of the subnet group to be used for the cluster.</p>
   *          <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private
   *             Cloud (Amazon VPC).</p>
   *          <important>
   *             <p>If you're going to launch your cluster in an Amazon VPC, you need to create a
   *                 subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p>
   *          </important>
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * <p>A list of security group names to associate with this cluster.</p>
   *          <p>Use this parameter only when you are creating a cluster outside of an Amazon Virtual
   *             Private Cloud (Amazon VPC).</p>
   * @public
   */
  CacheSecurityGroupNames?: string[] | undefined;

  /**
   * <p>One or more VPC security groups associated with the cluster.</p>
   *          <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private
   *             Cloud (Amazon VPC).</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A single-element string list containing an Amazon Resource Name (ARN) that uniquely
   *             identifies a Valkey or Redis OSS RDB snapshot file stored in Amazon S3. The snapshot file is used to
   *             populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any
   *             commas.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is
   *                     <code>redis</code>.</p>
   *          </note>
   *          <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code>
   *          </p>
   * @public
   */
  SnapshotArns?: string[] | undefined;

  /**
   * <p>The name of a Valkey or Redis OSS snapshot from which to restore data into the new node group
   *             (shard). The snapshot status changes to <code>restoring</code> while the new node group
   *             (shard) is being created.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is
   *                     <code>redis</code>.</p>
   *          </note>
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed.
   *             It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The
   *             minimum maintenance window is a 60 minute period. </p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The port number on which each of the cache nodes accepts connections.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic
   *             to which notifications are sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be the same as the cluster owner.</p>
   *          </note>
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * <p> If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes
   *             to opt-in to the next auto minor version upgrade campaign. This parameter is
   *             disabled for previous versions.  </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The number of days for which ElastiCache retains automatic snapshots before deleting
   *             them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot taken
   *             today is retained for 5 days before being deleted.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is
   *                     <code>redis</code>.</p>
   *          </note>
   *          <p>Default: 0 (i.e., automatic backups are disabled for this cache cluster).</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot
   *             of your node group (shard).</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   *          <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate
   *             time range.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is
   *                     <code>redis</code>.</p>
   *          </note>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>
   *             <b>Reserved parameter.</b> The password used to access a
   *             password protected server.</p>
   *          <p>Password constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be only printable ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 16 characters and no more than 128 characters in
   *                     length.</p>
   *             </li>
   *             <li>
   *                <p>The only permitted printable special characters are !, &, #, $, ^, <,
   *                     >, and -. Other printable special characters cannot be used in the AUTH
   *                     token.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH
   *                 password</a> at http://redis.io/commands/AUTH.</p>
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * <p>Specifies whether the nodes in the cluster are created in a single outpost or across
   *             multiple outposts.</p>
   * @public
   */
  OutpostMode?: OutpostMode | undefined;

  /**
   * <p>The outpost ARN in which the cache cluster is created.</p>
   * @public
   */
  PreferredOutpostArn?: string | undefined;

  /**
   * <p>The outpost ARNs in which the cache cluster is created.</p>
   * @public
   */
  PreferredOutpostArns?: string[] | undefined;

  /**
   * <p>Specifies the destination, format and type of the logs. </p>
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[] | undefined;

  /**
   * <p>A flag that enables in-transit encryption when set to true.</p>
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6
   *             is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>. </p>
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * <p>The network type you choose when modifying a cluster, either <code>ipv4</code> |
   *             <code>ipv6</code>. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * <p>Represents an individual cache node within a cluster. Each cache node runs its own
 *             instance of the cluster's protocol-compliant caching software - either Memcached, Valkey or Redis OSS.</p>
 *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
 *             generation types provide more memory and computational power at lower cost when compared
 *             to their equivalent previous generation counterparts.</p>
 *          <ul>
 *             <li>
 *                <p>General purpose:</p>
 *                <ul>
 *                   <li>
 *                      <p>Current generation: </p>
 *                      <p>
 *                         <b>M7g node types</b>:
 *     					<code>cache.m7g.large</code>,
 *     					<code>cache.m7g.xlarge</code>,
 *     					<code>cache.m7g.2xlarge</code>,
 *     					<code>cache.m7g.4xlarge</code>,
 *     					<code>cache.m7g.8xlarge</code>,
 *     					<code>cache.m7g.12xlarge</code>,
 *     					<code>cache.m7g.16xlarge</code>
 *                      </p>
 *                      <note>
 *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
 *                         </p>
 *                      </note>
 *                      <p>
 *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
 *
 * 					 	<code>cache.m6g.large</code>,
 * 							<code>cache.m6g.xlarge</code>,
 * 							<code>cache.m6g.2xlarge</code>,
 * 							<code>cache.m6g.4xlarge</code>,
 * 							<code>cache.m6g.8xlarge</code>,
 * 							<code>cache.m6g.12xlarge</code>,
 * 							<code>cache.m6g.16xlarge</code>
 *                      </p>
 *                      <p>
 *                         <b>M5 node types:</b>
 *                         <code>cache.m5.large</code>,
 *     						<code>cache.m5.xlarge</code>,
 *     						<code>cache.m5.2xlarge</code>,
 *     						<code>cache.m5.4xlarge</code>,
 *     						<code>cache.m5.12xlarge</code>,
 *     						<code>cache.m5.24xlarge</code>
 *                      </p>
 *                      <p>
 *                         <b>M4 node types:</b>
 *                         <code>cache.m4.large</code>,
 *     						<code>cache.m4.xlarge</code>,
 *     						<code>cache.m4.2xlarge</code>,
 *     						<code>cache.m4.4xlarge</code>,
 *     						<code>cache.m4.10xlarge</code>
 *                      </p>
 *                      <p>
 *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
 * 					        <code>cache.t4g.micro</code>,
 * 					        <code>cache.t4g.small</code>,
 * 					        <code>cache.t4g.medium</code>
 *                      </p>
 *                      <p>
 *                         <b>T3 node types:</b>
 *                         <code>cache.t3.micro</code>,
 *     						<code>cache.t3.small</code>,
 *     						<code>cache.t3.medium</code>
 *                      </p>
 *                      <p>
 *                         <b>T2 node types:</b>
 *                         <code>cache.t2.micro</code>,
 *     						<code>cache.t2.small</code>,
 *     						<code>cache.t2.medium</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
 *                      <p>
 *                         <b>T1 node types:</b>
 *                         <code>cache.t1.micro</code>
 *                      </p>
 *                      <p>
 *                         <b>M1 node types:</b>
 *                         <code>cache.m1.small</code>,
 * 						   <code>cache.m1.medium</code>,
 * 						   <code>cache.m1.large</code>,
 * 						   <code>cache.m1.xlarge</code>
 *                      </p>
 *                      <p>
 *                         <b>M3 node types:</b>
 *                         <code>cache.m3.medium</code>,
 *     						<code>cache.m3.large</code>,
 *     						<code>cache.m3.xlarge</code>,
 *     						<code>cache.m3.2xlarge</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Compute optimized:</p>
 *                <ul>
 *                   <li>
 *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
 *                      <p>
 *                         <b>C1 node types:</b>
 *                         <code>cache.c1.xlarge</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Memory optimized:</p>
 *                <ul>
 *                   <li>
 *                      <p>Current generation: </p>
 *                      <p>
 *                         <b>R7g node types</b>:
 * 							<code>cache.r7g.large</code>,
 * 							<code>cache.r7g.xlarge</code>,
 * 							<code>cache.r7g.2xlarge</code>,
 * 							<code>cache.r7g.4xlarge</code>,
 * 							<code>cache.r7g.8xlarge</code>,
 * 							<code>cache.r7g.12xlarge</code>,
 * 							<code>cache.r7g.16xlarge</code>
 *                      </p>
 *                      <note>
 *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
 *                         </p>
 *                      </note>
 *                      <p>
 *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
 * 							<code>cache.r6g.large</code>,
 * 							<code>cache.r6g.xlarge</code>,
 * 							<code>cache.r6g.2xlarge</code>,
 * 							<code>cache.r6g.4xlarge</code>,
 * 							<code>cache.r6g.8xlarge</code>,
 * 							<code>cache.r6g.12xlarge</code>,
 * 							<code>cache.r6g.16xlarge</code>
 *                      </p>
 *                      <p>
 *                         <b>R5 node types:</b>
 *                         <code>cache.r5.large</code>,
 *     					   <code>cache.r5.xlarge</code>,
 *     					   <code>cache.r5.2xlarge</code>,
 *     					   <code>cache.r5.4xlarge</code>,
 *     					   <code>cache.r5.12xlarge</code>,
 *     					   <code>cache.r5.24xlarge</code>
 *                      </p>
 *                      <p>
 *                         <b>R4 node types:</b>
 *                         <code>cache.r4.large</code>,
 *     					   <code>cache.r4.xlarge</code>,
 *     					   <code>cache.r4.2xlarge</code>,
 *     					   <code>cache.r4.4xlarge</code>,
 *     					   <code>cache.r4.8xlarge</code>,
 *     					   <code>cache.r4.16xlarge</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
 *                      <p>
 *                         <b>M2 node types:</b>
 *                         <code>cache.m2.xlarge</code>,
 *     						<code>cache.m2.2xlarge</code>,
 *     						<code>cache.m2.4xlarge</code>
 *                      </p>
 *                      <p>
 *                         <b>R3 node types:</b>
 *                         <code>cache.r3.large</code>,
 *     						<code>cache.r3.xlarge</code>,
 *     						<code>cache.r3.2xlarge</code>,
 *     						<code>cache.r3.4xlarge</code>,
 *     						<code>cache.r3.8xlarge</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Additional node type info</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>All current generation instance types are created in Amazon VPC by
 *                     default.</p>
 *             </li>
 *             <li>
 *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
 *             </li>
 *             <li>
 *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
 *                     instances.</p>
 *             </li>
 *             <li>
 *                <p>The configuration variables <code>appendonly</code> and
 *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
 *                     later.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface CacheNode {
  /**
   * <p>The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The
   *             combination of cluster ID and node ID uniquely identifies every cache node used in a
   *             customer's Amazon account.</p>
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * <p>The current state of this cache node, one of the following values:
   *                 <code>available</code>, <code>creating</code>, <code>rebooting</code>, or
   *                 <code>deleting</code>.</p>
   * @public
   */
  CacheNodeStatus?: string | undefined;

  /**
   * <p>The date and time when the cache node was created.</p>
   * @public
   */
  CacheNodeCreateTime?: Date | undefined;

  /**
   * <p>The hostname for connecting to this cache node.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * <p>The status of the parameter group applied to this cache node.</p>
   * @public
   */
  ParameterGroupStatus?: string | undefined;

  /**
   * <p>The ID of the primary node to which this read replica node is synchronized. If this
   *             field is empty, this node is not associated with a primary cluster.</p>
   * @public
   */
  SourceCacheNodeId?: string | undefined;

  /**
   * <p>The Availability Zone where this node was created and now resides.</p>
   * @public
   */
  CustomerAvailabilityZone?: string | undefined;

  /**
   * <p>The customer outpost ARN of the cache node.</p>
   * @public
   */
  CustomerOutpostArn?: string | undefined;
}

/**
 * <p>Status of the cache parameter group.</p>
 * @public
 */
export interface CacheParameterGroupStatus {
  /**
   * <p>The name of the cache parameter group.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>The status of parameter updates.</p>
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * <p>A list of the cache node IDs which need to be rebooted for parameter changes to be
   *             applied. A node ID is a numeric identifier (0001, 0002, etc.).</p>
   * @public
   */
  CacheNodeIdsToReboot?: string[] | undefined;
}

/**
 * <p>Represents a cluster's status within a particular cache security group.</p>
 * @public
 */
export interface CacheSecurityGroupMembership {
  /**
   * <p>The name of the cache security group.</p>
   * @public
   */
  CacheSecurityGroupName?: string | undefined;

  /**
   * <p>The membership status in the cache security group. The status changes when a cache
   *             security group is modified, or when the cache security groups assigned to a cluster are
   *             modified.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Describes a notification topic and its status. Notification topics are used for
 *             publishing ElastiCache events to subscribers using Amazon Simple Notification Service
 *             (SNS).</p>
 * @public
 */
export interface NotificationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The current state of the topic.</p>
   * @public
   */
  TopicStatus?: string | undefined;
}

/**
 * <p>A group of settings that are applied to the cluster in the future, or that are
 *             currently being applied.</p>
 * @public
 */
export interface PendingModifiedValues {
  /**
   * <p>The new number of cache nodes for the cluster.</p>
   *          <p>For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this
   *             value must be between 1 and 40.</p>
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * <p>A list of cache node IDs that are being removed (or will be removed) from the cluster.
   *             A node ID is a 4-digit numeric identifier (0001, 0002, etc.).</p>
   * @public
   */
  CacheNodeIdsToRemove?: string[] | undefined;

  /**
   * <p>The new cache engine version that the cluster runs.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The cache node type that this cluster or replication group is scaled to.</p>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The auth token status</p>
   * @public
   */
  AuthTokenStatus?: AuthTokenUpdateStatus | undefined;

  /**
   * <p>The log delivery configurations being modified </p>
   * @public
   */
  LogDeliveryConfigurations?: PendingLogDeliveryConfiguration[] | undefined;

  /**
   * <p>A flag that enables in-transit encryption when set to true.</p>
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with
   *             no downtime.</p>
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;
}

/**
 * <p>Represents a single cache security group and its status.</p>
 * @public
 */
export interface SecurityGroupMembership {
  /**
   * <p>The identifier of the cache security group.</p>
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * <p>The status of the cache security group membership. The status changes whenever a cache
   *             security group is modified, or when the cache security groups assigned to a cluster are
   *             modified.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Contains all of the attributes of a specific cluster.</p>
 * @public
 */
export interface CacheCluster {
  /**
   * <p>The user-supplied identifier of the cluster. This identifier is a unique key that
   *             identifies a cluster.</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>Represents a Memcached cluster endpoint which can be used by an application to connect
   *             to any node in the cluster. The configuration endpoint will always have
   *                 <code>.cfg</code> in it.</p>
   *          <p>Example: <code>mem-3.9dvc4r<u>.cfg</u>.usw2.cache.amazonaws.com:11211</code>
   *          </p>
   * @public
   */
  ConfigurationEndpoint?: Endpoint | undefined;

  /**
   * <p>The URL of the web page where you can download the latest ElastiCache client
   *             library.</p>
   * @public
   */
  ClientDownloadLandingPage?: string | undefined;

  /**
   * <p>The name of the compute and memory capacity node type for the cluster.</p>
   *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
   *             generation types provide more memory and computational power at lower cost when compared
   *             to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M7g node types</b>:
   *     					<code>cache.m7g.large</code>,
   *     					<code>cache.m7g.xlarge</code>,
   *     					<code>cache.m7g.2xlarge</code>,
   *     					<code>cache.m7g.4xlarge</code>,
   *     					<code>cache.m7g.8xlarge</code>,
   *     					<code>cache.m7g.12xlarge</code>,
   *     					<code>cache.m7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M5 node types:</b>
   *                         <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M4 node types:</b>
   *                         <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
   * 					        <code>cache.t4g.micro</code>,
   * 					        <code>cache.t4g.small</code>,
   * 					        <code>cache.t4g.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T3 node types:</b>
   *                         <code>cache.t3.micro</code>,
   *     						<code>cache.t3.small</code>,
   *     						<code>cache.t3.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T2 node types:</b>
   *                         <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>T1 node types:</b>
   *                         <code>cache.t1.micro</code>
   *                      </p>
   *                      <p>
   *                         <b>M1 node types:</b>
   *                         <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M3 node types:</b>
   *                         <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>C1 node types:</b>
   *                         <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>R7g node types</b>:
   * 							<code>cache.r7g.large</code>,
   * 							<code>cache.r7g.xlarge</code>,
   * 							<code>cache.r7g.2xlarge</code>,
   * 							<code>cache.r7g.4xlarge</code>,
   * 							<code>cache.r7g.8xlarge</code>,
   * 							<code>cache.r7g.12xlarge</code>,
   * 							<code>cache.r7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   * 							<code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R5 node types:</b>
   *                         <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R4 node types:</b>
   *                         <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>M2 node types:</b>
   *                         <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R3 node types:</b>
   *                         <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Additional node type info</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>The configuration variables <code>appendonly</code> and
   *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
   *                     later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The name of the cache engine (<code>memcached</code> or <code>redis</code>) to be used
   *             for this cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the cache engine that is used in this cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The current state of this cluster, one of the following values:
   *             <code>available</code>, <code>creating</code>, <code>deleted</code>,
   *                 <code>deleting</code>, <code>incompatible-network</code>, <code>modifying</code>,
   *                 <code>rebooting cluster nodes</code>, <code>restore-failed</code>, or
   *                 <code>snapshotting</code>.</p>
   * @public
   */
  CacheClusterStatus?: string | undefined;

  /**
   * <p>The number of cache nodes in the cluster.</p>
   *          <p>For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this
   *             value must be between 1 and 40.</p>
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * <p>The name of the Availability Zone in which the cluster is located or "Multiple" if the
   *             cache nodes are located in different Availability Zones.</p>
   * @public
   */
  PreferredAvailabilityZone?: string | undefined;

  /**
   * <p>The outpost ARN in which the cache cluster is created.</p>
   * @public
   */
  PreferredOutpostArn?: string | undefined;

  /**
   * <p>The date and time when the cluster was created.</p>
   * @public
   */
  CacheClusterCreateTime?: Date | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed.
   *             It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The
   *             minimum maintenance window is a 60 minute period.</p>
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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>A group of settings that are applied to the cluster in the future, or that are
   *             currently being applied.</p>
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * <p>Describes a notification topic and its status. Notification topics are used for
   *             publishing ElastiCache events to subscribers using Amazon Simple Notification Service
   *             (SNS). </p>
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * <p>A list of cache security group elements, composed of name and status
   *             sub-elements.</p>
   * @public
   */
  CacheSecurityGroups?: CacheSecurityGroupMembership[] | undefined;

  /**
   * <p>Status of the cache parameter group.</p>
   * @public
   */
  CacheParameterGroup?: CacheParameterGroupStatus | undefined;

  /**
   * <p>The name of the cache subnet group associated with the cluster.</p>
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * <p>A list of cache nodes that are members of the cluster.</p>
   * @public
   */
  CacheNodes?: CacheNode[] | undefined;

  /**
   * <p> If you are running Valkey or Redis OSS engine version 6.0 or later, set this parameter to yes if
   *             you want to opt-in to the next auto minor version upgrade campaign. This parameter is
   *             disabled for previous versions.  </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>A list of VPC Security Groups associated with the cluster.</p>
   * @public
   */
  SecurityGroups?: SecurityGroupMembership[] | undefined;

  /**
   * <p>The replication group to which this cluster belongs. If this field is empty, the
   *             cluster is not associated with any replication group.</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *          <important>
   *             <p> If the value of SnapshotRetentionLimit is set to zero (0), backups are turned
   *                 off.</p>
   *          </important>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot
   *             of your cluster.</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password) when issuing Valkey or Redis OSS
   *             commands.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AuthTokenEnabled?: boolean | undefined;

  /**
   * <p>The date the auth token was last modified</p>
   * @public
   */
  AuthTokenLastModifiedDate?: Date | undefined;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *          <p>
   *             <b>Required:</b> Only available when creating a replication
   *             group in an Amazon VPC using Redis OSS version <code>3.2.6</code>, <code>4.x</code> or
   *             later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>A flag that enables encryption at-rest when set to <code>true</code>.</p>
   *          <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the cluster
   *             is created. To enable at-rest encryption on a cluster you must set
   *                 <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create a
   *             cluster.</p>
   *          <p>
   *             <b>Required:</b> Only available when creating a replication
   *             group in an Amazon VPC using Redis OSS version <code>3.2.6</code>, <code>4.x</code> or
   *             later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AtRestEncryptionEnabled?: boolean | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the cache cluster.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>A boolean value indicating whether log delivery is enabled for the replication
   *             group.</p>
   * @public
   */
  ReplicationGroupLogDeliveryEnabled?: boolean | undefined;

  /**
   * <p>Returns the destination, format and type of the logs.</p>
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfiguration[] | undefined;

  /**
   * <p>Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6
   *             is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * <p>The network type associated with the cluster, either <code>ipv4</code> |
   *                 <code>ipv6</code>. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with
   *             no downtime.</p>
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;
}

/**
 * @public
 */
export interface CreateCacheClusterResult {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   * @public
   */
  CacheCluster?: CacheCluster | undefined;
}

/**
 * <p>The requested cache node type is not available in the specified Availability Zone. For
 *             more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 * @public
 */
export class InsufficientCacheClusterCapacityFault extends __BaseException {
  readonly name: "InsufficientCacheClusterCapacityFault" = "InsufficientCacheClusterCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCacheClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientCacheClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCacheClusterCapacityFault.prototype);
  }
}

/**
 * <p>The VPC network is in an invalid state.</p>
 * @public
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
  readonly name: "InvalidVPCNetworkStateFault" = "InvalidVPCNetworkStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidVPCNetworkStateFault, __BaseException>) {
    super({
      name: "InvalidVPCNetworkStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidVPCNetworkStateFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes in a single cluster.</p>
 * @public
 */
export class NodeQuotaForClusterExceededFault extends __BaseException {
  readonly name: "NodeQuotaForClusterExceededFault" = "NodeQuotaForClusterExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeQuotaForClusterExceededFault, __BaseException>) {
    super({
      name: "NodeQuotaForClusterExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeQuotaForClusterExceededFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes per customer.</p>
 * @public
 */
export class NodeQuotaForCustomerExceededFault extends __BaseException {
  readonly name: "NodeQuotaForCustomerExceededFault" = "NodeQuotaForCustomerExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeQuotaForCustomerExceededFault, __BaseException>) {
    super({
      name: "NodeQuotaForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeQuotaForCustomerExceededFault.prototype);
  }
}

/**
 * <p>A cache parameter group with the requested name already exists.</p>
 * @public
 */
export class CacheParameterGroupAlreadyExistsFault extends __BaseException {
  readonly name: "CacheParameterGroupAlreadyExistsFault" = "CacheParameterGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "CacheParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the maximum number of cache
 *             security groups.</p>
 * @public
 */
export class CacheParameterGroupQuotaExceededFault extends __BaseException {
  readonly name: "CacheParameterGroupQuotaExceededFault" = "CacheParameterGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "CacheParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheParameterGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>Represents the input of a <code>CreateCacheParameterGroup</code> operation.</p>
 * @public
 */
export interface CreateCacheParameterGroupMessage {
  /**
   * <p>A user-specified name for the cache parameter group.</p>
   * @public
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>The name of the cache parameter group family that the cache parameter group can be
   *             used with.</p>
   *          <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> |
   *                 <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> |
   *                 <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> |
   *                 <code>redis6.x</code> | <code>redis7</code>
   *          </p>
   * @public
   */
  CacheParameterGroupFamily: string | undefined;

  /**
   * <p>A user-specified description for the cache parameter group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Represents the output of a <code>CreateCacheParameterGroup</code> operation.</p>
 * @public
 */
export interface CacheParameterGroup {
  /**
   * <p>The name of the cache parameter group.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>The name of the cache parameter group family that this cache parameter group is
   *             compatible with.</p>
   *          <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> |
   *                 <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> |
   *                 <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> |
   *                 <code>redis6.x</code> | <code>redis7</code>
   *          </p>
   * @public
   */
  CacheParameterGroupFamily?: string | undefined;

  /**
   * <p>The description for this cache parameter group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the parameter group is associated with a Global datastore</p>
   * @public
   */
  IsGlobal?: boolean | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the cache parameter group.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateCacheParameterGroupResult {
  /**
   * <p>Represents the output of a <code>CreateCacheParameterGroup</code> operation.</p>
   * @public
   */
  CacheParameterGroup?: CacheParameterGroup | undefined;
}

/**
 * <p>The current state of the cache parameter group does not allow the requested operation
 *             to occur.</p>
 * @public
 */
export class InvalidCacheParameterGroupStateFault extends __BaseException {
  readonly name: "InvalidCacheParameterGroupStateFault" = "InvalidCacheParameterGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCacheParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidCacheParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCacheParameterGroupStateFault.prototype);
  }
}

/**
 * <p>A cache security group with the specified name already exists.</p>
 * @public
 */
export class CacheSecurityGroupAlreadyExistsFault extends __BaseException {
  readonly name: "CacheSecurityGroupAlreadyExistsFault" = "CacheSecurityGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSecurityGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "CacheSecurityGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSecurityGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache
 *             security groups.</p>
 * @public
 */
export class CacheSecurityGroupQuotaExceededFault extends __BaseException {
  readonly name: "CacheSecurityGroupQuotaExceededFault" = "CacheSecurityGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSecurityGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "CacheSecurityGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSecurityGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>Represents the input of a <code>CreateCacheSecurityGroup</code> operation.</p>
 * @public
 */
export interface CreateCacheSecurityGroupMessage {
  /**
   * <p>A name for the cache security group. This value is stored as a lowercase
   *             string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word
   *             "Default".</p>
   *          <p>Example: <code>mysecuritygroup</code>
   *          </p>
   * @public
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>A description for the cache security group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCacheSecurityGroupResult {
  /**
   * <p>Represents the output of one of the following operations:</p>
   *          <ul>
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
   * @public
   */
  CacheSecurityGroup?: CacheSecurityGroup | undefined;
}

/**
 * <p>The requested cache subnet group name is already in use by an existing cache subnet
 *             group.</p>
 * @public
 */
export class CacheSubnetGroupAlreadyExistsFault extends __BaseException {
  readonly name: "CacheSubnetGroupAlreadyExistsFault" = "CacheSubnetGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "CacheSubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache
 *             subnet groups.</p>
 * @public
 */
export class CacheSubnetGroupQuotaExceededFault extends __BaseException {
  readonly name: "CacheSubnetGroupQuotaExceededFault" = "CacheSubnetGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "CacheSubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of subnets
 *             in a cache subnet group.</p>
 * @public
 */
export class CacheSubnetQuotaExceededFault extends __BaseException {
  readonly name: "CacheSubnetQuotaExceededFault" = "CacheSubnetQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "CacheSubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetQuotaExceededFault.prototype);
  }
}

/**
 * <p>Represents the input of a <code>CreateCacheSubnetGroup</code> operation.</p>
 * @public
 */
export interface CreateCacheSubnetGroupMessage {
  /**
   * <p>A name for the cache subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *          <p>Example: <code>mysubnetgroup</code>
   *          </p>
   * @public
   */
  CacheSubnetGroupName: string | undefined;

  /**
   * <p>A description for the cache subnet group.</p>
   * @public
   */
  CacheSubnetGroupDescription: string | undefined;

  /**
   * <p>A list of VPC subnet IDs for the cache subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes an Availability Zone in which the cluster is launched.</p>
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
 * <p>The ID of the outpost subnet.</p>
 * @public
 */
export interface SubnetOutpost {
  /**
   * <p>The outpost ARN of the subnet.</p>
   * @public
   */
  SubnetOutpostArn?: string | undefined;
}

/**
 * <p>Represents the subnet associated with a cluster. This parameter refers to subnets
 *             defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.</p>
 * @public
 */
export interface Subnet {
  /**
   * <p>The unique identifier for the subnet.</p>
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * <p>The Availability Zone associated with the subnet.</p>
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * <p>The outpost ARN of the subnet.</p>
   * @public
   */
  SubnetOutpost?: SubnetOutpost | undefined;

  /**
   * <p>Either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is
   *             supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * <p>Represents the output of one of the following operations:</p>
 *          <ul>
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
 * @public
 */
export interface CacheSubnetGroup {
  /**
   * <p>The name of the cache subnet group.</p>
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * <p>The description of the cache subnet group.</p>
   * @public
   */
  CacheSubnetGroupDescription?: string | undefined;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>A list of subnets associated with the cache subnet group.</p>
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the cache subnet group.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>Either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is
   *             supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * @public
 */
export interface CreateCacheSubnetGroupResult {
  /**
   * <p>Represents the output of one of the following operations:</p>
   *          <ul>
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
   * @public
   */
  CacheSubnetGroup?: CacheSubnetGroup | undefined;
}

/**
 * <p>An invalid subnet identifier was specified.</p>
 * @public
 */
export class InvalidSubnet extends __BaseException {
  readonly name: "InvalidSubnet" = "InvalidSubnet";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnet, __BaseException>) {
    super({
      name: "InvalidSubnet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnet.prototype);
  }
}

/**
 * <p>At least one subnet ID does not match the other subnet IDs. This mismatch typically
 *             occurs when a user sets one subnet ID to a regional Availability Zone and a different
 *             one to an outpost. Or when a user sets the subnet ID to an Outpost when not subscribed
 *             on this service.</p>
 * @public
 */
export class SubnetNotAllowedFault extends __BaseException {
  readonly name: "SubnetNotAllowedFault" = "SubnetNotAllowedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetNotAllowedFault, __BaseException>) {
    super({
      name: "SubnetNotAllowedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetNotAllowedFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateGlobalReplicationGroupMessage {
  /**
   * <p>The suffix name of a Global datastore. Amazon ElastiCache automatically applies a
   *             prefix to the Global datastore ID when it is created. Each Amazon Region has its own
   *             prefix. For instance, a Global datastore ID created in the US-West-1 region will begin
   *             with "dsdfu" along with the suffix name you provide. The suffix, combined with the
   *             auto-generated prefix, guarantees uniqueness of the Global datastore name across
   *             multiple regions. </p>
   *          <p>For a full list of Amazon Regions and their respective Global datastore iD prefixes,
   *             see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastores-CLI.html">Using the Amazon CLI with Global datastores </a>.</p>
   * @public
   */
  GlobalReplicationGroupIdSuffix: string | undefined;

  /**
   * <p>Provides details of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupDescription?: string | undefined;

  /**
   * <p>The name of the primary cluster that accepts writes and will replicate updates to the
   *             secondary cluster.</p>
   * @public
   */
  PrimaryReplicationGroupId: string | undefined;
}

/**
 * <p>Indicates the slot configuration and global identifier for a slice group.</p>
 * @public
 */
export interface GlobalNodeGroup {
  /**
   * <p>The name of the global node group</p>
   * @public
   */
  GlobalNodeGroupId?: string | undefined;

  /**
   * <p>The keyspace for this node group</p>
   * @public
   */
  Slots?: string | undefined;
}

/**
 * <p>A member of a Global datastore. It contains the Replication Group Id, the Amazon
 *             region and the role of the replication group. </p>
 * @public
 */
export interface GlobalReplicationGroupMember {
  /**
   * <p>The replication group id of the Global datastore member.</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>The Amazon region of the Global datastore member.</p>
   * @public
   */
  ReplicationGroupRegion?: string | undefined;

  /**
   * <p>Indicates the role of the replication group, primary or secondary.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Indicates whether automatic failover is enabled for the replication group.</p>
   * @public
   */
  AutomaticFailover?: AutomaticFailoverStatus | undefined;

  /**
   * <p>The status of the membership of the replication group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
 *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
 *             primary cluster automatically replicates updates to the secondary cluster.</p>
 *          <ul>
 *             <li>
 *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
 *                     the name of the Global datastore, which is what you use to associate a secondary
 *                     cluster.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GlobalReplicationGroup {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId?: string | undefined;

  /**
   * <p>The optional description of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupDescription?: string | undefined;

  /**
   * <p>The status of the Global datastore</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The cache node type of the Global datastore</p>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The ElastiCache engine. For Valkey or Redis OSS only.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The ElastiCache engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The replication groups that comprise the Global datastore.</p>
   * @public
   */
  Members?: GlobalReplicationGroupMember[] | undefined;

  /**
   * <p>A flag that indicates whether the Global datastore is cluster enabled.</p>
   * @public
   */
  ClusterEnabled?: boolean | undefined;

  /**
   * <p>Indicates the slot configuration and global identifier for each slice group.</p>
   * @public
   */
  GlobalNodeGroups?: GlobalNodeGroup[] | undefined;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password) when issuing Valkey or Redis OSS
   *             commands.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AuthTokenEnabled?: boolean | undefined;

  /**
   * <p>A flag that enables in-transit encryption when set to true.</p>
   *          <p>
   *             <b>Required:</b> Only available when creating a replication
   *             group in an Amazon VPC using Redis OSS version <code>3.2.6</code>, <code>4.x</code> or
   *             later.</p>
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>A flag that enables encryption at rest when set to <code>true</code>.</p>
   *          <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the
   *             replication group is created. To enable encryption at rest on a replication group you
   *             must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create the
   *             replication group. </p>
   *          <p>
   *             <b>Required:</b> Only available when creating a replication
   *             group in an Amazon VPC using Redis OSS version <code>3.2.6</code>, <code>4.x</code> or
   *             later.</p>
   * @public
   */
  AtRestEncryptionEnabled?: boolean | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the global replication group.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
   *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
   *             primary cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
   *                     the name of the Global datastore, which is what you use to associate a secondary
   *                     cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * <p>The Global datastore name already exists.</p>
 * @public
 */
export class GlobalReplicationGroupAlreadyExistsFault extends __BaseException {
  readonly name: "GlobalReplicationGroupAlreadyExistsFault" = "GlobalReplicationGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalReplicationGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "GlobalReplicationGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalReplicationGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>Represents the input of a <code>CreateReplicationGroup</code> operation.</p>
 * @public
 */
export interface CreateReplicationGroupMessage {
  /**
   * <p>The replication group identifier. This parameter is stored as a lowercase
   *             string.</p>
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
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>A user-created description for the replication group.</p>
   * @public
   */
  ReplicationGroupDescription: string | undefined;

  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId?: string | undefined;

  /**
   * <p>The identifier of the cluster that serves as the primary for this replication group.
   *             This cluster must already exist and have a status of <code>available</code>.</p>
   *          <p>This parameter is not required if <code>NumCacheClusters</code>,
   *                 <code>NumNodeGroups</code>, or <code>ReplicasPerNodeGroup</code> is
   *             specified.</p>
   * @public
   */
  PrimaryClusterId?: string | undefined;

  /**
   * <p>Specifies whether a read-only replica is automatically promoted to read/write primary
   *             if the existing primary fails.</p>
   *          <p>
   *             <code>AutomaticFailoverEnabled</code> must be enabled for Valkey or Redis OSS (cluster mode enabled)
   *             replication groups.</p>
   *          <p>Default: false</p>
   * @public
   */
  AutomaticFailoverEnabled?: boolean | undefined;

  /**
   * <p>A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more
   *             information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html">Minimizing Downtime: Multi-AZ</a>.</p>
   * @public
   */
  MultiAZEnabled?: boolean | undefined;

  /**
   * <p>The number of clusters this replication group initially has.</p>
   *          <p>This parameter is not used if there is more than one node group (shard). You should
   *             use <code>ReplicasPerNodeGroup</code> instead.</p>
   *          <p>If <code>AutomaticFailoverEnabled</code> is <code>true</code>, the value of this
   *             parameter must be at least 2. If <code>AutomaticFailoverEnabled</code> is
   *                 <code>false</code> you can omit this parameter (it will default to 1), or you can
   *             explicitly set it to a value between 2 and 6.</p>
   *          <p>The maximum permitted value for <code>NumCacheClusters</code> is 6 (1 primary plus 5
   *             replicas).</p>
   * @public
   */
  NumCacheClusters?: number | undefined;

  /**
   * <p>A list of EC2 Availability Zones in which the replication group's clusters are
   *             created. The order of the Availability Zones in the list is the order in which clusters
   *             are allocated. The primary cluster is created in the first AZ in the list.</p>
   *          <p>This parameter is not used if there is more than one node group (shard). You should
   *             use <code>NodeGroupConfiguration</code> instead.</p>
   *          <note>
   *             <p>If you are creating your replication group in an Amazon VPC (recommended), you can
   *                 only locate clusters in Availability Zones associated with the subnets in the
   *                 selected subnet group.</p>
   *             <p>The number of Availability Zones listed must equal the value of
   *                     <code>NumCacheClusters</code>.</p>
   *          </note>
   *          <p>Default: system chosen Availability Zones.</p>
   * @public
   */
  PreferredCacheClusterAZs?: string[] | undefined;

  /**
   * <p>An optional parameter that specifies the number of node groups (shards) for this Valkey or Redis OSS (cluster mode enabled) replication group. For Valkey or Redis OSS (cluster mode disabled) either omit
   *             this parameter or set it to 1.</p>
   *          <p>Default: 1</p>
   * @public
   */
  NumNodeGroups?: number | undefined;

  /**
   * <p>An optional parameter that specifies the number of replica nodes in each node group
   *             (shard). Valid values are 0 to 5.</p>
   * @public
   */
  ReplicasPerNodeGroup?: number | undefined;

  /**
   * <p>A list of node group (shard) configuration options. Each node group (shard)
   *             configuration has the following members: <code>PrimaryAvailabilityZone</code>,
   *                 <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>, and
   *                 <code>Slots</code>.</p>
   *          <p>If you're creating a Valkey or Redis OSS (cluster mode disabled) or a Valkey or Redis OSS (cluster mode enabled)
   *             replication group, you can use this parameter to individually configure each node group
   *             (shard), or you can omit this parameter. However, it is required when seeding a Valkey or Redis OSS (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group
   *             (shard) using this parameter because you must specify the slots for each node
   *             group.</p>
   * @public
   */
  NodeGroupConfiguration?: NodeGroupConfiguration[] | undefined;

  /**
   * <p>The compute and memory capacity of the nodes in the node group (shard).</p>
   *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
   *             generation types provide more memory and computational power at lower cost when compared
   *             to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M7g node types</b>:
   *     					<code>cache.m7g.large</code>,
   *     					<code>cache.m7g.xlarge</code>,
   *     					<code>cache.m7g.2xlarge</code>,
   *     					<code>cache.m7g.4xlarge</code>,
   *     					<code>cache.m7g.8xlarge</code>,
   *     					<code>cache.m7g.12xlarge</code>,
   *     					<code>cache.m7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M5 node types:</b>
   *                         <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M4 node types:</b>
   *                         <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
   * 					        <code>cache.t4g.micro</code>,
   * 					        <code>cache.t4g.small</code>,
   * 					        <code>cache.t4g.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T3 node types:</b>
   *                         <code>cache.t3.micro</code>,
   *     						<code>cache.t3.small</code>,
   *     						<code>cache.t3.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T2 node types:</b>
   *                         <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>T1 node types:</b>
   *                         <code>cache.t1.micro</code>
   *                      </p>
   *                      <p>
   *                         <b>M1 node types:</b>
   *                         <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M3 node types:</b>
   *                         <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>C1 node types:</b>
   *                         <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>R7g node types</b>:
   * 							<code>cache.r7g.large</code>,
   * 							<code>cache.r7g.xlarge</code>,
   * 							<code>cache.r7g.2xlarge</code>,
   * 							<code>cache.r7g.4xlarge</code>,
   * 							<code>cache.r7g.8xlarge</code>,
   * 							<code>cache.r7g.12xlarge</code>,
   * 							<code>cache.r7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   * 							<code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R5 node types:</b>
   *                         <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R4 node types:</b>
   *                         <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>M2 node types:</b>
   *                         <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R3 node types:</b>
   *                         <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Additional node type info</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>The configuration variables <code>appendonly</code> and
   *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
   *                     later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The name of the cache engine to be used for the clusters in this replication group.
   *             The value must be set to <code>Redis</code>.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version number of the cache engine to be used for the clusters in this replication
   *             group. To view the supported cache engine versions, use the
   *                 <code>DescribeCacheEngineVersions</code> operation.</p>
   *          <p>
   *             <b>Important:</b> You can upgrade to a newer engine version
   *             (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting
   *                 a Cache Engine and Version</a>) in the <i>ElastiCache User
   *                 Guide</i>, but you cannot downgrade to an earlier engine version. If you want
   *             to use an earlier engine version, you must delete the existing cluster or replication
   *             group and create it anew with the earlier engine version. </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of the parameter group to associate with this replication group. If this
   *             argument is omitted, the default cache parameter group for the specified engine is
   *             used.</p>
   *          <p>If you are running Valkey or Redis OSS version 3.2.4 or later, only one node group (shard), and want
   *             to use a default parameter group, we recommend that you specify the parameter group by
   *             name. </p>
   *          <ul>
   *             <li>
   *                <p>To create a Valkey or Redis OSS (cluster mode disabled) replication group, use
   *                         <code>CacheParameterGroupName=default.redis3.2</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a Valkey or Redis OSS (cluster mode enabled) replication group, use
   *                         <code>CacheParameterGroupName=default.redis3.2.cluster.on</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>The name of the cache subnet group to be used for the replication group.</p>
   *          <important>
   *             <p>If you're going to launch your cluster in an Amazon VPC, you need to create a
   *                 subnet group before you start creating a cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p>
   *          </important>
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * <p>A list of cache security group names to associate with this replication group.</p>
   * @public
   */
  CacheSecurityGroupNames?: string[] | undefined;

  /**
   * <p>One or more Amazon VPC security groups associated with this replication group.</p>
   *          <p>Use this parameter only when you are creating a replication group in an Amazon Virtual
   *             Private Cloud (Amazon VPC).</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource. Tags are comma-separated key,value pairs
   *             (e.g. Key=<code>myKey</code>, Value=<code>myKeyValue</code>. You can include multiple
   *             tags as shown following: Key=<code>myKey</code>, Value=<code>myKeyValue</code>
   *                 Key=<code>mySecondKey</code>, Value=<code>mySecondKeyValue</code>. Tags on
   *             replication groups will be replicated to all nodes.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A list of Amazon Resource Names (ARN) that uniquely identify the Valkey or Redis OSS RDB snapshot
   *             files stored in Amazon S3. The snapshot files are used to populate the new replication
   *             group. The Amazon S3 object name in the ARN cannot contain any commas. The new
   *             replication group will have the number of node groups (console: shards) specified by the
   *             parameter <i>NumNodeGroups</i> or the number of node groups configured by
   *                 <i>NodeGroupConfiguration</i> regardless of the number of ARNs
   *             specified here.</p>
   *          <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code>
   *          </p>
   * @public
   */
  SnapshotArns?: string[] | undefined;

  /**
   * <p>The name of a snapshot from which to restore data into the new replication group. The
   *             snapshot status changes to <code>restoring</code> while the new replication group is
   *             being created.</p>
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed.
   *             It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The
   *             minimum maintenance window is a 60 minute period.</p>
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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The port number on which each member of the replication group accepts
   *             connections.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic
   *             to which notifications are sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be the same as the cluster owner.</p>
   *          </note>
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * <p> If you are running Valkey 7.2 and above or Redis OSS engine version 6.0 and above, set this parameter to yes
   *             to opt-in to the next auto minor version upgrade campaign. This parameter is
   *             disabled for previous versions.  </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The number of days for which ElastiCache retains automatic snapshots before deleting
   *             them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a snapshot that
   *             was taken today is retained for 5 days before being deleted.</p>
   *          <p>Default: 0 (i.e., automatic backups are disabled for this cluster).</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot
   *             of your node group (shard).</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   *          <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate
   *             time range.</p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>
   *             <b>Reserved parameter.</b> The password used to access a
   *             password protected server.</p>
   *          <p>
   *             <code>AuthToken</code> can be specified only on replication groups where
   *                 <code>TransitEncryptionEnabled</code> is <code>true</code>.</p>
   *          <important>
   *             <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as
   *                     <code>true</code>, an <code>AuthToken</code>, and a
   *                     <code>CacheSubnetGroup</code>.</p>
   *          </important>
   *          <p>Password constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be only printable ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 16 characters and no more than 128 characters in
   *                     length.</p>
   *             </li>
   *             <li>
   *                <p>The only permitted printable special characters are !, &, #, $, ^, <,
   *                     >, and -. Other printable special characters cannot be used in the AUTH
   *                     token.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH
   *                 password</a> at http://redis.io/commands/AUTH.</p>
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *          <p>This parameter is valid only if the <code>Engine</code> parameter is
   *                 <code>redis</code>, the <code>EngineVersion</code> parameter is <code>3.2.6</code>,
   *                 <code>4.x</code> or later, and the cluster is being created in an Amazon VPC.</p>
   *          <p>If you enable in-transit encryption, you must also specify a value for
   *                 <code>CacheSubnetGroup</code>.</p>
   *          <p>
   *             <b>Required:</b> Only available when creating a replication
   *             group in an Amazon VPC using Redis OSS version <code>3.2.6</code>, <code>4.x</code> or
   *             later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <important>
   *             <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as
   *                     <code>true</code>, an <code>AuthToken</code>, and a
   *                     <code>CacheSubnetGroup</code>.</p>
   *          </important>
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>A flag that enables encryption at rest when set to <code>true</code>.</p>
   *          <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the
   *             replication group is created. To enable encryption at rest on a replication group you
   *             must set <code>AtRestEncryptionEnabled</code> to <code>true</code> when you create the
   *             replication group. </p>
   *          <p>
   *             <b>Required:</b> Only available when creating a replication
   *             group in an Amazon VPC using Redis OSS version <code>3.2.6</code>, <code>4.x</code> or
   *             later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AtRestEncryptionEnabled?: boolean | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the disk in the cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The user group to associate with the replication group.</p>
   * @public
   */
  UserGroupIds?: string[] | undefined;

  /**
   * <p>Specifies the destination, format and type of the logs.</p>
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[] | undefined;

  /**
   * <p>Enables data tiering. Data tiering is only supported for replication groups using the
   *             r6gd node type. This parameter must be set to true when using r6gd nodes. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTieringEnabled?: boolean | undefined;

  /**
   * <p>Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6
   *             is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * <p>The network type you choose when creating a replication group, either
   *             <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on
   *             the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with
   *             no downtime.</p>
   *          <p>When setting <code>TransitEncryptionEnabled</code> to <code>true</code>, you can set
   *             your <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request,
   *             to allow both encrypted and unencrypted connections at the same time. Once you migrate
   *             all your Valkey or Redis OSS clients to use encrypted connections you can modify the value to
   *                 <code>required</code> to allow encrypted connections only.</p>
   *          <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step
   *             process that requires you to first set the <code>TransitEncryptionMode</code> to
   *                 <code>preferred</code>, after that you can set <code>TransitEncryptionMode</code> to
   *                 <code>required</code>.</p>
   *          <p>This process will not trigger the replacement of the replication group.</p>
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * <p>Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first
   *             set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect
   *             using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS
   *             clients to use cluster mode enabled, you can then complete cluster mode configuration
   *             and set the cluster mode to Enabled.</p>
   * @public
   */
  ClusterMode?: ClusterMode | undefined;

  /**
   * <p>The name of the snapshot used to create a replication group. Available for Valkey, Redis OSS only.</p>
   * @public
   */
  ServerlessCacheSnapshotName?: string | undefined;
}

/**
 * @public
 */
export interface CreateReplicationGroupResult {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * <p>The Global datastore does not exist</p>
 * @public
 */
export class GlobalReplicationGroupNotFoundFault extends __BaseException {
  readonly name: "GlobalReplicationGroupNotFoundFault" = "GlobalReplicationGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalReplicationGroupNotFoundFault, __BaseException>) {
    super({
      name: "GlobalReplicationGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalReplicationGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested cluster is not in the <code>available</code> state.</p>
 * @public
 */
export class InvalidCacheClusterStateFault extends __BaseException {
  readonly name: "InvalidCacheClusterStateFault" = "InvalidCacheClusterStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCacheClusterStateFault, __BaseException>) {
    super({
      name: "InvalidCacheClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCacheClusterStateFault.prototype);
  }
}

/**
 * <p>The Global datastore is not available or in primary-only state.</p>
 * @public
 */
export class InvalidGlobalReplicationGroupStateFault extends __BaseException {
  readonly name: "InvalidGlobalReplicationGroupStateFault" = "InvalidGlobalReplicationGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGlobalReplicationGroupStateFault, __BaseException>) {
    super({
      name: "InvalidGlobalReplicationGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGlobalReplicationGroupStateFault.prototype);
  }
}

/**
 * <p>The user group is not in an active state.</p>
 * @public
 */
export class InvalidUserGroupStateFault extends __BaseException {
  readonly name: "InvalidUserGroupStateFault" = "InvalidUserGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserGroupStateFault, __BaseException>) {
    super({
      name: "InvalidUserGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserGroupStateFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the maximum allowed number of
 *             node groups (shards) in a single replication group. The default maximum is 90</p>
 * @public
 */
export class NodeGroupsPerReplicationGroupQuotaExceededFault extends __BaseException {
  readonly name: "NodeGroupsPerReplicationGroupQuotaExceededFault" = "NodeGroupsPerReplicationGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeGroupsPerReplicationGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "NodeGroupsPerReplicationGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeGroupsPerReplicationGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified replication group already exists.</p>
 * @public
 */
export class ReplicationGroupAlreadyExistsFault extends __BaseException {
  readonly name: "ReplicationGroupAlreadyExistsFault" = "ReplicationGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReplicationGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupAlreadyExistsFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const DataStorageUnit = {
  GB: "GB",
} as const;

/**
 * @public
 */
export type DataStorageUnit = (typeof DataStorageUnit)[keyof typeof DataStorageUnit];

/**
 * <p>The data storage limit.</p>
 * @public
 */
export interface DataStorage {
  /**
   * <p>The upper limit for data storage the cache is set to use.</p>
   * @public
   */
  Maximum?: number | undefined;

  /**
   * <p>The lower limit for data storage the cache is set to use.</p>
   * @public
   */
  Minimum?: number | undefined;

  /**
   * <p>The unit that the storage is measured in, in GB.</p>
   * @public
   */
  Unit: DataStorageUnit | undefined;
}

/**
 * <p>The configuration for the number of ElastiCache Processing Units (ECPU) the cache can consume per second.</p>
 * @public
 */
export interface ECPUPerSecond {
  /**
   * <p>The configuration for the maximum number of ECPUs the cache can consume per second.</p>
   * @public
   */
  Maximum?: number | undefined;

  /**
   * <p>The configuration for the minimum number of ECPUs the cache should be able consume per second.</p>
   * @public
   */
  Minimum?: number | undefined;
}

/**
 * <p>The usage limits for storage and ElastiCache Processing Units for the cache.</p>
 * @public
 */
export interface CacheUsageLimits {
  /**
   * <p>
   *             The maximum data storage limit in the cache, expressed in Gigabytes.
   *         </p>
   * @public
   */
  DataStorage?: DataStorage | undefined;

  /**
   * <p>The configuration for the number of ElastiCache Processing Units (ECPU) the cache can consume per second.</p>
   * @public
   */
  ECPUPerSecond?: ECPUPerSecond | undefined;
}

/**
 * @public
 */
export interface CreateServerlessCacheRequest {
  /**
   * <p>User-provided identifier for the serverless cache. This parameter is stored as a lowercase string.</p>
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * <p>User-provided description for the serverless cache.
   *            The default is NULL, i.e. if no description is provided then an empty string will be returned.
   *            The maximum length is 255 characters. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the cache engine to be used for creating the serverless cache.</p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The version of the cache engine that will be used to create the serverless cache.</p>
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * <p>Sets the cache usage limits for storage and ElastiCache Processing Units for the cache.</p>
   * @public
   */
  CacheUsageLimits?: CacheUsageLimits | undefined;

  /**
   * <p>ARN of the customer managed key for encrypting the data at rest. If no KMS key is provided, a default service key is used.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of the one or more VPC security groups to be associated with the serverless cache.
   *            The security group will authorize traffic access for the VPC end-point (private-link).
   *            If no other information is given this will be the VPC’s Default Security Group that is associated with the cluster VPC
   *            end-point.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ARN(s) of the snapshot that the new serverless cache will be created from. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  SnapshotArnsToRestore?: string[] | undefined;

  /**
   * <p>The list of tags (key, value) pairs to be added to the serverless cache resource. Default is NULL.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The identifier of the UserGroup to be associated with the serverless cache.  Available for Valkey and Redis OSS only. Default is NULL.</p>
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * <p>A list of the identifiers of the subnets where the VPC endpoint for the serverless cache will be deployed.
   *            All the subnetIds must belong to the same VPC.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The number of snapshots that will be retained for the serverless cache that is being created.
   *            As new snapshots beyond this limit are added, the oldest snapshots will be deleted on a rolling basis. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time that snapshots will be created from the new serverless cache. By default this number is populated with
   *            0, i.e. no snapshots will be created on an automatic daily basis. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  DailySnapshotTime?: string | undefined;
}

/**
 * <p>The resource representing a serverless cache.</p>
 * @public
 */
export interface ServerlessCache {
  /**
   * <p>The unique identifier of the serverless cache.</p>
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * <p>A description of the serverless cache.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>When the serverless cache was created. </p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The current status of the serverless cache. The allowed values are CREATING, AVAILABLE, DELETING, CREATE-FAILED and MODIFYING.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The engine the serverless cache is compatible with.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version number of the engine the serverless cache is compatible with.</p>
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * <p>The name and version number of the engine the serverless cache is compatible with.</p>
   * @public
   */
  FullEngineVersion?: string | undefined;

  /**
   * <p>The cache usage limit for the serverless cache.</p>
   * @public
   */
  CacheUsageLimits?: CacheUsageLimits | undefined;

  /**
   * <p>The ID of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt data at rest in the serverless cache.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The IDs of the EC2 security groups associated with the serverless
   *            cache.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Represents the information required for client programs to connect to a cache
   *             node. This value is read-only.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * <p>Represents the information required for client programs to connect to a cache
   *             node. This value is read-only.</p>
   * @public
   */
  ReaderEndpoint?: Endpoint | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the serverless cache.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The identifier of the user group associated with the serverless cache. Available for Valkey and Redis OSS only. Default is NULL.</p>
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * <p>If no subnet IDs are given and your VPC is in us-west-1, then ElastiCache will select 2 default subnets across AZs in your VPC.
   *            For all other Regions, if no subnet IDs are given then ElastiCache will select 3 default subnets across AZs in your default VPC.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The current setting for the number of serverless cache snapshots the system will retain. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time that a cache snapshot will be created. Default is NULL, i.e. snapshots will not be created at a
   *            specific time on a daily basis. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  DailySnapshotTime?: string | undefined;
}

/**
 * @public
 */
export interface CreateServerlessCacheResponse {
  /**
   * <p>The response for the attempt to create the serverless cache.</p>
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * <p>You must enter valid credentials.</p>
 * @public
 */
export class InvalidCredentialsException extends __BaseException {
  readonly name: "InvalidCredentialsException" = "InvalidCredentialsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCredentialsException, __BaseException>) {
    super({
      name: "InvalidCredentialsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCredentialsException.prototype);
  }
}

/**
 * <p>A serverless cache with this name already exists.</p>
 * @public
 */
export class ServerlessCacheAlreadyExistsFault extends __BaseException {
  readonly name: "ServerlessCacheAlreadyExistsFault" = "ServerlessCacheAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheAlreadyExistsFault, __BaseException>) {
    super({
      name: "ServerlessCacheAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of serverless caches exceeds the customer quota.</p>
 * @public
 */
export class ServerlessCacheQuotaForCustomerExceededFault extends __BaseException {
  readonly name: "ServerlessCacheQuotaForCustomerExceededFault" = "ServerlessCacheQuotaForCustomerExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheQuotaForCustomerExceededFault, __BaseException>) {
    super({
      name: "ServerlessCacheQuotaForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheQuotaForCustomerExceededFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateServerlessCacheSnapshotRequest {
  /**
   * <p>The name for the snapshot being created. Must be unique for the customer account. Available for Valkey, Redis OSS and Serverless Memcached only.
   *            Must be between 1 and 255 characters.</p>
   * @public
   */
  ServerlessCacheSnapshotName: string | undefined;

  /**
   * <p>The name of an existing serverless cache. The snapshot is created from this cache. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.  Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of tags to be added to the snapshot resource. A tag is a key-value pair. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateServerlessCacheSnapshotResponse {
  /**
   * <p>The state of a serverless cache snapshot at a specific point in time, to the millisecond. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot | undefined;
}

/**
 * <p>Represents the input of a <code>CreateSnapshot</code> operation.</p>
 * @public
 */
export interface CreateSnapshotMessage {
  /**
   * <p>The identifier of an existing replication group. The snapshot is created from this
   *             replication group.</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>The identifier of an existing cluster. The snapshot is created from this
   *             cluster.</p>
   * @public
   */
  CacheClusterId?: string | undefined;

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
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotResult {
  /**
   * <p>Represents a copy of an entire Valkey or Redis OSS cluster as of the time when the snapshot was
   *             taken.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * <p>You attempted one of the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Creating a snapshot of a Valkey or Redis OSS cluster running on a
 *                         <code>cache.t1.micro</code> cache node.</p>
 *             </li>
 *             <li>
 *                <p>Creating a snapshot of a cluster that is running Memcached rather than
 *                     Valkey or Redis OSS.</p>
 *             </li>
 *          </ul>
 *          <p>Neither of these are supported by ElastiCache.</p>
 * @public
 */
export class SnapshotFeatureNotSupportedFault extends __BaseException {
  readonly name: "SnapshotFeatureNotSupportedFault" = "SnapshotFeatureNotSupportedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotFeatureNotSupportedFault, __BaseException>) {
    super({
      name: "SnapshotFeatureNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotFeatureNotSupportedFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const InputAuthenticationType = {
  IAM: "iam",
  NO_PASSWORD: "no-password-required",
  PASSWORD: "password",
} as const;

/**
 * @public
 */
export type InputAuthenticationType = (typeof InputAuthenticationType)[keyof typeof InputAuthenticationType];

/**
 * <p>Specifies the authentication mode to use.</p>
 * @public
 */
export interface AuthenticationMode {
  /**
   * <p>Specifies the authentication type. Possible options are IAM authentication, password
   *             and no password.</p>
   * @public
   */
  Type?: InputAuthenticationType | undefined;

  /**
   * <p>Specifies the passwords to use for authentication if <code>Type</code> is set to
   *                 <code>password</code>.</p>
   * @public
   */
  Passwords?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateUserMessage {
  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The username of the user.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The current supported value is Redis. </p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>Passwords used for this user. You can create up to two passwords for each user.</p>
   * @public
   */
  Passwords?: string[] | undefined;

  /**
   * <p>Access permissions string used for this user.</p>
   * @public
   */
  AccessString: string | undefined;

  /**
   * <p>Indicates a password is not required for this user.</p>
   * @public
   */
  NoPasswordRequired?: boolean | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies how to authenticate the user.</p>
   * @public
   */
  AuthenticationMode?: AuthenticationMode | undefined;
}

/**
 * <p>A user with this username already exists.</p>
 * @public
 */
export class DuplicateUserNameFault extends __BaseException {
  readonly name: "DuplicateUserNameFault" = "DuplicateUserNameFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateUserNameFault, __BaseException>) {
    super({
      name: "DuplicateUserNameFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateUserNameFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  IAM: "iam",
  NO_PASSWORD: "no-password",
  PASSWORD: "password",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * <p>Indicates whether the user requires a password to authenticate.</p>
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
 * @public
 */
export interface User {
  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The username of the user.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Indicates the user status. Can be "active", "modifying" or "deleting".</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The current supported value is Redis.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The minimum engine version required, which is Redis OSS 6.0</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * <p>Access permissions string used for this user.</p>
   * @public
   */
  AccessString?: string | undefined;

  /**
   * <p>Returns a list of the user group IDs the user belongs to.</p>
   * @public
   */
  UserGroupIds?: string[] | undefined;

  /**
   * <p>Denotes whether the user requires a password to authenticate.</p>
   * @public
   */
  Authentication?: Authentication | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * <p>A user with this ID already exists.</p>
 * @public
 */
export class UserAlreadyExistsFault extends __BaseException {
  readonly name: "UserAlreadyExistsFault" = "UserAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserAlreadyExistsFault, __BaseException>) {
    super({
      name: "UserAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The quota of users has been exceeded.</p>
 * @public
 */
export class UserQuotaExceededFault extends __BaseException {
  readonly name: "UserQuotaExceededFault" = "UserQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserQuotaExceededFault, __BaseException>) {
    super({
      name: "UserQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserQuotaExceededFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateUserGroupMessage {
  /**
   * <p>The ID of the user group.</p>
   * @public
   */
  UserGroupId: string | undefined;

  /**
   * <p>The current supported value is Redis user. </p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The list of user IDs that belong to the user group.</p>
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted. Available for Valkey and Redis OSS only.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>You must add default user to a user group.</p>
 * @public
 */
export class DefaultUserRequired extends __BaseException {
  readonly name: "DefaultUserRequired" = "DefaultUserRequired";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DefaultUserRequired, __BaseException>) {
    super({
      name: "DefaultUserRequired",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DefaultUserRequired.prototype);
  }
}

/**
 * <p>Returns the updates being applied to the user group.</p>
 * @public
 */
export interface UserGroupPendingChanges {
  /**
   * <p>The list of user IDs to remove.</p>
   * @public
   */
  UserIdsToRemove?: string[] | undefined;

  /**
   * <p>The list of user IDs to add.</p>
   * @public
   */
  UserIdsToAdd?: string[] | undefined;
}

/**
 * @public
 */
export interface UserGroup {
  /**
   * <p>The ID of the user group.</p>
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * <p>Indicates user group status. Can be "creating", "active", "modifying",
   *             "deleting".</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The current supported value is Redis user. </p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The list of user IDs that belong to the user group.</p>
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * <p>The minimum engine version required, which is Redis OSS 6.0</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * <p>A list of updates being applied to the user group.</p>
   * @public
   */
  PendingChanges?: UserGroupPendingChanges | undefined;

  /**
   * <p>A list of replication groups that the user group can access.</p>
   * @public
   */
  ReplicationGroups?: string[] | undefined;

  /**
   * <p>Indicates which serverless caches the specified user group is associated with. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCaches?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user group.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * <p>The user group with this ID already exists.</p>
 * @public
 */
export class UserGroupAlreadyExistsFault extends __BaseException {
  readonly name: "UserGroupAlreadyExistsFault" = "UserGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "UserGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of users exceeds the user group limit.</p>
 * @public
 */
export class UserGroupQuotaExceededFault extends __BaseException {
  readonly name: "UserGroupQuotaExceededFault" = "UserGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "UserGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserGroupQuotaExceededFault.prototype);
  }
}

/**
 * @public
 */
export interface DecreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The number of node groups (shards) that results from the modification of the shard
   *             configuration</p>
   * @public
   */
  NodeGroupCount: number | undefined;

  /**
   * <p>If the value of NodeGroupCount is less than the current number of node groups
   *             (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required.
   *             GlobalNodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster.
   *             ElastiCache will attempt to remove all node groups listed by
   *             GlobalNodeGroupsToRemove from the cluster. </p>
   * @public
   */
  GlobalNodeGroupsToRemove?: string[] | undefined;

  /**
   * <p>If the value of NodeGroupCount is less than the current number of node groups
   *             (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required.
   *             GlobalNodeGroupsToRetain is a list of NodeGroupIds to retain from the cluster.
   *             ElastiCache will attempt to retain all node groups listed by
   *             GlobalNodeGroupsToRetain from the cluster. </p>
   * @public
   */
  GlobalNodeGroupsToRetain?: string[] | undefined;

  /**
   * <p>Indicates that the shard reconfiguration process begins immediately. At present, the
   *             only permitted value for this parameter is true. </p>
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface DecreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
   *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
   *             primary cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
   *                     the name of the Global datastore, which is what you use to associate a secondary
   *                     cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * <p>Node group (shard) configuration options when adding or removing replicas. Each
 *             node group (shard) configuration has the following members: NodeGroupId,
 *             NewReplicaCount, and PreferredAvailabilityZones. </p>
 * @public
 */
export interface ConfigureShard {
  /**
   * <p>The 4-digit id for the node group you are configuring. For Valkey or Redis OSS (cluster mode
   *             disabled) replication groups, the node group id is always 0001. To find a Valkey or Redis OSS (cluster mode enabled)'s node group's (shard's) id, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/shard-find-id.html">Finding a Shard's
   *                 Id</a>.</p>
   * @public
   */
  NodeGroupId: string | undefined;

  /**
   * <p>The number of replicas you want in this node group at the end of this operation.
   *             The maximum value for <code>NewReplicaCount</code> is 5. The minimum value depends upon
   *             the type of Valkey or Redis OSS replication group you are working with.</p>
   *          <p>The minimum number of replicas in a shard or replication group is:</p>
   *          <ul>
   *             <li>
   *                <p>Valkey or Redis OSS (cluster mode disabled)</p>
   *                <ul>
   *                   <li>
   *                      <p>If Multi-AZ: 1</p>
   *                   </li>
   *                   <li>
   *                      <p>If Multi-AZ: 0</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS (cluster mode enabled): 0 (though you will not be able to failover to
   *                     a replica if your primary node fails)</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewReplicaCount: number | undefined;

  /**
   * <p>A list of <code>PreferredAvailabilityZone</code> strings that specify which
   *             availability zones the replication group's nodes are to be in. The nummber of
   *                 <code>PreferredAvailabilityZone</code> values must equal the value of
   *                 <code>NewReplicaCount</code> plus 1 to account for the primary node. If this member
   *             of <code>ReplicaConfiguration</code> is omitted, ElastiCache selects the
   *             availability zone for each of the replicas.</p>
   * @public
   */
  PreferredAvailabilityZones?: string[] | undefined;

  /**
   * <p>The outpost ARNs in which the cache cluster is created.</p>
   * @public
   */
  PreferredOutpostArns?: string[] | undefined;
}

/**
 * @public
 */
export interface DecreaseReplicaCountMessage {
  /**
   * <p>The id of the replication group from which you want to remove replica
   *             nodes.</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The number of read replica nodes you want at the completion of this operation. For Valkey or Redis OSS (cluster mode disabled) replication groups, this is the number of replica nodes in
   *             the replication group. For Valkey or Redis OSS (cluster mode enabled) replication groups, this is the
   *             number of replica nodes in each of the replication group's node groups.</p>
   *          <p>The minimum number of replicas in a shard or replication group is:</p>
   *          <ul>
   *             <li>
   *                <p>Valkey or Redis OSS (cluster mode disabled)</p>
   *                <ul>
   *                   <li>
   *                      <p>If Multi-AZ is enabled: 1</p>
   *                   </li>
   *                   <li>
   *                      <p>If Multi-AZ is not enabled: 0</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS (cluster mode enabled): 0 (though you will not be able to failover to
   *                     a replica if your primary node fails)</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewReplicaCount?: number | undefined;

  /**
   * <p>A list of <code>ConfigureShard</code> objects that can be used to configure each
   *             shard in a Valkey or Redis OSS (cluster mode enabled) replication group. The
   *                 <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>,
   *                 <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.</p>
   * @public
   */
  ReplicaConfiguration?: ConfigureShard[] | undefined;

  /**
   * <p>A list of the node ids to remove from the replication group or node group
   *             (shard).</p>
   * @public
   */
  ReplicasToRemove?: string[] | undefined;

  /**
   * <p>If <code>True</code>, the number of replica nodes is decreased immediately.
   *                 <code>ApplyImmediately=False</code> is not currently supported.</p>
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface DecreaseReplicaCountResult {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * <p>The operation was not performed because no changes were required.</p>
 * @public
 */
export class NoOperationFault extends __BaseException {
  readonly name: "NoOperationFault" = "NoOperationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoOperationFault, __BaseException>) {
    super({
      name: "NoOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoOperationFault.prototype);
  }
}

/**
 * <p>Represents the input of a <code>DeleteCacheCluster</code> operation.</p>
 * @public
 */
export interface DeleteCacheClusterMessage {
  /**
   * <p>The cluster identifier for the cluster to be deleted. This parameter is not case
   *             sensitive.</p>
   * @public
   */
  CacheClusterId: string | undefined;

  /**
   * <p>The user-supplied name of a final cluster snapshot. This is the unique name that
   *             identifies the snapshot. ElastiCache creates the snapshot, and then deletes the cluster
   *             immediately afterward.</p>
   * @public
   */
  FinalSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCacheClusterResult {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   * @public
   */
  CacheCluster?: CacheCluster | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteCacheParameterGroup</code> operation.</p>
 * @public
 */
export interface DeleteCacheParameterGroupMessage {
  /**
   * <p>The name of the cache parameter group to delete.</p>
   *          <note>
   *             <p>The specified cache security group must not be associated with any
   *                 clusters.</p>
   *          </note>
   * @public
   */
  CacheParameterGroupName: string | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteCacheSecurityGroup</code> operation.</p>
 * @public
 */
export interface DeleteCacheSecurityGroupMessage {
  /**
   * <p>The name of the cache security group to delete.</p>
   *          <note>
   *             <p>You cannot delete the default security group.</p>
   *          </note>
   * @public
   */
  CacheSecurityGroupName: string | undefined;
}

/**
 * <p>The requested cache subnet group is currently in use.</p>
 * @public
 */
export class CacheSubnetGroupInUse extends __BaseException {
  readonly name: "CacheSubnetGroupInUse" = "CacheSubnetGroupInUse";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetGroupInUse, __BaseException>) {
    super({
      name: "CacheSubnetGroupInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetGroupInUse.prototype);
  }
}

/**
 * <p>Represents the input of a <code>DeleteCacheSubnetGroup</code> operation.</p>
 * @public
 */
export interface DeleteCacheSubnetGroupMessage {
  /**
   * <p>The name of the cache subnet group to delete.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   * @public
   */
  CacheSubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The primary replication group is retained as a standalone replication group. </p>
   * @public
   */
  RetainPrimaryReplicationGroup: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
   *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
   *             primary cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
   *                     the name of the Global datastore, which is what you use to associate a secondary
   *                     cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteReplicationGroup</code> operation.</p>
 * @public
 */
export interface DeleteReplicationGroupMessage {
  /**
   * <p>The identifier for the cluster to be deleted. This parameter is not case
   *             sensitive.</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>If set to <code>true</code>, all of the read replicas are deleted, but the primary
   *             node is retained.</p>
   * @public
   */
  RetainPrimaryCluster?: boolean | undefined;

  /**
   * <p>The name of a final node group (shard) snapshot. ElastiCache creates the snapshot from
   *             the primary node in the cluster, rather than one of the replicas; this is to ensure that
   *             it captures the freshest data. After the final snapshot is taken, the replication group
   *             is immediately deleted.</p>
   * @public
   */
  FinalSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationGroupResult {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * @public
 */
export interface DeleteServerlessCacheRequest {
  /**
   * <p>The identifier of the serverless cache to be deleted.</p>
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * <p>Name of the final snapshot to be taken before the serverless cache is deleted.  Available for Valkey, Redis OSS and Serverless Memcached only.
   *            Default: NULL, i.e. a final snapshot is not taken.</p>
   * @public
   */
  FinalSnapshotName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteServerlessCacheResponse {
  /**
   * <p>Provides the details of the specified serverless cache that is about to be deleted.</p>
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * @public
 */
export interface DeleteServerlessCacheSnapshotRequest {
  /**
   * <p>Idenfitier of the snapshot to be deleted. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheSnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServerlessCacheSnapshotResponse {
  /**
   * <p>The snapshot to be deleted. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteSnapshot</code> operation.</p>
 * @public
 */
export interface DeleteSnapshotMessage {
  /**
   * <p>The name of the snapshot to be deleted.</p>
   * @public
   */
  SnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResult {
  /**
   * <p>Represents a copy of an entire Valkey or Redis OSS cluster as of the time when the snapshot was
   *             taken.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * <p>The default user assigned to the user group.</p>
 * @public
 */
export class DefaultUserAssociatedToUserGroupFault extends __BaseException {
  readonly name: "DefaultUserAssociatedToUserGroupFault" = "DefaultUserAssociatedToUserGroupFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DefaultUserAssociatedToUserGroupFault, __BaseException>) {
    super({
      name: "DefaultUserAssociatedToUserGroupFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DefaultUserAssociatedToUserGroupFault.prototype);
  }
}

/**
 * @public
 */
export interface DeleteUserMessage {
  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * <p>The user is not in active state.</p>
 * @public
 */
export class InvalidUserStateFault extends __BaseException {
  readonly name: "InvalidUserStateFault" = "InvalidUserStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserStateFault, __BaseException>) {
    super({
      name: "InvalidUserStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserStateFault.prototype);
  }
}

/**
 * @public
 */
export interface DeleteUserGroupMessage {
  /**
   * <p>The ID of the user group.</p>
   * @public
   */
  UserGroupId: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeCacheClusters</code> operation.</p>
 * @public
 */
export interface CacheClusterMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of clusters. Each item in the list contains detailed information about one
   *             cluster.</p>
   * @public
   */
  CacheClusters?: CacheCluster[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeCacheClusters</code> operation.</p>
 * @public
 */
export interface DescribeCacheClustersMessage {
  /**
   * <p>The user-supplied cluster identifier. If this parameter is specified, only information
   *             about that specific cluster is returned. This parameter isn't case sensitive.</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An optional flag that can be included in the <code>DescribeCacheCluster</code> request
   *             to retrieve information about the individual cache nodes.</p>
   * @public
   */
  ShowCacheNodeInfo?: boolean | undefined;

  /**
   * <p>An optional flag that can be included in the <code>DescribeCacheCluster</code> request
   *             to show only nodes (API/CLI: clusters) that are not members of a replication group. In
   *             practice, this means Memcached and single node Valkey or Redis OSS clusters.</p>
   * @public
   */
  ShowCacheClustersNotInReplicationGroups?: boolean | undefined;
}

/**
 * <p>Provides all of the details about a particular cache engine version.</p>
 * @public
 */
export interface CacheEngineVersion {
  /**
   * <p>The name of the cache engine.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version number of the cache engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of the cache parameter group family associated with this cache engine.</p>
   *          <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> |
   *                 <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> |
   *                 <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> |
   *                 <code>redis6.x</code> | <code>redis7</code>
   *          </p>
   * @public
   */
  CacheParameterGroupFamily?: string | undefined;

  /**
   * <p>The description of the cache engine.</p>
   * @public
   */
  CacheEngineDescription?: string | undefined;

  /**
   * <p>The description of the cache engine version.</p>
   * @public
   */
  CacheEngineVersionDescription?: string | undefined;
}

/**
 * <p>Represents the output of a <a>DescribeCacheEngineVersions</a>
 *             operation.</p>
 * @public
 */
export interface CacheEngineVersionMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of cache engine version details. Each element in the list contains detailed
   *             information about one cache engine version.</p>
   * @public
   */
  CacheEngineVersions?: CacheEngineVersion[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeCacheEngineVersions</code> operation.</p>
 * @public
 */
export interface DescribeCacheEngineVersionsMessage {
  /**
   * <p>The cache engine to return. Valid values: <code>memcached</code> |
   *             <code>redis</code>
   *          </p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The cache engine version to return.</p>
   *          <p>Example: <code>1.4.14</code>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of a specific cache parameter group family to return details for.</p>
   *          <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> |
   *                 <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> |
   *                 <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> |
   *                 <code>redis6.x</code> | <code>redis6.2</code> | <code>redis7</code> | <code>valkey7</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
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
   * @public
   */
  CacheParameterGroupFamily?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>If <code>true</code>, specifies that only the default version of the specified engine
   *             or engine and major version combination is to be returned.</p>
   * @public
   */
  DefaultOnly?: boolean | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeCacheParameterGroups</code> operation.</p>
 * @public
 */
export interface CacheParameterGroupsMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of cache parameter groups. Each element in the list contains detailed
   *             information about one cache parameter group.</p>
   * @public
   */
  CacheParameterGroups?: CacheParameterGroup[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeCacheParameterGroups</code> operation.</p>
 * @public
 */
export interface DescribeCacheParameterGroupsMessage {
  /**
   * <p>The name of a specific cache parameter group to return details for.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>A value that applies only to a certain cache node type.</p>
 * @public
 */
export interface CacheNodeTypeSpecificValue {
  /**
   * <p>The cache node type for which this value applies.</p>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The value for the cache node type.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChangeType = {
  immediate: "immediate",
  requires_reboot: "requires-reboot",
} as const;

/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * <p>A parameter that has a different value for each cache node type it is applied to. For
 *             example, in a Valkey or Redis OSS cluster, a <code>cache.m1.large</code> cache node type would have a
 *             larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.</p>
 * @public
 */
export interface CacheNodeTypeSpecificParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>A description of the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The source of the parameter value.</p>
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
   * <p>Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be
   *             modified. Some parameters have security or operational implications that prevent them
   *             from being changed.</p>
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * <p>The earliest cache engine version to which the parameter can apply.</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * <p>A list of cache node types and their corresponding values for this parameter.</p>
   * @public
   */
  CacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValue[] | undefined;

  /**
   * <p>Indicates whether a change to the parameter is applied immediately or requires a
   *             reboot for the change to be applied. You can force a reboot or wait until the next
   *             maintenance window's reboot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a
   *                 Cluster</a>.</p>
   * @public
   */
  ChangeType?: ChangeType | undefined;
}

/**
 * <p>Describes an individual setting that controls some aspect of ElastiCache
 *             behavior.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * <p>A description of the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The source of the parameter.</p>
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
   * <p>Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be
   *             modified. Some parameters have security or operational implications that prevent them
   *             from being changed.</p>
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * <p>The earliest cache engine version to which the parameter can apply.</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * <p>Indicates whether a change to the parameter is applied immediately or requires a
   *             reboot for the change to be applied. You can force a reboot or wait until the next
   *             maintenance window's reboot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a
   *                 Cluster</a>.</p>
   * @public
   */
  ChangeType?: ChangeType | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeCacheParameters</code> operation.</p>
 * @public
 */
export interface CacheParameterGroupDetails {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>Parameter</a> instances.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>A list of parameters specific to a particular cache node type. Each element in the
   *             list contains detailed information about one parameter.</p>
   * @public
   */
  CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeCacheParameters</code> operation.</p>
 * @public
 */
export interface DescribeCacheParametersMessage {
  /**
   * <p>The name of a specific cache parameter group to return details for.</p>
   * @public
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return.</p>
   *          <p>Valid values: <code>user</code> | <code>system</code> |
   *             <code>engine-default</code>
   *          </p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.</p>
 * @public
 */
export interface CacheSecurityGroupMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of cache security groups. Each element in the list contains detailed
   *             information about one group.</p>
   * @public
   */
  CacheSecurityGroups?: CacheSecurityGroup[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeCacheSecurityGroups</code> operation.</p>
 * @public
 */
export interface DescribeCacheSecurityGroupsMessage {
  /**
   * <p>The name of the cache security group to return details for.</p>
   * @public
   */
  CacheSecurityGroupName?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.</p>
 * @public
 */
export interface CacheSubnetGroupMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of cache subnet groups. Each element in the list contains detailed information
   *             about one group.</p>
   * @public
   */
  CacheSubnetGroups?: CacheSubnetGroup[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeCacheSubnetGroups</code> operation.</p>
 * @public
 */
export interface DescribeCacheSubnetGroupsMessage {
  /**
   * <p>The name of the cache subnet group to return details for.</p>
   * @public
   */
  CacheSubnetGroupName?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeEngineDefaultParameters</code>
 *             operation.</p>
 * @public
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * <p>The name of the cache parameter group family.</p>
   *          <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> |
   *                 <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> |
   *                 <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> |
   *                 <code>redis6.x</code> | <code>redis6.2</code> | <code>redis7</code>
   *          </p>
   * @public
   */
  CacheParameterGroupFamily: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeEngineDefaultParameters</code>
 *             operation.</p>
 * @public
 */
export interface EngineDefaults {
  /**
   * <p>Specifies the name of the cache parameter group family to which the engine default
   *             parameters apply.</p>
   *          <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> |
   *                 <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> |
   *                 <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> |
   *                 <code>redis6.0</code> | <code>redis6.x</code> | <code>redis7</code>
   *          </p>
   * @public
   */
  CacheParameterGroupFamily?: string | undefined;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Contains a list of engine default parameters.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>A list of parameters specific to a particular cache node type. Each element in the
   *             list contains detailed information about one parameter.</p>
   * @public
   */
  CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultParametersResult {
  /**
   * <p>Represents the output of a <code>DescribeEngineDefaultParameters</code>
   *             operation.</p>
   * @public
   */
  EngineDefaults?: EngineDefaults | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  cache_cluster: "cache-cluster",
  cache_parameter_group: "cache-parameter-group",
  cache_security_group: "cache-security-group",
  cache_subnet_group: "cache-subnet-group",
  replication_group: "replication-group",
  serverless_cache: "serverless-cache",
  serverless_cache_snapshot: "serverless-cache-snapshot",
  user: "user",
  user_group: "user-group",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * <p>Represents the input of a <code>DescribeEvents</code> operation.</p>
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified,
   *             all sources are included in the response.</p>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format.</p>
   *          <p>
   *             <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format.</p>
   *          <p>
   *             <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The number of minutes worth of events to retrieve.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents a single occurrence of something interesting within the system. Some
 *             examples of events are creating a cluster, adding or removing a cache node, or rebooting
 *             a node.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The identifier for the source of the event. For example, if the event occurred at the
   *             cluster level, the identifier would be the name of the cluster.</p>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>Specifies the origin of this event - a cluster, a parameter group, a security group,
   *             etc.</p>
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
 * <p>Represents the output of a <code>DescribeEvents</code> operation.</p>
 * @public
 */
export interface EventsMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of events. Each element in the list contains detailed information about one
   *             event.</p>
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalReplicationGroupsMessage {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified MaxRecords value, a marker is included in the response so that the
   *             remaining results can be retrieved. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Returns the list of members that comprise the Global datastore.</p>
   * @public
   */
  ShowMemberInfo?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalReplicationGroupsResult {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by MaxRecords. ></p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Indicates the slot configuration and global identifier for each slice group.</p>
   * @public
   */
  GlobalReplicationGroups?: GlobalReplicationGroup[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeReplicationGroups</code> operation.</p>
 * @public
 */
export interface DescribeReplicationGroupsMessage {
  /**
   * <p>The identifier for the replication group to be described. This parameter is not case
   *             sensitive.</p>
   *          <p>If you do not specify this parameter, information about all replication groups is
   *             returned.</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeReplicationGroups</code> operation.</p>
 * @public
 */
export interface ReplicationGroupMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of replication groups. Each item in the list contains detailed information
   *             about one replication group.</p>
   * @public
   */
  ReplicationGroups?: ReplicationGroup[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeReservedCacheNodes</code> operation.</p>
 * @public
 */
export interface DescribeReservedCacheNodesMessage {
  /**
   * <p>The reserved cache node identifier filter value. Use this parameter to show only the
   *             reservation that matches the specified reservation ID.</p>
   * @public
   */
  ReservedCacheNodeId?: string | undefined;

  /**
   * <p>The offering identifier filter value. Use this parameter to show only purchased
   *             reservations matching the specified offering identifier.</p>
   * @public
   */
  ReservedCacheNodesOfferingId?: string | undefined;

  /**
   * <p>The cache node type filter value. Use this parameter to show only those reservations
   *             matching the specified cache node type.</p>
   *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
   *             generation types provide more memory and computational power at lower cost when compared
   *             to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M7g node types</b>:
   *     					<code>cache.m7g.large</code>,
   *     					<code>cache.m7g.xlarge</code>,
   *     					<code>cache.m7g.2xlarge</code>,
   *     					<code>cache.m7g.4xlarge</code>,
   *     					<code>cache.m7g.8xlarge</code>,
   *     					<code>cache.m7g.12xlarge</code>,
   *     					<code>cache.m7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M5 node types:</b>
   *                         <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M4 node types:</b>
   *                         <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
   * 					        <code>cache.t4g.micro</code>,
   * 					        <code>cache.t4g.small</code>,
   * 					        <code>cache.t4g.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T3 node types:</b>
   *                         <code>cache.t3.micro</code>,
   *     						<code>cache.t3.small</code>,
   *     						<code>cache.t3.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T2 node types:</b>
   *                         <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>T1 node types:</b>
   *                         <code>cache.t1.micro</code>
   *                      </p>
   *                      <p>
   *                         <b>M1 node types:</b>
   *                         <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M3 node types:</b>
   *                         <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>C1 node types:</b>
   *                         <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>R7g node types</b>:
   * 							<code>cache.r7g.large</code>,
   * 							<code>cache.r7g.xlarge</code>,
   * 							<code>cache.r7g.2xlarge</code>,
   * 							<code>cache.r7g.4xlarge</code>,
   * 							<code>cache.r7g.8xlarge</code>,
   * 							<code>cache.r7g.12xlarge</code>,
   * 							<code>cache.r7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   * 							<code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R5 node types:</b>
   *                         <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R4 node types:</b>
   *                         <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>M2 node types:</b>
   *                         <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R3 node types:</b>
   *                         <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Additional node type info</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>The configuration variables <code>appendonly</code> and
   *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
   *                     later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The duration filter value, specified in years or seconds. Use this parameter to show
   *             only reservations for this duration.</p>
   *          <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   * @public
   */
  Duration?: string | undefined;

  /**
   * <p>The product description filter value. Use this parameter to show only those
   *             reservations matching the specified product description.</p>
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * <p>The offering type filter value. Use this parameter to show only the available
   *             offerings matching the specified offering type.</p>
   *          <p>Valid values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization"|"All
   *                 Upfront"|"Partial Upfront"| "No Upfront"</code>
   *          </p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains the specific price and frequency of a recurring charges for a reserved cache
 *             node, or for a reserved cache node offering.</p>
 * @public
 */
export interface RecurringCharge {
  /**
   * <p>The monetary amount of the recurring charge.</p>
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * <p>The frequency of the recurring charge.</p>
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * <p>Represents the output of a <code>PurchaseReservedCacheNodesOffering</code>
 *             operation.</p>
 * @public
 */
export interface ReservedCacheNode {
  /**
   * <p>The unique identifier for the reservation.</p>
   * @public
   */
  ReservedCacheNodeId?: string | undefined;

  /**
   * <p>The offering identifier.</p>
   * @public
   */
  ReservedCacheNodesOfferingId?: string | undefined;

  /**
   * <p>The cache node type for the reserved cache nodes.</p>
   *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
   *             generation types provide more memory and computational power at lower cost when compared
   *             to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M7g node types</b>:
   *     					<code>cache.m7g.large</code>,
   *     					<code>cache.m7g.xlarge</code>,
   *     					<code>cache.m7g.2xlarge</code>,
   *     					<code>cache.m7g.4xlarge</code>,
   *     					<code>cache.m7g.8xlarge</code>,
   *     					<code>cache.m7g.12xlarge</code>,
   *     					<code>cache.m7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M5 node types:</b>
   *                         <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M4 node types:</b>
   *                         <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
   * 					        <code>cache.t4g.micro</code>,
   * 					        <code>cache.t4g.small</code>,
   * 					        <code>cache.t4g.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T3 node types:</b>
   *                         <code>cache.t3.micro</code>,
   *     						<code>cache.t3.small</code>,
   *     						<code>cache.t3.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T2 node types:</b>
   *                         <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>T1 node types:</b>
   *                         <code>cache.t1.micro</code>
   *                      </p>
   *                      <p>
   *                         <b>M1 node types:</b>
   *                         <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M3 node types:</b>
   *                         <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>C1 node types:</b>
   *                         <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>R7g node types</b>:
   * 							<code>cache.r7g.large</code>,
   * 							<code>cache.r7g.xlarge</code>,
   * 							<code>cache.r7g.2xlarge</code>,
   * 							<code>cache.r7g.4xlarge</code>,
   * 							<code>cache.r7g.8xlarge</code>,
   * 							<code>cache.r7g.12xlarge</code>,
   * 							<code>cache.r7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   * 							<code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R5 node types:</b>
   *                         <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R4 node types:</b>
   *                         <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>M2 node types:</b>
   *                         <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R3 node types:</b>
   *                         <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Additional node type info</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>The configuration variables <code>appendonly</code> and
   *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
   *                     later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheNodeType?: string | undefined;

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
   * <p>The fixed price charged for this reserved cache node.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The hourly price charged for this reserved cache node.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The number of cache nodes that have been reserved.</p>
   * @public
   */
  CacheNodeCount?: number | undefined;

  /**
   * <p>The description of the reserved cache node.</p>
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * <p>The offering type of this reserved cache node.</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The state of the reserved cache node.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The recurring price charged to run this reserved cache node.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the reserved cache node.</p>
   *          <p>Example:
   *                 <code>arn:aws:elasticache:us-east-1:123456789012:reserved-instance:ri-2017-03-27-08-33-25-582</code>
   *          </p>
   * @public
   */
  ReservationARN?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeReservedCacheNodes</code> operation.</p>
 * @public
 */
export interface ReservedCacheNodeMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of reserved cache nodes. Each element in the list contains detailed information
   *             about one node.</p>
   * @public
   */
  ReservedCacheNodes?: ReservedCacheNode[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeReservedCacheNodesOfferings</code>
 *             operation.</p>
 * @public
 */
export interface DescribeReservedCacheNodesOfferingsMessage {
  /**
   * <p>The offering identifier filter value. Use this parameter to show only the available
   *             offering that matches the specified reservation identifier.</p>
   *          <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   * @public
   */
  ReservedCacheNodesOfferingId?: string | undefined;

  /**
   * <p>The cache node type filter value. Use this parameter to show only the available
   *             offerings matching the specified cache node type.</p>
   *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
   *             generation types provide more memory and computational power at lower cost when compared
   *             to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M7g node types</b>:
   *     					<code>cache.m7g.large</code>,
   *     					<code>cache.m7g.xlarge</code>,
   *     					<code>cache.m7g.2xlarge</code>,
   *     					<code>cache.m7g.4xlarge</code>,
   *     					<code>cache.m7g.8xlarge</code>,
   *     					<code>cache.m7g.12xlarge</code>,
   *     					<code>cache.m7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M5 node types:</b>
   *                         <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M4 node types:</b>
   *                         <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
   * 					        <code>cache.t4g.micro</code>,
   * 					        <code>cache.t4g.small</code>,
   * 					        <code>cache.t4g.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T3 node types:</b>
   *                         <code>cache.t3.micro</code>,
   *     						<code>cache.t3.small</code>,
   *     						<code>cache.t3.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T2 node types:</b>
   *                         <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>T1 node types:</b>
   *                         <code>cache.t1.micro</code>
   *                      </p>
   *                      <p>
   *                         <b>M1 node types:</b>
   *                         <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M3 node types:</b>
   *                         <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>C1 node types:</b>
   *                         <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>R7g node types</b>:
   * 							<code>cache.r7g.large</code>,
   * 							<code>cache.r7g.xlarge</code>,
   * 							<code>cache.r7g.2xlarge</code>,
   * 							<code>cache.r7g.4xlarge</code>,
   * 							<code>cache.r7g.8xlarge</code>,
   * 							<code>cache.r7g.12xlarge</code>,
   * 							<code>cache.r7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   * 							<code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R5 node types:</b>
   *                         <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R4 node types:</b>
   *                         <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>M2 node types:</b>
   *                         <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R3 node types:</b>
   *                         <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Additional node type info</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>The configuration variables <code>appendonly</code> and
   *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
   *                     later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>Duration filter value, specified in years or seconds. Use this parameter to show only
   *             reservations for a given duration.</p>
   *          <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   * @public
   */
  Duration?: string | undefined;

  /**
   * <p>The product description filter value. Use this parameter to show only the available
   *             offerings matching the specified product description.</p>
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * <p>The offering type filter value. Use this parameter to show only the available
   *             offerings matching the specified offering type.</p>
   *          <p>Valid Values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization" |"All
   *                 Upfront"|"Partial Upfront"| "No Upfront"</code>
   *          </p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes all of the attributes of a reserved cache node offering.</p>
 * @public
 */
export interface ReservedCacheNodesOffering {
  /**
   * <p>A unique identifier for the reserved cache node offering.</p>
   * @public
   */
  ReservedCacheNodesOfferingId?: string | undefined;

  /**
   * <p>The cache node type for the reserved cache node.</p>
   *          <p>The following node types are supported by ElastiCache. Generally speaking, the current
   *             generation types provide more memory and computational power at lower cost when compared
   *             to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M7g node types</b>:
   *     					<code>cache.m7g.large</code>,
   *     					<code>cache.m7g.xlarge</code>,
   *     					<code>cache.m7g.2xlarge</code>,
   *     					<code>cache.m7g.4xlarge</code>,
   *     					<code>cache.m7g.8xlarge</code>,
   *     					<code>cache.m7g.12xlarge</code>,
   *     					<code>cache.m7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M5 node types:</b>
   *                         <code>cache.m5.large</code>,
   *     						<code>cache.m5.xlarge</code>,
   *     						<code>cache.m5.2xlarge</code>,
   *     						<code>cache.m5.4xlarge</code>,
   *     						<code>cache.m5.12xlarge</code>,
   *     						<code>cache.m5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M4 node types:</b>
   *                         <code>cache.m4.large</code>,
   *     						<code>cache.m4.xlarge</code>,
   *     						<code>cache.m4.2xlarge</code>,
   *     						<code>cache.m4.4xlarge</code>,
   *     						<code>cache.m4.10xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>T4g node types</b> (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
   * 					        <code>cache.t4g.micro</code>,
   * 					        <code>cache.t4g.small</code>,
   * 					        <code>cache.t4g.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T3 node types:</b>
   *                         <code>cache.t3.micro</code>,
   *     						<code>cache.t3.small</code>,
   *     						<code>cache.t3.medium</code>
   *                      </p>
   *                      <p>
   *                         <b>T2 node types:</b>
   *                         <code>cache.t2.micro</code>,
   *     						<code>cache.t2.small</code>,
   *     						<code>cache.t2.medium</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>T1 node types:</b>
   *                         <code>cache.t1.micro</code>
   *                      </p>
   *                      <p>
   *                         <b>M1 node types:</b>
   *                         <code>cache.m1.small</code>,
   * 						   <code>cache.m1.medium</code>,
   * 						   <code>cache.m1.large</code>,
   * 						   <code>cache.m1.xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>M3 node types:</b>
   *                         <code>cache.m3.medium</code>,
   *     						<code>cache.m3.large</code>,
   *     						<code>cache.m3.xlarge</code>,
   *     						<code>cache.m3.2xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compute optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>C1 node types:</b>
   *                         <code>cache.c1.xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Memory optimized:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>R7g node types</b>:
   * 							<code>cache.r7g.large</code>,
   * 							<code>cache.r7g.xlarge</code>,
   * 							<code>cache.r7g.2xlarge</code>,
   * 							<code>cache.r7g.4xlarge</code>,
   * 							<code>cache.r7g.8xlarge</code>,
   * 							<code>cache.r7g.12xlarge</code>,
   * 							<code>cache.r7g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
   *                      <p>
   *                         <b>R6g node types</b> (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   * 							<code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R5 node types:</b>
   *                         <code>cache.r5.large</code>,
   *     					   <code>cache.r5.xlarge</code>,
   *     					   <code>cache.r5.2xlarge</code>,
   *     					   <code>cache.r5.4xlarge</code>,
   *     					   <code>cache.r5.12xlarge</code>,
   *     					   <code>cache.r5.24xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R4 node types:</b>
   *                         <code>cache.r4.large</code>,
   *     					   <code>cache.r4.xlarge</code>,
   *     					   <code>cache.r4.2xlarge</code>,
   *     					   <code>cache.r4.4xlarge</code>,
   *     					   <code>cache.r4.8xlarge</code>,
   *     					   <code>cache.r4.16xlarge</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.)</p>
   *                      <p>
   *                         <b>M2 node types:</b>
   *                         <code>cache.m2.xlarge</code>,
   *     						<code>cache.m2.2xlarge</code>,
   *     						<code>cache.m2.4xlarge</code>
   *                      </p>
   *                      <p>
   *                         <b>R3 node types:</b>
   *                         <code>cache.r3.large</code>,
   *     						<code>cache.r3.xlarge</code>,
   *     						<code>cache.r3.2xlarge</code>,
   *     						<code>cache.r3.4xlarge</code>,
   *     						<code>cache.r3.8xlarge</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Additional node type info</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>All current generation instance types are created in Amazon VPC by
   *                     default.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.</p>
   *             </li>
   *             <li>
   *                <p>Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>The configuration variables <code>appendonly</code> and
   *                         <code>appendfsync</code> are not supported on Valkey, or on Redis OSS version 2.8.22 and
   *                     later.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>The duration of the offering. in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The fixed price charged for this offering.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The hourly price charged for this offering.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The cache engine used by the offering.</p>
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * <p>The offering type.</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The recurring price charged to run this reserved cache node.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeReservedCacheNodesOfferings</code>
 *             operation.</p>
 * @public
 */
export interface ReservedCacheNodesOfferingMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of reserved cache node offerings. Each element in the list contains detailed
   *             information about one offering.</p>
   * @public
   */
  ReservedCacheNodesOfferings?: ReservedCacheNodesOffering[] | undefined;
}

/**
 * <p>The requested cache node offering does not exist.</p>
 * @public
 */
export class ReservedCacheNodesOfferingNotFoundFault extends __BaseException {
  readonly name: "ReservedCacheNodesOfferingNotFoundFault" = "ReservedCacheNodesOfferingNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedCacheNodesOfferingNotFoundFault, __BaseException>) {
    super({
      name: "ReservedCacheNodesOfferingNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedCacheNodesOfferingNotFoundFault.prototype);
  }
}

/**
 * @public
 */
export interface DescribeServerlessCachesRequest {
  /**
   * <p>The identifier for the serverless cache. If this parameter is specified,
   *            only information about that specific serverless cache is returned. Default: NULL</p>
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * <p>The maximum number of records in the response. If more records exist than the specified max-records value,
   *            the next token is included in the response so that remaining results can be retrieved.
   *            The default is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request to support pagination of results from this operation.
   *            If this parameter is specified, the response includes only records beyond the marker,
   *            up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServerlessCachesResponse {
  /**
   * <p>An optional marker returned from a prior request to support pagination of results from this operation.
   *            If this parameter is specified, the response includes only records beyond the marker,
   *            up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The serverless caches associated with a given description request.</p>
   * @public
   */
  ServerlessCaches?: ServerlessCache[] | undefined;
}

/**
 * @public
 */
export interface DescribeServerlessCacheSnapshotsRequest {
  /**
   * <p>The identifier of serverless cache. If this parameter is specified,
   *            only snapshots associated with that specific serverless cache are described. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheName?: string | undefined;

  /**
   * <p>The identifier of the serverless cache’s snapshot.
   *            If this parameter is specified, only this snapshot is described. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheSnapshotName?: string | undefined;

  /**
   * <p>The type of snapshot that is being described. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>An optional marker returned from a prior request to support pagination of results from this operation.
   *            If this parameter is specified, the response includes only records beyond the marker,
   *            up to the value specified by max-results. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *            the specified max-results value, a market is included in the response so that remaining results
   *            can be retrieved. Available for Valkey, Redis OSS and Serverless Memcached only.The default is 50. The Validation Constraints are a maximum of 50.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeServerlessCacheSnapshotsResponse {
  /**
   * <p>An optional marker returned from a prior request to support pagination of results from this operation.
   *            If this parameter is specified, the response includes only records beyond the marker,
   *            up to the value specified by max-results. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The serverless caches snapshots associated with a given description request. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheSnapshots?: ServerlessCacheSnapshot[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceUpdateStatus = {
  AVAILABLE: "available",
  CANCELLED: "cancelled",
  EXPIRED: "expired",
} as const;

/**
 * @public
 */
export type ServiceUpdateStatus = (typeof ServiceUpdateStatus)[keyof typeof ServiceUpdateStatus];

/**
 * @public
 */
export interface DescribeServiceUpdatesMessage {
  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The status of the service update</p>
   * @public
   */
  ServiceUpdateStatus?: ServiceUpdateStatus[] | undefined;

  /**
   * <p>The maximum number of records to include in the response</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceUpdateSeverity = {
  CRITICAL: "critical",
  IMPORTANT: "important",
  LOW: "low",
  MEDIUM: "medium",
} as const;

/**
 * @public
 */
export type ServiceUpdateSeverity = (typeof ServiceUpdateSeverity)[keyof typeof ServiceUpdateSeverity];

/**
 * @public
 * @enum
 */
export const ServiceUpdateType = {
  SECURITY_UPDATE: "security-update",
} as const;

/**
 * @public
 */
export type ServiceUpdateType = (typeof ServiceUpdateType)[keyof typeof ServiceUpdateType];

/**
 * <p>An update that you can apply to your Valkey or Redis OSS clusters.</p>
 * @public
 */
export interface ServiceUpdate {
  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The date when the service update is initially available</p>
   * @public
   */
  ServiceUpdateReleaseDate?: Date | undefined;

  /**
   * <p>The date after which the service update is no longer available</p>
   * @public
   */
  ServiceUpdateEndDate?: Date | undefined;

  /**
   * <p>The severity of the service update</p>
   * @public
   */
  ServiceUpdateSeverity?: ServiceUpdateSeverity | undefined;

  /**
   * <p>The recommendend date to apply the service update in order to ensure compliance. For
   *             information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   * @public
   */
  ServiceUpdateRecommendedApplyByDate?: Date | undefined;

  /**
   * <p>The status of the service update</p>
   * @public
   */
  ServiceUpdateStatus?: ServiceUpdateStatus | undefined;

  /**
   * <p>Provides details of the service update</p>
   * @public
   */
  ServiceUpdateDescription?: string | undefined;

  /**
   * <p>Reflects the nature of the service update</p>
   * @public
   */
  ServiceUpdateType?: ServiceUpdateType | undefined;

  /**
   * <p>The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The Elasticache engine version to which the update applies. Either Valkey, Redis OSS or Memcached
   *             engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Indicates whether the service update will be automatically applied once the
   *             recommended apply-by date has expired. </p>
   * @public
   */
  AutoUpdateAfterRecommendedApplyByDate?: boolean | undefined;

  /**
   * <p>The estimated length of time the service update will take</p>
   * @public
   */
  EstimatedUpdateTime?: string | undefined;
}

/**
 * @public
 */
export interface ServiceUpdatesMessage {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of service updates</p>
   * @public
   */
  ServiceUpdates?: ServiceUpdate[] | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeSnapshots</code> operation.</p>
 * @public
 */
export interface DescribeSnapshotsListMessage {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of snapshots. Each item in the list contains detailed information about one
   *             snapshot.</p>
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeSnapshotsMessage</code> operation.</p>
 * @public
 */
export interface DescribeSnapshotsMessage {
  /**
   * <p>A user-supplied replication group identifier. If this parameter is specified, only
   *             snapshots associated with that specific replication group are described.</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>A user-supplied cluster identifier. If this parameter is specified, only snapshots
   *             associated with that specific cluster are described.</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>A user-supplied name of the snapshot. If this parameter is specified, only this
   *             snapshot are described.</p>
   * @public
   */
  SnapshotName?: string | undefined;

  /**
   * <p>If set to <code>system</code>, the output shows snapshots that were automatically
   *             created by ElastiCache. If set to <code>user</code> the output shows snapshots that were
   *             manually created. If omitted, the output shows both automatically and manually created
   *             snapshots.</p>
   * @public
   */
  SnapshotSource?: string | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, a marker is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>Default: 50</p>
   *          <p>Constraints: minimum 20; maximum 50.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A Boolean value which if true, the node group (shard) configuration is included in the
   *             snapshot description.</p>
   * @public
   */
  ShowNodeGroupConfig?: boolean | undefined;
}

/**
 * <p>Filters update actions from the service updates that are in available status during
 *             the time range.</p>
 * @public
 */
export interface TimeRangeFilter {
  /**
   * <p>The start time of the time range filter</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the time range filter</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeUpdateActionsMessage {
  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The replication group IDs</p>
   * @public
   */
  ReplicationGroupIds?: string[] | undefined;

  /**
   * <p>The cache cluster IDs</p>
   * @public
   */
  CacheClusterIds?: string[] | undefined;

  /**
   * <p>The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The status of the service update</p>
   * @public
   */
  ServiceUpdateStatus?: ServiceUpdateStatus[] | undefined;

  /**
   * <p>The range of time specified to search for service updates that are in available
   *             status</p>
   * @public
   */
  ServiceUpdateTimeRange?: TimeRangeFilter | undefined;

  /**
   * <p>The status of the update action.</p>
   * @public
   */
  UpdateActionStatus?: UpdateActionStatus[] | undefined;

  /**
   * <p>Dictates whether to include node level update status in the response </p>
   * @public
   */
  ShowNodeLevelUpdateStatus?: boolean | undefined;

  /**
   * <p>The maximum number of records to include in the response</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NodeUpdateInitiatedBy = {
  CUSTOMER: "customer",
  SYSTEM: "system",
} as const;

/**
 * @public
 */
export type NodeUpdateInitiatedBy = (typeof NodeUpdateInitiatedBy)[keyof typeof NodeUpdateInitiatedBy];

/**
 * @public
 * @enum
 */
export const NodeUpdateStatus = {
  COMPLETE: "complete",
  IN_PROGRESS: "in-progress",
  NOT_APPLIED: "not-applied",
  STOPPED: "stopped",
  STOPPING: "stopping",
  WAITING_TO_START: "waiting-to-start",
} as const;

/**
 * @public
 */
export type NodeUpdateStatus = (typeof NodeUpdateStatus)[keyof typeof NodeUpdateStatus];

/**
 * <p>The status of the service update on the cache node</p>
 * @public
 */
export interface CacheNodeUpdateStatus {
  /**
   * <p>The node ID of the cache cluster</p>
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * <p>The update status of the node</p>
   * @public
   */
  NodeUpdateStatus?: NodeUpdateStatus | undefined;

  /**
   * <p>The deletion date of the node</p>
   * @public
   */
  NodeDeletionDate?: Date | undefined;

  /**
   * <p>The start date of the update for a node</p>
   * @public
   */
  NodeUpdateStartDate?: Date | undefined;

  /**
   * <p>The end date of the update for a node</p>
   * @public
   */
  NodeUpdateEndDate?: Date | undefined;

  /**
   * <p>Reflects whether the update was initiated by the customer or automatically
   *             applied</p>
   * @public
   */
  NodeUpdateInitiatedBy?: NodeUpdateInitiatedBy | undefined;

  /**
   * <p>The date when the update is triggered</p>
   * @public
   */
  NodeUpdateInitiatedDate?: Date | undefined;

  /**
   * <p>The date when the NodeUpdateStatus was last modified></p>
   * @public
   */
  NodeUpdateStatusModifiedDate?: Date | undefined;
}

/**
 * <p>The status of the service update on the node group member </p>
 * @public
 */
export interface NodeGroupMemberUpdateStatus {
  /**
   * <p>The cache cluster ID</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>The node ID of the cache cluster</p>
   * @public
   */
  CacheNodeId?: string | undefined;

  /**
   * <p>The update status of the node</p>
   * @public
   */
  NodeUpdateStatus?: NodeUpdateStatus | undefined;

  /**
   * <p>The deletion date of the node</p>
   * @public
   */
  NodeDeletionDate?: Date | undefined;

  /**
   * <p>The start date of the update for a node</p>
   * @public
   */
  NodeUpdateStartDate?: Date | undefined;

  /**
   * <p>The end date of the update for a node</p>
   * @public
   */
  NodeUpdateEndDate?: Date | undefined;

  /**
   * <p>Reflects whether the update was initiated by the customer or automatically
   *             applied</p>
   * @public
   */
  NodeUpdateInitiatedBy?: NodeUpdateInitiatedBy | undefined;

  /**
   * <p>The date when the update is triggered</p>
   * @public
   */
  NodeUpdateInitiatedDate?: Date | undefined;

  /**
   * <p>The date when the NodeUpdateStatus was last modified</p>
   * @public
   */
  NodeUpdateStatusModifiedDate?: Date | undefined;
}

/**
 * <p>The status of the service update on the node group </p>
 * @public
 */
export interface NodeGroupUpdateStatus {
  /**
   * <p>The ID of the node group</p>
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * <p>The status of the service update on the node group member</p>
   * @public
   */
  NodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatus[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SlaMet = {
  NA: "n/a",
  NO: "no",
  YES: "yes",
} as const;

/**
 * @public
 */
export type SlaMet = (typeof SlaMet)[keyof typeof SlaMet];

/**
 * <p>The status of the service update for a specific replication group</p>
 * @public
 */
export interface UpdateAction {
  /**
   * <p>The ID of the replication group</p>
   * @public
   */
  ReplicationGroupId?: string | undefined;

  /**
   * <p>The ID of the cache cluster</p>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string | undefined;

  /**
   * <p>The date the update is first available</p>
   * @public
   */
  ServiceUpdateReleaseDate?: Date | undefined;

  /**
   * <p>The severity of the service update</p>
   * @public
   */
  ServiceUpdateSeverity?: ServiceUpdateSeverity | undefined;

  /**
   * <p>The status of the service update</p>
   * @public
   */
  ServiceUpdateStatus?: ServiceUpdateStatus | undefined;

  /**
   * <p>The recommended date to apply the service update to ensure compliance. For information
   *             on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   * @public
   */
  ServiceUpdateRecommendedApplyByDate?: Date | undefined;

  /**
   * <p>Reflects the nature of the service update </p>
   * @public
   */
  ServiceUpdateType?: ServiceUpdateType | undefined;

  /**
   * <p>The date that the service update is available to a replication group</p>
   * @public
   */
  UpdateActionAvailableDate?: Date | undefined;

  /**
   * <p>The status of the update action</p>
   * @public
   */
  UpdateActionStatus?: UpdateActionStatus | undefined;

  /**
   * <p>The progress of the service update on the replication group</p>
   * @public
   */
  NodesUpdated?: string | undefined;

  /**
   * <p>The date when the UpdateActionStatus was last modified</p>
   * @public
   */
  UpdateActionStatusModifiedDate?: Date | undefined;

  /**
   * <p>If yes, all nodes in the replication group have been updated by the recommended
   *             apply-by date. If no, at least one node in the replication group have not been updated
   *             by the recommended apply-by date. If N/A, the replication group was created after the
   *             recommended apply-by date.</p>
   * @public
   */
  SlaMet?: SlaMet | undefined;

  /**
   * <p>The status of the service update on the node group</p>
   * @public
   */
  NodeGroupUpdateStatus?: NodeGroupUpdateStatus[] | undefined;

  /**
   * <p>The status of the service update on the cache node</p>
   * @public
   */
  CacheNodeUpdateStatus?: CacheNodeUpdateStatus[] | undefined;

  /**
   * <p>The estimated length of time for the update to complete</p>
   * @public
   */
  EstimatedUpdateTime?: string | undefined;

  /**
   * <p>The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.</p>
   * @public
   */
  Engine?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionsMessage {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Returns a list of update actions</p>
   * @public
   */
  UpdateActions?: UpdateAction[] | undefined;
}

/**
 * @public
 */
export interface DescribeUserGroupsMessage {
  /**
   * <p>The ID of the user group.</p>
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified MaxRecords value, a marker is included in the response so that the
   *             remaining results can be retrieved. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by MaxRecords. ></p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserGroupsResult {
  /**
   * <p>Returns a list of user groups.</p>
   * @public
   */
  UserGroups?: UserGroup[] | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by MaxRecords.></p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Used to streamline results of a search based on the property being filtered.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The property being filtered. For example, UserId.</p>
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
export interface DescribeUsersMessage {
  /**
   * <p>The engine. </p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>Filter to determine the list of User IDs to return.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified MaxRecords value, a marker is included in the response so that the
   *             remaining results can be retrieved. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by MaxRecords. ></p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersResult {
  /**
   * <p>A list of users.</p>
   * @public
   */
  Users?: User[] | undefined;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of
   *             results from this operation. If this parameter is specified, the response includes only
   *             records beyond the marker, up to the value specified by MaxRecords. ></p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The name of the secondary cluster you wish to remove from the Global datastore</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The Amazon region of secondary cluster you wish to remove from the Global
   *             datastore</p>
   * @public
   */
  ReplicationGroupRegion: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
   *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
   *             primary cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
   *                     the name of the Global datastore, which is what you use to associate a secondary
   *                     cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * @public
 */
export interface ExportServerlessCacheSnapshotRequest {
  /**
   * <p>The identifier of the serverless cache snapshot to be exported to S3. Available for Valkey and Redis OSS only.</p>
   * @public
   */
  ServerlessCacheSnapshotName: string | undefined;

  /**
   * <p>Name of the Amazon S3 bucket to export the snapshot to. The Amazon S3 bucket must also be in same region
   *            as the snapshot. Available for Valkey and Redis OSS only.</p>
   * @public
   */
  S3BucketName: string | undefined;
}

/**
 * @public
 */
export interface ExportServerlessCacheSnapshotResponse {
  /**
   * <p>The state of a serverless cache at a specific point in time, to the millisecond. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
   * @public
   */
  ServerlessCacheSnapshot?: ServerlessCacheSnapshot | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The Amazon region of the primary cluster of the Global datastore</p>
   * @public
   */
  PrimaryRegion: string | undefined;

  /**
   * <p>The name of the primary replication group</p>
   * @public
   */
  PrimaryReplicationGroupId: string | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
   *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
   *             primary cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
   *                     the name of the Global datastore, which is what you use to associate a secondary
   *                     cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * <p>A list of <code>PreferredAvailabilityZones</code> objects that specifies the
 *             configuration of a node group in the resharded cluster.</p>
 * @public
 */
export interface ReshardingConfiguration {
  /**
   * <p>Either the ElastiCache supplied 4-digit id or a user supplied id for the
   *             node group these configuration values apply to.</p>
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * <p>A list of preferred availability zones for the nodes in this cluster.</p>
   * @public
   */
  PreferredAvailabilityZones?: string[] | undefined;
}

/**
 * <p>A list of the replication groups </p>
 * @public
 */
export interface RegionalConfiguration {
  /**
   * <p>The name of the secondary cluster</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The Amazon region where the cluster is stored</p>
   * @public
   */
  ReplicationGroupRegion: string | undefined;

  /**
   * <p>A list of <code>PreferredAvailabilityZones</code> objects that specifies the
   *             configuration of a node group in the resharded cluster. </p>
   * @public
   */
  ReshardingConfiguration: ReshardingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>Total number of node groups you want</p>
   * @public
   */
  NodeGroupCount: number | undefined;

  /**
   * <p>Describes the replication group IDs, the Amazon regions where they are stored and the
   *             shard configuration for each that comprise the Global datastore</p>
   * @public
   */
  RegionalConfigurations?: RegionalConfiguration[] | undefined;

  /**
   * <p>Indicates that the process begins immediately. At present, the only permitted value
   *             for this parameter is true.</p>
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
   *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
   *             primary cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
   *                     the name of the Global datastore, which is what you use to associate a secondary
   *                     cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * @public
 */
export interface IncreaseReplicaCountMessage {
  /**
   * <p>The id of the replication group to which you want to add replica nodes.</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The number of read replica nodes you want at the completion of this operation. For Valkey or Redis OSS (cluster mode disabled) replication groups, this is the number of replica nodes in
   *             the replication group. For Valkey or Redis OSS (cluster mode enabled) replication groups, this is the
   *             number of replica nodes in each of the replication group's node groups.</p>
   * @public
   */
  NewReplicaCount?: number | undefined;

  /**
   * <p>A list of <code>ConfigureShard</code> objects that can be used to configure each
   *             shard in a Valkey or Redis OSS (cluster mode enabled) replication group. The
   *                 <code>ConfigureShard</code> has three members: <code>NewReplicaCount</code>,
   *                 <code>NodeGroupId</code>, and <code>PreferredAvailabilityZones</code>.</p>
   * @public
   */
  ReplicaConfiguration?: ConfigureShard[] | undefined;

  /**
   * <p>If <code>True</code>, the number of replica nodes is increased immediately.
   *                 <code>ApplyImmediately=False</code> is not currently supported.</p>
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface IncreaseReplicaCountResult {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * <p>The KMS key supplied is not valid.</p>
 * @public
 */
export class InvalidKMSKeyFault extends __BaseException {
  readonly name: "InvalidKMSKeyFault" = "InvalidKMSKeyFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKMSKeyFault, __BaseException>) {
    super({
      name: "InvalidKMSKeyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKMSKeyFault.prototype);
  }
}

/**
 * <p>The input parameters for the <code>ListAllowedNodeTypeModifications</code>
 *             operation.</p>
 * @public
 */
export interface ListAllowedNodeTypeModificationsMessage {
  /**
   * <p>The name of the cluster you want to scale up to a larger node instanced type.
   *             ElastiCache uses the cluster id to identify the current node type of this cluster and
   *             from that to create a list of node types you can scale up to.</p>
   *          <important>
   *             <p>You must provide a value for either the <code>CacheClusterId</code> or the
   *                     <code>ReplicationGroupId</code>.</p>
   *          </important>
   * @public
   */
  CacheClusterId?: string | undefined;

  /**
   * <p>The name of the replication group want to scale up to a larger node type. ElastiCache
   *             uses the replication group id to identify the current node type being used by this
   *             replication group, and from that to create a list of node types you can scale up
   *             to.</p>
   *          <important>
   *             <p>You must provide a value for either the <code>CacheClusterId</code> or the
   *                     <code>ReplicationGroupId</code>.</p>
   *          </important>
   * @public
   */
  ReplicationGroupId?: string | undefined;
}

/**
 * <p>The input parameters for the <code>ListTagsForResource</code> operation.</p>
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags,
   *             for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or
   *                 <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)
   *                 and Amazon Web
   *                     Services Service Namespaces</a>.</p>
   * @public
   */
  ResourceName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthTokenUpdateStrategyType = {
  DELETE: "DELETE",
  ROTATE: "ROTATE",
  SET: "SET",
} as const;

/**
 * @public
 */
export type AuthTokenUpdateStrategyType =
  (typeof AuthTokenUpdateStrategyType)[keyof typeof AuthTokenUpdateStrategyType];

/**
 * <p>Represents the input of a <code>ModifyCacheCluster</code> operation.</p>
 * @public
 */
export interface ModifyCacheClusterMessage {
  /**
   * <p>The cluster identifier. This value is stored as a lowercase string.</p>
   * @public
   */
  CacheClusterId: string | undefined;

  /**
   * <p>The number of cache nodes that the cluster should have. If the value for
   *                 <code>NumCacheNodes</code> is greater than the sum of the number of current cache
   *             nodes and the number of cache nodes pending creation (which may be zero), more nodes are
   *             added. If the value is less than the number of existing cache nodes, nodes are removed.
   *             If the value is equal to the number of current cache nodes, any pending add or remove
   *             requests are canceled.</p>
   *          <p>If you are removing cache nodes, you must use the <code>CacheNodeIdsToRemove</code>
   *             parameter to provide the IDs of the specific cache nodes to remove.</p>
   *          <p>For clusters running Valkey or Redis OSS, this value must be 1. For clusters running Memcached, this
   *             value must be between 1 and 40.</p>
   *          <note>
   *             <p>Adding or removing Memcached cache nodes can be applied immediately or as a
   *                 pending operation (see <code>ApplyImmediately</code>).</p>
   *             <p>A pending operation to modify the number of cache nodes in a cluster during its
   *                 maintenance window, whether by adding or removing nodes in accordance with the scale
   *                 out architecture, is not queued. The customer's latest request to add or remove
   *                 nodes to the cluster overrides any previous pending operations to modify the number
   *                 of cache nodes in the cluster. For example, a request to remove 2 nodes would
   *                 override a previous pending operation to remove 3 nodes. Similarly, a request to add
   *                 2 nodes would override a previous pending operation to remove 3 nodes and vice
   *                 versa. As Memcached cache nodes may now be provisioned in different Availability
   *                 Zones with flexible cache node placement, a request to add nodes does not
   *                 automatically override a previous pending operation to add nodes. The customer can
   *                 modify the previous pending operation to add more nodes or explicitly cancel the
   *                 pending request and retry the new request. To cancel pending operations to modify
   *                 the number of cache nodes in a cluster, use the <code>ModifyCacheCluster</code>
   *                 request and set <code>NumCacheNodes</code> equal to the number of cache nodes
   *                 currently in the cluster.</p>
   *          </note>
   * @public
   */
  NumCacheNodes?: number | undefined;

  /**
   * <p>A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002,
   *             etc.). This parameter is only valid when <code>NumCacheNodes</code> is less than the
   *             existing number of cache nodes. The number of cache node IDs supplied in this parameter
   *             must match the difference between the existing number of cache nodes in the cluster or
   *             pending cache nodes, whichever is greater, and the value of <code>NumCacheNodes</code>
   *             in the request.</p>
   *          <p>For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number
   *             of cache nodes in this <code>ModifyCacheCluster</code> call is 5, you must list 2 (7 -
   *             5) cache node IDs to remove.</p>
   * @public
   */
  CacheNodeIdsToRemove?: string[] | undefined;

  /**
   * <p>Specifies whether the new nodes in this Memcached cluster are all created in a single
   *             Availability Zone or created across multiple Availability Zones.</p>
   *          <p>Valid values: <code>single-az</code> | <code>cross-az</code>.</p>
   *          <p>This option is only supported for Memcached clusters.</p>
   *          <note>
   *             <p>You cannot specify <code>single-az</code> if the Memcached cluster already has
   *                 cache nodes in different Availability Zones. If <code>cross-az</code> is specified,
   *                 existing Memcached nodes remain in their current Availability Zone.</p>
   *             <p>Only newly created nodes are located in different Availability Zones. </p>
   *          </note>
   * @public
   */
  AZMode?: AZMode | undefined;

  /**
   * <note>
   *             <p>This option is only supported on Memcached clusters.</p>
   *          </note>
   *          <p>The list of Availability Zones where the new Memcached cache nodes are created.</p>
   *          <p>This parameter is only valid when <code>NumCacheNodes</code> in the request is greater
   *             than the sum of the number of active cache nodes and the number of cache nodes pending
   *             creation (which may be zero). The number of Availability Zones supplied in this list
   *             must match the cache nodes being added in this request.</p>
   *          <p>Scenarios:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Scenario 1:</b> You have 3 active nodes and wish
   *                     to add 2 nodes. Specify <code>NumCacheNodes=5</code> (3 + 2) and optionally
   *                     specify two Availability Zones for the two new nodes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Scenario 2:</b> You have 3 active nodes and 2
   *                     nodes pending creation (from the scenario 1 call) and want to add 1 more node.
   *                     Specify <code>NumCacheNodes=6</code> ((3 + 2) + 1) and optionally specify an
   *                     Availability Zone for the new node.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Scenario 3:</b> You want to cancel all pending
   *                     operations. Specify <code>NumCacheNodes=3</code> to cancel all pending
   *                     operations.</p>
   *             </li>
   *          </ul>
   *          <p>The Availability Zone placement of nodes pending creation cannot be modified. If you
   *             wish to cancel any nodes pending creation, add 0 nodes by setting
   *                 <code>NumCacheNodes</code> to the number of current nodes.</p>
   *          <p>If <code>cross-az</code> is specified, existing Memcached nodes remain in their
   *             current Availability Zone. Only newly created nodes can be located in different
   *             Availability Zones. For guidance on how to move existing Memcached nodes to different
   *             Availability Zones, see the <b>Availability Zone
   *                 Considerations</b> section of <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html">Cache Node
   *                 Considerations for Memcached</a>.</p>
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
   *                      <p>Result: The new delete, pending or immediate, replaces the pending
   *                             delete.</p>
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
   *                      <p>Result: The new create, pending or immediate, replaces the pending
   *                             delete.</p>
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
   *                      <p>Result: The new delete, pending or immediate, replaces the pending
   *                             create.</p>
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
   *                            <b>Important:</b> If the new create
   *                                 request is <b>Apply Immediately - Yes</b>,
   *                                 all creates are performed immediately. If the new create request is
   *                                     <b>Apply Immediately - No</b>, all
   *                                 creates are pending.</p>
   *                      </important>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  NewAvailabilityZones?: string[] | undefined;

  /**
   * <p>A list of cache security group names to authorize on this cluster. This change is
   *             asynchronously applied as soon as possible.</p>
   *          <p>You can use this parameter only with clusters that are created outside of an Amazon
   *             Virtual Private Cloud (Amazon VPC).</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be
   *             "Default".</p>
   * @public
   */
  CacheSecurityGroupNames?: string[] | undefined;

  /**
   * <p>Specifies the VPC Security Groups associated with the cluster.</p>
   *          <p>This parameter can be used only with clusters that are created in an Amazon Virtual
   *             Private Cloud (Amazon VPC).</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed.
   *             It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The
   *             minimum maintenance window is a 60 minute period.</p>
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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are
   *             sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be same as the cluster owner.</p>
   *          </note>
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * <p>The name of the cache parameter group to apply to this cluster. This change is
   *             asynchronously applied as soon as possible for parameters when the
   *                 <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this
   *             request.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>The status of the Amazon SNS notification topic. Notifications are sent only if the
   *             status is <code>active</code>.</p>
   *          <p>Valid values: <code>active</code> | <code>inactive</code>
   *          </p>
   * @public
   */
  NotificationTopicStatus?: string | undefined;

  /**
   * <p>If <code>true</code>, this parameter causes the modifications in this request and any
   *             pending modifications to be applied, asynchronously and as soon as possible, regardless
   *             of the <code>PreferredMaintenanceWindow</code> setting for the cluster.</p>
   *          <p>If <code>false</code>, changes to the cluster are applied on the next maintenance
   *             reboot, or the next failure reboot, whichever occurs first.</p>
   *          <important>
   *             <p>If you perform a <code>ModifyCacheCluster</code> before a pending modification is
   *                 applied, the pending modification is replaced by the newer modification.</p>
   *          </important>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>Modifies the engine listed in a cluster message. The options are redis, memcached or valkey.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The upgraded version of the cache engine to be run on the cache nodes.</p>
   *          <p>
   *             <b>Important:</b> You can upgrade to a newer engine version
   *             (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting
   *                 a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine
   *             version. If you want to use an earlier engine version, you must delete the existing
   *             cluster and create it anew with the earlier engine version. </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p> If you are running Valkey 7.2 or Redis OSS engine version 6.0 or later, set this parameter to yes
   *             to opt-in to the next auto minor version upgrade campaign. This parameter is
   *             disabled for previous versions.  </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *          <note>
   *             <p>If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups
   *                 are turned off.</p>
   *          </note>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot
   *             of your cluster. </p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>A valid cache node type that you want to scale this cluster up to.</p>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>Reserved parameter. The password used to access a password protected server. This
   *             parameter must be specified with the <code>auth-token-update</code> parameter. Password
   *             constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be only printable ASCII characters</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 16 characters and no more than 128 characters in
   *                     length</p>
   *             </li>
   *             <li>
   *                <p>Cannot contain any of the following characters: '/', '"', or '@', '%'</p>
   *             </li>
   *          </ul>
   *          <p> For more information, see AUTH password at <a href="http://redis.io/commands/AUTH">AUTH</a>.</p>
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * <p>Specifies the strategy to use to update the AUTH token. This parameter must be
   *             specified with the <code>auth-token</code> parameter. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>ROTATE - default, if no update strategy is provided</p>
   *             </li>
   *             <li>
   *                <p>SET - allowed only after ROTATE</p>
   *             </li>
   *             <li>
   *                <p>DELETE - allowed only when transitioning to RBAC</p>
   *             </li>
   *          </ul>
   *          <p> For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with AUTH</a>
   *          </p>
   * @public
   */
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | undefined;

  /**
   * <p>Specifies the destination, format and type of the logs.</p>
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[] | undefined;

  /**
   * <p>The network type you choose when modifying a cluster, either <code>ipv4</code> |
   *             <code>ipv6</code>. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;
}

/**
 * @public
 */
export interface ModifyCacheClusterResult {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   * @public
   */
  CacheCluster?: CacheCluster | undefined;
}

/**
 * <p>Represents the output of one of the following operations:</p>
 *          <ul>
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
 * @public
 */
export interface CacheParameterGroupNameMessage {
  /**
   * <p>The name of the cache parameter group.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;
}

/**
 * <p>Describes a name-value pair that is used to update the value of a parameter.</p>
 * @public
 */
export interface ParameterNameValue {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  ParameterValue?: string | undefined;
}

/**
 * <p>Represents the input of a <code>ModifyCacheParameterGroup</code> operation.</p>
 * @public
 */
export interface ModifyCacheParameterGroupMessage {
  /**
   * <p>The name of the cache parameter group to modify.</p>
   * @public
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names and values for the parameter update. You must supply at
   *             least one parameter name and value; subsequent arguments are optional. A maximum of 20
   *             parameters may be modified per request.</p>
   * @public
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * <p>Represents the input of a <code>ModifyCacheSubnetGroup</code> operation.</p>
 * @public
 */
export interface ModifyCacheSubnetGroupMessage {
  /**
   * <p>The name for the cache subnet group. This value is stored as a lowercase
   *             string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *          <p>Example: <code>mysubnetgroup</code>
   *          </p>
   * @public
   */
  CacheSubnetGroupName: string | undefined;

  /**
   * <p>A description of the cache subnet group.</p>
   * @public
   */
  CacheSubnetGroupDescription?: string | undefined;

  /**
   * <p>The EC2 subnet IDs for the cache subnet group.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyCacheSubnetGroupResult {
  /**
   * <p>Represents the output of one of the following operations:</p>
   *          <ul>
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
   * @public
   */
  CacheSubnetGroup?: CacheSubnetGroup | undefined;
}

/**
 * <p>The requested subnet is being used by another cache subnet group.</p>
 * @public
 */
export class SubnetInUse extends __BaseException {
  readonly name: "SubnetInUse" = "SubnetInUse";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetInUse, __BaseException>) {
    super({
      name: "SubnetInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetInUse.prototype);
  }
}

/**
 * @public
 */
export interface ModifyGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>This parameter causes the modifications in this request and any pending modifications
   *             to be applied, asynchronously and as soon as possible. Modifications to Global
   *             Replication Groups cannot be requested to be applied in PreferredMaintenceWindow.
   *         </p>
   * @public
   */
  ApplyImmediately: boolean | undefined;

  /**
   * <p>A valid cache node type that you want to scale this Global datastore to.</p>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>Modifies the engine listed in a global replication group message. The options are redis, memcached or valkey.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The upgraded version of the cache engine to be run on the clusters in the Global
   *             datastore. </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of the cache parameter group to use with the Global datastore. It must be
   *             compatible with the major engine version used by the Global datastore.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>A description of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupDescription?: string | undefined;

  /**
   * <p>Determines whether a read replica is automatically promoted to read/write primary if
   *             the existing primary encounters a failure. </p>
   * @public
   */
  AutomaticFailoverEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
   *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
   *             primary cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
   *                     the name of the Global datastore, which is what you use to associate a secondary
   *                     cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * <p>Represents the input of a <code>ModifyReplicationGroups</code> operation.</p>
 * @public
 */
export interface ModifyReplicationGroupMessage {
  /**
   * <p>The identifier of the replication group to modify.</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>A description for the replication group. Maximum length is 255 characters.</p>
   * @public
   */
  ReplicationGroupDescription?: string | undefined;

  /**
   * <p>For replication groups with a single primary, if this parameter is specified,
   *             ElastiCache promotes the specified cluster in the specified replication group to the
   *             primary role. The nodes of all other clusters in the replication group are read
   *             replicas.</p>
   * @public
   */
  PrimaryClusterId?: string | undefined;

  /**
   * <p>The cluster ID that is used as the daily snapshot source for the replication group.
   *             This parameter cannot be set for Valkey or Redis OSS (cluster mode enabled) replication groups.</p>
   * @public
   */
  SnapshottingClusterId?: string | undefined;

  /**
   * <p>Determines whether a read replica is automatically promoted to read/write primary if
   *             the existing primary encounters a failure.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  AutomaticFailoverEnabled?: boolean | undefined;

  /**
   * <p>A flag to indicate MultiAZ is enabled.</p>
   * @public
   */
  MultiAZEnabled?: boolean | undefined;

  /**
   * @deprecated
   *
   * <p>Deprecated. This parameter is not used.</p>
   * @public
   */
  NodeGroupId?: string | undefined;

  /**
   * <p>A list of cache security group names to authorize for the clusters in this replication
   *             group. This change is asynchronously applied as soon as possible.</p>
   *          <p>This parameter can be used only with replication group containing clusters running
   *             outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be
   *                 <code>Default</code>.</p>
   * @public
   */
  CacheSecurityGroupNames?: string[] | undefined;

  /**
   * <p>Specifies the VPC Security Groups associated with the clusters in the replication
   *             group.</p>
   *          <p>This parameter can be used only with replication group containing clusters running in
   *             an Amazon Virtual Private Cloud (Amazon VPC).</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed.
   *             It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The
   *             minimum maintenance window is a 60 minute period.</p>
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
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are
   *             sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be same as the replication group owner. </p>
   *          </note>
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * <p>The name of the cache parameter group to apply to all of the clusters in this
   *             replication group. This change is asynchronously applied as soon as possible for
   *             parameters when the <code>ApplyImmediately</code> parameter is specified as
   *                 <code>true</code> for this request.</p>
   * @public
   */
  CacheParameterGroupName?: string | undefined;

  /**
   * <p>The status of the Amazon SNS notification topic for the replication group.
   *             Notifications are sent only if the status is <code>active</code>.</p>
   *          <p>Valid values: <code>active</code> | <code>inactive</code>
   *          </p>
   * @public
   */
  NotificationTopicStatus?: string | undefined;

  /**
   * <p>If <code>true</code>, this parameter causes the modifications in this request and any
   *             pending modifications to be applied, asynchronously and as soon as possible, regardless
   *             of the <code>PreferredMaintenanceWindow</code> setting for the replication group.</p>
   *          <p>If <code>false</code>, changes to the nodes in the replication group are applied on
   *             the next maintenance reboot, or the next failure reboot, whichever occurs first.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>Modifies the engine listed in a replication group message. The options are redis, memcached or valkey.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The upgraded version of the cache engine to be run on the clusters in the replication
   *             group.</p>
   *          <p>
   *             <b>Important:</b> You can upgrade to a newer engine version
   *             (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting
   *                 a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine
   *             version. If you want to use an earlier engine version, you must delete the existing
   *             replication group and create it anew with the earlier engine version. </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p> If you are running Valkey or Redis OSS engine version 6.0 or later, set this parameter to yes if
   *             you want to opt-in to the next auto minor version upgrade campaign. This parameter is
   *             disabled for previous versions.  </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The number of days for which ElastiCache retains automatic node group (shard)
   *             snapshots before deleting them. For example, if you set
   *                 <code>SnapshotRetentionLimit</code> to 5, a snapshot that was taken today is
   *             retained for 5 days before being deleted.</p>
   *          <p>
   *             <b>Important</b> If the value of SnapshotRetentionLimit is
   *             set to zero (0), backups are turned off.</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot
   *             of the node group (shard) specified by <code>SnapshottingClusterId</code>.</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   *          <p>If you do not specify this parameter, ElastiCache automatically chooses an appropriate
   *             time range.</p>
   * @public
   */
  SnapshotWindow?: string | undefined;

  /**
   * <p>A valid cache node type that you want to scale this replication group to.</p>
   * @public
   */
  CacheNodeType?: string | undefined;

  /**
   * <p>Reserved parameter. The password used to access a password protected server. This
   *             parameter must be specified with the <code>auth-token-update-strategy </code> parameter.
   *             Password constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be only printable ASCII characters</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 16 characters and no more than 128 characters in
   *                     length</p>
   *             </li>
   *             <li>
   *                <p>Cannot contain any of the following characters: '/', '"', or '@', '%'</p>
   *             </li>
   *          </ul>
   *          <p> For more information, see AUTH password at <a href="http://redis.io/commands/AUTH">AUTH</a>.</p>
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * <p>Specifies the strategy to use to update the AUTH token. This parameter must be
   *             specified with the <code>auth-token</code> parameter. Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>ROTATE - default, if no update strategy is provided</p>
   *             </li>
   *             <li>
   *                <p>SET - allowed only after ROTATE</p>
   *             </li>
   *             <li>
   *                <p>DELETE - allowed only when transitioning to RBAC</p>
   *             </li>
   *          </ul>
   *          <p> For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with AUTH</a>
   *          </p>
   * @public
   */
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | undefined;

  /**
   * <p>The ID of the user group you are associating with the replication group.</p>
   * @public
   */
  UserGroupIdsToAdd?: string[] | undefined;

  /**
   * <p>The ID of the user group to disassociate from the replication group, meaning the users
   *             in the group no longer can access the replication group.</p>
   * @public
   */
  UserGroupIdsToRemove?: string[] | undefined;

  /**
   * <p>Removes the user group associated with this replication group.</p>
   * @public
   */
  RemoveUserGroups?: boolean | undefined;

  /**
   * <p>Specifies the destination, format and type of the logs.</p>
   * @public
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[] | undefined;

  /**
   * <p>The network type you choose when modifying a cluster, either <code>ipv4</code> |
   *             <code>ipv6</code>. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2
   *             and above or Memcached engine version 1.6.6 and above on all instances built on the <a href="http://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   * @public
   */
  IpDiscovery?: IpDiscovery | undefined;

  /**
   * <p>A flag that enables in-transit encryption when set to true. If you are enabling
   *             in-transit encryption for an existing cluster, you must also set
   *                 <code>TransitEncryptionMode</code> to <code>preferred</code>.</p>
   * @public
   */
  TransitEncryptionEnabled?: boolean | undefined;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with
   *             no downtime.</p>
   *          <p>You must set <code>TransitEncryptionEnabled</code> to <code>true</code>, for your
   *             existing cluster, and set <code>TransitEncryptionMode</code> to <code>preferred</code>
   *             in the same request to allow both encrypted and unencrypted connections at the same
   *             time. Once you migrate all your Valkey or Redis OSS clients to use encrypted connections you can set
   *             the value to <code>required</code> to allow encrypted connections only.</p>
   *          <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step
   *             process that requires you to first set the <code>TransitEncryptionMode</code> to
   *                 <code>preferred</code>, after that you can set <code>TransitEncryptionMode</code> to
   *                 <code>required</code>. </p>
   * @public
   */
  TransitEncryptionMode?: TransitEncryptionMode | undefined;

  /**
   * <p>Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first
   *             set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect
   *             using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS
   *             clients to use cluster mode enabled, you can then complete cluster mode configuration
   *             and set the cluster mode to Enabled.</p>
   * @public
   */
  ClusterMode?: ClusterMode | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationGroupResult {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * <p>Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code>
 *             operation.</p>
 * @public
 */
export interface ModifyReplicationGroupShardConfigurationMessage {
  /**
   * <p>The name of the Valkey or Redis OSS (cluster mode enabled) cluster (replication group) on which the
   *             shards are to be configured.</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The number of node groups (shards) that results from the modification of the shard
   *             configuration.</p>
   * @public
   */
  NodeGroupCount: number | undefined;

  /**
   * <p>Indicates that the shard reconfiguration process begins immediately. At present, the
   *             only permitted value for this parameter is <code>true</code>.</p>
   *          <p>Value: true</p>
   * @public
   */
  ApplyImmediately: boolean | undefined;

  /**
   * <p>Specifies the preferred availability zones for each node group in the cluster. If the
   *             value of <code>NodeGroupCount</code> is greater than the current number of node groups
   *             (shards), you can use this parameter to specify the preferred availability zones of the
   *             cluster's shards. If you omit this parameter ElastiCache selects availability zones for
   *             you.</p>
   *          <p>You can specify this parameter only if the value of <code>NodeGroupCount</code> is
   *             greater than the current number of node groups (shards).</p>
   * @public
   */
  ReshardingConfiguration?: ReshardingConfiguration[] | undefined;

  /**
   * <p>If the value of <code>NodeGroupCount</code> is less than the current number of node
   *             groups (shards), then either <code>NodeGroupsToRemove</code> or
   *                 <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRemove</code> is a
   *             list of <code>NodeGroupId</code>s to remove from the cluster.</p>
   *          <p>ElastiCache will attempt to remove all node groups listed by
   *                 <code>NodeGroupsToRemove</code> from the cluster.</p>
   * @public
   */
  NodeGroupsToRemove?: string[] | undefined;

  /**
   * <p>If the value of <code>NodeGroupCount</code> is less than the current number of node
   *             groups (shards), then either <code>NodeGroupsToRemove</code> or
   *                 <code>NodeGroupsToRetain</code> is required. <code>NodeGroupsToRetain</code> is a
   *             list of <code>NodeGroupId</code>s to retain in the cluster.</p>
   *          <p>ElastiCache will attempt to remove all node groups except those listed by
   *                 <code>NodeGroupsToRetain</code> from the cluster.</p>
   * @public
   */
  NodeGroupsToRetain?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationGroupShardConfigurationResult {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * @public
 */
export interface ModifyServerlessCacheRequest {
  /**
   * <p>User-provided identifier for the serverless cache to be modified.</p>
   * @public
   */
  ServerlessCacheName: string | undefined;

  /**
   * <p>User provided description for the serverless cache.
   *            Default = NULL, i.e. the existing description is not removed/modified.
   *            The description has a maximum length of 255 characters.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Modify the cache usage limit for the serverless cache.</p>
   * @public
   */
  CacheUsageLimits?: CacheUsageLimits | undefined;

  /**
   * <p>The identifier of the UserGroup to be removed from association with the Valkey and Redis OSS serverless cache.  Available for Valkey and Redis OSS only. Default is NULL.</p>
   * @public
   */
  RemoveUserGroup?: boolean | undefined;

  /**
   * <p>The identifier of the UserGroup to be associated with the serverless cache. Available for Valkey and Redis OSS only.
   *            Default is NULL -  the existing UserGroup is not removed.</p>
   * @public
   */
  UserGroupId?: string | undefined;

  /**
   * <p>The new list of VPC security groups to be associated with the serverless cache.
   *            Populating this list means the current VPC security groups will be removed.
   *            This security group is used to authorize traffic access for the VPC end-point (private-link).
   *            Default = NULL -  the existing list of VPC security groups is not removed.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The number of days for which Elasticache retains automatic snapshots before deleting them.
   *            Available for Valkey, Redis OSS and Serverless Memcached only.
   *            Default = NULL, i.e. the existing snapshot-retention-limit will not be removed or modified.
   *            The maximum value allowed is 35 days.</p>
   * @public
   */
  SnapshotRetentionLimit?: number | undefined;

  /**
   * <p>The daily time during which Elasticache begins taking a daily snapshot of the serverless cache.  Available for Valkey, Redis OSS and Serverless Memcached only.
   *            The default is NULL, i.e. the existing snapshot time configured for the cluster is not removed.</p>
   * @public
   */
  DailySnapshotTime?: string | undefined;

  /**
   * <p>Modifies the engine listed in a serverless cache request. The options are redis, memcached or valkey.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Modifies the engine vesion listed in a serverless cache request. </p>
   * @public
   */
  MajorEngineVersion?: string | undefined;
}

/**
 * @public
 */
export interface ModifyServerlessCacheResponse {
  /**
   * <p>The response for the attempt to modify the serverless cache.</p>
   * @public
   */
  ServerlessCache?: ServerlessCache | undefined;
}

/**
 * @public
 */
export interface ModifyUserMessage {
  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Access permissions string used for this user.</p>
   * @public
   */
  AccessString?: string | undefined;

  /**
   * <p>Adds additional user permissions to the access string.</p>
   * @public
   */
  AppendAccessString?: string | undefined;

  /**
   * <p>The passwords belonging to the user. You are allowed up to two.</p>
   * @public
   */
  Passwords?: string[] | undefined;

  /**
   * <p>Indicates no password is required for the user.</p>
   * @public
   */
  NoPasswordRequired?: boolean | undefined;

  /**
   * <p>Specifies how to authenticate the user.</p>
   * @public
   */
  AuthenticationMode?: AuthenticationMode | undefined;
}

/**
 * @public
 */
export interface ModifyUserGroupMessage {
  /**
   * <p>The ID of the user group.</p>
   * @public
   */
  UserGroupId: string | undefined;

  /**
   * <p>The list of user IDs to add to the user group.</p>
   * @public
   */
  UserIdsToAdd?: string[] | undefined;

  /**
   * <p>The list of user IDs to remove from the user group.</p>
   * @public
   */
  UserIdsToRemove?: string[] | undefined;
}

/**
 * <p>Represents the input of a <code>PurchaseReservedCacheNodesOffering</code>
 *             operation.</p>
 * @public
 */
export interface PurchaseReservedCacheNodesOfferingMessage {
  /**
   * <p>The ID of the reserved cache node offering to purchase.</p>
   *          <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   * @public
   */
  ReservedCacheNodesOfferingId: string | undefined;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   *          <note>
   *             <p>The Reserved Cache Node ID is an unique customer-specified identifier to track
   *                 this reservation. If this parameter is not specified, ElastiCache automatically
   *                 generates an identifier for the reservation.</p>
   *          </note>
   *          <p>Example: myreservationID</p>
   * @public
   */
  ReservedCacheNodeId?: string | undefined;

  /**
   * <p>The number of cache node instances to reserve.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   * @public
   */
  CacheNodeCount?: number | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must
   *             be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedCacheNodesOfferingResult {
  /**
   * <p>Represents the output of a <code>PurchaseReservedCacheNodesOffering</code>
   *             operation.</p>
   * @public
   */
  ReservedCacheNode?: ReservedCacheNode | undefined;
}

/**
 * <p>You already have a reservation with the given identifier.</p>
 * @public
 */
export class ReservedCacheNodeAlreadyExistsFault extends __BaseException {
  readonly name: "ReservedCacheNodeAlreadyExistsFault" = "ReservedCacheNodeAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedCacheNodeAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReservedCacheNodeAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedCacheNodeAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the user's cache node
 *             quota.</p>
 * @public
 */
export class ReservedCacheNodeQuotaExceededFault extends __BaseException {
  readonly name: "ReservedCacheNodeQuotaExceededFault" = "ReservedCacheNodeQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedCacheNodeQuotaExceededFault, __BaseException>) {
    super({
      name: "ReservedCacheNodeQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedCacheNodeQuotaExceededFault.prototype);
  }
}

/**
 * @public
 */
export interface RebalanceSlotsInGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   * @public
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>If <code>True</code>, redistribution is applied immediately.</p>
   * @public
   */
  ApplyImmediately: boolean | undefined;
}

/**
 * @public
 */
export interface RebalanceSlotsInGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster
   *             that resides in a different Amazon region. The secondary cluster accepts only reads. The
   *             primary cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents
   *                     the name of the Global datastore, which is what you use to associate a secondary
   *                     cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalReplicationGroup?: GlobalReplicationGroup | undefined;
}

/**
 * <p>Represents the input of a <code>RebootCacheCluster</code> operation.</p>
 * @public
 */
export interface RebootCacheClusterMessage {
  /**
   * <p>The cluster identifier. This parameter is stored as a lowercase string.</p>
   * @public
   */
  CacheClusterId: string | undefined;

  /**
   * <p>A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002,
   *             etc.). To reboot an entire cluster, specify all of the cache node IDs.</p>
   * @public
   */
  CacheNodeIdsToReboot: string[] | undefined;
}

/**
 * @public
 */
export interface RebootCacheClusterResult {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   * @public
   */
  CacheCluster?: CacheCluster | undefined;
}

/**
 * <p>Represents the input of a <code>RemoveTagsFromResource</code> operation.</p>
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want the tags removed,
   *             for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code> or
   *                 <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)
   *                 and Amazon Service Namespaces</a>.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>A list of <code>TagKeys</code> identifying the tags you want removed from the named
   *             resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>The requested tag was not found on this resource.</p>
 * @public
 */
export class TagNotFoundFault extends __BaseException {
  readonly name: "TagNotFoundFault" = "TagNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagNotFoundFault, __BaseException>) {
    super({
      name: "TagNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagNotFoundFault.prototype);
  }
}

/**
 * <p>Represents the input of a <code>ResetCacheParameterGroup</code> operation.</p>
 * @public
 */
export interface ResetCacheParameterGroupMessage {
  /**
   * <p>The name of the cache parameter group to reset.</p>
   * @public
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>If <code>true</code>, all parameters in the cache parameter group are reset to their
   *             default values. If <code>false</code>, only the parameters listed by
   *                 <code>ParameterNameValues</code> are reset to their default values.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * <p>An array of parameter names to reset to their default values. If
   *                 <code>ResetAllParameters</code> is <code>true</code>, do not use
   *                 <code>ParameterNameValues</code>. If <code>ResetAllParameters</code> is
   *                 <code>false</code>, you must specify the name of at least one parameter to
   *             reset.</p>
   * @public
   */
  ParameterNameValues?: ParameterNameValue[] | undefined;
}

/**
 * <p>The specified Amazon EC2 security group is not authorized for the specified cache
 *             security group.</p>
 * @public
 */
export class AuthorizationNotFoundFault extends __BaseException {
  readonly name: "AuthorizationNotFoundFault" = "AuthorizationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationNotFoundFault, __BaseException>) {
    super({
      name: "AuthorizationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationNotFoundFault.prototype);
  }
}

/**
 * <p>Represents the input of a <code>RevokeCacheSecurityGroupIngress</code>
 *             operation.</p>
 * @public
 */
export interface RevokeCacheSecurityGroupIngressMessage {
  /**
   * <p>The name of the cache security group to revoke ingress from.</p>
   * @public
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>The name of the Amazon EC2 security group to revoke access from.</p>
   * @public
   */
  EC2SecurityGroupName: string | undefined;

  /**
   * <p>The Amazon account number of the Amazon EC2 security group owner. Note that this is
   *             not the same thing as an Amazon access key ID - you must provide a valid Amazon account
   *             number for this parameter.</p>
   * @public
   */
  EC2SecurityGroupOwnerId: string | undefined;
}

/**
 * @public
 */
export interface RevokeCacheSecurityGroupIngressResult {
  /**
   * <p>Represents the output of one of the following operations:</p>
   *          <ul>
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
   * @public
   */
  CacheSecurityGroup?: CacheSecurityGroup | undefined;
}
