// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MemoryDBServiceException as __BaseException } from "./MemoryDBServiceException";

/**
 * @public
 * <p>Returns the updates being applied to the ACL.</p>
 */
export interface ACLPendingChanges {
  /**
   * @public
   * <p>A list of user names being removed from the ACL</p>
   */
  UserNamesToRemove?: string[];

  /**
   * @public
   * <p>A list of users being added to the ACL</p>
   */
  UserNamesToAdd?: string[];
}

/**
 * @public
 * <p>An Access Control List. You can authenticate users with Access Contol Lists.
 *
 *          ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.</p>
 */
export interface ACL {
  /**
   * @public
   * <p>The name of the Access Control List</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Indicates ACL status. Can be "creating", "active", "modifying", "deleting".</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The list of user names that belong to the ACL.</p>
   */
  UserNames?: string[];

  /**
   * @public
   * <p>The minimum engine version supported for the ACL</p>
   */
  MinimumEngineVersion?: string;

  /**
   * @public
   * <p>A list of updates being applied to the ACL.</p>
   */
  PendingChanges?: ACLPendingChanges;

  /**
   * @public
   * <p>A list of clusters associated with the ACL.</p>
   */
  Clusters?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the ACL</p>
   */
  ARN?: string;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>The status of the ACL update</p>
 */
export interface ACLsUpdateStatus {
  /**
   * @public
   * <p>A list of ACLs pending to be applied.</p>
   */
  ACLToApply?: string;
}

/**
 * @public
 * <p>A request to apply a service update</p>
 */
export interface ServiceUpdateRequest {
  /**
   * @public
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateNameToApply?: string;
}

/**
 * @public
 */
export interface BatchUpdateClusterRequest {
  /**
   * @public
   * <p>The cluster names to apply the updates.</p>
   */
  ClusterNames: string[] | undefined;

  /**
   * @public
   * <p>The unique ID of the service update</p>
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
 * @public
 * <p>Represents the information required for client programs to connect to the cluster and its nodes.</p>
 */
export interface Endpoint {
  /**
   * @public
   * <p>The DNS hostname of the node.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The port number that the engine is listening on.</p>
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
 * @public
 * <p>Represents the progress of an online resharding operation.</p>
 */
export interface SlotMigration {
  /**
   * @public
   * <p>The percentage of the slot migration that is complete.</p>
   */
  ProgressPercentage?: number;
}

/**
 * @public
 * <p>The status of the online resharding</p>
 */
export interface ReshardingStatus {
  /**
   * @public
   * <p>The status of the online resharding slot migration</p>
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
 * @public
 * <p>Update action that has yet to be processed for the corresponding apply/stop request</p>
 */
export interface PendingModifiedServiceUpdate {
  /**
   * @public
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * @public
   * <p>The status of the service update</p>
   */
  Status?: ServiceUpdateStatus;
}

/**
 * @public
 * <p>A list of updates being applied to the cluster</p>
 */
export interface ClusterPendingUpdates {
  /**
   * @public
   * <p>The status of an online resharding operation.</p>
   */
  Resharding?: ReshardingStatus;

  /**
   * @public
   * <p>A list of ACLs associated with the cluster that are being updated</p>
   */
  ACLs?: ACLsUpdateStatus;

  /**
   * @public
   * <p>A list of service updates being applied to the cluster</p>
   */
  ServiceUpdates?: PendingModifiedServiceUpdate[];
}

/**
 * @public
 * <p>Represents a single security group and its status.</p>
 */
export interface SecurityGroupMembership {
  /**
   * @public
   * <p>The identifier of the security group.</p>
   */
  SecurityGroupId?: string;

  /**
   * @public
   * <p>The status of the security group membership. The status changes whenever a security group is modified, or when the security groups assigned to a cluster are modified.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software.</p>
 */
export interface Node {
  /**
   * @public
   * <p>The  node identifier. A node name is a numeric identifier (0001, 0002, etc.). The combination of cluster name, shard name and node name uniquely identifies every node used in a customer's Amazon account.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the service update on the node</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The Availability Zone in which the node resides</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The date and time when the node was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The hostname for connecting to this node.</p>
   */
  Endpoint?: Endpoint;
}

/**
 * @public
 * <p>Represents a collection of nodes in a cluster. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.</p>
 */
export interface Shard {
  /**
   * @public
   * <p>The name of the shard</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The current state of this replication group - creating, available, modifying, deleting.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The keyspace for this shard.</p>
   */
  Slots?: string;

  /**
   * @public
   * <p>A list containing information about individual nodes within the shard</p>
   */
  Nodes?: Node[];

  /**
   * @public
   * <p>The number of nodes in the shard</p>
   */
  NumberOfNodes?: number;
}

/**
 * @public
 * <p>Contains all of the attributes of a specific cluster.</p>
 */
export interface Cluster {
  /**
   * @public
   * <p>The user-supplied name of the cluster. This identifier is a unique key that identifies a cluster.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the cluster</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the cluster. For example, Available, Updating, Creating.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>A group of settings that are currently being applied.</p>
   */
  PendingUpdates?: ClusterPendingUpdates;

  /**
   * @public
   * <p>The number of shards in the cluster</p>
   */
  NumberOfShards?: number;

  /**
   * @public
   * <p>A list of shards that are members of the cluster.</p>
   */
  Shards?: Shard[];

  /**
   * @public
   * <p>Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).</p>
   */
  AvailabilityMode?: AZStatus;

  /**
   * @public
   * <p>The cluster's configuration endpoint</p>
   */
  ClusterEndpoint?: Endpoint;

  /**
   * @public
   * <p>The cluster's node type</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The Redis engine version used by the cluster</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The Redis engine patch version used by the cluster</p>
   */
  EnginePatchVersion?: string;

  /**
   * @public
   * <p>The name of the parameter group used by the cluster</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>The status of the parameter group used by the cluster, for example 'active' or 'applying'.</p>
   */
  ParameterGroupStatus?: string;

  /**
   * @public
   * <p>A list of security groups used by the cluster</p>
   */
  SecurityGroups?: SecurityGroupMembership[];

  /**
   * @public
   * <p>The name of the subnet group used by the cluster</p>
   */
  SubnetGroupName?: string;

  /**
   * @public
   * <p>A flag to indicate if In-transit encryption is enabled</p>
   */
  TLSEnabled?: boolean;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt the cluster</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ARN?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SNS notification topic</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The SNS topic must be in Active status to receive notifications</p>
   */
  SnsTopicStatus?: string;

  /**
   * @public
   * <p>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * @public
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. </p>
   */
  MaintenanceWindow?: string;

  /**
   * @public
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.
   *
   *          Example: 05:00-09:00
   *
   *          If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</p>
   */
  SnapshotWindow?: string;

  /**
   * @public
   * <p>The name of the Access Control List associated with this cluster.</p>
   */
  ACLName?: string;

  /**
   * @public
   * <p>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   */
  DataTiering?: DataTieringStatus;
}

/**
 * @public
 * <p>A cluster whose updates have failed</p>
 */
export interface UnprocessedCluster {
  /**
   * @public
   * <p>The name of the cluster</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>The error type associated with the update failure</p>
   */
  ErrorType?: string;

  /**
   * @public
   * <p>The error message associated with the update failure</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchUpdateClusterResponse {
  /**
   * @public
   * <p>The list of clusters that have been updated.</p>
   */
  ProcessedClusters?: Cluster[];

  /**
   * @public
   * <p>The list of clusters where updates have not been applied.</p>
   */
  UnprocessedClusters?: UnprocessedCluster[];
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>A tag that can be added to an MemoryDB resource. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your MemoryDB resources.
 *          When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. A tag with a null Value is permitted. For more information, see
 *          <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging-resources.html">Tagging your MemoryDB resources</a>
 *          </p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key for the tag. May not be null.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The tag's value. May be null.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CopySnapshotRequest {
  /**
   * @public
   * <p>The name of an existing snapshot from which to make a copy.</p>
   */
  SourceSnapshotName: string | undefined;

  /**
   * @public
   * <p>A name for the snapshot copy. MemoryDB does not permit overwriting a snapshot, therefore this name must be unique within its context - MemoryDB or an Amazon S3 bucket if exporting.</p>
   */
  TargetSnapshotName: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The ID of the KMS key used to encrypt the target snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.</p>
 */
export interface ShardConfiguration {
  /**
   * @public
   * <p>A string that specifies the keyspace for a particular node group. Keyspaces range from 0 to 16,383. The string is in the format startkey-endkey.</p>
   */
  Slots?: string;

  /**
   * @public
   * <p>The number of read replica nodes in this shard.</p>
   */
  ReplicaCount?: number;
}

/**
 * @public
 * <p>Provides details of a shard in a snapshot</p>
 */
export interface ShardDetail {
  /**
   * @public
   * <p>The name of the shard</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The configuration details of the shard</p>
   */
  Configuration?: ShardConfiguration;

  /**
   * @public
   * <p>The size of the shard's snapshot</p>
   */
  Size?: string;

  /**
   * @public
   * <p>The date and time that the shard's snapshot was created</p>
   */
  SnapshotCreationTime?: Date;
}

/**
 * @public
 * <p>A list of cluster configuration options. </p>
 */
export interface ClusterConfiguration {
  /**
   * @public
   * <p>The name of the cluster</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the cluster configuration</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The node type used for the cluster</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The Redis engine version used by the cluster</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The specified maintenance window for the cluster</p>
   */
  MaintenanceWindow?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SNS notification topic for the cluster</p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>The port used by the cluster</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The name of parameter group used by the cluster</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>The name of the subnet group used by the cluster</p>
   */
  SubnetGroupName?: string;

  /**
   * @public
   * <p>The ID of the VPC the cluster belongs to</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The snapshot retention limit set by the cluster</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * @public
   * <p>The snapshot window set by the cluster</p>
   */
  SnapshotWindow?: string;

  /**
   * @public
   * <p>The number of shards in the cluster</p>
   */
  NumShards?: number;

  /**
   * @public
   * <p>The list of shards in the cluster</p>
   */
  Shards?: ShardDetail[];
}

/**
 * @public
 * <p>Represents a copy of an entire cluster as of the time when the snapshot was taken.</p>
 */
export interface Snapshot {
  /**
   * @public
   * <p>The name of the snapshot</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the snapshot. Valid values: creating | available | restoring | copying | deleting.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the snapshot.</p>
   */
  ARN?: string;

  /**
   * @public
   * <p>The configuration of the cluster from which the snapshot was taken</p>
   */
  ClusterConfiguration?: ClusterConfiguration;

  /**
   * @public
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   */
  DataTiering?: DataTieringStatus;
}

/**
 * @public
 */
export interface CopySnapshotResponse {
  /**
   * @public
   * <p>Represents a copy of an entire cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateACLRequest {
  /**
   * @public
   * <p>The name of the Access Control List.</p>
   */
  ACLName: string | undefined;

  /**
   * @public
   * <p>The list of users that belong to the Access Control List.</p>
   */
  UserNames?: string[];

  /**
   * @public
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateACLResponse {
  /**
   * @public
   * <p>The newly-created Access Control List.</p>
   */
  ACL?: ACL;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * @public
   * <p>The name of the cluster. This value must be unique as it also serves as the cluster identifier.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>The compute and memory capacity of the nodes in the cluster.</p>
   */
  NodeType: string | undefined;

  /**
   * @public
   * <p>The name of the parameter group associated with the cluster.</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>An optional description of the cluster.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The number of shards the cluster will contain. The default value is 1. </p>
   */
  NumShards?: number;

  /**
   * @public
   * <p>The number of replicas to apply to each shard. The default value is 1. The maximum is 5. </p>
   */
  NumReplicasPerShard?: number;

  /**
   * @public
   * <p>The name of the subnet group to be used for the cluster.</p>
   */
  SubnetGroupName?: string;

  /**
   * @public
   * <p>A list of security group names to associate with this cluster.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
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
   * @public
   * <p>The port number on which each of the nodes accepts connections.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>A flag to enable in-transit encryption on the cluster.</p>
   */
  TLSEnabled?: boolean;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.</p>
   */
  SnapshotArns?: string[];

  /**
   * @public
   * <p>The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.</p>
   */
  SnapshotName?: string;

  /**
   * @public
   * <p>The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * @public
   * <p>A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.</p>
   *          <p>    Example: 05:00-09:00</p>
   *          <p>    If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.</p>
   */
  SnapshotWindow?: string;

  /**
   * @public
   * <p>The name of the Access Control List to associate with the cluster.</p>
   */
  ACLName: string | undefined;

  /**
   * @public
   * <p>The version number of the Redis engine to be used for the cluster.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>When set to true, the cluster will automatically receive minor engine version upgrades after launch.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>Enables data tiering. Data tiering is only supported for clusters using the r6gd node type.
   *             This parameter must be set when using r6gd nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html">Data tiering</a>.</p>
   */
  DataTiering?: boolean;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * @public
   * <p>The newly-created cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateParameterGroupRequest {
  /**
   * @public
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * @public
   * <p>The name of the parameter group family that the parameter group can be used with.</p>
   */
  Family: string | undefined;

  /**
   * @public
   * <p>An optional description of the parameter group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.</p>
 */
export interface ParameterGroup {
  /**
   * @public
   * <p>The name of the parameter group</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the parameter group family that this  parameter group is compatible with.</p>
   */
  Family?: string;

  /**
   * @public
   * <p>A description of the parameter group</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the parameter group</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateParameterGroupResponse {
  /**
   * @public
   * <p>The newly-created parameter group.</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * @public
   * <p>The snapshot is created from this cluster.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>A name for the snapshot being created.</p>
   */
  SnapshotName: string | undefined;

  /**
   * @public
   * <p>The ID of the KMS key used to encrypt the snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * @public
   * <p>The newly-created snapshot.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * @public
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

/**
 * @public
 */
export interface CreateSubnetGroupRequest {
  /**
   * @public
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupName: string | undefined;

  /**
   * @public
   * <p>A description for the subnet group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of VPC subnet IDs for the subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).</p>
 */
export interface AvailabilityZone {
  /**
   * @public
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.</p>
 */
export interface Subnet {
  /**
   * @public
   * <p>The unique identifier for the subnet.</p>
   */
  Identifier?: string;

  /**
   * @public
   * <p>The Availability Zone where the subnet resides</p>
   */
  AvailabilityZone?: AvailabilityZone;
}

/**
 * @public
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
   * @public
   * <p>The name of the subnet group</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the subnet group</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>A list of subnets associated with the subnet group.</p>
   */
  Subnets?: Subnet[];

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the subnet group.</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateSubnetGroupResponse {
  /**
   * @public
   * <p>The newly-created subnet group</p>
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.</p>
 */
export interface AuthenticationMode {
  /**
   * @public
   * <p>Indicates whether the user requires a password to authenticate. All newly-created users require a password.</p>
   */
  Type?: InputAuthenticationType;

  /**
   * @public
   * <p>The password(s) used for authentication</p>
   */
  Passwords?: string[];
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * @public
   * <p>The name of the user. This value must be unique as it also serves as the user identifier.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate.</p>
   */
  AuthenticationMode: AuthenticationMode | undefined;

  /**
   * @public
   * <p>Access permissions string used for this user.</p>
   */
  AccessString: string | undefined;

  /**
   * @public
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
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
 * @public
 * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.</p>
 */
export interface Authentication {
  /**
   * @public
   * <p>Indicates whether the user requires a password to authenticate.</p>
   */
  Type?: AuthenticationType;

  /**
   * @public
   * <p>The number of passwords belonging to the user. The maximum is two.</p>
   */
  PasswordCount?: number;
}

/**
 * @public
 * <p>You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.</p>
 */
export interface User {
  /**
   * @public
   * <p>The name of the user</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Indicates the user status. Can be "active", "modifying" or "deleting".</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Access permissions string used for this user.</p>
   */
  AccessString?: string;

  /**
   * @public
   * <p>The names of the Access Control Lists to which the user belongs</p>
   */
  ACLNames?: string[];

  /**
   * @public
   * <p>The minimum engine version supported for the user</p>
   */
  MinimumEngineVersion?: string;

  /**
   * @public
   * <p>Denotes whether the user requires a password to authenticate.</p>
   */
  Authentication?: Authentication;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user.
   *
   *       </p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * @public
   * <p>The newly-created user.</p>
   */
  User?: User;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface DeleteACLRequest {
  /**
   * @public
   * <p>The name of the Access Control List to delete</p>
   */
  ACLName: string | undefined;
}

/**
 * @public
 */
export interface DeleteACLResponse {
  /**
   * @public
   * <p>The Access Control List object that has been deleted.</p>
   */
  ACL?: ACL;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * @public
   * <p>The name of the cluster to be deleted</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.</p>
   */
  FinalSnapshotName?: string;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * @public
   * <p>The cluster object that has been deleted</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 */
export interface DeleteParameterGroupRequest {
  /**
   * @public
   * <p>The name of the parameter group to delete.</p>
   */
  ParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupResponse {
  /**
   * @public
   * <p>The parameter group that has been deleted.</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * @public
   * <p>The name of the snapshot to delete</p>
   */
  SnapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResponse {
  /**
   * @public
   * <p>The snapshot object that has been deleted.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * @public
 */
export interface DeleteSubnetGroupRequest {
  /**
   * @public
   * <p>The name of the subnet group to delete</p>
   */
  SubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupResponse {
  /**
   * @public
   * <p>The subnet group object that has been deleted.</p>
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * @public
   * <p>The name of the user to delete</p>
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {
  /**
   * @public
   * <p>The user object that has been deleted.</p>
   */
  User?: User;
}

/**
 * @public
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

/**
 * @public
 */
export interface DescribeACLsRequest {
  /**
   * @public
   * <p>The name of the ACL</p>
   */
  ACLName?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeACLsResponse {
  /**
   * @public
   * <p>The list of ACLs</p>
   */
  ACLs?: ACL[];

  /**
   * @public
   * <p>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * @public
   * <p>The name of the cluster</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional flag that can be included in the request to retrieve information about the individual shard(s).</p>
   */
  ShowShardDetails?: boolean;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of clusters</p>
   */
  Clusters?: Cluster[];
}

/**
 * @public
 */
export interface DescribeEngineVersionsRequest {
  /**
   * @public
   * <p>The Redis engine version</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The name of a specific parameter group family to return details for.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>If true, specifies that only the default version of the specified engine or engine and major version combination is to be returned.</p>
   */
  DefaultOnly?: boolean;
}

/**
 * @public
 * <p>Provides details of the Redis engine version</p>
 */
export interface EngineVersionInfo {
  /**
   * @public
   * <p>The engine version</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The patched engine version</p>
   */
  EnginePatchVersion?: string;

  /**
   * @public
   * <p>Specifies the name of the parameter group family to which the engine default parameters apply.</p>
   */
  ParameterGroupFamily?: string;
}

/**
 * @public
 */
export interface DescribeEngineVersionsResponse {
  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of engine version details. Each element in the list contains detailed information about one engine version.</p>
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
   * @public
   * <p>The identifier of the event source for which events are returned. If not specified, all sources are included in the response.</p>
   */
  SourceName?: string;

  /**
   * @public
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   */
  SourceType?: SourceType;

  /**
   * @public
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *
   *          Example: 2017-03-30T07:03:49.555Z</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *
   *          Example: 2017-03-30T07:03:49.555Z</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The number of minutes worth of events to retrieve.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster or adding or removing a
 *          node.</p>
 */
export interface Event {
  /**
   * @public
   * <p>The name for the source of the event. For example, if the event occurred at the cluster level, the identifier would be the name of the cluster.</p>
   */
  SourceName?: string;

  /**
   * @public
   * <p>Specifies the origin of this event - a cluster, a parameter group, a security group, etc.</p>
   */
  SourceType?: SourceType;

  /**
   * @public
   * <p>The text of the event.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The date and time when the event occurred.</p>
   */
  Date?: Date;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of events. Each element in the list contains detailed information about one event.</p>
   */
  Events?: Event[];
}

/**
 * @public
 */
export interface DescribeParameterGroupsRequest {
  /**
   * @public
   * <p>The name of a specific  parameter group to return details for.</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeParameterGroupsResponse {
  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of parameter groups. Each element in the list contains detailed information about one parameter group.</p>
   */
  ParameterGroups?: ParameterGroup[];
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * @public
   * <p>he name of a specific  parameter group to return details for.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes an individual setting that controls some aspect of MemoryDB behavior.</p>
 */
export interface Parameter {
  /**
   * @public
   * <p>The name of the parameter</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value of the parameter</p>
   */
  Value?: string;

  /**
   * @public
   * <p>A description of the parameter</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The parameter's data type</p>
   */
  DataType?: string;

  /**
   * @public
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * @public
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;
}

/**
 * @public
 */
export interface DescribeParametersResponse {
  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of parameters specific to a particular parameter group. Each element in the list contains detailed information about one parameter.</p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 */
export interface DescribeReservedNodesRequest {
  /**
   * @public
   * <p>The reserved node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.</p>
   */
  ReservationId?: string;

  /**
   * @public
   * <p>The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.</p>
   */
  ReservedNodesOfferingId?: string;

  /**
   * @public
   * <p>The node type filter value. Use this parameter to show only those reservations matching the specified  node type. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration.</p>
   */
  Duration?: string;

  /**
   * @public
   * <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *          Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"</p>
   */
  OfferingType?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The recurring charge to run this reserved node.</p>
 */
export interface RecurringCharge {
  /**
   * @public
   * <p>The amount of the recurring charge to run this reserved node.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * @public
   * <p>The frequency of the recurring price charged to run this reserved node.</p>
   */
  RecurringChargeFrequency?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.</p>
 */
export interface ReservedNode {
  /**
   * @public
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationId?: string;

  /**
   * @public
   * <p>The ID of the reserved node offering to purchase.</p>
   */
  ReservedNodesOfferingId?: string;

  /**
   * @public
   * <p>The node type for the reserved nodes.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The fixed price charged for this reserved node.</p>
   */
  FixedPrice?: number;

  /**
   * @public
   * <p>The number of nodes that have been reserved.</p>
   */
  NodeCount?: number;

  /**
   * @public
   * <p>The offering type of this reserved node.</p>
   */
  OfferingType?: string;

  /**
   * @public
   * <p>The state of the reserved node.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The recurring price charged to run this reserved node.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the reserved node.</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface DescribeReservedNodesResponse {
  /**
   * @public
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Returns information about reserved nodes for this account, or about a specified reserved node.</p>
   */
  ReservedNodes?: ReservedNode[];
}

/**
 * @public
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

/**
 * @public
 */
export interface DescribeReservedNodesOfferingsRequest {
  /**
   * @public
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   */
  ReservedNodesOfferingId?: string;

  /**
   * @public
   * <p>The node type for the reserved nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>Duration filter value, specified in years or seconds. Use this parameter to show only reservations for a given duration.</p>
   */
  Duration?: string;

  /**
   * @public
   * <p>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type.
   *          Valid values: "All Upfront"|"Partial Upfront"| "No Upfront"</p>
   */
  OfferingType?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The offering type of this node.</p>
 */
export interface ReservedNodesOffering {
  /**
   * @public
   * <p>The offering identifier.</p>
   */
  ReservedNodesOfferingId?: string;

  /**
   * @public
   * <p>The node type for the reserved nodes. For more information, see <a href="https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.reserved.html#reserved-nodes-supported">Supported node types</a>.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The fixed price charged for this reserved node.</p>
   */
  FixedPrice?: number;

  /**
   * @public
   * <p>The offering type of this reserved node.</p>
   */
  OfferingType?: string;

  /**
   * @public
   * <p>The recurring price charged to run this reserved node.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * @public
 */
export interface DescribeReservedNodesOfferingsResponse {
  /**
   * @public
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Lists available reserved node offerings.</p>
   */
  ReservedNodesOfferings?: ReservedNodesOffering[];
}

/**
 * @public
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

/**
 * @public
 */
export interface DescribeServiceUpdatesRequest {
  /**
   * @public
   * <p>The unique ID of the service update to describe.</p>
   */
  ServiceUpdateName?: string;

  /**
   * @public
   * <p>The list of cluster names to identify service updates to apply</p>
   */
  ClusterNames?: string[];

  /**
   * @public
   * <p>The status(es) of the service updates to filter on</p>
   */
  Status?: ServiceUpdateStatus[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
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
 * @public
 * <p>An update that you can apply to your MemoryDB clusters.</p>
 */
export interface ServiceUpdate {
  /**
   * @public
   * <p>The name of the cluster to which the service update applies</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>The unique ID of the service update</p>
   */
  ServiceUpdateName?: string;

  /**
   * @public
   * <p>The date when the service update is initially available</p>
   */
  ReleaseDate?: Date;

  /**
   * @public
   * <p>Provides details of the service update</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the service update</p>
   */
  Status?: ServiceUpdateStatus;

  /**
   * @public
   * <p>Reflects the nature of the service update</p>
   */
  Type?: ServiceUpdateType;

  /**
   * @public
   * <p>A list of nodes updated by the service update</p>
   */
  NodesUpdated?: string;

  /**
   * @public
   * <p>The date at which the service update will be automatically applied</p>
   */
  AutoUpdateStartDate?: Date;
}

/**
 * @public
 */
export interface DescribeServiceUpdatesResponse {
  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of service updates</p>
   */
  ServiceUpdates?: ServiceUpdate[];
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * @public
   * <p>A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>A user-supplied name of the snapshot. If this parameter is specified, only this named snapshot is described.</p>
   */
  SnapshotName?: string;

  /**
   * @public
   * <p>If set to system, the output shows snapshots that were automatically created by MemoryDB. If set to user the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A Boolean value which if true, the shard configuration is included in the snapshot description.</p>
   */
  ShowDetail?: boolean;
}

/**
 * @public
 */
export interface DescribeSnapshotsResponse {
  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of snapshots. Each item in the list contains detailed information about one snapshot.</p>
   */
  Snapshots?: Snapshot[];
}

/**
 * @public
 */
export interface DescribeSubnetGroupsRequest {
  /**
   * @public
   * <p>The name of the subnet group to return details for.</p>
   */
  SubnetGroupName?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsResponse {
  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of subnet groups. Each element in the list contains detailed information about one group.</p>
   */
  SubnetGroups?: SubnetGroup[];
}

/**
 * @public
 * <p>Used to streamline results of a search based on the property being filtered.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The property being filtered. For example, UserName.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The property values to filter on. For example, "user-123".</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeUsersRequest {
  /**
   * @public
   * <p>The name of the user</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>Filter to determine the list of users to return.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeUsersResponse {
  /**
   * @public
   * <p>A list of users.</p>
   */
  Users?: User[];

  /**
   * @public
   * <p>An optional argument to pass in case the total number of records exceeds the value of MaxResults. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface FailoverShardRequest {
  /**
   * @public
   * <p>The cluster being failed over</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>The name of the shard</p>
   */
  ShardName: string | undefined;
}

/**
 * @public
 */
export interface FailoverShardResponse {
  /**
   * @public
   * <p>The cluster being failed over</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface ListAllowedNodeTypeUpdatesRequest {
  /**
   * @public
   * <p>The name of the cluster you want to scale. MemoryDB uses the cluster name to identify the current node type being used by this cluster, and from that to create a list of node types
   *          you can scale up to.</p>
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface ListAllowedNodeTypeUpdatesResponse {
  /**
   * @public
   * <p>A list node types which you can use to scale up your cluster.</p>
   */
  ScaleUpNodeTypes?: string[];

  /**
   * @public
   * <p>A list node types which you can use to scale down your cluster.</p>
   */
  ScaleDownNodeTypes?: string[];
}

/**
 * @public
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

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * @public
   * <p>A list of tags as key-value pairs.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface PurchaseReservedNodesOfferingRequest {
  /**
   * @public
   * <p>The ID of the reserved node offering to purchase.</p>
   */
  ReservedNodesOfferingId: string | undefined;

  /**
   * @public
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationId?: string;

  /**
   * @public
   * <p>The number of node instances to reserve.</p>
   */
  NodeCount?: number;

  /**
   * @public
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PurchaseReservedNodesOfferingResponse {
  /**
   * @public
   * <p>Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.</p>
   */
  ReservedNode?: ReservedNode;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface ResetParameterGroupRequest {
  /**
   * @public
   * <p>The name of the parameter group to reset.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * @public
   * <p>If true, all parameters in the parameter group are reset to their default values. If false, only the parameters listed by ParameterNames are reset to their default values.</p>
   */
  AllParameters?: boolean;

  /**
   * @public
   * <p>An array of parameter names to reset to their default values. If AllParameters is true, do not use ParameterNames. If AllParameters is false, you must specify the name of at least one parameter to reset.</p>
   */
  ParameterNames?: string[];
}

/**
 * @public
 */
export interface ResetParameterGroupResponse {
  /**
   * @public
   * <p>The parameter group being reset.</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be added</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
  /**
   * @public
   * <p>A list of tags as key-value pairs.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
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

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to which the tags are to be removed</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The list of keys of the tags that are to be removed</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * @public
   * <p>The list of tags removed</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface UpdateACLRequest {
  /**
   * @public
   * <p>The name of the Access Control List</p>
   */
  ACLName: string | undefined;

  /**
   * @public
   * <p>The list of users to add to the Access Control List</p>
   */
  UserNamesToAdd?: string[];

  /**
   * @public
   * <p>The list of users to remove from the Access Control List</p>
   */
  UserNamesToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateACLResponse {
  /**
   * @public
   * <p>The updated Access Control List</p>
   */
  ACL?: ACL;
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>A request to configure the number of replicas in a shard</p>
 */
export interface ReplicaConfigurationRequest {
  /**
   * @public
   * <p>The number of replicas to scale up or down to</p>
   */
  ReplicaCount?: number;
}

/**
 * @public
 * <p>A request to configure the sharding properties of a cluster</p>
 */
export interface ShardConfigurationRequest {
  /**
   * @public
   * <p>The number of shards in the cluster</p>
   */
  ShardCount?: number;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * @public
   * <p>The name of the cluster to update</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>The description of the cluster to update</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The SecurityGroupIds to update</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
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
   * @public
   * <p>The SNS topic ARN to update</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The status of the Amazon SNS notification topic. Notifications are sent only if the status is active.</p>
   */
  SnsTopicStatus?: string;

  /**
   * @public
   * <p>The name of the parameter group to update</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.</p>
   */
  SnapshotWindow?: string;

  /**
   * @public
   * <p>The number of days for which MemoryDB retains automatic cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.</p>
   */
  SnapshotRetentionLimit?: number;

  /**
   * @public
   * <p>A valid node type that you want to scale this cluster up or down to.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The upgraded version of the engine to be run on the nodes. You can upgrade to a newer engine version, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster and create it anew with the earlier engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The number of replicas that will reside in each shard</p>
   */
  ReplicaConfiguration?: ReplicaConfigurationRequest;

  /**
   * @public
   * <p>The number of shards in the cluster</p>
   */
  ShardConfiguration?: ShardConfigurationRequest;

  /**
   * @public
   * <p>The Access Control List that is associated with the cluster</p>
   */
  ACLName?: string;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * @public
   * <p>The updated cluster</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 * <p>Describes a name-value pair that is used to update the value of a parameter.</p>
 */
export interface ParameterNameValue {
  /**
   * @public
   * <p>The name of the parameter</p>
   */
  ParameterName?: string;

  /**
   * @public
   * <p>The value of the parameter</p>
   */
  ParameterValue?: string;
}

/**
 * @public
 */
export interface UpdateParameterGroupRequest {
  /**
   * @public
   * <p>The name of the parameter group to update.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * @public
   * <p>An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be updated per request.</p>
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupResponse {
  /**
   * @public
   * <p>The updated parameter group</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * @public
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

/**
 * @public
 */
export interface UpdateSubnetGroupRequest {
  /**
   * @public
   * <p>The name of the subnet group</p>
   */
  SubnetGroupName: string | undefined;

  /**
   * @public
   * <p>A description of the subnet group</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The EC2 subnet IDs for the subnet group.</p>
   */
  SubnetIds?: string[];
}

/**
 * @public
 */
export interface UpdateSubnetGroupResponse {
  /**
   * @public
   * <p>The updated subnet group</p>
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * @public
   * <p>The name of the user</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>Denotes the user's authentication properties, such as whether it requires a password to authenticate.</p>
   */
  AuthenticationMode?: AuthenticationMode;

  /**
   * @public
   * <p>Access permissions string used for this user.</p>
   */
  AccessString?: string;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * @public
   * <p>The updated user</p>
   */
  User?: User;
}
