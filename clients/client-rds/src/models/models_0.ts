// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export type ActivityStreamMode = "async" | "sync";

export type ActivityStreamStatus = "started" | "starting" | "stopped" | "stopping";

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
   *         <note>
   *             <p>If you're creating a DB instance in an RDS on VMware environment,
   *                 specify the identifier of the custom Availability Zone to create the DB instance
   *                 in.</p>
   *             <p>For more information about RDS on VMware, see the
   *               <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
   *                   RDS on VMware User Guide.</a>
   *             </p>
   *         </note>
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
