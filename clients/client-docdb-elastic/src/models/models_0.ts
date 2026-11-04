// smithy-typescript generated code
import type { Auth, OptInType, SnapshotType, Status } from "./enums";

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionInput {
  /**
   * The Amazon DocumentDB Amazon Resource Name (ARN) of the resource to which the pending maintenance action applies.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The pending maintenance action to apply to the resource.
   *
   * Valid actions are:
   *
   * - `ENGINE_UPDATE`
   * - `ENGINE_UPGRADE`
   * - `SECURITY_UPDATE`
   * - `OS_UPDATE`
   * - `MASTER_USER_PASSWORD_UPDATE`
   *
   * @public
   */
  applyAction: string | undefined;

  /**
   * A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type `IMMEDIATE` can't be undone.
   *
   * @public
   */
  optInType: OptInType | undefined;

  /**
   * A specific date to apply the pending maintenance action. Required if opt-in-type is `APPLY_ON`. Format: `yyyy/MM/dd HH:mm-yyyy/MM/dd HH:mm`
   *
   * @public
   */
  applyOn?: string | undefined;
}

/**
 * Retrieves the details of maintenance actions that are pending.
 *
 * @public
 */
export interface PendingMaintenanceActionDetails {
  /**
   * Displays the specific action of a pending maintenance action.
   *
   * @public
   */
  action: string | undefined;

  /**
   * Displays the date of the maintenance window when the action is applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any `NEXT_MAINTENANCE` `optInType` requests are ignored.
   *
   * @public
   */
  autoAppliedAfterDate?: string | undefined;

  /**
   * Displays the date when the maintenance action is automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any `IMMEDIATE` `optInType` requests are ignored.
   *
   * @public
   */
  forcedApplyDate?: string | undefined;

  /**
   * Displays the type of `optInType` request that has been received for the resource.
   *
   * @public
   */
  optInStatus?: string | undefined;

  /**
   * Displays the effective date when the pending maintenance action is applied to the resource.
   *
   * @public
   */
  currentApplyDate?: string | undefined;

  /**
   * Displays a description providing more detail about the maintenance action.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Provides information about a pending maintenance action for a resource.
 *
 * @public
 */
export interface ResourcePendingMaintenanceAction {
  /**
   * The Amazon DocumentDB Amazon Resource Name (ARN) of the resource to which the pending maintenance action applies.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * Provides information about a pending maintenance action for a resource.
   *
   * @public
   */
  pendingMaintenanceActionDetails?: PendingMaintenanceActionDetails[] | undefined;
}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionOutput {
  /**
   * The output of the pending maintenance action being applied.
   *
   * @public
   */
  resourcePendingMaintenanceAction: ResourcePendingMaintenanceAction | undefined;
}

/**
 * A specific field in which a given validation exception occurred.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field where the validation exception occurred.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An error message describing the validation exception in this field.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CopyClusterSnapshotInput {
  /**
   * The Amazon Resource Name (ARN) identifier of the elastic cluster snapshot.
   *
   * @public
   */
  snapshotArn: string | undefined;

  /**
   * The identifier of the new elastic cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `elastic-cluster-snapshot-5`
   *
   * @public
   */
  targetSnapshotName: string | undefined;

  /**
   * The Amazon Web Services KMS key ID for an encrypted elastic cluster snapshot. The Amazon Web Services KMS key ID is the Amazon Resource Name (ARN), Amazon Web Services KMS key identifier, or the Amazon Web Services KMS key alias for the Amazon Web Services KMS encryption key.
   *
   * If you copy an encrypted elastic cluster snapshot from your Amazon Web Services account, you can specify a value for `KmsKeyId` to encrypt the copy with a new Amazon Web ServicesS KMS encryption key. If you don't specify a value for `KmsKeyId`, then the copy of the elastic cluster snapshot is encrypted with the same `AWS` KMS key as the source elastic cluster snapshot.
   *
   * To copy an encrypted elastic cluster snapshot to another Amazon Web Services region, set `KmsKeyId` to the Amazon Web Services KMS key ID that you want to use to encrypt the copy of the elastic cluster snapshot in the destination region. Amazon Web Services KMS encryption keys are specific to the Amazon Web Services region that they are created in, and you can't use encryption keys from one Amazon Web Services region in another Amazon Web Services region.
   *
   * If you copy an unencrypted elastic cluster snapshot and specify a value for the `KmsKeyId` parameter, an error is returned.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Set to `true` to copy all tags from the source cluster snapshot to the target elastic cluster snapshot. The default is `false`.
   *
   * @public
   */
  copyTags?: boolean | undefined;

  /**
   * The tags to be assigned to the elastic cluster snapshot.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Returns information about a specific elastic cluster snapshot.
 *
 * @public
 */
export interface ClusterSnapshot {
  /**
   * The Amazon EC2 subnet IDs for the elastic cluster.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The name of the elastic cluster snapshot.
   *
   * @public
   */
  snapshotName: string | undefined;

  /**
   * The ARN identifier of the elastic cluster snapshot.
   *
   * @public
   */
  snapshotArn: string | undefined;

  /**
   * The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).
   *
   * @public
   */
  snapshotCreationTime: string | undefined;

  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * The time when the elastic cluster was created in Universal Coordinated Time (UTC).
   *
   * @public
   */
  clusterCreationTime: string | undefined;

  /**
   * The status of the elastic cluster snapshot.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * A list of EC2 VPC security groups to associate with the elastic cluster.
   *
   * @public
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * The name of the elastic cluster administrator.
   *
   * @public
   */
  adminUserName: string | undefined;

  /**
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key. If an encryption key is not specified here, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.
   *
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * The type of cluster snapshots to be returned. You can specify one of the following values:
   *
   * - `automated` - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.
   * - `manual` - Return all cluster snapshots that you have manually created for your Amazon Web Services account.
   *
   * @public
   */
  snapshotType?: SnapshotType | undefined;
}

/**
 * @public
 */
export interface CopyClusterSnapshotOutput {
  /**
   * Returns information about a specific elastic cluster snapshot.
   *
   * @public
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface CreateClusterInput {
  /**
   * The name of the new elastic cluster. This parameter is stored as a lowercase string.
   *
   * *Constraints*:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * *Example*: `my-cluster`
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The authentication type used to determine where to fetch the password used for accessing the elastic cluster. Valid types are `PLAIN_TEXT` or `SECRET_ARN`.
   *
   * @public
   */
  authType: Auth | undefined;

  /**
   * The name of the Amazon DocumentDB elastic clusters administrator.
   *
   * *Constraints*:
   *
   * - Must be from 1 to 63 letters or numbers.
   * - The first character must be a letter.
   * - Cannot be a reserved word.
   *
   * @public
   */
  adminUserName: string | undefined;

  /**
   * The password for the Amazon DocumentDB elastic clusters administrator. The password can contain any printable ASCII characters.
   *
   * *Constraints*:
   *
   * - Must contain from 8 to 100 characters.
   * - Cannot contain a forward slash (/), double quote ("), or the "at" symbol (@).
   *
   * @public
   */
  adminUserPassword: string | undefined;

  /**
   * The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.
   *
   * @public
   */
  shardCapacity: number | undefined;

  /**
   * The number of shards assigned to the elastic cluster. Maximum is 32.
   *
   * @public
   */
  shardCount: number | undefined;

  /**
   * A list of EC2 VPC security groups to associate with the new elastic cluster.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The Amazon EC2 subnet IDs for the new elastic cluster.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The KMS key identifier to use to encrypt the new elastic cluster.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.
   *
   * If an encryption key is not specified, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The client token for the elastic cluster.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * *Format*: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * *Default*: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.
   *
   * *Valid days*: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * *Constraints*: Minimum 30-minute window.
   *
   * @public
   */
  preferredMaintenanceWindow?: string | undefined;

  /**
   * The tags to be assigned to the new elastic cluster.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The number of days for which automatic snapshots are retained.
   *
   * @public
   */
  backupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `backupRetentionPeriod`.
   *
   * @public
   */
  preferredBackupWindow?: string | undefined;

  /**
   * The number of replica instances applying to all shards in the elastic cluster. A `shardInstanceCount` value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
   *
   * @public
   */
  shardInstanceCount?: number | undefined;
}

/**
 * The name of the shard.
 *
 * @public
 */
export interface Shard {
  /**
   * The ID of the shard.
   *
   * @public
   */
  shardId: string | undefined;

  /**
   * The time when the shard was created in Universal Coordinated Time (UTC).
   *
   * @public
   */
  createTime: string | undefined;

  /**
   * The current status of the shard.
   *
   * @public
   */
  status: Status | undefined;
}

/**
 * Returns information about a specific elastic cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The name of the elastic cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * The status of the elastic cluster.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * The URL used to connect to the elastic cluster.
   *
   * @public
   */
  clusterEndpoint: string | undefined;

  /**
   * The time when the elastic cluster was created in Universal Coordinated Time (UTC).
   *
   * @public
   */
  createTime: string | undefined;

  /**
   * The name of the elastic cluster administrator.
   *
   * @public
   */
  adminUserName: string | undefined;

  /**
   * The authentication type for the elastic cluster.
   *
   * @public
   */
  authType: Auth | undefined;

  /**
   * The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.
   *
   * @public
   */
  shardCapacity: number | undefined;

  /**
   * The number of shards assigned to the elastic cluster. Maximum is 32.
   *
   * @public
   */
  shardCount: number | undefined;

  /**
   * A list of EC2 VPC security groups associated with thie elastic cluster.
   *
   * @public
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * The Amazon EC2 subnet IDs for the elastic cluster.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * *Format*: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * @public
   */
  preferredMaintenanceWindow: string | undefined;

  /**
   * The KMS key identifier to use to encrypt the elastic cluster.
   *
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * The total number of shards in the cluster.
   *
   * @public
   */
  shards?: Shard[] | undefined;

  /**
   * The number of days for which automatic snapshots are retained.
   *
   * @public
   */
  backupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by `backupRetentionPeriod`.
   *
   * @public
   */
  preferredBackupWindow?: string | undefined;

  /**
   * The number of replica instances applying to all shards in the cluster. A `shardInstanceCount` value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
   *
   * @public
   */
  shardInstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface CreateClusterOutput {
  /**
   * The new elastic cluster that has been created.
   *
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateClusterSnapshotInput {
  /**
   * The ARN identifier of the elastic cluster of which you want to create a snapshot.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * The name of the new elastic cluster snapshot.
   *
   * @public
   */
  snapshotName: string | undefined;

  /**
   * The tags to be assigned to the new elastic cluster snapshot.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateClusterSnapshotOutput {
  /**
   * Returns information about the new elastic cluster snapshot.
   *
   * @public
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface DeleteClusterInput {
  /**
   * The ARN identifier of the elastic cluster that is to be deleted.
   *
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterOutput {
  /**
   * Returns information about the newly deleted elastic cluster.
   *
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotInput {
  /**
   * The ARN identifier of the elastic cluster snapshot that is to be deleted.
   *
   * @public
   */
  snapshotArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotOutput {
  /**
   * Returns information about the newly deleted elastic cluster snapshot.
   *
   * @public
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface GetClusterInput {
  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterOutput {
  /**
   * Returns information about a specific elastic cluster.
   *
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface GetClusterSnapshotInput {
  /**
   * The ARN identifier of the elastic cluster snapshot.
   *
   * @public
   */
  snapshotArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterSnapshotOutput {
  /**
   * Returns information about a specific elastic cluster snapshot.
   *
   * @public
   */
  snapshot: ClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface GetPendingMaintenanceActionInput {
  /**
   * Retrieves pending maintenance actions for a specific Amazon Resource Name (ARN).
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetPendingMaintenanceActionOutput {
  /**
   * Provides information about a pending maintenance action for a resource.
   *
   * @public
   */
  resourcePendingMaintenanceAction: ResourcePendingMaintenanceAction | undefined;
}

/**
 * @public
 */
export interface ListClustersInput {
  /**
   * A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by `max-results`.
   *
   * If there is no more data in the responce, the `nextToken` will not be returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of elastic cluster snapshot results to receive in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A list of Amazon DocumentDB elastic clusters.
 *
 * @public
 */
export interface ClusterInList {
  /**
   * The name of the elastic cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * The status of the elastic cluster.
   *
   * @public
   */
  status: Status | undefined;
}

/**
 * @public
 */
export interface ListClustersOutput {
  /**
   * A list of Amazon DocumentDB elastic clusters.
   *
   * @public
   */
  clusters?: ClusterInList[] | undefined;

  /**
   * A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by `max-results`.
   *
   * If there is no more data in the responce, the `nextToken` will not be returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterSnapshotsInput {
  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn?: string | undefined;

  /**
   * A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by `max-results`.
   *
   * If there is no more data in the responce, the `nextToken` will not be returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of elastic cluster snapshot results to receive in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The type of cluster snapshots to be returned. You can specify one of the following values:
   *
   * - `automated` - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.
   * - `manual` - Return all cluster snapshots that you have manually created for your Amazon Web Services account.
   *
   * @public
   */
  snapshotType?: string | undefined;
}

/**
 * A list of elastic cluster snapshots.
 *
 * @public
 */
export interface ClusterSnapshotInList {
  /**
   * The name of the elastic cluster snapshot.
   *
   * @public
   */
  snapshotName: string | undefined;

  /**
   * The ARN identifier of the elastic cluster snapshot.
   *
   * @public
   */
  snapshotArn: string | undefined;

  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * The status of the elastic cluster snapshot.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * The time when the elastic cluster snapshot was created in Universal Coordinated Time (UTC).
   *
   * @public
   */
  snapshotCreationTime: string | undefined;
}

/**
 * @public
 */
export interface ListClusterSnapshotsOutput {
  /**
   * A list of snapshots for a specified elastic cluster.
   *
   * @public
   */
  snapshots?: ClusterSnapshotInList[] | undefined;

  /**
   * A pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond this token, up to the value specified by `max-results`.
   *
   * If there is no more data in the responce, the `nextToken` will not be returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPendingMaintenanceActionsInput {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `maxResults`.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to include in the response. If more records exist than the specified `maxResults` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPendingMaintenanceActionsOutput {
  /**
   * Provides information about a pending maintenance action for a resource.
   *
   * @public
   */
  resourcePendingMaintenanceActions: ResourcePendingMaintenanceAction[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is displayed, the responses will include only records beyond the marker, up to the value specified by `maxResults`.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN identifier of the elastic cluster resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags for the specified elastic cluster resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RestoreClusterFromSnapshotInput {
  /**
   * The name of the elastic cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN identifier of the elastic cluster snapshot.
   *
   * @public
   */
  snapshotArn: string | undefined;

  /**
   * A list of EC2 VPC security groups to associate with the elastic cluster.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The Amazon EC2 subnet IDs for the elastic cluster.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The KMS key identifier to use to encrypt the new Amazon DocumentDB elastic clusters cluster.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.
   *
   * If an encryption key is not specified here, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * A list of the tag names to be assigned to the restored elastic cluster, in the form of an array of key-value pairs in which the key is the tag name and the value is the key value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The capacity of each shard in the new restored elastic cluster.
   *
   * @public
   */
  shardCapacity?: number | undefined;

  /**
   * The number of replica instances applying to all shards in the elastic cluster. A `shardInstanceCount` value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
   *
   * @public
   */
  shardInstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface RestoreClusterFromSnapshotOutput {
  /**
   * Returns information about a the restored elastic cluster.
   *
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface StartClusterInput {
  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface StartClusterOutput {
  /**
   * Returns information about a specific elastic cluster.
   *
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface StopClusterInput {
  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn: string | undefined;
}

/**
 * @public
 */
export interface StopClusterOutput {
  /**
   * Returns information about a specific elastic cluster.
   *
   * @public
   */
  cluster: Cluster | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN identifier of the elastic cluster resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags that are assigned to the elastic cluster resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN identifier of the elastic cluster resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to be removed from the elastic cluster resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateClusterInput {
  /**
   * The ARN identifier of the elastic cluster.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * The authentication type used to determine where to fetch the password used for accessing the elastic cluster. Valid types are `PLAIN_TEXT` or `SECRET_ARN`.
   *
   * @public
   */
  authType?: Auth | undefined;

  /**
   * The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.
   *
   * @public
   */
  shardCapacity?: number | undefined;

  /**
   * The number of shards assigned to the elastic cluster. Maximum is 32.
   *
   * @public
   */
  shardCount?: number | undefined;

  /**
   * A list of EC2 VPC security groups to associate with the elastic cluster.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The Amazon EC2 subnet IDs for the elastic cluster.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The password associated with the elastic cluster administrator. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).
   *
   * *Constraints*: Must contain from 8 to 100 characters.
   *
   * @public
   */
  adminUserPassword?: string | undefined;

  /**
   * The client token for the elastic cluster.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * *Format*: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * *Default*: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.
   *
   * *Valid days*: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * *Constraints*: Minimum 30-minute window.
   *
   * @public
   */
  preferredMaintenanceWindow?: string | undefined;

  /**
   * The number of days for which automatic snapshots are retained.
   *
   * @public
   */
  backupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `backupRetentionPeriod`.
   *
   * @public
   */
  preferredBackupWindow?: string | undefined;

  /**
   * The number of replica instances applying to all shards in the elastic cluster. A `shardInstanceCount` value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
   *
   * @public
   */
  shardInstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface UpdateClusterOutput {
  /**
   * Returns information about the updated elastic cluster.
   *
   * @public
   */
  cluster: Cluster | undefined;
}
