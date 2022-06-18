// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { RDSServiceException as __BaseException } from "./RDSServiceException";

/**
 * <p>Describes a quota for an Amazon Web Services account.</p>
 *         <p>The following are account quotas:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>AllocatedStorage</code> - The total allocated storage per account, in GiB.
 *                     The used value is the total allocated storage in the account, in GiB.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>AuthorizationsPerDBSecurityGroup</code> - The number of ingress rules per DB security group.
 *                   The used value is the highest number of ingress rules in a DB security group in the account. Other
 *                   DB security groups in the account might have a lower number of ingress rules.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>CustomEndpointsPerDBCluster</code> - The number of custom endpoints per DB cluster.
 *                   The used value is the highest number of custom endpoints in a DB clusters in the account. Other
 *                   DB clusters in the account might have a lower number of custom endpoints.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DBClusterParameterGroups</code> - The number of DB cluster parameter groups
 *                     per account, excluding default parameter groups. The used value is the count of
 *                     nondefault DB cluster parameter groups in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DBClusterRoles</code> - The number of associated Amazon Web Services Identity and Access Management (IAM) roles per DB cluster.
 *                   The used value is the highest number of associated IAM roles for a DB cluster in the account. Other
 *                   DB clusters in the account might have a lower number of associated IAM roles.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DBClusters</code> - The number of DB clusters per account.
 *                   The used value is the count of DB clusters in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DBInstanceRoles</code> - The number of associated IAM roles per DB instance.
 *                   The used value is the highest number of associated IAM roles for a DB instance in the account. Other
 *                   DB instances in the account might have a lower number of associated IAM roles.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DBInstances</code> - The number of DB instances per account.
 *                   The used value is the count of the DB instances in the account.</p>
 *                 <p>Amazon RDS DB instances, Amazon Aurora DB instances, Amazon Neptune instances, and Amazon DocumentDB
 *                       instances apply to this quota.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DBParameterGroups</code> - The number of DB parameter groups per account,
 *                     excluding default parameter groups. The used value is the count of nondefault DB
 *                     parameter groups in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DBSecurityGroups</code> - The number of DB security groups (not VPC
 *                     security groups) per account, excluding the default security group. The used
 *                     value is the count of nondefault DB security groups in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DBSubnetGroups</code> - The number of DB subnet groups per account.
 *                   The used value is the count of the DB subnet groups in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>EventSubscriptions</code> - The number of event subscriptions per account.
 *                   The used value is the count of the event subscriptions in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ManualClusterSnapshots</code> - The number of manual DB cluster snapshots per account.
 *                   The used value is the count of the manual DB cluster snapshots in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ManualSnapshots</code> - The number of manual DB instance snapshots per account.
 *                   The used value is the count of the manual DB instance snapshots in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>OptionGroups</code> - The number of DB option groups per account, excluding
 *                     default option groups. The used value is the count of nondefault DB option
 *                     groups in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ReadReplicasPerMaster</code> - The number of read replicas per DB
 *                     instance. The used value is the highest number of read replicas for a DB
 *                     instance in the account. Other DB instances in the account might have a lower
 *                     number of read replicas.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ReservedDBInstances</code> - The number of reserved DB instances per account.
 *                   The used value is the count of the active reserved DB instances in the account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>SubnetsPerDBSubnetGroup</code> - The number of subnets per DB subnet group.
 *                   The used value is highest number of subnets for a DB subnet group in the account. Other
 *                   DB subnet groups in the account might have a lower number of subnets.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html">Quotas for Amazon RDS</a> in the
 *                 <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html">Quotas for Amazon Aurora</a> in the
 *                 <i>Amazon Aurora User Guide</i>.</p>
 */
export interface AccountQuota {
  /**
   * <p>The name of the Amazon RDS quota for this Amazon Web Services account.</p>
   */
  AccountQuotaName?: string;

  /**
   * <p>The amount currently used toward the quota maximum.</p>
   */
  Used?: number;

  /**
   * <p>The maximum allowed value for the quota.</p>
   */
  Max?: number;
}

export namespace AccountQuota {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountQuota): any => ({
    ...obj,
  });
}

export type ActivityStreamMode = "async" | "sync";

export type ActivityStreamStatus = "started" | "starting" | "stopped" | "stopping";

/**
 * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
 */
export interface EventSubscription {
  /**
   * <p>The Amazon Web Services customer account associated with the RDS event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>The RDS event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The topic ARN of the RDS event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The status of the RDS event notification subscription.</p>
   *         <p>Constraints:</p>
   *         <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p>
   *         <p>The status "no-permission" indicates that RDS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</p>
   */
  Status?: string;

  /**
   * <p>The time the RDS event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;

  /**
   * <p>The source type for the RDS event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * <p>A list of source IDs for the RDS event notification subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>A list of event categories for the RDS event notification subscription.</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>A Boolean value indicating if the subscription is enabled. True indicates the subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the event subscription.</p>
   */
  EventSubscriptionArn?: string;
}

export namespace EventSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata assigned to an Amazon RDS resource consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").</p>
   */
  Key?: string;

  /**
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").</p>
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

/**
 * <p>Provides information about a pending maintenance action for a resource.</p>
 */
export interface PendingMaintenanceAction {
  /**
   * <p>The type of pending maintenance action that is available for the resource.
   *           Valid actions are <code>system-update</code>, <code>db-upgrade</code>, <code>hardware-maintenance</code>,
   *           and <code>ca-certificate-rotation</code>.</p>
   */
  Action?: string;

  /**
   * <p>The date of the maintenance window when the action is applied.
   *            The maintenance action is applied to the resource during
   *            its first maintenance window after this date.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The date when the maintenance action is automatically applied.</p>
   *         <p>On this date, the maintenance action is applied to the resource as soon as possible,
   *             regardless of the maintenance window for the resource. There might be a delay of
   *             one or more days from this date before the maintenance action is applied.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * <p>The effective date when the pending maintenance action is applied
   *            to the resource. This date takes into account opt-in requests received from
   *            the <code>ApplyPendingMaintenanceAction</code> API, the <code>AutoAppliedAfterDate</code>,
   *            and the <code>ForcedApplyDate</code>. This value is blank if an
   *            opt-in request has not been received and nothing has been specified as
   *            <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;
}

export namespace PendingMaintenanceAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingMaintenanceAction): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the pending maintenance actions for a resource.</p>
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * <p>The ARN of the resource that has pending maintenance actions.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>A list that provides details about the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];
}

export namespace ResourcePendingMaintenanceActions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourcePendingMaintenanceActions): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>AuthorizeDBSecurityGroupIngress</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBSecurityGroups</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RevokeDBSecurityGroupIngress</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface EC2SecurityGroup {
  /**
   * <p>Provides the status of the EC2 security group. Status can be "authorizing", "authorized", "revoking", and "revoked".</p>
   */
  Status?: string;

  /**
   * <p>Specifies the name of the EC2 security group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>Specifies the id of the EC2 security group.</p>
   */
  EC2SecurityGroupId?: string;

  /**
   * <p>Specifies the Amazon Web Services ID of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> field.</p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace EC2SecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2SecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.</p>
 */
export interface IPRange {
  /**
   * <p>Specifies the status of the IP range. Status can be "authorizing", "authorized", "revoking", and "revoked".</p>
   */
  Status?: string;

  /**
   * <p>Specifies the IP range.</p>
   */
  CIDRIP?: string;
}

export namespace IPRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IPRange): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details for an Amazon RDS DB security group.</p>
 *         <p>This data type is used as a response element
 *           in the <code>DescribeDBSecurityGroups</code> action.</p>
 */
export interface DBSecurityGroup {
  /**
   * <p>Provides the Amazon Web Services ID of the owner of a specific DB security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>Specifies the name of the DB security group.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>Provides the description of the DB security group.</p>
   */
  DBSecurityGroupDescription?: string;

  /**
   * <p>Provides the VpcId of the DB security group.</p>
   */
  VpcId?: string;

  /**
   * <p>Contains a list of <code>EC2SecurityGroup</code> elements.</p>
   */
  EC2SecurityGroups?: EC2SecurityGroup[];

  /**
   * <p>Contains a list of <code>IPRange</code> elements.</p>
   */
  IPRanges?: IPRange[];

  /**
   * <p>The Amazon Resource Name (ARN) for the DB security group.</p>
   */
  DBSecurityGroupArn?: string;
}

export namespace DBSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of an Amazon RDS DB cluster parameter group.</p>
 *         <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.</p>
 */
export interface DBClusterParameterGroup {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>The name of the DB parameter group family that this DB cluster parameter group is compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the customer-specified description for this DB cluster parameter group.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupArn?: string;
}

export namespace DBClusterParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterParameterGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details for an Amazon RDS DB cluster snapshot</p>
 *         <p>This data type is used as a response element
 *           in the <code>DescribeDBClusterSnapshots</code> action.</p>
 */
export interface DBClusterSnapshot {
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster snapshot can be restored.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the identifier for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Specifies the name of the database engine for this DB cluster snapshot.</p>
   */
  Engine?: string;

  /**
   * <p>Provides the engine mode of the database engine for this DB cluster snapshot.</p>
   */
  EngineMode?: string;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the status of this DB cluster snapshot. Valid statuses are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>available</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>copying</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>creating</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>Specifies the port that the DB cluster was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Provides the VPC ID associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Provides the master username for this DB cluster snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Provides the version of the database engine for this DB cluster snapshot.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Provides the license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Provides the type of the DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Specifies whether the DB cluster snapshot is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the Amazon Web Services KMS key identifier for the encrypted DB cluster snapshot.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * <p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon
   *             Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;

  /**
   * <p>True if mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  TagList?: Tag[];
}

export namespace DBClusterSnapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterSnapshot): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of an Amazon RDS DB parameter group.</p>
 *         <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.</p>
 */
export interface DBParameterGroup {
  /**
   * <p>The name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The name of the DB parameter group family that this DB parameter group is compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the customer-specified description for this DB parameter group.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB parameter group.</p>
   */
  DBParameterGroupArn?: string;
}

export namespace DBParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the processor features of a DB instance class.</p>
 *         <p>To specify the number of CPU cores, use the <code>coreCount</code> feature name
 *             for the <code>Name</code> parameter. To specify the number of threads per core, use the
 *             <code>threadsPerCore</code> feature name for the <code>Name</code> parameter.</p>
 *         <p>You can set the processor features of the DB instance class for a DB instance when you
 *             call one of the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceFromS3</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceToPointInTime</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>You can view the valid processor values for a particular instance class by calling the
 *                 <code>DescribeOrderableDBInstanceOptions</code> action and specifying the
 *             instance class for the <code>DBInstanceClass</code> parameter.</p>
 *         <p>In addition, you can use the following actions for DB instance class processor information:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBSnapshots</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeValidDBInstanceModifications</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>If you call <code>DescribeDBInstances</code>, <code>ProcessorFeature</code> returns
 *             non-null values only if the following conditions are met:</p>
 *         <ul>
 *             <li>
 *                 <p>You are accessing an Oracle DB instance.</p>
 *             </li>
 *             <li>
 *                 <p>Your Oracle DB instance class supports configuring the number of CPU cores and threads per core.</p>
 *             </li>
 *             <li>
 *                 <p>The current number CPU cores and threads is set to a non-default value.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the
 *                 Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide.
 *             </i>
 *          </p>
 */
export interface ProcessorFeature {
  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code> and <code>threadsPerCore</code>.</p>
   */
  Name?: string;

  /**
   * <p>The value of a processor feature name.</p>
   */
  Value?: string;
}

export namespace ProcessorFeature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessorFeature): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of an Amazon RDS DB snapshot.</p>
 *         <p>This data type is used as a response element
 *           in the <code>DescribeDBSnapshots</code> action.</p>
 */
export interface DBSnapshot {
  /**
   * <p>Specifies the identifier for the DB snapshot.</p>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>Specifies the DB instance identifier of the DB instance this DB snapshot was created from.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Specifies when the snapshot was taken in Coordinated Universal Time (UTC). Changes for the copy when the snapshot is copied.</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the status of this DB snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies the port that the database engine was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Provides the VPC ID associated with the DB snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from
   *             which the snapshot was taken, was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>Provides the master username for the DB snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies the version of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>License model information for the restored DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Provides the type of the DB snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   */
  Iops?: number;

  /**
   * <p>Provides the option group name for the DB snapshot.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>The Amazon Web Services Region that the DB snapshot was created in or copied from.</p>
   */
  SourceRegion?: string;

  /**
   * <p>The DB snapshot Amazon Resource Name (ARN) that the DB snapshot was copied from. It only has a value in the case of a cross-account or cross-Region copy.</p>
   */
  SourceDBSnapshotIdentifier?: string;

  /**
   * <p>Specifies the storage type associated with DB snapshot.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Specifies whether the DB snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>If <code>Encrypted</code> is true, the Amazon Web Services KMS key identifier
   *             for the encrypted DB snapshot.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB snapshot.</p>
   */
  DBSnapshotArn?: string;

  /**
   * <p>The time zone of the DB snapshot.
   *             In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for
   *             snapshots taken from
   *             Microsoft SQL Server DB instances
   *             that were created with a time zone specified.</p>
   */
  Timezone?: string;

  /**
   * <p>True if mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class
   *             of the DB instance when the DB snapshot was created.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  TagList?: Tag[];

  /**
   * <p>Specifies the time of the CreateDBSnapshot operation in Coordinated Universal Time (UTC). Doesn't change when the snapshot is copied.</p>
   */
  OriginalSnapshotCreateTime?: Date;

  /**
   * <p>Specifies where manual snapshots are stored: Amazon Web Services Outposts or the Amazon Web Services Region.</p>
   */
  SnapshotTarget?: string;
}

export namespace DBSnapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshot): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RebootDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceToPointInTime</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface DBSecurityGroupMembership {
  /**
   * <p>The name of the DB security group.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>The status of the DB security group.</p>
   */
  Status?: string;
}

export namespace DBSecurityGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSecurityGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.</p>
 */
export interface OptionSetting {
  /**
   * <p>The name of the option that has settings that you can set.</p>
   */
  Name?: string;

  /**
   * <p>The current value of the option setting.</p>
   */
  Value?: string;

  /**
   * <p>The default value of the option setting.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The description of the option setting.</p>
   */
  Description?: string;

  /**
   * <p>The DB engine specific parameter type.</p>
   */
  ApplyType?: string;

  /**
   * <p>The data type of the option setting.</p>
   */
  DataType?: string;

  /**
   * <p>The allowed values of the option setting.</p>
   */
  AllowedValues?: string;

  /**
   * <p>A Boolean value that, when true, indicates the option setting can be modified from the default.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>Indicates if the option setting is part of a collection.</p>
   */
  IsCollection?: boolean;
}

export namespace OptionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionSetting): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element for queries on VPC security group membership.</p>
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export namespace VpcSecurityGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Option details.</p>
 */
export interface Option {
  /**
   * <p>The name of the option.</p>
   */
  OptionName?: string;

  /**
   * <p>The description of the option.</p>
   */
  OptionDescription?: string;

  /**
   * <p>Indicate if this option is persistent.</p>
   */
  Persistent?: boolean;

  /**
   * <p>Indicate if this option is permanent.</p>
   */
  Permanent?: boolean;

  /**
   * <p>If required, the port configured for this option to use.</p>
   */
  Port?: number;

  /**
   * <p>The version of the option.</p>
   */
  OptionVersion?: string;

  /**
   * <p>The option settings for this option.</p>
   */
  OptionSettings?: OptionSetting[];

  /**
   * <p>If the option requires access to a port, then this DB security group allows access to the port.</p>
   */
  DBSecurityGroupMemberships?: DBSecurityGroupMembership[];

  /**
   * <p>If the option requires access to a port, then this VPC security group allows access to the port.</p>
   */
  VpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];
}

export namespace Option {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Option): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface OptionGroup {
  /**
   * <p>Specifies the name of the option group.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>Provides a description of the option group.</p>
   */
  OptionGroupDescription?: string;

  /**
   * <p>Indicates the name of the engine that this option group can be applied to.</p>
   */
  EngineName?: string;

  /**
   * <p>Indicates the major engine version associated with this option group.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>Indicates what options are available in the option group.</p>
   */
  Options?: Option[];

  /**
   * <p>Indicates whether this option group can be applied to both VPC
   *            and non-VPC instances. The value <code>true</code> indicates the option group
   *            can be applied to both VPC and non-VPC instances.</p>
   */
  AllowsVpcAndNonVpcInstanceMemberships?: boolean;

  /**
   * <p>If <b>AllowsVpcAndNonVpcInstanceMemberships</b> is <code>false</code>, this field is blank.
   *            If <b>AllowsVpcAndNonVpcInstanceMemberships</b> is <code>true</code> and this field is blank,
   *            then this option group can be applied to both VPC and non-VPC instances.
   *            If this field contains a value, then this option group can only be
   *            applied to instances that are in the VPC indicated by this field.</p>
   */
  VpcId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the option group.</p>
   */
  OptionGroupArn?: string;
}

export namespace OptionGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroup): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.</p>
 */
export interface CharacterSet {
  /**
   * <p>The name of the character set.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>The description of the character set.</p>
   */
  CharacterSetDescription?: string;
}

export namespace CharacterSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CharacterSet): any => ({
    ...obj,
  });
}

/**
 * <p>A time zone associated with a
 *             <code>DBInstance</code>
 *             or a <code>DBSnapshot</code>.
 *             This data type is an element in the response to
 *             the <code>DescribeDBInstances</code>,
 *             the <code>DescribeDBSnapshots</code>,
 *             and the <code>DescribeDBEngineVersions</code>
 *             actions.</p>
 */
export interface Timezone {
  /**
   * <p>The name of the time zone.</p>
   */
  TimezoneName?: string;
}

export namespace Timezone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Timezone): any => ({
    ...obj,
  });
}

/**
 * <p>The version of the database engine that a DB instance can be upgraded to.</p>
 */
export interface UpgradeTarget {
  /**
   * <p>The name of the upgrade target database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the upgrade target database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The version of the database engine that a DB instance can be upgraded to.</p>
   */
  Description?: string;

  /**
   * <p>A value that indicates whether the target version is applied to any source DB instances that have <code>AutoMinorVersionUpgrade</code> set to true.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * <p>A value that indicates whether upgrading to the target version requires upgrading the major version of the database engine.</p>
   */
  IsMajorVersionUpgrade?: boolean;

  /**
   * <p>A list of the supported DB engine modes for the target engine version.</p>
   */
  SupportedEngineModes?: string[];

  /**
   * <p>A value that indicates whether you can use Aurora parallel query with the target engine version.</p>
   */
  SupportsParallelQuery?: boolean;

  /**
   * <p>A value that indicates whether you can use Aurora global databases with the target engine version.</p>
   */
  SupportsGlobalDatabases?: boolean;

  /**
   * <p>A value that indicates whether you can use Babelfish for Aurora PostgreSQL with the target engine version.</p>
   */
  SupportsBabelfish?: boolean;
}

export namespace UpgradeTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpgradeTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the scaling configuration of an Aurora Serverless v1 DB cluster.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 */
export interface ScalingConfiguration {
  /**
   * <p>The minimum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *         <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *         <p>The minimum capacity must be less than or equal to the maximum capacity.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *         <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *         <p>The maximum capacity must be greater than or equal to the minimum capacity.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>A value that indicates whether to allow or disallow automatic pause for an Aurora DB cluster in <code>serverless</code> DB engine mode.
   *             A DB cluster can be paused only when it's idle (it has no connections).</p>
   *         <note>
   *             <p>If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot.
   *                 In this case, the DB cluster is restored when there is a request to connect to it.</p>
   *         </note>
   */
  AutoPause?: boolean;

  /**
   * <p>The time, in seconds, before an Aurora DB cluster in <code>serverless</code> mode is paused.</p>
   *         <p>Specify a value between 300 and 86,400 seconds.</p>
   */
  SecondsUntilAutoPause?: number;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *         <p>
   *             <code>ForceApplyCapacityChange</code> sets the capacity to the specified value as soon as possible.</p>
   *         <p>
   *             <code>RollbackCapacityChange</code>, the default, ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   *         <important>
   *             <p>If you specify <code>ForceApplyCapacityChange</code>, connections that
   *                 prevent Aurora Serverless v1 from finding a scaling point might be dropped.</p>
   *         </important>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
   *                     Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  TimeoutAction?: string;

  /**
   * <p>The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point
   *             to perform seamless scaling before enforcing the timeout action. The default is 300.</p>
   *         <p>Specify a value between 60 and 600 seconds.</p>
   */
  SecondsBeforeTimeout?: number;
}

export namespace ScalingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScalingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 */
export interface ServerlessV2ScalingConfiguration {
  /**
   * <p>The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
   *             You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value
   *             that you can use is 0.5.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
   *             You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value
   *             that you can use is 128.</p>
   */
  MaxCapacity?: number;
}

export namespace ServerlessV2ScalingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerlessV2ScalingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB cluster.</p>
 */
export interface DBClusterRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following
   *         values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be used to
   *             access other Amazon Web Services on your behalf.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable
   *                 to assume the IAM role in order to access other Amazon Web Services on your behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The name of the feature associated with the Amazon Web Services Identity and Access Management (IAM) role.
   *             For information about supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;
}

export namespace DBClusterRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterRole): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an instance that is part of a DB cluster.</p>
 */
export interface DBClusterMember {
  /**
   * <p>Specifies the instance identifier for this member of the DB cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Value that is <code>true</code> if the cluster member is the primary instance for the DB cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  PromotionTier?: number;
}

export namespace DBClusterMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterMember): any => ({
    ...obj,
  });
}

/**
 * <p>Contains status information for a DB cluster option group.</p>
 */
export interface DBClusterOptionGroupStatus {
  /**
   * <p>Specifies the name of the DB cluster option group.</p>
   */
  DBClusterOptionGroupName?: string;

  /**
   * <p>Specifies the status of the DB cluster option group.</p>
   */
  Status?: string;
}

export namespace DBClusterOptionGroupStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterOptionGroupStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An Active Directory Domain membership record associated with the DB instance or cluster.</p>
 */
export interface DomainMembership {
  /**
   * <p>The identifier of the Active Directory Domain.</p>
   */
  Domain?: string;

  /**
   * <p>The status of the Active Directory Domain membership for the DB instance or cluster. Values include joined, pending-join, failed, and so on.</p>
   */
  Status?: string;

  /**
   * <p>The fully qualified domain name of the Active Directory Domain.</p>
   */
  FQDN?: string;

  /**
   * <p>The name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  IAMRoleName?: string;
}

export namespace DomainMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainMembership): any => ({
    ...obj,
  });
}

export enum WriteForwardingStatus {
  DISABLED = "disabled",
  DISABLING = "disabling",
  ENABLED = "enabled",
  ENABLING = "enabling",
  UNKNOWN = "unknown",
}

/**
 * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
 */
export interface PendingCloudwatchLogsExports {
  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.</p>
   */
  LogTypesToDisable?: string[];
}

export namespace PendingCloudwatchLogsExports {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingCloudwatchLogsExports): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the <code>ModifyDBCluster</code> operation and
 *             contains changes that will be applied during the next maintenance window.</p>
 */
export interface ClusterPendingModifiedValues {
  /**
   * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  /**
   * <p>The DBClusterIdentifier value for the DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The master credentials for the DB cluster.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A value that indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The database engine version.</p>
   */
  EngineVersion?: string;
}

export namespace ClusterPendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterPendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 */
export interface ScalingConfigurationInfo {
  /**
   * <p>The maximum capacity for the Aurora DB cluster in <code>serverless</code> DB engine
   *             mode.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>A value that indicates whether automatic pause is allowed for the Aurora DB cluster
   *             in <code>serverless</code> DB engine mode.</p>
   *         <p>When the value is set to false for an Aurora Serverless v1 DB cluster, the DB cluster automatically resumes.</p>
   */
  AutoPause?: boolean;

  /**
   * <p>The remaining amount of time, in seconds, before the Aurora DB cluster in
   *                 <code>serverless</code> mode is paused. A DB cluster can be paused only when
   *             it's idle (it has no connections).</p>
   */
  SecondsUntilAutoPause?: number;

  /**
   * <p>The action that occurs when Aurora times out while attempting to change the capacity of an
   *             Aurora Serverless v1 cluster. The value is either <code>ForceApplyCapacityChange</code> or
   *             <code>RollbackCapacityChange</code>.</p>
   *         <p>
   *             <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p>
   *         <p>
   *             <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   */
  TimeoutAction?: string;

  /**
   * <p>The number of seconds before scaling times out. What happens when an attempted scaling action times out
   *             is determined by the <code>TimeoutAction</code> setting.</p>
   */
  SecondsBeforeTimeout?: number;
}

export namespace ScalingConfigurationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScalingConfigurationInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Shows the scaling configuration for an Aurora Serverless v2 DB cluster.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 */
export interface ServerlessV2ScalingConfigurationInfo {
  /**
   * <p>The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
   *             You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value
   *             that you can use is 0.5.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
   *             You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value
   *             that you can use is 128.</p>
   */
  MaxCapacity?: number;
}

export namespace ServerlessV2ScalingConfigurationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerlessV2ScalingConfigurationInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.</p>
 *         <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
 *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
 *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
 *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
 *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
 *         <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
 *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
 *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
 *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
 *         <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *         <p>For more information on Multi-AZ DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
 *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 */
export interface DBCluster {
  /**
   * <p>For all database engines except Amazon Aurora, <code>AllocatedStorage</code> specifies the allocated storage size in gibibytes (GiB).
   *           For Aurora, <code>AllocatedStorage</code> always returns 1, because Aurora DB cluster storage size isn't fixed, but instead automatically
   *       adjusts as needed.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>If present, specifies the name of the character set that this cluster is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>Contains the name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * <p>Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * <p>Specifies the current state of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>The time when a stopped DB cluster is restarted automatically.</p>
   */
  AutomaticRestartTime?: Date;

  /**
   * <p>Specifies the progress of the operation as a percentage.</p>
   */
  PercentProgress?: string;

  /**
   * <p>The earliest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * <p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances
   *             connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections
   *             to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster.
   *             This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster.</p>
   *         <p>If a failover occurs, and the Aurora Replica that you are connected to is promoted
   *             to be the primary instance, your connection is dropped. To
   *             continue sending your read workload to other Aurora Replicas in the cluster,
   *             you can then reconnect to the reader endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>Identifies all custom endpoints associated with the cluster.</p>
   */
  CustomEndpoints?: string[];

  /**
   * <p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Contains the master username for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Provides the list of option group memberships for this DB cluster.</p>
   */
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[];

  /**
   * <p>Specifies the daily time range during which automated backups are
   *             created if automated backups are enabled, as determined
   *             by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Contains the identifier of the source DB cluster if this DB cluster is a read
   *             replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Contains one or more identifiers of the read replicas associated with this DB
   *             cluster.</p>
   */
  ReadReplicaIdentifiers?: string[];

  /**
   * <p>Provides the list of instances that make up the DB cluster.</p>
   */
  DBClusterMembers?: DBClusterMember[];

  /**
   * <p>Provides a list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is enabled, the Amazon Web Services KMS key identifier for the encrypted DB cluster.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB cluster. This identifier is found in Amazon Web Services CloudTrail log entries whenever
   *           the KMS key for the DB cluster is accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>Provides a list of the Amazon Web Services Identity and Access Management (IAM) roles that are associated with the DB cluster.
   *           IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services
   *           on your behalf.</p>
   */
  AssociatedRoles?: DBClusterRole[];

  /**
   * <p>A value that indicates whether the mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   */
  CloneGroupId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The earliest time to which a DB cluster can be backtracked.</p>
   */
  EarliestBacktrackTime?: Date;

  /**
   * <p>The target backtrack window, in seconds. If this value is set to 0, backtracking is
   *             disabled for the DB cluster. Otherwise, backtracking is enabled.</p>
   */
  BacktrackWindow?: number;

  /**
   * <p>The number of change records stored for Backtrack.</p>
   */
  BacktrackConsumedChangeRecords?: number;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p>
   *         <p>Log types vary by DB engine. For information about the log types for each DB engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>The current capacity of an Aurora Serverless v1 DB cluster. The capacity is 0 (zero)
   *           when the cluster is paused.</p>
   *         <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   */
  Capacity?: number;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html">
   *             CreateDBCluster</a>.</p>
   */
  EngineMode?: string;

  /**
   * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ScalingConfigurationInfo?: ScalingConfigurationInfo;

  /**
   * <p>Indicates if the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether the HTTP endpoint for an Aurora Serverless v1 DB cluster is enabled.</p>
   *         <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *           SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database
   *           from inside the RDS console with the query editor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless v1</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   */
  HttpEndpointEnabled?: boolean;

  /**
   * <p>The mode of the database activity stream.
   *            Database events such as a change or access generate an activity stream event.
   *            The database session can handle these events either synchronously or asynchronously.</p>
   */
  ActivityStreamMode?: ActivityStreamMode | string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  ActivityStreamStatus?: ActivityStreamStatus | string;

  /**
   * <p>The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  ActivityStreamKmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  ActivityStreamKinesisStreamName?: string;

  /**
   * <p>Specifies whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specifies whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services account.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * <p>The Active Directory Domain membership records associated with the DB cluster.</p>
   */
  DomainMemberships?: DomainMembership[];

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  TagList?: Tag[];

  /**
   * <p>Specifies whether a secondary cluster in an Aurora global database has
   *         write forwarding enabled, not enabled, or is in the process of enabling it.</p>
   */
  GlobalWriteForwardingStatus?: WriteForwardingStatus | string;

  /**
   * <p>Specifies whether you have requested to enable write forwarding for a secondary cluster
   *       in an Aurora global database. Because write forwarding takes time to enable, check the
   *       value of <code>GlobalWriteForwardingStatus</code> to confirm that the request has completed
   *       before using the write forwarding feature for this cluster.</p>
   */
  GlobalWriteForwardingRequested?: boolean;

  /**
   * <p>A value that specifies that changes to the DB cluster are pending. This element is only included when changes are pending.
   *           Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: ClusterPendingModifiedValues;

  /**
   * <p>The name of the compute and memory capacity class of the DB instance.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  DBClusterInstanceClass?: string;

  /**
   * <p>The storage type associated with the DB cluster.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  StorageType?: string;

  /**
   * <p>The Provisioned IOPS (I/O operations per second) value.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  Iops?: number;

  /**
   * <p>Specifies the accessibility options for the DB instance.</p>
   *         <p>When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private
   *             IP address from within the DB instance's virtual private cloud (VPC).
   *             It resolves to the public IP address from outside of the DB instance's VPC.
   *             Access to the DB instance is ultimately controlled by the security group it uses.
   *             That public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *         <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *         <p>For more information, see <a>CreateDBInstance</a>.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A value that indicates that minor version patches are applied automatically.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>True if Performance Insights is enabled for the DB cluster, and otherwise false.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).</p>
   *         <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>Shows the scaling configuration for an Aurora Serverless v2 DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;
}

export namespace DBCluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBCluster): any => ({
    ...obj,
  });
}

/**
 * <p>The request would result in the user exceeding the allowed amount of storage
 *             available across all DB instances.</p>
 */
export class StorageQuotaExceededFault extends __BaseException {
  readonly name: "StorageQuotaExceededFault" = "StorageQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageQuotaExceededFault, __BaseException>) {
    super({
      name: "StorageQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified custom endpoint can't be created because it already exists.</p>
 */
export class DBClusterEndpointAlreadyExistsFault extends __BaseException {
  readonly name: "DBClusterEndpointAlreadyExistsFault" = "DBClusterEndpointAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterEndpointAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBClusterEndpointAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterEndpointAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The cluster already has the maximum number of custom endpoints.</p>
 */
export class DBClusterEndpointQuotaExceededFault extends __BaseException {
  readonly name: "DBClusterEndpointQuotaExceededFault" = "DBClusterEndpointQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterEndpointQuotaExceededFault, __BaseException>) {
    super({
      name: "DBClusterEndpointQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterEndpointQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified CIDR IP range or Amazon EC2 security group might not be authorized
 *             for the specified DB security group.</p>
 *         <p>Or, RDS might not be authorized to perform necessary actions using IAM on your
 *             behalf.</p>
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

export class BackupPolicyNotFoundFault extends __BaseException {
  readonly name: "BackupPolicyNotFoundFault" = "BackupPolicyNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupPolicyNotFoundFault, __BaseException>) {
    super({
      name: "BackupPolicyNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupPolicyNotFoundFault.prototype);
  }
}

/**
 * <p>Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.</p>
 */
export interface DBInstanceRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *             instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the feature associated with the Amazon Web Services Identity and Access Management (IAM) role.
   *             For information about supported feature names, see <code>DBEngineVersion</code>.</p>
   */
  FeatureName?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB instance. The Status property returns one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB instance and can be used to
   *                 access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB instance, but the DB instance is unable
   *                 to assume the IAM role in order to access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBInstanceRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceRole): any => ({
    ...obj,
  });
}

export enum AutomationMode {
  ALL_PAUSED = "all-paused",
  FULL = "full",
}

/**
 * <p>Automated backups of a DB instance replicated to another Amazon Web Services Region. They consist of system backups, transaction logs, and database instance properties.</p>
 */
export interface DBInstanceAutomatedBackupsReplication {
  /**
   * <p>The Amazon Resource Name (ARN) of the replicated automated backups.</p>
   */
  DBInstanceAutomatedBackupsArn?: string;
}

export namespace DBInstanceAutomatedBackupsReplication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceAutomatedBackupsReplication): any => ({
    ...obj,
  });
}

/**
 * <p>The status of the DB parameter group.</p>
 *         <p>This data type is used as a response element in the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>CreateDBInstanceReadReplica</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DeleteDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RebootDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface DBParameterGroupStatus {
  /**
   * <p>The name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

export namespace DBParameterGroupStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroupStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Contains Availability Zone information.</p>
 *         <p>This data type is used as an element in the <code>OrderableDBInstanceOption</code>
 *             data type.</p>
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
 * <p>A data type that represents an Outpost.</p>
 *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Amazon RDS on Amazon Web Services Outposts</a>
 *           in the <i>Amazon RDS User Guide.</i>
 *          </p>
 */
export interface Outpost {
  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  Arn?: string;
}

export namespace Outpost {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Outpost): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation.</p>
 */
export interface Subnet {
  /**
   * <p>The identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Contains Availability Zone information.</p>
   *         <p>This data type is used as an element in the <code>OrderableDBInstanceOption</code>
   *             data type.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>If the subnet is associated with an Outpost, this value specifies the Outpost.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  SubnetOutpost?: Outpost;

  /**
   * <p>The status of the subnet.</p>
   */
  SubnetStatus?: string;
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
 * <p>Contains the details of an Amazon RDS DB subnet group.</p>
 *         <p>This data type is used as a response element
 *           in the <code>DescribeDBSubnetGroups</code> action.</p>
 */
export interface DBSubnetGroup {
  /**
   * <p>The name of the DB subnet group.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Provides the description of the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>Provides the VpcId of the DB subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>Provides the status of the DB subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>Contains a list of <code>Subnet</code> elements.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   */
  DBSubnetGroupArn?: string;

  /**
   * <p>The network type of the DB subnet group.</p>
   *         <p>Valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  SupportedNetworkTypes?: string[];
}

export namespace DBSubnetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSubnetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>This data type represents the information you need to connect to an Amazon RDS DB instance.
 *       This data type is used as a response element in the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DeleteDBInstance</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>For the data structure that represents Amazon Aurora DB cluster endpoints,
 *         see <code>DBClusterEndpoint</code>.</p>
 */
export interface Endpoint {
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;
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
 * <p>Provides information on the option groups the DB instance is a member of.</p>
 */
export interface OptionGroupMembership {
  /**
   * <p>The name of the option group that the instance belongs to.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The status of the DB instance's option group membership. Valid values are:
   *       <code>in-sync</code>,
   *       <code>pending-apply</code>,
   *       <code>pending-removal</code>,
   *       <code>pending-maintenance-apply</code>,
   *       <code>pending-maintenance-removal</code>,
   *       <code>applying</code>,
   *       <code>removing</code>,
   *       and <code>failed</code>.</p>
   */
  Status?: string;
}

export namespace OptionGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the <code>ModifyDBInstance</code> operation and
 *           contains changes that will be applied during the next maintenance window.</p>
 */
export interface PendingModifiedValues {
  /**
   * <p>The name of the compute and memory capacity class for the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The allocated storage size for the DB instance specified in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The master credentials for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates that the Single-AZ DB instance will change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The license model for the DB instance.</p>
   *         <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *             <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The Provisioned IOPS value for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The  database identifier for the DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The storage type of the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The identifier of the CA certificate for the DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The DB subnet group for the DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class
   *             of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>Whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The automation mode of the RDS Custom DB instance: <code>full</code> or <code>all-paused</code>.
   *             If <code>full</code>, the DB instance automates monitoring and instance recovery. If
   *             <code>all-paused</code>, the instance pauses automation for the duration set by
   *             <code>--resume-full-automation-mode-minutes</code>.</p>
   */
  AutomationMode?: AutomationMode | string;

  /**
   * <p>The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation.
   *             The minimum value is 60 (default). The maximum value is 1,440.</p>
   */
  ResumeFullAutomationModeTime?: Date;
}

export namespace PendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj,
  });
}

export enum ReplicaMode {
  MOUNTED = "mounted",
  OPEN_READ_ONLY = "open-read-only",
}

/**
 * <p>Provides a list of status information for a DB instance.</p>
 */
export interface DBInstanceStatusInfo {
  /**
   * <p>This value is currently "read replication."</p>
   */
  StatusType?: string;

  /**
   * <p>Boolean value that is true if the instance is operating normally, or false if the instance is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * <p>Status of the DB instance. For a StatusType of read replica, the values can be
   *             replicating, replication stop point set, replication stop point reached, error, stopped,
   *             or terminated.</p>
   */
  Status?: string;

  /**
   * <p>Details of the error if there is an error for the instance. If the instance isn't in an error state, this value is blank.</p>
   */
  Message?: string;
}

export namespace DBInstanceStatusInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
 *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
 *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
 *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
 *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
 */
export interface DBInstance {
  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The name of the database engine to be used for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the current state of this database.</p>
   *         <p>For information about DB instance statuses, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/accessing-monitoring.html#Overview.DBInstance.Status">Viewing DB instance status</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  DBInstanceStatus?: string;

  /**
   * <p>The time when a stopped DB instance is restarted automatically.</p>
   */
  AutomaticRestartTime?: Date;

  /**
   * <p>Contains the master username for the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *         <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *         <p>Contains the name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created. This same name is returned for the life of the DB instance.</p>
   *         <p>Type: String</p>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the returned parameters do not apply to an Oracle DB instance.</p>
   */
  DBName?: string;

  /**
   * <p>Specifies the connection endpoint.</p>
   *         <note>
   *             <p>The endpoint might not be shown for instances whose status is <code>creating</code>.</p>
   *         </note>
   */
  Endpoint?: Endpoint;

  /**
   * <p>Specifies the allocated storage size specified in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the date and time the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>Specifies the daily time range during which automated backups are
   *         created if automated backups are enabled, as determined
   *         by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A list of DB security group elements containing
   *         <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.</p>
   */
  DBSecurityGroups?: DBSecurityGroupMembership[];

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>Provides the list of DB parameter groups applied to this DB instance.</p>
   */
  DBParameterGroups?: DBParameterGroupStatus[];

  /**
   * <p>Specifies the name of the Availability Zone the DB instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Contains the identifier of the source DB instance if this DB instance is a read
   *             replica.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>Contains one or more identifiers of the read replicas associated with this DB
   *             instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * <p>Contains one or more identifiers of Aurora DB clusters to which the RDS DB instance
   *             is replicated as a read replica. For example, when you create an Aurora read replica of
   *             an RDS for MySQL DB instance, the Aurora MySQL DB cluster for the Aurora read replica is
   *             shown. This output doesn't contain information about cross-Region Aurora read
   *             replicas.</p>
   *         <note>
   *             <p>Currently, each RDS DB instance can have only one Aurora read replica.</p>
   *         </note>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * <p>The open mode of an Oracle read replica. The default is <code>open-read-only</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Working with Oracle Read Replicas for Amazon RDS</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <note>
   *             <p>This attribute is only supported in RDS for Oracle.</p>
   *         </note>
   */
  ReplicaMode?: ReplicaMode | string;

  /**
   * <p>License model information for this DB instance. This setting doesn't apply to RDS Custom.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value.</p>
   */
  Iops?: number;

  /**
   * <p>Provides the list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: OptionGroupMembership[];

  /**
   * <p>If present, specifies the name of the character set that this instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>The name of the NCHAR character set for the Oracle DB instance. This character set specifies the
   *             Unicode encoding for data stored in table columns of type NCHAR, NCLOB, or NVARCHAR2.</p>
   */
  NcharCharacterSetName?: string;

  /**
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>Specifies the accessibility options for the DB instance.</p>
   *         <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint
   *           resolves to the private IP address from within the DB cluster's virtual private cloud
   *           (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access
   *           to the DB cluster is ultimately controlled by the security group it uses. That public
   *           access isn't permitted if the security group assigned to the DB cluster doesn't permit
   *           it.</p>
   *         <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *         <p>For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The status of a read replica. If the instance isn't a read replica, this is
   *             blank.</p>
   */
  StatusInfos?: DBInstanceStatusInfo[];

  /**
   * <p>Specifies the storage type associated with DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the Amazon Web Services KMS key identifier
   *             for the encrypted DB instance.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is found in Amazon Web Services CloudTrail log
   *           entries whenever the Amazon Web Services KMS key for the DB instance is accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The Active Directory Domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: DomainMembership[];

  /**
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB instance.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this
   *             value for an Aurora DB instance has no effect on the DB cluster setting. For more
   *             information, see <code>DBCluster</code>.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>The time zone of the DB instance.
   *             In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for
   *             Microsoft SQL Server DB instances
   *             that were created with a time zone specified.</p>
   */
  Timezone?: string;

  /**
   * <p>True if mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   *         <p>IAM database authentication can be enabled for the following database engines</p>
   *         <ul>
   *             <li>
   *                 <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                 <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                 <p>Aurora 5.6 or higher. To enable IAM database authentication for Aurora, see DBCluster Type.</p>
   *             </li>
   *          </ul>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>True if Performance Insights is enabled for the DB instance, and otherwise false.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   *         <p>Log types vary by DB engine. For information about the log types for each DB engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>Indicates if the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) roles associated with the DB instance.</p>
   */
  AssociatedRoles?: DBInstanceRole[];

  /**
   * <p>Specifies the listener connection endpoint for SQL Server Always On.</p>
   */
  ListenerEndpoint?: Endpoint;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  TagList?: Tag[];

  /**
   * <p>The list of replicated automated backups associated with the DB instance.</p>
   */
  DBInstanceAutomatedBackupsReplications?: DBInstanceAutomatedBackupsReplication[];

  /**
   * <p>Specifies whether a customer-owned IP address (CoIP) is enabled for an RDS on Outposts DB instance.</p>
   *         <p>A <i>CoIP </i>provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   */
  CustomerOwnedIpEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   */
  AwsBackupRecoveryPointArn?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  ActivityStreamStatus?: ActivityStreamStatus | string;

  /**
   * <p>The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  ActivityStreamKmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  ActivityStreamKinesisStreamName?: string;

  /**
   * <p>The mode of the database activity stream. Database events such as a change or access generate
   *             an activity stream event. RDS for Oracle always handles these events asynchronously.</p>
   */
  ActivityStreamMode?: ActivityStreamMode | string;

  /**
   * <p>Indicates whether engine-native audit fields are included in the database activity stream.</p>
   */
  ActivityStreamEngineNativeAuditFieldsIncluded?: boolean;

  /**
   * <p>The automation mode of the RDS Custom DB instance: <code>full</code> or <code>all paused</code>.
   *             If <code>full</code>, the DB instance automates monitoring and instance recovery. If
   *             <code>all paused</code>, the instance pauses automation for the duration set by
   *             <code>--resume-full-automation-mode-minutes</code>.</p>
   */
  AutomationMode?: AutomationMode | string;

  /**
   * <p>The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation.
   *             The minimum value is 60 (default). The maximum value is 1,440.</p>
   */
  ResumeFullAutomationModeTime?: Date;

  /**
   * <p>The instance profile associated with the underlying Amazon EC2 instance of an
   *             RDS Custom DB instance. The instance profile must meet the following requirements:</p>
   *         <ul>
   *             <li>
   *                 <p>The profile must exist in your account.</p>
   *             </li>
   *             <li>
   *                 <p>The profile must have an IAM role that Amazon EC2 has permissions to assume.</p>
   *             </li>
   *             <li>
   *                 <p>The instance profile name and the associated IAM role name must start with the prefix <code>AWSRDSCustom</code>.</p>
   *             </li>
   *          </ul>
   *         <p>For the list of permissions required for the IAM role, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc">
   *                 Configure IAM and your VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  CustomIamInstanceProfile?: string;

  /**
   * <p>Specifies where automated backups and manual snapshots are stored: Amazon Web Services Outposts or the Amazon Web Services Region.</p>
   */
  BackupTarget?: string;

  /**
   * <p>The network type of the DB instance.</p>
   *         <p>Valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB instance.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *                 Working with a DB instance in a VPC</a> in the
   *             <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  NetworkType?: string;
}

export namespace DBInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstance): any => ({
    ...obj,
  });
}

/**
 * <p>The user already has a DB instance with the given identifier.</p>
 */
export class DBInstanceAlreadyExistsFault extends __BaseException {
  readonly name: "DBInstanceAlreadyExistsFault" = "DBInstanceAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBInstanceAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB
 *             instances.</p>
 */
export class InstanceQuotaExceededFault extends __BaseException {
  readonly name: "InstanceQuotaExceededFault" = "InstanceQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceQuotaExceededFault, __BaseException>) {
    super({
      name: "InstanceQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified DB instance class isn't available in the specified Availability
 *             Zone.</p>
 */
export class InsufficientDBInstanceCapacityFault extends __BaseException {
  readonly name: "InsufficientDBInstanceCapacityFault" = "InsufficientDBInstanceCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientDBInstanceCapacityFault, __BaseException>) {
    super({
      name: "InsufficientDBInstanceCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientDBInstanceCapacityFault.prototype);
  }
}

/**
 * <p>The network type is invalid for the DB instance. Valid nework type values are <code>IPV4</code> and <code>DUAL</code>.</p>
 */
export class NetworkTypeNotSupported extends __BaseException {
  readonly name: "NetworkTypeNotSupported" = "NetworkTypeNotSupported";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NetworkTypeNotSupported, __BaseException>) {
    super({
      name: "NetworkTypeNotSupported",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NetworkTypeNotSupported.prototype);
  }
}

/**
 * <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 */
export class ProvisionedIopsNotAvailableInAZFault extends __BaseException {
  readonly name: "ProvisionedIopsNotAvailableInAZFault" = "ProvisionedIopsNotAvailableInAZFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProvisionedIopsNotAvailableInAZFault, __BaseException>) {
    super({
      name: "ProvisionedIopsNotAvailableInAZFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProvisionedIopsNotAvailableInAZFault.prototype);
  }
}

/**
 * <p>Storage of the <code>StorageType</code> specified can't be associated
 *             with the DB instance.</p>
 */
export class StorageTypeNotSupportedFault extends __BaseException {
  readonly name: "StorageTypeNotSupportedFault" = "StorageTypeNotSupportedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageTypeNotSupportedFault, __BaseException>) {
    super({
      name: "StorageTypeNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageTypeNotSupportedFault.prototype);
  }
}

/**
 * <p>The DBSubnetGroup shouldn't be specified while creating read replicas that lie
 *             in the same region as the source instance.</p>
 */
export class DBSubnetGroupNotAllowedFault extends __BaseException {
  readonly name: "DBSubnetGroupNotAllowedFault" = "DBSubnetGroupNotAllowedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupNotAllowedFault, __BaseException>) {
    super({
      name: "DBSubnetGroupNotAllowedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupNotAllowedFault.prototype);
  }
}

/**
 * <p>The DBSubnetGroup doesn't belong to the same VPC as that of an existing
 *             cross-region read replica of the same source instance.</p>
 */
export class InvalidDBSubnetGroupFault extends __BaseException {
  readonly name: "InvalidDBSubnetGroupFault" = "InvalidDBSubnetGroupFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSubnetGroupFault, __BaseException>) {
    super({
      name: "InvalidDBSubnetGroupFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSubnetGroupFault.prototype);
  }
}

export enum AuthScheme {
  SECRETS = "SECRETS",
}

export enum IAMAuthMode {
  DISABLED = "DISABLED",
  REQUIRED = "REQUIRED",
}

/**
 * <p>Specifies the details of authentication used by a proxy to log in as a specific database user.</p>
 */
export interface UserAuthConfig {
  /**
   * <p>A user-specified description about the authentication used by a proxy to log in as a specific database user.</p>
   */
  Description?: string;

  /**
   * <p>The name of the database user to which the proxy connects.</p>
   */
  UserName?: string;

  /**
   * <p>The type of authentication that the proxy uses for connections from the proxy to the underlying database.</p>
   */
  AuthScheme?: AuthScheme | string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate
   *         to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.</p>
   */
  SecretArn?: string;

  /**
   * <p>Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.</p>
   */
  IAMAuth?: IAMAuthMode | string;
}

export namespace UserAuthConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserAuthConfig): any => ({
    ...obj,
  });
}

export enum EngineFamily {
  MYSQL = "MYSQL",
  POSTGRESQL = "POSTGRESQL",
}

/**
 * <p>Returns the details of authentication used by a proxy to log in as a specific database user.</p>
 */
export interface UserAuthConfigInfo {
  /**
   * <p>A user-specified description about the authentication used by a proxy to log in as a specific database user.</p>
   */
  Description?: string;

  /**
   * <p>The name of the database user to which the proxy connects.</p>
   */
  UserName?: string;

  /**
   * <p>The type of authentication that the proxy uses for connections from the proxy to the underlying database.</p>
   */
  AuthScheme?: AuthScheme | string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate
   *         to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.</p>
   */
  SecretArn?: string;

  /**
   * <p>Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.</p>
   */
  IAMAuth?: IAMAuthMode | string;
}

export namespace UserAuthConfigInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserAuthConfigInfo): any => ({
    ...obj,
  });
}

export enum DBProxyStatus {
  AVAILABLE = "available",
  CREATING = "creating",
  DELETING = "deleting",
  INCOMPATIBLE_NETWORK = "incompatible-network",
  INSUFFICIENT_RESOURCE_LIMITS = "insufficient-resource-limits",
  MODIFYING = "modifying",
  REACTIVATING = "reactivating",
  SUSPENDED = "suspended",
  SUSPENDING = "suspending",
}

/**
 * <p>The data structure representing a proxy managed by the RDS Proxy.</p>
 *         <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
 */
export interface DBProxy {
  /**
   * <p>The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
   */
  DBProxyName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the proxy.</p>
   */
  DBProxyArn?: string;

  /**
   * <p>The current status of this proxy. A status of <code>available</code> means the
   *         proxy is ready to handle requests. Other values indicate that you must wait for
   *         the proxy to be ready, or take some action to resolve an issue.</p>
   */
  Status?: DBProxyStatus | string;

  /**
   * <p>The engine family applies to MySQL and PostgreSQL for both RDS and Aurora.</p>
   */
  EngineFamily?: string;

  /**
   * <p>Provides the VPC ID of the DB proxy.</p>
   */
  VpcId?: string;

  /**
   * <p>Provides a list of VPC security groups that the proxy belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The EC2 subnet IDs for the proxy.</p>
   */
  VpcSubnetIds?: string[];

  /**
   * <p>One or more data structures specifying the authorization mechanism to connect to the associated RDS DB instance
   *         or Aurora DB cluster.</p>
   */
  Auth?: UserAuthConfigInfo[];

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that the proxy uses to access Amazon Secrets Manager.</p>
   */
  RoleArn?: string;

  /**
   * <p>The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the
   *         connection string for a database client application.</p>
   */
  Endpoint?: string;

  /**
   * <p>Indicates whether Transport Layer Security (TLS) encryption is required for connections to the proxy.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The number of seconds a connection to the proxy can have no activity before the proxy drops the client connection.
   *         The proxy keeps the underlying database connection open and puts it back into the connection pool for reuse by
   *         later connection requests.</p>
   *         <p>Default: 1800 (30 minutes)</p>
   *         <p>Constraints: 1 to 28,800</p>
   */
  IdleClientTimeout?: number;

  /**
   * <p>Whether the proxy includes detailed information about SQL statements in its logs.
   *         This information helps you to debug issues involving SQL behavior or the performance
   *         and scalability of the proxy connections. The debug information includes the text of
   *         SQL statements that you submit through the proxy. Thus, only enable this setting
   *         when needed for debugging, and only when you have security measures in place to
   *         safeguard any sensitive information that appears in the logs.</p>
   */
  DebugLogging?: boolean;

  /**
   * <p>The date and time when the proxy was first created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The date and time when the proxy was last updated.</p>
   */
  UpdatedDate?: Date;
}

export namespace DBProxy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBProxy): any => ({
    ...obj,
  });
}

/**
 * <p>The specified proxy name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 */
export class DBProxyAlreadyExistsFault extends __BaseException {
  readonly name: "DBProxyAlreadyExistsFault" = "DBProxyAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBProxyAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyAlreadyExistsFault.prototype);
  }
}

/**
 * <p>Your Amazon Web Services account already has the maximum number of proxies in the specified Amazon Web Services Region.</p>
 */
export class DBProxyQuotaExceededFault extends __BaseException {
  readonly name: "DBProxyQuotaExceededFault" = "DBProxyQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyQuotaExceededFault, __BaseException>) {
    super({
      name: "DBProxyQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyQuotaExceededFault.prototype);
  }
}

export enum DBProxyEndpointTargetRole {
  READ_ONLY = "READ_ONLY",
  READ_WRITE = "READ_WRITE",
}

export enum DBProxyEndpointStatus {
  AVAILABLE = "available",
  CREATING = "creating",
  DELETING = "deleting",
  INCOMPATIBLE_NETWORK = "incompatible-network",
  INSUFFICIENT_RESOURCE_LIMITS = "insufficient-resource-limits",
  MODIFYING = "modifying",
}

/**
 * <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one
 *         endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same
 *         DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the
 *         associated DB proxy.</p>
 *         <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
 */
export interface DBProxyEndpoint {
  /**
   * <p>The name for the DB proxy endpoint. An identifier must begin with a letter and
   *         must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen
   *         or contain two consecutive hyphens.</p>
   */
  DBProxyEndpointName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB proxy endpoint.</p>
   */
  DBProxyEndpointArn?: string;

  /**
   * <p>The identifier for the DB proxy that is associated with this DB proxy endpoint.</p>
   */
  DBProxyName?: string;

  /**
   * <p>The current status of this DB proxy endpoint. A status of <code>available</code> means the
   *         endpoint is ready to handle requests. Other values indicate that you must wait for
   *         the endpoint to be ready, or take some action to resolve an issue.</p>
   */
  Status?: DBProxyEndpointStatus | string;

  /**
   * <p>Provides the VPC ID of the DB proxy endpoint.</p>
   */
  VpcId?: string;

  /**
   * <p>Provides a list of VPC security groups that the DB proxy endpoint belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The EC2 subnet IDs for the DB proxy endpoint.</p>
   */
  VpcSubnetIds?: string[];

  /**
   * <p>The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the
   *         connection string for a database client application.</p>
   */
  Endpoint?: string;

  /**
   * <p>The date and time when the DB proxy endpoint was first created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.</p>
   */
  TargetRole?: DBProxyEndpointTargetRole | string;

  /**
   * <p>A value that indicates whether this endpoint is the default endpoint for the associated DB proxy.
   *         Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the
   *         DB proxy can be either read/write or read-only.</p>
   */
  IsDefault?: boolean;
}

export namespace DBProxyEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBProxyEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>The specified DB proxy endpoint name must be unique for all DB proxy endpoints owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 */
export class DBProxyEndpointAlreadyExistsFault extends __BaseException {
  readonly name: "DBProxyEndpointAlreadyExistsFault" = "DBProxyEndpointAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyEndpointAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBProxyEndpointAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyEndpointAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The DB proxy already has the maximum number of endpoints.</p>
 */
export class DBProxyEndpointQuotaExceededFault extends __BaseException {
  readonly name: "DBProxyEndpointQuotaExceededFault" = "DBProxyEndpointQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyEndpointQuotaExceededFault, __BaseException>) {
    super({
      name: "DBProxyEndpointQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyEndpointQuotaExceededFault.prototype);
  }
}

/**
 * <p>The requested operation can't be performed while the proxy is in this state.</p>
 */
export class InvalidDBProxyStateFault extends __BaseException {
  readonly name: "InvalidDBProxyStateFault" = "InvalidDBProxyStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBProxyStateFault, __BaseException>) {
    super({
      name: "InvalidDBProxyStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBProxyStateFault.prototype);
  }
}

/**
 * <p>A DB security group with the name specified in
 *         <code>DBSecurityGroupName</code> already exists.</p>
 */
export class DBSecurityGroupAlreadyExistsFault extends __BaseException {
  readonly name: "DBSecurityGroupAlreadyExistsFault" = "DBSecurityGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSecurityGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBSecurityGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSecurityGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>A DB security group isn't allowed for this action.</p>
 */
export class DBSecurityGroupNotSupportedFault extends __BaseException {
  readonly name: "DBSecurityGroupNotSupportedFault" = "DBSecurityGroupNotSupportedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSecurityGroupNotSupportedFault, __BaseException>) {
    super({
      name: "DBSecurityGroupNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSecurityGroupNotSupportedFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB security
 *             groups.</p>
 */
export class DBSecurityGroupQuotaExceededFault extends __BaseException {
  readonly name: "DBSecurityGroupQuotaExceededFault" = "DBSecurityGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSecurityGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBSecurityGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSecurityGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> is already used by an existing DB subnet group.</p>
 */
export class DBSubnetGroupAlreadyExistsFault extends __BaseException {
  readonly name: "DBSubnetGroupAlreadyExistsFault" = "DBSubnetGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBSubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB subnet
 *             groups.</p>
 */
export class DBSubnetGroupQuotaExceededFault extends __BaseException {
  readonly name: "DBSubnetGroupQuotaExceededFault" = "DBSubnetGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBSubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of subnets in a
 *             DB subnet groups.</p>
 */
export class DBSubnetQuotaExceededFault extends __BaseException {
  readonly name: "DBSubnetQuotaExceededFault" = "DBSubnetQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "DBSubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetQuotaExceededFault.prototype);
  }
}

/**
 * <p>You have reached the maximum number of event subscriptions.</p>
 */
export class EventSubscriptionQuotaExceededFault extends __BaseException {
  readonly name: "EventSubscriptionQuotaExceededFault" = "EventSubscriptionQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventSubscriptionQuotaExceededFault, __BaseException>) {
    super({
      name: "EventSubscriptionQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventSubscriptionQuotaExceededFault.prototype);
  }
}

/**
 * <p>SNS has responded that there is a problem with the SNS topic specified.</p>
 */
export class SNSInvalidTopicFault extends __BaseException {
  readonly name: "SNSInvalidTopicFault" = "SNSInvalidTopicFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSInvalidTopicFault, __BaseException>) {
    super({
      name: "SNSInvalidTopicFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSInvalidTopicFault.prototype);
  }
}

/**
 * <p>You do not have permission to publish to the SNS topic ARN.</p>
 */
export class SNSNoAuthorizationFault extends __BaseException {
  readonly name: "SNSNoAuthorizationFault" = "SNSNoAuthorizationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSNoAuthorizationFault, __BaseException>) {
    super({
      name: "SNSNoAuthorizationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSNoAuthorizationFault.prototype);
  }
}

/**
 * <p>The SNS topic ARN does not exist.</p>
 */
export class SNSTopicArnNotFoundFault extends __BaseException {
  readonly name: "SNSTopicArnNotFoundFault" = "SNSTopicArnNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSTopicArnNotFoundFault, __BaseException>) {
    super({
      name: "SNSTopicArnNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSTopicArnNotFoundFault.prototype);
  }
}

/**
 * <p>The supplied subscription name already exists.</p>
 */
export class SubscriptionAlreadyExistFault extends __BaseException {
  readonly name: "SubscriptionAlreadyExistFault" = "SubscriptionAlreadyExistFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionAlreadyExistFault, __BaseException>) {
    super({
      name: "SubscriptionAlreadyExistFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionAlreadyExistFault.prototype);
  }
}

/**
 * <p>The supplied category does not exist.</p>
 */
export class SubscriptionCategoryNotFoundFault extends __BaseException {
  readonly name: "SubscriptionCategoryNotFoundFault" = "SubscriptionCategoryNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionCategoryNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionCategoryNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionCategoryNotFoundFault.prototype);
  }
}

export enum FailoverStatus {
  CANCELLING = "cancelling",
  FAILING_OVER = "failing-over",
  PENDING = "pending",
}

/**
 * <p>Contains the state of scheduled or in-process failover operations on an
 *       Aurora global database (<a>GlobalCluster</a>). This Data type is empty unless a failover
 *       operation is scheduled or is currently underway on the Aurora global database.</p>
 */
export interface FailoverState {
  /**
   * <p>The current status of the Aurora global database (<a>GlobalCluster</a>). Possible values are as follows:</p>
   *         <ul>
   *             <li>
   *                 <p>pending  A request to fail over the Aurora global database (<a>GlobalCluster</a>) has been received by the service. The
   *         <code>GlobalCluster</code>'s primary DB cluster and the specified secondary DB cluster are being verified before the failover
   *         process can start.</p>
   *             </li>
   *             <li>
   *                 <p>failing-over  This status covers the range of Aurora internal operations that take place during the failover process, such
   *         as demoting the primary Aurora DB cluster, promoting the secondary Aurora DB, and synchronizing replicas.</p>
   *             </li>
   *             <li>
   *                 <p>cancelling  The request to fail over the Aurora global database (<a>GlobalCluster</a>) was cancelled and the primary
   *         Aurora DB cluster and the selected secondary Aurora DB cluster are returning to their previous states.</p>
   *             </li>
   *          </ul>
   */
  Status?: FailoverStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora DB cluster that is currently being demoted, and which is associated with this
   *        state.</p>
   */
  FromDbClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora DB cluster that is currently being promoted, and which is associated
   *      with this state.</p>
   */
  ToDbClusterArn?: string;
}

export namespace FailoverState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverState): any => ({
    ...obj,
  });
}

/**
 * <p>A data structure with information about any primary and
 *         secondary clusters associated with an Aurora global database.</p>
 */
export interface GlobalClusterMember {
  /**
   * <p>The Amazon Resource Name (ARN) for each Aurora cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for each read-only secondary cluster
   *         associated with the Aurora global database.</p>
   */
  Readers?: string[];

  /**
   * <p>Specifies whether the Aurora cluster is the primary cluster
   *         (that is, has read-write capability) for the Aurora global
   *         database with which it is associated.</p>
   */
  IsWriter?: boolean;

  /**
   * <p>Specifies whether a secondary cluster in an Aurora global database has
   *         write forwarding enabled, not enabled, or is in the process of enabling it.</p>
   */
  GlobalWriteForwardingStatus?: WriteForwardingStatus | string;
}

export namespace GlobalClusterMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalClusterMember): any => ({
    ...obj,
  });
}

/**
 * <p>A data type representing an Aurora global database.</p>
 */
export interface GlobalCluster {
  /**
   * <p>Contains a user-supplied global database cluster identifier. This identifier is the unique key that
   *         identifies a global database cluster.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the global database cluster. This identifier is found in
   *         Amazon Web Services CloudTrail log entries whenever the Amazon Web Services KMS key for the DB cluster is accessed.</p>
   */
  GlobalClusterResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the global database cluster.</p>
   */
  GlobalClusterArn?: string;

  /**
   * <p>Specifies the current state of this global database cluster.</p>
   */
  Status?: string;

  /**
   * <p>The Aurora database engine used by the global database cluster.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The default database name within the new global database cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The storage encryption setting for the global database cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The deletion protection setting for the new global database cluster.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of cluster IDs for secondary clusters within the global database cluster. Currently limited to
   *         1 item.</p>
   */
  GlobalClusterMembers?: GlobalClusterMember[];

  /**
   * <p>A data object containing all properties for the current state of an in-process or pending failover process for this Aurora global database.
   *       This object is empty unless the <a>FailoverGlobalCluster</a> API operation has been called on this Aurora global database (<a>GlobalCluster</a>).</p>
   */
  FailoverState?: FailoverState;
}

export namespace GlobalCluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalCluster): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>GlobalClusterIdentifier</code> already exists. Choose a new global database identifier (unique name) to create a new global database cluster.</p>
 */
export class GlobalClusterAlreadyExistsFault extends __BaseException {
  readonly name: "GlobalClusterAlreadyExistsFault" = "GlobalClusterAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "GlobalClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalClusterAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of global database clusters for this account is already at the maximum allowed.</p>
 */
export class GlobalClusterQuotaExceededFault extends __BaseException {
  readonly name: "GlobalClusterQuotaExceededFault" = "GlobalClusterQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalClusterQuotaExceededFault, __BaseException>) {
    super({
      name: "GlobalClusterQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalClusterQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified CEV was not found.</p>
 */
export class CustomDBEngineVersionNotFoundFault extends __BaseException {
  readonly name: "CustomDBEngineVersionNotFoundFault" = "CustomDBEngineVersionNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomDBEngineVersionNotFoundFault, __BaseException>) {
    super({
      name: "CustomDBEngineVersionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomDBEngineVersionNotFoundFault.prototype);
  }
}

/**
 * <p>You can't delete the CEV.</p>
 */
export class InvalidCustomDBEngineVersionStateFault extends __BaseException {
  readonly name: "InvalidCustomDBEngineVersionStateFault" = "InvalidCustomDBEngineVersionStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCustomDBEngineVersionStateFault, __BaseException>) {
    super({
      name: "InvalidCustomDBEngineVersionStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCustomDBEngineVersionStateFault.prototype);
  }
}

/**
 * <p>The specified custom endpoint doesn't exist.</p>
 */
export class DBClusterEndpointNotFoundFault extends __BaseException {
  readonly name: "DBClusterEndpointNotFoundFault" = "DBClusterEndpointNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterEndpointNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterEndpointNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterEndpointNotFoundFault.prototype);
  }
}

/**
 * <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 */
export class InvalidDBClusterEndpointStateFault extends __BaseException {
  readonly name: "InvalidDBClusterEndpointStateFault" = "InvalidDBClusterEndpointStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterEndpointStateFault, __BaseException>) {
    super({
      name: "InvalidDBClusterEndpointStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterEndpointStateFault.prototype);
  }
}

/**
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting
 *             to delete the parameter group, you can't delete it when the parameter group is in
 *             this state.</p>
 */
export class InvalidDBParameterGroupStateFault extends __BaseException {
  readonly name: "InvalidDBParameterGroupStateFault" = "InvalidDBParameterGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidDBParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBParameterGroupStateFault.prototype);
  }
}

/**
 * <p>The quota for retained automated backups was exceeded. This prevents you
 *             from retaining any additional automated backups. The retained automated backups
 *             quota is the same as your DB Instance quota.</p>
 */
export class DBInstanceAutomatedBackupQuotaExceededFault extends __BaseException {
  readonly name: "DBInstanceAutomatedBackupQuotaExceededFault" = "DBInstanceAutomatedBackupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceAutomatedBackupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBInstanceAutomatedBackupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceAutomatedBackupQuotaExceededFault.prototype);
  }
}

/**
 * <p>No automated backup for this DB instance was found.</p>
 */
export class DBInstanceAutomatedBackupNotFoundFault extends __BaseException {
  readonly name: "DBInstanceAutomatedBackupNotFoundFault" = "DBInstanceAutomatedBackupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceAutomatedBackupNotFoundFault, __BaseException>) {
    super({
      name: "DBInstanceAutomatedBackupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceAutomatedBackupNotFoundFault.prototype);
  }
}

/**
 * <p>Earliest and latest time an instance can be restored to:</p>
 */
export interface RestoreWindow {
  /**
   * <p>The earliest time you can restore an instance to.</p>
   */
  EarliestTime?: Date;

  /**
   * <p>The latest time you can restore an instance to.</p>
   */
  LatestTime?: Date;
}

export namespace RestoreWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreWindow): any => ({
    ...obj,
  });
}

/**
 * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
 *             existed at the time you deleted the source instance.</p>
 */
export interface DBInstanceAutomatedBackup {
  /**
   * <p>The Amazon Resource Name (ARN) for the automated backups.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>The Amazon Web Services Region associated with the automated backup.</p>
   */
  Region?: string;

  /**
   * <p>The customer id of the instance that is/was associated with the automated backup.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Earliest and latest time an instance can be restored to.</p>
   */
  RestoreWindow?: RestoreWindow;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides a list of status information for an automated backup:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>active</code> - automated backups for current instances</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>retained</code> - automated backups for deleted instances</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>creating</code> - automated backups that are waiting
   *                 for the first automated snapshot to be available.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The port number that the automated backup used for connections.</p>
   *         <p>Default: Inherits from the source DB instance</p>
   *         <p>Valid Values: <code>1150-65535</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone that the automated backup was created in. For information on
   *             Amazon Web Services Regions and Availability Zones, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions
   *                 and Availability Zones</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Provides the VPC ID associated with the DB instance</p>
   */
  VpcId?: string;

  /**
   * <p>Provides the date and time that the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>The license model of an automated backup.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The name of the database engine for this automated backup.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the database engine for the automated backup.</p>
   */
  EngineVersion?: string;

  /**
   * <p>License model information for the automated backup.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The IOPS (I/O operations per second) value for the automated backup.</p>
   */
  Iops?: number;

  /**
   * <p>The option group the automated backup is associated with. If omitted, the default option group for the engine specified is used.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The ARN from the key store with which the automated backup is associated for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Specifies whether the automated backup is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Specifies the storage type associated with the automated backup.</p>
   */
  StorageType?: string;

  /**
   * <p>The Amazon Web Services KMS key ID for an automated backup.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The time zone of the automated backup. In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for Microsoft SQL Server DB instances
   *             that were created with a time zone specified.</p>
   */
  Timezone?: string;

  /**
   * <p>True if mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled,
   *             and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The retention period for the automated backups.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the replicated automated backups.</p>
   */
  DBInstanceAutomatedBackupsArn?: string;

  /**
   * <p>The list of replications to different Amazon Web Services Regions associated with the automated backup.</p>
   */
  DBInstanceAutomatedBackupsReplications?: DBInstanceAutomatedBackupsReplication[];

  /**
   * <p>Specifies where automated backups are stored: Amazon Web Services Outposts or the Amazon Web Services Region.</p>
   */
  BackupTarget?: string;
}

export namespace DBInstanceAutomatedBackup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceAutomatedBackup): any => ({
    ...obj,
  });
}

/**
 * <p>The automated backup is in an invalid state.
 *             For example, this automated backup is associated with an active instance.</p>
 */
export class InvalidDBInstanceAutomatedBackupStateFault extends __BaseException {
  readonly name: "InvalidDBInstanceAutomatedBackupStateFault" = "InvalidDBInstanceAutomatedBackupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBInstanceAutomatedBackupStateFault, __BaseException>) {
    super({
      name: "InvalidDBInstanceAutomatedBackupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBInstanceAutomatedBackupStateFault.prototype);
  }
}

/**
 * <p>The DB proxy endpoint doesn't exist.</p>
 */
export class DBProxyEndpointNotFoundFault extends __BaseException {
  readonly name: "DBProxyEndpointNotFoundFault" = "DBProxyEndpointNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyEndpointNotFoundFault, __BaseException>) {
    super({
      name: "DBProxyEndpointNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyEndpointNotFoundFault.prototype);
  }
}

/**
 * <p>You can't perform this operation while the DB proxy endpoint is in a particular state.</p>
 */
export class InvalidDBProxyEndpointStateFault extends __BaseException {
  readonly name: "InvalidDBProxyEndpointStateFault" = "InvalidDBProxyEndpointStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBProxyEndpointStateFault, __BaseException>) {
    super({
      name: "InvalidDBProxyEndpointStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBProxyEndpointStateFault.prototype);
  }
}

/**
 * <p>The DB subnet isn't in the <i>available</i> state.</p>
 */
export class InvalidDBSubnetStateFault extends __BaseException {
  readonly name: "InvalidDBSubnetStateFault" = "InvalidDBSubnetStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSubnetStateFault, __BaseException>) {
    super({
      name: "InvalidDBSubnetStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSubnetStateFault.prototype);
  }
}

/**
 * <p>This error can occur if someone else is modifying a subscription. You should retry the action.</p>
 */
export class InvalidEventSubscriptionStateFault extends __BaseException {
  readonly name: "InvalidEventSubscriptionStateFault" = "InvalidEventSubscriptionStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEventSubscriptionStateFault, __BaseException>) {
    super({
      name: "InvalidEventSubscriptionStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEventSubscriptionStateFault.prototype);
  }
}

/**
 * <p>The option group isn't in the <i>available</i> state.</p>
 */
export class InvalidOptionGroupStateFault extends __BaseException {
  readonly name: "InvalidOptionGroupStateFault" = "InvalidOptionGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOptionGroupStateFault, __BaseException>) {
    super({
      name: "InvalidOptionGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOptionGroupStateFault.prototype);
  }
}

/**
 * <p>The specified RDS DB instance or Aurora DB cluster isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 */
export class DBProxyTargetNotFoundFault extends __BaseException {
  readonly name: "DBProxyTargetNotFoundFault" = "DBProxyTargetNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyTargetNotFoundFault, __BaseException>) {
    super({
      name: "DBProxyTargetNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyTargetNotFoundFault.prototype);
  }
}

/**
 * <p>A CA certificate for an Amazon Web Services account.</p>
 */
export interface Certificate {
  /**
   * <p>The unique key that identifies a certificate.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>The type of the certificate.</p>
   */
  CertificateType?: string;

  /**
   * <p>The thumbprint of the certificate.</p>
   */
  Thumbprint?: string;

  /**
   * <p>The starting date from which the certificate is valid.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The final date that the certificate continues to be valid.</p>
   */
  ValidTill?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>Whether there is an override for the default certificate identifier.</p>
   */
  CustomerOverride?: boolean;

  /**
   * <p>If there is an override for the default certificate identifier, when the override
   *             expires.</p>
   */
  CustomerOverrideValidTill?: Date;
}

export namespace Certificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an
 *         existing certificate.</p>
 */
export class CertificateNotFoundFault extends __BaseException {
  readonly name: "CertificateNotFoundFault" = "CertificateNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateNotFoundFault, __BaseException>) {
    super({
      name: "CertificateNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateNotFoundFault.prototype);
  }
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results
 *             from a describe operation. Filters can be used to match a set of resources by specific
 *             criteria, such as IDs. The filters supported by a describe operation are documented
 *             with the describe operation.</p>
 *         <note>
 *             <p>Currently, wildcards are not supported in filters.</p>
 *         </note>
 *         <p>The following actions can be filtered:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBClusterBacktracks</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBClusterEndpoints</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBClusters</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribePendingMaintenanceActions</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more filter values. Filter values are case-sensitive.</p>
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

/**
 * <p>
 *             <code>BacktrackIdentifier</code> doesn't refer to an existing backtrack.</p>
 */
export class DBClusterBacktrackNotFoundFault extends __BaseException {
  readonly name: "DBClusterBacktrackNotFoundFault" = "DBClusterBacktrackNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterBacktrackNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterBacktrackNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterBacktrackNotFoundFault.prototype);
  }
}

export type ApplyMethod = "immediate" | "pending-reboot";

/**
 * <p>This data type is used as a request parameter in the
 *         <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions.</p>
 *         <p>This data type is used as a response element in the
 *         <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p>
 */
export interface Parameter {
  /**
   * <p>Specifies the name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>Specifies the value of the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>Provides a description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>Indicates the source of the parameter value.</p>
   */
  Source?: string;

  /**
   * <p>Specifies the engine specific parameters type.</p>
   */
  ApplyType?: string;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified.
   *         Some parameters have security or operational implications
   *         that prevent them from being changed.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>Indicates when to apply parameter updates.</p>
   */
  ApplyMethod?: ApplyMethod | string;

  /**
   * <p>The valid DB engine modes.</p>
   */
  SupportedEngineModes?: string[];
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p>
 *         <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts
 *             to restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
 *             API action.</p>
 */
export interface DBClusterSnapshotAttribute {
  /**
   * <p>The name of the manual DB cluster snapshot attribute.</p>
   *         <p>The attribute named <code>restore</code> refers to the list of Amazon Web Services accounts that
   *             have permission to copy or restore the manual DB cluster snapshot. For more information,
   *             see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p>
   *         <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *             returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual
   *             DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster snapshot
   *             is public and available for any Amazon Web Services account to copy or restore.</p>
   */
  AttributeValues?: string[];
}

export namespace DBClusterSnapshotAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterSnapshotAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
 *             API action.</p>
 *         <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts
 *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
 *             API action.</p>
 */
export interface DBClusterSnapshotAttributesResult {
  /**
   * <p>The identifier of the manual DB cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>The list of attributes and values for the manual DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[];
}

export namespace DBClusterSnapshotAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterSnapshotAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element to <code>DescribeDBLogFiles</code>.</p>
 */
export interface DescribeDBLogFilesDetails {
  /**
   * <p>The name of the log file for the specified DB instance.</p>
   */
  LogFileName?: string;

  /**
   * <p>A POSIX timestamp when the last log entry was written.</p>
   */
  LastWritten?: number;

  /**
   * <p>The size, in bytes, of the log file for the specified DB instance.</p>
   */
  Size?: number;
}

export namespace DescribeDBLogFilesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBLogFilesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.</p>
 */
export interface ConnectionPoolConfigurationInfo {
  /**
   * <p>The maximum size of the connection pool for each target in a target group. The value is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.</p>
   */
  MaxConnectionsPercent?: number;

  /**
   * <p>Controls how actively the proxy closes idle database connections in the connection pool.
   *         The value is expressed as a percentage of the <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *         With a high value, the proxy leaves a high percentage of idle database connections open. A low value causes the proxy to close more idle connections and return them to the database.</p>
   */
  MaxIdleConnectionsPercent?: number;

  /**
   * <p>The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the
   *         proxy has opened its maximum number of connections and all connections are busy with client sessions.</p>
   */
  ConnectionBorrowTimeout?: number;

  /**
   * <p>Each item in the list represents a class of SQL operations that normally cause all later statements
   *         in a session using a proxy to be pinned to the same underlying database connection. Including an item
   *         in the list exempts that class of SQL operations from the pinning behavior. Currently, the only
   *         allowed value is <code>EXCLUDE_VARIABLE_SETS</code>.</p>
   */
  SessionPinningFilters?: string[];

  /**
   * <p>One or more SQL statements for the proxy to run when opening each new database connection.
   *         Typically used with <code>SET</code> statements to make sure that each connection has identical
   *         settings such as time zone and character set. This setting is empty by default.
   *         For multiple statements, use semicolons as the separator.
   *         You can also include multiple variables in a single <code>SET</code> statement, such as
   *         <code>SET x=1, y=2</code>.</p>
   */
  InitQuery?: string;
}

export namespace ConnectionPoolConfigurationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionPoolConfigurationInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group
 *         is associated with exactly one RDS DB instance or Aurora DB cluster.</p>
 *         <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
 */
export interface DBProxyTargetGroup {
  /**
   * <p>The identifier for the RDS proxy associated with this target group.</p>
   */
  DBProxyName?: string;

  /**
   * <p>The identifier for the target group. This name must be unique for all target groups owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the target group.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>Whether this target group is the first one used for connection requests by the associated proxy.
   *         Because each proxy is currently associated with a single target group, currently this setting
   *         is always <code>true</code>.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The current status of this target group. A status of <code>available</code> means the
   *         target group is correctly associated with a database. Other values indicate that you must wait for
   *         the target group to be ready, or take some action to resolve an issue.</p>
   */
  Status?: string;

  /**
   * <p>The settings that determine the size and behavior of the connection pool for the target group.</p>
   */
  ConnectionPoolConfig?: ConnectionPoolConfigurationInfo;

  /**
   * <p>The date and time when the target group was first created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The date and time when the target group was last updated.</p>
   */
  UpdatedDate?: Date;
}

export namespace DBProxyTargetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBProxyTargetGroup): any => ({
    ...obj,
  });
}

export enum TargetRole {
  READ_ONLY = "READ_ONLY",
  READ_WRITE = "READ_WRITE",
  UNKNOWN = "UNKNOWN",
}

export enum TargetHealthReason {
  AUTH_FAILURE = "AUTH_FAILURE",
  CONNECTION_FAILED = "CONNECTION_FAILED",
  INVALID_REPLICATION_STATE = "INVALID_REPLICATION_STATE",
  PENDING_PROXY_CAPACITY = "PENDING_PROXY_CAPACITY",
  UNREACHABLE = "UNREACHABLE",
}

export enum TargetState {
  available = "AVAILABLE",
  registering = "REGISTERING",
  unavailable = "UNAVAILABLE",
}

/**
 * <p>Information about the connection health of an RDS Proxy target.</p>
 */
export interface TargetHealth {
  /**
   * <p>The current state of the connection health lifecycle for the RDS Proxy target.
   *            The following is a typical lifecycle example for the states of an RDS Proxy target:</p>
   *         <p>
   *             <code>registering</code> > <code>unavailable</code> > <code>available</code> > <code>unavailable</code> > <code>available</code>
   *          </p>
   */
  State?: TargetState | string;

  /**
   * <p>The reason for the current health <code>State</code> of the RDS Proxy target.</p>
   */
  Reason?: TargetHealthReason | string;

  /**
   * <p>A description of the health of the RDS Proxy target.
   *             If the <code>State</code> is <code>AVAILABLE</code>, a description is not included.</p>
   */
  Description?: string;
}

export namespace TargetHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TargetHealth): any => ({
    ...obj,
  });
}

export enum TargetType {
  RDS_INSTANCE = "RDS_INSTANCE",
  RDS_SERVERLESS_ENDPOINT = "RDS_SERVERLESS_ENDPOINT",
  TRACKED_CLUSTER = "TRACKED_CLUSTER",
}

/**
 * <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster
 *         that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p>
 *         <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
 */
export interface DBProxyTarget {
  /**
   * <p>The Amazon Resource Name (ARN) for the RDS DB instance or Aurora DB cluster.</p>
   */
  TargetArn?: string;

  /**
   * <p>The writer endpoint for the RDS DB instance or Aurora DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The DB cluster identifier when the target represents an Aurora DB cluster. This field is blank when the target represents an RDS DB instance.</p>
   */
  TrackedClusterId?: string;

  /**
   * <p>The identifier representing the target. It can be the instance identifier for an RDS DB instance,
   *         or the cluster identifier for an Aurora DB cluster.</p>
   */
  RdsResourceId?: string;

  /**
   * <p>The port that the RDS Proxy uses to connect to the target RDS DB instance or Aurora DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the kind of database, such as an RDS DB instance or an Aurora DB cluster, that the target represents.</p>
   */
  Type?: TargetType | string;

  /**
   * <p>A value that indicates whether the target of the proxy can be used for read/write or read-only operations.</p>
   */
  Role?: TargetRole | string;

  /**
   * <p>Information about the connection health of the RDS Proxy target.</p>
   */
  TargetHealth?: TargetHealth;
}

export namespace DBProxyTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBProxyTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the name and values of a manual DB snapshot attribute</p>
 *         <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
 *     to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
 *     API.</p>
 */
export interface DBSnapshotAttribute {
  /**
   * <p>The name of the manual DB snapshot attribute.</p>
   *         <p>The attribute named <code>restore</code> refers to the list of Amazon Web Services accounts that
   *           have permission to copy or restore the manual DB cluster snapshot. For more information,
   *           see the <code>ModifyDBSnapshotAttribute</code>
   *           API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value or values for the manual DB snapshot attribute.</p>
   *         <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *       returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual
   *       DB snapshot. If a value of <code>all</code> is in the list, then the manual DB snapshot
   *       is public and available for any Amazon Web Services account to copy or restore.</p>
   */
  AttributeValues?: string[];
}

export namespace DBSnapshotAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshotAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
 *     API action.</p>
 *         <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
 *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
 *       API action.</p>
 */
export interface DBSnapshotAttributesResult {
  /**
   * <p>The identifier of the manual DB snapshot that the attributes apply to.</p>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>The list of attributes and values for the manual DB snapshot.</p>
   */
  DBSnapshotAttributes?: DBSnapshotAttribute[];
}

export namespace DBSnapshotAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshotAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.</p>
 */
export interface EngineDefaults {
  /**
   * <p>Specifies the name of the DB parameter group family that the engine default parameters apply to.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>An optional pagination token provided by a previous
   *             EngineDefaults request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Parameter[];
}

export namespace EngineDefaults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineDefaults): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of a successful invocation of the <code>DescribeEventCategories</code> operation.</p>
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type that the returned categories belong to</p>
   */
  SourceType?: string;

  /**
   * <p>The event categories for the specified source type</p>
   */
  EventCategories?: string[];
}

export namespace EventCategoriesMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventCategoriesMap): any => ({
    ...obj,
  });
}

export type SourceType =
  | "custom-engine-version"
  | "db-cluster"
  | "db-cluster-snapshot"
  | "db-instance"
  | "db-parameter-group"
  | "db-proxy"
  | "db-security-group"
  | "db-snapshot";

/**
 * <p>This data type is used as a response element in the <code>DescribeEvents</code> action.</p>
 */
export interface Event {
  /**
   * <p>Provides the identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>Specifies the source type for this event.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>Provides the text of this event.</p>
   */
  Message?: string;

  /**
   * <p>Specifies the category for the event.</p>
   */
  EventCategories?: string[];

  /**
   * <p>Specifies the date and time of the event.</p>
   */
  Date?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the event.</p>
   */
  SourceArn?: string;
}

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p>The minimum DB engine version required for each corresponding allowed value for an option setting.</p>
 */
export interface MinimumEngineVersionPerAllowedValue {
  /**
   * <p>The allowed value for an option setting.</p>
   */
  AllowedValue?: string;

  /**
   * <p>The minimum DB engine version required for the allowed value.</p>
   */
  MinimumEngineVersion?: string;
}

export namespace MinimumEngineVersionPerAllowedValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MinimumEngineVersionPerAllowedValue): any => ({
    ...obj,
  });
}

/**
 * <p>Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.</p>
 */
export interface OptionGroupOptionSetting {
  /**
   * <p>The name of the option group option.</p>
   */
  SettingName?: string;

  /**
   * <p>The description of the option group option.</p>
   */
  SettingDescription?: string;

  /**
   * <p>The default value for the option group option.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The DB engine specific parameter type for the option group option.</p>
   */
  ApplyType?: string;

  /**
   * <p>Indicates the acceptable values for the option group option.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Boolean value where true indicates that this option group option can be changed from the default value.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>Boolean value where true indicates that a value must be specified for this option setting of the option group option.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The minimum DB engine version required for the corresponding allowed value for this option setting.</p>
   */
  MinimumEngineVersionPerAllowedValue?: MinimumEngineVersionPerAllowedValue[];
}

export namespace OptionGroupOptionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroupOptionSetting): any => ({
    ...obj,
  });
}

/**
 * <p>The version for an option. Option group option versions are returned by
 *             the <code>DescribeOptionGroupOptions</code> action.</p>
 */
export interface OptionVersion {
  /**
   * <p>The version of the option.</p>
   */
  Version?: string;

  /**
   * <p>True if the version is the default version of the option, and otherwise false.</p>
   */
  IsDefault?: boolean;
}

export namespace OptionVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Available option.</p>
 */
export interface OptionGroupOption {
  /**
   * <p>The name of the option.</p>
   */
  Name?: string;

  /**
   * <p>The description of the option.</p>
   */
  Description?: string;

  /**
   * <p>The name of the engine that this option can be applied to.</p>
   */
  EngineName?: string;

  /**
   * <p>Indicates the major engine version that the option is available for.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>The minimum required engine version for the option to be applied.</p>
   */
  MinimumRequiredMinorEngineVersion?: string;

  /**
   * <p>Specifies whether the option requires a port.</p>
   */
  PortRequired?: boolean;

  /**
   * <p>If the option requires a port, specifies the default port for the option.</p>
   */
  DefaultPort?: number;

  /**
   * <p>The options that are prerequisites for this option.</p>
   */
  OptionsDependedOn?: string[];

  /**
   * <p>The options that conflict with this option.</p>
   */
  OptionsConflictsWith?: string[];

  /**
   * <p>Persistent options can't be removed from an option group while DB instances are associated with the option group. If you disassociate all DB instances from the option group, your can remove the persistent option from the option group.</p>
   */
  Persistent?: boolean;

  /**
   * <p>Permanent options can never be removed from an option group. An option group containing a permanent option can't be removed from a DB instance.</p>
   */
  Permanent?: boolean;

  /**
   * <p>If true, you must enable the Auto Minor Version Upgrade setting for your DB instance
   *             before you can use this option.
   *             You can enable Auto Minor Version Upgrade when you first create your DB instance,
   *             or by modifying your DB instance later.</p>
   */
  RequiresAutoMinorEngineVersionUpgrade?: boolean;

  /**
   * <p>If true, you can only use this option with a DB instance that is in a VPC.</p>
   */
  VpcOnly?: boolean;

  /**
   * <p>If true, you can change the option to an earlier version of the option.
   *             This only applies to options that have different versions available.</p>
   */
  SupportsOptionVersionDowngrade?: boolean;

  /**
   * <p>The option settings that are available (and the default value) for each option in an option group.</p>
   */
  OptionGroupOptionSettings?: OptionGroupOptionSetting[];

  /**
   * <p>The versions that are available for the option.</p>
   */
  OptionGroupOptionVersions?: OptionVersion[];
}

export namespace OptionGroupOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroupOption): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the available processor feature information for the DB instance class of a DB instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the
 *                 Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide.
 *             </i>
 *          </p>
 */
export interface AvailableProcessorFeature {
  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code>
   *             and <code>threadsPerCore</code>.</p>
   */
  Name?: string;

  /**
   * <p>The default value for the processor feature of the DB instance class.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The allowed values for the processor feature of the DB instance class.</p>
   */
  AllowedValues?: string;
}

export namespace AvailableProcessorFeature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailableProcessorFeature): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a list of available options for a DB instance.</p>
 *         <p>This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action.</p>
 */
export interface OrderableDBInstanceOption {
  /**
   * <p>The engine type of a DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of a DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The DB instance class for a DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model for a DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The Availability Zone group for a DB instance.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>Indicates whether a DB instance is Multi-AZ capable.</p>
   */
  MultiAZCapable?: boolean;

  /**
   * <p>Indicates whether a DB instance can have a read replica.</p>
   */
  ReadReplicaCapable?: boolean;

  /**
   * <p>Indicates whether a DB instance is in a VPC.</p>
   */
  Vpc?: boolean;

  /**
   * <p>Indicates whether a DB instance supports encrypted storage.</p>
   */
  SupportsStorageEncryption?: boolean;

  /**
   * <p>Indicates the storage type for a DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>Indicates whether a DB instance supports provisioned IOPS.</p>
   */
  SupportsIops?: boolean;

  /**
   * <p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds.</p>
   */
  SupportsEnhancedMonitoring?: boolean;

  /**
   * <p>Indicates whether a DB instance supports IAM database authentication.</p>
   */
  SupportsIAMDatabaseAuthentication?: boolean;

  /**
   * <p>True if a DB instance supports Performance Insights, otherwise false.</p>
   */
  SupportsPerformanceInsights?: boolean;

  /**
   * <p>Minimum storage size for a DB instance.</p>
   */
  MinStorageSize?: number;

  /**
   * <p>Maximum storage size for a DB instance.</p>
   */
  MaxStorageSize?: number;

  /**
   * <p>Minimum total provisioned IOPS for a DB instance.</p>
   */
  MinIopsPerDbInstance?: number;

  /**
   * <p>Maximum total provisioned IOPS for a DB instance.</p>
   */
  MaxIopsPerDbInstance?: number;

  /**
   * <p>Minimum provisioned IOPS per GiB for a DB instance.</p>
   */
  MinIopsPerGib?: number;

  /**
   * <p>Maximum provisioned IOPS per GiB for a DB instance.</p>
   */
  MaxIopsPerGib?: number;

  /**
   * <p>A list of the available processor features for the DB instance class of a DB instance.</p>
   */
  AvailableProcessorFeatures?: AvailableProcessorFeature[];

  /**
   * <p>A list of the supported DB engine modes.</p>
   */
  SupportedEngineModes?: string[];

  /**
   * <p>Whether Amazon RDS can automatically scale storage for DB instances that use the specified DB instance class.</p>
   */
  SupportsStorageAutoscaling?: boolean;

  /**
   * <p>Whether a DB instance supports Kerberos Authentication.</p>
   */
  SupportsKerberosAuthentication?: boolean;

  /**
   * <p>Whether a DB instance supports RDS on Outposts.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  OutpostCapable?: boolean;

  /**
   * <p>The list of supported modes for Database Activity Streams. Aurora PostgreSQL returns the value <code>[sync,
   *           async]</code>. Aurora MySQL and RDS for Oracle return <code>[async]</code> only. If Database Activity Streams
   *           isn't supported, the return value is an empty list.</p>
   */
  SupportedActivityStreamModes?: string[];

  /**
   * <p>A value that indicates whether you can use Aurora global databases with a specific combination of other DB engine attributes.</p>
   */
  SupportsGlobalDatabases?: boolean;

  /**
   * <p>Whether DB instances can be configured as a Multi-AZ DB cluster.</p>
   *         <p>For more information on Multi-AZ DB clusters, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *                Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  SupportsClusters?: boolean;

  /**
   * <p>The network types supported by the DB instance (<code>IPV4</code> or <code>DUAL</code>).</p>
   *         <p>A DB instance can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  SupportedNetworkTypes?: string[];
}

export namespace OrderableDBInstanceOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderableDBInstanceOption): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the
 *             <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

export namespace RecurringCharge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the
 *             <code>DescribeReservedDBInstances</code> and
 *             <code>PurchaseReservedDBInstancesOffering</code> actions.</p>
 */
export interface ReservedDBInstance {
  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class for the reserved DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved DB instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly price charged for this reserved DB instance.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved DB instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The number of reserved DB instances.</p>
   */
  DBInstanceCount?: number;

  /**
   * <p>The description of the reserved DB instance.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type of this reserved DB instance.</p>
   */
  OfferingType?: string;

  /**
   * <p>Indicates if the reservation applies to Multi-AZ deployments.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The state of the reserved DB instance.</p>
   */
  State?: string;

  /**
   * <p>The recurring price charged to run this reserved DB instance.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The Amazon Resource Name (ARN) for the reserved DB instance.</p>
   */
  ReservedDBInstanceArn?: string;

  /**
   * <p>The unique identifier for the lease associated with the reserved DB instance.</p>
   *         <note>
   *             <p>Amazon Web Services Support might request the lease ID for an issue related to a reserved DB instance.</p>
   *         </note>
   */
  LeaseId?: string;
}

export namespace ReservedDBInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstance): any => ({
    ...obj,
  });
}

/**
 * <p>The specified reserved DB Instance not found.</p>
 */
export class ReservedDBInstanceNotFoundFault extends __BaseException {
  readonly name: "ReservedDBInstanceNotFoundFault" = "ReservedDBInstanceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedDBInstanceNotFoundFault, __BaseException>) {
    super({
      name: "ReservedDBInstanceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedDBInstanceNotFoundFault.prototype);
  }
}

/**
 * <p>This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action.</p>
 */
export interface ReservedDBInstancesOffering {
  /**
   * <p>The offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class for the reserved DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The duration of the offering in seconds.</p>
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
   * <p>The currency code for the reserved DB instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The database engine used by the offering.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type.</p>
   */
  OfferingType?: string;

  /**
   * <p>Indicates if the offering applies to Multi-AZ deployments.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The recurring price charged to run this reserved DB instance.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

export namespace ReservedDBInstancesOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstancesOffering): any => ({
    ...obj,
  });
}

/**
 * <p>Specified offering does not exist.</p>
 */
export class ReservedDBInstancesOfferingNotFoundFault extends __BaseException {
  readonly name: "ReservedDBInstancesOfferingNotFoundFault" = "ReservedDBInstancesOfferingNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedDBInstancesOfferingNotFoundFault, __BaseException>) {
    super({
      name: "ReservedDBInstancesOfferingNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedDBInstancesOfferingNotFoundFault.prototype);
  }
}

/**
 * <p>Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.</p>
 */
export interface SourceRegion {
  /**
   * <p>The name of the source Amazon Web Services Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The endpoint for the source Amazon Web Services Region endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The status of the source Amazon Web Services Region.</p>
   */
  Status?: string;

  /**
   * <p>Whether the source Amazon Web Services Region supports replicating automated backups to the current Amazon Web Services Region.</p>
   */
  SupportsDBInstanceAutomatedBackupsReplication?: boolean;
}

export namespace SourceRegion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceRegion): any => ({
    ...obj,
  });
}

/**
 * <p>A range of double values.</p>
 */
export interface DoubleRange {
  /**
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;
}

export namespace DoubleRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DoubleRange): any => ({
    ...obj,
  });
}

/**
 * <p>A range of integer values.</p>
 */
export interface Range {
  /**
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;

  /**
   * <p>The step value for the range.
   *             For example, if you have a range of 5,000 to 10,000,
   *             with a step value of 1,000,
   *             the valid values start at 5,000 and step up by 1,000.
   *             Even though 7,500 is within the range,
   *             it isn't a valid value for the range.
   *             The valid values are 5,000, 6,000, 7,000, 8,000...</p>
   */
  Step?: number;
}

export namespace Range {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.</p>
 */
export interface ValidStorageOptions {
  /**
   * <p>The valid storage types for your DB instance.
   *             For example, gp2, io1.</p>
   */
  StorageType?: string;

  /**
   * <p>The valid range of storage in gibibytes (GiB).
   *             For example, 100 to 16384.</p>
   */
  StorageSize?: Range[];

  /**
   * <p>The valid range of provisioned IOPS.
   *             For example, 1000-20000.</p>
   */
  ProvisionedIops?: Range[];

  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier.
   *             For example, 3-10,
   *             which means that provisioned IOPS can be between 3 and 10 times storage.</p>
   */
  IopsToStorageRatio?: DoubleRange[];

  /**
   * <p>Whether or not Amazon RDS can automatically scale storage for DB instances that use the new instance class.</p>
   */
  SupportsStorageAutoscaling?: boolean;
}

export namespace ValidStorageOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidStorageOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.
 *             You can use this information when you call
 *             <code>ModifyDBInstance</code>.</p>
 */
export interface ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance.</p>
   */
  Storage?: ValidStorageOptions[];

  /**
   * <p>Valid processor features for your DB instance.</p>
   */
  ValidProcessorFeatures?: AvailableProcessorFeature[];
}

export namespace ValidDBInstanceModificationsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidDBInstanceModificationsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>LogFileName</code> doesn't refer to an existing DB log file.</p>
 */
export class DBLogFileNotFoundFault extends __BaseException {
  readonly name: "DBLogFileNotFoundFault" = "DBLogFileNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBLogFileNotFoundFault, __BaseException>) {
    super({
      name: "DBLogFileNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBLogFileNotFoundFault.prototype);
  }
}

/**
 * <p>
 *             <code>Capacity</code> isn't a valid Aurora Serverless DB cluster
 *             capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>,
 *             <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
 */
export class InvalidDBClusterCapacityFault extends __BaseException {
  readonly name: "InvalidDBClusterCapacityFault" = "InvalidDBClusterCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterCapacityFault, __BaseException>) {
    super({
      name: "InvalidDBClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterCapacityFault.prototype);
  }
}

export enum CustomEngineVersionStatus {
  available = "available",
  inactive = "inactive",
  inactive_except_restore = "inactive-except-restore",
}

/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch
 *             Logs for a specific DB instance or DB cluster.</p>
 *         <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported
 *             (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB
 *             engine being used.</p>
 *         <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>
 *         <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * <p>The list of log types to enable.</p>
   */
  EnableLogTypes?: string[];

  /**
   * <p>The list of log types to disable.</p>
   */
  DisableLogTypes?: string[];
}

export namespace CloudwatchLogsExportConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudwatchLogsExportConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 */
export class SharedSnapshotQuotaExceededFault extends __BaseException {
  readonly name: "SharedSnapshotQuotaExceededFault" = "SharedSnapshotQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SharedSnapshotQuotaExceededFault, __BaseException>) {
    super({
      name: "SharedSnapshotQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SharedSnapshotQuotaExceededFault.prototype);
  }
}

/**
 * <p>The DB upgrade failed because a resource the DB depends on can't be
 *             modified.</p>
 */
export class DBUpgradeDependencyFailureFault extends __BaseException {
  readonly name: "DBUpgradeDependencyFailureFault" = "DBUpgradeDependencyFailureFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBUpgradeDependencyFailureFault, __BaseException>) {
    super({
      name: "DBUpgradeDependencyFailureFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBUpgradeDependencyFailureFault.prototype);
  }
}

/**
 * <p>Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.</p>
 */
export interface ConnectionPoolConfiguration {
  /**
   * <p>The maximum size of the connection pool for each target in a target group. The value is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: between 1 and 100</p>
   */
  MaxConnectionsPercent?: number;

  /**
   * <p>Controls how actively the proxy closes idle database connections in the connection pool.
   *         The value is expressed as a percentage of the <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *         With a high value, the proxy leaves a high percentage of idle database connections open. A low value causes the proxy to close more idle connections and return them to the database.</p>
   *         <p>Default: 50</p>
   *         <p>Constraints: between 0 and <code>MaxConnectionsPercent</code>
   *          </p>
   */
  MaxIdleConnectionsPercent?: number;

  /**
   * <p>The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the
   *         proxy has opened its maximum number of connections and all connections are busy with client sessions.</p>
   *         <p>Default: 120</p>
   *         <p>Constraints: between 1 and 3600, or 0 representing unlimited</p>
   */
  ConnectionBorrowTimeout?: number;

  /**
   * <p>Each item in the list represents a class of SQL operations that normally cause all later statements
   *         in a session using a proxy to be pinned to the same underlying database connection. Including an item
   *         in the list exempts that class of SQL operations from the pinning behavior.</p>
   *         <p>Default: no session pinning filters</p>
   */
  SessionPinningFilters?: string[];

  /**
   * <p>One or more SQL statements for the proxy to run when opening each new database connection.
   *         Typically used with <code>SET</code> statements to make sure that each connection has identical
   *         settings such as time zone and character set. For multiple statements, use semicolons as the separator.
   *         You can also include multiple variables in a single <code>SET</code> statement, such as
   *         <code>SET x=1, y=2</code>.</p>
   *         <p>Default: no initialization query</p>
   */
  InitQuery?: string;
}

export namespace ConnectionPoolConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionPoolConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 */
export class SubnetAlreadyInUse extends __BaseException {
  readonly name: "SubnetAlreadyInUse" = "SubnetAlreadyInUse";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetAlreadyInUse, __BaseException>) {
    super({
      name: "SubnetAlreadyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetAlreadyInUse.prototype);
  }
}

/**
 * <p>A list of all available options</p>
 */
export interface OptionConfiguration {
  /**
   * <p>The configuration of options to include in a group.</p>
   */
  OptionName: string | undefined;

  /**
   * <p>The optional port for the option.</p>
   */
  Port?: number;

  /**
   * <p>The version for the option.</p>
   */
  OptionVersion?: string;

  /**
   * <p>A list of DBSecurityGroupMembership name strings used for this option.</p>
   */
  DBSecurityGroupMemberships?: string[];

  /**
   * <p>A list of VpcSecurityGroupMembership name strings used for this option.</p>
   */
  VpcSecurityGroupMemberships?: string[];

  /**
   * <p>The option settings to include in an option group.</p>
   */
  OptionSettings?: OptionSetting[];
}

export namespace OptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>User already has a reservation with the given identifier.</p>
 */
export class ReservedDBInstanceAlreadyExistsFault extends __BaseException {
  readonly name: "ReservedDBInstanceAlreadyExistsFault" = "ReservedDBInstanceAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedDBInstanceAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReservedDBInstanceAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedDBInstanceAlreadyExistsFault.prototype);
  }
}

/**
 * <p>Request would exceed the user's DB Instance quota.</p>
 */
export class ReservedDBInstanceQuotaExceededFault extends __BaseException {
  readonly name: "ReservedDBInstanceQuotaExceededFault" = "ReservedDBInstanceQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedDBInstanceQuotaExceededFault, __BaseException>) {
    super({
      name: "ReservedDBInstanceQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedDBInstanceQuotaExceededFault.prototype);
  }
}

/**
 * <p>The proxy is already associated with the specified RDS DB instance or Aurora DB cluster.</p>
 */
export class DBProxyTargetAlreadyRegisteredFault extends __BaseException {
  readonly name: "DBProxyTargetAlreadyRegisteredFault" = "DBProxyTargetAlreadyRegisteredFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyTargetAlreadyRegisteredFault, __BaseException>) {
    super({
      name: "DBProxyTargetAlreadyRegisteredFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyTargetAlreadyRegisteredFault.prototype);
  }
}

/**
 * <p>The requested operation can't be performed because there aren't enough available IP addresses
 *            in the proxy's subnets. Add more CIDR blocks to the VPC or remove IP address that aren't required
 *            from the subnets.</p>
 */
export class InsufficientAvailableIPsInSubnetFault extends __BaseException {
  readonly name: "InsufficientAvailableIPsInSubnetFault" = "InsufficientAvailableIPsInSubnetFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientAvailableIPsInSubnetFault, __BaseException>) {
    super({
      name: "InsufficientAvailableIPsInSubnetFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientAvailableIPsInSubnetFault.prototype);
  }
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.</p>
 */
export class DBClusterRoleNotFoundFault extends __BaseException {
  readonly name: "DBClusterRoleNotFoundFault" = "DBClusterRoleNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterRoleNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterRoleNotFoundFault.prototype);
  }
}

/**
 * <p>The specified <code>RoleArn</code> value doesn't match the specified feature for
 *             the DB instance.</p>
 */
export class DBInstanceRoleNotFoundFault extends __BaseException {
  readonly name: "DBInstanceRoleNotFoundFault" = "DBInstanceRoleNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceRoleNotFoundFault, __BaseException>) {
    super({
      name: "DBInstanceRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceRoleNotFoundFault.prototype);
  }
}

/**
 * <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't
 *             authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
 */
export class InvalidS3BucketFault extends __BaseException {
  readonly name: "InvalidS3BucketFault" = "InvalidS3BucketFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3BucketFault, __BaseException>) {
    super({
      name: "InvalidS3BucketFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3BucketFault.prototype);
  }
}

/**
 * <p>The DB cluster doesn't have enough capacity for the current operation.</p>
 */
export class InsufficientDBClusterCapacityFault extends __BaseException {
  readonly name: "InsufficientDBClusterCapacityFault" = "InsufficientDBClusterCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientDBClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientDBClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientDBClusterCapacityFault.prototype);
  }
}

/**
 * <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
 */
export class InvalidRestoreFault extends __BaseException {
  readonly name: "InvalidRestoreFault" = "InvalidRestoreFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRestoreFault, __BaseException>) {
    super({
      name: "InvalidRestoreFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRestoreFault.prototype);
  }
}

/**
 * <p>
 *             <code>SourceDBInstanceIdentifier</code>
 *         refers to a DB instance with
 *         <code>BackupRetentionPeriod</code> equal to 0.</p>
 */
export class PointInTimeRestoreNotEnabledFault extends __BaseException {
  readonly name: "PointInTimeRestoreNotEnabledFault" = "PointInTimeRestoreNotEnabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PointInTimeRestoreNotEnabledFault, __BaseException>) {
    super({
      name: "PointInTimeRestoreNotEnabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PointInTimeRestoreNotEnabledFault.prototype);
  }
}

/**
 * <p>You can't start an export task that's already running.</p>
 */
export class ExportTaskAlreadyExistsFault extends __BaseException {
  readonly name: "ExportTaskAlreadyExistsFault" = "ExportTaskAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExportTaskAlreadyExistsFault, __BaseException>) {
    super({
      name: "ExportTaskAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExportTaskAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The IAM role requires additional permissions to export to an Amazon S3 bucket.</p>
 */
export class IamRoleMissingPermissionsFault extends __BaseException {
  readonly name: "IamRoleMissingPermissionsFault" = "IamRoleMissingPermissionsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamRoleMissingPermissionsFault, __BaseException>) {
    super({
      name: "IamRoleMissingPermissionsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamRoleMissingPermissionsFault.prototype);
  }
}

/**
 * <p>The IAM role is missing for exporting to an Amazon S3 bucket.</p>
 */
export class IamRoleNotFoundFault extends __BaseException {
  readonly name: "IamRoleNotFoundFault" = "IamRoleNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamRoleNotFoundFault, __BaseException>) {
    super({
      name: "IamRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamRoleNotFoundFault.prototype);
  }
}

/**
 * <p>The export is invalid for exporting to an Amazon S3 bucket.</p>
 */
export class InvalidExportOnlyFault extends __BaseException {
  readonly name: "InvalidExportOnlyFault" = "InvalidExportOnlyFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportOnlyFault, __BaseException>) {
    super({
      name: "InvalidExportOnlyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportOnlyFault.prototype);
  }
}

/**
 * <p>The state of the export snapshot is invalid for exporting to an Amazon S3 bucket.</p>
 */
export class InvalidExportSourceStateFault extends __BaseException {
  readonly name: "InvalidExportSourceStateFault" = "InvalidExportSourceStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportSourceStateFault, __BaseException>) {
    super({
      name: "InvalidExportSourceStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportSourceStateFault.prototype);
  }
}
