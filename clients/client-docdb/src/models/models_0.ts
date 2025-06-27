// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocDBServiceException as __BaseException } from "./DocDBServiceException";

/**
 * <p>Represents the input to <a>AddSourceIdentifierToSubscription</a>.
 *         </p>
 * @public
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * <p>The name of the Amazon DocumentDB event notification subscription that you
   *             want to add a source identifier to.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The identifier of the event source to be added:</p>
   *          <ul>
   *             <li>
   *                <p>If the source type is an instance, a
   *                     <code>DBInstanceIdentifier</code> must be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a security group, a
   *                     <code>DBSecurityGroupName</code> must be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a parameter group, a
   *                     <code>DBParameterGroupName</code> must be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a snapshot, a
   *                     <code>DBSnapshotIdentifier</code> must be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * <p>Detailed information about an event to which you have subscribed.</p>
 * @public
 */
export interface EventSubscription {
  /**
   * <p>The Amazon Web Services customer account that is associated with the Amazon DocumentDB event notification
   *             subscription.</p>
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * <p>The Amazon DocumentDB event notification subscription ID.</p>
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * <p>The topic ARN of the Amazon DocumentDB event notification subscription.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The status of the Amazon DocumentDB event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: <code>creating</code>, <code>modifying</code>,
   *                 <code>deleting</code>, <code>active</code>, <code>no-permission</code>,
   *                 <code>topic-not-exist</code>
   *          </p>
   *          <p>The <code>no-permission</code> status indicates that Amazon DocumentDB no longer has permission
   *             to post to the SNS topic. The <code>topic-not-exist</code> status indicates that the
   *             topic was deleted after the subscription was created.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The time at which the Amazon DocumentDB event notification subscription was created.</p>
   * @public
   */
  SubscriptionCreationTime?: string | undefined;

  /**
   * <p>The source type for the Amazon DocumentDB event notification subscription.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of source IDs for the Amazon DocumentDB event notification subscription.</p>
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * <p>A list of event categories for the Amazon DocumentDB event notification subscription.</p>
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * <p>A Boolean value indicating whether the subscription is enabled. A value of
   *                 <code>true</code> indicates that the subscription is enabled.</p>
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
   * <p>Detailed information about an event to which you have subscribed.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>The requested source could not be found. </p>
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
 * <p>The subscription name does not exist. </p>
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
 * <p>Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with "<code>aws:</code>" or "<code>rds:</code>". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with "<code>aws:</code>" or "<code>rds:</code>". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Represents the input to <a>AddTagsToResource</a>.
 *         </p>
 * @public
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>The Amazon DocumentDB resource that the tags are added to. This value is an
   *             Amazon Resource Name .</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon DocumentDB resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
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
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing instance. </p>
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
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing snapshot. </p>
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
 * <p>Represents the input to <a>ApplyPendingMaintenanceAction</a>.
 *         </p>
 * @public
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the pending
   *             maintenance action applies to.</p>
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
   * <p>A value that specifies the type of opt-in request or undoes an
   *             opt-in request. An opt-in request of type <code>immediate</code>
   *             can't be undone.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>immediate</code> - Apply the maintenance action
   *                     immediately.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>next-maintenance</code> - Apply the maintenance
   *                     action during the next maintenance window for the resource.
   *                     </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undo-opt-in</code> - Cancel any existing
   *                     <code>next-maintenance</code> opt-in requests.</p>
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
   * <p>The date of the maintenance window when the action is applied. The maintenance action
   *             is applied to the resource during its first maintenance window after this date. If this
   *             date is specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   * @public
   */
  AutoAppliedAfterDate?: Date | undefined;

  /**
   * <p>The date when the maintenance action is automatically applied. The maintenance action
   *             is applied to the resource on this date regardless of the maintenance window for the
   *             resource. If this date is specified, any <code>immediate</code> opt-in requests are
   *             ignored.</p>
   * @public
   */
  ForcedApplyDate?: Date | undefined;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   * @public
   */
  OptInStatus?: string | undefined;

  /**
   * <p>The effective date when the pending maintenance action is applied to the
   *             resource.</p>
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
 * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.
 *         </p>
 * @public
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that has pending
   *             maintenance actions.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>A list that provides details about the pending maintenance actions
   *             for the resource.</p>
   * @public
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[] | undefined;
}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionResult {
  /**
   * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.
   *         </p>
   * @public
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | undefined;
}

/**
 * <p>The cluster isn't in a valid state.</p>
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
 * <p> The specified instance isn't in the <i>available</i> state.
 *         </p>
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
 * <p>Represents the input to <a>CopyDBClusterParameterGroup</a>.
 *         </p>
 * @public
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>If the source cluster parameter group is in the same Amazon Web Services Region as the copy, specify a valid parameter group identifier; for example, <code>my-db-cluster-param-group</code>, or a valid ARN.</p>
   *             </li>
   *             <li>
   *                <p>If the source parameter group is in a different Amazon Web Services Region than the copy, specify a valid cluster parameter group ARN; for example, <code>arn:aws:rds:us-east-1:123456789012:sample-cluster:sample-parameter-group</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>The identifier for the copied cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens.
   *                     </p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.
   *                     </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-param-group1</code>
   *          </p>
   * @public
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>A description for the copied cluster parameter group.</p>
   * @public
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>The tags that are to be assigned to the parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Detailed information about a cluster parameter group. </p>
 * @public
 */
export interface DBClusterParameterGroup {
  /**
   * <p>Provides the name of the cluster parameter group.</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>Provides the name of the parameter group family that this cluster parameter
   *             group is compatible with.</p>
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * <p>Provides the customer-specified description for this cluster parameter
   *             group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the cluster parameter group.</p>
   * @public
   */
  DBClusterParameterGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterParameterGroupResult {
  /**
   * <p>Detailed information about a cluster parameter group. </p>
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * <p>A parameter group with the same name already exists.</p>
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
 *             <code>DBParameterGroupName</code> doesn't refer to an existing parameter group. </p>
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
 * <p>This request would cause you to exceed the allowed number of parameter groups.</p>
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
 * <p>Represents the input to <a>CopyDBClusterSnapshot</a>.
 *         </p>
 * @public
 */
export interface CopyDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the cluster snapshot to copy. This parameter is
   *             not case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid system snapshot in the
   *                     <i>available</i> state.</p>
   *             </li>
   *             <li>
   *                <p>If the source snapshot is in the same Amazon Web Services Region as the copy, specify a valid snapshot identifier.</p>
   *             </li>
   *             <li>
   *                <p>If the source snapshot is in a different Amazon Web Services Region than the copy, specify a valid cluster snapshot ARN.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot1</code>
   *          </p>
   * @public
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the new cluster snapshot to create from the
   *             source cluster snapshot. This parameter is not case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.
   *                     </p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.
   *                     </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot2</code>
   *          </p>
   * @public
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The KMS key ID for an encrypted cluster snapshot. The KMS
   *             key ID is the Amazon Resource Name (ARN), KMS key identifier, or
   *             the KMS key alias for the KMS encryption key. </p>
   *          <p>If you copy an encrypted cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the cluster snapshot is encrypted with the same KMS key as the source cluster snapshot.</p>
   *          <p>If you copy an encrypted cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for <code>KmsKeyId</code>.</p>
   *          <p>To copy an encrypted cluster snapshot to another Amazon Web Services Region, set <code>KmsKeyId</code> to the KMS key ID that you want to use to encrypt the copy of the cluster snapshot in the destination Region. KMS encryption keys are specific to the Amazon Web Services Region that they are created in, and you can't use encryption keys from one Amazon Web Services Region in another Amazon Web Services Region.</p>
   *          <p>If you copy an unencrypted cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the<code>CopyDBClusterSnapshot</code> API action in the Amazon Web Services Region that contains the source cluster snapshot to copy. You must use the <code>PreSignedUrl</code> parameter when copying a cluster snapshot from another Amazon Web Services Region.</p>
   *          <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify
   *             <code>SourceRegion</code> (or <code>--source-region</code> for the
   *             CLI) instead of specifying <code>PreSignedUrl</code> manually.
   *             Specifying <code>SourceRegion</code> autogenerates a pre-signed URL
   *             that is a valid request for the operation that can be executed in
   *             the source Amazon Web Services Region.</p>
   *          <p>The presigned URL must be a valid request for the
   *             <code>CopyDBClusterSnapshot</code> API action that can be executed
   *             in the source Amazon Web Services Region that contains the cluster snapshot to be
   *             copied. The presigned URL request must contain the following
   *             parameter values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SourceRegion</code> - The ID of the region that
   *                     contains the snapshot to be copied.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SourceDBClusterSnapshotIdentifier</code> - The
   *                     identifier for the the encrypted cluster snapshot to be
   *                     copied. This identifier must be in the Amazon Resource Name
   *                     (ARN) format for the source Amazon Web Services Region. For example, if you
   *                     are copying an encrypted cluster snapshot from the us-east-1
   *                     Amazon Web Services Region, then your
   *                     <code>SourceDBClusterSnapshotIdentifier</code> looks
   *                     something like the following:
   *                     <code>arn:aws:rds:us-east-1:12345678012:sample-cluster:sample-cluster-snapshot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TargetDBClusterSnapshotIdentifier</code> - The
   *                     identifier for the new cluster snapshot to be created. This
   *                     parameter isn't case sensitive.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>Set to <code>true</code> to copy all tags from the source cluster
   *             snapshot to the target cluster snapshot, and otherwise
   *             <code>false</code>. The default is <code>false</code>.</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>The tags to be assigned to the cluster snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Detailed information about a cluster snapshot. </p>
 * @public
 */
export interface DBClusterSnapshot {
  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the cluster
   *             snapshot can be restored in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>Specifies the identifier for the cluster snapshot.</p>
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>Specifies the cluster identifier of the cluster that this cluster snapshot
   *             was created from.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Provides the time when the snapshot was taken, in UTC.</p>
   * @public
   */
  SnapshotCreateTime?: Date | undefined;

  /**
   * <p>Specifies the name of the database engine.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Specifies the status of this cluster snapshot.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Specifies the port that the cluster was listening on at the time of the
   *             snapshot.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Provides the virtual private cloud (VPC) ID that is associated with the cluster
   *             snapshot.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Specifies the time when the cluster was created, in Universal Coordinated Time
   *             (UTC).</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>Provides the master user name for the cluster snapshot.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>Provides the version of the database engine for this cluster snapshot.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Provides the type of the cluster snapshot.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   * @public
   */
  PercentProgress?: number | undefined;

  /**
   * <p>Specifies whether the cluster snapshot is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for the encrypted cluster snapshot.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the cluster snapshot.</p>
   * @public
   */
  DBClusterSnapshotArn?: string | undefined;

  /**
   * <p>If the cluster snapshot was copied from a source cluster snapshot, the ARN for
   *             the source cluster snapshot; otherwise, a null value.</p>
   * @public
   */
  SourceDBClusterSnapshotArn?: string | undefined;

  /**
   * <p>Storage type associated with your cluster snapshot </p>
   *          <p>For information on storage types for Amazon DocumentDB clusters, see
   *             Cluster storage configurations in the <i>Amazon DocumentDB Developer Guide</i>.</p>
   *          <p>Valid values for storage type - <code>standard | iopt1</code>
   *          </p>
   *          <p>Default value is <code>standard </code>
   *          </p>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface CopyDBClusterSnapshotResult {
  /**
   * <p>Detailed information about a cluster snapshot. </p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>You already have a cluster snapshot with the given identifier.</p>
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
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
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
 * <p>The provided value isn't a valid cluster snapshot state.</p>
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
 * <p>An error occurred when accessing an KMS key.</p>
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
 * <p>The request would cause you to exceed the allowed number of snapshots.</p>
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
 * <p>Represents the input to <a>CreateDBCluster</a>.
 *         </p>
 * @public
 */
export interface CreateDBClusterMessage {
  /**
   * <p>A list of Amazon EC2 Availability Zones that instances in the
   *             cluster can be created in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The number of days for which automated backups are retained. You
   *             must specify a minimum value of 1.</p>
   *          <p>Default: 1</p>
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
   * <p>The cluster identifier. This parameter is stored as a lowercase
   *             string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.
   *                     </p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.
   *                     </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the cluster parameter group to associate with this
   *             cluster.</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with this cluster.
   *             </p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>A subnet group to associate with this cluster.</p>
   *          <p>Constraints: Must match the name of an existing
   *             <code>DBSubnetGroup</code>. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The name of the database engine to be used for this cluster.</p>
   *          <p>Valid values: <code>docdb</code>
   *          </p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use. The <code>--engine-version</code> will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The port number on which the instances in the cluster accept
   *             connections.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the master user for the cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be from 1 to 63 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word for the chosen database engine.
   *                     </p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The password for the master database user. This password can
   *             contain any printable ASCII character except forward slash (/),
   *             double quote ("), or the "at" symbol (@).</p>
   *          <p>Constraints: Must contain from 8 to 100 characters.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created if
   *             automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.
   *                     </p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur,
   *             in Universal Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p>
   *          <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The tags to be assigned to the cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies whether the cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The KMS key identifier for an encrypted cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key.</p>
   *          <p>If an encryption key is not specified in <code>KmsKeyId</code>:
   *             </p>
   *          <ul>
   *             <li>
   *                <p>If the <code>StorageEncrypted</code> parameter is
   *                     <code>true</code>, Amazon DocumentDB uses your default encryption key.
   *                     </p>
   *             </li>
   *          </ul>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Not currently supported.
   *             </p>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>A list of log types that need to be enabled for exporting to Amazon
   *             CloudWatch Logs. You can enable audit logs or profiler logs. For more
   *             information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html">
   *                 Auditing Amazon DocumentDB Events</a>
   *             and <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html">
   *                 Profiling Amazon DocumentDB Operations</a>.
   *         </p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>Specifies whether this cluster can be deleted. If
   *             <code>DeletionProtection</code> is enabled, the cluster cannot be
   *             deleted unless it is modified and <code>DeletionProtection</code> is
   *             disabled. <code>DeletionProtection</code> protects clusters from
   *             being accidentally deleted.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The cluster identifier of the new global cluster.</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>For information on storage types for Amazon DocumentDB clusters, see
   *             Cluster storage configurations in the <i>Amazon DocumentDB Developer Guide</i>.</p>
   *          <p>Valid values for storage type - <code>standard | iopt1</code>
   *          </p>
   *          <p>Default value is <code>standard </code>
   *          </p>
   *          <note>
   *             <p>When you create a DocumentDB DB cluster with the storage type set to <code>iopt1</code>, the storage type is returned
   *                     in the response. The storage type isn't returned when you set it to <code>standard</code>.</p>
   *          </note>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>Constraint: You can't manage the master user password with Amazon Web Services Secrets Manager if <code>MasterUserPassword</code> is specified.</p>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *             This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the DB cluster.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If you don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code> KMS key is used to encrypt the secret.
   *             If the secret is in a different Amazon Web Services account, then you can't use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer managed KMS key.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;
}

/**
 * <p>Describes an Identity and Access Management (IAM) role that is associated with a
 *             cluster.</p>
 * @public
 */
export interface DBClusterRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAMrole that is associated with the DB
   *             cluster.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Describes the state of association between the IAMrole and the cluster. The <code>Status</code> property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The IAMrole ARN is associated with the cluster and can be used to access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The IAMrole ARN is being associated with the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - The IAMrole ARN is associated with the cluster, but the cluster cannot assume the IAMrole to access other Amazon Web Services services on your behalf.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Contains information about an instance that is part of a cluster.</p>
 * @public
 */
export interface DBClusterMember {
  /**
   * <p>Specifies the instance identifier for this member of the cluster.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>A value that is <code>true</code> if the cluster member is the primary instance for
   *             the cluster and <code>false</code> otherwise.</p>
   * @public
   */
  IsClusterWriter?: boolean | undefined;

  /**
   * <p>Specifies the status of the cluster parameter group for this member of the DB
   *             cluster.</p>
   * @public
   */
  DBClusterParameterGroupStatus?: string | undefined;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance. </p>
   * @public
   */
  PromotionTier?: number | undefined;
}

/**
 * <p>Contains the secret managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the master user password.</p>
 * @public
 */
export interface ClusterMasterUserSecret {
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
   *                <p>creating - The secret is being created.</p>
   *             </li>
   *             <li>
   *                <p>active - The secret is available for normal use and rotation.</p>
   *             </li>
   *             <li>
   *                <p>rotating - The secret is being rotated.</p>
   *             </li>
   *             <li>
   *                <p>impaired - The secret can be used to access database credentials, but it can't be rotated.
   *                 A secret might have this status if, for example, permissions are changed so that Amazon DocumentDB can no longer access either the secret or the KMS key for the secret.</p>
   *                <p>When a secret has this status, you can correct the condition that caused the status.
   *                     Alternatively, modify the instance to turn off automatic management of database credentials, and then modify the instance again to turn on automatic management of database credentials.</p>
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
 * <p>Used as a response element for queries on virtual private cloud (VPC) security group
 *             membership.</p>
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
 * <p>Detailed information about a cluster. </p>
 * @public
 */
export interface DBCluster {
  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the cluster
   *             can be created in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>Specifies the number of days for which automatic snapshots are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>Contains a user-supplied cluster identifier. This identifier is the unique key that
   *             identifies a cluster.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Specifies the name of the cluster parameter group for the cluster.</p>
   * @public
   */
  DBClusterParameterGroup?: string | undefined;

  /**
   * <p>Specifies information on the subnet group that is associated with the cluster, including the name, description, and subnets in the subnet group.</p>
   * @public
   */
  DBSubnetGroup?: string | undefined;

  /**
   * <p>Specifies the current state of this cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Specifies the progress of the operation as a percentage.</p>
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
   * <p>Specifies the connection endpoint for the primary instance of the cluster.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The reader endpoint for the cluster. The reader endpoint for a cluster load balances connections across the Amazon DocumentDB replicas that are available in a cluster. As clients request new connections to the reader endpoint, Amazon DocumentDB distributes the connection requests among the Amazon DocumentDB replicas in the cluster. This functionality can help balance your read workload across multiple Amazon DocumentDB replicas in your cluster. </p>
   *          <p>If a failover occurs, and the Amazon DocumentDB replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Amazon DocumentDB replicas in the cluster, you can then reconnect to the reader endpoint.</p>
   * @public
   */
  ReaderEndpoint?: string | undefined;

  /**
   * <p>Specifies whether the cluster has instances in multiple Availability Zones.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>Provides the name of the database engine to be used for this cluster.</p>
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
   *             restore.</p>
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Contains the master user name for the cluster.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>Specifies the daily time range during which automated backups are created if automated
   *             backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. </p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in
   *             Universal Coordinated Time (UTC).</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Contains the identifier of the source cluster if this cluster is a secondary cluster.</p>
   * @public
   */
  ReplicationSourceIdentifier?: string | undefined;

  /**
   * <p>Contains one or more identifiers of the secondary clusters that are associated with this cluster.</p>
   * @public
   */
  ReadReplicaIdentifiers?: string[] | undefined;

  /**
   * <p>Provides the list of instances that make up the cluster.</p>
   * @public
   */
  DBClusterMembers?: DBClusterMember[] | undefined;

  /**
   * <p>Provides a list of virtual private cloud (VPC) security groups that the cluster
   *             belongs to.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * <p>Specifies whether the cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for
   *             the encrypted cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the cluster. This identifier is
   *             found in CloudTrail log entries whenever the KMS key for the cluster is accessed.</p>
   * @public
   */
  DbClusterResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the cluster.</p>
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * <p>Provides a list of the Identity and Access Management (IAM) roles that are associated with the cluster. (IAM) roles that are associated with a cluster grant permission for the cluster to access other Amazon Web Services services on your behalf.</p>
   * @public
   */
  AssociatedRoles?: DBClusterRole[] | undefined;

  /**
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   * @public
   */
  CloneGroupId?: string | undefined;

  /**
   * <p>Specifies the time when the cluster was created, in Universal Coordinated Time
   *             (UTC).</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>A list of log types that this cluster is configured to export to Amazon CloudWatch
   *             Logs.</p>
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Storage type associated with your cluster</p>
   *          <p>Storage type associated with your cluster</p>
   *          <p>For information on storage types for Amazon DocumentDB clusters, see
   *             Cluster storage configurations in the <i>Amazon DocumentDB Developer Guide</i>.</p>
   *          <p>Valid values for storage type - <code>standard | iopt1</code>
   *          </p>
   *          <p>Default value is <code>standard </code>
   *          </p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The secret managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the master user password.</p>
   * @public
   */
  MasterUserSecret?: ClusterMasterUserSecret | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p>You already have a cluster with the given identifier.</p>
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
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing cluster parameter group. </p>
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
 * <p>The cluster can't be created because you have reached the maximum allowed quota of clusters.</p>
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
 * <p>Subnets in the subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
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
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing subnet group. </p>
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
 * <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global cluster.</p>
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
 * <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
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
 * <p>The subnet group can't be deleted because it's in use.</p>
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
 * <p>The requested operation can't be performed while the cluster is in this state.</p>
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
 * <p>The requested subnet is not valid, or multiple subnets were requested that are not all
 *             in a common virtual private cloud (VPC).</p>
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
 * <p>The subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
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
 * <p>The request would cause you to exceed the allowed amount of storage available across
 *             all instances.</p>
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
 * <p>Represents the input of <a>CreateDBClusterParameterGroup</a>.</p>
 * @public
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must not match the name of an existing
   *                     <code>DBClusterParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The cluster parameter group family name.</p>
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the cluster parameter group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the cluster parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterParameterGroupResult {
  /**
   * <p>Detailed information about a cluster parameter group. </p>
   * @public
   */
  DBClusterParameterGroup?: DBClusterParameterGroup | undefined;
}

/**
 * <p>Represents the input of <a>CreateDBClusterSnapshot</a>.</p>
 * @public
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the cluster snapshot. This parameter is stored
   *             as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.
   *                     </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot1</code>
   *          </p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the cluster to create a snapshot for. This
   *             parameter is not case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing
   *                     <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the cluster snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBClusterSnapshotResult {
  /**
   * <p>Detailed information about a cluster snapshot. </p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>The specified CIDR IP or Amazon EC2 security group isn't authorized for the specified security group.</p>
 *          <p>Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf using IAM.</p>
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
 * <p>Represents the input to <a>CreateDBInstance</a>.</p>
 * @public
 */
export interface CreateDBInstanceMessage {
  /**
   * <p>The instance identifier. This parameter is stored as a lowercase string.</p>
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
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The compute and memory capacity of the instance; for example,
   *                 <code>db.r5.large</code>. </p>
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.</p>
   *          <p>Valid value: <code>docdb</code>
   *          </p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The Amazon EC2 Availability Zone that the instance is created in. </p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p>
   *          <p>Example: <code>us-east-1d</code>
   *          </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The time range each week during which system maintenance can occur, in Universal
   *             Coordinated Time (UTC).</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for
   *             each Amazon Web Services Region, occurring on a random day of the week. </p>
   *          <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The tags to be assigned to the instance. You can assign up to
   *            10 tags to an instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The identifier of the cluster that the instance will belong to.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   *          <p>Default: 1</p>
   *          <p>Valid values: 0-15</p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB Instance. For
   *             more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon
   *                 Performance Insights</a>.</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The KMS key identifier for encryption of Performance Insights
   *             data.</p>
   *          <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name
   *             for the KMS key.</p>
   *          <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your
   *             default KMS key. There is a default KMS key for your
   *             Amazon Web Services account. Your Amazon Web Services account has a different
   *             default KMS key for each Amazon Web Services region.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The CA certificate identifier to use for the DB instance's server certificate.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/ca_cert_rotation.html">Updating Your Amazon DocumentDB TLS
   *             Certificates</a> and
   *             <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html">
   *                 Encrypting Data in Transit</a> in the <i>Amazon DocumentDB Developer
   *                     Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;
}

/**
 * <p>Returns the details of the DB instance’s server certificate.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/ca_cert_rotation.html">Updating Your Amazon DocumentDB TLS
 *             Certificates</a> and
 *             <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html">
 *                 Encrypting Data in Transit</a> in the <i>Amazon DocumentDB Developer
 *                     Guide</i>.</p>
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
 * <p>Information about an Availability Zone.</p>
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
 * <p> Detailed information about a subnet. </p>
 * @public
 */
export interface Subnet {
  /**
   * <p>Specifies the identifier of the subnet.</p>
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * <p>Specifies the Availability Zone for the subnet.</p>
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
 * <p>Detailed information about a subnet group. </p>
 * @public
 */
export interface DBSubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>Provides the description of the subnet group.</p>
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * <p>Provides the virtual private cloud (VPC) ID of the subnet group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Provides the status of the subnet group.</p>
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * <p>Detailed information about one or more subnets within a subnet group.</p>
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
 * <p>Network information for accessing a cluster or instance. Client programs must
 *             specify a valid endpoint to access these Amazon DocumentDB resources.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>Specifies the DNS address of the instance.</p>
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
 * <p>A list of the log types whose configuration is still pending. These log types are in
 *             the process of being activated or deactivated.</p>
 * @public
 */
export interface PendingCloudwatchLogsExports {
  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated,
   *             these log types aren't exported to CloudWatch Logs.</p>
   * @public
   */
  LogTypesToEnable?: string[] | undefined;

  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log
   *             types are exported to Amazon CloudWatch Logs.</p>
   * @public
   */
  LogTypesToDisable?: string[] | undefined;
}

/**
 * <p> One or more modified settings for an instance. These modified settings have been
 *             requested, but haven't been applied yet.</p>
 * @public
 */
export interface PendingModifiedValues {
  /**
   * <p> Contains the new <code>DBInstanceClass</code> for the instance that will be
   *             applied or is currently being applied. </p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p> Contains the new <code>AllocatedStorage</code> size for then instance that will be
   *             applied or is currently being applied. </p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>Contains the pending or currently in-progress change of the master credentials for the
   *             instance.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>Specifies the pending port for the instance.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>Indicates that the Single-AZ instance is to change to a Multi-AZ deployment.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>Indicates the database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The license model for the instance.</p>
   *          <p>Valid values: <code>license-included</code>, <code>bring-your-own-license</code>,
   *                 <code>general-public-license</code>
   *          </p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>Specifies the new Provisioned IOPS value for the instance that will be applied or
   *             is currently being applied.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the instance that will be
   *             applied or is currently being applied. </p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>Specifies the storage type to be associated with the instance.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Specifies the identifier of the certificate authority (CA) certificate for the DB
   *             instance.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The new subnet group for the instance. </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>A list of the log types whose configuration is still pending. These log types are in
   *             the process of being activated or deactivated.</p>
   * @public
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports | undefined;
}

/**
 * <p>Provides a list of status information for an instance.</p>
 * @public
 */
export interface DBInstanceStatusInfo {
  /**
   * <p>This value is currently "<code>read replication</code>."</p>
   * @public
   */
  StatusType?: string | undefined;

  /**
   * <p>A Boolean value that is <code>true</code> if the instance is operating normally, or
   *                 <code>false</code> if the instance is in an error state.</p>
   * @public
   */
  Normal?: boolean | undefined;

  /**
   * <p>Status of the instance. For a <code>StatusType</code> of read replica, the values
   *             can be <code>replicating</code>, error, <code>stopped</code>, or
   *             <code>terminated</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Details of the error if there is an error for the instance. If the instance is not in
   *             an error state, this value is blank.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Detailed information about an instance. </p>
 * @public
 */
export interface DBInstance {
  /**
   * <p>Contains a user-provided database identifier. This identifier is the unique key that
   *             identifies an instance.</p>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>Contains the name of the compute and memory capacity class of the instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>Provides the name of the database engine to be used for this instance.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Specifies the current state of this database.</p>
   * @public
   */
  DBInstanceStatus?: string | undefined;

  /**
   * <p>Specifies the connection endpoint.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * <p>Provides the date and time that the instance was created.</p>
   * @public
   */
  InstanceCreateTime?: Date | undefined;

  /**
   * <p> Specifies the daily time range during which automated backups are created if
   *             automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.
   *         </p>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>Specifies the number of days for which automatic snapshots are retained.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>Provides a list of VPC security group elements that the instance belongs to.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>Specifies the name of the Availability Zone that the instance is located in.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>Specifies information on the subnet group that is associated with the instance, including the name, description, and subnets in the subnet group.</p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in
   *             Universal Coordinated Time (UTC).</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Specifies that changes to the instance are pending. This element is included only when changes are pending. Specific changes are identified by subelements.</p>
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *             restore.</p>
   * @public
   */
  LatestRestorableTime?: Date | undefined;

  /**
   * <p>Indicates the database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Does not apply. This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Not supported. Amazon DocumentDB does not currently support public endpoints. The value
   *           of <code>PubliclyAccessible</code> is always <code>false</code>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The status of a read replica. If the instance is not a read replica, this is
   *             blank.</p>
   * @public
   */
  StatusInfos?: DBInstanceStatusInfo[] | undefined;

  /**
   * <p>Contains the name of the cluster that the instance is a member of if the
   *             instance is a member of a cluster.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>Specifies whether or not the instance is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p> If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for
   *             the encrypted instance. </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the instance. This identifier is found in CloudTrail log entries whenever the KMS key for the instance is
   *             accessed.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the instance.</p>
   * @public
   */
  DBInstanceArn?: string | undefined;

  /**
   * <p>A list of log types that this instance is configured to export to CloudWatch Logs.</p>
   * @public
   */
  EnabledCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The details of the DB instance's server certificate.</p>
   * @public
   */
  CertificateDetails?: CertificateDetails | undefined;

  /**
   * <p>Set to <code>true</code> if Amazon RDS Performance Insights is enabled for the DB instance, and otherwise <code>false</code>.</p>
   * @public
   */
  PerformanceInsightsEnabled?: boolean | undefined;

  /**
   * <p>The KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDBInstanceResult {
  /**
   * <p>Detailed information about an instance. </p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>You already have a instance with the given identifier.</p>
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
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing security group. </p>
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
 * <p>The request would cause you to exceed the allowed number of instances.</p>
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
 * <p>The specified instance class isn't available in the specified Availability Zone.</p>
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
 * <p>Storage of the specified <code>StorageType</code> can't be associated with the DB
 *             instance. </p>
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
 * <p>Represents the input to <a>CreateDBSubnetGroup</a>.</p>
 * @public
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * <p>The name for the subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores,
   *             spaces, or hyphens. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the subnet group.</p>
   * @public
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * <p>The Amazon EC2 subnet IDs for the subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The tags to be assigned to the subnet group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDBSubnetGroupResult {
  /**
   * <p>Detailed information about a subnet group. </p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> is already being used by an existing subnet group. </p>
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
 * <p>The request would cause you to exceed the allowed number of subnet groups.</p>
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
 * <p>The request would cause you to exceed the allowed number of subnets in a subnet group.</p>
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
 * <p>Represents the input to <a>CreateEventSubscription</a>.</p>
 * @public
 */
export interface CreateEventSubscriptionMessage {
  /**
   * <p>The name of the subscription.</p>
   *          <p>Constraints: The name must be fewer than 255 characters.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.</p>
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, you would set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code>, <code>db-cluster</code>,
   *                 <code>db-parameter-group</code>, <code>db-security-group</code>,
   *                 <code>db-cluster-snapshot</code>
   *          </p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p> A list of event categories for a <code>SourceType</code> that you want to subscribe to. </p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a
   *             hyphen or contain two consecutive hyphens.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>SourceIds</code> are provided, <code>SourceType</code> must also be
   *                     provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is an instance, a <code>DBInstanceIdentifier</code> must
   *                     be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a security group, a <code>DBSecurityGroupName</code>
   *                     must be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a parameter group, a
   *                         <code>DBParameterGroupName</code> must be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a snapshot, a <code>DBSnapshotIdentifier</code> must
   *                     be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * <p> A Boolean value; set to <code>true</code> to activate the subscription, set to <code>false</code> to create the subscription but not active it. </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The tags to be assigned to the event subscription.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionResult {
  /**
   * <p>Detailed information about an event to which you have subscribed.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>You have reached the maximum number of event subscriptions. </p>
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
 * <p>Amazon SNS has responded that there is a problem with the specified topic. </p>
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
 * <p>You do not have permission to publish to the SNS topic Amazon Resource Name (ARN). </p>
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
 * <p>The SNS topic Amazon Resource Name (ARN) does not exist. </p>
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
 * <p>The provided subscription name already exists. </p>
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
 * <p>The provided category does not exist. </p>
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
 * <p>Represents the input to <a>CreateGlobalCluster</a>.</p>
 * @public
 */
export interface CreateGlobalClusterMessage {
  /**
   * <p>The cluster identifier of the new global cluster.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.</p>
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * <p>The name of the database engine to be used for this cluster.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The engine version of the global cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled. </p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The storage encryption setting for the new global cluster. </p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;
}

/**
 * <p>A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters. </p>
 * @public
 */
export interface GlobalClusterMember {
  /**
   * <p>The Amazon Resource Name (ARN) for each Amazon DocumentDB cluster.</p>
   * @public
   */
  DBClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the Aurora global cluster.</p>
   * @public
   */
  Readers?: string[] | undefined;

  /**
   * <p> Specifies whether the Amazon DocumentDB cluster is the primary cluster (that is, has read-write capability) for the Amazon DocumentDB global cluster with which it is associated. </p>
   * @public
   */
  IsWriter?: boolean | undefined;
}

/**
 * <p>A data type representing an Amazon DocumentDB global cluster.</p>
 * @public
 */
export interface GlobalCluster {
  /**
   * <p>Contains a user-supplied global  cluster identifier. This identifier is the unique key that identifies a global cluster. </p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the global database cluster. This identifier is found in CloudTrail log entries whenever the KMS customer master key (CMK) for the cluster is accessed. </p>
   * @public
   */
  GlobalClusterResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the global cluster.</p>
   * @public
   */
  GlobalClusterArn?: string | undefined;

  /**
   * <p>Specifies the current state of this global cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The Amazon DocumentDB database engine used by the global cluster. </p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Indicates the database engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The default database name within the new global cluster.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The storage encryption setting for the global cluster.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The deletion protection setting for the new global cluster.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The list of cluster IDs for secondary clusters within the global cluster. Currently limited to one item. </p>
   * @public
   */
  GlobalClusterMembers?: GlobalClusterMember[] | undefined;
}

/**
 * @public
 */
export interface CreateGlobalClusterResult {
  /**
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>The <code>GlobalClusterIdentifier</code> already exists. Choose a new global cluster identifier (unique name) to create a new global cluster. </p>
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
 * <p>The number of global  clusters for this account is already at the maximum allowed.</p>
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
 * <p>Represents the input to <a>DeleteDBCluster</a>.</p>
 * @public
 */
export interface DeleteDBClusterMessage {
  /**
   * <p>The cluster identifier for the cluster to be deleted. This parameter isn't case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing <code>DBClusterIdentifier</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p> Determines whether a final cluster snapshot is created before the cluster is deleted. If <code>true</code> is specified, no cluster snapshot is created. If <code>false</code> is specified, a cluster snapshot is created before the DB cluster is deleted. </p>
   *          <note>
   *             <p>If <code>SkipFinalSnapshot</code> is <code>false</code>, you must specify a <code>FinalDBSnapshotIdentifier</code> parameter.</p>
   *          </note>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  SkipFinalSnapshot?: boolean | undefined;

  /**
   * <p> The cluster snapshot identifier of the new cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>. </p>
   *          <note>
   *             <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to <code>true</code> results in an error. </p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be from 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
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
   * <p>Detailed information about a cluster. </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p>Represents the input to <a>DeleteDBClusterParameterGroup</a>.</p>
 * @public
 */
export interface DeleteDBClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the name of an existing cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>You can't delete a default cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be associated with any clusters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;
}

/**
 * <p>The parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
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
 * <p>Represents the input to <a>DeleteDBClusterSnapshot</a>.</p>
 * @public
 */
export interface DeleteDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing cluster snapshot in the <code>available</code> state.</p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterSnapshotResult {
  /**
   * <p>Detailed information about a cluster snapshot. </p>
   * @public
   */
  DBClusterSnapshot?: DBClusterSnapshot | undefined;
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> is already being used by an existing snapshot. </p>
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
 * <p>Represents the input to <a>DeleteDBInstance</a>.</p>
 * @public
 */
export interface DeleteDBInstanceMessage {
  /**
   * <p>The instance identifier for the instance to be deleted. This parameter isn't
   *             case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceResult {
  /**
   * <p>Detailed information about an instance. </p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>Represents the input to <a>DeleteDBSubnetGroup</a>.</p>
 * @public
 */
export interface DeleteDBSubnetGroupMessage {
  /**
   * <p>The name of the database subnet group to delete.</p>
   *          <note>
   *             <p>You can't delete the default subnet group.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <p>Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName: string | undefined;
}

/**
 * <p> The subnet isn't in the <i>available</i> state. </p>
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
 * <p>Represents the input to <a>DeleteEventSubscription</a>.</p>
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the Amazon DocumentDB event notification subscription that you want to delete.</p>
   * @public
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionResult {
  /**
   * <p>Detailed information about an event to which you have subscribed.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>Someone else might be modifying a subscription. Wait a few seconds, and try
 *             again.</p>
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
 * <p>Represents the input to <a>DeleteGlobalCluster</a>.</p>
 * @public
 */
export interface DeleteGlobalClusterMessage {
  /**
   * <p>The cluster identifier of the global cluster being deleted.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalClusterResult {
  /**
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>A certificate authority (CA) certificate for an Amazon Web Services account.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The unique key that identifies a certificate.</p>
   *          <p>Example: <code>rds-ca-2019</code>
   *          </p>
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * <p>The type of the certificate.</p>
   *          <p>Example: <code>CA</code>
   *          </p>
   * @public
   */
  CertificateType?: string | undefined;

  /**
   * <p>The thumbprint of the certificate.</p>
   * @public
   */
  Thumbprint?: string | undefined;

  /**
   * <p>The starting date-time from which the certificate is valid.</p>
   *          <p>Example: <code>2019-07-31T17:57:09Z</code>
   *          </p>
   * @public
   */
  ValidFrom?: Date | undefined;

  /**
   * <p>The date-time after which the certificate is no longer valid.</p>
   *          <p>Example: <code>2024-07-31T17:57:09Z</code>
   *          </p>
   * @public
   */
  ValidTill?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   *          <p>Example: <code>arn:aws:rds:us-east-1::cert:rds-ca-2019</code>
   *          </p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface CertificateMessage {
  /**
   * <p>A list of certificates for this Amazon Web Services account.</p>
   * @public
   */
  Certificates?: Certificate[] | undefined;

  /**
   * <p>An optional pagination token provided if the number of records retrieved is greater than <code>MaxRecords</code>. If this parameter is specified, the marker specifies the next record in the list. Including the value of <code>Marker</code> in the next call to <code>DescribeCertificates</code> results in the next page of certificates.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an existing certificate. </p>
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
 * <p>A named set of filter values, used to return a more specific list of results. You can
 *             use a filter to match a set of resources by specific criteria, such as IDs.</p>
 *          <p>Wildcards are not supported in filters.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case sensitive.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>One or more filter values. Filter values are case sensitive.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesMessage {
  /**
   * <p>The user-supplied certificate identifier. If this parameter is specified, information for only the specified certificate is returned. If this parameter is omitted, a list of up to <code>MaxRecords</code> certificates is returned. This parameter is not case sensitive.</p>
   *          <p>Constraints</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing <code>CertificateIdentifier</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Minimum: 20</p>
   *             </li>
   *             <li>
   *                <p>Maximum: 100</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeCertificates</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the output of <a>DBClusterParameterGroups</a>.</p>
 * @public
 */
export interface DBClusterParameterGroupsMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of cluster parameter groups.</p>
   * @public
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[] | undefined;
}

/**
 * <p>Represents the input to <a>DescribeDBClusterParameterGroups</a>.</p>
 * @public
 */
export interface DescribeDBClusterParameterGroupsMessage {
  /**
   * <p>The name of a specific cluster parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the name of an existing
   *                         <code>DBClusterParameterGroup</code>.</p>
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
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
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
 * <p>Detailed information about an individual parameter.</p>
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
   * <p>Specifies the engine-specific parameters type.</p>
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
   * <p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can
   *             be modified. Some parameters have security or operational implications that prevent them
   *             from being changed. </p>
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
 * <p>Represents the output of <a>DBClusterParameterGroup</a>.</p>
 * @public
 */
export interface DBClusterParameterGroupDetails {
  /**
   * <p>Provides a list of parameters for the cluster parameter group.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the input to <a>DescribeDBClusterParameters</a>.</p>
 * @public
 */
export interface DescribeDBClusterParametersMessage {
  /**
   * <p>The name of a specific cluster parameter group to return parameter details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p> A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.
   *         </p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the output of <a>DescribeDBClusters</a>.</p>
 * @public
 */
export interface DBClusterMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of clusters.</p>
   * @public
   */
  DBClusters?: DBCluster[] | undefined;
}

/**
 * <p>Represents the input to <a>DescribeDBClusters</a>.</p>
 * @public
 */
export interface DescribeDBClustersMessage {
  /**
   * <p>The user-provided cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match an existing <code>DBClusterIdentifier</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>A filter that specifies one or more clusters to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list only includes information about the clusters identified by these ARNs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>.</p>
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  /**
   * <p>The identifier for the cluster snapshot to describe the attributes for.</p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * <p>Contains the name and values of a manual cluster snapshot attribute.</p>
 *          <p>Manual cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual cluster snapshot.</p>
 * @public
 */
export interface DBClusterSnapshotAttribute {
  /**
   * <p>The name of the manual cluster snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of Amazon Web Services accounts that have permission to copy or restore the manual cluster snapshot.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The values for the manual cluster snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If a value of <code>all</code> is in the list, then the manual cluster snapshot is public and available for any Amazon Web Services account to copy or restore.</p>
   * @public
   */
  AttributeValues?: string[] | undefined;
}

/**
 * <p>Detailed information about the attributes that are associated with a cluster
 *             snapshot.</p>
 * @public
 */
export interface DBClusterSnapshotAttributesResult {
  /**
   * <p>The identifier of the cluster snapshot that the attributes apply to.</p>
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>The list of attributes and values for the cluster snapshot.</p>
   * @public
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesResult {
  /**
   * <p>Detailed information about the attributes that are associated with a cluster
   *             snapshot.</p>
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * <p>Represents the output of <a>DescribeDBClusterSnapshots</a>.</p>
 * @public
 */
export interface DBClusterSnapshotMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Provides a list of cluster snapshots.</p>
   * @public
   */
  DBClusterSnapshots?: DBClusterSnapshot[] | undefined;
}

/**
 * <p>Represents the input to <a>DescribeDBClusterSnapshots</a>.</p>
 * @public
 */
export interface DescribeDBClusterSnapshotsMessage {
  /**
   * <p>The ID of the cluster to retrieve the list of cluster snapshots for. This parameter can't be used with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case sensitive. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the identifier of an existing
   *                     <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>A specific cluster snapshot identifier to describe. This parameter can't be used with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the identifier of an existing
   *                         <code>DBClusterSnapshot</code>.</p>
   *             </li>
   *             <li>
   *                <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code>
   *                     parameter must also be specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>The type of cluster snapshots to be returned. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all cluster snapshots that Amazon DocumentDB has automatically created for your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all cluster snapshots that you have manually created for your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shared</code> - Return all manual cluster snapshots that have been shared to your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public</code> - Return all cluster snapshots that have been marked as public.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual cluster snapshots are returned. You can include shared cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public cluster snapshots with these results by setting the<code>IncludePublic</code> parameter to <code>true</code>.</p>
   *          <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Set to <code>true</code> to include shared manual cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore, and otherwise <code>false</code>. The default is <code>false</code>.</p>
   * @public
   */
  IncludeShared?: boolean | undefined;

  /**
   * <p>Set to <code>true</code> to include manual cluster snapshots that are public and can be copied or restored by any Amazon Web Services account, and otherwise <code>false</code>. The default is <code>false</code>.</p>
   * @public
   */
  IncludePublic?: boolean | undefined;
}

/**
 * <p>The version of the database engine that an instance can be upgraded to.</p>
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
   * <p>The version of the database engine that an instance can be upgraded to.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A value that indicates whether the target version is applied to any source DB instances that have <code>AutoMinorVersionUpgrade</code> set to <code>true</code>.</p>
   * @public
   */
  AutoUpgrade?: boolean | undefined;

  /**
   * <p>A value that indicates whether a database engine is upgraded to a major
   *             version.</p>
   * @public
   */
  IsMajorVersionUpgrade?: boolean | undefined;
}

/**
 * <p> Detailed information about an engine version. </p>
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
   * <p>The name of the parameter group family for the database engine.</p>
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
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   * @public
   */
  ValidUpgradeTarget?: UpgradeTarget[] | undefined;

  /**
   * <p>The types of logs that the database engine has available for export to Amazon
   *             CloudWatch Logs.</p>
   * @public
   */
  ExportableLogTypes?: string[] | undefined;

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types
   *             specified by <code>ExportableLogTypes</code> to CloudWatch Logs.</p>
   * @public
   */
  SupportsLogExportsToCloudwatchLogs?: boolean | undefined;

  /**
   * <p>A list of the supported CA certificate identifiers.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/ca_cert_rotation.html">Updating Your Amazon DocumentDB TLS
   *             Certificates</a> and
   *             <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html">
   *                 Encrypting Data in Transit</a> in the <i>Amazon DocumentDB Developer
   *                     Guide</i>.</p>
   * @public
   */
  SupportedCACertificateIdentifiers?: string[] | undefined;

  /**
   * <p>Indicates whether the engine version supports rotating the server certificate without
   *             rebooting the DB instance.</p>
   * @public
   */
  SupportsCertificateRotationWithoutRestart?: boolean | undefined;
}

/**
 * <p>Represents the output of <a>DescribeDBEngineVersions</a>.</p>
 * @public
 */
export interface DBEngineVersionMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Detailed information about one or more engine versions.</p>
   * @public
   */
  DBEngineVersions?: DBEngineVersion[] | undefined;
}

/**
 * <p>Represents the input to <a>DescribeDBEngineVersions</a>.</p>
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
   *          <p>Example: <code>3.6.0</code>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of a specific parameter group family to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match an existing
   *                     <code>DBParameterGroupFamily</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Indicates that only the default version of the specified engine or engine and major
   *             version combination is returned.</p>
   * @public
   */
  DefaultOnly?: boolean | undefined;

  /**
   * <p>If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version. </p>
   * @public
   */
  ListSupportedCharacterSets?: boolean | undefined;

  /**
   * <p>If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version. </p>
   * @public
   */
  ListSupportedTimezones?: boolean | undefined;
}

/**
 * <p>Represents the output of <a>DescribeDBInstances</a>.</p>
 * @public
 */
export interface DBInstanceMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Detailed information about one or more instances. </p>
   * @public
   */
  DBInstances?: DBInstance[] | undefined;
}

/**
 * <p>Represents the input to <a>DescribeDBInstances</a>.</p>
 * @public
 */
export interface DescribeDBInstancesMessage {
  /**
   * <p>The user-provided instance identifier. If this parameter is specified, information from only the specific instance is returned. This parameter isn't case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the identifier of an existing
   *                     <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * <p>A filter that specifies one or more instances to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list includes only the information about the instances that are associated with the clusters that are identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts instance identifiers and instance ARNs. The results list includes only the information about the instances that are identified by these ARNs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the output of <a>DescribeDBSubnetGroups</a>.</p>
 * @public
 */
export interface DBSubnetGroupMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Detailed information about one or more subnet groups.</p>
   * @public
   */
  DBSubnetGroups?: DBSubnetGroup[] | undefined;
}

/**
 * <p>Represents the input to <a>DescribeDBSubnetGroups</a>.</p>
 * @public
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * <p>The name of the subnet group to return details for.</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the input to <a>DescribeEngineDefaultClusterParameters</a>.</p>
 * @public
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * <p>The name of the cluster parameter group family to return the engine parameter
   *             information for.</p>
   * @public
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains the result of a successful invocation of the
 *                 <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
 * @public
 */
export interface EngineDefaults {
  /**
   * <p>The name of the cluster parameter group family to return the engine parameter information for.</p>
   * @public
   */
  DBParameterGroupFamily?: string | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The parameters of a particular cluster parameter group family.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * <p>Contains the result of a successful invocation of the
   *                 <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
   * @public
   */
  EngineDefaults?: EngineDefaults | undefined;
}

/**
 * <p>Represents the input to <a>DescribeEventCategories</a>.</p>
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>The type of source that is generating the events.</p>
   *          <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code>
   *          </p>
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
 * <p>An event source type, accompanied by one or more event category names.</p>
 * @public
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type that the returned categories belong to.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The event categories for the specified source type.</p>
   * @public
   */
  EventCategories?: string[] | undefined;
}

/**
 * <p>Represents the output of <a>DescribeEventCategories</a>.</p>
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * <p>A list of event category maps.</p>
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
 * <p>Represents the input to <a>DescribeEvents</a>.</p>
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>SourceIdentifier</code> is provided, <code>SourceType</code> must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBInstance</code>, a
   *                         <code>DBInstanceIdentifier</code> must be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBSecurityGroup</code>, a
   *                         <code>DBSecurityGroupName</code> must be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBParameterGroup</code>, a
   *                         <code>DBParameterGroupName</code> must be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBSnapshot</code>, a
   *                         <code>DBSnapshotIdentifier</code> must be provided.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p> The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format. </p>
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
   * <p>A list of event categories that trigger notifications for an event notification
   *             subscription.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Detailed information about an event.</p>
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
 * <p>Represents the output of <a>DescribeEvents</a>.</p>
 * @public
 */
export interface EventsMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Detailed information about one or more events. </p>
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * <p>Represents the input to <a>DescribeEventSubscriptions</a>.</p>
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the Amazon DocumentDB event notification subscription that you want to
   *             describe.</p>
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the output of <a>DescribeEventSubscriptions</a>.</p>
 * @public
 */
export interface EventSubscriptionsMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of event subscriptions.</p>
   * @public
   */
  EventSubscriptionsList?: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeGlobalClustersMessage {
  /**
   * <p>The user-supplied  cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case-sensitive.</p>
   * @public
   */
  GlobalClusterIdentifier?: string | undefined;

  /**
   * <p>A filter that specifies one or more global DB clusters to describe.</p>
   *          <p>Supported filters: <code>db-cluster-id</code> accepts  cluster identifiers and  cluster Amazon Resource Names (ARNs). The results list will only include information about the clusters identified by these ARNs.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GlobalClustersMessage {
  /**
   * <p></p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  GlobalClusters?: GlobalCluster[] | undefined;
}

/**
 * <p>Represents the input to <a>DescribeOrderableDBInstanceOptions</a>.</p>
 * @public
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * <p>The name of the engine to retrieve instance options for.</p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available
   *             offerings that match the specified engine version.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The instance class filter value. Specify this parameter to show only the available
   *             offerings that match the specified instance class.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available
   *             offerings that match the specified license model.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) filter value. Specify this parameter to show only the
   *             available VPC or non-VPC offerings.</p>
   * @public
   */
  Vpc?: boolean | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>The options that are available for an instance.</p>
 * @public
 */
export interface OrderableDBInstanceOption {
  /**
   * <p>The engine type of an instance.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The engine version of an instance.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The instance class for an instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The license model for an instance.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>A list of Availability Zones for an instance.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * <p>Indicates whether an instance is in a virtual private cloud (VPC).</p>
   * @public
   */
  Vpc?: boolean | undefined;

  /**
   * <p>The storage type to associate with the DB cluster</p>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * <p>Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.</p>
 * @public
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * <p>The options that are available for a particular orderable instance.</p>
   * @public
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the input to <a>DescribePendingMaintenanceActions</a>.</p>
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
   *             for.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts cluster identifiers and cluster
   *                     Amazon Resource Names (ARNs). The results list includes only pending maintenance
   *                     actions for the clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts instance identifiers and instance
   *                     ARNs. The results list includes only pending maintenance actions for the DB
   *                     instances identified by these ARNs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * <p>Represents the output of <a>DescribePendingMaintenanceActions</a>.</p>
 * @public
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * <p>The maintenance actions to be applied.</p>
   * @public
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Represents the input to <a>FailoverDBCluster</a>.</p>
 * @public
 */
export interface FailoverDBClusterMessage {
  /**
   * <p>A cluster identifier to force a failover for. This parameter is not case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>The name of the instance to promote to the primary instance.</p>
   *          <p>You must specify the instance identifier for an Amazon DocumentDB replica in the cluster. For
   *             example, <code>mydbcluster-replica1</code>.</p>
   * @public
   */
  TargetDBInstanceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface FailoverDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterMessage {
  /**
   * <p>The identifier of the Amazon DocumentDB global cluster to apply this operation.
   *             The identifier is the unique key assigned by the user when the cluster is created.
   *             In other words, it's the name of the global cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global cluster.</p>
   *             </li>
   *             <li>
   *                <p>Minimum length of 1. Maximum length of 255.</p>
   *             </li>
   *          </ul>
   *          <p>Pattern: <code>[A-Za-z][0-9A-Za-z-:._]*</code>
   *          </p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the secondary Amazon DocumentDB cluster that you want to promote to the primary for the global cluster.
   *             Use the Amazon Resource Name (ARN) for the identifier so that Amazon DocumentDB can locate the cluster in its Amazon Web Services region.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing secondary cluster.</p>
   *             </li>
   *             <li>
   *                <p>Minimum length of 1. Maximum length of 255.</p>
   *             </li>
   *          </ul>
   *          <p>Pattern: <code>[A-Za-z][0-9A-Za-z-:._]*</code>
   *          </p>
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;

  /**
   * <p>Specifies whether to allow data loss for this global cluster operation. Allowing data loss triggers a global failover operation.</p>
   *          <p>If you don't specify <code>AllowDataLoss</code>, the global cluster operation defaults to a switchover.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified together with the <code>Switchover</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AllowDataLoss?: boolean | undefined;

  /**
   * <p>Specifies whether to switch over this global database cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified together with the <code>AllowDataLoss</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Switchover?: boolean | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterResult {
  /**
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>Represents the input to <a>ListTagsForResource</a>.</p>
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name
   *             (ARN).</p>
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
 * <p>Represents the output of <a>ListTagsForResource</a>.</p>
 * @public
 */
export interface TagListMessage {
  /**
   * <p>A list of one or more tags.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * <p>The state of the security group doesn't allow deletion.</p>
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
 * <p>The configuration setting for the log types to be enabled for export to Amazon
 *             CloudWatch Logs for a specific instance or cluster.</p>
 *          <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine
 *             which logs are exported (or not exported) to CloudWatch Logs. The values within these
 *             arrays depend on the engine that is being used.</p>
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
 * <p>Represents the input to <a>ModifyDBCluster</a>.</p>
 * @public
 */
export interface ModifyDBClusterMessage {
  /**
   * <p>The cluster identifier for the cluster that is being modified. This parameter is
   *             not case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster identifier for the cluster when renaming a cluster. This
   *             value is stored as a lowercase string.</p>
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
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   * @public
   */
  NewDBClusterIdentifier?: string | undefined;

  /**
   * <p>A value that specifies whether the changes in this request and any pending changes are
   *             asynchronously applied as soon as possible, regardless of the
   *                 <code>PreferredMaintenanceWindow</code> setting for the cluster. If this
   *             parameter is set to <code>false</code>, changes to the cluster are applied during the
   *             next maintenance window.</p>
   *          <p>The <code>ApplyImmediately</code> parameter affects only the
   *                 <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If
   *             you set this parameter value to <code>false</code>, the changes to the
   *                 <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are
   *             applied during the next maintenance window. All other changes are applied immediately,
   *             regardless of the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a
   *             minimum value of 1.</p>
   *          <p>Default: 1</p>
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
   * <p>The name of the cluster parameter group to use for the cluster.</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of virtual private cloud (VPC) security groups that the cluster will belong
   *             to.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The port number on which the cluster accepts connections.</p>
   *          <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p>
   *          <p>Default: The same port as the original cluster.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The password for the master database user. This password can contain any printable
   *             ASCII character except forward slash (/), double quote ("), or the "at" symbol
   *             (@).</p>
   *          <p>Constraints: Must contain from 8 to 100 characters.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created if automated backups
   *             are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for
   *             each Amazon Web Services Region. </p>
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
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *             Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for
   *             each Amazon Web Services Region, occurring on a random day of the week. </p>
   *          <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The configuration setting for the log types to be enabled for export to Amazon
   *             CloudWatch Logs for a specific instance or cluster. The
   *                 <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which
   *             logs are exported (or not exported) to CloudWatch Logs.</p>
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *              Changing this parameter results in an outage. The change is applied during
   *              the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *          <p>To list all of the available engine versions for Amazon DocumentDB use the following command:</p>
   *          <p>
   *             <code>aws docdb describe-db-engine-versions --engine docdb --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *          <p>Constraints: You must allow major version upgrades when specifying a value for the
   *              <code>EngineVersion</code> parameter that is a different major version than the DB
   *              cluster's current version.</p>
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>For information on storage types for Amazon DocumentDB clusters, see
   *             Cluster storage configurations in the <i>Amazon DocumentDB Developer Guide</i>.</p>
   *          <p>Valid values for storage type - <code>standard | iopt1</code>
   *          </p>
   *          <p>Default value is <code>standard </code>
   *          </p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *             If the cluster doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn on this management.
   *             In this case, you can't specify <code>MasterUserPassword</code>.
   *             If the cluster already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the master user password is not managed with Amazon Web Services Secrets Manager, then you must specify <code>MasterUserPassword</code>.
   *             In this case, Amazon DocumentDB deletes the secret and uses the new password for the master user specified by <code>MasterUserPassword</code>.</p>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if both of the following conditions are met:</p>
   *          <ul>
   *             <li>
   *                <p>The cluster doesn't manage the master user password in Amazon Web Services Secrets Manager.
   *                 If the cluster already manages the master user password in Amazon Web Services Secrets Manager, you can't change the KMS key that is used to encrypt the secret.</p>
   *             </li>
   *             <li>
   *                <p>You are enabling <code>ManageMasterUserPassword</code> to manage the master user password in Amazon Web Services Secrets Manager.
   *                 If you are turning on <code>ManageMasterUserPassword</code> and don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code> KMS key is used to encrypt the secret.
   *                 If the secret is in a different Amazon Web Services account, then you can't use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer managed KMS key.</p>
   *             </li>
   *          </ul>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password.</p>
   *          <p>This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the cluster.
   *             The secret value contains the updated password.</p>
   *          <p>Constraint: You must apply the change immediately when rotating the master user password.</p>
   * @public
   */
  RotateMasterUserPassword?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p>Contains the name of a cluster parameter group.</p>
 * @public
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * <p>The name of a cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be from 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
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
 * <p>Represents the input to <a>ModifyDBClusterParameterGroup</a>.</p>
 * @public
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group to modify.</p>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the cluster parameter group to modify.</p>
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * <p>Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>.</p>
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * <p>The identifier for the cluster snapshot to modify the attributes for.</p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the cluster snapshot attribute to modify.</p>
   *          <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual cluster
   *             snapshot, set this value to <code>restore</code>.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To authorize other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account IDs. To make the manual cluster snapshot restorable by any Amazon Web Services account, set it to <code>all</code>. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want to be available to all Amazon Web Services accounts.</p>
   * @public
   */
  ValuesToAdd?: string[] | undefined;

  /**
   * <p>A list of cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account identifiers. To remove authorization for any Amazon Web Services account to copy or restore the cluster snapshot, set it to <code>all</code> . If you specify <code>all</code>, an Amazon Web Services account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual cluster snapshot.</p>
   * @public
   */
  ValuesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * <p>Detailed information about the attributes that are associated with a cluster
   *             snapshot.</p>
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB
 *             snapshot with. </p>
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
 * <p>The upgrade failed because a resource that the depends on can't be
 *             modified.</p>
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
 * <p>Represents the input to <a>ModifyDBInstance</a>.</p>
 * @public
 */
export interface ModifyDBInstanceMessage {
  /**
   * <p>The instance identifier. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The new compute and memory capacity of the instance; for example, <code>db.r5.large</code>. Not all instance classes are available in all Amazon Web Services Regions. </p>
   *          <p>If you modify the instance class, an outage occurs during the change. The change is
   *             applied during the next maintenance window, unless <code>ApplyImmediately</code> is
   *             specified as <code>true</code> for this request. </p>
   *          <p>Default: Uses existing setting.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>Specifies whether the modifications in this request and any pending modifications are
   *             asynchronously applied as soon as possible, regardless of the
   *                 <code>PreferredMaintenanceWindow</code> setting for the instance. </p>
   *          <p> If this parameter is set to <code>false</code>, changes to the instance are
   *             applied during the next maintenance window. Some parameter changes can cause an outage
   *             and are applied on the next reboot.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *             result in an outage. Changing this parameter doesn't result in an outage except in the
   *             following situation, and the change is asynchronously applied as soon as possible. If
   *             there are pending actions that cause a reboot, and the maintenance window is changed to
   *             include the current time, changing this parameter causes a reboot of the instance. If
   *             you are moving this window to the current time, there must be at least 30 minutes
   *             between the current time and end of the window to ensure that pending changes are
   *             applied.</p>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Must be at least 30 minutes.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p> The new instance identifier for the instance when renaming an instance. When you change the instance identifier, an instance reboot occurs immediately if you set <code>Apply Immediately</code> to <code>true</code>. It occurs during the next maintenance window if you set <code>Apply Immediately</code> to <code>false</code>. This value is stored as a lowercase string. </p>
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
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p>
   *          <p>Default: 1</p>
   *          <p>Valid values: 0-15</p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB Instance. For
   *             more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon
   *                 Performance Insights</a>.</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The KMS key identifier for encryption of Performance Insights
   *             data.</p>
   *          <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name
   *             for the KMS key.</p>
   *          <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your
   *             default KMS key. There is a default KMS key for your
   *             Amazon Web Services account. Your Amazon Web Services account has a different
   *             default KMS key for each Amazon Web Services region.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>Specifies whether the DB instance is restarted when you rotate your
   *             SSL/TLS certificate.</p>
   *          <p>By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate
   *             is not updated until the DB instance is restarted.</p>
   *          <important>
   *             <p>Set this parameter only if you are <i>not</i> using SSL/TLS to connect to the DB instance.</p>
   *          </important>
   *          <p>If you are using SSL/TLS to connect to the DB instance, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/ca_cert_rotation.html">Updating Your Amazon DocumentDB TLS
   *             Certificates</a> and
   *             <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html">
   *                 Encrypting Data in Transit</a> in the <i>Amazon DocumentDB Developer
   *                     Guide</i>.</p>
   * @public
   */
  CertificateRotationRestart?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDBInstanceResult {
  /**
   * <p>Detailed information about an instance. </p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>Represents the input to <a>ModifyDBSubnetGroup</a>.</p>
 * @public
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * <p>The name for the subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p>
   *          <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the subnet group.</p>
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * <p>The Amazon EC2 subnet IDs for the subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupResult {
  /**
   * <p>Detailed information about a subnet group. </p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * <p>The subnet is already in use in the Availability Zone.</p>
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
 * <p>Represents the input to <a>ModifyEventSubscription</a>.</p>
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the Amazon DocumentDB event notification subscription.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The
   *             ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code>
   *          </p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p> A list of event categories for a <code>SourceType</code> that you want to subscribe
   *             to.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p> A Boolean value; set to <code>true</code> to activate the subscription. </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * <p>Detailed information about an event to which you have subscribed.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>Represents the input to <a>ModifyGlobalCluster</a>.</p>
 * @public
 */
export interface ModifyGlobalClusterMessage {
  /**
   * <p>The identifier for the global cluster being modified. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The new identifier for a global cluster when you modify a global cluster. This value is stored as a lowercase string.</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *                <p>The first character must be a letter</p>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   * @public
   */
  NewGlobalClusterIdentifier?: string | undefined;

  /**
   * <p>Indicates if the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled. </p>
   * @public
   */
  DeletionProtection?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterResult {
  /**
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>Represents the input to <a>RebootDBInstance</a>.</p>
 * @public
 */
export interface RebootDBInstanceMessage {
  /**
   * <p>The instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p> When <code>true</code>, the reboot is conducted through a Multi-AZ failover. </p>
   *          <p>Constraint: You can't specify <code>true</code> if the instance is not configured for
   *             Multi-AZ.</p>
   * @public
   */
  ForceFailover?: boolean | undefined;
}

/**
 * @public
 */
export interface RebootDBInstanceResult {
  /**
   * <p>Detailed information about an instance. </p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>Represents the input to <a>RemoveFromGlobalCluster</a>.</p>
 * @public
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * <p>The cluster identifier to detach from the Amazon DocumentDB global cluster. </p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster. </p>
   * @public
   */
  DbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterResult {
  /**
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p>Represents the input to <a>RemoveSourceIdentifierFromSubscription</a>.</p>
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * <p>The name of the Amazon DocumentDB event notification subscription that you want to remove a
   *             source identifier from.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p> The source identifier to be removed from the subscription, such as the instance
   *             identifier for an instance, or the name of a security group. </p>
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * <p>Detailed information about an event to which you have subscribed.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p>Represents the input to <a>RemoveTagsFromResource</a>.</p>
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource
   *             Name (ARN).</p>
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
 * <p>Represents the input to <a>ResetDBClusterParameterGroup</a>.</p>
 * @public
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group to reset.</p>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A value that is set to <code>true</code> to reset all parameters in the cluster
   *             parameter group to their default values, and <code>false</code> otherwise. You can't use
   *             this parameter if there is a list of parameter names specified for the
   *                 <code>Parameters</code> parameter.</p>
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * <p>A list of parameter names in the cluster parameter group to reset to the default
   *             values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is
   *             set to <code>true</code>.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * <p>The cluster doesn't have enough capacity for the current operation.</p>
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
 * <p>The state of the snapshot doesn't allow deletion.</p>
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
 * <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB
 *             instance.</p>
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
 * <p>Represents the input to <a>RestoreDBClusterFromSnapshot</a>.</p>
 * @public
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the restored DB
   *             cluster can be created in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The name of the cluster to create from the snapshot or cluster snapshot. This
   *             parameter isn't case sensitive.</p>
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
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier for the snapshot or cluster snapshot to restore from.</p>
   *          <p>You can use either the name or the Amazon Resource Name (ARN) to specify a cluster
   *             snapshot. However, you can use only the ARN to specify a snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing snapshot.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The database engine to use for the new cluster.</p>
   *          <p>Default: The same as source.</p>
   *          <p>Constraint: Must be compatible with the engine of the source.</p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new cluster.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The port number on which the new cluster accepts connections.</p>
   *          <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>.</p>
   *          <p>Default: The same port as the original cluster.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the subnet group to use for the new cluster.</p>
   *          <p>Constraints: If provided, must match the name of an existing
   *                 <code>DBSubnetGroup</code>.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>A list of virtual private cloud (VPC) security groups that the new cluster will
   *             belong to.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The tags to be assigned to the restored cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The KMS key identifier to use when restoring an encrypted cluster from a DB snapshot or cluster snapshot.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p>
   *          <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *          <ul>
   *             <li>
   *                <p>If the snapshot or cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the snapshot or the cluster snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the snapshot or the cluster snapshot in
   *                         <code>SnapshotIdentifier</code> is not encrypted, then the restored DB
   *                     cluster is not encrypted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster.</p>
   *          <p>
   *             <i>Type:</i> String.         <i>Required:</i> No.</p>
   *          <p>If this argument is omitted, the default DB cluster parameter group is used.
   *         If supplied, must match the name of an existing default DB cluster parameter group.
   *         The string must consist of from 1 to 255 letters, numbers or hyphens. Its first
   *         character must be a letter, and it cannot end with a hyphen or contain two consecutive
   *         hyphens.</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>For information on storage types for Amazon DocumentDB clusters, see
   *             Cluster storage configurations in the <i>Amazon DocumentDB Developer Guide</i>.</p>
   *          <p>Valid values for storage type - <code>standard | iopt1</code>
   *          </p>
   *          <p>Default value is <code>standard </code>
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
   * <p>Detailed information about a cluster. </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p>Represents the input to <a>RestoreDBClusterToPointInTime</a>.</p>
 * @public
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * <p>The name of the new cluster to be created.</p>
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
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The type of restore to be performed. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>full-copy</code> - The new DB cluster is restored as a full copy of the
   *                 source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>copy-on-write</code> - The new DB cluster is restored as a clone of the
   *                 source DB cluster.</p>
   *             </li>
   *          </ul>
   *          <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p>
   *          <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is
   *             restored as a full copy of the source DB cluster.</p>
   * @public
   */
  RestoreType?: string | undefined;

  /**
   * <p>The identifier of the source cluster from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * <p>The date and time to restore the cluster to.</p>
   *          <p>Valid values: A time in Universal Coordinated Time (UTC) format.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the instance.</p>
   *             </li>
   *             <li>
   *                <p>Must be specified if the <code>UseLatestRestorableTime</code> parameter is not provided.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified if the <code>UseLatestRestorableTime</code> parameter is <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2015-03-07T23:45:00Z</code>
   *          </p>
   * @public
   */
  RestoreToTime?: Date | undefined;

  /**
   * <p>A value that is set to <code>true</code> to restore the cluster to the latest
   *             restorable backup time, and <code>false</code> otherwise. </p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if the <code>RestoreToTime</code> parameter is
   *             provided.</p>
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * <p>The port number on which the new cluster accepts connections.</p>
   *          <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p>
   *          <p>Default: The default port for the engine.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The subnet group name to use for the new cluster.</p>
   *          <p>Constraints: If provided, must match the name of an existing
   *                 <code>DBSubnetGroup</code>.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>A list of VPC security groups that the new cluster belongs to.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The tags to be assigned to the restored cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The KMS key identifier to use when restoring an encrypted cluster from an encrypted cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a cluster with the same Amazon Web Services account that owns the KMS encryption key used to encrypt the new cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p>
   *          <p>You can restore to a new cluster and encrypt the new cluster with an KMS key that is different from the KMS key used to encrypt the source cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p>
   *          <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p>
   *          <ul>
   *             <li>
   *                <p>If the cluster is encrypted, then the restored cluster is encrypted using the KMS key that was used to encrypt the source cluster.</p>
   *             </li>
   *             <li>
   *                <p>If the cluster is not encrypted, then the restored cluster is not encrypted.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>DBClusterIdentifier</code> refers to a cluster that is not encrypted, then
   *             the restore request is rejected.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of log types that must be enabled for exporting to Amazon CloudWatch
   *             Logs.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>For information on storage types for Amazon DocumentDB clusters, see
   *             Cluster storage configurations in the <i>Amazon DocumentDB Developer Guide</i>.</p>
   *          <p>Valid values for storage type - <code>standard | iopt1</code>
   *          </p>
   *          <p>Default value is <code>standard </code>
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
   * <p>Detailed information about a cluster. </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StartDBClusterMessage {
  /**
   * <p>The identifier of the cluster to restart. Example:
   *                 <code>docdb-2019-05-28-15-24-52</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StopDBClusterMessage {
  /**
   * <p>The identifier of the cluster to stop. Example:
   *             <code>docdb-2019-05-28-15-24-52</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterMessage {
  /**
   * <p>The identifier of the Amazon DocumentDB global database cluster to switch over.
   *         The identifier is the unique key assigned by the user when the cluster is created.
   *         In other words, it's the name of the global cluster.
   *         This parameter isn’t case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global cluster (Amazon DocumentDB global database).</p>
   *             </li>
   *             <li>
   *                <p>Minimum length of 1. Maximum length of 255.</p>
   *             </li>
   *          </ul>
   *          <p>Pattern: <code>[A-Za-z][0-9A-Za-z-:._]*</code>
   *          </p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the secondary Amazon DocumentDB cluster to promote to the new primary for the global database cluster.
   *             Use the Amazon Resource Name (ARN) for the identifier so that Amazon DocumentDB can locate the cluster in its Amazon Web Services region.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing secondary cluster.</p>
   *             </li>
   *             <li>
   *                <p>Minimum length of 1. Maximum length of 255.</p>
   *             </li>
   *          </ul>
   *          <p>Pattern: <code>[A-Za-z][0-9A-Za-z-:._]*</code>
   *          </p>
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterResult {
  /**
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}
