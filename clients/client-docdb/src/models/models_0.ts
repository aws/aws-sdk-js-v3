// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocDBServiceException as __BaseException } from "./DocDBServiceException";

/**
 * @public
 * <p>Represents the input to <a>AddSourceIdentifierToSubscription</a>.
 *         </p>
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  /**
   * @public
   * <p>The name of the Amazon DocumentDB event notification subscription that you
   *             want to add a source identifier to.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
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
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 * <p>Detailed information about an event to which you have subscribed.</p>
 */
export interface EventSubscription {
  /**
   * @public
   * <p>The Amazon Web Services customer account that is associated with the Amazon DocumentDB event notification
   *             subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * @public
   * <p>The Amazon DocumentDB event notification subscription ID.</p>
   */
  CustSubscriptionId?: string;

  /**
   * @public
   * <p>The topic ARN of the Amazon DocumentDB event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The status of the Amazon DocumentDB event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: <code>creating</code>, <code>modifying</code>,
   *                 <code>deleting</code>, <code>active</code>, <code>no-permission</code>,
   *                 <code>topic-not-exist</code>
   *          </p>
   *          <p>The <code>no-permission</code> status indicates that Amazon DocumentDB no longer has permission
   *             to post to the SNS topic. The <code>topic-not-exist</code> status indicates that the
   *             topic was deleted after the subscription was created.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The time at which the Amazon DocumentDB event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;

  /**
   * @public
   * <p>The source type for the Amazon DocumentDB event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>A list of source IDs for the Amazon DocumentDB event notification subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * @public
   * <p>A list of event categories for the Amazon DocumentDB event notification subscription.</p>
   */
  EventCategoriesList?: string[];

  /**
   * @public
   * <p>A Boolean value indicating whether the subscription is enabled. A value of
   *                 <code>true</code> indicates that the subscription is enabled.</p>
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
   * <p>Detailed information about an event to which you have subscribed.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>The requested source could not be found. </p>
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
 * <p>The subscription name does not exist. </p>
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
 * <p>Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with "<code>aws:</code>" or "<code>rds:</code>". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with "<code>aws:</code>" or "<code>rds:</code>". The string can contain only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Represents the input to <a>AddTagsToResource</a>.
 *         </p>
 */
export interface AddTagsToResourceMessage {
  /**
   * @public
   * <p>The Amazon DocumentDB resource that the tags are added to. This value is an
   *             Amazon Resource Name .</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the Amazon DocumentDB resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 * <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
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
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing instance. </p>
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
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing snapshot. </p>
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
 * <p>Represents the input to <a>ApplyPendingMaintenanceAction</a>.
 *         </p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that the pending
   *             maintenance action applies to.</p>
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
   * <p>The date of the maintenance window when the action is applied. The maintenance action
   *             is applied to the resource during its first maintenance window after this date. If this
   *             date is specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * @public
   * <p>The date when the maintenance action is automatically applied. The maintenance action
   *             is applied to the resource on this date regardless of the maintenance window for the
   *             resource. If this date is specified, any <code>immediate</code> opt-in requests are
   *             ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * @public
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * @public
   * <p>The effective date when the pending maintenance action is applied to the
   *             resource.</p>
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
 * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.
 *         </p>
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that has pending
   *             maintenance actions.</p>
   */
  ResourceIdentifier?: string;

  /**
   * @public
   * <p>A list that provides details about the pending maintenance actions
   *             for the resource.</p>
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];
}

/**
 * @public
 */
export interface ApplyPendingMaintenanceActionResult {
  /**
   * @public
   * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.
   *         </p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

/**
 * @public
 * <p>The cluster isn't in a valid state.</p>
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
 * <p> The specified instance isn't in the <i>available</i> state.
 *         </p>
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
 * <p>Represents the input to <a>CopyDBClusterParameterGroup</a>.
 *         </p>
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * @public
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
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * @public
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
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>A description for the copied cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * @public
   * <p>The tags that are to be assigned to the parameter group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Detailed information about a cluster parameter group. </p>
 */
export interface DBClusterParameterGroup {
  /**
   * @public
   * <p>Provides the name of the cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>Provides the name of the parameter group family that this cluster parameter
   *             group is compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * @public
   * <p>Provides the customer-specified description for this cluster parameter
   *             group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the cluster parameter group.</p>
   */
  DBClusterParameterGroupArn?: string;
}

/**
 * @public
 */
export interface CopyDBClusterParameterGroupResult {
  /**
   * @public
   * <p>Detailed information about a cluster parameter group. </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

/**
 * @public
 * <p>A parameter group with the same name already exists.</p>
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
 *             <code>DBParameterGroupName</code> doesn't refer to an existing parameter group. </p>
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
 * <p>This request would cause you to exceed the allowed number of parameter groups.</p>
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
 * <p>Represents the input to <a>CopyDBClusterSnapshot</a>.
 *         </p>
 */
export interface CopyDBClusterSnapshotMessage {
  /**
   * @public
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
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * @public
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
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * @public
   * <p>The KMS key ID for an encrypted cluster snapshot. The KMS
   *             key ID is the Amazon Resource Name (ARN), KMS key identifier, or
   *             the KMS key alias for the KMS encryption key. </p>
   *          <p>If you copy an encrypted cluster snapshot from your Amazon Web Services account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the cluster snapshot is encrypted with the same KMS key as the source cluster snapshot.</p>
   *          <p>If you copy an encrypted cluster snapshot that is shared from another Amazon Web Services account, then you must specify a value for <code>KmsKeyId</code>.</p>
   *          <p>To copy an encrypted cluster snapshot to another Amazon Web Services Region, set <code>KmsKeyId</code> to the KMS key ID that you want to use to encrypt the copy of the cluster snapshot in the destination Region. KMS encryption keys are specific to the Amazon Web Services Region that they are created in, and you can't use encryption keys from one Amazon Web Services Region in another Amazon Web Services Region.</p>
   *          <p>If you copy an unencrypted cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, an error is returned.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
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
   */
  PreSignedUrl?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to copy all tags from the source cluster
   *             snapshot to the target cluster snapshot, and otherwise
   *             <code>false</code>. The default is <code>false</code>.</p>
   */
  CopyTags?: boolean;

  /**
   * @public
   * <p>The tags to be assigned to the cluster snapshot.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Detailed information about a cluster snapshot. </p>
 */
export interface DBClusterSnapshot {
  /**
   * @public
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the cluster
   *             snapshot can be restored in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>Specifies the identifier for the cluster snapshot.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * @public
   * <p>Specifies the cluster identifier of the cluster that this cluster snapshot
   *             was created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>Provides the time when the snapshot was taken, in UTC.</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * @public
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>Specifies the status of this cluster snapshot.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Specifies the port that the cluster was listening on at the time of the
   *             snapshot.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Provides the virtual private cloud (VPC) ID that is associated with the cluster
   *             snapshot.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Specifies the time when the cluster was created, in Universal Coordinated Time
   *             (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * @public
   * <p>Provides the master user name for the cluster snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>Provides the version of the database engine for this cluster snapshot.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Provides the type of the cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * @public
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * @public
   * <p>Specifies whether the cluster snapshot is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for the encrypted cluster snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * @public
   * <p>If the cluster snapshot was copied from a source cluster snapshot, the ARN for
   *             the source cluster snapshot; otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;
}

/**
 * @public
 */
export interface CopyDBClusterSnapshotResult {
  /**
   * @public
   * <p>Detailed information about a cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

/**
 * @public
 * <p>You already have a cluster snapshot with the given identifier.</p>
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
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
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
 * <p>The provided value isn't a valid cluster snapshot state.</p>
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
 * <p>An error occurred when accessing an KMS key.</p>
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
 * <p>The request would cause you to exceed the allowed number of snapshots.</p>
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
 * <p>Represents the input to <a>CreateDBCluster</a>.
 *         </p>
 */
export interface CreateDBClusterMessage {
  /**
   * @public
   * <p>A list of Amazon EC2 Availability Zones that instances in the
   *             cluster can be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The number of days for which automated backups are retained. You
   *             must specify a minimum value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35.</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
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
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the cluster parameter group to associate with this
   *             cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>A list of EC2 VPC security groups to associate with this cluster.
   *             </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>A subnet group to associate with this cluster.</p>
   *          <p>Constraints: Must match the name of an existing
   *             <code>DBSubnetGroup</code>. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>The name of the database engine to be used for this cluster.</p>
   *          <p>Valid values: <code>docdb</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>The version number of the database engine to use. The <code>--engine-version</code> will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The port number on which the instances in the cluster accept
   *             connections.</p>
   */
  Port?: number;

  /**
   * @public
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
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>The password for the master database user. This password can
   *             contain any printable ASCII character except forward slash (/),
   *             double quote ("), or the "at" symbol (@).</p>
   *          <p>Constraints: Must contain from 8 to 100 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
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
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>The weekly time range during which system maintenance can occur,
   *             in Universal Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p>
   *          <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>The tags to be assigned to the cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Specifies whether the cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
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
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Not currently supported.
   *             </p>
   */
  PreSignedUrl?: string;

  /**
   * @public
   * <p>A list of log types that need to be enabled for exporting to Amazon
   *             CloudWatch Logs. You can enable audit logs or profiler logs. For more
   *             information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html">
   *                 Auditing Amazon DocumentDB Events</a>
   *             and <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html">
   *                 Profiling Amazon DocumentDB Operations</a>.
   *         </p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>Specifies whether this cluster can be deleted. If
   *             <code>DeletionProtection</code> is enabled, the cluster cannot be
   *             deleted unless it is modified and <code>DeletionProtection</code> is
   *             disabled. <code>DeletionProtection</code> protects clusters from
   *             being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>The cluster identifier of the new global cluster.</p>
   */
  GlobalClusterIdentifier?: string;
}

/**
 * @public
 * <p>Describes an Identity and Access Management (IAM) role that is associated with a
 *             cluster.</p>
 */
export interface DBClusterRole {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAMrole that is associated with the DB
   *             cluster.</p>
   */
  RoleArn?: string;

  /**
   * @public
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
   */
  Status?: string;
}

/**
 * @public
 * <p>Contains information about an instance that is part of a cluster.</p>
 */
export interface DBClusterMember {
  /**
   * @public
   * <p>Specifies the instance identifier for this member of the cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
   * <p>A value that is <code>true</code> if the cluster member is the primary instance for
   *             the cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * @public
   * <p>Specifies the status of the cluster parameter group for this member of the DB
   *             cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * @public
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance. </p>
   */
  PromotionTier?: number;
}

/**
 * @public
 * <p>Used as a response element for queries on virtual private cloud (VPC) security group
 *             membership.</p>
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
 * <p>Detailed information about a cluster. </p>
 */
export interface DBCluster {
  /**
   * @public
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the cluster
   *             can be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>Specifies the number of days for which automatic snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>Contains a user-supplied cluster identifier. This identifier is the unique key that
   *             identifies a cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>Specifies the name of the cluster parameter group for the cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * @public
   * <p>Specifies information on the subnet group that is associated with the cluster, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * @public
   * <p>Specifies the current state of this cluster.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Specifies the progress of the operation as a percentage.</p>
   */
  PercentProgress?: string;

  /**
   * @public
   * <p>The earliest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * @public
   * <p>Specifies the connection endpoint for the primary instance of the cluster.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The reader endpoint for the cluster. The reader endpoint for a cluster load balances connections across the Amazon DocumentDB replicas that are available in a cluster. As clients request new connections to the reader endpoint, Amazon DocumentDB distributes the connection requests among the Amazon DocumentDB replicas in the cluster. This functionality can help balance your read workload across multiple Amazon DocumentDB replicas in your cluster. </p>
   *          <p>If a failover occurs, and the Amazon DocumentDB replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Amazon DocumentDB replicas in the cluster, you can then reconnect to the reader endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * @public
   * <p>Specifies whether the cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>Provides the name of the database engine to be used for this cluster.</p>
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
   *             restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * @public
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Contains the master user name for the cluster.</p>
   */
  MasterUsername?: string;

  /**
   * @public
   * <p>Specifies the daily time range during which automated backups are created if automated
   *             backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. </p>
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>Specifies the weekly time range during which system maintenance can occur, in
   *             Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Contains the identifier of the source cluster if this cluster is a secondary cluster.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * @public
   * <p>Contains one or more identifiers of the secondary clusters that are associated with this cluster.</p>
   */
  ReadReplicaIdentifiers?: string[];

  /**
   * @public
   * <p>Provides the list of instances that make up the cluster.</p>
   */
  DBClusterMembers?: DBClusterMember[];

  /**
   * @public
   * <p>Provides a list of virtual private cloud (VPC) security groups that the cluster
   *             belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @public
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * @public
   * <p>Specifies whether the cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for
   *             the encrypted cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region-unique, immutable identifier for the cluster. This identifier is
   *             found in CloudTrail log entries whenever the KMS key for the cluster is accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * @public
   * <p>Provides a list of the Identity and Access Management (IAM) roles that are associated with the cluster. (IAM) roles that are associated with a cluster grant permission for the cluster to access other Amazon Web Services services on your behalf.</p>
   */
  AssociatedRoles?: DBClusterRole[];

  /**
   * @public
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   */
  CloneGroupId?: string;

  /**
   * @public
   * <p>Specifies the time when the cluster was created, in Universal Coordinated Time
   *             (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * @public
   * <p>A list of log types that this cluster is configured to export to Amazon CloudWatch
   *             Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;
}

/**
 * @public
 */
export interface CreateDBClusterResult {
  /**
   * @public
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 * <p>You already have a cluster with the given identifier.</p>
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
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing cluster parameter group. </p>
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
 * <p>The cluster can't be created because you have reached the maximum allowed quota of clusters.</p>
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
 * <p>Subnets in the subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
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
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing subnet group. </p>
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
 * <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global cluster.</p>
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
 * <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
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
 * <p>The subnet group can't be deleted because it's in use.</p>
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
 * <p>The requested operation can't be performed while the cluster is in this state.</p>
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
 * <p>The requested subnet is not valid, or multiple subnets were requested that are not all
 *             in a common virtual private cloud (VPC).</p>
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
 * <p>The subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
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
 * <p>The request would cause you to exceed the allowed amount of storage available across
 *             all instances.</p>
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
 * <p>Represents the input of <a>CreateDBClusterParameterGroup</a>.</p>
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * @public
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
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * @public
   * <p>The cluster parameter group family name.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * @public
   * <p>The description for the cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the cluster parameter group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDBClusterParameterGroupResult {
  /**
   * @public
   * <p>Detailed information about a cluster parameter group. </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

/**
 * @public
 * <p>Represents the input of <a>CreateDBClusterSnapshot</a>.</p>
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * @public
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
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * @public
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
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the cluster snapshot.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDBClusterSnapshotResult {
  /**
   * @public
   * <p>Detailed information about a cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

/**
 * @public
 * <p>The specified CIDR IP or Amazon EC2 security group isn't authorized for the specified security group.</p>
 *          <p>Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf using IAM.</p>
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
 * <p>Represents the input to <a>CreateDBInstance</a>.</p>
 */
export interface CreateDBInstanceMessage {
  /**
   * @public
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
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * @public
   * <p>The compute and memory capacity of the instance; for example,
   *                 <code>db.r5.large</code>. </p>
   */
  DBInstanceClass: string | undefined;

  /**
   * @public
   * <p>The name of the database engine to be used for this instance.</p>
   *          <p>Valid value: <code>docdb</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>The Amazon EC2 Availability Zone that the instance is created in. </p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p>
   *          <p>Example: <code>us-east-1d</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The time range each week during which system maintenance can occur, in Universal
   *             Coordinated Time (UTC).</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for
   *             each Amazon Web Services Region, occurring on a random day of the week. </p>
   *          <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>The tags to be assigned to the instance. You can assign up to
   *            10 tags to an instance.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The identifier of the cluster that the instance will belong to.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   *          <p>Default: 1</p>
   *          <p>Valid values: 0-15</p>
   */
  PromotionTier?: number;

  /**
   * @public
   * <p>A value that indicates whether to enable Performance Insights for the DB Instance. For
   *             more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon
   *                 Performance Insights</a>.</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * @public
   * <p>The KMS key identifier for encryption of Performance Insights
   *             data.</p>
   *          <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name
   *             for the KMS key.</p>
   *          <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your
   *             default KMS key. There is a default KMS key for your
   *             Amazon Web Services account. Your Amazon Web Services account has a different
   *             default KMS key for each Amazon Web Services region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;
}

/**
 * @public
 * <p>Information about an Availability Zone.</p>
 */
export interface AvailabilityZone {
  /**
   * @public
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p> Detailed information about a subnet. </p>
 */
export interface Subnet {
  /**
   * @public
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * @public
   * <p>Specifies the Availability Zone for the subnet.</p>
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
 * <p>Detailed information about a subnet group. </p>
 */
export interface DBSubnetGroup {
  /**
   * @public
   * <p>The name of the subnet group.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>Provides the description of the subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * @public
   * <p>Provides the virtual private cloud (VPC) ID of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Provides the status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * @public
   * <p>Detailed information about one or more subnets within a subnet group.</p>
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
 * <p>Network information for accessing a cluster or instance. Client programs must
 *             specify a valid endpoint to access these Amazon DocumentDB resources.</p>
 */
export interface Endpoint {
  /**
   * @public
   * <p>Specifies the DNS address of the instance.</p>
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
 * <p>A list of the log types whose configuration is still pending. These log types are in
 *             the process of being activated or deactivated.</p>
 */
export interface PendingCloudwatchLogsExports {
  /**
   * @public
   * <p>Log types that are in the process of being deactivated. After they are deactivated,
   *             these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * @public
   * <p>Log types that are in the process of being enabled. After they are enabled, these log
   *             types are exported to Amazon CloudWatch Logs.</p>
   */
  LogTypesToDisable?: string[];
}

/**
 * @public
 * <p> One or more modified settings for an instance. These modified settings have been
 *             requested, but haven't been applied yet.</p>
 */
export interface PendingModifiedValues {
  /**
   * @public
   * <p> Contains the new <code>DBInstanceClass</code> for the instance that will be
   *             applied or is currently being applied. </p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p> Contains the new <code>AllocatedStorage</code> size for then instance that will be
   *             applied or is currently being applied. </p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>Contains the pending or currently in-progress change of the master credentials for the
   *             instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
   * <p>Specifies the pending port for the instance.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>Indicates that the Single-AZ instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The license model for the instance.</p>
   *          <p>Valid values: <code>license-included</code>, <code>bring-your-own-license</code>,
   *                 <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>Specifies the new Provisioned IOPS value for the instance that will be applied or
   *             is currently being applied.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the instance that will be
   *             applied or is currently being applied. </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Specifies the storage type to be associated with the instance.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>Specifies the identifier of the certificate authority (CA) certificate for the DB
   *             instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * @public
   * <p>The new subnet group for the instance. </p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>A list of the log types whose configuration is still pending. These log types are in
   *             the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
}

/**
 * @public
 * <p>Provides a list of status information for an instance.</p>
 */
export interface DBInstanceStatusInfo {
  /**
   * @public
   * <p>This value is currently "<code>read replication</code>."</p>
   */
  StatusType?: string;

  /**
   * @public
   * <p>A Boolean value that is <code>true</code> if the instance is operating normally, or
   *                 <code>false</code> if the instance is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * @public
   * <p>Status of the instance. For a <code>StatusType</code> of read replica, the values
   *             can be <code>replicating</code>, error, <code>stopped</code>, or
   *             <code>terminated</code>.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Details of the error if there is an error for the instance. If the instance is not in
   *             an error state, this value is blank.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Detailed information about an instance. </p>
 */
export interface DBInstance {
  /**
   * @public
   * <p>Contains a user-provided database identifier. This identifier is the unique key that
   *             identifies an instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Contains the name of the compute and memory capacity class of the instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>Provides the name of the database engine to be used for this instance.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * @public
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * @public
   * <p>Provides the date and time that the instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * @public
   * <p> Specifies the daily time range during which automated backups are created if
   *             automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.
   *         </p>
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>Specifies the number of days for which automatic snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>Provides a list of VPC security group elements that the instance belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @public
   * <p>Specifies the name of the Availability Zone that the instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>Specifies information on the subnet group that is associated with the instance, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * @public
   * <p>Specifies the weekly time range during which system maintenance can occur, in
   *             Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Specifies that changes to the instance are pending. This element is included only when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * @public
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * @public
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Does not apply. This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>Not supported. Amazon DocumentDB does not currently support public endpoints. The value
   *           of <code>PubliclyAccessible</code> is always <code>false</code>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>The status of a read replica. If the instance is not a read replica, this is
   *             blank.</p>
   */
  StatusInfos?: DBInstanceStatusInfo[];

  /**
   * @public
   * <p>Contains the name of the cluster that the instance is a member of if the
   *             instance is a member of a cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>Specifies whether or not the instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p> If <code>StorageEncrypted</code> is <code>true</code>, the KMS key identifier for
   *             the encrypted instance. </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region-unique, immutable identifier for the instance. This identifier is found in CloudTrail log entries whenever the KMS key for the instance is
   *             accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * @public
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * @public
   * <p>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   */
  PromotionTier?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * @public
   * <p>A list of log types that this instance is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];
}

/**
 * @public
 */
export interface CreateDBInstanceResult {
  /**
   * @public
   * <p>Detailed information about an instance. </p>
   */
  DBInstance?: DBInstance;
}

/**
 * @public
 * <p>You already have a instance with the given identifier.</p>
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
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing security group. </p>
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
 * <p>The request would cause you to exceed the allowed number of instances.</p>
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
 * <p>The specified instance class isn't available in the specified Availability Zone.</p>
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
 * <p>Storage of the specified <code>StorageType</code> can't be associated with the DB
 *             instance. </p>
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
 * <p>Represents the input to <a>CreateDBSubnetGroup</a>.</p>
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * @public
   * <p>The name for the subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores,
   *             spaces, or hyphens. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * @public
   * <p>The description for the subnet group.</p>
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * @public
   * <p>The Amazon EC2 subnet IDs for the subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the subnet group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDBSubnetGroupResult {
  /**
   * @public
   * <p>Detailed information about a subnet group. </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

/**
 * @public
 * <p>
 *             <code>DBSubnetGroupName</code> is already being used by an existing subnet group. </p>
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
 * <p>The request would cause you to exceed the allowed number of subnet groups.</p>
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
 * <p>The request would cause you to exceed the allowed number of subnets in a subnet group.</p>
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
 * <p>Represents the input to <a>CreateEventSubscription</a>.</p>
 */
export interface CreateEventSubscriptionMessage {
  /**
   * @public
   * <p>The name of the subscription.</p>
   *          <p>Constraints: The name must be fewer than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * @public
   * <p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, you would set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code>, <code>db-cluster</code>,
   *                 <code>db-parameter-group</code>, <code>db-security-group</code>,
   *                 <code>db-cluster-snapshot</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * @public
   * <p> A list of event categories for a <code>SourceType</code> that you want to subscribe to. </p>
   */
  EventCategories?: string[];

  /**
   * @public
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
   */
  SourceIds?: string[];

  /**
   * @public
   * <p> A Boolean value; set to <code>true</code> to activate the subscription, set to <code>false</code> to create the subscription but not active it. </p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The tags to be assigned to the event subscription.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateEventSubscriptionResult {
  /**
   * @public
   * <p>Detailed information about an event to which you have subscribed.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>You have reached the maximum number of event subscriptions. </p>
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
 * <p>Amazon SNS has responded that there is a problem with the specified topic. </p>
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
 * <p>You do not have permission to publish to the SNS topic Amazon Resource Name (ARN). </p>
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
 * <p>The SNS topic Amazon Resource Name (ARN) does not exist. </p>
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
 * <p>The provided subscription name already exists. </p>
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
 * <p>The provided category does not exist. </p>
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
 * <p>Represents the input to <a>CreateGlobalCluster</a>.</p>
 */
export interface CreateGlobalClusterMessage {
  /**
   * @public
   * <p>The cluster identifier of the new global cluster.</p>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. This parameter is optional.</p>
   */
  SourceDBClusterIdentifier?: string;

  /**
   * @public
   * <p>The name of the database engine to be used for this cluster.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The engine version of the global cluster.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The deletion protection setting for the new global cluster. The global cluster can't be deleted when deletion protection is enabled. </p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon DocumentDB will not create a database in the global cluster you are creating.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The storage encryption setting for the new global cluster. </p>
   */
  StorageEncrypted?: boolean;
}

/**
 * @public
 * <p>A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters. </p>
 */
export interface GlobalClusterMember {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for each Amazon DocumentDB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the Aurora global cluster.</p>
   */
  Readers?: string[];

  /**
   * @public
   * <p> Specifies whether the Amazon DocumentDB cluster is the primary cluster (that is, has read-write capability) for the Amazon DocumentDB global cluster with which it is associated. </p>
   */
  IsWriter?: boolean;
}

/**
 * @public
 * <p>A data type representing an Amazon DocumentDB global cluster.</p>
 */
export interface GlobalCluster {
  /**
   * @public
   * <p>Contains a user-supplied global  cluster identifier. This identifier is the unique key that identifies a global cluster. </p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region-unique, immutable identifier for the global database cluster. This identifier is found in CloudTrail log entries whenever the KMS customer master key (CMK) for the cluster is accessed. </p>
   */
  GlobalClusterResourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the global cluster.</p>
   */
  GlobalClusterArn?: string;

  /**
   * @public
   * <p>Specifies the current state of this global cluster.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The Amazon DocumentDB database engine used by the global cluster. </p>
   */
  Engine?: string;

  /**
   * @public
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The default database name within the new global cluster.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The storage encryption setting for the global cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * @public
   * <p>The deletion protection setting for the new global cluster.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>The list of cluster IDs for secondary clusters within the global cluster. Currently limited to one item. </p>
   */
  GlobalClusterMembers?: GlobalClusterMember[];
}

/**
 * @public
 */
export interface CreateGlobalClusterResult {
  /**
   * @public
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
 * <p>The <code>GlobalClusterIdentifier</code> already exists. Choose a new global cluster identifier (unique name) to create a new global cluster. </p>
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
 * <p>The number of global  clusters for this account is already at the maximum allowed.</p>
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
 * <p>Represents the input to <a>DeleteDBCluster</a>.</p>
 */
export interface DeleteDBClusterMessage {
  /**
   * @public
   * <p>The cluster identifier for the cluster to be deleted. This parameter isn't case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing <code>DBClusterIdentifier</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p> Determines whether a final cluster snapshot is created before the cluster is deleted. If <code>true</code> is specified, no cluster snapshot is created. If <code>false</code> is specified, a cluster snapshot is created before the DB cluster is deleted. </p>
   *          <note>
   *             <p>If <code>SkipFinalSnapshot</code> is <code>false</code>, you must specify a <code>FinalDBSnapshotIdentifier</code> parameter.</p>
   *          </note>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  SkipFinalSnapshot?: boolean;

  /**
   * @public
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
   */
  FinalDBSnapshotIdentifier?: string;
}

/**
 * @public
 */
export interface DeleteDBClusterResult {
  /**
   * @public
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 * <p>Represents the input to <a>DeleteDBClusterParameterGroup</a>.</p>
 */
export interface DeleteDBClusterParameterGroupMessage {
  /**
   * @public
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
   */
  DBClusterParameterGroupName: string | undefined;
}

/**
 * @public
 * <p>The parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
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
 * <p>Represents the input to <a>DeleteDBClusterSnapshot</a>.</p>
 */
export interface DeleteDBClusterSnapshotMessage {
  /**
   * @public
   * <p>The identifier of the cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing cluster snapshot in the <code>available</code> state.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBClusterSnapshotResult {
  /**
   * @public
   * <p>Detailed information about a cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

/**
 * @public
 * <p>
 *             <code>DBSnapshotIdentifier</code> is already being used by an existing snapshot. </p>
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
 * <p>Represents the input to <a>DeleteDBInstance</a>.</p>
 */
export interface DeleteDBInstanceMessage {
  /**
   * @public
   * <p>The instance identifier for the instance to be deleted. This parameter isn't
   *             case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing instance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDBInstanceResult {
  /**
   * @public
   * <p>Detailed information about an instance. </p>
   */
  DBInstance?: DBInstance;
}

/**
 * @public
 * <p>Represents the input to <a>DeleteDBSubnetGroup</a>.</p>
 */
export interface DeleteDBSubnetGroupMessage {
  /**
   * @public
   * <p>The name of the database subnet group to delete.</p>
   *          <note>
   *             <p>You can't delete the default subnet group.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <p>Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;
}

/**
 * @public
 * <p> The subnet isn't in the <i>available</i> state. </p>
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
 * <p>Represents the input to <a>DeleteEventSubscription</a>.</p>
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * @public
   * <p>The name of the Amazon DocumentDB event notification subscription that you want to delete.</p>
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionResult {
  /**
   * @public
   * <p>Detailed information about an event to which you have subscribed.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>Someone else might be modifying a subscription. Wait a few seconds, and try
 *             again.</p>
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
 * <p>Represents the input to <a>DeleteGlobalCluster</a>.</p>
 */
export interface DeleteGlobalClusterMessage {
  /**
   * @public
   * <p>The cluster identifier of the global cluster being deleted.</p>
   */
  GlobalClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlobalClusterResult {
  /**
   * @public
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
 * <p>A certificate authority (CA) certificate for an Amazon Web Services account.</p>
 */
export interface Certificate {
  /**
   * @public
   * <p>The unique key that identifies a certificate.</p>
   *          <p>Example: <code>rds-ca-2019</code>
   *          </p>
   */
  CertificateIdentifier?: string;

  /**
   * @public
   * <p>The type of the certificate.</p>
   *          <p>Example: <code>CA</code>
   *          </p>
   */
  CertificateType?: string;

  /**
   * @public
   * <p>The thumbprint of the certificate.</p>
   */
  Thumbprint?: string;

  /**
   * @public
   * <p>The starting date-time from which the certificate is valid.</p>
   *          <p>Example: <code>2019-07-31T17:57:09Z</code>
   *          </p>
   */
  ValidFrom?: Date;

  /**
   * @public
   * <p>The date-time after which the certificate is no longer valid.</p>
   *          <p>Example: <code>2024-07-31T17:57:09Z</code>
   *          </p>
   */
  ValidTill?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   *          <p>Example: <code>arn:aws:rds:us-east-1::cert:rds-ca-2019</code>
   *          </p>
   */
  CertificateArn?: string;
}

/**
 * @public
 */
export interface CertificateMessage {
  /**
   * @public
   * <p>A list of certificates for this Amazon Web Services account.</p>
   */
  Certificates?: Certificate[];

  /**
   * @public
   * <p>An optional pagination token provided if the number of records retrieved is greater than <code>MaxRecords</code>. If this parameter is specified, the marker specifies the next record in the list. Including the value of <code>Marker</code> in the next call to <code>DescribeCertificates</code> results in the next page of certificates.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an existing certificate. </p>
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
 * <p>A named set of filter values, used to return a more specific list of results. You can
 *             use a filter to match a set of resources by specific criteria, such as IDs.</p>
 *          <p>Wildcards are not supported in filters.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the filter. Filter names are case sensitive.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>One or more filter values. Filter values are case sensitive.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesMessage {
  /**
   * @public
   * <p>The user-supplied certificate identifier. If this parameter is specified, information for only the specified certificate is returned. If this parameter is omitted, a list of up to <code>MaxRecords</code> certificates is returned. This parameter is not case sensitive.</p>
   *          <p>Constraints</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing <code>CertificateIdentifier</code>.</p>
   *             </li>
   *          </ul>
   */
  CertificateIdentifier?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
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
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous <code>DescribeCertificates</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the output of <a>DBClusterParameterGroups</a>.</p>
 */
export interface DBClusterParameterGroupsMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A list of cluster parameter groups.</p>
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[];
}

/**
 * @public
 * <p>Represents the input to <a>DescribeDBClusterParameterGroups</a>.</p>
 */
export interface DescribeDBClusterParameterGroupsMessage {
  /**
   * @public
   * <p>The name of a specific cluster parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the name of an existing
   *                         <code>DBClusterParameterGroup</code>.</p>
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
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
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
 * <p>Detailed information about an individual parameter.</p>
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
   * <p>Specifies the engine-specific parameters type.</p>
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
   * <p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can
   *             be modified. Some parameters have security or operational implications that prevent them
   *             from being changed. </p>
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
 * <p>Represents the output of <a>DBClusterParameterGroup</a>.</p>
 */
export interface DBClusterParameterGroupDetails {
  /**
   * @public
   * <p>Provides a list of parameters for the cluster parameter group.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the input to <a>DescribeDBClusterParameters</a>.</p>
 */
export interface DescribeDBClusterParametersMessage {
  /**
   * @public
   * <p>The name of a specific cluster parameter group to return parameter details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the name of an existing <code>DBClusterParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * @public
   * <p> A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.
   *         </p>
   */
  Source?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the output of <a>DescribeDBClusters</a>.</p>
 */
export interface DBClusterMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A list of clusters.</p>
   */
  DBClusters?: DBCluster[];
}

/**
 * @public
 * <p>Represents the input to <a>DescribeDBClusters</a>.</p>
 */
export interface DescribeDBClustersMessage {
  /**
   * @public
   * <p>The user-provided cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match an existing <code>DBClusterIdentifier</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>A filter that specifies one or more clusters to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts cluster identifiers and cluster Amazon Resource Names (ARNs). The results list only includes information about the clusters identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>.</p>
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  /**
   * @public
   * <p>The identifier for the cluster snapshot to describe the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

/**
 * @public
 * <p>Contains the name and values of a manual cluster snapshot attribute.</p>
 *          <p>Manual cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual cluster snapshot.</p>
 */
export interface DBClusterSnapshotAttribute {
  /**
   * @public
   * <p>The name of the manual cluster snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of Amazon Web Services accounts that have permission to copy or restore the manual cluster snapshot.</p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>The values for the manual cluster snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If a value of <code>all</code> is in the list, then the manual cluster snapshot is public and available for any Amazon Web Services account to copy or restore.</p>
   */
  AttributeValues?: string[];
}

/**
 * @public
 * <p>Detailed information about the attributes that are associated with a cluster
 *             snapshot.</p>
 */
export interface DBClusterSnapshotAttributesResult {
  /**
   * @public
   * <p>The identifier of the cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * @public
   * <p>The list of attributes and values for the cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[];
}

/**
 * @public
 */
export interface DescribeDBClusterSnapshotAttributesResult {
  /**
   * @public
   * <p>Detailed information about the attributes that are associated with a cluster
   *             snapshot.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

/**
 * @public
 * <p>Represents the output of <a>DescribeDBClusterSnapshots</a>.</p>
 */
export interface DBClusterSnapshotMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Provides a list of cluster snapshots.</p>
   */
  DBClusterSnapshots?: DBClusterSnapshot[];
}

/**
 * @public
 * <p>Represents the input to <a>DescribeDBClusterSnapshots</a>.</p>
 */
export interface DescribeDBClusterSnapshotsMessage {
  /**
   * @public
   * <p>The ID of the cluster to retrieve the list of cluster snapshots for. This parameter can't be used with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case sensitive. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the identifier of an existing
   *                     <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
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
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * @public
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
   */
  SnapshotType?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to include shared manual cluster snapshots from other Amazon Web Services accounts that this Amazon Web Services account has been given permission to copy or restore, and otherwise <code>false</code>. The default is <code>false</code>.</p>
   */
  IncludeShared?: boolean;

  /**
   * @public
   * <p>Set to <code>true</code> to include manual cluster snapshots that are public and can be copied or restored by any Amazon Web Services account, and otherwise <code>false</code>. The default is <code>false</code>.</p>
   */
  IncludePublic?: boolean;
}

/**
 * @public
 * <p>The version of the database engine that an instance can be upgraded to.</p>
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
   * <p>The version of the database engine that an instance can be upgraded to.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A value that indicates whether the target version is applied to any source DB instances that have <code>AutoMinorVersionUpgrade</code> set to <code>true</code>.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * @public
   * <p>A value that indicates whether a database engine is upgraded to a major
   *             version.</p>
   */
  IsMajorVersionUpgrade?: boolean;
}

/**
 * @public
 * <p> Detailed information about an engine version. </p>
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
   * <p>The name of the parameter group family for the database engine.</p>
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
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: UpgradeTarget[];

  /**
   * @public
   * <p>The types of logs that the database engine has available for export to Amazon
   *             CloudWatch Logs.</p>
   */
  ExportableLogTypes?: string[];

  /**
   * @public
   * <p>A value that indicates whether the engine version supports exporting the log types
   *             specified by <code>ExportableLogTypes</code> to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;
}

/**
 * @public
 * <p>Represents the output of <a>DescribeDBEngineVersions</a>.</p>
 */
export interface DBEngineVersionMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Detailed information about one or more engine versions.</p>
   */
  DBEngineVersions?: DBEngineVersion[];
}

/**
 * @public
 * <p>Represents the input to <a>DescribeDBEngineVersions</a>.</p>
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
   *          <p>Example: <code>3.6.0</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The name of a specific parameter group family to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match an existing
   *                     <code>DBParameterGroupFamily</code>.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupFamily?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Indicates that only the default version of the specified engine or engine and major
   *             version combination is returned.</p>
   */
  DefaultOnly?: boolean;

  /**
   * @public
   * <p>If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version. </p>
   */
  ListSupportedCharacterSets?: boolean;

  /**
   * @public
   * <p>If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version. </p>
   */
  ListSupportedTimezones?: boolean;
}

/**
 * @public
 * <p>Represents the output of <a>DescribeDBInstances</a>.</p>
 */
export interface DBInstanceMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Detailed information about one or more instances. </p>
   */
  DBInstances?: DBInstance[];
}

/**
 * @public
 * <p>Represents the input to <a>DescribeDBInstances</a>.</p>
 */
export interface DescribeDBInstancesMessage {
  /**
   * @public
   * <p>The user-provided instance identifier. If this parameter is specified, information from only the specific instance is returned. This parameter isn't case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If provided, must match the identifier of an existing
   *                     <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * @public
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the output of <a>DescribeDBSubnetGroups</a>.</p>
 */
export interface DBSubnetGroupMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Detailed information about one or more subnet groups.</p>
   */
  DBSubnetGroups?: DBSubnetGroup[];
}

/**
 * @public
 * <p>Represents the input to <a>DescribeDBSubnetGroups</a>.</p>
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * @public
   * <p>The name of the subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the input to <a>DescribeEngineDefaultClusterParameters</a>.</p>
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * @public
   * <p>The name of the cluster parameter group family to return the engine parameter
   *             information for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Contains the result of a successful invocation of the
 *                 <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
 */
export interface EngineDefaults {
  /**
   * @public
   * <p>The name of the cluster parameter group family to return the engine parameter information for.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The parameters of a particular cluster parameter group family.</p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 */
export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * @public
   * <p>Contains the result of a successful invocation of the
   *                 <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
   */
  EngineDefaults?: EngineDefaults;
}

/**
 * @public
 * <p>Represents the input to <a>DescribeEventCategories</a>.</p>
 */
export interface DescribeEventCategoriesMessage {
  /**
   * @public
   * <p>The type of source that is generating the events.</p>
   *          <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code>
   *          </p>
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
 * <p>An event source type, accompanied by one or more event category names.</p>
 */
export interface EventCategoriesMap {
  /**
   * @public
   * <p>The source type that the returned categories belong to.</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>The event categories for the specified source type.</p>
   */
  EventCategories?: string[];
}

/**
 * @public
 * <p>Represents the output of <a>DescribeEventCategories</a>.</p>
 */
export interface EventCategoriesMessage {
  /**
   * @public
   * <p>A list of event category maps.</p>
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
 * <p>Represents the input to <a>DescribeEvents</a>.</p>
 */
export interface DescribeEventsMessage {
  /**
   * @public
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
   */
  SourceIdentifier?: string;

  /**
   * @public
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   */
  SourceType?: SourceType;

  /**
   * @public
   * <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p> The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format. </p>
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
   * <p>A list of event categories that trigger notifications for an event notification
   *             subscription.</p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Detailed information about an event.</p>
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
 * <p>Represents the output of <a>DescribeEvents</a>.</p>
 */
export interface EventsMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Detailed information about one or more events. </p>
   */
  Events?: Event[];
}

/**
 * @public
 * <p>Represents the input to <a>DescribeEventSubscriptions</a>.</p>
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * @public
   * <p>The name of the Amazon DocumentDB event notification subscription that you want to
   *             describe.</p>
   */
  SubscriptionName?: string;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the output of <a>DescribeEventSubscriptions</a>.</p>
 */
export interface EventSubscriptionsMessage {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A list of event subscriptions.</p>
   */
  EventSubscriptionsList?: EventSubscription[];
}

/**
 * @public
 */
export interface DescribeGlobalClustersMessage {
  /**
   * @public
   * <p>The user-supplied  cluster identifier. If this parameter is specified, information from only the specific cluster is returned. This parameter isn't case-sensitive.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * @public
   * <p>A filter that specifies one or more global DB clusters to describe.</p>
   *          <p>Supported filters: <code>db-cluster-id</code> accepts  cluster identifiers and  cluster Amazon Resource Names (ARNs). The results list will only include information about the clusters identified by these ARNs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. </p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface GlobalClustersMessage {
  /**
   * @public
   * <p></p>
   */
  Marker?: string;

  /**
   * @public
   * <p></p>
   */
  GlobalClusters?: GlobalCluster[];
}

/**
 * @public
 * <p>Represents the input to <a>DescribeOrderableDBInstanceOptions</a>.</p>
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * @public
   * <p>The name of the engine to retrieve instance options for.</p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>The engine version filter value. Specify this parameter to show only the available
   *             offerings that match the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The instance class filter value. Specify this parameter to show only the available
   *             offerings that match the specified instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>The license model filter value. Specify this parameter to show only the available
   *             offerings that match the specified license model.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>The virtual private cloud (VPC) filter value. Specify this parameter to show only the
   *             available VPC or non-VPC offerings.</p>
   */
  Vpc?: boolean;

  /**
   * @public
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>The options that are available for an instance.</p>
 */
export interface OrderableDBInstanceOption {
  /**
   * @public
   * <p>The engine type of an instance.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The engine version of an instance.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The instance class for an instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>The license model for an instance.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>A list of Availability Zones for an instance.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * @public
   * <p>Indicates whether an instance is in a virtual private cloud (VPC).</p>
   */
  Vpc?: boolean;
}

/**
 * @public
 * <p>Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.</p>
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * @public
   * <p>The options that are available for a particular orderable instance.</p>
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the input to <a>DescribePendingMaintenanceActions</a>.</p>
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
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 * <p>Represents the output of <a>DescribePendingMaintenanceActions</a>.</p>
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * @public
   * <p>The maintenance actions to be applied.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Represents the input to <a>FailoverDBCluster</a>.</p>
 */
export interface FailoverDBClusterMessage {
  /**
   * @public
   * <p>A cluster identifier to force a failover for. This parameter is not case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * @public
   * <p>The name of the instance to promote to the primary instance.</p>
   *          <p>You must specify the instance identifier for an Amazon DocumentDB replica in the cluster. For
   *             example, <code>mydbcluster-replica1</code>.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

/**
 * @public
 */
export interface FailoverDBClusterResult {
  /**
   * @public
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 * <p>Represents the input to <a>ListTagsForResource</a>.</p>
 */
export interface ListTagsForResourceMessage {
  /**
   * @public
   * <p>The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name
   *             (ARN).</p>
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
 * <p>Represents the output of <a>ListTagsForResource</a>.</p>
 */
export interface TagListMessage {
  /**
   * @public
   * <p>A list of one or more tags.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 * <p>The state of the security group doesn't allow deletion.</p>
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
 * <p>The configuration setting for the log types to be enabled for export to Amazon
 *             CloudWatch Logs for a specific instance or cluster.</p>
 *          <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine
 *             which logs are exported (or not exported) to CloudWatch Logs. The values within these
 *             arrays depend on the engine that is being used.</p>
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
 * <p>Represents the input to <a>ModifyDBCluster</a>.</p>
 */
export interface ModifyDBClusterMessage {
  /**
   * @public
   * <p>The cluster identifier for the cluster that is being modified. This parameter is
   *             not case sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  NewDBClusterIdentifier?: string;

  /**
   * @public
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
   */
  ApplyImmediately?: boolean;

  /**
   * @public
   * <p>The number of days for which automated backups are retained. You must specify a
   *             minimum value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35.</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * @public
   * <p>The name of the cluster parameter group to use for the cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * @public
   * <p>A list of virtual private cloud (VPC) security groups that the cluster will belong
   *             to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The port number on which the cluster accepts connections.</p>
   *          <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p>
   *          <p>Default: The same port as the original cluster.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The password for the master database user. This password can contain any printable
   *             ASCII character except forward slash (/), double quote ("), or the "at" symbol
   *             (@).</p>
   *          <p>Constraints: Must contain from 8 to 100 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * @public
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
   */
  PreferredBackupWindow?: string;

  /**
   * @public
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *             Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for
   *             each Amazon Web Services Region, occurring on a random day of the week. </p>
   *          <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>The configuration setting for the log types to be enabled for export to Amazon
   *             CloudWatch Logs for a specific instance or cluster. The
   *                 <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which
   *             logs are exported (or not exported) to CloudWatch Logs.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * @public
   * <p>The version number of the database engine to which you want to upgrade.
   *              Changing this parameter results in an outage. The change is applied during
   *              the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *          <p>To list all of the available engine versions for Amazon DocumentDB use the following command:</p>
   *          <p>
   *             <code>aws docdb describe-db-engine-versions --engine docdb --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *          <p>Constraints: You must allow major version upgrades when specifying a value for the
   *              <code>EngineVersion</code> parameter that is a different major version than the DB
   *              cluster's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;
}

/**
 * @public
 */
export interface ModifyDBClusterResult {
  /**
   * @public
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 * <p>Contains the name of a cluster parameter group.</p>
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * @public
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
   */
  DBClusterParameterGroupName?: string;
}

/**
 * @public
 * <p>Represents the input to <a>ModifyDBClusterParameterGroup</a>.</p>
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * @public
   * <p>The name of the cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * @public
   * <p>A list of parameters in the cluster parameter group to modify.</p>
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 * <p>Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>.</p>
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * @public
   * <p>The identifier for the cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the cluster snapshot attribute to modify.</p>
   *          <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual cluster
   *             snapshot, set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>A list of cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To authorize other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account IDs. To make the manual cluster snapshot restorable by any Amazon Web Services account, set it to <code>all</code>. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want to be available to all Amazon Web Services accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * @public
   * <p>A list of cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual cluster snapshot, set this list to include one or more Amazon Web Services account identifiers. To remove authorization for any Amazon Web Services account to copy or restore the cluster snapshot, set it to <code>all</code> . If you specify <code>all</code>, an Amazon Web Services account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual cluster snapshot.</p>
   */
  ValuesToRemove?: string[];
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * @public
   * <p>Detailed information about the attributes that are associated with a cluster
   *             snapshot.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

/**
 * @public
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB
 *             snapshot with. </p>
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
 * <p>The upgrade failed because a resource that the depends on can't be
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
 * @public
 * <p>Represents the input to <a>ModifyDBInstance</a>.</p>
 */
export interface ModifyDBInstanceMessage {
  /**
   * @public
   * <p>The instance identifier. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * @public
   * <p>The new compute and memory capacity of the instance; for example, <code>db.r5.large</code>. Not all instance classes are available in all Amazon Web Services Regions. </p>
   *          <p>If you modify the instance class, an outage occurs during the change. The change is
   *             applied during the next maintenance window, unless <code>ApplyImmediately</code> is
   *             specified as <code>true</code> for this request. </p>
   *          <p>Default: Uses existing setting.</p>
   */
  DBInstanceClass?: string;

  /**
   * @public
   * <p>Specifies whether the modifications in this request and any pending modifications are
   *             asynchronously applied as soon as possible, regardless of the
   *                 <code>PreferredMaintenanceWindow</code> setting for the instance. </p>
   *          <p> If this parameter is set to <code>false</code>, changes to the instance are
   *             applied during the next maintenance window. Some parameter changes can cause an outage
   *             and are applied on the next reboot.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  ApplyImmediately?: boolean;

  /**
   * @public
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
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
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
   */
  NewDBInstanceIdentifier?: string;

  /**
   * @public
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * @public
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * @public
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p>
   *          <p>Default: 1</p>
   *          <p>Valid values: 0-15</p>
   */
  PromotionTier?: number;

  /**
   * @public
   * <p>A value that indicates whether to enable Performance Insights for the DB Instance. For
   *             more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html">Using Amazon
   *                 Performance Insights</a>.</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * @public
   * <p>The KMS key identifier for encryption of Performance Insights
   *             data.</p>
   *          <p>The KMS key identifier is the key ARN, key ID, alias ARN, or alias name
   *             for the KMS key.</p>
   *          <p>If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your
   *             default KMS key. There is a default KMS key for your
   *             Amazon Web Services account. Your Amazon Web Services account has a different
   *             default KMS key for each Amazon Web Services region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;
}

/**
 * @public
 */
export interface ModifyDBInstanceResult {
  /**
   * @public
   * <p>Detailed information about an instance. </p>
   */
  DBInstance?: DBInstance;
}

/**
 * @public
 * <p>Represents the input to <a>ModifyDBSubnetGroup</a>.</p>
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * @public
   * <p>The name for the subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p>
   *          <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * @public
   * <p>The description for the subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * @public
   * <p>The Amazon EC2 subnet IDs for the subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupResult {
  /**
   * @public
   * <p>Detailed information about a subnet group. </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

/**
 * @public
 * <p>The subnet is already in use in the Availability Zone.</p>
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
 * <p>Represents the input to <a>ModifyEventSubscription</a>.</p>
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * @public
   * <p>The name of the Amazon DocumentDB event notification subscription.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The
   *             ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The type of source that is generating the events. For example, if you want to be notified of events generated by an instance, set this parameter to <code>db-instance</code>. If this value is not specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>, <code>db-security-group</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * @public
   * <p> A list of event categories for a <code>SourceType</code> that you want to subscribe
   *             to.</p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p> A Boolean value; set to <code>true</code> to activate the subscription. </p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * @public
   * <p>Detailed information about an event to which you have subscribed.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>Represents the input to <a>ModifyGlobalCluster</a>.</p>
 */
export interface ModifyGlobalClusterMessage {
  /**
   * @public
   * <p>The identifier for the global cluster being modified. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  NewGlobalClusterIdentifier?: string;

  /**
   * @public
   * <p>Indicates if the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled. </p>
   */
  DeletionProtection?: boolean;
}

/**
 * @public
 */
export interface ModifyGlobalClusterResult {
  /**
   * @public
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
 * <p>Represents the input to <a>RebootDBInstance</a>.</p>
 */
export interface RebootDBInstanceMessage {
  /**
   * @public
   * <p>The instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * @public
   * <p> When <code>true</code>, the reboot is conducted through a Multi-AZ failover. </p>
   *          <p>Constraint: You can't specify <code>true</code> if the instance is not configured for
   *             Multi-AZ.</p>
   */
  ForceFailover?: boolean;
}

/**
 * @public
 */
export interface RebootDBInstanceResult {
  /**
   * @public
   * <p>Detailed information about an instance. </p>
   */
  DBInstance?: DBInstance;
}

/**
 * @public
 * <p>Represents the input to <a>RemoveFromGlobalCluster</a>.</p>
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * @public
   * <p>The cluster identifier to detach from the Amazon DocumentDB global cluster. </p>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) identifying the cluster that was detached from the Amazon DocumentDB global cluster. </p>
   */
  DbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterResult {
  /**
   * @public
   * <p>A data type representing an Amazon DocumentDB global cluster.</p>
   */
  GlobalCluster?: GlobalCluster;
}

/**
 * @public
 * <p>Represents the input to <a>RemoveSourceIdentifierFromSubscription</a>.</p>
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @public
   * <p>The name of the Amazon DocumentDB event notification subscription that you want to remove a
   *             source identifier from.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p> The source identifier to be removed from the subscription, such as the instance
   *             identifier for an instance, or the name of a security group. </p>
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @public
   * <p>Detailed information about an event to which you have subscribed.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>Represents the input to <a>RemoveTagsFromResource</a>.</p>
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * @public
   * <p>The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource
   *             Name (ARN).</p>
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
 * <p>Represents the input to <a>ResetDBClusterParameterGroup</a>.</p>
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * @public
   * <p>The name of the cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * @public
   * <p>A value that is set to <code>true</code> to reset all parameters in the cluster
   *             parameter group to their default values, and <code>false</code> otherwise. You can't use
   *             this parameter if there is a list of parameter names specified for the
   *                 <code>Parameters</code> parameter.</p>
   */
  ResetAllParameters?: boolean;

  /**
   * @public
   * <p>A list of parameter names in the cluster parameter group to reset to the default
   *             values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is
   *             set to <code>true</code>.</p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 * <p>The cluster doesn't have enough capacity for the current operation.</p>
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
 * <p>The state of the snapshot doesn't allow deletion.</p>
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
 * <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB
 *             instance.</p>
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
 * <p>Represents the input to <a>RestoreDBClusterFromSnapshot</a>.</p>
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * @public
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the restored DB
   *             cluster can be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
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
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier for the snapshot or cluster snapshot to restore from.</p>
   *          <p>You can use either the name or the Amazon Resource Name (ARN) to specify a cluster
   *             snapshot. However, you can use only the ARN to specify a snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing snapshot.</p>
   *             </li>
   *          </ul>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * @public
   * <p>The database engine to use for the new cluster.</p>
   *          <p>Default: The same as source.</p>
   *          <p>Constraint: Must be compatible with the engine of the source.</p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>The version of the database engine to use for the new cluster.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The port number on which the new cluster accepts connections.</p>
   *          <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>.</p>
   *          <p>Default: The same port as the original cluster.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The name of the subnet group to use for the new cluster.</p>
   *          <p>Constraints: If provided, must match the name of an existing
   *                 <code>DBSubnetGroup</code>.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>A list of virtual private cloud (VPC) security groups that the new cluster will
   *             belong to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The tags to be assigned to the restored cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
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
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>A list of log types that must be enabled for exporting to Amazon CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * @public
   * <p>The name of the DB cluster parameter group to associate with this DB cluster.</p>
   *          <p>
   *             <i>Type:</i> String.         <i>Required:</i> No.</p>
   *          <p>If this argument is omitted, the default DB cluster parameter group is used.
   *         If supplied, must match the name of an existing default DB cluster parameter group.
   *         The string must consist of from 1 to 255 letters, numbers or hyphens. Its first
   *         character must be a letter, and it cannot end with a hyphen or contain two consecutive
   *         hyphens.</p>
   */
  DBClusterParameterGroupName?: string;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotResult {
  /**
   * @public
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 * <p>Represents the input to <a>RestoreDBClusterToPointInTime</a>.</p>
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * @public
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
   */
  DBClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  RestoreType?: string;

  /**
   * @public
   * <p>The identifier of the source cluster from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * @public
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
   */
  RestoreToTime?: Date;

  /**
   * @public
   * <p>A value that is set to <code>true</code> to restore the cluster to the latest
   *             restorable backup time, and <code>false</code> otherwise. </p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if the <code>RestoreToTime</code> parameter is
   *             provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * @public
   * <p>The port number on which the new cluster accepts connections.</p>
   *          <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p>
   *          <p>Default: The default port for the engine.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The subnet group name to use for the new cluster.</p>
   *          <p>Constraints: If provided, must match the name of an existing
   *                 <code>DBSubnetGroup</code>.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * @public
   * <p>A list of VPC security groups that the new cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The tags to be assigned to the restored cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
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
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>A list of log types that must be enabled for exporting to Amazon CloudWatch
   *             Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * @public
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeResult {
  /**
   * @public
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 */
export interface StartDBClusterMessage {
  /**
   * @public
   * <p>The identifier of the cluster to restart. Example:
   *                 <code>docdb-2019-05-28-15-24-52</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartDBClusterResult {
  /**
   * @public
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

/**
 * @public
 */
export interface StopDBClusterMessage {
  /**
   * @public
   * <p>The identifier of the cluster to stop. Example:
   *             <code>docdb-2019-05-28-15-24-52</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDBClusterResult {
  /**
   * @public
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}
