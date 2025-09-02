// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { NeptuneServiceException as __BaseException } from "./NeptuneServiceException";

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
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster,
   *       for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the Neptune DB cluster that the IAM role is to be associated with.
   *       For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
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
 * <p>The DB cluster is not in a valid state.</p>
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
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * <p>The name of the event notification subscription you want to add a source identifier
   *       to.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The identifier of the event source to be added.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be
   *           supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be
   *           supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must
   *           be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be
   *           supplied.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
 * @public
 */
export interface EventSubscription {
  /**
   * <p>The Amazon customer account associated with the event notification subscription.</p>
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * <p>The event notification subscription Id.</p>
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * <p>The topic ARN of the event notification subscription.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The status of the event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: creating | modifying | deleting | active | no-permission |
   *       topic-not-exist</p>
   *          <p>The status "no-permission" indicates that Neptune no longer has permission to post to the
   *       SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the
   *       subscription was created.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The time the event notification subscription was created.</p>
   * @public
   */
  SubscriptionCreationTime?: string | undefined;

  /**
   * <p>The source type for the event notification subscription.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of source IDs for the event notification subscription.</p>
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * <p>A list of event categories for the event notification subscription.</p>
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * <p>A Boolean value indicating if the subscription is enabled. True indicates the subscription
   *       is enabled.</p>
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
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>The source could not be found.</p>
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
 * <p>The designated subscription could not be found.</p>
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
 * <p>Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode
   *       characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>.
   *       The string can only contain the set of Unicode letters, digits, white-space,
   *       '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode
   *       characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>.
   *       The string can only contain the set of Unicode letters, digits, white-space,
   *       '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource
   *       Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon Neptune resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
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
 * <p>
 *             <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
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
 * @public
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies
   *       to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>
   *          </p>
   * @public
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in
   *       request of type <code>immediate</code> can't be undone.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during the next
   *           maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in
   *           requests.</p>
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
   * <p>The type of pending maintenance action that is available for the resource.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>The date of the maintenance window when the action is applied. The maintenance action is
   *       applied to the resource during its first maintenance window after this date. If this date is
   *       specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   * @public
   */
  AutoAppliedAfterDate?: Date | undefined;

  /**
   * <p>The date when the maintenance action is automatically applied. The maintenance action is
   *       applied to the resource on this date regardless of the maintenance window for the resource. If
   *       this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>
   * @public
   */
  ForcedApplyDate?: Date | undefined;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * <p>The effective date when the pending maintenance action is applied to the resource. This
   *       date takes into account opt-in requests received from the <a>ApplyPendingMaintenanceAction</a> API, the <code>AutoAppliedAfterDate</code>, and the
   *       <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been received
   *       and nothing has been specified as <code>AutoAppliedAfterDate</code> or
   *       <code>ForcedApplyDate</code>.</p>
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
   * <p>A list that provides details about the pending maintenance actions for the
   *       resource.</p>
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
 * @public
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group.
   *       For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB cluster parameter group is in the same Amazon Region as the copy,
   *           specify a valid DB parameter group identifier, for example
   *           <code>my-db-cluster-param-group</code>, or a valid ARN.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB parameter group is in a different Amazon Region than the copy, specify a
   *           valid DB cluster parameter group ARN, for example
   *           <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p>
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
   *                <p>Cannot be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
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
   * <p>The tags to be assigned to the copied DB cluster parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
 * @public
 */
export interface DBClusterParameterGroup {
  /**
   * <p>Provides the name of the DB cluster parameter group.</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>Provides the name of the DB parameter group family that this DB cluster parameter group is
   *       compatible with.</p>
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
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
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
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
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
 * <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
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
 * @public
 */
export interface CopyDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot to copy. This parameter is not
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid system snapshot in the "available" state.</p>
   *             </li>
   *             <li>
   *                <p>Specify a valid DB snapshot identifier.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot1</code>
   *          </p>
   * @public
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the new DB cluster snapshot to create from the source DB cluster
   *       snapshot. This parameter is not case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot2</code>
   *          </p>
   * @public
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The Amazon Amazon KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon
   *       Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>
   *          <p>If you copy an encrypted DB cluster snapshot from your Amazon account, you can specify a
   *       value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you
   *       don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is
   *       encrypted with the same KMS key as the source DB cluster snapshot.</p>
   *          <p>If you copy an encrypted DB cluster snapshot that is shared from another Amazon account, then
   *       you must specify a value for <code>KmsKeyId</code>.</p>
   *          <p> KMS encryption keys are specific to the Amazon Region that they are created in, and you
   *       can't use encryption keys from one Amazon Region in another Amazon Region.</p>
   *          <p>You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to
   *       copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an
   *       error is returned.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Not currently supported.</p>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>True to copy all tags from the source DB cluster snapshot to the target DB cluster
   *       snapshot, and otherwise false. The default is false.</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>The tags to assign to the new DB cluster snapshot copy.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
 * @public
 */
export interface DBClusterSnapshot {
  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the DB cluster snapshot can
   *       be restored in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>Specifies the identifier for a DB cluster snapshot. Must match the identifier
   *       of an existing snapshot.</p>
   *          <p>After you restore a DB cluster using a <code>DBClusterSnapshotIdentifier</code>,
   *       you must specify the same <code>DBClusterSnapshotIdentifier</code> for any future
   *       updates to the DB cluster. When you specify this property for an update, the DB
   *       cluster is not restored from the snapshot again, and the data in the database is not
   *       changed.</p>
   *          <p>However, if you don't specify the <code>DBClusterSnapshotIdentifier</code>, an empty
   *       DB cluster is created, and the original DB cluster is deleted. If you specify a
   *       property that is different from the previous snapshot restore property, the DB
   *       cluster is restored from the snapshot specified by the <code>DBClusterSnapshotIdentifier</code>,
   *       and the original DB cluster is deleted.</p>
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was
   *       created from.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
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
   * <p>Specifies the status of this DB cluster snapshot.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Specifies the port that the DB cluster was listening on at the time of the
   *       snapshot.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Provides the VPC ID associated with the DB cluster snapshot.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *       (UTC).</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>Provides the version of the database engine for this DB cluster snapshot.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Provides the license model information for this DB cluster snapshot.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>Provides the type of the DB cluster snapshot.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * <p>Specifies whether the DB cluster snapshot is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the Amazon KMS key identifier for the encrypted DB
   *       cluster snapshot.</p>
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
   *       Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
   * @public
   */
  SourceDBClusterSnapshotArn?: string | undefined;

  /**
   * <p>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts
   *       is enabled, and otherwise false.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>The storage type associated with the DB cluster snapshot.</p>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterSnapshotResult {
  /**
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>User already has a DB cluster snapshot with the given identifier.</p>
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
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
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
 * <p>The supplied value is not a valid DB cluster snapshot state.</p>
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
 * <p>Error accessing KMS key.</p>
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
 * <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
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
 * @public
 */
export interface CopyDBParameterGroupMessage {
  /**
   * <p>The identifier or ARN for the source DB parameter group. For information about creating
   *       an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid DB parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Must specify a valid DB parameter group identifier, for example
   *         <code>my-db-param-group</code>, or a valid ARN.</p>
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
   *                <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
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
   * <p>The tags to be assigned to the copied DB parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
 * @public
 */
export interface DBParameterGroup {
  /**
   * <p>Provides the name of the DB parameter group.</p>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>Provides the name of the DB parameter group family that this DB parameter group is
   *       compatible with.</p>
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
   * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
   * @public
   */
  DBParameterGroup?: DBParameterGroup | undefined;
}

/**
 * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
 *       <i>Amazon Neptune User Guide</i>.</p>
 * @public
 */
export interface ServerlessV2ScalingConfiguration {
  /**
   * <p>The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
   *       You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.</p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
   *       You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.</p>
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterMessage {
  /**
   * <p>A list of EC2 Availability Zones that instances in the DB cluster can be created
   *       in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum
   *       value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a
   *       name, Amazon Neptune will not create a database in the DB cluster you are creating.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p> The name of the DB cluster parameter group to associate with this DB cluster. If this
   *       argument is omitted, the default is used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *          <p>Valid Values: <code>neptune</code>
   *          </p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use for the new DB cluster.</p>
   *          <p>Example: <code>1.2.1.0</code>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are
   *       enabled using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-maintaining.html#manage-console-maintaining-window">Neptune
   *       Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i>
   *          </p>
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
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated
   *       Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-maintaining.html#manage-console-maintaining-window">Neptune
   *       Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i>
   *          </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster
   *       is created as a Read Replica.</p>
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * <p>The tags to assign to the new DB cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon KMS key identifier for an encrypted DB cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If
   *       you are creating a DB cluster with the same Amazon account that owns the KMS encryption key used
   *       to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the
   *       KMS encryption key.</p>
   *          <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then
   *           Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon
   *           Neptune will use your default encryption key.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>StorageEncrypted</code> parameter is true and
   *           <code>ReplicationSourceIdentifier</code> is not specified, then Amazon Neptune will use
   *           your default encryption key.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a
   *       different default encryption key for each Amazon Region.</p>
   *          <p>If you create a Read Replica of an encrypted DB cluster in another Amazon Region, you must
   *       set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination Amazon Region. This
   *       key is used to encrypt the Read Replica in that Amazon Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>If set to <code>true</code>, enables Amazon Identity and Access Management
   *       (IAM) authentication for the entire DB cluster (this cannot be set at an
   *       instance level).</p>
   *          <p>Default: <code>false</code>.</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>A list of the log types that this DB cluster should export to CloudWatch Logs.
   *       Valid log types are: <code>audit</code> (to publish audit logs) and
   *       <code>slowquery</code> (to publish slow-query logs). See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html">Publishing Neptune logs
   *       to Amazon CloudWatch logs</a>.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>The ID of the Neptune global database to which this new DB cluster
   *       should be added.</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>The storage type for the new DB cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>standard</code>
   *                   </b>   –
   *         ( <i>the default</i> ) Configures cost-effective database storage for applications
   *         with moderate to small I/O usage. When set to <code>standard</code>, the storage type
   *         is not returned in the response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>iopt1</code>
   *                   </b>   –
   *           Enables <a href="https://docs.aws.amazon.com/neptune/latest/userguide/storage-types.html#provisioned-iops-storage">I/O-Optimized storage</a>
   *           that's designed to meet the needs of I/O-intensive graph workloads that
   *           require predictable pricing with low I/O latency and consistent I/O throughput.</p>
   *                <p>Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * <p>Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB
 *       cluster.</p>
 * @public
 */
export interface DBClusterRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *       cluster.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The Status
   *       property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be
   *           used to access other Amazon services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB
   *           cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB
   *           cluster is unable to assume the IAM role in order to access other Amazon services on your
   *           behalf.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The name of the feature associated with the Amazon Identity and Access Management (IAM) role.
   *       For the list of supported feature names, see <a>DescribeDBEngineVersions</a>.
   *     </p>
   * @public
   */
  FeatureName?: string | undefined;
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
   * <p>Value that is <code>true</code> if the cluster member is the primary instance for the DB
   *       cluster and <code>false</code> otherwise.</p>
   * @public
   */
  IsClusterWriter?: boolean | undefined;

  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB
   *       cluster.</p>
   * @public
   */
  DBClusterParameterGroupStatus?: string | undefined;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.</p>
   * @public
   */
  PromotionTier?: number | undefined;
}

/**
 * <p>Not supported by Neptune.</p>
 * @public
 */
export interface DBClusterOptionGroupStatus {
  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  DBClusterOptionGroupName?: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>A list of the log types whose configuration is still pending. In other
 *       words, these log types are in the process of being activated or deactivated.</p>
 *          <p>Valid log types are: <code>audit</code> (to publish audit logs) and
 *       <code>slowquery</code> (to publish slow-query logs). See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html">Publishing Neptune logs
 *       to Amazon CloudWatch logs</a>.</p>
 * @public
 */
export interface PendingCloudwatchLogsExports {
  /**
   * <p>Log types that are in the process of being deactivated. After they are
   *       deactivated, these log types aren't exported to CloudWatch Logs.</p>
   * @public
   */
  LogTypesToEnable?: string[] | undefined;

  /**
   * <p>Log types that are in the process of being enabled. After they are
   *       enabled, these log types are exported to CloudWatch Logs.</p>
   * @public
   */
  LogTypesToDisable?: string[] | undefined;
}

/**
 * <p>This data type is used as a response element in the <code>ModifyDBCluster</code> operation and
 *       contains changes that will be applied during the next maintenance window.</p>
 * @public
 */
export interface ClusterPendingModifiedValues {
  /**
   * <p>This <code>PendingCloudwatchLogsExports</code> structure specifies
   *       pending changes to which CloudWatch logs are enabled and which are disabled.</p>
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;

  /**
   * <p>The DBClusterIdentifier value for the DB cluster.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>A value that indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
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
   * <p>The pending change in storage type for the DB cluster.   Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>standard</code>
   *                   </b>   –
   *         ( <i>the default</i> ) Configures cost-effective database storage for applications
   *         with moderate to small I/O usage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>iopt1</code>
   *                   </b>   –
   *           Enables <a href="https://docs.aws.amazon.com/neptune/latest/userguide/storage-types.html#provisioned-iops-storage">I/O-Optimized storage</a>
   *           that's designed to meet the needs of I/O-intensive graph workloads that
   *           require predictable pricing with low I/O latency and consistent I/O throughput.</p>
   *                <p>Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The allocated storage size in gibibytes (GiB) for database engines. For Neptune,
   *       <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size isn't fixed, but
   *         instead automatically adjusts as needed.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The Provisioned IOPS (I/O operations per second) value. This setting is only for Multi-AZ DB clusters.</p>
   * @public
   */
  Iops?: number | undefined;
}

/**
 * <p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
 *       <i>Amazon Neptune User Guide</i>.</p>
 * @public
 */
export interface ServerlessV2ScalingConfigurationInfo {
  /**
   * <p>The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
   *       You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.</p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
   *       You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.</p>
   * @public
   */
  MaxCapacity?: number | undefined;
}

/**
 * <p>This data type is used as a response element for queries on VPC security group
 *       membership.</p>
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The name of the VPC security group.</p>
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * <p>The status of the VPC security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Contains the details of an Amazon Neptune DB cluster.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
 * @public
 */
export interface DBCluster {
  /**
   * <p>
   *             <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size is
   *       not fixed, but instead automatically adjusts as needed.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the DB cluster can be
   *       created in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>Contains the name of the initial database of this DB cluster that was provided at create
   *       time, if one was specified when the DB cluster was created. This same name is returned for the
   *       life of the DB cluster.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that
   *       identifies a DB cluster.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   * @public
   */
  DBClusterParameterGroup?: string | undefined;

  /**
   * <p>Specifies information on the subnet group associated with the DB cluster, including the
   *       name, description, and subnets in the subnet group.</p>
   * @public
   */
  DBSubnetGroup?: string | undefined;

  /**
   * <p>Specifies the current state of this DB cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Specifies the progress of the operation as a percentage.</p>
   * @public
   */
  PercentProgress?: string | undefined;

  /**
   * <p>Specifies the earliest time to which a database can be restored with point-in-time
   *       restore.</p>
   * @public
   */
  EarliestRestorableTime?: Date | undefined;

  /**
   * <p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances
   *       connections across the Read Replicas that are available in a DB cluster. As clients request
   *       new connections to the reader endpoint, Neptune distributes the connection requests among the
   *       Read Replicas in the DB cluster. This functionality can help balance your read workload across
   *       multiple Read Replicas in your DB cluster.</p>
   *          <p>If a failover occurs, and the Read Replica that you are connected to is promoted to be the
   *       primary instance, your connection is dropped. To continue sending your read workload to other
   *       Read Replicas in the cluster, you can then reconnect to the reader endpoint.</p>
   * @public
   */
  ReaderEndpoint?: string | undefined;

  /**
   * <p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Indicates the database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *       restore.</p>
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[] | undefined;

  /**
   * <p>Specifies the daily time range during which automated backups are created if automated
   *       backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB
   *       cluster.</p>
   * @public
   */
  ReadReplicaIdentifiers?: string[] | undefined;

  /**
   * <p>Provides the list of instances that make up the DB cluster.</p>
   * @public
   */
  DBClusterMembers?: DBClusterMember[] | undefined;

  /**
   * <p>Provides a list of VPC security groups that the DB cluster belongs to.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the Amazon KMS key identifier for the
   *       encrypted DB cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Region-unique, immutable identifier for the DB cluster. This identifier is found
   *       in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB cluster is accessed.</p>
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * <p>Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated
   *       with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the
   *       DB cluster to access other Amazon services on your behalf.</p>
   * @public
   */
  AssociatedRoles?: DBClusterRole[] | undefined;

  /**
   * <p>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts
   *       is enabled, and otherwise false.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   * @public
   */
  CloneGroupId?: string | undefined;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *       (UTC).</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>A list of the log types that this DB cluster is configured to export to CloudWatch Logs.
   *       Valid log types are: <code>audit</code> (to publish audit logs to CloudWatch) and
   *       slowquery (to publish slow-query logs to CloudWatch). See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html">Publishing Neptune logs
   *       to Amazon CloudWatch logs</a>.</p>
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>This data type is used as a response element in the <code>ModifyDBCluster</code> operation and
   *       contains changes that will be applied during the next maintenance window.</p>
   * @public
   */
  PendingModifiedValues?: ClusterPendingModifiedValues | undefined;

  /**
   * <p>Indicates whether or not the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>If set to <code>true</code>, the DB cluster can be cloned across accounts.</p>
   * @public
   */
  CrossAccountClone?: boolean | undefined;

  /**
   * <p>Time at which the DB cluster will be automatically restarted.</p>
   * @public
   */
  AutomaticRestartTime?: Date | undefined;

  /**
   * <p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo | undefined;

  /**
   * <p>Contains a user-supplied global database cluster identifier.
   *       This identifier is the unique key that identifies a global database.</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>The next time you can modify the DB cluster to use the <code>iopt1</code> storage type.</p>
   * @public
   */
  IOOptimizedNextAllowedModificationTime?: Date | undefined;

  /**
   * <p>The storage type used by the DB cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>standard</code>
   *                   </b>   –
   *         ( <i>the default</i> ) Provides cost-effective database storage for applications
   *         with moderate to small I/O usage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>iopt1</code>
   *                   </b>   –
   *           Enables <a href="https://docs.aws.amazon.com/neptune/latest/userguide/storage-types.html#provisioned-iops-storage">I/O-Optimized storage</a>
   *           that's designed to meet the needs of I/O-intensive graph workloads that
   *           require predictable pricing with low I/O latency and consistent I/O throughput.</p>
   *                <p>Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p>User already has a DB cluster with the given identifier.</p>
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
 * <p>
 *             <i>DBClusterParameterGroupName</i> does not refer to an
 *       existing DB Cluster parameter group.</p>
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
 * <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
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
 * <p>Subnets in the DB subnet group should cover at least two Availability
 *       Zones unless there is only one Availability Zone.</p>
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
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
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
 * <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster. </p>
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
 * <p>There is insufficient storage available for the current action. You may
 *        be able to resolve this error by updating your subnet group to use different
 *        Availability Zones that have more storage available.</p>
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
 * <p>The specified DB instance is not in the <i>available</i> state.</p>
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
 * <p>The DB subnet group cannot be deleted because it is in use.</p>
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
 * <p>The global cluster is in an invalid state and can't perform the requested operation. </p>
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
 * <p>The requested subnet is invalid, or multiple subnets were requested that are
 *       not all in a common VPC.</p>
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
 * <p>DB subnet group does not cover all Availability Zones after it is created
 *       because users' change.</p>
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
 * <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
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
 * @public
 */
export interface CreateDBClusterEndpointMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier to use for the new endpoint. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
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
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   * @public
   */
  ExcludedMembers?: string[] | undefined;

  /**
   * <p>The tags to be assigned to the Amazon Neptune resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster.
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
 *          <p>For the data structure that represents Amazon Neptune DB instance endpoints,
 *       see <code>Endpoint</code>.</p>
 * @public
 */
export interface CreateDBClusterEndpointOutput {
  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
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
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
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
   *       <code>WRITER</code>, <code>ANY</code>.</p>
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
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
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
 * <p>The specified custom endpoint cannot be created because it already exists.</p>
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
 * @public
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated
   *       with one and only one DB cluster parameter group family, and can be applied only to a DB
   *       cluster running a database engine and engine version compatible with that DB cluster parameter
   *       group family.</p>
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the new DB cluster parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase
   *       string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1-snapshot1</code>
   *          </p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB cluster to create a snapshot for. This parameter is not
   *       case-sensitive.</p>
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
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p>
 *          <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>
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
export interface CreateDBInstanceMessage {
  /**
   * <p>Not supported.</p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>.
   *       Not all DB instance classes are available in all Amazon Regions.</p>
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.</p>
   *          <p>Valid Values: <code>neptune</code>
   *          </p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *          <p>Default: The default DB security group for the database engine.</p>
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB
   *       cluster. For more information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p> The EC2 Availability Zone that the DB instance is created in</p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region.</p>
   *          <p> Example: <code>us-east-1d</code>
   *          </p>
   *          <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is
   *       set to <code>true</code>. The specified Availability Zone must be in the same Amazon Region as
   *       the current endpoint.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   *          <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The time range each week during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region, occurring on a random day of the week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance. If this argument is
   *       omitted, the default DBParameterGroup for the specified engine is used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>The number of days for which automated backups are
   *       retained.</p>
   *          <p>Not applicable. The retention period for automated backups is managed by the DB cluster.
   *       For more information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35</p>
   *             </li>
   *             <li>
   *                <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p> The daily time range during which automated backups are created.</p>
   *          <p>Not applicable. The daily time range for creating automated backups is managed by the DB
   *       cluster. For more information, see <a>CreateDBCluster</a>.</p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   *          <p>Type: Integer</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone
   *       parameter if the MultiAZ parameter is set to true.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The version number of the database engine to use. Currently, setting this
   *       parameter has no effect.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Indicates that minor engine upgrades are applied automatically to the DB instance during
   *       the maintenance window.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>License model information for this DB instance.</p>
   *          <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *       <code>general-public-license</code>
   *          </p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially
   *       allocated for the DB instance.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>Indicates whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private
   *       cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within
   *       the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is
   *       ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned
   *       to the DB cluster doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a
   *       private IP address.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The tags to assign to the new instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The identifier of the DB cluster that the instance will belong to.</p>
   *          <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p>
   *          <p>Type: String</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   *          <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more
   *       information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: false</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon KMS key identifier for an encrypted DB instance.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If
   *       you are creating a DB instance with the same Amazon account that owns the KMS encryption key used
   *       to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the
   *       KM encryption key.</p>
   *          <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information,
   *       see <a>CreateDBCluster</a>.</p>
   *          <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for
   *       the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key.
   *       Amazon KMS creates the default encryption key for your Amazon account. Your Amazon account has a
   *       different default encryption key for each Amazon Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specify the Active Directory Domain to create the instance in.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise
   *       false. The default is false.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default
   *       is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set
   *       <code>MonitoringInterval</code> to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to
   *       Amazon CloudWatch Logs. For example,
   *       <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a
   *       <code>MonitoringRoleArn</code> value.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory
   *       Service.</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>A value that specifies the order in which an Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.
   *       </p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>The time zone of the DB instance.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>Not supported by Neptune (ignored).</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   *          <p>DB instances in a DB cluster can be deleted even when deletion
   *       protection is enabled in their parent DB cluster.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;
}

/**
 * <p>The status of the DB parameter group.</p>
 *          <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateDBInstance</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteDBInstance</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ModifyDBInstance</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RebootDBInstance</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DBParameterGroupStatus {
  /**
   * <p>The name of the DP parameter group.</p>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>The status of parameter updates.</p>
   * @public
   */
  ParameterApplyStatus?: string | undefined;
}

/**
 * <p>Specifies membership in a designated DB security group.</p>
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
 * <p>Specifies an Availability Zone.</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the availability zone.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Specifies a subnet.</p>
 *          <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
 * @public
 */
export interface Subnet {
  /**
   * <p>Specifies the identifier of the subnet.</p>
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * <p>Specifies the EC2 Availability Zone that the subnet is in.</p>
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * <p>Specifies the status of the subnet.</p>
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
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
   * <p> Contains a list of <a>Subnet</a> elements.</p>
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   * @public
   */
  DBSubnetGroupArn?: string | undefined;
}

/**
 * <p>An Active Directory Domain membership record associated with a DB instance.</p>
 * @public
 */
export interface DomainMembership {
  /**
   * <p>The identifier of the Active Directory Domain.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The status of the DB instance's Active Directory Domain membership, such as joined,
   *       pending-join, failed etc).</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The fully qualified domain name of the Active Directory Domain.</p>
   * @public
   */
  FQDN?: string | undefined;

  /**
   * <p>The name of the IAM role to be used when making API calls to the Directory Service.</p>
   * @public
   */
  IAMRoleName?: string | undefined;
}

/**
 * <p>Specifies a connection endpoint.</p>
 *          <p>For the data structure that represents Amazon Neptune DB cluster endpoints,
 *       see <code>DBClusterEndpoint</code>.</p>
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
 * <p>Not supported by Neptune.</p>
 * @public
 */
export interface OptionGroupMembership {
  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>This data type is used as a response element in the <a>ModifyDBInstance</a>
 *       action.</p>
 * @public
 */
export interface PendingModifiedValues {
  /**
   * <p> Contains the new <code>DBInstanceClass</code> for the DB instance that will be applied or
   *       is currently being applied.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p> Contains the new <code>AllocatedStorage</code> size for the DB instance that will be
   *       applied or is currently being applied.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>Specifies the pending port for the DB instance.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>Indicates the database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or is
   *       currently being applied.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the DB instance that will be
   *       applied or is currently being applied.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Specifies the identifier of the CA certificate for the DB instance.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The new DB subnet group for the DB instance.</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>This <code>PendingCloudwatchLogsExports</code> structure specifies
   *       pending changes to which CloudWatch logs are enabled and which are disabled.</p>
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;
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
   * <p>Boolean value that is true if the instance is operating normally, or false if the instance
   *       is in an error state.</p>
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * <p>Status of the DB instance. For a StatusType of read replica, the values can be
   *       replicating, error, stopped, or terminated.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Details of the error if there is an error for the instance. If the instance is not in an
   *       error state, this value is blank.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains the details of an Amazon Neptune DB instance.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
 * @public
 */
export interface DBInstance {
  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *       identifies a DB instance.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>Provides the name of the database engine to be used for this DB instance.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Specifies the current state of this database.</p>
   * @public
   */
  DBInstanceStatus?: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The database name.</p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>Specifies the connection endpoint.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>Provides the date and time the DB instance was created.</p>
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * <p> Specifies the daily time range during which automated backups are created if automated
   *       backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p> Provides List of DB security group elements containing only
   *       <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.</p>
   * @public
   */
  DBSecurityGroups?: DBSecurityGroupMembership[] | undefined;

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>Provides the list of DB parameter groups applied to this DB instance.</p>
   * @public
   */
  DBParameterGroups?: DBParameterGroupStatus[] | undefined;

  /**
   * <p>Specifies the name of the Availability Zone the DB instance is located in.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Specifies information on the subnet group associated with the DB instance, including the
   *       name, description, and subnets in the subnet group.</p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is only included when
   *       changes are pending. Specific changes are identified by subelements.</p>
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *       restore.</p>
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>Indicates the database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Indicates that minor version patches are applied automatically.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Contains the identifier of the source DB instance if this DB instance is a Read
   *       Replica.</p>
   * @public
   */
  ReadReplicaSourceDBInstanceIdentifier?: string | undefined;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB
   *       instance.</p>
   * @public
   */
  ReadReplicaDBInstanceIdentifiers?: string[] | undefined;

  /**
   * <p>Contains one or more identifiers of DB clusters that are Read Replicas of this DB
   *       instance.</p>
   * @public
   */
  ReadReplicaDBClusterIdentifiers?: string[] | undefined;

  /**
   * <p>License model information for this DB instance.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  OptionGroupMemberships?: OptionGroupMembership[] | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with
   *       multi-AZ support.</p>
   * @public
   */
  SecondaryAvailabilityZone?: string | undefined;

  /**
   * <p>Indicates whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private
   *       cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within
   *       the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is
   *       ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned
   *       to the DB cluster doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a
   *       private IP address.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The status of a Read Replica. If the instance is not a Read Replica, this is blank.</p>
   * @public
   */
  StatusInfos?: DBInstanceStatusInfo[] | undefined;

  /**
   * <p>Specifies the storage type associated with the DB instance.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *       encryption.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *       cluster, this can be a different port than the DB cluster port.</p>
   * @public
   */
  DbInstancePort?: number | undefined;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *       the DB instance is a member of.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p> Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Region-unique, immutable identifier for the DB instance. This identifier is found
   *       in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB instance is accessed.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>Not supported</p>
   * @public
   */
  DomainMemberships?: DomainMembership[] | undefined;

  /**
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB
   *       instance.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance.</p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the
   *       Enhanced Monitoring metrics data for the DB instance.</p>
   * @public
   */
  EnhancedMonitoringResourceArn?: string | undefined;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to
   *       Amazon CloudWatch Logs.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.
   *    </p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   * @public
   */
  DBInstanceArn?: string | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>True if Amazon Identity and Access Management (IAM) authentication is enabled, and otherwise
   *       false.</p>
   * @public
   */
  IAMDatabaseAuthenticationEnabled?: boolean | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch
   *       Logs.</p>
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>Indicates whether or not the DB instance has deletion protection enabled.
   *       The instance can't be deleted when deletion protection is enabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>User already has a DB instance with the given identifier.</p>
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
 * <p>
 *             <i>DBSecurityGroupName</i> does not refer
 *       to an existing DB security group.</p>
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
 * <p>
 *             <i>Domain</i> does not refer to an existing Active Directory Domain.</p>
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
 * <p>Request would result in user exceeding the allowed number of DB instances.</p>
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
 * <p>Specified DB instance class is not available in the specified Availability Zone.</p>
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
 * <p>The designated option group could not be found.</p>
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
 * <p>
 *             <i>StorageType</i> specified cannot be associated with the DB Instance.</p>
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
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>The DB parameter group family name. A DB parameter group can be associated with one and
   *       only one DB parameter group family, and can be applied only to a DB instance running a
   *       database engine and engine version compatible with that DB parameter group family.</p>
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB parameter group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the new DB parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBParameterGroupResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
   * @public
   */
  DBParameterGroup?: DBParameterGroup | undefined;
}

/**
 * @public
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces,
   *       or hyphens. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
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
   * <p>The tags to be assigned to the new DB subnet group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSubnetGroupResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * <p>
 *             <i>DBSubnetGroupName</i> is already used by an existing DB subnet group.</p>
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
 * <p>Request would result in user exceeding the allowed number of DB subnet groups.</p>
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
 * <p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>
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
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is
   *       created by Amazon SNS when you create a topic and subscribe to it.</p>
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified
   *       of events generated by a DB instance, you would set this parameter to db-instance. if this
   *       value is not specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> |
   *       <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> |
   *       <code>db-cluster-snapshot</code>
   *          </p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p> A list of event categories for a SourceType that you want to subscribe to. You can see a
   *       list of the categories for a given SourceType by using the
   *       <b>DescribeEventCategories</b> action.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>The list of identifiers of the event sources for which events are returned. If not
   *       specified, then all sources are included in the response. An identifier must begin with a
   *       letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or
   *       contain two consecutive hyphens.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If SourceIds are supplied, SourceType must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be
   *           supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be
   *           supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must
   *           be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be
   *           supplied.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *       subscription, set to <b>false</b> to create the subscription but not
   *       active it.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The tags to be applied to the new event subscription.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>You have exceeded the number of events you can subscribe to.</p>
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
 * <p>The SNS topic is invalid.</p>
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
 * <p>There is no SNS authorization.</p>
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
 * <p>The ARN of the SNS topic could not be found.</p>
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
 * <p>This subscription already exists.</p>
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
 * <p>The designated subscription category could not be found.</p>
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
   * <p>The cluster identifier of the new global database cluster.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>(<i>Optional</i>) The Amazon Resource Name (ARN) of
   *       an existing Neptune DB cluster to use as the primary cluster of the new
   *       global database.</p>
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * <p>The name of the database engine to be used in the global database.</p>
   *          <p>Valid values: <code>neptune</code>
   *          </p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The Neptune engine version to be used by the global database.</p>
   *          <p>Valid values: <code>1.2.0.0</code> or above.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The deletion protection setting for the new global database.
   *       The global database can't be deleted when deletion protection is
   *       enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The storage encryption setting for the new global database
   *       cluster.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;
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
 *       global cluster (Neptune global database). This data type is empty unless a switchover
 *       or failover operation is scheduled or is in progress on the Neptune global database.</p>
 * @public
 */
export interface FailoverState {
  /**
   * <p>The current status of the global cluster. Possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>pending  The service received a request to switch over or fail over the global cluster. The
   *           global cluster's primary DB cluster and the specified secondary DB cluster are being verified before the operation
   *           starts.</p>
   *             </li>
   *             <li>
   *                <p>failing-over  Neptune is promoting the chosen secondary Neptune DB cluster to become the new primary DB cluster to fail over the global cluster.</p>
   *             </li>
   *             <li>
   *                <p>cancelling  The request to switch over or fail over the global cluster was cancelled and the primary
   *           Neptune DB cluster and the selected secondary Neptune DB cluster are returning to their previous states.</p>
   *             </li>
   *             <li>
   *                <p>switching-over  This status covers the range of Neptune internal operations that take place during the switchover process, such
   *           as demoting the primary Neptune DB cluster, promoting the secondary Neptune DB cluster, and synchronizing replicas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: FailoverStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Neptune DB cluster that is currently being demoted, and which is associated with this
   *       state.</p>
   * @public
   */
  FromDbClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Neptune DB cluster that is currently being promoted, and which is associated
   *       with this state.</p>
   * @public
   */
  ToDbClusterArn?: string | undefined;

  /**
   * <p>Indicates whether the operation is a global switchover or a global failover. If data loss is allowed, then the operation is a global failover.
   *       Otherwise, it's a switchover.</p>
   * @public
   */
  IsDataLossAllowed?: boolean | undefined;
}

/**
 * <p>
 *     A data structure with information about any primary and
 *     secondary clusters associated with an Neptune global database.
 *   </p>
 * @public
 */
export interface GlobalClusterMember {
  /**
   * <p>
   *     The Amazon Resource Name (ARN) for each Neptune cluster.
   *   </p>
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * <p>
   *     The Amazon Resource Name (ARN) for each read-only secondary cluster
   *     associated with the Neptune global database.
   *   </p>
   * @public
   */
  Readers?: string[] | undefined;

  /**
   * <p>
   *     Specifies whether the Neptune cluster is the primary cluster
   *     (that is, has read-write capability) for the Neptune global
   *     database with which it is associated.
   *   </p>
   * @public
   */
  IsWriter?: boolean | undefined;
}

/**
 * <p>Contains the details of an Amazon Neptune global database.</p>
 *          <p>This data type is used as a response element for the
 *       <a>CreateGlobalCluster</a>,
 *       <a>DescribeGlobalClusters</a>,
 *       <a>ModifyGlobalCluster</a>,
 *       <a>DeleteGlobalCluster</a>,
 *       <a>FailoverGlobalCluster</a>, and
 *       <a>RemoveFromGlobalCluster</a> actions.</p>
 * @public
 */
export interface GlobalCluster {
  /**
   * <p>Contains a user-supplied global database cluster identifier. This identifier
   *       is the unique key that identifies a global database.</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>An immutable identifier for the global database that is unique within in all
   *       regions. This identifier is found in CloudTrail log entries whenever the KMS
   *       key for the DB cluster is accessed.</p>
   * @public
   */
  GlobalClusterResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the global database.</p>
   * @public
   */
  GlobalClusterArn?: string | undefined;

  /**
   * <p>Specifies the current state of this global database.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The Neptune database engine used by the global database
   *       (<code>"neptune"</code>).</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The Neptune engine version used by the global database.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The storage encryption setting for the global database.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The deletion protection setting for the global database.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>A list of cluster ARNs and instance ARNs for all the DB clusters
   *         that are part of the global database.</p>
   * @public
   */
  GlobalClusterMembers?: GlobalClusterMember[] | undefined;

  /**
   * <p>A data object containing all properties for the current state of an in-process or pending switchover or failover process for this global cluster (Neptune global database).
   *       This object is empty unless the <code>SwitchoverGlobalCluster</code> or <code>FailoverGlobalCluster</code> operation was called on this global cluster.</p>
   * @public
   */
  FailoverState?: FailoverState | undefined;
}

/**
 * @public
 */
export interface CreateGlobalClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>The <code>GlobalClusterIdentifier</code> already exists. Choose a new global database identifier (unique name) to create a new global database cluster.</p>
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
 * @public
 */
export interface DeleteDBClusterMessage {
  /**
   * <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't
   *       case-sensitive.</p>
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
   * <p> Determines whether a final DB cluster snapshot is created before the DB cluster is
   *       deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If
   *       <code>false</code> is specified, a DB cluster snapshot is created before the DB cluster is
   *       deleted.</p>
   *          <note>
   *             <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if
   *         <code>SkipFinalSnapshot</code> is <code>false</code>.</p>
   *          </note>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * <p> The DB cluster snapshot identifier of the new DB cluster snapshot created when
   *       <code>SkipFinalSnapshot</code> is set to <code>false</code>.</p>
   *          <note>
   *             <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter
   *         to true results in an error.</p>
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
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
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
 * <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster.
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
 *       see <code>Endpoint</code>.</p>
 * @public
 */
export interface DeleteDBClusterEndpointOutput {
  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
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
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
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
   *       <code>WRITER</code>, <code>ANY</code>.</p>
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
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
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
 * <p>The requested operation cannot be performed on the endpoint while the endpoint is in this state.</p>
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
   *                <p>Cannot be associated with any DB clusters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;
}

/**
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting to
 *       delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
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
 * @public
 */
export interface DeleteDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing DB cluster snapshot in the
   *       <code>available</code> state.</p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterSnapshotResult {
  /**
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>
 *             <i>DBSnapshotIdentifier</i> is already used by an existing snapshot.</p>
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
 * @public
 */
export interface DeleteDBInstanceMessage {
  /**
   * <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't
   *       case-sensitive.</p>
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
   * <p> Determines whether a final DB snapshot is created before the DB instance is deleted. If
   *       <code>true</code> is specified, no DBSnapshot is created. If <code>false</code> is specified,
   *       a DB snapshot is created before the DB instance is deleted.</p>
   *          <p>Note that when a DB instance is in a failure state and has a status of 'failed',
   *       'incompatible-restore', or 'incompatible-network', it can only be deleted when the
   *       SkipFinalSnapshot parameter is set to "true".</p>
   *          <p>Specify <code>true</code> when deleting a Read Replica.</p>
   *          <note>
   *             <p>The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is
   *         <code>false</code>.</p>
   *          </note>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * <p> The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to
   *       <code>false</code>.</p>
   *          <note>
   *             <p>Specifying this parameter and also setting the SkipFinalShapshot parameter to true
   *         results in an error.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified when deleting a Read Replica.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FinalDBSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
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
   *                <p>Cannot be associated with any DB instances</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBSubnetGroupMessage {
  /**
   * <p>The name of the database subnet group to delete.</p>
   *          <note>
   *             <p>You can't delete the default subnet group.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName: string | undefined;
}

/**
 * <p>The DB subnet is not in the <i>available</i> state.</p>
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
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the event notification subscription you want to delete.</p>
   * @public
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>The event subscription is in an invalid state.</p>
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
 * @public
 */
export interface DeleteGlobalClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster.
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
 *          <p>For the data structure that represents Amazon Neptune DB instance endpoints,
 *       see <code>Endpoint</code>.</p>
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
   *       stored as a lowercase string.</p>
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
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
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
   *       <code>WRITER</code>, <code>ANY</code>.</p>
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
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
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
 * @public
 */
export interface DBClusterEndpointMessage {
  /**
   * <p> n optional pagination token provided by a previous
   *       <code>DescribeDBClusterEndpoints</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Contains the details of the endpoints associated with the cluster
   *       and matching any filter conditions.</p>
   * @public
   */
  DBClusterEndpoints?: DBClusterEndpoint[] | undefined;
}

/**
 * <p>This type is not currently supported.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterEndpointsMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the endpoint to describe. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * <p>A set of name-value pairs that define which endpoints to include in the output.
   *       The filters are specified as name-value pairs, in the format
   *       <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>.
   *       <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>.
   *       <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>.
   *       <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>.
   *       <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>.
   *     </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *       a pagination token called a marker is included in the response
   *       so you can retrieve the remaining results.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBClusterEndpoints</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBClusterParameterGroupsMessage {
  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of DB cluster parameter groups.</p>
   * @public
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterParameterGroupsMessage {
  /**
   * <p>The name of a specific DB cluster parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplyMethod = {
  immediate: "immediate",
  pending_reboot: "pending-reboot",
} as const;

/**
 * @public
 */
export type ApplyMethod = (typeof ApplyMethod)[keyof typeof ApplyMethod];

/**
 * <p>Specifies a parameter.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>Specifies the name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>Specifies the value of the parameter.</p>
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * <p>Provides a description of the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Indicates the source of the parameter value.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>Specifies the engine specific parameters type.</p>
   * @public
   */
  ApplyType?: string | undefined;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * <p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be
   *       modified. Some parameters have security or operational implications that prevent them from
   *       being changed.</p>
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;

  /**
   * <p>Indicates when to apply parameter updates.</p>
   * @public
   */
  ApplyMethod?: ApplyMethod | undefined;
}

/**
 * @public
 */
export interface DBClusterParameterGroupDetails {
  /**
   * <p>Provides a list of parameters for the DB cluster parameter group.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous DescribeDBClusterParameters request.
   *       If this parameter is specified, the response includes only records beyond the marker, up to
   *       the value specified by <code>MaxRecords</code> .</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterParametersMessage {
  /**
   * <p>The name of a specific DB cluster parameter group to return parameter details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p> A value that indicates to return only parameters for a specific source. Parameter sources
   *       can be <code>engine</code>, <code>service</code>, or <code>customer</code>.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBClusterMessage {
  /**
   * <p>A pagination token that can be used in a subsequent DescribeDBClusters request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Contains a list of DB clusters for the user.</p>
   * @public
   */
  DBClusters?: DBCluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClustersMessage {
  /**
   * <p>The user-supplied DB cluster identifier. If this parameter is specified, information from
   *       only the specific DB cluster is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>A filter that specifies one or more DB clusters to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon
   *         Resource Names (ARNs). The results list will only include information about the DB
   *         clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts an engine name (such as <code>neptune</code>),
   *         and restricts the results list to DB clusters created by that engine.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to invoke this API from the Amazon CLI and filter so that only
   *       Neptune DB clusters are returned, you could use the following command:</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <a>DescribeDBClusters</a>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  /**
   * <p>The identifier for the DB cluster snapshot to describe the attributes for.</p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p>
 *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore
 *       a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 * @public
 */
export interface DBClusterSnapshotAttribute {
  /**
   * <p>The name of the manual DB cluster snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of Amazon accounts that have
   *       permission to copy or restore the manual DB cluster snapshot. For more information, see the
   *       <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *       returns a list of IDs of the Amazon accounts that are authorized to copy or restore the manual DB
   *       cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster
   *       snapshot is public and available for any Amazon account to copy or restore.</p>
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
 *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
 *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 * @public
 */
export interface DBClusterSnapshotAttributesResult {
  /**
   * <p>The identifier of the manual DB cluster snapshot that the attributes apply to.</p>
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>The list of attributes and values for the manual DB cluster snapshot.</p>
   * @public
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesResult {
  /**
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
   *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * @public
 */
export interface DBClusterSnapshotMessage {
  /**
   * <p> An optional pagination token provided by a previous <a>DescribeDBClusterSnapshots</a> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Provides a list of DB cluster snapshots for the user.</p>
   * @public
   */
  DBClusterSnapshots?: DBClusterSnapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotsMessage {
  /**
   * <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter
   *       can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This
   *       parameter is not case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in
   *       conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a
   *       lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p>
   *             </li>
   *             <li>
   *                <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code>
   *           parameter must also be specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>The type of DB cluster snapshots to be returned. You can specify one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all DB cluster snapshots that have been automatically
   *           taken by Amazon Neptune for my Amazon account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all DB cluster snapshots that have been taken by my Amazon
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shared</code> - Return all manual DB cluster snapshots that have been shared to
   *           my Amazon account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public</code> - Return all DB cluster snapshots that have been marked as
   *           public.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB
   *       cluster snapshots are returned. You can include shared DB cluster snapshots with these results
   *       by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include
   *       public DB cluster snapshots with these results by setting the <code>IncludePublic</code>
   *       parameter to <code>true</code>.</p>
   *          <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for
   *       <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The
   *       <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to
   *       <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when
   *       <code>SnapshotType</code> is set to <code>public</code>.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon
   *       account has been given permission to copy or restore, and otherwise false. The default is
   *       <code>false</code>.</p>
   *          <p>You can give an Amazon account permission to restore a manual DB cluster snapshot from
   *       another Amazon account by the <a>ModifyDBClusterSnapshotAttribute</a> API
   *       action.</p>
   * @public
   */
  IncludeShared?: boolean | undefined;

  /**
   * <p>True to include manual DB cluster snapshots that are public and can be copied or restored
   *       by any Amazon account, and otherwise false. The default is <code>false</code>. The default is
   *       false.</p>
   *          <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   * @public
   */
  IncludePublic?: boolean | undefined;
}

/**
 * <p>Specifies a character set.</p>
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
 * <p>A time zone associated with a <a>DBInstance</a>.</p>
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
   * <p>A value that indicates whether the target version is applied to any source DB instances
   *       that have AutoMinorVersionUpgrade set to true.</p>
   * @public
   */
  AutoUpgrade?: boolean | undefined;

  /**
   * <p>A value that indicates whether a database engine is upgraded to a major version.</p>
   * @public
   */
  IsMajorVersionUpgrade?: boolean | undefined;

  /**
   * <p>A value that indicates whether you can use Neptune global databases with the target engine version.</p>
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;
}

/**
 * <p> This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.</p>
 * @public
 */
export interface DBEngineVersion {
  /**
   * <p>The name of the database engine.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version number of the database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

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
   * <p>The description of the database engine version.</p>
   * @public
   */
  DBEngineVersionDescription?: string | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  DefaultCharacterSet?: CharacterSet | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  SupportedCharacterSets?: CharacterSet[] | undefined;

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   * @public
   */
  ValidUpgradeTarget?: UpgradeTarget[] | undefined;

  /**
   * <p>A list of the time zones supported by this engine for the <code>Timezone</code> parameter
   *       of the <code>CreateDBInstance</code> action.</p>
   * @public
   */
  SupportedTimezones?: Timezone[] | undefined;

  /**
   * <p>The types of logs that the database engine has available for export to CloudWatch
   *       Logs.</p>
   * @public
   */
  ExportableLogTypes?: string[] | undefined;

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types
   *       specified by ExportableLogTypes to CloudWatch Logs.</p>
   * @public
   */
  SupportsLogExportsToCloudwatchLogs?: boolean | undefined;

  /**
   * <p>Indicates whether the database engine version supports read replicas.</p>
   * @public
   */
  SupportsReadReplica?: boolean | undefined;

  /**
   * <p>A value that indicates whether you can use Aurora global databases with a specific DB engine version.</p>
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;
}

/**
 * @public
 */
export interface DBEngineVersionMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p> A list of <code>DBEngineVersion</code> elements.</p>
   * @public
   */
  DBEngineVersions?: DBEngineVersion[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBEngineVersionsMessage {
  /**
   * <p>The database engine to return.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The database engine version to return.</p>
   *          <p>Example: <code>5.1.49</code>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of a specific DB parameter group family to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBParameterGroupFamily.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * <p>Not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more than the
   *       <code>MaxRecords</code> value is available, a pagination token called a marker is included in
   *       the response so that the following results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Indicates that only the default version of the specified engine or engine and major
   *       version combination is returned.</p>
   * @public
   */
  DefaultOnly?: boolean | undefined;

  /**
   * <p>If this parameter is specified and the requested engine supports the
   *       <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response
   *       includes a list of supported character sets for each engine version.</p>
   * @public
   */
  ListSupportedCharacterSets?: boolean | undefined;

  /**
   * <p>If this parameter is specified and the requested engine supports the <code>TimeZone</code>
   *       parameter for <code>CreateDBInstance</code>, the response includes a list of supported time
   *       zones for each engine version.</p>
   * @public
   */
  ListSupportedTimezones?: boolean | undefined;
}

/**
 * @public
 */
export interface DBInstanceMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code> .</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p> A list of <a>DBInstance</a> instances.</p>
   * @public
   */
  DBInstances?: DBInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBInstancesMessage {
  /**
   * <p>The user-supplied instance identifier. If this parameter is specified, information from
   *       only the specific DB instance is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>A filter that specifies one or more DB instances to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon
   *         Resource Names (ARNs). The results list will only include information about the DB
   *         instances associated with the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts an engine name (such as <code>neptune</code>),
   *         and restricts the results list to DB instances created by that engine.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to invoke this API from the Amazon CLI and filter so that only
   *       Neptune DB instances are returned, you could use the following command:</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous <code>DescribeDBInstances</code>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBParameterGroupsMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>DBParameterGroup</a> instances.</p>
   * @public
   */
  DBParameterGroups?: DBParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBParameterGroupsMessage {
  /**
   * <p>The name of a specific DB parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBParameterGroupDetails {
  /**
   * <p>A list of <a>Parameter</a> values.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDBParametersMessage {
  /**
   * <p>The name of a specific DB parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return.</p>
   *          <p>Default: All parameter types returned</p>
   *          <p>Valid Values: <code>user | system | engine-default</code>
   *          </p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeDBParameters</code>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DBSubnetGroupMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p> A list of <a>DBSubnetGroup</a> instances.</p>
   * @public
   */
  DBSubnetGroups?: DBSubnetGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * <p>The name of the DB subnet group to return details for.</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous DescribeDBSubnetGroups request. If
   *       this parameter is specified, the response includes only records beyond the marker, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * <p>The name of the DB cluster parameter group family to return engine parameter information
   *       for.</p>
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified,
   *       the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
 * @public
 */
export interface EngineDefaults {
  /**
   * <p>Specifies the name of the DB parameter group family that the engine default parameters
   *       apply to.</p>
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * <p> An optional pagination token provided by a previous EngineDefaults request. If this
   *       parameter is specified, the response includes only records beyond the marker, up to the value
   *       specified by <code>MaxRecords</code> .</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Contains a list of engine default parameters.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
   * @public
   */
  EngineDefaults?: EngineDefaults | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * <p>The name of the DB parameter group family.</p>
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>Not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultParametersResult {
  /**
   * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
   * @public
   */
  EngineDefaults?: EngineDefaults | undefined;
}

/**
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>The type of source that is generating the events.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.</p>
 * @public
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type that the returned categories belong to</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The event categories for the specified source type</p>
   * @public
   */
  EventCategories?: string[] | undefined;
}

/**
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * <p>A list of EventCategoriesMap data types.</p>
   * @public
   */
  EventCategoriesMapList?: EventCategoriesMap[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  db_cluster: "db-cluster",
  db_cluster_snapshot: "db-cluster-snapshot",
  db_instance: "db-instance",
  db_parameter_group: "db-parameter-group",
  db_security_group: "db-security-group",
  db_snapshot: "db-snapshot",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified, then
   *       all sources are included in the response.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If SourceIdentifier is supplied, SourceType must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBInstance</code>, then a
   *           <code>DBInstanceIdentifier</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code>
   *           must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBParameterGroup</code>, a
   *           <code>DBParameterGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code>
   *           must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *       returned.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *       For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p> The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *       For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The number of minutes to retrieve events for.</p>
   *          <p>Default: 60</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>A list of event categories that trigger notifications for a event notification
   *       subscription.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous DescribeEvents request. If this
   *       parameter is specified, the response includes only records beyond the marker, up to the value
   *       specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p> This data type is used as a response element in the <a>DescribeEvents</a>
 *       action.</p>
 * @public
 */
export interface Event {
  /**
   * <p>Provides the identifier for the source of the event.</p>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>Specifies the source type for this event.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>Provides the text of this event.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Specifies the category for the event.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>Specifies the date and time of the event.</p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the event.</p>
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * @public
 */
export interface EventsMessage {
  /**
   * <p> An optional pagination token provided by a previous Events request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code> .</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p> A list of <a>Event</a> instances.</p>
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the event notification subscription you want to describe.</p>
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code> .</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface EventSubscriptionsMessage {
  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of EventSubscriptions data types.</p>
   * @public
   */
  EventSubscriptionsList?: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalClustersMessage {
  /**
   * <p>The user-supplied DB cluster identifier. If this parameter is specified,
   *       only information about the specified DB cluster is returned. This parameter
   *       is not case-sensitive.</p>
   *          <p>Constraints: If supplied, must match an existing DB cluster identifier.</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records
   *       exist than the specified <code>MaxRecords</code> value, a pagination marker token
   *       is included in the response that you can use to retrieve the remaining results.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>(<i>Optional</i>) A pagination token returned by a previous
   *       call to <code>DescribeGlobalClusters</code>. If this parameter is specified,
   *       the response will only include records beyond the marker, up to the number
   *       specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GlobalClustersMessage {
  /**
   * <p>A pagination token. If this parameter is returned in the response,
   *       more records are available, which can be retrieved by one or more additional
   *       calls to <code>DescribeGlobalClusters</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The list of global clusters and instances returned by this request.</p>
   * @public
   */
  GlobalClusters?: GlobalCluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * <p>The name of the engine to retrieve DB instance options for.</p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available
   *       offerings matching the specified engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available
   *       offerings matching the specified DB instance class.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available
   *       offerings matching the specified license model.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The VPC filter value. Specify this parameter to show only the available VPC or non-VPC
   *       offerings.</p>
   * @public
   */
  Vpc?: boolean | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code> .</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains a list of available options for a DB instance.</p>
 *          <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
 * @public
 */
export interface OrderableDBInstanceOption {
  /**
   * <p>The engine type of a DB instance.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The engine version of a DB instance.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The DB instance class for a DB instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The license model for a DB instance.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * <p>Indicates whether a DB instance is Multi-AZ capable.</p>
   * @public
   */
  MultiAZCapable?: boolean | undefined;

  /**
   * <p>Indicates whether a DB instance can have a Read Replica.</p>
   * @public
   */
  ReadReplicaCapable?: boolean | undefined;

  /**
   * <p>Indicates whether a DB instance is in a VPC.</p>
   * @public
   */
  Vpc?: boolean | undefined;

  /**
   * <p>Indicates whether a DB instance supports encrypted storage.</p>
   * @public
   */
  SupportsStorageEncryption?: boolean | undefined;

  /**
   * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Indicates whether a DB instance supports provisioned IOPS.</p>
   * @public
   */
  SupportsIops?: boolean | undefined;

  /**
   * <p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60
   *       seconds.</p>
   * @public
   */
  SupportsEnhancedMonitoring?: boolean | undefined;

  /**
   * <p>Indicates whether a DB instance supports IAM database authentication.</p>
   * @public
   */
  SupportsIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  SupportsPerformanceInsights?: boolean | undefined;

  /**
   * <p>Minimum storage size for a DB instance.</p>
   * @public
   */
  MinStorageSize?: number | undefined;

  /**
   * <p>Maximum storage size for a DB instance.</p>
   * @public
   */
  MaxStorageSize?: number | undefined;

  /**
   * <p>Minimum total provisioned IOPS for a DB instance.</p>
   * @public
   */
  MinIopsPerDbInstance?: number | undefined;

  /**
   * <p>Maximum total provisioned IOPS for a DB instance.</p>
   * @public
   */
  MaxIopsPerDbInstance?: number | undefined;

  /**
   * <p>Minimum provisioned IOPS per GiB for a DB instance.</p>
   * @public
   */
  MinIopsPerGib?: number | undefined;

  /**
   * <p>Maximum provisioned IOPS per GiB for a DB instance.</p>
   * @public
   */
  MaxIopsPerGib?: number | undefined;

  /**
   * <p>A value that indicates whether you can use Neptune global databases with a specific combination of other DB engine attributes.</p>
   * @public
   */
  SupportsGlobalDatabases?: boolean | undefined;
}

/**
 * @public
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * <p>An <a>OrderableDBInstanceOption</a> structure
   *       containing information about orderable options for the DB instance.</p>
   * @public
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous OrderableDBInstanceOptions request.
   *       If this parameter is specified, the response includes only records beyond the marker, up to
   *       the value specified by <code>MaxRecords</code> .</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>A filter that specifies one or more resources to return pending maintenance actions
   *       for.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon
   *           Resource Names (ARNs). The results list will only include pending maintenance actions for
   *           the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs.
   *           The results list will only include pending maintenance actions for the DB instances
   *           identified by these ARNs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to a number of records specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * <p>A list of the pending maintenance actions for the resource.</p>
   * @public
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to a number of records specified by
   *       <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsMessage {
  /**
   * <p>The customer identifier or the ARN of your DB instance.</p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * <p>A range of double values.</p>
 * @public
 */
export interface DoubleRange {
  /**
   * <p>The minimum value in the range.</p>
   * @public
   */
  From?: number | undefined;

  /**
   * <p>The maximum value in the range.</p>
   * @public
   */
  To?: number | undefined;
}

/**
 * <p>A range of integer values.</p>
 * @public
 */
export interface Range {
  /**
   * <p>The minimum value in the range.</p>
   * @public
   */
  From?: number | undefined;

  /**
   * <p>The maximum value in the range.</p>
   * @public
   */
  To?: number | undefined;

  /**
   * <p>The step value for the range. For example, if you have a range of 5,000 to 10,000, with a
   *       step value of 1,000, the valid values start at 5,000 and step up by 1,000. Even though 7,500
   *       is within the range, it isn't a valid value for the range. The valid values are 5,000, 6,000,
   *       7,000, 8,000...</p>
   * @public
   */
  Step?: number | undefined;
}

/**
 * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
 * @public
 */
export interface ValidStorageOptions {
  /**
   * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
   * @public
   */
  StorageSize?: Range[] | undefined;

  /**
   * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
   * @public
   */
  ProvisionedIops?: Range[] | undefined;

  /**
   * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
   * @public
   */
  IopsToStorageRatio?: DoubleRange[] | undefined;
}

/**
 * <p>Information about valid modifications that you can make to your DB instance. Contains the
 *       result of a successful call to the <a>DescribeValidDBInstanceModifications</a>
 *       action. You can use this information when you call <a>ModifyDBInstance</a>.
 *    </p>
 * @public
 */
export interface ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance.</p>
   * @public
   */
  Storage?: ValidStorageOptions[] | undefined;
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsResult {
  /**
   * <p>Information about valid modifications that you can make to your DB instance. Contains the
   *       result of a successful call to the <a>DescribeValidDBInstanceModifications</a>
   *       action. You can use this information when you call <a>ModifyDBInstance</a>.
   *    </p>
   * @public
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage | undefined;
}

/**
 * @public
 */
export interface FailoverDBClusterMessage {
  /**
   * <p>A DB cluster identifier to force a failover for. This parameter is not
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>The name of the instance to promote to the primary instance.</p>
   *          <p>You must specify the instance identifier for an Read Replica in the DB cluster. For
   *       example, <code>mydbcluster-replica1</code>.</p>
   * @public
   */
  TargetDBInstanceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface FailoverDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterMessage {
  /**
   * <p>Identifier of the Neptune global database that should be failed over.
   *       The identifier is the unique key assigned by the user when the Neptune
   *       global database was created. In other words, it's the name of the global
   *       database that you want to fail over.</p>
   *          <p>Constraints: Must match the identifier of an existing Neptune global
   *       database.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secondary Neptune DB cluster
   *       that you want to promote to primary for the global database.</p>
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;

  /**
   * <p>Specifies whether to allow data loss for this global database cluster operation.
   *       Allowing data loss triggers a global failover operation.</p>
   *          <p>If you don't specify <code>AllowDataLoss</code>, the global database cluster operation
   *       defaults to a switchover.</p>
   *          <p>Constraints:Can't be specified together with the <code>Switchover</code> parameter.</p>
   * @public
   */
  AllowDataLoss?: boolean | undefined;

  /**
   * <p>Specifies whether to switch over this global database cluster.</p>
   *          <p>Constraints:Can't be specified together with the <code>AllowDataLoss</code> parameter.</p>
   * @public
   */
  Switchover?: boolean | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name
   *       (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface TagListMessage {
  /**
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * <p>The state of the DB security group does not allow deletion.</p>
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
 * <p>The configuration setting for the log types to be enabled for export
 *       to CloudWatch Logs for a specific DB instance or DB cluster.</p>
 *          <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays
 *       determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
 *          <p>Valid log types are: <code>audit</code> (to publish audit logs) and
 *       <code>slowquery</code> (to publish slow-query logs). See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html">Publishing Neptune logs
 *       to Amazon CloudWatch logs</a>.</p>
 * @public
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * <p>The list of log types to enable.</p>
   * @public
   */
  EnableLogTypes?: string[] | undefined;

  /**
   * <p>The list of log types to disable.</p>
   * @public
   */
  DisableLogTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterMessage {
  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter is not
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is
   *       stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   * @public
   */
  NewDBClusterIdentifier?: string | undefined;

  /**
   * <p>A value that specifies whether the modifications in this request and any pending
   *       modifications are asynchronously applied as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set
   *       to <code>false</code>, changes to the DB cluster are applied during the next maintenance
   *       window.</p>
   *          <p>The <code>ApplyImmediately</code> parameter only affects <code>NewDBClusterIdentifier</code>
   *       values. If you set the <code>ApplyImmediately</code> parameter value to false, then changes to
   *       <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window.
   *       All other changes are applied immediately, regardless of the value of the
   *       <code>ApplyImmediately</code> parameter.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum
   *       value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The port number on which the DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>
   *             <i>Not supported by Neptune.</i>
   *          </p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are
   *       enabled, using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region.</p>
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
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated
   *       Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region, occurring on a random day of the
   *       week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs
   *       for a specific DB cluster. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html#cloudwatch-logs-cli">Using the
   *       CLI to publish Neptune audit logs to CloudWatch Logs</a>.</p>
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * <p>The version number of the database engine to which you want to upgrade. Changing this
   *       parameter results in an outage. The change is applied during the next maintenance window
   *       unless the <code>ApplyImmediately</code> parameter is set to true.</p>
   *          <p>For a list of valid engine versions, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases.html">Engine Releases for Amazon
   *       Neptune</a>, or call <a>DescribeDBEngineVersions</a>.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>A value that indicates whether upgrades between different major versions are allowed.</p>
   *          <p>Constraints: You must set the allow-major-version-upgrade flag when providing an
   *       <code>EngineVersion</code> parameter that uses a different major version than the DB cluster's current
   *       version.</p>
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The name of the DB parameter group to apply to all instances of the DB cluster. </p>
   *          <note>
   *             <p>When you apply a parameter group using <code>DBInstanceParameterGroupName</code>,
   *       parameter changes aren't applied during the next maintenance window but instead are
   *       applied immediately.</p>
   *          </note>
   *          <p>Default: The existing name setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>The DB parameter group must be in the same DB parameter group family as
   *         the target DB cluster version.</p>
   *             </li>
   *             <li>
   *                <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with
   *         the <code>AllowMajorVersionUpgrade</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceParameterGroupName?: string | undefined;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>standard</code>
   *                   </b>   –
   *         ( <i>the default</i> ) Configures cost-effective database storage for applications
   *         with moderate to small I/O usage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>iopt1</code>
   *                   </b>   –
   *           Enables <a href="https://docs.aws.amazon.com/neptune/latest/userguide/storage-types.html#provisioned-iops-storage">I/O-Optimized storage</a>
   *           that's designed to meet the needs of I/O-intensive graph workloads that
   *           require predictable pricing with low I/O latency and consistent I/O throughput.</p>
   *                <p>Neptune I/O-Optimized storage is only available starting with engine release 1.3.0.0.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterEndpointMessage {
  /**
   * <p>The identifier of the endpoint to modify. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   * @public
   */
  ExcludedMembers?: string[] | undefined;
}

/**
 * <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster.
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
 *       see <code>Endpoint</code>.</p>
 * @public
 */
export interface ModifyDBClusterEndpointOutput {
  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier?: string | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
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
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
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
   *       <code>WRITER</code>, <code>ANY</code>.</p>
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
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
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
 * @public
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to modify.</p>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *          <p>To manage authorization for other Amazon accounts to copy or restore a manual DB cluster
   *       snapshot, set this value to <code>restore</code>.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by
   *       <code>AttributeName</code>.</p>
   *          <p>To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this
   *       list to include one or more Amazon account IDs, or <code>all</code> to make the manual DB cluster
   *       snapshot restorable by any Amazon account. Do not add the <code>all</code> value for any manual
   *       DB cluster snapshots that contain private information that you don't want available to all Amazon
   *       accounts.</p>
   * @public
   */
  ValuesToAdd?: string[] | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by
   *       <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other Amazon accounts to copy or restore a manual DB cluster
   *       snapshot, set this list to include one or more Amazon account identifiers, or <code>all</code> to
   *       remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you
   *       specify <code>all</code>, an Amazon account whose account ID is explicitly added to the
   *       <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>
   * @public
   */
  ValuesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
   *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 * @public
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
 * <p>
 *             <i>CertificateIdentifier</i> does not refer to an existing certificate.</p>
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
 * <p>The DB upgrade failed because a resource the DB depends on could not be modified.</p>
 * @public
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
 * @public
 */
export interface ModifyDBInstanceMessage {
  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
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
   * <p>Not supported by Neptune.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The new compute and memory capacity of the DB instance, for example,
   *       <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon
   *       Regions.</p>
   *          <p>If you modify the DB instance class, an outage occurs during the change. The change is
   *       applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified
   *       as <code>true</code> for this request.</p>
   *          <p>Default: Uses existing setting</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The new DB subnet group for the DB instance. You can use this parameter to move your DB
   *       instance to a different VPC.</p>
   *          <p>Changing the subnet group causes an outage during the change. The change is applied during
   *       the next maintenance window, unless you specify <code>true</code> for the
   *       <code>ApplyImmediately</code> parameter.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetGroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>A list of DB security groups to authorize on this DB instance. Changing this setting
   *       doesn't result in an outage and the change is asynchronously applied as soon as
   *       possible.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing DBSecurityGroups.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of EC2 VPC security groups to authorize on this DB instance. This change is
   *       asynchronously applied as soon as possible.</p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB
   *       cluster. For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing VpcSecurityGroupIds.</p>
   *             </li>
   *          </ul>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>Specifies whether the modifications in this request and any pending modifications are
   *       asynchronously applied as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB instance.</p>
   *          <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied
   *       during the next maintenance window. Some parameter changes can cause an outage and are applied
   *       on the next call to <a>RebootDBInstance</a>, or the next
   *       failure reboot.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The name of the DB parameter group to apply to the DB instance. Changing this setting
   *       doesn't result in an outage. The parameter group name itself is changed immediately, but the
   *       actual parameter changes are not applied until you reboot the instance without failover. The
   *       db instance will NOT be rebooted automatically and the parameter changes will NOT be applied
   *       during the next maintenance window.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints: The DB parameter group must be in the same DB parameter group family as this
   *       DB instance.</p>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>Not applicable. The retention period for automated backups is managed by the DB cluster.
   *       For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Default: Uses existing setting</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p> The daily time range during which automated backups are created if automated backups are
   *       enabled.</p>
   *          <p>Not applicable. The daily time range for creating automated backups is managed by the DB
   *       cluster. For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format hh24:mi-hh24:mi</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Time Coordinated (UTC)</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *       result in an outage. Changing this parameter doesn't result in an outage, except in the
   *       following situation, and the change is asynchronously applied as soon as possible. If there
   *       are pending actions that cause a reboot, and the maintenance window is changed to include the
   *       current time, then changing this parameter will cause a reboot of the DB instance. If moving
   *       this window to the current time, there must be at least 30 minutes between the current time
   *       and end of the window to ensure pending changes are applied.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't
   *       result in an outage and the change is applied during the next maintenance window unless the
   *       <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The version number of the database engine to upgrade to. Currently, setting this
   *       parameter has no effect. To upgrade your database engine to the most recent release,
   *       use the <a>ApplyPendingMaintenanceAction</a> API.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Indicates that major version upgrades are allowed. Changing this parameter doesn't result
   *       in an outage and the change is asynchronously applied as soon as possible.</p>
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * <p> Indicates that minor version upgrades are applied automatically to the DB instance during
   *       the maintenance window. Changing this parameter doesn't result in an outage except in the
   *       following case and the change is asynchronously applied as soon as possible. An outage will
   *       result if this parameter is set to <code>true</code> during the maintenance window, and a
   *       newer minor version is available, and Neptune has enabled auto patching for that engine
   *       version.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p>
   *          <p>Changing this setting doesn't result in an outage and the change is applied during the
   *       next maintenance window unless the <code>ApplyImmediately</code> parameter is set to
   *       <code>true</code> for this request.</p>
   *          <p>Default: Uses existing setting</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p> The new DB instance identifier for the DB instance when renaming a DB instance. When you
   *       change the DB instance identifier, an instance reboot will occur immediately if you set
   *       <code>Apply Immediately</code> to true, or will occur during the next maintenance window if
   *       <code>Apply Immediately</code> to false. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   * @public
   */
  NewDBInstanceIdentifier?: string | undefined;

  /**
   * <p>Not applicable. In Neptune the storage type is managed at the DB Cluster level.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise
   *       false. The default is false.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default
   *       is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set
   *       <code>MonitoringInterval</code> to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values
   *       specified for options in the option group for the DB instance.</p>
   *          <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless
   *       of the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   * @public
   */
  DBPortNumber?: number | undefined;

  /**
   * <p>Indicates whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private
   *       cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within
   *       the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is
   *       ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned
   *       to the DB cluster doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a
   *       private IP address.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to
   *       Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a
   *       <code>MonitoringRoleArn</code> value.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>Not supported</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.</p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>You can enable IAM database authentication for the following database engines</p>
   *          <p>Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB
   *       cluster. For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs
   *       for a specific DB instance or DB cluster.</p>
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.  See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface DBParameterGroupNameMessage {
  /**
   * <p>Provides the name of the DB parameter group.</p>
   * @public
   */
  DBParameterGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names, values, and the apply method for the parameter update. At
   *       least one parameter name, value, and apply method must be supplied; subsequent arguments are
   *       optional. A maximum of 20 parameters can be modified in a single request.</p>
   *          <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *          <note>
   *             <p>You can use the immediate value with dynamic parameters only. You can use the
   *         pending-reboot value for both dynamic and static parameters, and changes are applied when
   *         you reboot the DB instance without failover.</p>
   *          </note>
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string. You can't
   *       modify the default subnet group.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the DB subnet group.</p>
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * <p>The EC2 subnet IDs for the DB subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 * @public
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
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the event notification subscription.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is
   *       created by Amazon SNS when you create a topic and subscribe to it.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified
   *       of events generated by a DB instance, you would set this parameter to db-instance. if this
   *       value is not specified, all events are returned.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p> A list of event categories for a SourceType that you want to subscribe to. You can see a
   *       list of the categories for a given SourceType
   *
   *       by using the <b>DescribeEventCategories</b> action.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *       subscription.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterMessage {
  /**
   * <p>The DB cluster identifier for the global cluster being modified. This parameter
   *       is not case-sensitive.</p>
   *          <p>Constraints: Must match the identifier of an existing global database cluster.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>A new cluster identifier to assign to the global database. This value is
   *       stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   * @public
   */
  NewGlobalClusterIdentifier?: string | undefined;

  /**
   * <p>Indicates whether the global database has deletion protection enabled. The
   *       global database cannot be deleted when deletion protection is enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *       Changing this parameter will result in an outage. The change is applied during
   *       the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *          <p>To list all of the available Neptune engine versions, use the following command:</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *          <p>Constraints: You must allow major version upgrades if you specify a value
   *       for the <code>EngineVersion</code> parameter that is a different major version
   *       than the DB cluster's current version.</p>
   *          <p>If you upgrade the major version of a global database, the cluster and
   *       DB instance parameter groups are set to the default parameter groups for the
   *       new version, so you will need to apply any custom parameter groups after
   *       completing the upgrade.</p>
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterMessage {
  /**
   * <p>Not supported.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface RebootDBInstanceMessage {
  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
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
   * <p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p>
   *          <p>Constraint: You can't specify <code>true</code> if the instance is not configured for
   *       MultiAZ.</p>
   * @public
   */
  ForceFailover?: boolean | undefined;
}

/**
 * @public
 */
export interface RebootDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * <p>The identifier of the Neptune global database from which to detach the
   *       specified Neptune DB cluster.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) identifying the cluster to be detached
   *       from the Neptune global database cluster.</p>
   * @public
   */
  DbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.</p>
 * @public
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
 * @public
 */
export interface RemoveRoleFromDBClusterMessage {
  /**
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for
   *       example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be disassociated from.
   *       For the list of supported feature names, see <a>DescribeDBEngineVersions</a>.</p>
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * <p>The name of the event notification subscription you want to remove a source identifier
   *       from.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p> The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security
   *       group.</p>
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon Neptune resource that the tags are removed from. This value is an Amazon
   *       Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A value that is set to <code>true</code> to reset all parameters in the DB cluster
   *       parameter group to their default values, and <code>false</code> otherwise. You can't use this
   *       parameter if there is a list of parameter names specified for the <code>Parameters</code>
   *       parameter.</p>
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default
   *       values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set
   *       to <code>true</code>.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ResetDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters
   *       in the DB parameter group to default values.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and
   *       <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of
   *       the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20
   *       parameters can be modified in a single request.</p>
   *          <p>Valid Values (for Apply method): <code>pending-reboot</code>
   *          </p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * <p>The DB cluster does not have enough capacity for the current operation.</p>
 * @public
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
 * <p>The state of the DB snapshot does not allow deletion.</p>
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
 * <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
 * @public
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
 * @public
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the restored DB cluster can
   *       be created in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This
   *       parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *          <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster
   *       snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing Snapshot.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The database engine to use for the new DB cluster.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>Not supported.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from a DB
   *       snapshot or DB cluster snapshot.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If
   *       you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used
   *       to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the
   *       KMS encryption key.</p>
   *          <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following
   *       will occur:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is
   *           encrypted, then the restored DB cluster is encrypted using the KMS key that was used to
   *           encrypt the DB snapshot or DB cluster snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not
   *           encrypted, then the restored DB cluster is not encrypted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the restored DB cluster that is created.</i>
   *          </p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *          <p>Valid values: <code>standard</code>, <code>iopt1</code>
   *          </p>
   *          <p>Default: <code>standard</code>
   *          </p>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * <p>The name of the new DB cluster to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The type of restore to be performed. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>full-copy</code> - The new DB cluster is restored as a full copy of the source
   *           DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source
   *           DB cluster.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored
   *       as a full copy of the source DB cluster.</p>
   * @public
   */
  RestoreType?: string | undefined;

  /**
   * <p>The identifier of the source DB cluster from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * <p>The date and time to restore the DB cluster to.</p>
   *          <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                <p>Must be specified if <code>UseLatestRestorableTime</code> parameter is not
   *           provided</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified if <code>UseLatestRestorableTime</code> parameter is true</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified if <code>RestoreType</code> parameter is
   *           <code>copy-on-write</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2015-03-07T23:45:00Z</code>
   *          </p>
   * @public
   */
  RestoreToTime?: Date | undefined;

  /**
   * <p>A value that is set to <code>true</code> to restore the DB cluster to the latest
   *       restorable backup time, and <code>false</code> otherwise.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is
   *       provided.</p>
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The tags to be applied to the restored DB cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon KMS key identifier to use when restoring an encrypted DB cluster from an encrypted
   *       DB cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If
   *       you are restoring a DB cluster with the same Amazon account that owns the KMS encryption key used
   *       to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the
   *       KMS encryption key.</p>
   *          <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is
   *       different than the KMS key used to encrypt the source DB cluster. The new DB cluster is
   *       encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p>
   *          <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following
   *       will occur:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the
   *           KMS key that was used to encrypt the source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>If the DB cluster is not encrypted, then the restored DB cluster is not
   *           encrypted.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then the
   *       restore request is rejected.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *          <p>Valid values: <code>standard</code>, <code>iopt1</code>
   *          </p>
   *          <p>Default: <code>standard</code>
   *          </p>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StartDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Neptune DB cluster to be started.
   *       This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StopDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Neptune DB cluster to be stopped.
   *       This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterMessage {
  /**
   * <p>The identifier of the global database cluster to switch over. This parameter isn't case-sensitive.</p>
   *          <p>Constraints: Must match the identifier of an existing global database cluster.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secondary Neptune DB cluster that you want to promote to primary for
   *       the global database.</p>
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterResult {
  /**
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @internal
 */
export const CreateDBInstanceMessageFilterSensitiveLog = (obj: CreateDBInstanceMessage): any => ({
  ...obj,
  ...(obj.TdeCredentialPassword && { TdeCredentialPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyDBInstanceMessageFilterSensitiveLog = (obj: ModifyDBInstanceMessage): any => ({
  ...obj,
  ...(obj.TdeCredentialPassword && { TdeCredentialPassword: SENSITIVE_STRING }),
});
