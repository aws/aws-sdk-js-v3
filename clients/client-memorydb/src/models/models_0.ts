// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MemoryDBServiceException as __BaseException } from "./MemoryDBServiceException";

/**
 * <p>Returns the updates being applied to the ACL.</p>
 */
export interface ACLPendingChanges {
  /**
   * <p>A list of user names being removed from the ACL</p>
   */
  UserNamesToRemove?: string[];

  /**
   * <p>A list of users being added to the ACL</p>
   */
  UserNamesToAdd?: string[];
}

/**
 * <p>An Access Control List. You can authenticate users with Access Contol Lists.
 *
 *          ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.</p>
 */
export interface ACL {
  /**
   * <p>The name of the Access Control List</p>
   */
  Name?: string;

  /**
   * <p>Indicates ACL status. Can be "creating", "active", "modifying", "deleting".</p>
   */
  Status?: string;

  /**
   * <p>The list of user names that belong to the ACL.</p>
   */
  UserNames?: string[];

  /**
   * <p>The minimum engine version supported for the ACL</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>A list of updates being applied to the ACL.</p>
   */
  PendingChanges?: ACLPendingChanges;

  /**
   * <p>A list of clusters associated with the ACL.</p>
   */
  Clusters?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the ACL</p>
   */
  ARN?: string;
}

/**
 * <p></p>
 */
export class ACLAlreadyExistsFault extends __BaseException {
  readonly name: "ACLAlreadyExistsFault" = "ACLAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ACLAlreadyExistsFault, __BaseException>) {
    super({
      name: "ACLAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ACLAlreadyExistsFault.prototype);
  }
}

/**
 * <p></p>
 */
export class ACLNotFoundFault extends __BaseException {
  readonly name: "ACLNotFoundFault" = "ACLNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ACLNotFoundFault, __BaseException>) {
    super({
      name: "ACLNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ACLNotFoundFault.prototype);
  }
}

/**
 * <p></p>
 */
export class ACLQuotaExceededFault extends __BaseException {
  readonly name: "ACLQuotaExceededFault" = "ACLQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ACLQuotaExceededFault, __BaseException>) {
    super({
      name: "ACLQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ACLQuotaExceededFault.prototype);
  }
}

/**
 * <p>The status of the ACL update</p>
 */
export interface ACLsUpdateStatus {
  /**
   * <p>A list of ACLs pending to be applied.</p>
   */
  ACLToApply?: string;
}

/**
 * <p>A request to apply a service update</p>
 */
export interface ServiceUpdateRequest {
  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateNameToApply?: string;
}

export interface BatchUpdateClusterRequest {
  /**
   * <p>The cluster names to apply the updates.</p>
   */
  ClusterNames: string[] | undefined;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdate?: ServiceUpdateRequest;
}

export enum AZStatus {
  MultiAZ = "multiaz",
  SingleAZ = "singleaz",
}

/**
 * <p>Represents the information required for client programs to connect to the cluster and its nodes.</p>
 */
export interface Endpoint {
  /**
   * <p>The DNS hostname of the node.</p>
   */
  Address?: string;

  /**
   * <p>The port number that the engine is listening on.</p>
   */
  Port?: number;
}

export enum DataTieringStatus {
  FALSE = "false",
  TRUE = "true",
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
 * <p>The status of the online resharding</p>
 */
export interface ReshardingStatus {
  /**
   * <p>The status of the online resharding slot migration</p>
   */
  SlotMigration?: SlotMigration;
}

export enum ServiceUpdateStatus {
  COMPLETE = "complete",
  IN_PROGRESS = "in-progress",
  NOT_APPLIED = "available",
  SCHEDULED = "scheduled",
}

/**
 * <p>Update action that has yet to be processed for the corresponding apply/stop request</p>
 */
export interface PendingModifiedServiceUpdate {
  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the service update</p>
   */
  Status?: ServiceUpdateStatus | string;
}

/**
 * <p>A list of updates being applied to the cluster</p>
 */
export interface ClusterPendingUpdates {
  /**
   * <p>The status of an online resharding operation.</p>
   */
  Resharding?: ReshardingStatus;

  /**
   * <p>A list of ACLs associated with the cluster that are being updated</p>
   */
  ACLs?: ACLsUpdateStatus;

  /**
   * <p>A list of service updates being applied to the cluster</p>
   */
  ServiceUpdates?: PendingModifiedServiceUpdate[];
}

/**
 * <p>Represents a single security group and its status.</p>
 */
export interface SecurityGroupMembership {
  /**
   * <p>The identifier of the security group.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The status of the security group membership. The status changes whenever a security group is modified, or when the security groups assigned to a cluster are modified.</p>
   */
  Status?: string;
}

/**
 * <p>Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software.</p>
 */
export interface Node {
  /**
   * <p>The  node identifier. A node name is a numeric identifier (0001, 0002, etc.). The combination of cluster name, shard name and node name uniquely identifies every node used in a customer's Amazon account.</p>
   */
  Name?: string;

  /**
   * <p>The status of the service update on the node</p>
   */
  Status?: string;

  /**
   * <p>The Availability Zone in which the node resides</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The date and time when the node was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The hostname for connecting to this node.</p>
   */
  Endpoint?: Endpoint;
}

/**
 * <p>Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.</p>
 */
export interface Shard {
  /**
   * <p>The name of the shard</p>
   */
  Name?: string;

  /**
   * <p>The current state of this replication group - creating, available, modifying, deleting.</p>
   */
  Status?: string;

  /**
   * <p>The keyspace for this shard.</p>
   */
  Slots?: string;

  /**
   * <p>A list containing information about individual nodes within the shard</p>
   */
  Nodes?: Node[];

  /**
   * <p>The number of nodes in the shard</p>
   */
  NumberOfNodes?: number;
}

/**
 * <p>Contains all of the attributes of a specific cluster.</p>
 */
export interface Cluster {
  /**
   * <p>The user-supplied name of the cluster. This identifier is a unique key that identifies a cluster.</p>
   */
  Name?: string;

  /**
   * <p>A description of the cluster</p>
   */
  Description?: string;

  /**
   * <p>The status of the cluster. For example, Available, Updating, Creating.</p>
   */
  Status?: string;

  /**
   * <p>A group of settings that are currently being applied.</p>
   */
  PendingUpdates?: ClusterPendingUpdates;

  /**
   * <p>The number of shards in the cluster</p>
   */
  NumberOfShards?: number;

  /**
   * <p>A list of shards that are members of the cluster.</p>
   */
  Shards?: Shard[];

  /**
   * <p>Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).</p>
   */
  AvailabilityMode?: AZStatus | string;

  /**
   * <p>The cluster's configuration endpoint</p>
   */
  ClusterEndpoint?: Endpoint;

  /**
   * <p>The cluster's node type</p>
   */
  NodeType?: string;

  /**
   * <p>The Redis engine version used by the cluster</p>
   */
  EngineVersion?: string;

  /**
   * <p>The Redis engine patch version used by the cluster</p>
   */
  EnginePatchVersion?: string;

  /**
   * <p>The name of the parameter group used by the cluster</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of the parameter group used by the cluster, for example 'active' or 'applying'.</p>
   */
  ParameterGroupStatus?: string;

  /**
   * <p>A list of security groups used by the cluster</p>
   */
  SecurityGroups?: SecurityGroupMembership[];

  /**
   * <p>The name of the subnet group used by the cluster</p>
   */
  SubnetGroupName?: string;

  /**
   * <p>A flag to indicate if In-transit encryption is enabled</p>
   */
  TLSEnabled?: boolean;

  /**
   * <p>The ID of the KMS key used to encrypt the cluster</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS notification topic</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The SNS topic must be in Active status to receive notifications</p>
   */
  SnsTopicStatus?: string;

  /**
   * <p>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. </p>
   */
  MaintenanceWindow?: string;

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.
   *
   *          Example: 05:00-09:00
   *
   *          If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>The name of the Access Control List associated with this cluster.</p>
   */
  ACLName?: string;

  /**
   * <p>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   */
  DataTiering?: DataTieringStatus | string;
}

/**
 * <p>A cluster whose updates have failed</p>
 */
export interface UnprocessedCluster {
  /**
   * <p>The name of the cluster</p>
   */
  ClusterName?: string;

  /**
   * <p>The error type associated with the update failure</p>
   */
  ErrorType?: string;

  /**
   * <p>The error message associated with the update failure</p>
   */
  ErrorMessage?: string;
}

export interface BatchUpdateClusterResponse {
  /**
   * <p>The list of clusters that have been updated.</p>
   */
  ProcessedClusters?: Cluster[];

  /**
   * <p>The list of clusters where updates have not been applied.</p>
   */
  UnprocessedClusters?: UnprocessedCluster[];
}

/**
 * <p></p>
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
 * <p></p>
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
 * <p>A tag that can be added to an MemoryDB resource. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your MemoryDB resources.
 *          When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. A tag with a null Value is permitted. For more information, see
 *          <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging-resources.html">Tagging your MemoryDB resources</a>
 *          </p>
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

export interface CopySnapshotRequest {
  /**
   * <p>The name of an existing snapshot from which to make a copy.</p>
   */
  SourceSnapshotName: string | undefined;

  /**
   * <p>A name for the snapshot copy. MemoryDB does not permit overwriting a snapshot, therefore this name must be unique within its context - MemoryDB or an Amazon S3 bucket if exporting.</p>
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
 * <p>Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.</p>
 */
export interface ShardConfiguration {
  /**
   * <p>A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format startkey-endkey.</p>
   */
  Slots?: string;

  /**
   * <p>The number of read replica nodes in this shard.</p>
   */
  ReplicaCount?: number;
}

/**
 * <p>Provides details of a shard in a snapshot</p>
 */
export interface ShardDetail {
  /**
   * <p>The name of the shard</p>
   */
  Name?: string;

  /**
   * <p>The configuration details of the shard</p>
   */
  Configuration?: ShardConfiguration;

  /**
   * <p>The size of the shard's snapshot</p>
   */
  Size?: string;

  /**
   * <p>The date and time that the shard's snapshot was created</p>
   */
  SnapshotCreationTime?: Date;
}

/**
 * <p>A list of cluster configuration options. </p>
 */
export interface ClusterConfiguration {
  /**
   * <p>The name of the cluster</p>
   */
  Name?: string;

  /**
   * <p>The description of the cluster configuration</p>
   */
  Description?: string;

  /**
   * <p>The node type used for the cluster</p>
   */
  NodeType?: string;

  /**
   * <p>The Redis engine version used by the cluster</p>
   */
  EngineVersion?: string;

  /**
   * <p>The specified maintenance window for the cluster</p>
   */
  MaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS notification topic for the cluster</p>
   */
  TopicArn?: string;

  /**
   * <p>The port used by the cluster</p>
   */
  Port?: number;

  /**
   * <p>The name of parameter group used by the cluster</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The name of the subnet group used by the cluster</p>
   */
  SubnetGroupName?: string;

  /**
   * <p>The ID of the VPC the cluster belongs to</p>
   */
  VpcId?: string;

  /**
   * <p>The snapshot retention limit set by the cluster</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The snapshot window set by the cluster</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>The number of shards in the cluster</p>
   */
  NumShards?: number;

  /**
   * <p>The list of shards in the cluster</p>
   */
  Shards?: ShardDetail[];
}

/**
 * <p>Represents a copy of an entire cluster as of the time when the snapshot was taken.</p>
 */
export interface Snapshot {
  /**
   * <p>The name of the snapshot</p>
   */
  Name?: string;

  /**
   * <p>The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.</p>
   */
  Status?: string;

  /**
   * <p>Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).</p>
   */
  Source?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the snapshot.</p>
   */
  ARN?: string;

  /**
   * <p>The configuration of the cluster from which the snapshot was taken</p>
   */
  ClusterConfiguration?: ClusterConfiguration;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   */
  DataTiering?: DataTieringStatus | string;
}

export interface CopySnapshotResponse {
  /**
   * <p>Represents a copy of an entire cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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

export interface CreateACLRequest {
  /**
   * <p>The name of the Access Control List.</p>
   */
  ACLName: string | undefined;

  /**
   * <p>The list of users that belong to the Access Control List.</p>
   */
  UserNames?: string[];

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

export interface CreateACLResponse {
  /**
   * <p>The newly-created Access Control List.</p>
   */
  ACL?: ACL;
}

/**
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
 */
export class ClusterAlreadyExistsFault extends __BaseException {
  readonly name: "ClusterAlreadyExistsFault" = "ClusterAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterAlreadyExistsFault.prototype);
  }
}

/**
 * <p></p>
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

export interface CreateClusterRequest {
  /**
   * <p>The name of the cluster. This value must be unique as it also serves as the cluster identifier.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>The compute and memory capacity of the nodes in the cluster.</p>
   */
  NodeType: string | undefined;

  /**
   * <p>The name of the parameter group associated with the cluster.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>An optional description of the cluster.</p>
   */
  Description?: string;

  /**
   * <p>The number of shards the cluster will contain. The default value is 1. </p>
   */
  NumShards?: number;

  /**
   * <p>The number of replicas to apply to each shard. The default value is 1. The maximum is 5. </p>
   */
  NumReplicasPerShard?: number;

  /**
   * <p>The name of the subnet group to be used for the cluster.</p>
   */
  SubnetGroupName?: string;

  /**
   * <p>A list of security group names to associate with this cluster.</p>
   */
  SecurityGroupIds?: string[];

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
   */
  MaintenanceWindow?: string;

  /**
   * <p>The port number on which each of the nodes accepts connections.</p>
   */
  Port?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A flag to enable in-transit encryption on the cluster.</p>
   */
  TLSEnabled?: boolean;

  /**
   * <p>The ID of the KMS key used to encrypt the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.</p>
   */
  SnapshotArns?: string[];

  /**
   * <p>The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.</p>
   */
  SnapshotName?: string;

  /**
   * <p>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.</p>
   *          <p>    Example: 05:00-09:00</p>
   *          <p>    If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>The name of the Access Control List to associate with the cluster.</p>
   */
  ACLName: string | undefined;

  /**
   * <p>The version number of the Redis engine to be used for the cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   */
  DataTiering?: boolean;
}

export interface CreateClusterResponse {
  /**
   * <p>The newly-created cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
 */
export class InsufficientClusterCapacityFault extends __BaseException {
  readonly name: "InsufficientClusterCapacityFault" = "InsufficientClusterCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientClusterCapacityFault.prototype);
  }
}

/**
 * <p></p>
 */
export class InvalidACLStateFault extends __BaseException {
  readonly name: "InvalidACLStateFault" = "InvalidACLStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidACLStateFault, __BaseException>) {
    super({
      name: "InvalidACLStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidACLStateFault.prototype);
  }
}

/**
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
 */
export class ParameterGroupNotFoundFault extends __BaseException {
  readonly name: "ParameterGroupNotFoundFault" = "ParameterGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "ParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupNotFoundFault.prototype);
  }
}

/**
 * <p></p>
 */
export class ShardsPerClusterQuotaExceededFault extends __BaseException {
  readonly name: "ShardsPerClusterQuotaExceededFault" = "ShardsPerClusterQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ShardsPerClusterQuotaExceededFault, __BaseException>) {
    super({
      name: "ShardsPerClusterQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ShardsPerClusterQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
 */
export class SubnetGroupNotFoundFault extends __BaseException {
  readonly name: "SubnetGroupNotFoundFault" = "SubnetGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "SubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupNotFoundFault.prototype);
  }
}

export interface CreateParameterGroupRequest {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The name of the parameter group family that the parameter group can be used with.</p>
   */
  Family: string | undefined;

  /**
   * <p>An optional description of the parameter group.</p>
   */
  Description?: string;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.</p>
 */
export interface ParameterGroup {
  /**
   * <p>The name of the parameter group</p>
   */
  Name?: string;

  /**
   * <p>The name of the parameter group family that this  parameter group is compatible with.</p>
   */
  Family?: string;

  /**
   * <p>A description of the parameter group</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter group</p>
   */
  ARN?: string;
}

export interface CreateParameterGroupResponse {
  /**
   * <p>The newly-created parameter group.</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * <p></p>
 */
export class InvalidParameterGroupStateFault extends __BaseException {
  readonly name: "InvalidParameterGroupStateFault" = "InvalidParameterGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterGroupStateFault.prototype);
  }
}

/**
 * <p></p>
 */
export class ParameterGroupAlreadyExistsFault extends __BaseException {
  readonly name: "ParameterGroupAlreadyExistsFault" = "ParameterGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p></p>
 */
export class ParameterGroupQuotaExceededFault extends __BaseException {
  readonly name: "ParameterGroupQuotaExceededFault" = "ParameterGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
 */
export class ClusterNotFoundFault extends __BaseException {
  readonly name: "ClusterNotFoundFault" = "ClusterNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterNotFoundFault, __BaseException>) {
    super({
      name: "ClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterNotFoundFault.prototype);
  }
}

export interface CreateSnapshotRequest {
  /**
   * <p>The snapshot is created from this cluster.</p>
   */
  ClusterName: string | undefined;

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

export interface CreateSnapshotResponse {
  /**
   * <p>The newly-created snapshot.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * <p></p>
 */
export class InvalidClusterStateFault extends __BaseException {
  readonly name: "InvalidClusterStateFault" = "InvalidClusterStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterStateFault, __BaseException>) {
    super({
      name: "InvalidClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterStateFault.prototype);
  }
}

export interface CreateSubnetGroupRequest {
  /**
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>A description for the subnet group.</p>
   */
  Description?: string;

  /**
   * <p>A list of VPC subnet IDs for the subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

/**
 * <p>Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.</p>
 */
export interface Subnet {
  /**
   * <p>The unique identifier for the subnet.</p>
   */
  Identifier?: string;

  /**
   * <p>The Availability Zone where the subnet resides</p>
   */
  AvailabilityZone?: AvailabilityZone;
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
 */
export interface SubnetGroup {
  /**
   * <p>The name of the subnet group</p>
   */
  Name?: string;

  /**
   * <p>A description of the subnet group</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnets associated with the subnet group.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The ARN (Amazon Resource Name) of the subnet group.</p>
   */
  ARN?: string;
}

export interface CreateSubnetGroupResponse {
  /**
   * <p>The newly-created subnet group</p>
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * <p></p>
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
 * <p></p>
 */
export class SubnetGroupAlreadyExistsFault extends __BaseException {
  readonly name: "SubnetGroupAlreadyExistsFault" = "SubnetGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "SubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p></p>
 */
export class SubnetGroupQuotaExceededFault extends __BaseException {
  readonly name: "SubnetGroupQuotaExceededFault" = "SubnetGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "SubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
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
 * <p></p>
 */
export class SubnetQuotaExceededFault extends __BaseException {
  readonly name: "SubnetQuotaExceededFault" = "SubnetQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "SubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetQuotaExceededFault.prototype);
  }
}

export enum InputAuthenticationType {
  PASSWORD = "password",
}

/**
 * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.</p>
 */
export interface AuthenticationMode {
  /**
   * <p>Indicates whether the user requires a password to authenticate. All newly-created users require a password.</p>
   */
  Type?: InputAuthenticationType | string;

  /**
   * <p>The password(s) used for authentication</p>
   */
  Passwords?: string[];
}

export interface CreateUserRequest {
  /**
   * <p>The name of the user. This value must be unique as it also serves as the user identifier.</p>
   */
  UserName: string | undefined;

  /**
   * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate.</p>
   */
  AuthenticationMode: AuthenticationMode | undefined;

  /**
   * <p>Access permissions string used for this user.</p>
   */
  AccessString: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

export enum AuthenticationType {
  NO_PASSWORD = "no-password",
  PASSWORD = "password",
}

/**
 * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.</p>
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

/**
 * <p>You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.</p>
 */
export interface User {
  /**
   * <p>The name of the user</p>
   */
  Name?: string;

  /**
   * <p>Indicates the user status. Can be "active", "modifying" or "deleting".</p>
   */
  Status?: string;

  /**
   * <p>Access permissions string used for this user.</p>
   */
  AccessString?: string;

  /**
   * <p>The names of the Access Control Lists to which the user belongs</p>
   */
  ACLNames?: string[];

  /**
   * <p>The minimum engine version supported for the user</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>Denotes whether the user requires a password to authenticate.</p>
   */
  Authentication?: Authentication;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.
   *
   *       </p>
   */
  ARN?: string;
}

export interface CreateUserResponse {
  /**
   * <p>The newly-created user.</p>
   */
  User?: User;
}

/**
 * <p></p>
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
 * <p></p>
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

export interface DeleteACLRequest {
  /**
   * <p>The name of the Access Control List to delete</p>
   */
  ACLName: string | undefined;
}

export interface DeleteACLResponse {
  /**
   * <p>The Access Control List object that has been deleted.</p>
   */
  ACL?: ACL;
}

export interface DeleteClusterRequest {
  /**
   * <p>The name of the cluster to be deleted</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.</p>
   */
  FinalSnapshotName?: string;
}

export interface DeleteClusterResponse {
  /**
   * <p>The cluster object that has been deleted</p>
   */
  Cluster?: Cluster;
}

export interface DeleteParameterGroupRequest {
  /**
   * <p>The name of the parameter group to delete.</p>
   */
  ParameterGroupName: string | undefined;
}

export interface DeleteParameterGroupResponse {
  /**
   * <p>The parameter group that has been deleted.</p>
   */
  ParameterGroup?: ParameterGroup;
}

export interface DeleteSnapshotRequest {
  /**
   * <p>The name of the snapshot to delete</p>
   */
  SnapshotName: string | undefined;
}

export interface DeleteSnapshotResponse {
  /**
   * <p>The snapshot object that has been deleted.</p>
   */
  Snapshot?: Snapshot;
}

export interface DeleteSubnetGroupRequest {
  /**
   * <p>The name of the subnet group to delete</p>
   */
  SubnetGroupName: string | undefined;
}

export interface DeleteSubnetGroupResponse {
  /**
   * <p>The subnet group object that has been deleted.</p>
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * <p></p>
 */
export class SubnetGroupInUseFault extends __BaseException {
  readonly name: "SubnetGroupInUseFault" = "SubnetGroupInUseFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupInUseFault, __BaseException>) {
    super({
      name: "SubnetGroupInUseFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupInUseFault.prototype);
  }
}

export interface DeleteUserRequest {
  /**
   * <p>The name of the user to delete</p>
   */
  UserName: string | undefined;
}

export interface DeleteUserResponse {
  /**
   * <p>The user object that has been deleted.</p>
   */
  User?: User;
}

/**
 * <p></p>
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

export interface DescribeACLsRequest {
  /**
   * <p>The name of the ACL</p>
   */
  ACLName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

export interface DescribeACLsResponse {
  /**
   * <p>The list of ACLs</p>
   */
  ACLs?: ACL[];

  /**
   * <p>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

export interface DescribeClustersRequest {
  /**
   * <p>The name of the cluster</p>
   */
  ClusterName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>An optional flag that can be included in the request to retrieve information about the individual shard(s).</p>
   */
  ShowShardDetails?: boolean;
}

export interface DescribeClustersResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of clusters</p>
   */
  Clusters?: Cluster[];
}

export interface DescribeEngineVersionsRequest {
  /**
   * <p>The Redis engine version</p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of a specific parameter group family to return details for.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>If true, specifies that only the default version of the specified engine or engine and major version combination is to be returned.</p>
   */
  DefaultOnly?: boolean;
}

/**
 * <p>Provides details of the Redis engine version</p>
 */
export interface EngineVersionInfo {
  /**
   * <p>The engine version</p>
   */
  EngineVersion?: string;

  /**
   * <p>The patched engine version</p>
   */
  EnginePatchVersion?: string;

  /**
   * <p>Specifies the name of the parameter group family to which the engine default parameters apply.</p>
   */
  ParameterGroupFamily?: string;
}

export interface DescribeEngineVersionsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of engine version details. Each element in the list contains detailed information about one engine version.</p>
   */
  EngineVersions?: EngineVersionInfo[];
}

export enum SourceType {
  acl = "acl",
  cluster = "cluster",
  node = "node",
  parameter_group = "parameter-group",
  subnet_group = "subnet-group",
  user = "user",
}

export interface DescribeEventsRequest {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified, all sources are included in the response.</p>
   */
  SourceName?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *
   *          Example: 2017-03-30T07:03:49.555Z</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *
   *          Example: 2017-03-30T07:03:49.555Z</p>
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes worth of events to retrieve.</p>
   */
  Duration?: number;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * <p>Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a
 *          node.</p>
 */
export interface Event {
  /**
   * <p>The name for the source of the event. For example, if the event occurred at the cluster level, the identifier would be the name of the cluster.</p>
   */
  SourceName?: string;

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

export interface DescribeEventsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of events. Each element in the list contains detailed information about one event.</p>
   */
  Events?: Event[];
}

export interface DescribeParameterGroupsRequest {
  /**
   * <p>The name of a specific  parameter group to return details for.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

export interface DescribeParameterGroupsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of parameter groups. Each element in the list contains detailed information about one parameter group.</p>
   */
  ParameterGroups?: ParameterGroup[];
}

export interface DescribeParametersRequest {
  /**
   * <p>he name of a specific  parameter group to return details for.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * <p>Describes an individual setting that controls some aspect of MemoryDB behavior.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter</p>
   */
  Name?: string;

  /**
   * <p>The value of the parameter</p>
   */
  Value?: string;

  /**
   * <p>A description of the parameter</p>
   */
  Description?: string;

  /**
   * <p>The parameter's data type</p>
   */
  DataType?: string;

  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;
}

export interface DescribeParametersResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of parameters specific to a particular parameter group. Each element in the list contains detailed information about one parameter.</p>
   */
  Parameters?: Parameter[];
}

export interface DescribeReservedNodesRequest {
  /**
   * <p>The reserved node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.</p>
   */
  ReservationId?: string;

  /**
   * <p>The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.</p>
   */
  ReservedNodesOfferingId?: string;

  /**
   * <p>The node type filter value. Use this parameter to show only those reservations matching the specified  node type. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   */
  NodeType?: string;

  /**
   * <p>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.</p>
   */
  Duration?: string;

  /**
   * <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *          Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"</p>
   */
  OfferingType?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   */
  NextToken?: string;
}

/**
 * <p>The recurring charge to run this reserved node.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge to run this reserved node.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring price charged to run this reserved node.</p>
   */
  RecurringChargeFrequency?: string;
}

/**
 * <p>Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.</p>
 */
export interface ReservedNode {
  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationId?: string;

  /**
   * <p>The ID of the reserved node offering to purchase.</p>
   */
  ReservedNodesOfferingId?: string;

  /**
   * <p>The node type for the reserved nodes.</p>
   */
  NodeType?: string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The number of nodes that have been reserved.</p>
   */
  NodeCount?: number;

  /**
   * <p>The offering type of this reserved node.</p>
   */
  OfferingType?: string;

  /**
   * <p>The state of the reserved node.</p>
   */
  State?: string;

  /**
   * <p>The recurring price charged to run this reserved node.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The Amazon Resource Name (ARN) of the reserved node.</p>
   */
  ARN?: string;
}

export interface DescribeReservedNodesResponse {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns information about reserved nodes for this account, or about a specified reserved node.</p>
   */
  ReservedNodes?: ReservedNode[];
}

/**
 * <p>The requested node does not exist.</p>
 */
export class ReservedNodeNotFoundFault extends __BaseException {
  readonly name: "ReservedNodeNotFoundFault" = "ReservedNodeNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeNotFoundFault.prototype);
  }
}

export interface DescribeReservedNodesOfferingsRequest {
  /**
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   */
  ReservedNodesOfferingId?: string;

  /**
   * <p>The node type for the reserved nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   */
  NodeType?: string;

  /**
   * <p>Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.</p>
   */
  Duration?: string;

  /**
   * <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *          Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"</p>
   */
  OfferingType?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   */
  NextToken?: string;
}

/**
 * <p>The offering type of this node.</p>
 */
export interface ReservedNodesOffering {
  /**
   * <p>The offering identifier.</p>
   */
  ReservedNodesOfferingId?: string;

  /**
   * <p>The node type for the reserved nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   */
  NodeType?: string;

  /**
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The offering type of this reserved node.</p>
   */
  OfferingType?: string;

  /**
   * <p>The recurring price charged to run this reserved node.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

export interface DescribeReservedNodesOfferingsResponse {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   */
  NextToken?: string;

  /**
   * <p>Lists available reserved node offerings.</p>
   */
  ReservedNodesOfferings?: ReservedNodesOffering[];
}

/**
 * <p>The requested node offering does not exist.
 *
 *       </p>
 */
export class ReservedNodesOfferingNotFoundFault extends __BaseException {
  readonly name: "ReservedNodesOfferingNotFoundFault" = "ReservedNodesOfferingNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodesOfferingNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodesOfferingNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodesOfferingNotFoundFault.prototype);
  }
}

export interface DescribeServiceUpdatesRequest {
  /**
   * <p>The unique ID of the service update to describe.</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The list of cluster names to identify service updates to apply</p>
   */
  ClusterNames?: string[];

  /**
   * <p>The status(es) of the service updates to filter on</p>
   */
  Status?: (ServiceUpdateStatus | string)[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

export enum ServiceUpdateType {
  SECURITY_UPDATE = "security-update",
}

/**
 * <p>An update that you can apply to your MemoryDB clusters.</p>
 */
export interface ServiceUpdate {
  /**
   * <p>The name of the cluster to which the service update applies</p>
   */
  ClusterName?: string;

  /**
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * <p>The date when the service update is initially available</p>
   */
  ReleaseDate?: Date;

  /**
   * <p>Provides details of the service update</p>
   */
  Description?: string;

  /**
   * <p>The status of the service update</p>
   */
  Status?: ServiceUpdateStatus | string;

  /**
   * <p>Reflects the nature of the service update</p>
   */
  Type?: ServiceUpdateType | string;

  /**
   * <p>A list of nodes updated by the service update</p>
   */
  NodesUpdated?: string;

  /**
   * <p>The date at which the service update will be automatically applied</p>
   */
  AutoUpdateStartDate?: Date;
}

export interface DescribeServiceUpdatesResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of service updates</p>
   */
  ServiceUpdates?: ServiceUpdate[];
}

export interface DescribeSnapshotsRequest {
  /**
   * <p>A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.</p>
   */
  ClusterName?: string;

  /**
   * <p>A user-supplied name of the snapshot. If this parameter is specified, only this named snapshot is described.</p>
   */
  SnapshotName?: string;

  /**
   * <p>If set to system, the output shows snapshots that were automatically created by MemoryDB. If set to user the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.</p>
   */
  Source?: string;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>A Boolean value which if true, the shard configuration is included in the snapshot description.</p>
   */
  ShowDetail?: boolean;
}

export interface DescribeSnapshotsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of snapshots. Each item in the list contains detailed information about one snapshot.</p>
   */
  Snapshots?: Snapshot[];
}

export interface DescribeSubnetGroupsRequest {
  /**
   * <p>The name of the subnet group to return details for.</p>
   */
  SubnetGroupName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

export interface DescribeSubnetGroupsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of subnet groups. Each element in the list contains detailed information about one group.</p>
   */
  SubnetGroups?: SubnetGroup[];
}

/**
 * <p>Used to streamline results of a search based on the property being filtered.</p>
 */
export interface Filter {
  /**
   * <p>The property being filtered. For example, UserName.</p>
   */
  Name: string | undefined;

  /**
   * <p>The property values to filter on. For example, "user-123".</p>
   */
  Values: string[] | undefined;
}

export interface DescribeUsersRequest {
  /**
   * <p>The name of the user</p>
   */
  UserName?: string;

  /**
   * <p>Filter to determine the list of users to return.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

export interface DescribeUsersResponse {
  /**
   * <p>A list of users.</p>
   */
  Users?: User[];

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * <p></p>
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

export interface FailoverShardRequest {
  /**
   * <p>The cluster being failed over</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>The name of the shard</p>
   */
  ShardName: string | undefined;
}

export interface FailoverShardResponse {
  /**
   * <p>The cluster being failed over</p>
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
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
 * <p></p>
 */
export class ShardNotFoundFault extends __BaseException {
  readonly name: "ShardNotFoundFault" = "ShardNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ShardNotFoundFault, __BaseException>) {
    super({
      name: "ShardNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ShardNotFoundFault.prototype);
  }
}

/**
 * <p></p>
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

export interface ListAllowedNodeTypeUpdatesRequest {
  /**
   * <p>The name of the cluster you want to scale. MemoryDB uses the cluster name to identify the current node type being used by this cluster, and from that to create a list of node types
   *          you can scale up to.</p>
   */
  ClusterName: string | undefined;
}

export interface ListAllowedNodeTypeUpdatesResponse {
  /**
   * <p>A list node types which you can use to scale up your cluster.</p>
   */
  ScaleUpNodeTypes?: string[];

  /**
   * <p>A list node types which you can use to scale down your cluster.</p>
   */
  ScaleDownNodeTypes?: string[];
}

/**
 * <p></p>
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

export interface ListTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsResponse {
  /**
   * <p>A list of tags as key-value pairs.</p>
   */
  TagList?: Tag[];
}

export interface PurchaseReservedNodesOfferingRequest {
  /**
   * <p>The ID of the reserved node offering to purchase.</p>
   */
  ReservedNodesOfferingId: string | undefined;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationId?: string;

  /**
   * <p>The number of node instances to reserve.</p>
   */
  NodeCount?: number;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

export interface PurchaseReservedNodesOfferingResponse {
  /**
   * <p>Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.</p>
   */
  ReservedNode?: ReservedNode;
}

/**
 * <p>You already have a reservation with the given identifier.</p>
 */
export class ReservedNodeAlreadyExistsFault extends __BaseException {
  readonly name: "ReservedNodeAlreadyExistsFault" = "ReservedNodeAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReservedNodeAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the user's node quota.</p>
 */
export class ReservedNodeQuotaExceededFault extends __BaseException {
  readonly name: "ReservedNodeQuotaExceededFault" = "ReservedNodeQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeQuotaExceededFault, __BaseException>) {
    super({
      name: "ReservedNodeQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeQuotaExceededFault.prototype);
  }
}

export interface ResetParameterGroupRequest {
  /**
   * <p>The name of the parameter group to reset.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>If true, all parameters in the parameter group are reset to their default values. If false, only the parameters listed by ParameterNames are reset to their default values.</p>
   */
  AllParameters?: boolean;

  /**
   * <p>An array of parameter names to reset to their default values. If AllParameters is true, do not use ParameterNames. If AllParameters is false, you must specify the name of at least one parameter to reset.</p>
   */
  ParameterNames?: string[];
}

export interface ResetParameterGroupResponse {
  /**
   * <p>The parameter group being reset.</p>
   */
  ParameterGroup?: ParameterGroup;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {
  /**
   * <p>A list of tags as key-value pairs.</p>
   */
  TagList?: Tag[];
}

/**
 * <p></p>
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

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be removed</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of keys of the tags that are to be removed</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {
  /**
   * <p>The list of tags removed</p>
   */
  TagList?: Tag[];
}

export interface UpdateACLRequest {
  /**
   * <p>The name of the Access Control List</p>
   */
  ACLName: string | undefined;

  /**
   * <p>The list of users to add to the Access Control List</p>
   */
  UserNamesToAdd?: string[];

  /**
   * <p>The list of users to remove from the Access Control List</p>
   */
  UserNamesToRemove?: string[];
}

export interface UpdateACLResponse {
  /**
   * <p>The updated Access Control List</p>
   */
  ACL?: ACL;
}

/**
 * <p></p>
 */
export class InvalidNodeStateFault extends __BaseException {
  readonly name: "InvalidNodeStateFault" = "InvalidNodeStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNodeStateFault, __BaseException>) {
    super({
      name: "InvalidNodeStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNodeStateFault.prototype);
  }
}

/**
 * <p></p>
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
 * <p>A request to configure the number of replicas in a shard</p>
 */
export interface ReplicaConfigurationRequest {
  /**
   * <p>The number of replicas to scale up or down to</p>
   */
  ReplicaCount?: number;
}

/**
 * <p>A request to configure the sharding properties of a cluster</p>
 */
export interface ShardConfigurationRequest {
  /**
   * <p>The number of shards in the cluster</p>
   */
  ShardCount?: number;
}

export interface UpdateClusterRequest {
  /**
   * <p>The name of the cluster to update</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>The description of the cluster to update</p>
   */
  Description?: string;

  /**
   * <p>The SecurityGroupIds to update</p>
   */
  SecurityGroupIds?: string[];

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
   */
  MaintenanceWindow?: string;

  /**
   * <p>The SNS topic ARN to update</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The status of the Amazon SNS notification topic. Notifications are sent only if the status is active.</p>
   */
  SnsTopicStatus?: string;

  /**
   * <p>The name of the parameter group to update</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.</p>
   */
  SnapshotWindow?: string;

  /**
   * <p>The number of days for which MemoryDB retains automatic cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>A valid node type that you want to scale this cluster up or down to.</p>
   */
  NodeType?: string;

  /**
   * <p>The upgraded version of the engine to be run on the nodes. You can upgrade to a newer engine version, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The number of replicas that will reside in each shard</p>
   */
  ReplicaConfiguration?: ReplicaConfigurationRequest;

  /**
   * <p>The number of shards in the cluster</p>
   */
  ShardConfiguration?: ShardConfigurationRequest;

  /**
   * <p>The Access Control List that is associated with the cluster</p>
   */
  ACLName?: string;
}

export interface UpdateClusterResponse {
  /**
   * <p>The updated cluster</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>Describes a name-value pair that is used to update the value of a parameter.</p>
 */
export interface ParameterNameValue {
  /**
   * <p>The name of the parameter</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter</p>
   */
  ParameterValue?: string;
}

export interface UpdateParameterGroupRequest {
  /**
   * <p>The name of the parameter group to update.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be updated per request.</p>
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

export interface UpdateParameterGroupResponse {
  /**
   * <p>The updated parameter group</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * <p></p>
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

export interface UpdateSubnetGroupRequest {
  /**
   * <p>The name of the subnet group</p>
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>A description of the subnet group</p>
   */
  Description?: string;

  /**
   * <p>The EC2 subnet IDs for the subnet group.</p>
   */
  SubnetIds?: string[];
}

export interface UpdateSubnetGroupResponse {
  /**
   * <p>The updated subnet group</p>
   */
  SubnetGroup?: SubnetGroup;
}

export interface UpdateUserRequest {
  /**
   * <p>The name of the user</p>
   */
  UserName: string | undefined;

  /**
   * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate.</p>
   */
  AuthenticationMode?: AuthenticationMode;

  /**
   * <p>Access permissions string used for this user.</p>
   */
  AccessString?: string;
}

export interface UpdateUserResponse {
  /**
   * <p>The updated user</p>
   */
  User?: User;
}

/**
 * @internal
 */
export const ACLPendingChangesFilterSensitiveLog = (obj: ACLPendingChanges): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ACLFilterSensitiveLog = (obj: ACL): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ACLsUpdateStatusFilterSensitiveLog = (obj: ACLsUpdateStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceUpdateRequestFilterSensitiveLog = (obj: ServiceUpdateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateClusterRequestFilterSensitiveLog = (obj: BatchUpdateClusterRequest): any => ({
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
export const PendingModifiedServiceUpdateFilterSensitiveLog = (obj: PendingModifiedServiceUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterPendingUpdatesFilterSensitiveLog = (obj: ClusterPendingUpdates): any => ({
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
export const NodeFilterSensitiveLog = (obj: Node): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShardFilterSensitiveLog = (obj: Shard): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterFilterSensitiveLog = (obj: Cluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedClusterFilterSensitiveLog = (obj: UnprocessedCluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateClusterResponseFilterSensitiveLog = (obj: BatchUpdateClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopySnapshotRequestFilterSensitiveLog = (obj: CopySnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShardConfigurationFilterSensitiveLog = (obj: ShardConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShardDetailFilterSensitiveLog = (obj: ShardDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterConfigurationFilterSensitiveLog = (obj: ClusterConfiguration): any => ({
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
export const CopySnapshotResponseFilterSensitiveLog = (obj: CopySnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateACLRequestFilterSensitiveLog = (obj: CreateACLRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateACLResponseFilterSensitiveLog = (obj: CreateACLResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterRequestFilterSensitiveLog = (obj: CreateClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterResponseFilterSensitiveLog = (obj: CreateClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateParameterGroupRequestFilterSensitiveLog = (obj: CreateParameterGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterGroupFilterSensitiveLog = (obj: ParameterGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateParameterGroupResponseFilterSensitiveLog = (obj: CreateParameterGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotRequestFilterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotResponseFilterSensitiveLog = (obj: CreateSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubnetGroupRequestFilterSensitiveLog = (obj: CreateSubnetGroupRequest): any => ({
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
export const SubnetFilterSensitiveLog = (obj: Subnet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetGroupFilterSensitiveLog = (obj: SubnetGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubnetGroupResponseFilterSensitiveLog = (obj: CreateSubnetGroupResponse): any => ({
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
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
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
export const CreateUserResponseFilterSensitiveLog = (obj: CreateUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteACLRequestFilterSensitiveLog = (obj: DeleteACLRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteACLResponseFilterSensitiveLog = (obj: DeleteACLResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterRequestFilterSensitiveLog = (obj: DeleteClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterResponseFilterSensitiveLog = (obj: DeleteClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParameterGroupRequestFilterSensitiveLog = (obj: DeleteParameterGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParameterGroupResponseFilterSensitiveLog = (obj: DeleteParameterGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotRequestFilterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotResponseFilterSensitiveLog = (obj: DeleteSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubnetGroupRequestFilterSensitiveLog = (obj: DeleteSubnetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubnetGroupResponseFilterSensitiveLog = (obj: DeleteSubnetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserRequestFilterSensitiveLog = (obj: DeleteUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserResponseFilterSensitiveLog = (obj: DeleteUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeACLsRequestFilterSensitiveLog = (obj: DescribeACLsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeACLsResponseFilterSensitiveLog = (obj: DescribeACLsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClustersRequestFilterSensitiveLog = (obj: DescribeClustersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClustersResponseFilterSensitiveLog = (obj: DescribeClustersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEngineVersionsRequestFilterSensitiveLog = (obj: DescribeEngineVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngineVersionInfoFilterSensitiveLog = (obj: EngineVersionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEngineVersionsResponseFilterSensitiveLog = (obj: DescribeEngineVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsRequestFilterSensitiveLog = (obj: DescribeEventsRequest): any => ({
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
export const DescribeEventsResponseFilterSensitiveLog = (obj: DescribeEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeParameterGroupsRequestFilterSensitiveLog = (obj: DescribeParameterGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeParameterGroupsResponseFilterSensitiveLog = (obj: DescribeParameterGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeParametersRequestFilterSensitiveLog = (obj: DescribeParametersRequest): any => ({
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
export const DescribeParametersResponseFilterSensitiveLog = (obj: DescribeParametersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedNodesRequestFilterSensitiveLog = (obj: DescribeReservedNodesRequest): any => ({
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
export const ReservedNodeFilterSensitiveLog = (obj: ReservedNode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedNodesResponseFilterSensitiveLog = (obj: DescribeReservedNodesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedNodesOfferingsRequestFilterSensitiveLog = (
  obj: DescribeReservedNodesOfferingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedNodesOfferingFilterSensitiveLog = (obj: ReservedNodesOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedNodesOfferingsResponseFilterSensitiveLog = (
  obj: DescribeReservedNodesOfferingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServiceUpdatesRequestFilterSensitiveLog = (obj: DescribeServiceUpdatesRequest): any => ({
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
export const DescribeServiceUpdatesResponseFilterSensitiveLog = (obj: DescribeServiceUpdatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsRequestFilterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsResponseFilterSensitiveLog = (obj: DescribeSnapshotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubnetGroupsRequestFilterSensitiveLog = (obj: DescribeSubnetGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubnetGroupsResponseFilterSensitiveLog = (obj: DescribeSubnetGroupsResponse): any => ({
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
export const DescribeUsersRequestFilterSensitiveLog = (obj: DescribeUsersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUsersResponseFilterSensitiveLog = (obj: DescribeUsersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailoverShardRequestFilterSensitiveLog = (obj: FailoverShardRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailoverShardResponseFilterSensitiveLog = (obj: FailoverShardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAllowedNodeTypeUpdatesRequestFilterSensitiveLog = (obj: ListAllowedNodeTypeUpdatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAllowedNodeTypeUpdatesResponseFilterSensitiveLog = (obj: ListAllowedNodeTypeUpdatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsRequestFilterSensitiveLog = (obj: ListTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsResponseFilterSensitiveLog = (obj: ListTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedNodesOfferingRequestFilterSensitiveLog = (
  obj: PurchaseReservedNodesOfferingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedNodesOfferingResponseFilterSensitiveLog = (
  obj: PurchaseReservedNodesOfferingResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetParameterGroupRequestFilterSensitiveLog = (obj: ResetParameterGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetParameterGroupResponseFilterSensitiveLog = (obj: ResetParameterGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateACLRequestFilterSensitiveLog = (obj: UpdateACLRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateACLResponseFilterSensitiveLog = (obj: UpdateACLResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicaConfigurationRequestFilterSensitiveLog = (obj: ReplicaConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShardConfigurationRequestFilterSensitiveLog = (obj: ShardConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterRequestFilterSensitiveLog = (obj: UpdateClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterResponseFilterSensitiveLog = (obj: UpdateClusterResponse): any => ({
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
export const UpdateParameterGroupRequestFilterSensitiveLog = (obj: UpdateParameterGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateParameterGroupResponseFilterSensitiveLog = (obj: UpdateParameterGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubnetGroupRequestFilterSensitiveLog = (obj: UpdateSubnetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubnetGroupResponseFilterSensitiveLog = (obj: UpdateSubnetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserRequestFilterSensitiveLog = (obj: UpdateUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserResponseFilterSensitiveLog = (obj: UpdateUserResponse): any => ({
  ...obj,
});
