// smithy-typescript generated code
import type { ApplyMethod, FailoverStatus, SourceType } from "./enums";

/**
 * @public
 */
export interface AddRoleToDBClusterMessage {
  /**
   * The name of the DB cluster to associate the IAM role with.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example `arn:aws:iam::123456789012:role/NeptuneAccessRole`.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the feature for the Neptune DB cluster that the IAM role is to be associated with. For the list of supported feature names, see DBEngineVersion.
   *
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * @public
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * The name of the event notification subscription you want to add a source identifier to.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The identifier of the event source to be added.
   *
   * Constraints:
   *
   * - If the source type is a DB instance, then a `DBInstanceIdentifier` must be supplied.
   * - If the source type is a DB security group, a `DBSecurityGroupName` must be supplied.
   * - If the source type is a DB parameter group, a `DBParameterGroupName` must be supplied.
   * - If the source type is a DB snapshot, a `DBSnapshotIdentifier` must be supplied.
   *
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * Contains the results of a successful invocation of the DescribeEventSubscriptions action.
 *
 * @public
 */
export interface EventSubscription {
  /**
   * The Amazon customer account associated with the event notification subscription.
   *
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * The event notification subscription Id.
   *
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * The topic ARN of the event notification subscription.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The status of the event notification subscription.
   *
   * Constraints:
   *
   * Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist
   *
   * The status "no-permission" indicates that Neptune no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The time the event notification subscription was created.
   *
   * @public
   */
  SubscriptionCreationTime?: string | undefined;

  /**
   * The source type for the event notification subscription.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of source IDs for the event notification subscription.
   *
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * A list of event categories for the event notification subscription.
   *
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * A Boolean value indicating if the subscription is enabled. True indicates the subscription is enabled.
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
   * Contains the results of a successful invocation of the DescribeEventSubscriptions action.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an Amazon Resource Name (ARN)](https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing).
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The tags to be assigned to the Amazon Neptune resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see [Constructing an Amazon Resource Name (ARN)](https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing).
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
   * A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type `immediate` can't be undone.
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
   * The effective date when the pending maintenance action is applied to the resource. This date takes into account opt-in requests received from the ApplyPendingMaintenanceAction API, the `AutoAppliedAfterDate`, and the `ForcedApplyDate`. This value is blank if an opt-in request has not been received and nothing has been specified as `AutoAppliedAfterDate` or `ForcedApplyDate`.
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
 * Describes the pending maintenance actions for a resource.
 *
 * @public
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * The ARN of the resource that has pending maintenance actions.
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
   * Describes the pending maintenance actions for a resource.
   *
   * @public
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see [Constructing an Amazon Resource Name (ARN)](https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing).
   *
   * Constraints:
   *
   * - Must specify a valid DB cluster parameter group.
   * - Must specify a valid DB cluster parameter group identifier, for example `my-db-cluster-param-group`, or a valid ARN.
   * - The source DB cluster parameter group must be in the same Amazon Region as the copy. Neptune does not support cross-Region copying of parameter groups.
   *
   * @public
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * The identifier for the copied DB cluster parameter group.
   *
   * Constraints:
   *
   * - Cannot be null, empty, or blank
   * - Must contain from 1 to 255 letters, numbers, or hyphens
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-cluster-param-group1`
   *
   * @public
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * A description for the copied DB cluster parameter group.
   *
   * @public
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * The tags to be assigned to the copied DB cluster parameter group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the details of an Amazon Neptune DB cluster parameter group.
 *
 * This data type is used as a response element in the DescribeDBClusterParameterGroups action.
 *
 * @public
 */
export interface DBClusterParameterGroup {
  /**
   * Provides the name of the DB cluster parameter group.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * Provides the name of the DB parameter group family that this DB cluster parameter group is compatible with.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * Provides the customer-specified description for this DB cluster parameter group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB cluster parameter group.
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
   * Contains the details of an Amazon Neptune DB cluster parameter group.
   *
   * This data type is used as a response element in the DescribeDBClusterParameterGroups action.
   *
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterSnapshotMessage {
  /**
   * The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive. If the source DB cluster snapshot is in a different region or owned by another account, specify the snapshot ARN.
   *
   * Constraints:
   *
   * - Must specify a valid system snapshot in the "available" state.
   * - Specify a valid DB snapshot identifier.
   *
   * Example: `my-cluster-snapshot1`
   *
   * @public
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster-snapshot2`
   *
   * @public
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * The Amazon KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.
   *
   * If you copy an encrypted DB cluster snapshot from your Amazon account, you can specify a value for `KmsKeyId` to encrypt the copy with a new KMS encryption key. If you don't specify a value for `KmsKeyId`, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.
   *
   * If you copy an encrypted DB cluster snapshot that is shared from another Amazon account, then you must specify a value for `KmsKeyId`.
   *
   * KMS encryption keys are specific to the Amazon Region that they are created in, and you can't use encryption keys from one Amazon Region in another Amazon Region.
   *
   * You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned.
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
   * True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * The tags to assign to the new DB cluster snapshot copy.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the details for an Amazon Neptune DB cluster snapshot
 *
 * This data type is used as a response element in the DescribeDBClusterSnapshots action.
 *
 * @public
 */
export interface DBClusterSnapshot {
  /**
   * Provides the list of EC2 Availability Zones that instances in the DB cluster snapshot can be restored in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.
   *
   * After you restore a DB cluster using a `DBClusterSnapshotIdentifier`, you must specify the same `DBClusterSnapshotIdentifier` for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.
   *
   * However, if you don't specify the `DBClusterSnapshotIdentifier`, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the `DBClusterSnapshotIdentifier`, and the original DB cluster is deleted.
   *
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).
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
   * Specifies the allocated storage size in gibibytes (GiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Specifies the status of this DB cluster snapshot.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Specifies the port that the DB cluster was listening on at the time of the snapshot.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Provides the VPC ID associated with the DB cluster snapshot.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * Provides the version of the database engine for this DB cluster snapshot.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Provides the license model information for this DB cluster snapshot.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * Provides the type of the DB cluster snapshot.
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
   * Specifies whether the DB cluster snapshot is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * If `StorageEncrypted` is true, the Amazon KMS key identifier for the encrypted DB cluster snapshot.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshotArn?: string | undefined;

  /**
   * If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.
   *
   * @public
   */
  SourceDBClusterSnapshotArn?: string | undefined;

  /**
   * True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * The storage type associated with the DB cluster snapshot.
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
   * Contains the details for an Amazon Neptune DB cluster snapshot
   *
   * This data type is used as a response element in the DescribeDBClusterSnapshots action.
   *
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface CopyDBParameterGroupMessage {
  /**
   * The identifier or ARN for the source DB parameter group. For information about creating an ARN, see [Constructing an Amazon Resource Name (ARN)](https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing).
   *
   * Constraints:
   *
   * - Must specify a valid DB parameter group.
   * - Must specify a valid DB parameter group identifier, for example `my-db-param-group`, or a valid ARN.
   * - The source DB parameter group must be in the same Amazon Region as the copy. Neptune does not support cross-Region copying of parameter groups.
   *
   * @public
   */
  SourceDBParameterGroupIdentifier: string | undefined;

  /**
   * The identifier for the copied DB parameter group.
   *
   * Constraints:
   *
   * - Cannot be null, empty, or blank.
   * - Must contain from 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-db-parameter-group`
   *
   * @public
   */
  TargetDBParameterGroupIdentifier: string | undefined;

  /**
   * A description for the copied DB parameter group.
   *
   * @public
   */
  TargetDBParameterGroupDescription: string | undefined;

  /**
   * The tags to be assigned to the copied DB parameter group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the details of an Amazon Neptune DB parameter group.
 *
 * This data type is used as a response element in the DescribeDBParameterGroups action.
 *
 * @public
 */
export interface DBParameterGroup {
  /**
   * Provides the name of the DB parameter group.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * Provides the name of the DB parameter group family that this DB parameter group is compatible with.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * Provides the customer-specified description for this DB parameter group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB parameter group.
   *
   * @public
   */
  DBParameterGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBParameterGroupResult {
  /**
   * Contains the details of an Amazon Neptune DB parameter group.
   *
   * This data type is used as a response element in the DescribeDBParameterGroups action.
   *
   * @public
   */
  DBParameterGroup?: DBParameterGroup | undefined;
}

/**
 * Contains the scaling configuration of a Neptune Serverless DB cluster.
 *
 * For more information, see [Using Amazon Neptune Serverless](https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html) in the *Amazon Neptune User Guide*.
 *
 * @public
 */
export interface ServerlessV2ScalingConfiguration {
  /**
   * The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.
   *
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterMessage {
  /**
   * A list of EC2 Availability Zones that instances in the DB cluster can be created in.
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
   * - Must be a value from 1 to 35
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * *If set to `true`, tags are copied to any snapshot of the DB cluster that is created.*
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The DB cluster identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster1`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBClusterParameterGroup.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A list of EC2 VPC security groups to associate with this DB cluster.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * A DB subnet group to associate with this DB cluster.
   *
   * Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The name of the database engine to be used for this DB cluster.
   *
   * Valid Values: `neptune`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The version number of the database engine to use for the new DB cluster.
   *
   * Example: `1.2.1.0`
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The port number on which the instances in the DB cluster accept connections.
   *
   * Default: `8182`
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region. To see the time blocks available, see [Neptune Maintenance Window](https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-maintaining.html#manage-console-maintaining-window) in the *Amazon Neptune User Guide.*
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
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week. To see the time blocks available, see [Neptune Maintenance Window](https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-maintaining.html#manage-console-maintaining-window) in the *Amazon Neptune User Guide.*
   *
   * Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.
   *
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * The tags to assign to the new DB cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies whether the DB cluster is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The Amazon KMS key identifier for an encrypted DB cluster.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.
   *
   * If an encryption key is not specified in `KmsKeyId`:
   *
   * - If `ReplicationSourceIdentifier` identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key.
   * - If the `StorageEncrypted` parameter is true and `ReplicationSourceIdentifier` is not specified, then Amazon Neptune will use your default encryption key.
   *
   * Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.
   *
   * If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must set `KmsKeyId` to a KMS key ID that is valid in the destination Amazon Region. This key is used to encrypt the Read Replica in that Amazon Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * If set to `true`, enables Amazon Identity and Access Management (IAM) authentication for the entire DB cluster (this cannot be set at an instance level).
   *
   * Default: `false`.
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * A list of the log types that this DB cluster should export to CloudWatch Logs. Valid log types are: `audit` (to publish audit logs) and `slowquery` (to publish slow-query logs). See [Publishing Neptune logs to Amazon CloudWatch logs](https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html).
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Contains the scaling configuration of a Neptune Serverless DB cluster.
   *
   * For more information, see [Using Amazon Neptune Serverless](https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html) in the *Amazon Neptune User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * The ID of the Neptune global database to which this new DB cluster should be added.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * The storage type for the new DB cluster.
   *
   * Valid Values:
   *
   * - **`standard`**   –   ( *the default* ) Configures cost-effective database storage for applications with moderate to small I/O usage. When set to `standard`, the storage type is not returned in the response.
   * - **`iopt1`**   –   Enables [I/O-Optimized storage](https://docs.aws.amazon.com/neptune/latest/userguide/storage-types.html#provisioned-iops-storage) that's designed to meet the needs of I/O-intensive graph workloads that require predictable pricing with low I/O latency and consistent I/O throughput.
   *
   *   Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The network type of the DB cluster.
   *
   * Valid Values:
   *
   * - **`IPV4`**   –   ( *the default* ) The DB cluster uses only IPv4 addresses for communication.
   * - **`DUAL`**   –   The DB cluster uses both IPv4 and IPv6 addresses for communication. The DB subnet group associated with the cluster must support IPv6.
   *
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster.
 *
 * @public
 */
export interface DBClusterRole {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following values:
   *
   * - `ACTIVE` - the IAM role ARN is associated with the DB cluster and can be used to access other Amazon services on your behalf.
   * - `PENDING` - the IAM role ARN is being associated with the DB cluster.
   * - `INVALID` - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable to assume the IAM role in order to access other Amazon services on your behalf.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The name of the feature associated with the Amazon Identity and Access Management (IAM) role. For the list of supported feature names, see DescribeDBEngineVersions.
   *
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * Contains information about an instance that is part of a DB cluster.
 *
 * @public
 */
export interface DBClusterMember {
  /**
   * Specifies the instance identifier for this member of the DB cluster.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * Value that is `true` if the cluster member is the primary instance for the DB cluster and `false` otherwise.
   *
   * @public
   */
  IsClusterWriter?: boolean | undefined;

  /**
   * Specifies the status of the DB cluster parameter group for this member of the DB cluster.
   *
   * @public
   */
  DBClusterParameterGroupStatus?: string | undefined;

  /**
   * A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.
   *
   * @public
   */
  PromotionTier?: number | undefined;
}

/**
 * Not supported by Neptune.
 *
 * @public
 */
export interface DBClusterOptionGroupStatus {
  /**
   * Not supported by Neptune.
   *
   * @public
   */
  DBClusterOptionGroupName?: string | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
 *
 * Valid log types are: `audit` (to publish audit logs) and `slowquery` (to publish slow-query logs). See [Publishing Neptune logs to Amazon CloudWatch logs](https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html).
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
   * Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.
   *
   * @public
   */
  LogTypesToDisable?: string[] | undefined;
}

/**
 * This data type is used as a response element in the `ModifyDBCluster` operation and contains changes that will be applied during the next maintenance window.
 *
 * @public
 */
export interface ClusterPendingModifiedValues {
  /**
   * This `PendingCloudwatchLogsExports` structure specifies pending changes to which CloudWatch logs are enabled and which are disabled.
   *
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;

  /**
   * The DBClusterIdentifier value for the DB cluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A value that indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * The database engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The number of days for which automatic DB snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The pending change in storage type for the DB cluster.   Valid Values:
   *
   * - **`standard`**   –   ( *the default* ) Configures cost-effective database storage for applications with moderate to small I/O usage.
   * - **`iopt1`**   –   Enables [I/O-Optimized storage](https://docs.aws.amazon.com/neptune/latest/userguide/storage-types.html#provisioned-iops-storage) that's designed to meet the needs of I/O-intensive graph workloads that require predictable pricing with low I/O latency and consistent I/O throughput.
   *
   *   Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The allocated storage size in gibibytes (GiB) for database engines. For Neptune, `AllocatedStorage` always returns 1, because Neptune DB cluster storage size isn't fixed, but instead automatically adjusts as needed.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The Provisioned IOPS (I/O operations per second) value. This setting is only for Multi-AZ DB clusters.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The pending change in network type for the DB cluster.
   *
   * Valid Values: `IPV4`, `DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * Shows the scaling configuration for a Neptune Serverless DB cluster.
 *
 * For more information, see [Using Amazon Neptune Serverless](https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html) in the *Amazon Neptune User Guide*.
 *
 * @public
 */
export interface ServerlessV2ScalingConfigurationInfo {
  /**
   * The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.
   *
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * This data type is used as a response element for queries on VPC security group membership.
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
 * Contains the details of an Amazon Neptune DB cluster.
 *
 * This data type is used as a response element in the DescribeDBClusters.
 *
 * @public
 */
export interface DBCluster {
  /**
   * `AllocatedStorage` always returns 1, because Neptune DB cluster storage size is not fixed, but instead automatically adjusts as needed.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * Specifies the number of days for which automatic DB snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * Contains the name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Specifies the name of the DB cluster parameter group for the DB cluster.
   *
   * @public
   */
  DBClusterParameterGroup?: string | undefined;

  /**
   * Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.
   *
   * @public
   */
  DBSubnetGroup?: string | undefined;

  /**
   * Specifies the current state of this DB cluster.
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
   * Specifies the earliest time to which a database can be restored with point-in-time restore.
   *
   * @public
   */
  EarliestRestorableTime?: Date | undefined;

  /**
   * Specifies the connection endpoint for the primary instance of the DB cluster.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances connections across the Read Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Neptune distributes the connection requests among the Read Replicas in the DB cluster. This functionality can help balance your read workload across multiple Read Replicas in your DB cluster.
   *
   * If a failover occurs, and the Read Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Read Replicas in the cluster, you can then reconnect to the reader endpoint.
   *
   * @public
   */
  ReaderEndpoint?: string | undefined;

  /**
   * Specifies whether the DB cluster has instances in multiple Availability Zones.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * Provides the name of the database engine to be used for this DB cluster.
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
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[] | undefined;

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
   * Not supported by Neptune.
   *
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * Contains one or more identifiers of the Read Replicas associated with this DB cluster.
   *
   * @public
   */
  ReadReplicaIdentifiers?: string[] | undefined;

  /**
   * Provides the list of instances that make up the DB cluster.
   *
   * @public
   */
  DBClusterMembers?: DBClusterMember[] | undefined;

  /**
   * Provides a list of VPC security groups that the DB cluster belongs to.
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
   * Specifies whether the DB cluster is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * If `StorageEncrypted` is true, the Amazon KMS key identifier for the encrypted DB cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Region-unique, immutable identifier for the DB cluster. This identifier is found in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB cluster is accessed.
   *
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB cluster.
   *
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon services on your behalf.
   *
   * @public
   */
  AssociatedRoles?: DBClusterRole[] | undefined;

  /**
   * True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * Identifies the clone group to which the DB cluster is associated.
   *
   * @public
   */
  CloneGroupId?: string | undefined;

  /**
   * Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * *If set to `true`, tags are copied to any snapshot of the DB cluster that is created.*
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * A list of the log types that this DB cluster is configured to export to CloudWatch Logs. Valid log types are: `audit` (to publish audit logs to CloudWatch) and slowquery (to publish slow-query logs to CloudWatch). See [Publishing Neptune logs to Amazon CloudWatch logs](https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html).
   *
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * This data type is used as a response element in the `ModifyDBCluster` operation and contains changes that will be applied during the next maintenance window.
   *
   * @public
   */
  PendingModifiedValues?: ClusterPendingModifiedValues | undefined;

  /**
   * Indicates whether or not the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * If set to `true`, the DB cluster can be cloned across accounts.
   *
   * @public
   */
  CrossAccountClone?: boolean | undefined;

  /**
   * Time at which the DB cluster will be automatically restarted.
   *
   * @public
   */
  AutomaticRestartTime?: Date | undefined;

  /**
   * Shows the scaling configuration for a Neptune Serverless DB cluster.
   *
   * For more information, see [Using Amazon Neptune Serverless](https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html) in the *Amazon Neptune User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo | undefined;

  /**
   * Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * The next time you can modify the DB cluster to use the `iopt1` storage type.
   *
   * @public
   */
  IOOptimizedNextAllowedModificationTime?: Date | undefined;

  /**
   * The storage type used by the DB cluster.
   *
   * Valid Values:
   *
   * - **`standard`**   –   ( *the default* ) Provides cost-effective database storage for applications with moderate to small I/O usage.
   * - **`iopt1`**   –   Enables [I/O-Optimized storage](https://docs.aws.amazon.com/neptune/latest/userguide/storage-types.html#provisioned-iops-storage) that's designed to meet the needs of I/O-intensive graph workloads that require predictable pricing with low I/O latency and consistent I/O throughput.
   *
   *   Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The network type of the DB cluster.
   *
   * Valid Values:
   *
   * - **`IPV4`**   –   The DB cluster uses only IPv4 addresses for communication.
   * - **`DUAL`**   –   The DB cluster uses both IPv4 and IPv6 addresses for communication.
   *
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterResult {
  /**
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterEndpointMessage {
  /**
   * The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The identifier to use for the new endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * The type of the endpoint. One of: `READER`, `WRITER`, `ANY`.
   *
   * @public
   */
  EndpointType: string | undefined;

  /**
   * List of DB instance identifiers that are part of the custom endpoint group.
   *
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
   *
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * The tags to be assigned to the Amazon Neptune resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:
 *
 * - `CreateDBClusterEndpoint`
 * - `DescribeDBClusterEndpoints`
 * - `ModifyDBClusterEndpoint`
 * - `DeleteDBClusterEndpoint`
 *
 * For the data structure that represents Amazon Neptune DB instance endpoints, see `Endpoint`.
 *
 * @public
 */
export interface CreateDBClusterEndpointOutput {
  /**
   * The identifier associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.
   *
   * @public
   */
  DBClusterEndpointResourceIdentifier?: string | undefined;

  /**
   * The DNS address of the endpoint.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The current status of the endpoint. One of: `creating`, `available`, `deleting`, `inactive`, `modifying`. The `inactive` state applies to an endpoint that cannot be used for a certain kind of cluster, such as a `writer` endpoint for a read-only secondary cluster in a global database.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The type of the endpoint. One of: `READER`, `WRITER`, `CUSTOM`.
   *
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * The type associated with a custom endpoint. One of: `READER`, `WRITER`, `ANY`.
   *
   * @public
   */
  CustomEndpointType?: string | undefined;

  /**
   * List of DB instance identifiers that are part of the custom endpoint group.
   *
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
   *
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the endpoint.
   *
   * @public
   */
  DBClusterEndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * The name of the DB cluster parameter group.
   *
   * Constraints:
   *
   * - Must match the name of an existing DBClusterParameterGroup.
   *
   * > **Note:** This value is stored as a lowercase string.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
   *
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * The description for the DB cluster parameter group.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The tags to be assigned to the new DB cluster parameter group.
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
   * Contains the details of an Amazon Neptune DB cluster parameter group.
   *
   * This data type is used as a response element in the DescribeDBClusterParameterGroups action.
   *
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster1-snapshot1`
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBCluster.
   *
   * Example: `my-cluster1`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The tags to be assigned to the DB cluster snapshot.
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
   * Contains the details for an Amazon Neptune DB cluster snapshot
   *
   * This data type is used as a response element in the DescribeDBClusterSnapshots action.
   *
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceMessage {
  /**
   * Not supported.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * The DB instance identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `mydbinstance`
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The compute and memory capacity of the DB instance, for example, `db.m4.large`. Not all DB instance classes are available in all Amazon Regions.
   *
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * The name of the database engine to be used for this instance.
   *
   * Valid Values: `neptune`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * A list of DB security groups to associate with this DB instance.
   *
   * Default: The default DB security group for the database engine.
   *
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * A list of EC2 VPC security groups to associate with this DB instance.
   *
   * Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see CreateDBCluster.
   *
   * Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The EC2 Availability Zone that the DB instance is created in
   *
   * Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region.
   *
   * Example: `us-east-1d`
   *
   * Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to `true`. The specified Availability Zone must be in the same Amazon Region as the current endpoint.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * A DB subnet group to associate with this DB instance.
   *
   * If there is no DB subnet group, then it is a non-VPC DB instance.
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.
   *
   * Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * The number of days for which automated backups are retained.
   *
   * Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see CreateDBCluster.
   *
   * Default: 1
   *
   * Constraints:
   *
   * - Must be a value from 0 to 35
   * - Cannot be set to 0 if the DB instance is a source to Read Replicas
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created.
   *
   * Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see CreateDBCluster.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The port number on which the database accepts connections.
   *
   * Not applicable. The port is managed by the DB cluster. For more information, see CreateDBCluster.
   *
   * Default: `8182`
   *
   * Type: Integer
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The version number of the database engine to use. Currently, setting this parameter has no effect.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window.
   *
   * Default: `true`
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * License model information for this DB instance.
   *
   * Valid values: `license-included` | `bring-your-own-license` | `general-public-license`
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * Indicates whether the DB instance is publicly accessible.
   *
   * When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The tags to assign to the new instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The identifier of the DB cluster that the instance will belong to.
   *
   * For information on creating a DB cluster, see CreateDBCluster.
   *
   * Type: String
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The ARN from the key store with which to associate the instance for TDE encryption.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * The password for the given ARN from the key store in order to access the device.
   *
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * Specifies whether the DB instance is encrypted.
   *
   * Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see CreateDBCluster.
   *
   * Default: false
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The Amazon KMS key identifier for an encrypted DB instance.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same Amazon account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KMS encryption key.
   *
   * Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster.
   *
   * If the `StorageEncrypted` parameter is true, and you do not specify a value for the `KmsKeyId` parameter, then Amazon Neptune will use your default encryption key. Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a different default encryption key for each Amazon Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specify the Active Directory Domain to create the instance in.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.
   *
   * If `MonitoringRoleArn` is specified, then you must also set `MonitoringInterval` to a value other than 0.
   *
   * Valid Values: `0, 1, 5, 10, 15, 30, 60`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, `arn:aws:iam:123456789012:role/emaccess`.
   *
   * If `MonitoringInterval` is set to a value other than 0, then you must supply a `MonitoringRoleArn` value.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * Specify the name of the IAM role to be used when making API calls to the Directory Service.
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance.
   *
   * Default: 1
   *
   * Valid Values: 0 - 15
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * The time zone of the DB instance.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * Not supported by Neptune (ignored).
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The list of log types that need to be enabled for exporting to CloudWatch Logs.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See [Deleting a DB Instance](https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html).
   *
   * DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;
}

/**
 * The status of the DB parameter group.
 *
 * This data type is used as a response element in the following actions:
 *
 * - CreateDBInstance
 * - DeleteDBInstance
 * - ModifyDBInstance
 * - RebootDBInstance
 *
 * @public
 */
export interface DBParameterGroupStatus {
  /**
   * The name of the DB parameter group.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * The status of parameter updates.
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;
}

/**
 * Specifies membership in a designated DB security group.
 *
 * @public
 */
export interface DBSecurityGroupMembership {
  /**
   * The name of the DB security group.
   *
   * @public
   */
  DBSecurityGroupName?: string | undefined;

  /**
   * The status of the DB security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Specifies an Availability Zone.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * The name of the availability zone.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Specifies a subnet.
 *
 * This data type is used as a response element in the DescribeDBSubnetGroups action.
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
   * Specifies the EC2 Availability Zone that the subnet is in.
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
 * Contains the details of an Amazon Neptune DB subnet group.
 *
 * This data type is used as a response element in the DescribeDBSubnetGroups action.
 *
 * @public
 */
export interface DBSubnetGroup {
  /**
   * The name of the DB subnet group.
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * Provides the description of the DB subnet group.
   *
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * Provides the VpcId of the DB subnet group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Provides the status of the DB subnet group.
   *
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * Contains a list of Subnet elements.
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
   * The network types supported by the DB subnet group.
   *
   * Valid network types include `IPV4` and `DUAL`. A DB subnet group supports `DUAL` if all subnets in the group have both IPv4 and IPv6 CIDRs.
   *
   * @public
   */
  SupportedNetworkTypes?: string[] | undefined;
}

/**
 * An Active Directory Domain membership record associated with a DB instance.
 *
 * @public
 */
export interface DomainMembership {
  /**
   * The identifier of the Active Directory Domain.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The status of the DB instance's Active Directory Domain membership, such as joined, pending-join, failed etc).
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The fully qualified domain name of the Active Directory Domain.
   *
   * @public
   */
  FQDN?: string | undefined;

  /**
   * The name of the IAM role to be used when making API calls to the Directory Service.
   *
   * @public
   */
  IAMRoleName?: string | undefined;
}

/**
 * Specifies a connection endpoint.
 *
 * For the data structure that represents Amazon Neptune DB cluster endpoints, see `DBClusterEndpoint`.
 *
 * @public
 */
export interface Endpoint {
  /**
   * Specifies the DNS address of the DB instance.
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
 * Not supported by Neptune.
 *
 * @public
 */
export interface OptionGroupMembership {
  /**
   * Not supported by Neptune.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * This data type is used as a response element in the ModifyDBInstance action.
 *
 * @public
 */
export interface PendingModifiedValues {
  /**
   * Contains the new `DBInstanceClass` for the DB instance that will be applied or is currently being applied.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * Contains the new `AllocatedStorage` size for the DB instance that will be applied or is currently being applied.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * Specifies the pending port for the DB instance.
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
   * Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.
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
   * Not supported by Neptune.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * Specifies the new Provisioned IOPS value for the DB instance that will be applied or is currently being applied.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Contains the new `DBInstanceIdentifier` for the DB instance that will be applied or is currently being applied.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Specifies the identifier of the CA certificate for the DB instance.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The new DB subnet group for the DB instance.
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * This `PendingCloudwatchLogsExports` structure specifies pending changes to which CloudWatch logs are enabled and which are disabled.
   *
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;
}

/**
 * Provides a list of status information for a DB instance.
 *
 * @public
 */
export interface DBInstanceStatusInfo {
  /**
   * This value is currently "read replication."
   *
   * @public
   */
  StatusType?: string | undefined;

  /**
   * Boolean value that is true if the instance is operating normally, or false if the instance is in an error state.
   *
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * Status of the DB instance. For a StatusType of read replica, the values can be replicating, error, stopped, or terminated.
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
 * Contains the details of an Amazon Neptune DB instance.
 *
 * This data type is used as a response element in the DescribeDBInstances action.
 *
 * @public
 */
export interface DBInstance {
  /**
   * Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * Contains the name of the compute and memory capacity class of the DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * Provides the name of the database engine to be used for this DB instance.
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
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The database name.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * Specifies the connection endpoint.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Provides the date and time the DB instance was created.
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
   * Specifies the number of days for which automatic DB snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * Provides List of DB security group elements containing only `DBSecurityGroup.Name` and `DBSecurityGroup.Status` subelements.
   *
   * @public
   */
  DBSecurityGroups?: DBSecurityGroupMembership[] | undefined;

  /**
   * Provides a list of VPC security group elements that the DB instance belongs to.
   *
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * Provides the list of DB parameter groups applied to this DB instance.
   *
   * @public
   */
  DBParameterGroups?: DBParameterGroupStatus[] | undefined;

  /**
   * Specifies the name of the Availability Zone the DB instance is located in.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.
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
   * Specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.
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
   * Specifies if the DB instance is a Multi-AZ deployment.
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
   * Indicates that minor version patches are applied automatically.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Contains the identifier of the source DB instance if this DB instance is a Read Replica.
   *
   * @public
   */
  ReadReplicaSourceDBInstanceIdentifier?: string | undefined;

  /**
   * Contains one or more identifiers of the Read Replicas associated with this DB instance.
   *
   * @public
   */
  ReadReplicaDBInstanceIdentifiers?: string[] | undefined;

  /**
   * Contains one or more identifiers of DB clusters that are Read Replicas of this DB instance.
   *
   * @public
   */
  ReadReplicaDBClusterIdentifiers?: string[] | undefined;

  /**
   * License model information for this DB instance.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * Specifies the Provisioned IOPS (I/O operations per second) value.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  OptionGroupMemberships?: OptionGroupMembership[] | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.
   *
   * @public
   */
  SecondaryAvailabilityZone?: string | undefined;

  /**
   * Indicates whether the DB instance is publicly accessible.
   *
   * When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The status of a Read Replica. If the instance is not a Read Replica, this is blank.
   *
   * @public
   */
  StatusInfos?: DBInstanceStatusInfo[] | undefined;

  /**
   * Specifies the storage type associated with the DB instance.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The ARN from the key store with which the instance is associated for TDE encryption.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.
   *
   * @public
   */
  DbInstancePort?: number | undefined;

  /**
   * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Not supported: The encryption for DB instances is managed by the DB cluster.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * Not supported: The encryption for DB instances is managed by the DB cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Region-unique, immutable identifier for the DB instance. This identifier is found in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB instance is accessed.
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
   * Not supported
   *
   * @public
   */
  DomainMemberships?: DomainMembership[] | undefined;

  /**
   * Specifies whether tags are copied from the DB instance to snapshots of the DB instance.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.
   *
   * @public
   */
  EnhancedMonitoringResourceArn?: string | undefined;

  /**
   * The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB instance.
   *
   * @public
   */
  DBInstanceArn?: string | undefined;

  /**
   * Not supported.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * True if Amazon Identity and Access Management (IAM) authentication is enabled, and otherwise false.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * A list of log types that this DB instance is configured to export to CloudWatch Logs.
   *
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * Indicates whether or not the DB instance has deletion protection enabled. The instance can't be deleted when deletion protection is enabled. See [Deleting a DB Instance](https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html).
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The network type of the DB instance. Inherited from the DB cluster.
   *
   * Valid Values: `IPV4`, `DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceResult {
  /**
   * Contains the details of an Amazon Neptune DB instance.
   *
   * This data type is used as a response element in the DescribeDBInstances action.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface CreateDBParameterGroupMessage {
  /**
   * The name of the DB parameter group.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * > **Note:** This value is stored as a lowercase string.
   *
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.
   *
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * The description for the DB parameter group.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The tags to be assigned to the new DB parameter group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBParameterGroupResult {
  /**
   * Contains the details of an Amazon Neptune DB parameter group.
   *
   * This data type is used as a response element in the DescribeDBParameterGroups action.
   *
   * @public
   */
  DBParameterGroup?: DBParameterGroup | undefined;
}

/**
 * @public
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * The name for the DB subnet group. This value is stored as a lowercase string.
   *
   * Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * The description for the DB subnet group.
   *
   * @public
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * The EC2 Subnet IDs for the DB subnet group.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The tags to be assigned to the new DB subnet group.
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
   * Contains the details of an Amazon Neptune DB subnet group.
   *
   * This data type is used as a response element in the DescribeDBSubnetGroups action.
   *
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionMessage {
  /**
   * The name of the subscription.
   *
   * Constraints: The name must be less than 255 characters.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
   *
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.
   *
   * Valid values: `db-instance` | `db-cluster` | `db-parameter-group` | `db-security-group` | `db-snapshot` | `db-cluster-snapshot`
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the **DescribeEventCategories** action.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
   *
   * Constraints:
   *
   * - If SourceIds are supplied, SourceType must also be provided.
   * - If the source type is a DB instance, then a `DBInstanceIdentifier` must be supplied.
   * - If the source type is a DB security group, a `DBSecurityGroupName` must be supplied.
   * - If the source type is a DB parameter group, a `DBParameterGroupName` must be supplied.
   * - If the source type is a DB snapshot, a `DBSnapshotIdentifier` must be supplied.
   *
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * A Boolean value; set to **true** to activate the subscription, set to **false** to create the subscription but not activate it.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The tags to be applied to the new event subscription.
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
   * Contains the results of a successful invocation of the DescribeEventSubscriptions action.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface CreateGlobalClusterMessage {
  /**
   * The cluster identifier of the new global database cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * (*Optional*) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.
   *
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * The name of the database engine to be used in the global database.
   *
   * Valid values: `neptune`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The Neptune engine version to be used by the global database.
   *
   * Valid values: `1.2.0.0` or above.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The name for the new global database (up to 64 alpha-numeric characters).
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Tags to assign to the global cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The storage encryption setting for the new global database cluster.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;
}

/**
 * Contains the state of scheduled or in-process operations on a global cluster (Neptune global database). This data type is empty unless a switchover or failover operation is scheduled or is in progress on the Neptune global database.
 *
 * @public
 */
export interface FailoverState {
  /**
   * The current status of the global cluster. Possible values are as follows:
   *
   * - pending  The service received a request to switch over or fail over the global cluster. The global cluster's primary DB cluster and the specified secondary DB cluster are being verified before the operation starts.
   * - failing-over  Neptune is promoting the chosen secondary Neptune DB cluster to become the new primary DB cluster to fail over the global cluster.
   * - cancelling  The request to switch over or fail over the global cluster was cancelled and the primary Neptune DB cluster and the selected secondary Neptune DB cluster are returning to their previous states.
   * - switching-over  This status covers the range of Neptune internal operations that take place during the switchover process, such as demoting the primary Neptune DB cluster, promoting the secondary Neptune DB cluster, and synchronizing replicas.
   *
   * @public
   */
  Status?: FailoverStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Neptune DB cluster that is currently being demoted, and which is associated with this state.
   *
   * @public
   */
  FromDbClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Neptune DB cluster that is currently being promoted, and which is associated with this state.
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
 * A data structure with information about any primary and secondary clusters associated with an Neptune global database.
 *
 * @public
 */
export interface GlobalClusterMember {
  /**
   * The Amazon Resource Name (ARN) for each Neptune cluster.
   *
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the Neptune global database.
   *
   * @public
   */
  Readers?: string[] | undefined;

  /**
   * Specifies whether the Neptune cluster is the primary cluster (that is, has read-write capability) for the Neptune global database with which it is associated.
   *
   * @public
   */
  IsWriter?: boolean | undefined;
}

/**
 * Contains the details of an Amazon Neptune global database.
 *
 * This data type is used as a response element for the CreateGlobalCluster, DescribeGlobalClusters, ModifyGlobalCluster, DeleteGlobalCluster, FailoverGlobalCluster, and RemoveFromGlobalCluster actions.
 *
 * @public
 */
export interface GlobalCluster {
  /**
   * Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * An immutable identifier for the global database that is unique within all regions. This identifier is found in CloudTrail log entries whenever the KMS key for the DB cluster is accessed.
   *
   * @public
   */
  GlobalClusterResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the global database.
   *
   * @public
   */
  GlobalClusterArn?: string | undefined;

  /**
   * Specifies the current state of this global database.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The Neptune database engine used by the global database (`"neptune"`).
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The Neptune engine version used by the global database.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The default database name within the new global database cluster.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The storage encryption setting for the global database.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The deletion protection setting for the global database.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * A list of cluster ARNs and instance ARNs for all the DB clusters that are part of the global database.
   *
   * @public
   */
  GlobalClusterMembers?: GlobalClusterMember[] | undefined;

  /**
   * A data object containing all properties for the current state of an in-process or pending switchover or failover process for this global cluster (Neptune global database). This object is empty unless the `SwitchoverGlobalCluster` or `FailoverGlobalCluster` operation was called on this global cluster.
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
   * Contains the details of an Amazon Neptune global database.
   *
   * This data type is used as a response element for the CreateGlobalCluster, DescribeGlobalClusters, ModifyGlobalCluster, DeleteGlobalCluster, FailoverGlobalCluster, and RemoveFromGlobalCluster actions.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterMessage {
  /**
   * The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match an existing DBClusterIdentifier.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If `true` is specified, no DB cluster snapshot is created. If `false` is specified, a DB cluster snapshot is created before the DB cluster is deleted.
   *
   * > **Note:** You must specify a `FinalDBSnapshotIdentifier` parameter if `SkipFinalSnapshot` is `false`.
   *
   * Default: `false`
   *
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * The DB cluster snapshot identifier of the new DB cluster snapshot created when `SkipFinalSnapshot` is set to `false`.
   *
   * > **Note:** Specifying this parameter and also setting the `SkipFinalSnapshot` parameter to true results in an error.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
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
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterEndpointMessage {
  /**
   * The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;
}

/**
 * This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:
 *
 * - `CreateDBClusterEndpoint`
 * - `DescribeDBClusterEndpoints`
 * - `ModifyDBClusterEndpoint`
 * - `DeleteDBClusterEndpoint`
 *
 * For the data structure that represents Amazon RDS DB instance endpoints, see `Endpoint`.
 *
 * @public
 */
export interface DeleteDBClusterEndpointOutput {
  /**
   * The identifier associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.
   *
   * @public
   */
  DBClusterEndpointResourceIdentifier?: string | undefined;

  /**
   * The DNS address of the endpoint.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The current status of the endpoint. One of: `creating`, `available`, `deleting`, `inactive`, `modifying`. The `inactive` state applies to an endpoint that cannot be used for a certain kind of cluster, such as a `writer` endpoint for a read-only secondary cluster in a global database.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The type of the endpoint. One of: `READER`, `WRITER`, `CUSTOM`.
   *
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * The type associated with a custom endpoint. One of: `READER`, `WRITER`, `ANY`.
   *
   * @public
   */
  CustomEndpointType?: string | undefined;

  /**
   * List of DB instance identifiers that are part of the custom endpoint group.
   *
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
   *
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the endpoint.
   *
   * @public
   */
  DBClusterEndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterParameterGroupMessage {
  /**
   * The name of the DB cluster parameter group.
   *
   * Constraints:
   *
   * - Must be the name of an existing DB cluster parameter group.
   * - You can't delete a default DB cluster parameter group.
   * - Cannot be associated with any DB clusters.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterSnapshotMessage {
  /**
   * The identifier of the DB cluster snapshot to delete.
   *
   * Constraints: Must be the name of an existing DB cluster snapshot in the `available` state.
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
   * Contains the details for an Amazon Neptune DB cluster snapshot
   *
   * This data type is used as a response element in the DescribeDBClusterSnapshots action.
   *
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceMessage {
  /**
   * The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match the name of an existing DB instance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * Determines whether a final DB snapshot is created before the DB instance is deleted. If `true` is specified, no DBSnapshot is created. If `false` is specified, a DB snapshot is created before the DB instance is deleted.
   *
   * Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to "true".
   *
   * Specify `true` when deleting a Read Replica.
   *
   * > **Note:** The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is `false`.
   *
   * Default: `false`
   *
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to `false`.
   *
   * > **Note:** Specifying this parameter and also setting the SkipFinalSnapshot parameter to true results in an error.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters or numbers.
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   * - Cannot be specified when deleting a Read Replica.
   *
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceResult {
  /**
   * Contains the details of an Amazon Neptune DB instance.
   *
   * This data type is used as a response element in the DescribeDBInstances action.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface DeleteDBParameterGroupMessage {
  /**
   * The name of the DB parameter group.
   *
   * Constraints:
   *
   * - Must be the name of an existing DB parameter group
   * - You can't delete a default DB parameter group
   * - Cannot be associated with any DB instances
   *
   * @public
   */
  DBParameterGroupName: string | undefined;
}

/**
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
   * Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * The name of the event notification subscription you want to delete.
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
   * Contains the results of a successful invocation of the DescribeEventSubscriptions action.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalClusterMessage {
  /**
   * The cluster identifier of the global database cluster being deleted.
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
   * Contains the details of an Amazon Neptune global database.
   *
   * This data type is used as a response element for the CreateGlobalCluster, DescribeGlobalClusters, ModifyGlobalCluster, DeleteGlobalCluster, FailoverGlobalCluster, and RemoveFromGlobalCluster actions.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:
 *
 * - `CreateDBClusterEndpoint`
 * - `DescribeDBClusterEndpoints`
 * - `ModifyDBClusterEndpoint`
 * - `DeleteDBClusterEndpoint`
 *
 * For the data structure that represents Amazon Neptune DB instance endpoints, see `Endpoint`.
 *
 * @public
 */
export interface DBClusterEndpoint {
  /**
   * The identifier associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.
   *
   * @public
   */
  DBClusterEndpointResourceIdentifier?: string | undefined;

  /**
   * The DNS address of the endpoint.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The current status of the endpoint. One of: `creating`, `available`, `deleting`, `inactive`, `modifying`. The `inactive` state applies to an endpoint that cannot be used for a certain kind of cluster, such as a `writer` endpoint for a read-only secondary cluster in a global database.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The type of the endpoint. One of: `READER`, `WRITER`, `CUSTOM`.
   *
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * The type associated with a custom endpoint. One of: `READER`, `WRITER`, `ANY`.
   *
   * @public
   */
  CustomEndpointType?: string | undefined;

  /**
   * List of DB instance identifiers that are part of the custom endpoint group.
   *
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
   *
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the endpoint.
   *
   * @public
   */
  DBClusterEndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface DBClusterEndpointMessage {
  /**
   * An optional pagination token provided by a previous `DescribeDBClusterEndpoints` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Contains the details of the endpoints associated with the cluster and matching any filter conditions.
   *
   * @public
   */
  DBClusterEndpoints?: DBClusterEndpoint[] | undefined;
}

/**
 * This type is not currently supported.
 *
 * @public
 */
export interface Filter {
  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * This parameter is not currently supported.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterEndpointsMessage {
  /**
   * The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * The identifier of the endpoint to describe. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * A set of name-value pairs that define which endpoints to include in the output. The filters are specified as name-value pairs, in the format `Name=endpoint_type,Values=endpoint_type1,endpoint_type2,...`. `Name` can be one of: `db-cluster-endpoint-type`, `db-cluster-endpoint-custom-type`, `db-cluster-endpoint-id`, `db-cluster-endpoint-status`. `Values` for the `db-cluster-endpoint-type` filter can be one or more of: `reader`, `writer`, `custom`. `Values` for the `db-cluster-endpoint-custom-type` filter can be one or more of: `reader`, `any`. `Values` for the `db-cluster-endpoint-status` filter can be one or more of: `available`, `creating`, `deleting`, `inactive`, `modifying`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBClusterEndpoints` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBClusterParameterGroupsMessage {
  /**
   * An optional pagination token provided by a previous `DescribeDBClusterParameterGroups` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of DB cluster parameter groups.
   *
   * @public
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterParameterGroupsMessage {
  /**
   * The name of a specific DB cluster parameter group to return details for.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBClusterParameterGroup.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBClusterParameterGroups` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Specifies a parameter.
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
   * Specifies the value of the parameter.
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
   * Specifies the engine specific parameters type.
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
 * @public
 */
export interface DBClusterParameterGroupDetails {
  /**
   * Provides a list of parameters for the DB cluster parameter group.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * An optional pagination token provided by a previous DescribeDBClusterParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords` .
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterParametersMessage {
  /**
   * The name of a specific DB cluster parameter group to return parameter details for.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBClusterParameterGroup.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBClusterParameters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBClusterMessage {
  /**
   * A pagination token that can be used in a subsequent DescribeDBClusters request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Contains a list of DB clusters for the user.
   *
   * @public
   */
  DBClusters?: DBCluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClustersMessage {
  /**
   * The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match an existing DBClusterIdentifier.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more DB clusters to describe.
   *
   * Supported filters:
   *
   * - `db-cluster-id` - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.
   * - `engine` - Accepts an engine name (such as `neptune`), and restricts the results list to DB clusters created by that engine.
   *
   * For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB clusters are returned, you could use the following command:
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous DescribeDBClusters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  /**
   * The identifier for the DB cluster snapshot to describe the attributes for.
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * Contains the name and values of a manual DB cluster snapshot attribute.
 *
 * Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore a manual DB cluster snapshot. For more information, see the ModifyDBClusterSnapshotAttribute API action.
 *
 * @public
 */
export interface DBClusterSnapshotAttribute {
  /**
   * The name of the manual DB cluster snapshot attribute.
   *
   * The attribute named `restore` refers to the list of Amazon accounts that have permission to copy or restore the manual DB cluster snapshot. For more information, see the ModifyDBClusterSnapshotAttribute API action.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The value(s) for the manual DB cluster snapshot attribute.
   *
   * If the `AttributeName` field is set to `restore`, then this element returns a list of IDs of the Amazon accounts that are authorized to copy or restore the manual DB cluster snapshot. If a value of `all` is in the list, then the manual DB cluster snapshot is public and available for any Amazon account to copy or restore.
   *
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * Contains the results of a successful call to the DescribeDBClusterSnapshotAttributes API action.
 *
 * Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the ModifyDBClusterSnapshotAttribute API action.
 *
 * @public
 */
export interface DBClusterSnapshotAttributesResult {
  /**
   * The identifier of the manual DB cluster snapshot that the attributes apply to.
   *
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * The list of attributes and values for the manual DB cluster snapshot.
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
   * Contains the results of a successful call to the DescribeDBClusterSnapshotAttributes API action.
   *
   * Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the ModifyDBClusterSnapshotAttribute API action.
   *
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * @public
 */
export interface DBClusterSnapshotMessage {
  /**
   * An optional pagination token provided by a previous DescribeDBClusterSnapshots request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Provides a list of DB cluster snapshots for the user.
   *
   * @public
   */
  DBClusterSnapshots?: DBClusterSnapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotsMessage {
  /**
   * The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the `DBClusterSnapshotIdentifier` parameter. This parameter is not case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match the identifier of an existing DBCluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the `DBClusterIdentifier` parameter. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - If supplied, must match the identifier of an existing DBClusterSnapshot.
   * - If this identifier is for an automated snapshot, the `SnapshotType` parameter must also be specified.
   *
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * The type of DB cluster snapshots to be returned. You can specify one of the following values:
   *
   * - `automated` - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my Amazon account.
   * - `manual` - Return all DB cluster snapshots that have been taken by my Amazon account.
   * - `shared` - Return all manual DB cluster snapshots that have been shared to my Amazon account.
   * - `public` - Return all DB cluster snapshots that have been marked as public.
   *
   * If you don't specify a `SnapshotType` value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the `IncludeShared` parameter to `true`. You can include public DB cluster snapshots with these results by setting the `IncludePublic` parameter to `true`.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBClusterSnapshots` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon account has been given permission to copy or restore, and otherwise false. The default is `false`.
   *
   * You can give an Amazon account permission to restore a manual DB cluster snapshot from another Amazon account by the ModifyDBClusterSnapshotAttribute API action.
   *
   * @public
   */
  IncludeShared?: boolean | undefined;

  /**
   * True to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon account, and otherwise false. The default is `false`. The default is false.
   *
   * You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action.
   *
   * @public
   */
  IncludePublic?: boolean | undefined;
}

/**
 * Specifies a character set.
 *
 * @public
 */
export interface CharacterSet {
  /**
   * The name of the character set.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The description of the character set.
   *
   * @public
   */
  CharacterSetDescription?: string | undefined;
}

/**
 * A time zone associated with a DBInstance.
 *
 * @public
 */
export interface Timezone {
  /**
   * The name of the time zone.
   *
   * @public
   */
  TimezoneName?: string | undefined;
}

/**
 * The version of the database engine that a DB instance can be upgraded to.
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
   * The version of the database engine that a DB instance can be upgraded to.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A value that indicates whether the target version is applied to any source DB instances that have AutoMinorVersionUpgrade set to true.
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

  /**
   * A value that indicates whether you can use Neptune global databases with the target engine version.
   *
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;
}

/**
 * This data type is used as a response element in the action DescribeDBEngineVersions.
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
   * The name of the DB parameter group family for the database engine.
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
   * *(Not supported by Neptune)*
   *
   * @public
   */
  DefaultCharacterSet?: CharacterSet | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  SupportedCharacterSets?: CharacterSet[] | undefined;

  /**
   * A list of engine versions that this database engine version can be upgraded to.
   *
   * @public
   */
  ValidUpgradeTarget?: UpgradeTarget[] | undefined;

  /**
   * A list of the time zones supported by this engine for the `Timezone` parameter of the `CreateDBInstance` action.
   *
   * @public
   */
  SupportedTimezones?: Timezone[] | undefined;

  /**
   * The types of logs that the database engine has available for export to CloudWatch Logs.
   *
   * @public
   */
  ExportableLogTypes?: string[] | undefined;

  /**
   * A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.
   *
   * @public
   */
  SupportsLogExportsToCloudwatchLogs?: boolean | undefined;

  /**
   * Indicates whether the database engine version supports read replicas.
   *
   * @public
   */
  SupportsReadReplica?: boolean | undefined;

  /**
   * A value that indicates whether you can use Aurora global databases with a specific DB engine version.
   *
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;
}

/**
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
   * A list of `DBEngineVersion` elements.
   *
   * @public
   */
  DBEngineVersions?: DBEngineVersion[] | undefined;
}

/**
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
   * Example: `5.1.49`
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of a specific DB parameter group family to return details for.
   *
   * Constraints:
   *
   * - If supplied, must match an existing DBParameterGroupFamily.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * Not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more than the `MaxRecords` value is available, a pagination token called a marker is included in the response so that the following results can be retrieved.
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
 * @public
 */
export interface DBInstanceMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords` .
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of DBInstance instances.
   *
   * @public
   */
  DBInstances?: DBInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBInstancesMessage {
  /**
   * The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match the identifier of an existing DBInstance.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more DB instances to describe.
   *
   * Supported filters:
   *
   * - `db-cluster-id` - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.
   * - `engine` - Accepts an engine name (such as `neptune`), and restricts the results list to DB instances created by that engine.
   *
   * For example, to invoke this API from the Amazon CLI and filter so that only Neptune DB instances are returned, you could use the following command:
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBInstances` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBParameterGroupsMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of DBParameterGroup instances.
   *
   * @public
   */
  DBParameterGroups?: DBParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBParameterGroupsMessage {
  /**
   * The name of a specific DB parameter group to return details for.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBClusterParameterGroup.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

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
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBParameterGroups` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBParameterGroupDetails {
  /**
   * A list of Parameter values.
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
 * @public
 */
export interface DescribeDBParametersMessage {
  /**
   * The name of a specific DB parameter group to return details for.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBParameterGroup.
   *
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * The parameter types to return.
   *
   * Default: All parameter types returned
   *
   * Valid Values: `user | system | engine-default`
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBParameters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
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
   * A list of DBSubnetGroup instances.
   *
   * @public
   */
  DBSubnetGroups?: DBSubnetGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * The name of the DB subnet group to return details for.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * The name of the DB cluster parameter group family to return engine parameter information for.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeEngineDefaultClusterParameters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the DescribeEngineDefaultParameters action.
 *
 * @public
 */
export interface EngineDefaults {
  /**
   * Specifies the name of the DB parameter group family that the engine default parameters apply to.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * An optional pagination token provided by a previous EngineDefaults request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords` .
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Contains a list of engine default parameters.
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
   * Contains the result of a successful invocation of the DescribeEngineDefaultParameters action.
   *
   * @public
   */
  EngineDefaults?: EngineDefaults | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * The name of the DB parameter group family.
   *
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * Not currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeEngineDefaultParameters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultParametersResult {
  /**
   * Contains the result of a successful invocation of the DescribeEngineDefaultParameters action.
   *
   * @public
   */
  EngineDefaults?: EngineDefaults | undefined;
}

/**
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * The type of source that is generating the events.
   *
   * Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot
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
 * Contains the results of a successful invocation of the DescribeEventCategories action.
 *
 * @public
 */
export interface EventCategoriesMap {
  /**
   * The source type that the returned categories belong to
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The event categories for the specified source type
   *
   * @public
   */
  EventCategories?: string[] | undefined;
}

/**
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * A list of EventCategoriesMap data types.
   *
   * @public
   */
  EventCategoriesMapList?: EventCategoriesMap[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.
   *
   * Constraints:
   *
   * - If SourceIdentifier is supplied, SourceType must also be provided.
   * - If the source type is `DBInstance`, then a `DBInstanceIdentifier` must be supplied.
   * - If the source type is `DBSecurityGroup`, a `DBSecurityGroupName` must be supplied.
   * - If the source type is `DBParameterGroup`, a `DBParameterGroupName` must be supplied.
   * - If the source type is `DBSnapshot`, a `DBSnapshotIdentifier` must be supplied.
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
   * The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the [ISO8601 Wikipedia page.](http://en.wikipedia.org/wiki/ISO_8601)
   *
   * Example: 2009-07-08T18:00Z
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the [ISO8601 Wikipedia page.](http://en.wikipedia.org/wiki/ISO_8601)
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
   * A list of event categories that trigger notifications for a event notification subscription.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This data type is used as a response element in the DescribeEvents action.
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
 * @public
 */
export interface EventsMessage {
  /**
   * An optional pagination token provided by a previous Events request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords` .
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of Event instances.
   *
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * The name of the event notification subscription you want to describe.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords` .
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface EventSubscriptionsMessage {
  /**
   * An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of EventSubscriptions data types.
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
   * The user-supplied DB cluster identifier. If this parameter is specified, only information about the specified DB cluster is returned. This parameter is not case-sensitive.
   *
   * Constraints: If supplied, must match an existing DB cluster identifier.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination marker token is included in the response that you can use to retrieve the remaining results.
   *
   * Default: `100`
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * (*Optional*) A pagination token returned by a previous call to `DescribeGlobalClusters`. If this parameter is specified, the response will only include records beyond the marker, up to the number specified by `MaxRecords`.
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
   * A pagination token. If this parameter is returned in the response, more records are available, which can be retrieved by one or more additional calls to `DescribeGlobalClusters`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The list of global clusters and instances returned by this request.
   *
   * @public
   */
  GlobalClusters?: GlobalCluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * The name of the engine to retrieve DB instance options for.
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords` .
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains a list of available options for a DB instance.
 *
 * This data type is used as a response element in the DescribeOrderableDBInstanceOptions action.
 *
 * @public
 */
export interface OrderableDBInstanceOption {
  /**
   * The engine type of a DB instance.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The engine version of a DB instance.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The DB instance class for a DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The license model for a DB instance.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * A list of Availability Zones for a DB instance.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * Indicates whether a DB instance is Multi-AZ capable.
   *
   * @public
   */
  MultiAZCapable?: boolean | undefined;

  /**
   * Indicates whether a DB instance can have a Read Replica.
   *
   * @public
   */
  ReadReplicaCapable?: boolean | undefined;

  /**
   * Indicates whether a DB instance is in a VPC.
   *
   * @public
   */
  Vpc?: boolean | undefined;

  /**
   * Indicates whether a DB instance supports encrypted storage.
   *
   * @public
   */
  SupportsStorageEncryption?: boolean | undefined;

  /**
   * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Indicates whether a DB instance supports provisioned IOPS.
   *
   * @public
   */
  SupportsIops?: boolean | undefined;

  /**
   * Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds.
   *
   * @public
   */
  SupportsEnhancedMonitoring?: boolean | undefined;

  /**
   * Indicates whether a DB instance supports IAM database authentication.
   *
   * @public
   */
  SupportsIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  SupportsPerformanceInsights?: boolean | undefined;

  /**
   * Minimum storage size for a DB instance.
   *
   * @public
   */
  MinStorageSize?: number | undefined;

  /**
   * Maximum storage size for a DB instance.
   *
   * @public
   */
  MaxStorageSize?: number | undefined;

  /**
   * Minimum total provisioned IOPS for a DB instance.
   *
   * @public
   */
  MinIopsPerDbInstance?: number | undefined;

  /**
   * Maximum total provisioned IOPS for a DB instance.
   *
   * @public
   */
  MaxIopsPerDbInstance?: number | undefined;

  /**
   * Minimum provisioned IOPS per GiB for a DB instance.
   *
   * @public
   */
  MinIopsPerGib?: number | undefined;

  /**
   * Maximum provisioned IOPS per GiB for a DB instance.
   *
   * @public
   */
  MaxIopsPerGib?: number | undefined;

  /**
   * A value that indicates whether you can use Neptune global databases with a specific combination of other DB engine attributes.
   *
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;

  /**
   * The network types supported by the orderable DB instance option.
   *
   * @public
   */
  SupportedNetworkTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * An OrderableDBInstanceOption structure containing information about orderable options for the DB instance.
   *
   * @public
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[] | undefined;

  /**
   * An optional pagination token provided by a previous OrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords` .
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
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
   * - `db-cluster-id` - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.
   * - `db-instance-id` - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribePendingMaintenanceActions` request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
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
 * @public
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * A list of the pending maintenance actions for the resource.
   *
   * @public
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribePendingMaintenanceActions` request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsMessage {
  /**
   * The customer identifier or the ARN of your DB instance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * A range of double values.
 *
 * @public
 */
export interface DoubleRange {
  /**
   * The minimum value in the range.
   *
   * @public
   */
  From?: number | undefined;

  /**
   * The maximum value in the range.
   *
   * @public
   */
  To?: number | undefined;
}

/**
 * A range of integer values.
 *
 * @public
 */
export interface Range {
  /**
   * The minimum value in the range.
   *
   * @public
   */
  From?: number | undefined;

  /**
   * The maximum value in the range.
   *
   * @public
   */
  To?: number | undefined;

  /**
   * The step value for the range. For example, if you have a range of 5,000 to 10,000, with a step value of 1,000, the valid values start at 5,000 and step up by 1,000. Even though 7,500 is within the range, it isn't a valid value for the range. The valid values are 5,000, 6,000, 7,000, 8,000...
   *
   * @public
   */
  Step?: number | undefined;
}

/**
 * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
 *
 * @public
 */
export interface ValidStorageOptions {
  /**
   * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
   *
   * @public
   */
  StorageSize?: Range[] | undefined;

  /**
   * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
   *
   * @public
   */
  ProvisionedIops?: Range[] | undefined;

  /**
   * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
   *
   * @public
   */
  IopsToStorageRatio?: DoubleRange[] | undefined;
}

/**
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the DescribeValidDBInstanceModifications action. You can use this information when you call ModifyDBInstance.
 *
 * @public
 */
export interface ValidDBInstanceModificationsMessage {
  /**
   * Valid storage options for your DB instance.
   *
   * @public
   */
  Storage?: ValidStorageOptions[] | undefined;
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsResult {
  /**
   * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the DescribeValidDBInstanceModifications action. You can use this information when you call ModifyDBInstance.
   *
   * @public
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage | undefined;
}

/**
 * @public
 */
export interface FailoverDBClusterMessage {
  /**
   * A DB cluster identifier to force a failover for. This parameter is not case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBCluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * The name of the instance to promote to the primary instance.
   *
   * You must specify the instance identifier for an Read Replica in the DB cluster. For example, `mydbcluster-replica1`.
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
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
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
   * Identifier of the Neptune global database that should be failed over. The identifier is the unique key assigned by the user when the Neptune global database was created. In other words, it's the name of the global database that you want to fail over.
   *
   * Constraints: Must match the identifier of an existing Neptune global database.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for the global database.
   *
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;

  /**
   * Specifies whether to allow data loss for this global database cluster operation. Allowing data loss triggers a global failover operation.
   *
   * If you don't specify `AllowDataLoss`, the global database cluster operation defaults to a switchover.
   *
   * Constraints: Can't be specified together with the `Switchover` parameter.
   *
   * @public
   */
  AllowDataLoss?: boolean | undefined;

  /**
   * Specifies whether to switch over this global database cluster.
   *
   * Constraints: Can't be specified together with the `AllowDataLoss` parameter.
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
   * Contains the details of an Amazon Neptune global database.
   *
   * This data type is used as a response element for the CreateGlobalCluster, DescribeGlobalClusters, ModifyGlobalCluster, DeleteGlobalCluster, FailoverGlobalCluster, and RemoveFromGlobalCluster actions.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an Amazon Resource Name (ARN)](https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing).
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
 * @public
 */
export interface TagListMessage {
  /**
   * List of tags returned by the ListTagsForResource operation.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.
 *
 * The `EnableLogTypes` and `DisableLogTypes` arrays determine which logs will be exported (or not exported) to CloudWatch Logs.
 *
 * Valid log types are: `audit` (to publish audit logs) and `slowquery` (to publish slow-query logs). See [Publishing Neptune logs to Amazon CloudWatch logs](https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html).
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
 * @public
 */
export interface ModifyDBClusterMessage {
  /**
   * The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBCluster.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens
   * - The first character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-cluster2`
   *
   * @public
   */
  NewDBClusterIdentifier?: string | undefined;

  /**
   * A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the `PreferredMaintenanceWindow` setting for the DB cluster. If this parameter is set to `false`, changes to the DB cluster are applied during the next maintenance window.
   *
   * The `ApplyImmediately` parameter only affects `NewDBClusterIdentifier` values. If you set the `ApplyImmediately` parameter value to false, then changes to `NewDBClusterIdentifier` values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the `ApplyImmediately` parameter.
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
   * - Must be a value from 1 to 35
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The name of the DB cluster parameter group to use for the DB cluster.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A list of VPC security groups that the DB cluster will belong to.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The port number on which the DB cluster accepts connections.
   *
   * Constraints: Value must be `1150-65535`
   *
   * Default: The same port as the original DB cluster.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * *Not supported by Neptune.*
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region.
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
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Region, occurring on a random day of the week.
   *
   * Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.
   *
   * Default: `false`
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster. See [Using the CLI to publish Neptune audit logs to CloudWatch Logs](https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html#cloudwatch-logs-cli).
   *
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless the `ApplyImmediately` parameter is set to true.
   *
   * For a list of valid engine versions, see [Engine Releases for Amazon Neptune](https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases.html), or call DescribeDBEngineVersions.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * A value that indicates whether upgrades between different major versions are allowed.
   *
   * Constraints: You must set the allow-major-version-upgrade flag when providing an `EngineVersion` parameter that uses a different major version than the DB cluster's current version.
   *
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * The name of the DB parameter group to apply to all instances of the DB cluster.
   *
   * > **Note:** When you apply a parameter group using `DBInstanceParameterGroupName`, parameter changes aren't applied during the next maintenance window but instead are applied immediately.
   *
   * Default: The existing name setting
   *
   * Constraints:
   *
   * - The DB parameter group must be in the same DB parameter group family as the target DB cluster version.
   * - The `DBInstanceParameterGroupName` parameter is only valid in combination with the `AllowMajorVersionUpgrade` parameter.
   *
   * @public
   */
  DBInstanceParameterGroupName?: string | undefined;

  /**
   * A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * *If set to `true`, tags are copied to any snapshot of the DB cluster that is created.*
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * Contains the scaling configuration of a Neptune Serverless DB cluster.
   *
   * For more information, see [Using Amazon Neptune Serverless](https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html) in the *Amazon Neptune User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * The storage type to associate with the DB cluster.
   *
   * Valid Values:
   *
   * - **`standard`**   –   ( *the default* ) Configures cost-effective database storage for applications with moderate to small I/O usage.
   * - **`iopt1`**   –   Enables [I/O-Optimized storage](https://docs.aws.amazon.com/neptune/latest/userguide/storage-types.html#provisioned-iops-storage) that's designed to meet the needs of I/O-intensive graph workloads that require predictable pricing with low I/O latency and consistent I/O throughput.
   *
   *   Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The network type of the DB cluster.
   *
   * Valid Values:
   *
   * - **`IPV4`**   –   The DB cluster uses only IPv4 addresses for communication.
   * - **`DUAL`**   –   The DB cluster uses both IPv4 and IPv6 addresses for communication. The DB subnet group associated with the cluster must support IPv6.
   *
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterResult {
  /**
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterEndpointMessage {
  /**
   * The identifier of the endpoint to modify. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * The type of the endpoint. One of: `READER`, `WRITER`, `ANY`.
   *
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * List of DB instance identifiers that are part of the custom endpoint group.
   *
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
   *
   * @public
   */
  ExcludedMembers?: string[] | undefined;
}

/**
 * This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:
 *
 * - `CreateDBClusterEndpoint`
 * - `DescribeDBClusterEndpoints`
 * - `ModifyDBClusterEndpoint`
 * - `DeleteDBClusterEndpoint`
 *
 * For the data structure that represents Amazon RDS DB instance endpoints, see `Endpoint`.
 *
 * @public
 */
export interface ModifyDBClusterEndpointOutput {
  /**
   * The identifier associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.
   *
   * @public
   */
  DBClusterEndpointResourceIdentifier?: string | undefined;

  /**
   * The DNS address of the endpoint.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The current status of the endpoint. One of: `creating`, `available`, `deleting`, `inactive`, `modifying`. The `inactive` state applies to an endpoint that cannot be used for a certain kind of cluster, such as a `writer` endpoint for a read-only secondary cluster in a global database.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The type of the endpoint. One of: `READER`, `WRITER`, `CUSTOM`.
   *
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * The type associated with a custom endpoint. One of: `READER`, `WRITER`, `ANY`.
   *
   * @public
   */
  CustomEndpointType?: string | undefined;

  /**
   * List of DB instance identifiers that are part of the custom endpoint group.
   *
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
   *
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the endpoint.
   *
   * @public
   */
  DBClusterEndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * The name of the DB cluster parameter group.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters or numbers.
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * > **Note:** This value is stored as a lowercase string.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * The name of the DB cluster parameter group to modify.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * A list of parameters in the DB cluster parameter group to modify.
   *
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * The identifier for the DB cluster snapshot to modify the attributes for.
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * The name of the DB cluster snapshot attribute to modify.
   *
   * To manage authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this value to `restore`.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * A list of DB cluster snapshot attributes to add to the attribute specified by `AttributeName`.
   *
   * To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account IDs, or `all` to make the manual DB cluster snapshot restorable by any Amazon account. Do not add the `all` value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon accounts.
   *
   * @public
   */
  ValuesToAdd?: string[] | undefined;

  /**
   * A list of DB cluster snapshot attributes to remove from the attribute specified by `AttributeName`.
   *
   * To remove authorization for other Amazon accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon account identifiers, or `all` to remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you specify `all`, an Amazon account whose account ID is explicitly added to the `restore` attribute can still copy or restore a manual DB cluster snapshot.
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
   * Contains the results of a successful call to the DescribeDBClusterSnapshotAttributes API action.
   *
   * Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or restore a manual DB cluster snapshot. For more information, see the ModifyDBClusterSnapshotAttribute API action.
   *
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * @public
 */
export interface ModifyDBInstanceMessage {
  /**
   * The DB instance identifier. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBInstance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The new compute and memory capacity of the DB instance, for example, `db.m4.large`. Not all DB instance classes are available in all Amazon Regions.
   *
   * If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless `ApplyImmediately` is specified as `true` for this request.
   *
   * Default: Uses existing setting
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC.
   *
   * Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify `true` for the `ApplyImmediately` parameter.
   *
   * Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *
   * Example: `mySubnetGroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *
   * Constraints:
   *
   * - If supplied, must match existing DBSecurityGroups.
   *
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.
   *
   * Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see ModifyDBCluster.
   *
   * Constraints:
   *
   * - If supplied, must match existing VpcSecurityGroupIds.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the `PreferredMaintenanceWindow` setting for the DB instance.
   *
   * If this parameter is set to `false`, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot.
   *
   * Default: `false`
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window.
   *
   * Default: Uses existing setting
   *
   * Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see ModifyDBCluster.
   *
   * Default: Uses existing setting
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled.
   *
   * Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see ModifyDBCluster.
   *
   * Constraints:
   *
   * - Must be in the format hh24:mi-hh24:mi
   * - Must be in Universal Time Coordinated (UTC)
   * - Must not conflict with the preferred maintenance window
   * - Must be at least 30 minutes
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.
   *
   * Default: Uses existing setting
   *
   * Format: ddd:hh24:mi-ddd:hh24:mi
   *
   * Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun
   *
   * Constraints: Must be at least 30 minutes
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the `ApplyImmediately` parameter is set to `true` for this request.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The version number of the database engine to upgrade to. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the ApplyPendingMaintenanceAction API.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to `true` during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Not supported by Neptune.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The new Provisioned IOPS (I/O operations per second) value for the instance.
   *
   * Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the `ApplyImmediately` parameter is set to `true` for this request.
   *
   * Default: Uses existing setting
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set `Apply Immediately` to true, or will occur during the next maintenance window if `Apply Immediately` to false. This value is stored as a lowercase string.
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
   * Not applicable. In Neptune the storage type is managed at the DB Cluster level.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The ARN from the key store with which to associate the instance for TDE encryption.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * The password for the given ARN from the key store in order to access the device.
   *
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * Indicates the certificate that needs to be associated with the instance.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * Not supported.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.
   *
   * If `MonitoringRoleArn` is specified, then you must also set `MonitoringInterval` to a value other than 0.
   *
   * Valid Values: `0, 1, 5, 10, 15, 30, 60`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The port number on which the database accepts connections.
   *
   * The value of the `DBPortNumber` parameter must not match any of the port values specified for options in the option group for the DB instance.
   *
   * Your database will restart when you change the `DBPortNumber` value regardless of the value of the `ApplyImmediately` parameter.
   *
   * Default: `8182`
   *
   * @public
   */
  DBPortNumber?: number | undefined;

  /**
   * Indicates whether the DB instance is publicly accessible.
   *
   * When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, `arn:aws:iam:123456789012:role/emaccess`.
   *
   * If `MonitoringInterval` is set to a value other than 0, then you must supply a `MonitoringRoleArn` value.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * Not supported
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.
   *
   * Default: 1
   *
   * Valid Values: 0 - 15
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.
   *
   * You can enable IAM database authentication for the following database engines
   *
   * Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB cluster. For more information, see ModifyDBCluster.
   *
   * Default: `false`
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.
   *
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See [Deleting a DB Instance](https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html).
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDBInstanceResult {
  /**
   * Contains the details of an Amazon Neptune DB instance.
   *
   * This data type is used as a response element in the DescribeDBInstances action.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface DBParameterGroupNameMessage {
  /**
   * Provides the name of the DB parameter group.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBParameterGroupMessage {
  /**
   * The name of the DB parameter group.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBParameterGroup.
   *
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request.
   *
   * Valid Values (for the application method): `immediate | pending-reboot`
   *
   * > **Note:** You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.
   *
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.
   *
   * Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * The description for the DB subnet group.
   *
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * The EC2 subnet IDs for the DB subnet group.
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
   * Contains the details of an Amazon Neptune DB subnet group.
   *
   * This data type is used as a response element in the DescribeDBSubnetGroups action.
   *
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * The name of the event notification subscription.
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
   * The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.
   *
   * Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the **DescribeEventCategories** action.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * A Boolean value; set to **true** to activate the subscription.
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
   * Contains the results of a successful invocation of the DescribeEventSubscriptions action.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterMessage {
  /**
   * The DB cluster identifier for the global cluster being modified. This parameter is not case-sensitive.
   *
   * Constraints: Must match the identifier of an existing global database cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * A new cluster identifier to assign to the global database. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-cluster2`
   *
   * @public
   */
  NewGlobalClusterIdentifier?: string | undefined;

  /**
   * Indicates whether the global database has deletion protection enabled. The global database cannot be deleted when deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The version number of the database engine to which you want to upgrade. Changing this parameter will result in an outage. The change is applied during the next maintenance window unless `ApplyImmediately` is enabled.
   *
   * To list all of the available Neptune engine versions, use the following command:
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * A value that indicates whether major version upgrades are allowed.
   *
   * Constraints: You must allow major version upgrades if you specify a value for the `EngineVersion` parameter that is a different major version than the DB cluster's current version.
   *
   * If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version, so you will need to apply any custom parameter groups after completing the upgrade.
   *
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterResult {
  /**
   * Contains the details of an Amazon Neptune global database.
   *
   * This data type is used as a response element for the CreateGlobalCluster, DescribeGlobalClusters, ModifyGlobalCluster, DeleteGlobalCluster, FailoverGlobalCluster, and RemoveFromGlobalCluster actions.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterMessage {
  /**
   * Not supported.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterResult {
  /**
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface RebootDBInstanceMessage {
  /**
   * The DB instance identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBInstance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * When `true`, the reboot is conducted through a MultiAZ failover.
   *
   * Constraint: You can't specify `true` if the instance is not configured for MultiAZ.
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
   * Contains the details of an Amazon Neptune DB instance.
   *
   * This data type is used as a response element in the DescribeDBInstances action.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * The identifier of the Neptune global database from which to detach the specified Neptune DB cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) identifying the cluster to be detached from the Neptune global database cluster.
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
   * Contains the details of an Amazon Neptune global database.
   *
   * This data type is used as a response element for the CreateGlobalCluster, DescribeGlobalClusters, ModifyGlobalCluster, DeleteGlobalCluster, FailoverGlobalCluster, and RemoveFromGlobalCluster actions.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface RemoveRoleFromDBClusterMessage {
  /**
   * The name of the DB cluster to disassociate the IAM role from.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example `arn:aws:iam::123456789012:role/NeptuneAccessRole`.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the feature for the DB cluster that the IAM role is to be disassociated from. For the list of supported feature names, see DescribeDBEngineVersions.
   *
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * The name of the event notification subscription you want to remove a source identifier from.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The source identifier to be removed from the subscription, such as the **DB instance identifier** for a DB instance or the name of a security group.
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
   * Contains the results of a successful invocation of the DescribeEventSubscriptions action.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * The Amazon Neptune resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an Amazon Resource Name (ARN)](https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing).
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
 * @public
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * The name of the DB cluster parameter group to reset.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * A value that is set to `true` to reset all parameters in the DB cluster parameter group to their default values, and `false` otherwise. You can't use this parameter if there is a list of parameter names specified for the `Parameters` parameter.
   *
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the `ResetAllParameters` parameter is set to `true`.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ResetDBParameterGroupMessage {
  /**
   * The name of the DB parameter group.
   *
   * Constraints:
   *
   * - Must match the name of an existing DBParameterGroup.
   *
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * Specifies whether (`true`) or not (`false`) to reset all parameters in the DB parameter group to default values.
   *
   * Default: `true`
   *
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * To reset the entire DB parameter group, specify the `DBParameterGroup` name and `ResetAllParameters` parameters. To reset specific parameters, provide a list of the following: `ParameterName` and `ApplyMethod`. A maximum of 20 parameters can be modified in a single request.
   *
   * Valid Values (for Apply method): `pending-reboot`
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-snapshot-id`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The identifier for the DB snapshot or DB cluster snapshot to restore from.
   *
   * You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing Snapshot.
   *
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * The database engine to use for the new DB cluster.
   *
   * Default: The same as source
   *
   * Constraint: Must be compatible with the engine of the source
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The version of the database engine to use for the new DB cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The port number on which the new DB cluster accepts connections.
   *
   * Constraints: Value must be `1150-65535`
   *
   * Default: The same port as the original DB cluster.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the DB subnet group to use for the new DB cluster.
   *
   * Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * Not supported.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * A list of VPC security groups that the new DB cluster will belong to.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The tags to be assigned to the restored DB cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.
   *
   * If you do not specify a value for the `KmsKeyId` parameter, then the following will occur:
   *
   * - If the DB snapshot or DB cluster snapshot in `SnapshotIdentifier` is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.
   * - If the DB snapshot or DB cluster snapshot in `SnapshotIdentifier` is not encrypted, then the restored DB cluster is not encrypted.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.
   *
   * Default: `false`
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The name of the DB cluster parameter group to associate with the new DB cluster.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBClusterParameterGroup.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * *If set to `true`, tags are copied to any snapshot of the restored DB cluster that is created.*
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * Contains the scaling configuration of a Neptune Serverless DB cluster.
   *
   * For more information, see [Using Amazon Neptune Serverless](https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html) in the *Amazon Neptune User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * Specifies the storage type to be associated with the DB cluster.
   *
   * Valid values: `standard`, `iopt1`
   *
   * Default: `standard`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The network type of the DB cluster.
   *
   * Valid Values:
   *
   * - **`IPV4`**   –   ( *the default* ) The DB cluster uses only IPv4 addresses for communication.
   * - **`DUAL`**   –   The DB cluster uses both IPv4 and IPv6 addresses for communication. The DB subnet group associated with the cluster must support IPv6.
   *
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotResult {
  /**
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * The name of the new DB cluster to be created.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
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
   * If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
   *
   * @public
   */
  RestoreType?: string | undefined;

  /**
   * The identifier of the source DB cluster from which to restore.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBCluster.
   *
   * @public
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * The date and time to restore the DB cluster to.
   *
   * Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
   *
   * Constraints:
   *
   * - Must be before the latest restorable time for the DB instance
   * - Must be specified if `UseLatestRestorableTime` parameter is not provided
   * - Cannot be specified if `UseLatestRestorableTime` parameter is true
   * - Cannot be specified if `RestoreType` parameter is `copy-on-write`
   *
   * Example: `2015-03-07T23:45:00Z`
   *
   * @public
   */
  RestoreToTime?: Date | undefined;

  /**
   * A value that is set to `true` to restore the DB cluster to the latest restorable backup time, and `false` otherwise.
   *
   * Default: `false`
   *
   * Constraints: Cannot be specified if `RestoreToTime` parameter is provided.
   *
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * The port number on which the new DB cluster accepts connections.
   *
   * Constraints: Value must be `1150-65535`
   *
   * Default: The same port as the original DB cluster.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The DB subnet group name to use for the new DB cluster.
   *
   * Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *
   * Example: `mySubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * *(Not supported by Neptune)*
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * A list of VPC security groups that the new DB cluster belongs to.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The tags to be applied to the restored DB cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.
   *
   * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.
   *
   * You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the `KmsKeyId` parameter.
   *
   * If you do not specify a value for the `KmsKeyId` parameter, then the following will occur:
   *
   * - If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.
   * - If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.
   *
   * If `DBClusterIdentifier` refers to a DB cluster that is not encrypted, then the restore request is rejected.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database accounts, and otherwise false.
   *
   * Default: `false`
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The list of logs that the restored DB cluster is to export to CloudWatch Logs.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The name of the DB cluster parameter group to associate with the new DB cluster.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBClusterParameterGroup.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Contains the scaling configuration of a Neptune Serverless DB cluster.
   *
   * For more information, see [Using Amazon Neptune Serverless](https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html) in the *Amazon Neptune User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * Specifies the storage type to be associated with the DB cluster.
   *
   * Valid values: `standard`, `iopt1`
   *
   * Default: `standard`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The network type of the DB cluster.
   *
   * Valid Values:
   *
   * - **`IPV4`**   –   ( *the default* ) The DB cluster uses only IPv4 addresses for communication.
   * - **`DUAL`**   –   The DB cluster uses both IPv4 and IPv6 addresses for communication. The DB subnet group associated with the cluster must support IPv6.
   *
   * @public
   */
  NetworkType?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeResult {
  /**
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
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
   * The DB cluster identifier of the Neptune DB cluster to be started. This parameter is stored as a lowercase string.
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
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
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
   * The DB cluster identifier of the Neptune DB cluster to be stopped. This parameter is stored as a lowercase string.
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
   * Contains the details of an Amazon Neptune DB cluster.
   *
   * This data type is used as a response element in the DescribeDBClusters.
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
   * The identifier of the global database cluster to switch over. This parameter isn't case-sensitive.
   *
   * Constraints: Must match the identifier of an existing global database cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for the global database.
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
   * Contains the details of an Amazon Neptune global database.
   *
   * This data type is used as a response element for the CreateGlobalCluster, DescribeGlobalClusters, ModifyGlobalCluster, DeleteGlobalCluster, FailoverGlobalCluster, and RemoveFromGlobalCluster actions.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}
