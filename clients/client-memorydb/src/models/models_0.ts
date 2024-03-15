// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MemoryDBServiceException as __BaseException } from "./MemoryDBServiceException";

/**
 * <p>Returns the updates being applied to the ACL.</p>
 * @public
 */
export interface ACLPendingChanges {
  /**
   * <p>A list of user names being removed from the ACL</p>
   * @public
   */
  UserNamesToRemove?: string[];

  /**
   * <p>A list of users being added to the ACL</p>
   * @public
   */
  UserNamesToAdd?: string[];
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
  Name?: string;

  /**
   * <p>Indicates ACL status. Can be "creating", "active", "modifying", "deleting".</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The list of user names that belong to the ACL.</p>
   * @public
   */
  UserNames?: string[];

  /**
   * <p>The minimum engine version supported for the ACL</p>
   * @public
   */
  MinimumEngineVersion?: string;

  /**
   * <p>A list of updates being applied to the ACL.</p>
   * @public
   */
  PendingChanges?: ACLPendingChanges;

  /**
   * <p>A list of clusters associated with the ACL.</p>
   * @public
   */
  Clusters?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the ACL</p>
   * @public
   */
  ARN?: string;
}

/**
 * <p></p>
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface ACLsUpdateStatus {
  /**
   * <p>A list of ACLs pending to be applied.</p>
   * @public
   */
  ACLToApply?: string;
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
  ServiceUpdateNameToApply?: string;
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
  ServiceUpdate?: ServiceUpdateRequest;
}

/**
 * @public
 * @enum
 */
export const AZStatus = {
  MultiAZ: "multiaz",
  SingleAZ: "singleaz",
} as const;

/**
 * @public
 */
export type AZStatus = (typeof AZStatus)[keyof typeof AZStatus];

/**
 * <p>Represents the information required for client programs to connect to the cluster and its nodes.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The DNS hostname of the node.</p>
   * @public
   */
  Address?: string;

  /**
   * <p>The port number that the engine is listening on.</p>
   * @public
   */
  Port?: number;
}

/**
 * @public
 * @enum
 */
export const DataTieringStatus = {
  FALSE: "false",
  TRUE: "true",
} as const;

/**
 * @public
 */
export type DataTieringStatus = (typeof DataTieringStatus)[keyof typeof DataTieringStatus];

/**
 * <p>Represents the progress of an online resharding operation.</p>
 * @public
 */
export interface SlotMigration {
  /**
   * <p>The percentage of the slot migration that is complete.</p>
   * @public
   */
  ProgressPercentage?: number;
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
  SlotMigration?: SlotMigration;
}

/**
 * @public
 * @enum
 */
export const ServiceUpdateStatus = {
  COMPLETE: "complete",
  IN_PROGRESS: "in-progress",
  NOT_APPLIED: "available",
  SCHEDULED: "scheduled",
} as const;

/**
 * @public
 */
export type ServiceUpdateStatus = (typeof ServiceUpdateStatus)[keyof typeof ServiceUpdateStatus];

/**
 * <p>Update action that has yet to be processed for the corresponding apply/stop request</p>
 * @public
 */
export interface PendingModifiedServiceUpdate {
  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string;

  /**
   * <p>The status of the service update</p>
   * @public
   */
  Status?: ServiceUpdateStatus;
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
  Resharding?: ReshardingStatus;

  /**
   * <p>A list of ACLs associated with the cluster that are being updated</p>
   * @public
   */
  ACLs?: ACLsUpdateStatus;

  /**
   * <p>A list of service updates being applied to the cluster</p>
   * @public
   */
  ServiceUpdates?: PendingModifiedServiceUpdate[];
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
  SecurityGroupId?: string;

  /**
   * <p>The status of the security group membership. The status changes whenever a security group is modified, or when the security groups assigned to a cluster are modified.</p>
   * @public
   */
  Status?: string;
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
  Name?: string;

  /**
   * <p>The status of the service update on the node</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The Availability Zone in which the node resides</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The date and time when the node was created.</p>
   * @public
   */
  CreateTime?: Date;

  /**
   * <p>The hostname for connecting to this node.</p>
   * @public
   */
  Endpoint?: Endpoint;
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
  Name?: string;

  /**
   * <p>The current state of this replication group - creating, available, modifying, deleting.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The keyspace for this shard.</p>
   * @public
   */
  Slots?: string;

  /**
   * <p>A list containing information about individual nodes within the shard</p>
   * @public
   */
  Nodes?: Node[];

  /**
   * <p>The number of nodes in the shard</p>
   * @public
   */
  NumberOfNodes?: number;
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
  Name?: string;

  /**
   * <p>A description of the cluster</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The status of the cluster. For example, Available, Updating, Creating.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>A group of settings that are currently being applied.</p>
   * @public
   */
  PendingUpdates?: ClusterPendingUpdates;

  /**
   * <p>The number of shards in the cluster</p>
   * @public
   */
  NumberOfShards?: number;

  /**
   * <p>A list of shards that are members of the cluster.</p>
   * @public
   */
  Shards?: Shard[];

  /**
   * <p>Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).</p>
   * @public
   */
  AvailabilityMode?: AZStatus;

  /**
   * <p>The cluster's configuration endpoint</p>
   * @public
   */
  ClusterEndpoint?: Endpoint;

  /**
   * <p>The cluster's node type</p>
   * @public
   */
  NodeType?: string;

  /**
   * <p>The Redis engine version used by the cluster</p>
   * @public
   */
  EngineVersion?: string;

  /**
   * <p>The Redis engine patch version used by the cluster</p>
   * @public
   */
  EnginePatchVersion?: string;

  /**
   * <p>The name of the parameter group used by the cluster</p>
   * @public
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of the parameter group used by the cluster, for example 'active' or 'applying'.</p>
   * @public
   */
  ParameterGroupStatus?: string;

  /**
   * <p>A list of security groups used by the cluster</p>
   * @public
   */
  SecurityGroups?: SecurityGroupMembership[];

  /**
   * <p>The name of the subnet group used by the cluster</p>
   * @public
   */
  SubnetGroupName?: string;

  /**
   * <p>A flag to indicate if In-transit encryption is enabled</p>
   * @public
   */
  TLSEnabled?: boolean;

  /**
   * <p>The ID of the KMS key used to encrypt the cluster</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS notification topic</p>
   * @public
   */
  SnsTopicArn?: string;

  /**
   * <p>The SNS topic must be in Active status to receive notifications</p>
   * @public
   */
  SnsTopicStatus?: string;

  /**
   * <p>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   * @public
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. </p>
   * @public
   */
  MaintenanceWindow?: string;

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.
   *
   *          Example: 05:00-09:00
   *
   *          If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</p>
   * @public
   */
  SnapshotWindow?: string;

  /**
   * <p>The name of the Access Control List associated with this cluster.</p>
   * @public
   */
  ACLName?: string;

  /**
   * <p>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTiering?: DataTieringStatus;
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
  ClusterName?: string;

  /**
   * <p>The error type associated with the update failure</p>
   * @public
   */
  ErrorType?: string;

  /**
   * <p>The error message associated with the update failure</p>
   * @public
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchUpdateClusterResponse {
  /**
   * <p>The list of clusters that have been updated.</p>
   * @public
   */
  ProcessedClusters?: Cluster[];

  /**
   * <p>The list of clusters where updates have not been applied.</p>
   * @public
   */
  UnprocessedClusters?: UnprocessedCluster[];
}

/**
 * <p></p>
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
 * <p></p>
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
  Key?: string;

  /**
   * <p>The tag's value. May be null.</p>
   * @public
   */
  Value?: string;
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
  TargetBucket?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the target snapshot.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[];
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
  Slots?: string;

  /**
   * <p>The number of read replica nodes in this shard.</p>
   * @public
   */
  ReplicaCount?: number;
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
  Name?: string;

  /**
   * <p>The configuration details of the shard</p>
   * @public
   */
  Configuration?: ShardConfiguration;

  /**
   * <p>The size of the shard's snapshot</p>
   * @public
   */
  Size?: string;

  /**
   * <p>The date and time that the shard's snapshot was created</p>
   * @public
   */
  SnapshotCreationTime?: Date;
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
  Name?: string;

  /**
   * <p>The description of the cluster configuration</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The node type used for the cluster</p>
   * @public
   */
  NodeType?: string;

  /**
   * <p>The Redis engine version used by the cluster</p>
   * @public
   */
  EngineVersion?: string;

  /**
   * <p>The specified maintenance window for the cluster</p>
   * @public
   */
  MaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS notification topic for the cluster</p>
   * @public
   */
  TopicArn?: string;

  /**
   * <p>The port used by the cluster</p>
   * @public
   */
  Port?: number;

  /**
   * <p>The name of parameter group used by the cluster</p>
   * @public
   */
  ParameterGroupName?: string;

  /**
   * <p>The name of the subnet group used by the cluster</p>
   * @public
   */
  SubnetGroupName?: string;

  /**
   * <p>The ID of the VPC the cluster belongs to</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The snapshot retention limit set by the cluster</p>
   * @public
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>The snapshot window set by the cluster</p>
   * @public
   */
  SnapshotWindow?: string;

  /**
   * <p>The number of shards in the cluster</p>
   * @public
   */
  NumShards?: number;

  /**
   * <p>The list of shards in the cluster</p>
   * @public
   */
  Shards?: ShardDetail[];
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
  Name?: string;

  /**
   * <p>The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).</p>
   * @public
   */
  Source?: string;

  /**
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) of the snapshot.</p>
   * @public
   */
  ARN?: string;

  /**
   * <p>The configuration of the cluster from which the snapshot was taken</p>
   * @public
   */
  ClusterConfiguration?: ClusterConfiguration;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTiering?: DataTieringStatus;
}

/**
 * @public
 */
export interface CopySnapshotResponse {
  /**
   * <p>Represents a copy of an entire cluster as of the time when the snapshot was taken.</p>
   * @public
   */
  Snapshot?: Snapshot;
}

/**
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
  UserNames?: string[];

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateACLResponse {
  /**
   * <p>The newly-created Access Control List.</p>
   * @public
   */
  ACL?: ACL;
}

/**
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
 * @public
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
   * <p>The name of the parameter group associated with the cluster.</p>
   * @public
   */
  ParameterGroupName?: string;

  /**
   * <p>An optional description of the cluster.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The number of shards the cluster will contain. The default value is 1. </p>
   * @public
   */
  NumShards?: number;

  /**
   * <p>The number of replicas to apply to each shard. The default value is 1. The maximum is 5. </p>
   * @public
   */
  NumReplicasPerShard?: number;

  /**
   * <p>The name of the subnet group to be used for the cluster.</p>
   * @public
   */
  SubnetGroupName?: string;

  /**
   * <p>A list of security group names to associate with this cluster.</p>
   * @public
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
   * @public
   */
  MaintenanceWindow?: string;

  /**
   * <p>The port number on which each of the nodes accepts connections.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p>
   * @public
   */
  SnsTopicArn?: string;

  /**
   * <p>A flag to enable in-transit encryption on the cluster.</p>
   * @public
   */
  TLSEnabled?: boolean;

  /**
   * <p>The ID of the KMS key used to encrypt the cluster.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.</p>
   * @public
   */
  SnapshotArns?: string[];

  /**
   * <p>The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.</p>
   * @public
   */
  SnapshotName?: string;

  /**
   * <p>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   * @public
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.</p>
   *          <p>    Example: 05:00-09:00</p>
   *          <p>    If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</p>
   * @public
   */
  SnapshotWindow?: string;

  /**
   * <p>The name of the Access Control List to associate with the cluster.</p>
   * @public
   */
  ACLName: string | undefined;

  /**
   * <p>The version number of the Redis engine to be used for the cluster.</p>
   * @public
   */
  EngineVersion?: string;

  /**
   * <p>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   * @public
   */
  DataTiering?: boolean;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>The newly-created cluster.</p>
   * @public
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
 * @public
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
 * @public
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
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
 * <p></p>
 * @public
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
 * @public
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
 * @public
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
  Description?: string;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[];
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
  Name?: string;

  /**
   * <p>The name of the parameter group family that this  parameter group is compatible with.</p>
   * @public
   */
  Family?: string;

  /**
   * <p>A description of the parameter group</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the parameter group</p>
   * @public
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateParameterGroupResponse {
  /**
   * <p>The newly-created parameter group.</p>
   * @public
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * <p></p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
  KmsKeyId?: string;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * <p>The newly-created snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot;
}

/**
 * <p></p>
 * @public
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
  Description?: string;

  /**
   * <p>A list of VPC subnet IDs for the subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[];
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
  Name?: string;
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
  Identifier?: string;

  /**
   * <p>The Availability Zone where the subnet resides</p>
   * @public
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
 * @public
 */
export interface SubnetGroup {
  /**
   * <p>The name of the subnet group</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A description of the subnet group</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>A list of subnets associated with the subnet group.</p>
   * @public
   */
  Subnets?: Subnet[];

  /**
   * <p>The ARN (Amazon Resource Name) of the subnet group.</p>
   * @public
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateSubnetGroupResponse {
  /**
   * <p>The newly-created subnet group</p>
   * @public
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * <p></p>
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
 * <p></p>
 * @public
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
 * @public
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
 * <p></p>
 * @public
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

/**
 * @public
 * @enum
 */
export const InputAuthenticationType = {
  IAM: "iam",
  PASSWORD: "password",
} as const;

/**
 * @public
 */
export type InputAuthenticationType = (typeof InputAuthenticationType)[keyof typeof InputAuthenticationType];

/**
 * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.</p>
 * @public
 */
export interface AuthenticationMode {
  /**
   * <p>Indicates whether the user requires a password to authenticate. All newly-created users require a password.</p>
   * @public
   */
  Type?: InputAuthenticationType;

  /**
   * <p>The password(s) used for authentication</p>
   * @public
   */
  Passwords?: string[];
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
  Tags?: Tag[];
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
 * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.</p>
 * @public
 */
export interface Authentication {
  /**
   * <p>Indicates whether the user requires a password to authenticate.</p>
   * @public
   */
  Type?: AuthenticationType;

  /**
   * <p>The number of passwords belonging to the user. The maximum is two.</p>
   * @public
   */
  PasswordCount?: number;
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
  Name?: string;

  /**
   * <p>Indicates the user status. Can be "active", "modifying" or "deleting".</p>
   * @public
   */
  Status?: string;

  /**
   * <p>Access permissions string used for this user.</p>
   * @public
   */
  AccessString?: string;

  /**
   * <p>The names of the Access Control Lists to which the user belongs</p>
   * @public
   */
  ACLNames?: string[];

  /**
   * <p>The minimum engine version supported for the user</p>
   * @public
   */
  MinimumEngineVersion?: string;

  /**
   * <p>Denotes whether the user requires a password to authenticate.</p>
   * @public
   */
  Authentication?: Authentication;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.
   *
   *       </p>
   * @public
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The newly-created user.</p>
   * @public
   */
  User?: User;
}

/**
 * <p></p>
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
 * <p></p>
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
export interface DeleteACLRequest {
  /**
   * <p>The name of the Access Control List to delete</p>
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
  ACL?: ACL;
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
   * <p>The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.</p>
   * @public
   */
  FinalSnapshotName?: string;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>The cluster object that has been deleted</p>
   * @public
   */
  Cluster?: Cluster;
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
  ParameterGroup?: ParameterGroup;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * <p>The name of the snapshot to delete</p>
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
  Snapshot?: Snapshot;
}

/**
 * @public
 */
export interface DeleteSubnetGroupRequest {
  /**
   * <p>The name of the subnet group to delete</p>
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
  SubnetGroup?: SubnetGroup;
}

/**
 * <p></p>
 * @public
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
  User?: User;
}

/**
 * <p></p>
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
export interface DescribeACLsRequest {
  /**
   * <p>The name of the ACL</p>
   * @public
   */
  ACLName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeACLsResponse {
  /**
   * <p>The list of ACLs</p>
   * @public
   */
  ACLs?: ACL[];

  /**
   * <p>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * <p>The name of the cluster</p>
   * @public
   */
  ClusterName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>An optional flag that can be included in the request to retrieve information about the individual shard(s).</p>
   * @public
   */
  ShowShardDetails?: boolean;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of clusters</p>
   * @public
   */
  Clusters?: Cluster[];
}

/**
 * @public
 */
export interface DescribeEngineVersionsRequest {
  /**
   * <p>The Redis engine version</p>
   * @public
   */
  EngineVersion?: string;

  /**
   * <p>The name of a specific parameter group family to return details for.</p>
   * @public
   */
  ParameterGroupFamily?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>If true, specifies that only the default version of the specified engine or engine and major version combination is to be returned.</p>
   * @public
   */
  DefaultOnly?: boolean;
}

/**
 * <p>Provides details of the Redis engine version</p>
 * @public
 */
export interface EngineVersionInfo {
  /**
   * <p>The engine version</p>
   * @public
   */
  EngineVersion?: string;

  /**
   * <p>The patched engine version</p>
   * @public
   */
  EnginePatchVersion?: string;

  /**
   * <p>Specifies the name of the parameter group family to which the engine default parameters apply.</p>
   * @public
   */
  ParameterGroupFamily?: string;
}

/**
 * @public
 */
export interface DescribeEngineVersionsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of engine version details. Each element in the list contains detailed information about one engine version.</p>
   * @public
   */
  EngineVersions?: EngineVersionInfo[];
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  acl: "acl",
  cluster: "cluster",
  node: "node",
  parameter_group: "parameter-group",
  subnet_group: "subnet-group",
  user: "user",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 */
export interface DescribeEventsRequest {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified, all sources are included in the response.</p>
   * @public
   */
  SourceName?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   * @public
   */
  SourceType?: SourceType;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *
   *          Example: 2017-03-30T07:03:49.555Z</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *
   *          Example: 2017-03-30T07:03:49.555Z</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes worth of events to retrieve.</p>
   * @public
   */
  Duration?: number;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
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
  SourceName?: string;

  /**
   * <p>Specifies the origin of this event - a cluster, a parameter group, a security group, etc.</p>
   * @public
   */
  SourceType?: SourceType;

  /**
   * <p>The text of the event.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The date and time when the event occurred.</p>
   * @public
   */
  Date?: Date;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of events. Each element in the list contains detailed information about one event.</p>
   * @public
   */
  Events?: Event[];
}

/**
 * @public
 */
export interface DescribeParameterGroupsRequest {
  /**
   * <p>The name of a specific  parameter group to return details for.</p>
   * @public
   */
  ParameterGroupName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeParameterGroupsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of parameter groups. Each element in the list contains detailed information about one parameter group.</p>
   * @public
   */
  ParameterGroups?: ParameterGroup[];
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
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
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
  Name?: string;

  /**
   * <p>The value of the parameter</p>
   * @public
   */
  Value?: string;

  /**
   * <p>A description of the parameter</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The parameter's data type</p>
   * @public
   */
  DataType?: string;

  /**
   * <p>The valid range of values for the parameter.</p>
   * @public
   */
  AllowedValues?: string;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   * @public
   */
  MinimumEngineVersion?: string;
}

/**
 * @public
 */
export interface DescribeParametersResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of parameters specific to a particular parameter group. Each element in the list contains detailed information about one parameter.</p>
   * @public
   */
  Parameters?: Parameter[];
}

/**
 * @public
 */
export interface DescribeReservedNodesRequest {
  /**
   * <p>The reserved node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.</p>
   * @public
   */
  ReservationId?: string;

  /**
   * <p>The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.</p>
   * @public
   */
  ReservedNodesOfferingId?: string;

  /**
   * <p>The node type filter value. Use this parameter to show only those reservations matching the specified  node type. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   * @public
   */
  NodeType?: string;

  /**
   * <p>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.</p>
   * @public
   */
  Duration?: string;

  /**
   * <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *          Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"</p>
   * @public
   */
  OfferingType?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   * @public
   */
  NextToken?: string;
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
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring price charged to run this reserved node.</p>
   * @public
   */
  RecurringChargeFrequency?: string;
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
  ReservationId?: string;

  /**
   * <p>The ID of the reserved node offering to purchase.</p>
   * @public
   */
  ReservedNodesOfferingId?: string;

  /**
   * <p>The node type for the reserved nodes.</p>
   * @public
   */
  NodeType?: string;

  /**
   * <p>The time the reservation started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The duration of the reservation in seconds.</p>
   * @public
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved node.</p>
   * @public
   */
  FixedPrice?: number;

  /**
   * <p>The number of nodes that have been reserved.</p>
   * @public
   */
  NodeCount?: number;

  /**
   * <p>The offering type of this reserved node.</p>
   * @public
   */
  OfferingType?: string;

  /**
   * <p>The state of the reserved node.</p>
   * @public
   */
  State?: string;

  /**
   * <p>The recurring price charged to run this reserved node.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The Amazon Resource Name (ARN) of the reserved node.</p>
   * @public
   */
  ARN?: string;
}

/**
 * @public
 */
export interface DescribeReservedNodesResponse {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Returns information about reserved nodes for this account, or about a specified reserved node.</p>
   * @public
   */
  ReservedNodes?: ReservedNode[];
}

/**
 * <p>The requested node does not exist.</p>
 * @public
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

/**
 * @public
 */
export interface DescribeReservedNodesOfferingsRequest {
  /**
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   * @public
   */
  ReservedNodesOfferingId?: string;

  /**
   * <p>The node type for the reserved nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   * @public
   */
  NodeType?: string;

  /**
   * <p>Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.</p>
   * @public
   */
  Duration?: string;

  /**
   * <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *          Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"</p>
   * @public
   */
  OfferingType?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   * @public
   */
  NextToken?: string;
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
  ReservedNodesOfferingId?: string;

  /**
   * <p>The node type for the reserved nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   * @public
   */
  NodeType?: string;

  /**
   * <p>The duration of the reservation in seconds.</p>
   * @public
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved node.</p>
   * @public
   */
  FixedPrice?: number;

  /**
   * <p>The offering type of this reserved node.</p>
   * @public
   */
  OfferingType?: string;

  /**
   * <p>The recurring price charged to run this reserved node.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * @public
 */
export interface DescribeReservedNodesOfferingsResponse {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Lists available reserved node offerings.</p>
   * @public
   */
  ReservedNodesOfferings?: ReservedNodesOffering[];
}

/**
 * <p>The requested node offering does not exist.
 *
 *       </p>
 * @public
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

/**
 * @public
 */
export interface DescribeServiceUpdatesRequest {
  /**
   * <p>The unique ID of the service update to describe.</p>
   * @public
   */
  ServiceUpdateName?: string;

  /**
   * <p>The list of cluster names to identify service updates to apply</p>
   * @public
   */
  ClusterNames?: string[];

  /**
   * <p>The status(es) of the service updates to filter on</p>
   * @public
   */
  Status?: ServiceUpdateStatus[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
}

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
 * <p>An update that you can apply to your MemoryDB clusters.</p>
 * @public
 */
export interface ServiceUpdate {
  /**
   * <p>The name of the cluster to which the service update applies</p>
   * @public
   */
  ClusterName?: string;

  /**
   * <p>The unique ID of the service update</p>
   * @public
   */
  ServiceUpdateName?: string;

  /**
   * <p>The date when the service update is initially available</p>
   * @public
   */
  ReleaseDate?: Date;

  /**
   * <p>Provides details of the service update</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The status of the service update</p>
   * @public
   */
  Status?: ServiceUpdateStatus;

  /**
   * <p>Reflects the nature of the service update</p>
   * @public
   */
  Type?: ServiceUpdateType;

  /**
   * <p>A list of nodes updated by the service update</p>
   * @public
   */
  NodesUpdated?: string;

  /**
   * <p>The date at which the service update will be automatically applied</p>
   * @public
   */
  AutoUpdateStartDate?: Date;
}

/**
 * @public
 */
export interface DescribeServiceUpdatesResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of service updates</p>
   * @public
   */
  ServiceUpdates?: ServiceUpdate[];
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * <p>A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.</p>
   * @public
   */
  ClusterName?: string;

  /**
   * <p>A user-supplied name of the snapshot. If this parameter is specified, only this named snapshot is described.</p>
   * @public
   */
  SnapshotName?: string;

  /**
   * <p>If set to system, the output shows snapshots that were automatically created by MemoryDB. If set to user the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.</p>
   * @public
   */
  Source?: string;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A Boolean value which if true, the shard configuration is included in the snapshot description.</p>
   * @public
   */
  ShowDetail?: boolean;
}

/**
 * @public
 */
export interface DescribeSnapshotsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of snapshots. Each item in the list contains detailed information about one snapshot.</p>
   * @public
   */
  Snapshots?: Snapshot[];
}

/**
 * @public
 */
export interface DescribeSubnetGroupsRequest {
  /**
   * <p>The name of the subnet group to return details for.</p>
   * @public
   */
  SubnetGroupName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsResponse {
  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of subnet groups. Each element in the list contains detailed information about one group.</p>
   * @public
   */
  SubnetGroups?: SubnetGroup[];
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
   * <p>The name of the user</p>
   * @public
   */
  UserName?: string;

  /**
   * <p>Filter to determine the list of users to return.</p>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeUsersResponse {
  /**
   * <p>A list of users.</p>
   * @public
   */
  Users?: User[];

  /**
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p></p>
 * @public
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
 * @public
 */
export interface FailoverShardRequest {
  /**
   * <p>The cluster being failed over</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The name of the shard</p>
   * @public
   */
  ShardName: string | undefined;
}

/**
 * @public
 */
export interface FailoverShardResponse {
  /**
   * <p>The cluster being failed over</p>
   * @public
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
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
 * <p></p>
 * @public
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
 * @public
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
  ScaleUpNodeTypes?: string[];

  /**
   * <p>A list node types which you can use to scale down your cluster.</p>
   * @public
   */
  ScaleDownNodeTypes?: string[];
}

/**
 * <p></p>
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
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags</p>
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
  TagList?: Tag[];
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
  ReservationId?: string;

  /**
   * <p>The number of node instances to reserve.</p>
   * @public
   */
  NodeCount?: number;

  /**
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PurchaseReservedNodesOfferingResponse {
  /**
   * <p>Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.</p>
   * @public
   */
  ReservedNode?: ReservedNode;
}

/**
 * <p>You already have a reservation with the given identifier.</p>
 * @public
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
 * @public
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
  AllParameters?: boolean;

  /**
   * <p>An array of parameter names to reset to their default values. If AllParameters is true, do not use ParameterNames. If AllParameters is false, you must specify the name of at least one parameter to reset.</p>
   * @public
   */
  ParameterNames?: string[];
}

/**
 * @public
 */
export interface ResetParameterGroupResponse {
  /**
   * <p>The parameter group being reset.</p>
   * @public
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added</p>
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
  TagList?: Tag[];
}

/**
 * <p></p>
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
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be removed</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of keys of the tags that are to be removed</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * <p>The list of tags removed</p>
   * @public
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface UpdateACLRequest {
  /**
   * <p>The name of the Access Control List</p>
   * @public
   */
  ACLName: string | undefined;

  /**
   * <p>The list of users to add to the Access Control List</p>
   * @public
   */
  UserNamesToAdd?: string[];

  /**
   * <p>The list of users to remove from the Access Control List</p>
   * @public
   */
  UserNamesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateACLResponse {
  /**
   * <p>The updated Access Control List</p>
   * @public
   */
  ACL?: ACL;
}

/**
 * <p></p>
 * @public
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
 * <p>A request to configure the number of replicas in a shard</p>
 * @public
 */
export interface ReplicaConfigurationRequest {
  /**
   * <p>The number of replicas to scale up or down to</p>
   * @public
   */
  ReplicaCount?: number;
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
  ShardCount?: number;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * <p>The name of the cluster to update</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The description of the cluster to update</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The SecurityGroupIds to update</p>
   * @public
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
   * @public
   */
  MaintenanceWindow?: string;

  /**
   * <p>The SNS topic ARN to update</p>
   * @public
   */
  SnsTopicArn?: string;

  /**
   * <p>The status of the Amazon SNS notification topic. Notifications are sent only if the status is active.</p>
   * @public
   */
  SnsTopicStatus?: string;

  /**
   * <p>The name of the parameter group to update</p>
   * @public
   */
  ParameterGroupName?: string;

  /**
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.</p>
   * @public
   */
  SnapshotWindow?: string;

  /**
   * <p>The number of days for which MemoryDB retains automatic cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   * @public
   */
  SnapshotRetentionLimit?: number;

  /**
   * <p>A valid node type that you want to scale this cluster up or down to.</p>
   * @public
   */
  NodeType?: string;

  /**
   * <p>The upgraded version of the engine to be run on the nodes. You can upgrade to a newer engine version, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version.</p>
   * @public
   */
  EngineVersion?: string;

  /**
   * <p>The number of replicas that will reside in each shard</p>
   * @public
   */
  ReplicaConfiguration?: ReplicaConfigurationRequest;

  /**
   * <p>The number of shards in the cluster</p>
   * @public
   */
  ShardConfiguration?: ShardConfigurationRequest;

  /**
   * <p>The Access Control List that is associated with the cluster</p>
   * @public
   */
  ACLName?: string;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * <p>The updated cluster</p>
   * @public
   */
  Cluster?: Cluster;
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
  ParameterName?: string;

  /**
   * <p>The value of the parameter</p>
   * @public
   */
  ParameterValue?: string;
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
  ParameterGroup?: ParameterGroup;
}

/**
 * <p></p>
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
  Description?: string;

  /**
   * <p>The EC2 subnet IDs for the subnet group.</p>
   * @public
   */
  SubnetIds?: string[];
}

/**
 * @public
 */
export interface UpdateSubnetGroupResponse {
  /**
   * <p>The updated subnet group</p>
   * @public
   */
  SubnetGroup?: SubnetGroup;
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
  AuthenticationMode?: AuthenticationMode;

  /**
   * <p>Access permissions string used for this user.</p>
   * @public
   */
  AccessString?: string;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The updated user</p>
   * @public
   */
  User?: User;
}
