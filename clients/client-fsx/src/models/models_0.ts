import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>The Microsoft AD attributes of the Amazon FSx for Windows File Server file system.</p>
 */
export interface ActiveDirectoryBackupAttributes {
  /**
   * <p>The fully qualified domain name of the self-managed AD directory.</p>
   */
  DomainName?: string;

  /**
   * <p>The ID of the Amazon Web Services Managed Microsoft Active Directory instance to which the file system is joined.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;
}

export namespace ActiveDirectoryBackupAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveDirectoryBackupAttributes): any => ({
    ...obj,
  });
}

export enum ActiveDirectoryErrorType {
  DOMAIN_NOT_FOUND = "DOMAIN_NOT_FOUND",
  INCOMPATIBLE_DOMAIN_MODE = "INCOMPATIBLE_DOMAIN_MODE",
  INVALID_DOMAIN_STAGE = "INVALID_DOMAIN_STAGE",
  WRONG_VPC = "WRONG_VPC",
}

/**
 * <p>An Active Directory error.</p>
 */
export interface ActiveDirectoryError extends __SmithyException, $MetadataBearer {
  name: "ActiveDirectoryError";
  $fault: "client";
  /**
   * <p>The directory ID of the directory that an error pertains to.</p>
   */
  ActiveDirectoryId: string | undefined;

  /**
   * <p>The type of Active Directory error.</p>
   */
  Type?: ActiveDirectoryErrorType | string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace ActiveDirectoryError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveDirectoryError): any => ({
    ...obj,
  });
}

export enum AdministrativeActionType {
  FILE_SYSTEM_ALIAS_ASSOCIATION = "FILE_SYSTEM_ALIAS_ASSOCIATION",
  FILE_SYSTEM_ALIAS_DISASSOCIATION = "FILE_SYSTEM_ALIAS_DISASSOCIATION",
  FILE_SYSTEM_UPDATE = "FILE_SYSTEM_UPDATE",
  STORAGE_OPTIMIZATION = "STORAGE_OPTIMIZATION",
}

/**
 * <p>Provides information about a failed administrative action.</p>
 */
export interface AdministrativeActionFailureDetails {
  /**
   * <p>Error message providing details about the failed administrative action.</p>
   */
  Message?: string;
}

export namespace AdministrativeActionFailureDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdministrativeActionFailureDetails): any => ({
    ...obj,
  });
}

export enum Status {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  UPDATED_OPTIMIZING = "UPDATED_OPTIMIZING",
}

/**
 * <p>A structure providing details of any failures that occur when creating the file system
 *             has failed.</p>
 */
export interface FileSystemFailureDetails {
  /**
   * <p>A message describing any failures that occurred during file system creation.</p>
   */
  Message?: string;
}

export namespace FileSystemFailureDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSystemFailureDetails): any => ({
    ...obj,
  });
}

export enum FileSystemType {
  LUSTRE = "LUSTRE",
  ONTAP = "ONTAP",
  WINDOWS = "WINDOWS",
}

export enum FileSystemLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MISCONFIGURED = "MISCONFIGURED",
  UPDATING = "UPDATING",
}

export enum DataCompressionType {
  LZ4 = "LZ4",
  NONE = "NONE",
}

export enum AutoImportPolicyType {
  NEW = "NEW",
  NEW_CHANGED = "NEW_CHANGED",
  NONE = "NONE",
}

/**
 * <p>Provides detailed information about the data respository if its <code>Lifecycle</code> is
 *             set to <code>MISCONFIGURED</code>.</p>
 */
export interface DataRepositoryFailureDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryFailureDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryFailureDetails): any => ({
    ...obj,
  });
}

export enum DataRepositoryLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  MISCONFIGURED = "MISCONFIGURED",
  UPDATING = "UPDATING",
}

/**
 * <p>The data repository configuration object for Lustre file systems returned in the response of
 *             the <code>CreateFileSystem</code> operation.</p>
 */
export interface DataRepositoryConfiguration {
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

  /**
   * <p>The import path to the Amazon S3 bucket (and optional prefix) that you're using
   *             as the data repository for your FSx for Lustre file system, for example
   *                 <code>s3://import-bucket/optional-prefix</code>. If a prefix is specified after the
   *             Amazon S3 bucket name, only object keys with that prefix are loaded into the file
   *             system.</p>
   */
  ImportPath?: string;

  /**
   * <p>The export path to the Amazon S3 bucket (and prefix) that you are using to store new and
   *             changed Lustre file system files in S3.</p>
   */
  ExportPath?: string;

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
   * <p>Describes the file system's linked S3 data repository's <code>AutoImportPolicy</code>.
   *             The AutoImportPolicy configures how Amazon FSx keeps your file and directory listings up to date
   *             as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - (Default) AutoImport is off. Amazon FSx only updates
   *                 file and directory listings from the linked S3 bucket
   *                 when the file system is created. FSx does not update file and directory
   *                 listings for any new or changed objects after choosing this option.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - AutoImport is on. Amazon FSx automatically imports
   *                 directory listings of any new objects added to the linked S3 bucket that
   *                 do not currently exist in the FSx file system. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED</code> - AutoImport is on. Amazon FSx automatically imports
   *                 file and directory listings of any new objects added to the S3 bucket and any
   *                 existing objects that are changed in the S3 bucket after you choose this option.
   *             </p>
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
}

export namespace DataRepositoryConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryConfiguration): any => ({
    ...obj,
  });
}

export enum LustreDeploymentType {
  PERSISTENT_1 = "PERSISTENT_1",
  SCRATCH_1 = "SCRATCH_1",
  SCRATCH_2 = "SCRATCH_2",
}

export enum DriveCacheType {
  NONE = "NONE",
  READ = "READ",
}

/**
 * <p>The configuration for the Amazon FSx for Lustre file system.</p>
 */
export interface LustreFileSystemConfiguration {
  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The data repository configuration object for Lustre file systems returned in the response of
   *             the <code>CreateFileSystem</code> operation.</p>
   */
  DataRepositoryConfiguration?: DataRepositoryConfiguration;

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
   * <p> Per unit storage throughput represents the megabytes per second of read or write
   *             throughput per 1 tebibyte of storage provisioned. File system throughput capacity is
   *             equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). This option is
   *             only valid for <code>PERSISTENT_1</code> deployment types. </p>
   *         <p>Valid values for SSD storage: 50, 100, 200. Valid values for HDD storage: 12, 40. </p>
   */
  PerUnitStorageThroughput?: number;

  /**
   * <p>You use the <code>MountName</code> value when mounting the file system.</p>
   *         <p>For the <code>SCRATCH_1</code> deployment type, this value is always "<code>fsx</code>".
   *             For <code>SCRATCH_2</code> and <code>PERSISTENT_1</code> deployment types, this
   *             value is a string that is unique within an Amazon Web Services Region.
   *
   *         </p>
   */
  MountName?: string;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 90 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

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
   * <p>The type of drive cache used by PERSISTENT_1 file systems that are provisioned with
   *             HDD storage devices. This parameter is required when storage type is HDD. Set to
   *             <code>READ</code>, improve the performance for frequently accessed files and allows 20%
   *             of the total storage capacity of the file system to be cached.  </p>
   *         <p>This parameter is required when <code>StorageType</code> is set to HDD.</p>
   */
  DriveCacheType?: DriveCacheType | string;

  /**
   * <p>The data compression configuration for the file system. <code>DataCompressionType</code>
   *             can have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Data compression is turned off for
   *                 the file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LZ4</code> - Data compression is turned on with the LZ4
   *                 algorithm.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a>.</p>
   */
  DataCompressionType?: DataCompressionType | string;
}

export namespace LustreFileSystemConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LustreFileSystemConfiguration): any => ({
    ...obj,
  });
}

export enum OntapDeploymentType {
  MULTI_AZ_1 = "MULTI_AZ_1",
}

export enum DiskIopsConfigurationMode {
  AUTOMATIC = "AUTOMATIC",
  USER_PROVISIONED = "USER_PROVISIONED",
}

/**
 * <p>The SSD IOPS (input/output operations per second) configuration
 *             for an Amazon FSx for NetApp ONTAP file system. The default is 3 IOPS
 *             per GB of storage capacity, but you can provision additional IOPS
 *             per GB of storage. The configuration consists of the total number
 *             of provisioned SSD IOPS and how the amount was provisioned
 *             (by the customer or by the system).</p>
 */
export interface DiskIopsConfiguration {
  /**
   * <p>Specifies whether the number of IOPS for the file system is
   *             using the system default (<code>AUTOMATIC</code>) or was
   *             provisioned by the customer (<code>USER_PROVISIONED</code>).</p>
   */
  Mode?: DiskIopsConfigurationMode | string;

  /**
   * <p>The total number of SSD IOPS provisioned for the file system.</p>
   */
  Iops?: number;
}

export namespace DiskIopsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiskIopsConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon FSx for NetApp ONTAP file system has two endpoints
 *             that are used to access data or to manage the file system
 *             using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They
 *             are the <code>Management</code> and <code>Intercluster</code> endpoints.</p>
 */
export interface FileSystemEndpoint {
  /**
   * <p>The Domain Name Service (DNS) name for the file system. You can mount your file
   *             system using its DNS name.</p>
   */
  DNSName?: string;

  /**
   * <p>IP addresses of the file system endpoint.</p>
   */
  IpAddresses?: string[];
}

export namespace FileSystemEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSystemEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon FSx for NetApp ONTAP file system has the following endpoints
 *             that are used to access data or to manage the file system using the
 *             NetApp ONTAP CLI, REST API, or NetApp SnapMirror.</p>
 */
export interface FileSystemEndpoints {
  /**
   * <p>An endpoint for managing your file system by setting up NetApp SnapMirror
   *             with other ONTAP systems.</p>
   */
  Intercluster?: FileSystemEndpoint;

  /**
   * <p>An endpoint for managing your file system using the NetApp ONTAP CLI
   *             and NetApp ONTAP API.</p>
   */
  Management?: FileSystemEndpoint;
}

export namespace FileSystemEndpoints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSystemEndpoints): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for the FSx for NetApp ONTAP file system.</p>
 */
export interface OntapFileSystemConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 90 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The ONTAP file system deployment type.</p>
   */
  DeploymentType?: OntapDeploymentType | string;

  /**
   * <p>The IP address range in which the endpoints to access your file system
   *             are created.</p>
   */
  EndpointIpAddressRange?: string;

  /**
   * <p>The <code>Management</code> and <code>Intercluster</code> endpoints
   *             that are used to access data or to manage the file system using the
   *             NetApp ONTAP CLI, REST API, or NetApp SnapMirror.</p>
   */
  Endpoints?: FileSystemEndpoints;

  /**
   * <p>The SSD IOPS configuration for the ONTAP file system, specifying
   *             the number of provisioned IOPS and the provision mode.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * <p>The ID for a subnet. A <i>subnet</i> is a range of IP addresses in
   *             your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the
   *                 <i>Amazon VPC User Guide.</i>
   *          </p>
   */
  PreferredSubnetId?: string;

  /**
   * <p>The VPC route tables in which your file system's endpoints are
   *             created.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>Sustained throughput of an Amazon FSx file system in MBps.</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *         <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *         <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *         <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace OntapFileSystemConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OntapFileSystemConfiguration): any => ({
    ...obj,
  });
}

export enum StorageType {
  HDD = "HDD",
  SSD = "SSD",
}

/**
 * <p>Specifies a key-value pair for a resource tag.</p>
 */
export interface Tag {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export enum AliasLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

/**
 * <p>A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using
 *             user-defined DNS names, in addition to the default DNS name
 *             that Amazon FSx assigns to the file system. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>
 *             in the <i>FSx for Windows File Server User Guide</i>.</p>
 */
export interface Alias {
  /**
   * <p>The name of the DNS alias. The alias name has to meet the following requirements:</p>
   *         <ul>
   *             <li>
   *                <p>Formatted as a fully-qualified domain name (FQDN), <code>hostname.domain</code>, for example, <code>accounting.example.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Can contain alphanumeric characters, the underscore (_), and the hyphen (-).</p>
   *             </li>
   *             <li>
   *                <p>Cannot start or end with a hyphen.</p>
   *             </li>
   *             <li>
   *                <p>Can start with a numeric.</p>
   *             </li>
   *          </ul>
   *         <p>For DNS names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them:
   *             as uppercase letters, lowercase letters, or the corresponding letters in escape codes.</p>
   */
  Name?: string;

  /**
   * <p>Describes the state of the DNS alias.</p>
   *         <ul>
   *             <li>
   *                <p>AVAILABLE - The DNS alias is associated with an Amazon FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>CREATING - Amazon FSx is creating the DNS alias and associating it with the file system.</p>
   *             </li>
   *             <li>
   *                <p>CREATE_FAILED - Amazon FSx was unable to associate the DNS alias with the file system.</p>
   *             </li>
   *             <li>
   *                <p>DELETING - Amazon FSx is disassociating the DNS alias from the file system and deleting it.</p>
   *             </li>
   *             <li>
   *                <p>DELETE_FAILED - Amazon FSx was unable to disassociate the DNS alias from the file system.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: AliasLifecycle | string;
}

export namespace Alias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alias): any => ({
    ...obj,
  });
}

export enum WindowsAccessAuditLogLevel {
  DISABLED = "DISABLED",
  FAILURE_ONLY = "FAILURE_ONLY",
  SUCCESS_AND_FAILURE = "SUCCESS_AND_FAILURE",
  SUCCESS_ONLY = "SUCCESS_ONLY",
}

/**
 * <p>The configuration that Amazon FSx for Windows File Server uses to audit and log
 *             user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server
 *             file system. For more information,
 *             see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html">
 *                 File access auditing</a>.</p>
 */
export interface WindowsAuditLogConfiguration {
  /**
   * <p>Sets which attempt type is logged by Amazon FSx for file and folder accesses.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS_ONLY</code> - only successful attempts to access files
   *                     or folders are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILURE_ONLY</code> - only failed attempts to access files
   *                     or folders are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS_AND_FAILURE</code> - both successful attempts and
   *                     failed attempts to access files or folders are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> - access auditing of files and folders is turned off.</p>
   *             </li>
   *          </ul>
   */
  FileAccessAuditLogLevel: WindowsAccessAuditLogLevel | string | undefined;

  /**
   * <p>Sets which attempt type is logged by Amazon FSx for file share accesses.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS_ONLY</code> - only successful attempts to access file
   *                     shares are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILURE_ONLY</code> - only failed attempts to access file
   *                     shares are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS_AND_FAILURE</code> - both successful attempts and
   *                     failed attempts to access file shares are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> - access auditing of file shares is turned off.</p>
   *             </li>
   *          </ul>
   */
  FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the destination of the audit logs.
   *             The destination can be any Amazon CloudWatch Logs log group ARN or
   *             Amazon Kinesis Data Firehose delivery stream ARN.</p>
   *         <p>The name of the Amazon CloudWatch Logs log group must begin with
   *             the <code>/aws/fsx</code> prefix. The name of the Amazon Kinesis Data
   *             Firehouse delivery stream must begin with the <code>aws-fsx</code> prefix.</p>
   *         <p>The destination ARN (either CloudWatch Logs log group or Kinesis
   *             Data Firehose delivery stream) must be in the same Amazon Web Services partition,
   *             Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p>
   */
  AuditLogDestination?: string;
}

export namespace WindowsAuditLogConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WindowsAuditLogConfiguration): any => ({
    ...obj,
  });
}

export enum WindowsDeploymentType {
  MULTI_AZ_1 = "MULTI_AZ_1",
  SINGLE_AZ_1 = "SINGLE_AZ_1",
  SINGLE_AZ_2 = "SINGLE_AZ_2",
}

export enum FileSystemMaintenanceOperation {
  BACKING_UP = "BACKING_UP",
  PATCHING = "PATCHING",
}

/**
 * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
 *             which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.</p>
 */
export interface SelfManagedActiveDirectoryAttributes {
  /**
   * <p>The fully qualified domain name of the self-managed AD directory.</p>
   */
  DomainName?: string;

  /**
   * <p>The fully qualified distinguished name of the organizational unit within the
   *             self-managed AD directory to which the Windows File Server  or ONTAP storage virtual machine (SVM) instance is joined.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

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

  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory.</p>
   */
  DnsIps?: string[];
}

export namespace SelfManagedActiveDirectoryAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelfManagedActiveDirectoryAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for this Microsoft Windows file system.</p>
 */
export interface WindowsFileSystemConfiguration {
  /**
   * <p>The ID for an existing Amazon Web Services Managed Microsoft Active Directory instance that the file system is joined to.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
   *             which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;

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
   * <p>For <code>MULTI_AZ_1</code> deployment types, use this endpoint when performing administrative tasks on the file system using
   *             Amazon FSx Remote PowerShell.</p>
   *         <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this is the DNS name of the file system.</p>
   *         <p>This endpoint is temporarily unavailable when the file system is undergoing maintenance.</p>
   */
  RemoteAdministrationEndpoint?: string;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, it specifies the ID of the subnet where the preferred file server is located.
   *             Must be one of the two subnet IDs specified in <code>SubnetIds</code> property.
   *             Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server.</p>
   *         <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this value is the same as that for <code>SubnetIDs</code>.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html#single-multi-az-resources">Availability and durability: Single-AZ and Multi-AZ file systems</a>.</p>
   */
  PreferredSubnetId?: string;

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
   * <p>The throughput of the Amazon FSx file system, measured in megabytes per
   *             second.</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>The list of maintenance operations in progress for this file system.</p>
   */
  MaintenanceOperationsInProgress?: (FileSystemMaintenanceOperation | string)[];

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The preferred time to take daily automatic backups, in the UTC time zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables automatic
   *             backups. You can retain automatic backups for a maximum of 90 days.</p>
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
   * <p>An array of one or more DNS aliases that are currently associated with the Amazon FSx file system.
   *             Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system.
   *             You can associate up to 50 aliases with a file system at any time.
   *             You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation.
   *             You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation.
   *             You only need to specify the alias name in the request payload. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>.</p>
   */
  Aliases?: Alias[];

  /**
   * <p>The configuration that Amazon FSx for Windows File Server uses to audit and log
   *             user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server
   *             file system.</p>
   */
  AuditLogConfiguration?: WindowsAuditLogConfiguration;
}

export namespace WindowsFileSystemConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WindowsFileSystemConfiguration): any => ({
    ...obj,
  });
}

export enum VolumeLifecycle {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MISCONFIGURED = "MISCONFIGURED",
  PENDING = "PENDING",
}

/**
 * <p>Describes why a resource lifecycle state changed.</p>
 */
export interface LifecycleTransitionReason {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace LifecycleTransitionReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LifecycleTransitionReason): any => ({
    ...obj,
  });
}

export enum FlexCacheEndpointType {
  CACHE = "CACHE",
  NONE = "NONE",
  ORIGIN = "ORIGIN",
}

export enum OntapVolumeType {
  DP = "DP",
  LS = "LS",
  RW = "RW",
}

export enum SecurityStyle {
  MIXED = "MIXED",
  NTFS = "NTFS",
  UNIX = "UNIX",
}

export enum TieringPolicyName {
  ALL = "ALL",
  AUTO = "AUTO",
  NONE = "NONE",
  SNAPSHOT_ONLY = "SNAPSHOT_ONLY",
}

/**
 * <p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent
 *             tiering automatically transitions a volume's data between the file system's primary storage and capacity
 *             pool storage based on your access patterns.</p>
 */
export interface TieringPolicy {
  /**
   * <p>Specifies the number of days that user data in a volume must remain inactive before it is considered "cold"
   *             and moved to the capacity pool. Used with the <code>AUTO</code> and <code>SNAPSHOT_ONLY</code> tiering policies.
   *             Enter a whole number between 2 and 183. Default values are 31 days for <code>AUTO</code> and 2 days for
   *             <code>SNAPSHOT_ONLY</code>.</p>
   */
  CoolingPeriod?: number;

  /**
   * <p>Specifies the tiering policy used to transition data. Default value is <code>SNAPSHOT_ONLY</code>.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>SNAPSHOT_ONLY</code> - moves cold snapshots to the capacity pool storage tier.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier
   *                 based on your access patterns.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the
   *                 storage pool tier.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to
   *                 the capacity pool tier.</p>
   *             </li>
   *          </ul>
   */
  Name?: TieringPolicyName | string;
}

export namespace TieringPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TieringPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of an Amazon FSx for NetApp ONTAP volume</p>
 */
export interface OntapVolumeConfiguration {
  /**
   * <p>Specifies the FlexCache endpoint type of the volume.
   *             Valid values are the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> specifies that the volume doesn't have a FlexCache configuration.
   *                 <code>NONE</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ORIGIN</code> specifies that the volume is the origin volume for a FlexCache volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CACHE</code> specifies that the volume is a FlexCache volume.</p>
   *             </li>
   *          </ul>
   */
  FlexCacheEndpointType?: FlexCacheEndpointType | string;

  /**
   * <p>Specifies the directory that NAS clients use to mount the volume, along with the SVM DNS name or IP address.
   *         You can create a <code>JunctionPath</code> directly below a parent volume junction or on a
   *         directory within a volume. A <code>JunctionPath</code> for a volume named vol3 might
   *         be /vol1/vol2/vol3, or /vol1/dir2/vol3, or even /dir1/dir2/vol3..</p>
   */
  JunctionPath?: string;

  /**
   * <p>The security style for the volume, which can be <code>UNIX</code>,
   *             <code>NTFS</code>, or <code>MIXED</code>.</p>
   */
  SecurityStyle?: SecurityStyle | string;

  /**
   * <p>The configured size of the volume, in megabytes (MBs).</p>
   */
  SizeInMegabytes?: number;

  /**
   * <p>The volume's storage efficiency setting.</p>
   */
  StorageEfficiencyEnabled?: boolean;

  /**
   * <p>The ID of the volume's storage virtual machine.</p>
   */
  StorageVirtualMachineId?: string;

  /**
   * <p>A boolean flag indicating whether this volume is the root volume for
   *             its storage virtual machine (SVM). Only one volume on an SVM can be the
   *             root volume. This value defaults to false. If this value is true, then
   *             this is the SVM root volume.</p>
   *         <p>This flag is useful when you're deleting an SVM, because you must
   *             first delete all non-root volumes. This flag, when set to false, helps
   *             you identify which volumes to delete before you can delete the SVM.</p>
   */
  StorageVirtualMachineRoot?: boolean;

  /**
   * <p>The volume's <code>TieringPolicy</code> setting.</p>
   */
  TieringPolicy?: TieringPolicy;

  /**
   * <p>The volume's UUID (universally unique identifier).</p>
   */
  UUID?: string;

  /**
   * <p>Specifies the type of volume. Valid values are the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>RW</code> specifies a read-write volume.
   *                 <code>RW</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DP</code> specifies a data protection volume. You can
   *                 protect data by replicating it to data protection mirror copies and use
   *                 data protection mirror copies to recover data when a disaster occurs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LS</code> specifies a load-sharing mirror volume.
   *                 A load-sharing mirror reduces the network traffic to a FlexVol volume
   *                 by providing additional read-only access to clients.</p>
   *             </li>
   *          </ul>
   */
  OntapVolumeType?: OntapVolumeType | string;
}

export namespace OntapVolumeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OntapVolumeConfiguration): any => ({
    ...obj,
  });
}

export enum VolumeType {
  ONTAP = "ONTAP",
}

/**
 * <p>Describes an Amazon FSx for NetApp ONTAP volume.</p>
 */
export interface Volume {
  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The lifecycle status of the volume.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - The volume is fully available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon FSx is creating the new volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Amazon FSx is deleting an existing volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Amazon FSx was unable to create the volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURED</code> - The volume is in a failed but recoverable state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon FSx has not started creating the volume.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: VolumeLifecycle | string;

  /**
   * <p>The name of the volume.</p>
   */
  Name?: string;

  /**
   * <p>The configuration of an Amazon FSx for NetApp ONTAP volume</p>
   */
  OntapConfiguration?: OntapVolumeConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The system-generated, unique ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The type of volume; <code>ONTAP</code> is the only valid volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Describes why the volume lifecycle state changed.</p>
   */
  LifecycleTransitionReason?: LifecycleTransitionReason;
}

export namespace Volume {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Volume): any => ({
    ...obj,
  });
}

/**
 * <p>The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.</p>
 */
export interface AssociateFileSystemAliasesRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Specifies the file system with which you want to associate one or more DNS aliases.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>An array of one or more DNS alias names to associate with the file system.
   *             The alias name has to comply with the following formatting requirements:</p>
   *             <ul>
   *             <li>
   *                <p>Formatted as a fully-qualified domain name (FQDN), <i>
   *                      <code>hostname.domain</code>
   *                   </i>,
   *                     for example, <code>accounting.corp.example.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Can contain alphanumeric characters and the hyphen (-).</p>
   *             </li>
   *             <li>
   *                <p>Cannot start or end with a hyphen.</p>
   *             </li>
   *             <li>
   *                <p>Can start with a numeric.</p>
   *             </li>
   *          </ul>
   *         <p>For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them:
   *             as uppercase letters, lowercase letters, or the corresponding letters in escape codes.</p>
   */
  Aliases: string[] | undefined;
}

export namespace AssociateFileSystemAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateFileSystemAliasesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The system generated response showing the DNS aliases that
 *             Amazon FSx is attempting to associate with the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             associating with the file system. It can take up to 2.5 minutes for
 *         the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>. </p>
 */
export interface AssociateFileSystemAliasesResponse {
  /**
   * <p>An array of the DNS aliases that Amazon FSx is associating with the file system.</p>
   */
  Aliases?: Alias[];
}

export namespace AssociateFileSystemAliasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateFileSystemAliasesResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequest): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSystemNotFound): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>Cancels a data repository task.</p>
 */
export interface CancelDataRepositoryTaskRequest {
  /**
   * <p>Specifies the data repository task to cancel.</p>
   */
  TaskId: string | undefined;
}

export namespace CancelDataRepositoryTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelDataRepositoryTaskRequest): any => ({
    ...obj,
  });
}

export enum DataRepositoryTaskLifecycle {
  CANCELED = "CANCELED",
  CANCELING = "CANCELING",
  EXECUTING = "EXECUTING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

export interface CancelDataRepositoryTaskResponse {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelDataRepositoryTaskResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryTaskEnded): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryTaskNotFound): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperation): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupNotFound): any => ({
    ...obj,
  });
}

export interface CopyBackupRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the source backup. Specifies the ID of the backup that is
   *          being copied.</p>
   */
  SourceBackupId: string | undefined;

  /**
   * <p>The source Amazon Web Services Region of the backup. Specifies the Amazon Web Services Region from which
   *          the backup is being copied. The source and destination Regions must be in
   *          the same Amazon Web Services partition. If you don't specify a Region, it defaults to
   *          the Region where the request is sent from (in-Region copy).</p>
   */
  SourceRegion?: string;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt the file system's data
   *             for Amazon FSx for Windows File Server file systems, Amazon FSx for NetApp ONTAP file systems, and
   *             Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. If not specified, the Amazon FSx
   *             managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems
   *             are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a>
   *             in the <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A boolean flag indicating whether tags from the source backup
   *          should be copied to the backup copy. This value defaults to false.</p>
   *          <p>If you set <code>CopyTags</code> to true and the source backup has
   *          existing tags, you can use the <code>Tags</code> parameter to create new
   *          tags, provided that the sum of the source backup tags and the new tags
   *          doesn't exceed 50. Both sets of tags are merged. If there are tag
   *          conflicts (for example, two tags with the same key but different values),
   *          the tags created with the <code>Tags</code> parameter take precedence.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

export namespace CopyBackupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyBackupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>If backup creation fails, this structure contains the details of that
 *             failure.</p>
 */
export interface BackupFailureDetails {
  /**
   * <p>A message describing the backup creation failure.</p>
   */
  Message?: string;
}

export namespace BackupFailureDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupFailureDetails): any => ({
    ...obj,
  });
}

export enum BackupLifecycle {
  AVAILABLE = "AVAILABLE",
  COPYING = "COPYING",
  CREATING = "CREATING",
  DELETED = "DELETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  TRANSFERRING = "TRANSFERRING",
}

export enum ResourceType {
  FILE_SYSTEM = "FILE_SYSTEM",
  VOLUME = "VOLUME",
}

export enum BackupType {
  AUTOMATIC = "AUTOMATIC",
  AWS_BACKUP = "AWS_BACKUP",
  USER_INITIATED = "USER_INITIATED",
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
   * <p>A parameter that is incompatible with the earlier request.</p>
   */
  Parameter: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace IncompatibleParameterError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncompatibleParameterError): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon FSx doesn't support Multi-AZ Windows File Server
 *          copy backup in the destination Region, so the copied backup
 *          can't be restored.</p>
 */
export interface IncompatibleRegionForMultiAZ extends __SmithyException, $MetadataBearer {
  name: "IncompatibleRegionForMultiAZ";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace IncompatibleRegionForMultiAZ {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncompatibleRegionForMultiAZ): any => ({
    ...obj,
  });
}

/**
 * <p>The Key Management Service (KMS) key of the destination
 *          backup is invalid.</p>
 */
export interface InvalidDestinationKmsKey extends __SmithyException, $MetadataBearer {
  name: "InvalidDestinationKmsKey";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InvalidDestinationKmsKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDestinationKmsKey): any => ({
    ...obj,
  });
}

/**
 * <p>The Region provided for <code>Source Region</code> is invalid or
 *          is in a different Amazon Web Services partition.</p>
 */
export interface InvalidRegion extends __SmithyException, $MetadataBearer {
  name: "InvalidRegion";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InvalidRegion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRegion): any => ({
    ...obj,
  });
}

/**
 * <p>The Key Management Service (KMS) key of the source backup
 *          is invalid.</p>
 */
export interface InvalidSourceKmsKey extends __SmithyException, $MetadataBearer {
  name: "InvalidSourceKmsKey";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace InvalidSourceKmsKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSourceKmsKey): any => ({
    ...obj,
  });
}

export enum ServiceLimit {
  FILE_SYSTEM_COUNT = "FILE_SYSTEM_COUNT",
  STORAGE_VIRTUAL_MACHINES_PER_FILE_SYSTEM = "STORAGE_VIRTUAL_MACHINES_PER_FILE_SYSTEM",
  TOTAL_IN_PROGRESS_COPY_BACKUPS = "TOTAL_IN_PROGRESS_COPY_BACKUPS",
  TOTAL_SSD_IOPS = "TOTAL_SSD_IOPS",
  TOTAL_STORAGE = "TOTAL_STORAGE",
  TOTAL_THROUGHPUT_CAPACITY = "TOTAL_THROUGHPUT_CAPACITY",
  TOTAL_USER_INITIATED_BACKUPS = "TOTAL_USER_INITIATED_BACKUPS",
  TOTAL_USER_TAGS = "TOTAL_USER_TAGS",
  VOLUMES_PER_FILE_SYSTEM = "VOLUMES_PER_FILE_SYSTEM",
}

/**
 * <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 */
export interface ServiceLimitExceeded extends __SmithyException, $MetadataBearer {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the lifecycle status of the
 *          source backup is not <code>AVAILABLE</code>.</p>
 */
export interface SourceBackupUnavailable extends __SmithyException, $MetadataBearer {
  name: "SourceBackupUnavailable";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID of the source backup. Specifies the backup you are copying.</p>
   */
  BackupId?: string;
}

export namespace SourceBackupUnavailable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceBackupUnavailable): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupInProgress): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for the <code>CreateBackup</code> operation.</p>
 */
export interface CreateBackupRequest {
  /**
   * <p>The ID of the file system to back up.</p>
   */
  FileSystemId?: string;

  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>(Optional) The tags to apply to the backup at backup creation. The key value of the
   *             <code>Name</code> tag appears in the console as the backup name. If you have set <code>CopyTagsToBackups</code> to true, and
   *             you specify one or more tags using the <code>CreateBackup</code> action, no existing file system tags are copied from the file system to the backup.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of he FSx for NetApp ONTAP volume to back up.</p>
   */
  VolumeId?: string;
}

export namespace CreateBackupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>No Amazon FSx for NetApp ONTAP volumes were found based upon the supplied parameters.</p>
 */
export interface VolumeNotFound extends __SmithyException, $MetadataBearer {
  name: "VolumeNotFound";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace VolumeNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeNotFound): any => ({
    ...obj,
  });
}

export enum ReportFormat {
  REPORT_CSV_20191124 = "REPORT_CSV_20191124",
}

export enum ReportScope {
  FAILED_FILES_ONLY = "FAILED_FILES_ONLY",
}

/**
 * <p>Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter.
 *             FSx delivers the report to the file system's linked data repository in Amazon S3,
 *             using the path specified in the report <code>Path</code> parameter.
 *             You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.</p>
 */
export interface CompletionReport {
  /**
   * <p>Set <code>Enabled</code> to <code>True</code> to generate a <code>CompletionReport</code> when the task completes.
   *             If set to <code>true</code>, then you need to provide a report <code>Scope</code>, <code>Path</code>, and <code>Format</code>.
   *             Set <code>Enabled</code> to <code>False</code> if you do not want a <code>CompletionReport</code> generated when the task completes.</p>
   */
  Enabled: boolean | undefined;

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

  /**
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the scope of the <code>CompletionReport</code>; <code>FAILED_FILES_ONLY</code> is the only scope currently supported.
   *             When <code>Scope</code> is set to <code>FAILED_FILES_ONLY</code>, the <code>CompletionReport</code> only contains information about files that the data repository task failed to process.</p>
   */
  Scope?: ReportScope | string;
}

export namespace CompletionReport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompletionReport): any => ({
    ...obj,
  });
}

export enum DataRepositoryTaskType {
  EXPORT = "EXPORT_TO_REPOSITORY",
}

export interface CreateDataRepositoryTaskRequest {
  /**
   * <p>Specifies the type of data repository task to create.</p>
   */
  Type: DataRepositoryTaskType | string | undefined;

  /**
   * <p>(Optional) The path or paths on the Amazon FSx file system to use when the data repository task is processed.
   *             The default path is the file system root directory. The paths you provide need to be relative to the mount point of the file system.
   *             If the mount point is <code>/mnt/fsx</code> and <code>/mnt/fsx/path1</code> is a directory or
   *             file on the file system you want to export, then the path to provide is <code>path1</code>.
   *             If a path that you provide isn't valid, the task fails.</p>
   */
  Paths?: string[];

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>Defines whether or not Amazon FSx provides a CompletionReport once the task has completed.
   *             A CompletionReport provides a detailed  report on the files that Amazon FSx processed that meet the criteria specified by the
   *             <code>Scope</code> parameter. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/task-completion-report.html">Working with Task Completion Reports</a>.</p>
   */
  Report: CompletionReport | undefined;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDataRepositoryTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataRepositoryTaskRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.</p>
 */
export interface DataRepositoryTaskFailureDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace DataRepositoryTaskFailureDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryTaskFailureDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the task status showing a running total of the total number of files to be processed,
 *             the number successfully processed, and the number of files the task failed to process.</p>
 */
export interface DataRepositoryTaskStatus {
  /**
   * <p>The total number of files that the task will process. While a task is executing, the sum of
   *             <code>SucceededCount</code> plus <code>FailedCount</code> may not equal <code>TotalCount</code>. When the task is complete,
   *             <code>TotalCount</code> equals the sum of <code>SucceededCount</code> plus <code>FailedCount</code>.</p>
   */
  TotalCount?: number;

  /**
   * <p>A running total of the number of files that the task has successfully processed.</p>
   */
  SucceededCount?: number;

  /**
   * <p>A running total of the number of files that the task failed to process.</p>
   */
  FailedCount?: number;

  /**
   * <p>The time at which the task status was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace DataRepositoryTaskStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryTaskStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A description of the data repository task. You use data repository tasks
 *             to perform bulk transfer operations between your Amazon FSx file system and its linked data
 *             repository.</p>
 */
export interface DataRepositoryTask {
  /**
   * <p>The system-generated, unique 17-digit ID of the data repository task.</p>
   */
  TaskId: string | undefined;

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
   * <p>The type of data repository task; EXPORT_TO_REPOSITORY is the only type currently supported.</p>
   */
  Type: DataRepositoryTaskType | string | undefined;

  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time that Amazon FSx began processing the task.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time that Amazon FSx completed processing the task, populated after the task is complete.</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>An array of paths on the Amazon FSx for Lustre file system that specify the data for the data repository task to process.
   *             For example, in an EXPORT_TO_REPOSITORY task, the paths specify which data to export to the linked data repository.</p>
   *             <p>(Default) If <code>Paths</code> is not specified, Amazon FSx uses the file system root directory.</p>
   */
  Paths?: string[];

  /**
   * <p>Failure message describing why the task failed, it is populated only when <code>Lifecycle</code> is set to <code>FAILED</code>.</p>
   */
  FailureDetails?: DataRepositoryTaskFailureDetails;

  /**
   * <p>Provides the status of the number of files that the task has processed successfully and failed to process.</p>
   */
  Status?: DataRepositoryTaskStatus;

  /**
   * <p>Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter.
   *             FSx delivers the report to the file system's linked data repository in Amazon S3,
   *             using the path specified in the report <code>Path</code> parameter.
   *             You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.</p>
   */
  Report?: CompletionReport;
}

export namespace DataRepositoryTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryTask): any => ({
    ...obj,
  });
}

export interface CreateDataRepositoryTaskResponse {
  /**
   * <p>The description of the data repository task that you just created.</p>
   */
  DataRepositoryTask?: DataRepositoryTask;
}

export namespace CreateDataRepositoryTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataRepositoryTaskResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryTaskExecuting): any => ({
    ...obj,
  });
}

/**
 * <p>The Lustre configuration for the file system being created.
 *             </p>
 */
export interface CreateFileSystemLustreConfiguration {
  /**
   * <p>(Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

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
   *             <p>Encryption of data in-transit for <code>SCRATCH_2</code> and <code>PERSISTENT_1</code>
   *                 deployment types is supported when accessed from supported instance types in supported Amazon Web Services Regions. To learn more,
   *                 <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html">Encrypting Data in Transit</a>.</p>
   */
  DeploymentType?: LustreDeploymentType | string;

  /**
   * <p> (Optional) When you create your file system, your existing S3 objects appear as file and directory listings.
   *             Use this property to choose how Amazon FSx keeps your file and directory listings up to date
   *             as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can
   *             have the following values:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - (Default) AutoImport is off. Amazon FSx only updates
   *                 file and directory listings from the linked S3 bucket
   *                 when the file system is created. FSx does not update file and directory
   *                 listings for any new or changed objects after choosing this option.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - AutoImport is on. Amazon FSx automatically imports
   *                 directory listings of any new objects added to the linked S3 bucket that
   *                 do not currently exist in the FSx file system. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED</code> - AutoImport is on. Amazon FSx automatically imports
   *                 file and directory listings of any new objects added to the S3 bucket and any
   *                 existing objects that are changed in the S3 bucket after you choose this option.
   *             </p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html">Automatically import updates from your S3 bucket</a>.</p>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * <p>
   *             Required for the <code>PERSISTENT_1</code> deployment type, describes the amount of read and write
   *             throughput for each 1 tebibyte of storage, in MB/s/TiB.
   *             File system throughput capacity is calculated by multiplying ﬁle system storage capacity (TiB) by the PerUnitStorageThroughput
   *             (MB/s/TiB). For a 2.4 TiB ﬁle system, provisioning 50 MB/s/TiB of PerUnitStorageThroughput
   *             yields 120 MB/s of ﬁle system throughput. You pay for the amount of throughput that you
   *             provision.
   *         </p>
   *         <p>Valid values for  SSD storage: 50, 100, 200. Valid values for  HDD storage: 12, 40.</p>
   */
  PerUnitStorageThroughput?: number;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 90 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>(Optional) Not available to use with file systems that are linked to a data repository.
   *             A boolean flag indicating whether tags for the file system should be copied to
   *             backups. The default value is false. If it's set to true, all file system
   *             tags are copied to all automatic and user-initiated backups when the user
   *             doesn't specify any backup-specific tags. If this value is true, and you specify one or more backup tags, only
   *             the specified tags are copied to backups. If you specify one or more tags when creating a
   *             user-initiated backup, no tags are copied from the file system, regardless of this value.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with backups</a>.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>The type of drive cache used by PERSISTENT_1 file systems that are provisioned with
   *             HDD storage devices. This parameter is required when storage type is HDD. Set to
   *             <code>READ</code>, improve the performance for frequently accessed files and allows 20%
   *             of the total storage capacity of the file system to be cached. </p>
   *         <p>This parameter is required when <code>StorageType</code> is set to HDD.</p>
   */
  DriveCacheType?: DriveCacheType | string;

  /**
   * <p>Sets the data compression configuration for the file system. <code>DataCompressionType</code>
   *             can have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - (Default) Data compression is turned off when
   *                 the file system is created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LZ4</code> - Data compression is turned on with the LZ4
   *                 algorithm.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a>.</p>
   */
  DataCompressionType?: DataCompressionType | string;
}

export namespace CreateFileSystemLustreConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFileSystemLustreConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The ONTAP configuration properties of the FSx for NetApp ONTAP file system that you are creating.</p>
 */
export interface CreateFileSystemOntapConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 90 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>Specifies the ONTAP file system deployment type to use in creating the file system.</p>
   */
  DeploymentType: OntapDeploymentType | string | undefined;

  /**
   * <p>Specifies the IP address range in which the endpoints to access your file system
   *             will be created. By default, Amazon FSx selects an unused IP address range for you
   *             from the 198.19.* range.</p>
   */
  EndpointIpAddressRange?: string;

  /**
   * <p>The ONTAP administrative password for the <code>fsxadmin</code> user that you can
   *             use to administer your file system using the ONTAP CLI and REST API.</p>
   */
  FsxAdminPassword?: string;

  /**
   * <p>The SSD IOPS configuration for the Amazon FSx for NetApp ONTAP file system.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * <p>The ID for a subnet. A <i>subnet</i> is a range of IP addresses in
   *             your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and Subnets</a> in the
   *                 <i>Amazon VPC User Guide.</i>
   *          </p>
   */
  PreferredSubnetId?: string;

  /**
   * <p>Specifies the VPC route tables in which your file system's endpoints will be
   *             created. You should specify all VPC route tables associated with the subnets
   *             in which your clients are located. By default, Amazon FSx selects your VPC's
   *             default route table.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>Sustained throughput of an Amazon FSx file system in MBps.</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *         <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *         <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *         <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace CreateFileSystemOntapConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFileSystemOntapConfiguration): any => ({
    ...obj,
    ...(obj.FsxAdminPassword && { FsxAdminPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>The Windows file access auditing configuration used when creating
 *             or updating an Amazon FSx for Windows File Server file system.</p>
 */
export interface WindowsAuditLogCreateConfiguration {
  /**
   * <p>Sets which attempt type is logged by Amazon FSx for file and folder accesses.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS_ONLY</code> - only successful attempts to access files
   *                     or folders are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILURE_ONLY</code> - only failed attempts to access files
   *                     or folders are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS_AND_FAILURE</code> - both successful attempts and
   *                     failed attempts to access files or folders are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> - access auditing of files and folders is turned off.</p>
   *             </li>
   *          </ul>
   */
  FileAccessAuditLogLevel: WindowsAccessAuditLogLevel | string | undefined;

  /**
   * <p>Sets which attempt type is logged by Amazon FSx for file share accesses.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS_ONLY</code> - only successful attempts to access file
   *                     shares are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILURE_ONLY</code> - only failed attempts to access file
   *                     shares are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS_AND_FAILURE</code> - both successful attempts and
   *                     failed attempts to access file shares are logged.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> - access auditing of file shares is turned off.</p>
   *             </li>
   *          </ul>
   */
  FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that specifies the destination of the audit logs.</p>
   *         <p>The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis
   *             Data Firehose delivery stream ARN, with the following requirements:</p>
   *         <ul>
   *             <li>
   *                 <p>The destination ARN that you provide (either CloudWatch Logs log group
   *                     or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition,
   *                     Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p>
   *             </li>
   *             <li>
   *                 <p>The name of the Amazon CloudWatch Logs log group must begin with
   *                     the <code>/aws/fsx</code> prefix. The name of the Amazon Kinesis Data
   *                     Firehouse delivery stream must begin with the <code>aws-fsx</code> prefix.</p>
   *             </li>
   *             <li>
   *                 <p>If you do not provide a destination in <code>AuditLogDestination</code>,
   *                     Amazon FSx will create and use a log stream in the CloudWatch Logs
   *                     <code>/aws/fsx/windows</code> log group.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>AuditLogDestination</code> is provided and the resource does not
   *                     exist, the request will fail with a <code>BadRequest</code> error.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>FileAccessAuditLogLevel</code> and <code>FileShareAccessAuditLogLevel</code>
   *                     are both set to <code>DISABLED</code>, you cannot specify a destination in
   *                     <code>AuditLogDestination</code>.</p>
   *             </li>
   *          </ul>
   */
  AuditLogDestination?: string;
}

export namespace WindowsAuditLogCreateConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WindowsAuditLogCreateConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration that Amazon FSx uses to join a Amazon FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to
 *             a self-managed (including on-premises) Microsoft Active Directory (AD)
 *             directory. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html">
 *                 Using Amazon FSx with your self-managed Microsoft Active Directory</a> or
 *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.</p>
 */
export interface SelfManagedActiveDirectoryConfiguration {
  /**
   * <p>The fully qualified domain name of the self-managed AD directory, such as
   *                 <code>corp.example.com</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>(Optional) The fully qualified distinguished name of the organizational unit within
   *             your self-managed AD directory. Amazon
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
   * <p>The password for the service account on your self-managed AD domain that Amazon FSx
   *             will use to join to your AD domain.</p>
   */
  Password: string | undefined;

  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory. </p>
   */
  DnsIps: string[] | undefined;
}

export namespace SelfManagedActiveDirectoryConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelfManagedActiveDirectoryConfiguration): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>The configuration object for the Microsoft Windows file system used in
 *                 <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code>
 *             operations.</p>
 */
export interface CreateFileSystemWindowsConfiguration {
  /**
   * <p>The ID for an existing Amazon Web Services Managed Microsoft Active Directory (AD) instance that the
   *             file system should join when it's created.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * <p>The configuration that Amazon FSx uses to join a Amazon FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to
   *             a self-managed (including on-premises) Microsoft Active Directory (AD)
   *             directory. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html">
   *                 Using Amazon FSx with your self-managed Microsoft Active Directory</a> or
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;

  /**
   * <p>Specifies the file system deployment type, valid values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>MULTI_AZ_1</code> - Deploys a high availability file system that is configured
   *                     for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You
   *                     can only deploy a Multi-AZ file system in Amazon Web Services Regions that have a minimum of three Availability Zones. Also
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

  /**
   * <p>Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This specifies the subnet
   *             in which you want the preferred file server to be located. For in-Amazon Web Services applications, we recommend that you launch
   *             your clients in the same Availability Zone (AZ) as your preferred file server to reduce cross-AZ
   *             data transfer costs and minimize latency. </p>
   */
  PreferredSubnetId?: string;

  /**
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per second, in 2 to
   *             the <i>n</i>th increments, between 2^3 (8) and 2^11 (2048).</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The preferred time to take daily automatic backups, formatted HH:MM in the UTC time
   *             zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. The default is to retain backups for 7
   *             days. Setting this value to 0 disables the creation of automatic backups. The maximum
   *             retention period for backups is 90 days.</p>
   */
  AutomaticBackupRetentionDays?: number;

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
   * <p>An array of one or more DNS alias names that you want to associate with the Amazon FSx file system.
   *             Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system.
   *             You can associate up to 50 aliases with a file system at any time.
   *             You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation.
   *             You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation.
   *             You only need to specify the alias name in the request payload.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and
   *         <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including
   *         additional steps you must take to be able to access your file system using a DNS alias.</p>
   *          <p>An alias name has to meet the following requirements:</p>
   *             <ul>
   *             <li>
   *                <p>Formatted as a fully-qualified domain name (FQDN), <code>hostname.domain</code>, for example, <code>accounting.example.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Can contain alphanumeric characters, the underscore (_), and the hyphen (-).</p>
   *             </li>
   *             <li>
   *                <p>Cannot start or end with a hyphen.</p>
   *             </li>
   *             <li>
   *                <p>Can start with a numeric.</p>
   *             </li>
   *          </ul>
   *         <p>For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them:
   *             as uppercase letters, lowercase letters, or the corresponding letters in escape codes.</p>
   */
  Aliases?: string[];

  /**
   * <p>The configuration that Amazon FSx for Windows File Server uses to audit and log
   *             user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server
   *             file system.</p>
   */
  AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;
}

export namespace CreateFileSystemWindowsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFileSystemWindowsConfiguration): any => ({
    ...obj,
    ...(obj.SelfManagedActiveDirectoryConfiguration && {
      SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfiguration.filterSensitiveLog(
        obj.SelfManagedActiveDirectoryConfiguration
      ),
    }),
  });
}

/**
 * <p>The request object used to create a new Amazon FSx file system.</p>
 */
export interface CreateFileSystemRequest {
  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The type of Amazon FSx file system to create. Valid values are <code>WINDOWS</code>,
   *             <code>LUSTRE</code>, and <code>ONTAP</code>.</p>
   */
  FileSystemType: FileSystemType | string | undefined;

  /**
   * <p>Sets the storage capacity of the file system that you're creating.</p>
   *         <p>For Lustre file systems:</p>
   *         <ul>
   *             <li>
   *                <p>For <code>SCRATCH_2</code> and <code>PERSISTENT_1 SSD</code> deployment types, valid values are
   *                 1200 GiB, 2400 GiB, and increments of 2400 GiB.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT HDD</code> file systems, valid values are increments of 6000 GiB for
   *                 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SCRATCH_1</code> deployment type, valid values are
   *                 1200 GiB, 2400 GiB, and increments of 3600 GiB.</p>
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
   *         <p>For ONTAP file systems:</p>
   *         <ul>
   *             <li>
   *                <p>Valid values are 1024 GiB - 196,608 GiB (192 TiB).</p>
   *             </li>
   *          </ul>
   */
  StorageCapacity: number | undefined;

  /**
   * <p>Sets the storage type for the file system you're creating.
   *             Valid values are <code>SSD</code> and <code>HDD</code>.</p>
   *         <ul>
   *             <li>
   *                <p>Set to <code>SSD</code> to use solid state drive storage.
   *                 SSD is supported on all Windows, Lustre, and ONTAP deployment types.</p>
   *             </li>
   *             <li>
   *                <p>Set to <code>HDD</code> to use hard disk drive storage.
   *                 HDD is supported on <code>SINGLE_AZ_2</code> and <code>MULTI_AZ_1</code> Windows file system deployment types,
   *                 and on <code>PERSISTENT</code> Lustre file system deployment types.
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             Default value is <code>SSD</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/optimize-fsx-costs.html#storage-type-options">
   *             Storage Type Options</a> in the <i>Amazon FSx for Windows User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html#storage-options">Multiple Storage Options</a>
   *             in the <i>Amazon FSx for Lustre User Guide</i>.
   *         </p>
   */
  StorageType?: StorageType | string;

  /**
   * <p>Specifies the IDs of the subnets that the file system will be accessible from. For Windows
   *             and ONTAP <code>MULTI_AZ_1</code> file system deployment types, provide exactly two subnet IDs,
   *             one for the preferred file server and one for the standby file server. You specify one of these
   *             subnets as the preferred subnet using the <code>WindowsConfiguration > PreferredSubnetID</code>
   *             or <code>OntapConfiguration > PreferredSubnetID</code> properties. For more information,
   *             see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html">
   *                 Availability and durability: Single-AZ and Multi-AZ file systems</a> in the
   *             <i>Amazon FSx for Windows User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html">
   *                 Availability and durability</a> in the
   *             <i>Amazon FSx for ONTAP User Guide</i>.</p>
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
   * <p>The tags to apply to the file system being created. The key value of
   *             the <code>Name</code> tag appears in the console as the file system name.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt the file system's data
   *             for Amazon FSx for Windows File Server file systems, Amazon FSx for NetApp ONTAP file systems, and
   *             Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. If not specified, the Amazon FSx
   *             managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems
   *             are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a>
   *             in the <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Microsoft Windows configuration for the file system being created.
   *             </p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * <p>The Lustre configuration for the file system being created.
   *             </p>
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration;

  /**
   * <p>The ONTAP configuration properties of the FSx for NetApp ONTAP file system that you are creating.</p>
   */
  OntapConfiguration?: CreateFileSystemOntapConfiguration;
}

export namespace CreateFileSystemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFileSystemRequest): any => ({
    ...obj,
    ...(obj.WindowsConfiguration && {
      WindowsConfiguration: CreateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }),
    ...(obj.OntapConfiguration && {
      OntapConfiguration: CreateFileSystemOntapConfiguration.filterSensitiveLog(obj.OntapConfiguration),
    }),
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidExportPath): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidImportPath): any => ({
    ...obj,
  });
}

/**
 * <p>One or more network settings specified in the request are invalid.</p>
 */
export interface InvalidNetworkSettings extends __SmithyException, $MetadataBearer {
  name: "InvalidNetworkSettings";
  $fault: "client";
  /**
   * <p>Error message explaining what's wrong with network settings.</p>
   */
  Message?: string;

  /**
   * <p>The subnet ID that is either invalid or not part of the VPC specified.</p>
   */
  InvalidSubnetId?: string;

  /**
   * <p>The security group ID is either invalid or not part of the VPC specified.</p>
   */
  InvalidSecurityGroupId?: string;

  /**
   * <p>The route table ID is either invalid or not part of the VPC specified.</p>
   */
  InvalidRouteTableId?: string;
}

export namespace InvalidNetworkSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNetworkSettings): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPerUnitStorageThroughput): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MissingFileSystemConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for the <code>CreateFileSystemFromBackup</code>
 *             operation.</p>
 */
export interface CreateFileSystemFromBackupRequest {
  /**
   * <p>The ID of the source backup. Specifies the backup you are copying.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

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
   * <p>A list of IDs for the security groups that apply to the specified network
   *             interfaces created for file system access. These security groups apply to all network
   *             interfaces. This value isn't returned in later DescribeFileSystem requests.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The tags to be applied to the file system at file system creation. The key value of
   *             the <code>Name</code> tag appears in the console as the file system
   *             name.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * <p>The Lustre configuration for the file system being created.
   *             </p>
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration;

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

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt the file system's data
   *             for Amazon FSx for Windows File Server file systems, Amazon FSx for NetApp ONTAP file systems, and
   *             Amazon FSx for Lustre <code>PERSISTENT_1</code> file systems at rest. If not specified, the Amazon FSx
   *             managed key is used. The Amazon FSx for Lustre <code>SCRATCH_1</code> and <code>SCRATCH_2</code> file systems
   *             are always encrypted at rest using Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a>
   *             in the <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;
}

export namespace CreateFileSystemFromBackupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFileSystemFromBackupRequest): any => ({
    ...obj,
    ...(obj.WindowsConfiguration && {
      WindowsConfiguration: CreateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }),
  });
}

/**
 * <p>The configuration that Amazon FSx uses to join the ONTAP storage virtual machine
 *             (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.</p>
 */
export interface CreateSvmActiveDirectoryConfiguration {
  /**
   * <p>The NetBIOS name of the Active Directory computer object that will be created for your SVM.</p>
   */
  NetBiosName: string | undefined;

  /**
   * <p>The configuration that Amazon FSx uses to join a Amazon FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to
   *             a self-managed (including on-premises) Microsoft Active Directory (AD)
   *             directory. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html">
   *                 Using Amazon FSx with your self-managed Microsoft Active Directory</a> or
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
}

export namespace CreateSvmActiveDirectoryConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSvmActiveDirectoryConfiguration): any => ({
    ...obj,
    ...(obj.SelfManagedActiveDirectoryConfiguration && {
      SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfiguration.filterSensitiveLog(
        obj.SelfManagedActiveDirectoryConfiguration
      ),
    }),
  });
}

export enum StorageVirtualMachineRootVolumeSecurityStyle {
  MIXED = "MIXED",
  NTFS = "NTFS",
  UNIX = "UNIX",
}

export interface CreateStorageVirtualMachineRequest {
  /**
   * <p>Describes the self-managed Microsoft Active Directory to which you want to join the SVM.
   *       Joining an Active Directory provides user authentication and access control for SMB clients,
   *       including Microsoft Windows and macOS client accessing the file system.</p>
   */
  ActiveDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The name of the SVM.</p>
   */
  Name: string | undefined;

  /**
   * <p>The password to use when managing the SVM using the NetApp ONTAP CLI or REST API.
   *             If you do not specify a password, you can still use the file system's
   *             <code>fsxadmin</code> user to manage the SVM.</p>
   */
  SvmAdminPassword?: string;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The security style of the root volume of the SVM. Specify one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>UNIX</code> if the file system is managed by a UNIX
   *                 administrator, the majority of users are NFS clients, and an application
   *                 accessing the data uses a UNIX user as the service account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NTFS</code> if the file system is managed by a Windows
   *                 administrator, the majority of users are SMB clients, and an application
   *                 accessing the data uses a Windows user as the service account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MIXED</code> if the file system is managed by both UNIX
   *                 and Windows administrators and users consist of both NFS and SMB clients.</p>
   *             </li>
   *          </ul>
   */
  RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle | string;
}

export namespace CreateStorageVirtualMachineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStorageVirtualMachineRequest): any => ({
    ...obj,
    ...(obj.ActiveDirectoryConfiguration && {
      ActiveDirectoryConfiguration: CreateSvmActiveDirectoryConfiguration.filterSensitiveLog(
        obj.ActiveDirectoryConfiguration
      ),
    }),
    ...(obj.SvmAdminPassword && { SvmAdminPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes the configuration of the Microsoft Active Directory (AD)
 *             directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined.
 *             Pleae note, account credentials are not returned in the response payload.</p>
 */
export interface SvmActiveDirectoryConfiguration {
  /**
   * <p>The NetBIOS name of the Active Directory computer object that is joined to your SVM.</p>
   */
  NetBiosName?: string;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
   *             which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
}

export namespace SvmActiveDirectoryConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SvmActiveDirectoryConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has
 *             four endpoints  that are used to access data or to manage the SVM
 *             using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They
 *             are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>,
 *             and <code>Smb</code> endpoints.</p>
 */
export interface SvmEndpoint {
  /**
   * <p>The Domain Name Service (DNS) name for the file system. You can mount your file
   *             system using its DNS name.</p>
   */
  DNSName?: string;

  /**
   * <p>The SVM endpoint's IP addresses.</p>
   */
  IpAddresses?: string[];
}

export namespace SvmEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SvmEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has
 *             the following endpoints that are used to access data or to manage
 *             the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.</p>
 */
export interface SvmEndpoints {
  /**
   * <p>An endpoint for connecting using the Internet Small Computer Systems Interface (iSCSI)  protocol.</p>
   */
  Iscsi?: SvmEndpoint;

  /**
   * <p>An endpoint for managing SVMs using the NetApp ONTAP CLI, NetApp ONTAP API, or NetApp CloudManager.</p>
   */
  Management?: SvmEndpoint;

  /**
   * <p>An endpoint for connecting using the Network File System (NFS) protocol.</p>
   */
  Nfs?: SvmEndpoint;

  /**
   * <p>An endpoint for connecting using the Server Message Block (SMB) protocol.</p>
   */
  Smb?: SvmEndpoint;
}

export namespace SvmEndpoints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SvmEndpoints): any => ({
    ...obj,
  });
}

export enum StorageVirtualMachineLifecycle {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MISCONFIGURED = "MISCONFIGURED",
  PENDING = "PENDING",
}

export enum StorageVirtualMachineSubtype {
  DEFAULT = "DEFAULT",
  DP_DESTINATION = "DP_DESTINATION",
  SYNC_DESTINATION = "SYNC_DESTINATION",
  SYNC_SOURCE = "SYNC_SOURCE",
}

/**
 * <p>Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuraton.</p>
 */
export interface StorageVirtualMachine {
  /**
   * <p>Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.</p>
   */
  ActiveDirectoryConfiguration?: SvmActiveDirectoryConfiguration;

  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The endpoints  that are used to access data or to manage the SVM
   *             using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They
   *             are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>,
   *             and <code>Smb</code> endpoints.</p>
   */
  Endpoints?: SvmEndpoints;

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId?: string;

  /**
   * <p>Describes the SVM's lifecycle status.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - The SVM is fully available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon FSx is creating the new SVM.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Amazon FSx is deleting an existing SVM.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Amazon FSx was unable to create the SVM.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURED</code> - The SVM is in a failed but recoverable state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon FSx has not started creating the SVM.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: StorageVirtualMachineLifecycle | string;

  /**
   * <p>The name of the SVM, if provisioned.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The SVM's system generated unique ID.</p>
   */
  StorageVirtualMachineId?: string;

  /**
   * <p>Describes the SVM's subtype.</p>
   */
  Subtype?: StorageVirtualMachineSubtype | string;

  /**
   * <p>The SVM's UUID (universally unique identifier).</p>
   */
  UUID?: string;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Describes why the SVM lifecycle state changed.</p>
   */
  LifecycleTransitionReason?: LifecycleTransitionReason;

  /**
   * <p>The security style of the root volume of the SVM.</p>
   */
  RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle | string;
}

export namespace StorageVirtualMachine {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageVirtualMachine): any => ({
    ...obj,
  });
}

export interface CreateStorageVirtualMachineResponse {
  /**
   * <p>Returned after a successful <code>CreateStorageVirtualMachine</code> operation; describes the SVM just created.</p>
   */
  StorageVirtualMachine?: StorageVirtualMachine;
}

export namespace CreateStorageVirtualMachineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStorageVirtualMachineResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration of the ONTAP volume that you are creating.</p>
 */
export interface CreateOntapVolumeConfiguration {
  /**
   * <p>Specifies the location in the SVM's namespace where the volume is mounted.
   *             The <code>JunctionPath</code> must have a leading forward slash, such as <code>/vol3</code>.</p>
   */
  JunctionPath: string | undefined;

  /**
   * <p>The security style for the volume. Specify one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>UNIX</code> if the file system is managed by a UNIX
   *                 administrator, the majority of users are NFS clients, and an application
   *                 accessing the data uses a UNIX user as the service account.
   *                 <code>UNIX</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NTFS</code> if the file system is managed by a Windows
   *                 administrator, the majority of users are SMB clients, and an application
   *                 accessing the data uses a Windows user as the service account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MIXED</code> if the file system is managed by both UNIX
   *                 and Windows administrators and users consist of both NFS and SMB clients.</p>
   *             </li>
   *          </ul>
   */
  SecurityStyle?: SecurityStyle | string;

  /**
   * <p>Specifies the size of the volume, in megabytes (MB), that you are creating.</p>
   */
  SizeInMegabytes: number | undefined;

  /**
   * <p>Set to true to enable deduplication, compression, and
   *             compaction storage efficiency features on the volume.</p>
   */
  StorageEfficiencyEnabled: boolean | undefined;

  /**
   * <p>Specifies the ONTAP SVM in which to create the volume.</p>
   */
  StorageVirtualMachineId: string | undefined;

  /**
   * <p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent
   *             tiering automatically transitions a volume's data between the file system's primary storage and capacity
   *             pool storage based on your access patterns.</p>
   */
  TieringPolicy?: TieringPolicy;
}

export namespace CreateOntapVolumeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOntapVolumeConfiguration): any => ({
    ...obj,
  });
}

export interface CreateVolumeRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Specifies the type of volume to create; <code>ONTAP</code> is the only valid volume type.</p>
   */
  VolumeType: VolumeType | string | undefined;

  /**
   * <p>Specifies the name of the volume you're creating.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the <code>ONTAP</code> configuration to use in creating the volume.</p>
   */
  OntapConfiguration?: CreateOntapVolumeConfiguration;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

export namespace CreateVolumeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVolumeRequest): any => ({
    ...obj,
  });
}

export interface CreateVolumeResponse {
  /**
   * <p>Returned after a successful <code>CreateVolume</code> API operation, describing the volume just created.</p>
   */
  Volume?: Volume;
}

export namespace CreateVolumeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVolumeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A volume configuration is required for this operation.</p>
 */
export interface MissingVolumeConfiguration extends __SmithyException, $MetadataBearer {
  name: "MissingVolumeConfiguration";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace MissingVolumeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MissingVolumeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>No Amazon FSx for NetApp ONTAP SVMs were found based upon the supplied parameters.</p>
 */
export interface StorageVirtualMachineNotFound extends __SmithyException, $MetadataBearer {
  name: "StorageVirtualMachineNotFound";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export namespace StorageVirtualMachineNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageVirtualMachineNotFound): any => ({
    ...obj,
  });
}

export interface CreateVolumeFromBackupRequest {
  /**
   * <p>The ID of the source backup. Specifies the backup you are copying.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The name of the new volume you're creating.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the configuration of the ONTAP volume that you are creating.</p>
   */
  OntapConfiguration?: CreateOntapVolumeConfiguration;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

export namespace CreateVolumeFromBackupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVolumeFromBackupRequest): any => ({
    ...obj,
  });
}

export interface CreateVolumeFromBackupResponse {
  /**
   * <p>Returned after a successful <code>CreateVolumeFromBackup</code> API operation,
   *             describing the volume just created.</p>
   */
  Volume?: Volume;
}

export namespace CreateVolumeFromBackupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVolumeFromBackupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You can't delete a backup while it's being copied.</p>
 */
export interface BackupBeingCopied extends __SmithyException, $MetadataBearer {
  name: "BackupBeingCopied";
  $fault: "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID of the source backup. Specifies the backup you are copying.</p>
   */
  BackupId?: string;
}

export namespace BackupBeingCopied {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupBeingCopied): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackupRestoring): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupRequest {
  /**
   * <p>The ID of the backup you want to delete.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This is automatically filled on your behalf when using
   *             the CLI or SDK.</p>
   */
  ClientRequestToken?: string;
}

export namespace DeleteBackupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupResponse {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBackupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration object for the Amazon FSx for Lustre file system being deleted in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemLustreConfiguration {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileSystemLustreConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration object for the Microsoft Windows file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemWindowsConfiguration {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileSystemWindowsConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemRequest {
  /**
   * <p>The ID of the file system you want to delete.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This is automatically filled on your behalf when using the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The configuration object for the Microsoft Windows file system used in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;

  /**
   * <p>The configuration object for the Amazon FSx for Lustre file system being deleted in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  LustreConfiguration?: DeleteFileSystemLustreConfiguration;
}

export namespace DeleteFileSystemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileSystemRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for the Amazon FSx for Lustre file system being deleted in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemLustreResponse {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileSystemLustreResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for the Microsoft Windows file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemWindowsResponse {
  /**
   * <p>The ID of the final backup for this file system.</p>
   */
  FinalBackupId?: string;

  /**
   * <p>The set of tags applied to the final backup.</p>
   */
  FinalBackupTags?: Tag[];
}

export namespace DeleteFileSystemWindowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileSystemWindowsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for the <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemResponse {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileSystemResponse): any => ({
    ...obj,
  });
}

export interface DeleteStorageVirtualMachineRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the SVM that you want to delete.</p>
   */
  StorageVirtualMachineId: string | undefined;
}

export namespace DeleteStorageVirtualMachineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStorageVirtualMachineRequest): any => ({
    ...obj,
  });
}

export interface DeleteStorageVirtualMachineResponse {
  /**
   * <p>The ID of the SVM Amazon FSx is deleting.</p>
   */
  StorageVirtualMachineId?: string;

  /**
   * <p>Describes the lifecycle state of the SVM being deleted.</p>
   */
  Lifecycle?: StorageVirtualMachineLifecycle | string;
}

export namespace DeleteStorageVirtualMachineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStorageVirtualMachineResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Use to specify skipping a final backup, or to add tags to a final backup.</p>
 */
export interface DeleteVolumeOntapConfiguration {
  /**
   * <p>Set to true if you want to skip taking a final backup of the volume
   *         you are deleting.</p>
   */
  SkipFinalBackup?: boolean;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  FinalBackupTags?: Tag[];
}

export namespace DeleteVolumeOntapConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVolumeOntapConfiguration): any => ({
    ...obj,
  });
}

export interface DeleteVolumeRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the volume you are deleting.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>For Amazon FSx for ONTAP volumes, specify whether to take
   *         a final backup of the volume, and apply tags to the backup.</p>
   */
  OntapConfiguration?: DeleteVolumeOntapConfiguration;
}

export namespace DeleteVolumeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVolumeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for the Amazon FSx for NetApp ONTAP volume being deleted
 *             in the <code>DeleteVolume</code> operation.</p>
 */
export interface DeleteVolumeOntapResponse {
  /**
   * <p>The ID of the source backup. Specifies the backup you are copying.</p>
   */
  FinalBackupId?: string;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  FinalBackupTags?: Tag[];
}

export namespace DeleteVolumeOntapResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVolumeOntapResponse): any => ({
    ...obj,
  });
}

export interface DeleteVolumeResponse {
  /**
   * <p>The ID of the volume being deleted.</p>
   */
  VolumeId?: string;

  /**
   * <p>Describes the lifecycle state of the volume being deleted.</p>
   */
  Lifecycle?: VolumeLifecycle | string;

  /**
   * <p>Returned after a <code>DeleteVolume request, showing the status of the delete request.</code>
   *          </p>
   */
  OntapResponse?: DeleteVolumeOntapResponse;
}

export namespace DeleteVolumeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVolumeResponse): any => ({
    ...obj,
  });
}

export enum FilterName {
  BACKUP_TYPE = "backup-type",
  FILE_SYSTEM_ID = "file-system-id",
  FILE_SYSTEM_TYPE = "file-system-type",
  VOLUME_ID = "volume-id",
}

/**
 * <p>A filter used to restrict the results of describe calls. You can use multiple
 *             filters to return results that meet all applied filter requirements.</p>
 */
export interface Filter {
  /**
   * <p>The name for this filter.</p>
   */
  Name?: FilterName | string;

  /**
   * <p>The values of the filter. These are all the values for any of the applied
   *             filters.</p>
   */
  Values?: string[];
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsRequest {
  /**
   * <p>IDs of the backups you want to retrieve (String). This overrides any
   *             filters. If any IDs are not found, BackupNotFound will be thrown.</p>
   */
  BackupIds?: string[];

  /**
   * <p>Filters structure. Supported names are <code>file-system-id</code>,
   *             <code>backup-type</code>, <code>file-system-type</code>, and
   *             <code>volume-id</code>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Maximum number of backups to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Opaque pagination token returned from a previous
   *                 <code>DescribeBackups</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeBackupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBackupsRequest): any => ({
    ...obj,
  });
}

export enum DataRepositoryTaskFilterName {
  FILE_SYSTEM_ID = "file-system-id",
  TASK_LIFECYCLE = "task-lifecycle",
}

/**
 * <p>(Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response.
 *             You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type.
 *             A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.</p>
 */
export interface DataRepositoryTaskFilter {
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
  Values?: string[];
}

export namespace DataRepositoryTaskFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataRepositoryTaskFilter): any => ({
    ...obj,
  });
}

export interface DescribeDataRepositoryTasksRequest {
  /**
   * <p>(Optional) IDs of the tasks whose descriptions you want to retrieve
   *             (String).</p>
   */
  TaskIds?: string[];

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
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeDataRepositoryTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataRepositoryTasksRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataRepositoryTasksResponse {
  /**
   * <p>The collection of data repository task descriptions returned.</p>
   */
  DataRepositoryTasks?: DataRepositoryTask[];

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeDataRepositoryTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataRepositoryTasksResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for <code>DescribeFileSystemAliases</code> operation.</p>
 */
export interface DescribeFileSystemAliasesRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the file system to return the associated DNS aliases for
   *             (String).</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>Maximum number of DNS aliases to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Opaque pagination token returned from a previous
   *                 <code>DescribeFileSystemAliases</code> operation (String). If a token is included in the request, the action
   *             continues the list from where the previous returning call left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeFileSystemAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFileSystemAliasesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for <code>DescribeFileSystemAliases</code> operation.</p>
 */
export interface DescribeFileSystemAliasesResponse {
  /**
   * <p>An array of one or more DNS aliases currently associated with the specified file system.</p>
   */
  Aliases?: Alias[];

  /**
   * <p>Present if there are more DNS aliases than returned in the response (String). You
   *             can use the <code>NextToken</code> value in a later request to fetch additional
   *             descriptions. </p>
   */
  NextToken?: string;
}

export namespace DescribeFileSystemAliasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFileSystemAliasesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsRequest {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFileSystemsRequest): any => ({
    ...obj,
  });
}

export enum StorageVirtualMachineFilterName {
  FILE_SYSTEM_ID = "file-system-id",
}

/**
 * <p>A filter used to restrict the results of describe calls for
 *             Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple
 *             filters to return results that meet all applied filter requirements.</p>
 */
export interface StorageVirtualMachineFilter {
  /**
   * <p>The name for this filter.</p>
   */
  Name?: StorageVirtualMachineFilterName | string;

  /**
   * <p>The values of the filter. These are all the values for any of the applied
   *             filters.</p>
   */
  Values?: string[];
}

export namespace StorageVirtualMachineFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageVirtualMachineFilter): any => ({
    ...obj,
  });
}

export interface DescribeStorageVirtualMachinesRequest {
  /**
   * <p>Enter the ID of one or more SVMs that you want to view.</p>
   */
  StorageVirtualMachineIds?: string[];

  /**
   * <p>Enter a filter name:value pair to view a select set of SVMs.</p>
   */
  Filters?: StorageVirtualMachineFilter[];

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
}

export namespace DescribeStorageVirtualMachinesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStorageVirtualMachinesRequest): any => ({
    ...obj,
  });
}

export interface DescribeStorageVirtualMachinesResponse {
  /**
   * <p>Returned after a successful <code>DescribeStorageVirtualMachines</code> operation, describing each SVM.</p>
   */
  StorageVirtualMachines?: StorageVirtualMachine[];

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeStorageVirtualMachinesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStorageVirtualMachinesResponse): any => ({
    ...obj,
  });
}

export enum VolumeFilterName {
  FILE_SYSTEM_ID = "file-system-id",
  STORAGE_VIRTUAL_MACHINE_ID = "storage-virtual-machine-id",
}

/**
 * <p>A filter used to restrict the results of describe calls for
 *             Amazon FSx for NetApp ONTAP volumes. You can use multiple
 *             filters to return results that meet all applied filter requirements.</p>
 */
export interface VolumeFilter {
  /**
   * <p>The name for this filter.</p>
   */
  Name?: VolumeFilterName | string;

  /**
   * <p>The values of the filter. These are all the values for any of the applied
   *             filters.</p>
   */
  Values?: string[];
}

export namespace VolumeFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeFilter): any => ({
    ...obj,
  });
}

export interface DescribeVolumesRequest {
  /**
   * <p>IDs of the volumes whose descriptions you want to retrieve.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>Enter a filter name:value pair to view a select set of volumes.</p>
   */
  Filters?: VolumeFilter[];

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
}

export namespace DescribeVolumesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVolumesRequest): any => ({
    ...obj,
  });
}

export interface DescribeVolumesResponse {
  /**
   * <p>Returned after a successful <code>DescribeVolumes</code> operation, describing each volume.</p>
   */
  Volumes?: Volume[];

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

export namespace DescribeVolumesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVolumesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.</p>
 */
export interface DisassociateFileSystemAliasesRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Specifies the file system from which to disassociate the DNS aliases.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>An array of one or more DNS alias names to disassociate, or remove, from the file system.</p>
   */
  Aliases: string[] | undefined;
}

export namespace DisassociateFileSystemAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFileSystemAliasesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system.
 *         Use the  API operation to monitor the status of the aliases Amazon FSx is removing from the file system.</p>
 */
export interface DisassociateFileSystemAliasesResponse {
  /**
   * <p>An array of one or more DNS aliases that Amazon FSx is attempting to disassociate from the file system.</p>
   */
  Aliases?: Alias[];
}

export namespace DisassociateFileSystemAliasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFileSystemAliasesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceRequest {
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

  /**
   * <p>Opaque pagination token returned from a previous
   *                 <code>ListTagsForResource</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags on the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>This is present if there are more tags than returned in the response (String). You
   *             can use the <code>NextToken</code> value in the later request to fetch the tags.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotServiceResourceError): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDoesNotSupportTagging): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFound): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to
   *             tag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags for the resource. If a tag with a given key already exists, the
   *             value is replaced by the one specified in this parameter.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the Amazon FSx resource to untag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of keys of tags on the resource to untag. In case the tag key doesn't exist,
   *             the call will still succeed to be idempotent.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration object for Amazon FSx for Lustre file systems used in the
 *                 <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemLustreConfiguration {
  /**
   * <p>(Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
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
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 90 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p> (Optional) When you create your file system, your existing S3 objects appear as file and directory listings.
   *             Use this property to choose how Amazon FSx keeps your file and directory listing up to date
   *             as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can
   *             have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - (Default) AutoImport is off. Amazon FSx only updates
   *                 file and directory listings from the linked S3 bucket
   *                 when the file system is created. FSx does not update the file and directory
   *                 listing for any new or changed objects after choosing this option.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - AutoImport is on. Amazon FSx automatically imports
   *                 directory listings of any new objects added to the linked S3 bucket that
   *                 do not currently exist in the FSx file system. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED</code> - AutoImport is on. Amazon FSx automatically imports
   *                 file and directory listings of any new objects added to the S3 bucket and any
   *                 existing objects that are changed in the S3 bucket after you choose this option.
   *             </p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html">Automatically import updates from your S3 bucket</a>.</p>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * <p>Sets the data compression configuration for the file system. <code>DataCompressionType</code>
   *             can have the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Data compression is turned off for
   *                 the file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LZ4</code> - Data compression is turned on with the LZ4
   *                 algorithm.</p>
   *             </li>
   *          </ul>
   *         <p>If you don't use <code>DataCompressionType</code>, the file system retains
   *             its current data compression configuration.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a>.</p>
   */
  DataCompressionType?: DataCompressionType | string;
}

export namespace UpdateFileSystemLustreConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFileSystemLustreConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration updates for an Amazon FSx for NetApp ONTAP file system.</p>
 */
export interface UpdateFileSystemOntapConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this to 0 disables
   *             automatic backups. You can retain automatic backups for a maximum of 90 days. The default is 0.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The ONTAP administrative password for the <code>fsxadmin</code> user.</p>
   */
  FsxAdminPassword?: string;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *         <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *         <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *         <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export namespace UpdateFileSystemOntapConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFileSystemOntapConfiguration): any => ({
    ...obj,
    ...(obj.FsxAdminPassword && { FsxAdminPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to a
 *             self-managed Microsoft Active Directory (AD) directory.</p>
 */
export interface SelfManagedActiveDirectoryConfigurationUpdates {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelfManagedActiveDirectoryConfigurationUpdates): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Updates the configuration for an existing Amazon FSx for Windows
 *             File Server file system. Amazon FSx only overwrites existing properties with non-null values
 *             provided in the request.</p>
 */
export interface UpdateFileSystemWindowsConfiguration {
  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. Where d is the weekday number, from 1 through 7, with 1 = Monday and 7 = Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The preferred time to start the daily automatic backup, in the UTC time zone, for example, <code>02:00</code>
   *          </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic daily backups. Setting this to zero (0) disables automatic daily
   *             backups. You can retain automatic daily backups for a maximum of 90 days. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#automatic-backups">Working with Automatic Daily Backups</a>.</p>
   */
  AutomaticBackupRetentionDays?: number;

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
   * <p>The configuration that Amazon FSx for Windows File Server uses to audit and log
   *             user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server
   *             file system..</p>
   */
  AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;
}

export namespace UpdateFileSystemWindowsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFileSystemWindowsConfiguration): any => ({
    ...obj,
    ...(obj.SelfManagedActiveDirectoryConfiguration && {
      SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdates.filterSensitiveLog(
        obj.SelfManagedActiveDirectoryConfiguration
      ),
    }),
  });
}

/**
 * <p>The request object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemRequest {
  /**
   * <p>Identifies the file system that you are updating.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *           idempotent updates. This string is automatically filled on your behalf when you use
   *           the Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Use this parameter to increase the storage capacity of an Amazon FSx for Windows File Server
   *       or Amazon FSx for Lustre file system.
   *       Specifies the storage capacity target value, GiB, to increase the storage capacity for the
   *       file system that you're updating. You cannot make a storage capacity increase request if
   *       there is an existing storage capacity increase request in progress.</p>
   *          <p>For Windows file systems, the storage capacity target value must be at least 10 percent
   *       (%) greater than the current storage capacity value. In order to increase storage capacity,
   *       the file system must have at least 16 MB/s of throughput capacity.</p>
   *          <p>For Lustre file systems, the storage capacity target value can be the following:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>SCRATCH_2</code> and <code>PERSISTENT_1 SSD</code> deployment types, valid values
   *           are in multiples of 2400 GiB. The value must be greater than the current storage capacity.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT HDD</code> file systems, valid values are multiples of 6000 GiB for
   *           12 MB/s/TiB file systems and multiples of 1800 GiB for 40 MB/s/TiB file systems. The values must be greater
   *           than the current storage capacity.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SCRATCH_1</code> file systems, you cannot increase the storage capacity.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage
   *         capacity</a> in the <i>Amazon FSx for Windows File Server User Guide</i>
   *       and <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput capacity</a> in the <i>Amazon FSx for Lustre
   *         User Guide</i>.</p>
   */
  StorageCapacity?: number;

  /**
   * <p>The configuration updates for an Amazon FSx for Windows File Server file system.</p>
   */
  WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;

  /**
   * <p>The configuration object for Amazon FSx for Lustre file systems used in the
   *                 <code>UpdateFileSystem</code> operation.</p>
   */
  LustreConfiguration?: UpdateFileSystemLustreConfiguration;

  /**
   * <p>The configuration updates for an Amazon FSx for NetApp ONTAP file system.</p>
   */
  OntapConfiguration?: UpdateFileSystemOntapConfiguration;
}

export namespace UpdateFileSystemRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFileSystemRequest): any => ({
    ...obj,
    ...(obj.WindowsConfiguration && {
      WindowsConfiguration: UpdateFileSystemWindowsConfiguration.filterSensitiveLog(obj.WindowsConfiguration),
    }),
    ...(obj.OntapConfiguration && {
      OntapConfiguration: UpdateFileSystemOntapConfiguration.filterSensitiveLog(obj.OntapConfiguration),
    }),
  });
}

/**
 * <p>Updates the Microsoft Active Directory (AD) configuration of an SVM joined to an AD.
 *             Pleae note, account credentials are not returned in the response payload.</p>
 */
export interface UpdateSvmActiveDirectoryConfiguration {
  /**
   * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to a
   *             self-managed Microsoft Active Directory (AD) directory.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
}

export namespace UpdateSvmActiveDirectoryConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSvmActiveDirectoryConfiguration): any => ({
    ...obj,
    ...(obj.SelfManagedActiveDirectoryConfiguration && {
      SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdates.filterSensitiveLog(
        obj.SelfManagedActiveDirectoryConfiguration
      ),
    }),
  });
}

export interface UpdateStorageVirtualMachineRequest {
  /**
   * <p>Updates the Microsoft Active Directory (AD) configuration for an SVM that is joined to an AD.</p>
   */
  ActiveDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the SVM that you want to update, in the format <code>svm-0123456789abcdef0</code>.</p>
   */
  StorageVirtualMachineId: string | undefined;

  /**
   * <p>Enter a new SvmAdminPassword if you are updating it.</p>
   */
  SvmAdminPassword?: string;
}

export namespace UpdateStorageVirtualMachineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStorageVirtualMachineRequest): any => ({
    ...obj,
    ...(obj.ActiveDirectoryConfiguration && {
      ActiveDirectoryConfiguration: UpdateSvmActiveDirectoryConfiguration.filterSensitiveLog(
        obj.ActiveDirectoryConfiguration
      ),
    }),
    ...(obj.SvmAdminPassword && { SvmAdminPassword: SENSITIVE_STRING }),
  });
}

export interface UpdateStorageVirtualMachineResponse {
  /**
   * <p>Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuraton.</p>
   */
  StorageVirtualMachine?: StorageVirtualMachine;
}

export namespace UpdateStorageVirtualMachineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStorageVirtualMachineResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Used to specify changes to the ONTAP configuration for the volume you are updating.</p>
 */
export interface UpdateOntapVolumeConfiguration {
  /**
   * <p>Specifies the location in the SVM's namespace where the volume is mounted.
   *             The <code>JunctionPath</code> must have a leading forward slash, such as <code>/vol3</code>.</p>
   */
  JunctionPath?: string;

  /**
   * <p>The security style for the volume, which can be <code>UNIX</code>.
   *             <code>NTFS</code>, or <code>MIXED</code>.</p>
   */
  SecurityStyle?: SecurityStyle | string;

  /**
   * <p>Specifies the size of the volume in megabytes.</p>
   */
  SizeInMegabytes?: number;

  /**
   * <p>Default is <code>false</code>. Set to true to enable the deduplication,
   *             compression, and compaction storage efficiency features on the volume.</p>
   */
  StorageEfficiencyEnabled?: boolean;

  /**
   * <p>Update the volume's data tiering policy.</p>
   */
  TieringPolicy?: TieringPolicy;
}

export namespace UpdateOntapVolumeConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOntapVolumeConfiguration): any => ({
    ...obj,
  });
}

export interface UpdateVolumeRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Specifies the volume that you want to update, formatted <code>fsvol-0123456789abcdef0</code>.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The <code>ONTAP</code> configuration of the volume you are updating.</p>
   */
  OntapConfiguration?: UpdateOntapVolumeConfiguration;
}

export namespace UpdateVolumeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVolumeRequest): any => ({
    ...obj,
  });
}

export interface UpdateVolumeResponse {
  /**
   * <p>Returned after a successful <code>UpdateVolume</code> API operation, describing the volume just updated.</p>
   */
  Volume?: Volume;
}

export namespace UpdateVolumeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVolumeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a specific Amazon FSx administrative action for the current Windows or
 *             Lustre file system.</p>
 */
export interface AdministrativeAction {
  /**
   * <p>Describes the type of administrative action, as follows:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action initiated by the user from the
   *                     Amazon FSx console, API (UpdateFileSystem), or CLI (update-file-system).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STORAGE_OPTIMIZATION</code> - Once the <code>FILE_SYSTEM_UPDATE</code>
   *                     task to increase a file system's storage capacity completes successfully, a
   *                     <code>STORAGE_OPTIMIZATION</code> task starts.
   *                     </p>
   *                 <ul>
   *                   <li>
   *                      <p>For Windows, storage optimization is the process of migrating the file system data
   *                         to the new, larger disks.</p>
   *                   </li>
   *                   <li>
   *                      <p>For Lustre, storage optimization consists of rebalancing the data across the existing and
   *                             newly added file servers.</p>
   *                   </li>
   *                </ul>
   *                 <p>You can track the storage optimization progress using the
   *                         <code>ProgressPercent</code> property. When
   *                         <code>STORAGE_OPTIMIZATION</code> completes successfully, the parent
   *                         <code>FILE_SYSTEM_UPDATE</code> action status changes to
   *                         <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing
   *                         storage capacity</a> in the <i>Amazon FSx for Windows File Server
   *                         User Guide</i> and <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage
   *                         and throughput capacity</a> in the <i>Amazon FSx for Lustre User
   *                         Guide</i>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new DNS alias with the file system.
   *                 For more information, see
   *                 .</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system.
   *                 For more information, see .</p>
   *             </li>
   *          </ul>
   */
  AdministrativeActionType?: AdministrativeActionType | string;

  /**
   * <p>Provides the percent complete of a <code>STORAGE_OPTIMIZATION</code> administrative action.
   *             Does not apply to any other administrative action type.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>Time that the administrative action request was received.</p>
   */
  RequestTime?: Date;

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
   *                   <code>UPDATED_OPTIMIZING</code> - For a storage capacity increase update, Amazon FSx has
   *                     updated the file system with the new storage capacity, and is now performing the
   *                     storage optimization process. For more information, see
   *                         <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing
   *                         storage capacity</a> in the <i>Amazon FSx for Windows File Server
   *                         User Guide</i> and <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage
   *                         and throughput capacity</a> in the <i>Amazon FSx for Lustre User
   *                         Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  Status?: Status | string;

  /**
   * <p>Describes the target value for the administration action,
   *             provided in the <code>UpdateFileSystem</code> operation.
   *            Returned for <code>FILE_SYSTEM_UPDATE</code> administrative actions.
   *          </p>
   */
  TargetFileSystemValues?: FileSystem;

  /**
   * <p>Provides information about a failed administrative action.</p>
   */
  FailureDetails?: AdministrativeActionFailureDetails;

  /**
   * <p>Describes an Amazon FSx for NetApp ONTAP volume.</p>
   */
  TargetVolumeValues?: Volume;
}

export namespace AdministrativeAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdministrativeAction): any => ({
    ...obj,
  });
}

/**
 * <p>A description of a specific Amazon FSx file system.</p>
 */
export interface FileSystem {
  /**
   * <p>The Amazon Web Services account that created the file system. If the file system was created by an
   *             Identity and Access Management (IAM) user, the Amazon Web Services account to which the
   *             IAM user belongs is the owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The system-generated, unique 17-digit ID of the file system.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The type of Amazon FSx file system, which can be <code>LUSTRE</code>, <code>WINDOWS</code>,
   *             or <code>ONTAP</code>.</p>
   */
  FileSystemType?: FileSystemType | string;

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
   * <p>A structure providing details of any failures that occur when creating the file system
   *             has failed.</p>
   */
  FailureDetails?: FileSystemFailureDetails;

  /**
   * <p>The storage capacity of the file system in gibibytes (GiB).</p>
   */
  StorageCapacity?: number;

  /**
   * <p>The storage type of the file system.
   *             Valid values are <code>SSD</code> and <code>HDD</code>.
   *             If set to <code>SSD</code>, the file system uses solid state drive storage.
   *             If set to <code>HDD</code>, the file system uses hard disk drive storage.
   *         </p>
   */
  StorageType?: StorageType | string;

  /**
   * <p>The ID of the primary VPC for the file system.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the IDs of the subnets that the file system is accessible from. For Windows and
   *             ONTAP <code>MULTI_AZ_1</code> file system deployment type, there are two subnet IDs, one for
   *             the preferred file server and one for the standby file server. The preferred file server subnet
   *             identified in the <code>PreferredSubnetID</code> property. All other file systems have only one subnet ID.</p>
   *         <p>For Lustre file systems, and Single-AZ Windows file systems, this is the ID of
   *             the subnet that contains the endpoint for the file system. For <code>MULTI_AZ_1</code> Windows and
   *             ONTAP file systems, the endpoint for the file system is available in the <code>PreferredSubnetID</code>.</p>
   */
  SubnetIds?: string[];

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
   * <p>The DNS name for the file system.</p>
   */
  DNSName?: string;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt the file system's data
   *             for Amazon FSx for Windows File Server file systems, Amazon FSx for NetApp ONTAP file systems, and
   *             persistent Amazon FSx for Lustre file systems at rest. If not specified, the Amazon FSx
   *             managed key is used. The scratch Amazon FSx for Lustre file systems are always encrypted at rest using
   *             Amazon FSx managed keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a>
   *             in the <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the file system resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The tags to associate with the file system. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your
   *                 Amazon EC2 Resources</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: WindowsFileSystemConfiguration;

  /**
   * <p>The configuration for the Amazon FSx for Lustre file system.</p>
   */
  LustreConfiguration?: LustreFileSystemConfiguration;

  /**
   * <p>A list of administrative actions for the file system that are in process or waiting to be processed.
   *             Administrative actions describe changes to the Amazon FSx file system that you have initiated using
   *             the <code>UpdateFileSystem</code> action.</p>
   */
  AdministrativeActions?: AdministrativeAction[];

  /**
   * <p>The configuration for this FSx for NetApp ONTAP file system.</p>
   */
  OntapConfiguration?: OntapFileSystemConfiguration;
}

export namespace FileSystem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSystem): any => ({
    ...obj,
  });
}

/**
 * <p>A backup of an Amazon FSx for Windows File Server or Amazon FSx for Lustre file system,
 *             or of an Amazon FSx for NetApp ONTAP volume.</p>
 */
export interface Backup {
  /**
   * <p>The ID of the backup.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>The lifecycle status of the backup.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The backup is fully available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx has not started creating the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon FSx is creating the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is transferring the backup to S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COPYING</code> - Amazon FSx is copying the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Amazon FSx deleted the backup and it is no longer available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Amazon FSx could not complete the backup.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle: BackupLifecycle | string | undefined;

  /**
   * <p>Details explaining any failures that occur when creating a backup.</p>
   */
  FailureDetails?: BackupFailureDetails;

  /**
   * <p>The type of the file system backup.</p>
   */
  Type: BackupType | string | undefined;

  /**
   * <p>The current percent of progress of an asynchronous task.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>The time when a particular backup was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt the
   *               backup of the Amazon FSx file system's data at rest.
   *               </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the backup resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>Tags associated with a particular file system.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Metadata of the file system associated with the backup. This metadata is persisted
   *             even if the file system is deleted.</p>
   */
  FileSystem: FileSystem | undefined;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) to which the Windows File Server instance is joined.</p>
   */
  DirectoryInformation?: ActiveDirectoryBackupAttributes;

  /**
   * <p>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon
   *             Resource Names (ARNs) for resources.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the source backup. Specifies the backup you are copying.</p>
   */
  SourceBackupId?: string;

  /**
   * <p>The source Region of the backup. Specifies the Region from where this backup
   *             is copied.</p>
   */
  SourceBackupRegion?: string;

  /**
   * <p>Specifies the resource type that is backed up.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Describes an Amazon FSx for NetApp ONTAP volume.</p>
   */
  Volume?: Volume;
}

export namespace Backup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Backup): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for the <code>CreateFileSystemFromBackup</code>
 *             operation.</p>
 */
export interface CreateFileSystemFromBackupResponse {
  /**
   * <p>A description of the file system.</p>
   */
  FileSystem?: FileSystem;
}

export namespace CreateFileSystemFromBackupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFileSystemFromBackupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response object returned after the file system is created.</p>
 */
export interface CreateFileSystemResponse {
  /**
   * <p>The configuration of the file system that was created.</p>
   */
  FileSystem?: FileSystem;
}

export namespace CreateFileSystemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFileSystemResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemResponse {
  /**
   * <p>A description of the file system that was updated.</p>
   */
  FileSystem?: FileSystem;
}

export namespace UpdateFileSystemResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFileSystemResponse): any => ({
    ...obj,
  });
}

export interface CopyBackupResponse {
  /**
   * <p>A backup of an Amazon FSx for Windows File Server or Amazon FSx for Lustre file system,
   *             or of an Amazon FSx for NetApp ONTAP volume.</p>
   */
  Backup?: Backup;
}

export namespace CopyBackupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyBackupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for the <code>CreateBackup</code> operation.</p>
 */
export interface CreateBackupResponse {
  /**
   * <p>A description of the backup.</p>
   */
  Backup?: Backup;
}

export namespace CreateBackupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBackupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsResponse {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFileSystemsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Response object for <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsResponse {
  /**
   * <p>An array of backups.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBackupsResponse): any => ({
    ...obj,
  });
}
