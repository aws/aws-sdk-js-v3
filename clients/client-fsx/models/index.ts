import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
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
  export const filterSensitiveLog = (obj: ActiveDirectoryBackupAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ActiveDirectoryBackupAttributes => __isa(o, "ActiveDirectoryBackupAttributes");
}

/**
 * <p>An Active Directory error.</p>
 */
export interface ActiveDirectoryError extends __SmithyException, $MetadataBearer {
  name: "ActiveDirectoryError";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The directory ID of the directory that an error pertains to.</p>
   */
  ActiveDirectoryId: string | undefined;

  /**
   * <p>The type of Active Directory error.</p>
   */
  Type?: ActiveDirectoryErrorType | string;
}

export namespace ActiveDirectoryError {
  export const filterSensitiveLog = (obj: ActiveDirectoryError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ActiveDirectoryError => __isa(o, "ActiveDirectoryError");
}

export enum ActiveDirectoryErrorType {
  DOMAIN_NOT_FOUND = "DOMAIN_NOT_FOUND",
  INCOMPATIBLE_DOMAIN_MODE = "INCOMPATIBLE_DOMAIN_MODE",
  INVALID_DOMAIN_STAGE = "INVALID_DOMAIN_STAGE",
  WRONG_VPC = "WRONG_VPC",
}

/**
 * <p>Describes a specific Amazon FSx Administrative Action for the current Windows file system.</p>
 */
export interface AdministrativeAction {
  __type?: "AdministrativeAction";
  /**
   * <p>Time that the administrative action request was received.</p>
   */
  RequestTime?: Date;

  /**
   * <p>Describes the target <code>StorageCapacity</code> or <code>ThroughputCapacity</code> value
   *             provided in the <code>UpdateFileSystem</code> operation.
   *            Returned for  <code>FILE_SYSTEM_UPDATE</code> administrative actions.
   *          </p>
   */
  TargetFileSystemValues?: FileSystem;

  /**
   * <p>Provides the percent complete of a <code>STORAGE_OPTIMIZATION</code> administrative action.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>Provides information about a failed administrative action.</p>
   */
  FailureDetails?: AdministrativeActionFailureDetails;

  /**
   * <p>Describes the type of administrative action, as follows:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated by the user from the
   *                     Amazon FSx console, API (UpdateFileSystem), or CLI (update-file-system). A</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STORAGE_OPTIMIZATION</code> - Once the <code>FILE_SYSTEM_UPDATE</code>
   *                     task to increase a file system's storage capacity completes successfully, a
   *                     <code>STORAGE_OPTIMIZATION</code> task starts. Storage optimization is the process
   *                     of migrating the file system data to the new, larger disks. You can track the
   *                     storage migration progress using the <code>ProgressPercent</code> property. When
   *                     <code>STORAGE_OPTIMIZATION</code> completes successfully, the parent <code>FILE_SYSTEM_UPDATE</code>
   *                     action status changes to <code>COMPLETED</code>. For more information, see
   *                     <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing Storage Capacity</a>.
   *                     </p>
   *             </li>
   *          </ul>
   */
  AdministrativeActionType?: AdministrativeActionType | string;

  /**
   * <p>Describes the status of the administrative action, as follows:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Amazon FSx failed to process the administrative action successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Amazon FSx is processing the administrative action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon FSx is waiting to process the administrative action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - Amazon FSx has finished processing the administrative task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATED_OPTIMIZING</code> - For a storage capacity increase update, Amazon FSx has updated the file system
   *                 with the new storage capacity, and is now performing the storage optimization process.
   *                 For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing Storage Capacity</a>.</p>
   *             </li>
   *          </ul>
   */
  Status?: Status | string;
}

export namespace AdministrativeAction {
  export const filterSensitiveLog = (obj: AdministrativeAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AdministrativeAction => __isa(o, "AdministrativeAction");
}

/**
 * <p>Provides information about a failed administrative action.</p>
 */
export interface AdministrativeActionFailureDetails {
  __type?: "AdministrativeActionFailureDetails";
  /**
   * <p>Error message providing details about the failure.</p>
   */
  Message?: string;
}

export namespace AdministrativeActionFailureDetails {
  export const filterSensitiveLog = (obj: AdministrativeActionFailureDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AdministrativeActionFailureDetails =>
    __isa(o, "AdministrativeActionFailureDetails");
}

export enum AdministrativeActionType {
  FILE_SYSTEM_UPDATE = "FILE_SYSTEM_UPDATE",
  STORAGE_OPTIMIZATION = "STORAGE_OPTIMIZATION",
}

export enum AutoImportPolicyType {
  NEW = "NEW",
  NEW_CHANGED = "NEW_CHANGED",
  NONE = "NONE",
}

/**
 * <p>A backup of an Amazon FSx for file system.</p>
 */
export interface Backup {
  __type?: "Backup";
  /**
   * <p>The time when a particular backup was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ID of the backup.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>Details explaining any failures that occur when creating a backup.</p>
   */
  FailureDetails?: BackupFailureDetails;

  /**
   * <p>The current percent of progress of an asynchronous task.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>Tags associated with a particular file system.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) for the backup resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The type of the file system backup.</p>
   */
  Type: BackupType | string | undefined;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key used to encrypt this
   *               backup of the Amazon FSx for Windows file system's data at rest.
   *               Amazon FSx for Lustre does not support KMS encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) to which the Windows File Server instance is joined.</p>
   */
  DirectoryInformation?: ActiveDirectoryBackupAttributes;

  /**
   * <p>The lifecycle status of the backup.</p>
   */
  Lifecycle: BackupLifecycle | string | undefined;

  /**
   * <p>Metadata of the file system associated with the backup. This metadata is persisted
   *             even if the file system is deleted.</p>
   */
  FileSystem: FileSystem | undefined;
}

export namespace Backup {
  export const filterSensitiveLog = (obj: Backup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Backup => __isa(o, "Backup");
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
  export const filterSensitiveLog = (obj: BackupFailureDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BackupFailureDetails => __isa(o, "BackupFailureDetails");
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
  export const filterSensitiveLog = (obj: BackupInProgress): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BackupInProgress => __isa(o, "BackupInProgress");
}

export enum BackupLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  FAILED = "FAILED",
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
  export const filterSensitiveLog = (obj: BackupNotFound): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BackupNotFound => __isa(o, "BackupNotFound");
}

/**
 * <p>You can't delete a backup while it's being used to restore a file
 *             system.</p>
 */
export interface BackupRestoring extends __SmithyException, $MetadataBearer {
  name: "BackupRestoring";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID of a file system being restored from the backup.</p>
   */
  FileSystemId?: string;
}

export namespace BackupRestoring {
  export const filterSensitiveLog = (obj: BackupRestoring): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BackupRestoring => __isa(o, "BackupRestoring");
}

export enum BackupType {
  AUTOMATIC = "AUTOMATIC",
  USER_INITIATED = "USER_INITIATED",
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
  export const filterSensitiveLog = (obj: BadRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequest => __isa(o, "BadRequest");
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
  export const filterSensitiveLog = (obj: CancelDataRepositoryTaskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CancelDataRepositoryTaskRequest => __isa(o, "CancelDataRepositoryTaskRequest");
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
  export const filterSensitiveLog = (obj: CancelDataRepositoryTaskResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CancelDataRepositoryTaskResponse => __isa(o, "CancelDataRepositoryTaskResponse");
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
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the scope of the <code>CompletionReport</code>; <code>FAILED_FILES_ONLY</code> is the only scope currently supported.
   *             When <code>Scope</code> is set to <code>FAILED_FILES_ONLY</code>, the <code>CompletionReport</code> only contains information about files that the data repository task failed to process.</p>
   */
  Scope?: ReportScope | string;

  /**
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the location of the report on the file system's linked S3 data repository. An absolute path that defines where the completion report will be stored in the destination location.
   *             The <code>Path</code> you provide must be located within the file system’s ExportPath.
   *             An example <code>Path</code> value is "s3://myBucket/myExportPath/optionalPrefix". The report provides the following information for each file in the report:
   *             FilePath, FileStatus, and ErrorCode. To learn more about a file system's <code>ExportPath</code>, see .
   *             </p>
   */
  Path?: string;

  /**
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the format of the <code>CompletionReport</code>. <code>REPORT_CSV_20191124</code> is the only format currently supported.
   *             When <code>Format</code> is set to <code>REPORT_CSV_20191124</code>, the <code>CompletionReport</code> is provided in CSV format, and is delivered to
   *             <code>{path}/task-{id}/failures.csv</code>.
   *         </p>
   */
  Format?: ReportFormat | string;
}

export namespace CompletionReport {
  export const filterSensitiveLog = (obj: CompletionReport): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CompletionReport => __isa(o, "CompletionReport");
}

/**
 * <p>The request object for the <code>CreateBackup</code> operation.</p>
 */
export interface CreateBackupRequest {
  __type?: "CreateBackupRequest";
  /**
   * <p>The tags to apply to the backup at backup creation. The key value of the
   *             <code>Name</code> tag appears in the console as the backup name. If you have set <code>CopyTagsToBackups</code> to true, and
   *             you specify one or more tags using the <code>CreateBackup</code> action, no existing tags on the file system are copied from the file system to the backup.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the file system to back up.</p>
   */
  FileSystemId: string | undefined;
}

export namespace CreateBackupRequest {
  export const filterSensitiveLog = (obj: CreateBackupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateBackupRequest => __isa(o, "CreateBackupRequest");
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
  export const filterSensitiveLog = (obj: CreateBackupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateBackupResponse => __isa(o, "CreateBackupResponse");
}

export interface CreateDataRepositoryTaskRequest {
  __type?: "CreateDataRepositoryTaskRequest";
  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>(Optional) The path or paths on the Amazon FSx file system to use when the data repository task is processed.
   *             The default path is the file system root directory. The paths you provide need to be relative to the mount point of the file system.
   *             If the mount point is <code>/mnt/fsx</code> and <code>/mnt/fsx/path1</code> is a directory or
   *             file on the file system you want to export, then the path to provide is <code>path1</code>.
   *             If a path that you provide isn't valid, the task fails.</p>
   */
  Paths?: string[];

  /**
   * <p>Specifies the type of data repository task to create.</p>
   */
  Type: DataRepositoryTaskType | string | undefined;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the AWS
   *             Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Defines whether or not Amazon FSx provides a CompletionReport once the task has completed.
   *             A CompletionReport provides a detailed  report on the files that Amazon FSx processed that meet the criteria specified by the
   *             <code>Scope</code> parameter. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/task-completion-report.html">Working with Task Completion Reports</a>.</p>
   */
  Report: CompletionReport | undefined;
}

export namespace CreateDataRepositoryTaskRequest {
  export const filterSensitiveLog = (obj: CreateDataRepositoryTaskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDataRepositoryTaskRequest => __isa(o, "CreateDataRepositoryTaskRequest");
}

export interface CreateDataRepositoryTaskResponse {
  __type?: "CreateDataRepositoryTaskResponse";
  /**
   * <p>The description of the data repository task that you just created.</p>
   */
  DataRepositoryTask?: DataRepositoryTask;
}

export namespace CreateDataRepositoryTaskResponse {
  export const filterSensitiveLog = (obj: CreateDataRepositoryTaskResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDataRepositoryTaskResponse => __isa(o, "CreateDataRepositoryTaskResponse");
}

/**
 * <p>The request object for the <code>CreateFileSystemFromBackup</code>
 *             operation.</p>
 */
export interface CreateFileSystemFromBackupRequest {
  __type?: "CreateFileSystemFromBackupRequest";
  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to be applied to the file system at file system creation. The key value of
   *             the <code>Name</code> tag appears in the console as the file system
   *             name.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the IDs of the subnets that the file system will be accessible from. For Windows <code>MULTI_AZ_1</code>
   *             file system deployment types, provide exactly two subnet IDs, one for the preferred file server
   *             and one for the standby file server. You specify one of these subnets as the preferred subnet
   *             using the <code>WindowsConfiguration > PreferredSubnetID</code> property.</p>
   *         <p>For Windows <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment
   *             types and Lustre file systems, provide exactly one subnet ID.
   *             The file server is launched in that subnet's Availability Zone.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The Lustre configuration for the file system being created.
   *             </p>
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration;

  /**
   * <p>The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * <p>A list of IDs for the security groups that apply to the specified network
   *             interfaces created for file system access. These security groups apply to all network
   *             interfaces. This value isn't returned in later DescribeFileSystem requests.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Sets the storage type for the Windows file system you're creating from a backup.
   *             Valid values are <code>SSD</code> and <code>HDD</code>.</p>
   *         <ul>
   *             <li>
   *                <p>Set to <code>SSD</code> to use solid state drive storage.
   *                 Supported on all Windows deployment types.</p>
   *             </li>
   *             <li>
   *                <p>Set to <code>HDD</code> to use hard disk drive storage.
   *                 Supported on <code>SINGLE_AZ_2</code> and <code>MULTI_AZ_1</code> Windows file system deployment types.
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             Default value is <code>SSD</code>.
   *         </p>
   *         <note>
   *             <p>HDD and SSD storage types have different minimum storage capacity requirements.
   *             A restored file system's storage capacity is tied to the file system that was backed up.
   *             You can create a file system that uses HDD storage from a backup of a file system that
   *             used SSD storage only if the original SSD file system had a storage capacity of at least 2000 GiB.
   *         </p>
   *          </note>
   */
  StorageType?: StorageType | string;
}

export namespace CreateFileSystemFromBackupRequest {
  export const filterSensitiveLog = (obj: CreateFileSystemFromBackupRequest): any => ({
    ...obj,
    ...(obj.WindowsConfiguration && {
      WindowsConfiguration: CreateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }),
  });
  export const isa = (o: any): o is CreateFileSystemFromBackupRequest => __isa(o, "CreateFileSystemFromBackupRequest");
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
  export const filterSensitiveLog = (obj: CreateFileSystemFromBackupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFileSystemFromBackupResponse =>
    __isa(o, "CreateFileSystemFromBackupResponse");
}

/**
 * <p>The Lustre configuration for the file system being created.
 *             </p>
 */
export interface CreateFileSystemLustreConfiguration {
  __type?: "CreateFileSystemLustreConfiguration";
  /**
   * <p>
   *             Choose <code>SCRATCH_1</code> and <code>SCRATCH_2</code> deployment
   *             types when you need temporary storage and shorter-term processing of data.
   *             The <code>SCRATCH_2</code> deployment type provides in-transit encryption of data and higher burst
   *             throughput capacity than <code>SCRATCH_1</code>.</p>
   *
   *             <p>Choose <code>PERSISTENT_1</code> deployment type for longer-term storage
   *                 and workloads and encryption of data in transit. To learn more about deployment types, see
   *                 <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/lustre-deployment-types.html">
   *                     FSx for Lustre Deployment Options</a>.</p>
   *             <p>Encryption of data in-transit is automatically
   *             enabled when you access a <code>SCRATCH_2</code> or <code>PERSISTENT_1</code>
   *             file system from Amazon EC2 instances that <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-                 protection.html">support this feature</a>.
   *             (Default = <code>SCRATCH_1</code>)
   *         </p>
   *
   *             <p>Encryption of data in-transit for <code>SCRATCH_2</code> and <code>PERSISTENT_1</code>
   *                 deployment types is supported when accessed from supported instance types in supported AWS Regions. To learn more,
   *                 <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html">Encrypting Data in Transit</a>.</p>
   */
  DeploymentType?: LustreDeploymentType | string;

  /**
   * <p>(Optional) For files imported from a data repository, this value determines the stripe
   *             count and maximum amount of data per file (in MiB) stored on a single physical disk. The
   *             maximum number of disks that a single file can be striped across is limited by the total
   *             number of disks that make up the file system.</p>
   *
   *         <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * <p>A boolean flag indicating whether tags for the file system should be copied to
   *             backups. This value defaults to false. If it's set to true, all tags for the file
   *             system are copied to all automatic and user-initiated backups where the user
   *             doesn't specify tags. If this value is true, and you specify one or more tags, only
   *             the specified tags are copied to backups. If you specify one or more tags when creating a
   *             user-initiated backup, no tags are copied from the file system, regardless of this value.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with backups</a>.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 35 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

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
   * <p>
   *             Required for the <code>PERSISTENT_1</code> deployment type, describes the amount of read and write
   *             throughput for each 1 tebibyte of storage, in MB/s/TiB.
   *             File system throughput capacity is calculated by multiplying ﬁle system storage capacity (TiB) by the PerUnitStorageThroughput
   *             (MB/s/TiB). For a 2.4 TiB ﬁle system, provisioning 50 MB/s/TiB of PerUnitStorageThroughput
   *             yields 117 MB/s of ﬁle system throughput. You pay for the amount of throughput that you
   *             provision.
   *         </p>
   *         <p>Valid values are 50, 100, 200.</p>
   */
  PerUnitStorageThroughput?: number;

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
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p> (Optional) Use this property to configure the AutoImport feature on the
   *             file system's linked Amazon S3 data repository. You use
   *             AutoImport to update the contents of your FSx for Lustre file system automatically
   *             with changes that occur in the linked S3 data repository. <code>AutoImportPolicy</code> can
   *             have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - (Default) AutoImport is off. Changes in the linked
   *                 data repository are not reflected on the FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - AutoImport is on. New files in the linked data repository
   *                 that do not currently exist in the FSx file system are automatically imported.
   *                 Updates to existing FSx files are not imported to the FSx file system. Files deleted from
   *                 the linked data repository are not deleted from the FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED</code> - AutoImport is on. New files in the linked S3
   *                 data repository that do not currently exist in the FSx file system are automatically imported.
   *                 Changes to existing FSx files in the linked repository are also automatically imported to the
   *                 FSx file system. Files deleted from the linked data repository are not deleted from the FSx file system.
   *             </p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html">Automatically import updates from your S3 bucket</a>.</p>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;
}

export namespace CreateFileSystemLustreConfiguration {
  export const filterSensitiveLog = (obj: CreateFileSystemLustreConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFileSystemLustreConfiguration =>
    __isa(o, "CreateFileSystemLustreConfiguration");
}

/**
 * <p>The request object used to create a new Amazon FSx file system.</p>
 */
export interface CreateFileSystemRequest {
  __type?: "CreateFileSystemRequest";
  /**
   * <p>The Microsoft Windows configuration for the file system being created.
   *             </p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * <p>Specifies the IDs of the subnets that the file system will be accessible from. For Windows <code>MULTI_AZ_1</code>
   *             file system deployment types, provide exactly two subnet IDs, one for the preferred file server
   *             and one for the standby file server. You specify one of these subnets as the preferred subnet
   *             using the <code>WindowsConfiguration > PreferredSubnetID</code> property.</p>
   *         <p>For Windows <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> file system deployment types and Lustre file systems, provide exactly one subnet ID.
   *            The file server is launched in that subnet's Availability Zone.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of IDs specifying the security groups to apply to all network interfaces
   *             created for file system access. This list isn't returned in later requests to
   *             describe the file system.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Lustre configuration for the file system being created.
   *             </p>
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration;

  /**
   * <p>The type of Amazon FSx file system to create, either <code>WINDOWS</code> or <code>LUSTRE</code>.</p>
   */
  FileSystemType: FileSystemType | string | undefined;

  /**
   * <p>Sets the storage capacity of the file system that you're creating.</p>
   *         <p>For Lustre file systems:</p>
   *         <ul>
   *             <li>
   *                <p>For <code>SCRATCH_2</code> and <code>PERSISTENT_1</code> deployment types, valid values are
   *                 1.2, 2.4, and increments of 2.4 TiB.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SCRATCH_1</code> deployment type, valid values are
   *                 1.2, 2.4, and increments of 3.6 TiB.</p>
   *             </li>
   *          </ul>
   *         <p>For Windows file systems:</p>
   *         <ul>
   *             <li>
   *                <p>If <code>StorageType=SSD</code>, valid values are 32 GiB - 65,536 GiB (64 TiB).</p>
   *             </li>
   *             <li>
   *                <p>If <code>StorageType=HDD</code>, valid values are 2000 GiB - 65,536 GiB (64 TiB).</p>
   *             </li>
   *          </ul>
   */
  StorageCapacity: number | undefined;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data
   *             for Amazon FSx for Windows File Server file systems and Amazon FSx for Lustre <code>PERSISTENT_1</code> file
   *             systems at rest. In either case, if not specified, the Amazon FSx managed key
   *             is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems are always encrypted at rest using
   *             Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a>
   *             in the <i>AWS Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Sets the storage type for the Amazon FSx for Windows file system you're creating.
   *             Valid values are <code>SSD</code> and <code>HDD</code>.</p>
   *         <ul>
   *             <li>
   *                <p>Set to <code>SSD</code> to use solid state drive storage.
   *                 SSD is supported on all Windows deployment types.</p>
   *             </li>
   *             <li>
   *                <p>Set to <code>HDD</code> to use hard disk drive storage.
   *                 HDD is supported on <code>SINGLE_AZ_2</code> and <code>MULTI_AZ_1</code> Windows file system deployment types.
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             Default value is <code>SSD</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/optimize-fsx-costs.html#storage-type-options">
   *             Storage Type Options</a> in the <i>Amazon FSx for Windows User Guide</i>.
   *         </p>
   */
  StorageType?: StorageType | string;

  /**
   * <p>The tags to apply to the file system being created. The key value of
   *             the <code>Name</code> tag appears in the console as the file system name.</p>
   */
  Tags?: Tag[];
}

export namespace CreateFileSystemRequest {
  export const filterSensitiveLog = (obj: CreateFileSystemRequest): any => ({
    ...obj,
    ...(obj.WindowsConfiguration && {
      WindowsConfiguration: CreateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }),
  });
  export const isa = (o: any): o is CreateFileSystemRequest => __isa(o, "CreateFileSystemRequest");
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
  export const filterSensitiveLog = (obj: CreateFileSystemResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateFileSystemResponse => __isa(o, "CreateFileSystemResponse");
}

/**
 * <p>The configuration object for the Microsoft Windows file system used in
 *                 <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code>
 *             operations.</p>
 */
export interface CreateFileSystemWindowsConfiguration {
  __type?: "CreateFileSystemWindowsConfiguration";
  /**
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per second, in 2 to
   *             the <i>n</i>th increments, between 2^3 (8) and 2^11 (2048).</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * <p>The ID for an existing AWS Managed Microsoft Active Directory (AD) instance that the
   *             file system should join when it's created.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>A boolean flag indicating whether tags for the file system should be copied to
   *             backups. This value defaults to false. If it's set to true, all tags for the file
   *             system are copied to all automatic and user-initiated backups where the user
   *             doesn't specify tags. If this value is true, and you specify one or more tags, only
   *             the specified tags are copied to backups. If you specify one or more tags when creating a
   *             user-initiated backup, no tags are copied from the file system, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>The preferred time to take daily automatic backups, formatted HH:MM in the UTC time
   *             zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. The default is to retain backups for 7
   *             days. Setting this value to 0 disables the creation of automatic backups. The maximum
   *             retention period for backups is 35 days.</p>
   */
  AutomaticBackupRetentionDays?: number;

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
   * <p>Specifies the file system deployment type, valid values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>MULTI_AZ_1</code> - Deploys a high availability file system that is configured
   *                     for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You
   *                     can only deploy a Multi-AZ file system in AWS Regions that have a minimum of three Availability Zones. Also
   *                 supports HDD storage type</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SINGLE_AZ_1</code> - (Default) Choose to deploy a file system that is configured for single AZ redundancy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SINGLE_AZ_2</code> - The latest generation Single AZ file system.
   *                     Specifies a file system that is configured for single AZ redundancy and supports HDD storage type.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html">
   *                 Availability and Durability: Single-AZ and Multi-AZ File Systems</a>.</p>
   */
  DeploymentType?: WindowsDeploymentType | string;
}

export namespace CreateFileSystemWindowsConfiguration {
  export const filterSensitiveLog = (obj: CreateFileSystemWindowsConfiguration): any => ({
    ...obj,
    ...(obj.SelfManagedActiveDirectoryConfiguration && {
      SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfiguration.filterSensitiveLog(
        obj.SelfManagedActiveDirectoryConfiguration
      ),
    }),
  });
  export const isa = (o: any): o is CreateFileSystemWindowsConfiguration =>
    __isa(o, "CreateFileSystemWindowsConfiguration");
}

/**
 * <p>The data repository configuration object for Lustre file systems returned in the response of
 *             the <code>CreateFileSystem</code> operation.</p>
 */
export interface DataRepositoryConfiguration {
  __type?: "DataRepositoryConfiguration";
  /**
   * <p>Describes the file system's linked S3 data repository's <code>AutoImportPolicy</code>. The AutoImportPolicy configures how your FSx
   *             for Lustre file system automatically updates its contents
   *             with changes that occur in the linked S3 data repository. <code>AutoImportPolicy</code> can have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - (Default) AutoImport is off. Changes in the linked
   *                 data repository are not reflected on the FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - AutoImport is on. New files in the linked data repository
   *                 that do not currently exist in the FSx file system are automatically imported.
   *                 Updates to existing FSx files are not imported to the FSx file system. Files deleted from
   *                 the linked data repository are not deleted from the FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED</code> - AutoImport is on. New files in the linked S3
   *                 data repository that do not currently exist in the FSx file system are automatically imported.
   *                 Changes to existing FSx files in the linked repository are also automatically imported to the
   *                 FSx file system. Files deleted from the linked data repository are not deleted from the FSx file system.
   *             </p>
   *
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html">Automatically import updates from your S3 bucket</a>.</p>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * <p>Provides detailed information about the data respository if its <code>Lifecycle</code> is
   *             set to <code>MISCONFIGURED</code>.</p>
   */
  FailureDetails?: DataRepositoryFailureDetails;

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
   * <p>Describes the state of the file system's S3 durable data repository, if it is configured with an S3 repository.
   *         The lifecycle can have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The data repository configuration between
   *                 the FSx file system and the linked S3 data repository is being created.
   *                 The data repository is unavailable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The data repository is available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURED</code> - Amazon FSx cannot automatically import updates from the S3 bucket
   *                 until the data repository configuration is corrected. For more information, see
   *                 <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/troubleshooting.html#troubleshooting-misconfigured-data-repository">Troubleshooting a Misconfigured linked S3 bucket</a>.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The data repository is undergoing a customer initiated update and availability may be impacted.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: DataRepositoryLifecycle | string;
}

export namespace DataRepositoryConfiguration {
  export const filterSensitiveLog = (obj: DataRepositoryConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryConfiguration => __isa(o, "DataRepositoryConfiguration");
}

/**
 * <p>Provides detailed information about the data respository if its <code>Lifecycle</code> is
 *             set to <code>MISCONFIGURED</code>.</p>
 */
export interface DataRepositoryFailureDetails {
  __type?: "DataRepositoryFailureDetails";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryFailureDetails {
  export const filterSensitiveLog = (obj: DataRepositoryFailureDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryFailureDetails => __isa(o, "DataRepositoryFailureDetails");
}

export enum DataRepositoryLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  MISCONFIGURED = "MISCONFIGURED",
  UPDATING = "UPDATING",
}

/**
 * <p>A description of the data repository task. You use data repository tasks
 *             to perform bulk transfer operations between your Amazon FSx file system and its linked data
 *             repository.</p>
 */
export interface DataRepositoryTask {
  __type?: "DataRepositoryTask";
  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify AWS
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of AWS. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)
   *                 and AWS Service Namespaces</a> in the <i>AWS General
   *             Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The type of data repository task; EXPORT_TO_REPOSITORY is the only type currently supported.</p>
   */
  Type: DataRepositoryTaskType | string | undefined;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter.
   *             FSx delivers the report to the file system's linked data repository in Amazon S3,
   *             using the path specified in the report <code>Path</code> parameter.
   *             You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.</p>
   */
  Report?: CompletionReport;

  /**
   * <p>Failure message describing why the task failed, it is populated only when <code>Lifecycle</code> is set to <code>FAILED</code>.</p>
   */
  FailureDetails?: DataRepositoryTaskFailureDetails;

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>Provides the status of the number of files that the task has processed successfully and failed to process.</p>
   */
  Status?: DataRepositoryTaskStatus;

  /**
   * <p>The system-generated, unique 17-digit ID of the data repository task.</p>
   */
  TaskId: string | undefined;

  /**
   * <p>The time that Amazon FSx completed processing the task, populated after the task is complete.</p>
   */
  EndTime?: Date;

  /**
   * <p>An array of paths on the Amazon FSx for Lustre file system that specify the data for the data repository task to process.
   *             For example, in an EXPORT_TO_REPOSITORY task, the paths specify which data to export to the linked data repository.</p>
   *             <p>(Default) If <code>Paths</code> is not specified, Amazon FSx uses the file system root directory.</p>
   */
  Paths?: string[];

  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime: Date | undefined;

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
   * <p>The time that Amazon FSx began processing the task.</p>
   */
  StartTime?: Date;
}

export namespace DataRepositoryTask {
  export const filterSensitiveLog = (obj: DataRepositoryTask): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryTask => __isa(o, "DataRepositoryTask");
}

/**
 * <p>The data repository task could not be canceled because the task has already ended.</p>
 */
export interface DataRepositoryTaskEnded extends __SmithyException, $MetadataBearer {
  name: "DataRepositoryTaskEnded";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryTaskEnded {
  export const filterSensitiveLog = (obj: DataRepositoryTaskEnded): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryTaskEnded => __isa(o, "DataRepositoryTaskEnded");
}

/**
 * <p>An existing data repository task is currently executing on the file system.
 *         Wait until the existing task has completed, then create the new task.</p>
 */
export interface DataRepositoryTaskExecuting extends __SmithyException, $MetadataBearer {
  name: "DataRepositoryTaskExecuting";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryTaskExecuting {
  export const filterSensitiveLog = (obj: DataRepositoryTaskExecuting): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryTaskExecuting => __isa(o, "DataRepositoryTaskExecuting");
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
  export const filterSensitiveLog = (obj: DataRepositoryTaskFailureDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryTaskFailureDetails => __isa(o, "DataRepositoryTaskFailureDetails");
}

/**
 * <p>(Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response.
 *             You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type.
 *             A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.</p>
 */
export interface DataRepositoryTaskFilter {
  __type?: "DataRepositoryTaskFilter";
  /**
   * <p>Use Values to include the specific file system IDs and task
   *             lifecycle states for the filters you are using.</p>
   */
  Values?: string[];

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
}

export namespace DataRepositoryTaskFilter {
  export const filterSensitiveLog = (obj: DataRepositoryTaskFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryTaskFilter => __isa(o, "DataRepositoryTaskFilter");
}

export enum DataRepositoryTaskFilterName {
  FILE_SYSTEM_ID = "file-system-id",
  TASK_LIFECYCLE = "task-lifecycle",
}

export enum DataRepositoryTaskLifecycle {
  CANCELED = "CANCELED",
  CANCELING = "CANCELING",
  EXECUTING = "EXECUTING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>The data repository task or tasks you specified could not be found.</p>
 */
export interface DataRepositoryTaskNotFound extends __SmithyException, $MetadataBearer {
  name: "DataRepositoryTaskNotFound";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryTaskNotFound {
  export const filterSensitiveLog = (obj: DataRepositoryTaskNotFound): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryTaskNotFound => __isa(o, "DataRepositoryTaskNotFound");
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
  export const filterSensitiveLog = (obj: DataRepositoryTaskStatus): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataRepositoryTaskStatus => __isa(o, "DataRepositoryTaskStatus");
}

export enum DataRepositoryTaskType {
  EXPORT = "EXPORT_TO_REPOSITORY",
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
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This is automatically filled on your behalf when using the AWS CLI
   *             or SDK.</p>
   */
  ClientRequestToken?: string;
}

export namespace DeleteBackupRequest {
  export const filterSensitiveLog = (obj: DeleteBackupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBackupRequest => __isa(o, "DeleteBackupRequest");
}

/**
 * <p>The response object for <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupResponse {
  __type?: "DeleteBackupResponse";
  /**
   * <p>The lifecycle of the backup. Should be <code>DELETED</code>.</p>
   */
  Lifecycle?: BackupLifecycle | string;

  /**
   * <p>The ID of the backup deleted.</p>
   */
  BackupId?: string;
}

export namespace DeleteBackupResponse {
  export const filterSensitiveLog = (obj: DeleteBackupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBackupResponse => __isa(o, "DeleteBackupResponse");
}

/**
 * <p>The configuration object for the Amazon FSx for Lustre file system being deleted in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemLustreConfiguration {
  __type?: "DeleteFileSystemLustreConfiguration";
  /**
   * <p>Set <code>SkipFinalBackup</code> to false if you want to take a final backup of the file
   *             system you are deleting. By default, Amazon FSx will not take a final backup on your behalf when the
   *                 <code>DeleteFileSystem</code> operation is invoked. (Default = true)</p>
   */
  SkipFinalBackup?: boolean;

  /**
   * <p>Use if <code>SkipFinalBackup</code> is set to <code>false</code>,
   *             and you want to apply an array of tags to the final backup. If you have set the file system property
   *             <code>CopyTagsToBackups</code> to true, and
   *             you specify one or more <code>FinalBackupTags</code> when deleting a file system, Amazon FSx will not copy any existing file system tags to the backup.</p>
   */
  FinalBackupTags?: Tag[];
}

export namespace DeleteFileSystemLustreConfiguration {
  export const filterSensitiveLog = (obj: DeleteFileSystemLustreConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFileSystemLustreConfiguration =>
    __isa(o, "DeleteFileSystemLustreConfiguration");
}

/**
 * <p>The response object for the Amazon FSx for Lustre file system being deleted in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemLustreResponse {
  __type?: "DeleteFileSystemLustreResponse";
  /**
   * <p>The ID of the final backup for this file system.</p>
   */
  FinalBackupId?: string;

  /**
   * <p>The set of tags applied to the final backup.</p>
   */
  FinalBackupTags?: Tag[];
}

export namespace DeleteFileSystemLustreResponse {
  export const filterSensitiveLog = (obj: DeleteFileSystemLustreResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFileSystemLustreResponse => __isa(o, "DeleteFileSystemLustreResponse");
}

/**
 * <p>The request object for <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemRequest {
  __type?: "DeleteFileSystemRequest";
  /**
   * <p>The configuration object for the Microsoft Windows file system used in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This is automatically filled on your behalf when using the AWS CLI
   *             or SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the file system you want to delete.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The configuration object for the Amazon FSx for Lustre file system being deleted in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  LustreConfiguration?: DeleteFileSystemLustreConfiguration;
}

export namespace DeleteFileSystemRequest {
  export const filterSensitiveLog = (obj: DeleteFileSystemRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFileSystemRequest => __isa(o, "DeleteFileSystemRequest");
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

  /**
   * <p>The response object for the Amazon FSx for Lustre file system being deleted in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  LustreResponse?: DeleteFileSystemLustreResponse;
}

export namespace DeleteFileSystemResponse {
  export const filterSensitiveLog = (obj: DeleteFileSystemResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFileSystemResponse => __isa(o, "DeleteFileSystemResponse");
}

/**
 * <p>The configuration object for the Microsoft Windows file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemWindowsConfiguration {
  __type?: "DeleteFileSystemWindowsConfiguration";
  /**
   * <p>By default, Amazon FSx for Windows takes a final backup on your behalf when the
   *                 <code>DeleteFileSystem</code> operation is invoked. Doing this helps protect you
   *             from data loss, and we highly recommend taking the final backup. If you want to skip
   *             this backup, use this flag to do so.</p>
   */
  SkipFinalBackup?: boolean;

  /**
   * <p>A set of tags for your final backup.</p>
   */
  FinalBackupTags?: Tag[];
}

export namespace DeleteFileSystemWindowsConfiguration {
  export const filterSensitiveLog = (obj: DeleteFileSystemWindowsConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFileSystemWindowsConfiguration =>
    __isa(o, "DeleteFileSystemWindowsConfiguration");
}

/**
 * <p>The response object for the Microsoft Windows file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemWindowsResponse {
  __type?: "DeleteFileSystemWindowsResponse";
  /**
   * <p>The set of tags applied to the final backup.</p>
   */
  FinalBackupTags?: Tag[];

  /**
   * <p>The ID of the final backup for this file system.</p>
   */
  FinalBackupId?: string;
}

export namespace DeleteFileSystemWindowsResponse {
  export const filterSensitiveLog = (obj: DeleteFileSystemWindowsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteFileSystemWindowsResponse => __isa(o, "DeleteFileSystemWindowsResponse");
}

/**
 * <p>The request object for <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsRequest {
  __type?: "DescribeBackupsRequest";
  /**
   * <p>Opaque pagination token returned from a previous
   *                 <code>DescribeBackups</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters structure. Supported names are file-system-id and
   *             backup-type.</p>
   */
  Filters?: Filter[];

  /**
   * <p>IDs of the backups you want to retrieve (String). This overrides any
   *             filters. If any IDs are not found, BackupNotFound will be thrown.</p>
   */
  BackupIds?: string[];

  /**
   * <p>Maximum number of backups to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;
}

export namespace DescribeBackupsRequest {
  export const filterSensitiveLog = (obj: DescribeBackupsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeBackupsRequest => __isa(o, "DescribeBackupsRequest");
}

/**
 * <p>Response object for <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsResponse {
  __type?: "DescribeBackupsResponse";
  /**
   * <p>Any array of backups.</p>
   */
  Backups?: Backup[];

  /**
   * <p>This is present if there are more backups than returned in the response (String).
   *             You can use the <code>NextToken</code> value in the later request to fetch the backups.
   *         </p>
   */
  NextToken?: string;
}

export namespace DescribeBackupsResponse {
  export const filterSensitiveLog = (obj: DescribeBackupsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeBackupsResponse => __isa(o, "DescribeBackupsResponse");
}

export interface DescribeDataRepositoryTasksRequest {
  __type?: "DescribeDataRepositoryTasksRequest";
  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) You can use filters to narrow the <code>DescribeDataRepositoryTasks</code> response to
   *             include just tasks for specific file systems, or tasks in a specific lifecycle state.</p>
   */
  Filters?: DataRepositoryTaskFilter[];

  /**
   * <p>The maximum number of resources to return in the response. This value must be an
   *             integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) IDs of the tasks whose descriptions you want to retrieve
   *             (String).</p>
   */
  TaskIds?: string[];
}

export namespace DescribeDataRepositoryTasksRequest {
  export const filterSensitiveLog = (obj: DescribeDataRepositoryTasksRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDataRepositoryTasksRequest =>
    __isa(o, "DescribeDataRepositoryTasksRequest");
}

export interface DescribeDataRepositoryTasksResponse {
  __type?: "DescribeDataRepositoryTasksResponse";
  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;

  /**
   * <p>The collection of data repository task descriptions returned.</p>
   */
  DataRepositoryTasks?: DataRepositoryTask[];
}

export namespace DescribeDataRepositoryTasksResponse {
  export const filterSensitiveLog = (obj: DescribeDataRepositoryTasksResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeDataRepositoryTasksResponse =>
    __isa(o, "DescribeDataRepositoryTasksResponse");
}

/**
 * <p>The request object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsRequest {
  __type?: "DescribeFileSystemsRequest";
  /**
   * <p>IDs of the file systems whose descriptions you want to retrieve
   *             (String).</p>
   */
  FileSystemIds?: string[];

  /**
   * <p>Maximum number of file systems to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Opaque pagination token returned from a previous
   *                 <code>DescribeFileSystems</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeFileSystemsRequest {
  export const filterSensitiveLog = (obj: DescribeFileSystemsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeFileSystemsRequest => __isa(o, "DescribeFileSystemsRequest");
}

/**
 * <p>The response object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsResponse {
  __type?: "DescribeFileSystemsResponse";
  /**
   * <p>An array of file system descriptions.</p>
   */
  FileSystems?: FileSystem[];

  /**
   * <p>Present if there are more file systems than returned in the response (String). You
   *             can use the <code>NextToken</code> value in the later request to fetch the
   *             descriptions. </p>
   */
  NextToken?: string;
}

export namespace DescribeFileSystemsResponse {
  export const filterSensitiveLog = (obj: DescribeFileSystemsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeFileSystemsResponse => __isa(o, "DescribeFileSystemsResponse");
}

/**
 * <p>A description of a specific Amazon FSx file system.</p>
 */
export interface FileSystem {
  __type?: "FileSystem";
  /**
   * <p>A structure providing details of any failures that occur when creating the file system
   *             has failed.</p>
   */
  FailureDetails?: FileSystemFailureDetails;

  /**
   * <p>The storage capacity of the file system in gigabytes (GB).</p>
   */
  StorageCapacity?: number;

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
  NetworkInterfaceIds?: string[];

  /**
   * <p>The system-generated, unique 17-digit ID of the file system.</p>
   */
  FileSystemId?: string;

  /**
   * <p>Specifies the IDs of the subnets that the file system is accessible from. For Windows <code>MULTI_AZ_1</code>
   *             file system deployment type, there are two subnet IDs, one for the preferred file server
   *             and one for the standby file server. The preferred file server subnet identified in the
   *             <code>PreferredSubnetID</code> property. All other file systems have only one subnet ID.</p>
   *         <p>For Lustre file systems, and Single-AZ Windows file systems, this is the ID of
   *             the subnet that contains the endpoint for the file system. For <code>MULTI_AZ_1</code> Windows file systems,
   *             the endpoint for the file system is available in the <code>PreferredSubnetID</code>.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A list of administrative actions for the file system that are in process or waiting to be processed.
   *             Administrative actions describe changes to the Windows file system that you have initiated using the <code>UpdateFileSystem</code> action.
   *         </p>
   */
  AdministrativeActions?: AdministrativeAction[];

  /**
   * <p>The DNS name for the file system.</p>
   */
  DNSName?: string;

  /**
   * <p>The configuration for the Amazon FSx for Lustre file system.</p>
   */
  LustreConfiguration?: LustreFileSystemConfiguration;

  /**
   * <p>The storage type of the file system.
   *             Valid values are <code>SSD</code> and <code>HDD</code>.
   *             If set to <code>SSD</code>, the file system uses solid state drive storage.
   *             If set to <code>HDD</code>, the file system uses hard disk drive storage.
   *         </p>
   */
  StorageType?: StorageType | string;

  /**
   * <p>The tags to associate with the file system. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your
   *                 Amazon EC2 Resources</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) for the file system resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The AWS account that created the file system. If the file system was created by an AWS
   *             Identity and Access Management (IAM) user, the AWS account to which the IAM user belongs
   *             is the owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The type of Amazon FSx file system, either <code>LUSTRE</code> or <code>WINDOWS</code>.</p>
   */
  FileSystemType?: FileSystemType | string;

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: WindowsFileSystemConfiguration;

  /**
   * <p>The ID of the primary VPC for the file system.</p>
   */
  VpcId?: string;

  /**
   * <p>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data
   *             for Amazon FSx for Windows File Server file systems and persistent Amazon FSx for Lustre file
   *             systems at rest. In either case, if not specified, the Amazon FSx managed key
   *             is used. The scratch Amazon FSx for Lustre file systems are always encrypted at rest using
   *             Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a>
   *             in the <i>AWS Key Management Service API Reference</i>.</p>
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
}

export namespace FileSystem {
  export const filterSensitiveLog = (obj: FileSystem): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FileSystem => __isa(o, "FileSystem");
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
  export const filterSensitiveLog = (obj: FileSystemFailureDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FileSystemFailureDetails => __isa(o, "FileSystemFailureDetails");
}

export enum FileSystemLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MISCONFIGURED = "MISCONFIGURED",
  UPDATING = "UPDATING",
}

export enum FileSystemMaintenanceOperation {
  BACKING_UP = "BACKING_UP",
  PATCHING = "PATCHING",
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
  export const filterSensitiveLog = (obj: FileSystemNotFound): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FileSystemNotFound => __isa(o, "FileSystemNotFound");
}

export enum FileSystemType {
  LUSTRE = "LUSTRE",
  WINDOWS = "WINDOWS",
}

/**
 * <p>A filter used to restrict the results of describe calls. You can use multiple
 *             filters to return results that meet all applied filter requirements.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The values of the filter. These are all the values for any of the applied
   *             filters.</p>
   */
  Values?: string[];

  /**
   * <p>The name for this filter.</p>
   */
  Name?: FilterName | string;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

export enum FilterName {
  BACKUP_TYPE = "backup-type",
  FILE_SYSTEM_ID = "file-system-id",
  FILE_SYSTEM_TYPE = "file-system-type",
}

/**
 * <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 */
export interface IncompatibleParameterError extends __SmithyException, $MetadataBearer {
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
  export const filterSensitiveLog = (obj: IncompatibleParameterError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IncompatibleParameterError => __isa(o, "IncompatibleParameterError");
}

/**
 * <p>A generic error indicating a server-side failure.</p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerError => __isa(o, "InternalServerError");
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
  export const filterSensitiveLog = (obj: InvalidExportPath): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidExportPath => __isa(o, "InvalidExportPath");
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
  export const filterSensitiveLog = (obj: InvalidImportPath): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidImportPath => __isa(o, "InvalidImportPath");
}

/**
 * <p>One or more network settings specified in the request are invalid.
 *                 <code>InvalidVpcId</code> means that the ID passed for the virtual private cloud
 *             (VPC) is invalid. <code>InvalidSubnetIds</code> returns the list of IDs for subnets that
 *             are either invalid or not part of the VPC specified.
 *                 <code>InvalidSecurityGroupIds</code> returns the list of IDs for security groups
 *             that are either invalid or not part of the VPC specified.</p>
 */
export interface InvalidNetworkSettings extends __SmithyException, $MetadataBearer {
  name: "InvalidNetworkSettings";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID for a subnet. A <i>subnet</i> is a range of IP addresses in
   *             your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the
   *                 <i>Amazon VPC User Guide.</i>
   *          </p>
   */
  InvalidSubnetId?: string;

  /**
   * <p>The ID of your Amazon EC2 security group. This ID is used to control network access
   *             to the endpoint that Amazon FSx creates on your behalf in each subnet. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security
   *                 Groups for Linux Instances</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   */
  InvalidSecurityGroupId?: string;
}

export namespace InvalidNetworkSettings {
  export const filterSensitiveLog = (obj: InvalidNetworkSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidNetworkSettings => __isa(o, "InvalidNetworkSettings");
}

/**
 * <p>An invalid value for <code>PerUnitStorageThroughput</code> was provided. Please create your file system again, using a valid value.</p>
 */
export interface InvalidPerUnitStorageThroughput extends __SmithyException, $MetadataBearer {
  name: "InvalidPerUnitStorageThroughput";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InvalidPerUnitStorageThroughput {
  export const filterSensitiveLog = (obj: InvalidPerUnitStorageThroughput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidPerUnitStorageThroughput => __isa(o, "InvalidPerUnitStorageThroughput");
}

/**
 * <p>The request object for <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>Opaque pagination token returned from a previous
   *                 <code>ListTagsForResource</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of the Amazon FSx resource that will have its tags listed.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>Maximum number of tags to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
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
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export enum LustreDeploymentType {
  PERSISTENT_1 = "PERSISTENT_1",
  SCRATCH_1 = "SCRATCH_1",
  SCRATCH_2 = "SCRATCH_2",
}

/**
 * <p>The configuration for the Amazon FSx for Lustre file system.</p>
 */
export interface LustreFileSystemConfiguration {
  __type?: "LustreFileSystemConfiguration";
  /**
   * <p>You use the <code>MountName</code> value when mounting the file system.</p>
   *         <p>For the <code>SCRATCH_1</code> deployment type, this value is always "<code>fsx</code>".
   *             For <code>SCRATCH_2</code> and <code>PERSISTENT_1</code> deployment types, this
   *             value is a string that is unique within an AWS Region.
   *
   *         </p>
   */
  MountName?: string;

  /**
   * <p>The deployment type of the FSX for Lustre file system. <i>Scratch deployment type</i> is designed for temporary storage
   *             and shorter-term processing of data.</p>
   *         <p>
   *             <code>SCRATCH_1</code> and <code>SCRATCH_2</code> deployment
   *         types are best suited for when you need temporary storage and shorter-term processing of data.
   *         The <code>SCRATCH_2</code> deployment type provides in-transit encryption of data and higher burst
   *         throughput capacity than <code>SCRATCH_1</code>.</p>
   *         <p>The <code>PERSISTENT_1</code> deployment type is used for longer-term storage
   *             and workloads and encryption of data in transit. To learn more about deployment types, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/lustre-deployment-types.html">
   *                 FSx for Lustre Deployment Options</a>. (Default = <code>SCRATCH_1</code>)</p>
   */
  DeploymentType?: LustreDeploymentType | string;

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>A boolean flag indicating whether tags on the file system should be copied to backups.
   *             If it's set to true, all tags on the file system are
   *             copied to all automatic backups and any user-initiated backups where the user
   *             doesn't specify any tags. If this value is true, and you specify one or more tags,
   *             only the specified tags are copied to backups. If you specify one or more tags when
   *             creating a user-initiated backup, no tags are copied from the file system,
   *             regardless of this value. (Default = false)</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>The data repository configuration object for Lustre file systems returned in the response of
   *             the <code>CreateFileSystem</code> operation.</p>
   */
  DataRepositoryConfiguration?: DataRepositoryConfiguration;

  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 35 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>
   *             Per unit storage throughput represents the megabytes per second of read or write throughput per
   *             1 tebibyte of storage provisioned.
   *             File system throughput capacity is equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB).
   *             This option is only valid for <code>PERSISTENT_1</code> deployment types. Valid values are 50, 100, 200.
   *         </p>
   */
  PerUnitStorageThroughput?: number;
}

export namespace LustreFileSystemConfiguration {
  export const filterSensitiveLog = (obj: LustreFileSystemConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LustreFileSystemConfiguration => __isa(o, "LustreFileSystemConfiguration");
}

/**
 * <p>A file system configuration is required for this operation.</p>
 */
export interface MissingFileSystemConfiguration extends __SmithyException, $MetadataBearer {
  name: "MissingFileSystemConfiguration";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace MissingFileSystemConfiguration {
  export const filterSensitiveLog = (obj: MissingFileSystemConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MissingFileSystemConfiguration => __isa(o, "MissingFileSystemConfiguration");
}

/**
 * <p>The resource specified for the tagging operation is not a resource type owned by
 *             Amazon FSx. Use the API of the relevant service to perform the operation. </p>
 */
export interface NotServiceResourceError extends __SmithyException, $MetadataBearer {
  name: "NotServiceResourceError";
  $fault: "client";
  /**
   * <p>The Amazon Resource Name (ARN) of the non-Amazon FSx resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace NotServiceResourceError {
  export const filterSensitiveLog = (obj: NotServiceResourceError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotServiceResourceError => __isa(o, "NotServiceResourceError");
}

export enum ReportFormat {
  REPORT_CSV_20191124 = "REPORT_CSV_20191124",
}

export enum ReportScope {
  FAILED_FILES_ONLY = "FAILED_FILES_ONLY",
}

/**
 * <p>The resource specified does not support tagging. </p>
 */
export interface ResourceDoesNotSupportTagging extends __SmithyException, $MetadataBearer {
  name: "ResourceDoesNotSupportTagging";
  $fault: "client";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that doesn't support
   *             tagging.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace ResourceDoesNotSupportTagging {
  export const filterSensitiveLog = (obj: ResourceDoesNotSupportTagging): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceDoesNotSupportTagging => __isa(o, "ResourceDoesNotSupportTagging");
}

/**
 * <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
 */
export interface ResourceNotFound extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFound";
  $fault: "client";
  /**
   * <p>The resource ARN of the resource that can't be found.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace ResourceNotFound {
  export const filterSensitiveLog = (obj: ResourceNotFound): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFound => __isa(o, "ResourceNotFound");
}

/**
 * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
 *             which the Windows File Server instance is joined.</p>
 */
export interface SelfManagedActiveDirectoryAttributes {
  __type?: "SelfManagedActiveDirectoryAttributes";
  /**
   * <p>The fully qualified domain name of the self-managed AD directory.</p>
   */
  DomainName?: string;

  /**
   * <p>The fully qualified distinguished name of the organizational unit within the
   *             self-managed AD directory to which the Windows File Server instance is joined.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory.</p>
   */
  DnsIps?: string[];

  /**
   * <p>The name of the domain group whose members have administrative privileges for the FSx
   *             file system.</p>
   */
  FileSystemAdministratorsGroup?: string;

  /**
   * <p>The user name for the service account on your self-managed AD domain that FSx uses to
   *             join to your AD domain.</p>
   */
  UserName?: string;
}

export namespace SelfManagedActiveDirectoryAttributes {
  export const filterSensitiveLog = (obj: SelfManagedActiveDirectoryAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SelfManagedActiveDirectoryAttributes =>
    __isa(o, "SelfManagedActiveDirectoryAttributes");
}

/**
 * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to
 *             your self-managed (including on-premises) Microsoft Active Directory (AD)
 *             directory.</p>
 */
export interface SelfManagedActiveDirectoryConfiguration {
  __type?: "SelfManagedActiveDirectoryConfiguration";
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
   * <p>The user name for the service account on your self-managed AD domain that Amazon FSx
   *             will use to join to your AD domain. This account must have the permission to join
   *             computers to the domain in the organizational unit provided in
   *                 <code>OrganizationalUnitDistinguishedName</code>, or in the default location of your
   *             AD domain.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The fully qualified domain name of the self-managed AD directory, such as
   *                 <code>corp.example.com</code>.</p>
   */
  DomainName: string | undefined;

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
  DnsIps: string[] | undefined;

  /**
   * <p>The password for the service account on your self-managed AD domain that Amazon FSx
   *             will use to join to your AD domain.</p>
   */
  Password: string | undefined;

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
}

export namespace SelfManagedActiveDirectoryConfiguration {
  export const filterSensitiveLog = (obj: SelfManagedActiveDirectoryConfiguration): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is SelfManagedActiveDirectoryConfiguration =>
    __isa(o, "SelfManagedActiveDirectoryConfiguration");
}

/**
 * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to a
 *             self-managed Microsoft Active Directory (AD) directory.</p>
 */
export interface SelfManagedActiveDirectoryConfigurationUpdates {
  __type?: "SelfManagedActiveDirectoryConfigurationUpdates";
  /**
   * <p>The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to
   *             your AD domain. This account must have the permission to join
   *             computers to the domain in the organizational unit provided in
   *             <code>OrganizationalUnitDistinguishedName</code>.</p>
   */
  UserName?: string;

  /**
   * <p>The password for the service account on your self-managed AD domain that Amazon FSx will use to join to
   *             your AD domain.</p>
   */
  Password?: string;

  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory.</p>
   */
  DnsIps?: string[];
}

export namespace SelfManagedActiveDirectoryConfigurationUpdates {
  export const filterSensitiveLog = (obj: SelfManagedActiveDirectoryConfigurationUpdates): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is SelfManagedActiveDirectoryConfigurationUpdates =>
    __isa(o, "SelfManagedActiveDirectoryConfigurationUpdates");
}

export enum ServiceLimit {
  FILE_SYSTEM_COUNT = "FILE_SYSTEM_COUNT",
  TOTAL_STORAGE = "TOTAL_STORAGE",
  TOTAL_THROUGHPUT_CAPACITY = "TOTAL_THROUGHPUT_CAPACITY",
  TOTAL_USER_INITIATED_BACKUPS = "TOTAL_USER_INITIATED_BACKUPS",
}

/**
 * <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting AWS Support.
 *             </p>
 */
export interface ServiceLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "ServiceLimitExceeded";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>Enumeration of the service limit that was exceeded. </p>
   */
  Limit: ServiceLimit | string | undefined;
}

export namespace ServiceLimitExceeded {
  export const filterSensitiveLog = (obj: ServiceLimitExceeded): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceLimitExceeded => __isa(o, "ServiceLimitExceeded");
}

export enum Status {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  UPDATED_OPTIMIZING = "UPDATED_OPTIMIZING",
}

export enum StorageType {
  HDD = "HDD",
  SSD = "SSD",
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
  Key: string | undefined;

  /**
   * <p>A value that specifies the <code>TagValue</code>, the value assigned to the
   *             corresponding tag key. Tag values can be null and don't have to be unique in a tag set.
   *             For example, you can have a key-value pair in a tag set of <code>finances : April</code>
   *             and also of <code>payroll : April</code>.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>The request object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>A list of tags for the resource. If a tag with a given key already exists, the
   *             value is replaced by the one specified in this parameter.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to
   *             tag.</p>
   */
  ResourceARN: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

/**
 * <p>The response object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>The requested operation is not supported for this resource or API.</p>
 */
export interface UnsupportedOperation extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperation";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace UnsupportedOperation {
  export const filterSensitiveLog = (obj: UnsupportedOperation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsupportedOperation => __isa(o, "UnsupportedOperation");
}

/**
 * <p>The request object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>A list of keys of tags on the resource to untag. In case the tag key doesn't exist,
   *             the call will still succeed to be idempotent.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The ARN of the Amazon FSx resource to untag.</p>
   */
  ResourceARN: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

/**
 * <p>The response object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

/**
 * <p>The configuration object for Amazon FSx for Lustre file systems used in the
 *                 <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemLustreConfiguration {
  __type?: "UpdateFileSystemLustreConfiguration";
  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 35 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p> (Optional) Use this property to configure the AutoImport feature on the
   *             file system's linked Amazon S3 data repository. You use
   *             AutoImport to update the contents of your FSx for Lustre file system automatically
   *             with changes that occur in the linked S3 data repository. <code>AutoImportPolicy</code> can
   *             have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - (Default) AutoImport is off. Changes in the linked
   *                 data repository are not reflected on the FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - AutoImport is on. New files in the linked data repository
   *                 that do not currently exist in the FSx file system are automatically imported.
   *                 Updates to existing FSx files are not imported to the FSx file system. Files deleted from
   *                 the linked data repository are not deleted from the FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED</code> - AutoImport is on. New files in the linked S3
   *                 data repository that do not currently exist in the FSx file system are automatically imported.
   *                 Changes to existing FSx files in the linked repository are also automatically imported to the
   *                 FSx file system. Files deleted from the linked data repository are not deleted from the FSx file system.
   *             </p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html">Automatically import updates from your S3 bucket</a>.</p>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace UpdateFileSystemLustreConfiguration {
  export const filterSensitiveLog = (obj: UpdateFileSystemLustreConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFileSystemLustreConfiguration =>
    __isa(o, "UpdateFileSystemLustreConfiguration");
}

/**
 * <p>The request object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemRequest {
  __type?: "UpdateFileSystemRequest";
  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *           idempotent updates. This string is automatically filled on your behalf when you use the AWS
   *           Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Use this parameter to increase the storage capacity of an Amazon FSx for Windows File Server file system.
   *       Specifies the storage capacity target value, GiB, for the file system you're updating.
   *       The storage capacity target value must be at least 10 percent (%) greater than the current storage capacity value.
   *       In order to increase storage capacity, the file system needs to have at least 16 MB/s of throughput capacity. You cannot
   *       make a storage capacity increase request if there is an existing storage capacity increase request in progress.
   *        For more information, see
   *       <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing Storage Capacity</a>.</p>
   */
  StorageCapacity?: number;

  /**
   * <p>Identifies the file system that you are updating.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The configuration updates for an Amazon FSx for Windows File Server file system.</p>
   */
  WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;

  /**
   * <p>The configuration object for Amazon FSx for Lustre file systems used in the
   *                 <code>UpdateFileSystem</code> operation.</p>
   */
  LustreConfiguration?: UpdateFileSystemLustreConfiguration;
}

export namespace UpdateFileSystemRequest {
  export const filterSensitiveLog = (obj: UpdateFileSystemRequest): any => ({
    ...obj,
    ...(obj.WindowsConfiguration && {
      WindowsConfiguration: UpdateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }),
  });
  export const isa = (o: any): o is UpdateFileSystemRequest => __isa(o, "UpdateFileSystemRequest");
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
  export const filterSensitiveLog = (obj: UpdateFileSystemResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFileSystemResponse => __isa(o, "UpdateFileSystemResponse");
}

/**
 * <p>Updates the configuration for an existing Amazon FSx for Windows
 *             File Server file system. Amazon FSx only overwrites existing properties with non-null values
 *             provided in the request.</p>
 */
export interface UpdateFileSystemWindowsConfiguration {
  __type?: "UpdateFileSystemWindowsConfiguration";
  /**
   * <p>Sets the target value for a file system's throughput capacity, in MB/s, that you are updating the file system to. Valid values are
   *             8, 16, 32, 64, 128, 256, 512, 1024, 2048. You cannot make a throughput capacity update request if there is an existing throughput capacity update request in progress. For more information,
   *             see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-throughput-capacity.html">Managing Throughput Capacity</a>.</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>The configuration Amazon FSx uses to join the Windows File Server instance to the
   *             self-managed Microsoft AD directory. You cannot make a self-managed Microsoft AD update request if there is an existing self-managed Microsoft AD update request in progress.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;

  /**
   * <p>The preferred time to start the daily automatic backup, in the UTC time zone, for example, <code>02:00</code>
   *          </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. Where d is the weekday number, from 1 through 7, with 1 = Monday and 7 = Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The number of days to retain automatic daily backups. Setting this to zero (0) disables automatic daily
   *             backups. You can retain automatic daily backups for a maximum of 35 days. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#automatic-backups">Working with Automatic Daily Backups</a>.</p>
   */
  AutomaticBackupRetentionDays?: number;
}

export namespace UpdateFileSystemWindowsConfiguration {
  export const filterSensitiveLog = (obj: UpdateFileSystemWindowsConfiguration): any => ({
    ...obj,
    ...(obj.SelfManagedActiveDirectoryConfiguration && {
      SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdates.filterSensitiveLog(
        obj.SelfManagedActiveDirectoryConfiguration
      ),
    }),
  });
  export const isa = (o: any): o is UpdateFileSystemWindowsConfiguration =>
    __isa(o, "UpdateFileSystemWindowsConfiguration");
}

export enum WindowsDeploymentType {
  MULTI_AZ_1 = "MULTI_AZ_1",
  SINGLE_AZ_1 = "SINGLE_AZ_1",
  SINGLE_AZ_2 = "SINGLE_AZ_2",
}

/**
 * <p>The configuration for this Microsoft Windows file system.</p>
 */
export interface WindowsFileSystemConfiguration {
  __type?: "WindowsFileSystemConfiguration";
  /**
   * <p>The list of maintenance operations in progress for this file system.</p>
   */
  MaintenanceOperationsInProgress?: (FileSystemMaintenanceOperation | string)[];

  /**
   * <p>Specifies the file system deployment type, valid values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>MULTI_AZ_1</code> - Specifies a high availability file system that is configured for Multi-AZ
   *                     redundancy to tolerate temporary Availability Zone (AZ) unavailability, and supports SSD and HDD storage.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SINGLE_AZ_1</code> - (Default) Specifies a file system that is configured for single AZ redundancy,
   *                     only supports SSD storage.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SINGLE_AZ_2</code> - Latest generation Single AZ file system.
   *                     Specifies a file system that is configured for single AZ redundancy and supports SSD and HDD storage.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see
   *          <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html">Single-AZ and Multi-AZ File Systems</a>.</p>
   */
  DeploymentType?: WindowsDeploymentType | string;

  /**
   * <p>The preferred time to take daily automatic backups, in the UTC time zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, the IP address of the primary, or preferred, file server.</p>
   *         <p>Use this IP address when mounting the file system on Linux SMB clients or Windows SMB clients that
   *             are not joined to a Microsoft Active Directory.
   *             Applicable for all Windows file system deployment types.
   *             This IP address is temporarily unavailable
   *             when the file system is undergoing maintenance. For Linux and Windows
   *             SMB clients that are joined to an Active Directory, use the file system's DNSName instead. For more information
   *             on mapping and mounting file shares, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/accessing-file-shares.html">Accessing File Shares</a>.</p>
   */
  PreferredFileServerIp?: string;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
   *             which the Windows File Server instance is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;

  /**
   * <p>The ID for an existing Microsoft Active Directory instance that the file system should join when
   *             it's created.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per
   *             second.</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, it specifies the ID of the subnet where the preferred file server is located.
   *             Must be one of the two subnet IDs specified in <code>SubnetIds</code> property.
   *             Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server.</p>
   *         <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this value is the same as that for <code>SubnetIDs</code>.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html#single-multi-az-resources">Availability and Durability: Single-AZ and Multi-AZ File Systems</a>
   *          </p>
   */
  PreferredSubnetId?: string;

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
   *             only the specified tags are copied to backups. If you specify one or more tags when
   *             creating a user-initiated backup, no tags are copied from the file system,
   *             regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, use this endpoint when performing administrative tasks on the file system using
   *             Amazon FSx Remote PowerShell.</p>
   *         <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this is the DNS name of the file system.</p>
   *         <p>This endpoint is temporarily unavailable when the file system is undergoing maintenance.</p>
   */
  RemoteAdministrationEndpoint?: string;
}

export namespace WindowsFileSystemConfiguration {
  export const filterSensitiveLog = (obj: WindowsFileSystemConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WindowsFileSystemConfiguration => __isa(o, "WindowsFileSystemConfiguration");
}
