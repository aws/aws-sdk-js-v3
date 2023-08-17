// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { FSxServiceException as __BaseException } from "./FSxServiceException";

/**
 * @public
 * <p>The Microsoft Active Directory attributes of the Amazon FSx for Windows File
 *             Server file system.</p>
 */
export interface ActiveDirectoryBackupAttributes {
  /**
   * @public
   * <p>The fully qualified domain name of the self-managed Active Directory directory.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services Managed Microsoft Active Directory instance to which the file system is joined.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;
}

/**
 * @public
 * @enum
 */
export const ActiveDirectoryErrorType = {
  DOMAIN_NOT_FOUND: "DOMAIN_NOT_FOUND",
  INCOMPATIBLE_DOMAIN_MODE: "INCOMPATIBLE_DOMAIN_MODE",
  INVALID_DOMAIN_STAGE: "INVALID_DOMAIN_STAGE",
  WRONG_VPC: "WRONG_VPC",
} as const;

/**
 * @public
 */
export type ActiveDirectoryErrorType = (typeof ActiveDirectoryErrorType)[keyof typeof ActiveDirectoryErrorType];

/**
 * @public
 * <p>An Active Directory error.</p>
 */
export class ActiveDirectoryError extends __BaseException {
  readonly name: "ActiveDirectoryError" = "ActiveDirectoryError";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The directory ID of the directory that an error pertains to.</p>
   */
  ActiveDirectoryId: string | undefined;

  /**
   * @public
   * <p>The type of Active Directory error.</p>
   */
  Type?: ActiveDirectoryErrorType | string;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const AdministrativeActionType = {
  FILE_SYSTEM_ALIAS_ASSOCIATION: "FILE_SYSTEM_ALIAS_ASSOCIATION",
  FILE_SYSTEM_ALIAS_DISASSOCIATION: "FILE_SYSTEM_ALIAS_DISASSOCIATION",
  FILE_SYSTEM_UPDATE: "FILE_SYSTEM_UPDATE",
  IOPS_OPTIMIZATION: "IOPS_OPTIMIZATION",
  RELEASE_NFS_V3_LOCKS: "RELEASE_NFS_V3_LOCKS",
  SNAPSHOT_UPDATE: "SNAPSHOT_UPDATE",
  STORAGE_OPTIMIZATION: "STORAGE_OPTIMIZATION",
  STORAGE_TYPE_OPTIMIZATION: "STORAGE_TYPE_OPTIMIZATION",
  THROUGHPUT_OPTIMIZATION: "THROUGHPUT_OPTIMIZATION",
  VOLUME_RESTORE: "VOLUME_RESTORE",
  VOLUME_UPDATE: "VOLUME_UPDATE",
} as const;

/**
 * @public
 */
export type AdministrativeActionType = (typeof AdministrativeActionType)[keyof typeof AdministrativeActionType];

/**
 * @public
 * <p>Provides information about a failed administrative action.</p>
 */
export interface AdministrativeActionFailureDetails {
  /**
   * @public
   * <p>Error message providing details about the failed administrative action.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const Status = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  UPDATED_OPTIMIZING: "UPDATED_OPTIMIZING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * <p>A structure providing details of any failures that occurred.</p>
 */
export interface FileSystemFailureDetails {
  /**
   * @public
   * <p>A message describing any failures that occurred.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const FileSystemType = {
  LUSTRE: "LUSTRE",
  ONTAP: "ONTAP",
  OPENZFS: "OPENZFS",
  WINDOWS: "WINDOWS",
} as const;

/**
 * @public
 */
export type FileSystemType = (typeof FileSystemType)[keyof typeof FileSystemType];

/**
 * @public
 * @enum
 */
export const FileSystemLifecycle = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MISCONFIGURED: "MISCONFIGURED",
  MISCONFIGURED_UNAVAILABLE: "MISCONFIGURED_UNAVAILABLE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type FileSystemLifecycle = (typeof FileSystemLifecycle)[keyof typeof FileSystemLifecycle];

/**
 * @public
 * @enum
 */
export const DataCompressionType = {
  LZ4: "LZ4",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type DataCompressionType = (typeof DataCompressionType)[keyof typeof DataCompressionType];

/**
 * @public
 * @enum
 */
export const AutoImportPolicyType = {
  NEW: "NEW",
  NEW_CHANGED: "NEW_CHANGED",
  NEW_CHANGED_DELETED: "NEW_CHANGED_DELETED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AutoImportPolicyType = (typeof AutoImportPolicyType)[keyof typeof AutoImportPolicyType];

/**
 * @public
 * <p>Provides detailed information about the data repository if its <code>Lifecycle</code> is
 *             set to <code>MISCONFIGURED</code> or <code>FAILED</code>.</p>
 */
export interface DataRepositoryFailureDetails {
  /**
   * @public
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const DataRepositoryLifecycle = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MISCONFIGURED: "MISCONFIGURED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DataRepositoryLifecycle = (typeof DataRepositoryLifecycle)[keyof typeof DataRepositoryLifecycle];

/**
 * @public
 * <p>The data repository configuration object for Lustre file systems returned in the response of
 *             the <code>CreateFileSystem</code> operation.</p>
 *          <p>This data type is not supported on file systems with a data repository association.
 *             For file systems with a data repository association,
 *             see .</p>
 */
export interface DataRepositoryConfiguration {
  /**
   * @public
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
   * @public
   * <p>The import path to the Amazon S3 bucket (and optional prefix) that you're using
   *             as the data repository for your FSx for Lustre file system, for example
   *                 <code>s3://import-bucket/optional-prefix</code>. If a prefix is specified after the
   *             Amazon S3 bucket name, only object keys with that prefix are loaded into the file
   *             system.</p>
   */
  ImportPath?: string;

  /**
   * @public
   * <p>The export path to the Amazon S3 bucket (and prefix) that you are using to store new and
   *             changed Lustre file system files in S3.</p>
   */
  ExportPath?: string;

  /**
   * @public
   * <p>For files imported from a data repository, this value determines the stripe count and
   *             maximum amount of data per file (in MiB) stored on a single physical disk. The maximum
   *             number of disks that a single file can be striped across is limited by the total number
   *             of disks that make up the file system.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * @public
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
   * @public
   * <p>Provides detailed information about the data repository if its <code>Lifecycle</code> is
   *             set to <code>MISCONFIGURED</code> or <code>FAILED</code>.</p>
   */
  FailureDetails?: DataRepositoryFailureDetails;
}

/**
 * @public
 * @enum
 */
export const LustreDeploymentType = {
  PERSISTENT_1: "PERSISTENT_1",
  PERSISTENT_2: "PERSISTENT_2",
  SCRATCH_1: "SCRATCH_1",
  SCRATCH_2: "SCRATCH_2",
} as const;

/**
 * @public
 */
export type LustreDeploymentType = (typeof LustreDeploymentType)[keyof typeof LustreDeploymentType];

/**
 * @public
 * @enum
 */
export const DriveCacheType = {
  NONE: "NONE",
  READ: "READ",
} as const;

/**
 * @public
 */
export type DriveCacheType = (typeof DriveCacheType)[keyof typeof DriveCacheType];

/**
 * @public
 * @enum
 */
export const LustreAccessAuditLogLevel = {
  DISABLED: "DISABLED",
  ERROR_ONLY: "ERROR_ONLY",
  WARN_ERROR: "WARN_ERROR",
  WARN_ONLY: "WARN_ONLY",
} as const;

/**
 * @public
 */
export type LustreAccessAuditLogLevel = (typeof LustreAccessAuditLogLevel)[keyof typeof LustreAccessAuditLogLevel];

/**
 * @public
 * <p>The configuration for Lustre logging used to write the enabled
 *             logging events for your Amazon FSx for Lustre file system or
 *             Amazon File Cache resource to Amazon CloudWatch Logs.</p>
 */
export interface LustreLogConfiguration {
  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) that specifies the destination of the logs.
   *             The destination can be any Amazon CloudWatch Logs log group ARN. The destination
   *             ARN must be in the same Amazon Web Services partition, Amazon Web Services Region,
   *             and Amazon Web Services account as your Amazon FSx file system.</p>
   */
  Destination?: string;
}

/**
 * @public
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
   * @public
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
   * @public
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
 * @public
 * <p>The configuration for the Amazon FSx for Lustre file system.</p>
 */
export interface LustreFileSystemConfiguration {
  /**
   * @public
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. Here, <code>d</code> is the weekday number, from 1 through 7, beginning with Monday and
   *             ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * @public
   * <p>The data repository configuration object for Lustre file systems returned in the response of
   *             the <code>CreateFileSystem</code> operation.</p>
   *          <p>This data type is not supported on file systems with a data repository association.
   *             For file systems with a data repository association,
   *             see .</p>
   */
  DataRepositoryConfiguration?: DataRepositoryConfiguration;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>You use the <code>MountName</code> value when mounting the file system.</p>
   *          <p>For the <code>SCRATCH_1</code> deployment type, this value is always "<code>fsx</code>".
   *             For <code>SCRATCH_2</code>, <code>PERSISTENT_1</code>, and <code>PERSISTENT_2</code> deployment
   *             types, this value is a string that is unique within an Amazon Web Services Region.
   *
   *         </p>
   */
  MountName?: string;

  /**
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
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
   * @public
   * <p>The type of drive cache used by <code>PERSISTENT_1</code> file systems that are provisioned with
   *             HDD storage devices. This parameter is required when <code>StorageType</code> is HDD. When set to
   *             <code>READ</code> the file system has an SSD storage cache that is sized to 20% of the file system's
   *             storage capacity. This improves the performance for frequently accessed files by caching up to 20%
   *             of the total storage capacity.</p>
   *          <p>This parameter is required when <code>StorageType</code> is set to HDD.</p>
   */
  DriveCacheType?: DriveCacheType | string;

  /**
   * @public
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
   * @public
   * <p>The Lustre logging configuration. Lustre logging writes the enabled log
   *             events for your file system to Amazon CloudWatch Logs.</p>
   */
  LogConfiguration?: LustreLogConfiguration;

  /**
   * @public
   * <p>The Lustre root squash configuration for an Amazon FSx for Lustre
   *             file system. When enabled, root squash restricts root-level access from clients that
   *             try to access your file system as a root user.</p>
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration;
}

/**
 * @public
 * @enum
 */
export const OntapDeploymentType = {
  MULTI_AZ_1: "MULTI_AZ_1",
  SINGLE_AZ_1: "SINGLE_AZ_1",
} as const;

/**
 * @public
 */
export type OntapDeploymentType = (typeof OntapDeploymentType)[keyof typeof OntapDeploymentType];

/**
 * @public
 * @enum
 */
export const DiskIopsConfigurationMode = {
  AUTOMATIC: "AUTOMATIC",
  USER_PROVISIONED: "USER_PROVISIONED",
} as const;

/**
 * @public
 */
export type DiskIopsConfigurationMode = (typeof DiskIopsConfigurationMode)[keyof typeof DiskIopsConfigurationMode];

/**
 * @public
 * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx
 *             automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per
 *             GB of storage. The configuration consists of the total number of provisioned SSD IOPS
 *             and how it is was provisioned, or the mode (by the customer or by Amazon FSx).</p>
 */
export interface DiskIopsConfiguration {
  /**
   * @public
   * <p>Specifies whether the file system is
   *             using the <code>AUTOMATIC</code> setting of SSD IOPS of 3 IOPS per GB of storage capacity, , or
   *             if it using a <code>USER_PROVISIONED</code> value.</p>
   */
  Mode?: DiskIopsConfigurationMode | string;

  /**
   * @public
   * <p>The total number of SSD IOPS provisioned for the file system.</p>
   */
  Iops?: number;
}

/**
 * @public
 * <p>An Amazon FSx for NetApp ONTAP file system has two endpoints
 *             that are used to access data or to manage the file system
 *             using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They
 *             are the <code>Management</code> and <code>Intercluster</code> endpoints.</p>
 */
export interface FileSystemEndpoint {
  /**
   * @public
   * <p>The file system's DNS name. You can mount your file
   *             system using its DNS name.</p>
   */
  DNSName?: string;

  /**
   * @public
   * <p>IP addresses of the file system endpoint.</p>
   */
  IpAddresses?: string[];
}

/**
 * @public
 * <p>An Amazon FSx for NetApp ONTAP file system has the following endpoints
 *             that are used to access data or to manage the file system using the
 *             NetApp ONTAP CLI, REST API, or NetApp SnapMirror.</p>
 */
export interface FileSystemEndpoints {
  /**
   * @public
   * <p>An endpoint for managing your file system by setting up NetApp SnapMirror
   *             with other ONTAP systems.</p>
   */
  Intercluster?: FileSystemEndpoint;

  /**
   * @public
   * <p>An endpoint for managing your file system using the NetApp ONTAP CLI
   *             and NetApp ONTAP API.</p>
   */
  Management?: FileSystemEndpoint;
}

/**
 * @public
 * <p>Configuration for the FSx for NetApp ONTAP file system.</p>
 */
export interface OntapFileSystemConfiguration {
  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The <code>Management</code> and <code>Intercluster</code> endpoints
   *             that are used to access data or to manage the file system using the
   *             NetApp ONTAP CLI, REST API, or NetApp SnapMirror.</p>
   */
  Endpoints?: FileSystemEndpoints;

  /**
   * @public
   * <p>The SSD IOPS configuration for the ONTAP file system, specifying
   *             the number of provisioned IOPS and the provision mode.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * @public
   * <p>The ID for a subnet. A <i>subnet</i> is a range of IP addresses in
   *             your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the
   *                 <i>Amazon VPC User Guide.</i>
   *          </p>
   */
  PreferredSubnetId?: string;

  /**
   * @public
   * <p>(Multi-AZ only) The VPC route tables in which your file system's endpoints are
   *             created.</p>
   */
  RouteTableIds?: string[];

  /**
   * @public
   * <p>The sustained throughput of an Amazon FSx file system in Megabytes per second (MBps).</p>
   */
  ThroughputCapacity?: number;

  /**
   * @public
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
   * @public
   * <p>You can use the <code>fsxadmin</code> user account to access the NetApp ONTAP CLI and
   *         REST API. The password value is always redacted in the response.</p>
   */
  FsxAdminPassword?: string;
}

/**
 * @public
 * @enum
 */
export const OpenZFSDeploymentType = {
  MULTI_AZ_1: "MULTI_AZ_1",
  SINGLE_AZ_1: "SINGLE_AZ_1",
  SINGLE_AZ_2: "SINGLE_AZ_2",
} as const;

/**
 * @public
 */
export type OpenZFSDeploymentType = (typeof OpenZFSDeploymentType)[keyof typeof OpenZFSDeploymentType];

/**
 * @public
 * <p>The configuration for the Amazon FSx for OpenZFS file system. </p>
 */
export interface OpenZFSFileSystemConfiguration {
  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
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
   * @public
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code> and you specify one or more tags, only the specified tags are
   *             copied to snapshots. If you specify one or more tags when creating the snapshot, no tags
   *             are copied from the volume, regardless of this value. </p>
   */
  CopyTagsToVolumes?: boolean;

  /**
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>Specifies the file-system deployment type. Amazon FSx for OpenZFS supports  <code>MULTI_AZ_1</code>, <code>SINGLE_AZ_1</code>, and <code>SINGLE_AZ_2</code>.</p>
   */
  DeploymentType?: OpenZFSDeploymentType | string;

  /**
   * @public
   * <p>The throughput of an Amazon FSx file system, measured in megabytes per second (MBps).</p>
   */
  ThroughputCapacity?: number;

  /**
   * @public
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
   * @public
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx
   *             automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per
   *             GB of storage. The configuration consists of the total number of provisioned SSD IOPS
   *             and how it is was provisioned, or the mode (by the customer or by Amazon FSx).</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * @public
   * <p>The ID of the root volume of the OpenZFS file system. </p>
   */
  RootVolumeId?: string;

  /**
   * @public
   * <p>Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This
   *             specifies the subnet in which you want the preferred file server to be located.</p>
   */
  PreferredSubnetId?: string;

  /**
   * @public
   * <p>(Multi-AZ only) Specifies the IP address range in which the endpoints to access your
   *             file system will be created. By default in the Amazon FSx  API and Amazon FSx console, Amazon FSx
   *             selects an available /28 IP address range for you from one of the VPC's CIDR ranges.
   *             You can have overlapping endpoint IP addresses for file systems deployed in the
   *             same VPC/route tables.</p>
   */
  EndpointIpAddressRange?: string;

  /**
   * @public
   * <p>(Multi-AZ only) The VPC route tables in which your file system's endpoints are
   *             created.</p>
   */
  RouteTableIds?: string[];

  /**
   * @public
   * <p>The IP address of the endpoint
   *             that is used to access data or to manage the file system.</p>
   */
  EndpointIpAddress?: string;
}

/**
 * @public
 * @enum
 */
export const StorageType = {
  HDD: "HDD",
  SSD: "SSD",
} as const;

/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 * <p>Specifies a key-value pair for a resource tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>A value that specifies the <code>TagKey</code>, the name of the tag. Tag keys must
   *             be unique for the resource to which they are attached.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>A value that specifies the <code>TagValue</code>, the value assigned to the
   *             corresponding tag key. Tag values can be null and don't have to be unique in a tag set.
   *             For example, you can have a key-value pair in a tag set of <code>finances : April</code>
   *             and also of <code>payroll : April</code>.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AliasLifecycle = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type AliasLifecycle = (typeof AliasLifecycle)[keyof typeof AliasLifecycle];

/**
 * @public
 * <p>A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using
 *             user-defined DNS names, in addition to the default DNS name
 *             that Amazon FSx assigns to the file system. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a>
 *             in the <i>FSx for Windows File Server User Guide</i>.</p>
 */
export interface Alias {
  /**
   * @public
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
   * @public
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

/**
 * @public
 * @enum
 */
export const WindowsAccessAuditLogLevel = {
  DISABLED: "DISABLED",
  FAILURE_ONLY: "FAILURE_ONLY",
  SUCCESS_AND_FAILURE: "SUCCESS_AND_FAILURE",
  SUCCESS_ONLY: "SUCCESS_ONLY",
} as const;

/**
 * @public
 */
export type WindowsAccessAuditLogLevel = (typeof WindowsAccessAuditLogLevel)[keyof typeof WindowsAccessAuditLogLevel];

/**
 * @public
 * <p>The configuration that Amazon FSx for Windows File Server uses to audit and log
 *             user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server
 *             file system. For more information,
 *             see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/file-access-auditing.html">
 *                 File access auditing</a>.</p>
 */
export interface WindowsAuditLogConfiguration {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the destination of the audit logs.
   *             The destination can be any Amazon CloudWatch Logs log group ARN or
   *             Amazon Kinesis Data Firehose delivery stream ARN.</p>
   *          <p>The name of the Amazon CloudWatch Logs log group must begin with
   *             the <code>/aws/fsx</code> prefix. The name of the Amazon Kinesis Data
   *             Firehose delivery stream must begin with the <code>aws-fsx</code> prefix.</p>
   *          <p>The destination ARN (either CloudWatch Logs log group or Kinesis
   *             Data Firehose delivery stream) must be in the same Amazon Web Services partition,
   *             Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.</p>
   */
  AuditLogDestination?: string;
}

/**
 * @public
 * @enum
 */
export const WindowsDeploymentType = {
  MULTI_AZ_1: "MULTI_AZ_1",
  SINGLE_AZ_1: "SINGLE_AZ_1",
  SINGLE_AZ_2: "SINGLE_AZ_2",
} as const;

/**
 * @public
 */
export type WindowsDeploymentType = (typeof WindowsDeploymentType)[keyof typeof WindowsDeploymentType];

/**
 * @public
 * @enum
 */
export const FileSystemMaintenanceOperation = {
  BACKING_UP: "BACKING_UP",
  PATCHING: "PATCHING",
} as const;

/**
 * @public
 */
export type FileSystemMaintenanceOperation =
  (typeof FileSystemMaintenanceOperation)[keyof typeof FileSystemMaintenanceOperation];

/**
 * @public
 * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
 *             which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.</p>
 */
export interface SelfManagedActiveDirectoryAttributes {
  /**
   * @public
   * <p>The fully qualified domain name of the self-managed AD directory.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The fully qualified distinguished name of the organizational unit within the
   *             self-managed AD directory to which the Windows File Server  or ONTAP storage virtual machine (SVM) instance is joined.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * @public
   * <p>The name of the domain group whose members have administrative privileges for the FSx
   *             file system.</p>
   */
  FileSystemAdministratorsGroup?: string;

  /**
   * @public
   * <p>The user name for the service account on your self-managed AD domain that FSx uses to
   *             join to your AD domain.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>A list of up to three IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory.</p>
   */
  DnsIps?: string[];
}

/**
 * @public
 * <p>The configuration for this Microsoft Windows file system.</p>
 */
export interface WindowsFileSystemConfiguration {
  /**
   * @public
   * <p>The ID for an existing Amazon Web Services Managed Microsoft Active Directory instance that the file system is joined to.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * @public
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
   *             which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;

  /**
   * @public
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
   * @public
   * <p>For <code>MULTI_AZ_1</code> deployment types, use this endpoint when performing administrative tasks on the file system using
   *             Amazon FSx Remote PowerShell.</p>
   *          <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this is the DNS name of the file system.</p>
   *          <p>This endpoint is temporarily unavailable when the file system is undergoing maintenance.</p>
   */
  RemoteAdministrationEndpoint?: string;

  /**
   * @public
   * <p>For <code>MULTI_AZ_1</code> deployment types, it specifies the ID of the subnet where the preferred file server is located.
   *             Must be one of the two subnet IDs specified in <code>SubnetIds</code> property.
   *             Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server.</p>
   *          <p>For <code>SINGLE_AZ_1</code> and <code>SINGLE_AZ_2</code> deployment types, this value is the same as that for <code>SubnetIDs</code>.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html#single-multi-az-resources">Availability and durability: Single-AZ and Multi-AZ file systems</a>.</p>
   */
  PreferredSubnetId?: string;

  /**
   * @public
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
   * @public
   * <p>The throughput of the Amazon FSx file system, measured in megabytes per
   *             second.</p>
   */
  ThroughputCapacity?: number;

  /**
   * @public
   * <p>The list of maintenance operations in progress for this file system.</p>
   */
  MaintenanceOperationsInProgress?: (FileSystemMaintenanceOperation | string)[];

  /**
   * @public
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * @public
   * <p>The preferred time to take daily automatic backups, in the UTC time zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this to 0 disables automatic
   *             backups. You can retain automatic backups for a maximum of 90 days.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The configuration that Amazon FSx for Windows File Server uses to audit and log
   *             user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server
   *             file system.</p>
   */
  AuditLogConfiguration?: WindowsAuditLogConfiguration;

  /**
   * @public
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for Windows file system.
   *             By default, Amazon FSx automatically provisions 3 IOPS per GiB of storage capacity. You can provision additional
   *             IOPS per GiB of storage, up to the maximum limit associated with your chosen throughput capacity.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;
}

/**
 * @public
 * @enum
 */
export const SnapshotLifecycle = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type SnapshotLifecycle = (typeof SnapshotLifecycle)[keyof typeof SnapshotLifecycle];

/**
 * @public
 * <p>Describes why a resource lifecycle state changed.</p>
 */
export interface LifecycleTransitionReason {
  /**
   * @public
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const VolumeLifecycle = {
  AVAILABLE: "AVAILABLE",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MISCONFIGURED: "MISCONFIGURED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type VolumeLifecycle = (typeof VolumeLifecycle)[keyof typeof VolumeLifecycle];

/**
 * @public
 * @enum
 */
export const FlexCacheEndpointType = {
  CACHE: "CACHE",
  NONE: "NONE",
  ORIGIN: "ORIGIN",
} as const;

/**
 * @public
 */
export type FlexCacheEndpointType = (typeof FlexCacheEndpointType)[keyof typeof FlexCacheEndpointType];

/**
 * @public
 * @enum
 */
export const OntapVolumeType = {
  DP: "DP",
  LS: "LS",
  RW: "RW",
} as const;

/**
 * @public
 */
export type OntapVolumeType = (typeof OntapVolumeType)[keyof typeof OntapVolumeType];

/**
 * @public
 * @enum
 */
export const SecurityStyle = {
  MIXED: "MIXED",
  NTFS: "NTFS",
  UNIX: "UNIX",
} as const;

/**
 * @public
 */
export type SecurityStyle = (typeof SecurityStyle)[keyof typeof SecurityStyle];

/**
 * @public
 * @enum
 */
export const AutocommitPeriodType = {
  DAYS: "DAYS",
  HOURS: "HOURS",
  MINUTES: "MINUTES",
  MONTHS: "MONTHS",
  NONE: "NONE",
  YEARS: "YEARS",
} as const;

/**
 * @public
 */
export type AutocommitPeriodType = (typeof AutocommitPeriodType)[keyof typeof AutocommitPeriodType];

/**
 * @public
 * <p>Sets the autocommit period of files in an FSx for ONTAP SnapLock volume, which determines
 *             how long the files must
 *         remain unmodified before they're automatically transitioned to the write once, read many (WORM) state.
 *         </p>
 *          <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-autocommit">Autocommit</a>. </p>
 */
export interface AutocommitPeriod {
  /**
   * @public
   * <p>Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.
   *         Setting this value to <code>NONE</code> disables autocommit. The default value is <code>NONE</code>. </p>
   */
  Type: AutocommitPeriodType | string | undefined;

  /**
   * @public
   * <p>Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.
   *         The following ranges are valid: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minutes</code>: 5 - 65,535</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Hours</code>: 1 - 65,535</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Days</code>: 1 - 3,650</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Months</code>: 1 - 120</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Years</code>: 1 - 10</p>
   *             </li>
   *          </ul>
   */
  Value?: number;
}

/**
 * @public
 * @enum
 */
export const PrivilegedDelete = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  PERMANENTLY_DISABLED: "PERMANENTLY_DISABLED",
} as const;

/**
 * @public
 */
export type PrivilegedDelete = (typeof PrivilegedDelete)[keyof typeof PrivilegedDelete];

/**
 * @public
 * @enum
 */
export const RetentionPeriodType = {
  DAYS: "DAYS",
  HOURS: "HOURS",
  INFINITE: "INFINITE",
  MINUTES: "MINUTES",
  MONTHS: "MONTHS",
  SECONDS: "SECONDS",
  UNSPECIFIED: "UNSPECIFIED",
  YEARS: "YEARS",
} as const;

/**
 * @public
 */
export type RetentionPeriodType = (typeof RetentionPeriodType)[keyof typeof RetentionPeriodType];

/**
 * @public
 * <p>Specifies the retention period of an FSx for ONTAP SnapLock volume.  After it is set, it can't be changed.
 *             Files can't be
 *         deleted or modified during the retention period. </p>
 *          <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html">Working with the retention
 *                 period in SnapLock</a>. </p>
 */
export interface RetentionPeriod {
  /**
   * @public
   * <p>Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.
   *             Set it to
   *             one of the valid types. If you set it to <code>INFINITE</code>, the files are retained forever. If you set it to
   *             <code>UNSPECIFIED</code>, the files are retained until you set an explicit retention period. </p>
   */
  Type: RetentionPeriodType | string | undefined;

  /**
   * @public
   * <p>Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.
   *         You can't set a value for <code>INFINITE</code> or <code>UNSPECIFIED</code>. For all other options, the
   *         following ranges are valid: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Seconds</code>: 0 - 65,535</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Minutes</code>: 0 - 65,535</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Hours</code>: 0 - 24</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Days</code>: 0 - 365</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Months</code>: 0 - 12</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Years</code>: 0 - 100</p>
   *             </li>
   *          </ul>
   */
  Value?: number;
}

/**
 * @public
 * <p>The configuration to set the retention period of an FSx for ONTAP SnapLock volume. The retention
 *         period includes default, maximum, and minimum settings. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html">Working with the retention period
 *             in SnapLock</a>. </p>
 */
export interface SnaplockRetentionPeriod {
  /**
   * @public
   * <p>The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an
   *             FSx for ONTAP SnapLock volume. The default retention period must be greater than or equal to
   *         the minimum retention period and less than or equal to the maximum retention period. </p>
   */
  DefaultRetention: RetentionPeriod | undefined;

  /**
   * @public
   * <p>The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume. </p>
   */
  MinimumRetention: RetentionPeriod | undefined;

  /**
   * @public
   * <p>The longest retention period that can be assigned to a WORM file on
   *             an FSx for ONTAP SnapLock volume. </p>
   */
  MaximumRetention: RetentionPeriod | undefined;
}

/**
 * @public
 * @enum
 */
export const SnaplockType = {
  COMPLIANCE: "COMPLIANCE",
  ENTERPRISE: "ENTERPRISE",
} as const;

/**
 * @public
 */
export type SnaplockType = (typeof SnaplockType)[keyof typeof SnaplockType];

/**
 * @public
 * <p>Specifies the SnapLock configuration for an FSx for ONTAP SnapLock volume. </p>
 */
export interface SnaplockConfiguration {
  /**
   * @public
   * <p>Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default
   *             value is <code>false</code>. If you set <code>AuditLogVolume</code> to <code>true</code>, the SnapLock volume is
   *             created as an audit log volume. The minimum retention period for an audit log volume is six months. </p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-snaplock-works.html#snaplock-audit-log-volume">
   *                 SnapLock audit log volumes</a>. </p>
   */
  AuditLogVolume?: boolean;

  /**
   * @public
   * <p>The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. </p>
   */
  AutocommitPeriod?: AutocommitPeriod;

  /**
   * @public
   * <p>Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock
   *             Enterprise volume. Enabling privileged delete allows SnapLock administrators to delete write once, read
   *             many (WORM) files even
   *             if they have active retention periods. <code>PERMANENTLY_DISABLED</code> is a terminal state.
   *             If privileged delete is permanently disabled on a SnapLock volume, you can't re-enable it. The default
   *             value is <code>DISABLED</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#privileged-delete">Privileged delete</a>. </p>
   */
  PrivilegedDelete?: PrivilegedDelete | string;

  /**
   * @public
   * <p>Specifies the retention period of an FSx for ONTAP SnapLock volume. </p>
   */
  RetentionPeriod?: SnaplockRetentionPeriod;

  /**
   * @public
   * <p>Specifies the retention mode of an FSx for ONTAP SnapLock volume.  After it is set, it can't be changed.
   *             You can choose one of the following retention modes: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANCE</code>: Files transitioned to write once, read many (WORM) on a Compliance volume can't be deleted
   *                     until their retention periods expire. This retention mode is used to address government or industry-specific mandates or to protect
   *                     against ransomware attacks. For more information,
   *                     see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-compliance.html">SnapLock Compliance</a>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENTERPRISE</code>: Files transitioned to WORM on an Enterprise volume can be deleted by authorized users
   *                 before their retention periods expire using privileged delete. This retention mode is used to advance an organization's data integrity
   *                 and internal compliance or to test retention settings before using SnapLock Compliance. For more information, see
   *                 <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html">SnapLock Enterprise</a>. </p>
   *             </li>
   *          </ul>
   */
  SnaplockType?: SnaplockType | string;

  /**
   * @public
   * <p>Enables or disables volume-append mode
   *             on an FSx for ONTAP SnapLock volume. Volume-append mode allows you to
   *             create WORM-appendable files and write data to them incrementally.
   *             The default value is <code>false</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-append">Volume-append mode</a>. </p>
   */
  VolumeAppendModeEnabled?: boolean;
}

/**
 * @public
 * @enum
 */
export const TieringPolicyName = {
  ALL: "ALL",
  AUTO: "AUTO",
  NONE: "NONE",
  SNAPSHOT_ONLY: "SNAPSHOT_ONLY",
} as const;

/**
 * @public
 */
export type TieringPolicyName = (typeof TieringPolicyName)[keyof typeof TieringPolicyName];

/**
 * @public
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
   * @public
   * <p>Specifies the number of days that user data in a volume must remain inactive before it is considered "cold"
   *             and moved to the capacity pool. Used with the <code>AUTO</code> and <code>SNAPSHOT_ONLY</code> tiering policies.
   *             Enter a whole number between 2 and 183. Default values are 31 days for <code>AUTO</code> and 2 days for
   *             <code>SNAPSHOT_ONLY</code>.</p>
   */
  CoolingPeriod?: number;

  /**
   * @public
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
 * @public
 * <p>The configuration of an Amazon FSx for NetApp ONTAP volume.</p>
 */
export interface OntapVolumeConfiguration {
  /**
   * @public
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
   * @public
   * <p>Specifies the directory that network-attached storage (NAS) clients use to mount the
   *             volume, along with the storage virtual machine (SVM) Domain Name System (DNS) name or IP
   *             address. You can create a <code>JunctionPath</code> directly below a parent volume
   *             junction or on a directory within a volume. A <code>JunctionPath</code> for a volume
   *             named <code>vol3</code> might be <code>/vol1/vol2/vol3</code>, or
   *                 <code>/vol1/dir2/vol3</code>, or even <code>/dir1/dir2/vol3</code>.</p>
   */
  JunctionPath?: string;

  /**
   * @public
   * <p>The security style for the volume, which can be <code>UNIX</code>, <code>NTFS</code>,
   *             or
   *                 <code>MIXED</code>.</p>
   */
  SecurityStyle?: SecurityStyle | string;

  /**
   * @public
   * <p>The configured size of the volume, in megabytes (MBs).</p>
   */
  SizeInMegabytes?: number;

  /**
   * @public
   * <p>The volume's storage efficiency setting.</p>
   */
  StorageEfficiencyEnabled?: boolean;

  /**
   * @public
   * <p>The ID of the volume's storage virtual machine.</p>
   */
  StorageVirtualMachineId?: string;

  /**
   * @public
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
   * @public
   * <p>The volume's <code>TieringPolicy</code> setting.</p>
   */
  TieringPolicy?: TieringPolicy;

  /**
   * @public
   * <p>The volume's universally unique identifier (UUID).</p>
   */
  UUID?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to
   *             false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups
   *             where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the
   *             specified tags are copied to backups. If you specify one or more tags when creating a user-initiated
   *             backup, no tags are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * @public
   * <p>The SnapLock configuration object for an FSx for ONTAP SnapLock volume. </p>
   */
  SnaplockConfiguration?: SnaplockConfiguration;
}

/**
 * @public
 * @enum
 */
export const OpenZFSDataCompressionType = {
  LZ4: "LZ4",
  NONE: "NONE",
  ZSTD: "ZSTD",
} as const;

/**
 * @public
 */
export type OpenZFSDataCompressionType = (typeof OpenZFSDataCompressionType)[keyof typeof OpenZFSDataCompressionType];

/**
 * @public
 * <p>Specifies who can mount an OpenZFS file system and the options available while
 *             mounting the file system.</p>
 */
export interface OpenZFSClientConfiguration {
  /**
   * @public
   * <p>A value that specifies who can mount the file system. You can provide a wildcard
   *             character (<code>*</code>), an IP address (<code>0.0.0.0</code>), or a CIDR address
   *                 (<code>192.0.2.0/24</code>). By default, Amazon FSx uses the wildcard
   *             character when specifying the client. </p>
   */
  Clients: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The Network File System (NFS) configurations for mounting an Amazon FSx for
 *             OpenZFS file system. </p>
 */
export interface OpenZFSNfsExport {
  /**
   * @public
   * <p>A list of configuration objects that contain the client and options for mounting the
   *             OpenZFS file system. </p>
   */
  ClientConfigurations: OpenZFSClientConfiguration[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OpenZFSCopyStrategy = {
  CLONE: "CLONE",
  FULL_COPY: "FULL_COPY",
} as const;

/**
 * @public
 */
export type OpenZFSCopyStrategy = (typeof OpenZFSCopyStrategy)[keyof typeof OpenZFSCopyStrategy];

/**
 * @public
 * <p>The snapshot configuration to use when creating an OpenZFS volume from a
 *             snapshot.</p>
 */
export interface OpenZFSOriginSnapshotConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  SnapshotARN?: string;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const OpenZFSQuotaType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;

/**
 * @public
 */
export type OpenZFSQuotaType = (typeof OpenZFSQuotaType)[keyof typeof OpenZFSQuotaType];

/**
 * @public
 * <p>The configuration for how much storage a user or group can use on the volume. </p>
 */
export interface OpenZFSUserOrGroupQuota {
  /**
   * @public
   * <p>A value that specifies whether the quota applies to a user or group.</p>
   */
  Type: OpenZFSQuotaType | string | undefined;

  /**
   * @public
   * <p>The ID of the user or group.</p>
   */
  Id: number | undefined;

  /**
   * @public
   * <p>The amount of storage that the user or group can use in gibibytes (GiB).</p>
   */
  StorageCapacityQuotaGiB: number | undefined;
}

/**
 * @public
 * <p>The configuration of an Amazon FSx for OpenZFS volume.</p>
 */
export interface OpenZFSVolumeConfiguration {
  /**
   * @public
   * <p>The ID of the parent volume.</p>
   */
  ParentVolumeId?: string;

  /**
   * @public
   * <p>The path to the volume from the root volume. For example,
   *                 <code>fsx/parentVolume/volume1</code>.</p>
   */
  VolumePath?: string;

  /**
   * @public
   * <p>The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't
   *             reserve more storage than the parent volume has reserved.</p>
   */
  StorageCapacityReservationGiB?: number;

  /**
   * @public
   * <p>The maximum amount of storage in gibibtyes (GiB) that the volume can use from its
   *             parent. You can specify a quota larger than the storage on the parent volume.</p>
   */
  StorageCapacityQuotaGiB?: number;

  /**
   * @public
   * <p>The record size of an OpenZFS volume, in kibibytes (KiB). Valid values are 4, 8,
   *             16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB.
   *             Most workloads should use the default record size. For guidance on when
   *             to set a custom record size, see the
   *             <i>Amazon FSx for OpenZFS User Guide</i>.</p>
   */
  RecordSizeKiB?: number;

  /**
   * @public
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
   * @public
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code> and you specify one or more tags, only the specified tags are
   *             copied to snapshots. If you specify one or more tags when creating the snapshot, no tags
   *             are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToSnapshots?: boolean;

  /**
   * @public
   * <p>The configuration object that specifies the snapshot to use as the origin of the data
   *             for the volume.</p>
   */
  OriginSnapshot?: OpenZFSOriginSnapshotConfiguration;

  /**
   * @public
   * <p>A Boolean value indicating whether the volume is read-only.</p>
   */
  ReadOnly?: boolean;

  /**
   * @public
   * <p>The configuration object for mounting a Network File System (NFS)
   *             file system.</p>
   */
  NfsExports?: OpenZFSNfsExport[];

  /**
   * @public
   * <p>An object specifying how much storage users or groups can use on the volume.</p>
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[];

  /**
   * @public
   * <p>Specifies the ID of the snapshot to which the volume was restored.</p>
   */
  RestoreToSnapshot?: string;

  /**
   * @public
   * <p>A Boolean value indicating whether snapshots between the
   *             current state and the specified snapshot should be deleted
   *             when a volume is restored from snapshot.</p>
   */
  DeleteIntermediateSnaphots?: boolean;

  /**
   * @public
   * <p>A Boolean value indicating whether dependent clone volumes
   *             created from intermediate snapshots should be deleted when
   *             a volume is restored from snapshot.</p>
   */
  DeleteClonedVolumes?: boolean;
}

/**
 * @public
 * @enum
 */
export const VolumeType = {
  ONTAP: "ONTAP",
  OPENZFS: "OPENZFS",
} as const;

/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * @public
 * <p>The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.</p>
 */
export interface AssociateFileSystemAliasesRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Specifies the file system with which you want to associate one or more DNS aliases.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The system generated response showing the DNS aliases that
 *             Amazon FSx is attempting to associate with the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             associating with the file system. It can take up to 2.5 minutes for
 *         the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>. </p>
 */
export interface AssociateFileSystemAliasesResponse {
  /**
   * @public
   * <p>An array of the DNS aliases that Amazon FSx is associating with the file system.</p>
   */
  Aliases?: Alias[];
}

/**
 * @public
 * <p>A generic error indicating a failure with a client request.</p>
 */
export class BadRequest extends __BaseException {
  readonly name: "BadRequest" = "BadRequest";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 */
export class FileSystemNotFound extends __BaseException {
  readonly name: "FileSystemNotFound" = "FileSystemNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>A generic error indicating a server-side failure.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const EventType = {
  CHANGED: "CHANGED",
  DELETED: "DELETED",
  NEW: "NEW",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * <p>Describes a data repository association's automatic export policy. The
 *             <code>AutoExportPolicy</code> defines the types of updated objects on the
 *             file system that will be automatically exported to the data repository.
 *             As you create, modify, or delete files, Amazon FSx for Lustre
 *             automatically exports the defined changes asynchronously once your application finishes
 *             modifying the file.</p>
 *          <p>The <code>AutoExportPolicy</code> is only supported on Amazon FSx for Lustre file systems
 *             with a data repository association.</p>
 */
export interface AutoExportPolicy {
  /**
   * @public
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
 * @public
 * <p>Describes the data repository association's automatic import policy.
 *             The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory
 *             listings up to date by importing changes to your Amazon FSx for Lustre file system
 *             as you modify objects in a linked S3 bucket.</p>
 *          <p>The <code>AutoImportPolicy</code> is only supported on Amazon FSx for Lustre file systems
 *             with a data repository association.</p>
 */
export interface AutoImportPolicy {
  /**
   * @public
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
 * @public
 * <p>Cancels a data repository task.</p>
 */
export interface CancelDataRepositoryTaskRequest {
  /**
   * @public
   * <p>Specifies the data repository task to cancel.</p>
   */
  TaskId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataRepositoryTaskLifecycle = {
  CANCELED: "CANCELED",
  CANCELING: "CANCELING",
  EXECUTING: "EXECUTING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DataRepositoryTaskLifecycle =
  (typeof DataRepositoryTaskLifecycle)[keyof typeof DataRepositoryTaskLifecycle];

/**
 * @public
 */
export interface CancelDataRepositoryTaskResponse {
  /**
   * @public
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
   * @public
   * <p>The ID of the task being canceled.</p>
   */
  TaskId?: string;
}

/**
 * @public
 * <p>The data repository task could not be canceled because the task has already ended.</p>
 */
export class DataRepositoryTaskEnded extends __BaseException {
  readonly name: "DataRepositoryTaskEnded" = "DataRepositoryTaskEnded";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The data repository task or tasks you specified could not be found.</p>
 */
export class DataRepositoryTaskNotFound extends __BaseException {
  readonly name: "DataRepositoryTaskNotFound" = "DataRepositoryTaskNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The requested operation is not supported for this resource or API.</p>
 */
export class UnsupportedOperation extends __BaseException {
  readonly name: "UnsupportedOperation" = "UnsupportedOperation";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
 */
export class BackupNotFound extends __BaseException {
  readonly name: "BackupNotFound" = "BackupNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface CopyBackupRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the source backup. Specifies the ID of the backup that's being copied.</p>
   */
  SourceBackupId: string | undefined;

  /**
   * @public
   * <p>The source Amazon Web Services Region of the backup. Specifies the Amazon Web Services Region from which the backup is being copied. The source and destination
   *          Regions must be in the same Amazon Web Services partition. If you don't specify a
   *          Region, <code>SourceRegion</code> defaults to the Region where the request is sent from
   *          (in-Region copy).</p>
   */
  SourceRegion?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>If backup creation fails, this structure contains the details of that
 *             failure.</p>
 */
export interface BackupFailureDetails {
  /**
   * @public
   * <p>A message describing the backup-creation failure.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const BackupLifecycle = {
  AVAILABLE: "AVAILABLE",
  COPYING: "COPYING",
  CREATING: "CREATING",
  DELETED: "DELETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  TRANSFERRING: "TRANSFERRING",
} as const;

/**
 * @public
 */
export type BackupLifecycle = (typeof BackupLifecycle)[keyof typeof BackupLifecycle];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  FILE_SYSTEM: "FILE_SYSTEM",
  VOLUME: "VOLUME",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const BackupType = {
  AUTOMATIC: "AUTOMATIC",
  AWS_BACKUP: "AWS_BACKUP",
  USER_INITIATED: "USER_INITIATED",
} as const;

/**
 * @public
 */
export type BackupType = (typeof BackupType)[keyof typeof BackupType];

/**
 * @public
 * <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 */
export class IncompatibleParameterError extends __BaseException {
  readonly name: "IncompatibleParameterError" = "IncompatibleParameterError";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A parameter that is incompatible with the earlier request.</p>
   */
  Parameter: string | undefined;

  /**
   * @public
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
 * @public
 * <p>Amazon FSx doesn't support Multi-AZ Windows File Server copy backup in the
 *          destination Region, so the copied backup can't be restored.</p>
 */
export class IncompatibleRegionForMultiAZ extends __BaseException {
  readonly name: "IncompatibleRegionForMultiAZ" = "IncompatibleRegionForMultiAZ";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The Key Management Service (KMS) key of the destination backup is not
 *          valid.</p>
 */
export class InvalidDestinationKmsKey extends __BaseException {
  readonly name: "InvalidDestinationKmsKey" = "InvalidDestinationKmsKey";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The Region provided for <code>SourceRegion</code> is not valid or is in a different
 *             Amazon Web Services partition.</p>
 */
export class InvalidRegion extends __BaseException {
  readonly name: "InvalidRegion" = "InvalidRegion";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The Key Management Service (KMS) key of the source backup is not
 *          valid.</p>
 */
export class InvalidSourceKmsKey extends __BaseException {
  readonly name: "InvalidSourceKmsKey" = "InvalidSourceKmsKey";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const ServiceLimit = {
  FILE_CACHE_COUNT: "FILE_CACHE_COUNT",
  FILE_SYSTEM_COUNT: "FILE_SYSTEM_COUNT",
  STORAGE_VIRTUAL_MACHINES_PER_FILE_SYSTEM: "STORAGE_VIRTUAL_MACHINES_PER_FILE_SYSTEM",
  TOTAL_IN_PROGRESS_COPY_BACKUPS: "TOTAL_IN_PROGRESS_COPY_BACKUPS",
  TOTAL_SSD_IOPS: "TOTAL_SSD_IOPS",
  TOTAL_STORAGE: "TOTAL_STORAGE",
  TOTAL_THROUGHPUT_CAPACITY: "TOTAL_THROUGHPUT_CAPACITY",
  TOTAL_USER_INITIATED_BACKUPS: "TOTAL_USER_INITIATED_BACKUPS",
  TOTAL_USER_TAGS: "TOTAL_USER_TAGS",
  VOLUMES_PER_FILE_SYSTEM: "VOLUMES_PER_FILE_SYSTEM",
} as const;

/**
 * @public
 */
export type ServiceLimit = (typeof ServiceLimit)[keyof typeof ServiceLimit];

/**
 * @public
 * <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 */
export class ServiceLimitExceeded extends __BaseException {
  readonly name: "ServiceLimitExceeded" = "ServiceLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Enumeration of the service limit that was exceeded. </p>
   */
  Limit: ServiceLimit | string | undefined;

  /**
   * @public
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
 * @public
 * <p>The request was rejected because the lifecycle status of the source backup isn't
 *             <code>AVAILABLE</code>.</p>
 */
export class SourceBackupUnavailable extends __BaseException {
  readonly name: "SourceBackupUnavailable" = "SourceBackupUnavailable";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Another backup is already under way. Wait for completion before initiating
 *             additional backups of this file system.</p>
 */
export class BackupInProgress extends __BaseException {
  readonly name: "BackupInProgress" = "BackupInProgress";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The request object for the <code>CreateBackup</code> operation.</p>
 */
export interface CreateBackupRequest {
  /**
   * @public
   * <p>The ID of the file system to back up.</p>
   */
  FileSystemId?: string;

  /**
   * @public
   * <p>(Optional) A string of up to 63 ASCII characters that Amazon FSx uses to
   *             ensure idempotent creation. This string is automatically filled on your behalf when you
   *             use the Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>(Optional) The tags to apply to the backup at backup creation. The key value of the
   *                 <code>Name</code> tag appears in the console as the backup name. If you have set
   *                 <code>CopyTagsToBackups</code> to <code>true</code>, and you specify one or more
   *             tags using the <code>CreateBackup</code> operation, no existing file system tags are
   *             copied from the file system to the backup.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>(Optional) The ID of the FSx for ONTAP volume to back up.</p>
   */
  VolumeId?: string;
}

/**
 * @public
 * <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 */
export class VolumeNotFound extends __BaseException {
  readonly name: "VolumeNotFound" = "VolumeNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
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
   * @public
   * <p>Specifies the type of updated objects (new, changed, deleted)
   *             that will be automatically imported from the linked S3 bucket
   *             to your file system.</p>
   */
  AutoImportPolicy?: AutoImportPolicy;

  /**
   * @public
   * <p>Specifies the type of updated objects (new, changed, deleted)
   *             that will be automatically exported from your file system to
   *             the linked S3 bucket.</p>
   */
  AutoExportPolicy?: AutoExportPolicy;
}

/**
 * @public
 */
export interface CreateDataRepositoryAssociationRequest {
  /**
   * @public
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The path to the Amazon S3 data repository that will be linked to the file
   *             system. The path can be an S3 bucket or prefix in the format
   *             <code>s3://myBucket/myPrefix/</code>. This path specifies where in the S3
   *             data repository files will be imported from or exported to.</p>
   */
  DataRepositoryPath: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to run an import data repository task to import
   *             metadata from the data repository to the file system after the data repository
   *             association is created. Default is <code>false</code>.</p>
   */
  BatchImportMetaDataOnCreate?: boolean;

  /**
   * @public
   * <p>For files imported from a data repository, this value determines the stripe count and
   *             maximum amount of data per file (in MiB) stored on a single physical disk. The maximum
   *             number of disks that a single file can be striped across is limited by the total number
   *             of disks that make up the file system.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * @public
   * <p>The configuration for an Amazon S3 data repository linked to an
   *             Amazon FSx Lustre file system with a data repository association.
   *             The configuration defines which file events (new, changed, or
   *             deleted files or directories) are automatically imported from
   *             the linked data repository to the file system or automatically
   *             exported from the file system to the data repository.</p>
   */
  S3?: S3DataRepositoryConfiguration;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const NfsVersion = {
  NFS3: "NFS3",
} as const;

/**
 * @public
 */
export type NfsVersion = (typeof NfsVersion)[keyof typeof NfsVersion];

/**
 * @public
 * <p>The configuration for a data repository association that
 *             links an Amazon File Cache resource to an NFS data repository.</p>
 */
export interface NFSDataRepositoryConfiguration {
  /**
   * @public
   * <p>The version of the NFS (Network File System) protocol of the
   *             NFS data repository. Currently, the only supported value is
   *             <code>NFS3</code>, which indicates that the data repository must
   *             support the NFSv3 protocol.</p>
   */
  Version: NfsVersion | string | undefined;

  /**
   * @public
   * <p>A list of up to 2 IP addresses of DNS servers used to resolve
   *             the NFS file system domain name. The provided IP addresses can either
   *             be the IP addresses of a DNS forwarder or resolver that the customer
   *             manages and runs inside the customer VPC, or the IP addresses of the
   *             on-premises DNS servers.</p>
   */
  DnsIps?: string[];

  /**
   * @public
   * <p>This parameter is not supported for Amazon File Cache.</p>
   */
  AutoExportPolicy?: AutoExportPolicy;
}

/**
 * @public
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
 *          <p>Data repository associations are supported on Amazon File Cache resources and
 *             all FSx for Lustre 2.12 and newer file systems, excluding
 *             <code>scratch_1</code> deployment type.</p>
 */
export interface DataRepositoryAssociation {
  /**
   * @public
   * <p>The system-generated, unique ID of the data repository association.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId?: string;

  /**
   * @public
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
   * @public
   * <p>Provides detailed information about the data repository if its <code>Lifecycle</code> is
   *             set to <code>MISCONFIGURED</code> or <code>FAILED</code>.</p>
   */
  FailureDetails?: DataRepositoryFailureDetails;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>For files imported from a data repository, this value determines the stripe count and
   *             maximum amount of data per file (in MiB) stored on a single physical disk. The maximum
   *             number of disks that a single file can be striped across is limited by the total number
   *             of disks that make up the file system or cache.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * @public
   * <p>The configuration for an Amazon S3 data repository linked to an
   *             Amazon FSx for Lustre file system with a data repository association.</p>
   */
  S3?: S3DataRepositoryConfiguration;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The globally unique ID of the Amazon File Cache resource.</p>
   */
  FileCacheId?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The configuration for an NFS data repository linked to an
   *             Amazon File Cache resource with a data repository association.</p>
   */
  NFS?: NFSDataRepositoryConfiguration;
}

/**
 * @public
 */
export interface CreateDataRepositoryAssociationResponse {
  /**
   * @public
   * <p>The response object returned after the data repository association is created.</p>
   */
  Association?: DataRepositoryAssociation;
}

/**
 * @public
 * @enum
 */
export const Unit = {
  DAYS: "DAYS",
} as const;

/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * <p>Defines the minimum amount of time since last access for a
 *             file to be eligible for release. Only archived files that were
 *             last accessed or modified before this point-in-time are eligible
 *             to be released from the Amazon FSx for Lustre file system.</p>
 */
export interface DurationSinceLastAccess {
  /**
   * @public
   * <p>The unit of time used by the <code>Value</code> parameter to
   *             determine if a file can be released, based on when it was last
   *             accessed. <code>DAYS</code> is the only supported value. This
   *             is a required parameter.</p>
   */
  Unit?: Unit | string;

  /**
   * @public
   * <p>An integer that represents the minimum amount of time (in days)
   *             since a file was last accessed in the file system. Only archived files
   *             with a <code>MAX(atime, ctime, mtime)</code> timestamp that is more than
   *             this amount of time in the past (relative to the task create time)
   *             will be released. The default of <code>Value</code> is <code>0</code>.
   *             This is a required parameter.</p>
   *          <note>
   *             <p>If an archived file meets the last accessed time criteria,
   *             its file or directory path must also be specified in the <code>Paths</code>
   *             parameter of the  operation
   *             in order for the file to be released.</p>
   *          </note>
   */
  Value?: number;
}

/**
 * @public
 * <p>The configuration that specifies a minimum amount of time since
 *             last access for an archived file to be eligible for release from an
 *             Amazon FSx for Lustre file system. Only files that were last
 *             accessed before this point-in-time can be released. For example, if
 *             you specify a last accessed time criteria of 9 days, only files that
 *             were last accessed 9.00001 or more days ago can be released.</p>
 *          <p>Only file data that has been archived can be released. Files that
 *             have not yet been archived, such as new or changed files that have
 *             not been exported, are not eligible for release. When files are
 *             released, their metadata stays on the file system, so they
 *             can still be accessed later. Users and applications can access a
 *             released file by reading the file again, which restores data from
 *             Amazon S3 to the FSx for Lustre file system.</p>
 *          <note>
 *             <p>If a file meets the last accessed time criteria, its
 *             file or directory path must also be specified with the
 *             <code>Paths</code> parameter of the
 *              operation in order
 *             for the file to be released.</p>
 *          </note>
 */
export interface ReleaseConfiguration {
  /**
   * @public
   * <p>Defines the point-in-time since an archived file was last accessed,
   *             in order for that file to be eligible for release. Only files that were
   *             last accessed before this point-in-time are eligible to be released from
   *             the file system.</p>
   */
  DurationSinceLastAccess?: DurationSinceLastAccess;
}

/**
 * @public
 * @enum
 */
export const ReportFormat = {
  REPORT_CSV_20191124: "REPORT_CSV_20191124",
} as const;

/**
 * @public
 */
export type ReportFormat = (typeof ReportFormat)[keyof typeof ReportFormat];

/**
 * @public
 * @enum
 */
export const ReportScope = {
  FAILED_FILES_ONLY: "FAILED_FILES_ONLY",
} as const;

/**
 * @public
 */
export type ReportScope = (typeof ReportScope)[keyof typeof ReportScope];

/**
 * @public
 * <p>Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter.
 *             FSx delivers the report to the file system's linked data repository in Amazon S3,
 *             using the path specified in the report <code>Path</code> parameter.
 *             You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.</p>
 */
export interface CompletionReport {
  /**
   * @public
   * <p>Set <code>Enabled</code> to <code>True</code> to generate a <code>CompletionReport</code> when the task completes.
   *             If set to <code>true</code>, then you need to provide a report <code>Scope</code>, <code>Path</code>, and <code>Format</code>.
   *             Set <code>Enabled</code> to <code>False</code> if you do not want a <code>CompletionReport</code> generated when the task completes.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the location of the report on the file system's linked S3 data repository. An absolute path that defines where the completion report will be stored in the destination location.
   *             The <code>Path</code> you provide must be located within the file system’s ExportPath.
   *             An example <code>Path</code> value is "s3://myBucket/myExportPath/optionalPrefix". The report provides the following information for each file in the report:
   *             FilePath, FileStatus, and ErrorCode.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the format of the <code>CompletionReport</code>. <code>REPORT_CSV_20191124</code> is the only format currently supported.
   *             When <code>Format</code> is set to <code>REPORT_CSV_20191124</code>, the <code>CompletionReport</code> is provided in CSV format, and is delivered to
   *             <code>\{path\}/task-\{id\}/failures.csv</code>.
   *         </p>
   */
  Format?: ReportFormat | string;

  /**
   * @public
   * <p>Required if <code>Enabled</code> is set to <code>true</code>. Specifies the scope of the <code>CompletionReport</code>; <code>FAILED_FILES_ONLY</code> is the only scope currently supported.
   *             When <code>Scope</code> is set to <code>FAILED_FILES_ONLY</code>, the <code>CompletionReport</code> only contains information about files that the data repository task failed to process.</p>
   */
  Scope?: ReportScope | string;
}

/**
 * @public
 * @enum
 */
export const DataRepositoryTaskType = {
  AUTO_TRIGGERED_EVICTION: "AUTO_RELEASE_DATA",
  EVICTION: "RELEASE_DATA_FROM_FILESYSTEM",
  EXPORT: "EXPORT_TO_REPOSITORY",
  IMPORT: "IMPORT_METADATA_FROM_REPOSITORY",
} as const;

/**
 * @public
 */
export type DataRepositoryTaskType = (typeof DataRepositoryTaskType)[keyof typeof DataRepositoryTaskType];

/**
 * @public
 */
export interface CreateDataRepositoryTaskRequest {
  /**
   * @public
   * <p>Specifies the type of data repository task to create.</p>
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
   *                   <code>RELEASE_DATA_FROM_FILESYSTEM</code> tasks release files in
   *                 your Amazon FSx for Lustre file system that are archived and that meet
   *                 your specified release criteria.</p>
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
   * @public
   * <p>A list of paths for the data repository task to use when the task is processed.
   *             If a path that you provide isn't valid, the task fails. If you don't provide
   *             paths, the default behavior is to export all files to S3 (for export tasks), import
   *             all files from S3 (for import tasks), or release all archived files that meet the
   *             last accessed time criteria (for release tasks).</p>
   *          <ul>
   *             <li>
   *                <p>For export tasks, the list contains paths on the FSx for Lustre file system
   *                 from which the files are exported to the Amazon S3 bucket. The default path is the
   *                 file system root directory. The paths you provide need to be relative to the mount
   *                 point of the file system. If the mount point is <code>/mnt/fsx</code> and
   *                 <code>/mnt/fsx/path1</code> is a directory or file on the file system you want
   *                 to export, then the path to provide is <code>path1</code>.</p>
   *             </li>
   *             <li>
   *                <p>For import tasks, the list contains paths in the Amazon S3 bucket
   *                 from which POSIX metadata changes are imported to the FSx for Lustre file system.
   *                 The path can be an S3 bucket or prefix in the format
   *                 <code>s3://myBucket/myPrefix</code> (where <code>myPrefix</code> is optional).
   *             </p>
   *             </li>
   *             <li>
   *                <p>For release tasks, the list contains directory or file paths on the
   *                 FSx for Lustre file system from which to release archived files. If a directory is
   *                 specified, files within the directory are released. If a file path is specified,
   *                 only that file is released. To release all archived files in the file system,
   *                 specify a forward slash (/) as the path.</p>
   *                <note>
   *                   <p>A file must also meet the last accessed time criteria
   *                     specified in  for the
   *                     file to be released.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  Paths?: string[];

  /**
   * @public
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
   * <p>Defines whether or not Amazon FSx provides a CompletionReport once the task has completed.
   *             A CompletionReport provides a detailed  report on the files that Amazon FSx processed that meet the criteria specified by the
   *             <code>Scope</code> parameter. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/task-completion-report.html">Working with Task Completion Reports</a>.</p>
   */
  Report: CompletionReport | undefined;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Specifies the amount of data to release, in GiB, by an Amazon File Cache
   *             <code>AUTO_RELEASE_DATA</code> task that automatically releases files from the cache.</p>
   */
  CapacityToRelease?: number;

  /**
   * @public
   * <p>The configuration that specifies the last accessed time criteria for files
   *             that will be released from an Amazon FSx for Lustre file system.</p>
   */
  ReleaseConfiguration?: ReleaseConfiguration;
}

/**
 * @public
 * <p>Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.</p>
 */
export interface DataRepositoryTaskFailureDetails {
  /**
   * @public
   * <p>A detailed error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Provides the task status showing a running total of the total number of files to be processed,
 *             the number successfully processed, and the number of files the task failed to process.</p>
 */
export interface DataRepositoryTaskStatus {
  /**
   * @public
   * <p>The total number of files that the task will process. While a task is executing, the sum of
   *             <code>SucceededCount</code> plus <code>FailedCount</code> may not equal <code>TotalCount</code>. When the task is complete,
   *             <code>TotalCount</code> equals the sum of <code>SucceededCount</code> plus <code>FailedCount</code>.</p>
   */
  TotalCount?: number;

  /**
   * @public
   * <p>A running total of the number of files that the task has successfully processed.</p>
   */
  SucceededCount?: number;

  /**
   * @public
   * <p>A running total of the number of files that the task failed to process.</p>
   */
  FailedCount?: number;

  /**
   * @public
   * <p>The time at which the task status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The total amount of data, in GiB, released by an Amazon File Cache
   *             AUTO_RELEASE_DATA task that automatically releases files from the cache.</p>
   */
  ReleasedCapacity?: number;
}

/**
 * @public
 * <p>A description of the data repository task.</p>
 *          <ul>
 *             <li>
 *                <p>You use import and export data repository tasks to perform
 *                 bulk transfer operations between an Amazon FSx for Lustre file system
 *                 and a linked data repository.</p>
 *             </li>
 *             <li>
 *                <p>You use release data repository tasks to release archived files
 *                 from your Amazon FSx for Lustre file system.</p>
 *             </li>
 *             <li>
 *                <p>An Amazon File Cache resource uses a task to automatically
 *                 release files from the cache.</p>
 *             </li>
 *          </ul>
 *          <p>To learn more about data repository tasks, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>.
 *             </p>
 */
export interface DataRepositoryTask {
  /**
   * @public
   * <p>The system-generated, unique 17-digit ID of the data repository task.</p>
   */
  TaskId: string | undefined;

  /**
   * @public
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
   * @public
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
   *                   <code>RELEASE_DATA_FROM_FILESYSTEM</code> tasks release files in
   *                 your Amazon FSx for Lustre file system that are archived and that meet
   *                 your specified release criteria.</p>
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
   * @public
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The time the system began processing the task.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time the system completed processing the task, populated after the task is complete.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The globally unique ID of the file system.</p>
   */
  FileSystemId?: string;

  /**
   * @public
   * <p>An array of paths that specify the data for the data repository task to process.
   *             For example, in an EXPORT_TO_REPOSITORY task, the paths specify which data to export
   *             to the linked data repository.</p>
   *          <p>(Default) If <code>Paths</code> is not specified, Amazon FSx uses the file system root directory.</p>
   */
  Paths?: string[];

  /**
   * @public
   * <p>Failure message describing why the task failed, it is populated only when <code>Lifecycle</code> is set to <code>FAILED</code>.</p>
   */
  FailureDetails?: DataRepositoryTaskFailureDetails;

  /**
   * @public
   * <p>Provides the status of the number of files that the task has processed successfully and failed to process.</p>
   */
  Status?: DataRepositoryTaskStatus;

  /**
   * @public
   * <p>Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter.
   *             FSx delivers the report to the file system's linked data repository in Amazon S3,
   *             using the path specified in the report <code>Path</code> parameter.
   *             You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.</p>
   */
  Report?: CompletionReport;

  /**
   * @public
   * <p>Specifies the amount of data to release, in GiB, by an Amazon File Cache
   *             AUTO_RELEASE_DATA task that automatically releases files from the cache.</p>
   */
  CapacityToRelease?: number;

  /**
   * @public
   * <p>The system-generated, unique ID of the cache.</p>
   */
  FileCacheId?: string;

  /**
   * @public
   * <p>The configuration that specifies the last accessed time criteria for files
   *             that will be released from an Amazon FSx for Lustre file system.</p>
   */
  ReleaseConfiguration?: ReleaseConfiguration;
}

/**
 * @public
 */
export interface CreateDataRepositoryTaskResponse {
  /**
   * @public
   * <p>The description of the data repository task that you just created.</p>
   */
  DataRepositoryTask?: DataRepositoryTask;
}

/**
 * @public
 * <p>An existing data repository task is currently executing on the file system.
 *         Wait until the existing task has completed, then create the new task.</p>
 */
export class DataRepositoryTaskExecuting extends __BaseException {
  readonly name: "DataRepositoryTaskExecuting" = "DataRepositoryTaskExecuting";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The configuration for an NFS data repository association (DRA)
 *             created during the creation of the Amazon File Cache resource.</p>
 */
export interface FileCacheNFSConfiguration {
  /**
   * @public
   * <p>The version of the NFS (Network File System) protocol of the
   *             NFS data repository. The only supported value is <code>NFS3</code>,
   *             which indicates that the data repository must support the NFSv3 protocol.</p>
   */
  Version: NfsVersion | string | undefined;

  /**
   * @public
   * <p>A list of up to 2 IP addresses of DNS servers used to resolve
   *             the NFS file system domain name. The provided IP addresses can either
   *             be the IP addresses of a DNS forwarder or resolver that the customer
   *             manages and runs inside the customer VPC, or the IP addresses of the
   *             on-premises DNS servers.</p>
   */
  DnsIps?: string[];
}

/**
 * @public
 * <p>The configuration for a data repository association (DRA) to
 *             be created during the Amazon File Cache resource creation. The DRA
 *             links the cache to either an Amazon S3 bucket or prefix, or a Network File
 *             System (NFS) data repository that supports the NFSv3 protocol.</p>
 *          <p>The DRA does not support automatic import or automatic
 *             export.</p>
 */
export interface FileCacheDataRepositoryAssociation {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>A list of NFS Exports that will be linked with this data repository
   *             association. The Export paths are in the format <code>/exportpath1</code>.
   *             To use this parameter, you must configure <code>DataRepositoryPath</code>
   *             as the domain name of the NFS file system. The NFS file system domain name in effect is the
   *             root of the subdirectories. Note that <code>DataRepositorySubdirectories</code>
   *             is not supported for S3 data repositories.</p>
   */
  DataRepositorySubdirectories?: string[];

  /**
   * @public
   * <p>The configuration for a data repository association that
   *             links an Amazon File Cache resource to an NFS data repository.</p>
   */
  NFS?: FileCacheNFSConfiguration;
}

/**
 * @public
 * @enum
 */
export const FileCacheType = {
  LUSTRE: "LUSTRE",
} as const;

/**
 * @public
 */
export type FileCacheType = (typeof FileCacheType)[keyof typeof FileCacheType];

/**
 * @public
 * @enum
 */
export const FileCacheLustreDeploymentType = {
  CACHE_1: "CACHE_1",
} as const;

/**
 * @public
 */
export type FileCacheLustreDeploymentType =
  (typeof FileCacheLustreDeploymentType)[keyof typeof FileCacheLustreDeploymentType];

/**
 * @public
 * <p>The configuration for a Lustre MDT (Metadata Target) storage volume.
 *             The metadata on Amazon File Cache is managed by a Lustre Metadata Server
 *             (MDS) while the actual metadata is persisted on an MDT.</p>
 */
export interface FileCacheLustreMetadataConfiguration {
  /**
   * @public
   * <p>The storage capacity of the Lustre MDT (Metadata Target) storage
   *             volume in gibibytes (GiB). The only supported value is <code>2400</code> GiB.</p>
   */
  StorageCapacity: number | undefined;
}

/**
 * @public
 * <p>The Amazon File Cache configuration for the cache that you are creating.</p>
 */
export interface CreateFileCacheLustreConfiguration {
  /**
   * @public
   * <p>Provisions the amount of read and write throughput for each 1 tebibyte (TiB)
   *             of cache storage capacity, in MB/s/TiB. The only supported
   *             value is <code>1000</code>.</p>
   */
  PerUnitStorageThroughput: number | undefined;

  /**
   * @public
   * <p>Specifies the cache deployment type, which must be <code>CACHE_1</code>.</p>
   */
  DeploymentType: FileCacheLustreDeploymentType | string | undefined;

  /**
   * @public
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
   * @public
   * <p>The configuration for a Lustre MDT (Metadata Target) storage volume.</p>
   */
  MetadataConfiguration: FileCacheLustreMetadataConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateFileCacheRequest {
  /**
   * @public
   * <p>An idempotency token for resource creation, in a string of up to 63
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
   * @public
   * <p>The type of cache that you're creating, which
   *             must be <code>LUSTRE</code>.</p>
   */
  FileCacheType: FileCacheType | string | undefined;

  /**
   * @public
   * <p>Sets the Lustre version for the cache that you're creating,
   *             which must be <code>2.12</code>.</p>
   */
  FileCacheTypeVersion: string | undefined;

  /**
   * @public
   * <p>The storage capacity of the cache in gibibytes (GiB). Valid values
   *             are 1200 GiB, 2400 GiB, and increments of 2400 GiB.</p>
   */
  StorageCapacity: number | undefined;

  /**
   * @public
   * <p>A list of subnet IDs that the cache will be accessible from. You can specify only
   *             one subnet ID in a call to the <code>CreateFileCache</code> operation.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of IDs specifying the security groups to apply to all network interfaces
   *             created for Amazon File Cache access. This list isn't returned in later requests to
   *             describe the cache.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A boolean flag indicating whether tags for the cache should be copied to
   *             data repository associations. This value defaults to false.</p>
   */
  CopyTagsToDataRepositoryAssociations?: boolean;

  /**
   * @public
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *             an Amazon File Cache. If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed
   *             KMS key for your account is used. For more information,
   *             see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The configuration for the Amazon File Cache resource being created.</p>
   */
  LustreConfiguration?: CreateFileCacheLustreConfiguration;

  /**
   * @public
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
 * @public
 * <p>A structure providing details of any failures that occurred.</p>
 */
export interface FileCacheFailureDetails {
  /**
   * @public
   * <p>A message describing any failures that occurred.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const FileCacheLifecycle = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type FileCacheLifecycle = (typeof FileCacheLifecycle)[keyof typeof FileCacheLifecycle];

/**
 * @public
 * <p>The configuration for the Amazon File Cache resource.</p>
 */
export interface FileCacheLustreConfiguration {
  /**
   * @public
   * <p>Per unit storage throughput represents the megabytes per second of read or write
   *             throughput per 1 tebibyte of storage provisioned. Cache throughput capacity is
   *             equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). The only
   *             supported value is <code>1000</code>.</p>
   */
  PerUnitStorageThroughput?: number;

  /**
   * @public
   * <p>The deployment type of the Amazon File Cache resource, which must
   *             be <code>CACHE_1</code>.</p>
   */
  DeploymentType?: FileCacheLustreDeploymentType | string;

  /**
   * @public
   * <p>You use the <code>MountName</code> value when mounting the cache. If you pass
   *             a cache ID to the <code>DescribeFileCaches</code> operation, it returns the
   *             the <code>MountName</code> value as part of the cache's description.</p>
   */
  MountName?: string;

  /**
   * @public
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
   * @public
   * <p>The configuration for a Lustre MDT (Metadata Target) storage volume.</p>
   */
  MetadataConfiguration?: FileCacheLustreMetadataConfiguration;

  /**
   * @public
   * <p>The configuration for Lustre logging used to write the enabled
   *             logging events for your Amazon File Cache resource to Amazon CloudWatch Logs.</p>
   */
  LogConfiguration?: LustreLogConfiguration;
}

/**
 * @public
 * <p>The response object for the Amazon File Cache resource being created in the
 *             <code>CreateFileCache</code> operation.</p>
 */
export interface FileCacheCreating {
  /**
   * @public
   * <p>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon
   *             Resource Names (ARNs) for resources.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The system-generated, unique ID of the cache.</p>
   */
  FileCacheId?: string;

  /**
   * @public
   * <p>The type of cache, which must be <code>LUSTRE</code>.</p>
   */
  FileCacheType?: FileCacheType | string;

  /**
   * @public
   * <p>The Lustre version of the cache, which must be <code>2.12</code>.</p>
   */
  FileCacheTypeVersion?: string;

  /**
   * @public
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
   * @public
   * <p>A structure providing details of any failures that occurred.</p>
   */
  FailureDetails?: FileCacheFailureDetails;

  /**
   * @public
   * <p>The storage capacity of the cache in gibibytes (GiB).</p>
   */
  StorageCapacity?: number;

  /**
   * @public
   * <p>The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and
   *                 subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>A list of subnet IDs that the cache will be accessible from. You can specify only
   *             one subnet ID in a call to the <code>CreateFileCache</code> operation.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>A list of network interface IDs.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>The Domain Name System (DNS) name for the cache.</p>
   */
  DNSName?: string;

  /**
   * @public
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *             an Amazon File Cache. If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed
   *             KMS key for your account is used. For more information,
   *             see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A boolean flag indicating whether tags for the cache should be copied to
   *             data repository associations.</p>
   */
  CopyTagsToDataRepositoryAssociations?: boolean;

  /**
   * @public
   * <p>The configuration for the Amazon File Cache resource.</p>
   */
  LustreConfiguration?: FileCacheLustreConfiguration;

  /**
   * @public
   * <p>A list of IDs of data repository associations that are associated with this cache.</p>
   */
  DataRepositoryAssociationIds?: string[];
}

/**
 * @public
 */
export interface CreateFileCacheResponse {
  /**
   * @public
   * <p>A description of the cache that was created.</p>
   */
  FileCache?: FileCacheCreating;
}

/**
 * @public
 * <p>One or more network settings specified in the request are invalid.</p>
 */
export class InvalidNetworkSettings extends __BaseException {
  readonly name: "InvalidNetworkSettings" = "InvalidNetworkSettings";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Error message explaining what's wrong with network settings.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The subnet ID that is either invalid or not part of the VPC specified.</p>
   */
  InvalidSubnetId?: string;

  /**
   * @public
   * <p>The security group ID is either invalid or not part of the VPC specified.</p>
   */
  InvalidSecurityGroupId?: string;

  /**
   * @public
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
 * @public
 * <p>An invalid value for <code>PerUnitStorageThroughput</code> was provided. Please create your file system again, using a valid value.</p>
 */
export class InvalidPerUnitStorageThroughput extends __BaseException {
  readonly name: "InvalidPerUnitStorageThroughput" = "InvalidPerUnitStorageThroughput";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>A cache configuration is required for this operation.</p>
 */
export class MissingFileCacheConfiguration extends __BaseException {
  readonly name: "MissingFileCacheConfiguration" = "MissingFileCacheConfiguration";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The Lustre logging configuration used when creating or updating an
 *             Amazon FSx for Lustre file system. An Amazon File Cache is created
 *             with Lustre logging enabled by default, with a setting of
 *             <code>WARN_ERROR</code> for the logging events. which can't be changed.</p>
 *          <p>Lustre logging writes the enabled logging events for your file system
 *             or cache to Amazon CloudWatch Logs.</p>
 */
export interface LustreLogCreateConfiguration {
  /**
   * @public
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
   * @public
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
 * @public
 * <p>The Lustre configuration for the file system being created.</p>
 *          <note>
 *             <p>The following parameters are not supported for file systems
 *             with a data repository association created with
 *             .</p>
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
   * @public
   * <p>(Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * @public
   * <p>(Optional) The path to the Amazon S3 bucket (including the optional prefix) that
   *             you're using as the data repository for your Amazon FSx for Lustre file system.
   *             The root of your FSx for Lustre file system will
   *             be mapped to the root of the Amazon S3 bucket you select. An
   *             example is <code>s3://import-bucket/optional-prefix</code>. If you specify a prefix
   *             after the Amazon S3 bucket name, only object keys with that prefix are loaded into the
   *             file system.</p>
   *          <note>
   *             <p>This parameter is not supported for file systems with a data repository association.</p>
   *          </note>
   */
  ImportPath?: string;

  /**
   * @public
   * <p>(Optional) Specifies the path in the Amazon S3 bucket where the root of your
   *             Amazon FSx file system is exported. The path must use the same Amazon S3
   *             bucket as specified in ImportPath. You can provide an optional prefix to which new and
   *             changed data is to be exported from your Amazon FSx for Lustre file system. If
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
   *             <p>This parameter is not supported for file systems with a data repository association.</p>
   *          </note>
   */
  ExportPath?: string;

  /**
   * @public
   * <p>(Optional) For files imported from a data repository, this value determines the stripe
   *             count and maximum amount of data per file (in MiB) stored on a single physical disk. The
   *             maximum number of disks that a single file can be striped across is limited by the total
   *             number of disks that make up the file system.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3  objects have a maximum size of 5 TB.</p>
   *          <note>
   *             <p>This parameter is not supported for file systems with a data repository association.</p>
   *          </note>
   */
  ImportedFileChunkSize?: number;

  /**
   * @public
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
   *                 systems from Amazon EC2 instances that support automatic encryption in
   *                 the Amazon Web Services Regions where they are available. For more information about
   *                 encryption in transit for FSx for Lustre file systems, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html">Encrypting data in
   *                 transit</a> in the <i>Amazon FSx for Lustre User Guide</i>. </p>
   *          <p>(Default = <code>SCRATCH_1</code>)</p>
   */
  DeploymentType?: LustreDeploymentType | string;

  /**
   * @public
   * <p> (Optional) When you create your file system, your existing S3 objects appear as file and
   *             directory listings.  Use this parameter to choose how Amazon FSx keeps your file and directory
   *             listings up to date as you add or modify objects in your linked S3 bucket. <code>AutoImportPolicy</code>
   *             can have the following values:</p>
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
   *             <p>This parameter is not supported for file systems with a data repository association.</p>
   *          </note>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * @public
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
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *             <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
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
   * @public
   * <p>The type of drive cache used by <code>PERSISTENT_1</code> file systems that are provisioned with
   *             HDD storage devices. This parameter is required when storage type is HDD. Set this property to
   *             <code>READ</code> to improve the performance for frequently accessed files by caching up to 20%
   *             of the total storage capacity of the file system.</p>
   *          <p>This parameter is required when <code>StorageType</code> is set to <code>HDD</code>.</p>
   */
  DriveCacheType?: DriveCacheType | string;

  /**
   * @public
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
   * @public
   * <p>The Lustre logging configuration used when creating an Amazon FSx for Lustre
   *             file system. When logging is enabled, Lustre logs error and warning events for data repositories
   *             associated with your file system to Amazon CloudWatch Logs.</p>
   */
  LogConfiguration?: LustreLogCreateConfiguration;

  /**
   * @public
   * <p>The Lustre root squash configuration used when creating an Amazon FSx for Lustre
   *             file system. When enabled, root squash restricts root-level access from clients that
   *             try to access your file system as a root user.</p>
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration;
}

/**
 * @public
 * <p>The ONTAP configuration properties of the FSx for ONTAP file system that you
 *             are creating.</p>
 */
export interface CreateFileSystemOntapConfiguration {
  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
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
   * @public
   * <p>(Multi-AZ only) Specifies the IP address range in which the endpoints to access your
   *             file system will be created. By default in the Amazon FSx  API, Amazon FSx
   *             selects an unused IP address range for you from the 198.19.* range. By default in the
   *             Amazon FSx  console, Amazon FSx  chooses the last 64 IP addresses from
   *             the VPC’s primary CIDR range to use as the endpoint IP address range for the file system.
   *             You can have overlapping endpoint IP addresses for file systems deployed in the
   *             same VPC/route tables, as long as they don't overlap with any subnet.</p>
   */
  EndpointIpAddressRange?: string;

  /**
   * @public
   * <p>The ONTAP administrative password for the <code>fsxadmin</code> user with which you
   *             administer your file system using the NetApp ONTAP CLI and REST API.</p>
   */
  FsxAdminPassword?: string;

  /**
   * @public
   * <p>The SSD IOPS configuration for the FSx for ONTAP file system.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * @public
   * <p>Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This
   *             specifies the subnet in which you want the preferred file server to be located.</p>
   */
  PreferredSubnetId?: string;

  /**
   * @public
   * <p>(Multi-AZ only) Specifies the virtual private cloud (VPC) route tables in which your
   *             file system's endpoints will be created. You should specify all VPC route tables
   *             associated with the subnets in which your clients are located. By default, Amazon FSx
   *             selects your VPC's default route table.</p>
   */
  RouteTableIds?: string[];

  /**
   * @public
   * <p>Sets the throughput capacity for the file system that you're creating. Valid values
   *             are 128, 256, 512, 1024, 2048, and 4096 MBps.</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * @public
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
 * @public
 * <p>The configuration of an Amazon FSx for OpenZFS root volume.</p>
 */
export interface OpenZFSCreateRootVolumeConfiguration {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>The configuration object for mounting a file system.</p>
   */
  NfsExports?: OpenZFSNfsExport[];

  /**
   * @public
   * <p>An object specifying how much storage users or groups can use on the volume.</p>
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[];

  /**
   * @public
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots
   *             of the volume. This value defaults to <code>false</code>. If it's set to <code>true</code>,
   *             all tags for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code> and you specify one or more tags, only the specified tags are
   *             copied to snapshots. If you specify one or more tags when creating the snapshot, no tags
   *             are copied from the volume, regardless of this value. </p>
   */
  CopyTagsToSnapshots?: boolean;

  /**
   * @public
   * <p>A Boolean value indicating whether the volume is read-only. Setting this value to
   *                 <code>true</code> can be useful after you have completed changes to a volume and no
   *             longer want changes to occur. </p>
   */
  ReadOnly?: boolean;
}

/**
 * @public
 * <p>The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.</p>
 */
export interface CreateFileSystemOpenZFSConfiguration {
  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
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
   * @public
   * <p>A Boolean value indicating whether tags for the file system should be copied to volumes.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the file system are copied to volumes where the user doesn't specify tags. If this
   *             value is <code>true</code>, and you specify one or more tags, only the specified tags
   *             are copied to volumes. If you specify one or more tags when creating the volume, no
   *             tags are copied from the file system, regardless of this value.</p>
   */
  CopyTagsToVolumes?: boolean;

  /**
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>Specifies the file system deployment type. Single AZ deployment types are configured
   *             for redundancy within a single Availability Zone in an Amazon Web Services Region .
   *             Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MULTI_AZ_1</code>- Creates file systems with high availability that are configured for Multi-AZ redundancy to tolerate temporary unavailability in Availability Zones (AZs).
   *                 <code>Multi_AZ_1</code> is available in the following Amazon Web Services Regions: </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SINGLE_AZ_1</code>- (Default) Creates file systems with throughput capacities of 64 - 4,096 MB/s.
   *                 <code>Single_AZ_1</code> is available in all Amazon Web Services Regions where Amazon FSx
   *                 for OpenZFS is available.</p>
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
   * @public
   * <p>Specifies the throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second (MBps). Valid values depend on the DeploymentType you choose, as follows:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>SINGLE_AZ_1</code>, valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MBps.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SINGLE_AZ_2</code>, valid values are 160, 320, 640, 1280, 2560, 3840, 5120, 7680, or 10240 MBps.</p>
   *             </li>
   *          </ul>
   *          <p>You pay for additional throughput capacity that you provision.</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * @public
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
   * @public
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx
   *             automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per
   *             GB of storage. The configuration consists of the total number of provisioned SSD IOPS
   *             and how it is was provisioned, or the mode (by the customer or by Amazon FSx).</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * @public
   * <p>The configuration Amazon FSx uses when creating the root value of the Amazon FSx for OpenZFS
   *             file system. All volumes are children of the root volume. </p>
   */
  RootVolumeConfiguration?: OpenZFSCreateRootVolumeConfiguration;

  /**
   * @public
   * <p>Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This specifies the subnet in which you want the preferred file server to be located.</p>
   */
  PreferredSubnetId?: string;

  /**
   * @public
   * <p>(Multi-AZ only) Specifies the IP address range in which the endpoints to access your
   *             file system will be created. By default in the Amazon FSx  API and Amazon FSx console, Amazon FSx
   *             selects an available /28 IP address range for you from one of the VPC's CIDR ranges.
   *             You can have overlapping endpoint IP addresses for file systems deployed in the
   *             same VPC/route tables.</p>
   */
  EndpointIpAddressRange?: string;

  /**
   * @public
   * <p>(Multi-AZ only) Specifies the virtual private cloud (VPC) route tables in which your
   *             file system's endpoints will be created. You should specify all VPC route tables
   *             associated with the subnets in which your clients are located. By default, Amazon FSx
   *             selects your VPC's default route table.</p>
   */
  RouteTableIds?: string[];
}

/**
 * @public
 * <p>The Windows file access auditing configuration used when creating
 *             or updating an Amazon FSx for Windows File Server file system.</p>
 */
export interface WindowsAuditLogCreateConfiguration {
  /**
   * @public
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
   * @public
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
   * @public
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
   *                     Firehose delivery stream must begin with the <code>aws-fsx</code> prefix.</p>
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
 * @public
 * <p>The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to
 *             a self-managed (including on-premises) Microsoft Active Directory (AD)
 *             directory. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html">
 *                 Using Amazon FSx for Windows with your self-managed Microsoft Active Directory</a> or
 *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP SVMs</a>.</p>
 */
export interface SelfManagedActiveDirectoryConfiguration {
  /**
   * @public
   * <p>The fully qualified domain name of the self-managed AD directory, such as
   *                 <code>corp.example.com</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
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
   * @public
   * <p>(Optional) The name of the domain group whose members are granted administrative
   *             privileges for the file system. Administrative privileges include taking ownership of
   *             files and folders, setting audit controls (audit ACLs) on files and folders, and
   *                 administering the file system remotely by using the FSx Remote PowerShell.
   *             The group that you specify must already exist in your domain. If you don't provide one,
   *             your AD domain's Domain Admins group is used.</p>
   */
  FileSystemAdministratorsGroup?: string;

  /**
   * @public
   * <p>The user name for the service account on your self-managed AD domain that Amazon FSx
   *             will use to join to your AD domain. This account must have the permission to join
   *             computers to the domain in the organizational unit provided in
   *                 <code>OrganizationalUnitDistinguishedName</code>, or in the default location of your
   *             AD domain.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The password for the service account on your self-managed AD domain that Amazon FSx
   *             will use to join to your AD domain.</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>A list of up to three IP addresses of DNS servers or domain controllers in the
   *             self-managed AD directory. </p>
   */
  DnsIps: string[] | undefined;
}

/**
 * @public
 * <p>The configuration object for the Microsoft Windows file system used in
 *                 <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code>
 *             operations.</p>
 */
export interface CreateFileSystemWindowsConfiguration {
  /**
   * @public
   * <p>The ID for an existing Amazon Web Services Managed Microsoft Active Directory (AD) instance that the
   *             file system should join when it's created.</p>
   */
  ActiveDirectoryId?: string;

  /**
   * @public
   * <p>The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to
   *             a self-managed (including on-premises) Microsoft Active Directory (AD)
   *             directory. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html">
   *                 Using Amazon FSx for Windows with your self-managed Microsoft Active Directory</a> or
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP SVMs</a>.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;

  /**
   * @public
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
   * @public
   * <p>Required when <code>DeploymentType</code> is set to <code>MULTI_AZ_1</code>. This specifies the subnet
   *             in which you want the preferred file server to be located. For in-Amazon Web Services applications, we recommend that you launch
   *             your clients in the same Availability Zone (AZ) as your preferred file server to reduce cross-AZ
   *             data transfer costs and minimize latency. </p>
   */
  PreferredSubnetId?: string;

  /**
   * @public
   * <p>Sets the throughput capacity of an Amazon FSx file system, measured in megabytes per second (MB/s), in 2 to
   *             the <i>n</i>th increments, between 2^3 (8) and 2^11 (2048).</p>
   */
  ThroughputCapacity: number | undefined;

  /**
   * @public
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * @public
   * <p>The preferred time to take daily automatic backups, formatted HH:MM in the UTC time
   *             zone.</p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *             <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
   * <p>A boolean flag indicating whether tags for the file system should be copied to
   *             backups. This value defaults to false. If it's set to true, all tags for the file
   *             system are copied to all automatic and user-initiated backups where the user
   *             doesn't specify tags. If this value is true, and you specify one or more tags, only
   *             the specified tags are copied to backups. If you specify one or more tags when creating a
   *             user-initiated backup, no tags are copied from the file system, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * @public
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
   * @public
   * <p>The configuration that Amazon FSx for Windows File Server uses to audit and log
   *             user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server
   *             file system.</p>
   */
  AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;

  /**
   * @public
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for Windows file system.
   *         By default, Amazon FSx automatically provisions 3 IOPS per GiB of storage capacity. You can provision additional
   *         IOPS per GiB of storage, up to the maximum limit associated with your chosen throughput capacity.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;
}

/**
 * @public
 * <p>The request object used to create a new Amazon FSx file system.</p>
 */
export interface CreateFileSystemRequest {
  /**
   * @public
   * <p>A string of up to 63 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *                 Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The type of Amazon FSx file system to create. Valid values are
   *                 <code>WINDOWS</code>, <code>LUSTRE</code>, <code>ONTAP</code>, and
   *                 <code>OPENZFS</code>.</p>
   */
  FileSystemType: FileSystemType | string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>A list of IDs specifying the security groups to apply to all network interfaces
   *             created for file system access. This list isn't returned in later requests to
   *             describe the file system.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The tags to apply to the file system that's being created. The key value of the
   *                 <code>Name</code> tag appears in the console as the file system name.</p>
   */
  Tags?: Tag[];

  /**
   * @public
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
   * @public
   * <p>The Microsoft Windows configuration for the file system that's being created. </p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * @public
   * <p>The Lustre configuration for the file system being created.</p>
   *          <note>
   *             <p>The following parameters are not supported for file systems
   *             with a data repository association created with
   *             .</p>
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
   * @public
   * <p>The ONTAP configuration properties of the FSx for ONTAP file system that you
   *             are creating.</p>
   */
  OntapConfiguration?: CreateFileSystemOntapConfiguration;

  /**
   * @public
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
   * @public
   * <p>The OpenZFS configuration for the file system that's being created.</p>
   */
  OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
}

/**
 * @public
 * <p>The path provided for data repository export isn't valid.</p>
 */
export class InvalidExportPath extends __BaseException {
  readonly name: "InvalidExportPath" = "InvalidExportPath";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The path provided for data repository import isn't valid.</p>
 */
export class InvalidImportPath extends __BaseException {
  readonly name: "InvalidImportPath" = "InvalidImportPath";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>A file system configuration is required for this operation.</p>
 */
export class MissingFileSystemConfiguration extends __BaseException {
  readonly name: "MissingFileSystemConfiguration" = "MissingFileSystemConfiguration";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The request object for the <code>CreateFileSystemFromBackup</code>
 *             operation.</p>
 */
export interface CreateFileSystemFromBackupRequest {
  /**
   * @public
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  BackupId: string | undefined;

  /**
   * @public
   * <p>A string of up to 63 ASCII characters that Amazon FSx uses to ensure
   *             idempotent creation. This string is automatically filled on your behalf when you use the
   *                 Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
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
   * @public
   * <p>A list of IDs for the security groups that apply to the specified network interfaces
   *             created for file system access. These security groups apply to all network interfaces.
   *             This value isn't returned in later <code>DescribeFileSystem</code> requests.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The tags to be applied to the file system at file system creation. The key value of
   *             the <code>Name</code> tag appears in the console as the file system
   *             name.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: CreateFileSystemWindowsConfiguration;

  /**
   * @public
   * <p>The Lustre configuration for the file system being created.</p>
   *          <note>
   *             <p>The following parameters are not supported for file systems
   *             with a data repository association created with
   *             .</p>
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
   * @public
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
   * @public
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
   * @public
   * <p>Sets the version for the Amazon FSx for Lustre file system that you're
   *             creating from a backup. Valid values are <code>2.10</code> and <code>2.12</code>.</p>
   *          <p>You don't need to specify <code>FileSystemTypeVersion</code> because it will
   *             be applied using the backup's <code>FileSystemTypeVersion</code> setting.
   *             If you choose to specify <code>FileSystemTypeVersion</code> when creating from backup, the
   *             value must match the backup's <code>FileSystemTypeVersion</code> setting.</p>
   */
  FileSystemTypeVersion?: string;

  /**
   * @public
   * <p>The OpenZFS configuration for the file system that's being created. </p>
   */
  OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;

  /**
   * @public
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

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The name of the snapshot. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the volume that you are taking a snapshot of.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The configuration that Amazon FSx uses to join the ONTAP storage virtual machine
 *             (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.</p>
 */
export interface CreateSvmActiveDirectoryConfiguration {
  /**
   * @public
   * <p>The NetBIOS name of the Active Directory computer object that will be created for your SVM.</p>
   */
  NetBiosName: string | undefined;

  /**
   * @public
   * <p>The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to
   *             a self-managed (including on-premises) Microsoft Active Directory (AD)
   *             directory. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html">
   *                 Using Amazon FSx for Windows with your self-managed Microsoft Active Directory</a> or
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html">Managing FSx for ONTAP SVMs</a>.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
}

/**
 * @public
 * @enum
 */
export const StorageVirtualMachineRootVolumeSecurityStyle = {
  MIXED: "MIXED",
  NTFS: "NTFS",
  UNIX: "UNIX",
} as const;

/**
 * @public
 */
export type StorageVirtualMachineRootVolumeSecurityStyle =
  (typeof StorageVirtualMachineRootVolumeSecurityStyle)[keyof typeof StorageVirtualMachineRootVolumeSecurityStyle];

/**
 * @public
 */
export interface CreateStorageVirtualMachineRequest {
  /**
   * @public
   * <p>Describes the self-managed Microsoft Active Directory to which you want to join the SVM.
   *       Joining an Active Directory provides user authentication and access control for SMB clients,
   *       including Microsoft Windows and macOS client accessing the file system.</p>
   */
  ActiveDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
   * <p>The name of the SVM.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The password to use when managing the SVM using the NetApp ONTAP CLI or REST API.
   *             If you do not specify a password, you can still use the file system's
   *             <code>fsxadmin</code> user to manage the SVM.</p>
   */
  SvmAdminPassword?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
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
 * @public
 * <p>Describes the Microsoft Active Directory (AD) directory configuration to which the FSx for ONTAP storage virtual machine (SVM) is joined.
 *             Note that account credentials are not returned in the response payload.</p>
 */
export interface SvmActiveDirectoryConfiguration {
  /**
   * @public
   * <p>The NetBIOS name of the AD computer object to which the SVM is joined.</p>
   */
  NetBiosName?: string;

  /**
   * @public
   * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to
   *             which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
}

/**
 * @public
 * <p>An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has
 *             four endpoints  that are used to access data or to manage the SVM
 *             using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They
 *             are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>,
 *             and <code>Smb</code> endpoints.</p>
 */
export interface SvmEndpoint {
  /**
   * @public
   * <p>The file system's DNS name. You can mount your file
   *             system using its DNS name.</p>
   */
  DNSName?: string;

  /**
   * @public
   * <p>The SVM endpoint's IP addresses.</p>
   */
  IpAddresses?: string[];
}

/**
 * @public
 * <p>An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has
 *             the following endpoints that are used to access data or to manage
 *             the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.</p>
 */
export interface SvmEndpoints {
  /**
   * @public
   * <p>An endpoint for connecting using the Internet Small Computer Systems Interface (iSCSI)  protocol.</p>
   */
  Iscsi?: SvmEndpoint;

  /**
   * @public
   * <p>An endpoint for managing SVMs using the NetApp ONTAP CLI, NetApp ONTAP API, or NetApp CloudManager.</p>
   */
  Management?: SvmEndpoint;

  /**
   * @public
   * <p>An endpoint for connecting using the Network File System (NFS) protocol.</p>
   */
  Nfs?: SvmEndpoint;

  /**
   * @public
   * <p>An endpoint for connecting using the Server Message Block (SMB) protocol.</p>
   */
  Smb?: SvmEndpoint;
}

/**
 * @public
 * @enum
 */
export const StorageVirtualMachineLifecycle = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MISCONFIGURED: "MISCONFIGURED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type StorageVirtualMachineLifecycle =
  (typeof StorageVirtualMachineLifecycle)[keyof typeof StorageVirtualMachineLifecycle];

/**
 * @public
 * @enum
 */
export const StorageVirtualMachineSubtype = {
  DEFAULT: "DEFAULT",
  DP_DESTINATION: "DP_DESTINATION",
  SYNC_DESTINATION: "SYNC_DESTINATION",
  SYNC_SOURCE: "SYNC_SOURCE",
} as const;

/**
 * @public
 */
export type StorageVirtualMachineSubtype =
  (typeof StorageVirtualMachineSubtype)[keyof typeof StorageVirtualMachineSubtype];

/**
 * @public
 * <p>Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.</p>
 */
export interface StorageVirtualMachine {
  /**
   * @public
   * <p>Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.</p>
   */
  ActiveDirectoryConfiguration?: SvmActiveDirectoryConfiguration;

  /**
   * @public
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The endpoints  that are used to access data or to manage the SVM
   *             using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They
   *             are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>,
   *             and <code>Smb</code> endpoints.</p>
   */
  Endpoints?: SvmEndpoints;

  /**
   * @public
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId?: string;

  /**
   * @public
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
   * @public
   * <p>The name of the SVM, if provisioned.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The SVM's system generated unique ID.</p>
   */
  StorageVirtualMachineId?: string;

  /**
   * @public
   * <p>Describes the SVM's subtype.</p>
   */
  Subtype?: StorageVirtualMachineSubtype | string;

  /**
   * @public
   * <p>The SVM's UUID (universally unique identifier).</p>
   */
  UUID?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Describes why the SVM lifecycle state changed.</p>
   */
  LifecycleTransitionReason?: LifecycleTransitionReason;

  /**
   * @public
   * <p>The security style of the root volume of the SVM.</p>
   */
  RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle | string;
}

/**
 * @public
 */
export interface CreateStorageVirtualMachineResponse {
  /**
   * @public
   * <p>Returned after a successful <code>CreateStorageVirtualMachine</code> operation; describes the SVM just created.</p>
   */
  StorageVirtualMachine?: StorageVirtualMachine;
}

/**
 * @public
 * @enum
 */
export const InputOntapVolumeType = {
  DP: "DP",
  RW: "RW",
} as const;

/**
 * @public
 */
export type InputOntapVolumeType = (typeof InputOntapVolumeType)[keyof typeof InputOntapVolumeType];

/**
 * @public
 * <p>Defines the SnapLock configuration when creating an FSx for ONTAP SnapLock volume. </p>
 */
export interface CreateSnaplockConfiguration {
  /**
   * @public
   * <p>Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default
   *             value is <code>false</code>. If you set <code>AuditLogVolume</code> to <code>true</code>, the SnapLock volume is
   *             created as an audit log volume. The minimum retention period for an audit log volume is six months. </p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-snaplock-works.html#snaplock-audit-log-volume">
   *             SnapLock audit log volumes</a>. </p>
   */
  AuditLogVolume?: boolean;

  /**
   * @public
   * <p>The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. </p>
   */
  AutocommitPeriod?: AutocommitPeriod;

  /**
   * @public
   * <p>Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock
   *             Enterprise volume. Enabling privileged delete allows SnapLock administrators to delete WORM files even
   *             if they have active retention periods. <code>PERMANENTLY_DISABLED</code> is a terminal state.
   *             If privileged delete is permanently disabled on a SnapLock volume, you can't re-enable it. The default
   *             value is <code>DISABLED</code>. </p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#privileged-delete">Privileged delete</a>. </p>
   */
  PrivilegedDelete?: PrivilegedDelete | string;

  /**
   * @public
   * <p>Specifies the retention period of an FSx for ONTAP
   *             SnapLock volume. </p>
   */
  RetentionPeriod?: SnaplockRetentionPeriod;

  /**
   * @public
   * <p>Specifies the retention mode of an FSx for ONTAP SnapLock volume.  After it is set, it can't be changed.
   *         You can choose one of the following retention modes: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANCE</code>: Files transitioned to write once, read many (WORM) on a Compliance volume can't be deleted
   *                 until their retention periods expire. This retention mode is used to address government or industry-specific mandates or to protect
   *                 against ransomware attacks. For more information,
   *                 see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-compliance.html">SnapLock Compliance</a>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENTERPRISE</code>: Files transitioned to WORM on an Enterprise volume can be deleted by authorized users
   *             before their retention periods expire using privileged delete. This retention mode is used to advance an organization's data integrity
   *             and internal compliance or to test retention settings before using SnapLock Compliance. For more information, see
   *                 <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html">SnapLock Enterprise</a>. </p>
   *             </li>
   *          </ul>
   */
  SnaplockType: SnaplockType | string | undefined;

  /**
   * @public
   * <p>Enables or disables volume-append mode
   *             on an FSx for ONTAP SnapLock volume. Volume-append mode allows you to
   *             create WORM-appendable files and write data to them incrementally. The default value is <code>false</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-append">Volume-append mode</a>. </p>
   */
  VolumeAppendModeEnabled?: boolean;
}

/**
 * @public
 * <p>Specifies the configuration of the ONTAP volume that you are creating.</p>
 */
export interface CreateOntapVolumeConfiguration {
  /**
   * @public
   * <p>Specifies the location in the SVM's namespace where the volume is mounted.
   *             This parameter is required. The <code>JunctionPath</code> must have a leading
   *             forward slash, such as <code>/vol3</code>.</p>
   */
  JunctionPath?: string;

  /**
   * @public
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
   * @public
   * <p>Specifies the size of the volume, in megabytes (MB), that you are creating.</p>
   */
  SizeInMegabytes: number | undefined;

  /**
   * @public
   * <p>Set to true to enable deduplication, compression, and compaction storage
   *             efficiency features on the volume, or set to false to disable them.
   *             This parameter is required.</p>
   */
  StorageEfficiencyEnabled?: boolean;

  /**
   * @public
   * <p>Specifies the ONTAP SVM in which to create the volume.</p>
   */
  StorageVirtualMachineId: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to
   *             false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups
   *             where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the
   *             specified tags are copied to backups. If you specify one or more tags when creating a user-initiated
   *             backup, no tags are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * @public
   * <p>Specifies the SnapLock configuration for an FSx for ONTAP volume. </p>
   */
  SnaplockConfiguration?: CreateSnaplockConfiguration;
}

/**
 * @public
 * <p>The snapshot configuration to use when creating an OpenZFS volume from a snapshot. </p>
 */
export interface CreateOpenZFSOriginSnapshotConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  SnapshotARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.</p>
 */
export interface CreateOpenZFSVolumeConfiguration {
  /**
   * @public
   * <p>The ID of the volume to use as the parent volume of the volume that you are creating.</p>
   */
  ParentVolumeId: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code>, and you specify one or more tags, only the specified tags
   *             are copied to snapshots. If you specify one or more tags when creating the snapshot, no
   *             tags are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToSnapshots?: boolean;

  /**
   * @public
   * <p>The configuration object that specifies the snapshot to use as the origin of the data
   *             for the volume.</p>
   */
  OriginSnapshot?: CreateOpenZFSOriginSnapshotConfiguration;

  /**
   * @public
   * <p>A Boolean value indicating whether the volume is read-only.</p>
   */
  ReadOnly?: boolean;

  /**
   * @public
   * <p>The configuration object for mounting a Network File System (NFS) file system.</p>
   */
  NfsExports?: OpenZFSNfsExport[];

  /**
   * @public
   * <p>An object specifying how much storage users or groups can use on the volume.</p>
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[];
}

/**
 * @public
 */
export interface CreateVolumeRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Specifies the type of volume to create; <code>ONTAP</code> and <code>OPENZFS</code> are
   *             the only valid volume types.</p>
   */
  VolumeType: VolumeType | string | undefined;

  /**
   * @public
   * <p>Specifies the name of the volume that you're creating.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies the configuration to use when creating the ONTAP volume.</p>
   */
  OntapConfiguration?: CreateOntapVolumeConfiguration;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Specifies the configuration to use when creating the OpenZFS volume.</p>
   */
  OpenZFSConfiguration?: CreateOpenZFSVolumeConfiguration;
}

/**
 * @public
 * <p>A volume configuration is required for this operation.</p>
 */
export class MissingVolumeConfiguration extends __BaseException {
  readonly name: "MissingVolumeConfiguration" = "MissingVolumeConfiguration";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 */
export class StorageVirtualMachineNotFound extends __BaseException {
  readonly name: "StorageVirtualMachineNotFound" = "StorageVirtualMachineNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface CreateVolumeFromBackupRequest {
  /**
   * @public
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  BackupId: string | undefined;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The name of the new volume you're creating.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies the configuration of the ONTAP volume that you are creating.</p>
   */
  OntapConfiguration?: CreateOntapVolumeConfiguration;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>You can't delete a backup while it's being copied.</p>
 */
export class BackupBeingCopied extends __BaseException {
  readonly name: "BackupBeingCopied" = "BackupBeingCopied";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>You can't delete a backup while it's being used to restore a file
 *             system.</p>
 */
export class BackupRestoring extends __BaseException {
  readonly name: "BackupRestoring" = "BackupRestoring";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The request object for the <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupRequest {
  /**
   * @public
   * <p>The ID of the backup that you want to delete.</p>
   */
  BackupId: string | undefined;

  /**
   * @public
   * <p>A string of up to 63 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This parameter is automatically filled on your behalf when using
   *             the CLI or SDK.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>The response object for the <code>DeleteBackup</code> operation.</p>
 */
export interface DeleteBackupResponse {
  /**
   * @public
   * <p>The ID of the backup that was deleted.</p>
   */
  BackupId?: string;

  /**
   * @public
   * <p>The lifecycle status of the backup. If the <code>DeleteBackup</code> operation is
   *             successful, the status is <code>DELETED</code>.</p>
   */
  Lifecycle?: BackupLifecycle | string;
}

/**
 * @public
 * <p>No data repository associations were found based upon the supplied parameters.</p>
 */
export class DataRepositoryAssociationNotFound extends __BaseException {
  readonly name: "DataRepositoryAssociationNotFound" = "DataRepositoryAssociationNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface DeleteDataRepositoryAssociationRequest {
  /**
   * @public
   * <p>The ID of the data repository association that you want to delete.</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to delete the data in the file system that corresponds
   *             to the data repository association.</p>
   */
  DeleteDataInFileSystem?: boolean;
}

/**
 * @public
 */
export interface DeleteDataRepositoryAssociationResponse {
  /**
   * @public
   * <p>The ID of the data repository association being deleted.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>Describes the lifecycle state of the data repository association being deleted.</p>
   */
  Lifecycle?: DataRepositoryLifecycle | string;

  /**
   * @public
   * <p>Indicates whether data in the file system that corresponds to the data
   *             repository association is being deleted. Default is <code>false</code>.</p>
   */
  DeleteDataInFileSystem?: boolean;
}

/**
 * @public
 */
export interface DeleteFileCacheRequest {
  /**
   * @public
   * <p>The ID of the cache that's being deleted.</p>
   */
  FileCacheId: string | undefined;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface DeleteFileCacheResponse {
  /**
   * @public
   * <p>The ID of the cache that's being deleted.</p>
   */
  FileCacheId?: string;

  /**
   * @public
   * <p>The cache lifecycle for the deletion request. If the
   *             <code>DeleteFileCache</code> operation is successful, this status is
   *             <code>DELETING</code>.</p>
   */
  Lifecycle?: FileCacheLifecycle | string;
}

/**
 * @public
 * <p>No caches were found based upon supplied parameters.</p>
 */
export class FileCacheNotFound extends __BaseException {
  readonly name: "FileCacheNotFound" = "FileCacheNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The configuration object for the Amazon FSx for Lustre file system being deleted in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemLustreConfiguration {
  /**
   * @public
   * <p>Set <code>SkipFinalBackup</code> to false if you want to take a final backup of the file
   *             system you are deleting. By default, Amazon FSx will not take a final backup on your behalf when the
   *                 <code>DeleteFileSystem</code> operation is invoked. (Default = true)</p>
   *          <note>
   *             <p>The <code>fsx:CreateBackup</code> permission is required if you set <code>SkipFinalBackup</code> to <code>false</code> in order to delete the file system and take a final backup.</p>
   *          </note>
   */
  SkipFinalBackup?: boolean;

  /**
   * @public
   * <p>Use if <code>SkipFinalBackup</code> is set to <code>false</code>,
   *             and you want to apply an array of tags to the final backup. If you have set the file system property
   *             <code>CopyTagsToBackups</code> to true, and
   *             you specify one or more <code>FinalBackupTags</code> when deleting a file system, Amazon FSx will not copy any existing file system tags to the backup.</p>
   */
  FinalBackupTags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const DeleteFileSystemOpenZFSOption = {
  DELETE_CHILD_VOLUMES_AND_SNAPSHOTS: "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS",
} as const;

/**
 * @public
 */
export type DeleteFileSystemOpenZFSOption =
  (typeof DeleteFileSystemOpenZFSOption)[keyof typeof DeleteFileSystemOpenZFSOption];

/**
 * @public
 * <p>The configuration object for the Amazon FSx for OpenZFS file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemOpenZFSConfiguration {
  /**
   * @public
   * <p>By default, Amazon FSx for OpenZFS takes a final backup on your behalf when
   *             the <code>DeleteFileSystem</code> operation is invoked. Doing this helps protect you
   *             from data loss, and we highly recommend taking the final backup. If you want to skip
   *             taking a final backup, set this value to <code>true</code>.</p>
   */
  SkipFinalBackup?: boolean;

  /**
   * @public
   * <p>A list of tags to apply to the file system's final backup.</p>
   */
  FinalBackupTags?: Tag[];

  /**
   * @public
   * <p>To delete a file system if there are child volumes present below the root volume,
   *             use the string <code>DELETE_CHILD_VOLUMES_AND_SNAPSHOTS</code>. If your file system
   *             has child volumes and you don't use this option, the delete request will fail.</p>
   */
  Options?: (DeleteFileSystemOpenZFSOption | string)[];
}

/**
 * @public
 * <p>The configuration object for the Microsoft Windows file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemWindowsConfiguration {
  /**
   * @public
   * <p>By default, Amazon FSx for Windows takes a final backup on your behalf when the
   *                 <code>DeleteFileSystem</code> operation is invoked. Doing this helps protect you
   *             from data loss, and we highly recommend taking the final backup. If you want to skip
   *             this backup, use this flag to do so.</p>
   */
  SkipFinalBackup?: boolean;

  /**
   * @public
   * <p>A set of tags for your final backup.</p>
   */
  FinalBackupTags?: Tag[];
}

/**
 * @public
 * <p>The request object for <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemRequest {
  /**
   * @public
   * <p>The ID of the file system that you want to delete.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
   * <p>A string of up to 63 ASCII characters that Amazon FSx uses to ensure
   *             idempotent deletion. This token is automatically filled on your behalf when using the
   *                 Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The configuration object for the Microsoft Windows file system used in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;

  /**
   * @public
   * <p>The configuration object for the Amazon FSx for Lustre file system being deleted in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  LustreConfiguration?: DeleteFileSystemLustreConfiguration;

  /**
   * @public
   * <p>The configuration object for the OpenZFS file system used in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  OpenZFSConfiguration?: DeleteFileSystemOpenZFSConfiguration;
}

/**
 * @public
 * <p>The response object for the Amazon FSx for Lustre file system being deleted in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemLustreResponse {
  /**
   * @public
   * <p>The ID of the final backup for this file system.</p>
   */
  FinalBackupId?: string;

  /**
   * @public
   * <p>The set of tags applied to the final backup.</p>
   */
  FinalBackupTags?: Tag[];
}

/**
 * @public
 * <p>The response object for the Amazon FSx for OpenZFS file system that's being
 *             deleted in the <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemOpenZFSResponse {
  /**
   * @public
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  FinalBackupId?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  FinalBackupTags?: Tag[];
}

/**
 * @public
 * <p>The response object for the Microsoft Windows file system used in the
 *                 <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemWindowsResponse {
  /**
   * @public
   * <p>The ID of the final backup for this file system.</p>
   */
  FinalBackupId?: string;

  /**
   * @public
   * <p>The set of tags applied to the final backup.</p>
   */
  FinalBackupTags?: Tag[];
}

/**
 * @public
 * <p>The response object for the <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemResponse {
  /**
   * @public
   * <p>The ID of the file system that's being deleted.</p>
   */
  FileSystemId?: string;

  /**
   * @public
   * <p>The file system lifecycle for the deletion request. If the
   *                 <code>DeleteFileSystem</code> operation is successful, this status is
   *                 <code>DELETING</code>.</p>
   */
  Lifecycle?: FileSystemLifecycle | string;

  /**
   * @public
   * <p>The response object for the Microsoft Windows file system used in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  WindowsResponse?: DeleteFileSystemWindowsResponse;

  /**
   * @public
   * <p>The response object for the Amazon FSx for Lustre file system being deleted in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  LustreResponse?: DeleteFileSystemLustreResponse;

  /**
   * @public
   * <p>The response object for the OpenZFS file system that's being deleted in the
   *                 <code>DeleteFileSystem</code> operation.</p>
   */
  OpenZFSResponse?: DeleteFileSystemOpenZFSResponse;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the snapshot that you want to delete.</p>
   */
  SnapshotId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResponse {
  /**
   * @public
   * <p>The ID of the deleted snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The lifecycle status of the snapshot. If the <code>DeleteSnapshot</code> operation is
   *             successful, this status is <code>DELETING</code>.</p>
   */
  Lifecycle?: SnapshotLifecycle | string;
}

/**
 * @public
 * <p>No Amazon FSx snapshots were found based on the supplied parameters.</p>
 */
export class SnapshotNotFound extends __BaseException {
  readonly name: "SnapshotNotFound" = "SnapshotNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface DeleteStorageVirtualMachineRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the SVM that you want to delete.</p>
   */
  StorageVirtualMachineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageVirtualMachineResponse {
  /**
   * @public
   * <p>The ID of the SVM Amazon FSx is deleting.</p>
   */
  StorageVirtualMachineId?: string;

  /**
   * @public
   * <p>Describes the lifecycle state of the SVM being deleted.</p>
   */
  Lifecycle?: StorageVirtualMachineLifecycle | string;
}

/**
 * @public
 * <p>Use to specify skipping a final backup, adding tags to a final backup, or bypassing the
 *             retention period of an FSx for ONTAP SnapLock Enterprise volume when deleting an
 *             FSx for ONTAP volume. </p>
 */
export interface DeleteVolumeOntapConfiguration {
  /**
   * @public
   * <p>Set to true if you want to skip taking a final backup of the volume
   *         you are deleting.</p>
   */
  SkipFinalBackup?: boolean;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  FinalBackupTags?: Tag[];

  /**
   * @public
   * <p>Setting this to <code>true</code> allows a SnapLock administrator to delete an FSx for ONTAP SnapLock Enterprise volume
   *             with unexpired write once, read many (WORM) files. The IAM permission <code>fsx:BypassSnaplockEnterpriseRetention</code> is also
   *         required to delete SnapLock Enterprise volumes with unexpired WORM files. The default value is <code>false</code>. </p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-delete-volume.html">
   *                 Deleting a SnapLock volume</a>. </p>
   */
  BypassSnaplockEnterpriseRetention?: boolean;
}

/**
 * @public
 * @enum
 */
export const DeleteOpenZFSVolumeOption = {
  DELETE_CHILD_VOLUMES_AND_SNAPSHOTS: "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS",
} as const;

/**
 * @public
 */
export type DeleteOpenZFSVolumeOption = (typeof DeleteOpenZFSVolumeOption)[keyof typeof DeleteOpenZFSVolumeOption];

/**
 * @public
 * <p>A value that specifies whether to delete all child volumes and snapshots. </p>
 */
export interface DeleteVolumeOpenZFSConfiguration {
  /**
   * @public
   * <p>To delete the volume's child volumes, snapshots, and clones, use the string
   *               <code>DELETE_CHILD_VOLUMES_AND_SNAPSHOTS</code>.</p>
   */
  Options?: (DeleteOpenZFSVolumeOption | string)[];
}

/**
 * @public
 */
export interface DeleteVolumeRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the volume that you are deleting.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>For Amazon FSx for ONTAP volumes, specify whether to take a final backup of
   *             the volume and apply tags to the backup. To apply tags to the backup, you must have the
   *                 <code>fsx:TagResource</code> permission.</p>
   */
  OntapConfiguration?: DeleteVolumeOntapConfiguration;

  /**
   * @public
   * <p>For Amazon FSx for OpenZFS volumes, specify whether to delete all child
   *             volumes and snapshots.</p>
   */
  OpenZFSConfiguration?: DeleteVolumeOpenZFSConfiguration;
}

/**
 * @public
 * <p>The response object for the Amazon FSx for NetApp ONTAP volume being deleted
 *             in the <code>DeleteVolume</code> operation.</p>
 */
export interface DeleteVolumeOntapResponse {
  /**
   * @public
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  FinalBackupId?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  FinalBackupTags?: Tag[];
}

/**
 * @public
 */
export interface DeleteVolumeResponse {
  /**
   * @public
   * <p>The ID of the volume that's being deleted.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The lifecycle state of the volume being deleted. If the <code>DeleteVolume</code>
   *             operation is successful, this value is <code>DELETING</code>.</p>
   */
  Lifecycle?: VolumeLifecycle | string;

  /**
   * @public
   * <p>Returned after a <code>DeleteVolume</code> request, showing the status of the delete
   *             request.</p>
   */
  OntapResponse?: DeleteVolumeOntapResponse;
}

/**
 * @public
 * @enum
 */
export const FilterName = {
  BACKUP_TYPE: "backup-type",
  DATA_REPOSITORY_TYPE: "data-repository-type",
  FILE_CACHE_ID: "file-cache-id",
  FILE_CACHE_TYPE: "file-cache-type",
  FILE_SYSTEM_ID: "file-system-id",
  FILE_SYSTEM_TYPE: "file-system-type",
  VOLUME_ID: "volume-id",
} as const;

/**
 * @public
 */
export type FilterName = (typeof FilterName)[keyof typeof FilterName];

/**
 * @public
 * <p>A filter used to restrict the results of describe calls. You can use multiple
 *             filters to return results that meet all applied filter requirements.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name for this filter.</p>
   */
  Name?: FilterName | string;

  /**
   * @public
   * <p>The values of the filter. These are all the values for any of the applied
   *             filters.</p>
   */
  Values?: string[];
}

/**
 * @public
 * <p>The request object for the <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsRequest {
  /**
   * @public
   * <p>The IDs of the backups that you want to retrieve. This parameter value overrides any
   *             filters. If any IDs aren't found, a <code>BackupNotFound</code> error occurs.</p>
   */
  BackupIds?: string[];

  /**
   * @public
   * <p>The filters structure. The supported names are <code>file-system-id</code>,
   *                 <code>backup-type</code>, <code>file-system-type</code>, and
   *             <code>volume-id</code>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Maximum number of backups to return in the response. This parameter value must be
   *             greater than 0. The number of items that Amazon FSx returns is the minimum of
   *             the <code>MaxResults</code> parameter specified in the request and the service's
   *             internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An opaque pagination token returned from a previous <code>DescribeBackups</code>
   *             operation. If a token is present, the operation continues the list from where the
   *             returning call left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeDataRepositoryAssociationsRequest {
  /**
   * @public
   * <p>IDs of the data repository associations whose descriptions you want to retrieve
   *             (String).</p>
   */
  AssociationIds?: string[];

  /**
   * @public
   * <p>A list of <code>Filter</code> elements.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of resources to return in the response. This value must be
   *             an integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeDataRepositoryAssociationsResponse {
  /**
   * @public
   * <p>An array of one or more data repository association descriptions.</p>
   */
  Associations?: DataRepositoryAssociation[];

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>You have filtered the response to a data repository type that is not supported.</p>
 */
export class InvalidDataRepositoryType extends __BaseException {
  readonly name: "InvalidDataRepositoryType" = "InvalidDataRepositoryType";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const DataRepositoryTaskFilterName = {
  DATA_REPO_ASSOCIATION_ID: "data-repository-association-id",
  FILE_CACHE_ID: "file-cache-id",
  FILE_SYSTEM_ID: "file-system-id",
  TASK_LIFECYCLE: "task-lifecycle",
} as const;

/**
 * @public
 */
export type DataRepositoryTaskFilterName =
  (typeof DataRepositoryTaskFilterName)[keyof typeof DataRepositoryTaskFilterName];

/**
 * @public
 * <p>(Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response.
 *             You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type.
 *             A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.</p>
 */
export interface DataRepositoryTaskFilter {
  /**
   * @public
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
   * @public
   * <p>Use Values to include the specific file system IDs and task
   *             lifecycle states for the filters you are using.</p>
   */
  Values?: string[];
}

/**
 * @public
 */
export interface DescribeDataRepositoryTasksRequest {
  /**
   * @public
   * <p>(Optional) IDs of the tasks whose descriptions you want to retrieve
   *             (String).</p>
   */
  TaskIds?: string[];

  /**
   * @public
   * <p>(Optional) You can use filters to narrow the <code>DescribeDataRepositoryTasks</code> response to
   *             include just tasks for specific file systems, or tasks in a specific lifecycle state.</p>
   */
  Filters?: DataRepositoryTaskFilter[];

  /**
   * @public
   * <p>The maximum number of resources to return in the response. This value must be an
   *             integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeDataRepositoryTasksResponse {
  /**
   * @public
   * <p>The collection of data repository task descriptions returned.</p>
   */
  DataRepositoryTasks?: DataRepositoryTask[];

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFileCachesRequest {
  /**
   * @public
   * <p>IDs of the caches whose descriptions you want to retrieve (String).</p>
   */
  FileCacheIds?: string[];

  /**
   * @public
   * <p>The maximum number of resources to return in the response. This value must be an
   *             integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A description of a specific Amazon File Cache resource, which is
 *             a response object from the <code>DescribeFileCaches</code> operation.</p>
 */
export interface FileCache {
  /**
   * @public
   * <p>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon
   *             Resource Names (ARNs) for resources.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The system-generated, unique ID of the cache.</p>
   */
  FileCacheId?: string;

  /**
   * @public
   * <p>The type of cache, which must be <code>LUSTRE</code>.</p>
   */
  FileCacheType?: FileCacheType | string;

  /**
   * @public
   * <p>The Lustre version of the cache, which must be <code>2.12</code>.</p>
   */
  FileCacheTypeVersion?: string;

  /**
   * @public
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
   * @public
   * <p>A structure providing details of any failures that occurred.</p>
   */
  FailureDetails?: FileCacheFailureDetails;

  /**
   * @public
   * <p>The storage capacity of the cache in gibibytes (GiB).</p>
   */
  StorageCapacity?: number;

  /**
   * @public
   * <p>The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and
   *                 subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>A list of subnet IDs that the cache will be accessible from. You can specify only
   *             one subnet ID in a call to the <code>CreateFileCache</code> operation.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>A list of network interface IDs.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * @public
   * <p>The Domain Name System (DNS) name for the cache.</p>
   */
  DNSName?: string;

  /**
   * @public
   * <p>Specifies the ID of the Key Management Service (KMS) key to use for encrypting data on
   *             an Amazon File Cache. If a <code>KmsKeyId</code> isn't specified, the Amazon FSx-managed
   *             KMS key for your account is used. For more information,
   *             see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the
   *             <i>Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The configuration for the Amazon File Cache resource.</p>
   */
  LustreConfiguration?: FileCacheLustreConfiguration;

  /**
   * @public
   * <p>A list of IDs of data repository associations that are associated with this cache.</p>
   */
  DataRepositoryAssociationIds?: string[];
}

/**
 * @public
 */
export interface DescribeFileCachesResponse {
  /**
   * @public
   * <p>The response object for the <code>DescribeFileCaches</code> operation.</p>
   */
  FileCaches?: FileCache[];

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The request object for <code>DescribeFileSystemAliases</code> operation.</p>
 */
export interface DescribeFileSystemAliasesRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the file system to return the associated DNS aliases for
   *             (String).</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
   * <p>Maximum number of DNS aliases to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Opaque pagination token returned from a previous
   *                 <code>DescribeFileSystemAliases</code> operation (String). If a token is included in the request, the action
   *             continues the list from where the previous returning call left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The response object for <code>DescribeFileSystemAliases</code> operation.</p>
 */
export interface DescribeFileSystemAliasesResponse {
  /**
   * @public
   * <p>An array of one or more DNS aliases currently associated with the specified file system.</p>
   */
  Aliases?: Alias[];

  /**
   * @public
   * <p>Present if there are more DNS aliases than returned in the response (String). You
   *             can use the <code>NextToken</code> value in a later request to fetch additional
   *             descriptions. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The request object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsRequest {
  /**
   * @public
   * <p>IDs of the file systems whose descriptions you want to retrieve
   *             (String).</p>
   */
  FileSystemIds?: string[];

  /**
   * @public
   * <p>Maximum number of file systems to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Opaque pagination token returned from a previous <code>DescribeFileSystems</code>
   *             operation (String). If a token present, the operation continues the list from where the
   *             returning call left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SnapshotFilterName = {
  FILE_SYSTEM_ID: "file-system-id",
  VOLUME_ID: "volume-id",
} as const;

/**
 * @public
 */
export type SnapshotFilterName = (typeof SnapshotFilterName)[keyof typeof SnapshotFilterName];

/**
 * @public
 * <p>A filter used to restrict the results of <code>DescribeSnapshots</code> calls. You can
 *             use multiple filters to return results that meet all applied filter requirements.</p>
 */
export interface SnapshotFilter {
  /**
   * @public
   * <p>The name of the filter to use. You can filter by the <code>file-system-id</code> or by
   *                 <code>volume-id</code>.</p>
   */
  Name?: SnapshotFilterName | string;

  /**
   * @public
   * <p>The <code>file-system-id</code> or <code>volume-id</code> that you are filtering
   *             for.</p>
   */
  Values?: string[];
}

/**
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * @public
   * <p>The IDs of the snapshots that you want to retrieve. This parameter value overrides any
   *             filters. If any IDs aren't found, a <code>SnapshotNotFound</code> error occurs.</p>
   */
  SnapshotIds?: string[];

  /**
   * @public
   * <p>The filters structure. The supported names are <code>file-system-id</code> or
   *                 <code>volume-id</code>.</p>
   */
  Filters?: SnapshotFilter[];

  /**
   * @public
   * <p>The maximum number of resources to return in the response. This value must be an
   *             integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const StorageVirtualMachineFilterName = {
  FILE_SYSTEM_ID: "file-system-id",
} as const;

/**
 * @public
 */
export type StorageVirtualMachineFilterName =
  (typeof StorageVirtualMachineFilterName)[keyof typeof StorageVirtualMachineFilterName];

/**
 * @public
 * <p>A filter used to restrict the results of describe calls for
 *             Amazon FSx for NetApp ONTAP storage virtual machines (SVMs). You can use multiple
 *             filters to return results that meet all applied filter requirements.</p>
 */
export interface StorageVirtualMachineFilter {
  /**
   * @public
   * <p>The name for this filter.</p>
   */
  Name?: StorageVirtualMachineFilterName | string;

  /**
   * @public
   * <p>The values of the filter. These are all the values for any of the applied
   *             filters.</p>
   */
  Values?: string[];
}

/**
 * @public
 */
export interface DescribeStorageVirtualMachinesRequest {
  /**
   * @public
   * <p>Enter the ID of one or more SVMs that you want to view.</p>
   */
  StorageVirtualMachineIds?: string[];

  /**
   * @public
   * <p>Enter a filter name:value pair to view a select set of SVMs.</p>
   */
  Filters?: StorageVirtualMachineFilter[];

  /**
   * @public
   * <p>The maximum number of resources to return in the response. This value must be an
   *             integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeStorageVirtualMachinesResponse {
  /**
   * @public
   * <p>Returned after a successful <code>DescribeStorageVirtualMachines</code> operation, describing each SVM.</p>
   */
  StorageVirtualMachines?: StorageVirtualMachine[];

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const VolumeFilterName = {
  FILE_SYSTEM_ID: "file-system-id",
  STORAGE_VIRTUAL_MACHINE_ID: "storage-virtual-machine-id",
} as const;

/**
 * @public
 */
export type VolumeFilterName = (typeof VolumeFilterName)[keyof typeof VolumeFilterName];

/**
 * @public
 * <p>A filter used to restrict the results of describe calls for Amazon FSx for
 *             NetApp ONTAP or Amazon FSx for OpenZFS volumes. You can use multiple filters to
 *             return results that meet all applied filter requirements.</p>
 */
export interface VolumeFilter {
  /**
   * @public
   * <p>The name for this filter.</p>
   */
  Name?: VolumeFilterName | string;

  /**
   * @public
   * <p>The values of the filter. These are all the values for any of the applied
   *             filters.</p>
   */
  Values?: string[];
}

/**
 * @public
 */
export interface DescribeVolumesRequest {
  /**
   * @public
   * <p>The IDs of the volumes whose descriptions you want to retrieve.</p>
   */
  VolumeIds?: string[];

  /**
   * @public
   * <p>Enter a filter <code>Name</code> and <code>Values</code> pair to view a select set of
   *             volumes.</p>
   */
  Filters?: VolumeFilter[];

  /**
   * @public
   * <p>The maximum number of resources to return in the response. This value must be an
   *             integer greater than zero.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.</p>
 */
export interface DisassociateFileSystemAliasesRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Specifies the file system from which to disassociate the DNS aliases.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
   * <p>An array of one or more DNS alias names to disassociate, or remove, from the file system.</p>
   */
  Aliases: string[] | undefined;
}

/**
 * @public
 * <p>The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system.
 *         Use the  API operation to monitor the status of the aliases Amazon FSx is removing from the file system.</p>
 */
export interface DisassociateFileSystemAliasesResponse {
  /**
   * @public
   * <p>An array of one or more DNS aliases that Amazon FSx is attempting to disassociate from the file system.</p>
   */
  Aliases?: Alias[];
}

/**
 * @public
 * <p>The request object for <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the Amazon FSx resource that will have its tags listed.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>Maximum number of tags to return in the response (integer). This
   *             parameter value must be greater than 0. The number of items that Amazon FSx returns is
   *             the minimum of the <code>MaxResults</code> parameter specified in the request and the
   *             service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Opaque pagination token returned from a previous
   *                 <code>ListTagsForResource</code> operation (String). If a token present, the action
   *             continues the list from where the returning call left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The response object for <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags on the resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>This is present if there are more tags than returned in the response (String). You
   *             can use the <code>NextToken</code> value in the later request to fetch the tags.
   *         </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The resource specified for the tagging operation is not a resource type owned by
 *             Amazon FSx. Use the API of the relevant service to perform the operation. </p>
 */
export class NotServiceResourceError extends __BaseException {
  readonly name: "NotServiceResourceError" = "NotServiceResourceError";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the non-Amazon FSx resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The resource specified does not support tagging. </p>
 */
export class ResourceDoesNotSupportTagging extends __BaseException {
  readonly name: "ResourceDoesNotSupportTagging" = "ResourceDoesNotSupportTagging";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that doesn't support
   *             tagging.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
 */
export class ResourceNotFound extends __BaseException {
  readonly name: "ResourceNotFound" = "ResourceNotFound";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The resource ARN of the resource that can't be found.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface ReleaseFileSystemNfsV3LocksRequest {
  /**
   * @public
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * @enum
 */
export const RestoreOpenZFSVolumeOption = {
  DELETE_CLONED_VOLUMES: "DELETE_CLONED_VOLUMES",
  DELETE_INTERMEDIATE_SNAPSHOTS: "DELETE_INTERMEDIATE_SNAPSHOTS",
} as const;

/**
 * @public
 */
export type RestoreOpenZFSVolumeOption = (typeof RestoreOpenZFSVolumeOption)[keyof typeof RestoreOpenZFSVolumeOption];

/**
 * @public
 */
export interface RestoreVolumeFromSnapshotRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the volume that you are restoring.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>The ID of the source snapshot. Specifies the snapshot that you are restoring
   *             from.</p>
   */
  SnapshotId: string | undefined;

  /**
   * @public
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
 * @public
 * <p>The request object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to
   *             tag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of tags for the resource. If a tag with a given key already exists, the
   *             value is replaced by the one specified in this parameter.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 * <p>The response object for the <code>TagResource</code> operation.</p>
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>The request object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the Amazon FSx resource to untag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of keys of tags on the resource to untag. In case the tag key doesn't exist,
   *             the call will still succeed to be idempotent.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * <p>The response object for <code>UntagResource</code> action.</p>
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDataRepositoryAssociationRequest {
  /**
   * @public
   * <p>The ID of the data repository association that you are updating.</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>For files imported from a data repository, this value determines the stripe count and
   *             maximum amount of data per file (in MiB) stored on a single physical disk. The maximum
   *             number of disks that a single file can be striped across is limited by the total number
   *             of disks that make up the file system.</p>
   *          <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500
   *             GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;

  /**
   * @public
   * <p>The configuration for an Amazon S3 data repository linked to an
   *             Amazon FSx Lustre file system with a data repository association.
   *             The configuration defines which file events (new, changed, or
   *             deleted files or directories) are automatically imported from
   *             the linked data repository to the file system or automatically
   *             exported from the file system to the data repository.</p>
   */
  S3?: S3DataRepositoryConfiguration;
}

/**
 * @public
 */
export interface UpdateDataRepositoryAssociationResponse {
  /**
   * @public
   * <p>The response object returned after the data repository association is updated.</p>
   */
  Association?: DataRepositoryAssociation;
}

/**
 * @public
 * <p>The configuration update for an Amazon File Cache resource.</p>
 */
export interface UpdateFileCacheLustreConfiguration {
  /**
   * @public
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
 * @public
 */
export interface UpdateFileCacheRequest {
  /**
   * @public
   * <p>The ID of the cache that you are updating.</p>
   */
  FileCacheId: string | undefined;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The configuration updates for an Amazon File Cache resource.</p>
   */
  LustreConfiguration?: UpdateFileCacheLustreConfiguration;
}

/**
 * @public
 */
export interface UpdateFileCacheResponse {
  /**
   * @public
   * <p>A description of the cache that was updated.</p>
   */
  FileCache?: FileCache;
}

/**
 * @public
 * <p>The configuration object for Amazon FSx for Lustre file systems used in the
 *                 <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemLustreConfiguration {
  /**
   * @public
   * <p>(Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *             <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>0</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
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
   *          <p>This parameter is not supported for file systems with a data repository association.</p>
   */
  AutoImportPolicy?: AutoImportPolicyType | string;

  /**
   * @public
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
   * @public
   * <p>The Lustre logging configuration used when updating an Amazon FSx for Lustre
   *             file system. When logging is enabled, Lustre logs error and warning events for
   *             data repositories associated with your file system to Amazon CloudWatch Logs.</p>
   */
  LogConfiguration?: LustreLogCreateConfiguration;

  /**
   * @public
   * <p>The Lustre root squash configuration used when updating an Amazon FSx for Lustre
   *             file system. When enabled, root squash restricts root-level access from clients that
   *             try to access your file system as a root user.</p>
   */
  RootSquashConfiguration?: LustreRootSquashConfiguration;
}

/**
 * @public
 * <p>The configuration updates for an Amazon FSx for NetApp ONTAP file system.</p>
 */
export interface UpdateFileSystemOntapConfiguration {
  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>Update the password for the <code>fsxadmin</code> user by entering a new password.
   *         You use the <code>fsxadmin</code> user to access the NetApp ONTAP CLI and REST API to manage your file system resources.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-resources-ontap-apps.html">Managing resources using NetApp Applicaton</a>.</p>
   */
  FsxAdminPassword?: string;

  /**
   * @public
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
   * @public
   * <p>The SSD IOPS (input output operations per second) configuration for an Amazon FSx for NetApp ONTAP file system. The default is 3 IOPS per GB of storage capacity,
   *             but you can provision additional IOPS per GB of storage. The configuration consists
   *             of an IOPS mode (<code>AUTOMATIC</code> or <code>USER_PROVISIONED</code>), and in
   *             the case of <code>USER_PROVISIONED</code> IOPS, the total number of SSD IOPS provisioned.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/increase-primary-storage.html">Updating SSD storage capacity and IOPS</a>.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * @public
   * <p>Enter a new value to change the amount of throughput capacity for the file system. Throughput capacity is measured in megabytes per second
   *             (MBps). Valid values are 128, 256, 512, 1024, 2048, and 4096 MBps. For more information, see
   *           <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-throughput-capacity.html">Managing throughput capacity</a>
   *           in the FSx for ONTAP User Guide.</p>
   */
  ThroughputCapacity?: number;

  /**
   * @public
   * <p>(Multi-AZ only) A list of IDs of new virtual private cloud (VPC) route tables
   *             to associate (add) with your Amazon FSx for NetApp ONTAP file system.</p>
   */
  AddRouteTableIds?: string[];

  /**
   * @public
   * <p>(Multi-AZ only) A list of IDs of existing virtual private cloud (VPC)
   *             route tables to disassociate (remove) from your Amazon FSx for NetApp ONTAP file system. You can use
   *             the  API operation to retrieve the
   *             list of VPC route table IDs for a file system.</p>
   */
  RemoveRouteTableIds?: string[];
}

/**
 * @public
 * <p>The configuration updates for an Amazon FSx for OpenZFS file system.</p>
 */
export interface UpdateFileSystemOpenZFSConfiguration {
  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *                 <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
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
   * @public
   * <p>A Boolean value indicating whether tags for the volume should be copied to snapshots.
   *             This value defaults to <code>false</code>. If it's set to <code>true</code>, all tags
   *             for the volume are copied to snapshots where the user doesn't specify tags. If this
   *             value is <code>true</code> and you specify one or more tags, only the specified tags are
   *             copied to snapshots. If you specify one or more tags when creating the snapshot, no tags
   *             are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToVolumes?: boolean;

  /**
   * @public
   * <p>A recurring daily time, in the format <code>HH:MM</code>. <code>HH</code> is the
   *             zero-padded hour of the day (0-23), and <code>MM</code> is the zero-padded minute of the
   *             hour. For example, <code>05:00</code> specifies 5 AM daily. </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx
   *             automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per
   *             GB of storage. The configuration consists of the total number of provisioned SSD IOPS
   *             and how it is was provisioned, or the mode (by the customer or by Amazon FSx).</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;

  /**
   * @public
   * <p>(Multi-AZ only) A list of IDs of new virtual private cloud (VPC) route tables
   *             to associate (add) with your Amazon FSx for OpenZFS file system.</p>
   */
  AddRouteTableIds?: string[];

  /**
   * @public
   * <p>(Multi-AZ only) A list of IDs of existing virtual private cloud (VPC)
   *             route tables to disassociate (remove) from your Amazon FSx for OpenZFS file system. You can use
   *             the  API operation to retrieve the
   *             list of VPC route table IDs for a file system.</p>
   */
  RemoveRouteTableIds?: string[];
}

/**
 * @public
 * <p>Specifies changes you are making to the self-managed Microsoft Active Directory (AD) configuration to which
 *             an FSx for Windows File Server file system or an FSx for ONTAP SVM is joined.</p>
 */
export interface SelfManagedActiveDirectoryConfigurationUpdates {
  /**
   * @public
   * <p>Specifies the updated user name for the service account on your self-managed AD domain.
   *             Amazon FSx uses this account to join to your self-managed AD domain.</p>
   *          <p>This account must have the permissions required to join
   *             computers to the domain in the organizational unit provided in
   *             <code>OrganizationalUnitDistinguishedName</code>.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>Specifies the updated password for the service account on your self-managed AD domain.
   *             Amazon FSx uses this account to join to your self-managed AD domain.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>A list of up to three DNS server or domain controller IP addresses in your
   *             self-managed AD domain.</p>
   */
  DnsIps?: string[];

  /**
   * @public
   * <p>Specifies an updated fully qualified domain name of your self-managed AD configuration.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>Specifies an updated fully qualified distinguished name of the organization unit within your self-managed AD.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * @public
   * <p>Specifies the updated name of the self-managed AD domain group whose members are granted administrative privileges
   *             for the Amazon FSx resource.</p>
   */
  FileSystemAdministratorsGroup?: string;
}

/**
 * @public
 * <p>Updates the configuration for an existing Amazon FSx for Windows
 *             File Server file system. Amazon FSx only overwrites existing properties with non-null values
 *             provided in the request.</p>
 */
export interface UpdateFileSystemWindowsConfiguration {
  /**
   * @public
   * <p>The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC
   *             time zone. Where d is the weekday number, from 1 through 7, with 1 = Monday and 7 = Sunday.</p>
   */
  WeeklyMaintenanceStartTime?: string;

  /**
   * @public
   * <p>The preferred time to start the daily automatic backup, in the UTC time zone, for example, <code>02:00</code>
   *          </p>
   */
  DailyAutomaticBackupStartTime?: string;

  /**
   * @public
   * <p>The number of days to retain automatic backups. Setting this property to
   *             <code>0</code> disables automatic backups. You can retain automatic backups for a
   *             maximum of 90 days. The default is <code>30</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#automatic-backups">Working with Automatic Daily Backups</a>.</p>
   */
  AutomaticBackupRetentionDays?: number;

  /**
   * @public
   * <p>Sets the target value for a file system's throughput capacity, in MB/s, that you are updating the file system to. Valid values are
   *             8, 16, 32, 64, 128, 256, 512, 1024, 2048. You cannot make a throughput capacity update request if there is an existing throughput capacity update request in progress. For more information,
   *             see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-throughput-capacity.html">Managing Throughput Capacity</a>.</p>
   */
  ThroughputCapacity?: number;

  /**
   * @public
   * <p>The configuration Amazon FSx uses to join the Windows File Server instance to the
   *             self-managed Microsoft AD directory. You cannot make a self-managed Microsoft AD update request if there is an existing self-managed Microsoft AD update request in progress.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;

  /**
   * @public
   * <p>The configuration that Amazon FSx for Windows File Server uses to audit and log
   *             user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server
   *             file system..</p>
   */
  AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;

  /**
   * @public
   * <p>The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for Windows file system.
   *             By default, Amazon FSx automatically provisions 3 IOPS per GiB of storage capacity. You can provision additional
   *             IOPS per GiB of storage, up to the maximum limit associated with your chosen throughput capacity.</p>
   */
  DiskIopsConfiguration?: DiskIopsConfiguration;
}

/**
 * @public
 * <p>The request object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemRequest {
  /**
   * @public
   * <p>The ID of the file system that you are updating.</p>
   */
  FileSystemId: string | undefined;

  /**
   * @public
   * <p>A string of up to 63 ASCII characters that Amazon FSx uses to ensure
   *       idempotent updates. This string is automatically filled on your behalf when you use the
   *         Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Use this parameter to increase the storage capacity of an FSx for Windows File Server,
   *       FSx for Lustre, FSx for OpenZFS, or FSx for ONTAP file system.
   *       Specifies the storage capacity target value, in GiB, to increase the storage capacity for
   *       the file system that you're updating. </p>
   *          <note>
   *             <p>You can't make a storage capacity increase request if there is an existing storage
   *         capacity increase request in progress.</p>
   *          </note>
   *          <p>For Lustre file systems, the storage capacity target value can be the following:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>SCRATCH_2</code>, <code>PERSISTENT_1</code>, and <code>PERSISTENT_2 SSD</code> deployment types, valid values
   *         are in multiples of 2400 GiB. The value must be greater than the current storage capacity.</p>
   *             </li>
   *             <li>
   *                <p>For <code>PERSISTENT HDD</code> file systems, valid values are multiples of 6000 GiB for
   *         12-MBps throughput per TiB file systems and multiples of 1800 GiB for 40-MBps throughput
   *         per TiB file systems. The values must be greater than the current storage capacity.</p>
   *             </li>
   *             <li>
   *                <p>For <code>SCRATCH_1</code> file systems, you can't increase the storage capacity.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html">Managing storage and throughput
   *       capacity</a> in the <i>FSx for Lustre User Guide</i>.</p>
   *          <p>For FSx for OpenZFS file systems, the storage capacity target value must be at least 10 percent
   *       greater than the current storage capacity value. For more information, see
   *       <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-storage-capacity.html">Managing storage capacity</a> in the <i>FSx for OpenZFS User
   *           Guide</i>.</p>
   *          <p>For Windows file systems, the storage capacity target value must be at least 10 percent
   *       greater than the current storage capacity value. To increase storage capacity, the file system
   *       must have at least 16 MBps of throughput capacity. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html">Managing storage
   *         capacity</a> in the <i>Amazon FSxfor Windows File Server User
   *           Guide</i>.</p>
   *          <p>For ONTAP file systems, the storage capacity target value must be at least 10 percent
   *       greater than the current storage capacity value.  For more information, see
   *       <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html">Managing storage capacity and provisioned IOPS</a> in the <i>Amazon FSx for NetApp ONTAP User
   *           Guide</i>.</p>
   */
  StorageCapacity?: number;

  /**
   * @public
   * <p>The configuration updates for an Amazon FSx for Windows File Server file system.</p>
   */
  WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;

  /**
   * @public
   * <p>The configuration object for Amazon FSx for Lustre file systems used in the
   *                 <code>UpdateFileSystem</code> operation.</p>
   */
  LustreConfiguration?: UpdateFileSystemLustreConfiguration;

  /**
   * @public
   * <p>The configuration updates for an Amazon FSx for NetApp ONTAP file system.</p>
   */
  OntapConfiguration?: UpdateFileSystemOntapConfiguration;

  /**
   * @public
   * <p>The configuration updates for an FSx for OpenZFS file system.</p>
   */
  OpenZFSConfiguration?: UpdateFileSystemOpenZFSConfiguration;

  /**
   * @public
   * <p>Specifies the file system's storage type.</p>
   */
  StorageType?: StorageType | string;
}

/**
 * @public
 */
export interface UpdateSnapshotRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The name of the snapshot to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the snapshot that you want to update, in the format
   *                 <code>fsvolsnap-0123456789abcdef0</code>.</p>
   */
  SnapshotId: string | undefined;
}

/**
 * @public
 * <p>Specifies updates to an FSx for ONTAP storage virtual machine's (SVM) Microsoft Active Directory (AD) configuration.
 *             Note that account credentials are not returned in the response payload.</p>
 */
export interface UpdateSvmActiveDirectoryConfiguration {
  /**
   * @public
   * <p>Specifies changes you are making to the self-managed Microsoft Active Directory (AD) configuration to which
   *             an FSx for Windows File Server file system or an FSx for ONTAP SVM is joined.</p>
   */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;

  /**
   * @public
   * <p>Specifies an updated NetBIOS name of the AD computer object <code>NetBiosName</code> to which an SVM is joined.</p>
   */
  NetBiosName?: string;
}

/**
 * @public
 */
export interface UpdateStorageVirtualMachineRequest {
  /**
   * @public
   * <p>Specifies updates to an SVM's Microsoft Active Directory (AD) configuration.</p>
   */
  ActiveDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;

  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the SVM that you want to update, in the format <code>svm-0123456789abcdef0</code>.</p>
   */
  StorageVirtualMachineId: string | undefined;

  /**
   * @public
   * <p>Specifies a new SvmAdminPassword.</p>
   */
  SvmAdminPassword?: string;
}

/**
 * @public
 */
export interface UpdateStorageVirtualMachineResponse {
  /**
   * @public
   * <p>Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuration.</p>
   */
  StorageVirtualMachine?: StorageVirtualMachine;
}

/**
 * @public
 * <p>Updates the SnapLock configuration for an existing FSx for ONTAP volume. </p>
 */
export interface UpdateSnaplockConfiguration {
  /**
   * @public
   * <p>Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default
   *         value is <code>false</code>. If you set <code>AuditLogVolume</code> to <code>true</code>, the SnapLock volume is
   *         created as an audit log volume. The minimum retention period for an audit log volume is six months. </p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-snaplock-works.html#snaplock-audit-log-volume">
   *                 SnapLock audit log volumes</a>. </p>
   */
  AuditLogVolume?: boolean;

  /**
   * @public
   * <p>The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume. </p>
   */
  AutocommitPeriod?: AutocommitPeriod;

  /**
   * @public
   * <p>Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock
   *             Enterprise volume. Enabling privileged delete allows SnapLock administrators to delete write once, read
   *             many (WORM) files even
   *             if they have active retention periods. <code>PERMANENTLY_DISABLED</code> is a terminal state.
   *         If privileged delete is permanently disabled on a SnapLock volume, you can't re-enable it. The default
   *         value is <code>DISABLED</code>. </p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#privileged-delete">Privileged delete</a>. </p>
   */
  PrivilegedDelete?: PrivilegedDelete | string;

  /**
   * @public
   * <p>Specifies the retention period of an FSx for ONTAP SnapLock volume. </p>
   */
  RetentionPeriod?: SnaplockRetentionPeriod;

  /**
   * @public
   * <p>Enables or disables volume-append mode
   *             on an FSx for ONTAP SnapLock volume. Volume-append mode allows you to
   *             create WORM-appendable files and write data to them incrementally. The default value is <code>false</code>. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-append">Volume-append mode</a>. </p>
   */
  VolumeAppendModeEnabled?: boolean;
}

/**
 * @public
 * <p>Used to specify changes to the ONTAP configuration for the volume you are updating.</p>
 */
export interface UpdateOntapVolumeConfiguration {
  /**
   * @public
   * <p>Specifies the location in the SVM's namespace where the volume is mounted.
   *             The <code>JunctionPath</code> must have a leading forward slash, such as <code>/vol3</code>.</p>
   */
  JunctionPath?: string;

  /**
   * @public
   * <p>The security style for the volume, which can be <code>UNIX</code>,
   *             <code>NTFS</code>, or <code>MIXED</code>.</p>
   */
  SecurityStyle?: SecurityStyle | string;

  /**
   * @public
   * <p>Specifies the size of the volume in megabytes.</p>
   */
  SizeInMegabytes?: number;

  /**
   * @public
   * <p>Default is <code>false</code>. Set to true to enable the deduplication,
   *             compression, and compaction storage efficiency features on the volume.</p>
   */
  StorageEfficiencyEnabled?: boolean;

  /**
   * @public
   * <p>Update the volume's data tiering policy.</p>
   */
  TieringPolicy?: TieringPolicy;

  /**
   * @public
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
   * @public
   * <p>A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to
   *             false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups
   *             where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the
   *             specified tags are copied to backups. If you specify one or more tags when creating a user-initiated
   *             backup, no tags are copied from the volume, regardless of this value.</p>
   */
  CopyTagsToBackups?: boolean;

  /**
   * @public
   * <p>The configuration object for updating the SnapLock configuration of an FSx for ONTAP SnapLock volume. </p>
   */
  SnaplockConfiguration?: UpdateSnaplockConfiguration;
}

/**
 * @public
 * <p>Used to specify changes to the OpenZFS configuration for the volume
 *             that you are updating.</p>
 */
export interface UpdateOpenZFSVolumeConfiguration {
  /**
   * @public
   * <p>The amount of storage in gibibytes (GiB) to reserve from the parent volume.
   *             You can't reserve more storage than the parent volume has reserved. You can specify
   *             a value of <code>-1</code> to unset a volume's storage capacity reservation.</p>
   */
  StorageCapacityReservationGiB?: number;

  /**
   * @public
   * <p>The maximum amount of storage in gibibytes (GiB) that the volume can use from its
   *             parent. You can specify a quota larger than the storage on the parent volume. You
   *             can specify a value of <code>-1</code> to unset a volume's storage capacity quota.</p>
   */
  StorageCapacityQuotaGiB?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The configuration object for mounting a Network File System (NFS) file system.</p>
   */
  NfsExports?: OpenZFSNfsExport[];

  /**
   * @public
   * <p>An object specifying how much storage users or groups can use on the volume.</p>
   */
  UserAndGroupQuotas?: OpenZFSUserOrGroupQuota[];

  /**
   * @public
   * <p>A Boolean value indicating whether the volume is read-only.</p>
   */
  ReadOnly?: boolean;
}

/**
 * @public
 */
export interface UpdateVolumeRequest {
  /**
   * @public
   * <p>(Optional) An idempotency token for resource creation, in a string of up to 63
   *             ASCII characters. This token is automatically filled on your behalf when you use the
   *             Command Line Interface (CLI) or an Amazon Web Services SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ID of the volume that you want to update, in the format
   *                 <code>fsvol-0123456789abcdef0</code>.</p>
   */
  VolumeId: string | undefined;

  /**
   * @public
   * <p>The configuration of the ONTAP volume that you are updating.</p>
   */
  OntapConfiguration?: UpdateOntapVolumeConfiguration;

  /**
   * @public
   * <p>The name of the OpenZFS volume. OpenZFS root volumes are automatically named
   *                 <code>FSX</code>. Child volume names must be unique among their parent volume's
   *             children. The name of the volume is part of the mount string for the OpenZFS volume. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The configuration of the OpenZFS volume that you are updating.</p>
   */
  OpenZFSConfiguration?: UpdateOpenZFSVolumeConfiguration;
}

/**
 * @public
 * <p>Describes a specific Amazon FSx administrative action for the current Windows,
 *             Lustre, or OpenZFS file system.</p>
 */
export interface AdministrativeAction {
  /**
   * @public
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
   *                   <code>THROUGHPUT_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code>
   *                     task to increase a file system's throughput capacity has been completed
   *                     successfully, a <code>THROUGHPUT_OPTIMIZATION</code> task starts.</p>
   *                <p>You can track the storage-optimization progress using the
   *                     <code>ProgressPercent</code> property. When
   *                     <code>THROUGHPUT_OPTIMIZATION</code> has been completed successfully, the
   *                     parent <code>FILE_SYSTEM_UPDATE</code> action status changes to
   *                     <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-throughput-capacity.html">Managing
   *                         throughput capacity</a> in the <i>Amazon FSx for Windows
   *                             File Server User Guide</i>.</p>
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
   *                   <code>IOPS_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code>
   *                     task to increase a file system's throughput capacity has been completed
   *                     successfully, a <code>IOPS_OPTIMIZATION</code> task starts.</p>
   *                <p>You can track the storage-optimization progress using the
   *                     <code>ProgressPercent</code> property. When
   *                     <code>IOPS_OPTIMIZATION</code> has been completed successfully, the
   *                     parent <code>FILE_SYSTEM_UPDATE</code> action status changes to
   *                     <code>COMPLETED</code>. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-provisioned-ssd-iops.html">Managing
   *                         provisioned SSD IOPS</a> in the <i>Amazon FSx for Windows
   *                             File Server User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STORAGE_TYPE_OPTIMIZATION</code> - After the <code>FILE_SYSTEM_UPDATE</code>
   *                     task to increase a file system's throughput capacity has been completed
   *                     successfully, a <code>STORAGE_TYPE_OPTIMIZATION</code> task starts.</p>
   *                <p>You can track the storage-optimization progress using the
   *                     <code>ProgressPercent</code> property. When
   *                     <code>STORAGE_TYPE_OPTIMIZATION</code> has been completed successfully, the
   *                     parent <code>FILE_SYSTEM_UPDATE</code> action status changes to
   *                     <code>COMPLETED</code>.</p>
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
   * @public
   * <p>The percentage-complete status of a <code>STORAGE_OPTIMIZATION</code> administrative
   *             action. Does not apply to any other administrative action type.</p>
   */
  ProgressPercent?: number;

  /**
   * @public
   * <p>The time that the administrative action request was received.</p>
   */
  RequestTime?: Date;

  /**
   * @public
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
   * @public
   * <p>Describes the target value for the administration action,
   *             provided in the <code>UpdateFileSystem</code> operation.
   *            Returned for <code>FILE_SYSTEM_UPDATE</code> administrative actions.
   *          </p>
   */
  TargetFileSystemValues?: FileSystem;

  /**
   * @public
   * <p>Provides information about a failed administrative action.</p>
   */
  FailureDetails?: AdministrativeActionFailureDetails;

  /**
   * @public
   * <p>Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS
   *             volume.</p>
   */
  TargetVolumeValues?: Volume;

  /**
   * @public
   * <p>A snapshot of an Amazon FSx for OpenZFS volume.</p>
   */
  TargetSnapshotValues?: Snapshot;
}

/**
 * @public
 * <p>A description of a specific Amazon FSx file system.</p>
 */
export interface FileSystem {
  /**
   * @public
   * <p>The Amazon Web Services account that created the file system. If the file system was created by a
   *             user in IAM Identity Center, the Amazon Web Services account to which the
   *             IAM user belongs is the owner.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The system-generated, unique 17-digit ID of the file system.</p>
   */
  FileSystemId?: string;

  /**
   * @public
   * <p>The type of Amazon FSx file system, which can be <code>LUSTRE</code>,
   *                 <code>WINDOWS</code>, <code>ONTAP</code>, or <code>OPENZFS</code>.</p>
   */
  FileSystemType?: FileSystemType | string;

  /**
   * @public
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
   * @public
   * <p>A structure providing details of any failures that occurred.</p>
   */
  FailureDetails?: FileSystemFailureDetails;

  /**
   * @public
   * <p>The storage capacity of the file system in gibibytes (GiB).</p>
   */
  StorageCapacity?: number;

  /**
   * @public
   * <p>The type of storage the file system is using.
   *             If set to <code>SSD</code>, the file system uses solid state drive storage.
   *             If set to <code>HDD</code>, the file system uses hard disk drive storage.
   *         </p>
   */
  StorageType?: StorageType | string;

  /**
   * @public
   * <p>The ID of the primary virtual private cloud (VPC) for the file system.</p>
   */
  VpcId?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The Domain Name System (DNS) name for the file system.</p>
   */
  DNSName?: string;

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the file system resource.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The tags to associate with the file system. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your
   *                 Amazon EC2 resources</a> in the <i>Amazon EC2 User
   *             Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The configuration for this Amazon FSx for Windows File Server file system.</p>
   */
  WindowsConfiguration?: WindowsFileSystemConfiguration;

  /**
   * @public
   * <p>The configuration for the Amazon FSx for Lustre file system.</p>
   */
  LustreConfiguration?: LustreFileSystemConfiguration;

  /**
   * @public
   * <p>A list of administrative actions for the file system that are in process or waiting to
   *             be processed. Administrative actions describe changes to the Amazon FSx system
   *             that you have initiated using the <code>UpdateFileSystem</code> operation.</p>
   */
  AdministrativeActions?: AdministrativeAction[];

  /**
   * @public
   * <p>The configuration for this Amazon FSx for NetApp ONTAP file system.</p>
   */
  OntapConfiguration?: OntapFileSystemConfiguration;

  /**
   * @public
   * <p>The Lustre version of the Amazon FSx for Lustre file system, either
   *             <code>2.10</code> or <code>2.12</code>.</p>
   */
  FileSystemTypeVersion?: string;

  /**
   * @public
   * <p>The configuration for this Amazon FSx for OpenZFS file system.</p>
   */
  OpenZFSConfiguration?: OpenZFSFileSystemConfiguration;
}

/**
 * @public
 * <p>A snapshot of an Amazon FSx for OpenZFS volume.</p>
 */
export interface Snapshot {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The name of the snapshot.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the volume that the snapshot is of.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   * @public
   * <p>Describes why a resource lifecycle state changed.</p>
   */
  LifecycleTransitionReason?: LifecycleTransitionReason;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A list of administrative actions for the file system that are in process or waiting to
   *             be processed. Administrative actions describe changes to the Amazon FSx
   *             system.</p>
   */
  AdministrativeActions?: AdministrativeAction[];
}

/**
 * @public
 * <p>Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS
 *             volume.</p>
 */
export interface Volume {
  /**
   * @public
   * <p>The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z),
   *             also known as Unix time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId?: string;

  /**
   * @public
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
   * @public
   * <p>The name of the volume.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The configuration of an Amazon FSx for NetApp ONTAP volume.</p>
   */
  OntapConfiguration?: OntapVolumeConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services
   *             resources. We require an ARN when you need to specify a resource unambiguously across
   *             all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *             the <i>Amazon Web Services General Reference</i>.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code> values, with a maximum of 50 elements.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The system-generated, unique ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The type of the volume.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * @public
   * <p>The reason why the volume lifecycle status changed.</p>
   */
  LifecycleTransitionReason?: LifecycleTransitionReason;

  /**
   * @public
   * <p>A list of administrative actions for the volume that are in process or waiting to be processed.
   *             Administrative actions describe changes to the volume that you have initiated using
   *             the <code>UpdateVolume</code> action.</p>
   */
  AdministrativeActions?: AdministrativeAction[];

  /**
   * @public
   * <p>The configuration of an Amazon FSx for OpenZFS volume.</p>
   */
  OpenZFSConfiguration?: OpenZFSVolumeConfiguration;
}

/**
 * @public
 */
export interface RestoreVolumeFromSnapshotResponse {
  /**
   * @public
   * <p>The ID of the volume that you restored.</p>
   */
  VolumeId?: string;

  /**
   * @public
   * <p>The lifecycle state of the volume being restored.</p>
   */
  Lifecycle?: VolumeLifecycle | string;

  /**
   * @public
   * <p>A list of administrative actions for the file system that are in process or waiting to
   *             be processed. Administrative actions describe changes to the Amazon FSx
   *             system.</p>
   */
  AdministrativeActions?: AdministrativeAction[];
}

/**
 * @public
 * <p>The response object for the <code>CreateFileSystemFromBackup</code>
 *             operation.</p>
 */
export interface CreateFileSystemFromBackupResponse {
  /**
   * @public
   * <p>A description of the file system.</p>
   */
  FileSystem?: FileSystem;
}

/**
 * @public
 * <p>The response object returned after the file system is created.</p>
 */
export interface CreateFileSystemResponse {
  /**
   * @public
   * <p>The configuration of the file system that was created.</p>
   */
  FileSystem?: FileSystem;
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * @public
   * <p>A description of the snapshot.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * @public
 */
export interface CreateVolumeFromBackupResponse {
  /**
   * @public
   * <p>Returned after a successful <code>CreateVolumeFromBackup</code> API operation,
   *             describing the volume just created.</p>
   */
  Volume?: Volume;
}

/**
 * @public
 */
export interface CreateVolumeResponse {
  /**
   * @public
   * <p>Returned after a successful <code>CreateVolume</code> API operation, describing the volume just created.</p>
   */
  Volume?: Volume;
}

/**
 * @public
 */
export interface ReleaseFileSystemNfsV3LocksResponse {
  /**
   * @public
   * <p>A description of a specific Amazon FSx file system.</p>
   */
  FileSystem?: FileSystem;
}

/**
 * @public
 * <p>The response object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemResponse {
  /**
   * @public
   * <p>A description of the file system that was updated.</p>
   */
  FileSystem?: FileSystem;
}

/**
 * @public
 */
export interface UpdateSnapshotResponse {
  /**
   * @public
   * <p>Returned after a successful <code>UpdateSnapshot</code> operation, describing the
   *             snapshot that you updated.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * @public
 */
export interface UpdateVolumeResponse {
  /**
   * @public
   * <p>A description of the volume just updated. Returned after a successful
   *                 <code>UpdateVolume</code> API operation.</p>
   */
  Volume?: Volume;
}

/**
 * @public
 * <p>The response object for <code>DescribeFileSystems</code> operation.</p>
 */
export interface DescribeFileSystemsResponse {
  /**
   * @public
   * <p>An array of file system descriptions.</p>
   */
  FileSystems?: FileSystem[];

  /**
   * @public
   * <p>Present if there are more file systems than returned in the response (String). You
   *             can use the <code>NextToken</code> value in the later request to fetch the
   *             descriptions. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSnapshotsResponse {
  /**
   * @public
   * <p>An array of snapshots.</p>
   */
  Snapshots?: Snapshot[];

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeVolumesResponse {
  /**
   * @public
   * <p>Returned after a successful <code>DescribeVolumes</code> operation, describing each volume.</p>
   */
  Volumes?: Volume[];

  /**
   * @public
   * <p>(Optional) Opaque pagination token returned from a previous operation (String). If
   *             present, this token indicates from what point you can continue processing the request, where
   *             the previous <code>NextToken</code> value left off.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A backup of an Amazon FSx for Windows File Server, Amazon FSx for
 *             Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx
 *             for OpenZFS file system.</p>
 */
export interface Backup {
  /**
   * @public
   * <p>The ID of the backup.</p>
   */
  BackupId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Details explaining any failures that occurred when creating a backup.</p>
   */
  FailureDetails?: BackupFailureDetails;

  /**
   * @public
   * <p>The type of the file-system backup.</p>
   */
  Type: BackupType | string | undefined;

  /**
   * @public
   * <p>Displays the current percent of progress of an asynchronous task.</p>
   */
  ProgressPercent?: number;

  /**
   * @public
   * <p>The time when a particular backup was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The ID of the Key Management Service (KMS) key used to encrypt the
   *             backup of the Amazon FSx file system's data at rest. </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the backup resource.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The tags associated with a particular file system.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The metadata of the file system associated with the backup. This metadata is persisted
   *             even if the file system is deleted.</p>
   */
  FileSystem: FileSystem | undefined;

  /**
   * @public
   * <p>The configuration of the self-managed Microsoft Active Directory directory to which
   *             the Windows File Server instance is joined.</p>
   */
  DirectoryInformation?: ActiveDirectoryBackupAttributes;

  /**
   * @public
   * <p>An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon
   *             Resource Names (ARNs) for resources.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>The ID of the source backup. Specifies the backup that you are copying.</p>
   */
  SourceBackupId?: string;

  /**
   * @public
   * <p>The source Region of the backup. Specifies the Region from where this backup
   *             is copied.</p>
   */
  SourceBackupRegion?: string;

  /**
   * @public
   * <p>Specifies the resource type that's backed up.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * @public
   * <p>Describes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS
   *             volume.</p>
   */
  Volume?: Volume;
}

/**
 * @public
 */
export interface CopyBackupResponse {
  /**
   * @public
   * <p>A backup of an Amazon FSx for Windows File Server, Amazon FSx for
   *             Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx
   *             for OpenZFS file system.</p>
   */
  Backup?: Backup;
}

/**
 * @public
 * <p>The response object for the <code>CreateBackup</code> operation.</p>
 */
export interface CreateBackupResponse {
  /**
   * @public
   * <p>A description of the backup.</p>
   */
  Backup?: Backup;
}

/**
 * @public
 * <p>Response object for the <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsResponse {
  /**
   * @public
   * <p>An array of backups.</p>
   */
  Backups?: Backup[];

  /**
   * @public
   * <p>A <code>NextToken</code> value is present if there are more backups than returned in
   *             the response. You can use the <code>NextToken</code> value in the subsequent request to
   *             fetch the backups. </p>
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const OntapFileSystemConfigurationFilterSensitiveLog = (obj: OntapFileSystemConfiguration): any => ({
  ...obj,
  ...(obj.FsxAdminPassword && { FsxAdminPassword: SENSITIVE_STRING }),
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
export const UpdateFileSystemOntapConfigurationFilterSensitiveLog = (obj: UpdateFileSystemOntapConfiguration): any => ({
  ...obj,
  ...(obj.FsxAdminPassword && { FsxAdminPassword: SENSITIVE_STRING }),
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
export const AdministrativeActionFilterSensitiveLog = (obj: AdministrativeAction): any => ({
  ...obj,
  ...(obj.TargetFileSystemValues && {
    TargetFileSystemValues: FileSystemFilterSensitiveLog(obj.TargetFileSystemValues),
  }),
});

/**
 * @internal
 */
export const FileSystemFilterSensitiveLog = (obj: FileSystem): any => ({
  ...obj,
  ...(obj.AdministrativeActions && {
    AdministrativeActions: obj.AdministrativeActions.map((item) => AdministrativeActionFilterSensitiveLog(item)),
  }),
  ...(obj.OntapConfiguration && {
    OntapConfiguration: OntapFileSystemConfigurationFilterSensitiveLog(obj.OntapConfiguration),
  }),
});

/**
 * @internal
 */
export const SnapshotFilterSensitiveLog = (obj: Snapshot): any => ({
  ...obj,
  ...(obj.AdministrativeActions && {
    AdministrativeActions: obj.AdministrativeActions.map((item) => AdministrativeActionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const VolumeFilterSensitiveLog = (obj: Volume): any => ({
  ...obj,
  ...(obj.AdministrativeActions && {
    AdministrativeActions: obj.AdministrativeActions.map((item) => AdministrativeActionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RestoreVolumeFromSnapshotResponseFilterSensitiveLog = (obj: RestoreVolumeFromSnapshotResponse): any => ({
  ...obj,
  ...(obj.AdministrativeActions && {
    AdministrativeActions: obj.AdministrativeActions.map((item) => AdministrativeActionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateFileSystemFromBackupResponseFilterSensitiveLog = (obj: CreateFileSystemFromBackupResponse): any => ({
  ...obj,
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
});

/**
 * @internal
 */
export const CreateFileSystemResponseFilterSensitiveLog = (obj: CreateFileSystemResponse): any => ({
  ...obj,
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
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
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
});

/**
 * @internal
 */
export const UpdateFileSystemResponseFilterSensitiveLog = (obj: UpdateFileSystemResponse): any => ({
  ...obj,
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
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
  ...(obj.FileSystems && { FileSystems: obj.FileSystems.map((item) => FileSystemFilterSensitiveLog(item)) }),
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
  ...(obj.FileSystem && { FileSystem: FileSystemFilterSensitiveLog(obj.FileSystem) }),
});

/**
 * @internal
 */
export const CopyBackupResponseFilterSensitiveLog = (obj: CopyBackupResponse): any => ({
  ...obj,
  ...(obj.Backup && { Backup: BackupFilterSensitiveLog(obj.Backup) }),
});

/**
 * @internal
 */
export const CreateBackupResponseFilterSensitiveLog = (obj: CreateBackupResponse): any => ({
  ...obj,
  ...(obj.Backup && { Backup: BackupFilterSensitiveLog(obj.Backup) }),
});

/**
 * @internal
 */
export const DescribeBackupsResponseFilterSensitiveLog = (obj: DescribeBackupsResponse): any => ({
  ...obj,
  ...(obj.Backups && { Backups: obj.Backups.map((item) => BackupFilterSensitiveLog(item)) }),
});
