// smithy-typescript generated code
import type {
  ActivityStreamMode,
  ActivityStreamPolicyStatus,
  ActivityStreamStatus,
  ApplyMethod,
  AuthScheme,
  AutomationMode,
  ClientPasswordAuthType,
  ClusterScalabilityType,
  DatabaseInsightsMode,
  DBCapacityReservationState,
  DBProxyEndpointStatus,
  DBProxyEndpointTargetRole,
  DBProxyStatus,
  DefaultAuthScheme,
  EndpointNetworkType,
  EngineFamily,
  ExportSourceType,
  FailoverStatus,
  GlobalClusterMemberSynchronizationStatus,
  IAMAuthMode,
  IntegrationStatus,
  LifecycleSupportName,
  LimitlessDatabaseStatus,
  LocalWriteForwardingStatus,
  MasterUserAuthenticationType,
  ReplicaMode,
  SourceType,
  StorageEncryptionType,
  TargetConnectionNetworkType,
  TargetHealthReason,
  TargetRole,
  TargetState,
  TargetType,
  UpgradeRolloutOrder,
  WriteForwardingStatus,
} from "./enums";

/**
 * Describes a quota for an Amazon Web Services account.
 *
 * The following are account quotas:
 *
 * - `AllocatedStorage` - The total allocated storage per account, in GiB. The used value is the total allocated storage in the account, in GiB.
 * - `AuthorizationsPerDBSecurityGroup` - The number of ingress rules per DB security group. The used value is the highest number of ingress rules in a DB security group in the account. Other DB security groups in the account might have a lower number of ingress rules.
 * - `CustomEndpointsPerDBCluster` - The number of custom endpoints per DB cluster. The used value is the highest number of custom endpoints in a DB clusters in the account. Other DB clusters in the account might have a lower number of custom endpoints.
 * - `DBClusterParameterGroups` - The number of DB cluster parameter groups per account, excluding default parameter groups. The used value is the count of nondefault DB cluster parameter groups in the account.
 * - `DBClusterRoles` - The number of associated Amazon Web Services Identity and Access Management (IAM) roles per DB cluster. The used value is the highest number of associated IAM roles for a DB cluster in the account. Other DB clusters in the account might have a lower number of associated IAM roles.
 * - `DBClusters` - The number of DB clusters per account. The used value is the count of DB clusters in the account.
 * - `DBInstanceRoles` - The number of associated IAM roles per DB instance. The used value is the highest number of associated IAM roles for a DB instance in the account. Other DB instances in the account might have a lower number of associated IAM roles.
 * - `DBInstances` - The number of DB instances per account. The used value is the count of the DB instances in the account.
 *
 *   Amazon RDS DB instances, Amazon Aurora DB instances, Amazon Neptune instances, and Amazon DocumentDB instances apply to this quota.
 * - `DBParameterGroups` - The number of DB parameter groups per account, excluding default parameter groups. The used value is the count of nondefault DB parameter groups in the account.
 * - `DBSecurityGroups` - The number of DB security groups (not VPC security groups) per account, excluding the default security group. The used value is the count of nondefault DB security groups in the account.
 * - `DBSubnetGroups` - The number of DB subnet groups per account. The used value is the count of the DB subnet groups in the account.
 * - `EventSubscriptions` - The number of event subscriptions per account. The used value is the count of the event subscriptions in the account.
 * - `ManualClusterSnapshots` - The number of manual DB cluster snapshots per account. The used value is the count of the manual DB cluster snapshots in the account.
 * - `ManualSnapshots` - The number of manual DB instance snapshots per account. The used value is the count of the manual DB instance snapshots in the account.
 * - `OptionGroups` - The number of DB option groups per account, excluding default option groups. The used value is the count of nondefault DB option groups in the account.
 * - `ReadReplicasPerMaster` - The number of read replicas per DB instance. The used value is the highest number of read replicas for a DB instance in the account. Other DB instances in the account might have a lower number of read replicas.
 * - `ReservedDBInstances` - The number of reserved DB instances per account. The used value is the count of the active reserved DB instances in the account.
 * - `SubnetsPerDBSubnetGroup` - The number of subnets per DB subnet group. The used value is highest number of subnets for a DB subnet group in the account. Other DB subnet groups in the account might have a lower number of subnets.
 *
 * For more information, see [Quotas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html) in the *Amazon RDS User Guide* and [Quotas for Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface AccountQuota {
  /**
   * The name of the Amazon RDS quota for this Amazon Web Services account.
   *
   * @public
   */
  AccountQuotaName?: string | undefined;

  /**
   * The amount currently used toward the quota maximum.
   *
   * @public
   */
  Used?: number | undefined;

  /**
   * The maximum allowed value for the quota.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Data returned by the **DescribeAccountAttributes** action.
 *
 * @public
 */
export interface AccountAttributesMessage {
  /**
   * A list of `AccountQuota` objects. Within this list, each quota has a name, a count of usage toward the quota maximum, and a maximum value for the quota.
   *
   * @public
   */
  AccountQuotas?: AccountQuota[] | undefined;
}

/**
 * Contains details about an additional storage volume for a DB instance. RDS support additional storage volumes for RDS for Oracle and RDS for SQL Server.
 *
 * @public
 */
export interface AdditionalStorageVolume {
  /**
   * The name of the additional storage volume.
   *
   * Valid Values: `RDSDBDATA2 | RDSDBDATA3 | RDSDBDATA4`
   *
   * @public
   */
  VolumeName: string | undefined;

  /**
   * The amount of storage allocated for the additional storage volume, in gibibytes (GiB). The minimum is 20 GiB. The maximum is 65,536 GiB (64 TiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The number of I/O operations per second (IOPS) provisioned for the additional storage volume.
   *
   * @public
   */
  IOPS?: number | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * The storage throughput value for the additional storage volume, in mebibytes per second (MiBps). This setting applies only to the General Purpose SSD (`gp3`) storage type.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The storage type for the additional storage volume.
   *
   * Valid Values: `GP3 | IO2`
   *
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * Contains information about an additional storage volume for a DB instance.
 *
 * @public
 */
export interface AdditionalStorageVolumeOutput {
  /**
   * The name of the additional storage volume.
   *
   * @public
   */
  VolumeName?: string | undefined;

  /**
   * The status of the additional storage volume.
   *
   * Valid Values: `ACTIVE | CREATING | DELETING | MODIFYING | NOT-IN-USE | STORAGE-OPTIMIZATION | VOLUME-FULL`
   *
   * @public
   */
  StorageVolumeStatus?: string | undefined;

  /**
   * The status of an in-progress storage operation on the additional storage volume. This field appears only while a storage operation is in progress. It isn't present when no storage operation is active. Possible values:
   *
   * - `Initializing` - The volume is initializing from a snapshot, such as during a snapshot restore, point-in-time restore, read replica creation, or blue/green deployment. Performance can be lower than provisioned until initialization completes.
   * - `Optimizing` - The volume is optimizing following a storage scaling or modification operation.
   *
   * @public
   */
  StorageOperationStatus?: string | undefined;

  /**
   * The percentage of the in-progress storage operation on the additional storage volume that has completed, from `0` to `100`. This field appears only while a storage operation is in progress. It isn't present when no storage operation is active.
   *
   * @public
   */
  StorageOperationPercentProgress?: number | undefined;

  /**
   * The amount of storage allocated for the additional storage volume, in gibibytes (GiB). The minimum is 20 GiB. The maximum is 65,536 GiB (64 TiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The number of I/O operations per second (IOPS) provisioned for the additional storage volume.
   *
   * @public
   */
  IOPS?: number | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * The storage throughput value for the additional storage volume, in mebibytes per second (MiBps).
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The storage type for the additional storage volume.
   *
   * Valid Values: `GP3 | IO2`
   *
   * @public
   */
  StorageType?: string | undefined;
}

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
   * The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB cluster, for example `arn:aws:iam::123456789012:role/AuroraAccessRole`.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the feature for the DB cluster that the IAM role is to be associated with. For information about supported feature names, see DBEngineVersion.
   *
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * @public
 */
export interface AddRoleToDBInstanceMessage {
  /**
   * The name of the DB instance to associate the IAM role with.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the DB instance, for example `arn:aws:iam::123456789012:role/AccessRole`.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the feature for the DB instance that the IAM role is to be associated with. For information about supported feature names, see DBEngineVersion.
   *
   * @public
   */
  FeatureName: string | undefined;
}

/**
 * @public
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * The name of the RDS event notification subscription you want to add a source identifier to.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The identifier of the event source to be added.
   *
   * Constraints:
   *
   * - If the source type is a DB instance, a `DBInstanceIdentifier` value must be supplied.
   * - If the source type is a DB cluster, a `DBClusterIdentifier` value must be supplied.
   * - If the source type is a DB parameter group, a `DBParameterGroupName` value must be supplied.
   * - If the source type is a DB security group, a `DBSecurityGroupName` value must be supplied.
   * - If the source type is a DB snapshot, a `DBSnapshotIdentifier` value must be supplied.
   * - If the source type is a DB cluster snapshot, a `DBClusterSnapshotIdentifier` value must be supplied.
   * - If the source type is an RDS Proxy, a `DBProxyName` value must be supplied.
   *
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * Contains the results of a successful invocation of the `DescribeEventSubscriptions` action.
 *
 * @public
 */
export interface EventSubscription {
  /**
   * The Amazon Web Services customer account associated with the RDS event notification subscription.
   *
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * The RDS event notification subscription Id.
   *
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * The topic ARN of the RDS event notification subscription.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The status of the RDS event notification subscription.
   *
   * Constraints:
   *
   * Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist
   *
   * The status "no-permission" indicates that RDS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The time the RDS event notification subscription was created.
   *
   * @public
   */
  SubscriptionCreationTime?: string | undefined;

  /**
   * The source type for the RDS event notification subscription.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of source IDs for the RDS event notification subscription.
   *
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * A list of event categories for the RDS event notification subscription.
   *
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * Specifies whether the subscription is enabled. True indicates the subscription is enabled.
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
   * Contains the results of a successful invocation of the `DescribeEventSubscriptions` action.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 *
 * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-@]*)$").
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-@]*)$").
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
   * The Amazon RDS resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing).
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The tags to be assigned to the Amazon RDS resource.
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
   * The RDS Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see [Constructing an RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing).
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The pending maintenance action to apply to this resource.
   *
   * Valid Values:
   *
   * - `ca-certificate-rotation`
   * - `db-upgrade`
   * - `hardware-maintenance`
   * - `os-upgrade`
   * - `system-update`
   *
   * For more information about these actions, see [Maintenance actions for Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#maintenance-actions-aurora) or [Maintenance actions for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#maintenance-actions-rds).
   *
   * @public
   */
  ApplyAction: string | undefined;

  /**
   * A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type `immediate` can't be undone.
   *
   * Valid Values:
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
   * For more information about maintenance actions, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html).
   *
   * Valid Values:
   *
   * - `ca-certificate-rotation`
   * - `db-upgrade`
   * - `hardware-maintenance`
   * - `os-upgrade`
   * - `serverless-platform-version-update`
   * - `system-update`
   *
   * For more information about these actions, see [Maintenance actions for Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#maintenance-actions-aurora) or [Maintenance actions for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#maintenance-actions-rds).
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The date of the maintenance window when the action is applied. The maintenance action is applied to the resource during its first maintenance window after this date.
   *
   * @public
   */
  AutoAppliedAfterDate?: Date | undefined;

  /**
   * The date when the maintenance action is automatically applied.
   *
   * On this date, the maintenance action is applied to the resource as soon as possible, regardless of the maintenance window for the resource. There might be a delay of one or more days from this date before the maintenance action is applied.
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
   * The effective date when the pending maintenance action is applied to the resource. This date takes into account opt-in requests received from the `ApplyPendingMaintenanceAction` API, the `AutoAppliedAfterDate`, and the `ForcedApplyDate`. This value is blank if an opt-in request has not been received and nothing has been specified as `AutoAppliedAfterDate` or `ForcedApplyDate`.
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
export interface AuthorizeDBSecurityGroupIngressMessage {
  /**
   * The name of the DB security group to add authorization to.
   *
   * @public
   */
  DBSecurityGroupName: string | undefined;

  /**
   * The IP range to authorize.
   *
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * Name of the EC2 security group to authorize. For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
   *
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * Id of the EC2 security group to authorize. For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
   *
   * @public
   */
  EC2SecurityGroupId?: string | undefined;

  /**
   * Amazon Web Services account number of the owner of the EC2 security group specified in the `EC2SecurityGroupName` parameter. The Amazon Web Services access key ID isn't an acceptable value. For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
   *
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * This data type is used as a response element in the following actions:
 *
 * - `AuthorizeDBSecurityGroupIngress`
 * - `DescribeDBSecurityGroups`
 * - `RevokeDBSecurityGroupIngress`
 *
 * @public
 */
export interface EC2SecurityGroup {
  /**
   * Provides the status of the EC2 security group. Status can be "authorizing", "authorized", "revoking", and "revoked".
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Specifies the name of the EC2 security group.
   *
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * Specifies the id of the EC2 security group.
   *
   * @public
   */
  EC2SecurityGroupId?: string | undefined;

  /**
   * Specifies the Amazon Web Services ID of the owner of the EC2 security group specified in the `EC2SecurityGroupName` field.
   *
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * This data type is used as a response element in the `DescribeDBSecurityGroups` action.
 *
 * @public
 */
export interface IPRange {
  /**
   * The status of the IP range. Status can be "authorizing", "authorized", "revoking", and "revoked".
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The IP range.
   *
   * @public
   */
  CIDRIP?: string | undefined;
}

/**
 * Contains the details for an Amazon RDS DB security group.
 *
 * This data type is used as a response element in the `DescribeDBSecurityGroups` action.
 *
 * @public
 */
export interface DBSecurityGroup {
  /**
   * Provides the Amazon Web Services ID of the owner of a specific DB security group.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Specifies the name of the DB security group.
   *
   * @public
   */
  DBSecurityGroupName?: string | undefined;

  /**
   * Provides the description of the DB security group.
   *
   * @public
   */
  DBSecurityGroupDescription?: string | undefined;

  /**
   * Provides the VpcId of the DB security group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Contains a list of `EC2SecurityGroup` elements.
   *
   * @public
   */
  EC2SecurityGroups?: EC2SecurityGroup[] | undefined;

  /**
   * Contains a list of `IPRange` elements.
   *
   * @public
   */
  IPRanges?: IPRange[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB security group.
   *
   * @public
   */
  DBSecurityGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeDBSecurityGroupIngressResult {
  /**
   * Contains the details for an Amazon RDS DB security group.
   *
   * This data type is used as a response element in the `DescribeDBSecurityGroups` action.
   *
   * @public
   */
  DBSecurityGroup?: DBSecurityGroup | undefined;
}

/**
 * @public
 */
export interface BacktrackDBClusterMessage {
  /**
   * The DB cluster identifier of the DB cluster to be backtracked. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster1`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The timestamp of the time to backtrack the DB cluster to, specified in ISO 8601 format. For more information about ISO 8601, see the [ISO8601 Wikipedia page.](http://en.wikipedia.org/wiki/ISO_8601)
   *
   * > **Note:** If the specified time isn't a consistent time for the DB cluster, Aurora automatically chooses the nearest possible consistent time for the DB cluster.
   *
   * Constraints:
   *
   * - Must contain a valid ISO 8601 timestamp.
   * - Can't contain a timestamp set in the future.
   *
   * Example: `2017-07-08T18:00Z`
   *
   * @public
   */
  BacktrackTo: Date | undefined;

  /**
   * Specifies whether to force the DB cluster to backtrack when binary logging is enabled. Otherwise, an error occurs when binary logging is enabled.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * Specifies whether to backtrack the DB cluster to the earliest possible backtrack time when *BacktrackTo* is set to a timestamp earlier than the earliest backtrack time. When this parameter is disabled and *BacktrackTo* is set to a timestamp earlier than the earliest backtrack time, an error occurs.
   *
   * @public
   */
  UseEarliestTimeOnPointInTimeUnavailable?: boolean | undefined;
}

/**
 * This data type is used as a response element in the `DescribeDBClusterBacktracks` action.
 *
 * @public
 */
export interface DBClusterBacktrack {
  /**
   * Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Contains the backtrack identifier.
   *
   * @public
   */
  BacktrackIdentifier?: string | undefined;

  /**
   * The timestamp of the time to which the DB cluster was backtracked.
   *
   * @public
   */
  BacktrackTo?: Date | undefined;

  /**
   * The timestamp of the time from which the DB cluster was backtracked.
   *
   * @public
   */
  BacktrackedFrom?: Date | undefined;

  /**
   * The timestamp of the time at which the backtrack was requested.
   *
   * @public
   */
  BacktrackRequestCreationTime?: Date | undefined;

  /**
   * The status of the backtrack. This property returns one of the following values:
   *
   * - `applying` - The backtrack is currently being applied to or rolled back from the DB cluster.
   * - `completed` - The backtrack has successfully been applied to or rolled back from the DB cluster.
   * - `failed` - An error occurred while the backtrack was applied to or rolled back from the DB cluster.
   * - `pending` - The backtrack is currently pending application to or rollback from the DB cluster.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface CancelDBCapacityReservationRequest {
  /**
   * The identifier or the name of the DB capacity reservation to cancel. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name.
   *
   * @public
   */
  DBCapacityReservationIdentifier: string | undefined;
}

/**
 * Contains the unused capacity of a DB capacity reservation in one Availability Zone.
 *
 * This data type is used as a response element in the following operations:
 *
 * - `CancelDBCapacityReservation`
 * - `CreateDBCapacityReservation`
 * - `DescribeDBCapacityReservations`
 * - `ModifyDBCapacityReservation`
 *
 * @public
 */
export interface AvailableCapacityPerAvailabilityZone {
  /**
   * The name of the Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of DB instances that remain available in this Availability Zone. Amazon RDS decreases this value when a DB instance takes a unit of reserved capacity in this Availability Zone, and it increases this value when a DB instance releases that unit.
   *
   * A DB instance with a pending modification also holds a unit of reserved capacity. A DB instance has a pending modification when Amazon RDS accepts a change to the DB instance and applies that change later, during the maintenance window. Amazon RDS holds the unit from the time that it accepts the request. To find a DB instance with a pending modification, check `PendingModifiedValues` in the response of `DescribeDBInstances`.
   *
   * Amazon RDS reports available capacity only for a reservation that is in the `active` state and not past its end date. Otherwise, this value is `0`.
   *
   * @public
   */
  AvailableCapacity?: number | undefined;
}

/**
 * Contains the capacity commitment details of a DB capacity reservation, including the number of committed DB instances in each Availability Zone and the end date of the commitment period. Amazon RDS holds the committed capacity until the commitment ends. Amazon RDS rejects a request to cancel a reservation in the `active` state, and a request to reduce the reserved capacity below the commitment.
 *
 * This data type is used as a response element in the following operations:
 *
 * - `CancelDBCapacityReservation`
 * - `CreateDBCapacityReservation`
 * - `DescribeDBCapacityReservations`
 * - `ModifyDBCapacityReservation`
 *
 * @public
 */
export interface DBCapacityReservationCommitmentInfo {
  /**
   * The number of DB instances that Amazon RDS holds in each Availability Zone of the reservation for the length of the commitment.
   *
   * @public
   */
  CommittedCapacityPerAvailabilityZone?: number | undefined;

  /**
   * The date and time when the commitment ends, in Universal Coordinated Time (UTC). This date reports the capacity commitment that Amazon RDS granted.
   *
   * Amazon RDS can grant a shorter capacity commitment than you request in `CommitmentDuration`. Therefore, this date can fall earlier than `StartDate` plus `CommitmentDuration`.
   *
   * @public
   */
  CommitmentEndDate?: Date | undefined;
}

/**
 * Contains the details of a DB capacity reservation.
 *
 * This data type is used as a response element in the following operations:
 *
 * - `CancelDBCapacityReservation`
 * - `CreateDBCapacityReservation`
 * - `DescribeDBCapacityReservations`
 * - `ModifyDBCapacityReservation`
 *
 * @public
 */
export interface DBCapacityReservation {
  /**
   * The name that you specified for the DB capacity reservation.
   *
   * @public
   */
  DBCapacityReservationName?: string | undefined;

  /**
   * The DB instance class for the reserved capacity. You specify this value when you create the reservation, and you can't change it afterward.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The database engine for the reserved capacity. You specify this value when you create the reservation, and you can't change it afterward.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The license model for the reserved capacity. Amazon RDS returns this value only for a reservation that reserves capacity for a specific license model. Amazon RDS doesn't return this value for a reservation whose database engine doesn't support a license model.
   *
   * A DB instance launches into the reservation only when the license model of the DB instance matches this value. For a reservation that holds no license model, Amazon RDS applies no license model check at launch.
   *
   * Valid Values:
   *
   * - RDS for Microsoft SQL Server Enterprise Edition and Standard Edition - `license-included | bring-your-own-media`
   * - RDS for Microsoft SQL Server Developer Edition - `bring-your-own-license`
   * - RDS for Oracle - `bring-your-own-license | license-included`
   * - RDS for Db2 Standard Edition and Advanced Edition - `bring-your-own-license | marketplace-license`
   *
   * For RDS for Db2 Standard Edition and Advanced Edition, a reservation created without a license model holds `bring-your-own-license`.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The number of DB instances that Amazon RDS reserves in each Availability Zone of the reservation. This value matches the `CapacityPerAvailabilityZone` parameter of the request. The total reserved capacity is this value multiplied by the number of Availability Zones of the reservation.
   *
   * @public
   */
  ReservedCapacityPerAvailabilityZone?: number | undefined;

  /**
   * The unused capacity of the reservation, reported for each Availability Zone of the reservation. Each entry names one Availability Zone, and it reports the number of DB instances that remain available in that Availability Zone.
   *
   * Amazon RDS reports available capacity only for a reservation that is in the `active` state and not past its end date. Otherwise, each entry reports an available capacity of `0`. A future-dated reservation that hasn't started reports `0`, and a reservation that Amazon RDS is modifying reports `0`.
   *
   * A reservation reports the `pending` state while Amazon RDS modifies it. Therefore, a reservation in the `active` state that reports no available capacity has no unused capacity.
   *
   * @public
   */
  AvailableCapacityPerAvailabilityZoneList?: AvailableCapacityPerAvailabilityZone[] | undefined;

  /**
   * The date and time when the reservation expires, in Universal Coordinated Time (UTC). Amazon RDS doesn't return this value if the reservation doesn't expire.
   *
   * > **Important:** A DB instance that uses the reservation keeps running after the reservation expires. It continues on unreserved capacity, and Amazon RDS doesn't stop it or modify it. However, Amazon RDS no longer reserves capacity for the DB instance. Amazon RDS might later move the DB instance to different hardware, for example during hardware maintenance. That move can fail when the Amazon Web Services Region has insufficient capacity for the DB instance class.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The date and time when the reservation was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The date and time when a future-dated reservation starts, in Universal Coordinated Time (UTC). Amazon RDS doesn't return this value for a reservation that started immediately.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The capacity commitment of the reservation. Amazon RDS returns this object only for a future-dated reservation.
   *
   * @public
   */
  CommitmentInfo?: DBCapacityReservationCommitmentInfo | undefined;

  /**
   * The current state of the DB capacity reservation. A DB instance can use the reservation in the `active` state only.
   *
   * Valid Values:
   *
   * - `active` - Amazon RDS holds the reserved capacity, and a DB instance can use it.
   * - `pending` - The reservation isn't ready to use yet. Amazon RDS is creating the reserved capacity, or it is applying a requested modification.
   * - `assessing` - Amazon RDS is evaluating the request for a future-dated reservation.
   * - `scheduled` - Amazon RDS accepted a future-dated reservation, and the reservation is waiting for its start date.
   * - `delayed` - Amazon RDS couldn't provide the reserved capacity of a future-dated reservation by its start date.
   * - `unsupported` - Amazon RDS can't fulfill the future-dated reservation as requested.
   * - `expired` - The reservation passed its end date. Amazon RDS releases the reserved capacity.
   * - `cancelled` - You cancelled the reservation, and Amazon RDS released the reserved capacity.
   * - `failed` - Amazon RDS couldn't reserve the capacity.
   *
   * The values `assessing`, `scheduled`, `delayed`, and `unsupported` apply to a future-dated reservation only.
   *
   * @public
   */
  State?: DBCapacityReservationState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB capacity reservation.
   *
   * @public
   */
  DBCapacityReservationArn?: string | undefined;

  /**
   * The unique identifier of the DB capacity reservation. The identifier has the prefix `dbcr-`. Every other DB capacity reservation operation takes this identifier.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;

  /**
   * The tags associated with the DB capacity reservation.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CancelDBCapacityReservationResponse {
  /**
   * Contains the details of the canceled DB capacity reservation.
   *
   * @public
   */
  DBCapacityReservation?: DBCapacityReservation | undefined;
}

/**
 * @public
 */
export interface CancelExportTaskMessage {
  /**
   * The identifier of the snapshot or cluster export task to cancel.
   *
   * @public
   */
  ExportTaskIdentifier: string | undefined;
}

/**
 * Contains the details of a snapshot or cluster export to Amazon S3.
 *
 * This data type is used as a response element in the `DescribeExportTasks` operation.
 *
 * @public
 */
export interface ExportTask {
  /**
   * A unique identifier for the snapshot or cluster export task. This ID isn't an identifier for the Amazon S3 bucket where the data is exported.
   *
   * @public
   */
  ExportTaskIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot or cluster exported to Amazon S3.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The data exported from the snapshot or cluster.
   *
   * Valid Values:
   *
   * - `database` - Export all the data from a specified database.
   * - `database.table` *table-name* - Export a table of the snapshot or cluster. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.
   * - `database.schema` *schema-name* - Export a database schema of the snapshot or cluster. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.
   * - `database.schema.table` *table-name* - Export a table of the database schema. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.
   *
   * @public
   */
  ExportOnly?: string[] | undefined;

  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  SnapshotTime?: Date | undefined;

  /**
   * The time when the snapshot or cluster export task started.
   *
   * @public
   */
  TaskStartTime?: Date | undefined;

  /**
   * The time when the snapshot or cluster export task ended.
   *
   * @public
   */
  TaskEndTime?: Date | undefined;

  /**
   * The Amazon S3 bucket where the snapshot or cluster is exported to.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 bucket prefix that is the file name and path of the exported data.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * The name of the IAM role that is used to write to Amazon S3 when exporting a snapshot or cluster.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The key identifier of the Amazon Web Services KMS key that is used to encrypt the data when it's exported to Amazon S3. The KMS key identifier is its key ARN, key ID, alias ARN, or alias name. The IAM role used for the export must have encryption and decryption permissions to use this KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The progress status of the export task. The status can be one of the following:
   *
   * - `CANCELED`
   * - `CANCELING`
   * - `COMPLETE`
   * - `FAILED`
   * - `IN_PROGRESS`
   * - `STARTING`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The progress of the snapshot or cluster export task as a percentage.
   *
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * The total amount of data exported, in gigabytes.
   *
   * @public
   */
  TotalExtractedDataInGB?: number | undefined;

  /**
   * The reason the export failed, if it failed.
   *
   * @public
   */
  FailureCause?: string | undefined;

  /**
   * A warning about the snapshot or cluster export task.
   *
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * The type of source for the export.
   *
   * @public
   */
  SourceType?: ExportSourceType | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see [Constructing an ARN for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing) in the *Amazon Aurora User Guide*.
   *
   * Constraints:
   *
   * - Must specify a valid DB cluster parameter group.
   *
   * @public
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * The identifier for the copied DB cluster parameter group.
   *
   * Constraints:
   *
   * - Can't be null, empty, or blank
   * - Must contain from 1 to 255 letters, numbers, or hyphens
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
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
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the details of an Amazon RDS DB cluster parameter group.
 *
 * This data type is used as a response element in the `DescribeDBClusterParameterGroups` action.
 *
 * @public
 */
export interface DBClusterParameterGroup {
  /**
   * The name of the DB cluster parameter group.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * The name of the DB parameter group family that this DB cluster parameter group is compatible with.
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
   * Contains the details of an Amazon RDS DB cluster parameter group.
   *
   * This data type is used as a response element in the `DescribeDBClusterParameterGroups` action.
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
   * The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must specify a valid source snapshot in the "available" state.
   * - If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB snapshot identifier.
   * - If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid DB cluster snapshot ARN. You can also specify an ARN of a snapshot that is in a different account and a different Amazon Web Services Region. For more information, go to [Copying Snapshots Across Amazon Web Services Regions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html#USER_CopySnapshot.AcrossRegions) in the *Amazon Aurora User Guide*.
   *
   * Example: `my-cluster-snapshot1`
   *
   * @public
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster-snapshot2`
   *
   * @public
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted DB cluster snapshot. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS key.
   *
   * If you copy an encrypted DB cluster snapshot from your Amazon Web Services account, you can specify a value for `KmsKeyId` to encrypt the copy with a new KMS key. If you don't specify a value for `KmsKeyId`, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.
   *
   * If you copy an encrypted DB cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for `KmsKeyId`.
   *
   * To copy an encrypted DB cluster snapshot to another Amazon Web Services Region, you must set `KmsKeyId` to the Amazon Web Services KMS key identifier you want to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services Region that they are created in, and you can't use KMS keys from one Amazon Web Services Region in another Amazon Web Services Region.
   *
   * If you copy an unencrypted DB cluster snapshot and specify a value for the `KmsKeyId` parameter, an error is returned.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * When you are copying a DB cluster snapshot from one Amazon Web Services GovCloud (US) Region to another, the URL that contains a Signature Version 4 signed request for the `CopyDBClusterSnapshot` API operation in the Amazon Web Services Region that contains the source DB cluster snapshot to copy. Use the `PreSignedUrl` parameter when copying an encrypted DB cluster snapshot from another Amazon Web Services Region. Don't specify `PreSignedUrl` when copying an encrypted DB cluster snapshot in the same Amazon Web Services Region.
   *
   * This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions.
   *
   * The presigned URL must be a valid request for the `CopyDBClusterSnapshot` API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster snapshot to copy. The presigned URL request must contain the following parameter values:
   *
   * - `KmsKeyId` - The KMS key identifier for the KMS key to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. This is the same identifier for both the `CopyDBClusterSnapshot` operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL.
   * - `DestinationRegion` - The name of the Amazon Web Services Region that the DB cluster snapshot is to be created in.
   * - `SourceDBClusterSnapshotIdentifier` - The DB cluster snapshot identifier for the encrypted DB cluster snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster snapshot from the us-west-2 Amazon Web Services Region, then your `SourceDBClusterSnapshotIdentifier` looks like the following example: `arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115`.
   *
   * To learn how to generate a Signature Version 4 signed request, see [Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html) and [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * > **Note:** If you are using an Amazon Web Services SDK tool or the CLI, you can specify `SourceRegion` (or `--source-region` for the CLI) instead of specifying `PreSignedUrl` manually. Specifying `SourceRegion` autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * Specifies whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot. By default, tags are not copied.
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the details for an Amazon RDS DB cluster snapshot
 *
 * This data type is used as a response element in the `DescribeDBClusterSnapshots` action.
 *
 * @public
 */
export interface DBClusterSnapshot {
  /**
   * The list of Availability Zones (AZs) where instances in the DB cluster snapshot can be restored.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The identifier for the DB cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * The DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * The time when the snapshot was taken, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  SnapshotCreateTime?: Date | undefined;

  /**
   * The name of the database engine for this DB cluster snapshot.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The engine mode of the database engine for this DB cluster snapshot.
   *
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * The allocated storage size of the DB cluster snapshot in gibibytes (GiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The status of this DB cluster snapshot. Valid statuses are the following:
   *
   * - `available`
   * - `copying`
   * - `creating`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The port that the DB cluster was listening on at the time of the snapshot.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The VPC ID associated with the DB cluster snapshot.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The time when the DB cluster was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * The master username for this DB cluster snapshot.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The version of the database engine for this DB cluster snapshot.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The license model information for this DB cluster snapshot.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The type of the DB cluster snapshot.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * The percentage of the estimated data that has been transferred.
   *
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * Specifies whether the DB cluster snapshot is encrypted with an Amazon Web Services managed key or a customer managed key.
   *
   * If the DB cluster snapshot is encrypted with an Amazon Web Services owned key, this value is `false` and `StorageEncryptionType` is `sse-rds`. In that case, the data at rest is still encrypted. To determine how the data at rest is protected, use `StorageEncryptionType`.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The type of encryption used to protect data at rest in the DB cluster snapshot. Possible values:
   *
   * - `none` - The DB cluster snapshot is not encrypted.
   * - `sse-rds` - The DB cluster snapshot is encrypted using an Amazon Web Services owned KMS key.
   * - `sse-kms` - The DB cluster snapshot is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * The number of days for which automatic DB snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * If `StorageEncrypted` is true, the Amazon Web Services KMS key identifier for the encrypted DB cluster snapshot.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
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
   * Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * The storage type associated with the DB cluster snapshot.
   *
   * This setting is only for Aurora DB clusters.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The storage throughput for the DB cluster snapshot. The throughput is automatically set based on the IOPS that you provision, and is not configurable.
   *
   * This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The resource ID of the DB cluster that this DB cluster snapshot was created from.
   *
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  DBSystemId?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterSnapshotResult {
  /**
   * Contains the details for an Amazon RDS DB cluster snapshot
   *
   * This data type is used as a response element in the `DescribeDBClusterSnapshots` action.
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
   * The identifier or ARN for the source DB parameter group. For information about creating an ARN, see [Constructing an ARN for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing) in the *Amazon RDS User Guide*.
   *
   * Constraints:
   *
   * - Must specify a valid DB parameter group.
   *
   * @public
   */
  SourceDBParameterGroupIdentifier: string | undefined;

  /**
   * The identifier for the copied DB parameter group.
   *
   * Constraints:
   *
   * - Can't be null, empty, or blank
   * - Must contain from 1 to 255 letters, numbers, or hyphens
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
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
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the details of an Amazon RDS DB parameter group.
 *
 * This data type is used as a response element in the `DescribeDBParameterGroups` action.
 *
 * @public
 */
export interface DBParameterGroup {
  /**
   * The name of the DB parameter group.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * The name of the DB parameter group family that this DB parameter group is compatible with.
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
   * Contains the details of an Amazon RDS DB parameter group.
   *
   * This data type is used as a response element in the `DescribeDBParameterGroups` action.
   *
   * @public
   */
  DBParameterGroup?: DBParameterGroup | undefined;
}

/**
 * @public
 */
export interface CopyDBSnapshotMessage {
  /**
   * The identifier for the source DB snapshot.
   *
   * If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB snapshot identifier. For example, you might specify `rds:mysql-instance1-snapshot-20130805`.
   *
   * If you are copying from a shared manual DB snapshot, this parameter must be the Amazon Resource Name (ARN) of the shared DB snapshot.
   *
   * If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid DB snapshot ARN. You can also specify an ARN of a snapshot that is in a different account and a different Amazon Web Services Region. For example, you might specify `arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805`.
   *
   * Constraints:
   *
   * - Must specify a valid source snapshot in the "available" state.
   *
   * Example: `rds:mydb-2012-04-02-00-01`
   *
   * Example: `arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805`
   *
   * @public
   */
  SourceDBSnapshotIdentifier: string | undefined;

  /**
   * The identifier for the copy of the snapshot.
   *
   * Constraints:
   *
   * - Can't be null, empty, or blank
   * - Must contain from 1 to 255 letters, numbers, or hyphens
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-db-snapshot`
   *
   * @public
   */
  TargetDBSnapshotIdentifier: string | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted DB snapshot. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you copy an encrypted DB snapshot from your Amazon Web Services account, you can specify a value for this parameter to encrypt the copy with a new KMS key. If you don't specify a value for this parameter, then the copy of the DB snapshot is encrypted with the same Amazon Web Services KMS key as the source DB snapshot.
   *
   * If you copy an encrypted DB snapshot that is shared from another Amazon Web Services account, then you must specify a value for this parameter.
   *
   * If you specify this parameter when you copy an unencrypted snapshot, the copy is encrypted.
   *
   * If you copy an encrypted snapshot to a different Amazon Web Services Region, then you must specify an Amazon Web Services KMS key identifier for the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services Region that they are created in, and you can't use KMS keys from one Amazon Web Services Region in another Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies whether to copy all tags from the source DB snapshot to the target DB snapshot. By default, tags aren't copied.
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * When you are copying a snapshot from one Amazon Web Services GovCloud (US) Region to another, the URL that contains a Signature Version 4 signed request for the `CopyDBSnapshot` API operation in the source Amazon Web Services Region that contains the source DB snapshot to copy.
   *
   * This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions.
   *
   * You must specify this parameter when you copy an encrypted DB snapshot from another Amazon Web Services Region by using the Amazon RDS API. Don't specify `PreSignedUrl` when you are copying an encrypted DB snapshot in the same Amazon Web Services Region.
   *
   * The presigned URL must be a valid request for the `CopyDBClusterSnapshot` API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster snapshot to copy. The presigned URL request must contain the following parameter values:
   *
   * - `DestinationRegion` - The Amazon Web Services Region that the encrypted DB snapshot is copied to. This Amazon Web Services Region is the same one where the `CopyDBSnapshot` operation is called that contains this presigned URL.
   *
   *   For example, if you copy an encrypted DB snapshot from the us-west-2 Amazon Web Services Region to the us-east-1 Amazon Web Services Region, then you call the `CopyDBSnapshot` operation in the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the `CopyDBSnapshot` operation in the us-west-2 Amazon Web Services Region. For this example, the `DestinationRegion` in the presigned URL must be set to the us-east-1 Amazon Web Services Region.
   * - `KmsKeyId` - The KMS key identifier for the KMS key to use to encrypt the copy of the DB snapshot in the destination Amazon Web Services Region. This is the same identifier for both the `CopyDBSnapshot` operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL.
   * - `SourceDBSnapshotIdentifier` - The DB snapshot identifier for the encrypted snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB snapshot from the us-west-2 Amazon Web Services Region, then your `SourceDBSnapshotIdentifier` looks like the following example: `arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20161115`.
   *
   * To learn how to generate a Signature Version 4 signed request, see [Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html) and [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * > **Note:** If you are using an Amazon Web Services SDK tool or the CLI, you can specify `SourceRegion` (or `--source-region` for the CLI) instead of specifying `PreSignedUrl` manually. Specifying `SourceRegion` autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * The name of an option group to associate with the copy of the snapshot.
   *
   * Specify this option if you are copying a snapshot from one Amazon Web Services Region to another, and your DB instance uses a nondefault option group. If your source DB instance uses Transparent Data Encryption for Oracle or Microsoft SQL Server, you must specify this option when copying across Amazon Web Services Regions. For more information, see [Option group considerations](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.Options) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The external custom Availability Zone (CAZ) identifier for the target CAZ.
   *
   * Example: `rds-caz-aiqhTgQv`.
   *
   * @public
   */
  TargetCustomAvailabilityZone?: string | undefined;

  /**
   * Configures the location where RDS will store copied snapshots.
   *
   * Valid Values:
   *
   * - `local` (Dedicated Local Zone)
   * - `outposts` (Amazon Web Services Outposts)
   * - `region` (Amazon Web Services Region)
   *
   * @public
   */
  SnapshotTarget?: string | undefined;

  /**
   * Specifies whether to copy the DB option group associated with the source DB snapshot to the target Amazon Web Services account and associate with the target DB snapshot. The associated option group can be copied only with cross-account snapshot copy calls.
   *
   * @public
   */
  CopyOptionGroup?: boolean | undefined;

  /**
   * Specifies the name of the Availability Zone where RDS stores the DB snapshot. This value is valid only for snapshots that RDS stores on a Dedicated Local Zone.
   *
   * @public
   */
  SnapshotAvailabilityZone?: string | undefined;
}

/**
 * Contains the processor features of a DB instance class.
 *
 * To specify the number of CPU cores, use the `coreCount` feature name for the `Name` parameter. To specify the number of threads per core, use the `threadsPerCore` feature name for the `Name` parameter.
 *
 * You can set the processor features of the DB instance class for a DB instance when you call one of the following actions:
 *
 * - `CreateDBInstance`
 * - `ModifyDBInstance`
 * - `RestoreDBInstanceFromDBSnapshot`
 * - `RestoreDBInstanceFromS3`
 * - `RestoreDBInstanceToPointInTime`
 *
 * You can view the valid processor values for a particular instance class by calling the `DescribeOrderableDBInstanceOptions` action and specifying the instance class for the `DBInstanceClass` parameter.
 *
 * In addition, you can use the following actions for DB instance class processor information:
 *
 * - `DescribeDBInstances`
 * - `DescribeDBSnapshots`
 * - `DescribeValidDBInstanceModifications`
 *
 * If you call `DescribeDBInstances`, `ProcessorFeature` returns non-null values only if the following conditions are met:
 *
 * - You are accessing an Oracle or SQL Server DB instance.
 * - Your Oracle or SQL Server DB instance class supports configuring the number of CPU cores and threads per core.
 * - The current number CPU cores and threads is set to a non-default value.
 *
 * For more information, see [Configuring the processor for a DB instance class in RDS for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor), [Optimizing your RDS for SQL Server CPU](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Concepts.General.OptimizeCPU.html), and [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide.*
 *
 * @public
 */
export interface ProcessorFeature {
  /**
   * The name of the processor feature. Valid names are `coreCount` and `threadsPerCore`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of a processor feature.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains the details of an Amazon RDS DB snapshot.
 *
 * This data type is used as a response element in the `DescribeDBSnapshots` action.
 *
 * @public
 */
export interface DBSnapshot {
  /**
   * Specifies the identifier for the DB snapshot.
   *
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * Specifies the DB instance identifier of the DB instance this DB snapshot was created from.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * Specifies when the snapshot was taken in Coordinated Universal Time (UTC). Changes for the copy when the snapshot is copied.
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
   * Specifies the status of this DB snapshot.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Specifies the port that the database engine was listening on at the time of the snapshot.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Provides the VPC ID associated with the DB snapshot.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.
   *
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * Provides the master username for the DB snapshot.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * Specifies the version of the database engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * License model information for the restored DB instance.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * Provides the type of the DB snapshot.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies the storage throughput for the DB snapshot.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * Provides the option group name for the DB snapshot.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The percentage of the estimated data that has been transferred.
   *
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * The Amazon Web Services Region that the DB snapshot was created in or copied from.
   *
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * The DB snapshot Amazon Resource Name (ARN) that the DB snapshot was copied from. It only has a value in the case of a cross-account or cross-Region copy.
   *
   * @public
   */
  SourceDBSnapshotIdentifier?: string | undefined;

  /**
   * Specifies the storage type associated with DB snapshot.
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
   * Indicates whether the DB snapshot is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The type of encryption used to protect data at rest in the DB snapshot. Possible values:
   *
   * - `none` - The DB snapshot is not encrypted.
   * - `sse-rds` - The DB snapshot is encrypted using an Amazon Web Services owned KMS key.
   * - `sse-kms` - The DB snapshot is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * The number of days for which automatic DB snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * If `Encrypted` is true, the Amazon Web Services KMS key identifier for the encrypted DB snapshot.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB snapshot.
   *
   * @public
   */
  DBSnapshotArn?: string | undefined;

  /**
   * The time zone of the DB snapshot. In most cases, the `Timezone` element is empty. `Timezone` content appears only for snapshots taken from Microsoft SQL Server DB instances that were created with a time zone specified.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance when the DB snapshot was created.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * Specifies where manual snapshots are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.
   *
   * @public
   */
  SnapshotTarget?: string | undefined;

  /**
   * Specifies the time of the CreateDBSnapshot operation in Coordinated Universal Time (UTC). Doesn't change when the snapshot is copied.
   *
   * @public
   */
  OriginalSnapshotCreateTime?: Date | undefined;

  /**
   * The timestamp of the most recent transaction applied to the database that you're backing up. Thus, if you restore a snapshot, SnapshotDatabaseTime is the most recent transaction in the restored DB instance. In contrast, originalSnapshotCreateTime specifies the system time that the snapshot completed.
   *
   * If you back up a read replica, you can determine the replica lag by comparing SnapshotDatabaseTime with originalSnapshotCreateTime. For example, if originalSnapshotCreateTime is two hours later than SnapshotDatabaseTime, then the replica lag is two hours.
   *
   * @public
   */
  SnapshotDatabaseTime?: Date | undefined;

  /**
   * The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. The Oracle SID is also the name of your CDB.
   *
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * Indicates whether the snapshot is of a DB instance using the multi-tenant configuration (TRUE) or the single-tenant configuration (FALSE).
   *
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * The additional storage volumes associated with the DB snapshot. RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolume[] | undefined;

  /**
   * Specifies the name of the Availability Zone where RDS stores the DB snapshot. This value is valid only for snapshots that RDS stores on a Dedicated Local Zone.
   *
   * @public
   */
  SnapshotAvailabilityZone?: string | undefined;

  /**
   * The full size of the DB snapshot, in bytes.
   *
   * > **Important:** This is not the incremental size of the snapshot. This is the full snapshot size and represents the size of all the blocks that were written to the source volume at the time the snapshot was created.
   *
   * @public
   */
  FullSnapshotSizeInBytes?: number | undefined;
}

/**
 * @public
 */
export interface CopyDBSnapshotResult {
  /**
   * Contains the details of an Amazon RDS DB snapshot.
   *
   * This data type is used as a response element in the `DescribeDBSnapshots` action.
   *
   * @public
   */
  DBSnapshot?: DBSnapshot | undefined;
}

/**
 * @public
 */
export interface CopyOptionGroupMessage {
  /**
   * The identifier for the source option group.
   *
   * Constraints:
   *
   * - Must specify a valid option group.
   *
   * @public
   */
  SourceOptionGroupIdentifier: string | undefined;

  /**
   * The identifier for the copied option group.
   *
   * Constraints:
   *
   * - Can't be null, empty, or blank
   * - Must contain from 1 to 255 letters, numbers, or hyphens
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-option-group`
   *
   * @public
   */
  TargetOptionGroupIdentifier: string | undefined;

  /**
   * The description for the copied option group.
   *
   * @public
   */
  TargetOptionGroupDescription: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * This data type is used as a response element in the following actions:
 *
 * - `ModifyDBInstance`
 * - `RebootDBInstance`
 * - `RestoreDBInstanceFromDBSnapshot`
 * - `RestoreDBInstanceToPointInTime`
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
 * Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.
 *
 * @public
 */
export interface OptionSetting {
  /**
   * The name of the option that has settings that you can set.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current value of the option setting.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The default value of the option setting.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The description of the option setting.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The DB engine specific parameter type.
   *
   * @public
   */
  ApplyType?: string | undefined;

  /**
   * The data type of the option setting.
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * The allowed values of the option setting.
   *
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * Indicates whether the option setting can be modified from the default.
   *
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * Indicates whether the option setting is part of a collection.
   *
   * @public
   */
  IsCollection?: boolean | undefined;
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
   * The membership status of the VPC security group.
   *
   * Currently, the only valid status is `active`.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The details of an option.
 *
 * @public
 */
export interface Option {
  /**
   * The name of the option.
   *
   * @public
   */
  OptionName?: string | undefined;

  /**
   * The description of the option.
   *
   * @public
   */
  OptionDescription?: string | undefined;

  /**
   * Indicates whether this option is persistent.
   *
   * @public
   */
  Persistent?: boolean | undefined;

  /**
   * Indicates whether this option is permanent.
   *
   * @public
   */
  Permanent?: boolean | undefined;

  /**
   * If required, the port configured for this option to use.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The version of the option.
   *
   * @public
   */
  OptionVersion?: string | undefined;

  /**
   * The option settings for this option.
   *
   * @public
   */
  OptionSettings?: OptionSetting[] | undefined;

  /**
   * If the option requires access to a port, then this DB security group allows access to the port.
   *
   * @public
   */
  DBSecurityGroupMemberships?: DBSecurityGroupMembership[] | undefined;

  /**
   * If the option requires access to a port, then this VPC security group allows access to the port.
   *
   * @public
   */
  VpcSecurityGroupMemberships?: VpcSecurityGroupMembership[] | undefined;
}

/**
 * @public
 */
export interface OptionGroup {
  /**
   * Specifies the name of the option group.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * Provides a description of the option group.
   *
   * @public
   */
  OptionGroupDescription?: string | undefined;

  /**
   * Indicates the name of the engine that this option group can be applied to.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * Indicates the major engine version associated with this option group.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * Indicates what options are available in the option group.
   *
   * @public
   */
  Options?: Option[] | undefined;

  /**
   * Indicates whether this option group can be applied to both VPC and non-VPC instances. The value `true` indicates the option group can be applied to both VPC and non-VPC instances.
   *
   * @public
   */
  AllowsVpcAndNonVpcInstanceMemberships?: boolean | undefined;

  /**
   * If **AllowsVpcAndNonVpcInstanceMemberships** is `false`, this field is blank. If **AllowsVpcAndNonVpcInstanceMemberships** is `true` and this field is blank, then this option group can be applied to both VPC and non-VPC instances. If this field contains a value, then this option group can only be applied to instances that are in the VPC indicated by this field.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Specifies the Amazon Resource Name (ARN) for the option group.
   *
   * @public
   */
  OptionGroupArn?: string | undefined;

  /**
   * Specifies the name of the option group from which this option group is copied.
   *
   * @public
   */
  SourceOptionGroup?: string | undefined;

  /**
   * Specifies the Amazon Web Services account ID for the option group from which this option group is copied.
   *
   * @public
   */
  SourceAccountId?: string | undefined;

  /**
   * Indicates when the option group was copied.
   *
   * @public
   */
  CopyTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CopyOptionGroupResult {
  /**
   * @public
   */
  OptionGroup?: OptionGroup | undefined;
}

/**
 * The configuration for a single resource in the green environment of a blue/green deployment.
 *
 * Use `SourceArn` to identify a resource in the blue environment. Amazon RDS creates the corresponding resource in the green environment using this configuration.
 *
 * This data type is a request parameter of the `CreateBlueGreenDeployment` operation.
 *
 * @public
 */
export interface TargetResourceConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the DB cluster or DB instance in the blue environment to which this configuration applies.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of the corresponding resource in the green environment.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * Specify this setting in either of the following cases:
   *
   * - You want the green resource to use a different KMS key than the blue resource.
   * - The blue resource is unencrypted and you want to encrypt the green resource.
   *
   * For Aurora, encryption applies at the DB cluster level. Specify a DB cluster ARN in `SourceArn`. All DB instances in that cluster use the same KMS key.
   *
   * For RDS, encryption applies at the DB instance level. Specify a DB instance ARN in `SourceArn`. To encrypt read replicas, include a separate entry for each one. Each entry can specify a different KMS key.
   *
   * @public
   */
  TargetKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBlueGreenDeploymentRequest {
  /**
   * The name of the blue/green deployment.
   *
   * Constraints:
   *
   * - Can't be the same as an existing blue/green deployment name in the same account and Amazon Web Services Region.
   *
   * @public
   */
  BlueGreenDeploymentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source production database.
   *
   * Specify the database that you want to clone. The blue/green deployment creates this database in the green environment. You can make updates to the database in the green environment, such as an engine version upgrade. When you are ready, you can switch the database in the green environment to be the production database.
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The engine version of the database in the green environment.
   *
   * Specify the engine version to upgrade to in the green environment.
   *
   * @public
   */
  TargetEngineVersion?: string | undefined;

  /**
   * The DB parameter group associated with the DB instance in the green environment.
   *
   * To test parameter changes, specify a DB parameter group that is different from the one associated with the source DB instance.
   *
   * @public
   */
  TargetDBParameterGroupName?: string | undefined;

  /**
   * The DB cluster parameter group associated with the Aurora DB cluster in the green environment.
   *
   * To test parameter changes, specify a DB cluster parameter group that is different from the one associated with the source DB cluster.
   *
   * @public
   */
  TargetDBClusterParameterGroupName?: string | undefined;

  /**
   * Tags to assign to the blue/green deployment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specify the DB instance class for the databases in the green environment.
   *
   * This parameter only applies to RDS DB instances, because DB instances within an Aurora DB cluster can have multiple different instance classes. If you're creating a blue/green deployment from an Aurora DB cluster, don't specify this parameter. After the green environment is created, you can individually modify the instance classes of the DB instances within the green DB cluster.
   *
   * @public
   */
  TargetDBInstanceClass?: string | undefined;

  /**
   * Whether to upgrade the storage file system configuration on the green database. This option migrates the green DB instance from the older 32-bit file system to the preferred configuration. For more information, see [Upgrading the storage file system for a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.UpgradeFileSystem).
   *
   * @public
   */
  UpgradeTargetStorageConfig?: boolean | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to allocate for the green DB instance. For information about valid IOPS values, see [Amazon RDS DB instance storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to Amazon Aurora blue/green deployments.
   *
   * @public
   */
  TargetIops?: number | undefined;

  /**
   * The storage type to associate with the green DB instance.
   *
   * Valid Values: `gp2 | gp3 | io1 | io2`
   *
   * This setting doesn't apply to Amazon Aurora blue/green deployments.
   *
   * @public
   */
  TargetStorageType?: string | undefined;

  /**
   * The amount of storage in gibibytes (GiB) to allocate for the green DB instance. You can choose to increase or decrease the allocated storage on the green DB instance.
   *
   * This setting doesn't apply to Amazon Aurora blue/green deployments.
   *
   * @public
   */
  TargetAllocatedStorage?: number | undefined;

  /**
   * The storage throughput value for the green DB instance.
   *
   * This setting applies only to the `gp3` storage type.
   *
   * This setting doesn't apply to Amazon Aurora blue/green deployments.
   *
   * @public
   */
  TargetStorageThroughput?: number | undefined;

  /**
   * Specifies resource-level configuration overrides for the green environment.
   *
   * Each entry identifies a resource in the blue environment by its Amazon Resource Name (ARN). It defines the desired configuration for the corresponding resource in the green environment. Any resource that you don't include in this parameter retains the same configuration as its counterpart in the blue environment.
   *
   * Use this parameter when one or more resources in the green environment require a different configuration than what they have in the blue environment.
   *
   * Constraints:
   *
   * - You can't specify the same `SourceArn` in more than one entry.
   *
   * @public
   */
  TargetResourceConfigurations?: TargetResourceConfiguration[] | undefined;
}

/**
 * Contains the details about a blue/green deployment.
 *
 * For more information, see [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html) in the *Amazon RDS User Guide* and [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface SwitchoverDetail {
  /**
   * The Amazon Resource Name (ARN) of a resource in the blue environment.
   *
   * @public
   */
  SourceMember?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a resource in the green environment.
   *
   * @public
   */
  TargetMember?: string | undefined;

  /**
   * The switchover status of a resource in a blue/green deployment.
   *
   * Values:
   *
   * - `PROVISIONING` - The resource is being prepared to switch over.
   * - `AVAILABLE` - The resource is ready to switch over.
   * - `SWITCHOVER_IN_PROGRESS` - The resource is being switched over.
   * - `SWITCHOVER_COMPLETED` - The resource has been switched over.
   * - `SWITCHOVER_FAILED` - The resource attempted to switch over but failed.
   * - `MISSING_SOURCE` - The source resource has been deleted.
   * - `MISSING_TARGET` - The target resource has been deleted.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Details about a task for a blue/green deployment.
 *
 * For more information, see [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html) in the *Amazon RDS User Guide* and [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface BlueGreenDeploymentTask {
  /**
   * The name of the blue/green deployment task.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the blue/green deployment task.
   *
   * Valid Values:
   *
   * - `PENDING` - The resource is being prepared for deployment.
   * - `IN_PROGRESS` - The resource is being deployed.
   * - `COMPLETED` - The resource has been deployed.
   * - `FAILED` - Deployment of the resource failed.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Details about a blue/green deployment.
 *
 * For more information, see [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html) in the *Amazon RDS User Guide* and [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface BlueGreenDeployment {
  /**
   * The unique identifier of the blue/green deployment.
   *
   * @public
   */
  BlueGreenDeploymentIdentifier?: string | undefined;

  /**
   * The user-supplied name of the blue/green deployment.
   *
   * @public
   */
  BlueGreenDeploymentName?: string | undefined;

  /**
   * The source database for the blue/green deployment.
   *
   * Before switchover, the source database is the production database in the blue environment.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The target database for the blue/green deployment.
   *
   * Before switchover, the target database is the clone database in the green environment.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The details about each source and target resource in the blue/green deployment.
   *
   * @public
   */
  SwitchoverDetails?: SwitchoverDetail[] | undefined;

  /**
   * Either tasks to be performed or tasks that have been completed on the target database before switchover.
   *
   * @public
   */
  Tasks?: BlueGreenDeploymentTask[] | undefined;

  /**
   * The status of the blue/green deployment.
   *
   * Valid Values:
   *
   * - `PROVISIONING` - Resources are being created in the green environment.
   * - `AVAILABLE` - Resources are available in the green environment.
   * - `SWITCHOVER_IN_PROGRESS` - The deployment is being switched from the blue environment to the green environment.
   * - `SWITCHOVER_COMPLETED` - Switchover from the blue environment to the green environment is complete.
   * - `INVALID_CONFIGURATION` - Resources in the green environment are invalid, so switchover isn't possible.
   * - `SWITCHOVER_FAILED` - Switchover was attempted but failed.
   * - `DELETING` - The blue/green deployment is being deleted.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Additional information about the status of the blue/green deployment.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The time when the blue/green deployment was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The time when the blue/green deployment was deleted, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBlueGreenDeploymentResponse {
  /**
   * Details about a blue/green deployment.
   *
   * For more information, see [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html) in the *Amazon RDS User Guide* and [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  BlueGreenDeployment?: BlueGreenDeployment | undefined;
}

/**
 * @public
 */
export interface CreateCustomDBEngineVersionMessage {
  /**
   * The database engine.
   *
   * RDS Custom for Oracle supports the following values:
   *
   * - `custom-oracle-ee`
   * - `custom-oracle-ee-cdb`
   * - `custom-oracle-se2`
   * - `custom-oracle-se2-cdb`
   *
   * RDS Custom for SQL Server supports the following values:
   *
   * - `custom-sqlserver-ee`
   * - `custom-sqlserver-se`
   * - `custom-sqlserver-web`
   * - `custom-sqlserver-dev`
   *
   * RDS for SQL Server supports the following values:
   *
   * - `sqlserver-ee` (Bring Your Own Media)
   * - `sqlserver-se` (Bring Your Own Media)
   * - `sqlserver-dev-ee`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The name of your custom engine version (CEV).
   *
   * For RDS Custom for Oracle, the name format is `19.*customized_string*`. For example, a valid CEV name is `19.my_cev1`.
   *
   * For RDS Custom for SQL Server and RDS for SQL Server `sqlserver-dev-ee`, the name format is `*major_engine_version*.*minor_engine_version*.*customized_string*`. For example, a valid CEV name is `16.00.4215.2.my_cev1`.
   *
   * For RDS for SQL Server Bring Your Own Media (`sqlserver-ee`, `sqlserver-se`), specify the RDS engine version that you want to use. For example, `16.00.4175.1.v1`.
   *
   * The CEV name is unique per customer per Amazon Web Services Regions.
   *
   * @public
   */
  EngineVersion: string | undefined;

  /**
   * The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is `my-custom-installation-files`.
   *
   * @public
   */
  DatabaseInstallationFilesS3BucketName?: string | undefined;

  /**
   * The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.
   *
   * @public
   */
  DatabaseInstallationFilesS3Prefix?: string | undefined;

  /**
   * The database installation files (ISO and EXE) uploaded to Amazon S3 for your database engine version to import to Amazon RDS.
   *
   * For RDS for SQL Server Bring Your Own Media (`sqlserver-ee`, `sqlserver-se`), provide the SQL Server RTM ISO file once per major version and edition combination. Minor versions reuse the same file.
   *
   * @public
   */
  DatabaseInstallationFiles?: string[] | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI). For RDS Custom for SQL Server, an AMI ID is required to create a CEV. For RDS Custom for Oracle, the default is the most recent AMI available, but you can specify an AMI ID that was used in a different Oracle CEV. Find the AMIs used by your CEVs by calling the [DescribeDBEngineVersions](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html) operation.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
   *
   * If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in [Creating a symmetric encryption KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * The ARN of a CEV to use as a source for creating a new CEV. You can specify a different Amazon Machine Imagine (AMI) by using either `Source` or `UseAwsProvidedLatestImage`. You can't specify a different JSON manifest when you specify `SourceCustomDbEngineVersionIdentifier`.
   *
   * @public
   */
  SourceCustomDbEngineVersionIdentifier?: string | undefined;

  /**
   * Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. If you specify `UseAwsProvidedLatestImage`, you can't also specify `ImageId`.
   *
   * @public
   */
  UseAwsProvidedLatestImage?: boolean | undefined;

  /**
   * An optional description of your CEV.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.
   *
   * The following JSON fields are valid:
   *
   * - **MediaImportTemplateVersion**
   *
   *   Version of the CEV manifest. The date is in the format `YYYY-MM-DD`.
   *
   * - **databaseInstallationFileNames**
   *
   *   Ordered list of installation files for the CEV.
   *
   * - **opatchFileNames**
   *
   *   Ordered list of OPatch installers used for the Oracle DB engine.
   *
   * - **psuRuPatchFileNames**
   *
   *   The PSU and RU patches for this CEV.
   *
   * - **OtherPatchFileNames**
   *
   *   The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.
   *
   * For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  Manifest?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * This data type is used as a response element in the action `DescribeDBEngineVersions`.
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
 * A value that indicates the AMI information.
 *
 * @public
 */
export interface CustomDBEngineVersionAMI {
  /**
   * A value that indicates the ID of the AMI.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * A value that indicates the status of a custom engine version (CEV).
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Specifies any Aurora Serverless v2 properties or limits that differ between Aurora engine versions and platform versions. You can test the values of this attribute when deciding which Aurora version to use in a new or upgraded DB cluster. You can also retrieve the version of an existing DB cluster and check whether that version supports certain Aurora Serverless v2 features before you attempt to use those features.
 *
 * @public
 */
export interface ServerlessV2FeaturesSupport {
  /**
   * If the minimum capacity is 0 ACUs, the engine version or platform version supports the automatic pause/resume feature of Aurora Serverless v2.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * Specifies the upper Aurora Serverless v2 capacity limit for a particular engine version or platform version. Depending on the engine version, the maximum capacity for an Aurora Serverless v2 cluster might be `256` or `128`.
   *
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * A time zone associated with a `DBInstance` or a `DBSnapshot`. This data type is an element in the response to the `DescribeDBInstances`, the `DescribeDBSnapshots`, and the `DescribeDBEngineVersions` actions.
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
   * Indicates whether the target version is applied to any source DB instances that have `AutoMinorVersionUpgrade` set to true.
   *
   * This parameter is dynamic, and is set by RDS.
   *
   * @public
   */
  AutoUpgrade?: boolean | undefined;

  /**
   * Indicates whether upgrading to the target version requires upgrading the major version of the database engine.
   *
   * @public
   */
  IsMajorVersionUpgrade?: boolean | undefined;

  /**
   * A list of the supported DB engine modes for the target engine version.
   *
   * @public
   */
  SupportedEngineModes?: string[] | undefined;

  /**
   * Indicates whether you can use Aurora parallel query with the target engine version.
   *
   * @public
   */
  SupportsParallelQuery?: boolean | undefined;

  /**
   * Indicates whether you can use Aurora global databases with the target engine version.
   *
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;

  /**
   * Indicates whether you can use Babelfish for Aurora PostgreSQL with the target engine version.
   *
   * @public
   */
  SupportsBabelfish?: boolean | undefined;

  /**
   * Indicates whether the DB engine version supports Aurora Limitless Database.
   *
   * @public
   */
  SupportsLimitlessDatabase?: boolean | undefined;

  /**
   * Indicates whether the target engine version supports forwarding write operations from reader DB instances to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  SupportsLocalWriteForwarding?: boolean | undefined;

  /**
   * Indicates whether the DB engine version supports zero-ETL integrations with Amazon Redshift.
   *
   * @public
   */
  SupportsIntegrations?: boolean | undefined;
}

/**
 * This data type is used as a response element in the action `DescribeDBEngineVersions`.
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
   * The major engine version of the CEV.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * The version number of the database engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of the Amazon S3 bucket that contains your database installation files.
   *
   * @public
   */
  DatabaseInstallationFilesS3BucketName?: string | undefined;

  /**
   * The Amazon S3 directory that contains the database installation files. If not specified, then no prefix is assumed.
   *
   * @public
   */
  DatabaseInstallationFilesS3Prefix?: string | undefined;

  /**
   * The database installation files (ISO and EXE) that were uploaded to Amazon S3 and used to import the database engine version to Amazon RDS. Returned for RDS for SQL Server engine versions (`sqlserver-ee`, `sqlserver-se`, and `sqlserver-dev-ee`) created from customer-supplied installation media.
   *
   * @public
   */
  DatabaseInstallationFiles?: string[] | undefined;

  /**
   * JSON string that lists the installation files and parameters that RDS Custom uses to create a custom engine version (CEV). RDS Custom applies the patches in the order in which they're listed in the manifest. You can set the Oracle home, Oracle base, and UNIX/Linux user and group using the installation parameters. For more information, see [JSON fields in the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.preparing.html#custom-cev.preparing.manifest.fields) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  CustomDBEngineVersionManifest?: string | undefined;

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
   * The ARN of the custom engine version.
   *
   * @public
   */
  DBEngineVersionArn?: string | undefined;

  /**
   * The description of the database engine version.
   *
   * @public
   */
  DBEngineVersionDescription?: string | undefined;

  /**
   * The default character set for new instances of this engine version, if the `CharacterSetName` parameter of the CreateDBInstance API isn't specified.
   *
   * @public
   */
  DefaultCharacterSet?: CharacterSet | undefined;

  /**
   * The reason that the custom engine version creation failed with an `incompatible-installation-media` status. Applicable to RDS for SQL Server engine versions (`sqlserver-ee`, `sqlserver-se`, and `sqlserver-dev-ee`).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The EC2 image
   *
   * @public
   */
  Image?: CustomDBEngineVersionAMI | undefined;

  /**
   * The source of the installation media for this engine version. A value of `Customer Provided` indicates that the engine version was created from customer-supplied installation media using `CreateCustomDBEngineVersion`. Applicable to RDS Custom for SQL Server and to RDS for SQL Server engine versions (`sqlserver-ee` and `sqlserver-se` with the `bring-your-own-media` license model, and `sqlserver-dev-ee`).
   *
   * @public
   */
  DBEngineMediaType?: string | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted CEV. This parameter is required for RDS Custom, but optional for Amazon RDS.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * The creation time of the DB engine version.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * A list of the character sets supported by this engine for the `CharacterSetName` parameter of the `CreateDBInstance` operation.
   *
   * @public
   */
  SupportedCharacterSets?: CharacterSet[] | undefined;

  /**
   * A list of the character sets supported by the Oracle DB engine for the `NcharCharacterSetName` parameter of the `CreateDBInstance` operation.
   *
   * @public
   */
  SupportedNcharCharacterSets?: CharacterSet[] | undefined;

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
   * Indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.
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
   * A list of the supported DB engine modes.
   *
   * @public
   */
  SupportedEngineModes?: string[] | undefined;

  /**
   * A list of features supported by the DB engine.
   *
   * The supported features vary by DB engine and DB engine version.
   *
   * To determine the supported features for a specific DB engine and DB engine version using the CLI, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine <engine_name> --engine-version <engine_version>`
   *
   * For example, to determine the supported features for RDS for PostgreSQL version 13.3 using the CLI, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine postgres --engine-version 13.3`
   *
   * The supported features are listed under `SupportedFeatureNames` in the output.
   *
   * @public
   */
  SupportedFeatureNames?: string[] | undefined;

  /**
   * The status of the DB engine version, either `available` or `deprecated`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Indicates whether you can use Aurora parallel query with a specific DB engine version.
   *
   * @public
   */
  SupportsParallelQuery?: boolean | undefined;

  /**
   * Indicates whether you can use Aurora global databases with a specific DB engine version.
   *
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * Indicates whether the engine version supports Babelfish for Aurora PostgreSQL.
   *
   * @public
   */
  SupportsBabelfish?: boolean | undefined;

  /**
   * Indicates whether the DB engine version supports Aurora Limitless Database.
   *
   * @public
   */
  SupportsLimitlessDatabase?: boolean | undefined;

  /**
   * Indicates whether the engine version supports rotating the server certificate without rebooting the DB instance.
   *
   * @public
   */
  SupportsCertificateRotationWithoutRestart?: boolean | undefined;

  /**
   * A list of the supported CA certificate identifiers.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  SupportedCACertificateIdentifiers?: string[] | undefined;

  /**
   * Indicates whether the DB engine version supports forwarding write operations from reader DB instances to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  SupportsLocalWriteForwarding?: boolean | undefined;

  /**
   * Indicates whether the DB engine version supports zero-ETL integrations with Amazon Redshift.
   *
   * @public
   */
  SupportsIntegrations?: boolean | undefined;

  /**
   * Specifies any Aurora Serverless v2 properties or limits that differ between Aurora engine versions. You can test the values of this attribute when deciding which Aurora version to use in a new or upgraded DB cluster. You can also retrieve the version of an existing DB cluster and check whether that version supports certain Aurora Serverless v2 features before you attempt to use those features.
   *
   * @public
   */
  ServerlessV2FeaturesSupport?: ServerlessV2FeaturesSupport | undefined;
}

/**
 * @public
 */
export interface CreateDBCapacityReservationRequest {
  /**
   * The name of the DB capacity reservation. This name must be unique for your Amazon Web Services account in the Amazon Web Services Region.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 lowercase letters, digits, or hyphens.
   * - First character must be a lowercase letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   * - Can't contain more than 16 groups of characters separated by hyphens.
   * - Can't begin with `dbcr-`.
   *
   * @public
   */
  DBCapacityReservationName: string | undefined;

  /**
   * The compute and memory capacity to reserve, for example `db.m5.large`. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.
   *
   * Constraints:
   *
   * - Must be a DB instance class that the specified `Engine` supports.
   * - For RDS for Oracle with `LicenseModel` set to `license-included`, some DB instance classes aren't supported. Either choose a supported DB instance class, or set `LicenseModel` to `bring-your-own-license`.
   *
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * The database engine to reserve capacity for.
   *
   * Valid Values: `aurora-mysql` | `aurora-postgresql` | `mysql` | `postgres` | `mariadb` | `oracle-ee` | `oracle-ee-cdb` | `oracle-se2` | `oracle-se2-cdb` | `sqlserver-ee` | `sqlserver-se` | `sqlserver-web` | `sqlserver-ex` | `sqlserver-dev-ee` | `sqlserver-dev-se` | `db2-ae` | `db2-ce` | `db2-se`
   *
   * > **Note:** The Developer Edition engines `sqlserver-dev-ee` and `sqlserver-dev-se` support no Multi-AZ DB instance and no read replica. Therefore, a reservation for either engine serves Single-AZ DB instances only.
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The number of DB instances to reserve in each Availability Zone that you list in `AvailabilityZones`. Amazon RDS reserves this number of DB instances in every listed Availability Zone.
   *
   * A Single-AZ DB instance uses one unit of reserved capacity, in one Availability Zone. A Multi-AZ DB instance is one DB instance, and it uses one unit of reserved capacity in each of two Availability Zones. Therefore, a Multi-AZ DB instance uses two units in total. A read replica uses one unit of reserved capacity, in the same way as any other DB instance.
   *
   * Amazon RDS reserves capacity in each Availability Zone separately. Reserved capacity in one Availability Zone can't serve a DB instance in another Availability Zone. A request for a DB instance fails when the Availability Zone of the DB instance has no available capacity.
   *
   * Therefore, set this value to the number of DB instances that you want to run at the same time in one Availability Zone. Don't set it to the number that you want in total.
   *
   * This value multiplied by the number of Availability Zones counts against the DB instances quota for your Amazon Web Services account in the Amazon Web Services Region. Your existing DB instances, and the unused capacity of your other reservations, count against the same quota.
   *
   * To find the value of the DB instances quota, see [Quotas and constraints for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html) in the *Amazon RDS User Guide*.
   *
   * Constraints:
   *
   * - Minimum 1.
   *
   * @public
   */
  CapacityPerAvailabilityZone: number | undefined;

  /**
   * A list of Availability Zones for the reservation.
   *
   * You can't change the Availability Zones of a reservation after you create it. Reserved capacity in an Availability Zone that no DB instance uses stays unused.
   *
   * Constraints:
   *
   * - Must specify one or more Availability Zones.
   * - Each Availability Zone can appear only once.
   * - Each Availability Zone must be in the Amazon Web Services Region of the request.
   * - Each Availability Zone must have capacity for the requested DB instance class.
   * - Must include two or more Availability Zones to use the reservation for a Multi-AZ DB instance.
   * - A DB instance can use reserved capacity only in an Availability Zone that its DB subnet group covers.
   *
   * Example: `us-east-1a`
   *
   * @public
   */
  AvailabilityZones: string[] | undefined;

  /**
   * The date and time when the reservation expires, in Universal Coordinated Time (UTC). If you don't specify a value, the reservation doesn't expire.
   *
   * To change the expiration of an existing reservation, use `ModifyDBCapacityReservation`. That operation takes `EndDateType` along with `EndDate`.
   *
   * Constraints:
   *
   * - Must be a date and time in the future.
   * - For a future-dated reservation, must be at or after `StartDate` plus `CommitmentDuration`. For example, a reservation that starts on 2026-12-01 with a 30-day commitment can't expire before 2026-12-31. To reserve capacity for one calendar month, set `CommitmentDuration` to 30 days or fewer, not to the length of the month.
   *
   * Example: `2026-12-31T23:59:59Z`
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The date and time when the reservation starts, in Universal Coordinated Time (UTC). Specify this parameter to create a future-dated reservation. If you don't specify a value, the reservation starts immediately.
   *
   * A reservation that starts later always carries a capacity commitment. Therefore, a request that specifies `StartDate` must also meet every constraint of a future-dated reservation, including the minimum reserved capacity in each Availability Zone.
   *
   * Constraints:
   *
   * - Must be from 5 to 120 days in the future.
   * - You must also specify `CommitmentDuration`.
   *
   * Example: `2026-12-01T00:00:00Z`
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The length of the capacity commitment that you request for a future-dated reservation, in seconds. Amazon RDS measures this length from `StartDate`.
   *
   * > **Note:** Amazon RDS can grant a shorter capacity commitment than you request. Therefore, read `CommitmentEndDate` in `CommitmentInfo` for the commitment that Amazon RDS granted.
   *
   * The commitment doesn't end the reservation. Specify `EndDate` to set an expiration date. You can't cancel a reservation in the `active` state during the commitment.
   *
   * Constraints:
   *
   * - Minimum 1209600, which is 14 days. For a `db.x` DB instance class, such as `db.x2g.xlarge`, the minimum is 7257600, which is 84 days.
   * - Must be less than 315576000, which is 10 years.
   * - You must also specify `StartDate`.
   *
   * Example: `2592000`
   *
   * @public
   */
  CommitmentDuration?: number | undefined;

  /**
   * The license model to reserve capacity for. Specify this parameter only for RDS for Microsoft SQL Server Enterprise Edition, Standard Edition, and Developer Edition, for RDS for Oracle, or for RDS for Db2 Standard Edition and Advanced Edition. Amazon RDS rejects the request for any other engine. This includes Amazon Aurora, the Web and Express editions of RDS for Microsoft SQL Server, and RDS for Db2 Community Edition.
   *
   * Valid Values:
   *
   * - RDS for Microsoft SQL Server Enterprise Edition and Standard Edition - `license-included | bring-your-own-media`
   * - RDS for Microsoft SQL Server Developer Edition - `bring-your-own-license`
   * - RDS for Oracle - `bring-your-own-license | license-included`
   * - RDS for Db2 Standard Edition and Advanced Edition - `bring-your-own-license | marketplace-license`
   *
   * A DB instance launches into the reservation only when the license model of the DB instance matches the license model of the reservation. For a reservation that holds no license model, Amazon RDS applies no license model check at launch.
   *
   * For RDS for Microsoft SQL Server Enterprise Edition and Standard Edition, if you don't specify a value, Amazon RDS uses `license-included`.
   *
   * For RDS for Microsoft SQL Server Developer Edition, if you don't specify a value, Amazon RDS uses `bring-your-own-license`. That is the only license model that these engines accept, and Amazon RDS rejects any other value.
   *
   * For RDS for Oracle, if you don't specify a value, Amazon RDS uses the only orderable license model for the DB instance class. If more than one license model is orderable, you must specify one.
   *
   * For RDS for Db2 Standard Edition and Advanced Edition, if you don't specify a value, Amazon RDS uses `bring-your-own-license`. To reserve capacity for Db2 DB instances that you license through Amazon Web Services Marketplace, specify `marketplace-license`.
   *
   * > **Note:** For RDS for Oracle, the license models that you can reserve depend on the engine and the DB instance class. RDS for Oracle Enterprise Edition doesn't support `license-included`.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * Tags to assign to the DB capacity reservation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBCapacityReservationResponse {
  /**
   * Contains the details of the newly created DB capacity reservation.
   *
   * @public
   */
  DBCapacityReservation?: DBCapacityReservation | undefined;
}

/**
 * Contains information about an Amazon Web Services Identity and Access Management (IAM) role to associate with a DB cluster. You can specify this structure in the `AssociatedRoles` parameter of CreateDBCluster, RestoreDBClusterFromS3, RestoreDBClusterFromSnapshot, and RestoreDBClusterToPointInTime.
 *
 * @public
 */
export interface DBClusterAssociatedRole {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the DB cluster.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the feature associated with the IAM role. For information about supported feature names, see DBEngineVersion.
   *
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * Reserved for future use.
 *
 * @public
 */
export interface RdsCustomClusterConfiguration {
  /**
   * Reserved for future use.
   *
   * @public
   */
  InterconnectSubnetId?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  ReplicaMode?: ReplicaMode | undefined;
}

/**
 * Contains the scaling configuration of an Aurora Serverless v1 DB cluster.
 *
 * For more information, see [Using Amazon Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface ScalingConfiguration {
  /**
   * The minimum capacity for an Aurora DB cluster in `serverless` DB engine mode.
   *
   * For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
   *
   * For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
   *
   * The minimum capacity must be less than or equal to the maximum capacity.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum capacity for an Aurora DB cluster in `serverless` DB engine mode.
   *
   * For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
   *
   * For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
   *
   * The maximum capacity must be greater than or equal to the minimum capacity.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in `serverless` DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).
   *
   * > **Note:** If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.
   *
   * @public
   */
  AutoPause?: boolean | undefined;

  /**
   * The time, in seconds, before an Aurora DB cluster in `serverless` mode is paused.
   *
   * Specify a value between 300 and 86,400 seconds.
   *
   * @public
   */
  SecondsUntilAutoPause?: number | undefined;

  /**
   * The action to take when the timeout is reached, either `ForceApplyCapacityChange` or `RollbackCapacityChange`.
   *
   * `ForceApplyCapacityChange` sets the capacity to the specified value as soon as possible.
   *
   * `RollbackCapacityChange`, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
   *
   * > **Important:** If you specify `ForceApplyCapacityChange`, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
   *
   * For more information, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TimeoutAction?: string | undefined;

  /**
   * The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.
   *
   * Specify a value between 60 and 600 seconds.
   *
   * @public
   */
  SecondsBeforeTimeout?: number | undefined;
}

/**
 * Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
 *
 * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface ServerlessV2ScalingConfiguration {
  /**
   * The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 32, 32.5, 33, and so on. The largest value that you can use is 256 for recent Aurora versions, or 128 for older versions. You can check the attributes of your engine version or platform version to determine the specific maximum capacity supported.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it.
   *
   * Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.
   *
   * @public
   */
  SecondsUntilAutoPause?: number | undefined;
}

/**
 * The tags to apply to resources when creating or modifying a DB instance or DB cluster. When you specify a tag, you must specify the resource type to tag, otherwise the request will fail.
 *
 * @public
 */
export interface TagSpecification {
  /**
   * The type of resource to tag on creation.
   *
   * Valid Values:
   *
   * - `auto-backup` - The DB instance's automated backup.
   * - `cluster-auto-backup` - The DB cluster's automated backup.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterMessage {
  /**
   * A list of Availability Zones (AZs) where you specifically want to create DB instances in the DB cluster.
   *
   * For the first three DB instances that you create, RDS distributes each DB instance to a different AZ that you specify. For additional DB instances that you create, RDS randomly distributes them to the AZs that you specified. For example, if you create a DB cluster with one writer instance and three reader instances, RDS might distribute the writer instance to AZ 1, the first reader instance to AZ 2, the second reader instance to AZ 3, and the third reader instance to either AZ 1, AZ 2, or AZ 3.
   *
   * For more information, see [Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.AvailabilityZones) and [High availability for Aurora DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Concepts.AuroraHighAvailability.Instances) in the *Amazon Aurora User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * Constraints:
   *
   * - Can't specify more than three AZs.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The number of days for which automated backups are retained.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Default: `1`
   *
   * Constraints:
   *
   * - Must be a value from 1 to 35.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The name of the character set (`CharacterSet`) to associate the DB cluster with.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The name for your database of up to 64 alphanumeric characters. A database named `postgres` is always created. If this parameter is specified, an additional database with this name is created.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The identifier for this DB cluster. This parameter is stored as a lowercase string.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 (for Aurora DB clusters) or 1 to 52 (for Multi-AZ DB clusters) letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster1`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The name of the DB cluster parameter group to associate with this DB cluster. If you don't specify a value, then the default DB cluster parameter group for the specified DB engine and version is used.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DB cluster parameter group.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A list of EC2 VPC security groups to associate with this DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * A DB subnet group to associate with this DB cluster.
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must match the name of an existing DB subnet group.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The database engine to use for this DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values:
   *
   * - `aurora-mysql`
   * - `aurora-postgresql`
   * - `mysql`
   * - `postgres`
   * - `neptune` - For information about using Amazon Neptune, see the [*Amazon Neptune User Guide*](https://docs.aws.amazon.com/neptune/latest/userguide/intro.html).
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The version number of the database engine to use.
   *
   * To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (MySQL 8.0-compatible), use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
   *
   * You can supply either `5.7` or `8.0` to use the default engine version for Aurora MySQL version 2 or version 3, respectively.
   *
   * To list all of the available engine versions for Aurora PostgreSQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for RDS for MySQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for RDS for PostgreSQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"`
   *
   * For information about a specific engine, see the following topics:
   *
   * - Aurora MySQL - see [Database engine updates for Amazon Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the *Amazon Aurora User Guide*.
   * - Aurora PostgreSQL - see [Amazon Aurora PostgreSQL releases and engine versions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the *Amazon Aurora User Guide*.
   * - RDS for MySQL - see [Amazon RDS for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide*.
   * - RDS for PostgreSQL - see [Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The port number on which the instances in the DB cluster accept connections.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values: `1150-65535`
   *
   * Default:
   *
   * - RDS for MySQL and Aurora MySQL - `3306`
   * - RDS for PostgreSQL and Aurora PostgreSQL - `5432`
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the master user for the DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must be 1 to 16 letters or numbers.
   * - First character must be a letter.
   * - Can't be a reserved word for the chosen database engine.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The password for the master database user.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must contain from 8 to 41 characters.
   * - Can contain any printable ASCII character except "/", """, or "@".
   * - Can't be specified if `ManageMasterUserPassword` is turned on.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The option group to associate the DB cluster with.
   *
   * DB clusters are associated with a default option group that can't be modified.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled using the `BackupRetentionPeriod` parameter.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide*.
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
   * The weekly time range during which system maintenance can occur.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see [Adjusting the Preferred DB Cluster Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide*.
   *
   * Constraints:
   *
   * - Must be in the format `ddd:hh24:mi-ddd:hh24:mi`.
   * - Days must be one of `Mon | Tue | Wed | Thu | Fri | Sat | Sun`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * Tags to assign to the DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies whether the DB cluster is encrypted.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted DB cluster.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * When a KMS key isn't specified in `KmsKeyId`:
   *
   * - If `ReplicationSourceIdentifier` identifies an encrypted source, then Amazon RDS uses the KMS key used to encrypt the source. Otherwise, Amazon RDS uses your default KMS key.
   * - If the `StorageEncrypted` parameter is enabled and `ReplicationSourceIdentifier` isn't specified, then Amazon RDS uses your default KMS key.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * If you create a read replica of an encrypted DB cluster in another Amazon Web Services Region, make sure to set `KmsKeyId` to a KMS key identifier that is valid in the destination Amazon Web Services Region. This KMS key is used to encrypt the read replica in that Amazon Web Services Region.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * When you are replicating a DB cluster from one Amazon Web Services GovCloud (US) Region to another, an URL that contains a Signature Version 4 signed request for the `CreateDBCluster` operation to be called in the source Amazon Web Services Region where the DB cluster is replicated from. Specify `PreSignedUrl` only when you are performing cross-Region replication from an encrypted DB cluster.
   *
   * The presigned URL must be a valid request for the `CreateDBCluster` API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster to copy.
   *
   * The presigned URL request must contain the following parameter values:
   *
   * - `KmsKeyId` - The KMS key identifier for the KMS key to use to encrypt the copy of the DB cluster in the destination Amazon Web Services Region. This should refer to the same KMS key for both the `CreateDBCluster` operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL.
   * - `DestinationRegion` - The name of the Amazon Web Services Region that Aurora read replica will be created in.
   * - `ReplicationSourceIdentifier` - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster from the us-west-2 Amazon Web Services Region, then your `ReplicationSourceIdentifier` would look like Example: `arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1`.
   *
   * To learn how to generate a Signature Version 4 signed request, see [Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html) and [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * > **Note:** If you are using an Amazon Web Services SDK tool or the CLI, you can specify `SourceRegion` (or `--source-region` for the CLI) instead of specifying `PreSignedUrl` manually. Specifying `SourceRegion` autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide* or [IAM database authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The target backtrack window, in seconds. To disable backtracking, set this value to `0`.
   *
   * Valid for Cluster Type: Aurora MySQL DB clusters only
   *
   * Default: `0`
   *
   * Constraints:
   *
   * - If specified, this value must be set to a number from 0 to 259,200 (72 hours).
   *
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * The list of log types that need to be enabled for exporting to CloudWatch Logs.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * The following values are valid for each DB engine:
   *
   * - Aurora MySQL - `audit | error | general | instance | slowquery | iam-db-auth-error`
   * - Aurora PostgreSQL - `instance | postgresql | iam-db-auth-error`
   * - RDS for MySQL - `error | general | slowquery | iam-db-auth-error`
   * - RDS for PostgreSQL - `postgresql | upgrade | iam-db-auth-error`
   *
   * For more information about exporting CloudWatch Logs for Amazon RDS, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * For more information about exporting CloudWatch Logs for Amazon Aurora, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The DB engine mode of the DB cluster, either `provisioned` or `serverless`.
   *
   * The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the `provisioned` engine mode.
   *
   * For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide*:
   *
   * - [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations)
   * - [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html)
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * For DB clusters in `serverless` DB engine mode, the scaling properties of the DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  ScalingConfiguration?: ScalingConfiguration | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example `db.m6gd.xlarge`. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *
   * For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The storage type to associate with the DB cluster.
   *
   * For information on storage types for Aurora DB clusters, see [Storage configurations for Amazon Aurora DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type). For information on storage types for Multi-AZ DB clusters, see [Settings for creating Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings).
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * When specified for a Multi-AZ DB cluster, a value for the `Iops` parameter is required.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values:
   *
   * - Aurora DB clusters - `aurora | aurora-iopt1`
   * - Multi-AZ DB clusters - `io1 | io2 | gp3`
   *
   * Default:
   *
   * - Aurora DB clusters - `aurora`
   * - Multi-AZ DB clusters - `io1`
   *
   * > **Note:** When you create an Aurora DB cluster with the storage type set to `aurora-iopt1`, the storage type is returned in the response. The storage type isn't returned when you set it to `aurora`.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
   *
   * For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * Constraints:
   *
   * - Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies whether the DB cluster is publicly accessible.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings.
   *
   * When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
   *
   * The default behavior when `PubliclyAccessible` is not specified depends on whether a `DBSubnetGroup` is specified.
   *
   * If `DBSubnetGroup` isn't specified, `PubliclyAccessible` defaults to `true`.
   *
   * If `DBSubnetGroup` is specified, `PubliclyAccessible` defaults to `false` unless the value of `DBSubnetGroup` is `default`, in which case `PubliclyAccessible` defaults to `true`.
   *
   * If `PubliclyAccessible` is true and the VPC that the `DBSubnetGroup` is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Specifies whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled.
   *
   * When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
   *
   * For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  EnableHttpEndpoint?: boolean | undefined;

  /**
   * Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The Active Directory directory ID to create the DB cluster in.
   *
   * For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
   *
   * For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The name of the IAM role to use when making API calls to the Directory Service.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
   *
   * You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  EnableGlobalWriteForwarding?: boolean | undefined;

  /**
   * The network type of the DB cluster.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * Valid Values: `IPV4 | DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
   *
   * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify `0`.
   *
   * If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
   *
   * Default: `0`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
   *
   * If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * The mode of Database Insights to enable for the DB cluster.
   *
   * If you set this value to `advanced`, you must also set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * Specifies whether to turn on Performance Insights for the DB cluster.
   *
   * For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * If you specify a retention period that isn't valid, such as `94`, Amazon RDS issues an error.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * Specifies whether to enable Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.
   *
   * Valid for: Aurora DB clusters only
   *
   * > **Note:** This setting is no longer used. Instead use the `ClusterScalabilityType` setting.
   *
   * @public
   */
  EnableLimitlessDatabase?: boolean | undefined;

  /**
   * Specifies the scalability mode of the Aurora DB cluster. When set to `limitless`, the cluster operates as an Aurora Limitless Database. When set to `standard` (the default), the cluster uses normal DB instance creation.
   *
   * Valid for: Aurora DB clusters only
   *
   * > **Note:** You can't modify this setting after you create the DB cluster.
   *
   * @public
   */
  ClusterScalabilityType?: ClusterScalabilityType | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  EnableLocalWriteForwarding?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB cluster.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * If you don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * The CA certificate identifier to use for the DB cluster's server certificate.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The lifecycle type for this DB cluster.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.
   *
   * You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:
   *
   * - Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
   * - Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * Tags to assign to resources associated with the DB cluster.
   *
   * Valid Values:
   *
   * - `cluster-auto-backup` - The DB cluster's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.
   *
   * You can specify one of the following values:
   *
   * - `password` - Use standard database authentication with a password.
   * - `iam-db-auth` - Use IAM database authentication for the master user.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.
   *
   * @public
   */
  MasterUserAuthenticationType?: MasterUserAuthenticationType | undefined;

  /**
   * Specifies to create an Aurora DB Cluster with express configuration in seconds. Express configuration provides a cluster with a writer instance and feature specific values set to all other input parameters of this API.
   *
   * Valid for Cluster Type: Aurora DB clusters
   *
   * @public
   */
  WithExpressConfiguration?: boolean | undefined;

  /**
   * A list of Amazon Web Services Identity and Access Management (IAM) roles to associate with the DB cluster. Each role grants the DB cluster permission to access other Amazon Web Services on your behalf. For each role, specify a role ARN and, optionally, the feature name (such as `s3Import`, `s3Export`, or `Lambda`).
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  AssociatedRoles?: DBClusterAssociatedRole[] | undefined;
}

/**
 * Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB cluster.
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
   * - `ACTIVE` - the IAM role ARN is associated with the DB cluster and can be used to access other Amazon Web Services on your behalf.
   * - `PENDING` - the IAM role ARN is being associated with the DB cluster.
   * - `INVALID` - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable to assume the IAM role in order to access other Amazon Web Services on your behalf.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The name of the feature associated with the Amazon Web Services Identity and Access Management (IAM) role. For information about supported feature names, see DBEngineVersion.
   *
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * The details of the DB instance’s server certificate.
 *
 * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
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
   * Indicates whether the cluster member is the primary DB instance for the DB cluster.
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
   * A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  PromotionTier?: number | undefined;
}

/**
 * Contains status information for a DB cluster option group.
 *
 * @public
 */
export interface DBClusterOptionGroupStatus {
  /**
   * Specifies the name of the DB cluster option group.
   *
   * @public
   */
  DBClusterOptionGroupName?: string | undefined;

  /**
   * Specifies the status of the DB cluster option group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * An Active Directory Domain membership record associated with the DB instance or cluster.
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
   * The status of the Active Directory Domain membership for the DB instance or cluster. Values include `joined`, `pending-join`, `failed`, and so on.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of the Active Directory Domain.
   *
   * @public
   */
  FQDN?: string | undefined;

  /**
   * The name of the IAM role used when making API calls to the Directory Service.
   *
   * @public
   */
  IAMRoleName?: string | undefined;

  /**
   * The Active Directory organizational unit for the DB instance or cluster.
   *
   * @public
   */
  OU?: string | undefined;

  /**
   * The ARN for the Secrets Manager secret with the credentials for the user that's a member of the domain.
   *
   * @public
   */
  AuthSecretArn?: string | undefined;

  /**
   * The IPv4 DNS IP addresses of the primary and secondary Active Directory domain controllers.
   *
   * @public
   */
  DnsIps?: string[] | undefined;
}

/**
 * Contains details for Aurora Limitless Database.
 *
 * @public
 */
export interface LimitlessDatabase {
  /**
   * The status of Aurora Limitless Database.
   *
   * @public
   */
  Status?: LimitlessDatabaseStatus | undefined;

  /**
   * The minimum required capacity for Aurora Limitless Database in Aurora capacity units (ACUs).
   *
   * @public
   */
  MinRequiredACU?: number | undefined;
}

/**
 * Contains the secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.
 *
 * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
 *
 * @public
 */
export interface MasterUserSecret {
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
   * - `creating` - The secret is being created.
   * - `active` - The secret is available for normal use and rotation.
   * - `rotating` - The secret is being rotated.
   * - `impaired` - The secret can be used to access database credentials, but it can't be rotated. A secret might have this status if, for example, permissions are changed so that RDS can no longer access either the secret or the KMS key for the secret.
   *
   *   When a secret has this status, you can correct the condition that caused the status. Alternatively, modify the DB instance to turn off automatic management of database credentials, and then modify the DB instance again to turn on automatic management of database credentials.
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
 * A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
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
   * A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
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
   * The master credentials for the DB cluster.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.
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
   * The storage type for the DB cluster.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The allocated storage size in gibibytes (GiB) for all database engines except Amazon Aurora. For Aurora, `AllocatedStorage` always returns 1, because Aurora DB cluster storage size isn't fixed, but instead automatically adjusts as needed.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * The Provisioned IOPS (I/O operations per second) value. This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The details of the DB instance’s server certificate.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CertificateDetails?: CertificateDetails | undefined;
}

/**
 * The scaling configuration for an Aurora DB cluster in `serverless` DB engine mode.
 *
 * For more information, see [Using Amazon Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface ScalingConfigurationInfo {
  /**
   * The minimum capacity for an Aurora DB cluster in `serverless` DB engine mode.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum capacity for an Aurora DB cluster in `serverless` DB engine mode.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * Indicates whether automatic pause is allowed for the Aurora DB cluster in `serverless` DB engine mode.
   *
   * When the value is set to false for an Aurora Serverless v1 DB cluster, the DB cluster automatically resumes.
   *
   * @public
   */
  AutoPause?: boolean | undefined;

  /**
   * The remaining amount of time, in seconds, before the Aurora DB cluster in `serverless` mode is paused. A DB cluster can be paused only when it's idle (it has no connections).
   *
   * @public
   */
  SecondsUntilAutoPause?: number | undefined;

  /**
   * The action that occurs when Aurora times out while attempting to change the capacity of an Aurora Serverless v1 cluster. The value is either `ForceApplyCapacityChange` or `RollbackCapacityChange`.
   *
   * `ForceApplyCapacityChange`, the default, sets the capacity to the specified value as soon as possible.
   *
   * `RollbackCapacityChange` ignores the capacity change if a scaling point isn't found in the timeout period.
   *
   * @public
   */
  TimeoutAction?: string | undefined;

  /**
   * The number of seconds before scaling times out. What happens when an attempted scaling action times out is determined by the `TimeoutAction` setting.
   *
   * @public
   */
  SecondsBeforeTimeout?: number | undefined;
}

/**
 * The scaling configuration for an Aurora Serverless v2 DB cluster.
 *
 * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface ServerlessV2ScalingConfigurationInfo {
  /**
   * The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 32, 32.5, 33, and so on. The largest value that you can use is 256 for recent Aurora versions, or 128 for older versions. You can check the attributes of your engine version or platform version to determine the specific maximum capacity supported.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it. This property is only shown when the minimum capacity for the cluster is set to 0 ACUs. Changing the minimum capacity to a nonzero value removes this property. If you later change the minimum capacity back to 0 ACUs, this property is reset to its default value unless you specify it again.
   *
   * This value ranges between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.
   *
   * @public
   */
  SecondsUntilAutoPause?: number | undefined;
}

/**
 * Reserved for future use.
 *
 * @public
 */
export interface DBClusterStatusInfo {
  /**
   * Reserved for future use.
   *
   * @public
   */
  StatusType?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
 *
 * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
 *
 * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
 *
 * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
 *
 * @public
 */
export interface DBCluster {
  /**
   * `AllocatedStorage` specifies the allocated storage size in gibibytes (GiB). For Aurora, `AllocatedStorage` can vary because Aurora DB cluster storage size adjusts as needed.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The list of Availability Zones (AZs) where instances in the DB cluster can be created.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The number of days for which automatic DB snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * If present, specifies the name of the character set that this cluster is associated with.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The name of the initial database that was specified for the DB cluster when it was created, if one was provided. This same name is returned for the life of the DB cluster.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The user-supplied identifier for the DB cluster. This identifier is the unique key that identifies a DB cluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * The name of the DB cluster parameter group for the DB cluster.
   *
   * @public
   */
  DBClusterParameterGroup?: string | undefined;

  /**
   * Information about the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.
   *
   * @public
   */
  DBSubnetGroup?: string | undefined;

  /**
   * The current state of this DB cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The progress of the operation as a percentage.
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
   * The connection endpoint for the primary instance of the DB cluster.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster.
   *
   * If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.
   *
   * @public
   */
  ReaderEndpoint?: string | undefined;

  /**
   * The custom endpoints associated with the DB cluster.
   *
   * @public
   */
  CustomEndpoints?: string[] | undefined;

  /**
   * Indicates whether the DB cluster has instances in multiple Availability Zones.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The database engine used for this DB cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version of the database engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The latest time to which a database can be restored with point-in-time restore.
   *
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * The port that the database engine is listening on.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The master username for the DB cluster.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The list of option group memberships for this DB cluster.
   *
   * @public
   */
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[] | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * This data type represents the order in which the clusters are upgraded.
   *
   * - [first] - Typically used for development or testing environments.
   * - [second] - Default order for resources not specifically configured.
   * - [last] - Usually reserved for production environments.
   *
   * @public
   */
  UpgradeRolloutOrder?: UpgradeRolloutOrder | undefined;

  /**
   * The identifier of the source DB cluster if this DB cluster is a read replica.
   *
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * Contains one or more identifiers of the read replicas associated with this DB cluster.
   *
   * @public
   */
  ReadReplicaIdentifiers?: string[] | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  StatusInfos?: DBClusterStatusInfo[] | undefined;

  /**
   * The list of DB instances that make up the DB cluster.
   *
   * @public
   */
  DBClusterMembers?: DBClusterMember[] | undefined;

  /**
   * The list of VPC security groups that the DB cluster belongs to.
   *
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * The ID that Amazon Route 53 assigns when you create a hosted zone.
   *
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * Specifies whether the DB cluster is encrypted with an Amazon Web Services managed key or a customer managed key.
   *
   * If the DB cluster is encrypted with an Amazon Web Services owned key, this value is `false` and `StorageEncryptionType` is `sse-rds`. In that case, the data at rest is still encrypted. To determine how the data at rest is protected, use `StorageEncryptionType`.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The type of encryption used to protect data at rest in the DB cluster. Possible values:
   *
   * - `none` - The DB cluster is not encrypted.
   * - `sse-rds` - The DB cluster is encrypted using an Amazon Web Services owned KMS key.
   * - `sse-kms` - The DB cluster is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * If `StorageEncrypted` is enabled, the Amazon Web Services KMS key identifier for the encrypted DB cluster.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Web Services Region-unique, immutable identifier for the DB cluster. This identifier is found in Amazon Web Services CloudTrail log entries whenever the KMS key for the DB cluster is accessed.
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
   * A list of the Amazon Web Services Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
   *
   * @public
   */
  AssociatedRoles?: DBClusterRole[] | undefined;

  /**
   * Indicates whether the mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * The ID of the clone group with which the DB cluster is associated. For newly created clusters, the ID is typically null.
   *
   * If you clone a DB cluster when the ID is null, the operation populates the ID value for the source cluster and the clone because both clusters become part of the same clone group. Even if you delete the clone cluster, the clone group ID remains for the lifetime of the source cluster to show that it was used in a cloning operation.
   *
   * For PITR, the clone group ID is inherited from the source cluster. For snapshot restore operations, the clone group ID isn't inherited from the source cluster.
   *
   * @public
   */
  CloneGroupId?: string | undefined;

  /**
   * The time when the DB cluster was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * The earliest time to which a DB cluster can be backtracked.
   *
   * @public
   */
  EarliestBacktrackTime?: Date | undefined;

  /**
   * The target backtrack window, in seconds. If this value is set to `0`, backtracking is disabled for the DB cluster. Otherwise, backtracking is enabled.
   *
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * The number of change records stored for Backtrack.
   *
   * @public
   */
  BacktrackConsumedChangeRecords?: number | undefined;

  /**
   * A list of log types that this DB cluster is configured to export to CloudWatch Logs.
   *
   * Log types vary by DB engine. For information about the log types for each DB engine, see [Amazon RDS Database Log Files](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html) in the *Amazon Aurora User Guide.*
   *
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * The current capacity of an Aurora Serverless v1 DB cluster. The capacity is `0` (zero) when the cluster is paused.
   *
   * For more information about Aurora Serverless v1, see [Using Amazon Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * Information about pending changes to the DB cluster. This information is returned only when there are pending changes. Specific changes are identified by subelements.
   *
   * @public
   */
  PendingModifiedValues?: ClusterPendingModifiedValues | undefined;

  /**
   * The DB engine mode of the DB cluster, either `provisioned` or `serverless`.
   *
   * For more information, see [CreateDBCluster](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html).
   *
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * The scaling configuration for an Aurora DB cluster in `serverless` DB engine mode.
   *
   * For more information, see [Using Amazon Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  ScalingConfigurationInfo?: ScalingConfigurationInfo | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * The name of the compute and memory capacity class of the DB instance.
   *
   * This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * The storage type associated with the DB cluster.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The Provisioned IOPS (I/O operations per second) value.
   *
   * This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The storage throughput for the DB cluster. The throughput is automatically set based on the IOPS that you provision, and is not configurable.
   *
   * This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The next time you can modify the DB cluster to use the `aurora-iopt1` storage type.
   *
   * This setting is only for Aurora DB clusters.
   *
   * @public
   */
  IOOptimizedNextAllowedModificationTime?: Date | undefined;

  /**
   * Indicates whether the DB cluster is publicly accessible.
   *
   * When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
   *
   * For more information, see CreateDBCluster.
   *
   * This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Indicates whether minor version patches are applied automatically.
   *
   * This setting is for Aurora DB clusters and Multi-AZ DB clusters.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Indicates whether the HTTP endpoint is enabled for an Aurora DB cluster.
   *
   * When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
   *
   * For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  HttpEndpointEnabled?: boolean | undefined;

  /**
   * The mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously.
   *
   * @public
   */
  ActivityStreamMode?: ActivityStreamMode | undefined;

  /**
   * The status of the database activity stream.
   *
   * @public
   */
  ActivityStreamStatus?: ActivityStreamStatus | undefined;

  /**
   * The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  ActivityStreamKmsKeyId?: string | undefined;

  /**
   * The name of the Amazon Kinesis data stream used for the database activity stream.
   *
   * @public
   */
  ActivityStreamKinesisStreamName?: string | undefined;

  /**
   * Indicates whether tags are copied from the DB cluster to snapshots of the DB cluster.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * Indicates whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services account.
   *
   * @public
   */
  CrossAccountClone?: boolean | undefined;

  /**
   * The Active Directory Domain membership records associated with the DB cluster.
   *
   * @public
   */
  DomainMemberships?: DomainMembership[] | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database cluster.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * The status of write forwarding for a secondary cluster in an Aurora global database.
   *
   * @public
   */
  GlobalWriteForwardingStatus?: WriteForwardingStatus | undefined;

  /**
   * Indicates whether write forwarding is enabled for a secondary cluster in an Aurora global database. Because write forwarding takes time to enable, check the value of `GlobalWriteForwardingStatus` to confirm that the request has completed before using the write forwarding feature for this cluster.
   *
   * @public
   */
  GlobalWriteForwardingRequested?: boolean | undefined;

  /**
   * The network type of the DB instance.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
   *
   * This setting is only for Aurora DB clusters.
   *
   * Valid Values: `IPV4 | DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * The time when a stopped DB cluster is restarted automatically.
   *
   * @public
   */
  AutomaticRestartTime?: Date | undefined;

  /**
   * The scaling configuration for an Aurora Serverless v2 DB cluster.
   *
   * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo | undefined;

  /**
   * The version of the Aurora Serverless V2 platform used by the DB cluster. For more information, see [Using Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  ServerlessV2PlatformVersion?: string | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.
   *
   * This setting is only for -Aurora DB clusters and Multi-AZ DB clusters.
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
   *
   * This setting is only for Aurora DB clusters and Multi-AZ DB clusters.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * The mode of Database Insights that is enabled for the DB cluster.
   *
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * Indicates whether Performance Insights is enabled for the DB cluster.
   *
   * This setting is only for Aurora DB clusters and Multi-AZ DB clusters.
   *
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * This setting is only for Aurora DB clusters and Multi-AZ DB clusters.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * This setting is only for Aurora DB clusters and Multi-AZ DB clusters.
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * The secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
   *
   * @public
   */
  MasterUserSecret?: MasterUserSecret | undefined;

  /**
   * Indicates whether an Aurora DB cluster has in-cluster write forwarding enabled, not enabled, requested, or is in the process of enabling it.
   *
   * @public
   */
  LocalWriteForwardingStatus?: LocalWriteForwardingStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.
   *
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * The details for Aurora Limitless Database.
   *
   * @public
   */
  LimitlessDatabase?: LimitlessDatabase | undefined;

  /**
   * The scalability mode of the Aurora DB cluster. When set to `limitless`, the cluster operates as an Aurora Limitless Database. When set to `standard` (the default), the cluster uses normal DB instance creation.
   *
   * @public
   */
  ClusterScalabilityType?: ClusterScalabilityType | undefined;

  /**
   * The details of the DB instance’s server certificate.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CertificateDetails?: CertificateDetails | undefined;

  /**
   * The lifecycle type for the DB cluster.
   *
   * For more information, see CreateDBCluster.
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * Indicates whether the DB cluster uses VPC-based networking.
   *
   * This setting is applicable only for Aurora PostgreSQL clusters created through express configuration.
   *
   * @public
   */
  VPCNetworkingEnabled?: boolean | undefined;

  /**
   * Indicates whether the DB cluster has internet-based connectivity enabled through an internet access gateway.
   *
   * This setting is applicable only for Aurora PostgreSQL clusters created through express configuration.
   *
   * @public
   */
  InternetAccessGatewayEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
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
   * The type of the endpoint, one of: `READER`, `WRITER`, `ANY`.
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
   * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. This parameter is relevant only if the list of static members is empty.
   *
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * The tags to be assigned to the Amazon RDS resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:
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
   * The current status of the endpoint. One of: `creating`, `available`, `deleting`, `inactive`, `modifying`. The `inactive` state applies to an endpoint that can't be used for a certain kind of cluster, such as a `writer` endpoint for a read-only secondary cluster in a global database.
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
   * - Must not match the name of an existing DB cluster parameter group.
   *
   * > **Note:** This value is stored as a lowercase string.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
   *
   * **Aurora MySQL**
   *
   * Example: `aurora-mysql5.7`, `aurora-mysql8.0`
   *
   * **Aurora PostgreSQL**
   *
   * Example: `aurora-postgresql14`
   *
   * **RDS for MySQL**
   *
   * Example: `mysql8.0`
   *
   * **RDS for PostgreSQL**
   *
   * Example: `postgres13`
   *
   * To list all of the available parameter group families for a DB engine, use the following command:
   *
   * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
   *
   * For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:
   *
   * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql`
   *
   * > **Note:** The output contains duplicates.
   *
   * The following are the valid DB engine values:
   *
   * - `aurora-mysql`
   * - `aurora-postgresql`
   * - `mysql`
   * - `postgres`
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
   * Tags to assign to the DB cluster parameter group.
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
   * Contains the details of an Amazon RDS DB cluster parameter group.
   *
   * This data type is used as a response element in the `DescribeDBClusterParameterGroups` action.
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
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster1-snapshot1`
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * The identifier of the DB cluster to create a snapshot for. This parameter isn't case-sensitive.
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
   * Contains the details for an Amazon RDS DB cluster snapshot
   *
   * This data type is used as a response element in the `DescribeDBClusterSnapshots` action.
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
   * The meaning of this parameter differs according to the database engine you use.
   *
   * - **Amazon Aurora MySQL**
   *
   *   The name of the database to create when the primary DB instance of the Aurora MySQL DB cluster is created. If this parameter isn't specified for an Aurora MySQL DB cluster, no database is created in the DB cluster.
   *
   *   Constraints:
   *
   *   - Must contain 1 to 64 alphanumeric characters.
   *   - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
   *   - Can't be a word reserved by the database engine.
   *
   * - **Amazon Aurora PostgreSQL**
   *
   *   The name of the database to create when the primary DB instance of the Aurora PostgreSQL DB cluster is created. A database named `postgres` is always created. If this parameter is specified, an additional database with this name is created.
   *
   *   Constraints:
   *
   *   - It must contain 1 to 63 alphanumeric characters.
   *   - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0 to 9).
   *   - Can't be a word reserved by the database engine.
   *
   * - **Amazon RDS Custom for Oracle**
   *
   *   The Oracle System ID (SID) of the created RDS Custom DB instance. If you don't specify a value, the default value is `ORCL` for non-CDBs and `RDSCDB` for CDBs.
   *
   *   Default: `ORCL`
   *
   *   Constraints:
   *
   *   - Must contain 1 to 8 alphanumeric characters.
   *   - Must contain a letter.
   *   - Can't be a word reserved by the database engine.
   *
   * - **Amazon RDS Custom for SQL Server**
   *
   *   Not applicable. Must be null.
   *
   * - **RDS for Db2**
   *
   *   The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. In some cases, we recommend that you don't add a database name. For more information, see [Additional considerations](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-db-instance-prereqs.html#db2-prereqs-additional-considerations) in the *Amazon RDS User Guide*.
   *
   *   Constraints:
   *
   *   - Must contain 1 to 64 letters or numbers.
   *   - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
   *   - Can't be a word reserved by the specified database engine.
   *
   * - **RDS for MariaDB**
   *
   *   The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
   *
   *   Constraints:
   *
   *   - Must contain 1 to 64 letters or numbers.
   *   - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
   *   - Can't be a word reserved by the specified database engine.
   *
   * - **RDS for MySQL**
   *
   *   The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
   *
   *   Constraints:
   *
   *   - Must contain 1 to 64 letters or numbers.
   *   - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
   *   - Can't be a word reserved by the specified database engine.
   *
   * - **RDS for Oracle**
   *
   *   The Oracle System ID (SID) of the created DB instance. If you don't specify a value, the default value is `ORCL`. You can't specify the string `null`, or any other reserved word, for `DBName`.
   *
   *   Default: `ORCL`
   *
   *   Constraints:
   *
   *   - Can't be longer than 8 characters.
   *
   * - **RDS for PostgreSQL**
   *
   *   The name of the database to create when the DB instance is created. A database named `postgres` is always created. If this parameter is specified, an additional database with this name is created.
   *
   *   Constraints:
   *
   *   - Must contain 1 to 63 letters, numbers, or underscores.
   *   - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
   *   - Can't be a word reserved by the specified database engine.
   *
   * - **RDS for SQL Server**
   *
   *   Not applicable. Must be null.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * The identifier for this DB instance. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `mydbinstance`
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The amount of storage in gibibytes (GiB) to allocate for the DB instance.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
   *
   * - **Amazon RDS Custom**
   *
   *   Constraints to the amount of storage for each storage type are the following:
   *
   *   - General Purpose (SSD) storage (gp2, gp3): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server.
   *   - Provisioned IOPS storage (io1, io2): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server.
   *
   * - **RDS for Db2**
   *
   *   Constraints to the amount of storage for each storage type are the following:
   *
   *   - General Purpose (SSD) storage (gp3): Must be an integer from 20 to 65536.
   *   - Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.
   *
   * - **RDS for MariaDB**
   *
   *   Constraints to the amount of storage for each storage type are the following:
   *
   *   - General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536.
   *   - Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.
   *   - Magnetic storage (standard): Must be an integer from 5 to 3072.
   *
   * - **RDS for MySQL**
   *
   *   Constraints to the amount of storage for each storage type are the following:
   *
   *   - General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536.
   *   - Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.
   *   - Magnetic storage (standard): Must be an integer from 5 to 3072.
   *
   * - **RDS for Oracle**
   *
   *   Constraints to the amount of storage for each storage type are the following:
   *
   *   - General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536.
   *   - Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.
   *   - Magnetic storage (standard): Must be an integer from 10 to 3072.
   *
   * - **RDS for PostgreSQL**
   *
   *   Constraints to the amount of storage for each storage type are the following:
   *
   *   - General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536.
   *   - Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.
   *   - Magnetic storage (standard): Must be an integer from 5 to 3072.
   *
   * - **RDS for SQL Server**
   *
   *   Constraints to the amount of storage for each storage type are the following:
   *
   *   - General Purpose (SSD) storage (gp2, gp3):
   *
   *     - Enterprise and Standard editions: Must be an integer from 20 to 16384.
   *     - Web and Express editions: Must be an integer from 20 to 16384.
   *   - Provisioned IOPS storage (io1, io2):
   *
   *     - Enterprise and Standard editions: Must be an integer from 100 to 16384.
   *     - Web and Express editions: Must be an integer from 100 to 16384.
   *   - Magnetic storage (standard):
   *
   *     - Enterprise and Standard editions: Must be an integer from 20 to 1024.
   *     - Web and Express editions: Must be an integer from 20 to 1024.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The compute and memory capacity of the DB instance, for example `db.m5.large`. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * The database engine to use for this DB instance.
   *
   * Not every database engine is available in every Amazon Web Services Region.
   *
   * Valid Values:
   *
   * - `aurora-mysql` (for Aurora MySQL DB instances)
   * - `aurora-postgresql` (for Aurora PostgreSQL DB instances)
   * - `custom-oracle-ee` (for RDS Custom for Oracle DB instances)
   * - `custom-oracle-ee-cdb` (for RDS Custom for Oracle DB instances)
   * - `custom-oracle-se2` (for RDS Custom for Oracle DB instances)
   * - `custom-oracle-se2-cdb` (for RDS Custom for Oracle DB instances)
   * - `custom-sqlserver-ee` (for RDS Custom for SQL Server DB instances)
   * - `custom-sqlserver-se` (for RDS Custom for SQL Server DB instances)
   * - `custom-sqlserver-web` (for RDS Custom for SQL Server DB instances)
   * - `custom-sqlserver-dev` (for RDS Custom for SQL Server DB instances)
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-dev-ee`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The name for the master user.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The name for the master user is managed by the DB cluster.
   *
   * This setting is required for RDS DB instances.
   *
   * Constraints:
   *
   * - Must be 1 to 16 letters, numbers, or underscores.
   * - First character must be a letter.
   * - Can't be a reserved word for the chosen database engine.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The password for the master user.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The password for the master user is managed by the DB cluster.
   *
   * Constraints:
   *
   * - Can't be specified if `ManageMasterUserPassword` is turned on.
   * - Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&amp;" (ampersand) or the "'" (single quotes) character.
   *
   * Length Constraints:
   *
   * - RDS for Db2 - Must contain from 8 to 255 characters.
   * - RDS for MariaDB - Must contain from 8 to 41 characters.
   * - RDS for Microsoft SQL Server - Must contain from 8 to 128 characters.
   * - RDS for MySQL - Must contain from 8 to 41 characters.
   * - RDS for Oracle - Must contain from 8 to 30 characters.
   * - RDS for PostgreSQL - Must contain from 8 to 128 characters.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * A list of DB security groups to associate with this DB instance.
   *
   * This setting applies to the legacy EC2-Classic platform, which is no longer used to create new DB instances. Use the `VpcSecurityGroupIds` setting instead.
   *
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * A list of Amazon EC2 VPC security groups to associate with this DB instance.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The associated list of EC2 VPC security groups is managed by the DB cluster.
   *
   * Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The Availability Zone (AZ) where the database will be created. For information on Amazon Web Services Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
   *
   * For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
   *
   * Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.
   *
   * Constraints:
   *
   * - The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment.
   * - The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint.
   *
   * Example: `us-east-1d`
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * A DB subnet group to associate with this DB instance.
   *
   * Constraints:
   *
   * - Must match the name of an existing DB subnet group.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The time range each week during which system maintenance can occur. For more information, see [Amazon RDS Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance) in the *Amazon RDS User Guide.*
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.
   *
   * Constraints:
   *
   * - Must be in the format `ddd:hh24:mi-ddd:hh24:mi`.
   * - The day values must be `mon | tue | wed | thu | fri | sat | sun`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred backup window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The name of the DB parameter group to associate with this DB instance. If you don't specify a value, then Amazon RDS uses the default DB parameter group for the specified DB engine and version.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to `0` disables automated backups.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB cluster.
   *
   * Default: `1`
   *
   * Constraints:
   *
   * - Must be a value from 0 to 35.
   * - Can't be set to 0 if the DB instance is a source to read replicas.
   * - Can't be set to 0 for an RDS Custom for Oracle DB instance.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by the DB cluster.
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
   * The port number on which the database accepts connections.
   *
   * This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.
   *
   * Valid Values: `1150-65535`
   *
   * Default:
   *
   * - RDS for Db2 - `50000`
   * - RDS for MariaDB - `3306`
   * - RDS for Microsoft SQL Server - `1433`
   * - RDS for MySQL - `3306`
   * - RDS for Oracle - `1521`
   * - RDS for PostgreSQL - `5432`
   *
   * Constraints:
   *
   * - For RDS for Microsoft SQL Server, the value can't be `1234`, `1434`, `3260`, `3343`, `3389`, `47001`, or `49152-49156`.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies whether the DB instance is a Multi-AZ deployment. You can't set the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
   *
   * This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The version number of the database engine to use.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The version number of the database engine the DB instance uses is managed by the DB cluster.
   *
   * For a list of valid engine versions, use the `DescribeDBEngineVersions` operation.
   *
   * The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every Amazon Web Services Region.
   *
   * - **Amazon RDS Custom for Oracle**
   *
   *   A custom engine version (CEV) that you have previously created. This setting is required for RDS Custom for Oracle. The CEV name has the following format: 19.*customized_string*. A valid CEV name is `19.my_cev1`. For more information, see [Creating an RDS Custom for Oracle DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-creating.html#custom-creating.create) in the *Amazon RDS User Guide*.
   *
   * - **Amazon RDS Custom for SQL Server**
   *
   *   See [RDS Custom for SQL Server general requirements](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits-MS.html) in the *Amazon RDS User Guide*.
   *
   * - **RDS for Db2**
   *
   *   For information, see [Db2 on Amazon RDS versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt) in the *Amazon RDS User Guide*.
   *
   * - **RDS for MariaDB**
   *
   *   For information, see [MariaDB on Amazon RDS versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the *Amazon RDS User Guide*.
   *
   * - **RDS for Microsoft SQL Server**
   *
   *   For information, see [Microsoft SQL Server versions on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the *Amazon RDS User Guide*.
   *
   * - **RDS for MySQL**
   *
   *   For information, see [MySQL on Amazon RDS versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide*.
   *
   * - **RDS for Oracle**
   *
   *   For information, see [Oracle Database Engine release notes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the *Amazon RDS User Guide*.
   *
   * - **RDS for PostgreSQL**
   *
   *   For information, see [Amazon RDS for PostgreSQL versions and extensions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Specifies whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.
   *
   * If you create an RDS Custom DB instance, you must set `AutoMinorVersionUpgrade` to `false`.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The license model information for this DB instance.
   *
   * > **Note:**
   * >
   * > License models for RDS for Db2 require additional configuration. The bring your own license (BYOL) model requires a custom parameter group and an Amazon Web Services License Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model requires an Amazon Web Services Marketplace subscription. For more information, see [Amazon RDS for Db2 licensing options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide*.
   * >
   * > The default for RDS for Db2 is `bring-your-own-license`.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * Valid Values:
   *
   * - RDS for Db2 - `bring-your-own-license | marketplace-license`
   * - RDS for MariaDB - `general-public-license`
   * - RDS for Microsoft SQL Server - `license-included | bring-your-own-media`
   * - RDS for MySQL - `general-public-license`
   * - RDS for Oracle - `bring-your-own-license | license-included`
   * - RDS for PostgreSQL - `postgresql-license`
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance. For information about valid IOPS values, see [Amazon RDS DB instance storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
   *
   * Constraints:
   *
   * - For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
   * - For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The storage throughput value, in mebibyte per second (MiBps), for the DB instance.
   *
   * This setting applies only to the `gp3` storage type.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The option group to associate the DB instance with.
   *
   * Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance after it is associated with a DB instance.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * For supported engines, the character set (`CharacterSet`) to associate the DB instance with.
   *
   * This setting doesn't apply to the following DB instances:
   *
   * - Amazon Aurora - The character set is managed by the DB cluster. For more information, see `CreateDBCluster`.
   * - RDS Custom - However, if you need to change the character set, you can change it on the database itself.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The name of the NCHAR character set for the Oracle DB instance.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * Specifies whether the DB instance is publicly accessible.
   *
   * When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is controlled by its security group settings.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * The default behavior when `PubliclyAccessible` is not specified depends on whether a `DBSubnetGroup` is specified.
   *
   * If `DBSubnetGroup` isn't specified, `PubliclyAccessible` defaults to `false` for Aurora instances and `true` for non-Aurora instances.
   *
   * If `DBSubnetGroup` is specified, `PubliclyAccessible` defaults to `false` unless the value of `DBSubnetGroup` is `default`, in which case `PubliclyAccessible` defaults to `true`.
   *
   * If `PubliclyAccessible` is true and the VPC that the `DBSubnetGroup` is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Tags to assign to the DB instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The identifier of the DB cluster that this DB instance will belong to.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * The storage type to associate with the DB instance.
   *
   * If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
   *
   * Valid Values: `gp2 | gp3 | io1 | io2 | standard`
   *
   * Default: `io1`, if the `Iops` parameter is specified. Otherwise, `gp3`.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The ARN from the key store with which to associate the instance for TDE encryption.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * The password for the given ARN from the key store in order to access the device.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * Specifes whether the DB instance is encrypted. By default, it isn't encrypted.
   *
   * For RDS Custom DB instances, either enable this setting or leave it unset. Otherwise, Amazon RDS reports an error.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The encryption for DB instances is managed by the DB cluster.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted DB instance.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The Amazon Web Services KMS key identifier is managed by the DB cluster. For more information, see `CreateDBCluster`.
   *
   * If `StorageEncrypted` is enabled, and you do not specify a value for the `KmsKeyId` parameter, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * For Amazon RDS Custom, a KMS key is required for DB instances. For most RDS engines, if you leave this parameter empty while enabling `StorageEncrypted`, the engine uses the default KMS key. However, RDS Custom doesn't use the default key when this parameter is empty. You must explicitly specify a key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Active Directory directory ID to create the DB instance in. Currently, you can create only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.
   *
   * For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to the following DB instances:
   *
   * - Amazon Aurora (The domain is managed by the DB cluster.)
   * - RDS Custom
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of an Active Directory domain.
   *
   * Constraints:
   *
   * - Can't be longer than 64 characters.
   *
   * Example: `mymanagedADtest.mymanagedAD.mydomain`
   *
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * The Active Directory organizational unit for your DB instance to join.
   *
   * Constraints:
   *
   * - Must be in the distinguished name format.
   * - Can't be longer than 64 characters.
   *
   * Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`
   *
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
   *
   * Example: `arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456`
   *
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
   *
   * Constraints:
   *
   * - Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
   *
   * Example: `123.124.125.126,234.235.236.237`
   *
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * Specifies whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify `0`.
   *
   * If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than `0`.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
   *
   * Default: `0`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
   *
   * If `MonitoringInterval` is set to a value other than `0`, then you must supply a `MonitoringRoleArn` value.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * The name of the IAM role to use when making API calls to the Directory Service.
   *
   * This setting doesn't apply to the following DB instances:
   *
   * - Amazon Aurora (The domain is managed by the DB cluster.)
   * - RDS Custom
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Default: `1`
   *
   * Valid Values: `0 - 15`
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * The time zone of the DB instance. The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * For more information, see [IAM Database Authentication for MySQL and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to the following DB instances:
   *
   * - Amazon Aurora (Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster.)
   * - RDS Custom
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The mode of Database Insights to enable for the DB instance.
   *
   * > **Note:** Aurora DB instances inherit this value from the DB cluster, so you can't change this value.
   *
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * Specifies whether to enable Performance Insights for the DB instance. For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * If you specify a retention period that isn't valid, such as `94`, Amazon RDS returns an error.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * The list of log types to enable for exporting to CloudWatch Logs. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to the following DB instances:
   *
   * - Amazon Aurora (CloudWatch Logs exports are managed by the DB cluster.)
   * - RDS Custom
   *
   * The following values are valid for each DB engine:
   *
   * - RDS for Db2 - `diag.log | notify.log | iam-db-auth-error`
   * - RDS for MariaDB - `audit | error | general | slowquery | iam-db-auth-error`
   * - RDS for Microsoft SQL Server - `agent | error`
   * - RDS for MySQL - `audit | error | general | slowquery | iam-db-auth-error`
   * - RDS for Oracle - `alert | audit | listener | trace | oemagent`
   * - RDS for PostgreSQL - `postgresql | upgrade | iam-db-auth-error`
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
   *
   * This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see `CreateDBCluster`. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to the following DB instances:
   *
   * - Amazon Aurora (Storage is managed by the DB cluster.)
   * - RDS Custom
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.
   *
   * A *CoIP* provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network.
   *
   * For more information about RDS on Outposts, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * For more information about CoIPs, see [Customer-owned IP addresses](https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing) in the *Amazon Web Services Outposts User Guide*.
   *
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * The network type of the DB instance.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
   *
   * Valid Values: `IPV4 | DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * The location for storing automated backups and manual snapshots.
   *
   * Valid Values:
   *
   * - `local` (Dedicated Local Zone)
   * - `outposts` (Amazon Web Services Outposts)
   * - `region` (Amazon Web Services Region)
   *
   * Default: `region`
   *
   * For more information, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
   *
   * This setting is required for RDS Custom.
   *
   * Constraints:
   *
   * - The profile must exist in your account.
   * - The profile must have an IAM role that Amazon EC2 has permissions to assume.
   * - The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.
   *
   * For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to `RDSCDB`. The Oracle SID is also the name of your CDB.
   *
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * The CA certificate identifier to use for the DB instance's server certificate.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - Can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance.
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
   * Specifies whether to use the multi-tenant configuration or the single-tenant configuration (default). This parameter only applies to RDS for Oracle container database (CDB) engines.
   *
   * Note the following restrictions:
   *
   * - The DB engine that you specify in the request must support the multi-tenant configuration. If you attempt to enable the multi-tenant configuration on a DB engine that doesn't support it, the request fails.
   * - If you specify the multi-tenant configuration when you create your DB instance, you can't later modify this DB instance to use the single-tenant configuration.
   *
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * The lifecycle type for this DB instance.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
   *
   * This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
   *
   * You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * A list of additional storage volumes to create for the DB instance. You can create up to three additional storage volumes using the names `rdsdbdata2`, `rdsdbdata3`, and `rdsdbdata4`. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolume[] | undefined;

  /**
   * Tags to assign to resources associated with the DB instance.
   *
   * Valid Values:
   *
   * - `auto-backup` - The DB instance's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The identifier or the name of the DB capacity reservation to associate with this DB instance. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name. When you specify this parameter, the DB instance uses reserved capacity from the specified reservation.
   *
   * If you specify `AvailabilityZone`, Amazon RDS places the DB instance in that Availability Zone, and the reservation must cover it.
   *
   * Constraints:
   *
   * - The reservation must reserve capacity for the DB instance class and the database engine of the DB instance.
   * - If the reservation reserves capacity for a specific license model, the license model of the DB instance must match it.
   * - The reservation must be in the `active` state, and it must not be past its end date.
   * - If you specify `AvailabilityZone`, it must be one of the Availability Zones of the reservation.
   * - For a Multi-AZ DB instance, the reservation must cover two or more Availability Zones. A Multi-AZ DB instance uses one unit of reserved capacity in each of two Availability Zones. If the reservation covers more than two Availability Zones, Amazon RDS chooses the two that the DB instance uses.
   * - The reservation must have available capacity in each Availability Zone that the DB instance uses.
   * - The DB subnet group must be in a VPC with default tenancy.
   * - The DB subnet group must cover each Availability Zone that the DB instance uses.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;

  /**
   * Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.
   *
   * You can specify one of the following values:
   *
   * - `password` - Use standard database authentication with a password.
   * - `iam-db-auth` - Use IAM database authentication for the master user.
   *
   * This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.
   *
   * @public
   */
  MasterUserAuthenticationType?: MasterUserAuthenticationType | undefined;
}

/**
 * Information about an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.
 *
 * @public
 */
export interface DBInstanceRole {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The name of the feature associated with the Amazon Web Services Identity and Access Management (IAM) role. For information about supported feature names, see `DBEngineVersion`.
   *
   * @public
   */
  FeatureName?: string | undefined;

  /**
   * Information about the state of association between the IAM role and the DB instance. The Status property returns one of the following values:
   *
   * - `ACTIVE` - the IAM role ARN is associated with the DB instance and can be used to access other Amazon Web Services services on your behalf.
   * - `PENDING` - the IAM role ARN is being associated with the DB instance.
   * - `INVALID` - the IAM role ARN is associated with the DB instance, but the DB instance is unable to assume the IAM role in order to access other Amazon Web Services services on your behalf.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Automated backups of a DB instance replicated to another Amazon Web Services Region. They consist of system backups, transaction logs, and database instance properties.
 *
 * @public
 */
export interface DBInstanceAutomatedBackupsReplication {
  /**
   * The Amazon Resource Name (ARN) of the replicated automated backups.
   *
   * @public
   */
  DBInstanceAutomatedBackupsArn?: string | undefined;
}

/**
 * The status of the DB parameter group.
 *
 * This data type is used as a response element in the following actions:
 *
 * - `CreateDBInstance`
 * - `CreateDBInstanceReadReplica`
 * - `DeleteDBInstance`
 * - `ModifyDBInstance`
 * - `RebootDBInstance`
 * - `RestoreDBInstanceFromDBSnapshot`
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
   * The status of parameter updates. Valid values are:
   *
   * - `applying`: The parameter group change is being applied to the database.
   * - `failed-to-apply`: The parameter group is in an invalid state.
   * - `in-sync`: The parameter group change is synchronized with the database.
   * - `pending-database-upgrade`: The parameter group change will be applied after the DB instance is upgraded.
   * - `pending-reboot`: The parameter group change will be applied after the DB instance reboots.
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;
}

/**
 * Contains Availability Zone information.
 *
 * This data type is used as an element in the `OrderableDBInstanceOption` data type.
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
 * A data type that represents an Outpost.
 *
 * For more information about RDS on Outposts, see [Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide.*
 *
 * @public
 */
export interface Outpost {
  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * This data type is used as a response element for the `DescribeDBSubnetGroups` operation.
 *
 * @public
 */
export interface Subnet {
  /**
   * The identifier of the subnet.
   *
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * Contains Availability Zone information.
   *
   * This data type is used as an element in the `OrderableDBInstanceOption` data type.
   *
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * If the subnet is associated with an Outpost, this value specifies the Outpost.
   *
   * For more information about RDS on Outposts, see [Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  SubnetOutpost?: Outpost | undefined;

  /**
   * The status of the subnet.
   *
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * Contains the details of an Amazon RDS DB subnet group.
 *
 * This data type is used as a response element in the `DescribeDBSubnetGroups` action.
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
   * Contains a list of `Subnet` elements. The list of subnets shown here might not reflect the current state of your VPC. For the most up-to-date information, we recommend checking your VPC configuration directly.
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
   * Valid values:
   *
   * - `IPV4`
   * - `DUAL`
   *
   * A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  SupportedNetworkTypes?: string[] | undefined;
}

/**
 * This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:
 *
 * - `CreateDBInstance`
 * - `DescribeDBInstances`
 * - `DeleteDBInstance`
 *
 * For the data structure that represents Amazon Aurora DB cluster endpoints, see `DBClusterEndpoint`.
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
 * Provides information on the option groups the DB instance is a member of.
 *
 * @public
 */
export interface OptionGroupMembership {
  /**
   * The name of the option group that the instance belongs to.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The status of the DB instance's option group membership. Valid values are: `in-sync`, `pending-apply`, `pending-removal`, `pending-maintenance-apply`, `pending-maintenance-removal`, `applying`, `removing`, and `failed`.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * This data type is used as a response element in the `ModifyDBInstance` operation and contains changes that will be applied during the next maintenance window.
 *
 * @public
 */
export interface PendingModifiedValues {
  /**
   * The name of the compute and memory capacity class for the DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The allocated storage size for the DB instance specified in gibibytes (GiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The master credentials for the DB instance.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The port for the DB instance.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The number of days for which automated backups are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * Indicates whether the Single-AZ DB instance will change to a Multi-AZ deployment.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The database engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The license model for the DB instance.
   *
   * Valid values: `license-included` | `bring-your-own-license` | `general-public-license` | `bring-your-own-media`
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The Provisioned IOPS value for the DB instance.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The storage throughput of the DB instance.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The database identifier for the DB instance.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * The storage type of the DB instance.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The identifier of the CA certificate for the DB instance.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The DB subnet group for the DB instance.
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
   *
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * The automation mode of the RDS Custom DB instance: `full` or `all-paused`. If `full`, the DB instance automates monitoring and instance recovery. If `all-paused`, the instance pauses automation for the duration set by `--resume-full-automation-mode-minutes`.
   *
   * @public
   */
  AutomationMode?: AutomationMode | undefined;

  /**
   * The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation. The minimum value is 60 (default). The maximum value is 1,440.
   *
   * @public
   */
  ResumeFullAutomationModeTime?: Date | undefined;

  /**
   * Indicates whether the DB instance will change to the multi-tenant configuration (TRUE) or the single-tenant configuration (FALSE).
   *
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.&gt;
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * The database engine of the DB instance.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The additional storage volume modifications that are pending for the DB instance.
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolume[] | undefined;

  /**
   * The identifier of the DB capacity reservation that the DB instance uses after a pending modification completes. Amazon RDS returns this value when a `ModifyDBInstance` request changes the DB capacity reservation, and the change hasn't been applied yet.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;
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
   * Indicates whether the instance is operating normally (TRUE) or is in an error state (FALSE).
   *
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * The status of the DB instance. For a StatusType of read replica, the values can be replicating, replication stop point set, replication stop point reached, error, stopped, or terminated.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Details of the error if there is an error for the instance. If the instance isn't in an error state, this value is blank.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains the details of an Amazon RDS DB instance.
 *
 * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
 *
 * @public
 */
export interface DBInstance {
  /**
   * The user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * The name of the compute and memory capacity class of the DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The database engine used for this DB instance.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The current state of this database.
   *
   * For information about DB instance statuses, see [Viewing DB instance status](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/accessing-monitoring.html#Overview.DBInstance.Status) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBInstanceStatus?: string | undefined;

  /**
   * The master username for the DB instance.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The initial database name that you provided (if required) when you created the DB instance. This name is returned for the life of your DB instance. For an RDS for Oracle CDB instance, the name identifies the PDB rather than the CDB.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * The connection endpoint for the DB instance.
   *
   * > **Note:** The endpoint might not be shown for instances with the status of `creating`.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * The amount of storage in gibibytes (GiB) allocated for the DB instance.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The date and time when the DB instance was created.
   *
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The number of days for which automatic DB snapshots are retained.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * A list of DB security group elements containing `DBSecurityGroup.Name` and `DBSecurityGroup.Status` subelements.
   *
   * @public
   */
  DBSecurityGroups?: DBSecurityGroupMembership[] | undefined;

  /**
   * The list of Amazon EC2 VPC security groups that the DB instance belongs to.
   *
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * The list of DB parameter groups applied to this DB instance.
   *
   * @public
   */
  DBParameterGroups?: DBParameterGroupStatus[] | undefined;

  /**
   * The name of the Availability Zone where the DB instance is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * Information about the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.
   *
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * This data type represents the order in which the instances are upgraded.
   *
   * - [first] - Typically used for development or testing environments.
   * - [second] - Default order for resources not specifically configured.
   * - [last] - Usually reserved for production environments.
   *
   * @public
   */
  UpgradeRolloutOrder?: UpgradeRolloutOrder | undefined;

  /**
   * Information about pending changes to the DB instance. This information is returned only when there are pending changes. Specific changes are identified by subelements.
   *
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * The latest time to which a database in this DB instance can be restored with point-in-time restore.
   *
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * Indicates whether the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The version of the database engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Indicates whether minor version patches are applied automatically.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The identifier of the source DB instance if this DB instance is a read replica.
   *
   * @public
   */
  ReadReplicaSourceDBInstanceIdentifier?: string | undefined;

  /**
   * The identifiers of the read replicas associated with this DB instance.
   *
   * @public
   */
  ReadReplicaDBInstanceIdentifiers?: string[] | undefined;

  /**
   * The identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a read replica. For example, when you create an Aurora read replica of an RDS for MySQL DB instance, the Aurora MySQL DB cluster for the Aurora read replica is shown. This output doesn't contain information about cross-Region Aurora read replicas.
   *
   * > **Note:** Currently, each RDS DB instance can have only one Aurora read replica.
   *
   * @public
   */
  ReadReplicaDBClusterIdentifiers?: string[] | undefined;

  /**
   * The open mode of a Db2 or an Oracle read replica. The default is `open-read-only`. For more information, see [Working with replicas for Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-replication.html) and [Working with read replicas for Amazon RDS for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
   *
   * > **Note:** This attribute is only supported in RDS for Db2, RDS for Oracle, and RDS Custom for Oracle.
   *
   * @public
   */
  ReplicaMode?: ReplicaMode | undefined;

  /**
   * The license model information for this DB instance. This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The Provisioned IOPS (I/O operations per second) value for the DB instance.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The storage throughput for the DB instance.
   *
   * This setting applies only to the `gp3` storage type.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The list of option group memberships for this DB instance.
   *
   * @public
   */
  OptionGroupMemberships?: OptionGroupMembership[] | undefined;

  /**
   * If present, specifies the name of the character set that this instance is associated with.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The name of the NCHAR character set for the Oracle DB instance. This character set specifies the Unicode encoding for data stored in table columns of type NCHAR, NCLOB, or NVARCHAR2.
   *
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.
   *
   * @public
   */
  SecondaryAvailabilityZone?: string | undefined;

  /**
   * Indicates whether the DB instance is publicly accessible.
   *
   * When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * For more information, see CreateDBInstance.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The status of a read replica. If the DB instance isn't a read replica, the value is blank.
   *
   * @public
   */
  StatusInfos?: DBInstanceStatusInfo[] | undefined;

  /**
   * The storage type associated with the DB instance.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The type of encryption used to protect data at rest in the DB instance. Possible values:
   *
   * - `none` - The DB instance is not encrypted.
   * - `sse-rds` - The DB instance is encrypted using an Amazon Web Services owned KMS key.
   * - `sse-kms` - The DB instance is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * The ARN from the key store with which the instance is associated for TDE encryption.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * The port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.
   *
   * @public
   */
  DbInstancePort?: number | undefined;

  /**
   * If the DB instance is a member of a DB cluster, indicates the name of the DB cluster that the DB instance is a member of.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Indicates whether the DB instance is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * If `StorageEncrypted` is enabled, the Amazon Web Services KMS key identifier for the encrypted DB instance.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is found in Amazon Web Services CloudTrail log entries whenever the Amazon Web Services KMS key for the DB instance is accessed.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * The identifier of the CA certificate for this DB instance.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The Active Directory Domain membership records associated with the DB instance.
   *
   * @public
   */
  DomainMemberships?: DomainMembership[] | undefined;

  /**
   * Indicates whether tags are copied from the DB instance to snapshots of the DB instance.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting. For more information, see `DBCluster`.
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
   * The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
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
   * The time zone of the DB instance. In most cases, the `Timezone` element is empty. `Timezone` content appears only for RDS for Db2 and RDS for SQL Server DB instances that were created with a time zone specified.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled for the DB instance.
   *
   * For a list of engine versions that support IAM database authentication, see [IAM database authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.IamDatabaseAuthentication.html) in the *Amazon RDS User Guide* and [IAM database authentication in Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.Aurora_Fea_Regions_DB-eng.Feature.IAMdbauth.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * The mode of Database Insights that is enabled for the instance.
   *
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * Indicates whether Performance Insights is enabled for the DB instance.
   *
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * A list of log types that this DB instance is configured to export to CloudWatch Logs.
   *
   * Log types vary by DB engine. For information about the log types for each DB engine, see [Monitoring Amazon RDS log files](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * Indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The Amazon Web Services Identity and Access Management (IAM) roles associated with the DB instance.
   *
   * @public
   */
  AssociatedRoles?: DBInstanceRole[] | undefined;

  /**
   * The listener connection endpoint for SQL Server Always On.
   *
   * @public
   */
  ListenerEndpoint?: Endpoint | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * The automation mode of the RDS Custom DB instance: `full` or `all paused`. If `full`, the DB instance automates monitoring and instance recovery. If `all paused`, the instance pauses automation for the duration set by `--resume-full-automation-mode-minutes`.
   *
   * @public
   */
  AutomationMode?: AutomationMode | undefined;

  /**
   * The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation. The minimum value is 60 (default). The maximum value is 1,440.
   *
   * @public
   */
  ResumeFullAutomationModeTime?: Date | undefined;

  /**
   * Indicates whether a customer-owned IP address (CoIP) is enabled for an RDS on Outposts DB instance.
   *
   * A *CoIP* provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network.
   *
   * For more information about RDS on Outposts, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * For more information about CoIPs, see [Customer-owned IP addresses](https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing) in the *Amazon Web Services Outposts User Guide*.
   *
   * @public
   */
  CustomerOwnedIpEnabled?: boolean | undefined;

  /**
   * The network type of the DB instance.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide* and [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
   *
   * Valid Values: `IPV4 | DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * The status of the database activity stream.
   *
   * @public
   */
  ActivityStreamStatus?: ActivityStreamStatus | undefined;

  /**
   * The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  ActivityStreamKmsKeyId?: string | undefined;

  /**
   * The name of the Amazon Kinesis data stream used for the database activity stream.
   *
   * @public
   */
  ActivityStreamKinesisStreamName?: string | undefined;

  /**
   * The mode of the database activity stream. Database events such as a change or access generate an activity stream event. RDS for Oracle always handles these events asynchronously.
   *
   * @public
   */
  ActivityStreamMode?: ActivityStreamMode | undefined;

  /**
   * Indicates whether engine-native audit fields are included in the database activity stream.
   *
   * @public
   */
  ActivityStreamEngineNativeAuditFieldsIncluded?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.
   *
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * The list of replicated automated backups associated with the DB instance.
   *
   * @public
   */
  DBInstanceAutomatedBackupsReplications?: DBInstanceAutomatedBackupsReplication[] | undefined;

  /**
   * The location where automated backups and manual snapshots are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.
   *
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * The time when a stopped DB instance is restarted automatically.
   *
   * @public
   */
  AutomaticRestartTime?: Date | undefined;

  /**
   * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:
   *
   * - The profile must exist in your account.
   * - The profile must have an IAM role that Amazon EC2 has permissions to assume.
   * - The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.
   *
   * For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * The status of the policy state of the activity stream.
   *
   * @public
   */
  ActivityStreamPolicyStatus?: ActivityStreamPolicyStatus | undefined;

  /**
   * The details of the DB instance's server certificate.
   *
   * @public
   */
  CertificateDetails?: CertificateDetails | undefined;

  /**
   * The Oracle system ID (Oracle SID) for a container database (CDB). The Oracle SID is also the name of the CDB. This setting is only valid for RDS Custom DB instances.
   *
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * The secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  MasterUserSecret?: MasterUserSecret | undefined;

  /**
   * The identifier of the source DB cluster if this DB instance is a read replica.
   *
   * @public
   */
  ReadReplicaSourceDBClusterIdentifier?: string | undefined;

  /**
   * The progress of the storage optimization operation as a percentage.
   *
   * @public
   */
  PercentProgress?: string | undefined;

  /**
   * Specifies whether the DB instance is in the multi-tenant configuration (TRUE) or the single-tenant configuration (FALSE).
   *
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * Indicates whether an upgrade is recommended for the storage file system configuration on the DB instance. To migrate to the preferred configuration, you can either create a blue/green deployment, or create a read replica from the DB instance. For more information, see [Upgrading the storage file system for a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.UpgradeFileSystem).
   *
   * @public
   */
  IsStorageConfigUpgradeAvailable?: boolean | undefined;

  /**
   * The lifecycle type for the DB instance.
   *
   * For more information, see CreateDBInstance.
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * The additional storage volumes associated with the DB instance. RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolumeOutput[] | undefined;

  /**
   * The detailed status information for storage volumes associated with the DB instance. This information helps identify which specific volume is causing the instance to be in a storage-full state.
   *
   * @public
   */
  StorageVolumeStatus?: string | undefined;

  /**
   * The status of an in-progress storage operation on the DB instance. This field appears only while a storage operation is in progress. It isn't present when no storage operation is active. Possible values:
   *
   * - `Initializing` - The volume is initializing from a snapshot, such as during a snapshot restore, point-in-time restore, read replica creation, or blue/green deployment. Performance can be lower than provisioned until initialization completes.
   * - `Optimizing` - The volume is optimizing following a storage scaling or modification operation.
   *
   * @public
   */
  StorageOperationStatus?: string | undefined;

  /**
   * The percentage of the in-progress storage operation on the DB instance that has completed, from `0` to `100`. This field appears only while a storage operation is in progress. It isn't present when no storage operation is active.
   *
   * @public
   */
  StorageOperationPercentProgress?: number | undefined;

  /**
   * The identifier of the DB capacity reservation associated with this DB instance. Amazon RDS doesn't return this value if the DB instance doesn't use a DB capacity reservation.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 *
 * @public
 */
export interface CreateDBInstanceReadReplicaMessage {
  /**
   * The DB instance identifier of the read replica. This identifier is the unique key that identifies a DB instance. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The identifier of the DB instance that will act as the source for the read replica. Each DB instance can have up to 15 read replicas, except for the following engines:
   *
   * - Db2 - Can have up to three replicas.
   * - Oracle - Can have up to five read replicas.
   * - SQL Server - Can have up to five read replicas.
   *
   * Constraints:
   *
   * - Must be the identifier of an existing Db2, MariaDB, MySQL, Oracle, PostgreSQL, or SQL Server DB instance.
   * - Can't be specified if the `SourceDBClusterIdentifier` parameter is also specified.
   * - For the limitations of Oracle read replicas, see [Version and licensing considerations for RDS for Oracle replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.limitations.html#oracle-read-replicas.limitations.versions-and-licenses) in the *Amazon RDS User Guide*.
   * - For the limitations of SQL Server read replicas, see [Read replica limitations with SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html#SQLServer.ReadReplicas.Limitations) in the *Amazon RDS User Guide*.
   * - The specified DB instance must have automatic backups enabled, that is, its backup retention period must be greater than 0.
   * - If the source DB instance is in the same Amazon Web Services Region as the read replica, specify a valid DB instance identifier.
   * - If the source DB instance is in a different Amazon Web Services Region from the read replica, specify a valid DB instance ARN. For more information, see [Constructing an ARN for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing) in the *Amazon RDS User Guide*. This doesn't apply to SQL Server or RDS Custom, which don't support cross-Region replicas.
   *
   * @public
   */
  SourceDBInstanceIdentifier?: string | undefined;

  /**
   * The compute and memory capacity of the read replica, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.
   *
   * Default: Inherits the value from the source DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The Availability Zone (AZ) where the read replica will be created.
   *
   * Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.
   *
   * Example: `us-east-1d`
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The port number that the DB instance uses for connections.
   *
   * Valid Values: `1150-65535`
   *
   * Default: Inherits the value from the source DB instance.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies whether the read replica is in a Multi-AZ deployment.
   *
   * You can create a read replica as a Multi-AZ DB instance. RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your read replica as a Multi-AZ DB instance is independent of whether the source is a Multi-AZ DB instance or a Multi-AZ DB cluster.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * Specifies whether to automatically apply minor engine upgrades to the read replica during the maintenance window.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Default: Inherits the value from the source DB instance.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies the storage throughput value for the read replica.
   *
   * This setting doesn't apply to RDS Custom or Amazon Aurora DB instances.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The option group to associate the DB instance with. If not specified, RDS uses the option group associated with the source DB instance or cluster.
   *
   * > **Note:** For SQL Server, you must use the option group associated with the source.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The name of the DB parameter group to associate with this read replica DB instance.
   *
   * For the Db2 DB engine, if your source DB instance uses the bring your own license (BYOL) model, then a custom parameter group must be associated with the replica. For a same Amazon Web Services Region replica, if you don't specify a custom parameter group, Amazon RDS associates the custom parameter group associated with the source DB instance. For a cross-Region replica, you must specify a custom parameter group. This custom parameter group must include your IBM Site ID and IBM Customer ID. For more information, see [IBM IDs for bring your own license (BYOL) for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html#db2-prereqs-ibm-info).
   *
   * For Single-AZ or Multi-AZ DB instance read replica instances, if you don't specify a value for `DBParameterGroupName`, then Amazon RDS uses the `DBParameterGroup` of the source DB instance for a same Region read replica, or the default `DBParameterGroup` for the specified DB engine for a cross-Region read replica.
   *
   * For Multi-AZ DB cluster same Region read replica instances, if you don't specify a value for `DBParameterGroupName`, then Amazon RDS uses the default `DBParameterGroup`.
   *
   * Specifying a parameter group for this operation is only supported for MySQL DB instances for cross-Region read replicas, for Multi-AZ DB cluster read replica instances, for Db2 DB instances, and for Oracle DB instances. It isn't supported for MySQL DB instances for same Region read replicas or for RDS Custom.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * Specifies whether the DB instance is publicly accessible.
   *
   * When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * For more information, see CreateDBInstance.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance isn't created in a VPC.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DB subnet group.
   * - The specified DB subnet group must be in the same Amazon Web Services Region in which the operation is running.
   * - All read replicas in one Amazon Web Services Region that are created from the same source DB instance must either:
   *
   *   - Specify DB subnet groups from the same VPC. All these read replicas are created in the same VPC.
   *   - Not specify a DB subnet group. All these read replicas are created outside of any VPC.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * A list of Amazon EC2 VPC security groups to associate with the read replica.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The storage type to associate with the read replica.
   *
   * If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
   *
   * Valid Values: `gp2 | gp3 | io1 | io2 | standard`
   *
   * Default: `io1` if the `Iops` parameter is specified. Otherwise, `gp3`.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Specifies whether to copy all tags from the read replica to snapshots of the read replica. By default, tags aren't copied.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the read replica. To disable collection of Enhanced Monitoring metrics, specify `0`. The default is `0`.
   *
   * If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than `0`.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Valid Values: `0, 1, 5, 10, 15, 30, 60`
   *
   * Default: `0`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, go to [To create an IAM role for Amazon RDS Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole) in the *Amazon RDS User Guide*.
   *
   * If `MonitoringInterval` is set to a value other than 0, then you must supply a `MonitoringRoleArn` value.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted read replica.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * For a read replica in the same Amazon Web Services Region as the source DB instance or Multi-AZ DB cluster, specifying this parameter is optional. If you specify a KMS key identifier, the read replica is encrypted with that KMS key, which can be different from the KMS key of the source.
   *
   * If you don't specify a value for this parameter, the read replica is encrypted with the same KMS key as the source DB instance or Multi-AZ DB cluster.
   *
   * If you create an encrypted read replica in a different Amazon Web Services Region, then you must specify a KMS key identifier for the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services Region that they are created in, and you can't use KMS keys from one Amazon Web Services Region in another Amazon Web Services Region.
   *
   * You can't create an encrypted read replica from an unencrypted DB instance or Multi-AZ DB cluster.
   *
   * This setting doesn't apply to RDS Custom, which uses the same KMS key as the primary replica.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * When you are creating a read replica from one Amazon Web Services GovCloud (US) Region to another or from one China Amazon Web Services Region to another, the URL that contains a Signature Version 4 signed request for the `CreateDBInstanceReadReplica` API operation in the source Amazon Web Services Region that contains the source DB instance.
   *
   * This setting applies only to Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. It's ignored in other Amazon Web Services Regions.
   *
   * This setting applies only when replicating from a source DB *instance*. Source DB clusters aren't supported in Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions.
   *
   * You must specify this parameter when you create an encrypted read replica from another Amazon Web Services Region by using the Amazon RDS API. Don't specify `PreSignedUrl` when you are creating an encrypted read replica in the same Amazon Web Services Region.
   *
   * The presigned URL must be a valid request for the `CreateDBInstanceReadReplica` API operation that can run in the source Amazon Web Services Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values:
   *
   * - `DestinationRegion` - The Amazon Web Services Region that the encrypted read replica is created in. This Amazon Web Services Region is the same one where the `CreateDBInstanceReadReplica` operation is called that contains this presigned URL.
   *
   *   For example, if you create an encrypted DB instance in the us-west-1 Amazon Web Services Region, from a source DB instance in the us-east-2 Amazon Web Services Region, then you call the `CreateDBInstanceReadReplica` operation in the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the `CreateDBInstanceReadReplica` operation in the us-west-2 Amazon Web Services Region. For this example, the `DestinationRegion` in the presigned URL must be set to the us-east-1 Amazon Web Services Region.
   * - `KmsKeyId` - The KMS key identifier for the key to use to encrypt the read replica in the destination Amazon Web Services Region. This is the same identifier for both the `CreateDBInstanceReadReplica` operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL.
   * - `SourceDBInstanceIdentifier` - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are creating an encrypted read replica from a DB instance in the us-west-2 Amazon Web Services Region, then your `SourceDBInstanceIdentifier` looks like the following example: `arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115`.
   *
   * To learn how to generate a Signature Version 4 signed request, see [Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html) and [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * > **Note:** If you are using an Amazon Web Services SDK tool or the CLI, you can specify `SourceRegion` (or `--source-region` for the CLI) instead of specifying `PreSignedUrl` manually. Specifying `SourceRegion` autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * For more information about IAM database authentication, see [IAM Database Authentication for MySQL and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The mode of Database Insights to enable for the read replica.
   *
   * > **Note:** This setting isn't supported.
   *
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * Specifies whether to enable Performance Insights for the read replica.
   *
   * For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you do not specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * If you specify a retention period that isn't valid, such as `94`, Amazon RDS returns an error.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * The list of logs that the new DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * Specifies whether the DB instance class of the DB instance uses its default processor features.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * Specifies whether to enable deletion protection for the DB instance. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
   *
   * For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The name of the IAM role to use when making API calls to the Directory Service.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of an Active Directory domain.
   *
   * Constraints:
   *
   * - Can't be longer than 64 characters.
   *
   * Example: `mymanagedADtest.mymanagedAD.mydomain`
   *
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * The Active Directory organizational unit for your DB instance to join.
   *
   * Constraints:
   *
   * - Must be in the distinguished name format.
   * - Can't be longer than 64 characters.
   *
   * Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`
   *
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
   *
   * Example: `arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456`
   *
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
   *
   * Constraints:
   *
   * - Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
   *
   * Example: `123.124.125.126,234.235.236.237`
   *
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * The open mode of the replica database.
   *
   * This parameter is only supported for Db2 DB instances and Oracle DB instances.
   *
   * - **Db2**
   *
   *   Standby DB replicas are included in Db2 Advanced Edition (AE), Db2 Community Edition (CE), and Db2 Standard Edition (SE). The main use case for standby replicas is cross-Region disaster recovery. Because it doesn't accept user connections, a standby replica can't serve a read-only workload.
   *
   *   You can create a combination of standby and read-only DB replicas for the same primary DB instance. For more information, see [Working with replicas for Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-replication.html) in the *Amazon RDS User Guide*.
   *
   *   To create standby DB replicas for RDS for Db2, set this parameter to `mounted`.
   *
   * - **Oracle**
   *
   *   Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload.
   *
   *   You can create a combination of mounted and read-only DB replicas for the same primary DB instance. For more information, see [Working with read replicas for Amazon RDS for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
   *
   *   For RDS Custom, you must specify this parameter and set it to `mounted`. The value won't be set by default. After replica creation, you can manage the open mode manually.
   *
   * @public
   */
  ReplicaMode?: ReplicaMode | undefined;

  /**
   * Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts read replica.
   *
   * A *CoIP* provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the read replica from outside of its virtual private cloud (VPC) on your local network.
   *
   * For more information about RDS on Outposts, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * For more information about CoIPs, see [Customer-owned IP addresses](https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing) in the *Amazon Web Services Outposts User Guide*.
   *
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * The network type of the DB instance.
   *
   * Valid Values:
   *
   * - `IPV4`
   * - `DUAL`
   *
   * The network type is determined by the `DBSubnetGroup` specified for read replica. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * The location where RDS stores automated backups and manual snapshots.
   *
   * Valid Values:
   *
   * - `local` for Dedicated Local Zones
   * - `region` for Amazon Web Services Region
   *
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:
   *
   * - The profile must exist in your account.
   * - The profile must have an IAM role that Amazon EC2 has permissions to assume.
   * - The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.
   *
   * For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.
   *
   * This setting is required for RDS Custom DB instances.
   *
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * The amount of storage (in gibibytes) to allocate initially for the read replica. Follow the allocation rules specified in `CreateDBInstance`.
   *
   * This setting isn't valid for RDS for SQL Server.
   *
   * > **Note:** Be sure to allocate enough storage for your read replica so that the create operation can succeed. You can also allocate additional storage for future growth.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas.
   *
   * Constraints:
   *
   * - Must be the identifier of an existing Multi-AZ DB cluster.
   * - Can't be specified if the `SourceDBInstanceIdentifier` parameter is also specified.
   * - The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
   * - The source DB cluster must be in the same Amazon Web Services Region as the read replica. Cross-Region replication isn't supported.
   *
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * Whether to upgrade the storage file system configuration on the read replica. This option migrates the read replica from the old storage file system layout to the preferred layout.
   *
   * @public
   */
  UpgradeStorageConfig?: boolean | undefined;

  /**
   * The CA certificate identifier to use for the read replica's server certificate.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * A list of additional storage volumes to create for the DB instance. You can create up to three additional storage volumes using the names `rdsdbdata2`, `rdsdbdata3`, and `rdsdbdata4`. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolume[] | undefined;

  /**
   * Tags to assign to resources associated with the DB instance.
   *
   * Valid Values:
   *
   * - `auto-backup` - The DB instance's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * The identifier or the name of the DB capacity reservation to associate with this read replica. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name. When you specify this parameter, the read replica uses reserved capacity from the specified reservation. A read replica uses one unit of reserved capacity, in the same way as any other DB instance.
   *
   * If you specify `AvailabilityZone`, Amazon RDS places the DB instance in that Availability Zone, and the reservation must cover it.
   *
   * Constraints:
   *
   * - The reservation must reserve capacity for the DB instance class and the database engine of the DB instance.
   * - If the reservation reserves capacity for a specific license model, the license model of the source DB instance must match it. A read replica inherits its license model from the source DB instance.
   * - The reservation must be in the `active` state, and it must not be past its end date.
   * - If you specify `AvailabilityZone`, it must be one of the Availability Zones of the reservation.
   * - For a Multi-AZ DB instance, the reservation must cover two or more Availability Zones. A Multi-AZ DB instance uses one unit of reserved capacity in each of two Availability Zones. If the reservation covers more than two Availability Zones, Amazon RDS chooses the two that the DB instance uses.
   * - The reservation must have available capacity in each Availability Zone that the DB instance uses.
   * - The DB subnet group must be in a VPC with default tenancy.
   * - The DB subnet group must cover each Availability Zone that the DB instance uses.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceReadReplicaResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
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
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * > **Note:** This value is stored as a lowercase string.
   *
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.
   *
   * To list all of the available parameter group families for a DB engine, use the following command:
   *
   * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
   *
   * For example, to list all of the available parameter group families for the MySQL DB engine, use the following command:
   *
   * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine mysql`
   *
   * > **Note:** The output contains duplicates.
   *
   * The following are the valid DB engine values:
   *
   * - `aurora-mysql`
   * - `aurora-postgresql`
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
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
   * Tags to assign to the DB parameter group.
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
   * Contains the details of an Amazon RDS DB parameter group.
   *
   * This data type is used as a response element in the `DescribeDBParameterGroups` action.
   *
   * @public
   */
  DBParameterGroup?: DBParameterGroup | undefined;
}

/**
 * Specifies the details of authentication used by a proxy to log in as a specific database user.
 *
 * @public
 */
export interface UserAuthConfig {
  /**
   * A user-specified description about the authentication used by a proxy to log in as a specific database user.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the database user to which the proxy connects.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The type of authentication that the proxy uses for connections from the proxy to the underlying database.
   *
   * @public
   */
  AuthScheme?: AuthScheme | undefined;

  /**
   * The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * A value that indicates whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. The `ENABLED` value is valid only for proxies with RDS for Microsoft SQL Server.
   *
   * @public
   */
  IAMAuth?: IAMAuthMode | undefined;

  /**
   * The type of authentication the proxy uses for connections from clients. The following values are defaults for the corresponding engines:
   *
   * - RDS for MySQL: `MYSQL_CACHING_SHA2_PASSWORD`
   * - RDS for SQL Server: `SQL_SERVER_AUTHENTICATION`
   * - RDS for PostgreSQL: `POSTGRES_SCRAM_SHA2_256`
   *
   * @public
   */
  ClientPasswordAuthType?: ClientPasswordAuthType | undefined;
}

/**
 * @public
 */
export interface CreateDBProxyRequest {
  /**
   * The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. For Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases, specify `MYSQL`. For Aurora PostgreSQL and RDS for PostgreSQL databases, specify `POSTGRESQL`. For RDS for Microsoft SQL Server, specify `SQLSERVER`.
   *
   * @public
   */
  EngineFamily: EngineFamily | undefined;

  /**
   * The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. Valid values are `NONE` and `IAM_AUTH`. When set to `IAM_AUTH`, the proxy uses end-to-end IAM authentication to connect to the database. If you don't specify `DefaultAuthScheme` or specify this parameter as `NONE`, you must specify the `Auth` option.
   *
   * @public
   */
  DefaultAuthScheme?: DefaultAuthScheme | undefined;

  /**
   * The authorization mechanism that the proxy uses.
   *
   * @public
   */
  Auth?: UserAuthConfig[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * One or more VPC subnet IDs to associate with the new proxy.
   *
   * @public
   */
  VpcSubnetIds: string[] | undefined;

  /**
   * One or more VPC security group IDs to associate with the new proxy.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * Specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy.
   *
   * @public
   */
  RequireTLS?: boolean | undefined;

  /**
   * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database.
   *
   * @public
   */
  IdleClientTimeout?: number | undefined;

  /**
   * Specifies whether the proxy logs detailed connection and query information. When you enable `DebugLogging`, the proxy captures connection details and connection pool behavior from your queries. Debug logging increases CloudWatch costs and can impact proxy performance. Enable this option only when you need to troubleshoot connection or performance issues.
   *
   * @public
   */
  DebugLogging?: boolean | undefined;

  /**
   * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.
   *
   * Valid values:
   *
   * - `IPV4` - The proxy endpoint supports IPv4 only.
   * - `IPV6` - The proxy endpoint supports IPv6 only.
   * - `DUAL` - The proxy endpoint supports both IPv4 and IPv6.
   *
   * Default: `IPV4`
   *
   * Constraints:
   *
   * - If you specify `IPV6` or `DUAL`, the VPC and all subnets must have an IPv6 CIDR block.
   * - If you specify `IPV6` or `DUAL`, the VPC tenancy cannot be `dedicated`.
   *
   * @public
   */
  EndpointNetworkType?: EndpointNetworkType | undefined;

  /**
   * The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database.
   *
   * Valid values:
   *
   * - `IPV4` - The proxy connects to the database using IPv4 only.
   * - `IPV6` - The proxy connects to the database using IPv6 only.
   *
   * Default: `IPV4`
   *
   * Constraints:
   *
   * - If you specify `IPV6`, the database must support dual-stack mode. RDS doesn't support IPv6-only databases.
   * - All targets registered with the proxy must be compatible with the specified network type.
   *
   * @public
   */
  TargetConnectionNetworkType?: TargetConnectionNetworkType | undefined;
}

/**
 * Returns the details of authentication used by a proxy to log in as a specific database user.
 *
 * @public
 */
export interface UserAuthConfigInfo {
  /**
   * A user-specified description about the authentication used by a proxy to log in as a specific database user.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the database user to which the proxy connects.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The type of authentication that the proxy uses for connections from the proxy to the underlying database.
   *
   * @public
   */
  AuthScheme?: AuthScheme | undefined;

  /**
   * The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.
   *
   * @public
   */
  IAMAuth?: IAMAuthMode | undefined;

  /**
   * The type of authentication the proxy uses for connections from clients.
   *
   * @public
   */
  ClientPasswordAuthType?: ClientPasswordAuthType | undefined;
}

/**
 * The data structure representing a proxy managed by the RDS Proxy.
 *
 * This data type is used as a response element in the `DescribeDBProxies` action.
 *
 * @public
 */
export interface DBProxy {
  /**
   * The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.
   *
   * @public
   */
  DBProxyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the proxy.
   *
   * @public
   */
  DBProxyArn?: string | undefined;

  /**
   * The current status of this proxy. A status of `available` means the proxy is ready to handle requests. Other values indicate that you must wait for the proxy to be ready, or take some action to resolve an issue.
   *
   * @public
   */
  Status?: DBProxyStatus | undefined;

  /**
   * The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. `MYSQL` supports Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases. `POSTGRESQL` supports Aurora PostgreSQL and RDS for PostgreSQL databases. `SQLSERVER` supports RDS for Microsoft SQL Server databases.
   *
   * @public
   */
  EngineFamily?: string | undefined;

  /**
   * Provides the VPC ID of the DB proxy.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Provides a list of VPC security groups that the proxy belongs to.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The EC2 subnet IDs for the proxy.
   *
   * @public
   */
  VpcSubnetIds?: string[] | undefined;

  /**
   * The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. Valid values are `NONE` and `IAM_AUTH`. When set to `IAM_AUTH`, the proxy uses end-to-end IAM authentication to connect to the database.
   *
   * @public
   */
  DefaultAuthScheme?: string | undefined;

  /**
   * One or more data structures specifying the authorization mechanism to connect to the associated RDS DB instance or Aurora DB cluster.
   *
   * @public
   */
  Auth?: UserAuthConfigInfo[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that the proxy uses to access Amazon Secrets Manager.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * Indicates whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *
   * @public
   */
  RequireTLS?: boolean | undefined;

  /**
   * The number of seconds a connection to the proxy can have no activity before the proxy drops the client connection. The proxy keeps the underlying database connection open and puts it back into the connection pool for reuse by later connection requests.
   *
   * Default: 1800 (30 minutes)
   *
   * Constraints: 1 to 28,800
   *
   * @public
   */
  IdleClientTimeout?: number | undefined;

  /**
   * Specifies whether the proxy logs detailed connection and query information. When you enable `DebugLogging`, the proxy captures connection details and connection pool behavior from your queries. Debug logging increases CloudWatch costs and can impact proxy performance. Enable this option only when you need to troubleshoot connection or performance issues.
   *
   * @public
   */
  DebugLogging?: boolean | undefined;

  /**
   * The date and time when the proxy was first created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date and time when the proxy was last updated.
   *
   * @public
   */
  UpdatedDate?: Date | undefined;

  /**
   * The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.
   *
   * Valid values:
   *
   * - `IPV4` - The proxy endpoint supports IPv4 only.
   * - `IPV6` - The proxy endpoint supports IPv6 only.
   * - `DUAL` - The proxy endpoint supports both IPv4 and IPv6.
   *
   * @public
   */
  EndpointNetworkType?: EndpointNetworkType | undefined;

  /**
   * The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database.
   *
   * Valid values:
   *
   * - `IPV4` - The proxy connects to the database using IPv4 only.
   * - `IPV6` - The proxy connects to the database using IPv6 only.
   *
   * @public
   */
  TargetConnectionNetworkType?: TargetConnectionNetworkType | undefined;
}

/**
 * @public
 */
export interface CreateDBProxyResponse {
  /**
   * The `DBProxy` structure corresponding to the new proxy.
   *
   * @public
   */
  DBProxy?: DBProxy | undefined;
}

/**
 * @public
 */
export interface CreateDBProxyEndpointRequest {
  /**
   * The name of the DB proxy associated with the DB proxy endpoint that you create.
   *
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * The name of the DB proxy endpoint to create.
   *
   * @public
   */
  DBProxyEndpointName: string | undefined;

  /**
   * The VPC subnet IDs for the DB proxy endpoint that you create. You can specify a different set of subnet IDs than for the original DB proxy.
   *
   * @public
   */
  VpcSubnetIds: string[] | undefined;

  /**
   * The VPC security group IDs for the DB proxy endpoint that you create. You can specify a different set of security group IDs than for the original DB proxy. The default is the default security group for the VPC.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The role of the DB proxy endpoint. The role determines whether the endpoint can be used for read/write or only read operations. The default is `READ_WRITE`. The only role that proxies for RDS for Microsoft SQL Server support is `READ_WRITE`.
   *
   * @public
   */
  TargetRole?: DBProxyEndpointTargetRole | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.
   *
   * Valid values:
   *
   * - `IPV4` - The proxy endpoint supports IPv4 only.
   * - `IPV6` - The proxy endpoint supports IPv6 only.
   * - `DUAL` - The proxy endpoint supports both IPv4 and IPv6.
   *
   * Default: `IPV4`
   *
   * Constraints:
   *
   * - If you specify `IPV6` or `DUAL`, the VPC and all subnets must have an IPv6 CIDR block.
   * - If you specify `IPV6` or `DUAL`, the VPC tenancy cannot be `dedicated`.
   *
   * @public
   */
  EndpointNetworkType?: EndpointNetworkType | undefined;
}

/**
 * The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the associated DB proxy.
 *
 * This data type is used as a response element in the `DescribeDBProxyEndpoints` operation.
 *
 * @public
 */
export interface DBProxyEndpoint {
  /**
   * The name for the DB proxy endpoint. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  DBProxyEndpointName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB proxy endpoint.
   *
   * @public
   */
  DBProxyEndpointArn?: string | undefined;

  /**
   * The identifier for the DB proxy that is associated with this DB proxy endpoint.
   *
   * @public
   */
  DBProxyName?: string | undefined;

  /**
   * The current status of this DB proxy endpoint. A status of `available` means the endpoint is ready to handle requests. Other values indicate that you must wait for the endpoint to be ready, or take some action to resolve an issue.
   *
   * @public
   */
  Status?: DBProxyEndpointStatus | undefined;

  /**
   * Provides the VPC ID of the DB proxy endpoint.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Provides a list of VPC security groups that the DB proxy endpoint belongs to.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The EC2 subnet IDs for the DB proxy endpoint.
   *
   * @public
   */
  VpcSubnetIds?: string[] | undefined;

  /**
   * The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The date and time when the DB proxy endpoint was first created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
   *
   * @public
   */
  TargetRole?: DBProxyEndpointTargetRole | undefined;

  /**
   * Indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.
   *
   * Valid values:
   *
   * - `IPV4` - The proxy endpoint supports IPv4 only.
   * - `IPV6` - The proxy endpoint supports IPv6 only.
   * - `DUAL` - The proxy endpoint supports both IPv4 and IPv6.
   *
   * @public
   */
  EndpointNetworkType?: EndpointNetworkType | undefined;
}

/**
 * @public
 */
export interface CreateDBProxyEndpointResponse {
  /**
   * The `DBProxyEndpoint` object that is created by the API operation. The DB proxy endpoint that you create might provide capabilities such as read/write or read-only operations, or using a different VPC than the proxy's default VPC.
   *
   * @public
   */
  DBProxyEndpoint?: DBProxyEndpoint | undefined;
}

/**
 * @public
 */
export interface CreateDBSecurityGroupMessage {
  /**
   * The name for the DB security group. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   * - Must not be "Default"
   *
   * Example: `mysecuritygroup`
   *
   * @public
   */
  DBSecurityGroupName: string | undefined;

  /**
   * The description for the DB security group.
   *
   * @public
   */
  DBSecurityGroupDescription: string | undefined;

  /**
   * Tags to assign to the DB security group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSecurityGroupResult {
  /**
   * Contains the details for an Amazon RDS DB security group.
   *
   * This data type is used as a response element in the `DescribeDBSecurityGroups` action.
   *
   * @public
   */
  DBSecurityGroup?: DBSecurityGroup | undefined;
}

/**
 * @public
 */
export interface CreateDBShardGroupMessage {
  /**
   * The name of the DB shard group.
   *
   * @public
   */
  DBShardGroupIdentifier: string | undefined;

  /**
   * The name of the primary DB cluster for the DB shard group.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * Specifies whether to create standby standby DB data access shard for the DB shard group. Valid values are the following:
   *
   * - 0 - Creates a DB shard group without a standby DB data access shard. This is the default value.
   * - 1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).
   * - 2 - Creates a DB shard group with two standby DB data access shard in two different AZs.
   *
   * @public
   */
  ComputeRedundancy?: number | undefined;

  /**
   * The maximum capacity of the DB shard group in Aurora capacity units (ACUs).
   *
   * @public
   */
  MaxACU: number | undefined;

  /**
   * The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
   *
   * @public
   */
  MinACU?: number | undefined;

  /**
   * Specifies whether the DB shard group is publicly accessible.
   *
   * When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
   *
   * When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
   *
   * Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
   *
   * If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:
   *
   * - If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB shard group is private.
   * - If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.
   *
   * If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:
   *
   * - If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB shard group is private.
   * - If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the details for an Amazon RDS DB shard group.
 *
 * @public
 */
export interface DBShardGroup {
  /**
   * The Amazon Web Services Region-unique, immutable identifier for the DB shard group.
   *
   * @public
   */
  DBShardGroupResourceId?: string | undefined;

  /**
   * The name of the DB shard group.
   *
   * @public
   */
  DBShardGroupIdentifier?: string | undefined;

  /**
   * The name of the primary DB cluster for the DB shard group.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * The maximum capacity of the DB shard group in Aurora capacity units (ACUs).
   *
   * @public
   */
  MaxACU?: number | undefined;

  /**
   * The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
   *
   * @public
   */
  MinACU?: number | undefined;

  /**
   * Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following:
   *
   * - 0 - Creates a DB shard group without a standby DB shard group. This is the default value.
   * - 1 - Creates a DB shard group with a standby DB shard group in a different Availability Zone (AZ).
   * - 2 - Creates a DB shard group with two standby DB shard groups in two different AZs.
   *
   * @public
   */
  ComputeRedundancy?: number | undefined;

  /**
   * The status of the DB shard group.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Indicates whether the DB shard group is publicly accessible.
   *
   * When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB shard group doesn't permit it.
   *
   * When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
   *
   * For more information, see CreateDBShardGroup.
   *
   * This setting is only for Aurora Limitless Database.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The connection endpoint for the DB shard group.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DB shard group.
   *
   * @public
   */
  DBShardGroupArn?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSnapshotMessage {
  /**
   * The identifier for the DB snapshot.
   *
   * Constraints:
   *
   * - Can't be null, empty, or blank
   * - Must contain from 1 to 255 letters, numbers, or hyphens
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-snapshot-id`
   *
   * @public
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * The identifier of the DB instance that you want to create the snapshot of.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBInstance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSnapshotResult {
  /**
   * Contains the details of an Amazon RDS DB snapshot.
   *
   * This data type is used as a response element in the `DescribeDBSnapshots` action.
   *
   * @public
   */
  DBSnapshot?: DBSnapshot | undefined;
}

/**
 * @public
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * The name for the DB subnet group. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.
   * - Must not be default.
   * - First character must be a letter.
   *
   * Example: `mydbsubnetgroup`
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
   * Tags to assign to the DB subnet group.
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
   * Contains the details of an Amazon RDS DB subnet group.
   *
   * This data type is used as a response element in the `DescribeDBSubnetGroups` action.
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
   * The Amazon Resource Name (ARN) of the SNS topic created for event notification. SNS automatically creates the ARN when you create a topic and subscribe to it.
   *
   * > **Note:** RDS doesn't support FIFO (first in, first out) topics. For more information, see [Message ordering and deduplication (FIFO topics)](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html) in the *Amazon Simple Notification Service Developer Guide*.
   *
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you set this parameter to `db-instance`. For RDS Proxy events, specify `db-proxy`. If this value isn't specified, all events are returned.
   *
   * Valid Values:`db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment`
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories for a particular source type (`SourceType`) that you want to subscribe to. You can see a list of the categories for a given source type in the "Amazon RDS event categories and event messages" section of the [*Amazon RDS User Guide*](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html) or the [*Amazon Aurora User Guide*](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html). You can also see this list by using the `DescribeEventCategories` operation.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens.
   *
   * Constraints:
   *
   * - If `SourceIds` are supplied, `SourceType` must also be provided.
   * - If the source type is a DB instance, a `DBInstanceIdentifier` value must be supplied.
   * - If the source type is a DB cluster, a `DBClusterIdentifier` value must be supplied.
   * - If the source type is a DB parameter group, a `DBParameterGroupName` value must be supplied.
   * - If the source type is a DB security group, a `DBSecurityGroupName` value must be supplied.
   * - If the source type is a DB snapshot, a `DBSnapshotIdentifier` value must be supplied.
   * - If the source type is a DB cluster snapshot, a `DBClusterSnapshotIdentifier` value must be supplied.
   * - If the source type is an RDS Proxy, a `DBProxyName` value must be supplied.
   *
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * Specifies whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
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
   * Contains the results of a successful invocation of the `DescribeEventSubscriptions` action.
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
   * The cluster identifier for this global database cluster. This parameter is stored as a lowercase string.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) to use as the primary cluster of the global database.
   *
   * If you provide a value for this parameter, don't specify values for the following settings because Amazon Aurora uses the values from the specified source DB cluster:
   *
   * - `DatabaseName`
   * - `Engine`
   * - `EngineVersion`
   * - `StorageEncrypted`
   *
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * The database engine to use for this global database cluster.
   *
   * Valid Values: `aurora-mysql | aurora-postgresql`
   *
   * Constraints:
   *
   * - Can't be specified if `SourceDBClusterIdentifier` is specified. In this case, Amazon Aurora uses the engine of the source DB cluster.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The engine version to use for this global database cluster.
   *
   * Constraints:
   *
   * - Can't be specified if `SourceDBClusterIdentifier` is specified. In this case, Amazon Aurora uses the engine version of the source DB cluster.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The lifecycle type for this global database cluster.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your global cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the global cluster will fail if the DB major version is past its end of standard support date.
   *
   * This setting only applies to Aurora PostgreSQL-based global databases.
   *
   * You can use this setting to enroll your global cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your global cluster past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*.
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * Specifies whether to enable deletion protection for the new global database cluster. The global database can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The name for your database of up to 64 alphanumeric characters. If you don't specify a name, Amazon Aurora doesn't create a database in the global database cluster.
   *
   * Constraints:
   *
   * - Can't be specified if `SourceDBClusterIdentifier` is specified. In this case, Amazon Aurora uses the database name from the source DB cluster.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Specifies whether to enable storage encryption for the new global database cluster.
   *
   * Constraints:
   *
   * - Can't be specified if `SourceDBClusterIdentifier` is specified. In this case, Amazon Aurora uses the setting from the source DB cluster.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * Tags to assign to the global cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the state of scheduled or in-process operations on a global cluster (Aurora global database). This data type is empty unless a switchover or failover operation is scheduled or is in progress on the Aurora global database.
 *
 * @public
 */
export interface FailoverState {
  /**
   * The current status of the global cluster. Possible values are as follows:
   *
   * - pending – The service received a request to switch over or fail over the global cluster. The global cluster's primary DB cluster and the specified secondary DB cluster are being verified before the operation starts.
   * - failing-over – Aurora is promoting the chosen secondary Aurora DB cluster to become the new primary DB cluster to fail over the global cluster.
   * - cancelling – The request to switch over or fail over the global cluster was cancelled and the primary Aurora DB cluster and the selected secondary Aurora DB cluster are returning to their previous states.
   * - switching-over – This status covers the range of Aurora internal operations that take place during the switchover process, such as demoting the primary Aurora DB cluster, promoting the secondary Aurora DB cluster, and synchronizing replicas.
   *
   * @public
   */
  Status?: FailoverStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Aurora DB cluster that is currently being demoted, and which is associated with this state.
   *
   * @public
   */
  FromDbClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Aurora DB cluster that is currently being promoted, and which is associated with this state.
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
 * A data structure with information about any primary and secondary clusters associated with a global cluster (Aurora global database).
 *
 * @public
 */
export interface GlobalClusterMember {
  /**
   * The Amazon Resource Name (ARN) for each Aurora DB cluster in the global cluster.
   *
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the global cluster.
   *
   * @public
   */
  Readers?: string[] | undefined;

  /**
   * Indicates whether the Aurora DB cluster is the primary cluster (that is, has read-write capability) for the global cluster with which it is associated.
   *
   * @public
   */
  IsWriter?: boolean | undefined;

  /**
   * The status of write forwarding for a secondary cluster in the global cluster.
   *
   * @public
   */
  GlobalWriteForwardingStatus?: WriteForwardingStatus | undefined;

  /**
   * The status of synchronization of each Aurora DB cluster in the global cluster.
   *
   * @public
   */
  SynchronizationStatus?: GlobalClusterMemberSynchronizationStatus | undefined;
}

/**
 * A data type representing an Aurora global database.
 *
 * @public
 */
export interface GlobalCluster {
  /**
   * Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database cluster.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * The Amazon Web Services [partition](https://docs.aws.amazon.com/glossary/latest/reference/glos-chap.html?id=docs_gateway#partition)-unique, immutable identifier for the global database cluster. This identifier is found in Amazon Web Services CloudTrail log entries whenever the Amazon Web Services KMS key for the DB cluster is accessed.
   *
   * @public
   */
  GlobalClusterResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the global database cluster.
   *
   * @public
   */
  GlobalClusterArn?: string | undefined;

  /**
   * Specifies the current state of this global database cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The Aurora database engine used by the global database cluster.
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
   * The lifecycle type for the global cluster.
   *
   * For more information, see CreateGlobalCluster.
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * The default database name within the new global database cluster.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The storage encryption setting for the global database cluster.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The type of encryption used to protect data at rest in the global database cluster. Possible values:
   *
   * - `none` - The global database cluster is not encrypted.
   * - `sse-rds` - The global database cluster is encrypted using an Amazon Web Services owned KMS key.
   * - `sse-kms` - The global database cluster is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * The deletion protection setting for the new global database cluster.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The list of primary and secondary clusters within the global database cluster.
   *
   * @public
   */
  GlobalClusterMembers?: GlobalClusterMember[] | undefined;

  /**
   * The writer endpoint for the new global database cluster. This endpoint always points to the writer DB instance in the current primary cluster.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * A data object containing all properties for the current state of an in-process or pending switchover or failover process for this global cluster (Aurora global database). This object is empty unless the `SwitchoverGlobalCluster` or `FailoverGlobalCluster` operation was called on this global cluster.
   *
   * @public
   */
  FailoverState?: FailoverState | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
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
   * A data type representing an Aurora global database.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationMessage {
  /**
   * The Amazon Resource Name (ARN) of the database to use as the source for replication.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The ARN of the Redshift data warehouse to use as the target for replication.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * The name of the integration.
   *
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default Amazon Web Services owned key.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * You can only include this parameter if you specify the `KMSKeyId` parameter.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Data filtering options for the integration. For more information, see [Data filtering for Aurora zero-ETL integrations with Amazon Redshift](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/zero-etl.filtering.html) or [Data filtering for Amazon RDS zero-ETL integrations with Amazon Redshift](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/zero-etl.filtering.html).
   *
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * A description of the integration.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * An error associated with a zero-ETL integration with Amazon Redshift.
 *
 * @public
 */
export interface IntegrationError {
  /**
   * The error code associated with the integration.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * A message explaining the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * A zero-ETL integration with Amazon Redshift.
 *
 * @public
 */
export interface Integration {
  /**
   * The Amazon Resource Name (ARN) of the database used as the source for replication.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The ARN of the Redshift data warehouse used as the target for replication.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The name of the integration.
   *
   * @public
   */
  IntegrationName?: string | undefined;

  /**
   * The ARN of the integration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key used to to encrypt the integration.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * The encryption context for the integration. For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * The current status of the integration.
   *
   * @public
   */
  Status?: IntegrationStatus | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Data filters for the integration. These filters determine which tables from the source database are sent to the target Amazon Redshift data warehouse.
   *
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * A description of the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The time when the integration was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * Any errors associated with the integration.
   *
   * @public
   */
  Errors?: IntegrationError[] | undefined;
}

/**
 * @public
 */
export interface CreateOptionGroupMessage {
  /**
   * Specifies the name of the option group to be created.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * Example: `myoptiongroup`
   *
   * @public
   */
  OptionGroupName: string | undefined;

  /**
   * The name of the engine to associate this option group with.
   *
   * Valid Values:
   *
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   *
   * @public
   */
  EngineName: string | undefined;

  /**
   * Specifies the major version of the engine that this option group should be associated with.
   *
   * @public
   */
  MajorEngineVersion: string | undefined;

  /**
   * The description of the option group.
   *
   * @public
   */
  OptionGroupDescription: string | undefined;

  /**
   * Tags to assign to the option group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateOptionGroupResult {
  /**
   * @public
   */
  OptionGroup?: OptionGroup | undefined;
}

/**
 * @public
 */
export interface CreateTenantDatabaseMessage {
  /**
   * The user-supplied DB instance identifier. RDS creates your tenant database in this DB instance. This parameter isn't case-sensitive.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The user-supplied name of the tenant database that you want to create in your DB instance. This parameter has the same constraints as `DBName` in `CreateDBInstance`.
   *
   * @public
   */
  TenantDBName: string | undefined;

  /**
   * The name for the master user account in your tenant database. RDS creates this user account in the tenant database and grants privileges to the master user. This parameter is case-sensitive.
   *
   * Constraints:
   *
   * - Must be 1 to 16 letters, numbers, or underscores.
   * - First character must be a letter.
   * - Can't be a reserved word for the chosen database engine.
   *
   * @public
   */
  MasterUsername: string | undefined;

  /**
   * The password for the master user in your tenant database.
   *
   * Constraints:
   *
   * - Must be 8 to 30 characters.
   * - Can include any printable ASCII character except forward slash (`/`), double quote (`"`), at symbol (`@`), ampersand (`&`), or single quote (`'`).
   * - Can't be specified when `ManageMasterUserPassword` is enabled.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The character set for your tenant database. If you don't specify a value, the character set name defaults to `AL32UTF8`.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The `NCHAR` value for the tenant database.
   *
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - Can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance.
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
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A response element in the `ModifyTenantDatabase` operation that describes changes that will be applied. Specific changes are identified by subelements.
 *
 * @public
 */
export interface TenantDatabasePendingModifiedValues {
  /**
   * The master password for the tenant database.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The name of the tenant database.
   *
   * @public
   */
  TenantDBName?: string | undefined;
}

/**
 * A tenant database in the DB instance. This data type is an element in the response to the `DescribeTenantDatabases` action.
 *
 * @public
 */
export interface TenantDatabase {
  /**
   * The creation time of the tenant database.
   *
   * @public
   */
  TenantDatabaseCreateTime?: Date | undefined;

  /**
   * The ID of the DB instance that contains the tenant database.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * The database name of the tenant database.
   *
   * @public
   */
  TenantDBName?: string | undefined;

  /**
   * The status of the tenant database.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The master username of the tenant database.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The Amazon Web Services Region-unique, immutable identifier for the DB instance.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * The Amazon Web Services Region-unique, immutable identifier for the tenant database.
   *
   * @public
   */
  TenantDatabaseResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the tenant database.
   *
   * @public
   */
  TenantDatabaseARN?: string | undefined;

  /**
   * The character set of the tenant database.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The `NCHAR` character set name of the tenant database.
   *
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * Specifies whether deletion protection is enabled for the DB instance.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Information about pending changes for a tenant database.
   *
   * @public
   */
  PendingModifiedValues?: TenantDatabasePendingModifiedValues | undefined;

  /**
   * Contains the secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
   *
   * @public
   */
  MasterUserSecret?: MasterUserSecret | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTenantDatabaseResult {
  /**
   * A tenant database in the DB instance. This data type is an element in the response to the `DescribeTenantDatabases` action.
   *
   * @public
   */
  TenantDatabase?: TenantDatabase | undefined;
}

/**
 * @public
 */
export interface DeleteBlueGreenDeploymentRequest {
  /**
   * The unique identifier of the blue/green deployment to delete. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match an existing blue/green deployment identifier.
   *
   * @public
   */
  BlueGreenDeploymentIdentifier: string | undefined;

  /**
   * Specifies whether to delete the resources in the green environment. You can't specify this option if the blue/green deployment [status](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BlueGreenDeployment.html) is `SWITCHOVER_COMPLETED`.
   *
   * @public
   */
  DeleteTarget?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBlueGreenDeploymentResponse {
  /**
   * Details about a blue/green deployment.
   *
   * For more information, see [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html) in the *Amazon RDS User Guide* and [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  BlueGreenDeployment?: BlueGreenDeployment | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDBEngineVersionMessage {
  /**
   * The database engine.
   *
   * RDS Custom for Oracle supports the following values:
   *
   * - `custom-oracle-ee`
   * - `custom-oracle-ee-cdb`
   * - `custom-oracle-se2`
   * - `custom-oracle-se2-cdb`
   *
   * RDS Custom for SQL Server supports the following values:
   *
   * - `custom-sqlserver-ee`
   * - `custom-sqlserver-se`
   * - `custom-sqlserver-web`
   * - `custom-sqlserver-dev`
   *
   * RDS for SQL Server supports the following values:
   *
   * - `sqlserver-ee` (Bring Your Own Media)
   * - `sqlserver-se` (Bring Your Own Media)
   * - `sqlserver-dev-ee`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The custom engine version (CEV) for your DB instance. This option is required for RDS Custom, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Amazon Web Services Region.
   *
   * @public
   */
  EngineVersion: string | undefined;
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
   * Specifies whether to skip the creation of a final DB cluster snapshot before RDS deletes the DB cluster. If you set this value to `true`, RDS doesn't create a final DB cluster snapshot. If you set this value to `false` or don't specify it, RDS creates a DB cluster snapshot before it deletes the DB cluster. By default, this parameter is disabled, so RDS creates a final DB cluster snapshot.
   *
   * > **Note:** If `SkipFinalSnapshot` is disabled, you must specify a value for the `FinalDBSnapshotIdentifier` parameter.
   *
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * The DB cluster snapshot identifier of the new DB cluster snapshot created when `SkipFinalSnapshot` is disabled.
   *
   * > **Note:** If you specify this parameter and also skip the creation of a final DB cluster snapshot with the `SkipFinalShapshot` parameter, the request results in an error.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;

  /**
   * Specifies whether to remove automated backups immediately after the DB cluster is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the Amazon Web Services Backup policy specifies a point-in-time restore rule.
   *
   * @public
   */
  DeleteAutomatedBackups?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterAutomatedBackupMessage {
  /**
   * The identifier for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.
   *
   * @public
   */
  DbClusterResourceId: string | undefined;
}

/**
 * Earliest and latest time an instance can be restored to:
 *
 * @public
 */
export interface RestoreWindow {
  /**
   * The earliest time you can restore an instance to.
   *
   * @public
   */
  EarliestTime?: Date | undefined;

  /**
   * The latest time you can restore an instance to.
   *
   * @public
   */
  LatestTime?: Date | undefined;
}

/**
 * An automated backup of a DB cluster. It consists of system backups, transaction logs, and the database cluster properties that existed at the time you deleted the source cluster.
 *
 * @public
 */
export interface DBClusterAutomatedBackup {
  /**
   * The name of the database engine for this automated backup.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The VPC ID associated with the DB cluster.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the automated backups.
   *
   * @public
   */
  DBClusterAutomatedBackupsArn?: string | undefined;

  /**
   * The identifier for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * Earliest and latest time an instance can be restored to:
   *
   * @public
   */
  RestoreWindow?: RestoreWindow | undefined;

  /**
   * The master user name of the automated backup.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The resource ID for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.
   *
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * The Amazon Web Services Region associated with the automated backup.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The license model information for this DB cluster automated backup.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * A list of status information for an automated backup:
   *
   * - `retained` - Automated backups for deleted clusters.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * The time when the DB cluster was created, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * Indicates whether the source DB cluster is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The type of encryption used to protect data at rest in the automated backup. Possible values:
   *
   * - `none` - The automated backup is not encrypted.
   * - `sse-rds` - The automated backup is encrypted using an Amazon Web Services owned KMS key.
   * - `sse-kms` - The automated backup is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * For all database engines except Amazon Aurora, `AllocatedStorage` specifies the allocated storage size in gibibytes (GiB). For Aurora, `AllocatedStorage` always returns 1, because Aurora DB cluster storage size isn't fixed, but instead automatically adjusts as needed.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The version of the database engine for the automated backup.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the source DB cluster.
   *
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * The retention period for the automated backups.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The engine mode of the database engine for the automated backup.
   *
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * The Availability Zones where instances in the DB cluster can be created. For information on Amazon Web Services Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html).
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The port number that the automated backup used for connections.
   *
   * Default: Inherits from the source DB cluster
   *
   * Valid Values: `1150-65535`
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The Amazon Web Services KMS key ID for an automated backup.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The storage type associated with the DB cluster.
   *
   * This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The IOPS (I/O operations per second) value for the automated backup.
   *
   * This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The storage throughput for the automated backup. The throughput is automatically set based on the IOPS that you provision, and is not configurable.
   *
   * This setting is only for non-Aurora Multi-AZ DB clusters.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.
   *
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterAutomatedBackupResult {
  /**
   * An automated backup of a DB cluster. It consists of system backups, transaction logs, and the database cluster properties that existed at the time you deleted the source cluster.
   *
   * @public
   */
  DBClusterAutomatedBackup?: DBClusterAutomatedBackup | undefined;
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
   * - Can't be associated with any DB clusters.
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
   * Contains the details for an Amazon RDS DB cluster snapshot
   *
   * This data type is used as a response element in the `DescribeDBClusterSnapshots` action.
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
   * Specifies whether to skip the creation of a final DB snapshot before deleting the instance. If you enable this parameter, RDS doesn't create a DB snapshot. If you don't enable this parameter, RDS creates a DB snapshot before the DB instance is deleted. By default, skip isn't enabled, and the DB snapshot is created.
   *
   * > **Note:** If you don't enable this parameter, you must specify the `FinalDBSnapshotIdentifier` parameter.
   *
   * When a DB instance is in a failure state and has a status of `failed`, `incompatible-restore`, or `incompatible-network`, RDS can delete the instance only if you enable this parameter.
   *
   * If you delete a read replica or an RDS Custom instance, you must enable this setting.
   *
   * This setting is required for RDS Custom.
   *
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * The `DBSnapshotIdentifier` of the new `DBSnapshot` created when the `SkipFinalSnapshot` parameter is disabled.
   *
   * > **Note:** If you enable this parameter and also enable SkipFinalShapshot, the command results in an error.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters or numbers.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   * - Can't be specified when deleting a read replica.
   *
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;

  /**
   * Specifies whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
   *
   * @public
   */
  DeleteAutomatedBackups?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * Parameter input for the `DeleteDBInstanceAutomatedBackup` operation.
 *
 * @public
 */
export interface DeleteDBInstanceAutomatedBackupMessage {
  /**
   * The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the automated backups to delete, for example, `arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE`.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  DBInstanceAutomatedBackupsArn?: string | undefined;
}

/**
 * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
 *
 * @public
 */
export interface DBInstanceAutomatedBackup {
  /**
   * The Amazon Resource Name (ARN) for the automated backups.
   *
   * @public
   */
  DBInstanceArn?: string | undefined;

  /**
   * The resource ID for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * The Amazon Web Services Region associated with the automated backup.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * The earliest and latest time a DB instance can be restored to.
   *
   * @public
   */
  RestoreWindow?: RestoreWindow | undefined;

  /**
   * The allocated storage size for the automated backup in gibibytes (GiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * A list of status information for an automated backup:
   *
   * - `active` - Automated backups for current instances.
   * - `retained` - Automated backups for deleted instances.
   * - `creating` - Automated backups that are waiting for the first automated snapshot to be available.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The port number that the automated backup used for connections.
   *
   * Default: Inherits from the source DB instance
   *
   * Valid Values: `1150-65535`
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The Availability Zone that the automated backup was created in. For information on Amazon Web Services Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The VPC ID associated with the DB instance.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The date and time when the DB instance was created.
   *
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * The master user name of an automated backup.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The name of the database engine for this automated backup.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version of the database engine for the automated backup.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The license model information for the automated backup.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The IOPS (I/O operations per second) value for the automated backup.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The storage throughput for the automated backup.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The option group the automated backup is associated with. If omitted, the default option group for the engine specified is used.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The ARN from the key store with which the automated backup is associated for TDE encryption.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * Indicates whether the automated backup is encrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The type of encryption used to protect data at rest in the automated backup. Possible values:
   *
   * - `none` - The automated backup is not encrypted.
   * - `sse-rds` - The automated backup is encrypted using an Amazon Web Services owned KMS key.
   * - `sse-kms` - The automated backup is encrypted using a customer managed KMS key or Amazon Web Services managed KMS key.
   *
   * @public
   */
  StorageEncryptionType?: StorageEncryptionType | undefined;

  /**
   * The storage type associated with the automated backup.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The Amazon Web Services KMS key ID for an automated backup.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The time zone of the automated backup. In most cases, the `Timezone` element is empty. `Timezone` content appears only for Microsoft SQL Server DB instances that were created with a time zone specified.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * True if mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
   *
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * The retention period for the automated backups.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the replicated automated backups.
   *
   * @public
   */
  DBInstanceAutomatedBackupsArn?: string | undefined;

  /**
   * The list of replications to different Amazon Web Services Regions associated with the automated backup.
   *
   * @public
   */
  DBInstanceAutomatedBackupsReplications?: DBInstanceAutomatedBackupsReplication[] | undefined;

  /**
   * The location where automated backups are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.
   *
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * Specifies whether the automatic backup is for a DB instance in the multi-tenant configuration (TRUE) or the single-tenant configuration (FALSE).
   *
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.
   *
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * The additional storage volumes associated with the automated backup.
   *
   * Valid Values: `GP3 | IO2`
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolume[] | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceAutomatedBackupResult {
  /**
   * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
   *
   * @public
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined;
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
   * - Can't be associated with any DB instances
   *
   * @public
   */
  DBParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBProxyRequest {
  /**
   * The name of the DB proxy to delete.
   *
   * @public
   */
  DBProxyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBProxyResponse {
  /**
   * The data structure representing the details of the DB proxy that you delete.
   *
   * @public
   */
  DBProxy?: DBProxy | undefined;
}

/**
 * @public
 */
export interface DeleteDBProxyEndpointRequest {
  /**
   * The name of the DB proxy endpoint to delete.
   *
   * @public
   */
  DBProxyEndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBProxyEndpointResponse {
  /**
   * The data structure representing the details of the DB proxy endpoint that you delete.
   *
   * @public
   */
  DBProxyEndpoint?: DBProxyEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteDBSecurityGroupMessage {
  /**
   * The name of the DB security group to delete.
   *
   * > **Note:** You can't delete the default DB security group.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   * - Must not be "Default"
   *
   * @public
   */
  DBSecurityGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBShardGroupMessage {
  /**
   * The name of the DB shard group to delete.
   *
   * @public
   */
  DBShardGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBSnapshotMessage {
  /**
   * The DB snapshot identifier.
   *
   * Constraints: Must be the name of an existing DB snapshot in the `available` state.
   *
   * @public
   */
  DBSnapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBSnapshotResult {
  /**
   * Contains the details of an Amazon RDS DB snapshot.
   *
   * This data type is used as a response element in the `DescribeDBSnapshots` action.
   *
   * @public
   */
  DBSnapshot?: DBSnapshot | undefined;
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
   * Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.
   *
   * Example: `mydbsubnetgroup`
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
   * The name of the RDS event notification subscription you want to delete.
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
   * Contains the results of a successful invocation of the `DescribeEventSubscriptions` action.
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
   * A data type representing an Aurora global database.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationMessage {
  /**
   * The unique identifier of the integration.
   *
   * @public
   */
  IntegrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptionGroupMessage {
  /**
   * The name of the option group to be deleted.
   *
   * > **Note:** You can't delete default option groups.
   *
   * @public
   */
  OptionGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTenantDatabaseMessage {
  /**
   * The user-supplied identifier for the DB instance that contains the tenant database that you want to delete.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The user-supplied name of the tenant database that you want to remove from your DB instance. Amazon RDS deletes the tenant database with this name. This parameter isn’t case-sensitive.
   *
   * @public
   */
  TenantDBName: string | undefined;

  /**
   * Specifies whether to skip the creation of a final DB snapshot before removing the tenant database from your DB instance. If you enable this parameter, RDS doesn't create a DB snapshot. If you don't enable this parameter, RDS creates a DB snapshot before it deletes the tenant database. By default, RDS doesn't skip the final snapshot. If you don't enable this parameter, you must specify the `FinalDBSnapshotIdentifier` parameter.
   *
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * The `DBSnapshotIdentifier` of the new `DBSnapshot` created when the `SkipFinalSnapshot` parameter is disabled.
   *
   * > **Note:** If you enable this parameter and also enable `SkipFinalShapshot`, the command results in an error.
   *
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTenantDatabaseResult {
  /**
   * A tenant database in the DB instance. This data type is an element in the response to the `DescribeTenantDatabases` action.
   *
   * @public
   */
  TenantDatabase?: TenantDatabase | undefined;
}

/**
 * @public
 */
export interface DeregisterDBProxyTargetsRequest {
  /**
   * The identifier of the `DBProxy` that is associated with the `DBProxyTargetGroup`.
   *
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * The identifier of the `DBProxyTargetGroup`.
   *
   * @public
   */
  TargetGroupName?: string | undefined;

  /**
   * One or more DB instance identifiers.
   *
   * @public
   */
  DBInstanceIdentifiers?: string[] | undefined;

  /**
   * One or more DB cluster identifiers.
   *
   * @public
   */
  DBClusterIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface DeregisterDBProxyTargetsResponse {}

/**
 * @public
 */
export interface DescribeAccountAttributesMessage {}

/**
 * A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as IDs. The filters supported by a describe operation are documented with the describe operation.
 *
 * > **Note:** Currently, wildcards are not supported in filters.
 *
 * The following actions can be filtered:
 *
 * - `DescribeDBCapacityReservations`
 * - `DescribeDBClusterBacktracks`
 * - `DescribeDBClusterEndpoints`
 * - `DescribeDBClusters`
 * - `DescribeDBInstances`
 * - `DescribeDBRecommendations`
 * - `DescribeDBShardGroups`
 * - `DescribePendingMaintenanceActions`
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * One or more filter values. Filter values are case-sensitive.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeBlueGreenDeploymentsRequest {
  /**
   * The blue/green deployment identifier. If you specify this parameter, the response only includes information about the specific blue/green deployment. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match an existing blue/green deployment identifier.
   *
   * @public
   */
  BlueGreenDeploymentIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more blue/green deployments to describe.
   *
   * Valid Values:
   *
   * - `blue-green-deployment-identifier` - Accepts system-generated identifiers for blue/green deployments. The results list only includes information about the blue/green deployments with the specified identifiers.
   * - `blue-green-deployment-name` - Accepts user-supplied names for blue/green deployments. The results list only includes information about the blue/green deployments with the specified names.
   * - `source` - Accepts source databases for a blue/green deployment. The results list only includes information about the blue/green deployments with the specified source databases.
   * - `target` - Accepts target databases for a blue/green deployment. The results list only includes information about the blue/green deployments with the specified target databases.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeBlueGreenDeployments` request. If you specify this parameter, the response only includes records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints:
   *
   * - Must be a minimum of 20.
   * - Can't exceed 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeBlueGreenDeploymentsResponse {
  /**
   * A list of blue/green deployments in the current account and Amazon Web Services Region.
   *
   * @public
   */
  BlueGreenDeployments?: BlueGreenDeployment[] | undefined;

  /**
   * A pagination token that can be used in a later `DescribeBlueGreenDeployments` request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A CA certificate for an Amazon Web Services account.
 *
 * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface Certificate {
  /**
   * The unique key that identifies a certificate.
   *
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * The type of the certificate.
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
   * The starting date from which the certificate is valid.
   *
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * The final date that the certificate continues to be valid.
   *
   * @public
   */
  ValidTill?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Indicates whether there is an override for the default certificate identifier.
   *
   * @public
   */
  CustomerOverride?: boolean | undefined;

  /**
   * If there is an override for the default certificate identifier, when the override expires.
   *
   * @public
   */
  CustomerOverrideValidTill?: Date | undefined;
}

/**
 * Data returned by the **DescribeCertificates** action.
 *
 * @public
 */
export interface CertificateMessage {
  /**
   * The default root CA for new databases created by your Amazon Web Services account. This is either the root CA override set on your Amazon Web Services account or the system default CA for the Region if no override exists. To override the default CA, use the `ModifyCertificates` operation.
   *
   * @public
   */
  DefaultCertificateForNewLaunches?: string | undefined;

  /**
   * The list of `Certificate` objects for the Amazon Web Services account.
   *
   * @public
   */
  Certificates?: Certificate[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeCertificates` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords` .
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesMessage {
  /**
   * The user-supplied certificate identifier. If this parameter is specified, information for only the identified certificate is returned. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match an existing CertificateIdentifier.
   *
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * This parameter isn't currently supported.
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
   * An optional pagination token provided by a previous `DescribeCertificates` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBCapacityReservationsRequest {
  /**
   * The identifier or the name of the DB capacity reservation to describe. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBCapacityReservations` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints:
   *
   * - Must be a minimum of 20.
   * - Can't exceed 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A filter that specifies which DB capacity reservations to describe.
   *
   * Supported filters:
   *
   * - `db-capacity-reservation-name` - Accepts DB capacity reservation names. The response includes only the reservations that these names identify. Use this filter to describe several reservations by name in one request.
   * - `state` - Accepts reservation states. The response includes only the reservations in these states.
   * - `engine` - Accepts database engine names. The response includes only the reservations that reserve capacity for these engines.
   * - `db-instance-class` - Accepts DB instance classes. The response includes only the reservations that reserve capacity for these DB instance classes.
   * - `availability-zone` - Accepts Availability Zone names. The response includes only the reservations that cover these Availability Zones.
   *
   * When you specify more than one value for a filter, the response includes the reservations that match any of those values. When you specify more than one filter, the response includes only the reservations that match every filter.
   *
   * Amazon RDS rejects the request when a filter name isn't in this list, or when a filter specifies no values.
   *
   * > **Note:** The `state` filter doesn't accept `expired`. To find an expired reservation, compare `EndDate` against the current date and time.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBCapacityReservationsResponse {
  /**
   * A list of DB capacity reservations.
   *
   * @public
   */
  DBCapacityReservations?: DBCapacityReservation[] | undefined;

  /**
   * A pagination token that you can use in a later `DescribeDBCapacityReservations` request. If this value is returned, more records are available beyond this response.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBClusterAutomatedBackupMessage {
  /**
   * The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `DBClusterAutomatedBackup` backups.
   *
   * @public
   */
  DBClusterAutomatedBackups?: DBClusterAutomatedBackup[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterAutomatedBackupsMessage {
  /**
   * The resource ID of the DB cluster that is the source of the automated backup. This parameter isn't case-sensitive.
   *
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * (Optional) The user-supplied DB cluster identifier. If this parameter is specified, it must match the identifier of an existing DB cluster. It returns information from the specific DB cluster's automated backup. This parameter isn't case-sensitive.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A filter that specifies which resources to return based on status.
   *
   * Supported filters are the following:
   *
   * - `status`
   *
   *   - `retained` - Automated backups for deleted clusters and after backup replication is stopped.
   * - `db-cluster-id` - Accepts DB cluster identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB cluster automated backups identified by these ARNs.
   * - `db-cluster-resource-id` - Accepts DB resource identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB cluster resources identified by these ARNs.
   *
   * Returns all resources by default. The status for each resource is specified in the response.
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
   * The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBClusterBacktracks` action.
 *
 * @public
 */
export interface DBClusterBacktrackMessage {
  /**
   * A pagination token that can be used in a later `DescribeDBClusterBacktracks` request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Contains a list of backtracks for the user.
   *
   * @public
   */
  DBClusterBacktracks?: DBClusterBacktrack[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterBacktracksMessage {
  /**
   * The DB cluster identifier of the DB cluster to be described. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster1`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * If specified, this value is the backtrack identifier of the backtrack to be described.
   *
   * Constraints:
   *
   * - Must contain a valid universally unique identifier (UUID). For more information about UUIDs, see [Universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *
   * Example: `123e4567-e89b-12d3-a456-426655440000`
   *
   * @public
   */
  BacktrackIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more DB clusters to describe. Supported filters include the following:
   *
   * - `db-cluster-backtrack-id` - Accepts backtrack identifiers. The results list includes information about only the backtracks identified by these identifiers.
   * - `db-cluster-backtrack-status` - Accepts any of the following backtrack status values:
   *
   *   - `applying`
   *   - `completed`
   *   - `failed`
   *   - `pending`
   *
   *   The results list includes information about only the backtracks identified by these values.
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
   * An optional pagination token provided by a previous `DescribeDBClusterBacktracks` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
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
   * This parameter isn't currently supported.
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
   * An optional pagination token provided by a previous `DescribeDBClusterParameterGroups` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This data type is used as a request parameter in the `ModifyDBParameterGroup` and `ResetDBParameterGroup` actions.
 *
 * This data type is used as a response element in the `DescribeEngineDefaultParameters` and `DescribeDBParameters` actions.
 *
 * @public
 */
export interface Parameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The value of the parameter.
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
   * The source of the parameter value.
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

  /**
   * The valid DB engine modes.
   *
   * @public
   */
  SupportedEngineModes?: string[] | undefined;
}

/**
 * Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
 *
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
   * An optional pagination token provided by a previous `DescribeDBClusterParameters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
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
   * A specific source to return parameters for.
   *
   * Valid Values:
   *
   * - `engine-default`
   * - `system`
   * - `user`
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * A filter that specifies one or more DB cluster parameters to describe.
   *
   * The only supported filter is `parameter-name`. The results list only includes information about the DB cluster parameters with these names.
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
   * An optional pagination token provided by a previous `DescribeDBClusterParameters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBClusters` action.
 *
 * @public
 */
export interface DBClusterMessage {
  /**
   * A pagination token that can be used in a later `DescribeDBClusters` request.
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
   * The user-supplied DB cluster identifier or the Amazon Resource Name (ARN) of the DB cluster. If this parameter is specified, information for only the specific DB cluster is returned. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match an existing DB cluster identifier.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more DB clusters to describe.
   *
   * Supported Filters:
   *
   * - `clone-group-id` - Accepts clone group identifiers. The results list only includes information about the DB clusters associated with these clone groups.
   * - `db-cluster-id` - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB clusters identified by these ARNs.
   * - `db-cluster-resource-id` - Accepts DB cluster resource identifiers. The results list will only include information about the DB clusters identified by these DB cluster resource identifiers.
   * - `domain` - Accepts Active Directory directory IDs. The results list only includes information about the DB clusters associated with these domains.
   * - `engine` - Accepts engine names. The results list only includes information about the DB clusters for these engines.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBClusters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies whether the output includes information about clusters shared from other Amazon Web Services accounts.
   *
   * @public
   */
  IncludeShared?: boolean | undefined;
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
 * Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB cluster snapshot. For more information, see the `ModifyDBClusterSnapshotAttribute` API action.
 *
 * @public
 */
export interface DBClusterSnapshotAttribute {
  /**
   * The name of the manual DB cluster snapshot attribute.
   *
   * The attribute named `restore` refers to the list of Amazon Web Services accounts that have permission to copy or restore the manual DB cluster snapshot. For more information, see the `ModifyDBClusterSnapshotAttribute` API action.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The value(s) for the manual DB cluster snapshot attribute.
   *
   * If the `AttributeName` field is set to `restore`, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual DB cluster snapshot. If a value of `all` is in the list, then the manual DB cluster snapshot is public and available for any Amazon Web Services account to copy or restore.
   *
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * Contains the results of a successful call to the `DescribeDBClusterSnapshotAttributes` API action.
 *
 * Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot. For more information, see the `ModifyDBClusterSnapshotAttribute` API action.
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
   * Contains the results of a successful call to the `DescribeDBClusterSnapshotAttributes` API action.
   *
   * Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot. For more information, see the `ModifyDBClusterSnapshotAttribute` API action.
   *
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * Provides a list of DB cluster snapshots for the user as the result of a call to the `DescribeDBClusterSnapshots` action.
 *
 * @public
 */
export interface DBClusterSnapshotMessage {
  /**
   * An optional pagination token provided by a previous `DescribeDBClusterSnapshots` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
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
   * The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the `DBClusterSnapshotIdentifier` parameter. This parameter isn't case-sensitive.
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
   * - `automated` - Return all DB cluster snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.
   * - `manual` - Return all DB cluster snapshots that have been taken by my Amazon Web Services account.
   * - `shared` - Return all manual DB cluster snapshots that have been shared to my Amazon Web Services account.
   * - `public` - Return all DB cluster snapshots that have been marked as public.
   *
   * If you don't specify a `SnapshotType` value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by enabling the `IncludeShared` parameter. You can include public DB cluster snapshots with these results by enabling the `IncludePublic` parameter.
   *
   * The `IncludeShared` and `IncludePublic` parameters don't apply for `SnapshotType` values of `manual` or `automated`. The `IncludePublic` parameter doesn't apply when `SnapshotType` is set to `shared`. The `IncludeShared` parameter doesn't apply when `SnapshotType` is set to `public`.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * A filter that specifies one or more DB cluster snapshots to describe.
   *
   * Supported filters:
   *
   * - `db-cluster-id` - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs).
   * - `db-cluster-snapshot-id` - Accepts DB cluster snapshot identifiers.
   * - `snapshot-type` - Accepts types of DB cluster snapshots.
   * - `engine` - Accepts names of database engines.
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
   * An optional pagination token provided by a previous `DescribeDBClusterSnapshots` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included.
   *
   * You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from another Amazon Web Services account by the `ModifyDBClusterSnapshotAttribute` API action.
   *
   * @public
   */
  IncludeShared?: boolean | undefined;

  /**
   * Specifies whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included.
   *
   * You can share a manual DB cluster snapshot as public by using the ModifyDBClusterSnapshotAttribute API action.
   *
   * @public
   */
  IncludePublic?: boolean | undefined;

  /**
   * A specific DB cluster resource ID to describe.
   *
   * @public
   */
  DbClusterResourceId?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBEngineVersions` action.
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
   * A list of `DBEngineVersion` elements.
   *
   * @public
   */
  DBEngineVersions?: DBEngineVersion[] | undefined;
}

/**
 *
 * @public
 */
export interface DescribeDBEngineVersionsMessage {
  /**
   * The database engine to return version details for.
   *
   * Valid Values:
   *
   * - `aurora-mysql`
   * - `aurora-postgresql`
   * - `custom-oracle-ee`
   * - `custom-oracle-ee-cdb`
   * - `custom-oracle-se2`
   * - `custom-oracle-se2-cdb`
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   * - `sqlserver-dev-ee`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * A specific database engine version to return details for.
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
   * - If supplied, must match an existing DB parameter group family.
   *
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * A filter that specifies one or more DB engine versions to describe.
   *
   * Supported filters:
   *
   * - `db-parameter-group-family` - Accepts parameter groups family names. The results list only includes information about the DB engine versions for these parameter group families.
   * - `engine` - Accepts engine names. The results list only includes information about the DB engine versions for these engines.
   * - `engine-mode` - Accepts DB engine modes. The results list only includes information about the DB engine versions for these engine modes. Valid DB engine modes are the following:
   *
   *   - `global`
   *   - `multimaster`
   *   - `parallelquery`
   *   - `provisioned`
   *   - `serverless`
   * - `engine-version` - Accepts engine versions. The results list only includes information about the DB engine versions for these engine versions.
   * - `status` - Accepts engine version statuses. The results list only includes information about the DB engine versions for these statuses. Valid statuses are the following:
   *
   *   - `available`
   *   - `deprecated`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more than the `MaxRecords` value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results.
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
   * Specifies whether to return only the default version of the specified engine or the engine and major version combination.
   *
   * @public
   */
  DefaultOnly?: boolean | undefined;

  /**
   * Specifies whether to list the supported character sets for each engine version.
   *
   * If this parameter is enabled and the requested engine supports the `CharacterSetName` parameter for `CreateDBInstance`, the response includes a list of supported character sets for each engine version.
   *
   * For RDS Custom, the default is not to list supported character sets. If you enable this parameter, RDS Custom returns no results.
   *
   * @public
   */
  ListSupportedCharacterSets?: boolean | undefined;

  /**
   * Specifies whether to list the supported time zones for each engine version.
   *
   * If this parameter is enabled and the requested engine supports the `TimeZone` parameter for `CreateDBInstance`, the response includes a list of supported time zones for each engine version.
   *
   * For RDS Custom, the default is not to list supported time zones. If you enable this parameter, RDS Custom returns no results.
   *
   * @public
   */
  ListSupportedTimezones?: boolean | undefined;

  /**
   * Specifies whether to also list the engine versions that aren't available. The default is to list only available engine versions.
   *
   * @public
   */
  IncludeAll?: boolean | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBInstanceAutomatedBackups` action.
 *
 * @public
 */
export interface DBInstanceAutomatedBackupMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `DBInstanceAutomatedBackup` instances.
   *
   * @public
   */
  DBInstanceAutomatedBackups?: DBInstanceAutomatedBackup[] | undefined;
}

/**
 * Parameter input for DescribeDBInstanceAutomatedBackups.
 *
 * @public
 */
export interface DescribeDBInstanceAutomatedBackupsMessage {
  /**
   * The resource ID of the DB instance that is the source of the automated backup. This parameter isn't case-sensitive.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * (Optional) The user-supplied instance identifier. If this parameter is specified, it must match the identifier of an existing DB instance. It returns information from the specific DB instance's automated backup. This parameter isn't case-sensitive.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * A filter that specifies which resources to return based on status.
   *
   * Supported filters are the following:
   *
   * - `status`
   *
   *   - `active` - Automated backups for current instances.
   *   - `creating` - Automated backups that are waiting for the first automated snapshot to be available.
   *   - `retained` - Automated backups for deleted instances and after backup replication is stopped.
   * - `db-instance-id` - Accepts DB instance identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB instance automated backups identified by these ARNs.
   * - `dbi-resource-id` - Accepts DB resource identifiers and Amazon Resource Names (ARNs). The results list includes only information about the DB instance resources identified by these ARNs.
   *
   * Returns all resources by default. The status for each resource is specified in the response.
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
   * The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicated automated backups, for example, `arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE`.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  DBInstanceAutomatedBackupsArn?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBInstances` action.
 *
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
   * A list of `DBInstance` instances.
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
   * The user-supplied instance identifier or the Amazon Resource Name (ARN) of the DB instance. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match the identifier of an existing DB instance.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more DB instances to describe.
   *
   * Supported Filters:
   *
   * - `db-cluster-id` - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes information about the DB instances associated with the DB clusters identified by these ARNs.
   * - `db-instance-id` - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs). The results list only includes information about the DB instances identified by these ARNs.
   * - `dbi-resource-id` - Accepts DB instance resource identifiers. The results list only includes information about the DB instances identified by these DB instance resource identifiers.
   * - `domain` - Accepts Active Directory directory IDs. The results list only includes information about the DB instances associated with these domains.
   * - `engine` - Accepts engine names. The results list only includes information about the DB instances for these engines.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
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
export interface DescribeDBLogFilesMessage {
  /**
   * The customer-assigned name of the DB instance that contains the log files you want to list.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBInstance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * Filters the available log files for log file names that contain the specified string.
   *
   * @public
   */
  FilenameContains?: string | undefined;

  /**
   * Filters the available log files for files written since the specified date, in POSIX timestamp format with milliseconds.
   *
   * @public
   */
  FileLastWritten?: number | undefined;

  /**
   * Filters the available log files for files larger than the specified size.
   *
   * @public
   */
  FileSize?: number | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This data type is used as a response element to `DescribeDBLogFiles`.
 *
 * @public
 */
export interface DescribeDBLogFilesDetails {
  /**
   * The name of the log file for the specified DB instance.
   *
   * @public
   */
  LogFileName?: string | undefined;

  /**
   * A POSIX timestamp when the last log entry was written.
   *
   * @public
   */
  LastWritten?: number | undefined;

  /**
   * The size, in bytes, of the log file for the specified DB instance.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * The response from a call to `DescribeDBLogFiles`.
 *
 * @public
 */
export interface DescribeDBLogFilesResponse {
  /**
   * The DB log files returned.
   *
   * @public
   */
  DescribeDBLogFiles?: DescribeDBLogFilesDetails[] | undefined;

  /**
   * A pagination token that can be used in a later `DescribeDBLogFiles` request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBMajorEngineVersionsRequest {
  /**
   * The database engine to return major version details for.
   *
   * Valid Values:
   *
   * - `aurora-mysql`
   * - `aurora-postgresql`
   * - `custom-sqlserver-ee`
   * - `custom-sqlserver-se`
   * - `custom-sqlserver-web`
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * A specific database major engine version to return details for.
   *
   * Example: `8.4`
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more than the `MaxRecords` value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 100
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * This data type is used as a response element in the operation `DescribeDBMajorEngineVersions`.
 *
 * You can use the information that this data type returns to plan for upgrades.
 *
 * This data type only returns information for the open source engines Amazon RDS for MariaDB, Amazon RDS for MySQL, Amazon RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL.
 *
 * @public
 */
export interface SupportedEngineLifecycle {
  /**
   * The type of lifecycle support that the engine version is in.
   *
   * This parameter returns the following values:
   *
   * - `open-source-rds-standard-support` - Indicates RDS standard support or Aurora standard support.
   * - `open-source-rds-extended-support` - Indicates Amazon RDS Extended Support.
   *
   * For Amazon RDS for MySQL, Amazon RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL, this parameter returns both `open-source-rds-standard-support` and `open-source-rds-extended-support`.
   *
   * For Amazon RDS for MariaDB, this parameter only returns the value `open-source-rds-standard-support`.
   *
   * For information about Amazon RDS Extended Support, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide* and [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  LifecycleSupportName: LifecycleSupportName | undefined;

  /**
   * The start date for the type of support returned by `LifecycleSupportName`.
   *
   * @public
   */
  LifecycleSupportStartDate: Date | undefined;

  /**
   * The end date for the type of support returned by `LifecycleSupportName`.
   *
   * @public
   */
  LifecycleSupportEndDate: Date | undefined;
}

/**
 * This data type is used as a response element in the operation `DescribeDBMajorEngineVersions`.
 *
 * @public
 */
export interface DBMajorEngineVersion {
  /**
   * The name of the database engine.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The major version number of the database engine.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * A list of the lifecycles supported by this engine for the `DescribeDBMajorEngineVersions` operation.
   *
   * @public
   */
  SupportedEngineLifecycles?: SupportedEngineLifecycle[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBMajorEngineVersionsResponse {
  /**
   * A list of `DBMajorEngineVersion` elements.
   *
   * @public
   */
  DBMajorEngineVersions?: DBMajorEngineVersion[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBParameterGroups` action.
 *
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
   * A list of `DBParameterGroup` instances.
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
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
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
 * Contains the result of a successful invocation of the `DescribeDBParameters` action.
 *
 * @public
 */
export interface DBParameterGroupDetails {
  /**
   * A list of `Parameter` values.
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
 *
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
   * A filter that specifies one or more DB parameters to describe.
   *
   * The only supported filter is `parameter-name`. The results list only includes information about the DB parameters with these names.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
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
export interface DescribeDBProxiesRequest {
  /**
   * The name of the DB proxy. If you omit this parameter, the output includes information about all DB proxies owned by your Amazon Web Services account ID.
   *
   * @public
   */
  DBProxyName?: string | undefined;

  /**
   * This parameter is not currently supported.
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
export interface DescribeDBProxiesResponse {
  /**
   * A return value representing an arbitrary number of `DBProxy` data structures.
   *
   * @public
   */
  DBProxies?: DBProxy[] | undefined;

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
export interface DescribeDBProxyEndpointsRequest {
  /**
   * The name of the DB proxy whose endpoints you want to describe. If you omit this parameter, the output includes information about all DB proxy endpoints associated with all your DB proxies.
   *
   * @public
   */
  DBProxyName?: string | undefined;

  /**
   * The name of a DB proxy endpoint to describe. If you omit this parameter, the output includes information about all DB proxy endpoints associated with the specified proxy.
   *
   * @public
   */
  DBProxyEndpointName?: string | undefined;

  /**
   * This parameter is not currently supported.
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
export interface DescribeDBProxyEndpointsResponse {
  /**
   * The list of `ProxyEndpoint` objects returned by the API operation.
   *
   * @public
   */
  DBProxyEndpoints?: DBProxyEndpoint[] | undefined;

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
export interface DescribeDBProxyTargetGroupsRequest {
  /**
   * The identifier of the `DBProxy` associated with the target group.
   *
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * The identifier of the `DBProxyTargetGroup` to describe.
   *
   * @public
   */
  TargetGroupName?: string | undefined;

  /**
   * This parameter is not currently supported.
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
 * Displays the settings that control the size and behavior of the connection pool associated with a `DBProxyTarget`.
 *
 * @public
 */
export interface ConnectionPoolConfigurationInfo {
  /**
   * The maximum size of the connection pool for each target in a target group. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *
   * @public
   */
  MaxConnectionsPercent?: number | undefined;

  /**
   * Controls how actively the proxy closes idle database connections in the connection pool. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group. With a high value, the proxy leaves a high percentage of idle database connections open. A low value causes the proxy to close more idle connections and return them to the database.
   *
   * @public
   */
  MaxIdleConnectionsPercent?: number | undefined;

  /**
   * The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the proxy has opened its maximum number of connections and all connections are busy with client sessions.
   *
   * @public
   */
  ConnectionBorrowTimeout?: number | undefined;

  /**
   * Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. Including an item in the list exempts that class of SQL operations from the pinning behavior. This setting is only supported for MySQL engine family databases. Currently, the only allowed value is `EXCLUDE_VARIABLE_SETS`.
   *
   * @public
   */
  SessionPinningFilters?: string[] | undefined;

  /**
   * One or more SQL statements for the proxy to run when opening each new database connection. The setting is typically used with `SET` statements to make sure that each connection has identical settings. The query added here must be valid. For including multiple variables in a single SET statement, use a comma separator. This is an optional field.
   *
   * For example: `SET variable1=value1, variable2=value2`
   *
   * > **Important:** Since you can access initialization query as part of target group configuration, it is not protected by authentication or cryptographic methods. Anyone with access to view or manage your proxy target group configuration can view the initialization query. You should not add sensitive data, such as passwords or long-lived encryption keys, to this option.
   *
   * @public
   */
  InitQuery?: string | undefined;
}

/**
 * Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.
 *
 * This data type is used as a response element in the `DescribeDBProxyTargetGroups` action.
 *
 * @public
 */
export interface DBProxyTargetGroup {
  /**
   * The identifier for the RDS proxy associated with this target group.
   *
   * @public
   */
  DBProxyName?: string | undefined;

  /**
   * The identifier for the target group. This name must be unique for all target groups owned by your Amazon Web Services account in the specified Amazon Web Services Region.
   *
   * @public
   */
  TargetGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) representing the target group.
   *
   * @public
   */
  TargetGroupArn?: string | undefined;

  /**
   * Indicates whether this target group is the first one used for connection requests by the associated proxy. Because each proxy is currently associated with a single target group, currently this setting is always `true`.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The current status of this target group. A status of `available` means the target group is correctly associated with a database. Other values indicate that you must wait for the target group to be ready, or take some action to resolve an issue.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The settings that determine the size and behavior of the connection pool for the target group.
   *
   * @public
   */
  ConnectionPoolConfig?: ConnectionPoolConfigurationInfo | undefined;

  /**
   * The date and time when the target group was first created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date and time when the target group was last updated.
   *
   * @public
   */
  UpdatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDBProxyTargetGroupsResponse {
  /**
   * An arbitrary number of `DBProxyTargetGroup` objects, containing details of the corresponding target groups.
   *
   * @public
   */
  TargetGroups?: DBProxyTargetGroup[] | undefined;

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
export interface DescribeDBProxyTargetsRequest {
  /**
   * The identifier of the `DBProxyTarget` to describe.
   *
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * The identifier of the `DBProxyTargetGroup` to describe.
   *
   * @public
   */
  TargetGroupName?: string | undefined;

  /**
   * This parameter is not currently supported.
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
 * Information about the connection health of an RDS Proxy target.
 *
 * @public
 */
export interface TargetHealth {
  /**
   * The current state of the connection health lifecycle for the RDS Proxy target. The following is a typical lifecycle example for the states of an RDS Proxy target:
   *
   * `registering` &gt; `unavailable` &gt; `available` &gt; `unavailable` &gt; `available`
   *
   * @public
   */
  State?: TargetState | undefined;

  /**
   * The reason for the current health `State` of the RDS Proxy target.
   *
   * @public
   */
  Reason?: TargetHealthReason | undefined;

  /**
   * A description of the health of the RDS Proxy target. If the `State` is `AVAILABLE`, a description is not included.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.
 *
 * This data type is used as a response element in the `DescribeDBProxyTargets` action.
 *
 * @public
 */
export interface DBProxyTarget {
  /**
   * The Amazon Resource Name (ARN) for the RDS DB instance or Aurora DB cluster.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The writer endpoint for the RDS DB instance or Aurora DB cluster.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The DB cluster identifier when the target represents an Aurora DB cluster. This field is blank when the target represents an RDS DB instance.
   *
   * @public
   */
  TrackedClusterId?: string | undefined;

  /**
   * The identifier representing the target. It can be the instance identifier for an RDS DB instance, or the cluster identifier for an Aurora DB cluster.
   *
   * @public
   */
  RdsResourceId?: string | undefined;

  /**
   * The port that the RDS Proxy uses to connect to the target RDS DB instance or Aurora DB cluster.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies the kind of database, such as an RDS DB instance or an Aurora DB cluster, that the target represents.
   *
   * @public
   */
  Type?: TargetType | undefined;

  /**
   * A value that indicates whether the target of the proxy can be used for read/write or read-only operations.
   *
   * @public
   */
  Role?: TargetRole | undefined;

  /**
   * Information about the connection health of the RDS Proxy target.
   *
   * @public
   */
  TargetHealth?: TargetHealth | undefined;
}

/**
 * @public
 */
export interface DescribeDBProxyTargetsResponse {
  /**
   * An arbitrary number of `DBProxyTarget` objects, containing details of the corresponding targets.
   *
   * @public
   */
  Targets?: DBProxyTarget[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A logical grouping of Performance Insights metrics for a related subject area. For example, the `db.sql` dimension group consists of the following dimensions:
 *
 * - `db.sql.id` - The hash of a running SQL statement, generated by Performance Insights.
 * - `db.sql.db_id` - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with `pi-`.
 * - `db.sql.statement` - The full text of the SQL statement that is running, for example, `SELECT * FROM employees`.
 * - `db.sql_tokenized.id` - The hash of the SQL digest generated by Performance Insights.
 *
 * > **Note:** Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.
 *
 * @public
 */
export interface PerformanceInsightsMetricDimensionGroup {
  /**
   * A list of specific dimensions from a dimension group. If this list isn't included, then all of the dimensions in the group were requested, or are present in the response.
   *
   * @public
   */
  Dimensions?: string[] | undefined;

  /**
   * The available dimension groups for Performance Insights metric type.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * The maximum number of items to fetch for this dimension group.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * A single Performance Insights metric query to process. You must provide the metric to the query. If other parameters aren't specified, Performance Insights returns all data points for the specified metric. Optionally, you can request the data points to be aggregated by dimension group (`GroupBy`) and return only those data points that match your criteria (`Filter`).
 *
 * Constraints:
 *
 * - Must be a valid Performance Insights query.
 *
 * @public
 */
export interface PerformanceInsightsMetricQuery {
  /**
   * A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.
   *
   * @public
   */
  GroupBy?: PerformanceInsightsMetricDimensionGroup | undefined;

  /**
   * The name of a Performance Insights metric to be measured.
   *
   * Valid Values:
   *
   * - `db.load.avg` - A scaled representation of the number of active sessions for the database engine.
   * - `db.sampledload.avg` - The raw number of active sessions for the database engine.
   * - The counter metrics listed in [Performance Insights operating system counters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS) in the *Amazon Aurora User Guide*.
   *
   * If the number of active sessions is less than an internal Performance Insights threshold, `db.load.avg` and `db.sampledload.avg` are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with `db.load.avg` showing the scaled values, `db.sampledload.avg` showing the raw values, and `db.sampledload.avg` less than `db.load.avg`. For most use cases, you can query `db.load.avg` only.
   *
   * @public
   */
  Metric?: string | undefined;
}

/**
 * The query to retrieve metric data points.
 *
 * @public
 */
export interface MetricQuery {
  /**
   * The Performance Insights query that you can use to retrieve Performance Insights metric data points.
   *
   * @public
   */
  PerformanceInsightsMetricQuery?: PerformanceInsightsMetricQuery | undefined;
}

/**
 * The metric reference details when the reference is a scalar.
 *
 * @public
 */
export interface ScalarReferenceDetails {
  /**
   * The value of a scalar reference.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * The reference details of a metric.
 *
 * @public
 */
export interface ReferenceDetails {
  /**
   * The metric reference details when the reference is a scalar.
   *
   * @public
   */
  ScalarReferenceDetails?: ScalarReferenceDetails | undefined;
}

/**
 * The reference (threshold) for a metric.
 *
 * @public
 */
export interface MetricReference {
  /**
   * The name of the metric reference.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The details of a performance issue.
   *
   * @public
   */
  ReferenceDetails?: ReferenceDetails | undefined;
}

/**
 * The representation of a metric.
 *
 * @public
 */
export interface Metric {
  /**
   * The name of a metric.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of metric references (thresholds).
   *
   * @public
   */
  References?: MetricReference[] | undefined;

  /**
   * The details of different statistics for a metric. The description might contain markdown.
   *
   * @public
   */
  StatisticsDetails?: string | undefined;

  /**
   * The query to retrieve metric data points.
   *
   * @public
   */
  MetricQuery?: MetricQuery | undefined;
}

/**
 * Details of the performance issue.
 *
 * @public
 */
export interface PerformanceIssueDetails {
  /**
   * The time when the performance issue started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the performance issue stopped.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The metrics that are relevant to the performance issue.
   *
   * @public
   */
  Metrics?: Metric[] | undefined;

  /**
   * The analysis of the performance issue. The information might contain markdown.
   *
   * @public
   */
  Analysis?: string | undefined;
}

/**
 * The details of an issue with your DB instances, DB clusters, and DB parameter groups.
 *
 * @public
 */
export interface IssueDetails {
  /**
   * A detailed description of the issue when the recommendation category is `performance`.
   *
   * @public
   */
  PerformanceIssueDetails?: PerformanceIssueDetails | undefined;
}

/**
 * A link to documentation that provides additional information for a recommendation.
 *
 * @public
 */
export interface DocLink {
  /**
   * The text with the link to documentation for the recommendation.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The URL for the documentation for the recommendation.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * The additional attributes of `RecommendedAction` data type.
 *
 * @public
 */
export interface ContextAttribute {
  /**
   * The key of `ContextAttribute`.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of `ContextAttribute`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A single parameter to use with the `RecommendedAction` API operation to apply the action.
 *
 * @public
 */
export interface RecommendedActionParameter {
  /**
   * The key of the parameter to use with the `RecommendedAction` API operation.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the parameter to use with the `RecommendedAction` API operation.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The recommended actions to apply to resolve the issues associated with your DB instances, DB clusters, and DB parameter groups.
 *
 * @public
 */
export interface RecommendedAction {
  /**
   * The unique identifier of the recommended action.
   *
   * @public
   */
  ActionId?: string | undefined;

  /**
   * A short description to summarize the action. The description might contain markdown.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * A detailed description of the action. The description might contain markdown.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An API operation for the action.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The parameters for the API operation.
   *
   * @public
   */
  Parameters?: RecommendedActionParameter[] | undefined;

  /**
   * The methods to apply the recommended action.
   *
   * Valid values:
   *
   * - `manual` - The action requires you to resolve the recommendation manually.
   * - `immediately` - The action is applied immediately.
   * - `next-maintainance-window` - The action is applied during the next scheduled maintainance.
   *
   * @public
   */
  ApplyModes?: string[] | undefined;

  /**
   * The status of the action.
   *
   * - `ready`
   * - `applied`
   * - `scheduled`
   * - `resolved`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The details of the issue.
   *
   * @public
   */
  IssueDetails?: IssueDetails | undefined;

  /**
   * The supporting attributes to explain the recommended action.
   *
   * @public
   */
  ContextAttributes?: ContextAttribute[] | undefined;
}

/**
 * The recommendation for your DB instances, DB clusters, and DB parameter groups.
 *
 * @public
 */
export interface DBRecommendation {
  /**
   * The unique identifier of the recommendation.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * A value that indicates the type of recommendation. This value determines how the description is rendered.
   *
   * @public
   */
  TypeId?: string | undefined;

  /**
   * The severity level of the recommendation. The severity level can help you decide the urgency with which to address the recommendation.
   *
   * Valid values:
   *
   * - `high`
   * - `medium`
   * - `low`
   * - `informational`
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the RDS resource associated with the recommendation.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The current status of the recommendation.
   *
   * Valid values:
   *
   * - `active` - The recommendations which are ready for you to apply.
   * - `pending` - The applied or scheduled recommendations which are in progress.
   * - `resolved` - The recommendations which are completed.
   * - `dismissed` - The recommendations that you dismissed.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The time when the recommendation was created. For example, `2023-09-28T01:13:53.931000+00:00`.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time when the recommendation was last updated.
   *
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * A short description of the issue identified for this recommendation. The description might contain markdown.
   *
   * @public
   */
  Detection?: string | undefined;

  /**
   * A short description of the recommendation to resolve an issue. The description might contain markdown.
   *
   * @public
   */
  Recommendation?: string | undefined;

  /**
   * A detailed description of the recommendation. The description might contain markdown.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The reason why this recommendation was created. The information might contain markdown.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * A list of recommended actions.
   *
   * @public
   */
  RecommendedActions?: RecommendedAction[] | undefined;

  /**
   * The category of the recommendation.
   *
   * Valid values:
   *
   * - `performance efficiency`
   * - `security`
   * - `reliability`
   * - `cost optimization`
   * - `operational excellence`
   * - `sustainability`
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The Amazon Web Services service that generated the recommendations.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * A short description of the recommendation type. The description might contain markdown.
   *
   * @public
   */
  TypeDetection?: string | undefined;

  /**
   * A short description that summarizes the recommendation to fix all the issues of the recommendation type. The description might contain markdown.
   *
   * @public
   */
  TypeRecommendation?: string | undefined;

  /**
   * A short description that explains the possible impact of an issue.
   *
   * @public
   */
  Impact?: string | undefined;

  /**
   * Additional information about the recommendation. The information might contain markdown.
   *
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * A link to documentation that provides additional information about the recommendation.
   *
   * @public
   */
  Links?: DocLink[] | undefined;

  /**
   * Details of the issue that caused the recommendation.
   *
   * @public
   */
  IssueDetails?: IssueDetails | undefined;
}

/**
 * @public
 */
export interface DBRecommendationsMessage {
  /**
   * A list of recommendations which is returned from `DescribeDBRecommendations` API request.
   *
   * @public
   */
  DBRecommendations?: DBRecommendation[] | undefined;

  /**
   * An optional pagination token provided by a previous `DBRecommendationsMessage` request. This token can be used later in a `DescribeDBRecomendations` request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBRecommendationsMessage {
  /**
   * A filter to include only the recommendations that were updated after this specified time.
   *
   * @public
   */
  LastUpdatedAfter?: Date | undefined;

  /**
   * A filter to include only the recommendations that were updated before this specified time.
   *
   * @public
   */
  LastUpdatedBefore?: Date | undefined;

  /**
   * The language that you choose to return the list of recommendations.
   *
   * Valid values:
   *
   * - `en`
   * - `en_UK`
   * - `de`
   * - `es`
   * - `fr`
   * - `id`
   * - `it`
   * - `ja`
   * - `ko`
   * - `pt_BR`
   * - `zh_TW`
   * - `zh_CN`
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * A filter that specifies one or more recommendations to describe.
   *
   * Supported Filters:
   *
   * - `recommendation-id` - Accepts a list of recommendation identifiers. The results list only includes the recommendations whose identifier is one of the specified filter values.
   * - `status` - Accepts a list of recommendation statuses.
   *
   *   Valid values:
   *
   *   - `active` - The recommendations which are ready for you to apply.
   *   - `pending` - The applied or scheduled recommendations which are in progress.
   *   - `resolved` - The recommendations which are completed.
   *   - `dismissed` - The recommendations that you dismissed.
   *
   *   The results list only includes the recommendations whose status is one of the specified filter values.
   * - `severity` - Accepts a list of recommendation severities. The results list only includes the recommendations whose severity is one of the specified filter values.
   *
   *   Valid values:
   *
   *   - `high`
   *   - `medium`
   *   - `low`
   *   - `informational`
   * - `type-id` - Accepts a list of recommendation type identifiers. The results list only includes the recommendations whose type is one of the specified filter values.
   * - `dbi-resource-id` - Accepts a list of database resource identifiers. The results list only includes the recommendations that generated for the specified databases.
   * - `cluster-resource-id` - Accepts a list of cluster resource identifiers. The results list only includes the recommendations that generated for the specified clusters.
   * - `pg-arn` - Accepts a list of parameter group ARNs. The results list only includes the recommendations that generated for the specified parameter groups.
   * - `cluster-pg-arn` - Accepts a list of cluster parameter group ARNs. The results list only includes the recommendations that generated for the specified cluster parameter groups.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of recommendations to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBRecommendations` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBSecurityGroups` action.
 *
 * @public
 */
export interface DBSecurityGroupMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `DBSecurityGroup` instances.
   *
   * @public
   */
  DBSecurityGroups?: DBSecurityGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBSecurityGroupsMessage {
  /**
   * The name of the DB security group to return details for.
   *
   * @public
   */
  DBSecurityGroupName?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBSecurityGroups` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBShardGroupsMessage {
  /**
   * The user-supplied DB shard group identifier. If this parameter is specified, information for only the specific DB shard group is returned. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match an existing DB shard group identifier.
   *
   * @public
   */
  DBShardGroupIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more DB shard groups to describe.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBShardGroups` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDBShardGroupsResponse {
  /**
   * Contains a list of DB shard groups for the user.
   *
   * @public
   */
  DBShardGroups?: DBShardGroup[] | undefined;

  /**
   * A pagination token that can be used in a later `DescribeDBClusters` request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBSnapshotAttributesMessage {
  /**
   * The identifier for the DB snapshot to describe the attributes for.
   *
   * @public
   */
  DBSnapshotIdentifier: string | undefined;
}

/**
 * Contains the name and values of a manual DB snapshot attribute
 *
 * Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. For more information, see the `ModifyDBSnapshotAttribute` API.
 *
 * @public
 */
export interface DBSnapshotAttribute {
  /**
   * The name of the manual DB snapshot attribute.
   *
   * The attribute named `restore` refers to the list of Amazon Web Services accounts that have permission to copy or restore the manual DB cluster snapshot. For more information, see the `ModifyDBSnapshotAttribute` API action.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The value or values for the manual DB snapshot attribute.
   *
   * If the `AttributeName` field is set to `restore`, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual DB snapshot. If a value of `all` is in the list, then the manual DB snapshot is public and available for any Amazon Web Services account to copy or restore.
   *
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * Contains the results of a successful call to the `DescribeDBSnapshotAttributes` API action.
 *
 * Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB snapshot. For more information, see the `ModifyDBSnapshotAttribute` API action.
 *
 * @public
 */
export interface DBSnapshotAttributesResult {
  /**
   * The identifier of the manual DB snapshot that the attributes apply to.
   *
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * The list of attributes and values for the manual DB snapshot.
   *
   * @public
   */
  DBSnapshotAttributes?: DBSnapshotAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBSnapshotAttributesResult {
  /**
   * Contains the results of a successful call to the `DescribeDBSnapshotAttributes` API action.
   *
   * Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB snapshot. For more information, see the `ModifyDBSnapshotAttribute` API action.
   *
   * @public
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBSnapshots` action.
 *
 * @public
 */
export interface DBSnapshotMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `DBSnapshot` instances.
   *
   * @public
   */
  DBSnapshots?: DBSnapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBSnapshotsMessage {
  /**
   * The ID of the DB instance to retrieve the list of DB snapshots for. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match the identifier of an existing DBInstance.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * A specific DB snapshot identifier to describe. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - If supplied, must match the identifier of an existing DBSnapshot.
   * - If this identifier is for an automated snapshot, the `SnapshotType` parameter must also be specified.
   *
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * The type of snapshots to be returned. You can specify one of the following values:
   *
   * - `automated` - Return all DB snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.
   * - `manual` - Return all DB snapshots that have been taken by my Amazon Web Services account.
   * - `shared` - Return all manual DB snapshots that have been shared to my Amazon Web Services account.
   * - `public` - Return all DB snapshots that have been marked as public.
   * - `awsbackup` - Return the DB snapshots managed by the Amazon Web Services Backup service.
   *
   *   For information about Amazon Web Services Backup, see the [*Amazon Web Services Backup Developer Guide.*](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html)
   *
   *   The `awsbackup` type does not apply to Aurora.
   *
   * If you don't specify a `SnapshotType` value, then both automated and manual snapshots are returned. Shared and public DB snapshots are not included in the returned results by default. You can include shared snapshots with these results by enabling the `IncludeShared` parameter. You can include public snapshots with these results by enabling the `IncludePublic` parameter.
   *
   * The `IncludeShared` and `IncludePublic` parameters don't apply for `SnapshotType` values of `manual` or `automated`. The `IncludePublic` parameter doesn't apply when `SnapshotType` is set to `shared`. The `IncludeShared` parameter doesn't apply when `SnapshotType` is set to `public`.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * A filter that specifies one or more DB snapshots to describe.
   *
   * Supported filters:
   *
   * - `db-instance-id` - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs).
   * - `db-snapshot-id` - Accepts DB snapshot identifiers.
   * - `dbi-resource-id` - Accepts identifiers of source DB instances.
   * - `snapshot-type` - Accepts types of DB snapshots.
   * - `engine` - Accepts names of database engines.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeDBSnapshots` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specifies whether to include shared manual DB cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore. By default, these snapshots are not included.
   *
   * You can give an Amazon Web Services account permission to restore a manual DB snapshot from another Amazon Web Services account by using the `ModifyDBSnapshotAttribute` API action.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  IncludeShared?: boolean | undefined;

  /**
   * Specifies whether to include manual DB cluster snapshots that are public and can be copied or restored by any Amazon Web Services account. By default, the public snapshots are not included.
   *
   * You can share a manual DB snapshot as public by using the ModifyDBSnapshotAttribute API.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  IncludePublic?: boolean | undefined;

  /**
   * A specific DB resource ID to describe.
   *
   * @public
   */
  DbiResourceId?: string | undefined;
}

/**
 * Contains the details of a tenant database in a snapshot of a DB instance.
 *
 * @public
 */
export interface DBSnapshotTenantDatabase {
  /**
   * The identifier for the snapshot of the DB instance.
   *
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * The ID for the DB instance that contains the tenant databases.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * The resource identifier of the source CDB instance. This identifier can't be changed and is unique to an Amazon Web Services Region.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * The name of the database engine.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * The type of DB snapshot.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * The time the DB snapshot was taken, specified in Coordinated Universal Time (UTC). If you copy the snapshot, the creation time changes.
   *
   * @public
   */
  TenantDatabaseCreateTime?: Date | undefined;

  /**
   * The name of the tenant database.
   *
   * @public
   */
  TenantDBName?: string | undefined;

  /**
   * The master username of the tenant database.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The resource ID of the tenant database.
   *
   * @public
   */
  TenantDatabaseResourceId?: string | undefined;

  /**
   * The name of the character set of a tenant database.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the snapshot tenant database.
   *
   * @public
   */
  DBSnapshotTenantDatabaseARN?: string | undefined;

  /**
   * The `NCHAR` character set name of the tenant database.
   *
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DBSnapshotTenantDatabasesMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of DB snapshot tenant databases.
   *
   * @public
   */
  DBSnapshotTenantDatabases?: DBSnapshotTenantDatabase[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBSnapshotTenantDatabasesMessage {
  /**
   * The ID of the DB instance used to create the DB snapshots. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match the identifier of an existing `DBInstance`.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * The ID of a DB snapshot that contains the tenant databases to describe. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - If you specify this parameter, the value must match the ID of an existing DB snapshot.
   * - If you specify an automatic snapshot, you must also specify `SnapshotType`.
   *
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * The type of DB snapshots to be returned. You can specify one of the following values:
   *
   * - `automated` – All DB snapshots that have been automatically taken by Amazon RDS for my Amazon Web Services account.
   * - `manual` – All DB snapshots that have been taken by my Amazon Web Services account.
   * - `shared` – All manual DB snapshots that have been shared to my Amazon Web Services account.
   * - `public` – All DB snapshots that have been marked as public.
   * - `awsbackup` – All DB snapshots managed by the Amazon Web Services Backup service.
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * A filter that specifies one or more tenant databases to describe.
   *
   * Supported filters:
   *
   * - `tenant-db-name` - Tenant database names. The results list only includes information about the tenant databases that match these tenant DB names.
   * - `tenant-database-resource-id` - Tenant database resource identifiers. The results list only includes information about the tenant databases contained within the DB snapshots.
   * - `dbi-resource-id` - DB instance resource identifiers. The results list only includes information about snapshots containing tenant databases contained within the DB instances identified by these resource identifiers.
   * - `db-instance-id` - Accepts DB instance identifiers and DB instance Amazon Resource Names (ARNs).
   * - `db-snapshot-id` - Accepts DB snapshot identifiers.
   * - `snapshot-type` - Accepts types of DB snapshots.
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
   * An optional pagination token provided by a previous `DescribeDBSnapshotTenantDatabases` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A specific DB resource identifier to describe.
   *
   * @public
   */
  DbiResourceId?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeDBSubnetGroups` action.
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
   * A list of `DBSubnetGroup` instances.
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
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
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
   * This parameter isn't currently supported.
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
   * An optional pagination token provided by a previous `DescribeEngineDefaultClusterParameters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeEngineDefaultParameters` action.
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
   * Contains the result of a successful invocation of the `DescribeEngineDefaultParameters` action.
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
   * Valid Values:
   *
   * - `aurora-mysql5.7`
   * - `aurora-mysql8.0`
   * - `aurora-postgresql10`
   * - `aurora-postgresql11`
   * - `aurora-postgresql12`
   * - `aurora-postgresql13`
   * - `aurora-postgresql14`
   * - `custom-oracle-ee-19`
   * - `custom-oracle-ee-cdb-19`
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb10.2`
   * - `mariadb10.3`
   * - `mariadb10.4`
   * - `mariadb10.5`
   * - `mariadb10.6`
   * - `mysql5.7`
   * - `mysql8.0`
   * - `oracle-ee-19`
   * - `oracle-ee-cdb-19`
   * - `oracle-ee-cdb-21`
   * - `oracle-se2-19`
   * - `oracle-se2-cdb-19`
   * - `oracle-se2-cdb-21`
   * - `postgres10`
   * - `postgres11`
   * - `postgres12`
   * - `postgres13`
   * - `postgres14`
   * - `sqlserver-ee-11.0`
   * - `sqlserver-ee-12.0`
   * - `sqlserver-ee-13.0`
   * - `sqlserver-ee-14.0`
   * - `sqlserver-ee-15.0`
   * - `sqlserver-ex-11.0`
   * - `sqlserver-ex-12.0`
   * - `sqlserver-ex-13.0`
   * - `sqlserver-ex-14.0`
   * - `sqlserver-ex-15.0`
   * - `sqlserver-se-11.0`
   * - `sqlserver-se-12.0`
   * - `sqlserver-se-13.0`
   * - `sqlserver-se-14.0`
   * - `sqlserver-se-15.0`
   * - `sqlserver-web-11.0`
   * - `sqlserver-web-12.0`
   * - `sqlserver-web-13.0`
   * - `sqlserver-web-14.0`
   * - `sqlserver-web-15.0`
   *
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * A filter that specifies one or more parameters to describe.
   *
   * The only supported filter is `parameter-name`. The results list only includes information about the parameters with these names.
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
   * Contains the result of a successful invocation of the `DescribeEngineDefaultParameters` action.
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
   * The type of source that is generating the events. For RDS Proxy events, specify `db-proxy`.
   *
   * Valid Values: `db-instance` | `db-cluster` | `db-parameter-group` | `db-security-group` | `db-snapshot` | `db-cluster-snapshot` | `db-proxy`
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Contains the results of a successful invocation of the [DescribeEventCategories](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html) operation.
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
 * Data returned from the `DescribeEventCategories` operation.
 *
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * A list of `EventCategoriesMap` data types.
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
   * - If `SourceIdentifier` is supplied, `SourceType` must also be provided.
   * - If the source type is a DB instance, a `DBInstanceIdentifier` value must be supplied.
   * - If the source type is a DB cluster, a `DBClusterIdentifier` value must be supplied.
   * - If the source type is a DB parameter group, a `DBParameterGroupName` value must be supplied.
   * - If the source type is a DB security group, a `DBSecurityGroupName` value must be supplied.
   * - If the source type is a DB snapshot, a `DBSnapshotIdentifier` value must be supplied.
   * - If the source type is a DB cluster snapshot, a `DBClusterSnapshotIdentifier` value must be supplied.
   * - If the source type is an RDS Proxy, a `DBProxyName` value must be supplied.
   * - Can't end with a hyphen or contain two consecutive hyphens.
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
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
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
 * This data type is used as a response element in the [DescribeEvents](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html) action.
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
 * Contains the result of a successful invocation of the `DescribeEvents` action.
 *
 * @public
 */
export interface EventsMessage {
  /**
   * An optional pagination token provided by a previous Events request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `Event` instances.
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
   * The name of the RDS event notification subscription you want to describe.
   *
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
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
 * Data returned by the **DescribeEventSubscriptions** action.
 *
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
export interface DescribeExportTasksMessage {
  /**
   * The identifier of the snapshot or cluster export task to be described.
   *
   * @public
   */
  ExportTaskIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot or cluster exported to Amazon S3.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * Filters specify one or more snapshot or cluster exports to describe. The filters are specified as name-value pairs that define what to include in the output. Filter names and values are case-sensitive.
   *
   * Supported filters include the following:
   *
   * - `export-task-identifier` - An identifier for the snapshot or cluster export task.
   * - `s3-bucket` - The Amazon S3 bucket the data is exported to.
   * - `source-arn` - The Amazon Resource Name (ARN) of the snapshot or cluster exported to Amazon S3.
   * - `status` - The status of the export task. Must be lowercase. Valid statuses are the following:
   *
   *   - `canceled`
   *   - `canceling`
   *   - `complete`
   *   - `failed`
   *   - `in_progress`
   *   - `starting`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeExportTasks` request. If you specify this parameter, the response includes only records beyond the marker, up to the value specified by the `MaxRecords` parameter.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified value, a pagination token called a marker is included in the response. You can use the marker in a later `DescribeExportTasks` request to retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The type of source for the export.
   *
   * @public
   */
  SourceType?: ExportSourceType | undefined;
}

/**
 * @public
 */
export interface ExportTasksMessage {
  /**
   * A pagination token that can be used in a later `DescribeExportTasks` request. A marker is used for pagination to identify the location to begin output for the next response of `DescribeExportTasks`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Information about an export of a snapshot or cluster to Amazon S3.
   *
   * @public
   */
  ExportTasks?: ExportTask[] | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalClustersMessage {
  /**
   * The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - If supplied, must match an existing DBClusterIdentifier.
   *
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more global database clusters to describe. This parameter is case-sensitive.
   *
   * Currently, the only supported filter is `region`.
   *
   * If used, the request returns information about any global cluster with at least one member (primary or secondary) in the specified Amazon Web Services Regions.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
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
   * An optional pagination token provided by a previous `DescribeGlobalClusters` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The list of global clusters returned by this request.
   *
   * @public
   */
  GlobalClusters?: GlobalCluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeIntegrationsMessage {
  /**
   * The unique identifier of the integration.
   *
   * @public
   */
  IntegrationIdentifier?: string | undefined;

  /**
   * A filter that specifies one or more resources to return.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeIntegrations` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIntegrationsResponse {
  /**
   * A pagination token that can be used in a later `DescribeIntegrations` request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of integrations.
   *
   * @public
   */
  Integrations?: Integration[] | undefined;
}

/**
 * @public
 */
export interface DescribeOptionGroupOptionsMessage {
  /**
   * The name of the engine to describe options for.
   *
   * Valid Values:
   *
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   *
   * @public
   */
  EngineName: string | undefined;

  /**
   * If specified, filters the results to include only options for the specified major engine version.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
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
 * The minimum DB engine version required for each corresponding allowed value for an option setting.
 *
 * @public
 */
export interface MinimumEngineVersionPerAllowedValue {
  /**
   * The allowed value for an option setting.
   *
   * @public
   */
  AllowedValue?: string | undefined;

  /**
   * The minimum DB engine version required for the allowed value.
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;
}

/**
 * Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
 *
 * @public
 */
export interface OptionGroupOptionSetting {
  /**
   * The name of the option group option.
   *
   * @public
   */
  SettingName?: string | undefined;

  /**
   * The description of the option group option.
   *
   * @public
   */
  SettingDescription?: string | undefined;

  /**
   * The default value for the option group option.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The DB engine specific parameter type for the option group option.
   *
   * @public
   */
  ApplyType?: string | undefined;

  /**
   * Indicates the acceptable values for the option group option.
   *
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * Indicates whether this option group option can be changed from the default value.
   *
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * Indicates whether a value must be specified for this option setting of the option group option.
   *
   * @public
   */
  IsRequired?: boolean | undefined;

  /**
   * The minimum DB engine version required for the corresponding allowed value for this option setting.
   *
   * @public
   */
  MinimumEngineVersionPerAllowedValue?: MinimumEngineVersionPerAllowedValue[] | undefined;
}

/**
 * The version for an option. Option group option versions are returned by the `DescribeOptionGroupOptions` action.
 *
 * @public
 */
export interface OptionVersion {
  /**
   * The version of the option.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * Indicates whether the version is the default version of the option.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * Available option.
 *
 * @public
 */
export interface OptionGroupOption {
  /**
   * The name of the option.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the option.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the engine that this option can be applied to.
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * Indicates the major engine version that the option is available for.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * The minimum required engine version for the option to be applied.
   *
   * @public
   */
  MinimumRequiredMinorEngineVersion?: string | undefined;

  /**
   * Indicates whether the option requires a port.
   *
   * @public
   */
  PortRequired?: boolean | undefined;

  /**
   * If the option requires a port, specifies the default port for the option.
   *
   * @public
   */
  DefaultPort?: number | undefined;

  /**
   * The options that are prerequisites for this option.
   *
   * @public
   */
  OptionsDependedOn?: string[] | undefined;

  /**
   * The options that conflict with this option.
   *
   * @public
   */
  OptionsConflictsWith?: string[] | undefined;

  /**
   * Persistent options can't be removed from an option group while DB instances are associated with the option group. If you disassociate all DB instances from the option group, your can remove the persistent option from the option group.
   *
   * @public
   */
  Persistent?: boolean | undefined;

  /**
   * Permanent options can never be removed from an option group. An option group containing a permanent option can't be removed from a DB instance.
   *
   * @public
   */
  Permanent?: boolean | undefined;

  /**
   * If true, you must enable the Auto Minor Version Upgrade setting for your DB instance before you can use this option. You can enable Auto Minor Version Upgrade when you first create your DB instance, or by modifying your DB instance later.
   *
   * @public
   */
  RequiresAutoMinorEngineVersionUpgrade?: boolean | undefined;

  /**
   * If true, you can only use this option with a DB instance that is in a VPC.
   *
   * @public
   */
  VpcOnly?: boolean | undefined;

  /**
   * If true, you can change the option to an earlier version of the option. This only applies to options that have different versions available.
   *
   * @public
   */
  SupportsOptionVersionDowngrade?: boolean | undefined;

  /**
   * The option settings that are available (and the default value) for each option in an option group.
   *
   * @public
   */
  OptionGroupOptionSettings?: OptionGroupOptionSetting[] | undefined;

  /**
   * The versions that are available for the option.
   *
   * @public
   */
  OptionGroupOptionVersions?: OptionVersion[] | undefined;

  /**
   * Indicates whether the option can be copied across Amazon Web Services accounts.
   *
   * @public
   */
  CopyableCrossAccount?: boolean | undefined;
}

/**
 * @public
 */
export interface OptionGroupOptionsMessage {
  /**
   * List of available option group options.
   *
   * @public
   */
  OptionGroupOptions?: OptionGroupOption[] | undefined;

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
export interface DescribeOptionGroupsMessage {
  /**
   * The name of the option group to describe. Can't be supplied together with EngineName or MajorEngineVersion.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional pagination token provided by a previous DescribeOptionGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A filter to only include option groups associated with this database engine.
   *
   * Valid Values:
   *
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   *
   * @public
   */
  EngineName?: string | undefined;

  /**
   * Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified.
   *
   * @public
   */
  MajorEngineVersion?: string | undefined;
}

/**
 * List of option groups.
 *
 * @public
 */
export interface OptionGroups {
  /**
   * List of option groups.
   *
   * @public
   */
  OptionGroupsList?: OptionGroup[] | undefined;

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
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * The name of the database engine to describe DB instance options for.
   *
   * Valid Values:
   *
   * - `aurora-mysql`
   * - `aurora-postgresql`
   * - `custom-oracle-ee`
   * - `custom-oracle-ee-cdb`
   * - `custom-oracle-se2`
   * - `custom-oracle-se2-cdb`
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * A filter to include only the available options for the specified engine version.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * A filter to include only the available options for the specified DB instance class.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * A filter to include only the available options for the specified license model.
   *
   * RDS Custom supports only the BYOL licensing model.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The Availability Zone group associated with a Local Zone. Specify this parameter to retrieve available options for the Local Zones in the group.
   *
   * Omit this parameter to show the available options in the specified Amazon Web Services Region.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  AvailabilityZoneGroup?: string | undefined;

  /**
   * Specifies whether to show only VPC or non-VPC offerings. RDS Custom supports only VPC offerings.
   *
   * RDS Custom supports only VPC offerings. If you describe non-VPC offerings for RDS Custom, the output shows VPC offerings.
   *
   * @public
   */
  Vpc?: boolean | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 1000.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains the available options for additional storage volumes for a DB instance class.
 *
 * @public
 */
export interface AvailableAdditionalStorageVolumesOption {
  /**
   * Indicates whether the additional storage volume supports storage autoscaling.
   *
   * @public
   */
  SupportsStorageAutoscaling?: boolean | undefined;

  /**
   * Indicates whether the additional storage volume supports configurable storage throughput.
   *
   * @public
   */
  SupportsStorageThroughput?: boolean | undefined;

  /**
   * Indicates whether the additional storage volume supports provisioned IOPS.
   *
   * @public
   */
  SupportsIops?: boolean | undefined;

  /**
   * The storage type for the additional storage volume.
   *
   * Valid Values: `GP3 | IO2`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The minimum amount of storage that you can allocate for the additional storage volume, in gibibytes (GiB).
   *
   * @public
   */
  MinStorageSize?: number | undefined;

  /**
   * The maximum amount of storage that you can allocate for the additional storage volume, in gibibytes (GiB).
   *
   * @public
   */
  MaxStorageSize?: number | undefined;

  /**
   * The minimum number of I/O operations per second (IOPS) that the additional storage volume supports.
   *
   * @public
   */
  MinIops?: number | undefined;

  /**
   * The maximum number of I/O operations per second (IOPS) that the additional storage volume supports.
   *
   * @public
   */
  MaxIops?: number | undefined;

  /**
   * The minimum ratio of I/O operations per second (IOPS) to gibibytes (GiB) of storage for the additional storage volume.
   *
   * @public
   */
  MinIopsPerGib?: number | undefined;

  /**
   * The maximum ratio of I/O operations per second (IOPS) to gibibytes (GiB) of storage for the additional storage volume.
   *
   * @public
   */
  MaxIopsPerGib?: number | undefined;

  /**
   * The minimum storage throughput that the additional storage volume supports, in mebibytes per second (MiBps).
   *
   * @public
   */
  MinStorageThroughput?: number | undefined;

  /**
   * The maximum storage throughput that the additional storage volume supports, in mebibytes per second (MiBps).
   *
   * @public
   */
  MaxStorageThroughput?: number | undefined;
}

/**
 * Contains the available processor feature information for the DB instance class of a DB instance.
 *
 * For more information, see [Configuring the Processor of the DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor) in the *Amazon RDS User Guide.*
 *
 * @public
 */
export interface AvailableProcessorFeature {
  /**
   * The name of the processor feature. Valid names are `coreCount` and `threadsPerCore`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The default value for the processor feature of the DB instance class.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The allowed values for the processor feature of the DB instance class.
   *
   * @public
   */
  AllowedValues?: string | undefined;
}

/**
 * Contains a list of available options for a DB instance.
 *
 * This data type is used as a response element in the `DescribeOrderableDBInstanceOptions` action.
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
   * The Availability Zone group for a DB instance.
   *
   * @public
   */
  AvailabilityZoneGroup?: string | undefined;

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
   * Indicates whether a DB instance can have a read replica.
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
   * The storage type for a DB instance.
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
   * Indicates whether a DB instance supports storage throughput.
   *
   * @public
   */
  SupportsStorageThroughput?: boolean | undefined;

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
   * Indicates whether a DB instance supports Performance Insights.
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
   * Minimum storage throughput for a DB instance.
   *
   * @public
   */
  MinStorageThroughputPerDbInstance?: number | undefined;

  /**
   * Maximum storage throughput for a DB instance.
   *
   * @public
   */
  MaxStorageThroughputPerDbInstance?: number | undefined;

  /**
   * Minimum storage throughput to provisioned IOPS ratio for a DB instance.
   *
   * @public
   */
  MinStorageThroughputPerIops?: number | undefined;

  /**
   * Maximum storage throughput to provisioned IOPS ratio for a DB instance.
   *
   * @public
   */
  MaxStorageThroughputPerIops?: number | undefined;

  /**
   * A list of the available processor features for the DB instance class of a DB instance.
   *
   * @public
   */
  AvailableProcessorFeatures?: AvailableProcessorFeature[] | undefined;

  /**
   * A list of the supported DB engine modes.
   *
   * @public
   */
  SupportedEngineModes?: string[] | undefined;

  /**
   * Indicates whether Amazon RDS can automatically scale storage for DB instances that use the specified DB instance class.
   *
   * @public
   */
  SupportsStorageAutoscaling?: boolean | undefined;

  /**
   * Indicates whether a DB instance supports Kerberos Authentication.
   *
   * @public
   */
  SupportsKerberosAuthentication?: boolean | undefined;

  /**
   * Indicates whether a DB instance supports RDS on Outposts.
   *
   * For more information about RDS on Outposts, see [Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  OutpostCapable?: boolean | undefined;

  /**
   * The list of supported modes for Database Activity Streams. Aurora PostgreSQL returns the value `[sync, async]`. Aurora MySQL and RDS for Oracle return `[async]` only. If Database Activity Streams isn't supported, the return value is an empty list.
   *
   * @public
   */
  SupportedActivityStreamModes?: string[] | undefined;

  /**
   * Indicates whether you can use Aurora global databases with a specific combination of other DB engine attributes.
   *
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;

  /**
   * The network types supported by the DB instance (`IPV4` or `DUAL`).
   *
   * A DB instance can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  SupportedNetworkTypes?: string[] | undefined;

  /**
   * Indicates whether DB instances can be configured as a Multi-AZ DB cluster.
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  SupportsClusters?: boolean | undefined;

  /**
   * Indicates whether a DB instance supports using a dedicated log volume (DLV).
   *
   * @public
   */
  SupportsDedicatedLogVolume?: boolean | undefined;

  /**
   * Indicates whether the DB instance class supports additional storage volumes.
   *
   * @public
   */
  SupportsAdditionalStorageVolumes?: boolean | undefined;

  /**
   * Indicates whether a DB instance supports HTTP endpoints.
   *
   * @public
   */
  SupportsHttpEndpoint?: boolean | undefined;

  /**
   * The available options for additional storage volumes for the DB instance class.
   *
   * @public
   */
  AvailableAdditionalStorageVolumesOptions?: AvailableAdditionalStorageVolumesOption[] | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeOrderableDBInstanceOptions` action.
 *
 * @public
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * An `OrderableDBInstanceOption` structure containing information about orderable options for the DB instance.
   *
   * @public
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[] | undefined;

  /**
   * An optional pagination token provided by a previous OrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
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
   * - `db-cluster-id` - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list only includes pending maintenance actions for the DB clusters identified by these ARNs.
   * - `db-instance-id` - Accepts DB instance identifiers and DB instance ARNs. The results list only includes pending maintenance actions for the DB instances identified by these ARNs.
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
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
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
 * Data returned from the **DescribePendingMaintenanceActions** action.
 *
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
