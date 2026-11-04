// smithy-typescript generated code
import type { ApplyMethod, FailoverStatus, GlobalClusterMemberSynchronizationStatus, SourceType } from "./enums";

/**
 * Represents the input to AddSourceIdentifierToSubscription.
 *
 * @public
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * The name of the Amazon DocumentDB event notification subscription that you want to add a source identifier to.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The identifier of the event source to be added:
   *
   * - If the source type is an instance, a `DBInstanceIdentifier` must be provided.
   * - If the source type is a security group, a `DBSecurityGroupName` must be provided.
   * - If the source type is a parameter group, a `DBParameterGroupName` must be provided.
   * - If the source type is a snapshot, a `DBSnapshotIdentifier` must be provided.
   *
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * Detailed information about an event to which you have subscribed.
 *
 * @public
 */
export interface EventSubscription {
  /**
   * The Amazon Web Services customer account that is associated with the Amazon DocumentDB event notification subscription.
   *
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * The Amazon DocumentDB event notification subscription ID.
   *
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * The topic ARN of the Amazon DocumentDB event notification subscription.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The status of the Amazon DocumentDB event notification subscription.
   *
   * Constraints:
   *
   * Can be one of the following: `creating`, `modifying`, `deleting`, `active`, `no-permission`, `topic-not-exist`
   *
   * The `no-permission` status indicates that Amazon DocumentDB no longer has permission to post to the SNS topic. The `topic-not-exist` status indicates that the topic was deleted after the subscription was created.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The time at which the Amazon DocumentDB event notification subscription was created.
   *
   * @public
   */
  SubscriptionCreationTime?: string | undefined;

  /**
   * The source type for the Amazon DocumentDB event notification subscription.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of source IDs for the Amazon DocumentDB event notification subscription.
   *
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * A list of event categories for the Amazon DocumentDB event notification subscription.
   *
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * A Boolean value indicating whether the subscription is enabled. A value of `true` indicates that the subscription is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) for the event subscription.
   *
   * @public
   */
  EventSubscriptionArn?: string | undefined;
}

/**
 * @public
 */
export interface AddSourceIdentifierToSubscriptionResult {
  /**
   * Detailed information about an event to which you have subscribed.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * The required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with "`aws:`" or "`rds:`". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with "`aws:`" or "`rds:`". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Represents the input to AddTagsToResource.
 *
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * The Amazon DocumentDB resource that the tags are added to. This value is an Amazon Resource Name .
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The tags to be assigned to the Amazon DocumentDB resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * Represents the input to ApplyPendingMaintenanceAction.
 *
 * @public
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The pending maintenance action to apply to this resource.
   *
   * Valid values: `system-update`, `db-upgrade`
   *
   * @public
   */
  ApplyAction: string | undefined;

  /**
   * A value that specifies the type of opt-in request or undoes an opt-in request. An opt-in request of type `immediate` can't be undone.
   *
   * Valid values:
   *
   * - `immediate` - Apply the maintenance action immediately.
   * - `next-maintenance` - Apply the maintenance action during the next maintenance window for the resource.
   * - `undo-opt-in` - Cancel any existing `next-maintenance` opt-in requests.
   *
   * @public
   */
  OptInType: string | undefined;
}

/**
 * Provides information about a pending maintenance action for a resource.
 *
 * @public
 */
export interface PendingMaintenanceAction {
  /**
   * The type of pending maintenance action that is available for the resource.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The date of the maintenance window when the action is applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any `next-maintenance` opt-in requests are ignored.
   *
   * @public
   */
  AutoAppliedAfterDate?: Date | undefined;

  /**
   * The date when the maintenance action is automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any `immediate` opt-in requests are ignored.
   *
   * @public
   */
  ForcedApplyDate?: Date | undefined;

  /**
   * Indicates the type of opt-in request that has been received for the resource.
   *
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * The effective date when the pending maintenance action is applied to the resource.
   *
   * @public
   */
  CurrentApplyDate?: Date | undefined;

  /**
   * A description providing more detail about the maintenance action.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Represents the output of ApplyPendingMaintenanceAction.
 *
 * @public
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * The Amazon Resource Name (ARN) of the resource that has pending maintenance actions.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * A list that provides details about the pending maintenance actions for the resource.
   *
   * @public
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[] | undefined;
}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionResult {
  /**
   * Represents the output of ApplyPendingMaintenanceAction.
   *
   * @public
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | undefined;
}

/**
 * Represents the input to CopyDBClusterParameterGroup.
 *
 * @public
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * The identifier or Amazon Resource Name (ARN) for the source cluster parameter group.
   *
   * Constraints:
   *
   * - Must specify a valid cluster parameter group.
   * - If the source cluster parameter group is in the same Amazon Web Services Region as the copy, specify a valid parameter group identifier; for example, `my-db-cluster-param-group`, or a valid ARN.
   * - If the source parameter group is in a different Amazon Web Services Region than the copy, specify a valid cluster parameter group ARN; for example, `arn:aws:rds:us-east-1:123456789012:sample-cluster:sample-parameter-group`.
   *
   * @public
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * The identifier for the copied cluster parameter group.
   *
   * Constraints:
   *
   * - Cannot be null, empty, or blank.
   * - Must contain from 1 to 255 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster-param-group1`
   *
   * @public
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * A description for the copied cluster parameter group.
   *
   * @public
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * The tags that are to be assigned to the parameter group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Detailed information about a cluster parameter group.
 *
 * @public
 */
export interface DBClusterParameterGroup {
  /**
   * Provides the name of the cluster parameter group.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * Provides the name of the parameter group family that this cluster parameter group is compatible with.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * Provides the customer-specified description for this cluster parameter group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the cluster parameter group.
   *
   * @public
   */
  DBClusterParameterGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterParameterGroupResult {
  /**
   * Detailed information about a cluster parameter group.
   *
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * Represents the input to CopyDBClusterSnapshot.
 *
 * @public
 */
export interface CopyDBClusterSnapshotMessage {
  /**
   * The identifier of the cluster snapshot to copy. This parameter is not case sensitive.
   *
   * Constraints:
   *
   * - Must specify a valid cluster snapshot in the *available* state.
   * - If the source cluster snapshot is in the same Amazon Web Services Region as the copy, specify a valid snapshot identifier.
   * - If the source cluster snapshot is in a different Amazon Web Services Region or owned by another Amazon Web Services account, specify the snapshot ARN.
   *
   * Example: `my-cluster-snapshot1`
   *
   * @public
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * The identifier of the new cluster snapshot to create from the source cluster snapshot. This parameter is not case sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster-snapshot2`
   *
   * @public
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * The KMS key ID for an encrypted cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.
   *
   * If you copy an encrypted cluster snapshot from your Amazon Web Services account, you can specify a value for `KmsKeyId` to encrypt the copy with a new KMS encryption key. If you don't specify a value for `KmsKeyId`, then the copy of the cluster snapshot is encrypted with the same KMS key as the source cluster snapshot.
   *
   * If you copy an encrypted cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for `KmsKeyId`.
   *
   * To copy an encrypted cluster snapshot to another Amazon Web Services Region, set `KmsKeyId` to the KMS key ID that you want to use to encrypt the copy of the cluster snapshot in the destination Region. KMS encryption keys are specific to the Amazon Web Services Region that they are created in, and you can't use encryption keys from one Amazon Web Services Region in another Amazon Web Services Region.
   *
   * If you copy an unencrypted cluster snapshot and specify a value for the `KmsKeyId` parameter, an error is returned.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The URL that contains a Signature Version 4 signed request for the`CopyDBClusterSnapshot` API action in the Amazon Web Services Region that contains the source cluster snapshot to copy. You must use the `PreSignedUrl` parameter when copying a cluster snapshot from another Amazon Web Services Region.
   *
   * If you are using an Amazon Web Services SDK tool or the CLI, you can specify `SourceRegion` (or `--source-region` for the CLI) instead of specifying `PreSignedUrl` manually. Specifying `SourceRegion` autogenerates a pre-signed URL that is a valid request for the operation that can be executed in the source Amazon Web Services Region.
   *
   * The presigned URL must be a valid request for the `CopyDBClusterSnapshot` API action that can be executed in the source Amazon Web Services Region that contains the cluster snapshot to be copied. The presigned URL request must contain the following parameter values:
   *
   * - `SourceRegion` - The ID of the region that contains the snapshot to be copied.
   * - `SourceDBClusterSnapshotIdentifier` - The identifier for the the encrypted cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted cluster snapshot from the us-east-1 Amazon Web Services Region, then your `SourceDBClusterSnapshotIdentifier` looks something like the following: `arn:aws:rds:us-east-1:12345678012:sample-cluster:sample-cluster-snapshot`.
   * - `TargetDBClusterSnapshotIdentifier` - The identifier for the new cluster snapshot to be created. This parameter isn't case sensitive.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * Set to `true` to copy all tags from the source cluster snapshot to the target cluster snapshot, and otherwise `false`. The default is `false`.
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * The tags to be assigned to the cluster snapshot.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Detailed information about a cluster snapshot.
 *
 * @public
 */
export interface DBClusterSnapshot {
  /**
   * Provides the list of Amazon EC2 Availability Zones that instances in the cluster snapshot can be restored in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * Specifies the identifier for the cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * Specifies the cluster identifier of the cluster that this cluster snapshot was created from.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Provides the time when the snapshot was taken, in UTC.
   *
   * @public
   */
  SnapshotCreateTime?: Date | undefined;

  /**
   * Specifies the name of the database engine.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Specifies the status of this cluster snapshot.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Specifies the port that the cluster was listening on at the time of the snapshot.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Provides the virtual private cloud (VPC) ID that is associated with the cluster snapshot.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Specifies the time when the cluster was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * Provides the master user name for the cluster snapshot.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * Provides the version of the database engine for this cluster snapshot.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Provides the type of the cluster snapshot.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * Specifies the percentage of the estimated data that has been transferred.
   *
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * Specifies whether the cluster snapshot is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * If `StorageEncrypted` is `true`, the KMS key identifier for the encrypted cluster snapshot.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshotArn?: string | undefined;

  /**
   * If the cluster snapshot was copied from a source cluster snapshot, the ARN for the source cluster snapshot; otherwise, a null value.
   *
   * @public
   */
  SourceDBClusterSnapshotArn?: string | undefined;

  /**
   * Storage type associated with your cluster snapshot
   *
   * For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the *Amazon DocumentDB Developer Guide*.
   *
   * Valid values for storage type - `standard | iopt1`
   *
   * Default value is `standard`
   *
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterSnapshotResult {
  /**
   * Detailed information about a cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * Sets the scaling configuration of an Amazon DocumentDB Serverless cluster.
 *
 * @public
 */
export interface ServerlessV2ScalingConfiguration {
  /**
   * The minimum number of Amazon DocumentDB capacity units (DCUs) for an instance in an Amazon DocumentDB Serverless cluster. You can specify DCU values in half-step increments, such as 8, 8.5, 9, and so on.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum number of Amazon DocumentDB capacity units (DCUs) for an instance in an Amazon DocumentDB Serverless cluster. You can specify DCU values in half-step increments, such as 32, 32.5, 33, and so on.
   *
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * Represents the input to CreateDBCluster.
 *
 * @public
 */
export interface CreateDBClusterMessage {
  /**
   * A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The number of days for which automated backups are retained. You must specify a minimum value of 1.
   *
   * Default: 1
   *
   * Constraints:
   *
   * - Must be a value from 1 to 35.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The cluster identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The name of the cluster parameter group to associate with this cluster.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A list of EC2 VPC security groups to associate with this cluster.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * A subnet group to associate with this cluster.
   *
   * Constraints: Must match the name of an existing `DBSubnetGroup`. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The name of the database engine to be used for this cluster.
   *
   * Valid values: `docdb`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The version number of the database engine to use. The `--engine-version` will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The port number on which the instances in the cluster accept connections.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the master user for the cluster.
   *
   * Constraints:
   *
   * - Must be from 1 to 63 letters or numbers.
   * - The first character must be a letter.
   * - Cannot be a reserved word for the chosen database engine.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).
   *
   * Constraints: Must contain from 8 to 100 characters.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region.
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.
   *
   * Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The tags to be assigned to the cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies whether the cluster is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The KMS key identifier for an encrypted cluster.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key.
   *
   * If an encryption key is not specified in `KmsKeyId`:
   *
   * - If the `StorageEncrypted` parameter is `true`, Amazon DocumentDB uses your default encryption key.
   *
   * KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Not currently supported.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see [Auditing Amazon DocumentDB Events](https://docs.aws.amazon.com/documentdb/latest/devguide/event-auditing.html) and [Profiling Amazon DocumentDB Operations](https://docs.aws.amazon.com/documentdb/latest/devguide/profiling.html).
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * Specifies whether this cluster can be deleted. If `DeletionProtection` is enabled, the cluster cannot be deleted unless it is modified and `DeletionProtection` is disabled. `DeletionProtection` protects clusters from being accidentally deleted.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The cluster identifier of the new global cluster.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * The storage type to associate with the DB cluster.
   *
   * For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the *Amazon DocumentDB Developer Guide*.
   *
   * Valid values for storage type - `standard | iopt1`
   *
   * Default value is `standard`
   *
   * > **Note:** When you create an Amazon DocumentDB cluster with the storage type set to `iopt1`, the storage type is returned in the response. The storage type isn't returned when you set it to `standard`.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Contains the scaling configuration of an Amazon DocumentDB Serverless cluster.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * Constraint: You can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the DB cluster.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * If you don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * The network type of the cluster.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [DocumentDB clusters in a VPC](https://docs.aws.amazon.com/documentdb/latest/devguide/vpc-clusters.html) in the Amazon DocumentDB Developer Guide.
   *
   * Valid Values: `IPV4` | `DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;
}

/**
 * Describes an Identity and Access Management (IAM) role that is associated with a cluster.
 *
 * @public
 */
export interface DBClusterRole {
  /**
   * The Amazon Resource Name (ARN) of the IAMrole that is associated with the DB cluster.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Describes the state of association between the IAMrole and the cluster. The `Status` property returns one of the following values:
   *
   * - `ACTIVE` - The IAMrole ARN is associated with the cluster and can be used to access other Amazon Web Services services on your behalf.
   * - `PENDING` - The IAMrole ARN is being associated with the cluster.
   * - `INVALID` - The IAMrole ARN is associated with the cluster, but the cluster cannot assume the IAMrole to access other Amazon Web Services services on your behalf.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Contains information about an instance that is part of a cluster.
 *
 * @public
 */
export interface DBClusterMember {
  /**
   * Specifies the instance identifier for this member of the cluster.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * A value that is `true` if the cluster member is the primary instance for the cluster and `false` otherwise.
   *
   * @public
   */
  IsClusterWriter?: boolean | undefined;

  /**
   * Specifies the status of the cluster parameter group for this member of the DB cluster.
   *
   * @public
   */
  DBClusterParameterGroupStatus?: string | undefined;

  /**
   * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.
   *
   * @public
   */
  PromotionTier?: number | undefined;
}

/**
 * Contains the secret managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the master user password.
 *
 * @public
 */
export interface ClusterMasterUserSecret {
  /**
   * The Amazon Resource Name (ARN) of the secret.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The status of the secret.
   *
   * The possible status values include the following:
   *
   * - creating - The secret is being created.
   * - active - The secret is available for normal use and rotation.
   * - rotating - The secret is being rotated.
   * - impaired - The secret can be used to access database credentials, but it can't be rotated. A secret might have this status if, for example, permissions are changed so that Amazon DocumentDB can no longer access either the secret or the KMS key for the secret.
   *
   *   When a secret has this status, you can correct the condition that caused the status. Alternatively, modify the instance to turn off automatic management of database credentials, and then modify the instance again to turn on automatic management of database credentials.
   *
   * @public
   */
  SecretStatus?: string | undefined;

  /**
   * The Amazon Web Services KMS key identifier that is used to encrypt the secret.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Retrieves the scaling configuration for an Amazon DocumentDB Serverless cluster.
 *
 * @public
 */
export interface ServerlessV2ScalingConfigurationInfo {
  /**
   * The minimum number of Amazon DocumentDB capacity units (DCUs) for an instance in an Amazon DocumentDB Serverless cluster. You can specify DCU values in half-step increments, such as 8, 8.5, 9, and so on.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum number of Amazon DocumentDB capacity units (DCUs) for an instance in an Amazon DocumentDB Serverless cluster. You can specify DCU values in half-step increments, such as 32, 32.5, 33, and so on.
   *
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * Used as a response element for queries on virtual private cloud (VPC) security group membership.
 *
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * The name of the VPC security group.
   *
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * The status of the VPC security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Detailed information about a cluster.
 *
 * @public
 */
export interface DBCluster {
  /**
   * Provides the list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * Specifies the number of days for which automatic snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * Contains a user-supplied cluster identifier. This identifier is the unique key that identifies a cluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Specifies the name of the cluster parameter group for the cluster.
   *
   * @public
   */
  DBClusterParameterGroup?: string | undefined;

  /**
   * Specifies information on the subnet group that is associated with the cluster, including the name, description, and subnets in the subnet group.
   *
   * @public
   */
  DBSubnetGroup?: string | undefined;

  /**
   * Specifies the current state of this cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Specifies the progress of the operation as a percentage.
   *
   * @public
   */
  PercentProgress?: string | undefined;

  /**
   * The earliest time to which a database can be restored with point-in-time restore.
   *
   * @public
   */
  EarliestRestorableTime?: Date | undefined;

  /**
   * Specifies the connection endpoint for the primary instance of the cluster.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The reader endpoint for the cluster. The reader endpoint for a cluster load balances connections across the Amazon DocumentDB replicas that are available in a cluster. As clients request new connections to the reader endpoint, Amazon DocumentDB distributes the connection requests among the Amazon DocumentDB replicas in the cluster. This functionality can help balance your read workload across multiple Amazon DocumentDB replicas in your cluster.
   *
   * If a failover occurs, and the Amazon DocumentDB replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Amazon DocumentDB replicas in the cluster, you can then reconnect to the reader endpoint.
   *
   * @public
   */
  ReaderEndpoint?: string | undefined;

  /**
   * Specifies whether the cluster has instances in multiple Availability Zones.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * Provides the name of the database engine to be used for this cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Indicates the database engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Specifies the latest time to which a database can be restored with point-in-time restore.
   *
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * Specifies the port that the database engine is listening on.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Contains the master user name for the cluster.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Contains the identifier of the source cluster if this cluster is a secondary cluster.
   *
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * Contains one or more identifiers of the secondary clusters that are associated with this cluster.
   *
   * @public
   */
  ReadReplicaIdentifiers?: string[] | undefined;

  /**
   * Provides the list of instances that make up the cluster.
   *
   * @public
   */
  DBClusterMembers?: DBClusterMember[] | undefined;

  /**
   * Provides a list of virtual private cloud (VPC) security groups that the cluster belongs to.
   *
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
   *
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * Specifies whether the cluster is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * If `StorageEncrypted` is `true`, the KMS key identifier for the encrypted cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Web Services Region-unique, immutable identifier for the cluster. This identifier is found in CloudTrail log entries whenever the KMS key for the cluster is accessed.
   *
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the cluster.
   *
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * Provides a list of the Identity and Access Management (IAM) roles that are associated with the cluster. (IAM) roles that are associated with a cluster grant permission for the cluster to access other Amazon Web Services services on your behalf.
   *
   * @public
   */
  AssociatedRoles?: DBClusterRole[] | undefined;

  /**
   * Identifies the clone group to which the DB cluster is associated.
   *
   * @public
   */
  CloneGroupId?: string | undefined;

  /**
   * Specifies the time when the cluster was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * A list of log types that this cluster is configured to export to Amazon CloudWatch Logs.
   *
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * Specifies whether this cluster can be deleted. If `DeletionProtection` is enabled, the cluster cannot be deleted unless it is modified and `DeletionProtection` is disabled. `DeletionProtection` protects clusters from being accidentally deleted.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The next time you can modify the Amazon DocumentDB cluster to use the iopt1 storage type.
   *
   * @public
   */
  IOOptimizedNextAllowedModificationTime?: Date | undefined;

  /**
   * Storage type associated with your cluster
   *
   * For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the *Amazon DocumentDB Developer Guide*.
   *
   * Valid values for storage type - `standard | iopt1`
   *
   * Default value is `standard`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The scaling configuration of an Amazon DocumentDB Serverless cluster.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo | undefined;

  /**
   * The version of the Amazon DocumentDB Serverless platform used by the cluster.
   *
   * @public
   */
  ServerlessV2PlatformVersion?: string | undefined;

  /**
   * The secret managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the master user password.
   *
   * @public
   */
  MasterUserSecret?: ClusterMasterUserSecret | undefined;

  /**
   * The network type of the cluster.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [DocumentDB clusters in a VPC](https://docs.aws.amazon.com/documentdb/latest/devguide/vpc-clusters.html) in the Amazon DocumentDB Developer Guide.
   *
   * Valid Values: `IPV4` | `DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterResult {
  /**
   * Detailed information about a cluster.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * Represents the input of CreateDBClusterParameterGroup.
 *
 * @public
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * The name of the cluster parameter group.
   *
   * Constraints:
   *
   * - Must not match the name of an existing `DBClusterParameterGroup`.
   *
   * > **Note:** This value is stored as a lowercase string.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * The cluster parameter group family name.
   *
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * The description for the cluster parameter group.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The tags to be assigned to the cluster parameter group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterParameterGroupResult {
  /**
   * Detailed information about a cluster parameter group.
   *
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * Represents the input of CreateDBClusterSnapshot.
 *
 * @public
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * The identifier of the cluster snapshot. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster-snapshot1`
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * The identifier of the cluster to create a snapshot for. This parameter is not case sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing `DBCluster`.
   *
   * Example: `my-cluster`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The tags to be assigned to the cluster snapshot.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterSnapshotResult {
  /**
   * Detailed information about a cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * Represents the input to CreateDBInstance.
 *
 * @public
 */
export interface CreateDBInstanceMessage {
  /**
   * The instance identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `mydbinstance`
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The compute and memory capacity of the instance; for example, `db.r5.large`.
   *
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * The name of the database engine to be used for this instance.
   *
   * Valid value: `docdb`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The Amazon EC2 Availability Zone that the instance is created in.
   *
   * Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.
   *
   * Example: `us-east-1d`
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.
   *
   * Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.
   *
   * Default: `false`
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The tags to be assigned to the instance. You can assign up to 10 tags to an instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The identifier of the cluster that the instance will belong to.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.
   *
   * Default: 1
   *
   * Valid values: 0-15
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/documentdb/latest/devguide/performance-insights.html).
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The KMS key identifier for encryption of Performance Insights data.
   *
   * The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The CA certificate identifier to use for the DB instance's server certificate.
   *
   * For more information, see [Updating Your Amazon DocumentDB TLS Certificates](https://docs.aws.amazon.com/documentdb/latest/devguide/ca_cert_rotation.html) and [Encrypting Data in Transit](https://docs.aws.amazon.com/documentdb/latest/devguide/security.encryption.ssl.html) in the *Amazon DocumentDB Developer Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;
}

/**
 * Returns the details of the DB instance’s server certificate.
 *
 * For more information, see [Updating Your Amazon DocumentDB TLS Certificates](https://docs.aws.amazon.com/documentdb/latest/devguide/ca_cert_rotation.html) and [Encrypting Data in Transit](https://docs.aws.amazon.com/documentdb/latest/devguide/security.encryption.ssl.html) in the *Amazon DocumentDB Developer Guide*.
 *
 * @public
 */
export interface CertificateDetails {
  /**
   * The CA identifier of the CA certificate used for the DB instance's server certificate.
   *
   * @public
   */
  CAIdentifier?: string | undefined;

  /**
   * The expiration date of the DB instance’s server certificate.
   *
   * @public
   */
  ValidTill?: Date | undefined;
}

/**
 * Information about an Availability Zone.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * The name of the Availability Zone.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Detailed information about a subnet.
 *
 * @public
 */
export interface Subnet {
  /**
   * Specifies the identifier of the subnet.
   *
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * Specifies the Availability Zone for the subnet.
   *
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * Specifies the status of the subnet.
   *
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * Detailed information about a subnet group.
 *
 * @public
 */
export interface DBSubnetGroup {
  /**
   * The name of the subnet group.
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * Provides the description of the subnet group.
   *
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * Provides the virtual private cloud (VPC) ID of the subnet group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Provides the status of the subnet group.
   *
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * Detailed information about one or more subnets within a subnet group.
   *
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB subnet group.
   *
   * @public
   */
  DBSubnetGroupArn?: string | undefined;

  /**
   * The network type of the DB subnet group.
   *
   * Valid Values: `IPV4` | `DUAL`
   *
   * A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL).
   *
   * @public
   */
  SupportedNetworkTypes?: string[] | undefined;
}

/**
 * Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.
 *
 * @public
 */
export interface Endpoint {
  /**
   * Specifies the DNS address of the instance.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * Specifies the port that the database engine is listening on.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
   *
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.
 *
 * @public
 */
export interface PendingCloudwatchLogsExports {
  /**
   * Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.
   *
   * @public
   */
  LogTypesToEnable?: string[] | undefined;

  /**
   * Log types that are in the process of being enabled. After they are enabled, these log types are exported to Amazon CloudWatch Logs.
   *
   * @public
   */
  LogTypesToDisable?: string[] | undefined;
}

/**
 * One or more modified settings for an instance. These modified settings have been requested, but haven't been applied yet.
 *
 * @public
 */
export interface PendingModifiedValues {
  /**
   * Contains the new `DBInstanceClass` for the instance that will be applied or is currently being applied.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * Contains the new `AllocatedStorage` size for then instance that will be applied or is currently being applied.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Contains the pending or currently in-progress change of the master credentials for the instance.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * Specifies the pending port for the instance.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies the pending number of days for which automated backups are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * Indicates that the Single-AZ instance is to change to a Multi-AZ deployment.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * Indicates the database engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The license model for the instance.
   *
   * Valid values: `license-included`, `bring-your-own-license`, `general-public-license`
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * Specifies the new Provisioned IOPS value for the instance that will be applied or is currently being applied.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Contains the new `DBInstanceIdentifier` for the instance that will be applied or is currently being applied.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * Specifies the storage type to be associated with the instance.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Specifies the identifier of the certificate authority (CA) certificate for the DB instance.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The new subnet group for the instance.
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.
   *
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;
}

/**
 * Provides a list of status information for an instance.
 *
 * @public
 */
export interface DBInstanceStatusInfo {
  /**
   * This value is currently "`read replication`."
   *
   * @public
   */
  StatusType?: string | undefined;

  /**
   * A Boolean value that is `true` if the instance is operating normally, or `false` if the instance is in an error state.
   *
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * Status of the instance. For a `StatusType` of read replica, the values can be `replicating`, error, `stopped`, or `terminated`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Details of the error if there is an error for the instance. If the instance is not in an error state, this value is blank.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Detailed information about an instance.
 *
 * @public
 */
export interface DBInstance {
  /**
   * Contains a user-provided database identifier. This identifier is the unique key that identifies an instance.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * Contains the name of the compute and memory capacity class of the instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * Provides the name of the database engine to be used for this instance.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Specifies the current state of this database.
   *
   * @public
   */
  DBInstanceStatus?: string | undefined;

  /**
   * Specifies the connection endpoint.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * Provides the date and time that the instance was created.
   *
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * Specifies the number of days for which automatic snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * Provides a list of VPC security group elements that the instance belongs to.
   *
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * Specifies the name of the Availability Zone that the instance is located in.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Specifies information on the subnet group that is associated with the instance, including the name, description, and subnets in the subnet group.
   *
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;

  /**
   * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies that changes to the instance are pending. This element is included only when changes are pending. Specific changes are identified by subelements.
   *
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * Specifies the latest time to which a database can be restored with point-in-time restore.
   *
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * Indicates the database engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Does not apply. This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Not supported. Amazon DocumentDB does not currently support public endpoints. The value of `PubliclyAccessible` is always `false`.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The status of a read replica. If the instance is not a read replica, this is blank.
   *
   * @public
   */
  StatusInfos?: DBInstanceStatusInfo[] | undefined;

  /**
   * Contains the name of the cluster that the instance is a member of if the instance is a member of a cluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Specifies whether or not the instance is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * If `StorageEncrypted` is `true`, the KMS key identifier for the encrypted instance.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Web Services Region-unique, immutable identifier for the instance. This identifier is found in CloudTrail log entries whenever the KMS key for the instance is accessed.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * The identifier of the CA certificate for this DB instance.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the instance.
   *
   * @public
   */
  DBInstanceArn?: string | undefined;

  /**
   * A list of log types that this instance is configured to export to CloudWatch Logs.
   *
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * The details of the DB instance's server certificate.
   *
   * @public
   */
  CertificateDetails?: CertificateDetails | undefined;

  /**
   * Set to `true` if Amazon RDS Performance Insights is enabled for the DB instance, and otherwise `false`.
   *
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * The KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceResult {
  /**
   * Detailed information about an instance.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * Represents the input to CreateDBSubnetGroup.
 *
 * @public
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * The name for the subnet group. This value is stored as a lowercase string.
   *
   * Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * The description for the subnet group.
   *
   * @public
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * The Amazon EC2 subnet IDs for the subnet group.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The tags to be assigned to the subnet group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSubnetGroupResult {
  /**
   * Detailed information about a subnet group.
   *
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * Represents the input to CreateEventSubscription.
 *
 * @public
 */
export interface CreateEventSubscriptionMessage {
  /**
   * The name of the subscription.
   *
   * Constraints: The name must be fewer than 255 characters.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.
   *
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, you would set this parameter to `db-instance`. If this value is not specified, all events are returned.
   *
   * Valid values: `db-instance`, `db-cluster`, `db-parameter-group`, `db-security-group`, `db-cluster-snapshot`
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories for a `SourceType` that you want to subscribe to.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
   *
   * Constraints:
   *
   * - If `SourceIds` are provided, `SourceType` must also be provided.
   * - If the source type is an instance, a `DBInstanceIdentifier` must be provided.
   * - If the source type is a security group, a `DBSecurityGroupName` must be provided.
   * - If the source type is a parameter group, a `DBParameterGroupName` must be provided.
   * - If the source type is a snapshot, a `DBSnapshotIdentifier` must be provided.
   *
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * A Boolean value; set to `true` to activate the subscription, set to `false` to create the subscription but not active it.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The tags to be assigned to the event subscription.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionResult {
  /**
   * Detailed information about an event to which you have subscribed.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * Represents the input to CreateGlobalCluster.
 *
 * @public
 */
export interface CreateGlobalClusterMessage {
  /**
   * The cluster identifier of the new global cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.
   *
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * The name of the database engine to be used for this cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The engine version of the global cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The storage encryption setting for the new global cluster.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;
}

/**
 * Contains the state of scheduled or in-process operations on an Amazon DocumentDB global cluster. This data type is empty unless a switchover or failover operation is scheduled or is in progress on the global cluster.
 *
 * @public
 */
export interface FailoverState {
  /**
   * The current status of the global cluster. Possible values are as follows:
   *
   * - **pending** – The service received a request to switch over or fail over the global cluster. The global cluster's primary cluster and the specified secondary cluster are being verified before the operation starts.
   * - **failing-over** – The chosen secondary cluster is being promoted to become the new primary cluster to fail over the global cluster.
   * - **cancelling** – The request to switch over or fail over the global cluster was cancelled and the primary cluster and the selected secondary cluster are returning to their previous states.
   *
   * @public
   */
  Status?: FailoverStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon DocumentDB cluster that is currently being demoted, and which is associated with this state.
   *
   * @public
   */
  FromDbClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon DocumentDB cluster that is currently being promoted, and which is associated with this state.
   *
   * @public
   */
  ToDbClusterArn?: string | undefined;

  /**
   * Indicates whether the operation is a global switchover or a global failover. If data loss is allowed, then the operation is a global failover. Otherwise, it's a switchover.
   *
   * @public
   */
  IsDataLossAllowed?: boolean | undefined;
}

/**
 * A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters.
 *
 * @public
 */
export interface GlobalClusterMember {
  /**
   * The Amazon Resource Name (ARN) for each Amazon DocumentDB cluster.
   *
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the Amazon DocumentDB global cluster.
   *
   * @public
   */
  Readers?: string[] | undefined;

  /**
   * Specifies whether the Amazon DocumentDB cluster is the primary cluster (that is, has read-write capability) for the Amazon DocumentDB global cluster with which it is associated.
   *
   * @public
   */
  IsWriter?: boolean | undefined;

  /**
   * The status of synchronization of each Amazon DocumentDB cluster in the global cluster.
   *
   * @public
   */
  SynchronizationStatus?: GlobalClusterMemberSynchronizationStatus | undefined;
}

/**
 * A data type representing an Amazon DocumentDB global cluster.
 *
 * @public
 */
export interface GlobalCluster {
  /**
   * Contains a user-supplied global cluster identifier. This identifier is the unique key that identifies a global cluster.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * The Amazon Web Services RegionRegion-unique, immutable identifier for the global database cluster. This identifier is found in CloudTrail log entries whenever the KMS customer master key (CMK) for the cluster is accessed.
   *
   * @public
   */
  GlobalClusterResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the global cluster.
   *
   * @public
   */
  GlobalClusterArn?: string | undefined;

  /**
   * Specifies the current state of this global cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The Amazon DocumentDB database engine used by the global cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Indicates the database engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The default database name within the new global cluster.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The storage encryption setting for the global cluster.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The deletion protection setting for the new global cluster.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The list of cluster IDs for secondary clusters within the global cluster. Currently limited to one item.
   *
   * @public
   */
  GlobalClusterMembers?: GlobalClusterMember[] | undefined;

  /**
   * A data object containing all properties for the current state of an in-process or pending switchover or failover process for this global cluster. This object is empty unless the `SwitchoverGlobalCluster` or `FailoverGlobalCluster` operation was called on this global cluster.
   *
   * @public
   */
  FailoverState?: FailoverState | undefined;

  /**
   * A list of global cluster tags.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateGlobalClusterResult {
  /**
   * A data type representing an Amazon DocumentDB global cluster.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * Represents the input to DeleteDBCluster.
 *
 * @public
 */
export interface DeleteDBClusterMessage {
  /**
   * The cluster identifier for the cluster to be deleted. This parameter isn't case sensitive.
   *
   * Constraints:
   *
   * - Must match an existing `DBClusterIdentifier`.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * Determines whether a final cluster snapshot is created before the cluster is deleted. If `true` is specified, no cluster snapshot is created. If `false` is specified, a cluster snapshot is created before the DB cluster is deleted.
   *
   * > **Note:** If `SkipFinalSnapshot` is `false`, you must specify a `FinalDBSnapshotIdentifier` parameter.
   *
   * Default: `false`
   *
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * The cluster snapshot identifier of the new cluster snapshot created when `SkipFinalSnapshot` is set to `false`.
   *
   * > **Note:** Specifying this parameter and also setting the `SkipFinalShapshot` parameter to `true` results in an error.
   *
   * Constraints:
   *
   * - Must be from 1 to 255 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterResult {
  /**
   * Detailed information about a cluster.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * Represents the input to DeleteDBClusterParameterGroup.
 *
 * @public
 */
export interface DeleteDBClusterParameterGroupMessage {
  /**
   * The name of the cluster parameter group.
   *
   * Constraints:
   *
   * - Must be the name of an existing cluster parameter group.
   * - You can't delete a default cluster parameter group.
   * - Cannot be associated with any clusters.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;
}

/**
 * Represents the input to DeleteDBClusterSnapshot.
 *
 * @public
 */
export interface DeleteDBClusterSnapshotMessage {
  /**
   * The identifier of the cluster snapshot to delete.
   *
   * Constraints: Must be the name of an existing cluster snapshot in the `available` state.
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterSnapshotResult {
  /**
   * Detailed information about a cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * Represents the input to DeleteDBInstance.
 *
 * @public
 */
export interface DeleteDBInstanceMessage {
  /**
   * The instance identifier for the instance to be deleted. This parameter isn't case sensitive.
   *
   * Constraints:
   *
   * - Must match the name of an existing instance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceResult {
  /**
   * Detailed information about an instance.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * Represents the input to DeleteDBSubnetGroup.
 *
 * @public
 */
export interface DeleteDBSubnetGroupMessage {
  /**
   * The name of the database subnet group to delete.
   *
   * > **Note:** You can't delete the default subnet group.
   *
   * Constraints:
   *
   * Must match the name of an existing `DBSubnetGroup`. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName: string | undefined;
}

/**
 * Represents the input to DeleteEventSubscription.
 *
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * The name of the Amazon DocumentDB event notification subscription that you want to delete.
   *
   * @public
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionResult {
  /**
   * Detailed information about an event to which you have subscribed.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * Represents the input to DeleteGlobalCluster.
 *
 * @public
 */
export interface DeleteGlobalClusterMessage {
  /**
   * The cluster identifier of the global cluster being deleted.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalClusterResult {
  /**
   * A data type representing an Amazon DocumentDB global cluster.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * A certificate authority (CA) certificate for an Amazon Web Services account.
 *
 * @public
 */
export interface Certificate {
  /**
   * The unique key that identifies a certificate.
   *
   * Example: `rds-ca-2019`
   *
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * The type of the certificate.
   *
   * Example: `CA`
   *
   * @public
   */
  CertificateType?: string | undefined;

  /**
   * The thumbprint of the certificate.
   *
   * @public
   */
  Thumbprint?: string | undefined;

  /**
   * The starting date-time from which the certificate is valid.
   *
   * Example: `2019-07-31T17:57:09Z`
   *
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * The date-time after which the certificate is no longer valid.
   *
   * Example: `2024-07-31T17:57:09Z`
   *
   * @public
   */
  ValidTill?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the certificate.
   *
   * Example: `arn:aws:rds:us-east-1::cert:rds-ca-2019`
   *
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface CertificateMessage {
  /**
   * A list of certificates for this Amazon Web Services account.
   *
   * @public
   */
  Certificates?: Certificate[] | undefined;

  /**
   * An optional pagination token provided if the number of records retrieved is greater than `MaxRecords`. If this parameter is specified, the marker specifies the next record in the list. Including the value of `Marker` in the next call to `DescribeCertificates` results in the next page of certificates.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A named set of filter values, used to return a more specific list of results. You can use a filter to match a set of resources by specific criteria, such as IDs.
 *
 * Wildcards are not supported in filters.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter. Filter names are case sensitive.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * One or more filter values. Filter values are case sensitive.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesMessage {
  /**
   * The user-supplied certificate identifier. If this parameter is specified, information for only the specified certificate is returned. If this parameter is omitted, a list of up to `MaxRecords` certificates is returned. This parameter is not case sensitive.
   *
   * Constraints
   *
   * - Must match an existing `CertificateIdentifier`.
   *
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints:
   *
   * - Minimum: 20
   * - Maximum: 100
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeCertificates` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the output of DBClusterParameterGroups.
 *
 * @public
 */
export interface DBClusterParameterGroupsMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of cluster parameter groups.
   *
   * @public
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[] | undefined;
}

/**
 * Represents the input to DescribeDBClusterParameterGroups.
 *
 * @public
 */
export interface DescribeDBClusterParameterGroupsMessage {
  /**
   * The name of a specific cluster parameter group to return details for.
   *
   * Constraints:
   *
   * - If provided, must match the name of an existing `DBClusterParameterGroup`.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Detailed information about an individual parameter.
 *
 * @public
 */
export interface Parameter {
  /**
   * Specifies the name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * Specifies the value of the parameter. Must be one or more of the cluster parameter's `AllowedValues` in CSV format:
   *
   * Valid values are:
   *
   * - `enabled`: The cluster accepts secure connections using TLS version 1.0 through 1.3.
   * - `disabled`: The cluster does not accept secure connections using TLS.
   * - `fips-140-3`: The cluster only accepts secure connections per the requirements of the Federal Information Processing Standards (FIPS) publication 140-3. Only supported starting with Amazon DocumentDB 5.0 (engine version 3.0.3727) clusters in these regions: ca-central-1, us-west-2, us-east-1, us-east-2, us-gov-east-1, us-gov-west-1.
   * - `tls1.2+`: The cluster accepts secure connections using TLS version 1.2 and above. Only supported starting with Amazon DocumentDB 4.0 (engine version 2.0.10980) and Amazon DocumentDB 5.0 (engine version 3.0.11051).
   * - `tls1.3+`: The cluster accepts secure connections using TLS version 1.3 and above. Only supported starting with Amazon DocumentDB 4.0 (engine version 2.0.10980) and Amazon DocumentDB 5.0 (engine version 3.0.11051).
   *
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * Provides a description of the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Indicates the source of the parameter value.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * Specifies the engine-specific parameters type.
   *
   * @public
   */
  ApplyType?: string | undefined;

  /**
   * Specifies the valid data type for the parameter.
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * Specifies the valid range of values for the parameter.
   *
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * Indicates whether (`true`) or not (`false`) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.
   *
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * The earliest engine version to which the parameter can apply.
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * Indicates when to apply parameter updates.
   *
   * @public
   */
  ApplyMethod?: ApplyMethod | undefined;
}

/**
 * Represents the output of DBClusterParameterGroup.
 *
 * @public
 */
export interface DBClusterParameterGroupDetails {
  /**
   * Provides a list of parameters for the cluster parameter group.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the input to DescribeDBClusterParameters.
 *
 * @public
 */
export interface DescribeDBClusterParametersMessage {
  /**
   * The name of a specific cluster parameter group to return parameter details for.
   *
   * Constraints:
   *
   * - If provided, must match the name of an existing `DBClusterParameterGroup`.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * A value that indicates to return only parameters for a specific source. Parameter sources can be `engine`, `service`, or `customer`.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the output of DescribeDBClusters.
 *
 * @public
 */
export interface DBClusterMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of clusters.
   *
   * @public
   */
  DBClusters?: DBCluster[] | undefined;
}

/**
 * Represents the input to DescribeDBClusters.
 *
 * @public
 */
export interface DescribeDBClustersMessage {
  /**
   * The user-provided cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case sensitive.
   *
   * Constraints:
   *
   * - If provided, must match an existing `DBClusterIdentifier`.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more clusters to describe.
   *
   * Supported filters:
   *
   * - `db-cluster-id` - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list only includes information about the clusters identified by these ARNs.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the input to DescribeDBClusterSnapshotAttributes.
 *
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  /**
   * The identifier for the cluster snapshot to describe the attributes for.
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * Contains the name and values of a manual cluster snapshot attribute.
 *
 * Manual cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual cluster snapshot.
 *
 * @public
 */
export interface DBClusterSnapshotAttribute {
  /**
   * The name of the manual cluster snapshot attribute.
   *
   * The attribute named `restore` refers to the list of Amazon Web Services accounts that have permission to copy or restore the manual cluster snapshot.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The values for the manual cluster snapshot attribute.
   *
   * If the `AttributeName` field is set to `restore`, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If a value of `all` is in the list, then the manual cluster snapshot is public and available for any Amazon Web Services account to copy or restore.
   *
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * Detailed information about the attributes that are associated with a cluster snapshot.
 *
 * @public
 */
export interface DBClusterSnapshotAttributesResult {
  /**
   * The identifier of the cluster snapshot that the attributes apply to.
   *
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * The list of attributes and values for the cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesResult {
  /**
   * Detailed information about the attributes that are associated with a cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * Represents the output of DescribeDBClusterSnapshots.
 *
 * @public
 */
export interface DBClusterSnapshotMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Provides a list of cluster snapshots.
   *
   * @public
   */
  DBClusterSnapshots?: DBClusterSnapshot[] | undefined;
}

/**
 * Represents the input to DescribeDBClusterSnapshots.
 *
 * @public
 */
export interface DescribeDBClusterSnapshotsMessage {
  /**
   * The ID of the cluster to retrieve the list of cluster snapshots for. This parameter can't be used with the `DBClusterSnapshotIdentifier` parameter. This parameter is not case sensitive.
   *
   * Constraints:
   *
   * - If provided, must match the identifier of an existing `DBCluster`.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A specific cluster snapshot identifier to describe. This parameter can't be used with the `DBClusterIdentifier` parameter. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - If provided, must match the identifier of an existing `DBClusterSnapshot`.
   * - If this identifier is for an automated snapshot, the `SnapshotType` parameter must also be specified.
   *
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * The type of cluster snapshots to be returned. You can specify one of the following values:
   *
   * - `automated` - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.
   * - `manual` - Return all cluster snapshots that you have manually created for your Amazon Web Services account.
   * - `shared` - Return all manual cluster snapshots that have been shared to your Amazon Web Services account.
   * - `public` - Return all cluster snapshots that have been marked as public.
   *
   * If you don't specify a `SnapshotType` value, then both automated and manual cluster snapshots are returned. You can include shared cluster snapshots with these results by setting the `IncludeShared` parameter to `true`. You can include public cluster snapshots with these results by setting the`IncludePublic` parameter to `true`.
   *
   * The `IncludeShared` and `IncludePublic` parameters don't apply for `SnapshotType` values of `manual` or `automated`. The `IncludePublic` parameter doesn't apply when `SnapshotType` is set to `shared`. The `IncludeShared` parameter doesn't apply when `SnapshotType` is set to `public`.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Set to `true` to include shared manual cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore, and otherwise `false`. The default is `false`.
   *
   * @public
   */
  IncludeShared?: boolean | undefined;

  /**
   * Set to `true` to include manual cluster snapshots that are public and can be copied or restored by any Amazon Web Services account, and otherwise `false`. The default is `false`.
   *
   * @public
   */
  IncludePublic?: boolean | undefined;
}

/**
 * Specifies any Amazon DocumentDB Serverless properties or limits that differ between Amazon DocumentDB engine versions. You can test the values of this attribute when deciding which Amazon DocumentDB version to use in a new or upgraded cluster. You can also retrieve the version of an existing cluster and check whether that version supports certain Amazon DocumentDB Serverless features before you attempt to use those features.
 *
 * @public
 */
export interface ServerlessV2FeaturesSupport {
  /**
   * The minimum number of Amazon DocumentDB capacity units (DCUs) for an instance in an Amazon DocumentDB Serverless cluster. You can specify DCU values in half-step increments, such as 8, 8.5, 9, and so on.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum number of Amazon DocumentDB capacity units (DCUs) for an instance in an Amazon DocumentDB Serverless cluster. You can specify DCU values in half-step increments, such as 32, 32.5, 33, and so on.
   *
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * The version of the database engine that an instance can be upgraded to.
 *
 * @public
 */
export interface UpgradeTarget {
  /**
   * The name of the upgrade target database engine.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version number of the upgrade target database engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The version of the database engine that an instance can be upgraded to.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A value that indicates whether the target version is applied to any source DB instances that have `AutoMinorVersionUpgrade` set to `true`.
   *
   * @public
   */
  AutoUpgrade?: boolean | undefined;

  /**
   * A value that indicates whether a database engine is upgraded to a major version.
   *
   * @public
   */
  IsMajorVersionUpgrade?: boolean | undefined;
}

/**
 * Detailed information about an engine version.
 *
 * @public
 */
export interface DBEngineVersion {
  /**
   * The name of the database engine.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version number of the database engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of the parameter group family for the database engine.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * The description of the database engine.
   *
   * @public
   */
  DBEngineDescription?: string | undefined;

  /**
   * The description of the database engine version.
   *
   * @public
   */
  DBEngineVersionDescription?: string | undefined;

  /**
   * A list of engine versions that this database engine version can be upgraded to.
   *
   * @public
   */
  ValidUpgradeTarget?: UpgradeTarget[] | undefined;

  /**
   * The types of logs that the database engine has available for export to Amazon CloudWatch Logs.
   *
   * @public
   */
  ExportableLogTypes?: string[] | undefined;

  /**
   * A value that indicates whether the engine version supports exporting the log types specified by `ExportableLogTypes` to CloudWatch Logs.
   *
   * @public
   */
  SupportsLogExportsToCloudwatchLogs?: boolean | undefined;

  /**
   * A list of the supported CA certificate identifiers.
   *
   * For more information, see [Updating Your Amazon DocumentDB TLS Certificates](https://docs.aws.amazon.com/documentdb/latest/devguide/ca_cert_rotation.html) and [Encrypting Data in Transit](https://docs.aws.amazon.com/documentdb/latest/devguide/security.encryption.ssl.html) in the *Amazon DocumentDB Developer Guide*.
   *
   * @public
   */
  SupportedCACertificateIdentifiers?: string[] | undefined;

  /**
   * Indicates whether the engine version supports rotating the server certificate without rebooting the DB instance.
   *
   * @public
   */
  SupportsCertificateRotationWithoutRestart?: boolean | undefined;

  /**
   * Specifies any Amazon DocumentDB Serverless properties or limits that differ between Amazon DocumentDB engine versions. You can test the values of this attribute when deciding which Amazon DocumentDB version to use in a new or upgraded cluster. You can also retrieve the version of an existing cluster and check whether that version supports certain Amazon DocumentDB Serverless features before you attempt to use those features.
   *
   * @public
   */
  ServerlessV2FeaturesSupport?: ServerlessV2FeaturesSupport | undefined;
}

/**
 * Represents the output of DescribeDBEngineVersions.
 *
 * @public
 */
export interface DBEngineVersionMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Detailed information about one or more engine versions.
   *
   * @public
   */
  DBEngineVersions?: DBEngineVersion[] | undefined;
}

/**
 * Represents the input to DescribeDBEngineVersions.
 *
 * @public
 */
export interface DescribeDBEngineVersionsMessage {
  /**
   * The database engine to return.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The database engine version to return.
   *
   * Example: `3.6.0`
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of a specific parameter group family to return details for.
   *
   * Constraints:
   *
   * - If provided, must match an existing `DBParameterGroupFamily`.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Indicates that only the default version of the specified engine or engine and major version combination is returned.
   *
   * @public
   */
  DefaultOnly?: boolean | undefined;

  /**
   * If this parameter is specified and the requested engine supports the `CharacterSetName` parameter for `CreateDBInstance`, the response includes a list of supported character sets for each engine version.
   *
   * @public
   */
  ListSupportedCharacterSets?: boolean | undefined;

  /**
   * If this parameter is specified and the requested engine supports the `TimeZone` parameter for `CreateDBInstance`, the response includes a list of supported time zones for each engine version.
   *
   * @public
   */
  ListSupportedTimezones?: boolean | undefined;
}

/**
 * Represents the output of DescribeDBInstances.
 *
 * @public
 */
export interface DBInstanceMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Detailed information about one or more instances.
   *
   * @public
   */
  DBInstances?: DBInstance[] | undefined;
}

/**
 * Represents the input to DescribeDBInstances.
 *
 * @public
 */
export interface DescribeDBInstancesMessage {
  /**
   * The user-provided instance identifier. If this parameter is specified, information from only the specific instance is returned. This parameter isn't case sensitive.
   *
   * Constraints:
   *
   * - If provided, must match the identifier of an existing `DBInstance`.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more instances to describe.
   *
   * Supported filters:
   *
   * - `db-cluster-id` - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only the information about the instances that are associated with the clusters that are identified by these ARNs.
   * - `db-instance-id` - Accepts instance identifiers and instance ARNs. The results list includes only the information about the instances that are identified by these ARNs.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the output of DescribeDBSubnetGroups.
 *
 * @public
 */
export interface DBSubnetGroupMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Detailed information about one or more subnet groups.
   *
   * @public
   */
  DBSubnetGroups?: DBSubnetGroup[] | undefined;
}

/**
 * Represents the input to DescribeDBSubnetGroups.
 *
 * @public
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * The name of the subnet group to return details for.
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the input to DescribeEngineDefaultClusterParameters.
 *
 * @public
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * The name of the cluster parameter group family to return the engine parameter information for.
   *
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeEngineDefaultClusterParameters` operation.
 *
 * @public
 */
export interface EngineDefaults {
  /**
   * The name of the cluster parameter group family to return the engine parameter information for.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The parameters of a particular cluster parameter group family.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * Contains the result of a successful invocation of the `DescribeEngineDefaultClusterParameters` operation.
   *
   * @public
   */
  EngineDefaults?: EngineDefaults | undefined;
}

/**
 * Represents the input to DescribeEventCategories.
 *
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * The type of source that is generating the events.
   *
   * Valid values: `db-instance`, `db-parameter-group`, `db-security-group`
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * An event source type, accompanied by one or more event category names.
 *
 * @public
 */
export interface EventCategoriesMap {
  /**
   * The source type that the returned categories belong to.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The event categories for the specified source type.
   *
   * @public
   */
  EventCategories?: string[] | undefined;
}

/**
 * Represents the output of DescribeEventCategories.
 *
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * A list of event category maps.
   *
   * @public
   */
  EventCategoriesMapList?: EventCategoriesMap[] | undefined;
}

/**
 * Represents the input to DescribeEvents.
 *
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.
   *
   * Constraints:
   *
   * - If `SourceIdentifier` is provided, `SourceType` must also be provided.
   * - If the source type is `DBInstance`, a `DBInstanceIdentifier` must be provided.
   * - If the source type is `DBSecurityGroup`, a `DBSecurityGroupName` must be provided.
   * - If the source type is `DBParameterGroup`, a `DBParameterGroupName` must be provided.
   * - If the source type is `DBSnapshot`, a `DBSnapshotIdentifier` must be provided.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * The event source to retrieve events for. If no value is specified, all events are returned.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *
   * Example: 2009-07-08T18:00Z
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *
   * Example: 2009-07-08T18:00Z
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The number of minutes to retrieve events for.
   *
   * Default: 60
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * A list of event categories that trigger notifications for an event notification subscription.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Detailed information about an event.
 *
 * @public
 */
export interface Event {
  /**
   * Provides the identifier for the source of the event.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * Specifies the source type for this event.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * Provides the text of this event.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Specifies the category for the event.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * Specifies the date and time of the event.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the event.
   *
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * Represents the output of DescribeEvents.
 *
 * @public
 */
export interface EventsMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Detailed information about one or more events.
   *
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * Represents the input to DescribeEventSubscriptions.
 *
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * The name of the Amazon DocumentDB event notification subscription that you want to describe.
   *
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the output of DescribeEventSubscriptions.
 *
 * @public
 */
export interface EventSubscriptionsMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of event subscriptions.
   *
   * @public
   */
  EventSubscriptionsList?: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalClustersMessage {
  /**
   * The user-supplied cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case-sensitive.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more global DB clusters to describe.
   *
   * Supported filters: `db-cluster-id` accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list will only include information about the clusters identified by these ARNs.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeGlobalClusters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GlobalClustersMessage {
  /**
   * @public
   */
  Marker?: string | undefined;

  /**
   * @public
   */
  GlobalClusters?: GlobalCluster[] | undefined;
}

/**
 * Represents the input to DescribeOrderableDBInstanceOptions.
 *
 * @public
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * The name of the engine to retrieve instance options for.
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The engine version filter value. Specify this parameter to show only the available offerings that match the specified engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The instance class filter value. Specify this parameter to show only the available offerings that match the specified instance class.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The license model filter value. Specify this parameter to show only the available offerings that match the specified license model.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The virtual private cloud (VPC) filter value. Specify this parameter to show only the available VPC or non-VPC offerings.
   *
   * @public
   */
  Vpc?: boolean | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The options that are available for an instance.
 *
 * @public
 */
export interface OrderableDBInstanceOption {
  /**
   * The engine type of an instance.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The engine version of an instance.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The instance class for an instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The license model for an instance.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * A list of Availability Zones for an instance.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * Indicates whether an instance is in a virtual private cloud (VPC).
   *
   * @public
   */
  Vpc?: boolean | undefined;

  /**
   * The storage type to associate with the DB cluster
   *
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * Represents the output of DescribeOrderableDBInstanceOptions.
 *
 * @public
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * The options that are available for a particular orderable instance.
   *
   * @public
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Represents the input to DescribePendingMaintenanceActions.
 *
 * @public
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * The ARN of a resource to return pending maintenance actions for.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more resources to return pending maintenance actions for.
   *
   * Supported filters:
   *
   * - `db-cluster-id` - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only pending maintenance actions for the clusters identified by these ARNs.
   * - `db-instance-id` - Accepts instance identifiers and instance ARNs. The results list includes only pending maintenance actions for the DB instances identified by these ARNs.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * Represents the output of DescribePendingMaintenanceActions.
 *
 * @public
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * The maintenance actions to be applied.
   *
   * @public
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The input for the `DescribeServerlessV2PlatformVersions` operation.
 *
 * @public
 */
export interface DescribeServerlessV2PlatformVersionsMessage {
  /**
   * A specific platform version to return details for.
   *
   * Example: `3`
   *
   * @public
   */
  ServerlessV2PlatformVersion?: string | undefined;

  /**
   * The database engine to return platform version details for.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies whether to return only the default platform versions for each engine. The default platform version is the version used for new DB clusters.
   *
   * @public
   */
  DefaultOnly?: boolean | undefined;

  /**
   * Specifies whether to also include platform versions that are no longer in use. If you don't specify a value, the response includes only active platform versions.
   *
   * @public
   */
  IncludeAll?: boolean | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token (marker) is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains details about a specific Amazon DocumentDB Serverless platform version, including its version number, status, engine, and supported features.
 *
 * @public
 */
export interface ServerlessV2PlatformVersionInfo {
  /**
   * The version number of the serverless platform.
   *
   * @public
   */
  ServerlessV2PlatformVersion?: string | undefined;

  /**
   * The description of the serverless platform.
   *
   * @public
   */
  ServerlessV2PlatformVersionDescription?: string | undefined;

  /**
   * The name of the database engine.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Specifies any Amazon DocumentDB Serverless v2 properties or limits that differ between platform versions. You can retrieve the platform version of an existing cluster and check whether it supports specific features before you use them.
   *
   * @public
   */
  ServerlessV2FeaturesSupport?: ServerlessV2FeaturesSupport | undefined;

  /**
   * The status of the serverless platform. Valid statuses are the following:
   *
   * - `enabled` - The platform version is in use.
   * - `disabled` - The platform version is not in use.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Specifies whether this platform version is the default version for the engine. The default platform version is the version used for new DB clusters.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeServerlessV2PlatformVersions` operation.
 *
 * @public
 */
export interface ServerlessV2PlatformVersionsMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `ServerlessV2PlatformVersionInfo` elements.
   *
   * @public
   */
  ServerlessV2PlatformVersions?: ServerlessV2PlatformVersionInfo[] | undefined;
}

/**
 * Represents the input to FailoverDBCluster.
 *
 * @public
 */
export interface FailoverDBClusterMessage {
  /**
   * A cluster identifier to force a failover for. This parameter is not case sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing `DBCluster`.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * The name of the instance to promote to the primary instance.
   *
   * You must specify the instance identifier for an Amazon DocumentDB replica in the cluster. For example, `mydbcluster-replica1`.
   *
   * @public
   */
  TargetDBInstanceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface FailoverDBClusterResult {
  /**
   * Detailed information about a cluster.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterMessage {
  /**
   * The identifier of the Amazon DocumentDB global cluster to apply this operation. The identifier is the unique key assigned by the user when the cluster is created. In other words, it's the name of the global cluster.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing global cluster.
   * - Minimum length of 1. Maximum length of 255.
   *
   * Pattern: `[A-Za-z][0-9A-Za-z-:._]*`
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The identifier of the secondary Amazon DocumentDB cluster that you want to promote to the primary for the global cluster. Use the Amazon Resource Name (ARN) for the identifier so that Amazon DocumentDB can locate the cluster in its Amazon Web Services region.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing secondary cluster.
   * - Minimum length of 1. Maximum length of 255.
   *
   * Pattern: `[A-Za-z][0-9A-Za-z-:._]*`
   *
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;

  /**
   * Specifies whether to allow data loss for this global cluster operation. Allowing data loss triggers a global failover operation.
   *
   * If you don't specify `AllowDataLoss`, the global cluster operation defaults to a switchover.
   *
   * Constraints:
   *
   * - Can't be specified together with the `Switchover` parameter.
   *
   * @public
   */
  AllowDataLoss?: boolean | undefined;

  /**
   * Specifies whether to switch over this global database cluster.
   *
   * Constraints:
   *
   * - Can't be specified together with the `AllowDataLoss` parameter.
   *
   * @public
   */
  Switchover?: boolean | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterResult {
  /**
   * A data type representing an Amazon DocumentDB global cluster.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * Represents the input to ListTagsForResource.
 *
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Represents the output of ListTagsForResource.
 *
 * @public
 */
export interface TagListMessage {
  /**
   * A list of one or more tags.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster.
 *
 * The `EnableLogTypes` and `DisableLogTypes` arrays determine which logs are exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the engine that is being used.
 *
 * @public
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * The list of log types to enable.
   *
   * @public
   */
  EnableLogTypes?: string[] | undefined;

  /**
   * The list of log types to disable.
   *
   * @public
   */
  DisableLogTypes?: string[] | undefined;
}

/**
 * Represents the input to ModifyDBCluster.
 *
 * @public
 */
export interface ModifyDBClusterMessage {
  /**
   * The cluster identifier for the cluster that is being modified. This parameter is not case sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing `DBCluster`.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The new cluster identifier for the cluster when renaming a cluster. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster2`
   *
   * @public
   */
  NewDBClusterIdentifier?: string | undefined;

  /**
   * A value that specifies whether the changes in this request and any pending changes are asynchronously applied as soon as possible, regardless of the `PreferredMaintenanceWindow` setting for the cluster. If this parameter is set to `false`, changes to the cluster are applied during the next maintenance window.
   *
   * The `ApplyImmediately` parameter affects only the `NewDBClusterIdentifier` and `MasterUserPassword` values. If you set this parameter value to `false`, the changes to the `NewDBClusterIdentifier` and `MasterUserPassword` values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the `ApplyImmediately` parameter.
   *
   * Default: `false`
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * The number of days for which automated backups are retained. You must specify a minimum value of 1.
   *
   * Default: 1
   *
   * Constraints:
   *
   * - Must be a value from 1 to 35.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The name of the cluster parameter group to use for the cluster.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A list of virtual private cloud (VPC) security groups that the cluster will belong to.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The port number on which the cluster accepts connections.
   *
   * Constraints: Must be a value from `1150` to `65535`.
   *
   * Default: The same port as the original cluster.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).
   *
   * Constraints: Must contain from 8 to 100 characters.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region.
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.
   *
   * Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The configuration setting for the log types to be enabled for export to Amazon CloudWatch Logs for a specific instance or cluster. The `EnableLogTypes` and `DisableLogTypes` arrays determine which logs are exported (or not exported) to CloudWatch Logs.
   *
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless `ApplyImmediately` is enabled.
   *
   * To list all of the available engine versions for Amazon DocumentDB use the following command:
   *
   * `aws docdb describe-db-engine-versions --engine docdb --query "DBEngineVersions[].EngineVersion"`
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * A value that indicates whether major version upgrades are allowed.
   *
   * Constraints:
   *
   * - You must allow major version upgrades when specifying a value for the `EngineVersion` parameter that is a different major version than the cluster's current version.
   * - Since some parameters are version specific, changing them requires executing a new `ModifyDBCluster` API call after the in-place MVU completes.
   *
   * > **Note:**
   * >
   * > Performing an MVU directly impacts the following parameters:
   * >
   * > - `MasterUserPassword`
   * > - `NewDBClusterIdentifier`
   * > - `VpcSecurityGroupIds`
   * > - `Port`
   *
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * Specifies whether this cluster can be deleted. If `DeletionProtection` is enabled, the cluster cannot be deleted unless it is modified and `DeletionProtection` is disabled. `DeletionProtection` protects clusters from being accidentally deleted.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The storage type to associate with the DB cluster.
   *
   * For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the *Amazon DocumentDB Developer Guide*.
   *
   * Valid values for storage type - `standard | iopt1`
   *
   * Default value is `standard`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Contains the scaling configuration of an Amazon DocumentDB Serverless cluster.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. If the cluster doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn on this management. In this case, you can't specify `MasterUserPassword`. If the cluster already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the master user password is not managed with Amazon Web Services Secrets Manager, then you must specify `MasterUserPassword`. In this case, Amazon DocumentDB deletes the secret and uses the new password for the master user specified by `MasterUserPassword`.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if both of the following conditions are met:
   *
   * - The cluster doesn't manage the master user password in Amazon Web Services Secrets Manager. If the cluster already manages the master user password in Amazon Web Services Secrets Manager, you can't change the KMS key that is used to encrypt the secret.
   * - You are enabling `ManageMasterUserPassword` to manage the master user password in Amazon Web Services Secrets Manager. If you are turning on `ManageMasterUserPassword` and don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password.
   *
   * This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the cluster. The secret value contains the updated password.
   *
   * Constraint: You must apply the change immediately when rotating the master user password.
   *
   * @public
   */
  RotateMasterUserPassword?: boolean | undefined;

  /**
   * The network type of the cluster.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [DocumentDB clusters in a VPC](https://docs.aws.amazon.com/documentdb/latest/devguide/vpc-clusters.html) in the Amazon DocumentDB Developer Guide.
   *
   * Valid Values: `IPV4` | `DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterResult {
  /**
   * Detailed information about a cluster.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * Contains the name of a cluster parameter group.
 *
 * @public
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * The name of a cluster parameter group.
   *
   * Constraints:
   *
   * - Must be from 1 to 255 letters or numbers.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * > **Note:** This value is stored as a lowercase string.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;
}

/**
 * Represents the input to ModifyDBClusterParameterGroup.
 *
 * @public
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * The name of the cluster parameter group to modify.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * A list of parameters in the cluster parameter group to modify.
   *
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * Represents the input to ModifyDBClusterSnapshotAttribute.
 *
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * The identifier for the cluster snapshot to modify the attributes for.
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * The name of the cluster snapshot attribute to modify.
   *
   * To manage authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this value to `restore`.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * A list of cluster snapshot attributes to add to the attribute specified by `AttributeName`.
   *
   * To authorize other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account IDs. To make the manual cluster snapshot restorable by any Amazon Web Services account, set it to `all`. Do not add the `all` value for any manual cluster snapshots that contain private information that you don't want to be available to all Amazon Web Services accounts.
   *
   * @public
   */
  ValuesToAdd?: string[] | undefined;

  /**
   * A list of cluster snapshot attributes to remove from the attribute specified by `AttributeName`.
   *
   * To remove authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account identifiers. To remove authorization for any Amazon Web Services account to copy or restore the cluster snapshot, set it to `all` . If you specify `all`, an Amazon Web Services account whose account ID is explicitly added to the `restore` attribute can still copy or restore a manual cluster snapshot.
   *
   * @public
   */
  ValuesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * Detailed information about the attributes that are associated with a cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * Represents the input to ModifyDBInstance.
 *
 * @public
 */
export interface ModifyDBInstanceMessage {
  /**
   * The instance identifier. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing `DBInstance`.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The new compute and memory capacity of the instance; for example, `db.r5.large`. Not all instance classes are available in all Amazon Web Services Regions.
   *
   * If you modify the instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless `ApplyImmediately` is specified as `true` for this request.
   *
   * Default: Uses existing setting.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the `PreferredMaintenanceWindow` setting for the instance.
   *
   * If this parameter is set to `false`, changes to the instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next reboot.
   *
   * Default: `false`
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, changing this parameter causes a reboot of the instance. If you are moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure that pending changes are applied.
   *
   * Default: Uses existing setting.
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * Constraints: Must be at least 30 minutes.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The new instance identifier for the instance when renaming an instance. When you change the instance identifier, an instance reboot occurs immediately if you set `Apply Immediately` to `true`. It occurs during the next maintenance window if you set `Apply Immediately` to `false`. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `mydbinstance`
   *
   * @public
   */
  NewDBInstanceIdentifier?: string | undefined;

  /**
   * Indicates the certificate that needs to be associated with the instance.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.
   *
   * Default: 1
   *
   * Valid values: 0-15
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/documentdb/latest/devguide/performance-insights.html).
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The KMS key identifier for encryption of Performance Insights data.
   *
   * The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.
   *
   * By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
   *
   * > **Important:** Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
   *
   * If you are using SSL/TLS to connect to the DB instance, see [Updating Your Amazon DocumentDB TLS Certificates](https://docs.aws.amazon.com/documentdb/latest/devguide/ca_cert_rotation.html) and [Encrypting Data in Transit](https://docs.aws.amazon.com/documentdb/latest/devguide/security.encryption.ssl.html) in the *Amazon DocumentDB Developer Guide*.
   *
   * @public
   */
  CertificateRotationRestart?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDBInstanceResult {
  /**
   * Detailed information about an instance.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * Represents the input to ModifyDBSubnetGroup.
 *
 * @public
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * The name for the subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.
   *
   * Constraints: Must match the name of an existing `DBSubnetGroup`. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * The description for the subnet group.
   *
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * The Amazon EC2 subnet IDs for the subnet group.
   *
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupResult {
  /**
   * Detailed information about a subnet group.
   *
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * Represents the input to ModifyEventSubscription.
 *
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * The name of the Amazon DocumentDB event notification subscription.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, set this parameter to `db-instance`. If this value is not specified, all events are returned.
   *
   * Valid values: `db-instance`, `db-parameter-group`, `db-security-group`
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories for a `SourceType` that you want to subscribe to.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * A Boolean value; set to `true` to activate the subscription.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * Detailed information about an event to which you have subscribed.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * Represents the input to ModifyGlobalCluster.
 *
 * @public
 */
export interface ModifyGlobalClusterMessage {
  /**
   * The identifier for the global cluster being modified. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing global cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The new identifier for a global cluster when you modify a global cluster. This value is stored as a lowercase string.
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens
   *
   *   The first character must be a letter
   *
   *   Can't end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-cluster2`
   *
   * @public
   */
  NewGlobalClusterIdentifier?: string | undefined;

  /**
   * Indicates if the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterResult {
  /**
   * A data type representing an Amazon DocumentDB global cluster.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * Represents the input to RebootDBInstance.
 *
 * @public
 */
export interface RebootDBInstanceMessage {
  /**
   * The instance identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing `DBInstance`.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * When `true`, the reboot is conducted through a Multi-AZ failover.
   *
   * Constraint: You can't specify `true` if the instance is not configured for Multi-AZ.
   *
   * @public
   */
  ForceFailover?: boolean | undefined;
}

/**
 * @public
 */
export interface RebootDBInstanceResult {
  /**
   * Detailed information about an instance.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * Represents the input to RemoveFromGlobalCluster.
 *
 * @public
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * The cluster identifier to detach from the Amazon DocumentDB global cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster.
   *
   * @public
   */
  DbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterResult {
  /**
   * A data type representing an Amazon DocumentDB global cluster.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * Represents the input to RemoveSourceIdentifierFromSubscription.
 *
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * The name of the Amazon DocumentDB event notification subscription that you want to remove a source identifier from.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The source identifier to be removed from the subscription, such as the instance identifier for an instance, or the name of a security group.
   *
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * Detailed information about an event to which you have subscribed.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * Represents the input to RemoveTagsFromResource.
 *
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The tag key (name) of the tag to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Represents the input to ResetDBClusterParameterGroup.
 *
 * @public
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * The name of the cluster parameter group to reset.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * A value that is set to `true` to reset all parameters in the cluster parameter group to their default values, and `false` otherwise. You can't use this parameter if there is a list of parameter names specified for the `Parameters` parameter.
   *
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * A list of parameter names in the cluster parameter group to reset to the default values. You can't use this parameter if the `ResetAllParameters` parameter is set to `true`.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * Represents the input to RestoreDBClusterFromSnapshot.
 *
 * @public
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * Provides the list of Amazon EC2 Availability Zones that instances in the restored DB cluster can be created in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The name of the cluster to create from the snapshot or cluster snapshot. This parameter isn't case sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-snapshot-id`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The identifier for the snapshot or cluster snapshot to restore from.
   *
   * You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing snapshot.
   *
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * The database engine to use for the new cluster.
   *
   * Default: The same as source.
   *
   * Constraint: Must be compatible with the engine of the source.
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The version of the database engine to use for the new cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The port number on which the new cluster accepts connections.
   *
   * Constraints: Must be a value from `1150` to `65535`.
   *
   * Default: The same port as the original cluster.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the subnet group to use for the new cluster.
   *
   * Constraints: If provided, must match the name of an existing `DBSubnetGroup`.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * A list of virtual private cloud (VPC) security groups that the new cluster will belong to.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The tags to be assigned to the restored cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The KMS key identifier to use when restoring an encrypted cluster from a DB snapshot or cluster snapshot.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.
   *
   * If you do not specify a value for the `KmsKeyId` parameter, then the following occurs:
   *
   * - If the snapshot or cluster snapshot in `SnapshotIdentifier` is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the snapshot or the cluster snapshot.
   * - If the snapshot or the cluster snapshot in `SnapshotIdentifier` is not encrypted, then the restored DB cluster is not encrypted.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * Specifies whether this cluster can be deleted. If `DeletionProtection` is enabled, the cluster cannot be deleted unless it is modified and `DeletionProtection` is disabled. `DeletionProtection` protects clusters from being accidentally deleted.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The name of the DB cluster parameter group to associate with this DB cluster.
   *
   * *Type:* String.       *Required:* No.
   *
   * If this argument is omitted, the default DB cluster parameter group is used. If supplied, must match the name of an existing default DB cluster parameter group. The string must consist of from 1 to 255 letters, numbers or hyphens. Its first character must be a letter, and it cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * Contains the scaling configuration of an Amazon DocumentDB Serverless cluster.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * The storage type to associate with the DB cluster.
   *
   * For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the *Amazon DocumentDB Developer Guide*.
   *
   * Valid values for storage type - `standard | iopt1`
   *
   * Default value is `standard`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The network type of the cluster.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [DocumentDB clusters in a VPC](https://docs.aws.amazon.com/documentdb/latest/devguide/vpc-clusters.html) in the Amazon DocumentDB Developer Guide.
   *
   * Valid Values: `IPV4` | `DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotResult {
  /**
   * Detailed information about a cluster.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * Represents the input to RestoreDBClusterToPointInTime.
 *
 * @public
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * The name of the new cluster to be created.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The type of restore to be performed. You can specify one of the following values:
   *
   * - `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
   * - `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.
   *
   * Constraints: You can't specify `copy-on-write` if the engine version of the source DB cluster is earlier than 1.11.
   *
   * If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
   *
   * @public
   */
  RestoreType?: string | undefined;

  /**
   * The identifier of the source cluster from which to restore.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing `DBCluster`.
   *
   * @public
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * The date and time to restore the cluster to.
   *
   * Valid values: A time in Universal Coordinated Time (UTC) format.
   *
   * Constraints:
   *
   * - Must be before the latest restorable time for the instance.
   * - Must be specified if the `UseLatestRestorableTime` parameter is not provided.
   * - Cannot be specified if the `UseLatestRestorableTime` parameter is `true`.
   * - Cannot be specified if the `RestoreType` parameter is `copy-on-write`.
   *
   * Example: `2015-03-07T23:45:00Z`
   *
   * @public
   */
  RestoreToTime?: Date | undefined;

  /**
   * A value that is set to `true` to restore the cluster to the latest restorable backup time, and `false` otherwise.
   *
   * Default: `false`
   *
   * Constraints: Cannot be specified if the `RestoreToTime` parameter is provided.
   *
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * The port number on which the new cluster accepts connections.
   *
   * Constraints: Must be a value from `1150` to `65535`.
   *
   * Default: The default port for the engine.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The subnet group name to use for the new cluster.
   *
   * Constraints: If provided, must match the name of an existing `DBSubnetGroup`.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * A list of VPC security groups that the new cluster belongs to.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The tags to be assigned to the restored cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The KMS key identifier to use when restoring an encrypted cluster from an encrypted cluster.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.
   *
   * You can restore to a new cluster and encrypt the new cluster with an KMS key that is different from the KMS key used to encrypt the source cluster. The new DB cluster is encrypted with the KMS key identified by the `KmsKeyId` parameter.
   *
   * If you do not specify a value for the `KmsKeyId` parameter, then the following occurs:
   *
   * - If the cluster is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the source cluster.
   * - If the cluster is not encrypted, then the restored cluster is not encrypted.
   *
   * If `DBClusterIdentifier` refers to a cluster that is not encrypted, then the restore request is rejected.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * Specifies whether this cluster can be deleted. If `DeletionProtection` is enabled, the cluster cannot be deleted unless it is modified and `DeletionProtection` is disabled. `DeletionProtection` protects clusters from being accidentally deleted.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Contains the scaling configuration of an Amazon DocumentDB Serverless cluster.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * The storage type to associate with the DB cluster.
   *
   * For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the *Amazon DocumentDB Developer Guide*.
   *
   * Valid values for storage type - `standard | iopt1`
   *
   * Default value is `standard`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The network type of the cluster.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [DocumentDB clusters in a VPC](https://docs.aws.amazon.com/documentdb/latest/devguide/vpc-clusters.html) in the Amazon DocumentDB Developer Guide.
   *
   * Valid Values: `IPV4` | `DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeResult {
  /**
   * Detailed information about a cluster.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StartDBClusterMessage {
  /**
   * The identifier of the cluster to restart. Example: `docdb-2019-05-28-15-24-52`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartDBClusterResult {
  /**
   * Detailed information about a cluster.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StopDBClusterMessage {
  /**
   * The identifier of the cluster to stop. Example: `docdb-2019-05-28-15-24-52`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDBClusterResult {
  /**
   * Detailed information about a cluster.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterMessage {
  /**
   * The identifier of the Amazon DocumentDB global database cluster to switch over. The identifier is the unique key assigned by the user when the cluster is created. In other words, it's the name of the global cluster. This parameter isn’t case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing global cluster (Amazon DocumentDB global database).
   * - Minimum length of 1. Maximum length of 255.
   *
   * Pattern: `[A-Za-z][0-9A-Za-z-:._]*`
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The identifier of the secondary Amazon DocumentDB cluster to promote to the new primary for the global database cluster. Use the Amazon Resource Name (ARN) for the identifier so that Amazon DocumentDB can locate the cluster in its Amazon Web Services region.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing secondary cluster.
   * - Minimum length of 1. Maximum length of 255.
   *
   * Pattern: `[A-Za-z][0-9A-Za-z-:._]*`
   *
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterResult {
  /**
   * A data type representing an Amazon DocumentDB global cluster.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}
