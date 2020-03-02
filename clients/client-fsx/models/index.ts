import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The Microsoft AD attributes of the Amazon FSx for Windows File Server file system.</p>
 */
export interface ActiveDirectoryBackupAttributes {
  __type?: "ActiveDirectoryBackupAttributes";
  /**
   * <p>The ID of the AWS Managed Microsoft Active Directory instance to which the file system is joined.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The fully qualified domain name of the self-managed AD directory.</p>
   */
  DomainName?: string;
}

export namespace ActiveDirectoryBackupAttributes {
  export function isa(o: any): o is ActiveDirectoryBackupAttributes {
    return __isa(o, "ActiveDirectoryBackupAttributes");
  }
}

/**
 * <p>An Active Directory error.</p>
 */
export interface ActiveDirectoryError
  extends __SmithyException,
    $MetadataBearer {
  name: "ActiveDirectoryError";
  $fault: "client";
  /**
   * <p>The directory ID of the directory that an error pertains to.</p>
   */
  ActiveDirectoryId: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The type of Active Directory error.</p>
   */
  Type?: ActiveDirectoryErrorType | string;
}

export namespace ActiveDirectoryError {
  export function isa(o: any): o is ActiveDirectoryError {
    return __isa(o, "ActiveDirectoryError");
  }
}

export enum ActiveDirectoryErrorType {
  DOMAIN_NOT_FOUND = "DOMAIN_NOT_FOUND",
  INCOMPATIBLE_DOMAIN_MODE = "INCOMPATIBLE_DOMAIN_MODE",
  INVALID_DOMAIN_STAGE = "INVALID_DOMAIN_STAGE",
  WRONG_VPC = "WRONG_VPC"
}

/**
 * <p>A backup of an Amazon FSx for Windows File Server file system. You can create a new
 *             file system from a backup to protect against data loss.</p>
 */
export interface Backup {
  __type?: "Backup";
  /**
   * <p>The ID of the backup.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>The time when a particular backup was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) to which the Windows File Server instance is joined.</p>
   */
  DirectoryInformation?: ActiveDirectoryBackupAttributes;

  /**
   * <p>Details explaining any failures that occur when creating a backup.</p>
   */
  FailureDetails?: BackupFailureDetails;

  /**
   * <p>Metadata of the file system associated with the backup. This metadata is persisted
   *             even if the file system is deleted.</p>
   */
  FileSystem: FileSystem | undefined;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key used to encrypt this
   *               backup of the Amazon FSx for Windows file system's data at rest.
   *               Amazon FSx for Lustre does not support KMS encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The lifecycle status of the backup.</p>
   */
  Lifecycle: BackupLifecycle | string | undefined;

  /**
   * <p>The current percent of progress of an asynchronous task.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the backup resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>Tags associated with a particular file system.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The type of the backup.</p>
   */
  Type: BackupType | string | undefined;
}

export namespace Backup {
  export function isa(o: any): o is Backup {
    return __isa(o, "Backup");
  }
}

/**
 * <p>If backup creation fails, this structure contains the details of that
 *             failure.</p>
 */
export interface BackupFailureDetails {
  __type?: "BackupFailureDetails";
  /**
   * <p>A message describing the backup creation failure.</p>
   */
  Message?: string;
}

export namespace BackupFailureDetails {
  export function isa(o: any): o is BackupFailureDetails {
    return __isa(o, "BackupFailureDetails");
  }
}

/**
 * <p>Another backup is already under way. Wait for completion before initiating
 *             additional backups of this file system.</p>
 */
export interface BackupInProgress extends __SmithyException, $MetadataBearer {
  name: "BackupInProgress";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace BackupInProgress {
  export function isa(o: any): o is BackupInProgress {
    return __isa(o, "BackupInProgress");
  }
}

export enum BackupLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  FAILED = "FAILED"
}

/**
 * <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
 */
export interface BackupNotFound extends __SmithyException, $MetadataBearer {
  name: "BackupNotFound";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace BackupNotFound {
  export function isa(o: any): o is BackupNotFound {
    return __isa(o, "BackupNotFound");
  }
}

/**
 * <p>You can't delete a backup while it's being used to restore a file
 *             system.</p>
 */
export interface BackupRestoring extends __SmithyException, $MetadataBearer {
  name: "BackupRestoring";
  $fault: "client";
  /**
   * <p>The ID of a file system being restored from the backup.</p>
   */
  FileSystemId?: string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace BackupRestoring {
  export function isa(o: any): o is BackupRestoring {
    return __isa(o, "BackupRestoring");
  }
}

export enum BackupType {
  AUTOMATIC = "AUTOMATIC",
  USER_INITIATED = "USER_INITIATED"
}

/**
 * <p>A generic error indicating a failure with a client request.</p>
 */
export interface BadRequest extends __SmithyException, $MetadataBearer {
  name: "BadRequest";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace BadRequest {
  export function isa(o: any): o is BadRequest {
    return __isa(o, "BadRequest");
  }
}

/**
 * <p>Cancels a data repository task.</p>
 */
export interface CancelDataRepositoryTaskRequest {
  __type?: "CancelDataRepositoryTaskRequest";
  /**
   * <p>Specifies the data repository task to cancel.</p>
   */
  TaskId: string | undefined;
}

export namespace CancelDataRepositoryTaskRequest {
  export function isa(o: any): o is CancelDataRepositoryTaskRequest {
    return __isa(o, "CancelDataRepositoryTaskRequest");
  }
}

export interface CancelDataRepositoryTaskResponse {
  __type?: "CancelDataRepositoryTaskResponse";
  /**
   * <p>The lifecycle status of the data repository task, as follows:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon FSx has not started the task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXECUTING</code> - Amazon FSx is processing the task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> -  Amazon FSx was not able to complete the task. For example, there may be files the task failed to process.
   *                 The <a>DataRepositoryTaskFailureDetails</a> property provides more information about task failures.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - FSx completed the task successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELED</code> - Amazon FSx canceled the task and it did not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELING</code> - FSx is in process of canceling the task.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: DataRepositoryTaskLifecycle | string;

  /**
   * <p>The ID of the task being canceled.</p>
   */
  TaskId?: string;
}

export namespace CancelDataRepositoryTaskResponse {
  export function isa(o: any): o is CancelDataRepositoryTaskResponse {
    return __isa(o, "CancelDataRepositoryTaskResponse");
  }
}

/**
 * <p>Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter.
 *             FSx delivers the report to the file system's linked data repository in Amazon S3,
 *             using the path specified in the report <code>Path</code> parameter.
 *             You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.</p>
 */
export interface CompletionReport {
  __type?: "CompletionReport";
  /**
   * <p>Set <code>Enabled</code> to <code>True</code> to generate a <code>CompletionReport</code> when the task completes.
   *             If set to <code>true</code>, then you need to provide a report <code>Scope</code>, <code>Path</code>, and <code>Format</code>.
   *             Set <code>Enabled</code> to <code>False</code> if you do not want a <code>CompletionReport</code> generated when the task completes.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the format of the <code>CompletionReport</code>. <code>REPORT_CSV_20191124</code> is the only format currently supported.
   *             When <code>Format</code> is set to <code>REPORT_CSV_20191124</code>, the <code>CompletionReport</code> is provided in CSV format, and is delivered to
   *             <code>{path}/task-{id}/failures.csv</code>.
   *         </p>
   */
  Format?: ReportFormat | string;

  /**
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the location of the report on the file system's linked S3 data repository. An absolute path that defines where the completion report will be stored in the destination location.
   *             The <code>Path</code> you provide must be located within the file system’s ExportPath.
   *             An example <code>Path</code> value is "s3://myBucket/myExportPath/optionalPrefix". The report provides the following information for each file in the report:
   *             FilePath, FileStatus, and ErrorCode. To learn more about a file system's <code>ExportPath</code>, see .
   *             </p>
   */
  Path?: string;

  /**
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the scope of the <code>CompletionReport</code>; <code>FAILED_FILES_ONLY</code> is the only scope currently supported.
   *             When <code>Scope</code> is set to <code>FAILED_FILES_ONLY</code>, the <code>CompletionReport</code> only contains information about files that the data repository task failed to process.</p>
   */
  Scope?: ReportScope | string;
}

export namespace CompletionReport {
  export function isa(o: any): o is CompletionReport {
    return __isa(o, "CompletionReport");
  }
}

/**
 * <p>The request object for the <code>CreateBackup</code> operation.</p>
 */
export interface CreateBackupRequest {
  __type?: "CreateBackupRequest";
  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the file system to back up.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The tags to apply to the backup at backup creation. The key value of the
   *                 <code>Name</code> tag appears in the console as the backup name.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateBackupRequest {
  export function isa(o: any): o is CreateBackupRequest {
    return __isa(o, "CreateBackupRequest");
  }
}

/**
 * <p>The response object for the <code>CreateBackup</code> operation.</p>
 */
export interface CreateBackupResponse {
  __type?: "CreateBackupResponse";
  /**
   * <p>A description of the backup.</p>
   */
  Backup?: Backup;
}

export namespace CreateBackupResponse {
  export function isa(o: any): o is CreateBackupResponse {
    return __isa(o, "CreateBackupResponse");
  }
}

export interface CreateDataRepositoryTaskRequest {
  __type?: "CreateDataRepositoryTaskRequest";
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the AWS
   *             Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>(Optional) The path or paths on the Amazon FSx file system to use when the data repository task is processed.
   *             The default path is the file system root directory.</p>
   */
  Paths?: Array<string>;

  /**
   * <p>Defines whether or not Amazon FSx provides a CompletionReport once the task has completed.
   *             A CompletionReport provides a detailed  report on the files that Amazon FSx processed that meet the criteria specified by the
   *             <code>Scope</code> parameter.
   *         </p>
   */
  Report: CompletionReport | undefined;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>Specifies the type of data repository task to create.</p>
   */
  Type: DataRepositoryTaskType | string | undefined;
}

export namespace CreateDataRepositoryTaskRequest {
  export function isa(o: any): o is CreateDataRepositoryTaskRequest {
    return __isa(o, "CreateDataRepositoryTaskRequest");
  }
}

export interface CreateDataRepositoryTaskResponse {
  __type?: "CreateDataRepositoryTaskResponse";
  /**
   * <p>The description of the data repository task that you just created.</p>
   */
  DataRepositoryTask?: DataRepositoryTask;
}

export namespace CreateDataRepositoryTaskResponse {
  export function isa(o: any): o is CreateDataRepositoryTaskResponse {
    return __isa(o, "CreateDataRepositoryTaskResponse");
  }
}

/**
 * <p>The request object for the <code>CreateFileSystemFromBackup</code>
 *             operation.</p>
 */
export interface CreateFileSystemFromBackupRequest {
  __type?: "CreateFileSystemFromBackupRequest";
  /**
   * <p>The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>A list of IDs for the security groups that apply to the specified network
   *             interfaces created for file system access. These security groups apply to all network
   *             interfaces. This value isn't returned in later describe requests.</p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p>A list of IDs for the subnets that the file system will be accessible from.
   *             Currently, you can specify only one subnet. The file server is also launched in that
   *             subnet's Availability Zone.</p>
   */
  SubnetIds: Array<string> | undefined;

  /**
   * <p>The tags to be applied to the file system at file system creation. The key value of
   *             the <code>Name</code> tag appears in the console as the file system
   *             name.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
}

export namespace CreateFileSystemFromBackupRequest {
  export function isa(o: any): o is CreateFileSystemFromBackupRequest {
    return __isa(o, "CreateFileSystemFromBackupRequest");
  }
}

/**
 * <p>The response object for the <code>CreateFileSystemFromBackup</code>
 *             operation.</p>
 */
export interface CreateFileSystemFromBackupResponse {
  __type?: "CreateFileSystemFromBackupResponse";
  /**
   * <p>A description of the file system.</p>
   */
  FileSystem?: FileSystem;
}

export namespace CreateFileSystemFromBackupResponse {
  export function isa(o: any): o is CreateFileSystemFromBackupResponse {
    return __isa(o, "CreateFileSystemFromBackupResponse");
  }
}

/**
 * <p>The Lustre configuration for the file system being created.
 *             This value is required if <code>FileSystemType</code> is set to <code>LUSTRE</code>.</p>
 */
export interface CreateFileSystemLustreConfiguration {
  __type?: "CreateFileSystemLustreConfiguration";
  /**
   * <p>(Optional) The path in Amazon S3 where the root of your Amazon FSx file system is exported.
   *             The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which
   *             new and changed data is to be exported from your Amazon FSx for Lustre file system. If
   *             an <code>ExportPath</code> value is not provided, Amazon FSx sets a default export path,
   *             <code>s3://import-bucket/FSxLustre[creation-timestamp]</code>. The timestamp is in
   *             UTC format, for example
   *             <code>s3://import-bucket/FSxLustre20181105T222312Z</code>.</p>
   *
   *         <p>The Amazon S3 export bucket must be the same as the import bucket specified by
   *             <code>ImportPath</code>. If you only specify a bucket name, such as
   *             <code>s3://import-bucket</code>, you get a 1:1 mapping of file system objects to S3
   *             bucket objects. This mapping means that the input data in S3 is overwritten on export.
   *             If you provide a custom prefix in the export path, such as
   *             <code>s3://import-bucket/[custom-optional-prefix]</code>, Amazon FSx exports the contents of your file
   *             system to that export prefix in the Amazon S3 bucket.</p>
   */
  ExportPath?: string;

  /**
   * <p>(Optional) The path to the Amazon S3 bucket (including the optional prefix) that
   *             you're using as the data repository for your Amazon FSx for Lustre file system.
   *             The root of your FSx for Lustre file system will
   *             be mapped to the root of the Amazon S3 bucket you select. An
   *             example is <code>s3://import-bucket/optional-prefix</code>. If you specify a prefix
   *             after the Amazon S3 bucket name, only object keys with that prefix are loaded into the
   *             file system.</p>
   */
  ImportPath?: string;

  /**
   * <p>(Optional) For files imported from a data repository, this value determines the stripe
   *             count and maximum amount of data per file (in MiB) stored on a single physical disk. The
   *             maximum number of disks that a single file can be striped across is limited by the total
   *             number of disks that make up the file system.</p>
   *
   *         <p>The chunk size default is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * <p>The preferred time to perform weekly maintenance, in the UTC time zone.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace CreateFileSystemLustreConfiguration {
  export function isa(o: any): o is CreateFileSystemLustreConfiguration {
    return __isa(o, "CreateFileSystemLustreConfiguration");
  }
}

/**
 * <p>The request object used to create a new Amazon FSx file system.</p>
 */
export interface CreateFileSystemRequest {
  __type?: "CreateFileSystemRequest";
  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The type of Amazon FSx file system to create.</p>
   */
  FileSystemType: FileSystemType | string | undefined;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file
   *             system's data for an Amazon FSx for Windows File Server file system at rest.
   *             Amazon FSx for Lustre does not support KMS encryption. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a>
   *             in the <i>AWS Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Lustre configuration for the file system being created.
   *             This value is required if <code>FileSystemType</code> is set to <code>LUSTRE</code>.</p>
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration;

  /**
   * <p>A list of IDs specifying the security groups to apply to all network interfaces
   *             created for file system access. This list isn't returned in later requests to
   *             describe the file system.</p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p>The storage capacity of the file system being created.</p>
   *         <p>For Windows file systems, valid values are 32 GiB - 65,536 GiB.</p>
   *         <p>For Lustre file systems, valid values are 1,200, 2,400, 3,600, then continuing in increments of 3600 GiB.</p>
   */
  StorageCapacity: number | undefined;

  /**
   * <p>Specifies the IDs of the subnets that the file system will be accessible from. For Windows <code>MULTI_AZ_1</code>
   *             file system deployment types, provide exactly two subnet IDs, one for the preferred file server
   *             and one for the standy file server. You specify one of these subnets as the preferred subnet
   *             using the <code>WindowsConfiguration > PreferredSubnetID</code> property.</p>
   *         <p>For Windows <code>SINGLE_AZ_1</code> file system deployment types and Lustre file systems, provide exactly one subnet ID.
   *            The file server is launched in that subnet's Availability Zone.</p>
   */
  SubnetIds: Array<string> | undefined;

  /**
   * <p>The tags to apply to the file system being created. The key value of
   *             the <code>Name</code> tag appears in the console as the file system name.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The Microsoft Windows configuration for the file system being created.
   *             This value is required if <code>FileSystemType</code> is set to <code>WINDOWS</code>.</p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
}

export namespace CreateFileSystemRequest {
  export function isa(o: any): o is CreateFileSystemRequest {
    return __isa(o, "CreateFileSystemRequest");
  }
}

/**
 * <p>The response object returned after the file system is created.</p>
 */
export interface CreateFileSystemResponse {
  __type?: "CreateFileSystemResponse";
  /**
   * <p>The configuration of the file system that was created.</p>
   */
  FileSystem?: FileSystem;
}

export namespace CreateFileSystemResponse {
  export function isa(o: any): o is CreateFileSystemResponse {
    return __isa(o, "CreateFileSystemResponse");
  }
}

/**
 * <p>The configuration object for the Microsoft Windows file system used in
 *                 <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code>
 *             operations.</p>
 */
export interface CreateFileSystemWindowsConfiguration {
  __type?: "CreateFileSystemWindowsConfiguration";
  /**
   * <p>The ID for an existing AWS Managed Microsoft Active Directory (AD) instance that the
   *             file system should join when it's created.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The number of days to retain automatic backups. The default is to retain backups for 7
   *             days. Setting this value to 0 disables the creation of automatic backups. The maximum
   *             retention period for backups is 35 days.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A boolean flag indicating whether tags for the file system should be copied to
   *             backups. This value defaults to false. If it's set to true, all tags for the file
   *             system are copied to all automatic and user-initiated backups where the user
   *             doesn't specify tags. If this value is true, and you specify one or more tags, only
   *             the specified tags are copied to backups.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>The preferred time to take daily automatic backups, formatted HH:MM in the UTC time
   *             zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>Specifies the file system deployment type, valid values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>MULTI_AZ_1 - Deploys a high availability file system that is configured
   *                     for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You
   *                     can only deploy a Multi-AZ file system in AWS Regions that have a minimum of three Availability Zones.</p>
   *             </li>
   *             <li>
   *                 <p>SINGLE_AZ_1 - (Default) Choose to deploy a file system that is configured for single AZ redundancy.</p>
   *             </li>
   *          </ul>
   *         <p>To learn more about high availability Multi-AZ file systems, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html">
   *                 High Availability for Amazon FSx for Windows File Server</a>.</p>
   */
  DeploymentType?: WindowsDeploymentType | string;

  /**
   * <p>Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This specifies the subnet
   *             in which you want the preferred file server to be located. For in-AWS applications, we recommend that you launch
   *             your clients in the same Availability Zone (AZ) as your preferred file server to reduce cross-AZ
   *             data transfer costs and minimize latency. </p>
   */
  PreferredSubnetId?: string;

  /**
   * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to
   *             your self-managed (including on-premises) Microsoft Active Directory (AD)
   *             directory.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;

  /**
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per second, in 2 to
   *             the <i>n</i>th increments, between 2^3 (8) and 2^11 (2048).</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace CreateFileSystemWindowsConfiguration {
  export function isa(o: any): o is CreateFileSystemWindowsConfiguration {
    return __isa(o, "CreateFileSystemWindowsConfiguration");
  }
}

/**
 * <p>The data repository configuration object for Lustre file systems returned in the response of
 *             the <code>CreateFileSystem</code> operation.</p>
 */
export interface DataRepositoryConfiguration {
  __type?: "DataRepositoryConfiguration";
  /**
   * <p>The export path to the Amazon S3 bucket (and prefix) that you are using to store new and
   *             changed Lustre file system files in S3.</p>
   */
  ExportPath?: string;

  /**
   * <p>The import path to the Amazon S3 bucket (and optional prefix) that you're using
   *             as the data repository for your FSx for Lustre file system, for example
   *                 <code>s3://import-bucket/optional-prefix</code>. If a prefix is specified after the
   *             Amazon S3 bucket name, only object keys with that prefix are loaded into the file
   *             system.</p>
   */
  ImportPath?: string;

  /**
   * <p>For files imported from a data repository, this value determines the stripe count and
   *             maximum amount of data per file (in MiB) stored on a single physical disk. The maximum
   *             number of disks that a single file can be striped across is limited by the total number
   *             of disks that make up the file system.</p>
   *
   *         <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;
}

export namespace DataRepositoryConfiguration {
  export function isa(o: any): o is DataRepositoryConfiguration {
    return __isa(o, "DataRepositoryConfiguration");
  }
}

/**
 * <p>A description of the data repository task. You use data repository tasks
 *             to perform bulk transfer operations between your Amazon FSx file system and its linked data
 *             repository.</p>
 */
export interface DataRepositoryTask {
  __type?: "DataRepositoryTask";
  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time that Amazon FSx completed processing the task, populated after the task is complete.</p>
   */
  EndTime?: Date;

  /**
   * <p>Failure message describing why the task failed, it is populated only when <code>Lifecycle</code> is set to <code>FAILED</code>.</p>
   */
  FailureDetails?: DataRepositoryTaskFailureDetails;

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The lifecycle status of the data repository task, as follows:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon FSx has not started the task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXECUTING</code> - Amazon FSx is processing the task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> -  Amazon FSx was not able to complete the task. For example, there may be files the task failed to process.
   *                 The <a>DataRepositoryTaskFailureDetails</a> property provides more information about task failures.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - FSx completed the task successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELED</code> - Amazon FSx canceled the task and it did not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELING</code> - FSx is in process of canceling the task.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>You cannot delete an FSx for Lustre file system if there are data
   *                 repository tasks for the file system in the <code>PENDING</code> or <code>EXECUTING</code> states.
   *                 Please retry when the data repository task is finished (with a status of <code>CANCELED</code>, <code>SUCCEEDED</code>, or <code>FAILED</code>).
   *                 You can use the DescribeDataRepositoryTask action to monitor the task status. Contact the FSx team if you need to delete your file system immediately.</p>
   *         </note>
   */
  Lifecycle: DataRepositoryTaskLifecycle | string | undefined;

  /**
   * <p>An array of paths on the Amazon FSx for Lustre file system that specify the data for the data repository task to process.
   *             For example, in an EXPORT_TO_REPOSITORY task, the paths specify which data to export to the linked data repository.</p>
   *             <p>(Default) If <code>Paths</code> is not specified, Amazon FSx uses the file system root directory.</p>
   */
  Paths?: Array<string>;

  /**
   * <p>Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter.
   *             FSx delivers the report to the file system's linked data repository in Amazon S3,
   *             using the path specified in the report <code>Path</code> parameter.
   *             You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.</p>
   */
  Report?: CompletionReport;

  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)
   *                 and AWS Service Namespaces</a> in the <i>AWS General
   *             Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The time that Amazon FSx began processing the task.</p>
   */
  StartTime?: Date;

  /**
   * <p>Provides the status of the number of files that the task has processed successfully and failed to process.</p>
   */
  Status?: DataRepositoryTaskStatus;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The system-generated, unique 17-digit ID of the data repository task.</p>
   */
  TaskId: string | undefined;

  /**
   * <p>The type of data repository task; EXPORT_TO_REPOSITORY is the only type currently supported.</p>
   */
  Type: DataRepositoryTaskType | string | undefined;
}

export namespace DataRepositoryTask {
  export function isa(o: any): o is DataRepositoryTask {
    return __isa(o, "DataRepositoryTask");
  }
}

/**
 * <p>The data repository task could not be canceled because the task has already ended.</p>
 */
export interface DataRepositoryTaskEnded
  extends __SmithyException,
    $MetadataBearer {
  name: "DataRepositoryTaskEnded";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryTaskEnded {
  export function isa(o: any): o is DataRepositoryTaskEnded {
    return __isa(o, "DataRepositoryTaskEnded");
  }
}

/**
 * <p>An existing data repository task is currently executing on the file system.
 *         Wait until the existing task has completed, then create the new task.</p>
 */
export interface DataRepositoryTaskExecuting
  extends __SmithyException,
    $MetadataBearer {
  name: "DataRepositoryTaskExecuting";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryTaskExecuting {
  export function isa(o: any): o is DataRepositoryTaskExecuting {
    return __isa(o, "DataRepositoryTaskExecuting");
  }
}

/**
 * <p>Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.</p>
 */
export interface DataRepositoryTaskFailureDetails {
  __type?: "DataRepositoryTaskFailureDetails";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryTaskFailureDetails {
  export function isa(o: any): o is DataRepositoryTaskFailureDetails {
    return __isa(o, "DataRepositoryTaskFailureDetails");
  }
}

/**
 * <p>(Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response.
 *             You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type.
 *             A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.</p>
 */
export interface DataRepositoryTaskFilter {
  __type?: "DataRepositoryTaskFilter";
  /**
   * <p>Name of the task property to use in filtering the tasks returned in the response.</p>
   *         <ul>
   *             <li>
   *                <p>Use <code>file-system-id</code> to retrieve data repository tasks for specific file systems.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>task-lifecycle</code> to retrieve data repository tasks with one or more specific lifecycle states,
   *                 as follows: CANCELED, EXECUTING, FAILED, PENDING, and SUCCEEDED.</p>
   *             </li>
   *          </ul>
   */
  Name?: DataRepositoryTaskFilterName | string;

  /**
   * <p>Use Values to include the specific file system IDs and task
   *             lifecycle states for the filters you are using.</p>
   */
  Values?: Array<string>;
}

export namespace DataRepositoryTaskFilter {
  export function isa(o: any): o is DataRepositoryTaskFilter {
    return __isa(o, "DataRepositoryTaskFilter");
  }
}

export enum DataRepositoryTaskFilterName {
  FILE_SYSTEM_ID = "file-system-id",
  TASK_LIFECYCLE = "task-lifecycle"
}

export enum DataRepositoryTaskLifecycle {
  CANCELED = "CANCELED",
  CANCELING = "CANCELING",
  EXECUTING = "EXECUTING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>The data repository task or tasks you specified could not be found.</p>
 */
export interface DataRepositoryTaskNotFound
  extends __SmithyException,
    $MetadataBearer {
  name: "DataRepositoryTaskNotFound";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryTaskNotFound {
  export function isa(o: any): o is DataRepositoryTaskNotFound {
    return __isa(o, "DataRepositoryTaskNotFound");
  }
}

/**
 * <p>Provides the task status showing a running total of the total number of files to be processed,
 *             the number successfully processed, and the number of files the task failed to process.</p>
 */
export interface DataRepositoryTaskStatus {
  __type?: "DataRepositoryTaskStatus";
  /**
   * <p>A running total of the number of files that the task failed to process.</p>
   */
  FailedCount?: number;

  /**
   * <p>The time at which the task status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A running total of the number of files that the task has successfully processed.</p>
   */
  SucceededCount?: number;

  /**
   * <p>The total number of files that the task will process. While a task is executing, the sum of
   *             <code>SucceededCount</code> plus <code>FailedCount</code> may not equal <code>TotalCount</code>. When the task is complete,
   *             <code>TotalCount</code> equals the sum of <code>SucceededCount</code> plus <code>FailedCount</code>.</p>
   */
  TotalCount?: number;
}

export namespace DataRepositoryTaskStatus {
  export function isa(o: any): o is DataRepositoryTaskStatus {
    return __isa(o, "DataRepositoryTaskStatus");
  }
}

export enum DataRepositoryTaskType {
  EXPORT = "EXPORT_TO_REPOSITORY"
}

/**
 * <p>The request object for <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupRequest {
  __type?: "DeleteBackupRequest";
  /**
   * <p>The ID of the backup you want to delete.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This is automatically filled on your behalf when using the AWS CLI
   *             or SDK.</p>
   */
  ClientRequestToken?: string;
}

export namespace DeleteBackupRequest {
  export function isa(o: any): o is DeleteBackupRequest {
    return __isa(o, "DeleteBackupRequest");
  }
}

/**
 * <p>The response object for <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupResponse {
  __type?: "DeleteBackupResponse";
  /**
   * <p>The ID of the backup deleted.</p>
   */
  BackupId?: string;

  /**
   * <p>The lifecycle of the backup. Should be <code>DELETED</code>.</p>
   */
  Lifecycle?: BackupLifecycle | string;
}

export namespace DeleteBackupResponse {
  export function isa(o: any): o is DeleteBackupResponse {
    return __isa(o, "DeleteBackupResponse");
  }
}

/**
 * <p>The request object for <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemRequest {
  __type?: "DeleteFileSystemRequest";
  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This is automatically filled on your behalf when using the AWS CLI
   *             or SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the file system you want to delete.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The configuration object for the Microsoft Windows file system used in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;
}

export namespace DeleteFileSystemRequest {
  export function isa(o: any): o is DeleteFileSystemRequest {
    return __isa(o, "DeleteFileSystemRequest");
  }
}

/**
 * <p>The response object for the <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemResponse {
  __type?: "DeleteFileSystemResponse";
  /**
   * <p>The ID of the file system being deleted.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The file system lifecycle for the deletion request. Should be
   *             <code>DELETING</code>.</p>
   */
  Lifecycle?: FileSystemLifecycle | string;

  /**
   * <p>The response object for the Microsoft Windows file system used in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  WindowsResponse?: DeleteFileSystemWindowsResponse;
}

export namespace DeleteFileSystemResponse {
  export function isa(o: any): o is DeleteFileSystemResponse {
    return __isa(o, "DeleteFileSystemResponse");
  }
}

/**
 * <p>The configuration object for the Microsoft Windows file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemWindowsConfiguration {
  __type?: "DeleteFileSystemWindowsConfiguration";
  /**
   * <p>A set of tags for your final backup.</p>
   */
  FinalBackupTags?: Array<Tag>;

  /**
   * <p>By default, Amazon FSx for Windows takes a final backup on your behalf when the
   *                 <code>DeleteFileSystem</code> operation is invoked. Doing this helps protect you
   *             from data loss, and we highly recommend taking the final backup. If you want to skip
   *             this backup, use this flag to do so.</p>
   */
  SkipFinalBackup?: boolean;
}

export namespace DeleteFileSystemWindowsConfiguration {
  export function isa(o: any): o is DeleteFileSystemWindowsConfiguration {
    return __isa(o, "DeleteFileSystemWindowsConfiguration");
  }
}

/**
 * <p>The response object for the Microsoft Windows file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemWindowsResponse {
  __type?: "DeleteFileSystemWindowsResponse";
  /**
   * <p>The ID of the final backup for this file system.</p>
   */
  FinalBackupId?: string;

  /**
   * <p>The set of tags applied to the final backup.</p>
   */
  FinalBackupTags?: Array<Tag>;
}

export namespace DeleteFileSystemWindowsResponse {
  export function isa(o: any): o is DeleteFileSystemWindowsResponse {
    return __isa(o, "DeleteFileSystemWindowsResponse");
  }
}

/**
 * <p>The request object for <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsRequest {
  __type?: "DescribeBackupsRequest";
  /**
   * <p>(Optional) IDs of the backups you want to retrieve (String). This overrides any
   *             filters. If any IDs are not found, BackupNotFound will be thrown.</p>
   */
  BackupIds?: Array<string>;

  /**
   * <p>(Optional) Filters structure. Supported names are file-system-id and
   *             backup-type.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>(Optional) Maximum number of backups to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous
   *                 <code>DescribeBackups</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeBackupsRequest {
  export function isa(o: any): o is DescribeBackupsRequest {
    return __isa(o, "DescribeBackupsRequest");
  }
}

/**
 * <p>Response object for <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsResponse {
  __type?: "DescribeBackupsResponse";
  /**
   * <p>Any array of backups.</p>
   */
  Backups?: Array<Backup>;

  /**
   * <p>This is present if there are more backups than returned in the response (String).
   *             You can use the <code>NextToken</code> value in the later request to fetch the backups.
   *         </p>
   */
  NextToken?: string;
}

export namespace DescribeBackupsResponse {
  export function isa(o: any): o is DescribeBackupsResponse {
    return __isa(o, "DescribeBackupsResponse");
  }
}

export interface DescribeDataRepositoryTasksRequest {
  __type?: "DescribeDataRepositoryTasksRequest";
  /**
   * <p>(Optional) You can use filters to narrow the <code>DescribeDataRepositoryTasks</code> response to
   *             include just tasks for specific file systems, or tasks in a specific lifecycle state.</p>
   */
  Filters?: Array<DataRepositoryTaskFilter>;

  /**
   * <p>The maximum number of resources to return in the response. This value must be an
   *             integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) IDs of the tasks whose descriptions you want to retrieve
   *             (String).</p>
   */
  TaskIds?: Array<string>;
}

export namespace DescribeDataRepositoryTasksRequest {
  export function isa(o: any): o is DescribeDataRepositoryTasksRequest {
    return __isa(o, "DescribeDataRepositoryTasksRequest");
  }
}

export interface DescribeDataRepositoryTasksResponse {
  __type?: "DescribeDataRepositoryTasksResponse";
  /**
   * <p>The collection of data repository task descriptions returned.</p>
   */
  DataRepositoryTasks?: Array<DataRepositoryTask>;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeDataRepositoryTasksResponse {
  export function isa(o: any): o is DescribeDataRepositoryTasksResponse {
    return __isa(o, "DescribeDataRepositoryTasksResponse");
  }
}

/**
 * <p>The request object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsRequest {
  __type?: "DescribeFileSystemsRequest";
  /**
   * <p>(Optional) IDs of the file systems whose descriptions you want to retrieve
   *             (String).</p>
   */
  FileSystemIds?: Array<string>;

  /**
   * <p>(Optional) Maximum number of file systems to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous
   *                 <code>DescribeFileSystems</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeFileSystemsRequest {
  export function isa(o: any): o is DescribeFileSystemsRequest {
    return __isa(o, "DescribeFileSystemsRequest");
  }
}

/**
 * <p>The response object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsResponse {
  __type?: "DescribeFileSystemsResponse";
  /**
   * <p>An array of file system descriptions.</p>
   */
  FileSystems?: Array<FileSystem>;

  /**
   * <p>Present if there are more file systems than returned in the response (String). You
   *             can use the <code>NextToken</code> value in the later request to fetch the
   *             descriptions. </p>
   */
  NextToken?: string;
}

export namespace DescribeFileSystemsResponse {
  export function isa(o: any): o is DescribeFileSystemsResponse {
    return __isa(o, "DescribeFileSystemsResponse");
  }
}

/**
 * <p>A description of a specific Amazon FSx file system.</p>
 */
export interface FileSystem {
  __type?: "FileSystem";
  /**
   * <p>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The DNS name for the file system.</p>
   */
  DNSName?: string;

  /**
   * <p>A structure providing details of any failures that occur when creating the file system
   *             has failed.</p>
   */
  FailureDetails?: FileSystemFailureDetails;

  /**
   * <p>The system-generated, unique 17-digit ID of the file system.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The type of Amazon FSx file system, either <code>LUSTRE</code> or <code>WINDOWS</code>.</p>
   */
  FileSystemType?: FileSystemType | string;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file
   *             system's data for an Amazon FSx for Windows File Server file system.
   *             Amazon FSx for Lustre does not support KMS encryption. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The lifecycle status of the file system, following are the possible values and what they mean:</p>
   *             <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The file system is in a healthy state, and is reachable and available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon FSx is creating the new file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Amazon FSx is deleting an existing file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - An existing file system has experienced an unrecoverable failure.
   *                     When creating a new file system, Amazon FSx was unable to create the file system.</p>
   *             </li>
   *             <li>
   *                     <p>
   *                   <code>MISCONFIGURED</code> indicates that the file system is in a failed but recoverable state.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>UPDATING</code> indicates that the file system is undergoing a customer initiated update.</p>
   *                 </li>
   *          </ul>
   */
  Lifecycle?: FileSystemLifecycle | string;

  /**
   * <p>The configuration for the Amazon FSx for Lustre file system.</p>
   */
  LustreConfiguration?: LustreFileSystemConfiguration;

  /**
   * <p>The IDs of the elastic network interface from which a specific file system is
   *             accessible. The elastic network interface is automatically created in the same VPC that
   *             the Amazon FSx file system was created in. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network
   *                 Interfaces</a> in the <i>Amazon EC2 User Guide.</i>
   *          </p>
   *
   *         <p>For an Amazon FSx for Windows File Server file system, you can have one network
   *             interface ID. For an Amazon FSx for Lustre file system, you can have more than
   *             one.</p>
   */
  NetworkInterfaceIds?: Array<string>;

  /**
   * <p>The AWS account that created the file system. If the file system was created by an AWS
   *             Identity and Access Management (IAM) user, the AWS account to which the IAM user belongs
   *             is the owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the file system resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The storage capacity of the file system in gigabytes (GB).</p>
   */
  StorageCapacity?: number;

  /**
   * <p>The ID of the subnet to contain the endpoint for the file system. One and only one is
   *             supported. The file system is launched in the Availability Zone associated with this
   *             subnet.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The tags to associate with the file system. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your
   *                 Amazon EC2 Resources</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The ID of the primary VPC for the file system.</p>
   */
  VpcId?: string;

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: WindowsFileSystemConfiguration;
}

export namespace FileSystem {
  export function isa(o: any): o is FileSystem {
    return __isa(o, "FileSystem");
  }
}

/**
 * <p>A structure providing details of any failures that occur when creating the file system
 *             has failed.</p>
 */
export interface FileSystemFailureDetails {
  __type?: "FileSystemFailureDetails";
  /**
   * <p>A message describing any failures that occurred during file system creation.</p>
   */
  Message?: string;
}

export namespace FileSystemFailureDetails {
  export function isa(o: any): o is FileSystemFailureDetails {
    return __isa(o, "FileSystemFailureDetails");
  }
}

export enum FileSystemLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MISCONFIGURED = "MISCONFIGURED",
  UPDATING = "UPDATING"
}

export enum FileSystemMaintenanceOperation {
  BACKING_UP = "BACKING_UP",
  PATCHING = "PATCHING"
}

/**
 * <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 */
export interface FileSystemNotFound extends __SmithyException, $MetadataBearer {
  name: "FileSystemNotFound";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace FileSystemNotFound {
  export function isa(o: any): o is FileSystemNotFound {
    return __isa(o, "FileSystemNotFound");
  }
}

export enum FileSystemType {
  LUSTRE = "LUSTRE",
  WINDOWS = "WINDOWS"
}

/**
 * <p>A filter used to restrict the results of describe calls. You can use multiple
 *             filters to return results that meet all applied filter requirements.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The name for this filter.</p>
   */
  Name?: FilterName | string;

  /**
   * <p>The values of the filter. These are all the values for any of the applied
   *             filters.</p>
   */
  Values?: Array<string>;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return __isa(o, "Filter");
  }
}

export enum FilterName {
  BACKUP_TYPE = "backup-type",
  FILE_SYSTEM_ID = "file-system-id"
}

/**
 * <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 */
export interface IncompatibleParameterError
  extends __SmithyException,
    $MetadataBearer {
  name: "IncompatibleParameterError";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>A parameter that is incompatible with the earlier request.</p>
   */
  Parameter: string | undefined;
}

export namespace IncompatibleParameterError {
  export function isa(o: any): o is IncompatibleParameterError {
    return __isa(o, "IncompatibleParameterError");
  }
}

/**
 * <p>A generic error indicating a server-side failure.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InternalServerError {
  export function isa(o: any): o is InternalServerError {
    return __isa(o, "InternalServerError");
  }
}

/**
 * <p>The path provided for data repository export isn't valid.</p>
 */
export interface InvalidExportPath extends __SmithyException, $MetadataBearer {
  name: "InvalidExportPath";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InvalidExportPath {
  export function isa(o: any): o is InvalidExportPath {
    return __isa(o, "InvalidExportPath");
  }
}

/**
 * <p>The path provided for data repository import isn't valid.</p>
 */
export interface InvalidImportPath extends __SmithyException, $MetadataBearer {
  name: "InvalidImportPath";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InvalidImportPath {
  export function isa(o: any): o is InvalidImportPath {
    return __isa(o, "InvalidImportPath");
  }
}

/**
 * <p>One or more network settings specified in the request are invalid.
 *                 <code>InvalidVpcId</code> means that the ID passed for the virtual private cloud
 *             (VPC) is invalid. <code>InvalidSubnetIds</code> returns the list of IDs for subnets that
 *             are either invalid or not part of the VPC specified.
 *                 <code>InvalidSecurityGroupIds</code> returns the list of IDs for security groups
 *             that are either invalid or not part of the VPC specified.</p>
 */
export interface InvalidNetworkSettings
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNetworkSettings";
  $fault: "client";
  /**
   * <p>The ID of your Amazon EC2 security group. This ID is used to control network access
   *             to the endpoint that Amazon FSx creates on your behalf in each subnet. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security
   *                 Groups for Linux Instances</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   */
  InvalidSecurityGroupId?: string;

  /**
   * <p>The ID for a subnet. A <i>subnet</i> is a range of IP addresses in
   *             your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the
   *                 <i>Amazon VPC User Guide.</i>
   *          </p>
   */
  InvalidSubnetId?: string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InvalidNetworkSettings {
  export function isa(o: any): o is InvalidNetworkSettings {
    return __isa(o, "InvalidNetworkSettings");
  }
}

/**
 * <p>The request object for <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>(Optional) Maximum number of tags to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous
   *                 <code>ListTagsForResource</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of the Amazon FSx resource that will have its tags listed.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

/**
 * <p>The response object for <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>This is present if there are more tags than returned in the response (String). You
   *             can use the <code>NextToken</code> value in the later request to fetch the tags.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>A list of tags on the resource.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>The configuration for the Amazon FSx for Lustre file system.</p>
 */
export interface LustreFileSystemConfiguration {
  __type?: "LustreFileSystemConfiguration";
  /**
   * <p>The data repository configuration object for Lustre file systems returned in the response of
   *             the <code>CreateFileSystem</code> operation.</p>
   */
  DataRepositoryConfiguration?: DataRepositoryConfiguration;

  /**
   * <p>The UTC time that you want to begin your weekly maintenance window.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace LustreFileSystemConfiguration {
  export function isa(o: any): o is LustreFileSystemConfiguration {
    return __isa(o, "LustreFileSystemConfiguration");
  }
}

/**
 * <p>File system configuration is required for this operation.</p>
 */
export interface MissingFileSystemConfiguration
  extends __SmithyException,
    $MetadataBearer {
  name: "MissingFileSystemConfiguration";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace MissingFileSystemConfiguration {
  export function isa(o: any): o is MissingFileSystemConfiguration {
    return __isa(o, "MissingFileSystemConfiguration");
  }
}

/**
 * <p>The resource specified for the tagging operation is not a resource type owned by
 *             Amazon FSx. Use the API of the relevant service to perform the operation. </p>
 */
export interface NotServiceResourceError
  extends __SmithyException,
    $MetadataBearer {
  name: "NotServiceResourceError";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the non-Amazon FSx resource.</p>
   */
  ResourceARN: string | undefined;
}

export namespace NotServiceResourceError {
  export function isa(o: any): o is NotServiceResourceError {
    return __isa(o, "NotServiceResourceError");
  }
}

export enum ReportFormat {
  REPORT_CSV_20191124 = "REPORT_CSV_20191124"
}

export enum ReportScope {
  FAILED_FILES_ONLY = "FAILED_FILES_ONLY"
}

/**
 * <p>The resource specified does not support tagging. </p>
 */
export interface ResourceDoesNotSupportTagging
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceDoesNotSupportTagging";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that doesn't support
   *             tagging.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ResourceDoesNotSupportTagging {
  export function isa(o: any): o is ResourceDoesNotSupportTagging {
    return __isa(o, "ResourceDoesNotSupportTagging");
  }
}

/**
 * <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
 */
export interface ResourceNotFound extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFound";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The resource ARN of the resource that can't be found.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ResourceNotFound {
  export function isa(o: any): o is ResourceNotFound {
    return __isa(o, "ResourceNotFound");
  }
}

/**
 * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
 *             which the Windows File Server instance is joined.</p>
 */
export interface SelfManagedActiveDirectoryAttributes {
  __type?: "SelfManagedActiveDirectoryAttributes";
  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory.</p>
   */
  DnsIps?: Array<string>;

  /**
   * <p>The fully qualified domain name of the self-managed AD directory.</p>
   */
  DomainName?: string;

  /**
   * <p>The name of the domain group whose members have administrative privileges for the FSx
   *             file system.</p>
   */
  FileSystemAdministratorsGroup?: string;

  /**
   * <p>The fully qualified distinguished name of the organizational unit within the
   *             self-managed AD directory to which the Windows File Server instance is joined.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * <p>The user name for the service account on your self-managed AD domain that FSx uses to
   *             join to your AD domain.</p>
   */
  UserName?: string;
}

export namespace SelfManagedActiveDirectoryAttributes {
  export function isa(o: any): o is SelfManagedActiveDirectoryAttributes {
    return __isa(o, "SelfManagedActiveDirectoryAttributes");
  }
}

/**
 * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to
 *             your self-managed (including on-premises) Microsoft Active Directory (AD)
 *             directory.</p>
 */
export interface SelfManagedActiveDirectoryConfiguration {
  __type?: "SelfManagedActiveDirectoryConfiguration";
  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory. The IP addresses need to be either in the same VPC CIDR range
   *             as the one in which your Amazon FSx file system is being created, or in the private IP version 4
   *             (IPv4) address ranges, as specified in <a href="http://www.faqs.org/rfcs/rfc1918.html">RFC 1918</a>:</p>
   *         <ul>
   *             <li>
   *                 <p>10.0.0.0 - 10.255.255.255 (10/8 prefix)</p>
   *             </li>
   *             <li>
   *                 <p>172.16.0.0 - 172.31.255.255 (172.16/12 prefix)</p>
   *             </li>
   *             <li>
   *                 <p>192.168.0.0 - 192.168.255.255 (192.168/16 prefix)</p>
   *             </li>
   *          </ul>
   */
  DnsIps: Array<string> | undefined;

  /**
   * <p>The fully qualified domain name of the self-managed AD directory, such as
   *                 <code>corp.example.com</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>(Optional) The name of the domain group whose members are granted administrative
   *             privileges for the file system. Administrative privileges include taking ownership of
   *             files and folders, setting audit controls (audit ACLs) on files and folders, and
   *                 administering the file system remotely by using the FSx Remote PowerShell.
   *             The group that you specify must already exist in your domain. If you don't provide one,
   *             your AD domain's Domain Admins group is used.</p>
   */
  FileSystemAdministratorsGroup?: string;

  /**
   * <p>(Optional) The fully qualified distinguished name of the organizational unit within
   *             your self-managed AD directory that the Windows File Server instance will join. Amazon
   *             FSx only accepts OU as the direct parent of the file system. An example is
   *                 <code>OU=FSx,DC=yourdomain,DC=corp,DC=com</code>. To learn more, see <a href="https://tools.ietf.org/html/rfc2253">RFC 2253</a>. If none is provided, the
   *             FSx file system is created in the default location of your self-managed AD directory. </p>
   *         <important>
   *             <p>Only Organizational Unit (OU) objects can be the direct parent of the file system
   *                 that you're creating.</p>
   *         </important>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * <p>The password for the service account on your self-managed AD domain that Amazon FSx
   *             will use to join to your AD domain.</p>
   */
  Password: string | undefined;

  /**
   * <p>The user name for the service account on your self-managed AD domain that Amazon FSx
   *             will use to join to your AD domain. This account must have the permission to join
   *             computers to the domain in the organizational unit provided in
   *                 <code>OrganizationalUnitDistinguishedName</code>, or in the default location of your
   *             AD domain.</p>
   */
  UserName: string | undefined;
}

export namespace SelfManagedActiveDirectoryConfiguration {
  export function isa(o: any): o is SelfManagedActiveDirectoryConfiguration {
    return __isa(o, "SelfManagedActiveDirectoryConfiguration");
  }
}

/**
 * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to the
 *             self-managed Microsoft Active Directory (AD) directory.</p>
 */
export interface SelfManagedActiveDirectoryConfigurationUpdates {
  __type?: "SelfManagedActiveDirectoryConfigurationUpdates";
  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory.</p>
   */
  DnsIps?: Array<string>;

  /**
   * <p>The password for the service account on your self-managed AD domain that Amazon FSx will use to join to
   *             your AD domain.</p>
   */
  Password?: string;

  /**
   * <p>The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to
   *             your AD domain. This account must have the permission to join
   *             computers to the domain in the organizational unit provided in
   *             <code>OrganizationalUnitDistinguishedName</code>.</p>
   */
  UserName?: string;
}

export namespace SelfManagedActiveDirectoryConfigurationUpdates {
  export function isa(
    o: any
  ): o is SelfManagedActiveDirectoryConfigurationUpdates {
    return __isa(o, "SelfManagedActiveDirectoryConfigurationUpdates");
  }
}

export enum ServiceLimit {
  FILE_SYSTEM_COUNT = "FILE_SYSTEM_COUNT",
  TOTAL_STORAGE = "TOTAL_STORAGE",
  TOTAL_THROUGHPUT_CAPACITY = "TOTAL_THROUGHPUT_CAPACITY",
  TOTAL_USER_INITIATED_BACKUPS = "TOTAL_USER_INITIATED_BACKUPS"
}

/**
 * <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting AWS Support.
 *             </p>
 */
export interface ServiceLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceLimitExceeded";
  $fault: "client";
  /**
   * <p>Enumeration of the service limit that was exceeded. </p>
   */
  Limit: ServiceLimit | string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace ServiceLimitExceeded {
  export function isa(o: any): o is ServiceLimitExceeded {
    return __isa(o, "ServiceLimitExceeded");
  }
}

/**
 * <p>Specifies a key-value pair for a resource tag.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A value that specifies the <code>TagKey</code>, the name of the tag. Tag keys must
   *             be unique for the resource to which they are attached.</p>
   */
  Key?: string;

  /**
   * <p>A value that specifies the <code>TagValue</code>, the value assigned to the
   *             corresponding tag key. Tag values can be null and don't have to be unique in a tag set.
   *             For example, you can have a key-value pair in a tag set of <code>finances : April</code>
   *             and also of <code>payroll : April</code>.</p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p>The request object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to
   *             tag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags for the resource. If a tag with a given key already exists, the
   *             value is replaced by the one specified in this parameter.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

/**
 * <p>The response object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>The requested operation is not supported for this resource or API.</p>
 */
export interface UnsupportedOperation
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOperation";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace UnsupportedOperation {
  export function isa(o: any): o is UnsupportedOperation {
    return __isa(o, "UnsupportedOperation");
  }
}

/**
 * <p>The request object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the Amazon FSx resource to untag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of keys of tags on the resource to untag. In case the tag key doesn't exist,
   *             the call will still succeed to be idempotent.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

/**
 * <p>The response object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

/**
 * <p>The configuration object for Amazon FSx for Lustre file systems used in the
 *                 <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemLustreConfiguration {
  __type?: "UpdateFileSystemLustreConfiguration";
  /**
   * <p>The preferred time to perform weekly maintenance, in the UTC time zone.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace UpdateFileSystemLustreConfiguration {
  export function isa(o: any): o is UpdateFileSystemLustreConfiguration {
    return __isa(o, "UpdateFileSystemLustreConfiguration");
  }
}

/**
 * <p>The request object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemRequest {
  __type?: "UpdateFileSystemRequest";
  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *           idempotent updates. This string is automatically filled on your behalf when you use the AWS
   *           Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The configuration object for Amazon FSx for Lustre file systems used in the
   *                 <code>UpdateFileSystem</code> operation.</p>
   */
  LustreConfiguration?: UpdateFileSystemLustreConfiguration;

  /**
   * <p>The configuration update for this Microsoft Windows file system. The only supported options
   *       are for backup and maintenance and for self-managed Active Directory configuration.</p>
   */
  WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;
}

export namespace UpdateFileSystemRequest {
  export function isa(o: any): o is UpdateFileSystemRequest {
    return __isa(o, "UpdateFileSystemRequest");
  }
}

/**
 * <p>The response object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemResponse {
  __type?: "UpdateFileSystemResponse";
  /**
   * <p>A description of the file system that was updated.</p>
   */
  FileSystem?: FileSystem;
}

export namespace UpdateFileSystemResponse {
  export function isa(o: any): o is UpdateFileSystemResponse {
    return __isa(o, "UpdateFileSystemResponse");
  }
}

/**
 * <p>Updates the Microsoft Windows configuration for an existing Amazon FSx for Windows
 *             File Server file system. Amazon FSx overwrites existing properties with non-null values
 *             provided in the request. If you don't specify a non-null value for a property, that
 *             property is not updated.</p>
 */
export interface UpdateFileSystemWindowsConfiguration {
  __type?: "UpdateFileSystemWindowsConfiguration";
  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables automatic
   *             backups. You can retain automatic backups for a maximum of 35 days.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>The preferred time to take daily automatic backups, in the UTC time zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The configuration Amazon FSx uses to join the Windows File Server instance to the
   *             self-managed Microsoft AD directory.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;

  /**
   * <p>The preferred time to perform weekly maintenance, in the UTC time zone.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace UpdateFileSystemWindowsConfiguration {
  export function isa(o: any): o is UpdateFileSystemWindowsConfiguration {
    return __isa(o, "UpdateFileSystemWindowsConfiguration");
  }
}

export enum WindowsDeploymentType {
  MULTI_AZ_1 = "MULTI_AZ_1",
  SINGLE_AZ_1 = "SINGLE_AZ_1"
}

/**
 * <p>The configuration for this Microsoft Windows file system.</p>
 */
export interface WindowsFileSystemConfiguration {
  __type?: "WindowsFileSystemConfiguration";
  /**
   * <p>The ID for an existing Microsoft Active Directory instance that the file system should join when
   *             it's created.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables automatic
   *             backups. You can retain automatic backups for a maximum of 35 days.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A boolean flag indicating whether tags on the file system should be copied to backups.
   *             This value defaults to false. If it's set to true, all tags on the file system are
   *             copied to all automatic backups and any user-initiated backups where the user
   *             doesn't specify any tags. If this value is true, and you specify one or more tags,
   *             only the specified tags are copied to backups.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>The preferred time to take daily automatic backups, in the UTC time zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>Specifies the file system deployment type, valid values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>MULTI_AZ_1</code> - Specifies a high availability file system that is configured for Multi-AZ
   *                     redundancy to tolerate temporary Availability Zone (AZ) unavailability.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SINGLE_AZ_1</code> - (Default) Specifies a file system that is configured for single AZ redundancy.</p>
   *             </li>
   *          </ul>
   */
  DeploymentType?: WindowsDeploymentType | string;

  /**
   * <p>The list of maintenance operations in progress for this file system.</p>
   */
  MaintenanceOperationsInProgress?: Array<
    FileSystemMaintenanceOperation | string
  >;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, the IP address of the primary, or preferred, file server.</p>
   *         <p>Use this IP address when mounting the file system on Linux SMB clients or Windows SMB clients that
   *             are not joined to a Microsoft Active Directory.
   *             Applicable for both <code>SINGLE_AZ_1</code> and <code>MULTI_AZ_1</code> deployment types.
   *             This IP address is temporarily unavailable
   *             when the file system is undergoing maintenance. For Linux and Windows
   *             SMB clients that are joined to an Active Directory, use the file system's DNSName instead. For more information
   *             and instruction on mapping and mounting file shares, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/accessing-file-shares.html">https://docs.aws.amazon.com/fsx/latest/WindowsGuide/accessing-file-shares.html</a>.</p>
   */
  PreferredFileServerIp?: string;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, it specifies the ID of the subnet where the preferred file server is located.
   *             Must be one of the two subnet IDs specified in <code>SubnetIds</code> property.
   *             Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server.</p>
   *            <p>For <code>SINGLE_AZ_1</code> deployment types, this value is the same as that for <code>SubnetIDs</code>.</p>
   */
  PreferredSubnetId?: string;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, use this endpoint when performing administrative tasks on the file system using
   *             Amazon FSx Remote PowerShell.</p>
   *         <p>For <code>SINGLE_AZ_1</code> deployment types, this is the DNS name of the file system.</p>
   *         <p>This endpoint is temporarily unavailable
   *             when the file system is undergoing maintenance.</p>
   */
  RemoteAdministrationEndpoint?: string;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
   *             which the Windows File Server instance is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;

  /**
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per
   *             second.</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>The preferred time to perform weekly maintenance, in the UTC time zone.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace WindowsFileSystemConfiguration {
  export function isa(o: any): o is WindowsFileSystemConfiguration {
    return __isa(o, "WindowsFileSystemConfiguration");
  }
}
