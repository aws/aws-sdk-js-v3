// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ElastiCacheServiceException as __BaseException } from "./ElastiCacheServiceException";

/**
 * <p>A tag that can be added to an ElastiCache cluster or replication group.
 *             Tags are composed of a Key/Value pair. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. A tag with a null Value is permitted.</p>
 */
export interface Tag {
  /**
   * <p>The key for the tag. May not be null.</p>
   */
  Key?: string;

  /**
   * <p>The tag's value. May be null.</p>
   */
  Value?: string;
}

/**
 * <p>Represents the input of an AddTagsToResource operation.</p>
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added,
   *             for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code>
   *             or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.
   *             ElastiCache resources are <i>cluster</i> and <i>snapshot</i>.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Service Namespaces</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair.
   *           A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>The requested cluster ID does not refer to an existing cluster.</p>
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
 * <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
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
 * <p>The requested cache security group name does not refer to an existing cache security group.</p>
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
 * <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
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
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
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
 * <p>The specified replication group does not exist.</p>
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
 * <p>The requested snapshot name does not refer to an existing snapshot.</p>
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
 *             <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.</p>
 */
export interface TagListMessage {
  /**
   * <p>A list of tags as key-value pairs.</p>
   */
  TagList?: Tag[];
}

/**
 * <p>The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.</p>
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
 * <p>Represents the allowed node types you can use to modify your cluster or replication group.</p>
 */
export interface AllowedNodeTypeModificationsMessage {
  /**
   * <p>A string list, each element of which specifies a cache node type which you can use
   *             to scale your cluster or replication group.</p>
   *          <p>When scaling up a Redis cluster or replication group using <code>ModifyCacheCluster</code> or
   *             <code>ModifyReplicationGroup</code>,
   *             use a value from this list for the <code>CacheNodeType</code> parameter.</p>
   */
  ScaleUpModifications?: string[];

  /**
   * <p>A string list, each element of which specifies a cache node type which you can use to scale your cluster or replication group.
   *
   *             When scaling down a Redis cluster or replication group using ModifyCacheCluster or ModifyReplicationGroup, use a value from this list for the CacheNodeType parameter. </p>
   */
  ScaleDownModifications?: string[];
}

/**
 * <p>The specified Amazon EC2 security group is already authorized for the specified cache security group.</p>
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
 */
export interface AuthorizeCacheSecurityGroupIngressMessage {
  /**
   * <p>The cache security group that allows network ingress.</p>
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>The Amazon EC2 security group to be authorized for ingress to the cache security group.</p>
   */
  EC2SecurityGroupName: string | undefined;

  /**
   * <p>The Amazon account number of the Amazon EC2 security group owner.
   *             Note that this is not the same thing as an Amazon access key ID -
   *             you must provide a valid Amazon account number for this parameter.</p>
   */
  EC2SecurityGroupOwnerId: string | undefined;
}

/**
 * <p>Provides ownership and status information for an Amazon EC2 security group.</p>
 */
export interface EC2SecurityGroup {
  /**
   * <p>The status of the Amazon EC2 security group.</p>
   */
  Status?: string;

  /**
   * <p>The name of the Amazon EC2 security group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The Amazon account ID of the Amazon EC2 security group owner.</p>
   */
  EC2SecurityGroupOwnerId?: string;
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
 */
export interface CacheSecurityGroup {
  /**
   * <p>The Amazon account ID of the cache security group owner.</p>
   */
  OwnerId?: string;

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
   * <p>The ARN of the cache security group,</p>
   */
  ARN?: string;
}

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
   */
  CacheSecurityGroup?: CacheSecurityGroup;
}

/**
 * <p>The current state of the cache security group does not allow deletion.</p>
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

export interface BatchApplyUpdateActionMessage {
  /**
   * <p>The replication group IDs</p>
   */
  ReplicationGroupIds?: string[];

  /**
   * <p>The cache cluster IDs</p>
   */
  CacheClusterIds?: string[];

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName: string | undefined;
}

/**
 * <p>The service update doesn't exist</p>
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

export enum UpdateActionStatus {
  COMPLETE = "complete",
  IN_PROGRESS = "in-progress",
  NOT_APPLICABLE = "not-applicable",
  NOT_APPLIED = "not-applied",
  SCHEDULED = "scheduled",
  SCHEDULING = "scheduling",
  STOPPED = "stopped",
  STOPPING = "stopping",
  WAITING_TO_START = "waiting-to-start",
}

/**
 * <p>Update action that has been processed for the corresponding apply/stop request</p>
 */
export interface ProcessedUpdateAction {
  /**
   * <p>The ID of the replication group</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The ID of the cache cluster</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the update action on the Redis cluster</p>
   */
  UpdateActionStatus?: UpdateActionStatus | string;
}

/**
 * <p>Update action that has failed to be processed for the corresponding apply/stop request</p>
 */
export interface UnprocessedUpdateAction {
  /**
   * <p>The replication group ID</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The ID of the cache cluster</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The error type for requests that are not processed</p>
   */
  ErrorType?: string;

  /**
   * <p>The error message that describes the reason the request was not processed</p>
   */
  ErrorMessage?: string;
}

export interface UpdateActionResultsMessage {
  /**
   * <p>Update actions that have been processed successfully</p>
   */
  ProcessedUpdateActions?: ProcessedUpdateAction[];

  /**
   * <p>Update actions that haven't been processed successfully</p>
   */
  UnprocessedUpdateActions?: UnprocessedUpdateAction[];
}

export interface BatchStopUpdateActionMessage {
  /**
   * <p>The replication group IDs</p>
   */
  ReplicationGroupIds?: string[];

  /**
   * <p>The cache cluster IDs</p>
   */
  CacheClusterIds?: string[];

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName: string | undefined;
}

export interface CompleteMigrationMessage {
  /**
   * <p>The ID of the replication group to which data is being migrated.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.</p>
   */
  Force?: boolean;
}

export enum AutomaticFailoverStatus {
  DISABLED = "disabled",
  DISABLING = "disabling",
  ENABLED = "enabled",
  ENABLING = "enabling",
}

/**
 * <p>Represents the information required for client programs to connect to a cache node.</p>
 */
export interface Endpoint {
  /**
   * <p>The DNS hostname of the cache node.</p>
   */
  Address?: string;

  /**
   * <p>The port number that the cache engine is listening on.</p>
   */
  Port?: number;
}

export enum DataTieringStatus {
  DISABLED = "disabled",
  ENABLED = "enabled",
}

/**
 * <p>The name of the Global datastore and role of this replication group in the Global datastore.</p>
 */
export interface GlobalReplicationGroupInfo {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId?: string;

  /**
   * <p>The role of the replication group in a Global datastore. Can be primary or secondary.</p>
   */
  GlobalReplicationGroupMemberRole?: string;
}

export enum IpDiscovery {
  IPV4 = "ipv4",
  IPV6 = "ipv6",
}

/**
 * <p>The configuration details of the CloudWatch Logs destination.</p>
 */
export interface CloudWatchLogsDestinationDetails {
  /**
   * <p>The name of the CloudWatch Logs log group.</p>
   */
  LogGroup?: string;
}

/**
 * <p>The configuration details of the Kinesis Data Firehose destination.</p>
 */
export interface KinesisFirehoseDestinationDetails {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream.</p>
   */
  DeliveryStream?: string;
}

/**
 * <p>Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.</p>
 */
export interface DestinationDetails {
  /**
   * <p>The configuration details of the CloudWatch Logs destination.</p>
   */
  CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;

  /**
   * <p>The configuration details of the Kinesis Data Firehose destination.</p>
   */
  KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
}

export enum DestinationType {
  CloudWatchLogs = "cloudwatch-logs",
  KinesisFirehose = "kinesis-firehose",
}

export enum LogFormat {
  JSON = "json",
  TEXT = "text",
}

export enum LogType {
  ENGINE_LOG = "engine-log",
  SLOW_LOG = "slow-log",
}

export enum LogDeliveryConfigurationStatus {
  ACTIVE = "active",
  DISABLING = "disabling",
  ENABLING = "enabling",
  ERROR = "error",
  MODIFYING = "modifying",
}

/**
 * <p>Returns the destination, format and type of the logs. </p>
 */
export interface LogDeliveryConfiguration {
  /**
   * <p>Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log.</p>
   */
  LogType?: LogType | string;

  /**
   * <p>Returns the destination type, either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code>.</p>
   */
  DestinationType?: DestinationType | string;

  /**
   * <p>Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.</p>
   */
  DestinationDetails?: DestinationDetails;

  /**
   * <p>Returns the log format, either JSON or TEXT.</p>
   */
  LogFormat?: LogFormat | string;

  /**
   * <p>Returns the log delivery configuration status. Values are one of <code>enabling</code> | <code>disabling</code> | <code>modifying</code> | <code>active</code> | <code>error</code>
   *          </p>
   */
  Status?: LogDeliveryConfigurationStatus | string;

  /**
   * <p>Returns an error message for the log delivery configuration.</p>
   */
  Message?: string;
}

export enum MultiAZStatus {
  DISABLED = "disabled",
  ENABLED = "enabled",
}

export enum NetworkType {
  DUAL_STACK = "dual_stack",
  IPV4 = "ipv4",
  IPV6 = "ipv6",
}

/**
 * <p>Represents a single node within a node group (shard).</p>
 */
export interface NodeGroupMember {
  /**
   * <p>The ID of the cluster to which the node belongs.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The ID of the node within its cluster. A node ID is a numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The information required for client programs to connect to a node for read operations.
   *             The read endpoint is only applicable on Redis (cluster mode disabled) clusters.</p>
   */
  ReadEndpoint?: Endpoint;

  /**
   * <p>The name of the Availability Zone in which the node is located.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>The outpost ARN of the node group member.</p>
   */
  PreferredOutpostArn?: string;

  /**
   * <p>The role that is currently assigned to the node - <code>primary</code> or
   *             <code>replica</code>. This member is only applicable for Redis (cluster mode disabled)
   *             replication groups.</p>
   */
  CurrentRole?: string;
}

/**
 * <p>Represents a collection of cache nodes in a replication group.
 *             One node in the node group is the read/write primary node.
 *             All the other nodes are read-only Replica nodes.</p>
 */
export interface NodeGroup {
  /**
   * <p>The identifier for the node group (shard). A Redis (cluster mode disabled) replication group contains only 1 node group; therefore, the node group ID is 0001.
   *             A Redis (cluster mode enabled) replication group contains 1 to 90 node groups numbered 0001 to 0090. Optionally, the user can provide the id for
   *             a node group. </p>
   */
  NodeGroupId?: string;

  /**
   * <p>The current state of this replication group - <code>creating</code>,
   *             <code>available</code>, <code>modifying</code>, <code>deleting</code>.</p>
   */
  Status?: string;

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
   * <p>A list containing information about individual nodes within the node group (shard).</p>
   */
  NodeGroupMembers?: NodeGroupMember[];
}

export enum AuthTokenUpdateStatus {
  ROTATING = "ROTATING",
  SETTING = "SETTING",
}

export enum PendingAutomaticFailoverStatus {
  DISABLED = "disabled",
  ENABLED = "enabled",
}

/**
 * <p>The log delivery configurations being modified </p>
 */
export interface PendingLogDeliveryConfiguration {
  /**
   * <p>Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..</p>
   */
  LogType?: LogType | string;

  /**
   * <p>Returns the destination type, either CloudWatch Logs or Kinesis Data Firehose.</p>
   */
  DestinationType?: DestinationType | string;

  /**
   * <p>Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.</p>
   */
  DestinationDetails?: DestinationDetails;

  /**
   * <p>Returns the log format, either JSON or TEXT</p>
   */
  LogFormat?: LogFormat | string;
}

/**
 * <p>Represents the progress of an online resharding operation.</p>
 */
export interface SlotMigration {
  /**
   * <p>The percentage of the slot migration that is complete.</p>
   */
  ProgressPercentage?: number;
}

/**
 * <p>The status of an online resharding operation.</p>
 */
export interface ReshardingStatus {
  /**
   * <p>Represents the progress of an online resharding operation.</p>
   */
  SlotMigration?: SlotMigration;
}

export enum TransitEncryptionMode {
  PREFERRED = "preferred",
  REQUIRED = "required",
}

/**
 * <p>The status of the user group update.</p>
 */
export interface UserGroupsUpdateStatus {
  /**
   * <p>The ID of the user group to add.</p>
   */
  UserGroupIdsToAdd?: string[];

  /**
   * <p>The ID of the user group to remove.</p>
   */
  UserGroupIdsToRemove?: string[];
}

/**
 * <p>The settings to be applied to the Redis replication group,
 *             either immediately or during the next maintenance window.</p>
 */
export interface ReplicationGroupPendingModifiedValues {
  /**
   * <p>The primary cluster ID that is applied immediately (if <code>--apply-immediately</code>
   *             was specified), or during the next maintenance window.</p>
   */
  PrimaryClusterId?: string;

  /**
   * <p>Indicates the status of automatic failover for this Redis replication group.</p>
   */
  AutomaticFailoverStatus?: PendingAutomaticFailoverStatus | string;

  /**
   * <p>The status of an online resharding operation.</p>
   */
  Resharding?: ReshardingStatus;

  /**
   * <p>The auth token status</p>
   */
  AuthTokenStatus?: AuthTokenUpdateStatus | string;

  /**
   * <p>The user group being modified.</p>
   */
  UserGroups?: UserGroupsUpdateStatus;

  /**
   * <p>The log delivery configurations being modified </p>
   */
  LogDeliveryConfigurations?: PendingLogDeliveryConfiguration[];

  /**
   * <p>A flag that enables in-transit encryption when set to true.</p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p>
   */
  TransitEncryptionMode?: TransitEncryptionMode | string;
}

/**
 * <p>Contains all of the attributes of a specific Redis replication group.</p>
 */
export interface ReplicationGroup {
  /**
   * <p>The identifier for the replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The user supplied description of the replication group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the Global datastore and role of this replication group in the Global datastore.</p>
   */
  GlobalReplicationGroupInfo?: GlobalReplicationGroupInfo;

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
   * <p>A group of settings to be applied to the replication group,
   *             either immediately or during the next maintenance window.</p>
   */
  PendingModifiedValues?: ReplicationGroupPendingModifiedValues;

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
   * <p>The cluster ID that is used as the daily snapshot source for the replication group.</p>
   */
  SnapshottingClusterId?: string;

  /**
   * <p>Indicates the status of automatic failover for this Redis replication group.</p>
   */
  AutomaticFailover?: AutomaticFailoverStatus | string;

  /**
   * <p>A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html">Minimizing Downtime: Multi-AZ</a>
   *          </p>
   */
  MultiAZ?: MultiAZStatus | string;

  /**
   * <p>The configuration endpoint for this replication group.
   *             Use the configuration endpoint to connect to this replication group.</p>
   */
  ConfigurationEndpoint?: Endpoint;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *          <important>
   *             <p>
   *             If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p>
   *          </important>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache  begins taking a daily snapshot of your node group (shard).</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   *          <p>If you do not specify this parameter, ElastiCache  automatically chooses an appropriate time range.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   */
  SnapshotWindow?: string;

  /**
   * <p>A flag indicating whether or not this replication group is cluster enabled;
   *             i.e., whether its data can be partitioned across multiple shards (API/CLI: node groups).</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ClusterEnabled?: boolean;

  /**
   * <p>The name of the compute and memory capacity node type for each node in the replication group.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password)
   *             when issuing Redis commands.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  AuthTokenEnabled?: boolean;

  /**
   * <p>The date the auth token was last modified</p>
   */
  AuthTokenLastModifiedDate?: Date;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *          <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A flag that enables encryption at-rest when set to <code>true</code>.</p>
   *          <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code>
   *             after the cluster is created. To enable encryption at-rest on a cluster
   *             you must set <code>AtRestEncryptionEnabled</code> to <code>true</code>
   *             when you create a cluster.</p>
   *          <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  AtRestEncryptionEnabled?: boolean;

  /**
   * <p>The outpost ARNs of the replication group's member clusters.</p>
   */
  MemberClustersOutpostArns?: string[];

  /**
   * <p>The ID of the KMS key used to encrypt the disk in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the replication group.</p>
   */
  ARN?: string;

  /**
   * <p>The ID of the user group associated to the replication group.</p>
   */
  UserGroupIds?: string[];

  /**
   * <p>Returns the destination, format and type of the logs. </p>
   */
  LogDeliveryConfigurations?: LogDeliveryConfiguration[];

  /**
   * <p>The date and time when the cluster was created.</p>
   */
  ReplicationGroupCreateTime?: Date;

  /**
   * <p>Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.</p>
   */
  DataTiering?: DataTieringStatus | string;

  /**
   * <p> If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  NetworkType?: NetworkType | string;

  /**
   * <p>The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  IpDiscovery?: IpDiscovery | string;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p>
   */
  TransitEncryptionMode?: TransitEncryptionMode | string;
}

export interface CompleteMigrationResponse {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * <p>The designated replication group is not available for data migration.</p>
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
 * <p>Represents the input of a <code>CopySnapshotMessage</code> operation.</p>
 */
export interface CopySnapshotMessage {
  /**
   * <p>The name of an existing snapshot from which to make a copy.</p>
   */
  SourceSnapshotName: string | undefined;

  /**
   * <p>A name for the snapshot copy.
   *             ElastiCache does not permit overwriting a snapshot, therefore
   *             this name must be unique within its context - ElastiCache or an Amazon S3 bucket if exporting.</p>
   */
  TargetSnapshotName: string | undefined;

  /**
   * <p>The Amazon S3 bucket to which the snapshot is exported.
   *             This parameter is used only when exporting a snapshot for external access.</p>
   *          <p>When using this parameter to export a snapshot,
   *             be sure Amazon ElastiCache has the needed permissions to this S3 bucket.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the <i>Amazon ElastiCache User Guide</i>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting a Snapshot</a> in the <i>Amazon ElastiCache User Guide</i>.</p>
   */
  TargetBucket?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the target snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Node group (shard) configuration options.
 *             Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.</p>
 */
export interface NodeGroupConfiguration {
  /**
   * <p>Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these
   *             configuration values apply to.</p>
   */
  NodeGroupId?: string;

  /**
   * <p>A string that specifies the keyspace for a particular node group.
   *             Keyspaces range from 0 to 16,383.
   *             The string is in the format <code>startkey-endkey</code>.</p>
   *          <p>Example: <code>"0-3999"</code>
   *          </p>
   */
  Slots?: string;

  /**
   * <p>The number of read replica nodes in this node group (shard).</p>
   */
  ReplicaCount?: number;

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
   * <p>The outpost ARN of the primary node.</p>
   */
  PrimaryOutpostArn?: string;

  /**
   * <p>The outpost ARN of the node replicas.</p>
   */
  ReplicaOutpostArns?: string[];
}

/**
 * <p>Represents an individual cache node in a snapshot of a cluster.</p>
 */
export interface NodeSnapshot {
  /**
   * <p>A unique identifier for the source cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>A unique identifier for the source node group (shard).</p>
   */
  NodeGroupId?: string;

  /**
   * <p>The cache node identifier for the node in the source cluster.</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The configuration for the source node group (shard).</p>
   */
  NodeGroupConfiguration?: NodeGroupConfiguration;

  /**
   * <p>The size of the cache on the source cache node.</p>
   */
  CacheSize?: string;

  /**
   * <p>The date and time when the cache node was created in the source cluster.</p>
   */
  CacheNodeCreateTime?: Date;

  /**
   * <p>The date and time when the source node's metadata and cache data set was obtained for the snapshot.</p>
   */
  SnapshotCreateTime?: Date;
}

/**
 * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
 */
export interface Snapshot {
  /**
   * <p>The name of a snapshot.
   *             For an automatic snapshot, the name is system-generated.
   *             For a manual snapshot, this is the user-provided name.</p>
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
   * <p>The status of the snapshot. Valid values: <code>creating</code> | <code>available</code>
   *             | <code>restoring</code> | <code>copying</code> | <code>deleting</code>.</p>
   */
  SnapshotStatus?: string;

  /**
   * <p>Indicates whether the snapshot is from an automatic backup (<code>automated</code>)
   *             or was created manually (<code>manual</code>).</p>
   */
  SnapshotSource?: string;

  /**
   * <p>The name of the compute and memory capacity node type for the source cluster.</p>
   *          <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
   *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
   *                      <p>
   *                         <code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   * <p>The name of the cache engine (<code>memcached</code> or
   *             <code>redis</code>) used by the source cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the cache engine version that is used by the source cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The number of cache nodes in the source cluster.</p>
   *          <p>For clusters running Redis, this value must be 1.
   *             For clusters running Memcached, this value must be between 1 and 40.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>The name of the Availability Zone in which the source cluster is located.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the preferred outpost.</p>
   */
  PreferredOutpostArn?: string;

  /**
   * <p>The date and time when the source cluster was created.</p>
   */
  CacheClusterCreateTime?: Date;

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
   * <p> If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>For an automatic snapshot, the number of days for which ElastiCache retains the snapshot before deleting it.</p>
   *          <p>For manual snapshots, this field reflects the <code>SnapshotRetentionLimit</code> for the
   *             source cluster when the snapshot was created. This field is otherwise ignored:
   *             Manual snapshots do not expire, and can only be deleted using the <code>DeleteSnapshot</code>
   *             operation. </p>
   *          <p>
   *             <b>Important</b>
   *           If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range during which ElastiCache takes daily snapshots of the source cluster.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>The number of node groups (shards) in this snapshot.
   *             When restoring from a snapshot, the number of node groups (shards) in the snapshot and in the restored
   *             replication group must be the same.</p>
   */
  NumNodeGroups?: number;

  /**
   * <p>Indicates the status of automatic failover for the source Redis replication group.</p>
   */
  AutomaticFailover?: AutomaticFailoverStatus | string;

  /**
   * <p>A list of the cache nodes in the source cluster.</p>
   */
  NodeSnapshots?: NodeSnapshot[];

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the snapshot.</p>
   */
  ARN?: string;

  /**
   * <p>Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.</p>
   */
  DataTiering?: DataTieringStatus | string;
}

export interface CopySnapshotResult {
  /**
   * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * <p>The current state of the snapshot does not allow the requested operation to occur.</p>
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
 * <p>The request cannot be processed because it would exceed the maximum number of snapshots.</p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of clusters per customer.</p>
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

export enum AZMode {
  CROSS_AZ = "cross-az",
  SINGLE_AZ = "single-az",
}

/**
 * <p>Specifies the destination, format and type of the logs. </p>
 */
export interface LogDeliveryConfigurationRequest {
  /**
   * <p>Refers to <a href="https://redis.io/commands/slowlog">slow-log</a> or engine-log..</p>
   */
  LogType?: LogType | string;

  /**
   * <p>Specify either <code>cloudwatch-logs</code> or <code>kinesis-firehose</code> as the destination type.</p>
   */
  DestinationType?: DestinationType | string;

  /**
   * <p>Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.</p>
   */
  DestinationDetails?: DestinationDetails;

  /**
   * <p>Specifies either JSON or TEXT</p>
   */
  LogFormat?: LogFormat | string;

  /**
   * <p>Specify if log delivery is enabled. Default <code>true</code>.</p>
   */
  Enabled?: boolean;
}

export enum OutpostMode {
  CROSS_OUTPOST = "cross-outpost",
  SINGLE_OUTPOST = "single-outpost",
}

/**
 * <p>Represents the input of a CreateCacheCluster operation.</p>
 */
export interface CreateCacheClusterMessage {
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
   * <p>The ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group.</p>
   *          <p>If the specified replication group is Multi-AZ enabled and the Availability Zone is not specified, the cluster is created in Availability Zones that provide the best spread of read replicas across Availability Zones.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   */
  ReplicationGroupId?: string;

  /**
   * <p>Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or
   *             created across multiple Availability Zones in the cluster's region.</p>
   *          <p>This parameter is only supported for Memcached clusters.</p>
   *          <p>If the <code>AZMode</code> and <code>PreferredAvailabilityZones</code> are not specified,
   *             ElastiCache assumes <code>single-az</code> mode.</p>
   */
  AZMode?: AZMode | string;

  /**
   * <p>The EC2 Availability Zone in which the cluster is created.</p>
   *          <p>All nodes belonging to this cluster are placed in the preferred Availability Zone.
   *             If you want to create your nodes across multiple Availability Zones, use <code>PreferredAvailabilityZones</code>.</p>
   *          <p>Default: System chosen Availability Zone.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.</p>
   *          <p>This option is only supported on Memcached.</p>
   *          <note>
   *             <p>If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group.</p>
   *             <p>The number of Availability Zones listed must equal the value of <code>NumCacheNodes</code>.</p>
   *          </note>
   *          <p>If you want all the nodes in the same Availability Zone, use <code>PreferredAvailabilityZone</code> instead, or
   *             repeat the Availability Zone multiple times in the list.</p>
   *          <p>Default: System chosen Availability Zones.</p>
   */
  PreferredAvailabilityZones?: string[];

  /**
   * <p>The initial number of cache nodes that the cluster has.</p>
   *          <p>For clusters running Redis, this value must be 1.
   *     For clusters running Memcached, this value must be between 1 and 40.</p>
   *          <p>If you need more than 40 nodes for your Memcached cluster,
   *             please fill out the ElastiCache Limit Increase Request form at <a href="http://aws.amazon.com/contact-us/elasticache-node-limit-request/">http://aws.amazon.com/contact-us/elasticache-node-limit-request/</a>.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>The compute and memory capacity of the nodes in the node group (shard).</p>
   *          <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
   *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
   *                      <p>
   *                         <code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   * <p>The name of the cache engine to be used for this cluster.</p>
   *          <p>Valid values for this parameter are: <code>memcached</code> | <code>redis</code>
   *          </p>
   */
  Engine?: string;

  /**
   * <p>The version number of the cache engine to be used for this cluster.
   *             To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.</p>
   *          <p>
   *             <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version.
   *             If you want to use an earlier engine version,
   *             you must delete the existing cluster or replication group and create it anew with the earlier engine version. </p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of the parameter group to associate with this cluster.
   *             If this argument is omitted, the default parameter group for the specified engine is used.
   *             You cannot use any parameter group which has <code>cluster-enabled='yes'</code> when creating a cluster.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The name of the subnet group to be used for the cluster.</p>
   *          <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   *          <important>
   *             <p>If you're going to launch your cluster in an Amazon VPC,
   *                 you need to create a subnet group before you start creating a cluster.
   *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p>
   *          </important>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>A list of security group names to associate with this cluster.</p>
   *          <p>Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  CacheSecurityGroupNames?: string[];

  /**
   * <p>One or more VPC security groups associated with the cluster.</p>
   *          <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of tags to be added to this resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies
   *             a Redis RDB snapshot file stored in Amazon S3.
   *             The snapshot file is used to populate the node group (shard).
   *             The Amazon S3 object name in the ARN cannot contain any commas.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   *          <p>Example of an Amazon S3 ARN: <code>arn:aws:s3:::my_bucket/snapshot1.rdb</code>
   *          </p>
   */
  SnapshotArns?: string[];

  /**
   * <p>The name of a Redis snapshot from which to restore data into the new node group (shard).
   *             The snapshot status changes to <code>restoring</code> while the new node group (shard) is being created.</p>
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   */
  SnapshotName?: string;

  /**
   * <p>Specifies the weekly time range during which maintenance
   *             on the cluster is performed. It is specified as a range in
   *             the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *             maintenance window is a 60 minute period.
   *            </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The port number on which each of the cache nodes  accepts connections.</p>
   */
  Port?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic
   *           to which notifications are sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be the same as the cluster owner.</p>
   *          </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p> If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
   *             </p>
   */
  AutoMinorVersionUpgrade?: boolean;

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
   *          <note>
   *             <p>This parameter is only valid if the <code>Engine</code> parameter is <code>redis</code>.</p>
   *          </note>
   */
  SnapshotWindow?: string;

  /**
   * <p>
   *             <b>Reserved parameter.</b>
   *             The password used to access a password protected server.</p>
   *          <p>Password constraints:</p>
   *          <ul>
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
   *          <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>
   */
  AuthToken?: string;

  /**
   * <p>Specifies whether the nodes in the cluster are created in a single outpost or across multiple outposts.</p>
   */
  OutpostMode?: OutpostMode | string;

  /**
   * <p>The outpost ARN in which the cache cluster is created.</p>
   */
  PreferredOutpostArn?: string;

  /**
   * <p>The outpost ARNs in which the cache cluster is created.</p>
   */
  PreferredOutpostArns?: string[];

  /**
   * <p>Specifies the destination, format and type of the logs. </p>
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[];

  /**
   * <p>A flag that enables in-transit encryption when set to true.</p>
   *          <p> Only available when creating a cache cluster in an Amazon VPC using Memcached version 1.6.12 or later.</p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>. </p>
   */
  NetworkType?: NetworkType | string;

  /**
   * <p>The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  IpDiscovery?: IpDiscovery | string;
}

/**
 * <p>Represents an individual cache node within a cluster. Each cache node runs its own
 *             instance of the cluster's protocol-compliant caching software - either Memcached or
 *             Redis.</p>
 *          <p>The following node types are supported by ElastiCache.
 * 				Generally speaking, the current generation types provide more memory and computational power
 * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
 *          <ul>
 *             <li>
 *                <p>General purpose:</p>
 *                <ul>
 *                   <li>
 *                      <p>Current generation: </p>
 *                      <p>
 *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
 *
 * 					 	<code>cache.m6g.large</code>,
 * 							<code>cache.m6g.xlarge</code>,
 * 							<code>cache.m6g.2xlarge</code>,
 * 							<code>cache.m6g.4xlarge</code>,
 * 							<code>cache.m6g.8xlarge</code>,
 * 							<code>cache.m6g.12xlarge</code>,
 * 							<code>cache.m6g.16xlarge</code>
 *                      </p>
 *                      <note>
 *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
 *                         </p>
 *                      </note>
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
 *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
 *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
 *                      <p>
 *                         <code>cache.r6g.large</code>,
 * 							<code>cache.r6g.xlarge</code>,
 * 							<code>cache.r6g.2xlarge</code>,
 * 							<code>cache.r6g.4xlarge</code>,
 * 							<code>cache.r6g.8xlarge</code>,
 * 							<code>cache.r6g.12xlarge</code>,
 * 							<code>cache.r6g.16xlarge</code>
 *                      </p>
 *                      <note>
 *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
 *                         </p>
 *                      </note>
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
  /**
   * <p>The cache node identifier. A node ID is a numeric identifier (0001, 0002, etc.). The combination of cluster ID and node ID uniquely identifies every cache node used in a customer's Amazon account.</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The current state of this cache node, one of the following values: <code>available</code>, <code>creating</code>, <code>rebooting</code>, or <code>deleting</code>.</p>
   */
  CacheNodeStatus?: string;

  /**
   * <p>The date and time when the cache node was created.</p>
   */
  CacheNodeCreateTime?: Date;

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

  /**
   * <p>The Availability Zone where this node was created and now resides.</p>
   */
  CustomerAvailabilityZone?: string;

  /**
   * <p>The customer outpost ARN of the cache node.</p>
   */
  CustomerOutpostArn?: string;
}

/**
 * <p>Status of the cache parameter group.</p>
 */
export interface CacheParameterGroupStatus {
  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>A list of the cache node IDs which need to be rebooted for parameter changes to be applied.
   *             A node ID is a numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeIdsToReboot?: string[];
}

/**
 * <p>Represents a cluster's status within a particular cache security group.</p>
 */
export interface CacheSecurityGroupMembership {
  /**
   * <p>The name of the cache security group.</p>
   */
  CacheSecurityGroupName?: string;

  /**
   * <p>The membership status in the cache security group. The status changes when a cache security group is modified, or when the cache security groups assigned to a cluster are modified.</p>
   */
  Status?: string;
}

/**
 * <p>Describes a notification topic and its status.
 *             Notification topics are used for publishing ElastiCache events to subscribers
 *             using Amazon Simple Notification Service (SNS).</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   */
  TopicArn?: string;

  /**
   * <p>The current state of the topic.</p>
   */
  TopicStatus?: string;
}

/**
 * <p>A group of settings that are applied to the cluster in the future,
 *             or that are currently being applied.</p>
 */
export interface PendingModifiedValues {
  /**
   * <p>The new number of cache nodes for the cluster.</p>
   *          <p>For clusters running Redis, this value must be 1.
   *             For clusters running Memcached, this value must be between 1 and 40.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>A list of cache node IDs that are being removed (or will be removed) from the cluster.
   *             A node ID is a 4-digit numeric identifier (0001, 0002, etc.).</p>
   */
  CacheNodeIdsToRemove?: string[];

  /**
   * <p>The new cache engine version that the cluster  runs.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The cache node type that this cluster or replication group is scaled to.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The auth token status</p>
   */
  AuthTokenStatus?: AuthTokenUpdateStatus | string;

  /**
   * <p>The log delivery configurations being modified </p>
   */
  LogDeliveryConfigurations?: PendingLogDeliveryConfiguration[];

  /**
   * <p>A flag that enables in-transit encryption when set to true.</p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p>
   */
  TransitEncryptionMode?: TransitEncryptionMode | string;
}

/**
 * <p>Represents a single cache security group and its status.</p>
 */
export interface SecurityGroupMembership {
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

/**
 * <p>Contains all of the attributes of a specific cluster.</p>
 */
export interface CacheCluster {
  /**
   * <p>The user-supplied identifier of the cluster.
   *             This identifier is a unique key that identifies a cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>Represents a Memcached cluster endpoint which can be used by an application to connect to any node in the cluster.
   *             The configuration endpoint will always have <code>.cfg</code> in it.</p>
   *          <p>Example: <code>mem-3.9dvc4r<u>.cfg</u>.usw2.cache.amazonaws.com:11211</code>
   *          </p>
   */
  ConfigurationEndpoint?: Endpoint;

  /**
   * <p>The URL of the web page where you can download the latest ElastiCache client library.</p>
   */
  ClientDownloadLandingPage?: string;

  /**
   * <p>The name of the compute and memory capacity node type for the cluster.</p>
   *          <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
   *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
   *                      <p>
   *                         <code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   * <p>The name of the cache engine (<code>memcached</code> or
   *             <code>redis</code>) to be used for this cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the cache engine that is used in this cluster.</p>
   */
  EngineVersion?: string;

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
   * <p>The number of cache nodes in the cluster.</p>
   *          <p>For clusters running Redis, this value must be 1. For clusters running Memcached,
   *             this value must be between 1 and 40.</p>
   */
  NumCacheNodes?: number;

  /**
   * <p>The name of the Availability Zone in which the cluster is located or "Multiple"
   *             if the cache nodes are located in different Availability Zones.</p>
   */
  PreferredAvailabilityZone?: string;

  /**
   * <p>The outpost ARN in which the cache cluster is created.</p>
   */
  PreferredOutpostArn?: string;

  /**
   * <p>The date and time when the cluster was created.</p>
   */
  CacheClusterCreateTime?: Date;

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
   * <p>A group of settings that are applied to the cluster in the future,
   *             or that are currently being applied.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>Describes a notification topic and its status.
   *             Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS). </p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>A list of cache security group elements, composed of name and status sub-elements.</p>
   */
  CacheSecurityGroups?: CacheSecurityGroupMembership[];

  /**
   * <p>Status of the cache parameter group.</p>
   */
  CacheParameterGroup?: CacheParameterGroupStatus;

  /**
   * <p>The name of the cache subnet group associated with the cluster.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>A list of cache nodes that are members of the cluster.</p>
   */
  CacheNodes?: CacheNode[];

  /**
   * <p> If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>A list of VPC Security Groups associated with the cluster.</p>
   */
  SecurityGroups?: SecurityGroupMembership[];

  /**
   * <p>The replication group to which this cluster belongs.
   *             If this field is empty, the cluster is not associated with any replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5,  a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *          <important>
   *             <p>
   *           If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off.</p>
   *          </important>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache begins taking a
   *             daily snapshot of your cluster.</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   */
  SnapshotWindow?: string;

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password)
   *             when issuing Redis commands.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  AuthTokenEnabled?: boolean;

  /**
   * <p>The date the auth token was last modified</p>
   */
  AuthTokenLastModifiedDate?: Date;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *          <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A flag that enables encryption at-rest when set to <code>true</code>.</p>
   *          <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code>
   *             after the cluster is created. To enable at-rest encryption on a cluster
   *             you must set <code>AtRestEncryptionEnabled</code> to <code>true</code>
   *             when you create a cluster.</p>
   *          <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  AtRestEncryptionEnabled?: boolean;

  /**
   * <p>The ARN (Amazon Resource Name) of the cache cluster.</p>
   */
  ARN?: string;

  /**
   * <p>A boolean value indicating whether log delivery is enabled for the replication group.</p>
   */
  ReplicationGroupLogDeliveryEnabled?: boolean;

  /**
   * <p>Returns the destination, format and type of the logs.</p>
   */
  LogDeliveryConfigurations?: LogDeliveryConfiguration[];

  /**
   * <p>Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  NetworkType?: NetworkType | string;

  /**
   * <p>The network type associated with the cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  IpDiscovery?: IpDiscovery | string;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p>
   */
  TransitEncryptionMode?: TransitEncryptionMode | string;
}

export interface CreateCacheClusterResult {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: CacheCluster;
}

/**
 * <p>The requested cache node type is not available in the specified Availability Zone.
 *             For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
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
 * <p>The request cannot be processed because it would exceed the maximum number of cache security groups.</p>
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
 */
export interface CreateCacheParameterGroupMessage {
  /**
   * <p>A user-specified name for the cache parameter group.</p>
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>The name of the cache parameter group family that the cache parameter group can be used with.</p>
   *          <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *       <code>memcached1.6</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *       <code>redis6.x</code>
   *          </p>
   */
  CacheParameterGroupFamily: string | undefined;

  /**
   * <p>A user-specified description for the cache parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Represents the output of a <code>CreateCacheParameterGroup</code> operation.</p>
 */
export interface CacheParameterGroup {
  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The name of the cache parameter group family that this cache parameter group is compatible with.</p>
   *          <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *       <code>memcached1.6</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *       <code>redis6.x</code> |
   *     </p>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>The description for this cache parameter group.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the parameter group is associated with a Global datastore</p>
   */
  IsGlobal?: boolean;

  /**
   * <p>The ARN (Amazon Resource Name) of the cache parameter group.</p>
   */
  ARN?: string;
}

export interface CreateCacheParameterGroupResult {
  /**
   * <p>Represents the output of a <code>CreateCacheParameterGroup</code> operation.</p>
   */
  CacheParameterGroup?: CacheParameterGroup;
}

/**
 * <p>The current state of the cache parameter group does not allow the requested operation to occur.</p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of cache security groups.</p>
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
 */
export interface CreateCacheSecurityGroupMessage {
  /**
   * <p>A name for the cache security group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters. Cannot be the word "Default".</p>
   *          <p>Example: <code>mysecuritygroup</code>
   *          </p>
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>A description for the cache security group.</p>
   */
  Description: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

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
   */
  CacheSecurityGroup?: CacheSecurityGroup;
}

/**
 * <p>The requested cache subnet group name is already in use by an existing cache subnet group.</p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of cache subnet groups.</p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of subnets in a cache subnet group.</p>
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
 */
export interface CreateCacheSubnetGroupMessage {
  /**
   * <p>A name for the cache subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *          <p>Example: <code>mysubnetgroup</code>
   *          </p>
   */
  CacheSubnetGroupName: string | undefined;

  /**
   * <p>A description for the cache subnet group.</p>
   */
  CacheSubnetGroupDescription: string | undefined;

  /**
   * <p>A list of VPC subnet IDs for the cache subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Describes an Availability Zone in which the cluster is launched.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

/**
 * <p>The ID of the outpost subnet.</p>
 */
export interface SubnetOutpost {
  /**
   * <p>The outpost ARN of the subnet.</p>
   */
  SubnetOutpostArn?: string;
}

/**
 * <p>Represents the subnet associated with a cluster.
 *             This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.</p>
 */
export interface Subnet {
  /**
   * <p>The unique identifier for the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>The Availability Zone associated with the subnet.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>The outpost ARN of the subnet.</p>
   */
  SubnetOutpost?: SubnetOutpost;

  /**
   * <p>Either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  SupportedNetworkTypes?: (NetworkType | string)[];
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
 */
export interface CacheSubnetGroup {
  /**
   * <p>The name of the cache subnet group.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>The description of the cache subnet group.</p>
   */
  CacheSubnetGroupDescription?: string;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnets associated with the cache subnet group.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The ARN (Amazon Resource Name) of the cache subnet group.</p>
   */
  ARN?: string;

  /**
   * <p>Either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  SupportedNetworkTypes?: (NetworkType | string)[];
}

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
   */
  CacheSubnetGroup?: CacheSubnetGroup;
}

/**
 * <p>An invalid subnet identifier was specified.</p>
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
 * <p>At least one subnet ID does not match the other subnet IDs. This mismatch typically occurs when a
 *             user sets one subnet ID to a regional Availability Zone and a different one to an outpost. Or when a user sets the subnet ID to an Outpost when not subscribed on this service.</p>
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

export interface CreateGlobalReplicationGroupMessage {
  /**
   * <p>The suffix name of a Global datastore. Amazon ElastiCache automatically applies a prefix
   *             to the Global datastore ID when it is created. Each Amazon Region has its own prefix. For instance, a Global datastore ID created in the US-West-1 region will begin with "dsdfu" along with the suffix name you provide. The suffix, combined with the auto-generated prefix, guarantees uniqueness of the Global datastore name across multiple regions.  </p>
   *          <p>For a full list of Amazon Regions and their respective Global datastore iD prefixes, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastores-CLI.html">Using the Amazon CLI with Global datastores </a>.</p>
   */
  GlobalReplicationGroupIdSuffix: string | undefined;

  /**
   * <p>Provides details of the Global datastore</p>
   */
  GlobalReplicationGroupDescription?: string;

  /**
   * <p>The name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p>
   */
  PrimaryReplicationGroupId: string | undefined;
}

/**
 * <p>Indicates the slot configuration and global identifier for a slice group.</p>
 */
export interface GlobalNodeGroup {
  /**
   * <p>The name of the global node group</p>
   */
  GlobalNodeGroupId?: string;

  /**
   * <p>The keyspace for this node group</p>
   */
  Slots?: string;
}

/**
 * <p>A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group. </p>
 */
export interface GlobalReplicationGroupMember {
  /**
   * <p>The replication group id of the Global datastore member.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The Amazon region of the Global datastore member.</p>
   */
  ReplicationGroupRegion?: string;

  /**
   * <p>Indicates the role of the replication group, primary or secondary.</p>
   */
  Role?: string;

  /**
   * <p>Indicates whether automatic failover is enabled for the replication group.</p>
   */
  AutomaticFailover?: AutomaticFailoverStatus | string;

  /**
   * <p>The status of the membership of the replication group.</p>
   */
  Status?: string;
}

/**
 * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
 *         cluster automatically replicates updates to the secondary cluster.</p>
 *          <ul>
 *             <li>
 *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
 *             which is what you use to associate a secondary cluster.</p>
 *             </li>
 *          </ul>
 */
export interface GlobalReplicationGroup {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId?: string;

  /**
   * <p>The optional description of the Global datastore</p>
   */
  GlobalReplicationGroupDescription?: string;

  /**
   * <p>The status of the Global datastore</p>
   */
  Status?: string;

  /**
   * <p>The cache node type of the Global datastore</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The Elasticache engine. For Redis only.</p>
   */
  Engine?: string;

  /**
   * <p>The Elasticache Redis engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The replication groups that comprise the Global datastore.</p>
   */
  Members?: GlobalReplicationGroupMember[];

  /**
   * <p>A flag that indicates whether the Global datastore is cluster enabled.</p>
   */
  ClusterEnabled?: boolean;

  /**
   * <p>Indicates the slot configuration and global identifier for each slice group.</p>
   */
  GlobalNodeGroups?: GlobalNodeGroup[];

  /**
   * <p>A flag that enables using an <code>AuthToken</code> (password)
   *             when issuing Redis commands.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  AuthTokenEnabled?: boolean;

  /**
   * <p>A flag that enables in-transit encryption when set to true.</p>
   *          <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A flag that enables encryption at rest when set to <code>true</code>.</p>
   *          <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the replication
   *                 group is created.
   *                 To enable encryption at rest on a replication group you must set <code>AtRestEncryptionEnabled</code> to
   *                 <code>true</code> when you create the replication group. </p>
   *          <p>
   *             <b>Required:</b>
   *                 Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   */
  AtRestEncryptionEnabled?: boolean;

  /**
   * <p>The ARN (Amazon Resource Name) of the global replication group.</p>
   */
  ARN?: string;
}

export interface CreateGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
   *         cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
   *             which is what you use to associate a secondary cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalReplicationGroup?: GlobalReplicationGroup;
}

/**
 * <p>The Global datastore name already exists.</p>
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
 * <p>The specified service linked role (SLR) was not found.</p>
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
 * <p>Represents the input of a <code>CreateReplicationGroup</code> operation.</p>
 */
export interface CreateReplicationGroupMessage {
  /**
   * <p>The replication group identifier. This parameter is stored as a lowercase string.</p>
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
   * <p>A user-created description for the replication group.</p>
   */
  ReplicationGroupDescription: string | undefined;

  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId?: string;

  /**
   * <p>The identifier of the cluster that serves as the primary for this replication
   *             group. This cluster must already exist and have a status of <code>available</code>.</p>
   *          <p>This parameter is not required if <code>NumCacheClusters</code>,
   *             <code>NumNodeGroups</code>, or
   *             <code>ReplicasPerNodeGroup</code> is specified.</p>
   */
  PrimaryClusterId?: string;

  /**
   * <p>Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.</p>
   *          <p>
   *             <code>AutomaticFailoverEnabled</code> must be enabled for Redis (cluster mode enabled) replication groups.</p>
   *          <p>Default: false</p>
   */
  AutomaticFailoverEnabled?: boolean;

  /**
   * <p>A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html">Minimizing Downtime: Multi-AZ</a>.</p>
   */
  MultiAZEnabled?: boolean;

  /**
   * <p>The number of clusters this replication group initially has.</p>
   *          <p>This parameter is not used if there is more than one node group (shard).
   *             You should use <code>ReplicasPerNodeGroup</code> instead.</p>
   *          <p>If <code>AutomaticFailoverEnabled</code> is <code>true</code>, the value of this parameter must be at least 2.
   *             If <code>AutomaticFailoverEnabled</code> is <code>false</code> you can omit this parameter (it will default to 1), or you
   *             can explicitly set it to a value between 2 and 6.</p>
   *          <p>The maximum permitted value for <code>NumCacheClusters</code> is 6 (1 primary plus 5 replicas).</p>
   */
  NumCacheClusters?: number;

  /**
   * <p>A list of EC2 Availability Zones in which the replication group's clusters are created.
   *             The order of the Availability Zones in the list is the order in which clusters are allocated.
   *             The primary cluster is created in the first AZ in the list.</p>
   *          <p>This parameter is not used if there is more than one node group (shard).
   *             You should use <code>NodeGroupConfiguration</code> instead.</p>
   *          <note>
   *             <p>If you are creating your replication group in an Amazon VPC (recommended),
   *             you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.</p>
   *             <p>The number of Availability Zones listed must equal the value of <code>NumCacheClusters</code>.</p>
   *          </note>
   *          <p>Default: system chosen Availability Zones.</p>
   */
  PreferredCacheClusterAZs?: string[];

  /**
   * <p>An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group.
   *             For Redis (cluster mode disabled) either omit this parameter or set it to 1.</p>
   *          <p>Default: 1</p>
   */
  NumNodeGroups?: number;

  /**
   * <p>An optional parameter that specifies the number of replica nodes in each node group (shard).
   *             Valid values are 0 to 5.</p>
   */
  ReplicasPerNodeGroup?: number;

  /**
   * <p>A list of node group (shard) configuration options.
   *             Each node group (shard) configuration has the following members:
   *             <code>PrimaryAvailabilityZone</code>,
   *             <code>ReplicaAvailabilityZones</code>,
   *             <code>ReplicaCount</code>, and
   *             <code>Slots</code>.</p>
   *          <p>If you're creating a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group, you can use this parameter to
   *             individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a
   *             Redis (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter
   *             because you must specify the slots for each node group.</p>
   */
  NodeGroupConfiguration?: NodeGroupConfiguration[];

  /**
   * <p>The compute and memory capacity of the nodes in the node group (shard).</p>
   *          <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
   *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
   *                      <p>
   *                         <code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   * <p>The name of the cache engine to be used for the clusters in this replication group. The value must be set to <code>Redis</code>.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the cache engine to be used for the clusters in this replication group.
   *             To view the supported cache engine versions, use the <code>DescribeCacheEngineVersions</code> operation.</p>
   *          <p>
   *             <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>) in the <i>ElastiCache User Guide</i>,
   *             but you cannot downgrade to an earlier engine version.
   *             If you want to use an earlier engine version,
   *             you must delete the existing cluster or replication group and
   *             create it anew with the earlier engine version. </p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of the parameter group to associate with this replication group.
   *             If this argument is omitted, the default cache parameter group for the specified engine is
   *             used.</p>
   *          <p>If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group,
   *             we recommend that you specify the parameter group by name. </p>
   *          <ul>
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
   * <p>The name of the cache subnet group to be used for the replication group.</p>
   *          <important>
   *             <p>If you're going to launch your cluster in an Amazon VPC,
   *                 you need to create a subnet group before you start creating a cluster.
   *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html">Subnets and Subnet Groups</a>.</p>
   *          </important>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>A list of cache security group names to associate with this replication group.</p>
   */
  CacheSecurityGroupNames?: string[];

  /**
   * <p>One or more Amazon VPC security groups associated with this replication group.</p>
   *          <p>Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of tags to be added to this resource.
   *           Tags are comma-separated key,value pairs (e.g. Key=<code>myKey</code>, Value=<code>myKeyValue</code>. You can include multiple tags as shown following:
   *           Key=<code>myKey</code>, Value=<code>myKeyValue</code> Key=<code>mySecondKey</code>, Value=<code>mySecondKeyValue</code>. Tags on replication groups will be replicated to all nodes.</p>
   */
  Tags?: Tag[];

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
   * <p>Specifies the weekly time range during which maintenance
   *             on the cluster is performed. It is specified as a range in
   *             the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum
   *             maintenance window is a 60 minute period.
   *             Valid values for <code>ddd</code> are:</p>
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
   * <p>The port number on which each member of the replication group accepts connections.</p>
   */
  Port?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)
   *             topic to which notifications are sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be the same as the cluster owner.</p>
   *          </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p> If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

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
   * <p>
   *             <b>Reserved parameter.</b>
   *             The password used to access a password protected server.</p>
   *          <p>
   *             <code>AuthToken</code> can be specified only on replication groups where <code>TransitEncryptionEnabled</code> is
   *             <code>true</code>.</p>
   *          <important>
   *             <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>,
   *             an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p>
   *          </important>
   *          <p>Password constraints:</p>
   *          <ul>
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
   *          <p>For more information, see <a href="http://redis.io/commands/AUTH">AUTH password</a> at http://redis.io/commands/AUTH.</p>
   */
  AuthToken?: string;

  /**
   * <p>A flag that enables in-transit encryption when set to <code>true</code>.</p>
   *          <p>This parameter is valid only if the <code>Engine</code> parameter is <code>redis</code>,
   *             the <code>EngineVersion</code> parameter is <code>3.2.6</code>, <code>4.x</code> or later,
   *             and the cluster is being created in an Amazon VPC.</p>
   *          <p>If you enable in-transit encryption, you must also specify a value for
   *             <code>CacheSubnetGroup</code>.</p>
   *          <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <important>
   *             <p>For HIPAA compliance, you must specify <code>TransitEncryptionEnabled</code> as <code>true</code>,
   *             an <code>AuthToken</code>, and a <code>CacheSubnetGroup</code>.</p>
   *          </important>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A flag that enables encryption at rest when set to <code>true</code>.</p>
   *          <p>You cannot modify the value of <code>AtRestEncryptionEnabled</code> after the replication
   *             group is created.
   *             To enable encryption at rest on a replication group you must set <code>AtRestEncryptionEnabled</code> to
   *             <code>true</code> when you create the replication group. </p>
   *          <p>
   *             <b>Required:</b>
   *             Only available when creating a replication group in an Amazon VPC using redis version <code>3.2.6</code>, <code>4.x</code> or later.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  AtRestEncryptionEnabled?: boolean;

  /**
   * <p>The ID of the KMS key used to encrypt the disk in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The user group to associate with the replication group.</p>
   */
  UserGroupIds?: string[];

  /**
   * <p>Specifies the destination, format and type of the logs.</p>
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[];

  /**
   * <p>Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html">Data tiering</a>.</p>
   */
  DataTieringEnabled?: boolean;

  /**
   * <p>Must be either <code>ipv4</code> | <code>ipv6</code> | <code>dual_stack</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  NetworkType?: NetworkType | string;

  /**
   * <p>The network type you choose when creating a replication group, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  IpDiscovery?: IpDiscovery | string;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p>
   *          <p>When setting <code>TransitEncryptionEnabled</code> to <code>true</code>, you can set your <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request, to allow both encrypted and
   * unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can modify the value to <code>required</code> to allow encrypted connections only.</p>
   *          <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step process that requires you to first set the <code>TransitEncryptionMode</code> to <code>preferred</code> first, after that you can set  <code>TransitEncryptionMode</code> to <code>required</code>.
   * </p>
   */
  TransitEncryptionMode?: TransitEncryptionMode | string;
}

export interface CreateReplicationGroupResult {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * <p>The Global datastore does not exist</p>
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
 * <p>The request cannot be processed because it would exceed the maximum allowed number
 *             of node groups (shards) in a single replication group. The default maximum is 90</p>
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
 * <p>Represents the input of a <code>CreateSnapshot</code> operation.</p>
 */
export interface CreateSnapshotMessage {
  /**
   * <p>The identifier of an existing replication group. The snapshot is created from this replication group.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The identifier of an existing cluster. The snapshot is created from this cluster.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>A name for the snapshot being created.</p>
   */
  SnapshotName: string | undefined;

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

export interface CreateSnapshotResult {
  /**
   * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * <p>You attempted one of the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Creating a snapshot of a Redis cluster running on a <code>cache.t1.micro</code> cache
 *                     node.</p>
 *             </li>
 *             <li>
 *                <p>Creating a snapshot of a cluster that is running Memcached rather than Redis.</p>
 *             </li>
 *          </ul>
 *          <p>Neither of these are supported by ElastiCache.</p>
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

export enum InputAuthenticationType {
  IAM = "iam",
  NO_PASSWORD = "no-password-required",
  PASSWORD = "password",
}

/**
 * <p>Specifies the authentication mode to use.</p>
 */
export interface AuthenticationMode {
  /**
   * <p>Specifies the authentication type. Possible options are IAM authentication, password and no password.</p>
   */
  Type?: InputAuthenticationType | string;

  /**
   * <p>Specifies the passwords to use for authentication if <code>Type</code> is set to <code>password</code>.</p>
   */
  Passwords?: string[];
}

export interface CreateUserMessage {
  /**
   * <p>The ID of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The username of the user.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The current supported value is Redis. </p>
   */
  Engine: string | undefined;

  /**
   * <p>Passwords used for this user. You can create up to two passwords for each user.</p>
   */
  Passwords?: string[];

  /**
   * <p>Access permissions string used for this user.</p>
   */
  AccessString: string | undefined;

  /**
   * <p>Indicates a password is not required for this user.</p>
   */
  NoPasswordRequired?: boolean;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies how to authenticate the user.</p>
   */
  AuthenticationMode?: AuthenticationMode;
}

/**
 * <p>A user with this username already exists.</p>
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

export enum AuthenticationType {
  IAM = "iam",
  NO_PASSWORD = "no-password",
  PASSWORD = "password",
}

/**
 * <p>Indicates whether the user requires a password to authenticate.</p>
 */
export interface Authentication {
  /**
   * <p>Indicates whether the user requires a password to authenticate.</p>
   */
  Type?: AuthenticationType | string;

  /**
   * <p>The number of passwords belonging to the user. The maximum is two.</p>
   */
  PasswordCount?: number;
}

export interface User {
  /**
   * <p>The ID of the user.</p>
   */
  UserId?: string;

  /**
   * <p>The username of the user.</p>
   */
  UserName?: string;

  /**
   * <p>Indicates the user status. Can be "active", "modifying" or "deleting".</p>
   */
  Status?: string;

  /**
   * <p>The current supported value is Redis.</p>
   */
  Engine?: string;

  /**
   * <p>The minimum engine version required, which is Redis 6.0</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>Access permissions string used for this user.</p>
   */
  AccessString?: string;

  /**
   * <p>Returns a list of the user group IDs the user belongs to.</p>
   */
  UserGroupIds?: string[];

  /**
   * <p>Denotes whether the user requires a password to authenticate.</p>
   */
  Authentication?: Authentication;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  ARN?: string;
}

/**
 * <p>A user with this ID already exists.</p>
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

export interface CreateUserGroupMessage {
  /**
   * <p>The ID of the user group.</p>
   */
  UserGroupId: string | undefined;

  /**
   * <p>The current supported value is Redis. </p>
   */
  Engine: string | undefined;

  /**
   * <p>The list of user IDs that belong to the user group.</p>
   */
  UserIds?: string[];

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>You must add default user to a user group.</p>
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
 */
export interface UserGroupPendingChanges {
  /**
   * <p>The list of user IDs to remove.</p>
   */
  UserIdsToRemove?: string[];

  /**
   * <p>The list of user IDs to add.</p>
   */
  UserIdsToAdd?: string[];
}

export interface UserGroup {
  /**
   * <p>The ID of the user group.</p>
   */
  UserGroupId?: string;

  /**
   * <p>Indicates user group status. Can be "creating", "active", "modifying", "deleting".</p>
   */
  Status?: string;

  /**
   * <p>The current supported value is Redis. </p>
   */
  Engine?: string;

  /**
   * <p>The list of user IDs that belong to the user group.</p>
   */
  UserIds?: string[];

  /**
   * <p>The minimum engine version required, which is Redis 6.0</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>A list of updates being applied to the user group.</p>
   */
  PendingChanges?: UserGroupPendingChanges;

  /**
   * <p>A list of replication groups that the user group can access.</p>
   */
  ReplicationGroups?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the user group.</p>
   */
  ARN?: string;
}

/**
 * <p>The user group with this ID already exists.</p>
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

export interface DecreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The number of node groups (shards) that results from the modification of the shard configuration</p>
   */
  NodeGroupCount: number | undefined;

  /**
   * <p>If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRemove is a list of NodeGroupIds to remove from the cluster.
   *
   *             ElastiCache for Redis will attempt to remove all node groups listed by GlobalNodeGroupsToRemove from the cluster. </p>
   */
  GlobalNodeGroupsToRemove?: string[];

  /**
   * <p>If the value of NodeGroupCount is less than the current number of node groups (shards), then either NodeGroupsToRemove or NodeGroupsToRetain is required. GlobalNodeGroupsToRetain is a list of NodeGroupIds to retain from the cluster. ElastiCache for Redis will attempt to retain all node groups listed by GlobalNodeGroupsToRetain from the cluster.
   *
   *
   *              </p>
   */
  GlobalNodeGroupsToRetain?: string[];

  /**
   * <p>Indicates that the shard reconfiguration process begins immediately. At present, the only permitted value for this parameter is true. </p>
   */
  ApplyImmediately: boolean | undefined;
}

export interface DecreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
   *         cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
   *             which is what you use to associate a secondary cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalReplicationGroup?: GlobalReplicationGroup;
}

/**
 * <p>Node group (shard) configuration options when adding or removing replicas.
 *             Each node group (shard) configuration has the following members: NodeGroupId, NewReplicaCount, and PreferredAvailabilityZones. </p>
 */
export interface ConfigureShard {
  /**
   * <p>The 4-digit id for the node group you are configuring. For Redis (cluster mode disabled)
   *             replication groups, the node group id is always 0001. To find a Redis (cluster mode enabled)'s
   *             node group's (shard's) id, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/shard-find-id.html">Finding a Shard's Id</a>.</p>
   */
  NodeGroupId: string | undefined;

  /**
   * <p>The number of replicas you want  in this node group at the end of this operation.
   *             The maximum value for <code>NewReplicaCount</code> is 5.
   *             The minimum value depends upon the type of Redis replication group you are working with.</p>
   *          <p>The minimum number of replicas in a shard or replication group is:</p>
   *          <ul>
   *             <li>
   *                <p>Redis (cluster mode disabled)</p>
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
   *                <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p>
   *             </li>
   *          </ul>
   */
  NewReplicaCount: number | undefined;

  /**
   * <p>A list of <code>PreferredAvailabilityZone</code> strings that specify which availability zones the
   *             replication group's nodes are to be in. The nummber of <code>PreferredAvailabilityZone</code> values must
   *             equal the value of <code>NewReplicaCount</code> plus 1 to account for the primary node. If this member of
   *             <code>ReplicaConfiguration</code> is omitted, ElastiCache for Redis selects the availability zone for
   *             each of the replicas.</p>
   */
  PreferredAvailabilityZones?: string[];

  /**
   * <p>The outpost ARNs in which the cache cluster is created.</p>
   */
  PreferredOutpostArns?: string[];
}

export interface DecreaseReplicaCountMessage {
  /**
   * <p>The id of the replication group from which you want to remove replica nodes.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The number of read replica nodes you want at the completion of this operation.
   *             For Redis (cluster mode disabled) replication groups, this is the number of replica nodes in the
   *             replication group. For Redis (cluster mode enabled) replication groups, this is the number of
   *             replica nodes in each of the replication group's node groups.</p>
   *          <p>The minimum number of replicas in a shard or replication group is:</p>
   *          <ul>
   *             <li>
   *                <p>Redis (cluster mode disabled)</p>
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
   *                <p>Redis (cluster mode enabled): 0 (though you will not be able to failover to a replica if your primary node fails)</p>
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
   * <p>If <code>True</code>, the number of replica nodes is decreased immediately.
   *
   *             <code>ApplyImmediately=False</code> is not currently supported.</p>
   */
  ApplyImmediately: boolean | undefined;
}

export interface DecreaseReplicaCountResult {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * <p>The operation was not performed because no changes were required.</p>
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
 */
export interface DeleteCacheClusterMessage {
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

export interface DeleteCacheClusterResult {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: CacheCluster;
}

/**
 * <p>Represents the input of a <code>DeleteCacheParameterGroup</code> operation.</p>
 */
export interface DeleteCacheParameterGroupMessage {
  /**
   * <p>The name of the cache parameter group to delete.</p>
   *          <note>
   *             <p>The specified cache security group must not be associated with any clusters.</p>
   *          </note>
   */
  CacheParameterGroupName: string | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteCacheSecurityGroup</code> operation.</p>
 */
export interface DeleteCacheSecurityGroupMessage {
  /**
   * <p>The name of the cache security group to delete.</p>
   *          <note>
   *             <p>You cannot delete the default security group.</p>
   *          </note>
   */
  CacheSecurityGroupName: string | undefined;
}

/**
 * <p>The requested cache subnet group is currently in use.</p>
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
 */
export interface DeleteCacheSubnetGroupMessage {
  /**
   * <p>The name of the cache subnet group to delete.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   */
  CacheSubnetGroupName: string | undefined;
}

export interface DeleteGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The primary replication group is retained as a standalone replication group. </p>
   */
  RetainPrimaryReplicationGroup: boolean | undefined;
}

export interface DeleteGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
   *         cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
   *             which is what you use to associate a secondary cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalReplicationGroup?: GlobalReplicationGroup;
}

/**
 * <p>Represents the input of a <code>DeleteReplicationGroup</code> operation.</p>
 */
export interface DeleteReplicationGroupMessage {
  /**
   * <p>The identifier for the cluster to be deleted. This parameter is not case sensitive.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>If set to <code>true</code>, all of the read replicas are deleted,
   *             but the primary node is retained.</p>
   */
  RetainPrimaryCluster?: boolean;

  /**
   * <p>The name of a final node group (shard) snapshot.
   *             ElastiCache creates the snapshot from the primary node in the cluster,
   *             rather than one of the replicas; this is to ensure that it captures the freshest data.
   *             After the final snapshot is taken, the replication group is immediately deleted.</p>
   */
  FinalSnapshotIdentifier?: string;
}

export interface DeleteReplicationGroupResult {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * <p>Represents the input of a <code>DeleteSnapshot</code> operation.</p>
 */
export interface DeleteSnapshotMessage {
  /**
   * <p>The name of the snapshot to be deleted.</p>
   */
  SnapshotName: string | undefined;
}

export interface DeleteSnapshotResult {
  /**
   * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * <p>The default user assigned to the user group.</p>
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

export interface DeleteUserMessage {
  /**
   * <p>The ID of the user.</p>
   */
  UserId: string | undefined;
}

/**
 * <p>The user is not in active state.</p>
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

export interface DeleteUserGroupMessage {
  /**
   * <p>The ID of the user group.</p>
   */
  UserGroupId: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeCacheClusters</code> operation.</p>
 */
export interface CacheClusterMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of clusters. Each item in the list contains detailed information about one cluster.</p>
   */
  CacheClusters?: CacheCluster[];
}

/**
 * <p>Represents the input of a <code>DescribeCacheClusters</code> operation.</p>
 */
export interface DescribeCacheClustersMessage {
  /**
   * <p>The user-supplied cluster identifier. If this parameter is specified, only information
   *             about that specific cluster is returned. This parameter isn't case sensitive.</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>An optional flag that can be included in the <code>DescribeCacheCluster</code> request
   *             to retrieve information about the individual cache nodes.</p>
   */
  ShowCacheNodeInfo?: boolean;

  /**
   * <p>An optional flag that can be included in the <code>DescribeCacheCluster</code> request
   *             to show only nodes (API/CLI: clusters) that are not members of a replication group.
   *             In practice, this mean Memcached and single node Redis clusters.</p>
   */
  ShowCacheClustersNotInReplicationGroups?: boolean;
}

/**
 * <p>Provides all of the details about a particular cache engine version.</p>
 */
export interface CacheEngineVersion {
  /**
   * <p>The name of the cache engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the cache engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of the cache parameter group family associated with this cache engine.</p>
   *          <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *       <code>memcached1.6</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *       <code>redis6.x</code>
   *          </p>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>The description of the cache engine.</p>
   */
  CacheEngineDescription?: string;

  /**
   * <p>The description of the cache engine version.</p>
   */
  CacheEngineVersionDescription?: string;
}

/**
 * <p>Represents the output of a <a>DescribeCacheEngineVersions</a> operation.</p>
 */
export interface CacheEngineVersionMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of cache engine version details.
   *             Each element in the list contains detailed information about one cache engine version.</p>
   */
  CacheEngineVersions?: CacheEngineVersion[];
}

/**
 * <p>Represents the input of a <code>DescribeCacheEngineVersions</code> operation.</p>
 */
export interface DescribeCacheEngineVersionsMessage {
  /**
   * <p>The cache engine to return. Valid values: <code>memcached</code> | <code>redis</code>
   *          </p>
   */
  Engine?: string;

  /**
   * <p>The cache engine version to return.</p>
   *          <p>Example: <code>1.4.14</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of a specific cache parameter group family to return details for.</p>
   *          <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *       <code>memcached1.6</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *       <code>redis6.x</code> |
   *     <code>redis6.2</code> |
   *     <code>redis7</code>
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
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>If <code>true</code>, specifies that only the default version of the specified engine or engine
   *             and major version combination is to be returned.</p>
   */
  DefaultOnly?: boolean;
}

/**
 * <p>Represents the output of a <code>DescribeCacheParameterGroups</code> operation.</p>
 */
export interface CacheParameterGroupsMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of cache parameter groups. Each element in the list contains detailed information
   *             about one cache parameter group.</p>
   */
  CacheParameterGroups?: CacheParameterGroup[];
}

/**
 * <p>Represents the input of a <code>DescribeCacheParameterGroups</code> operation.</p>
 */
export interface DescribeCacheParameterGroupsMessage {
  /**
   * <p>The name of a specific cache parameter group to return details for.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>A value that applies only to a certain cache node type.</p>
 */
export interface CacheNodeTypeSpecificValue {
  /**
   * <p>The cache node type for which this value applies.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The value for the cache node type.</p>
   */
  Value?: string;
}

export enum ChangeType {
  immediate = "immediate",
  requires_reboot = "requires-reboot",
}

/**
 * <p>A parameter that has a different value for each cache node type it is applied to. For
 *             example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a
 *             larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.</p>
 */
export interface CacheNodeTypeSpecificParameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The source of the parameter value.</p>
   */
  Source?: string;

  /**
   * <p>The valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

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
}

/**
 * <p>Describes an individual setting that controls some aspect of ElastiCache behavior.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The source of the parameter.</p>
   */
  Source?: string;

  /**
   * <p>The valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

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
   * <p>Indicates whether a change to the parameter is applied immediately
   *             or requires a reboot for the change to be applied.
   *             You can force a reboot or wait until the next maintenance window's reboot.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a>.</p>
   */
  ChangeType?: ChangeType | string;
}

/**
 * <p>Represents the output of a <code>DescribeCacheParameters</code> operation.</p>
 */
export interface CacheParameterGroupDetails {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>Parameter</a> instances.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>A list of parameters specific to a particular cache node type.
   *             Each element in the list contains detailed information about one parameter.</p>
   */
  CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];
}

/**
 * <p>Represents the input of a <code>DescribeCacheParameters</code> operation.</p>
 */
export interface DescribeCacheParametersMessage {
  /**
   * <p>The name of a specific cache parameter group to return details for.</p>
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return.</p>
   *          <p>Valid values: <code>user</code> | <code>system</code> | <code>engine-default</code>
   *          </p>
   */
  Source?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.</p>
 */
export interface CacheSecurityGroupMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of cache security groups. Each element in the list contains detailed information about one group.</p>
   */
  CacheSecurityGroups?: CacheSecurityGroup[];
}

/**
 * <p>Represents the input of a <code>DescribeCacheSecurityGroups</code> operation.</p>
 */
export interface DescribeCacheSecurityGroupsMessage {
  /**
   * <p>The name of the cache security group to return details for.</p>
   */
  CacheSecurityGroupName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.</p>
 */
export interface CacheSubnetGroupMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of cache subnet groups. Each element in the list contains detailed information about one group.</p>
   */
  CacheSubnetGroups?: CacheSubnetGroup[];
}

/**
 * <p>Represents the input of a <code>DescribeCacheSubnetGroups</code> operation.</p>
 */
export interface DescribeCacheSubnetGroupsMessage {
  /**
   * <p>The name of the cache subnet group to return details for.</p>
   */
  CacheSubnetGroupName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>Represents the input of a <code>DescribeEngineDefaultParameters</code> operation.</p>
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * <p>The name of the cache parameter group family.</p>
   *          <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *       <code>memcached1.6</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *       <code>redis6.x</code> |
   *     <code>redis6.2</code> |
   *     <code>redis7</code>
   *          </p>
   */
  CacheParameterGroupFamily: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.</p>
 */
export interface EngineDefaults {
  /**
   * <p>Specifies the name of the cache parameter group family to which the engine default parameters apply.</p>
   *          <p>Valid values are:
   *     <code>memcached1.4</code> |
   *      <code>memcached1.5</code> |
   *       <code>memcached1.6</code> |
   *     <code>redis2.6</code> |
   *     <code>redis2.8</code> |
   *     <code>redis3.2</code> |
   *     <code>redis4.0</code> |
   *      <code>redis5.0</code> |
   *       <code>redis6.0</code> |
   *             <code>redis6.x</code>
   *          </p>
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

  /**
   * <p>A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.</p>
   */
  CacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];
}

export interface DescribeEngineDefaultParametersResult {
  /**
   * <p>Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.</p>
   */
  EngineDefaults?: EngineDefaults;
}

export enum SourceType {
  cache_cluster = "cache-cluster",
  cache_parameter_group = "cache-parameter-group",
  cache_security_group = "cache-security-group",
  cache_subnet_group = "cache-subnet-group",
  replication_group = "replication-group",
  user = "user",
  user_group = "user-group",
}

/**
 * <p>Represents the input of a <code>DescribeEvents</code> operation.</p>
 */
export interface DescribeEventsMessage {
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
   *          <p>
   *             <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p>
   *          <p>
   *             <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes worth of events to retrieve.</p>
   */
  Duration?: number;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>Represents a single occurrence of something interesting within the system.
 *             Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.</p>
 */
export interface Event {
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

  /**
   * <p>The text of the event.</p>
   */
  Message?: string;

  /**
   * <p>The date and time when the event occurred.</p>
   */
  Date?: Date;
}

/**
 * <p>Represents the output of a <code>DescribeEvents</code> operation.</p>
 */
export interface EventsMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of events. Each element in the list contains detailed information about one event.</p>
   */
  Events?: Event[];
}

export interface DescribeGlobalReplicationGroupsMessage {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. </p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>Returns the list of members that comprise the Global datastore.</p>
   */
  ShowMemberInfo?: boolean;
}

export interface DescribeGlobalReplicationGroupsResult {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. ></p>
   */
  Marker?: string;

  /**
   * <p>Indicates the slot configuration and global identifier for each slice group.</p>
   */
  GlobalReplicationGroups?: GlobalReplicationGroup[];
}

/**
 * <p>Represents the input of a <code>DescribeReplicationGroups</code> operation.</p>
 */
export interface DescribeReplicationGroupsMessage {
  /**
   * <p>The identifier for the replication group to be described. This parameter is not case sensitive.</p>
   *          <p>If you do not specify this parameter, information about all replication groups is returned.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the
   *             value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>Represents the output of a <code>DescribeReplicationGroups</code> operation.</p>
 */
export interface ReplicationGroupMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of replication groups. Each item in the list contains detailed information about one replication group.</p>
   */
  ReplicationGroups?: ReplicationGroup[];
}

/**
 * <p>Represents the input of a <code>DescribeReservedCacheNodes</code> operation.</p>
 */
export interface DescribeReservedCacheNodesMessage {
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

  /**
   * <p>The cache node type filter value.
   *             Use this parameter to show only those reservations matching the specified cache node type.</p>
   *          <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
   *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
   *                      <p>
   *                         <code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *          <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>The product description filter value. Use this parameter to show only those reservations matching the specified product description.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type filter value.
   *             Use this parameter to show only the available offerings matching the specified offering type.</p>
   *          <p>Valid values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization"|"All Upfront"|"Partial Upfront"| "No Upfront"</code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>Contains the specific price and frequency of a recurring charges for a reserved cache node,
 *             or for a reserved cache node offering.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The monetary amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

/**
 * <p>Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.</p>
 */
export interface ReservedCacheNode {
  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedCacheNodeId?: string;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedCacheNodesOfferingId?: string;

  /**
   * <p>The cache node type for the reserved cache nodes.</p>
   *          <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
   *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
   *                      <p>
   *                         <code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved cache node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly price charged for this reserved cache node.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The number of cache nodes that have been reserved.</p>
   */
  CacheNodeCount?: number;

  /**
   * <p>The description of the reserved cache node.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type of this reserved cache node.</p>
   */
  OfferingType?: string;

  /**
   * <p>The state of the reserved cache node.</p>
   */
  State?: string;

  /**
   * <p>The recurring price charged to run this reserved cache node.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The Amazon Resource Name (ARN) of the reserved cache node.</p>
   *          <p>Example: <code>arn:aws:elasticache:us-east-1:123456789012:reserved-instance:ri-2017-03-27-08-33-25-582</code>
   *          </p>
   */
  ReservationARN?: string;
}

/**
 * <p>Represents the output of a <code>DescribeReservedCacheNodes</code> operation.</p>
 */
export interface ReservedCacheNodeMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved cache nodes. Each element in the list contains detailed information about one node.</p>
   */
  ReservedCacheNodes?: ReservedCacheNode[];
}

/**
 * <p>Represents the input of a <code>DescribeReservedCacheNodesOfferings</code> operation.</p>
 */
export interface DescribeReservedCacheNodesOfferingsMessage {
  /**
   * <p>The offering identifier filter value.
   *             Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   *          <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   */
  ReservedCacheNodesOfferingId?: string;

  /**
   * <p>The cache node type filter value.
   *             Use this parameter to show only the available offerings matching the specified cache node type.</p>
   *          <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
   *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
   *                      <p>
   *                         <code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *          <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>The product description filter value.
   *             Use this parameter to show only the available offerings matching the specified product description.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type filter value.
   *             Use this parameter to show only the available offerings matching the specified offering type.</p>
   *          <p>Valid Values: <code>"Light Utilization"|"Medium Utilization"|"Heavy Utilization" |"All Upfront"|"Partial Upfront"| "No Upfront"</code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified <code>MaxRecords</code> value, a marker is included in the response so that
   *             the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20; maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request.
   *             Use this marker for pagination of results from this operation.
   *             If this parameter is specified, the response includes only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * <p>Describes all of the attributes of a reserved cache node offering.</p>
 */
export interface ReservedCacheNodesOffering {
  /**
   * <p>A unique identifier for the reserved cache node offering.</p>
   */
  ReservedCacheNodesOfferingId?: string;

  /**
   * <p>The cache node type for the reserved cache node.</p>
   *          <p>The following node types are supported by ElastiCache.
   * 				Generally speaking, the current generation types provide more memory and computational power
   * 			at lower cost when compared to their equivalent previous generation counterparts.</p>
   *          <ul>
   *             <li>
   *                <p>General purpose:</p>
   *                <ul>
   *                   <li>
   *                      <p>Current generation: </p>
   *                      <p>
   *                         <b>M6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward):
   *
   * 					 	<code>cache.m6g.large</code>,
   * 							<code>cache.m6g.xlarge</code>,
   * 							<code>cache.m6g.2xlarge</code>,
   * 							<code>cache.m6g.4xlarge</code>,
   * 							<code>cache.m6g.8xlarge</code>,
   * 							<code>cache.m6g.12xlarge</code>,
   * 							<code>cache.m6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   *                         <b>T4g node types</b> (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward):
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
   *                         <b>R6g node types</b> (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward).</p>
   *                      <p>
   *                         <code>cache.r6g.large</code>,
   * 							<code>cache.r6g.xlarge</code>,
   * 							<code>cache.r6g.2xlarge</code>,
   * 							<code>cache.r6g.4xlarge</code>,
   * 							<code>cache.r6g.8xlarge</code>,
   * 							<code>cache.r6g.12xlarge</code>,
   * 							<code>cache.r6g.16xlarge</code>
   *                      </p>
   *                      <note>
   *                         <p>For region availability, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion">Supported Node Types</a>
   *                         </p>
   *                      </note>
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
   * <p>The hourly price charged for this offering.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The cache engine used by the offering.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type.</p>
   */
  OfferingType?: string;

  /**
   * <p>The recurring price charged to run this reserved cache node.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * <p>Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.</p>
 */
export interface ReservedCacheNodesOfferingMessage {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved cache node offerings. Each element in the list contains detailed information about one offering.</p>
   */
  ReservedCacheNodesOfferings?: ReservedCacheNodesOffering[];
}

/**
 * <p>The requested cache node offering does not exist.</p>
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

export enum ServiceUpdateStatus {
  AVAILABLE = "available",
  CANCELLED = "cancelled",
  EXPIRED = "expired",
}

export interface DescribeServiceUpdatesMessage {
  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: (ServiceUpdateStatus | string)[];

  /**
   * <p>The maximum number of records to include in the response</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request.
   *            Use this marker for pagination of results from this operation. If this
   *            parameter is specified, the response includes only records beyond the marker, up to the
   *            value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export enum ServiceUpdateSeverity {
  CRITICAL = "critical",
  IMPORTANT = "important",
  LOW = "low",
  MEDIUM = "medium",
}

export enum ServiceUpdateType {
  SECURITY_UPDATE = "security-update",
}

/**
 * <p>An update that you can apply to your Redis clusters.</p>
 */
export interface ServiceUpdate {
  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The date when the service update is initially available</p>
   */
  ServiceUpdateReleaseDate?: Date;

  /**
   * <p>The date after which the service update is no longer available</p>
   */
  ServiceUpdateEndDate?: Date;

  /**
   * <p>The severity of the service update</p>
   */
  ServiceUpdateSeverity?: ServiceUpdateSeverity | string;

  /**
   * <p>The recommendend date to apply the service update in order to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   */
  ServiceUpdateRecommendedApplyByDate?: Date;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: ServiceUpdateStatus | string;

  /**
   * <p>Provides details of the service update</p>
   */
  ServiceUpdateDescription?: string;

  /**
   * <p>Reflects the nature of the service update</p>
   */
  ServiceUpdateType?: ServiceUpdateType | string;

  /**
   * <p>The Elasticache engine to which the update applies. Either Redis or Memcached</p>
   */
  Engine?: string;

  /**
   * <p>The Elasticache engine version to which the update applies. Either Redis or Memcached engine version</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates whether the service update will be automatically applied once the recommended apply-by date has expired. </p>
   */
  AutoUpdateAfterRecommendedApplyByDate?: boolean;

  /**
   * <p>The estimated length of time the service update will take</p>
   */
  EstimatedUpdateTime?: string;
}

export interface ServiceUpdatesMessage {
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

/**
 * <p>Represents the output of a <code>DescribeSnapshots</code> operation.</p>
 */
export interface DescribeSnapshotsListMessage {
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

/**
 * <p>Represents the input of a <code>DescribeSnapshotsMessage</code> operation.</p>
 */
export interface DescribeSnapshotsMessage {
  /**
   * <p>A user-supplied replication group identifier.
   *             If this parameter is specified, only snapshots associated with that specific replication group are described.</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>A user-supplied cluster identifier.
   *             If this parameter is specified, only snapshots associated with that specific cluster are described.</p>
   */
  CacheClusterId?: string;

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
   *          <p>Default: 50</p>
   *          <p>Constraints: minimum 20; maximum 50.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.</p>
   */
  ShowNodeGroupConfig?: boolean;
}

/**
 * <p>Filters update actions from the service updates that are in available status during the time range.</p>
 */
export interface TimeRangeFilter {
  /**
   * <p>The start time of the time range filter</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the time range filter</p>
   */
  EndTime?: Date;
}

export interface DescribeUpdateActionsMessage {
  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The replication group IDs</p>
   */
  ReplicationGroupIds?: string[];

  /**
   * <p>The cache cluster IDs</p>
   */
  CacheClusterIds?: string[];

  /**
   * <p>The Elasticache engine to which the update applies. Either Redis or Memcached </p>
   */
  Engine?: string;

  /**
   * <p>The status of the service update</p>
   */
  ServiceUpdateStatus?: (ServiceUpdateStatus | string)[];

  /**
   * <p>The range of time specified to search for service updates that are in available status</p>
   */
  ServiceUpdateTimeRange?: TimeRangeFilter;

  /**
   * <p>The status of the update action.</p>
   */
  UpdateActionStatus?: (UpdateActionStatus | string)[];

  /**
   * <p>Dictates whether to include node level update status in the response </p>
   */
  ShowNodeLevelUpdateStatus?: boolean;

  /**
   * <p>The maximum number of records to include in the response</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request.
   *            Use this marker for pagination of results from this operation. If this
   *            parameter is specified, the response includes only records beyond the marker, up to the
   *            value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export enum NodeUpdateInitiatedBy {
  CUSTOMER = "customer",
  SYSTEM = "system",
}

export enum NodeUpdateStatus {
  COMPLETE = "complete",
  IN_PROGRESS = "in-progress",
  NOT_APPLIED = "not-applied",
  STOPPED = "stopped",
  STOPPING = "stopping",
  WAITING_TO_START = "waiting-to-start",
}

/**
 * <p>The status of the service update on the cache node</p>
 */
export interface CacheNodeUpdateStatus {
  /**
   * <p>The node ID of the cache cluster</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The update status of the node</p>
   */
  NodeUpdateStatus?: NodeUpdateStatus | string;

  /**
   * <p>The deletion date of the node</p>
   */
  NodeDeletionDate?: Date;

  /**
   * <p>The start date of the update for a node</p>
   */
  NodeUpdateStartDate?: Date;

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
   * <p>The date when the NodeUpdateStatus was last modified></p>
   */
  NodeUpdateStatusModifiedDate?: Date;
}

/**
 * <p>The status of the service update on the node group member  </p>
 */
export interface NodeGroupMemberUpdateStatus {
  /**
   * <p>The cache cluster ID</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The node ID of the cache cluster</p>
   */
  CacheNodeId?: string;

  /**
   * <p>The update status of the node</p>
   */
  NodeUpdateStatus?: NodeUpdateStatus | string;

  /**
   * <p>The deletion date of the node</p>
   */
  NodeDeletionDate?: Date;

  /**
   * <p>The start date of the update for a node</p>
   */
  NodeUpdateStartDate?: Date;

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
   * <p>The date when the NodeUpdateStatus was last modified</p>
   */
  NodeUpdateStatusModifiedDate?: Date;
}

/**
 * <p>The status of the service update on the node group </p>
 */
export interface NodeGroupUpdateStatus {
  /**
   * <p>The ID of the node group</p>
   */
  NodeGroupId?: string;

  /**
   * <p>The status of the service update on the node group member</p>
   */
  NodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatus[];
}

export enum SlaMet {
  NA = "n/a",
  NO = "no",
  YES = "yes",
}

/**
 * <p>The status of the service update for a specific replication group</p>
 */
export interface UpdateAction {
  /**
   * <p>The ID of the replication group</p>
   */
  ReplicationGroupId?: string;

  /**
   * <p>The ID of the cache cluster</p>
   */
  CacheClusterId?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

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
   * <p>The recommended date to apply the service update to ensure compliance. For information on compliance, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-compliance.html#elasticache-compliance-self-service">Self-Service Security Updates for Compliance</a>.</p>
   */
  ServiceUpdateRecommendedApplyByDate?: Date;

  /**
   * <p>Reflects the nature of the service update  </p>
   */
  ServiceUpdateType?: ServiceUpdateType | string;

  /**
   * <p>The date that the service update is available to a replication group</p>
   */
  UpdateActionAvailableDate?: Date;

  /**
   * <p>The status of the update action</p>
   */
  UpdateActionStatus?: UpdateActionStatus | string;

  /**
   * <p>The progress of the service update on the replication group</p>
   */
  NodesUpdated?: string;

  /**
   * <p>The date when the UpdateActionStatus was last modified</p>
   */
  UpdateActionStatusModifiedDate?: Date;

  /**
   * <p>If yes, all nodes in the replication group have been updated by the recommended apply-by date. If no, at least one node in the replication group have not been updated by the recommended apply-by date. If N/A, the replication group was created after the
   *       recommended apply-by date.</p>
   */
  SlaMet?: SlaMet | string;

  /**
   * <p>The status of the service update on the node group</p>
   */
  NodeGroupUpdateStatus?: NodeGroupUpdateStatus[];

  /**
   * <p>The status of the service update on the cache node</p>
   */
  CacheNodeUpdateStatus?: CacheNodeUpdateStatus[];

  /**
   * <p>The estimated length of time for the update to complete</p>
   */
  EstimatedUpdateTime?: string;

  /**
   * <p>The Elasticache engine to which the update applies. Either Redis or Memcached</p>
   */
  Engine?: string;
}

export interface UpdateActionsMessage {
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

export interface DescribeUserGroupsMessage {
  /**
   * <p>The ID of the user group.</p>
   */
  UserGroupId?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. </p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. ></p>
   */
  Marker?: string;
}

export interface DescribeUserGroupsResult {
  /**
   * <p>Returns a list of user groups.</p>
   */
  UserGroups?: UserGroup[];

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. ></p>
   */
  Marker?: string;
}

/**
 * <p>Used to streamline results of a search based on the property being filtered.</p>
 */
export interface Filter {
  /**
   * <p>The property being filtered. For example, UserId.</p>
   */
  Name: string | undefined;

  /**
   * <p>The property values to filter on. For example, "user-123".</p>
   */
  Values: string[] | undefined;
}

export interface DescribeUsersMessage {
  /**
   * <p>The Redis engine. </p>
   */
  Engine?: string;

  /**
   * <p>The ID of the user.</p>
   */
  UserId?: string;

  /**
   * <p>Filter to determine the list of User IDs to return.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. </p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. ></p>
   */
  Marker?: string;
}

export interface DescribeUsersResult {
  /**
   * <p>A list of users.</p>
   */
  Users?: User[];

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. ></p>
   */
  Marker?: string;
}

export interface DisassociateGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The name of the secondary cluster you wish to remove from the Global datastore</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The Amazon region of secondary cluster you wish to remove from the Global datastore</p>
   */
  ReplicationGroupRegion: string | undefined;
}

export interface DisassociateGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
   *         cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
   *             which is what you use to associate a secondary cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalReplicationGroup?: GlobalReplicationGroup;
}

export interface FailoverGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The Amazon region of the primary cluster of the Global datastore</p>
   */
  PrimaryRegion: string | undefined;

  /**
   * <p>The name of the primary replication group</p>
   */
  PrimaryReplicationGroupId: string | undefined;
}

export interface FailoverGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
   *         cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
   *             which is what you use to associate a secondary cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalReplicationGroup?: GlobalReplicationGroup;
}

/**
 * <p>A list of <code>PreferredAvailabilityZones</code> objects that specifies
 *             the configuration of a node group in the resharded cluster.</p>
 */
export interface ReshardingConfiguration {
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

/**
 * <p>A list of the replication groups </p>
 */
export interface RegionalConfiguration {
  /**
   * <p>The name of the secondary cluster</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The Amazon region where the cluster is stored</p>
   */
  ReplicationGroupRegion: string | undefined;

  /**
   * <p>A list of <code>PreferredAvailabilityZones</code> objects that specifies the configuration of a node group in the resharded cluster. </p>
   */
  ReshardingConfiguration: ReshardingConfiguration[] | undefined;
}

export interface IncreaseNodeGroupsInGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>The number of node groups you wish to add</p>
   */
  NodeGroupCount: number | undefined;

  /**
   * <p>Describes the replication group IDs, the Amazon regions where they are stored and the shard configuration for each that comprise the Global datastore</p>
   */
  RegionalConfigurations?: RegionalConfiguration[];

  /**
   * <p>Indicates that the process begins immediately. At present, the only permitted value for this parameter is true.</p>
   */
  ApplyImmediately: boolean | undefined;
}

export interface IncreaseNodeGroupsInGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
   *         cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
   *             which is what you use to associate a secondary cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalReplicationGroup?: GlobalReplicationGroup;
}

export interface IncreaseReplicaCountMessage {
  /**
   * <p>The id of the replication group to which you want to add replica nodes.</p>
   */
  ReplicationGroupId: string | undefined;

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
   * <p>If <code>True</code>, the number of replica nodes is increased immediately.
   *
   *             <code>ApplyImmediately=False</code> is not currently supported.</p>
   */
  ApplyImmediately: boolean | undefined;
}

export interface IncreaseReplicaCountResult {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * <p>The KMS key supplied is not valid.</p>
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
 * <p>The input parameters for the <code>ListAllowedNodeTypeModifications</code> operation.</p>
 */
export interface ListAllowedNodeTypeModificationsMessage {
  /**
   * <p>The name of the cluster you want to scale up to a larger node instanced type.
   *             ElastiCache uses the cluster id to identify the current node type of this cluster and from that to create a list of node types you can scale up to.</p>
   *          <important>
   *             <p>You must provide a value for either the <code>CacheClusterId</code> or the
   *             <code>ReplicationGroupId</code>.</p>
   *          </important>
   */
  CacheClusterId?: string;

  /**
   * <p>The name of the replication group want to scale up to a larger node type.
   *         ElastiCache uses the replication group id to identify the current node type being used by
   *         this replication group, and from that to create a list of node types you can scale up to.</p>
   *          <important>
   *             <p>You must provide a value for either the <code>CacheClusterId</code> or the
   *             <code>ReplicationGroupId</code>.</p>
   *          </important>
   */
  ReplicationGroupId?: string;
}

/**
 * <p>The input parameters for the <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags,
   *             for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code>
   *             or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
   */
  ResourceName: string | undefined;
}

export enum AuthTokenUpdateStrategyType {
  DELETE = "DELETE",
  ROTATE = "ROTATE",
  SET = "SET",
}

/**
 * <p>Represents the input of a <code>ModifyCacheCluster</code> operation.</p>
 */
export interface ModifyCacheClusterMessage {
  /**
   * <p>The cluster identifier. This value is stored as a lowercase string.</p>
   */
  CacheClusterId: string | undefined;

  /**
   * <p>The number of cache nodes that the cluster should have.
   *             If the value for <code>NumCacheNodes</code> is greater than the sum of the number of current cache nodes and
   *             the number of cache nodes pending creation (which may be zero), more nodes are added.
   *             If the value is less than the number of existing cache nodes,  nodes are removed.
   *             If the value is equal to the number of current cache nodes,
   *              any pending add or remove requests are canceled.</p>
   *          <p>If you are removing cache nodes, you must
   *             use the <code>CacheNodeIdsToRemove</code> parameter to provide the IDs of the specific cache nodes to remove.</p>
   *          <p>For clusters running Redis, this value must be 1.
   *     For clusters running Memcached, this value must be between 1 and 40.</p>
   *          <note>
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
   * <p>A list of cache node IDs to be removed. A node ID is a numeric identifier (0001, 0002,
   *             etc.). This parameter is only valid when <code>NumCacheNodes</code> is less than the existing number
   *             of cache nodes. The number of cache node IDs supplied in this parameter must match the
   *             difference between the existing number of cache nodes in the cluster or pending cache nodes, whichever is
   *             greater, and the value of <code>NumCacheNodes</code> in the request.</p>
   *          <p>For example: If you have 3 active cache nodes, 7 pending cache nodes, and the number of cache nodes in this
   *         <code>ModifyCacheCluster</code> call is 5, you must list 2 (7 - 5) cache node IDs to remove.</p>
   */
  CacheNodeIdsToRemove?: string[];

  /**
   * <p>Specifies whether the new nodes in this Memcached cluster are all created in a
   *             single Availability Zone or created across multiple Availability Zones.</p>
   *          <p>Valid values: <code>single-az</code> | <code>cross-az</code>.</p>
   *          <p>This option is only supported for Memcached clusters.</p>
   *          <note>
   *             <p>You cannot specify <code>single-az</code> if the Memcached cluster already has cache nodes in different Availability Zones.
   *             If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone.</p>
   *             <p>Only newly created nodes are located in different Availability Zones.
   *                 </p>
   *          </note>
   */
  AZMode?: AZMode | string;

  /**
   * <note>
   *             <p>This option is only supported on Memcached clusters.</p>
   *          </note>
   *          <p>The list of Availability Zones where the new Memcached cache nodes are created.</p>
   *          <p>This parameter is only valid when <code>NumCacheNodes</code> in the request is greater
   *             than the sum of the number of active cache nodes and the number of cache nodes pending creation (which may be zero).
   *             The number of Availability Zones supplied in this list must match the cache nodes being added in this request.</p>
   *          <p>Scenarios:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Scenario 1:</b> You have 3 active nodes and wish to add 2 nodes.
   *                         Specify <code>NumCacheNodes=5</code> (3 + 2) and optionally specify two Availability Zones
   *                         for the two new nodes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Scenario 2:</b> You have 3 active nodes and 2 nodes pending creation
   *                         (from the scenario 1 call) and want to add 1 more node.
   *                         Specify <code>NumCacheNodes=6</code> ((3 + 2) + 1) and
   *                         optionally specify an Availability Zone for the new node.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Scenario 3:</b> You want to cancel all pending operations.
   *                         Specify <code>NumCacheNodes=3</code> to cancel all pending operations.</p>
   *             </li>
   *          </ul>
   *          <p>The Availability Zone placement of nodes pending creation cannot be modified. If you wish to cancel any nodes pending creation,
   *             add 0 nodes by setting <code>NumCacheNodes</code> to the number of current nodes.</p>
   *          <p>If <code>cross-az</code> is specified, existing Memcached nodes remain in their current Availability Zone.
   *             Only newly created nodes can be located in different Availability Zones.
   *             For guidance on how to move existing Memcached nodes to different Availability Zones, see the
   *             <b>Availability Zone Considerations</b> section of <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html">Cache Node Considerations for Memcached</a>.</p>
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
   * <p>A list of cache security group names to authorize on this cluster.
   *             This change is asynchronously applied as soon as possible.</p>
   *          <p>You can use this parameter only with clusters that are created outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be "Default".</p>
   */
  CacheSecurityGroupNames?: string[];

  /**
   * <p>Specifies the VPC Security Groups associated with the cluster.</p>
   *          <p>This parameter can be used only with clusters that are created in an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  SecurityGroupIds?: string[];

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
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be same as the cluster owner.</p>
   *          </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p>The name of the cache parameter group to apply to this cluster. This change is
   *             asynchronously applied as soon as possible for parameters when the
   *             <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The status of the Amazon SNS notification topic. Notifications are sent only if the
   *             status is <code>active</code>.</p>
   *          <p>Valid values: <code>active</code> | <code>inactive</code>
   *          </p>
   */
  NotificationTopicStatus?: string;

  /**
   * <p>If <code>true</code>, this parameter causes the modifications in this request and any
   *             pending modifications to be applied, asynchronously and as soon as possible, regardless
   *             of the <code>PreferredMaintenanceWindow</code> setting for the cluster.</p>
   *          <p>If <code>false</code>, changes to the cluster are applied on the next
   *             maintenance reboot, or the next failure reboot, whichever occurs first.</p>
   *          <important>
   *             <p>If you perform a <code>ModifyCacheCluster</code> before a pending modification is applied,
   *             the pending modification is replaced by the newer modification.</p>
   *          </important>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The upgraded version of the cache engine to be run on the cache nodes.</p>
   *          <p>
   *             <b>Important:</b> You can upgrade to a newer engine version
   *             (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version.
   *             If you want to use an earlier engine version,
   *             you must delete the existing cluster and create it anew with the earlier engine version. </p>
   */
  EngineVersion?: string;

  /**
   * <p> If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The number of days for which ElastiCache retains automatic cluster snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5,  a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *          <note>
   *             <p>If the value of <code>SnapshotRetentionLimit</code> is set to zero (0), backups are turned off.</p>
   *          </note>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache  begins taking a daily snapshot of
   *             your cluster. </p>
   */
  SnapshotWindow?: string;

  /**
   * <p>A valid cache node type that you want to scale this cluster up to.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update</code> parameter.
   *             Password constraints:</p>
   *          <ul>
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
   *          <ul>
   *             <li>
   *                <p>Rotate</p>
   *             </li>
   *             <li>
   *                <p>Set</p>
   *             </li>
   *          </ul>
   *          <p>
   *             For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a>
   *          </p>
   */
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | string;

  /**
   * <p>Specifies the destination, format and type of the logs.</p>
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[];

  /**
   * <p>The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  IpDiscovery?: IpDiscovery | string;
}

export interface ModifyCacheClusterResult {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: CacheCluster;
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
 */
export interface CacheParameterGroupNameMessage {
  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;
}

/**
 * <p>Describes a name-value pair that is used to update the value of a parameter.</p>
 */
export interface ParameterNameValue {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  ParameterValue?: string;
}

/**
 * <p>Represents the input of a <code>ModifyCacheParameterGroup</code> operation.</p>
 */
export interface ModifyCacheParameterGroupMessage {
  /**
   * <p>The name of the cache parameter group to modify.</p>
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.</p>
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * <p>Represents the input of a <code>ModifyCacheSubnetGroup</code> operation.</p>
 */
export interface ModifyCacheSubnetGroupMessage {
  /**
   * <p>The name for the cache subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *          <p>Example: <code>mysubnetgroup</code>
   *          </p>
   */
  CacheSubnetGroupName: string | undefined;

  /**
   * <p>A description of the cache subnet group.</p>
   */
  CacheSubnetGroupDescription?: string;

  /**
   * <p>The EC2 subnet IDs for the cache subnet group.</p>
   */
  SubnetIds?: string[];
}

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
   */
  CacheSubnetGroup?: CacheSubnetGroup;
}

/**
 * <p>The requested subnet is being used by another cache subnet group.</p>
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

export interface ModifyGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>This parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible. Modifications to Global
   *             Replication Groups cannot be requested to be applied in PreferredMaintenceWindow.
   *              </p>
   */
  ApplyImmediately: boolean | undefined;

  /**
   * <p>A valid cache node type that you want to scale this Global datastore to.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>The upgraded version of the cache engine to be run on the clusters in the Global datastore. </p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>A description of the Global datastore</p>
   */
  GlobalReplicationGroupDescription?: string;

  /**
   * <p>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure. </p>
   */
  AutomaticFailoverEnabled?: boolean;
}

export interface ModifyGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
   *         cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
   *             which is what you use to associate a secondary cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalReplicationGroup?: GlobalReplicationGroup;
}

/**
 * <p>Represents the input of a <code>ModifyReplicationGroups</code> operation.</p>
 */
export interface ModifyReplicationGroupMessage {
  /**
   * <p>The identifier of the replication group to modify.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>A description for the replication group. Maximum length is 255 characters.</p>
   */
  ReplicationGroupDescription?: string;

  /**
   * <p>For replication groups with a single primary,
   *             if this parameter is specified, ElastiCache promotes the specified cluster in the specified replication group to the primary role.
   *             The nodes of all other clusters in the replication group are read replicas.</p>
   */
  PrimaryClusterId?: string;

  /**
   * <p>The cluster ID that is used as the daily snapshot source for the replication group.
   *             This parameter cannot be set for Redis (cluster mode enabled) replication groups.</p>
   */
  SnapshottingClusterId?: string;

  /**
   * <p>Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   */
  AutomaticFailoverEnabled?: boolean;

  /**
   * <p>A flag to indicate MultiAZ is enabled.</p>
   */
  MultiAZEnabled?: boolean;

  /**
   * @deprecated
   *
   * <p>Deprecated. This parameter is not used.</p>
   */
  NodeGroupId?: string;

  /**
   * <p>A list of cache security group names to authorize for the clusters in this replication group. This change is asynchronously applied as soon as possible.</p>
   *          <p>This parameter can be used only with replication group containing clusters running outside of an Amazon Virtual Private Cloud (Amazon VPC).</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters. Must not be <code>Default</code>.</p>
   */
  CacheSecurityGroupNames?: string[];

  /**
   * <p>Specifies the VPC Security Groups associated with the clusters in the replication group.</p>
   *          <p>This parameter can be used only with replication group containing clusters running in
   *             an Amazon Virtual Private Cloud (Amazon VPC).</p>
   */
  SecurityGroupIds?: string[];

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
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications are sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be same as the replication group owner. </p>
   *          </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p>The name of the cache parameter group to apply to all of the clusters in this replication group.
   *             This change is asynchronously applied as soon as possible for parameters when the
   *             <code>ApplyImmediately</code> parameter is specified as <code>true</code> for this request.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * <p>The status of the Amazon SNS notification topic for the replication group.
   *             Notifications are sent only if the status is <code>active</code>.</p>
   *          <p>Valid values: <code>active</code> | <code>inactive</code>
   *          </p>
   */
  NotificationTopicStatus?: string;

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
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The upgraded version of the cache engine to be run on the clusters in the replication group.</p>
   *          <p>
   *             <b>Important:</b> You can upgrade to a newer engine version (see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement">Selecting a Cache Engine and Version</a>), but you cannot downgrade to an earlier engine version.
   *             If you want to use an earlier engine version,
   *             you must delete the existing replication group and create it anew with the earlier engine version. </p>
   */
  EngineVersion?: string;

  /**
   * <p> If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next auto minor version upgrade campaign. This parameter is disabled for previous versions.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The number of days for which ElastiCache retains automatic node group (shard) snapshots before
   *             deleting them. For example, if you set <code>SnapshotRetentionLimit</code> to 5, a
   *             snapshot that was taken today is retained for 5 days before being deleted.</p>
   *          <p>
   *             <b>Important</b> If the value of SnapshotRetentionLimit is set to zero (0),
   *             backups are turned off.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The daily time range (in UTC) during which ElastiCache  begins taking a daily snapshot of
   *             the node group (shard) specified by <code>SnapshottingClusterId</code>.</p>
   *          <p>Example: <code>05:00-09:00</code>
   *          </p>
   *          <p>If you do not specify this parameter, ElastiCache  automatically chooses an appropriate time range.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>A valid cache node type that you want to scale this replication group to.</p>
   */
  CacheNodeType?: string;

  /**
   * <p>Reserved parameter. The password used to access a password protected server. This parameter must be specified with the <code>auth-token-update-strategy </code>
   *             parameter.
   *             Password constraints:</p>
   *          <ul>
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
   *                 Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>Rotate</p>
   *             </li>
   *             <li>
   *                <p>Set</p>
   *             </li>
   *          </ul>
   *          <p>
   *                 For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html">Authenticating Users with Redis AUTH</a>
   *          </p>
   */
  AuthTokenUpdateStrategy?: AuthTokenUpdateStrategyType | string;

  /**
   * <p>The ID of the user group you are associating with the replication group.</p>
   */
  UserGroupIdsToAdd?: string[];

  /**
   * <p>The ID of the user group to disassociate from the replication group, meaning the users in the group no longer can access the replication group.</p>
   */
  UserGroupIdsToRemove?: string[];

  /**
   * <p>Removes the user group associated with this replication group.</p>
   */
  RemoveUserGroups?: boolean;

  /**
   * <p>Specifies the destination, format and type of the logs.</p>
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[];

  /**
   * <p>The network type you choose when modifying a cluster, either <code>ipv4</code> | <code>ipv6</code>. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the
   *             <a href="https://aws.amazon.com/ec2/nitro/">Nitro system</a>.</p>
   */
  IpDiscovery?: IpDiscovery | string;

  /**
   * <p>A flag that enables in-transit encryption when set to true. If you are enabling in-transit encryption for an existing cluster, you must also set <code>TransitEncryptionMode</code> to <code>preferred</code>.</p>
   */
  TransitEncryptionEnabled?: boolean;

  /**
   * <p>A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.</p>
   *          <p>You must set <code>TransitEncryptionEnabled</code> to <code>true</code>, for your existing cluster, and set <code>TransitEncryptionMode</code> to <code>preferred</code> in the same request to allow both encrypted and
   * unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can set the value to <code>required</code> to allow encrypted connections only.</p>
   *          <p>Setting <code>TransitEncryptionMode</code> to <code>required</code> is a two-step process that requires you to first set the <code>TransitEncryptionMode</code> to  <code>preferred</code> first, after that you can set  <code>TransitEncryptionMode</code> to <code>required</code>.
   * </p>
   */
  TransitEncryptionMode?: TransitEncryptionMode | string;
}

export interface ModifyReplicationGroupResult {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * <p>Represents the input for a <code>ModifyReplicationGroupShardConfiguration</code> operation.</p>
 */
export interface ModifyReplicationGroupShardConfigurationMessage {
  /**
   * <p>The name of the Redis (cluster mode enabled) cluster (replication group)
   *             on which the shards are to be configured.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The number of node groups (shards) that results from the modification of the
   *             shard configuration.</p>
   */
  NodeGroupCount: number | undefined;

  /**
   * <p>Indicates that the shard reconfiguration process begins immediately.
   *             At present, the only permitted value for this parameter is <code>true</code>.</p>
   *          <p>Value: true</p>
   */
  ApplyImmediately: boolean | undefined;

  /**
   * <p>Specifies the preferred availability zones for each node group in the cluster.
   *             If the value of <code>NodeGroupCount</code> is greater than the current number
   *             of node groups (shards), you can use this parameter to specify the preferred
   *             availability zones of the cluster's shards.
   *             If you omit this parameter ElastiCache selects availability zones for you.</p>
   *          <p>You can specify this parameter only if the value of <code>NodeGroupCount</code>
   *             is greater than the current number of node groups (shards).</p>
   */
  ReshardingConfiguration?: ReshardingConfiguration[];

  /**
   * <p>If the value of <code>NodeGroupCount</code> is less than the
   *             current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or
   *             <code>NodeGroupsToRetain</code> is required.
   *             <code>NodeGroupsToRemove</code> is a list of <code>NodeGroupId</code>s to remove
   *             from the cluster.</p>
   *          <p>ElastiCache for Redis will attempt to remove all node groups listed by <code>NodeGroupsToRemove</code>
   *             from the cluster.</p>
   */
  NodeGroupsToRemove?: string[];

  /**
   * <p>If the value of <code>NodeGroupCount</code> is less than the
   *             current number of node groups (shards), then either <code>NodeGroupsToRemove</code> or
   *             <code>NodeGroupsToRetain</code> is required.
   *             <code>NodeGroupsToRetain</code> is a list of <code>NodeGroupId</code>s to retain
   *             in the cluster.</p>
   *          <p>ElastiCache for Redis will attempt to remove all node groups except those listed by <code>NodeGroupsToRetain</code>
   *             from the cluster.</p>
   */
  NodeGroupsToRetain?: string[];
}

export interface ModifyReplicationGroupShardConfigurationResult {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

export interface ModifyUserMessage {
  /**
   * <p>The ID of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>Access permissions string used for this user.</p>
   */
  AccessString?: string;

  /**
   * <p>Adds additional user permissions to the access string.</p>
   */
  AppendAccessString?: string;

  /**
   * <p>The passwords belonging to the user. You are allowed up to two.</p>
   */
  Passwords?: string[];

  /**
   * <p>Indicates no password is required for the user.</p>
   */
  NoPasswordRequired?: boolean;

  /**
   * <p>Specifies how to authenticate the user.</p>
   */
  AuthenticationMode?: AuthenticationMode;
}

export interface ModifyUserGroupMessage {
  /**
   * <p>The ID of the user group.</p>
   */
  UserGroupId: string | undefined;

  /**
   * <p>The list of user IDs to add to the user group.</p>
   */
  UserIdsToAdd?: string[];

  /**
   * <p>The list of user IDs to remove from the user group.</p>
   */
  UserIdsToRemove?: string[];
}

/**
 * <p>Represents the input of a <code>PurchaseReservedCacheNodesOffering</code> operation.</p>
 */
export interface PurchaseReservedCacheNodesOfferingMessage {
  /**
   * <p>The ID of the reserved cache node offering to purchase.</p>
   *          <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   */
  ReservedCacheNodesOfferingId: string | undefined;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   *          <note>
   *             <p>The Reserved Cache Node ID is an unique customer-specified identifier to track this reservation.
   *                 If this parameter is not specified,
   *                 ElastiCache automatically generates an identifier for the reservation.</p>
   *          </note>
   *          <p>Example: myreservationID</p>
   */
  ReservedCacheNodeId?: string;

  /**
   * <p>The number of cache node instances to reserve.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   */
  CacheNodeCount?: number;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

export interface PurchaseReservedCacheNodesOfferingResult {
  /**
   * <p>Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.</p>
   */
  ReservedCacheNode?: ReservedCacheNode;
}

/**
 * <p>You already have a reservation with the given identifier.</p>
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
 * <p>The request cannot be processed because it would exceed the user's cache node quota.</p>
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

export interface RebalanceSlotsInGlobalReplicationGroupMessage {
  /**
   * <p>The name of the Global datastore</p>
   */
  GlobalReplicationGroupId: string | undefined;

  /**
   * <p>If <code>True</code>, redistribution is applied immediately.</p>
   */
  ApplyImmediately: boolean | undefined;
}

export interface RebalanceSlotsInGlobalReplicationGroupResult {
  /**
   * <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary
   *         cluster automatically replicates updates to the secondary cluster.</p>
   *          <ul>
   *             <li>
   *                <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore,
   *             which is what you use to associate a secondary cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalReplicationGroup?: GlobalReplicationGroup;
}

/**
 * <p>Represents the input of a <code>RebootCacheCluster</code> operation.</p>
 */
export interface RebootCacheClusterMessage {
  /**
   * <p>The cluster identifier. This parameter is stored as a lowercase string.</p>
   */
  CacheClusterId: string | undefined;

  /**
   * <p>A list of cache node IDs to reboot. A node ID is a numeric identifier (0001, 0002, etc.). To reboot an entire cluster, specify all of the cache node IDs.</p>
   */
  CacheNodeIdsToReboot: string[] | undefined;
}

export interface RebootCacheClusterResult {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: CacheCluster;
}

/**
 * <p>Represents the input of a <code>RemoveTagsFromResource</code> operation.</p>
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want the tags removed,
   *             for example <code>arn:aws:elasticache:us-west-2:0123456789:cluster:myCluster</code>
   *             or <code>arn:aws:elasticache:us-west-2:0123456789:snapshot:mySnapshot</code>.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Service Namespaces</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>A list of <code>TagKeys</code> identifying the tags you want removed from the named resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>The requested tag was not found on this resource.</p>
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
 */
export interface ResetCacheParameterGroupMessage {
  /**
   * <p>The name of the cache parameter group to reset.</p>
   */
  CacheParameterGroupName: string | undefined;

  /**
   * <p>If <code>true</code>,
   *             all parameters in the cache parameter group are reset to their default values.
   *             If <code>false</code>, only the parameters listed by <code>ParameterNameValues</code>
   *             are reset to their default values.</p>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>An array of parameter names to reset to their default values.
   *             If <code>ResetAllParameters</code> is <code>true</code>,
   *             do not use <code>ParameterNameValues</code>.
   *             If <code>ResetAllParameters</code> is <code>false</code>,
   *             you must specify the name of at least one parameter to reset.</p>
   */
  ParameterNameValues?: ParameterNameValue[];
}

/**
 * <p>The specified Amazon EC2 security group is not authorized for the specified cache security group.</p>
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
 * <p>Represents the input of a <code>RevokeCacheSecurityGroupIngress</code> operation.</p>
 */
export interface RevokeCacheSecurityGroupIngressMessage {
  /**
   * <p>The name of the cache security group to revoke ingress from.</p>
   */
  CacheSecurityGroupName: string | undefined;

  /**
   * <p>The name of the Amazon EC2 security group to revoke access from.</p>
   */
  EC2SecurityGroupName: string | undefined;

  /**
   * <p>The Amazon account number of the Amazon EC2 security group owner.
   *             Note that this is not the same thing as an Amazon access key ID - you must provide
   *             a valid Amazon account number for this parameter.</p>
   */
  EC2SecurityGroupOwnerId: string | undefined;
}

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
   */
  CacheSecurityGroup?: CacheSecurityGroup;
}

/**
 * <p>The targeted replication group is not available. </p>
 */
export class ReplicationGroupAlreadyUnderMigrationFault extends __BaseException {
  readonly name: "ReplicationGroupAlreadyUnderMigrationFault" = "ReplicationGroupAlreadyUnderMigrationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupAlreadyUnderMigrationFault, __BaseException>) {
    super({
      name: "ReplicationGroupAlreadyUnderMigrationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupAlreadyUnderMigrationFault.prototype);
  }
}

/**
 * <p>The endpoint from which data should be migrated.</p>
 */
export interface CustomerNodeEndpoint {
  /**
   * <p>The address of the node endpoint</p>
   */
  Address?: string;

  /**
   * <p>The port of the node endpoint</p>
   */
  Port?: number;
}

export interface StartMigrationMessage {
  /**
   * <p>The ID of the replication group to which data should be migrated.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>List of endpoints from which data should be migrated. For Redis (cluster mode disabled), list should have only one element.</p>
   */
  CustomerNodeEndpointList: CustomerNodeEndpoint[] | undefined;
}

export interface StartMigrationResponse {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * <p>The customer has exceeded the allowed rate of API calls.</p>
 */
export class APICallRateForCustomerExceededFault extends __BaseException {
  readonly name: "APICallRateForCustomerExceededFault" = "APICallRateForCustomerExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<APICallRateForCustomerExceededFault, __BaseException>) {
    super({
      name: "APICallRateForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, APICallRateForCustomerExceededFault.prototype);
  }
}

/**
 * <p>The node group specified by the <code>NodeGroupId</code> parameter could not be found.
 *             Please verify that the node group exists and that you spelled the <code>NodeGroupId</code> value correctly.</p>
 */
export class NodeGroupNotFoundFault extends __BaseException {
  readonly name: "NodeGroupNotFoundFault" = "NodeGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeGroupNotFoundFault, __BaseException>) {
    super({
      name: "NodeGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeGroupNotFoundFault.prototype);
  }
}

export interface TestFailoverMessage {
  /**
   * <p>The name of the replication group (console: cluster) whose automatic failover is being
   *             tested by this operation.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The name of the node group (called shard in the console) in this replication group on
   *             which automatic failover is to be tested.
   *             You may test automatic failover on up to 5 node groups in any rolling 24-hour period.</p>
   */
  NodeGroupId: string | undefined;
}

/**
 * <p>The <code>TestFailover</code> action is not available.</p>
 */
export class TestFailoverNotAvailableFault extends __BaseException {
  readonly name: "TestFailoverNotAvailableFault" = "TestFailoverNotAvailableFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TestFailoverNotAvailableFault, __BaseException>) {
    super({
      name: "TestFailoverNotAvailableFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TestFailoverNotAvailableFault.prototype);
  }
}

export interface TestFailoverResult {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsToResourceMessageFilterSensitiveLog = (obj: AddTagsToResourceMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagListMessageFilterSensitiveLog = (obj: TagListMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowedNodeTypeModificationsMessageFilterSensitiveLog = (
  obj: AllowedNodeTypeModificationsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeCacheSecurityGroupIngressMessageFilterSensitiveLog = (
  obj: AuthorizeCacheSecurityGroupIngressMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EC2SecurityGroupFilterSensitiveLog = (obj: EC2SecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheSecurityGroupFilterSensitiveLog = (obj: CacheSecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeCacheSecurityGroupIngressResultFilterSensitiveLog = (
  obj: AuthorizeCacheSecurityGroupIngressResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchApplyUpdateActionMessageFilterSensitiveLog = (obj: BatchApplyUpdateActionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessedUpdateActionFilterSensitiveLog = (obj: ProcessedUpdateAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedUpdateActionFilterSensitiveLog = (obj: UnprocessedUpdateAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateActionResultsMessageFilterSensitiveLog = (obj: UpdateActionResultsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchStopUpdateActionMessageFilterSensitiveLog = (obj: BatchStopUpdateActionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompleteMigrationMessageFilterSensitiveLog = (obj: CompleteMigrationMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlobalReplicationGroupInfoFilterSensitiveLog = (obj: GlobalReplicationGroupInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsDestinationDetailsFilterSensitiveLog = (obj: CloudWatchLogsDestinationDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseDestinationDetailsFilterSensitiveLog = (obj: KinesisFirehoseDestinationDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationDetailsFilterSensitiveLog = (obj: DestinationDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogDeliveryConfigurationFilterSensitiveLog = (obj: LogDeliveryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeGroupMemberFilterSensitiveLog = (obj: NodeGroupMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeGroupFilterSensitiveLog = (obj: NodeGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PendingLogDeliveryConfigurationFilterSensitiveLog = (obj: PendingLogDeliveryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotMigrationFilterSensitiveLog = (obj: SlotMigration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReshardingStatusFilterSensitiveLog = (obj: ReshardingStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserGroupsUpdateStatusFilterSensitiveLog = (obj: UserGroupsUpdateStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationGroupPendingModifiedValuesFilterSensitiveLog = (
  obj: ReplicationGroupPendingModifiedValues
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationGroupFilterSensitiveLog = (obj: ReplicationGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompleteMigrationResponseFilterSensitiveLog = (obj: CompleteMigrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopySnapshotMessageFilterSensitiveLog = (obj: CopySnapshotMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeGroupConfigurationFilterSensitiveLog = (obj: NodeGroupConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeSnapshotFilterSensitiveLog = (obj: NodeSnapshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotFilterSensitiveLog = (obj: Snapshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopySnapshotResultFilterSensitiveLog = (obj: CopySnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogDeliveryConfigurationRequestFilterSensitiveLog = (obj: LogDeliveryConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCacheClusterMessageFilterSensitiveLog = (obj: CreateCacheClusterMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheNodeFilterSensitiveLog = (obj: CacheNode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheParameterGroupStatusFilterSensitiveLog = (obj: CacheParameterGroupStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheSecurityGroupMembershipFilterSensitiveLog = (obj: CacheSecurityGroupMembership): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationConfigurationFilterSensitiveLog = (obj: NotificationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PendingModifiedValuesFilterSensitiveLog = (obj: PendingModifiedValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupMembershipFilterSensitiveLog = (obj: SecurityGroupMembership): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheClusterFilterSensitiveLog = (obj: CacheCluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCacheClusterResultFilterSensitiveLog = (obj: CreateCacheClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCacheParameterGroupMessageFilterSensitiveLog = (obj: CreateCacheParameterGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheParameterGroupFilterSensitiveLog = (obj: CacheParameterGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCacheParameterGroupResultFilterSensitiveLog = (obj: CreateCacheParameterGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCacheSecurityGroupMessageFilterSensitiveLog = (obj: CreateCacheSecurityGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCacheSecurityGroupResultFilterSensitiveLog = (obj: CreateCacheSecurityGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCacheSubnetGroupMessageFilterSensitiveLog = (obj: CreateCacheSubnetGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailabilityZoneFilterSensitiveLog = (obj: AvailabilityZone): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetOutpostFilterSensitiveLog = (obj: SubnetOutpost): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetFilterSensitiveLog = (obj: Subnet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheSubnetGroupFilterSensitiveLog = (obj: CacheSubnetGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCacheSubnetGroupResultFilterSensitiveLog = (obj: CreateCacheSubnetGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGlobalReplicationGroupMessageFilterSensitiveLog = (
  obj: CreateGlobalReplicationGroupMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlobalNodeGroupFilterSensitiveLog = (obj: GlobalNodeGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlobalReplicationGroupMemberFilterSensitiveLog = (obj: GlobalReplicationGroupMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlobalReplicationGroupFilterSensitiveLog = (obj: GlobalReplicationGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGlobalReplicationGroupResultFilterSensitiveLog = (obj: CreateGlobalReplicationGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReplicationGroupMessageFilterSensitiveLog = (obj: CreateReplicationGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateReplicationGroupResultFilterSensitiveLog = (obj: CreateReplicationGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotMessageFilterSensitiveLog = (obj: CreateSnapshotMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotResultFilterSensitiveLog = (obj: CreateSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthenticationModeFilterSensitiveLog = (obj: AuthenticationMode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserMessageFilterSensitiveLog = (obj: CreateUserMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthenticationFilterSensitiveLog = (obj: Authentication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserGroupMessageFilterSensitiveLog = (obj: CreateUserGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserGroupPendingChangesFilterSensitiveLog = (obj: UserGroupPendingChanges): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserGroupFilterSensitiveLog = (obj: UserGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecreaseNodeGroupsInGlobalReplicationGroupMessageFilterSensitiveLog = (
  obj: DecreaseNodeGroupsInGlobalReplicationGroupMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecreaseNodeGroupsInGlobalReplicationGroupResultFilterSensitiveLog = (
  obj: DecreaseNodeGroupsInGlobalReplicationGroupResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureShardFilterSensitiveLog = (obj: ConfigureShard): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecreaseReplicaCountMessageFilterSensitiveLog = (obj: DecreaseReplicaCountMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecreaseReplicaCountResultFilterSensitiveLog = (obj: DecreaseReplicaCountResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCacheClusterMessageFilterSensitiveLog = (obj: DeleteCacheClusterMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCacheClusterResultFilterSensitiveLog = (obj: DeleteCacheClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCacheParameterGroupMessageFilterSensitiveLog = (obj: DeleteCacheParameterGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCacheSecurityGroupMessageFilterSensitiveLog = (obj: DeleteCacheSecurityGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCacheSubnetGroupMessageFilterSensitiveLog = (obj: DeleteCacheSubnetGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGlobalReplicationGroupMessageFilterSensitiveLog = (
  obj: DeleteGlobalReplicationGroupMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGlobalReplicationGroupResultFilterSensitiveLog = (obj: DeleteGlobalReplicationGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReplicationGroupMessageFilterSensitiveLog = (obj: DeleteReplicationGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReplicationGroupResultFilterSensitiveLog = (obj: DeleteReplicationGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotMessageFilterSensitiveLog = (obj: DeleteSnapshotMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotResultFilterSensitiveLog = (obj: DeleteSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserMessageFilterSensitiveLog = (obj: DeleteUserMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserGroupMessageFilterSensitiveLog = (obj: DeleteUserGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheClusterMessageFilterSensitiveLog = (obj: CacheClusterMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCacheClustersMessageFilterSensitiveLog = (obj: DescribeCacheClustersMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheEngineVersionFilterSensitiveLog = (obj: CacheEngineVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheEngineVersionMessageFilterSensitiveLog = (obj: CacheEngineVersionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCacheEngineVersionsMessageFilterSensitiveLog = (obj: DescribeCacheEngineVersionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheParameterGroupsMessageFilterSensitiveLog = (obj: CacheParameterGroupsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCacheParameterGroupsMessageFilterSensitiveLog = (
  obj: DescribeCacheParameterGroupsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheNodeTypeSpecificValueFilterSensitiveLog = (obj: CacheNodeTypeSpecificValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheNodeTypeSpecificParameterFilterSensitiveLog = (obj: CacheNodeTypeSpecificParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterFilterSensitiveLog = (obj: Parameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheParameterGroupDetailsFilterSensitiveLog = (obj: CacheParameterGroupDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCacheParametersMessageFilterSensitiveLog = (obj: DescribeCacheParametersMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheSecurityGroupMessageFilterSensitiveLog = (obj: CacheSecurityGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCacheSecurityGroupsMessageFilterSensitiveLog = (obj: DescribeCacheSecurityGroupsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheSubnetGroupMessageFilterSensitiveLog = (obj: CacheSubnetGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCacheSubnetGroupsMessageFilterSensitiveLog = (obj: DescribeCacheSubnetGroupsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEngineDefaultParametersMessageFilterSensitiveLog = (
  obj: DescribeEngineDefaultParametersMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngineDefaultsFilterSensitiveLog = (obj: EngineDefaults): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEngineDefaultParametersResultFilterSensitiveLog = (
  obj: DescribeEngineDefaultParametersResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsMessageFilterSensitiveLog = (obj: DescribeEventsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFilterSensitiveLog = (obj: Event): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventsMessageFilterSensitiveLog = (obj: EventsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGlobalReplicationGroupsMessageFilterSensitiveLog = (
  obj: DescribeGlobalReplicationGroupsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGlobalReplicationGroupsResultFilterSensitiveLog = (
  obj: DescribeGlobalReplicationGroupsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplicationGroupsMessageFilterSensitiveLog = (obj: DescribeReplicationGroupsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicationGroupMessageFilterSensitiveLog = (obj: ReplicationGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedCacheNodesMessageFilterSensitiveLog = (obj: DescribeReservedCacheNodesMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecurringChargeFilterSensitiveLog = (obj: RecurringCharge): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedCacheNodeFilterSensitiveLog = (obj: ReservedCacheNode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedCacheNodeMessageFilterSensitiveLog = (obj: ReservedCacheNodeMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedCacheNodesOfferingsMessageFilterSensitiveLog = (
  obj: DescribeReservedCacheNodesOfferingsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedCacheNodesOfferingFilterSensitiveLog = (obj: ReservedCacheNodesOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedCacheNodesOfferingMessageFilterSensitiveLog = (obj: ReservedCacheNodesOfferingMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServiceUpdatesMessageFilterSensitiveLog = (obj: DescribeServiceUpdatesMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceUpdateFilterSensitiveLog = (obj: ServiceUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceUpdatesMessageFilterSensitiveLog = (obj: ServiceUpdatesMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsListMessageFilterSensitiveLog = (obj: DescribeSnapshotsListMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsMessageFilterSensitiveLog = (obj: DescribeSnapshotsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeRangeFilterFilterSensitiveLog = (obj: TimeRangeFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUpdateActionsMessageFilterSensitiveLog = (obj: DescribeUpdateActionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheNodeUpdateStatusFilterSensitiveLog = (obj: CacheNodeUpdateStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeGroupMemberUpdateStatusFilterSensitiveLog = (obj: NodeGroupMemberUpdateStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeGroupUpdateStatusFilterSensitiveLog = (obj: NodeGroupUpdateStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateActionFilterSensitiveLog = (obj: UpdateAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateActionsMessageFilterSensitiveLog = (obj: UpdateActionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserGroupsMessageFilterSensitiveLog = (obj: DescribeUserGroupsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserGroupsResultFilterSensitiveLog = (obj: DescribeUserGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUsersMessageFilterSensitiveLog = (obj: DescribeUsersMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUsersResultFilterSensitiveLog = (obj: DescribeUsersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateGlobalReplicationGroupMessageFilterSensitiveLog = (
  obj: DisassociateGlobalReplicationGroupMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateGlobalReplicationGroupResultFilterSensitiveLog = (
  obj: DisassociateGlobalReplicationGroupResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailoverGlobalReplicationGroupMessageFilterSensitiveLog = (
  obj: FailoverGlobalReplicationGroupMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailoverGlobalReplicationGroupResultFilterSensitiveLog = (
  obj: FailoverGlobalReplicationGroupResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReshardingConfigurationFilterSensitiveLog = (obj: ReshardingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegionalConfigurationFilterSensitiveLog = (obj: RegionalConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IncreaseNodeGroupsInGlobalReplicationGroupMessageFilterSensitiveLog = (
  obj: IncreaseNodeGroupsInGlobalReplicationGroupMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IncreaseNodeGroupsInGlobalReplicationGroupResultFilterSensitiveLog = (
  obj: IncreaseNodeGroupsInGlobalReplicationGroupResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IncreaseReplicaCountMessageFilterSensitiveLog = (obj: IncreaseReplicaCountMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IncreaseReplicaCountResultFilterSensitiveLog = (obj: IncreaseReplicaCountResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAllowedNodeTypeModificationsMessageFilterSensitiveLog = (
  obj: ListAllowedNodeTypeModificationsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceMessageFilterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCacheClusterMessageFilterSensitiveLog = (obj: ModifyCacheClusterMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCacheClusterResultFilterSensitiveLog = (obj: ModifyCacheClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CacheParameterGroupNameMessageFilterSensitiveLog = (obj: CacheParameterGroupNameMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterNameValueFilterSensitiveLog = (obj: ParameterNameValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCacheParameterGroupMessageFilterSensitiveLog = (obj: ModifyCacheParameterGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCacheSubnetGroupMessageFilterSensitiveLog = (obj: ModifyCacheSubnetGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCacheSubnetGroupResultFilterSensitiveLog = (obj: ModifyCacheSubnetGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyGlobalReplicationGroupMessageFilterSensitiveLog = (
  obj: ModifyGlobalReplicationGroupMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyGlobalReplicationGroupResultFilterSensitiveLog = (obj: ModifyGlobalReplicationGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyReplicationGroupMessageFilterSensitiveLog = (obj: ModifyReplicationGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyReplicationGroupResultFilterSensitiveLog = (obj: ModifyReplicationGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyReplicationGroupShardConfigurationMessageFilterSensitiveLog = (
  obj: ModifyReplicationGroupShardConfigurationMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyReplicationGroupShardConfigurationResultFilterSensitiveLog = (
  obj: ModifyReplicationGroupShardConfigurationResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyUserMessageFilterSensitiveLog = (obj: ModifyUserMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyUserGroupMessageFilterSensitiveLog = (obj: ModifyUserGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedCacheNodesOfferingMessageFilterSensitiveLog = (
  obj: PurchaseReservedCacheNodesOfferingMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedCacheNodesOfferingResultFilterSensitiveLog = (
  obj: PurchaseReservedCacheNodesOfferingResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebalanceSlotsInGlobalReplicationGroupMessageFilterSensitiveLog = (
  obj: RebalanceSlotsInGlobalReplicationGroupMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebalanceSlotsInGlobalReplicationGroupResultFilterSensitiveLog = (
  obj: RebalanceSlotsInGlobalReplicationGroupResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootCacheClusterMessageFilterSensitiveLog = (obj: RebootCacheClusterMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootCacheClusterResultFilterSensitiveLog = (obj: RebootCacheClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsFromResourceMessageFilterSensitiveLog = (obj: RemoveTagsFromResourceMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetCacheParameterGroupMessageFilterSensitiveLog = (obj: ResetCacheParameterGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeCacheSecurityGroupIngressMessageFilterSensitiveLog = (
  obj: RevokeCacheSecurityGroupIngressMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeCacheSecurityGroupIngressResultFilterSensitiveLog = (
  obj: RevokeCacheSecurityGroupIngressResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerNodeEndpointFilterSensitiveLog = (obj: CustomerNodeEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMigrationMessageFilterSensitiveLog = (obj: StartMigrationMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMigrationResponseFilterSensitiveLog = (obj: StartMigrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestFailoverMessageFilterSensitiveLog = (obj: TestFailoverMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestFailoverResultFilterSensitiveLog = (obj: TestFailoverResult): any => ({
  ...obj,
});
