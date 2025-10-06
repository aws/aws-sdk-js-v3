// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { RDSServiceException as __BaseException } from "./RDSServiceException";

/**
 * <p>Describes a quota for an Amazon Web Services account.</p>
 *          <p>The following are account quotas:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AllocatedStorage</code> - The total allocated storage per account, in GiB.
 *                     The used value is the total allocated storage in the account, in GiB.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AuthorizationsPerDBSecurityGroup</code> - The number of ingress rules per DB security group.
 *                   The used value is the highest number of ingress rules in a DB security group in the account. Other
 *                   DB security groups in the account might have a lower number of ingress rules.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CustomEndpointsPerDBCluster</code> - The number of custom endpoints per DB cluster.
 *                   The used value is the highest number of custom endpoints in a DB clusters in the account. Other
 *                   DB clusters in the account might have a lower number of custom endpoints.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DBClusterParameterGroups</code> - The number of DB cluster parameter groups
 *                     per account, excluding default parameter groups. The used value is the count of
 *                     nondefault DB cluster parameter groups in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DBClusterRoles</code> - The number of associated Amazon Web Services Identity and Access Management (IAM) roles per DB cluster.
 *                   The used value is the highest number of associated IAM roles for a DB cluster in the account. Other
 *                   DB clusters in the account might have a lower number of associated IAM roles.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DBClusters</code> - The number of DB clusters per account.
 *                   The used value is the count of DB clusters in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DBInstanceRoles</code> - The number of associated IAM roles per DB instance.
 *                   The used value is the highest number of associated IAM roles for a DB instance in the account. Other
 *                   DB instances in the account might have a lower number of associated IAM roles.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DBInstances</code> - The number of DB instances per account.
 *                   The used value is the count of the DB instances in the account.</p>
 *                <p>Amazon RDS DB instances, Amazon Aurora DB instances, Amazon Neptune instances, and Amazon DocumentDB
 *                       instances apply to this quota.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DBParameterGroups</code> - The number of DB parameter groups per account,
 *                     excluding default parameter groups. The used value is the count of nondefault DB
 *                     parameter groups in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DBSecurityGroups</code> - The number of DB security groups (not VPC
 *                     security groups) per account, excluding the default security group. The used
 *                     value is the count of nondefault DB security groups in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DBSubnetGroups</code> - The number of DB subnet groups per account.
 *                   The used value is the count of the DB subnet groups in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EventSubscriptions</code> - The number of event subscriptions per account.
 *                   The used value is the count of the event subscriptions in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ManualClusterSnapshots</code> - The number of manual DB cluster snapshots per account.
 *                   The used value is the count of the manual DB cluster snapshots in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ManualSnapshots</code> - The number of manual DB instance snapshots per account.
 *                   The used value is the count of the manual DB instance snapshots in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OptionGroups</code> - The number of DB option groups per account, excluding
 *                     default option groups. The used value is the count of nondefault DB option
 *                     groups in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ReadReplicasPerMaster</code> - The number of read replicas per DB
 *                     instance. The used value is the highest number of read replicas for a DB
 *                     instance in the account. Other DB instances in the account might have a lower
 *                     number of read replicas.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ReservedDBInstances</code> - The number of reserved DB instances per account.
 *                   The used value is the count of the active reserved DB instances in the account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SubnetsPerDBSubnetGroup</code> - The number of subnets per DB subnet group.
 *                   The used value is highest number of subnets for a DB subnet group in the account. Other
 *                   DB subnet groups in the account might have a lower number of subnets.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html">Quotas for Amazon RDS</a> in the
 *                 <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html">Quotas for Amazon Aurora</a> in the
 *                 <i>Amazon Aurora User Guide</i>.</p>
 * @public
 */
export interface AccountQuota {
  /**
   * <p>The name of the Amazon RDS quota for this Amazon Web Services account.</p>
   * @public
   */
  AccountQuotaName?: string | undefined;

  /**
   * <p>The amount currently used toward the quota maximum.</p>
   * @public
   */
  Used?: number | undefined;

  /**
   * <p>The maximum allowed value for the quota.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>Data returned by the <b>DescribeAccountAttributes</b> action.</p>
 * @public
 */
export interface AccountAttributesMessage {
  /**
   * <p>A list of <code>AccountQuota</code> objects. Within this list, each quota has a name,
   *             a count of usage toward the quota maximum, and a maximum value for the quota.</p>
   * @public
   */
  AccountQuotas?: AccountQuota[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ActivityStreamMode = {
  async: "async",
  sync: "sync",
} as const;

/**
 * @public
 */
export type ActivityStreamMode = (typeof ActivityStreamMode)[keyof typeof ActivityStreamMode];

/**
 * @public
 * @enum
 */
export const ActivityStreamPolicyStatus = {
  locked: "locked",
  locking_policy: "locking-policy",
  unlocked: "unlocked",
  unlocking_policy: "unlocking-policy",
} as const;

/**
 * @public
 */
export type ActivityStreamPolicyStatus = (typeof ActivityStreamPolicyStatus)[keyof typeof ActivityStreamPolicyStatus];

/**
 * @public
 * @enum
 */
export const ActivityStreamStatus = {
  started: "started",
  starting: "starting",
  stopped: "stopped",
  stopping: "stopping",
} as const;

/**
 * @public
 */
export type ActivityStreamStatus = (typeof ActivityStreamStatus)[keyof typeof ActivityStreamStatus];

/**
 * @public
 */
export interface AddRoleToDBClusterMessage {
  /**
   * <p>The name of the DB cluster to associate the IAM role with.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB
   *             cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be associated with.
   *             For information about supported feature names, see <a>DBEngineVersion</a>.</p>
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface AddRoleToDBInstanceMessage {
  /**
   * <p>The name of the DB instance to associate the IAM role with.</p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the DB instance, for
   *             example <code>arn:aws:iam::123456789012:role/AccessRole</code>.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be associated with.
   *             For information about supported feature names, see <a>DBEngineVersion</a>.</p>
   * @public
   */
  FeatureName: string | undefined;
}

/**
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to add a source identifier to.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The identifier of the event source to be added.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If the source type is a DB instance, a <code>DBInstanceIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB cluster, a <code>DBClusterIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB cluster snapshot, a <code>DBClusterSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is an RDS Proxy, a <code>DBProxyName</code> value must be supplied.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
 * @public
 */
export interface EventSubscription {
  /**
   * <p>The Amazon Web Services customer account associated with the RDS event notification subscription.</p>
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * <p>The RDS event notification subscription Id.</p>
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * <p>The topic ARN of the RDS event notification subscription.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The status of the RDS event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p>
   *          <p>The status "no-permission" indicates that RDS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The time the RDS event notification subscription was created.</p>
   * @public
   */
  SubscriptionCreationTime?: string | undefined;

  /**
   * <p>The source type for the RDS event notification subscription.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of source IDs for the RDS event notification subscription.</p>
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * <p>A list of event categories for the RDS event notification subscription.</p>
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * <p>Specifies whether the subscription is enabled. True indicates the subscription is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the event subscription.</p>
   * @public
   */
  EventSubscriptionArn?: string | undefined;
}

/**
 * @public
 */
export interface AddSourceIdentifierToSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>The requested source could not be found.</p>
 * @public
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
 * @public
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
 *          <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
 *             </p>
 * @public
 */
export interface Tag {
  /**
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-@]*)$").</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-@]*)$").</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>The Amazon RDS resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *         see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *             Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon RDS resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>
 *             <code>BlueGreenDeploymentIdentifier</code> doesn't refer to an existing blue/green deployment.</p>
 * @public
 */
export class BlueGreenDeploymentNotFoundFault extends __BaseException {
  readonly name: "BlueGreenDeploymentNotFoundFault" = "BlueGreenDeploymentNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BlueGreenDeploymentNotFoundFault, __BaseException>) {
    super({
      name: "BlueGreenDeploymentNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BlueGreenDeploymentNotFoundFault.prototype);
  }
}

/**
 * <p>The DB proxy endpoint doesn't exist.</p>
 * @public
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
 * <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 * @public
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
 * @public
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
 * <p>The specified DB shard group name wasn't found.</p>
 * @public
 */
export class DBShardGroupNotFoundFault extends __BaseException {
  readonly name: "DBShardGroupNotFoundFault" = "DBShardGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBShardGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBShardGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBShardGroupNotFoundFault.prototype);
  }
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 * @public
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
 * <p>The specified snapshot tenant database wasn't found.</p>
 * @public
 */
export class DBSnapshotTenantDatabaseNotFoundFault extends __BaseException {
  readonly name: "DBSnapshotTenantDatabaseNotFoundFault" = "DBSnapshotTenantDatabaseNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSnapshotTenantDatabaseNotFoundFault, __BaseException>) {
    super({
      name: "DBSnapshotTenantDatabaseNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSnapshotTenantDatabaseNotFoundFault.prototype);
  }
}

/**
 * <p>The specified integration could not be found.</p>
 * @public
 */
export class IntegrationNotFoundFault extends __BaseException {
  readonly name: "IntegrationNotFoundFault" = "IntegrationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationNotFoundFault, __BaseException>) {
    super({
      name: "IntegrationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationNotFoundFault.prototype);
  }
}

/**
 * <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 * @public
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
 * <p>The specified tenant database wasn't found in the DB instance.</p>
 * @public
 */
export class TenantDatabaseNotFoundFault extends __BaseException {
  readonly name: "TenantDatabaseNotFoundFault" = "TenantDatabaseNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TenantDatabaseNotFoundFault, __BaseException>) {
    super({
      name: "TenantDatabaseNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TenantDatabaseNotFoundFault.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * <p>The RDS Amazon Resource Name (ARN) of the resource that the
   *       pending maintenance action applies to. For information about
   *       creating an ARN,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *         Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ca-certificate-rotation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-upgrade</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hardware-maintenance</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>os-upgrade</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>system-update</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about these actions, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#maintenance-actions-aurora">Maintenance actions for Amazon Aurora</a> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#maintenance-actions-rds">Maintenance actions for Amazon RDS</a>.</p>
   * @public
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in
   *            request of type <code>immediate</code> can't be undone.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during
   *             the next maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code>
   *             opt-in requests.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OptInType: string | undefined;
}

/**
 * <p>Provides information about a pending maintenance action for a resource.</p>
 * @public
 */
export interface PendingMaintenanceAction {
  /**
   * <p>The type of pending maintenance action that is available for the resource. </p>
   *          <p>For more information about maintenance actions, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html">Maintaining a DB instance</a>.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ca-certificate-rotation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-upgrade</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hardware-maintenance</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>os-upgrade</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>system-update</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about these actions, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#maintenance-actions-aurora">Maintenance actions for Amazon Aurora</a> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#maintenance-actions-rds">Maintenance actions for Amazon RDS</a>.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>The date of the maintenance window when the action is applied.
   *            The maintenance action is applied to the resource during
   *            its first maintenance window after this date.</p>
   * @public
   */
  AutoAppliedAfterDate?: Date | undefined;

  /**
   * <p>The date when the maintenance action is automatically applied.</p>
   *          <p>On this date, the maintenance action is applied to the resource as soon as possible,
   *             regardless of the maintenance window for the resource. There might be a delay of
   *             one or more days from this date before the maintenance action is applied.</p>
   * @public
   */
  ForcedApplyDate?: Date | undefined;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * <p>The effective date when the pending maintenance action is applied
   *            to the resource. This date takes into account opt-in requests received from
   *            the <code>ApplyPendingMaintenanceAction</code> API, the <code>AutoAppliedAfterDate</code>,
   *            and the <code>ForcedApplyDate</code>. This value is blank if an
   *            opt-in request has not been received and nothing has been specified as
   *            <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
   * @public
   */
  CurrentApplyDate?: Date | undefined;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Describes the pending maintenance actions for a resource.</p>
 * @public
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * <p>The ARN of the resource that has pending maintenance actions.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>A list that provides details about the pending maintenance actions for the resource.</p>
   * @public
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[] | undefined;
}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionResult {
  /**
   * <p>Describes the pending maintenance actions for a resource.</p>
   * @public
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | undefined;
}

/**
 * <p>The specified resource ID was not found.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface AuthorizeDBSecurityGroupIngressMessage {
  /**
   * <p>The name of the DB security group to add authorization to.</p>
   * @public
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>The IP range to authorize.</p>
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * <p>Name of the EC2 security group to authorize.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code>
   *       or <code>EC2SecurityGroupId</code> must be provided.</p>
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * <p>Id of the EC2 security group to authorize.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   * @public
   */
  EC2SecurityGroupId?: string | undefined;

  /**
   * <p>Amazon Web Services account number of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> parameter.
   *         The Amazon Web Services access key ID isn't an acceptable value.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AuthorizeDBSecurityGroupIngress</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBSecurityGroups</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RevokeDBSecurityGroupIngress</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface EC2SecurityGroup {
  /**
   * <p>Provides the status of the EC2 security group. Status can be "authorizing", "authorized", "revoking", and "revoked".</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Specifies the name of the EC2 security group.</p>
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * <p>Specifies the id of the EC2 security group.</p>
   * @public
   */
  EC2SecurityGroupId?: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services ID of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> field.</p>
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.</p>
 * @public
 */
export interface IPRange {
  /**
   * <p>The status of the IP range. Status can be "authorizing", "authorized", "revoking", and "revoked".</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The IP range.</p>
   * @public
   */
  CIDRIP?: string | undefined;
}

/**
 * <p>Contains the details for an Amazon RDS DB security group.</p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBSecurityGroups</code> action.</p>
 * @public
 */
export interface DBSecurityGroup {
  /**
   * <p>Provides the Amazon Web Services ID of the owner of a specific DB security group.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Specifies the name of the DB security group.</p>
   * @public
   */
  DBSecurityGroupName?: string | undefined;

  /**
   * <p>Provides the description of the DB security group.</p>
   * @public
   */
  DBSecurityGroupDescription?: string | undefined;

  /**
   * <p>Provides the VpcId of the DB security group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Contains a list of <code>EC2SecurityGroup</code> elements.</p>
   * @public
   */
  EC2SecurityGroups?: EC2SecurityGroup[] | undefined;

  /**
   * <p>Contains a list of <code>IPRange</code> elements.</p>
   * @public
   */
  IPRanges?: IPRange[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB security group.</p>
   * @public
   */
  DBSecurityGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeDBSecurityGroupIngressResult {
  /**
   * <p>Contains the details for an Amazon RDS DB security group.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.</p>
   * @public
   */
  DBSecurityGroup?: DBSecurityGroup | undefined;
}

/**
 * <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.</p>
 * @public
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
 * @public
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
 * @public
 */
export interface BacktrackDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster to be backtracked. This parameter is
   *             stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The timestamp of the time to backtrack the DB cluster to, specified in ISO
   *             8601 format. For more information about ISO 8601, see the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia
   *             page.</a>
   *          </p>
   *          <note>
   *             <p>If the specified time isn't a consistent time for the DB cluster,
   *                 Aurora automatically chooses the nearest possible consistent time for the DB cluster.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain a valid ISO 8601 timestamp.</p>
   *             </li>
   *             <li>
   *                <p>Can't contain a timestamp set in the future.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2017-07-08T18:00Z</code>
   *          </p>
   * @public
   */
  BacktrackTo: Date | undefined;

  /**
   * <p>Specifies whether to force the DB cluster to backtrack when binary logging is
   *             enabled. Otherwise, an error occurs when binary logging is enabled.</p>
   * @public
   */
  Force?: boolean | undefined;

  /**
   * <p>Specifies whether to backtrack the DB cluster to the earliest possible
   *             backtrack time when <i>BacktrackTo</i> is set to a timestamp earlier than the earliest
   *             backtrack time. When this parameter is disabled and <i>BacktrackTo</i> is set to a timestamp earlier than the earliest
   *             backtrack time, an error occurs.</p>
   * @public
   */
  UseEarliestTimeOnPointInTimeUnavailable?: boolean | undefined;
}

/**
 * <p>This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.</p>
 * @public
 */
export interface DBClusterBacktrack {
  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Contains the backtrack identifier.</p>
   * @public
   */
  BacktrackIdentifier?: string | undefined;

  /**
   * <p>The timestamp of the time to which the DB cluster was backtracked.</p>
   * @public
   */
  BacktrackTo?: Date | undefined;

  /**
   * <p>The timestamp of the time from which the DB cluster was backtracked.</p>
   * @public
   */
  BacktrackedFrom?: Date | undefined;

  /**
   * <p>The timestamp of the time at which the backtrack was requested.</p>
   * @public
   */
  BacktrackRequestCreationTime?: Date | undefined;

  /**
   * <p>The status of the backtrack. This property returns one of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>applying</code> - The backtrack is currently being applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>completed</code> - The backtrack has successfully been applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - An error occurred while the backtrack was applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The backtrack is currently pending application to or rollback from the DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface CancelExportTaskMessage {
  /**
   * <p>The identifier of the snapshot or cluster export task to cancel.</p>
   * @public
   */
  ExportTaskIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportSourceType = {
  CLUSTER: "CLUSTER",
  SNAPSHOT: "SNAPSHOT",
} as const;

/**
 * @public
 */
export type ExportSourceType = (typeof ExportSourceType)[keyof typeof ExportSourceType];

/**
 * <p>Contains the details of a snapshot or cluster export to Amazon S3.</p>
 *          <p>This data type is used as a response element in the <code>DescribeExportTasks</code> operation.</p>
 * @public
 */
export interface ExportTask {
  /**
   * <p>A unique identifier for the snapshot or cluster export task. This ID isn't an identifier for
   *             the Amazon S3 bucket where the data is exported.</p>
   * @public
   */
  ExportTaskIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot or cluster exported to Amazon S3.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The data exported from the snapshot or cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>database</code> - Export all the data from a specified database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.table</code>
   *                   <i>table-name</i> -
   *                     Export a table of the snapshot or cluster. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.schema</code>
   *                   <i>schema-name</i> - Export a database schema of the snapshot or cluster.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.schema.table</code>
   *                   <i>table-name</i> - Export a table of the database schema.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ExportOnly?: string[] | undefined;

  /**
   * <p>The time when the snapshot was created.</p>
   * @public
   */
  SnapshotTime?: Date | undefined;

  /**
   * <p>The time when the snapshot or cluster export task started.</p>
   * @public
   */
  TaskStartTime?: Date | undefined;

  /**
   * <p>The time when the snapshot or cluster export task ended.</p>
   * @public
   */
  TaskEndTime?: Date | undefined;

  /**
   * <p>The Amazon S3 bucket where the snapshot or cluster is exported to.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The Amazon S3 bucket prefix that is the file name and path of the exported data.</p>
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * <p>The name of the IAM role that is used to write to Amazon S3 when exporting a snapshot or cluster.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The key identifier of the Amazon Web Services KMS key that is used to encrypt the data when it's exported to Amazon S3.
   *             The KMS key identifier is its key ARN, key ID, alias ARN, or alias name. The IAM role used for the export
   *             must have encryption and decryption permissions to use this KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The progress status of the export task. The status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CANCELED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELING</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The progress of the snapshot or cluster export task as a percentage.</p>
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * <p>The total amount of data exported, in gigabytes.</p>
   * @public
   */
  TotalExtractedDataInGB?: number | undefined;

  /**
   * <p>The reason the export failed, if it failed.</p>
   * @public
   */
  FailureCause?: string | undefined;

  /**
   * <p>A warning about the snapshot or cluster export task.</p>
   * @public
   */
  WarningMessage?: string | undefined;

  /**
   * <p>The type of source for the export.</p>
   * @public
   */
  SourceType?: ExportSourceType | undefined;
}

/**
 * <p>The export task doesn't exist.</p>
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group.
   *             For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>The identifier for the copied DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-param-group1</code>
   *          </p>
   * @public
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>A description for the copied DB cluster parameter group.</p>
   * @public
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the details of an Amazon RDS DB cluster parameter group.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.</p>
 * @public
 */
export interface DBClusterParameterGroup {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>The name of the DB parameter group family that this DB cluster parameter group is compatible with.</p>
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * <p>Provides the customer-specified description for this DB cluster parameter group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster parameter group.</p>
   * @public
   */
  DBClusterParameterGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.</p>
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * <p>A DB parameter group with the same name exists.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface CopyDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid source snapshot in the "available" state.</p>
   *             </li>
   *             <li>
   *                <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB snapshot identifier.</p>
   *             </li>
   *             <li>
   *                <p>If the source snapshot is in a different Amazon Web Services Region than the copy,
   *                     specify a valid DB cluster snapshot ARN. You can also specify an ARN of a snapshot that is in a different account and a different Amazon Web Services Region.
   *                     For more information, go to
   *               <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html#USER_CopySnapshot.AcrossRegions">
   *                   Copying Snapshots Across Amazon Web Services Regions</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot1</code>
   *          </p>
   * @public
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot2</code>
   *          </p>
   * @public
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB cluster snapshot.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS key.</p>
   *          <p>If you copy an encrypted DB cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS key.
   *             If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.</p>
   *          <p>If you copy an encrypted DB cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for <code>KmsKeyId</code>.</p>
   *          <p>To copy an encrypted DB cluster snapshot to another Amazon Web Services Region, you must set <code>KmsKeyId</code> to the Amazon Web Services KMS key identifier
   *             you want to use to encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services
   *             Region that they are created in, and you can't use KMS keys from one Amazon Web Services Region
   *             in another Amazon Web Services Region.</p>
   *          <p>If you copy an unencrypted DB cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter,
   *             an error is returned.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>When you are copying a DB cluster snapshot from one Amazon Web Services GovCloud (US) Region
   *             to another, the URL that contains a Signature Version 4 signed request for the
   *                 <code>CopyDBClusterSnapshot</code> API operation in the Amazon Web Services Region that contains
   *             the source DB cluster snapshot to copy. Use the <code>PreSignedUrl</code> parameter when
   *             copying an encrypted DB cluster snapshot from another Amazon Web Services Region. Don't specify
   *                 <code>PreSignedUrl</code> when copying an encrypted DB cluster snapshot in the same
   *             Amazon Web Services Region.</p>
   *          <p>This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other
   *             Amazon Web Services Regions.</p>
   *          <p>The presigned URL must be a valid request for the
   *                 <code>CopyDBClusterSnapshot</code> API operation that can run in the source
   *             Amazon Web Services Region that contains the encrypted DB cluster snapshot to copy. The presigned URL request
   *             must contain the following parameter values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The KMS key identifier for the KMS key
   *                     to use to encrypt the copy of the DB cluster snapshot in the destination
   *                     Amazon Web Services Region. This is the same identifier for both the
   *                         <code>CopyDBClusterSnapshot</code> operation that is called in the
   *                     destination Amazon Web Services Region, and the operation contained in the presigned
   *                     URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationRegion</code> - The name of the Amazon Web Services Region
   *                     that the DB cluster snapshot is to be created in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster
   *                 snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example,
   *                 if you are copying an encrypted DB cluster snapshot from the us-west-2 Amazon Web Services Region, then your <code>SourceDBClusterSnapshotIdentifier</code>
   *                 looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p>
   *             </li>
   *          </ul>
   *          <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *          <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify
   *                     <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying
   *                     <code>SourceRegion</code> autogenerates a presigned URL that is a valid request
   *                 for the operation that can run in the source Amazon Web Services Region.</p>
   *          </note>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>Specifies whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot.
   *             By default, tags are not copied.</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the details for an Amazon RDS DB cluster snapshot</p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBClusterSnapshots</code> action.</p>
 * @public
 */
export interface DBClusterSnapshot {
  /**
   * <p>The list of Availability Zones (AZs) where instances in the DB cluster snapshot can be restored.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The identifier for the DB cluster snapshot.</p>
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>The time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  SnapshotCreateTime?: Date | undefined;

  /**
   * <p>The name of the database engine for this DB cluster snapshot.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The engine mode of the database engine for this DB cluster snapshot.</p>
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * <p>The allocated storage size of the DB cluster snapshot in gibibytes (GiB).</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The status of this DB cluster snapshot. Valid statuses are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>available</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>copying</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creating</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The port that the DB cluster was listening on at the time of the snapshot.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The VPC ID associated with the DB cluster snapshot.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>The master username for this DB cluster snapshot.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The version of the database engine for this DB cluster snapshot.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The license model information for this DB cluster snapshot.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The type of the DB cluster snapshot.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * <p>Indicates whether the DB cluster snapshot is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the Amazon Web Services KMS key identifier for the encrypted DB cluster snapshot.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>
   * @public
   */
  DBClusterSnapshotArn?: string | undefined;

  /**
   * <p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon
   *             Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
   * @public
   */
  SourceDBClusterSnapshotArn?: string | undefined;

  /**
   * <p>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>The storage type associated with the DB cluster snapshot.</p>
   *          <p>This setting is only for Aurora DB clusters.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The storage throughput for the DB cluster snapshot. The throughput is automatically set based on the IOPS that you provision, and is not configurable.</p>
   *          <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The resource ID of the DB cluster that this DB cluster snapshot was created from.</p>
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  DBSystemId?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterSnapshotResult {
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.</p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>The user already has a DB cluster snapshot with the given identifier.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
export interface CopyDBParameterGroupMessage {
  /**
   * <p>The identifier or ARN for the source DB parameter group.
   *         For information about
   *         creating an ARN,
   *         see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *             Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid DB parameter group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBParameterGroupIdentifier: string | undefined;

  /**
   * <p>The identifier for the copied DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-db-parameter-group</code>
   *          </p>
   * @public
   */
  TargetDBParameterGroupIdentifier: string | undefined;

  /**
   * <p>A description for the copied DB parameter group.</p>
   * @public
   */
  TargetDBParameterGroupDescription: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the details of an Amazon RDS DB parameter group.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.</p>
 * @public
 */
export interface DBParameterGroup {
  /**
   * <p>The name of the DB parameter group.</p>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>The name of the DB parameter group family that this DB parameter group is compatible with.</p>
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * <p>Provides the customer-specified description for this DB parameter group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB parameter group.</p>
   * @public
   */
  DBParameterGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB parameter group.</p>
   *          <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.</p>
   * @public
   */
  DBParameterGroup?: DBParameterGroup | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CopyDBSnapshotMessage {
  /**
   * <p>The identifier for the source DB snapshot.</p>
   *          <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid DB
   *             snapshot identifier. For example, you might specify
   *                 <code>rds:mysql-instance1-snapshot-20130805</code>.</p>
   *          <p>If you are copying from a shared manual DB snapshot,
   *             this parameter must be the Amazon Resource Name (ARN) of the shared DB snapshot.</p>
   *          <p>If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid DB
   *             snapshot ARN. You can also specify an ARN of a snapshot that is in a different account and a different Amazon Web Services Region. For example, you might specify
   *                 <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid source snapshot in the "available" state.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>rds:mydb-2012-04-02-00-01</code>
   *          </p>
   *          <p>Example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code>
   *          </p>
   * @public
   */
  SourceDBSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier for the copy of the snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-db-snapshot</code>
   *          </p>
   * @public
   */
  TargetDBSnapshotIdentifier: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB snapshot.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you copy an encrypted DB snapshot from your Amazon Web Services account,
   *             you can specify a value for this parameter to encrypt the copy with a new KMS key.
   *             If you don't specify a value for this parameter,
   *             then the copy of the DB snapshot is encrypted with the same Amazon Web Services KMS key as the source DB snapshot.</p>
   *          <p>If you copy an encrypted DB snapshot that is shared from another Amazon Web Services account,
   *             then you must specify a value for this parameter.</p>
   *          <p>If you specify this parameter when you copy an unencrypted snapshot,
   *             the copy is encrypted.</p>
   *          <p>If you copy an encrypted snapshot to a different Amazon Web Services Region, then you must specify
   *             an Amazon Web Services KMS key identifier for the destination Amazon Web Services Region. KMS keys are specific to the Amazon Web Services Region
   *             that they are created in, and you can't use KMS keys from one Amazon Web Services Region in another
   *             Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies whether to copy all tags from the source DB snapshot to the target DB snapshot.
   *             By default, tags aren't copied.</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>When you are copying a snapshot from one Amazon Web Services GovCloud (US) Region to another,
   *             the URL that contains a Signature Version 4 signed request for the <code>CopyDBSnapshot</code> API
   *             operation in the source Amazon Web Services Region that contains the source DB snapshot to copy.</p>
   *          <p>This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other
   *             Amazon Web Services Regions.</p>
   *          <p>You must specify this parameter when you copy an encrypted DB snapshot from another
   *             Amazon Web Services Region by using the Amazon RDS API. Don't specify <code>PreSignedUrl</code> when you are
   *             copying an encrypted DB snapshot in the same Amazon Web Services Region.</p>
   *          <p>The presigned URL must be a valid request for the
   *             <code>CopyDBClusterSnapshot</code> API operation that can run in the source
   *             Amazon Web Services Region that contains the encrypted DB cluster snapshot to copy. The presigned URL request
   *             must contain the following parameter values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DestinationRegion</code> - The Amazon Web Services Region that the encrypted DB
   *                     snapshot is copied to. This Amazon Web Services Region is the same one where the
   *                         <code>CopyDBSnapshot</code> operation is called that contains this presigned
   *                     URL.</p>
   *                <p>For example, if you copy an encrypted DB snapshot from the us-west-2
   *                     Amazon Web Services Region to the us-east-1 Amazon Web Services Region, then you call the
   *                         <code>CopyDBSnapshot</code> operation in the us-east-1 Amazon Web Services Region and
   *                     provide a presigned URL that contains a call to the <code>CopyDBSnapshot</code>
   *                     operation in the us-west-2 Amazon Web Services Region. For this example, the
   *                         <code>DestinationRegion</code> in the presigned URL must be set to the
   *                     us-east-1 Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The KMS key identifier for the KMS key to use to
   *                     encrypt the copy of the DB snapshot in the destination Amazon Web Services Region. This is the
   *                     same identifier for both the <code>CopyDBSnapshot</code> operation that is
   *                     called in the destination Amazon Web Services Region, and the operation contained in the
   *                     presigned URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SourceDBSnapshotIdentifier</code> - The DB snapshot identifier for the encrypted snapshot to be copied.
   *                     This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region.
   *                     For example, if you are copying an encrypted DB snapshot from the us-west-2 Amazon Web Services Region, then your <code>SourceDBSnapshotIdentifier</code> looks like
   *                     the following example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20161115</code>.</p>
   *             </li>
   *          </ul>
   *          <p>To learn how to generate a Signature Version 4 signed request, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p>
   *          <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify
   *                     <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying
   *                     <code>SourceRegion</code> autogenerates a presigned URL that is a valid request
   *                 for the operation that can run in the source Amazon Web Services Region.</p>
   *          </note>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>The name of an option group to associate with the copy of the snapshot.</p>
   *          <p>Specify this option if you are copying a snapshot from one Amazon Web Services Region to another,
   *             and your DB instance uses a nondefault option group.
   *             If your source DB instance uses Transparent Data Encryption for Oracle or Microsoft SQL Server,
   *             you must specify this option when copying across Amazon Web Services Regions.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.Options">Option group considerations</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The external custom Availability Zone (CAZ) identifier for the target CAZ.</p>
   *          <p>Example: <code>rds-caz-aiqhTgQv</code>.</p>
   * @public
   */
  TargetCustomAvailabilityZone?: string | undefined;

  /**
   * <p>Configures the location where RDS will store copied snapshots.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local</code> (Dedicated Local Zone)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outposts</code> (Amazon Web Services Outposts)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region</code> (Amazon Web Services Region)</p>
   *             </li>
   *          </ul>
   * @public
   */
  SnapshotTarget?: string | undefined;

  /**
   * <p>Specifies whether to copy the DB option group associated with the source DB snapshot to the target
   *             Amazon Web Services account and associate with the target DB snapshot. The associated option group can be copied only with
   *             cross-account snapshot copy calls.</p>
   * @public
   */
  CopyOptionGroup?: boolean | undefined;

  /**
   * <p>Specifies the name of the Availability Zone where RDS stores the DB snapshot. This value is valid only for snapshots that RDS stores on a Dedicated Local Zone.</p>
   * @public
   */
  SnapshotAvailabilityZone?: string | undefined;
}

/**
 * <p>Contains the processor features of a DB instance class.</p>
 *          <p>To specify the number of CPU cores, use the <code>coreCount</code> feature name
 *             for the <code>Name</code> parameter. To specify the number of threads per core, use the
 *             <code>threadsPerCore</code> feature name for the <code>Name</code> parameter.</p>
 *          <p>You can set the processor features of the DB instance class for a DB instance when you
 *             call one of the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceFromS3</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceToPointInTime</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can view the valid processor values for a particular instance class by calling the
 *                 <code>DescribeOrderableDBInstanceOptions</code> action and specifying the
 *             instance class for the <code>DBInstanceClass</code> parameter.</p>
 *          <p>In addition, you can use the following actions for DB instance class processor information:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBSnapshots</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeValidDBInstanceModifications</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>If you call <code>DescribeDBInstances</code>, <code>ProcessorFeature</code> returns
 *             non-null values only if the following conditions are met:</p>
 *          <ul>
 *             <li>
 *                <p>You are accessing an Oracle DB instance.</p>
 *             </li>
 *             <li>
 *                <p>Your Oracle DB instance class supports configuring the number of CPU cores and threads per core.</p>
 *             </li>
 *             <li>
 *                <p>The current number CPU cores and threads is set to a non-default value.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">
 *             Configuring the processor for a DB instance class in RDS for Oracle</a> in the <i>Amazon RDS User Guide.
 *             </i>
 *          </p>
 * @public
 */
export interface ProcessorFeature {
  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code> and <code>threadsPerCore</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of a processor feature.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains the details of an Amazon RDS DB snapshot.</p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBSnapshots</code> action.</p>
 * @public
 */
export interface DBSnapshot {
  /**
   * <p>Specifies the identifier for the DB snapshot.</p>
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * <p>Specifies the DB instance identifier of the DB instance this DB snapshot was created from.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>Specifies when the snapshot was taken in Coordinated Universal Time (UTC). Changes for the copy when the snapshot is copied.</p>
   * @public
   */
  SnapshotCreateTime?: Date | undefined;

  /**
   * <p>Specifies the name of the database engine.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>Specifies the status of this DB snapshot.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Specifies the port that the database engine was listening on at the time of the snapshot.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Provides the VPC ID associated with the DB snapshot.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from
   *             which the snapshot was taken, was created.</p>
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * <p>Provides the master username for the DB snapshot.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>Specifies the version of the database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>License model information for the restored DB instance.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>Provides the type of the DB snapshot.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies the storage throughput for the DB snapshot.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>Provides the option group name for the DB snapshot.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * <p>The Amazon Web Services Region that the DB snapshot was created in or copied from.</p>
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * <p>The DB snapshot Amazon Resource Name (ARN) that the DB snapshot was copied from. It only has a value in the case of a cross-account or cross-Region copy.</p>
   * @public
   */
  SourceDBSnapshotIdentifier?: string | undefined;

  /**
   * <p>Specifies the storage type associated with DB snapshot.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>Indicates whether the DB snapshot is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>If <code>Encrypted</code> is true, the Amazon Web Services KMS key identifier
   *             for the encrypted DB snapshot.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB snapshot.</p>
   * @public
   */
  DBSnapshotArn?: string | undefined;

  /**
   * <p>The time zone of the DB snapshot.
   *             In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for
   *             snapshots taken from
   *             Microsoft SQL Server DB instances
   *             that were created with a time zone specified.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class
   *             of the DB instance when the DB snapshot was created.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>Specifies where manual snapshots are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.</p>
   * @public
   */
  SnapshotTarget?: string | undefined;

  /**
   * <p>Specifies the time of the CreateDBSnapshot operation in Coordinated Universal Time (UTC). Doesn't change when the snapshot is copied.</p>
   * @public
   */
  OriginalSnapshotCreateTime?: Date | undefined;

  /**
   * <p>The timestamp of the most recent transaction applied to the database that you're backing up.
   *             Thus, if you restore a snapshot, SnapshotDatabaseTime is the most recent transaction in the restored DB instance.
   *             In contrast, originalSnapshotCreateTime specifies the system time that the snapshot completed.</p>
   *          <p>If you back up a read replica, you can determine the replica lag by comparing SnapshotDatabaseTime
   *             with originalSnapshotCreateTime. For example, if originalSnapshotCreateTime is two hours later than
   *             SnapshotDatabaseTime, then the replica lag is two hours.</p>
   * @public
   */
  SnapshotDatabaseTime?: Date | undefined;

  /**
   * <p>The Oracle system identifier (SID), which is the name of the Oracle database instance that
   *             manages your database files. The Oracle SID is also the name of your CDB.</p>
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * <p>Indicates whether the snapshot is of a DB instance using the multi-tenant
   *             configuration (TRUE) or the single-tenant configuration (FALSE).</p>
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * <p>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>Specifies the name of the Availability Zone where RDS stores the DB snapshot. This value is valid only for snapshots that RDS stores on a Dedicated Local Zone.</p>
   * @public
   */
  SnapshotAvailabilityZone?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.</p>
   * @public
   */
  DBSnapshot?: DBSnapshot | undefined;
}

/**
 * <p>
 *             <code>CustomAvailabilityZoneId</code> doesn't refer to an existing custom
 *             Availability Zone identifier.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface CopyOptionGroupMessage {
  /**
   * <p>The identifier for the source option group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid option group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceOptionGroupIdentifier: string | undefined;

  /**
   * <p>The identifier for the copied option group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-option-group</code>
   *          </p>
   * @public
   */
  TargetOptionGroupIdentifier: string | undefined;

  /**
   * <p>The description for the copied option group.</p>
   * @public
   */
  TargetOptionGroupDescription: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RebootDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceToPointInTime</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DBSecurityGroupMembership {
  /**
   * <p>The name of the DB security group.</p>
   * @public
   */
  DBSecurityGroupName?: string | undefined;

  /**
   * <p>The status of the DB security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.</p>
 * @public
 */
export interface OptionSetting {
  /**
   * <p>The name of the option that has settings that you can set.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current value of the option setting.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The default value of the option setting.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>The description of the option setting.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The DB engine specific parameter type.</p>
   * @public
   */
  ApplyType?: string | undefined;

  /**
   * <p>The data type of the option setting.</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>The allowed values of the option setting.</p>
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * <p>Indicates whether the option setting can be modified from the default.</p>
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * <p>Indicates whether the option setting is part of a collection.</p>
   * @public
   */
  IsCollection?: boolean | undefined;
}

/**
 * <p>This data type is used as a response element for queries on VPC security group membership.</p>
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The name of the VPC security group.</p>
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * <p>The membership status of the VPC security group.</p>
   *          <p>Currently, the only valid status is <code>active</code>.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>The details of an option.</p>
 * @public
 */
export interface Option {
  /**
   * <p>The name of the option.</p>
   * @public
   */
  OptionName?: string | undefined;

  /**
   * <p>The description of the option.</p>
   * @public
   */
  OptionDescription?: string | undefined;

  /**
   * <p>Indicates whether this option is persistent.</p>
   * @public
   */
  Persistent?: boolean | undefined;

  /**
   * <p>Indicates whether this option is permanent.</p>
   * @public
   */
  Permanent?: boolean | undefined;

  /**
   * <p>If required, the port configured for this option to use.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The version of the option.</p>
   * @public
   */
  OptionVersion?: string | undefined;

  /**
   * <p>The option settings for this option.</p>
   * @public
   */
  OptionSettings?: OptionSetting[] | undefined;

  /**
   * <p>If the option requires access to a port, then this DB security group allows access to the port.</p>
   * @public
   */
  DBSecurityGroupMemberships?: DBSecurityGroupMembership[] | undefined;

  /**
   * <p>If the option requires access to a port, then this VPC security group allows access to the port.</p>
   * @public
   */
  VpcSecurityGroupMemberships?: VpcSecurityGroupMembership[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface OptionGroup {
  /**
   * <p>Specifies the name of the option group.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>Provides a description of the option group.</p>
   * @public
   */
  OptionGroupDescription?: string | undefined;

  /**
   * <p>Indicates the name of the engine that this option group can be applied to.</p>
   * @public
   */
  EngineName?: string | undefined;

  /**
   * <p>Indicates the major engine version associated with this option group.</p>
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * <p>Indicates what options are available in the option group.</p>
   * @public
   */
  Options?: Option[] | undefined;

  /**
   * <p>Indicates whether this option group can be applied to both VPC
   *            and non-VPC instances. The value <code>true</code> indicates the option group
   *            can be applied to both VPC and non-VPC instances.</p>
   * @public
   */
  AllowsVpcAndNonVpcInstanceMemberships?: boolean | undefined;

  /**
   * <p>If <b>AllowsVpcAndNonVpcInstanceMemberships</b> is <code>false</code>, this field is blank.
   *            If <b>AllowsVpcAndNonVpcInstanceMemberships</b> is <code>true</code> and this field is blank,
   *            then this option group can be applied to both VPC and non-VPC instances.
   *            If this field contains a value, then this option group can only be
   *            applied to instances that are in the VPC indicated by this field.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) for the option group.</p>
   * @public
   */
  OptionGroupArn?: string | undefined;

  /**
   * <p>Specifies the name of the option group from which this option group is copied.</p>
   * @public
   */
  SourceOptionGroup?: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services account ID for the option group from which this option group is copied.</p>
   * @public
   */
  SourceAccountId?: string | undefined;

  /**
   * <p>Indicates when the option group was copied.</p>
   * @public
   */
  CopyTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CopyOptionGroupResult {
  /**
   * <p></p>
   * @public
   */
  OptionGroup?: OptionGroup | undefined;
}

/**
 * <p>The option group you are trying to create already exists.</p>
 * @public
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
 * @public
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
 * @public
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

/**
 * <p>A blue/green deployment with the specified name already exists.</p>
 * @public
 */
export class BlueGreenDeploymentAlreadyExistsFault extends __BaseException {
  readonly name: "BlueGreenDeploymentAlreadyExistsFault" = "BlueGreenDeploymentAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BlueGreenDeploymentAlreadyExistsFault, __BaseException>) {
    super({
      name: "BlueGreenDeploymentAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BlueGreenDeploymentAlreadyExistsFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateBlueGreenDeploymentRequest {
  /**
   * <p>The name of the blue/green deployment.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be the same as an existing blue/green deployment name in the same account and Amazon Web Services Region.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BlueGreenDeploymentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source production database.</p>
   *          <p>Specify the database that you want to clone. The blue/green deployment creates this database in
   *            the green environment. You can make updates to the database in the green environment, such as an engine
   *            version upgrade. When you are ready, you can switch the database in the green environment to be the
   *            production database.</p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>The engine version of the database in the green environment.</p>
   *          <p>Specify the engine version to upgrade to in the green environment.</p>
   * @public
   */
  TargetEngineVersion?: string | undefined;

  /**
   * <p>The DB parameter group associated with the DB instance in the green environment.</p>
   *          <p>To test parameter changes, specify a DB parameter group that is different from the one associated
   *             with the source DB instance.</p>
   * @public
   */
  TargetDBParameterGroupName?: string | undefined;

  /**
   * <p>The DB cluster parameter group associated with the Aurora DB cluster in the green environment.</p>
   *          <p>To test parameter changes, specify a DB cluster parameter group that is different from the one associated
   *             with the source DB cluster.</p>
   * @public
   */
  TargetDBClusterParameterGroupName?: string | undefined;

  /**
   * <p>Tags to assign to the blue/green deployment.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specify the DB instance class for the databases in the green environment.</p>
   *          <p>This parameter only applies to RDS DB instances, because DB instances within an Aurora DB cluster can
   *         have multiple different instance classes. If you're creating a blue/green deployment from an Aurora DB cluster,
   *         don't specify this parameter. After the green environment is created, you can individually modify the instance classes
   *         of the DB instances within the green DB cluster.</p>
   * @public
   */
  TargetDBInstanceClass?: string | undefined;

  /**
   * <p>Whether to upgrade the storage file system configuration on the green database. This
   *             option migrates the green DB instance from the older 32-bit file system to the preferred
   *             configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.UpgradeFileSystem">Upgrading the storage file system for a DB instance</a>.</p>
   * @public
   */
  UpgradeTargetStorageConfig?: boolean | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to allocate for the green DB instance.
   *             For information about valid IOPS values, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html">Amazon RDS DB instance storage</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to Amazon Aurora blue/green deployments.</p>
   * @public
   */
  TargetIops?: number | undefined;

  /**
   * <p>The storage type to associate with the green DB instance.</p>
   *          <p>Valid Values: <code>gp2 | gp3 | io1 | io2</code>
   *          </p>
   *          <p>This setting doesn't apply to Amazon Aurora blue/green deployments.</p>
   * @public
   */
  TargetStorageType?: string | undefined;

  /**
   * <p>The amount of storage in gibibytes (GiB) to allocate for the green DB instance. You can choose to
   *             increase or decrease the allocated storage on the green DB instance.</p>
   *          <p>This setting doesn't apply to Amazon Aurora blue/green deployments.</p>
   * @public
   */
  TargetAllocatedStorage?: number | undefined;

  /**
   * <p>The storage throughput value for the green DB instance.</p>
   *          <p>This setting applies only to the <code>gp3</code> storage type.</p>
   *          <p>This setting doesn't apply to Amazon Aurora blue/green deployments.</p>
   * @public
   */
  TargetStorageThroughput?: number | undefined;
}

/**
 * <p>Contains the details about a blue/green deployment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
 *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *                 User Guide</i>.</p>
 * @public
 */
export interface SwitchoverDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of a resource in the blue environment.</p>
   * @public
   */
  SourceMember?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource in the green environment.</p>
   * @public
   */
  TargetMember?: string | undefined;

  /**
   * <p>The switchover status of a resource in a blue/green deployment.</p>
   *          <p>Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code> - The resource is being prepared to switch
   *                     over.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The resource is ready to switch over.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SWITCHOVER_IN_PROGRESS</code> - The resource is being switched
   *                     over.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SWITCHOVER_COMPLETED</code> - The resource has been switched
   *                     over.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SWITCHOVER_FAILED</code> - The resource attempted to switch over but
   *                     failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISSING_SOURCE</code> - The source resource has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISSING_TARGET</code> - The target resource has been deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Details about a task for a blue/green deployment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
 *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *                 User Guide</i>.</p>
 * @public
 */
export interface BlueGreenDeploymentTask {
  /**
   * <p>The name of the blue/green deployment task.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the blue/green deployment task.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The resource is being prepared for deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The resource is being deployed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The resource has been deployed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Deployment of the resource failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Details about a blue/green deployment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
 *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *                 User Guide</i>.</p>
 * @public
 */
export interface BlueGreenDeployment {
  /**
   * <p>The unique identifier of the blue/green deployment.</p>
   * @public
   */
  BlueGreenDeploymentIdentifier?: string | undefined;

  /**
   * <p>The user-supplied name of the blue/green deployment.</p>
   * @public
   */
  BlueGreenDeploymentName?: string | undefined;

  /**
   * <p>The source database for the blue/green deployment.</p>
   *          <p>Before switchover, the source database is the production database in the blue environment.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The target database for the blue/green deployment.</p>
   *          <p>Before switchover, the target database is the clone database in the green environment.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The details about each source and target resource in the blue/green deployment.</p>
   * @public
   */
  SwitchoverDetails?: SwitchoverDetail[] | undefined;

  /**
   * <p>Either tasks to be performed or tasks that have been completed on the target database before switchover.</p>
   * @public
   */
  Tasks?: BlueGreenDeploymentTask[] | undefined;

  /**
   * <p>The status of the blue/green deployment.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code> - Resources are being created in the green environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - Resources are available in the green environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SWITCHOVER_IN_PROGRESS</code> - The deployment is being switched from the blue environment to the
   *                     green environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SWITCHOVER_COMPLETED</code> - Switchover from the blue environment to the green environment is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_CONFIGURATION</code> - Resources in the green environment are invalid, so switchover isn't possible.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SWITCHOVER_FAILED</code> - Switchover was attempted but failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The blue/green deployment is being deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Additional information about the status of the blue/green deployment.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The time when the blue/green deployment was created, in Universal Coordinated Time
   *             (UTC).</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The time when the blue/green deployment was deleted, in Universal Coordinated Time
   *             (UTC).</p>
   * @public
   */
  DeleteTime?: Date | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBlueGreenDeploymentResponse {
  /**
   * <p>Details about a blue/green deployment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
   *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
   *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
   *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
   *                 User Guide</i>.</p>
   * @public
   */
  BlueGreenDeployment?: BlueGreenDeployment | undefined;
}

/**
 * <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB
 *             cluster parameter group.</p>
 * @public
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
 * @public
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
 * <p>The request would result in the user exceeding the allowed number of DB
 *             instances.</p>
 * @public
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
 * <p>The source DB cluster isn't supported for a blue/green deployment.</p>
 * @public
 */
export class SourceClusterNotSupportedFault extends __BaseException {
  readonly name: "SourceClusterNotSupportedFault" = "SourceClusterNotSupportedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceClusterNotSupportedFault, __BaseException>) {
    super({
      name: "SourceClusterNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceClusterNotSupportedFault.prototype);
  }
}

/**
 * <p>The source DB instance isn't supported for a blue/green deployment.</p>
 * @public
 */
export class SourceDatabaseNotSupportedFault extends __BaseException {
  readonly name: "SourceDatabaseNotSupportedFault" = "SourceDatabaseNotSupportedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceDatabaseNotSupportedFault, __BaseException>) {
    super({
      name: "SourceDatabaseNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceDatabaseNotSupportedFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed amount of storage
 *             available across all DB instances.</p>
 * @public
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
 * <p>An error occurred while trying to create the CEV.</p>
 * @public
 */
export class CreateCustomDBEngineVersionFault extends __BaseException {
  readonly name: "CreateCustomDBEngineVersionFault" = "CreateCustomDBEngineVersionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateCustomDBEngineVersionFault, __BaseException>) {
    super({
      name: "CreateCustomDBEngineVersionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateCustomDBEngineVersionFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateCustomDBEngineVersionMessage {
  /**
   * <p>The database engine. RDS Custom for Oracle supports the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The name of your CEV. The name format is 19.<i>customized_string</i>.
   *             For example, a valid CEV name is <code>19.my_cev1</code>. This setting is required for RDS
   *             Custom for Oracle, but optional for Amazon RDS. The combination of <code>Engine</code>
   *             and <code>EngineVersion</code> is unique per customer per Region.</p>
   * @public
   */
  EngineVersion: string | undefined;

  /**
   * <p>The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid
   *             bucket name is <code>my-custom-installation-files</code>.</p>
   * @public
   */
  DatabaseInstallationFilesS3BucketName?: string | undefined;

  /**
   * <p>The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid
   *             bucket name is <code>123456789012/cev1</code>. If this setting isn't specified, no prefix is assumed.</p>
   * @public
   */
  DatabaseInstallationFilesS3Prefix?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI). For RDS Custom for SQL Server, an AMI ID is required
   *             to create a CEV. For RDS Custom for Oracle, the default is the most recent AMI available,
   *             but you can specify an AMI ID that was used in a different Oracle CEV. Find the AMIs
   *             used by your CEVs by calling the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html">DescribeDBEngineVersions</a> operation.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for
   *             RDS Custom, but optional for Amazon RDS.</p>
   *          <p>If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom.
   *             No further action is necessary. If you don't already have a symmetric encryption KMS key in your account,
   *             follow the instructions in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk">
   *                 Creating a symmetric encryption KMS key</a> in the <i>Amazon Web Services Key Management Service
   *                     Developer Guide</i>.</p>
   *          <p>You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>The ARN of a CEV to use as a source for creating a new CEV. You can specify a different
   *             Amazon Machine Imagine (AMI) by using either <code>Source</code> or
   *                 <code>UseAwsProvidedLatestImage</code>. You can't specify a different JSON manifest
   *             when you specify <code>SourceCustomDbEngineVersionIdentifier</code>.</p>
   * @public
   */
  SourceCustomDbEngineVersionIdentifier?: string | undefined;

  /**
   * <p>Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for
   *             the CEV. If you specify <code>UseAwsProvidedLatestImage</code>, you can't also specify
   *                 <code>ImageId</code>.</p>
   * @public
   */
  UseAwsProvidedLatestImage?: boolean | undefined;

  /**
   * <p>An optional description of your CEV.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3.
   *             Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which
   *             they are listed.</p>
   *          <p>The following JSON fields are valid:</p>
   *          <dl>
   *             <dt>MediaImportTemplateVersion</dt>
   *             <dd>
   *                <p>Version of the CEV manifest. The date is in the format <code>YYYY-MM-DD</code>.</p>
   *             </dd>
   *             <dt>databaseInstallationFileNames</dt>
   *             <dd>
   *                <p>Ordered list of installation files for the CEV.</p>
   *             </dd>
   *             <dt>opatchFileNames</dt>
   *             <dd>
   *                <p>Ordered list of OPatch installers used for the Oracle DB engine.</p>
   *             </dd>
   *             <dt>psuRuPatchFileNames</dt>
   *             <dd>
   *                <p>The PSU and RU patches for this CEV.</p>
   *             </dd>
   *             <dt>OtherPatchFileNames</dt>
   *             <dd>
   *                <p>The patches that are not in the list of PSU and RU patches.
   *                     Amazon RDS applies these patches after applying the PSU and RU patches.</p>
   *             </dd>
   *          </dl>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest">
   *             Creating the CEV manifest</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  Manifest?: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A CEV with the specified name already exists.</p>
 * @public
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
 * <p>The specified CEV was not found.</p>
 * @public
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
 * <p>You have exceeded your CEV quota.</p>
 * @public
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
 * @public
 */
export interface CharacterSet {
  /**
   * <p>The name of the character set.</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>The description of the character set.</p>
   * @public
   */
  CharacterSetDescription?: string | undefined;
}

/**
 * <p>A value that indicates the AMI information.</p>
 * @public
 */
export interface CustomDBEngineVersionAMI {
  /**
   * <p>A value that indicates the ID of the AMI.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>A value that indicates the status of a custom engine version (CEV).</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Specifies any Aurora Serverless v2 properties or limits that differ between Aurora engine versions and platform versions.
 *         You can test the values of this attribute when deciding which Aurora version to use in a new or upgraded
 *         DB cluster. You can also retrieve the version of an existing DB cluster and check whether that version
 *         supports certain Aurora Serverless v2 features before you attempt to use those features.
 *       </p>
 * @public
 */
export interface ServerlessV2FeaturesSupport {
  /**
   * <p>If the minimum capacity is 0 ACUs, the engine version or platform version supports the automatic pause/resume
   *          feature of Aurora Serverless v2.</p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>
   *          Specifies the upper Aurora Serverless v2 capacity limit for a particular engine version or platform version.
   *          Depending on the engine version, the maximum capacity for an Aurora Serverless v2 cluster might be
   *          <code>256</code> or <code>128</code>.
   *          </p>
   * @public
   */
  MaxCapacity?: number | undefined;
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
 * @public
 */
export interface Timezone {
  /**
   * <p>The name of the time zone.</p>
   * @public
   */
  TimezoneName?: string | undefined;
}

/**
 * <p>The version of the database engine that a DB instance can be upgraded to.</p>
 * @public
 */
export interface UpgradeTarget {
  /**
   * <p>The name of the upgrade target database engine.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version number of the upgrade target database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The version of the database engine that a DB instance can be upgraded to.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates whether the target version is applied to any source DB instances that have <code>AutoMinorVersionUpgrade</code> set to true.</p>
   *          <p>This parameter is dynamic, and is set by RDS.</p>
   * @public
   */
  AutoUpgrade?: boolean | undefined;

  /**
   * <p>Indicates whether upgrading to the target version requires upgrading the major version of the database engine.</p>
   * @public
   */
  IsMajorVersionUpgrade?: boolean | undefined;

  /**
   * <p>A list of the supported DB engine modes for the target engine version.</p>
   * @public
   */
  SupportedEngineModes?: string[] | undefined;

  /**
   * <p>Indicates whether you can use Aurora parallel query with the target engine version.</p>
   * @public
   */
  SupportsParallelQuery?: boolean | undefined;

  /**
   * <p>Indicates whether you can use Aurora global databases with the target engine version.</p>
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;

  /**
   * <p>Indicates whether you can use Babelfish for Aurora PostgreSQL with the target engine version.</p>
   * @public
   */
  SupportsBabelfish?: boolean | undefined;

  /**
   * <p>Indicates whether the DB engine version supports Aurora Limitless Database.</p>
   * @public
   */
  SupportsLimitlessDatabase?: boolean | undefined;

  /**
   * <p>Indicates whether the target engine version supports forwarding write operations from reader DB instances
   *             to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  SupportsLocalWriteForwarding?: boolean | undefined;

  /**
   * <p>Indicates whether the DB engine version supports zero-ETL integrations with
   *             Amazon Redshift.</p>
   * @public
   */
  SupportsIntegrations?: boolean | undefined;
}

/**
 * <p>This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.</p>
 * @public
 */
export interface DBEngineVersion {
  /**
   * <p>The name of the database engine.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The major engine version of the CEV.</p>
   * @public
   */
  MajorEngineVersion?: string | undefined;

  /**
   * <p>The version number of the database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket that contains your database installation files.</p>
   * @public
   */
  DatabaseInstallationFilesS3BucketName?: string | undefined;

  /**
   * <p>The Amazon S3 directory that contains the database installation files.
   *             If not specified, then no prefix is assumed.</p>
   * @public
   */
  DatabaseInstallationFilesS3Prefix?: string | undefined;

  /**
   * <p>JSON string that lists the installation files and parameters that RDS Custom uses to create a custom engine version (CEV).
   *           RDS Custom applies the patches in the order in which they're listed in the manifest. You can set the Oracle home, Oracle base,
   *           and UNIX/Linux user and group using the installation parameters. For more information,
   *           see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.preparing.html#custom-cev.preparing.manifest.fields">JSON fields in the CEV manifest</a> in the <i>Amazon RDS User Guide</i>.
   *       </p>
   * @public
   */
  CustomDBEngineVersionManifest?: string | undefined;

  /**
   * <p>The name of the DB parameter group family for the database engine.</p>
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * <p>The description of the database engine.</p>
   * @public
   */
  DBEngineDescription?: string | undefined;

  /**
   * <p>The ARN of the custom engine version.</p>
   * @public
   */
  DBEngineVersionArn?: string | undefined;

  /**
   * <p>The description of the database engine version.</p>
   * @public
   */
  DBEngineVersionDescription?: string | undefined;

  /**
   * <p>The default character set for new instances of this engine version,
   *             if the <code>CharacterSetName</code> parameter of the CreateDBInstance API
   *             isn't specified.</p>
   * @public
   */
  DefaultCharacterSet?: CharacterSet | undefined;

  /**
   * <p>The EC2 image</p>
   * @public
   */
  Image?: CustomDBEngineVersionAMI | undefined;

  /**
   * <p>A value that indicates the source media provider of the AMI based on the usage operation.  Applicable for RDS Custom for SQL Server.</p>
   * @public
   */
  DBEngineMediaType?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted CEV. This parameter is required for
   *             RDS Custom, but optional for Amazon RDS.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>The creation time of the DB engine version.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>A list of the character sets supported by this engine for the <code>CharacterSetName</code> parameter of the <code>CreateDBInstance</code> operation.</p>
   * @public
   */
  SupportedCharacterSets?: CharacterSet[] | undefined;

  /**
   * <p>A list of the character sets supported by the Oracle DB engine for the <code>NcharCharacterSetName</code> parameter of the <code>CreateDBInstance</code> operation.</p>
   * @public
   */
  SupportedNcharCharacterSets?: CharacterSet[] | undefined;

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   * @public
   */
  ValidUpgradeTarget?: UpgradeTarget[] | undefined;

  /**
   * <p>A list of the time zones supported by this engine for the
   *             <code>Timezone</code> parameter of the <code>CreateDBInstance</code> action.</p>
   * @public
   */
  SupportedTimezones?: Timezone[] | undefined;

  /**
   * <p>The types of logs that the database engine has available for export to CloudWatch Logs.</p>
   * @public
   */
  ExportableLogTypes?: string[] | undefined;

  /**
   * <p>Indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.</p>
   * @public
   */
  SupportsLogExportsToCloudwatchLogs?: boolean | undefined;

  /**
   * <p>Indicates whether the database engine version supports read replicas.</p>
   * @public
   */
  SupportsReadReplica?: boolean | undefined;

  /**
   * <p>A list of the supported DB engine modes.</p>
   * @public
   */
  SupportedEngineModes?: string[] | undefined;

  /**
   * <p>A list of features supported by the DB engine.</p>
   *          <p>The supported features vary by DB engine and DB engine version.</p>
   *          <p>To determine the supported features for a specific DB engine and DB engine version using the CLI,
   *         use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine <engine_name> --engine-version <engine_version></code>
   *          </p>
   *          <p>For example, to determine the supported features for RDS for PostgreSQL version 13.3 using the CLI,
   *         use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine postgres --engine-version 13.3</code>
   *          </p>
   *          <p>The supported features are listed under <code>SupportedFeatureNames</code> in the output.</p>
   * @public
   */
  SupportedFeatureNames?: string[] | undefined;

  /**
   * <p>The status of the DB engine version, either <code>available</code> or <code>deprecated</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Indicates whether you can use Aurora parallel query with a specific DB engine version.</p>
   * @public
   */
  SupportsParallelQuery?: boolean | undefined;

  /**
   * <p>Indicates whether you can use Aurora global databases with a specific DB engine version.</p>
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>Indicates whether the engine version supports Babelfish for Aurora PostgreSQL.</p>
   * @public
   */
  SupportsBabelfish?: boolean | undefined;

  /**
   * <p>Indicates whether the DB engine version supports Aurora Limitless Database.</p>
   * @public
   */
  SupportsLimitlessDatabase?: boolean | undefined;

  /**
   * <p>Indicates whether the engine version supports rotating the server certificate without
   *               rebooting the DB instance.</p>
   * @public
   */
  SupportsCertificateRotationWithoutRestart?: boolean | undefined;

  /**
   * <p>A list of the supported CA certificate identifiers.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   * @public
   */
  SupportedCACertificateIdentifiers?: string[] | undefined;

  /**
   * <p>Indicates whether the DB engine version supports forwarding write operations from reader DB instances
   *             to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  SupportsLocalWriteForwarding?: boolean | undefined;

  /**
   * <p>Indicates whether the DB engine version supports zero-ETL integrations with
   *             Amazon Redshift.</p>
   * @public
   */
  SupportsIntegrations?: boolean | undefined;

  /**
   * <p>Specifies any Aurora Serverless v2 properties or limits that differ between Aurora engine versions.
   *         You can test the values of this attribute when deciding which Aurora version to use in a new or upgraded
   *         DB cluster. You can also retrieve the version of an existing DB cluster and check whether that version
   *         supports certain Aurora Serverless v2 features before you attempt to use those features.
   *       </p>
   * @public
   */
  ServerlessV2FeaturesSupport?: ServerlessV2FeaturesSupport | undefined;
}

/**
 * <p>The AMI configuration prerequisite has not been met.</p>
 * @public
 */
export class Ec2ImagePropertiesNotSupportedFault extends __BaseException {
  readonly name: "Ec2ImagePropertiesNotSupportedFault" = "Ec2ImagePropertiesNotSupportedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<Ec2ImagePropertiesNotSupportedFault, __BaseException>) {
    super({
      name: "Ec2ImagePropertiesNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, Ec2ImagePropertiesNotSupportedFault.prototype);
  }
}

/**
 * <p>You can't delete the CEV.</p>
 * @public
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
 * @public
 * @enum
 */
export const ClusterScalabilityType = {
  LIMITLESS: "limitless",
  SCALEOUT: "scaleout",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type ClusterScalabilityType = (typeof ClusterScalabilityType)[keyof typeof ClusterScalabilityType];

/**
 * @public
 * @enum
 */
export const DatabaseInsightsMode = {
  ADVANCED: "advanced",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type DatabaseInsightsMode = (typeof DatabaseInsightsMode)[keyof typeof DatabaseInsightsMode];

/**
 * @public
 * @enum
 */
export const MasterUserAuthenticationType = {
  IAM_DB_AUTH: "iam-db-auth",
  PASSWORD: "password",
} as const;

/**
 * @public
 */
export type MasterUserAuthenticationType =
  (typeof MasterUserAuthenticationType)[keyof typeof MasterUserAuthenticationType];

/**
 * @public
 * @enum
 */
export const ReplicaMode = {
  MOUNTED: "mounted",
  OPEN_READ_ONLY: "open-read-only",
} as const;

/**
 * @public
 */
export type ReplicaMode = (typeof ReplicaMode)[keyof typeof ReplicaMode];

/**
 * <p>Reserved for future use.</p>
 * @public
 */
export interface RdsCustomClusterConfiguration {
  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  InterconnectSubnetId?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  TransitGatewayMulticastDomainId?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  ReplicaMode?: ReplicaMode | undefined;
}

/**
 * <p>Contains the scaling configuration of an Aurora Serverless v1 DB cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 * @public
 */
export interface ScalingConfiguration {
  /**
   * <p>The minimum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *          <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *          <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *          <p>The minimum capacity must be less than or equal to the maximum capacity.</p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *          <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *          <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *          <p>The maximum capacity must be greater than or equal to the minimum capacity.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in <code>serverless</code> DB engine mode.
   *             A DB cluster can be paused only when it's idle (it has no connections).</p>
   *          <note>
   *             <p>If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot.
   *                 In this case, the DB cluster is restored when there is a request to connect to it.</p>
   *          </note>
   * @public
   */
  AutoPause?: boolean | undefined;

  /**
   * <p>The time, in seconds, before an Aurora DB cluster in <code>serverless</code> mode is paused.</p>
   *          <p>Specify a value between 300 and 86,400 seconds.</p>
   * @public
   */
  SecondsUntilAutoPause?: number | undefined;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *          <p>
   *             <code>ForceApplyCapacityChange</code> sets the capacity to the specified value as soon as possible.</p>
   *          <p>
   *             <code>RollbackCapacityChange</code>, the default, ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   *          <important>
   *             <p>If you specify <code>ForceApplyCapacityChange</code>, connections that
   *                 prevent Aurora Serverless v1 from finding a scaling point might be dropped.</p>
   *          </important>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
   *                     Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  TimeoutAction?: string | undefined;

  /**
   * <p>The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point
   *             to perform seamless scaling before enforcing the timeout action. The default is 300.</p>
   *          <p>Specify a value between 60 and 600 seconds.</p>
   * @public
   */
  SecondsBeforeTimeout?: number | undefined;
}

/**
 * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 * @public
 */
export interface ServerlessV2ScalingConfiguration {
  /**
   * <p>The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
   *             You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on.
   *             For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0.
   *             For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.
   *         </p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
   *             You can specify ACU values in half-step increments, such as 32, 32.5, 33, and so on. The largest value
   *             that you can use is 256 for recent Aurora versions, or 128 for older versions. You can check the attributes of your engine version or platform version to determine the specific maximum capacity supported.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before
   *          Aurora attempts to automatically pause it.
   *        </p>
   *          <p>Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.</p>
   * @public
   */
  SecondsUntilAutoPause?: number | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateDBClusterMessage {
  /**
   * <p>A list of Availability Zones (AZs) where you specifically want to create DB instances in the DB cluster.</p>
   *          <p>For the first three DB instances that you create, RDS distributes each DB instance to
   *             a different AZ that you specify. For additional DB instances that you create, RDS
   *             randomly distributes them to the AZs that you specified. For example, if you create a DB
   *             cluster with one writer instance and three reader instances, RDS might distribute the
   *             writer instance to AZ 1, the first reader instance to AZ 2, the second reader instance
   *             to AZ 3, and the third reader instance to either AZ 1, AZ 2, or AZ 3. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.AvailabilityZones">Availability Zones</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Concepts.AuroraHighAvailability.Instances">High availability for Aurora DB instances</a> in the <i>Amazon Aurora
   *                 User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't specify more than three AZs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The number of days for which automated backups are retained.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The name of the character set (<code>CharacterSet</code>) to associate the DB cluster with.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>The name for your database of up to 64 alphanumeric characters.
   *             A database named <code>postgres</code> is always created. If this parameter is specified, an additional database with this name is created.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The identifier for this DB cluster. This parameter is stored as a lowercase string.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 (for Aurora DB clusters) or 1 to 52 (for Multi-AZ DB
   *                     clusters) letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate
   *             with this DB cluster. If you don't specify a value, then
   *           the default DB cluster parameter group for the specified DB engine and version is used.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p>
   *          <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DB subnet group.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The database engine to use for this DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>neptune</code> - For information about using Amazon Neptune, see the
   *                         <a href="https://docs.aws.amazon.com/neptune/latest/userguide/intro.html">
   *                      <i>Amazon Neptune User Guide</i>
   *                   </a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (MySQL 8.0-compatible),
   *             use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>You can supply either <code>5.7</code> or <code>8.0</code> to use the default engine version for Aurora MySQL version 2 or
   *             version 3, respectively.</p>
   *          <p>To list all of the available engine versions for Aurora PostgreSQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for RDS for MySQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for RDS for PostgreSQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>For information about a specific engine, see the following topics:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora MySQL - see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html">Database engine updates for Amazon Aurora MySQL</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>Aurora PostgreSQL - see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html">Amazon Aurora PostgreSQL releases and engine versions</a> in the
   *            <i>Amazon Aurora User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">Amazon RDS for MySQL</a> in the <i>Amazon RDS User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts">Amazon RDS for PostgreSQL</a> in the <i>Amazon RDS User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for MySQL and Aurora MySQL - <code>3306</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL and Aurora PostgreSQL - <code>5432</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The password for the master database user.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>Can contain any printable ASCII character except "/", """, or "@".</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if <code>ManageMasterUserPassword</code> is turned on.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The option group to associate the DB cluster with.</p>
   *          <p>DB clusters are associated with a default option group that can't be modified.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled
   *         using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>The default is a 30-minute window selected at random from an
   *         8-hour block of time for each Amazon Web Services Region.
   *         To view the time blocks available, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow">
   *             Backup window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Days must be one of <code>Mon | Tue | Wed | Thu | Fri | Sat | Sun</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB
   *             cluster is created as a read replica.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * <p>Tags to assign to the DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB cluster.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *                  To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>When a KMS key isn't specified in <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted
   *                     source, then Amazon RDS uses the KMS key used to encrypt the
   *                     source. Otherwise, Amazon RDS uses your default KMS key.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>StorageEncrypted</code> parameter is enabled and
   *                         <code>ReplicationSourceIdentifier</code> isn't specified, then Amazon RDS
   *                     uses your default KMS key.</p>
   *             </li>
   *          </ul>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   *          <p>If you create a read replica of an encrypted DB cluster in another Amazon Web Services Region, make
   *             sure to set <code>KmsKeyId</code> to a KMS key identifier that is valid in the destination Amazon Web Services
   *             Region. This KMS key is used to encrypt the read replica in that Amazon Web Services Region.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>When you are replicating a DB cluster from one Amazon Web Services GovCloud (US) Region to another,
   *             an URL that contains a Signature Version 4 signed request for the
   *                 <code>CreateDBCluster</code> operation to be called in the source Amazon Web Services Region where
   *             the DB cluster is replicated from. Specify <code>PreSignedUrl</code> only when you are
   *             performing cross-Region replication from an encrypted DB cluster.</p>
   *          <p>The presigned URL must be a valid request for the <code>CreateDBCluster</code> API
   *             operation that can run in the source Amazon Web Services Region that contains the encrypted DB
   *             cluster to copy.</p>
   *          <p>The presigned URL request must contain the following parameter values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The KMS key identifier for the KMS key to use to
   *                     encrypt the copy of the DB cluster in the destination Amazon Web Services Region. This should
   *                     refer to the same KMS key for both the <code>CreateDBCluster</code> operation
   *                     that is called in the destination Amazon Web Services Region, and the operation contained in
   *                     the presigned URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationRegion</code> - The name of the Amazon Web Services Region that Aurora read replica will
   *                     be created in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplicationSourceIdentifier</code> - The DB cluster identifier for the encrypted DB cluster to be copied.
   *                 This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an
   *                 encrypted DB cluster from the us-west-2 Amazon Web Services Region, then your <code>ReplicationSourceIdentifier</code> would look like
   *                 Example: <code>arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1</code>.</p>
   *             </li>
   *          </ul>
   *          <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *          <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify
   *                     <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying
   *                     <code>SourceRegion</code> autogenerates a presigned URL that is a valid request
   *                 for the operation that can run in the source Amazon Web Services Region.</p>
   *          </note>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database
   *                 Authentication</a> in the <i>Amazon Aurora User Guide</i> or
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">IAM database
   *                 authentication for MariaDB, MySQL, and PostgreSQL</a> in the <i>Amazon
   *                 RDS User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             <code>0</code>.</p>
   *          <p>Valid for Cluster Type: Aurora MySQL DB clusters only</p>
   *          <p>Default: <code>0</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>The following values are valid for each DB engine:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora MySQL - <code>audit | error | general | instance | slowquery | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Aurora PostgreSQL - <code>instance | postgresql | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>error | general | slowquery | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql | upgrade | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code> or <code>serverless</code>.</p>
   *          <p>The <code>serverless</code> engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the
   *         <code>provisioned</code> engine mode.</p>
   *          <p>For information about limitations and requirements for Serverless DB clusters, see the
   *             following sections in the <i>Amazon Aurora User Guide</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations">Limitations of Aurora
   *                         Serverless v1</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html">Requirements
   *                         for Aurora Serverless v2</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  ScalingConfiguration?: ScalingConfiguration | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * <p>The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example <code>db.m6gd.xlarge</code>.
   *             Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.</p>
   *          <p>For the full list of DB instance classes and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB instance class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * <p>The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   *          <p>This setting is required to create a Multi-AZ DB cluster.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>For information on storage types for Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type">Storage configurations for Amazon Aurora DB clusters</a>. For information on storage types for Multi-AZ DB
   *             clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings">Settings for creating Multi-AZ DB clusters</a>.</p>
   *          <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *          <p>When specified for a Multi-AZ DB cluster, a value for the <code>Iops</code> parameter is required.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora DB clusters - <code>aurora | aurora-iopt1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Multi-AZ DB clusters - <code>io1 | io2 | gp3</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora DB clusters - <code>aurora</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Multi-AZ DB clusters - <code>io1</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>When you create an Aurora DB cluster with the storage type set to <code>aurora-iopt1</code>, the storage type is returned
   *                 in the response. The storage type isn't returned when you set it to <code>aurora</code>.</p>
   *          </note>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated
   *             for each DB instance in the Multi-AZ DB cluster.</p>
   *          <p>For information about valid IOPS values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Provisioned IOPS storage</a> in the <i>Amazon RDS
   *                 User Guide</i>.</p>
   *          <p>This setting is required to create a Multi-AZ DB cluster.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a multiple between .5 and 50 of the storage amount for the DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies whether the DB cluster is publicly accessible.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   *          <p>When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings.</p>
   *          <p>When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.</p>
   *          <p>The default behavior when <code>PubliclyAccessible</code> is not specified depends on whether a <code>DBSubnetGroup</code> is specified.</p>
   *          <p>If <code>DBSubnetGroup</code> isn't specified, <code>PubliclyAccessible</code> defaults to <code>true</code>.</p>
   *          <p>If <code>DBSubnetGroup</code> is specified, <code>PubliclyAccessible</code> defaults to <code>false</code> unless the value of <code>DBSubnetGroup</code> is <code>default</code>, in which case <code>PubliclyAccessible</code> defaults to <code>true</code>.</p>
   *          <p>If <code>PubliclyAccessible</code> is true and the VPC that the <code>DBSubnetGroup</code> is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.
   *             By default, minor engine upgrades are applied automatically.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Specifies whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The global cluster ID of an Aurora cluster that becomes the primary cluster
   *             in the new global database cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint
   *             isn't enabled.</p>
   *          <p>When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running
   *             SQL queries on the DB cluster. You can also query your database
   *             from inside the RDS console with the RDS query editor.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using RDS Data API</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  EnableHttpEndpoint?: boolean | undefined;

  /**
   * <p>Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The Active Directory directory ID to create the DB cluster in.</p>
   *          <p>For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos authentication</a>
   *             in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster
   *       (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that
   *       are secondary clusters in an Aurora global database.</p>
   *          <p>You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter
   *       enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to
   *       this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the
   *         primary is demoted by a global cluster API operation, but it does nothing until then.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  EnableGlobalWriteForwarding?: boolean | undefined;

  /**
   * <p>The network type of the DB cluster.</p>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB cluster.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   *          <p>Valid Values: <code>IPV4 | DUAL</code>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off
   *             collecting Enhanced Monitoring metrics, specify <code>0</code>.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, also set <code>MonitoringInterval</code>
   *             to a value other than <code>0</code>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values: <code>0 | 1 | 5 | 10 | 15 | 30 | 60</code>
   *          </p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
   *             An example is <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting
   *                 up and enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than <code>0</code>, supply a <code>MonitoringRoleArn</code> value.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>The mode of Database Insights to enable for the DB cluster.</p>
   *          <p>If you set this value to <code>advanced</code>, you must also set the <code>PerformanceInsightsEnabled</code>
   *             parameter to <code>true</code> and the <code>PerformanceInsightsRetentionPeriod</code> parameter to 465.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * <p>Specifies whether to turn on Performance Insights for the DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">
   *             Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                 Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   *          <p>If you specify a retention period that isn't valid, such as <code>94</code>,  Amazon RDS issues an error.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>Specifies whether to enable Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   *          <note>
   *             <p>This setting is no longer used. Instead use the <code>ClusterScalabilityType</code> setting.</p>
   *          </note>
   * @public
   */
  EnableLimitlessDatabase?: boolean | undefined;

  /**
   * <p>Specifies the scalability mode of the Aurora DB cluster. When set to <code>limitless</code>, the cluster operates as an Aurora Limitless Database.
   *             When set to <code>standard</code> (the default), the cluster uses normal DB instance creation.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   *          <note>
   *             <p>You can't modify this setting after you create the DB cluster.</p>
   *          </note>
   * @public
   */
  ClusterScalabilityType?: ClusterScalabilityType | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't manage the master user password with Amazon Web Services Secrets Manager if <code>MasterUserPassword</code>
   *                     is specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By
   *             default, write operations aren't allowed on reader DB instances.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  EnableLocalWriteForwarding?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB cluster.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If you don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *             KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *             use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *             managed KMS key.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * <p>The CA certificate identifier to use for the DB cluster's server certificate.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The life cycle type for this DB cluster.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB cluster into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *              creating the DB cluster will fail if the DB major version is past its end of standard support date.</p>
   *          </note>
   *          <p>You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora - <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html">Amazon RDS Extended Support with Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon RDS - <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * <p>Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.</p>
   *          <p>You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>password</code> - Use standard database authentication with a password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-db-auth</code> - Use IAM database authentication for the master user.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.</p>
   * @public
   */
  MasterUserAuthenticationType?: MasterUserAuthenticationType | undefined;
}

/**
 * <p>Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB cluster.</p>
 * @public
 */
export interface DBClusterRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following
   *         values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be used to
   *             access other Amazon Web Services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable
   *                 to assume the IAM role in order to access other Amazon Web Services on your behalf.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The name of the feature associated with the Amazon Web Services Identity and Access Management (IAM) role.
   *             For information about supported feature names, see <a>DBEngineVersion</a>.</p>
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * <p>The details of the DB instance’s server certificate.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
 *             instance</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
 *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @public
 */
export interface CertificateDetails {
  /**
   * <p>The CA identifier of the CA certificate used for the DB instance's server certificate.</p>
   * @public
   */
  CAIdentifier?: string | undefined;

  /**
   * <p>The expiration date of the DB instance’s server certificate.</p>
   * @public
   */
  ValidTill?: Date | undefined;
}

/**
 * <p>Contains information about an instance that is part of a DB cluster.</p>
 * @public
 */
export interface DBClusterMember {
  /**
   * <p>Specifies the instance identifier for this member of the DB cluster.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>Indicates whether the cluster member is the primary DB instance for the DB cluster.</p>
   * @public
   */
  IsClusterWriter?: boolean | undefined;

  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB cluster.</p>
   * @public
   */
  DBClusterParameterGroupStatus?: string | undefined;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  PromotionTier?: number | undefined;
}

/**
 * <p>Contains status information for a DB cluster option group.</p>
 * @public
 */
export interface DBClusterOptionGroupStatus {
  /**
   * <p>Specifies the name of the DB cluster option group.</p>
   * @public
   */
  DBClusterOptionGroupName?: string | undefined;

  /**
   * <p>Specifies the status of the DB cluster option group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>An Active Directory Domain membership record associated with the DB instance or cluster.</p>
 * @public
 */
export interface DomainMembership {
  /**
   * <p>The identifier of the Active Directory Domain.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The status of the Active Directory Domain membership for the DB instance or cluster. Values include <code>joined</code>, <code>pending-join</code>, <code>failed</code>, and so on.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the Active Directory Domain.</p>
   * @public
   */
  FQDN?: string | undefined;

  /**
   * <p>The name of the IAM role used when making API calls to the Directory Service.</p>
   * @public
   */
  IAMRoleName?: string | undefined;

  /**
   * <p>The Active Directory organizational unit for the DB instance or cluster.</p>
   * @public
   */
  OU?: string | undefined;

  /**
   * <p>The ARN for the Secrets Manager secret with the credentials for the user that's a member of the domain.</p>
   * @public
   */
  AuthSecretArn?: string | undefined;

  /**
   * <p>The IPv4 DNS IP addresses of the primary and secondary Active Directory domain controllers.</p>
   * @public
   */
  DnsIps?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const WriteForwardingStatus = {
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
  UNKNOWN: "unknown",
} as const;

/**
 * @public
 */
export type WriteForwardingStatus = (typeof WriteForwardingStatus)[keyof typeof WriteForwardingStatus];

/**
 * @public
 * @enum
 */
export const LimitlessDatabaseStatus = {
  ACTIVE: "active",
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
  ERROR: "error",
  MODIFYING_MAX_CAPACITY: "modifying-max-capacity",
  NOT_IN_USE: "not-in-use",
} as const;

/**
 * @public
 */
export type LimitlessDatabaseStatus = (typeof LimitlessDatabaseStatus)[keyof typeof LimitlessDatabaseStatus];

/**
 * <p>Contains details for Aurora Limitless Database.</p>
 * @public
 */
export interface LimitlessDatabase {
  /**
   * <p>The status of Aurora Limitless Database.</p>
   * @public
   */
  Status?: LimitlessDatabaseStatus | undefined;

  /**
   * <p>The minimum required capacity for Aurora Limitless Database in Aurora capacity units (ACUs).</p>
   * @public
   */
  MinRequiredACU?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const LocalWriteForwardingStatus = {
  DISABLED: "disabled",
  DISABLING: "disabling",
  ENABLED: "enabled",
  ENABLING: "enabling",
  REQUESTED: "requested",
} as const;

/**
 * @public
 */
export type LocalWriteForwardingStatus = (typeof LocalWriteForwardingStatus)[keyof typeof LocalWriteForwardingStatus];

/**
 * <p>Contains the secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
 *             in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
 *             in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 * @public
 */
export interface MasterUserSecret {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The status of the secret.</p>
   *          <p>The possible status values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>creating</code> - The secret is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>active</code> - The secret is available for normal use and rotation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rotating</code> - The secret is being rotated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>impaired</code> - The secret can be used to access database credentials,
   *                     but it can't be rotated. A secret might have this status if, for example,
   *                     permissions are changed so that RDS can no longer access either the secret or
   *                     the KMS key for the secret.</p>
   *                <p>When a secret has this status, you can correct the condition that caused the
   *                     status. Alternatively, modify the DB instance to turn off automatic management
   *                     of database credentials, and then modify the DB instance again to turn on
   *                     automatic management of database credentials.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SecretStatus?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier that is used to encrypt the secret.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
 * @public
 */
export interface PendingCloudwatchLogsExports {
  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.</p>
   * @public
   */
  LogTypesToEnable?: string[] | undefined;

  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.</p>
   * @public
   */
  LogTypesToDisable?: string[] | undefined;
}

/**
 * <p>This data type is used as a response element in the <code>ModifyDBCluster</code> operation and
 *             contains changes that will be applied during the next maintenance window.</p>
 * @public
 */
export interface ClusterPendingModifiedValues {
  /**
   * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;

  /**
   * <p>The DBClusterIdentifier value for the DB cluster.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>The master credentials for the DB cluster.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>The database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The number of days for which automatic DB snapshots are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The storage type for the DB cluster.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The allocated storage size in gibibytes (GiB) for all database engines except Amazon Aurora. For Aurora,
   *             <code>AllocatedStorage</code> always returns 1, because Aurora DB cluster storage size isn't fixed, but
   *             instead automatically adjusts as needed.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * <p>The Provisioned IOPS (I/O operations per second) value. This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The details of the DB instance’s server certificate.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   * @public
   */
  CertificateDetails?: CertificateDetails | undefined;
}

/**
 * <p>The scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 * @public
 */
export interface ScalingConfigurationInfo {
  /**
   * <p>The minimum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>Indicates whether automatic pause is allowed for the Aurora DB cluster
   *             in <code>serverless</code> DB engine mode.</p>
   *          <p>When the value is set to false for an Aurora Serverless v1 DB cluster, the DB cluster automatically resumes.</p>
   * @public
   */
  AutoPause?: boolean | undefined;

  /**
   * <p>The remaining amount of time, in seconds, before the Aurora DB cluster in
   *                 <code>serverless</code> mode is paused. A DB cluster can be paused only when
   *             it's idle (it has no connections).</p>
   * @public
   */
  SecondsUntilAutoPause?: number | undefined;

  /**
   * <p>The action that occurs when Aurora times out while attempting to change the capacity of an
   *             Aurora Serverless v1 cluster. The value is either <code>ForceApplyCapacityChange</code> or
   *             <code>RollbackCapacityChange</code>.</p>
   *          <p>
   *             <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p>
   *          <p>
   *             <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   * @public
   */
  TimeoutAction?: string | undefined;

  /**
   * <p>The number of seconds before scaling times out. What happens when an attempted scaling action times out
   *             is determined by the <code>TimeoutAction</code> setting.</p>
   * @public
   */
  SecondsBeforeTimeout?: number | undefined;
}

/**
 * <p>The scaling configuration for an Aurora Serverless v2 DB cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 * @public
 */
export interface ServerlessV2ScalingConfigurationInfo {
  /**
   * <p>The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
   *             You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on.
   *             For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0.
   *             For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.
   *         </p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
   *             You can specify ACU values in half-step increments, such as 32, 32.5, 33, and so on. The largest value
   *             that you can use is 256 for recent Aurora versions, or 128 for older versions. You can check the attributes of your engine version or platform version to determine the specific maximum capacity supported.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>
   *          The number of seconds an Aurora Serverless v2 DB instance must be idle before
   *          Aurora attempts to automatically pause it.
   *          This property is only shown when the minimum capacity for the cluster is set to 0 ACUs.
   *          Changing the minimum capacity to a nonzero value removes this property. If you later
   *          change the minimum capacity back to 0 ACUs, this property is reset to its default value
   *          unless you specify it again.
   *        </p>
   *          <p>This value ranges between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.</p>
   * @public
   */
  SecondsUntilAutoPause?: number | undefined;
}

/**
 * <p>Reserved for future use.</p>
 * @public
 */
export interface DBClusterStatusInfo {
  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  StatusType?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
 *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
 *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
 *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
 *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
 *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
 *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
 *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
 *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
 *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <p>For more information on Multi-AZ DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
 *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @public
 */
export interface DBCluster {
  /**
   * <p>
   *             <code>AllocatedStorage</code> specifies the allocated storage size in gibibytes (GiB).
   *           For Aurora, <code>AllocatedStorage</code> can vary because Aurora DB cluster storage size adjusts as needed.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The list of Availability Zones (AZs) where instances in the DB cluster can be created.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The number of days for which automatic DB snapshots are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>If present, specifies the name of the character set that this cluster is associated with.</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>The name of the initial database that was specified for the DB cluster when it was created, if one was provided. This same name is returned for the life of the DB cluster.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The user-supplied identifier for the DB cluster. This identifier is the unique key that identifies a DB cluster.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group for the DB cluster.</p>
   * @public
   */
  DBClusterParameterGroup?: string | undefined;

  /**
   * <p>Information about the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</p>
   * @public
   */
  DBSubnetGroup?: string | undefined;

  /**
   * <p>The current state of this DB cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The progress of the operation as a percentage.</p>
   * @public
   */
  PercentProgress?: string | undefined;

  /**
   * <p>The earliest time to which a database can be restored with point-in-time
   *             restore.</p>
   * @public
   */
  EarliestRestorableTime?: Date | undefined;

  /**
   * <p>The connection endpoint for the primary instance of the DB cluster.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances
   *             connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections
   *             to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster.
   *             This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster.</p>
   *          <p>If a failover occurs, and the Aurora Replica that you are connected to is promoted
   *             to be the primary instance, your connection is dropped. To
   *             continue sending your read workload to other Aurora Replicas in the cluster,
   *             you can then reconnect to the reader endpoint.</p>
   * @public
   */
  ReaderEndpoint?: string | undefined;

  /**
   * <p>The custom endpoints associated with the DB cluster.</p>
   * @public
   */
  CustomEndpoints?: string[] | undefined;

  /**
   * <p>Indicates whether the DB cluster has instances in multiple Availability Zones.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The database engine used for this DB cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The latest time to which a database can be restored with point-in-time restore.</p>
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * <p>The port that the database engine is listening on.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The master username for the DB cluster.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The list of option group memberships for this DB cluster.</p>
   * @public
   */
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[] | undefined;

  /**
   * <p>The daily time range during which automated backups are
   *             created if automated backups are enabled, as determined
   *             by the <code>BackupRetentionPeriod</code>.</p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The identifier of the source DB cluster if this DB cluster is a read
   *             replica.</p>
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * <p>Contains one or more identifiers of the read replicas associated with this DB
   *             cluster.</p>
   * @public
   */
  ReadReplicaIdentifiers?: string[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  StatusInfos?: DBClusterStatusInfo[] | undefined;

  /**
   * <p>The list of DB instances that make up the DB cluster.</p>
   * @public
   */
  DBClusterMembers?: DBClusterMember[] | undefined;

  /**
   * <p>The list of VPC security groups that the DB cluster belongs to.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>The ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * <p>Indicates whether the DB cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>If <code>StorageEncrypted</code> is enabled, the Amazon Web Services KMS key identifier for the encrypted DB cluster.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB cluster. This identifier is found in Amazon Web Services CloudTrail log entries whenever
   *           the KMS key for the DB cluster is accessed.</p>
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * <p>A list of the Amazon Web Services Identity and Access Management (IAM) roles that are associated with the DB cluster.
   *           IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services
   *           on your behalf.</p>
   * @public
   */
  AssociatedRoles?: DBClusterRole[] | undefined;

  /**
   * <p>Indicates whether the mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>The ID of the clone group with which the DB cluster is associated. For newly created
   *             clusters, the ID is typically null. </p>
   *          <p>If you clone a DB cluster when the ID is null, the operation populates the ID value
   *             for the source cluster and the clone because both clusters become part of the same clone
   *             group. Even if you delete the clone cluster, the clone group ID remains for the lifetime
   *             of the source cluster to show that it was used in a cloning operation.</p>
   *          <p>For PITR, the clone group ID is inherited from the source cluster. For snapshot
   *             restore operations, the clone group ID isn't inherited from the source cluster.</p>
   * @public
   */
  CloneGroupId?: string | undefined;

  /**
   * <p>The time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>The earliest time to which a DB cluster can be backtracked.</p>
   * @public
   */
  EarliestBacktrackTime?: Date | undefined;

  /**
   * <p>The target backtrack window, in seconds. If this value is set to <code>0</code>, backtracking is
   *             disabled for the DB cluster. Otherwise, backtracking is enabled.</p>
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * <p>The number of change records stored for Backtrack.</p>
   * @public
   */
  BacktrackConsumedChangeRecords?: number | undefined;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p>
   *          <p>Log types vary by DB engine. For information about the log types for each DB engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The current capacity of an Aurora Serverless v1 DB cluster. The capacity is <code>0</code> (zero)
   *           when the cluster is paused.</p>
   *          <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  Capacity?: number | undefined;

  /**
   * <p>Information about pending changes to the DB cluster. This information is returned only when there are pending changes. Specific changes are identified by subelements.</p>
   * @public
   */
  PendingModifiedValues?: ClusterPendingModifiedValues | undefined;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code> or <code>serverless</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html">
   *             CreateDBCluster</a>.</p>
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * <p>The scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  ScalingConfigurationInfo?: ScalingConfigurationInfo | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * <p>The name of the compute and memory capacity class of the DB instance.</p>
   *          <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * <p>The storage type associated with the DB cluster.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The Provisioned IOPS (I/O operations per second) value.</p>
   *          <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The storage throughput for the DB cluster. The throughput is automatically set based on the IOPS that you provision, and is not configurable.</p>
   *          <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The next time you can modify the DB cluster to use the <code>aurora-iopt1</code> storage type.</p>
   *          <p>This setting is only for Aurora DB clusters.</p>
   * @public
   */
  IOOptimizedNextAllowedModificationTime?: Date | undefined;

  /**
   * <p>Indicates whether the DB cluster is publicly accessible.</p>
   *          <p>When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC),
   *               its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster,
   *               the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public
   *               access isn't permitted if the security group assigned to the DB cluster doesn't permit it.</p>
   *          <p>When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBCluster</a>.</p>
   *          <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Indicates whether minor version patches are applied automatically.</p>
   *          <p>This setting is for Aurora DB clusters and Multi-AZ DB clusters.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Indicates whether the HTTP endpoint is enabled for an Aurora DB cluster.</p>
   *          <p>When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running
   *           SQL queries on the DB cluster. You can also query your database
   *           from inside the RDS console with the RDS query editor.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using RDS Data API</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  HttpEndpointEnabled?: boolean | undefined;

  /**
   * <p>The mode of the database activity stream.
   *            Database events such as a change or access generate an activity stream event.
   *            The database session can handle these events either synchronously or asynchronously.</p>
   * @public
   */
  ActivityStreamMode?: ActivityStreamMode | undefined;

  /**
   * <p>The status of the database activity stream.</p>
   * @public
   */
  ActivityStreamStatus?: ActivityStreamStatus | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  ActivityStreamKmsKeyId?: string | undefined;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   * @public
   */
  ActivityStreamKinesisStreamName?: string | undefined;

  /**
   * <p>Indicates whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>Indicates whether the DB cluster is a clone of a DB cluster owned by a different Amazon Web Services account.</p>
   * @public
   */
  CrossAccountClone?: boolean | undefined;

  /**
   * <p>The Active Directory Domain membership records associated with the DB cluster.</p>
   * @public
   */
  DomainMemberships?: DomainMembership[] | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>Contains a user-supplied global database cluster identifier. This identifier is the unique key that
   *         identifies a global database cluster.</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>The status of write forwarding for a secondary cluster in an Aurora global database.</p>
   * @public
   */
  GlobalWriteForwardingStatus?: WriteForwardingStatus | undefined;

  /**
   * <p>Indicates whether write forwarding is enabled for a secondary cluster
   *       in an Aurora global database. Because write forwarding takes time to enable, check the
   *       value of <code>GlobalWriteForwardingStatus</code> to confirm that the request has completed
   *       before using the write forwarding feature for this cluster.</p>
   * @public
   */
  GlobalWriteForwardingRequested?: boolean | undefined;

  /**
   * <p>The network type of the DB instance.</p>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB cluster.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>This setting is only for Aurora DB clusters.</p>
   *          <p>Valid Values: <code>IPV4 | DUAL</code>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>The time when a stopped DB cluster is restarted automatically.</p>
   * @public
   */
  AutomaticRestartTime?: Date | undefined;

  /**
   * <p>The scaling configuration for an Aurora Serverless v2 DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo | undefined;

  /**
   * <p>The version of the Aurora Serverless V2 platform used by the DB cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Aurora Serverless v2</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  ServerlessV2PlatformVersion?: string | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.</p>
   *          <p>This setting is only for -Aurora DB clusters and Multi-AZ DB clusters.</p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>
   *          <p>This setting is only for Aurora DB clusters and Multi-AZ DB clusters.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>The mode of Database Insights that is enabled for the DB cluster.</p>
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * <p>Indicates whether Performance Insights is enabled for the DB cluster.</p>
   *          <p>This setting is only for Aurora DB clusters and Multi-AZ DB clusters.</p>
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>This setting is only for Aurora DB clusters and Multi-AZ DB clusters.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>This setting is only for Aurora DB clusters and Multi-AZ DB clusters.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                 Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * <p>The secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   * @public
   */
  MasterUserSecret?: MasterUserSecret | undefined;

  /**
   * <p>Indicates whether an Aurora DB cluster has in-cluster write forwarding enabled, not enabled, requested, or is in the process
   *             of enabling it.</p>
   * @public
   */
  LocalWriteForwardingStatus?: LocalWriteForwardingStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * <p>The details for Aurora Limitless Database.</p>
   * @public
   */
  LimitlessDatabase?: LimitlessDatabase | undefined;

  /**
   * <p>The scalability mode of the Aurora DB cluster. When set to <code>limitless</code>, the cluster operates as an Aurora Limitless Database.
   *             When set to <code>standard</code> (the default), the cluster uses normal DB instance creation.</p>
   * @public
   */
  ClusterScalabilityType?: ClusterScalabilityType | undefined;

  /**
   * <p>The details of the DB instance’s server certificate.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   * @public
   */
  CertificateDetails?: CertificateDetails | undefined;

  /**
   * <p>The lifecycle type for the DB cluster.</p>
   *          <p>For more information, see CreateDBCluster.</p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p>The user already has a DB cluster with the given identifier.</p>
 * @public
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
 * <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>The specified DB instance class isn't available in the specified Availability
 *             Zone.</p>
 * @public
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
 * <p>There is insufficient storage available for the current action. You might be able to
 *             resolve this error by updating your subnet group to use different Availability Zones
 *             that have more storage available.</p>
 * @public
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
 * <p>The DBSubnetGroup doesn't belong to the same VPC as that of an existing
 *             cross-region read replica of the same source instance.</p>
 * @public
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
 * <p>The DB subnet group cannot be deleted because it's in use.</p>
 * @public
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
 * @public
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
 * <p>The DB subnet group doesn't cover all Availability Zones after it's
 *             created because of users' change.</p>
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
 * <p>The network type is invalid for the DB instance. Valid nework type values are <code>IPV4</code> and <code>DUAL</code>.</p>
 * @public
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
 * <p>The specified <code>StorageType</code> can't be associated with the DB instance.</p>
 * @public
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
 * @public
 */
export interface CreateDBClusterEndpointMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier to use for the new endpoint. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint, one of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   * @public
   */
  EndpointType: string | undefined;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *             All other eligible instances are reachable through the custom endpoint.
   *             This parameter is relevant only if the list of static members is empty.</p>
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * <p>The tags to be assigned to the Amazon RDS resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster.
 *       This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBClusterEndpoints</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For the data structure that represents Amazon RDS DB instance endpoints,
 *         see <code>Endpoint</code>.</p>
 * @public
 */
export interface DBClusterEndpoint {
  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   * @public
   */
  DBClusterEndpointResourceIdentifier?: string | undefined;

  /**
   * <p>The DNS address of the endpoint.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that can't be used for a certain kind of cluster,
   *      such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *        <code>WRITER</code>, <code>ANY</code>.</p>
   * @public
   */
  CustomEndpointType?: string | undefined;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   * @public
   */
  DBClusterEndpointArn?: string | undefined;
}

/**
 * <p>The specified custom endpoint can't be created because it already exists.</p>
 * @public
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
 * @public
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
 * @public
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must not match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster
   *           parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.</p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Example: <code>aurora-mysql5.7</code>, <code>aurora-mysql8.0</code>
   *          </p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>aurora-postgresql14</code>
   *          </p>
   *          <p>
   *             <b>RDS for MySQL</b>
   *          </p>
   *          <p>Example: <code>mysql8.0</code>
   *          </p>
   *          <p>
   *             <b>RDS for PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>postgres13</code>
   *          </p>
   *          <p>To list all of the available parameter group families for a DB engine, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine></code>
   *          </p>
   *          <p>For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql</code>
   *          </p>
   *          <note>
   *             <p>The output contains duplicates.</p>
   *          </note>
   *          <p>The following are the valid DB engine values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Tags to assign to the DB cluster parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.</p>
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1-snapshot1</code>
   *          </p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB cluster to create a snapshot for. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the DB cluster snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterSnapshotResult {
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.</p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>The specified CIDR IP range or Amazon EC2 security group might not be authorized
 *             for the specified DB security group.</p>
 *          <p>Or, RDS might not be authorized to perform necessary actions using IAM on your
 *             behalf.</p>
 * @public
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

/**
 * @public
 */
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
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an
 *         existing certificate.</p>
 * @public
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
 * <p></p>
 * @public
 */
export interface CreateDBInstanceMessage {
  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <dl>
   *             <dt>Amazon Aurora MySQL</dt>
   *             <dd>
   *                <p>The name of the database to create when the primary DB instance of the Aurora MySQL DB cluster is
   *                   created. If this parameter isn't specified for an Aurora MySQL DB cluster, no database is created
   *                   in the DB cluster.</p>
   *                <p>Constraints:</p>
   *                <ul>
   *                   <li>
   *                      <p>Must contain 1 to 64 alphanumeric characters.</p>
   *                   </li>
   *                   <li>
   *                      <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).</p>
   *                   </li>
   *                   <li>
   *                      <p>Can't be a word reserved by the database engine.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Amazon Aurora PostgreSQL</dt>
   *             <dd>
   *                <p>The name of the database to create when the primary DB instance of the Aurora PostgreSQL DB cluster is
   *                     created. A database named <code>postgres</code> is always created. If this parameter is specified, an additional database with this name is created.</p>
   *                <p>Constraints:</p>
   *                <ul>
   *                   <li>
   *                      <p>It must contain 1 to 63 alphanumeric characters.</p>
   *                   </li>
   *                   <li>
   *                      <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits
   *                           (0 to 9).</p>
   *                   </li>
   *                   <li>
   *                      <p>Can't be a word reserved by the database engine.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Amazon RDS Custom for Oracle</dt>
   *             <dd>
   *                <p>The Oracle System ID (SID) of the created RDS Custom DB instance. If you don't specify a value, the default value is <code>ORCL</code> for non-CDBs and
   *                 <code>RDSCDB</code> for CDBs.</p>
   *                <p>Default: <code>ORCL</code>
   *                </p>
   *                <p>Constraints:</p>
   *                <ul>
   *                   <li>
   *                      <p>Must contain 1 to 8 alphanumeric characters.</p>
   *                   </li>
   *                   <li>
   *                      <p>Must contain a letter.</p>
   *                   </li>
   *                   <li>
   *                      <p>Can't be a word reserved by the database engine.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Amazon RDS Custom for SQL Server</dt>
   *             <dd>
   *                <p>Not applicable. Must be null.</p>
   *             </dd>
   *             <dt>RDS for Db2</dt>
   *             <dd>
   *                <p>The name of the database to create when the DB instance is created. If
   *                         this parameter isn't specified, no database is created in the DB instance.
   *                         In some cases, we recommend that you don't add a database name. For more
   *                         information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-db-instance-prereqs.html#db2-prereqs-additional-considerations">Additional considerations</a> in the <i>Amazon RDS User
   *                             Guide</i>.</p>
   *                <p>Constraints:</p>
   *                <ul>
   *                   <li>
   *                      <p>Must contain 1 to 64 letters or numbers.</p>
   *                   </li>
   *                   <li>
   *                      <p>Must begin with a letter. Subsequent characters can be letters,
   *                                 underscores, or digits (0-9).</p>
   *                   </li>
   *                   <li>
   *                      <p>Can't be a word reserved by the specified database engine.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for MariaDB</dt>
   *             <dd>
   *                <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.</p>
   *                <p>Constraints:</p>
   *                <ul>
   *                   <li>
   *                      <p>Must contain 1 to 64 letters or numbers.</p>
   *                   </li>
   *                   <li>
   *                      <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).</p>
   *                   </li>
   *                   <li>
   *                      <p>Can't be a word reserved by the specified database engine.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for MySQL</dt>
   *             <dd>
   *                <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.</p>
   *                <p>Constraints:</p>
   *                <ul>
   *                   <li>
   *                      <p>Must contain 1 to 64 letters or numbers.</p>
   *                   </li>
   *                   <li>
   *                      <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).</p>
   *                   </li>
   *                   <li>
   *                      <p>Can't be a word reserved by the specified database engine.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for Oracle</dt>
   *             <dd>
   *                <p>The Oracle System ID (SID) of the created DB instance. If you don't specify a value,
   *                     the default value is <code>ORCL</code>. You can't specify the
   *                     string <code>null</code>, or any other reserved word, for <code>DBName</code>.</p>
   *                <p>Default: <code>ORCL</code>
   *                </p>
   *                <p>Constraints:</p>
   *                <ul>
   *                   <li>
   *                      <p>Can't be longer than 8 characters.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for PostgreSQL</dt>
   *             <dd>
   *                <p>The name of the database to create when the DB instance is created. A database named <code>postgres</code> is always created. If this parameter is specified, an additional database with this name is created.</p>
   *                <p>Constraints:</p>
   *                <ul>
   *                   <li>
   *                      <p>Must contain 1 to 63 letters, numbers, or underscores.</p>
   *                   </li>
   *                   <li>
   *                      <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).</p>
   *                   </li>
   *                   <li>
   *                      <p>Can't be a word reserved by the specified database engine.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for SQL Server</dt>
   *             <dd>
   *                <p>Not applicable. Must be null.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>The identifier for this DB instance. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The amount of storage in gibibytes (GiB) to allocate for the DB instance.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. Aurora cluster volumes automatically grow as the amount of data in your
   *                     database increases, though you are only charged for the space that you use in an Aurora cluster volume.</p>
   *          <dl>
   *             <dt>Amazon RDS Custom</dt>
   *             <dd>
   *                <p>Constraints to the amount of storage for each storage type are the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>General Purpose (SSD) storage (gp2, gp3): Must be an integer from 40 to 65536 for RDS Custom for Oracle,
   *                             16384 for RDS Custom for SQL Server.</p>
   *                   </li>
   *                   <li>
   *                      <p>Provisioned IOPS storage (io1, io2): Must be an integer from 40 to 65536 for RDS Custom for Oracle,
   *                            16384 for RDS Custom for SQL Server.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for Db2</dt>
   *             <dd>
   *                <p>Constraints to the amount of storage for each storage type are the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>General Purpose (SSD) storage (gp3): Must be an integer from 20 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for MariaDB</dt>
   *             <dd>
   *                <p>Constraints to the amount of storage for each storage type are the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for MySQL</dt>
   *             <dd>
   *                <p>Constraints to the amount of storage for each storage type are the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for Oracle</dt>
   *             <dd>
   *                <p>Constraints to the amount of storage for each storage type are the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Magnetic storage (standard): Must be an integer from 10 to 3072.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for PostgreSQL</dt>
   *             <dd>
   *                <p>Constraints to the amount of storage for each storage type are the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Provisioned IOPS storage (io1, io2): Must be an integer from 100 to 65536.</p>
   *                   </li>
   *                   <li>
   *                      <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>RDS for SQL Server</dt>
   *             <dd>
   *                <p>Constraints to the amount of storage for each storage type are the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>General Purpose (SSD) storage (gp2, gp3):</p>
   *                      <ul>
   *                         <li>
   *                            <p>Enterprise and Standard editions: Must be an integer from 20 to 16384.</p>
   *                         </li>
   *                         <li>
   *                            <p>Web and Express editions: Must be an integer from 20 to 16384.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Provisioned IOPS storage (io1, io2):</p>
   *                      <ul>
   *                         <li>
   *                            <p>Enterprise and Standard editions: Must be an integer from 100 to 16384.</p>
   *                         </li>
   *                         <li>
   *                            <p>Web and Express editions: Must be an integer from 100 to 16384.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>Magnetic storage (standard):</p>
   *                      <ul>
   *                         <li>
   *                            <p>Enterprise and Standard editions: Must be an integer from 20 to 1024.</p>
   *                         </li>
   *                         <li>
   *                            <p>Web and Express editions: Must be an integer from 20 to 1024.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The compute and memory capacity of the DB instance, for example <code>db.m5.large</code>.
   *           Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *           For the full list of DB instance classes, and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB instance
   *           classes</a> in the <i>Amazon RDS User Guide</i> or
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html">Aurora
   *           DB instance classes</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The database engine to use for this DB instance.</p>
   *          <p>Not every database engine is available in every Amazon Web Services Region.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code> (for Aurora MySQL DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code> (for Aurora PostgreSQL DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-ee</code> (for RDS Custom for Oracle DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-ee-cdb</code> (for RDS Custom for Oracle DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-se2</code> (for RDS Custom for Oracle DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-se2-cdb</code> (for RDS Custom for Oracle DB
   *                     instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-sqlserver-ee</code> (for RDS Custom for SQL Server DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-sqlserver-se</code> (for RDS Custom for SQL Server DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-sqlserver-web</code> (for RDS Custom for SQL Server DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-sqlserver-dev</code> (for RDS Custom for SQL Server DB instances)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db2-ae</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db2-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The name for the master user.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The name for the master user is managed by the DB cluster.</p>
   *          <p>This setting is required for RDS DB instances.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters, numbers, or underscores.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The password for the master user.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The password for the master user is managed by the DB
   *             cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified if <code>ManageMasterUserPassword</code> is turned on.</p>
   *             </li>
   *             <li>
   *                <p>Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&" (ampersand) or  the "'" (single quotes) character.</p>
   *             </li>
   *          </ul>
   *          <p>Length Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - Must contain from 8 to 255 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - Must contain from 8 to 128 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - Must contain from 8 to 30 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - Must contain from 8 to 128 characters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *          <p>This setting applies to the legacy EC2-Classic platform, which is no longer used to create
   *             new DB instances. Use the <code>VpcSecurityGroupIds</code> setting instead.</p>
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of Amazon EC2 VPC security groups to associate with this DB instance.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The associated list of EC2 VPC security groups is managed by
   *           the DB cluster.</p>
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The Availability Zone (AZ) where the database will be created. For information on
   *         Amazon Web Services Regions and Availability Zones, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions
   *         and Availability Zones</a>.</p>
   *          <p>For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these
   *             Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.</p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.</p>
   *             </li>
   *             <li>
   *                <p>The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>us-east-1d</code>
   *          </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DB subnet group.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The time range each week during which system maintenance can occur.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>The day values must be <code>mon | tue | wed | thu | fri | sat | sun</code>. </p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred backup window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance. If you don't specify a value, then
   *           Amazon RDS uses the default DB parameter group for the specified DB engine and version.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables
   *           backups. Setting this parameter to <code>0</code> disables automated backups.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB cluster.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35.</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 if the DB instance is a source to read replicas.</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 for an RDS Custom for Oracle DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         using the <code>BackupRetentionPeriod</code> parameter.
   *           The default is a 30-minute window selected at random from an
   *           8-hour block of time for each Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Backup window</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by
   *           the DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.</p>
   *          <p>Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - <code>50000</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - <code>3306</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - <code>1433</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>3306</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - <code>1521</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>5432</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>For RDS for Microsoft SQL Server, the value can't be <code>1234</code>, <code>1434</code>,
   *                 <code>3260</code>, <code>3343</code>, <code>3389</code>, <code>47001</code>, or
   *                 <code>49152-49156</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies whether the DB instance is a Multi-AZ deployment. You can't set
   *           the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *          <p>This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs)
   *           are managed by the DB cluster.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The version number of the database engine the DB
   *             instance uses is managed by the DB cluster.</p>
   *          <p>For a list of valid engine versions, use the <code>DescribeDBEngineVersions</code>
   *             operation.</p>
   *          <p>The following are the database engines and links to information about the major and minor versions that are available with
   *           Amazon RDS. Not every database engine is available for every Amazon Web Services Region.</p>
   *          <dl>
   *             <dt>Amazon RDS Custom for Oracle</dt>
   *             <dd>
   *                <p>A custom engine version (CEV) that you have previously created. This setting is required for RDS Custom for Oracle. The CEV
   *                 name has the following format: 19.<i>customized_string</i>. A valid CEV name is
   *                 <code>19.my_cev1</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-creating.html#custom-creating.create">
   *                 Creating an RDS Custom for Oracle DB instance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *             </dd>
   *             <dt>Amazon RDS Custom for SQL Server</dt>
   *             <dd>
   *                <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits-MS.html">RDS Custom for SQL Server general requirements</a>
   *                 in the <i>Amazon RDS User Guide</i>.</p>
   *             </dd>
   *             <dt>RDS for Db2</dt>
   *             <dd>
   *                <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt">Db2 on Amazon RDS versions</a> in the
   *                 <i>Amazon RDS User Guide</i>.</p>
   *             </dd>
   *             <dt>RDS for MariaDB</dt>
   *             <dd>
   *                <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt">MariaDB on Amazon RDS versions</a> in the
   *                 <i>Amazon RDS User Guide</i>.</p>
   *             </dd>
   *             <dt>RDS for Microsoft SQL Server</dt>
   *             <dd>
   *                <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport">Microsoft SQL Server versions on Amazon RDS</a> in the
   *                   <i>Amazon RDS User Guide</i>.</p>
   *             </dd>
   *             <dt>RDS for MySQL</dt>
   *             <dd>
   *                <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">MySQL on Amazon RDS versions</a> in the
   *                 <i>Amazon RDS User Guide</i>.</p>
   *             </dd>
   *             <dt>RDS for Oracle</dt>
   *             <dd>
   *                <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html">Oracle Database Engine release notes</a> in the
   *                 <i>Amazon RDS User Guide</i>.</p>
   *             </dd>
   *             <dt>RDS for PostgreSQL</dt>
   *             <dd>
   *                <p>For information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts">Amazon RDS for PostgreSQL versions and extensions</a> in the
   *                   <i>Amazon RDS User Guide</i>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Specifies whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.
   *           By default, minor engine upgrades are applied automatically.</p>
   *          <p>If you create an RDS Custom DB instance, you must set <code>AutoMinorVersionUpgrade</code> to
   *           <code>false</code>.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The license model information for this DB instance.</p>
   *          <note>
   *             <p>License models for RDS for Db2 require additional configuration. The bring your
   *                 own license (BYOL) model requires a custom parameter group and an Amazon Web Services License
   *                 Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model
   *                 requires an Amazon Web Services Marketplace subscription. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html">Amazon
   *                     RDS for Db2 licensing options</a> in the <i>Amazon RDS User
   *                     Guide</i>.</p>
   *             <p>The default for RDS for Db2 is <code>bring-your-own-license</code>.</p>
   *          </note>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - <code>bring-your-own-license | marketplace-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - <code>general-public-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - <code>license-included</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>general-public-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - <code>bring-your-own-license | license-included</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql-license</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance.
   *           For information about valid IOPS values, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html">Amazon RDS DB instance storage</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50
   *           of the storage amount for the DB instance.</p>
   *             </li>
   *             <li>
   *                <p>For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The storage throughput value, in mebibyte per second (MiBps), for the DB instance.</p>
   *          <p>This setting applies only to the <code>gp3</code> storage type.</p>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The option group to associate the DB instance with.</p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed
   *           from an option group. Also, that option group can't be removed from a DB instance after it is
   *           associated with a DB instance.</p>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>For supported engines, the character set (<code>CharacterSet</code>) to associate the DB instance with.</p>
   *          <p>This setting doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora - The character set is managed by
   *           the DB cluster. For more information, see <code>CreateDBCluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>RDS Custom - However, if you need to change the character set,
   *           you can change it on the database itself.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>The name of the NCHAR character set for the Oracle DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * <p>Specifies whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is controlled by its security group settings.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>The default behavior when <code>PubliclyAccessible</code> is not specified depends on whether a <code>DBSubnetGroup</code> is specified.</p>
   *          <p>If <code>DBSubnetGroup</code> isn't specified, <code>PubliclyAccessible</code> defaults to <code>false</code> for Aurora instances and <code>true</code> for non-Aurora instances.</p>
   *          <p>If <code>DBSubnetGroup</code> is specified, <code>PubliclyAccessible</code> defaults to <code>false</code> unless the value of <code>DBSubnetGroup</code> is <code>default</code>, in which case <code>PubliclyAccessible</code> defaults to <code>true</code>.</p>
   *          <p>If <code>PubliclyAccessible</code> is true and the VPC that the <code>DBSubnetGroup</code> is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Tags to assign to the DB instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The identifier of the DB cluster that this DB instance will belong to.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>The storage type to associate with the DB instance.</p>
   *          <p>If you specify <code>io1</code>, <code>io2</code>, or <code>gp3</code>, you must also include a value for the
   *             <code>Iops</code> parameter.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.</p>
   *          <p>Valid Values: <code>gp2 | gp3 | io1 | io2 | standard</code>
   *          </p>
   *          <p>Default: <code>io1</code>, if the <code>Iops</code> parameter is specified. Otherwise,
   *                 <code>gp3</code>.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * <p>Specifes whether the DB instance is encrypted. By default, it isn't encrypted.</p>
   *          <p>For RDS Custom DB instances, either enable this setting or leave it unset. Otherwise, Amazon RDS reports an error.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The encryption for DB instances is managed by the DB cluster.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB instance.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *           To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The Amazon Web Services KMS key identifier is managed by
   *           the DB cluster. For more information, see <code>CreateDBCluster</code>.</p>
   *          <p>If <code>StorageEncrypted</code> is enabled, and you do
   *         not specify a value for the <code>KmsKeyId</code> parameter, then
   *         Amazon RDS uses your default KMS key. There is a
   *         default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different
   *         default KMS key for each Amazon Web Services Region.</p>
   *          <p>For Amazon RDS Custom, a KMS key is required for DB instances. For most RDS engines, if you leave this parameter empty
   *           while enabling <code>StorageEncrypted</code>, the engine uses the default KMS key. However, RDS Custom
   *           doesn't use the default key when this parameter is empty. You must explicitly specify a key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Active Directory directory ID to create the DB instance in. Currently, you can create only Db2, MySQL, Microsoft SQL
   *           Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *            Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora (The domain is managed by the DB cluster.)</p>
   *             </li>
   *             <li>
   *                <p>RDS Custom</p>
   *             </li>
   *          </ul>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of an Active Directory domain.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mymanagedADtest.mymanagedAD.mydomain</code>
   *          </p>
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * <p>The Active Directory organizational unit for your DB instance to join.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the distinguished name format.</p>
   *             </li>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain</code>
   *          </p>
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * <p>The ARN for the Secrets Manager secret with the credentials for the user joining the domain.</p>
   *          <p>Example: <code>arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456</code>
   *          </p>
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * <p>The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Two IP addresses must be provided.  If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>123.124.125.126,234.235.236.237</code>
   *          </p>
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * <p>Specifies whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this
   *           value for an Aurora DB instance has no effect on the DB cluster setting.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for
   *           the DB instance. To disable collection of Enhanced Monitoring metrics, specify <code>0</code>.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must set <code>MonitoringInterval</code>
   *       to a value other than <code>0</code>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Valid Values: <code>0 | 1 | 5 | 10 | 15 | 30 | 60</code>
   *          </p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *           example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than <code>0</code>, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   *          <p>This setting doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora (The domain is managed by the DB cluster.)</p>
   *             </li>
   *             <li>
   *                <p>RDS Custom</p>
   *             </li>
   *          </ul>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>The order of priority in which an Aurora Replica is promoted to the primary instance
   *           after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Valid Values: <code>0 - 15</code>
   *          </p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>The time zone of the DB instance.
   *             The time zone parameter is currently supported only by <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone">RDS for Db2</a> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone">RDS for SQL Server</a>.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora (Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster.)</p>
   *             </li>
   *             <li>
   *                <p>RDS Custom</p>
   *             </li>
   *          </ul>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The mode of Database Insights to enable for the DB instance.</p>
   *          <note>
   *             <p>Aurora DB instances inherit this value from the DB cluster, so you can't change this value.</p>
   *          </note>
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * <p>Specifies whether to enable Performance Insights for the DB instance. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                 Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   *          <p>If you specify a retention period that isn't valid, such as <code>94</code>,  Amazon RDS returns an error.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>The list of log types to enable for exporting to CloudWatch Logs. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">
   *             Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora (CloudWatch Logs exports are managed by the DB cluster.)</p>
   *             </li>
   *             <li>
   *                <p>RDS Custom</p>
   *             </li>
   *          </ul>
   *          <p>The following values are valid for each DB engine:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - <code>diag.log | notify.log | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - <code>audit | error | general | slowquery | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - <code>agent | error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>audit | error | general | slowquery | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - <code>alert | audit | listener | trace | oemagent</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql | upgrade | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>Specifies whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster.
   *             For more information, see <code>CreateDBCluster</code>. DB instances in a DB
   *             cluster can be deleted even when deletion protection is enabled for the DB cluster.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *          <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora (Storage is managed by the DB cluster.)</p>
   *             </li>
   *             <li>
   *                <p>RDS Custom</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether to enable a customer-owned IP address (CoIP) for an RDS
   *             on Outposts DB instance.</p>
   *          <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *          <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * <p>The network type of the DB instance.</p>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB instance.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Valid Values: <code>IPV4 | DUAL</code>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>The location for storing automated backups and manual snapshots.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local</code> (Dedicated Local Zone)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outposts</code> (Amazon Web Services Outposts)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region</code> (Amazon Web Services Region)</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>region</code>
   *          </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working
   *             with Amazon RDS on Amazon Web Services Outposts</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * <p>The instance profile associated with the underlying Amazon EC2 instance of an
   *             RDS Custom DB instance.</p>
   *          <p>This setting is required for RDS Custom.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>The profile must exist in your account.</p>
   *             </li>
   *             <li>
   *                <p>The profile must have an IAM role that Amazon EC2 has permissions to assume.</p>
   *             </li>
   *             <li>
   *                <p>The instance profile name and the associated IAM role name must start with the prefix <code>AWSRDSCustom</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For the list of permissions required for the IAM role, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc">
   *                 Configure IAM and your VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * <p>The Oracle system identifier (SID), which is the name of the Oracle database instance that
   *             manages your database files. In this context, the term "Oracle database instance" refers exclusively
   *             to the system global area (SGA) and Oracle background processes. If you don't specify a SID,
   *             the value defaults to <code>RDSCDB</code>. The Oracle SID is also the name of your CDB.</p>
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * <p>The CA certificate identifier to use for the DB instance's server certificate.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't manage the master user password with Amazon Web Services Secrets Manager if <code>MasterUserPassword</code>
   *                     is specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB instance.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If you don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *             KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *             use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *             managed KMS key.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether to use the multi-tenant configuration or the single-tenant
   *             configuration (default). This parameter only applies to RDS for Oracle container
   *             database (CDB) engines.</p>
   *          <p>Note the following restrictions: </p>
   *          <ul>
   *             <li>
   *                <p>The DB engine that you specify in the request must support the multi-tenant
   *                     configuration. If you attempt to enable the multi-tenant configuration on a DB
   *                     engine that doesn't support it, the request fails.</p>
   *             </li>
   *             <li>
   *                <p>If you specify the multi-tenant configuration when you create your DB instance,
   *                     you can't later modify this DB instance to use the single-tenant configuration.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * <p>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>The life cycle type for this DB instance.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB instance into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *               creating the DB instance will fail if the DB major version is past its end of standard support date.</p>
   *          </note>
   *          <p>This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster.</p>
   *          <p>You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * <p>Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.</p>
   *          <p>You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>password</code> - Use standard database authentication with a password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-db-auth</code> - Use IAM database authentication for the master user.</p>
   *             </li>
   *          </ul>
   *          <p>This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.</p>
   * @public
   */
  MasterUserAuthenticationType?: MasterUserAuthenticationType | undefined;
}

/**
 * <p>Information about an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.</p>
 * @public
 */
export interface DBInstanceRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *             instance.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The name of the feature associated with the Amazon Web Services Identity and Access Management (IAM) role.
   *             For information about supported feature names, see <code>DBEngineVersion</code>.</p>
   * @public
   */
  FeatureName?: string | undefined;

  /**
   * <p>Information about the state of association between the IAM role and the DB instance. The Status property returns one of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB instance and can be used to
   *                 access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB instance, but the DB instance is unable
   *                 to assume the IAM role in order to access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AutomationMode = {
  ALL_PAUSED: "all-paused",
  FULL: "full",
} as const;

/**
 * @public
 */
export type AutomationMode = (typeof AutomationMode)[keyof typeof AutomationMode];

/**
 * <p>Automated backups of a DB instance replicated to another Amazon Web Services Region. They consist of system backups, transaction logs, and database instance properties.</p>
 * @public
 */
export interface DBInstanceAutomatedBackupsReplication {
  /**
   * <p>The Amazon Resource Name (ARN) of the replicated automated backups.</p>
   * @public
   */
  DBInstanceAutomatedBackupsArn?: string | undefined;
}

/**
 * <p>The status of the DB parameter group.</p>
 *          <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateDBInstanceReadReplica</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RebootDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DBParameterGroupStatus {
  /**
   * <p>The name of the DB parameter group.</p>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>The status of parameter updates. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>applying</code>: The parameter group change is being applied to the
   *                     database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-to-apply</code>: The parameter group is in an invalid
   *                     state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>in-sync</code>: The parameter group change is synchronized with the
   *                     database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-database-upgrade</code>: The parameter group change will be
   *                     applied after the DB instance is upgraded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-reboot</code>: The parameter group change will be applied after
   *                     the DB instance reboots.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ParameterApplyStatus?: string | undefined;
}

/**
 * <p>Contains Availability Zone information.</p>
 *          <p>This data type is used as an element in the <code>OrderableDBInstanceOption</code>
 *             data type.</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A data type that represents an Outpost.</p>
 *          <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Amazon RDS on Amazon Web Services Outposts</a>
 *           in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @public
 */
export interface Outpost {
  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation.</p>
 * @public
 */
export interface Subnet {
  /**
   * <p>The identifier of the subnet.</p>
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * <p>Contains Availability Zone information.</p>
   *          <p>This data type is used as an element in the <code>OrderableDBInstanceOption</code>
   *             data type.</p>
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * <p>If the subnet is associated with an Outpost, this value specifies the Outpost.</p>
   *          <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  SubnetOutpost?: Outpost | undefined;

  /**
   * <p>The status of the subnet.</p>
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * <p>Contains the details of an Amazon RDS DB subnet group.</p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBSubnetGroups</code> action.</p>
 * @public
 */
export interface DBSubnetGroup {
  /**
   * <p>The name of the DB subnet group.</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>Provides the description of the DB subnet group.</p>
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * <p>Provides the VpcId of the DB subnet group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Provides the status of the DB subnet group.</p>
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * <p>Contains a list of <code>Subnet</code> elements. The list of subnets shown
   *             here might not reflect the current state of your VPC. For the most up-to-date information,
   *             we recommend checking your VPC configuration directly.</p>
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   * @public
   */
  DBSubnetGroupArn?: string | undefined;

  /**
   * <p>The network type of the DB subnet group.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  SupportedNetworkTypes?: string[] | undefined;
}

/**
 * <p>This data type represents the information you need to connect to an Amazon RDS DB instance.
 *       This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDBInstance</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For the data structure that represents Amazon Aurora DB cluster endpoints,
 *         see <code>DBClusterEndpoint</code>.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * <p>Provides information on the option groups the DB instance is a member of.</p>
 * @public
 */
export interface OptionGroupMembership {
  /**
   * <p>The name of the option group that the instance belongs to.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

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
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>This data type is used as a response element in the <code>ModifyDBInstance</code> operation and
 *           contains changes that will be applied during the next maintenance window.</p>
 * @public
 */
export interface PendingModifiedValues {
  /**
   * <p>The name of the compute and memory capacity class for the DB instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The allocated storage size for the DB instance specified in gibibytes (GiB).</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The master credentials for the DB instance.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The port for the DB instance.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The number of days for which automated backups are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>Indicates whether the Single-AZ DB instance will change to a Multi-AZ deployment.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The license model for the DB instance.</p>
   *          <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *             <code>general-public-license</code>
   *          </p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The Provisioned IOPS value for the DB instance.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The storage throughput of the DB instance.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The  database identifier for the DB instance.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>The storage type of the DB instance.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The identifier of the CA certificate for the DB instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The DB subnet group for the DB instance.</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class
   *             of the DB instance.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>The automation mode of the RDS Custom DB instance: <code>full</code> or <code>all-paused</code>.
   *             If <code>full</code>, the DB instance automates monitoring and instance recovery. If
   *             <code>all-paused</code>, the instance pauses automation for the duration set by
   *             <code>--resume-full-automation-mode-minutes</code>.</p>
   * @public
   */
  AutomationMode?: AutomationMode | undefined;

  /**
   * <p>The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation.
   *             The minimum value is 60 (default). The maximum value is 1,440.</p>
   * @public
   */
  ResumeFullAutomationModeTime?: Date | undefined;

  /**
   * <p>Indicates whether the DB instance will change to the multi-tenant configuration (TRUE)
   *             or the single-tenant configuration (FALSE). </p>
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * <p>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.></p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>The database engine of the DB instance.</p>
   * @public
   */
  Engine?: string | undefined;
}

/**
 * <p>Provides a list of status information for a DB instance.</p>
 * @public
 */
export interface DBInstanceStatusInfo {
  /**
   * <p>This value is currently "read replication."</p>
   * @public
   */
  StatusType?: string | undefined;

  /**
   * <p>Indicates whether the instance is operating normally (TRUE) or is in an error state (FALSE).</p>
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * <p>The status of the DB instance. For a StatusType of read replica, the values can be
   *             replicating, replication stop point set, replication stop point reached, error, stopped,
   *             or terminated.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Details of the error if there is an error for the instance. If the instance isn't in an error state, this value is blank.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
 *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
 *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
 *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
 *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
 * @public
 */
export interface DBInstance {
  /**
   * <p>The user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>The name of the compute and memory capacity class of the DB instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The database engine used for this DB instance.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The current state of this database.</p>
   *          <p>For information about DB instance statuses, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/accessing-monitoring.html#Overview.DBInstance.Status">Viewing DB instance status</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBInstanceStatus?: string | undefined;

  /**
   * <p>The master username for the DB instance.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The initial database name that you provided (if required) when you created
   *             the DB instance. This name is returned for the life of your DB instance. For an RDS for
   *             Oracle CDB instance, the name identifies the PDB rather than the CDB.</p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>The connection endpoint for the DB instance.</p>
   *          <note>
   *             <p>The endpoint might not be shown for instances with the status of <code>creating</code>.</p>
   *          </note>
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * <p>The amount of storage in gibibytes (GiB) allocated for the DB instance.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The date and time when the DB instance was created.</p>
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * <p>The daily time range during which automated backups are
   *         created if automated backups are enabled, as determined
   *         by the <code>BackupRetentionPeriod</code>.</p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The number of days for which automatic DB snapshots are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>A list of DB security group elements containing
   *         <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.</p>
   * @public
   */
  DBSecurityGroups?: DBSecurityGroupMembership[] | undefined;

  /**
   * <p>The list of Amazon EC2 VPC security groups that the DB instance belongs to.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>The list of DB parameter groups applied to this DB instance.</p>
   * @public
   */
  DBParameterGroups?: DBParameterGroupStatus[] | undefined;

  /**
   * <p>The name of the Availability Zone where the DB instance is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Information about the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Information about pending changes to the DB instance. This information is returned only when there are pending changes. Specific changes are identified by subelements.</p>
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * <p>The latest time to which a database in this DB instance can be restored with point-in-time restore.</p>
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * <p>Indicates whether the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The version of the database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Indicates whether minor version patches are applied automatically.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The identifier of the source DB instance if this DB instance is a read
   *             replica.</p>
   * @public
   */
  ReadReplicaSourceDBInstanceIdentifier?: string | undefined;

  /**
   * <p>The identifiers of the read replicas associated with this DB
   *             instance.</p>
   * @public
   */
  ReadReplicaDBInstanceIdentifiers?: string[] | undefined;

  /**
   * <p>The identifiers of Aurora DB clusters to which the RDS DB instance
   *             is replicated as a read replica. For example, when you create an Aurora read replica of
   *             an RDS for MySQL DB instance, the Aurora MySQL DB cluster for the Aurora read replica is
   *             shown. This output doesn't contain information about cross-Region Aurora read
   *             replicas.</p>
   *          <note>
   *             <p>Currently, each RDS DB instance can have only one Aurora read replica.</p>
   *          </note>
   * @public
   */
  ReadReplicaDBClusterIdentifiers?: string[] | undefined;

  /**
   * <p>The open mode of a Db2 or an Oracle read replica. The default is
   *                 <code>open-read-only</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-replication.html">Working with replicas for
   *                 Amazon RDS for Db2</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Working with read
   *                 replicas for Amazon RDS for Oracle</a> in the <i>Amazon RDS User
   *                 Guide</i>. </p>
   *          <note>
   *             <p>This attribute is only supported in RDS for Db2, RDS for Oracle, and RDS Custom
   *                 for Oracle.</p>
   *          </note>
   * @public
   */
  ReplicaMode?: ReplicaMode | undefined;

  /**
   * <p>The license model information for this DB instance. This setting doesn't apply to
   *             Amazon Aurora or RDS Custom DB instances.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The Provisioned IOPS (I/O operations per second) value for the DB instance.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The storage throughput for the DB instance.</p>
   *          <p>This setting applies only to the <code>gp3</code> storage type.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The list of option group memberships for this DB instance.</p>
   * @public
   */
  OptionGroupMemberships?: OptionGroupMembership[] | undefined;

  /**
   * <p>If present, specifies the name of the character set that this instance is associated with.</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>The name of the NCHAR character set for the Oracle DB instance. This character set specifies the
   *             Unicode encoding for data stored in table columns of type NCHAR, NCLOB, or NVARCHAR2.</p>
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.</p>
   * @public
   */
  SecondaryAvailabilityZone?: string | undefined;

  /**
   * <p>Indicates whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC),
   *               its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance,
   *               the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public
   *               access isn't permitted if the security group assigned to the DB cluster doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBInstance</a>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The status of a read replica. If the DB instance isn't a read replica, the value is
   *             blank.</p>
   * @public
   */
  StatusInfos?: DBInstanceStatusInfo[] | undefined;

  /**
   * <p>The storage type associated with the DB instance.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE encryption.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>The port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.</p>
   * @public
   */
  DbInstancePort?: number | undefined;

  /**
   * <p>If the DB instance is a member of a DB cluster, indicates the name of the DB cluster that the DB instance is a member of.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Indicates whether the DB instance is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>If <code>StorageEncrypted</code> is enabled, the Amazon Web Services KMS key identifier
   *             for the encrypted DB instance.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is found in Amazon Web Services CloudTrail log
   *           entries whenever the Amazon Web Services KMS key for the DB instance is accessed.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The Active Directory Domain membership records associated with the DB instance.</p>
   * @public
   */
  DomainMemberships?: DomainMembership[] | undefined;

  /**
   * <p>Indicates whether tags are copied from the DB instance to snapshots of the DB instance.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this
   *             value for an Aurora DB instance has no effect on the DB cluster setting. For more
   *             information, see <code>DBCluster</code>.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.</p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.</p>
   * @public
   */
  EnhancedMonitoringResourceArn?: string | undefined;

  /**
   * <p>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>The order of priority in which an Aurora Replica is promoted to the primary instance
   *           after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   * @public
   */
  DBInstanceArn?: string | undefined;

  /**
   * <p>The time zone of the DB instance.
   *             In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for
   *             RDS for Db2 and RDS for SQL Server DB instances
   *             that were created with a time zone specified.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled for the DB instance.</p>
   *          <p>For a list of engine versions that support IAM database authentication, see
   *               <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.IamDatabaseAuthentication.html">IAM database authentication</a>
   *               in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.Aurora_Fea_Regions_DB-eng.Feature.IAMdbauth.html">IAM
   *               database authentication in Aurora</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>The mode of Database Insights that is enabled for the instance.</p>
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * <p>Indicates whether Performance Insights is enabled for the DB instance.</p>
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                 Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   *          <p>Log types vary by DB engine. For information about the log types for each DB engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html">Monitoring Amazon RDS log files</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>Indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) roles associated with the DB instance.</p>
   * @public
   */
  AssociatedRoles?: DBInstanceRole[] | undefined;

  /**
   * <p>The listener connection endpoint for SQL Server Always On.</p>
   * @public
   */
  ListenerEndpoint?: Endpoint | undefined;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>The automation mode of the RDS Custom DB instance: <code>full</code> or <code>all paused</code>.
   *             If <code>full</code>, the DB instance automates monitoring and instance recovery. If
   *             <code>all paused</code>, the instance pauses automation for the duration set by
   *             <code>--resume-full-automation-mode-minutes</code>.</p>
   * @public
   */
  AutomationMode?: AutomationMode | undefined;

  /**
   * <p>The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation.
   *             The minimum value is 60 (default). The maximum value is 1,440.</p>
   * @public
   */
  ResumeFullAutomationModeTime?: Date | undefined;

  /**
   * <p>Indicates whether a customer-owned IP address (CoIP) is enabled for an RDS on Outposts DB instance.</p>
   *          <p>A <i>CoIP </i>provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *          <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   * @public
   */
  CustomerOwnedIpEnabled?: boolean | undefined;

  /**
   * <p>The network type of the DB instance.</p>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB instance.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *                 Working with a DB instance in a VPC</a> in the
   *             <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Valid Values: <code>IPV4 | DUAL</code>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>The status of the database activity stream.</p>
   * @public
   */
  ActivityStreamStatus?: ActivityStreamStatus | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  ActivityStreamKmsKeyId?: string | undefined;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   * @public
   */
  ActivityStreamKinesisStreamName?: string | undefined;

  /**
   * <p>The mode of the database activity stream. Database events such as a change or access generate
   *             an activity stream event. RDS for Oracle always handles these events asynchronously.</p>
   * @public
   */
  ActivityStreamMode?: ActivityStreamMode | undefined;

  /**
   * <p>Indicates whether engine-native audit fields are included in the database activity stream.</p>
   * @public
   */
  ActivityStreamEngineNativeAuditFieldsIncluded?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * <p>The list of replicated automated backups associated with the DB instance.</p>
   * @public
   */
  DBInstanceAutomatedBackupsReplications?: DBInstanceAutomatedBackupsReplication[] | undefined;

  /**
   * <p>The location where automated backups and manual snapshots are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.</p>
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * <p>The time when a stopped DB instance is restarted automatically.</p>
   * @public
   */
  AutomaticRestartTime?: Date | undefined;

  /**
   * <p>The instance profile associated with the underlying Amazon EC2 instance of an
   *             RDS Custom DB instance. The instance profile must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>The profile must exist in your account.</p>
   *             </li>
   *             <li>
   *                <p>The profile must have an IAM role that Amazon EC2 has permissions to assume.</p>
   *             </li>
   *             <li>
   *                <p>The instance profile name and the associated IAM role name must start with the prefix <code>AWSRDSCustom</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For the list of permissions required for the IAM role, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc">
   *                 Configure IAM and your VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * <p>The status of the policy state of the activity stream.</p>
   * @public
   */
  ActivityStreamPolicyStatus?: ActivityStreamPolicyStatus | undefined;

  /**
   * <p>The details of the DB instance's server certificate.</p>
   * @public
   */
  CertificateDetails?: CertificateDetails | undefined;

  /**
   * <p>The Oracle system ID (Oracle SID) for a container database (CDB). The Oracle SID is also
   *             the name of the CDB. This setting is only valid for RDS Custom DB instances.</p>
   * @public
   */
  DBSystemId?: string | undefined;

  /**
   * <p>The secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  MasterUserSecret?: MasterUserSecret | undefined;

  /**
   * <p>The identifier of the source DB cluster if this DB instance is a read
   *             replica.</p>
   * @public
   */
  ReadReplicaSourceDBClusterIdentifier?: string | undefined;

  /**
   * <p>The progress of the storage optimization operation as a percentage.</p>
   * @public
   */
  PercentProgress?: string | undefined;

  /**
   * <p>Specifies whether the DB instance is in the multi-tenant configuration (TRUE) or the
   *             single-tenant configuration (FALSE).</p>
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * <p>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>Indicates whether an upgrade is recommended for the storage file system configuration
   *             on the DB instance. To migrate to the preferred configuration, you can either create a
   *             blue/green deployment, or create a read replica from the DB instance. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.UpgradeFileSystem">Upgrading the storage file system for a DB instance</a>.</p>
   * @public
   */
  IsStorageConfigUpgradeAvailable?: boolean | undefined;

  /**
   * <p>The lifecycle type for the DB instance.</p>
   *          <p>For more information, see CreateDBInstance.</p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>The user already has a DB instance with the given identifier.</p>
 * @public
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
 * <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 * @public
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
 * <p>You attempted to create more tenant databases than are permitted in your Amazon Web Services
 *             account.</p>
 * @public
 */
export class TenantDatabaseQuotaExceededFault extends __BaseException {
  readonly name: "TenantDatabaseQuotaExceededFault" = "TenantDatabaseQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TenantDatabaseQuotaExceededFault, __BaseException>) {
    super({
      name: "TenantDatabaseQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TenantDatabaseQuotaExceededFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateDBInstanceReadReplicaMessage {
  /**
   * <p>The DB instance identifier of the read replica. This identifier is the unique key
   *             that identifies a DB instance. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB instance that will act as the source for the read replica.
   *             Each DB instance can have up to 15 read replicas, except for the following
   *             engines:</p>
   *          <ul>
   *             <li>
   *                <p>Db2 - Can have up to three replicas.</p>
   *             </li>
   *             <li>
   *                <p>Oracle - Can have up to five read replicas.</p>
   *             </li>
   *             <li>
   *                <p>SQL Server - Can have up to five read replicas.</p>
   *             </li>
   *          </ul>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the identifier of an existing Db2, MariaDB, MySQL, Oracle, PostgreSQL, or SQL Server DB
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>SourceDBClusterIdentifier</code> parameter is
   *                     also specified.</p>
   *             </li>
   *             <li>
   *                <p>For the limitations of Oracle read replicas, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.limitations.html#oracle-read-replicas.limitations.versions-and-licenses">Version and licensing considerations for RDS for Oracle replicas</a> in the
   *                   <i>Amazon RDS User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>For the limitations of SQL Server read replicas, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html#SQLServer.ReadReplicas.Limitations">Read replica limitations with SQL Server</a> in the <i>Amazon RDS User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>The specified DB instance must have automatic backups enabled, that is, its backup
   *                     retention period must be greater than 0.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB instance is in the same Amazon Web Services Region as the read replica, specify a valid DB
   *                     instance identifier.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB instance is in a different Amazon Web Services Region from the read
   *                     replica, specify a valid DB instance ARN. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User
   *                         Guide</i>. This doesn't apply to SQL Server or RDS Custom, which
   *                     don't support cross-Region replicas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBInstanceIdentifier?: string | undefined;

  /**
   * <p>The compute and memory capacity of the read replica, for example
   *                 db.m4.large. Not all DB instance classes are available in all Amazon Web Services
   *             Regions, or for all database engines. For the full list of DB instance classes, and
   *             availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Default: Inherits the value from the source DB instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The Availability Zone (AZ) where the read replica will be created.</p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p>
   *          <p>Example: <code>us-east-1d</code>
   *          </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The port number that the DB instance uses for connections.</p>
   *          <p>Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Default: Inherits the value from the source DB instance.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies whether the read replica is in a Multi-AZ deployment.</p>
   *          <p>You can create a read replica as a Multi-AZ DB instance. RDS creates a standby of your
   *             replica in another Availability Zone for failover support for the replica. Creating your
   *             read replica as a Multi-AZ DB instance is independent of whether the source is a
   *             Multi-AZ DB instance or a Multi-AZ DB cluster.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>Specifies whether to automatically apply minor engine upgrades to the
   *             read replica during the maintenance window.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Default: Inherits the value from the source DB instance.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies the storage throughput value for the read replica.</p>
   *          <p>This setting doesn't apply to RDS Custom or Amazon Aurora DB instances.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The option group to associate the DB instance with. If not specified, RDS uses the option group
   *             associated with the source DB instance or cluster.</p>
   *          <note>
   *             <p>For SQL Server, you must use the option group associated with the source.</p>
   *          </note>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The name of the DB parameter group to associate with this read replica DB
   *             instance.</p>
   *          <p>For the Db2 DB engine, if your source DB instance uses the bring your own license
   *             (BYOL) model, then a custom parameter group must be associated with the replica. For a
   *             same Amazon Web Services Region replica, if you don't specify a custom parameter group, Amazon RDS
   *             associates the custom parameter group associated with the source DB instance. For a
   *             cross-Region replica, you must specify a custom parameter group. This custom parameter
   *             group must include your IBM Site ID and IBM Customer ID. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html#db2-prereqs-ibm-info">IBM IDs
   *                 for bring your own license (BYOL) for Db2</a>. </p>
   *          <p>For Single-AZ or Multi-AZ DB instance read replica instances, if you don't specify a
   *             value for <code>DBParameterGroupName</code>, then Amazon RDS uses the
   *                 <code>DBParameterGroup</code> of the source DB instance for a same Region read
   *             replica, or the default <code>DBParameterGroup</code> for the specified DB engine for a
   *             cross-Region read replica.</p>
   *          <p>For Multi-AZ DB cluster same Region read replica instances, if you don't specify a
   *             value for <code>DBParameterGroupName</code>, then Amazon RDS uses the default
   *                 <code>DBParameterGroup</code>.</p>
   *          <p>Specifying a parameter group for this operation is only supported for MySQL DB
   *             instances for cross-Region read replicas, for Multi-AZ DB cluster read replica
   *             instances, for Db2 DB instances, and for Oracle DB instances. It isn't supported for
   *             MySQL DB instances for same Region read replicas or for RDS Custom.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>Specifies whether the DB instance is publicly accessible.</p>
   *          <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint
   *           resolves to the private IP address from within the DB cluster's virtual private cloud
   *           (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access
   *           to the DB cluster is ultimately controlled by the security group it uses. That public
   *           access isn't permitted if the security group assigned to the DB cluster doesn't permit
   *           it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBInstance</a>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance isn't created in a VPC.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB subnet group.</p>
   *             </li>
   *             <li>
   *                <p>The specified DB subnet group must be in the same Amazon Web Services Region in which the operation is running.</p>
   *             </li>
   *             <li>
   *                <p>All read replicas in one Amazon Web Services Region that are created from the same source DB
   *                     instance must either:</p>
   *                <ul>
   *                   <li>
   *                      <p>Specify DB subnet groups from the same VPC. All these read replicas are created in the same
   *                             VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>Not specify a DB subnet group. All these read replicas are created outside of any
   *                             VPC.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>A list of Amazon EC2 VPC security groups to associate with the read replica.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The storage type to associate with the read replica.</p>
   *          <p>If you specify <code>io1</code>, <code>io2</code>, or <code>gp3</code>, you must also include a value for the
   *             <code>Iops</code> parameter.</p>
   *          <p>Valid Values: <code>gp2 | gp3 | io1 | io2 | standard</code>
   *          </p>
   *          <p>Default: <code>io1</code> if the <code>Iops</code> parameter is specified. Otherwise,
   *                 <code>gp3</code>.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Specifies whether to copy all tags from the read replica to snapshots of
   *             the read replica. By default, tags aren't copied.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are
   *             collected for the read replica. To disable collection of Enhanced Monitoring metrics,
   *             specify <code>0</code>. The default is <code>0</code>.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must set <code>MonitoringInterval</code>
   *       to a value other than <code>0</code>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *       example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *           create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must
   *           supply a <code>MonitoringRoleArn</code> value.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted read replica.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you create an encrypted read replica in the same Amazon Web Services Region as the source DB
   *             instance or Multi-AZ DB cluster, don't specify a value for this parameter. A read
   *             replica in the same Amazon Web Services Region is always encrypted with the same KMS key as the source
   *             DB instance or cluster.</p>
   *          <p>If you create an encrypted read replica in a different Amazon Web Services Region, then you must
   *             specify a KMS key identifier for the destination Amazon Web Services Region. KMS keys are specific to
   *             the Amazon Web Services Region that they are created in, and you can't use KMS keys from one
   *             Amazon Web Services Region in another Amazon Web Services Region.</p>
   *          <p>You can't create an encrypted read replica from an unencrypted DB instance or
   *             Multi-AZ DB cluster.</p>
   *          <p>This setting doesn't apply to RDS Custom, which uses the same KMS key as the primary
   *             replica.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>When you are creating a read replica from one Amazon Web Services GovCloud (US) Region to another or
   *             from one China Amazon Web Services Region to another, the URL that contains a Signature Version 4
   *             signed request for the <code>CreateDBInstanceReadReplica</code> API operation in the
   *             source Amazon Web Services Region that contains the source DB instance.</p>
   *          <p>This setting applies only to Amazon Web Services GovCloud (US) Regions and
   *             China Amazon Web Services Regions. It's ignored in other Amazon Web Services Regions.</p>
   *          <p>This setting applies only when replicating from a source DB
   *                 <i>instance</i>. Source DB clusters aren't supported in Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions.</p>
   *          <p>You must specify this parameter when you create an encrypted read replica from
   *             another Amazon Web Services Region by using the Amazon RDS API. Don't specify
   *                 <code>PreSignedUrl</code> when you are creating an encrypted read replica in the
   *             same Amazon Web Services Region.</p>
   *          <p>The presigned URL must be a valid request for the
   *                 <code>CreateDBInstanceReadReplica</code> API operation that can run in the
   *             source Amazon Web Services Region that contains the encrypted source DB instance. The presigned URL
   *             request must contain the following parameter values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DestinationRegion</code> - The Amazon Web Services Region that the encrypted read
   *                     replica is created in. This Amazon Web Services Region is the same one where the
   *                         <code>CreateDBInstanceReadReplica</code> operation is called that contains
   *                     this presigned URL.</p>
   *                <p>For example, if you create an encrypted DB instance in the us-west-1
   *                     Amazon Web Services Region, from a source DB instance in the us-east-2 Amazon Web Services Region, then you
   *                     call the <code>CreateDBInstanceReadReplica</code> operation in the us-east-1
   *                     Amazon Web Services Region and provide a presigned URL that contains a call to the
   *                         <code>CreateDBInstanceReadReplica</code> operation in the us-west-2
   *                     Amazon Web Services Region. For this example, the <code>DestinationRegion</code> in the
   *                     presigned URL must be set to the us-east-1 Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The KMS key identifier for the key to use to
   *                     encrypt the read replica in the destination Amazon Web Services Region. This is the same
   *                     identifier for both the <code>CreateDBInstanceReadReplica</code> operation that
   *                     is called in the destination Amazon Web Services Region, and the operation contained in the
   *                     presigned URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SourceDBInstanceIdentifier</code> - The DB instance identifier for the
   *                     encrypted DB instance to be replicated. This identifier must be in the Amazon
   *                     Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are
   *                     creating an encrypted read replica from a DB instance in the us-west-2
   *                     Amazon Web Services Region, then your <code>SourceDBInstanceIdentifier</code> looks like the
   *                     following example:
   *                         <code>arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115</code>.</p>
   *             </li>
   *          </ul>
   *          <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p>
   *          <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify
   *                     <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying
   *                     <code>SourceRegion</code> autogenerates a presigned URL that is a valid request
   *                 for the operation that can run in the source Amazon Web Services Region.</p>
   *          </note>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *          <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The mode of Database Insights to enable for the read replica.</p>
   *          <note>
   *             <p>This setting isn't supported.</p>
   *          </note>
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * <p>Specifies whether to enable Performance Insights for the read replica.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using
   *             Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                 Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   *          <p>If you specify a retention period that isn't valid, such as <code>94</code>,  Amazon RDS returns an error.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>The list of logs that the new DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing
   *                 Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>Specifies whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * <p>Specifies whether to enable deletion protection for the DB instance.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL
   *             Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *             Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory
   *             Service.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of an Active Directory domain.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mymanagedADtest.mymanagedAD.mydomain</code>
   *          </p>
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * <p>The Active Directory organizational unit for your DB instance to join.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the distinguished name format.</p>
   *             </li>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain</code>
   *          </p>
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * <p>The ARN for the Secrets Manager secret with the credentials for the user joining the domain.</p>
   *          <p>Example: <code>arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456</code>
   *          </p>
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * <p>The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Two IP addresses must be provided.  If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>123.124.125.126,234.235.236.237</code>
   *          </p>
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * <p>The open mode of the replica database.</p>
   *          <p>This parameter is only supported for Db2 DB instances and Oracle DB
   *             instances.</p>
   *          <dl>
   *             <dt>Db2</dt>
   *             <dd>
   *                <p>Standby DB replicas are included in Db2 Advanced Edition (AE) and Db2
   *                         Standard Edition (SE). The main use case for standby replicas is
   *                         cross-Region disaster recovery. Because it doesn't accept user
   *                         connections, a standby replica can't serve a read-only workload.</p>
   *                <p>You can create a combination of standby and read-only DB replicas for the
   *                         same primary DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-replication.html">Working with replicas for Amazon RDS for Db2</a> in the <i>Amazon RDS User
   *                             Guide</i>.</p>
   *                <p>To create standby DB replicas for RDS for Db2, set this parameter to
   *                             <code>mounted</code>.</p>
   *             </dd>
   *             <dt>Oracle</dt>
   *             <dd>
   *                <p>Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for
   *                     mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active
   *                     Data Guard to transmit information to the mounted replica. Because it doesn't accept
   *                     user connections, a mounted replica can't serve a read-only workload.</p>
   *                <p>You can create a combination of mounted and read-only DB replicas for the same primary DB instance.
   *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Working with read replicas for Amazon RDS for Oracle</a>
   *                     in the <i>Amazon RDS User Guide</i>.</p>
   *                <p>For RDS Custom, you must specify this parameter and set it to
   *                         <code>mounted</code>. The value won't be set by default. After replica
   *                         creation, you can manage the open mode manually.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  ReplicaMode?: ReplicaMode | undefined;

  /**
   * <p>Specifies whether to enable a customer-owned IP address (CoIP) for an RDS
   *             on Outposts read replica.</p>
   *          <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the read replica from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *          <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * <p>The network type of the DB instance.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for read replica.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *          <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * <p>The location where RDS stores automated backups and manual snapshots.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local</code> for Dedicated Local Zones</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region</code> for Amazon Web Services Region</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * <p>The instance profile associated with the underlying Amazon EC2 instance of an
   *             RDS Custom DB instance. The instance profile must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>The profile must exist in your account.</p>
   *             </li>
   *             <li>
   *                <p>The profile must have an IAM role that Amazon EC2 has permissions to assume.</p>
   *             </li>
   *             <li>
   *                <p>The instance profile name and the associated IAM role name must start with the prefix <code>AWSRDSCustom</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For the list of permissions required for the IAM role, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc">
   *                 Configure IAM and your VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting is required for RDS Custom DB instances.</p>
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * <p>The amount of storage (in gibibytes) to allocate initially for the read replica.
   *             Follow the allocation rules specified in <code>CreateDBInstance</code>.</p>
   *          <p>This setting isn't valid for RDS for SQL Server.</p>
   *          <note>
   *             <p>Be sure to allocate enough storage for your read replica so that the create operation can succeed.
   *                 You can also allocate additional storage for future growth.</p>
   *          </note>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The identifier of the Multi-AZ DB cluster that will act as the source for the read
   *             replica. Each DB cluster can have up to 15 read replicas.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the identifier of an existing Multi-AZ DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>SourceDBInstanceIdentifier</code> parameter is
   *                     also specified.</p>
   *             </li>
   *             <li>
   *                <p>The specified DB cluster must have automatic backups enabled, that is, its
   *                     backup retention period must be greater than 0.</p>
   *             </li>
   *             <li>
   *                <p>The source DB cluster must be in the same Amazon Web Services Region as the read replica.
   *                     Cross-Region replication isn't supported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * <p>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>Whether to upgrade the storage file system configuration on the read replica. This option
   *             migrates the read replica from the old storage file system layout to the preferred layout.</p>
   * @public
   */
  UpgradeStorageConfig?: boolean | undefined;

  /**
   * <p>The CA certificate identifier to use for the read replica's server certificate.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *                 instance</a> in the <i>Amazon RDS User Guide</i> and
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *                     Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *                         User Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceReadReplicaResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>The DBSubnetGroup shouldn't be specified while creating read replicas that lie
 *             in the same region as the source instance.</p>
 * @public
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
 * <p></p>
 * @public
 */
export interface CreateDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.</p>
   *          <p>To list all of the available parameter group families for a DB engine, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine></code>
   *          </p>
   *          <p>For example, to list all of the available parameter group families for the MySQL DB engine, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine mysql</code>
   *          </p>
   *          <note>
   *             <p>The output contains duplicates.</p>
   *          </note>
   *          <p>The following are the valid DB engine values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db2-ae</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db2-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB parameter group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Tags to assign to the DB parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB parameter group.</p>
   *          <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.</p>
   * @public
   */
  DBParameterGroup?: DBParameterGroup | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthScheme = {
  SECRETS: "SECRETS",
} as const;

/**
 * @public
 */
export type AuthScheme = (typeof AuthScheme)[keyof typeof AuthScheme];

/**
 * @public
 * @enum
 */
export const ClientPasswordAuthType = {
  MYSQL_CACHING_SHA2_PASSWORD: "MYSQL_CACHING_SHA2_PASSWORD",
  MYSQL_NATIVE_PASSWORD: "MYSQL_NATIVE_PASSWORD",
  POSTGRES_MD5: "POSTGRES_MD5",
  POSTGRES_SCRAM_SHA_256: "POSTGRES_SCRAM_SHA_256",
  SQL_SERVER_AUTHENTICATION: "SQL_SERVER_AUTHENTICATION",
} as const;

/**
 * @public
 */
export type ClientPasswordAuthType = (typeof ClientPasswordAuthType)[keyof typeof ClientPasswordAuthType];

/**
 * @public
 * @enum
 */
export const IAMAuthMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  REQUIRED: "REQUIRED",
} as const;

/**
 * @public
 */
export type IAMAuthMode = (typeof IAMAuthMode)[keyof typeof IAMAuthMode];

/**
 * <p>Specifies the details of authentication used by a proxy to log in as a specific database user.</p>
 * @public
 */
export interface UserAuthConfig {
  /**
   * <p>A user-specified description about the authentication used by a proxy to log in as a specific database user.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the database user to which the proxy connects.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The type of authentication that the proxy uses for connections from the proxy to the underlying database.</p>
   * @public
   */
  AuthScheme?: AuthScheme | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate
   *         to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>A value that indicates whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.
   *         The <code>ENABLED</code> value is valid only for proxies with RDS for Microsoft SQL Server.</p>
   * @public
   */
  IAMAuth?: IAMAuthMode | undefined;

  /**
   * <p>The type of authentication the proxy uses for connections from clients. The following values are defaults for the corresponding engines:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for MySQL: <code>MYSQL_CACHING_SHA2_PASSWORD</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for SQL Server: <code>SQL_SERVER_AUTHENTICATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL: <code>POSTGRES_SCRAM_SHA2_256</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ClientPasswordAuthType?: ClientPasswordAuthType | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultAuthScheme = {
  IAM_AUTH: "IAM_AUTH",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type DefaultAuthScheme = (typeof DefaultAuthScheme)[keyof typeof DefaultAuthScheme];

/**
 * @public
 * @enum
 */
export const EndpointNetworkType = {
  DUAL: "DUAL",
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;

/**
 * @public
 */
export type EndpointNetworkType = (typeof EndpointNetworkType)[keyof typeof EndpointNetworkType];

/**
 * @public
 * @enum
 */
export const EngineFamily = {
  MYSQL: "MYSQL",
  POSTGRESQL: "POSTGRESQL",
  SQLSERVER: "SQLSERVER",
} as const;

/**
 * @public
 */
export type EngineFamily = (typeof EngineFamily)[keyof typeof EngineFamily];

/**
 * @public
 * @enum
 */
export const TargetConnectionNetworkType = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;

/**
 * @public
 */
export type TargetConnectionNetworkType =
  (typeof TargetConnectionNetworkType)[keyof typeof TargetConnectionNetworkType];

/**
 * @public
 */
export interface CreateDBProxyRequest {
  /**
   * <p>The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * <p>The kinds of databases that the proxy can connect to.
   *           This value determines which database network protocol the proxy recognizes when it interprets
   *         network traffic to and from the database. For Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases, specify <code>MYSQL</code>.
   *         For Aurora PostgreSQL and RDS for PostgreSQL databases, specify <code>POSTGRESQL</code>. For RDS for Microsoft SQL Server, specify
   *         <code>SQLSERVER</code>.</p>
   * @public
   */
  EngineFamily: EngineFamily | undefined;

  /**
   * <p>The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.
   *             Valid values are <code>NONE</code> and <code>IAM_AUTH</code>.
   *             When set to <code>IAM_AUTH</code>, the proxy uses end-to-end IAM authentication to connect to the database.
   *             If you don't specify <code>DefaultAuthScheme</code> or specify this parameter
   *             as <code>NONE</code>, you must specify the <code>Auth</code> option.</p>
   * @public
   */
  DefaultAuthScheme?: DefaultAuthScheme | undefined;

  /**
   * <p>The authorization mechanism that the proxy uses.</p>
   * @public
   */
  Auth?: UserAuthConfig[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>One or more VPC subnet IDs to associate with the new proxy.</p>
   * @public
   */
  VpcSubnetIds: string[] | undefined;

  /**
   * <p>One or more VPC security group IDs to associate with the new proxy.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>Specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy.</p>
   * @public
   */
  RequireTLS?: boolean | undefined;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
   * @public
   */
  IdleClientTimeout?: number | undefined;

  /**
   * <p>Specifies whether the proxy logs detailed connection and query information.
   *             When you enable <code>DebugLogging</code>, the proxy captures connection details
   *             and connection pool behavior from your queries. Debug logging increases CloudWatch costs
   *             and can impact proxy performance. Enable this option only when you need
   *             to troubleshoot connection or performance issues.</p>
   * @public
   */
  DebugLogging?: boolean | undefined;

  /**
   * <p>An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code> - The proxy endpoint supports IPv4 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPV6</code> - The proxy endpoint supports IPv6 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code> - The proxy endpoint supports both IPv4 and IPv6.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>IPV4</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>IPV6</code> or <code>DUAL</code>, the VPC and all subnets must have an IPv6 CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>IPV6</code> or <code>DUAL</code>, the VPC tenancy cannot be <code>dedicated</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndpointNetworkType?: EndpointNetworkType | undefined;

  /**
   * <p>The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code> - The proxy connects to the database using IPv4 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPV6</code> - The proxy connects to the database using IPv6 only.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>IPV4</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>IPV6</code>, the database must support dual-stack mode. RDS doesn't support IPv6-only databases.</p>
   *             </li>
   *             <li>
   *                <p>All targets registered with the proxy must be compatible with the specified network type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetConnectionNetworkType?: TargetConnectionNetworkType | undefined;
}

/**
 * <p>Returns the details of authentication used by a proxy to log in as a specific database user.</p>
 * @public
 */
export interface UserAuthConfigInfo {
  /**
   * <p>A user-specified description about the authentication used by a proxy to log in as a specific database user.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the database user to which the proxy connects.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The type of authentication that the proxy uses for connections from the proxy to the underlying database.</p>
   * @public
   */
  AuthScheme?: AuthScheme | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate
   *         to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. </p>
   * @public
   */
  IAMAuth?: IAMAuthMode | undefined;

  /**
   * <p>The type of authentication the proxy uses for connections from clients.</p>
   * @public
   */
  ClientPasswordAuthType?: ClientPasswordAuthType | undefined;
}

/**
 * @public
 * @enum
 */
export const DBProxyStatus = {
  AVAILABLE: "available",
  CREATING: "creating",
  DELETING: "deleting",
  INCOMPATIBLE_NETWORK: "incompatible-network",
  INSUFFICIENT_RESOURCE_LIMITS: "insufficient-resource-limits",
  MODIFYING: "modifying",
  REACTIVATING: "reactivating",
  SUSPENDED: "suspended",
  SUSPENDING: "suspending",
} as const;

/**
 * @public
 */
export type DBProxyStatus = (typeof DBProxyStatus)[keyof typeof DBProxyStatus];

/**
 * <p>The data structure representing a proxy managed by the RDS Proxy.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
 * @public
 */
export interface DBProxy {
  /**
   * <p>The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
   * @public
   */
  DBProxyName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the proxy.</p>
   * @public
   */
  DBProxyArn?: string | undefined;

  /**
   * <p>The current status of this proxy. A status of <code>available</code> means the
   *         proxy is ready to handle requests. Other values indicate that you must wait for
   *         the proxy to be ready, or take some action to resolve an issue.</p>
   * @public
   */
  Status?: DBProxyStatus | undefined;

  /**
   * <p>The kinds of databases that the proxy can connect to. This value determines which database network protocol
   *         the proxy recognizes when it interprets network traffic to and from the database. <code>MYSQL</code> supports Aurora MySQL,
   *         RDS for MariaDB, and RDS for MySQL databases. <code>POSTGRESQL</code> supports Aurora PostgreSQL and RDS for PostgreSQL databases.
   *         <code>SQLSERVER</code> supports RDS for Microsoft SQL Server databases.</p>
   * @public
   */
  EngineFamily?: string | undefined;

  /**
   * <p>Provides the VPC ID of the DB proxy.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Provides a list of VPC security groups that the proxy belongs to.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The EC2 subnet IDs for the proxy.</p>
   * @public
   */
  VpcSubnetIds?: string[] | undefined;

  /**
   * <p>The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.
   *             Valid values are <code>NONE</code> and <code>IAM_AUTH</code>.
   *             When set to <code>IAM_AUTH</code>, the proxy uses end-to-end IAM authentication to connect to the database.
   *         </p>
   * @public
   */
  DefaultAuthScheme?: string | undefined;

  /**
   * <p>One or more data structures specifying the authorization mechanism to connect to the associated RDS DB instance
   *         or Aurora DB cluster.</p>
   * @public
   */
  Auth?: UserAuthConfigInfo[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that the proxy uses to access Amazon Secrets Manager.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the
   *         connection string for a database client application.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>Indicates whether Transport Layer Security (TLS) encryption is required for connections to the proxy.</p>
   * @public
   */
  RequireTLS?: boolean | undefined;

  /**
   * <p>The number of seconds a connection to the proxy can have no activity before the proxy drops the client connection.
   *         The proxy keeps the underlying database connection open and puts it back into the connection pool for reuse by
   *         later connection requests.</p>
   *          <p>Default: 1800 (30 minutes)</p>
   *          <p>Constraints: 1 to 28,800</p>
   * @public
   */
  IdleClientTimeout?: number | undefined;

  /**
   * <p>Specifies whether the proxy logs detailed connection and query information.
   *             When you enable <code>DebugLogging</code>, the proxy captures connection details
   *             and connection pool behavior from your queries. Debug logging increases CloudWatch costs
   *             and can impact proxy performance. Enable this option only when you need
   *             to troubleshoot connection or performance issues.</p>
   * @public
   */
  DebugLogging?: boolean | undefined;

  /**
   * <p>The date and time when the proxy was first created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date and time when the proxy was last updated.</p>
   * @public
   */
  UpdatedDate?: Date | undefined;

  /**
   * <p>The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code> - The proxy endpoint supports IPv4 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPV6</code> - The proxy endpoint supports IPv6 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code> - The proxy endpoint supports both IPv4 and IPv6.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndpointNetworkType?: EndpointNetworkType | undefined;

  /**
   * <p>The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code> - The proxy connects to the database using IPv4 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPV6</code> - The proxy connects to the database using IPv6 only.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetConnectionNetworkType?: TargetConnectionNetworkType | undefined;
}

/**
 * @public
 */
export interface CreateDBProxyResponse {
  /**
   * <p>The <code>DBProxy</code> structure corresponding to the new proxy.</p>
   * @public
   */
  DBProxy?: DBProxy | undefined;
}

/**
 * <p>The specified proxy name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const DBProxyEndpointTargetRole = {
  READ_ONLY: "READ_ONLY",
  READ_WRITE: "READ_WRITE",
} as const;

/**
 * @public
 */
export type DBProxyEndpointTargetRole = (typeof DBProxyEndpointTargetRole)[keyof typeof DBProxyEndpointTargetRole];

/**
 * @public
 */
export interface CreateDBProxyEndpointRequest {
  /**
   * <p>The name of the DB proxy associated with the DB proxy endpoint that you create.</p>
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * <p>The name of the DB proxy endpoint to create.</p>
   * @public
   */
  DBProxyEndpointName: string | undefined;

  /**
   * <p>The VPC subnet IDs for the DB proxy endpoint that you create. You can specify a
   *         different set of subnet IDs than for the original DB proxy.</p>
   * @public
   */
  VpcSubnetIds: string[] | undefined;

  /**
   * <p>The VPC security group IDs for the DB proxy endpoint that you create. You can
   *         specify a different set of security group IDs than for the original DB proxy.
   *         The default is the default security group for the VPC.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The role of the DB proxy endpoint. The role determines whether the endpoint can be used for read/write
   *         or only read operations. The default is <code>READ_WRITE</code>. The only role that proxies for RDS for Microsoft SQL Server
   *         support is <code>READ_WRITE</code>.</p>
   * @public
   */
  TargetRole?: DBProxyEndpointTargetRole | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code> - The proxy endpoint supports IPv4 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPV6</code> - The proxy endpoint supports IPv6 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code> - The proxy endpoint supports both IPv4 and IPv6.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>IPV4</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>IPV6</code> or <code>DUAL</code>, the VPC and all subnets must have an IPv6 CIDR block.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>IPV6</code> or <code>DUAL</code>, the VPC tenancy cannot be <code>dedicated</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndpointNetworkType?: EndpointNetworkType | undefined;
}

/**
 * @public
 * @enum
 */
export const DBProxyEndpointStatus = {
  AVAILABLE: "available",
  CREATING: "creating",
  DELETING: "deleting",
  INCOMPATIBLE_NETWORK: "incompatible-network",
  INSUFFICIENT_RESOURCE_LIMITS: "insufficient-resource-limits",
  MODIFYING: "modifying",
} as const;

/**
 * @public
 */
export type DBProxyEndpointStatus = (typeof DBProxyEndpointStatus)[keyof typeof DBProxyEndpointStatus];

/**
 * <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one
 *         endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same
 *         DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the
 *         associated DB proxy.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
 * @public
 */
export interface DBProxyEndpoint {
  /**
   * <p>The name for the DB proxy endpoint. An identifier must begin with a letter and
   *         must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen
   *         or contain two consecutive hyphens.</p>
   * @public
   */
  DBProxyEndpointName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB proxy endpoint.</p>
   * @public
   */
  DBProxyEndpointArn?: string | undefined;

  /**
   * <p>The identifier for the DB proxy that is associated with this DB proxy endpoint.</p>
   * @public
   */
  DBProxyName?: string | undefined;

  /**
   * <p>The current status of this DB proxy endpoint. A status of <code>available</code> means the
   *         endpoint is ready to handle requests. Other values indicate that you must wait for
   *         the endpoint to be ready, or take some action to resolve an issue.</p>
   * @public
   */
  Status?: DBProxyEndpointStatus | undefined;

  /**
   * <p>Provides the VPC ID of the DB proxy endpoint.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Provides a list of VPC security groups that the DB proxy endpoint belongs to.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The EC2 subnet IDs for the DB proxy endpoint.</p>
   * @public
   */
  VpcSubnetIds?: string[] | undefined;

  /**
   * <p>The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the
   *         connection string for a database client application.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The date and time when the DB proxy endpoint was first created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.</p>
   * @public
   */
  TargetRole?: DBProxyEndpointTargetRole | undefined;

  /**
   * <p>Indicates whether this endpoint is the default endpoint for the associated DB proxy.
   *         Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the
   *         DB proxy can be either read/write or read-only.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code> - The proxy endpoint supports IPv4 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPV6</code> - The proxy endpoint supports IPv6 only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code> - The proxy endpoint supports both IPv4 and IPv6.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndpointNetworkType?: EndpointNetworkType | undefined;
}

/**
 * @public
 */
export interface CreateDBProxyEndpointResponse {
  /**
   * <p>The <code>DBProxyEndpoint</code> object that is created by the API operation.
   *         The DB proxy endpoint that you create might provide capabilities such as read/write
   *         or read-only operations, or using a different VPC than the proxy's default VPC.</p>
   * @public
   */
  DBProxyEndpoint?: DBProxyEndpoint | undefined;
}

/**
 * <p>The specified DB proxy endpoint name must be unique for all DB proxy endpoints owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface CreateDBSecurityGroupMessage {
  /**
   * <p>The name for the DB security group. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must not be "Default"</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mysecuritygroup</code>
   *          </p>
   * @public
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>The description for the DB security group.</p>
   * @public
   */
  DBSecurityGroupDescription: string | undefined;

  /**
   * <p>Tags to assign to the DB security group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSecurityGroupResult {
  /**
   * <p>Contains the details for an Amazon RDS DB security group.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.</p>
   * @public
   */
  DBSecurityGroup?: DBSecurityGroup | undefined;
}

/**
 * <p>A DB security group with the name specified in
 *         <code>DBSecurityGroupName</code> already exists.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface CreateDBShardGroupMessage {
  /**
   * <p>The name of the DB shard group.</p>
   * @public
   */
  DBShardGroupIdentifier: string | undefined;

  /**
   * <p>The name of the primary DB cluster for the DB shard group.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>Specifies whether to create standby standby DB data access shard for the DB shard group.
   *             Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>0 - Creates a DB shard group without a standby DB data access shard. This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).</p>
   *             </li>
   *             <li>
   *                <p>2 - Creates a DB shard group with two standby DB data access shard in two different AZs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ComputeRedundancy?: number | undefined;

  /**
   * <p>The maximum capacity of the DB shard group in Aurora capacity units (ACUs).</p>
   * @public
   */
  MaxACU: number | undefined;

  /**
   * <p>The minimum capacity of the DB shard group in Aurora capacity units (ACUs).</p>
   * @public
   */
  MinACU?: number | undefined;

  /**
   * <p>Specifies whether the DB shard group is publicly accessible.</p>
   *          <p>When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from
   *             within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC.
   *             Access to the DB shard group is ultimately controlled by the security group it uses.
   *             That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.</p>
   *          <p>When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.</p>
   *          <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p>
   *          <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *          <ul>
   *             <li>
   *                <p>If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB shard group is private.</p>
   *             </li>
   *             <li>
   *                <p>If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *          <ul>
   *             <li>
   *                <p>If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB shard group is private.</p>
   *             </li>
   *             <li>
   *                <p>If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the details for an Amazon RDS DB shard group.</p>
 * @public
 */
export interface DBShardGroup {
  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB shard group.</p>
   * @public
   */
  DBShardGroupResourceId?: string | undefined;

  /**
   * <p>The name of the DB shard group.</p>
   * @public
   */
  DBShardGroupIdentifier?: string | undefined;

  /**
   * <p>The name of the primary DB cluster for the DB shard group.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>The maximum capacity of the DB shard group in Aurora capacity units (ACUs).</p>
   * @public
   */
  MaxACU?: number | undefined;

  /**
   * <p>The minimum capacity of the DB shard group in Aurora capacity units (ACUs).</p>
   * @public
   */
  MinACU?: number | undefined;

  /**
   * <p>Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>0 - Creates a DB shard group without a standby DB shard group. This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>1 - Creates a DB shard group with a standby DB shard group in a different Availability Zone (AZ).</p>
   *             </li>
   *             <li>
   *                <p>2 - Creates a DB shard group with two standby DB shard groups in two different AZs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ComputeRedundancy?: number | undefined;

  /**
   * <p>The status of the DB shard group.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Indicates whether the DB shard group is publicly accessible.</p>
   *          <p>When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint
   *             resolves to the private IP address from within the DB shard group's virtual private cloud
   *             (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access
   *             to the DB shard group is ultimately controlled by the security group it uses. That public
   *             access isn't permitted if the security group assigned to the DB shard group doesn't permit
   *             it.</p>
   *          <p>When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBShardGroup</a>.</p>
   *          <p>This setting is only for Aurora Limitless Database.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The connection endpoint for the DB shard group.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB shard group.</p>
   * @public
   */
  DBShardGroupArn?: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * <p>The specified DB shard group name must be unique in your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 * @public
 */
export class DBShardGroupAlreadyExistsFault extends __BaseException {
  readonly name: "DBShardGroupAlreadyExistsFault" = "DBShardGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBShardGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBShardGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBShardGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The maximum number of DB shard groups for your Amazon Web Services account in the specified Amazon Web Services Region has been reached.</p>
 * @public
 */
export class MaxDBShardGroupLimitReached extends __BaseException {
  readonly name: "MaxDBShardGroupLimitReached" = "MaxDBShardGroupLimitReached";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxDBShardGroupLimitReached, __BaseException>) {
    super({
      name: "MaxDBShardGroupLimitReached",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxDBShardGroupLimitReached.prototype);
  }
}

/**
 * <p>The specified DB engine version isn't supported for Aurora Limitless Database.</p>
 * @public
 */
export class UnsupportedDBEngineVersionFault extends __BaseException {
  readonly name: "UnsupportedDBEngineVersionFault" = "UnsupportedDBEngineVersionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedDBEngineVersionFault, __BaseException>) {
    super({
      name: "UnsupportedDBEngineVersionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedDBEngineVersionFault.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface CreateDBSnapshotMessage {
  /**
   * <p>The identifier for the DB snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   * @public
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB instance that you want to create the snapshot of.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.</p>
   * @public
   */
  DBSnapshot?: DBSnapshot | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must not be default.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the DB subnet group.</p>
   * @public
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * <p>The EC2 Subnet IDs for the DB subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>Tags to assign to the DB subnet group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSubnetGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB subnet group.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSubnetGroups</code> action.</p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> is already used by an existing DB subnet group.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface CreateEventSubscriptionMessage {
  /**
   * <p>The name of the subscription.</p>
   *          <p>Constraints: The name must be less than 255 characters.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. SNS
   *             automatically creates the ARN when you create a topic and subscribe to it.</p>
   *          <note>
   *             <p>RDS doesn't support FIFO (first in, first out) topics. For more information, see
   *                     <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html">Message
   *                     ordering and deduplication (FIFO topics)</a> in the <i>Amazon Simple
   *                     Notification Service Developer Guide</i>.</p>
   *          </note>
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be
   *             notified of events generated by a DB instance, you set this parameter to
   *                 <code>db-instance</code>. For RDS Proxy events, specify <code>db-proxy</code>. If this value isn't specified, all events are
   *             returned.</p>
   *          <p>Valid Values:<code> db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment </code>
   *          </p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of event categories for a particular source type (<code>SourceType</code>)
   *             that you want to subscribe to. You can see a list of the categories for a given source type in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html">
   *                <i>Amazon RDS User Guide</i>
   *             </a> or the
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html">
   *                <i>Amazon Aurora User Guide</i>
   *             </a>.
   *                 You can also see this list by using the <code>DescribeEventCategories</code> operation.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response.
   *           An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>SourceIds</code> are supplied, <code>SourceType</code> must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB instance, a <code>DBInstanceIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB cluster, a <code>DBClusterIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB cluster snapshot, a <code>DBClusterSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is an RDS Proxy, a <code>DBProxyName</code> value must be supplied.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * <p>Specifies whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>You have reached the maximum number of event subscriptions.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateGlobalClusterMessage {
  /**
   * <p>The cluster identifier for this global database cluster. This parameter is stored as a lowercase string.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) to use as the primary cluster of the global database.</p>
   *          <p>If you provide a value for this parameter, don't specify values for the following settings because Amazon Aurora uses the values from the specified source DB cluster:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DatabaseName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Engine</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EngineVersion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StorageEncrypted</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * <p>The database engine to use for this global database cluster.</p>
   *          <p>Valid Values: <code>aurora-mysql | aurora-postgresql</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified if <code>SourceDBClusterIdentifier</code> is specified. In this case, Amazon Aurora uses the engine of the source DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The engine version to use for this global database cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified if <code>SourceDBClusterIdentifier</code> is specified. In this case, Amazon Aurora uses the engine version of the source DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The life cycle type for this global database cluster.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your global cluster into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *               creating the global cluster will fail if the DB major version is past its end of standard support date.</p>
   *          </note>
   *          <p>This setting only applies to Aurora PostgreSQL-based global databases.</p>
   *          <p>You can use this setting to enroll your global cluster into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your global cluster past the end of standard support for that engine version. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html">Amazon RDS Extended Support with Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * <p>Specifies whether to enable deletion protection for the new global database cluster.
   *         The global database can't be deleted when deletion protection is enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The name for your database of up to 64 alphanumeric characters. If you don't specify
   *             a name, Amazon Aurora doesn't create a database in the global database cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified if <code>SourceDBClusterIdentifier</code> is specified. In this case, Amazon Aurora uses the database name from the source DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Specifies whether to enable storage encryption for the new global database cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified if <code>SourceDBClusterIdentifier</code> is specified. In this case, Amazon Aurora uses the setting from the source DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>Tags to assign to the global cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FailoverStatus = {
  CANCELLING: "cancelling",
  FAILING_OVER: "failing-over",
  PENDING: "pending",
} as const;

/**
 * @public
 */
export type FailoverStatus = (typeof FailoverStatus)[keyof typeof FailoverStatus];

/**
 * <p>Contains the state of scheduled or in-process operations on a
 *         global cluster (Aurora global database). This data type is empty unless a switchover
 *         or failover operation is scheduled or is in progress on the Aurora global database.</p>
 * @public
 */
export interface FailoverState {
  /**
   * <p>The current status of the global cluster. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>pending  The service received a request to switch over or fail over the global cluster. The
   *         global cluster's primary DB cluster and the specified secondary DB cluster are being verified before the operation
   *         starts.</p>
   *             </li>
   *             <li>
   *                <p>failing-over  Aurora is promoting the chosen secondary Aurora DB cluster to become the new primary DB cluster to fail over the global cluster.</p>
   *             </li>
   *             <li>
   *                <p>cancelling  The request to switch over or fail over the global cluster was cancelled and the primary
   *         Aurora DB cluster and the selected secondary Aurora DB cluster are returning to their previous states.</p>
   *             </li>
   *             <li>
   *                <p>switching-over  This status covers the range of Aurora internal operations that take place during the switchover process, such
   *         as demoting the primary Aurora DB cluster, promoting the secondary Aurora DB cluster, and synchronizing replicas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: FailoverStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora DB cluster that is currently being demoted, and which is associated with this
   *        state.</p>
   * @public
   */
  FromDbClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Aurora DB cluster that is currently being promoted, and which is associated
   *      with this state.</p>
   * @public
   */
  ToDbClusterArn?: string | undefined;

  /**
   * <p>Indicates whether the operation is a global switchover or a global failover. If data loss is allowed, then the operation is a global failover.
   *        Otherwise, it's a switchover.</p>
   * @public
   */
  IsDataLossAllowed?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const GlobalClusterMemberSynchronizationStatus = {
  CONNECTED: "connected",
  PENDING_RESYNC: "pending-resync",
} as const;

/**
 * @public
 */
export type GlobalClusterMemberSynchronizationStatus =
  (typeof GlobalClusterMemberSynchronizationStatus)[keyof typeof GlobalClusterMemberSynchronizationStatus];

/**
 * <p>A data structure with information about any primary and
 *         secondary clusters associated with a global cluster (Aurora global database).</p>
 * @public
 */
export interface GlobalClusterMember {
  /**
   * <p>The Amazon Resource Name (ARN) for each Aurora DB cluster in the global cluster.</p>
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for each read-only secondary cluster
   *         associated with the global cluster.</p>
   * @public
   */
  Readers?: string[] | undefined;

  /**
   * <p>Indicates whether the Aurora DB cluster is the primary cluster
   *         (that is, has read-write capability) for the global
   *         cluster with which it is associated.</p>
   * @public
   */
  IsWriter?: boolean | undefined;

  /**
   * <p>The status of write forwarding for a secondary cluster in the global cluster.</p>
   * @public
   */
  GlobalWriteForwardingStatus?: WriteForwardingStatus | undefined;

  /**
   * <p>The status of synchronization of each Aurora DB cluster in the global cluster.</p>
   * @public
   */
  SynchronizationStatus?: GlobalClusterMemberSynchronizationStatus | undefined;
}

/**
 * <p>A data type representing an Aurora global database.</p>
 * @public
 */
export interface GlobalCluster {
  /**
   * <p>Contains a user-supplied global database cluster identifier. This identifier is the unique key that
   *         identifies a global database cluster.</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services <a href="https://docs.aws.amazon.com/glossary/latest/reference/glos-chap.html?id=docs_gateway#partition">partition</a>-unique, immutable identifier for the global database cluster. This identifier is found in
   *         Amazon Web Services CloudTrail log entries whenever the Amazon Web Services KMS key for the DB cluster is accessed.</p>
   * @public
   */
  GlobalClusterResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the global database cluster.</p>
   * @public
   */
  GlobalClusterArn?: string | undefined;

  /**
   * <p>Specifies the current state of this global database cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The Aurora database engine used by the global database cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Indicates the database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The lifecycle type for the global cluster.</p>
   *          <p>For more information, see CreateGlobalCluster.</p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * <p>The default database name within the new global database cluster.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The storage encryption setting for the global database cluster.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The deletion protection setting for the new global database cluster.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The list of primary and secondary clusters within the global database cluster.</p>
   * @public
   */
  GlobalClusterMembers?: GlobalClusterMember[] | undefined;

  /**
   * <p>
   *          The writer endpoint for the new global database cluster. This endpoint always
   *          points to the writer DB instance in the current primary cluster.
   *        </p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>A data object containing all properties for the current state of an in-process or pending switchover or failover process for this global cluster (Aurora global database).
   *       This object is empty unless the <code>SwitchoverGlobalCluster</code> or <code>FailoverGlobalCluster</code> operation was called on this global cluster.</p>
   * @public
   */
  FailoverState?: FailoverState | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>The <code>GlobalClusterIdentifier</code> already exists. Specify a new global database identifier
 *         (unique name) to create a new global database cluster or to rename an existing one.</p>
 * @public
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
 * @public
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
 * <p>The DB shard group must be in the available state.</p>
 * @public
 */
export class InvalidDBShardGroupStateFault extends __BaseException {
  readonly name: "InvalidDBShardGroupStateFault" = "InvalidDBShardGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBShardGroupStateFault, __BaseException>) {
    super({
      name: "InvalidDBShardGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBShardGroupStateFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateIntegrationMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the database to use as the source for
   *             replication.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The ARN of the Redshift data warehouse to use as the target for replication.</p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p>The name of the integration.</p>
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to
   *             encrypt the integration. If you don't specify an encryption key, RDS uses a default
   *             Amazon Web Services owned key. </p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>An optional set of non-secret key–value pairs that contains additional contextual
   *             information about the data. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *                 context</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   *          <p>You can only include this parameter if you specify the <code>KMSKeyId</code> parameter.</p>
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Data filtering options for the integration. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/zero-etl.filtering.html">Data filtering for Aurora zero-ETL integrations with Amazon Redshift</a>
   *             or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/zero-etl.filtering.html">Data filtering for Amazon RDS zero-ETL integrations with Amazon Redshift</a>.
   *         </p>
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * <p>A description of the integration.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>An error associated with a zero-ETL integration with Amazon Redshift.</p>
 * @public
 */
export interface IntegrationError {
  /**
   * <p>The error code associated with the integration.</p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>A message explaining the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  ACTIVE: "active",
  CREATING: "creating",
  DELETING: "deleting",
  FAILED: "failed",
  MODIFYING: "modifying",
  NEEDS_ATTENTION: "needs_attention",
  SYNCING: "syncing",
} as const;

/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * <p>A zero-ETL integration with Amazon Redshift.</p>
 * @public
 */
export interface Integration {
  /**
   * <p>The Amazon Resource Name (ARN) of the database used as the source for
   *             replication.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The ARN of the Redshift data warehouse used as the target for replication.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The name of the integration.</p>
   * @public
   */
  IntegrationName?: string | undefined;

  /**
   * <p>The ARN of the integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key used to to
   *             encrypt the integration. </p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>The encryption context for the integration. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The current status of the integration.</p>
   * @public
   */
  Status?: IntegrationStatus | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Data filters for the integration. These filters determine which tables
   *             from the source database are sent to the target Amazon Redshift data warehouse.
   *         </p>
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * <p>A description of the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time when the integration was created, in Universal Coordinated Time
   *             (UTC).</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>Any errors associated with the integration.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;
}

/**
 * <p>The integration you are trying to create already exists.</p>
 * @public
 */
export class IntegrationAlreadyExistsFault extends __BaseException {
  readonly name: "IntegrationAlreadyExistsFault" = "IntegrationAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationAlreadyExistsFault, __BaseException>) {
    super({
      name: "IntegrationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationAlreadyExistsFault.prototype);
  }
}

/**
 * <p>A conflicting conditional operation is currently in progress against this resource.
 *             Typically occurs when there are multiple requests being made to the same resource at the same time,
 *             and these requests conflict with each other.</p>
 * @public
 */
export class IntegrationConflictOperationFault extends __BaseException {
  readonly name: "IntegrationConflictOperationFault" = "IntegrationConflictOperationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationConflictOperationFault, __BaseException>) {
    super({
      name: "IntegrationConflictOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationConflictOperationFault.prototype);
  }
}

/**
 * <p>You can't crate any more zero-ETL integrations because the quota has been reached.</p>
 * @public
 */
export class IntegrationQuotaExceededFault extends __BaseException {
  readonly name: "IntegrationQuotaExceededFault" = "IntegrationQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationQuotaExceededFault, __BaseException>) {
    super({
      name: "IntegrationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface CreateOptionGroupMessage {
  /**
   * <p>Specifies the name of the option group to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>myoptiongroup</code>
   *          </p>
   * @public
   */
  OptionGroupName: string | undefined;

  /**
   * <p>The name of the engine to associate this option group with.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db2-ae</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db2-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  EngineName: string | undefined;

  /**
   * <p>Specifies the major version of the engine that this option group should be associated with.</p>
   * @public
   */
  MajorEngineVersion: string | undefined;

  /**
   * <p>The description of the option group.</p>
   * @public
   */
  OptionGroupDescription: string | undefined;

  /**
   * <p>Tags to assign to the option group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateOptionGroupResult {
  /**
   * <p></p>
   * @public
   */
  OptionGroup?: OptionGroup | undefined;
}

/**
 * @public
 */
export interface CreateTenantDatabaseMessage {
  /**
   * <p>The user-supplied DB instance identifier. RDS creates your tenant database in this DB
   *             instance. This parameter isn't case-sensitive.</p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The user-supplied name of the tenant database that you want to create in your DB
   *             instance. This parameter has the same constraints as <code>DBName</code> in
   *                 <code>CreateDBInstance</code>.</p>
   * @public
   */
  TenantDBName: string | undefined;

  /**
   * <p>The name for the master user account in your tenant database. RDS creates this user
   *             account in the tenant database and grants privileges to the master user. This parameter
   *             is case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters, numbers, or underscores.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUsername: string | undefined;

  /**
   * <p>The password for the master user in your tenant database.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 8 to 30 characters.</p>
   *             </li>
   *             <li>
   *                <p>Can include any printable ASCII character except forward slash
   *                     (<code>/</code>), double quote (<code>"</code>), at symbol (<code>@</code>),
   *                     ampersand (<code>&</code>), or single quote (<code>'</code>).</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified when <code>ManageMasterUserPassword</code> is
   *                     enabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The character set for your tenant database. If you don't specify a value, the
   *             character set name defaults to <code>AL32UTF8</code>.</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>The <code>NCHAR</code> value for the tenant database.</p>
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't manage the master user password with Amazon Web Services Secrets Manager if <code>MasterUserPassword</code>
   *                     is specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB instance.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If you don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *             KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *             use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *             managed KMS key.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A response element in the <code>ModifyTenantDatabase</code> operation that describes
 *             changes that will be applied. Specific changes are identified by subelements.</p>
 * @public
 */
export interface TenantDatabasePendingModifiedValues {
  /**
   * <p>The master password for the tenant database.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The name of the tenant database.</p>
   * @public
   */
  TenantDBName?: string | undefined;
}

/**
 * <p>A tenant database in the DB instance. This data type is an element in the response to
 *             the <code>DescribeTenantDatabases</code> action.</p>
 * @public
 */
export interface TenantDatabase {
  /**
   * <p>The creation time of the tenant database.</p>
   * @public
   */
  TenantDatabaseCreateTime?: Date | undefined;

  /**
   * <p>The ID of the DB instance that contains the tenant database.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>The database name of the tenant database.</p>
   * @public
   */
  TenantDBName?: string | undefined;

  /**
   * <p>The status of the tenant database.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The master username of the tenant database.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB instance.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the tenant database.</p>
   * @public
   */
  TenantDatabaseResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the tenant database.</p>
   * @public
   */
  TenantDatabaseARN?: string | undefined;

  /**
   * <p>The character set of the tenant database.</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>The <code>NCHAR</code> character set name of the tenant database.</p>
   * @public
   */
  NcharCharacterSetName?: string | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled for the DB instance.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Information about pending changes for a tenant database.</p>
   * @public
   */
  PendingModifiedValues?: TenantDatabasePendingModifiedValues | undefined;

  /**
   * <p>Contains the secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   * @public
   */
  MasterUserSecret?: MasterUserSecret | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTenantDatabaseResult {
  /**
   * <p>A tenant database in the DB instance. This data type is an element in the response to
   *             the <code>DescribeTenantDatabases</code> action.</p>
   * @public
   */
  TenantDatabase?: TenantDatabase | undefined;
}

/**
 * <p>You attempted to either create a tenant database that already exists or
 *                 modify a tenant database to use the name of an existing tenant database.</p>
 * @public
 */
export class TenantDatabaseAlreadyExistsFault extends __BaseException {
  readonly name: "TenantDatabaseAlreadyExistsFault" = "TenantDatabaseAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TenantDatabaseAlreadyExistsFault, __BaseException>) {
    super({
      name: "TenantDatabaseAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TenantDatabaseAlreadyExistsFault.prototype);
  }
}

/**
 * @public
 */
export interface DeleteBlueGreenDeploymentRequest {
  /**
   * <p>The unique identifier of the blue/green deployment to delete. This parameter isn't
   *             case-sensitive.</p>
   *          <p>Constraints:
   *         </p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing blue/green deployment identifier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BlueGreenDeploymentIdentifier: string | undefined;

  /**
   * <p>Specifies whether to delete the resources in the green environment. You can't specify
   *             this option if the blue/green deployment <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BlueGreenDeployment.html">status</a> is
   *                 <code>SWITCHOVER_COMPLETED</code>.</p>
   * @public
   */
  DeleteTarget?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBlueGreenDeploymentResponse {
  /**
   * <p>Details about a blue/green deployment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
   *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
   *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
   *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
   *                 User Guide</i>.</p>
   * @public
   */
  BlueGreenDeployment?: BlueGreenDeployment | undefined;
}

/**
 * <p>The blue/green deployment can't be switched over or deleted because there is an invalid configuration in
 *             the green environment.</p>
 * @public
 */
export class InvalidBlueGreenDeploymentStateFault extends __BaseException {
  readonly name: "InvalidBlueGreenDeploymentStateFault" = "InvalidBlueGreenDeploymentStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBlueGreenDeploymentStateFault, __BaseException>) {
    super({
      name: "InvalidBlueGreenDeploymentStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBlueGreenDeploymentStateFault.prototype);
  }
}

/**
 * @public
 */
export interface DeleteCustomDBEngineVersionMessage {
  /**
   * <p>The database engine. RDS Custom for Oracle supports the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The custom engine version (CEV) for your DB instance. This option is required for
   *             RDS Custom, but optional for Amazon RDS. The combination of <code>Engine</code> and
   *             <code>EngineVersion</code> is unique per customer per Amazon Web Services Region.</p>
   * @public
   */
  EngineVersion: string | undefined;
}

/**
 * <p>The quota for retained automated backups was exceeded. This prevents you from retaining any additional automated
 *             backups. The retained automated backups quota is the same as your DB cluster quota.</p>
 * @public
 */
export class DBClusterAutomatedBackupQuotaExceededFault extends __BaseException {
  readonly name: "DBClusterAutomatedBackupQuotaExceededFault" = "DBClusterAutomatedBackupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterAutomatedBackupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBClusterAutomatedBackupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterAutomatedBackupQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface DeleteDBClusterMessage {
  /**
   * <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>Specifies whether to skip the creation of a final DB cluster snapshot before RDS
   *             deletes the DB cluster. If you set this value to <code>true</code>, RDS doesn't create a
   *             final DB cluster snapshot. If you set this value to <code>false</code> or don't specify
   *             it, RDS creates a DB cluster snapshot before it deletes the DB cluster. By default, this
   *             parameter is disabled, so RDS creates a final DB cluster snapshot.</p>
   *          <note>
   *             <p>If <code>SkipFinalSnapshot</code> is disabled, you must specify a value for the
   *                     <code>FinalDBSnapshotIdentifier</code> parameter.</p>
   *          </note>
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * <p>The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code>
   *       is disabled.</p>
   *          <note>
   *             <p>If you specify this parameter and also skip the creation of a final DB cluster
   *                 snapshot with the <code>SkipFinalShapshot</code> parameter, the request results in
   *                 an error.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;

  /**
   * <p>Specifies whether to remove automated backups immediately after the DB
   *             cluster is deleted. This parameter isn't case-sensitive. The default is to remove
   *             automated backups immediately after the DB cluster is deleted, unless the Amazon Web Services Backup
   *             policy specifies a point-in-time restore rule.</p>
   * @public
   */
  DeleteAutomatedBackups?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p>No automated backup for this DB cluster was found.</p>
 * @public
 */
export class DBClusterAutomatedBackupNotFoundFault extends __BaseException {
  readonly name: "DBClusterAutomatedBackupNotFoundFault" = "DBClusterAutomatedBackupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterAutomatedBackupNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterAutomatedBackupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterAutomatedBackupNotFoundFault.prototype);
  }
}

/**
 * @public
 */
export interface DeleteDBClusterAutomatedBackupMessage {
  /**
   * <p>The identifier for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   * @public
   */
  DbClusterResourceId: string | undefined;
}

/**
 * <p>Earliest and latest time an instance can be restored to:</p>
 * @public
 */
export interface RestoreWindow {
  /**
   * <p>The earliest time you can restore an instance to.</p>
   * @public
   */
  EarliestTime?: Date | undefined;

  /**
   * <p>The latest time you can restore an instance to.</p>
   * @public
   */
  LatestTime?: Date | undefined;
}

/**
 * <p>An automated backup of a DB cluster. It consists of system backups, transaction logs, and the database cluster
 *             properties that existed at the time you deleted the source cluster.</p>
 * @public
 */
export interface DBClusterAutomatedBackup {
  /**
   * <p>The name of the database engine for this automated backup.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The VPC ID associated with the DB cluster.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the automated backups.</p>
   * @public
   */
  DBClusterAutomatedBackupsArn?: string | undefined;

  /**
   * <p>The identifier for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Earliest and latest time an instance can be restored to:</p>
   * @public
   */
  RestoreWindow?: RestoreWindow | undefined;

  /**
   * <p>The master user name of the automated backup.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The resource ID for the source DB cluster, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region associated with the automated backup.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The license model information for this DB cluster automated backup.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>A list of status information for an automated backup:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>retained</code> - Automated backups for deleted clusters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>The time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>Indicates whether the source DB cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>For all database engines except Amazon Aurora, <code>AllocatedStorage</code> specifies the allocated storage size in gibibytes (GiB).
   *             For Aurora, <code>AllocatedStorage</code> always returns 1, because Aurora DB cluster storage size isn't fixed, but instead automatically
   *             adjusts as needed.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The version of the database engine for the automated backup.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the source DB cluster.</p>
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * <p>The retention period for the automated backups.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The engine mode of the database engine for the automated backup.</p>
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * <p>The Availability Zones where instances in the DB cluster can be created. For information on
   *             Amazon Web Services Regions and Availability Zones, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions
   *                 and Availability Zones</a>.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The port number that the automated backup used for connections.</p>
   *          <p>Default: Inherits from the source DB cluster</p>
   *          <p>Valid Values: <code>1150-65535</code>
   *          </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Amazon Web Services KMS key ID for an automated backup.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The storage type associated with the DB cluster.</p>
   *          <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The IOPS (I/O operations per second) value for the automated backup.</p>
   *          <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The storage throughput for the automated backup. The throughput is automatically set based on the IOPS that you provision, and is not configurable.</p>
   *          <p>This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterAutomatedBackupResult {
  /**
   * <p>An automated backup of a DB cluster. It consists of system backups, transaction logs, and the database cluster
   *             properties that existed at the time you deleted the source cluster.</p>
   * @public
   */
  DBClusterAutomatedBackup?: DBClusterAutomatedBackup | undefined;
}

/**
 * <p>The automated backup is in an invalid state.
 *             For example, this automated backup is associated with an active cluster.</p>
 * @public
 */
export class InvalidDBClusterAutomatedBackupStateFault extends __BaseException {
  readonly name: "InvalidDBClusterAutomatedBackupStateFault" = "InvalidDBClusterAutomatedBackupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterAutomatedBackupStateFault, __BaseException>) {
    super({
      name: "InvalidDBClusterAutomatedBackupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterAutomatedBackupStateFault.prototype);
  }
}

/**
 * <p>The specified custom endpoint doesn't exist.</p>
 * @public
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
 * @public
 */
export interface DeleteDBClusterEndpointMessage {
  /**
   * <p>The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>You can't delete a default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Can't be associated with any DB clusters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;
}

/**
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting
 *             to delete the parameter group, you can't delete it when the parameter group is in
 *             this state.</p>
 * @public
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
 * @public
 */
export interface DeleteDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterSnapshotResult {
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.</p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>The quota for retained automated backups was exceeded. This prevents you
 *             from retaining any additional automated backups. The retained automated backups
 *             quota is the same as your DB instance quota.</p>
 * @public
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
 * @public
 */
export interface DeleteDBInstanceMessage {
  /**
   * <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>Specifies whether to skip the creation of a final DB snapshot before deleting the instance.
   *           If you enable this parameter, RDS doesn't create a DB snapshot. If you don't enable this parameter,
   *           RDS creates a DB snapshot before the DB instance is deleted. By default, skip isn't enabled,
   *           and the DB snapshot is created.</p>
   *          <note>
   *             <p>If you don't enable this parameter, you must specify the <code>FinalDBSnapshotIdentifier</code> parameter.</p>
   *          </note>
   *          <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>,
   *           or <code>incompatible-network</code>, RDS can delete the instance only if you enable this parameter.</p>
   *          <p>If you delete a read replica or an RDS Custom instance, you must enable this setting.</p>
   *          <p>This setting is required for RDS Custom.</p>
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * <p>The <code>DBSnapshotIdentifier</code> of the new <code>DBSnapshot</code> created when the <code>SkipFinalSnapshot</code>
   *         parameter is disabled.</p>
   *          <note>
   *             <p>If you enable this parameter and also enable SkipFinalShapshot, the command results in an error.</p>
   *          </note>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified when deleting a read replica.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;

  /**
   * <p>Specifies whether to remove automated backups immediately after the DB
   *             instance is deleted. This parameter isn't case-sensitive. The default is to remove
   *             automated backups immediately after the DB instance is deleted.</p>
   * @public
   */
  DeleteAutomatedBackups?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>No automated backup for this DB instance was found.</p>
 * @public
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
 * @public
 */
export interface DeleteDBInstanceAutomatedBackupMessage {
  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the automated backups to delete, for example,
   *             <code>arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE</code>.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  DBInstanceAutomatedBackupsArn?: string | undefined;
}

/**
 * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
 *             existed at the time you deleted the source instance.</p>
 * @public
 */
export interface DBInstanceAutomatedBackup {
  /**
   * <p>The Amazon Resource Name (ARN) for the automated backups.</p>
   * @public
   */
  DBInstanceArn?: string | undefined;

  /**
   * <p>The resource ID for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region associated with the automated backup.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an Amazon Web Services Region.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>The earliest and latest time a DB instance can be restored to.</p>
   * @public
   */
  RestoreWindow?: RestoreWindow | undefined;

  /**
   * <p>The allocated storage size for the the automated backup in gibibytes (GiB).</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>A list of status information for an automated backup:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - Automated backups for current instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>retained</code> - Automated backups for deleted instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creating</code> - Automated backups that are waiting for the first automated snapshot to be available.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The port number that the automated backup used for connections.</p>
   *          <p>Default: Inherits from the source DB instance</p>
   *          <p>Valid Values: <code>1150-65535</code>
   *          </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Availability Zone that the automated backup was created in. For information on
   *             Amazon Web Services Regions and Availability Zones, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions
   *                 and Availability Zones</a>.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The VPC ID associated with the DB instance.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The date and time when the DB instance was created.</p>
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * <p>The master user name of an automated backup.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The name of the database engine for this automated backup.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the database engine for the automated backup.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The license model information for the automated backup.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The IOPS (I/O operations per second) value for the automated backup.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The storage throughput for the automated backup.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The option group the automated backup is associated with. If omitted, the default option group for the engine specified is used.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The ARN from the key store with which the automated backup is associated for TDE encryption.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>Indicates whether the automated backup is encrypted.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The storage type associated with the automated backup.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key ID for an automated backup.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The time zone of the automated backup. In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for Microsoft SQL Server DB instances
   *             that were created with a time zone specified.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>True if mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled,
   *             and otherwise false.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>The retention period for the automated backups.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the replicated automated backups.</p>
   * @public
   */
  DBInstanceAutomatedBackupsArn?: string | undefined;

  /**
   * <p>The list of replications to different Amazon Web Services Regions associated with the automated backup.</p>
   * @public
   */
  DBInstanceAutomatedBackupsReplications?: DBInstanceAutomatedBackupsReplication[] | undefined;

  /**
   * <p>The location where automated backups are stored: Dedicated Local Zones, Amazon Web Services Outposts or the Amazon Web Services Region.</p>
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * <p>Specifies whether the automatic backup is for a DB instance in the multi-tenant
   *             configuration (TRUE) or the single-tenant configuration (FALSE). </p>
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * <p>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceAutomatedBackupResult {
  /**
   * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance.</p>
   * @public
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined;
}

/**
 * <p>The automated backup is in an invalid state.
 *             For example, this automated backup is associated with an active instance.</p>
 * @public
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
 * @public
 */
export interface DeleteDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the name of an existing DB parameter group</p>
   *             </li>
   *             <li>
   *                <p>You can't delete a default DB parameter group</p>
   *             </li>
   *             <li>
   *                <p>Can't be associated with any DB instances</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBProxyRequest {
  /**
   * <p>The name of the DB proxy to delete.</p>
   * @public
   */
  DBProxyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBProxyResponse {
  /**
   * <p>The data structure representing the details of the DB proxy that you delete.</p>
   * @public
   */
  DBProxy?: DBProxy | undefined;
}

/**
 * @public
 */
export interface DeleteDBProxyEndpointRequest {
  /**
   * <p>The name of the DB proxy endpoint to delete.</p>
   * @public
   */
  DBProxyEndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBProxyEndpointResponse {
  /**
   * <p>The data structure representing the details of the DB proxy endpoint that you delete.</p>
   * @public
   */
  DBProxyEndpoint?: DBProxyEndpoint | undefined;
}

/**
 * <p>You can't perform this operation while the DB proxy endpoint is in a particular state.</p>
 * @public
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
 * @public
 */
export interface DeleteDBSecurityGroupMessage {
  /**
   * <p>The name of the DB security group to delete.</p>
   *          <note>
   *             <p>You can't delete the default DB security group.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must not be "Default"</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBSecurityGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBShardGroupMessage {
  /**
   * <p>The name of the DB shard group to delete.</p>
   * @public
   */
  DBShardGroupIdentifier: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteDBSnapshotMessage {
  /**
   * <p>The DB snapshot identifier.</p>
   *          <p>Constraints: Must be the name of an existing DB snapshot in the <code>available</code> state.</p>
   * @public
   */
  DBSnapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.</p>
   * @public
   */
  DBSnapshot?: DBSnapshot | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteDBSubnetGroupMessage {
  /**
   * <p>The name of the database subnet group to delete.</p>
   *          <note>
   *             <p>You can't delete the default subnet group.</p>
   *          </note>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName: string | undefined;
}

/**
 * <p>The DB subnet isn't in the <i>available</i> state.</p>
 * @public
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
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to delete.</p>
   * @public
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>This error can occur if someone else is modifying a subscription. You should retry the action.</p>
 * @public
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
 * @public
 */
export interface DeleteGlobalClusterMessage {
  /**
   * <p>The cluster identifier of the global database cluster being deleted.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;
}

/**
 * @internal
 */
export const CopyDBClusterSnapshotMessageFilterSensitiveLog = (obj: CopyDBClusterSnapshotMessage): any => ({
  ...obj,
  ...(obj.PreSignedUrl && { PreSignedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CopyDBSnapshotMessageFilterSensitiveLog = (obj: CopyDBSnapshotMessage): any => ({
  ...obj,
  ...(obj.PreSignedUrl && { PreSignedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OptionSettingFilterSensitiveLog = (obj: OptionSetting): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OptionFilterSensitiveLog = (obj: Option): any => ({
  ...obj,
  ...(obj.OptionSettings && {
    OptionSettings: obj.OptionSettings.map((item) => OptionSettingFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const OptionGroupFilterSensitiveLog = (obj: OptionGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyOptionGroupResultFilterSensitiveLog = (obj: CopyOptionGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDBClusterMessageFilterSensitiveLog = (obj: CreateDBClusterMessage): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
  ...(obj.PreSignedUrl && { PreSignedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ClusterPendingModifiedValuesFilterSensitiveLog = (obj: ClusterPendingModifiedValues): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DBClusterFilterSensitiveLog = (obj: DBCluster): any => ({
  ...obj,
  ...(obj.PendingModifiedValues && {
    PendingModifiedValues: ClusterPendingModifiedValuesFilterSensitiveLog(obj.PendingModifiedValues),
  }),
});

/**
 * @internal
 */
export const CreateDBClusterResultFilterSensitiveLog = (obj: CreateDBClusterResult): any => ({
  ...obj,
  ...(obj.DBCluster && { DBCluster: DBClusterFilterSensitiveLog(obj.DBCluster) }),
});

/**
 * @internal
 */
export const CreateDBInstanceMessageFilterSensitiveLog = (obj: CreateDBInstanceMessage): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
  ...(obj.TdeCredentialPassword && { TdeCredentialPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PendingModifiedValuesFilterSensitiveLog = (obj: PendingModifiedValues): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DBInstanceFilterSensitiveLog = (obj: DBInstance): any => ({
  ...obj,
  ...(obj.PendingModifiedValues && {
    PendingModifiedValues: PendingModifiedValuesFilterSensitiveLog(obj.PendingModifiedValues),
  }),
});

/**
 * @internal
 */
export const CreateDBInstanceResultFilterSensitiveLog = (obj: CreateDBInstanceResult): any => ({
  ...obj,
  ...(obj.DBInstance && { DBInstance: DBInstanceFilterSensitiveLog(obj.DBInstance) }),
});

/**
 * @internal
 */
export const CreateDBInstanceReadReplicaMessageFilterSensitiveLog = (obj: CreateDBInstanceReadReplicaMessage): any => ({
  ...obj,
  ...(obj.PreSignedUrl && { PreSignedUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDBInstanceReadReplicaResultFilterSensitiveLog = (obj: CreateDBInstanceReadReplicaResult): any => ({
  ...obj,
  ...(obj.DBInstance && { DBInstance: DBInstanceFilterSensitiveLog(obj.DBInstance) }),
});

/**
 * @internal
 */
export const CreateOptionGroupResultFilterSensitiveLog = (obj: CreateOptionGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTenantDatabaseMessageFilterSensitiveLog = (obj: CreateTenantDatabaseMessage): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TenantDatabasePendingModifiedValuesFilterSensitiveLog = (
  obj: TenantDatabasePendingModifiedValues
): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TenantDatabaseFilterSensitiveLog = (obj: TenantDatabase): any => ({
  ...obj,
  ...(obj.PendingModifiedValues && {
    PendingModifiedValues: TenantDatabasePendingModifiedValuesFilterSensitiveLog(obj.PendingModifiedValues),
  }),
});

/**
 * @internal
 */
export const CreateTenantDatabaseResultFilterSensitiveLog = (obj: CreateTenantDatabaseResult): any => ({
  ...obj,
  ...(obj.TenantDatabase && { TenantDatabase: TenantDatabaseFilterSensitiveLog(obj.TenantDatabase) }),
});

/**
 * @internal
 */
export const DeleteDBClusterResultFilterSensitiveLog = (obj: DeleteDBClusterResult): any => ({
  ...obj,
  ...(obj.DBCluster && { DBCluster: DBClusterFilterSensitiveLog(obj.DBCluster) }),
});

/**
 * @internal
 */
export const DeleteDBInstanceResultFilterSensitiveLog = (obj: DeleteDBInstanceResult): any => ({
  ...obj,
  ...(obj.DBInstance && { DBInstance: DBInstanceFilterSensitiveLog(obj.DBInstance) }),
});
