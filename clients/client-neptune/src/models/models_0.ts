import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface AddRoleToDBClusterMessage {
  /**
   * <p>The name of the DB cluster to associate the IAM role with.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster,
   *       for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the Neptune DB cluster that the IAM role is to be associated with.
   *       For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
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
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 */
export interface DBClusterNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterRoleAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterRoleAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterRoleAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterRoleQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterRoleQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterRoleQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The DB cluster is not in a valid state.</p>
 */
export interface InvalidDBClusterStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBClusterStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBClusterStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBClusterStateFault): any => ({
    ...obj,
  });
}

export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * <p>The name of the event notification subscription you want to add a source identifier
   *       to.</p>
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
 * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
 */
export interface EventSubscription {
  /**
   * <p>The Amazon customer account associated with the event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>The event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The topic ARN of the event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
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
   * <p>The time the event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;

  /**
   * <p>The source type for the event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * <p>A list of source IDs for the event notification subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>A list of event categories for the event notification subscription.</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>A Boolean value indicating if the subscription is enabled. True indicates the subscription
   *       is enabled.</p>
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
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
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
 * <p>The source could not be found.</p>
 */
export interface SourceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SourceNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SourceNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The designated subscription could not be found.</p>
 */
export interface SubscriptionNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SubscriptionNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SubscriptionNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscriptionNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode
   *       characters in length and can't be prefixed with "aws:" or "rds:". The string can only contain
   *       only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java
   *       regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Key?: string;

  /**
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode
   *       characters in length and can't be prefixed with "aws:" or "rds:". The string can only contain
   *       only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java
   *       regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
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

export interface AddTagsToResourceMessage {
  /**
   * <p>The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource
   *       Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon Neptune resource.</p>
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
 * <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
 */
export interface DBInstanceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBInstanceNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBInstanceNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
 */
export interface DBSnapshotNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBSnapshotNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSnapshotNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshotNotFoundFault): any => ({
    ...obj,
  });
}

export interface ApplyPendingMaintenanceActionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies
   *       to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>
   *          </p>
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
   * <p>The type of pending maintenance action that is available for the resource.</p>
   */
  Action?: string;

  /**
   * <p>The date of the maintenance window when the action is applied. The maintenance action is
   *       applied to the resource during its first maintenance window after this date. If this date is
   *       specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The date when the maintenance action is automatically applied. The maintenance action is
   *       applied to the resource on this date regardless of the maintenance window for the resource. If
   *       this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * <p>The effective date when the pending maintenance action is applied to the resource. This
   *       date takes into account opt-in requests received from the <a>ApplyPendingMaintenanceAction</a> API, the <code>AutoAppliedAfterDate</code>, and the
   *       <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been received
   *       and nothing has been specified as <code>AutoAppliedAfterDate</code> or
   *       <code>ForcedApplyDate</code>.</p>
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
   * <p>A list that provides details about the pending maintenance actions for the
   *       resource.</p>
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
export interface ResourceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundFault): any => ({
    ...obj,
  });
}

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
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>A description for the copied DB cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>The tags to be assigned to the copied DB cluster parameter group.</p>
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
 * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
 */
export interface DBClusterParameterGroup {
  /**
   * <p>Provides the name of the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>Provides the name of the DB parameter group family that this DB cluster parameter group is
   *       compatible with.</p>
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
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
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
export interface DBParameterGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBParameterGroupAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBParameterGroupAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
 */
export interface DBParameterGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBParameterGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBParameterGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
 */
export interface DBParameterGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBParameterGroupQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBParameterGroupQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

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
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The Amazon Amazon KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon
   *       Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>
   *
   *          <p>If you copy an encrypted DB cluster snapshot from your Amazon account, you can specify a
   *       value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you
   *       don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is
   *       encrypted with the same KMS key as the source DB cluster snapshot.</p>
   *
   *          <p>If you copy an encrypted DB cluster snapshot that is shared from another Amazon account, then
   *       you must specify a value for <code>KmsKeyId</code>.</p>
   *          <p> KMS encryption keys are specific to the Amazon Region that they are created in, and you
   *       can't use encryption keys from one Amazon Region in another Amazon Region.</p>
   *
   *          <p>You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to
   *       copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an
   *       error is returned.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Not currently supported.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>True to copy all tags from the source DB cluster snapshot to the target DB cluster
   *       snapshot, and otherwise false. The default is false.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The tags to assign to the new DB cluster snapshot copy.</p>
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
 * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
 */
export interface DBClusterSnapshot {
  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the DB cluster snapshot can
   *       be restored in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the identifier for a DB cluster snapshot. Must match the identifier
   *       of an existing snapshot.</p>
   *
   *          <p>After you restore a DB cluster using a <code>DBClusterSnapshotIdentifier</code>,
   *       you must specify the same <code>DBClusterSnapshotIdentifier</code> for any future
   *       updates to the DB cluster. When you specify this property for an update, the DB
   *       cluster is not restored from the snapshot again, and the data in the database is not
   *       changed.</p>
   *
   *          <p>However, if you don't specify the <code>DBClusterSnapshotIdentifier</code>, an empty
   *       DB cluster is created, and the original DB cluster is deleted. If you specify a
   *       property that is different from the previous snapshot restore property, the DB
   *       cluster is restored from the snapshot specified by the <code>DBClusterSnapshotIdentifier</code>,
   *       and the original DB cluster is deleted.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was
   *       created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
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
   * <p>Specifies the status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies the port that the DB cluster was listening on at the time of the
   *       snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Provides the VPC ID associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *       (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Not supported by Neptune.</p>
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
   * <p>If <code>StorageEncrypted</code> is true, the Amazon KMS key identifier for the encrypted DB
   *       cluster snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * <p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon
   *       Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;

  /**
   * <p>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts
   *       is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;
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
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
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
 * <p>User already has a DB cluster snapshot with the given identifier.</p>
 */
export interface DBClusterSnapshotAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterSnapshotAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterSnapshotAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterSnapshotAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
 */
export interface DBClusterSnapshotNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterSnapshotNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterSnapshotNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterSnapshotNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The supplied value is not a valid DB cluster snapshot state.</p>
 */
export interface InvalidDBClusterSnapshotStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBClusterSnapshotStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBClusterSnapshotStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBClusterSnapshotStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>Error accessing KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault extends __SmithyException, $MetadataBearer {
  name: "KMSKeyNotAccessibleFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace KMSKeyNotAccessibleFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSKeyNotAccessibleFault): any => ({
    ...obj,
  });
}

/**
 * <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
 */
export interface SnapshotQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SnapshotQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotQuotaExceededFault): any => ({
    ...obj,
  });
}

export interface CopyDBParameterGroupMessage {
  /**
   * <p>The identifier or ARN for the source DB parameter group. For information about creating
   *       an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   *
   *          <p>Constraints:</p>
   *
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
   *
   *          <p>Example: <code>my-db-parameter-group</code>
   *          </p>
   */
  TargetDBParameterGroupIdentifier: string | undefined;

  /**
   * <p>A description for the copied DB parameter group.</p>
   */
  TargetDBParameterGroupDescription: string | undefined;

  /**
   * <p>The tags to be assigned to the copied DB parameter group.</p>
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
 * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
 */
export interface DBParameterGroup {
  /**
   * <p>Provides the name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>Provides the name of the DB parameter group family that this DB parameter group is
   *       compatible with.</p>
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
   * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
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

export interface CreateDBClusterMessage {
  /**
   * <p>A list of EC2 Availability Zones that instances in the DB cluster can be created
   *       in.</p>
   */
  AvailabilityZones?: string[];

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
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a
   *       name, Amazon Neptune will not create a database in the DB cluster you are creating.</p>
   */
  DatabaseName?: string;

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
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *          <p>Valid Values: <code>neptune</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use for the new DB cluster.</p>
   *          <p>Example: <code>1.0.2.1</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are
   *       enabled using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred
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
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated
   *       Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       Amazon Region, occurring on a random day of the week. To see the time blocks available, see
   *       <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred
   *       Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i>
   *          </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster
   *       is created as a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>The tags to assign to the new DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

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
   */
  KmsKeyId?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>If set to <code>true</code>, enables Amazon Identity and Access Management
   *       (IAM) authentication for the entire DB cluster (this cannot be set at an
   *       instance level).</p>
   *          <p>Default: <code>false</code>.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is enabled.</p>
   */
  DeletionProtection?: boolean;
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
 * <p>Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB
 *       cluster.</p>
 */
export interface DBClusterRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *       cluster.</p>
   */
  RoleArn?: string;

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
   */
  Status?: string;

  /**
   * <p>The name of the feature associated with the Amazon Identity and Access Management (IAM) role.
   *       For the list of supported feature names, see <a>DBEngineVersion</a>.
   *     </p>
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
   * <p>Value that is <code>true</code> if the cluster member is the primary instance for the DB
   *       cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB
   *       cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.</p>
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
 * <p>Not supported by Neptune.</p>
 */
export interface DBClusterOptionGroupStatus {
  /**
   * <p>Not supported by Neptune.</p>
   */
  DBClusterOptionGroupName?: string;

  /**
   * <p>Not supported by Neptune.</p>
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
 * <p>This data type is used as a response element for queries on VPC security group
 *       membership.</p>
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
 * <p>Contains the details of an Amazon Neptune DB cluster.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
 */
export interface DBCluster {
  /**
   * <p>
   *             <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size is
   *       not fixed, but instead automatically adjusts as needed.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the DB cluster can be
   *       created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Not supported by Neptune.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>Contains the name of the initial database of this DB cluster that was provided at create
   *       time, if one was specified when the DB cluster was created. This same name is returned for the
   *       life of the DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that
   *       identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * <p>Specifies information on the subnet group associated with the DB cluster, including the
   *       name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * <p>Specifies the current state of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>Specifies the progress of the operation as a percentage.</p>
   */
  PercentProgress?: string;

  /**
   * <p>Specifies the earliest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * <p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
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
   * <p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Not supported by Neptune.</p>
   */
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[];

  /**
   * <p>Specifies the daily time range during which automated backups are created if automated
   *       backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Not supported by Neptune.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB
   *       cluster.</p>
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
   * <p>If <code>StorageEncrypted</code> is true, the Amazon KMS key identifier for the
   *       encrypted DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Region-unique, immutable identifier for the DB cluster. This identifier is found
   *       in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB cluster is accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated
   *       with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the
   *       DB cluster to access other Amazon services on your behalf.</p>
   */
  AssociatedRoles?: DBClusterRole[];

  /**
   * <p>True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts
   *       is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   */
  CloneGroupId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *       (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>Indicates whether or not the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>If set to <code>true</code>, the DB cluster can be cloned across accounts.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * <p>Time at which the DB cluster will be automatically restarted.</p>
   */
  AutomaticRestartTime?: Date;
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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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
 * <p>User already has a DB cluster with the given identifier.</p>
 */
export interface DBClusterAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>DBClusterParameterGroupName</i> does not refer to an
 *       existing DB Cluster parameter group.</p>
 */
export interface DBClusterParameterGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterParameterGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterParameterGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterParameterGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
 */
export interface DBClusterQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Subnets in the DB subnet group should cover at least two Availability
 *       Zones unless there is only one Availability Zone.</p>
 */
export interface DBSubnetGroupDoesNotCoverEnoughAZs extends __SmithyException, $MetadataBearer {
  name: "DBSubnetGroupDoesNotCoverEnoughAZs";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetGroupDoesNotCoverEnoughAZs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSubnetGroupDoesNotCoverEnoughAZs): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 */
export interface DBSubnetGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBSubnetGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSubnetGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>There is insufficient storage available for the current action. You may
 *        be able to resolve this error by updating your subnet group to use different
 *        Availability Zones that have more storage available.</p>
 */
export interface InsufficientStorageClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientStorageClusterCapacityFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InsufficientStorageClusterCapacityFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientStorageClusterCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified DB instance is not in the <i>available</i> state.</p>
 */
export interface InvalidDBInstanceStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBInstanceStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBInstanceStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBInstanceStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The DB subnet group cannot be deleted because it is in use.</p>
 */
export interface InvalidDBSubnetGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBSubnetGroupStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBSubnetGroupStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBSubnetGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The requested subnet is invalid, or multiple subnets were requested that are
 *       not all in a common VPC.</p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidSubnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSubnet): any => ({
    ...obj,
  });
}

/**
 * <p>DB subnet group does not cover all Availability Zones after it is created
 *       because users' change.</p>
 */
export interface InvalidVPCNetworkStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidVPCNetworkStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
 */
export interface StorageQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "StorageQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace StorageQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageQuotaExceededFault): any => ({
    ...obj,
  });
}

export interface CreateDBClusterEndpointMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier to use for the new endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType: string | undefined;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>The tags to be assigned to the Amazon Neptune resource.</p>
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
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
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
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *       <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

export namespace CreateDBClusterEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDBClusterEndpointOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified custom endpoint cannot be created because it already exists.</p>
 */
export interface DBClusterEndpointAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterEndpointAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterEndpointAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterEndpointAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster already has the maximum number of custom endpoints.</p>
 */
export interface DBClusterEndpointQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterEndpointQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterEndpointQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterEndpointQuotaExceededFault): any => ({
    ...obj,
  });
}

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
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated
   *       with one and only one DB cluster parameter group family, and can be applied only to a DB
   *       cluster running a database engine and engine version compatible with that DB cluster parameter
   *       group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the new DB cluster parameter group.</p>
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
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
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
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
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
 * <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p>
 *          <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>
 */
export interface AuthorizationNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "AuthorizationNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace AuthorizationNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationNotFoundFault): any => ({
    ...obj,
  });
}

export interface CreateDBInstanceMessage {
  /**
   * <p>Not supported.</p>
   */
  DBName?: string;

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
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>.
   *       Not all DB instance classes are available in all Amazon Regions.</p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.</p>
   *          <p>Valid Values: <code>neptune</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *          <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: string[];

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB
   *       cluster. For more information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
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
   * <p>A DB subnet group to associate with this DB instance.</p>
   *          <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
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
   * <p> The daily time range during which automated backups are created.</p>
   *          <p>Not applicable. The daily time range for creating automated backups is managed by the DB
   *       cluster. For more information, see <a>CreateDBCluster</a>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   *          <p>Type: Integer</p>
   */
  Port?: number;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone
   *       parameter if the MultiAZ parameter is set to true.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to use. Currently, setting this
   *       parameter has no effect.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates that minor engine upgrades are applied automatically to the DB instance during
   *       the maintenance window.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for this DB instance.</p>
   *          <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *       <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially
   *       allocated for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * @deprecated
   *
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The tags to assign to the new instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The identifier of the DB cluster that the instance will belong to.</p>
   *          <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p>
   *          <p>Type: String</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>Not applicable. Storage is managed by the DB Cluster.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   *          <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more
   *       information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: false</p>
   */
  StorageEncrypted?: boolean;

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
   */
  KmsKeyId?: string;

  /**
   * <p>Specify the Active Directory Domain to create the instance in.</p>
   */
  Domain?: string;

  /**
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise
   *       false. The default is false.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
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
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to
   *       Amazon CloudWatch Logs. For example,
   *       <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a
   *       <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory
   *       Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that specifies the order in which an Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.
   *       </p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * <p>Not supported by Neptune (ignored).</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   *
   *          <p>DB instances in a DB cluster can be deleted even when deletion
   *       protection is enabled in their parent DB cluster.</p>
   */
  DeletionProtection?: boolean;
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
   * <p>The name of the DP parameter group.</p>
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
 * <p>Specifies membership in a designated DB security group.</p>
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
 * <p>Specifies an Availability Zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the availability zone.</p>
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
 * <p>Specifies a subnet.</p>
 *          <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
 */
export interface Subnet {
  /**
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Specifies the EC2 Availability Zone that the subnet is in.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>Specifies the status of the subnet.</p>
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
 * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
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
   * <p> Contains a list of <a>Subnet</a> elements.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   */
  DBSubnetGroupArn?: string;
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
 * <p>An Active Directory Domain membership record associated with a DB instance.</p>
 */
export interface DomainMembership {
  /**
   * <p>The identifier of the Active Directory Domain.</p>
   */
  Domain?: string;

  /**
   * <p>The status of the DB instance's Active Directory Domain membership, such as joined,
   *       pending-join, failed etc).</p>
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

/**
 * <p>Specifies a connection endpoint.</p>
 *
 *          <p>For the data structure that represents Amazon Neptune DB cluster endpoints,
 *       see <code>DBClusterEndpoint</code>.</p>
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
 * <p>Not supported by Neptune.</p>
 */
export interface OptionGroupMembership {
  /**
   * <p>Not supported by Neptune.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>Not supported by Neptune.</p>
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
 * <p>A list of the log types whose configuration is still pending. In other
 *       words, these log types are in the process of being activated or deactivated.</p>
 */
export interface PendingCloudwatchLogsExports {
  /**
   * <p>Log types that are in the process of being deactivated. After they are
   *       deactivated, these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * <p>Log types that are in the process of being enabled. After they are
   *       enabled, these log types are exported to CloudWatch Logs.</p>
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
 * <p> This data type is used as a response element in the <a>ModifyDBInstance</a>
 *       action.</p>
 */
export interface PendingModifiedValues {
  /**
   * <p> Contains the new <code>DBInstanceClass</code> for the DB instance that will be applied or
   *       is currently being applied.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p> Contains the new <code>AllocatedStorage</code> size for the DB instance that will be
   *       applied or is currently being applied.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>Specifies the pending port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Not supported by Neptune.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or is
   *       currently being applied.</p>
   */
  Iops?: number;

  /**
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the DB instance that will be
   *       applied or is currently being applied.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>Specifies the identifier of the CA certificate for the DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The new DB subnet group for the DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>This <code>PendingCloudwatchLogsExports</code> structure specifies
   *       pending changes to which CloudWatch logs are enabled and which are disabled.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
}

export namespace PendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj,
  });
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
   * <p>Boolean value that is true if the instance is operating normally, or false if the instance
   *       is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * <p>Status of the DB instance. For a StatusType of read replica, the values can be
   *       replicating, error, stopped, or terminated.</p>
   */
  Status?: string;

  /**
   * <p>Details of the error if there is an error for the instance. If the instance is not in an
   *       error state, this value is blank.</p>
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
 * <p>Contains the details of an Amazon Neptune DB instance.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
 */
export interface DBInstance {
  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *       identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Provides the name of the database engine to be used for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * <p>Not supported by Neptune.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The database name.</p>
   */
  DBName?: string;

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>Not supported by Neptune.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the date and time the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p> Specifies the daily time range during which automated backups are created if automated
   *       backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p> Provides List of DB security group elements containing only
   *       <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.</p>
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
   * <p>Specifies information on the subnet group associated with the DB instance, including the
   *       name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is only included when
   *       changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Contains the identifier of the source DB instance if this DB instance is a Read
   *       Replica.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB
   *       instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * <p>Contains one or more identifiers of DB clusters that are Read Replicas of this DB
   *       instance.</p>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value.</p>
   */
  Iops?: number;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupMemberships?: OptionGroupMembership[];

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with
   *       multi-AZ support.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * @deprecated
   *
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The status of a Read Replica. If the instance is not a Read Replica, this is blank.</p>
   */
  StatusInfos?: DBInstanceStatusInfo[];

  /**
   * <p>Specifies the storage type associated with DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *       encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *       cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *       the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p> Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Region-unique, immutable identifier for the DB instance. This identifier is found
   *       in Amazon CloudTrail log entries whenever the Amazon KMS key for the DB instance is accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>Not supported</p>
   */
  DomainMemberships?: DomainMembership[];

  /**
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB
   *       instance.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the
   *       Enhanced Monitoring metrics data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to
   *       Amazon CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.
   *    </p>
   */
  PromotionTier?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>Not supported.</p>
   */
  Timezone?: string;

  /**
   * <p>True if Amazon Identity and Access Management (IAM) authentication is enabled, and otherwise
   *       false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch
   *       Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>Indicates whether or not the DB instance has deletion protection enabled.
   *       The instance can't be deleted when deletion protection is enabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;
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
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
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
 * <p>User already has a DB instance with the given identifier.</p>
 */
export interface DBInstanceAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBInstanceAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBInstanceAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>DBSecurityGroupName</i> does not refer
 *       to an existing DB security group.</p>
 */
export interface DBSecurityGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBSecurityGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSecurityGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSecurityGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>Domain</i> does not refer to an existing Active Directory Domain.</p>
 */
export interface DomainNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DomainNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DomainNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Request would result in user exceeding the allowed number of DB instances.</p>
 */
export interface InstanceQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "InstanceQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InstanceQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Specified DB instance class is not available in the specified Availability Zone.</p>
 */
export interface InsufficientDBInstanceCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientDBInstanceCapacityFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InsufficientDBInstanceCapacityFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientDBInstanceCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>The designated option group could not be found.</p>
 */
export interface OptionGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "OptionGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace OptionGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 */
export interface ProvisionedIopsNotAvailableInAZFault extends __SmithyException, $MetadataBearer {
  name: "ProvisionedIopsNotAvailableInAZFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace ProvisionedIopsNotAvailableInAZFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedIopsNotAvailableInAZFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>StorageType</i> specified cannot be associated with the DB Instance.</p>
 */
export interface StorageTypeNotSupportedFault extends __SmithyException, $MetadataBearer {
  name: "StorageTypeNotSupportedFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace StorageTypeNotSupportedFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageTypeNotSupportedFault): any => ({
    ...obj,
  });
}

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
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>The DB parameter group family name. A DB parameter group can be associated with one and
   *       only one DB parameter group family, and can be applied only to a DB instance running a
   *       database engine and engine version compatible with that DB parameter group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the new DB parameter group.</p>
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
   * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
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

export interface CreateDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces,
   *       or hyphens. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
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
   * <p>The tags to be assigned to the new DB subnet group.</p>
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
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
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
 *             <i>DBSubnetGroupName</i> is already used by an existing DB subnet group.</p>
 */
export interface DBSubnetGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBSubnetGroupAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetGroupAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSubnetGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>Request would result in user exceeding the allowed number of DB subnet groups.</p>
 */
export interface DBSubnetGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBSubnetGroupQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetGroupQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSubnetGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>
 */
export interface DBSubnetQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBSubnetQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSubnetQuotaExceededFault): any => ({
    ...obj,
  });
}

export interface CreateEventSubscriptionMessage {
  /**
   * <p>The name of the subscription.</p>
   *          <p>Constraints: The name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is
   *       created by Amazon SNS when you create a topic and subscribe to it.</p>
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
   */
  SourceType?: string;

  /**
   * <p> A list of event categories for a SourceType that you want to subscribe to. You can see a
   *       list of the categories for a given SourceType by using the
   *       <b>DescribeEventCategories</b> action.</p>
   */
  EventCategories?: string[];

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
   */
  SourceIds?: string[];

  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *       subscription, set to <b>false</b> to create the subscription but not
   *       active it.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The tags to be applied to the new event subscription.</p>
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
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
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
 * <p>You have exceeded the number of events you can subscribe to.</p>
 */
export interface EventSubscriptionQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "EventSubscriptionQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace EventSubscriptionQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscriptionQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The SNS topic is invalid.</p>
 */
export interface SNSInvalidTopicFault extends __SmithyException, $MetadataBearer {
  name: "SNSInvalidTopicFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SNSInvalidTopicFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNSInvalidTopicFault): any => ({
    ...obj,
  });
}

/**
 * <p>There is no SNS authorization.</p>
 */
export interface SNSNoAuthorizationFault extends __SmithyException, $MetadataBearer {
  name: "SNSNoAuthorizationFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SNSNoAuthorizationFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNSNoAuthorizationFault): any => ({
    ...obj,
  });
}

/**
 * <p>The ARN of the SNS topic could not be found.</p>
 */
export interface SNSTopicArnNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SNSTopicArnNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SNSTopicArnNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNSTopicArnNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>This subscription already exists.</p>
 */
export interface SubscriptionAlreadyExistFault extends __SmithyException, $MetadataBearer {
  name: "SubscriptionAlreadyExistFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SubscriptionAlreadyExistFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscriptionAlreadyExistFault): any => ({
    ...obj,
  });
}

/**
 * <p>The designated subscription category could not be found.</p>
 */
export interface SubscriptionCategoryNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SubscriptionCategoryNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SubscriptionCategoryNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscriptionCategoryNotFoundFault): any => ({
    ...obj,
  });
}

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
   */
  SkipFinalSnapshot?: boolean;

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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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
export interface DBClusterEndpointNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterEndpointNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterEndpointNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterEndpointNotFoundFault): any => ({
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
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
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
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *       <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

export namespace DeleteDBClusterEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDBClusterEndpointOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation cannot be performed on the endpoint while the endpoint is in this state.</p>
 */
export interface InvalidDBClusterEndpointStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBClusterEndpointStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBClusterEndpointStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBClusterEndpointStateFault): any => ({
    ...obj,
  });
}

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
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting to
 *       delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
 */
export interface InvalidDBParameterGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBParameterGroupStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBParameterGroupStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBParameterGroupStateFault): any => ({
    ...obj,
  });
}

export interface DeleteDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing DB cluster snapshot in the
   *       <code>available</code> state.</p>
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
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
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
 * <p>
 *             <i>DBSnapshotIdentifier</i> is already used by an existing snapshot.</p>
 */
export interface DBSnapshotAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBSnapshotAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSnapshotAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshotAlreadyExistsFault): any => ({
    ...obj,
  });
}

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
   */
  SkipFinalSnapshot?: boolean;

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
   */
  FinalDBSnapshotIdentifier?: string;
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
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
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
 * <p>The DB subnet is not in the <i>available</i> state.</p>
 */
export interface InvalidDBSubnetStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBSubnetStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBSubnetStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBSubnetStateFault): any => ({
    ...obj,
  });
}

export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the event notification subscription you want to delete.</p>
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
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
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
 * <p>The event subscription is in an invalid state.</p>
 */
export interface InvalidEventSubscriptionStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidEventSubscriptionStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidEventSubscriptionStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidEventSubscriptionStateFault): any => ({
    ...obj,
  });
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
 */
export interface DBClusterEndpoint {
  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
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
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *       <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
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

export interface DBClusterEndpointMessage {
  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterEndpoints</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>Contains the details of the endpoints associated with the cluster
   *       and matching any filter conditions.</p>
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

/**
 * <p>This type is not currently supported.</p>
 */
export interface Filter {
  /**
   * <p>This parameter is not currently supported.</p>
   */
  Name: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
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

export interface DescribeDBClusterEndpointsMessage {
  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The identifier of the endpoint to describe. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
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
   * <p>The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *       a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterEndpoints</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
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

export interface DBClusterParameterGroupsMessage {
  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
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

export interface DescribeDBClusterParameterGroupsMessage {
  /**
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
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
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
 * <p>Specifies a parameter.</p>
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
   * <p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be
   *       modified. Some parameters have security or operational implications that prevent them from
   *       being changed.</p>
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
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

export interface DBClusterParameterGroupDetails {
  /**
   * <p>Provides a list of parameters for the DB cluster parameter group.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p> An optional pagination token provided by a previous DescribeDBClusterParameters request.
   *       If this parameter is specified, the response includes only records beyond the marker, up to
   *       the value specified by <code>MaxRecords</code> .</p>
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

export interface DescribeDBClusterParametersMessage {
  /**
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
   * <p> A value that indicates to return only parameters for a specific source. Parameter sources
   *       can be <code>engine</code>, <code>service</code>, or <code>customer</code>.</p>
   */
  Source?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
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

export interface DBClusterMessage {
  /**
   * <p>A pagination token that can be used in a subsequent DescribeDBClusters request.</p>
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
   */
  DBClusterIdentifier?: string;

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
   *
   *          <p>For example, to invoke this API from the Amazon CLI and filter so that only
   *       Neptune DB clusters are returned, you could use the following command:</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <a>DescribeDBClusters</a>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBClustersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBClustersMessage): any => ({
    ...obj,
  });
}

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
 *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore
 *       a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 */
export interface DBClusterSnapshotAttribute {
  /**
   * <p>The name of the manual DB cluster snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of Amazon accounts that have
   *       permission to copy or restore the manual DB cluster snapshot. For more information, see the
   *       <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *       returns a list of IDs of the Amazon accounts that are authorized to copy or restore the manual DB
   *       cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster
   *       snapshot is public and available for any Amazon account to copy or restore.</p>
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
 * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
 *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
 *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
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
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
   *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
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

export interface DBClusterSnapshotMessage {
  /**
   * <p> An optional pagination token provided by a previous <a>DescribeDBClusterSnapshots</a> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
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
   */
  DBClusterIdentifier?: string;

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
   */
  DBClusterSnapshotIdentifier?: string;

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
   *                   <code>manual</code> - Return all DB cluster snapshots that have been taken by my AWS
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
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   */
  Marker?: string;

  /**
   * <p>True to include shared manual DB cluster snapshots from other Amazon accounts that this AWS
   *       account has been given permission to copy or restore, and otherwise false. The default is
   *       <code>false</code>.</p>
   *          <p>You can give an Amazon account permission to restore a manual DB cluster snapshot from
   *       another Amazon account by the <a>ModifyDBClusterSnapshotAttribute</a> API
   *       action.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>True to include manual DB cluster snapshots that are public and can be copied or restored
   *       by any Amazon account, and otherwise false. The default is <code>false</code>. The default is
   *       false.</p>
   *          <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
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
 * <p>Specifies a character set.</p>
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
 * <p>A time zone associated with a <a>DBInstance</a>.</p>
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
   * <p>A value that indicates whether the target version is applied to any source DB instances
   *       that have AutoMinorVersionUpgrade set to true.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * <p>A value that indicates whether a database engine is upgraded to a major version.</p>
   */
  IsMajorVersionUpgrade?: boolean;
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
 * <p> This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.</p>
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
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  DefaultCharacterSet?: CharacterSet;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  SupportedCharacterSets?: CharacterSet[];

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: UpgradeTarget[];

  /**
   * <p>A list of the time zones supported by this engine for the <code>Timezone</code> parameter
   *       of the <code>CreateDBInstance</code> action.</p>
   */
  SupportedTimezones?: Timezone[];

  /**
   * <p>The types of logs that the database engine has available for export to CloudWatch
   *       Logs.</p>
   */
  ExportableLogTypes?: string[];

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types
   *       specified by ExportableLogTypes to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * <p>Indicates whether the database engine version supports read replicas.</p>
   */
  SupportsReadReplica?: boolean;
}

export namespace DBEngineVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBEngineVersion): any => ({
    ...obj,
  });
}

export interface DBEngineVersionMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> A list of <code>DBEngineVersion</code> elements.</p>
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
   */
  Engine?: string;

  /**
   * <p>The database engine version to return.</p>
   *          <p>Example: <code>5.1.49</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
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
   * <p>Not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more than the
   *       <code>MaxRecords</code> value is available, a pagination token called a marker is included in
   *       the response so that the following results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Indicates that only the default version of the specified engine or engine and major
   *       version combination is returned.</p>
   */
  DefaultOnly?: boolean;

  /**
   * <p>If this parameter is specified and the requested engine supports the
   *       <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response
   *       includes a list of supported character sets for each engine version.</p>
   */
  ListSupportedCharacterSets?: boolean;

  /**
   * <p>If this parameter is specified and the requested engine supports the <code>TimeZone</code>
   *       parameter for <code>CreateDBInstance</code>, the response includes a list of supported time
   *       zones for each engine version.</p>
   */
  ListSupportedTimezones?: boolean;
}

export namespace DescribeDBEngineVersionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBEngineVersionsMessage): any => ({
    ...obj,
  });
}

export interface DBInstanceMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p> A list of <a>DBInstance</a> instances.</p>
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
   */
  DBInstanceIdentifier?: string;

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
   *
   *          <p>For example, to invoke this API from the Amazon CLI and filter so that only
   *       Neptune DB instances are returned, you could use the following command:</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous <code>DescribeDBInstances</code>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
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

export interface DBParameterGroupsMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>DBParameterGroup</a> instances.</p>
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

export interface DescribeDBParameterGroupsMessage {
  /**
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
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
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

export interface DBParameterGroupDetails {
  /**
   * <p>A list of <a>Parameter</a> values.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
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
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return.</p>
   *          <p>Default: All parameter types returned</p>
   *          <p>Valid Values: <code>user | system | engine-default</code>
   *          </p>
   */
  Source?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeDBParameters</code>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
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

export interface DBSubnetGroupMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> A list of <a>DBSubnetGroup</a> instances.</p>
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

export interface DescribeDBSubnetGroupsMessage {
  /**
   * <p>The name of the DB subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous DescribeDBSubnetGroups request. If
   *       this parameter is specified, the response includes only records beyond the marker, up to the
   *       value specified by <code>MaxRecords</code>.</p>
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

export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * <p>The name of the DB cluster parameter group family to return engine parameter information
   *       for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified,
   *       the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
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

/**
 * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
 */
export interface EngineDefaults {
  /**
   * <p>Specifies the name of the DB parameter group family that the engine default parameters
   *       apply to.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p> An optional pagination token provided by a previous EngineDefaults request. If this
   *       parameter is specified, the response includes only records beyond the marker, up to the value
   *       specified by <code>MaxRecords</code> .</p>
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

export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
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

export interface DescribeEngineDefaultParametersMessage {
  /**
   * <p>The name of the DB parameter group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>Not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
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
   * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
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

export interface DescribeEventCategoriesMessage {
  /**
   * <p>The type of source that is generating the events.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   */
  SourceType?: string;

  /**
   * <p>This parameter is not currently supported.</p>
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
 * <p>Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.</p>
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

export interface EventCategoriesMessage {
  /**
   * <p>A list of EventCategoriesMap data types.</p>
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

export type SourceType =
  | "db-cluster"
  | "db-cluster-snapshot"
  | "db-instance"
  | "db-parameter-group"
  | "db-security-group"
  | "db-snapshot";

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
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *       returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *       For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  StartTime?: Date;

  /**
   * <p> The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *       For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes to retrieve events for.</p>
   *          <p>Default: 60</p>
   */
  Duration?: number;

  /**
   * <p>A list of event categories that trigger notifications for a event notification
   *       subscription.</p>
   */
  EventCategories?: string[];

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous DescribeEvents request. If this
   *       parameter is specified, the response includes only records beyond the marker, up to the value
   *       specified by <code>MaxRecords</code>.</p>
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
 * <p> This data type is used as a response element in the <a>DescribeEvents</a>
 *       action.</p>
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

export interface EventsMessage {
  /**
   * <p> An optional pagination token provided by a previous Events request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p> A list of <a>Event</a> instances.</p>
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

export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the event notification subscription you want to describe.</p>
   */
  SubscriptionName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code> .</p>
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

export interface EventSubscriptionsMessage {
  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
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

export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * <p>The name of the engine to retrieve DB instance options for.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available
   *       offerings matching the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available
   *       offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available
   *       offerings matching the specified license model.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The VPC filter value. Specify this parameter to show only the available VPC or non-VPC
   *       offerings.</p>
   */
  Vpc?: boolean;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code> .</p>
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
 * <p>Contains a list of available options for a DB instance.</p>
 *          <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
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
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>Indicates whether a DB instance is Multi-AZ capable.</p>
   */
  MultiAZCapable?: boolean;

  /**
   * <p>Indicates whether a DB instance can have a Read Replica.</p>
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
   * <p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60
   *       seconds.</p>
   */
  SupportsEnhancedMonitoring?: boolean;

  /**
   * <p>Indicates whether a DB instance supports IAM database authentication.</p>
   */
  SupportsIAMDatabaseAuthentication?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
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
}

export namespace OrderableDBInstanceOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderableDBInstanceOption): any => ({
    ...obj,
  });
}

export interface OrderableDBInstanceOptionsMessage {
  /**
   * <p>An <a>OrderableDBInstanceOption</a> structure
   *       containing information about orderable options for the DB instance.</p>
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];

  /**
   * <p> An optional pagination token provided by a previous OrderableDBInstanceOptions request.
   *       If this parameter is specified, the response includes only records beyond the marker, up to
   *       the value specified by <code>MaxRecords</code> .</p>
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

export interface DescribePendingMaintenanceActionsMessage {
  /**
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   */
  ResourceIdentifier?: string;

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
   */
  Filters?: Filter[];

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to a number of records specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
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

export interface PendingMaintenanceActionsMessage {
  /**
   * <p>A list of the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to a number of records specified by
   *       <code>MaxRecords</code>.</p>
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
   * <p>The step value for the range. For example, if you have a range of 5,000 to 10,000, with a
   *       step value of 1,000, the valid values start at 5,000 and step up by 1,000. Even though 7,500
   *       is within the range, it isn't a valid value for the range. The valid values are 5,000, 6,000,
   *       7,000, 8,000...</p>
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
 * <p>Information about valid modifications that you can make to your DB
 *       instance.</p>
 *          <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
 */
export interface ValidStorageOptions {
  /**
   * <p>The valid storage types for your DB instance. For example, gp2, io1.</p>
   */
  StorageType?: string;

  /**
   * <p>The valid range of storage in gibibytes. For example, 100 to 16384.</p>
   */
  StorageSize?: Range[];

  /**
   * <p>The valid range of provisioned IOPS. For example, 1000-20000.</p>
   */
  ProvisionedIops?: Range[];

  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier. For example, 3-10,
   *       which means that provisioned IOPS can be between 3 and 10 times storage.</p>
   */
  IopsToStorageRatio?: DoubleRange[];
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
 * <p>Information about valid modifications that you can make to your DB instance. Contains the
 *       result of a successful call to the <a>DescribeValidDBInstanceModifications</a>
 *       action. You can use this information when you call <a>ModifyDBInstance</a>.
 *    </p>
 */
export interface ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance.</p>
   */
  Storage?: ValidStorageOptions[];
}

export namespace ValidDBInstanceModificationsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidDBInstanceModificationsMessage): any => ({
    ...obj,
  });
}

export interface DescribeValidDBInstanceModificationsResult {
  /**
   * <p>Information about valid modifications that you can make to your DB instance. Contains the
   *       result of a successful call to the <a>DescribeValidDBInstanceModifications</a>
   *       action. You can use this information when you call <a>ModifyDBInstance</a>.
   *    </p>
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
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The name of the instance to promote to the primary instance.</p>
   *          <p>You must specify the instance identifier for an Read Replica in the DB cluster. For
   *       example, <code>mydbcluster-replica1</code>.</p>
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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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

export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name
   *       (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
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

export interface TagListMessage {
  /**
   * <p>List of tags returned by the ListTagsForResource operation.</p>
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

/**
 * <p>The state of the DB security group does not allow deletion.</p>
 */
export interface InvalidDBSecurityGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBSecurityGroupStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBSecurityGroupStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBSecurityGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration setting for the log types to be enabled for export
 *       to CloudWatch Logs for a specific DB instance or DB cluster.</p>
 *
 *          <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays
 *       determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
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
   */
  NewDBClusterIdentifier?: string;

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
   */
  ApplyImmediately?: boolean;

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
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The port number on which the DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>
   *             <i>Not supported by Neptune.</i>
   *          </p>
   */
  OptionGroupName?: string;

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
   */
  PreferredBackupWindow?: string;

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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs
   *       for a specific DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>The version number of the database engine to which you want to upgrade. Changing this
   *       parameter results in an outage. The change is applied during the next maintenance window
   *       unless the <code>ApplyImmediately</code> parameter is set to true.</p>
   *          <p>For a list of valid engine versions, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases.html">Engine Releases for Amazon
   *       Neptune</a>, or call <a href="https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions">DescribeDBEngineVersions</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the DB cluster that is created.</i>
   *          </p>
   */
  CopyTagsToSnapshot?: boolean;
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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
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
 *       see <code>Endpoint</code>.</p>
 */
export interface ModifyDBClusterEndpointOutput {
  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *       stored as a lowercase string.</p>
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
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>inactive</code>, <code>modifying</code>. The <code>inactive</code> state applies to an endpoint that cannot be used for a certain kind of cluster,
   *       such as a <code>writer</code> endpoint for a read-only secondary cluster in a global database.</p>
   */
  Status?: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *       <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *       All other eligible instances are reachable through the custom endpoint.
   *       Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;
}

export namespace ModifyDBClusterEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterEndpointOutput): any => ({
    ...obj,
  });
}

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

export interface ModifyDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
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

export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *          <p>To manage authorization for other Amazon accounts to copy or restore a manual DB cluster
   *       snapshot, set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by
   *       <code>AttributeName</code>.</p>
   *          <p>To authorize other Amazon accounts to copy or restore a manual DB cluster snapshot, set this
   *       list to include one or more Amazon account IDs, or <code>all</code> to make the manual DB cluster
   *       snapshot restorable by any Amazon account. Do not add the <code>all</code> value for any manual
   *       DB cluster snapshots that contain private information that you don't want available to all AWS
   *       accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
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
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to copy or
   *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
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
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 */
export interface SharedSnapshotQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SharedSnapshotQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SharedSnapshotQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SharedSnapshotQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <i>CertificateIdentifier</i> does not refer to an existing certificate.</p>
 */
export interface CertificateNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "CertificateNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace CertificateNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The DB upgrade failed because a resource the DB depends on could not be modified.</p>
 */
export interface DBUpgradeDependencyFailureFault extends __SmithyException, $MetadataBearer {
  name: "DBUpgradeDependencyFailureFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBUpgradeDependencyFailureFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBUpgradeDependencyFailureFault): any => ({
    ...obj,
  });
}

export interface ModifyDBInstanceMessage {
  /**
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
   * <p>Not supported by Neptune.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The new compute and memory capacity of the DB instance, for example,
   *       <code>db.m4.large</code>. Not all DB instance classes are available in all AWS
   *       Regions.</p>
   *          <p>If you modify the DB instance class, an outage occurs during the change. The change is
   *       applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified
   *       as <code>true</code> for this request.</p>
   *          <p>Default: Uses existing setting</p>
   */
  DBInstanceClass?: string;

  /**
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
   * <p>Not supported by Neptune.</p>
   */
  MasterUserPassword?: string;

  /**
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
   * <p>Not applicable. The retention period for automated backups is managed by the DB cluster.
   *       For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Default: Uses existing setting</p>
   */
  BackupRetentionPeriod?: number;

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
   */
  PreferredBackupWindow?: string;

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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't
   *       result in an outage and the change is applied during the next maintenance window unless the
   *       <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to upgrade to. Currently, setting this
   *       parameter has no effect. To upgrade your database engine to the most recent release,
   *       use the <a>ApplyPendingMaintenanceAction</a> API.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates that major version upgrades are allowed. Changing this parameter doesn't result
   *       in an outage and the change is asynchronously applied as soon as possible.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p> Indicates that minor version upgrades are applied automatically to the DB instance during
   *       the maintenance window. Changing this parameter doesn't result in an outage except in the
   *       following case and the change is asynchronously applied as soon as possible. An outage will
   *       result if this parameter is set to <code>true</code> during the maintenance window, and a
   *       newer minor version is available, and Neptune has enabled auto patching for that engine
   *       version.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Not supported by Neptune.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p>
   *          <p>Changing this setting doesn't result in an outage and the change is applied during the
   *       next maintenance window unless the <code>ApplyImmediately</code> parameter is set to
   *       <code>true</code> for this request.</p>
   *          <p>Default: Uses existing setting</p>
   */
  Iops?: number;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

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
   */
  NewDBInstanceIdentifier?: string;

  /**
   * <p>Not supported.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>Not supported.</p>
   */
  Domain?: string;

  /**
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise
   *       false. The default is false.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
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
   * @deprecated
   *
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to
   *       Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a
   *       <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Not supported</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.</p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
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
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs
   *       for a specific DB instance or DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.  See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting
   *       a DB Instance</a>.</p>
   */
  DeletionProtection?: boolean;
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
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
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

export interface DBParameterGroupNameMessage {
  /**
   * <p>Provides the name of the DB parameter group.</p>
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

export interface ModifyDBParameterGroupMessage {
  /**
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

export namespace ModifyDBParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string. You can't
   *       modify the default subnet group.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
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
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
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
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SubnetAlreadyInUse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetAlreadyInUse): any => ({
    ...obj,
  });
}

export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the event notification subscription.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is
   *       created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified
   *       of events generated by a DB instance, you would set this parameter to db-instance. if this
   *       value is not specified, all events are returned.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   */
  SourceType?: string;

  /**
   * <p> A list of event categories for a SourceType that you want to subscribe to. You can see a
   *       list of the categories for a given SourceType
   *
   *       by using the <b>DescribeEventCategories</b> action.</p>
   */
  EventCategories?: string[];

  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *       subscription.</p>
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
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
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

export interface PromoteReadReplicaDBClusterMessage {
  /**
   * <p>Not supported.</p>
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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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

export interface RebootDBInstanceMessage {
  /**
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
   * <p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p>
   *          <p>Constraint: You can't specify <code>true</code> if the instance is not configured for
   *       MultiAZ.</p>
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
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
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

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterRoleNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterRoleNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterRoleNotFoundFault): any => ({
    ...obj,
  });
}

export interface RemoveRoleFromDBClusterMessage {
  /**
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for
   *       example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be disassociated from.
   *       For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
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

export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * <p>The name of the event notification subscription you want to remove a source identifier
   *       from.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p> The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security
   *       group.</p>
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
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
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

export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon Neptune resource that the tags are removed from. This value is an Amazon
   *       Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
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

export interface ResetDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A value that is set to <code>true</code> to reset all parameters in the DB cluster
   *       parameter group to their default values, and <code>false</code> otherwise. You can't use this
   *       parameter if there is a list of parameter names specified for the <code>Parameters</code>
   *       parameter.</p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default
   *       values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set
   *       to <code>true</code>.</p>
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

export interface ResetDBParameterGroupMessage {
  /**
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
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters
   *       in the DB parameter group to default values.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and
   *       <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of
   *       the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20
   *       parameters can be modified in a single request.</p>
   *          <p>Valid Values (for Apply method): <code>pending-reboot</code>
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

/**
 * <p>The DB cluster does not have enough capacity for the current operation.</p>
 */
export interface InsufficientDBClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientDBClusterCapacityFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InsufficientDBClusterCapacityFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientDBClusterCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the DB snapshot does not allow deletion.</p>
 */
export interface InvalidDBSnapshotStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBSnapshotStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBSnapshotStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBSnapshotStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
 */
export interface InvalidRestoreFault extends __SmithyException, $MetadataBearer {
  name: "InvalidRestoreFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidRestoreFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRestoreFault): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the restored DB cluster can
   *       be created in.</p>
   */
  AvailabilityZones?: string[];

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
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The database engine to use for the new DB cluster.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Not supported.</p>
   */
  DatabaseName?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   */
  Tags?: Tag[];

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
   */
  KmsKeyId?: string;

  /**
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
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
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>
   *             <i>If set to <code>true</code>, tags are copied to any snapshot of
   *       the restored DB cluster that is created.</i>
   *          </p>
   */
  CopyTagsToSnapshot?: boolean;
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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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
   */
  RestoreType?: string;

  /**
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
   * <p>A value that is set to <code>true</code> to restore the DB cluster to the latest
   *       restorable backup time, and <code>false</code> otherwise.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is
   *       provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The tags to be applied to the restored DB cluster.</p>
   */
  Tags?: Tag[];

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
   */
  KmsKeyId?: string;

  /**
   * <p>True to enable mapping of Amazon Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
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
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   */
  DeletionProtection?: boolean;
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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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

export interface StartDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Neptune DB cluster to be started.
   *       This parameter is stored as a lowercase string.</p>
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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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

export interface StopDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Neptune DB cluster to be stopped.
   *       This parameter is stored as a lowercase string.</p>
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
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
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
