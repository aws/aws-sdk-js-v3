// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { FSxServiceException as __BaseException } from "./FSxServiceException";

/**
 * <p>The Microsoft Active Directory attributes of the Amazon FSx for Windows File
 *             Server file system.</p>
 */
export interface ActiveDirectoryBackupAttributes {
  /**
   * <p>The fully qualified domain name of the self-managed Active Directory directory.</p>
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

export enum ActiveDirectoryErrorType {
  DOMAIN_NOT_FOUND = "DOMAIN_NOT_FOUND",
  INCOMPATIBLE_DOMAIN_MODE = "INCOMPATIBLE_DOMAIN_MODE",
  INVALID_DOMAIN_STAGE = "INVALID_DOMAIN_STAGE",
  WRONG_VPC = "WRONG_VPC",
}

/**
 * <p>An Active Directory error.</p>
 */
export class ActiveDirectoryError extends __BaseException {
  readonly name: "ActiveDirectoryError" = "ActiveDirectoryError";
  readonly $fault: "client" = "client";
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
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActiveDirectoryError, __BaseException>) {
    super({
      name: "ActiveDirectoryError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActiveDirectoryError.prototype);
    this.ActiveDirectoryId = opts.ActiveDirectoryId;
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

export enum AdministrativeActionType {
  FILE_SYSTEM_ALIAS_ASSOCIATION = "FILE_SYSTEM_ALIAS_ASSOCIATION",
  FILE_SYSTEM_ALIAS_DISASSOCIATION = "FILE_SYSTEM_ALIAS_DISASSOCIATION",
  FILE_SYSTEM_UPDATE = "FILE_SYSTEM_UPDATE",
  RELEASE_NFS_V3_LOCKS = "RELEASE_NFS_V3_LOCKS",
  SNAPSHOT_UPDATE = "SNAPSHOT_UPDATE",
  STORAGE_OPTIMIZATION = "STORAGE_OPTIMIZATION",
  VOLUME_RESTORE = "VOLUME_RESTORE",
  VOLUME_UPDATE = "VOLUME_UPDATE",
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

export enum Status {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  UPDATED_OPTIMIZING = "UPDATED_OPTIMIZING",
}

/**
 * <p>A structure providing details of any failures that occurred.</p>
 */
export interface FileSystemFailureDetails {
  /**
   * <p>A message describing any failures that occurred.</p>
   */
  Message?: string;
}

export enum FileSystemType {
  LUSTRE = "LUSTRE",
  ONTAP = "ONTAP",
  OPENZFS = "OPENZFS",
  WINDOWS = "WINDOWS",
}

export enum FileSystemLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MISCONFIGURED = "MISCONFIGURED",
  MISCONFIGURED_UNAVAILABLE = "MISCONFIGURED_UNAVAILABLE",
  UPDATING = "UPDATING",
}

export enum DataCompressionType {
  LZ4 = "LZ4",
  NONE = "NONE",
}

export enum AutoImportPolicyType {
  NEW = "NEW",
  NEW_CHANGED = "NEW_CHANGED",
  NEW_CHANGED_DELETED = "NEW_CHANGED_DELETED",
  NONE = "NONE",
}

/**
 * <p>Provides detailed information about the data repository if its <code>Lifecycle</code> is
 *             set to <code>MISCONFIGURED</code> or <code>FAILED</code>.</p>
 */
export interface DataRepositoryFailureDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

export enum DataRepositoryLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MISCONFIGURED = "MISCONFIGURED",
  UPDATING = "UPDATING",
}

/**
 * <p>The data repository configuration object for Lustre file systems returned in the response of
 *             the <code>CreateFileSystem</code> operation.</p>
 *          <p>This data type is not supported for file systems with the <code>Persistent_2</code> deployment type.
 *             Instead, use .</p>
 */
export interface DataRepositoryConfiguration {
  /**
   * <p>Describes the state of the file system's S3 durable data repository, if it is configured with an S3 repository.
   *         The lifecycle can have the following values:</p>
   *          <ul>
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
   *                   <code>UPDATING</code> - The data repository is undergoing a customer
   *                 initiated update and availability may be impacted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The data repository is in a terminal state that
   *                 cannot be recovered.</p>
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
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * <p>Describes the file system's linked S3 data repository's <code>AutoImportPolicy</code>.
   *             The AutoImportPolicy configures how Amazon FSx keeps your file and directory listings up to date
   *             as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can have the following values:</p>
   *          <ul>
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
   *                 existing objects that are changed in the S3 bucket after you choose this option.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED_DELETED</code> - AutoImport is on. Amazon FSx automatically
   *                 imports file and directory listings of any new objects added to the S3 bucket, any
   *                 existing objects that are changed in the S3 bucket, and any objects that were deleted
   *                 in the S3 bucket.</p>
   *             </li>
   *          </ul>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * <p>Provides detailed information about the data repository if its <code>Lifecycle</code> is
   *             set to <code>MISCONFIGURED</code> or <code>FAILED</code>.</p>
   */
  FailureDetails?: DataRepositoryFailureDetails;
}

export enum LustreDeploymentType {
  PERSISTENT_1 = "PERSISTENT_1",
  PERSISTENT_2 = "PERSISTENT_2",
  SCRATCH_1 = "SCRATCH_1",
  SCRATCH_2 = "SCRATCH_2",
}

export enum DriveCacheType {
  NONE = "NONE",
  READ = "READ",
}

export enum LustreAccessAuditLogLevel {
  DISABLED = "DISABLED",
  ERROR_ONLY = "ERROR_ONLY",
  WARN_ERROR = "WARN_ERROR",
  WARN_ONLY = "WARN_ONLY",
}

/**
 * <p>The configuration for Lustre logging used to write the enabled
 *             logging events for your Amazon FSx for Lustre file system or
 *             Amazon File Cache resource to Amazon CloudWatch Logs.</p>
 */
export interface LustreLogConfiguration {
  /**
   * <p>The data repository events that are logged by Amazon FSx.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WARN_ONLY</code> - only warning events are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR_ONLY</code> - only error events are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARN_ERROR</code> - both warning events and error events
   *                     are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - logging of data repository events
   *                     is turned off.</p>
   *             </li>
   *          </ul>
   *          <p>Note that Amazon File Cache uses a default setting of <code>WARN_ERROR</code>,
   *             which can't be changed.</p>
   */
  Level: LustreAccessAuditLogLevel | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that specifies the destination of the logs.
   *             The destination can be any Amazon CloudWatch Logs log group ARN. The destination
   *             ARN must be in the same Amazon Web Services partition, Amazon Web Services Region,
   *             and Amazon Web Services account as your Amazon FSx file system.</p>
   */
  Destination?: string;
}

/**
 * <p>The configuration for Lustre root squash used to restrict root-level access
 *             from clients that try to access your FSx for Lustre file system as root.
 *             Use the <code>RootSquash</code> parameter to enable root squash. To learn more
 *             about Lustre root squash,
 *             see  <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/root-squash.html">Lustre root squash</a>.</p>
 *          <p>You can also use the <code>NoSquashNids</code> parameter to provide an array of clients
 *             who are not affected by the root squash setting. These clients will access the file system as root,
 *             with unrestricted privileges.</p>
 */
export interface LustreRootSquashConfiguration {
  /**
   * <p>You enable root squash by setting a user ID (UID) and group ID (GID) for the file
   *             system in the format <code>UID:GID</code> (for example, <code>365534:65534</code>).
   *             The UID and GID values can range from <code>0</code> to <code>4294967294</code>:</p>
   *          <ul>
   *             <li>
   *                <p>A non-zero value for UID and GID enables root squash. The UID and GID
   *                 values can be different, but each must be a non-zero value.</p>
   *             </li>
   *             <li>
   *                <p>A value of <code>0</code> (zero) for UID and GID indicates root,
   *                 and therefore disables root squash.</p>
   *             </li>
   *          </ul>
   *          <p>When root squash is enabled, the user ID and group ID of a root user accessing
   *             the file system are re-mapped to the UID and GID you provide.</p>
   */
  RootSquash?: string;

  /**
   * <p>When root squash is enabled, you can optionally specify an array of NIDs of clients
   *             for which root squash does not apply. A client NID is a Lustre Network Identifier used
   *             to uniquely identify a client. You can specify the NID as either a single address or a
   *             range of addresses:</p>
   *          <ul>
   *             <li>
   *                <p>A single address is described in standard Lustre NID format by specifying
   *                 the client’s IP address followed by the Lustre network ID (for example,
   *                 <code>10.0.1.6@tcp</code>).</p>
   *             </li>
   *             <li>
   *                <p>An address range is described using a dash to separate the range (for example,
   *                 <code>10.0.[2-10].[1-255]@tcp</code>).</p>
   *             </li>
   *          </ul>
   */
  NoSquashNids?: string[];
}

/**
 * <p>The configuration for the Amazon FSx for Lustre file system.</p>
 */
export interface LustreFileSystemConfiguration {
  /**
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. Here, <code>d</code> is the weekday number, from 1 through 7, beginning with Monday and
   *             ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The data repository configuration object for Lustre file systems returned in the response of
   *             the <code>CreateFileSystem</code> operation.</p>
   *          <p>This data type is not supported for file systems with the <code>Persistent_2</code> deployment type.
   *             Instead, use .</p>
   */
  DataRepositoryConfiguration?: DataRepositoryConfiguration;

  /**
   * <p>The deployment type of the FSx for Lustre file system.
   *             <i>Scratch deployment type</i> is designed for temporary storage
   *             and shorter-term processing of data.</p>
   *          <p>
   *             <code>SCRATCH_1</code> and <code>SCRATCH_2</code> deployment types are best suited
   *             for when you need temporary storage and shorter-term processing of data. The
   *             <code>SCRATCH_2</code> deployment type provides in-transit encryption of data and higher burst
   *             throughput capacity than <code>SCRATCH_1</code>.</p>
   *          <p>The <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment type is used
   *             for longer-term storage and workloads and encryption of data in transit.
   *                 <code>PERSISTENT_2</code> is built on Lustre v2.12 and offers higher
   *                 <code>PerUnitStorageThroughput</code> (up to 1000 MB/s/TiB) along with a lower
   *             minimum storage capacity requirement (600 GiB). To learn more about FSx for Lustre deployment types, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/lustre-deployment-types.html">
   *                 FSx for Lustre deployment options</a>.</p>
   *          <p>The default is <code>SCRATCH_1</code>.</p>
   */
  DeploymentType?: LustreDeploymentType | string;

  /**
   * <p>Per unit storage throughput represents the megabytes per second of read or write
   *             throughput per 1 tebibyte of storage provisioned. File system throughput capacity is
   *             equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). This option is
   *             only valid for <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment types. </p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>PERSISTENT_1</code> SSD storage: 50, 100, 200.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT_1</code> HDD storage: 12, 40.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT_2</code> SSD storage: 125, 250, 500, 1000.</p>
   *             </li>
   *          </ul>
   */
  PerUnitStorageThroughput?: number;

  /**
   * <p>You use the <code>MountName</code> value when mounting the file system.</p>
   *          <p>For the <code>SCRATCH_1</code> deployment type, this value is always "<code>fsx</code>".
   *             For <code>SCRATCH_2</code>, <code>PERSISTENT_1</code>, and <code>PERSISTENT_2</code> deployment
   *             types, this value is a string that is unique within an Amazon Web Services Region.
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
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A boolean flag indicating whether tags on the file system are copied to backups.
   *             If it's set to true, all tags on the file system are
   *             copied to all automatic backups and any user-initiated backups where the user
   *             doesn't specify any tags. If this value is true, and you specify one or more tags,
   *             only the specified tags are copied to backups. If you specify one or more tags when
   *             creating a user-initiated backup, no tags are copied from the file system,
   *             regardless of this value. (Default = false)</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>The type of drive cache used by <code>PERSISTENT_1</code> file systems that are provisioned with
   *             HDD storage devices. This parameter is required when <code>StorageType</code> is HDD. When set to
   *             <code>READ</code> the file system has an SSD storage cache that is sized to 20% of the file system's
   *             storage capacity. This improves the performance for frequently accessed files by caching up to 20%
   *             of the total storage capacity.</p>
   *          <p>This parameter is required when <code>StorageType</code> is set to HDD.</p>
   */
  DriveCacheType?: DriveCacheType | string;

  /**
   * <p>The data compression configuration for the file system. <code>DataCompressionType</code>
   *             can have the following values:</p>
   *          <ul>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a>.</p>
   */
  DataCompressionType?: DataCompressionType | string;

  /**
   * <p>The Lustre logging configuration. Lustre logging writes the enabled log
   *             events for your file system to Amazon CloudWatch Logs.</p>
   */
  LogConfiguration?: LustreLogConfiguration;

  /**
   * <p>The Lustre root squash configuration for an Amazon FSx for Lustre
   *             file system. When enabled, root squash restricts root-level access from clients that
   *             try to access your file system as a root user.</p>
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration;
}

export enum OntapDeploymentType {
  MULTI_AZ_1 = "MULTI_AZ_1",
  SINGLE_AZ_1 = "SINGLE_AZ_1",
}

export enum DiskIopsConfigurationMode {
  AUTOMATIC = "AUTOMATIC",
  USER_PROVISIONED = "USER_PROVISIONED",
}

/**
 * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The
 *             default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per
 *             GB of storage. The configuration consists of the total number of provisioned SSD IOPS
 *             and how the amount was provisioned (by the customer or by the system).</p>
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

/**
 * <p>Configuration for the FSx for NetApp ONTAP file system.</p>
 */
export interface OntapFileSystemConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>Specifies the FSx for ONTAP file system deployment type in use in the file
   *             system. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_AZ_1</code> - (Default) A high availability file system configured
   *                     for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ)
   *                     unavailability. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_1</code> - A file system configured for Single-AZ
   *                     redundancy.</p>
   *             </li>
   *          </ul>
   *          <p>For information about the use cases for Multi-AZ and Single-AZ deployments, refer to
   *                 <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html">Choosing Multi-AZ or
   *                 Single-AZ file system deployment</a>. </p>
   */
  DeploymentType?: OntapDeploymentType | string;

  /**
   * <p>(Multi-AZ only) The IP address range in which the endpoints to access your file system
   *             are created.</p>
   *          <important>
   *             <p>The Endpoint IP address range you select for your file system
   *             must exist outside the VPC's CIDR range and must be at least /30 or larger.
   *             If you do not specify this optional parameter, Amazon FSx will automatically
   *             select a CIDR block for you.</p>
   *          </important>
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
   *             your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the
   *                 <i>Amazon VPC User Guide.</i>
   *          </p>
   */
  PreferredSubnetId?: string;

  /**
   * <p>(Multi-AZ only) The VPC route tables in which your file system's endpoints are
   *             created.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>The sustained throughput of an Amazon FSx file system in Megabytes per second (MBps).</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export enum OpenZFSDeploymentType {
  SINGLE_AZ_1 = "SINGLE_AZ_1",
  SINGLE_AZ_2 = "SINGLE_AZ_2",
}

/**
 * <p>The configuration for the Amazon FSx for OpenZFS file system. </p>
 */
export interface OpenZFSFileSystemConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A Boolean value indicating whether tags on the file system should be copied to
   *             backups.
   *             If it's set to <code>true</code>, all tags on the file system are copied to all
   *             automatic backups and any user-initiated backups where the user doesn't specify any
   *             tags. If this value is <code>true</code> and you specify one or more tags, only the
   *             specified tags are copied to backups. If you specify one or more tags when creating a
   *             user-initiated backup, no tags are copied from the file system, regardless of this
   *             value. </p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code> and you specify one or more tags, only the specified tags are
   *             copied to snapshots. If you specify one or more tags when creating the snapshot, no tags
   *             are copied from the volume, regardless of this value. </p>
   */
  CopyTagsToVolumes?: boolean;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>Specifies the file-system deployment type. Amazon FSx for OpenZFS supports  <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code>.</p>
   */
  DeploymentType?: OpenZFSDeploymentType | string;

  /**
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per second (MBps).</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The
   *             default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per
   *             GB of storage. The configuration consists of the total number of provisioned SSD IOPS
   *             and how the amount was provisioned (by the customer or by the system).</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * <p>The ID of the root volume of the OpenZFS file system. </p>
   */
  RootVolumeId?: string;
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
   *          <ul>
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
   *          <p>For DNS names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them:
   *             as uppercase letters, lowercase letters, or the corresponding letters in escape codes.</p>
   */
  Name?: string;

  /**
   * <p>Describes the state of the DNS alias.</p>
   *          <ul>
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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCESS_ONLY</code> - only successful attempts to access files
   *                     or folders are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILURE_ONLY</code> - only failed attempts to access files
   *                     or folders are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS_AND_FAILURE</code> - both successful attempts and
   *                     failed attempts to access files or folders are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - access auditing of files and folders is turned off.</p>
   *             </li>
   *          </ul>
   */
  FileAccessAuditLogLevel: WindowsAccessAuditLogLevel | string | undefined;

  /**
   * <p>Sets which attempt type is logged by Amazon FSx for file share accesses.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCESS_ONLY</code> - only successful attempts to access file
   *                     shares are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILURE_ONLY</code> - only failed attempts to access file
   *                     shares are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS_AND_FAILURE</code> - both successful attempts and
   *                     failed attempts to access file shares are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - access auditing of file shares is turned off.</p>
   *             </li>
   *          </ul>
   */
  FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the destination of the audit logs.
   *             The destination can be any Amazon CloudWatch Logs log group ARN or
   *             Amazon Kinesis Data Firehose delivery stream ARN.</p>
   *          <p>The name of the Amazon CloudWatch Logs log group must begin with
   *             the <code>/aws/fsx</code> prefix. The name of the Amazon Kinesis Data
   *             Firehouse delivery stream must begin with the <code>aws-fsx</code> prefix.</p>
   *          <p>The destination ARN (either CloudWatch Logs log group or Kinesis
   *             Data Firehose delivery stream) must be in the same Amazon Web Services partition,
   *             Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p>
   */
  AuditLogDestination?: string;
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
   * <p>A list of up to three IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory.</p>
   */
  DnsIps?: string[];
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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_AZ_1</code> - Specifies a high availability file system that is configured for Multi-AZ
   *                     redundancy to tolerate temporary Availability Zone (AZ) unavailability, and supports SSD and HDD storage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_1</code> - (Default) Specifies a file system that is configured for single AZ redundancy,
   *                     only supports SSD storage.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_2</code> - Latest generation Single AZ file system.
   *                     Specifies a file system that is configured for single AZ redundancy and supports SSD and HDD storage.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see
   *          <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html">Single-AZ and Multi-AZ File Systems</a>.</p>
   */
  DeploymentType?: WindowsDeploymentType | string;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, use this endpoint when performing administrative tasks on the file system using
   *             Amazon FSx Remote PowerShell.</p>
   *          <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this is the DNS name of the file system.</p>
   *          <p>This endpoint is temporarily unavailable when the file system is undergoing maintenance.</p>
   */
  RemoteAdministrationEndpoint?: string;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, it specifies the ID of the subnet where the preferred file server is located.
   *             Must be one of the two subnet IDs specified in <code>SubnetIds</code> property.
   *             Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server.</p>
   *          <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this value is the same as that for <code>SubnetIDs</code>.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html#single-multi-az-resources">Availability and durability: Single-AZ and Multi-AZ file systems</a>.</p>
   */
  PreferredSubnetId?: string;

  /**
   * <p>For <code>MULTI_AZ_1</code> deployment types, the IP address of the primary, or preferred, file server.</p>
   *          <p>Use this IP address when mounting the file system on Linux SMB clients or Windows SMB clients that
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

export enum SnapshotLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
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

export enum VolumeLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  MISCONFIGURED = "MISCONFIGURED",
  PENDING = "PENDING",
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
 *          <p>Valid tiering policies are the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p>
 *             </li>
 *          </ul>
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
   *          <ul>
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

/**
 * <p>The configuration of an Amazon FSx for NetApp ONTAP volume.</p>
 */
export interface OntapVolumeConfiguration {
  /**
   * <p>Specifies the FlexCache endpoint type of the volume.
   *             Valid values are the following:</p>
   *          <ul>
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
   * <p>Specifies the directory that network-attached storage (NAS) clients use to mount the
   *             volume, along with the storage virtual machine (SVM) Domain Name System (DNS) name or IP
   *             address. You can create a <code>JunctionPath</code> directly below a parent volume
   *             junction or on a directory within a volume. A <code>JunctionPath</code> for a volume
   *             named <code>vol3</code> might be <code>/vol1/vol2/vol3</code>, or
   *                 <code>/vol1/dir2/vol3</code>, or even <code>/dir1/dir2/vol3</code>.</p>
   */
  JunctionPath?: string;

  /**
   * <p>The security style for the volume, which can be <code>UNIX</code>, <code>NTFS</code>,
   *             or
   *                 <code>MIXED</code>.</p>
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
   * <p>A Boolean flag indicating whether this volume is the root volume for its storage
   *             virtual machine (SVM). Only one volume on an SVM can be the root volume. This value
   *             defaults to <code>false</code>. If this value is <code>true</code>, then this is the SVM
   *             root volume.</p>
   *          <p>This flag is useful when you're deleting an SVM, because you must first delete all
   *             non-root volumes. This flag, when set to <code>false</code>, helps you identify which
   *             volumes to delete before you can delete the SVM.</p>
   */
  StorageVirtualMachineRoot?: boolean;

  /**
   * <p>The volume's <code>TieringPolicy</code> setting.</p>
   */
  TieringPolicy?: TieringPolicy;

  /**
   * <p>The volume's universally unique identifier (UUID).</p>
   */
  UUID?: string;

  /**
   * <p>Specifies the type of volume. Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RW</code> specifies a read/write volume. <code>RW</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DP</code> specifies a data-protection volume. You can protect data by replicating it to
   *                     data-protection mirror copies. If a disaster occurs, you can use these
   *                     data-protection mirror copies to recover data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LS</code> specifies a load-sharing mirror volume. A load-sharing mirror reduces the
   *                     network traffic to a FlexVol volume by providing additional read-only access to
   *                     clients.</p>
   *             </li>
   *          </ul>
   */
  OntapVolumeType?: OntapVolumeType | string;

  /**
   * <p>Specifies the snapshot policy for the volume. There are three built-in snapshot policies:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code>: This is the default policy. A maximum of six hourly snapshots taken five minutes past
   *                 the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after
   *                 midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-1weekly</code>: This policy is the same as the <code>default</code> policy except
   *                 that it only retains one snapshot from the weekly schedule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>: This policy does not take any snapshots. This policy can be assigned to volumes to
   *                 prevent automatic snapshots from being taken.</p>
   *             </li>
   *          </ul>
   *          <p>You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies">Snapshot policies</a>
   *             in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>
   */
  SnapshotPolicy?: string;

  /**
   * <p>A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to
   *             false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups
   *             where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the
   *             specified tags are copied to backups. If you specify one or more tags when creating a user-initiated
   *             backup, no tags are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;
}

export enum OpenZFSDataCompressionType {
  LZ4 = "LZ4",
  NONE = "NONE",
  ZSTD = "ZSTD",
}

/**
 * <p>Specifies who can mount an OpenZFS file system and the options available while
 *             mounting the file system.</p>
 */
export interface OpenZFSClientConfiguration {
  /**
   * <p>A value that specifies who can mount the file system. You can provide a wildcard
   *             character (<code>*</code>), an IP address (<code>0.0.0.0</code>), or a CIDR address
   *                 (<code>192.0.2.0/24</code>). By default, Amazon FSx uses the wildcard
   *             character when specifying the client. </p>
   */
  Clients: string | undefined;

  /**
   * <p>The options to use when mounting the file system. For a list of options that you can
   *             use with Network File System (NFS), see the <a href="https://linux.die.net/man/5/exports">exports(5) - Linux man page</a>. When
   *             choosing your options, consider the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>crossmnt</code> is used by default. If you don't specify
   *                     <code>crossmnt</code> when changing the client configuration, you won't be
   *                     able to see or access snapshots in your file system's snapshot directory.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sync</code> is used by default. If you instead specify
   *                         <code>async</code>, the system acknowledges writes before writing to disk.
   *                     If the system crashes before the writes are finished, you lose the unwritten
   *                     data. </p>
   *             </li>
   *          </ul>
   */
  Options: string[] | undefined;
}

/**
 * <p>The Network File System (NFS) configurations for mounting an Amazon FSx for
 *             OpenZFS file system. </p>
 */
export interface OpenZFSNfsExport {
  /**
   * <p>A list of configuration objects that contain the client and options for mounting the
   *             OpenZFS file system. </p>
   */
  ClientConfigurations: OpenZFSClientConfiguration[] | undefined;
}

export enum OpenZFSCopyStrategy {
  CLONE = "CLONE",
  FULL_COPY = "FULL_COPY",
}

/**
 * <p>The snapshot configuration to use when creating an OpenZFS volume from a
 *             snapshot.</p>
 */
export interface OpenZFSOriginSnapshotConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  SnapshotARN?: string;

  /**
   * <p>The strategy used when copying data from the snapshot to the new volume. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLONE</code> - The new volume references the data in the origin
   *                     snapshot. Cloning a snapshot is faster than copying the data from a snapshot to
   *                     a new volume and doesn't consume disk throughput. However, the origin snapshot
   *                     can't be deleted if there is a volume using its copied data. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FULL_COPY</code> - Copies all data from the snapshot to the new volume.
   *                 </p>
   *             </li>
   *          </ul>
   */
  CopyStrategy?: OpenZFSCopyStrategy | string;
}

export enum OpenZFSQuotaType {
  GROUP = "GROUP",
  USER = "USER",
}

/**
 * <p>The configuration for how much storage a user or group can use on the volume. </p>
 */
export interface OpenZFSUserOrGroupQuota {
  /**
   * <p>A value that specifies whether the quota applies to a user or group.</p>
   */
  Type: OpenZFSQuotaType | string | undefined;

  /**
   * <p>The ID of the user or group.</p>
   */
  Id: number | undefined;

  /**
   * <p>The amount of storage that the user or group can use in gibibytes (GiB).</p>
   */
  StorageCapacityQuotaGiB: number | undefined;
}

/**
 * <p>The configuration of an Amazon FSx for OpenZFS volume.</p>
 */
export interface OpenZFSVolumeConfiguration {
  /**
   * <p>The ID of the parent volume.</p>
   */
  ParentVolumeId?: string;

  /**
   * <p>The path to the volume from the root volume. For example,
   *                 <code>fsx/parentVolume/volume1</code>.</p>
   */
  VolumePath?: string;

  /**
   * <p>The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't
   *             reserve more storage than the parent volume has reserved.</p>
   */
  StorageCapacityReservationGiB?: number;

  /**
   * <p>The maximum amount of storage in gibibtyes (GiB) that the volume can use from its
   *             parent. You can specify a quota larger than the storage on the parent volume.</p>
   */
  StorageCapacityQuotaGiB?: number;

  /**
   * <p>The record size of an OpenZFS volume, in kibibytes (KiB). Valid values are 4, 8,
   *             16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB.
   *             Most workloads should use the default record size. For guidance on when
   *             to set a custom record size, see the
   *             <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  RecordSizeKiB?: number;

  /**
   * <p>Specifies the method used to compress the data on the volume. The compression
   *             type is <code>NONE</code> by default.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Doesn't compress the data on the volume.
   *                     <code>NONE</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZSTD</code> - Compresses the data in the volume using the Zstandard
   *                     (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better
   *                     compression ratio to minimize on-disk storage utilization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LZ4</code> - Compresses the data in the volume using the LZ4
   *                     compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive
   *                     and delivers higher write throughput speeds.</p>
   *             </li>
   *          </ul>
   */
  DataCompressionType?: OpenZFSDataCompressionType | string;

  /**
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code> and you specify one or more tags, only the specified tags are
   *             copied to snapshots. If you specify one or more tags when creating the snapshot, no tags
   *             are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToSnapshots?: boolean;

  /**
   * <p>The configuration object that specifies the snapshot to use as the origin of the data
   *             for the volume.</p>
   */
  OriginSnapshot?: OpenZFSOriginSnapshotConfiguration;

  /**
   * <p>A Boolean value indicating whether the volume is read-only.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>The configuration object for mounting a Network File System (NFS)
   *             file system.</p>
   */
  NfsExports?: OpenZFSNfsExport[];

  /**
   * <p>An object specifying how much storage users or groups can use on the volume.</p>
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[];

  /**
   * <p>Specifies the ID of the snapshot to which the volume was restored.</p>
   */
  RestoreToSnapshot?: string;

  /**
   * <p>A Boolean value indicating whether snapshots between the
   *             current state and the specified snapshot should be deleted
   *             when a volume is restored from snapshot.</p>
   */
  DeleteIntermediateSnaphots?: boolean;

  /**
   * <p>A Boolean value indicating whether dependent clone volumes
   *             created from intermediate snapshots should be deleted when
   *             a volume is restored from snapshot.</p>
   */
  DeleteClonedVolumes?: boolean;
}

export enum VolumeType {
  ONTAP = "ONTAP",
  OPENZFS = "OPENZFS",
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
   *          <ul>
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
   *          <p>For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them:
   *             as uppercase letters, lowercase letters, or the corresponding letters in escape codes.</p>
   */
  Aliases: string[] | undefined;
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

/**
 * <p>A generic error indicating a failure with a client request.</p>
 */
export class BadRequest extends __BaseException {
  readonly name: "BadRequest" = "BadRequest";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequest, __BaseException>) {
    super({
      name: "BadRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequest.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 */
export class FileSystemNotFound extends __BaseException {
  readonly name: "FileSystemNotFound" = "FileSystemNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileSystemNotFound, __BaseException>) {
    super({
      name: "FileSystemNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileSystemNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A generic error indicating a server-side failure.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

export enum EventType {
  CHANGED = "CHANGED",
  DELETED = "DELETED",
  NEW = "NEW",
}

/**
 * <p>Describes a data repository association's automatic export policy. The
 *             <code>AutoExportPolicy</code> defines the types of updated objects on the
 *             file system that will be automatically exported to the data repository.
 *             As you create, modify, or delete files, Amazon FSx for Lustre
 *             automatically exports the defined changes asynchronously once your application finishes
 *             modifying the file.</p>
 *          <p>This <code>AutoExportPolicy</code> is supported only for Amazon FSx for Lustre
 *             file systems with the <code>Persistent_2</code> deployment type.</p>
 */
export interface AutoExportPolicy {
  /**
   * <p>The <code>AutoExportPolicy</code> can have the following event values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - New files and directories are automatically exported
   *                 to the data repository as they are added to the file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHANGED</code> - Changes to files and directories on the
   *                 file system are automatically exported to the data repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Files and directories are automatically deleted
   *                 on the data repository when they are deleted on the file system.</p>
   *             </li>
   *          </ul>
   *          <p>You can define any combination of event types for your <code>AutoExportPolicy</code>.</p>
   */
  Events?: (EventType | string)[];
}

/**
 * <p>Describes the data repository association's automatic import policy.
 *             The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory
 *             listings up to date by importing changes to your Amazon FSx for Lustre file system
 *             as you modify objects in a linked S3 bucket.</p>
 *          <p>The <code>AutoImportPolicy</code> is supported only for Amazon FSx for Lustre
 *             file systems with the <code>Persistent_2</code> deployment type.</p>
 */
export interface AutoImportPolicy {
  /**
   * <p>The <code>AutoImportPolicy</code> can have the following event values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - Amazon FSx automatically imports metadata of
   *                 files added to the linked S3 bucket that do not currently exist in the FSx
   *                 file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHANGED</code> - Amazon FSx automatically updates file
   *                 metadata and invalidates existing file content on the file system as files
   *                 change in the data repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Amazon FSx automatically deletes files
   *                 on the file system as corresponding files are deleted in the data repository.</p>
   *             </li>
   *          </ul>
   *          <p>You can define any combination of event types for your <code>AutoImportPolicy</code>.</p>
   */
  Events?: (EventType | string)[];
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
   *          <ul>
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

/**
 * <p>The data repository task could not be canceled because the task has already ended.</p>
 */
export class DataRepositoryTaskEnded extends __BaseException {
  readonly name: "DataRepositoryTaskEnded" = "DataRepositoryTaskEnded";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataRepositoryTaskEnded, __BaseException>) {
    super({
      name: "DataRepositoryTaskEnded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataRepositoryTaskEnded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The data repository task or tasks you specified could not be found.</p>
 */
export class DataRepositoryTaskNotFound extends __BaseException {
  readonly name: "DataRepositoryTaskNotFound" = "DataRepositoryTaskNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataRepositoryTaskNotFound, __BaseException>) {
    super({
      name: "DataRepositoryTaskNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataRepositoryTaskNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation is not supported for this resource or API.</p>
 */
export class UnsupportedOperation extends __BaseException {
  readonly name: "UnsupportedOperation" = "UnsupportedOperation";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperation, __BaseException>) {
    super({
      name: "UnsupportedOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
 */
export class BackupNotFound extends __BaseException {
  readonly name: "BackupNotFound" = "BackupNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupNotFound, __BaseException>) {
    super({
      name: "BackupNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupNotFound.prototype);
    this.Message = opts.Message;
  }
}

export interface CopyBackupRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the source backup. Specifies the ID of the backup that's being copied.</p>
   */
  SourceBackupId: string | undefined;

  /**
   * <p>The source Amazon Web Services Region of the backup. Specifies the Amazon Web Services Region from which the backup is being copied. The source and destination
   *          Regions must be in the same Amazon Web Services partition. If you don't specify a
   *          Region, <code>SourceRegion</code> defaults to the Region where the request is sent from
   *          (in-Region copy).</p>
   */
  SourceRegion?: string;

  /**
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *              Amazon FSx file systems, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon FSx for Lustre <code>PERSISTENT_1</code>
   *                 and <code>PERSISTENT_2</code> deployment types only.</p>
   *                <p>
   *                   <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using
   *                     the Amazon FSx service KMS key for your account.</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for NetApp ONTAP</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for OpenZFS</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for Windows File Server</p>
   *             </li>
   *          </ul>
   *          <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used.
   *             For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A Boolean flag indicating whether tags from the source backup should be copied to the
   *          backup copy. This value defaults to <code>false</code>.</p>
   *          <p>If you set <code>CopyTags</code> to <code>true</code> and the source backup has existing
   *          tags, you can use the <code>Tags</code> parameter to create new tags, provided that the sum
   *          of the source backup tags and the new tags doesn't exceed 50. Both sets of tags are
   *          merged. If there are tag conflicts (for example, two tags with the same key but different
   *          values), the tags created with the <code>Tags</code> parameter take precedence.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>If backup creation fails, this structure contains the details of that
 *             failure.</p>
 */
export interface BackupFailureDetails {
  /**
   * <p>A message describing the backup-creation failure.</p>
   */
  Message?: string;
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
export class IncompatibleParameterError extends __BaseException {
  readonly name: "IncompatibleParameterError" = "IncompatibleParameterError";
  readonly $fault: "client" = "client";
  /**
   * <p>A parameter that is incompatible with the earlier request.</p>
   */
  Parameter: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleParameterError, __BaseException>) {
    super({
      name: "IncompatibleParameterError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleParameterError.prototype);
    this.Parameter = opts.Parameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Amazon FSx doesn't support Multi-AZ Windows File Server copy backup in the
 *          destination Region, so the copied backup can't be restored.</p>
 */
export class IncompatibleRegionForMultiAZ extends __BaseException {
  readonly name: "IncompatibleRegionForMultiAZ" = "IncompatibleRegionForMultiAZ";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleRegionForMultiAZ, __BaseException>) {
    super({
      name: "IncompatibleRegionForMultiAZ",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleRegionForMultiAZ.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Key Management Service (KMS) key of the destination backup is not
 *          valid.</p>
 */
export class InvalidDestinationKmsKey extends __BaseException {
  readonly name: "InvalidDestinationKmsKey" = "InvalidDestinationKmsKey";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDestinationKmsKey, __BaseException>) {
    super({
      name: "InvalidDestinationKmsKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDestinationKmsKey.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Region provided for <code>SourceRegion</code> is not valid or is in a different
 *             Amazon Web Services partition.</p>
 */
export class InvalidRegion extends __BaseException {
  readonly name: "InvalidRegion" = "InvalidRegion";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRegion, __BaseException>) {
    super({
      name: "InvalidRegion",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRegion.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Key Management Service (KMS) key of the source backup is not
 *          valid.</p>
 */
export class InvalidSourceKmsKey extends __BaseException {
  readonly name: "InvalidSourceKmsKey" = "InvalidSourceKmsKey";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSourceKmsKey, __BaseException>) {
    super({
      name: "InvalidSourceKmsKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSourceKmsKey.prototype);
    this.Message = opts.Message;
  }
}

export enum ServiceLimit {
  FILE_CACHE_COUNT = "FILE_CACHE_COUNT",
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
export class ServiceLimitExceeded extends __BaseException {
  readonly name: "ServiceLimitExceeded" = "ServiceLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * <p>Enumeration of the service limit that was exceeded. </p>
   */
  Limit: ServiceLimit | string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceeded, __BaseException>) {
    super({
      name: "ServiceLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceeded.prototype);
    this.Limit = opts.Limit;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because the lifecycle status of the source backup isn't
 *             <code>AVAILABLE</code>.</p>
 */
export class SourceBackupUnavailable extends __BaseException {
  readonly name: "SourceBackupUnavailable" = "SourceBackupUnavailable";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  BackupId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceBackupUnavailable, __BaseException>) {
    super({
      name: "SourceBackupUnavailable",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceBackupUnavailable.prototype);
    this.Message = opts.Message;
    this.BackupId = opts.BackupId;
  }
}

/**
 * <p>Another backup is already under way. Wait for completion before initiating
 *             additional backups of this file system.</p>
 */
export class BackupInProgress extends __BaseException {
  readonly name: "BackupInProgress" = "BackupInProgress";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupInProgress, __BaseException>) {
    super({
      name: "BackupInProgress",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupInProgress.prototype);
    this.Message = opts.Message;
  }
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
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to
   *             ensure idempotent creation. This string is automatically filled on your behalf when you
   *             use the Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>(Optional) The tags to apply to the backup at backup creation. The key value of the
   *                 <code>Name</code> tag appears in the console as the backup name. If you have set
   *                 <code>CopyTagsToBackups</code> to <code>true</code>, and you specify one or more
   *             tags using the <code>CreateBackup</code> operation, no existing file system tags are
   *             copied from the file system to the backup.</p>
   */
  Tags?: Tag[];

  /**
   * <p>(Optional) The ID of the FSx for ONTAP volume to back up.</p>
   */
  VolumeId?: string;
}

/**
 * <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 */
export class VolumeNotFound extends __BaseException {
  readonly name: "VolumeNotFound" = "VolumeNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VolumeNotFound, __BaseException>) {
    super({
      name: "VolumeNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VolumeNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The configuration for an Amazon S3 data repository linked to an
 *             Amazon FSx for Lustre file system with a data repository association.
 *             The configuration consists of an <code>AutoImportPolicy</code> that
 *             defines which file events on the data repository are automatically
 *             imported to the file system and an <code>AutoExportPolicy</code> that
 *             defines which file events on the file system are automatically exported
 *             to the data repository. File events are when files or directories are
 *             added, changed, or deleted on the file system or the data repository.</p>
 *          <note>
 *             <p>Data repository associations on Amazon File Cache don't
 *             use <code>S3DataRepositoryConfiguration</code> because they don't
 *             support automatic import or automatic export.</p>
 *          </note>
 */
export interface S3DataRepositoryConfiguration {
  /**
   * <p>Specifies the type of updated objects (new, changed, deleted)
   *             that will be automatically imported from the linked S3 bucket
   *             to your file system.</p>
   */
  AutoImportPolicy?: AutoImportPolicy;

  /**
   * <p>Specifies the type of updated objects (new, changed, deleted)
   *             that will be automatically exported from your file system to
   *             the linked S3 bucket.</p>
   */
  AutoExportPolicy?: AutoExportPolicy;
}

export interface CreateDataRepositoryAssociationRequest {
  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>A path on the file system that points to a high-level directory (such
   *             as <code>/ns1/</code>) or subdirectory (such as <code>/ns1/subdir/</code>)
   *             that will be mapped 1-1 with <code>DataRepositoryPath</code>.
   *             The leading forward slash in the name is required. Two data repository
   *             associations cannot have overlapping file system paths. For example, if
   *             a data repository is associated with file system path <code>/ns1/</code>,
   *             then you cannot link another data repository with file system
   *             path <code>/ns1/ns2</code>.</p>
   *          <p>This path specifies where in your file system files will be exported
   *             from or imported to. This file system directory can be linked to only one
   *             Amazon S3 bucket, and no other S3 bucket can be linked to the directory.</p>
   *          <note>
   *             <p>If you specify only a forward slash (<code>/</code>) as the file system
   *             path, you can link only one data repository to the file system. You can only specify
   *             "/" as the file system path for the first data repository associated with a file system.</p>
   *          </note>
   */
  FileSystemPath?: string;

  /**
   * <p>The path to the Amazon S3 data repository that will be linked to the file
   *             system. The path can be an S3 bucket or prefix in the format
   *             <code>s3://myBucket/myPrefix/</code>. This path specifies where in the S3
   *             data repository files will be imported from or exported to.</p>
   */
  DataRepositoryPath: string | undefined;

  /**
   * <p>Set to <code>true</code> to run an import data repository task to import
   *             metadata from the data repository to the file system after the data repository
   *             association is created. Default is <code>false</code>.</p>
   */
  BatchImportMetaDataOnCreate?: boolean;

  /**
   * <p>For files imported from a data repository, this value determines the stripe count and
   *             maximum amount of data per file (in MiB) stored on a single physical disk. The maximum
   *             number of disks that a single file can be striped across is limited by the total number
   *             of disks that make up the file system.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * <p>The configuration for an Amazon S3 data repository linked to an
   *             Amazon FSx Lustre file system with a data repository association.
   *             The configuration defines which file events (new, changed, or
   *             deleted files or directories) are automatically imported from
   *             the linked data repository to the file system or automatically
   *             exported from the file system to the data repository.</p>
   */
  S3?: S3DataRepositoryConfiguration;

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

export enum NfsVersion {
  NFS3 = "NFS3",
}

/**
 * <p>The configuration for a data repository association that
 *             links an Amazon File Cache resource to an NFS data repository.</p>
 */
export interface NFSDataRepositoryConfiguration {
  /**
   * <p>The version of the NFS (Network File System) protocol of the
   *             NFS data repository. Currently, the only supported value is
   *             <code>NFS3</code>, which indicates that the data repository must
   *             support the NFSv3 protocol.</p>
   */
  Version: NfsVersion | string | undefined;

  /**
   * <p>A list of up to 2 IP addresses of DNS servers used to resolve
   *             the NFS file system domain name. The provided IP addresses can either
   *             be the IP addresses of a DNS forwarder or resolver that the customer
   *             manages and runs inside the customer VPC, or the IP addresses of the
   *             on-premises DNS servers.</p>
   */
  DnsIps?: string[];

  /**
   * <p>This parameter is not supported for Amazon File Cache.</p>
   */
  AutoExportPolicy?: AutoExportPolicy;
}

/**
 * <p>The configuration of a data repository association that links
 *             an Amazon FSx for Lustre file system to an Amazon S3 bucket
 *             or an Amazon File Cache resource to an Amazon S3 bucket or an NFS file system.
 *             The data repository association configuration object is returned
 *             in the response of the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDataRepositoryAssociation</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateDataRepositoryAssociation</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDataRepositoryAssociations</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Data repository associations are supported only for an Amazon FSx for Lustre
 *             file system with the <code>Persistent_2</code> deployment type and for an
 *             Amazon File Cache resource.</p>
 */
export interface DataRepositoryAssociation {
  /**
   * <p>The system-generated, unique ID of the data repository association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId?: string;

  /**
   * <p>Describes the state of a data repository association. The lifecycle can have
   *             the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The data repository association between
   *                 the file system or cache and the data repository is being created.
   *                 The data repository is unavailable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The data repository association is
   *                 available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURED</code> - The data repository association is
   *                 misconfigured. Until the configuration is corrected, automatic import and
   *                 automatic export will not work (only for Amazon FSx for Lustre).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The data repository association is undergoing
   *                 a customer initiated update that might affect its availability.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The data repository association is undergoing
   *                 a customer initiated deletion.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The data repository association is in a terminal
   *                 state that cannot be recovered.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: DataRepositoryLifecycle | string;

  /**
   * <p>Provides detailed information about the data repository if its <code>Lifecycle</code> is
   *             set to <code>MISCONFIGURED</code> or <code>FAILED</code>.</p>
   */
  FailureDetails?: DataRepositoryFailureDetails;

  /**
   * <p>A path on the Amazon FSx for Lustre file system that points to a high-level directory (such
   *             as <code>/ns1/</code>) or subdirectory (such as <code>/ns1/subdir/</code>)
   *             that will be mapped 1-1 with <code>DataRepositoryPath</code>.
   *             The leading forward slash in the name is required. Two data repository
   *             associations cannot have overlapping file system paths. For example, if
   *             a data repository is associated with file system path <code>/ns1/</code>,
   *             then you cannot link another data repository with file system
   *             path <code>/ns1/ns2</code>.</p>
   *          <p>This path specifies where in your file system files will be exported
   *             from or imported to. This file system directory can be linked to only one
   *             Amazon S3 bucket, and no other S3 bucket can be linked to the directory.</p>
   *          <note>
   *             <p>If you specify only a forward slash (<code>/</code>) as the file system
   *             path, you can link only one data repository to the file system. You can only specify
   *             "/" as the file system path for the first data repository associated with a file system.</p>
   *          </note>
   */
  FileSystemPath?: string;

  /**
   * <p>The path to the data repository that will be linked to the cache
   *             or file system.</p>
   *          <ul>
   *             <li>
   *                <p>For Amazon File Cache, the path can be an NFS data repository
   *                 that will be linked to the cache. The path can be in one of two formats:</p>
   *                <ul>
   *                   <li>
   *                      <p>If you are not using the <code>DataRepositorySubdirectories</code>
   *                         parameter, the path is to an NFS Export directory (or one of its subdirectories)
   *                         in the format <code>nsf://nfs-domain-name/exportpath</code>. You can therefore
   *                         link a single NFS Export to a single data repository association.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you are using the <code>DataRepositorySubdirectories</code>
   *                         parameter, the path is the domain name of the NFS file system in the format
   *                         <code>nfs://filer-domain-name</code>, which indicates the root of the
   *                         subdirectories specified with the <code>DataRepositorySubdirectories</code>
   *                         parameter.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For Amazon File Cache, the path can be an S3 bucket or prefix
   *                 in the format <code>s3://myBucket/myPrefix/</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon FSx for Lustre, the path can be an S3 bucket or prefix
   *                 in the format <code>s3://myBucket/myPrefix/</code>.</p>
   *             </li>
   *          </ul>
   */
  DataRepositoryPath?: string;

  /**
   * <p>A boolean flag indicating whether an import data repository task to import
   *             metadata should run after the data repository association is created. The
   *             task runs if this flag is set to <code>true</code>.</p>
   *          <note>
   *             <p>
   *                <code>BatchImportMetaDataOnCreate</code> is not supported for data repositories
   *                 linked to an Amazon File Cache resource.</p>
   *          </note>
   */
  BatchImportMetaDataOnCreate?: boolean;

  /**
   * <p>For files imported from a data repository, this value determines the stripe count and
   *             maximum amount of data per file (in MiB) stored on a single physical disk. The maximum
   *             number of disks that a single file can be striped across is limited by the total number
   *             of disks that make up the file system or cache.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * <p>The configuration for an Amazon S3 data repository linked to an
   *             Amazon FSx for Lustre file system with a data repository association.</p>
   */
  S3?: S3DataRepositoryConfiguration;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The globally unique ID of the Amazon File Cache resource.</p>
   */
  FileCacheId?: string;

  /**
   * <p>A path on the Amazon File Cache that points to a high-level directory (such
   *             as <code>/ns1/</code>) or subdirectory (such as <code>/ns1/subdir/</code>)
   *             that will be mapped 1-1 with <code>DataRepositoryPath</code>.
   *             The leading forward slash in the path is required. Two data repository
   *             associations cannot have overlapping cache paths. For example, if
   *             a data repository is associated with cache path <code>/ns1/</code>,
   *             then you cannot link another data repository with cache
   *             path <code>/ns1/ns2</code>.</p>
   *          <p>This path specifies the directory in your cache where files will be exported
   *             from. This cache directory can be linked to only one data repository
   *             (S3 or NFS) and no other data repository can be linked to the directory.</p>
   *          <note>
   *             <p>The cache path can only be set to root (/) on an NFS DRA when
   *                 <code>DataRepositorySubdirectories</code> is specified. If you
   *                 specify root (/) as the cache path, you can create only one DRA
   *                 on the cache.</p>
   *             <p>The cache path cannot be set to root (/) for an S3 DRA.</p>
   *          </note>
   */
  FileCachePath?: string;

  /**
   * <p>For Amazon File Cache, a list of NFS Exports that will be linked with an
   *             NFS data repository association. All the subdirectories must be on a single NFS file system.
   *             The Export paths are in the format <code>/exportpath1</code>.
   *             To use this parameter, you must configure <code>DataRepositoryPath</code>
   *             as the domain name of the NFS file system. The NFS file system domain name in effect is the
   *             root of the subdirectories. Note that <code>DataRepositorySubdirectories</code> is not
   *             supported for S3 data repositories.</p>
   */
  DataRepositorySubdirectories?: string[];

  /**
   * <p>The configuration for an NFS data repository linked to an
   *             Amazon File Cache resource with a data repository association.</p>
   */
  NFS?: NFSDataRepositoryConfiguration;
}

export interface CreateDataRepositoryAssociationResponse {
  /**
   * <p>The response object returned after the data repository association is created.</p>
   */
  Association?: DataRepositoryAssociation;
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

export enum DataRepositoryTaskType {
  AUTO_TRIGGERED_EVICTION = "AUTO_RELEASE_DATA",
  EVICTION = "RELEASE_DATA_FROM_FILESYSTEM",
  EXPORT = "EXPORT_TO_REPOSITORY",
  IMPORT = "IMPORT_METADATA_FROM_REPOSITORY",
}

export interface CreateDataRepositoryTaskRequest {
  /**
   * <p>Specifies the type of data repository task to create.</p>
   */
  Type: DataRepositoryTaskType | string | undefined;

  /**
   * <p>A list of paths for the data repository task to use when the task is processed.
   *             If a path that you provide isn't valid, the task fails.</p>
   *          <ul>
   *             <li>
   *                <p>For export tasks, the list contains paths on the Amazon FSx file system
   *                 from which the files are exported to the Amazon S3 bucket. The default path is the
   *                 file system root directory. The paths you provide need to be relative to the mount
   *                 point of the file system. If the mount point is <code>/mnt/fsx</code> and
   *                 <code>/mnt/fsx/path1</code> is a directory or file on the file system you want
   *                 to export, then the path to provide is <code>path1</code>.</p>
   *             </li>
   *             <li>
   *                <p>For import tasks, the list contains paths in the Amazon S3 bucket
   *                 from which POSIX metadata changes are imported to the Amazon FSx file system.
   *                 The path can be an S3 bucket or prefix in the format
   *                 <code>s3://myBucket/myPrefix</code> (where <code>myPrefix</code> is optional).</p>
   *             </li>
   *          </ul>
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

  /**
   * <p>Specifies the amount of data to release, in GiB, by an Amazon File Cache
   *             <code>AUTO_RELEASE_DATA</code> task that automatically releases files from the cache.</p>
   */
  CapacityToRelease?: number;
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

  /**
   * <p>The total amount of data, in GiB, released by an Amazon File Cache
   *             AUTO_RELEASE_DATA task that automatically releases files from the cache.</p>
   */
  ReleasedCapacity?: number;
}

/**
 * <p>A description of the data repository task. You use data repository tasks
 *             to perform bulk transfer operations between an Amazon FSx for Lustre file system
 *             and a linked data repository. An Amazon File Cache resource uses a task to
 *             automatically release files from the cache.</p>
 */
export interface DataRepositoryTask {
  /**
   * <p>The system-generated, unique 17-digit ID of the data repository task.</p>
   */
  TaskId: string | undefined;

  /**
   * <p>The lifecycle status of the data repository task, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The task has not started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXECUTING</code> - The task is in process.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> -  The task was not able to be completed. For example, there may be files the task failed to process.
   *                 The <a>DataRepositoryTaskFailureDetails</a> property provides more information about task failures.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code> - The task has completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELED</code> - The task was canceled and it did not complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELING</code> - The task is in process of being canceled.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You cannot delete an FSx for Lustre file system if there are data
   *                 repository tasks for the file system in the <code>PENDING</code> or <code>EXECUTING</code> states.
   *                 Please retry when the data repository task is finished (with a status of <code>CANCELED</code>, <code>SUCCEEDED</code>, or <code>FAILED</code>).
   *                 You can use the DescribeDataRepositoryTask action to monitor the task status. Contact the FSx team if you need to delete your file system immediately.</p>
   *          </note>
   */
  Lifecycle: DataRepositoryTaskLifecycle | string | undefined;

  /**
   * <p>The type of data repository task.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EXPORT_TO_REPOSITORY</code> tasks export from your
   *                 Amazon FSx for Lustre file system to a linked data repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPORT_METADATA_FROM_REPOSITORY</code> tasks import metadata
   *                 changes from a linked S3 bucket to your Amazon FSx for Lustre file system.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTO_RELEASE_DATA</code> tasks automatically release files from
   *                 an Amazon File Cache resource.</p>
   *             </li>
   *          </ul>
   */
  Type: DataRepositoryTaskType | string | undefined;

  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time the system began processing the task.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the system completed processing the task, populated after the task is complete.</p>
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
   * <p>The globally unique ID of the file system.</p>
   */
  FileSystemId?: string;

  /**
   * <p>An array of paths that specify the data for the data repository task to process.
   *             For example, in an EXPORT_TO_REPOSITORY task, the paths specify which data to export
   *             to the linked data repository.</p>
   *          <p>(Default) If <code>Paths</code> is not specified, Amazon FSx uses the file system root directory.</p>
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

  /**
   * <p>Specifies the amount of data to release, in GiB, by an Amazon File Cache
   *             AUTO_RELEASE_DATA task that automatically releases files from the cache.</p>
   */
  CapacityToRelease?: number;

  /**
   * <p>The system-generated, unique ID of the cache.</p>
   */
  FileCacheId?: string;
}

export interface CreateDataRepositoryTaskResponse {
  /**
   * <p>The description of the data repository task that you just created.</p>
   */
  DataRepositoryTask?: DataRepositoryTask;
}

/**
 * <p>An existing data repository task is currently executing on the file system.
 *         Wait until the existing task has completed, then create the new task.</p>
 */
export class DataRepositoryTaskExecuting extends __BaseException {
  readonly name: "DataRepositoryTaskExecuting" = "DataRepositoryTaskExecuting";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataRepositoryTaskExecuting, __BaseException>) {
    super({
      name: "DataRepositoryTaskExecuting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataRepositoryTaskExecuting.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The configuration for an NFS data repository association (DRA)
 *             created during the creation of the Amazon File Cache resource.</p>
 */
export interface FileCacheNFSConfiguration {
  /**
   * <p>The version of the NFS (Network File System) protocol of the
   *             NFS data repository. The only supported value is <code>NFS3</code>,
   *             which indicates that the data repository must support the NFSv3 protocol.</p>
   */
  Version: NfsVersion | string | undefined;

  /**
   * <p>A list of up to 2 IP addresses of DNS servers used to resolve
   *             the NFS file system domain name. The provided IP addresses can either
   *             be the IP addresses of a DNS forwarder or resolver that the customer
   *             manages and runs inside the customer VPC, or the IP addresses of the
   *             on-premises DNS servers.</p>
   */
  DnsIps?: string[];
}

/**
 * <p>The configuration for a data repository association (DRA) to
 *             be created during the Amazon File Cache resource creation. The DRA
 *             links the cache to either an Amazon S3 bucket or prefix, or a Network File
 *             System (NFS) data repository that supports the NFSv3 protocol.</p>
 *          <p>The DRA does not support automatic import or automatic
 *             export.</p>
 */
export interface FileCacheDataRepositoryAssociation {
  /**
   * <p>A path on the cache that points to a high-level directory (such
   *             as <code>/ns1/</code>) or subdirectory (such as <code>/ns1/subdir/</code>)
   *             that will be mapped 1-1 with <code>DataRepositoryPath</code>.
   *             The leading forward slash in the name is required. Two data repository
   *             associations cannot have overlapping cache paths. For example, if
   *             a data repository is associated with cache path <code>/ns1/</code>,
   *             then you cannot link another data repository with cache
   *             path <code>/ns1/ns2</code>.</p>
   *          <p>This path specifies where in your cache files will be exported
   *             from. This cache directory can be linked to only one data repository,
   *             and no data repository other can be linked to the directory.</p>
   *          <note>
   *             <p>The cache path can only be set to root (/) on an NFS DRA when
   *                 <code>DataRepositorySubdirectories</code> is specified. If you
   *                 specify root (/) as the cache path, you can create only one DRA
   *                 on the cache.</p>
   *             <p>The cache path cannot be set to root (/) for an S3 DRA.</p>
   *          </note>
   */
  FileCachePath: string | undefined;

  /**
   * <p>The path to the S3 or NFS data repository that links to the
   *             cache. You must provide one of the following paths:</p>
   *          <ul>
   *             <li>
   *                <p>The path can be an NFS data repository that links to
   *                 the cache. The path can be in one of two formats:</p>
   *                <ul>
   *                   <li>
   *                      <p>If you are not using the <code>DataRepositorySubdirectories</code>
   *                         parameter, the path is to an NFS Export directory (or one of its subdirectories)
   *                         in the format <code>nsf://nfs-domain-name/exportpath</code>. You can therefore
   *                         link a single NFS Export to a single data repository association.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you are using the <code>DataRepositorySubdirectories</code>
   *                         parameter, the path is the domain name of the NFS file system in the format
   *                         <code>nfs://filer-domain-name</code>, which indicates the root of the
   *                         subdirectories specified with the <code>DataRepositorySubdirectories</code>
   *                         parameter.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The path can be an S3 bucket or prefix
   *                 in the format <code>s3://myBucket/myPrefix/</code>.</p>
   *             </li>
   *          </ul>
   */
  DataRepositoryPath: string | undefined;

  /**
   * <p>A list of NFS Exports that will be linked with this data repository
   *             association. The Export paths are in the format <code>/exportpath1</code>.
   *             To use this parameter, you must configure <code>DataRepositoryPath</code>
   *             as the domain name of the NFS file system. The NFS file system domain name in effect is the
   *             root of the subdirectories. Note that <code>DataRepositorySubdirectories</code>
   *             is not supported for S3 data repositories.</p>
   */
  DataRepositorySubdirectories?: string[];

  /**
   * <p>The configuration for a data repository association that
   *             links an Amazon File Cache resource to an NFS data repository.</p>
   */
  NFS?: FileCacheNFSConfiguration;
}

export enum FileCacheType {
  LUSTRE = "LUSTRE",
}

export enum FileCacheLustreDeploymentType {
  CACHE_1 = "CACHE_1",
}

/**
 * <p>The configuration for a Lustre MDT (Metadata Target) storage volume.
 *             The metadata on Amazon File Cache is managed by a Lustre Metadata Server
 *             (MDS) while the actual metadata is persisted on an MDT.</p>
 */
export interface FileCacheLustreMetadataConfiguration {
  /**
   * <p>The storage capacity of the Lustre MDT (Metadata Target) storage
   *             volume in gibibytes (GiB). The only supported value is <code>2400</code> GiB.</p>
   */
  StorageCapacity: number | undefined;
}

/**
 * <p>The Amazon File Cache configuration for the cache that you are creating.</p>
 */
export interface CreateFileCacheLustreConfiguration {
  /**
   * <p>Provisions the amount of read and write throughput for each 1 tebibyte (TiB)
   *             of cache storage capacity, in MB/s/TiB. The only supported
   *             value is <code>1000</code>.</p>
   */
  PerUnitStorageThroughput: number | undefined;

  /**
   * <p>Specifies the cache deployment type, which must be <code>CACHE_1</code>.</p>
   */
  DeploymentType: FileCacheLustreDeploymentType | string | undefined;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The configuration for a Lustre MDT (Metadata Target) storage volume.</p>
   */
  MetadataConfiguration: FileCacheLustreMetadataConfiguration | undefined;
}

export interface CreateFileCacheRequest {
  /**
   * <p>An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   *          <p>By using the idempotent operation, you can retry a <code>CreateFileCache</code>
   *             operation without the risk of creating an extra cache. This approach can be useful
   *             when an initial call fails in a way that makes it unclear whether a cache was created.
   *             Examples are if a transport level timeout occurred, or your connection was reset.
   *             If you use the same client request token and the initial call created a cache, the
   *             client receives success as long as the parameters are the same.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The type of cache that you're creating, which
   *             must be <code>LUSTRE</code>.</p>
   */
  FileCacheType: FileCacheType | string | undefined;

  /**
   * <p>Sets the Lustre version for the cache that you're creating,
   *             which must be <code>2.12</code>.</p>
   */
  FileCacheTypeVersion: string | undefined;

  /**
   * <p>The storage capacity of the cache in gibibytes (GiB). Valid values
   *             are 1200 GiB, 2400 GiB, and increments of 2400 GiB.</p>
   */
  StorageCapacity: number | undefined;

  /**
   * <p>A list of subnet IDs that the cache will be accessible from. You can specify only
   *             one subnet ID in a call to the <code>CreateFileCache</code> operation.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of IDs specifying the security groups to apply to all network interfaces
   *             created for Amazon File Cache access. This list isn't returned in later requests to
   *             describe the cache.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A boolean flag indicating whether tags for the cache should be copied to
   *             data repository associations. This value defaults to false.</p>
   */
  CopyTagsToDataRepositoryAssociations?: boolean;

  /**
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *             an Amazon File Cache. If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed
   *             KMS key for your account is used. For more information,
   *             see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The configuration for the Amazon File Cache resource being created.</p>
   */
  LustreConfiguration?: CreateFileCacheLustreConfiguration;

  /**
   * <p>A list of up to 8 configurations for data repository associations (DRAs) to
   *             be created during the cache creation. The DRAs link the cache to either an
   *             Amazon S3 data repository or a Network File System (NFS) data repository that supports the NFSv3 protocol.</p>
   *          <p>The DRA configurations must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>All configurations on the list must be of the
   *                 same data repository type, either all S3 or all NFS. A cache
   *                 can't link to different data repository types at the same time.</p>
   *             </li>
   *             <li>
   *                <p>An NFS DRA must link to an NFS file system that
   *                 supports the NFSv3 protocol.</p>
   *             </li>
   *          </ul>
   *          <p>DRA automatic import and automatic export is not supported.</p>
   */
  DataRepositoryAssociations?: FileCacheDataRepositoryAssociation[];
}

/**
 * <p>A structure providing details of any failures that occurred.</p>
 */
export interface FileCacheFailureDetails {
  /**
   * <p>A message describing any failures that occurred.</p>
   */
  Message?: string;
}

export enum FileCacheLifecycle {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>The configuration for the Amazon File Cache resource.</p>
 */
export interface FileCacheLustreConfiguration {
  /**
   * <p>Per unit storage throughput represents the megabytes per second of read or write
   *             throughput per 1 tebibyte of storage provisioned. Cache throughput capacity is
   *             equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). The only
   *             supported value is <code>1000</code>.</p>
   */
  PerUnitStorageThroughput?: number;

  /**
   * <p>The deployment type of the Amazon File Cache resource, which must
   *             be <code>CACHE_1</code>.</p>
   */
  DeploymentType?: FileCacheLustreDeploymentType | string;

  /**
   * <p>You use the <code>MountName</code> value when mounting the cache. If you pass
   *             a cache ID to the <code>DescribeFileCaches</code> operation, it returns the
   *             the <code>MountName</code> value as part of the cache's description.</p>
   */
  MountName?: string;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The configuration for a Lustre MDT (Metadata Target) storage volume.</p>
   */
  MetadataConfiguration?: FileCacheLustreMetadataConfiguration;

  /**
   * <p>The configuration for Lustre logging used to write the enabled
   *             logging events for your Amazon File Cache resource to Amazon CloudWatch Logs.</p>
   */
  LogConfiguration?: LustreLogConfiguration;
}

/**
 * <p>The response object for the Amazon File Cache resource being created in the
 *             <code>CreateFileCache</code> operation.</p>
 */
export interface FileCacheCreating {
  /**
   * <p>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon
   *             Resource Names (ARNs) for resources.</p>
   */
  OwnerId?: string;

  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The system-generated, unique ID of the cache.</p>
   */
  FileCacheId?: string;

  /**
   * <p>The type of cache, which must be <code>LUSTRE</code>.</p>
   */
  FileCacheType?: FileCacheType | string;

  /**
   * <p>The Lustre version of the cache, which must be <code>2.12</code>.</p>
   */
  FileCacheTypeVersion?: string;

  /**
   * <p>The lifecycle status of the cache. The following are the possible values and
   *             what they mean:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The cache is in a healthy state, and is reachable and available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The new cache is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - An existing cache is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The cache is undergoing a customer-initiated update.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - An existing cache has experienced an unrecoverable failure.
   *                 When creating a new cache, the cache was unable to be created.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: FileCacheLifecycle | string;

  /**
   * <p>A structure providing details of any failures that occurred.</p>
   */
  FailureDetails?: FileCacheFailureDetails;

  /**
   * <p>The storage capacity of the cache in gibibytes (GiB).</p>
   */
  StorageCapacity?: number;

  /**
   * <p>The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and
   *                 subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnet IDs that the cache will be accessible from. You can specify only
   *             one subnet ID in a call to the <code>CreateFileCache</code> operation.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A list of network interface IDs.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>The Domain Name System (DNS) name for the cache.</p>
   */
  DNSName?: string;

  /**
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *             an Amazon File Cache. If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed
   *             KMS key for your account is used. For more information,
   *             see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

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
   * <p>A boolean flag indicating whether tags for the cache should be copied to
   *             data repository associations.</p>
   */
  CopyTagsToDataRepositoryAssociations?: boolean;

  /**
   * <p>The configuration for the Amazon File Cache resource.</p>
   */
  LustreConfiguration?: FileCacheLustreConfiguration;

  /**
   * <p>A list of IDs of data repository associations that are associated with this cache.</p>
   */
  DataRepositoryAssociationIds?: string[];
}

export interface CreateFileCacheResponse {
  /**
   * <p>A description of the cache that was created.</p>
   */
  FileCache?: FileCacheCreating;
}

/**
 * <p>One or more network settings specified in the request are invalid.</p>
 */
export class InvalidNetworkSettings extends __BaseException {
  readonly name: "InvalidNetworkSettings" = "InvalidNetworkSettings";
  readonly $fault: "client" = "client";
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
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNetworkSettings, __BaseException>) {
    super({
      name: "InvalidNetworkSettings",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNetworkSettings.prototype);
    this.Message = opts.Message;
    this.InvalidSubnetId = opts.InvalidSubnetId;
    this.InvalidSecurityGroupId = opts.InvalidSecurityGroupId;
    this.InvalidRouteTableId = opts.InvalidRouteTableId;
  }
}

/**
 * <p>An invalid value for <code>PerUnitStorageThroughput</code> was provided. Please create your file system again, using a valid value.</p>
 */
export class InvalidPerUnitStorageThroughput extends __BaseException {
  readonly name: "InvalidPerUnitStorageThroughput" = "InvalidPerUnitStorageThroughput";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPerUnitStorageThroughput, __BaseException>) {
    super({
      name: "InvalidPerUnitStorageThroughput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPerUnitStorageThroughput.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A cache configuration is required for this operation.</p>
 */
export class MissingFileCacheConfiguration extends __BaseException {
  readonly name: "MissingFileCacheConfiguration" = "MissingFileCacheConfiguration";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingFileCacheConfiguration, __BaseException>) {
    super({
      name: "MissingFileCacheConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingFileCacheConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Lustre logging configuration used when creating or updating an
 *             Amazon FSx for Lustre file system. An Amazon File Cache is created
 *             with Lustre logging enabled by default, with a setting of
 *             <code>WARN_ERROR</code> for the logging events. which can't be changed.</p>
 *          <p>Lustre logging writes the enabled logging events for your file system
 *             or cache to Amazon CloudWatch Logs.</p>
 */
export interface LustreLogCreateConfiguration {
  /**
   * <p>Sets which data repository events are logged by Amazon FSx.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WARN_ONLY</code> - only warning events are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR_ONLY</code> - only error events are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARN_ERROR</code> - both warning events and error events
   *                     are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - logging of data repository events
   *                     is turned off.</p>
   *             </li>
   *          </ul>
   */
  Level: LustreAccessAuditLogLevel | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that specifies the destination of the logs.</p>
   *          <p>The destination can be any Amazon CloudWatch Logs log group ARN, with the following
   *             requirements:</p>
   *          <ul>
   *             <li>
   *                <p>The destination ARN that you provide must be in the same Amazon Web Services partition,
   *                     Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>The name of the Amazon CloudWatch Logs log group must begin with
   *                     the <code>/aws/fsx</code> prefix.</p>
   *             </li>
   *             <li>
   *                <p>If you do not provide a destination, Amazon FSx will create and use a
   *                     log stream in the CloudWatch Logs <code>/aws/fsx/lustre</code> log group
   *                     (for Amazon FSx for Lustre) or <code>/aws/fsx/filecache</code>
   *                     (for Amazon File Cache).</p>
   *             </li>
   *             <li>
   *                <p>If <code>Destination</code> is provided and the resource does not
   *                     exist, the request will fail with a <code>BadRequest</code> error.</p>
   *             </li>
   *             <li>
   *                <p>If <code>Level</code> is set to <code>DISABLED</code>, you cannot specify
   *                     a destination in <code>Destination</code>.</p>
   *             </li>
   *          </ul>
   */
  Destination?: string;
}

/**
 * <p>The Lustre configuration for the file system being created.</p>
 *          <note>
 *             <p>The following parameters are not supported for file systems with the <code>Persistent_2</code>
 *             deployment type. Instead, use <code>CreateDataRepositoryAssociation</code>
 *             to create a data repository association to link your Lustre file system to a data repository.</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>AutoImportPolicy</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>ExportPath</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>ImportedChunkSize</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>ImportPath</code>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
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
   *          <note>
   *             <p>This parameter is not supported for file systems with the <code>Persistent_2</code> deployment type.
   *             Instead, use <code>CreateDataRepositoryAssociation</code> to create
   *             a data repository association to link your Lustre file system to a data repository.</p>
   *          </note>
   */
  ImportPath?: string;

  /**
   * <p>(Optional) Available with <code>Scratch</code> and <code>Persistent_1</code> deployment types.
   *             Specifies the path in the Amazon S3 bucket where the root of your Amazon FSx file system is exported.
   *             The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which
   *             new and changed data is to be exported from your Amazon FSx for Lustre file system. If
   *             an <code>ExportPath</code> value is not provided, Amazon FSx sets a default export path,
   *             <code>s3://import-bucket/FSxLustre[creation-timestamp]</code>. The timestamp is in
   *             UTC format, for example
   *             <code>s3://import-bucket/FSxLustre20181105T222312Z</code>.</p>
   *          <p>The Amazon S3 export bucket must be the same as the import bucket specified by
   *                 <code>ImportPath</code>. If you specify only a bucket name, such as
   *                 <code>s3://import-bucket</code>, you get a 1:1 mapping of file system objects to S3
   *             bucket objects. This mapping means that the input data in S3 is overwritten on export.
   *             If you provide a custom prefix in the export path, such as
   *             <code>s3://import-bucket/[custom-optional-prefix]</code>, Amazon FSx exports the contents of your file
   *             system to that export prefix in the Amazon S3 bucket.</p>
   *          <note>
   *             <p>This parameter is not supported for file systems with the <code>Persistent_2</code> deployment type.
   *             Instead, use <code>CreateDataRepositoryAssociation</code> to create
   *             a data repository association to link your Lustre file system to a data repository.</p>
   *          </note>
   */
  ExportPath?: string;

  /**
   * <p>(Optional) For files imported from a data repository, this value determines the stripe
   *             count and maximum amount of data per file (in MiB) stored on a single physical disk. The
   *             maximum number of disks that a single file can be striped across is limited by the total
   *             number of disks that make up the file system.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3  objects have a maximum size of 5 TB.</p>
   *          <p>This parameter is not supported for file systems with the <code>Persistent_2</code> deployment type.
   *             Instead, use <code>CreateDataRepositoryAssociation</code> to create
   *             a data repository association to link your Lustre file system to a data repository.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * <p>(Optional) Choose <code>SCRATCH_1</code> and <code>SCRATCH_2</code> deployment
   *             types when you need temporary storage and shorter-term processing of data.
   *             The <code>SCRATCH_2</code> deployment type provides in-transit encryption of data and higher burst
   *             throughput capacity than <code>SCRATCH_1</code>.</p>
   *          <p>Choose <code>PERSISTENT_1</code> for longer-term storage and for throughput-focused
   *             workloads that aren’t latency-sensitive.
   *             <code>PERSISTENT_1</code> supports encryption of data in transit, and is available in all
   *             Amazon Web Services Regions in which FSx for Lustre is available.</p>
   *          <p>Choose <code>PERSISTENT_2</code> for longer-term storage and for latency-sensitive workloads
   *             that require the highest levels of IOPS/throughput. <code>PERSISTENT_2</code> supports
   *             SSD storage, and offers higher <code>PerUnitStorageThroughput</code> (up to 1000 MB/s/TiB). <code>PERSISTENT_2</code>
   *             is available in a limited number of Amazon Web Services Regions.
   *             For more information, and an up-to-date list of Amazon Web Services Regions in which
   *             <code>PERSISTENT_2</code> is available, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html#lustre-deployment-types">File
   *                 system deployment options for FSx for Lustre</a> in the <i>Amazon FSx for Lustre User Guide</i>.</p>
   *          <note>
   *             <p>If you choose <code>PERSISTENT_2</code>, and you set <code>FileSystemTypeVersion</code> to
   *                     <code>2.10</code>, the <code>CreateFileSystem</code> operation fails.</p>
   *          </note>
   *          <p>Encryption of data in transit is automatically turned on when you access
   *                 <code>SCRATCH_2</code>, <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> file
   *             systems from Amazon EC2 instances that <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/data-                 protection.html">support
   *                 automatic encryption</a> in the Amazon Web Services Regions where they are
   *             available. For more information about encryption in transit for FSx for Lustre
   *             file systems, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html">Encrypting data in
   *                 transit</a>  in the <i>Amazon FSx for Lustre User Guide</i>. </p>
   *          <p>(Default = <code>SCRATCH_1</code>)</p>
   */
  DeploymentType?: LustreDeploymentType | string;

  /**
   * <p> (Optional) Available with <code>Scratch</code> and <code>Persistent_1</code> deployment types. When you
   *             create your file system, your existing S3 objects appear as file and directory listings.
   *             Use this property to choose how Amazon FSx keeps your file and directory listings up to date
   *             as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can
   *             have the following values:</p>
   *          <ul>
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
   *                 existing objects that are changed in the S3 bucket after you choose this option.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED_DELETED</code> - AutoImport is on. Amazon FSx automatically
   *                 imports file and directory listings of any new objects added to the S3 bucket, any
   *                 existing objects that are changed in the S3 bucket, and any objects that were deleted
   *                 in the S3 bucket.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/older-deployment-types.html#legacy-auto-import-from-s3">
   *             Automatically import updates from your S3 bucket</a>.</p>
   *          <note>
   *             <p>This parameter is not supported for file systems with the <code>Persistent_2</code> deployment type.
   *             Instead, use <code>CreateDataRepositoryAssociation</code> to create
   *             a data repository association to link your Lustre file system to a data repository.</p>
   *          </note>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * <p>Required with <code>PERSISTENT_1</code> and <code>PERSISTENT_2</code> deployment
   *             types, provisions the amount of read and write throughput for each 1 tebibyte (TiB) of
   *             file system storage capacity, in MB/s/TiB. File system throughput capacity is calculated
   *             by multiplying ﬁle system storage capacity (TiB) by the
   *                 <code>PerUnitStorageThroughput</code> (MB/s/TiB). For a 2.4-TiB ﬁle system,
   *             provisioning 50 MB/s/TiB of <code>PerUnitStorageThroughput</code> yields 120 MB/s of ﬁle
   *             system throughput. You pay for the amount of throughput that you provision. </p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>PERSISTENT_1</code> SSD storage: 50, 100, 200 MB/s/TiB.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT_1</code> HDD storage: 12, 40 MB/s/TiB.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT_2</code> SSD storage: 125, 250, 500, 1000 MB/s/TiB.</p>
   *             </li>
   *          </ul>
   */
  PerUnitStorageThroughput?: number;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>(Optional) Not available for use with file systems that are linked to a data
   *             repository. A boolean flag indicating whether tags for the file system should be copied
   *             to backups. The default value is false. If <code>CopyTagsToBackups</code> is set to
   *             true, all file system tags are copied to all automatic and user-initiated backups when
   *             the user doesn't specify any backup-specific tags. If
   *                 <code>CopyTagsToBackups</code> is set to true and you specify one or more backup
   *             tags, only the specified tags are copied to backups. If you specify one or more tags
   *             when creating a user-initiated backup, no tags are copied from the file system,
   *             regardless of this value.</p>
   *          <p>(Default = <code>false</code>)</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">
   *             Working with backups</a> in the <i>Amazon FSx for Lustre User Guide</i>.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>The type of drive cache used by <code>PERSISTENT_1</code> file systems that are provisioned with
   *             HDD storage devices. This parameter is required when storage type is HDD. Set this property to
   *             <code>READ</code> to improve the performance for frequently accessed files by caching up to 20%
   *             of the total storage capacity of the file system.</p>
   *          <p>This parameter is required when <code>StorageType</code> is set to <code>HDD</code>.</p>
   */
  DriveCacheType?: DriveCacheType | string;

  /**
   * <p>Sets the data compression configuration for the file system. <code>DataCompressionType</code>
   *             can have the following values:</p>
   *          <ul>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a>
   *             in the <i>Amazon FSx for Lustre User Guide</i>.</p>
   */
  DataCompressionType?: DataCompressionType | string;

  /**
   * <p>The Lustre logging configuration used when creating an Amazon FSx for Lustre
   *             file system. When logging is enabled, Lustre logs error and warning events for data repositories
   *             associated with your file system to Amazon CloudWatch Logs.</p>
   */
  LogConfiguration?: LustreLogCreateConfiguration;

  /**
   * <p>The Lustre root squash configuration used when creating an Amazon FSx for Lustre
   *             file system. When enabled, root squash restricts root-level access from clients that
   *             try to access your file system as a root user.</p>
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration;
}

/**
 * <p>The ONTAP configuration properties of the FSx for ONTAP file system that you
 *             are creating.</p>
 */
export interface CreateFileSystemOntapConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>Specifies the FSx for ONTAP file system deployment type to use in creating
   *             the file system.  </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_AZ_1</code> - (Default) A high availability file system configured
   *                     for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ)
   *                     unavailability.  </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_1</code> - A file system configured for Single-AZ
   *                     redundancy.</p>
   *             </li>
   *          </ul>
   *          <p>For information about the use cases for Multi-AZ and Single-AZ deployments, refer to
   *                 <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-AZ.html">Choosing a file system deployment type</a>. </p>
   */
  DeploymentType: OntapDeploymentType | string | undefined;

  /**
   * <p>(Multi-AZ only) Specifies the IP address range in which the endpoints to access your
   *             file system will be created. By default in the Amazon FSx  API, Amazon FSx
   *             selects an unused IP address range for you from the 198.19.* range. By default in the
   *             Amazon FSx  console, Amazon FSx  chooses the last 64 IP addresses from
   *             the VPC’s primary CIDR range to use as the endpoint IP address range for the file system.
   *             You can have overlapping endpoint IP addresses for file systems deployed in the
   *             same VPC/route tables.</p>
   */
  EndpointIpAddressRange?: string;

  /**
   * <p>The ONTAP administrative password for the <code>fsxadmin</code> user with which you
   *             administer your file system using the NetApp ONTAP CLI and REST API.</p>
   */
  FsxAdminPassword?: string;

  /**
   * <p>The SSD IOPS configuration for the FSx for ONTAP file system.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * <p>Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This
   *             specifies the subnet in which you want the preferred file server to be located.</p>
   */
  PreferredSubnetId?: string;

  /**
   * <p>(Multi-AZ only) Specifies the virtual private cloud (VPC) route tables in which your
   *             file system's endpoints will be created. You should specify all VPC route tables
   *             associated with the subnets in which your clients are located. By default, Amazon FSx
   *             selects your VPC's default route table.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>Sets the throughput capacity for the file system that you're creating. Valid values
   *             are 128, 256, 512, 1024, 2048, and 4096 MBps.</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

/**
 * <p>The configuration of an Amazon FSx for OpenZFS root volume.</p>
 */
export interface OpenZFSCreateRootVolumeConfiguration {
  /**
   * <p>Specifies the record size of an OpenZFS root volume, in kibibytes (KiB). Valid values are 4, 8,
   *         16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the
   *         default record size. Database workflows can benefit from a smaller record size, while streaming
   *         workflows can benefit from a larger record size. For additional guidance on setting a custom record
   *         size, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs">
   *         Tips for maximizing performance</a> in the
   *         <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  RecordSizeKiB?: number;

  /**
   * <p>Specifies the method used to compress the data on the volume. The compression
   *             type is <code>NONE</code> by default.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Doesn't compress the data on the volume.
   *                     <code>NONE</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZSTD</code> - Compresses the data in the volume using the Zstandard
   *                     (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better
   *                     compression ratio to minimize on-disk storage utilization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LZ4</code> - Compresses the data in the volume using the LZ4
   *                     compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive
   *                     and delivers higher write throughput speeds.</p>
   *             </li>
   *          </ul>
   */
  DataCompressionType?: OpenZFSDataCompressionType | string;

  /**
   * <p>The configuration object for mounting a file system.</p>
   */
  NfsExports?: OpenZFSNfsExport[];

  /**
   * <p>An object specifying how much storage users or groups can use on the volume.</p>
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[];

  /**
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots
   *             of the volume. This value defaults to <code>false</code>. If it's set to <code>true</code>,
   *             all tags for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code> and you specify one or more tags, only the specified tags are
   *             copied to snapshots. If you specify one or more tags when creating the snapshot, no tags
   *             are copied from the volume, regardless of this value. </p>
   */
  CopyTagsToSnapshots?: boolean;

  /**
   * <p>A Boolean value indicating whether the volume is read-only. Setting this value to
   *                 <code>true</code> can be useful after you have completed changes to a volume and no
   *             longer want changes to occur. </p>
   */
  ReadOnly?: boolean;
}

/**
 * <p>The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.</p>
 */
export interface CreateFileSystemOpenZFSConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A Boolean value indicating whether tags for the file system should be copied to
   *             backups. This value defaults to <code>false</code>. If it's set to <code>true</code>,
   *             all tags for the file system are copied to all automatic and user-initiated backups
   *             where the user doesn't specify tags. If this value is <code>true</code>, and you specify
   *             one or more tags, only the specified tags are copied to backups. If you specify one or
   *             more tags when creating a user-initiated backup, no tags are copied from the file
   *             system, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>A Boolean value indicating whether tags for the file system should be copied to volumes.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the file system are copied to volumes where the user doesn't specify tags. If this
   *             value is <code>true</code>, and you specify one or more tags, only the specified tags
   *             are copied to volumes. If you specify one or more tags when creating the volume, no
   *             tags are copied from the file system, regardless of this value.</p>
   */
  CopyTagsToVolumes?: boolean;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>Specifies the file system deployment type. Single AZ deployment types are configured
   *             for redundancy within a single Availability Zone in an Amazon Web Services Region .
   *             Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_1</code>- (Default) Creates file systems with throughput capacities of 64 - 4,096 MB/s.
   *                 <code>Single_AZ_1</code> is available in all Amazon Web Services Regions where Amazon FSx
   *                 for OpenZFS is available, except US West (Oregon).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_2</code>- Creates file systems with throughput capacities of 160 - 10,240 MB/s
   *                 using an NVMe L2ARC cache. <code>Single_AZ_2</code> is available only in the US East (N. Virginia), US East (Ohio),
   *                 US West (Oregon), and Europe (Ireland) Amazon Web Services Regions.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see: <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/availability-durability.html#available-aws-regions">Deployment type availability</a>
   *             and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#zfs-fs-performance">File system performance</a>
   *             in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  DeploymentType: OpenZFSDeploymentType | string | undefined;

  /**
   * <p>Specifies the throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second (MB/s). Valid values depend on the DeploymentType you choose, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>SINGLE_AZ_1</code>, valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MB/s.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SINGLE_AZ_2</code>, valid values are 160, 320, 640, 1280, 2560, 3840, 5120, 7680, or 10240 MB/s.</p>
   *             </li>
   *          </ul>
   *          <p>You pay for additional throughput capacity that you provision.</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The
   *             default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per
   *             GB of storage. The configuration consists of the total number of provisioned SSD IOPS
   *             and how the amount was provisioned (by the customer or by the system).</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * <p>The configuration Amazon FSx uses when creating the root value of the Amazon FSx for OpenZFS
   *             file system. All volumes are children of the root volume. </p>
   */
  RootVolumeConfiguration?: OpenZFSCreateRootVolumeConfiguration;
}

/**
 * <p>The Windows file access auditing configuration used when creating
 *             or updating an Amazon FSx for Windows File Server file system.</p>
 */
export interface WindowsAuditLogCreateConfiguration {
  /**
   * <p>Sets which attempt type is logged by Amazon FSx for file and folder accesses.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCESS_ONLY</code> - only successful attempts to access files
   *                     or folders are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILURE_ONLY</code> - only failed attempts to access files
   *                     or folders are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS_AND_FAILURE</code> - both successful attempts and
   *                     failed attempts to access files or folders are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - access auditing of files and folders is turned off.</p>
   *             </li>
   *          </ul>
   */
  FileAccessAuditLogLevel: WindowsAccessAuditLogLevel | string | undefined;

  /**
   * <p>Sets which attempt type is logged by Amazon FSx for file share accesses.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCESS_ONLY</code> - only successful attempts to access file
   *                     shares are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILURE_ONLY</code> - only failed attempts to access file
   *                     shares are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS_AND_FAILURE</code> - both successful attempts and
   *                     failed attempts to access file shares are logged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - access auditing of file shares is turned off.</p>
   *             </li>
   *          </ul>
   */
  FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that specifies the destination of the audit logs.</p>
   *          <p>The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis
   *             Data Firehose delivery stream ARN, with the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>The destination ARN that you provide (either CloudWatch Logs log group
   *                     or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition,
   *                     Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p>
   *             </li>
   *             <li>
   *                <p>The name of the Amazon CloudWatch Logs log group must begin with
   *                     the <code>/aws/fsx</code> prefix. The name of the Amazon Kinesis Data
   *                     Firehouse delivery stream must begin with the <code>aws-fsx</code> prefix.</p>
   *             </li>
   *             <li>
   *                <p>If you do not provide a destination in <code>AuditLogDestination</code>,
   *                     Amazon FSx will create and use a log stream in the CloudWatch Logs
   *                     <code>/aws/fsx/windows</code> log group.</p>
   *             </li>
   *             <li>
   *                <p>If <code>AuditLogDestination</code> is provided and the resource does not
   *                     exist, the request will fail with a <code>BadRequest</code> error.</p>
   *             </li>
   *             <li>
   *                <p>If <code>FileAccessAuditLogLevel</code> and <code>FileShareAccessAuditLogLevel</code>
   *                     are both set to <code>DISABLED</code>, you cannot specify a destination in
   *                     <code>AuditLogDestination</code>.</p>
   *             </li>
   *          </ul>
   */
  AuditLogDestination?: string;
}

/**
 * <p>The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to
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
   *          <important>
   *             <p>Only Organizational Unit (OU) objects can be the direct parent of the file system
   *                 that you're creating.</p>
   *          </important>
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
   * <p>A list of up to three IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory. </p>
   */
  DnsIps: string[] | undefined;
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
   * <p>The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to
   *             a self-managed (including on-premises) Microsoft Active Directory (AD)
   *             directory. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html">
   *                 Using Amazon FSx with your self-managed Microsoft Active Directory</a> or
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;

  /**
   * <p>Specifies the file system deployment type, valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_AZ_1</code> - Deploys a high availability file system that is configured
   *                     for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You
   *                     can only deploy a Multi-AZ file system in Amazon Web Services Regions that have a minimum of three Availability Zones. Also
   *                 supports HDD storage type</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_1</code> - (Default) Choose to deploy a file system that is configured for single AZ redundancy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_2</code> - The latest generation Single AZ file system.
   *                     Specifies a file system that is configured for single AZ redundancy and supports HDD storage type.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see
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
   * <p>Sets the throughput capacity of an Amazon FSx file system, measured in megabytes per second (MB/s), in 2 to
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and
   *         <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including
   *         additional steps you must take to be able to access your file system using a DNS alias.</p>
   *          <p>An alias name has to meet the following requirements:</p>
   *          <ul>
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
   *          <p>For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them:
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

/**
 * <p>The request object used to create a new Amazon FSx file system.</p>
 */
export interface CreateFileSystemRequest {
  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *                 Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The type of Amazon FSx file system to create. Valid values are
   *                 <code>WINDOWS</code>, <code>LUSTRE</code>, <code>ONTAP</code>, and
   *                 <code>OPENZFS</code>.</p>
   */
  FileSystemType: FileSystemType | string | undefined;

  /**
   * <p>Sets the storage capacity of the file system that you're creating, in gibibytes (GiB).</p>
   *          <p>
   *             <b>FSx for Lustre file systems</b> - The amount of
   *             storage capacity that you can configure depends on the value that you set for
   *                 <code>StorageType</code> and the Lustre <code>DeploymentType</code>, as
   *             follows:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>SCRATCH_2</code>, <code>PERSISTENT_2</code> and <code>PERSISTENT_1</code> deployment types
   *                 using SSD storage type, the valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT_1</code> HDD file systems, valid values are increments of 6000 GiB for
   *                 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SCRATCH_1</code> deployment type, valid values are
   *                 1200 GiB, 2400 GiB, and increments of 3600 GiB.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>FSx for ONTAP file systems</b> - The amount of storage capacity
   *             that you can configure is from 1024 GiB up to 196,608 GiB (192 TiB).</p>
   *          <p>
   *             <b>FSx for OpenZFS file systems</b> - The amount of storage capacity that
   *             you can configure is from 64 GiB up to 524,288 GiB (512 TiB).</p>
   *          <p>
   *             <b>FSx for Windows File Server file systems</b> - The amount
   *             of storage capacity that you can configure depends on the value that you set for
   *                 <code>StorageType</code> as follows:</p>
   *          <ul>
   *             <li>
   *                <p>For SSD storage, valid values are 32 GiB-65,536 GiB (64 TiB).</p>
   *             </li>
   *             <li>
   *                <p>For HDD storage, valid values are 2000 GiB-65,536 GiB (64 TiB).</p>
   *             </li>
   *          </ul>
   */
  StorageCapacity: number | undefined;

  /**
   * <p>Sets the storage type for the file system that you're creating. Valid values are
   *                 <code>SSD</code> and <code>HDD</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Set to <code>SSD</code> to use solid state drive storage. SSD is supported on all Windows,
   *                     Lustre, ONTAP, and OpenZFS deployment types.</p>
   *             </li>
   *             <li>
   *                <p>Set to <code>HDD</code> to use hard disk drive storage.
   *                 HDD is supported on <code>SINGLE_AZ_2</code> and <code>MULTI_AZ_1</code> Windows file system deployment types,
   *                 and on <code>PERSISTENT_1</code> Lustre file system deployment types.
   *                 </p>
   *             </li>
   *          </ul>
   *          <p>Default value is <code>SSD</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/optimize-fsx-costs.html#storage-type-options"> Storage
   *                 type options</a> in the <i>FSx for Windows File Server User
   *                 Guide</i> and <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html#storage-options">Multiple storage
   *                 options</a> in the <i>FSx for Lustre User
   *             Guide</i>. </p>
   */
  StorageType?: StorageType | string;

  /**
   * <p>Specifies the IDs of the subnets that the file system will be accessible from. For
   *             Windows and ONTAP <code>MULTI_AZ_1</code> deployment types,provide exactly two subnet
   *             IDs, one for the preferred file server and one for the standby file server. You specify
   *             one of these subnets as the preferred subnet using the <code>WindowsConfiguration >
   *                 PreferredSubnetID</code> or <code>OntapConfiguration > PreferredSubnetID</code>
   *             properties. For more information about Multi-AZ file system configuration, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html">
   *                 Availability and durability: Single-AZ and Multi-AZ file systems</a> in the
   *                 <i>Amazon FSx for Windows User Guide</i> and <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html">
   *                 Availability and durability</a> in the <i>Amazon FSx for ONTAP User
   *                 Guide</i>.</p>
   *          <p>For Windows <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> and all Lustre
   *             deployment types, provide exactly one subnet ID.
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
   * <p>The tags to apply to the file system that's being created. The key value of the
   *                 <code>Name</code> tag appears in the console as the file system name.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *              Amazon FSx file systems, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon FSx for Lustre <code>PERSISTENT_1</code>
   *                 and <code>PERSISTENT_2</code> deployment types only.</p>
   *                <p>
   *                   <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using
   *                     the Amazon FSx service KMS key for your account.</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for NetApp ONTAP</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for OpenZFS</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for Windows File Server</p>
   *             </li>
   *          </ul>
   *          <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used.
   *             For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Microsoft Windows configuration for the file system that's being created. </p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * <p>The Lustre configuration for the file system being created.</p>
   *          <note>
   *             <p>The following parameters are not supported for file systems with the <code>Persistent_2</code>
   *             deployment type. Instead, use <code>CreateDataRepositoryAssociation</code>
   *             to create a data repository association to link your Lustre file system to a data repository.</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>AutoImportPolicy</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>ExportPath</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>ImportedChunkSize</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>ImportPath</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </note>
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration;

  /**
   * <p>The ONTAP configuration properties of the FSx for ONTAP file system that you
   *             are creating.</p>
   */
  OntapConfiguration?: CreateFileSystemOntapConfiguration;

  /**
   * <p>(Optional) For FSx for Lustre file systems, sets the Lustre version for the
   *             file system that you're creating. Valid values are <code>2.10</code> and
   *                 <code>2.12</code>:</p>
   *          <ul>
   *             <li>
   *                <p>2.10 is supported by the Scratch and Persistent_1 Lustre deployment types.</p>
   *             </li>
   *             <li>
   *                <p>2.12 is supported by all Lustre deployment types. <code>2.12</code> is
   *                 required when setting FSx for Lustre <code>DeploymentType</code> to
   *                 <code>PERSISTENT_2</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default value = <code>2.10</code>, except when <code>DeploymentType</code> is set to
   *             <code>PERSISTENT_2</code>, then the default is <code>2.12</code>.</p>
   *          <note>
   *             <p>If you set <code>FileSystemTypeVersion</code> to <code>2.10</code> for a
   *             <code>PERSISTENT_2</code> Lustre deployment type, the <code>CreateFileSystem</code>
   *             operation fails.</p>
   *          </note>
   */
  FileSystemTypeVersion?: string;

  /**
   * <p>The OpenZFS configuration for the file system that's being created.</p>
   */
  OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
}

/**
 * <p>The path provided for data repository export isn't valid.</p>
 */
export class InvalidExportPath extends __BaseException {
  readonly name: "InvalidExportPath" = "InvalidExportPath";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportPath, __BaseException>) {
    super({
      name: "InvalidExportPath",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportPath.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The path provided for data repository import isn't valid.</p>
 */
export class InvalidImportPath extends __BaseException {
  readonly name: "InvalidImportPath" = "InvalidImportPath";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidImportPath, __BaseException>) {
    super({
      name: "InvalidImportPath",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidImportPath.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A file system configuration is required for this operation.</p>
 */
export class MissingFileSystemConfiguration extends __BaseException {
  readonly name: "MissingFileSystemConfiguration" = "MissingFileSystemConfiguration";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingFileSystemConfiguration, __BaseException>) {
    super({
      name: "MissingFileSystemConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingFileSystemConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request object for the <code>CreateFileSystemFromBackup</code>
 *             operation.</p>
 */
export interface CreateFileSystemFromBackupRequest {
  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *                 Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Specifies the IDs of the subnets that the file system will be accessible from. For Windows <code>MULTI_AZ_1</code>
   *             file system deployment types, provide exactly two subnet IDs, one for the preferred file server
   *             and one for the standby file server. You specify one of these subnets as the preferred subnet
   *             using the <code>WindowsConfiguration > PreferredSubnetID</code> property.</p>
   *          <p>Windows <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> file system deployment
   *             types, Lustre file systems, and OpenZFS file systems provide exactly one subnet ID. The
   *             file server is launched in that subnet's Availability Zone.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of IDs for the security groups that apply to the specified network interfaces
   *             created for file system access. These security groups apply to all network interfaces.
   *             This value isn't returned in later <code>DescribeFileSystem</code> requests.</p>
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
   * <p>The Lustre configuration for the file system being created.</p>
   *          <note>
   *             <p>The following parameters are not supported for file systems with the <code>Persistent_2</code>
   *             deployment type. Instead, use <code>CreateDataRepositoryAssociation</code>
   *             to create a data repository association to link your Lustre file system to a data repository.</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>AutoImportPolicy</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>ExportPath</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>ImportedChunkSize</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>ImportPath</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </note>
   */
  LustreConfiguration?: CreateFileSystemLustreConfiguration;

  /**
   * <p>Sets the storage type for the Windows or OpenZFS file system that you're creating from
   *             a backup. Valid values are <code>SSD</code> and <code>HDD</code>.</p>
   *          <ul>
   *             <li>
   *                <p>Set to <code>SSD</code> to use solid state drive storage. SSD is supported on all Windows and OpenZFS
   *                     deployment types.</p>
   *             </li>
   *             <li>
   *                <p>Set to <code>HDD</code> to use hard disk drive storage.
   *                     HDD is supported on <code>SINGLE_AZ_2</code> and <code>MULTI_AZ_1</code> FSx for Windows File Server file system deployment types.</p>
   *             </li>
   *          </ul>
   *          <p> The default value is <code>SSD</code>. </p>
   *          <note>
   *             <p>HDD and SSD storage types have different minimum storage capacity requirements.
   *             A restored file system's storage capacity is tied to the file system that was backed up.
   *             You can create a file system that uses HDD storage from a backup of a file system that
   *             used SSD storage if the original SSD file system had a storage capacity of at least 2000 GiB.</p>
   *          </note>
   */
  StorageType?: StorageType | string;

  /**
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *              Amazon FSx file systems, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon FSx for Lustre <code>PERSISTENT_1</code>
   *                 and <code>PERSISTENT_2</code> deployment types only.</p>
   *                <p>
   *                   <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using
   *                     the Amazon FSx service KMS key for your account.</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for NetApp ONTAP</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for OpenZFS</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for Windows File Server</p>
   *             </li>
   *          </ul>
   *          <p>If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed KMS key for your account is used.
   *             For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Sets the version for the Amazon FSx for Lustre file system that you're
   *             creating from a backup. Valid values are <code>2.10</code> and <code>2.12</code>.</p>
   *          <p>You don't need to specify <code>FileSystemTypeVersion</code> because it will
   *             be applied using the backup's <code>FileSystemTypeVersion</code> setting.
   *             If you choose to specify <code>FileSystemTypeVersion</code> when creating from backup, the
   *             value must match the backup's <code>FileSystemTypeVersion</code> setting.</p>
   */
  FileSystemTypeVersion?: string;

  /**
   * <p>The OpenZFS configuration for the file system that's being created. </p>
   */
  OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;

  /**
   * <p>Sets the storage capacity of the OpenZFS file system that you're creating
   *             from a backup, in gibibytes (GiB). Valid values are from 64 GiB up to 524,288 GiB
   *             (512 TiB). However, the value that you specify must be equal to or greater than the
   *             backup's storage capacity value. If you don't use the <code>StorageCapacity</code>
   *             parameter, the default is the backup's <code>StorageCapacity</code> value.</p>
   *          <p>If used to create a file system other than OpenZFS, you must provide a value
   *             that matches the backup's <code>StorageCapacity</code> value. If you provide any
   *             other value, Amazon FSx responds with a 400 Bad Request. </p>
   */
  StorageCapacity?: number;
}

export interface CreateSnapshotRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The name of the snapshot. </p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the volume that you are taking a snapshot of.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
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
   * <p>The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to
   *             a self-managed (including on-premises) Microsoft Active Directory (AD)
   *             directory. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html">
   *                 Using Amazon FSx with your self-managed Microsoft Active Directory</a> or
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing SVMs</a>.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
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
   *          <ul>
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
 * <p>Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.</p>
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
   *          <ul>
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

export interface CreateStorageVirtualMachineResponse {
  /**
   * <p>Returned after a successful <code>CreateStorageVirtualMachine</code> operation; describes the SVM just created.</p>
   */
  StorageVirtualMachine?: StorageVirtualMachine;
}

export enum InputOntapVolumeType {
  DP = "DP",
  RW = "RW",
}

/**
 * <p>Specifies the configuration of the ONTAP volume that you are creating.</p>
 */
export interface CreateOntapVolumeConfiguration {
  /**
   * <p>Specifies the location in the SVM's namespace where the volume is mounted.
   *             The <code>JunctionPath</code> must have a leading forward slash, such as <code>/vol3</code>.</p>
   */
  JunctionPath?: string;

  /**
   * <p>Specifies the security style for the volume. If a volume's security style is not specified,
   *             it is automatically set to the root volume's security style. The security style determines the type of permissions
   *             that FSx for ONTAP uses to control data access. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-security-style">Volume security style</a>
   *             in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.
   *             Specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNIX</code> if the file system is managed by a UNIX
   *                 administrator, the majority of users are NFS clients, and an application
   *                 accessing the data uses a UNIX user as the service account.
   *                </p>
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
  StorageEfficiencyEnabled?: boolean;

  /**
   * <p>Specifies the ONTAP SVM in which to create the volume.</p>
   */
  StorageVirtualMachineId: string | undefined;

  /**
   * <p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent
   *             tiering automatically transitions a volume's data between the file system's primary storage and capacity
   *             pool storage based on your access patterns.</p>
   *          <p>Valid tiering policies are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p>
   *             </li>
   *          </ul>
   */
  TieringPolicy?: TieringPolicy;

  /**
   * <p>Specifies the type of volume you are creating. Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RW</code> specifies a read/write volume. <code>RW</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DP</code> specifies a data-protection volume. A <code>DP</code> volume
   *                 is read-only and can be used as the destination of a NetApp SnapMirror relationship.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-types">Volume types</a>
   *             in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>
   */
  OntapVolumeType?: InputOntapVolumeType | string;

  /**
   * <p>Specifies the snapshot policy for the volume. There are three built-in snapshot policies:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code>: This is the default policy. A maximum of six hourly snapshots taken five minutes past
   *             the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after
   *             midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-1weekly</code>: This policy is the same as the <code>default</code> policy except
   *             that it only retains one snapshot from the weekly schedule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>: This policy does not take any snapshots. This policy can be assigned to volumes to
   *             prevent automatic snapshots from being taken.</p>
   *             </li>
   *          </ul>
   *          <p>You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies">Snapshot policies</a>
   *             in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>
   */
  SnapshotPolicy?: string;

  /**
   * <p>A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to
   *             false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups
   *             where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the
   *             specified tags are copied to backups. If you specify one or more tags when creating a user-initiated
   *             backup, no tags are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;
}

/**
 * <p>The snapshot configuration to use when creating an OpenZFS volume from a snapshot. </p>
 */
export interface CreateOpenZFSOriginSnapshotConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  SnapshotARN: string | undefined;

  /**
   * <p>The strategy used when copying data from the snapshot to the new volume. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLONE</code> - The new volume references the data in the origin
   *                     snapshot. Cloning a snapshot is faster than copying data from the snapshot to a
   *                     new volume and doesn't consume disk throughput. However, the origin snapshot
   *                     can't be deleted if there is a volume using its copied data. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FULL_COPY</code> - Copies all data from the snapshot to the new volume.
   *                 </p>
   *             </li>
   *          </ul>
   */
  CopyStrategy: OpenZFSCopyStrategy | string | undefined;
}

/**
 * <p>Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.</p>
 */
export interface CreateOpenZFSVolumeConfiguration {
  /**
   * <p>The ID of the volume to use as the parent volume of the volume that you are creating.</p>
   */
  ParentVolumeId: string | undefined;

  /**
   * <p>Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. Setting
   *             <code>StorageCapacityReservationGiB</code> guarantees that the specified amount of storage space
   *             on the parent volume will always be available for the volume.
   *             You can't reserve more storage than the parent volume has. To <i>not</i> specify a storage capacity
   *             reservation, set this to <code>0</code> or <code>-1</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties">Volume properties</a>
   *             in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  StorageCapacityReservationGiB?: number;

  /**
   * <p>Sets the maximum storage size in gibibytes (GiB) for the volume. You can specify
   *             a quota that is larger than the storage on the parent volume. A volume quota limits
   *             the amount of storage that the volume can consume to the configured amount, but does not
   *             guarantee the space will be available on the parent volume. To guarantee quota space, you must also set
   *             <code>StorageCapacityReservationGiB</code>. To <i>not</i> specify a storage capacity quota, set this to <code>-1</code>.
   *         </p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties">Volume properties</a>
   *             in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  StorageCapacityQuotaGiB?: number;

  /**
   * <p>Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). Valid values are 4, 8,
   *             16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB.
   *             We recommend using the default setting for the majority of use cases.
   *             Generally, workloads that write in fixed small or large record sizes
   *             may benefit from setting a custom record size, like database workloads
   *             (small record size) or media streaming workloads (large record size).
   *             For additional guidance on when
   *             to set a custom record size, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#record-size-performance">
   *             ZFS Record size</a> in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  RecordSizeKiB?: number;

  /**
   * <p>Specifies the method used to compress the data on the volume. The compression
   *             type is <code>NONE</code> by default.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Doesn't compress the data on the volume.
   *                     <code>NONE</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZSTD</code> - Compresses the data in the volume using the Zstandard
   *                     (ZSTD) compression algorithm. ZSTD compression provides a higher level of
   *                     data compression and higher read throughput performance than LZ4 compression.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LZ4</code> - Compresses the data in the volume using the LZ4
   *                     compression algorithm. LZ4 compression provides a lower level of compression
   *                     and higher write throughput performance than ZSTD compression.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about volume compression types and the performance of your Amazon FSx for OpenZFS file system,
   *             see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs">
   *                 Tips for maximizing performance</a> File system and volume settings in the <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  DataCompressionType?: OpenZFSDataCompressionType | string;

  /**
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code>, and you specify one or more tags, only the specified tags
   *             are copied to snapshots. If you specify one or more tags when creating the snapshot, no
   *             tags are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToSnapshots?: boolean;

  /**
   * <p>The configuration object that specifies the snapshot to use as the origin of the data
   *             for the volume.</p>
   */
  OriginSnapshot?: CreateOpenZFSOriginSnapshotConfiguration;

  /**
   * <p>A Boolean value indicating whether the volume is read-only.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>The configuration object for mounting a Network File System (NFS) file system.</p>
   */
  NfsExports?: OpenZFSNfsExport[];

  /**
   * <p>An object specifying how much storage users or groups can use on the volume.</p>
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[];
}

export interface CreateVolumeRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Specifies the type of volume to create; <code>ONTAP</code> and <code>OPENZFS</code> are
   *             the only valid volume types.</p>
   */
  VolumeType: VolumeType | string | undefined;

  /**
   * <p>Specifies the name of the volume that you're creating.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the configuration to use when creating the ONTAP volume.</p>
   */
  OntapConfiguration?: CreateOntapVolumeConfiguration;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the configuration to use when creating the OpenZFS volume.</p>
   */
  OpenZFSConfiguration?: CreateOpenZFSVolumeConfiguration;
}

/**
 * <p>A volume configuration is required for this operation.</p>
 */
export class MissingVolumeConfiguration extends __BaseException {
  readonly name: "MissingVolumeConfiguration" = "MissingVolumeConfiguration";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingVolumeConfiguration, __BaseException>) {
    super({
      name: "MissingVolumeConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingVolumeConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 */
export class StorageVirtualMachineNotFound extends __BaseException {
  readonly name: "StorageVirtualMachineNotFound" = "StorageVirtualMachineNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageVirtualMachineNotFound, __BaseException>) {
    super({
      name: "StorageVirtualMachineNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageVirtualMachineNotFound.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateVolumeFromBackupRequest {
  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
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

/**
 * <p>You can't delete a backup while it's being copied.</p>
 */
export class BackupBeingCopied extends __BaseException {
  readonly name: "BackupBeingCopied" = "BackupBeingCopied";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  BackupId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupBeingCopied, __BaseException>) {
    super({
      name: "BackupBeingCopied",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupBeingCopied.prototype);
    this.Message = opts.Message;
    this.BackupId = opts.BackupId;
  }
}

/**
 * <p>You can't delete a backup while it's being used to restore a file
 *             system.</p>
 */
export class BackupRestoring extends __BaseException {
  readonly name: "BackupRestoring" = "BackupRestoring";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID of a file system being restored from the backup.</p>
   */
  FileSystemId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupRestoring, __BaseException>) {
    super({
      name: "BackupRestoring",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupRestoring.prototype);
    this.Message = opts.Message;
    this.FileSystemId = opts.FileSystemId;
  }
}

/**
 * <p>The request object for the <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupRequest {
  /**
   * <p>The ID of the backup that you want to delete.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This parameter is automatically filled on your behalf when using
   *             the CLI or SDK.</p>
   */
  ClientRequestToken?: string;
}

/**
 * <p>The response object for the <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupResponse {
  /**
   * <p>The ID of the backup that was deleted.</p>
   */
  BackupId?: string;

  /**
   * <p>The lifecycle status of the backup. If the <code>DeleteBackup</code> operation is
   *             successful, the status is <code>DELETED</code>.</p>
   */
  Lifecycle?: BackupLifecycle | string;
}

/**
 * <p>No data repository associations were found based upon the supplied parameters.</p>
 */
export class DataRepositoryAssociationNotFound extends __BaseException {
  readonly name: "DataRepositoryAssociationNotFound" = "DataRepositoryAssociationNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataRepositoryAssociationNotFound, __BaseException>) {
    super({
      name: "DataRepositoryAssociationNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataRepositoryAssociationNotFound.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteDataRepositoryAssociationRequest {
  /**
   * <p>The ID of the data repository association that you want to delete.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Set to <code>true</code> to delete the data in the file system that corresponds
   *             to the data repository association.</p>
   */
  DeleteDataInFileSystem?: boolean;
}

export interface DeleteDataRepositoryAssociationResponse {
  /**
   * <p>The ID of the data repository association being deleted.</p>
   */
  AssociationId?: string;

  /**
   * <p>Describes the lifecycle state of the data repository association being deleted.</p>
   */
  Lifecycle?: DataRepositoryLifecycle | string;

  /**
   * <p>Indicates whether data in the file system that corresponds to the data
   *             repository association is being deleted. Default is <code>false</code>.</p>
   */
  DeleteDataInFileSystem?: boolean;
}

export interface DeleteFileCacheRequest {
  /**
   * <p>The ID of the cache that's being deleted.</p>
   */
  FileCacheId: string | undefined;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;
}

export interface DeleteFileCacheResponse {
  /**
   * <p>The ID of the cache that's being deleted.</p>
   */
  FileCacheId?: string;

  /**
   * <p>The cache lifecycle for the deletion request. If the
   *             <code>DeleteFileCache</code> operation is successful, this status is
   *             <code>DELETING</code>.</p>
   */
  Lifecycle?: FileCacheLifecycle | string;
}

/**
 * <p>No caches were found based upon supplied parameters.</p>
 */
export class FileCacheNotFound extends __BaseException {
  readonly name: "FileCacheNotFound" = "FileCacheNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileCacheNotFound, __BaseException>) {
    super({
      name: "FileCacheNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileCacheNotFound.prototype);
    this.Message = opts.Message;
  }
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
   *          <note>
   *             <p>The <code>fsx:CreateBackup</code> permission is required if you set <code>SkipFinalBackup</code> to <code>false</code> in order to delete the file system and take a final backup.</p>
   *          </note>
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

export enum DeleteFileSystemOpenZFSOption {
  DELETE_CHILD_VOLUMES_AND_SNAPSHOTS = "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS",
}

/**
 * <p>The configuration object for the Amazon FSx for OpenZFS file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemOpenZFSConfiguration {
  /**
   * <p>By default, Amazon FSx for OpenZFS takes a final backup on your behalf when
   *             the <code>DeleteFileSystem</code> operation is invoked. Doing this helps protect you
   *             from data loss, and we highly recommend taking the final backup. If you want to skip
   *             taking a final backup, set this value to <code>true</code>.</p>
   */
  SkipFinalBackup?: boolean;

  /**
   * <p>A list of tags to apply to the file system's final backup.</p>
   */
  FinalBackupTags?: Tag[];

  /**
   * <p>To delete a file system if there are child volumes present below the root volume,
   *             use the string <code>DELETE_CHILD_VOLUMES_AND_SNAPSHOTS</code>. If your file system
   *             has child volumes and you don't use this option, the delete request will fail.</p>
   */
  Options?: (DeleteFileSystemOpenZFSOption | string)[];
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

/**
 * <p>The request object for <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemRequest {
  /**
   * <p>The ID of the file system that you want to delete.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This token is automatically filled on your behalf when using the
   *                 Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
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

  /**
   * <p>The configuration object for the OpenZFS file system used in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  OpenZFSConfiguration?: DeleteFileSystemOpenZFSConfiguration;
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

/**
 * <p>The response object for the Amazon FSx for OpenZFS file system that's being
 *             deleted in the <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemOpenZFSResponse {
  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  FinalBackupId?: string;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  FinalBackupTags?: Tag[];
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

/**
 * <p>The response object for the <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemResponse {
  /**
   * <p>The ID of the file system that's being deleted.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The file system lifecycle for the deletion request. If the
   *                 <code>DeleteFileSystem</code> operation is successful, this status is
   *                 <code>DELETING</code>.</p>
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

  /**
   * <p>The response object for the OpenZFS file system that's being deleted in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  OpenZFSResponse?: DeleteFileSystemOpenZFSResponse;
}

export interface DeleteSnapshotRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the snapshot that you want to delete.</p>
   */
  SnapshotId: string | undefined;
}

export interface DeleteSnapshotResponse {
  /**
   * <p>The ID of the deleted snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The lifecycle status of the snapshot. If the <code>DeleteSnapshot</code> operation is
   *             successful, this status is <code>DELETING</code>.</p>
   */
  Lifecycle?: SnapshotLifecycle | string;
}

/**
 * <p>No Amazon FSx snapshots were found based on the supplied parameters.</p>
 */
export class SnapshotNotFound extends __BaseException {
  readonly name: "SnapshotNotFound" = "SnapshotNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotNotFound, __BaseException>) {
    super({
      name: "SnapshotNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotNotFound.prototype);
    this.Message = opts.Message;
  }
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

export enum DeleteOpenZFSVolumeOption {
  DELETE_CHILD_VOLUMES_AND_SNAPSHOTS = "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS",
}

/**
 * <p>A value that specifies whether to delete all child volumes and snapshots. </p>
 */
export interface DeleteVolumeOpenZFSConfiguration {
  /**
   * <p>To delete the volume's child volumes, snapshots, and clones, use the string
   *               <code>DELETE_CHILD_VOLUMES_AND_SNAPSHOTS</code>.</p>
   */
  Options?: (DeleteOpenZFSVolumeOption | string)[];
}

export interface DeleteVolumeRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the volume that you are deleting.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>For Amazon FSx for ONTAP volumes, specify whether to take a final backup of
   *             the volume and apply tags to the backup. To apply tags to the backup, you must have the
   *                 <code>fsx:TagResource</code> permission.</p>
   */
  OntapConfiguration?: DeleteVolumeOntapConfiguration;

  /**
   * <p>For Amazon FSx for OpenZFS volumes, specify whether to delete all child
   *             volumes and snapshots.</p>
   */
  OpenZFSConfiguration?: DeleteVolumeOpenZFSConfiguration;
}

/**
 * <p>The response object for the Amazon FSx for NetApp ONTAP volume being deleted
 *             in the <code>DeleteVolume</code> operation.</p>
 */
export interface DeleteVolumeOntapResponse {
  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  FinalBackupId?: string;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  FinalBackupTags?: Tag[];
}

export interface DeleteVolumeResponse {
  /**
   * <p>The ID of the volume that's being deleted.</p>
   */
  VolumeId?: string;

  /**
   * <p>The lifecycle state of the volume being deleted. If the <code>DeleteVolume</code>
   *             operation is successful, this value is <code>DELETING</code>.</p>
   */
  Lifecycle?: VolumeLifecycle | string;

  /**
   * <p>Returned after a <code>DeleteVolume</code> request, showing the status of the delete
   *             request.</p>
   */
  OntapResponse?: DeleteVolumeOntapResponse;
}

export enum FilterName {
  BACKUP_TYPE = "backup-type",
  DATA_REPOSITORY_TYPE = "data-repository-type",
  FILE_CACHE_ID = "file-cache-id",
  FILE_CACHE_TYPE = "file-cache-type",
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

/**
 * <p>The request object for the <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsRequest {
  /**
   * <p>The IDs of the backups that you want to retrieve. This parameter value overrides any
   *             filters. If any IDs aren't found, a <code>BackupNotFound</code> error occurs.</p>
   */
  BackupIds?: string[];

  /**
   * <p>The filters structure. The supported names are <code>file-system-id</code>,
   *                 <code>backup-type</code>, <code>file-system-type</code>, and
   *             <code>volume-id</code>.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Maximum number of backups to return in the response. This parameter value must be
   *             greater than 0. The number of items that Amazon FSx returns is the minimum of
   *             the <code>MaxResults</code> parameter specified in the request and the service's
   *             internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque pagination token returned from a previous <code>DescribeBackups</code>
   *             operation. If a token is present, the operation continues the list from where the
   *             returning call left off.</p>
   */
  NextToken?: string;
}

export interface DescribeDataRepositoryAssociationsRequest {
  /**
   * <p>IDs of the data repository associations whose descriptions you want to retrieve
   *             (String).</p>
   */
  AssociationIds?: string[];

  /**
   * <p>A list of <code>Filter</code> elements.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of resources to return in the response. This value must be
   *             an integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

export interface DescribeDataRepositoryAssociationsResponse {
  /**
   * <p>An array of one or more data repository association descriptions.</p>
   */
  Associations?: DataRepositoryAssociation[];

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * <p>You have filtered the response to a data repository type that is not supported.</p>
 */
export class InvalidDataRepositoryType extends __BaseException {
  readonly name: "InvalidDataRepositoryType" = "InvalidDataRepositoryType";
  readonly $fault: "client" = "client";
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDataRepositoryType, __BaseException>) {
    super({
      name: "InvalidDataRepositoryType",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDataRepositoryType.prototype);
    this.Message = opts.Message;
  }
}

export enum DataRepositoryTaskFilterName {
  DATA_REPO_ASSOCIATION_ID = "data-repository-association-id",
  FILE_CACHE_ID = "file-cache-id",
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
   *          <ul>
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

export interface DescribeFileCachesRequest {
  /**
   * <p>IDs of the caches whose descriptions you want to retrieve (String).</p>
   */
  FileCacheIds?: string[];

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

/**
 * <p>A description of a specific Amazon File Cache resource, which is
 *             a response object from the <code>DescribeFileCaches</code> operation.</p>
 */
export interface FileCache {
  /**
   * <p>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon
   *             Resource Names (ARNs) for resources.</p>
   */
  OwnerId?: string;

  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The system-generated, unique ID of the cache.</p>
   */
  FileCacheId?: string;

  /**
   * <p>The type of cache, which must be <code>LUSTRE</code>.</p>
   */
  FileCacheType?: FileCacheType | string;

  /**
   * <p>The Lustre version of the cache, which must be <code>2.12</code>.</p>
   */
  FileCacheTypeVersion?: string;

  /**
   * <p>The lifecycle status of the cache. The following are the possible values and
   *             what they mean:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The cache is in a healthy state, and is reachable and available for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - The new cache is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - An existing cache is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The cache is undergoing a customer-initiated update.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - An existing cache has experienced an unrecoverable failure.
   *                 When creating a new cache, the cache was unable to be created.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: FileCacheLifecycle | string;

  /**
   * <p>A structure providing details of any failures that occurred.</p>
   */
  FailureDetails?: FileCacheFailureDetails;

  /**
   * <p>The storage capacity of the cache in gibibytes (GiB).</p>
   */
  StorageCapacity?: number;

  /**
   * <p>The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and
   *                 subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnet IDs that the cache will be accessible from. You can specify only
   *             one subnet ID in a call to the <code>CreateFileCache</code> operation.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A list of network interface IDs.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>The Domain Name System (DNS) name for the cache.</p>
   */
  DNSName?: string;

  /**
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *             an Amazon File Cache. If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed
   *             KMS key for your account is used. For more information,
   *             see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The configuration for the Amazon File Cache resource.</p>
   */
  LustreConfiguration?: FileCacheLustreConfiguration;

  /**
   * <p>A list of IDs of data repository associations that are associated with this cache.</p>
   */
  DataRepositoryAssociationIds?: string[];
}

export interface DescribeFileCachesResponse {
  /**
   * <p>The response object for the <code>DescribeFileCaches</code> operation.</p>
   */
  FileCaches?: FileCache[];

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
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
   * <p>Opaque pagination token returned from a previous <code>DescribeFileSystems</code>
   *             operation (String). If a token present, the operation continues the list from where the
   *             returning call left off.</p>
   */
  NextToken?: string;
}

export enum SnapshotFilterName {
  FILE_SYSTEM_ID = "file-system-id",
  VOLUME_ID = "volume-id",
}

/**
 * <p>A filter used to restrict the results of <code>DescribeSnapshots</code> calls. You can
 *             use multiple filters to return results that meet all applied filter requirements.</p>
 */
export interface SnapshotFilter {
  /**
   * <p>The name of the filter to use. You can filter by the <code>file-system-id</code> or by
   *                 <code>volume-id</code>.</p>
   */
  Name?: SnapshotFilterName | string;

  /**
   * <p>The <code>file-system-id</code> or <code>volume-id</code> that you are filtering
   *             for.</p>
   */
  Values?: string[];
}

export interface DescribeSnapshotsRequest {
  /**
   * <p>The IDs of the snapshots that you want to retrieve. This parameter value overrides any
   *             filters. If any IDs aren't found, a <code>SnapshotNotFound</code> error occurs.</p>
   */
  SnapshotIds?: string[];

  /**
   * <p>The filters structure. The supported names are <code>file-system-id</code> or
   *                 <code>volume-id</code>.</p>
   */
  Filters?: SnapshotFilter[];

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

export enum VolumeFilterName {
  FILE_SYSTEM_ID = "file-system-id",
  STORAGE_VIRTUAL_MACHINE_ID = "storage-virtual-machine-id",
}

/**
 * <p>A filter used to restrict the results of describe calls for Amazon FSx for
 *             NetApp ONTAP or Amazon FSx for OpenZFS volumes. You can use multiple filters to
 *             return results that meet all applied filter requirements.</p>
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

export interface DescribeVolumesRequest {
  /**
   * <p>The IDs of the volumes whose descriptions you want to retrieve.</p>
   */
  VolumeIds?: string[];

  /**
   * <p>Enter a filter <code>Name</code> and <code>Values</code> pair to view a select set of
   *             volumes.</p>
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

/**
 * <p>The resource specified for the tagging operation is not a resource type owned by
 *             Amazon FSx. Use the API of the relevant service to perform the operation. </p>
 */
export class NotServiceResourceError extends __BaseException {
  readonly name: "NotServiceResourceError" = "NotServiceResourceError";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon Resource Name (ARN) of the non-Amazon FSx resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotServiceResourceError, __BaseException>) {
    super({
      name: "NotServiceResourceError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotServiceResourceError.prototype);
    this.ResourceARN = opts.ResourceARN;
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource specified does not support tagging. </p>
 */
export class ResourceDoesNotSupportTagging extends __BaseException {
  readonly name: "ResourceDoesNotSupportTagging" = "ResourceDoesNotSupportTagging";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that doesn't support
   *             tagging.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDoesNotSupportTagging, __BaseException>) {
    super({
      name: "ResourceDoesNotSupportTagging",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDoesNotSupportTagging.prototype);
    this.ResourceARN = opts.ResourceARN;
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
 */
export class ResourceNotFound extends __BaseException {
  readonly name: "ResourceNotFound" = "ResourceNotFound";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ARN of the resource that can't be found.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.ResourceARN = opts.ResourceARN;
    this.Message = opts.Message;
  }
}

export interface ReleaseFileSystemNfsV3LocksRequest {
  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;
}

export enum RestoreOpenZFSVolumeOption {
  DELETE_CLONED_VOLUMES = "DELETE_CLONED_VOLUMES",
  DELETE_INTERMEDIATE_SNAPSHOTS = "DELETE_INTERMEDIATE_SNAPSHOTS",
}

export interface RestoreVolumeFromSnapshotRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the volume that you are restoring.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The ID of the source snapshot. Specifies the snapshot that you are restoring
   *             from.</p>
   */
  SnapshotId: string | undefined;

  /**
   * <p>The settings used when restoring the specified volume from snapshot.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE_INTERMEDIATE_SNAPSHOTS</code> - Deletes snapshots between the
   *                     current state and the specified snapshot. If there are intermediate snapshots
   *                     and this option isn't used, <code>RestoreVolumeFromSnapshot</code> fails.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_CLONED_VOLUMES</code> - Deletes any dependent clone volumes
   *                     created from intermediate snapshots. If there are any dependent clone volumes and this
   *                     option isn't used, <code>RestoreVolumeFromSnapshot</code> fails.</p>
   *             </li>
   *          </ul>
   */
  Options?: (RestoreOpenZFSVolumeOption | string)[];
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

/**
 * <p>The response object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceResponse {}

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

/**
 * <p>The response object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceResponse {}

export interface UpdateDataRepositoryAssociationRequest {
  /**
   * <p>The ID of the data repository association that you are updating.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>For files imported from a data repository, this value determines the stripe count and
   *             maximum amount of data per file (in MiB) stored on a single physical disk. The maximum
   *             number of disks that a single file can be striped across is limited by the total number
   *             of disks that make up the file system.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * <p>The configuration for an Amazon S3 data repository linked to an
   *             Amazon FSx Lustre file system with a data repository association.
   *             The configuration defines which file events (new, changed, or
   *             deleted files or directories) are automatically imported from
   *             the linked data repository to the file system or automatically
   *             exported from the file system to the data repository.</p>
   */
  S3?: S3DataRepositoryConfiguration;
}

export interface UpdateDataRepositoryAssociationResponse {
  /**
   * <p>The response object returned after the data repository association is updated.</p>
   */
  Association?: DataRepositoryAssociation;
}

/**
 * <p>The configuration update for an Amazon File Cache resource.</p>
 */
export interface UpdateFileCacheLustreConfiguration {
  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;
}

export interface UpdateFileCacheRequest {
  /**
   * <p>The ID of the cache that you are updating.</p>
   */
  FileCacheId: string | undefined;

  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The configuration updates for an Amazon File Cache resource.</p>
   */
  LustreConfiguration?: UpdateFileCacheLustreConfiguration;
}

export interface UpdateFileCacheResponse {
  /**
   * <p>A description of the cache that was updated.</p>
   */
  FileCache?: FileCache;
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
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p> (Optional) When you create your file system, your existing S3 objects appear as file and directory listings.
   *             Use this property to choose how Amazon FSx keeps your file and directory listing up to date
   *             as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code> can
   *             have the following values:</p>
   *          <ul>
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
   *                 existing objects that are changed in the S3 bucket after you choose this option.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_CHANGED_DELETED</code> - AutoImport is on. Amazon FSx automatically
   *                 imports file and directory listings of any new objects added to the S3 bucket, any
   *                 existing objects that are changed in the S3 bucket, and any objects that were deleted
   *                 in the S3 bucket.</p>
   *             </li>
   *          </ul>
   *          <p>The <code>AutoImportPolicy</code> parameter is not supported for Lustre file systems with
   *             the <code>Persistent_2</code> deployment type. Instead, use
   *             to update a data repository association on your <code>Persistent_2</code> file system.</p>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * <p>Sets the data compression configuration for the file system. <code>DataCompressionType</code>
   *             can have the following values:</p>
   *          <ul>
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
   *          <p>If you don't use <code>DataCompressionType</code>, the file system retains
   *             its current data compression configuration.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html">Lustre data compression</a>.</p>
   */
  DataCompressionType?: DataCompressionType | string;

  /**
   * <p>The Lustre logging configuration used when updating an Amazon FSx for Lustre
   *             file system. When logging is enabled, Lustre logs error and warning events for
   *             data repositories associated with your file system to Amazon CloudWatch Logs.</p>
   */
  LogConfiguration?: LustreLogCreateConfiguration;

  /**
   * <p>The Lustre root squash configuration used when updating an Amazon FSx for Lustre
   *             file system. When enabled, root squash restricts root-level access from clients that
   *             try to access your file system as a root user.</p>
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration;
}

/**
 * <p>The configuration updates for an Amazon FSx for NetApp ONTAP file system.</p>
 */
export interface UpdateFileSystemOntapConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
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
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP file system. The default is 3 IOPS per GB of storage capacity,
   *             but you can provision additional IOPS per GB of storage. The configuration consists
   *             of an IOPS mode (<code>AUTOMATIC</code> or <code>USER_PROVISIONED</code>), and in
   *             the case of <code>USER_PROVISIONED</code> IOPS, the total number of SSD IOPS provisioned.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * <p>Specifies the throughput of an FSx for NetApp ONTAP file system, measured in megabytes per second
   *             (MBps). Valid values are 128, 256, 512, 1024, 2048, and 4096 MBps.</p>
   */
  ThroughputCapacity?: number;

  /**
   * <p>(Multi-AZ only) A list of IDs of new virtual private cloud (VPC) route tables
   *             to associate (add) with your Amazon FSx for NetApp ONTAP file system.</p>
   */
  AddRouteTableIds?: string[];

  /**
   * <p>(Multi-AZ only) A list of IDs of existing virtual private cloud (VPC)
   *             route tables to disassociate (remove) from your Amazon FSx for NetApp ONTAP file system. You can use
   *             the  API operation to retrieve the
   *             list of VPC route table IDs for a file system.</p>
   */
  RemoveRouteTableIds?: string[];
}

/**
 * <p>The configuration updates for an Amazon FSx for OpenZFS file system.</p>
 */
export interface UpdateFileSystemOpenZFSConfiguration {
  /**
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * <p>A Boolean value indicating whether tags for the file system should be copied to
   *             backups. This value defaults to <code>false</code>. If it's set to <code>true</code>,
   *             all tags for the file system are copied to all automatic and user-initiated backups
   *             where the user doesn't specify tags. If this value is <code>true</code> and you specify
   *             one or more tags, only the specified tags are copied to backups. If you specify one or
   *             more tags when creating a user-initiated backup, no tags are copied from the file
   *             system, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code> and you specify one or more tags, only the specified tags are
   *             copied to snapshots. If you specify one or more tags when creating the snapshot, no tags
   *             are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToVolumes?: boolean;

  /**
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * <p>The throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second  (MB/s). Valid values depend on the DeploymentType you choose, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>SINGLE_AZ_1</code>, valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MB/s.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SINGLE_AZ_2</code>, valid values are 160, 320, 640, 1280, 2560, 3840, 5120, 7680, or 10240 MB/s.</p>
   *             </li>
   *          </ul>
   */
  ThroughputCapacity?: number;

  /**
   * <p>A recurring weekly time, in the format <code>D:HH:MM</code>. </p>
   *          <p>
   *             <code>D</code> is the day of the week, for which 1 represents Monday and 7
   *             represents Sunday. For further details, see <a href="https://en.wikipedia.org/wiki/ISO_week_date">the ISO-8601 spec as described on Wikipedia</a>.</p>
   *          <p>
   *             <code>HH</code> is the zero-padded hour of the day (0-23), and <code>MM</code> is
   *             the zero-padded minute of the hour. </p>
   *          <p>For example, <code>1:05:00</code> specifies maintenance at 5 AM Monday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The
   *             default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per
   *             GB of storage. The configuration consists of the total number of provisioned SSD IOPS
   *             and how the amount was provisioned (by the customer or by the system).</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;
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
   * <p>A list of up to three IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory.</p>
   */
  DnsIps?: string[];
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

/**
 * <p>The request object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemRequest {
  /**
   * <p>The ID of the file system that you are updating.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>A string of up to 64 ASCII characters that Amazon FSx uses to ensure
   *       idempotent updates. This string is automatically filled on your behalf when you use the
   *         Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Use this parameter to increase the storage capacity of an Amazon FSx for Windows
   *       File Server, Amazon FSx for Lustre, or Amazon FSx for NetApp ONTAP file system.
   *       Specifies the storage capacity target value, in GiB, to increase the storage capacity for
   *       the file system that you're updating. </p>
   *          <note>
   *             <p>You can't make a storage capacity increase request if there is an existing storage
   *         capacity increase request in progress.</p>
   *          </note>
   *          <p>For Windows file systems, the storage capacity target value must be at least 10 percent
   *       greater than the current storage capacity value. To increase storage capacity, the file system
   *       must have at least 16 MBps of throughput capacity. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage
   *         capacity</a> in the <i>Amazon FSx for Windows File Server User
   *           Guide</i>.</p>
   *          <p>For Lustre file systems, the storage capacity target value can be the following:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>SCRATCH_2</code>, <code>PERSISTENT_1</code>, and <code>PERSISTENT_2 SSD</code> deployment types, valid values
   *           are in multiples of 2400 GiB. The value must be greater than the current storage capacity.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT HDD</code> file systems, valid values are multiples of 6000 GiB for
   *           12-MBps throughput per TiB file systems and multiples of 1800 GiB for 40-MBps throughput
   *           per TiB file systems. The values must be greater than the current storage capacity.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SCRATCH_1</code> file systems, you can't increase the storage capacity.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput
   *           capacity</a> in the <i>Amazon FSx for Lustre User Guide</i>.</p>
   *          <p>For ONTAP file systems, the storage capacity target value must be at least 10 percent
   *       greater than the current storage capacity value.  For more information, see
   *       <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User
   *           Guide</i>.</p>
   */
  StorageCapacity?: number;

  /**
   * <p>The configuration updates for an Amazon FSx for Windows File Server file
   *       system.</p>
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

  /**
   * <p>The configuration updates for an Amazon FSx for OpenZFS file system.</p>
   */
  OpenZFSConfiguration?: UpdateFileSystemOpenZFSConfiguration;
}

export interface UpdateSnapshotRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The name of the snapshot to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the snapshot that you want to update, in the format
   *                 <code>fsvolsnap-0123456789abcdef0</code>.</p>
   */
  SnapshotId: string | undefined;
}

/**
 * <p>Updates the Microsoft Active Directory (AD) configuration of an SVM joined to an AD.
 *             Please note, account credentials are not returned in the response payload.</p>
 */
export interface UpdateSvmActiveDirectoryConfiguration {
  /**
   * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to a
   *             self-managed Microsoft Active Directory (AD) directory.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
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

export interface UpdateStorageVirtualMachineResponse {
  /**
   * <p>Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.</p>
   */
  StorageVirtualMachine?: StorageVirtualMachine;
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

  /**
   * <p>Specifies the snapshot policy for the volume. There are three built-in snapshot policies:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>default</code>: This is the default policy. A maximum of six hourly snapshots taken five minutes past
   *                 the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after
   *                 midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>default-1weekly</code>: This policy is the same as the <code>default</code> policy except
   *                 that it only retains one snapshot from the weekly schedule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code>: This policy does not take any snapshots. This policy can be assigned to volumes to
   *                 prevent automatic snapshots from being taken.</p>
   *             </li>
   *          </ul>
   *          <p>You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies">Snapshot policies</a>
   *             in the <i>Amazon FSx for NetApp ONTAP User Guide</i>.</p>
   */
  SnapshotPolicy?: string;

  /**
   * <p>A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to
   *             false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups
   *             where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the
   *             specified tags are copied to backups. If you specify one or more tags when creating a user-initiated
   *             backup, no tags are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;
}

/**
 * <p>Used to specify changes to the OpenZFS configuration for the volume
 *             that you are updating.</p>
 */
export interface UpdateOpenZFSVolumeConfiguration {
  /**
   * <p>The amount of storage in gibibytes (GiB) to reserve from the parent volume.
   *             You can't reserve more storage than the parent volume has reserved. You can specify
   *             a value of <code>-1</code> to unset a volume's storage capacity reservation.</p>
   */
  StorageCapacityReservationGiB?: number;

  /**
   * <p>The maximum amount of storage in gibibytes (GiB) that the volume can use from its
   *             parent. You can specify a quota larger than the storage on the parent volume. You
   *             can specify a value of <code>-1</code> to unset a volume's storage capacity quota.</p>
   */
  StorageCapacityQuotaGiB?: number;

  /**
   * <p>Specifies the record size of an OpenZFS volume, in kibibytes (KiB). Valid values are 4, 8,
   *             16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB.
   *             Most workloads should use the default record size. Database workflows can benefit from a smaller
   *             record size, while streaming workflows can benefit from a larger record size. For additional guidance on when
   *             to set a custom record size, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs">
   *                 Tips for maximizing performance</a> in the
   *             <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  RecordSizeKiB?: number;

  /**
   * <p>Specifies the method used to compress the data on the volume. The compression
   *             type is <code>NONE</code> by default.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> - Doesn't compress the data on the volume.
   *                     <code>NONE</code> is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZSTD</code> - Compresses the data in the volume using the Zstandard
   *                     (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better
   *                     compression ratio to minimize on-disk storage utilization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LZ4</code> - Compresses the data in the volume using the LZ4
   *                     compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive
   *                     and delivers higher write throughput speeds.</p>
   *             </li>
   *          </ul>
   */
  DataCompressionType?: OpenZFSDataCompressionType | string;

  /**
   * <p>The configuration object for mounting a Network File System (NFS) file system.</p>
   */
  NfsExports?: OpenZFSNfsExport[];

  /**
   * <p>An object specifying how much storage users or groups can use on the volume.</p>
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[];

  /**
   * <p>A Boolean value indicating whether the volume is read-only.</p>
   */
  ReadOnly?: boolean;
}

export interface UpdateVolumeRequest {
  /**
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 64
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The ID of the volume that you want to update, in the format
   *                 <code>fsvol-0123456789abcdef0</code>.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The configuration of the ONTAP volume that you are updating.</p>
   */
  OntapConfiguration?: UpdateOntapVolumeConfiguration;

  /**
   * <p>The name of the OpenZFS volume. OpenZFS root volumes are automatically named
   *                 <code>FSX</code>. Child volume names must be unique among their parent volume's
   *             children. The name of the volume is part of the mount string for the OpenZFS volume. </p>
   */
  Name?: string;

  /**
   * <p>The configuration of the OpenZFS volume that you are updating.</p>
   */
  OpenZFSConfiguration?: UpdateOpenZFSVolumeConfiguration;
}

/**
 * <p>Describes a specific Amazon FSx administrative action for the current Windows,
 *             Lustre, or OpenZFS file system.</p>
 */
export interface AdministrativeAction {
  /**
   * <p>Describes the type of administrative action, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FILE_SYSTEM_UPDATE</code> - A file system update administrative action
   *                     initiated from the Amazon FSx console, API
   *                         (<code>UpdateFileSystem</code>), or CLI
   *                     (<code>update-file-system</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STORAGE_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code>
   *                     task to increase a file system's storage capacity has been completed
   *                     successfully, a <code>STORAGE_OPTIMIZATION</code> task starts. </p>
   *                <ul>
   *                   <li>
   *                      <p>For Windows and ONTAP, storage optimization is the process of migrating the file system data
   *                         to newer larger disks.</p>
   *                   </li>
   *                   <li>
   *                      <p>For Lustre, storage optimization consists of rebalancing the data across the existing and
   *                             newly added file servers.</p>
   *                   </li>
   *                </ul>
   *                <p>You can track the storage-optimization progress using the
   *                         <code>ProgressPercent</code> property. When
   *                         <code>STORAGE_OPTIMIZATION</code> has been completed successfully, the
   *                     parent <code>FILE_SYSTEM_UPDATE</code> action status changes to
   *                         <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing
   *                         storage capacity</a> in the <i>Amazon FSx for Windows
   *                         File Server User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage
   *                         and throughput capacity</a> in the <i>Amazon FSx for
   *                             Lustre User Guide</i>, and
   *                     <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User
   *                             Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FILE_SYSTEM_ALIAS_ASSOCIATION</code> - A file system update to associate a new Domain
   *                     Name System (DNS) alias with the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html">
   *                         AssociateFileSystemAliases</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FILE_SYSTEM_ALIAS_DISASSOCIATION</code> - A file system update to disassociate a DNS alias from the file system.
   *                 For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html">DisassociateFileSystemAliases</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VOLUME_UPDATE</code> - A volume update to an Amazon FSx for NetApp ONTAP or
   *                         Amazon FSx for OpenZFS volume initiated from the Amazon FSx
   *                     console, API (<code>UpdateVolume</code>), or CLI
   *                     (<code>update-volume</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VOLUME_RESTORE</code> - An Amazon FSx for OpenZFS volume
   *                 is returned to the state saved by the specified snapshot, initiated from an
   *                 API (<code>RestoreVolumeFromSnapshot</code>) or CLI
   *                 (<code>restore-volume-from-snapshot</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SNAPSHOT_UPDATE</code> - A snapshot update to an Amazon FSx for
   *                     OpenZFS volume initiated from the Amazon FSx console, API
   *                         (<code>UpdateSnapshot</code>), or CLI (<code>update-snapshot</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RELEASE_NFS_V3_LOCKS</code> - Tracks the release of Network File System
   *                     (NFS) V3 locks on an Amazon FSx for OpenZFS file system.</p>
   *             </li>
   *          </ul>
   */
  AdministrativeActionType?: AdministrativeActionType | string;

  /**
   * <p>The percentage-complete status of a <code>STORAGE_OPTIMIZATION</code> administrative
   *             action. Does not apply to any other administrative action type.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>The time that the administrative action request was received.</p>
   */
  RequestTime?: Date;

  /**
   * <p>Describes the status of the administrative action, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Amazon FSx failed to process the administrative action
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Amazon FSx is processing the administrative action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon FSx is waiting to process the administrative
   *                     action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - Amazon FSx has finished processing the administrative
   *                     task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATED_OPTIMIZING</code> - For a storage-capacity increase update, Amazon FSx
   *                     has updated the file system with the new storage capacity, and is now performing
   *                     the storage-optimization process. </p>
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
   * <p>Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS
   *             volume.</p>
   */
  TargetVolumeValues?: Volume;

  /**
   * <p>A snapshot of an Amazon FSx for OpenZFS volume.</p>
   */
  TargetSnapshotValues?: Snapshot;
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
   * <p>The type of Amazon FSx file system, which can be <code>LUSTRE</code>,
   *                 <code>WINDOWS</code>, <code>ONTAP</code>, or <code>OPENZFS</code>.</p>
   */
  FileSystemType?: FileSystemType | string;

  /**
   * <p>The lifecycle status of the file system. The following are the possible values and
   *             what they mean:</p>
   *          <ul>
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
   *                <p>
   *                   <code>MISCONFIGURED</code> - The file system is in a failed but recoverable state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURED_UNAVAILABLE</code> - (Amazon FSx for Windows File Server only) The file system is
   *                     currently unavailable due to a change in your Active Directory configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - The file system is undergoing a customer-initiated update.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: FileSystemLifecycle | string;

  /**
   * <p>A structure providing details of any failures that occurred.</p>
   */
  FailureDetails?: FileSystemFailureDetails;

  /**
   * <p>The storage capacity of the file system in gibibytes (GiB).</p>
   */
  StorageCapacity?: number;

  /**
   * <p>The type of storage the file system is using.
   *             If set to <code>SSD</code>, the file system uses solid state drive storage.
   *             If set to <code>HDD</code>, the file system uses hard disk drive storage.
   *         </p>
   */
  StorageType?: StorageType | string;

  /**
   * <p>The ID of the primary virtual private cloud (VPC) for the file system.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the IDs of the subnets that the file system is accessible from. For the Amazon FSx Windows and
   *             ONTAP <code>MULTI_AZ_1</code> file system deployment type, there are two subnet IDs, one for
   *             the preferred file server and one for the standby file server. The preferred file server subnet
   *             identified in the <code>PreferredSubnetID</code> property. All other file systems have only one subnet ID.</p>
   *          <p>For FSx for Lustre file systems, and Single-AZ Windows file systems, this is the ID of
   *             the subnet that contains the file system's endpoint. For <code>MULTI_AZ_1</code> Windows and
   *             ONTAP file systems, the file system endpoint is available in the <code>PreferredSubnetID</code>.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The IDs of the elastic network interfaces from which a specific file system is
   *             accessible. The elastic network interface is automatically created in the same virtual
   *             private cloud (VPC) that the Amazon FSx file system was created in. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interfaces</a> in
   *             the <i>Amazon EC2 User Guide.</i>
   *          </p>
   *          <p>For an Amazon FSx for Windows File Server file system, you can have one
   *             network interface ID. For an Amazon FSx for Lustre file system, you can have
   *             more than one.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>The Domain Name System (DNS) name for the file system.</p>
   */
  DNSName?: string;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt Amazon FSx file
   *             system data. Used as follows with Amazon FSx file system types:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon FSx for Lustre <code>PERSISTENT_1</code>
   *                and <code>PERSISTENT_2</code> deployment types only.</p>
   *                <p>
   *                   <code>SCRATCH_1</code> and <code>SCRATCH_2</code> types are encrypted using
   *                     the Amazon FSx service KMS key for your account.</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for NetApp ONTAP</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for OpenZFS</p>
   *             </li>
   *             <li>
   *                <p>Amazon FSx for Windows File Server</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file system resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The tags to associate with the file system. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your
   *                 Amazon EC2 resources</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration for this Amazon FSx for Windows File Server file system.</p>
   */
  WindowsConfiguration?: WindowsFileSystemConfiguration;

  /**
   * <p>The configuration for the Amazon FSx for Lustre file system.</p>
   */
  LustreConfiguration?: LustreFileSystemConfiguration;

  /**
   * <p>A list of administrative actions for the file system that are in process or waiting to
   *             be processed. Administrative actions describe changes to the Amazon FSx system
   *             that you have initiated using the <code>UpdateFileSystem</code> operation.</p>
   */
  AdministrativeActions?: AdministrativeAction[];

  /**
   * <p>The configuration for this Amazon FSx for NetApp ONTAP file system.</p>
   */
  OntapConfiguration?: OntapFileSystemConfiguration;

  /**
   * <p>The Lustre version of the Amazon FSx for Lustre file system, either
   *             <code>2.10</code> or <code>2.12</code>.</p>
   */
  FileSystemTypeVersion?: string;

  /**
   * <p>The configuration for this Amazon FSx for OpenZFS file system.</p>
   */
  OpenZFSConfiguration?: OpenZFSFileSystemConfiguration;
}

/**
 * <p>A snapshot of an Amazon FSx for OpenZFS volume.</p>
 */
export interface Snapshot {
  /**
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The name of the snapshot.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the volume that the snapshot is of.</p>
   */
  VolumeId?: string;

  /**
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The lifecycle status of the snapshot.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon FSx hasn't started creating the
   *                     snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon FSx is creating the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Amazon FSx is deleting the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The snapshot is fully available.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: SnapshotLifecycle | string;

  /**
   * <p>Describes why a resource lifecycle state changed.</p>
   */
  LifecycleTransitionReason?: LifecycleTransitionReason;

  /**
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of administrative actions for the file system that are in process or waiting to
   *             be processed. Administrative actions describe changes to the Amazon FSx
   *             system.</p>
   */
  AdministrativeActions?: AdministrativeAction[];
}

/**
 * <p>Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS
 *             volume.</p>
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
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The volume is fully available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - The volume has been created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon FSx is creating the new volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Amazon FSx is deleting an existing
   *                     volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Amazon FSx was unable to create the
   *                     volume.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISCONFIGURED</code> - The volume is in a failed but recoverable
   *                     state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon FSx hasn't started creating the
   *                     volume.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle?: VolumeLifecycle | string;

  /**
   * <p>The name of the volume.</p>
   */
  Name?: string;

  /**
   * <p>The configuration of an Amazon FSx for NetApp ONTAP volume.</p>
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
   * <p>The type of the volume.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The reason why the volume lifecycle status changed.</p>
   */
  LifecycleTransitionReason?: LifecycleTransitionReason;

  /**
   * <p>A list of administrative actions for the volume that are in process or waiting to be processed.
   *             Administrative actions describe changes to the volume that you have initiated using
   *             the <code>UpdateVolume</code> action.</p>
   */
  AdministrativeActions?: AdministrativeAction[];

  /**
   * <p>The configuration of an Amazon FSx for OpenZFS volume.</p>
   */
  OpenZFSConfiguration?: OpenZFSVolumeConfiguration;
}

export interface RestoreVolumeFromSnapshotResponse {
  /**
   * <p>The ID of the volume that you restored.</p>
   */
  VolumeId?: string;

  /**
   * <p>The lifecycle state of the volume being restored.</p>
   */
  Lifecycle?: VolumeLifecycle | string;

  /**
   * <p>A list of administrative actions for the file system that are in process or waiting to
   *             be processed. Administrative actions describe changes to the Amazon FSx
   *             system.</p>
   */
  AdministrativeActions?: AdministrativeAction[];
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

/**
 * <p>The response object returned after the file system is created.</p>
 */
export interface CreateFileSystemResponse {
  /**
   * <p>The configuration of the file system that was created.</p>
   */
  FileSystem?: FileSystem;
}

export interface CreateSnapshotResponse {
  /**
   * <p>A description of the snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export interface CreateVolumeFromBackupResponse {
  /**
   * <p>Returned after a successful <code>CreateVolumeFromBackup</code> API operation,
   *             describing the volume just created.</p>
   */
  Volume?: Volume;
}

export interface CreateVolumeResponse {
  /**
   * <p>Returned after a successful <code>CreateVolume</code> API operation, describing the volume just created.</p>
   */
  Volume?: Volume;
}

export interface ReleaseFileSystemNfsV3LocksResponse {
  /**
   * <p>A description of a specific Amazon FSx file system.</p>
   */
  FileSystem?: FileSystem;
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

export interface UpdateSnapshotResponse {
  /**
   * <p>Returned after a successful <code>UpdateSnapshot</code> operation, describing the
   *             snapshot that you updated.</p>
   */
  Snapshot?: Snapshot;
}

export interface UpdateVolumeResponse {
  /**
   * <p>A description of the volume just updated. Returned after a successful
   *                 <code>UpdateVolume</code> API operation.</p>
   */
  Volume?: Volume;
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

export interface DescribeSnapshotsResponse {
  /**
   * <p>An array of snapshots.</p>
   */
  Snapshots?: Snapshot[];

  /**
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
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

/**
 * <p>A backup of an Amazon FSx for Windows File Server, Amazon FSx for
 *             Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx
 *             for OpenZFS file system.</p>
 */
export interface Backup {
  /**
   * <p>The ID of the backup.</p>
   */
  BackupId: string | undefined;

  /**
   * <p>The lifecycle status of the backup.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The backup is fully available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> - Amazon FSx is creating the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is transferring the backup to Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COPYING</code> - Amazon FSx is copying the backup.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Amazon FSx deleted the backup and it's no longer
   *                     available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Amazon FSx couldn't finish the backup.</p>
   *             </li>
   *          </ul>
   */
  Lifecycle: BackupLifecycle | string | undefined;

  /**
   * <p>Details explaining any failures that occurred when creating a backup.</p>
   */
  FailureDetails?: BackupFailureDetails;

  /**
   * <p>The type of the file-system backup.</p>
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
   *             backup of the Amazon FSx file system's data at rest. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the backup resource.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The tags associated with a particular file system.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The metadata of the file system associated with the backup. This metadata is persisted
   *             even if the file system is deleted.</p>
   */
  FileSystem: FileSystem | undefined;

  /**
   * <p>The configuration of the self-managed Microsoft Active Directory directory to which
   *             the Windows File Server instance is joined.</p>
   */
  DirectoryInformation?: ActiveDirectoryBackupAttributes;

  /**
   * <p>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon
   *             Resource Names (ARNs) for resources.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  SourceBackupId?: string;

  /**
   * <p>The source Region of the backup. Specifies the Region from where this backup
   *             is copied.</p>
   */
  SourceBackupRegion?: string;

  /**
   * <p>Specifies the resource type that's backed up.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS
   *             volume.</p>
   */
  Volume?: Volume;
}

export interface CopyBackupResponse {
  /**
   * <p>A backup of an Amazon FSx for Windows File Server, Amazon FSx for
   *             Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx
   *             for OpenZFS file system.</p>
   */
  Backup?: Backup;
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

/**
 * <p>Response object for the <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsResponse {
  /**
   * <p>An array of backups.</p>
   */
  Backups?: Backup[];

  /**
   * <p>A <code>NextToken</code> value is present if there are more backups than returned in
   *             the response. You can use the <code>NextToken</code> value in the subsequent request to
   *             fetch the backups. </p>
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const ActiveDirectoryBackupAttributesFilterSensitiveLog = (obj: ActiveDirectoryBackupAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdministrativeActionFailureDetailsFilterSensitiveLog = (obj: AdministrativeActionFailureDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileSystemFailureDetailsFilterSensitiveLog = (obj: FileSystemFailureDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataRepositoryFailureDetailsFilterSensitiveLog = (obj: DataRepositoryFailureDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataRepositoryConfigurationFilterSensitiveLog = (obj: DataRepositoryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LustreLogConfigurationFilterSensitiveLog = (obj: LustreLogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LustreRootSquashConfigurationFilterSensitiveLog = (obj: LustreRootSquashConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LustreFileSystemConfigurationFilterSensitiveLog = (obj: LustreFileSystemConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiskIopsConfigurationFilterSensitiveLog = (obj: DiskIopsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileSystemEndpointFilterSensitiveLog = (obj: FileSystemEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileSystemEndpointsFilterSensitiveLog = (obj: FileSystemEndpoints): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OntapFileSystemConfigurationFilterSensitiveLog = (obj: OntapFileSystemConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenZFSFileSystemConfigurationFilterSensitiveLog = (obj: OpenZFSFileSystemConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AliasFilterSensitiveLog = (obj: Alias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WindowsAuditLogConfigurationFilterSensitiveLog = (obj: WindowsAuditLogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelfManagedActiveDirectoryAttributesFilterSensitiveLog = (
  obj: SelfManagedActiveDirectoryAttributes
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WindowsFileSystemConfigurationFilterSensitiveLog = (obj: WindowsFileSystemConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleTransitionReasonFilterSensitiveLog = (obj: LifecycleTransitionReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TieringPolicyFilterSensitiveLog = (obj: TieringPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OntapVolumeConfigurationFilterSensitiveLog = (obj: OntapVolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenZFSClientConfigurationFilterSensitiveLog = (obj: OpenZFSClientConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenZFSNfsExportFilterSensitiveLog = (obj: OpenZFSNfsExport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenZFSOriginSnapshotConfigurationFilterSensitiveLog = (obj: OpenZFSOriginSnapshotConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenZFSUserOrGroupQuotaFilterSensitiveLog = (obj: OpenZFSUserOrGroupQuota): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenZFSVolumeConfigurationFilterSensitiveLog = (obj: OpenZFSVolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateFileSystemAliasesRequestFilterSensitiveLog = (obj: AssociateFileSystemAliasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateFileSystemAliasesResponseFilterSensitiveLog = (obj: AssociateFileSystemAliasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoExportPolicyFilterSensitiveLog = (obj: AutoExportPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoImportPolicyFilterSensitiveLog = (obj: AutoImportPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelDataRepositoryTaskRequestFilterSensitiveLog = (obj: CancelDataRepositoryTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelDataRepositoryTaskResponseFilterSensitiveLog = (obj: CancelDataRepositoryTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyBackupRequestFilterSensitiveLog = (obj: CopyBackupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupFailureDetailsFilterSensitiveLog = (obj: BackupFailureDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackupRequestFilterSensitiveLog = (obj: CreateBackupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DataRepositoryConfigurationFilterSensitiveLog = (obj: S3DataRepositoryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataRepositoryAssociationRequestFilterSensitiveLog = (
  obj: CreateDataRepositoryAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NFSDataRepositoryConfigurationFilterSensitiveLog = (obj: NFSDataRepositoryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataRepositoryAssociationFilterSensitiveLog = (obj: DataRepositoryAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataRepositoryAssociationResponseFilterSensitiveLog = (
  obj: CreateDataRepositoryAssociationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompletionReportFilterSensitiveLog = (obj: CompletionReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataRepositoryTaskRequestFilterSensitiveLog = (obj: CreateDataRepositoryTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataRepositoryTaskFailureDetailsFilterSensitiveLog = (obj: DataRepositoryTaskFailureDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataRepositoryTaskStatusFilterSensitiveLog = (obj: DataRepositoryTaskStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataRepositoryTaskFilterSensitiveLog = (obj: DataRepositoryTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataRepositoryTaskResponseFilterSensitiveLog = (obj: CreateDataRepositoryTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileCacheNFSConfigurationFilterSensitiveLog = (obj: FileCacheNFSConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileCacheDataRepositoryAssociationFilterSensitiveLog = (obj: FileCacheDataRepositoryAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileCacheLustreMetadataConfigurationFilterSensitiveLog = (
  obj: FileCacheLustreMetadataConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFileCacheLustreConfigurationFilterSensitiveLog = (obj: CreateFileCacheLustreConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFileCacheRequestFilterSensitiveLog = (obj: CreateFileCacheRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileCacheFailureDetailsFilterSensitiveLog = (obj: FileCacheFailureDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileCacheLustreConfigurationFilterSensitiveLog = (obj: FileCacheLustreConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileCacheCreatingFilterSensitiveLog = (obj: FileCacheCreating): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFileCacheResponseFilterSensitiveLog = (obj: CreateFileCacheResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LustreLogCreateConfigurationFilterSensitiveLog = (obj: LustreLogCreateConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFileSystemLustreConfigurationFilterSensitiveLog = (
  obj: CreateFileSystemLustreConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFileSystemOntapConfigurationFilterSensitiveLog = (obj: CreateFileSystemOntapConfiguration): any => ({
  ...obj,
  ...(obj.FsxAdminPassword && { FsxAdminPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OpenZFSCreateRootVolumeConfigurationFilterSensitiveLog = (
  obj: OpenZFSCreateRootVolumeConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFileSystemOpenZFSConfigurationFilterSensitiveLog = (
  obj: CreateFileSystemOpenZFSConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WindowsAuditLogCreateConfigurationFilterSensitiveLog = (obj: WindowsAuditLogCreateConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelfManagedActiveDirectoryConfigurationFilterSensitiveLog = (
  obj: SelfManagedActiveDirectoryConfiguration
): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateFileSystemWindowsConfigurationFilterSensitiveLog = (
  obj: CreateFileSystemWindowsConfiguration
): any => ({
  ...obj,
  ...(obj.SelfManagedActiveDirectoryConfiguration && {
    SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationFilterSensitiveLog(
      obj.SelfManagedActiveDirectoryConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const CreateFileSystemRequestFilterSensitiveLog = (obj: CreateFileSystemRequest): any => ({
  ...obj,
  ...(obj.WindowsConfiguration && {
    WindowsConfiguration: CreateFileSystemWindowsConfigurationFilterSensitiveLog(obj.WindowsConfiguration),
  }),
  ...(obj.OntapConfiguration && {
    OntapConfiguration: CreateFileSystemOntapConfigurationFilterSensitiveLog(obj.OntapConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateFileSystemFromBackupRequestFilterSensitiveLog = (obj: CreateFileSystemFromBackupRequest): any => ({
  ...obj,
  ...(obj.WindowsConfiguration && {
    WindowsConfiguration: CreateFileSystemWindowsConfigurationFilterSensitiveLog(obj.WindowsConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateSnapshotRequestFilterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSvmActiveDirectoryConfigurationFilterSensitiveLog = (
  obj: CreateSvmActiveDirectoryConfiguration
): any => ({
  ...obj,
  ...(obj.SelfManagedActiveDirectoryConfiguration && {
    SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationFilterSensitiveLog(
      obj.SelfManagedActiveDirectoryConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const CreateStorageVirtualMachineRequestFilterSensitiveLog = (obj: CreateStorageVirtualMachineRequest): any => ({
  ...obj,
  ...(obj.ActiveDirectoryConfiguration && {
    ActiveDirectoryConfiguration: CreateSvmActiveDirectoryConfigurationFilterSensitiveLog(
      obj.ActiveDirectoryConfiguration
    ),
  }),
  ...(obj.SvmAdminPassword && { SvmAdminPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SvmActiveDirectoryConfigurationFilterSensitiveLog = (obj: SvmActiveDirectoryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SvmEndpointFilterSensitiveLog = (obj: SvmEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SvmEndpointsFilterSensitiveLog = (obj: SvmEndpoints): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageVirtualMachineFilterSensitiveLog = (obj: StorageVirtualMachine): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStorageVirtualMachineResponseFilterSensitiveLog = (
  obj: CreateStorageVirtualMachineResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOntapVolumeConfigurationFilterSensitiveLog = (obj: CreateOntapVolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOpenZFSOriginSnapshotConfigurationFilterSensitiveLog = (
  obj: CreateOpenZFSOriginSnapshotConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOpenZFSVolumeConfigurationFilterSensitiveLog = (obj: CreateOpenZFSVolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumeRequestFilterSensitiveLog = (obj: CreateVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumeFromBackupRequestFilterSensitiveLog = (obj: CreateVolumeFromBackupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupRequestFilterSensitiveLog = (obj: DeleteBackupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupResponseFilterSensitiveLog = (obj: DeleteBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataRepositoryAssociationRequestFilterSensitiveLog = (
  obj: DeleteDataRepositoryAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataRepositoryAssociationResponseFilterSensitiveLog = (
  obj: DeleteDataRepositoryAssociationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileCacheRequestFilterSensitiveLog = (obj: DeleteFileCacheRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileCacheResponseFilterSensitiveLog = (obj: DeleteFileCacheResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileSystemLustreConfigurationFilterSensitiveLog = (
  obj: DeleteFileSystemLustreConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileSystemOpenZFSConfigurationFilterSensitiveLog = (
  obj: DeleteFileSystemOpenZFSConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileSystemWindowsConfigurationFilterSensitiveLog = (
  obj: DeleteFileSystemWindowsConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileSystemRequestFilterSensitiveLog = (obj: DeleteFileSystemRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileSystemLustreResponseFilterSensitiveLog = (obj: DeleteFileSystemLustreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileSystemOpenZFSResponseFilterSensitiveLog = (obj: DeleteFileSystemOpenZFSResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileSystemWindowsResponseFilterSensitiveLog = (obj: DeleteFileSystemWindowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileSystemResponseFilterSensitiveLog = (obj: DeleteFileSystemResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotRequestFilterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotResponseFilterSensitiveLog = (obj: DeleteSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStorageVirtualMachineRequestFilterSensitiveLog = (obj: DeleteStorageVirtualMachineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStorageVirtualMachineResponseFilterSensitiveLog = (
  obj: DeleteStorageVirtualMachineResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVolumeOntapConfigurationFilterSensitiveLog = (obj: DeleteVolumeOntapConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVolumeOpenZFSConfigurationFilterSensitiveLog = (obj: DeleteVolumeOpenZFSConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVolumeRequestFilterSensitiveLog = (obj: DeleteVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVolumeOntapResponseFilterSensitiveLog = (obj: DeleteVolumeOntapResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVolumeResponseFilterSensitiveLog = (obj: DeleteVolumeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBackupsRequestFilterSensitiveLog = (obj: DescribeBackupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataRepositoryAssociationsRequestFilterSensitiveLog = (
  obj: DescribeDataRepositoryAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataRepositoryAssociationsResponseFilterSensitiveLog = (
  obj: DescribeDataRepositoryAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataRepositoryTaskFilterFilterSensitiveLog = (obj: DataRepositoryTaskFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataRepositoryTasksRequestFilterSensitiveLog = (obj: DescribeDataRepositoryTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataRepositoryTasksResponseFilterSensitiveLog = (
  obj: DescribeDataRepositoryTasksResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFileCachesRequestFilterSensitiveLog = (obj: DescribeFileCachesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileCacheFilterSensitiveLog = (obj: FileCache): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFileCachesResponseFilterSensitiveLog = (obj: DescribeFileCachesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFileSystemAliasesRequestFilterSensitiveLog = (obj: DescribeFileSystemAliasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFileSystemAliasesResponseFilterSensitiveLog = (obj: DescribeFileSystemAliasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFileSystemsRequestFilterSensitiveLog = (obj: DescribeFileSystemsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotFilterFilterSensitiveLog = (obj: SnapshotFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsRequestFilterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageVirtualMachineFilterFilterSensitiveLog = (obj: StorageVirtualMachineFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStorageVirtualMachinesRequestFilterSensitiveLog = (
  obj: DescribeStorageVirtualMachinesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStorageVirtualMachinesResponseFilterSensitiveLog = (
  obj: DescribeStorageVirtualMachinesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeFilterFilterSensitiveLog = (obj: VolumeFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesRequestFilterSensitiveLog = (obj: DescribeVolumesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFileSystemAliasesRequestFilterSensitiveLog = (
  obj: DisassociateFileSystemAliasesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFileSystemAliasesResponseFilterSensitiveLog = (
  obj: DisassociateFileSystemAliasesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleaseFileSystemNfsV3LocksRequestFilterSensitiveLog = (obj: ReleaseFileSystemNfsV3LocksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreVolumeFromSnapshotRequestFilterSensitiveLog = (obj: RestoreVolumeFromSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataRepositoryAssociationRequestFilterSensitiveLog = (
  obj: UpdateDataRepositoryAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataRepositoryAssociationResponseFilterSensitiveLog = (
  obj: UpdateDataRepositoryAssociationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFileCacheLustreConfigurationFilterSensitiveLog = (obj: UpdateFileCacheLustreConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFileCacheRequestFilterSensitiveLog = (obj: UpdateFileCacheRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFileCacheResponseFilterSensitiveLog = (obj: UpdateFileCacheResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFileSystemLustreConfigurationFilterSensitiveLog = (
  obj: UpdateFileSystemLustreConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFileSystemOntapConfigurationFilterSensitiveLog = (obj: UpdateFileSystemOntapConfiguration): any => ({
  ...obj,
  ...(obj.FsxAdminPassword && { FsxAdminPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateFileSystemOpenZFSConfigurationFilterSensitiveLog = (
  obj: UpdateFileSystemOpenZFSConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelfManagedActiveDirectoryConfigurationUpdatesFilterSensitiveLog = (
  obj: SelfManagedActiveDirectoryConfigurationUpdates
): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateFileSystemWindowsConfigurationFilterSensitiveLog = (
  obj: UpdateFileSystemWindowsConfiguration
): any => ({
  ...obj,
  ...(obj.SelfManagedActiveDirectoryConfiguration && {
    SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdatesFilterSensitiveLog(
      obj.SelfManagedActiveDirectoryConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const UpdateFileSystemRequestFilterSensitiveLog = (obj: UpdateFileSystemRequest): any => ({
  ...obj,
  ...(obj.WindowsConfiguration && {
    WindowsConfiguration: UpdateFileSystemWindowsConfigurationFilterSensitiveLog(obj.WindowsConfiguration),
  }),
  ...(obj.OntapConfiguration && {
    OntapConfiguration: UpdateFileSystemOntapConfigurationFilterSensitiveLog(obj.OntapConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateSnapshotRequestFilterSensitiveLog = (obj: UpdateSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSvmActiveDirectoryConfigurationFilterSensitiveLog = (
  obj: UpdateSvmActiveDirectoryConfiguration
): any => ({
  ...obj,
  ...(obj.SelfManagedActiveDirectoryConfiguration && {
    SelfManagedActiveDirectoryConfiguration: SelfManagedActiveDirectoryConfigurationUpdatesFilterSensitiveLog(
      obj.SelfManagedActiveDirectoryConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const UpdateStorageVirtualMachineRequestFilterSensitiveLog = (obj: UpdateStorageVirtualMachineRequest): any => ({
  ...obj,
  ...(obj.ActiveDirectoryConfiguration && {
    ActiveDirectoryConfiguration: UpdateSvmActiveDirectoryConfigurationFilterSensitiveLog(
      obj.ActiveDirectoryConfiguration
    ),
  }),
  ...(obj.SvmAdminPassword && { SvmAdminPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateStorageVirtualMachineResponseFilterSensitiveLog = (
  obj: UpdateStorageVirtualMachineResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOntapVolumeConfigurationFilterSensitiveLog = (obj: UpdateOntapVolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOpenZFSVolumeConfigurationFilterSensitiveLog = (obj: UpdateOpenZFSVolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVolumeRequestFilterSensitiveLog = (obj: UpdateVolumeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdministrativeActionFilterSensitiveLog = (obj: AdministrativeAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileSystemFilterSensitiveLog = (obj: FileSystem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotFilterSensitiveLog = (obj: Snapshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeFilterSensitiveLog = (obj: Volume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreVolumeFromSnapshotResponseFilterSensitiveLog = (obj: RestoreVolumeFromSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFileSystemFromBackupResponseFilterSensitiveLog = (obj: CreateFileSystemFromBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFileSystemResponseFilterSensitiveLog = (obj: CreateFileSystemResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotResponseFilterSensitiveLog = (obj: CreateSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumeFromBackupResponseFilterSensitiveLog = (obj: CreateVolumeFromBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVolumeResponseFilterSensitiveLog = (obj: CreateVolumeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleaseFileSystemNfsV3LocksResponseFilterSensitiveLog = (
  obj: ReleaseFileSystemNfsV3LocksResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFileSystemResponseFilterSensitiveLog = (obj: UpdateFileSystemResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSnapshotResponseFilterSensitiveLog = (obj: UpdateSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVolumeResponseFilterSensitiveLog = (obj: UpdateVolumeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFileSystemsResponseFilterSensitiveLog = (obj: DescribeFileSystemsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsResponseFilterSensitiveLog = (obj: DescribeSnapshotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVolumesResponseFilterSensitiveLog = (obj: DescribeVolumesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupFilterSensitiveLog = (obj: Backup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyBackupResponseFilterSensitiveLog = (obj: CopyBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackupResponseFilterSensitiveLog = (obj: CreateBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBackupsResponseFilterSensitiveLog = (obj: DescribeBackupsResponse): any => ({
  ...obj,
});
