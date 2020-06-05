import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Represents the input to <a>AddTagsToResource</a>.</p>
 */
export interface AddTagsToResourceMessage {
  __type?: "AddTagsToResourceMessage";
  /**
   * <p>The Amazon DocumentDB resource that the tags are added to. This value is an Amazon Resource Name
   *             (ARN).</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon DocumentDB resource. </p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceMessage {
  export const filterSensitiveLog = (obj: AddTagsToResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceMessage =>
    __isa(o, "AddTagsToResourceMessage");
}

export type ApplyMethod = "immediate" | "pending-reboot";

/**
 * <p>Represents the input to <a>ApplyPendingMaintenanceAction</a>.</p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  __type?: "ApplyPendingMaintenanceActionMessage";
  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *         <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>
   *         </p>
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request or undoes an opt-in request. An
   *             opt-in request of type <code>immediate</code> can't be undone.</p>
   *         <p>Valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during the next
   *                     maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code>
   *                     opt-in requests.</p>
   *             </li>
   *          </ul>
   */
  OptInType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the pending maintenance action
   *             applies to.</p>
   */
  ResourceIdentifier: string | undefined;
}

export namespace ApplyPendingMaintenanceActionMessage {
  export const filterSensitiveLog = (
    obj: ApplyPendingMaintenanceActionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplyPendingMaintenanceActionMessage =>
    __isa(o, "ApplyPendingMaintenanceActionMessage");
}

export interface ApplyPendingMaintenanceActionResult {
  __type?: "ApplyPendingMaintenanceActionResult";
  /**
   * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

export namespace ApplyPendingMaintenanceActionResult {
  export const filterSensitiveLog = (
    obj: ApplyPendingMaintenanceActionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplyPendingMaintenanceActionResult =>
    __isa(o, "ApplyPendingMaintenanceActionResult");
}

/**
 * <p>The specified CIDR IP or Amazon EC2 security group isn't authorized for the
 *             specified DB security group.</p>
 *         <p>Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf
 *             using IAM.</p>
 */
export interface AuthorizationNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationNotFoundFault {
  export const filterSensitiveLog = (obj: AuthorizationNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationNotFoundFault =>
    __isa(o, "AuthorizationNotFoundFault");
}

/**
 * <p>Information about an Availability Zone.</p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZone =>
    __isa(o, "AvailabilityZone");
}

/**
 * <p>A certificate authority (CA) certificate for an AWS account.</p>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   *          <p>Example: <code>arn:aws:rds:us-east-1::cert:rds-ca-2019</code>
   *          </p>
   */
  CertificateArn?: string;

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
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is Certificate => __isa(o, "Certificate");
}

export interface CertificateMessage {
  __type?: "CertificateMessage";
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
    ...obj
  });
  export const isa = (o: any): o is CertificateMessage =>
    __isa(o, "CertificateMessage");
}

/**
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an existing certificate. </p>
 */
export interface CertificateNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CertificateNotFoundFault {
  export const filterSensitiveLog = (obj: CertificateNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateNotFoundFault =>
    __isa(o, "CertificateNotFoundFault");
}

/**
 * <p>The configuration setting for the log types to be enabled for export to Amazon
 *             CloudWatch Logs for a specific DB instance or DB cluster.</p>
 *         <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine
 *             which logs are exported (or not exported) to CloudWatch Logs. The values within these
 *             arrays depend on the DB engine that is being used.</p>
 */
export interface CloudwatchLogsExportConfiguration {
  __type?: "CloudwatchLogsExportConfiguration";
  /**
   * <p>The list of log types to disable.</p>
   */
  DisableLogTypes?: string[];

  /**
   * <p>The list of log types to enable.</p>
   */
  EnableLogTypes?: string[];
}

export namespace CloudwatchLogsExportConfiguration {
  export const filterSensitiveLog = (
    obj: CloudwatchLogsExportConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudwatchLogsExportConfiguration =>
    __isa(o, "CloudwatchLogsExportConfiguration");
}

/**
 * <p>Represents the input to <a>CopyDBClusterParameterGroup</a>.</p>
 */
export interface CopyDBClusterParameterGroupMessage {
  __type?: "CopyDBClusterParameterGroupMessage";
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter
   *             group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>If the source DB cluster parameter group is in the same AWS Region as the
   *                     copy, specify a valid DB parameter group identifier; for example,
   *                         <code>my-db-cluster-param-group</code>, or a valid ARN.</p>
   *             </li>
   *             <li>
   *                 <p>If the source DB parameter group is in a different AWS Region than the copy,
   *                     specify a valid DB cluster parameter group ARN; for example,
   *                         <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>The tags that are to be assigned to the parameter group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description for the copied DB cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>The identifier for the copied DB cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-param-group1</code>
   *         </p>
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;
}

export namespace CopyDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: CopyDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBClusterParameterGroupMessage =>
    __isa(o, "CopyDBClusterParameterGroupMessage");
}

export interface CopyDBClusterParameterGroupResult {
  __type?: "CopyDBClusterParameterGroupResult";
  /**
   * <p>Detailed information about a DB cluster parameter group. </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CopyDBClusterParameterGroupResult {
  export const filterSensitiveLog = (
    obj: CopyDBClusterParameterGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBClusterParameterGroupResult =>
    __isa(o, "CopyDBClusterParameterGroupResult");
}

/**
 * <p>Represents the input to <a>CopyDBClusterSnapshot</a>.</p>
 */
export interface CopyDBClusterSnapshotMessage {
  __type?: "CopyDBClusterSnapshotMessage";
  /**
   * <p>Set to <code>true</code> to copy all tags from the source DB cluster snapshot to the
   *             target DB cluster snapshot, and otherwise <code>false</code>. The default is
   *                 <code>false</code>.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The AWS KMS key ID for an encrypted DB cluster snapshot. The AWS KMS key ID is the
   *             Amazon Resource Name (ARN), AWS KMS key identifier, or the AWS KMS key alias for the AWS
   *             KMS encryption key. </p>
   *         <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a
   *             value for <code>KmsKeyId</code> to encrypt the copy with a new AWS KMS encryption key.
   *             If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster
   *             snapshot is encrypted with the same AWS KMS key as the source DB cluster snapshot. </p>
   *         <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account,
   *             then you must specify a value for <code>KmsKeyId</code>. </p>
   *         <p>To copy an encrypted DB cluster snapshot to another AWS Region, set
   *                 <code>KmsKeyId</code> to the AWS KMS key ID that you want to use to encrypt the copy
   *             of the DB cluster snapshot in the destination Region. AWS KMS encryption keys are
   *             specific to the AWS Region that they are created in, and you can't use encryption keys
   *             from one Region in another Region.</p>
   *         <p>If you copy an unencrypted DB cluster snapshot and specify a value for the
   *                 <code>KmsKeyId</code> parameter, an error is returned.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the
   *                 <code>CopyDBClusterSnapshot</code> API action in the AWS Region that contains the
   *             source DB cluster snapshot to copy. You must use the <code>PreSignedUrl</code> parameter
   *             when copying an encrypted DB cluster snapshot from another AWS Region.</p>
   *         <p>The presigned URL must be a valid request for the <code>CopyDBSClusterSnapshot</code>
   *             API action that can be executed in the source AWS Region that contains the encrypted DB
   *             cluster snapshot to be copied. The presigned URL request must contain the following
   *             parameter values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to
   *                     encrypt the copy of the DB cluster snapshot in the destination AWS Region. This
   *                     is the same identifier for both the <code>CopyDBClusterSnapshot</code> action
   *                     that is called in the destination AWS Region, and the action contained in the
   *                     presigned URL.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DestinationRegion</code> - The name of the AWS Region that the DB
   *                     cluster snapshot will be created in.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot
   *                     identifier for the encrypted DB cluster snapshot to be copied. This identifier
   *                     must be in the Amazon Resource Name (ARN) format for the source AWS Region. For
   *                     example, if you are copying an encrypted DB cluster snapshot from the us-west-2
   *                     AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code> looks like
   *                     the following example:
   *                         <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:my-cluster-snapshot-20161115</code>.</p>
   *             </li>
   *          </ul>
   */
  PreSignedUrl?: string;

  /**
   * <p>The identifier of the DB cluster snapshot to copy. This parameter is not case
   *             sensitive.</p>
   *         <p>You can't copy an encrypted, shared DB cluster snapshot from one AWS Region to
   *             another.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid system snapshot in the "available" state.</p>
   *             </li>
   *             <li>
   *                 <p>If the source snapshot is in the same AWS Region as the copy, specify a valid
   *                     DB snapshot identifier.</p>
   *             </li>
   *             <li>
   *                 <p>If the source snapshot is in a different AWS Region than the copy, specify a
   *                     valid DB cluster snapshot ARN.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-snapshot1</code>
   *         </p>
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the DB cluster snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The identifier of the new DB cluster snapshot to create from the source DB cluster
   *             snapshot. This parameter is not case sensitive.</p>
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
   *         <p>Example: <code>my-cluster-snapshot2</code>
   *         </p>
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;
}

export namespace CopyDBClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: CopyDBClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBClusterSnapshotMessage =>
    __isa(o, "CopyDBClusterSnapshotMessage");
}

export interface CopyDBClusterSnapshotResult {
  __type?: "CopyDBClusterSnapshotResult";
  /**
   * <p>Detailed information about a DB cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CopyDBClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: CopyDBClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBClusterSnapshotResult =>
    __isa(o, "CopyDBClusterSnapshotResult");
}

/**
 * <p>Represents the input to <a>CreateDBCluster</a>.</p>
 */
export interface CreateDBClusterMessage {
  __type?: "CreateDBClusterMessage";
  /**
   * <p>A list of Amazon EC2 Availability Zones that instances in the DB cluster can be
   *             created in.</p>
   */
  AvailabilityZones?: string[];

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
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p>
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
   *         <p>Example: <code>my-cluster</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p> The name of the DB cluster parameter group to associate with this DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p>
   *         <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not
   *             be default.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A list of log types that need to be enabled for exporting to Amazon CloudWatch
   *             Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *         <p>Valid values: <code>docdb</code>
   *         </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB cluster.</p>
   *         <p>The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS
   *             encryption key. If you are creating a DB cluster using the same AWS account that owns
   *             the AWS KMS encryption key that is used to encrypt the new DB cluster, you can use the
   *             AWS KMS key alias instead of the ARN for the AWS KMS encryption key.</p>
   *         <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source,
   *                     then Amazon DocumentDB uses the encryption key that is used to encrypt the source.
   *                     Otherwise, Amazon DocumentDB uses your default encryption key. </p>
   *             </li>
   *             <li>
   *                 <p>If the <code>StorageEncrypted</code> parameter is <code>true</code> and
   *                         <code>ReplicationSourceIdentifier</code> is not specified, Amazon DocumentDB uses your
   *                     default encryption key.</p>
   *             </li>
   *          </ul>
   *         <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has
   *             a different default encryption key for each AWS Region.</p>
   *         <p>If you create a replica of an encrypted DB cluster in another AWS Region, you must set
   *                 <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region.
   *             This key is used to encrypt the replica in that AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable
   *             ASCII character except forward slash (/), double quote ("), or the "at" symbol
   *             (@).</p>
   *         <p>Constraints: Must contain from 8 to 100 characters.</p>
   */
  MasterUserPassword: string | undefined;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be from 1 to 63 letters or numbers.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername: string | undefined;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * <p>The daily time range during which automated backups are created if automated backups
   *             are enabled using the <code>BackupRetentionPeriod</code> parameter. </p>
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
   *             each AWS Region, occurring on a random day of the week.</p>
   *         <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The tags to be assigned to the DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace CreateDBClusterMessage {
  export const filterSensitiveLog = (obj: CreateDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterMessage =>
    __isa(o, "CreateDBClusterMessage");
}

/**
 * <p>Represents the input of <a>CreateDBClusterParameterGroup</a>.</p>
 */
export interface CreateDBClusterParameterGroupMessage {
  __type?: "CreateDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the name of an existing
   *                     <code>DBClusterParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This value is stored as a lowercase string.</p>
   *         </note>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The DB cluster parameter group family name.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the DB cluster parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterParameterGroupMessage =>
    __isa(o, "CreateDBClusterParameterGroupMessage");
}

export interface CreateDBClusterParameterGroupResult {
  __type?: "CreateDBClusterParameterGroupResult";
  /**
   * <p>Detailed information about a DB cluster parameter group. </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CreateDBClusterParameterGroupResult {
  export const filterSensitiveLog = (
    obj: CreateDBClusterParameterGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterParameterGroupResult =>
    __isa(o, "CreateDBClusterParameterGroupResult");
}

export interface CreateDBClusterResult {
  __type?: "CreateDBClusterResult";
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace CreateDBClusterResult {
  export const filterSensitiveLog = (obj: CreateDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterResult =>
    __isa(o, "CreateDBClusterResult");
}

/**
 * <p>Represents the input of <a>CreateDBClusterSnapshot</a>.</p>
 */
export interface CreateDBClusterSnapshotMessage {
  __type?: "CreateDBClusterSnapshotMessage";
  /**
   * <p>The identifier of the DB cluster to create a snapshot for. This parameter is not case
   *             sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase
   *             string.</p>
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
   *         <p>Example: <code>my-cluster-snapshot1</code>
   *         </p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the DB cluster snapshot.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: CreateDBClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterSnapshotMessage =>
    __isa(o, "CreateDBClusterSnapshotMessage");
}

export interface CreateDBClusterSnapshotResult {
  __type?: "CreateDBClusterSnapshotResult";
  /**
   * <p>Detailed information about a DB cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CreateDBClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: CreateDBClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterSnapshotResult =>
    __isa(o, "CreateDBClusterSnapshotResult");
}

/**
 * <p>Represents the input to <a>CreateDBInstance</a>.</p>
 */
export interface CreateDBInstanceMessage {
  __type?: "CreateDBInstanceMessage";
  /**
   * <p>Indicates that minor engine upgrades are applied automatically to the DB instance
   *             during the maintenance window.</p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p> The Amazon EC2 Availability Zone that the DB instance is created in.</p>
   *         <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS
   *             Region.</p>
   *         <p> Example: <code>us-east-1d</code>
   *         </p>
   *         <p> Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the
   *                 <code>MultiAZ</code> parameter is set to <code>true</code>. The specified
   *             Availability Zone must be in the same AWS Region as the current endpoint. </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The identifier of the DB cluster that the instance will belong to.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The compute and memory capacity of the DB instance; for example,
   *                 <code>db.r5.large</code>. </p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
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
   * <p>The name of the database engine to be used for this instance.</p>
   *         <p>Valid value: <code>docdb</code>
   *          </p>
   */
  Engine: string | undefined;

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
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   *         <p>Default: 1</p>
   *         <p>Valid values: 0-15</p>
   */
  PromotionTier?: number;

  /**
   * <p>The tags to be assigned to the DB instance. You can assign up to
   *            10 tags to an instance.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBInstanceMessage {
  export const filterSensitiveLog = (obj: CreateDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBInstanceMessage =>
    __isa(o, "CreateDBInstanceMessage");
}

export interface CreateDBInstanceResult {
  __type?: "CreateDBInstanceResult";
  /**
   * <p>Detailed information about a DB instance. </p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceResult {
  export const filterSensitiveLog = (obj: CreateDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBInstanceResult =>
    __isa(o, "CreateDBInstanceResult");
}

/**
 * <p>Represents the input to <a>CreateDBSubnetGroup</a>.</p>
 */
export interface CreateDBSubnetGroupMessage {
  __type?: "CreateDBSubnetGroupMessage";
  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.</p>
   *         <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores,
   *             spaces, or hyphens. Must not be default.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The Amazon EC2 subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The tags to be assigned to the DB subnet group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: CreateDBSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBSubnetGroupMessage =>
    __isa(o, "CreateDBSubnetGroupMessage");
}

export interface CreateDBSubnetGroupResult {
  __type?: "CreateDBSubnetGroupResult";
  /**
   * <p>Detailed information about a DB subnet group. </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace CreateDBSubnetGroupResult {
  export const filterSensitiveLog = (obj: CreateDBSubnetGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBSubnetGroupResult =>
    __isa(o, "CreateDBSubnetGroupResult");
}

/**
 * <p>Detailed information about a DB cluster. </p>
 */
export interface DBCluster {
  __type?: "DBCluster";
  /**
   * <p>Provides a list of the AWS Identity and Access Management (IAM) roles that are
   *             associated with the DB cluster. IAM roles that are associated with a DB cluster grant
   *             permission for the DB cluster to access other AWS services on your behalf.</p>
   */
  AssociatedRoles?: DBClusterRole[];

  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the DB cluster
   *             can be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *             (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that
   *             identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Provides the list of instances that make up the DB cluster.</p>
   */
  DBClusterMembers?: DBClusterMember[];

  /**
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * <p>Specifies information on the subnet group that is associated with the DB cluster,
   *             including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB cluster. This identifier is
   *             found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is
   *             accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The earliest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * <p>A list of log types that this DB cluster is configured to export to Amazon CloudWatch
   *             Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>If <code>StorageEncrypted</code> is <code>true</code>, the AWS KMS key identifier for
   *             the encrypted DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Contains the master user name for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Specifies the progress of the operation as a percentage.</p>
   */
  PercentProgress?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

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
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load
   *             balances connections across the Amazon DocumentDB replicas that are available in a DB cluster. As
   *             clients request new connections to the reader endpoint, Amazon DocumentDB distributes the
   *             connection requests among the Amazon DocumentDB replicas in the DB cluster. This functionality can
   *             help balance your read workload across multiple Amazon DocumentDB replicas in your DB cluster. </p>
   *         <p>If a failover occurs, and the Amazon DocumentDB replica that you are connected to is promoted to
   *             be the primary instance, your connection is dropped. To continue sending your read
   *             workload to other Amazon DocumentDB replicas in the cluster, you can then reconnect to the reader
   *             endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>Specifies the current state of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Provides a list of virtual private cloud (VPC) security groups that the DB cluster
   *             belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
}

export namespace DBCluster {
  export const filterSensitiveLog = (obj: DBCluster): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBCluster => __isa(o, "DBCluster");
}

/**
 * <p>You already have a DB cluster with the given identifier.</p>
 */
export interface DBClusterAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBClusterAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterAlreadyExistsFault =>
    __isa(o, "DBClusterAlreadyExistsFault");
}

/**
 * <p>Contains information about an instance that is part of a DB cluster.</p>
 */
export interface DBClusterMember {
  __type?: "DBClusterMember";
  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB
   *             cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * <p>Specifies the instance identifier for this member of the DB cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>A value that is <code>true</code> if the cluster member is the primary instance for
   *             the DB cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance. </p>
   */
  PromotionTier?: number;
}

export namespace DBClusterMember {
  export const filterSensitiveLog = (obj: DBClusterMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterMember =>
    __isa(o, "DBClusterMember");
}

/**
 * <p>Represents the output of <a>DescribeDBClusters</a>.</p>
 */
export interface DBClusterMessage {
  __type?: "DBClusterMessage";
  /**
   * <p>A list of DB clusters.</p>
   */
  DBClusters?: DBCluster[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBClusterMessage {
  export const filterSensitiveLog = (obj: DBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterMessage =>
    __isa(o, "DBClusterMessage");
}

/**
 * <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
 */
export interface DBClusterNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterNotFoundFault {
  export const filterSensitiveLog = (obj: DBClusterNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterNotFoundFault =>
    __isa(o, "DBClusterNotFoundFault");
}

/**
 * <p>Detailed information about a DB cluster parameter group. </p>
 */
export interface DBClusterParameterGroup {
  __type?: "DBClusterParameterGroup";
  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupArn?: string;

  /**
   * <p>Provides the name of the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>Provides the name of the DB parameter group family that this DB cluster parameter
   *             group is compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the customer-specified description for this DB cluster parameter
   *             group.</p>
   */
  Description?: string;
}

export namespace DBClusterParameterGroup {
  export const filterSensitiveLog = (obj: DBClusterParameterGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroup =>
    __isa(o, "DBClusterParameterGroup");
}

/**
 * <p>Represents the output of <a>DBClusterParameterGroup</a>.</p>
 */
export interface DBClusterParameterGroupDetails {
  __type?: "DBClusterParameterGroupDetails";
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Provides a list of parameters for the DB cluster parameter group.</p>
   */
  Parameters?: Parameter[];
}

export namespace DBClusterParameterGroupDetails {
  export const filterSensitiveLog = (
    obj: DBClusterParameterGroupDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroupDetails =>
    __isa(o, "DBClusterParameterGroupDetails");
}

/**
 * <p>Contains the name of a DB cluster parameter group.</p>
 */
export interface DBClusterParameterGroupNameMessage {
  __type?: "DBClusterParameterGroupNameMessage";
  /**
   * <p>The name of a DB cluster parameter group.</p>
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
  export const filterSensitiveLog = (
    obj: DBClusterParameterGroupNameMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroupNameMessage =>
    __isa(o, "DBClusterParameterGroupNameMessage");
}

/**
 * <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB cluster
 *             parameter group. </p>
 */
export interface DBClusterParameterGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterParameterGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBClusterParameterGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroupNotFoundFault =>
    __isa(o, "DBClusterParameterGroupNotFoundFault");
}

/**
 * <p>Represents the output of <a>DBClusterParameterGroups</a>.</p>
 */
export interface DBClusterParameterGroupsMessage {
  __type?: "DBClusterParameterGroupsMessage";
  /**
   * <p>A list of DB cluster parameter groups.</p>
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBClusterParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: DBClusterParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroupsMessage =>
    __isa(o, "DBClusterParameterGroupsMessage");
}

/**
 * <p>The DB cluster can't be created because you have reached the maximum allowed quota of
 *             DB clusters.</p>
 */
export interface DBClusterQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBClusterQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterQuotaExceededFault =>
    __isa(o, "DBClusterQuotaExceededFault");
}

/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a
 *             DB cluster.</p>
 */
export interface DBClusterRole {
  __type?: "DBClusterRole";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *             cluster.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The
   *                 <code>Status</code> property returns one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> - The IAM role ARN is associated with the DB cluster and
   *                     can be used to access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> - The IAM role ARN is being associated with the DB
   *                     cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>INVALID</code> - The IAM role ARN is associated with the DB cluster, but
   *                     the DB cluster cannot assume the IAM role to access other AWS services on your
   *                     behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBClusterRole {
  export const filterSensitiveLog = (obj: DBClusterRole): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterRole => __isa(o, "DBClusterRole");
}

/**
 * <p>Detailed information about a DB cluster snapshot. </p>
 */
export interface DBClusterSnapshot {
  __type?: "DBClusterSnapshot";
  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the DB cluster
   *             snapshot can be restored in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *             (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot
   *             was created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * <p>Specifies the identifier for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>Provides the version of the database engine for this DB cluster snapshot.</p>
   */
  EngineVersion?: string;

  /**
   * <p>If <code>StorageEncrypted</code> is <code>true</code>, the AWS KMS key identifier for
   *             the encrypted DB cluster snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Provides the master user name for the DB cluster snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Specifies the port that the DB cluster was listening on at the time of the
   *             snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Provides the time when the snapshot was taken, in UTC.</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Provides the type of the DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the ARN for
   *             the source DB cluster snapshot; otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;

  /**
   * <p>Specifies the status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies whether the DB cluster snapshot is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Provides the virtual private cloud (VPC) ID that is associated with the DB cluster
   *             snapshot.</p>
   */
  VpcId?: string;
}

export namespace DBClusterSnapshot {
  export const filterSensitiveLog = (obj: DBClusterSnapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshot =>
    __isa(o, "DBClusterSnapshot");
}

/**
 * <p>You already have a DB cluster snapshot with the given identifier.</p>
 */
export interface DBClusterSnapshotAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterSnapshotAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBClusterSnapshotAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotAlreadyExistsFault =>
    __isa(o, "DBClusterSnapshotAlreadyExistsFault");
}

/**
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p>
 *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to
 *             restore a manual DB cluster snapshot.</p>
 */
export interface DBClusterSnapshotAttribute {
  __type?: "DBClusterSnapshotAttribute";
  /**
   * <p>The name of the manual DB cluster snapshot attribute.</p>
   *         <p>The attribute named <code>restore</code> refers to the list of AWS accounts that have
   *             permission to copy or restore the manual DB cluster snapshot.</p>
   */
  AttributeName?: string;

  /**
   * <p>The values for the manual DB cluster snapshot attribute.</p>
   *         <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this
   *             element returns a list of IDs of the AWS accounts that are authorized to copy or restore
   *             the manual DB cluster snapshot. If a value of <code>all</code> is in the list, then the
   *             manual DB cluster snapshot is public and available for any AWS account to copy or
   *             restore.</p>
   */
  AttributeValues?: string[];
}

export namespace DBClusterSnapshotAttribute {
  export const filterSensitiveLog = (obj: DBClusterSnapshotAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotAttribute =>
    __isa(o, "DBClusterSnapshotAttribute");
}

/**
 * <p>Detailed information about the attributes that are associated with a DB cluster
 *             snapshot.</p>
 */
export interface DBClusterSnapshotAttributesResult {
  __type?: "DBClusterSnapshotAttributesResult";
  /**
   * <p>The list of attributes and values for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[];

  /**
   * <p>The identifier of the DB cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;
}

export namespace DBClusterSnapshotAttributesResult {
  export const filterSensitiveLog = (
    obj: DBClusterSnapshotAttributesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotAttributesResult =>
    __isa(o, "DBClusterSnapshotAttributesResult");
}

/**
 * <p>Represents the output of <a>DescribeDBClusterSnapshots</a>.</p>
 */
export interface DBClusterSnapshotMessage {
  __type?: "DBClusterSnapshotMessage";
  /**
   * <p>Provides a list of DB cluster snapshots.</p>
   */
  DBClusterSnapshots?: DBClusterSnapshot[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: DBClusterSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotMessage =>
    __isa(o, "DBClusterSnapshotMessage");
}

/**
 * <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster
 *             snapshot. </p>
 */
export interface DBClusterSnapshotNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterSnapshotNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBClusterSnapshotNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotNotFoundFault =>
    __isa(o, "DBClusterSnapshotNotFoundFault");
}

/**
 * <p> Detailed information about a DB engine version. </p>
 */
export interface DBEngineVersion {
  __type?: "DBEngineVersion";
  /**
   * <p>The description of the database engine.</p>
   */
  DBEngineDescription?: string;

  /**
   * <p>The description of the database engine version.</p>
   */
  DBEngineVersionDescription?: string;

  /**
   * <p>The name of the DB parameter group family for the database engine.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>The name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the database engine.</p>
   */
  EngineVersion?: string;

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

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: UpgradeTarget[];
}

export namespace DBEngineVersion {
  export const filterSensitiveLog = (obj: DBEngineVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBEngineVersion =>
    __isa(o, "DBEngineVersion");
}

/**
 * <p>Represents the output of <a>DescribeDBEngineVersions</a>.</p>
 */
export interface DBEngineVersionMessage {
  __type?: "DBEngineVersionMessage";
  /**
   * <p>Detailed information about one or more DB engine versions.</p>
   */
  DBEngineVersions?: DBEngineVersion[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBEngineVersionMessage {
  export const filterSensitiveLog = (obj: DBEngineVersionMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBEngineVersionMessage =>
    __isa(o, "DBEngineVersionMessage");
}

/**
 * <p>Detailed information about a DB instance. </p>
 */
export interface DBInstance {
  __type?: "DBInstance";
  /**
   * <p>Indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Specifies the name of the Availability Zone that the DB instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>Contains the name of the DB cluster that the DB instance is a member of if the DB
   *             instance is a member of a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Contains a user-provided database identifier. This identifier is the unique key that
   *             identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * <p>Specifies information on the subnet group that is associated with the DB instance,
   *             including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is
   *             found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is
   *             accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>A list of log types that this DB instance is configured to export to Amazon CloudWatch
   *             Logs.</p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>Provides the name of the database engine to be used for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Provides the date and time that the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p> If <code>StorageEncrypted</code> is <code>true</code>, the AWS KMS key identifier for
   *             the encrypted DB instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is included only
   *             when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p> Specifies the daily time range during which automated backups are created if
   *             automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.
   *         </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in
   *             Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   */
  PromotionTier?: number;

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
   * <p>Specifies whether or not the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
}

export namespace DBInstance {
  export const filterSensitiveLog = (obj: DBInstance): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstance => __isa(o, "DBInstance");
}

/**
 * <p>You already have a DB instance with the given identifier.</p>
 */
export interface DBInstanceAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBInstanceAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceAlreadyExistsFault =>
    __isa(o, "DBInstanceAlreadyExistsFault");
}

/**
 * <p>Represents the output of <a>DescribeDBInstances</a>.</p>
 */
export interface DBInstanceMessage {
  __type?: "DBInstanceMessage";
  /**
   * <p>Detailed information about one or more DB instances. </p>
   */
  DBInstances?: DBInstance[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBInstanceMessage {
  export const filterSensitiveLog = (obj: DBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceMessage =>
    __isa(o, "DBInstanceMessage");
}

/**
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
 */
export interface DBInstanceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceNotFoundFault {
  export const filterSensitiveLog = (obj: DBInstanceNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceNotFoundFault =>
    __isa(o, "DBInstanceNotFoundFault");
}

/**
 * <p>Provides a list of status information for a DB instance.</p>
 */
export interface DBInstanceStatusInfo {
  __type?: "DBInstanceStatusInfo";
  /**
   * <p>Details of the error if there is an error for the instance. If the instance is not in
   *             an error state, this value is blank.</p>
   */
  Message?: string;

  /**
   * <p>A Boolean value that is <code>true</code> if the instance is operating normally, or
   *                 <code>false</code> if the instance is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * <p>Status of the DB instance. For a <code>StatusType</code> of read replica, the values
   *             can be <code>replicating</code>, error, <code>stopped</code>, or
   *             <code>terminated</code>.</p>
   */
  Status?: string;

  /**
   * <p>This value is currently "<code>read replication</code>."</p>
   */
  StatusType?: string;
}

export namespace DBInstanceStatusInfo {
  export const filterSensitiveLog = (obj: DBInstanceStatusInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceStatusInfo =>
    __isa(o, "DBInstanceStatusInfo");
}

/**
 * <p>A DB parameter group with the same name already exists.</p>
 */
export interface DBParameterGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBParameterGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupAlreadyExistsFault =>
    __isa(o, "DBParameterGroupAlreadyExistsFault");
}

/**
 * <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter
 *             group. </p>
 */
export interface DBParameterGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBParameterGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupNotFoundFault =>
    __isa(o, "DBParameterGroupNotFoundFault");
}

/**
 * <p>This request would cause you to exceed the allowed number of DB parameter
 *             groups.</p>
 */
export interface DBParameterGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBParameterGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupQuotaExceededFault =>
    __isa(o, "DBParameterGroupQuotaExceededFault");
}

/**
 * <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group. </p>
 */
export interface DBSecurityGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBSecurityGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSecurityGroupNotFoundFault =>
    __isa(o, "DBSecurityGroupNotFoundFault");
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> is already being used by an existing snapshot. </p>
 */
export interface DBSnapshotAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSnapshotAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBSnapshotAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSnapshotAlreadyExistsFault =>
    __isa(o, "DBSnapshotAlreadyExistsFault");
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot. </p>
 */
export interface DBSnapshotNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSnapshotNotFoundFault {
  export const filterSensitiveLog = (obj: DBSnapshotNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSnapshotNotFoundFault =>
    __isa(o, "DBSnapshotNotFoundFault");
}

/**
 * <p>Detailed information about a DB subnet group. </p>
 */
export interface DBSubnetGroup {
  __type?: "DBSubnetGroup";
  /**
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   */
  DBSubnetGroupArn?: string;

  /**
   * <p>Provides the description of the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The name of the DB subnet group.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Provides the status of the DB subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>Detailed information about one or more subnets within a DB subnet group.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>Provides the virtual private cloud (VPC) ID of the DB subnet group.</p>
   */
  VpcId?: string;
}

export namespace DBSubnetGroup {
  export const filterSensitiveLog = (obj: DBSubnetGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroup => __isa(o, "DBSubnetGroup");
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> is already being used by an existing DB subnet group. </p>
 */
export interface DBSubnetGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBSubnetGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupAlreadyExistsFault =>
    __isa(o, "DBSubnetGroupAlreadyExistsFault");
}

/**
 * <p>Subnets in the DB subnet group should cover at least two Availability Zones unless
 *             there is only one Availability Zone.</p>
 */
export interface DBSubnetGroupDoesNotCoverEnoughAZs
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupDoesNotCoverEnoughAZs";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupDoesNotCoverEnoughAZs {
  export const filterSensitiveLog = (
    obj: DBSubnetGroupDoesNotCoverEnoughAZs
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupDoesNotCoverEnoughAZs =>
    __isa(o, "DBSubnetGroupDoesNotCoverEnoughAZs");
}

/**
 * <p>Represents the output of <a>DescribeDBSubnetGroups</a>.</p>
 */
export interface DBSubnetGroupMessage {
  __type?: "DBSubnetGroupMessage";
  /**
   * <p>Detailed information about one or more DB subnet groups.</p>
   */
  DBSubnetGroups?: DBSubnetGroup[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: DBSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupMessage =>
    __isa(o, "DBSubnetGroupMessage");
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
 */
export interface DBSubnetGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupNotFoundFault {
  export const filterSensitiveLog = (obj: DBSubnetGroupNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupNotFoundFault =>
    __isa(o, "DBSubnetGroupNotFoundFault");
}

/**
 * <p>The request would cause you to exceed the allowed number of DB subnet groups.</p>
 */
export interface DBSubnetGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBSubnetGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupQuotaExceededFault =>
    __isa(o, "DBSubnetGroupQuotaExceededFault");
}

/**
 * <p>The request would cause you to exceed the allowed number of subnets in a DB subnet
 *             group.</p>
 */
export interface DBSubnetQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetQuotaExceededFault {
  export const filterSensitiveLog = (obj: DBSubnetQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetQuotaExceededFault =>
    __isa(o, "DBSubnetQuotaExceededFault");
}

/**
 * <p>The DB upgrade failed because a resource that the DB depends on can't be
 *             modified.</p>
 */
export interface DBUpgradeDependencyFailureFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBUpgradeDependencyFailureFault";
  $fault: "client";
  message?: string;
}

export namespace DBUpgradeDependencyFailureFault {
  export const filterSensitiveLog = (
    obj: DBUpgradeDependencyFailureFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBUpgradeDependencyFailureFault =>
    __isa(o, "DBUpgradeDependencyFailureFault");
}

/**
 * <p>Represents the input to <a>DeleteDBCluster</a>.</p>
 */
export interface DeleteDBClusterMessage {
  __type?: "DeleteDBClusterMessage";
  /**
   * <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case
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
   * <p> The DB cluster snapshot identifier of the new DB cluster snapshot created when
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

  /**
   * <p> Determines whether a final DB cluster snapshot is created before the DB cluster is
   *             deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If
   *                 <code>false</code> is specified, a DB cluster snapshot is created before the DB
   *             cluster is deleted. </p>
   *         <note>
   *             <p>If <code>SkipFinalSnapshot</code> is <code>false</code>, you must specify a
   *                     <code>FinalDBSnapshotIdentifier</code> parameter.</p>
   *         </note>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  SkipFinalSnapshot?: boolean;
}

export namespace DeleteDBClusterMessage {
  export const filterSensitiveLog = (obj: DeleteDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterMessage =>
    __isa(o, "DeleteDBClusterMessage");
}

/**
 * <p>Represents the input to <a>DeleteDBClusterParameterGroup</a>.</p>
 */
export interface DeleteDBClusterParameterGroupMessage {
  __type?: "DeleteDBClusterParameterGroupMessage";
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
   *                 <p>Cannot be associated with any DB clusters.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;
}

export namespace DeleteDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterParameterGroupMessage =>
    __isa(o, "DeleteDBClusterParameterGroupMessage");
}

export interface DeleteDBClusterResult {
  __type?: "DeleteDBClusterResult";
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace DeleteDBClusterResult {
  export const filterSensitiveLog = (obj: DeleteDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterResult =>
    __isa(o, "DeleteDBClusterResult");
}

/**
 * <p>Represents the input to <a>DeleteDBClusterSnapshot</a>.</p>
 */
export interface DeleteDBClusterSnapshotMessage {
  __type?: "DeleteDBClusterSnapshotMessage";
  /**
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *         <p>Constraints: Must be the name of an existing DB cluster snapshot in the
   *                 <code>available</code> state.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: DeleteDBClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterSnapshotMessage =>
    __isa(o, "DeleteDBClusterSnapshotMessage");
}

export interface DeleteDBClusterSnapshotResult {
  __type?: "DeleteDBClusterSnapshotResult";
  /**
   * <p>Detailed information about a DB cluster snapshot. </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace DeleteDBClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: DeleteDBClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterSnapshotResult =>
    __isa(o, "DeleteDBClusterSnapshotResult");
}

/**
 * <p>Represents the input to <a>DeleteDBInstance</a>.</p>
 */
export interface DeleteDBInstanceMessage {
  __type?: "DeleteDBInstanceMessage";
  /**
   * <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't
   *             case sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the name of an existing DB instance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace DeleteDBInstanceMessage {
  export const filterSensitiveLog = (obj: DeleteDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBInstanceMessage =>
    __isa(o, "DeleteDBInstanceMessage");
}

export interface DeleteDBInstanceResult {
  __type?: "DeleteDBInstanceResult";
  /**
   * <p>Detailed information about a DB instance. </p>
   */
  DBInstance?: DBInstance;
}

export namespace DeleteDBInstanceResult {
  export const filterSensitiveLog = (obj: DeleteDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBInstanceResult =>
    __isa(o, "DeleteDBInstanceResult");
}

/**
 * <p>Represents the input to <a>DeleteDBSubnetGroup</a>.</p>
 */
export interface DeleteDBSubnetGroupMessage {
  __type?: "DeleteDBSubnetGroupMessage";
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
    ...obj
  });
  export const isa = (o: any): o is DeleteDBSubnetGroupMessage =>
    __isa(o, "DeleteDBSubnetGroupMessage");
}

export interface DescribeCertificatesMessage {
  __type?: "DescribeCertificatesMessage";
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
   * <p>An optional pagination token provided by a previous <code>DescribeCertificates</code> request.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

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
}

export namespace DescribeCertificatesMessage {
  export const filterSensitiveLog = (
    obj: DescribeCertificatesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificatesMessage =>
    __isa(o, "DescribeCertificatesMessage");
}

/**
 * <p>Represents the input to <a>DescribeDBClusterParameterGroups</a>.</p>
 */
export interface DescribeDBClusterParameterGroupsMessage {
  __type?: "DescribeDBClusterParameterGroupsMessage";
  /**
   * <p>The name of a specific DB cluster parameter group to return details for.</p>
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

export namespace DescribeDBClusterParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterParameterGroupsMessage =>
    __isa(o, "DescribeDBClusterParameterGroupsMessage");
}

/**
 * <p>Represents the input to <a>DescribeDBClusterParameters</a>.</p>
 */
export interface DescribeDBClusterParametersMessage {
  __type?: "DescribeDBClusterParametersMessage";
  /**
   * <p>The name of a specific DB cluster parameter group to return parameter details
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
   * <p>This parameter is not currently supported.</p>
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

  /**
   * <p> A value that indicates to return only parameters for a specific source. Parameter
   *             sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.
   *         </p>
   */
  Source?: string;
}

export namespace DescribeDBClusterParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterParametersMessage =>
    __isa(o, "DescribeDBClusterParametersMessage");
}

/**
 * <p>Represents the input to <a>DescribeDBClusters</a>.</p>
 */
export interface DescribeDBClustersMessage {
  __type?: "DescribeDBClustersMessage";
  /**
   * <p>The user-provided DB cluster identifier. If this parameter is specified, information
   *             from only the specific DB cluster is returned. This parameter isn't case
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
   * <p>A filter that specifies one or more DB clusters to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster
   *                     Amazon Resource Names (ARNs). The results list only includes information about
   *                     the DB clusters identified by these ARNs.</p>
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

export namespace DescribeDBClustersMessage {
  export const filterSensitiveLog = (obj: DescribeDBClustersMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClustersMessage =>
    __isa(o, "DescribeDBClustersMessage");
}

/**
 * <p>Represents the input to <a>DescribeDBClusterSnapshotAttributes</a>.</p>
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  __type?: "DescribeDBClusterSnapshotAttributesMessage";
  /**
   * <p>The identifier for the DB cluster snapshot to describe the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBClusterSnapshotAttributesMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterSnapshotAttributesMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeDBClusterSnapshotAttributesMessage =>
    __isa(o, "DescribeDBClusterSnapshotAttributesMessage");
}

export interface DescribeDBClusterSnapshotAttributesResult {
  __type?: "DescribeDBClusterSnapshotAttributesResult";
  /**
   * <p>Detailed information about the attributes that are associated with a DB cluster
   *             snapshot.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace DescribeDBClusterSnapshotAttributesResult {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterSnapshotAttributesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterSnapshotAttributesResult =>
    __isa(o, "DescribeDBClusterSnapshotAttributesResult");
}

/**
 * <p>Represents the input to <a>DescribeDBClusterSnapshots</a>.</p>
 */
export interface DescribeDBClusterSnapshotsMessage {
  __type?: "DescribeDBClusterSnapshotsMessage";
  /**
   * <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This
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
   * <p>A specific DB cluster snapshot identifier to describe. This parameter can't be used
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
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Set to <code>true</code> to include manual DB cluster snapshots that are public and
   *             can be copied or restored by any AWS account, and otherwise <code>false</code>. The
   *             default is <code>false</code>.</p>
   */
  IncludePublic?: boolean;

  /**
   * <p>Set to <code>true</code> to include shared manual DB cluster snapshots from other AWS
   *             accounts that this AWS account has been given permission to copy or restore, and
   *             otherwise <code>false</code>. The default is <code>false</code>.</p>
   */
  IncludeShared?: boolean;

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

  /**
   * <p>The type of DB cluster snapshots to be returned. You can specify one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>automated</code> - Return all DB cluster snapshots that Amazon DocumentDB has
   *                     automatically created for your AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>manual</code> - Return all DB cluster snapshots that you have manually
   *                     created for your AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>shared</code> - Return all manual DB cluster snapshots that have been
   *                     shared to your AWS account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>public</code> - Return all DB cluster snapshots that have been marked as
   *                     public.</p>
   *             </li>
   *          </ul>
   *         <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual
   *             DB cluster snapshots are returned. You can include shared DB cluster snapshots with
   *             these results by setting the <code>IncludeShared</code> parameter to <code>true</code>.
   *             You can include public DB cluster snapshots with these results by setting the
   *                 <code>IncludePublic</code> parameter to <code>true</code>.</p>
   *         <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply
   *             for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>.
   *             The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is
   *             set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when
   *                 <code>SnapshotType</code> is set to <code>public</code>.</p>
   */
  SnapshotType?: string;
}

export namespace DescribeDBClusterSnapshotsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterSnapshotsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterSnapshotsMessage =>
    __isa(o, "DescribeDBClusterSnapshotsMessage");
}

/**
 * <p>Represents the input to <a>DescribeDBEngineVersions</a>.</p>
 */
export interface DescribeDBEngineVersionsMessage {
  __type?: "DescribeDBEngineVersionsMessage";
  /**
   * <p>The name of a specific DB parameter group family to return details for.</p>
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
   * <p>Indicates that only the default version of the specified engine or engine and major
   *             version combination is returned.</p>
   */
  DefaultOnly?: boolean;

  /**
   * <p>The database engine to return.</p>
   */
  Engine?: string;

  /**
   * <p>The database engine version to return.</p>
   *         <p>Example: <code>5.1.49</code>
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

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

export namespace DescribeDBEngineVersionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBEngineVersionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBEngineVersionsMessage =>
    __isa(o, "DescribeDBEngineVersionsMessage");
}

/**
 * <p>Represents the input to <a>DescribeDBInstances</a>.</p>
 */
export interface DescribeDBInstancesMessage {
  __type?: "DescribeDBInstancesMessage";
  /**
   * <p>The user-provided instance identifier. If this parameter is specified, information
   *             from only the specific DB instance is returned. This parameter isn't case
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
   * <p>A filter that specifies one or more DB instances to describe.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster
   *                     Amazon Resource Names (ARNs). The results list includes only the information
   *                     about the DB instances that are associated with the DB clusters that are
   *                     identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance
   *                     ARNs. The results list includes only the information about the DB instances that
   *                     are identified by these ARNs.</p>
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

export namespace DescribeDBInstancesMessage {
  export const filterSensitiveLog = (obj: DescribeDBInstancesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBInstancesMessage =>
    __isa(o, "DescribeDBInstancesMessage");
}

/**
 * <p>Represents the input to <a>DescribeDBSubnetGroups</a>.</p>
 */
export interface DescribeDBSubnetGroupsMessage {
  __type?: "DescribeDBSubnetGroupsMessage";
  /**
   * <p>The name of the DB subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
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

export namespace DescribeDBSubnetGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBSubnetGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBSubnetGroupsMessage =>
    __isa(o, "DescribeDBSubnetGroupsMessage");
}

/**
 * <p>Represents the input to <a>DescribeEngineDefaultClusterParameters</a>.</p>
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  __type?: "DescribeEngineDefaultClusterParametersMessage";
  /**
   * <p>The name of the DB cluster parameter group family to return the engine parameter
   *             information for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
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

export namespace DescribeEngineDefaultClusterParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeEngineDefaultClusterParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEngineDefaultClusterParametersMessage =>
    __isa(o, "DescribeEngineDefaultClusterParametersMessage");
}

export interface DescribeEngineDefaultClusterParametersResult {
  __type?: "DescribeEngineDefaultClusterParametersResult";
  /**
   * <p>Contains the result of a successful invocation of the
   *                 <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultClusterParametersResult {
  export const filterSensitiveLog = (
    obj: DescribeEngineDefaultClusterParametersResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEngineDefaultClusterParametersResult =>
    __isa(o, "DescribeEngineDefaultClusterParametersResult");
}

/**
 * <p>Represents the input to <a>DescribeEventCategories</a>.</p>
 */
export interface DescribeEventCategoriesMessage {
  __type?: "DescribeEventCategoriesMessage";
  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The type of source that is generating the events.</p>
   *         <p>Valid values: <code>db-instance</code>, <code>db-parameter-group</code>,
   *                 <code>db-security-group</code>, <code>db-snapshot</code>
   *          </p>
   */
  SourceType?: string;
}

export namespace DescribeEventCategoriesMessage {
  export const filterSensitiveLog = (
    obj: DescribeEventCategoriesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventCategoriesMessage =>
    __isa(o, "DescribeEventCategoriesMessage");
}

/**
 * <p>Represents the input to <a>DescribeEvents</a>.</p>
 */
export interface DescribeEventsMessage {
  __type?: "DescribeEventsMessage";
  /**
   * <p>The number of minutes to retrieve events for.</p>
   *         <p>Default: 60</p>
   */
  Duration?: number;

  /**
   * <p> The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format. </p>
   *         <p>Example: 2009-07-08T18:00Z</p>
   */
  EndTime?: Date;

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
}

export namespace DescribeEventsMessage {
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventsMessage =>
    __isa(o, "DescribeEventsMessage");
}

/**
 * <p>Represents the input to <a>DescribeOrderableDBInstanceOptions</a>.</p>
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  __type?: "DescribeOrderableDBInstanceOptionsMessage";
  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available
   *             offerings that match the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The name of the engine to retrieve DB instance options for.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available
   *             offerings that match the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The license model filter value. Specify this parameter to show only the available
   *             offerings that match the specified license model.</p>
   */
  LicenseModel?: string;

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

  /**
   * <p>The virtual private cloud (VPC) filter value. Specify this parameter to show only the
   *             available VPC or non-VPC offerings.</p>
   */
  Vpc?: boolean;
}

export namespace DescribeOrderableDBInstanceOptionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeOrderableDBInstanceOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOrderableDBInstanceOptionsMessage =>
    __isa(o, "DescribeOrderableDBInstanceOptionsMessage");
}

/**
 * <p>Represents the input to <a>DescribePendingMaintenanceActions</a>.</p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  __type?: "DescribePendingMaintenanceActionsMessage";
  /**
   * <p>A filter that specifies one or more resources to return pending maintenance actions
   *             for.</p>
   *         <p>Supported filters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster
   *                     Amazon Resource Names (ARNs). The results list includes only pending maintenance
   *                     actions for the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance
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

  /**
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   */
  ResourceIdentifier?: string;
}

export namespace DescribePendingMaintenanceActionsMessage {
  export const filterSensitiveLog = (
    obj: DescribePendingMaintenanceActionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePendingMaintenanceActionsMessage =>
    __isa(o, "DescribePendingMaintenanceActionsMessage");
}

/**
 * <p>Network information for accessing a DB cluster or DB instance. Client programs must
 *             specify a valid endpoint to access these Amazon DocumentDB resources.</p>
 */
export interface Endpoint {
  __type?: "Endpoint";
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is Endpoint => __isa(o, "Endpoint");
}

/**
 * <p>Contains the result of a successful invocation of the
 *                 <code>DescribeEngineDefaultClusterParameters</code> operation. </p>
 */
export interface EngineDefaults {
  __type?: "EngineDefaults";
  /**
   * <p>The name of the DB cluster parameter group family to return the engine parameter
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
   * <p>The parameters of a particular DB cluster parameter group family.</p>
   */
  Parameters?: Parameter[];
}

export namespace EngineDefaults {
  export const filterSensitiveLog = (obj: EngineDefaults): any => ({
    ...obj
  });
  export const isa = (o: any): o is EngineDefaults =>
    __isa(o, "EngineDefaults");
}

/**
 * <p>Detailed information about an event.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>Specifies the date and time of the event.</p>
   */
  Date?: Date;

  /**
   * <p>Specifies the category for the event.</p>
   */
  EventCategories?: string[];

  /**
   * <p>Provides the text of this event.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the event.</p>
   */
  SourceArn?: string;

  /**
   * <p>Provides the identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>Specifies the source type for this event.</p>
   */
  SourceType?: SourceType | string;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj
  });
  export const isa = (o: any): o is Event => __isa(o, "Event");
}

/**
 * <p>An event source type, accompanied by one or more event category names.</p>
 */
export interface EventCategoriesMap {
  __type?: "EventCategoriesMap";
  /**
   * <p>The event categories for the specified source type.</p>
   */
  EventCategories?: string[];

  /**
   * <p>The source type that the returned categories belong to.</p>
   */
  SourceType?: string;
}

export namespace EventCategoriesMap {
  export const filterSensitiveLog = (obj: EventCategoriesMap): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventCategoriesMap =>
    __isa(o, "EventCategoriesMap");
}

/**
 * <p>Represents the output of <a>DescribeEventCategories</a>.</p>
 */
export interface EventCategoriesMessage {
  __type?: "EventCategoriesMessage";
  /**
   * <p>A list of event category maps.</p>
   */
  EventCategoriesMapList?: EventCategoriesMap[];
}

export namespace EventCategoriesMessage {
  export const filterSensitiveLog = (obj: EventCategoriesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventCategoriesMessage =>
    __isa(o, "EventCategoriesMessage");
}

/**
 * <p>Represents the output of <a>DescribeEvents</a>.</p>
 */
export interface EventsMessage {
  __type?: "EventsMessage";
  /**
   * <p>Detailed information about one or more events. </p>
   */
  Events?: Event[];

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace EventsMessage {
  export const filterSensitiveLog = (obj: EventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventsMessage => __isa(o, "EventsMessage");
}

/**
 * <p>Represents the input to <a>FailoverDBCluster</a>.</p>
 */
export interface FailoverDBClusterMessage {
  __type?: "FailoverDBClusterMessage";
  /**
   * <p>A DB cluster identifier to force a failover for. This parameter is not case
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
   *         <p>You must specify the instance identifier for an Amazon DocumentDB replica in the DB cluster. For
   *             example, <code>mydbcluster-replica1</code>.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

export namespace FailoverDBClusterMessage {
  export const filterSensitiveLog = (obj: FailoverDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailoverDBClusterMessage =>
    __isa(o, "FailoverDBClusterMessage");
}

export interface FailoverDBClusterResult {
  __type?: "FailoverDBClusterResult";
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace FailoverDBClusterResult {
  export const filterSensitiveLog = (obj: FailoverDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailoverDBClusterResult =>
    __isa(o, "FailoverDBClusterResult");
}

/**
 * <p>A named set of filter values, used to return a more specific list of results. You can
 *             use a filter to match a set of resources by specific criteria, such as IDs.</p>
 *         <p>Wildcards are not supported in filters.</p>
 */
export interface Filter {
  __type?: "Filter";
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
    ...obj
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

/**
 * <p>The request would cause you to exceed the allowed number of DB instances.</p>
 */
export interface InstanceQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InstanceQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace InstanceQuotaExceededFault {
  export const filterSensitiveLog = (obj: InstanceQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceQuotaExceededFault =>
    __isa(o, "InstanceQuotaExceededFault");
}

/**
 * <p>The DB cluster doesn't have enough capacity for the current operation.</p>
 */
export interface InsufficientDBClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientDBClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBClusterCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientDBClusterCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientDBClusterCapacityFault =>
    __isa(o, "InsufficientDBClusterCapacityFault");
}

/**
 * <p>The specified DB instance class isn't available in the specified Availability
 *             Zone.</p>
 */
export interface InsufficientDBInstanceCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientDBInstanceCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBInstanceCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientDBInstanceCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientDBInstanceCapacityFault =>
    __isa(o, "InsufficientDBInstanceCapacityFault");
}

/**
 * <p>There is not enough storage available for the current action. You might be able to
 *             resolve this error by updating your subnet group to use different Availability Zones
 *             that have more storage available. </p>
 */
export interface InsufficientStorageClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientStorageClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientStorageClusterCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientStorageClusterCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientStorageClusterCapacityFault =>
    __isa(o, "InsufficientStorageClusterCapacityFault");
}

/**
 * <p>The provided value isn't a valid DB cluster snapshot state.</p>
 */
export interface InvalidDBClusterSnapshotStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterSnapshotStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBClusterSnapshotStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBClusterSnapshotStateFault =>
    __isa(o, "InvalidDBClusterSnapshotStateFault");
}

/**
 * <p>The DB cluster isn't in a valid state.</p>
 */
export interface InvalidDBClusterStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterStateFault {
  export const filterSensitiveLog = (obj: InvalidDBClusterStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBClusterStateFault =>
    __isa(o, "InvalidDBClusterStateFault");
}

/**
 * <p> The specified DB instance isn't in the <i>available</i> state.
 *         </p>
 */
export interface InvalidDBInstanceStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBInstanceStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBInstanceStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBInstanceStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBInstanceStateFault =>
    __isa(o, "InvalidDBInstanceStateFault");
}

/**
 * <p>The DB parameter group is in use, or it is in a state that is not valid. If you are
 *             trying to delete the parameter group, you can't delete it when the parameter group
 *             is in this state.</p>
 */
export interface InvalidDBParameterGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBParameterGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBParameterGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBParameterGroupStateFault =>
    __isa(o, "InvalidDBParameterGroupStateFault");
}

/**
 * <p>The state of the DB security group doesn't allow deletion.</p>
 */
export interface InvalidDBSecurityGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSecurityGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSecurityGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBSecurityGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSecurityGroupStateFault =>
    __isa(o, "InvalidDBSecurityGroupStateFault");
}

/**
 * <p>The state of the DB snapshot doesn't allow deletion.</p>
 */
export interface InvalidDBSnapshotStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSnapshotStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBSnapshotStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSnapshotStateFault =>
    __isa(o, "InvalidDBSnapshotStateFault");
}

/**
 * <p>The DB subnet group can't be deleted because it's in use.</p>
 */
export interface InvalidDBSubnetGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSubnetGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBSubnetGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSubnetGroupStateFault =>
    __isa(o, "InvalidDBSubnetGroupStateFault");
}

/**
 * <p> The DB subnet isn't in the <i>available</i> state. </p>
 */
export interface InvalidDBSubnetStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSubnetStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetStateFault {
  export const filterSensitiveLog = (obj: InvalidDBSubnetStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSubnetStateFault =>
    __isa(o, "InvalidDBSubnetStateFault");
}

/**
 * <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB
 *             instance.</p>
 */
export interface InvalidRestoreFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRestoreFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreFault {
  export const filterSensitiveLog = (obj: InvalidRestoreFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRestoreFault =>
    __isa(o, "InvalidRestoreFault");
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
    ...obj
  });
  export const isa = (o: any): o is InvalidSubnet => __isa(o, "InvalidSubnet");
}

/**
 * <p>The DB subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  export const filterSensitiveLog = (
    obj: InvalidVPCNetworkStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidVPCNetworkStateFault =>
    __isa(o, "InvalidVPCNetworkStateFault");
}

/**
 * <p>An error occurred when accessing an AWS KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSKeyNotAccessibleFault";
  $fault: "client";
  message?: string;
}

export namespace KMSKeyNotAccessibleFault {
  export const filterSensitiveLog = (obj: KMSKeyNotAccessibleFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is KMSKeyNotAccessibleFault =>
    __isa(o, "KMSKeyNotAccessibleFault");
}

/**
 * <p>Represents the input to <a>ListTagsForResource</a>.</p>
 */
export interface ListTagsForResourceMessage {
  __type?: "ListTagsForResourceMessage";
  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The Amazon DocumentDB resource with tags to be listed. This value is an Amazon Resource Name
   *             (ARN).</p>
   */
  ResourceName: string | undefined;
}

export namespace ListTagsForResourceMessage {
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceMessage =>
    __isa(o, "ListTagsForResourceMessage");
}

/**
 * <p>Represents the input to <a>ModifyDBCluster</a>.</p>
 */
export interface ModifyDBClusterMessage {
  __type?: "ModifyDBClusterMessage";
  /**
   * <p>A value that specifies whether the changes in this request and any pending changes are
   *             asynchronously applied as soon as possible, regardless of the
   *                 <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this
   *             parameter is set to <code>false</code>, changes to the DB cluster are applied during the
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
   * <p>The configuration setting for the log types to be enabled for export to Amazon
   *             CloudWatch Logs for a specific DB instance or DB cluster. The
   *                 <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which
   *             logs are exported (or not exported) to CloudWatch Logs.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>The DB cluster identifier for the cluster that is being modified. This parameter is
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
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The version number of the database engine to which you want to upgrade. Changing this
   *             parameter results in an outage. The change is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is set to <code>true</code>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable
   *             ASCII character except forward slash (/), double quote ("), or the "at" symbol
   *             (@).</p>
   *         <p>Constraints: Must contain from 8 to 100 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This
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
   * <p>The port number on which the DB cluster accepts connections.</p>
   *         <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p>
   *         <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

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
   * <p>A list of virtual private cloud (VPC) security groups that the DB cluster will belong
   *             to.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace ModifyDBClusterMessage {
  export const filterSensitiveLog = (obj: ModifyDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterMessage =>
    __isa(o, "ModifyDBClusterMessage");
}

/**
 * <p>Represents the input to <a>ModifyDBClusterParameterGroup</a>.</p>
 */
export interface ModifyDBClusterParameterGroupMessage {
  __type?: "ModifyDBClusterParameterGroupMessage";
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
  export const filterSensitiveLog = (
    obj: ModifyDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterParameterGroupMessage =>
    __isa(o, "ModifyDBClusterParameterGroupMessage");
}

export interface ModifyDBClusterResult {
  __type?: "ModifyDBClusterResult";
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace ModifyDBClusterResult {
  export const filterSensitiveLog = (obj: ModifyDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterResult =>
    __isa(o, "ModifyDBClusterResult");
}

/**
 * <p>Represents the input to <a>ModifyDBClusterSnapshotAttribute</a>.</p>
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  __type?: "ModifyDBClusterSnapshotAttributeMessage";
  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *         <p>To manage authorization for other AWS accounts to copy or restore a manual DB cluster
   *             snapshot, set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by
   *                 <code>AttributeName</code>.</p>
   *         <p>To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set
   *             this list to include one or more AWS account IDs. To make the manual DB cluster snapshot
   *             restorable by any AWS account, set it to <code>all</code>. Do not add the
   *                 <code>all</code> value for any manual DB cluster snapshots that contain private
   *             information that you don't want to be available to all AWS accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by
   *                 <code>AttributeName</code>.</p>
   *         <p>To remove authorization for other AWS accounts to copy or restore a manual DB cluster
   *             snapshot, set this list to include one or more AWS account identifiers. To remove
   *             authorization for any AWS account to copy or restore the DB cluster snapshot, set it to
   *                 <code>all</code> . If you specify <code>all</code>, an AWS account whose account ID
   *             is explicitly added to the <code>restore</code> attribute can still copy or restore a
   *             manual DB cluster snapshot.</p>
   */
  ValuesToRemove?: string[];
}

export namespace ModifyDBClusterSnapshotAttributeMessage {
  export const filterSensitiveLog = (
    obj: ModifyDBClusterSnapshotAttributeMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterSnapshotAttributeMessage =>
    __isa(o, "ModifyDBClusterSnapshotAttributeMessage");
}

export interface ModifyDBClusterSnapshotAttributeResult {
  __type?: "ModifyDBClusterSnapshotAttributeResult";
  /**
   * <p>Detailed information about the attributes that are associated with a DB cluster
   *             snapshot.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace ModifyDBClusterSnapshotAttributeResult {
  export const filterSensitiveLog = (
    obj: ModifyDBClusterSnapshotAttributeResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterSnapshotAttributeResult =>
    __isa(o, "ModifyDBClusterSnapshotAttributeResult");
}

/**
 * <p>Represents the input to <a>ModifyDBInstance</a>.</p>
 */
export interface ModifyDBInstanceMessage {
  __type?: "ModifyDBInstanceMessage";
  /**
   * <p>Specifies whether the modifications in this request and any pending modifications are
   *             asynchronously applied as soon as possible, regardless of the
   *                 <code>PreferredMaintenanceWindow</code> setting for the DB instance. </p>
   *         <p> If this parameter is set to <code>false</code>, changes to the DB instance are
   *             applied during the next maintenance window. Some parameter changes can cause an outage
   *             and are applied on the next reboot.</p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>Indicates that minor version upgrades are applied automatically to the DB instance
   *             during the maintenance window. Changing this parameter doesn't result in an outage
   *             except in the following case, and the change is asynchronously applied as soon as
   *             possible. An outage results if this parameter is set to <code>true</code> during the
   *             maintenance window, and a newer minor version is available, and Amazon DocumentDB has enabled
   *             automatic patching for that engine version. </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The new compute and memory capacity of the DB instance; for example,
   *                 <code>db.r5.large</code>. Not all DB instance classes are available in all AWS
   *             Regions. </p>
   *         <p>If you modify the DB instance class, an outage occurs during the change. The change is
   *             applied during the next maintenance window, unless <code>ApplyImmediately</code> is
   *             specified as <code>true</code> for this request. </p>
   *         <p>Default: Uses existing setting.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing <code>DBInstance</code>.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p> The new DB instance identifier for the DB instance when renaming a DB instance. When
   *             you change the DB instance identifier, an instance reboot occurs immediately if you set
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
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *             result in an outage. Changing this parameter doesn't result in an outage except in the
   *             following situation, and the change is asynchronously applied as soon as possible. If
   *             there are pending actions that cause a reboot, and the maintenance window is changed to
   *             include the current time, changing this parameter causes a reboot of the DB instance. If
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
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the
   *             primary instance after a failure of the existing primary instance.</p>
   *         <p>Default: 1</p>
   *         <p>Valid values: 0-15</p>
   */
  PromotionTier?: number;
}

export namespace ModifyDBInstanceMessage {
  export const filterSensitiveLog = (obj: ModifyDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBInstanceMessage =>
    __isa(o, "ModifyDBInstanceMessage");
}

export interface ModifyDBInstanceResult {
  __type?: "ModifyDBInstanceResult";
  /**
   * <p>Detailed information about a DB instance. </p>
   */
  DBInstance?: DBInstance;
}

export namespace ModifyDBInstanceResult {
  export const filterSensitiveLog = (obj: ModifyDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBInstanceResult =>
    __isa(o, "ModifyDBInstanceResult");
}

/**
 * <p>Represents the input to <a>ModifyDBSubnetGroup</a>.</p>
 */
export interface ModifyDBSubnetGroupMessage {
  __type?: "ModifyDBSubnetGroupMessage";
  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string. You
   *             can't modify the default subnet group. </p>
   *         <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not
   *             be default.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The Amazon EC2 subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace ModifyDBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBSubnetGroupMessage =>
    __isa(o, "ModifyDBSubnetGroupMessage");
}

export interface ModifyDBSubnetGroupResult {
  __type?: "ModifyDBSubnetGroupResult";
  /**
   * <p>Detailed information about a DB subnet group. </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace ModifyDBSubnetGroupResult {
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBSubnetGroupResult =>
    __isa(o, "ModifyDBSubnetGroupResult");
}

/**
 * <p>The options that are available for a DB instance.</p>
 */
export interface OrderableDBInstanceOption {
  __type?: "OrderableDBInstanceOption";
  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The DB instance class for a DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The engine type of a DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of a DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The license model for a DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Indicates whether a DB instance is in a virtual private cloud (VPC).</p>
   */
  Vpc?: boolean;
}

export namespace OrderableDBInstanceOption {
  export const filterSensitiveLog = (obj: OrderableDBInstanceOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrderableDBInstanceOption =>
    __isa(o, "OrderableDBInstanceOption");
}

/**
 * <p>Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.</p>
 */
export interface OrderableDBInstanceOptionsMessage {
  __type?: "OrderableDBInstanceOptionsMessage";
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The options that are available for a particular orderable DB instance.</p>
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];
}

export namespace OrderableDBInstanceOptionsMessage {
  export const filterSensitiveLog = (
    obj: OrderableDBInstanceOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrderableDBInstanceOptionsMessage =>
    __isa(o, "OrderableDBInstanceOptionsMessage");
}

/**
 * <p>Detailed information about an individual parameter.</p>
 */
export interface Parameter {
  __type?: "Parameter";
  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Indicates when to apply parameter updates.</p>
   */
  ApplyMethod?: ApplyMethod | string;

  /**
   * <p>Specifies the engine-specific parameters type.</p>
   */
  ApplyType?: string;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>Provides a description of the parameter.</p>
   */
  Description?: string;

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
   * <p>Specifies the name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>Specifies the value of the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>Indicates the source of the parameter value.</p>
   */
  Source?: string;
}

export namespace Parameter {
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Parameter => __isa(o, "Parameter");
}

/**
 * <p>A list of the log types whose configuration is still pending. These log types are in
 *             the process of being activated or deactivated.</p>
 */
export interface PendingCloudwatchLogsExports {
  __type?: "PendingCloudwatchLogsExports";
  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log
   *             types are exported to Amazon CloudWatch Logs.</p>
   */
  LogTypesToDisable?: string[];

  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated,
   *             these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: string[];
}

export namespace PendingCloudwatchLogsExports {
  export const filterSensitiveLog = (
    obj: PendingCloudwatchLogsExports
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingCloudwatchLogsExports =>
    __isa(o, "PendingCloudwatchLogsExports");
}

/**
 * <p>Provides information about a pending maintenance action for a resource.</p>
 */
export interface PendingMaintenanceAction {
  __type?: "PendingMaintenanceAction";
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
   * <p>The effective date when the pending maintenance action is applied to the
   *             resource.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;

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
}

export namespace PendingMaintenanceAction {
  export const filterSensitiveLog = (obj: PendingMaintenanceAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingMaintenanceAction =>
    __isa(o, "PendingMaintenanceAction");
}

/**
 * <p>Represents the output of <a>DescribePendingMaintenanceActions</a>.</p>
 */
export interface PendingMaintenanceActionsMessage {
  __type?: "PendingMaintenanceActionsMessage";
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by
   *          <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maintenance actions to be applied.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}

export namespace PendingMaintenanceActionsMessage {
  export const filterSensitiveLog = (
    obj: PendingMaintenanceActionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingMaintenanceActionsMessage =>
    __isa(o, "PendingMaintenanceActionsMessage");
}

/**
 * <p> One or more modified settings for a DB instance. These modified settings have been
 *             requested, but haven't been applied yet.</p>
 */
export interface PendingModifiedValues {
  __type?: "PendingModifiedValues";
  /**
   * <p> Contains the new <code>AllocatedStorage</code> size for the DB instance that will be
   *             applied or is currently being applied. </p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Specifies the identifier of the certificate authority (CA) certificate for the DB
   *             instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p> Contains the new <code>DBInstanceClass</code> for the DB instance that will be
   *             applied or is currently being applied. </p>
   */
  DBInstanceClass?: string;

  /**
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the DB instance that will be
   *             applied or is currently being applied. </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The new DB subnet group for the DB instance. </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or
   *             is currently being applied.</p>
   */
  Iops?: number;

  /**
   * <p>The license model for the DB instance.</p>
   *         <p>Valid values: <code>license-included</code>, <code>bring-your-own-license</code>,
   *                 <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>Contains the pending or currently in-progress change of the master credentials for the
   *             DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A list of the log types whose configuration is still pending. These log types are in
   *             the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  /**
   * <p>Specifies the pending port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   */
  StorageType?: string;
}

export namespace PendingModifiedValues {
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingModifiedValues =>
    __isa(o, "PendingModifiedValues");
}

/**
 * <p>Represents the input to <a>RebootDBInstance</a>.</p>
 */
export interface RebootDBInstanceMessage {
  __type?: "RebootDBInstanceMessage";
  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
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
    ...obj
  });
  export const isa = (o: any): o is RebootDBInstanceMessage =>
    __isa(o, "RebootDBInstanceMessage");
}

export interface RebootDBInstanceResult {
  __type?: "RebootDBInstanceResult";
  /**
   * <p>Detailed information about a DB instance. </p>
   */
  DBInstance?: DBInstance;
}

export namespace RebootDBInstanceResult {
  export const filterSensitiveLog = (obj: RebootDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootDBInstanceResult =>
    __isa(o, "RebootDBInstanceResult");
}

/**
 * <p>Represents the input to <a>RemoveTagsFromResource</a>.</p>
 */
export interface RemoveTagsFromResourceMessage {
  __type?: "RemoveTagsFromResourceMessage";
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
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceMessage =>
    __isa(o, "RemoveTagsFromResourceMessage");
}

/**
 * <p>Represents the input to <a>ResetDBClusterParameterGroup</a>.</p>
 */
export interface ResetDBClusterParameterGroupMessage {
  __type?: "ResetDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default
   *             values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is
   *             set to <code>true</code>.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>A value that is set to <code>true</code> to reset all parameters in the DB cluster
   *             parameter group to their default values, and <code>false</code> otherwise. You can't use
   *             this parameter if there is a list of parameter names specified for the
   *                 <code>Parameters</code> parameter.</p>
   */
  ResetAllParameters?: boolean;
}

export namespace ResetDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ResetDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetDBClusterParameterGroupMessage =>
    __isa(o, "ResetDBClusterParameterGroupMessage");
}

/**
 * <p>The specified resource ID was not found.</p>
 */
export interface ResourceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundFault {
  export const filterSensitiveLog = (obj: ResourceNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundFault =>
    __isa(o, "ResourceNotFoundFault");
}

/**
 * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.</p>
 */
export interface ResourcePendingMaintenanceActions {
  __type?: "ResourcePendingMaintenanceActions";
  /**
   * <p>A list that provides details about the pending maintenance actions for the
   *             resource.</p>
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that has pending maintenance
   *             actions.</p>
   */
  ResourceIdentifier?: string;
}

export namespace ResourcePendingMaintenanceActions {
  export const filterSensitiveLog = (
    obj: ResourcePendingMaintenanceActions
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourcePendingMaintenanceActions =>
    __isa(o, "ResourcePendingMaintenanceActions");
}

/**
 * <p>Represents the input to <a>RestoreDBClusterFromSnapshot</a>.</p>
 */
export interface RestoreDBClusterFromSnapshotMessage {
  __type?: "RestoreDBClusterFromSnapshotMessage";
  /**
   * <p>Provides the list of Amazon EC2 Availability Zones that instances in the restored DB
   *             cluster can be created in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This
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
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *         <p>Constraints: If provided, must match the name of an existing
   *                 <code>DBSubnetGroup</code>.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A list of log types that must be enabled for exporting to Amazon CloudWatch
   *             Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The database engine to use for the new DB cluster.</p>
   *         <p>Default: The same as source.</p>
   *         <p>Constraint: Must be compatible with the engine of the source.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB
   *             snapshot or DB cluster snapshot.</p>
   *         <p>The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS
   *             encryption key. If you are restoring a DB cluster with the same AWS account that owns
   *             the AWS KMS encryption key used to encrypt the new DB cluster, then you can use the AWS
   *             KMS key alias instead of the ARN for the AWS KMS encryption key.</p>
   *         <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code>
   *                     is encrypted, then the restored DB cluster is encrypted using the AWS KMS key
   *                     that was used to encrypt the DB snapshot or the DB cluster snapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If the DB snapshot or the DB cluster snapshot in
   *                         <code>SnapshotIdentifier</code> is not encrypted, then the restored DB
   *                     cluster is not encrypted.</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *         <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>.</p>
   *         <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *         <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster
   *             snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing snapshot.</p>
   *             </li>
   *          </ul>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of virtual private cloud (VPC) security groups that the new DB cluster will
   *             belong to.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace RestoreDBClusterFromSnapshotMessage {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterFromSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterFromSnapshotMessage =>
    __isa(o, "RestoreDBClusterFromSnapshotMessage");
}

export interface RestoreDBClusterFromSnapshotResult {
  __type?: "RestoreDBClusterFromSnapshotResult";
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromSnapshotResult {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterFromSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterFromSnapshotResult =>
    __isa(o, "RestoreDBClusterFromSnapshotResult");
}

/**
 * <p>Represents the input to <a>RestoreDBClusterToPointInTime</a>.</p>
 */
export interface RestoreDBClusterToPointInTimeMessage {
  __type?: "RestoreDBClusterToPointInTimeMessage";
  /**
   * <p>The name of the new DB cluster to be created.</p>
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
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *         <p>Constraints: If provided, must match the name of an existing
   *                 <code>DBSubnetGroup</code>.</p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is
   *             enabled, the cluster cannot be deleted unless it is modified and
   *                 <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code>
   *             protects clusters from being accidentally deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A list of log types that must be enabled for exporting to Amazon CloudWatch
   *             Logs.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from an
   *             encrypted DB cluster.</p>
   *         <p>The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS
   *             encryption key. If you are restoring a DB cluster with the same AWS account that owns
   *             the AWS KMS encryption key used to encrypt the new DB cluster, then you can use the AWS
   *             KMS key alias instead of the ARN for the AWS KMS encryption key.</p>
   *         <p>You can restore to a new DB cluster and encrypt the new DB cluster with an AWS KMS key
   *             that is different from the AWS KMS key used to encrypt the source DB cluster. The new DB
   *             cluster is encrypted with the AWS KMS key identified by the <code>KmsKeyId</code>
   *             parameter.</p>
   *         <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted
   *                     using the AWS KMS key that was used to encrypt the source DB cluster.</p>
   *             </li>
   *             <li>
   *                 <p>If the DB cluster is not encrypted, then the restored DB cluster is not
   *                     encrypted.</p>
   *             </li>
   *          </ul>
   *         <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then
   *             the restore request is rejected.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *         <p>Constraints: Must be a value from <code>1150</code> to <code>65535</code>. </p>
   *         <p>Default: The default port for the engine.</p>
   */
  Port?: number;

  /**
   * <p>The date and time to restore the DB cluster to.</p>
   *         <p>Valid values: A time in Universal Coordinated Time (UTC) format.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be before the latest restorable time for the DB instance.</p>
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
   * <p>The identifier of the source DB cluster from which to restore.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing <code>DBCluster</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A value that is set to <code>true</code> to restore the DB cluster to the latest
   *             restorable backup time, and <code>false</code> otherwise. </p>
   *         <p>Default: <code>false</code>
   *         </p>
   *         <p>Constraints: Cannot be specified if the <code>RestoreToTime</code> parameter is
   *             provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace RestoreDBClusterToPointInTimeMessage {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterToPointInTimeMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterToPointInTimeMessage =>
    __isa(o, "RestoreDBClusterToPointInTimeMessage");
}

export interface RestoreDBClusterToPointInTimeResult {
  __type?: "RestoreDBClusterToPointInTimeResult";
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterToPointInTimeResult {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterToPointInTimeResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterToPointInTimeResult =>
    __isa(o, "RestoreDBClusterToPointInTimeResult");
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB
 *             snapshot with. </p>
 */
export interface SharedSnapshotQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SharedSnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SharedSnapshotQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: SharedSnapshotQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SharedSnapshotQuotaExceededFault =>
    __isa(o, "SharedSnapshotQuotaExceededFault");
}

/**
 * <p>The request would cause you to exceed the allowed number of DB snapshots.</p>
 */
export interface SnapshotQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotQuotaExceededFault {
  export const filterSensitiveLog = (obj: SnapshotQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotQuotaExceededFault =>
    __isa(o, "SnapshotQuotaExceededFault");
}

export type SourceType =
  | "db-cluster"
  | "db-cluster-snapshot"
  | "db-instance"
  | "db-parameter-group"
  | "db-security-group"
  | "db-snapshot";

export interface StartDBClusterMessage {
  __type?: "StartDBClusterMessage";
  /**
   * <p>The identifier of the cluster to restart. Example:
   *                 <code>docdb-2019-05-28-15-24-52</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StartDBClusterMessage {
  export const filterSensitiveLog = (obj: StartDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDBClusterMessage =>
    __isa(o, "StartDBClusterMessage");
}

export interface StartDBClusterResult {
  __type?: "StartDBClusterResult";
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace StartDBClusterResult {
  export const filterSensitiveLog = (obj: StartDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDBClusterResult =>
    __isa(o, "StartDBClusterResult");
}

export interface StopDBClusterMessage {
  __type?: "StopDBClusterMessage";
  /**
   * <p>The identifier of the cluster to stop. Example:
   *             <code>docdb-2019-05-28-15-24-52</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StopDBClusterMessage {
  export const filterSensitiveLog = (obj: StopDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDBClusterMessage =>
    __isa(o, "StopDBClusterMessage");
}

export interface StopDBClusterResult {
  __type?: "StopDBClusterResult";
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: DBCluster;
}

export namespace StopDBClusterResult {
  export const filterSensitiveLog = (obj: StopDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDBClusterResult =>
    __isa(o, "StopDBClusterResult");
}

/**
 * <p>The request would cause you to exceed the allowed amount of storage available across
 *             all DB instances.</p>
 */
export interface StorageQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace StorageQuotaExceededFault {
  export const filterSensitiveLog = (obj: StorageQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is StorageQuotaExceededFault =>
    __isa(o, "StorageQuotaExceededFault");
}

/**
 * <p>Storage of the specified <code>StorageType</code> can't be associated with the DB
 *             instance. </p>
 */
export interface StorageTypeNotSupportedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageTypeNotSupportedFault";
  $fault: "client";
  message?: string;
}

export namespace StorageTypeNotSupportedFault {
  export const filterSensitiveLog = (
    obj: StorageTypeNotSupportedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StorageTypeNotSupportedFault =>
    __isa(o, "StorageTypeNotSupportedFault");
}

/**
 * <p> Detailed information about a subnet. </p>
 */
export interface Subnet {
  __type?: "Subnet";
  /**
   * <p>Specifies the Availability Zone for the subnet.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Specifies the status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export namespace Subnet {
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj
  });
  export const isa = (o: any): o is Subnet => __isa(o, "Subnet");
}

/**
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetAlreadyInUse {
  export const filterSensitiveLog = (obj: SubnetAlreadyInUse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubnetAlreadyInUse =>
    __isa(o, "SubnetAlreadyInUse");
}

/**
 * <p>Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.</p>
 */
export interface Tag {
  __type?: "Tag";
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
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>Represents the output of <a>ListTagsForResource</a>.</p>
 */
export interface TagListMessage {
  __type?: "TagListMessage";
  /**
   * <p>A list of one or more tags.</p>
   */
  TagList?: Tag[];
}

export namespace TagListMessage {
  export const filterSensitiveLog = (obj: TagListMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagListMessage =>
    __isa(o, "TagListMessage");
}

/**
 * <p>The version of the database engine that a DB instance can be upgraded to.</p>
 */
export interface UpgradeTarget {
  __type?: "UpgradeTarget";
  /**
   * <p>A value that indicates whether the target version is applied to any source DB
   *             instances that have <code>AutoMinorVersionUpgrade</code> set to
   *             <code>true</code>.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * <p>The version of the database engine that a DB instance can be upgraded to.</p>
   */
  Description?: string;

  /**
   * <p>The name of the upgrade target database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the upgrade target database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether a database engine is upgraded to a major
   *             version.</p>
   */
  IsMajorVersionUpgrade?: boolean;
}

export namespace UpgradeTarget {
  export const filterSensitiveLog = (obj: UpgradeTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpgradeTarget => __isa(o, "UpgradeTarget");
}

/**
 * <p>Used as a response element for queries on virtual private cloud (VPC) security group
 *             membership.</p>
 */
export interface VpcSecurityGroupMembership {
  __type?: "VpcSecurityGroupMembership";
  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;
}

export namespace VpcSecurityGroupMembership {
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcSecurityGroupMembership =>
    __isa(o, "VpcSecurityGroupMembership");
}
