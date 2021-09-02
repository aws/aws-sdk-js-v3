import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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

export namespace ACLPendingChanges {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ACLPendingChanges): any => ({
    ...obj,
  });
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

export namespace ACL {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ACL): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ACLAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ACLAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ACLAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ACLAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ACLNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ACLNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ACLNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ACLNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ACLQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ACLQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ACLQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ACLQuotaExceededFault): any => ({
    ...obj,
  });
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

export namespace ACLsUpdateStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ACLsUpdateStatus): any => ({
    ...obj,
  });
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

export namespace ServiceUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUpdateRequest): any => ({
    ...obj,
  });
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

export namespace BatchUpdateClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateClusterRequest): any => ({
    ...obj,
  });
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

export namespace Endpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
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

export namespace SlotMigration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotMigration): any => ({
    ...obj,
  });
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

export namespace ReshardingStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReshardingStatus): any => ({
    ...obj,
  });
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

export namespace PendingModifiedServiceUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingModifiedServiceUpdate): any => ({
    ...obj,
  });
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

export namespace ClusterPendingUpdates {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterPendingUpdates): any => ({
    ...obj,
  });
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

export namespace SecurityGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupMembership): any => ({
    ...obj,
  });
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

export namespace Node {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Node): any => ({
    ...obj,
  });
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

export namespace Shard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Shard): any => ({
    ...obj,
  });
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
}

export namespace Cluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj,
  });
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

export namespace UnprocessedCluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnprocessedCluster): any => ({
    ...obj,
  });
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

export namespace BatchUpdateClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateClusterResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterValueException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ServiceUpdateNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ServiceUpdateNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ServiceUpdateNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUpdateNotFoundFault): any => ({
    ...obj,
  });
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
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

export namespace CopySnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopySnapshotRequest): any => ({
    ...obj,
  });
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

export namespace ShardConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShardConfiguration): any => ({
    ...obj,
  });
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

export namespace ShardDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShardDetail): any => ({
    ...obj,
  });
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

export namespace ClusterConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterConfiguration): any => ({
    ...obj,
  });
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
}

export namespace Snapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

export interface CopySnapshotResponse {
  /**
   * <p>Represents a copy of an entire cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: Snapshot;
}

export namespace CopySnapshotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopySnapshotResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterCombinationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterCombinationException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidSnapshotStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidSnapshotStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSnapshotStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ServiceLinkedRoleNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ServiceLinkedRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ServiceLinkedRoleNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceLinkedRoleNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SnapshotAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SnapshotNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SnapshotQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TagQuotaPerResourceExceeded extends __SmithyException, $MetadataBearer {
  name: "TagQuotaPerResourceExceeded";
  $fault: "client";
  message?: string;
}

export namespace TagQuotaPerResourceExceeded {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagQuotaPerResourceExceeded): any => ({
    ...obj,
  });
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

export namespace CreateACLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateACLRequest): any => ({
    ...obj,
  });
}

export interface CreateACLResponse {
  /**
   * <p>The newly-created Access Control List.</p>
   */
  ACL?: ACL;
}

export namespace CreateACLResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateACLResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DefaultUserRequired extends __SmithyException, $MetadataBearer {
  name: "DefaultUserRequired";
  $fault: "client";
  message?: string;
}

export namespace DefaultUserRequired {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultUserRequired): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DuplicateUserNameFault extends __SmithyException, $MetadataBearer {
  name: "DuplicateUserNameFault";
  $fault: "client";
  message?: string;
}

export namespace DuplicateUserNameFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DuplicateUserNameFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface UserNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "UserNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace UserNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ClusterAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ClusterQuotaForCustomerExceededFault extends __SmithyException, $MetadataBearer {
  name: "ClusterQuotaForCustomerExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterQuotaForCustomerExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterQuotaForCustomerExceededFault): any => ({
    ...obj,
  });
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
   * <p>Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format <code>ddd:hh24:mi-ddd:hh24:mi</code> (24H Clock UTC). The minimum maintenance window is a 60 minute period.</p>
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
   *
   *          <p>    Example: 05:00-09:00</p>
   *
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
}

export namespace CreateClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterRequest): any => ({
    ...obj,
  });
}

export interface CreateClusterResponse {
  /**
   * <p>The newly-created cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace CreateClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InsufficientClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientClusterCapacityFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientClusterCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidACLStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidACLStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidACLStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidACLStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidCredentialsException extends __SmithyException, $MetadataBearer {
  name: "InvalidCredentialsException";
  $fault: "client";
  message?: string;
}

export namespace InvalidCredentialsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCredentialsException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidVPCNetworkStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidVPCNetworkStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface NodeQuotaForClusterExceededFault extends __SmithyException, $MetadataBearer {
  name: "NodeQuotaForClusterExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NodeQuotaForClusterExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeQuotaForClusterExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface NodeQuotaForCustomerExceededFault extends __SmithyException, $MetadataBearer {
  name: "NodeQuotaForCustomerExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NodeQuotaForCustomerExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeQuotaForCustomerExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ParameterGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ParameterGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ShardsPerClusterQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ShardsPerClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ShardsPerClusterQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShardsPerClusterQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SubnetGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetGroupNotFoundFault): any => ({
    ...obj,
  });
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

export namespace CreateParameterGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateParameterGroupRequest): any => ({
    ...obj,
  });
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

export namespace ParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterGroup): any => ({
    ...obj,
  });
}

export interface CreateParameterGroupResponse {
  /**
   * <p>The newly-created parameter group.</p>
   */
  ParameterGroup?: ParameterGroup;
}

export namespace CreateParameterGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateParameterGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidParameterGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterGroupStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ParameterGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ParameterGroupAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ParameterGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ParameterGroupQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ClusterNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterNotFoundFault): any => ({
    ...obj,
  });
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

export namespace CreateSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateSnapshotResponse {
  /**
   * <p>The newly-created snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace CreateSnapshotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidClusterStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterStateFault): any => ({
    ...obj,
  });
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

export namespace CreateSubnetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetGroupRequest): any => ({
    ...obj,
  });
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

export namespace AvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
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

export namespace Subnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj,
  });
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

export namespace SubnetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetGroup): any => ({
    ...obj,
  });
}

export interface CreateSubnetGroupResponse {
  /**
   * <p>The newly-created subnet group</p>
   */
  SubnetGroup?: SubnetGroup;
}

export namespace CreateSubnetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSubnet): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SubnetGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "SubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetGroupAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SubnetGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetGroupQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SubnetNotAllowedFault extends __SmithyException, $MetadataBearer {
  name: "SubnetNotAllowedFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetNotAllowedFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetNotAllowedFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SubnetQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetQuotaExceededFault): any => ({
    ...obj,
  });
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

export namespace AuthenticationMode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationMode): any => ({
    ...obj,
  });
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

export namespace CreateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
  });
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

export namespace Authentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Authentication): any => ({
    ...obj,
  });
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

export namespace User {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
}

export interface CreateUserResponse {
  /**
   * <p>The newly-created user.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface UserAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "UserAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace UserAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface UserQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "UserQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace UserQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserQuotaExceededFault): any => ({
    ...obj,
  });
}

export interface DeleteACLRequest {
  /**
   * <p>The name of the Access Control List to delete</p>
   */
  ACLName: string | undefined;
}

export namespace DeleteACLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteACLRequest): any => ({
    ...obj,
  });
}

export interface DeleteACLResponse {
  /**
   * <p>The Access Control List object that has been deleted.</p>
   */
  ACL?: ACL;
}

export namespace DeleteACLResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteACLResponse): any => ({
    ...obj,
  });
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

export namespace DeleteClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterRequest): any => ({
    ...obj,
  });
}

export interface DeleteClusterResponse {
  /**
   * <p>The cluster object that has been deleted</p>
   */
  Cluster?: Cluster;
}

export namespace DeleteClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterResponse): any => ({
    ...obj,
  });
}

export interface DeleteParameterGroupRequest {
  /**
   * <p>The name of the parameter group to delete.</p>
   */
  ParameterGroupName: string | undefined;
}

export namespace DeleteParameterGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteParameterGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteParameterGroupResponse {
  /**
   * <p>The parameter group that has been deleted.</p>
   */
  ParameterGroup?: ParameterGroup;
}

export namespace DeleteParameterGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteParameterGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotRequest {
  /**
   * <p>The name of the snapshot to delete</p>
   */
  SnapshotName: string | undefined;
}

export namespace DeleteSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotResponse {
  /**
   * <p>The snapshot object that has been deleted.</p>
   */
  Snapshot?: Snapshot;
}

export namespace DeleteSnapshotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSnapshotResponse): any => ({
    ...obj,
  });
}

export interface DeleteSubnetGroupRequest {
  /**
   * <p>The name of the subnet group to delete</p>
   */
  SubnetGroupName: string | undefined;
}

export namespace DeleteSubnetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSubnetGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubnetGroupResponse {
  /**
   * <p>The subnet group object that has been deleted.</p>
   */
  SubnetGroup?: SubnetGroup;
}

export namespace DeleteSubnetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSubnetGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SubnetGroupInUseFault extends __SmithyException, $MetadataBearer {
  name: "SubnetGroupInUseFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetGroupInUseFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetGroupInUseFault): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>The name of the user to delete</p>
   */
  UserName: string | undefined;
}

export namespace DeleteUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserResponse {
  /**
   * <p>The user object that has been deleted.</p>
   */
  User?: User;
}

export namespace DeleteUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidUserStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidUserStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidUserStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidUserStateFault): any => ({
    ...obj,
  });
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

export namespace DescribeACLsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeACLsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeACLsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeACLsResponse): any => ({
    ...obj,
  });
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

export namespace DescribeClustersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClustersRequest): any => ({
    ...obj,
  });
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

export namespace DescribeClustersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClustersResponse): any => ({
    ...obj,
  });
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

export namespace DescribeEngineVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineVersionsRequest): any => ({
    ...obj,
  });
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

export namespace EngineVersionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineVersionInfo): any => ({
    ...obj,
  });
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

export namespace DescribeEngineVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineVersionsResponse): any => ({
    ...obj,
  });
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

export namespace DescribeEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventsRequest): any => ({
    ...obj,
  });
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

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
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

export namespace DescribeEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventsResponse): any => ({
    ...obj,
  });
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

export namespace DescribeParameterGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeParameterGroupsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeParameterGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeParameterGroupsResponse): any => ({
    ...obj,
  });
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

export namespace DescribeParametersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeParametersRequest): any => ({
    ...obj,
  });
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

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
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

export namespace DescribeParametersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeParametersResponse): any => ({
    ...obj,
  });
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

export namespace DescribeServiceUpdatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServiceUpdatesRequest): any => ({
    ...obj,
  });
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

export namespace ServiceUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUpdate): any => ({
    ...obj,
  });
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

export namespace DescribeServiceUpdatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeServiceUpdatesResponse): any => ({
    ...obj,
  });
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

export namespace DescribeSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeSnapshotsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSnapshotsResponse): any => ({
    ...obj,
  });
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

export namespace DescribeSubnetGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSubnetGroupsRequest): any => ({
    ...obj,
  });
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

export namespace DescribeSubnetGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSubnetGroupsResponse): any => ({
    ...obj,
  });
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

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
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

export namespace DescribeUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUsersRequest): any => ({
    ...obj,
  });
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

export namespace DescribeUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUsersResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface APICallRateForCustomerExceededFault extends __SmithyException, $MetadataBearer {
  name: "APICallRateForCustomerExceededFault";
  $fault: "client";
  message?: string;
}

export namespace APICallRateForCustomerExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APICallRateForCustomerExceededFault): any => ({
    ...obj,
  });
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

export namespace FailoverShardRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverShardRequest): any => ({
    ...obj,
  });
}

export interface FailoverShardResponse {
  /**
   * <p>The cluster being failed over</p>
   */
  Cluster?: Cluster;
}

export namespace FailoverShardResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverShardResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidKMSKeyFault extends __SmithyException, $MetadataBearer {
  name: "InvalidKMSKeyFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidKMSKeyFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKMSKeyFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ShardNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ShardNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ShardNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShardNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TestFailoverNotAvailableFault extends __SmithyException, $MetadataBearer {
  name: "TestFailoverNotAvailableFault";
  $fault: "client";
  message?: string;
}

export namespace TestFailoverNotAvailableFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestFailoverNotAvailableFault): any => ({
    ...obj,
  });
}

export interface ListAllowedNodeTypeUpdatesRequest {
  /**
   * <p>The name of the cluster you want to scale. MemoryDB uses the cluster name to identify the current node type being used by this cluster, and from that to create a list of node types
   *          you can scale up to.</p>
   */
  ClusterName: string | undefined;
}

export namespace ListAllowedNodeTypeUpdatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAllowedNodeTypeUpdatesRequest): any => ({
    ...obj,
  });
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

export namespace ListAllowedNodeTypeUpdatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAllowedNodeTypeUpdatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidARNFault extends __SmithyException, $MetadataBearer {
  name: "InvalidARNFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidARNFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidARNFault): any => ({
    ...obj,
  });
}

export interface ListTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want the list of tags</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsResponse {
  /**
   * <p>A list of tags as key-value pairs.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
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

export namespace ResetParameterGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetParameterGroupRequest): any => ({
    ...obj,
  });
}

export interface ResetParameterGroupResponse {
  /**
   * <p>The parameter group being reset.</p>
   */
  ParameterGroup?: ParameterGroup;
}

export namespace ResetParameterGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetParameterGroupResponse): any => ({
    ...obj,
  });
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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {
  /**
   * <p>A list of tags as key-value pairs.</p>
   */
  TagList?: Tag[];
}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TagNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "TagNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace TagNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagNotFoundFault): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {
  /**
   * <p>The list of tags removed</p>
   */
  TagList?: Tag[];
}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
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

export namespace UpdateACLRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateACLRequest): any => ({
    ...obj,
  });
}

export interface UpdateACLResponse {
  /**
   * <p>The updated Access Control List</p>
   */
  ACL?: ACL;
}

export namespace UpdateACLResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateACLResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidNodeStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidNodeStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidNodeStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNodeStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface NoOperationFault extends __SmithyException, $MetadataBearer {
  name: "NoOperationFault";
  $fault: "client";
  message?: string;
}

export namespace NoOperationFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoOperationFault): any => ({
    ...obj,
  });
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

export namespace ReplicaConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicaConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace ShardConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShardConfigurationRequest): any => ({
    ...obj,
  });
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
   * <p>The maintenance window to update</p>
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

export namespace UpdateClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterRequest): any => ({
    ...obj,
  });
}

export interface UpdateClusterResponse {
  /**
   * <p>The updated cluster</p>
   */
  Cluster?: Cluster;
}

export namespace UpdateClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterResponse): any => ({
    ...obj,
  });
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

export namespace ParameterNameValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterNameValue): any => ({
    ...obj,
  });
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

export namespace UpdateParameterGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateParameterGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateParameterGroupResponse {
  /**
   * <p>The updated parameter group</p>
   */
  ParameterGroup?: ParameterGroup;
}

export namespace UpdateParameterGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateParameterGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SubnetInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetInUse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetInUse): any => ({
    ...obj,
  });
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

export namespace UpdateSubnetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSubnetGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateSubnetGroupResponse {
  /**
   * <p>The updated subnet group</p>
   */
  SubnetGroup?: SubnetGroup;
}

export namespace UpdateSubnetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSubnetGroupResponse): any => ({
    ...obj,
  });
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

export namespace UpdateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserResponse {
  /**
   * <p>The updated user</p>
   */
  User?: User;
}

export namespace UpdateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
  });
}
