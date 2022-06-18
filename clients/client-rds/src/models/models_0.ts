// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import {
  AccountQuota,
  ActivityStreamMode,
  ActivityStreamStatus,
  AutomationMode,
  Certificate,
  CharacterSet,
  CloudwatchLogsExportConfiguration,
  ConnectionPoolConfiguration,
  CustomEngineVersionStatus,
  DBCluster,
  DBClusterParameterGroup,
  DBClusterSnapshot,
  DBClusterSnapshotAttributesResult,
  DBInstance,
  DBInstanceAutomatedBackup,
  DBParameterGroup,
  DBProxy,
  DBProxyEndpoint,
  DBProxyEndpointTargetRole,
  DBProxyTarget,
  DBProxyTargetGroup,
  DBSecurityGroup,
  DBSnapshot,
  DBSnapshotAttributesResult,
  DBSubnetGroup,
  DescribeDBLogFilesDetails,
  EngineDefaults,
  EngineFamily,
  Event,
  EventCategoriesMap,
  EventSubscription,
  Filter,
  GlobalCluster,
  OptionConfiguration,
  OptionGroup,
  OptionGroupOption,
  OrderableDBInstanceOption,
  Parameter,
  ProcessorFeature,
  ReplicaMode,
  ReservedDBInstance,
  ReservedDBInstancesOffering,
  ResourcePendingMaintenanceActions,
  ScalingConfiguration,
  ServerlessV2ScalingConfiguration,
  SourceRegion,
  SourceType,
  Tag,
  Timezone,
  UpgradeTarget,
  UserAuthConfig,
  ValidDBInstanceModificationsMessage,
} from "./models_1";
import { RDSServiceException as __BaseException } from "./RDSServiceException";

/**
 * <p>Data returned by the <b>DescribeAccountAttributes</b> action.</p>
 */
export interface AccountAttributesMessage {
  /**
   * <p>A list of <code>AccountQuota</code> objects. Within this list, each quota has a name,
   *             a count of usage toward the quota maximum, and a maximum value for the quota.</p>
   */
  AccountQuotas?: AccountQuota[];
}

export namespace AccountAttributesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAttributesMessage): any => ({
    ...obj,
  });
}

export interface AddRoleToDBClusterMessage {
  /**
   * <p>The name of the DB cluster to associate the IAM role with.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB
   *             cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be associated with.
   *             For information about supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;
}

export namespace AddRoleToDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddRoleToDBClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 */
export class DBClusterNotFoundFault extends __BaseException {
  readonly name: "DBClusterNotFoundFault" = "DBClusterNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterNotFoundFault.prototype);
  }
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 */
export class DBClusterRoleAlreadyExistsFault extends __BaseException {
  readonly name: "DBClusterRoleAlreadyExistsFault" = "DBClusterRoleAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterRoleAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBClusterRoleAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterRoleAlreadyExistsFault.prototype);
  }
}

/**
 * <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 */
export class DBClusterRoleQuotaExceededFault extends __BaseException {
  readonly name: "DBClusterRoleQuotaExceededFault" = "DBClusterRoleQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterRoleQuotaExceededFault, __BaseException>) {
    super({
      name: "DBClusterRoleQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterRoleQuotaExceededFault.prototype);
  }
}

/**
 * <p>The requested operation can't be performed while the cluster is in this state.</p>
 */
export class InvalidDBClusterStateFault extends __BaseException {
  readonly name: "InvalidDBClusterStateFault" = "InvalidDBClusterStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterStateFault, __BaseException>) {
    super({
      name: "InvalidDBClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterStateFault.prototype);
  }
}

export interface AddRoleToDBInstanceMessage {
  /**
   * <p>The name of the DB instance to associate the IAM role with.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the DB instance, for
   *             example <code>arn:aws:iam::123456789012:role/AccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be associated with.
   *             For information about supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName: string | undefined;
}

export namespace AddRoleToDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddRoleToDBInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 */
export class DBInstanceNotFoundFault extends __BaseException {
  readonly name: "DBInstanceNotFoundFault" = "DBInstanceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceNotFoundFault, __BaseException>) {
    super({
      name: "DBInstanceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceNotFoundFault.prototype);
  }
}

/**
 * <p>The specified <code>RoleArn</code> or <code>FeatureName</code> value is already associated with the DB instance.</p>
 */
export class DBInstanceRoleAlreadyExistsFault extends __BaseException {
  readonly name: "DBInstanceRoleAlreadyExistsFault" = "DBInstanceRoleAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceRoleAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBInstanceRoleAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceRoleAlreadyExistsFault.prototype);
  }
}

/**
 * <p>You can't associate any more Amazon Web Services Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.</p>
 */
export class DBInstanceRoleQuotaExceededFault extends __BaseException {
  readonly name: "DBInstanceRoleQuotaExceededFault" = "DBInstanceRoleQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceRoleQuotaExceededFault, __BaseException>) {
    super({
      name: "DBInstanceRoleQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceRoleQuotaExceededFault.prototype);
  }
}

/**
 * <p>The DB instance isn't in a valid state.</p>
 */
export class InvalidDBInstanceStateFault extends __BaseException {
  readonly name: "InvalidDBInstanceStateFault" = "InvalidDBInstanceStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBInstanceStateFault, __BaseException>) {
    super({
      name: "InvalidDBInstanceStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBInstanceStateFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to add a source identifier to.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The identifier of the event source to be added.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If the source type is a DB instance, a <code>DBInstanceIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB cluster, a <code>DBClusterIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB cluster snapshot, a <code>DBClusterSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is an RDS Proxy, a <code>DBProxyName</code> value must be supplied.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier: string | undefined;
}

export namespace AddSourceIdentifierToSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddSourceIdentifierToSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface AddSourceIdentifierToSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace AddSourceIdentifierToSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddSourceIdentifierToSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The requested source could not be found.</p>
 */
export class SourceNotFoundFault extends __BaseException {
  readonly name: "SourceNotFoundFault" = "SourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceNotFoundFault, __BaseException>) {
    super({
      name: "SourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceNotFoundFault.prototype);
  }
}

/**
 * <p>The subscription name does not exist.</p>
 */
export class SubscriptionNotFoundFault extends __BaseException {
  readonly name: "SubscriptionNotFoundFault" = "SubscriptionNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionNotFoundFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>The Amazon RDS resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *         see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *             Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon RDS resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsToResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 */
export class DBProxyNotFoundFault extends __BaseException {
  readonly name: "DBProxyNotFoundFault" = "DBProxyNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyNotFoundFault, __BaseException>) {
    super({
      name: "DBProxyNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyNotFoundFault.prototype);
  }
}

/**
 * <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 */
export class DBProxyTargetGroupNotFoundFault extends __BaseException {
  readonly name: "DBProxyTargetGroupNotFoundFault" = "DBProxyTargetGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyTargetGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBProxyTargetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyTargetGroupNotFoundFault.prototype);
  }
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 */
export class DBSnapshotNotFoundFault extends __BaseException {
  readonly name: "DBSnapshotNotFoundFault" = "DBSnapshotNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSnapshotNotFoundFault, __BaseException>) {
    super({
      name: "DBSnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSnapshotNotFoundFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * <p>The RDS Amazon Resource Name (ARN) of the resource that the
   *       pending maintenance action applies to. For information about
   *       creating an ARN,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *         Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *         <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>,
   *           <code>hardware-maintenance</code>, <code>ca-certificate-rotation</code>
   *          </p>
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in
   *            request of type <code>immediate</code> can't be undone.</p>
   *         <p>Valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during
   *             the next maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code>
   *             opt-in requests.</p>
   *             </li>
   *          </ul>
   */
  OptInType: string | undefined;
}

export namespace ApplyPendingMaintenanceActionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplyPendingMaintenanceActionMessage): any => ({
    ...obj,
  });
}

export interface ApplyPendingMaintenanceActionResult {
  /**
   * <p>Describes the pending maintenance actions for a resource.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

export namespace ApplyPendingMaintenanceActionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplyPendingMaintenanceActionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource ID was not found.</p>
 */
export class ResourceNotFoundFault extends __BaseException {
  readonly name: "ResourceNotFoundFault" = "ResourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundFault, __BaseException>) {
    super({
      name: "ResourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundFault.prototype);
  }
}

/**
 * <p>The specified CIDR IP range or Amazon EC2 security group is already authorized for
 *             the specified DB security group.</p>
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
 * <p>The DB security group authorization quota has been reached.</p>
 */
export class AuthorizationQuotaExceededFault extends __BaseException {
  readonly name: "AuthorizationQuotaExceededFault" = "AuthorizationQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationQuotaExceededFault, __BaseException>) {
    super({
      name: "AuthorizationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface AuthorizeDBSecurityGroupIngressMessage {
  /**
   * <p>The name of the DB security group to add authorization to.</p>
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>The IP range to authorize.</p>
   */
  CIDRIP?: string;

  /**
   * <p>Name of the EC2 security group to authorize.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code>
   *       or <code>EC2SecurityGroupId</code> must be provided.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>Id of the EC2 security group to authorize.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   */
  EC2SecurityGroupId?: string;

  /**
   * <p>Amazon Web Services account number of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> parameter.
   *         The Amazon Web Services access key ID isn't an acceptable value.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace AuthorizeDBSecurityGroupIngressMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeDBSecurityGroupIngressMessage): any => ({
    ...obj,
  });
}

export interface AuthorizeDBSecurityGroupIngressResult {
  /**
   * <p>Contains the details for an Amazon RDS DB security group.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.</p>
   */
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace AuthorizeDBSecurityGroupIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeDBSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.</p>
 */
export class DBSecurityGroupNotFoundFault extends __BaseException {
  readonly name: "DBSecurityGroupNotFoundFault" = "DBSecurityGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSecurityGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBSecurityGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSecurityGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The state of the DB security group doesn't allow deletion.</p>
 */
export class InvalidDBSecurityGroupStateFault extends __BaseException {
  readonly name: "InvalidDBSecurityGroupStateFault" = "InvalidDBSecurityGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSecurityGroupStateFault, __BaseException>) {
    super({
      name: "InvalidDBSecurityGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSecurityGroupStateFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface BacktrackDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster to be backtracked. This parameter is
   *             stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The timestamp of the time to backtrack the DB cluster to, specified in ISO
   *             8601 format. For more information about ISO 8601, see the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia
   *             page.</a>
   *          </p>
   *         <note>
   *             <p>If the specified time isn't a consistent time for the DB cluster,
   *                 Aurora automatically chooses the nearest possible consistent time for the DB cluster.</p>
   *         </note>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain a valid ISO 8601 timestamp.</p>
   *             </li>
   *             <li>
   *                 <p>Can't contain a timestamp set in the future.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>2017-07-08T18:00Z</code>
   *          </p>
   */
  BacktrackTo: Date | undefined;

  /**
   * <p>A value that indicates whether to force the DB cluster to backtrack when binary logging is
   *             enabled. Otherwise, an error occurs when binary logging is enabled.</p>
   */
  Force?: boolean;

  /**
   * <p>A value that indicates whether to backtrack the DB cluster to the earliest possible
   *             backtrack time when <i>BacktrackTo</i> is set to a timestamp earlier than the earliest
   *             backtrack time. When this parameter is disabled and <i>BacktrackTo</i> is set to a timestamp earlier than the earliest
   *             backtrack time, an error occurs.</p>
   */
  UseEarliestTimeOnPointInTimeUnavailable?: boolean;
}

export namespace BacktrackDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BacktrackDBClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.</p>
 */
export interface DBClusterBacktrack {
  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Contains the backtrack identifier.</p>
   */
  BacktrackIdentifier?: string;

  /**
   * <p>The timestamp of the time to which the DB cluster was backtracked.</p>
   */
  BacktrackTo?: Date;

  /**
   * <p>The timestamp of the time from which the DB cluster was backtracked.</p>
   */
  BacktrackedFrom?: Date;

  /**
   * <p>The timestamp of the time at which the backtrack was requested.</p>
   */
  BacktrackRequestCreationTime?: Date;

  /**
   * <p>The status of the backtrack. This property returns one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>applying</code> - The backtrack is currently being applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>completed</code> - The backtrack has successfully been applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>failed</code> - An error occurred while the backtrack was applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>pending</code> - The backtrack is currently pending application to or rollback from the DB cluster.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBClusterBacktrack {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterBacktrack): any => ({
    ...obj,
  });
}

export interface CancelExportTaskMessage {
  /**
   * <p>The identifier of the snapshot export task to cancel.</p>
   */
  ExportTaskIdentifier: string | undefined;
}

export namespace CancelExportTaskMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelExportTaskMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of a snapshot export to Amazon S3.</p>
 *         <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action.</p>
 */
export interface ExportTask {
  /**
   * <p>A unique identifier for the snapshot export task. This ID isn't an identifier for
   *             the Amazon S3 bucket where the snapshot is exported to.</p>
   */
  ExportTaskIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3.</p>
   */
  SourceArn?: string;

  /**
   * <p>The data exported from the snapshot. Valid values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>database</code> - Export all the data from a specified database.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>database.table</code>
   *                     <i>table-name</i> -
   *                 Export a table of the snapshot. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>database.schema</code>
   *                     <i>schema-name</i> - Export a database schema of the snapshot.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>database.schema.table</code>
   *                     <i>table-name</i> - Export a table of the database schema.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *          </ul>
   */
  ExportOnly?: string[];

  /**
   * <p>The time that the snapshot was created.</p>
   */
  SnapshotTime?: Date;

  /**
   * <p>The time that the snapshot export task started.</p>
   */
  TaskStartTime?: Date;

  /**
   * <p>The time that the snapshot export task completed.</p>
   */
  TaskEndTime?: Date;

  /**
   * <p>The Amazon S3 bucket that the snapshot is exported to.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 bucket prefix that is the file name and path of the exported snapshot.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The name of the IAM role that is used to write to Amazon S3 when exporting a snapshot.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The key identifier of the Amazon Web Services KMS key that is used to encrypt the snapshot when it's exported to
   *             Amazon S3. The KMS key identifier is its key ARN, key ID, alias ARN, or alias name. The IAM role used for the snapshot export
   *             must have encryption and decryption permissions to use this KMS key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The progress status of the export task.</p>
   */
  Status?: string;

  /**
   * <p>The progress of the snapshot export task as a percentage.</p>
   */
  PercentProgress?: number;

  /**
   * <p>The total amount of data exported, in gigabytes.</p>
   */
  TotalExtractedDataInGB?: number;

  /**
   * <p>The reason the export failed, if it failed.</p>
   */
  FailureCause?: string;

  /**
   * <p>A warning about the snapshot export task.</p>
   */
  WarningMessage?: string;
}

export namespace ExportTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTask): any => ({
    ...obj,
  });
}

/**
 * <p>The export task doesn't exist.</p>
 */
export class ExportTaskNotFoundFault extends __BaseException {
  readonly name: "ExportTaskNotFoundFault" = "ExportTaskNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExportTaskNotFoundFault, __BaseException>) {
    super({
      name: "ExportTaskNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExportTaskNotFoundFault.prototype);
  }
}

/**
 * <p>You can't cancel an export task that has completed.</p>
 */
export class InvalidExportTaskStateFault extends __BaseException {
  readonly name: "InvalidExportTaskStateFault" = "InvalidExportTaskStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportTaskStateFault, __BaseException>) {
    super({
      name: "InvalidExportTaskStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportTaskStateFault.prototype);
  }
}

export interface CopyDBClusterParameterGroupMessage {
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group.
   *             For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>The identifier for the copied DB cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-param-group1</code>
   *          </p>
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>A description for the copied DB cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace CopyDBClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface CopyDBClusterParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group.</p>
   *         <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.</p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CopyDBClusterParameterGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyDBClusterParameterGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>A DB parameter group with the same name exists.</p>
 */
export class DBParameterGroupAlreadyExistsFault extends __BaseException {
  readonly name: "DBParameterGroupAlreadyExistsFault" = "DBParameterGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 */
export class DBParameterGroupNotFoundFault extends __BaseException {
  readonly name: "DBParameterGroupNotFoundFault" = "DBParameterGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBParameterGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB parameter
 *             groups.</p>
 */
export class DBParameterGroupQuotaExceededFault extends __BaseException {
  readonly name: "DBParameterGroupQuotaExceededFault" = "DBParameterGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBParameterGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface CopyDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive.</p>
   *         <p>You can't copy an encrypted, shared DB cluster snapshot from one Amazon Web Services Region to another.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid system snapshot in the "available" state.</p>
   *             </li>
   *             <li>
   *                 <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB snapshot identifier.</p>
   *             </li>
   *             <li>
   *                 <p>If the source snapshot is in a different Amazon Web Services Region than the copy,
   *               specify a valid DB cluster snapshot ARN. For more information, go to
   *               <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html#USER_CopySnapshot.AcrossRegions">
   *                   Copying Snapshots Across Amazon Web Services Regions</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-snapshot1</code>
   *          </p>
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-snapshot2</code>
   *          </p>
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB cluster snapshot.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS key.</p>
   *         <p>If you copy an encrypted DB cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS key.
   *             If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.</p>
   *         <p>If you copy an encrypted DB cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for <code>KmsKeyId</code>.</p>
   *         <p>To copy an encrypted DB cluster snapshot to another Amazon Web Services Region, you must set <code>KmsKeyId</code> to the Amazon Web Services KMS key identifier
   *             you want to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services
   *             Region that they are created in, and you can't use KMS keys from one Amazon Web Services Region
   *             in another Amazon Web Services Region.</p>
   *         <p>If you copy an unencrypted DB cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter,
   *             an error is returned.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> API action in the Amazon Web Services Region that contains the
   *             source DB cluster snapshot to copy. The <code>PreSignedUrl</code> parameter must be used when copying an encrypted DB cluster snapshot from another Amazon Web Services Region.
   *             Don't specify <code>PreSignedUrl</code> when you are copying an encrypted DB cluster snapshot in the same Amazon Web Services Region.</p>
   *         <p>The pre-signed URL must be a valid request for the <code>CopyDBClusterSnapshot</code> API action that can be
   *             executed in the source Amazon Web Services Region that contains the encrypted DB cluster snapshot to be copied.
   *             The pre-signed URL request must contain the following parameter values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>KmsKeyId</code> - The Amazon Web Services KMS key identifier for the KMS key to use to encrypt the copy of the DB
   *                 cluster snapshot in the destination Amazon Web Services Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code>
   *                 action that is called in the destination Amazon Web Services Region, and the action contained in the pre-signed URL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DestinationRegion</code> - The name of the Amazon Web Services Region that the DB cluster snapshot is to be created in.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster
   *                 snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example,
   *                 if you are copying an encrypted DB cluster snapshot from the us-west-2 Amazon Web Services Region, then your <code>SourceDBClusterSnapshotIdentifier</code>
   *                 looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p>
   *             </li>
   *          </ul>
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *         <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                 request for the operation that can be executed in the source Amazon Web Services Region.</p>
   *         </note>
   */
  PreSignedUrl?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot.
   *             By default, tags are not copied.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace CopyDBClusterSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyDBClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface CopyDBClusterSnapshotResult {
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CopyDBClusterSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyDBClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>The user already has a DB cluster snapshot with the given identifier.</p>
 */
export class DBClusterSnapshotAlreadyExistsFault extends __BaseException {
  readonly name: "DBClusterSnapshotAlreadyExistsFault" = "DBClusterSnapshotAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterSnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBClusterSnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterSnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 */
export class DBClusterSnapshotNotFoundFault extends __BaseException {
  readonly name: "DBClusterSnapshotNotFoundFault" = "DBClusterSnapshotNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterSnapshotNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterSnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterSnapshotNotFoundFault.prototype);
  }
}

/**
 * <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 */
export class InvalidDBClusterSnapshotStateFault extends __BaseException {
  readonly name: "InvalidDBClusterSnapshotStateFault" = "InvalidDBClusterSnapshotStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidDBClusterSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterSnapshotStateFault.prototype);
  }
}

/**
 * <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
  readonly name: "KMSKeyNotAccessibleFault" = "KMSKeyNotAccessibleFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSKeyNotAccessibleFault, __BaseException>) {
    super({
      name: "KMSKeyNotAccessibleFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSKeyNotAccessibleFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
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
export interface CopyDBParameterGroupMessage {
  /**
   * <p>The identifier or ARN for the source DB parameter group.
   *         For information about
   *         creating an ARN,
   *         see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *             Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid DB parameter group.</p>
   *             </li>
   *          </ul>
   */
  SourceDBParameterGroupIdentifier: string | undefined;

  /**
   * <p>The identifier for the copied DB parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-db-parameter-group</code>
   *          </p>
   */
  TargetDBParameterGroupIdentifier: string | undefined;

  /**
   * <p>A description for the copied DB parameter group.</p>
   */
  TargetDBParameterGroupDescription: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace CopyDBParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyDBParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface CopyDBParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB parameter group.</p>
   *         <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.</p>
   */
  DBParameterGroup?: DBParameterGroup;
}

export namespace CopyDBParameterGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyDBParameterGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CopyDBSnapshotMessage {
  /**
   * <p>The identifier for the source DB snapshot.</p>
   *         <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB
   *             snapshot identifier. For example, you might specify
   *                 <code>rds:mysql-instance1-snapshot-20130805</code>.</p>
   *         <p>If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid DB
   *             snapshot ARN. For example, you might specify
   *                 <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code>.</p>
   *         <p>If you are copying from a shared manual DB snapshot,
   *           this parameter must be the Amazon Resource Name (ARN) of the shared DB snapshot.</p>
   *         <p>If you are copying an encrypted snapshot
   *             this parameter must be in the ARN format for the source Amazon Web Services Region,
   *             and must match the <code>SourceDBSnapshotIdentifier</code> in the <code>PreSignedUrl</code> parameter.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid system snapshot in the "available" state.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>rds:mydb-2012-04-02-00-01</code>
   *          </p>
   *         <p>Example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code>
   *          </p>
   */
  SourceDBSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier for the copy of the snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-db-snapshot</code>
   *          </p>
   */
  TargetDBSnapshotIdentifier: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB snapshot.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>If you copy an encrypted DB snapshot from your Amazon Web Services account,
   *             you can specify a value for this parameter to encrypt the copy with a new KMS key.
   *             If you don't specify a value for this parameter,
   *             then the copy of the DB snapshot is encrypted with the same Amazon Web Services KMS key as the source DB snapshot.</p>
   *         <p>If you copy an encrypted DB snapshot that is shared from another Amazon Web Services account,
   *             then you must specify a value for this parameter.</p>
   *         <p>If you specify this parameter when you copy an unencrypted snapshot,
   *             the copy is encrypted.</p>
   *         <p>If you copy an encrypted snapshot to a different Amazon Web Services Region, then you must specify
   *             an Amazon Web Services KMS key identifier for the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services Region
   *             that they are created in, and you can't use KMS keys from one Amazon Web Services Region in another
   *             Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>A value that indicates whether to copy all tags from the source DB snapshot to the target DB snapshot. By default, tags are not copied.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the
   *                 <code>CopyDBSnapshot</code> API action in the source Amazon Web Services Region that contains the
   *             source DB snapshot to copy.</p>
   *         <p>You must specify this parameter when you copy an encrypted DB snapshot from another
   *             Amazon Web Services Region by using the Amazon RDS API. Don't specify <code>PreSignedUrl</code> when you are
   *             copying an encrypted DB snapshot in the same Amazon Web Services Region.</p>
   *         <p>The presigned URL must be a valid request for the <code>CopyDBSnapshot</code> API action
   *             that can be executed in the source Amazon Web Services Region that contains the encrypted DB snapshot to be copied.
   *             The presigned URL request must contain the following parameter values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DestinationRegion</code> - The Amazon Web Services Region that the encrypted DB snapshot is copied to.
   *                     This Amazon Web Services Region is the same one where the <code>CopyDBSnapshot</code> action is called that contains this presigned URL.</p>
   *                 <p>For example, if you copy an encrypted DB snapshot from the us-west-2 Amazon Web Services Region
   *                     to the us-east-1 Amazon Web Services Region, then you call the <code>CopyDBSnapshot</code> action in
   *                     the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the
   *                         <code>CopyDBSnapshot</code> action in the us-west-2 Amazon Web Services Region. For this
   *                     example, the <code>DestinationRegion</code> in the presigned URL must be set to
   *                     the us-east-1 Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KmsKeyId</code> - The Amazon Web Services KMS key identifier for the KMS key to use to encrypt the copy of the DB snapshot in the destination Amazon Web Services Region.
   *                     This is the same identifier for both the <code>CopyDBSnapshot</code> action that is called in the destination Amazon Web Services Region,
   *                     and the action contained in the presigned URL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SourceDBSnapshotIdentifier</code> - The DB snapshot identifier for the encrypted snapshot to be copied.
   *                     This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region.
   *                     For example, if you are copying an encrypted DB snapshot from the us-west-2 Amazon Web Services Region, then your <code>SourceDBSnapshotIdentifier</code> looks like
   *                     the following example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20161115</code>.</p>
   *             </li>
   *          </ul>
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p>
   *         <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                request for the operation that can be executed in the source Amazon Web Services Region.</p>
   *         </note>
   */
  PreSignedUrl?: string;

  /**
   * <p>The name of an option group to associate with the copy of the snapshot.</p>
   *         <p>Specify this option if you are copying a snapshot from one Amazon Web Services Region to another,
   *             and your DB instance uses a nondefault option group.
   *             If your source DB instance uses Transparent Data Encryption for Oracle or Microsoft SQL Server,
   *             you must specify this option when copying across Amazon Web Services Regions.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.Options">Option group considerations</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The external custom Availability Zone (CAZ) identifier for the target CAZ.</p>
   *         <p>Example: <code>rds-caz-aiqhTgQv</code>.</p>
   */
  TargetCustomAvailabilityZone?: string;
}

export namespace CopyDBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyDBSnapshotMessage): any => ({
    ...obj,
  });
}

export interface CopyDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.</p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace CopyDBSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyDBSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>CustomAvailabilityZoneId</code> doesn't refer to an existing custom
 *             Availability Zone identifier.</p>
 */
export class CustomAvailabilityZoneNotFoundFault extends __BaseException {
  readonly name: "CustomAvailabilityZoneNotFoundFault" = "CustomAvailabilityZoneNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomAvailabilityZoneNotFoundFault, __BaseException>) {
    super({
      name: "CustomAvailabilityZoneNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomAvailabilityZoneNotFoundFault.prototype);
  }
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> is already used by an existing snapshot.</p>
 */
export class DBSnapshotAlreadyExistsFault extends __BaseException {
  readonly name: "DBSnapshotAlreadyExistsFault" = "DBSnapshotAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBSnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The state of the DB snapshot doesn't allow deletion.</p>
 */
export class InvalidDBSnapshotStateFault extends __BaseException {
  readonly name: "InvalidDBSnapshotStateFault" = "InvalidDBSnapshotStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidDBSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSnapshotStateFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface CopyOptionGroupMessage {
  /**
   * <p>The identifier for the source option group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid option group.</p>
   *             </li>
   *          </ul>
   */
  SourceOptionGroupIdentifier: string | undefined;

  /**
   * <p>The identifier for the copied option group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-option-group</code>
   *          </p>
   */
  TargetOptionGroupIdentifier: string | undefined;

  /**
   * <p>The description for the copied option group.</p>
   */
  TargetOptionGroupDescription: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace CopyOptionGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyOptionGroupMessage): any => ({
    ...obj,
  });
}

export interface CopyOptionGroupResult {
  /**
   * <p></p>
   */
  OptionGroup?: OptionGroup;
}

export namespace CopyOptionGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyOptionGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>The option group you are trying to create already exists.</p>
 */
export class OptionGroupAlreadyExistsFault extends __BaseException {
  readonly name: "OptionGroupAlreadyExistsFault" = "OptionGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptionGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "OptionGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptionGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The specified option group could not be found.</p>
 */
export class OptionGroupNotFoundFault extends __BaseException {
  readonly name: "OptionGroupNotFoundFault" = "OptionGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptionGroupNotFoundFault, __BaseException>) {
    super({
      name: "OptionGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptionGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The quota of 20 option groups was exceeded for this Amazon Web Services account.</p>
 */
export class OptionGroupQuotaExceededFault extends __BaseException {
  readonly name: "OptionGroupQuotaExceededFault" = "OptionGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptionGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "OptionGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptionGroupQuotaExceededFault.prototype);
  }
}

export interface CreateCustomDBEngineVersionMessage {
  /**
   * <p>The database engine to use for your custom engine version (CEV). The only supported value is
   *             <code>custom-oracle-ee</code>.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The name of your CEV. The name format is <code>19.<i>customized_string</i>
   *             </code>. For example,
   *             a valid name is <code>19.my_cev1</code>. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS.
   *             The combination of <code>Engine</code> and <code>EngineVersion</code> is unique per customer per Region.</p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid
   *             bucket name is <code>my-custom-installation-files</code>.</p>
   */
  DatabaseInstallationFilesS3BucketName: string | undefined;

  /**
   * <p>The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid
   *             bucket name is <code>123456789012/cev1</code>. If this setting isn't specified, no prefix is assumed.</p>
   */
  DatabaseInstallationFilesS3Prefix?: string;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted CEV. A symmetric KMS key is required for
   *             RDS Custom, but optional for Amazon RDS.</p>
   *         <p>If you have an existing symmetric KMS key in your account, you can use it with RDS Custom.
   *             No further action is necessary. If you don't already have a symmetric KMS key in your account,
   *             follow the instructions in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk">
   *                 Creating symmetric KMS keys</a> in the <i>Amazon Web Services Key Management Service
   *                     Developer Guide</i>.</p>
   *         <p>You can choose the same symmetric key when you create a CEV and a DB instance, or choose different keys.</p>
   */
  KMSKeyId: string | undefined;

  /**
   * <p>An optional description of your CEV.</p>
   */
  Description?: string;

  /**
   * <p>The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3.
   *             Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which
   *             they are listed.</p>
   *         <p>The following JSON fields are valid:</p>
   *         <dl>
   *             <dt>MediaImportTemplateVersion</dt>
   *             <dd>
   *                     <p>Version of the CEV manifest. The date is in the format <code>YYYY-MM-DD</code>.</p>
   *                 </dd>
   *             <dt>databaseInstallationFileNames</dt>
   *             <dd>
   *                     <p>Ordered list of installation files for the CEV.</p>
   *                 </dd>
   *             <dt>opatchFileNames</dt>
   *             <dd>
   *                     <p>Ordered list of OPatch installers used for the Oracle DB engine.</p>
   *                 </dd>
   *             <dt>psuRuPatchFileNames</dt>
   *             <dd>
   *                     <p>The PSU and RU patches for this CEV.</p>
   *                 </dd>
   *             <dt>OtherPatchFileNames</dt>
   *             <dd>
   *                     <p>The patches that are not in the list of PSU and RU patches.
   *                     Amazon RDS applies these patches after applying the PSU and RU patches.</p>
   *                 </dd>
   *          </dl>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest">
   *             Creating the CEV manifest</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Manifest: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace CreateCustomDBEngineVersionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomDBEngineVersionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>A CEV with the specified name already exists.</p>
 */
export class CustomDBEngineVersionAlreadyExistsFault extends __BaseException {
  readonly name: "CustomDBEngineVersionAlreadyExistsFault" = "CustomDBEngineVersionAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomDBEngineVersionAlreadyExistsFault, __BaseException>) {
    super({
      name: "CustomDBEngineVersionAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomDBEngineVersionAlreadyExistsFault.prototype);
  }
}

/**
 * <p>You have exceeded your CEV quota.</p>
 */
export class CustomDBEngineVersionQuotaExceededFault extends __BaseException {
  readonly name: "CustomDBEngineVersionQuotaExceededFault" = "CustomDBEngineVersionQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomDBEngineVersionQuotaExceededFault, __BaseException>) {
    super({
      name: "CustomDBEngineVersionQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomDBEngineVersionQuotaExceededFault.prototype);
  }
}

/**
 * <p>This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.</p>
 */
export interface DBEngineVersion {
  /**
   * <p>The name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of the DB parameter group family for the database engine.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>The description of the database engine.</p>
   */
  DBEngineDescription?: string;

  /**
   * <p>The description of the database engine version.</p>
   */
  DBEngineVersionDescription?: string;

  /**
   * <p>The default character set for new instances of this engine version,
   *             if the <code>CharacterSetName</code> parameter of the CreateDBInstance API
   *             isn't specified.</p>
   */
  DefaultCharacterSet?: CharacterSet;

  /**
   * <p>A list of the character sets supported by this engine for the <code>CharacterSetName</code> parameter of the <code>CreateDBInstance</code> operation.</p>
   */
  SupportedCharacterSets?: CharacterSet[];

  /**
   * <p>A list of the character sets supported by the Oracle DB engine for the <code>NcharCharacterSetName</code> parameter of the <code>CreateDBInstance</code> operation.</p>
   */
  SupportedNcharCharacterSets?: CharacterSet[];

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: UpgradeTarget[];

  /**
   * <p>A list of the time zones supported by this engine for the
   *             <code>Timezone</code> parameter of the <code>CreateDBInstance</code> action.</p>
   */
  SupportedTimezones?: Timezone[];

  /**
   * <p>The types of logs that the database engine has available for export to CloudWatch Logs.</p>
   */
  ExportableLogTypes?: string[];

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * <p>Indicates whether the database engine version supports read replicas.</p>
   */
  SupportsReadReplica?: boolean;

  /**
   * <p>A list of the supported DB engine modes.</p>
   */
  SupportedEngineModes?: string[];

  /**
   * <p>A list of features supported by the DB engine.</p>
   *         <p>The supported features vary by DB engine and DB engine version.</p>
   *         <p>To determine the supported features for a specific DB engine and DB engine version using the CLI,
   *         use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine <engine_name> --engine-version <engine_version></code>
   *          </p>
   *         <p>For example, to determine the supported features for RDS for PostgreSQL version 13.3 using the CLI,
   *         use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine postgres --engine-version 13.3</code>
   *          </p>
   *         <p>The supported features are listed under <code>SupportedFeatureNames</code> in the output.</p>
   */
  SupportedFeatureNames?: string[];

  /**
   * <p>The status of the DB engine version, either <code>available</code> or <code>deprecated</code>.</p>
   */
  Status?: string;

  /**
   * <p>A value that indicates whether you can use Aurora parallel query with a specific DB engine version.</p>
   */
  SupportsParallelQuery?: boolean;

  /**
   * <p>A value that indicates whether you can use Aurora global databases with a specific DB engine version.</p>
   */
  SupportsGlobalDatabases?: boolean;

  /**
   * <p>The major engine version of the CEV.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>The name of the Amazon S3 bucket that contains your database installation files.</p>
   */
  DatabaseInstallationFilesS3BucketName?: string;

  /**
   * <p>The Amazon S3 directory that contains the database installation files.
   *             If not specified, then no prefix is assumed.</p>
   */
  DatabaseInstallationFilesS3Prefix?: string;

  /**
   * <p>The ARN of the custom engine version.</p>
   */
  DBEngineVersionArn?: string;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted CEV. This parameter is required for
   *             RDS Custom, but optional for Amazon RDS.</p>
   */
  KMSKeyId?: string;

  /**
   * <p>The creation time of the DB engine version.</p>
   */
  CreateTime?: Date;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  TagList?: Tag[];

  /**
   * <p>A value that indicates whether the engine version supports Babelfish for Aurora PostgreSQL.</p>
   */
  SupportsBabelfish?: boolean;
}

export namespace DBEngineVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBEngineVersion): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateDBClusterMessage {
  /**
   * <p>A list of Availability Zones (AZs) where DB instances in the DB cluster can be created.</p>
   *         <p>For information on Amazon Web Services Regions and Availability Zones, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html">Choosing the Regions and
   *               Availability Zones</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The number of days for which automated backups are retained.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified CharacterSet.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  CharacterSetName?: string;

  /**
   * <p>The name for your database of up to 64 alphanumeric characters. If you do not
   *             provide a name, Amazon RDS doesn't create a database in the DB cluster you are
   *             creating.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DatabaseName?: string;

  /**
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate
   *             with this DB cluster. If you do not specify a value, then
   *           the default DB cluster parameter group for the specified DB engine and version is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p>
   *         <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *         <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *         <p>To list all of the available engine versions for MySQL 5.6-compatible Aurora, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for Aurora PostgreSQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for RDS for MySQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for RDS for PostgreSQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html">MySQL on Amazon RDS Versions</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html">Amazon Aurora PostgreSQL releases and engine versions</a> in the
   *            <i>Amazon Aurora User Guide</i>.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">MySQL on Amazon RDS Versions</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts">Amazon RDS for PostgreSQL versions and extensions</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   *         <p>
   *             <b>RDS for MySQL and Aurora MySQL</b>
   *          </p>
   *         <p>Default: <code>3306</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>
   *             <b>RDS for PostgreSQL and Aurora PostgreSQL</b>
   *          </p>
   *         <p>Default: <code>5432</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  MasterUsername?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group.</p>
   *         <p>DB clusters are associated with a default option group that can't be modified.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled
   *         using the <code>BackupRetentionPeriod</code> parameter.</p>
   *         <p>The default is a 30-minute window selected at random from an
   *         8-hour block of time for each Amazon Web Services Region.
   *         To view the time blocks available, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow">
   *             Backup window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB
   *             cluster is created as a read replica.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Tags to assign to the DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  Tags?: Tag[];

  /**
   * <p>A value that indicates whether the DB cluster is encrypted.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB cluster.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *                  To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>When a KMS key isn't specified in <code>KmsKeyId</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted
   *                     source, then Amazon RDS will use the KMS key used to encrypt the
   *                     source. Otherwise, Amazon RDS will use your default KMS key.</p>
   *             </li>
   *             <li>
   *                 <p>If the <code>StorageEncrypted</code> parameter is enabled and
   *                         <code>ReplicationSourceIdentifier</code> isn't specified, then Amazon RDS
   *                     will use your default KMS key.</p>
   *             </li>
   *          </ul>
   *         <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   *         <p>If you create a read replica of an encrypted DB cluster in another Amazon Web Services Region, you
   *             must set <code>KmsKeyId</code> to a KMS key identifier that is valid in the destination Amazon Web Services
   *             Region. This KMS key is used to encrypt the read replica in that Amazon Web Services Region.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A URL that contains a Signature Version 4 signed request for
   *             the <code>CreateDBCluster</code> action to be called in the source Amazon Web Services Region where the DB cluster is replicated from.
   *             Specify <code>PreSignedUrl</code> only when you are performing cross-Region replication from an encrypted DB cluster.</p>
   *         <p>The pre-signed URL must be a valid request for the <code>CreateDBCluster</code> API action
   *             that can be executed in the source Amazon Web Services Region that contains the encrypted DB cluster to be copied.</p>
   *         <p>The pre-signed URL request must contain the following parameter values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>KmsKeyId</code> - The Amazon Web Services KMS key identifier for the KMS key to use to encrypt the copy of
   *                 the DB cluster in the destination Amazon Web Services Region. This should refer to the same KMS key for both the <code>CreateDBCluster</code>
   *                 action that is called in the destination Amazon Web Services Region, and the action contained in the pre-signed URL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DestinationRegion</code> - The name of the Amazon Web Services Region that Aurora read replica will
   *                     be created in.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ReplicationSourceIdentifier</code> - The DB cluster identifier for the encrypted DB cluster to be copied.
   *                 This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an
   *                 encrypted DB cluster from the us-west-2 Amazon Web Services Region, then your <code>ReplicationSourceIdentifier</code> would look like
   *                 Example: <code>arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1</code>.</p>
   *             </li>
   *          </ul>
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *         <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                 request for the operation that can be executed in the source Amazon Web Services Region.</p>
   *         </note>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora MySQL DB clusters only</p>
   */
  BacktrackWindow?: number;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used.</p>
   *         <p>
   *             <b>RDS for MySQL</b>
   *          </p>
   *         <p>Possible values are <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>RDS for PostgreSQL</b>
   *          </p>
   *         <p>Possible values are <code>postgresql</code> and <code>upgrade</code>.</p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *         <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *         <p>Possible value is <code>postgresql</code>.</p>
   *         <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   *         <p>The <code>parallelquery</code> engine mode isn't required for Aurora MySQL version 1.23 and higher 1.x versions,
   *             and version 2.09 and higher 2.x versions.</p>
   *         <p>The <code>global</code> engine mode isn't required for Aurora MySQL version 1.22 and higher 1.x versions,
   *             and <code>global</code> engine mode isn't required for any 2.x versions.</p>
   *         <p>The <code>multimaster</code> engine mode only applies for DB clusters created with Aurora MySQL version 5.6.10a.</p>
   *         <p>For Aurora PostgreSQL, the <code>global</code> engine mode isn't required, and both the <code>parallelquery</code>
   *             and the <code>multimaster</code> engine modes currently aren't supported.</p>
   *         <p>Limitations and requirements apply to some DB engine modes. For more information, see the
   *             following sections in the <i>Amazon Aurora User Guide</i>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations">
   *                         Limitations of Aurora Serverless v1</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-parallel-query.html#aurora-mysql-parallel-query-limitations">
   *                         Limitations of Parallel Query</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations">
   *                         Limitations of Aurora Global Databases</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html#aurora-multi-master-limitations">
   *                         Limitations of Multi-Master Clusters</a>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EngineMode?: string;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The global cluster ID of an Aurora cluster that becomes the primary cluster
   *             in the new global database cluster.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint
   *             is disabled.</p>
   *         <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *             SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database
   *             from inside the RDS console with the query editor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless v1</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EnableHttpEndpoint?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The Active Directory directory ID to create the DB cluster in.</p>
   *         <p>For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos authentication</a>
   *             in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an
   *       Aurora global database (<a>GlobalCluster</a>). By default, write operations are not allowed on Aurora DB clusters that
   *       are secondary clusters in an Aurora global database.</p>
   *         <p>You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter
   *       enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to
   *       this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the
   *         primary is demoted by the <a>FailoverGlobalCluster</a> API operation, but it does nothing until then.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EnableGlobalWriteForwarding?: boolean;

  /**
   * <p>The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge.
   *             Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.</p>
   *         <p>For the full list of DB instance classes and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB instance class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  DBClusterInstanceClass?: string;

  /**
   * <p>The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.</p>
   *         <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *         <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *         <p>Valid values: <code>io1</code>
   *          </p>
   *         <p>When specified, a value for the <code>Iops</code> parameter is required.</p>
   *         <p>Default: <code>io1</code>
   *          </p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  StorageType?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated
   *             for each DB instance in the Multi-AZ DB cluster.</p>
   *         <p>For information about valid <code>Iops</code> values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS storage to improve performance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *         <p>Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB cluster.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  Iops?: number;

  /**
   * <p>A value that indicates whether the DB cluster is publicly accessible.</p>
   *         <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint
   *             resolves to the private IP address from within the DB cluster's virtual private cloud
   *             (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access
   *             to the DB cluster is ultimately controlled by the security group it uses. That public
   *             access isn't permitted if the security group assigned to the DB cluster doesn't permit
   *             it.</p>
   *         <p>When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.</p>
   *         <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p>
   *         <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *         <ul>
   *             <li>
   *                 <p>If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                 <p>If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *         <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *         <ul>
   *             <li>
   *                 <p>If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                 <p>If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.
   *             By default, minor engine upgrades are applied automatically.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off
   *             collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p>
   *         <p>If <code>MonitoringRoleArn</code> is specified, also set <code>MonitoringInterval</code>
   *             to a value other than 0.</p>
   *         <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
   *             An example is <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting
   *                 up and enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0, supply a <code>MonitoringRoleArn</code> value.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether to turn on Performance Insights for the DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">
   *             Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
}

export namespace CreateDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBClusterMessage): any => ({
    ...obj,
  });
}

export interface CreateDBClusterResult {
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
  DBCluster?: DBCluster;
}

export namespace CreateDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>The user already has a DB cluster with the given identifier.</p>
 */
export class DBClusterAlreadyExistsFault extends __BaseException {
  readonly name: "DBClusterAlreadyExistsFault" = "DBClusterAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterAlreadyExistsFault.prototype);
  }
}

/**
 * <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB
 *             cluster parameter group.</p>
 */
export class DBClusterParameterGroupNotFoundFault extends __BaseException {
  readonly name: "DBClusterParameterGroupNotFoundFault" = "DBClusterParameterGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterParameterGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The user attempted to create a new DB cluster and the user has already reached the
 *             maximum allowed DB cluster quota.</p>
 */
export class DBClusterQuotaExceededFault extends __BaseException {
  readonly name: "DBClusterQuotaExceededFault" = "DBClusterQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterQuotaExceededFault, __BaseException>) {
    super({
      name: "DBClusterQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterQuotaExceededFault.prototype);
  }
}

/**
 * <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 */
export class DBSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
  readonly name: "DBSubnetGroupDoesNotCoverEnoughAZs" = "DBSubnetGroupDoesNotCoverEnoughAZs";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupDoesNotCoverEnoughAZs, __BaseException>) {
    super({
      name: "DBSubnetGroupDoesNotCoverEnoughAZs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupDoesNotCoverEnoughAZs.prototype);
  }
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.</p>
 */
export class DBSubnetGroupNotFoundFault extends __BaseException {
  readonly name: "DBSubnetGroupNotFoundFault" = "DBSubnetGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBSubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupNotFoundFault.prototype);
  }
}

/**
 * <p>
 *             <code>Domain</code> doesn't refer to an existing Active Directory domain.</p>
 */
export class DomainNotFoundFault extends __BaseException {
  readonly name: "DomainNotFoundFault" = "DomainNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainNotFoundFault, __BaseException>) {
    super({
      name: "DomainNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainNotFoundFault.prototype);
  }
}

/**
 * <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 */
export class GlobalClusterNotFoundFault extends __BaseException {
  readonly name: "GlobalClusterNotFoundFault" = "GlobalClusterNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalClusterNotFoundFault, __BaseException>) {
    super({
      name: "GlobalClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalClusterNotFoundFault.prototype);
  }
}

/**
 * <p>There is insufficient storage available for the current action. You might be able to
 *             resolve this error by updating your subnet group to use different Availability Zones
 *             that have more storage available.</p>
 */
export class InsufficientStorageClusterCapacityFault extends __BaseException {
  readonly name: "InsufficientStorageClusterCapacityFault" = "InsufficientStorageClusterCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientStorageClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientStorageClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientStorageClusterCapacityFault.prototype);
  }
}

/**
 * <p>The DB subnet group cannot be deleted because it's in use.</p>
 */
export class InvalidDBSubnetGroupStateFault extends __BaseException {
  readonly name: "InvalidDBSubnetGroupStateFault" = "InvalidDBSubnetGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSubnetGroupStateFault, __BaseException>) {
    super({
      name: "InvalidDBSubnetGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSubnetGroupStateFault.prototype);
  }
}

/**
 * <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 */
export class InvalidGlobalClusterStateFault extends __BaseException {
  readonly name: "InvalidGlobalClusterStateFault" = "InvalidGlobalClusterStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGlobalClusterStateFault, __BaseException>) {
    super({
      name: "InvalidGlobalClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGlobalClusterStateFault.prototype);
  }
}

/**
 * <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
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
 * <p>The DB subnet group doesn't cover all Availability Zones after it's
 *             created because of users' change.</p>
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

export interface CreateDBClusterEndpointMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier to use for the new endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint, one of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType: string | undefined;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *             All other eligible instances are reachable through the custom endpoint.
   *             This parameter is relevant only if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>The tags to be assigned to the Amazon RDS resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterEndpointMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBClusterEndpointMessage): any => ({
    ...obj,
  });
}

/**
 * <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster.
 *       This data type is used as a response element in the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>CreateDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBClusterEndpoints</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ModifyDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DeleteDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>For the data structure that represents Amazon RDS DB instance endpoints,
 *         see <code>Endpoint</code>.</p>
 */
export interface DBClusterEndpoint {
  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   */
  DBClusterEndpointResourceIdentifier?: string;

  /**
   * <p>The DNS address of the endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that can't be used for a certain kind of cluster,
   *      such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *        <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

export namespace DBClusterEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must not match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This value is stored as a lowercase string.</p>
   *         </note>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster
   *           parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.</p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *         <p>Example: <code>aurora5.6</code>, <code>aurora-mysql5.7</code>, <code>aurora-mysql8.0</code>
   *          </p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *         <p>Example: <code>aurora-postgresql9.6</code>
   *          </p>
   *         <p>
   *             <b>RDS for MySQL</b>
   *          </p>
   *         <p>Example: <code>mysql8.0</code>
   *          </p>
   *         <p>
   *             <b>RDS for PostgreSQL</b>
   *          </p>
   *         <p>Example: <code>postgres12</code>
   *          </p>
   *         <p>To list all of the available parameter group families for a DB engine, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine></code>
   *          </p>
   *         <p>For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql</code>
   *          </p>
   *         <note>
   *             <p>The output contains duplicates.</p>
   *         </note>
   *         <p>The following are the valid DB engine values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>Tags to assign to the DB cluster parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateDBClusterParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group.</p>
   *         <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.</p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CreateDBClusterParameterGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBClusterParameterGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1-snapshot1</code>
   *          </p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB cluster to create a snapshot for. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the DB cluster snapshot.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface CreateDBClusterSnapshotResult {
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CreateDBClusterSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateDBInstanceMessage {
  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain 1 to 64 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).</p>
   *             </li>
   *             <li>
   *                 <p>Can't be a word reserved by the specified database engine</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain 1 to 64 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).</p>
   *             </li>
   *             <li>
   *                 <p>Can't be a word reserved by the specified database engine</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, a database named <code>postgres</code>
   *           is created in the DB instance.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain 1 to 63 letters, numbers, or underscores.</p>
   *             </li>
   *             <li>
   *                 <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).</p>
   *             </li>
   *             <li>
   *                 <p>Can't be a word reserved by the specified database engine</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>The Oracle System ID (SID) of the created DB instance.
   *           If you specify <code>null</code>, the default value <code>ORCL</code> is used.
   *           You can't specify the string NULL, or any other reserved word, for <code>DBName</code>.</p>
   *         <p>Default: <code>ORCL</code>
   *          </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can't be longer than 8 characters</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Amazon RDS Custom for Oracle</b>
   *          </p>
   *         <p>The Oracle System ID (SID) of the created RDS Custom DB instance.
   *           If you don't specify a value, the default value is <code>ORCL</code>.</p>
   *         <p>Default: <code>ORCL</code>
   *          </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>It must contain 1 to 8 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                 <p>It must contain a letter.</p>
   *             </li>
   *             <li>
   *                 <p>It can't be a word reserved by the database engine.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Amazon RDS Custom for SQL Server</b>
   *          </p>
   *         <p>Not applicable. Must be null.</p>
   *         <p>
   *             <b>SQL Server</b>
   *          </p>
   *         <p>Not applicable. Must be null.</p>
   *         <p>
   *             <b>Amazon Aurora MySQL</b>
   *          </p>
   *         <p>The name of the database to create when the primary DB instance of the Aurora MySQL DB cluster is
   *           created. If this parameter isn't specified for an Aurora MySQL DB cluster, no database is created
   *           in the DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>It must contain 1 to 64 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                 <p>It can't be a word reserved by the database engine.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Amazon Aurora PostgreSQL</b>
   *          </p>
   *         <p>The name of the database to create when the primary DB instance of the Aurora PostgreSQL DB cluster is
   *           created. If this parameter isn't specified for an Aurora PostgreSQL DB cluster,
   *           a database named <code>postgres</code> is created in the DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>It must contain 1 to 63 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                 <p>It must begin with a letter or an underscore.
   *                   Subsequent characters can be letters, underscores, or digits
   *                   (0 to 9).</p>
   *             </li>
   *             <li>
   *                 <p>It can't be a word reserved by the
   *                   database engine.</p>
   *             </li>
   *          </ul>
   */
  DBName?: string;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The amount of storage in gibibytes (GiB) to allocate for the DB instance.</p>
   *         <p>Type: Integer</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. Aurora cluster volumes automatically grow as the amount of data in your
   *           database increases, though you are only charged for the space that you use in an Aurora cluster volume.</p>
   *         <p>
   *             <b>Amazon RDS Custom</b>
   *          </p>
   *         <p>Constraints to the amount of storage for each storage type are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>General Purpose (SSD) storage (gp2): Must be an integer from 40 to 65536 for RDS Custom for Oracle,
   *               16384 for RDS Custom for SQL Server.</p>
   *             </li>
   *             <li>
   *                 <p>Provisioned IOPS storage (io1): Must be an integer from 40 to 65536 for RDS Custom for Oracle,
   *               16384 for RDS Custom for SQL Server.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>Constraints to the amount of storage for each storage type are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p>
   *             </li>
   *             <li>
   *                 <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p>
   *             </li>
   *             <li>
   *                 <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>Constraints to the amount of storage for each storage type are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p>
   *             </li>
   *             <li>
   *                 <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p>
   *             </li>
   *             <li>
   *                 <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>Constraints to the amount of storage for each storage type are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p>
   *             </li>
   *             <li>
   *                 <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p>
   *             </li>
   *             <li>
   *                 <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>Constraints to the amount of storage for each storage type are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p>
   *             </li>
   *             <li>
   *                 <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p>
   *             </li>
   *             <li>
   *                 <p>Magnetic storage (standard): Must be an integer from 10 to 3072.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>SQL Server</b>
   *          </p>
   *         <p>Constraints to the amount of storage for each storage type are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>General Purpose (SSD) storage (gp2):</p>
   *                 <ul>
   *                   <li>
   *                         <p>Enterprise and Standard editions: Must be an integer from 20 to 16384.</p>
   *                     </li>
   *                   <li>
   *                         <p>Web and Express editions: Must be an integer from 20 to 16384.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Provisioned IOPS storage (io1):</p>
   *                 <ul>
   *                   <li>
   *                         <p>Enterprise and Standard editions: Must be an integer from 100 to 16384.</p>
   *                     </li>
   *                   <li>
   *                         <p>Web and Express editions: Must be an integer from 100 to 16384.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>Magnetic storage (standard):</p>
   *                 <ul>
   *                   <li>
   *                         <p>Enterprise and Standard editions: Must be an integer from 20 to 1024.</p>
   *                     </li>
   *                   <li>
   *                         <p>Web and Express editions: Must be an integer from 20 to 1024.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the DB instance, for example db.m4.large.
   *           Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.</p>
   *         <p>Not every database engine is available for every Amazon Web Services Region.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>custom-oracle-ee (for RDS Custom for Oracle instances)</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>custom-sqlserver-ee (for RDS Custom for SQL Server instances)</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>custom-sqlserver-se (for RDS Custom for SQL Server instances)</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>custom-sqlserver-web (for RDS Custom for SQL Server instances)</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine: string | undefined;

  /**
   * <p>The name for the master user.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The name for the master user is managed by the DB cluster.</p>
   *         <p>
   *             <b>Amazon RDS</b>
   *          </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Required.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 16 letters, numbers, or underscores.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The password for the master user is managed by the DB
   *             cluster.</p>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   *         <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 128 characters.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 30 characters.</p>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 128 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *         <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: string[];

  /**
   * <p>A list of Amazon EC2 VPC security groups to associate with this DB instance.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The associated list of EC2 VPC security groups is managed by
   *           the DB cluster.</p>
   *         <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The Availability Zone (AZ) where the database will be created. For information on
   *         Amazon Web Services Regions and Availability Zones, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions
   *         and Availability Zones</a>.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these
   *             Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.</p>
   *         <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p>
   *         <p>Example: <code>us-east-1d</code>
   *          </p>
   *         <p>Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.
   *             The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   *         <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The time range each week during which system maintenance can occur,
   *           in Universal Coordinated Time (UTC).
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a>.</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week.</p>
   *         <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance. If you do not specify a value, then
   *           the default DB parameter group for the specified DB engine and version is used.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables
   *           backups. Setting this parameter to 0 disables automated backups.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The retention period for automated backups is managed by the DB cluster.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be a value from 0 to 35</p>
   *             </li>
   *             <li>
   *                 <p>Can't be set to 0 if the DB instance is a source to read replicas</p>
   *             </li>
   *             <li>
   *                 <p>Can't be set to 0 or 35 for an RDS Custom for Oracle DB instance</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         using the <code>BackupRetentionPeriod</code> parameter.
   *           The default is a 30-minute window selected at random from an
   *           8-hour block of time for each Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Backup window</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The daily time range for creating automated backups is managed by
   *           the DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>Default: <code>3306</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>Type: Integer</p>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>Default: <code>3306</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>Type: Integer</p>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>Default: <code>5432</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>Type: Integer</p>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>Default: <code>1521</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>
   *             <b>SQL Server</b>
   *          </p>
   *         <p>Default: <code>1433</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code> except <code>1234</code>, <code>1434</code>,
   *                 <code>3260</code>, <code>3343</code>, <code>3389</code>, <code>47001</code>, and
   *                 <code>49152-49156</code>.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Default: <code>3306</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>Type: Integer</p>
   */
  Port?: number;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set
   *           the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to use.</p>
   *         <p>For a list of valid engine versions, use the  <code>DescribeDBEngineVersions</code> action.</p>
   *         <p>The following are the database engines and links to information about the major and minor versions that are available with
   *           Amazon RDS. Not every database engine is available for every Amazon Web Services Region.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The version number of the database engine to be used by the DB
   *             instance is managed by the DB cluster.</p>
   *         <p>
   *             <b>Amazon RDS Custom for Oracle</b>
   *          </p>
   *         <p>A custom engine version (CEV) that you have previously created. This setting is required for RDS Custom for Oracle. The CEV
   *           name has the following format: <code>19.<i>customized_string</i>
   *             </code>. An example identifier is
   *           <code>19.my_cev1</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-creating.html#custom-creating.create">
   *               Creating an RDS Custom for Oracle DB instance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>Amazon RDS Custom for SQL Server</b>
   *          </p>
   *         <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits-MS.html">RDS Custom for SQL Server general requirements</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt">MariaDB on Amazon RDS Versions</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport">Microsoft SQL Server Versions on Amazon RDS</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">MySQL on Amazon RDS Versions</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html">Oracle Database Engine Release Notes</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts">Amazon RDS for PostgreSQL versions and extensions</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.
   *           By default, minor engine upgrades are applied automatically.</p>
   *         <p>If you create an RDS Custom DB instance, you must set <code>AutoMinorVersionUpgrade</code> to
   *           <code>false</code>.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for this DB instance.</p>
   *         <p>Valid values:  <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code>
   *          </p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
   *           For information about valid <code>Iops</code> values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS storage to improve performance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL DB instances, must be a multiple between .5 and 50
   *           of the storage amount for the DB instance. For SQL Server DB instances, must be a multiple between 1 and 50
   *           of the storage amount for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>A value that indicates that the DB instance should be associated with the specified option group.</p>
   *         <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed
   *           from an option group. Also, that option group can't be removed from a DB instance after it is
   *           associated with a DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>For supported engines, this value indicates that the DB instance should be associated with the
   *           specified <code>CharacterSet</code>.</p>
   *         <p>This setting doesn't apply to RDS Custom. However, if you need to change the character set,
   *           you can change it on the database itself.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The character set is managed by
   *           the DB cluster. For more information, see <code>CreateDBCluster</code>.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>The name of the NCHAR character set for the Oracle DB instance.</p>
   *         <p>This parameter doesn't apply to RDS Custom.</p>
   */
  NcharCharacterSetName?: string;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
   *         <p>When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from
   *           within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC.
   *           Access to the DB instance is ultimately controlled by the security group it uses.
   *           That public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *         <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *         <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p>
   *         <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *         <ul>
   *             <li>
   *                 <p>If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB instance is private.</p>
   *             </li>
   *             <li>
   *                 <p>If the default VPC in the target Region has an internet gateway attached to it, the DB instance is public.</p>
   *             </li>
   *          </ul>
   *         <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *         <ul>
   *             <li>
   *                 <p>If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB instance is private.</p>
   *             </li>
   *             <li>
   *                 <p>If the subnets are part of a VPC that has an internet gateway attached to it, the DB instance is public.</p>
   *             </li>
   *          </ul>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Tags to assign to the DB instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The identifier of the DB cluster that the instance will belong to.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *         <p>Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *         <p>If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.</p>
   *         <p>Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.</p>
   *         <p>For RDS Custom instances, either set this parameter to <code>true</code> or leave it unset.
   *           If you set this parameter to <code>false</code>, RDS reports an error.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The encryption for DB instances is managed by the DB cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB instance.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *           To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The Amazon Web Services KMS key identifier is managed by
   *           the DB cluster. For more information, see <code>CreateDBCluster</code>.</p>
   *         <p>If <code>StorageEncrypted</code> is enabled, and you do
   *         not specify a value for the <code>KmsKeyId</code> parameter, then
   *         Amazon RDS uses your default KMS key. There is a
   *         default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different
   *         default KMS key for each Amazon Web Services Region.</p>
   *         <p>
   *             <b>Amazon RDS Custom</b>
   *          </p>
   *         <p>A KMS key is required for RDS Custom instances. For most RDS engines, if you leave this parameter empty
   *           while enabling <code>StorageEncrypted</code>, the engine uses the default KMS key. However, RDS Custom
   *           doesn't use the default key when this parameter is empty. You must explicitly specify a key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL
   *             Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *            Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  Domain?: string;

  /**
   * <p>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this
   *           value for an Aurora DB instance has no effect on the DB cluster setting.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for
   *           the DB instance. To disable collection of Enhanced Monitoring metrics, specify 0. The default is 0.</p>
   *         <p>If <code>MonitoringRoleArn</code> is specified, then you must set <code>MonitoringInterval</code>
   *       to a value other than 0.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *           example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *           after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: 1</p>
   *         <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>The time zone of the DB instance.
   *             The time zone parameter is currently supported only by
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone">Microsoft SQL Server</a>.</p>
   */
  Timezone?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *         <p>This setting doesn't apply to RDS Custom or Amazon Aurora. In Aurora, mapping Amazon Web Services IAM accounts
   *         to database accounts is managed by the DB cluster.</p>
   *         <p>For more information, see
   *        <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *            IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values
   *             in the list depend on the DB engine. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">
   *             Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. CloudWatch Logs exports are managed by the DB cluster.</p>
   *         <p>
   *             <b>RDS Custom</b>
   *          </p>
   *         <p>Not applicable.</p>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *         <p>Possible values are <code>agent</code> and <code>error</code>.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>Possible values are <code>alert</code>, <code>audit</code>, <code>listener</code>, <code>trace</code>, and
   *             <code>oemagent</code>.</p>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>Possible values are <code>postgresql</code> and <code>upgrade</code>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. You can enable or disable deletion protection for the DB cluster.
   *             For more information, see <code>CreateDBCluster</code>. DB instances in a DB
   *             cluster can be deleted even when deletion protection is enabled for the DB cluster.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *         <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS
   *             on Outposts DB instance.</p>
   *         <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   */
  EnableCustomerOwnedIp?: boolean;

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
   *         <p>This setting is required for RDS Custom.</p>
   */
  CustomIamInstanceProfile?: string;

  /**
   * <p>Specifies where automated backups and manual snapshots are stored.</p>
   *         <p>Possible values are <code>outposts</code> (Amazon Web Services Outposts) and <code>region</code> (Amazon Web Services Region). The default is <code>region</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working
   *             with Amazon RDS on Amazon Web Services Outposts</a> in the <i>Amazon RDS User Guide</i>.</p>
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
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  NetworkType?: string;
}

export namespace CreateDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface CreateDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBInstanceResult): any => ({
    ...obj,
  });
}

export interface CreateDBInstanceReadReplicaMessage {
  /**
   * <p>The DB instance identifier of the read replica. This identifier is the unique key
   *             that identifies a DB instance. This parameter is stored as a lowercase string.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB instance that will act as the source for the read replica.
   *             Each DB instance can have up to five read replicas.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the identifier of an existing MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server DB
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>Can specify a DB instance that is a MySQL read replica only if the source is running MySQL
   *                     5.6 or later.</p>
   *             </li>
   *             <li>
   *                 <p>For the limitations of Oracle read replicas, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Read Replica Limitations with Oracle</a> in the
   *                   <i>Amazon RDS User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>For the limitations of SQL Server read replicas, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.Limitations.html">Read Replica
   *                         Limitations with Microsoft SQL Server</a> in the <i>Amazon RDS User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>Can specify a PostgreSQL DB instance only if the source is running PostgreSQL 9.3.5 or
   *                     later (9.4.7 and higher for cross-Region replication).</p>
   *             </li>
   *             <li>
   *                 <p>The specified DB instance must have automatic backups enabled, that is, its backup
   *                     retention period must be greater than 0.</p>
   *             </li>
   *             <li>
   *                 <p>If the source DB instance is in the same Amazon Web Services Region as the read replica, specify a valid DB
   *                     instance identifier.</p>
   *             </li>
   *             <li>
   *                 <p>If the source DB instance is in a different Amazon Web Services Region from the read replica, specify a valid DB instance ARN.
   *              For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">Constructing an ARN for Amazon RDS</a>
   *              in the <i>Amazon RDS User Guide</i>. This doesn't apply to SQL Server or RDS Custom, which don't support
   *              cross-Region replicas.</p>
   *             </li>
   *          </ul>
   */
  SourceDBInstanceIdentifier: string | undefined;

  /**
   * <p>The compute and memory capacity of the read replica, for example
   *                 db.m4.large. Not all DB instance classes are available in all Amazon Web Services
   *             Regions, or for all database engines. For the full list of DB instance classes, and
   *             availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance
   *                 Class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Default: Inherits from the source DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The Availability Zone (AZ) where the read replica will be created.</p>
   *         <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p>
   *         <p>Example: <code>us-east-1d</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The port number that the DB instance uses for connections.</p>
   *         <p>Default: Inherits from the source DB instance</p>
   *         <p>Valid Values: <code>1150-65535</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>A value that indicates whether the read replica is in a Multi-AZ deployment.</p>
   *         <p>You can create a read replica as a Multi-AZ DB instance. RDS creates a standby of
   *             your replica in another Availability Zone for failover support for the replica. Creating
   *             your read replica as a Multi-AZ DB instance is independent of whether the source
   *             database is a Multi-AZ DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the
   *             read replica during the maintenance window.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: Inherits from the source DB instance</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The option group the DB instance is associated with. If omitted, the option group associated with the source instance is used.</p>
   *         <note>
   *             <p>For SQL Server, you must use the option group associated with the source
   *                 instance.</p>
   *         </note>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then Amazon RDS
   *             uses the <code>DBParameterGroup</code> of source DB instance for a same Region read
   *             replica, or the default <code>DBParameterGroup</code> for the specified DB engine for a
   *             cross-Region read replica.</p>
   *         <p>Specifying a parameter group for this operation is only supported for Oracle DB instances. It
   *         isn't supported for RDS Custom.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
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
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies a DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance isn't created in a VPC.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can only be specified if the source DB instance identifier specifies a DB instance in another Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBSubnetGroup.</p>
   *             </li>
   *             <li>
   *                 <p>The specified DB subnet group must be in the same Amazon Web Services Region in which the operation is running.</p>
   *             </li>
   *             <li>
   *                 <p>All read replicas in one Amazon Web Services Region that are created from the same source DB
   *                     instance must either:></p>
   *                 <ul>
   *                   <li>
   *                         <p>Specify DB subnet groups from the same VPC. All these read replicas are created in the same
   *                             VPC.</p>
   *                     </li>
   *                   <li>
   *                         <p>Not specify a DB subnet group. All these read replicas are created outside of any
   *                             VPC.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A list of Amazon EC2 VPC security groups to associate with the read replica.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>Specifies the storage type to be associated with the read replica.</p>
   *         <p>Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *         <p>If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.</p>
   *         <p>Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the read replica to snapshots of
   *             the read replica. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are
   *             collected for the read replica. To disable collecting Enhanced Monitoring metrics,
   *             specify 0. The default is 0.</p>
   *         <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code>
   *       to a value other than 0.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *       example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *           create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must
   *           supply a <code>MonitoringRoleArn</code> value.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted read replica.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>If you create an encrypted read replica in the same Amazon Web Services Region as the source DB
   *             instance, then do not specify a value for this parameter. A read replica in the same Amazon Web Services Region
   *             is always encrypted with the same KMS key as the source DB instance.</p>
   *         <p>If you create an encrypted read replica in a different Amazon Web Services Region, then you must
   *             specify a KMS key identifier for the destination Amazon Web Services Region. KMS keys are specific to
   *             the Amazon Web Services Region that they are created in, and you can't use KMS keys from one
   *             Amazon Web Services Region in another Amazon Web Services Region.</p>
   *         <p>You can't create an encrypted read replica from an unencrypted DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom, which uses the same KMS key as the primary
   *             replica.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the <code>CreateDBInstanceReadReplica</code> API action
   *             in the source Amazon Web Services Region that contains the source DB instance.</p>
   *         <p>You must specify this parameter when you create an encrypted read replica from
   *             another Amazon Web Services Region by using the Amazon RDS API. Don't specify
   *                 <code>PreSignedUrl</code> when you are creating an encrypted read replica in the
   *             same Amazon Web Services Region.</p>
   *         <p>The presigned URL must be a valid request for the <code>CreateDBInstanceReadReplica</code> API action
   *             that can be executed in the source Amazon Web Services Region that contains the encrypted source DB instance.
   *             The presigned URL request must contain the following parameter values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DestinationRegion</code> - The Amazon Web Services Region that the encrypted read
   *                     replica is created in. This Amazon Web Services Region is the same one where the
   *                         <code>CreateDBInstanceReadReplica</code> action is called that contains this presigned URL.</p>
   *                 <p>For example, if you create an encrypted DB instance in the us-west-1 Amazon Web Services Region,
   *                     from a source DB instance in the us-east-2 Amazon Web Services Region,
   *                     then you call the <code>CreateDBInstanceReadReplica</code> action in
   *                     the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the
   *                     <code>CreateDBInstanceReadReplica</code> action in the us-west-2 Amazon Web Services Region. For this
   *                     example, the <code>DestinationRegion</code> in the presigned URL must be set to
   *                     the us-east-1 Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KmsKeyId</code> - The Amazon Web Services KMS key identifier for the key to use to
   *                     encrypt the read replica in the destination Amazon Web Services Region. This is the same
   *                     identifier for both the <code>CreateDBInstanceReadReplica</code> action that is
   *                     called in the destination Amazon Web Services Region, and the action contained in the presigned
   *                     URL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SourceDBInstanceIdentifier</code> - The DB instance identifier for
   *                     the encrypted DB instance to be replicated. This identifier must be in the
   *                     Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you
   *                     are creating an encrypted read replica from a DB instance in the us-west-2 Amazon Web Services
   *                     Region, then your <code>SourceDBInstanceIdentifier</code> looks like the
   *                     following example:
   *                         <code>arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115</code>.</p>
   *             </li>
   *          </ul>
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p>
   *         <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify
   *                     <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying
   *                     <code>SourceRegion</code> autogenerates a presigned URL that is a valid request
   *                 for the operation that can be executed in the source Amazon Web Services Region.</p>
   *             <p>
   *                <code>SourceRegion</code> isn't supported for SQL Server, because SQL Server on Amazon RDS
   *                 doesn't support cross-Region read replicas.</p>
   *         </note>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *         <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the read replica.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using
   *             Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The list of logs that the new DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing
   *                 Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL
   *             Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *             Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The open mode of the replica database: mounted or read-only.</p>
   *         <note>
   *             <p>This parameter is only supported for Oracle DB instances.</p>
   *         </note>
   *         <p>Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for
   *             mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active
   *             Data Guard to transmit information to the mounted replica. Because it doesn't accept
   *             user connections, a mounted replica can't serve a read-only workload.</p>
   *         <p>You can create a combination of mounted and read-only DB replicas for the same primary DB instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Working with Oracle Read Replicas for Amazon RDS</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For RDS Custom, you must specify this parameter and set it to <code>mounted</code>. The value won't be set by default.
   *             After replica creation, you can manage the open mode manually.</p>
   */
  ReplicaMode?: ReplicaMode | string;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *         <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   */
  MaxAllocatedStorage?: number;

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
   *         <p>This setting is required for RDS Custom.</p>
   */
  CustomIamInstanceProfile?: string;

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
   *         <p>The network type is determined by the <code>DBSubnetGroup</code> specified for read replica.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  NetworkType?: string;
}

export namespace CreateDBInstanceReadReplicaMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBInstanceReadReplicaMessage): any => ({
    ...obj,
  });
}

export interface CreateDBInstanceReadReplicaResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceReadReplicaResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBInstanceReadReplicaResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This value is stored as a lowercase string.</p>
   *         </note>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.</p>
   *         <p>To list all of the available parameter group families for a DB engine, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine></code>
   *          </p>
   *         <p>For example, to list all of the available parameter group families for the MySQL DB engine, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine mysql</code>
   *          </p>
   *         <note>
   *             <p>The output contains duplicates.</p>
   *         </note>
   *         <p>The following are the valid DB engine values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>Tags to assign to the DB parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateDBParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB parameter group.</p>
   *         <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.</p>
   */
  DBParameterGroup?: DBParameterGroup;
}

export namespace CreateDBParameterGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBParameterGroupResult): any => ({
    ...obj,
  });
}

export interface CreateDBProxyRequest {
  /**
   * <p>The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The kinds of databases that the proxy can connect to.
   *           This value determines which database network protocol the proxy recognizes when it interprets
   *         network traffic to and from the database.
   *         The engine family applies to MySQL and PostgreSQL for both RDS and Aurora.</p>
   */
  EngineFamily: EngineFamily | string | undefined;

  /**
   * <p>The authorization mechanism that the proxy uses.</p>
   */
  Auth: UserAuthConfig[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>One or more VPC subnet IDs to associate with the new proxy.</p>
   */
  VpcSubnetIds: string[] | undefined;

  /**
   * <p>One or more VPC security group IDs to associate with the new proxy.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
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
   * <p>An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBProxyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBProxyRequest): any => ({
    ...obj,
  });
}

export interface CreateDBProxyResponse {
  /**
   * <p>The <code>DBProxy</code> structure corresponding to the new proxy.</p>
   */
  DBProxy?: DBProxy;
}

export namespace CreateDBProxyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBProxyResponse): any => ({
    ...obj,
  });
}

export interface CreateDBProxyEndpointRequest {
  /**
   * <p>The name of the DB proxy associated with the DB proxy endpoint that you create.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The name of the DB proxy endpoint to create.</p>
   */
  DBProxyEndpointName: string | undefined;

  /**
   * <p>The VPC subnet IDs for the DB proxy endpoint that you create. You can specify a
   *         different set of subnet IDs than for the original DB proxy.</p>
   */
  VpcSubnetIds: string[] | undefined;

  /**
   * <p>The VPC security group IDs for the DB proxy endpoint that you create. You can
   *         specify a different set of security group IDs than for the original DB proxy.
   *         The default is the default security group for the VPC.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A value that indicates whether the DB proxy endpoint can be used for read/write
   *         or read-only operations. The default is <code>READ_WRITE</code>.</p>
   */
  TargetRole?: DBProxyEndpointTargetRole | string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace CreateDBProxyEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBProxyEndpointRequest): any => ({
    ...obj,
  });
}

export interface CreateDBProxyEndpointResponse {
  /**
   * <p>The <code>DBProxyEndpoint</code> object that is created by the API operation.
   *         The DB proxy endpoint that you create might provide capabilities such as read/write
   *         or read-only operations, or using a different VPC than the proxy's default VPC.</p>
   */
  DBProxyEndpoint?: DBProxyEndpoint;
}

export namespace CreateDBProxyEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBProxyEndpointResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateDBSecurityGroupMessage {
  /**
   * <p>The name for the DB security group. This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                 <p>Must not be "Default"</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mysecuritygroup</code>
   *          </p>
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>The description for the DB security group.</p>
   */
  DBSecurityGroupDescription: string | undefined;

  /**
   * <p>Tags to assign to the DB security group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBSecurityGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBSecurityGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateDBSecurityGroupResult {
  /**
   * <p>Contains the details for an Amazon RDS DB security group.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.</p>
   */
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace CreateDBSecurityGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBSecurityGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateDBSnapshotMessage {
  /**
   * <p>The identifier for the DB snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB instance that you want to create the snapshot of.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace CreateDBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBSnapshotMessage): any => ({
    ...obj,
  });
}

export interface CreateDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.</p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace CreateDBSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must not be default.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * <p>The EC2 Subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>Tags to assign to the DB subnet group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBSubnetGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateDBSubnetGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB subnet group.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSubnetGroups</code> action.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace CreateDBSubnetGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBSubnetGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionMessage {
  /**
   * <p>The name of the subscription.</p>
   *         <p>Constraints: The name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be
   *             notified of events generated by a DB instance, you set this parameter to
   *                 <code>db-instance</code>. For RDS Proxy events, specify <code>db-proxy</code>. If this value isn't specified, all events are
   *             returned.</p>
   *         <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> | <code>db-proxy</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>A list of event categories for a particular source type (<code>SourceType</code>)
   *             that you want to subscribe to. You can see a list of the categories for a given source type in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html">
   *                 <i>Amazon RDS User Guide</i>
   *             </a> or the
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html">
   *                 <i>Amazon Aurora User Guide</i>
   *             </a>.
   *                 You can also see this list by using the <code>DescribeEventCategories</code> operation.</p>
   */
  EventCategories?: string[];

  /**
   * <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response.
   *           An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>SourceIds</code> are supplied, <code>SourceType</code> must also be provided.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB instance, a <code>DBInstanceIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB cluster, a <code>DBClusterIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB cluster snapshot, a <code>DBClusterSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is an RDS Proxy, a <code>DBProxyName</code> value must be supplied.</p>
   *             </li>
   *          </ul>
   */
  SourceIds?: string[];

  /**
   * <p>A value that indicates whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace CreateEventSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface CreateEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace CreateEventSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventSubscriptionResult): any => ({
    ...obj,
  });
}

export interface CreateGlobalClusterMessage {
  /**
   * <p>The cluster identifier of the new global database cluster.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) to use as the primary cluster of the global database.
   *         This parameter is optional.</p>
   */
  SourceDBClusterIdentifier?: string;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of the Aurora global database.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The deletion protection setting for the new global database.
   *         The global database can't be deleted when deletion protection is enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon
   *         Aurora will not create a database in the global database cluster you are creating.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The storage encryption setting for the new global database cluster.</p>
   */
  StorageEncrypted?: boolean;
}

export namespace CreateGlobalClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalClusterMessage): any => ({
    ...obj,
  });
}

export interface CreateGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace CreateGlobalClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGlobalClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateOptionGroupMessage {
  /**
   * <p>Specifies the name of the option group to be created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>myoptiongroup</code>
   *          </p>
   */
  OptionGroupName: string | undefined;

  /**
   * <p>Specifies the name of the engine that this option group should be associated with.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineName: string | undefined;

  /**
   * <p>Specifies the major version of the engine that this option group should be associated with.</p>
   */
  MajorEngineVersion: string | undefined;

  /**
   * <p>The description of the option group.</p>
   */
  OptionGroupDescription: string | undefined;

  /**
   * <p>Tags to assign to the option group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateOptionGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOptionGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateOptionGroupResult {
  /**
   * <p></p>
   */
  OptionGroup?: OptionGroup;
}

export namespace CreateOptionGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOptionGroupResult): any => ({
    ...obj,
  });
}

export interface DeleteCustomDBEngineVersionMessage {
  /**
   * <p>The database engine. The only supported engine is <code>custom-oracle-ee</code>.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The custom engine version (CEV) for your DB instance. This option is required for
   *             RDS Custom, but optional for Amazon RDS. The combination of <code>Engine</code> and
   *             <code>EngineVersion</code> is unique per customer per Amazon Web Services Region.</p>
   */
  EngineVersion: string | undefined;
}

export namespace DeleteCustomDBEngineVersionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomDBEngineVersionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteDBClusterMessage {
  /**
   * <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>A value that indicates whether to skip the creation of a final DB cluster snapshot before the DB cluster is deleted.
   *           If skip is specified, no DB cluster snapshot is created. If skip isn't specified, a DB cluster snapshot
   *           is created before the DB cluster is deleted. By default, skip isn't specified, and the DB cluster snapshot is created.
   *           By default, this parameter is disabled.</p>
   *         <note>
   *             <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is disabled.</p>
   *         </note>
   */
  SkipFinalSnapshot?: boolean;

  /**
   * <p>The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code>
   *       is disabled.</p>
   *         <note>
   *             <p>Specifying this parameter and also skipping the creation of a final DB cluster snapshot
   *           with the <code>SkipFinalShapshot</code> parameter results in an error.</p>
   *         </note>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  FinalDBSnapshotIdentifier?: string;
}

export namespace DeleteDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBClusterMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBClusterResult {
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
  DBCluster?: DBCluster;
}

export namespace DeleteDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBClusterResult): any => ({
    ...obj,
  });
}

export interface DeleteDBClusterEndpointMessage {
  /**
   * <p>The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;
}

export namespace DeleteDBClusterEndpointMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBClusterEndpointMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>You can't delete a default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Can't be associated with any DB clusters.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;
}

export namespace DeleteDBClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *         <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBClusterSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBClusterSnapshotResult {
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace DeleteDBClusterSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteDBInstanceMessage {
  /**
   * <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the name of an existing DB instance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>A value that indicates whether to skip the creation of a final DB snapshot before deleting the instance.
   *           If you enable this parameter, RDS doesn't create a DB snapshot. If you don't enable this parameter,
   *           RDS creates a DB snapshot before the DB instance is deleted. By default, skip isn't enabled,
   *           and the DB snapshot is created.</p>
   *         <note>
   *             <p>If you don't enable this parameter, you must specify the <code>FinalDBSnapshotIdentifier</code> parameter.</p>
   *         </note>
   *         <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>,
   *           or <code>incompatible-network</code>, RDS can delete the instance only if you enable this parameter.</p>
   *         <p>If you delete a read replica or an RDS Custom instance, you must enable this setting.</p>
   *         <p>This setting is required for RDS Custom.</p>
   */
  SkipFinalSnapshot?: boolean;

  /**
   * <p>The <code>DBSnapshotIdentifier</code> of the new <code>DBSnapshot</code> created when the <code>SkipFinalSnapshot</code>
   *         parameter is disabled.</p>
   *         <note>
   *             <p>If you enable this parameter and also enable SkipFinalShapshot, the command results in an error.</p>
   *         </note>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Can't be specified when deleting a read replica.</p>
   *             </li>
   *          </ul>
   */
  FinalDBSnapshotIdentifier?: string;

  /**
   * <p>A value that indicates whether to remove automated backups immediately after the DB
   *             instance is deleted. This parameter isn't case-sensitive. The default is to remove
   *             automated backups immediately after the DB instance is deleted.</p>
   */
  DeleteAutomatedBackups?: boolean;
}

export namespace DeleteDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace DeleteDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Parameter input for the <code>DeleteDBInstanceAutomatedBackup</code> operation.</p>
 */
export interface DeleteDBInstanceAutomatedBackupMessage {
  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the automated backups to delete, for example,
   *             <code>arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE</code>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  DBInstanceAutomatedBackupsArn?: string;
}

export namespace DeleteDBInstanceAutomatedBackupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBInstanceAutomatedBackupMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBInstanceAutomatedBackupResult {
  /**
   * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance.</p>
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}

export namespace DeleteDBInstanceAutomatedBackupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBInstanceAutomatedBackupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the name of an existing DB parameter group</p>
   *             </li>
   *             <li>
   *                 <p>You can't delete a default DB parameter group</p>
   *             </li>
   *             <li>
   *                 <p>Can't be associated with any DB instances</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;
}

export namespace DeleteDBParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBProxyRequest {
  /**
   * <p>The name of the DB proxy to delete.</p>
   */
  DBProxyName: string | undefined;
}

export namespace DeleteDBProxyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBProxyRequest): any => ({
    ...obj,
  });
}

export interface DeleteDBProxyResponse {
  /**
   * <p>The data structure representing the details of the DB proxy that you delete.</p>
   */
  DBProxy?: DBProxy;
}

export namespace DeleteDBProxyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBProxyResponse): any => ({
    ...obj,
  });
}

export interface DeleteDBProxyEndpointRequest {
  /**
   * <p>The name of the DB proxy endpoint to delete.</p>
   */
  DBProxyEndpointName: string | undefined;
}

export namespace DeleteDBProxyEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBProxyEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteDBProxyEndpointResponse {
  /**
   * <p>The data structure representing the details of the DB proxy endpoint that you delete.</p>
   */
  DBProxyEndpoint?: DBProxyEndpoint;
}

export namespace DeleteDBProxyEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBProxyEndpointResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteDBSecurityGroupMessage {
  /**
   * <p>The name of the DB security group to delete.</p>
   *         <note>
   *             <p>You can't delete the default DB security group.</p>
   *         </note>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                 <p>Must not be "Default"</p>
   *             </li>
   *          </ul>
   */
  DBSecurityGroupName: string | undefined;
}

export namespace DeleteDBSecurityGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBSecurityGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteDBSnapshotMessage {
  /**
   * <p>The DB snapshot identifier.</p>
   *         <p>Constraints: Must be the name of an existing DB snapshot in the <code>available</code> state.</p>
   */
  DBSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBSnapshotMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.</p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace DeleteDBSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteDBSubnetGroupMessage {
  /**
   * <p>The name of the database subnet group to delete.</p>
   *         <note>
   *             <p>You can't delete the default subnet group.</p>
   *         </note>
   *         <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;
}

export namespace DeleteDBSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to delete.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace DeleteEventSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface DeleteEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace DeleteEventSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventSubscriptionResult): any => ({
    ...obj,
  });
}

export interface DeleteGlobalClusterMessage {
  /**
   * <p>The cluster identifier of the global database cluster being deleted.</p>
   */
  GlobalClusterIdentifier: string | undefined;
}

export namespace DeleteGlobalClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGlobalClusterMessage): any => ({
    ...obj,
  });
}

export interface DeleteGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace DeleteGlobalClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGlobalClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteOptionGroupMessage {
  /**
   * <p>The name of the option group to be deleted.</p>
   *         <note>
   *             <p>You can't delete default option groups.</p>
   *         </note>
   */
  OptionGroupName: string | undefined;
}

export namespace DeleteOptionGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOptionGroupMessage): any => ({
    ...obj,
  });
}

export interface DeregisterDBProxyTargetsRequest {
  /**
   * <p>The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code>.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>One or more DB instance identifiers.</p>
   */
  DBInstanceIdentifiers?: string[];

  /**
   * <p>One or more DB cluster identifiers.</p>
   */
  DBClusterIdentifiers?: string[];
}

export namespace DeregisterDBProxyTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterDBProxyTargetsRequest): any => ({
    ...obj,
  });
}

export interface DeregisterDBProxyTargetsResponse {}

export namespace DeregisterDBProxyTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterDBProxyTargetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeAccountAttributesMessage {}

export namespace DescribeAccountAttributesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountAttributesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Data returned by the <b>DescribeCertificates</b> action.</p>
 */
export interface CertificateMessage {
  /**
   * <p>The list of <code>Certificate</code> objects for the Amazon Web Services account.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeCertificates</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;
}

export namespace CertificateMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeCertificatesMessage {
  /**
   * <p>The user-supplied certificate identifier. If this parameter is specified, information for only the identified certificate is returned. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match an existing CertificateIdentifier.</p>
   *             </li>
   *          </ul>
   */
  CertificateIdentifier?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         <code>DescribeCertificates</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeCertificatesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCertificatesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.</p>
 */
export interface DBClusterBacktrackMessage {
  /**
   * <p>A pagination token that can be used in a later <code>DescribeDBClusterBacktracks</code> request.</p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of backtracks for the user.</p>
   */
  DBClusterBacktracks?: DBClusterBacktrack[];
}

export namespace DBClusterBacktrackMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterBacktrackMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBClusterBacktracksMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster to be described. This parameter is
   *             stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>If specified, this value is the backtrack identifier of the backtrack to be
   *             described.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain a valid universally unique identifier (UUID). For more
   *                     information about UUIDs, see <a href="http://www.ietf.org/rfc/rfc4122.txt">A Universally Unique Identifier
   *                         (UUID) URN Namespace</a>.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>123e4567-e89b-12d3-a456-426655440000</code>
   *          </p>
   */
  BacktrackIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB clusters to describe. Supported filters
   *             include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>db-cluster-backtrack-id</code> - Accepts backtrack identifiers. The
   *                     results list includes information about only the backtracks identified by these
   *                     identifiers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>db-cluster-backtrack-status</code> - Accepts any of the following backtrack status values:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>applying</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>completed</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>failed</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>pending</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *                 <p>The results list includes information about only the backtracks identified
   *                     by these values.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusterBacktracks</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBClusterBacktracksMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClusterBacktracksMessage): any => ({
    ...obj,
  });
}

export interface DBClusterEndpointMessage {
  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusterEndpoints</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Contains the details of the endpoints associated with the cluster
   *        and matching any filter conditions.</p>
   */
  DBClusterEndpoints?: DBClusterEndpoint[];
}

export namespace DBClusterEndpointMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterEndpointMessage): any => ({
    ...obj,
  });
}

export interface DescribeDBClusterEndpointsMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The identifier of the endpoint to describe. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>A set of name-value pairs that define which endpoints to include in the output.
   *        The filters are specified as name-value pairs, in the format
   *        <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>.
   *        <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>.
   *          <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>.
   *        <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>.
   *        <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusterEndpoints</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBClusterEndpointsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClusterEndpointsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DBClusterParameterGroupsMessage {
  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusterParameterGroups</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of DB cluster parameter groups.</p>
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[];
}

export namespace DBClusterParameterGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterParameterGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBClusterParameterGroupsMessage {
  /**
   * <p>The name of a specific DB cluster parameter group to return details for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         <code>DescribeDBClusterParameterGroups</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBClusterParameterGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClusterParameterGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.</p>
 */
export interface DBClusterParameterGroupDetails {
  /**
   * <p>Provides a list of parameters for the DB cluster parameter group.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusterParameters</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBClusterParameterGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterParameterGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBClusterParametersMessage {
  /**
   * <p>The name of a specific DB cluster parameter group to return parameter details for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A value that indicates to return only parameters for a specific source.
   *       Parameter sources can be <code>engine</code>, <code>service</code>,
   *       or <code>customer</code>.</p>
   */
  Source?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameters</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBClusterParametersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClusterParametersMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.</p>
 */
export interface DBClusterMessage {
  /**
   * <p>A pagination token that can be used in a later DescribeDBClusters request.</p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of DB clusters for the user.</p>
   */
  DBClusters?: DBCluster[];
}

export namespace DBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBClustersMessage {
  /**
   * <p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB clusters to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>clone-group-id</code> - Accepts clone group identifiers.
   *               The results list only includes information about
   *               the DB clusters associated with these clone groups.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list only includes information about
   *               the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>domain</code> - Accepts Active Directory directory IDs.
   *               The results list only includes information about
   *               the DB clusters associated with these domains.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>engine</code> - Accepts engine names.
   *               The results list only includes information about
   *               the DB clusters for these engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusters</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Optional Boolean parameter that specifies whether the output includes information about clusters
   *           shared from other Amazon Web Services accounts.</p>
   */
  IncludeShared?: boolean;
}

export namespace DescribeDBClustersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClustersMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  /**
   * <p>The identifier for the DB cluster snapshot to describe the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBClusterSnapshotAttributesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClusterSnapshotAttributesMessage): any => ({
    ...obj,
  });
}

export interface DescribeDBClusterSnapshotAttributesResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
   *             API action.</p>
   *         <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts
   *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace DescribeDBClusterSnapshotAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClusterSnapshotAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action.</p>
 */
export interface DBClusterSnapshotMessage {
  /**
   * <p>An optional pagination token provided by a previous
   *           <code>DescribeDBClusterSnapshots</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Provides a list of DB cluster snapshots for the user.</p>
   */
  DBClusterSnapshots?: DBClusterSnapshot[];
}

export namespace DBClusterSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterSnapshotMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBClusterSnapshotsMessage {
  /**
   * <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for.
   *             This parameter can't be used in conjunction with the
   *             <code>DBClusterSnapshotIdentifier</code> parameter.
   *             This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A specific DB cluster snapshot identifier to describe.
   *             This parameter can't be used in conjunction with the
   *             <code>DBClusterIdentifier</code> parameter.
   *             This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p>
   *             </li>
   *          </ul>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by
   *               Amazon RDS for my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>manual</code> - Return all DB cluster snapshots that have been taken by my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are
   *           returned. You can include shared DB cluster snapshots with these results by enabling the <code>IncludeShared</code>
   *           parameter. You can include public DB cluster snapshots with these results by enabling the
   *           <code>IncludePublic</code> parameter.</p>
   *         <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values
   *           of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is
   *           set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to
   *           <code>public</code>.</p>
   */
  SnapshotType?: string;

  /**
   * <p>A filter that specifies one or more DB cluster snapshots to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>db-cluster-snapshot-id</code> - Accepts DB cluster snapshot identifiers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>snapshot-type</code> - Accepts types of DB cluster snapshots.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>engine</code> - Accepts names of database engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusterSnapshots</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A value that indicates whether to include shared manual DB cluster snapshots
   *             from other Amazon Web Services accounts that this Amazon Web Services account has been given
   *             permission to copy or restore. By default, these snapshots are not included.</p>
   *         <p>You can give an Amazon Web Services account permission to restore a manual DB cluster snapshot from
   *             another Amazon Web Services account by the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>A value that indicates whether to include manual DB cluster snapshots that are public and can be copied
   *             or restored by any Amazon Web Services account. By default, the public snapshots are not included.</p>
   *         <p>You can share a manual DB cluster snapshot  as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  IncludePublic?: boolean;
}

export namespace DescribeDBClusterSnapshotsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClusterSnapshotsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action.</p>
 */
export interface DBEngineVersionMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>DBEngineVersion</code> elements.</p>
   */
  DBEngineVersions?: DBEngineVersion[];
}

export namespace DBEngineVersionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBEngineVersionMessage): any => ({
    ...obj,
  });
}

export interface DescribeDBEngineVersionsMessage {
  /**
   * <p>The database engine to return.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>The database engine version to return.</p>
   *         <p>Example: <code>5.1.49</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of a specific DB parameter group family to return details for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match an existing DBParameterGroupFamily.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>A filter that specifies one or more DB engine versions to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>db-parameter-group-family</code> - Accepts parameter groups family names.
   *                   The results list only includes information about
   *                   the DB engine versions for these parameter group families.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>engine</code> - Accepts engine names.
   *                   The results list only includes information about
   *                   the DB engine versions for these engines.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>engine-mode</code> - Accepts DB engine modes.
   *                   The results list only includes information about
   *                   the DB engine versions for these engine modes. Valid
   *                   DB engine modes are the following:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>global</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>multimaster</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>parallelquery</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>provisioned</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>serverless</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>engine-version</code> - Accepts engine versions.
   *                   The results list only includes information about
   *                   the DB engine versions for these engine versions.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>status</code> - Accepts engine version statuses.
   *                   The results list only includes information about
   *                   the DB engine versions for these statuses. Valid statuses
   *                   are the following:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>available</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>deprecated</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *     If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is
   *     included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A value that indicates whether only the default version of the specified engine or engine and major version combination is returned.</p>
   */
  DefaultOnly?: boolean;

  /**
   * <p>A value that indicates whether to list the supported character sets for each engine version.</p>
   *         <p>If this parameter is enabled and the requested engine supports the <code>CharacterSetName</code> parameter for
   *                 <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine
   *             version.</p>
   *         <p>For RDS Custom, the default is not to list supported character sets. If you set <code>ListSupportedCharacterSets</code>
   *           to <code>true</code>, RDS Custom returns no results.</p>
   */
  ListSupportedCharacterSets?: boolean;

  /**
   * <p>A value that indicates whether to list the supported time zones for each engine version.</p>
   *         <p>If this parameter is enabled and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>,
   *             the response includes a list of supported time zones for each engine version.</p>
   *         <p>For RDS Custom, the default is not to list supported time zones. If you set <code>ListSupportedTimezones</code>
   *             to <code>true</code>, RDS Custom returns no results.</p>
   */
  ListSupportedTimezones?: boolean;

  /**
   * <p>A value that indicates whether to include engine versions that aren't available in the list. The default is to list only available engine versions.</p>
   */
  IncludeAll?: boolean;
}

export namespace DescribeDBEngineVersionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBEngineVersionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.</p>
 */
export interface DBInstanceAutomatedBackupMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>DBInstanceAutomatedBackup</code> instances.</p>
   */
  DBInstanceAutomatedBackups?: DBInstanceAutomatedBackup[];
}

export namespace DBInstanceAutomatedBackupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceAutomatedBackupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Parameter input for DescribeDBInstanceAutomatedBackups.</p>
 */
export interface DescribeDBInstanceAutomatedBackupsMessage {
  /**
   * <p>The resource ID of the DB instance that is the source of
   *             the automated backup. This parameter isn't case-sensitive.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>(Optional) The user-supplied instance identifier. If this parameter is specified, it must
   *             match the identifier of an existing DB instance. It returns information from the
   *             specific DB instance' automated backup. This parameter isn't case-sensitive.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>A filter that specifies which resources to return based on status.</p>
   *         <p>Supported filters are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>status</code>
   *                </p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>active</code> - automated backups for current instances</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>retained</code> - automated backups for deleted instances and after backup replication is stopped</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>creating</code> - automated backups that are waiting for the first automated snapshot to be available</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and Amazon Resource Names (ARNs).
   *                 The results list includes only information about the DB instance automated backups identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dbi-resource-id</code> - Accepts DB resource identifiers and Amazon Resource Names (ARNs).
   *                 The results list includes only information about the DB instance resources identified by these ARNs.</p>
   *             </li>
   *          </ul>
   *         <p>Returns all resources by default. The status for each resource is specified in the response.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified
   *             <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The pagination token provided in the previous request. If this parameter is specified the response
   *             includes only records beyond the marker, up to <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicated automated backups, for example,
   *             <code>arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE</code>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  DBInstanceAutomatedBackupsArn?: string;
}

export namespace DescribeDBInstanceAutomatedBackupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBInstanceAutomatedBackupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action.</p>
 */
export interface DBInstanceMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>DBInstance</code> instances.</p>
   */
  DBInstances?: DBInstance[];
}

export namespace DBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBInstancesMessage {
  /**
   * <p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB instances to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list only includes information about
   *               the DB instances associated with the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *               instance Amazon Resource Names (ARNs). The results list only includes information about
   *               the DB instances identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dbi-resource-id</code> - Accepts DB instance resource identifiers. The results list will
   *               only include information about the DB instances identified by these DB instance resource identifiers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>domain</code> - Accepts Active Directory directory IDs. The results list only includes
   *               information about the DB instances associated with these domains.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>engine</code> - Accepts engine names. The results list only includes information
   *               about the DB instances for these engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         <code>DescribeDBInstances</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBInstancesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBInstancesMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBLogFilesMessage {
  /**
   * <p>The customer-assigned name of the DB instance that contains the log files you want to list.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>Filters the available log files for log file names that contain the specified string.</p>
   */
  FilenameContains?: string;

  /**
   * <p>Filters the available log files for files written since the specified date, in POSIX timestamp format with milliseconds.</p>
   */
  FileLastWritten?: number;

  /**
   * <p>Filters the available log files for files larger than the specified size.</p>
   */
  FileSize?: number;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords.</p>
   */
  Marker?: string;
}

export namespace DescribeDBLogFilesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBLogFilesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The response from a call to <code>DescribeDBLogFiles</code>.</p>
 */
export interface DescribeDBLogFilesResponse {
  /**
   * <p>The DB log files returned.</p>
   */
  DescribeDBLogFiles?: DescribeDBLogFilesDetails[];

  /**
   * <p>A pagination token that can be used in a later <code>DescribeDBLogFiles</code> request.</p>
   */
  Marker?: string;
}

export namespace DescribeDBLogFilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBLogFilesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action.</p>
 */
export interface DBParameterGroupsMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>DBParameterGroup</code> instances.</p>
   */
  DBParameterGroups?: DBParameterGroup[];
}

export namespace DBParameterGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBParameterGroupsMessage {
  /**
   * <p>The name of a specific DB parameter group to return details for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         <code>DescribeDBParameterGroups</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBParameterGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBParameterGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action.</p>
 */
export interface DBParameterGroupDetails {
  /**
   * <p>A list of <code>Parameter</code> values.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBParameterGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroupDetails): any => ({
    ...obj,
  });
}

export interface DescribeDBParametersMessage {
  /**
   * <p>The name of a specific DB parameter group to return details for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return.</p>
   *         <p>Default: All parameter types returned</p>
   *         <p>Valid Values: <code>user | system | engine-default</code>
   *          </p>
   */
  Source?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         <code>DescribeDBParameters</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBParametersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBParametersMessage): any => ({
    ...obj,
  });
}

export interface DescribeDBProxiesRequest {
  /**
   * <p>The name of the DB proxy. If you omit this parameter,
   *         the output includes information about all DB proxies owned by
   *         your Amazon Web Services account ID.</p>
   */
  DBProxyName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *           than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *           included in the response so that the remaining results can be retrieved.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBProxiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBProxiesRequest): any => ({
    ...obj,
  });
}

export interface DescribeDBProxiesResponse {
  /**
   * <p>A return value representing an arbitrary number of <code>DBProxy</code> data structures.</p>
   */
  DBProxies?: DBProxy[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBProxiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBProxiesResponse): any => ({
    ...obj,
  });
}

export interface DescribeDBProxyEndpointsRequest {
  /**
   * <p>The name of the DB proxy whose endpoints you want to describe. If you omit
   *         this parameter, the output includes information about all DB proxy endpoints
   *         associated with all your DB proxies.</p>
   */
  DBProxyName?: string;

  /**
   * <p>The name of a DB proxy endpoint to describe. If you omit this parameter,
   *         the output includes information about all DB proxy endpoints associated with
   *         the specified proxy.</p>
   */
  DBProxyEndpointName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *           than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *           included in the response so that the remaining results can be retrieved.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBProxyEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBProxyEndpointsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDBProxyEndpointsResponse {
  /**
   * <p>The list of <code>ProxyEndpoint</code> objects returned by the API operation.</p>
   */
  DBProxyEndpoints?: DBProxyEndpoint[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBProxyEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBProxyEndpointsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDBProxyTargetGroupsRequest {
  /**
   * <p>The identifier of the <code>DBProxy</code> associated with the target group.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code> to describe.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that the remaining
   *         results can be retrieved.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBProxyTargetGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBProxyTargetGroupsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDBProxyTargetGroupsResponse {
  /**
   * <p>An arbitrary number of <code>DBProxyTargetGroup</code> objects, containing details of the corresponding target groups.</p>
   */
  TargetGroups?: DBProxyTargetGroup[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBProxyTargetGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBProxyTargetGroupsResponse): any => ({
    ...obj,
  });
}

export interface DescribeDBProxyTargetsRequest {
  /**
   * <p>The identifier of the <code>DBProxyTarget</code> to describe.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code> to describe.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that the remaining
   *         results can be retrieved.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBProxyTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBProxyTargetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeDBProxyTargetsResponse {
  /**
   * <p>An arbitrary number of <code>DBProxyTarget</code> objects, containing details of the corresponding targets.</p>
   */
  Targets?: DBProxyTarget[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBProxyTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBProxyTargetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action.</p>
 */
export interface DBSecurityGroupMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>DBSecurityGroup</code> instances.</p>
   */
  DBSecurityGroups?: DBSecurityGroup[];
}

export namespace DBSecurityGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSecurityGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBSecurityGroupsMessage {
  /**
   * <p>The name of the DB security group to return details for.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         <code>DescribeDBSecurityGroups</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBSecurityGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSecurityGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBSnapshotAttributesMessage {
  /**
   * <p>The identifier for the DB snapshot to describe the attributes for.</p>
   */
  DBSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBSnapshotAttributesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSnapshotAttributesMessage): any => ({
    ...obj,
  });
}

export interface DescribeDBSnapshotAttributesResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *         <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}

export namespace DescribeDBSnapshotAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSnapshotAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.</p>
 */
export interface DBSnapshotMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>DBSnapshot</code> instances.</p>
   */
  DBSnapshots?: DBSnapshot[];
}

export namespace DBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshotMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBSnapshotsMessage {
  /**
   * <p>The ID of the DB instance to retrieve the list of DB snapshots for.
   *         This parameter can't be used in conjunction with <code>DBSnapshotIdentifier</code>.
   *         This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with <code>DBInstanceIdentifier</code>.
   *             This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the identifier of an existing DBSnapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p>
   *             </li>
   *          </ul>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>The type of snapshots to be returned. You can specify one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>automated</code> - Return all DB snapshots that have been automatically taken by
   *       Amazon RDS for my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>manual</code> - Return all DB snapshots that have been taken by my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>shared</code> - Return all manual DB snapshots that have been shared to my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>public</code> - Return all DB snapshots that have been marked as public.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>awsbackup</code> - Return the DB snapshots managed by the Amazon Web Services Backup service.</p>
   *                 <p>For information about Amazon Web Services Backup, see the
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html">
   *                         <i>Amazon Web Services Backup Developer Guide.</i>
   *                     </a>
   *                </p>
   *                 <p>The <code>awsbackup</code> type does not apply to Aurora.</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual snapshots are
   *       returned. Shared and public DB snapshots are not included in the returned results by default.
   *       You can include shared snapshots with these results by enabling the <code>IncludeShared</code>
   *       parameter. You can include public snapshots with these results by enabling the
   *       <code>IncludePublic</code> parameter.</p>
   *         <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values
   *       of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is
   *       set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to
   *       <code>public</code>.</p>
   */
  SnapshotType?: string;

  /**
   * <p>A filter that specifies one or more DB snapshots to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *               instance Amazon Resource Names (ARNs).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>db-snapshot-id</code> - Accepts DB snapshot identifiers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>dbi-resource-id</code> - Accepts identifiers of source DB instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>snapshot-type</code> - Accepts types of DB snapshots.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>engine</code> - Accepts names of database engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         <code>DescribeDBSnapshots</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A value that indicates whether to include shared manual DB cluster snapshots
   *           from other Amazon Web Services accounts that this Amazon Web Services account has been given
   *           permission to copy or restore. By default, these snapshots are not included.</p>
   *         <p>You can give an Amazon Web Services account permission to restore a manual DB snapshot from
   *     another Amazon Web Services account by using the <code>ModifyDBSnapshotAttribute</code> API action.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>A value that indicates whether to include manual DB cluster snapshots that are public and can be copied
   *           or restored by any Amazon Web Services account. By default, the public snapshots are not included.</p>
   *         <p>You can share a manual DB snapshot as public by using the <a>ModifyDBSnapshotAttribute</a> API.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  IncludePublic?: boolean;

  /**
   * <p>A specific DB resource ID to describe.</p>
   */
  DbiResourceId?: string;
}

export namespace DescribeDBSnapshotsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSnapshotsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action.</p>
 */
export interface DBSubnetGroupMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>DBSubnetGroup</code> instances.</p>
   */
  DBSubnetGroups?: DBSubnetGroup[];
}

export namespace DBSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * <p>The name of the DB subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous DescribeDBSubnetGroups request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBSubnetGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSubnetGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * <p>The name of the DB cluster parameter group family to return engine parameter information for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultClusterParameters</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeEngineDefaultClusterParametersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineDefaultClusterParametersMessage): any => ({
    ...obj,
  });
}

export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * <p>Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.</p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultClusterParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineDefaultClusterParametersResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * <p>The name of the DB parameter group family.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>aurora5.6</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-mysql5.7</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-mysql8.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql10</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql11</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql12</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql13</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb10.2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb10.3</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb10.4</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb10.5</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb10.6</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql5.7</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql8.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres10</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres11</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres12</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres13</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres14</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee-11.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee-12.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee-13.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee-14.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee-15.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex-11.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex-12.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex-13.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex-14.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex-15.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se-11.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se-12.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se-13.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se-14.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se-15.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web-11.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web-12.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web-13.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web-14.0</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web-15.0</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         <code>DescribeEngineDefaultParameters</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeEngineDefaultParametersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineDefaultParametersMessage): any => ({
    ...obj,
  });
}

export interface DescribeEngineDefaultParametersResult {
  /**
   * <p>Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.</p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineDefaultParametersResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>The type of source that is generating the events. For RDS Proxy events, specify <code>db-proxy</code>.</p>
   *         <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> | <code>db-proxy</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];
}

export namespace DescribeEventCategoriesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventCategoriesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Data returned from the <code>DescribeEventCategories</code> operation.</p>
 */
export interface EventCategoriesMessage {
  /**
   * <p>A list of <code>EventCategoriesMap</code> data types.</p>
   */
  EventCategoriesMapList?: EventCategoriesMap[];
}

export namespace EventCategoriesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventCategoriesMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>SourceIdentifier</code> is supplied, <code>SourceType</code> must also be provided.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB instance, a <code>DBInstanceIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB cluster, a <code>DBClusterIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is a DB cluster snapshot, a <code>DBClusterSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is an RDS Proxy, a <code>DBProxyName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The beginning of the time interval to retrieve events for,
   *         specified in ISO 8601 format. For more information about ISO 8601,
   *         go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *         <p>Example: 2009-07-08T18:00Z</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time interval for which to retrieve events,
   *         specified in ISO 8601 format. For more information about ISO 8601,
   *         go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *         <p>Example: 2009-07-08T18:00Z</p>
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes to retrieve events for.</p>
   *         <p>Default: 60</p>
   */
  Duration?: number;

  /**
   * <p>A list of event categories that trigger notifications for a event notification subscription.</p>
   */
  EventCategories?: string[];

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *         DescribeEvents request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeEventsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeEvents</code> action.</p>
 */
export interface EventsMessage {
  /**
   * <p>An optional pagination token provided by a previous
   *             Events request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>Event</code> instances.</p>
   */
  Events?: Event[];
}

export namespace EventsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to describe.</p>
   */
  SubscriptionName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;
}

export namespace DescribeEventSubscriptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventSubscriptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Data returned by the <b>DescribeEventSubscriptions</b> action.</p>
 */
export interface EventSubscriptionsMessage {
  /**
   * <p>An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of EventSubscriptions data types.</p>
   */
  EventSubscriptionsList?: EventSubscription[];
}

export namespace EventSubscriptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscriptionsMessage): any => ({
    ...obj,
  });
}

export interface DescribeExportTasksMessage {
  /**
   * <p>The identifier of the snapshot export task to be described.</p>
   */
  ExportTaskIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3.</p>
   */
  SourceArn?: string;

  /**
   * <p>Filters specify one or more snapshot exports to describe. The filters are specified as name-value pairs that define what to
   *             include in the output. Filter names and values are case-sensitive.</p>
   *         <p>Supported filters include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>export-task-identifier</code> - An identifier for the snapshot export task.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>s3-bucket</code> - The Amazon S3 bucket the snapshot is exported to.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>source-arn</code> - The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>status</code> - The status of the export task. Must be lowercase. Valid statuses are the following:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>canceled</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>canceling</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>complete</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>failed</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>in_progress</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>starting</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeExportTasks</code> request.
   *             If you specify this parameter, the response includes only records beyond the marker,
   *             up to the value specified by the <code>MaxRecords</code> parameter.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *             specified value, a pagination token called a marker is included in the response.
   *             You can use the marker in a later <code>DescribeExportTasks</code> request
   *             to retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeExportTasksMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportTasksMessage): any => ({
    ...obj,
  });
}

export interface ExportTasksMessage {
  /**
   * <p>A pagination token that can be used in a later <code>DescribeExportTasks</code>
   *             request. A marker is used for pagination to identify the location to begin output for
   *             the next response of <code>DescribeExportTasks</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Information about an export of a snapshot to Amazon S3.</p>
   */
  ExportTasks?: ExportTask[];
}

export namespace ExportTasksMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTasksMessage): any => ({
    ...obj,
  });
}

export interface DescribeGlobalClustersMessage {
  /**
   * <p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified
   *         <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *        you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If
   *         this parameter is specified, the response includes only records beyond the marker, up to the value
   *         specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeGlobalClustersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalClustersMessage): any => ({
    ...obj,
  });
}

export interface GlobalClustersMessage {
  /**
   * <p>An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The list of global clusters returned by this request.</p>
   */
  GlobalClusters?: GlobalCluster[];
}

export namespace GlobalClustersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalClustersMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOptionGroupOptionsMessage {
  /**
   * <p>A required parameter. Options available for the given engine name are described.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineName: string | undefined;

  /**
   * <p>If specified, filters the results to include only options for the specified major engine version.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeOptionGroupOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOptionGroupOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface OptionGroupOptionsMessage {
  /**
   * <p>List of available option group options.</p>
   */
  OptionGroupOptions?: OptionGroupOption[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace OptionGroupOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroupOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOptionGroupsMessage {
  /**
   * <p>The name of the option group to describe. Can't be supplied together with EngineName or MajorEngineVersion.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous DescribeOptionGroups request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>Filters the list of option groups to only include groups associated with a specific database engine.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineName?: string;

  /**
   * <p>Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified.</p>
   */
  MajorEngineVersion?: string;
}

export namespace DescribeOptionGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOptionGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>List of option groups.</p>
 */
export interface OptionGroups {
  /**
   * <p>List of option groups.</p>
   */
  OptionGroupsList?: OptionGroup[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace OptionGroups {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroups): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * <p>The name of the engine to retrieve DB instance options for.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available offerings
   *           matching the specified license model.</p>
   *         <p>RDS Custom supports only the BYOL licensing model.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The Availability Zone group associated with a Local Zone. Specify this parameter to retrieve available offerings for the Local Zones in the group.</p>
   *         <p>Omit this parameter to show the available offerings in the specified Amazon Web Services Region.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>A value that indicates whether to show only VPC or non-VPC offerings. RDS Custom supports
   *       only VPC offerings.</p>
   *         <p>RDS Custom supports only VPC offerings. If you describe non-VPC offerings for RDS Custom, the output
   *           shows VPC offerings.</p>
   */
  Vpc?: boolean;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeOrderableDBInstanceOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrderableDBInstanceOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action.</p>
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * <p>An <code>OrderableDBInstanceOption</code> structure containing information about orderable options for the DB instance.</p>
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];

  /**
   * <p>An optional pagination token provided by a previous
   *             OrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace OrderableDBInstanceOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderableDBInstanceOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>A filter that specifies one or more resources to return pending maintenance actions for.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list only includes pending maintenance
   *               actions for the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *             instance ARNs. The results list only includes pending maintenance
   *             actions for the DB instances identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribePendingMaintenanceActions</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to a number of records specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribePendingMaintenanceActionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePendingMaintenanceActionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Data returned from the <b>DescribePendingMaintenanceActions</b> action.</p>
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * <p>A list of the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribePendingMaintenanceActions</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to a number of records specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace PendingMaintenanceActionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingMaintenanceActionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReservedDBInstancesMessage {
  /**
   * <p>The reserved DB instance identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID.</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only those reservations matching the specified DB instances class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p>
   *         <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>The product description filter value. Specify this parameter to show only those reservations matching the specified product description.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p>
   *         <p>Valid Values: <code>"Partial Upfront" | "All Upfront" | "No Upfront" </code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>A value that indicates whether to show only those reservations that support Multi-AZ.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The lease identifier filter value. Specify this parameter to show only the reservation that matches the specified lease ID.</p>
   *         <note>
   *             <p>Amazon Web Services Support might request the lease ID for an issue related to a reserved DB instance.</p>
   *         </note>
   */
  LeaseId?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *     If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is
   *           included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeReservedDBInstancesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedDBInstancesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action.</p>
 */
export interface ReservedDBInstanceMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved DB instances.</p>
   */
  ReservedDBInstances?: ReservedDBInstance[];
}

export namespace ReservedDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReservedDBInstancesOfferingsMessage {
  /**
   * <p>The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier.</p>
   *         <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p>
   *         <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>Product description filter value. Specify this parameter to show only the available offerings that contain the specified product description.</p>
   *         <note>
   *             <p>The results show offerings that partially match the filter value.</p>
   *         </note>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p>
   *         <p>Valid Values: <code>"Partial Upfront" | "All Upfront" | "No Upfront" </code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>A value that indicates whether to show only those reservations that support Multi-AZ.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response.
   *     If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is
   *     included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeReservedDBInstancesOfferingsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedDBInstancesOfferingsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action.</p>
 */
export interface ReservedDBInstancesOfferingMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved DB instance offerings.</p>
   */
  ReservedDBInstancesOfferings?: ReservedDBInstancesOffering[];
}

export namespace ReservedDBInstancesOfferingMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstancesOfferingMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeSourceRegionsMessage {
  /**
   * <p>The source Amazon Web Services Region name. For example, <code>us-east-1</code>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid Amazon Web Services Region name.</p>
   *             </li>
   *          </ul>
   */
  RegionName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeSourceRegions</code> request. If this parameter is specified, the response
   *             includes only records beyond the marker, up to the value specified by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];
}

export namespace DescribeSourceRegionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSourceRegionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.</p>
 */
export interface SourceRegionMessage {
  /**
   * <p>An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>SourceRegion</code> instances that contains each source Amazon Web Services Region that the
   *             current Amazon Web Services Region can get a read replica or a DB snapshot from.</p>
   */
  SourceRegions?: SourceRegion[];
}

export namespace SourceRegionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceRegionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeValidDBInstanceModificationsMessage {
  /**
   * <p>The customer identifier or the ARN of your DB instance.</p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace DescribeValidDBInstanceModificationsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeValidDBInstanceModificationsMessage): any => ({
    ...obj,
  });
}

export interface DescribeValidDBInstanceModificationsResult {
  /**
   * <p>Information about valid modifications that you can make to your DB instance.
   *             Contains the result of a successful call to the
   *             <code>DescribeValidDBInstanceModifications</code> action.
   *             You can use this information when you call
   *             <code>ModifyDBInstance</code>.</p>
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}

export namespace DescribeValidDBInstanceModificationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeValidDBInstanceModificationsResult): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element to <code>DownloadDBLogFilePortion</code>.</p>
 */
export interface DownloadDBLogFilePortionDetails {
  /**
   * <p>Entries from the specified log file.</p>
   */
  LogFileData?: string;

  /**
   * <p>A pagination token that can be used in a later <code>DownloadDBLogFilePortion</code> request.</p>
   */
  Marker?: string;

  /**
   * <p>Boolean value that if true, indicates there is more data to be downloaded.</p>
   */
  AdditionalDataPending?: boolean;
}

export namespace DownloadDBLogFilePortionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownloadDBLogFilePortionDetails): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DownloadDBLogFilePortionMessage {
  /**
   * <p>The customer-assigned name of the DB instance that contains the log files you want to list.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the log file to be downloaded.</p>
   */
  LogFileName: string | undefined;

  /**
   * <p>The pagination token provided in the previous request or "0". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines.</p>
   */
  Marker?: string;

  /**
   * <p>The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size.</p>
   *         <p>If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning
   *             or the end of the log file, depending on the value of the Marker parameter.</p>
   *         <ul>
   *             <li>
   *                 <p>If neither Marker or NumberOfLines are specified, the entire log file is returned up to a
   *               maximum of 10000 lines, starting with the most recent log entries first.</p>
   *             </li>
   *             <li>
   *                 <p>If
   *               NumberOfLines is specified and Marker isn't specified, then the most recent lines from the end
   *                     of the log file are returned.</p>
   *             </li>
   *             <li>
   *                 <p>If Marker is specified as "0", then the specified
   *                       number of lines from the beginning of the log file are returned.</p>
   *             </li>
   *             <li>
   *                 <p>You can
   *                         download the log file in blocks of lines by specifying the size of the block using
   *                     the NumberOfLines parameter, and by specifying a value of "0" for the Marker parameter in your
   *                     first request. Include the Marker value returned in the response as the Marker value for the next
   *                     request, continuing until the AdditionalDataPending response element returns false.</p>
   *             </li>
   *          </ul>
   */
  NumberOfLines?: number;
}

export namespace DownloadDBLogFilePortionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownloadDBLogFilePortionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface FailoverDBClusterMessage {
  /**
   * <p>A DB cluster identifier to force a failover for. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB instance to promote to the primary DB instance.</p>
   *         <p>Specify the DB instance identifier for an Aurora Replica or a Multi-AZ readable standby in the DB cluster,
   *         for example <code>mydbcluster-replica1</code>.</p>
   *         <p>This setting isn't supported for RDS for MySQL Multi-AZ DB clusters.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

export namespace FailoverDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverDBClusterMessage): any => ({
    ...obj,
  });
}

export interface FailoverDBClusterResult {
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
  DBCluster?: DBCluster;
}

export namespace FailoverDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverDBClusterResult): any => ({
    ...obj,
  });
}

export interface FailoverGlobalClusterMessage {
  /**
   * <p>Identifier of the Aurora global database (<a>GlobalCluster</a>)
   *     that should be failed over. The identifier is the unique key assigned by
   *     the user when the Aurora global database was created. In other words,
   *     it's the name of the Aurora global database that you want to fail over.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing
   *       <a>GlobalCluster</a> (Aurora global database).</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>Identifier of the secondary Aurora DB cluster that you want to promote to primary for the Aurora
   *        global database (<a>GlobalCluster</a>.) Use the Amazon Resource Name (ARN) for the identifier so that
   *        Aurora can locate the cluster in its Amazon Web Services Region.</p>
   */
  TargetDbClusterIdentifier: string | undefined;
}

export namespace FailoverGlobalClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverGlobalClusterMessage): any => ({
    ...obj,
  });
}

export interface FailoverGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace FailoverGlobalClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverGlobalClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon RDS resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];
}

export namespace ListTagsForResourceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TagListMessage {
  /**
   * <p>List of tags returned by the <code>ListTagsForResource</code> operation.</p>
   */
  TagList?: Tag[];
}

export namespace TagListMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagListMessage): any => ({
    ...obj,
  });
}

export interface ModifyCertificatesMessage {
  /**
   * <p>The new default certificate identifier to override the current one with.</p>
   *         <p>To determine the valid values, use the <code>describe-certificates</code> CLI
   *             command or the <code>DescribeCertificates</code> API operation.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>A value that indicates whether to remove the override for the default certificate.
   *             If the override is removed, the default certificate is the system
   *             default.</p>
   */
  RemoveCustomerOverride?: boolean;
}

export namespace ModifyCertificatesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyCertificatesMessage): any => ({
    ...obj,
  });
}

export interface ModifyCertificatesResult {
  /**
   * <p>A CA certificate for an Amazon Web Services account.</p>
   */
  Certificate?: Certificate;
}

export namespace ModifyCertificatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyCertificatesResult): any => ({
    ...obj,
  });
}

export interface DBClusterCapacityInfo {
  /**
   * <p>A user-supplied DB cluster identifier. This identifier is the unique key that
   *             identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A value that specifies the capacity that the DB cluster scales to next.</p>
   */
  PendingCapacity?: number;

  /**
   * <p>The current capacity of the DB cluster.</p>
   */
  CurrentCapacity?: number;

  /**
   * <p>The number of seconds before a call to <code>ModifyCurrentDBClusterCapacity</code> times out.</p>
   */
  SecondsBeforeTimeout?: number;

  /**
   * <p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either
   *             <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   */
  TimeoutAction?: string;
}

export namespace DBClusterCapacityInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterCapacityInfo): any => ({
    ...obj,
  });
}

export interface ModifyCurrentDBClusterCapacityMessage {
  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DB cluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The DB cluster capacity.</p>
   *         <p>When you change the capacity of a paused Aurora Serverless v1 DB cluster, it automatically resumes.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *             </li>
   *          </ul>
   */
  Capacity?: number;

  /**
   * <p>The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point
   *             to perform seamless scaling before enforcing the timeout action. The default is
   *             300.</p>
   *         <p>Specify a value between 10 and 600 seconds.</p>
   */
  SecondsBeforeTimeout?: number;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *         <p>
   *             <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p>
   *         <p>
   *             <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   */
  TimeoutAction?: string;
}

export namespace ModifyCurrentDBClusterCapacityMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyCurrentDBClusterCapacityMessage): any => ({
    ...obj,
  });
}

export interface ModifyCustomDBEngineVersionMessage {
  /**
   * <p>The DB engine. The only supported value is <code>custom-oracle-ee</code>.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The custom engine version (CEV) that you want to modify. This option is required for
   *             RDS Custom for Oracle, but optional for Amazon RDS. The combination of <code>Engine</code> and
   *             <code>EngineVersion</code> is unique per customer per Amazon Web Services Region.</p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>An optional description of your CEV.</p>
   */
  Description?: string;

  /**
   * <p>The availability status to be assigned to the CEV. Valid values are as follows:</p>
   *         <dl>
   *             <dt>available</dt>
   *             <dd>
   *                     <p>You can use this CEV to create a new RDS Custom DB instance.</p>
   *                 </dd>
   *             <dt>inactive</dt>
   *             <dd>
   *                     <p>You can create a new RDS Custom instance by restoring a DB snapshot with this CEV.
   *                     You can't patch or create new instances with this CEV.</p>
   *                 </dd>
   *          </dl>
   *         <p>You can change any status to any status. A typical reason to change status is to prevent the accidental
   *             use of a CEV, or to make a deprecated CEV eligible for use again. For example, you might change the status
   *             of your CEV from <code>available</code> to <code>inactive</code>, and from <code>inactive</code> back to
   *             <code>available</code>. To change the availability status of the CEV, it must not currently be in use by an
   *             RDS Custom instance, snapshot, or automated backup.</p>
   */
  Status?: CustomEngineVersionStatus | string;
}

export namespace ModifyCustomDBEngineVersionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyCustomDBEngineVersionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBClusterMessage {
  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *         <p>Constraints: This identifier must match the identifier of an existing DB
   *             cluster.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster2</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  NewDBClusterIdentifier?: string;

  /**
   * <p>A value that indicates whether the modifications in this request and
   *       any pending modifications are asynchronously applied
   *       as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB cluster.
   *       If this parameter is disabled, changes to the
   *       DB cluster are applied during the next maintenance window.</p>
   *         <p>The <code>ApplyImmediately</code> parameter only affects the <code>EnableIAMDatabaseAuthentication</code>,
   *       <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values. If the <code>ApplyImmediately</code>
   *       parameter is disabled, then changes to the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>,
   *       and <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are
   *       applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p>
   *         <p>By default, this parameter is disabled.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The number of days for which automated backups are retained. Specify a minimum value of 1.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The port number on which the DB cluster accepts connections.</p>
   *         <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *         <p>Default: The same port as the original DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  Port?: number;

  /**
   * <p>The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group.</p>
   *         <p>DB clusters are associated with a default option group that can't be modified.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled,
   *             using the <code>BackupRetentionPeriod</code> parameter.</p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To view the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow">
   *                 Backup window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora MySQL DB clusters only</p>
   */
  BacktrackWindow?: number;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster. The values
   *             in the list depend on the DB engine being used.</p>
   *             <p>
   *             <b>RDS for MySQL</b>
   *          </p>
   *             <p>Possible values are <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *             <p>
   *             <b>RDS for PostgreSQL</b>
   *          </p>
   *             <p>Possible values are <code>postgresql</code> and <code>upgrade</code>.</p>
   *             <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *             <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *             <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *             <p>Possible value is <code>postgresql</code>.</p>
   *             <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">
   *                 Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *             <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *             Changing this parameter results in an outage. The change is applied during
   *             the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *         <p>To list all of the available engine versions for MySQL 5.6-compatible Aurora, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for Aurora PostgreSQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for RDS for MySQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for RDS for PostgreSQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *         <p>Constraints: You must allow major version upgrades when specifying a value for the
   *                 <code>EngineVersion</code> parameter that is a different major version than the DB
   *             cluster's current version.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>The name of the DB parameter group to apply to all instances of the DB cluster.</p>
   *         <note>
   *             <p>When you apply a parameter group using the <code>DBInstanceParameterGroupName</code> parameter, the DB
   *           cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than
   *              during the next maintenance window.</p>
   *         </note>
   *         <p>Default: The existing name setting</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>The DB parameter group must be in the same DB parameter group family as this DB cluster.</p>
   *             </li>
   *             <li>
   *                 <p>The <code>DBInstanceParameterGroupName</code> parameter is valid in combination with the
   *               <code>AllowMajorVersionUpgrade</code> parameter for a major version upgrade only.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  DBInstanceParameterGroupName?: string;

  /**
   * <p>The Active Directory directory ID to move the DB cluster to.
   *           Specify <code>none</code> to remove the cluster from its current domain.
   *           The domain must be created prior to this operation.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *             in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in <code>serverless</code> DB engine mode.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint
   *             is disabled.</p>
   *         <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *             SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database
   *             from inside the RDS console with the query editor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless v1</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EnableHttpEndpoint?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an
   *       Aurora global database (<a>GlobalCluster</a>). By default, write operations are not allowed on Aurora DB clusters that
   *       are secondary clusters in an Aurora global database.</p>
   *         <p>You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter
   *       enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to
   *       this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is
   *       demoted by the <a>FailoverGlobalCluster</a> API operation, but it does nothing until then.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EnableGlobalWriteForwarding?: boolean;

  /**
   * <p>The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge.
   *             Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.</p>
   *         <p>For the full list of DB instance classes and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">
   *         DB Instance Class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  DBClusterInstanceClass?: string;

  /**
   * <p>The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.</p>
   *         <p>Type: Integer</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *         <p>Valid values: <code>io1</code>
   *          </p>
   *         <p>When specified, a value for the <code>Iops</code> parameter is required.</p>
   *         <p>Default: <code>io1</code>
   *          </p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  StorageType?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated
   *             for each DB instance in the Multi-AZ DB cluster.</p>
   *         <p>For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB cluster.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  Iops?: number;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.
   *             By default, minor engine upgrades are applied automatically.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.
   *             To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p>
   *         <p>If <code>MonitoringRoleArn</code> is specified, also set <code>MonitoringInterval</code>
   *             to a value other than 0.</p>
   *         <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An
   *             example is <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *                 create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0, supply a <code>MonitoringRoleArn</code> value.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether to turn on Performance Insights for the DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">
   *             Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
}

export namespace ModifyDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBClusterResult {
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
  DBCluster?: DBCluster;
}

export namespace ModifyDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterResult): any => ({
    ...obj,
  });
}

export interface ModifyDBClusterEndpointMessage {
  /**
   * <p>The identifier of the endpoint to modify. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];
}

export namespace ModifyDBClusterEndpointMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterEndpointMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This value is stored as a lowercase string.</p>
   *         </note>
   */
  DBClusterParameterGroupName?: string;
}

export namespace DBClusterParameterGroupNameMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterParameterGroupNameMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
   *         <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *         <note>
   *             <p>You can use the <code>immediate</code> value with dynamic parameters only. You can use the
   *               <code>pending-reboot</code> value for both dynamic and static parameters.</p>
   *             <p>When the application method is <code>immediate</code>, changes to dynamic parameters are applied immediately
   *           to the DB clusters associated with the parameter group. When the application method is <code>pending-reboot</code>,
   *           changes to dynamic and static parameters are applied after a reboot without failover to the DB clusters associated with the
   *           parameter group.</p>
   *         </note>
   */
  Parameters: Parameter[] | undefined;
}

export namespace ModifyDBClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *         <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot,
   *             set this value to <code>restore</code>.</p>
   *         <note>
   *             <p>To view the list of attributes available to modify, use the
   *                 <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *         </note>
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account
   *             IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by
   *             any Amazon Web Services account. Do not add the <code>all</code> value for any
   *             manual DB cluster snapshots that contain private information that you don't want available
   *             to all Amazon Web Services accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include
   *             one or more Amazon Web Services account
   *             identifiers, or <code>all</code> to remove authorization for any Amazon Web Services account to copy or
   *             restore the DB cluster snapshot. If you specify <code>all</code>, an Amazon Web Services account whose account ID is
   *             explicitly added to the <code>restore</code> attribute
   *             can still copy or restore a manual DB cluster snapshot.</p>
   */
  ValuesToRemove?: string[];
}

export namespace ModifyDBClusterSnapshotAttributeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterSnapshotAttributeMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
   *             API action.</p>
   *         <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts
   *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace ModifyDBClusterSnapshotAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterSnapshotAttributeResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBInstanceMessage {
  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The new amount of storage in gibibytes (GiB) to allocate for the DB instance.</p>
   *         <p>For MariaDB, MySQL, Oracle, and PostgreSQL,
   *           the value supplied must be at least 10% greater than the current value.
   *           Values that are not at least 10% greater than the existing value are rounded up
   *           so that they are 10% greater than the current value.</p>
   *         <p>For the valid values for allocated storage for each engine,
   *           see <code>CreateDBInstance</code>.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The new compute and memory capacity of the DB instance, for example db.m4.large.
   *           Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>If you modify the DB instance class, an outage occurs during the change.
   *         The change is applied during the next maintenance window,
   *         unless <code>ApplyImmediately</code> is enabled for this request.</p>
   *         <p>This setting doesn't apply to RDS Custom for Oracle.</p>
   *         <p>Default: Uses existing setting</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The new DB subnet group for the DB instance.
   *           You can use this parameter to move your DB instance to a different VPC.
   *
   *
   *           If your DB instance isn't in a VPC, you can also use this parameter to move your DB instance into a VPC.
   *           For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Non-VPC2VPC">Working with a DB instance in a VPC</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Changing the subnet group causes an outage during the change.
   *         The change is applied during the next maintenance window,
   *         unless you enable <code>ApplyImmediately</code>.</p>
   *         <p>This parameter doesn't apply to RDS Custom.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't
   *           result in an outage and the change is asynchronously applied as soon as possible.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match existing DBSecurityGroups.</p>
   *             </li>
   *          </ul>
   */
  DBSecurityGroups?: string[];

  /**
   * <p>A list of Amazon EC2 VPC security groups to authorize on this DB instance. This change is
   *           asynchronously applied as soon as possible.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The associated list of EC2 VPC security groups is managed by
   *           the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match existing VpcSecurityGroupIds.</p>
   *             </li>
   *          </ul>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible,
   *           regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance. By default, this parameter is disabled.</p>
   *         <p>If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage
   *         and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot. Review the table of parameters in
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html">Modifying a DB Instance</a> in the
   *         <i>Amazon RDS User Guide</i> to see the impact of enabling or disabling <code>ApplyImmediately</code> for each modified parameter and to
   *         determine when the changes are applied.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The new password for the master user. The password can include any printable ASCII
   *           character except "/", """, or "@".</p>
   *         <p>Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *         Between the time of the request and the completion of the request,
   *         the <code>MasterUserPassword</code> element exists in the
   *           <code>PendingModifiedValues</code> element of the operation response.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The password for the master user is managed by the DB cluster. For
   *             more information, see <code>ModifyDBCluster</code>.</p>
   *         <p>Default: Uses existing setting</p>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   *         <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 128 characters.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 30 characters.</p>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>Constraints: Must contain from 8 to 128 characters.</p>
   *         <note>
   *             <p>Amazon RDS API actions never return the password,
   *               so this action provides a way to regain access to a primary instance user if the password is lost.
   *               This includes restoring privileges that might have been accidentally revoked.</p>
   *         </note>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name of the DB parameter group to apply to the DB instance.</p>
   *         <p>Changing this setting doesn't result in an outage. The parameter group name itself is changed
   *           immediately, but the actual parameter changes are not applied until you reboot the
   *           instance without failover. In this case, the DB instance isn't rebooted automatically, and the
   *           parameter changes aren't applied during the next maintenance window. However, if you modify
   *           dynamic parameters in the newly associated DB parameter group, these changes are applied
   *           immediately without a reboot.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: Uses existing setting</p>
   *         <p>Constraints: The DB parameter group must be in the same DB parameter group family as the DB instance.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *         <note>
   *             <p>Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance.</p>
   *         </note>
   *         <p>These changes are applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is enabled
   *             for this request. If you change the parameter from one non-zero value to another non-zero value, the change is asynchronously
   *             applied as soon as possible.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The retention period for automated backups is managed by the DB
   *             cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *         <p>Default: Uses existing setting</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>It must be a value from 0 to 35. It can't be set to 0 if the DB instance is a source to
   *               read replicas. It can't be set to 0 or 35 for an RDS Custom for Oracle DB instance.</p>
   *             </li>
   *             <li>
   *                 <p>It can be specified for a MySQL read replica only if the source is running MySQL 5.6 or
   *                     later.</p>
   *             </li>
   *             <li>
   *                 <p>It can be specified for a PostgreSQL read replica only if the source is running PostgreSQL
   *                     9.3.5.</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         as determined by the <code>BackupRetentionPeriod</code> parameter.
   *         Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *         The default is a 30-minute window selected at random from an
   *         8-hour block of time for each Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Backup window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The daily time range for creating automated backups is managed by
   *             the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format hh24:mi-hh24:mi</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Time Coordinated (UTC)</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred maintenance window</p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which
   *             might result in an outage. Changing this parameter doesn't result in an outage, except
   *             in the following situation, and the change is asynchronously applied as soon as
   *             possible. If there are pending actions that cause a reboot, and the maintenance window
   *             is changed to include the current time, then changing this parameter will cause a reboot
   *             of the DB instance. If moving this window to the current time, there must be at least 30
   *             minutes between the current time and end of the window to ensure pending changes are
   *             applied.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Default: Uses existing setting</p>
   *         <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Must be at least 30 minutes</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result
   *           in an outage. The change is applied during the next maintenance window unless the <code>ApplyImmediately</code>
   *           parameter is enabled for this request.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to upgrade to.
   *     Changing this parameter results in an outage and the change
   *     is applied during the next maintenance window
   *     unless the <code>ApplyImmediately</code> parameter is enabled for this request.</p>
   *         <p>For major version upgrades, if a nondefault DB parameter group is currently in use, a
   *             new DB parameter group in the DB parameter group family for the new engine version must
   *             be specified. The new DB parameter group can be the default for that DB parameter group
   *             family.</p>
   *         <p>If you specify only a major version, Amazon RDS will update the DB instance to the
   *           default minor version if the current minor version is lower.
   *           For information about valid engine versions, see <code>CreateDBInstance</code>,
   *           or call <code>DescribeDBEngineVersions</code>.</p>
   *         <p>In RDS Custom for Oracle, this parameter is supported for read replicas only if they are in the
   *           <code>PATCH_DB_FAILURE</code> lifecycle.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't
   *           result in an outage and the change is asynchronously applied as soon as possible.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraints: Major version upgrades must be allowed when specifying a value
   *           for the EngineVersion parameter that is a different major version than the DB instance's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>A value that indicates whether minor version upgrades are applied automatically to the DB instance
   *           during the maintenance window. An outage occurs when all the following conditions are met:</p>
   *         <ul>
   *             <li>
   *                 <p>The automatic upgrade is enabled for the maintenance window.</p>
   *             </li>
   *             <li>
   *                 <p>A newer minor version is available.</p>
   *             </li>
   *             <li>
   *                 <p>RDS has enabled automatic patching for the engine version.</p>
   *             </li>
   *          </ul>
   *         <p>If any of the preceding conditions isn't met, RDS applies the change as soon as possible and
   *       doesn't cause an outage.</p>
   *         <p>For an RDS Custom DB instance, set <code>AutoMinorVersionUpgrade</code>
   *           to <code>false</code>. Otherwise, the operation returns an error.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The license model for the DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *             <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The new Provisioned IOPS (I/O operations per second) value for the RDS instance.</p>
   *         <p>Changing this setting doesn't result in an outage and
   *             the change is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is enabled for this request.
   *           If you are migrating from Provisioned IOPS to standard storage, set this value to 0.
   *           The DB instance will require a reboot for the change in storage type to take effect.</p>
   *         <p>If you choose to migrate your DB instance from using standard storage to using
   *             Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process
   *             can take time. The duration of the migration depends on several factors such as database
   *             load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS
   *             provisioned (if any), and the number of prior scale storage operations. Typical
   *             migration times are under 24 hours, but the process can take up to several days in some
   *             cases. During the migration, the DB instance is available for use, but might experience
   *             performance degradation. While the migration takes place, nightly backups for the
   *             instance are suspended. No other Amazon RDS operations can take place for the instance,
   *             including modifying the instance, rebooting the instance, deleting the instance,
   *             creating a read replica for the instance, and creating a DB snapshot of the instance.</p>
   *         <p>Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL,
   *           the value supplied must be at least 10% greater than the current value.
   *           Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value.</p>
   *         <p>Default: Uses existing setting</p>
   */
  Iops?: number;

  /**
   * <p>A value that indicates the DB instance should be associated with the specified option group.</p>
   *         <p>Changing this parameter doesn't result in an outage, with one exception. If the parameter change results
   *           in an option group that enables OEM, it can cause a brief period, lasting less than a second, during which
   *           new connections are rejected but existing connections aren't interrupted.</p>
   *         <p>The change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter
   *           is enabled for this request.</p>
   *         <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed
   *           from an option group, and that option group can't be removed from a DB instance after
   *           it is associated with a DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance
   *           identifier, an instance reboot occurs immediately if you enable <code>ApplyImmediately</code>, or will occur
   *           during the next maintenance window if you disable Apply Immediately. This value is stored as a lowercase string.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  NewDBInstanceIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *         <p>If you specify Provisioned IOPS (<code>io1</code>),
   *           you must also include a value for the <code>Iops</code> parameter.</p>
   *         <p>If you choose to migrate your DB instance from using standard storage to using
   *             Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process
   *             can take time. The duration of the migration depends on several factors such as database
   *             load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS
   *             provisioned (if any), and the number of prior scale storage operations. Typical
   *             migration times are under 24 hours, but the process can take up to several days in some
   *             cases. During the migration, the DB instance is available for use, but might experience
   *             performance degradation. While the migration takes place, nightly backups for the
   *             instance are suspended. No other Amazon RDS operations can take place for the instance,
   *             including modifying the instance, rebooting the instance, deleting the instance,
   *             creating a read replica for the instance, and creating a DB snapshot of the instance.</p>
   *         <p>Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *         <p>Default: <code>io1</code> if the <code>Iops</code> parameter
   *           is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>Specifies the certificate to associate with the DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The Active Directory directory ID to move the DB instance to.
   *           Specify <code>none</code> to remove the instance from its current domain.
   *           You must create the domain before this operation. Currently, you can create only MySQL, Microsoft SQL
   *           Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *           Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  Domain?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this
   *           value for an Aurora DB instance has no effect on the DB cluster setting. For more
   *           information, see <code>ModifyDBCluster</code>.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *           for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0, which is the default.</p>
   *         <p>If <code>MonitoringRoleArn</code> is specified, set <code>MonitoringInterval</code> to a value other than 0.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *         <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values
   *           specified for options in the option group for the DB instance.</p>
   *         <p>If you change the <code>DBPortNumber</code> value, your database restarts regardless of
   *           the value of the <code>ApplyImmediately</code> parameter.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>Default: <code>3306</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>Default: <code>3306</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>Default: <code>5432</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>Type: Integer</p>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>Default: <code>1521</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   *         <p>
   *             <b>SQL Server</b>
   *          </p>
   *         <p>Default: <code>1433</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code> except <code>1234</code>, <code>1434</code>,
   *                 <code>3260</code>, <code>3343</code>, <code>3389</code>, <code>47001</code>, and
   *                 <code>49152-49156</code>.</p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Default: <code>3306</code>
   *          </p>
   *         <p>Valid values: <code>1150-65535</code>
   *          </p>
   */
  DBPortNumber?: number;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
   *         <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint
   *           resolves to the private IP address from within the DB cluster's virtual private cloud
   *           (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access
   *           to the DB cluster is ultimately controlled by the security group it uses. That public
   *           access isn't permitted if the security group assigned to the DB cluster doesn't permit
   *           it.</p>
   *         <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *         <p>
   *             <code>PubliclyAccessible</code> only applies to DB instances in a VPC. The DB instance must be part of a
   *           public subnet and <code>PubliclyAccessible</code> must be enabled for it to be publicly accessible.</p>
   *         <p>Changes to the <code>PubliclyAccessible</code> parameter are applied immediately regardless
   *       of the value of the <code>ApplyImmediately</code> parameter.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *       example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *           create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0, supply a <code>MonitoringRoleArn</code>
   *           value.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: 1</p>
   *         <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *         <p>This setting doesn't apply to Amazon Aurora. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB
   *           cluster.</p>
   *         <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide.</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a
   *             specific DB instance.</p>
   *         <p>A change to the <code>CloudwatchLogsExportConfiguration</code> parameter is always applied to the DB instance
   *             immediately. Therefore, the <code>ApplyImmediately</code> parameter has no effect.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *         <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>A value that indicates whether the DB instance is restarted when you rotate your
   *             SSL/TLS certificate.</p>
   *         <p>By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate
   *             is not updated until the DB instance is restarted.</p>
   *         <important>
   *             <p>Set this parameter only if you are <i>not</i> using SSL/TLS to connect to the DB instance.</p>
   *         </important>
   *         <p>If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your
   *             DB engine to rotate your SSL/TLS certificate:</p>
   *         <ul>
   *             <li>
   *                 <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see
   *                     <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *                         Rotating Your SSL/TLS Certificate.</a> in the <i>Amazon RDS User Guide.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see
   *                     <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *                         Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *             </li>
   *          </ul>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  CertificateRotationRestart?: boolean;

  /**
   * <p>A value that sets the open mode of a replica database to either mounted or read-only.</p>
   *         <note>
   *             <p>Currently, this parameter is only supported for Oracle DB instances.</p>
   *         </note>
   *         <p>Mounted DB replicas are included in Oracle Enterprise Edition. The main use case for
   *             mounted replicas is cross-Region disaster recovery. The primary database doesn't use
   *             Active Data Guard to transmit information to the mounted replica. Because it doesn't
   *             accept user connections, a mounted replica can't serve a read-only workload.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Working with Oracle Read Replicas for Amazon RDS</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  ReplicaMode?: ReplicaMode | string;

  /**
   * <p>A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *         <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   */
  EnableCustomerOwnedIp?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  AwsBackupRecoveryPointArn?: string;

  /**
   * <p>The automation mode of the RDS Custom DB instance: <code>full</code> or <code>all paused</code>.
   *             If <code>full</code>, the DB instance automates monitoring and instance recovery. If
   *             <code>all paused</code>, the instance pauses automation for the duration set by
   *             <code>ResumeFullAutomationModeMinutes</code>.</p>
   */
  AutomationMode?: AutomationMode | string;

  /**
   * <p>The number of minutes to pause the automation. When the time period ends, RDS Custom resumes
   *             full automation. The minimum value is <code>60</code> (default). The maximum value is <code>1,440</code>.</p>
   */
  ResumeFullAutomationModeMinutes?: number;

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
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  NetworkType?: string;
}

export namespace ModifyDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace ModifyDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the
 *         <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action.</p>
 */
export interface DBParameterGroupNameMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;
}

export namespace DBParameterGroupNameMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroupNameMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing <code>DBParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names, values, and the application methods for the parameter update. At least one parameter name, value, and
   *           application method must be supplied; later arguments are optional. A maximum of 20 parameters can be modified in a single request.</p>
   *         <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *         <p>You can use the <code>immediate</code> value with dynamic parameters only. You can use the <code>pending-reboot</code> value for both dynamic
   *           and static parameters.</p>
   *         <p>When the application method is <code>immediate</code>, changes to dynamic parameters are applied immediately to the DB instances associated with
   *           the parameter group.</p>
   *         <p>When the application method is <code>pending-reboot</code>, changes to dynamic and static parameters are applied after a reboot without failover
   *           to the DB instances associated with the parameter group.</p>
   *         <note>
   *             <p>You can't use <code>pending-reboot</code> with dynamic parameters on RDS for SQL Server DB instances. Use <code>immediate</code>.</p>
   *         </note>
   *         <p>For more information on modifying DB parameters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html">Working
   *           with DB parameter groups</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Parameters: Parameter[] | undefined;
}

export namespace ModifyDBParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyRequest {
  /**
   * <p>The identifier for the <code>DBProxy</code> to modify.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The new identifier for the <code>DBProxy</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewDBProxyName?: string;

  /**
   * <p>The new authentication settings for the <code>DBProxy</code>.</p>
   */
  Auth?: UserAuthConfig[];

  /**
   * <p>Whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't
   *         use TLS.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
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
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.</p>
   */
  RoleArn?: string;

  /**
   * <p>The new list of security groups for the <code>DBProxy</code>.</p>
   */
  SecurityGroups?: string[];
}

export namespace ModifyDBProxyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyRequest): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyResponse {
  /**
   * <p>The <code>DBProxy</code> object representing the new settings for the proxy.</p>
   */
  DBProxy?: DBProxy;
}

export namespace ModifyDBProxyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyResponse): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyEndpointRequest {
  /**
   * <p>The name of the DB proxy sociated with the DB proxy endpoint that you want to modify.</p>
   */
  DBProxyEndpointName: string | undefined;

  /**
   * <p>The new identifier for the <code>DBProxyEndpoint</code>. An identifier must
   *         begin with a letter and must contain only ASCII letters, digits, and hyphens; it
   *         can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewDBProxyEndpointName?: string;

  /**
   * <p>The VPC security group IDs for the DB proxy endpoint. When the DB proxy endpoint
   *         uses a different VPC than the original proxy, you also specify a different
   *         set of security group IDs than for the original proxy.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace ModifyDBProxyEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyEndpointRequest): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyEndpointResponse {
  /**
   * <p>The <code>DBProxyEndpoint</code> object representing the new settings for the DB proxy endpoint.</p>
   */
  DBProxyEndpoint?: DBProxyEndpoint;
}

export namespace ModifyDBProxyEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyEndpointResponse): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyTargetGroupRequest {
  /**
   * <p>The name of the new target group to assign to the proxy.</p>
   */
  TargetGroupName: string | undefined;

  /**
   * <p>The name of the new proxy to which to assign the target group.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The settings that determine the size and behavior of the connection pool for the target group.</p>
   */
  ConnectionPoolConfig?: ConnectionPoolConfiguration;

  /**
   * <p>The new name for the modified <code>DBProxyTarget</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewName?: string;
}

export namespace ModifyDBProxyTargetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyTargetGroupRequest): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyTargetGroupResponse {
  /**
   * <p>The settings of the modified <code>DBProxyTarget</code>.</p>
   */
  DBProxyTargetGroup?: DBProxyTargetGroup;
}

export namespace ModifyDBProxyTargetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyTargetGroupResponse): any => ({
    ...obj,
  });
}

export interface ModifyDBSnapshotMessage {
  /**
   * <p>The identifier of the DB snapshot to modify.</p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The engine version to upgrade the DB snapshot to.</p>
   *         <p>The following are the database engines and engine versions that are available when you upgrade a DB snapshot.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>5.5.46</code> (supported for 5.1 DB snapshots)</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>12.1.0.2.v8</code>  (supported for 12.1.0.1 DB snapshots)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>11.2.0.4.v12</code> (supported for 11.2.0.2 DB snapshots)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>11.2.0.4.v11</code> (supported for 11.2.0.3 DB snapshots)</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>For the list of engine versions that are available for upgrading a DB snapshot, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.PostgreSQL.html#USER_UpgradeDBInstance.PostgreSQL.MajorVersion">
   *               Upgrading the PostgreSQL DB Engine for Amazon RDS</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The option group to identify with the upgraded DB snapshot.</p>
   *         <p>You can specify this parameter when you upgrade an Oracle DB snapshot.
   *             The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG">Option group considerations</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  OptionGroupName?: string;
}

export namespace ModifyDBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSnapshotMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.</p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace ModifyDBSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBSnapshotAttributeMessage {
  /**
   * <p>The identifier for the DB snapshot to modify the attributes for.</p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the DB snapshot attribute to modify.</p>
   *         <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB snapshot,
   *       set this value to <code>restore</code>.</p>
   *         <note>
   *             <p>To view the list of attributes available to modify, use the
   *               <a>DescribeDBSnapshotAttributes</a> API action.</p>
   *         </note>
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of DB snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To authorize other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account
   *       IDs, or <code>all</code> to make the manual DB snapshot restorable by
   *       any Amazon Web Services account. Do not add the <code>all</code> value for any
   *       manual DB snapshots that contain private information that you don't want available
   *       to all Amazon Web Services accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * <p>A list of DB snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include
   *       one or more Amazon Web Services account
   *       identifiers, or <code>all</code> to remove authorization for any Amazon Web Services account to copy or
   *       restore the DB snapshot. If you specify <code>all</code>, an Amazon Web Services account whose
   *       account ID is explicitly added to the <code>restore</code> attribute
   *       can still copy or restore the manual DB snapshot.</p>
   */
  ValuesToRemove?: string[];
}

export namespace ModifyDBSnapshotAttributeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSnapshotAttributeMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBSnapshotAttributeResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *         <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}

export namespace ModifyDBSnapshotAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSnapshotAttributeResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.
   *           You can't modify the default subnet group.</p>
   *         <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The EC2 subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace ModifyDBSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBSubnetGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB subnet group.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSubnetGroups</code> action.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace ModifyDBSubnetGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. For RDS Proxy events, specify <code>db-proxy</code>. If this value isn't specified, all events are returned.</p>
   *         <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> | <code>db-proxy</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>A list of event categories for a source type (<code>SourceType</code>) that you want to subscribe to.
   *             You can see a list of the categories for a given source type
   *             in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i>
   *             or by using the <code>DescribeEventCategories</code> operation.</p>
   */
  EventCategories?: string[];

  /**
   * <p>A value that indicates whether to activate the subscription.</p>
   */
  Enabled?: boolean;
}

export namespace ModifyEventSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface ModifyEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionResult): any => ({
    ...obj,
  });
}

export interface ModifyGlobalClusterMessage {
  /**
   * <p>The DB cluster identifier for the global cluster being modified. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing global database cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>The new cluster identifier for the global database cluster when modifying a global database cluster.
   *         This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster2</code>
   *          </p>
   */
  NewGlobalClusterIdentifier?: string;

  /**
   * <p>Indicates if the global database cluster has deletion protection enabled. The global database cluster
   *         can't be deleted when deletion protection is enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *           Changing this parameter results in an outage. The change is applied during
   *           the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *         <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *         <p>Constraints: You must allow major version upgrades when specifying a value for the
   *                 <code>EngineVersion</code> parameter that is a different major version than the DB
   *             cluster's current version.</p>
   *         <p>If you upgrade the major version of a global database, the cluster and DB instance parameter
   *         groups are set to the default parameter groups for the new version. Apply any custom parameter
   *         groups after completing the upgrade.</p>
   */
  AllowMajorVersionUpgrade?: boolean;
}

export namespace ModifyGlobalClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyGlobalClusterMessage): any => ({
    ...obj,
  });
}

export interface ModifyGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace ModifyGlobalClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyGlobalClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyOptionGroupMessage {
  /**
   * <p>The name of the option group to be modified.</p>
   *         <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName: string | undefined;

  /**
   * <p>Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration.</p>
   */
  OptionsToInclude?: OptionConfiguration[];

  /**
   * <p>Options in this list are removed from the option group.</p>
   */
  OptionsToRemove?: string[];

  /**
   * <p>A value that indicates whether to apply the change immediately or during the next maintenance window for each instance associated with the option group.</p>
   */
  ApplyImmediately?: boolean;
}

export namespace ModifyOptionGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyOptionGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyOptionGroupResult {
  /**
   * <p></p>
   */
  OptionGroup?: OptionGroup;
}

export namespace ModifyOptionGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyOptionGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PromoteReadReplicaMessage {
  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing read replica DB instance.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be a value from 0 to 35.</p>
   *             </li>
   *             <li>
   *                 <p>Can't be set to 0 if the DB instance is a source to read replicas.</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         using the <code>BackupRetentionPeriod</code> parameter.</p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html">
   *             Adjusting the Preferred Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;
}

export namespace PromoteReadReplicaMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteReadReplicaMessage): any => ({
    ...obj,
  });
}

export interface PromoteReadReplicaResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace PromoteReadReplicaResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteReadReplicaResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PromoteReadReplicaDBClusterMessage {
  /**
   * <p>The identifier of the DB cluster read replica to promote. This parameter isn't
   *             case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DB cluster read replica.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-replica1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace PromoteReadReplicaDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteReadReplicaDBClusterMessage): any => ({
    ...obj,
  });
}

export interface PromoteReadReplicaDBClusterResult {
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
  DBCluster?: DBCluster;
}

export namespace PromoteReadReplicaDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteReadReplicaDBClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PurchaseReservedDBInstancesOfferingMessage {
  /**
   * <p>The ID of the Reserved DB instance offering to purchase.</p>
   *         <p>Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706</p>
   */
  ReservedDBInstancesOfferingId: string | undefined;

  /**
   * <p>Customer-specified identifier to track this reservation.</p>
   *         <p>Example: myreservationID</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The number of instances to reserve.</p>
   *         <p>Default: <code>1</code>
   *          </p>
   */
  DBInstanceCount?: number;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace PurchaseReservedDBInstancesOfferingMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseReservedDBInstancesOfferingMessage): any => ({
    ...obj,
  });
}

export interface PurchaseReservedDBInstancesOfferingResult {
  /**
   * <p>This data type is used as a response element in the
   *             <code>DescribeReservedDBInstances</code> and
   *             <code>PurchaseReservedDBInstancesOffering</code> actions.</p>
   */
  ReservedDBInstance?: ReservedDBInstance;
}

export namespace PurchaseReservedDBInstancesOfferingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseReservedDBInstancesOfferingResult): any => ({
    ...obj,
  });
}

export interface RebootDBClusterMessage {
  /**
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace RebootDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootDBClusterMessage): any => ({
    ...obj,
  });
}

export interface RebootDBClusterResult {
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
  DBCluster?: DBCluster;
}

export namespace RebootDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootDBClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RebootDBInstanceMessage {
  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>A value that indicates whether the reboot is conducted through a Multi-AZ failover.</p>
   *         <p>Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ.</p>
   */
  ForceFailover?: boolean;
}

export namespace RebootDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface RebootDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace RebootDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootDBInstanceResult): any => ({
    ...obj,
  });
}

export interface RegisterDBProxyTargetsRequest {
  /**
   * <p>The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code>.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>One or more DB instance identifiers.</p>
   */
  DBInstanceIdentifiers?: string[];

  /**
   * <p>One or more DB cluster identifiers.</p>
   */
  DBClusterIdentifiers?: string[];
}

export namespace RegisterDBProxyTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterDBProxyTargetsRequest): any => ({
    ...obj,
  });
}

export interface RegisterDBProxyTargetsResponse {
  /**
   * <p>One or more <code>DBProxyTarget</code> objects that are created when you register targets with a target group.</p>
   */
  DBProxyTargets?: DBProxyTarget[];
}

export namespace RegisterDBProxyTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterDBProxyTargetsResponse): any => ({
    ...obj,
  });
}

export interface RemoveFromGlobalClusterMessage {
  /**
   * <p>The cluster identifier to detach from the Aurora global database cluster.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster.</p>
   */
  DbClusterIdentifier?: string;
}

export namespace RemoveFromGlobalClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFromGlobalClusterMessage): any => ({
    ...obj,
  });
}

export interface RemoveFromGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace RemoveFromGlobalClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFromGlobalClusterResult): any => ({
    ...obj,
  });
}

export interface RemoveRoleFromDBClusterMessage {
  /**
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example
   *         <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be disassociated from.
   *             For information about supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;
}

export namespace RemoveRoleFromDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveRoleFromDBClusterMessage): any => ({
    ...obj,
  });
}

export interface RemoveRoleFromDBInstanceMessage {
  /**
   * <p>The name of the DB instance to disassociate the IAM role from.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance,
   *             for example, <code>arn:aws:iam::123456789012:role/AccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be disassociated from.
   *             For information about supported feature names, see <code>DBEngineVersion</code>.</p>
   */
  FeatureName: string | undefined;
}

export namespace RemoveRoleFromDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveRoleFromDBInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to remove a source identifier from.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b>
   *             for a DB instance or the name of a security group.</p>
   */
  SourceIdentifier: string | undefined;
}

export namespace RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveSourceIdentifierFromSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveSourceIdentifierFromSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A value that indicates whether to reset all parameters in the DB cluster parameter group
   *         to their default values. You can't use this parameter if there
   *         is a list of parameter names specified for the <code>Parameters</code> parameter.</p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this
   *         parameter if the <code>ResetAllParameters</code> parameter is enabled.</p>
   */
  Parameters?: Parameter[];
}

export namespace ResetDBClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResetDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the name of an existing <code>DBParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>A value that indicates whether to reset all parameters in the DB parameter group to default values.
   *           By default, all parameters in the DB parameter group are reset to default values.</p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code>
   *             name and <code>ResetAllParameters</code> parameters. To reset specific parameters,
   *             provide a list of the following: <code>ParameterName</code> and
   *             <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single
   *             request.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code>
   *          </p>
   *         <p>You can use the immediate value with dynamic parameters only. You can use
   *             the <code>pending-reboot</code> value for both dynamic and static parameters, and changes
   *             are applied when DB instance reboots.</p>
   *         <p>
   *             <b>MariaDB</b>
   *          </p>
   *         <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code>
   *          </p>
   *         <p>You can use the immediate value with dynamic parameters only. You can use
   *       the <code>pending-reboot</code> value for both dynamic and static parameters, and changes
   *       are applied when DB instance reboots.</p>
   *         <p>
   *             <b>Oracle</b>
   *          </p>
   *         <p>Valid Values (for Apply method): <code>pending-reboot</code>
   *          </p>
   */
  Parameters?: Parameter[];
}

export namespace ResetDBParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetDBParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterFromS3Message {
  /**
   * <p>A list of Availability Zones (AZs) where instances in the restored DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>The database name for the restored DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate
   *             with the restored DB cluster. If this argument is omitted, <code>default.aurora5.6</code> is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with the restored DB cluster.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A DB subnet group to associate with the restored DB cluster.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *         <p>Valid Values: <code>aurora</code> (for MySQL 5.6-compatible Aurora), <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora), and <code>aurora-postgresql</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *         <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *         <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>, <code>8.0.mysql_aurora.3.01.0</code>
   *          </p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *         <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the instances in the restored DB cluster accept connections.</p>
   *         <p>Default: <code>3306</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the restored DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername: string | undefined;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword: string | undefined;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified option group.</p>
   *         <p>Permanent options can't be removed from an option group. An option group can't be removed from a
   *             DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled
   *             using the <code>BackupRetentionPeriod</code> parameter.</p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To view the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow">
   *                 Backup window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>A value that indicates whether the restored DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB cluster.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>If the StorageEncrypted parameter is enabled, and you do
   *             not specify a value for the <code>KmsKeyId</code> parameter, then
   *             Amazon RDS will use your default KMS key. There is a
   *             default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different
   *             default KMS key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The identifier for the database engine that was backed up to create the files stored in the
   *             Amazon S3 bucket.</p>
   *         <p>Valid values: <code>mysql</code>
   *          </p>
   */
  SourceEngine: string | undefined;

  /**
   * <p>The version of the database that the backup files were created from.</p>
   *         <p>MySQL versions 5.5, 5.6, and 5.7 are supported.</p>
   *         <p>Example: <code>5.6.40</code>, <code>5.7.28</code>
   *          </p>
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster.
   *         If you do not specify a <b>SourceS3Prefix</b> value, then the Amazon Aurora DB cluster is
   *         created by using all of the files in the Amazon S3 bucket.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that authorizes
   *         Amazon RDS to access the Amazon S3 bucket on your behalf.</p>
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <note>
   *             <p>Currently, Backtrack is only supported for Aurora MySQL DB clusters.</p>
   *         </note>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used.</p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *         <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *         <p>Possible value is <code>postgresql</code>.</p>
   *         <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB cluster in.
   *           The domain must be created prior to this operation.</p>
   *         <p>For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster.
   *         For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *         in the <i>Amazon Aurora User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
}

export namespace RestoreDBClusterFromS3Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterFromS3Message): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterFromS3Result {
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
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromS3Result {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterFromS3Result): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the restored DB
   *             cluster can be created.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot.
   *             This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-snapshot-id</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *         <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB
   *             cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing Snapshot.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The database engine to use for the new DB cluster.</p>
   *         <p>Default: The same as source</p>
   *         <p>Constraint: Must be compatible with the engine of the source</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   *         <p>To list all of the available engine versions for MySQL 5.6-compatible Aurora, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for Aurora PostgreSQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for RDS for MySQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for RDS for PostgreSQL, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *         <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html">MySQL on Amazon RDS Versions</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *         <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html">Amazon Aurora PostgreSQL releases and engine versions</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   *         <p>
   *             <b>MySQL</b>
   *          </p>
   *         <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">MySQL on Amazon RDS Versions</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *         <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts">Amazon RDS for PostgreSQL versions and extensions</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *         <p>Constraints: This value must be <code>1150-65535</code>
   *          </p>
   *         <p>Default: The same port as the original DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  Port?: number;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DB subnet group.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The database name for the restored DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the option group to use for the restored DB cluster.</p>
   *         <p>DB clusters are associated with a default option group that can't be modified.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from a DB
   *             snapshot or DB cluster snapshot.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *           To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>When you don't specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in
   *                     <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster
   *                     is encrypted using the KMS key that was used to encrypt the DB snapshot or DB
   *                     cluster snapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in
   *                     <code>SnapshotIdentifier</code> isn't encrypted, then the restored DB cluster
   *                     isn't encrypted.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <note>
   *             <p>Currently, Backtrack is only supported for Aurora MySQL DB clusters.</p>
   *         </note>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  BacktrackWindow?: number;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.
   *             The values in the list depend on the DB engine being used.</p>
   *         <p>
   *             <b>RDS for MySQL</b>
   *          </p>
   *         <p>Possible values are <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>RDS for PostgreSQL</b>
   *          </p>
   *         <p>Possible values are <code>postgresql</code> and <code>upgrade</code>.</p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *         <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *         <p>Possible value is <code>postgresql</code>.</p>
   *         <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide.</i>.</p>
   *         <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html">
   *             CreateDBCluster</a>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EngineMode?: string;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster. If this
   *             argument is omitted, the default DB cluster parameter group for the specified engine is
   *             used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB cluster in.
   *            The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL
   *            Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *             Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge.
   *             Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.</p>
   *         <p>For the full list of DB instance classes, and availability for your engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  DBClusterInstanceClass?: string;

  /**
   * <p>Specifies the storage type to be associated with the each DB instance in the Multi-AZ DB cluster.</p>
   *         <p>Valid values: <code>io1</code>
   *          </p>
   *         <p>When specified, a value for the <code>Iops</code> parameter is required.</p>
   *         <p>Default: <code>io1</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  StorageType?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for
   *             each DB instance in the Multi-AZ DB cluster.</p>
   *         <p>For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  Iops?: number;

  /**
   * <p>A value that indicates whether the DB cluster is publicly accessible.</p>
   *         <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address
   *             from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC.
   *             Access to the DB cluster is ultimately controlled by the security group it uses.
   *             That public access is not permitted if the security group assigned to the DB cluster doesn't permit it.</p>
   *         <p>When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.</p>
   *         <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p>
   *         <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *         <ul>
   *             <li>
   *                 <p>If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                 <p>If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *         <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *         <ul>
   *             <li>
   *                 <p>If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                 <p>If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
}

export namespace RestoreDBClusterFromSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterFromSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterFromSnapshotResult {
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
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterFromSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * <p>The name of the new DB cluster to be created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The type of restore to be performed. You can specify one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>full-copy</code> - The new DB cluster is restored as a full copy of the
   *                 source DB cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>copy-on-write</code> - The new DB cluster is restored as a clone of the
   *                 source DB cluster.</p>
   *             </li>
   *          </ul>
   *         <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p>
   *         <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is
   *             restored as a full copy of the source DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  RestoreType?: string;

  /**
   * <p>The identifier of the source DB cluster from which to restore.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * <p>The date and time to restore the DB cluster to.</p>
   *         <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                 <p>Must be specified if <code>UseLatestRestorableTime</code> parameter isn't provided</p>
   *             </li>
   *             <li>
   *                 <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p>
   *             </li>
   *             <li>
   *                 <p>Can't be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>2015-03-07T23:45:00Z</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  RestoreToTime?: Date;

  /**
   * <p>A value that indicates whether to restore the DB cluster to the latest
   *             restorable backup time. By default, the DB cluster isn't restored to the latest
   *             restorable backup time.</p>
   *         <p>Constraints: Can't be specified if <code>RestoreToTime</code> parameter is provided.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *         <p>Constraints: A value from <code>1150-65535</code>.</p>
   *         <p>Default: The default port for the engine.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  Port?: number;

  /**
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the option group for the new DB cluster.</p>
   *         <p>DB clusters are associated with a default option group that can't be modified.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *           To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different from the
   *           KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key
   *           identified by the <code>KmsKeyId</code> parameter.</p>
   *         <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p>
   *             </li>
   *             <li>
   *                 <p>If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.</p>
   *             </li>
   *          </ul>
   *         <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that isn't encrypted, then the restore request
   *       is rejected.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora MySQL DB clusters only</p>
   */
  BacktrackWindow?: number;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used.</p>
   *         <p>
   *             <b>RDS for MySQL</b>
   *          </p>
   *         <p>Possible values are <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>RDS for PostgreSQL</b>
   *          </p>
   *         <p>Possible values are <code>postgresql</code> and <code>upgrade</code>.</p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *         <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, and <code>slowquery</code>.</p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *         <p>Possible value is <code>postgresql</code>.</p>
   *         <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide.</i>.</p>
   *         <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster.
   *             If this argument is omitted, the default DB cluster parameter group for the specified engine is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   *         <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB cluster in.
   *           The domain must be created prior to this operation.</p>
   *         <p>For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster.
   *         For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *         in the <i>Amazon Aurora User Guide</i>.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>The engine mode of the new cluster. Specify <code>provisioned</code> or <code>serverless</code>,
   *       depending on the type of the cluster you are creating. You can create an Aurora Serverless v1 clone
   *       from a provisioned cluster, or a provisioned clone from an Aurora Serverless v1 cluster. To create a clone
   *       that is an Aurora Serverless v1 cluster, the original cluster must be an Aurora Serverless v1 cluster or
   *       an encrypted provisioned cluster.</p>
   *         <p>Valid for: Aurora DB clusters only</p>
   */
  EngineMode?: string;

  /**
   * <p>The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster,
   *             for example db.m6g.xlarge. Not all DB instance classes are available in all Amazon Web Services
   *             Regions, or for all database engines.</p>
   *         <p>For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB instance class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  DBClusterInstanceClass?: string;

  /**
   * <p>Specifies the storage type to be associated with the each DB instance in the Multi-AZ DB cluster.</p>
   *         <p>Valid values: <code>io1</code>
   *          </p>
   *         <p>When specified, a value for the <code>Iops</code> parameter is required.</p>
   *         <p>Default: <code>io1</code>
   *          </p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  StorageType?: string;

  /**
   * <p>A value that indicates whether the DB cluster is publicly accessible.</p>
   *         <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address
   *             from within the DB cluster's virtual private cloud (VPC). It resolves
   *             to the public IP address from outside of the DB cluster's VPC.
   *             Access to the DB cluster is ultimately controlled by the security group it uses.
   *             That public access is not permitted if the security group assigned to the DB cluster doesn't permit it.</p>
   *         <p>When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.</p>
   *         <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p>
   *         <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *         <ul>
   *             <li>
   *                 <p>If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                 <p>If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *         <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *         <ul>
   *             <li>
   *                 <p>If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                 <p>If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for
   *             each DB instance in the Multi-AZ DB cluster.</p>
   *         <p>For information about valid <code>Iops</code> values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS storage to improve performance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance.</p>
   *         <p>Valid for: Multi-AZ DB clusters only</p>
   */
  Iops?: number;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
}

export namespace RestoreDBClusterToPointInTimeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterToPointInTimeMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterToPointInTimeResult {
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
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterToPointInTimeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterToPointInTimeResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreDBInstanceFromDBSnapshotMessage {
  /**
   * <p>Name of the DB instance to create from the DB snapshot. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 numbers, letters, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The identifier for the DB snapshot to restore from.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DBSnapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
   *               must be the ARN of the shared DB snapshot.</p>
   *             </li>
   *          </ul>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example db.m4.large.
   *           Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Default: The same DBInstanceClass as the original DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *         <p>Default: The same port as the original DB instance</p>
   *         <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p>
   *         <p>Default: A random, system-chosen Availability Zone.</p>
   *         <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *         <p>Example: <code>us-east-1a</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The DB subnet group name to use for the new instance.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
   *         <p>When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address
   *           from within the DB instance's virtual private cloud (VPC).
   *           It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled
   *           by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *         <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *         <p>For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A value that indicates whether minor version upgrades are applied automatically to the DB instance
   *           during the maintenance window.</p>
   *         <p>If you restore an RDS Custom DB instance, you must disable this parameter.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for the restored DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: Same as source.</p>
   *         <p>Valid values:  <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The database name for the restored DB instance.</p>
   *         <p>This parameter doesn't apply to the MySQL, PostgreSQL, or MariaDB engines. It also doesn't apply to RDS
   *           Custom DB instances.</p>
   */
  DBName?: string;

  /**
   * <p>The database engine to use for the new instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: The same as source</p>
   *         <p>Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot.</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second.
   *           If this parameter isn't specified, the IOPS value is taken from the backup.
   *           If this parameter is set to 0, the new instance is converted to a non-PIOPS instance.
   *           The conversion takes additional time, though your DB instance is available for connections before the conversion starts.</p>
   *         <p>The provisioned IOPS value must follow the requirements for your database engine.
   *           For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Constraints: Must be an integer greater than 1000.</p>
   */
  Iops?: number;

  /**
   * <p>The name of the option group to be used for the restored DB instance.</p>
   *
   *
   *         <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option
   *         group, and that option group can't be removed from a DB instance after it is associated with a DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *         <p>Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *         <p>If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.</p>
   *         <p>Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p>
   *         <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>Specify the Active Directory directory ID to restore the DB instance in.
   *            The domain/ must be created prior to this operation. Currently, you can create only MySQL, Microsoft SQL
   *            Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *            Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  Domain?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance.</p>
   *         <p>In most cases, tags aren't copied by default. However, when you restore a DB instance from a DB snapshot, RDS checks whether you
   *           specify new tags. If yes, the new tags are added to the restored DB instance. If there are no new tags, RDS looks for the tags from
   *           the source DB instance for the DB snapshot, and then adds those tags to the restored DB instance.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.CopyTags">
   *           Copying tags to DB instance snapshots</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *         <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you don't specify a value for <code>DBParameterGroupName</code>, then RDS uses the default <code>DBParameterGroup</code>
   *             for the specified DB engine.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *         <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   */
  EnableCustomerOwnedIp?: boolean;

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
   *         <p>This setting is required for RDS Custom.</p>
   */
  CustomIamInstanceProfile?: string;

  /**
   * <p>Specifies where automated backups and manual snapshots are stored for the restored DB instance.</p>
   *         <p>Possible values are <code>outposts</code> (Amazon Web Services Outposts) and <code>region</code> (Amazon Web Services Region). The default is <code>region</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working
   *             with Amazon RDS on Amazon Web Services Outposts</a> in the <i>Amazon RDS User Guide</i>.</p>
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
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  NetworkType?: string;
}

export namespace RestoreDBInstanceFromDBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceFromDBSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBInstanceFromDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceFromDBSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceFromDBSnapshotResult): any => ({
    ...obj,
  });
}

export interface RestoreDBInstanceFromS3Message {
  /**
   * <p>The name of the database to create when the DB instance is created.
   *             Follow the naming rules specified in <code>CreateDBInstance</code>.</p>
   */
  DBName?: string;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The amount of storage (in gigabytes) to allocate initially for the DB instance.
   *             Follow the allocation rules specified in <code>CreateDBInstance</code>.</p>
   *         <note>
   *             <p>Be sure to allocate enough memory for your new DB instance
   *                 so that the restore operation can succeed.
   *                 You can also allocate additional memory for future growth.</p>
   *         </note>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the DB instance,
   *             for example db.m4.large.
   *             Not all DB instance classes are available in all Amazon Web Services Regions,
   *             or for all database engines.
   *             For the full list of DB instance classes,
   *             and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class.</p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.</p>
   *         <p>Valid Values:
   *             <code>mysql</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>The name for the master user.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The password for the master user.
   *             The password can include any printable ASCII character except "/", """, or "@".</p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *         <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: string[];

  /**
   * <p>A list of VPC security groups to associate with this DB instance.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The Availability Zone that the DB instance is created in.
   *             For information about Amazon Web Services Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p>
   *         <p>Example: <code>us-east-1d</code>
   *          </p>
   *         <p>Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.
   *             The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The time range each week during which system maintenance can occur,
   *             in Universal Coordinated Time (UTC).
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred backup window.</p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *             for the specified DB engine is used.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The number of days for which automated backups are retained.
   *             Setting this parameter to a positive number enables backups.
   *             For more information, see <code>CreateDBInstance</code>.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The time range each day
   *             during which automated backups are created
   *             if automated backups are enabled.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Backup window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *         <p>Type: Integer</p>
   *         <p>Valid Values: <code>1150</code>-<code>65535</code>
   *          </p>
   *         <p>Default: <code>3306</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.
   *             If the DB instance is a Multi-AZ deployment, you can't set the <code>AvailabilityZone</code> parameter.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to use.
   *             Choose the latest minor version of your database engine.
   *             For information about engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically
   *             to the DB instance during the maintenance window. By default, minor engine upgrades
   *             are not applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The license model for this DB instance.
   *             Use <code>general-public-license</code>.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second)
   *             to allocate initially for the DB instance.
   *             For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Iops?: number;

  /**
   * <p>The name of the option group to associate with this DB instance.
   *             If this argument is omitted, the default option group for the specified engine is used.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
   *         <p>When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address
   *             from within the DB instance's virtual private cloud (VPC).
   *             It resolves to the public IP address from outside of the DB instance's VPC.
   *             Access to the DB instance is ultimately controlled by the security group it uses.
   *             That public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *         <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *         <p>For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A list of tags to associate with this DB instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *         <p>Valid values: <code>standard</code> | <code>gp2</code> | <code>io1</code>
   *          </p>
   *         <p>If you specify <code>io1</code>,
   *             you must also include a value for the <code>Iops</code> parameter.</p>
   *         <p>Default: <code>io1</code>
   *             if the <code>Iops</code> parameter is specified;
   *             otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>A value that indicates whether the new DB instance is encrypted or not.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB instance.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>If the <code>StorageEncrypted</code> parameter is enabled,
   *             and you do not specify a value for the <code>KmsKeyId</code> parameter,
   *             then Amazon RDS will use your default KMS key.
   *             There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds,
   *             between points when Enhanced Monitoring metrics are collected for the DB instance.
   *             To disable collecting Enhanced Monitoring metrics, specify 0.</p>
   *         <p>If <code>MonitoringRoleArn</code> is specified,
   *             then you must also set <code>MonitoringInterval</code> to a value other than 0.</p>
   *         <p>Valid Values: 0, 1, 5, 10, 15, 30, 60</p>
   *         <p>Default: <code>0</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS
   *             to send enhanced monitoring metrics to Amazon CloudWatch Logs.
   *             For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.
   *             For information on creating a monitoring role, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0,
   *             then you must supply a <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *         <p>For more information about IAM database authentication, see
   *          <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *              IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The name of the engine of your source database.</p>
   *         <p>Valid Values:
   *             <code>mysql</code>
   *          </p>
   */
  SourceEngine: string | undefined;

  /**
   * <p>The version of the database that the backup files were created from.</p>
   *         <p>MySQL versions 5.6 and 5.7 are supported.</p>
   *         <p>Example: <code>5.6.40</code>
   *          </p>
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>The name of your Amazon S3 bucket
   *             that contains your database backup file.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The prefix of your Amazon S3 bucket.</p>
   */
  S3Prefix?: string;

  /**
   * <p>An Amazon Web Services Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket.</p>
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide.</i>.</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *         <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   */
  MaxAllocatedStorage?: number;

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
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  NetworkType?: string;
}

export namespace RestoreDBInstanceFromS3Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceFromS3Message): any => ({
    ...obj,
  });
}

export interface RestoreDBInstanceFromS3Result {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceFromS3Result {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceFromS3Result): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreDBInstanceToPointInTimeMessage {
  /**
   * <p>The identifier of the source DB instance from which to restore.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DB instance.</p>
   *             </li>
   *          </ul>
   */
  SourceDBInstanceIdentifier?: string;

  /**
   * <p>The name of the new DB instance to be created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  TargetDBInstanceIdentifier: string | undefined;

  /**
   * <p>The date and time to restore from.</p>
   *         <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                 <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>2009-09-07T23:45:00Z</code>
   *          </p>
   */
  RestoreTime?: Date;

  /**
   * <p>A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance
   *           isn't restored from the latest backup time.</p>
   *         <p>Constraints: Can't be specified if the <code>RestoreTime</code> parameter is provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example
   *                 db.m4.large. Not all DB instance classes are available in all Amazon Web Services
   *             Regions, or for all database engines. For the full list of DB instance classes, and
   *             availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance
   *                 Class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>Default: The same DBInstanceClass as the original DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *         <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *         <p>Default: The same port as the original DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p>
   *         <p>Default: A random, system-chosen Availability Zone.</p>
   *         <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *         <p>Example: <code>us-east-1a</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The DB subnet group name to use for the new instance.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *         <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a
   *           Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
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
   * <p>A value that indicates whether minor version upgrades are applied automatically to the
   *           DB instance during the maintenance window.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for the restored DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: Same as source.</p>
   *         <p>Valid values:  <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The database name for the restored DB instance.</p>
   *         <note>
   *             <p>This parameter isn't supported for the MySQL or MariaDB engines. It also doesn't apply to RDS Custom.</p>
   *         </note>
   */
  DBName?: string;

  /**
   * <p>The database engine to use for the new instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Default: The same as source</p>
   *         <p>Constraint: Must be compatible with the engine of the source</p>
   *         <p>Valid Values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>
   *         <p>Constraints: Must be an integer greater than 1000.</p>
   *         <p>
   *             <b>SQL Server</b>
   *          </p>
   *         <p>Setting the IOPS value for the SQL Server database engine isn't supported.</p>
   */
  Iops?: number;

  /**
   * <p>The name of the option group to be used for the restored DB instance.</p>
   *
   *
   *         <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an
   *         option group, and that option group can't be removed from a DB instance after it is associated with a DB instance</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *         <p>Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *         <p>If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.</p>
   *         <p>Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p>
   *         <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>Specify the Active Directory directory ID to restore the DB instance in.
   *           Create the domain before running this command. Currently, you can create only the MySQL, Microsoft SQL
   *           Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *           Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>For more information about IAM database authentication, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *             IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default processor features.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *                 for the specified DB engine is used.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The resource ID of the source DB instance from which to restore.</p>
   */
  SourceDbiResourceId?: string;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *         <p>For more information about this setting, including limitations that apply to it, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *               Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example,
   *             <code>arn:aws:rds:useast-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE</code>.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   */
  SourceDBInstanceAutomatedBackupsArn?: string;

  /**
   * <p>A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *         <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *         <p>This setting doesn't apply to RDS Custom.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   */
  EnableCustomerOwnedIp?: boolean;

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
   *         <p>This setting is required for RDS Custom.</p>
   */
  CustomIamInstanceProfile?: string;

  /**
   * <p>Specifies where automated backups and manual snapshots are stored for the restored DB instance.</p>
   *         <p>Possible values are <code>outposts</code> (Amazon Web Services Outposts) and <code>region</code> (Amazon Web Services Region). The default is <code>region</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working
   *             with Amazon RDS on Amazon Web Services Outposts</a> in the <i>Amazon RDS User Guide</i>.</p>
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
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  NetworkType?: string;
}

export namespace RestoreDBInstanceToPointInTimeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceToPointInTimeMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBInstanceToPointInTimeResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceToPointInTimeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceToPointInTimeResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RevokeDBSecurityGroupIngressMessage {
  /**
   * <p>The name of the DB security group to revoke ingress from.</p>
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>The IP range to revoke access from.
   *         Must be a valid CIDR range. If <code>CIDRIP</code> is specified,
   *         <code>EC2SecurityGroupName</code>, <code>EC2SecurityGroupId</code> and <code>EC2SecurityGroupOwnerId</code>
   *         can't be provided.</p>
   */
  CIDRIP?: string;

  /**
   * <p>The name of the EC2 security group to revoke access from.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The id of the EC2 security group to revoke access from.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   */
  EC2SecurityGroupId?: string;

  /**
   * <p>The Amazon Web Services account number of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> parameter.
   *         The Amazon Web Services access key ID isn't an acceptable value.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace RevokeDBSecurityGroupIngressMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeDBSecurityGroupIngressMessage): any => ({
    ...obj,
  });
}

export interface RevokeDBSecurityGroupIngressResult {
  /**
   * <p>Contains the details for an Amazon RDS DB security group.</p>
   *         <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.</p>
   */
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace RevokeDBSecurityGroupIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeDBSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

export interface StartActivityStreamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster,
   *             for example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the mode of the database activity stream.
   *             Database events such as a change or access generate an activity stream event.
   *             The database session can handle these events either synchronously or asynchronously.</p>
   */
  Mode: ActivityStreamMode | string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encrypting messages in the database activity stream.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Specifies whether or not the database activity stream is to start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>Specifies whether the database activity stream includes engine-native audit fields. This option only applies
   *         to an Oracle DB instance. By default, no engine-native audit fields are included.</p>
   */
  EngineNativeAuditFieldsIncluded?: boolean;
}

export namespace StartActivityStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartActivityStreamRequest): any => ({
    ...obj,
  });
}

export interface StartActivityStreamResponse {
  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of messages in the database activity stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream to be used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: ActivityStreamStatus | string;

  /**
   * <p>The mode of the database activity stream.</p>
   */
  Mode?: ActivityStreamMode | string;

  /**
   * <p>Indicates whether or not the database activity stream will start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>Indicates whether engine-native audit fields are included in the database activity stream.</p>
   */
  EngineNativeAuditFieldsIncluded?: boolean;
}

export namespace StartActivityStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartActivityStreamResponse): any => ({
    ...obj,
  });
}

export interface StartDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as
   *         a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StartDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBClusterMessage): any => ({
    ...obj,
  });
}

export interface StartDBClusterResult {
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
  DBCluster?: DBCluster;
}

export namespace StartDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBClusterResult): any => ({
    ...obj,
  });
}

export interface StartDBInstanceMessage {
  /**
   * <p>The user-supplied instance identifier.</p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace StartDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface StartDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace StartDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBInstanceResult): any => ({
    ...obj,
  });
}

export interface StartDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example,
   *             <code>arn:aws:rds:us-west-2:123456789012:db:mydatabase</code>.</p>
   */
  SourceDBInstanceArn: string | undefined;

  /**
   * <p>The retention period for the replicated automated backups.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the
   *             Amazon Resource Name (ARN) for the KMS encryption key in the destination Amazon Web Services Region, for example,
   *             <code>arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE</code>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A URL that contains a Signature Version 4 signed request for the StartDBInstanceAutomatedBackupsReplication action to be
   *             called in the Amazon Web Services Region of the source DB instance. The presigned URL must be a valid request for the
   *             StartDBInstanceAutomatedBackupsReplication API action that can be executed in the Amazon Web Services Region that contains
   *             the source DB instance.</p>
   */
  PreSignedUrl?: string;
}

export namespace StartDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBInstanceAutomatedBackupsReplicationMessage): any => ({
    ...obj,
  });
}

export interface StartDBInstanceAutomatedBackupsReplicationResult {
  /**
   * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance.</p>
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}

export namespace StartDBInstanceAutomatedBackupsReplicationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBInstanceAutomatedBackupsReplicationResult): any => ({
    ...obj,
  });
}

export interface StartExportTaskMessage {
  /**
   * <p>A unique identifier for the snapshot export task. This ID isn't an identifier for
   *             the Amazon S3 bucket where the snapshot is to be exported to.</p>
   */
  ExportTaskIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot to export to Amazon S3.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket to export the snapshot to.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The name of the IAM role to use for writing to the Amazon S3 bucket
   *             when exporting a snapshot.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services KMS key to use to encrypt the snapshot exported to Amazon S3. The Amazon Web Services KMS
   *             key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             The caller of this operation must be authorized to execute the following operations.
   *             These can be set in the Amazon Web Services KMS key policy:</p>
   *         <ul>
   *             <li>
   *                 <p>GrantOperation.Encrypt</p>
   *             </li>
   *             <li>
   *                 <p>GrantOperation.Decrypt</p>
   *             </li>
   *             <li>
   *                 <p>GrantOperation.GenerateDataKey</p>
   *             </li>
   *             <li>
   *                 <p>GrantOperation.GenerateDataKeyWithoutPlaintext</p>
   *             </li>
   *             <li>
   *                 <p>GrantOperation.ReEncryptFrom</p>
   *             </li>
   *             <li>
   *                 <p>GrantOperation.ReEncryptTo</p>
   *             </li>
   *             <li>
   *                 <p>GrantOperation.CreateGrant</p>
   *             </li>
   *             <li>
   *                 <p>GrantOperation.DescribeKey</p>
   *             </li>
   *             <li>
   *                 <p>GrantOperation.RetireGrant</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>The Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The data to be exported from the snapshot.
   *             If this parameter is not provided, all the snapshot data is exported.
   *             Valid values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>database</code> - Export all the data from a specified database.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>database.table</code>
   *                     <i>table-name</i> -
   *                 Export a table of the snapshot. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>database.schema</code>
   *                     <i>schema-name</i> - Export a database schema of the snapshot.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>database.schema.table</code>
   *                     <i>table-name</i> - Export a table of the database schema.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *          </ul>
   */
  ExportOnly?: string[];
}

export namespace StartExportTaskMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExportTaskMessage): any => ({
    ...obj,
  });
}

export interface StopActivityStreamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster for the database activity stream.
   *             For example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies whether or not the database activity stream is to stop as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;
}

export namespace StopActivityStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopActivityStreamRequest): any => ({
    ...obj,
  });
}

export interface StopActivityStreamResponse {
  /**
   * <p>The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: ActivityStreamStatus | string;
}

export namespace StopActivityStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopActivityStreamResponse): any => ({
    ...obj,
  });
}

export interface StopDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as
   *         a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StopDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBClusterMessage): any => ({
    ...obj,
  });
}

export interface StopDBClusterResult {
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
  DBCluster?: DBCluster;
}

export namespace StopDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBClusterResult): any => ({
    ...obj,
  });
}

export interface StopDBInstanceMessage {
  /**
   * <p>The user-supplied instance identifier.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped.</p>
   */
  DBSnapshotIdentifier?: string;
}

export namespace StopDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface StopDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *         <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   */
  DBInstance?: DBInstance;
}

export namespace StopDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBInstanceResult): any => ({
    ...obj,
  });
}

export interface StopDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance for which to stop replicating automated backups, for example,
   *             <code>arn:aws:rds:us-west-2:123456789012:db:mydatabase</code>.</p>
   */
  SourceDBInstanceArn: string | undefined;
}

export namespace StopDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBInstanceAutomatedBackupsReplicationMessage): any => ({
    ...obj,
  });
}

export interface StopDBInstanceAutomatedBackupsReplicationResult {
  /**
   * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance.</p>
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}

export namespace StopDBInstanceAutomatedBackupsReplicationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBInstanceAutomatedBackupsReplicationResult): any => ({
    ...obj,
  });
}
