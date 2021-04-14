import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * <p>The required name of the tag. The string value can be from 1 to 128 Unicode characters
   *             in length and can't be prefixed with "aws:" or "rds:". The string can contain only the
   *             set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java regex:
   *             "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Key?: string;

  /**
   * <p>The optional value of the tag. The string value can be from 1 to 256 Unicode
   *             characters in length and can't be prefixed with "aws:" or "rds:". The string can contain
   *             only the set of Unicode letters, digits, white space, '_', '.', '/', '=', '+', '-' (Java
   *             regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>AddTagsToResource</a>.
 *         </p>
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>The Amazon DocumentDB resource that the tags are added to. This value is an
   *             Amazon Resource Name .</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon DocumentDB resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceMessage {
  export const filterSensitiveLog = (obj: AddTagsToResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 */
export interface DBClusterNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterNotFoundFault {
  export const filterSensitiveLog = (obj: DBClusterNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing instance. </p>
 */
export interface DBInstanceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBInstanceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceNotFoundFault {
  export const filterSensitiveLog = (obj: DBInstanceNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing snapshot. </p>
 */
export interface DBSnapshotNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSnapshotNotFoundFault {
  export const filterSensitiveLog = (obj: DBSnapshotNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>ApplyPendingMaintenanceAction</a>.
 *         </p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the pending
   *             maintenance action applies to.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *         <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>
   *         </p>
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request or undoes an
   *             opt-in request. An opt-in request of type <code>immediate</code>
   *             can't be undone.</p>
   *         <p>Valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>immediate</code> - Apply the maintenance action
   *                     immediately.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>next-maintenance</code> - Apply the maintenance
   *                     action during the next maintenance window for the resource.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>undo-opt-in</code> - Cancel any existing
   *                     <code>next-maintenance</code> opt-in requests.</p>
   *             </li>
   *          </ul>
   */
  OptInType: string | undefined;
}

export namespace ApplyPendingMaintenanceActionMessage {
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
   * <p>The date of the maintenance window when the action is applied. The maintenance action
   *             is applied to the resource during its first maintenance window after this date. If this
   *             date is specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The date when the maintenance action is automatically applied. The maintenance action
   *             is applied to the resource on this date regardless of the maintenance window for the
   *             resource. If this date is specified, any <code>immediate</code> opt-in requests are
   *             ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * <p>The effective date when the pending maintenance action is applied to the
   *             resource.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;
}

export namespace PendingMaintenanceAction {
  export const filterSensitiveLog = (obj: PendingMaintenanceAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.
 *         </p>
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that has pending
   *             maintenance actions.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>A list that provides details about the pending maintenance actions
   *             for the resource.</p>
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];
}

export namespace ResourcePendingMaintenanceActions {
  export const filterSensitiveLog = (obj: ResourcePendingMaintenanceActions): any => ({
    ...obj,
  });
}

export interface ApplyPendingMaintenanceActionResult {
  /**
   * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.
   *         </p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

export namespace ApplyPendingMaintenanceActionResult {
  export const filterSensitiveLog = (obj: ApplyPendingMaintenanceActionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster isn't in a valid state.</p>
 */
export interface InvalidDBClusterStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterStateFault {
  export const filterSensitiveLog = (obj: InvalidDBClusterStateFault): any => ({
    ...obj,
  });
}

/**
 * <p> The specified instance isn't in the <i>available</i> state.
 *         </p>
 */
export interface InvalidDBInstanceStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBInstanceStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBInstanceStateFault {
  export const filterSensitiveLog = (obj: InvalidDBInstanceStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource ID was not found.</p>
 */
export interface ResourceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundFault {
  export const filterSensitiveLog = (obj: ResourceNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>CopyDBClusterParameterGroup</a>.
 *         </p>
 */
export interface CopyDBClusterParameterGroupMessage {
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source cluster
   *             parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>If the source cluster parameter group is in the same AWS
   *                     Region as the copy, specify a valid parameter group
   *                     identifier; for example,
   *                     <code>my-db-cluster-param-group</code>, or a valid ARN.</p>
   *             </li>
   *             <li>
   *                 <p>If the source parameter group is in a different AWS Region
   *                     than the copy, specify a valid cluster parameter group ARN;
   *                     for example,
   *                     <code>arn:aws:rds:us-east-1:123456789012:sample-cluster:sample-parameter-group</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>The identifier for the copied cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 letters, numbers, or hyphens.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.
   *                     </p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-param-group1</code>
   *         </p>
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>A description for the copied cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>The tags that are to be assigned to the parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace CopyDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: CopyDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about a cluster parameter group. </p>
 */
export interface DBClusterParameterGroup {
  /**
   * <p>Provides the name of the cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>Provides the name of the parameter group family that this cluster parameter
   *             group is compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the customer-specified description for this cluster parameter
   *             group.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the cluster parameter group.</p>
   */
  DBClusterParameterGroupArn?: string;
}

export namespace DBClusterParameterGroup {
  export const filterSensitiveLog = (obj: DBClusterParameterGroup): any => ({
    ...obj,
  });
}

export interface CopyDBClusterParameterGroupResult {
  /**
   * <p>Detailed information about a cluster parameter group. </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CopyDBClusterParameterGroupResult {
  export const filterSensitiveLog = (obj: CopyDBClusterParameterGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>A parameter group with the same name already exists.</p>
 */
export interface DBParameterGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupAlreadyExistsFault {
  export const filterSensitiveLog = (obj: DBParameterGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an existing parameter
 *             group. </p>
 */
export interface DBParameterGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupNotFoundFault {
  export const filterSensitiveLog = (obj: DBParameterGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>This request would cause you to exceed the allowed number of parameter
 *             groups.</p>
 */
export interface DBParameterGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupQuotaExceededFault {
  export const filterSensitiveLog = (obj: DBParameterGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>CopyDBClusterSnapshot</a>.
 *         </p>
 */
export interface CopyDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the cluster snapshot to copy. This parameter is
   *             not case sensitive.</p>
   *
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid system snapshot in the
   *                     <i>available</i> state.</p>
   *             </li>
   *             <li>
   *                 <p>If the source snapshot is in the same AWS Region as the
   *                     copy, specify a valid snapshot identifier.</p>
   *             </li>
   *             <li>
   *
   *                 <p>If the source snapshot is in a different AWS Region than
   *                     the copy, specify a valid cluster snapshot ARN.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-snapshot1</code>
   *         </p>
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the new cluster snapshot to create from the
   *             source cluster snapshot. This parameter is not case sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.
   *                     </p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-snapshot2</code>
   *         </p>
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The AWS KMS key ID for an encrypted cluster snapshot. The AWS KMS
   *             key ID is the Amazon Resource Name (ARN), AWS KMS key identifier, or
   *             the AWS KMS key alias for the AWS KMS encryption key. </p>
   *
   *         <p>If you copy an encrypted cluster snapshot from your AWS account,
   *             you can specify a value for <code>KmsKeyId</code> to encrypt the
   *             copy with a new AWS KMS encryption key. If you don't specify a value
   *             for <code>KmsKeyId</code>, then the copy of the cluster snapshot is
   *             encrypted with the same AWS KMS key as the source cluster snapshot.
   *             </p>
   *
   *         <p>If you copy an encrypted cluster snapshot that is shared from
   *             another AWS account, then you must specify a value for
   *             <code>KmsKeyId</code>.</p>
   *
   *
   *         <p>To copy an encrypted cluster snapshot to another AWS Region, set
   *             <code>KmsKeyId</code> to the AWS KMS key ID that you want to use to
   *             encrypt the copy of the cluster snapshot in the destination Region.
   *             AWS KMS encryption keys are specific to the AWS Region that they are
   *             created in, and you can't use encryption keys from one AWS Region in
   *             another AWS Region.</p>
   *
   *         <p>If you copy an unencrypted cluster snapshot and specify a value
   *             for the <code>KmsKeyId</code> parameter, an error is returned.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the
   *             <code>CopyDBClusterSnapshot</code> API action in the AWS Region that
   *             contains the source cluster snapshot to copy. You must use the
   *             <code>PreSignedUrl</code> parameter when copying a cluster snapshot
   *             from another AWS Region.</p>
   *
   *         <p>If you are using an AWS SDK tool or the AWS CLI, you can specify
   *             <code>SourceRegion</code> (or <code>--source-region</code> for the
   *             AWS CLI) instead of specifying <code>PreSignedUrl</code> manually.
   *             Specifying <code>SourceRegion</code> autogenerates a pre-signed URL
   *             that is a valid request for the operation that can be executed in
   *             the source AWS Region.</p>
   *
   *         <p>The presigned URL must be a valid request for the
   *             <code>CopyDBClusterSnapshot</code> API action that can be executed
   *             in the source AWS Region that contains the cluster snapshot to be
   *             copied. The presigned URL request must contain the following
   *             parameter values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SourceRegion</code> - The ID of the region that
   *                     contains the snapshot to be copied.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SourceDBClusterSnapshotIdentifier</code> - The
   *                     identifier for the the encrypted cluster snapshot to be
   *                     copied. This identifier must be in the Amazon Resource Name
   *                     (ARN) format for the source AWS Region. For example, if you
   *                     are copying an encrypted cluster snapshot from the us-east-1
   *                     AWS Region, then your
   *                     <code>SourceDBClusterSnapshotIdentifier</code> looks
   *                     something like the following:
   *                     <code>arn:aws:rds:us-east-1:12345678012:sample-cluster:sample-cluster-snapshot</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TargetDBClusterSnapshotIdentifier</code> - The
   *                     identifier for the new cluster snapshot to be created. This
   *                     parameter isn't case sensitive.</p>
   *             </li>
   *          </ul>
   */
  PreSignedUrl?: string;

  /**
   * <p>Set to <code>true</code> to copy all tags from the source cluster
   *             snapshot to the target cluster snapshot, and otherwise
   *             <code>false</code>. The default is <code>false</code>.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The tags to be assigned to the cluster snapshot.</p>
   */
  Tags?: Tag[];
}

export namespace CopyDBClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: CopyDBClusterSnapshotMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about a cluster snapshot. </p>
 */
export interface DBClusterSnapshot {
  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the cluster
   *             snapshot can be restored in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the identifier for the cluster snapshot.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>Specifies the cluster identifier of the cluster that this cluster snapshot
   *             was created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Provides the time when the snapshot was taken, in UTC.</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the status of this cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies the port that the cluster was listening on at the time of the
   *             snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Provides the virtual private cloud (VPC) ID that is associated with the cluster
   *             snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time when the cluster was created, in Universal Coordinated Time
   *             (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Provides the master user name for the cluster snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Provides the version of the database engine for this cluster snapshot.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Provides the type of the cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Specifies whether the cluster snapshot is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is <code>true</code>, the AWS KMS key identifier for
   *             the encrypted cluster snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * <p>If the cluster snapshot was copied from a source cluster snapshot, the ARN for
   *             the source cluster snapshot; otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;
}

export namespace DBClusterSnapshot {
  export const filterSensitiveLog = (obj: DBClusterSnapshot): any => ({
    ...obj,
  });
}

export interface CopyDBClusterSnapshotResult {
  /**
   * <p>Detailed information about a cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CopyDBClusterSnapshotResult {
  export const filterSensitiveLog = (obj: CopyDBClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>You already have a cluster snapshot with the given identifier.</p>
 */
export interface DBClusterSnapshotAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterSnapshotAlreadyExistsFault {
  export const filterSensitiveLog = (obj: DBClusterSnapshotAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster
 *             snapshot. </p>
 */
export interface DBClusterSnapshotNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterSnapshotNotFoundFault {
  export const filterSensitiveLog = (obj: DBClusterSnapshotNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The provided value isn't a valid cluster snapshot state.</p>
 */
export interface InvalidDBClusterSnapshotStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBClusterSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterSnapshotStateFault {
  export const filterSensitiveLog = (obj: InvalidDBClusterSnapshotStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred when accessing an AWS KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault extends __SmithyException, $MetadataBearer {
  name: "KMSKeyNotAccessibleFault";
  $fault: "client";
  message?: string;
}

export namespace KMSKeyNotAccessibleFault {
  export const filterSensitiveLog = (obj: KMSKeyNotAccessibleFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would cause you to exceed the allowed number of snapshots.</p>
 */
export interface SnapshotQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotQuotaExceededFault {
  export const filterSensitiveLog = (obj: SnapshotQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>CreateDBCluster</a>.
 *         </p>
 */
export interface CreateDBClusterMessage {
  /**
   * <p>A list of Amazon EC2 Availability Zones that instances in the
   *             cluster can be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The number of days for which automated backups are retained. You
   *             must specify a minimum value of 1.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be a value from 1 to 35.</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The cluster identifier. This parameter is stored as a lowercase
   *             string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.
   *                     </p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the cluster parameter group to associate with this
   *             cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with this cluster.
   *             </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A subnet group to associate with this cluster.</p>
   *         <p>Constraints: Must match the name of an existing
   *             <code>DBSubnetGroup</code>. Must not be default.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the database engine to be used for this cluster.</p>
   *         <p>Valid values: <code>docdb</code>
   *         </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use. The --engine-version will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the instances in the cluster accept
   *             connections.</p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be from 1 to 63 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word for the chosen database engine.
   *                     </p>
   *             </li>
   *          </ul>
   */
  MasterUsername: string | undefined;

  /**
   * <p>The password for the master database user. This password can
   *             contain any printable ASCII character except forward slash (/),
   *             double quote ("), or the "at" symbol (@).</p>
   *         <p>Constraints: Must contain from 8 to 100 characters.</p>
   */
  MasterUserPassword: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created if
   *             automated backups are enabled using the
   *             <code>BackupRetentionPeriod</code> parameter. </p>
   *         <p>The default is a 30-minute window selected at random from an 8-hour
   *             block of time for each AWS Region. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                 <p>Must not conflict with the preferred maintenance window.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur,
   *             in Universal Coordinated Time (UTC).</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an 8-hour
   *             block of time for each AWS Region, occurring on a random day of the
   *             week.</p>
   *         <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The tags to be assigned to the cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies whether the cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The AWS KMS key identifier for an encrypted cluster.</p>
   *         <p>The AWS KMS key identifier is the Amazon Resource Name (ARN) for
   *             the AWS KMS encryption key. If you are creating a cluster using the
   *             same AWS account that owns the AWS KMS encryption key that is used
   *             to encrypt the new cluster, you can use the AWS KMS key alias
   *             instead of the ARN for the AWS KMS encryption key.</p>
   *         <p>If an encryption key is not specified in <code>KmsKeyId</code>:
   *             </p>
   *         <ul>
   *             <li>
   *                 <p>If the <code>StorageEncrypted</code> parameter is
   *                     <code>true</code>, Amazon DocumentDB uses your default encryption key.
   *                     </p>
   *             </li>
   *          </ul>
   *         <p>AWS KMS creates the default encryption key for your AWS account.
   *             Your AWS account has a different default encryption key for each AWS
   *             Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Not currently supported.
   *             </p>
   */
  PreSignedUrl?: string;

  /**
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
   * <p>Specifies whether this cluster can be deleted. If
   *             <code>DeletionProtection</code> is enabled, the cluster cannot be
   *             deleted unless it is modified and <code>DeletionProtection</code> is
   *             disabled. <code>DeletionProtection</code> protects clusters from
   *             being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;
}

export namespace CreateDBClusterMessage {
  export const filterSensitiveLog = (obj: CreateDBClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a
 *             cluster.</p>
 */
export interface DBClusterRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *             cluster.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the cluster. The
   *                 <code>Status</code> property returns one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> - The IAM role ARN is associated with the cluster and
   *                     can be used to access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The IAM role ARN is being associated with the DB
   *                     cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>INVALID</code> - The IAM role ARN is associated with the cluster, but
   *                     the cluster cannot assume the IAM role to access other AWS services on your
   *                     behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBClusterRole {
  export const filterSensitiveLog = (obj: DBClusterRole): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an instance that is part of a cluster.</p>
 */
export interface DBClusterMember {
  /**
   * <p>Specifies the instance identifier for this member of the cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>A value that is <code>true</code> if the cluster member is the primary instance for
   *             the cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>Specifies the status of the cluster parameter group for this member of the DB
   *             cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance. </p>
   */
  PromotionTier?: number;
}

export namespace DBClusterMember {
  export const filterSensitiveLog = (obj: DBClusterMember): any => ({
    ...obj,
  });
}

/**
 * <p>Used as a response element for queries on virtual private cloud (VPC) security group
 *             membership.</p>
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
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about a cluster. </p>
 */
export interface DBCluster {
  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the cluster
   *             can be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the number of days for which automatic snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Contains a user-supplied cluster identifier. This identifier is the unique key that
   *             identifies a cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies the name of the cluster parameter group for the cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * <p>Specifies information on the subnet group that is associated with the cluster,
   *             including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * <p>Specifies the current state of this cluster.</p>
   */
  Status?: string;

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
   * <p>Specifies the connection endpoint for the primary instance of the cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The reader endpoint for the cluster. The reader endpoint for a cluster load
   *             balances connections across the Amazon DocumentDB replicas that are available in a cluster. As
   *             clients request new connections to the reader endpoint, Amazon DocumentDB distributes the
   *             connection requests among the Amazon DocumentDB replicas in the cluster. This functionality can
   *             help balance your read workload across multiple Amazon DocumentDB replicas in your cluster. </p>
   *         <p>If a failover occurs, and the Amazon DocumentDB replica that you are connected to is promoted to
   *             be the primary instance, your connection is dropped. To continue sending your read
   *             workload to other Amazon DocumentDB replicas in the cluster, you can then reconnect to the reader
   *             endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>Specifies whether the cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Provides the name of the database engine to be used for this cluster.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Contains the master user name for the cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies the daily time range during which automated backups are created if automated
   *             backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in
   *             Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Provides the list of instances that make up the cluster.</p>
   */
  DBClusterMembers?: DBClusterMember[];

  /**
   * <p>Provides a list of virtual private cloud (VPC) security groups that the cluster
   *             belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>Specifies whether the cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is <code>true</code>, the AWS KMS key identifier for
   *             the encrypted cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the cluster. This identifier is
   *             found in AWS CloudTrail log entries whenever the AWS KMS key for the cluster is
   *             accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>Provides a list of the AWS Identity and Access Management (IAM) roles that are
   *             associated with the cluster. IAM roles that are associated with a cluster grant
   *             permission for the cluster to access other AWS services on your behalf.</p>
   */
  AssociatedRoles?: DBClusterRole[];

  /**
   * <p>Specifies the time when the cluster was created, in Universal Coordinated Time
   *             (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>A list of log types that this cluster is configured to export to Amazon CloudWatch
   *             Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;
}

export namespace DBCluster {
  export const filterSensitiveLog = (obj: DBCluster): any => ({
    ...obj,
  });
}

export interface CreateDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace CreateDBClusterResult {
  export const filterSensitiveLog = (obj: CreateDBClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>You already have a cluster with the given identifier.</p>
 */
export interface DBClusterAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterAlreadyExistsFault {
  export const filterSensitiveLog = (obj: DBClusterAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing cluster
 *             parameter group. </p>
 */
export interface DBClusterParameterGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterParameterGroupNotFoundFault {
  export const filterSensitiveLog = (obj: DBClusterParameterGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster can't be created because you have reached the maximum allowed quota of
 *             clusters.</p>
 */
export interface DBClusterQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterQuotaExceededFault {
  export const filterSensitiveLog = (obj: DBClusterQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Subnets in the subnet group should cover at least two Availability Zones unless
 *             there is only one Availability Zone.</p>
 */
export interface DBSubnetGroupDoesNotCoverEnoughAZs extends __SmithyException, $MetadataBearer {
  name: "DBSubnetGroupDoesNotCoverEnoughAZs";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupDoesNotCoverEnoughAZs {
  export const filterSensitiveLog = (obj: DBSubnetGroupDoesNotCoverEnoughAZs): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing subnet group. </p>
 */
export interface DBSubnetGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBSubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupNotFoundFault {
  export const filterSensitiveLog = (obj: DBSubnetGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>There is not enough storage available for the current action. You might be able to
 *             resolve this error by updating your subnet group to use different Availability Zones
 *             that have more storage available. </p>
 */
export interface InsufficientStorageClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientStorageClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientStorageClusterCapacityFault {
  export const filterSensitiveLog = (obj: InsufficientStorageClusterCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>The subnet group can't be deleted because it's in use.</p>
 */
export interface InvalidDBSubnetGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBSubnetGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetGroupStateFault {
  export const filterSensitiveLog = (obj: InvalidDBSubnetGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The requested subnet is not valid, or multiple subnets were requested that are not all
 *             in a common virtual private cloud (VPC).</p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubnet {
  export const filterSensitiveLog = (obj: InvalidSubnet): any => ({
    ...obj,
  });
}

/**
 * <p>The subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
 */
export interface InvalidVPCNetworkStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  export const filterSensitiveLog = (obj: InvalidVPCNetworkStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would cause you to exceed the allowed amount of storage available across
 *             all instances.</p>
 */
export interface StorageQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "StorageQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace StorageQuotaExceededFault {
  export const filterSensitiveLog = (obj: StorageQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of <a>CreateDBClusterParameterGroup</a>.</p>
 */
export interface CreateDBClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must not match the name of an existing
   *                     <code>DBClusterParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This value is stored as a lowercase string.</p>
   *         </note>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The cluster parameter group family name.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the cluster parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: CreateDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateDBClusterParameterGroupResult {
  /**
   * <p>Detailed information about a cluster parameter group. </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CreateDBClusterParameterGroupResult {
  export const filterSensitiveLog = (obj: CreateDBClusterParameterGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of <a>CreateDBClusterSnapshot</a>.</p>
 */
export interface CreateDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the cluster snapshot. This parameter is stored
   *             as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.
   *                     </p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-snapshot1</code>
   *         </p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the cluster to create a snapshot for. This
   *             parameter is not case sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing
   *                     <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the cluster snapshot.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: CreateDBClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface CreateDBClusterSnapshotResult {
  /**
   * <p>Detailed information about a cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CreateDBClusterSnapshotResult {
  export const filterSensitiveLog = (obj: CreateDBClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified CIDR IP or Amazon EC2 security group isn't authorized for the
 *             specified security group.</p>
 *         <p>Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf
 *             using IAM.</p>
 */
export interface AuthorizationNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "AuthorizationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationNotFoundFault {
  export const filterSensitiveLog = (obj: AuthorizationNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>CreateDBInstance</a>.</p>
 */
export interface CreateDBInstanceMessage {
  /**
   * <p>The instance identifier. This parameter is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mydbinstance</code>
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The compute and memory capacity of the instance; for example,
   *                 <code>db.r5.large</code>. </p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.</p>
   *         <p>Valid value: <code>docdb</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>The Amazon EC2 Availability Zone that the instance is created in. </p>
   *         <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p>
   *         <p>Example: <code>us-east-1d</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The time range each week during which system maintenance can occur, in Universal
   *             Coordinated Time (UTC).</p>
   *         <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an 8-hour block of time for
   *             each AWS Region, occurring on a random day of the week. </p>
   *         <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Indicates that minor engine upgrades are applied automatically to the instance
   *             during the maintenance window.</p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The tags to be assigned to the instance. You can assign up to
   *            10 tags to an instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The identifier of the cluster that the instance will belong to.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   *         <p>Default: 1</p>
   *         <p>Valid values: 0-15</p>
   */
  PromotionTier?: number;
}

export namespace CreateDBInstanceMessage {
  export const filterSensitiveLog = (obj: CreateDBInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Availability Zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

/**
 * <p> Detailed information about a subnet. </p>
 */
export interface Subnet {
  /**
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Specifies the Availability Zone for the subnet.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>Specifies the status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export namespace Subnet {
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about a subnet group. </p>
 */
export interface DBSubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Provides the description of the subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>Provides the virtual private cloud (VPC) ID of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>Provides the status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>Detailed information about one or more subnets within a subnet group.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   */
  DBSubnetGroupArn?: string;
}

export namespace DBSubnetGroup {
  export const filterSensitiveLog = (obj: DBSubnetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Network information for accessing a cluster or instance. Client programs must
 *             specify a valid endpoint to access these Amazon DocumentDB resources.</p>
 */
export interface Endpoint {
  /**
   * <p>Specifies the DNS address of the instance.</p>
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
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

/**
 * <p>A list of the log types whose configuration is still pending. These log types are in
 *             the process of being activated or deactivated.</p>
 */
export interface PendingCloudwatchLogsExports {
  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated,
   *             these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: string[];

  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log
   *             types are exported to Amazon CloudWatch Logs.</p>
   */
  LogTypesToDisable?: string[];
}

export namespace PendingCloudwatchLogsExports {
  export const filterSensitiveLog = (obj: PendingCloudwatchLogsExports): any => ({
    ...obj,
  });
}

/**
 * <p> One or more modified settings for an instance. These modified settings have been
 *             requested, but haven't been applied yet.</p>
 */
export interface PendingModifiedValues {
  /**
   * <p> Contains the new <code>DBInstanceClass</code> for the instance that will be
   *             applied or is currently being applied. </p>
   */
  DBInstanceClass?: string;

  /**
   * <p> Contains the new <code>AllocatedStorage</code> size for then instance that will be
   *             applied or is currently being applied. </p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Contains the pending or currently in-progress change of the master credentials for the
   *             instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>Specifies the pending port for the instance.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates that the Single-AZ instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The license model for the instance.</p>
   *         <p>Valid values: <code>license-included</code>, <code>bring-your-own-license</code>,
   *                 <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the new Provisioned IOPS value for the instance that will be applied or
   *             is currently being applied.</p>
   */
  Iops?: number;

  /**
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the instance that will be
   *             applied or is currently being applied. </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the instance.</p>
   */
  StorageType?: string;

  /**
   * <p>Specifies the identifier of the certificate authority (CA) certificate for the DB
   *             instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The new subnet group for the instance. </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A list of the log types whose configuration is still pending. These log types are in
   *             the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
}

export namespace PendingModifiedValues {
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a list of status information for an instance.</p>
 */
export interface DBInstanceStatusInfo {
  /**
   * <p>This value is currently "<code>read replication</code>."</p>
   */
  StatusType?: string;

  /**
   * <p>A Boolean value that is <code>true</code> if the instance is operating normally, or
   *                 <code>false</code> if the instance is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * <p>Status of the instance. For a <code>StatusType</code> of read replica, the values
   *             can be <code>replicating</code>, error, <code>stopped</code>, or
   *             <code>terminated</code>.</p>
   */
  Status?: string;

  /**
   * <p>Details of the error if there is an error for the instance. If the instance is not in
   *             an error state, this value is blank.</p>
   */
  Message?: string;
}

export namespace DBInstanceStatusInfo {
  export const filterSensitiveLog = (obj: DBInstanceStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about an instance. </p>
 */
export interface DBInstance {
  /**
   * <p>Contains a user-provided database identifier. This identifier is the unique key that
   *             identifies an instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Provides the name of the database engine to be used for this instance.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>Provides the date and time that the instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p> Specifies the daily time range during which automated backups are created if
   *             automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.
   *         </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the number of days for which automatic snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Provides a list of VPC security group elements that the instance belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>Specifies the name of the Availability Zone that the instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Specifies information on the subnet group that is associated with the instance,
   *             including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in
   *             Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Specifies that changes to the instance are pending. This element is included only
   *             when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Not supported. Amazon DocumentDB does not currently support public endpoints. The value
   *           of <code>PubliclyAccessible</code> is always <code>false</code>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The status of a read replica. If the instance is not a read replica, this is
   *             blank.</p>
   */
  StatusInfos?: DBInstanceStatusInfo[];

  /**
   * <p>Contains the name of the cluster that the instance is a member of if the
   *             instance is a member of a cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies whether or not the instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p> If <code>StorageEncrypted</code> is <code>true</code>, the AWS KMS key identifier for
   *             the encrypted instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the instance. This identifier is
   *             found in AWS CloudTrail log entries whenever the AWS KMS key for the instance is
   *             accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>A list of log types that this instance is configured to export to Amazon CloudWatch
   *             Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];
}

export namespace DBInstance {
  export const filterSensitiveLog = (obj: DBInstance): any => ({
    ...obj,
  });
}

export interface CreateDBInstanceResult {
  /**
   * <p>Detailed information about an instance. </p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceResult {
  export const filterSensitiveLog = (obj: CreateDBInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>You already have a instance with the given identifier.</p>
 */
export interface DBInstanceAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBInstanceAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceAlreadyExistsFault {
  export const filterSensitiveLog = (obj: DBInstanceAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing security group. </p>
 */
export interface DBSecurityGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBSecurityGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupNotFoundFault {
  export const filterSensitiveLog = (obj: DBSecurityGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would cause you to exceed the allowed number of instances.</p>
 */
export interface InstanceQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "InstanceQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace InstanceQuotaExceededFault {
  export const filterSensitiveLog = (obj: InstanceQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified instance class isn't available in the specified Availability
 *             Zone.</p>
 */
export interface InsufficientDBInstanceCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientDBInstanceCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBInstanceCapacityFault {
  export const filterSensitiveLog = (obj: InsufficientDBInstanceCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>Storage of the specified <code>StorageType</code> can't be associated with the DB
 *             instance. </p>
 */
export interface StorageTypeNotSupportedFault extends __SmithyException, $MetadataBearer {
  name: "StorageTypeNotSupportedFault";
  $fault: "client";
  message?: string;
}

export namespace StorageTypeNotSupportedFault {
  export const filterSensitiveLog = (obj: StorageTypeNotSupportedFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>CreateDBSubnetGroup</a>.</p>
 */
export interface CreateDBSubnetGroupMessage {
  /**
   * <p>The name for the subnet group. This value is stored as a lowercase string.</p>
   *         <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores,
   *             spaces, or hyphens. Must not be default.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the subnet group.</p>
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * <p>The Amazon EC2 subnet IDs for the subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The tags to be assigned to the subnet group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: CreateDBSubnetGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateDBSubnetGroupResult {
  /**
   * <p>Detailed information about a subnet group. </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace CreateDBSubnetGroupResult {
  export const filterSensitiveLog = (obj: CreateDBSubnetGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> is already being used by an existing subnet group. </p>
 */
export interface DBSubnetGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBSubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupAlreadyExistsFault {
  export const filterSensitiveLog = (obj: DBSubnetGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would cause you to exceed the allowed number of subnet groups.</p>
 */
export interface DBSubnetGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBSubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupQuotaExceededFault {
  export const filterSensitiveLog = (obj: DBSubnetGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would cause you to exceed the allowed number of subnets in a subnet
 *             group.</p>
 */
export interface DBSubnetQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "DBSubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetQuotaExceededFault {
  export const filterSensitiveLog = (obj: DBSubnetQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DeleteDBCluster</a>.</p>
 */
export interface DeleteDBClusterMessage {
  /**
   * <p>The cluster identifier for the cluster to be deleted. This parameter isn't case
   *             sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match an existing <code>DBClusterIdentifier</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p> Determines whether a final cluster snapshot is created before the cluster is
   *             deleted. If <code>true</code> is specified, no cluster snapshot is created. If
   *                 <code>false</code> is specified, a cluster snapshot is created before the DB
   *             cluster is deleted. </p>
   *         <note>
   *             <p>If <code>SkipFinalSnapshot</code> is <code>false</code>, you must specify a
   *                     <code>FinalDBSnapshotIdentifier</code> parameter.</p>
   *         </note>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  SkipFinalSnapshot?: boolean;

  /**
   * <p> The cluster snapshot identifier of the new cluster snapshot created when
   *                 <code>SkipFinalSnapshot</code> is set to <code>false</code>. </p>
   *         <note>
   *             <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code>
   *                 parameter to <code>true</code> results in an error. </p>
   *         </note>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be from 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  FinalDBSnapshotIdentifier?: string;
}

export namespace DeleteDBClusterMessage {
  export const filterSensitiveLog = (obj: DeleteDBClusterMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace DeleteDBClusterResult {
  export const filterSensitiveLog = (obj: DeleteDBClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DeleteDBClusterParameterGroup</a>.</p>
 */
export interface DeleteDBClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the name of an existing cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>You can't delete a default cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot be associated with any clusters.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;
}

export namespace DeleteDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: DeleteDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The parameter group is in use, or it is in a state that is not valid. If you are
 *             trying to delete the parameter group, you can't delete it when the parameter group
 *             is in this state.</p>
 */
export interface InvalidDBParameterGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBParameterGroupStateFault {
  export const filterSensitiveLog = (obj: InvalidDBParameterGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DeleteDBClusterSnapshot</a>.</p>
 */
export interface DeleteDBClusterSnapshotMessage {
  /**
   * <p>The identifier of the cluster snapshot to delete.</p>
   *         <p>Constraints: Must be the name of an existing cluster snapshot in the
   *                 <code>available</code> state.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: DeleteDBClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBClusterSnapshotResult {
  /**
   * <p>Detailed information about a cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace DeleteDBClusterSnapshotResult {
  export const filterSensitiveLog = (obj: DeleteDBClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> is already being used by an existing snapshot. </p>
 */
export interface DBSnapshotAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "DBSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSnapshotAlreadyExistsFault {
  export const filterSensitiveLog = (obj: DBSnapshotAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DeleteDBInstance</a>.</p>
 */
export interface DeleteDBInstanceMessage {
  /**
   * <p>The instance identifier for the instance to be deleted. This parameter isn't
   *             case sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the name of an existing instance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace DeleteDBInstanceMessage {
  export const filterSensitiveLog = (obj: DeleteDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface DeleteDBInstanceResult {
  /**
   * <p>Detailed information about an instance. </p>
   */
  DBInstance?: DBInstance;
}

export namespace DeleteDBInstanceResult {
  export const filterSensitiveLog = (obj: DeleteDBInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DeleteDBSubnetGroup</a>.</p>
 */
export interface DeleteDBSubnetGroupMessage {
  /**
   * <p>The name of the database subnet group to delete.</p>
   *         <note>
   *             <p>You can't delete the default subnet group.</p>
   *         </note>
   *         <p>Constraints:</p>
   *         <p>Must match the name of an existing <code>DBSubnetGroup</code>. Must not be
   *             default.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName: string | undefined;
}

export namespace DeleteDBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: DeleteDBSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p> The subnet isn't in the <i>available</i> state. </p>
 */
export interface InvalidDBSubnetStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBSubnetStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetStateFault {
  export const filterSensitiveLog = (obj: InvalidDBSubnetStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>A certificate authority (CA) certificate for an AWS account.</p>
 */
export interface Certificate {
  /**
   * <p>The unique key that identifies a certificate.</p>
   *          <p>Example: <code>rds-ca-2019</code>
   *          </p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>The type of the certificate.</p>
   *          <p>Example: <code>CA</code>
   *          </p>
   */
  CertificateType?: string;

  /**
   * <p>The thumbprint of the certificate.</p>
   */
  Thumbprint?: string;

  /**
   * <p>The starting date-time from which the certificate is valid.</p>
   *          <p>Example: <code>2019-07-31T17:57:09Z</code>
   *          </p>
   */
  ValidFrom?: Date;

  /**
   * <p>The date-time after which the certificate is no longer valid.</p>
   *          <p>Example: <code>2024-07-31T17:57:09Z</code>
   *          </p>
   */
  ValidTill?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   *          <p>Example: <code>arn:aws:rds:us-east-1::cert:rds-ca-2019</code>
   *          </p>
   */
  CertificateArn?: string;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

export interface CertificateMessage {
  /**
   * <p>A list of certificates for this AWS account.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>An optional pagination token provided if the number of records retrieved is greater than
   *          <code>MaxRecords</code>.  If this parameter is specified, the marker specifies the next record
   *          in the list. Including the value of <code>Marker</code> in the next call to
   *          <code>DescribeCertificates</code> results in the next page of certificates.</p>
   */
  Marker?: string;
}

export namespace CertificateMessage {
  export const filterSensitiveLog = (obj: CertificateMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an existing certificate. </p>
 */
export interface CertificateNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "CertificateNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CertificateNotFoundFault {
  export const filterSensitiveLog = (obj: CertificateNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>A named set of filter values, used to return a more specific list of results. You can
 *             use a filter to match a set of resources by specific criteria, such as IDs.</p>
 *         <p>Wildcards are not supported in filters.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case sensitive.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more filter values. Filter values are case sensitive.</p>
   */
  Values: string[] | undefined;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface DescribeCertificatesMessage {
  /**
   * <p>The user-supplied certificate identifier. If this parameter is specified, information
   *             for only the specified certificate is returned. If this parameter is omitted, a list of
   *             up to <code>MaxRecords</code> certificates is returned. This parameter is not case
   *             sensitive.</p>
   *          <p>Constraints</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing <code>CertificateIdentifier</code>.</p>
   *             </li>
   *          </ul>
   */
  CertificateIdentifier?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records
   *          exist than the specified <code>MaxRecords</code> value, a pagination token
   *          called a marker is included in the response so that the remaining results can
   *          be retrieved.</p>
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
   * <p>An optional pagination token provided by a previous <code>DescribeCertificates</code> request.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeCertificatesMessage {
  export const filterSensitiveLog = (obj: DescribeCertificatesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DBClusterParameterGroups</a>.</p>
 */
export interface DBClusterParameterGroupsMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of cluster parameter groups.</p>
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[];
}

export namespace DBClusterParameterGroupsMessage {
  export const filterSensitiveLog = (obj: DBClusterParameterGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeDBClusterParameterGroups</a>.</p>
 */
export interface DescribeDBClusterParameterGroupsMessage {
  /**
   * <p>The name of a specific cluster parameter group to return details for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If provided, must match the name of an existing
   *                         <code>DBClusterParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBClusterParameterGroupsMessage {
  export const filterSensitiveLog = (obj: DescribeDBClusterParameterGroupsMessage): any => ({
    ...obj,
  });
}

export type ApplyMethod = "immediate" | "pending-reboot";

/**
 * <p>Detailed information about an individual parameter.</p>
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
   * <p>Specifies the engine-specific parameters type.</p>
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
   * <p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can
   *             be modified. Some parameters have security or operational implications that prevent them
   *             from being changed. </p>
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
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DBClusterParameterGroup</a>.</p>
 */
export interface DBClusterParameterGroupDetails {
  /**
   * <p>Provides a list of parameters for the cluster parameter group.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBClusterParameterGroupDetails {
  export const filterSensitiveLog = (obj: DBClusterParameterGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeDBClusterParameters</a>.</p>
 */
export interface DescribeDBClusterParametersMessage {
  /**
   * <p>The name of a specific cluster parameter group to return parameter details
   *             for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If provided, must match the name of an existing
   *                         <code>DBClusterParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p> A value that indicates to return only parameters for a specific source. Parameter
   *             sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.
   *         </p>
   */
  Source?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBClusterParametersMessage {
  export const filterSensitiveLog = (obj: DescribeDBClusterParametersMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribeDBClusters</a>.</p>
 */
export interface DBClusterMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of clusters.</p>
   */
  DBClusters?: DBCluster[];
}

export namespace DBClusterMessage {
  export const filterSensitiveLog = (obj: DBClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeDBClusters</a>.</p>
 */
export interface DescribeDBClustersMessage {
  /**
   * <p>The user-provided cluster identifier. If this parameter is specified, information
   *             from only the specific cluster is returned. This parameter isn't case
   *             sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If provided, must match an existing <code>DBClusterIdentifier</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A filter that specifies one or more clusters to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>db-cluster-id</code> - Accepts cluster identifiers and cluster
   *                     Amazon Resource Names (ARNs). The results list only includes information about
   *                     the clusters identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBClustersMessage {
  export const filterSensitiveLog = (obj: DescribeDBClustersMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>.</p>
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  /**
   * <p>The identifier for the cluster snapshot to describe the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBClusterSnapshotAttributesMessage {
  export const filterSensitiveLog = (obj: DescribeDBClusterSnapshotAttributesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the name and values of a manual cluster snapshot attribute.</p>
 *         <p>Manual cluster snapshot attributes are used to authorize other AWS accounts to
 *             restore a manual cluster snapshot.</p>
 */
export interface DBClusterSnapshotAttribute {
  /**
   * <p>The name of the manual cluster snapshot attribute.</p>
   *         <p>The attribute named <code>restore</code> refers to the list of AWS accounts that have
   *             permission to copy or restore the manual cluster snapshot.</p>
   */
  AttributeName?: string;

  /**
   * <p>The values for the manual cluster snapshot attribute.</p>
   *         <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this
   *             element returns a list of IDs of the AWS accounts that are authorized to copy or restore
   *             the manual cluster snapshot. If a value of <code>all</code> is in the list, then the
   *             manual cluster snapshot is public and available for any AWS account to copy or
   *             restore.</p>
   */
  AttributeValues?: string[];
}

export namespace DBClusterSnapshotAttribute {
  export const filterSensitiveLog = (obj: DBClusterSnapshotAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about the attributes that are associated with a cluster
 *             snapshot.</p>
 */
export interface DBClusterSnapshotAttributesResult {
  /**
   * <p>The identifier of the cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>The list of attributes and values for the cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[];
}

export namespace DBClusterSnapshotAttributesResult {
  export const filterSensitiveLog = (obj: DBClusterSnapshotAttributesResult): any => ({
    ...obj,
  });
}

export interface DescribeDBClusterSnapshotAttributesResult {
  /**
   * <p>Detailed information about the attributes that are associated with a cluster
   *             snapshot.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace DescribeDBClusterSnapshotAttributesResult {
  export const filterSensitiveLog = (obj: DescribeDBClusterSnapshotAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribeDBClusterSnapshots</a>.</p>
 */
export interface DBClusterSnapshotMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Provides a list of cluster snapshots.</p>
   */
  DBClusterSnapshots?: DBClusterSnapshot[];
}

export namespace DBClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: DBClusterSnapshotMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeDBClusterSnapshots</a>.</p>
 */
export interface DescribeDBClusterSnapshotsMessage {
  /**
   * <p>The ID of the cluster to retrieve the list of cluster snapshots for. This
   *             parameter can't be used with the <code>DBClusterSnapshotIdentifier</code> parameter.
   *             This parameter is not case sensitive. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If provided, must match the identifier of an existing
   *                     <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A specific cluster snapshot identifier to describe. This parameter can't be used
   *             with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase
   *             string. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If provided, must match the identifier of an existing
   *                         <code>DBClusterSnapshot</code>.</p>
   *             </li>
   *             <li>
   *                 <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code>
   *                     parameter must also be specified.</p>
   *             </li>
   *          </ul>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>The type of cluster snapshots to be returned. You can specify one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>automated</code> - Return all cluster snapshots that Amazon DocumentDB has
   *                     automatically created for your AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>manual</code> - Return all cluster snapshots that you have manually
   *                     created for your AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>shared</code> - Return all manual cluster snapshots that have been
   *                     shared to your AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>public</code> - Return all cluster snapshots that have been marked as
   *                     public.</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual
   *             cluster snapshots are returned. You can include shared cluster snapshots with
   *             these results by setting the <code>IncludeShared</code> parameter to <code>true</code>.
   *             You can include public cluster snapshots with these results by setting the
   *                 <code>IncludePublic</code> parameter to <code>true</code>.</p>
   *         <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply
   *             for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>.
   *             The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is
   *             set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when
   *                 <code>SnapshotType</code> is set to <code>public</code>.</p>
   */
  SnapshotType?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Set to <code>true</code> to include shared manual cluster snapshots from other AWS
   *             accounts that this AWS account has been given permission to copy or restore, and
   *             otherwise <code>false</code>. The default is <code>false</code>.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>Set to <code>true</code> to include manual cluster snapshots that are public and
   *             can be copied or restored by any AWS account, and otherwise <code>false</code>. The
   *             default is <code>false</code>.</p>
   */
  IncludePublic?: boolean;
}

export namespace DescribeDBClusterSnapshotsMessage {
  export const filterSensitiveLog = (obj: DescribeDBClusterSnapshotsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The version of the database engine that an instance can be upgraded to.</p>
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
   * <p>The version of the database engine that an instance can be upgraded to.</p>
   */
  Description?: string;

  /**
   * <p>A value that indicates whether the target version is applied to any source DB
   *             instances that have <code>AutoMinorVersionUpgrade</code> set to
   *             <code>true</code>.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * <p>A value that indicates whether a database engine is upgraded to a major
   *             version.</p>
   */
  IsMajorVersionUpgrade?: boolean;
}

export namespace UpgradeTarget {
  export const filterSensitiveLog = (obj: UpgradeTarget): any => ({
    ...obj,
  });
}

/**
 * <p> Detailed information about an engine version. </p>
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
   * <p>The name of the parameter group family for the database engine.</p>
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
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: UpgradeTarget[];

  /**
   * <p>The types of logs that the database engine has available for export to Amazon
   *             CloudWatch Logs.</p>
   */
  ExportableLogTypes?: string[];

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types
   *             specified by <code>ExportableLogTypes</code> to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;
}

export namespace DBEngineVersion {
  export const filterSensitiveLog = (obj: DBEngineVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribeDBEngineVersions</a>.</p>
 */
export interface DBEngineVersionMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Detailed information about one or more engine versions.</p>
   */
  DBEngineVersions?: DBEngineVersion[];
}

export namespace DBEngineVersionMessage {
  export const filterSensitiveLog = (obj: DBEngineVersionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeDBEngineVersions</a>.</p>
 */
export interface DescribeDBEngineVersionsMessage {
  /**
   * <p>The database engine to return.</p>
   */
  Engine?: string;

  /**
   * <p>The database engine version to return.</p>
   *         <p>Example: <code>3.6.0</code>
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of a specific parameter group family to return details for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If provided, must match an existing
   *                     <code>DBParameterGroupFamily</code>.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Indicates that only the default version of the specified engine or engine and major
   *             version combination is returned.</p>
   */
  DefaultOnly?: boolean;

  /**
   * <p>If this parameter is specified and the requested engine supports the
   *                 <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the
   *             response includes a list of supported character sets for each engine version. </p>
   */
  ListSupportedCharacterSets?: boolean;

  /**
   * <p>If this parameter is specified and the requested engine supports the
   *                 <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response
   *             includes a list of supported time zones for each engine version. </p>
   */
  ListSupportedTimezones?: boolean;
}

export namespace DescribeDBEngineVersionsMessage {
  export const filterSensitiveLog = (obj: DescribeDBEngineVersionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribeDBInstances</a>.</p>
 */
export interface DBInstanceMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Detailed information about one or more instances. </p>
   */
  DBInstances?: DBInstance[];
}

export namespace DBInstanceMessage {
  export const filterSensitiveLog = (obj: DBInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeDBInstances</a>.</p>
 */
export interface DescribeDBInstancesMessage {
  /**
   * <p>The user-provided instance identifier. If this parameter is specified, information
   *             from only the specific instance is returned. This parameter isn't case
   *             sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If provided, must match the identifier of an existing
   *                     <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>A filter that specifies one or more instances to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>db-cluster-id</code> - Accepts cluster identifiers and cluster
   *                     Amazon Resource Names (ARNs). The results list includes only the information
   *                     about the instances that are associated with the clusters that are
   *                     identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>db-instance-id</code> - Accepts instance identifiers and instance
   *                     ARNs. The results list includes only the information about the instances that
   *                     are identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBInstancesMessage {
  export const filterSensitiveLog = (obj: DescribeDBInstancesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribeDBSubnetGroups</a>.</p>
 */
export interface DBSubnetGroupMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Detailed information about one or more subnet groups.</p>
   */
  DBSubnetGroups?: DBSubnetGroup[];
}

export namespace DBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: DBSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeDBSubnetGroups</a>.</p>
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * <p>The name of the subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeDBSubnetGroupsMessage {
  export const filterSensitiveLog = (obj: DescribeDBSubnetGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeEngineDefaultClusterParameters</a>.</p>
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * <p>The name of the cluster parameter group family to return the engine parameter
   *             information for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeEngineDefaultClusterParametersMessage {
  export const filterSensitiveLog = (obj: DescribeEngineDefaultClusterParametersMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the
 *                 <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
 */
export interface EngineDefaults {
  /**
   * <p>The name of the cluster parameter group family to return the engine parameter
   *             information for.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The parameters of a particular cluster parameter group family.</p>
   */
  Parameters?: Parameter[];
}

export namespace EngineDefaults {
  export const filterSensitiveLog = (obj: EngineDefaults): any => ({
    ...obj,
  });
}

export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * <p>Contains the result of a successful invocation of the
   *                 <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultClusterParametersResult {
  export const filterSensitiveLog = (obj: DescribeEngineDefaultClusterParametersResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeEventCategories</a>.</p>
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>The type of source that is generating the events.</p>
   *         <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>,
   *                 <code>db-security-group</code>, <code>db-snapshot</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];
}

export namespace DescribeEventCategoriesMessage {
  export const filterSensitiveLog = (obj: DescribeEventCategoriesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>An event source type, accompanied by one or more event category names.</p>
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type that the returned categories belong to.</p>
   */
  SourceType?: string;

  /**
   * <p>The event categories for the specified source type.</p>
   */
  EventCategories?: string[];
}

export namespace EventCategoriesMap {
  export const filterSensitiveLog = (obj: EventCategoriesMap): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribeEventCategories</a>.</p>
 */
export interface EventCategoriesMessage {
  /**
   * <p>A list of event category maps.</p>
   */
  EventCategoriesMapList?: EventCategoriesMap[];
}

export namespace EventCategoriesMessage {
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

/**
 * <p>Represents the input to <a>DescribeEvents</a>.</p>
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified,
   *             then all sources are included in the response.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>SourceIdentifier</code> is provided, <code>SourceType</code> must
   *                     also be provided.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is <code>DBInstance</code>, a
   *                         <code>DBInstanceIdentifier</code> must be provided.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is <code>DBSecurityGroup</code>, a
   *                         <code>DBSecurityGroupName</code> must be provided.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is <code>DBParameterGroup</code>, a
   *                         <code>DBParameterGroupName</code> must be provided.</p>
   *             </li>
   *             <li>
   *                 <p>If the source type is <code>DBSnapshot</code>, a
   *                         <code>DBSnapshotIdentifier</code> must be provided.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p> The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format. </p>
   *         <p>Example: 2009-07-08T18:00Z</p>
   */
  StartTime?: Date;

  /**
   * <p> The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format. </p>
   *         <p>Example: 2009-07-08T18:00Z</p>
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes to retrieve events for.</p>
   *         <p>Default: 60</p>
   */
  Duration?: number;

  /**
   * <p>A list of event categories that trigger notifications for an event notification
   *             subscription.</p>
   */
  EventCategories?: string[];

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeEventsMessage {
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about an event.</p>
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
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribeEvents</a>.</p>
 */
export interface EventsMessage {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Detailed information about one or more events. </p>
   */
  Events?: Event[];
}

export namespace EventsMessage {
  export const filterSensitiveLog = (obj: EventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribeOrderableDBInstanceOptions</a>.</p>
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * <p>The name of the engine to retrieve instance options for.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available
   *             offerings that match the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The instance class filter value. Specify this parameter to show only the available
   *             offerings that match the specified instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available
   *             offerings that match the specified license model.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The virtual private cloud (VPC) filter value. Specify this parameter to show only the
   *             available VPC or non-VPC offerings.</p>
   */
  Vpc?: boolean;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeOrderableDBInstanceOptionsMessage {
  export const filterSensitiveLog = (obj: DescribeOrderableDBInstanceOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The options that are available for an instance.</p>
 */
export interface OrderableDBInstanceOption {
  /**
   * <p>The engine type of an instance.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of an instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The instance class for an instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model for an instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>A list of Availability Zones for an instance.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>Indicates whether an instance is in a virtual private cloud (VPC).</p>
   */
  Vpc?: boolean;
}

export namespace OrderableDBInstanceOption {
  export const filterSensitiveLog = (obj: OrderableDBInstanceOption): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.</p>
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * <p>The options that are available for a particular orderable instance.</p>
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace OrderableDBInstanceOptionsMessage {
  export const filterSensitiveLog = (obj: OrderableDBInstanceOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>DescribePendingMaintenanceActions</a>.</p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>A filter that specifies one or more resources to return pending maintenance actions
   *             for.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>db-cluster-id</code> - Accepts cluster identifiers and cluster
   *                     Amazon Resource Names (ARNs). The results list includes only pending maintenance
   *                     actions for the clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>db-instance-id</code> - Accepts instance identifiers and instance
   *                     ARNs. The results list includes only pending maintenance actions for the DB
   *                     instances identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token (marker) is included
   *          in the response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribePendingMaintenanceActionsMessage {
  export const filterSensitiveLog = (obj: DescribePendingMaintenanceActionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>DescribePendingMaintenanceActions</a>.</p>
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * <p>The maintenance actions to be applied.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace PendingMaintenanceActionsMessage {
  export const filterSensitiveLog = (obj: PendingMaintenanceActionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>FailoverDBCluster</a>.</p>
 */
export interface FailoverDBClusterMessage {
  /**
   * <p>A cluster identifier to force a failover for. This parameter is not case
   *             sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The name of the instance to promote to the primary instance.</p>
   *         <p>You must specify the instance identifier for an Amazon DocumentDB replica in the cluster. For
   *             example, <code>mydbcluster-replica1</code>.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

export namespace FailoverDBClusterMessage {
  export const filterSensitiveLog = (obj: FailoverDBClusterMessage): any => ({
    ...obj,
  });
}

export interface FailoverDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace FailoverDBClusterResult {
  export const filterSensitiveLog = (obj: FailoverDBClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>ListTagsForResource</a>.</p>
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name
   *             (ARN).</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];
}

export namespace ListTagsForResourceMessage {
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of <a>ListTagsForResource</a>.</p>
 */
export interface TagListMessage {
  /**
   * <p>A list of one or more tags.</p>
   */
  TagList?: Tag[];
}

export namespace TagListMessage {
  export const filterSensitiveLog = (obj: TagListMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the security group doesn't allow deletion.</p>
 */
export interface InvalidDBSecurityGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBSecurityGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSecurityGroupStateFault {
  export const filterSensitiveLog = (obj: InvalidDBSecurityGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration setting for the log types to be enabled for export to Amazon
 *             CloudWatch Logs for a specific instance or cluster.</p>
 *         <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine
 *             which logs are exported (or not exported) to CloudWatch Logs. The values within these
 *             arrays depend on the engine that is being used.</p>
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
  export const filterSensitiveLog = (obj: CloudwatchLogsExportConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>ModifyDBCluster</a>.</p>
 */
export interface ModifyDBClusterMessage {
  /**
   * <p>The cluster identifier for the cluster that is being modified. This parameter is
   *             not case sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster identifier for the cluster when renaming a cluster. This
   *             value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster2</code>
   *         </p>
   */
  NewDBClusterIdentifier?: string;

  /**
   * <p>A value that specifies whether the changes in this request and any pending changes are
   *             asynchronously applied as soon as possible, regardless of the
   *                 <code>PreferredMaintenanceWindow</code> setting for the cluster. If this
   *             parameter is set to <code>false</code>, changes to the cluster are applied during the
   *             next maintenance window.</p>
   *         <p>The <code>ApplyImmediately</code> parameter affects only the
   *                 <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If
   *             you set this parameter value to <code>false</code>, the changes to the
   *                 <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are
   *             applied during the next maintenance window. All other changes are applied immediately,
   *             regardless of the value of the <code>ApplyImmediately</code> parameter.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a
   *             minimum value of 1.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be a value from 1 to 35.</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The name of the cluster parameter group to use for the cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of virtual private cloud (VPC) security groups that the cluster will belong
   *             to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The port number on which the cluster accepts connections.</p>
   *         <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p>
   *         <p>Default: The same port as the original cluster.</p>
   */
  Port?: number;

  /**
   * <p>The password for the master database user. This password can contain any printable
   *             ASCII character except forward slash (/), double quote ("), or the "at" symbol
   *             (@).</p>
   *         <p>Constraints: Must contain from 8 to 100 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The daily time range during which automated backups are created if automated backups
   *             are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p>
   *         <p>The default is a 30-minute window selected at random from an 8-hour block of time for
   *             each AWS Region. </p>
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
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *             Coordinated Time (UTC).</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an 8-hour block of time for
   *             each AWS Region, occurring on a random day of the week. </p>
   *         <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The configuration setting for the log types to be enabled for export to Amazon
   *             CloudWatch Logs for a specific instance or cluster. The
   *                 <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which
   *             logs are exported (or not exported) to CloudWatch Logs.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>The version number of the database engine to which you want to upgrade. Changing this
   *             parameter results in an outage. The change is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is set to <code>true</code>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;
}

export namespace ModifyDBClusterMessage {
  export const filterSensitiveLog = (obj: ModifyDBClusterMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace ModifyDBClusterResult {
  export const filterSensitiveLog = (obj: ModifyDBClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the name of a cluster parameter group.</p>
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * <p>The name of a cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be from 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This value is stored as a lowercase string.</p>
   *         </note>
   */
  DBClusterParameterGroupName?: string;
}

export namespace DBClusterParameterGroupNameMessage {
  export const filterSensitiveLog = (obj: DBClusterParameterGroupNameMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>ModifyDBClusterParameterGroup</a>.</p>
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the cluster parameter group to modify.</p>
   */
  Parameters: Parameter[] | undefined;
}

export namespace ModifyDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: ModifyDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>.</p>
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * <p>The identifier for the cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the cluster snapshot attribute to modify.</p>
   *         <p>To manage authorization for other AWS accounts to copy or restore a manual cluster
   *             snapshot, set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of cluster snapshot attributes to add to the attribute specified by
   *                 <code>AttributeName</code>.</p>
   *         <p>To authorize other AWS accounts to copy or restore a manual cluster snapshot, set
   *             this list to include one or more AWS account IDs. To make the manual cluster snapshot
   *             restorable by any AWS account, set it to <code>all</code>. Do not add the
   *                 <code>all</code> value for any manual cluster snapshots that contain private
   *             information that you don't want to be available to all AWS accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * <p>A list of cluster snapshot attributes to remove from the attribute specified by
   *                 <code>AttributeName</code>.</p>
   *         <p>To remove authorization for other AWS accounts to copy or restore a manual cluster
   *             snapshot, set this list to include one or more AWS account identifiers. To remove
   *             authorization for any AWS account to copy or restore the cluster snapshot, set it to
   *                 <code>all</code> . If you specify <code>all</code>, an AWS account whose account ID
   *             is explicitly added to the <code>restore</code> attribute can still copy or restore a
   *             manual cluster snapshot.</p>
   */
  ValuesToRemove?: string[];
}

export namespace ModifyDBClusterSnapshotAttributeMessage {
  export const filterSensitiveLog = (obj: ModifyDBClusterSnapshotAttributeMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * <p>Detailed information about the attributes that are associated with a cluster
   *             snapshot.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace ModifyDBClusterSnapshotAttributeResult {
  export const filterSensitiveLog = (obj: ModifyDBClusterSnapshotAttributeResult): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB
 *             snapshot with. </p>
 */
export interface SharedSnapshotQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SharedSnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SharedSnapshotQuotaExceededFault {
  export const filterSensitiveLog = (obj: SharedSnapshotQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The upgrade failed because a resource that the depends on can't be
 *             modified.</p>
 */
export interface DBUpgradeDependencyFailureFault extends __SmithyException, $MetadataBearer {
  name: "DBUpgradeDependencyFailureFault";
  $fault: "client";
  message?: string;
}

export namespace DBUpgradeDependencyFailureFault {
  export const filterSensitiveLog = (obj: DBUpgradeDependencyFailureFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>ModifyDBInstance</a>.</p>
 */
export interface ModifyDBInstanceMessage {
  /**
   * <p>The instance identifier. This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The new compute and memory capacity of the instance; for example,
   *                 <code>db.r5.large</code>. Not all instance classes are available in all AWS
   *             Regions. </p>
   *         <p>If you modify the instance class, an outage occurs during the change. The change is
   *             applied during the next maintenance window, unless <code>ApplyImmediately</code> is
   *             specified as <code>true</code> for this request. </p>
   *         <p>Default: Uses existing setting.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Specifies whether the modifications in this request and any pending modifications are
   *             asynchronously applied as soon as possible, regardless of the
   *                 <code>PreferredMaintenanceWindow</code> setting for the instance. </p>
   *         <p> If this parameter is set to <code>false</code>, changes to the instance are
   *             applied during the next maintenance window. Some parameter changes can cause an outage
   *             and are applied on the next reboot.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *             result in an outage. Changing this parameter doesn't result in an outage except in the
   *             following situation, and the change is asynchronously applied as soon as possible. If
   *             there are pending actions that cause a reboot, and the maintenance window is changed to
   *             include the current time, changing this parameter causes a reboot of the instance. If
   *             you are moving this window to the current time, there must be at least 30 minutes
   *             between the current time and end of the window to ensure that pending changes are
   *             applied.</p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *         <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *         <p>Constraints: Must be at least 30 minutes.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Indicates that minor version upgrades are applied automatically to the instance
   *             during the maintenance window. Changing this parameter doesn't result in an outage
   *             except in the following case, and the change is asynchronously applied as soon as
   *             possible. An outage results if this parameter is set to <code>true</code> during the
   *             maintenance window, and a newer minor version is available, and Amazon DocumentDB has enabled
   *             automatic patching for that engine version. </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p> The new instance identifier for the instance when renaming an instance. When
   *             you change the instance identifier, an instance reboot occurs immediately if you set
   *                 <code>Apply Immediately</code> to <code>true</code>. It occurs during the next
   *             maintenance window if you set <code>Apply Immediately</code> to <code>false</code>. This
   *             value is stored as a lowercase string. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>mydbinstance</code>
   *         </p>
   */
  NewDBInstanceIdentifier?: string;

  /**
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   *         <p>Default: 1</p>
   *         <p>Valid values: 0-15</p>
   */
  PromotionTier?: number;
}

export namespace ModifyDBInstanceMessage {
  export const filterSensitiveLog = (obj: ModifyDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBInstanceResult {
  /**
   * <p>Detailed information about an instance. </p>
   */
  DBInstance?: DBInstance;
}

export namespace ModifyDBInstanceResult {
  export const filterSensitiveLog = (obj: ModifyDBInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>ModifyDBSubnetGroup</a>.</p>
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * <p>The name for the subnet group. This value is stored as a lowercase string. You
   *             can't modify the default subnet group. </p>
   *         <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not
   *             be default.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The Amazon EC2 subnet IDs for the subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace ModifyDBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBSubnetGroupResult {
  /**
   * <p>Detailed information about a subnet group. </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace ModifyDBSubnetGroupResult {
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>The subnet is already in use in the Availability Zone.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetAlreadyInUse {
  export const filterSensitiveLog = (obj: SubnetAlreadyInUse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>RebootDBInstance</a>.</p>
 */
export interface RebootDBInstanceMessage {
  /**
   * <p>The instance identifier. This parameter is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p> When <code>true</code>, the reboot is conducted through a Multi-AZ failover. </p>
   *         <p>Constraint: You can't specify <code>true</code> if the instance is not configured for
   *             Multi-AZ.</p>
   */
  ForceFailover?: boolean;
}

export namespace RebootDBInstanceMessage {
  export const filterSensitiveLog = (obj: RebootDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface RebootDBInstanceResult {
  /**
   * <p>Detailed information about an instance. </p>
   */
  DBInstance?: DBInstance;
}

export namespace RebootDBInstanceResult {
  export const filterSensitiveLog = (obj: RebootDBInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>RemoveTagsFromResource</a>.</p>
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon DocumentDB resource that the tags are removed from. This value is an Amazon Resource
   *             Name (ARN).</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceMessage {
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>ResetDBClusterParameterGroup</a>.</p>
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A value that is set to <code>true</code> to reset all parameters in the cluster
   *             parameter group to their default values, and <code>false</code> otherwise. You can't use
   *             this parameter if there is a list of parameter names specified for the
   *                 <code>Parameters</code> parameter.</p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>A list of parameter names in the cluster parameter group to reset to the default
   *             values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is
   *             set to <code>true</code>.</p>
   */
  Parameters?: Parameter[];
}

export namespace ResetDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: ResetDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster doesn't have enough capacity for the current operation.</p>
 */
export interface InsufficientDBClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientDBClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBClusterCapacityFault {
  export const filterSensitiveLog = (obj: InsufficientDBClusterCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the snapshot doesn't allow deletion.</p>
 */
export interface InvalidDBSnapshotStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSnapshotStateFault {
  export const filterSensitiveLog = (obj: InvalidDBSnapshotStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB
 *             instance.</p>
 */
export interface InvalidRestoreFault extends __SmithyException, $MetadataBearer {
  name: "InvalidRestoreFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreFault {
  export const filterSensitiveLog = (obj: InvalidRestoreFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>RestoreDBClusterFromSnapshot</a>.</p>
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the restored DB
   *             cluster can be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The name of the cluster to create from the snapshot or cluster snapshot. This
   *             parameter isn't case sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-snapshot-id</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier for the snapshot or cluster snapshot to restore from.</p>
   *         <p>You can use either the name or the Amazon Resource Name (ARN) to specify a cluster
   *             snapshot. However, you can use only the ARN to specify a snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing snapshot.</p>
   *             </li>
   *          </ul>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The database engine to use for the new cluster.</p>
   *         <p>Default: The same as source.</p>
   *         <p>Constraint: Must be compatible with the engine of the source.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the new cluster accepts connections.</p>
   *         <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>.</p>
   *         <p>Default: The same port as the original cluster.</p>
   */
  Port?: number;

  /**
   * <p>The name of the subnet group to use for the new cluster.</p>
   *         <p>Constraints: If provided, must match the name of an existing
   *                 <code>DBSubnetGroup</code>.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A list of virtual private cloud (VPC) security groups that the new cluster will
   *             belong to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The tags to be assigned to the restored cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted cluster from a DB
   *             snapshot or cluster snapshot.</p>
   *         <p>The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS
   *             encryption key. If you are restoring a cluster with the same AWS account that owns
   *             the AWS KMS encryption key used to encrypt the new cluster, then you can use the AWS
   *             KMS key alias instead of the ARN for the AWS KMS encryption key.</p>
   *         <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the snapshot or cluster snapshot in <code>SnapshotIdentifier</code>
   *                     is encrypted, then the restored cluster is encrypted using the AWS KMS key
   *                     that was used to encrypt the snapshot or the cluster snapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If the snapshot or the cluster snapshot in
   *                         <code>SnapshotIdentifier</code> is not encrypted, then the restored DB
   *                     cluster is not encrypted.</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of log types that must be enabled for exporting to Amazon CloudWatch
   *             Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;
}

export namespace RestoreDBClusterFromSnapshotMessage {
  export const filterSensitiveLog = (obj: RestoreDBClusterFromSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterFromSnapshotResult {
  /**
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromSnapshotResult {
  export const filterSensitiveLog = (obj: RestoreDBClusterFromSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input to <a>RestoreDBClusterToPointInTime</a>.</p>
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * <p>The name of the new cluster to be created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the source cluster from which to restore.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * <p>The date and time to restore the cluster to.</p>
   *         <p>Valid values: A time in Universal Coordinated Time (UTC) format.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be before the latest restorable time for the instance.</p>
   *             </li>
   *             <li>
   *                 <p>Must be specified if the <code>UseLatestRestorableTime</code> parameter is not
   *                     provided.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot be specified if the <code>UseLatestRestorableTime</code> parameter is
   *                         <code>true</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot be specified if the <code>RestoreType</code> parameter is
   *                         <code>copy-on-write</code>.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>2015-03-07T23:45:00Z</code>
   *         </p>
   */
  RestoreToTime?: Date;

  /**
   * <p>A value that is set to <code>true</code> to restore the cluster to the latest
   *             restorable backup time, and <code>false</code> otherwise. </p>
   *         <p>Default: <code>false</code>
   *         </p>
   *         <p>Constraints: Cannot be specified if the <code>RestoreToTime</code> parameter is
   *             provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>The port number on which the new cluster accepts connections.</p>
   *         <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p>
   *         <p>Default: The default port for the engine.</p>
   */
  Port?: number;

  /**
   * <p>The subnet group name to use for the new cluster.</p>
   *         <p>Constraints: If provided, must match the name of an existing
   *                 <code>DBSubnetGroup</code>.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A list of VPC security groups that the new cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The tags to be assigned to the restored cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted cluster from an
   *             encrypted cluster.</p>
   *         <p>The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS
   *             encryption key. If you are restoring a cluster with the same AWS account that owns
   *             the AWS KMS encryption key used to encrypt the new cluster, then you can use the AWS
   *             KMS key alias instead of the ARN for the AWS KMS encryption key.</p>
   *         <p>You can restore to a new cluster and encrypt the new cluster with an AWS KMS key
   *             that is different from the AWS KMS key used to encrypt the source cluster. The new DB
   *             cluster is encrypted with the AWS KMS key identified by the <code>KmsKeyId</code>
   *             parameter.</p>
   *         <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the cluster is encrypted, then the restored cluster is encrypted
   *                     using the AWS KMS key that was used to encrypt the source cluster.</p>
   *             </li>
   *             <li>
   *                 <p>If the cluster is not encrypted, then the restored cluster is not
   *                     encrypted.</p>
   *             </li>
   *          </ul>
   *         <p>If <code>DBClusterIdentifier</code> refers to a cluster that is not encrypted, then
   *             the restore request is rejected.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of log types that must be enabled for exporting to Amazon CloudWatch
   *             Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;
}

export namespace RestoreDBClusterToPointInTimeMessage {
  export const filterSensitiveLog = (obj: RestoreDBClusterToPointInTimeMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterToPointInTimeResult {
  /**
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterToPointInTimeResult {
  export const filterSensitiveLog = (obj: RestoreDBClusterToPointInTimeResult): any => ({
    ...obj,
  });
}

export interface StartDBClusterMessage {
  /**
   * <p>The identifier of the cluster to restart. Example:
   *                 <code>docdb-2019-05-28-15-24-52</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StartDBClusterMessage {
  export const filterSensitiveLog = (obj: StartDBClusterMessage): any => ({
    ...obj,
  });
}

export interface StartDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace StartDBClusterResult {
  export const filterSensitiveLog = (obj: StartDBClusterResult): any => ({
    ...obj,
  });
}

export interface StopDBClusterMessage {
  /**
   * <p>The identifier of the cluster to stop. Example:
   *             <code>docdb-2019-05-28-15-24-52</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StopDBClusterMessage {
  export const filterSensitiveLog = (obj: StopDBClusterMessage): any => ({
    ...obj,
  });
}

export interface StopDBClusterResult {
  /**
   * <p>Detailed information about a cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace StopDBClusterResult {
  export const filterSensitiveLog = (obj: StopDBClusterResult): any => ({
    ...obj,
  });
}
