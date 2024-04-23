// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { NeptuneServiceException as __BaseException } from "./NeptuneServiceException";

/**
 * @public
 */
export interface AddRoleToDBClusterMessage {
  /**
   * @public
   * <p>The name of the DB cluster to associate the IAM role with.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster,
   *       for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The name of the feature for the Neptune DB cluster that the IAM role is to be associated with.
   *       For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;
}

/**
 * @public
 * <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
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
 * @public
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
 * @public
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
 * @public
 * <p>The DB cluster is not in a valid state.</p>
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
   * @public
   * <p>The name of the event notification subscription you want to add a source identifier
   *       to.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
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
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
 */
export interface EventSubscription {
  /**
   * @public
   * <p>The Amazon customer account associated with the event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * @public
   * <p>The event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * @public
   * <p>The topic ARN of the event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The status of the event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: creating | modifying | deleting | active | no-permission |
   *       topic-not-exist</p>
   *          <p>The status "no-permission" indicates that Neptune no longer has permission to post to the
   *       SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the
   *       subscription was created.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The time the event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;

  /**
   * @public
   * <p>The source type for the event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>A list of source IDs for the event notification subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * @public
   * <p>A list of event categories for the event notification subscription.</p>
   */
  EventCategoriesList?: string[];

  /**
   * @public
   * <p>A Boolean value indicating if the subscription is enabled. True indicates the subscription
   *       is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the event subscription.</p>
   */
  EventSubscriptionArn?: string;
}

/**
 * @public
 */
export interface AddSourceIdentifierToSubscriptionResult {
  /**
   * @public
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>The source could not be found.</p>
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
 * @public
 * <p>The designated subscription could not be found.</p>
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
 * @public
 * <p>Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode
   *       characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>.
   *       The string can only contain the set of Unicode letters, digits, white-space,
   *       '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   */
  Key?: string;

  /**
   * @public
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode
   *       characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>.
   *       The string can only contain the set of Unicode letters, digits, white-space,
   *       '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * @public
   * <p>The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource
   *       Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the Amazon Neptune resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 * <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
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
 * @public
 * <p>
 *             <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies
   *       to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>
   *          </p>
   */
  ApplyAction: string | undefined;

  /**
   * @public
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
   */
  OptInType: string | undefined;
}

/**
 * @public
 * <p>Provides information about a pending maintenance action for a resource.</p>
 */
export interface PendingMaintenanceAction {
  /**
   * @public
   * <p>The type of pending maintenance action that is available for the resource.</p>
   */
  Action?: string;

  /**
   * @public
   * <p>The date of the maintenance window when the action is applied. The maintenance action is
   *       applied to the resource during its first maintenance window after this date. If this date is
   *       specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * @public
   * <p>The date when the maintenance action is automatically applied. The maintenance action is
   *       applied to the resource on this date regardless of the maintenance window for the resource. If
   *       this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * @public
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * @public
   * <p>The effective date when the pending maintenance action is applied to the resource. This
   *       date takes into account opt-in requests received from the <a>ApplyPendingMaintenanceAction</a> API, the <code>AutoAppliedAfterDate</code>, and the
   *       <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been received
   *       and nothing has been specified as <code>AutoAppliedAfterDate</code> or
   *       <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * @public
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Describes the pending maintenance actions for a resource.</p>
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * @public
   * <p>The ARN of the resource that has pending maintenance actions.</p>
   */
  ResourceIdentifier?: string;

  /**
   * @public
   * <p>A list that provides details about the pending maintenance actions for the
   *       resource.</p>
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];
}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionResult {
  /**
   * @public
   * <p>Describes the pending maintenance actions for a resource.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

/**
 * @public
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
 * @public
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * @public
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
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * @public
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
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>A description for the copied DB cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the copied DB cluster parameter group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
 */
export interface DBClusterParameterGroup {
  /**
   * @public
   * <p>Provides the name of the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>Provides the name of the DB parameter group family that this DB cluster parameter group is
   *       compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * @public
   * <p>Provides the customer-specified description for this DB cluster parameter group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupArn?: string;
}

/**
 * @public
 */
export interface CopyDBClusterParameterGroupResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

/**
 * @public
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
 * @public
 * <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
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
 * @public
 * <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
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
   * @public
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
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * @public
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
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * @public
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
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Not currently supported.</p>
   */
  PreSignedUrl?: string;

  /**
   * @public
   * <p>True to copy all tags from the source DB cluster snapshot to the target DB cluster
   *       snapshot, and otherwise false. The default is false.</p>
   */
  CopyTags?: boolean;

  /**
   * @public
   * <p>The tags to assign to the new DB cluster snapshot copy.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
 */
export interface DBClusterSnapshot {
  /**
   * @public
   * <p>Provides the list of EC2 Availability Zones that instances in the DB cluster snapshot can
   *       be restored in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
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
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * @public
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was
   *       created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * @public
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>Specifies the status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Specifies the port that the DB cluster was listening on at the time of the
   *       snapshot.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Provides the VPC ID associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *       (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>Provides the version of the database engine for this DB cluster snapshot.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Provides the license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>Provides the type of the DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * @public
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * @public
   * <p>Specifies whether the DB cluster snapshot is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>If <code>StorageEncrypted</code> is true, the Amazon KMS key identifier for the encrypted DB
   *       cluster snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * @public
   * <p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon
   *       Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;

  /**
   * @public
   * <p>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts
   *       is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * @public
   * <p>The storage type associated with the DB cluster snapshot.</p>
   */
  StorageType?: string;
}

/**
 * @public
 */
export interface CopyDBClusterSnapshotResult {
  /**
   * @public
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

/**
 * @public
 * <p>User already has a DB cluster snapshot with the given identifier.</p>
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
 * @public
 * <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
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
 * @public
 * <p>The supplied value is not a valid DB cluster snapshot state.</p>
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
 * @public
 * <p>Error accessing KMS key.</p>
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
 * @public
 * <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
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
   * @public
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
   */
  SourceDBParameterGroupIdentifier: string | undefined;

  /**
   * @public
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
   */
  TargetDBParameterGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>A description for the copied DB parameter group.</p>
   */
  TargetDBParameterGroupDescription: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the copied DB parameter group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
 */
export interface DBParameterGroup {
  /**
   * @public
   * <p>Provides the name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * @public
   * <p>Provides the name of the DB parameter group family that this DB parameter group is
   *       compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * @public
   * <p>Provides the customer-specified description for this DB parameter group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the DB parameter group.</p>
   */
  DBParameterGroupArn?: string;
}

/**
 * @public
 */
export interface CopyDBParameterGroupResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
   */
  DBParameterGroup?: DBParameterGroup;
}

/**
 * @public
 * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
 *       <i>Amazon Neptune User Guide</i>.</p>
 */
export interface ServerlessV2ScalingConfiguration {
  /**
   * @public
   * <p>The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
   *       You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.</p>
   */
  MinCapacity?: number;

  /**
   * @public
   * <p>The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
   *       You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.</p>
   */
  MaxCapacity?: number;
}

/**
 * @public
 */
export interface CreateDBClusterMessage {
  /**
   * @public
   * <p>A list of EC2 Availability Zones that instances in the DB cluster can be created
   *       in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The number of days for which automated backups are retained. You must specify a minimum
   *       value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * @public
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a
   *       name, Amazon Neptune will not create a database in the DB cluster you are creating.</p>
   */
  DatabaseName?: string;

  /**
   * @public
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
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p> The name of the DB cluster parameter group to associate with this DB cluster. If this
   *       argument is omitted, the default is used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>A DB subnet group to associate with this DB cluster.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *          <p>Valid Values: <code>neptune</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>The version number of the database engine to use for the new DB cluster.</p>
   *          <p>Example: <code>1.0.2.1</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   */
  Port?: number;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * @public
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
   */
  PreferredBackupWindow?: string;

  /**
   * @public
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster
   *       is created as a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * @public
   * <p>The tags to assign to the new DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
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
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  PreSignedUrl?: string;

  /**
   * @public
   * <p>If set to <code>true</code>, enables Amazon Identity and Access Management
   *       (IAM) authentication for the entire DB cluster (this cannot be set at an
   *       instance level).</p>
   *          <p>Default: <code>false</code>.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * @public
   * <p>A list of the log types that this DB cluster should export to CloudWatch Logs.
   *       Valid log types are: <code>audit</code> (to publish audit logs) and
   *       <code>slowquery</code> (to publish slow-query logs). See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html">Publishing Neptune logs
   *       to Amazon CloudWatch logs</a>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;

  /**
   * @public
   * <p>The ID of the Neptune global database to which this new DB cluster
   *       should be added.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * @public
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>standard | iopt1</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>When you create a Neptune cluster with the storage type set to <code>iopt1</code>, the storage type is returned
   *         in the response. The storage type isn't returned when you set it to <code>standard</code>.</p>
   *          </note>
   */
  StorageType?: string;
}

/**
 * @public
 * <p>Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB
 *       cluster.</p>
 */
export interface DBClusterRole {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *       cluster.</p>
   */
  RoleArn?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>The name of the feature associated with the Amazon Identity and Access Management (IAM) role.
   *       For the list of supported feature names, see <a>DescribeDBEngineVersions</a>.
   *     </p>
   */
  FeatureName?: string;
}

/**
 * @public
 * <p>Contains information about an instance that is part of a DB cluster.</p>
 */
export interface DBClusterMember {
  /**
   * @public
   * <p>Specifies the instance identifier for this member of the DB cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Value that is <code>true</code> if the cluster member is the primary instance for the DB
   *       cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * @public
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB
   *       cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * @public
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.</p>
   */
  PromotionTier?: number;
}

/**
 * @public
 * <p>Not supported by Neptune.</p>
 */
export interface DBClusterOptionGroupStatus {
  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  DBClusterOptionGroupName?: string;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>A list of the log types whose configuration is still pending. In other
 *       words, these log types are in the process of being activated or deactivated.</p>
 *          <p>Valid log types are: <code>audit</code> (to publish audit logs) and
 *       <code>slowquery</code> (to publish slow-query logs). See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html">Publishing Neptune logs
 *       to Amazon CloudWatch logs</a>.</p>
 */
export interface PendingCloudwatchLogsExports {
  /**
   * @public
   * <p>Log types that are in the process of being deactivated. After they are
   *       deactivated, these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * @public
   * <p>Log types that are in the process of being enabled. After they are
   *       enabled, these log types are exported to CloudWatch Logs.</p>
   */
  LogTypesToDisable?: string[];
}

/**
 * @public
 * <p>This data type is used as a response element in the <code>ModifyDBCluster</code> operation and
 *       contains changes that will be applied during the next maintenance window.</p>
 */
export interface ClusterPendingModifiedValues {
  /**
   * @public
   * <p>This <code>PendingCloudwatchLogsExports</code> structure specifies
   *       pending changes to which CloudWatch logs are enabled and which are disabled.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  /**
   * @public
   * <p>The DBClusterIdentifier value for the DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>A value that indicates whether mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * @public
   * <p>The database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>The storage type for the DB cluster.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The allocated storage size in gibibytes (GiB) for database engines. For Neptune,
   *       <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size isn't fixed, but
   *         instead automatically adjusts as needed.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The Provisioned IOPS (I/O operations per second) value. This setting is only for non-Aurora Multi-AZ DB clusters.</p>
   */
  Iops?: number;
}

/**
 * @public
 * <p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
 *       <i>Amazon Neptune User Guide</i>.</p>
 */
export interface ServerlessV2ScalingConfigurationInfo {
  /**
   * @public
   * <p>The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
   *       You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.</p>
   */
  MinCapacity?: number;

  /**
   * @public
   * <p>The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
   *       You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.</p>
   */
  MaxCapacity?: number;
}

/**
 * @public
 * <p>This data type is used as a response element for queries on VPC security group
 *       membership.</p>
 */
export interface VpcSecurityGroupMembership {
  /**
   * @public
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * @public
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Contains the details of an Amazon Neptune DB cluster.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
 */
export interface DBCluster {
  /**
   * @public
   * <p>
   *             <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size is
   *       not fixed, but instead automatically adjusts as needed.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>Provides the list of EC2 Availability Zones that instances in the DB cluster can be
   *       created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  CharacterSetName?: string;

  /**
   * @public
   * <p>Contains the name of the initial database of this DB cluster that was provided at create
   *       time, if one was specified when the DB cluster was created. This same name is returned for the
   *       life of the DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that
   *       identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * @public
   * <p>Specifies information on the subnet group associated with the DB cluster, including the
   *       name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * @public
   * <p>Specifies the current state of this DB cluster.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Specifies the progress of the operation as a percentage.</p>
   */
  PercentProgress?: string;

  /**
   * @public
   * <p>Specifies the earliest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * @public
   * <p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances
   *       connections across the Read Replicas that are available in a DB cluster. As clients request
   *       new connections to the reader endpoint, Neptune distributes the connection requests among the
   *       Read Replicas in the DB cluster. This functionality can help balance your read workload across
   *       multiple Read Replicas in your DB cluster.</p>
   *          <p>If a failover occurs, and the Read Replica that you are connected to is promoted to be the
   *       primary instance, your connection is dropped. To continue sending your read workload to other
   *       Read Replicas in the cluster, you can then reconnect to the reader endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * @public
   * <p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * @public
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[];

  /**
   * @public
   * <p>Specifies the daily time range during which automated backups are created if automated
   *       backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * @public
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB
   *       cluster.</p>
   */
  ReadReplicaIdentifiers?: string[];

  /**
   * @public
   * <p>Provides the list of instances that make up the DB cluster.</p>
   */
  DBClusterMembers?: DBClusterMember[];

  /**
   * @public
   * <p>Provides a list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @public
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * @public
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>If <code>StorageEncrypted</code> is true, the Amazon KMS key identifier for the
   *       encrypted DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Region-unique, immutable identifier for the DB cluster. This identifier is found
   *       in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB cluster is accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * @public
   * <p>Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated
   *       with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the
   *       DB cluster to access other Amazon services on your behalf.</p>
   */
  AssociatedRoles?: DBClusterRole[];

  /**
   * @public
   * <p>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts
   *       is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * @public
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   */
  CloneGroupId?: string;

  /**
   * @public
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *       (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * @public
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>A list of the log types that this DB cluster is configured to export to CloudWatch Logs.
   *       Valid log types are: <code>audit</code> (to publish audit logs to CloudWatch) and
   *       slowquery (to publish slow-query logs to CloudWatch). See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html">Publishing Neptune logs
   *       to Amazon CloudWatch logs</a>.</p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>This data type is used as a response element in the <code>ModifyDBCluster</code> operation and
   *       contains changes that will be applied during the next maintenance window.</p>
   */
  PendingModifiedValues?: ClusterPendingModifiedValues;

  /**
   * @public
   * <p>Indicates whether or not the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>If set to <code>true</code>, the DB cluster can be cloned across accounts.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * @public
   * <p>Time at which the DB cluster will be automatically restarted.</p>
   */
  AutomaticRestartTime?: Date;

  /**
   * @public
   * <p>Shows the scaling configuration for a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;

  /**
   * @public
   * <p>Contains a user-supplied global database cluster identifier.
   *       This identifier is the unique key that identifies a global database.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * @public
   * <p>The next time you can modify the DB cluster to use the <code>iopt1</code> storage type.</p>
   */
  IOOptimizedNextAllowedModificationTime?: Date;

  /**
   * @public
   * <p>The storage type associated with the DB cluster.</p>
   */
  StorageType?: string;
}

/**
 * @public
 */
export interface CreateDBClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 * <p>User already has a DB cluster with the given identifier.</p>
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
 * @public
 * <p>
 *             <i>DBClusterParameterGroupName</i> does not refer to an
 *       existing DB Cluster parameter group.</p>
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
 * @public
 * <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
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
 * @public
 * <p>Subnets in the DB subnet group should cover at least two Availability
 *       Zones unless there is only one Availability Zone.</p>
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
 * @public
 * <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
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
 * @public
 * <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster. </p>
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
 * @public
 * <p>There is insufficient storage available for the current action. You may
 *        be able to resolve this error by updating your subnet group to use different
 *        Availability Zones that have more storage available.</p>
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
 * @public
 * <p>The specified DB instance is not in the <i>available</i> state.</p>
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
 * @public
 * <p>The DB subnet group cannot be deleted because it is in use.</p>
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
 * @public
 * <p>The global cluster is in an invalid state and can't perform the requested operation. </p>
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
 * @public
 * <p>The requested subnet is invalid, or multiple subnets were requested that are
 *       not all in a common VPC.</p>
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
 * @public
 * <p>DB subnet group does not cover all Availability Zones after it is created
 *       because users' change.</p>
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
 * @public
 * <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
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
   * @public
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier to use for the new endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType: string | undefined;

  /**
   * @public
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * @public
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * @public
   * <p>The tags to be assigned to the Amazon Neptune resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
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
 */
export interface CreateDBClusterEndpointOutput {
  /**
   * @public
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * @public
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   */
  DBClusterEndpointResourceIdentifier?: string;

  /**
   * @public
   * <p>The DNS address of the endpoint.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * @public
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *       <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * @public
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * @public
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

/**
 * @public
 * <p>The specified custom endpoint cannot be created because it already exists.</p>
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
 * @public
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
 * @public
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * @public
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
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * @public
   * <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated
   *       with one and only one DB cluster parameter group family, and can be applied only to a DB
   *       cluster running a database engine and engine version compatible with that DB cluster parameter
   *       group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * @public
   * <p>The description for the DB cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the new DB cluster parameter group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDBClusterParameterGroupResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

/**
 * @public
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * @public
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
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * @public
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
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the DB cluster snapshot.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDBClusterSnapshotResult {
  /**
   * @public
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

/**
 * @public
 * <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p>
 *          <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>
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
   * @public
   * <p>Not supported.</p>
   */
  DBName?: string;

  /**
   * @public
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
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>.
   *       Not all DB instance classes are available in all Amazon Regions.</p>
   */
  DBInstanceClass: string | undefined;

  /**
   * @public
   * <p>The name of the database engine to be used for this instance.</p>
   *          <p>Valid Values: <code>neptune</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *          <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: string[];

  /**
   * @public
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB
   *       cluster. For more information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p> The EC2 Availability Zone that the DB instance is created in</p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Region.</p>
   *          <p> Example: <code>us-east-1d</code>
   *          </p>
   *          <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is
   *       set to <code>true</code>. The specified Availability Zone must be in the same Amazon Region as
   *       the current endpoint.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>A DB subnet group to associate with this DB instance.</p>
   *          <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>The time range each week during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region, occurring on a random day of the week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
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
   */
  DBParameterGroupName?: string;

  /**
   * @public
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
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p> The daily time range during which automated backups are created.</p>
   *          <p>Not applicable. The daily time range for creating automated backups is managed by the DB
   *       cluster. For more information, see <a>CreateDBCluster</a>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   *          <p>Type: Integer</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone
   *       parameter if the MultiAZ parameter is set to true.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The version number of the database engine to use. Currently, setting this
   *       parameter has no effect.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Indicates that minor engine upgrades are applied automatically to the DB instance during
   *       the maintenance window.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>License model information for this DB instance.</p>
   *          <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *       <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially
   *       allocated for the DB instance.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>The tags to assign to the new instance.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The identifier of the DB cluster that the instance will belong to.</p>
   *          <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p>
   *          <p>Type: String</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>Not applicable. Storage is managed by the DB Cluster.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * @public
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * @public
   * <p>Specifies whether the DB instance is encrypted.</p>
   *          <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more
   *       information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: false</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
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
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specify the Active Directory Domain to create the instance in.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise
   *       false. The default is false.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default
   *       is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set
   *       <code>MonitoringInterval</code> to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * @public
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to
   *       Amazon CloudWatch Logs. For example,
   *       <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a
   *       <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * @public
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory
   *       Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * @public
   * <p>A value that specifies the order in which an Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.
   *       </p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * @public
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>Not supported by Neptune (ignored).</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * @public
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   *          <p>DB instances in a DB cluster can be deleted even when deletion
   *       protection is enabled in their parent DB cluster.</p>
   */
  DeletionProtection?: boolean;
}

/**
 * @public
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
 */
export interface DBParameterGroupStatus {
  /**
   * @public
   * <p>The name of the DP parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * @public
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

/**
 * @public
 * <p>Specifies membership in a designated DB security group.</p>
 */
export interface DBSecurityGroupMembership {
  /**
   * @public
   * <p>The name of the DB security group.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * @public
   * <p>The status of the DB security group.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Specifies an Availability Zone.</p>
 */
export interface AvailabilityZone {
  /**
   * @public
   * <p>The name of the availability zone.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Specifies a subnet.</p>
 *          <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
 */
export interface Subnet {
  /**
   * @public
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * @public
   * <p>Specifies the EC2 Availability Zone that the subnet is in.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * @public
   * <p>Specifies the status of the subnet.</p>
   */
  SubnetStatus?: string;
}

/**
 * @public
 * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
 */
export interface DBSubnetGroup {
  /**
   * @public
   * <p>The name of the DB subnet group.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>Provides the description of the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * @public
   * <p>Provides the VpcId of the DB subnet group.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Provides the status of the DB subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * @public
   * <p> Contains a list of <a>Subnet</a> elements.</p>
   */
  Subnets?: Subnet[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   */
  DBSubnetGroupArn?: string;
}

/**
 * @public
 * <p>An Active Directory Domain membership record associated with a DB instance.</p>
 */
export interface DomainMembership {
  /**
   * @public
   * <p>The identifier of the Active Directory Domain.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The status of the DB instance's Active Directory Domain membership, such as joined,
   *       pending-join, failed etc).</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The fully qualified domain name of the Active Directory Domain.</p>
   */
  FQDN?: string;

  /**
   * @public
   * <p>The name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  IAMRoleName?: string;
}

/**
 * @public
 * <p>Specifies a connection endpoint.</p>
 *          <p>For the data structure that represents Amazon Neptune DB cluster endpoints,
 *       see <code>DBClusterEndpoint</code>.</p>
 */
export interface Endpoint {
  /**
   * @public
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;
}

/**
 * @public
 * <p>Not supported by Neptune.</p>
 */
export interface OptionGroupMembership {
  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  OptionGroupName?: string;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>This data type is used as a response element in the <a>ModifyDBInstance</a>
 *       action.</p>
 */
export interface PendingModifiedValues {
  /**
   * @public
   * <p> Contains the new <code>DBInstanceClass</code> for the DB instance that will be applied or
   *       is currently being applied.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p> Contains the new <code>AllocatedStorage</code> size for the DB instance that will be
   *       applied or is currently being applied.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
   * <p>Specifies the pending port for the DB instance.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or is
   *       currently being applied.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the DB instance that will be
   *       applied or is currently being applied.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>Specifies the identifier of the CA certificate for the DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * @public
   * <p>The new DB subnet group for the DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>This <code>PendingCloudwatchLogsExports</code> structure specifies
   *       pending changes to which CloudWatch logs are enabled and which are disabled.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
}

/**
 * @public
 * <p>Provides a list of status information for a DB instance.</p>
 */
export interface DBInstanceStatusInfo {
  /**
   * @public
   * <p>This value is currently "read replication."</p>
   */
  StatusType?: string;

  /**
   * @public
   * <p>Boolean value that is true if the instance is operating normally, or false if the instance
   *       is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * @public
   * <p>Status of the DB instance. For a StatusType of read replica, the values can be
   *       replicating, error, stopped, or terminated.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Details of the error if there is an error for the instance. If the instance is not in an
   *       error state, this value is blank.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Contains the details of an Amazon Neptune DB instance.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
 */
export interface DBInstance {
  /**
   * @public
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *       identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>Provides the name of the database engine to be used for this DB instance.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>The database name.</p>
   */
  DBName?: string;

  /**
   * @public
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>Provides the date and time the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * @public
   * <p> Specifies the daily time range during which automated backups are created if automated
   *       backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p> Provides List of DB security group elements containing only
   *       <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.</p>
   */
  DBSecurityGroups?: DBSecurityGroupMembership[];

  /**
   * @public
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @public
   * <p>Provides the list of DB parameter groups applied to this DB instance.</p>
   */
  DBParameterGroups?: DBParameterGroupStatus[];

  /**
   * @public
   * <p>Specifies the name of the Availability Zone the DB instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>Specifies information on the subnet group associated with the DB instance, including the
   *       name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * @public
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Specifies that changes to the DB instance are pending. This element is only included when
   *       changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * @public
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * @public
   * <p>Specifies if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>Contains the identifier of the source DB instance if this DB instance is a Read
   *       Replica.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB
   *       instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * @public
   * <p>Contains one or more identifiers of DB clusters that are Read Replicas of this DB
   *       instance.</p>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * @public
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupMemberships?: OptionGroupMembership[];

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * @public
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with
   *       multi-AZ support.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>The status of a Read Replica. If the instance is not a Read Replica, this is blank.</p>
   */
  StatusInfos?: DBInstanceStatusInfo[];

  /**
   * @public
   * <p>Specifies the storage type associated with DB instance.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The ARN from the key store with which the instance is associated for TDE
   *       encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * @public
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *       cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * @public
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *       the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p> Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Region-unique, immutable identifier for the DB instance. This identifier is found
   *       in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB instance is accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * @public
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * @public
   * <p>Not supported</p>
   */
  DomainMemberships?: DomainMembership[];

  /**
   * @public
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB
   *       instance.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the
   *       Enhanced Monitoring metrics data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * @public
   * <p>The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to
   *       Amazon CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * @public
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.
   *    </p>
   */
  PromotionTier?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * @public
   * <p>Not supported.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>True if Amazon Identity and Access Management (IAM) authentication is enabled, and otherwise
   *       false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * @public
   * <p>A list of log types that this DB instance is configured to export to CloudWatch
   *       Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>Indicates whether or not the DB instance has deletion protection enabled.
   *       The instance can't be deleted when deletion protection is enabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;
}

/**
 * @public
 */
export interface CreateDBInstanceResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   */
  DBInstance?: DBInstance;
}

/**
 * @public
 * <p>User already has a DB instance with the given identifier.</p>
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
 * @public
 * <p>
 *             <i>DBSecurityGroupName</i> does not refer
 *       to an existing DB security group.</p>
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
 * @public
 * <p>
 *             <i>Domain</i> does not refer to an existing Active Directory Domain.</p>
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
 * @public
 * <p>Request would result in user exceeding the allowed number of DB instances.</p>
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
 * @public
 * <p>Specified DB instance class is not available in the specified Availability Zone.</p>
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
 * @public
 * <p>The designated option group could not be found.</p>
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
 * @public
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
 * @public
 * <p>
 *             <i>StorageType</i> specified cannot be associated with the DB Instance.</p>
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
   * @public
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
   */
  DBParameterGroupName: string | undefined;

  /**
   * @public
   * <p>The DB parameter group family name. A DB parameter group can be associated with one and
   *       only one DB parameter group family, and can be applied only to a DB instance running a
   *       database engine and engine version compatible with that DB parameter group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * @public
   * <p>The description for the DB parameter group.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the new DB parameter group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDBParameterGroupResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
   */
  DBParameterGroup?: DBParameterGroup;
}

/**
 * @public
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * @public
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces,
   *       or hyphens. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * @public
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * @public
   * <p>The EC2 Subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the new DB subnet group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDBSubnetGroupResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

/**
 * @public
 * <p>
 *             <i>DBSubnetGroupName</i> is already used by an existing DB subnet group.</p>
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
 * @public
 * <p>Request would result in user exceeding the allowed number of DB subnet groups.</p>
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
 * @public
 * <p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>
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
   * @public
   * <p>The name of the subscription.</p>
   *          <p>Constraints: The name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is
   *       created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * @public
   * <p>The type of source that is generating the events. For example, if you want to be notified
   *       of events generated by a DB instance, you would set this parameter to db-instance. if this
   *       value is not specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> |
   *       <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> |
   *       <code>db-cluster-snapshot</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * @public
   * <p> A list of event categories for a SourceType that you want to subscribe to. You can see a
   *       list of the categories for a given SourceType by using the
   *       <b>DescribeEventCategories</b> action.</p>
   */
  EventCategories?: string[];

  /**
   * @public
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
   */
  SourceIds?: string[];

  /**
   * @public
   * <p> A Boolean value; set to <b>true</b> to activate the
   *       subscription, set to <b>false</b> to create the subscription but not
   *       active it.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The tags to be applied to the new event subscription.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateEventSubscriptionResult {
  /**
   * @public
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>You have exceeded the number of events you can subscribe to.</p>
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
 * @public
 * <p>The SNS topic is invalid.</p>
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
 * @public
 * <p>There is no SNS authorization.</p>
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
 * @public
 * <p>The ARN of the SNS topic could not be found.</p>
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
 * @public
 * <p>This subscription already exists.</p>
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
 * @public
 * <p>The designated subscription category could not be found.</p>
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
   * @public
   * <p>The cluster identifier of the new global database cluster.</p>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>(<i>Optional</i>) The Amazon Resource Name (ARN) of
   *       an existing Neptune DB cluster to use as the primary cluster of the new
   *       global database.</p>
   */
  SourceDBClusterIdentifier?: string;

  /**
   * @public
   * <p>The name of the database engine to be used in the global database.</p>
   *          <p>Valid values: <code>neptune</code>
   *          </p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The Neptune engine version to be used by the global database.</p>
   *          <p>Valid values: <code>1.2.0.0</code> or above.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The deletion protection setting for the new global database.
   *       The global database can't be deleted when deletion protection is
   *       enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>The storage encryption setting for the new global database
   *       cluster.</p>
   */
  StorageEncrypted?: boolean;
}

/**
 * @public
 * <p>
 *     A data structure with information about any primary and
 *     secondary clusters associated with an Neptune global database.
 *   </p>
 */
export interface GlobalClusterMember {
  /**
   * @public
   * <p>
   *     The Amazon Resource Name (ARN) for each Neptune cluster.
   *   </p>
   */
  DBClusterArn?: string;

  /**
   * @public
   * <p>
   *     The Amazon Resource Name (ARN) for each read-only secondary cluster
   *     associated with the Neptune global database.
   *   </p>
   */
  Readers?: string[];

  /**
   * @public
   * <p>
   *     Specifies whether the Neptune cluster is the primary cluster
   *     (that is, has read-write capability) for the Neptune global
   *     database with which it is associated.
   *   </p>
   */
  IsWriter?: boolean;
}

/**
 * @public
 * <p>Contains the details of an Amazon Neptune global database.</p>
 *          <p>This data type is used as a response element for the
 *       <a>CreateGlobalCluster</a>,
 *       <a>DescribeGlobalClusters</a>,
 *       <a>ModifyGlobalCluster</a>,
 *       <a>DeleteGlobalCluster</a>,
 *       <a>FailoverGlobalCluster</a>, and
 *       <a>RemoveFromGlobalCluster</a> actions.</p>
 */
export interface GlobalCluster {
  /**
   * @public
   * <p>Contains a user-supplied global database cluster identifier. This identifier
   *       is the unique key that identifies a global database.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * @public
   * <p>An immutable identifier for the global database that is unique within in all
   *       regions. This identifier is found in CloudTrail log entries whenever the KMS
   *       key for the DB cluster is accessed.</p>
   */
  GlobalClusterResourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the global database.</p>
   */
  GlobalClusterArn?: string;

  /**
   * @public
   * <p>Specifies the current state of this global database.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The Neptune database engine used by the global database
   *       (<code>"neptune"</code>).</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The Neptune engine version used by the global database.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The storage encryption setting for the global database.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>The deletion protection setting for the global database.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>A list of cluster ARNs and instance ARNs for all the DB clusters
   *         that are part of the global database.</p>
   */
  GlobalClusterMembers?: GlobalClusterMember[];
}

/**
 * @public
 */
export interface CreateGlobalClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
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
 * @public
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
 * @public
 */
export interface DeleteDBClusterMessage {
  /**
   * @public
   * <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  SkipFinalSnapshot?: boolean;

  /**
   * @public
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
   */
  FinalDBSnapshotIdentifier?: string;
}

/**
 * @public
 */
export interface DeleteDBClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
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
 * @public
 */
export interface DeleteDBClusterEndpointMessage {
  /**
   * @public
   * <p>The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;
}

/**
 * @public
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
 */
export interface DeleteDBClusterEndpointOutput {
  /**
   * @public
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * @public
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   */
  DBClusterEndpointResourceIdentifier?: string;

  /**
   * @public
   * <p>The DNS address of the endpoint.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * @public
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *       <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * @public
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * @public
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

/**
 * @public
 * <p>The requested operation cannot be performed on the endpoint while the endpoint is in this state.</p>
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
   * @public
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
   */
  DBClusterParameterGroupName: string | undefined;
}

/**
 * @public
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting to
 *       delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
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
   * @public
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing DB cluster snapshot in the
   *       <code>available</code> state.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterSnapshotResult {
  /**
   * @public
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

/**
 * @public
 * <p>
 *             <i>DBSnapshotIdentifier</i> is already used by an existing snapshot.</p>
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
   * @public
   * <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DB instance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * @public
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
   */
  SkipFinalSnapshot?: boolean;

  /**
   * @public
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
   */
  FinalDBSnapshotIdentifier?: string;
}

/**
 * @public
 */
export interface DeleteDBInstanceResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   */
  DBInstance?: DBInstance;
}

/**
 * @public
 */
export interface DeleteDBParameterGroupMessage {
  /**
   * @public
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
   */
  DBParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBSubnetGroupMessage {
  /**
   * @public
   * <p>The name of the database subnet group to delete.</p>
   *          <note>
   *             <p>You can't delete the default subnet group.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;
}

/**
 * @public
 * <p>The DB subnet is not in the <i>available</i> state.</p>
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
   * @public
   * <p>The name of the event notification subscription you want to delete.</p>
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionResult {
  /**
   * @public
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>The event subscription is in an invalid state.</p>
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
   * @public
   * <p>The cluster identifier of the global database cluster being deleted.</p>
   */
  GlobalClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
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
 */
export interface DBClusterEndpoint {
  /**
   * @public
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * @public
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   */
  DBClusterEndpointResourceIdentifier?: string;

  /**
   * @public
   * <p>The DNS address of the endpoint.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * @public
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *       <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * @public
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * @public
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

/**
 * @public
 */
export interface DBClusterEndpointMessage {
  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterEndpoints</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Contains the details of the endpoints associated with the cluster
   *       and matching any filter conditions.</p>
   */
  DBClusterEndpoints?: DBClusterEndpoint[];
}

/**
 * @public
 * <p>This type is not currently supported.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterEndpointsMessage {
  /**
   * @public
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>The identifier of the endpoint to describe. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * @public
   * <p>A set of name-value pairs that define which endpoints to include in the output.
   *       The filters are specified as name-value pairs, in the format
   *       <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>.
   *       <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>.
   *       <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>.
   *       <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>.
   *       <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>.
   *     </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *       a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterEndpoints</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DBClusterParameterGroupsMessage {
  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A list of DB cluster parameter groups.</p>
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[];
}

/**
 * @public
 */
export interface DescribeDBClusterParameterGroupsMessage {
  /**
   * @public
   * <p>The name of a specific DB cluster parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
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
 * @public
 * <p>Specifies a parameter.</p>
 */
export interface Parameter {
  /**
   * @public
   * <p>Specifies the name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * @public
   * <p>Specifies the value of the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * @public
   * <p>Provides a description of the parameter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Indicates the source of the parameter value.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>Specifies the engine specific parameters type.</p>
   */
  ApplyType?: string;

  /**
   * @public
   * <p>Specifies the valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * @public
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * @public
   * <p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be
   *       modified. Some parameters have security or operational implications that prevent them from
   *       being changed.</p>
   */
  IsModifiable?: boolean;

  /**
   * @public
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;

  /**
   * @public
   * <p>Indicates when to apply parameter updates.</p>
   */
  ApplyMethod?: ApplyMethod;
}

/**
 * @public
 */
export interface DBClusterParameterGroupDetails {
  /**
   * @public
   * <p>Provides a list of parameters for the DB cluster parameter group.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous DescribeDBClusterParameters request.
   *       If this parameter is specified, the response includes only records beyond the marker, up to
   *       the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeDBClusterParametersMessage {
  /**
   * @public
   * <p>The name of a specific DB cluster parameter group to return parameter details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * @public
   * <p> A value that indicates to return only parameters for a specific source. Parameter sources
   *       can be <code>engine</code>, <code>service</code>, or <code>customer</code>.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DBClusterMessage {
  /**
   * @public
   * <p>A pagination token that can be used in a subsequent DescribeDBClusters request.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Contains a list of DB clusters for the user.</p>
   */
  DBClusters?: DBCluster[];
}

/**
 * @public
 */
export interface DescribeDBClustersMessage {
  /**
   * @public
   * <p>The user-supplied DB cluster identifier. If this parameter is specified, information from
   *       only the specific DB cluster is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous <a>DescribeDBClusters</a>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  /**
   * @public
   * <p>The identifier for the DB cluster snapshot to describe the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * @public
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p>
 *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore
 *       a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 */
export interface DBClusterSnapshotAttribute {
  /**
   * @public
   * <p>The name of the manual DB cluster snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of Amazon accounts that have
   *       permission to copy or restore the manual DB cluster snapshot. For more information, see the
   *       <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *       returns a list of IDs of the Amazon accounts that are authorized to copy or restore the manual DB
   *       cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster
   *       snapshot is public and available for any Amazon account to copy or restore.</p>
   */
  AttributeValues?: string[];
}

/**
 * @public
 * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
 *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
 *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 */
export interface DBClusterSnapshotAttributesResult {
  /**
   * @public
   * <p>The identifier of the manual DB cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * @public
   * <p>The list of attributes and values for the manual DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[];
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesResult {
  /**
   * @public
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
   *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

/**
 * @public
 */
export interface DBClusterSnapshotMessage {
  /**
   * @public
   * <p> An optional pagination token provided by a previous <a>DescribeDBClusterSnapshots</a> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Provides a list of DB cluster snapshots for the user.</p>
   */
  DBClusterSnapshots?: DBClusterSnapshot[];
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotsMessage {
  /**
   * @public
   * <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter
   *       can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This
   *       parameter is not case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
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
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * @public
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
   */
  SnapshotType?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>True to include shared manual DB cluster snapshots from other Amazon accounts that this Amazon
   *       account has been given permission to copy or restore, and otherwise false. The default is
   *       <code>false</code>.</p>
   *          <p>You can give an Amazon account permission to restore a manual DB cluster snapshot from
   *       another Amazon account by the <a>ModifyDBClusterSnapshotAttribute</a> API
   *       action.</p>
   */
  IncludeShared?: boolean;

  /**
   * @public
   * <p>True to include manual DB cluster snapshots that are public and can be copied or restored
   *       by any Amazon account, and otherwise false. The default is <code>false</code>. The default is
   *       false.</p>
   *          <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  IncludePublic?: boolean;
}

/**
 * @public
 * <p>Specifies a character set.</p>
 */
export interface CharacterSet {
  /**
   * @public
   * <p>The name of the character set.</p>
   */
  CharacterSetName?: string;

  /**
   * @public
   * <p>The description of the character set.</p>
   */
  CharacterSetDescription?: string;
}

/**
 * @public
 * <p>A time zone associated with a <a>DBInstance</a>.</p>
 */
export interface Timezone {
  /**
   * @public
   * <p>The name of the time zone.</p>
   */
  TimezoneName?: string;
}

/**
 * @public
 * <p>The version of the database engine that a DB instance can be upgraded to.</p>
 */
export interface UpgradeTarget {
  /**
   * @public
   * <p>The name of the upgrade target database engine.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The version number of the upgrade target database engine.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The version of the database engine that a DB instance can be upgraded to.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A value that indicates whether the target version is applied to any source DB instances
   *       that have AutoMinorVersionUpgrade set to true.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * @public
   * <p>A value that indicates whether a database engine is upgraded to a major version.</p>
   */
  IsMajorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>A value that indicates whether you can use Neptune global databases with the target engine version.</p>
   */
  SupportsGlobalDatabases?: boolean;
}

/**
 * @public
 * <p> This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.</p>
 */
export interface DBEngineVersion {
  /**
   * @public
   * <p>The name of the database engine.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The version number of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The name of the DB parameter group family for the database engine.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * @public
   * <p>The description of the database engine.</p>
   */
  DBEngineDescription?: string;

  /**
   * @public
   * <p>The description of the database engine version.</p>
   */
  DBEngineVersionDescription?: string;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  DefaultCharacterSet?: CharacterSet;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  SupportedCharacterSets?: CharacterSet[];

  /**
   * @public
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: UpgradeTarget[];

  /**
   * @public
   * <p>A list of the time zones supported by this engine for the <code>Timezone</code> parameter
   *       of the <code>CreateDBInstance</code> action.</p>
   */
  SupportedTimezones?: Timezone[];

  /**
   * @public
   * <p>The types of logs that the database engine has available for export to CloudWatch
   *       Logs.</p>
   */
  ExportableLogTypes?: string[];

  /**
   * @public
   * <p>A value that indicates whether the engine version supports exporting the log types
   *       specified by ExportableLogTypes to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * @public
   * <p>Indicates whether the database engine version supports read replicas.</p>
   */
  SupportsReadReplica?: boolean;

  /**
   * @public
   * <p>A value that indicates whether you can use Aurora global databases with a specific DB engine version.</p>
   */
  SupportsGlobalDatabases?: boolean;
}

/**
 * @public
 */
export interface DBEngineVersionMessage {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p> A list of <code>DBEngineVersion</code> elements.</p>
   */
  DBEngineVersions?: DBEngineVersion[];
}

/**
 * @public
 */
export interface DescribeDBEngineVersionsMessage {
  /**
   * @public
   * <p>The database engine to return.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The database engine version to return.</p>
   *          <p>Example: <code>5.1.49</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The name of a specific DB parameter group family to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBParameterGroupFamily.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupFamily?: string;

  /**
   * @public
   * <p>Not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more than the
   *       <code>MaxRecords</code> value is available, a pagination token called a marker is included in
   *       the response so that the following results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Indicates that only the default version of the specified engine or engine and major
   *       version combination is returned.</p>
   */
  DefaultOnly?: boolean;

  /**
   * @public
   * <p>If this parameter is specified and the requested engine supports the
   *       <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response
   *       includes a list of supported character sets for each engine version.</p>
   */
  ListSupportedCharacterSets?: boolean;

  /**
   * @public
   * <p>If this parameter is specified and the requested engine supports the <code>TimeZone</code>
   *       parameter for <code>CreateDBInstance</code>, the response includes a list of supported time
   *       zones for each engine version.</p>
   */
  ListSupportedTimezones?: boolean;
}

/**
 * @public
 */
export interface DBInstanceMessage {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * @public
   * <p> A list of <a>DBInstance</a> instances.</p>
   */
  DBInstances?: DBInstance[];
}

/**
 * @public
 */
export interface DescribeDBInstancesMessage {
  /**
   * @public
   * <p>The user-supplied instance identifier. If this parameter is specified, information from
   *       only the specific DB instance is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous <code>DescribeDBInstances</code>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DBParameterGroupsMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A list of <a>DBParameterGroup</a> instances.</p>
   */
  DBParameterGroups?: DBParameterGroup[];
}

/**
 * @public
 */
export interface DescribeDBParameterGroupsMessage {
  /**
   * @public
   * <p>The name of a specific DB parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DBParameterGroupDetails {
  /**
   * @public
   * <p>A list of <a>Parameter</a> values.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeDBParametersMessage {
  /**
   * @public
   * <p>The name of a specific DB parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * @public
   * <p>The parameter types to return.</p>
   *          <p>Default: All parameter types returned</p>
   *          <p>Valid Values: <code>user | system | engine-default</code>
   *          </p>
   */
  Source?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous <code>DescribeDBParameters</code>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DBSubnetGroupMessage {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p> A list of <a>DBSubnetGroup</a> instances.</p>
   */
  DBSubnetGroups?: DBSubnetGroup[];
}

/**
 * @public
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * @public
   * <p>The name of the DB subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous DescribeDBSubnetGroups request. If
   *       this parameter is specified, the response includes only records beyond the marker, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * @public
   * <p>The name of the DB cluster parameter group family to return engine parameter information
   *       for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified,
   *       the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
 */
export interface EngineDefaults {
  /**
   * @public
   * <p>Specifies the name of the DB parameter group family that the engine default parameters
   *       apply to.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * @public
   * <p> An optional pagination token provided by a previous EngineDefaults request. If this
   *       parameter is specified, the response includes only records beyond the marker, up to the value
   *       specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 */
export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * @public
   * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
   */
  EngineDefaults?: EngineDefaults;
}

/**
 * @public
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * @public
   * <p>The name of the DB parameter group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * @public
   * <p>Not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeEngineDefaultParametersResult {
  /**
   * @public
   * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
   */
  EngineDefaults?: EngineDefaults;
}

/**
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * @public
   * <p>The type of source that is generating the events.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.</p>
 */
export interface EventCategoriesMap {
  /**
   * @public
   * <p>The source type that the returned categories belong to</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>The event categories for the specified source type</p>
   */
  EventCategories?: string[];
}

/**
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * @public
   * <p>A list of EventCategoriesMap data types.</p>
   */
  EventCategoriesMapList?: EventCategoriesMap[];
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
   * @public
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
   */
  SourceIdentifier?: string;

  /**
   * @public
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *       returned.</p>
   */
  SourceType?: SourceType;

  /**
   * @public
   * <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *       For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p> The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *       For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The number of minutes to retrieve events for.</p>
   *          <p>Default: 60</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>A list of event categories that trigger notifications for a event notification
   *       subscription.</p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous DescribeEvents request. If this
   *       parameter is specified, the response includes only records beyond the marker, up to the value
   *       specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p> This data type is used as a response element in the <a>DescribeEvents</a>
 *       action.</p>
 */
export interface Event {
  /**
   * @public
   * <p>Provides the identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * @public
   * <p>Specifies the source type for this event.</p>
   */
  SourceType?: SourceType;

  /**
   * @public
   * <p>Provides the text of this event.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>Specifies the category for the event.</p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p>Specifies the date and time of the event.</p>
   */
  Date?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the event.</p>
   */
  SourceArn?: string;
}

/**
 * @public
 */
export interface EventsMessage {
  /**
   * @public
   * <p> An optional pagination token provided by a previous Events request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * @public
   * <p> A list of <a>Event</a> instances.</p>
   */
  Events?: Event[];
}

/**
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * @public
   * <p>The name of the event notification subscription you want to describe.</p>
   */
  SubscriptionName?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface EventSubscriptionsMessage {
  /**
   * @public
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A list of EventSubscriptions data types.</p>
   */
  EventSubscriptionsList?: EventSubscription[];
}

/**
 * @public
 */
export interface DescribeGlobalClustersMessage {
  /**
   * @public
   * <p>The user-supplied DB cluster identifier. If this parameter is specified,
   *       only information about the specified DB cluster is returned. This parameter
   *       is not case-sensitive.</p>
   *          <p>Constraints: If supplied, must match an existing DB cluster identifier.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records
   *       exist than the specified <code>MaxRecords</code> value, a pagination marker token
   *       is included in the response that you can use to retrieve the remaining results.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>(<i>Optional</i>) A pagination token returned by a previous
   *       call to <code>DescribeGlobalClusters</code>. If this parameter is specified,
   *       the response will only include records beyond the marker, up to the number
   *       specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface GlobalClustersMessage {
  /**
   * @public
   * <p>A pagination token. If this parameter is returned in the response,
   *       more records are available, which can be retrieved by one or more additional
   *       calls to <code>DescribeGlobalClusters</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The list of global clusters and instances returned by this request.</p>
   */
  GlobalClusters?: GlobalCluster[];
}

/**
 * @public
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * @public
   * <p>The name of the engine to retrieve DB instance options for.</p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>The engine version filter value. Specify this parameter to show only the available
   *       offerings matching the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The DB instance class filter value. Specify this parameter to show only the available
   *       offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>The license model filter value. Specify this parameter to show only the available
   *       offerings matching the specified license model.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>The VPC filter value. Specify this parameter to show only the available VPC or non-VPC
   *       offerings.</p>
   */
  Vpc?: boolean;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Contains a list of available options for a DB instance.</p>
 *          <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
 */
export interface OrderableDBInstanceOption {
  /**
   * @public
   * <p>The engine type of a DB instance.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The engine version of a DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The DB instance class for a DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>The license model for a DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * @public
   * <p>Indicates whether a DB instance is Multi-AZ capable.</p>
   */
  MultiAZCapable?: boolean;

  /**
   * @public
   * <p>Indicates whether a DB instance can have a Read Replica.</p>
   */
  ReadReplicaCapable?: boolean;

  /**
   * @public
   * <p>Indicates whether a DB instance is in a VPC.</p>
   */
  Vpc?: boolean;

  /**
   * @public
   * <p>Indicates whether a DB instance supports encrypted storage.</p>
   */
  SupportsStorageEncryption?: boolean;

  /**
   * @public
   * <p>Indicates the storage type for a DB instance.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>Indicates whether a DB instance supports provisioned IOPS.</p>
   */
  SupportsIops?: boolean;

  /**
   * @public
   * <p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60
   *       seconds.</p>
   */
  SupportsEnhancedMonitoring?: boolean;

  /**
   * @public
   * <p>Indicates whether a DB instance supports IAM database authentication.</p>
   */
  SupportsIAMDatabaseAuthentication?: boolean;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  SupportsPerformanceInsights?: boolean;

  /**
   * @public
   * <p>Minimum storage size for a DB instance.</p>
   */
  MinStorageSize?: number;

  /**
   * @public
   * <p>Maximum storage size for a DB instance.</p>
   */
  MaxStorageSize?: number;

  /**
   * @public
   * <p>Minimum total provisioned IOPS for a DB instance.</p>
   */
  MinIopsPerDbInstance?: number;

  /**
   * @public
   * <p>Maximum total provisioned IOPS for a DB instance.</p>
   */
  MaxIopsPerDbInstance?: number;

  /**
   * @public
   * <p>Minimum provisioned IOPS per GiB for a DB instance.</p>
   */
  MinIopsPerGib?: number;

  /**
   * @public
   * <p>Maximum provisioned IOPS per GiB for a DB instance.</p>
   */
  MaxIopsPerGib?: number;

  /**
   * @public
   * <p>A value that indicates whether you can use Neptune global databases with a specific combination of other DB engine attributes.</p>
   */
  SupportsGlobalDatabases?: boolean;
}

/**
 * @public
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * @public
   * <p>An <a>OrderableDBInstanceOption</a> structure
   *       containing information about orderable options for the DB instance.</p>
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous OrderableDBInstanceOptions request.
   *       If this parameter is specified, the response includes only records beyond the marker, up to
   *       the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * @public
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   */
  ResourceIdentifier?: string;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to a number of records specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * @public
   * <p>A list of the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous
   *       <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to a number of records specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsMessage {
  /**
   * @public
   * <p>The customer identifier or the ARN of your DB instance.</p>
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * @public
 * <p>A range of double values.</p>
 */
export interface DoubleRange {
  /**
   * @public
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * @public
   * <p>The maximum value in the range.</p>
   */
  To?: number;
}

/**
 * @public
 * <p>A range of integer values.</p>
 */
export interface Range {
  /**
   * @public
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * @public
   * <p>The maximum value in the range.</p>
   */
  To?: number;

  /**
   * @public
   * <p>The step value for the range. For example, if you have a range of 5,000 to 10,000, with a
   *       step value of 1,000, the valid values start at 5,000 and step up by 1,000. Even though 7,500
   *       is within the range, it isn't a valid value for the range. The valid values are 5,000, 6,000,
   *       7,000, 8,000...</p>
   */
  Step?: number;
}

/**
 * @public
 * <p>Information about valid modifications that you can make to your DB
 *       instance.</p>
 *          <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
 */
export interface ValidStorageOptions {
  /**
   * @public
   * <p>The valid storage types for your DB instance. For example, gp2, io1.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The valid range of storage in gibibytes. For example, 100 to 16384.</p>
   */
  StorageSize?: Range[];

  /**
   * @public
   * <p>The valid range of provisioned IOPS. For example, 1000-20000.</p>
   */
  ProvisionedIops?: Range[];

  /**
   * @public
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier. For example, 3-10,
   *       which means that provisioned IOPS can be between 3 and 10 times storage.</p>
   */
  IopsToStorageRatio?: DoubleRange[];
}

/**
 * @public
 * <p>Information about valid modifications that you can make to your DB instance. Contains the
 *       result of a successful call to the <a>DescribeValidDBInstanceModifications</a>
 *       action. You can use this information when you call <a>ModifyDBInstance</a>.
 *    </p>
 */
export interface ValidDBInstanceModificationsMessage {
  /**
   * @public
   * <p>Valid storage options for your DB instance.</p>
   */
  Storage?: ValidStorageOptions[];
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsResult {
  /**
   * @public
   * <p>Information about valid modifications that you can make to your DB instance. Contains the
   *       result of a successful call to the <a>DescribeValidDBInstanceModifications</a>
   *       action. You can use this information when you call <a>ModifyDBInstance</a>.
   *    </p>
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}

/**
 * @public
 */
export interface FailoverDBClusterMessage {
  /**
   * @public
   * <p>A DB cluster identifier to force a failover for. This parameter is not
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>The name of the instance to promote to the primary instance.</p>
   *          <p>You must specify the instance identifier for an Read Replica in the DB cluster. For
   *       example, <code>mydbcluster-replica1</code>.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

/**
 * @public
 */
export interface FailoverDBClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 */
export interface FailoverGlobalClusterMessage {
  /**
   * @public
   * <p>Identifier of the Neptune global database that should be failed over.
   *       The identifier is the unique key assigned by the user when the Neptune
   *       global database was created. In other words, it's the name of the global
   *       database that you want to fail over.</p>
   *          <p>Constraints: Must match the identifier of an existing Neptune global
   *       database.</p>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the secondary Neptune DB cluster
   *       that you want to promote to primary for the global database.</p>
   */
  TargetDbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * @public
   * <p>The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name
   *       (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface TagListMessage {
  /**
   * @public
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 * <p>The state of the DB security group does not allow deletion.</p>
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
 * @public
 * <p>The configuration setting for the log types to be enabled for export
 *       to CloudWatch Logs for a specific DB instance or DB cluster.</p>
 *          <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays
 *       determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
 *          <p>Valid log types are: <code>audit</code> (to publish audit logs) and
 *       <code>slowquery</code> (to publish slow-query logs). See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html">Publishing Neptune logs
 *       to Amazon CloudWatch logs</a>.</p>
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * @public
   * <p>The list of log types to enable.</p>
   */
  EnableLogTypes?: string[];

  /**
   * @public
   * <p>The list of log types to disable.</p>
   */
  DisableLogTypes?: string[];
}

/**
 * @public
 */
export interface ModifyDBClusterMessage {
  /**
   * @public
   * <p>The DB cluster identifier for the cluster being modified. This parameter is not
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  NewDBClusterIdentifier?: string;

  /**
   * @public
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
   */
  ApplyImmediately?: boolean;

  /**
   * @public
   * <p>The number of days for which automated backups are retained. You must specify a minimum
   *       value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The port number on which the DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
   * <p>
   *             <i>Not supported by Neptune.</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * @public
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
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated
   *       Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region, occurring on a random day of the
   *       week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * @public
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs
   *       for a specific DB cluster. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/cloudwatch-logs.html#cloudwatch-logs-cli">Using the
   *       CLI to publish Neptune audit logs to CloudWatch Logs</a>.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * @public
   * <p>The version number of the database engine to which you want to upgrade. Changing this
   *       parameter results in an outage. The change is applied during the next maintenance window
   *       unless the <code>ApplyImmediately</code> parameter is set to true.</p>
   *          <p>For a list of valid engine versions, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases.html">Engine Releases for Amazon
   *       Neptune</a>, or call <a>DescribeDBEngineVersions</a>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>A value that indicates whether upgrades between different major versions are allowed.</p>
   *          <p>Constraints: You must set the allow-major-version-upgrade flag when providing an
   *       <code>EngineVersion</code> parameter that uses a different major version than the DB cluster's current
   *       version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * @public
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
   */
  DBInstanceParameterGroupName?: string;

  /**
   * @public
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;

  /**
   * @public
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>standard | iopt1</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  StorageType?: string;
}

/**
 * @public
 */
export interface ModifyDBClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 */
export interface ModifyDBClusterEndpointMessage {
  /**
   * @public
   * <p>The identifier of the endpoint to modify. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType?: string;

  /**
   * @public
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * @public
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];
}

/**
 * @public
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
 */
export interface ModifyDBClusterEndpointOutput {
  /**
   * @public
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * @public
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   */
  DBClusterEndpointResourceIdentifier?: string;

  /**
   * @public
   * <p>The DNS address of the endpoint.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * @public
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *       <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * @public
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * @public
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

/**
 * @public
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * @public
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
   */
  DBClusterParameterGroupName?: string;
}

/**
 * @public
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * @public
   * <p>The name of the DB cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * @public
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * @public
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *          <p>To manage authorization for other Amazon accounts to copy or restore a manual DB cluster
   *       snapshot, set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by
   *       <code>AttributeName</code>.</p>
   *          <p>To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this
   *       list to include one or more Amazon account IDs, or <code>all</code> to make the manual DB cluster
   *       snapshot restorable by any Amazon account. Do not add the <code>all</code> value for any manual
   *       DB cluster snapshots that contain private information that you don't want available to all Amazon
   *       accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * @public
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by
   *       <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other Amazon accounts to copy or restore a manual DB cluster
   *       snapshot, set this list to include one or more Amazon account identifiers, or <code>all</code> to
   *       remove authorization for any Amazon account to copy or restore the DB cluster snapshot. If you
   *       specify <code>all</code>, an Amazon account whose account ID is explicitly added to the
   *       <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>
   */
  ValuesToRemove?: string[];
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * @public
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
   *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

/**
 * @public
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
 * @public
 * <p>
 *             <i>CertificateIdentifier</i> does not refer to an existing certificate.</p>
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
 * @public
 * <p>The DB upgrade failed because a resource the DB depends on could not be modified.</p>
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
   * @public
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The new compute and memory capacity of the DB instance, for example,
   *       <code>db.m4.large</code>. Not all DB instance classes are available in all Amazon
   *       Regions.</p>
   *          <p>If you modify the DB instance class, an outage occurs during the change. The change is
   *       applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified
   *       as <code>true</code> for this request.</p>
   *          <p>Default: Uses existing setting</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>The new DB subnet group for the DB instance. You can use this parameter to move your DB
   *       instance to a different VPC.</p>
   *          <p>Changing the subnet group causes an outage during the change. The change is applied during
   *       the next maintenance window, unless you specify <code>true</code> for the
   *       <code>ApplyImmediately</code> parameter.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetGroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>A list of DB security groups to authorize on this DB instance. Changing this setting
   *       doesn't result in an outage and the change is asynchronously applied as soon as
   *       possible.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing DBSecurityGroups.</p>
   *             </li>
   *          </ul>
   */
  DBSecurityGroups?: string[];

  /**
   * @public
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
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>Specifies whether the modifications in this request and any pending modifications are
   *       asynchronously applied as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB instance.</p>
   *          <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied
   *       during the next maintenance window. Some parameter changes can cause an outage and are applied
   *       on the next call to <a>RebootDBInstance</a>, or the next
   *       failure reboot.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  ApplyImmediately?: boolean;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
   * <p>The name of the DB parameter group to apply to the DB instance. Changing this setting
   *       doesn't result in an outage. The parameter group name itself is changed immediately, but the
   *       actual parameter changes are not applied until you reboot the instance without failover. The
   *       db instance will NOT be rebooted automatically and the parameter changes will NOT be applied
   *       during the next maintenance window.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints: The DB parameter group must be in the same DB parameter group family as this
   *       DB instance.</p>
   */
  DBParameterGroupName?: string;

  /**
   * @public
   * <p>Not applicable. The retention period for automated backups is managed by the DB cluster.
   *       For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Default: Uses existing setting</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
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
   */
  PreferredBackupWindow?: string;

  /**
   * @public
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't
   *       result in an outage and the change is applied during the next maintenance window unless the
   *       <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The version number of the database engine to upgrade to. Currently, setting this
   *       parameter has no effect. To upgrade your database engine to the most recent release,
   *       use the <a>ApplyPendingMaintenanceAction</a> API.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Indicates that major version upgrades are allowed. Changing this parameter doesn't result
   *       in an outage and the change is asynchronously applied as soon as possible.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * @public
   * <p> Indicates that minor version upgrades are applied automatically to the DB instance during
   *       the maintenance window. Changing this parameter doesn't result in an outage except in the
   *       following case and the change is asynchronously applied as soon as possible. An outage will
   *       result if this parameter is set to <code>true</code> during the maintenance window, and a
   *       newer minor version is available, and Neptune has enabled auto patching for that engine
   *       version.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>Not supported by Neptune.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p>
   *          <p>Changing this setting doesn't result in an outage and the change is applied during the
   *       next maintenance window unless the <code>ApplyImmediately</code> parameter is set to
   *       <code>true</code> for this request.</p>
   *          <p>Default: Uses existing setting</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * @public
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
   */
  NewDBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Not supported.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * @public
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * @public
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * @public
   * <p>Not supported.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise
   *       false. The default is false.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default
   *       is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set
   *       <code>MonitoringInterval</code> to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * @public
   * <p>The port number on which the database accepts connections.</p>
   *          <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values
   *       specified for options in the option group for the DB instance.</p>
   *          <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless
   *       of the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   */
  DBPortNumber?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to
   *       Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a
   *       <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * @public
   * <p>Not supported</p>
   */
  DomainIAMRoleName?: string;

  /**
   * @public
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.</p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * @public
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>You can enable IAM database authentication for the following database engines</p>
   *          <p>Not applicable. Mapping Amazon IAM accounts to database accounts is managed by the DB
   *       cluster. For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * @public
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs
   *       for a specific DB instance or DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * @public
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.  See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;
}

/**
 * @public
 */
export interface ModifyDBInstanceResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   */
  DBInstance?: DBInstance;
}

/**
 * @public
 */
export interface DBParameterGroupNameMessage {
  /**
   * @public
   * <p>Provides the name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;
}

/**
 * @public
 */
export interface ModifyDBParameterGroupMessage {
  /**
   * @public
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * @public
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
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * @public
   * <p>The name for the DB subnet group. This value is stored as a lowercase string. You can't
   *       modify the default subnet group.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * @public
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * @public
   * <p>The EC2 subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

/**
 * @public
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
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * @public
   * <p>The name of the event notification subscription.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is
   *       created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The type of source that is generating the events. For example, if you want to be notified
   *       of events generated by a DB instance, you would set this parameter to db-instance. if this
   *       value is not specified, all events are returned.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p> A list of event categories for a SourceType that you want to subscribe to. You can see a
   *       list of the categories for a given SourceType
   *
   *       by using the <b>DescribeEventCategories</b> action.</p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p> A Boolean value; set to <b>true</b> to activate the
   *       subscription.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * @public
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 */
export interface ModifyGlobalClusterMessage {
  /**
   * @public
   * <p>The DB cluster identifier for the global cluster being modified. This parameter
   *       is not case-sensitive.</p>
   *          <p>Constraints: Must match the identifier of an existing global database cluster.</p>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  NewGlobalClusterIdentifier?: string;

  /**
   * @public
   * <p>Indicates whether the global database has deletion protection enabled. The
   *       global database cannot be deleted when deletion protection is enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>The version number of the database engine to which you want to upgrade.
   *       Changing this parameter will result in an outage. The change is applied during
   *       the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *          <p>To list all of the available Neptune engine versions, use the following command:</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *          <p>Constraints: You must allow major version upgrades if you specify a value
   *       for the <code>EngineVersion</code> parameter that is a different major version
   *       than the DB cluster's current version.</p>
   *          <p>If you upgrade the major version of a global database, the cluster and
   *       DB instance parameter groups are set to the default parameter groups for the
   *       new version, so you will need to apply any custom parameter groups after
   *       completing the upgrade.</p>
   */
  AllowMajorVersionUpgrade?: boolean;
}

/**
 * @public
 */
export interface ModifyGlobalClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterMessage {
  /**
   * @public
   * <p>Not supported.</p>
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 */
export interface RebootDBInstanceMessage {
  /**
   * @public
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * @public
   * <p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p>
   *          <p>Constraint: You can't specify <code>true</code> if the instance is not configured for
   *       MultiAZ.</p>
   */
  ForceFailover?: boolean;
}

/**
 * @public
 */
export interface RebootDBInstanceResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   */
  DBInstance?: DBInstance;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * @public
   * <p>The identifier of the Neptune global database from which to detach the
   *       specified Neptune DB cluster.</p>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) identifying the cluster to be detached
   *       from the Neptune global database cluster.</p>
   */
  DbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune global database.</p>
   *          <p>This data type is used as a response element for the
   *       <a>CreateGlobalCluster</a>,
   *       <a>DescribeGlobalClusters</a>,
   *       <a>ModifyGlobalCluster</a>,
   *       <a>DeleteGlobalCluster</a>,
   *       <a>FailoverGlobalCluster</a>, and
   *       <a>RemoveFromGlobalCluster</a> actions.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
 * <p>The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.</p>
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
   * @public
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for
   *       example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The name of the feature for the DB cluster that the IAM role is to be disassociated from.
   *       For the list of supported feature names, see <a>DescribeDBEngineVersions</a>.</p>
   */
  FeatureName?: string;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @public
   * <p>The name of the event notification subscription you want to remove a source identifier
   *       from.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p> The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security
   *       group.</p>
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @public
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * @public
   * <p>The Amazon Neptune resource that the tags are removed from. This value is an Amazon
   *       Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * @public
   * <p>The name of the DB cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * @public
   * <p>A value that is set to <code>true</code> to reset all parameters in the DB cluster
   *       parameter group to their default values, and <code>false</code> otherwise. You can't use this
   *       parameter if there is a list of parameter names specified for the <code>Parameters</code>
   *       parameter.</p>
   */
  ResetAllParameters?: boolean;

  /**
   * @public
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default
   *       values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set
   *       to <code>true</code>.</p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 */
export interface ResetDBParameterGroupMessage {
  /**
   * @public
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * @public
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters
   *       in the DB parameter group to default values.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  ResetAllParameters?: boolean;

  /**
   * @public
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and
   *       <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of
   *       the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20
   *       parameters can be modified in a single request.</p>
   *          <p>Valid Values (for Apply method): <code>pending-reboot</code>
   *          </p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 * <p>The DB cluster does not have enough capacity for the current operation.</p>
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
 * @public
 * <p>The state of the DB snapshot does not allow deletion.</p>
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
 * @public
 * <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
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
   * @public
   * <p>Provides the list of EC2 Availability Zones that instances in the restored DB cluster can
   *       be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
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
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *          <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster
   *       snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing Snapshot.</p>
   *             </li>
   *          </ul>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * @public
   * <p>The database engine to use for the new DB cluster.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>The version of the database engine to use for the new DB cluster.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>Not supported.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * @public
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The tags to be assigned to the restored DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
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
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * @public
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the restored DB cluster that is created.</i>
   *          </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;

  /**
   * @public
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *          <p>Valid values: <code>standard</code>, <code>iopt1</code>
   *          </p>
   *          <p>Default: <code>standard</code>
   *          </p>
   */
  StorageType?: string;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * @public
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
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  RestoreType?: string;

  /**
   * @public
   * <p>The identifier of the source DB cluster from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  RestoreToTime?: Date;

  /**
   * @public
   * <p>A value that is set to <code>true</code> to restore the DB cluster to the latest
   *       restorable backup time, and <code>false</code> otherwise.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is
   *       provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * @public
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * @public
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The tags to be applied to the restored DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
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
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * @public
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the
   *       <i>Amazon Neptune User Guide</i>.</p>
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;

  /**
   * @public
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *          <p>Valid values: <code>standard</code>, <code>iopt1</code>
   *          </p>
   *          <p>Default: <code>standard</code>
   *          </p>
   */
  StorageType?: string;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 */
export interface StartDBClusterMessage {
  /**
   * @public
   * <p>The DB cluster identifier of the Neptune DB cluster to be started.
   *       This parameter is stored as a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartDBClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 */
export interface StopDBClusterMessage {
  /**
   * @public
   * <p>The DB cluster identifier of the Neptune DB cluster to be stopped.
   *       This parameter is stored as a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDBClusterResult {
  /**
   * @public
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a>.</p>
   */
  DBCluster?: DBCluster;
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
